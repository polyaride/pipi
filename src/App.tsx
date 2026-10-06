import { useState } from 'react'
import HeartScene, { type ColorPick, type GestureMode } from './HeartScene'
import './App.css'

const labels: Record<string, string> = {
  fist: 'Кулак сжимает сердце',
  open: 'Ладонь разбрасывает частицы',
  none: 'Покажите руку или нажмите «Собрать»',
}

const swatches = [
  { name: 'розовый', hue: 0.94, sat: 0.72, color: '#ff6d93' },
  { name: 'красный', hue: 0.99, sat: 0.86, color: '#ff3355' },
  { name: 'золотой', hue: 0.12, sat: 0.85, color: '#ffc14d' },
  { name: 'голубой', hue: 0.54, sat: 0.7, color: '#67d4ff' },
  { name: 'фиолетовый', hue: 0.78, sat: 0.75, color: '#b06bff' },
  { name: 'белый', hue: 0, sat: 0.05, color: '#fff4f7' },
]

export default function App() {
  const [started, setStarted] = useState(false)
  const [mode, setMode] = useState<GestureMode>('auto')
  const [gesture, setGesture] = useState<'fist' | 'open' | 'none'>('none')
  const [hands, setHands] = useState(0)
  const [colorName, setColorName] = useState('розовый')
  const [cameraError, setCameraError] = useState('')
  const [picked, setPicked] = useState<ColorPick | null>(null)

  const pick = (hue: number, sat: number) => {
    setPicked({ hue, sat, token: Date.now() })
  }

  return (
    <div className="app">
      {started && (
        <HeartScene
          mode={mode}
          picked={picked}
          onStatus={(status) => {
            setGesture(status.gesture)
            setHands(status.hands)
            setColorName(status.colorName)
          }}
          onCameraError={setCameraError}
        />
      )}

      {started && (
        <div className="hud">
          <div className="brand">СЕРДЦЕ</div>
          <div className="hud-bottom">
            <div className="status">{labels[gesture]}</div>
            <p className="hint">
              {hands > 1
                ? 'Вторая рука меняет цвет · первая крутит сердце на 360°'
                : 'Кулак сжимает · ладонь разбрасывает · ведите рукой или мышью вокруг'}
            </p>
            <p className="hint">Цвет: {colorName}. Скажите «синий», «золотой» или выберите точку.</p>
            {cameraError && <p className="camera-note">{cameraError}</p>}
            <div className="swatches">
              {swatches.map((swatch) => (
                <button
                  key={swatch.name}
                  type="button"
                  className="swatch"
                  style={{ background: swatch.color }}
                  aria-label={swatch.name}
                  onClick={() => pick(swatch.hue, swatch.sat)}
                />
              ))}
            </div>
            <div className="controls">
              <button className={mode === 'auto' ? 'mode-button active' : 'mode-button'} onClick={() => setMode('auto')} type="button">
                Камера
              </button>
              <button className={mode === 'fist' ? 'mode-button active' : 'mode-button'} onClick={() => setMode('fist')} type="button">
                Собрать
              </button>
              <button className={mode === 'open' ? 'mode-button active' : 'mode-button'} onClick={() => setMode('open')} type="button">
                Разлёт
              </button>
            </div>
          </div>
        </div>
      )}

      {!started && (
        <div className="start-screen">
          <div className="start-content">
            <div className="heart-icon">♥</div>
            <h1>СЕРДЦЕ</h1>
            <p className="lead">Кулак собирает и сжимает сердце. Открытая ладонь отпускает частицы.</p>
            <p className="sub">Ведите рукой, чтобы облететь его со всех сторон. Вторая рука или слово «синий», «золотой», «фиолетовый» меняет цвет. Голос усиливает пульс.</p>
            <button className="start-button" type="button" onClick={() => setStarted(true)}>
              Начать
            </button>
            <p className="disclaimer">Камера и микрофон остаются в браузере и никуда не отправляются</p>
          </div>
        </div>
      )}
    </div>
  )
}
