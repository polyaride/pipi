import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { Hands, type Results } from '@mediapipe/hands'
import { Camera } from '@mediapipe/camera_utils'

export type GestureMode = 'auto' | 'fist' | 'open'

export type ColorPick = {
  hue: number
  sat: number
  token: number
}

type Status = {
  gesture: 'fist' | 'open' | 'none'
  handSeen: boolean
  hands: number
  colorName: string
}

type Props = {
  mode: GestureMode
  picked: ColorPick | null
  onStatus: (status: Status) => void
  onCameraError: (message: string) => void
}

type Landmark = { x: number; y: number; z: number }

const SHELL = 5400
const CORE = 2100
const COUNT = SHELL + CORE
const FLASH = 360

const COLOR_NAMES: Array<[number, string]> = [
  [0.0, 'красный'],
  [0.07, 'оранжевый'],
  [0.12, 'золотой'],
  [0.34, 'зелёный'],
  [0.52, 'голубой'],
  [0.64, 'синий'],
  [0.78, 'фиолетовый'],
  [0.94, 'розовый'],
]

function samplePoint(surface: boolean) {
  const angle = Math.random() * Math.PI * 2
  let x = 16 * Math.sin(angle) ** 3
  let y = 13 * Math.cos(angle) - 5 * Math.cos(2 * angle) - 2 * Math.cos(3 * angle) - Math.cos(4 * angle)
  const radial = surface ? 0.9 + Math.random() * 0.1 : Math.random() ** 0.65 * 0.92
  x *= radial
  y *= radial
  if (!surface) y -= 0.8 * (1 - radial)
  const thickness = surface ? 1.1 + Math.random() * 1.5 : 1 + Math.random() * 6
  const z = (Math.random() - 0.5) * thickness * (0.35 + radial * 0.4)
  const scale = 0.21
  return { x: x * scale, y: y * scale + 0.15, z: z * scale, radial }
}

function makeTargets() {
  const heart = new Float32Array(COUNT * 3)
  const scatter = new Float32Array(COUNT * 3)
  const shade = new Float32Array(COUNT)
  const size = new Float32Array(COUNT)
  const glow = new Float32Array(COUNT)

  for (let i = 0; i < COUNT; i++) {
    const surface = i < SHELL
    const point = samplePoint(surface)
    heart[i * 3] = point.x
    heart[i * 3 + 1] = point.y
    heart[i * 3 + 2] = point.z

    const radius = 6 + Math.random() * 10
    const theta = Math.random() * Math.PI * 2
    const phi = Math.acos(2 * Math.random() - 1)
    scatter[i * 3] = radius * Math.sin(phi) * Math.cos(theta)
    scatter[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
    scatter[i * 3 + 2] = radius * Math.cos(phi)

    const halo = surface && Math.random() < 0.04
    shade[i] = surface ? 0.58 + point.radial * 0.32 : 0.32 + point.radial * 0.4
    size[i] = halo ? 1.15 : surface ? 0.46 + Math.random() * 0.28 : 0.4 + Math.random() * 0.32
    glow[i] = halo ? 1 : 0
  }

  return { heart, scatter, shade, size, glow }
}

function handShape(landmarks: Landmark[]) {
  const wrist = landmarks[0]
  const tips = [landmarks[8], landmarks[12], landmarks[16], landmarks[20]]
  const knuckles = [landmarks[5], landmarks[9], landmarks[13], landmarks[17]]
  let folded = 0
  for (let i = 0; i < 4; i++) {
    const tipDistance = Math.hypot(tips[i].x - wrist.x, tips[i].y - wrist.y)
    const knuckleDistance = Math.hypot(knuckles[i].x - wrist.x, knuckles[i].y - wrist.y)
    if (tipDistance < knuckleDistance * 1.12) folded += 1
  }
  return { gesture: folded >= 3 ? 'fist' as const : 'open' as const, closed: folded / 4 }
}

function colorName(hue: number, sat: number) {
  if (sat < 0.2) return 'белый'
  let best = COLOR_NAMES[0]
  let bestDist = 1
  for (const entry of COLOR_NAMES) {
    const dist = Math.min(Math.abs(entry[0] - hue), 1 - Math.abs(entry[0] - hue))
    if (dist < bestDist) {
      best = entry
      bestDist = dist
    }
  }
  return best[1]
}

function matchSpokenColor(text: string) {
  const phrase = text.toLowerCase()
  if (phrase.includes('бел')) return { hue: 0, sat: 0.05 }
  if (phrase.includes('розов')) return { hue: 0.94, sat: 0.72 }
  if (phrase.includes('крас')) return { hue: 0.99, sat: 0.86 }
  if (phrase.includes('оранж')) return { hue: 0.07, sat: 0.9 }
  if (phrase.includes('золот') || phrase.includes('жёлт') || phrase.includes('желт')) return { hue: 0.13, sat: 0.85 }
  if (phrase.includes('зелен') || phrase.includes('зелён')) return { hue: 0.34, sat: 0.75 }
  if (phrase.includes('голуб')) return { hue: 0.52, sat: 0.7 }
  if (phrase.includes('син')) return { hue: 0.64, sat: 0.8 }
  if (phrase.includes('фиол')) return { hue: 0.78, sat: 0.75 }
  return null
}

const vertexShader = `
  attribute float aShade;
  attribute float aSize;
  attribute float aGlow;
  varying float vShade;
  varying float vGlow;
  uniform float uScale;
  void main() {
    vShade = aShade;
    vGlow = aGlow;
    vec4 viewPosition = modelViewMatrix * vec4(position, 1.0);
    gl_PointSize = aSize * uScale * (320.0 / max(1.0, -viewPosition.z));
    gl_Position = projectionMatrix * viewPosition;
  }
`

const fragmentShader = `
  precision mediump float;
  varying float vShade;
  varying float vGlow;
  uniform float uHue;
  uniform float uSat;
  vec3 hsl2rgb(float h, float s, float l) {
    float c = (1.0 - abs(2.0 * l - 1.0)) * s;
    float hp = mod(h, 1.0) * 6.0;
    float x = c * (1.0 - abs(mod(hp, 2.0) - 1.0));
    vec3 rgb = hp < 1.0 ? vec3(c, x, 0.0)
      : hp < 2.0 ? vec3(x, c, 0.0)
      : hp < 3.0 ? vec3(0.0, c, x)
      : hp < 4.0 ? vec3(0.0, x, c)
      : hp < 5.0 ? vec3(x, 0.0, c)
      : vec3(c, 0.0, x);
    return rgb + (l - 0.5 * c);
  }
  void main() {
    vec2 uv = gl_PointCoord - vec2(0.5);
    float dist = length(uv);
    if (dist > 0.5) discard;
    float soft = smoothstep(0.5, 0.0, dist);
    float light = mix(0.32, 0.58, vShade);
    vec3 color = hsl2rgb(uHue, uSat, light);
    float alpha = soft * mix(0.4, 0.82, vShade) * mix(1.0, 0.45, vGlow);
    gl_FragColor = vec4(color, alpha);
  }
`

export default function HeartScene({ mode, picked, onStatus, onCameraError }: Props) {
  const hostRef = useRef<HTMLDivElement>(null)
  const modeRef = useRef(mode)
  const pickedRef = useRef(picked)
  const onStatusRef = useRef(onStatus)
  const onCameraErrorRef = useRef(onCameraError)

  modeRef.current = mode
  pickedRef.current = picked
  onStatusRef.current = onStatus
  onCameraErrorRef.current = onCameraError

  useEffect(() => {
    const host = hostRef.current
    if (!host) return
    let stopped = false

    const { heart, scatter, shade, size, glow } = makeTargets()
    const positions = scatter.slice()
    const velocity = new Float32Array(COUNT * 3)

    const scene = new THREE.Scene()
    scene.background = new THREE.Color('#07040a')
    scene.fog = new THREE.FogExp2('#07040a', 0.035)

    const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100)
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    host.appendChild(renderer.domElement)

    const geometry = new THREE.BufferGeometry()
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    geometry.setAttribute('aShade', new THREE.BufferAttribute(shade, 1))
    geometry.setAttribute('aSize', new THREE.BufferAttribute(size, 1))
    geometry.setAttribute('aGlow', new THREE.BufferAttribute(glow, 1))
    const material = new THREE.ShaderMaterial({
      uniforms: {
        uHue: { value: 0.96 },
        uSat: { value: 0.78 },
        uScale: { value: 1 },
      },
      vertexShader,
      fragmentShader,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    })
    scene.add(new THREE.Points(geometry, material))

    const flashPositions = new Float32Array(FLASH * 3)
    const flashVelocity = new Float32Array(FLASH * 3)
    const flashGeometry = new THREE.BufferGeometry()
    flashGeometry.setAttribute('position', new THREE.BufferAttribute(flashPositions, 3))
    const flashMaterial = new THREE.PointsMaterial({
      color: new THREE.Color('#ffd5e4'),
      size: 0.18,
      transparent: true,
      opacity: 0,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true,
    })
    scene.add(new THREE.Points(flashGeometry, flashMaterial))

    let theta = 0.2
    let phi = 1.28
    let radius = 13
    let orbit = 0.2
    let targetPhi = phi
    let targetRadius = radius
    let formed = 0
    let squeeze = 0
    let flash = 0
    let hue = 0.96
    let hueTarget = 0.96
    let sat = 0.78
    let satTarget = 0.78
    let voiceLevel = 0
    let gesture: 'fist' | 'open' | 'none' = 'none'
    let closed = 0
    let handCount = 0
    let previousGesture: 'fist' | 'open' | 'none' = 'none'
    let dragging = false
    let lastX = 0
    let lastY = 0
    let lastPalm: { x: number; y: number } | null = null
    let appliedPick = -1
    let frame = 0
    let tick = 0
    let audioContext: AudioContext | null = null
    let audioStream: MediaStream | null = null
    let analyser: AnalyserNode | null = null
    const voiceBins = new Uint8Array(128)

    const video = document.createElement('video')
    video.playsInline = true
    video.muted = true
    video.autoplay = true
    video.style.cssText = 'position:absolute;width:1px;height:1px;opacity:0;pointer-events:none;'
    host.appendChild(video)

    const hands = new Hands({
      locateFile: (file) => `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`,
    })
    hands.setOptions({
      maxNumHands: 2,
      modelComplexity: 1,
      minDetectionConfidence: 0.65,
      minTrackingConfidence: 0.5,
    })

    hands.onResults((results: Results) => {
      const list = (results.multiHandLandmarks ?? []) as Landmark[][]
      handCount = list.length
      if (!list.length) {
        gesture = 'none'
        closed = 0
        lastPalm = null
        return
      }
      const shape = handShape(list[0])
      gesture = shape.gesture
      closed = shape.closed
      const palm = list[0][9]
      if (lastPalm) {
        orbit -= (palm.x - lastPalm.x) * 8
        targetPhi = THREE.MathUtils.clamp(targetPhi + (palm.y - lastPalm.y) * 2.6, 0.15, Math.PI - 0.15)
      }
      lastPalm = { x: palm.x, y: palm.y }
      const pinch = Math.hypot(list[0][8].x - list[0][4].x, list[0][8].y - list[0][4].y)
      if (pinch < 0.11 && shape.gesture === 'open') {
        targetRadius = THREE.MathUtils.clamp(5.5 + pinch * 95, 5.5, 18)
      }
      if (list[1]) {
        hueTarget = 1 - list[1][9].x
        satTarget = 0.8
      }
    })

    const webcam = new Camera(video, {
      onFrame: async () => {
        if (!stopped && video.readyState >= 2) await hands.send({ image: video })
      },
      width: 640,
      height: 480,
    })
    webcam.start().catch(() => {
      onCameraErrorRef.current('Камера недоступна. Соберите сердце кнопкой или мышкой.')
    })

    navigator.mediaDevices
      ?.getUserMedia({ audio: true })
      .then((stream) => {
        if (stopped) {
          stream.getTracks().forEach((track) => track.stop())
          return
        }
        audioStream = stream
        audioContext = new AudioContext()
        analyser = audioContext.createAnalyser()
        analyser.fftSize = 256
        audioContext.createMediaStreamSource(stream).connect(analyser)
      })
      .catch(() => {})

    type SpeechRec = {
      lang: string
      continuous: boolean
      interimResults: boolean
      onresult: ((event: { resultIndex: number; results: ArrayLike<ArrayLike<{ transcript: string }>> }) => void) | null
      onend: (() => void) | null
      start: () => void
      stop: () => void
    }
    const speechWindow = window as Window & {
      SpeechRecognition?: new () => SpeechRec
      webkitSpeechRecognition?: new () => SpeechRec
    }
    const SpeechCtor = speechWindow.SpeechRecognition || speechWindow.webkitSpeechRecognition
    let recognition: SpeechRec | null = null
    if (SpeechCtor) {
      recognition = new SpeechCtor()
      recognition.lang = 'ru-RU'
      recognition.continuous = true
      recognition.interimResults = true
      recognition.onresult = (event) => {
        const last = event.results[event.results.length - 1]
        const finalResult = last as ArrayLike<{ transcript: string }> & { isFinal?: boolean }
        if (!finalResult.isFinal) return
        const spoken = matchSpokenColor(finalResult[0]?.transcript ?? '')
        if (!spoken) return
        hueTarget = spoken.hue
        satTarget = spoken.sat
      }
      recognition.onend = () => {
        if (!stopped) {
          try {
            recognition?.start()
          } catch {
            /* already running */
          }
        }
      }
      try {
        recognition.start()
      } catch {
        recognition = null
      }
    }

    const resize = () => {
      const width = host.clientWidth || window.innerWidth
      const height = host.clientHeight || window.innerHeight
      camera.aspect = width / Math.max(height, 1)
      camera.updateProjectionMatrix()
      renderer.setSize(width, height, false)
    }
    resize()

    const onPointerDown = (event: PointerEvent) => {
      if ((event.target as HTMLElement).closest('button')) return
      dragging = true
      lastX = event.clientX
      lastY = event.clientY
    }
    const onPointerMove = (event: PointerEvent) => {
      if (!dragging) return
      orbit -= (event.clientX - lastX) * 0.01
      targetPhi = THREE.MathUtils.clamp(targetPhi + (event.clientY - lastY) * 0.008, 0.15, Math.PI - 0.15)
      lastX = event.clientX
      lastY = event.clientY
    }
    const onPointerUp = () => {
      dragging = false
    }
    const onWheel = (event: WheelEvent) => {
      event.preventDefault()
      targetRadius = THREE.MathUtils.clamp(targetRadius + event.deltaY * 0.012, 5.5, 20)
    }

    host.addEventListener('pointerdown', onPointerDown)
    window.addEventListener('pointermove', onPointerMove)
    window.addEventListener('pointerup', onPointerUp)
    host.addEventListener('wheel', onWheel, { passive: false })
    window.addEventListener('resize', resize)

    const clock = new THREE.Clock()
    const loop = () => {
      frame = requestAnimationFrame(loop)
      const time = clock.getElapsedTime()
      const pick = pickedRef.current
      if (pick && pick.token !== appliedPick) {
        appliedPick = pick.token
        hueTarget = pick.hue
        satTarget = pick.sat
      }

      if (analyser) {
        analyser.getByteTimeDomainData(voiceBins)
        let energy = 0
        for (let i = 0; i < voiceBins.length; i++) {
          const sample = (voiceBins[i] - 128) / 128
          energy += sample * sample
        }
        voiceLevel += (Math.min(1, Math.sqrt(energy / voiceBins.length) * 3.2) - voiceLevel) * 0.2
      }

      const manual = modeRef.current
      const active = manual === 'auto' ? gesture : manual
      const forming = active === 'fist'

      if (active !== previousGesture) {
        if (active === 'open' && previousGesture === 'fist') {
          flash = 1
          flashMaterial.color.setHSL(hue, sat, 0.72)
          for (let i = 0; i < FLASH; i++) {
            const speed = 0.28 + Math.random() * 0.7
            const yaw = Math.random() * Math.PI * 2
            const pitch = Math.acos(2 * Math.random() - 1)
            flashPositions[i * 3] = (Math.random() - 0.5) * 0.6
            flashPositions[i * 3 + 1] = (Math.random() - 0.5) * 0.6
            flashPositions[i * 3 + 2] = (Math.random() - 0.5) * 0.6
            flashVelocity[i * 3] = speed * Math.sin(pitch) * Math.cos(yaw)
            flashVelocity[i * 3 + 1] = speed * Math.sin(pitch) * Math.sin(yaw)
            flashVelocity[i * 3 + 2] = speed * Math.cos(pitch)
          }
        }
        previousGesture = active
      }

      formed += ((forming ? 1 : 0) - formed) * 0.05
      squeeze += (((forming ? 0.28 + closed * 0.55 : 0) - squeeze) * 0.08)
      flash *= 0.9
      flashMaterial.opacity = flash * 0.85
      const flashArray = flashGeometry.attributes.position.array as Float32Array
      for (let i = 0; i < FLASH; i++) {
        flashArray[i * 3] += flashVelocity[i * 3]
        flashArray[i * 3 + 1] += flashVelocity[i * 3 + 1]
        flashArray[i * 3 + 2] += flashVelocity[i * 3 + 2]
        flashVelocity[i * 3] *= 0.965
        flashVelocity[i * 3 + 1] *= 0.965
        flashVelocity[i * 3 + 2] *= 0.965
      }
      flashGeometry.attributes.position.needsUpdate = true

      if (!dragging && handCount === 0) orbit += 0.0018
      theta += (orbit - theta) * 0.08
      phi += (targetPhi - phi) * 0.08
      radius += (targetRadius - radius) * 0.08
      camera.position.set(
        radius * Math.sin(phi) * Math.sin(theta),
        radius * Math.cos(phi),
        radius * Math.sin(phi) * Math.cos(theta),
      )
      camera.lookAt(0, 0.2, 0)

      hue += (hueTarget - hue) * 0.08
      sat += (satTarget - sat) * 0.08
      material.uniforms.uHue.value = hue
      material.uniforms.uSat.value = sat

      const beat = forming ? 1 + Math.sin(time * (2.6 + voiceLevel * 7)) * (0.035 + squeeze * 0.05 + voiceLevel * 0.1) : 1
      const heartScale = (1 - squeeze * 0.34) * beat
      material.uniforms.uScale.value = 0.85 + formed * 0.35 + voiceLevel * 0.4
      const follow = forming ? 0.09 : 0.025

      for (let i = 0; i < COUNT; i++) {
        const index = i * 3
        const homeX = forming ? heart[index] * heartScale : scatter[index]
        const homeY = forming ? heart[index + 1] * heartScale : scatter[index + 1]
        const homeZ = forming ? heart[index + 2] * heartScale : scatter[index + 2]
        if (!forming) {
          velocity[index] += (Math.random() - 0.5) * 0.012
          velocity[index + 1] += (Math.random() - 0.5) * 0.012
          velocity[index + 2] += (Math.random() - 0.5) * 0.012
          velocity[index] *= 0.94
          velocity[index + 1] *= 0.94
          velocity[index + 2] *= 0.94
          positions[index] += velocity[index]
          positions[index + 1] += velocity[index + 1]
          positions[index + 2] += velocity[index + 2]
        }
        positions[index] += (homeX - positions[index]) * follow
        positions[index + 1] += (homeY - positions[index + 1]) * follow
        positions[index + 2] += (homeZ - positions[index + 2]) * follow
      }
      geometry.attributes.position.needsUpdate = true

      tick += 1
      if (tick % 10 === 0) {
        onStatusRef.current({
          gesture: active,
          handSeen: gesture !== 'none',
          hands: handCount,
          colorName: colorName(hue, sat),
        })
      }

      renderer.render(scene, camera)
    }
    loop()

    return () => {
      stopped = true
      cancelAnimationFrame(frame)
      host.removeEventListener('pointerdown', onPointerDown)
      window.removeEventListener('pointermove', onPointerMove)
      window.removeEventListener('pointerup', onPointerUp)
      host.removeEventListener('wheel', onWheel)
      window.removeEventListener('resize', resize)
      try {
        recognition?.stop()
      } catch {
        /* recognition may already be closed */
      }
      audioStream?.getTracks().forEach((track) => track.stop())
      audioContext?.close()
      webcam.stop()
      hands.close()
      geometry.dispose()
      flashGeometry.dispose()
      material.dispose()
      flashMaterial.dispose()
      renderer.dispose()
      renderer.domElement.remove()
      video.remove()
    }
  }, [])

  return <div className="scene" ref={hostRef} />
}
