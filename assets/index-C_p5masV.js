(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))s(u);new MutationObserver(u=>{for(const h of u)if(h.type==="childList")for(const p of h.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&s(p)}).observe(document,{childList:!0,subtree:!0});function a(u){const h={};return u.integrity&&(h.integrity=u.integrity),u.referrerPolicy&&(h.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?h.credentials="include":u.crossOrigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function s(u){if(u.ep)return;u.ep=!0;const h=a(u);fetch(u.href,h)}})();var w_=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},np={exports:{}},hu={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var D_;function OM(){if(D_)return hu;D_=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function a(s,u,h){var p=null;if(h!==void 0&&(p=""+h),u.key!==void 0&&(p=""+u.key),"key"in u){h={};for(var d in u)d!=="key"&&(h[d]=u[d])}else h=u;return u=h.ref,{$$typeof:o,type:s,key:p,ref:u!==void 0?u:null,props:h}}return hu.Fragment=e,hu.jsx=a,hu.jsxs=a,hu}var U_;function PM(){return U_||(U_=1,np.exports=OM()),np.exports}var _n=PM(),ip={exports:{}},du={},ap={exports:{}},rp={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var N_;function zM(){return N_||(N_=1,(function(o){function e(Q,ht){var at=Q.length;Q.push(ht);t:for(;0<at;){var wt=at-1>>>1,Nt=Q[wt];if(0<u(Nt,ht))Q[wt]=ht,Q[at]=Nt,at=wt;else break t}}function a(Q){return Q.length===0?null:Q[0]}function s(Q){if(Q.length===0)return null;var ht=Q[0],at=Q.pop();if(at!==ht){Q[0]=at;t:for(var wt=0,Nt=Q.length,Jt=Nt>>>1;wt<Jt;){var pe=2*(wt+1)-1,be=Q[pe],U=pe+1,J=Q[U];if(0>u(be,at))U<Nt&&0>u(J,be)?(Q[wt]=J,Q[U]=at,wt=U):(Q[wt]=be,Q[pe]=at,wt=pe);else if(U<Nt&&0>u(J,at))Q[wt]=J,Q[U]=at,wt=U;else break t}}return ht}function u(Q,ht){var at=Q.sortIndex-ht.sortIndex;return at!==0?at:Q.id-ht.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var h=performance;o.unstable_now=function(){return h.now()}}else{var p=Date,d=p.now();o.unstable_now=function(){return p.now()-d}}var g=[],y=[],x=1,_=null,E=3,A=!1,w=!1,L=!1,T=!1,M=typeof setTimeout=="function"?setTimeout:null,X=typeof clearTimeout=="function"?clearTimeout:null,G=typeof setImmediate<"u"?setImmediate:null;function O(Q){for(var ht=a(y);ht!==null;){if(ht.callback===null)s(y);else if(ht.startTime<=Q)s(y),ht.sortIndex=ht.expirationTime,e(g,ht);else break;ht=a(y)}}function ft(Q){if(L=!1,O(Q),!w)if(a(g)!==null)w=!0,Z||(Z=!0,yt());else{var ht=a(y);ht!==null&&gt(ft,ht.startTime-Q)}}var Z=!1,V=-1,q=5,P=-1;function N(){return T?!0:!(o.unstable_now()-P<q)}function k(){if(T=!1,Z){var Q=o.unstable_now();P=Q;var ht=!0;try{t:{w=!1,L&&(L=!1,X(V),V=-1),A=!0;var at=E;try{e:{for(O(Q),_=a(g);_!==null&&!(_.expirationTime>Q&&N());){var wt=_.callback;if(typeof wt=="function"){_.callback=null,E=_.priorityLevel;var Nt=wt(_.expirationTime<=Q);if(Q=o.unstable_now(),typeof Nt=="function"){_.callback=Nt,O(Q),ht=!0;break e}_===a(g)&&s(g),O(Q)}else s(g);_=a(g)}if(_!==null)ht=!0;else{var Jt=a(y);Jt!==null&&gt(ft,Jt.startTime-Q),ht=!1}}break t}finally{_=null,E=at,A=!1}ht=void 0}}finally{ht?yt():Z=!1}}}var yt;if(typeof G=="function")yt=function(){G(k)};else if(typeof MessageChannel<"u"){var dt=new MessageChannel,Rt=dt.port2;dt.port1.onmessage=k,yt=function(){Rt.postMessage(null)}}else yt=function(){M(k,0)};function gt(Q,ht){V=M(function(){Q(o.unstable_now())},ht)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(Q){Q.callback=null},o.unstable_forceFrameRate=function(Q){0>Q||125<Q?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):q=0<Q?Math.floor(1e3/Q):5},o.unstable_getCurrentPriorityLevel=function(){return E},o.unstable_next=function(Q){switch(E){case 1:case 2:case 3:var ht=3;break;default:ht=E}var at=E;E=ht;try{return Q()}finally{E=at}},o.unstable_requestPaint=function(){T=!0},o.unstable_runWithPriority=function(Q,ht){switch(Q){case 1:case 2:case 3:case 4:case 5:break;default:Q=3}var at=E;E=Q;try{return ht()}finally{E=at}},o.unstable_scheduleCallback=function(Q,ht,at){var wt=o.unstable_now();switch(typeof at=="object"&&at!==null?(at=at.delay,at=typeof at=="number"&&0<at?wt+at:wt):at=wt,Q){case 1:var Nt=-1;break;case 2:Nt=250;break;case 5:Nt=1073741823;break;case 4:Nt=1e4;break;default:Nt=5e3}return Nt=at+Nt,Q={id:x++,callback:ht,priorityLevel:Q,startTime:at,expirationTime:Nt,sortIndex:-1},at>wt?(Q.sortIndex=at,e(y,Q),a(g)===null&&Q===a(y)&&(L?(X(V),V=-1):L=!0,gt(ft,at-wt))):(Q.sortIndex=Nt,e(g,Q),w||A||(w=!0,Z||(Z=!0,yt()))),Q},o.unstable_shouldYield=N,o.unstable_wrapCallback=function(Q){var ht=E;return function(){var at=E;E=ht;try{return Q.apply(this,arguments)}finally{E=at}}}})(rp)),rp}var L_;function IM(){return L_||(L_=1,ap.exports=zM()),ap.exports}var sp={exports:{}},Te={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var O_;function BM(){if(O_)return Te;O_=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),h=Symbol.for("react.consumer"),p=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),E=Symbol.for("react.view_transition"),A=Symbol.iterator;function w(U){return U===null||typeof U!="object"?null:(U=A&&U[A]||U["@@iterator"],typeof U=="function"?U:null)}var L={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,M={};function X(U,J,At){this.props=U,this.context=J,this.refs=M,this.updater=At||L}X.prototype.isReactComponent={},X.prototype.setState=function(U,J){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,J,"setState")},X.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function G(){}G.prototype=X.prototype;function O(U,J,At){this.props=U,this.context=J,this.refs=M,this.updater=At||L}var ft=O.prototype=new G;ft.constructor=O,T(ft,X.prototype),ft.isPureReactComponent=!0;var Z=Array.isArray;function V(){}var q={H:null,A:null,T:null,S:null},P=Object.prototype.hasOwnProperty;function N(U,J,At){var vt=At.ref;return{$$typeof:o,type:U,key:J,ref:vt!==void 0?vt:null,props:At}}function k(U,J){return N(U.type,J,U.props)}function yt(U){return typeof U=="object"&&U!==null&&U.$$typeof===o}function dt(U){var J={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(At){return J[At]})}var Rt=/\/+/g;function gt(U,J){return typeof U=="object"&&U!==null&&U.key!=null?dt(""+U.key):J.toString(36)}function Q(U){switch(U.status){case"fulfilled":return U.value;case"rejected":throw U.reason;default:switch(typeof U.status=="string"?U.then(V,V):(U.status="pending",U.then(function(J){U.status==="pending"&&(U.status="fulfilled",U.value=J)},function(J){U.status==="pending"&&(U.status="rejected",U.reason=J)})),U.status){case"fulfilled":return U.value;case"rejected":throw U.reason}}throw U}function ht(U,J,At,vt,zt){var Ft=typeof U;(Ft==="undefined"||Ft==="boolean")&&(U=null);var jt=!1;if(U===null)jt=!0;else switch(Ft){case"bigint":case"string":case"number":jt=!0;break;case"object":switch(U.$$typeof){case o:case e:jt=!0;break;case x:return jt=U._init,ht(jt(U._payload),J,At,vt,zt)}}if(jt)return zt=zt(U),jt=vt===""?"."+gt(U,0):vt,Z(zt)?(At="",jt!=null&&(At=jt.replace(Rt,"$&/")+"/"),ht(zt,J,At,"",function(ve){return ve})):zt!=null&&(yt(zt)&&(zt=k(zt,At+(zt.key==null||U&&U.key===zt.key?"":(""+zt.key).replace(Rt,"$&/")+"/")+jt)),J.push(zt)),1;jt=0;var Ot=vt===""?".":vt+":";if(Z(U))for(var Bt=0;Bt<U.length;Bt++)vt=U[Bt],Ft=Ot+gt(vt,Bt),jt+=ht(vt,J,At,Ft,zt);else if(Bt=w(U),typeof Bt=="function")for(U=Bt.call(U),Bt=0;!(vt=U.next()).done;)vt=vt.value,Ft=Ot+gt(vt,Bt++),jt+=ht(vt,J,At,Ft,zt);else if(Ft==="object"){if(typeof U.then=="function")return ht(Q(U),J,At,vt,zt);throw J=String(U),Error("Objects are not valid as a React child (found: "+(J==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":J)+"). If you meant to render a collection of children, use an array instead.")}return jt}function at(U,J,At){if(U==null)return U;var vt=[],zt=0;return ht(U,vt,"","",function(Ft){return J.call(At,Ft,zt++)}),vt}function wt(U){if(U._status===-1){var J=U._result,At=J();At.then(function(vt){(U._status===0||U._status===-1)&&(U._status=1,U._result=vt,At.status===void 0&&(At.status="fulfilled",At.value=vt))},function(vt){(U._status===0||U._status===-1)&&(U._status=2,U._result=vt,At.status===void 0&&(At.status="rejected",At.reason=vt))}),U._status===-1&&(U._status=0,U._result=At)}if(U._status===1)return U._result.default;throw U._result}var Nt=typeof reportError=="function"?reportError:function(U){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var J=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof U=="object"&&U!==null&&typeof U.message=="string"?String(U.message):String(U),error:U});if(!window.dispatchEvent(J))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",U);return}console.error(U)};function Jt(U){var J=q.T,At={};At.types=J!==null?J.types:null,q.T=At;try{var vt=U(),zt=q.S;zt!==null&&zt(At,vt),typeof vt=="object"&&vt!==null&&typeof vt.then=="function"&&vt.then(V,Nt)}catch(Ft){Nt(Ft)}finally{J!==null&&At.types!==null&&(J.types=At.types),q.T=J}}function pe(U){var J=q.T;if(J!==null){var At=J.types;At===null?J.types=[U]:At.indexOf(U)===-1&&At.push(U)}else Jt(pe.bind(null,U))}var be={map:at,forEach:function(U,J,At){at(U,function(){J.apply(this,arguments)},At)},count:function(U){var J=0;return at(U,function(){J++}),J},toArray:function(U){return at(U,function(J){return J})||[]},only:function(U){if(!yt(U))throw Error("React.Children.only expected to receive a single React element child.");return U}};return Te.Activity=_,Te.Children=be,Te.Component=X,Te.Fragment=a,Te.Profiler=u,Te.PureComponent=O,Te.StrictMode=s,Te.Suspense=g,Te.ViewTransition=E,Te.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=q,Te.__COMPILER_RUNTIME={__proto__:null,c:function(U){return q.H.useMemoCache(U)}},Te.addTransitionType=pe,Te.cache=function(U){return function(){return U.apply(null,arguments)}},Te.cacheSignal=function(){return null},Te.cloneElement=function(U,J,At){if(U==null)throw Error("The argument must be a React element, but you passed "+U+".");var vt=T({},U.props),zt=U.key;if(J!=null)for(Ft in J.key!==void 0&&(zt=""+J.key),J)!P.call(J,Ft)||Ft==="key"||Ft==="__self"||Ft==="__source"||Ft==="ref"&&J.ref===void 0||(vt[Ft]=J[Ft]);var Ft=arguments.length-2;if(Ft===1)vt.children=At;else if(1<Ft){for(var jt=Array(Ft),Ot=0;Ot<Ft;Ot++)jt[Ot]=arguments[Ot+2];vt.children=jt}return N(U.type,zt,vt)},Te.createContext=function(U){return U={$$typeof:p,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null},U.Provider=U,U.Consumer={$$typeof:h,_context:U},U},Te.createElement=function(U,J,At){var vt,zt={},Ft=null;if(J!=null)for(vt in J.key!==void 0&&(Ft=""+J.key),J)P.call(J,vt)&&vt!=="key"&&vt!=="__self"&&vt!=="__source"&&(zt[vt]=J[vt]);var jt=arguments.length-2;if(jt===1)zt.children=At;else if(1<jt){for(var Ot=Array(jt),Bt=0;Bt<jt;Bt++)Ot[Bt]=arguments[Bt+2];zt.children=Ot}if(U&&U.defaultProps)for(vt in jt=U.defaultProps,jt)zt[vt]===void 0&&(zt[vt]=jt[vt]);return N(U,Ft,zt)},Te.createRef=function(){return{current:null}},Te.forwardRef=function(U){return{$$typeof:d,render:U}},Te.isValidElement=yt,Te.lazy=function(U){return{$$typeof:x,_payload:{_status:-1,_result:U},_init:wt}},Te.memo=function(U,J){return{$$typeof:y,type:U,compare:J===void 0?null:J}},Te.startTransition=Jt,Te.unstable_useCacheRefresh=function(){return q.H.useCacheRefresh()},Te.use=function(U){return q.H.use(U)},Te.useActionState=function(U,J,At){return q.H.useActionState(U,J,At)},Te.useCallback=function(U,J){return q.H.useCallback(U,J)},Te.useContext=function(U){return q.H.useContext(U)},Te.useDebugValue=function(){},Te.useDeferredValue=function(U,J){return q.H.useDeferredValue(U,J)},Te.useEffect=function(U,J){return q.H.useEffect(U,J)},Te.useEffectEvent=function(U){return q.H.useEffectEvent(U)},Te.useId=function(){return q.H.useId()},Te.useImperativeHandle=function(U,J,At){return q.H.useImperativeHandle(U,J,At)},Te.useInsertionEffect=function(U,J){return q.H.useInsertionEffect(U,J)},Te.useLayoutEffect=function(U,J){return q.H.useLayoutEffect(U,J)},Te.useMemo=function(U,J){return q.H.useMemo(U,J)},Te.useOptimistic=function(U,J){return q.H.useOptimistic(U,J)},Te.useReducer=function(U,J,At){return q.H.useReducer(U,J,At)},Te.useRef=function(U){return q.H.useRef(U)},Te.useState=function(U){return q.H.useState(U)},Te.useSyncExternalStore=function(U,J,At){return q.H.useSyncExternalStore(U,J,At)},Te.useTransition=function(){return q.H.useTransition()},Te.version="19.3.0",Te}var P_;function Cm(){return P_||(P_=1,sp.exports=BM()),sp.exports}var op={exports:{}},$n={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var z_;function FM(){if(z_)return $n;z_=1;var o=Cm();function e(x){var _="https://react.dev/errors/"+x;if(1<arguments.length){_+="?args[]="+encodeURIComponent(arguments[1]);for(var E=2;E<arguments.length;E++)_+="&args[]="+encodeURIComponent(arguments[E])}return"Minified React error #"+x+"; visit "+_+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function a(){}var s={d:{f:a,r:function(){throw Error(e(522))},D:a,C:a,L:a,m:a,X:a,S:a,M:a},p:0,findDOMNode:null},u=Symbol.for("react.portal"),h=Symbol.for("react.recoverable"),p=Symbol.for("react.optimistic_key");function d(x,_,E){var A=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:u,key:A==null?null:A===p?p:""+A,children:x,containerInfo:_,implementation:E}}var g=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function y(x,_){if(x==="font")return"";if(typeof _=="string")return _==="use-credentials"?_:""}return $n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,$n.browser=function(x){return{$$typeof:h,_reason:x}},$n.createPortal=function(x,_){var E=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!_||_.nodeType!==1&&_.nodeType!==9&&_.nodeType!==11)throw Error(e(299));return d(x,_,null,E)},$n.flushSync=function(x){var _=g.T,E=s.p;try{if(g.T=null,s.p=2,x)return x()}finally{g.T=_,s.p=E,s.d.f()}},$n.preconnect=function(x,_){typeof x=="string"&&(_?(_=_.crossOrigin,_=typeof _=="string"?_==="use-credentials"?_:"":void 0):_=null,s.d.C(x,_))},$n.prefetchDNS=function(x){typeof x=="string"&&s.d.D(x)},$n.preinit=function(x,_){if(typeof x=="string"&&_&&typeof _.as=="string"){var E=_.as,A=y(E,_.crossOrigin),w=typeof _.integrity=="string"?_.integrity:void 0,L=typeof _.fetchPriority=="string"?_.fetchPriority:void 0;E==="style"?s.d.S(x,typeof _.precedence=="string"?_.precedence:void 0,{crossOrigin:A,integrity:w,fetchPriority:L}):E==="script"&&s.d.X(x,{crossOrigin:A,integrity:w,fetchPriority:L,nonce:typeof _.nonce=="string"?_.nonce:void 0})}},$n.preinitModule=function(x,_){if(typeof x=="string")if(typeof _=="object"&&_!==null){if(_.as==null||_.as==="script"){var E=y(_.as,_.crossOrigin);s.d.M(x,{crossOrigin:E,integrity:typeof _.integrity=="string"?_.integrity:void 0,nonce:typeof _.nonce=="string"?_.nonce:void 0,fetchPriority:typeof _.fetchPriority=="string"?_.fetchPriority:void 0})}}else _==null&&s.d.M(x)},$n.preload=function(x,_){if(typeof x=="string"&&typeof _=="object"&&_!==null&&typeof _.as=="string"){var E=_.as,A=y(E,_.crossOrigin);s.d.L(x,E,{crossOrigin:A,integrity:typeof _.integrity=="string"?_.integrity:void 0,nonce:typeof _.nonce=="string"?_.nonce:void 0,type:typeof _.type=="string"?_.type:void 0,fetchPriority:typeof _.fetchPriority=="string"?_.fetchPriority:void 0,referrerPolicy:typeof _.referrerPolicy=="string"?_.referrerPolicy:void 0,imageSrcSet:typeof _.imageSrcSet=="string"?_.imageSrcSet:void 0,imageSizes:typeof _.imageSizes=="string"?_.imageSizes:void 0,media:typeof _.media=="string"?_.media:void 0})}},$n.preloadModule=function(x,_){if(typeof x=="string")if(_){var E=y(_.as,_.crossOrigin);s.d.m(x,{as:typeof _.as=="string"&&_.as!=="script"?_.as:void 0,crossOrigin:E,integrity:typeof _.integrity=="string"?_.integrity:void 0,nonce:typeof _.nonce=="string"?_.nonce:void 0,fetchPriority:typeof _.fetchPriority=="string"?_.fetchPriority:void 0})}else s.d.m(x)},$n.requestFormReset=function(x){s.d.r(x)},$n.unstable_batchedUpdates=function(x,_){return x(_)},$n.useFormState=function(x,_,E){return g.H.useFormState(x,_,E)},$n.useFormStatus=function(){return g.H.useHostTransitionStatus()},$n.version="19.3.0",$n}var I_;function HM(){if(I_)return op.exports;I_=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),op.exports=FM(),op.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var B_;function GM(){if(B_)return du;B_=1;var o=IM(),e=Cm(),a=HM();function s(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var i=2;i<arguments.length;i++)n+="&args[]="+encodeURIComponent(arguments[i])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function h(t){for(var n=t,i=n;i&&!i.alternate;)n=i,(n.flags&4098)!==0&&(t=n.return),i=n.return;for(;n.return;)n=n.return;return n.tag===3?t:null}function p(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function d(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function g(t){if(h(t)!==t)throw Error(s(188))}function y(t){var n=t.alternate;if(!n){if(n=h(t),n===null)throw Error(s(188));return n!==t?null:t}for(var i=t,r=n;;){var l=i.return;if(l===null)break;var c=l.alternate;if(c===null){if(r=l.return,r!==null){i=r;continue}break}if(l.child===c.child){for(c=l.child;c;){if(c===i)return g(l),t;if(c===r)return g(l),n;c=c.sibling}throw Error(s(188))}if(i.return!==r.return)i=l,r=c;else{for(var v=!1,R=l.child;R;){if(R===i){v=!0,i=l,r=c;break}if(R===r){v=!0,r=l,i=c;break}R=R.sibling}if(!v){for(R=c.child;R;){if(R===i){v=!0,i=c,r=l;break}if(R===r){v=!0,r=c,i=l;break}R=R.sibling}if(!v)throw Error(s(189))}}if(i.alternate!==r)throw Error(s(190))}if(i.tag!==3)throw Error(s(188));return i.stateNode.current===i?t:n}function x(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=x(t),n!==null)return n;t=t.sibling}return null}function _(t,n,i,r,l,c){for(;t!==null;){if((t.tag===5||t.tag===27||t.tag===6)&&i(t,r,l,c)||(t.tag!==22||t.memoizedState===null)&&(n||t.tag!==5&&t.tag!==27)&&_(t.child,n,i,r,l,c))return!0;t=t.sibling}return!1}function E(t){for(t=t.return;t!==null;){if(t.tag===3||t.tag===5||t.tag===27)return t;t=t.return}return null}function A(t){var n=!1;for(t=t.return;t!==null&&(t.tag===4&&(n=!0),!(t.tag===3||t.tag===5||t.tag===27));)t=t.return;return n}function w(t){var n=[null,null],i=E(t);return i===null||L(n,t,i.child,{foundSelf:!1}),n}function L(t,n,i,r){for(;i!==null;){if(i===n)r.foundSelf=!0;else if(i.tag===5||i.tag===27||i.tag===6){if(r.foundSelf)return t[1]=i,!0;t[0]=i}else if((i.tag!==22||i.memoizedState===null)&&L(t,n,i.child,r))return!0;i=i.sibling}return!1}function T(t){switch(t.tag){case 5:case 27:case 6:return t.stateNode;case 3:return t.stateNode.containerInfo;default:throw Error(s(559))}}var M=null,X=null;function G(t,n,i){return t===i?!0:t===n?(M=t,!0):!1}function O(t,n,i){return t===i?(X=t,!1):t===n?(X!==null&&(M=t),!0):!1}function ft(t){if(t===null)return null;do t=t===null?null:t.return;while(t&&t.tag!==5&&t.tag!==27&&t.tag!==3);return t||null}function Z(t,n,i){for(var r=0,l=t;l;l=i(l))r++;l=0;for(var c=n;c;c=i(c))l++;for(;0<r-l;)t=i(t),r--;for(;0<l-r;)n=i(n),l--;for(;r--;){if(t===n||n!==null&&t===n.alternate)return t;t=i(t),n=i(n)}return null}var V=Object.assign,q=Symbol.for("react.element"),P=Symbol.for("react.transitional.element"),N=Symbol.for("react.portal"),k=Symbol.for("react.fragment"),yt=Symbol.for("react.strict_mode"),dt=Symbol.for("react.profiler"),Rt=Symbol.for("react.consumer"),gt=Symbol.for("react.context"),Q=Symbol.for("react.forward_ref"),ht=Symbol.for("react.suspense"),at=Symbol.for("react.suspense_list"),wt=Symbol.for("react.memo"),Nt=Symbol.for("react.lazy"),Jt=Symbol.for("react.activity"),pe=Symbol.for("react.legacy_hidden"),be=Symbol.for("react.memo_cache_sentinel"),U=Symbol.for("react.view_transition"),J=Symbol.for("react.recoverable"),At=Symbol.iterator;function vt(t){return t===null||typeof t!="object"?null:(t=At&&t[At]||t["@@iterator"],typeof t=="function"?t:null)}var zt=Symbol.for("react.client.reference");function Ft(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===zt?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case k:return"Fragment";case dt:return"Profiler";case yt:return"StrictMode";case ht:return"Suspense";case at:return"SuspenseList";case Jt:return"Activity";case U:return"ViewTransition"}if(typeof t=="object")switch(t.$$typeof){case N:return"Portal";case gt:return t.displayName||"Context";case Rt:return(t._context.displayName||"Context")+".Consumer";case Q:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case wt:return n=t.displayName||null,n!==null?n:Ft(t.type)||"Memo";case Nt:n=t._payload,t=t._init;try{return Ft(t(n))}catch{}}return null}var jt=Array.isArray,Ot=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Bt=a.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ve={pending:!1,data:null,method:null,action:null},j=[],un=-1;function Se(t){return{current:t}}function ue(t){0>un||(t.current=j[un],j[un]=null,un--)}function Ht(t,n){un++,j[un]=t.current,t.current=n}var we=Se(null),le=Se(null),z=Se(null),C=Se(null);function ot(t,n){switch(Ht(z,n),Ht(le,t),Ht(we,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?Bv(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=Bv(n),t=Fv(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}ue(we),Ht(we,t)}function xt(){ue(we),ue(le),ue(z)}function Dt(t){var n=t.memoizedState;n!==null&&(Lo._currentValue=n.memoizedState,Ht(C,t)),n=we.current;var i=Fv(n,t.type);n!==i&&(Ht(le,t),Ht(we,i))}function Mt(t){le.current===t&&(ue(we),ue(le)),C.current===t&&(ue(C),Lo._currentValue=ve)}var ne,St;function Ut(t){if(ne===void 0)try{throw Error()}catch(i){var n=i.stack.trim().match(/\n( *(at )?)/);ne=n&&n[1]||"",St=-1<i.stack.indexOf(`
    at`)?" (<anonymous>)":-1<i.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ne+t+St}var de=!1;function bt(t,n){if(!t||de)return"";de=!0;var i=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(n){var Tt=function(){throw Error()};if(Object.defineProperty(Tt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Tt,[])}catch(kt){var tt=kt}Reflect.construct(t,[],Tt)}else{try{Tt.call()}catch(kt){tt=kt}Tt=!1;try{var st=Object.getOwnPropertyDescriptor(t.prototype,"props");Object.defineProperty(t.prototype,"props",{configurable:!0,set:function(){throw Error()}}),Tt=!0,new t}finally{Tt&&(st!==void 0?Object.defineProperty(t.prototype,"props",st):delete t.prototype.props)}}}else{try{throw Error()}catch(kt){tt=kt}(Tt=t())&&typeof Tt.catch=="function"&&Tt.catch(function(){})}}catch(kt){if(kt&&tt&&typeof kt.stack=="string")return[kt.stack,tt.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var c=r.DetermineComponentFrameRoot(),v=c[0],R=c[1];if(v&&R){var H=v.split(`
`),it=R.split(`
`);for(l=r=0;r<H.length&&!H[r].includes("DetermineComponentFrameRoot");)r++;for(;l<it.length&&!it[l].includes("DetermineComponentFrameRoot");)l++;if(r===H.length||l===it.length)for(r=H.length-1,l=it.length-1;1<=r&&0<=l&&H[r]!==it[l];)l--;for(;1<=r&&0<=l;r--,l--)if(H[r]!==it[l]){if(r!==1||l!==1)do if(r--,l--,0>l||H[r]!==it[l]){var ct=`
`+H[r].replace(" at new "," at ");return t.displayName&&ct.includes("<anonymous>")&&(ct=ct.replace("<anonymous>",t.displayName)),ct}while(1<=r&&0<=l);break}}}finally{de=!1,Error.prepareStackTrace=i}return(i=t?t.displayName||t.name:"")?Ut(i):""}function Yt(t,n){switch(t.tag){case 26:case 27:case 5:return Ut(t.type);case 16:return Ut("Lazy");case 13:return t.child!==n&&n!==null?Ut("Suspense Fallback"):Ut("Suspense");case 19:return Ut("SuspenseList");case 0:case 15:return bt(t.type,!1);case 11:return bt(t.type.render,!1);case 1:return bt(t.type,!0);case 31:return Ut("Activity");case 30:return Ut("ViewTransition");default:return""}}function re(t){try{var n="",i=null;do n+=Yt(t,i),i=t,t=t.return;while(t);return n}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var me=Object.prototype.hasOwnProperty,It=o.unstable_scheduleCallback,Vt=o.unstable_cancelCallback,_e=o.unstable_shouldYield,Ge=o.unstable_requestPaint,W=o.unstable_now,Xt=o.unstable_getCurrentPriorityLevel,_t=o.unstable_ImmediatePriority,Ct=o.unstable_UserBlockingPriority,qt=o.unstable_NormalPriority,Kt=o.unstable_LowPriority,ye=o.unstable_IdlePriority,an=o.log,En=o.unstable_setDisableYieldValue,Le=null,Qe=null;function An(t){if(typeof an=="function"&&En(t),Qe&&typeof Qe.setStrictMode=="function")try{Qe.setStrictMode(Le,t)}catch{}}var gn=Math.clz32?Math.clz32:Ri,Ys=Math.log,Ln=Math.LN2;function Ri(t){return t>>>=0,t===0?32:31-(Ys(t)/Ln|0)|0}var va=256,$e=262144,bn=4194304;function vi(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&-t;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function $i(t,n,i){var r=t.pendingLanes;if(r===0)return 0;var l=0,c=t.suspendedLanes,v=t.pingedLanes;t=t.warmLanes;var R=r&134217727;return R!==0?(r=R&~c,r!==0?l=vi(r):(v&=R,v!==0?l=vi(v):i||(i=R&~t,i!==0&&(l=vi(i))))):(R=r&~c,R!==0?l=vi(R):v!==0?l=vi(v):i||(i=r&~t,i!==0&&(l=vi(i)))),l===0?0:n!==0&&n!==l&&(n&c)===0&&(c=l&-l,i=n&-n,c>=i||c===32&&(i&4194048)!==0)?n:l}function Ci(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function Ba(t,n){(n&8)!==0&&(n|=n&32);var i=t.entangledLanes;if(i!==0)for(t=t.entanglements,i&=n;0<i;){var r=31-gn(i),l=1<<r;n|=t[r],i&=~l}return n}function ur(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function _a(){var t=bn;return bn<<=1,(bn&62914560)===0&&(bn=4194304),t}function cr(t){for(var n=[],i=0;31>i;i++)n.push(t);return n}function D(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function nt(t,n,i,r,l,c){var v=t.pendingLanes;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=i,t.entangledLanes&=i,t.errorRecoveryDisabledLanes&=i,t.shellSuspendCounter=0;var R=t.entanglements,H=t.expirationTimes,it=t.hiddenUpdates;for(i=v&~i;0<i;){var ct=31-gn(i),Tt=1<<ct;R[ct]=0,H[ct]=-1;var tt=it[ct];if(tt!==null)for(it[ct]=null,ct=0;ct<tt.length;ct++){var st=tt[ct];st!==null&&(st.lane&=-536870913)}i&=~Tt}r!==0&&mt(t,r,0),c!==0&&l===0&&t.tag!==0&&(t.suspendedLanes|=c&~(v&~n))}function mt(t,n,i){t.pendingLanes|=n,t.suspendedLanes&=~n;var r=31-gn(n);t.entangledLanes|=n,t.entanglements[r]=t.entanglements[r]|1073741824|i&261930}function ut(t,n){var i=t.entangledLanes|=n;for(t=t.entanglements;i;){var r=31-gn(i),l=1<<r;l&n|t[r]&n&&(t[r]|=n),i&=~l}}function $(t,n){var i=n&-n;return i=(i&42)!==0?1:Pt(i),(i&(t.suspendedLanes|n))!==0?0:i}function Pt(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Wt(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function ae(){var t=Bt.p;return t!==0?t:(t=window.event,t===void 0?32:M_(t.type))}function se(t,n){var i=Bt.p;try{return Bt.p=t,n()}finally{Bt.p=i}}var fe=Math.random().toString(36).slice(2),te="__reactFiber$"+fe,Zt="__reactProps$"+fe,Ae="__reactContainer$"+fe,Oe="__reactEvents$"+fe,je="__reactListeners$"+fe,Hn="__reactHandles$"+fe,Ve="__reactResources$"+fe,ie="__reactMarker$"+fe,ti="__reactLoad$"+fe;function Ie(t){delete t[te],delete t[Zt],delete t[je],delete t[Hn]}function yn(t){var n;if(n=t[te])return n;for(var i=t.parentNode;i;){if(n=i[Ae]||i[te]){if(i=n.alternate,n.child!==null||i!==null&&i.child!==null)for(t=n_(t);t!==null;){if(i=t[te])return i;t=n_(t)}return n}t=i,i=t.parentNode}return null}function ei(t){if(t=t[te]||t[Ae]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function Sn(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(s(33))}function ci(t){var n=t[Ve];return n||(n=t[Ve]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function he(t){t[ie]=!0}function ni(t){t[ti]=void 0}var ta=new Set,Rn={};function On(t,n){Gn(t,n),Gn(t+"Capture",n)}function Gn(t,n){for(Rn[t]=n,t=0;t<n.length;t++)ta.add(n[t])}var qs=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Uu={},gl={};function Nu(t){return me.call(gl,t)?!0:me.call(Uu,t)?!1:qs.test(t)?gl[t]=!0:(Uu[t]=!0,!1)}var Be=!1;function vl(){var t=Be;return Be=!1,t}function Jr(t,n,i){if(Nu(n))if(i===null)t.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var r=n.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,i)}}function ya(t,n,i){if(i===null)t.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,i)}}function ea(t,n,i,r){if(r===null)t.removeAttribute(i);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(i);return}t.setAttributeNS(n,i,r)}}function fi(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Lu(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Ff(t,n,i){var r=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var l=r.get,c=r.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return l.call(this)},set:function(v){i=""+v,c.call(this,v)}}),Object.defineProperty(t,n,{enumerable:r.enumerable}),{getValue:function(){return i},setValue:function(v){i=""+v},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function $r(t){if(!t._valueTracker){var n=Lu(t)?"checked":"value";t._valueTracker=Ff(t,n,""+t[n])}}function fr(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var i=n.getValue(),r="";return t&&(r=Lu(t)?t.checked?"true":"false":t.value),t=r,t!==i?(n.setValue(t),!0):!1}var Hf=/[\n"\\]/g;function _i(t){return t.replace(Hf,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function _l(t,n,i,r,l,c,v,R){t.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?t.type=v:t.removeAttribute("type"),n!=null?v==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+fi(n)):t.value!==""+fi(n)&&(t.value=""+fi(n)):v!=="submit"&&v!=="reset"||t.removeAttribute("value"),n!=null?v==="number"&&t.value==n?ts(t,fi(t.value)):ts(t,fi(n)):i!=null?ts(t,fi(i)):r!=null&&t.removeAttribute("value"),l==null&&c!=null&&(t.defaultChecked=!!c),l!=null&&(t.checked=l&&typeof l!="function"&&typeof l!="symbol"),R!=null&&typeof R!="function"&&typeof R!="symbol"&&typeof R!="boolean"?t.name=""+fi(R):t.removeAttribute("name")}function Ou(t,n,i,r,l,c,v,R){if(c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(t.type=c),n!=null||i!=null){if(!(c!=="submit"&&c!=="reset"||n!=null)){$r(t);return}i=i!=null?""+fi(i):"",n=n!=null?""+fi(n):i,R||n===t.value||(t.value=n),t.defaultValue=n}r=r??l,r=typeof r!="function"&&typeof r!="symbol"&&!!r,t.checked=R?t.checked:!!r,t.defaultChecked=!!r,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(t.name=v),$r(t)}function ts(t,n){t.defaultValue!==""+n&&(t.defaultValue=""+n)}function Fa(t,n,i,r){if(t=t.options,n){n={};for(var l=0;l<i.length;l++)n["$"+i[l]]=!0;for(i=0;i<t.length;i++)l=n.hasOwnProperty("$"+t[i].value),t[i].selected!==l&&(t[i].selected=l),l&&r&&(t[i].defaultSelected=!0)}else{for(i=""+fi(i),n=null,l=0;l<t.length;l++){if(t[l].value===i){t[l].selected=!0,r&&(t[l].defaultSelected=!0);return}n!==null||t[l].disabled||(n=t[l])}n!==null&&(n.selected=!0)}}function yl(t,n,i){if(n!=null&&(n=""+fi(n),n!==t.value&&(t.value=n),i==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=i!=null?""+fi(i):""}function hr(t,n,i,r){if(n==null){if(r!=null){if(i!=null)throw Error(s(92));if(jt(r)){if(1<r.length)throw Error(s(93));r=r[0]}i=r}i==null&&(i=""),n=i}i=fi(n),t.defaultValue=i,r=t.textContent,r===i&&r!==""&&r!==null&&(t.value=r),$r(t)}function Vn(t,n){if(n){var i=t.firstChild;if(i&&i===t.lastChild&&i.nodeType===3){i.nodeValue=n;return}}t.textContent=n}var Gf=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Pu(t,n,i){var r=n.indexOf("--")===0;i==null||typeof i=="boolean"||i===""?r?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":r?t.setProperty(n,i):typeof i!="number"||i===0||Gf.has(n)?n==="float"?t.cssFloat=i:t[n]=(""+i).trim():t[n]=i+"px"}function Sl(t,n,i){if(n!=null&&typeof n!="object")throw Error(s(62));if(t=t.style,i!=null){for(var r in i)!i.hasOwnProperty(r)||n!=null&&n.hasOwnProperty(r)||(r.indexOf("--")===0?t.setProperty(r,""):r==="float"?t.cssFloat="":t[r]="",Be=!0);for(var l in n)r=n[l],n.hasOwnProperty(l)&&i[l]!==r&&(Pu(t,l,r),Be=!0)}else for(var c in n)n.hasOwnProperty(c)&&Pu(t,c,n[c])}function Ws(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var xl=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Ml=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function na(t){return Ml.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function wi(){}var es=null;function El(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ha=null,Di=null;function Tl(t){var n=ei(t);if(n&&(t=n.stateNode)){var i=t[Zt]||null;t:switch(t=n.stateNode,n.type){case"input":if(_l(t,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name),n=i.name,i.type==="radio"&&n!=null){for(i=t;i.parentNode;)i=i.parentNode;for(i=i.querySelectorAll('input[name="'+_i(""+n)+'"][type="radio"]'),n=0;n<i.length;n++){var r=i[n];if(r!==t&&r.form===t.form){var l=r[Zt]||null;if(!l)throw Error(s(90));_l(r,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(n=0;n<i.length;n++)r=i[n],r.form===t.form&&fr(r)}break t;case"textarea":yl(t,i.value,i.defaultValue);break t;case"select":n=i.value,n!=null&&Fa(t,!!i.multiple,n,!1)}}}var js=!1;function zu(t,n,i){if(js)return t(n,i);js=!0;try{var r=t(n);return r}finally{if(js=!1,(Ha!==null||Di!==null)&&(Ic(),Ha&&(n=Ha,t=Di,Di=Ha=null,Tl(n),t)))for(n=0;n<t.length;n++)Tl(t[n])}}function dr(t,n){var i=t.stateNode;if(i===null)return null;var r=i[Zt]||null;if(r===null)return null;i=r[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break t;default:t=!1}if(t)return null;if(i&&typeof i!="function")throw Error(s(231,n,typeof i));return i}var yi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Zs=!1;if(yi)try{var ns={};Object.defineProperty(ns,"passive",{get:function(){Zs=!0}}),window.addEventListener("test",ns,ns),window.removeEventListener("test",ns,ns)}catch{Zs=!1}var ia=null,Ks=null,is=null;function Al(){if(is)return is;var t,n=Ks,i=n.length,r,l="value"in ia?ia.value:ia.textContent,c=l.length;for(t=0;t<i&&n[t]===l[t];t++);var v=i-t;for(r=1;r<=v&&n[i-r]===l[c-r];r++);return is=l.slice(t,1<r?1-r:void 0)}function pr(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function as(){return!0}function Iu(){return!1}function Wn(t){function n(i,r,l,c,v){this._reactName=i,this._targetInst=l,this.type=r,this.nativeEvent=c,this.target=v,this.currentTarget=null;for(var R in t)t.hasOwnProperty(R)&&(i=t[R],this[R]=i?i(c):c[R]);return this.isDefaultPrevented=(c.defaultPrevented!=null?c.defaultPrevented:c.returnValue===!1)?as:Iu,this.isPropagationStopped=Iu,this}return V(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var i=this.nativeEvent;i&&(i.preventDefault?i.preventDefault():typeof i.returnValue!="unknown"&&(i.returnValue=!1),this.isDefaultPrevented=as)},stopPropagation:function(){var i=this.nativeEvent;i&&(i.stopPropagation?i.stopPropagation():typeof i.cancelBubble!="unknown"&&(i.cancelBubble=!0),this.isPropagationStopped=as)},persist:function(){},isPersistent:as}),n}var Sa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Qs=Wn(Sa),mr=V({},Sa,{view:0,detail:0}),Vf=Wn(mr),bl,rs,ss,Js=V({},mr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:pt,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ss&&(ss&&t.type==="mousemove"?(bl=t.screenX-ss.screenX,rs=t.screenY-ss.screenY):rs=bl=0,ss=t),bl)},movementY:function(t){return"movementY"in t?t.movementY:rs}}),Bu=Wn(Js),$s=V({},Js,{dataTransfer:0}),Xf=Wn($s),kf=V({},mr,{relatedTarget:0}),Rl=Wn(kf),Fu=V({},Sa,{animationName:0,elapsedTime:0,pseudoElement:0}),Hu=Wn(Fu),f=V({},Sa,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),m=Wn(f),S=V({},Sa,{data:0}),b=Wn(S),I={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},F={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},B={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function K(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=B[t])?!!n[t]:!1}function pt(){return K}var Lt=V({},mr,{key:function(t){if(t.key){var n=I[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=pr(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?F[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:pt,charCode:function(t){return t.type==="keypress"?pr(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?pr(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Gt=Wn(Lt),xe=V({},Js,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ce=Wn(xe),$t=V({},Sa,{submitter:0}),Me=Wn($t),De=V({},mr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:pt}),cn=Wn(De),rn=V({},Sa,{propertyName:0,elapsedTime:0,pseudoElement:0}),Pn=Wn(rn),Si=V({},Js,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),ii=Wn(Si),Ye=V({},Sa,{newState:0,oldState:0,source:0}),zn=Wn(Ye),xa=[9,13,27,32],Cl=yi&&"CompositionEvent"in window,os=null;yi&&"documentMode"in document&&(os=document.documentMode);var Yf=yi&&"TextEvent"in window&&!os,Gu=yi&&(!Cl||os&&8<os&&11>=os),Vu=" ",ls=!1;function Vm(t,n){switch(t){case"keyup":return xa.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Xm(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var to=!1;function LS(t,n){switch(t){case"compositionend":return Xm(n);case"keypress":return n.which!==32?null:(ls=!0,Vu);case"textInput":return t=n.data,t===Vu&&ls?null:t;default:return null}}function OS(t,n){if(to)return t==="compositionend"||!Cl&&Vm(t,n)?(t=Al(),is=Ks=ia=null,to=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Gu&&n.locale!=="ko"?null:n.data;default:return null}}var PS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function km(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!PS[t.type]:n==="textarea"}function Ym(t,n,i,r){Ha?Di?Di.push(r):Di=[r]:Ha=r,n=Xc(n,"onChange"),0<n.length&&(i=new Qs("onChange","change",null,i,r),t.push({event:i,listeners:n}))}var wl=null,Dl=null;function zS(t){Nv(t,0)}function Xu(t){var n=Sn(t);if(fr(n))return t}function qm(t,n){if(t==="change")return n}var Wm=!1;if(yi){var qf;if(yi){var Wf="oninput"in document;if(!Wf){var jm=document.createElement("div");jm.setAttribute("oninput","return;"),Wf=typeof jm.oninput=="function"}qf=Wf}else qf=!1;Wm=qf&&(!document.documentMode||9<document.documentMode)}function Zm(){wl&&(wl.detachEvent("onpropertychange",Km),Dl=wl=null)}function Km(t){if(t.propertyName==="value"&&Xu(Dl)){var n=[];Ym(n,Dl,t,El(t)),zu(zS,n)}}function IS(t,n,i){t==="focusin"?(Zm(),wl=n,Dl=i,wl.attachEvent("onpropertychange",Km)):t==="focusout"&&Zm()}function BS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Xu(Dl)}function FS(t,n){if(t==="click")return Xu(n)}function HS(t,n){if(t==="input"||t==="change")return Xu(n)}function GS(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var Ui=typeof Object.is=="function"?Object.is:GS;function Ul(t,n){if(Ui(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var i=Object.keys(t),r=Object.keys(n);if(i.length!==r.length)return!1;for(r=0;r<i.length;r++){var l=i[r];if(!me.call(n,l)||!Ui(t[l],n[l]))return!1}return!0}function jf(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Qm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Jm(t,n){var i=Qm(t);t=0;for(var r;i;){if(i.nodeType===3){if(r=t+i.textContent.length,t<=n&&r>=n)return{node:i,offset:n-t};t=r}t:{for(;i;){if(i.nextSibling){i=i.nextSibling;break t}i=i.parentNode}i=void 0}i=Qm(i)}}function $m(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?$m(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function tg(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=jf(t.document);n instanceof t.HTMLIFrameElement;){try{var i=typeof n.contentWindow.location.href=="string"}catch{i=!1}if(i)t=n.contentWindow;else break;n=jf(t.document)}return n}function Zf(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var VS=yi&&"documentMode"in document&&11>=document.documentMode,eo=null,Kf=null,Nl=null,Qf=!1;function eg(t,n,i){var r=i.window===i?i.document:i.nodeType===9?i:i.ownerDocument;Qf||eo==null||eo!==jf(r)||(r=eo,"selectionStart"in r&&Zf(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Nl&&Ul(Nl,r)||(Nl=r,r=Xc(Kf,"onSelect"),0<r.length&&(n=new Qs("onSelect","select",null,n,i),t.push({event:n,listeners:r}),n.target=eo)))}function us(t,n){var i={};return i[t.toLowerCase()]=n.toLowerCase(),i["Webkit"+t]="webkit"+n,i["Moz"+t]="moz"+n,i}var no={animationend:us("Animation","AnimationEnd"),animationiteration:us("Animation","AnimationIteration"),animationstart:us("Animation","AnimationStart"),transitionrun:us("Transition","TransitionRun"),transitionstart:us("Transition","TransitionStart"),transitioncancel:us("Transition","TransitionCancel"),transitionend:us("Transition","TransitionEnd")},Jf={},ng={};yi&&(ng=document.createElement("div").style,"AnimationEvent"in window||(delete no.animationend.animation,delete no.animationiteration.animation,delete no.animationstart.animation),"TransitionEvent"in window||delete no.transitionend.transition);function cs(t){if(Jf[t])return Jf[t];if(!no[t])return t;var n=no[t],i;for(i in n)if(n.hasOwnProperty(i)&&i in ng)return Jf[t]=n[i];return t}var ig=cs("animationend"),ag=cs("animationiteration"),rg=cs("animationstart"),XS=cs("transitionrun"),kS=cs("transitionstart"),YS=cs("transitioncancel"),sg=cs("transitionend"),og=new Map,$f="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");$f.push("scrollEnd");function aa(t,n){og.set(t,n),On(n,[t])}var qS=0;function Ga(t,n){if(t.name!=null&&t.name!=="auto")return t.name;if(n.autoName!==null)return n.autoName;t=la.identifierPrefix;var i=qS++;return t="_"+t+"t_"+i.toString(32)+"_",n.autoName=t}function lg(t){if(t==null||typeof t=="string")return t;var n=null,i=Eo;if(i!==null)for(var r=0;r<i.length;r++){var l=t[i[r]];if(l!=null){if(l==="none")return"none";n=n==null?l:n+(" "+l)}}return n??t.default}function Va(t,n){return t=lg(t),n=lg(n),n==null?t==="auto"?null:t:n==="auto"?null:n}var ku=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},ki=[],io=0,th=0;function Yu(){for(var t=io,n=th=io=0;n<t;){var i=ki[n];ki[n++]=null;var r=ki[n];ki[n++]=null;var l=ki[n];ki[n++]=null;var c=ki[n];if(ki[n++]=null,r!==null&&l!==null){var v=r.pending;v===null?l.next=l:(l.next=v.next,v.next=l),r.pending=l}c!==0&&ug(i,l,c)}}function qu(t,n,i,r){ki[io++]=t,ki[io++]=n,ki[io++]=i,ki[io++]=r,th|=r,t.lanes|=r,t=t.alternate,t!==null&&(t.lanes|=r)}function eh(t,n,i,r){return qu(t,n,i,r),Wu(t)}function fs(t,n){return qu(t,null,null,n),Wu(t)}function ug(t,n,i){t.lanes|=i;var r=t.alternate;r!==null&&(r.lanes|=i);for(var l=!1,c=t.return;c!==null;)c.childLanes|=i,r=c.alternate,r!==null&&(r.childLanes|=i),c.tag===22&&(t=c.stateNode,t===null||t._visibility&1||(l=!0)),t=c,c=c.return;return t.tag===3?(c=t.stateNode,l&&n!==null&&(l=31-gn(i),t=c.hiddenUpdates,r=t[l],r===null?t[l]=[n]:r.push(n),n.lane=i|536870912),c):null}function Wu(t){if(50<tu)throw tu=0,zc=null,Error(s(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var ao={};function WS(t,n,i,r){this.tag=t,this.key=i,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function xi(t,n,i,r){return new WS(t,n,i,r)}function nh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Xa(t,n){var i=t.alternate;return i===null?(i=xi(t.tag,n,t.key,t.mode),i.elementType=t.elementType,i.type=t.type,i.stateNode=t.stateNode,i.alternate=t,t.alternate=i):(i.pendingProps=n,i.type=t.type,i.flags=0,i.subtreeFlags=0,i.deletions=null),i.flags=t.flags&1206910976,i.childLanes=t.childLanes,i.lanes=t.lanes,i.child=t.child,i.memoizedProps=t.memoizedProps,i.memoizedState=t.memoizedState,i.updateQueue=t.updateQueue,n=t.dependencies,i.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},i.sibling=t.sibling,i.index=t.index,i.ref=t.ref,i.refCleanup=t.refCleanup,i}function cg(t,n){t.flags&=1206910978;var i=t.alternate;return i===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=i.childLanes,t.lanes=i.lanes,t.child=i.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=i.memoizedProps,t.memoizedState=i.memoizedState,t.updateQueue=i.updateQueue,t.type=i.type,n=i.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function ju(t,n,i,r,l,c){var v=0;if(r=t,typeof r=="function")nh(r)&&(v=1);else if(typeof r=="string")v=xM(t,i,we.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(r){case Jt:return t=xi(31,i,n,l),t.elementType=Jt,t.lanes=c,t;case k:return hs(i.children,l,c,n);case yt:v=8,l|=24;break;case dt:return t=xi(12,i,n,l|2),t.elementType=dt,t.lanes=c,t;case ht:return t=xi(13,i,n,l),t.elementType=ht,t.lanes=c,t;case at:return t=xi(19,i,n,l),t.elementType=at,t.lanes=c,t;case pe:case U:return t=l|32,t=xi(30,i,n,t),t.elementType=U,t.lanes=c,t.stateNode={autoName:null,paired:null,clones:null,ref:null},t;default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case gt:v=10;break t;case Rt:v=9;break t;case Q:v=11;break t;case wt:v=14;break t;case Nt:v=16,r=null;break t}v=29,i=Error(s(130,t===null?"null":typeof t,"")),r=null}return n=xi(v,i,n,l),n.elementType=t,n.type=r,n.lanes=c,n}function hs(t,n,i,r){return t=xi(7,t,r,n),t.lanes=i,t}function ih(t,n,i){return t=xi(6,t,null,n),t.lanes=i,t}function fg(t){var n=xi(18,null,null,0);return n.stateNode=t,n}function ah(t,n,i){return n=xi(4,t.children!==null?t.children:[],t.key,n),n.lanes=i,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var hg=new WeakMap;function Yi(t,n){if(typeof t=="object"&&t!==null){var i=hg.get(t);return i!==void 0?i:(n={value:t,source:n,stack:re(n)},hg.set(t,n),n)}return{value:t,source:n,stack:re(n)}}var ro=[],so=0,Zu=null,Ll=0,qi=[],Wi=0,gr=null,Ma=1,Ea="";function ka(t,n){ro[so++]=Ll,ro[so++]=Zu,Zu=t,Ll=n}function dg(t,n,i){qi[Wi++]=Ma,qi[Wi++]=Ea,qi[Wi++]=gr,gr=t;var r=Ma;t=Ea;var l=32-gn(r)-1;r&=~(1<<l),i+=1;var c=32-gn(n)+l;if(30<c){var v=l-l%5;c=(r&(1<<v)-1).toString(32),r>>=v,l-=v,Ma=1<<32-gn(n)+l|i<<l|r,Ea=c+t}else Ma=1<<c|i<<l|r,Ea=t}function Ku(t){t.return!==null&&(ka(t,1),dg(t,1,0))}function rh(t){for(;t===Zu;)Zu=ro[--so],ro[so]=null,Ll=ro[--so],ro[so]=null;for(;t===gr;)gr=qi[--Wi],qi[Wi]=null,Ea=qi[--Wi],qi[Wi]=null,Ma=qi[--Wi],qi[Wi]=null}function pg(t,n){qi[Wi++]=Ma,qi[Wi++]=Ea,qi[Wi++]=gr,Ma=n.id,Ea=n.overflow,gr=t}var Xn=null,dn=null,ze=!1,vr=null,ji=!1,sh=Error(s(519));function _r(t){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Ol(Yi(n,t)),sh}function mg(t){var n=t.stateNode,i=t.type,r=t.memoizedProps;switch(n[te]=t,n[Zt]=r,i){case"dialog":He("cancel",n),He("close",n);break;case"iframe":case"object":case"embed":He("load",n);break;case"video":case"audio":for(i=0;i<nu.length;i++)He(nu[i],n);break;case"source":He("error",n);break;case"img":case"image":case"link":He("error",n),He("load",n);break;case"details":He("toggle",n);break;case"input":He("invalid",n),Ou(n,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":He("invalid",n);break;case"textarea":He("invalid",n),hr(n,r.value,r.defaultValue,r.children)}i=r.children,typeof i!="string"&&typeof i!="number"&&typeof i!="bigint"||n.textContent===""+i||r.suppressHydrationWarning===!0||zv(n.textContent,i)?(r.popover!=null&&(He("beforetoggle",n),He("toggle",n)),r.onScroll!=null&&He("scroll",n),r.onScrollEnd!=null&&He("scrollend",n),r.onClick!=null&&(n.onclick=wi),n=!0):n=!1,n||_r(t,!0)}function Qu(t){for(Xn=t.return;Xn;)switch(Xn.tag){case 5:case 31:case 13:ji=!1;return;case 27:case 3:ji=!0;return;default:Xn=Xn.return}}function oo(t){if(t!==Xn)return!1;if(!ze)return Qu(t),ze=!0,!1;var n=t.tag,i;if((i=n!==3&&n!==27)&&((i=n===5)&&(i=t.type,i=!(i!=="form"&&i!=="button")||zd(t.type,t.memoizedProps)),i=!i),i&&dn&&_r(t),Qu(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));dn=e_(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));dn=e_(t)}else n===27?(n=dn,Or(t.type)?(t=Yd,Yd=null,dn=t):dn=n):dn=Xn?Ki(t.stateNode.nextSibling):null;return!0}function ds(){dn=Xn=null,ze=!1}function oh(){var t=vr;return t!==null&&(Ti===null?Ti=t:Ti.push.apply(Ti,t),vr=null),t}function Ol(t){vr===null?vr=[t]:vr.push(t)}var lh=Se(null),ps=null,Ya=null;function yr(t,n,i){Ht(lh,n._currentValue),n._currentValue=i}function qa(t){t._currentValue=lh.current,ue(lh)}function Ju(t,n,i){for(;t!==null;){var r=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),t===i)break;t=t.return}}function uh(t,n,i,r){var l=t.child;for(l!==null&&(l.return=t);l!==null;){var c=l.dependencies;if(c!==null){var v=l.child;c=c.firstContext;t:for(;c!==null;){var R=c;c=l;for(var H=0;H<n.length;H++)if(R.context===n[H]){c.lanes|=i,R=c.alternate,R!==null&&(R.lanes|=i),Ju(c.return,i,t),r||(v=null);break t}c=R.next}}else if(l.tag===18){if(v=l.return,v===null)throw Error(s(341));v.lanes|=i,c=v.alternate,c!==null&&(c.lanes|=i),Ju(v,i,t),v=null}else l.tag===13&&l.memoizedState!==null&&l.memoizedState.dehydrated===null?(l.lanes|=i,v=l.alternate,v!==null&&(v.lanes|=i),Ju(l.return,i,t),v=l.child,v=v!==null?v.sibling:null):v=l.child;if(v!==null)v.return=l;else for(v=l;v!==null;){if(v===t){v=null;break}if(l=v.sibling,l!==null){l.return=v.return,v=l;break}v=v.return}l=v}}function ms(t,n,i,r){t=null;for(var l=n,c=!1;l!==null;){if(!c){if((l.flags&524288)!==0)c=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var v=l.alternate;if(v===null)throw Error(s(387));if(v=v.memoizedProps,v!==null){var R=l.type;Ui(l.pendingProps.value,v.value)||(t!==null?t.push(R):t=[R])}}else if(l===C.current){if(v=l.alternate,v===null)throw Error(s(387));v.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(t!==null?t.push(Lo):t=[Lo])}l=l.return}return t!==null&&uh(n,t,i,r),n.flags|=262144,t!==null}function $u(t){for(t=t.firstContext;t!==null;){if(!Ui(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function gs(t){ps=t,Ya=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function jn(t){return gg(ps,t)}function tc(t,n){return ps===null&&gs(t),gg(t,n)}function gg(t,n){var i=n._currentValue;if(n={context:n,memoizedValue:i,next:null},Ya===null){if(t===null)throw Error(s(308));Ya=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Ya=Ya.next=n;return i}var jS=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(i,r){t.push(r)}};this.abort=function(){n.aborted=!0,t.forEach(function(i){return i()})}},ZS=o.unstable_scheduleCallback,KS=o.unstable_NormalPriority,Cn={$$typeof:gt,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ch(){return{controller:new jS,data:new Map,refCount:0}}function Pl(t){t.refCount--,t.refCount===0&&ZS(KS,function(){t.controller.abort()})}function vg(t,n){if((t.pendingLanes&4194048)!==0){var i=t.transitionTypes;for(i===null&&(i=t.transitionTypes=[]),t=0;t<n.length;t++){var r=n[t];i.indexOf(r)===-1&&i.push(r)}}}var zl=null;function QS(t){var n=t.transitionTypes;return t.transitionTypes=null,n}var Il=null,fh=0,vs=0,lo=null;function JS(t,n){if(Il===null){var i=Il=[];fh=0,vs=Rd(),lo={status:"pending",value:void 0,then:function(r){i.push(r)}}}return fh++,n.then(_g,_g),n}function _g(){if(--fh===0&&(zl=null,Il!==null)){lo!==null&&(lo.status="fulfilled");var t=Il;Il=null,vs=0,lo=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function $S(t,n){var i=[],r={status:"pending",value:null,reason:null,then:function(l){i.push(l)}};return t.then(function(){r.status="fulfilled",r.value=n;for(var l=0;l<i.length;l++)(0,i[l])(n)},function(l){for(r.status="rejected",r.reason=l,l=0;l<i.length;l++)(0,i[l])(void 0)}),r}var yg=Ot.S;Ot.S=function(t,n){if(fv=W(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&JS(t,n),zl!==null)for(var i=Ro;i!==null;)vg(i,zl),i=i.next;if(i=t.types,i!==null){for(var r=Ro;r!==null;)vg(r,i),r=r.next;if(vs!==0){r=zl,r===null&&(r=zl=[]);for(var l=0;l<i.length;l++){var c=i[l];r.indexOf(c)===-1&&r.push(c)}}}yg!==null&&yg(t,n)};var _s=Se(null);function hh(){var t=_s.current;return t!==null?t:fn.pooledCache}function ec(t,n){n===null?Ht(_s,_s.current):Ht(_s,n.pool)}function Sg(){var t=hh();return t===null?null:{parent:Cn._currentValue,pool:t}}var uo=Error(s(460)),dh=Error(s(474)),nc=Error(s(542)),ic={then:function(){}};function xg(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Mg(t,n,i){switch(i=t[i],i===void 0?t.push(n):i!==n&&(n.then(wi,wi),n=i),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Tg(t),t===void 0&&!("reason"in n)?Error(s(600)):t;default:if(typeof n.status=="string")n.then(wi,wi);else{if(t=fn,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=n,t.status="pending",t.then(function(r){if(n.status==="pending"){var l=n;l.status="fulfilled",l.value=r}},function(r){if(n.status==="pending"){var l=n;l.status="rejected",l.reason=r}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Tg(t),t}throw Ss=n,uo}}function ys(t){try{var n=t._init;return n(t._payload)}catch(i){throw i!==null&&typeof i=="object"&&typeof i.then=="function"?(Ss=i,uo):i}}var Ss=null;function Eg(){if(Ss===null)throw Error(s(459));var t=Ss;return Ss=null,t}function Tg(t){if(t===uo||t===nc)throw Error(s(483))}var co=null,Bl=0;function ac(t){var n=Bl;return Bl+=1,co===null&&(co=[]),Mg(co,t,n)}function Sr(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function rc(t,n){throw n.$$typeof===q?Error(s(525)):(t=Object.prototype.toString.call(n),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Ag(t){function n(et,Y){if(t){var rt=et.deletions;rt===null?(et.deletions=[Y],et.flags|=16):rt.push(Y)}}function i(et,Y){if(!t)return null;for(;Y!==null;)n(et,Y),Y=Y.sibling;return null}function r(et){for(var Y=new Map;et!==null;)et.key===null?Y.set(et.index,et):Y.set(et.key,et),et=et.sibling;return Y}function l(et,Y){return et=Xa(et,Y),et.index=0,et.sibling=null,et}function c(et,Y,rt){return et.index=rt,t?(rt=et.alternate,rt!==null?(rt=rt.index,rt<Y?(et.flags|=2,Y):rt):(et.flags|=134217730,Y)):(et.flags|=1048576,Y)}function v(et){return t&&et.alternate===null&&(et.flags|=134217730),et}function R(et,Y,rt,Et){return Y===null||Y.tag!==6?(Y=ih(rt,et.mode,Et),Y.return=et,Y):(Y=l(Y,rt),Y.return=et,Y)}function H(et,Y,rt,Et){var ee=rt.type;return ee===k?(et=ct(et,Y,rt.props.children,Et,rt.key),Sr(et,rt),et):Y!==null&&(Y.elementType===ee||typeof ee=="object"&&ee!==null&&ee.$$typeof===Nt&&ys(ee)===Y.type)?(Y=l(Y,rt.props),Sr(Y,rt),Y.return=et,Y):(Y=ju(rt.type,rt.key,rt.props,null,et.mode,Et),Sr(Y,rt),Y.return=et,Y)}function it(et,Y,rt,Et){return Y===null||Y.tag!==4||Y.stateNode.containerInfo!==rt.containerInfo||Y.stateNode.implementation!==rt.implementation?(Y=ah(rt,et.mode,Et),Y.return=et,Y):(Y=l(Y,rt.children||[]),Y.return=et,Y)}function ct(et,Y,rt,Et,ee){return Y===null||Y.tag!==7?(Y=hs(rt,et.mode,Et,ee),Y.return=et,Y):(Y=l(Y,rt),Y.return=et,Y)}function Tt(et,Y,rt){if(typeof Y=="string"&&Y!==""||typeof Y=="number"||typeof Y=="bigint")return Y=ih(""+Y,et.mode,rt),Y.return=et,Y;if(typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case P:return rt=ju(Y.type,Y.key,Y.props,null,et.mode,rt),Sr(rt,Y),rt.return=et,rt;case N:return Y=ah(Y,et.mode,rt),Y.return=et,Y;case Nt:return Y=ys(Y),Tt(et,Y,rt)}if(jt(Y)||vt(Y))return Y=hs(Y,et.mode,rt,null),Y.return=et,Y;if(typeof Y.then=="function")return Tt(et,ac(Y),rt);if(Y.$$typeof===gt)return Tt(et,tc(et,Y),rt);rc(et,Y)}return null}function tt(et,Y,rt,Et){var ee=Y!==null?Y.key:null;if(typeof rt=="string"&&rt!==""||typeof rt=="number"||typeof rt=="bigint")return ee!==null?null:R(et,Y,""+rt,Et);if(typeof rt=="object"&&rt!==null){switch(rt.$$typeof){case P:return rt.key===ee?H(et,Y,rt,Et):null;case N:return rt.key===ee?it(et,Y,rt,Et):null;case Nt:return rt=ys(rt),tt(et,Y,rt,Et)}if(jt(rt)||vt(rt))return ee!==null?null:ct(et,Y,rt,Et,null);if(typeof rt.then=="function")return tt(et,Y,ac(rt),Et);if(rt.$$typeof===gt)return tt(et,Y,tc(et,rt),Et);rc(et,rt)}return null}function st(et,Y,rt,Et,ee){if(typeof Et=="string"&&Et!==""||typeof Et=="number"||typeof Et=="bigint")return et=et.get(rt)||null,R(Y,et,""+Et,ee);if(typeof Et=="object"&&Et!==null){switch(Et.$$typeof){case P:return et=et.get(Et.key===null?rt:Et.key)||null,H(Y,et,Et,ee);case N:return et=et.get(Et.key===null?rt:Et.key)||null,it(Y,et,Et,ee);case Nt:return Et=ys(Et),st(et,Y,rt,Et,ee)}if(jt(Et)||vt(Et))return et=et.get(rt)||null,ct(Y,et,Et,ee,null);if(typeof Et.then=="function")return st(et,Y,rt,ac(Et),ee);if(Et.$$typeof===gt)return st(et,Y,rt,tc(Y,Et),ee);rc(Y,Et)}return null}function kt(et,Y,rt,Et){for(var ee=null,ke=null,ge=Y,Ee=Y=0,Un=null;ge!==null&&Ee<rt.length;Ee++){ge.index>Ee?(Un=ge,ge=null):Un=ge.sibling;var qe=tt(et,ge,rt[Ee],Et);if(qe===null){ge===null&&(ge=Un);break}t&&ge&&qe.alternate===null&&n(et,ge),Y=c(qe,Y,Ee),ke===null?ee=qe:ke.sibling=qe,ke=qe,ge=Un}if(Ee===rt.length)return i(et,ge),ze&&ka(et,Ee),ee;if(ge===null){for(;Ee<rt.length;Ee++)ge=Tt(et,rt[Ee],Et),ge!==null&&(Y=c(ge,Y,Ee),ke===null?ee=ge:ke.sibling=ge,ke=ge);return ze&&ka(et,Ee),ee}for(ge=r(ge);Ee<rt.length;Ee++)Un=st(ge,et,Ee,rt[Ee],Et),Un!==null&&(t&&(qe=Un.alternate,qe!==null&&ge.delete(qe.key===null?Ee:qe.key)),Y=c(Un,Y,Ee),ke===null?ee=Un:ke.sibling=Un,ke=Un);return t&&ge.forEach(function(Fr){return n(et,Fr)}),ze&&ka(et,Ee),ee}function oe(et,Y,rt,Et){if(rt==null)throw Error(s(151));for(var ee=null,ke=null,ge=Y,Ee=Y=0,Un=null,qe=rt.next();ge!==null&&!qe.done;Ee++,qe=rt.next()){ge.index>Ee?(Un=ge,ge=null):Un=ge.sibling;var Fr=tt(et,ge,qe.value,Et);if(Fr===null){ge===null&&(ge=Un);break}t&&ge&&Fr.alternate===null&&n(et,ge),Y=c(Fr,Y,Ee),ke===null?ee=Fr:ke.sibling=Fr,ke=Fr,ge=Un}if(qe.done)return i(et,ge),ze&&ka(et,Ee),ee;if(ge===null){for(;!qe.done;Ee++,qe=rt.next())qe=Tt(et,qe.value,Et),qe!==null&&(Y=c(qe,Y,Ee),ke===null?ee=qe:ke.sibling=qe,ke=qe);return ze&&ka(et,Ee),ee}for(ge=r(ge);!qe.done;Ee++,qe=rt.next())qe=st(ge,et,Ee,qe.value,Et),qe!==null&&(t&&(Un=qe.alternate,Un!==null&&ge.delete(Un.key===null?Ee:Un.key)),Y=c(qe,Y,Ee),ke===null?ee=qe:ke.sibling=qe,ke=qe);return t&&ge.forEach(function(LM){return n(et,LM)}),ze&&ka(et,Ee),ee}function Ce(et,Y,rt,Et){if(typeof rt=="object"&&rt!==null&&rt.type===k&&rt.key===null&&rt.props.ref===void 0&&(rt=rt.props.children),typeof rt=="object"&&rt!==null){switch(rt.$$typeof){case P:t:{for(var ee=rt.key;Y!==null;){if(Y.key===ee){if(ee=rt.type,ee===k){if(Y.tag===7){i(et,Y.sibling),Et=l(Y,rt.props.children),Sr(Et,rt),Et.return=et,et=Et;break t}}else if(Y.elementType===ee||typeof ee=="object"&&ee!==null&&ee.$$typeof===Nt&&ys(ee)===Y.type){i(et,Y.sibling),Et=l(Y,rt.props),Sr(Et,rt),Et.return=et,et=Et;break t}i(et,Y);break}else n(et,Y);Y=Y.sibling}rt.type===k?(Et=hs(rt.props.children,et.mode,Et,rt.key),Sr(Et,rt),Et.return=et,et=Et):(Et=ju(rt.type,rt.key,rt.props,null,et.mode,Et),Sr(Et,rt),Et.return=et,et=Et)}return v(et);case N:t:{for(ee=rt.key;Y!==null;){if(Y.key===ee)if(Y.tag===4&&Y.stateNode.containerInfo===rt.containerInfo&&Y.stateNode.implementation===rt.implementation){i(et,Y.sibling),Et=l(Y,rt.children||[]),Et.return=et,et=Et;break t}else{i(et,Y);break}else n(et,Y);Y=Y.sibling}Et=ah(rt,et.mode,Et),Et.return=et,et=Et}return v(et);case Nt:return rt=ys(rt),Ce(et,Y,rt,Et)}if(jt(rt))return kt(et,Y,rt,Et);if(vt(rt)){if(ee=vt(rt),typeof ee!="function")throw Error(s(150));return rt=ee.call(rt),oe(et,Y,rt,Et)}if(typeof rt.then=="function")return Ce(et,Y,ac(rt),Et);if(rt.$$typeof===gt)return Ce(et,Y,tc(et,rt),Et);rc(et,rt)}return typeof rt=="string"&&rt!==""||typeof rt=="number"||typeof rt=="bigint"?(rt=""+rt,Y!==null&&Y.tag===6?(i(et,Y.sibling),Et=l(Y,rt),Et.return=et,et=Et):(i(et,Y),Et=ih(rt,et.mode,Et),Et.return=et,et=Et),v(et)):i(et,Y)}return function(et,Y,rt,Et){try{Bl=0;var ee=Ce(et,Y,rt,Et);return co=null,ee}catch(ge){if(ge===uo||ge===nc)throw ge;var ke=xi(29,ge,null,et.mode);return ke.lanes=Et,ke.return=et,ke}finally{}}}var xs=Ag(!0),bg=Ag(!1),xr=!1;function ph(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function mh(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Mr(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Er(t,n,i){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,(Ke&2)!==0){var l=r.pending;return l===null?n.next=n:(n.next=l.next,l.next=n),r.pending=n,n=Wu(t),ug(t,null,i),n}return qu(t,r,n,i),Wu(t)}function Fl(t,n,i){if(n=n.updateQueue,n!==null&&(n=n.shared,(i&4194048)!==0)){var r=n.lanes;r&=t.pendingLanes,i|=r,n.lanes=i,ut(t,i)}}function gh(t,n){var i=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,i===r)){var l=null,c=null;if(i=i.firstBaseUpdate,i!==null){do{var v={lane:i.lane,tag:i.tag,payload:i.payload,callback:null,next:null};c===null?l=c=v:c=c.next=v,i=i.next}while(i!==null);c===null?l=c=n:c=c.next=n}else l=c=n;i={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:c,shared:r.shared,callbacks:r.callbacks},t.updateQueue=i;return}t=i.lastBaseUpdate,t===null?i.firstBaseUpdate=n:t.next=n,i.lastBaseUpdate=n}var vh=!1;function Hl(){if(vh){var t=lo;if(t!==null)throw t}}function Gl(t,n,i,r){vh=!1;var l=t.updateQueue;xr=!1;var c=l.firstBaseUpdate,v=l.lastBaseUpdate,R=l.shared.pending;if(R!==null){l.shared.pending=null;var H=R,it=H.next;H.next=null,v===null?c=it:v.next=it,v=H;var ct=t.alternate;ct!==null&&(ct=ct.updateQueue,R=ct.lastBaseUpdate,R!==v&&(R===null?ct.firstBaseUpdate=it:R.next=it,ct.lastBaseUpdate=H))}if(c!==null){var Tt=l.baseState;v=0,ct=it=H=null,R=c;do{var tt=R.lane&-536870913,st=tt!==R.lane;if(st?(Xe&tt)===tt:(r&tt)===tt){tt!==0&&tt===vs&&(vh=!0),ct!==null&&(ct=ct.next={lane:0,tag:R.tag,payload:R.payload,callback:null,next:null});t:{var kt=t,oe=R;tt=n;var Ce=i;switch(oe.tag){case 1:if(kt=oe.payload,typeof kt=="function"){Tt=kt.call(Ce,Tt,tt);break t}Tt=kt;break t;case 3:kt.flags=kt.flags&-65537|128;case 0:if(kt=oe.payload,tt=typeof kt=="function"?kt.call(Ce,Tt,tt):kt,tt==null)break t;Tt=V({},Tt,tt);break t;case 2:xr=!0}}tt=R.callback,tt!==null&&(t.flags|=64,st&&(t.flags|=8192),st=l.callbacks,st===null?l.callbacks=[tt]:st.push(tt))}else st={lane:tt,tag:R.tag,payload:R.payload,callback:R.callback,next:null},ct===null?(it=ct=st,H=Tt):ct=ct.next=st,v|=tt;if(R=R.next,R===null){if(R=l.shared.pending,R===null)break;st=R,R=st.next,st.next=null,l.lastBaseUpdate=st,l.shared.pending=null}}while(!0);ct===null&&(H=Tt),l.baseState=H,l.firstBaseUpdate=it,l.lastBaseUpdate=ct,c===null&&(l.shared.lanes=0),Dr|=v,t.lanes=v,t.memoizedState=Tt}}function Rg(t,n){if(typeof t!="function")throw Error(s(191,t));t.call(n)}function Cg(t,n){var i=t.callbacks;if(i!==null)for(t.callbacks=null,t=0;t<i.length;t++)Rg(i[t],n)}var Tr=Se(null),sc=Se(0);function wg(t,n){t=Qa,Ht(sc,t),Ht(Tr,n),Qa=t|n.baseLanes}function _h(){Ht(sc,Qa),Ht(Tr,Tr.current)}function yh(){Qa=sc.current,ue(Tr),ue(sc)}var Zn=Se(null),ai=null;function Ar(t){var n=t.alternate;Ht(Kn,Kn.current&1),Ht(Zn,t),ai===null&&(n===null||Tr.current!==null||n.memoizedState!==null)&&(ai=t)}function Sh(t){Ht(Kn,Kn.current),Ht(Zn,t),ai===null&&(ai=t)}function Dg(t){t.tag===22?(Ht(Kn,Kn.current),Ht(Zn,t),ai===null&&(ai=t)):br()}function br(){Ht(Kn,Kn.current),Ht(Zn,Zn.current)}function Ni(t){ue(Zn),ai===t&&(ai=null),ue(Kn)}var Kn=Se(0);function Vl(t,n){Ht(Zn,Zn.current),Ht(Kn,n)}function xh(t){ue(Kn),ue(Zn),ai===t&&(ai=null)}function oc(t){for(var n=t;n!==null;){if(n.tag===13){var i=n.memoizedState;if(i!==null&&(i=i.dehydrated,i===null||Xd(i)||kd(i)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!=="independent"){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Wa=0,Re=null,sn=null,wn=null,lc=!1,fo=!1,Ms=!1,uc=0,Xl=0,ho=null,tx=0;function xn(){throw Error(s(321))}function Mh(t,n){if(n===null)return!1;for(var i=0;i<n.length&&i<t.length;i++)if(!Ui(t[i],n[i]))return!1;return!0}function Eh(t,n,i,r,l,c){return Wa=c,Re=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Ot.H=t===null||t.memoizedState===null?d0:p0,Ms=!1,c=i(r,l),Ms=!1,fo&&(c=Ng(n,i,r,l)),Ug(t),c}function Ug(t){Ot.H=gc;var n=sn!==null&&sn.next!==null;if(Wa=0,wn=sn=Re=null,lc=!1,Xl=0,ho=null,n)throw Error(s(300));t===null||Dn||(t=t.dependencies,t!==null&&$u(t)&&(Dn=!0))}function Ng(t,n,i,r){Re=t;var l=0;do{if(fo&&(ho=null),Xl=0,fo=!1,25<=l)throw Error(s(301));if(l+=1,wn=sn=null,t.updateQueue!=null){var c=t.updateQueue;c.lastEffect=null,c.events=null,c.stores=null,c.memoCache!=null&&(c.memoCache.index=0)}Ot.H=lx,c=n(i,r)}while(fo);return c}function ex(){var t=Ot.H,n=t.useState()[0];return n=typeof n.then=="function"?kl(n):n,t=t.useState()[0],(sn!==null?sn.memoizedState:null)!==t&&(Re.flags|=1024),n}function Th(){var t=uc!==0;return uc=0,t}function Ah(t,n,i){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~i}function bh(t){if(lc){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}lc=!1}Wa=0,wn=sn=Re=null,fo=!1,Xl=uc=0,ho=null}function hi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return wn===null?Re.memoizedState=wn=t:wn=wn.next=t,wn}function Tn(){if(sn===null){var t=Re.alternate;t=t!==null?t.memoizedState:null}else t=sn.next;var n=wn===null?Re.memoizedState:wn.next;if(n!==null)wn=n,sn=t;else{if(t===null)throw Re.alternate===null?Error(s(467)):Error(s(310));sn=t,t={memoizedState:sn.memoizedState,baseState:sn.baseState,baseQueue:sn.baseQueue,queue:sn.queue,next:null},wn===null?Re.memoizedState=wn=t:wn=wn.next=t}return wn}function cc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function kl(t){var n=Xl;return Xl+=1,ho===null&&(ho=[]),t=Mg(ho,t,n),n=Re,(wn===null?n.memoizedState:wn.next)===null&&(n=n.alternate,Ot.H=n===null||n.memoizedState===null?d0:p0),t}function fc(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return kl(t);if(t.$$typeof===J)return;if(t.$$typeof===gt)return jn(t)}throw Error(s(438,String(t)))}function Rh(t){var n=null,i=Re.updateQueue;if(i!==null&&(n=i.memoCache),n==null){var r=Re.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(n={data:r.data.map(function(l){return l.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),i===null&&(i=cc(),Re.updateQueue=i),i.memoCache=n,i=n.data[n.index],i===void 0)for(i=n.data[n.index]=Array(t),r=0;r<t;r++)i[r]=be;return n.index++,i}function ja(t,n){return typeof n=="function"?n(t):n}function hc(t){var n=Tn();return Ch(n,sn,t)}function Ch(t,n,i){var r=t.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=i;var l=t.baseQueue,c=r.pending;if(c!==null){if(l!==null){var v=l.next;l.next=c.next,c.next=v}n.baseQueue=l=c,r.pending=null}if(c=t.baseState,l===null)t.memoizedState=c;else{n=l.next;var R=v=null,H=null,it=n,ct=!1;do{var Tt=it.lane&-536870913;if(Tt!==it.lane?(Xe&Tt)===Tt:(Wa&Tt)===Tt){var tt=it.revertLane;if(tt===0)H!==null&&(H=H.next={lane:0,revertLane:0,gesture:null,action:it.action,hasEagerState:it.hasEagerState,eagerState:it.eagerState,next:null}),Tt===vs&&(ct=!0);else if((Wa&tt)===tt){it=it.next,tt===vs&&(ct=!0);continue}else Tt={lane:0,revertLane:it.revertLane,gesture:null,action:it.action,hasEagerState:it.hasEagerState,eagerState:it.eagerState,next:null},H===null?(R=H=Tt,v=c):H=H.next=Tt,Re.lanes|=tt,Dr|=tt;Tt=it.action,Ms&&i(c,Tt),c=it.hasEagerState?it.eagerState:i(c,Tt)}else tt={lane:Tt,revertLane:it.revertLane,gesture:it.gesture,action:it.action,hasEagerState:it.hasEagerState,eagerState:it.eagerState,next:null},H===null?(R=H=tt,v=c):H=H.next=tt,Re.lanes|=Tt,Dr|=Tt;it=it.next}while(it!==null&&it!==n);if(H===null?v=c:H.next=R,!Ui(c,t.memoizedState)&&(Dn=!0,ct&&(i=lo,i!==null)))throw i;t.memoizedState=c,t.baseState=v,t.baseQueue=H,r.lastRenderedState=c}return l===null&&(r.lanes=0),[t.memoizedState,r.dispatch]}function wh(t){var n=Tn(),i=n.queue;if(i===null)throw Error(s(311));i.lastRenderedReducer=t;var r=i.dispatch,l=i.pending,c=n.memoizedState;if(l!==null){i.pending=null;var v=l=l.next;do c=t(c,v.action),v=v.next;while(v!==l);Ui(c,n.memoizedState)||(Dn=!0),n.memoizedState=c,n.baseQueue===null&&(n.baseState=c),i.lastRenderedState=c}return[c,r]}function Lg(t,n,i){var r=Re,l=Tn(),c=ze;if(c){if(i===void 0)throw Error(s(407));i=i()}else i=n();var v=!Ui((sn||l).memoizedState,i);if(v&&(l.memoizedState=i,Dn=!0),l=l.queue,Nh(zg.bind(null,r,l,t),[t]),t=l.getSnapshot!==n||v||wn!==null&&(wn.memoizedState.tag&1)!==0,po(t?9:8,{destroy:void 0},Pg.bind(null,r,l,i,n),null),t){if(r.flags|=2048,fn===null)throw Error(s(349));c||(Wa&127)!==0||Og(r,n,i)}return i}function Og(t,n,i){t.flags|=16384,t={getSnapshot:n,value:i},n=Re.updateQueue,n===null?(n=cc(),Re.updateQueue=n,n.stores=[t]):(i=n.stores,i===null?n.stores=[t]:i.push(t))}function Pg(t,n,i,r){n.value=i,n.getSnapshot=r,Ig(n)&&Bg(t)}function zg(t,n,i){return i(function(){Ig(n)&&Bg(t)})}function Ig(t){var n=t.getSnapshot;t=t.value;try{var i=n();return!Ui(t,i)}catch{return!0}}function Bg(t){var n=fs(t,2);n!==null&&Ai(n,t,2)}function Dh(t){var n=hi();if(typeof t=="function"){var i=t;if(t=i(),Ms){An(!0);try{i()}finally{An(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ja,lastRenderedState:t},n}function Fg(t,n,i,r){return t.baseState=i,Ch(t,sn,typeof r=="function"?r:ja)}function nx(t,n,i,r,l){if(mc(t))throw Error(s(485));if(t=n.action,t!==null){var c={payload:l,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){c.listeners.push(v)}};Ot.T!==null?i(!0):c.isTransition=!1,r(c),i=n.pending,i===null?(c.next=n.pending=c,Hg(n,c)):(c.next=i.next,n.pending=i.next=c)}}function Hg(t,n){var i=n.action,r=n.payload,l=t.state;if(n.isTransition){var c=Ot.T,v={};v.types=c!==null?c.types:null,Ot.T=v;try{var R=i(l,r),H=Ot.S;H!==null&&H(v,R),Gg(t,n,R)}catch(it){Uh(t,n,it)}finally{c!==null&&v.types!==null&&(c.types=v.types),Ot.T=c}}else try{c=i(l,r),Gg(t,n,c)}catch(it){Uh(t,n,it)}}function Gg(t,n,i){i!==null&&typeof i=="object"&&typeof i.then=="function"?i.then(function(r){Vg(t,n,r)},function(r){return Uh(t,n,r)}):Vg(t,n,i)}function Vg(t,n,i){n.status="fulfilled",n.value=i,Xg(n),t.state=i,n=t.pending,n!==null&&(i=n.next,i===n?t.pending=null:(i=i.next,n.next=i,Hg(t,i)))}function Uh(t,n,i){var r=t.pending;if(t.pending=null,r!==null){r=r.next;do n.status="rejected",n.reason=i,Xg(n),n=n.next;while(n!==r)}t.action=null}function Xg(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function kg(t,n){return n}function Yg(t,n){if(ze){var i=fn.formState;if(i!==null){t:{var r=Re;if(ze){if(dn){e:{for(var l=dn,c=ji;l.nodeType!==8;){if(!c){l=null;break e}if(l=Ki(l.nextSibling),l===null){l=null;break e}}c=l.data,l=c==="F!"||c==="F"?l:null}if(l){dn=Ki(l.nextSibling),r=l.data==="F!";break t}}_r(r)}r=!1}r&&(n=i[0])}}return i=hi(),i.memoizedState=i.baseState=n,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:kg,lastRenderedState:n},i.queue=r,i=c0.bind(null,Re,r),r.dispatch=i,r=Dh(!1),c=Ih.bind(null,Re,!1,r.queue),r=hi(),l={state:n,dispatch:null,action:t,pending:null},r.queue=l,i=nx.bind(null,Re,l,c,i),l.dispatch=i,r.memoizedState=t,[n,i,!1]}function qg(t){var n=Tn();return Wg(n,sn,t)}function Wg(t,n,i){if(n=Ch(t,n,kg)[0],t=hc(ja)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var r=kl(n)}catch(v){throw v===uo?nc:v}else r=n;n=Tn();var l=n.queue,c=l.dispatch;return i!==n.memoizedState&&(Re.flags|=2048,po(9,{destroy:void 0},ix.bind(null,l,i),null)),[r,c,t]}function ix(t,n){t.action=n}function jg(t){var n=Tn(),i=sn;if(i!==null)return Wg(n,i,t);Tn(),n=n.memoizedState,i=Tn();var r=i.queue.dispatch;return i.memoizedState=t,[n,r,!1]}function po(t,n,i,r){return t={tag:t,create:i,deps:r,inst:n,next:null},n=Re.updateQueue,n===null&&(n=cc(),Re.updateQueue=n),i=n.lastEffect,i===null?n.lastEffect=t.next=t:(r=i.next,i.next=t,t.next=r,n.lastEffect=t),t}function Zg(){return Tn().memoizedState}function dc(t,n,i,r){var l=hi();Re.flags|=t,l.memoizedState=po(1|n,{destroy:void 0},i,r===void 0?null:r)}function pc(t,n,i,r){var l=Tn();r=r===void 0?null:r;var c=l.memoizedState.inst;sn!==null&&r!==null&&Mh(r,sn.memoizedState.deps)?l.memoizedState=po(n,c,i,r):(Re.flags|=t,l.memoizedState=po(1|n,c,i,r))}function Kg(t,n){dc(8390656,8,t,n)}function Nh(t,n){pc(2048,8,t,n)}function ax(t){Re.flags|=4;var n=Re.updateQueue;if(n===null)n=cc(),Re.updateQueue=n,n.events=[t];else{var i=n.events;i===null?n.events=[t]:i.push(t)}}function Qg(t){var n=Tn().memoizedState;return ax({ref:n,nextImpl:t}),function(){if((Ke&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function Jg(t,n){return pc(4,2,t,n)}function $g(t,n){return pc(4,4,t,n)}function t0(t,n){if(typeof n=="function"){t=t();var i=n(t);return function(){typeof i=="function"?i():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function e0(t,n,i){i=i!=null?i.concat([t]):null,pc(4,4,t0.bind(null,n,t),i)}function Lh(){}function n0(t,n){var i=Tn();n=n===void 0?null:n;var r=i.memoizedState;return n!==null&&Mh(n,r[1])?r[0]:(i.memoizedState=[t,n],t)}function i0(t,n){var i=Tn();n=n===void 0?null:n;var r=i.memoizedState;if(n!==null&&Mh(n,r[1]))return r[0];if(r=t(),Ms){An(!0);try{t()}finally{An(!1)}}return i.memoizedState=[r,n],r}function Oh(t,n,i){return i===void 0||(Wa&1073741824)!==0&&(Xe&261930)===0?t.memoizedState=n:(t.memoizedState=i,t=dv(),Re.lanes|=t,Dr|=t,i)}function a0(t,n,i,r){return Ui(i,n)?i:Tr.current!==null?(t=Oh(t,i,r),Ui(t,n)||(Dn=!0),t):(Wa&106)===0||(Wa&1073741824)!==0&&(Xe&261930)===0?(Dn=!0,t.memoizedState=i):(t=dv(),Re.lanes|=t,Dr|=t,n)}function r0(t,n,i,r,l){var c=Bt.p;Bt.p=c!==0&&8>c?c:8;var v=Ot.T,R={};R.types=v!==null?v.types:null,Ot.T=R,Ih(t,!1,n,i);try{var H=l(),it=Ot.S;if(it!==null&&it(R,H),H!==null&&typeof H=="object"&&typeof H.then=="function"){var ct=$S(H,r);Yl(t,n,ct,zi(t))}else Yl(t,n,r,zi(t))}catch(Tt){Yl(t,n,{then:function(){},status:"rejected",reason:Tt},zi())}finally{Bt.p=c,v!==null&&R.types!==null&&(v.types=R.types),Ot.T=v}}function rx(){}function Ph(t,n,i,r){if(t.tag!==5)throw Error(s(476));var l=s0(t).queue;r0(t,l,n,ve,i===null?rx:function(){return o0(t),i(r)})}function s0(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:ve,baseState:ve,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ja,lastRenderedState:ve},next:null};var i={};return n.next={memoizedState:i,baseState:i,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ja,lastRenderedState:i},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function o0(t){var n=s0(t);n.next===null&&(n=t.alternate.memoizedState),Yl(t,n.next.queue,{},zi())}function zh(){return jn(Lo)}function l0(){return Tn().memoizedState}function u0(){return Tn().memoizedState}function sx(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var i=zi();t=Mr(i);var r=Er(n,t,i);r!==null&&(Ai(r,n,i),Fl(r,n,i)),n={cache:ch()},t.payload=n;return}n=n.return}}function ox(t,n,i){var r=zi();i={lane:r,revertLane:0,gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},mc(t)?f0(n,i):(i=eh(t,n,i,r),i!==null&&(Ai(i,t,r),h0(i,n,r)))}function c0(t,n,i){var r=zi();Yl(t,n,i,r)}function Yl(t,n,i,r){var l={lane:r,revertLane:0,gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null};if(mc(t))f0(n,l);else{var c=t.alternate;if(t.lanes===0&&(c===null||c.lanes===0)&&(c=n.lastRenderedReducer,c!==null))try{var v=n.lastRenderedState,R=c(v,i);if(l.hasEagerState=!0,l.eagerState=R,Ui(R,v))return qu(t,n,l,0),fn===null&&Yu(),!1}catch{}finally{}if(i=eh(t,n,l,r),i!==null)return Ai(i,t,r),h0(i,n,r),!0}return!1}function Ih(t,n,i,r){if(r={lane:2,revertLane:Rd(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},mc(t)){if(n)throw Error(s(479))}else n=eh(t,i,r,2),n!==null&&Ai(n,t,2)}function mc(t){var n=t.alternate;return t===Re||n!==null&&n===Re}function f0(t,n){fo=lc=!0;var i=t.pending;i===null?n.next=n:(n.next=i.next,i.next=n),t.pending=n}function h0(t,n,i){if((i&4194048)!==0){var r=n.lanes;r&=t.pendingLanes,i|=r,n.lanes=i,ut(t,i)}}var gc={readContext:jn,use:fc,useCallback:xn,useContext:xn,useEffect:xn,useImperativeHandle:xn,useLayoutEffect:xn,useInsertionEffect:xn,useMemo:xn,useReducer:xn,useRef:xn,useState:xn,useDebugValue:xn,useDeferredValue:xn,useTransition:xn,useSyncExternalStore:xn,useId:xn,useHostTransitionStatus:xn,useFormState:xn,useActionState:xn,useOptimistic:xn,useMemoCache:xn,useCacheRefresh:xn,useEffectEvent:xn},d0={readContext:jn,use:fc,useCallback:function(t,n){return hi().memoizedState=[t,n===void 0?null:n],t},useContext:jn,useEffect:Kg,useImperativeHandle:function(t,n,i){i=i!=null?i.concat([t]):null,dc(4194308,4,t0.bind(null,n,t),i)},useLayoutEffect:function(t,n){return dc(4194308,4,t,n)},useInsertionEffect:function(t,n){dc(4,2,t,n)},useMemo:function(t,n){var i=hi();n=n===void 0?null:n;var r=t();if(Ms){An(!0);try{t()}finally{An(!1)}}return i.memoizedState=[r,n],r},useReducer:function(t,n,i){var r=hi();if(i!==void 0){var l=i(n);if(Ms){An(!0);try{i(n)}finally{An(!1)}}}else l=n;return r.memoizedState=r.baseState=l,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:l},r.queue=t,t=t.dispatch=ox.bind(null,Re,t),[r.memoizedState,t]},useRef:function(t){var n=hi();return t={current:t},n.memoizedState=t},useState:function(t){t=Dh(t);var n=t.queue,i=c0.bind(null,Re,n);return n.dispatch=i,[t.memoizedState,i]},useDebugValue:Lh,useDeferredValue:function(t,n){var i=hi();return Oh(i,t,n)},useTransition:function(){var t=Dh(!1);return t=r0.bind(null,Re,t.queue,!0,!1),hi().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,i){var r=Re,l=hi();if(ze){if(i===void 0)throw Error(s(407));i=i()}else{if(i=n(),fn===null)throw Error(s(349));(Xe&127)!==0||Og(r,n,i)}l.memoizedState=i;var c={value:i,getSnapshot:n};return l.queue=c,Kg(zg.bind(null,r,c,t),[t]),r.flags|=2048,po(9,{destroy:void 0},Pg.bind(null,r,c,i,n),null),i},useId:function(){var t=hi(),n=fn.identifierPrefix;if(ze){var i=Ea,r=Ma;i=(r&~(1<<32-gn(r)-1)).toString(32)+i,n="_"+n+"R_"+i,i=uc++,0<i&&(n+="H"+i.toString(32)),n+="_"}else i=tx++,n="_"+n+"r_"+i.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:zh,useFormState:Yg,useActionState:Yg,useOptimistic:function(t){var n=hi();n.memoizedState=n.baseState=t;var i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=i,n=Ih.bind(null,Re,!0,i),i.dispatch=n,[t,n]},useMemoCache:Rh,useCacheRefresh:function(){return hi().memoizedState=sx.bind(null,Re)},useEffectEvent:function(t){var n=hi(),i={impl:t};return n.memoizedState=i,function(){if((Ke&2)!==0)throw Error(s(440));return i.impl.apply(void 0,arguments)}}},p0={readContext:jn,use:fc,useCallback:n0,useContext:jn,useEffect:Nh,useImperativeHandle:e0,useInsertionEffect:Jg,useLayoutEffect:$g,useMemo:i0,useReducer:hc,useRef:Zg,useState:function(){return hc(ja)},useDebugValue:Lh,useDeferredValue:function(t,n){var i=Tn();return a0(i,sn.memoizedState,t,n)},useTransition:function(){var t=hc(ja)[0],n=Tn().memoizedState;return[typeof t=="boolean"?t:kl(t),n]},useSyncExternalStore:Lg,useId:l0,useHostTransitionStatus:zh,useFormState:qg,useActionState:qg,useOptimistic:function(t,n){var i=Tn();return Fg(i,sn,t,n)},useMemoCache:Rh,useCacheRefresh:u0,useEffectEvent:Qg},lx={readContext:jn,use:fc,useCallback:n0,useContext:jn,useEffect:Nh,useImperativeHandle:e0,useInsertionEffect:Jg,useLayoutEffect:$g,useMemo:i0,useReducer:wh,useRef:Zg,useState:function(){return wh(ja)},useDebugValue:Lh,useDeferredValue:function(t,n){var i=Tn();return sn===null?Oh(i,t,n):a0(i,sn.memoizedState,t,n)},useTransition:function(){var t=wh(ja)[0],n=Tn().memoizedState;return[typeof t=="boolean"?t:kl(t),n]},useSyncExternalStore:Lg,useId:l0,useHostTransitionStatus:zh,useFormState:jg,useActionState:jg,useOptimistic:function(t,n){var i=Tn();return sn!==null?Fg(i,sn,t,n):(i.baseState=t,[t,i.queue.dispatch])},useMemoCache:Rh,useCacheRefresh:u0,useEffectEvent:Qg};function Bh(t,n,i,r){n=t.memoizedState,i=i(r,n),i=i==null?n:V({},n,i),t.memoizedState=i,t.lanes===0&&(t.updateQueue.baseState=i)}var Fh={enqueueSetState:function(t,n,i){t=t._reactInternals;var r=zi(),l=Mr(r);l.payload=n,i!=null&&(l.callback=i),n=Er(t,l,r),n!==null&&(Ai(n,t,r),Fl(n,t,r))},enqueueReplaceState:function(t,n,i){t=t._reactInternals;var r=zi(),l=Mr(r);l.tag=1,l.payload=n,i!=null&&(l.callback=i),n=Er(t,l,r),n!==null&&(Ai(n,t,r),Fl(n,t,r))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var i=zi(),r=Mr(i);r.tag=2,n!=null&&(r.callback=n),n=Er(t,r,i),n!==null&&(Ai(n,t,i),Fl(n,t,i))}};function m0(t,n,i,r,l,c,v){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,c,v):n.prototype&&n.prototype.isPureReactComponent?!Ul(i,r)||!Ul(l,c):!0}function g0(t,n,i,r){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(i,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(i,r),n.state!==t&&Fh.enqueueReplaceState(n,n.state,null)}function Es(t,n){var i=n;if("ref"in n){i={};for(var r in n)r!=="ref"&&(i[r]=n[r])}if(t=t.defaultProps){i===n&&(i=V({},i));for(var l in t)i[l]===void 0&&(i[l]=t[l])}return i}function v0(t){ku(t)}function _0(t){console.error(t)}function y0(t){ku(t)}function vc(t,n){try{var i=t.onUncaughtError;i(n.value,{componentStack:n.stack})}catch(r){setTimeout(function(){throw r})}}function S0(t,n,i){try{var r=t.onCaughtError;r(i.value,{componentStack:i.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function Hh(t,n,i){return i=Mr(i),i.tag=3,i.payload={element:null},i.callback=function(){vc(t,n)},i}function x0(t){return t=Mr(t),t.tag=3,t}function M0(t,n,i,r){var l=i.type.getDerivedStateFromError;if(typeof l=="function"){var c=r.value;t.payload=function(){return l(c)},t.callback=function(){S0(n,i,r)}}var v=i.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(t.callback=function(){S0(n,i,r),typeof l!="function"&&(Ur===null?Ur=new Set([this]):Ur.add(this));var R=r.stack;this.componentDidCatch(r.value,{componentStack:R!==null?R:""})})}function ux(t,n,i,r,l){if(i.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(n=i.alternate,n!==null&&ms(n,i,l,!0),i=Zn.current,i!==null){switch(i.tag){case 31:case 13:case 19:return ai===null?Bc():i.alternate===null&&Mn===0&&(Mn=3),i.flags&=-257,i.flags|=65536,i.lanes=l,r===ic?i.flags|=16384:(n=i.updateQueue,n===null?i.updateQueue=new Set([r]):n.add(r),Td(t,r,l)),!1;case 22:return i.flags|=65536,r===ic?i.flags|=16384:(n=i.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([r])},i.updateQueue=n):(i=n.retryQueue,i===null?n.retryQueue=new Set([r]):i.add(r)),Td(t,r,l)),!1}throw Error(s(435,i.tag))}return Td(t,r,l),Bc(),!1}if(ze)return n=Zn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=l,r!==sh&&(t=Error(s(422),{cause:r}),Ol(Yi(t,i)))):(r!==sh&&(n=Error(s(423),{cause:r}),Ol(Yi(n,i))),t=t.current.alternate,t.flags|=65536,l&=-l,t.lanes|=l,r=Yi(r,i),l=Hh(t.stateNode,r,l),gh(t,l),Mn!==4&&(Mn=2)),!1;var c=Error(s(520),{cause:r});if(c=Yi(c,i),$l===null?$l=[c]:$l.push(c),Mn!==4&&(Mn=2),n===null)return!0;r=Yi(r,i),i=n;do{switch(i.tag){case 3:return i.flags|=65536,t=l&-l,i.lanes|=t,t=Hh(i.stateNode,r,t),gh(i,t),!1;case 1:if(n=i.type,c=i.stateNode,(i.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||c!==null&&typeof c.componentDidCatch=="function"&&(Ur===null||!Ur.has(c))))return i.flags|=65536,l&=-l,i.lanes|=l,l=x0(l),M0(l,t,i,r),gh(i,l),!1;break;case 22:if(i.memoizedState!==null)return i.flags|=65536,!1}i=i.return}while(i!==null);return!1}var Gh=Error(s(461)),Dn=!1;function In(t,n,i,r){n.child=t===null?bg(n,null,i,r):xs(n,t.child,i,r)}function E0(t,n,i,r,l){i=i.render;var c=n.ref;if("ref"in r){var v={};for(var R in r)R!=="ref"&&(v[R]=r[R])}else v=r;return gs(n),r=Eh(t,n,i,v,c,l),R=Th(),t!==null&&!Dn?(Ah(t,n,l),Za(t,n,l)):(ze&&R&&Ku(n),n.flags|=1,In(t,n,r,l),n.child)}function T0(t,n,i,r,l){if(t===null){var c=i.type;return typeof c=="function"&&!nh(c)&&c.defaultProps===void 0&&i.compare===null?(n.tag=15,n.type=c,A0(t,n,c,r,l)):(t=ju(i.type,null,r,n,n.mode,l),t.ref=n.ref,t.return=n,n.child=t)}if(c=t.child,!Zh(t,l)){var v=c.memoizedProps;if(i=i.compare,i=i!==null?i:Ul,i(v,r)&&t.ref===n.ref)return Za(t,n,l)}return n.flags|=1,t=Xa(c,r),t.ref=n.ref,t.return=n,n.child=t}function A0(t,n,i,r,l){if(t!==null){var c=t.memoizedProps;if(Ul(c,r)&&t.ref===n.ref)if(Dn=!1,n.pendingProps=r=c,Zh(t,l))(t.flags&131072)!==0&&(Dn=!0);else return n.lanes=t.lanes,Za(t,n,l)}return Vh(t,n,i,r,l)}function b0(t,n,i,r){var l=r.children,c=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((n.flags&128)!==0){if(c=c!==null?c.baseLanes|i:i,t!==null){for(r=n.child=t.child,l=0;r!==null;)l=l|r.lanes|r.childLanes,r=r.sibling;r=l&~c}else r=0,n.child=null;return R0(t,n,c,i,r)}if((i&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&ec(n,c!==null?c.cachePool:null),c!==null?wg(n,c):_h(),Dg(n);else return r=n.lanes=536870912,R0(t,n,c!==null?c.baseLanes|i:i,i,r)}else c!==null?(ec(n,c.cachePool),wg(n,c),br(),n.memoizedState=null):(t!==null&&ec(n,null),_h(),br());return In(t,n,l,i),n.child}function ql(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function R0(t,n,i,r,l){var c=hh();return c=c===null?null:{parent:Cn._currentValue,pool:c},n.memoizedState={baseLanes:i,cachePool:c},t!==null&&ec(n,null),_h(),Dg(n),t!==null&&ms(t,n,r,!0),n.childLanes=l,null}function _c(t,n){return n=yc({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function C0(t,n,i){return xs(n,t.child,null,i),t=_c(n,n.pendingProps),t.flags|=2,Ni(n),n.memoizedState=null,t}function cx(t,n,i){var r=n.pendingProps,l=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(ze){if(r.mode==="hidden")return t=_c(n,r),n.lanes=536870912,t.memoizedState={baseLanes:0,cachePool:null},ql(null,t);if(Sh(n),(t=dn)?(t=t_(t,ji),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:gr!==null?{id:Ma,overflow:Ea}:null,retryLane:536870912,hydrationErrors:null},i=fg(t),i.return=n,n.child=i,Xn=n,dn=null)):t=null,t===null)throw _r(n);return n.lanes=536870912,null}return _c(n,r)}var c=t.memoizedState;if(c!==null){var v=c.dehydrated;if(Sh(n),l)if(n.flags&256)n.flags&=-257,n=C0(t,n,i);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(s(558));else if(Dn||ms(t,n,i,!1),l=(i&t.childLanes)!==0,Dn||l){if(Tr.current===null){if(r=fn,r!==null&&(v=$(r,i),v!==0&&v!==c.retryLane))throw c.retryLane=v,fs(t,v),Ai(r,t,v),Gh;Bc()}n=C0(t,n,i)}else t=c.treeContext,dn=Ki(v.nextSibling),Xn=n,ze=!0,vr=null,ji=!1,t!==null&&pg(n,t),n=_c(n,r),n.flags|=134221824;return n}return t=Xa(t.child,{mode:r.mode,children:r.children}),t.ref=n.ref,n.child=t,t.return=n,t}function mo(t,n){var i=n.ref;if(i===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof i!="function"&&typeof i!="object")throw Error(s(284));(t===null||t.ref!==i)&&(n.flags|=4194816)}}function Vh(t,n,i,r,l){return gs(n),i=Eh(t,n,i,r,void 0,l),r=Th(),t!==null&&!Dn?(Ah(t,n,l),Za(t,n,l)):(ze&&r&&Ku(n),n.flags|=1,In(t,n,i,l),n.child)}function w0(t,n,i,r,l,c){return gs(n),n.updateQueue=null,i=Ng(n,r,i,l),Ug(t),r=Th(),t!==null&&!Dn?(Ah(t,n,c),Za(t,n,c)):(ze&&r&&Ku(n),n.flags|=1,In(t,n,i,c),n.child)}function D0(t,n,i,r,l){if(gs(n),n.stateNode===null){var c=ao,v=i.contextType;typeof v=="object"&&v!==null&&(c=jn(v)),c=new i(r,c),n.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,c.updater=Fh,n.stateNode=c,c._reactInternals=n,c=n.stateNode,c.props=r,c.state=n.memoizedState,c.refs={},ph(n),v=i.contextType,c.context=typeof v=="object"&&v!==null?jn(v):ao,c.state=n.memoizedState,v=i.getDerivedStateFromProps,typeof v=="function"&&(Bh(n,i,v,r),c.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(v=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),v!==c.state&&Fh.enqueueReplaceState(c,c.state,null),Gl(n,r,c,l),Hl(),c.state=n.memoizedState),typeof c.componentDidMount=="function"&&(n.flags|=4194308),r=!0}else if(t===null){c=n.stateNode;var R=n.memoizedProps,H=Es(i,R);c.props=H;var it=c.context,ct=i.contextType;v=ao,typeof ct=="object"&&ct!==null&&(v=jn(ct));var Tt=i.getDerivedStateFromProps;ct=typeof Tt=="function"||typeof c.getSnapshotBeforeUpdate=="function",R=n.pendingProps!==R,ct||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(R||it!==v)&&g0(n,c,r,v),xr=!1;var tt=n.memoizedState;c.state=tt,Gl(n,r,c,l),Hl(),it=n.memoizedState,R||tt!==it||xr?(typeof Tt=="function"&&(Bh(n,i,Tt,r),it=n.memoizedState),(H=xr||m0(n,i,H,r,tt,it,v))?(ct||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount()),typeof c.componentDidMount=="function"&&(n.flags|=4194308)):(typeof c.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=it),c.props=r,c.state=it,c.context=v,r=H):(typeof c.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{c=n.stateNode,mh(t,n),v=n.memoizedProps,ct=Es(i,v),c.props=ct,Tt=n.pendingProps,tt=c.context,it=i.contextType,H=ao,typeof it=="object"&&it!==null&&(H=jn(it)),R=i.getDerivedStateFromProps,(it=typeof R=="function"||typeof c.getSnapshotBeforeUpdate=="function")||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(v!==Tt||tt!==H)&&g0(n,c,r,H),xr=!1,tt=n.memoizedState,c.state=tt,Gl(n,r,c,l),Hl();var st=n.memoizedState;v!==Tt||tt!==st||xr||t!==null&&t.dependencies!==null&&$u(t.dependencies)?(typeof R=="function"&&(Bh(n,i,R,r),st=n.memoizedState),(ct=xr||m0(n,i,ct,r,tt,st,H)||t!==null&&t.dependencies!==null&&$u(t.dependencies))?(it||typeof c.UNSAFE_componentWillUpdate!="function"&&typeof c.componentWillUpdate!="function"||(typeof c.componentWillUpdate=="function"&&c.componentWillUpdate(r,st,H),typeof c.UNSAFE_componentWillUpdate=="function"&&c.UNSAFE_componentWillUpdate(r,st,H)),typeof c.componentDidUpdate=="function"&&(n.flags|=4),typeof c.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof c.componentDidUpdate!="function"||v===t.memoizedProps&&tt===t.memoizedState||(n.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||v===t.memoizedProps&&tt===t.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=st),c.props=r,c.state=st,c.context=H,r=ct):(typeof c.componentDidUpdate!="function"||v===t.memoizedProps&&tt===t.memoizedState||(n.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||v===t.memoizedProps&&tt===t.memoizedState||(n.flags|=1024),r=!1)}return c=r,mo(t,n),r=(n.flags&128)!==0,c||r?(c=n.stateNode,i=r&&typeof i.getDerivedStateFromError!="function"?null:c.render(),n.flags|=1,t!==null&&r?(n.child=xs(n,t.child,null,l),n.child=xs(n,null,i,l)):In(t,n,i,l),n.memoizedState=c.state,t=n.child):t=Za(t,n,l),t}function U0(t,n,i,r){return ds(),n.flags|=256,In(t,n,i,r),n.child}var Xh={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function kh(t){return{baseLanes:t,cachePool:Sg()}}function Yh(t,n,i){return t=t!==null?t.childLanes&~i:0,n&&(t|=Pi),t}function N0(t,n,i){var r=n.pendingProps,l=!1,c=(n.flags&128)!==0,v;if((v=c)||(v=t!==null&&t.memoizedState===null?!1:(Kn.current&2)!==0),v&&(l=!0,n.flags&=-129),v=(n.flags&32)!==0,n.flags&=-33,t===null){if(ze){if(l?Ar(n):br(),(t=dn)?(t=t_(t,ji),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:gr!==null?{id:Ma,overflow:Ea}:null,retryLane:536870912,hydrationErrors:null},i=fg(t),i.return=n,n.child=i,Xn=n,dn=null)):t=null,t===null)throw _r(n);return kd(t)?n.lanes=32:n.lanes=536870912,null}return c=r.children,r=r.fallback,l?(br(),l=n.mode,c=yc({mode:"hidden",children:c},l),r=hs(r,l,i,null),c.return=n,r.return=n,c.sibling=r,n.child=c,r=n.child,r.memoizedState=kh(i),r.childLanes=Yh(t,v,i),n.memoizedState=Xh,ql(null,r)):(Ar(n),qh(n,c))}var R=t.memoizedState;if(R!==null){var H=R.dehydrated;if(H!==null)return fx(t,n,c,v,r,H,R,i)}return l?(br(),l=r.fallback,c=n.mode,R=t.child,H=R.sibling,r=Xa(R,{mode:"hidden",children:r.children}),r.subtreeFlags=R.subtreeFlags&1206910976,H!==null?l=Xa(H,l):(l=hs(l,c,i,null),l.flags|=2),l.return=n,r.return=n,r.sibling=l,n.child=r,ql(null,r),r=n.child,l=t.child.memoizedState,l===null?l=kh(i):(c=l.cachePool,c!==null?(R=Cn._currentValue,c=c.parent!==R?{parent:R,pool:R}:c):c=Sg(),l={baseLanes:l.baseLanes|i,cachePool:c}),r.memoizedState=l,r.childLanes=Yh(t,v,i),n.memoizedState=Xh,ql(t.child,r)):(Ar(n),i=t.child,t=i.sibling,i=Xa(i,{mode:"visible",children:r.children}),i.return=n,i.sibling=null,t!==null&&(v=n.deletions,v===null?(n.deletions=[t],n.flags|=16):v.push(t)),n.child=i,n.memoizedState=null,i)}function qh(t,n){return n=yc({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function yc(t,n){return t=xi(22,t,null,n),t.lanes=0,t}function Sc(t,n,i){return xs(n,t.child,null,i),t=qh(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function fx(t,n,i,r,l,c,v,R){if(i)return n.flags&256?(Ar(n),n.flags&=-257,Sc(t,n,R)):n.memoizedState!==null?(br(),n.child=t.child,n.flags|=128,null):(br(),c=l.fallback,v=n.mode,l=yc({mode:"visible",children:l.children},v),c=hs(c,v,R,null),c.flags|=2,l.return=n,c.return=n,l.sibling=c,n.child=l,xs(n,t.child,null,R),l=n.child,l.memoizedState=kh(R),l.childLanes=Yh(t,r,R),n.memoizedState=Xh,ql(null,l));if(Ar(n),kd(c)){if(r=c.nextSibling&&c.nextSibling.dataset,r)var H=r.dgst;return r=H,r!==""&&(l=Error(s(419)),l.stack="",l.digest=r,Ol({value:l,source:null,stack:null})),Sc(t,n,R)}if(Dn||ms(t,n,R,!1),r=(R&t.childLanes)!==0,Dn||r){if(Tr.current!==null)return Sc(t,n,R);if(r=fn,r!==null&&(l=$(r,R),l!==0&&l!==v.retryLane))throw v.retryLane=l,fs(t,l),Ai(r,t,l),Gh;return Xd(c)||Bc(),Sc(t,n,R)}return Xd(c)?(n.flags|=192,n.child=t.child,null):(t=v.treeContext,dn=Ki(c.nextSibling),Xn=n,ze=!0,vr=null,ji=!1,t!==null&&pg(n,t),n=qh(n,l.children),n.flags|=134221824,n)}function L0(t,n,i){t.lanes|=n;var r=t.alternate;r!==null&&(r.lanes|=n),Ju(t.return,n,i)}function O0(t){for(var n=null;t!==null;){var i=t.alternate;i!==null&&oc(i)===null&&(n=t),t=t.sibling}return n}function xc(t,n,i,r,l,c){var v=t.memoizedState;v===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:i,tailMode:l,treeForkCount:c}:(v.isBackwards=n,v.rendering=null,v.renderingStartTime=0,v.last=r,v.tail=i,v.tailMode=l,v.treeForkCount=c)}function Wh(t){var n=t.child;for(t.child=null;n!==null;){var i=n.sibling;n.sibling=t.child,t.child=n,n=i}}function jh(t,n,i){var r=n.pendingProps,l=r.revealOrder,c=r.tail;r=r.children;var v=Kn.current;if(n.flags&128)return Vl(n,v),null;var R=(v&2)!==0;if(R?(v=v&1|2,n.flags|=128):v&=1,Vl(n,v),l==="backwards"&&t!==null?(Wh(t),In(t,n,r,i),Wh(t)):In(t,n,r,i),r=ze?Ll:0,!R&&t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&L0(t,i,n);else if(t.tag===19)L0(t,i,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(l){case"backwards":i=O0(n.child),i===null?(l=n.child,n.child=null):(l=i.sibling,i.sibling=null,Wh(n)),xc(n,!0,l,null,c,r);break;case"unstable_legacy-backwards":for(i=null,l=n.child,n.child=null;l!==null;){if(t=l.alternate,t!==null&&oc(t)===null){n.child=l;break}t=l.sibling,l.sibling=i,i=l,l=t}xc(n,!0,i,null,c,r);break;case"together":xc(n,!1,null,null,void 0,r);break;case"independent":n.memoizedState=null;break;default:i=O0(n.child),i===null?(l=n.child,n.child=null):(l=i.sibling,i.sibling=null),xc(n,!1,l,i,c,r)}return n.child}function P0(t,n,i){var r=n.pendingProps;return yr(n,n.type,r.value),In(t,n,r.children,i),n.child}function Za(t,n,i){if(t!==null&&(n.dependencies=t.dependencies),Dr|=n.lanes,(i&n.childLanes)===0)if(t!==null){if(ms(t,n,i,!1),(i&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(s(153));if(n.child!==null){for(t=n.child,i=Xa(t,t.pendingProps),n.child=i,i.return=n;t.sibling!==null;)t=t.sibling,i=i.sibling=Xa(t,t.pendingProps),i.return=n;i.sibling=null}return n.child}function Zh(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&$u(t)))}function hx(t,n,i){switch(n.tag){case 3:ot(n,n.stateNode.containerInfo),yr(n,Cn,t.memoizedState.cache),ds();break;case 27:case 5:Dt(n);break;case 4:ot(n,n.stateNode.containerInfo);break;case 10:yr(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Sh(n),null;break;case 13:var r=n.memoizedState;if(r!==null){if(r.dehydrated!==null)return Ar(n),n.flags|=128,null;r=ms(t,n,i,!1);var l=n.child.childLanes;return r||(i&l)!==0?N0(t,n,i):(Ar(n),t=Za(t,n,i),t!==null?t.sibling:null)}Ar(n);break;case 19:if(n.flags&128)return jh(t,n,i);if(l=(t.flags&128)!==0,r=(i&n.childLanes)!==0,r||(ms(t,n,i,!1),r=(i&n.childLanes)!==0),l){if(r)return jh(t,n,i);n.flags|=128}if(l=n.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),Vl(n,Kn.current),r)break;return null;case 22:return n.lanes=0,b0(t,n,i,n.pendingProps);case 24:yr(n,Cn,t.memoizedState.cache)}return Za(t,n,i)}function z0(t,n,i){if(t!==null)if(t.memoizedProps!==n.pendingProps)Dn=!0;else{if(!Zh(t,i)&&(n.flags&128)===0)return Dn=!1,hx(t,n,i);Dn=(t.flags&131072)!==0}else Dn=!1,ze&&(n.flags&1048576)!==0&&dg(n,Ll,n.index);switch(n.lanes=0,n.tag){case 16:t:{var r=n.pendingProps;if(t=ys(n.elementType),n.type=t,typeof t=="function")nh(t)?(r=Es(t,r),n.tag=1,n=D0(null,n,t,r,i)):(n.tag=0,n=Vh(null,n,t,r,i));else{if(t!=null){var l=t.$$typeof;if(l===Q){n.tag=11,n=E0(null,n,t,r,i);break t}else if(l===wt){n.tag=14,n=T0(null,n,t,r,i);break t}else if(l===gt){n.tag=10,n.type=t,n=P0(null,n,i);break t}}throw n=Ft(t)||t,Error(s(306,n,""))}}return n;case 0:return Vh(t,n,n.type,n.pendingProps,i);case 1:return r=n.type,l=Es(r,n.pendingProps),D0(t,n,r,l,i);case 3:t:{if(ot(n,n.stateNode.containerInfo),t===null)throw Error(s(387));r=n.pendingProps;var c=n.memoizedState;l=c.element,mh(t,n),Gl(n,r,null,i);var v=n.memoizedState;if(r=v.cache,yr(n,Cn,r),r!==c.cache&&uh(n,[Cn],i,!0),Hl(),r=v.element,c.isDehydrated)if(c={element:r,isDehydrated:!1,cache:v.cache},n.updateQueue.baseState=c,n.memoizedState=c,n.flags&256){n=U0(t,n,r,i);break t}else if(r!==l){l=Yi(Error(s(424)),n),Ol(l),n=U0(t,n,r,i);break t}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(dn=Ki(t.firstChild),Xn=n,ze=!0,vr=null,ji=!0,i=bg(n,null,r,i),n.child=i;i;)i.flags=i.flags&-3|134221824,i=i.sibling}else{if(ds(),r===l){n=Za(t,n,i);break t}In(t,n,r,i)}n=n.child}return n;case 26:return mo(t,n),t===null?(i=o_(n.type,null,n.pendingProps,null))?n.memoizedState=i:ze||(n.stateNode=Hv(n.type,n.pendingProps,z.current,n)):n.memoizedState=o_(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return Dt(n),t===null&&ze&&(r=n.stateNode=i_(n.type,n.pendingProps,z.current),Xn=n,ji=!0,l=dn,Or(n.type)?(Yd=l,dn=Ki(r.firstChild)):dn=l),In(t,n,n.pendingProps.children,i),mo(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&ze&&((l=r=dn)&&(r=sM(r,n.type,n.pendingProps,ji),r!==null?(n.stateNode=r,Xn=n,dn=Ki(r.firstChild),ji=!1,l=!0):l=!1),l||_r(n)),Dt(n),l=n.type,c=n.pendingProps,v=t!==null?t.memoizedProps:null,r=c.children,zd(l,c)?r=null:v!==null&&zd(l,v)&&(n.flags|=32),n.memoizedState!==null&&(l=Eh(t,n,ex,null,null,i),Lo._currentValue=l),mo(t,n),In(t,n,r,i),n.child;case 6:return t===null&&ze&&((t=i=dn)&&(i=oM(i,n.pendingProps,ji),i!==null?(n.stateNode=i,Xn=n,dn=null,t=!0):t=!1),t||_r(n)),null;case 13:return N0(t,n,i);case 4:return ot(n,n.stateNode.containerInfo),r=n.pendingProps,t===null?n.child=xs(n,null,r,i):In(t,n,r,i),n.child;case 11:return E0(t,n,n.type,n.pendingProps,i);case 7:return r=n.pendingProps,mo(t,n),In(t,n,r,i),n.child;case 8:return In(t,n,n.pendingProps.children,i),n.child;case 12:return In(t,n,n.pendingProps.children,i),n.child;case 10:return P0(t,n,i);case 9:return l=n.type._context,r=n.pendingProps.children,gs(n),l=jn(l),r=r(l),n.flags|=1,In(t,n,r,i),n.child;case 14:return T0(t,n,n.type,n.pendingProps,i);case 15:return A0(t,n,n.type,n.pendingProps,i);case 19:return jh(t,n,i);case 31:return cx(t,n,i);case 22:return b0(t,n,i,n.pendingProps);case 24:return gs(n),r=jn(Cn),t===null?(l=hh(),l===null&&(l=fn,c=ch(),l.pooledCache=c,c.refCount++,c!==null&&(l.pooledCacheLanes|=i),l=c),n.memoizedState={parent:r,cache:l},ph(n),yr(n,Cn,l)):((t.lanes&i)!==0&&(mh(t,n),Gl(n,null,null,i),Hl()),l=t.memoizedState,c=n.memoizedState,l.parent!==r?(l={parent:r,cache:r},n.memoizedState=l,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=l),yr(n,Cn,r)):(r=c.cache,yr(n,Cn,r),r!==l.cache&&uh(n,[Cn],i,!0))),In(t,n,n.pendingProps.children,i),n.child;case 30:return n.stateNode===null&&(n.stateNode={autoName:null,paired:null,clones:null,ref:null}),r=n.pendingProps,r.name!=null&&r.name!=="auto"?n.flags|=t===null?18882560:18874368:ze&&Ku(n),t!==null&&t.memoizedProps.name!==r.name?n.flags|=4194816:mo(t,n),In(t,n,r.children,i),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function Ka(t){t.flags|=4}function Kh(t,n,i,r,l){var c;if((c=(t.mode&32)!==0)&&(c=i===null?f_(n,r):f_(n,r)&&(r.src!==i.src||r.srcSet!==i.srcSet)),c){if(t.flags|=16777216,(l&335544128)===l)if(t.stateNode.complete)t.flags|=8192;else if(vv())t.flags|=8192;else throw Ss=ic,dh}else t.flags&=-16777217}function I0(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!h_(n))if(vv())t.flags|=8192;else throw Ss=ic,dh}function Mc(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?_a():536870912,t.lanes|=n,So|=n)}function Wl(t,n){if(!ze)switch(t.tailMode){case"visible":break;case"collapsed":for(var i=t.tail,r=null;i!==null;)i.alternate!==null&&(r=i),i=i.sibling;r===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null;break;default:for(n=t.tail,i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t.tail=null:i.sibling=null}}function pn(t){var n=t.alternate!==null&&t.alternate.child===t.child,i=0,r=0;if(n)for(var l=t.child;l!==null;)i|=l.lanes|l.childLanes,r|=l.subtreeFlags&1206910976,r|=l.flags&1206910976,l.return=t,l=l.sibling;else for(l=t.child;l!==null;)i|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=t,l=l.sibling;return t.subtreeFlags|=r,t.childLanes=i,n}function dx(t,n,i){var r=n.pendingProps;switch(rh(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return pn(n),null;case 1:return pn(n),null;case 3:return i=n.stateNode,r=null,t!==null&&(r=t.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),qa(Cn),xt(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(oo(n)?Ka(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,oh())),pn(n),null;case 26:var l=n.type,c=n.memoizedState;return t===null?(Ka(n),c!==null?(pn(n),I0(n,c)):(pn(n),Kh(n,l,null,r,i))):c?c!==t.memoizedState?(Ka(n),pn(n),I0(n,c)):(pn(n),n.flags&=-16777217):(t=t.memoizedProps,t!==r&&Ka(n),pn(n),Kh(n,l,t,r,i)),null;case 27:if(Mt(n),i=z.current,l=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==r&&Ka(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return pn(n),n.subtreeFlags&=-33554433,null}t=we.current,oo(n)?mg(n):(t=i_(l,r,i),n.stateNode=t,Ka(n))}return pn(n),n.subtreeFlags&=-33554433,null;case 5:if(Mt(n),l=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==r&&Ka(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return pn(n),n.subtreeFlags&=-33554433,null}if(c=we.current,oo(n))mg(n);else{var v=au(z.current);switch(c){case 1:c=v.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:c=v.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":c=v.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":c=v.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":c=v.createElement("div"),c.innerHTML="<script><\/script>",c=c.removeChild(c.firstChild);break;case"select":c=typeof r.is=="string"?v.createElement("select",{is:r.is}):v.createElement("select"),r.multiple?c.multiple=!0:r.size&&(c.size=r.size);break;default:c=typeof r.is=="string"?v.createElement(l,{is:r.is}):v.createElement(l)}}c[te]=n,c[Zt]=r;t:for(v=n.child;v!==null;){if(v.tag===5||v.tag===6)c.appendChild(v.stateNode);else if(v.tag!==4&&v.tag!==27&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===n)break t;for(;v.sibling===null;){if(v.return===null||v.return===n)break t;v=v.return}v.sibling.return=v.return,v=v.sibling}n.stateNode=c;t:switch(Jn(c,l,r),l){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break t;case"img":r=!0;break t;default:r=!1}r&&Ka(n)}}return pn(n),n.subtreeFlags&=-33554433,Kh(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,i),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==r&&Ka(n);else{if(typeof r!="string"&&n.stateNode===null)throw Error(s(166));if(t=z.current,oo(n)){if(t=n.stateNode,i=n.memoizedProps,r=null,l=Xn,l!==null)switch(l.tag){case 27:case 5:r=l.memoizedProps}t[te]=n,t=!!(t.nodeValue===i||r!==null&&r.suppressHydrationWarning===!0||zv(t.nodeValue,i)),t||_r(n,!0)}else t=au(t).createTextNode(r),t[te]=n,n.stateNode=t}return pn(n),null;case 31:if(i=n.memoizedState,t===null||t.memoizedState!==null){if(r=oo(n),i!==null){if(t===null){if(!r)throw Error(s(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(557));t[te]=n}else ds(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;pn(n),t=!1}else i=oh(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=i),t=!0;if(!t)return n.flags&256?(Ni(n),n):(Ni(n),null);if((n.flags&128)!==0)throw Error(s(558))}return pn(n),null;case 13:if(r=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(l=oo(n),r!==null&&r.dehydrated!==null){if(t===null){if(!l)throw Error(s(318));if(l=n.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(s(317));l[te]=n}else ds(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;pn(n),l=!1}else l=oh(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=l),l=!0;if(!l)return n.flags&256?(Ni(n),n):(Ni(n),null)}return Ni(n),(n.flags&128)!==0?(n.lanes=i,n):(i=r!==null,t=t!==null&&t.memoizedState!==null,i&&(r=n.child,l=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(l=r.alternate.memoizedState.cachePool.pool),c=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(c=r.memoizedState.cachePool.pool),c!==l&&(r.flags|=2048)),i!==t&&i&&(n.child.flags|=8192),Mc(n,n.updateQueue),pn(n),null);case 4:return xt(),t===null&&Ud(n.stateNode.containerInfo),n.flags|=67108864,pn(n),null;case 10:return qa(n.type),pn(n),null;case 19:if(xh(n),r=n.memoizedState,r===null)return pn(n),null;if(l=(n.flags&128)!==0,c=r.rendering,c===null)if(l)Wl(r,!1);else{if(Mn!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(c=oc(t),c!==null){for(n.flags|=128,Wl(r,!1),t=c.updateQueue,n.updateQueue=t,Mc(n,t),n.subtreeFlags=0,t=i,i=n.child;i!==null;)cg(i,t),i=i.sibling;return Vl(n,Kn.current&1|2),ze&&ka(n,r.treeForkCount),n.child}t=t.sibling}r.tail!==null&&W()>Oc&&(n.flags|=128,l=!0,Wl(r,!1),n.lanes=4194304)}else{if(!l)if(t=oc(c),t!==null){if(n.flags|=128,l=!0,t=t.updateQueue,n.updateQueue=t,Mc(n,t),Wl(r,!0),r.tail===null&&r.tailMode!=="collapsed"&&r.tailMode!=="visible"&&!c.alternate&&!ze)return pn(n),null}else 2*W()-r.renderingStartTime>Oc&&i!==536870912&&(n.flags|=128,l=!0,Wl(r,!1),n.lanes=4194304);r.isBackwards?(c.sibling=n.child,n.child=c):(t=r.last,t!==null?t.sibling=c:n.child=c,r.last=c)}if(r.tail!==null){t=r.tail;t:{for(i=t;i!==null;){if(i.alternate!==null){i=!1;break t}i=i.sibling}i=!0}return r.rendering=t,r.tail=t.sibling,r.renderingStartTime=W(),t.sibling=null,c=Kn.current,c=l?c&1|2:c&1,r.tailMode==="visible"||r.tailMode==="collapsed"||!i||ze?Vl(n,c):(i=c,Ht(Zn,n),Ht(Kn,i),ai===null&&(ai=n)),ze&&ka(n,r.treeForkCount),t}return pn(n),null;case 22:case 23:return Ni(n),yh(),r=n.memoizedState!==null,t!==null?t.memoizedState!==null!==r&&(n.flags|=8192):r&&(n.flags|=8192),r?(i&536870912)!==0&&(n.flags&128)===0&&(pn(n),n.subtreeFlags&6&&(n.flags|=8192)):pn(n),i=n.updateQueue,i!==null&&Mc(n,i.retryQueue),i=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),r=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==i&&(n.flags|=2048),t!==null&&ue(_s),null;case 24:return i=null,t!==null&&(i=t.memoizedState.cache),n.memoizedState.cache!==i&&(n.flags|=2048),qa(Cn),pn(n),null;case 25:return null;case 30:return n.flags|=33554432,pn(n),null}throw Error(s(156,n.tag))}function px(t,n){switch(rh(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return qa(Cn),xt(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return Mt(n),null;case 31:if(n.memoizedState!==null){if(Ni(n),n.alternate===null)throw Error(s(340));ds()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(Ni(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(s(340));ds()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return xh(n),t=n.flags,t&65536?(n.flags=t&-65537|128,t=n.memoizedState,t!==null&&(t.rendering=null,t.tail=null),n.flags|=4,n):null;case 4:return xt(),null;case 10:return qa(n.type),null;case 22:case 23:return Ni(n),yh(),t!==null&&ue(_s),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return qa(Cn),null;case 25:return null;default:return null}}function B0(t,n){switch(rh(n),n.tag){case 3:qa(Cn),xt();break;case 26:case 27:case 5:Mt(n);break;case 4:xt();break;case 31:n.memoizedState!==null&&Ni(n);break;case 13:Ni(n);break;case 19:xh(n);break;case 10:qa(n.type);break;case 22:case 23:Ni(n),yh(),t!==null&&ue(_s);break;case 24:qa(Cn)}}function jl(t,n){try{var i=n.updateQueue,r=i!==null?i.lastEffect:null;if(r!==null){var l=r.next;i=l;do{if((i.tag&t)===t){r=void 0;var c=i.create,v=i.inst;r=c(),v.destroy=r}i=i.next}while(i!==l)}}catch(R){en(n,n.return,R)}}function Rr(t,n,i){try{var r=n.updateQueue,l=r!==null?r.lastEffect:null;if(l!==null){var c=l.next;r=c;do{if((r.tag&t)===t){var v=r.inst,R=v.destroy;if(R!==void 0){v.destroy=void 0,l=n;var H=i,it=R;try{it()}catch(ct){en(l,H,ct)}}}r=r.next}while(r!==c)}}catch(ct){en(n,n.return,ct)}}function F0(t){var n=t.updateQueue;if(n!==null){var i=t.stateNode;try{Cg(n,i)}catch(r){en(t,t.return,r)}}}function H0(t,n,i){i.props=Es(t.type,t.memoizedProps),i.state=t.memoizedState;try{i.componentWillUnmount()}catch(r){en(t,n,r)}}function Ta(t,n){try{var i=t.ref;if(i!==null){switch(t.tag){case 26:case 27:case 5:var r=t.stateNode;break;case 30:var l=t.stateNode,c=Ga(t.memoizedProps,l);(l.ref===null||l.ref.name!==c)&&(l.ref=Wv(c)),r=l.ref;break;case 7:if(t.stateNode===null){var v=new Ii(t);_(t.child,!1,aM,v,void 0,void 0),t.stateNode=v}r=t.stateNode;break;default:r=t.stateNode}typeof i=="function"?t.refCleanup=i(r):i.current=r}}catch(R){en(t,n,R)}}function Qn(t,n){var i=t.ref,r=t.refCleanup;if(i!==null)if(typeof r=="function")try{r()}catch(l){en(t,n,l)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof i=="function")try{i(null)}catch(l){en(t,n,l)}else i.current=null}function Ec(t,n){if((t.tag===5||t.tag===27||t.tag===6)&&t.alternate===null&&n!==null)for(var i=0;i<n.length;i++)$v(t.stateNode,n[i])}function G0(t){for(var n=t.return;n!==null&&(Jh(n)&&$v(t.stateNode,n.stateNode),!Qh(n));)n=n.return}function Zl(t){for(var n=t.return;n!==null&&(Jh(n)&&rM(t.stateNode,n.stateNode),!Qh(n));)n=n.return}function Qh(t){return t.tag===5||t.tag===3||t.tag===27}function Jh(t){return t&&t.tag===7&&t.stateNode!==null}function $h(t){var n=t.type,i=t.memoizedProps,r=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":i.autoFocus&&r.focus();break t;case"img":i.src?r.src=i.src:i.srcSet&&(r.srcset=i.srcSet)}}catch(l){en(t,t.return,l)}}function td(t,n,i){try{var r=t.stateNode;Hx(r,t.type,i,n),r[Zt]=n}catch(l){en(t,t.return,l)}}function V0(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Or(t.type)||t.tag===4}function ed(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||V0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Or(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function nd(t,n,i,r){var l=t.tag;if(l===5||l===6)l=t.stateNode,n?(i.nodeType===9?i.body:i.nodeName==="HTML"?i.ownerDocument.body:i).insertBefore(l,n):(n=i.nodeType===9?i.body:i.nodeName==="HTML"?i.ownerDocument.body:i,n.appendChild(l),i=i._reactRootContainer,i!=null||n.onclick!==null||(n.onclick=wi)),Ec(t,r),Be=!0;else if(l!==4&&(l===27&&(Ec(t,r),r=null,Or(t.type)&&(i=t.stateNode,n=null)),t=t.child,t!==null))for(nd(t,n,i,r),t=t.sibling;t!==null;)nd(t,n,i,r),t=t.sibling}function Tc(t,n,i,r){var l=t.tag;if(l===5||l===6)l=t.stateNode,n?i.insertBefore(l,n):i.appendChild(l),Ec(t,r),Be=!0;else if(l!==4&&(l===27&&(Ec(t,r),r=null,Or(t.type)&&(i=t.stateNode)),t=t.child,t!==null))for(Tc(t,n,i,r),t=t.sibling;t!==null;)Tc(t,n,i,r),t=t.sibling}function X0(t){var n=t.stateNode,i=t.memoizedProps;try{for(var r=t.type,l=n.attributes;l.length;)n.removeAttributeNode(l[0]);Jn(n,r,i),n[te]=t,n[Zt]=i}catch(c){en(t,t.return,c)}}var Ac=!1,Li=null;function k0(t){(t.tag===30||(t.subtreeFlags&33554432)!==0)&&(Ac=!0)}var Aa=null;function Y0(){var t=Aa;return Aa=null,t}var Mi=0;function go(t,n,i,r,l){return Mi=0,q0(t.child,n,i,r,l)}function q0(t,n,i,r,l){for(var c=!1;t!==null;){if(t.tag===5){var v=t.stateNode;if(r!==null){var R=Fd(v);r.push(R),R.view&&(c=!0)}else c||Fd(v).view&&(c=!0);Ac=!0,Yv(v,Mi===0?n:n+"_"+Mi,i),Mi++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&l||q0(t.child,n,i,r,l)&&(c=!0));t=t.sibling}return c}function ba(t,n){for(;t!==null;)t.tag===5?qv(t.stateNode,t.memoizedProps):(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&n||ba(t.child,n)),t=t.sibling}function bc(t){if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if((t.tag!==22||t.memoizedState===null)&&(bc(t),t.tag===30&&(t.flags&18874368)!==0&&t.stateNode.paired)){var n=t.memoizedProps;if(n.name==null||n.name==="auto")throw Error(s(544));var i=n.name;n=Va(n.default,n.share),n!=="none"&&(go(t,i,n,null,!1)||ba(t.child,!1))}t=t.sibling}}function id(t,n){if(t.tag===30){var i=t.stateNode,r=t.memoizedProps,l=Ga(r,i),c=Va(r.default,i.paired?r.share:r.enter);c!=="none"?go(t,l,c,null,!1)?(bc(t),i.paired||n||To(t,r.onEnter)):ba(t.child,!1):bc(t)}else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)id(t,n),t=t.sibling;else bc(t)}function ad(t){if(Li!==null&&Li.size!==0){var n=Li;if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&(t.flags&18874368)!==0){var i=t.memoizedProps,r=i.name;if(r!=null&&r!=="auto"){var l=n.get(r);if(l!==void 0){var c=Va(i.default,i.share);if(c!=="none"&&(go(t,r,c,null,!1)?(c=t.stateNode,l.paired=c,c.paired=l,To(t,i.onShare)):ba(t.child,!1)),n.delete(r),n.size===0)break}}}ad(t)}t=t.sibling}}}function rd(t){if(t.tag===30){var n=t.memoizedProps,i=Ga(n,t.stateNode),r=Li!==null?Li.get(i):void 0,l=Va(n.default,r!==void 0?n.share:n.exit);l!=="none"&&(go(t,i,l,null,!1)?r!==void 0?(l=t.stateNode,r.paired=l,l.paired=r,Li.delete(i),To(t,n.onShare)):To(t,n.onExit):ba(t.child,!1)),Li!==null&&ad(t)}else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)rd(t),t=t.sibling;else Li!==null&&ad(t)}function W0(t){for(t=t.child;t!==null;){if(t.tag===30){var n=t.memoizedProps,i=Ga(n,t.stateNode);n=Va(n.default,n.update),t.flags&=-5,n!=="none"&&go(t,i,n,t.memoizedState=[],!1)}else(t.subtreeFlags&33554432)!==0&&W0(t);t=t.sibling}}function sd(t){if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&(t.flags&18874368)!==0){var n=t.stateNode;n.paired!==null&&(n.paired=null,ba(t.child,!1))}sd(t)}t=t.sibling}}function Rc(t){if(t.tag===30)t.stateNode.paired=null,ba(t.child,!1),sd(t);else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)Rc(t),t=t.sibling;else sd(t)}function j0(t){for(t=t.child;t!==null;)t.tag===30?ba(t.child,!1):(t.subtreeFlags&33554432)!==0&&j0(t),t=t.sibling}function od(t,n,i,r,l,c,v){for(var R=!1;n!==null;){if(n.tag===5){var H=n.stateNode;if(c!==null&&Mi<c.length){var it=c[Mi],ct=Fd(H);(it.view||ct.view)&&(R=!0);var Tt;if(Tt=(t.flags&4)===0)if(ct.clip)Tt=!0;else{Tt=it.rect;var tt=ct.rect;Tt=Tt.y!==tt.y||Tt.x!==tt.x||Tt.height!==tt.height||Tt.width!==tt.width}Tt&&(t.flags|=4),ct.abs?ct=!it.abs:(it=it.rect,ct=ct.rect,ct=it.height!==ct.height||it.width!==ct.width),ct&&(t.flags|=32)}else t.flags|=32;(t.flags&4)!==0&&Yv(H,Mi===0?i:i+"_"+Mi,l),R&&(t.flags&4)!==0||(Aa===null&&(Aa=[]),Aa.push(H,Mi===0?r:r+"_"+Mi,n.memoizedProps)),Mi++}else(n.tag!==22||n.memoizedState===null)&&(n.tag===30&&v?t.flags|=n.flags&32:od(t,n.child,i,r,l,c,v)&&(R=!0));n=n.sibling}return R}function Z0(t,n){for(t=t.child;t!==null;){if(t.tag===30){var i=t.memoizedProps,r=t.stateNode,l=Ga(i,r),c=Va(i.default,i.update),v;v=t.memoizedState,t.memoizedState=null,r=t;var R=t.child;Mi=0,l=od(r,R,l,l,c,v,!1),(t.flags&4)!==0&&l&&To(t,i.onUpdate)}else(t.subtreeFlags&33554432)!==0&&Z0(t);t=t.sibling}}var kn=!1,Je=!1,Ra=!1,ld=!1,K0=typeof WeakSet=="function"?WeakSet:Set,Yn=null,Ca=!1,Kl=!1,Cc=!1,ud=!1;function mx(t,n,i){if(t=t.containerInfo,Od=Oo,t=tg(t),Zf(t)){if("selectionStart"in t)var r={start:t.selectionStart,end:t.selectionEnd};else t:{r=(r=t.ownerDocument)&&r.defaultView||window;var l=r.getSelection&&r.getSelection();if(l&&l.rangeCount!==0){r=l.anchorNode;var c=l.anchorOffset,v=l.focusNode;l=l.focusOffset;try{r.nodeType,v.nodeType}catch{r=null;break t}var R=0,H=-1,it=-1,ct=0,Tt=0,tt=t,st=null;e:for(;;){for(var kt;tt!==r||c!==0&&tt.nodeType!==3||(H=R+c),tt!==v||l!==0&&tt.nodeType!==3||(it=R+l),tt.nodeType===3&&(R+=tt.nodeValue.length),(kt=tt.firstChild)!==null;)st=tt,tt=kt;for(;;){if(tt===t)break e;if(st===r&&++ct===c&&(H=R),st===v&&++Tt===l&&(it=R),(kt=tt.nextSibling)!==null)break;tt=st,st=tt.parentNode}tt=kt}r=H===-1||it===-1?null:{start:H,end:it}}else r=null}r=r||{start:0,end:0}}else r=null;for(Pd={focusedElem:t,selectionRange:r},Oo=!1,i=(i&335544064)===i,Yn=n,n=i?9270:1024;Yn!==null;){if(t=Yn,i&&(r=t.deletions,r!==null))for(c=0;c<r.length;c++)i&&rd(r[c]);if(t.alternate===null&&(t.flags&2)!==0)i&&k0(t),wc(i);else{if(t.tag===22){if(r=t.alternate,t.memoizedState!==null){r!==null&&r.memoizedState===null&&i&&rd(r),wc(i);continue}else if(r!==null&&r.memoizedState!==null){i&&k0(t),wc(i);continue}}r=t.child,(t.subtreeFlags&n)!==0&&r!==null?(r.return=t,Yn=r):(i&&W0(t),wc(i))}}Li=null}function wc(t){for(;Yn!==null;){var n=Yn,i=t,r=n.alternate,l=n.flags;switch(n.tag){case 0:case 11:case 15:break;case 1:if((l&1024)!==0&&r!==null){i=void 0,l=r.memoizedProps,r=r.memoizedState;var c=n.stateNode;try{var v=Es(n.type,l);i=c.getSnapshotBeforeUpdate(v,r),c.__reactInternalSnapshotBeforeUpdate=i}catch(R){en(n,n.return,R)}}break;case 3:if((l&1024)!==0){if(r=n.stateNode.containerInfo,i=r.nodeType,i===9)Vd(r);else if(i===1)switch(r.nodeName){case"HEAD":case"HTML":case"BODY":Vd(r);break;default:r.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:i&&r!==null&&(i=Ga(r.memoizedProps,r.stateNode),l=n.memoizedProps,l=Va(l.default,l.update),l!=="none"&&go(r,i,l,r.memoizedState=[],!0));break;default:if((l&1024)!==0)throw Error(s(163))}if(r=n.sibling,r!==null){r.return=n.return,Yn=r;break}Yn=n.return}}function Q0(t,n,i){var r=i.flags;switch(i.tag){case 0:case 11:case 15:wa(t,i),r&4&&jl(5,i);break;case 1:if(wa(t,i),r&4)if(t=i.stateNode,n===null)try{t.componentDidMount()}catch(v){en(i,i.return,v)}else{var l=Es(i.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(l,n,t.__reactInternalSnapshotBeforeUpdate)}catch(v){en(i,i.return,v)}}r&64&&F0(i),r&512&&Ta(i,i.return);break;case 3:if(wa(t,i),r&64&&(t=i.updateQueue,t!==null)){if(n=null,i.child!==null)switch(i.child.tag){case 27:case 5:n=i.child.stateNode;break;case 1:n=i.child.stateNode}try{Cg(t,n)}catch(v){en(i,i.return,v)}}break;case 27:n===null&&r&4&&X0(i);case 26:case 5:wa(t,i),n===null&&r&4&&$h(i),r&512&&Ta(i,i.return);break;case 12:wa(t,i);break;case 31:wa(t,i),r&4&&ev(t,i);break;case 13:wa(t,i),r&4&&nv(t,i),r&64&&(t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(i=Rx.bind(null,i),lM(t,i))));break;case 22:if(r=i.memoizedState!==null||kn,!r){var c=n!==null&&n.memoizedState!==null||Je;n=kn,l=Je,kn=r,(Je=c)&&!l?(r=2,(i.subtreeFlags&8772)!==0&&(r|=1),oa(t,i,r)):wa(t,i),kn=n,Je=l}break;case 30:wa(t,i),r&512&&Ta(i,i.return);break;case 7:r&512&&Ta(i,i.return);default:wa(t,i)}}function cd(t,n){for(t=t.child;t!==null;)J0(t,n),t=t.sibling}function J0(t,n){switch(t.tag){case 5:case 26:try{var i=t.stateNode;if(n){var r=i.style;typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none"}else{var l=t.stateNode,c=t.memoizedProps.style,v=c!=null&&c.hasOwnProperty("display")?c.display:null;l.style.display=v==null||typeof v=="boolean"?"":(""+v).trim()}}catch(H){en(t,t.return,H)}fd(t,n);break;case 6:try{t.stateNode.nodeValue=n?"":t.memoizedProps,Be=!0}catch(H){en(t,t.return,H)}break;case 18:try{var R=t.stateNode;n?kv(R,!0):kv(t.stateNode,!1)}catch(H){en(t,t.return,H)}break;case 22:case 23:t.memoizedState===null&&cd(t,n);break;default:cd(t,n)}}function fd(t,n){if(t.subtreeFlags&67108864)for(t=t.child;t!==null;){t:{var i=t,r=n;switch(i.tag){case 4:J0(i,r);break t;case 22:i.memoizedState===null&&fd(i,r);break t;default:fd(i,r)}}t=t.sibling}}function $0(t){var n=t.alternate;n!==null&&(t.alternate=null,$0(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&Ie(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var mn=null,Ei=!1;function ra(t,n,i){for(i=i.child;i!==null;)tv(t,n,i),i=i.sibling}function tv(t,n,i){if(Qe&&typeof Qe.onCommitFiberUnmount=="function")try{Qe.onCommitFiberUnmount(Le,i)}catch{}switch(i.tag){case 26:Je||Qn(i,n),ra(t,n,i),i.memoizedState?i.memoizedState.count--:i.stateNode&&!Je&&(i=i.stateNode,i.parentNode.removeChild(i));break;case 27:Je||Qn(i,n),Zl(i);var r=mn,l=Ei;Or(i.type)&&(mn=i.stateNode,Ei=!1),ra(t,n,i),a_(i.stateNode,i.type,i.memoizedProps),mn=r,Ei=l;break;case 5:Je||Qn(i,n),Zl(i);case 6:if(i.tag===6&&Zl(i),r=mn,l=Ei,mn=null,ra(t,n,i),mn=r,Ei=l,mn!==null)if(Ei)try{(mn.nodeType===9?mn.body:mn.nodeName==="HTML"?mn.ownerDocument.body:mn).removeChild(i.stateNode),Be=!0}catch(c){en(i,n,c)}else try{mn.removeChild(i.stateNode),Be=!0}catch(c){en(i,n,c)}break;case 18:mn!==null&&(Ei?(t=mn,Xv(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,i.stateNode),Po(t)):Xv(mn,i.stateNode));break;case 4:r=mn,l=Ei,mn=i.stateNode.containerInfo,Ei=!0,ra(t,n,i),mn=r,Ei=l;break;case 0:case 11:case 14:case 15:Rr(2,i,n),Je||Rr(4,i,n),ra(t,n,i);break;case 1:Je||(Qn(i,n),r=i.stateNode,typeof r.componentWillUnmount=="function"&&H0(i,n,r)),ra(t,n,i);break;case 21:ra(t,n,i);break;case 22:Je=(r=Je)||i.memoizedState!==null,ra(t,n,i),Je=r;break;case 30:Qn(i,n),ra(t,n,i);break;case 7:Je||Qn(i,n),ra(t,n,i);break;default:ra(t,n,i)}}function ev(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Po(t)}catch(i){en(n,n.return,i)}}}function nv(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Po(t)}catch(i){en(n,n.return,i)}}function gx(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new K0),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new K0),n;default:throw Error(s(435,t.tag))}}function Dc(t,n){var i=gx(t);n.forEach(function(r){if(!i.has(r)){i.add(r);var l=Cx.bind(null,t,r);r.then(l,l)}})}function di(t,n,i){var r=n.deletions;if(r!==null)for(var l=0;l<r.length;l++){var c=r[l],v=t,R=n,H=R;t:for(;H!==null;){switch(H.tag){case 27:if(Or(H.type)){mn=H.stateNode,Ei=!1;break t}break;case 5:mn=H.stateNode,Ei=!1;break t;case 3:case 4:mn=H.stateNode.containerInfo,Ei=!0;break t}H=H.return}if(mn===null)throw Error(s(160));tv(v,R,c),mn=null,Ei=!1,v=c.alternate,v!==null&&(v.return=null),c.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)iv(n,t,i),n=n.sibling}var sa=null;function iv(t,n,i){var r=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(l&4&&(r=t.updateQueue,r=r!==null?r.events:null,r!==null))for(var c=0;c<r.length;c++){var v=r[c];v.ref.impl=v.nextImpl}di(n,t,i),pi(t),l&4&&(Rr(3,t,t.return),jl(3,t),Rr(5,t,t.return));break;case 1:di(n,t,i),pi(t),l&512&&(Je||r===null||Qn(r,r.return)),l&64&&kn&&(t=t.updateQueue,t!==null&&(n=t.callbacks,n!==null&&(i=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=i===null?n:i.concat(n))));break;case 26:if(c=sa,di(n,t,i),pi(t),l&512&&(Je||r===null||Qn(r,r.return)),l&4)if(l=r!==null?r.memoizedState:null,i=t.memoizedState,r===null)if(i===null)if(t.stateNode===null)if(kn)t.stateNode=Hv(t.type,t.memoizedProps,n.containerInfo,t);else{t:{n=t.type,i=t.memoizedProps,l=c.ownerDocument||c;e:switch(n){case"title":r=l.getElementsByTagName("title")[0],(!r||r[ie]||r[te]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=l.createElement(n),l.head.insertBefore(r,l.querySelector("head > title"))),Jn(r,n,i),r[te]=t,he(r),n=r;break t;case"link":if(c=c_("link","href",l).get(n+(i.href||""))){for(v=0;v<c.length;v++)if(r=c[v],r.getAttribute("href")===(i.href==null||i.href===""?null:i.href)&&r.getAttribute("rel")===(i.rel==null?null:i.rel)&&r.getAttribute("title")===(i.title==null?null:i.title)&&r.getAttribute("crossorigin")===(i.crossOrigin==null?null:i.crossOrigin)){c.splice(v,1);break e}}r=l.createElement(n),Jn(r,n,i),l.head.appendChild(r);break;case"meta":if(c=c_("meta","content",l).get(n+(i.content||""))){for(v=0;v<c.length;v++)if(r=c[v],r.getAttribute("content")===(i.content==null?null:""+i.content)&&r.getAttribute("name")===(i.name==null?null:i.name)&&r.getAttribute("property")===(i.property==null?null:i.property)&&r.getAttribute("http-equiv")===(i.httpEquiv==null?null:i.httpEquiv)&&r.getAttribute("charset")===(i.charSet==null?null:i.charSet)){c.splice(v,1);break e}}r=l.createElement(n),Jn(r,n,i),l.head.appendChild(r);break;default:throw Error(s(468,n))}r[te]=t,he(r),n=r}t.stateNode=n}else kn||Zd(c,t.type,t.stateNode);else t.stateNode=u_(c,i,t.memoizedProps);else l!==i?(l===null?(n=r.stateNode,n===null||Je||n.parentNode.removeChild(n)):l.count--,i===null?kn||Zd(c,t.type,t.stateNode):u_(c,i,t.memoizedProps)):i===null&&t.stateNode!==null&&td(t,t.memoizedProps,r.memoizedProps);break;case 27:di(n,t,i),pi(t),l&512&&(Je||r===null||Qn(r,r.return)),r!==null&&l&4&&td(t,t.memoizedProps,r.memoizedProps);break;case 5:if(c=Ra,Ra=!1,di(n,t,i),Ra=c,pi(t),l&512&&(Je||r===null||Qn(r,r.return)),t.flags&32){n=t.stateNode;try{Vn(n,""),Be=!0}catch(ct){en(t,t.return,ct)}}l&4&&t.stateNode!=null&&(n=t.memoizedProps,td(t,n,r!==null?r.memoizedProps:n)),l&1024&&(ld=!0);break;case 6:if(di(n,t,i),pi(t),l&4){if(t.stateNode===null)throw Error(s(162));n=t.memoizedProps,i=t.stateNode;try{i.nodeValue=n,Be=!0}catch(ct){en(t,t.return,ct)}}break;case 3:if(Be=!1,Yc=null,c=sa,sa=ru(n.containerInfo),di(n,t,i),sa=c,pi(t),l&4&&r!==null&&r.memoizedState.isDehydrated)try{Po(n.containerInfo)}catch(ct){en(t,t.return,ct)}ld&&(ld=!1,av(t)),Be=!1;break;case 4:l=Ra,Ra=kn,r=vl(),c=sa,sa=ru(t.stateNode.containerInfo),di(n,t,i),pi(t),sa=c,Be&&Kl&&(Cc=!0),Be=r,Ra=l;break;case 12:di(n,t,i),pi(t);break;case 31:di(n,t,i),pi(t),l&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,Dc(t,n)));break;case 13:di(n,t,i),pi(t),t.child.flags&8192&&t.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(Lc=W()),l&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,Dc(t,n)));break;case 22:c=t.memoizedState!==null,v=r!==null&&r.memoizedState!==null;var R=kn,H=Je,it=Ra;kn=R||c,Ra=it||c,Je=H||v,di(n,t,i),Je=H,Ra=it,kn=R,pi(t),l&8192&&(n=t.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,!c||r===null||v||kn||Je||(n=v||Je,i=kn,r=Je,kn=c||kn,Je=n,Cr(t,2),kn=i,Je=r),!c&&Ra||cd(t,c)),l&4&&(n=t.updateQueue,n!==null&&(i=n.retryQueue,i!==null&&(n.retryQueue=null,Dc(t,i))));break;case 19:di(n,t,i),pi(t),l&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,Dc(t,n)));break;case 30:l&512&&(Je||r===null||Qn(r,r.return)),l=vl(),c=Kl,v=(i&335544064)===i,R=t.memoizedProps,Kl=v&&Va(R.default,R.update)!=="none",di(n,t,i),pi(t),v&&r!==null&&Be&&(t.flags|=4),Kl=c,Be=l;break;case 21:break;case 7:l&512&&(Je||r===null||Qn(r,r.return)),r&&r.stateNode!==null&&(r.stateNode._fragmentFiber=t);default:di(n,t,i),pi(t)}}function pi(t){var n=t.flags;if(n&2){try{for(var i,r=t.return;r!==null;){if(V0(r)){i=r;break}r=r.return}r=null;for(var l=t.return;l!==null;){if(Jh(l)){var c=l.stateNode;r===null?r=[c]:r.push(c)}if(Qh(l))break;l=l.return}var v=r;if(i==null)throw Error(s(160));switch(i.tag){case 27:var R=i.stateNode,H=ed(t);Tc(t,H,R,v);break;case 5:var it=i.stateNode;i.flags&32&&(Vn(it,""),i.flags&=-33);var ct=ed(t);Tc(t,ct,it,v);break;case 3:case 4:var Tt=i.stateNode.containerInfo,tt=ed(t);nd(t,tt,Tt,v);break;default:throw Error(s(161))}}catch(st){en(t,t.return,st)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function av(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;av(n),n.tag===5&&n.flags&1024&&(n=n.stateNode,Oo=!0,n.reset(),Oo=!1),t=t.sibling}}function vo(t,n){if(n.subtreeFlags&9270)for(n=n.child;n!==null;)rv(n,t),n=n.sibling;else Z0(n)}function rv(t,n){var i=t.alternate;if(i===null)id(t,!1);else switch(t.tag){case 3:if(ud=Ca=!1,Y0(),vo(n,t),!Ca&&!Cc){if(t=Aa,t!==null)for(var r=0;r<t.length;r+=3){i=t[r];var l=t[r+1];qv(i,t[r+2]),i=i.ownerDocument.documentElement,i!==null&&i.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+l+")"})}t=n.containerInfo,t=t.nodeType===9?t.documentElement:t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName===""&&(t.style.viewTransitionName="none",t.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),t.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),ud=!0}Aa=null;break;case 5:vo(n,t);break;case 4:r=Ca,Ca=!1,vo(n,t),Ca&&(Cc=!0),Ca=r;break;case 22:t.memoizedState===null&&(i.memoizedState!==null?id(t,!1):vo(n,t));break;case 30:r=Ca,l=Y0(),Ca=!1,vo(n,t),Ca&&(t.flags|=4);var c=t.memoizedProps,v=t.stateNode;n=Ga(c,v),v=Ga(i.memoizedProps,v);var R=Va(c.default,c.update);R==="none"?n=!1:(c=i.memoizedState,i.memoizedState=null,i=t.child,Mi=0,n=od(t,i,n,v,R,c,!0),Mi!==(c===null?0:c.length)&&(t.flags|=32)),(t.flags&4)!==0&&n?(To(t,t.memoizedProps.onUpdate),Aa=l):l!==null&&(l.push.apply(l,Aa),Aa=l),Ca=(t.flags&32)!==0?!0:r;break;default:vo(n,t)}}function wa(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Q0(t,n.alternate,n),n=n.sibling}function Cr(t,n){for(t=t.child;t!==null;){var i=t,r=n;switch(i.tag){case 0:case 11:case 14:case 15:Rr(4,i,i.return),Cr(i,r);break;case 1:Qn(i,i.return);var l=i.stateNode;typeof l.componentWillUnmount=="function"&&H0(i,i.return,l),Cr(i,r);break;case 27:(r&2)!==0&&a_(i.stateNode,i.type,i.memoizedProps);case 5:Qn(i,i.return),i.tag!==5&&i.tag!==27||Zl(i),Cr(i,r);break;case 6:Zl(i);break;case 26:Qn(i,i.return),l=i.stateNode,i.memoizedState!==null||l===null||Je||l.parentNode.removeChild(l),Cr(i,r);break;case 22:i.memoizedState===null&&Cr(i,r);break;case 30:Qn(i,i.return),Cr(i,r);break;case 7:Qn(i,i.return);default:Cr(i,r)}t=t.sibling}}function oa(t,n,i){for(i=(n.subtreeFlags&8772)!==0?i:i&-2,n=n.child;n!==null;){var r=n.alternate,l=t,c=n,v=c.flags,R=(i&1)!==0;switch(c.tag){case 0:case 11:case 15:oa(l,c,i),jl(4,c);break;case 1:if(oa(l,c,i),r=c,l=r.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(ct){en(r,r.return,ct)}if(r=c,l=r.updateQueue,l!==null){var H=r.stateNode;try{var it=l.shared.hiddenCallbacks;if(it!==null)for(l.shared.hiddenCallbacks=null,l=0;l<it.length;l++)Rg(it[l],H)}catch(ct){en(r,r.return,ct)}}R&&v&64&&F0(c),Ta(c,c.return);break;case 27:(i&2)!==0&&X0(c);case 5:c.tag!==5&&c.tag!==27||G0(c),oa(l,c,i),R&&r===null&&v&4&&$h(c),Ta(c,c.return);break;case 6:G0(c);break;case 26:H=c.stateNode,c.memoizedState!==null||H===null||kn||Zd(ru(H.ownerDocument),c.type,H),oa(l,c,i),R&&r===null&&v&4&&$h(c),Ta(c,c.return);break;case 12:oa(l,c,i);break;case 31:oa(l,c,i),R&&v&4&&ev(l,c);break;case 13:oa(l,c,i),R&&v&4&&nv(l,c);break;case 22:c.memoizedState===null&&oa(l,c,i),Ta(c,c.return);break;case 30:oa(l,c,i),Ta(c,c.return);break;case 7:Ta(c,c.return);default:oa(l,c,i)}n=n.sibling}}function hd(t,n){var i=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==i&&(t!=null&&t.refCount++,i!=null&&Pl(i))}function dd(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Pl(t))}function Zi(t,n,i,r){var l=(i&335544064)===i;if(n.subtreeFlags&(l?10262:10256))for(n=n.child;n!==null;)sv(t,n,i,r),n=n.sibling;else l&&j0(n)}function sv(t,n,i,r){var l=(i&335544064)===i;l&&n.alternate===null&&n.return!==null&&n.return.alternate!==null&&Rc(n);var c=n.flags;switch(n.tag){case 0:case 11:case 15:Zi(t,n,i,r),c&2048&&jl(9,n);break;case 1:Zi(t,n,i,r);break;case 3:Zi(t,n,i,r),l&&ud&&(t=t.containerInfo,t=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,t.style.viewTransitionName==="root"&&(t.style.viewTransitionName=""),t=t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName==="none"&&(t.style.viewTransitionName="")),c&2048&&(c=null,n.alternate!==null&&(c=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==c&&(n.refCount++,c!=null&&Pl(c)));break;case 12:if(c&2048){Zi(t,n,i,r),c=n.stateNode;try{var v=n.memoizedProps,R=v.id,H=v.onPostCommit;typeof H=="function"&&H(R,n.alternate===null?"mount":"update",c.passiveEffectDuration,-0)}catch(it){en(n,n.return,it)}}else Zi(t,n,i,r);break;case 31:Zi(t,n,i,r);break;case 13:Zi(t,n,i,r);break;case 23:break;case 22:v=n.stateNode,R=n.alternate,n.memoizedState!==null?(l&&R!==null&&R.memoizedState===null&&Rc(R),v._visibility&2?Zi(t,n,i,r):Ql(t,n)):(l&&R!==null&&R.memoizedState!==null&&Rc(n),v._visibility&2?Zi(t,n,i,r):(v._visibility|=2,_o(t,n,i,r,(n.subtreeFlags&10256)!==0||!1))),c&2048&&hd(R,n);break;case 24:Zi(t,n,i,r),c&2048&&dd(n.alternate,n);break;case 30:l&&(c=n.alternate,c!==null&&(ba(c.child,!0),ba(n.child,!0))),Zi(t,n,i,r);break;default:Zi(t,n,i,r)}}function _o(t,n,i,r,l){for(l=l&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var c=t,v=n,R=i,H=r,it=v.flags;switch(v.tag){case 0:case 11:case 15:_o(c,v,R,H,l),jl(8,v);break;case 23:break;case 22:var ct=v.stateNode;v.memoizedState!==null?ct._visibility&2?_o(c,v,R,H,l):Ql(c,v):(ct._visibility|=2,_o(c,v,R,H,l)),l&&it&2048&&hd(v.alternate,v);break;case 24:_o(c,v,R,H,l),l&&it&2048&&dd(v.alternate,v);break;default:_o(c,v,R,H,l)}n=n.sibling}}function Ql(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var i=t,r=n,l=r.flags;switch(r.tag){case 22:Ql(i,r),l&2048&&hd(r.alternate,r);break;case 24:Ql(i,r),l&2048&&dd(r.alternate,r);break;default:Ql(i,r)}n=n.sibling}}var Ts=8192;function As(t,n,i){if(t.subtreeFlags&Ts)for(t=t.child;t!==null;)ov(t,n,i),t=t.sibling}function ov(t,n,i){switch(t.tag){case 26:As(t,n,i),t.flags&Ts&&(t.memoizedState!==null?MM(i,sa,t.memoizedState,t.memoizedProps):(t=t.stateNode,(n&335544128)===n&&p_(i,t)));break;case 5:As(t,n,i),t.flags&Ts&&(t=t.stateNode,(n&335544128)===n&&p_(i,t));break;case 3:case 4:var r=sa;sa=ru(t.stateNode.containerInfo),As(t,n,i),sa=r;break;case 22:t.memoizedState===null&&(r=t.alternate,r!==null&&r.memoizedState!==null?(r=Ts,Ts=16777216,As(t,n,i),Ts=r):As(t,n,i));break;case 30:if((t.flags&Ts)!==0&&(r=t.memoizedProps.name,r!=null&&r!=="auto")){var l=t.stateNode;l.paired=null,Li===null&&(Li=new Map),Li.set(r,l)}As(t,n,i);break;default:As(t,n,i)}}function lv(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function Jl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];Yn=r,cv(r,t)}lv(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)uv(t),t=t.sibling}function uv(t){switch(t.tag){case 0:case 11:case 15:Jl(t),t.flags&2048&&Rr(9,t,t.return);break;case 3:Jl(t);break;case 12:Jl(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Uc(t)):Jl(t);break;default:Jl(t)}}function Uc(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];Yn=r,cv(r,t)}lv(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Rr(8,n,n.return),Uc(n);break;case 22:i=n.stateNode,i._visibility&2&&(i._visibility&=-3,Uc(n));break;default:Uc(n)}t=t.sibling}}function cv(t,n){for(;Yn!==null;){var i=Yn;switch(i.tag){case 0:case 11:case 15:Rr(8,i,n);break;case 23:case 22:if(i.memoizedState!==null&&i.memoizedState.cachePool!==null){var r=i.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:Pl(i.memoizedState.cache)}if(r=i.child,r!==null)r.return=i,Yn=r;else t:for(i=t;Yn!==null;){r=Yn;var l=r.sibling,c=r.return;if($0(r),r===i){Yn=null;break t}if(l!==null){l.return=c,Yn=l;break t}Yn=c}}}var vx={getCacheForType:function(t){var n=jn(Cn),i=n.data.get(t);return i===void 0&&(i=t(),n.data.set(t,i)),i},cacheSignal:function(){return jn(Cn).controller.signal}},_x=typeof WeakMap=="function"?WeakMap:Map,Ke=0,fn=null,Fe=null,Xe=0,tn=0,Oi=null,wr=!1,yo=!1,pd=!1,Qa=0,Mn=0,Dr=0,bs=0,Nc=0,Pi=0,So=0,$l=null,Ti=null,md=!1,Lc=0,fv=0,Oc=1/0,Pc=null,Ur=null,vn=0,la=null,Rs=null,Da=0,gd=0,vd=null,hv=null,xo=null,Mo=null,Eo=null,tu=0,zc=null;function zi(){return(Ke&2)!==0&&Xe!==0?Xe&-Xe:Ot.T!==null?Rd():ae()}function dv(){if(Pi===0)if((Xe&536870912)===0||ze){var t=$e;$e<<=1,($e&3932160)===0&&($e=262144),Pi=t}else Pi=536870912;return t=Zn.current,t!==null&&(t.flags|=32),Pi}function To(t,n){if(n!=null){var i=t.stateNode,r=i.ref;r===null&&(r=i.ref=Wv(Ga(t.memoizedProps,i))),Mo===null&&(Mo=[]),Mo.push(n.bind(null,r))}}function Ai(t,n,i){(t===fn&&(tn===2||tn===9)||t.cancelPendingCommit!==null)&&(Ao(t,0),Nr(t,Xe,Pi,!1)),D(t,i),((Ke&2)===0||t!==fn)&&(t===fn&&((Ke&2)===0&&(bs|=i),Mn===4&&Nr(t,Xe,Pi,!1)),Ua(t))}function pv(t,n,i){if((Ke&6)!==0)throw Error(s(327));var r=!i&&(n&127)===0&&(n&t.expiredLanes)===0||Ci(t,n),l=r?xx(t,n):yd(t,n,!0),c=r;do{if(l===0){yo&&!r&&Nr(t,n,0,!1);break}else{if(i=t.current.alternate,c&&!yx(i)){l=yd(t,n,!1),c=!1;continue}if(l===2){if(c=n,t.errorRecoveryDisabledLanes&c)var v=0;else v=t.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){n=v;t:{var R=t;l=$l;var H=R.current.memoizedState.isDehydrated;if(H&&(Ao(R,v).flags|=256),v=yd(R,v,!1),v!==2&&v!==6){if(pd&&!H){R.errorRecoveryDisabledLanes|=c,bs|=c,l=4;break t}c=Ti,Ti=l,c!==null&&(Ti===null?Ti=c:Ti.push.apply(Ti,c))}l=v}if(c=!1,l!==2)continue}}if(l===1){Ao(t,0),Nr(t,n,0,!0);break}t:{switch(r=t,c=l,c){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n&&(n&62914560)!==n)break;case 6:Nr(r,n,Pi,!wr);break t;case 2:Ti=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(l=Lc+300-W(),10<l)){if(Nr(r,n,Pi,!wr),$i(r,0,!0)!==0)break t;Da=n,r.timeoutHandle=Bd(mv.bind(null,r,i,Ti,Pc,md,n,Pi,bs,So,wr,c,"Throttled",-0,0),l);break t}mv(r,i,Ti,Pc,md,n,Pi,bs,So,wr,c,null,-0,0)}}break}while(!0);Ua(t)}function mv(t,n,i,r,l,c,v,R,H,it,ct,Tt,tt,st){t.timeoutHandle=-1;var kt=n.subtreeFlags,oe=(c&335544064)===c;if(Tt=null,(oe||kt&8192||(kt&16785408)===16785408)&&(Tt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:wi},Li=null,ov(n,c,Tt),oe&&(kt=Tt,oe=t.containerInfo,oe=(oe.nodeType===9?oe:oe.ownerDocument).__reactViewTransition,oe!=null&&(kt.count++,kt.waitingForViewTransition=!0,kt=lu.bind(kt),oe.finished.then(kt,kt))),kt=(c&62914560)===c?Lc-W():(c&4194048)===c?fv-W():0,kt=EM(Tt,kt),kt!==null)){Da=c,t.cancelPendingCommit=kt(Ev.bind(null,t,n,c,i,r,l,v,R,H,it,ct,Tt,null,tt,st)),Nr(t,c,v,!it);return}Ev(t,n,c,i,r,l,v,R,H,it,ct,Tt)}function yx(t){for(var n=t;;){var i=n.tag;if((i===0||i===11||i===15)&&n.flags&16384&&(i=n.updateQueue,i!==null&&(i=i.stores,i!==null)))for(var r=0;r<i.length;r++){var l=i[r],c=l.getSnapshot;l=l.value;try{if(!Ui(c(),l))return!1}catch{return!1}}if(i=n.child,n.subtreeFlags&16384&&i!==null)i.return=n,n=i;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Nr(t,n,i,r){n=Ba(t,n),n&=~Nc,n&=~bs,t.suspendedLanes|=n,t.pingedLanes&=~n,r&&(t.warmLanes|=n),r=t.expirationTimes;for(var l=n;0<l;){var c=31-gn(l),v=1<<c;r[c]=-1,l&=~v}i!==0&&mt(t,i,n)}function Ic(){return(Ke&6)===0?(eu(0),!1):!0}function _d(){if(Fe!==null){if(tn===0)var t=Fe.return;else t=Fe,Ya=ps=null,bh(t),co=null,Bl=0,t=Fe;for(;t!==null;)B0(t.alternate,t),t=t.return;Fe=null}}function Ao(t,n){var i=t.timeoutHandle;return i!==-1&&(t.timeoutHandle=-1,Xx(i)),i=t.cancelPendingCommit,i!==null&&(t.cancelPendingCommit=null,i()),Da=0,_d(),fn=t,Fe=i=Xa(t.current,null),Xe=n,tn=0,Oi=null,wr=!1,yo=Ci(t,n),pd=!1,So=Pi=Nc=bs=Dr=Mn=0,Ti=$l=null,md=!1,Qa=Ba(t,n),Yu(),i}function gv(t,n){Re=null,Ot.H=gc,n===uo||n===nc?(n=Eg(),tn=3):n===dh?(n=Eg(),tn=4):tn=n===Gh?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Oi=n,Fe===null&&(Mn=1,vc(t,Yi(n,t.current)))}function vv(){var t=Zn.current;return t===null?!0:(Xe&4194048)===Xe?ai===null:(Xe&62914560)===Xe||(Xe&536870912)!==0?t===ai:!1}function _v(){var t=Ot.H;return Ot.H=gc,t===null?gc:t}function yv(){var t=Ot.A;return Ot.A=vx,t}function Bc(){Mn=4,wr||(Xe&4194048)!==Xe&&Zn.current!==null||(yo=!0),(Dr&134217727)===0&&(bs&134217727)===0||fn===null||Nr(fn,Xe,Pi,!1)}function yd(t,n,i){var r=Ke;Ke|=2;var l=_v(),c=yv();(fn!==t||Xe!==n)&&(Pc=null,Ao(t,n)),n=!1;var v=Mn;t:do try{if(tn!==0&&Fe!==null){var R=Fe,H=Oi;switch(tn){case 8:_d(),v=6;break t;case 3:case 2:case 9:case 6:Zn.current===null&&(n=!0);var it=tn;if(tn=0,Oi=null,bo(t,R,H,it),i&&yo){v=0;break t}break;default:it=tn,tn=0,Oi=null,bo(t,R,H,it)}}Sx(),v=Mn;break}catch(ct){gv(t,ct)}while(!0);return n&&t.shellSuspendCounter++,Ya=ps=null,Ke=r,Ot.H=l,Ot.A=c,Fe===null&&(fn=null,Xe=0,Yu()),v}function Sx(){for(;Fe!==null;)Sv(Fe)}function xx(t,n){var i=Ke;Ke|=2;var r=_v(),l=yv();fn!==t||Xe!==n?(Pc=null,Oc=W()+500,Ao(t,n)):yo=Ci(t,n);t:do try{if(tn!==0&&Fe!==null){n=Fe;var c=Oi;e:switch(tn){case 1:tn=0,Oi=null,bo(t,n,c,1);break;case 2:case 9:if(xg(c)){tn=0,Oi=null,xv(n);break}n=function(){tn!==2&&tn!==9||fn!==t||(tn=7),Ua(t)},c.then(n,n);break t;case 3:tn=7;break t;case 4:tn=5;break t;case 7:xg(c)?(tn=0,Oi=null,xv(n)):(tn=0,Oi=null,bo(t,n,c,7));break;case 5:var v=null;switch(Fe.tag){case 26:v=Fe.memoizedState;case 5:case 27:var R=Fe;if(v?h_(v):R.stateNode.complete){tn=0,Oi=null;var H=R.sibling;if(H!==null)Fe=H;else{var it=R.return;it!==null?(Fe=it,Fc(it)):Fe=null}break e}}tn=0,Oi=null,bo(t,n,c,5);break;case 6:tn=0,Oi=null,bo(t,n,c,6);break;case 8:_d(),Mn=6;break t;default:throw Error(s(462))}}Mx();break}catch(ct){gv(t,ct)}while(!0);return Ya=ps=null,Ot.H=r,Ot.A=l,Ke=i,Fe!==null?0:(fn=null,Xe=0,Yu(),Mn)}function Mx(){for(;Fe!==null&&!_e();)Sv(Fe)}function Sv(t){var n=z0(t.alternate,t,Qa);t.memoizedProps=t.pendingProps,n===null?Fc(t):Fe=n}function xv(t){var n=t,i=n.alternate;switch(n.tag){case 15:case 0:n=w0(i,n,n.pendingProps,n.type,void 0,Xe);break;case 11:n=w0(i,n,n.pendingProps,n.type.render,n.ref,Xe);break;case 5:bh(n);var r=n;r===Xn&&(ze?(Qu(r),r.tag===5&&r.stateNode!=null&&(dn=r.stateNode)):(Qu(r),ze=!0));default:B0(i,n),n=Fe=cg(n,Qa),n=z0(i,n,Qa)}t.memoizedProps=t.pendingProps,n===null?Fc(t):Fe=n}function bo(t,n,i,r){Ya=ps=null,bh(n),co=null,Bl=0;var l=n.return;try{if(ux(t,l,n,i,Xe)){Mn=1,vc(t,Yi(i,t.current)),Fe=null;return}}catch(c){if(l!==null)throw Fe=l,c;Mn=1,vc(t,Yi(i,t.current)),Fe=null;return}n.flags&32768?(ze||r===1?t=!0:yo||(Xe&536870912)!==0?t=!1:(wr=t=!0,(r===2||r===9||r===3||r===6)&&(r=Zn.current,r!==null&&r.tag===13&&(r.flags|=16384))),Mv(n,t)):Fc(n)}function Fc(t){var n=t;do{if((n.flags&32768)!==0){Mv(n,wr);return}t=n.return;var i=dx(n.alternate,n,Qa);if(i!==null){Fe=i;return}if(n=n.sibling,n!==null){Fe=n;return}Fe=n=t}while(n!==null);Mn===0&&(Mn=5)}function Mv(t,n){do{var i=px(t.alternate,t);if(i!==null){i.flags&=32767,Fe=i;return}if(i=t.return,i!==null&&(i.flags|=32768,i.subtreeFlags=0,i.deletions=null),!n&&(t=t.sibling,t!==null)){Fe=t;return}Fe=t=i}while(t!==null);Mn=6,Fe=null}function Ev(t,n,i,r,l,c,v,R,H,it,ct,Tt){t.cancelPendingCommit=null;do Hc();while(vn!==0);if((Ke&6)!==0)throw Error(s(327));if(n!==null){if(n===t.current)throw Error(s(177));t===fn&&(Fe=fn=null,Xe=0),Rs=n,la=t,Da=i,vd=l,hv=r,Ex(t,n,i,v,R,H,Tt)}}function Ex(t,n,i,r,l,c,v){var R=n.lanes|n.childLanes;if(gd=R,R|=th,nt(t,i,R,r,l,c),Mo=null,(i&335544064)===i?(Eo=QS(t),r=10262):(Eo=null,r=10256),(n.subtreeFlags&r)!==0||(n.flags&r)!==0?(t.callbackNode=null,t.callbackPriority=0,wx(qt,function(){return Ed(),null})):(t.callbackNode=null,t.callbackPriority=0),Ac=!1,r=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||r){r=Ot.T,Ot.T=null,l=Bt.p,Bt.p=2,c=Ke,Ke|=4;try{mx(t,n,i)}finally{Ke=c,Bt.p=l,Ot.T=r}}vn=1,Ac?xo=Zx(v,t.containerInfo,Eo,Sd,xd,Ax,Md,Ed,Tx):(Sd(),xd(),Md())}function Tx(t){if(vn!==0){var n=la.onRecoverableError;n(t,{componentStack:null})}}function Ax(){vn===3&&(vn=0,rv(Rs,la),vn=4)}function Sd(){if(vn===1){vn=0;var t=la,n=Rs,i=Da,r=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||r){r=Ot.T,Ot.T=null;var l=Bt.p;Bt.p=2;var c=Ke;Ke|=4;try{Kl=Cc=!1,iv(n,t,i),i=Pd;var v=tg(t.containerInfo),R=i.focusedElem,H=i.selectionRange;if(v!==R&&R&&R.ownerDocument&&$m(R.ownerDocument.documentElement,R)){if(H!==null&&Zf(R)){var it=H.start,ct=H.end;if(ct===void 0&&(ct=it),"selectionStart"in R)R.selectionStart=it,R.selectionEnd=Math.min(ct,R.value.length);else{var Tt=R.ownerDocument||document,tt=Tt&&Tt.defaultView||window;if(tt.getSelection){var st=tt.getSelection(),kt=R.textContent.length,oe=Math.min(H.start,kt),Ce=H.end===void 0?oe:Math.min(H.end,kt);!st.extend&&oe>Ce&&(v=Ce,Ce=oe,oe=v);var et=Jm(R,oe),Y=Jm(R,Ce);if(et&&Y&&(st.rangeCount!==1||st.anchorNode!==et.node||st.anchorOffset!==et.offset||st.focusNode!==Y.node||st.focusOffset!==Y.offset)){var rt=Tt.createRange();rt.setStart(et.node,et.offset),st.removeAllRanges(),oe>Ce?(st.addRange(rt),st.extend(Y.node,Y.offset)):(rt.setEnd(Y.node,Y.offset),st.addRange(rt))}}}}for(Tt=[],st=R;st=st.parentNode;)st.nodeType===1&&Tt.push({element:st,left:st.scrollLeft,top:st.scrollTop});for(typeof R.focus=="function"&&R.focus(),R=0;R<Tt.length;R++){var Et=Tt[R];Et.element.scrollLeft=Et.left,Et.element.scrollTop=Et.top}}Oo=!!Od,Pd=Od=null}finally{Ke=c,Bt.p=l,Ot.T=r}}t.current=n,vn=2}}function xd(){if(vn===2){vn=0;var t=la,n=Rs,i=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||i){i=Ot.T,Ot.T=null;var r=Bt.p;Bt.p=2;var l=Ke;Ke|=4;try{Q0(t,n.alternate,n)}finally{Ke=l,Bt.p=r,Ot.T=i}}vn=3}}function Md(){if(vn===4||vn===3){vn=0;var t=xo;xo=null,Ge();var n=la,i=Rs,r=Da,l=hv,c=(r&335544064)===r?10262:10256;if((i.subtreeFlags&c)!==0||(i.flags&c)!==0?vn=5:(vn=0,Rs=la=null,Tv(n,n.pendingLanes)),c=n.pendingLanes,c===0&&(Ur=null),Wt(r),i=i.stateNode,Qe&&typeof Qe.onCommitFiberRoot=="function")try{Qe.onCommitFiberRoot(Le,i,void 0,(i.current.flags&128)===128)}catch{}if(l!==null){i=Ot.T,c=Bt.p,Bt.p=2,Ot.T=null;try{for(var v=n.onRecoverableError,R=0;R<l.length;R++){var H=l[R];v(H.value,{componentStack:H.stack})}}finally{Ot.T=i,Bt.p=c}}if(l=Mo,v=Eo,Eo=null,l!==null&&(Mo=null,v===null&&(v=[]),t!==null))for(H=0;H<l.length;H++)i=(0,l[H])(v),i!==void 0&&t.finished.finally(i);(Da&3)!==0&&Hc(),Ua(n),c=n.pendingLanes,(r&261930)!==0&&(c&42)!==0?n===zc?tu++:(tu=0,zc=n):(tu=0,zc=null),eu(0)}}function Tv(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,Pl(n)))}function Hc(){return xo!==null&&(xo.skipTransition(),xo=null),Sd(),xd(),Md(),Ed()}function Ed(){if(vn!==5)return!1;var t=la,n=gd;gd=0;var i=Wt(Da),r=Ot.T,l=Bt.p;try{Bt.p=32>i?32:i,Ot.T=null,i=vd,vd=null;var c=la,v=Da;if(vn=0,Rs=la=null,Da=0,(Ke&6)!==0)throw Error(s(331));var R=Ke;if(Ke|=4,uv(c.current),sv(c,c.current,v,i),Ke=R,eu(0,!1),Qe&&typeof Qe.onPostCommitFiberRoot=="function")try{Qe.onPostCommitFiberRoot(Le,c)}catch{}return!0}finally{Bt.p=l,Ot.T=r,Tv(t,n)}}function Av(t,n,i){n=Yi(i,n),n=Hh(t.stateNode,n,2),t=Er(t,n,2),t!==null&&(D(t,2),Ua(t))}function en(t,n,i){if(t.tag===3)Av(t,t,i);else for(;n!==null;){if(n.tag===3){Av(n,t,i);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ur===null||!Ur.has(r))){t=Yi(i,t),i=x0(2),r=Er(n,i,2),r!==null&&(M0(i,r,n,t),D(r,2),Ua(r));break}}n=n.return}}function Td(t,n,i){var r=t.pingCache;if(r===null){r=t.pingCache=new _x;var l=new Set;r.set(n,l)}else l=r.get(n),l===void 0&&(l=new Set,r.set(n,l));l.has(i)||(pd=!0,l.add(i),t=bx.bind(null,t,n,i),n.then(t,t))}function bx(t,n,i){var r=t.pingCache;r!==null&&r.delete(n),t.pingedLanes|=t.suspendedLanes&i,t.warmLanes&=~i,fn===t&&(Xe&i)===i&&((Mn===4||Mn===3&&(Xe&62914560)===Xe&&300>W()-Lc)&&(Ke&2)===0?Ao(t,0):Nc|=i,So===Xe&&(So=0)),Ua(t)}function bv(t,n){n===0&&(n=_a()),t=fs(t,n),t!==null&&(D(t,n),Ua(t))}function Rx(t){var n=t.memoizedState,i=0;n!==null&&(i=n.retryLane),bv(t,i)}function Cx(t,n){var i=0;switch(t.tag){case 31:case 13:var r=t.stateNode,l=t.memoizedState;l!==null&&(i=l.retryLane);break;case 19:r=t.stateNode;break;case 22:r=t.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(n),bv(t,i)}function wx(t,n){return It(t,n)}var Ro=null,Co=null,Ad=!1,Gc=!1,bd=!1,Lr=0;function Ua(t){t!==Co&&t.next===null&&(Co===null?Ro=Co=t:Co=Co.next=t),Gc=!0,Ad||(Ad=!0,Ux())}function eu(t,n){if(!bd&&Gc){bd=!0;do for(var i=!1,r=Ro;r!==null;){if(t!==0){var l=r.pendingLanes;if(l===0)var c=0;else{var v=r.suspendedLanes,R=r.pingedLanes;c=(1<<31-gn(42|t)+1)-1,c&=l&~(v&~R),c=c&201326741?c&201326741|1:c?c|2:0}c!==0&&(i=!0,Dv(r,c))}else c=Xe,c=$i(r,r===fn?c:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(c&3)===0||Ci(r,c)||(i=!0,Dv(r,c));r=r.next}while(i);bd=!1}}function Dx(){Rv()}function Rv(){Gc=Ad=!1;var t=0;Lr!==0&&Vx()&&(t=Lr);for(var n=W(),i=null,r=Ro;r!==null;){var l=r.next,c=Cv(r,n);c===0?(r.next=null,i===null?Ro=l:i.next=l,l===null&&(Co=i)):(i=r,(t!==0||(c&3)!==0)&&(Gc=!0)),r=l}vn!==0&&vn!==5||eu(t),Lr!==0&&(Lr=0)}function Cv(t,n){for(var i=t.suspendedLanes,r=t.pingedLanes,l=t.expirationTimes,c=t.pendingLanes&-62914561;0<c;){var v=31-gn(c),R=1<<v,H=l[v];H===-1?((R&i)===0||(R&r)!==0)&&(l[v]=ur(R,n)):H<=n&&(t.expiredLanes|=R),c&=~R}if(n=fn,i=Xe,i=$i(t,t===n?i:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r=t.callbackNode,i===0||t===n&&(tn===2||tn===9)||t.cancelPendingCommit!==null)return r!==null&&r!==null&&Vt(r),t.callbackNode=null,t.callbackPriority=0;if((i&3)===0||Ci(t,i)){if(n=i&-i,n===t.callbackPriority)return n;switch(r!==null&&Vt(r),Wt(i)){case 2:case 8:i=Ct;break;case 32:i=qt;break;case 268435456:i=ye;break;default:i=qt}return r=wv.bind(null,t),i=It(i,r),t.callbackPriority=n,t.callbackNode=i,n}return r!==null&&r!==null&&Vt(r),t.callbackPriority=2,t.callbackNode=null,2}function wv(t,n){if(vn!==0&&vn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var i=t.callbackNode;if(Hc()&&t.callbackNode!==i)return null;var r=Xe;return r=$i(t,t===fn?r:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r===0?null:(pv(t,r,n),Cv(t,W()),t.callbackNode!=null&&t.callbackNode===i?wv.bind(null,t):null)}function Dv(t,n){if(Hc())return null;pv(t,n,!0)}function Ux(){kx(function(){(Ke&6)!==0?It(_t,Dx):Rv()})}function Rd(){if(Lr===0){var t=vs;t===0&&(t=va,va<<=1,(va&261888)===0&&(va=256)),Lr=t}return Lr}function Uv(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:na(t)}function Nx(t,n,i,r,l){if(n==="submit"&&i&&i.stateNode===l){var c=Uv((l[Zt]||null).action),v=r.submitter;v&&(n=(n=v[Zt]||null)?Uv(n.formAction):v.getAttribute("formAction"),n!==null&&(c=n,v=null));var R=new Qs("action","action",null,r,l);t.push({event:R,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(Lr!==0){var H=new FormData(l,v);Ph(i,{pending:!0,data:H,method:l.method,action:c},null,H)}}else typeof c=="function"&&(R.preventDefault(),H=new FormData(l,v),Ph(i,{pending:!0,data:H,method:l.method,action:c},c,H))},currentTarget:l}]})}}for(var Cd=0;Cd<$f.length;Cd++){var wd=$f[Cd],Lx=wd.toLowerCase(),Ox=wd[0].toUpperCase()+wd.slice(1);aa(Lx,"on"+Ox)}aa(ig,"onAnimationEnd"),aa(ag,"onAnimationIteration"),aa(rg,"onAnimationStart"),aa("dblclick","onDoubleClick"),aa("focusin","onFocus"),aa("focusout","onBlur"),aa(XS,"onTransitionRun"),aa(kS,"onTransitionStart"),aa(YS,"onTransitionCancel"),aa(sg,"onTransitionEnd"),Gn("onMouseEnter",["mouseout","mouseover"]),Gn("onMouseLeave",["mouseout","mouseover"]),Gn("onPointerEnter",["pointerout","pointerover"]),Gn("onPointerLeave",["pointerout","pointerover"]),On("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),On("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),On("onBeforeInput",["compositionend","keypress","textInput","paste"]),On("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),On("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),On("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var nu="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Px=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(nu));function Nv(t,n){n=(n&4)!==0;for(var i=0;i<t.length;i++){var r=t[i],l=r.event;r=r.listeners;t:{var c=void 0;if(n)for(var v=r.length-1;0<=v;v--){var R=r[v],H=R.instance,it=R.currentTarget;if(R=R.listener,H!==c&&l.isPropagationStopped())break t;c=R,l.currentTarget=it;try{c(l)}catch(ct){ku(ct)}l.currentTarget=null,c=H}else for(v=0;v<r.length;v++){if(R=r[v],H=R.instance,it=R.currentTarget,R=R.listener,H!==c&&l.isPropagationStopped())break t;c=R,l.currentTarget=it;try{c(l)}catch(ct){ku(ct)}l.currentTarget=null,c=H}}}}function He(t,n){var i=n[Oe];i===void 0&&(i=n[Oe]=new Set);var r=t+"__bubble";i.has(r)||(Lv(n,t,2,!1),i.add(r))}function Dd(t,n,i){var r=0;n&&(r|=4),Lv(i,t,r,n)}var Vc="_reactListening"+Math.random().toString(36).slice(2);function Ud(t){if(!t[Vc]){t[Vc]=!0,ta.forEach(function(i){i!=="selectionchange"&&(Px.has(i)||Dd(i,!1,t),Dd(i,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Vc]||(n[Vc]=!0,Dd("selectionchange",!1,n))}}function Lv(t,n,i,r){switch(M_(n)){case 2:var l=RM;break;case 8:l=CM;break;default:l=Qd}i=l.bind(null,n,i,t),l=void 0,!Zs||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(l=!0),r?l!==void 0?t.addEventListener(n,i,{capture:!0,passive:l}):t.addEventListener(n,i,!0):l!==void 0?t.addEventListener(n,i,{passive:l}):t.addEventListener(n,i,!1)}function Nd(t,n,i,r,l){var c=r;if((n&1)===0&&(n&2)===0&&r!==null)t:for(;;){if(r===null)return;var v=r.tag;if(v===3||v===4){var R=r.stateNode.containerInfo;if(R===l)break;if(v===4)for(v=r.return;v!==null;){var H=v.tag;if((H===3||H===4)&&v.stateNode.containerInfo===l)return;v=v.return}for(;R!==null;){if(v=yn(R),v===null)return;if(H=v.tag,H===5||H===6||H===26||H===27){r=c=v;continue t}R=R.parentNode}}r=r.return}zu(function(){var it=c,ct=El(i),Tt=[];t:{var tt=og.get(t);if(tt!==void 0){var st=Qs,kt=t;switch(t){case"keypress":if(pr(i)===0)break t;case"keydown":case"keyup":st=Gt;break;case"focusin":kt="focus",st=Rl;break;case"focusout":kt="blur",st=Rl;break;case"beforeblur":case"afterblur":st=Rl;break;case"click":if(i.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":st=Bu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":st=Xf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":st=cn;break;case ig:case ag:case rg:st=Hu;break;case sg:st=Pn;break;case"scroll":case"scrollend":st=Vf;break;case"wheel":st=ii;break;case"copy":case"cut":case"paste":st=m;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":st=ce;break;case"submit":st=Me;break;case"toggle":case"beforetoggle":st=zn}var oe=(n&4)!==0,Ce=!oe&&(t==="scroll"||t==="scrollend"),et=oe?tt!==null?tt+"Capture":null:tt;oe=[];for(var Y=it,rt;Y!==null;){var Et=Y;if(rt=Et.stateNode,Et=Et.tag,Et!==5&&Et!==26&&Et!==27||rt===null||et===null||(Et=dr(Y,et),Et!=null&&oe.push(iu(Y,Et,rt))),Ce)break;Y=Y.return}0<oe.length&&(tt=new st(tt,kt,null,i,ct),Tt.push({event:tt,listeners:oe}))}}if((n&7)===0){t:{if(st=t==="mouseover"||t==="pointerover",tt=t==="mouseout"||t==="pointerout",st&&i!==es&&(kt=i.relatedTarget||i.fromElement)&&(yn(kt)||kt[Ae]))break t;(tt||st)&&(kt=ct.window===ct?ct:(st=ct.ownerDocument)?st.defaultView||st.parentWindow:window,tt?(st=i.relatedTarget||i.toElement,tt=it,st=st?yn(st):null,st!==null&&(Ce=h(st),oe=st.tag,st!==Ce||oe!==5&&oe!==27&&oe!==6)&&(st=null)):(tt=null,st=it),tt!==st&&(oe=Bu,Et="onMouseLeave",et="onMouseEnter",Y="mouse",(t==="pointerout"||t==="pointerover")&&(oe=ce,Et="onPointerLeave",et="onPointerEnter",Y="pointer"),Ce=tt==null?kt:Sn(tt),rt=st==null?kt:Sn(st),kt=new oe(Et,Y+"leave",tt,i,ct),kt.target=Ce,kt.relatedTarget=rt,Et=null,yn(ct)===it&&(oe=new oe(et,Y+"enter",st,i,ct),oe.target=rt,oe.relatedTarget=Ce,Et=oe),Ce=Et,oe=tt&&st?Z(tt,st,zx):null,tt!==null&&Ov(Tt,kt,tt,oe,!1),st!==null&&Ce!==null&&Ov(Tt,Ce,st,oe,!0)))}t:{if(tt=it?Sn(it):window,st=tt.nodeName&&tt.nodeName.toLowerCase(),st==="select"||st==="input"&&tt.type==="file")var ee=qm;else if(km(tt))if(Wm)ee=HS;else{ee=BS;var ke=IS}else st=tt.nodeName,!st||st.toLowerCase()!=="input"||tt.type!=="checkbox"&&tt.type!=="radio"?it&&Ws(it.elementType)&&(ee=qm):ee=FS;if(ee&&(ee=ee(t,it))){Ym(Tt,ee,i,ct);break t}ke&&ke(t,tt,it)}switch(ke=it?Sn(it):window,t){case"focusin":(km(ke)||ke.contentEditable==="true")&&(eo=ke,Kf=it,Nl=null);break;case"focusout":Nl=Kf=eo=null;break;case"mousedown":Qf=!0;break;case"contextmenu":case"mouseup":case"dragend":Qf=!1,eg(Tt,i,ct);break;case"selectionchange":if(VS)break;case"keydown":case"keyup":eg(Tt,i,ct)}var ge;if(Cl)t:{switch(t){case"compositionstart":var Ee="onCompositionStart";break t;case"compositionend":Ee="onCompositionEnd";break t;case"compositionupdate":Ee="onCompositionUpdate";break t}Ee=void 0}else to?Vm(t,i)&&(Ee="onCompositionEnd"):t==="keydown"&&i.keyCode===229&&(Ee="onCompositionStart");Ee&&(Gu&&i.locale!=="ko"&&(to||Ee!=="onCompositionStart"?Ee==="onCompositionEnd"&&to&&(ge=Al()):(ia=ct,Ks="value"in ia?ia.value:ia.textContent,to=!0)),ke=Xc(it,Ee),0<ke.length&&(Ee=new b(Ee,t,null,i,ct),Tt.push({event:Ee,listeners:ke}),ge?Ee.data=ge:(ge=Xm(i),ge!==null&&(Ee.data=ge)))),(ge=Yf?LS(t,i):OS(t,i))&&(Ee=Xc(it,"onBeforeInput"),0<Ee.length&&(ke=new b("onBeforeInput","beforeinput",null,i,ct),Tt.push({event:ke,listeners:Ee}),ke.data=ge)),Nx(Tt,t,it,i,ct)}Nv(Tt,n)})}function iu(t,n,i){return{instance:t,listener:n,currentTarget:i}}function Xc(t,n){for(var i=n+"Capture",r=[];t!==null;){var l=t,c=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||c===null||(l=dr(t,i),l!=null&&r.unshift(iu(t,l,c)),l=dr(t,n),l!=null&&r.push(iu(t,l,c))),t.tag===3)return r;t=t.return}return[]}function zx(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Ov(t,n,i,r,l){for(var c=n._reactName,v=[];i!==null&&i!==r;){var R=i,H=R.alternate,it=R.stateNode;if(R=R.tag,H!==null&&H===r)break;R!==5&&R!==26&&R!==27||it===null||(H=it,l?(it=dr(i,c),it!=null&&v.unshift(iu(i,it,H))):l||(it=dr(i,c),it!=null&&v.push(iu(i,it,H)))),i=i.return}v.length!==0&&t.push({event:n,listeners:v})}var Ix=/\r\n?/g,Bx=/\u0000|\uFFFD/g;function Pv(t){return(typeof t=="string"?t:""+t).replace(Ix,`
`).replace(Bx,"")}function zv(t,n){return n=Pv(n),Pv(t)===n}function nn(t,n,i,r,l,c){switch(i){case"children":if(typeof r=="string")n==="body"||n==="textarea"&&r===""||Vn(t,r);else if(typeof r=="number"||typeof r=="bigint")n!=="body"&&Vn(t,""+r);else return;break;case"className":ya(t,"class",r);break;case"tabIndex":ya(t,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":ya(t,i,r);break;case"style":Sl(t,r,c);return;case"data":if(n!=="object"){ya(t,"data",r);break}case"src":case"href":if(r===""&&(n!=="a"||i!=="href")){t.removeAttribute(i);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(i);break}r=na(r),t.setAttribute(i,r);break;case"action":case"formAction":if(typeof r=="function"){t.setAttribute(i,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof c=="function"&&(i==="formAction"?(n!=="input"&&nn(t,n,"name",l.name,l,null),nn(t,n,"formEncType",l.formEncType,l,null),nn(t,n,"formMethod",l.formMethod,l,null),nn(t,n,"formTarget",l.formTarget,l,null)):(nn(t,n,"encType",l.encType,l,null),nn(t,n,"method",l.method,l,null),nn(t,n,"target",l.target,l,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(i);break}r=na(r),t.setAttribute(i,r);break;case"onClick":r!=null&&(t.onclick=wi);return;case"onScroll":r!=null&&He("scroll",t);return;case"onScrollEnd":r!=null&&He("scrollend",t);return;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(i=r.__html,i!=null){if(l.children!=null)throw Error(s(60));(c!=null?c.__html:void 0)!==i&&(t.innerHTML=i)}}break;case"multiple":t.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":t.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){t.removeAttribute("xlink:href");break}i=na(r),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",i);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(i,r):t.removeAttribute(i);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(i,""):t.removeAttribute(i);break;case"capture":case"download":r===!0?t.setAttribute(i,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(i,r):t.removeAttribute(i);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?t.setAttribute(i,r):t.removeAttribute(i);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?t.removeAttribute(i):t.setAttribute(i,r);break;case"popover":He("beforetoggle",t),He("toggle",t),Jr(t,"popover",r);break;case"xlinkActuate":ea(t,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":ea(t,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":ea(t,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":ea(t,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":ea(t,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":ea(t,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":ea(t,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":ea(t,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":ea(t,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":Jr(t,"is",r);break;case"innerText":case"textContent":return;default:if(!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")i=xl.get(i)||i,Jr(t,i,r);else return}Be=!0}function Ld(t,n,i,r,l,c){switch(i){case"style":Sl(t,r,c);return;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(i=r.__html,i!=null){if(l.children!=null)throw Error(s(60));(c!=null?c.__html:void 0)!==i&&(t.innerHTML=i)}}break;case"children":if(typeof r=="string")Vn(t,r);else if(typeof r=="number"||typeof r=="bigint")Vn(t,""+r);else return;break;case"onScroll":r!=null&&He("scroll",t);return;case"onScrollEnd":r!=null&&He("scrollend",t);return;case"onClick":r!=null&&(t.onclick=wi);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!Rn.hasOwnProperty(i))t:{if(i[0]==="o"&&i[1]==="n"&&(l=i.endsWith("Capture"),c=i.slice(2,l?i.length-7:void 0),n=t[Zt]||null,n=n!=null?n[i]:null,typeof n=="function"&&t.removeEventListener(c,n,l),typeof r=="function")){typeof n!="function"&&n!==null&&(i in t?t[i]=null:t.hasAttribute(i)&&t.removeAttribute(i)),t.addEventListener(c,r,l);break t}Be=!0,i in t?t[i]=r:r===!0?t.setAttribute(i,""):Jr(t,i,r)}return}Be=!0}function Jn(t,n,i){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":He("error",t),He("load",t);var r=!1,l=!1,c;for(c in i)if(i.hasOwnProperty(c)){var v=i[c];if(v!=null)switch(c){case"src":r=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:nn(t,n,c,v,i,null)}}l&&nn(t,n,"srcSet",i.srcSet,i,null),r&&nn(t,n,"src",i.src,i,null);return;case"input":He("invalid",t);var R=c=v=l=null,H=null,it=null;for(r in i)if(i.hasOwnProperty(r)){var ct=i[r];if(ct!=null)switch(r){case"name":l=ct;break;case"type":v=ct;break;case"checked":H=ct;break;case"defaultChecked":it=ct;break;case"value":c=ct;break;case"defaultValue":R=ct;break;case"children":case"dangerouslySetInnerHTML":if(ct!=null)throw Error(s(137,n));break;default:nn(t,n,r,ct,i,null)}}Ou(t,c,R,H,it,v,l,!1);return;case"select":He("invalid",t),r=v=c=null;for(l in i)if(i.hasOwnProperty(l)&&(R=i[l],R!=null))switch(l){case"value":c=R;break;case"defaultValue":v=R;break;case"multiple":r=R;default:nn(t,n,l,R,i,null)}n=c,i=v,t.multiple=!!r,n!=null?Fa(t,!!r,n,!1):i!=null&&Fa(t,!!r,i,!0);return;case"textarea":He("invalid",t),c=l=r=null;for(v in i)if(i.hasOwnProperty(v)&&(R=i[v],R!=null))switch(v){case"value":r=R;break;case"defaultValue":l=R;break;case"children":c=R;break;case"dangerouslySetInnerHTML":if(R!=null)throw Error(s(91));break;default:nn(t,n,v,R,i,null)}hr(t,r,l,c);return;case"option":for(H in i)if(i.hasOwnProperty(H)&&(r=i[H],r!=null))switch(H){case"selected":t.selected=r&&typeof r!="function"&&typeof r!="symbol";break;default:nn(t,n,H,r,i,null)}return;case"dialog":He("beforetoggle",t),He("toggle",t),He("cancel",t),He("close",t);break;case"iframe":case"object":He("load",t);break;case"video":case"audio":for(r=0;r<nu.length;r++)He(nu[r],t);break;case"image":He("error",t),He("load",t);break;case"details":He("toggle",t);break;case"embed":case"source":case"link":He("error",t),He("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(it in i)if(i.hasOwnProperty(it)&&(r=i[it],r!=null))switch(it){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:nn(t,n,it,r,i,null)}return;default:if(Ws(n)){for(ct in i)i.hasOwnProperty(ct)&&(r=i[ct],r!==void 0&&Ld(t,n,ct,r,i,void 0));return}}for(R in i)i.hasOwnProperty(R)&&(r=i[R],r!=null&&nn(t,n,R,r,i,null))}var Fx={};function Hx(t,n,i,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,c=null,v=null,R=null,H=null,it=null,ct=null;for(st in i){var Tt=i[st];if(i.hasOwnProperty(st)&&Tt!=null)switch(st){case"checked":break;case"value":break;case"defaultValue":H=Tt;default:r.hasOwnProperty(st)||nn(t,n,st,null,r,Tt)}}for(var tt in r){var st=r[tt];if(Tt=i[tt],r.hasOwnProperty(tt)&&(st!=null||Tt!=null))switch(tt){case"type":st!==Tt&&(Be=!0),c=st;break;case"name":st!==Tt&&(Be=!0),l=st;break;case"checked":st!==Tt&&(Be=!0),it=st;break;case"defaultChecked":st!==Tt&&(Be=!0),ct=st;break;case"value":st!==Tt&&(Be=!0),v=st;break;case"defaultValue":st!==Tt&&(Be=!0),R=st;break;case"children":case"dangerouslySetInnerHTML":if(st!=null)throw Error(s(137,n));break;default:st!==Tt&&nn(t,n,tt,st,r,Tt)}}_l(t,v,R,H,it,ct,c,l);return;case"select":st=v=R=tt=null;for(c in i)if(H=i[c],i.hasOwnProperty(c)&&H!=null)switch(c){case"value":break;case"multiple":st=H;default:r.hasOwnProperty(c)||nn(t,n,c,null,r,H)}for(l in r)if(c=r[l],H=i[l],r.hasOwnProperty(l)&&(c!=null||H!=null))switch(l){case"value":c!==H&&(Be=!0),tt=c;break;case"defaultValue":c!==H&&(Be=!0),R=c;break;case"multiple":c!==H&&(Be=!0),v=c;default:c!==H&&nn(t,n,l,c,r,H)}n=R,i=v,r=st,tt!=null?Fa(t,!!i,tt,!1):!!r!=!!i&&(n!=null?Fa(t,!!i,n,!0):Fa(t,!!i,i?[]:"",!1));return;case"textarea":st=tt=null;for(R in i)if(l=i[R],i.hasOwnProperty(R)&&l!=null&&!r.hasOwnProperty(R))switch(R){case"value":break;case"children":break;default:nn(t,n,R,null,r,l)}for(v in r)if(l=r[v],c=i[v],r.hasOwnProperty(v)&&(l!=null||c!=null))switch(v){case"value":l!==c&&(Be=!0),tt=l;break;case"defaultValue":l!==c&&(Be=!0),st=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(s(91));break;default:l!==c&&nn(t,n,v,l,r,c)}yl(t,tt,st);return;case"option":for(var kt in i)if(tt=i[kt],i.hasOwnProperty(kt)&&tt!=null&&!r.hasOwnProperty(kt))switch(kt){case"selected":t.selected=!1;break;default:nn(t,n,kt,null,r,tt)}for(H in r)if(tt=r[H],st=i[H],r.hasOwnProperty(H)&&tt!==st&&(tt!=null||st!=null))switch(H){case"selected":tt!==st&&(Be=!0),t.selected=tt&&typeof tt!="function"&&typeof tt!="symbol";break;default:nn(t,n,H,tt,r,st)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var oe in i)tt=i[oe],i.hasOwnProperty(oe)&&tt!=null&&!r.hasOwnProperty(oe)&&nn(t,n,oe,null,r,tt);for(it in r)if(tt=r[it],st=i[it],r.hasOwnProperty(it)&&tt!==st&&(tt!=null||st!=null))switch(it){case"children":case"dangerouslySetInnerHTML":if(tt!=null)throw Error(s(137,n));break;default:nn(t,n,it,tt,r,st)}return;default:if(Ws(n)){for(var Ce in i)tt=i[Ce],i.hasOwnProperty(Ce)&&tt!==void 0&&!r.hasOwnProperty(Ce)&&Ld(t,n,Ce,void 0,r,tt);for(ct in r)tt=r[ct],st=i[ct],!r.hasOwnProperty(ct)||tt===st||tt===void 0&&st===void 0||Ld(t,n,ct,tt,r,st);return}}for(var et in i)tt=i[et],i.hasOwnProperty(et)&&tt!=null&&!r.hasOwnProperty(et)&&nn(t,n,et,null,r,tt);for(Tt in r)tt=r[Tt],st=i[Tt],!r.hasOwnProperty(Tt)||tt===st||tt==null&&st==null||nn(t,n,Tt,tt,r,st)}function Iv(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Gx(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,i=performance.getEntriesByType("resource"),r=0;r<i.length;r++){var l=i[r],c=l.transferSize,v=l.initiatorType,R=l.duration;if(c&&R&&Iv(v)){for(v=0,R=l.responseEnd,r+=1;r<i.length;r++){var H=i[r],it=H.startTime;if(it>R)break;var ct=H.transferSize,Tt=H.initiatorType;ct&&Iv(Tt)&&(H=H.responseEnd,v+=ct*(H<R?1:(R-it)/(H-it)))}if(--r,n+=8*(c+v)/(l.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Od=null,Pd=null;function au(t){return t.nodeType===9?t:t.ownerDocument}function Bv(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Fv(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function Hv(t,n,i,r){return i=au(i).createElement(t),i[te]=r,i[Zt]=n,Jn(i,t,n),he(i),i}function zd(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Id=null;function Vx(){var t=window.event;return t&&t.type==="popstate"?t===Id?!1:(Id=t,!0):(Id=null,!1)}var Bd=typeof setTimeout=="function"?setTimeout:void 0,Xx=typeof clearTimeout=="function"?clearTimeout:void 0,Gv=typeof Promise=="function"?Promise:void 0,Vv=typeof requestAnimationFrame=="function"?requestAnimationFrame:Bd,kx=typeof queueMicrotask=="function"?queueMicrotask:typeof Gv<"u"?function(t){return Gv.resolve(null).then(t).catch(Yx)}:Bd;function Yx(t){setTimeout(function(){throw t})}function Or(t){return t==="head"}function Xv(t,n){var i=n,r=0;do{var l=i.nextSibling;if(t.removeChild(i),l&&l.nodeType===8)if(i=l.data,i==="/$"||i==="/&"){if(r===0){t.removeChild(l),Po(n);return}r--}else if(i==="$"||i==="$?"||i==="$~"||i==="$!"||i==="&")r++;else if(i==="html")qd(t.ownerDocument.documentElement);else if(i==="head"){i=t.ownerDocument.head,qd(i);for(var c=i.firstChild;c;){var v=c.nextSibling,R=c.nodeName;c[ie]||R==="SCRIPT"||R==="STYLE"||R==="LINK"&&c.rel.toLowerCase()==="stylesheet"||i.removeChild(c),c=v}}else i==="body"&&qd(t.ownerDocument.body);i=l}while(i);Po(n)}function kv(t,n){var i=t;t=0;do{var r=i.nextSibling;if(i.nodeType===1?n?(i._stashedDisplay=i.style.display,i.style.display="none"):(i.style.display=i._stashedDisplay||"",i.getAttribute("style")===""&&i.removeAttribute("style")):i.nodeType===3&&(n?(i._stashedText=i.nodeValue,i.nodeValue=""):i.nodeValue=i._stashedText||""),r&&r.nodeType===8)if(i=r.data,i==="/$"){if(t===0)break;t--}else i!=="$"&&i!=="$?"&&i!=="$~"&&i!=="$!"||t++;i=r}while(i)}function Yv(t,n,i){if(n=CSS.escape(n)!==n?"r-"+btoa(n).replace(/=/g,""):n,t.style.viewTransitionName=n,i!=null&&(t.style.viewTransitionClass=i),i=getComputedStyle(t),i.display==="inline"){if(n=t.getClientRects(),n.length===1)var r=1;else for(var l=r=0;l<n.length;l++){var c=n[l];0<c.width&&0<c.height&&r++}r===1&&(t=t.style,t.display=n.length===1?"inline-block":"block",t.marginTop="-"+i.paddingTop,t.marginBottom="-"+i.paddingBottom)}}function qv(t,n){t=t.style,n=n.style;var i=n!=null?n.hasOwnProperty("viewTransitionName")?n.viewTransitionName:n.hasOwnProperty("view-transition-name")?n["view-transition-name"]:null:null;t.viewTransitionName=i==null||typeof i=="boolean"?"":(""+i).trim(),i=n!=null?n.hasOwnProperty("viewTransitionClass")?n.viewTransitionClass:n.hasOwnProperty("view-transition-class")?n["view-transition-class"]:null:null,t.viewTransitionClass=i==null||typeof i=="boolean"?"":(""+i).trim(),t.display==="inline-block"&&(n==null?t.display=t.margin="":(i=n.display,t.display=i==null||typeof i=="boolean"?"":i,i=n.margin,i!=null?t.margin=i:(i=n.hasOwnProperty("marginTop")?n.marginTop:n["margin-top"],t.marginTop=i==null||typeof i=="boolean"?"":i,n=n.hasOwnProperty("marginBottom")?n.marginBottom:n["margin-bottom"],t.marginBottom=n==null||typeof n=="boolean"?"":n)))}function qx(t,n,i){return i=i.ownerDocument.defaultView,{rect:t,abs:n.position==="absolute"||n.position==="fixed",clip:n.clipPath!=="none"||n.overflow!=="visible"||n.filter!=="none"||n.mask!=="none"||n.mask!=="none"||n.borderRadius!=="0px",view:0<=t.bottom&&0<=t.right&&t.top<=i.innerHeight&&t.left<=i.innerWidth}}function Fd(t){var n=t.getBoundingClientRect(),i=getComputedStyle(t);return qx(n,i,t)}function Wx(t){return t.documentElement.clientHeight}function jx(t){this.addEventListener("load",t),this.addEventListener("error",t)}function Zx(t,n,i,r,l,c,v,R,H){var it=n.nodeType===9?n:n.ownerDocument;try{var ct=it.startViewTransition({update:function(){var tt=it.defaultView,st=tt.navigation&&tt.navigation.transition,kt=it.fonts.status;r();var oe=[];if(kt==="loaded"&&(Wx(it),it.fonts.status==="loading"&&oe.push(it.fonts.ready)),kt=oe.length,t!==null)for(var Ce=t.suspenseyImages,et=0,Y=0;Y<Ce.length;Y++){var rt=Ce[Y];if(!rt.complete){var Et=rt.getBoundingClientRect();if(0<Et.bottom&&0<Et.right&&Et.top<tt.innerHeight&&Et.left<tt.innerWidth){if(et+=d_(rt),et>qc){oe.length=kt;break}rt=new Promise(jx.bind(rt)),oe.push(rt)}}}if(0<oe.length)return tt=Promise.race([Promise.all(oe),new Promise(function(ee){return setTimeout(ee,500)})]).then(l,l),(st?Promise.allSettled([st.finished,tt]):tt).then(c,c);if(l(),st)return st.finished.then(c,c);c()},types:i});it.__reactViewTransition=ct;var Tt=[];return ct.ready.then(function(){for(var tt=it.documentElement.getAnimations({subtree:!0}),st=0;st<tt.length;st++){var kt=tt[st],oe=kt.effect,Ce=oe.pseudoElement;if(Ce!=null&&Ce.startsWith("::view-transition")){Tt.push(kt),kt=oe.getKeyframes();for(var et=Ce=void 0,Y=!0,rt=0;rt<kt.length;rt++){var Et=kt[rt],ee=Et.width;if(Ce===void 0)Ce=ee;else if(Ce!==ee){Y=!1;break}if(ee=Et.height,et===void 0)et=ee;else if(et!==ee){Y=!1;break}delete Et.width,delete Et.height,Et.transform==="none"&&delete Et.transform}Y&&Ce!==void 0&&et!==void 0&&(oe.setKeyframes(kt),Y=getComputedStyle(oe.target,oe.pseudoElement),Y.width!==Ce||Y.height!==et)&&(Y=kt[0],Y.width=Ce,Y.height=et,Y=kt[kt.length-1],Y.width=Ce,Y.height=et,oe.setKeyframes(kt))}}v()},function(tt){it.__reactViewTransition===ct&&(it.__reactViewTransition=null);try{if(typeof tt=="object"&&tt!==null)switch(tt.name){case"InvalidStateError":(tt.message==="View transition was skipped because document visibility state is hidden."||tt.message==="Skipping view transition because document visibility state has become hidden."||tt.message==="Skipping view transition because viewport size changed."||tt.message==="Transition was aborted because of invalid state")&&(tt=null)}tt!==null&&H(tt)}finally{r(),l(),v()}}),ct.finished.finally(function(){for(var tt=0;tt<Tt.length;tt++)Tt[tt].cancel();it.__reactViewTransition===ct&&(it.__reactViewTransition=null),R()}),ct}catch{return r(),l(),v(),null}}function Cs(t,n){this._scope=document.documentElement,this._selector="::view-transition-"+t+"("+n+")"}Cs.prototype.animate=function(t,n){return n=typeof n=="number"?{duration:n}:V({},n),n.pseudoElement=this._selector,this._scope.animate(t,n)},Cs.prototype.getAnimations=function(){for(var t=this._scope,n=this._selector,i=t.getAnimations({subtree:!0}),r=[],l=0;l<i.length;l++){var c=i[l].effect;c!==null&&c.target===t&&c.pseudoElement===n&&r.push(i[l])}return r},Cs.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function Wv(t){return{name:t,group:new Cs("group",t),imagePair:new Cs("image-pair",t),old:new Cs("old",t),new:new Cs("new",t)}}function Ii(t){this._fragmentFiber=t,this._observers=this._eventListeners=null}Ii.prototype.addEventListener=function(t,n,i){var r=null,l=null;if(!(i!=null&&typeof i!="boolean"&&(r=i.signal||null,r!==null&&r.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var c=this._eventListeners;if(Zv(c,t,n,i)===-1){var v=this,R=n;i!=null&&typeof i!="boolean"&&i.once===!0&&(R=function(H){v.removeEventListener(t,n,i),typeof n=="function"?n.call(this,H):n.handleEvent(H)}),r!==null&&(l=v.removeEventListener.bind(v,t,n,i),r.addEventListener("abort",l,{once:!0}),l=r.removeEventListener.bind(r,"abort",l)),r=wo(i),c.push({type:t,listener:n,optionsOrUseCapture:i,attachedListener:R,cleanup:l}),_(this._fragmentFiber.child,!1,Kx,t,R,r)}this._eventListeners=c}};function Kx(t,n,i,r){return T(t).addEventListener(n,i,r),!1}Ii.prototype.removeEventListener=function(t,n,i){var r=this._eventListeners;if(r!==null&&(n=Zv(r,t,n,i),n!==-1)){var l=r[n];i=l.attachedListener;var c=l.cleanup;l=wo(l.optionsOrUseCapture),_(this._fragmentFiber.child,!1,Qx,t,i,l),r.splice(n,1),c!==null&&c()}};function Qx(t,n,i,r){return T(t).removeEventListener(n,i,r),!1}function wo(t){return t!=null&&typeof t!="boolean"&&(t.once===!0||t.signal instanceof AbortSignal)?{capture:t.capture,passive:t.passive}:t}function jv(t){return t==null?"c=0":typeof t=="boolean"?"c="+(t?"1":"0"):"c="+(t.capture?"1":"0")}function Zv(t,n,i,r){if(t.length===0)return-1;r=jv(r);for(var l=0;l<t.length;l++){var c=t[l];if(c.type===n&&c.listener===i&&jv(c.optionsOrUseCapture)===r)return l}return-1}Ii.prototype.dispatchEvent=function(t){var n=E(this._fragmentFiber);if(n===null)return!0;n=T(n);var i=this._eventListeners;if(i!==null&&0<i.length||!t.bubbles){var r=n.nodeType===9?n.createComment(""):document.createTextNode("");if(i)for(var l=0;l<i.length;l++){var c=i[l];r.addEventListener(c.type,c.attachedListener,wo(c.optionsOrUseCapture))}if(n.appendChild(r),t=r.dispatchEvent(t),i)for(l=0;l<i.length;l++)c=i[l],r.removeEventListener(c.type,c.attachedListener,wo(c.optionsOrUseCapture));return n.removeChild(r),t}return n.dispatchEvent(t)},Ii.prototype.focus=function(t){_(this._fragmentFiber.child,!0,Kv,t,void 0,void 0)};function Kv(t,n){return t.tag===6?!1:(t=T(t),uM(t,n))}Ii.prototype.focusLast=function(t){var n=[];_(this._fragmentFiber.child,!0,Hd,n,void 0,void 0);for(var i=n.length-1;0<=i&&!Kv(n[i],t);i--);};function Hd(t,n){return n.push(t),!1}Ii.prototype.blur=function(){var t=E(this._fragmentFiber);t!==null&&(t=T(t),t=au(t).activeElement,t!==null&&_(this._fragmentFiber.child,!1,Jx,t,void 0,void 0))};function Jx(t,n){return t.tag===6?!1:(t=T(t),t===n||t.contains(n)?(n.blur(),!0):!1)}Ii.prototype.observeUsing=function(t){this._observers===null&&(this._observers=new Set),this._observers.add(t),_(this._fragmentFiber.child,!1,$x,t,void 0,void 0)};function $x(t,n){return t.tag===6||(t=T(t),n.observe(t)),!1}Ii.prototype.unobserveUsing=function(t){var n=this._observers;if(n!==null&&n.has(t)){n.delete(t),_(this._fragmentFiber.child,!1,tM,t,void 0,void 0);for(var i=n=0;i<ua.length;i++){var r=ua[i];r.fragmentInstance===this&&r.observer===t?t.unobserve(r.instance):ua[n++]=r}ua.length=n}};function tM(t,n){return t.tag===6||(t=T(t),n.unobserve(t)),!1}var ua=[],Gd=!1;function eM(t,n,i){ua.push({fragmentInstance:t,observer:n,instance:i}),Gd||(Gd=!0,cM(function(){Gd=!1;var r=ua;ua=[];for(var l=0;l<r.length;l++){var c=r[l];c.observer.unobserve(c.instance)}}))}Ii.prototype.getClientRects=function(){var t=[];return _(this._fragmentFiber.child,!1,nM,t,void 0,void 0),t};function nM(t,n){if(t.tag===6){t=t.stateNode;var i=t.ownerDocument.createRange();i.selectNodeContents(t),n.push.apply(n,i.getClientRects())}else t=T(t),n.push.apply(n,t.getClientRects());return!1}Ii.prototype.getRootNode=function(t){var n=E(this._fragmentFiber);return n===null?this:T(n).getRootNode(t)},Ii.prototype.compareDocumentPosition=function(t){var n=E(this._fragmentFiber);if(n===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var i=[];_(this._fragmentFiber.child,!1,Hd,i,void 0,void 0);var r=T(n);if(i.length===0){if(i=r,A(this._fragmentFiber)){t:{for(n=this._fragmentFiber.return;n!==null;){if(n.tag===4){n=n.stateNode.containerInfo;break t}if(n.tag===3||n.tag===5||n.tag===27)break;n=n.return}n=null}n!=null&&(i=n)}n=this._fragmentFiber;var l=r=i.compareDocumentPosition(t);return i===t?l=Node.DOCUMENT_POSITION_CONTAINS:r&Node.DOCUMENT_POSITION_CONTAINED_BY&&(i=w(n)[1],i===null?l=Node.DOCUMENT_POSITION_PRECEDING:(t=T(i).compareDocumentPosition(t),l=t===0||t&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),l|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}n=T(i[0]),l=T(i[i.length-1]);var c=A(this._fragmentFiber)?n.parentElement:r;if(c==null)return Node.DOCUMENT_POSITION_DISCONNECTED;r=c.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_CONTAINED_BY,c=c.compareDocumentPosition(l)&Node.DOCUMENT_POSITION_CONTAINED_BY;var v=n.compareDocumentPosition(t),R=l.compareDocumentPosition(t),H=v&Node.DOCUMENT_POSITION_CONTAINED_BY||R&Node.DOCUMENT_POSITION_CONTAINED_BY;return R=r&&c&&v&Node.DOCUMENT_POSITION_FOLLOWING&&R&Node.DOCUMENT_POSITION_PRECEDING,n=r&&n===t||c&&l===t||H||R?Node.DOCUMENT_POSITION_CONTAINED_BY:!r&&n===t||!c&&l===t?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:v,n&Node.DOCUMENT_POSITION_DISCONNECTED||n&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||iM(n,this._fragmentFiber,i[0],i[i.length-1],t)?n:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function iM(t,n,i,r,l){var c=yn(l);if(t&Node.DOCUMENT_POSITION_CONTAINED_BY){if(i=!!c)t:{for(;c!==null;){if(c.tag===7&&(c===n||c.alternate===n)){i=!0;break t}c=c.return}i=!1}return i}if(t&Node.DOCUMENT_POSITION_CONTAINS){if(c===null)return c=l.ownerDocument,l===c||l===c.documentElement||l===c.body;t:{for(c=n,n=E(n);c!==null;){if(!(c.tag!==5&&c.tag!==3&&c.tag!==27||c!==n&&c.alternate!==n)){c=!0;break t}c=c.return}c=!1}return c}return t&Node.DOCUMENT_POSITION_PRECEDING?((n=!!c)&&!(n=c===i)&&(n=Z(i,c,ft),n===null?n=!1:(_(n,!0,G,c,i),c=M,M=null,n=c!==null)),n):t&Node.DOCUMENT_POSITION_FOLLOWING?((n=!!c)&&!(n=c===r)&&(n=Z(r,c,ft),n===null?n=!1:(_(n,!0,O,c,r),c=M,X=M=null,n=c!==null)),n):!1}function Qv(t,n){var i=t.ownerDocument.createRange();i.selectNodeContents(t),t=i.getBoundingClientRect(),window.scrollTo(window.scrollX+t.left,n?window.scrollY+t.top:window.scrollY+t.bottom-window.innerHeight)}Ii.prototype.scrollIntoView=function(t){if(typeof t=="object")throw Error(s(566));var n=[];_(this._fragmentFiber.child,!1,Hd,n,void 0,void 0);var i=t!==!1;if(n.length===0){var r=w(this._fragmentFiber);if(r=i?r[1]||r[0]||E(this._fragmentFiber):r[0]||r[1],r===null)return;if(r.tag===6){t=T(r),Qv(t,i);return}if(r=T(r),r.nodeType!==9){if(r.nodeType===11){i="host"in r?r.host:null,i!==null&&i.scrollIntoView(t);return}r.scrollIntoView(t)}}for(r=i?n.length-1:0;r!==(i?-1:n.length);){var l=n[r];l.tag===6?(l=T(l),Qv(l,i)):T(l).scrollIntoView(t),r+=i?-1:1}};function aM(t,n){return t=T(t),Jv(t,n),!1}function Jv(t,n){t.reactFragments==null&&(t.reactFragments=new Set),t.reactFragments.add(n)}function $v(t,n){var i=n._eventListeners;if(i!==null)for(var r=0;r<i.length;r++){var l=i[r];t.addEventListener(l.type,l.attachedListener,wo(l.optionsOrUseCapture))}t.nodeType!==3&&(i=n._observers,i!==null&&i.forEach(function(c){for(var v=0,R=0;R<ua.length;R++){var H=ua[R];(H.fragmentInstance!==n||H.observer!==c||H.instance!==t)&&(ua[v++]=H)}ua.length=v,c.observe(t)}),Jv(t,n))}function rM(t,n){var i=n._eventListeners;if(i!==null)for(var r=0;r<i.length;r++){var l=i[r];t.removeEventListener(l.type,l.attachedListener,wo(l.optionsOrUseCapture))}t.nodeType!==3&&(i=n._observers,i!==null&&i.forEach(function(c){typeof c.rootMargin=="string"?eM(n,c,t):c.unobserve(t)}),t.reactFragments!=null&&t.reactFragments.delete(n))}function Vd(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var i=n;switch(n=n.nextSibling,i.nodeName){case"HTML":case"HEAD":case"BODY":Vd(i),Ie(i);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(i.rel.toLowerCase()==="stylesheet")continue}t.removeChild(i)}}function sM(t,n,i,r){for(;t.nodeType===1;){var l=i;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!r&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(r){if(!t[ie])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(c=t.getAttribute("rel"),c==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(c!==l.rel||t.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||t.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||t.getAttribute("title")!==(l.title==null?null:l.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(c=t.getAttribute("src"),(c!==(l.src==null?null:l.src)||t.getAttribute("type")!==(l.type==null?null:l.type)||t.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&c&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var c=l.name==null?null:""+l.name;if(l.type==="hidden"&&t.getAttribute("name")===c)return t}else return t;if(t=Ki(t.nextSibling),t===null)break}return null}function oM(t,n,i){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!i||(t=Ki(t.nextSibling),t===null))return null;return t}function t_(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=Ki(t.nextSibling),t===null))return null;return t}function Xd(t){return t.data==="$?"||t.data==="$~"}function kd(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function lM(t,n){var i=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||i.readyState!=="loading")n();else{var r=function(){n(),i.removeEventListener("DOMContentLoaded",r)};i.addEventListener("DOMContentLoaded",r),t._reactRetry=r}}function Ki(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var Yd=null;function e_(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var i=t.data;if(i==="/$"||i==="/&"){if(n===0)return Ki(t.nextSibling);n--}else i!=="$"&&i!=="$!"&&i!=="$?"&&i!=="$~"&&i!=="&"||n++}t=t.nextSibling}return null}function n_(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var i=t.data;if(i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"){if(n===0)return t;n--}else i!=="/$"&&i!=="/&"||n++}t=t.previousSibling}return null}function uM(t,n){function i(){r=!0}if(t.ownerDocument.activeElement===t)return!0;var r=!1;try{t.ownerDocument.addEventListener("focus",i,!0),(t.focus||HTMLElement.prototype.focus).call(t,n)}finally{t.ownerDocument.removeEventListener("focus",i,!0)}return r}function cM(t){Vv(function(){Vv(function(n){return t(n)})})}function i_(t,n,i){switch(n=au(i),t){case"html":if(t=n.documentElement,!t)throw Error(s(452));return t;case"head":if(t=n.head,!t)throw Error(s(453));return t;case"body":if(t=n.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function a_(t,n,i){for(var r in i){var l=i[r];i.hasOwnProperty(r)&&l!=null&&nn(t,n,r,null,Fx,l)}i.dangerouslySetInnerHTML!=null&&(t.textContent=""),t.onclick===wi&&(t.onclick=null),Ie(t)}function qd(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Ie(t)}var Qi=new Map,r_=new Set;function ru(t){if(typeof t.getRootNode=="function"){var n=t.getRootNode();if(n.nodeType===9||n.nodeType===11)return n}return t.nodeType===9?t:t.ownerDocument}var Ja=Bt.d;Bt.d={f:fM,r:hM,D:dM,C:pM,L:mM,m:gM,X:_M,S:vM,M:yM};function fM(){var t=Ja.f(),n=Ic();return t||n}function hM(t){var n=ei(t);n!==null&&n.tag===5&&n.type==="form"?o0(n):Ja.r(t)}var Do=typeof document>"u"?null:document;function s_(t,n,i){var r=Do;if(r&&typeof n=="string"&&n){var l=_i(n);l='link[rel="'+t+'"][href="'+l+'"]',typeof i=="string"&&(l+='[crossorigin="'+i+'"]'),r_.has(l)||(r_.add(l),t={rel:t,crossOrigin:i,href:n},r.querySelector(l)===null&&(n=r.createElement("link"),Jn(n,"link",t),he(n),r.head.appendChild(n)))}}function dM(t){Ja.D(t),s_("dns-prefetch",t,null)}function pM(t,n){Ja.C(t,n),s_("preconnect",t,n)}function mM(t,n,i){Ja.L(t,n,i);var r=Do;if(r&&t&&n){var l='link[rel="preload"][as="'+_i(n)+'"]';n==="image"&&i&&i.imageSrcSet?(l+='[imagesrcset="'+_i(i.imageSrcSet)+'"]',typeof i.imageSizes=="string"&&(l+='[imagesizes="'+_i(i.imageSizes)+'"]')):l+='[href="'+_i(t)+'"]';var c=l;switch(n){case"style":c=Uo(t);break;case"script":c=No(t)}if(!(Qi.has(c)||(t=V({rel:"preload",href:n==="image"&&i&&i.imageSrcSet?void 0:t,as:n},i),Qi.set(c,t),r.querySelector(l)!==null||n==="style"&&r.querySelector(su(c))||n==="script"&&r.querySelector(ou(c))))){var v=r.createElement("link");Jn(v,"link",t),n==="style"&&(v[ti]=!0,v.onload=v.onerror=function(){ni(v)}),he(v),r.head.appendChild(v)}}}function gM(t,n){Ja.m(t,n);var i=Do;if(i&&t){var r=n&&typeof n.as=="string"?n.as:"script",l='link[rel="modulepreload"][as="'+_i(r)+'"][href="'+_i(t)+'"]',c=l;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":c=No(t)}if(!Qi.has(c)&&(t=V({rel:"modulepreload",href:t},n),Qi.set(c,t),i.querySelector(l)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(i.querySelector(ou(c)))return}r=i.createElement("link"),Jn(r,"link",t),he(r),i.head.appendChild(r)}}}function vM(t,n,i){Ja.S(t,n,i);var r=Do;if(r&&t){var l=ci(r).hoistableStyles,c=Uo(t);n=n||"default";var v=l.get(c);if(!v){var R={loading:0,preload:null};if(v=r.querySelector(su(c)))R.loading=5;else{t=V({rel:"stylesheet",href:t,"data-precedence":n},i),(i=Qi.get(c))&&Wd(t,i);var H=v=r.createElement("link");he(H),Jn(H,"link",t),H._p=new Promise(function(it,ct){H.onload=it,H.onerror=ct}),H.addEventListener("load",function(){R.loading|=1}),H.addEventListener("error",function(){R.loading|=2}),R.loading|=4,kc(v,n,r)}v={type:"stylesheet",instance:v,count:1,state:R},l.set(c,v)}}}function _M(t,n){Ja.X(t,n);var i=Do;if(i&&t){var r=ci(i).hoistableScripts,l=No(t),c=r.get(l);c||(c=i.querySelector(ou(l)),c||(t=V({src:t,async:!0},n),(n=Qi.get(l))&&jd(t,n),c=i.createElement("script"),he(c),Jn(c,"link",t),i.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},r.set(l,c))}}function yM(t,n){Ja.M(t,n);var i=Do;if(i&&t){var r=ci(i).hoistableScripts,l=No(t),c=r.get(l);c||(c=i.querySelector(ou(l)),c||(t=V({src:t,async:!0,type:"module"},n),(n=Qi.get(l))&&jd(t,n),c=i.createElement("script"),he(c),Jn(c,"link",t),i.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},r.set(l,c))}}function o_(t,n,i,r){var l=(l=z.current)?ru(l):null;if(!l)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof i.precedence=="string"&&typeof i.href=="string"?(i=Uo(i.href),n=ci(l).hoistableStyles,r=n.get(i),r||(r={type:"style",instance:null,count:0,state:null},n.set(i,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(i.rel==="stylesheet"&&typeof i.href=="string"&&typeof i.precedence=="string"){t=Uo(i.href);var c=ci(l).hoistableStyles,v=c.get(t);if(v||(l=l.ownerDocument||l,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},c.set(t,v),(c=l.querySelector(su(t)))?c._p||(v.instance=c,v.state.loading=5):(c=Qi.get(t),c||(c={rel:"preload",as:"style",href:i.href,crossOrigin:i.crossOrigin,integrity:i.integrity,media:i.media,hrefLang:i.hrefLang,referrerPolicy:i.referrerPolicy},Qi.set(t,c)),SM(l,t,c,v.state))),n&&r===null)throw Error(s(528,""));return v}if(n&&r!==null)throw Error(s(529,""));return null;case"script":return n=i.async,i=i.src,typeof i=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(i=No(i),n=ci(l).hoistableScripts,r=n.get(i),r||(r={type:"script",instance:null,count:0,state:null},n.set(i,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function Uo(t){return'href="'+_i(t)+'"'}function su(t){return'link[rel="stylesheet"]['+t+"]"}function l_(t){return V({},t,{"data-precedence":t.precedence,precedence:null})}function SM(t,n,i,r){if(n=t.querySelector('link[rel="preload"][as="style"]['+n+"]")){if(n[ti]!==!0){r.loading=1;return}}else n=t.createElement("link"),n[ti]=!0,n.onload=n.onerror=ni.bind(null,n),Jn(n,"link",i),he(n),t.head.appendChild(n);r.preload=n,n.addEventListener("load",function(){return r.loading|=1}),n.addEventListener("error",function(){return r.loading|=2})}function No(t){return'[src="'+_i(t)+'"]'}function ou(t){return"script[async]"+t}function u_(t,n,i){if(n.count++,n.instance===null)switch(n.type){case"style":var r=t.querySelector('style[data-href~="'+_i(i.href)+'"]');if(r)return n.instance=r,he(r),r;var l=V({},i,{"data-href":i.href,"data-precedence":i.precedence,href:null,precedence:null});return r=(t.ownerDocument||t).createElement("style"),he(r),Jn(r,"style",l),kc(r,i.precedence,t),n.instance=r;case"stylesheet":l=Uo(i.href);var c=t.querySelector(su(l));if(c)return n.state.loading|=4,n.instance=c,he(c),c;r=l_(i),(l=Qi.get(l))&&Wd(r,l),c=(t.ownerDocument||t).createElement("link"),he(c);var v=c;return v._p=new Promise(function(R,H){v.onload=R,v.onerror=H}),Jn(c,"link",r),n.state.loading|=4,kc(c,i.precedence,t),n.instance=c;case"script":return c=No(i.src),(l=t.querySelector(ou(c)))?(n.instance=l,he(l),l):(r=i,(l=Qi.get(c))&&(r=V({},i),jd(r,l)),t=t.ownerDocument||t,l=t.createElement("script"),he(l),Jn(l,"link",r),t.head.appendChild(l),n.instance=l);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(r=n.instance,n.state.loading|=4,kc(r,i.precedence,t));return n.instance}function kc(t,n,i){for(var r=i.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=r.length?r[r.length-1]:null,c=l,v=0;v<r.length;v++){var R=r[v];if(R.dataset.precedence===n)c=R;else if(c!==l)break}c?c.parentNode.insertBefore(t,c.nextSibling):(n=i.nodeType===9?i.head:i,n.insertBefore(t,n.firstChild))}function Wd(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function jd(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var Yc=null;function c_(t,n,i){if(Yc===null){var r=new Map,l=Yc=new Map;l.set(i,r)}else l=Yc,r=l.get(i),r||(r=new Map,l.set(i,r));if(r.has(t))return r;for(r.set(t,null),i=i.getElementsByTagName(t),l=0;l<i.length;l++){var c=i[l];if(!(c[ie]||c[te]||t==="link"&&c.getAttribute("rel")==="stylesheet")&&c.namespaceURI!=="http://www.w3.org/2000/svg"){var v=c.getAttribute(n)||"";v=t+v;var R=r.get(v);R?R.push(c):r.set(v,[c])}}return r}function Zd(t,n,i){t=t.ownerDocument||t,t.head.insertBefore(i,n==="title"?t.querySelector("head > title"):null)}function xM(t,n,i){if(i===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function f_(t,n){return t==="img"&&n.src!=null&&n.src!==""&&n.onLoad==null&&n.loading!=="lazy"}function h_(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function d_(t){return(t.width||100)*(t.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function p_(t,n){typeof n.decode=="function"&&(t.imgCount++,n.complete||(t.imgBytes+=d_(n),t.suspenseyImages.push(n)),t=TM.bind(t),n.decode().then(t,t))}function MM(t,n,i,r){if(i.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(i.state.loading&4)===0){if(i.instance===null){var l=Uo(r.href),c=n.querySelector(su(l));if(c){n=c._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=lu.bind(t),n.then(t,t)),i.state.loading|=4,i.instance=c,he(c);return}c=n.ownerDocument||n,r=l_(r),(l=Qi.get(l))&&Wd(r,l),c=c.createElement("link"),he(c);var v=c;v._p=new Promise(function(R,H){v.onload=R,v.onerror=H}),Jn(c,"link",r),i.instance=c}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(i,n),(n=i.state.preload)&&(i.state.loading&3)===0&&(t.count++,i=lu.bind(t),n.addEventListener("load",i),n.addEventListener("error",i))}}var qc=0;function EM(t,n){return t.stylesheets&&t.count===0&&jc(t,t.stylesheets),0<t.count||0<t.imgCount?function(i){var r=setTimeout(function(){if(t.stylesheets&&jc(t,t.stylesheets),t.unsuspend){var c=t.unsuspend;t.unsuspend=null,c()}},6e4+n);0<t.imgBytes&&qc===0&&(qc=62500*Gx());var l=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&jc(t,t.stylesheets),t.unsuspend)){var c=t.unsuspend;t.unsuspend=null,c()}},(t.imgBytes>qc?50:800)+n);return t.unsuspend=i,function(){t.unsuspend=null,clearTimeout(r),clearTimeout(l)}}:null}function m_(t){if(t.count===0&&(t.imgCount===0||!t.waitingForImages)){if(t.stylesheets)jc(t,t.stylesheets);else if(t.unsuspend){var n=t.unsuspend;t.unsuspend=null,n()}}}function lu(){this.count--,m_(this)}function TM(){this.imgCount--,m_(this)}var Wc=null;function jc(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Wc=new Map,n.forEach(AM,t),Wc=null,lu.call(t))}function AM(t,n){if(!(n.state.loading&4)){var i=Wc.get(t);if(i)var r=i.get(null);else{i=new Map,Wc.set(t,i);for(var l=t.querySelectorAll("link[data-precedence],style[data-precedence]"),c=0;c<l.length;c++){var v=l[c];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(i.set(v.dataset.precedence,v),r=v)}r&&i.set(null,r)}l=n.instance,v=l.getAttribute("data-precedence"),c=i.get(v)||r,c===r&&i.set(null,l),i.set(v,l),this.count++,r=lu.bind(this),l.addEventListener("load",r),l.addEventListener("error",r),c?c.parentNode.insertBefore(l,c.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(l,t.firstChild)),n.state.loading|=4}}var Lo={$$typeof:gt,Provider:null,Consumer:null,_currentValue:ve,_currentValue2:ve,_threadCount:0};function bM(t,n,i,r,l,c,v,R,H){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=cr(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=cr(0),this.hiddenUpdates=cr(null),this.identifierPrefix=r,this.onUncaughtError=l,this.onCaughtError=c,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=H,this.transitionTypes=null,this.incompleteTransitions=new Map}function g_(t,n,i,r,l,c,v,R,H,it,ct,Tt){return t=new bM(t,n,i,v,H,it,ct,Tt,R),n=1,c===!0&&(n|=24),c=xi(3,null,null,n),t.current=c,c.stateNode=t,n=ch(),n.refCount++,t.pooledCache=n,n.refCount++,c.memoizedState={element:r,isDehydrated:i,cache:n},ph(c),t}function v_(t){return t?(t=ao,t):ao}function __(t,n,i,r,l,c){l=v_(l),r.context===null?r.context=l:r.pendingContext=l,r=Mr(n),r.payload={element:i},c=c===void 0?null:c,c!==null&&(r.callback=c),i=Er(t,r,n),i!==null&&(Ai(i,t,n),Fl(i,t,n))}function y_(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var i=t.retryLane;t.retryLane=i!==0&&i<n?i:n}}function Kd(t,n){y_(t,n),(t=t.alternate)&&y_(t,n)}function S_(t){if(t.tag===13||t.tag===31){var n=fs(t,67108864);n!==null&&Ai(n,t,67108864),Kd(t,67108864)}}function x_(t){if(t.tag===13||t.tag===31){var n=zi();n=Pt(n);var i=fs(t,n);i!==null&&Ai(i,t,n),Kd(t,n)}}var Oo=!0;function RM(t,n,i,r){var l=Ot.T;Ot.T=null;var c=Bt.p;try{Bt.p=2,Qd(t,n,i,r)}finally{Bt.p=c,Ot.T=l}}function CM(t,n,i,r){var l=Ot.T;Ot.T=null;var c=Bt.p;try{Bt.p=8,Qd(t,n,i,r)}finally{Bt.p=c,Ot.T=l}}function Qd(t,n,i,r){if(Oo){var l=Jd(r);if(l===null)Nd(t,n,r,Zc,i),E_(t,r);else if(DM(l,t,n,i,r))r.stopPropagation();else if(E_(t,r),n&4&&-1<wM.indexOf(t)){for(;l!==null;){var c=ei(l);if(c!==null)switch(c.tag){case 3:if(c=c.stateNode,c.current.memoizedState.isDehydrated){var v=vi(c.pendingLanes);if(v!==0){var R=c;for(R.pendingLanes|=2,R.entangledLanes|=2;v;){var H=1<<31-gn(v);R.entanglements[1]|=H,v&=~H}Ua(c),(Ke&6)===0&&(Oc=W()+500,eu(0))}}break;case 31:case 13:R=fs(c,2),R!==null&&Ai(R,c,2),Ic(),Kd(c,2)}if(c=Jd(r),c===null&&Nd(t,n,r,Zc,i),c===l)break;l=c}l!==null&&r.stopPropagation()}else Nd(t,n,r,null,i)}}function Jd(t){return t=El(t),$d(t)}var Zc=null;function $d(t){if(Zc=null,t=yn(t),t!==null){var n=h(t);if(n===null)t=null;else{var i=n.tag;if(i===13){if(t=p(n),t!==null)return t;t=null}else if(i===31){if(t=d(n),t!==null)return t;t=null}else if(i===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return Zc=t,null}function M_(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Xt()){case _t:return 2;case Ct:return 8;case qt:case Kt:return 32;case ye:return 268435456;default:return 32}default:return 32}}var tp=!1,Pr=null,zr=null,Ir=null,uu=new Map,cu=new Map,Br=[],wM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function E_(t,n){switch(t){case"focusin":case"focusout":Pr=null;break;case"dragenter":case"dragleave":zr=null;break;case"mouseover":case"mouseout":Ir=null;break;case"pointerover":case"pointerout":uu.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":cu.delete(n.pointerId)}}function fu(t,n,i,r,l,c){return t===null||t.nativeEvent!==c?(t={blockedOn:n,domEventName:i,eventSystemFlags:r,nativeEvent:c,targetContainers:[l]},n!==null&&(n=ei(n),n!==null&&S_(n)),t):(t.eventSystemFlags|=r,n=t.targetContainers,l!==null&&n.indexOf(l)===-1&&n.push(l),t)}function DM(t,n,i,r,l){switch(n){case"focusin":return Pr=fu(Pr,t,n,i,r,l),!0;case"dragenter":return zr=fu(zr,t,n,i,r,l),!0;case"mouseover":return Ir=fu(Ir,t,n,i,r,l),!0;case"pointerover":var c=l.pointerId;return uu.set(c,fu(uu.get(c)||null,t,n,i,r,l)),!0;case"gotpointercapture":return c=l.pointerId,cu.set(c,fu(cu.get(c)||null,t,n,i,r,l)),!0}return!1}function T_(t){var n=yn(t.target);if(n!==null){var i=h(n);if(i!==null){if(n=i.tag,n===13){if(n=p(i),n!==null){t.blockedOn=n,se(t.priority,function(){x_(i)});return}}else if(n===31){if(n=d(i),n!==null){t.blockedOn=n,se(t.priority,function(){x_(i)});return}}else if(n===3&&i.stateNode.current.memoizedState.isDehydrated){t.blockedOn=i.tag===3?i.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Kc(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var i=Jd(t.nativeEvent);if(i===null){i=t.nativeEvent;var r=new i.constructor(i.type,i);es=r,i.target.dispatchEvent(r),es=null}else return n=ei(i),n!==null&&S_(n),t.blockedOn=i,!1;n.shift()}return!0}function A_(t,n,i){Kc(t)&&i.delete(n)}function UM(){tp=!1,Pr!==null&&Kc(Pr)&&(Pr=null),zr!==null&&Kc(zr)&&(zr=null),Ir!==null&&Kc(Ir)&&(Ir=null),uu.forEach(A_),cu.forEach(A_)}function Qc(t,n){t.blockedOn===n&&(t.blockedOn=null,tp||(tp=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,UM)))}var Jc=null;function b_(t){Jc!==t&&(Jc=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Jc===t&&(Jc=null);for(var n=0;n<t.length;n+=3){var i=t[n],r=t[n+1],l=t[n+2];if(typeof r!="function"){if($d(r||i)===null)continue;break}var c=ei(i);c!==null&&(t.splice(n,3),n-=3,Ph(c,{pending:!0,data:l,method:i.method,action:r},r,l))}}))}function Po(t){function n(H){return Qc(H,t)}Pr!==null&&Qc(Pr,t),zr!==null&&Qc(zr,t),Ir!==null&&Qc(Ir,t),uu.forEach(n),cu.forEach(n);for(var i=0;i<Br.length;i++){var r=Br[i];r.blockedOn===t&&(r.blockedOn=null)}for(;0<Br.length&&(i=Br[0],i.blockedOn===null);)T_(i),i.blockedOn===null&&Br.shift();if(i=(t.ownerDocument||t).$$reactFormReplay,i!=null)for(r=0;r<i.length;r+=3){var l=i[r],c=i[r+1],v=l[Zt]||null;if(typeof c=="function")v||b_(i);else if(v){var R=null;if(c&&c.hasAttribute("formAction")){if(l=c,v=c[Zt]||null)R=v.formAction;else if($d(l)!==null)continue}else R=v.action;typeof R=="function"?i[r+1]=R:(i.splice(r,3),r-=3),b_(i)}}}function R_(){function t(c){c.canIntercept&&c.info==="react-transition"&&c.intercept({handler:function(){return new Promise(function(v){return l=v})},focusReset:"manual",scroll:"manual"})}function n(){l!==null&&(l(),l=null),r||setTimeout(i,20)}function i(){if(!r&&!navigation.transition){var c=navigation.currentEntry;c&&c.url!=null&&navigation.navigate(c.url,{state:c.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,l=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(i,100),function(){r=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),l!==null&&(l(),l=null)}}}function ep(t){this._internalRoot=t}$c.prototype.render=ep.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(s(409));var i=n.current,r=zi();__(i,r,t,n,null,null)},$c.prototype.unmount=ep.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;__(t.current,2,null,t,null,null),Ic(),n[Ae]=null}};function $c(t){this._internalRoot=t}$c.prototype.unstable_scheduleHydration=function(t){if(t){var n=ae();t={blockedOn:null,target:t,priority:n};for(var i=0;i<Br.length&&n!==0&&n<Br[i].priority;i++);Br.splice(i,0,t),i===0&&T_(t)}};var C_=e.version;if(C_!=="19.3.0")throw Error(s(527,C_,"19.3.0"));Bt.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=y(n),t=t!==null?x(t):null,t=t===null?null:t.stateNode,t};var NM={bundleType:0,version:"19.3.0",rendererPackageName:"react-dom",currentDispatcherRef:Ot,reconcilerVersion:"19.3.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var tf=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!tf.isDisabled&&tf.supportsFiber)try{Le=tf.inject(NM),Qe=tf}catch{}}return du.createRoot=function(t,n){if(!u(t))throw Error(s(299));var i=!1,r="",l=v0,c=_0,v=y0;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(l=n.onUncaughtError),n.onCaughtError!==void 0&&(c=n.onCaughtError),n.onRecoverableError!==void 0&&(v=n.onRecoverableError)),n=g_(t,1,!1,null,null,i,r,null,l,c,v,R_),t[Ae]=n.current,Ud(t),new ep(n)},du.hydrateRoot=function(t,n,i){if(!u(t))throw Error(s(299));var r=!1,l="",c=v0,v=_0,R=y0,H=null;return i!=null&&(i.unstable_strictMode===!0&&(r=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onUncaughtError!==void 0&&(c=i.onUncaughtError),i.onCaughtError!==void 0&&(v=i.onCaughtError),i.onRecoverableError!==void 0&&(R=i.onRecoverableError),i.formState!==void 0&&(H=i.formState)),n=g_(t,1,!0,n,i??null,r,l,H,c,v,R,R_),n.context=v_(null),i=n.current,r=zi(),r=Pt(r),l=Mr(r),l.callback=null,Er(i,l,r),i=r,n.current.lanes=i,D(n,i),Ua(n),t[Ae]=n.current,Ud(t),new $c(n)},du.version="19.3.0",du}var F_;function VM(){if(F_)return ip.exports;F_=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),ip.exports=GM(),ip.exports}var XM=VM(),da=Cm();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const wm="170",kM=0,H_=1,YM=2,Jy=1,qM=2,ar=3,Kr=0,bi=1,rr=2,jr=0,el=1,Hp=2,G_=3,V_=4,WM=5,Bs=100,jM=101,ZM=102,KM=103,QM=104,JM=200,$M=201,tE=202,eE=203,Gp=204,Vp=205,nE=206,iE=207,aE=208,rE=209,sE=210,oE=211,lE=212,uE=213,cE=214,Xp=0,kp=1,Yp=2,al=3,qp=4,Wp=5,jp=6,Zp=7,$y=0,fE=1,hE=2,Zr=0,dE=1,pE=2,mE=3,tS=4,gE=5,vE=6,_E=7,eS=300,rl=301,sl=302,Kp=303,Qp=304,Pf=306,Jp=1e3,Hs=1001,$p=1002,Vi=1003,yE=1004,ef=1005,La=1006,lp=1007,Gs=1008,lr=1009,nS=1010,iS=1011,bu=1012,Dm=1013,Vs=1014,Oa=1015,Cu=1016,Um=1017,Nm=1018,ol=1020,aS=35902,rS=1021,sS=1022,ma=1023,oS=1024,lS=1025,nl=1026,ll=1027,Lm=1028,Om=1029,uS=1030,Pm=1031,zm=1033,Rf=33776,Cf=33777,wf=33778,Df=33779,tm=35840,em=35841,nm=35842,im=35843,am=36196,rm=37492,sm=37496,om=37808,lm=37809,um=37810,cm=37811,fm=37812,hm=37813,dm=37814,pm=37815,mm=37816,gm=37817,vm=37818,_m=37819,ym=37820,Sm=37821,Uf=36492,xm=36494,Mm=36495,cS=36283,Em=36284,Tm=36285,Am=36286,SE=3200,xE=3201,fS=0,ME=1,Wr="",Hi="srgb",cl="srgb-linear",zf="linear",on="srgb",zo=7680,X_=519,EE=512,TE=513,AE=514,hS=515,bE=516,RE=517,CE=518,wE=519,k_=35044,Y_="300 es",sr=2e3,Lf=2001;class fl{addEventListener(e,a){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(a)===-1&&s[e].push(a)}hasEventListener(e,a){if(this._listeners===void 0)return!1;const s=this._listeners;return s[e]!==void 0&&s[e].indexOf(a)!==-1}removeEventListener(e,a){if(this._listeners===void 0)return;const u=this._listeners[e];if(u!==void 0){const h=u.indexOf(a);h!==-1&&u.splice(h,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const s=this._listeners[e.type];if(s!==void 0){e.target=this;const u=s.slice(0);for(let h=0,p=u.length;h<p;h++)u[h].call(this,e);e.target=null}}}const ri=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let q_=1234567;const Tu=Math.PI/180,Ru=180/Math.PI;function hl(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,a=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(ri[o&255]+ri[o>>8&255]+ri[o>>16&255]+ri[o>>24&255]+"-"+ri[e&255]+ri[e>>8&255]+"-"+ri[e>>16&15|64]+ri[e>>24&255]+"-"+ri[a&63|128]+ri[a>>8&255]+"-"+ri[a>>16&255]+ri[a>>24&255]+ri[s&255]+ri[s>>8&255]+ri[s>>16&255]+ri[s>>24&255]).toLowerCase()}function oi(o,e,a){return Math.max(e,Math.min(a,o))}function Im(o,e){return(o%e+e)%e}function DE(o,e,a,s,u){return s+(o-e)*(u-s)/(a-e)}function UE(o,e,a){return o!==e?(a-o)/(e-o):0}function Au(o,e,a){return(1-a)*o+a*e}function NE(o,e,a,s){return Au(o,e,1-Math.exp(-a*s))}function LE(o,e=1){return e-Math.abs(Im(o,e*2)-e)}function OE(o,e,a){return o<=e?0:o>=a?1:(o=(o-e)/(a-e),o*o*(3-2*o))}function PE(o,e,a){return o<=e?0:o>=a?1:(o=(o-e)/(a-e),o*o*o*(o*(o*6-15)+10))}function zE(o,e){return o+Math.floor(Math.random()*(e-o+1))}function IE(o,e){return o+Math.random()*(e-o)}function BE(o){return o*(.5-Math.random())}function FE(o){o!==void 0&&(q_=o);let e=q_+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function HE(o){return o*Tu}function GE(o){return o*Ru}function VE(o){return(o&o-1)===0&&o!==0}function XE(o){return Math.pow(2,Math.ceil(Math.log(o)/Math.LN2))}function kE(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function YE(o,e,a,s,u){const h=Math.cos,p=Math.sin,d=h(a/2),g=p(a/2),y=h((e+s)/2),x=p((e+s)/2),_=h((e-s)/2),E=p((e-s)/2),A=h((s-e)/2),w=p((s-e)/2);switch(u){case"XYX":o.set(d*x,g*_,g*E,d*y);break;case"YZY":o.set(g*E,d*x,g*_,d*y);break;case"ZXZ":o.set(g*_,g*E,d*x,d*y);break;case"XZX":o.set(d*x,g*w,g*A,d*y);break;case"YXY":o.set(g*A,d*x,g*w,d*y);break;case"ZYZ":o.set(g*w,g*A,d*x,d*y);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+u)}}function Jo(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function mi(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const Io={DEG2RAD:Tu,RAD2DEG:Ru,generateUUID:hl,clamp:oi,euclideanModulo:Im,mapLinear:DE,inverseLerp:UE,lerp:Au,damp:NE,pingpong:LE,smoothstep:OE,smootherstep:PE,randInt:zE,randFloat:IE,randFloatSpread:BE,seededRandom:FE,degToRad:HE,radToDeg:GE,isPowerOfTwo:VE,ceilPowerOfTwo:XE,floorPowerOfTwo:kE,setQuaternionFromProperEuler:YE,normalize:mi,denormalize:Jo};class Ze{constructor(e=0,a=0){Ze.prototype.isVector2=!0,this.x=e,this.y=a}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,a){return this.x=e,this.y=a,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,a){switch(e){case 0:this.x=a;break;case 1:this.y=a;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,a){return this.x=e.x+a.x,this.y=e.y+a.y,this}addScaledVector(e,a){return this.x+=e.x*a,this.y+=e.y*a,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,a){return this.x=e.x-a.x,this.y=e.y-a.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const a=this.x,s=this.y,u=e.elements;return this.x=u[0]*a+u[3]*s+u[6],this.y=u[1]*a+u[4]*s+u[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,a){return this.x=Math.max(e.x,Math.min(a.x,this.x)),this.y=Math.max(e.y,Math.min(a.y,this.y)),this}clampScalar(e,a){return this.x=Math.max(e,Math.min(a,this.x)),this.y=Math.max(e,Math.min(a,this.y)),this}clampLength(e,a){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(e,Math.min(a,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const a=Math.sqrt(this.lengthSq()*e.lengthSq());if(a===0)return Math.PI/2;const s=this.dot(e)/a;return Math.acos(oi(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const a=this.x-e.x,s=this.y-e.y;return a*a+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,a){return this.x+=(e.x-this.x)*a,this.y+=(e.y-this.y)*a,this}lerpVectors(e,a,s){return this.x=e.x+(a.x-e.x)*s,this.y=e.y+(a.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,a=0){return this.x=e[a],this.y=e[a+1],this}toArray(e=[],a=0){return e[a]=this.x,e[a+1]=this.y,e}fromBufferAttribute(e,a){return this.x=e.getX(a),this.y=e.getY(a),this}rotateAround(e,a){const s=Math.cos(a),u=Math.sin(a),h=this.x-e.x,p=this.y-e.y;return this.x=h*s-p*u+e.x,this.y=h*u+p*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ue{constructor(e,a,s,u,h,p,d,g,y){Ue.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,a,s,u,h,p,d,g,y)}set(e,a,s,u,h,p,d,g,y){const x=this.elements;return x[0]=e,x[1]=u,x[2]=d,x[3]=a,x[4]=h,x[5]=g,x[6]=s,x[7]=p,x[8]=y,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const a=this.elements,s=e.elements;return a[0]=s[0],a[1]=s[1],a[2]=s[2],a[3]=s[3],a[4]=s[4],a[5]=s[5],a[6]=s[6],a[7]=s[7],a[8]=s[8],this}extractBasis(e,a,s){return e.setFromMatrix3Column(this,0),a.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const a=e.elements;return this.set(a[0],a[4],a[8],a[1],a[5],a[9],a[2],a[6],a[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,a){const s=e.elements,u=a.elements,h=this.elements,p=s[0],d=s[3],g=s[6],y=s[1],x=s[4],_=s[7],E=s[2],A=s[5],w=s[8],L=u[0],T=u[3],M=u[6],X=u[1],G=u[4],O=u[7],ft=u[2],Z=u[5],V=u[8];return h[0]=p*L+d*X+g*ft,h[3]=p*T+d*G+g*Z,h[6]=p*M+d*O+g*V,h[1]=y*L+x*X+_*ft,h[4]=y*T+x*G+_*Z,h[7]=y*M+x*O+_*V,h[2]=E*L+A*X+w*ft,h[5]=E*T+A*G+w*Z,h[8]=E*M+A*O+w*V,this}multiplyScalar(e){const a=this.elements;return a[0]*=e,a[3]*=e,a[6]*=e,a[1]*=e,a[4]*=e,a[7]*=e,a[2]*=e,a[5]*=e,a[8]*=e,this}determinant(){const e=this.elements,a=e[0],s=e[1],u=e[2],h=e[3],p=e[4],d=e[5],g=e[6],y=e[7],x=e[8];return a*p*x-a*d*y-s*h*x+s*d*g+u*h*y-u*p*g}invert(){const e=this.elements,a=e[0],s=e[1],u=e[2],h=e[3],p=e[4],d=e[5],g=e[6],y=e[7],x=e[8],_=x*p-d*y,E=d*g-x*h,A=y*h-p*g,w=a*_+s*E+u*A;if(w===0)return this.set(0,0,0,0,0,0,0,0,0);const L=1/w;return e[0]=_*L,e[1]=(u*y-x*s)*L,e[2]=(d*s-u*p)*L,e[3]=E*L,e[4]=(x*a-u*g)*L,e[5]=(u*h-d*a)*L,e[6]=A*L,e[7]=(s*g-y*a)*L,e[8]=(p*a-s*h)*L,this}transpose(){let e;const a=this.elements;return e=a[1],a[1]=a[3],a[3]=e,e=a[2],a[2]=a[6],a[6]=e,e=a[5],a[5]=a[7],a[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const a=this.elements;return e[0]=a[0],e[1]=a[3],e[2]=a[6],e[3]=a[1],e[4]=a[4],e[5]=a[7],e[6]=a[2],e[7]=a[5],e[8]=a[8],this}setUvTransform(e,a,s,u,h,p,d){const g=Math.cos(h),y=Math.sin(h);return this.set(s*g,s*y,-s*(g*p+y*d)+p+e,-u*y,u*g,-u*(-y*p+g*d)+d+a,0,0,1),this}scale(e,a){return this.premultiply(up.makeScale(e,a)),this}rotate(e){return this.premultiply(up.makeRotation(-e)),this}translate(e,a){return this.premultiply(up.makeTranslation(e,a)),this}makeTranslation(e,a){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,a,0,0,1),this}makeRotation(e){const a=Math.cos(e),s=Math.sin(e);return this.set(a,-s,0,s,a,0,0,0,1),this}makeScale(e,a){return this.set(e,0,0,0,a,0,0,0,1),this}equals(e){const a=this.elements,s=e.elements;for(let u=0;u<9;u++)if(a[u]!==s[u])return!1;return!0}fromArray(e,a=0){for(let s=0;s<9;s++)this.elements[s]=e[s+a];return this}toArray(e=[],a=0){const s=this.elements;return e[a]=s[0],e[a+1]=s[1],e[a+2]=s[2],e[a+3]=s[3],e[a+4]=s[4],e[a+5]=s[5],e[a+6]=s[6],e[a+7]=s[7],e[a+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const up=new Ue;function dS(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function Of(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function qE(){const o=Of("canvas");return o.style.display="block",o}const W_={};function xu(o){o in W_||(W_[o]=!0,console.warn(o))}function WE(o,e,a){return new Promise(function(s,u){function h(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:u();break;case o.TIMEOUT_EXPIRED:setTimeout(h,a);break;default:s()}}setTimeout(h,a)})}function jE(o){const e=o.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function ZE(o){const e=o.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const We={enabled:!0,workingColorSpace:cl,spaces:{},convert:function(o,e,a){return this.enabled===!1||e===a||!e||!a||(this.spaces[e].transfer===on&&(o.r=or(o.r),o.g=or(o.g),o.b=or(o.b)),this.spaces[e].primaries!==this.spaces[a].primaries&&(o.applyMatrix3(this.spaces[e].toXYZ),o.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===on&&(o.r=il(o.r),o.g=il(o.g),o.b=il(o.b))),o},fromWorkingColorSpace:function(o,e){return this.convert(o,this.workingColorSpace,e)},toWorkingColorSpace:function(o,e){return this.convert(o,e,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Wr?zf:this.spaces[o].transfer},getLuminanceCoefficients:function(o,e=this.workingColorSpace){return o.fromArray(this.spaces[e].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,e,a){return o.copy(this.spaces[e].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace}};function or(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function il(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}const j_=[.64,.33,.3,.6,.15,.06],Z_=[.2126,.7152,.0722],K_=[.3127,.329],Q_=new Ue().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),J_=new Ue().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);We.define({[cl]:{primaries:j_,whitePoint:K_,transfer:zf,toXYZ:Q_,fromXYZ:J_,luminanceCoefficients:Z_,workingColorSpaceConfig:{unpackColorSpace:Hi},outputColorSpaceConfig:{drawingBufferColorSpace:Hi}},[Hi]:{primaries:j_,whitePoint:K_,transfer:on,toXYZ:Q_,fromXYZ:J_,luminanceCoefficients:Z_,outputColorSpaceConfig:{drawingBufferColorSpace:Hi}}});let Bo;class KE{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let a;if(e instanceof HTMLCanvasElement)a=e;else{Bo===void 0&&(Bo=Of("canvas")),Bo.width=e.width,Bo.height=e.height;const s=Bo.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),a=Bo}return a.width>2048||a.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),a.toDataURL("image/jpeg",.6)):a.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const a=Of("canvas");a.width=e.width,a.height=e.height;const s=a.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const u=s.getImageData(0,0,e.width,e.height),h=u.data;for(let p=0;p<h.length;p++)h[p]=or(h[p]/255)*255;return s.putImageData(u,0,0),a}else if(e.data){const a=e.data.slice(0);for(let s=0;s<a.length;s++)a instanceof Uint8Array||a instanceof Uint8ClampedArray?a[s]=Math.floor(or(a[s]/255)*255):a[s]=or(a[s]);return{data:a,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let QE=0;class pS{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:QE++}),this.uuid=hl(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const a=e===void 0||typeof e=="string";if(!a&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},u=this.data;if(u!==null){let h;if(Array.isArray(u)){h=[];for(let p=0,d=u.length;p<d;p++)u[p].isDataTexture?h.push(cp(u[p].image)):h.push(cp(u[p]))}else h=cp(u);s.url=h}return a||(e.images[this.uuid]=s),s}}function cp(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?KE.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let JE=0;class li extends fl{constructor(e=li.DEFAULT_IMAGE,a=li.DEFAULT_MAPPING,s=Hs,u=Hs,h=La,p=Gs,d=ma,g=lr,y=li.DEFAULT_ANISOTROPY,x=Wr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:JE++}),this.uuid=hl(),this.name="",this.source=new pS(e),this.mipmaps=[],this.mapping=a,this.channel=0,this.wrapS=s,this.wrapT=u,this.magFilter=h,this.minFilter=p,this.anisotropy=y,this.format=d,this.internalFormat=null,this.type=g,this.offset=new Ze(0,0),this.repeat=new Ze(1,1),this.center=new Ze(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ue,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=x,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const a=e===void 0||typeof e=="string";if(!a&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),a||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==eS)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Jp:e.x=e.x-Math.floor(e.x);break;case Hs:e.x=e.x<0?0:1;break;case $p:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Jp:e.y=e.y-Math.floor(e.y);break;case Hs:e.y=e.y<0?0:1;break;case $p:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}li.DEFAULT_IMAGE=null;li.DEFAULT_MAPPING=eS;li.DEFAULT_ANISOTROPY=1;class ln{constructor(e=0,a=0,s=0,u=1){ln.prototype.isVector4=!0,this.x=e,this.y=a,this.z=s,this.w=u}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,a,s,u){return this.x=e,this.y=a,this.z=s,this.w=u,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,a){switch(e){case 0:this.x=a;break;case 1:this.y=a;break;case 2:this.z=a;break;case 3:this.w=a;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,a){return this.x=e.x+a.x,this.y=e.y+a.y,this.z=e.z+a.z,this.w=e.w+a.w,this}addScaledVector(e,a){return this.x+=e.x*a,this.y+=e.y*a,this.z+=e.z*a,this.w+=e.w*a,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,a){return this.x=e.x-a.x,this.y=e.y-a.y,this.z=e.z-a.z,this.w=e.w-a.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const a=this.x,s=this.y,u=this.z,h=this.w,p=e.elements;return this.x=p[0]*a+p[4]*s+p[8]*u+p[12]*h,this.y=p[1]*a+p[5]*s+p[9]*u+p[13]*h,this.z=p[2]*a+p[6]*s+p[10]*u+p[14]*h,this.w=p[3]*a+p[7]*s+p[11]*u+p[15]*h,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const a=Math.sqrt(1-e.w*e.w);return a<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/a,this.y=e.y/a,this.z=e.z/a),this}setAxisAngleFromRotationMatrix(e){let a,s,u,h;const g=e.elements,y=g[0],x=g[4],_=g[8],E=g[1],A=g[5],w=g[9],L=g[2],T=g[6],M=g[10];if(Math.abs(x-E)<.01&&Math.abs(_-L)<.01&&Math.abs(w-T)<.01){if(Math.abs(x+E)<.1&&Math.abs(_+L)<.1&&Math.abs(w+T)<.1&&Math.abs(y+A+M-3)<.1)return this.set(1,0,0,0),this;a=Math.PI;const G=(y+1)/2,O=(A+1)/2,ft=(M+1)/2,Z=(x+E)/4,V=(_+L)/4,q=(w+T)/4;return G>O&&G>ft?G<.01?(s=0,u=.707106781,h=.707106781):(s=Math.sqrt(G),u=Z/s,h=V/s):O>ft?O<.01?(s=.707106781,u=0,h=.707106781):(u=Math.sqrt(O),s=Z/u,h=q/u):ft<.01?(s=.707106781,u=.707106781,h=0):(h=Math.sqrt(ft),s=V/h,u=q/h),this.set(s,u,h,a),this}let X=Math.sqrt((T-w)*(T-w)+(_-L)*(_-L)+(E-x)*(E-x));return Math.abs(X)<.001&&(X=1),this.x=(T-w)/X,this.y=(_-L)/X,this.z=(E-x)/X,this.w=Math.acos((y+A+M-1)/2),this}setFromMatrixPosition(e){const a=e.elements;return this.x=a[12],this.y=a[13],this.z=a[14],this.w=a[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,a){return this.x=Math.max(e.x,Math.min(a.x,this.x)),this.y=Math.max(e.y,Math.min(a.y,this.y)),this.z=Math.max(e.z,Math.min(a.z,this.z)),this.w=Math.max(e.w,Math.min(a.w,this.w)),this}clampScalar(e,a){return this.x=Math.max(e,Math.min(a,this.x)),this.y=Math.max(e,Math.min(a,this.y)),this.z=Math.max(e,Math.min(a,this.z)),this.w=Math.max(e,Math.min(a,this.w)),this}clampLength(e,a){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(e,Math.min(a,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,a){return this.x+=(e.x-this.x)*a,this.y+=(e.y-this.y)*a,this.z+=(e.z-this.z)*a,this.w+=(e.w-this.w)*a,this}lerpVectors(e,a,s){return this.x=e.x+(a.x-e.x)*s,this.y=e.y+(a.y-e.y)*s,this.z=e.z+(a.z-e.z)*s,this.w=e.w+(a.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,a=0){return this.x=e[a],this.y=e[a+1],this.z=e[a+2],this.w=e[a+3],this}toArray(e=[],a=0){return e[a]=this.x,e[a+1]=this.y,e[a+2]=this.z,e[a+3]=this.w,e}fromBufferAttribute(e,a){return this.x=e.getX(a),this.y=e.getY(a),this.z=e.getZ(a),this.w=e.getW(a),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class $E extends fl{constructor(e=1,a=1,s={}){super(),this.isRenderTarget=!0,this.width=e,this.height=a,this.depth=1,this.scissor=new ln(0,0,e,a),this.scissorTest=!1,this.viewport=new ln(0,0,e,a);const u={width:e,height:a,depth:1};s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:La,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},s);const h=new li(u,s.mapping,s.wrapS,s.wrapT,s.magFilter,s.minFilter,s.format,s.type,s.anisotropy,s.colorSpace);h.flipY=!1,h.generateMipmaps=s.generateMipmaps,h.internalFormat=s.internalFormat,this.textures=[];const p=s.count;for(let d=0;d<p;d++)this.textures[d]=h.clone(),this.textures[d].isRenderTargetTexture=!0;this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this.depthTexture=s.depthTexture,this.samples=s.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,a,s=1){if(this.width!==e||this.height!==a||this.depth!==s){this.width=e,this.height=a,this.depth=s;for(let u=0,h=this.textures.length;u<h;u++)this.textures[u].image.width=e,this.textures[u].image.height=a,this.textures[u].image.depth=s;this.dispose()}this.viewport.set(0,0,e,a),this.scissor.set(0,0,e,a)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let s=0,u=e.textures.length;s<u;s++)this.textures[s]=e.textures[s].clone(),this.textures[s].isRenderTargetTexture=!0;const a=Object.assign({},e.texture.image);return this.texture.source=new pS(a),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Xs extends $E{constructor(e=1,a=1,s={}){super(e,a,s),this.isWebGLRenderTarget=!0}}class mS extends li{constructor(e=null,a=1,s=1,u=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:a,height:s,depth:u},this.magFilter=Vi,this.minFilter=Vi,this.wrapR=Hs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class tT extends li{constructor(e=null,a=1,s=1,u=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:a,height:s,depth:u},this.magFilter=Vi,this.minFilter=Vi,this.wrapR=Hs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class wu{constructor(e=0,a=0,s=0,u=1){this.isQuaternion=!0,this._x=e,this._y=a,this._z=s,this._w=u}static slerpFlat(e,a,s,u,h,p,d){let g=s[u+0],y=s[u+1],x=s[u+2],_=s[u+3];const E=h[p+0],A=h[p+1],w=h[p+2],L=h[p+3];if(d===0){e[a+0]=g,e[a+1]=y,e[a+2]=x,e[a+3]=_;return}if(d===1){e[a+0]=E,e[a+1]=A,e[a+2]=w,e[a+3]=L;return}if(_!==L||g!==E||y!==A||x!==w){let T=1-d;const M=g*E+y*A+x*w+_*L,X=M>=0?1:-1,G=1-M*M;if(G>Number.EPSILON){const ft=Math.sqrt(G),Z=Math.atan2(ft,M*X);T=Math.sin(T*Z)/ft,d=Math.sin(d*Z)/ft}const O=d*X;if(g=g*T+E*O,y=y*T+A*O,x=x*T+w*O,_=_*T+L*O,T===1-d){const ft=1/Math.sqrt(g*g+y*y+x*x+_*_);g*=ft,y*=ft,x*=ft,_*=ft}}e[a]=g,e[a+1]=y,e[a+2]=x,e[a+3]=_}static multiplyQuaternionsFlat(e,a,s,u,h,p){const d=s[u],g=s[u+1],y=s[u+2],x=s[u+3],_=h[p],E=h[p+1],A=h[p+2],w=h[p+3];return e[a]=d*w+x*_+g*A-y*E,e[a+1]=g*w+x*E+y*_-d*A,e[a+2]=y*w+x*A+d*E-g*_,e[a+3]=x*w-d*_-g*E-y*A,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,a,s,u){return this._x=e,this._y=a,this._z=s,this._w=u,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,a=!0){const s=e._x,u=e._y,h=e._z,p=e._order,d=Math.cos,g=Math.sin,y=d(s/2),x=d(u/2),_=d(h/2),E=g(s/2),A=g(u/2),w=g(h/2);switch(p){case"XYZ":this._x=E*x*_+y*A*w,this._y=y*A*_-E*x*w,this._z=y*x*w+E*A*_,this._w=y*x*_-E*A*w;break;case"YXZ":this._x=E*x*_+y*A*w,this._y=y*A*_-E*x*w,this._z=y*x*w-E*A*_,this._w=y*x*_+E*A*w;break;case"ZXY":this._x=E*x*_-y*A*w,this._y=y*A*_+E*x*w,this._z=y*x*w+E*A*_,this._w=y*x*_-E*A*w;break;case"ZYX":this._x=E*x*_-y*A*w,this._y=y*A*_+E*x*w,this._z=y*x*w-E*A*_,this._w=y*x*_+E*A*w;break;case"YZX":this._x=E*x*_+y*A*w,this._y=y*A*_+E*x*w,this._z=y*x*w-E*A*_,this._w=y*x*_-E*A*w;break;case"XZY":this._x=E*x*_-y*A*w,this._y=y*A*_-E*x*w,this._z=y*x*w+E*A*_,this._w=y*x*_+E*A*w;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+p)}return a===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,a){const s=a/2,u=Math.sin(s);return this._x=e.x*u,this._y=e.y*u,this._z=e.z*u,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const a=e.elements,s=a[0],u=a[4],h=a[8],p=a[1],d=a[5],g=a[9],y=a[2],x=a[6],_=a[10],E=s+d+_;if(E>0){const A=.5/Math.sqrt(E+1);this._w=.25/A,this._x=(x-g)*A,this._y=(h-y)*A,this._z=(p-u)*A}else if(s>d&&s>_){const A=2*Math.sqrt(1+s-d-_);this._w=(x-g)/A,this._x=.25*A,this._y=(u+p)/A,this._z=(h+y)/A}else if(d>_){const A=2*Math.sqrt(1+d-s-_);this._w=(h-y)/A,this._x=(u+p)/A,this._y=.25*A,this._z=(g+x)/A}else{const A=2*Math.sqrt(1+_-s-d);this._w=(p-u)/A,this._x=(h+y)/A,this._y=(g+x)/A,this._z=.25*A}return this._onChangeCallback(),this}setFromUnitVectors(e,a){let s=e.dot(a)+1;return s<Number.EPSILON?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*a.z-e.z*a.y,this._y=e.z*a.x-e.x*a.z,this._z=e.x*a.y-e.y*a.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(oi(this.dot(e),-1,1)))}rotateTowards(e,a){const s=this.angleTo(e);if(s===0)return this;const u=Math.min(1,a/s);return this.slerp(e,u),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,a){const s=e._x,u=e._y,h=e._z,p=e._w,d=a._x,g=a._y,y=a._z,x=a._w;return this._x=s*x+p*d+u*y-h*g,this._y=u*x+p*g+h*d-s*y,this._z=h*x+p*y+s*g-u*d,this._w=p*x-s*d-u*g-h*y,this._onChangeCallback(),this}slerp(e,a){if(a===0)return this;if(a===1)return this.copy(e);const s=this._x,u=this._y,h=this._z,p=this._w;let d=p*e._w+s*e._x+u*e._y+h*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=p,this._x=s,this._y=u,this._z=h,this;const g=1-d*d;if(g<=Number.EPSILON){const A=1-a;return this._w=A*p+a*this._w,this._x=A*s+a*this._x,this._y=A*u+a*this._y,this._z=A*h+a*this._z,this.normalize(),this}const y=Math.sqrt(g),x=Math.atan2(y,d),_=Math.sin((1-a)*x)/y,E=Math.sin(a*x)/y;return this._w=p*_+this._w*E,this._x=s*_+this._x*E,this._y=u*_+this._y*E,this._z=h*_+this._z*E,this._onChangeCallback(),this}slerpQuaternions(e,a,s){return this.copy(e).slerp(a,s)}random(){const e=2*Math.PI*Math.random(),a=2*Math.PI*Math.random(),s=Math.random(),u=Math.sqrt(1-s),h=Math.sqrt(s);return this.set(u*Math.sin(e),u*Math.cos(e),h*Math.sin(a),h*Math.cos(a))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,a=0){return this._x=e[a],this._y=e[a+1],this._z=e[a+2],this._w=e[a+3],this._onChangeCallback(),this}toArray(e=[],a=0){return e[a]=this._x,e[a+1]=this._y,e[a+2]=this._z,e[a+3]=this._w,e}fromBufferAttribute(e,a){return this._x=e.getX(a),this._y=e.getY(a),this._z=e.getZ(a),this._w=e.getW(a),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class lt{constructor(e=0,a=0,s=0){lt.prototype.isVector3=!0,this.x=e,this.y=a,this.z=s}set(e,a,s){return s===void 0&&(s=this.z),this.x=e,this.y=a,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,a){switch(e){case 0:this.x=a;break;case 1:this.y=a;break;case 2:this.z=a;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,a){return this.x=e.x+a.x,this.y=e.y+a.y,this.z=e.z+a.z,this}addScaledVector(e,a){return this.x+=e.x*a,this.y+=e.y*a,this.z+=e.z*a,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,a){return this.x=e.x-a.x,this.y=e.y-a.y,this.z=e.z-a.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,a){return this.x=e.x*a.x,this.y=e.y*a.y,this.z=e.z*a.z,this}applyEuler(e){return this.applyQuaternion($_.setFromEuler(e))}applyAxisAngle(e,a){return this.applyQuaternion($_.setFromAxisAngle(e,a))}applyMatrix3(e){const a=this.x,s=this.y,u=this.z,h=e.elements;return this.x=h[0]*a+h[3]*s+h[6]*u,this.y=h[1]*a+h[4]*s+h[7]*u,this.z=h[2]*a+h[5]*s+h[8]*u,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const a=this.x,s=this.y,u=this.z,h=e.elements,p=1/(h[3]*a+h[7]*s+h[11]*u+h[15]);return this.x=(h[0]*a+h[4]*s+h[8]*u+h[12])*p,this.y=(h[1]*a+h[5]*s+h[9]*u+h[13])*p,this.z=(h[2]*a+h[6]*s+h[10]*u+h[14])*p,this}applyQuaternion(e){const a=this.x,s=this.y,u=this.z,h=e.x,p=e.y,d=e.z,g=e.w,y=2*(p*u-d*s),x=2*(d*a-h*u),_=2*(h*s-p*a);return this.x=a+g*y+p*_-d*x,this.y=s+g*x+d*y-h*_,this.z=u+g*_+h*x-p*y,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const a=this.x,s=this.y,u=this.z,h=e.elements;return this.x=h[0]*a+h[4]*s+h[8]*u,this.y=h[1]*a+h[5]*s+h[9]*u,this.z=h[2]*a+h[6]*s+h[10]*u,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,a){return this.x=Math.max(e.x,Math.min(a.x,this.x)),this.y=Math.max(e.y,Math.min(a.y,this.y)),this.z=Math.max(e.z,Math.min(a.z,this.z)),this}clampScalar(e,a){return this.x=Math.max(e,Math.min(a,this.x)),this.y=Math.max(e,Math.min(a,this.y)),this.z=Math.max(e,Math.min(a,this.z)),this}clampLength(e,a){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(e,Math.min(a,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,a){return this.x+=(e.x-this.x)*a,this.y+=(e.y-this.y)*a,this.z+=(e.z-this.z)*a,this}lerpVectors(e,a,s){return this.x=e.x+(a.x-e.x)*s,this.y=e.y+(a.y-e.y)*s,this.z=e.z+(a.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,a){const s=e.x,u=e.y,h=e.z,p=a.x,d=a.y,g=a.z;return this.x=u*g-h*d,this.y=h*p-s*g,this.z=s*d-u*p,this}projectOnVector(e){const a=e.lengthSq();if(a===0)return this.set(0,0,0);const s=e.dot(this)/a;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return fp.copy(this).projectOnVector(e),this.sub(fp)}reflect(e){return this.sub(fp.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const a=Math.sqrt(this.lengthSq()*e.lengthSq());if(a===0)return Math.PI/2;const s=this.dot(e)/a;return Math.acos(oi(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const a=this.x-e.x,s=this.y-e.y,u=this.z-e.z;return a*a+s*s+u*u}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,a,s){const u=Math.sin(a)*e;return this.x=u*Math.sin(s),this.y=Math.cos(a)*e,this.z=u*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,a,s){return this.x=e*Math.sin(a),this.y=s,this.z=e*Math.cos(a),this}setFromMatrixPosition(e){const a=e.elements;return this.x=a[12],this.y=a[13],this.z=a[14],this}setFromMatrixScale(e){const a=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),u=this.setFromMatrixColumn(e,2).length();return this.x=a,this.y=s,this.z=u,this}setFromMatrixColumn(e,a){return this.fromArray(e.elements,a*4)}setFromMatrix3Column(e,a){return this.fromArray(e.elements,a*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,a=0){return this.x=e[a],this.y=e[a+1],this.z=e[a+2],this}toArray(e=[],a=0){return e[a]=this.x,e[a+1]=this.y,e[a+2]=this.z,e}fromBufferAttribute(e,a){return this.x=e.getX(a),this.y=e.getY(a),this.z=e.getZ(a),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,a=Math.random()*2-1,s=Math.sqrt(1-a*a);return this.x=s*Math.cos(e),this.y=a,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const fp=new lt,$_=new wu;class ks{constructor(e=new lt(1/0,1/0,1/0),a=new lt(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=a}set(e,a){return this.min.copy(e),this.max.copy(a),this}setFromArray(e){this.makeEmpty();for(let a=0,s=e.length;a<s;a+=3)this.expandByPoint(ca.fromArray(e,a));return this}setFromBufferAttribute(e){this.makeEmpty();for(let a=0,s=e.count;a<s;a++)this.expandByPoint(ca.fromBufferAttribute(e,a));return this}setFromPoints(e){this.makeEmpty();for(let a=0,s=e.length;a<s;a++)this.expandByPoint(e[a]);return this}setFromCenterAndSize(e,a){const s=ca.copy(a).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,a=!1){return this.makeEmpty(),this.expandByObject(e,a)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,a=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const h=s.getAttribute("position");if(a===!0&&h!==void 0&&e.isInstancedMesh!==!0)for(let p=0,d=h.count;p<d;p++)e.isMesh===!0?e.getVertexPosition(p,ca):ca.fromBufferAttribute(h,p),ca.applyMatrix4(e.matrixWorld),this.expandByPoint(ca);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),nf.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),nf.copy(s.boundingBox)),nf.applyMatrix4(e.matrixWorld),this.union(nf)}const u=e.children;for(let h=0,p=u.length;h<p;h++)this.expandByObject(u[h],a);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,a){return a.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ca),ca.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let a,s;return e.normal.x>0?(a=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(a=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(a+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(a+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(a+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(a+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),a<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(pu),af.subVectors(this.max,pu),Fo.subVectors(e.a,pu),Ho.subVectors(e.b,pu),Go.subVectors(e.c,pu),Hr.subVectors(Ho,Fo),Gr.subVectors(Go,Ho),ws.subVectors(Fo,Go);let a=[0,-Hr.z,Hr.y,0,-Gr.z,Gr.y,0,-ws.z,ws.y,Hr.z,0,-Hr.x,Gr.z,0,-Gr.x,ws.z,0,-ws.x,-Hr.y,Hr.x,0,-Gr.y,Gr.x,0,-ws.y,ws.x,0];return!hp(a,Fo,Ho,Go,af)||(a=[1,0,0,0,1,0,0,0,1],!hp(a,Fo,Ho,Go,af))?!1:(rf.crossVectors(Hr,Gr),a=[rf.x,rf.y,rf.z],hp(a,Fo,Ho,Go,af))}clampPoint(e,a){return a.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ca).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ca).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:($a[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),$a[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),$a[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),$a[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),$a[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),$a[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),$a[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),$a[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints($a),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const $a=[new lt,new lt,new lt,new lt,new lt,new lt,new lt,new lt],ca=new lt,nf=new ks,Fo=new lt,Ho=new lt,Go=new lt,Hr=new lt,Gr=new lt,ws=new lt,pu=new lt,af=new lt,rf=new lt,Ds=new lt;function hp(o,e,a,s,u){for(let h=0,p=o.length-3;h<=p;h+=3){Ds.fromArray(o,h);const d=u.x*Math.abs(Ds.x)+u.y*Math.abs(Ds.y)+u.z*Math.abs(Ds.z),g=e.dot(Ds),y=a.dot(Ds),x=s.dot(Ds);if(Math.max(-Math.max(g,y,x),Math.min(g,y,x))>d)return!1}return!0}const eT=new ks,mu=new lt,dp=new lt;class dl{constructor(e=new lt,a=-1){this.isSphere=!0,this.center=e,this.radius=a}set(e,a){return this.center.copy(e),this.radius=a,this}setFromPoints(e,a){const s=this.center;a!==void 0?s.copy(a):eT.setFromPoints(e).getCenter(s);let u=0;for(let h=0,p=e.length;h<p;h++)u=Math.max(u,s.distanceToSquared(e[h]));return this.radius=Math.sqrt(u),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const a=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=a*a}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,a){const s=this.center.distanceToSquared(e);return a.copy(e),s>this.radius*this.radius&&(a.sub(this.center).normalize(),a.multiplyScalar(this.radius).add(this.center)),a}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;mu.subVectors(e,this.center);const a=mu.lengthSq();if(a>this.radius*this.radius){const s=Math.sqrt(a),u=(s-this.radius)*.5;this.center.addScaledVector(mu,u/s),this.radius+=u}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(dp.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(mu.copy(e.center).add(dp)),this.expandByPoint(mu.copy(e.center).sub(dp))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const tr=new lt,pp=new lt,sf=new lt,Vr=new lt,mp=new lt,of=new lt,gp=new lt;class gS{constructor(e=new lt,a=new lt(0,0,-1)){this.origin=e,this.direction=a}set(e,a){return this.origin.copy(e),this.direction.copy(a),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,a){return a.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,tr)),this}closestPointToPoint(e,a){a.subVectors(e,this.origin);const s=a.dot(this.direction);return s<0?a.copy(this.origin):a.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const a=tr.subVectors(e,this.origin).dot(this.direction);return a<0?this.origin.distanceToSquared(e):(tr.copy(this.origin).addScaledVector(this.direction,a),tr.distanceToSquared(e))}distanceSqToSegment(e,a,s,u){pp.copy(e).add(a).multiplyScalar(.5),sf.copy(a).sub(e).normalize(),Vr.copy(this.origin).sub(pp);const h=e.distanceTo(a)*.5,p=-this.direction.dot(sf),d=Vr.dot(this.direction),g=-Vr.dot(sf),y=Vr.lengthSq(),x=Math.abs(1-p*p);let _,E,A,w;if(x>0)if(_=p*g-d,E=p*d-g,w=h*x,_>=0)if(E>=-w)if(E<=w){const L=1/x;_*=L,E*=L,A=_*(_+p*E+2*d)+E*(p*_+E+2*g)+y}else E=h,_=Math.max(0,-(p*E+d)),A=-_*_+E*(E+2*g)+y;else E=-h,_=Math.max(0,-(p*E+d)),A=-_*_+E*(E+2*g)+y;else E<=-w?(_=Math.max(0,-(-p*h+d)),E=_>0?-h:Math.min(Math.max(-h,-g),h),A=-_*_+E*(E+2*g)+y):E<=w?(_=0,E=Math.min(Math.max(-h,-g),h),A=E*(E+2*g)+y):(_=Math.max(0,-(p*h+d)),E=_>0?h:Math.min(Math.max(-h,-g),h),A=-_*_+E*(E+2*g)+y);else E=p>0?-h:h,_=Math.max(0,-(p*E+d)),A=-_*_+E*(E+2*g)+y;return s&&s.copy(this.origin).addScaledVector(this.direction,_),u&&u.copy(pp).addScaledVector(sf,E),A}intersectSphere(e,a){tr.subVectors(e.center,this.origin);const s=tr.dot(this.direction),u=tr.dot(tr)-s*s,h=e.radius*e.radius;if(u>h)return null;const p=Math.sqrt(h-u),d=s-p,g=s+p;return g<0?null:d<0?this.at(g,a):this.at(d,a)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const a=e.normal.dot(this.direction);if(a===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/a;return s>=0?s:null}intersectPlane(e,a){const s=this.distanceToPlane(e);return s===null?null:this.at(s,a)}intersectsPlane(e){const a=e.distanceToPoint(this.origin);return a===0||e.normal.dot(this.direction)*a<0}intersectBox(e,a){let s,u,h,p,d,g;const y=1/this.direction.x,x=1/this.direction.y,_=1/this.direction.z,E=this.origin;return y>=0?(s=(e.min.x-E.x)*y,u=(e.max.x-E.x)*y):(s=(e.max.x-E.x)*y,u=(e.min.x-E.x)*y),x>=0?(h=(e.min.y-E.y)*x,p=(e.max.y-E.y)*x):(h=(e.max.y-E.y)*x,p=(e.min.y-E.y)*x),s>p||h>u||((h>s||isNaN(s))&&(s=h),(p<u||isNaN(u))&&(u=p),_>=0?(d=(e.min.z-E.z)*_,g=(e.max.z-E.z)*_):(d=(e.max.z-E.z)*_,g=(e.min.z-E.z)*_),s>g||d>u)||((d>s||s!==s)&&(s=d),(g<u||u!==u)&&(u=g),u<0)?null:this.at(s>=0?s:u,a)}intersectsBox(e){return this.intersectBox(e,tr)!==null}intersectTriangle(e,a,s,u,h){mp.subVectors(a,e),of.subVectors(s,e),gp.crossVectors(mp,of);let p=this.direction.dot(gp),d;if(p>0){if(u)return null;d=1}else if(p<0)d=-1,p=-p;else return null;Vr.subVectors(this.origin,e);const g=d*this.direction.dot(of.crossVectors(Vr,of));if(g<0)return null;const y=d*this.direction.dot(mp.cross(Vr));if(y<0||g+y>p)return null;const x=-d*Vr.dot(gp);return x<0?null:this.at(x/p,h)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class hn{constructor(e,a,s,u,h,p,d,g,y,x,_,E,A,w,L,T){hn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,a,s,u,h,p,d,g,y,x,_,E,A,w,L,T)}set(e,a,s,u,h,p,d,g,y,x,_,E,A,w,L,T){const M=this.elements;return M[0]=e,M[4]=a,M[8]=s,M[12]=u,M[1]=h,M[5]=p,M[9]=d,M[13]=g,M[2]=y,M[6]=x,M[10]=_,M[14]=E,M[3]=A,M[7]=w,M[11]=L,M[15]=T,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new hn().fromArray(this.elements)}copy(e){const a=this.elements,s=e.elements;return a[0]=s[0],a[1]=s[1],a[2]=s[2],a[3]=s[3],a[4]=s[4],a[5]=s[5],a[6]=s[6],a[7]=s[7],a[8]=s[8],a[9]=s[9],a[10]=s[10],a[11]=s[11],a[12]=s[12],a[13]=s[13],a[14]=s[14],a[15]=s[15],this}copyPosition(e){const a=this.elements,s=e.elements;return a[12]=s[12],a[13]=s[13],a[14]=s[14],this}setFromMatrix3(e){const a=e.elements;return this.set(a[0],a[3],a[6],0,a[1],a[4],a[7],0,a[2],a[5],a[8],0,0,0,0,1),this}extractBasis(e,a,s){return e.setFromMatrixColumn(this,0),a.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(e,a,s){return this.set(e.x,a.x,s.x,0,e.y,a.y,s.y,0,e.z,a.z,s.z,0,0,0,0,1),this}extractRotation(e){const a=this.elements,s=e.elements,u=1/Vo.setFromMatrixColumn(e,0).length(),h=1/Vo.setFromMatrixColumn(e,1).length(),p=1/Vo.setFromMatrixColumn(e,2).length();return a[0]=s[0]*u,a[1]=s[1]*u,a[2]=s[2]*u,a[3]=0,a[4]=s[4]*h,a[5]=s[5]*h,a[6]=s[6]*h,a[7]=0,a[8]=s[8]*p,a[9]=s[9]*p,a[10]=s[10]*p,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,this}makeRotationFromEuler(e){const a=this.elements,s=e.x,u=e.y,h=e.z,p=Math.cos(s),d=Math.sin(s),g=Math.cos(u),y=Math.sin(u),x=Math.cos(h),_=Math.sin(h);if(e.order==="XYZ"){const E=p*x,A=p*_,w=d*x,L=d*_;a[0]=g*x,a[4]=-g*_,a[8]=y,a[1]=A+w*y,a[5]=E-L*y,a[9]=-d*g,a[2]=L-E*y,a[6]=w+A*y,a[10]=p*g}else if(e.order==="YXZ"){const E=g*x,A=g*_,w=y*x,L=y*_;a[0]=E+L*d,a[4]=w*d-A,a[8]=p*y,a[1]=p*_,a[5]=p*x,a[9]=-d,a[2]=A*d-w,a[6]=L+E*d,a[10]=p*g}else if(e.order==="ZXY"){const E=g*x,A=g*_,w=y*x,L=y*_;a[0]=E-L*d,a[4]=-p*_,a[8]=w+A*d,a[1]=A+w*d,a[5]=p*x,a[9]=L-E*d,a[2]=-p*y,a[6]=d,a[10]=p*g}else if(e.order==="ZYX"){const E=p*x,A=p*_,w=d*x,L=d*_;a[0]=g*x,a[4]=w*y-A,a[8]=E*y+L,a[1]=g*_,a[5]=L*y+E,a[9]=A*y-w,a[2]=-y,a[6]=d*g,a[10]=p*g}else if(e.order==="YZX"){const E=p*g,A=p*y,w=d*g,L=d*y;a[0]=g*x,a[4]=L-E*_,a[8]=w*_+A,a[1]=_,a[5]=p*x,a[9]=-d*x,a[2]=-y*x,a[6]=A*_+w,a[10]=E-L*_}else if(e.order==="XZY"){const E=p*g,A=p*y,w=d*g,L=d*y;a[0]=g*x,a[4]=-_,a[8]=y*x,a[1]=E*_+L,a[5]=p*x,a[9]=A*_-w,a[2]=w*_-A,a[6]=d*x,a[10]=L*_+E}return a[3]=0,a[7]=0,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,this}makeRotationFromQuaternion(e){return this.compose(nT,e,iT)}lookAt(e,a,s){const u=this.elements;return Bi.subVectors(e,a),Bi.lengthSq()===0&&(Bi.z=1),Bi.normalize(),Xr.crossVectors(s,Bi),Xr.lengthSq()===0&&(Math.abs(s.z)===1?Bi.x+=1e-4:Bi.z+=1e-4,Bi.normalize(),Xr.crossVectors(s,Bi)),Xr.normalize(),lf.crossVectors(Bi,Xr),u[0]=Xr.x,u[4]=lf.x,u[8]=Bi.x,u[1]=Xr.y,u[5]=lf.y,u[9]=Bi.y,u[2]=Xr.z,u[6]=lf.z,u[10]=Bi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,a){const s=e.elements,u=a.elements,h=this.elements,p=s[0],d=s[4],g=s[8],y=s[12],x=s[1],_=s[5],E=s[9],A=s[13],w=s[2],L=s[6],T=s[10],M=s[14],X=s[3],G=s[7],O=s[11],ft=s[15],Z=u[0],V=u[4],q=u[8],P=u[12],N=u[1],k=u[5],yt=u[9],dt=u[13],Rt=u[2],gt=u[6],Q=u[10],ht=u[14],at=u[3],wt=u[7],Nt=u[11],Jt=u[15];return h[0]=p*Z+d*N+g*Rt+y*at,h[4]=p*V+d*k+g*gt+y*wt,h[8]=p*q+d*yt+g*Q+y*Nt,h[12]=p*P+d*dt+g*ht+y*Jt,h[1]=x*Z+_*N+E*Rt+A*at,h[5]=x*V+_*k+E*gt+A*wt,h[9]=x*q+_*yt+E*Q+A*Nt,h[13]=x*P+_*dt+E*ht+A*Jt,h[2]=w*Z+L*N+T*Rt+M*at,h[6]=w*V+L*k+T*gt+M*wt,h[10]=w*q+L*yt+T*Q+M*Nt,h[14]=w*P+L*dt+T*ht+M*Jt,h[3]=X*Z+G*N+O*Rt+ft*at,h[7]=X*V+G*k+O*gt+ft*wt,h[11]=X*q+G*yt+O*Q+ft*Nt,h[15]=X*P+G*dt+O*ht+ft*Jt,this}multiplyScalar(e){const a=this.elements;return a[0]*=e,a[4]*=e,a[8]*=e,a[12]*=e,a[1]*=e,a[5]*=e,a[9]*=e,a[13]*=e,a[2]*=e,a[6]*=e,a[10]*=e,a[14]*=e,a[3]*=e,a[7]*=e,a[11]*=e,a[15]*=e,this}determinant(){const e=this.elements,a=e[0],s=e[4],u=e[8],h=e[12],p=e[1],d=e[5],g=e[9],y=e[13],x=e[2],_=e[6],E=e[10],A=e[14],w=e[3],L=e[7],T=e[11],M=e[15];return w*(+h*g*_-u*y*_-h*d*E+s*y*E+u*d*A-s*g*A)+L*(+a*g*A-a*y*E+h*p*E-u*p*A+u*y*x-h*g*x)+T*(+a*y*_-a*d*A-h*p*_+s*p*A+h*d*x-s*y*x)+M*(-u*d*x-a*g*_+a*d*E+u*p*_-s*p*E+s*g*x)}transpose(){const e=this.elements;let a;return a=e[1],e[1]=e[4],e[4]=a,a=e[2],e[2]=e[8],e[8]=a,a=e[6],e[6]=e[9],e[9]=a,a=e[3],e[3]=e[12],e[12]=a,a=e[7],e[7]=e[13],e[13]=a,a=e[11],e[11]=e[14],e[14]=a,this}setPosition(e,a,s){const u=this.elements;return e.isVector3?(u[12]=e.x,u[13]=e.y,u[14]=e.z):(u[12]=e,u[13]=a,u[14]=s),this}invert(){const e=this.elements,a=e[0],s=e[1],u=e[2],h=e[3],p=e[4],d=e[5],g=e[6],y=e[7],x=e[8],_=e[9],E=e[10],A=e[11],w=e[12],L=e[13],T=e[14],M=e[15],X=_*T*y-L*E*y+L*g*A-d*T*A-_*g*M+d*E*M,G=w*E*y-x*T*y-w*g*A+p*T*A+x*g*M-p*E*M,O=x*L*y-w*_*y+w*d*A-p*L*A-x*d*M+p*_*M,ft=w*_*g-x*L*g-w*d*E+p*L*E+x*d*T-p*_*T,Z=a*X+s*G+u*O+h*ft;if(Z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const V=1/Z;return e[0]=X*V,e[1]=(L*E*h-_*T*h-L*u*A+s*T*A+_*u*M-s*E*M)*V,e[2]=(d*T*h-L*g*h+L*u*y-s*T*y-d*u*M+s*g*M)*V,e[3]=(_*g*h-d*E*h-_*u*y+s*E*y+d*u*A-s*g*A)*V,e[4]=G*V,e[5]=(x*T*h-w*E*h+w*u*A-a*T*A-x*u*M+a*E*M)*V,e[6]=(w*g*h-p*T*h-w*u*y+a*T*y+p*u*M-a*g*M)*V,e[7]=(p*E*h-x*g*h+x*u*y-a*E*y-p*u*A+a*g*A)*V,e[8]=O*V,e[9]=(w*_*h-x*L*h-w*s*A+a*L*A+x*s*M-a*_*M)*V,e[10]=(p*L*h-w*d*h+w*s*y-a*L*y-p*s*M+a*d*M)*V,e[11]=(x*d*h-p*_*h-x*s*y+a*_*y+p*s*A-a*d*A)*V,e[12]=ft*V,e[13]=(x*L*u-w*_*u+w*s*E-a*L*E-x*s*T+a*_*T)*V,e[14]=(w*d*u-p*L*u-w*s*g+a*L*g+p*s*T-a*d*T)*V,e[15]=(p*_*u-x*d*u+x*s*g-a*_*g-p*s*E+a*d*E)*V,this}scale(e){const a=this.elements,s=e.x,u=e.y,h=e.z;return a[0]*=s,a[4]*=u,a[8]*=h,a[1]*=s,a[5]*=u,a[9]*=h,a[2]*=s,a[6]*=u,a[10]*=h,a[3]*=s,a[7]*=u,a[11]*=h,this}getMaxScaleOnAxis(){const e=this.elements,a=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],u=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(a,s,u))}makeTranslation(e,a,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,a,0,0,1,s,0,0,0,1),this}makeRotationX(e){const a=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,a,-s,0,0,s,a,0,0,0,0,1),this}makeRotationY(e){const a=Math.cos(e),s=Math.sin(e);return this.set(a,0,s,0,0,1,0,0,-s,0,a,0,0,0,0,1),this}makeRotationZ(e){const a=Math.cos(e),s=Math.sin(e);return this.set(a,-s,0,0,s,a,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,a){const s=Math.cos(a),u=Math.sin(a),h=1-s,p=e.x,d=e.y,g=e.z,y=h*p,x=h*d;return this.set(y*p+s,y*d-u*g,y*g+u*d,0,y*d+u*g,x*d+s,x*g-u*p,0,y*g-u*d,x*g+u*p,h*g*g+s,0,0,0,0,1),this}makeScale(e,a,s){return this.set(e,0,0,0,0,a,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,a,s,u,h,p){return this.set(1,s,h,0,e,1,p,0,a,u,1,0,0,0,0,1),this}compose(e,a,s){const u=this.elements,h=a._x,p=a._y,d=a._z,g=a._w,y=h+h,x=p+p,_=d+d,E=h*y,A=h*x,w=h*_,L=p*x,T=p*_,M=d*_,X=g*y,G=g*x,O=g*_,ft=s.x,Z=s.y,V=s.z;return u[0]=(1-(L+M))*ft,u[1]=(A+O)*ft,u[2]=(w-G)*ft,u[3]=0,u[4]=(A-O)*Z,u[5]=(1-(E+M))*Z,u[6]=(T+X)*Z,u[7]=0,u[8]=(w+G)*V,u[9]=(T-X)*V,u[10]=(1-(E+L))*V,u[11]=0,u[12]=e.x,u[13]=e.y,u[14]=e.z,u[15]=1,this}decompose(e,a,s){const u=this.elements;let h=Vo.set(u[0],u[1],u[2]).length();const p=Vo.set(u[4],u[5],u[6]).length(),d=Vo.set(u[8],u[9],u[10]).length();this.determinant()<0&&(h=-h),e.x=u[12],e.y=u[13],e.z=u[14],fa.copy(this);const y=1/h,x=1/p,_=1/d;return fa.elements[0]*=y,fa.elements[1]*=y,fa.elements[2]*=y,fa.elements[4]*=x,fa.elements[5]*=x,fa.elements[6]*=x,fa.elements[8]*=_,fa.elements[9]*=_,fa.elements[10]*=_,a.setFromRotationMatrix(fa),s.x=h,s.y=p,s.z=d,this}makePerspective(e,a,s,u,h,p,d=sr){const g=this.elements,y=2*h/(a-e),x=2*h/(s-u),_=(a+e)/(a-e),E=(s+u)/(s-u);let A,w;if(d===sr)A=-(p+h)/(p-h),w=-2*p*h/(p-h);else if(d===Lf)A=-p/(p-h),w=-p*h/(p-h);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return g[0]=y,g[4]=0,g[8]=_,g[12]=0,g[1]=0,g[5]=x,g[9]=E,g[13]=0,g[2]=0,g[6]=0,g[10]=A,g[14]=w,g[3]=0,g[7]=0,g[11]=-1,g[15]=0,this}makeOrthographic(e,a,s,u,h,p,d=sr){const g=this.elements,y=1/(a-e),x=1/(s-u),_=1/(p-h),E=(a+e)*y,A=(s+u)*x;let w,L;if(d===sr)w=(p+h)*_,L=-2*_;else if(d===Lf)w=h*_,L=-1*_;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return g[0]=2*y,g[4]=0,g[8]=0,g[12]=-E,g[1]=0,g[5]=2*x,g[9]=0,g[13]=-A,g[2]=0,g[6]=0,g[10]=L,g[14]=-w,g[3]=0,g[7]=0,g[11]=0,g[15]=1,this}equals(e){const a=this.elements,s=e.elements;for(let u=0;u<16;u++)if(a[u]!==s[u])return!1;return!0}fromArray(e,a=0){for(let s=0;s<16;s++)this.elements[s]=e[s+a];return this}toArray(e=[],a=0){const s=this.elements;return e[a]=s[0],e[a+1]=s[1],e[a+2]=s[2],e[a+3]=s[3],e[a+4]=s[4],e[a+5]=s[5],e[a+6]=s[6],e[a+7]=s[7],e[a+8]=s[8],e[a+9]=s[9],e[a+10]=s[10],e[a+11]=s[11],e[a+12]=s[12],e[a+13]=s[13],e[a+14]=s[14],e[a+15]=s[15],e}}const Vo=new lt,fa=new hn,nT=new lt(0,0,0),iT=new lt(1,1,1),Xr=new lt,lf=new lt,Bi=new lt,ty=new hn,ey=new wu;class za{constructor(e=0,a=0,s=0,u=za.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=a,this._z=s,this._order=u}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,a,s,u=this._order){return this._x=e,this._y=a,this._z=s,this._order=u,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,a=this._order,s=!0){const u=e.elements,h=u[0],p=u[4],d=u[8],g=u[1],y=u[5],x=u[9],_=u[2],E=u[6],A=u[10];switch(a){case"XYZ":this._y=Math.asin(oi(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-x,A),this._z=Math.atan2(-p,h)):(this._x=Math.atan2(E,y),this._z=0);break;case"YXZ":this._x=Math.asin(-oi(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(d,A),this._z=Math.atan2(g,y)):(this._y=Math.atan2(-_,h),this._z=0);break;case"ZXY":this._x=Math.asin(oi(E,-1,1)),Math.abs(E)<.9999999?(this._y=Math.atan2(-_,A),this._z=Math.atan2(-p,y)):(this._y=0,this._z=Math.atan2(g,h));break;case"ZYX":this._y=Math.asin(-oi(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(E,A),this._z=Math.atan2(g,h)):(this._x=0,this._z=Math.atan2(-p,y));break;case"YZX":this._z=Math.asin(oi(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(-x,y),this._y=Math.atan2(-_,h)):(this._x=0,this._y=Math.atan2(d,A));break;case"XZY":this._z=Math.asin(-oi(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(E,y),this._y=Math.atan2(d,h)):(this._x=Math.atan2(-x,A),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+a)}return this._order=a,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,a,s){return ty.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ty,a,s)}setFromVector3(e,a=this._order){return this.set(e.x,e.y,e.z,a)}reorder(e){return ey.setFromEuler(this),this.setFromQuaternion(ey,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],a=0){return e[a]=this._x,e[a+1]=this._y,e[a+2]=this._z,e[a+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}za.DEFAULT_ORDER="XYZ";class vS{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let aT=0;const ny=new lt,Xo=new wu,er=new hn,uf=new lt,gu=new lt,rT=new lt,sT=new wu,iy=new lt(1,0,0),ay=new lt(0,1,0),ry=new lt(0,0,1),sy={type:"added"},oT={type:"removed"},ko={type:"childadded",child:null},vp={type:"childremoved",child:null};class ui extends fl{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:aT++}),this.uuid=hl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ui.DEFAULT_UP.clone();const e=new lt,a=new za,s=new wu,u=new lt(1,1,1);function h(){s.setFromEuler(a,!1)}function p(){a.setFromQuaternion(s,void 0,!1)}a._onChange(h),s._onChange(p),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:a},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:u},modelViewMatrix:{value:new hn},normalMatrix:{value:new Ue}}),this.matrix=new hn,this.matrixWorld=new hn,this.matrixAutoUpdate=ui.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ui.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new vS,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,a){this.quaternion.setFromAxisAngle(e,a)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,a){return Xo.setFromAxisAngle(e,a),this.quaternion.multiply(Xo),this}rotateOnWorldAxis(e,a){return Xo.setFromAxisAngle(e,a),this.quaternion.premultiply(Xo),this}rotateX(e){return this.rotateOnAxis(iy,e)}rotateY(e){return this.rotateOnAxis(ay,e)}rotateZ(e){return this.rotateOnAxis(ry,e)}translateOnAxis(e,a){return ny.copy(e).applyQuaternion(this.quaternion),this.position.add(ny.multiplyScalar(a)),this}translateX(e){return this.translateOnAxis(iy,e)}translateY(e){return this.translateOnAxis(ay,e)}translateZ(e){return this.translateOnAxis(ry,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(er.copy(this.matrixWorld).invert())}lookAt(e,a,s){e.isVector3?uf.copy(e):uf.set(e,a,s);const u=this.parent;this.updateWorldMatrix(!0,!1),gu.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?er.lookAt(gu,uf,this.up):er.lookAt(uf,gu,this.up),this.quaternion.setFromRotationMatrix(er),u&&(er.extractRotation(u.matrixWorld),Xo.setFromRotationMatrix(er),this.quaternion.premultiply(Xo.invert()))}add(e){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.add(arguments[a]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(sy),ko.child=e,this.dispatchEvent(ko),ko.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const a=this.children.indexOf(e);return a!==-1&&(e.parent=null,this.children.splice(a,1),e.dispatchEvent(oT),vp.child=e,this.dispatchEvent(vp),vp.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),er.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),er.multiply(e.parent.matrixWorld)),e.applyMatrix4(er),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(sy),ko.child=e,this.dispatchEvent(ko),ko.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,a){if(this[e]===a)return this;for(let s=0,u=this.children.length;s<u;s++){const p=this.children[s].getObjectByProperty(e,a);if(p!==void 0)return p}}getObjectsByProperty(e,a,s=[]){this[e]===a&&s.push(this);const u=this.children;for(let h=0,p=u.length;h<p;h++)u[h].getObjectsByProperty(e,a,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gu,e,rT),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gu,sT,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const a=this.matrixWorld.elements;return e.set(a[8],a[9],a[10]).normalize()}raycast(){}traverse(e){e(this);const a=this.children;for(let s=0,u=a.length;s<u;s++)a[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const a=this.children;for(let s=0,u=a.length;s<u;s++)a[s].traverseVisible(e)}traverseAncestors(e){const a=this.parent;a!==null&&(e(a),a.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const a=this.children;for(let s=0,u=a.length;s<u;s++)a[s].updateMatrixWorld(e)}updateWorldMatrix(e,a){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),a===!0){const u=this.children;for(let h=0,p=u.length;h<p;h++)u[h].updateWorldMatrix(!1,!0)}}toJSON(e){const a=e===void 0||typeof e=="string",s={};a&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const u={};u.uuid=this.uuid,u.type=this.type,this.name!==""&&(u.name=this.name),this.castShadow===!0&&(u.castShadow=!0),this.receiveShadow===!0&&(u.receiveShadow=!0),this.visible===!1&&(u.visible=!1),this.frustumCulled===!1&&(u.frustumCulled=!1),this.renderOrder!==0&&(u.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(u.userData=this.userData),u.layers=this.layers.mask,u.matrix=this.matrix.toArray(),u.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(u.matrixAutoUpdate=!1),this.isInstancedMesh&&(u.type="InstancedMesh",u.count=this.count,u.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(u.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(u.type="BatchedMesh",u.perObjectFrustumCulled=this.perObjectFrustumCulled,u.sortObjects=this.sortObjects,u.drawRanges=this._drawRanges,u.reservedRanges=this._reservedRanges,u.visibility=this._visibility,u.active=this._active,u.bounds=this._bounds.map(d=>({boxInitialized:d.boxInitialized,boxMin:d.box.min.toArray(),boxMax:d.box.max.toArray(),sphereInitialized:d.sphereInitialized,sphereRadius:d.sphere.radius,sphereCenter:d.sphere.center.toArray()})),u.maxInstanceCount=this._maxInstanceCount,u.maxVertexCount=this._maxVertexCount,u.maxIndexCount=this._maxIndexCount,u.geometryInitialized=this._geometryInitialized,u.geometryCount=this._geometryCount,u.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(u.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(u.boundingSphere={center:u.boundingSphere.center.toArray(),radius:u.boundingSphere.radius}),this.boundingBox!==null&&(u.boundingBox={min:u.boundingBox.min.toArray(),max:u.boundingBox.max.toArray()}));function h(d,g){return d[g.uuid]===void 0&&(d[g.uuid]=g.toJSON(e)),g.uuid}if(this.isScene)this.background&&(this.background.isColor?u.background=this.background.toJSON():this.background.isTexture&&(u.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(u.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){u.geometry=h(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const g=d.shapes;if(Array.isArray(g))for(let y=0,x=g.length;y<x;y++){const _=g[y];h(e.shapes,_)}else h(e.shapes,g)}}if(this.isSkinnedMesh&&(u.bindMode=this.bindMode,u.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(h(e.skeletons,this.skeleton),u.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let g=0,y=this.material.length;g<y;g++)d.push(h(e.materials,this.material[g]));u.material=d}else u.material=h(e.materials,this.material);if(this.children.length>0){u.children=[];for(let d=0;d<this.children.length;d++)u.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){u.animations=[];for(let d=0;d<this.animations.length;d++){const g=this.animations[d];u.animations.push(h(e.animations,g))}}if(a){const d=p(e.geometries),g=p(e.materials),y=p(e.textures),x=p(e.images),_=p(e.shapes),E=p(e.skeletons),A=p(e.animations),w=p(e.nodes);d.length>0&&(s.geometries=d),g.length>0&&(s.materials=g),y.length>0&&(s.textures=y),x.length>0&&(s.images=x),_.length>0&&(s.shapes=_),E.length>0&&(s.skeletons=E),A.length>0&&(s.animations=A),w.length>0&&(s.nodes=w)}return s.object=u,s;function p(d){const g=[];for(const y in d){const x=d[y];delete x.metadata,g.push(x)}return g}}clone(e){return new this.constructor().copy(this,e)}copy(e,a=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),a===!0)for(let s=0;s<e.children.length;s++){const u=e.children[s];this.add(u.clone())}return this}}ui.DEFAULT_UP=new lt(0,1,0);ui.DEFAULT_MATRIX_AUTO_UPDATE=!0;ui.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ha=new lt,nr=new lt,_p=new lt,ir=new lt,Yo=new lt,qo=new lt,oy=new lt,yp=new lt,Sp=new lt,xp=new lt,Mp=new ln,Ep=new ln,Tp=new ln;class pa{constructor(e=new lt,a=new lt,s=new lt){this.a=e,this.b=a,this.c=s}static getNormal(e,a,s,u){u.subVectors(s,a),ha.subVectors(e,a),u.cross(ha);const h=u.lengthSq();return h>0?u.multiplyScalar(1/Math.sqrt(h)):u.set(0,0,0)}static getBarycoord(e,a,s,u,h){ha.subVectors(u,a),nr.subVectors(s,a),_p.subVectors(e,a);const p=ha.dot(ha),d=ha.dot(nr),g=ha.dot(_p),y=nr.dot(nr),x=nr.dot(_p),_=p*y-d*d;if(_===0)return h.set(0,0,0),null;const E=1/_,A=(y*g-d*x)*E,w=(p*x-d*g)*E;return h.set(1-A-w,w,A)}static containsPoint(e,a,s,u){return this.getBarycoord(e,a,s,u,ir)===null?!1:ir.x>=0&&ir.y>=0&&ir.x+ir.y<=1}static getInterpolation(e,a,s,u,h,p,d,g){return this.getBarycoord(e,a,s,u,ir)===null?(g.x=0,g.y=0,"z"in g&&(g.z=0),"w"in g&&(g.w=0),null):(g.setScalar(0),g.addScaledVector(h,ir.x),g.addScaledVector(p,ir.y),g.addScaledVector(d,ir.z),g)}static getInterpolatedAttribute(e,a,s,u,h,p){return Mp.setScalar(0),Ep.setScalar(0),Tp.setScalar(0),Mp.fromBufferAttribute(e,a),Ep.fromBufferAttribute(e,s),Tp.fromBufferAttribute(e,u),p.setScalar(0),p.addScaledVector(Mp,h.x),p.addScaledVector(Ep,h.y),p.addScaledVector(Tp,h.z),p}static isFrontFacing(e,a,s,u){return ha.subVectors(s,a),nr.subVectors(e,a),ha.cross(nr).dot(u)<0}set(e,a,s){return this.a.copy(e),this.b.copy(a),this.c.copy(s),this}setFromPointsAndIndices(e,a,s,u){return this.a.copy(e[a]),this.b.copy(e[s]),this.c.copy(e[u]),this}setFromAttributeAndIndices(e,a,s,u){return this.a.fromBufferAttribute(e,a),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,u),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ha.subVectors(this.c,this.b),nr.subVectors(this.a,this.b),ha.cross(nr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return pa.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,a){return pa.getBarycoord(e,this.a,this.b,this.c,a)}getInterpolation(e,a,s,u,h){return pa.getInterpolation(e,this.a,this.b,this.c,a,s,u,h)}containsPoint(e){return pa.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return pa.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,a){const s=this.a,u=this.b,h=this.c;let p,d;Yo.subVectors(u,s),qo.subVectors(h,s),yp.subVectors(e,s);const g=Yo.dot(yp),y=qo.dot(yp);if(g<=0&&y<=0)return a.copy(s);Sp.subVectors(e,u);const x=Yo.dot(Sp),_=qo.dot(Sp);if(x>=0&&_<=x)return a.copy(u);const E=g*_-x*y;if(E<=0&&g>=0&&x<=0)return p=g/(g-x),a.copy(s).addScaledVector(Yo,p);xp.subVectors(e,h);const A=Yo.dot(xp),w=qo.dot(xp);if(w>=0&&A<=w)return a.copy(h);const L=A*y-g*w;if(L<=0&&y>=0&&w<=0)return d=y/(y-w),a.copy(s).addScaledVector(qo,d);const T=x*w-A*_;if(T<=0&&_-x>=0&&A-w>=0)return oy.subVectors(h,u),d=(_-x)/(_-x+(A-w)),a.copy(u).addScaledVector(oy,d);const M=1/(T+L+E);return p=L*M,d=E*M,a.copy(s).addScaledVector(Yo,p).addScaledVector(qo,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const _S={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},kr={h:0,s:0,l:0},cf={h:0,s:0,l:0};function Ap(o,e,a){return a<0&&(a+=1),a>1&&(a-=1),a<1/6?o+(e-o)*6*a:a<1/2?e:a<2/3?o+(e-o)*6*(2/3-a):o}class Ne{constructor(e,a,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,a,s)}set(e,a,s){if(a===void 0&&s===void 0){const u=e;u&&u.isColor?this.copy(u):typeof u=="number"?this.setHex(u):typeof u=="string"&&this.setStyle(u)}else this.setRGB(e,a,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,a=Hi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,We.toWorkingColorSpace(this,a),this}setRGB(e,a,s,u=We.workingColorSpace){return this.r=e,this.g=a,this.b=s,We.toWorkingColorSpace(this,u),this}setHSL(e,a,s,u=We.workingColorSpace){if(e=Im(e,1),a=oi(a,0,1),s=oi(s,0,1),a===0)this.r=this.g=this.b=s;else{const h=s<=.5?s*(1+a):s+a-s*a,p=2*s-h;this.r=Ap(p,h,e+1/3),this.g=Ap(p,h,e),this.b=Ap(p,h,e-1/3)}return We.toWorkingColorSpace(this,u),this}setStyle(e,a=Hi){function s(h){h!==void 0&&parseFloat(h)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let u;if(u=/^(\w+)\(([^\)]*)\)/.exec(e)){let h;const p=u[1],d=u[2];switch(p){case"rgb":case"rgba":if(h=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(h[4]),this.setRGB(Math.min(255,parseInt(h[1],10))/255,Math.min(255,parseInt(h[2],10))/255,Math.min(255,parseInt(h[3],10))/255,a);if(h=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(h[4]),this.setRGB(Math.min(100,parseInt(h[1],10))/100,Math.min(100,parseInt(h[2],10))/100,Math.min(100,parseInt(h[3],10))/100,a);break;case"hsl":case"hsla":if(h=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(h[4]),this.setHSL(parseFloat(h[1])/360,parseFloat(h[2])/100,parseFloat(h[3])/100,a);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(u=/^\#([A-Fa-f\d]+)$/.exec(e)){const h=u[1],p=h.length;if(p===3)return this.setRGB(parseInt(h.charAt(0),16)/15,parseInt(h.charAt(1),16)/15,parseInt(h.charAt(2),16)/15,a);if(p===6)return this.setHex(parseInt(h,16),a);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,a);return this}setColorName(e,a=Hi){const s=_S[e.toLowerCase()];return s!==void 0?this.setHex(s,a):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=or(e.r),this.g=or(e.g),this.b=or(e.b),this}copyLinearToSRGB(e){return this.r=il(e.r),this.g=il(e.g),this.b=il(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Hi){return We.fromWorkingColorSpace(si.copy(this),e),Math.round(oi(si.r*255,0,255))*65536+Math.round(oi(si.g*255,0,255))*256+Math.round(oi(si.b*255,0,255))}getHexString(e=Hi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,a=We.workingColorSpace){We.fromWorkingColorSpace(si.copy(this),a);const s=si.r,u=si.g,h=si.b,p=Math.max(s,u,h),d=Math.min(s,u,h);let g,y;const x=(d+p)/2;if(d===p)g=0,y=0;else{const _=p-d;switch(y=x<=.5?_/(p+d):_/(2-p-d),p){case s:g=(u-h)/_+(u<h?6:0);break;case u:g=(h-s)/_+2;break;case h:g=(s-u)/_+4;break}g/=6}return e.h=g,e.s=y,e.l=x,e}getRGB(e,a=We.workingColorSpace){return We.fromWorkingColorSpace(si.copy(this),a),e.r=si.r,e.g=si.g,e.b=si.b,e}getStyle(e=Hi){We.fromWorkingColorSpace(si.copy(this),e);const a=si.r,s=si.g,u=si.b;return e!==Hi?`color(${e} ${a.toFixed(3)} ${s.toFixed(3)} ${u.toFixed(3)})`:`rgb(${Math.round(a*255)},${Math.round(s*255)},${Math.round(u*255)})`}offsetHSL(e,a,s){return this.getHSL(kr),this.setHSL(kr.h+e,kr.s+a,kr.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,a){return this.r=e.r+a.r,this.g=e.g+a.g,this.b=e.b+a.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,a){return this.r+=(e.r-this.r)*a,this.g+=(e.g-this.g)*a,this.b+=(e.b-this.b)*a,this}lerpColors(e,a,s){return this.r=e.r+(a.r-e.r)*s,this.g=e.g+(a.g-e.g)*s,this.b=e.b+(a.b-e.b)*s,this}lerpHSL(e,a){this.getHSL(kr),e.getHSL(cf);const s=Au(kr.h,cf.h,a),u=Au(kr.s,cf.s,a),h=Au(kr.l,cf.l,a);return this.setHSL(s,u,h),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const a=this.r,s=this.g,u=this.b,h=e.elements;return this.r=h[0]*a+h[3]*s+h[6]*u,this.g=h[1]*a+h[4]*s+h[7]*u,this.b=h[2]*a+h[5]*s+h[8]*u,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,a=0){return this.r=e[a],this.g=e[a+1],this.b=e[a+2],this}toArray(e=[],a=0){return e[a]=this.r,e[a+1]=this.g,e[a+2]=this.b,e}fromBufferAttribute(e,a){return this.r=e.getX(a),this.g=e.getY(a),this.b=e.getZ(a),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const si=new Ne;Ne.NAMES=_S;let lT=0;class pl extends fl{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:lT++}),this.uuid=hl(),this.name="",this.blending=el,this.side=Kr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Gp,this.blendDst=Vp,this.blendEquation=Bs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ne(0,0,0),this.blendAlpha=0,this.depthFunc=al,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=X_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=zo,this.stencilZFail=zo,this.stencilZPass=zo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const a in e){const s=e[a];if(s===void 0){console.warn(`THREE.Material: parameter '${a}' has value of undefined.`);continue}const u=this[a];if(u===void 0){console.warn(`THREE.Material: '${a}' is not a property of THREE.${this.type}.`);continue}u&&u.isColor?u.set(s):u&&u.isVector3&&s&&s.isVector3?u.copy(s):this[a]=s}}toJSON(e){const a=e===void 0||typeof e=="string";a&&(e={textures:{},images:{}});const s={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==el&&(s.blending=this.blending),this.side!==Kr&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Gp&&(s.blendSrc=this.blendSrc),this.blendDst!==Vp&&(s.blendDst=this.blendDst),this.blendEquation!==Bs&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==al&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==X_&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==zo&&(s.stencilFail=this.stencilFail),this.stencilZFail!==zo&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==zo&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function u(h){const p=[];for(const d in h){const g=h[d];delete g.metadata,p.push(g)}return p}if(a){const h=u(e.textures),p=u(e.images);h.length>0&&(s.textures=h),p.length>0&&(s.images=p)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const a=e.clippingPlanes;let s=null;if(a!==null){const u=a.length;s=new Array(u);for(let h=0;h!==u;++h)s[h]=a[h].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class yS extends pl{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new za,this.combine=$y,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Nn=new lt,ff=new Ze;class Xi{constructor(e,a,s=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=a,this.count=e!==void 0?e.length/a:0,this.normalized=s,this.usage=k_,this.updateRanges=[],this.gpuType=Oa,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,a){this.updateRanges.push({start:e,count:a})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,a,s){e*=this.itemSize,s*=a.itemSize;for(let u=0,h=this.itemSize;u<h;u++)this.array[e+u]=a.array[s+u];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let a=0,s=this.count;a<s;a++)ff.fromBufferAttribute(this,a),ff.applyMatrix3(e),this.setXY(a,ff.x,ff.y);else if(this.itemSize===3)for(let a=0,s=this.count;a<s;a++)Nn.fromBufferAttribute(this,a),Nn.applyMatrix3(e),this.setXYZ(a,Nn.x,Nn.y,Nn.z);return this}applyMatrix4(e){for(let a=0,s=this.count;a<s;a++)Nn.fromBufferAttribute(this,a),Nn.applyMatrix4(e),this.setXYZ(a,Nn.x,Nn.y,Nn.z);return this}applyNormalMatrix(e){for(let a=0,s=this.count;a<s;a++)Nn.fromBufferAttribute(this,a),Nn.applyNormalMatrix(e),this.setXYZ(a,Nn.x,Nn.y,Nn.z);return this}transformDirection(e){for(let a=0,s=this.count;a<s;a++)Nn.fromBufferAttribute(this,a),Nn.transformDirection(e),this.setXYZ(a,Nn.x,Nn.y,Nn.z);return this}set(e,a=0){return this.array.set(e,a),this}getComponent(e,a){let s=this.array[e*this.itemSize+a];return this.normalized&&(s=Jo(s,this.array)),s}setComponent(e,a,s){return this.normalized&&(s=mi(s,this.array)),this.array[e*this.itemSize+a]=s,this}getX(e){let a=this.array[e*this.itemSize];return this.normalized&&(a=Jo(a,this.array)),a}setX(e,a){return this.normalized&&(a=mi(a,this.array)),this.array[e*this.itemSize]=a,this}getY(e){let a=this.array[e*this.itemSize+1];return this.normalized&&(a=Jo(a,this.array)),a}setY(e,a){return this.normalized&&(a=mi(a,this.array)),this.array[e*this.itemSize+1]=a,this}getZ(e){let a=this.array[e*this.itemSize+2];return this.normalized&&(a=Jo(a,this.array)),a}setZ(e,a){return this.normalized&&(a=mi(a,this.array)),this.array[e*this.itemSize+2]=a,this}getW(e){let a=this.array[e*this.itemSize+3];return this.normalized&&(a=Jo(a,this.array)),a}setW(e,a){return this.normalized&&(a=mi(a,this.array)),this.array[e*this.itemSize+3]=a,this}setXY(e,a,s){return e*=this.itemSize,this.normalized&&(a=mi(a,this.array),s=mi(s,this.array)),this.array[e+0]=a,this.array[e+1]=s,this}setXYZ(e,a,s,u){return e*=this.itemSize,this.normalized&&(a=mi(a,this.array),s=mi(s,this.array),u=mi(u,this.array)),this.array[e+0]=a,this.array[e+1]=s,this.array[e+2]=u,this}setXYZW(e,a,s,u,h){return e*=this.itemSize,this.normalized&&(a=mi(a,this.array),s=mi(s,this.array),u=mi(u,this.array),h=mi(h,this.array)),this.array[e+0]=a,this.array[e+1]=s,this.array[e+2]=u,this.array[e+3]=h,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==k_&&(e.usage=this.usage),e}}class SS extends Xi{constructor(e,a,s){super(new Uint16Array(e),a,s)}}class xS extends Xi{constructor(e,a,s){super(new Uint32Array(e),a,s)}}class Pa extends Xi{constructor(e,a,s){super(new Float32Array(e),a,s)}}let uT=0;const Ji=new hn,bp=new ui,Wo=new lt,Fi=new ks,vu=new ks,qn=new lt;class Ia extends fl{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:uT++}),this.uuid=hl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(dS(e)?xS:SS)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,a){return this.attributes[e]=a,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,a,s=0){this.groups.push({start:e,count:a,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,a){this.drawRange.start=e,this.drawRange.count=a}applyMatrix4(e){const a=this.attributes.position;a!==void 0&&(a.applyMatrix4(e),a.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const h=new Ue().getNormalMatrix(e);s.applyNormalMatrix(h),s.needsUpdate=!0}const u=this.attributes.tangent;return u!==void 0&&(u.transformDirection(e),u.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ji.makeRotationFromQuaternion(e),this.applyMatrix4(Ji),this}rotateX(e){return Ji.makeRotationX(e),this.applyMatrix4(Ji),this}rotateY(e){return Ji.makeRotationY(e),this.applyMatrix4(Ji),this}rotateZ(e){return Ji.makeRotationZ(e),this.applyMatrix4(Ji),this}translate(e,a,s){return Ji.makeTranslation(e,a,s),this.applyMatrix4(Ji),this}scale(e,a,s){return Ji.makeScale(e,a,s),this.applyMatrix4(Ji),this}lookAt(e){return bp.lookAt(e),bp.updateMatrix(),this.applyMatrix4(bp.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Wo).negate(),this.translate(Wo.x,Wo.y,Wo.z),this}setFromPoints(e){const a=this.getAttribute("position");if(a===void 0){const s=[];for(let u=0,h=e.length;u<h;u++){const p=e[u];s.push(p.x,p.y,p.z||0)}this.setAttribute("position",new Pa(s,3))}else{for(let s=0,u=a.count;s<u;s++){const h=e[s];a.setXYZ(s,h.x,h.y,h.z||0)}e.length>a.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),a.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ks);const e=this.attributes.position,a=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new lt(-1/0,-1/0,-1/0),new lt(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),a)for(let s=0,u=a.length;s<u;s++){const h=a[s];Fi.setFromBufferAttribute(h),this.morphTargetsRelative?(qn.addVectors(this.boundingBox.min,Fi.min),this.boundingBox.expandByPoint(qn),qn.addVectors(this.boundingBox.max,Fi.max),this.boundingBox.expandByPoint(qn)):(this.boundingBox.expandByPoint(Fi.min),this.boundingBox.expandByPoint(Fi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new dl);const e=this.attributes.position,a=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new lt,1/0);return}if(e){const s=this.boundingSphere.center;if(Fi.setFromBufferAttribute(e),a)for(let h=0,p=a.length;h<p;h++){const d=a[h];vu.setFromBufferAttribute(d),this.morphTargetsRelative?(qn.addVectors(Fi.min,vu.min),Fi.expandByPoint(qn),qn.addVectors(Fi.max,vu.max),Fi.expandByPoint(qn)):(Fi.expandByPoint(vu.min),Fi.expandByPoint(vu.max))}Fi.getCenter(s);let u=0;for(let h=0,p=e.count;h<p;h++)qn.fromBufferAttribute(e,h),u=Math.max(u,s.distanceToSquared(qn));if(a)for(let h=0,p=a.length;h<p;h++){const d=a[h],g=this.morphTargetsRelative;for(let y=0,x=d.count;y<x;y++)qn.fromBufferAttribute(d,y),g&&(Wo.fromBufferAttribute(e,y),qn.add(Wo)),u=Math.max(u,s.distanceToSquared(qn))}this.boundingSphere.radius=Math.sqrt(u),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,a=this.attributes;if(e===null||a.position===void 0||a.normal===void 0||a.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=a.position,u=a.normal,h=a.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Xi(new Float32Array(4*s.count),4));const p=this.getAttribute("tangent"),d=[],g=[];for(let q=0;q<s.count;q++)d[q]=new lt,g[q]=new lt;const y=new lt,x=new lt,_=new lt,E=new Ze,A=new Ze,w=new Ze,L=new lt,T=new lt;function M(q,P,N){y.fromBufferAttribute(s,q),x.fromBufferAttribute(s,P),_.fromBufferAttribute(s,N),E.fromBufferAttribute(h,q),A.fromBufferAttribute(h,P),w.fromBufferAttribute(h,N),x.sub(y),_.sub(y),A.sub(E),w.sub(E);const k=1/(A.x*w.y-w.x*A.y);isFinite(k)&&(L.copy(x).multiplyScalar(w.y).addScaledVector(_,-A.y).multiplyScalar(k),T.copy(_).multiplyScalar(A.x).addScaledVector(x,-w.x).multiplyScalar(k),d[q].add(L),d[P].add(L),d[N].add(L),g[q].add(T),g[P].add(T),g[N].add(T))}let X=this.groups;X.length===0&&(X=[{start:0,count:e.count}]);for(let q=0,P=X.length;q<P;++q){const N=X[q],k=N.start,yt=N.count;for(let dt=k,Rt=k+yt;dt<Rt;dt+=3)M(e.getX(dt+0),e.getX(dt+1),e.getX(dt+2))}const G=new lt,O=new lt,ft=new lt,Z=new lt;function V(q){ft.fromBufferAttribute(u,q),Z.copy(ft);const P=d[q];G.copy(P),G.sub(ft.multiplyScalar(ft.dot(P))).normalize(),O.crossVectors(Z,P);const k=O.dot(g[q])<0?-1:1;p.setXYZW(q,G.x,G.y,G.z,k)}for(let q=0,P=X.length;q<P;++q){const N=X[q],k=N.start,yt=N.count;for(let dt=k,Rt=k+yt;dt<Rt;dt+=3)V(e.getX(dt+0)),V(e.getX(dt+1)),V(e.getX(dt+2))}}computeVertexNormals(){const e=this.index,a=this.getAttribute("position");if(a!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Xi(new Float32Array(a.count*3),3),this.setAttribute("normal",s);else for(let E=0,A=s.count;E<A;E++)s.setXYZ(E,0,0,0);const u=new lt,h=new lt,p=new lt,d=new lt,g=new lt,y=new lt,x=new lt,_=new lt;if(e)for(let E=0,A=e.count;E<A;E+=3){const w=e.getX(E+0),L=e.getX(E+1),T=e.getX(E+2);u.fromBufferAttribute(a,w),h.fromBufferAttribute(a,L),p.fromBufferAttribute(a,T),x.subVectors(p,h),_.subVectors(u,h),x.cross(_),d.fromBufferAttribute(s,w),g.fromBufferAttribute(s,L),y.fromBufferAttribute(s,T),d.add(x),g.add(x),y.add(x),s.setXYZ(w,d.x,d.y,d.z),s.setXYZ(L,g.x,g.y,g.z),s.setXYZ(T,y.x,y.y,y.z)}else for(let E=0,A=a.count;E<A;E+=3)u.fromBufferAttribute(a,E+0),h.fromBufferAttribute(a,E+1),p.fromBufferAttribute(a,E+2),x.subVectors(p,h),_.subVectors(u,h),x.cross(_),s.setXYZ(E+0,x.x,x.y,x.z),s.setXYZ(E+1,x.x,x.y,x.z),s.setXYZ(E+2,x.x,x.y,x.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let a=0,s=e.count;a<s;a++)qn.fromBufferAttribute(e,a),qn.normalize(),e.setXYZ(a,qn.x,qn.y,qn.z)}toNonIndexed(){function e(d,g){const y=d.array,x=d.itemSize,_=d.normalized,E=new y.constructor(g.length*x);let A=0,w=0;for(let L=0,T=g.length;L<T;L++){d.isInterleavedBufferAttribute?A=g[L]*d.data.stride+d.offset:A=g[L]*x;for(let M=0;M<x;M++)E[w++]=y[A++]}return new Xi(E,x,_)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const a=new Ia,s=this.index.array,u=this.attributes;for(const d in u){const g=u[d],y=e(g,s);a.setAttribute(d,y)}const h=this.morphAttributes;for(const d in h){const g=[],y=h[d];for(let x=0,_=y.length;x<_;x++){const E=y[x],A=e(E,s);g.push(A)}a.morphAttributes[d]=g}a.morphTargetsRelative=this.morphTargetsRelative;const p=this.groups;for(let d=0,g=p.length;d<g;d++){const y=p[d];a.addGroup(y.start,y.count,y.materialIndex)}return a}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const g=this.parameters;for(const y in g)g[y]!==void 0&&(e[y]=g[y]);return e}e.data={attributes:{}};const a=this.index;a!==null&&(e.data.index={type:a.array.constructor.name,array:Array.prototype.slice.call(a.array)});const s=this.attributes;for(const g in s){const y=s[g];e.data.attributes[g]=y.toJSON(e.data)}const u={};let h=!1;for(const g in this.morphAttributes){const y=this.morphAttributes[g],x=[];for(let _=0,E=y.length;_<E;_++){const A=y[_];x.push(A.toJSON(e.data))}x.length>0&&(u[g]=x,h=!0)}h&&(e.data.morphAttributes=u,e.data.morphTargetsRelative=this.morphTargetsRelative);const p=this.groups;p.length>0&&(e.data.groups=JSON.parse(JSON.stringify(p)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const a={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone(a));const u=e.attributes;for(const y in u){const x=u[y];this.setAttribute(y,x.clone(a))}const h=e.morphAttributes;for(const y in h){const x=[],_=h[y];for(let E=0,A=_.length;E<A;E++)x.push(_[E].clone(a));this.morphAttributes[y]=x}this.morphTargetsRelative=e.morphTargetsRelative;const p=e.groups;for(let y=0,x=p.length;y<x;y++){const _=p[y];this.addGroup(_.start,_.count,_.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const g=e.boundingSphere;return g!==null&&(this.boundingSphere=g.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ly=new hn,Us=new gS,hf=new dl,uy=new lt,df=new lt,pf=new lt,mf=new lt,Rp=new lt,gf=new lt,cy=new lt,vf=new lt;class ga extends ui{constructor(e=new Ia,a=new yS){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=a,this.updateMorphTargets()}copy(e,a){return super.copy(e,a),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const a=this.geometry.morphAttributes,s=Object.keys(a);if(s.length>0){const u=a[s[0]];if(u!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let h=0,p=u.length;h<p;h++){const d=u[h].name||String(h);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=h}}}}getVertexPosition(e,a){const s=this.geometry,u=s.attributes.position,h=s.morphAttributes.position,p=s.morphTargetsRelative;a.fromBufferAttribute(u,e);const d=this.morphTargetInfluences;if(h&&d){gf.set(0,0,0);for(let g=0,y=h.length;g<y;g++){const x=d[g],_=h[g];x!==0&&(Rp.fromBufferAttribute(_,e),p?gf.addScaledVector(Rp,x):gf.addScaledVector(Rp.sub(a),x))}a.add(gf)}return a}raycast(e,a){const s=this.geometry,u=this.material,h=this.matrixWorld;u!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),hf.copy(s.boundingSphere),hf.applyMatrix4(h),Us.copy(e.ray).recast(e.near),!(hf.containsPoint(Us.origin)===!1&&(Us.intersectSphere(hf,uy)===null||Us.origin.distanceToSquared(uy)>(e.far-e.near)**2))&&(ly.copy(h).invert(),Us.copy(e.ray).applyMatrix4(ly),!(s.boundingBox!==null&&Us.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,a,Us)))}_computeIntersections(e,a,s){let u;const h=this.geometry,p=this.material,d=h.index,g=h.attributes.position,y=h.attributes.uv,x=h.attributes.uv1,_=h.attributes.normal,E=h.groups,A=h.drawRange;if(d!==null)if(Array.isArray(p))for(let w=0,L=E.length;w<L;w++){const T=E[w],M=p[T.materialIndex],X=Math.max(T.start,A.start),G=Math.min(d.count,Math.min(T.start+T.count,A.start+A.count));for(let O=X,ft=G;O<ft;O+=3){const Z=d.getX(O),V=d.getX(O+1),q=d.getX(O+2);u=_f(this,M,e,s,y,x,_,Z,V,q),u&&(u.faceIndex=Math.floor(O/3),u.face.materialIndex=T.materialIndex,a.push(u))}}else{const w=Math.max(0,A.start),L=Math.min(d.count,A.start+A.count);for(let T=w,M=L;T<M;T+=3){const X=d.getX(T),G=d.getX(T+1),O=d.getX(T+2);u=_f(this,p,e,s,y,x,_,X,G,O),u&&(u.faceIndex=Math.floor(T/3),a.push(u))}}else if(g!==void 0)if(Array.isArray(p))for(let w=0,L=E.length;w<L;w++){const T=E[w],M=p[T.materialIndex],X=Math.max(T.start,A.start),G=Math.min(g.count,Math.min(T.start+T.count,A.start+A.count));for(let O=X,ft=G;O<ft;O+=3){const Z=O,V=O+1,q=O+2;u=_f(this,M,e,s,y,x,_,Z,V,q),u&&(u.faceIndex=Math.floor(O/3),u.face.materialIndex=T.materialIndex,a.push(u))}}else{const w=Math.max(0,A.start),L=Math.min(g.count,A.start+A.count);for(let T=w,M=L;T<M;T+=3){const X=T,G=T+1,O=T+2;u=_f(this,p,e,s,y,x,_,X,G,O),u&&(u.faceIndex=Math.floor(T/3),a.push(u))}}}}function cT(o,e,a,s,u,h,p,d){let g;if(e.side===bi?g=s.intersectTriangle(p,h,u,!0,d):g=s.intersectTriangle(u,h,p,e.side===Kr,d),g===null)return null;vf.copy(d),vf.applyMatrix4(o.matrixWorld);const y=a.ray.origin.distanceTo(vf);return y<a.near||y>a.far?null:{distance:y,point:vf.clone(),object:o}}function _f(o,e,a,s,u,h,p,d,g,y){o.getVertexPosition(d,df),o.getVertexPosition(g,pf),o.getVertexPosition(y,mf);const x=cT(o,e,a,s,df,pf,mf,cy);if(x){const _=new lt;pa.getBarycoord(cy,df,pf,mf,_),u&&(x.uv=pa.getInterpolatedAttribute(u,d,g,y,_,new Ze)),h&&(x.uv1=pa.getInterpolatedAttribute(h,d,g,y,_,new Ze)),p&&(x.normal=pa.getInterpolatedAttribute(p,d,g,y,_,new lt),x.normal.dot(s.direction)>0&&x.normal.multiplyScalar(-1));const E={a:d,b:g,c:y,normal:new lt,materialIndex:0};pa.getNormal(df,pf,mf,E.normal),x.face=E,x.barycoord=_}return x}class Du extends Ia{constructor(e=1,a=1,s=1,u=1,h=1,p=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:a,depth:s,widthSegments:u,heightSegments:h,depthSegments:p};const d=this;u=Math.floor(u),h=Math.floor(h),p=Math.floor(p);const g=[],y=[],x=[],_=[];let E=0,A=0;w("z","y","x",-1,-1,s,a,e,p,h,0),w("z","y","x",1,-1,s,a,-e,p,h,1),w("x","z","y",1,1,e,s,a,u,p,2),w("x","z","y",1,-1,e,s,-a,u,p,3),w("x","y","z",1,-1,e,a,s,u,h,4),w("x","y","z",-1,-1,e,a,-s,u,h,5),this.setIndex(g),this.setAttribute("position",new Pa(y,3)),this.setAttribute("normal",new Pa(x,3)),this.setAttribute("uv",new Pa(_,2));function w(L,T,M,X,G,O,ft,Z,V,q,P){const N=O/V,k=ft/q,yt=O/2,dt=ft/2,Rt=Z/2,gt=V+1,Q=q+1;let ht=0,at=0;const wt=new lt;for(let Nt=0;Nt<Q;Nt++){const Jt=Nt*k-dt;for(let pe=0;pe<gt;pe++){const be=pe*N-yt;wt[L]=be*X,wt[T]=Jt*G,wt[M]=Rt,y.push(wt.x,wt.y,wt.z),wt[L]=0,wt[T]=0,wt[M]=Z>0?1:-1,x.push(wt.x,wt.y,wt.z),_.push(pe/V),_.push(1-Nt/q),ht+=1}}for(let Nt=0;Nt<q;Nt++)for(let Jt=0;Jt<V;Jt++){const pe=E+Jt+gt*Nt,be=E+Jt+gt*(Nt+1),U=E+(Jt+1)+gt*(Nt+1),J=E+(Jt+1)+gt*Nt;g.push(pe,be,J),g.push(be,U,J),at+=6}d.addGroup(A,at,P),A+=at,E+=ht}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Du(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ul(o){const e={};for(const a in o){e[a]={};for(const s in o[a]){const u=o[a][s];u&&(u.isColor||u.isMatrix3||u.isMatrix4||u.isVector2||u.isVector3||u.isVector4||u.isTexture||u.isQuaternion)?u.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[a][s]=null):e[a][s]=u.clone():Array.isArray(u)?e[a][s]=u.slice():e[a][s]=u}}return e}function gi(o){const e={};for(let a=0;a<o.length;a++){const s=ul(o[a]);for(const u in s)e[u]=s[u]}return e}function fT(o){const e=[];for(let a=0;a<o.length;a++)e.push(o[a].clone());return e}function MS(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:We.workingColorSpace}const hT={clone:ul,merge:gi};var dT=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,pT=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Qr extends pl{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=dT,this.fragmentShader=pT,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ul(e.uniforms),this.uniformsGroups=fT(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const a=super.toJSON(e);a.glslVersion=this.glslVersion,a.uniforms={};for(const u in this.uniforms){const p=this.uniforms[u].value;p&&p.isTexture?a.uniforms[u]={type:"t",value:p.toJSON(e).uuid}:p&&p.isColor?a.uniforms[u]={type:"c",value:p.getHex()}:p&&p.isVector2?a.uniforms[u]={type:"v2",value:p.toArray()}:p&&p.isVector3?a.uniforms[u]={type:"v3",value:p.toArray()}:p&&p.isVector4?a.uniforms[u]={type:"v4",value:p.toArray()}:p&&p.isMatrix3?a.uniforms[u]={type:"m3",value:p.toArray()}:p&&p.isMatrix4?a.uniforms[u]={type:"m4",value:p.toArray()}:a.uniforms[u]={value:p}}Object.keys(this.defines).length>0&&(a.defines=this.defines),a.vertexShader=this.vertexShader,a.fragmentShader=this.fragmentShader,a.lights=this.lights,a.clipping=this.clipping;const s={};for(const u in this.extensions)this.extensions[u]===!0&&(s[u]=!0);return Object.keys(s).length>0&&(a.extensions=s),a}}class ES extends ui{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new hn,this.projectionMatrix=new hn,this.projectionMatrixInverse=new hn,this.coordinateSystem=sr}copy(e,a){return super.copy(e,a),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,a){super.updateWorldMatrix(e,a),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Yr=new lt,fy=new Ze,hy=new Ze;class Gi extends ES{constructor(e=50,a=1,s=.1,u=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=u,this.focus=10,this.aspect=a,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,a){return super.copy(e,a),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const a=.5*this.getFilmHeight()/e;this.fov=Ru*2*Math.atan(a),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Tu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ru*2*Math.atan(Math.tan(Tu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,a,s){Yr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),a.set(Yr.x,Yr.y).multiplyScalar(-e/Yr.z),Yr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(Yr.x,Yr.y).multiplyScalar(-e/Yr.z)}getViewSize(e,a){return this.getViewBounds(e,fy,hy),a.subVectors(hy,fy)}setViewOffset(e,a,s,u,h,p){this.aspect=e/a,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=a,this.view.offsetX=s,this.view.offsetY=u,this.view.width=h,this.view.height=p,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let a=e*Math.tan(Tu*.5*this.fov)/this.zoom,s=2*a,u=this.aspect*s,h=-.5*u;const p=this.view;if(this.view!==null&&this.view.enabled){const g=p.fullWidth,y=p.fullHeight;h+=p.offsetX*u/g,a-=p.offsetY*s/y,u*=p.width/g,s*=p.height/y}const d=this.filmOffset;d!==0&&(h+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(h,h+u,a,a-s,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const a=super.toJSON(e);return a.object.fov=this.fov,a.object.zoom=this.zoom,a.object.near=this.near,a.object.far=this.far,a.object.focus=this.focus,a.object.aspect=this.aspect,this.view!==null&&(a.object.view=Object.assign({},this.view)),a.object.filmGauge=this.filmGauge,a.object.filmOffset=this.filmOffset,a}}const jo=-90,Zo=1;class mT extends ui{constructor(e,a,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const u=new Gi(jo,Zo,e,a);u.layers=this.layers,this.add(u);const h=new Gi(jo,Zo,e,a);h.layers=this.layers,this.add(h);const p=new Gi(jo,Zo,e,a);p.layers=this.layers,this.add(p);const d=new Gi(jo,Zo,e,a);d.layers=this.layers,this.add(d);const g=new Gi(jo,Zo,e,a);g.layers=this.layers,this.add(g);const y=new Gi(jo,Zo,e,a);y.layers=this.layers,this.add(y)}updateCoordinateSystem(){const e=this.coordinateSystem,a=this.children.concat(),[s,u,h,p,d,g]=a;for(const y of a)this.remove(y);if(e===sr)s.up.set(0,1,0),s.lookAt(1,0,0),u.up.set(0,1,0),u.lookAt(-1,0,0),h.up.set(0,0,-1),h.lookAt(0,1,0),p.up.set(0,0,1),p.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),g.up.set(0,1,0),g.lookAt(0,0,-1);else if(e===Lf)s.up.set(0,-1,0),s.lookAt(-1,0,0),u.up.set(0,-1,0),u.lookAt(1,0,0),h.up.set(0,0,1),h.lookAt(0,1,0),p.up.set(0,0,-1),p.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),g.up.set(0,-1,0),g.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const y of a)this.add(y),y.updateMatrixWorld()}update(e,a){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:u}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[h,p,d,g,y,x]=this.children,_=e.getRenderTarget(),E=e.getActiveCubeFace(),A=e.getActiveMipmapLevel(),w=e.xr.enabled;e.xr.enabled=!1;const L=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,e.setRenderTarget(s,0,u),e.render(a,h),e.setRenderTarget(s,1,u),e.render(a,p),e.setRenderTarget(s,2,u),e.render(a,d),e.setRenderTarget(s,3,u),e.render(a,g),e.setRenderTarget(s,4,u),e.render(a,y),s.texture.generateMipmaps=L,e.setRenderTarget(s,5,u),e.render(a,x),e.setRenderTarget(_,E,A),e.xr.enabled=w,s.texture.needsPMREMUpdate=!0}}class TS extends li{constructor(e,a,s,u,h,p,d,g,y,x){e=e!==void 0?e:[],a=a!==void 0?a:rl,super(e,a,s,u,h,p,d,g,y,x),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class gT extends Xs{constructor(e=1,a={}){super(e,e,a),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},u=[s,s,s,s,s,s];this.texture=new TS(u,a.mapping,a.wrapS,a.wrapT,a.magFilter,a.minFilter,a.format,a.type,a.anisotropy,a.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=a.generateMipmaps!==void 0?a.generateMipmaps:!1,this.texture.minFilter=a.minFilter!==void 0?a.minFilter:La}fromEquirectangularTexture(e,a){this.texture.type=a.type,this.texture.colorSpace=a.colorSpace,this.texture.generateMipmaps=a.generateMipmaps,this.texture.minFilter=a.minFilter,this.texture.magFilter=a.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},u=new Du(5,5,5),h=new Qr({name:"CubemapFromEquirect",uniforms:ul(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:bi,blending:jr});h.uniforms.tEquirect.value=a;const p=new ga(u,h),d=a.minFilter;return a.minFilter===Gs&&(a.minFilter=La),new mT(1,10,this).update(e,p),a.minFilter=d,p.geometry.dispose(),p.material.dispose(),this}clear(e,a,s,u){const h=e.getRenderTarget();for(let p=0;p<6;p++)e.setRenderTarget(this,p),e.clear(a,s,u);e.setRenderTarget(h)}}const Cp=new lt,vT=new lt,_T=new Ue;class zs{constructor(e=new lt(1,0,0),a=0){this.isPlane=!0,this.normal=e,this.constant=a}set(e,a){return this.normal.copy(e),this.constant=a,this}setComponents(e,a,s,u){return this.normal.set(e,a,s),this.constant=u,this}setFromNormalAndCoplanarPoint(e,a){return this.normal.copy(e),this.constant=-a.dot(this.normal),this}setFromCoplanarPoints(e,a,s){const u=Cp.subVectors(s,a).cross(vT.subVectors(e,a)).normalize();return this.setFromNormalAndCoplanarPoint(u,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,a){return a.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,a){const s=e.delta(Cp),u=this.normal.dot(s);if(u===0)return this.distanceToPoint(e.start)===0?a.copy(e.start):null;const h=-(e.start.dot(this.normal)+this.constant)/u;return h<0||h>1?null:a.copy(e.start).addScaledVector(s,h)}intersectsLine(e){const a=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return a<0&&s>0||s<0&&a>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,a){const s=a||_T.getNormalMatrix(e),u=this.coplanarPoint(Cp).applyMatrix4(e),h=this.normal.applyMatrix3(s).normalize();return this.constant=-u.dot(h),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ns=new dl,yf=new lt;class Bm{constructor(e=new zs,a=new zs,s=new zs,u=new zs,h=new zs,p=new zs){this.planes=[e,a,s,u,h,p]}set(e,a,s,u,h,p){const d=this.planes;return d[0].copy(e),d[1].copy(a),d[2].copy(s),d[3].copy(u),d[4].copy(h),d[5].copy(p),this}copy(e){const a=this.planes;for(let s=0;s<6;s++)a[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,a=sr){const s=this.planes,u=e.elements,h=u[0],p=u[1],d=u[2],g=u[3],y=u[4],x=u[5],_=u[6],E=u[7],A=u[8],w=u[9],L=u[10],T=u[11],M=u[12],X=u[13],G=u[14],O=u[15];if(s[0].setComponents(g-h,E-y,T-A,O-M).normalize(),s[1].setComponents(g+h,E+y,T+A,O+M).normalize(),s[2].setComponents(g+p,E+x,T+w,O+X).normalize(),s[3].setComponents(g-p,E-x,T-w,O-X).normalize(),s[4].setComponents(g-d,E-_,T-L,O-G).normalize(),a===sr)s[5].setComponents(g+d,E+_,T+L,O+G).normalize();else if(a===Lf)s[5].setComponents(d,_,L,G).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+a);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ns.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const a=e.geometry;a.boundingSphere===null&&a.computeBoundingSphere(),Ns.copy(a.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ns)}intersectsSprite(e){return Ns.center.set(0,0,0),Ns.radius=.7071067811865476,Ns.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ns)}intersectsSphere(e){const a=this.planes,s=e.center,u=-e.radius;for(let h=0;h<6;h++)if(a[h].distanceToPoint(s)<u)return!1;return!0}intersectsBox(e){const a=this.planes;for(let s=0;s<6;s++){const u=a[s];if(yf.x=u.normal.x>0?e.max.x:e.min.x,yf.y=u.normal.y>0?e.max.y:e.min.y,yf.z=u.normal.z>0?e.max.z:e.min.z,u.distanceToPoint(yf)<0)return!1}return!0}containsPoint(e){const a=this.planes;for(let s=0;s<6;s++)if(a[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function AS(){let o=null,e=!1,a=null,s=null;function u(h,p){a(h,p),s=o.requestAnimationFrame(u)}return{start:function(){e!==!0&&a!==null&&(s=o.requestAnimationFrame(u),e=!0)},stop:function(){o.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(h){a=h},setContext:function(h){o=h}}}function yT(o){const e=new WeakMap;function a(d,g){const y=d.array,x=d.usage,_=y.byteLength,E=o.createBuffer();o.bindBuffer(g,E),o.bufferData(g,y,x),d.onUploadCallback();let A;if(y instanceof Float32Array)A=o.FLOAT;else if(y instanceof Uint16Array)d.isFloat16BufferAttribute?A=o.HALF_FLOAT:A=o.UNSIGNED_SHORT;else if(y instanceof Int16Array)A=o.SHORT;else if(y instanceof Uint32Array)A=o.UNSIGNED_INT;else if(y instanceof Int32Array)A=o.INT;else if(y instanceof Int8Array)A=o.BYTE;else if(y instanceof Uint8Array)A=o.UNSIGNED_BYTE;else if(y instanceof Uint8ClampedArray)A=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+y);return{buffer:E,type:A,bytesPerElement:y.BYTES_PER_ELEMENT,version:d.version,size:_}}function s(d,g,y){const x=g.array,_=g.updateRanges;if(o.bindBuffer(y,d),_.length===0)o.bufferSubData(y,0,x);else{_.sort((A,w)=>A.start-w.start);let E=0;for(let A=1;A<_.length;A++){const w=_[E],L=_[A];L.start<=w.start+w.count+1?w.count=Math.max(w.count,L.start+L.count-w.start):(++E,_[E]=L)}_.length=E+1;for(let A=0,w=_.length;A<w;A++){const L=_[A];o.bufferSubData(y,L.start*x.BYTES_PER_ELEMENT,x,L.start,L.count)}g.clearUpdateRanges()}g.onUploadCallback()}function u(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function h(d){d.isInterleavedBufferAttribute&&(d=d.data);const g=e.get(d);g&&(o.deleteBuffer(g.buffer),e.delete(d))}function p(d,g){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const x=e.get(d);(!x||x.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const y=e.get(d);if(y===void 0)e.set(d,a(d,g));else if(y.version<d.version){if(y.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(y.buffer,d,g),y.version=d.version}}return{get:u,remove:h,update:p}}class If extends Ia{constructor(e=1,a=1,s=1,u=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:a,widthSegments:s,heightSegments:u};const h=e/2,p=a/2,d=Math.floor(s),g=Math.floor(u),y=d+1,x=g+1,_=e/d,E=a/g,A=[],w=[],L=[],T=[];for(let M=0;M<x;M++){const X=M*E-p;for(let G=0;G<y;G++){const O=G*_-h;w.push(O,-X,0),L.push(0,0,1),T.push(G/d),T.push(1-M/g)}}for(let M=0;M<g;M++)for(let X=0;X<d;X++){const G=X+y*M,O=X+y*(M+1),ft=X+1+y*(M+1),Z=X+1+y*M;A.push(G,O,Z),A.push(O,ft,Z)}this.setIndex(A),this.setAttribute("position",new Pa(w,3)),this.setAttribute("normal",new Pa(L,3)),this.setAttribute("uv",new Pa(T,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new If(e.width,e.height,e.widthSegments,e.heightSegments)}}var ST=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,xT=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,MT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ET=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,TT=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,AT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,bT=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,RT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,CT=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,wT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,DT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,UT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,NT=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,LT=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,OT=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,PT=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,zT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,IT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,BT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,FT=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,HT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,GT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,VT=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,XT=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,kT=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,YT=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,qT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,WT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,jT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ZT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,KT="gl_FragColor = linearToOutputTexel( gl_FragColor );",QT=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,JT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,$T=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,t1=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,e1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,n1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,i1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,a1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,r1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,s1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,o1=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,l1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,u1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,c1=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,f1=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,h1=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,d1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,p1=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,m1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,g1=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,v1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,_1=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,y1=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,S1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,x1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,M1=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,E1=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,T1=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,A1=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,b1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,R1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,C1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,w1=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,D1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,U1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,N1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,L1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,O1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,P1=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,z1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,I1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,B1=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,F1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,H1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,G1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,V1=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,X1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,k1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Y1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,q1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,W1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,j1=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Z1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,K1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Q1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,J1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,$1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,tA=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,eA=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,nA=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,iA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,aA=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,rA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,sA=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,oA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,lA=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,uA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,cA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,fA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,hA=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,dA=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,pA=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,mA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,gA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,vA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,_A=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const yA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,SA=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,MA=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,EA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,TA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,AA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,bA=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,RA=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,CA=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,wA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,DA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,UA=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,NA=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,LA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,OA=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,PA=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zA=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,IA=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,BA=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,FA=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,HA=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,GA=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,VA=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,XA=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,kA=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,YA=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qA=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,WA=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,jA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ZA=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,KA=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,QA=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,JA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Pe={alphahash_fragment:ST,alphahash_pars_fragment:xT,alphamap_fragment:MT,alphamap_pars_fragment:ET,alphatest_fragment:TT,alphatest_pars_fragment:AT,aomap_fragment:bT,aomap_pars_fragment:RT,batching_pars_vertex:CT,batching_vertex:wT,begin_vertex:DT,beginnormal_vertex:UT,bsdfs:NT,iridescence_fragment:LT,bumpmap_pars_fragment:OT,clipping_planes_fragment:PT,clipping_planes_pars_fragment:zT,clipping_planes_pars_vertex:IT,clipping_planes_vertex:BT,color_fragment:FT,color_pars_fragment:HT,color_pars_vertex:GT,color_vertex:VT,common:XT,cube_uv_reflection_fragment:kT,defaultnormal_vertex:YT,displacementmap_pars_vertex:qT,displacementmap_vertex:WT,emissivemap_fragment:jT,emissivemap_pars_fragment:ZT,colorspace_fragment:KT,colorspace_pars_fragment:QT,envmap_fragment:JT,envmap_common_pars_fragment:$T,envmap_pars_fragment:t1,envmap_pars_vertex:e1,envmap_physical_pars_fragment:h1,envmap_vertex:n1,fog_vertex:i1,fog_pars_vertex:a1,fog_fragment:r1,fog_pars_fragment:s1,gradientmap_pars_fragment:o1,lightmap_pars_fragment:l1,lights_lambert_fragment:u1,lights_lambert_pars_fragment:c1,lights_pars_begin:f1,lights_toon_fragment:d1,lights_toon_pars_fragment:p1,lights_phong_fragment:m1,lights_phong_pars_fragment:g1,lights_physical_fragment:v1,lights_physical_pars_fragment:_1,lights_fragment_begin:y1,lights_fragment_maps:S1,lights_fragment_end:x1,logdepthbuf_fragment:M1,logdepthbuf_pars_fragment:E1,logdepthbuf_pars_vertex:T1,logdepthbuf_vertex:A1,map_fragment:b1,map_pars_fragment:R1,map_particle_fragment:C1,map_particle_pars_fragment:w1,metalnessmap_fragment:D1,metalnessmap_pars_fragment:U1,morphinstance_vertex:N1,morphcolor_vertex:L1,morphnormal_vertex:O1,morphtarget_pars_vertex:P1,morphtarget_vertex:z1,normal_fragment_begin:I1,normal_fragment_maps:B1,normal_pars_fragment:F1,normal_pars_vertex:H1,normal_vertex:G1,normalmap_pars_fragment:V1,clearcoat_normal_fragment_begin:X1,clearcoat_normal_fragment_maps:k1,clearcoat_pars_fragment:Y1,iridescence_pars_fragment:q1,opaque_fragment:W1,packing:j1,premultiplied_alpha_fragment:Z1,project_vertex:K1,dithering_fragment:Q1,dithering_pars_fragment:J1,roughnessmap_fragment:$1,roughnessmap_pars_fragment:tA,shadowmap_pars_fragment:eA,shadowmap_pars_vertex:nA,shadowmap_vertex:iA,shadowmask_pars_fragment:aA,skinbase_vertex:rA,skinning_pars_vertex:sA,skinning_vertex:oA,skinnormal_vertex:lA,specularmap_fragment:uA,specularmap_pars_fragment:cA,tonemapping_fragment:fA,tonemapping_pars_fragment:hA,transmission_fragment:dA,transmission_pars_fragment:pA,uv_pars_fragment:mA,uv_pars_vertex:gA,uv_vertex:vA,worldpos_vertex:_A,background_vert:yA,background_frag:SA,backgroundCube_vert:xA,backgroundCube_frag:MA,cube_vert:EA,cube_frag:TA,depth_vert:AA,depth_frag:bA,distanceRGBA_vert:RA,distanceRGBA_frag:CA,equirect_vert:wA,equirect_frag:DA,linedashed_vert:UA,linedashed_frag:NA,meshbasic_vert:LA,meshbasic_frag:OA,meshlambert_vert:PA,meshlambert_frag:zA,meshmatcap_vert:IA,meshmatcap_frag:BA,meshnormal_vert:FA,meshnormal_frag:HA,meshphong_vert:GA,meshphong_frag:VA,meshphysical_vert:XA,meshphysical_frag:kA,meshtoon_vert:YA,meshtoon_frag:qA,points_vert:WA,points_frag:jA,shadow_vert:ZA,shadow_frag:KA,sprite_vert:QA,sprite_frag:JA},Qt={common:{diffuse:{value:new Ne(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ue}},envmap:{envMap:{value:null},envMapRotation:{value:new Ue},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ue}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ue}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ue},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ue},normalScale:{value:new Ze(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ue},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ue}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ue}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ue}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ne(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ne(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0},uvTransform:{value:new Ue}},sprite:{diffuse:{value:new Ne(16777215)},opacity:{value:1},center:{value:new Ze(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}}},Na={basic:{uniforms:gi([Qt.common,Qt.specularmap,Qt.envmap,Qt.aomap,Qt.lightmap,Qt.fog]),vertexShader:Pe.meshbasic_vert,fragmentShader:Pe.meshbasic_frag},lambert:{uniforms:gi([Qt.common,Qt.specularmap,Qt.envmap,Qt.aomap,Qt.lightmap,Qt.emissivemap,Qt.bumpmap,Qt.normalmap,Qt.displacementmap,Qt.fog,Qt.lights,{emissive:{value:new Ne(0)}}]),vertexShader:Pe.meshlambert_vert,fragmentShader:Pe.meshlambert_frag},phong:{uniforms:gi([Qt.common,Qt.specularmap,Qt.envmap,Qt.aomap,Qt.lightmap,Qt.emissivemap,Qt.bumpmap,Qt.normalmap,Qt.displacementmap,Qt.fog,Qt.lights,{emissive:{value:new Ne(0)},specular:{value:new Ne(1118481)},shininess:{value:30}}]),vertexShader:Pe.meshphong_vert,fragmentShader:Pe.meshphong_frag},standard:{uniforms:gi([Qt.common,Qt.envmap,Qt.aomap,Qt.lightmap,Qt.emissivemap,Qt.bumpmap,Qt.normalmap,Qt.displacementmap,Qt.roughnessmap,Qt.metalnessmap,Qt.fog,Qt.lights,{emissive:{value:new Ne(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Pe.meshphysical_vert,fragmentShader:Pe.meshphysical_frag},toon:{uniforms:gi([Qt.common,Qt.aomap,Qt.lightmap,Qt.emissivemap,Qt.bumpmap,Qt.normalmap,Qt.displacementmap,Qt.gradientmap,Qt.fog,Qt.lights,{emissive:{value:new Ne(0)}}]),vertexShader:Pe.meshtoon_vert,fragmentShader:Pe.meshtoon_frag},matcap:{uniforms:gi([Qt.common,Qt.bumpmap,Qt.normalmap,Qt.displacementmap,Qt.fog,{matcap:{value:null}}]),vertexShader:Pe.meshmatcap_vert,fragmentShader:Pe.meshmatcap_frag},points:{uniforms:gi([Qt.points,Qt.fog]),vertexShader:Pe.points_vert,fragmentShader:Pe.points_frag},dashed:{uniforms:gi([Qt.common,Qt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Pe.linedashed_vert,fragmentShader:Pe.linedashed_frag},depth:{uniforms:gi([Qt.common,Qt.displacementmap]),vertexShader:Pe.depth_vert,fragmentShader:Pe.depth_frag},normal:{uniforms:gi([Qt.common,Qt.bumpmap,Qt.normalmap,Qt.displacementmap,{opacity:{value:1}}]),vertexShader:Pe.meshnormal_vert,fragmentShader:Pe.meshnormal_frag},sprite:{uniforms:gi([Qt.sprite,Qt.fog]),vertexShader:Pe.sprite_vert,fragmentShader:Pe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ue},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Pe.background_vert,fragmentShader:Pe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ue}},vertexShader:Pe.backgroundCube_vert,fragmentShader:Pe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Pe.cube_vert,fragmentShader:Pe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Pe.equirect_vert,fragmentShader:Pe.equirect_frag},distanceRGBA:{uniforms:gi([Qt.common,Qt.displacementmap,{referencePosition:{value:new lt},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Pe.distanceRGBA_vert,fragmentShader:Pe.distanceRGBA_frag},shadow:{uniforms:gi([Qt.lights,Qt.fog,{color:{value:new Ne(0)},opacity:{value:1}}]),vertexShader:Pe.shadow_vert,fragmentShader:Pe.shadow_frag}};Na.physical={uniforms:gi([Na.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ue},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ue},clearcoatNormalScale:{value:new Ze(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ue},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ue},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ue},sheen:{value:0},sheenColor:{value:new Ne(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ue},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ue},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ue},transmissionSamplerSize:{value:new Ze},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ue},attenuationDistance:{value:0},attenuationColor:{value:new Ne(0)},specularColor:{value:new Ne(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ue},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ue},anisotropyVector:{value:new Ze},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ue}}]),vertexShader:Pe.meshphysical_vert,fragmentShader:Pe.meshphysical_frag};const Sf={r:0,b:0,g:0},Ls=new za,$A=new hn;function tb(o,e,a,s,u,h,p){const d=new Ne(0);let g=h===!0?0:1,y,x,_=null,E=0,A=null;function w(X){let G=X.isScene===!0?X.background:null;return G&&G.isTexture&&(G=(X.backgroundBlurriness>0?a:e).get(G)),G}function L(X){let G=!1;const O=w(X);O===null?M(d,g):O&&O.isColor&&(M(O,1),G=!0);const ft=o.xr.getEnvironmentBlendMode();ft==="additive"?s.buffers.color.setClear(0,0,0,1,p):ft==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,p),(o.autoClear||G)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function T(X,G){const O=w(G);O&&(O.isCubeTexture||O.mapping===Pf)?(x===void 0&&(x=new ga(new Du(1,1,1),new Qr({name:"BackgroundCubeMaterial",uniforms:ul(Na.backgroundCube.uniforms),vertexShader:Na.backgroundCube.vertexShader,fragmentShader:Na.backgroundCube.fragmentShader,side:bi,depthTest:!1,depthWrite:!1,fog:!1})),x.geometry.deleteAttribute("normal"),x.geometry.deleteAttribute("uv"),x.onBeforeRender=function(ft,Z,V){this.matrixWorld.copyPosition(V.matrixWorld)},Object.defineProperty(x.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),u.update(x)),Ls.copy(G.backgroundRotation),Ls.x*=-1,Ls.y*=-1,Ls.z*=-1,O.isCubeTexture&&O.isRenderTargetTexture===!1&&(Ls.y*=-1,Ls.z*=-1),x.material.uniforms.envMap.value=O,x.material.uniforms.flipEnvMap.value=O.isCubeTexture&&O.isRenderTargetTexture===!1?-1:1,x.material.uniforms.backgroundBlurriness.value=G.backgroundBlurriness,x.material.uniforms.backgroundIntensity.value=G.backgroundIntensity,x.material.uniforms.backgroundRotation.value.setFromMatrix4($A.makeRotationFromEuler(Ls)),x.material.toneMapped=We.getTransfer(O.colorSpace)!==on,(_!==O||E!==O.version||A!==o.toneMapping)&&(x.material.needsUpdate=!0,_=O,E=O.version,A=o.toneMapping),x.layers.enableAll(),X.unshift(x,x.geometry,x.material,0,0,null)):O&&O.isTexture&&(y===void 0&&(y=new ga(new If(2,2),new Qr({name:"BackgroundMaterial",uniforms:ul(Na.background.uniforms),vertexShader:Na.background.vertexShader,fragmentShader:Na.background.fragmentShader,side:Kr,depthTest:!1,depthWrite:!1,fog:!1})),y.geometry.deleteAttribute("normal"),Object.defineProperty(y.material,"map",{get:function(){return this.uniforms.t2D.value}}),u.update(y)),y.material.uniforms.t2D.value=O,y.material.uniforms.backgroundIntensity.value=G.backgroundIntensity,y.material.toneMapped=We.getTransfer(O.colorSpace)!==on,O.matrixAutoUpdate===!0&&O.updateMatrix(),y.material.uniforms.uvTransform.value.copy(O.matrix),(_!==O||E!==O.version||A!==o.toneMapping)&&(y.material.needsUpdate=!0,_=O,E=O.version,A=o.toneMapping),y.layers.enableAll(),X.unshift(y,y.geometry,y.material,0,0,null))}function M(X,G){X.getRGB(Sf,MS(o)),s.buffers.color.setClear(Sf.r,Sf.g,Sf.b,G,p)}return{getClearColor:function(){return d},setClearColor:function(X,G=1){d.set(X),g=G,M(d,g)},getClearAlpha:function(){return g},setClearAlpha:function(X){g=X,M(d,g)},render:L,addToRenderList:T}}function eb(o,e){const a=o.getParameter(o.MAX_VERTEX_ATTRIBS),s={},u=E(null);let h=u,p=!1;function d(N,k,yt,dt,Rt){let gt=!1;const Q=_(dt,yt,k);h!==Q&&(h=Q,y(h.object)),gt=A(N,dt,yt,Rt),gt&&w(N,dt,yt,Rt),Rt!==null&&e.update(Rt,o.ELEMENT_ARRAY_BUFFER),(gt||p)&&(p=!1,O(N,k,yt,dt),Rt!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(Rt).buffer))}function g(){return o.createVertexArray()}function y(N){return o.bindVertexArray(N)}function x(N){return o.deleteVertexArray(N)}function _(N,k,yt){const dt=yt.wireframe===!0;let Rt=s[N.id];Rt===void 0&&(Rt={},s[N.id]=Rt);let gt=Rt[k.id];gt===void 0&&(gt={},Rt[k.id]=gt);let Q=gt[dt];return Q===void 0&&(Q=E(g()),gt[dt]=Q),Q}function E(N){const k=[],yt=[],dt=[];for(let Rt=0;Rt<a;Rt++)k[Rt]=0,yt[Rt]=0,dt[Rt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:yt,attributeDivisors:dt,object:N,attributes:{},index:null}}function A(N,k,yt,dt){const Rt=h.attributes,gt=k.attributes;let Q=0;const ht=yt.getAttributes();for(const at in ht)if(ht[at].location>=0){const Nt=Rt[at];let Jt=gt[at];if(Jt===void 0&&(at==="instanceMatrix"&&N.instanceMatrix&&(Jt=N.instanceMatrix),at==="instanceColor"&&N.instanceColor&&(Jt=N.instanceColor)),Nt===void 0||Nt.attribute!==Jt||Jt&&Nt.data!==Jt.data)return!0;Q++}return h.attributesNum!==Q||h.index!==dt}function w(N,k,yt,dt){const Rt={},gt=k.attributes;let Q=0;const ht=yt.getAttributes();for(const at in ht)if(ht[at].location>=0){let Nt=gt[at];Nt===void 0&&(at==="instanceMatrix"&&N.instanceMatrix&&(Nt=N.instanceMatrix),at==="instanceColor"&&N.instanceColor&&(Nt=N.instanceColor));const Jt={};Jt.attribute=Nt,Nt&&Nt.data&&(Jt.data=Nt.data),Rt[at]=Jt,Q++}h.attributes=Rt,h.attributesNum=Q,h.index=dt}function L(){const N=h.newAttributes;for(let k=0,yt=N.length;k<yt;k++)N[k]=0}function T(N){M(N,0)}function M(N,k){const yt=h.newAttributes,dt=h.enabledAttributes,Rt=h.attributeDivisors;yt[N]=1,dt[N]===0&&(o.enableVertexAttribArray(N),dt[N]=1),Rt[N]!==k&&(o.vertexAttribDivisor(N,k),Rt[N]=k)}function X(){const N=h.newAttributes,k=h.enabledAttributes;for(let yt=0,dt=k.length;yt<dt;yt++)k[yt]!==N[yt]&&(o.disableVertexAttribArray(yt),k[yt]=0)}function G(N,k,yt,dt,Rt,gt,Q){Q===!0?o.vertexAttribIPointer(N,k,yt,Rt,gt):o.vertexAttribPointer(N,k,yt,dt,Rt,gt)}function O(N,k,yt,dt){L();const Rt=dt.attributes,gt=yt.getAttributes(),Q=k.defaultAttributeValues;for(const ht in gt){const at=gt[ht];if(at.location>=0){let wt=Rt[ht];if(wt===void 0&&(ht==="instanceMatrix"&&N.instanceMatrix&&(wt=N.instanceMatrix),ht==="instanceColor"&&N.instanceColor&&(wt=N.instanceColor)),wt!==void 0){const Nt=wt.normalized,Jt=wt.itemSize,pe=e.get(wt);if(pe===void 0)continue;const be=pe.buffer,U=pe.type,J=pe.bytesPerElement,At=U===o.INT||U===o.UNSIGNED_INT||wt.gpuType===Dm;if(wt.isInterleavedBufferAttribute){const vt=wt.data,zt=vt.stride,Ft=wt.offset;if(vt.isInstancedInterleavedBuffer){for(let jt=0;jt<at.locationSize;jt++)M(at.location+jt,vt.meshPerAttribute);N.isInstancedMesh!==!0&&dt._maxInstanceCount===void 0&&(dt._maxInstanceCount=vt.meshPerAttribute*vt.count)}else for(let jt=0;jt<at.locationSize;jt++)T(at.location+jt);o.bindBuffer(o.ARRAY_BUFFER,be);for(let jt=0;jt<at.locationSize;jt++)G(at.location+jt,Jt/at.locationSize,U,Nt,zt*J,(Ft+Jt/at.locationSize*jt)*J,At)}else{if(wt.isInstancedBufferAttribute){for(let vt=0;vt<at.locationSize;vt++)M(at.location+vt,wt.meshPerAttribute);N.isInstancedMesh!==!0&&dt._maxInstanceCount===void 0&&(dt._maxInstanceCount=wt.meshPerAttribute*wt.count)}else for(let vt=0;vt<at.locationSize;vt++)T(at.location+vt);o.bindBuffer(o.ARRAY_BUFFER,be);for(let vt=0;vt<at.locationSize;vt++)G(at.location+vt,Jt/at.locationSize,U,Nt,Jt*J,Jt/at.locationSize*vt*J,At)}}else if(Q!==void 0){const Nt=Q[ht];if(Nt!==void 0)switch(Nt.length){case 2:o.vertexAttrib2fv(at.location,Nt);break;case 3:o.vertexAttrib3fv(at.location,Nt);break;case 4:o.vertexAttrib4fv(at.location,Nt);break;default:o.vertexAttrib1fv(at.location,Nt)}}}}X()}function ft(){q();for(const N in s){const k=s[N];for(const yt in k){const dt=k[yt];for(const Rt in dt)x(dt[Rt].object),delete dt[Rt];delete k[yt]}delete s[N]}}function Z(N){if(s[N.id]===void 0)return;const k=s[N.id];for(const yt in k){const dt=k[yt];for(const Rt in dt)x(dt[Rt].object),delete dt[Rt];delete k[yt]}delete s[N.id]}function V(N){for(const k in s){const yt=s[k];if(yt[N.id]===void 0)continue;const dt=yt[N.id];for(const Rt in dt)x(dt[Rt].object),delete dt[Rt];delete yt[N.id]}}function q(){P(),p=!0,h!==u&&(h=u,y(h.object))}function P(){u.geometry=null,u.program=null,u.wireframe=!1}return{setup:d,reset:q,resetDefaultState:P,dispose:ft,releaseStatesOfGeometry:Z,releaseStatesOfProgram:V,initAttributes:L,enableAttribute:T,disableUnusedAttributes:X}}function nb(o,e,a){let s;function u(y){s=y}function h(y,x){o.drawArrays(s,y,x),a.update(x,s,1)}function p(y,x,_){_!==0&&(o.drawArraysInstanced(s,y,x,_),a.update(x,s,_))}function d(y,x,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,y,0,x,0,_);let A=0;for(let w=0;w<_;w++)A+=x[w];a.update(A,s,1)}function g(y,x,_,E){if(_===0)return;const A=e.get("WEBGL_multi_draw");if(A===null)for(let w=0;w<y.length;w++)p(y[w],x[w],E[w]);else{A.multiDrawArraysInstancedWEBGL(s,y,0,x,0,E,0,_);let w=0;for(let L=0;L<_;L++)w+=x[L]*E[L];a.update(w,s,1)}}this.setMode=u,this.render=h,this.renderInstances=p,this.renderMultiDraw=d,this.renderMultiDrawInstances=g}function ib(o,e,a,s){let u;function h(){if(u!==void 0)return u;if(e.has("EXT_texture_filter_anisotropic")===!0){const V=e.get("EXT_texture_filter_anisotropic");u=o.getParameter(V.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else u=0;return u}function p(V){return!(V!==ma&&s.convert(V)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(V){const q=V===Cu&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(V!==lr&&s.convert(V)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&V!==Oa&&!q)}function g(V){if(V==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";V="mediump"}return V==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let y=a.precision!==void 0?a.precision:"highp";const x=g(y);x!==y&&(console.warn("THREE.WebGLRenderer:",y,"not supported, using",x,"instead."),y=x);const _=a.logarithmicDepthBuffer===!0,E=a.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),A=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),w=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),L=o.getParameter(o.MAX_TEXTURE_SIZE),T=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),M=o.getParameter(o.MAX_VERTEX_ATTRIBS),X=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),G=o.getParameter(o.MAX_VARYING_VECTORS),O=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),ft=w>0,Z=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:h,getMaxPrecision:g,textureFormatReadable:p,textureTypeReadable:d,precision:y,logarithmicDepthBuffer:_,reverseDepthBuffer:E,maxTextures:A,maxVertexTextures:w,maxTextureSize:L,maxCubemapSize:T,maxAttributes:M,maxVertexUniforms:X,maxVaryings:G,maxFragmentUniforms:O,vertexTextures:ft,maxSamples:Z}}function ab(o){const e=this;let a=null,s=0,u=!1,h=!1;const p=new zs,d=new Ue,g={value:null,needsUpdate:!1};this.uniform=g,this.numPlanes=0,this.numIntersection=0,this.init=function(_,E){const A=_.length!==0||E||s!==0||u;return u=E,s=_.length,A},this.beginShadows=function(){h=!0,x(null)},this.endShadows=function(){h=!1},this.setGlobalState=function(_,E){a=x(_,E,0)},this.setState=function(_,E,A){const w=_.clippingPlanes,L=_.clipIntersection,T=_.clipShadows,M=o.get(_);if(!u||w===null||w.length===0||h&&!T)h?x(null):y();else{const X=h?0:s,G=X*4;let O=M.clippingState||null;g.value=O,O=x(w,E,G,A);for(let ft=0;ft!==G;++ft)O[ft]=a[ft];M.clippingState=O,this.numIntersection=L?this.numPlanes:0,this.numPlanes+=X}};function y(){g.value!==a&&(g.value=a,g.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function x(_,E,A,w){const L=_!==null?_.length:0;let T=null;if(L!==0){if(T=g.value,w!==!0||T===null){const M=A+L*4,X=E.matrixWorldInverse;d.getNormalMatrix(X),(T===null||T.length<M)&&(T=new Float32Array(M));for(let G=0,O=A;G!==L;++G,O+=4)p.copy(_[G]).applyMatrix4(X,d),p.normal.toArray(T,O),T[O+3]=p.constant}g.value=T,g.needsUpdate=!0}return e.numPlanes=L,e.numIntersection=0,T}}function rb(o){let e=new WeakMap;function a(p,d){return d===Kp?p.mapping=rl:d===Qp&&(p.mapping=sl),p}function s(p){if(p&&p.isTexture){const d=p.mapping;if(d===Kp||d===Qp)if(e.has(p)){const g=e.get(p).texture;return a(g,p.mapping)}else{const g=p.image;if(g&&g.height>0){const y=new gT(g.height);return y.fromEquirectangularTexture(o,p),e.set(p,y),p.addEventListener("dispose",u),a(y.texture,p.mapping)}else return null}}return p}function u(p){const d=p.target;d.removeEventListener("dispose",u);const g=e.get(d);g!==void 0&&(e.delete(d),g.dispose())}function h(){e=new WeakMap}return{get:s,dispose:h}}class sb extends ES{constructor(e=-1,a=1,s=1,u=-1,h=.1,p=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=a,this.top=s,this.bottom=u,this.near=h,this.far=p,this.updateProjectionMatrix()}copy(e,a){return super.copy(e,a),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,a,s,u,h,p){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=a,this.view.offsetX=s,this.view.offsetY=u,this.view.width=h,this.view.height=p,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),a=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,u=(this.top+this.bottom)/2;let h=s-e,p=s+e,d=u+a,g=u-a;if(this.view!==null&&this.view.enabled){const y=(this.right-this.left)/this.view.fullWidth/this.zoom,x=(this.top-this.bottom)/this.view.fullHeight/this.zoom;h+=y*this.view.offsetX,p=h+y*this.view.width,d-=x*this.view.offsetY,g=d-x*this.view.height}this.projectionMatrix.makeOrthographic(h,p,d,g,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const a=super.toJSON(e);return a.object.zoom=this.zoom,a.object.left=this.left,a.object.right=this.right,a.object.top=this.top,a.object.bottom=this.bottom,a.object.near=this.near,a.object.far=this.far,this.view!==null&&(a.object.view=Object.assign({},this.view)),a}}const tl=4,dy=[.125,.215,.35,.446,.526,.582],Fs=20,wp=new sb,py=new Ne;let Dp=null,Up=0,Np=0,Lp=!1;const Is=(1+Math.sqrt(5))/2,Ko=1/Is,my=[new lt(-Is,Ko,0),new lt(Is,Ko,0),new lt(-Ko,0,Is),new lt(Ko,0,Is),new lt(0,Is,-Ko),new lt(0,Is,Ko),new lt(-1,1,-1),new lt(1,1,-1),new lt(-1,1,1),new lt(1,1,1)];class gy{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,a=0,s=.1,u=100){Dp=this._renderer.getRenderTarget(),Up=this._renderer.getActiveCubeFace(),Np=this._renderer.getActiveMipmapLevel(),Lp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const h=this._allocateTargets();return h.depthBuffer=!0,this._sceneToCubeUV(e,s,u,h),a>0&&this._blur(h,0,0,a),this._applyPMREM(h),this._cleanup(h),h}fromEquirectangular(e,a=null){return this._fromTexture(e,a)}fromCubemap(e,a=null){return this._fromTexture(e,a)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=yy(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_y(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Dp,Up,Np),this._renderer.xr.enabled=Lp,e.scissorTest=!1,xf(e,0,0,e.width,e.height)}_fromTexture(e,a){e.mapping===rl||e.mapping===sl?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Dp=this._renderer.getRenderTarget(),Up=this._renderer.getActiveCubeFace(),Np=this._renderer.getActiveMipmapLevel(),Lp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=a||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),a=4*this._cubeSize,s={magFilter:La,minFilter:La,generateMipmaps:!1,type:Cu,format:ma,colorSpace:cl,depthBuffer:!1},u=vy(e,a,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==a){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=vy(e,a,s);const{_lodMax:h}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ob(h)),this._blurMaterial=lb(h,e,a)}return u}_compileMaterial(e){const a=new ga(this._lodPlanes[0],e);this._renderer.compile(a,wp)}_sceneToCubeUV(e,a,s,u){const d=new Gi(90,1,a,s),g=[1,-1,1,1,1,1],y=[1,1,1,-1,-1,-1],x=this._renderer,_=x.autoClear,E=x.toneMapping;x.getClearColor(py),x.toneMapping=Zr,x.autoClear=!1;const A=new yS({name:"PMREM.Background",side:bi,depthWrite:!1,depthTest:!1}),w=new ga(new Du,A);let L=!1;const T=e.background;T?T.isColor&&(A.color.copy(T),e.background=null,L=!0):(A.color.copy(py),L=!0);for(let M=0;M<6;M++){const X=M%3;X===0?(d.up.set(0,g[M],0),d.lookAt(y[M],0,0)):X===1?(d.up.set(0,0,g[M]),d.lookAt(0,y[M],0)):(d.up.set(0,g[M],0),d.lookAt(0,0,y[M]));const G=this._cubeSize;xf(u,X*G,M>2?G:0,G,G),x.setRenderTarget(u),L&&x.render(w,d),x.render(e,d)}w.geometry.dispose(),w.material.dispose(),x.toneMapping=E,x.autoClear=_,e.background=T}_textureToCubeUV(e,a){const s=this._renderer,u=e.mapping===rl||e.mapping===sl;u?(this._cubemapMaterial===null&&(this._cubemapMaterial=yy()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_y());const h=u?this._cubemapMaterial:this._equirectMaterial,p=new ga(this._lodPlanes[0],h),d=h.uniforms;d.envMap.value=e;const g=this._cubeSize;xf(a,0,0,3*g,2*g),s.setRenderTarget(a),s.render(p,wp)}_applyPMREM(e){const a=this._renderer,s=a.autoClear;a.autoClear=!1;const u=this._lodPlanes.length;for(let h=1;h<u;h++){const p=Math.sqrt(this._sigmas[h]*this._sigmas[h]-this._sigmas[h-1]*this._sigmas[h-1]),d=my[(u-h-1)%my.length];this._blur(e,h-1,h,p,d)}a.autoClear=s}_blur(e,a,s,u,h){const p=this._pingPongRenderTarget;this._halfBlur(e,p,a,s,u,"latitudinal",h),this._halfBlur(p,e,s,s,u,"longitudinal",h)}_halfBlur(e,a,s,u,h,p,d){const g=this._renderer,y=this._blurMaterial;p!=="latitudinal"&&p!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const x=3,_=new ga(this._lodPlanes[u],y),E=y.uniforms,A=this._sizeLods[s]-1,w=isFinite(h)?Math.PI/(2*A):2*Math.PI/(2*Fs-1),L=h/w,T=isFinite(h)?1+Math.floor(x*L):Fs;T>Fs&&console.warn(`sigmaRadians, ${h}, is too large and will clip, as it requested ${T} samples when the maximum is set to ${Fs}`);const M=[];let X=0;for(let V=0;V<Fs;++V){const q=V/L,P=Math.exp(-q*q/2);M.push(P),V===0?X+=P:V<T&&(X+=2*P)}for(let V=0;V<M.length;V++)M[V]=M[V]/X;E.envMap.value=e.texture,E.samples.value=T,E.weights.value=M,E.latitudinal.value=p==="latitudinal",d&&(E.poleAxis.value=d);const{_lodMax:G}=this;E.dTheta.value=w,E.mipInt.value=G-s;const O=this._sizeLods[u],ft=3*O*(u>G-tl?u-G+tl:0),Z=4*(this._cubeSize-O);xf(a,ft,Z,3*O,2*O),g.setRenderTarget(a),g.render(_,wp)}}function ob(o){const e=[],a=[],s=[];let u=o;const h=o-tl+1+dy.length;for(let p=0;p<h;p++){const d=Math.pow(2,u);a.push(d);let g=1/d;p>o-tl?g=dy[p-o+tl-1]:p===0&&(g=0),s.push(g);const y=1/(d-2),x=-y,_=1+y,E=[x,x,_,x,_,_,x,x,_,_,x,_],A=6,w=6,L=3,T=2,M=1,X=new Float32Array(L*w*A),G=new Float32Array(T*w*A),O=new Float32Array(M*w*A);for(let Z=0;Z<A;Z++){const V=Z%3*2/3-1,q=Z>2?0:-1,P=[V,q,0,V+2/3,q,0,V+2/3,q+1,0,V,q,0,V+2/3,q+1,0,V,q+1,0];X.set(P,L*w*Z),G.set(E,T*w*Z);const N=[Z,Z,Z,Z,Z,Z];O.set(N,M*w*Z)}const ft=new Ia;ft.setAttribute("position",new Xi(X,L)),ft.setAttribute("uv",new Xi(G,T)),ft.setAttribute("faceIndex",new Xi(O,M)),e.push(ft),u>tl&&u--}return{lodPlanes:e,sizeLods:a,sigmas:s}}function vy(o,e,a){const s=new Xs(o,e,a);return s.texture.mapping=Pf,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function xf(o,e,a,s,u){o.viewport.set(e,a,s,u),o.scissor.set(e,a,s,u)}function lb(o,e,a){const s=new Float32Array(Fs),u=new lt(0,1,0);return new Qr({name:"SphericalGaussianBlur",defines:{n:Fs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/a,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:u}},vertexShader:Fm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:jr,depthTest:!1,depthWrite:!1})}function _y(){return new Qr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Fm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:jr,depthTest:!1,depthWrite:!1})}function yy(){return new Qr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Fm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:jr,depthTest:!1,depthWrite:!1})}function Fm(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function ub(o){let e=new WeakMap,a=null;function s(d){if(d&&d.isTexture){const g=d.mapping,y=g===Kp||g===Qp,x=g===rl||g===sl;if(y||x){let _=e.get(d);const E=_!==void 0?_.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==E)return a===null&&(a=new gy(o)),_=y?a.fromEquirectangular(d,_):a.fromCubemap(d,_),_.texture.pmremVersion=d.pmremVersion,e.set(d,_),_.texture;if(_!==void 0)return _.texture;{const A=d.image;return y&&A&&A.height>0||x&&A&&u(A)?(a===null&&(a=new gy(o)),_=y?a.fromEquirectangular(d):a.fromCubemap(d),_.texture.pmremVersion=d.pmremVersion,e.set(d,_),d.addEventListener("dispose",h),_.texture):null}}}return d}function u(d){let g=0;const y=6;for(let x=0;x<y;x++)d[x]!==void 0&&g++;return g===y}function h(d){const g=d.target;g.removeEventListener("dispose",h);const y=e.get(g);y!==void 0&&(e.delete(g),y.dispose())}function p(){e=new WeakMap,a!==null&&(a.dispose(),a=null)}return{get:s,dispose:p}}function cb(o){const e={};function a(s){if(e[s]!==void 0)return e[s];let u;switch(s){case"WEBGL_depth_texture":u=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":u=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":u=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":u=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:u=o.getExtension(s)}return e[s]=u,u}return{has:function(s){return a(s)!==null},init:function(){a("EXT_color_buffer_float"),a("WEBGL_clip_cull_distance"),a("OES_texture_float_linear"),a("EXT_color_buffer_half_float"),a("WEBGL_multisampled_render_to_texture"),a("WEBGL_render_shared_exponent")},get:function(s){const u=a(s);return u===null&&xu("THREE.WebGLRenderer: "+s+" extension not supported."),u}}}function fb(o,e,a,s){const u={},h=new WeakMap;function p(_){const E=_.target;E.index!==null&&e.remove(E.index);for(const w in E.attributes)e.remove(E.attributes[w]);for(const w in E.morphAttributes){const L=E.morphAttributes[w];for(let T=0,M=L.length;T<M;T++)e.remove(L[T])}E.removeEventListener("dispose",p),delete u[E.id];const A=h.get(E);A&&(e.remove(A),h.delete(E)),s.releaseStatesOfGeometry(E),E.isInstancedBufferGeometry===!0&&delete E._maxInstanceCount,a.memory.geometries--}function d(_,E){return u[E.id]===!0||(E.addEventListener("dispose",p),u[E.id]=!0,a.memory.geometries++),E}function g(_){const E=_.attributes;for(const w in E)e.update(E[w],o.ARRAY_BUFFER);const A=_.morphAttributes;for(const w in A){const L=A[w];for(let T=0,M=L.length;T<M;T++)e.update(L[T],o.ARRAY_BUFFER)}}function y(_){const E=[],A=_.index,w=_.attributes.position;let L=0;if(A!==null){const X=A.array;L=A.version;for(let G=0,O=X.length;G<O;G+=3){const ft=X[G+0],Z=X[G+1],V=X[G+2];E.push(ft,Z,Z,V,V,ft)}}else if(w!==void 0){const X=w.array;L=w.version;for(let G=0,O=X.length/3-1;G<O;G+=3){const ft=G+0,Z=G+1,V=G+2;E.push(ft,Z,Z,V,V,ft)}}else return;const T=new(dS(E)?xS:SS)(E,1);T.version=L;const M=h.get(_);M&&e.remove(M),h.set(_,T)}function x(_){const E=h.get(_);if(E){const A=_.index;A!==null&&E.version<A.version&&y(_)}else y(_);return h.get(_)}return{get:d,update:g,getWireframeAttribute:x}}function hb(o,e,a){let s;function u(E){s=E}let h,p;function d(E){h=E.type,p=E.bytesPerElement}function g(E,A){o.drawElements(s,A,h,E*p),a.update(A,s,1)}function y(E,A,w){w!==0&&(o.drawElementsInstanced(s,A,h,E*p,w),a.update(A,s,w))}function x(E,A,w){if(w===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,A,0,h,E,0,w);let T=0;for(let M=0;M<w;M++)T+=A[M];a.update(T,s,1)}function _(E,A,w,L){if(w===0)return;const T=e.get("WEBGL_multi_draw");if(T===null)for(let M=0;M<E.length;M++)y(E[M]/p,A[M],L[M]);else{T.multiDrawElementsInstancedWEBGL(s,A,0,h,E,0,L,0,w);let M=0;for(let X=0;X<w;X++)M+=A[X]*L[X];a.update(M,s,1)}}this.setMode=u,this.setIndex=d,this.render=g,this.renderInstances=y,this.renderMultiDraw=x,this.renderMultiDrawInstances=_}function db(o){const e={geometries:0,textures:0},a={frame:0,calls:0,triangles:0,points:0,lines:0};function s(h,p,d){switch(a.calls++,p){case o.TRIANGLES:a.triangles+=d*(h/3);break;case o.LINES:a.lines+=d*(h/2);break;case o.LINE_STRIP:a.lines+=d*(h-1);break;case o.LINE_LOOP:a.lines+=d*h;break;case o.POINTS:a.points+=d*h;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",p);break}}function u(){a.calls=0,a.triangles=0,a.points=0,a.lines=0}return{memory:e,render:a,programs:null,autoReset:!0,reset:u,update:s}}function pb(o,e,a){const s=new WeakMap,u=new ln;function h(p,d,g){const y=p.morphTargetInfluences,x=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,_=x!==void 0?x.length:0;let E=s.get(d);if(E===void 0||E.count!==_){let N=function(){q.dispose(),s.delete(d),d.removeEventListener("dispose",N)};var A=N;E!==void 0&&E.texture.dispose();const w=d.morphAttributes.position!==void 0,L=d.morphAttributes.normal!==void 0,T=d.morphAttributes.color!==void 0,M=d.morphAttributes.position||[],X=d.morphAttributes.normal||[],G=d.morphAttributes.color||[];let O=0;w===!0&&(O=1),L===!0&&(O=2),T===!0&&(O=3);let ft=d.attributes.position.count*O,Z=1;ft>e.maxTextureSize&&(Z=Math.ceil(ft/e.maxTextureSize),ft=e.maxTextureSize);const V=new Float32Array(ft*Z*4*_),q=new mS(V,ft,Z,_);q.type=Oa,q.needsUpdate=!0;const P=O*4;for(let k=0;k<_;k++){const yt=M[k],dt=X[k],Rt=G[k],gt=ft*Z*4*k;for(let Q=0;Q<yt.count;Q++){const ht=Q*P;w===!0&&(u.fromBufferAttribute(yt,Q),V[gt+ht+0]=u.x,V[gt+ht+1]=u.y,V[gt+ht+2]=u.z,V[gt+ht+3]=0),L===!0&&(u.fromBufferAttribute(dt,Q),V[gt+ht+4]=u.x,V[gt+ht+5]=u.y,V[gt+ht+6]=u.z,V[gt+ht+7]=0),T===!0&&(u.fromBufferAttribute(Rt,Q),V[gt+ht+8]=u.x,V[gt+ht+9]=u.y,V[gt+ht+10]=u.z,V[gt+ht+11]=Rt.itemSize===4?u.w:1)}}E={count:_,texture:q,size:new Ze(ft,Z)},s.set(d,E),d.addEventListener("dispose",N)}if(p.isInstancedMesh===!0&&p.morphTexture!==null)g.getUniforms().setValue(o,"morphTexture",p.morphTexture,a);else{let w=0;for(let T=0;T<y.length;T++)w+=y[T];const L=d.morphTargetsRelative?1:1-w;g.getUniforms().setValue(o,"morphTargetBaseInfluence",L),g.getUniforms().setValue(o,"morphTargetInfluences",y)}g.getUniforms().setValue(o,"morphTargetsTexture",E.texture,a),g.getUniforms().setValue(o,"morphTargetsTextureSize",E.size)}return{update:h}}function mb(o,e,a,s){let u=new WeakMap;function h(g){const y=s.render.frame,x=g.geometry,_=e.get(g,x);if(u.get(_)!==y&&(e.update(_),u.set(_,y)),g.isInstancedMesh&&(g.hasEventListener("dispose",d)===!1&&g.addEventListener("dispose",d),u.get(g)!==y&&(a.update(g.instanceMatrix,o.ARRAY_BUFFER),g.instanceColor!==null&&a.update(g.instanceColor,o.ARRAY_BUFFER),u.set(g,y))),g.isSkinnedMesh){const E=g.skeleton;u.get(E)!==y&&(E.update(),u.set(E,y))}return _}function p(){u=new WeakMap}function d(g){const y=g.target;y.removeEventListener("dispose",d),a.remove(y.instanceMatrix),y.instanceColor!==null&&a.remove(y.instanceColor)}return{update:h,dispose:p}}class bS extends li{constructor(e,a,s,u,h,p,d,g,y,x=nl){if(x!==nl&&x!==ll)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");s===void 0&&x===nl&&(s=Vs),s===void 0&&x===ll&&(s=ol),super(null,u,h,p,d,g,x,s,y),this.isDepthTexture=!0,this.image={width:e,height:a},this.magFilter=d!==void 0?d:Vi,this.minFilter=g!==void 0?g:Vi,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const a=super.toJSON(e);return this.compareFunction!==null&&(a.compareFunction=this.compareFunction),a}}const RS=new li,Sy=new bS(1,1),CS=new mS,wS=new tT,DS=new TS,xy=[],My=[],Ey=new Float32Array(16),Ty=new Float32Array(9),Ay=new Float32Array(4);function ml(o,e,a){const s=o[0];if(s<=0||s>0)return o;const u=e*a;let h=xy[u];if(h===void 0&&(h=new Float32Array(u),xy[u]=h),e!==0){s.toArray(h,0);for(let p=1,d=0;p!==e;++p)d+=a,o[p].toArray(h,d)}return h}function Bn(o,e){if(o.length!==e.length)return!1;for(let a=0,s=o.length;a<s;a++)if(o[a]!==e[a])return!1;return!0}function Fn(o,e){for(let a=0,s=e.length;a<s;a++)o[a]=e[a]}function Bf(o,e){let a=My[e];a===void 0&&(a=new Int32Array(e),My[e]=a);for(let s=0;s!==e;++s)a[s]=o.allocateTextureUnit();return a}function gb(o,e){const a=this.cache;a[0]!==e&&(o.uniform1f(this.addr,e),a[0]=e)}function vb(o,e){const a=this.cache;if(e.x!==void 0)(a[0]!==e.x||a[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),a[0]=e.x,a[1]=e.y);else{if(Bn(a,e))return;o.uniform2fv(this.addr,e),Fn(a,e)}}function _b(o,e){const a=this.cache;if(e.x!==void 0)(a[0]!==e.x||a[1]!==e.y||a[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),a[0]=e.x,a[1]=e.y,a[2]=e.z);else if(e.r!==void 0)(a[0]!==e.r||a[1]!==e.g||a[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),a[0]=e.r,a[1]=e.g,a[2]=e.b);else{if(Bn(a,e))return;o.uniform3fv(this.addr,e),Fn(a,e)}}function yb(o,e){const a=this.cache;if(e.x!==void 0)(a[0]!==e.x||a[1]!==e.y||a[2]!==e.z||a[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),a[0]=e.x,a[1]=e.y,a[2]=e.z,a[3]=e.w);else{if(Bn(a,e))return;o.uniform4fv(this.addr,e),Fn(a,e)}}function Sb(o,e){const a=this.cache,s=e.elements;if(s===void 0){if(Bn(a,e))return;o.uniformMatrix2fv(this.addr,!1,e),Fn(a,e)}else{if(Bn(a,s))return;Ay.set(s),o.uniformMatrix2fv(this.addr,!1,Ay),Fn(a,s)}}function xb(o,e){const a=this.cache,s=e.elements;if(s===void 0){if(Bn(a,e))return;o.uniformMatrix3fv(this.addr,!1,e),Fn(a,e)}else{if(Bn(a,s))return;Ty.set(s),o.uniformMatrix3fv(this.addr,!1,Ty),Fn(a,s)}}function Mb(o,e){const a=this.cache,s=e.elements;if(s===void 0){if(Bn(a,e))return;o.uniformMatrix4fv(this.addr,!1,e),Fn(a,e)}else{if(Bn(a,s))return;Ey.set(s),o.uniformMatrix4fv(this.addr,!1,Ey),Fn(a,s)}}function Eb(o,e){const a=this.cache;a[0]!==e&&(o.uniform1i(this.addr,e),a[0]=e)}function Tb(o,e){const a=this.cache;if(e.x!==void 0)(a[0]!==e.x||a[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),a[0]=e.x,a[1]=e.y);else{if(Bn(a,e))return;o.uniform2iv(this.addr,e),Fn(a,e)}}function Ab(o,e){const a=this.cache;if(e.x!==void 0)(a[0]!==e.x||a[1]!==e.y||a[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),a[0]=e.x,a[1]=e.y,a[2]=e.z);else{if(Bn(a,e))return;o.uniform3iv(this.addr,e),Fn(a,e)}}function bb(o,e){const a=this.cache;if(e.x!==void 0)(a[0]!==e.x||a[1]!==e.y||a[2]!==e.z||a[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),a[0]=e.x,a[1]=e.y,a[2]=e.z,a[3]=e.w);else{if(Bn(a,e))return;o.uniform4iv(this.addr,e),Fn(a,e)}}function Rb(o,e){const a=this.cache;a[0]!==e&&(o.uniform1ui(this.addr,e),a[0]=e)}function Cb(o,e){const a=this.cache;if(e.x!==void 0)(a[0]!==e.x||a[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),a[0]=e.x,a[1]=e.y);else{if(Bn(a,e))return;o.uniform2uiv(this.addr,e),Fn(a,e)}}function wb(o,e){const a=this.cache;if(e.x!==void 0)(a[0]!==e.x||a[1]!==e.y||a[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),a[0]=e.x,a[1]=e.y,a[2]=e.z);else{if(Bn(a,e))return;o.uniform3uiv(this.addr,e),Fn(a,e)}}function Db(o,e){const a=this.cache;if(e.x!==void 0)(a[0]!==e.x||a[1]!==e.y||a[2]!==e.z||a[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),a[0]=e.x,a[1]=e.y,a[2]=e.z,a[3]=e.w);else{if(Bn(a,e))return;o.uniform4uiv(this.addr,e),Fn(a,e)}}function Ub(o,e,a){const s=this.cache,u=a.allocateTextureUnit();s[0]!==u&&(o.uniform1i(this.addr,u),s[0]=u);let h;this.type===o.SAMPLER_2D_SHADOW?(Sy.compareFunction=hS,h=Sy):h=RS,a.setTexture2D(e||h,u)}function Nb(o,e,a){const s=this.cache,u=a.allocateTextureUnit();s[0]!==u&&(o.uniform1i(this.addr,u),s[0]=u),a.setTexture3D(e||wS,u)}function Lb(o,e,a){const s=this.cache,u=a.allocateTextureUnit();s[0]!==u&&(o.uniform1i(this.addr,u),s[0]=u),a.setTextureCube(e||DS,u)}function Ob(o,e,a){const s=this.cache,u=a.allocateTextureUnit();s[0]!==u&&(o.uniform1i(this.addr,u),s[0]=u),a.setTexture2DArray(e||CS,u)}function Pb(o){switch(o){case 5126:return gb;case 35664:return vb;case 35665:return _b;case 35666:return yb;case 35674:return Sb;case 35675:return xb;case 35676:return Mb;case 5124:case 35670:return Eb;case 35667:case 35671:return Tb;case 35668:case 35672:return Ab;case 35669:case 35673:return bb;case 5125:return Rb;case 36294:return Cb;case 36295:return wb;case 36296:return Db;case 35678:case 36198:case 36298:case 36306:case 35682:return Ub;case 35679:case 36299:case 36307:return Nb;case 35680:case 36300:case 36308:case 36293:return Lb;case 36289:case 36303:case 36311:case 36292:return Ob}}function zb(o,e){o.uniform1fv(this.addr,e)}function Ib(o,e){const a=ml(e,this.size,2);o.uniform2fv(this.addr,a)}function Bb(o,e){const a=ml(e,this.size,3);o.uniform3fv(this.addr,a)}function Fb(o,e){const a=ml(e,this.size,4);o.uniform4fv(this.addr,a)}function Hb(o,e){const a=ml(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,a)}function Gb(o,e){const a=ml(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,a)}function Vb(o,e){const a=ml(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,a)}function Xb(o,e){o.uniform1iv(this.addr,e)}function kb(o,e){o.uniform2iv(this.addr,e)}function Yb(o,e){o.uniform3iv(this.addr,e)}function qb(o,e){o.uniform4iv(this.addr,e)}function Wb(o,e){o.uniform1uiv(this.addr,e)}function jb(o,e){o.uniform2uiv(this.addr,e)}function Zb(o,e){o.uniform3uiv(this.addr,e)}function Kb(o,e){o.uniform4uiv(this.addr,e)}function Qb(o,e,a){const s=this.cache,u=e.length,h=Bf(a,u);Bn(s,h)||(o.uniform1iv(this.addr,h),Fn(s,h));for(let p=0;p!==u;++p)a.setTexture2D(e[p]||RS,h[p])}function Jb(o,e,a){const s=this.cache,u=e.length,h=Bf(a,u);Bn(s,h)||(o.uniform1iv(this.addr,h),Fn(s,h));for(let p=0;p!==u;++p)a.setTexture3D(e[p]||wS,h[p])}function $b(o,e,a){const s=this.cache,u=e.length,h=Bf(a,u);Bn(s,h)||(o.uniform1iv(this.addr,h),Fn(s,h));for(let p=0;p!==u;++p)a.setTextureCube(e[p]||DS,h[p])}function tR(o,e,a){const s=this.cache,u=e.length,h=Bf(a,u);Bn(s,h)||(o.uniform1iv(this.addr,h),Fn(s,h));for(let p=0;p!==u;++p)a.setTexture2DArray(e[p]||CS,h[p])}function eR(o){switch(o){case 5126:return zb;case 35664:return Ib;case 35665:return Bb;case 35666:return Fb;case 35674:return Hb;case 35675:return Gb;case 35676:return Vb;case 5124:case 35670:return Xb;case 35667:case 35671:return kb;case 35668:case 35672:return Yb;case 35669:case 35673:return qb;case 5125:return Wb;case 36294:return jb;case 36295:return Zb;case 36296:return Kb;case 35678:case 36198:case 36298:case 36306:case 35682:return Qb;case 35679:case 36299:case 36307:return Jb;case 35680:case 36300:case 36308:case 36293:return $b;case 36289:case 36303:case 36311:case 36292:return tR}}class nR{constructor(e,a,s){this.id=e,this.addr=s,this.cache=[],this.type=a.type,this.setValue=Pb(a.type)}}class iR{constructor(e,a,s){this.id=e,this.addr=s,this.cache=[],this.type=a.type,this.size=a.size,this.setValue=eR(a.type)}}class aR{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,a,s){const u=this.seq;for(let h=0,p=u.length;h!==p;++h){const d=u[h];d.setValue(e,a[d.id],s)}}}const Op=/(\w+)(\])?(\[|\.)?/g;function by(o,e){o.seq.push(e),o.map[e.id]=e}function rR(o,e,a){const s=o.name,u=s.length;for(Op.lastIndex=0;;){const h=Op.exec(s),p=Op.lastIndex;let d=h[1];const g=h[2]==="]",y=h[3];if(g&&(d=d|0),y===void 0||y==="["&&p+2===u){by(a,y===void 0?new nR(d,o,e):new iR(d,o,e));break}else{let _=a.map[d];_===void 0&&(_=new aR(d),by(a,_)),a=_}}}class Nf{constructor(e,a){this.seq=[],this.map={};const s=e.getProgramParameter(a,e.ACTIVE_UNIFORMS);for(let u=0;u<s;++u){const h=e.getActiveUniform(a,u),p=e.getUniformLocation(a,h.name);rR(h,p,this)}}setValue(e,a,s,u){const h=this.map[a];h!==void 0&&h.setValue(e,s,u)}setOptional(e,a,s){const u=a[s];u!==void 0&&this.setValue(e,s,u)}static upload(e,a,s,u){for(let h=0,p=a.length;h!==p;++h){const d=a[h],g=s[d.id];g.needsUpdate!==!1&&d.setValue(e,g.value,u)}}static seqWithValue(e,a){const s=[];for(let u=0,h=e.length;u!==h;++u){const p=e[u];p.id in a&&s.push(p)}return s}}function Ry(o,e,a){const s=o.createShader(e);return o.shaderSource(s,a),o.compileShader(s),s}const sR=37297;let oR=0;function lR(o,e){const a=o.split(`
`),s=[],u=Math.max(e-6,0),h=Math.min(e+6,a.length);for(let p=u;p<h;p++){const d=p+1;s.push(`${d===e?">":" "} ${d}: ${a[p]}`)}return s.join(`
`)}const Cy=new Ue;function uR(o){We._getMatrix(Cy,We.workingColorSpace,o);const e=`mat3( ${Cy.elements.map(a=>a.toFixed(4))} )`;switch(We.getTransfer(o)){case zf:return[e,"LinearTransferOETF"];case on:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function wy(o,e,a){const s=o.getShaderParameter(e,o.COMPILE_STATUS),u=o.getShaderInfoLog(e).trim();if(s&&u==="")return"";const h=/ERROR: 0:(\d+)/.exec(u);if(h){const p=parseInt(h[1]);return a.toUpperCase()+`

`+u+`

`+lR(o.getShaderSource(e),p)}else return u}function cR(o,e){const a=uR(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${a[1]}( vec4( value.rgb * ${a[0]}, value.a ) );`,"}"].join(`
`)}function fR(o,e){let a;switch(e){case dE:a="Linear";break;case pE:a="Reinhard";break;case mE:a="Cineon";break;case tS:a="ACESFilmic";break;case vE:a="AgX";break;case _E:a="Neutral";break;case gE:a="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),a="Linear"}return"vec3 "+o+"( vec3 color ) { return "+a+"ToneMapping( color ); }"}const Mf=new lt;function hR(){We.getLuminanceCoefficients(Mf);const o=Mf.x.toFixed(4),e=Mf.y.toFixed(4),a=Mf.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${a} );`,"	return dot( weights, rgb );","}"].join(`
`)}function dR(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Mu).join(`
`)}function pR(o){const e=[];for(const a in o){const s=o[a];s!==!1&&e.push("#define "+a+" "+s)}return e.join(`
`)}function mR(o,e){const a={},s=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let u=0;u<s;u++){const h=o.getActiveAttrib(e,u),p=h.name;let d=1;h.type===o.FLOAT_MAT2&&(d=2),h.type===o.FLOAT_MAT3&&(d=3),h.type===o.FLOAT_MAT4&&(d=4),a[p]={type:h.type,location:o.getAttribLocation(e,p),locationSize:d}}return a}function Mu(o){return o!==""}function Dy(o,e){const a=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,a).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Uy(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const gR=/^[ \t]*#include +<([\w\d./]+)>/gm;function bm(o){return o.replace(gR,_R)}const vR=new Map;function _R(o,e){let a=Pe[e];if(a===void 0){const s=vR.get(e);if(s!==void 0)a=Pe[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return bm(a)}const yR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ny(o){return o.replace(yR,SR)}function SR(o,e,a,s){let u="";for(let h=parseInt(e);h<parseInt(a);h++)u+=s.replace(/\[\s*i\s*\]/g,"[ "+h+" ]").replace(/UNROLLED_LOOP_INDEX/g,h);return u}function Ly(o){let e=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function xR(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===Jy?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===qM?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===ar&&(e="SHADOWMAP_TYPE_VSM"),e}function MR(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case rl:case sl:e="ENVMAP_TYPE_CUBE";break;case Pf:e="ENVMAP_TYPE_CUBE_UV";break}return e}function ER(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case sl:e="ENVMAP_MODE_REFRACTION";break}return e}function TR(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case $y:e="ENVMAP_BLENDING_MULTIPLY";break;case fE:e="ENVMAP_BLENDING_MIX";break;case hE:e="ENVMAP_BLENDING_ADD";break}return e}function AR(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const a=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,a),112)),texelHeight:s,maxMip:a}}function bR(o,e,a,s){const u=o.getContext(),h=a.defines;let p=a.vertexShader,d=a.fragmentShader;const g=xR(a),y=MR(a),x=ER(a),_=TR(a),E=AR(a),A=dR(a),w=pR(h),L=u.createProgram();let T,M,X=a.glslVersion?"#version "+a.glslVersion+`
`:"";a.isRawShaderMaterial?(T=["#define SHADER_TYPE "+a.shaderType,"#define SHADER_NAME "+a.shaderName,w].filter(Mu).join(`
`),T.length>0&&(T+=`
`),M=["#define SHADER_TYPE "+a.shaderType,"#define SHADER_NAME "+a.shaderName,w].filter(Mu).join(`
`),M.length>0&&(M+=`
`)):(T=[Ly(a),"#define SHADER_TYPE "+a.shaderType,"#define SHADER_NAME "+a.shaderName,w,a.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",a.batching?"#define USE_BATCHING":"",a.batchingColor?"#define USE_BATCHING_COLOR":"",a.instancing?"#define USE_INSTANCING":"",a.instancingColor?"#define USE_INSTANCING_COLOR":"",a.instancingMorph?"#define USE_INSTANCING_MORPH":"",a.useFog&&a.fog?"#define USE_FOG":"",a.useFog&&a.fogExp2?"#define FOG_EXP2":"",a.map?"#define USE_MAP":"",a.envMap?"#define USE_ENVMAP":"",a.envMap?"#define "+x:"",a.lightMap?"#define USE_LIGHTMAP":"",a.aoMap?"#define USE_AOMAP":"",a.bumpMap?"#define USE_BUMPMAP":"",a.normalMap?"#define USE_NORMALMAP":"",a.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",a.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",a.displacementMap?"#define USE_DISPLACEMENTMAP":"",a.emissiveMap?"#define USE_EMISSIVEMAP":"",a.anisotropy?"#define USE_ANISOTROPY":"",a.anisotropyMap?"#define USE_ANISOTROPYMAP":"",a.clearcoatMap?"#define USE_CLEARCOATMAP":"",a.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",a.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",a.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",a.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",a.specularMap?"#define USE_SPECULARMAP":"",a.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",a.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",a.roughnessMap?"#define USE_ROUGHNESSMAP":"",a.metalnessMap?"#define USE_METALNESSMAP":"",a.alphaMap?"#define USE_ALPHAMAP":"",a.alphaHash?"#define USE_ALPHAHASH":"",a.transmission?"#define USE_TRANSMISSION":"",a.transmissionMap?"#define USE_TRANSMISSIONMAP":"",a.thicknessMap?"#define USE_THICKNESSMAP":"",a.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",a.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",a.mapUv?"#define MAP_UV "+a.mapUv:"",a.alphaMapUv?"#define ALPHAMAP_UV "+a.alphaMapUv:"",a.lightMapUv?"#define LIGHTMAP_UV "+a.lightMapUv:"",a.aoMapUv?"#define AOMAP_UV "+a.aoMapUv:"",a.emissiveMapUv?"#define EMISSIVEMAP_UV "+a.emissiveMapUv:"",a.bumpMapUv?"#define BUMPMAP_UV "+a.bumpMapUv:"",a.normalMapUv?"#define NORMALMAP_UV "+a.normalMapUv:"",a.displacementMapUv?"#define DISPLACEMENTMAP_UV "+a.displacementMapUv:"",a.metalnessMapUv?"#define METALNESSMAP_UV "+a.metalnessMapUv:"",a.roughnessMapUv?"#define ROUGHNESSMAP_UV "+a.roughnessMapUv:"",a.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+a.anisotropyMapUv:"",a.clearcoatMapUv?"#define CLEARCOATMAP_UV "+a.clearcoatMapUv:"",a.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+a.clearcoatNormalMapUv:"",a.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+a.clearcoatRoughnessMapUv:"",a.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+a.iridescenceMapUv:"",a.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+a.iridescenceThicknessMapUv:"",a.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+a.sheenColorMapUv:"",a.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+a.sheenRoughnessMapUv:"",a.specularMapUv?"#define SPECULARMAP_UV "+a.specularMapUv:"",a.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+a.specularColorMapUv:"",a.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+a.specularIntensityMapUv:"",a.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+a.transmissionMapUv:"",a.thicknessMapUv?"#define THICKNESSMAP_UV "+a.thicknessMapUv:"",a.vertexTangents&&a.flatShading===!1?"#define USE_TANGENT":"",a.vertexColors?"#define USE_COLOR":"",a.vertexAlphas?"#define USE_COLOR_ALPHA":"",a.vertexUv1s?"#define USE_UV1":"",a.vertexUv2s?"#define USE_UV2":"",a.vertexUv3s?"#define USE_UV3":"",a.pointsUvs?"#define USE_POINTS_UV":"",a.flatShading?"#define FLAT_SHADED":"",a.skinning?"#define USE_SKINNING":"",a.morphTargets?"#define USE_MORPHTARGETS":"",a.morphNormals&&a.flatShading===!1?"#define USE_MORPHNORMALS":"",a.morphColors?"#define USE_MORPHCOLORS":"",a.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+a.morphTextureStride:"",a.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+a.morphTargetsCount:"",a.doubleSided?"#define DOUBLE_SIDED":"",a.flipSided?"#define FLIP_SIDED":"",a.shadowMapEnabled?"#define USE_SHADOWMAP":"",a.shadowMapEnabled?"#define "+g:"",a.sizeAttenuation?"#define USE_SIZEATTENUATION":"",a.numLightProbes>0?"#define USE_LIGHT_PROBES":"",a.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",a.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Mu).join(`
`),M=[Ly(a),"#define SHADER_TYPE "+a.shaderType,"#define SHADER_NAME "+a.shaderName,w,a.useFog&&a.fog?"#define USE_FOG":"",a.useFog&&a.fogExp2?"#define FOG_EXP2":"",a.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",a.map?"#define USE_MAP":"",a.matcap?"#define USE_MATCAP":"",a.envMap?"#define USE_ENVMAP":"",a.envMap?"#define "+y:"",a.envMap?"#define "+x:"",a.envMap?"#define "+_:"",E?"#define CUBEUV_TEXEL_WIDTH "+E.texelWidth:"",E?"#define CUBEUV_TEXEL_HEIGHT "+E.texelHeight:"",E?"#define CUBEUV_MAX_MIP "+E.maxMip+".0":"",a.lightMap?"#define USE_LIGHTMAP":"",a.aoMap?"#define USE_AOMAP":"",a.bumpMap?"#define USE_BUMPMAP":"",a.normalMap?"#define USE_NORMALMAP":"",a.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",a.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",a.emissiveMap?"#define USE_EMISSIVEMAP":"",a.anisotropy?"#define USE_ANISOTROPY":"",a.anisotropyMap?"#define USE_ANISOTROPYMAP":"",a.clearcoat?"#define USE_CLEARCOAT":"",a.clearcoatMap?"#define USE_CLEARCOATMAP":"",a.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",a.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",a.dispersion?"#define USE_DISPERSION":"",a.iridescence?"#define USE_IRIDESCENCE":"",a.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",a.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",a.specularMap?"#define USE_SPECULARMAP":"",a.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",a.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",a.roughnessMap?"#define USE_ROUGHNESSMAP":"",a.metalnessMap?"#define USE_METALNESSMAP":"",a.alphaMap?"#define USE_ALPHAMAP":"",a.alphaTest?"#define USE_ALPHATEST":"",a.alphaHash?"#define USE_ALPHAHASH":"",a.sheen?"#define USE_SHEEN":"",a.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",a.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",a.transmission?"#define USE_TRANSMISSION":"",a.transmissionMap?"#define USE_TRANSMISSIONMAP":"",a.thicknessMap?"#define USE_THICKNESSMAP":"",a.vertexTangents&&a.flatShading===!1?"#define USE_TANGENT":"",a.vertexColors||a.instancingColor||a.batchingColor?"#define USE_COLOR":"",a.vertexAlphas?"#define USE_COLOR_ALPHA":"",a.vertexUv1s?"#define USE_UV1":"",a.vertexUv2s?"#define USE_UV2":"",a.vertexUv3s?"#define USE_UV3":"",a.pointsUvs?"#define USE_POINTS_UV":"",a.gradientMap?"#define USE_GRADIENTMAP":"",a.flatShading?"#define FLAT_SHADED":"",a.doubleSided?"#define DOUBLE_SIDED":"",a.flipSided?"#define FLIP_SIDED":"",a.shadowMapEnabled?"#define USE_SHADOWMAP":"",a.shadowMapEnabled?"#define "+g:"",a.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",a.numLightProbes>0?"#define USE_LIGHT_PROBES":"",a.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",a.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",a.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",a.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",a.toneMapping!==Zr?"#define TONE_MAPPING":"",a.toneMapping!==Zr?Pe.tonemapping_pars_fragment:"",a.toneMapping!==Zr?fR("toneMapping",a.toneMapping):"",a.dithering?"#define DITHERING":"",a.opaque?"#define OPAQUE":"",Pe.colorspace_pars_fragment,cR("linearToOutputTexel",a.outputColorSpace),hR(),a.useDepthPacking?"#define DEPTH_PACKING "+a.depthPacking:"",`
`].filter(Mu).join(`
`)),p=bm(p),p=Dy(p,a),p=Uy(p,a),d=bm(d),d=Dy(d,a),d=Uy(d,a),p=Ny(p),d=Ny(d),a.isRawShaderMaterial!==!0&&(X=`#version 300 es
`,T=[A,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+T,M=["#define varying in",a.glslVersion===Y_?"":"layout(location = 0) out highp vec4 pc_fragColor;",a.glslVersion===Y_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+M);const G=X+T+p,O=X+M+d,ft=Ry(u,u.VERTEX_SHADER,G),Z=Ry(u,u.FRAGMENT_SHADER,O);u.attachShader(L,ft),u.attachShader(L,Z),a.index0AttributeName!==void 0?u.bindAttribLocation(L,0,a.index0AttributeName):a.morphTargets===!0&&u.bindAttribLocation(L,0,"position"),u.linkProgram(L);function V(k){if(o.debug.checkShaderErrors){const yt=u.getProgramInfoLog(L).trim(),dt=u.getShaderInfoLog(ft).trim(),Rt=u.getShaderInfoLog(Z).trim();let gt=!0,Q=!0;if(u.getProgramParameter(L,u.LINK_STATUS)===!1)if(gt=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(u,L,ft,Z);else{const ht=wy(u,ft,"vertex"),at=wy(u,Z,"fragment");console.error("THREE.WebGLProgram: Shader Error "+u.getError()+" - VALIDATE_STATUS "+u.getProgramParameter(L,u.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+yt+`
`+ht+`
`+at)}else yt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",yt):(dt===""||Rt==="")&&(Q=!1);Q&&(k.diagnostics={runnable:gt,programLog:yt,vertexShader:{log:dt,prefix:T},fragmentShader:{log:Rt,prefix:M}})}u.deleteShader(ft),u.deleteShader(Z),q=new Nf(u,L),P=mR(u,L)}let q;this.getUniforms=function(){return q===void 0&&V(this),q};let P;this.getAttributes=function(){return P===void 0&&V(this),P};let N=a.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=u.getProgramParameter(L,sR)),N},this.destroy=function(){s.releaseStatesOfProgram(this),u.deleteProgram(L),this.program=void 0},this.type=a.shaderType,this.name=a.shaderName,this.id=oR++,this.cacheKey=e,this.usedTimes=1,this.program=L,this.vertexShader=ft,this.fragmentShader=Z,this}let RR=0;class CR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const a=e.vertexShader,s=e.fragmentShader,u=this._getShaderStage(a),h=this._getShaderStage(s),p=this._getShaderCacheForMaterial(e);return p.has(u)===!1&&(p.add(u),u.usedTimes++),p.has(h)===!1&&(p.add(h),h.usedTimes++),this}remove(e){const a=this.materialCache.get(e);for(const s of a)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const a=this.materialCache;let s=a.get(e);return s===void 0&&(s=new Set,a.set(e,s)),s}_getShaderStage(e){const a=this.shaderCache;let s=a.get(e);return s===void 0&&(s=new wR(e),a.set(e,s)),s}}class wR{constructor(e){this.id=RR++,this.code=e,this.usedTimes=0}}function DR(o,e,a,s,u,h,p){const d=new vS,g=new CR,y=new Set,x=[],_=u.logarithmicDepthBuffer,E=u.vertexTextures;let A=u.precision;const w={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function L(P){return y.add(P),P===0?"uv":`uv${P}`}function T(P,N,k,yt,dt){const Rt=yt.fog,gt=dt.geometry,Q=P.isMeshStandardMaterial?yt.environment:null,ht=(P.isMeshStandardMaterial?a:e).get(P.envMap||Q),at=ht&&ht.mapping===Pf?ht.image.height:null,wt=w[P.type];P.precision!==null&&(A=u.getMaxPrecision(P.precision),A!==P.precision&&console.warn("THREE.WebGLProgram.getParameters:",P.precision,"not supported, using",A,"instead."));const Nt=gt.morphAttributes.position||gt.morphAttributes.normal||gt.morphAttributes.color,Jt=Nt!==void 0?Nt.length:0;let pe=0;gt.morphAttributes.position!==void 0&&(pe=1),gt.morphAttributes.normal!==void 0&&(pe=2),gt.morphAttributes.color!==void 0&&(pe=3);let be,U,J,At;if(wt){const Le=Na[wt];be=Le.vertexShader,U=Le.fragmentShader}else be=P.vertexShader,U=P.fragmentShader,g.update(P),J=g.getVertexShaderID(P),At=g.getFragmentShaderID(P);const vt=o.getRenderTarget(),zt=o.state.buffers.depth.getReversed(),Ft=dt.isInstancedMesh===!0,jt=dt.isBatchedMesh===!0,Ot=!!P.map,Bt=!!P.matcap,ve=!!ht,j=!!P.aoMap,un=!!P.lightMap,Se=!!P.bumpMap,ue=!!P.normalMap,Ht=!!P.displacementMap,we=!!P.emissiveMap,le=!!P.metalnessMap,z=!!P.roughnessMap,C=P.anisotropy>0,ot=P.clearcoat>0,xt=P.dispersion>0,Dt=P.iridescence>0,Mt=P.sheen>0,ne=P.transmission>0,St=C&&!!P.anisotropyMap,Ut=ot&&!!P.clearcoatMap,de=ot&&!!P.clearcoatNormalMap,bt=ot&&!!P.clearcoatRoughnessMap,Yt=Dt&&!!P.iridescenceMap,re=Dt&&!!P.iridescenceThicknessMap,me=Mt&&!!P.sheenColorMap,It=Mt&&!!P.sheenRoughnessMap,Vt=!!P.specularMap,_e=!!P.specularColorMap,Ge=!!P.specularIntensityMap,W=ne&&!!P.transmissionMap,Xt=ne&&!!P.thicknessMap,_t=!!P.gradientMap,Ct=!!P.alphaMap,qt=P.alphaTest>0,Kt=!!P.alphaHash,ye=!!P.extensions;let an=Zr;P.toneMapped&&(vt===null||vt.isXRRenderTarget===!0)&&(an=o.toneMapping);const En={shaderID:wt,shaderType:P.type,shaderName:P.name,vertexShader:be,fragmentShader:U,defines:P.defines,customVertexShaderID:J,customFragmentShaderID:At,isRawShaderMaterial:P.isRawShaderMaterial===!0,glslVersion:P.glslVersion,precision:A,batching:jt,batchingColor:jt&&dt._colorsTexture!==null,instancing:Ft,instancingColor:Ft&&dt.instanceColor!==null,instancingMorph:Ft&&dt.morphTexture!==null,supportsVertexTextures:E,outputColorSpace:vt===null?o.outputColorSpace:vt.isXRRenderTarget===!0?vt.texture.colorSpace:cl,alphaToCoverage:!!P.alphaToCoverage,map:Ot,matcap:Bt,envMap:ve,envMapMode:ve&&ht.mapping,envMapCubeUVHeight:at,aoMap:j,lightMap:un,bumpMap:Se,normalMap:ue,displacementMap:E&&Ht,emissiveMap:we,normalMapObjectSpace:ue&&P.normalMapType===ME,normalMapTangentSpace:ue&&P.normalMapType===fS,metalnessMap:le,roughnessMap:z,anisotropy:C,anisotropyMap:St,clearcoat:ot,clearcoatMap:Ut,clearcoatNormalMap:de,clearcoatRoughnessMap:bt,dispersion:xt,iridescence:Dt,iridescenceMap:Yt,iridescenceThicknessMap:re,sheen:Mt,sheenColorMap:me,sheenRoughnessMap:It,specularMap:Vt,specularColorMap:_e,specularIntensityMap:Ge,transmission:ne,transmissionMap:W,thicknessMap:Xt,gradientMap:_t,opaque:P.transparent===!1&&P.blending===el&&P.alphaToCoverage===!1,alphaMap:Ct,alphaTest:qt,alphaHash:Kt,combine:P.combine,mapUv:Ot&&L(P.map.channel),aoMapUv:j&&L(P.aoMap.channel),lightMapUv:un&&L(P.lightMap.channel),bumpMapUv:Se&&L(P.bumpMap.channel),normalMapUv:ue&&L(P.normalMap.channel),displacementMapUv:Ht&&L(P.displacementMap.channel),emissiveMapUv:we&&L(P.emissiveMap.channel),metalnessMapUv:le&&L(P.metalnessMap.channel),roughnessMapUv:z&&L(P.roughnessMap.channel),anisotropyMapUv:St&&L(P.anisotropyMap.channel),clearcoatMapUv:Ut&&L(P.clearcoatMap.channel),clearcoatNormalMapUv:de&&L(P.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:bt&&L(P.clearcoatRoughnessMap.channel),iridescenceMapUv:Yt&&L(P.iridescenceMap.channel),iridescenceThicknessMapUv:re&&L(P.iridescenceThicknessMap.channel),sheenColorMapUv:me&&L(P.sheenColorMap.channel),sheenRoughnessMapUv:It&&L(P.sheenRoughnessMap.channel),specularMapUv:Vt&&L(P.specularMap.channel),specularColorMapUv:_e&&L(P.specularColorMap.channel),specularIntensityMapUv:Ge&&L(P.specularIntensityMap.channel),transmissionMapUv:W&&L(P.transmissionMap.channel),thicknessMapUv:Xt&&L(P.thicknessMap.channel),alphaMapUv:Ct&&L(P.alphaMap.channel),vertexTangents:!!gt.attributes.tangent&&(ue||C),vertexColors:P.vertexColors,vertexAlphas:P.vertexColors===!0&&!!gt.attributes.color&&gt.attributes.color.itemSize===4,pointsUvs:dt.isPoints===!0&&!!gt.attributes.uv&&(Ot||Ct),fog:!!Rt,useFog:P.fog===!0,fogExp2:!!Rt&&Rt.isFogExp2,flatShading:P.flatShading===!0,sizeAttenuation:P.sizeAttenuation===!0,logarithmicDepthBuffer:_,reverseDepthBuffer:zt,skinning:dt.isSkinnedMesh===!0,morphTargets:gt.morphAttributes.position!==void 0,morphNormals:gt.morphAttributes.normal!==void 0,morphColors:gt.morphAttributes.color!==void 0,morphTargetsCount:Jt,morphTextureStride:pe,numDirLights:N.directional.length,numPointLights:N.point.length,numSpotLights:N.spot.length,numSpotLightMaps:N.spotLightMap.length,numRectAreaLights:N.rectArea.length,numHemiLights:N.hemi.length,numDirLightShadows:N.directionalShadowMap.length,numPointLightShadows:N.pointShadowMap.length,numSpotLightShadows:N.spotShadowMap.length,numSpotLightShadowsWithMaps:N.numSpotLightShadowsWithMaps,numLightProbes:N.numLightProbes,numClippingPlanes:p.numPlanes,numClipIntersection:p.numIntersection,dithering:P.dithering,shadowMapEnabled:o.shadowMap.enabled&&k.length>0,shadowMapType:o.shadowMap.type,toneMapping:an,decodeVideoTexture:Ot&&P.map.isVideoTexture===!0&&We.getTransfer(P.map.colorSpace)===on,decodeVideoTextureEmissive:we&&P.emissiveMap.isVideoTexture===!0&&We.getTransfer(P.emissiveMap.colorSpace)===on,premultipliedAlpha:P.premultipliedAlpha,doubleSided:P.side===rr,flipSided:P.side===bi,useDepthPacking:P.depthPacking>=0,depthPacking:P.depthPacking||0,index0AttributeName:P.index0AttributeName,extensionClipCullDistance:ye&&P.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ye&&P.extensions.multiDraw===!0||jt)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:P.customProgramCacheKey()};return En.vertexUv1s=y.has(1),En.vertexUv2s=y.has(2),En.vertexUv3s=y.has(3),y.clear(),En}function M(P){const N=[];if(P.shaderID?N.push(P.shaderID):(N.push(P.customVertexShaderID),N.push(P.customFragmentShaderID)),P.defines!==void 0)for(const k in P.defines)N.push(k),N.push(P.defines[k]);return P.isRawShaderMaterial===!1&&(X(N,P),G(N,P),N.push(o.outputColorSpace)),N.push(P.customProgramCacheKey),N.join()}function X(P,N){P.push(N.precision),P.push(N.outputColorSpace),P.push(N.envMapMode),P.push(N.envMapCubeUVHeight),P.push(N.mapUv),P.push(N.alphaMapUv),P.push(N.lightMapUv),P.push(N.aoMapUv),P.push(N.bumpMapUv),P.push(N.normalMapUv),P.push(N.displacementMapUv),P.push(N.emissiveMapUv),P.push(N.metalnessMapUv),P.push(N.roughnessMapUv),P.push(N.anisotropyMapUv),P.push(N.clearcoatMapUv),P.push(N.clearcoatNormalMapUv),P.push(N.clearcoatRoughnessMapUv),P.push(N.iridescenceMapUv),P.push(N.iridescenceThicknessMapUv),P.push(N.sheenColorMapUv),P.push(N.sheenRoughnessMapUv),P.push(N.specularMapUv),P.push(N.specularColorMapUv),P.push(N.specularIntensityMapUv),P.push(N.transmissionMapUv),P.push(N.thicknessMapUv),P.push(N.combine),P.push(N.fogExp2),P.push(N.sizeAttenuation),P.push(N.morphTargetsCount),P.push(N.morphAttributeCount),P.push(N.numDirLights),P.push(N.numPointLights),P.push(N.numSpotLights),P.push(N.numSpotLightMaps),P.push(N.numHemiLights),P.push(N.numRectAreaLights),P.push(N.numDirLightShadows),P.push(N.numPointLightShadows),P.push(N.numSpotLightShadows),P.push(N.numSpotLightShadowsWithMaps),P.push(N.numLightProbes),P.push(N.shadowMapType),P.push(N.toneMapping),P.push(N.numClippingPlanes),P.push(N.numClipIntersection),P.push(N.depthPacking)}function G(P,N){d.disableAll(),N.supportsVertexTextures&&d.enable(0),N.instancing&&d.enable(1),N.instancingColor&&d.enable(2),N.instancingMorph&&d.enable(3),N.matcap&&d.enable(4),N.envMap&&d.enable(5),N.normalMapObjectSpace&&d.enable(6),N.normalMapTangentSpace&&d.enable(7),N.clearcoat&&d.enable(8),N.iridescence&&d.enable(9),N.alphaTest&&d.enable(10),N.vertexColors&&d.enable(11),N.vertexAlphas&&d.enable(12),N.vertexUv1s&&d.enable(13),N.vertexUv2s&&d.enable(14),N.vertexUv3s&&d.enable(15),N.vertexTangents&&d.enable(16),N.anisotropy&&d.enable(17),N.alphaHash&&d.enable(18),N.batching&&d.enable(19),N.dispersion&&d.enable(20),N.batchingColor&&d.enable(21),P.push(d.mask),d.disableAll(),N.fog&&d.enable(0),N.useFog&&d.enable(1),N.flatShading&&d.enable(2),N.logarithmicDepthBuffer&&d.enable(3),N.reverseDepthBuffer&&d.enable(4),N.skinning&&d.enable(5),N.morphTargets&&d.enable(6),N.morphNormals&&d.enable(7),N.morphColors&&d.enable(8),N.premultipliedAlpha&&d.enable(9),N.shadowMapEnabled&&d.enable(10),N.doubleSided&&d.enable(11),N.flipSided&&d.enable(12),N.useDepthPacking&&d.enable(13),N.dithering&&d.enable(14),N.transmission&&d.enable(15),N.sheen&&d.enable(16),N.opaque&&d.enable(17),N.pointsUvs&&d.enable(18),N.decodeVideoTexture&&d.enable(19),N.decodeVideoTextureEmissive&&d.enable(20),N.alphaToCoverage&&d.enable(21),P.push(d.mask)}function O(P){const N=w[P.type];let k;if(N){const yt=Na[N];k=hT.clone(yt.uniforms)}else k=P.uniforms;return k}function ft(P,N){let k;for(let yt=0,dt=x.length;yt<dt;yt++){const Rt=x[yt];if(Rt.cacheKey===N){k=Rt,++k.usedTimes;break}}return k===void 0&&(k=new bR(o,N,P,h),x.push(k)),k}function Z(P){if(--P.usedTimes===0){const N=x.indexOf(P);x[N]=x[x.length-1],x.pop(),P.destroy()}}function V(P){g.remove(P)}function q(){g.dispose()}return{getParameters:T,getProgramCacheKey:M,getUniforms:O,acquireProgram:ft,releaseProgram:Z,releaseShaderCache:V,programs:x,dispose:q}}function UR(){let o=new WeakMap;function e(p){return o.has(p)}function a(p){let d=o.get(p);return d===void 0&&(d={},o.set(p,d)),d}function s(p){o.delete(p)}function u(p,d,g){o.get(p)[d]=g}function h(){o=new WeakMap}return{has:e,get:a,remove:s,update:u,dispose:h}}function NR(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function Oy(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function Py(){const o=[];let e=0;const a=[],s=[],u=[];function h(){e=0,a.length=0,s.length=0,u.length=0}function p(_,E,A,w,L,T){let M=o[e];return M===void 0?(M={id:_.id,object:_,geometry:E,material:A,groupOrder:w,renderOrder:_.renderOrder,z:L,group:T},o[e]=M):(M.id=_.id,M.object=_,M.geometry=E,M.material=A,M.groupOrder=w,M.renderOrder=_.renderOrder,M.z=L,M.group=T),e++,M}function d(_,E,A,w,L,T){const M=p(_,E,A,w,L,T);A.transmission>0?s.push(M):A.transparent===!0?u.push(M):a.push(M)}function g(_,E,A,w,L,T){const M=p(_,E,A,w,L,T);A.transmission>0?s.unshift(M):A.transparent===!0?u.unshift(M):a.unshift(M)}function y(_,E){a.length>1&&a.sort(_||NR),s.length>1&&s.sort(E||Oy),u.length>1&&u.sort(E||Oy)}function x(){for(let _=e,E=o.length;_<E;_++){const A=o[_];if(A.id===null)break;A.id=null,A.object=null,A.geometry=null,A.material=null,A.group=null}}return{opaque:a,transmissive:s,transparent:u,init:h,push:d,unshift:g,finish:x,sort:y}}function LR(){let o=new WeakMap;function e(s,u){const h=o.get(s);let p;return h===void 0?(p=new Py,o.set(s,[p])):u>=h.length?(p=new Py,h.push(p)):p=h[u],p}function a(){o=new WeakMap}return{get:e,dispose:a}}function OR(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let a;switch(e.type){case"DirectionalLight":a={direction:new lt,color:new Ne};break;case"SpotLight":a={position:new lt,direction:new lt,color:new Ne,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":a={position:new lt,color:new Ne,distance:0,decay:0};break;case"HemisphereLight":a={direction:new lt,skyColor:new Ne,groundColor:new Ne};break;case"RectAreaLight":a={color:new Ne,position:new lt,halfWidth:new lt,halfHeight:new lt};break}return o[e.id]=a,a}}}function PR(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let a;switch(e.type){case"DirectionalLight":a={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze};break;case"SpotLight":a={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze};break;case"PointLight":a={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=a,a}}}let zR=0;function IR(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function BR(o){const e=new OR,a=PR(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let y=0;y<9;y++)s.probe.push(new lt);const u=new lt,h=new hn,p=new hn;function d(y){let x=0,_=0,E=0;for(let P=0;P<9;P++)s.probe[P].set(0,0,0);let A=0,w=0,L=0,T=0,M=0,X=0,G=0,O=0,ft=0,Z=0,V=0;y.sort(IR);for(let P=0,N=y.length;P<N;P++){const k=y[P],yt=k.color,dt=k.intensity,Rt=k.distance,gt=k.shadow&&k.shadow.map?k.shadow.map.texture:null;if(k.isAmbientLight)x+=yt.r*dt,_+=yt.g*dt,E+=yt.b*dt;else if(k.isLightProbe){for(let Q=0;Q<9;Q++)s.probe[Q].addScaledVector(k.sh.coefficients[Q],dt);V++}else if(k.isDirectionalLight){const Q=e.get(k);if(Q.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const ht=k.shadow,at=a.get(k);at.shadowIntensity=ht.intensity,at.shadowBias=ht.bias,at.shadowNormalBias=ht.normalBias,at.shadowRadius=ht.radius,at.shadowMapSize=ht.mapSize,s.directionalShadow[A]=at,s.directionalShadowMap[A]=gt,s.directionalShadowMatrix[A]=k.shadow.matrix,X++}s.directional[A]=Q,A++}else if(k.isSpotLight){const Q=e.get(k);Q.position.setFromMatrixPosition(k.matrixWorld),Q.color.copy(yt).multiplyScalar(dt),Q.distance=Rt,Q.coneCos=Math.cos(k.angle),Q.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),Q.decay=k.decay,s.spot[L]=Q;const ht=k.shadow;if(k.map&&(s.spotLightMap[ft]=k.map,ft++,ht.updateMatrices(k),k.castShadow&&Z++),s.spotLightMatrix[L]=ht.matrix,k.castShadow){const at=a.get(k);at.shadowIntensity=ht.intensity,at.shadowBias=ht.bias,at.shadowNormalBias=ht.normalBias,at.shadowRadius=ht.radius,at.shadowMapSize=ht.mapSize,s.spotShadow[L]=at,s.spotShadowMap[L]=gt,O++}L++}else if(k.isRectAreaLight){const Q=e.get(k);Q.color.copy(yt).multiplyScalar(dt),Q.halfWidth.set(k.width*.5,0,0),Q.halfHeight.set(0,k.height*.5,0),s.rectArea[T]=Q,T++}else if(k.isPointLight){const Q=e.get(k);if(Q.color.copy(k.color).multiplyScalar(k.intensity),Q.distance=k.distance,Q.decay=k.decay,k.castShadow){const ht=k.shadow,at=a.get(k);at.shadowIntensity=ht.intensity,at.shadowBias=ht.bias,at.shadowNormalBias=ht.normalBias,at.shadowRadius=ht.radius,at.shadowMapSize=ht.mapSize,at.shadowCameraNear=ht.camera.near,at.shadowCameraFar=ht.camera.far,s.pointShadow[w]=at,s.pointShadowMap[w]=gt,s.pointShadowMatrix[w]=k.shadow.matrix,G++}s.point[w]=Q,w++}else if(k.isHemisphereLight){const Q=e.get(k);Q.skyColor.copy(k.color).multiplyScalar(dt),Q.groundColor.copy(k.groundColor).multiplyScalar(dt),s.hemi[M]=Q,M++}}T>0&&(o.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Qt.LTC_FLOAT_1,s.rectAreaLTC2=Qt.LTC_FLOAT_2):(s.rectAreaLTC1=Qt.LTC_HALF_1,s.rectAreaLTC2=Qt.LTC_HALF_2)),s.ambient[0]=x,s.ambient[1]=_,s.ambient[2]=E;const q=s.hash;(q.directionalLength!==A||q.pointLength!==w||q.spotLength!==L||q.rectAreaLength!==T||q.hemiLength!==M||q.numDirectionalShadows!==X||q.numPointShadows!==G||q.numSpotShadows!==O||q.numSpotMaps!==ft||q.numLightProbes!==V)&&(s.directional.length=A,s.spot.length=L,s.rectArea.length=T,s.point.length=w,s.hemi.length=M,s.directionalShadow.length=X,s.directionalShadowMap.length=X,s.pointShadow.length=G,s.pointShadowMap.length=G,s.spotShadow.length=O,s.spotShadowMap.length=O,s.directionalShadowMatrix.length=X,s.pointShadowMatrix.length=G,s.spotLightMatrix.length=O+ft-Z,s.spotLightMap.length=ft,s.numSpotLightShadowsWithMaps=Z,s.numLightProbes=V,q.directionalLength=A,q.pointLength=w,q.spotLength=L,q.rectAreaLength=T,q.hemiLength=M,q.numDirectionalShadows=X,q.numPointShadows=G,q.numSpotShadows=O,q.numSpotMaps=ft,q.numLightProbes=V,s.version=zR++)}function g(y,x){let _=0,E=0,A=0,w=0,L=0;const T=x.matrixWorldInverse;for(let M=0,X=y.length;M<X;M++){const G=y[M];if(G.isDirectionalLight){const O=s.directional[_];O.direction.setFromMatrixPosition(G.matrixWorld),u.setFromMatrixPosition(G.target.matrixWorld),O.direction.sub(u),O.direction.transformDirection(T),_++}else if(G.isSpotLight){const O=s.spot[A];O.position.setFromMatrixPosition(G.matrixWorld),O.position.applyMatrix4(T),O.direction.setFromMatrixPosition(G.matrixWorld),u.setFromMatrixPosition(G.target.matrixWorld),O.direction.sub(u),O.direction.transformDirection(T),A++}else if(G.isRectAreaLight){const O=s.rectArea[w];O.position.setFromMatrixPosition(G.matrixWorld),O.position.applyMatrix4(T),p.identity(),h.copy(G.matrixWorld),h.premultiply(T),p.extractRotation(h),O.halfWidth.set(G.width*.5,0,0),O.halfHeight.set(0,G.height*.5,0),O.halfWidth.applyMatrix4(p),O.halfHeight.applyMatrix4(p),w++}else if(G.isPointLight){const O=s.point[E];O.position.setFromMatrixPosition(G.matrixWorld),O.position.applyMatrix4(T),E++}else if(G.isHemisphereLight){const O=s.hemi[L];O.direction.setFromMatrixPosition(G.matrixWorld),O.direction.transformDirection(T),L++}}}return{setup:d,setupView:g,state:s}}function zy(o){const e=new BR(o),a=[],s=[];function u(x){y.camera=x,a.length=0,s.length=0}function h(x){a.push(x)}function p(x){s.push(x)}function d(){e.setup(a)}function g(x){e.setupView(a,x)}const y={lightsArray:a,shadowsArray:s,camera:null,lights:e,transmissionRenderTarget:{}};return{init:u,state:y,setupLights:d,setupLightsView:g,pushLight:h,pushShadow:p}}function FR(o){let e=new WeakMap;function a(u,h=0){const p=e.get(u);let d;return p===void 0?(d=new zy(o),e.set(u,[d])):h>=p.length?(d=new zy(o),p.push(d)):d=p[h],d}function s(){e=new WeakMap}return{get:a,dispose:s}}class HR extends pl{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=SE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class GR extends pl{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const VR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,XR=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function kR(o,e,a){let s=new Bm;const u=new Ze,h=new Ze,p=new ln,d=new HR({depthPacking:xE}),g=new GR,y={},x=a.maxTextureSize,_={[Kr]:bi,[bi]:Kr,[rr]:rr},E=new Qr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ze},radius:{value:4}},vertexShader:VR,fragmentShader:XR}),A=E.clone();A.defines.HORIZONTAL_PASS=1;const w=new Ia;w.setAttribute("position",new Xi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const L=new ga(w,E),T=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Jy;let M=this.type;this.render=function(Z,V,q){if(T.enabled===!1||T.autoUpdate===!1&&T.needsUpdate===!1||Z.length===0)return;const P=o.getRenderTarget(),N=o.getActiveCubeFace(),k=o.getActiveMipmapLevel(),yt=o.state;yt.setBlending(jr),yt.buffers.color.setClear(1,1,1,1),yt.buffers.depth.setTest(!0),yt.setScissorTest(!1);const dt=M!==ar&&this.type===ar,Rt=M===ar&&this.type!==ar;for(let gt=0,Q=Z.length;gt<Q;gt++){const ht=Z[gt],at=ht.shadow;if(at===void 0){console.warn("THREE.WebGLShadowMap:",ht,"has no shadow.");continue}if(at.autoUpdate===!1&&at.needsUpdate===!1)continue;u.copy(at.mapSize);const wt=at.getFrameExtents();if(u.multiply(wt),h.copy(at.mapSize),(u.x>x||u.y>x)&&(u.x>x&&(h.x=Math.floor(x/wt.x),u.x=h.x*wt.x,at.mapSize.x=h.x),u.y>x&&(h.y=Math.floor(x/wt.y),u.y=h.y*wt.y,at.mapSize.y=h.y)),at.map===null||dt===!0||Rt===!0){const Jt=this.type!==ar?{minFilter:Vi,magFilter:Vi}:{};at.map!==null&&at.map.dispose(),at.map=new Xs(u.x,u.y,Jt),at.map.texture.name=ht.name+".shadowMap",at.camera.updateProjectionMatrix()}o.setRenderTarget(at.map),o.clear();const Nt=at.getViewportCount();for(let Jt=0;Jt<Nt;Jt++){const pe=at.getViewport(Jt);p.set(h.x*pe.x,h.y*pe.y,h.x*pe.z,h.y*pe.w),yt.viewport(p),at.updateMatrices(ht,Jt),s=at.getFrustum(),O(V,q,at.camera,ht,this.type)}at.isPointLightShadow!==!0&&this.type===ar&&X(at,q),at.needsUpdate=!1}M=this.type,T.needsUpdate=!1,o.setRenderTarget(P,N,k)};function X(Z,V){const q=e.update(L);E.defines.VSM_SAMPLES!==Z.blurSamples&&(E.defines.VSM_SAMPLES=Z.blurSamples,A.defines.VSM_SAMPLES=Z.blurSamples,E.needsUpdate=!0,A.needsUpdate=!0),Z.mapPass===null&&(Z.mapPass=new Xs(u.x,u.y)),E.uniforms.shadow_pass.value=Z.map.texture,E.uniforms.resolution.value=Z.mapSize,E.uniforms.radius.value=Z.radius,o.setRenderTarget(Z.mapPass),o.clear(),o.renderBufferDirect(V,null,q,E,L,null),A.uniforms.shadow_pass.value=Z.mapPass.texture,A.uniforms.resolution.value=Z.mapSize,A.uniforms.radius.value=Z.radius,o.setRenderTarget(Z.map),o.clear(),o.renderBufferDirect(V,null,q,A,L,null)}function G(Z,V,q,P){let N=null;const k=q.isPointLight===!0?Z.customDistanceMaterial:Z.customDepthMaterial;if(k!==void 0)N=k;else if(N=q.isPointLight===!0?g:d,o.localClippingEnabled&&V.clipShadows===!0&&Array.isArray(V.clippingPlanes)&&V.clippingPlanes.length!==0||V.displacementMap&&V.displacementScale!==0||V.alphaMap&&V.alphaTest>0||V.map&&V.alphaTest>0){const yt=N.uuid,dt=V.uuid;let Rt=y[yt];Rt===void 0&&(Rt={},y[yt]=Rt);let gt=Rt[dt];gt===void 0&&(gt=N.clone(),Rt[dt]=gt,V.addEventListener("dispose",ft)),N=gt}if(N.visible=V.visible,N.wireframe=V.wireframe,P===ar?N.side=V.shadowSide!==null?V.shadowSide:V.side:N.side=V.shadowSide!==null?V.shadowSide:_[V.side],N.alphaMap=V.alphaMap,N.alphaTest=V.alphaTest,N.map=V.map,N.clipShadows=V.clipShadows,N.clippingPlanes=V.clippingPlanes,N.clipIntersection=V.clipIntersection,N.displacementMap=V.displacementMap,N.displacementScale=V.displacementScale,N.displacementBias=V.displacementBias,N.wireframeLinewidth=V.wireframeLinewidth,N.linewidth=V.linewidth,q.isPointLight===!0&&N.isMeshDistanceMaterial===!0){const yt=o.properties.get(N);yt.light=q}return N}function O(Z,V,q,P,N){if(Z.visible===!1)return;if(Z.layers.test(V.layers)&&(Z.isMesh||Z.isLine||Z.isPoints)&&(Z.castShadow||Z.receiveShadow&&N===ar)&&(!Z.frustumCulled||s.intersectsObject(Z))){Z.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,Z.matrixWorld);const dt=e.update(Z),Rt=Z.material;if(Array.isArray(Rt)){const gt=dt.groups;for(let Q=0,ht=gt.length;Q<ht;Q++){const at=gt[Q],wt=Rt[at.materialIndex];if(wt&&wt.visible){const Nt=G(Z,wt,P,N);Z.onBeforeShadow(o,Z,V,q,dt,Nt,at),o.renderBufferDirect(q,null,dt,Nt,Z,at),Z.onAfterShadow(o,Z,V,q,dt,Nt,at)}}}else if(Rt.visible){const gt=G(Z,Rt,P,N);Z.onBeforeShadow(o,Z,V,q,dt,gt,null),o.renderBufferDirect(q,null,dt,gt,Z,null),Z.onAfterShadow(o,Z,V,q,dt,gt,null)}}const yt=Z.children;for(let dt=0,Rt=yt.length;dt<Rt;dt++)O(yt[dt],V,q,P,N)}function ft(Z){Z.target.removeEventListener("dispose",ft);for(const q in y){const P=y[q],N=Z.target.uuid;N in P&&(P[N].dispose(),delete P[N])}}}const YR={[Xp]:kp,[Yp]:jp,[qp]:Zp,[al]:Wp,[kp]:Xp,[jp]:Yp,[Zp]:qp,[Wp]:al};function qR(o,e){function a(){let W=!1;const Xt=new ln;let _t=null;const Ct=new ln(0,0,0,0);return{setMask:function(qt){_t!==qt&&!W&&(o.colorMask(qt,qt,qt,qt),_t=qt)},setLocked:function(qt){W=qt},setClear:function(qt,Kt,ye,an,En){En===!0&&(qt*=an,Kt*=an,ye*=an),Xt.set(qt,Kt,ye,an),Ct.equals(Xt)===!1&&(o.clearColor(qt,Kt,ye,an),Ct.copy(Xt))},reset:function(){W=!1,_t=null,Ct.set(-1,0,0,0)}}}function s(){let W=!1,Xt=!1,_t=null,Ct=null,qt=null;return{setReversed:function(Kt){if(Xt!==Kt){const ye=e.get("EXT_clip_control");Xt?ye.clipControlEXT(ye.LOWER_LEFT_EXT,ye.ZERO_TO_ONE_EXT):ye.clipControlEXT(ye.LOWER_LEFT_EXT,ye.NEGATIVE_ONE_TO_ONE_EXT);const an=qt;qt=null,this.setClear(an)}Xt=Kt},getReversed:function(){return Xt},setTest:function(Kt){Kt?vt(o.DEPTH_TEST):zt(o.DEPTH_TEST)},setMask:function(Kt){_t!==Kt&&!W&&(o.depthMask(Kt),_t=Kt)},setFunc:function(Kt){if(Xt&&(Kt=YR[Kt]),Ct!==Kt){switch(Kt){case Xp:o.depthFunc(o.NEVER);break;case kp:o.depthFunc(o.ALWAYS);break;case Yp:o.depthFunc(o.LESS);break;case al:o.depthFunc(o.LEQUAL);break;case qp:o.depthFunc(o.EQUAL);break;case Wp:o.depthFunc(o.GEQUAL);break;case jp:o.depthFunc(o.GREATER);break;case Zp:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Ct=Kt}},setLocked:function(Kt){W=Kt},setClear:function(Kt){qt!==Kt&&(Xt&&(Kt=1-Kt),o.clearDepth(Kt),qt=Kt)},reset:function(){W=!1,_t=null,Ct=null,qt=null,Xt=!1}}}function u(){let W=!1,Xt=null,_t=null,Ct=null,qt=null,Kt=null,ye=null,an=null,En=null;return{setTest:function(Le){W||(Le?vt(o.STENCIL_TEST):zt(o.STENCIL_TEST))},setMask:function(Le){Xt!==Le&&!W&&(o.stencilMask(Le),Xt=Le)},setFunc:function(Le,Qe,An){(_t!==Le||Ct!==Qe||qt!==An)&&(o.stencilFunc(Le,Qe,An),_t=Le,Ct=Qe,qt=An)},setOp:function(Le,Qe,An){(Kt!==Le||ye!==Qe||an!==An)&&(o.stencilOp(Le,Qe,An),Kt=Le,ye=Qe,an=An)},setLocked:function(Le){W=Le},setClear:function(Le){En!==Le&&(o.clearStencil(Le),En=Le)},reset:function(){W=!1,Xt=null,_t=null,Ct=null,qt=null,Kt=null,ye=null,an=null,En=null}}}const h=new a,p=new s,d=new u,g=new WeakMap,y=new WeakMap;let x={},_={},E=new WeakMap,A=[],w=null,L=!1,T=null,M=null,X=null,G=null,O=null,ft=null,Z=null,V=new Ne(0,0,0),q=0,P=!1,N=null,k=null,yt=null,dt=null,Rt=null;const gt=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Q=!1,ht=0;const at=o.getParameter(o.VERSION);at.indexOf("WebGL")!==-1?(ht=parseFloat(/^WebGL (\d)/.exec(at)[1]),Q=ht>=1):at.indexOf("OpenGL ES")!==-1&&(ht=parseFloat(/^OpenGL ES (\d)/.exec(at)[1]),Q=ht>=2);let wt=null,Nt={};const Jt=o.getParameter(o.SCISSOR_BOX),pe=o.getParameter(o.VIEWPORT),be=new ln().fromArray(Jt),U=new ln().fromArray(pe);function J(W,Xt,_t,Ct){const qt=new Uint8Array(4),Kt=o.createTexture();o.bindTexture(W,Kt),o.texParameteri(W,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(W,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let ye=0;ye<_t;ye++)W===o.TEXTURE_3D||W===o.TEXTURE_2D_ARRAY?o.texImage3D(Xt,0,o.RGBA,1,1,Ct,0,o.RGBA,o.UNSIGNED_BYTE,qt):o.texImage2D(Xt+ye,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,qt);return Kt}const At={};At[o.TEXTURE_2D]=J(o.TEXTURE_2D,o.TEXTURE_2D,1),At[o.TEXTURE_CUBE_MAP]=J(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),At[o.TEXTURE_2D_ARRAY]=J(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),At[o.TEXTURE_3D]=J(o.TEXTURE_3D,o.TEXTURE_3D,1,1),h.setClear(0,0,0,1),p.setClear(1),d.setClear(0),vt(o.DEPTH_TEST),p.setFunc(al),Se(!1),ue(H_),vt(o.CULL_FACE),j(jr);function vt(W){x[W]!==!0&&(o.enable(W),x[W]=!0)}function zt(W){x[W]!==!1&&(o.disable(W),x[W]=!1)}function Ft(W,Xt){return _[W]!==Xt?(o.bindFramebuffer(W,Xt),_[W]=Xt,W===o.DRAW_FRAMEBUFFER&&(_[o.FRAMEBUFFER]=Xt),W===o.FRAMEBUFFER&&(_[o.DRAW_FRAMEBUFFER]=Xt),!0):!1}function jt(W,Xt){let _t=A,Ct=!1;if(W){_t=E.get(Xt),_t===void 0&&(_t=[],E.set(Xt,_t));const qt=W.textures;if(_t.length!==qt.length||_t[0]!==o.COLOR_ATTACHMENT0){for(let Kt=0,ye=qt.length;Kt<ye;Kt++)_t[Kt]=o.COLOR_ATTACHMENT0+Kt;_t.length=qt.length,Ct=!0}}else _t[0]!==o.BACK&&(_t[0]=o.BACK,Ct=!0);Ct&&o.drawBuffers(_t)}function Ot(W){return w!==W?(o.useProgram(W),w=W,!0):!1}const Bt={[Bs]:o.FUNC_ADD,[jM]:o.FUNC_SUBTRACT,[ZM]:o.FUNC_REVERSE_SUBTRACT};Bt[KM]=o.MIN,Bt[QM]=o.MAX;const ve={[JM]:o.ZERO,[$M]:o.ONE,[tE]:o.SRC_COLOR,[Gp]:o.SRC_ALPHA,[sE]:o.SRC_ALPHA_SATURATE,[aE]:o.DST_COLOR,[nE]:o.DST_ALPHA,[eE]:o.ONE_MINUS_SRC_COLOR,[Vp]:o.ONE_MINUS_SRC_ALPHA,[rE]:o.ONE_MINUS_DST_COLOR,[iE]:o.ONE_MINUS_DST_ALPHA,[oE]:o.CONSTANT_COLOR,[lE]:o.ONE_MINUS_CONSTANT_COLOR,[uE]:o.CONSTANT_ALPHA,[cE]:o.ONE_MINUS_CONSTANT_ALPHA};function j(W,Xt,_t,Ct,qt,Kt,ye,an,En,Le){if(W===jr){L===!0&&(zt(o.BLEND),L=!1);return}if(L===!1&&(vt(o.BLEND),L=!0),W!==WM){if(W!==T||Le!==P){if((M!==Bs||O!==Bs)&&(o.blendEquation(o.FUNC_ADD),M=Bs,O=Bs),Le)switch(W){case el:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Hp:o.blendFunc(o.ONE,o.ONE);break;case G_:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case V_:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}else switch(W){case el:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Hp:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case G_:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case V_:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}X=null,G=null,ft=null,Z=null,V.set(0,0,0),q=0,T=W,P=Le}return}qt=qt||Xt,Kt=Kt||_t,ye=ye||Ct,(Xt!==M||qt!==O)&&(o.blendEquationSeparate(Bt[Xt],Bt[qt]),M=Xt,O=qt),(_t!==X||Ct!==G||Kt!==ft||ye!==Z)&&(o.blendFuncSeparate(ve[_t],ve[Ct],ve[Kt],ve[ye]),X=_t,G=Ct,ft=Kt,Z=ye),(an.equals(V)===!1||En!==q)&&(o.blendColor(an.r,an.g,an.b,En),V.copy(an),q=En),T=W,P=!1}function un(W,Xt){W.side===rr?zt(o.CULL_FACE):vt(o.CULL_FACE);let _t=W.side===bi;Xt&&(_t=!_t),Se(_t),W.blending===el&&W.transparent===!1?j(jr):j(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),p.setFunc(W.depthFunc),p.setTest(W.depthTest),p.setMask(W.depthWrite),h.setMask(W.colorWrite);const Ct=W.stencilWrite;d.setTest(Ct),Ct&&(d.setMask(W.stencilWriteMask),d.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),d.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),we(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?vt(o.SAMPLE_ALPHA_TO_COVERAGE):zt(o.SAMPLE_ALPHA_TO_COVERAGE)}function Se(W){N!==W&&(W?o.frontFace(o.CW):o.frontFace(o.CCW),N=W)}function ue(W){W!==kM?(vt(o.CULL_FACE),W!==k&&(W===H_?o.cullFace(o.BACK):W===YM?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):zt(o.CULL_FACE),k=W}function Ht(W){W!==yt&&(Q&&o.lineWidth(W),yt=W)}function we(W,Xt,_t){W?(vt(o.POLYGON_OFFSET_FILL),(dt!==Xt||Rt!==_t)&&(o.polygonOffset(Xt,_t),dt=Xt,Rt=_t)):zt(o.POLYGON_OFFSET_FILL)}function le(W){W?vt(o.SCISSOR_TEST):zt(o.SCISSOR_TEST)}function z(W){W===void 0&&(W=o.TEXTURE0+gt-1),wt!==W&&(o.activeTexture(W),wt=W)}function C(W,Xt,_t){_t===void 0&&(wt===null?_t=o.TEXTURE0+gt-1:_t=wt);let Ct=Nt[_t];Ct===void 0&&(Ct={type:void 0,texture:void 0},Nt[_t]=Ct),(Ct.type!==W||Ct.texture!==Xt)&&(wt!==_t&&(o.activeTexture(_t),wt=_t),o.bindTexture(W,Xt||At[W]),Ct.type=W,Ct.texture=Xt)}function ot(){const W=Nt[wt];W!==void 0&&W.type!==void 0&&(o.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function xt(){try{o.compressedTexImage2D.apply(o,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Dt(){try{o.compressedTexImage3D.apply(o,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Mt(){try{o.texSubImage2D.apply(o,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ne(){try{o.texSubImage3D.apply(o,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function St(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ut(){try{o.compressedTexSubImage3D.apply(o,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function de(){try{o.texStorage2D.apply(o,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function bt(){try{o.texStorage3D.apply(o,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Yt(){try{o.texImage2D.apply(o,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function re(){try{o.texImage3D.apply(o,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function me(W){be.equals(W)===!1&&(o.scissor(W.x,W.y,W.z,W.w),be.copy(W))}function It(W){U.equals(W)===!1&&(o.viewport(W.x,W.y,W.z,W.w),U.copy(W))}function Vt(W,Xt){let _t=y.get(Xt);_t===void 0&&(_t=new WeakMap,y.set(Xt,_t));let Ct=_t.get(W);Ct===void 0&&(Ct=o.getUniformBlockIndex(Xt,W.name),_t.set(W,Ct))}function _e(W,Xt){const Ct=y.get(Xt).get(W);g.get(Xt)!==Ct&&(o.uniformBlockBinding(Xt,Ct,W.__bindingPointIndex),g.set(Xt,Ct))}function Ge(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),p.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),x={},wt=null,Nt={},_={},E=new WeakMap,A=[],w=null,L=!1,T=null,M=null,X=null,G=null,O=null,ft=null,Z=null,V=new Ne(0,0,0),q=0,P=!1,N=null,k=null,yt=null,dt=null,Rt=null,be.set(0,0,o.canvas.width,o.canvas.height),U.set(0,0,o.canvas.width,o.canvas.height),h.reset(),p.reset(),d.reset()}return{buffers:{color:h,depth:p,stencil:d},enable:vt,disable:zt,bindFramebuffer:Ft,drawBuffers:jt,useProgram:Ot,setBlending:j,setMaterial:un,setFlipSided:Se,setCullFace:ue,setLineWidth:Ht,setPolygonOffset:we,setScissorTest:le,activeTexture:z,bindTexture:C,unbindTexture:ot,compressedTexImage2D:xt,compressedTexImage3D:Dt,texImage2D:Yt,texImage3D:re,updateUBOMapping:Vt,uniformBlockBinding:_e,texStorage2D:de,texStorage3D:bt,texSubImage2D:Mt,texSubImage3D:ne,compressedTexSubImage2D:St,compressedTexSubImage3D:Ut,scissor:me,viewport:It,reset:Ge}}function Iy(o,e,a,s){const u=WR(s);switch(a){case rS:return o*e;case oS:return o*e;case lS:return o*e*2;case Lm:return o*e/u.components*u.byteLength;case Om:return o*e/u.components*u.byteLength;case uS:return o*e*2/u.components*u.byteLength;case Pm:return o*e*2/u.components*u.byteLength;case sS:return o*e*3/u.components*u.byteLength;case ma:return o*e*4/u.components*u.byteLength;case zm:return o*e*4/u.components*u.byteLength;case Rf:case Cf:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case wf:case Df:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case em:case im:return Math.max(o,16)*Math.max(e,8)/4;case tm:case nm:return Math.max(o,8)*Math.max(e,8)/2;case am:case rm:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case sm:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case om:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case lm:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case um:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case cm:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case fm:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case hm:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case dm:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case pm:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case mm:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case gm:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case vm:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case _m:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case ym:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case Sm:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case Uf:case xm:case Mm:return Math.ceil(o/4)*Math.ceil(e/4)*16;case cS:case Em:return Math.ceil(o/4)*Math.ceil(e/4)*8;case Tm:case Am:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${a} format.`)}function WR(o){switch(o){case lr:case nS:return{byteLength:1,components:1};case bu:case iS:case Cu:return{byteLength:2,components:1};case Um:case Nm:return{byteLength:2,components:4};case Vs:case Dm:case Oa:return{byteLength:4,components:1};case aS:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}function jR(o,e,a,s,u,h,p){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,g=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),y=new Ze,x=new WeakMap;let _;const E=new WeakMap;let A=!1;try{A=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(z,C){return A?new OffscreenCanvas(z,C):Of("canvas")}function L(z,C,ot){let xt=1;const Dt=le(z);if((Dt.width>ot||Dt.height>ot)&&(xt=ot/Math.max(Dt.width,Dt.height)),xt<1)if(typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&z instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&z instanceof ImageBitmap||typeof VideoFrame<"u"&&z instanceof VideoFrame){const Mt=Math.floor(xt*Dt.width),ne=Math.floor(xt*Dt.height);_===void 0&&(_=w(Mt,ne));const St=C?w(Mt,ne):_;return St.width=Mt,St.height=ne,St.getContext("2d").drawImage(z,0,0,Mt,ne),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Dt.width+"x"+Dt.height+") to ("+Mt+"x"+ne+")."),St}else return"data"in z&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Dt.width+"x"+Dt.height+")."),z;return z}function T(z){return z.generateMipmaps}function M(z){o.generateMipmap(z)}function X(z){return z.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:z.isWebGL3DRenderTarget?o.TEXTURE_3D:z.isWebGLArrayRenderTarget||z.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function G(z,C,ot,xt,Dt=!1){if(z!==null){if(o[z]!==void 0)return o[z];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+z+"'")}let Mt=C;if(C===o.RED&&(ot===o.FLOAT&&(Mt=o.R32F),ot===o.HALF_FLOAT&&(Mt=o.R16F),ot===o.UNSIGNED_BYTE&&(Mt=o.R8)),C===o.RED_INTEGER&&(ot===o.UNSIGNED_BYTE&&(Mt=o.R8UI),ot===o.UNSIGNED_SHORT&&(Mt=o.R16UI),ot===o.UNSIGNED_INT&&(Mt=o.R32UI),ot===o.BYTE&&(Mt=o.R8I),ot===o.SHORT&&(Mt=o.R16I),ot===o.INT&&(Mt=o.R32I)),C===o.RG&&(ot===o.FLOAT&&(Mt=o.RG32F),ot===o.HALF_FLOAT&&(Mt=o.RG16F),ot===o.UNSIGNED_BYTE&&(Mt=o.RG8)),C===o.RG_INTEGER&&(ot===o.UNSIGNED_BYTE&&(Mt=o.RG8UI),ot===o.UNSIGNED_SHORT&&(Mt=o.RG16UI),ot===o.UNSIGNED_INT&&(Mt=o.RG32UI),ot===o.BYTE&&(Mt=o.RG8I),ot===o.SHORT&&(Mt=o.RG16I),ot===o.INT&&(Mt=o.RG32I)),C===o.RGB_INTEGER&&(ot===o.UNSIGNED_BYTE&&(Mt=o.RGB8UI),ot===o.UNSIGNED_SHORT&&(Mt=o.RGB16UI),ot===o.UNSIGNED_INT&&(Mt=o.RGB32UI),ot===o.BYTE&&(Mt=o.RGB8I),ot===o.SHORT&&(Mt=o.RGB16I),ot===o.INT&&(Mt=o.RGB32I)),C===o.RGBA_INTEGER&&(ot===o.UNSIGNED_BYTE&&(Mt=o.RGBA8UI),ot===o.UNSIGNED_SHORT&&(Mt=o.RGBA16UI),ot===o.UNSIGNED_INT&&(Mt=o.RGBA32UI),ot===o.BYTE&&(Mt=o.RGBA8I),ot===o.SHORT&&(Mt=o.RGBA16I),ot===o.INT&&(Mt=o.RGBA32I)),C===o.RGB&&ot===o.UNSIGNED_INT_5_9_9_9_REV&&(Mt=o.RGB9_E5),C===o.RGBA){const ne=Dt?zf:We.getTransfer(xt);ot===o.FLOAT&&(Mt=o.RGBA32F),ot===o.HALF_FLOAT&&(Mt=o.RGBA16F),ot===o.UNSIGNED_BYTE&&(Mt=ne===on?o.SRGB8_ALPHA8:o.RGBA8),ot===o.UNSIGNED_SHORT_4_4_4_4&&(Mt=o.RGBA4),ot===o.UNSIGNED_SHORT_5_5_5_1&&(Mt=o.RGB5_A1)}return(Mt===o.R16F||Mt===o.R32F||Mt===o.RG16F||Mt===o.RG32F||Mt===o.RGBA16F||Mt===o.RGBA32F)&&e.get("EXT_color_buffer_float"),Mt}function O(z,C){let ot;return z?C===null||C===Vs||C===ol?ot=o.DEPTH24_STENCIL8:C===Oa?ot=o.DEPTH32F_STENCIL8:C===bu&&(ot=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):C===null||C===Vs||C===ol?ot=o.DEPTH_COMPONENT24:C===Oa?ot=o.DEPTH_COMPONENT32F:C===bu&&(ot=o.DEPTH_COMPONENT16),ot}function ft(z,C){return T(z)===!0||z.isFramebufferTexture&&z.minFilter!==Vi&&z.minFilter!==La?Math.log2(Math.max(C.width,C.height))+1:z.mipmaps!==void 0&&z.mipmaps.length>0?z.mipmaps.length:z.isCompressedTexture&&Array.isArray(z.image)?C.mipmaps.length:1}function Z(z){const C=z.target;C.removeEventListener("dispose",Z),q(C),C.isVideoTexture&&x.delete(C)}function V(z){const C=z.target;C.removeEventListener("dispose",V),N(C)}function q(z){const C=s.get(z);if(C.__webglInit===void 0)return;const ot=z.source,xt=E.get(ot);if(xt){const Dt=xt[C.__cacheKey];Dt.usedTimes--,Dt.usedTimes===0&&P(z),Object.keys(xt).length===0&&E.delete(ot)}s.remove(z)}function P(z){const C=s.get(z);o.deleteTexture(C.__webglTexture);const ot=z.source,xt=E.get(ot);delete xt[C.__cacheKey],p.memory.textures--}function N(z){const C=s.get(z);if(z.depthTexture&&(z.depthTexture.dispose(),s.remove(z.depthTexture)),z.isWebGLCubeRenderTarget)for(let xt=0;xt<6;xt++){if(Array.isArray(C.__webglFramebuffer[xt]))for(let Dt=0;Dt<C.__webglFramebuffer[xt].length;Dt++)o.deleteFramebuffer(C.__webglFramebuffer[xt][Dt]);else o.deleteFramebuffer(C.__webglFramebuffer[xt]);C.__webglDepthbuffer&&o.deleteRenderbuffer(C.__webglDepthbuffer[xt])}else{if(Array.isArray(C.__webglFramebuffer))for(let xt=0;xt<C.__webglFramebuffer.length;xt++)o.deleteFramebuffer(C.__webglFramebuffer[xt]);else o.deleteFramebuffer(C.__webglFramebuffer);if(C.__webglDepthbuffer&&o.deleteRenderbuffer(C.__webglDepthbuffer),C.__webglMultisampledFramebuffer&&o.deleteFramebuffer(C.__webglMultisampledFramebuffer),C.__webglColorRenderbuffer)for(let xt=0;xt<C.__webglColorRenderbuffer.length;xt++)C.__webglColorRenderbuffer[xt]&&o.deleteRenderbuffer(C.__webglColorRenderbuffer[xt]);C.__webglDepthRenderbuffer&&o.deleteRenderbuffer(C.__webglDepthRenderbuffer)}const ot=z.textures;for(let xt=0,Dt=ot.length;xt<Dt;xt++){const Mt=s.get(ot[xt]);Mt.__webglTexture&&(o.deleteTexture(Mt.__webglTexture),p.memory.textures--),s.remove(ot[xt])}s.remove(z)}let k=0;function yt(){k=0}function dt(){const z=k;return z>=u.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+z+" texture units while this GPU supports only "+u.maxTextures),k+=1,z}function Rt(z){const C=[];return C.push(z.wrapS),C.push(z.wrapT),C.push(z.wrapR||0),C.push(z.magFilter),C.push(z.minFilter),C.push(z.anisotropy),C.push(z.internalFormat),C.push(z.format),C.push(z.type),C.push(z.generateMipmaps),C.push(z.premultiplyAlpha),C.push(z.flipY),C.push(z.unpackAlignment),C.push(z.colorSpace),C.join()}function gt(z,C){const ot=s.get(z);if(z.isVideoTexture&&Ht(z),z.isRenderTargetTexture===!1&&z.version>0&&ot.__version!==z.version){const xt=z.image;if(xt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(xt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{U(ot,z,C);return}}a.bindTexture(o.TEXTURE_2D,ot.__webglTexture,o.TEXTURE0+C)}function Q(z,C){const ot=s.get(z);if(z.version>0&&ot.__version!==z.version){U(ot,z,C);return}a.bindTexture(o.TEXTURE_2D_ARRAY,ot.__webglTexture,o.TEXTURE0+C)}function ht(z,C){const ot=s.get(z);if(z.version>0&&ot.__version!==z.version){U(ot,z,C);return}a.bindTexture(o.TEXTURE_3D,ot.__webglTexture,o.TEXTURE0+C)}function at(z,C){const ot=s.get(z);if(z.version>0&&ot.__version!==z.version){J(ot,z,C);return}a.bindTexture(o.TEXTURE_CUBE_MAP,ot.__webglTexture,o.TEXTURE0+C)}const wt={[Jp]:o.REPEAT,[Hs]:o.CLAMP_TO_EDGE,[$p]:o.MIRRORED_REPEAT},Nt={[Vi]:o.NEAREST,[yE]:o.NEAREST_MIPMAP_NEAREST,[ef]:o.NEAREST_MIPMAP_LINEAR,[La]:o.LINEAR,[lp]:o.LINEAR_MIPMAP_NEAREST,[Gs]:o.LINEAR_MIPMAP_LINEAR},Jt={[EE]:o.NEVER,[wE]:o.ALWAYS,[TE]:o.LESS,[hS]:o.LEQUAL,[AE]:o.EQUAL,[CE]:o.GEQUAL,[bE]:o.GREATER,[RE]:o.NOTEQUAL};function pe(z,C){if(C.type===Oa&&e.has("OES_texture_float_linear")===!1&&(C.magFilter===La||C.magFilter===lp||C.magFilter===ef||C.magFilter===Gs||C.minFilter===La||C.minFilter===lp||C.minFilter===ef||C.minFilter===Gs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(z,o.TEXTURE_WRAP_S,wt[C.wrapS]),o.texParameteri(z,o.TEXTURE_WRAP_T,wt[C.wrapT]),(z===o.TEXTURE_3D||z===o.TEXTURE_2D_ARRAY)&&o.texParameteri(z,o.TEXTURE_WRAP_R,wt[C.wrapR]),o.texParameteri(z,o.TEXTURE_MAG_FILTER,Nt[C.magFilter]),o.texParameteri(z,o.TEXTURE_MIN_FILTER,Nt[C.minFilter]),C.compareFunction&&(o.texParameteri(z,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(z,o.TEXTURE_COMPARE_FUNC,Jt[C.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(C.magFilter===Vi||C.minFilter!==ef&&C.minFilter!==Gs||C.type===Oa&&e.has("OES_texture_float_linear")===!1)return;if(C.anisotropy>1||s.get(C).__currentAnisotropy){const ot=e.get("EXT_texture_filter_anisotropic");o.texParameterf(z,ot.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(C.anisotropy,u.getMaxAnisotropy())),s.get(C).__currentAnisotropy=C.anisotropy}}}function be(z,C){let ot=!1;z.__webglInit===void 0&&(z.__webglInit=!0,C.addEventListener("dispose",Z));const xt=C.source;let Dt=E.get(xt);Dt===void 0&&(Dt={},E.set(xt,Dt));const Mt=Rt(C);if(Mt!==z.__cacheKey){Dt[Mt]===void 0&&(Dt[Mt]={texture:o.createTexture(),usedTimes:0},p.memory.textures++,ot=!0),Dt[Mt].usedTimes++;const ne=Dt[z.__cacheKey];ne!==void 0&&(Dt[z.__cacheKey].usedTimes--,ne.usedTimes===0&&P(C)),z.__cacheKey=Mt,z.__webglTexture=Dt[Mt].texture}return ot}function U(z,C,ot){let xt=o.TEXTURE_2D;(C.isDataArrayTexture||C.isCompressedArrayTexture)&&(xt=o.TEXTURE_2D_ARRAY),C.isData3DTexture&&(xt=o.TEXTURE_3D);const Dt=be(z,C),Mt=C.source;a.bindTexture(xt,z.__webglTexture,o.TEXTURE0+ot);const ne=s.get(Mt);if(Mt.version!==ne.__version||Dt===!0){a.activeTexture(o.TEXTURE0+ot);const St=We.getPrimaries(We.workingColorSpace),Ut=C.colorSpace===Wr?null:We.getPrimaries(C.colorSpace),de=C.colorSpace===Wr||St===Ut?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,C.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,C.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);let bt=L(C.image,!1,u.maxTextureSize);bt=we(C,bt);const Yt=h.convert(C.format,C.colorSpace),re=h.convert(C.type);let me=G(C.internalFormat,Yt,re,C.colorSpace,C.isVideoTexture);pe(xt,C);let It;const Vt=C.mipmaps,_e=C.isVideoTexture!==!0,Ge=ne.__version===void 0||Dt===!0,W=Mt.dataReady,Xt=ft(C,bt);if(C.isDepthTexture)me=O(C.format===ll,C.type),Ge&&(_e?a.texStorage2D(o.TEXTURE_2D,1,me,bt.width,bt.height):a.texImage2D(o.TEXTURE_2D,0,me,bt.width,bt.height,0,Yt,re,null));else if(C.isDataTexture)if(Vt.length>0){_e&&Ge&&a.texStorage2D(o.TEXTURE_2D,Xt,me,Vt[0].width,Vt[0].height);for(let _t=0,Ct=Vt.length;_t<Ct;_t++)It=Vt[_t],_e?W&&a.texSubImage2D(o.TEXTURE_2D,_t,0,0,It.width,It.height,Yt,re,It.data):a.texImage2D(o.TEXTURE_2D,_t,me,It.width,It.height,0,Yt,re,It.data);C.generateMipmaps=!1}else _e?(Ge&&a.texStorage2D(o.TEXTURE_2D,Xt,me,bt.width,bt.height),W&&a.texSubImage2D(o.TEXTURE_2D,0,0,0,bt.width,bt.height,Yt,re,bt.data)):a.texImage2D(o.TEXTURE_2D,0,me,bt.width,bt.height,0,Yt,re,bt.data);else if(C.isCompressedTexture)if(C.isCompressedArrayTexture){_e&&Ge&&a.texStorage3D(o.TEXTURE_2D_ARRAY,Xt,me,Vt[0].width,Vt[0].height,bt.depth);for(let _t=0,Ct=Vt.length;_t<Ct;_t++)if(It=Vt[_t],C.format!==ma)if(Yt!==null)if(_e){if(W)if(C.layerUpdates.size>0){const qt=Iy(It.width,It.height,C.format,C.type);for(const Kt of C.layerUpdates){const ye=It.data.subarray(Kt*qt/It.data.BYTES_PER_ELEMENT,(Kt+1)*qt/It.data.BYTES_PER_ELEMENT);a.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,_t,0,0,Kt,It.width,It.height,1,Yt,ye)}C.clearLayerUpdates()}else a.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,_t,0,0,0,It.width,It.height,bt.depth,Yt,It.data)}else a.compressedTexImage3D(o.TEXTURE_2D_ARRAY,_t,me,It.width,It.height,bt.depth,0,It.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else _e?W&&a.texSubImage3D(o.TEXTURE_2D_ARRAY,_t,0,0,0,It.width,It.height,bt.depth,Yt,re,It.data):a.texImage3D(o.TEXTURE_2D_ARRAY,_t,me,It.width,It.height,bt.depth,0,Yt,re,It.data)}else{_e&&Ge&&a.texStorage2D(o.TEXTURE_2D,Xt,me,Vt[0].width,Vt[0].height);for(let _t=0,Ct=Vt.length;_t<Ct;_t++)It=Vt[_t],C.format!==ma?Yt!==null?_e?W&&a.compressedTexSubImage2D(o.TEXTURE_2D,_t,0,0,It.width,It.height,Yt,It.data):a.compressedTexImage2D(o.TEXTURE_2D,_t,me,It.width,It.height,0,It.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):_e?W&&a.texSubImage2D(o.TEXTURE_2D,_t,0,0,It.width,It.height,Yt,re,It.data):a.texImage2D(o.TEXTURE_2D,_t,me,It.width,It.height,0,Yt,re,It.data)}else if(C.isDataArrayTexture)if(_e){if(Ge&&a.texStorage3D(o.TEXTURE_2D_ARRAY,Xt,me,bt.width,bt.height,bt.depth),W)if(C.layerUpdates.size>0){const _t=Iy(bt.width,bt.height,C.format,C.type);for(const Ct of C.layerUpdates){const qt=bt.data.subarray(Ct*_t/bt.data.BYTES_PER_ELEMENT,(Ct+1)*_t/bt.data.BYTES_PER_ELEMENT);a.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,Ct,bt.width,bt.height,1,Yt,re,qt)}C.clearLayerUpdates()}else a.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,bt.width,bt.height,bt.depth,Yt,re,bt.data)}else a.texImage3D(o.TEXTURE_2D_ARRAY,0,me,bt.width,bt.height,bt.depth,0,Yt,re,bt.data);else if(C.isData3DTexture)_e?(Ge&&a.texStorage3D(o.TEXTURE_3D,Xt,me,bt.width,bt.height,bt.depth),W&&a.texSubImage3D(o.TEXTURE_3D,0,0,0,0,bt.width,bt.height,bt.depth,Yt,re,bt.data)):a.texImage3D(o.TEXTURE_3D,0,me,bt.width,bt.height,bt.depth,0,Yt,re,bt.data);else if(C.isFramebufferTexture){if(Ge)if(_e)a.texStorage2D(o.TEXTURE_2D,Xt,me,bt.width,bt.height);else{let _t=bt.width,Ct=bt.height;for(let qt=0;qt<Xt;qt++)a.texImage2D(o.TEXTURE_2D,qt,me,_t,Ct,0,Yt,re,null),_t>>=1,Ct>>=1}}else if(Vt.length>0){if(_e&&Ge){const _t=le(Vt[0]);a.texStorage2D(o.TEXTURE_2D,Xt,me,_t.width,_t.height)}for(let _t=0,Ct=Vt.length;_t<Ct;_t++)It=Vt[_t],_e?W&&a.texSubImage2D(o.TEXTURE_2D,_t,0,0,Yt,re,It):a.texImage2D(o.TEXTURE_2D,_t,me,Yt,re,It);C.generateMipmaps=!1}else if(_e){if(Ge){const _t=le(bt);a.texStorage2D(o.TEXTURE_2D,Xt,me,_t.width,_t.height)}W&&a.texSubImage2D(o.TEXTURE_2D,0,0,0,Yt,re,bt)}else a.texImage2D(o.TEXTURE_2D,0,me,Yt,re,bt);T(C)&&M(xt),ne.__version=Mt.version,C.onUpdate&&C.onUpdate(C)}z.__version=C.version}function J(z,C,ot){if(C.image.length!==6)return;const xt=be(z,C),Dt=C.source;a.bindTexture(o.TEXTURE_CUBE_MAP,z.__webglTexture,o.TEXTURE0+ot);const Mt=s.get(Dt);if(Dt.version!==Mt.__version||xt===!0){a.activeTexture(o.TEXTURE0+ot);const ne=We.getPrimaries(We.workingColorSpace),St=C.colorSpace===Wr?null:We.getPrimaries(C.colorSpace),Ut=C.colorSpace===Wr||ne===St?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,C.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,C.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ut);const de=C.isCompressedTexture||C.image[0].isCompressedTexture,bt=C.image[0]&&C.image[0].isDataTexture,Yt=[];for(let Ct=0;Ct<6;Ct++)!de&&!bt?Yt[Ct]=L(C.image[Ct],!0,u.maxCubemapSize):Yt[Ct]=bt?C.image[Ct].image:C.image[Ct],Yt[Ct]=we(C,Yt[Ct]);const re=Yt[0],me=h.convert(C.format,C.colorSpace),It=h.convert(C.type),Vt=G(C.internalFormat,me,It,C.colorSpace),_e=C.isVideoTexture!==!0,Ge=Mt.__version===void 0||xt===!0,W=Dt.dataReady;let Xt=ft(C,re);pe(o.TEXTURE_CUBE_MAP,C);let _t;if(de){_e&&Ge&&a.texStorage2D(o.TEXTURE_CUBE_MAP,Xt,Vt,re.width,re.height);for(let Ct=0;Ct<6;Ct++){_t=Yt[Ct].mipmaps;for(let qt=0;qt<_t.length;qt++){const Kt=_t[qt];C.format!==ma?me!==null?_e?W&&a.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,qt,0,0,Kt.width,Kt.height,me,Kt.data):a.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,qt,Vt,Kt.width,Kt.height,0,Kt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):_e?W&&a.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,qt,0,0,Kt.width,Kt.height,me,It,Kt.data):a.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,qt,Vt,Kt.width,Kt.height,0,me,It,Kt.data)}}}else{if(_t=C.mipmaps,_e&&Ge){_t.length>0&&Xt++;const Ct=le(Yt[0]);a.texStorage2D(o.TEXTURE_CUBE_MAP,Xt,Vt,Ct.width,Ct.height)}for(let Ct=0;Ct<6;Ct++)if(bt){_e?W&&a.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,0,0,0,Yt[Ct].width,Yt[Ct].height,me,It,Yt[Ct].data):a.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,0,Vt,Yt[Ct].width,Yt[Ct].height,0,me,It,Yt[Ct].data);for(let qt=0;qt<_t.length;qt++){const ye=_t[qt].image[Ct].image;_e?W&&a.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,qt+1,0,0,ye.width,ye.height,me,It,ye.data):a.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,qt+1,Vt,ye.width,ye.height,0,me,It,ye.data)}}else{_e?W&&a.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,0,0,0,me,It,Yt[Ct]):a.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,0,Vt,me,It,Yt[Ct]);for(let qt=0;qt<_t.length;qt++){const Kt=_t[qt];_e?W&&a.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,qt+1,0,0,me,It,Kt.image[Ct]):a.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,qt+1,Vt,me,It,Kt.image[Ct])}}}T(C)&&M(o.TEXTURE_CUBE_MAP),Mt.__version=Dt.version,C.onUpdate&&C.onUpdate(C)}z.__version=C.version}function At(z,C,ot,xt,Dt,Mt){const ne=h.convert(ot.format,ot.colorSpace),St=h.convert(ot.type),Ut=G(ot.internalFormat,ne,St,ot.colorSpace),de=s.get(C),bt=s.get(ot);if(bt.__renderTarget=C,!de.__hasExternalTextures){const Yt=Math.max(1,C.width>>Mt),re=Math.max(1,C.height>>Mt);Dt===o.TEXTURE_3D||Dt===o.TEXTURE_2D_ARRAY?a.texImage3D(Dt,Mt,Ut,Yt,re,C.depth,0,ne,St,null):a.texImage2D(Dt,Mt,Ut,Yt,re,0,ne,St,null)}a.bindFramebuffer(o.FRAMEBUFFER,z),ue(C)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,xt,Dt,bt.__webglTexture,0,Se(C)):(Dt===o.TEXTURE_2D||Dt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&Dt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,xt,Dt,bt.__webglTexture,Mt),a.bindFramebuffer(o.FRAMEBUFFER,null)}function vt(z,C,ot){if(o.bindRenderbuffer(o.RENDERBUFFER,z),C.depthBuffer){const xt=C.depthTexture,Dt=xt&&xt.isDepthTexture?xt.type:null,Mt=O(C.stencilBuffer,Dt),ne=C.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,St=Se(C);ue(C)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,St,Mt,C.width,C.height):ot?o.renderbufferStorageMultisample(o.RENDERBUFFER,St,Mt,C.width,C.height):o.renderbufferStorage(o.RENDERBUFFER,Mt,C.width,C.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,ne,o.RENDERBUFFER,z)}else{const xt=C.textures;for(let Dt=0;Dt<xt.length;Dt++){const Mt=xt[Dt],ne=h.convert(Mt.format,Mt.colorSpace),St=h.convert(Mt.type),Ut=G(Mt.internalFormat,ne,St,Mt.colorSpace),de=Se(C);ot&&ue(C)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,de,Ut,C.width,C.height):ue(C)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,de,Ut,C.width,C.height):o.renderbufferStorage(o.RENDERBUFFER,Ut,C.width,C.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function zt(z,C){if(C&&C.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(a.bindFramebuffer(o.FRAMEBUFFER,z),!(C.depthTexture&&C.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const xt=s.get(C.depthTexture);xt.__renderTarget=C,(!xt.__webglTexture||C.depthTexture.image.width!==C.width||C.depthTexture.image.height!==C.height)&&(C.depthTexture.image.width=C.width,C.depthTexture.image.height=C.height,C.depthTexture.needsUpdate=!0),gt(C.depthTexture,0);const Dt=xt.__webglTexture,Mt=Se(C);if(C.depthTexture.format===nl)ue(C)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,Dt,0,Mt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,Dt,0);else if(C.depthTexture.format===ll)ue(C)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,Dt,0,Mt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,Dt,0);else throw new Error("Unknown depthTexture format")}function Ft(z){const C=s.get(z),ot=z.isWebGLCubeRenderTarget===!0;if(C.__boundDepthTexture!==z.depthTexture){const xt=z.depthTexture;if(C.__depthDisposeCallback&&C.__depthDisposeCallback(),xt){const Dt=()=>{delete C.__boundDepthTexture,delete C.__depthDisposeCallback,xt.removeEventListener("dispose",Dt)};xt.addEventListener("dispose",Dt),C.__depthDisposeCallback=Dt}C.__boundDepthTexture=xt}if(z.depthTexture&&!C.__autoAllocateDepthBuffer){if(ot)throw new Error("target.depthTexture not supported in Cube render targets");zt(C.__webglFramebuffer,z)}else if(ot){C.__webglDepthbuffer=[];for(let xt=0;xt<6;xt++)if(a.bindFramebuffer(o.FRAMEBUFFER,C.__webglFramebuffer[xt]),C.__webglDepthbuffer[xt]===void 0)C.__webglDepthbuffer[xt]=o.createRenderbuffer(),vt(C.__webglDepthbuffer[xt],z,!1);else{const Dt=z.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Mt=C.__webglDepthbuffer[xt];o.bindRenderbuffer(o.RENDERBUFFER,Mt),o.framebufferRenderbuffer(o.FRAMEBUFFER,Dt,o.RENDERBUFFER,Mt)}}else if(a.bindFramebuffer(o.FRAMEBUFFER,C.__webglFramebuffer),C.__webglDepthbuffer===void 0)C.__webglDepthbuffer=o.createRenderbuffer(),vt(C.__webglDepthbuffer,z,!1);else{const xt=z.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Dt=C.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,Dt),o.framebufferRenderbuffer(o.FRAMEBUFFER,xt,o.RENDERBUFFER,Dt)}a.bindFramebuffer(o.FRAMEBUFFER,null)}function jt(z,C,ot){const xt=s.get(z);C!==void 0&&At(xt.__webglFramebuffer,z,z.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),ot!==void 0&&Ft(z)}function Ot(z){const C=z.texture,ot=s.get(z),xt=s.get(C);z.addEventListener("dispose",V);const Dt=z.textures,Mt=z.isWebGLCubeRenderTarget===!0,ne=Dt.length>1;if(ne||(xt.__webglTexture===void 0&&(xt.__webglTexture=o.createTexture()),xt.__version=C.version,p.memory.textures++),Mt){ot.__webglFramebuffer=[];for(let St=0;St<6;St++)if(C.mipmaps&&C.mipmaps.length>0){ot.__webglFramebuffer[St]=[];for(let Ut=0;Ut<C.mipmaps.length;Ut++)ot.__webglFramebuffer[St][Ut]=o.createFramebuffer()}else ot.__webglFramebuffer[St]=o.createFramebuffer()}else{if(C.mipmaps&&C.mipmaps.length>0){ot.__webglFramebuffer=[];for(let St=0;St<C.mipmaps.length;St++)ot.__webglFramebuffer[St]=o.createFramebuffer()}else ot.__webglFramebuffer=o.createFramebuffer();if(ne)for(let St=0,Ut=Dt.length;St<Ut;St++){const de=s.get(Dt[St]);de.__webglTexture===void 0&&(de.__webglTexture=o.createTexture(),p.memory.textures++)}if(z.samples>0&&ue(z)===!1){ot.__webglMultisampledFramebuffer=o.createFramebuffer(),ot.__webglColorRenderbuffer=[],a.bindFramebuffer(o.FRAMEBUFFER,ot.__webglMultisampledFramebuffer);for(let St=0;St<Dt.length;St++){const Ut=Dt[St];ot.__webglColorRenderbuffer[St]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,ot.__webglColorRenderbuffer[St]);const de=h.convert(Ut.format,Ut.colorSpace),bt=h.convert(Ut.type),Yt=G(Ut.internalFormat,de,bt,Ut.colorSpace,z.isXRRenderTarget===!0),re=Se(z);o.renderbufferStorageMultisample(o.RENDERBUFFER,re,Yt,z.width,z.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+St,o.RENDERBUFFER,ot.__webglColorRenderbuffer[St])}o.bindRenderbuffer(o.RENDERBUFFER,null),z.depthBuffer&&(ot.__webglDepthRenderbuffer=o.createRenderbuffer(),vt(ot.__webglDepthRenderbuffer,z,!0)),a.bindFramebuffer(o.FRAMEBUFFER,null)}}if(Mt){a.bindTexture(o.TEXTURE_CUBE_MAP,xt.__webglTexture),pe(o.TEXTURE_CUBE_MAP,C);for(let St=0;St<6;St++)if(C.mipmaps&&C.mipmaps.length>0)for(let Ut=0;Ut<C.mipmaps.length;Ut++)At(ot.__webglFramebuffer[St][Ut],z,C,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+St,Ut);else At(ot.__webglFramebuffer[St],z,C,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+St,0);T(C)&&M(o.TEXTURE_CUBE_MAP),a.unbindTexture()}else if(ne){for(let St=0,Ut=Dt.length;St<Ut;St++){const de=Dt[St],bt=s.get(de);a.bindTexture(o.TEXTURE_2D,bt.__webglTexture),pe(o.TEXTURE_2D,de),At(ot.__webglFramebuffer,z,de,o.COLOR_ATTACHMENT0+St,o.TEXTURE_2D,0),T(de)&&M(o.TEXTURE_2D)}a.unbindTexture()}else{let St=o.TEXTURE_2D;if((z.isWebGL3DRenderTarget||z.isWebGLArrayRenderTarget)&&(St=z.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),a.bindTexture(St,xt.__webglTexture),pe(St,C),C.mipmaps&&C.mipmaps.length>0)for(let Ut=0;Ut<C.mipmaps.length;Ut++)At(ot.__webglFramebuffer[Ut],z,C,o.COLOR_ATTACHMENT0,St,Ut);else At(ot.__webglFramebuffer,z,C,o.COLOR_ATTACHMENT0,St,0);T(C)&&M(St),a.unbindTexture()}z.depthBuffer&&Ft(z)}function Bt(z){const C=z.textures;for(let ot=0,xt=C.length;ot<xt;ot++){const Dt=C[ot];if(T(Dt)){const Mt=X(z),ne=s.get(Dt).__webglTexture;a.bindTexture(Mt,ne),M(Mt),a.unbindTexture()}}}const ve=[],j=[];function un(z){if(z.samples>0){if(ue(z)===!1){const C=z.textures,ot=z.width,xt=z.height;let Dt=o.COLOR_BUFFER_BIT;const Mt=z.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ne=s.get(z),St=C.length>1;if(St)for(let Ut=0;Ut<C.length;Ut++)a.bindFramebuffer(o.FRAMEBUFFER,ne.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ut,o.RENDERBUFFER,null),a.bindFramebuffer(o.FRAMEBUFFER,ne.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ut,o.TEXTURE_2D,null,0);a.bindFramebuffer(o.READ_FRAMEBUFFER,ne.__webglMultisampledFramebuffer),a.bindFramebuffer(o.DRAW_FRAMEBUFFER,ne.__webglFramebuffer);for(let Ut=0;Ut<C.length;Ut++){if(z.resolveDepthBuffer&&(z.depthBuffer&&(Dt|=o.DEPTH_BUFFER_BIT),z.stencilBuffer&&z.resolveStencilBuffer&&(Dt|=o.STENCIL_BUFFER_BIT)),St){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,ne.__webglColorRenderbuffer[Ut]);const de=s.get(C[Ut]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,de,0)}o.blitFramebuffer(0,0,ot,xt,0,0,ot,xt,Dt,o.NEAREST),g===!0&&(ve.length=0,j.length=0,ve.push(o.COLOR_ATTACHMENT0+Ut),z.depthBuffer&&z.resolveDepthBuffer===!1&&(ve.push(Mt),j.push(Mt),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,j)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,ve))}if(a.bindFramebuffer(o.READ_FRAMEBUFFER,null),a.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),St)for(let Ut=0;Ut<C.length;Ut++){a.bindFramebuffer(o.FRAMEBUFFER,ne.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ut,o.RENDERBUFFER,ne.__webglColorRenderbuffer[Ut]);const de=s.get(C[Ut]).__webglTexture;a.bindFramebuffer(o.FRAMEBUFFER,ne.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ut,o.TEXTURE_2D,de,0)}a.bindFramebuffer(o.DRAW_FRAMEBUFFER,ne.__webglMultisampledFramebuffer)}else if(z.depthBuffer&&z.resolveDepthBuffer===!1&&g){const C=z.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[C])}}}function Se(z){return Math.min(u.maxSamples,z.samples)}function ue(z){const C=s.get(z);return z.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&C.__useRenderToTexture!==!1}function Ht(z){const C=p.render.frame;x.get(z)!==C&&(x.set(z,C),z.update())}function we(z,C){const ot=z.colorSpace,xt=z.format,Dt=z.type;return z.isCompressedTexture===!0||z.isVideoTexture===!0||ot!==cl&&ot!==Wr&&(We.getTransfer(ot)===on?(xt!==ma||Dt!==lr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ot)),C}function le(z){return typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement?(y.width=z.naturalWidth||z.width,y.height=z.naturalHeight||z.height):typeof VideoFrame<"u"&&z instanceof VideoFrame?(y.width=z.displayWidth,y.height=z.displayHeight):(y.width=z.width,y.height=z.height),y}this.allocateTextureUnit=dt,this.resetTextureUnits=yt,this.setTexture2D=gt,this.setTexture2DArray=Q,this.setTexture3D=ht,this.setTextureCube=at,this.rebindTextures=jt,this.setupRenderTarget=Ot,this.updateRenderTargetMipmap=Bt,this.updateMultisampleRenderTarget=un,this.setupDepthRenderbuffer=Ft,this.setupFrameBufferTexture=At,this.useMultisampledRTT=ue}function ZR(o,e){function a(s,u=Wr){let h;const p=We.getTransfer(u);if(s===lr)return o.UNSIGNED_BYTE;if(s===Um)return o.UNSIGNED_SHORT_4_4_4_4;if(s===Nm)return o.UNSIGNED_SHORT_5_5_5_1;if(s===aS)return o.UNSIGNED_INT_5_9_9_9_REV;if(s===nS)return o.BYTE;if(s===iS)return o.SHORT;if(s===bu)return o.UNSIGNED_SHORT;if(s===Dm)return o.INT;if(s===Vs)return o.UNSIGNED_INT;if(s===Oa)return o.FLOAT;if(s===Cu)return o.HALF_FLOAT;if(s===rS)return o.ALPHA;if(s===sS)return o.RGB;if(s===ma)return o.RGBA;if(s===oS)return o.LUMINANCE;if(s===lS)return o.LUMINANCE_ALPHA;if(s===nl)return o.DEPTH_COMPONENT;if(s===ll)return o.DEPTH_STENCIL;if(s===Lm)return o.RED;if(s===Om)return o.RED_INTEGER;if(s===uS)return o.RG;if(s===Pm)return o.RG_INTEGER;if(s===zm)return o.RGBA_INTEGER;if(s===Rf||s===Cf||s===wf||s===Df)if(p===on)if(h=e.get("WEBGL_compressed_texture_s3tc_srgb"),h!==null){if(s===Rf)return h.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Cf)return h.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===wf)return h.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Df)return h.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(h=e.get("WEBGL_compressed_texture_s3tc"),h!==null){if(s===Rf)return h.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Cf)return h.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===wf)return h.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Df)return h.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===tm||s===em||s===nm||s===im)if(h=e.get("WEBGL_compressed_texture_pvrtc"),h!==null){if(s===tm)return h.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===em)return h.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===nm)return h.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===im)return h.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===am||s===rm||s===sm)if(h=e.get("WEBGL_compressed_texture_etc"),h!==null){if(s===am||s===rm)return p===on?h.COMPRESSED_SRGB8_ETC2:h.COMPRESSED_RGB8_ETC2;if(s===sm)return p===on?h.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:h.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===om||s===lm||s===um||s===cm||s===fm||s===hm||s===dm||s===pm||s===mm||s===gm||s===vm||s===_m||s===ym||s===Sm)if(h=e.get("WEBGL_compressed_texture_astc"),h!==null){if(s===om)return p===on?h.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:h.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===lm)return p===on?h.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:h.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===um)return p===on?h.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:h.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===cm)return p===on?h.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:h.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===fm)return p===on?h.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:h.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===hm)return p===on?h.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:h.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===dm)return p===on?h.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:h.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===pm)return p===on?h.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:h.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===mm)return p===on?h.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:h.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===gm)return p===on?h.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:h.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===vm)return p===on?h.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:h.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===_m)return p===on?h.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:h.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===ym)return p===on?h.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:h.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Sm)return p===on?h.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:h.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Uf||s===xm||s===Mm)if(h=e.get("EXT_texture_compression_bptc"),h!==null){if(s===Uf)return p===on?h.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:h.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===xm)return h.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Mm)return h.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===cS||s===Em||s===Tm||s===Am)if(h=e.get("EXT_texture_compression_rgtc"),h!==null){if(s===Uf)return h.COMPRESSED_RED_RGTC1_EXT;if(s===Em)return h.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Tm)return h.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Am)return h.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===ol?o.UNSIGNED_INT_24_8:o[s]!==void 0?o[s]:null}return{convert:a}}class KR extends Gi{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ef extends ui{constructor(){super(),this.isGroup=!0,this.type="Group"}}const QR={type:"move"};class Pp{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ef,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ef,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new lt,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new lt),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ef,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new lt,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new lt),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const a=this._hand;if(a)for(const s of e.hand.values())this._getHandJoint(a,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,a,s){let u=null,h=null,p=null;const d=this._targetRay,g=this._grip,y=this._hand;if(e&&a.session.visibilityState!=="visible-blurred"){if(y&&e.hand){p=!0;for(const L of e.hand.values()){const T=a.getJointPose(L,s),M=this._getHandJoint(y,L);T!==null&&(M.matrix.fromArray(T.transform.matrix),M.matrix.decompose(M.position,M.rotation,M.scale),M.matrixWorldNeedsUpdate=!0,M.jointRadius=T.radius),M.visible=T!==null}const x=y.joints["index-finger-tip"],_=y.joints["thumb-tip"],E=x.position.distanceTo(_.position),A=.02,w=.005;y.inputState.pinching&&E>A+w?(y.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!y.inputState.pinching&&E<=A-w&&(y.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else g!==null&&e.gripSpace&&(h=a.getPose(e.gripSpace,s),h!==null&&(g.matrix.fromArray(h.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,h.linearVelocity?(g.hasLinearVelocity=!0,g.linearVelocity.copy(h.linearVelocity)):g.hasLinearVelocity=!1,h.angularVelocity?(g.hasAngularVelocity=!0,g.angularVelocity.copy(h.angularVelocity)):g.hasAngularVelocity=!1));d!==null&&(u=a.getPose(e.targetRaySpace,s),u===null&&h!==null&&(u=h),u!==null&&(d.matrix.fromArray(u.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,u.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(u.linearVelocity)):d.hasLinearVelocity=!1,u.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(u.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(QR)))}return d!==null&&(d.visible=u!==null),g!==null&&(g.visible=h!==null),y!==null&&(y.visible=p!==null),this}_getHandJoint(e,a){if(e.joints[a.jointName]===void 0){const s=new Ef;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[a.jointName]=s,e.add(s)}return e.joints[a.jointName]}}const JR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,$R=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class t2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,a,s){if(this.texture===null){const u=new li,h=e.properties.get(u);h.__webglTexture=a.texture,(a.depthNear!=s.depthNear||a.depthFar!=s.depthFar)&&(this.depthNear=a.depthNear,this.depthFar=a.depthFar),this.texture=u}}getMesh(e){if(this.texture!==null&&this.mesh===null){const a=e.cameras[0].viewport,s=new Qr({vertexShader:JR,fragmentShader:$R,uniforms:{depthColor:{value:this.texture},depthWidth:{value:a.z},depthHeight:{value:a.w}}});this.mesh=new ga(new If(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class e2 extends fl{constructor(e,a){super();const s=this;let u=null,h=1,p=null,d="local-floor",g=1,y=null,x=null,_=null,E=null,A=null,w=null;const L=new t2,T=a.getContextAttributes();let M=null,X=null;const G=[],O=[],ft=new Ze;let Z=null;const V=new Gi;V.viewport=new ln;const q=new Gi;q.viewport=new ln;const P=[V,q],N=new KR;let k=null,yt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(U){let J=G[U];return J===void 0&&(J=new Pp,G[U]=J),J.getTargetRaySpace()},this.getControllerGrip=function(U){let J=G[U];return J===void 0&&(J=new Pp,G[U]=J),J.getGripSpace()},this.getHand=function(U){let J=G[U];return J===void 0&&(J=new Pp,G[U]=J),J.getHandSpace()};function dt(U){const J=O.indexOf(U.inputSource);if(J===-1)return;const At=G[J];At!==void 0&&(At.update(U.inputSource,U.frame,y||p),At.dispatchEvent({type:U.type,data:U.inputSource}))}function Rt(){u.removeEventListener("select",dt),u.removeEventListener("selectstart",dt),u.removeEventListener("selectend",dt),u.removeEventListener("squeeze",dt),u.removeEventListener("squeezestart",dt),u.removeEventListener("squeezeend",dt),u.removeEventListener("end",Rt),u.removeEventListener("inputsourceschange",gt);for(let U=0;U<G.length;U++){const J=O[U];J!==null&&(O[U]=null,G[U].disconnect(J))}k=null,yt=null,L.reset(),e.setRenderTarget(M),A=null,E=null,_=null,u=null,X=null,be.stop(),s.isPresenting=!1,e.setPixelRatio(Z),e.setSize(ft.width,ft.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(U){h=U,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(U){d=U,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return y||p},this.setReferenceSpace=function(U){y=U},this.getBaseLayer=function(){return E!==null?E:A},this.getBinding=function(){return _},this.getFrame=function(){return w},this.getSession=function(){return u},this.setSession=async function(U){if(u=U,u!==null){if(M=e.getRenderTarget(),u.addEventListener("select",dt),u.addEventListener("selectstart",dt),u.addEventListener("selectend",dt),u.addEventListener("squeeze",dt),u.addEventListener("squeezestart",dt),u.addEventListener("squeezeend",dt),u.addEventListener("end",Rt),u.addEventListener("inputsourceschange",gt),T.xrCompatible!==!0&&await a.makeXRCompatible(),Z=e.getPixelRatio(),e.getSize(ft),u.renderState.layers===void 0){const J={antialias:T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:h};A=new XRWebGLLayer(u,a,J),u.updateRenderState({baseLayer:A}),e.setPixelRatio(1),e.setSize(A.framebufferWidth,A.framebufferHeight,!1),X=new Xs(A.framebufferWidth,A.framebufferHeight,{format:ma,type:lr,colorSpace:e.outputColorSpace,stencilBuffer:T.stencil})}else{let J=null,At=null,vt=null;T.depth&&(vt=T.stencil?a.DEPTH24_STENCIL8:a.DEPTH_COMPONENT24,J=T.stencil?ll:nl,At=T.stencil?ol:Vs);const zt={colorFormat:a.RGBA8,depthFormat:vt,scaleFactor:h};_=new XRWebGLBinding(u,a),E=_.createProjectionLayer(zt),u.updateRenderState({layers:[E]}),e.setPixelRatio(1),e.setSize(E.textureWidth,E.textureHeight,!1),X=new Xs(E.textureWidth,E.textureHeight,{format:ma,type:lr,depthTexture:new bS(E.textureWidth,E.textureHeight,At,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:T.stencil,colorSpace:e.outputColorSpace,samples:T.antialias?4:0,resolveDepthBuffer:E.ignoreDepthValues===!1})}X.isXRRenderTarget=!0,this.setFoveation(g),y=null,p=await u.requestReferenceSpace(d),be.setContext(u),be.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(u!==null)return u.environmentBlendMode},this.getDepthTexture=function(){return L.getDepthTexture()};function gt(U){for(let J=0;J<U.removed.length;J++){const At=U.removed[J],vt=O.indexOf(At);vt>=0&&(O[vt]=null,G[vt].disconnect(At))}for(let J=0;J<U.added.length;J++){const At=U.added[J];let vt=O.indexOf(At);if(vt===-1){for(let Ft=0;Ft<G.length;Ft++)if(Ft>=O.length){O.push(At),vt=Ft;break}else if(O[Ft]===null){O[Ft]=At,vt=Ft;break}if(vt===-1)break}const zt=G[vt];zt&&zt.connect(At)}}const Q=new lt,ht=new lt;function at(U,J,At){Q.setFromMatrixPosition(J.matrixWorld),ht.setFromMatrixPosition(At.matrixWorld);const vt=Q.distanceTo(ht),zt=J.projectionMatrix.elements,Ft=At.projectionMatrix.elements,jt=zt[14]/(zt[10]-1),Ot=zt[14]/(zt[10]+1),Bt=(zt[9]+1)/zt[5],ve=(zt[9]-1)/zt[5],j=(zt[8]-1)/zt[0],un=(Ft[8]+1)/Ft[0],Se=jt*j,ue=jt*un,Ht=vt/(-j+un),we=Ht*-j;if(J.matrixWorld.decompose(U.position,U.quaternion,U.scale),U.translateX(we),U.translateZ(Ht),U.matrixWorld.compose(U.position,U.quaternion,U.scale),U.matrixWorldInverse.copy(U.matrixWorld).invert(),zt[10]===-1)U.projectionMatrix.copy(J.projectionMatrix),U.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{const le=jt+Ht,z=Ot+Ht,C=Se-we,ot=ue+(vt-we),xt=Bt*Ot/z*le,Dt=ve*Ot/z*le;U.projectionMatrix.makePerspective(C,ot,xt,Dt,le,z),U.projectionMatrixInverse.copy(U.projectionMatrix).invert()}}function wt(U,J){J===null?U.matrixWorld.copy(U.matrix):U.matrixWorld.multiplyMatrices(J.matrixWorld,U.matrix),U.matrixWorldInverse.copy(U.matrixWorld).invert()}this.updateCamera=function(U){if(u===null)return;let J=U.near,At=U.far;L.texture!==null&&(L.depthNear>0&&(J=L.depthNear),L.depthFar>0&&(At=L.depthFar)),N.near=q.near=V.near=J,N.far=q.far=V.far=At,(k!==N.near||yt!==N.far)&&(u.updateRenderState({depthNear:N.near,depthFar:N.far}),k=N.near,yt=N.far),V.layers.mask=U.layers.mask|2,q.layers.mask=U.layers.mask|4,N.layers.mask=V.layers.mask|q.layers.mask;const vt=U.parent,zt=N.cameras;wt(N,vt);for(let Ft=0;Ft<zt.length;Ft++)wt(zt[Ft],vt);zt.length===2?at(N,V,q):N.projectionMatrix.copy(V.projectionMatrix),Nt(U,N,vt)};function Nt(U,J,At){At===null?U.matrix.copy(J.matrixWorld):(U.matrix.copy(At.matrixWorld),U.matrix.invert(),U.matrix.multiply(J.matrixWorld)),U.matrix.decompose(U.position,U.quaternion,U.scale),U.updateMatrixWorld(!0),U.projectionMatrix.copy(J.projectionMatrix),U.projectionMatrixInverse.copy(J.projectionMatrixInverse),U.isPerspectiveCamera&&(U.fov=Ru*2*Math.atan(1/U.projectionMatrix.elements[5]),U.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(E===null&&A===null))return g},this.setFoveation=function(U){g=U,E!==null&&(E.fixedFoveation=U),A!==null&&A.fixedFoveation!==void 0&&(A.fixedFoveation=U)},this.hasDepthSensing=function(){return L.texture!==null},this.getDepthSensingMesh=function(){return L.getMesh(N)};let Jt=null;function pe(U,J){if(x=J.getViewerPose(y||p),w=J,x!==null){const At=x.views;A!==null&&(e.setRenderTargetFramebuffer(X,A.framebuffer),e.setRenderTarget(X));let vt=!1;At.length!==N.cameras.length&&(N.cameras.length=0,vt=!0);for(let Ft=0;Ft<At.length;Ft++){const jt=At[Ft];let Ot=null;if(A!==null)Ot=A.getViewport(jt);else{const ve=_.getViewSubImage(E,jt);Ot=ve.viewport,Ft===0&&(e.setRenderTargetTextures(X,ve.colorTexture,E.ignoreDepthValues?void 0:ve.depthStencilTexture),e.setRenderTarget(X))}let Bt=P[Ft];Bt===void 0&&(Bt=new Gi,Bt.layers.enable(Ft),Bt.viewport=new ln,P[Ft]=Bt),Bt.matrix.fromArray(jt.transform.matrix),Bt.matrix.decompose(Bt.position,Bt.quaternion,Bt.scale),Bt.projectionMatrix.fromArray(jt.projectionMatrix),Bt.projectionMatrixInverse.copy(Bt.projectionMatrix).invert(),Bt.viewport.set(Ot.x,Ot.y,Ot.width,Ot.height),Ft===0&&(N.matrix.copy(Bt.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),vt===!0&&N.cameras.push(Bt)}const zt=u.enabledFeatures;if(zt&&zt.includes("depth-sensing")){const Ft=_.getDepthInformation(At[0]);Ft&&Ft.isValid&&Ft.texture&&L.init(e,Ft,u.renderState)}}for(let At=0;At<G.length;At++){const vt=O[At],zt=G[At];vt!==null&&zt!==void 0&&zt.update(vt,J,y||p)}Jt&&Jt(U,J),J.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:J}),w=null}const be=new AS;be.setAnimationLoop(pe),this.setAnimationLoop=function(U){Jt=U},this.dispose=function(){}}}const Os=new za,n2=new hn;function i2(o,e){function a(T,M){T.matrixAutoUpdate===!0&&T.updateMatrix(),M.value.copy(T.matrix)}function s(T,M){M.color.getRGB(T.fogColor.value,MS(o)),M.isFog?(T.fogNear.value=M.near,T.fogFar.value=M.far):M.isFogExp2&&(T.fogDensity.value=M.density)}function u(T,M,X,G,O){M.isMeshBasicMaterial||M.isMeshLambertMaterial?h(T,M):M.isMeshToonMaterial?(h(T,M),_(T,M)):M.isMeshPhongMaterial?(h(T,M),x(T,M)):M.isMeshStandardMaterial?(h(T,M),E(T,M),M.isMeshPhysicalMaterial&&A(T,M,O)):M.isMeshMatcapMaterial?(h(T,M),w(T,M)):M.isMeshDepthMaterial?h(T,M):M.isMeshDistanceMaterial?(h(T,M),L(T,M)):M.isMeshNormalMaterial?h(T,M):M.isLineBasicMaterial?(p(T,M),M.isLineDashedMaterial&&d(T,M)):M.isPointsMaterial?g(T,M,X,G):M.isSpriteMaterial?y(T,M):M.isShadowMaterial?(T.color.value.copy(M.color),T.opacity.value=M.opacity):M.isShaderMaterial&&(M.uniformsNeedUpdate=!1)}function h(T,M){T.opacity.value=M.opacity,M.color&&T.diffuse.value.copy(M.color),M.emissive&&T.emissive.value.copy(M.emissive).multiplyScalar(M.emissiveIntensity),M.map&&(T.map.value=M.map,a(M.map,T.mapTransform)),M.alphaMap&&(T.alphaMap.value=M.alphaMap,a(M.alphaMap,T.alphaMapTransform)),M.bumpMap&&(T.bumpMap.value=M.bumpMap,a(M.bumpMap,T.bumpMapTransform),T.bumpScale.value=M.bumpScale,M.side===bi&&(T.bumpScale.value*=-1)),M.normalMap&&(T.normalMap.value=M.normalMap,a(M.normalMap,T.normalMapTransform),T.normalScale.value.copy(M.normalScale),M.side===bi&&T.normalScale.value.negate()),M.displacementMap&&(T.displacementMap.value=M.displacementMap,a(M.displacementMap,T.displacementMapTransform),T.displacementScale.value=M.displacementScale,T.displacementBias.value=M.displacementBias),M.emissiveMap&&(T.emissiveMap.value=M.emissiveMap,a(M.emissiveMap,T.emissiveMapTransform)),M.specularMap&&(T.specularMap.value=M.specularMap,a(M.specularMap,T.specularMapTransform)),M.alphaTest>0&&(T.alphaTest.value=M.alphaTest);const X=e.get(M),G=X.envMap,O=X.envMapRotation;G&&(T.envMap.value=G,Os.copy(O),Os.x*=-1,Os.y*=-1,Os.z*=-1,G.isCubeTexture&&G.isRenderTargetTexture===!1&&(Os.y*=-1,Os.z*=-1),T.envMapRotation.value.setFromMatrix4(n2.makeRotationFromEuler(Os)),T.flipEnvMap.value=G.isCubeTexture&&G.isRenderTargetTexture===!1?-1:1,T.reflectivity.value=M.reflectivity,T.ior.value=M.ior,T.refractionRatio.value=M.refractionRatio),M.lightMap&&(T.lightMap.value=M.lightMap,T.lightMapIntensity.value=M.lightMapIntensity,a(M.lightMap,T.lightMapTransform)),M.aoMap&&(T.aoMap.value=M.aoMap,T.aoMapIntensity.value=M.aoMapIntensity,a(M.aoMap,T.aoMapTransform))}function p(T,M){T.diffuse.value.copy(M.color),T.opacity.value=M.opacity,M.map&&(T.map.value=M.map,a(M.map,T.mapTransform))}function d(T,M){T.dashSize.value=M.dashSize,T.totalSize.value=M.dashSize+M.gapSize,T.scale.value=M.scale}function g(T,M,X,G){T.diffuse.value.copy(M.color),T.opacity.value=M.opacity,T.size.value=M.size*X,T.scale.value=G*.5,M.map&&(T.map.value=M.map,a(M.map,T.uvTransform)),M.alphaMap&&(T.alphaMap.value=M.alphaMap,a(M.alphaMap,T.alphaMapTransform)),M.alphaTest>0&&(T.alphaTest.value=M.alphaTest)}function y(T,M){T.diffuse.value.copy(M.color),T.opacity.value=M.opacity,T.rotation.value=M.rotation,M.map&&(T.map.value=M.map,a(M.map,T.mapTransform)),M.alphaMap&&(T.alphaMap.value=M.alphaMap,a(M.alphaMap,T.alphaMapTransform)),M.alphaTest>0&&(T.alphaTest.value=M.alphaTest)}function x(T,M){T.specular.value.copy(M.specular),T.shininess.value=Math.max(M.shininess,1e-4)}function _(T,M){M.gradientMap&&(T.gradientMap.value=M.gradientMap)}function E(T,M){T.metalness.value=M.metalness,M.metalnessMap&&(T.metalnessMap.value=M.metalnessMap,a(M.metalnessMap,T.metalnessMapTransform)),T.roughness.value=M.roughness,M.roughnessMap&&(T.roughnessMap.value=M.roughnessMap,a(M.roughnessMap,T.roughnessMapTransform)),M.envMap&&(T.envMapIntensity.value=M.envMapIntensity)}function A(T,M,X){T.ior.value=M.ior,M.sheen>0&&(T.sheenColor.value.copy(M.sheenColor).multiplyScalar(M.sheen),T.sheenRoughness.value=M.sheenRoughness,M.sheenColorMap&&(T.sheenColorMap.value=M.sheenColorMap,a(M.sheenColorMap,T.sheenColorMapTransform)),M.sheenRoughnessMap&&(T.sheenRoughnessMap.value=M.sheenRoughnessMap,a(M.sheenRoughnessMap,T.sheenRoughnessMapTransform))),M.clearcoat>0&&(T.clearcoat.value=M.clearcoat,T.clearcoatRoughness.value=M.clearcoatRoughness,M.clearcoatMap&&(T.clearcoatMap.value=M.clearcoatMap,a(M.clearcoatMap,T.clearcoatMapTransform)),M.clearcoatRoughnessMap&&(T.clearcoatRoughnessMap.value=M.clearcoatRoughnessMap,a(M.clearcoatRoughnessMap,T.clearcoatRoughnessMapTransform)),M.clearcoatNormalMap&&(T.clearcoatNormalMap.value=M.clearcoatNormalMap,a(M.clearcoatNormalMap,T.clearcoatNormalMapTransform),T.clearcoatNormalScale.value.copy(M.clearcoatNormalScale),M.side===bi&&T.clearcoatNormalScale.value.negate())),M.dispersion>0&&(T.dispersion.value=M.dispersion),M.iridescence>0&&(T.iridescence.value=M.iridescence,T.iridescenceIOR.value=M.iridescenceIOR,T.iridescenceThicknessMinimum.value=M.iridescenceThicknessRange[0],T.iridescenceThicknessMaximum.value=M.iridescenceThicknessRange[1],M.iridescenceMap&&(T.iridescenceMap.value=M.iridescenceMap,a(M.iridescenceMap,T.iridescenceMapTransform)),M.iridescenceThicknessMap&&(T.iridescenceThicknessMap.value=M.iridescenceThicknessMap,a(M.iridescenceThicknessMap,T.iridescenceThicknessMapTransform))),M.transmission>0&&(T.transmission.value=M.transmission,T.transmissionSamplerMap.value=X.texture,T.transmissionSamplerSize.value.set(X.width,X.height),M.transmissionMap&&(T.transmissionMap.value=M.transmissionMap,a(M.transmissionMap,T.transmissionMapTransform)),T.thickness.value=M.thickness,M.thicknessMap&&(T.thicknessMap.value=M.thicknessMap,a(M.thicknessMap,T.thicknessMapTransform)),T.attenuationDistance.value=M.attenuationDistance,T.attenuationColor.value.copy(M.attenuationColor)),M.anisotropy>0&&(T.anisotropyVector.value.set(M.anisotropy*Math.cos(M.anisotropyRotation),M.anisotropy*Math.sin(M.anisotropyRotation)),M.anisotropyMap&&(T.anisotropyMap.value=M.anisotropyMap,a(M.anisotropyMap,T.anisotropyMapTransform))),T.specularIntensity.value=M.specularIntensity,T.specularColor.value.copy(M.specularColor),M.specularColorMap&&(T.specularColorMap.value=M.specularColorMap,a(M.specularColorMap,T.specularColorMapTransform)),M.specularIntensityMap&&(T.specularIntensityMap.value=M.specularIntensityMap,a(M.specularIntensityMap,T.specularIntensityMapTransform))}function w(T,M){M.matcap&&(T.matcap.value=M.matcap)}function L(T,M){const X=e.get(M).light;T.referencePosition.value.setFromMatrixPosition(X.matrixWorld),T.nearDistance.value=X.shadow.camera.near,T.farDistance.value=X.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:u}}function a2(o,e,a,s){let u={},h={},p=[];const d=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function g(X,G){const O=G.program;s.uniformBlockBinding(X,O)}function y(X,G){let O=u[X.id];O===void 0&&(w(X),O=x(X),u[X.id]=O,X.addEventListener("dispose",T));const ft=G.program;s.updateUBOMapping(X,ft);const Z=e.render.frame;h[X.id]!==Z&&(E(X),h[X.id]=Z)}function x(X){const G=_();X.__bindingPointIndex=G;const O=o.createBuffer(),ft=X.__size,Z=X.usage;return o.bindBuffer(o.UNIFORM_BUFFER,O),o.bufferData(o.UNIFORM_BUFFER,ft,Z),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,G,O),O}function _(){for(let X=0;X<d;X++)if(p.indexOf(X)===-1)return p.push(X),X;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function E(X){const G=u[X.id],O=X.uniforms,ft=X.__cache;o.bindBuffer(o.UNIFORM_BUFFER,G);for(let Z=0,V=O.length;Z<V;Z++){const q=Array.isArray(O[Z])?O[Z]:[O[Z]];for(let P=0,N=q.length;P<N;P++){const k=q[P];if(A(k,Z,P,ft)===!0){const yt=k.__offset,dt=Array.isArray(k.value)?k.value:[k.value];let Rt=0;for(let gt=0;gt<dt.length;gt++){const Q=dt[gt],ht=L(Q);typeof Q=="number"||typeof Q=="boolean"?(k.__data[0]=Q,o.bufferSubData(o.UNIFORM_BUFFER,yt+Rt,k.__data)):Q.isMatrix3?(k.__data[0]=Q.elements[0],k.__data[1]=Q.elements[1],k.__data[2]=Q.elements[2],k.__data[3]=0,k.__data[4]=Q.elements[3],k.__data[5]=Q.elements[4],k.__data[6]=Q.elements[5],k.__data[7]=0,k.__data[8]=Q.elements[6],k.__data[9]=Q.elements[7],k.__data[10]=Q.elements[8],k.__data[11]=0):(Q.toArray(k.__data,Rt),Rt+=ht.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,yt,k.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function A(X,G,O,ft){const Z=X.value,V=G+"_"+O;if(ft[V]===void 0)return typeof Z=="number"||typeof Z=="boolean"?ft[V]=Z:ft[V]=Z.clone(),!0;{const q=ft[V];if(typeof Z=="number"||typeof Z=="boolean"){if(q!==Z)return ft[V]=Z,!0}else if(q.equals(Z)===!1)return q.copy(Z),!0}return!1}function w(X){const G=X.uniforms;let O=0;const ft=16;for(let V=0,q=G.length;V<q;V++){const P=Array.isArray(G[V])?G[V]:[G[V]];for(let N=0,k=P.length;N<k;N++){const yt=P[N],dt=Array.isArray(yt.value)?yt.value:[yt.value];for(let Rt=0,gt=dt.length;Rt<gt;Rt++){const Q=dt[Rt],ht=L(Q),at=O%ft,wt=at%ht.boundary,Nt=at+wt;O+=wt,Nt!==0&&ft-Nt<ht.storage&&(O+=ft-Nt),yt.__data=new Float32Array(ht.storage/Float32Array.BYTES_PER_ELEMENT),yt.__offset=O,O+=ht.storage}}}const Z=O%ft;return Z>0&&(O+=ft-Z),X.__size=O,X.__cache={},this}function L(X){const G={boundary:0,storage:0};return typeof X=="number"||typeof X=="boolean"?(G.boundary=4,G.storage=4):X.isVector2?(G.boundary=8,G.storage=8):X.isVector3||X.isColor?(G.boundary=16,G.storage=12):X.isVector4?(G.boundary=16,G.storage=16):X.isMatrix3?(G.boundary=48,G.storage=48):X.isMatrix4?(G.boundary=64,G.storage=64):X.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",X),G}function T(X){const G=X.target;G.removeEventListener("dispose",T);const O=p.indexOf(G.__bindingPointIndex);p.splice(O,1),o.deleteBuffer(u[G.id]),delete u[G.id],delete h[G.id]}function M(){for(const X in u)o.deleteBuffer(u[X]);p=[],u={},h={}}return{bind:g,update:y,dispose:M}}class r2{constructor(e={}){const{canvas:a=qE(),context:s=null,depth:u=!0,stencil:h=!1,alpha:p=!1,antialias:d=!1,premultipliedAlpha:g=!0,preserveDrawingBuffer:y=!1,powerPreference:x="default",failIfMajorPerformanceCaveat:_=!1,reverseDepthBuffer:E=!1}=e;this.isWebGLRenderer=!0;let A;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");A=s.getContextAttributes().alpha}else A=p;const w=new Uint32Array(4),L=new Int32Array(4);let T=null,M=null;const X=[],G=[];this.domElement=a,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Hi,this.toneMapping=Zr,this.toneMappingExposure=1;const O=this;let ft=!1,Z=0,V=0,q=null,P=-1,N=null;const k=new ln,yt=new ln;let dt=null;const Rt=new Ne(0);let gt=0,Q=a.width,ht=a.height,at=1,wt=null,Nt=null;const Jt=new ln(0,0,Q,ht),pe=new ln(0,0,Q,ht);let be=!1;const U=new Bm;let J=!1,At=!1;const vt=new hn,zt=new hn,Ft=new lt,jt=new ln,Ot={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Bt=!1;function ve(){return q===null?at:1}let j=s;function un(D,nt){return a.getContext(D,nt)}try{const D={alpha:!0,depth:u,stencil:h,antialias:d,premultipliedAlpha:g,preserveDrawingBuffer:y,powerPreference:x,failIfMajorPerformanceCaveat:_};if("setAttribute"in a&&a.setAttribute("data-engine",`three.js r${wm}`),a.addEventListener("webglcontextlost",Ct,!1),a.addEventListener("webglcontextrestored",qt,!1),a.addEventListener("webglcontextcreationerror",Kt,!1),j===null){const nt="webgl2";if(j=un(nt,D),j===null)throw un(nt)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(D){throw console.error("THREE.WebGLRenderer: "+D.message),D}let Se,ue,Ht,we,le,z,C,ot,xt,Dt,Mt,ne,St,Ut,de,bt,Yt,re,me,It,Vt,_e,Ge,W;function Xt(){Se=new cb(j),Se.init(),_e=new ZR(j,Se),ue=new ib(j,Se,e,_e),Ht=new qR(j,Se),ue.reverseDepthBuffer&&E&&Ht.buffers.depth.setReversed(!0),we=new db(j),le=new UR,z=new jR(j,Se,Ht,le,ue,_e,we),C=new rb(O),ot=new ub(O),xt=new yT(j),Ge=new eb(j,xt),Dt=new fb(j,xt,we,Ge),Mt=new mb(j,Dt,xt,we),me=new pb(j,ue,z),bt=new ab(le),ne=new DR(O,C,ot,Se,ue,Ge,bt),St=new i2(O,le),Ut=new LR,de=new FR(Se),re=new tb(O,C,ot,Ht,Mt,A,g),Yt=new kR(O,Mt,ue),W=new a2(j,we,ue,Ht),It=new nb(j,Se,we),Vt=new hb(j,Se,we),we.programs=ne.programs,O.capabilities=ue,O.extensions=Se,O.properties=le,O.renderLists=Ut,O.shadowMap=Yt,O.state=Ht,O.info=we}Xt();const _t=new e2(O,j);this.xr=_t,this.getContext=function(){return j},this.getContextAttributes=function(){return j.getContextAttributes()},this.forceContextLoss=function(){const D=Se.get("WEBGL_lose_context");D&&D.loseContext()},this.forceContextRestore=function(){const D=Se.get("WEBGL_lose_context");D&&D.restoreContext()},this.getPixelRatio=function(){return at},this.setPixelRatio=function(D){D!==void 0&&(at=D,this.setSize(Q,ht,!1))},this.getSize=function(D){return D.set(Q,ht)},this.setSize=function(D,nt,mt=!0){if(_t.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Q=D,ht=nt,a.width=Math.floor(D*at),a.height=Math.floor(nt*at),mt===!0&&(a.style.width=D+"px",a.style.height=nt+"px"),this.setViewport(0,0,D,nt)},this.getDrawingBufferSize=function(D){return D.set(Q*at,ht*at).floor()},this.setDrawingBufferSize=function(D,nt,mt){Q=D,ht=nt,at=mt,a.width=Math.floor(D*mt),a.height=Math.floor(nt*mt),this.setViewport(0,0,D,nt)},this.getCurrentViewport=function(D){return D.copy(k)},this.getViewport=function(D){return D.copy(Jt)},this.setViewport=function(D,nt,mt,ut){D.isVector4?Jt.set(D.x,D.y,D.z,D.w):Jt.set(D,nt,mt,ut),Ht.viewport(k.copy(Jt).multiplyScalar(at).round())},this.getScissor=function(D){return D.copy(pe)},this.setScissor=function(D,nt,mt,ut){D.isVector4?pe.set(D.x,D.y,D.z,D.w):pe.set(D,nt,mt,ut),Ht.scissor(yt.copy(pe).multiplyScalar(at).round())},this.getScissorTest=function(){return be},this.setScissorTest=function(D){Ht.setScissorTest(be=D)},this.setOpaqueSort=function(D){wt=D},this.setTransparentSort=function(D){Nt=D},this.getClearColor=function(D){return D.copy(re.getClearColor())},this.setClearColor=function(){re.setClearColor.apply(re,arguments)},this.getClearAlpha=function(){return re.getClearAlpha()},this.setClearAlpha=function(){re.setClearAlpha.apply(re,arguments)},this.clear=function(D=!0,nt=!0,mt=!0){let ut=0;if(D){let $=!1;if(q!==null){const Pt=q.texture.format;$=Pt===zm||Pt===Pm||Pt===Om}if($){const Pt=q.texture.type,Wt=Pt===lr||Pt===Vs||Pt===bu||Pt===ol||Pt===Um||Pt===Nm,ae=re.getClearColor(),se=re.getClearAlpha(),fe=ae.r,te=ae.g,Zt=ae.b;Wt?(w[0]=fe,w[1]=te,w[2]=Zt,w[3]=se,j.clearBufferuiv(j.COLOR,0,w)):(L[0]=fe,L[1]=te,L[2]=Zt,L[3]=se,j.clearBufferiv(j.COLOR,0,L))}else ut|=j.COLOR_BUFFER_BIT}nt&&(ut|=j.DEPTH_BUFFER_BIT),mt&&(ut|=j.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),j.clear(ut)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){a.removeEventListener("webglcontextlost",Ct,!1),a.removeEventListener("webglcontextrestored",qt,!1),a.removeEventListener("webglcontextcreationerror",Kt,!1),Ut.dispose(),de.dispose(),le.dispose(),C.dispose(),ot.dispose(),Mt.dispose(),Ge.dispose(),W.dispose(),ne.dispose(),_t.dispose(),_t.removeEventListener("sessionstart",gn),_t.removeEventListener("sessionend",Ys),Ln.stop()};function Ct(D){D.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),ft=!0}function qt(){console.log("THREE.WebGLRenderer: Context Restored."),ft=!1;const D=we.autoReset,nt=Yt.enabled,mt=Yt.autoUpdate,ut=Yt.needsUpdate,$=Yt.type;Xt(),we.autoReset=D,Yt.enabled=nt,Yt.autoUpdate=mt,Yt.needsUpdate=ut,Yt.type=$}function Kt(D){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",D.statusMessage)}function ye(D){const nt=D.target;nt.removeEventListener("dispose",ye),an(nt)}function an(D){En(D),le.remove(D)}function En(D){const nt=le.get(D).programs;nt!==void 0&&(nt.forEach(function(mt){ne.releaseProgram(mt)}),D.isShaderMaterial&&ne.releaseShaderCache(D))}this.renderBufferDirect=function(D,nt,mt,ut,$,Pt){nt===null&&(nt=Ot);const Wt=$.isMesh&&$.matrixWorld.determinant()<0,ae=ur(D,nt,mt,ut,$);Ht.setMaterial(ut,Wt);let se=mt.index,fe=1;if(ut.wireframe===!0){if(se=Dt.getWireframeAttribute(mt),se===void 0)return;fe=2}const te=mt.drawRange,Zt=mt.attributes.position;let Ae=te.start*fe,Oe=(te.start+te.count)*fe;Pt!==null&&(Ae=Math.max(Ae,Pt.start*fe),Oe=Math.min(Oe,(Pt.start+Pt.count)*fe)),se!==null?(Ae=Math.max(Ae,0),Oe=Math.min(Oe,se.count)):Zt!=null&&(Ae=Math.max(Ae,0),Oe=Math.min(Oe,Zt.count));const je=Oe-Ae;if(je<0||je===1/0)return;Ge.setup($,ut,ae,mt,se);let Hn,Ve=It;if(se!==null&&(Hn=xt.get(se),Ve=Vt,Ve.setIndex(Hn)),$.isMesh)ut.wireframe===!0?(Ht.setLineWidth(ut.wireframeLinewidth*ve()),Ve.setMode(j.LINES)):Ve.setMode(j.TRIANGLES);else if($.isLine){let ie=ut.linewidth;ie===void 0&&(ie=1),Ht.setLineWidth(ie*ve()),$.isLineSegments?Ve.setMode(j.LINES):$.isLineLoop?Ve.setMode(j.LINE_LOOP):Ve.setMode(j.LINE_STRIP)}else $.isPoints?Ve.setMode(j.POINTS):$.isSprite&&Ve.setMode(j.TRIANGLES);if($.isBatchedMesh)if($._multiDrawInstances!==null)Ve.renderMultiDrawInstances($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount,$._multiDrawInstances);else if(Se.get("WEBGL_multi_draw"))Ve.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{const ie=$._multiDrawStarts,ti=$._multiDrawCounts,Ie=$._multiDrawCount,yn=se?xt.get(se).bytesPerElement:1,ei=le.get(ut).currentProgram.getUniforms();for(let Sn=0;Sn<Ie;Sn++)ei.setValue(j,"_gl_DrawID",Sn),Ve.render(ie[Sn]/yn,ti[Sn])}else if($.isInstancedMesh)Ve.renderInstances(Ae,je,$.count);else if(mt.isInstancedBufferGeometry){const ie=mt._maxInstanceCount!==void 0?mt._maxInstanceCount:1/0,ti=Math.min(mt.instanceCount,ie);Ve.renderInstances(Ae,je,ti)}else Ve.render(Ae,je)};function Le(D,nt,mt){D.transparent===!0&&D.side===rr&&D.forceSinglePass===!1?(D.side=bi,D.needsUpdate=!0,$i(D,nt,mt),D.side=Kr,D.needsUpdate=!0,$i(D,nt,mt),D.side=rr):$i(D,nt,mt)}this.compile=function(D,nt,mt=null){mt===null&&(mt=D),M=de.get(mt),M.init(nt),G.push(M),mt.traverseVisible(function($){$.isLight&&$.layers.test(nt.layers)&&(M.pushLight($),$.castShadow&&M.pushShadow($))}),D!==mt&&D.traverseVisible(function($){$.isLight&&$.layers.test(nt.layers)&&(M.pushLight($),$.castShadow&&M.pushShadow($))}),M.setupLights();const ut=new Set;return D.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;const Pt=$.material;if(Pt)if(Array.isArray(Pt))for(let Wt=0;Wt<Pt.length;Wt++){const ae=Pt[Wt];Le(ae,mt,$),ut.add(ae)}else Le(Pt,mt,$),ut.add(Pt)}),G.pop(),M=null,ut},this.compileAsync=function(D,nt,mt=null){const ut=this.compile(D,nt,mt);return new Promise($=>{function Pt(){if(ut.forEach(function(Wt){le.get(Wt).currentProgram.isReady()&&ut.delete(Wt)}),ut.size===0){$(D);return}setTimeout(Pt,10)}Se.get("KHR_parallel_shader_compile")!==null?Pt():setTimeout(Pt,10)})};let Qe=null;function An(D){Qe&&Qe(D)}function gn(){Ln.stop()}function Ys(){Ln.start()}const Ln=new AS;Ln.setAnimationLoop(An),typeof self<"u"&&Ln.setContext(self),this.setAnimationLoop=function(D){Qe=D,_t.setAnimationLoop(D),D===null?Ln.stop():Ln.start()},_t.addEventListener("sessionstart",gn),_t.addEventListener("sessionend",Ys),this.render=function(D,nt){if(nt!==void 0&&nt.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(ft===!0)return;if(D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),nt.parent===null&&nt.matrixWorldAutoUpdate===!0&&nt.updateMatrixWorld(),_t.enabled===!0&&_t.isPresenting===!0&&(_t.cameraAutoUpdate===!0&&_t.updateCamera(nt),nt=_t.getCamera()),D.isScene===!0&&D.onBeforeRender(O,D,nt,q),M=de.get(D,G.length),M.init(nt),G.push(M),zt.multiplyMatrices(nt.projectionMatrix,nt.matrixWorldInverse),U.setFromProjectionMatrix(zt),At=this.localClippingEnabled,J=bt.init(this.clippingPlanes,At),T=Ut.get(D,X.length),T.init(),X.push(T),_t.enabled===!0&&_t.isPresenting===!0){const Pt=O.xr.getDepthSensingMesh();Pt!==null&&Ri(Pt,nt,-1/0,O.sortObjects)}Ri(D,nt,0,O.sortObjects),T.finish(),O.sortObjects===!0&&T.sort(wt,Nt),Bt=_t.enabled===!1||_t.isPresenting===!1||_t.hasDepthSensing()===!1,Bt&&re.addToRenderList(T,D),this.info.render.frame++,J===!0&&bt.beginShadows();const mt=M.state.shadowsArray;Yt.render(mt,D,nt),J===!0&&bt.endShadows(),this.info.autoReset===!0&&this.info.reset();const ut=T.opaque,$=T.transmissive;if(M.setupLights(),nt.isArrayCamera){const Pt=nt.cameras;if($.length>0)for(let Wt=0,ae=Pt.length;Wt<ae;Wt++){const se=Pt[Wt];$e(ut,$,D,se)}Bt&&re.render(D);for(let Wt=0,ae=Pt.length;Wt<ae;Wt++){const se=Pt[Wt];va(T,D,se,se.viewport)}}else $.length>0&&$e(ut,$,D,nt),Bt&&re.render(D),va(T,D,nt);q!==null&&(z.updateMultisampleRenderTarget(q),z.updateRenderTargetMipmap(q)),D.isScene===!0&&D.onAfterRender(O,D,nt),Ge.resetDefaultState(),P=-1,N=null,G.pop(),G.length>0?(M=G[G.length-1],J===!0&&bt.setGlobalState(O.clippingPlanes,M.state.camera)):M=null,X.pop(),X.length>0?T=X[X.length-1]:T=null};function Ri(D,nt,mt,ut){if(D.visible===!1)return;if(D.layers.test(nt.layers)){if(D.isGroup)mt=D.renderOrder;else if(D.isLOD)D.autoUpdate===!0&&D.update(nt);else if(D.isLight)M.pushLight(D),D.castShadow&&M.pushShadow(D);else if(D.isSprite){if(!D.frustumCulled||U.intersectsSprite(D)){ut&&jt.setFromMatrixPosition(D.matrixWorld).applyMatrix4(zt);const Wt=Mt.update(D),ae=D.material;ae.visible&&T.push(D,Wt,ae,mt,jt.z,null)}}else if((D.isMesh||D.isLine||D.isPoints)&&(!D.frustumCulled||U.intersectsObject(D))){const Wt=Mt.update(D),ae=D.material;if(ut&&(D.boundingSphere!==void 0?(D.boundingSphere===null&&D.computeBoundingSphere(),jt.copy(D.boundingSphere.center)):(Wt.boundingSphere===null&&Wt.computeBoundingSphere(),jt.copy(Wt.boundingSphere.center)),jt.applyMatrix4(D.matrixWorld).applyMatrix4(zt)),Array.isArray(ae)){const se=Wt.groups;for(let fe=0,te=se.length;fe<te;fe++){const Zt=se[fe],Ae=ae[Zt.materialIndex];Ae&&Ae.visible&&T.push(D,Wt,Ae,mt,jt.z,Zt)}}else ae.visible&&T.push(D,Wt,ae,mt,jt.z,null)}}const Pt=D.children;for(let Wt=0,ae=Pt.length;Wt<ae;Wt++)Ri(Pt[Wt],nt,mt,ut)}function va(D,nt,mt,ut){const $=D.opaque,Pt=D.transmissive,Wt=D.transparent;M.setupLightsView(mt),J===!0&&bt.setGlobalState(O.clippingPlanes,mt),ut&&Ht.viewport(k.copy(ut)),$.length>0&&bn($,nt,mt),Pt.length>0&&bn(Pt,nt,mt),Wt.length>0&&bn(Wt,nt,mt),Ht.buffers.depth.setTest(!0),Ht.buffers.depth.setMask(!0),Ht.buffers.color.setMask(!0),Ht.setPolygonOffset(!1)}function $e(D,nt,mt,ut){if((mt.isScene===!0?mt.overrideMaterial:null)!==null)return;M.state.transmissionRenderTarget[ut.id]===void 0&&(M.state.transmissionRenderTarget[ut.id]=new Xs(1,1,{generateMipmaps:!0,type:Se.has("EXT_color_buffer_half_float")||Se.has("EXT_color_buffer_float")?Cu:lr,minFilter:Gs,samples:4,stencilBuffer:h,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:We.workingColorSpace}));const Pt=M.state.transmissionRenderTarget[ut.id],Wt=ut.viewport||k;Pt.setSize(Wt.z,Wt.w);const ae=O.getRenderTarget();O.setRenderTarget(Pt),O.getClearColor(Rt),gt=O.getClearAlpha(),gt<1&&O.setClearColor(16777215,.5),O.clear(),Bt&&re.render(mt);const se=O.toneMapping;O.toneMapping=Zr;const fe=ut.viewport;if(ut.viewport!==void 0&&(ut.viewport=void 0),M.setupLightsView(ut),J===!0&&bt.setGlobalState(O.clippingPlanes,ut),bn(D,mt,ut),z.updateMultisampleRenderTarget(Pt),z.updateRenderTargetMipmap(Pt),Se.has("WEBGL_multisampled_render_to_texture")===!1){let te=!1;for(let Zt=0,Ae=nt.length;Zt<Ae;Zt++){const Oe=nt[Zt],je=Oe.object,Hn=Oe.geometry,Ve=Oe.material,ie=Oe.group;if(Ve.side===rr&&je.layers.test(ut.layers)){const ti=Ve.side;Ve.side=bi,Ve.needsUpdate=!0,vi(je,mt,ut,Hn,Ve,ie),Ve.side=ti,Ve.needsUpdate=!0,te=!0}}te===!0&&(z.updateMultisampleRenderTarget(Pt),z.updateRenderTargetMipmap(Pt))}O.setRenderTarget(ae),O.setClearColor(Rt,gt),fe!==void 0&&(ut.viewport=fe),O.toneMapping=se}function bn(D,nt,mt){const ut=nt.isScene===!0?nt.overrideMaterial:null;for(let $=0,Pt=D.length;$<Pt;$++){const Wt=D[$],ae=Wt.object,se=Wt.geometry,fe=ut===null?Wt.material:ut,te=Wt.group;ae.layers.test(mt.layers)&&vi(ae,nt,mt,se,fe,te)}}function vi(D,nt,mt,ut,$,Pt){D.onBeforeRender(O,nt,mt,ut,$,Pt),D.modelViewMatrix.multiplyMatrices(mt.matrixWorldInverse,D.matrixWorld),D.normalMatrix.getNormalMatrix(D.modelViewMatrix),$.onBeforeRender(O,nt,mt,ut,D,Pt),$.transparent===!0&&$.side===rr&&$.forceSinglePass===!1?($.side=bi,$.needsUpdate=!0,O.renderBufferDirect(mt,nt,ut,$,D,Pt),$.side=Kr,$.needsUpdate=!0,O.renderBufferDirect(mt,nt,ut,$,D,Pt),$.side=rr):O.renderBufferDirect(mt,nt,ut,$,D,Pt),D.onAfterRender(O,nt,mt,ut,$,Pt)}function $i(D,nt,mt){nt.isScene!==!0&&(nt=Ot);const ut=le.get(D),$=M.state.lights,Pt=M.state.shadowsArray,Wt=$.state.version,ae=ne.getParameters(D,$.state,Pt,nt,mt),se=ne.getProgramCacheKey(ae);let fe=ut.programs;ut.environment=D.isMeshStandardMaterial?nt.environment:null,ut.fog=nt.fog,ut.envMap=(D.isMeshStandardMaterial?ot:C).get(D.envMap||ut.environment),ut.envMapRotation=ut.environment!==null&&D.envMap===null?nt.environmentRotation:D.envMapRotation,fe===void 0&&(D.addEventListener("dispose",ye),fe=new Map,ut.programs=fe);let te=fe.get(se);if(te!==void 0){if(ut.currentProgram===te&&ut.lightsStateVersion===Wt)return Ba(D,ae),te}else ae.uniforms=ne.getUniforms(D),D.onBeforeCompile(ae,O),te=ne.acquireProgram(ae,se),fe.set(se,te),ut.uniforms=ae.uniforms;const Zt=ut.uniforms;return(!D.isShaderMaterial&&!D.isRawShaderMaterial||D.clipping===!0)&&(Zt.clippingPlanes=bt.uniform),Ba(D,ae),ut.needsLights=cr(D),ut.lightsStateVersion=Wt,ut.needsLights&&(Zt.ambientLightColor.value=$.state.ambient,Zt.lightProbe.value=$.state.probe,Zt.directionalLights.value=$.state.directional,Zt.directionalLightShadows.value=$.state.directionalShadow,Zt.spotLights.value=$.state.spot,Zt.spotLightShadows.value=$.state.spotShadow,Zt.rectAreaLights.value=$.state.rectArea,Zt.ltc_1.value=$.state.rectAreaLTC1,Zt.ltc_2.value=$.state.rectAreaLTC2,Zt.pointLights.value=$.state.point,Zt.pointLightShadows.value=$.state.pointShadow,Zt.hemisphereLights.value=$.state.hemi,Zt.directionalShadowMap.value=$.state.directionalShadowMap,Zt.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Zt.spotShadowMap.value=$.state.spotShadowMap,Zt.spotLightMatrix.value=$.state.spotLightMatrix,Zt.spotLightMap.value=$.state.spotLightMap,Zt.pointShadowMap.value=$.state.pointShadowMap,Zt.pointShadowMatrix.value=$.state.pointShadowMatrix),ut.currentProgram=te,ut.uniformsList=null,te}function Ci(D){if(D.uniformsList===null){const nt=D.currentProgram.getUniforms();D.uniformsList=Nf.seqWithValue(nt.seq,D.uniforms)}return D.uniformsList}function Ba(D,nt){const mt=le.get(D);mt.outputColorSpace=nt.outputColorSpace,mt.batching=nt.batching,mt.batchingColor=nt.batchingColor,mt.instancing=nt.instancing,mt.instancingColor=nt.instancingColor,mt.instancingMorph=nt.instancingMorph,mt.skinning=nt.skinning,mt.morphTargets=nt.morphTargets,mt.morphNormals=nt.morphNormals,mt.morphColors=nt.morphColors,mt.morphTargetsCount=nt.morphTargetsCount,mt.numClippingPlanes=nt.numClippingPlanes,mt.numIntersection=nt.numClipIntersection,mt.vertexAlphas=nt.vertexAlphas,mt.vertexTangents=nt.vertexTangents,mt.toneMapping=nt.toneMapping}function ur(D,nt,mt,ut,$){nt.isScene!==!0&&(nt=Ot),z.resetTextureUnits();const Pt=nt.fog,Wt=ut.isMeshStandardMaterial?nt.environment:null,ae=q===null?O.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:cl,se=(ut.isMeshStandardMaterial?ot:C).get(ut.envMap||Wt),fe=ut.vertexColors===!0&&!!mt.attributes.color&&mt.attributes.color.itemSize===4,te=!!mt.attributes.tangent&&(!!ut.normalMap||ut.anisotropy>0),Zt=!!mt.morphAttributes.position,Ae=!!mt.morphAttributes.normal,Oe=!!mt.morphAttributes.color;let je=Zr;ut.toneMapped&&(q===null||q.isXRRenderTarget===!0)&&(je=O.toneMapping);const Hn=mt.morphAttributes.position||mt.morphAttributes.normal||mt.morphAttributes.color,Ve=Hn!==void 0?Hn.length:0,ie=le.get(ut),ti=M.state.lights;if(J===!0&&(At===!0||D!==N)){const Rn=D===N&&ut.id===P;bt.setState(ut,D,Rn)}let Ie=!1;ut.version===ie.__version?(ie.needsLights&&ie.lightsStateVersion!==ti.state.version||ie.outputColorSpace!==ae||$.isBatchedMesh&&ie.batching===!1||!$.isBatchedMesh&&ie.batching===!0||$.isBatchedMesh&&ie.batchingColor===!0&&$.colorTexture===null||$.isBatchedMesh&&ie.batchingColor===!1&&$.colorTexture!==null||$.isInstancedMesh&&ie.instancing===!1||!$.isInstancedMesh&&ie.instancing===!0||$.isSkinnedMesh&&ie.skinning===!1||!$.isSkinnedMesh&&ie.skinning===!0||$.isInstancedMesh&&ie.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&ie.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&ie.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&ie.instancingMorph===!1&&$.morphTexture!==null||ie.envMap!==se||ut.fog===!0&&ie.fog!==Pt||ie.numClippingPlanes!==void 0&&(ie.numClippingPlanes!==bt.numPlanes||ie.numIntersection!==bt.numIntersection)||ie.vertexAlphas!==fe||ie.vertexTangents!==te||ie.morphTargets!==Zt||ie.morphNormals!==Ae||ie.morphColors!==Oe||ie.toneMapping!==je||ie.morphTargetsCount!==Ve)&&(Ie=!0):(Ie=!0,ie.__version=ut.version);let yn=ie.currentProgram;Ie===!0&&(yn=$i(ut,nt,$));let ei=!1,Sn=!1,ci=!1;const he=yn.getUniforms(),ni=ie.uniforms;if(Ht.useProgram(yn.program)&&(ei=!0,Sn=!0,ci=!0),ut.id!==P&&(P=ut.id,Sn=!0),ei||N!==D){Ht.buffers.depth.getReversed()?(vt.copy(D.projectionMatrix),jE(vt),ZE(vt),he.setValue(j,"projectionMatrix",vt)):he.setValue(j,"projectionMatrix",D.projectionMatrix),he.setValue(j,"viewMatrix",D.matrixWorldInverse);const On=he.map.cameraPosition;On!==void 0&&On.setValue(j,Ft.setFromMatrixPosition(D.matrixWorld)),ue.logarithmicDepthBuffer&&he.setValue(j,"logDepthBufFC",2/(Math.log(D.far+1)/Math.LN2)),(ut.isMeshPhongMaterial||ut.isMeshToonMaterial||ut.isMeshLambertMaterial||ut.isMeshBasicMaterial||ut.isMeshStandardMaterial||ut.isShaderMaterial)&&he.setValue(j,"isOrthographic",D.isOrthographicCamera===!0),N!==D&&(N=D,Sn=!0,ci=!0)}if($.isSkinnedMesh){he.setOptional(j,$,"bindMatrix"),he.setOptional(j,$,"bindMatrixInverse");const Rn=$.skeleton;Rn&&(Rn.boneTexture===null&&Rn.computeBoneTexture(),he.setValue(j,"boneTexture",Rn.boneTexture,z))}$.isBatchedMesh&&(he.setOptional(j,$,"batchingTexture"),he.setValue(j,"batchingTexture",$._matricesTexture,z),he.setOptional(j,$,"batchingIdTexture"),he.setValue(j,"batchingIdTexture",$._indirectTexture,z),he.setOptional(j,$,"batchingColorTexture"),$._colorsTexture!==null&&he.setValue(j,"batchingColorTexture",$._colorsTexture,z));const ta=mt.morphAttributes;if((ta.position!==void 0||ta.normal!==void 0||ta.color!==void 0)&&me.update($,mt,yn),(Sn||ie.receiveShadow!==$.receiveShadow)&&(ie.receiveShadow=$.receiveShadow,he.setValue(j,"receiveShadow",$.receiveShadow)),ut.isMeshGouraudMaterial&&ut.envMap!==null&&(ni.envMap.value=se,ni.flipEnvMap.value=se.isCubeTexture&&se.isRenderTargetTexture===!1?-1:1),ut.isMeshStandardMaterial&&ut.envMap===null&&nt.environment!==null&&(ni.envMapIntensity.value=nt.environmentIntensity),Sn&&(he.setValue(j,"toneMappingExposure",O.toneMappingExposure),ie.needsLights&&_a(ni,ci),Pt&&ut.fog===!0&&St.refreshFogUniforms(ni,Pt),St.refreshMaterialUniforms(ni,ut,at,ht,M.state.transmissionRenderTarget[D.id]),Nf.upload(j,Ci(ie),ni,z)),ut.isShaderMaterial&&ut.uniformsNeedUpdate===!0&&(Nf.upload(j,Ci(ie),ni,z),ut.uniformsNeedUpdate=!1),ut.isSpriteMaterial&&he.setValue(j,"center",$.center),he.setValue(j,"modelViewMatrix",$.modelViewMatrix),he.setValue(j,"normalMatrix",$.normalMatrix),he.setValue(j,"modelMatrix",$.matrixWorld),ut.isShaderMaterial||ut.isRawShaderMaterial){const Rn=ut.uniformsGroups;for(let On=0,Gn=Rn.length;On<Gn;On++){const qs=Rn[On];W.update(qs,yn),W.bind(qs,yn)}}return yn}function _a(D,nt){D.ambientLightColor.needsUpdate=nt,D.lightProbe.needsUpdate=nt,D.directionalLights.needsUpdate=nt,D.directionalLightShadows.needsUpdate=nt,D.pointLights.needsUpdate=nt,D.pointLightShadows.needsUpdate=nt,D.spotLights.needsUpdate=nt,D.spotLightShadows.needsUpdate=nt,D.rectAreaLights.needsUpdate=nt,D.hemisphereLights.needsUpdate=nt}function cr(D){return D.isMeshLambertMaterial||D.isMeshToonMaterial||D.isMeshPhongMaterial||D.isMeshStandardMaterial||D.isShadowMaterial||D.isShaderMaterial&&D.lights===!0}this.getActiveCubeFace=function(){return Z},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return q},this.setRenderTargetTextures=function(D,nt,mt){le.get(D.texture).__webglTexture=nt,le.get(D.depthTexture).__webglTexture=mt;const ut=le.get(D);ut.__hasExternalTextures=!0,ut.__autoAllocateDepthBuffer=mt===void 0,ut.__autoAllocateDepthBuffer||Se.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ut.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(D,nt){const mt=le.get(D);mt.__webglFramebuffer=nt,mt.__useDefaultFramebuffer=nt===void 0},this.setRenderTarget=function(D,nt=0,mt=0){q=D,Z=nt,V=mt;let ut=!0,$=null,Pt=!1,Wt=!1;if(D){const se=le.get(D);if(se.__useDefaultFramebuffer!==void 0)Ht.bindFramebuffer(j.FRAMEBUFFER,null),ut=!1;else if(se.__webglFramebuffer===void 0)z.setupRenderTarget(D);else if(se.__hasExternalTextures)z.rebindTextures(D,le.get(D.texture).__webglTexture,le.get(D.depthTexture).__webglTexture);else if(D.depthBuffer){const Zt=D.depthTexture;if(se.__boundDepthTexture!==Zt){if(Zt!==null&&le.has(Zt)&&(D.width!==Zt.image.width||D.height!==Zt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");z.setupDepthRenderbuffer(D)}}const fe=D.texture;(fe.isData3DTexture||fe.isDataArrayTexture||fe.isCompressedArrayTexture)&&(Wt=!0);const te=le.get(D).__webglFramebuffer;D.isWebGLCubeRenderTarget?(Array.isArray(te[nt])?$=te[nt][mt]:$=te[nt],Pt=!0):D.samples>0&&z.useMultisampledRTT(D)===!1?$=le.get(D).__webglMultisampledFramebuffer:Array.isArray(te)?$=te[mt]:$=te,k.copy(D.viewport),yt.copy(D.scissor),dt=D.scissorTest}else k.copy(Jt).multiplyScalar(at).floor(),yt.copy(pe).multiplyScalar(at).floor(),dt=be;if(Ht.bindFramebuffer(j.FRAMEBUFFER,$)&&ut&&Ht.drawBuffers(D,$),Ht.viewport(k),Ht.scissor(yt),Ht.setScissorTest(dt),Pt){const se=le.get(D.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_CUBE_MAP_POSITIVE_X+nt,se.__webglTexture,mt)}else if(Wt){const se=le.get(D.texture),fe=nt||0;j.framebufferTextureLayer(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,se.__webglTexture,mt||0,fe)}P=-1},this.readRenderTargetPixels=function(D,nt,mt,ut,$,Pt,Wt){if(!(D&&D.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ae=le.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&Wt!==void 0&&(ae=ae[Wt]),ae){Ht.bindFramebuffer(j.FRAMEBUFFER,ae);try{const se=D.texture,fe=se.format,te=se.type;if(!ue.textureFormatReadable(fe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ue.textureTypeReadable(te)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}nt>=0&&nt<=D.width-ut&&mt>=0&&mt<=D.height-$&&j.readPixels(nt,mt,ut,$,_e.convert(fe),_e.convert(te),Pt)}finally{const se=q!==null?le.get(q).__webglFramebuffer:null;Ht.bindFramebuffer(j.FRAMEBUFFER,se)}}},this.readRenderTargetPixelsAsync=async function(D,nt,mt,ut,$,Pt,Wt){if(!(D&&D.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ae=le.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&Wt!==void 0&&(ae=ae[Wt]),ae){const se=D.texture,fe=se.format,te=se.type;if(!ue.textureFormatReadable(fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ue.textureTypeReadable(te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(nt>=0&&nt<=D.width-ut&&mt>=0&&mt<=D.height-$){Ht.bindFramebuffer(j.FRAMEBUFFER,ae);const Zt=j.createBuffer();j.bindBuffer(j.PIXEL_PACK_BUFFER,Zt),j.bufferData(j.PIXEL_PACK_BUFFER,Pt.byteLength,j.STREAM_READ),j.readPixels(nt,mt,ut,$,_e.convert(fe),_e.convert(te),0);const Ae=q!==null?le.get(q).__webglFramebuffer:null;Ht.bindFramebuffer(j.FRAMEBUFFER,Ae);const Oe=j.fenceSync(j.SYNC_GPU_COMMANDS_COMPLETE,0);return j.flush(),await WE(j,Oe,4),j.bindBuffer(j.PIXEL_PACK_BUFFER,Zt),j.getBufferSubData(j.PIXEL_PACK_BUFFER,0,Pt),j.deleteBuffer(Zt),j.deleteSync(Oe),Pt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(D,nt=null,mt=0){D.isTexture!==!0&&(xu("WebGLRenderer: copyFramebufferToTexture function signature has changed."),nt=arguments[0]||null,D=arguments[1]);const ut=Math.pow(2,-mt),$=Math.floor(D.image.width*ut),Pt=Math.floor(D.image.height*ut),Wt=nt!==null?nt.x:0,ae=nt!==null?nt.y:0;z.setTexture2D(D,0),j.copyTexSubImage2D(j.TEXTURE_2D,mt,0,0,Wt,ae,$,Pt),Ht.unbindTexture()},this.copyTextureToTexture=function(D,nt,mt=null,ut=null,$=0){D.isTexture!==!0&&(xu("WebGLRenderer: copyTextureToTexture function signature has changed."),ut=arguments[0]||null,D=arguments[1],nt=arguments[2],$=arguments[3]||0,mt=null);let Pt,Wt,ae,se,fe,te,Zt,Ae,Oe;const je=D.isCompressedTexture?D.mipmaps[$]:D.image;mt!==null?(Pt=mt.max.x-mt.min.x,Wt=mt.max.y-mt.min.y,ae=mt.isBox3?mt.max.z-mt.min.z:1,se=mt.min.x,fe=mt.min.y,te=mt.isBox3?mt.min.z:0):(Pt=je.width,Wt=je.height,ae=je.depth||1,se=0,fe=0,te=0),ut!==null?(Zt=ut.x,Ae=ut.y,Oe=ut.z):(Zt=0,Ae=0,Oe=0);const Hn=_e.convert(nt.format),Ve=_e.convert(nt.type);let ie;nt.isData3DTexture?(z.setTexture3D(nt,0),ie=j.TEXTURE_3D):nt.isDataArrayTexture||nt.isCompressedArrayTexture?(z.setTexture2DArray(nt,0),ie=j.TEXTURE_2D_ARRAY):(z.setTexture2D(nt,0),ie=j.TEXTURE_2D),j.pixelStorei(j.UNPACK_FLIP_Y_WEBGL,nt.flipY),j.pixelStorei(j.UNPACK_PREMULTIPLY_ALPHA_WEBGL,nt.premultiplyAlpha),j.pixelStorei(j.UNPACK_ALIGNMENT,nt.unpackAlignment);const ti=j.getParameter(j.UNPACK_ROW_LENGTH),Ie=j.getParameter(j.UNPACK_IMAGE_HEIGHT),yn=j.getParameter(j.UNPACK_SKIP_PIXELS),ei=j.getParameter(j.UNPACK_SKIP_ROWS),Sn=j.getParameter(j.UNPACK_SKIP_IMAGES);j.pixelStorei(j.UNPACK_ROW_LENGTH,je.width),j.pixelStorei(j.UNPACK_IMAGE_HEIGHT,je.height),j.pixelStorei(j.UNPACK_SKIP_PIXELS,se),j.pixelStorei(j.UNPACK_SKIP_ROWS,fe),j.pixelStorei(j.UNPACK_SKIP_IMAGES,te);const ci=D.isDataArrayTexture||D.isData3DTexture,he=nt.isDataArrayTexture||nt.isData3DTexture;if(D.isRenderTargetTexture||D.isDepthTexture){const ni=le.get(D),ta=le.get(nt),Rn=le.get(ni.__renderTarget),On=le.get(ta.__renderTarget);Ht.bindFramebuffer(j.READ_FRAMEBUFFER,Rn.__webglFramebuffer),Ht.bindFramebuffer(j.DRAW_FRAMEBUFFER,On.__webglFramebuffer);for(let Gn=0;Gn<ae;Gn++)ci&&j.framebufferTextureLayer(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,le.get(D).__webglTexture,$,te+Gn),D.isDepthTexture?(he&&j.framebufferTextureLayer(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,le.get(nt).__webglTexture,$,Oe+Gn),j.blitFramebuffer(se,fe,Pt,Wt,Zt,Ae,Pt,Wt,j.DEPTH_BUFFER_BIT,j.NEAREST)):he?j.copyTexSubImage3D(ie,$,Zt,Ae,Oe+Gn,se,fe,Pt,Wt):j.copyTexSubImage2D(ie,$,Zt,Ae,Oe+Gn,se,fe,Pt,Wt);Ht.bindFramebuffer(j.READ_FRAMEBUFFER,null),Ht.bindFramebuffer(j.DRAW_FRAMEBUFFER,null)}else he?D.isDataTexture||D.isData3DTexture?j.texSubImage3D(ie,$,Zt,Ae,Oe,Pt,Wt,ae,Hn,Ve,je.data):nt.isCompressedArrayTexture?j.compressedTexSubImage3D(ie,$,Zt,Ae,Oe,Pt,Wt,ae,Hn,je.data):j.texSubImage3D(ie,$,Zt,Ae,Oe,Pt,Wt,ae,Hn,Ve,je):D.isDataTexture?j.texSubImage2D(j.TEXTURE_2D,$,Zt,Ae,Pt,Wt,Hn,Ve,je.data):D.isCompressedTexture?j.compressedTexSubImage2D(j.TEXTURE_2D,$,Zt,Ae,je.width,je.height,Hn,je.data):j.texSubImage2D(j.TEXTURE_2D,$,Zt,Ae,Pt,Wt,Hn,Ve,je);j.pixelStorei(j.UNPACK_ROW_LENGTH,ti),j.pixelStorei(j.UNPACK_IMAGE_HEIGHT,Ie),j.pixelStorei(j.UNPACK_SKIP_PIXELS,yn),j.pixelStorei(j.UNPACK_SKIP_ROWS,ei),j.pixelStorei(j.UNPACK_SKIP_IMAGES,Sn),$===0&&nt.generateMipmaps&&j.generateMipmap(ie),Ht.unbindTexture()},this.copyTextureToTexture3D=function(D,nt,mt=null,ut=null,$=0){return D.isTexture!==!0&&(xu("WebGLRenderer: copyTextureToTexture3D function signature has changed."),mt=arguments[0]||null,ut=arguments[1]||null,D=arguments[2],nt=arguments[3],$=arguments[4]||0),xu('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(D,nt,mt,ut,$)},this.initRenderTarget=function(D){le.get(D).__webglFramebuffer===void 0&&z.setupRenderTarget(D)},this.initTexture=function(D){D.isCubeTexture?z.setTextureCube(D,0):D.isData3DTexture?z.setTexture3D(D,0):D.isDataArrayTexture||D.isCompressedArrayTexture?z.setTexture2DArray(D,0):z.setTexture2D(D,0),Ht.unbindTexture()},this.resetState=function(){Z=0,V=0,q=null,Ht.reset(),Ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return sr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const a=this.getContext();a.drawingBufferColorspace=We._getDrawingBufferColorSpace(e),a.unpackColorSpace=We._getUnpackColorSpace()}}class Hm{constructor(e,a=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ne(e),this.density=a}clone(){return new Hm(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class s2 extends ui{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new za,this.environmentIntensity=1,this.environmentRotation=new za,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,a){return super.copy(e,a),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const a=super.toJSON(e);return this.fog!==null&&(a.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(a.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(a.object.backgroundIntensity=this.backgroundIntensity),a.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(a.object.environmentIntensity=this.environmentIntensity),a.object.environmentRotation=this.environmentRotation.toArray(),a}}class o2 extends li{constructor(e=null,a=1,s=1,u,h,p,d,g,y=Vi,x=Vi,_,E){super(null,p,d,g,y,x,u,h,_,E),this.isDataTexture=!0,this.image={data:e,width:a,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class By extends Xi{constructor(e,a,s,u=1){super(e,a,s),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=u}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Qo=new hn,Fy=new hn,Tf=[],Hy=new ks,l2=new hn,_u=new ga,yu=new dl;class u2 extends ga{constructor(e,a,s){super(e,a),this.isInstancedMesh=!0,this.instanceMatrix=new By(new Float32Array(s*16),16),this.instanceColor=null,this.morphTexture=null,this.count=s,this.boundingBox=null,this.boundingSphere=null;for(let u=0;u<s;u++)this.setMatrixAt(u,l2)}computeBoundingBox(){const e=this.geometry,a=this.count;this.boundingBox===null&&(this.boundingBox=new ks),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let s=0;s<a;s++)this.getMatrixAt(s,Qo),Hy.copy(e.boundingBox).applyMatrix4(Qo),this.boundingBox.union(Hy)}computeBoundingSphere(){const e=this.geometry,a=this.count;this.boundingSphere===null&&(this.boundingSphere=new dl),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let s=0;s<a;s++)this.getMatrixAt(s,Qo),yu.copy(e.boundingSphere).applyMatrix4(Qo),this.boundingSphere.union(yu)}copy(e,a){return super.copy(e,a),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,a){a.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,a){a.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,a){const s=a.morphTargetInfluences,u=this.morphTexture.source.data.data,h=s.length+1,p=e*h+1;for(let d=0;d<s.length;d++)s[d]=u[p+d]}raycast(e,a){const s=this.matrixWorld,u=this.count;if(_u.geometry=this.geometry,_u.material=this.material,_u.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),yu.copy(this.boundingSphere),yu.applyMatrix4(s),e.ray.intersectsSphere(yu)!==!1))for(let h=0;h<u;h++){this.getMatrixAt(h,Qo),Fy.multiplyMatrices(s,Qo),_u.matrixWorld=Fy,_u.raycast(e,Tf);for(let p=0,d=Tf.length;p<d;p++){const g=Tf[p];g.instanceId=h,g.object=this,a.push(g)}Tf.length=0}}setColorAt(e,a){this.instanceColor===null&&(this.instanceColor=new By(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),a.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,a){a.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,a){const s=a.morphTargetInfluences,u=s.length+1;this.morphTexture===null&&(this.morphTexture=new o2(new Float32Array(u*this.count),u,this.count,Lm,Oa));const h=this.morphTexture.source.data.data;let p=0;for(let y=0;y<s.length;y++)p+=s[y];const d=this.geometry.morphTargetsRelative?1:1-p,g=u*e;h[g]=d,h.set(s,g+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class US extends pl{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new Ne(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Gy=new hn,Rm=new gS,Af=new dl,bf=new lt;class c2 extends ui{constructor(e=new Ia,a=new US){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=a,this.updateMorphTargets()}copy(e,a){return super.copy(e,a),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,a){const s=this.geometry,u=this.matrixWorld,h=e.params.Points.threshold,p=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Af.copy(s.boundingSphere),Af.applyMatrix4(u),Af.radius+=h,e.ray.intersectsSphere(Af)===!1)return;Gy.copy(u).invert(),Rm.copy(e.ray).applyMatrix4(Gy);const d=h/((this.scale.x+this.scale.y+this.scale.z)/3),g=d*d,y=s.index,_=s.attributes.position;if(y!==null){const E=Math.max(0,p.start),A=Math.min(y.count,p.start+p.count);for(let w=E,L=A;w<L;w++){const T=y.getX(w);bf.fromBufferAttribute(_,T),Vy(bf,T,g,u,e,a,this)}}else{const E=Math.max(0,p.start),A=Math.min(_.count,p.start+p.count);for(let w=E,L=A;w<L;w++)bf.fromBufferAttribute(_,w),Vy(bf,w,g,u,e,a,this)}}updateMorphTargets(){const a=this.geometry.morphAttributes,s=Object.keys(a);if(s.length>0){const u=a[s[0]];if(u!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let h=0,p=u.length;h<p;h++){const d=u[h].name||String(h);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=h}}}}}function Vy(o,e,a,s,u,h,p){const d=Rm.distanceSqToPoint(o);if(d<a){const g=new lt;Rm.closestPointToPoint(o,g),g.applyMatrix4(s);const y=u.ray.origin.distanceTo(g);if(y<u.near||y>u.far)return;h.push({distance:y,distanceToRay:Math.sqrt(d),point:g,index:e,face:null,faceIndex:null,barycoord:null,object:p})}}class f2 extends li{constructor(e,a,s,u,h,p,d,g,y){super(e,a,s,u,h,p,d,g,y),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Gm extends Ia{constructor(e=1,a=32,s=16,u=0,h=Math.PI*2,p=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:a,heightSegments:s,phiStart:u,phiLength:h,thetaStart:p,thetaLength:d},a=Math.max(3,Math.floor(a)),s=Math.max(2,Math.floor(s));const g=Math.min(p+d,Math.PI);let y=0;const x=[],_=new lt,E=new lt,A=[],w=[],L=[],T=[];for(let M=0;M<=s;M++){const X=[],G=M/s;let O=0;M===0&&p===0?O=.5/a:M===s&&g===Math.PI&&(O=-.5/a);for(let ft=0;ft<=a;ft++){const Z=ft/a;_.x=-e*Math.cos(u+Z*h)*Math.sin(p+G*d),_.y=e*Math.cos(p+G*d),_.z=e*Math.sin(u+Z*h)*Math.sin(p+G*d),w.push(_.x,_.y,_.z),E.copy(_).normalize(),L.push(E.x,E.y,E.z),T.push(Z+O,1-G),X.push(y++)}x.push(X)}for(let M=0;M<s;M++)for(let X=0;X<a;X++){const G=x[M][X+1],O=x[M][X],ft=x[M+1][X],Z=x[M+1][X+1];(M!==0||p>0)&&A.push(G,O,Z),(M!==s-1||g<Math.PI)&&A.push(O,ft,Z)}this.setIndex(A),this.setAttribute("position",new Pa(w,3)),this.setAttribute("normal",new Pa(L,3)),this.setAttribute("uv",new Pa(T,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gm(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class h2 extends pl{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Ne(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fS,this.normalScale=new Ze(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new za,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class d2 extends h2{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ze(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return oi(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(a){this.ior=(1+.4*a)/(1-.4*a)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ne(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ne(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ne(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class NS extends ui{constructor(e,a=1){super(),this.isLight=!0,this.type="Light",this.color=new Ne(e),this.intensity=a}dispose(){}copy(e,a){return super.copy(e,a),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const a=super.toJSON(e);return a.object.color=this.color.getHex(),a.object.intensity=this.intensity,this.groundColor!==void 0&&(a.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(a.object.distance=this.distance),this.angle!==void 0&&(a.object.angle=this.angle),this.decay!==void 0&&(a.object.decay=this.decay),this.penumbra!==void 0&&(a.object.penumbra=this.penumbra),this.shadow!==void 0&&(a.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(a.object.target=this.target.uuid),a}}const zp=new hn,Xy=new lt,ky=new lt;class p2{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ze(512,512),this.map=null,this.mapPass=null,this.matrix=new hn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Bm,this._frameExtents=new Ze(1,1),this._viewportCount=1,this._viewports=[new ln(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const a=this.camera,s=this.matrix;Xy.setFromMatrixPosition(e.matrixWorld),a.position.copy(Xy),ky.setFromMatrixPosition(e.target.matrixWorld),a.lookAt(ky),a.updateMatrixWorld(),zp.multiplyMatrices(a.projectionMatrix,a.matrixWorldInverse),this._frustum.setFromProjectionMatrix(zp),s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(zp)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Yy=new hn,Su=new lt,Ip=new lt;class m2 extends p2{constructor(){super(new Gi(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ze(4,2),this._viewportCount=6,this._viewports=[new ln(2,1,1,1),new ln(0,1,1,1),new ln(3,1,1,1),new ln(1,1,1,1),new ln(3,0,1,1),new ln(1,0,1,1)],this._cubeDirections=[new lt(1,0,0),new lt(-1,0,0),new lt(0,0,1),new lt(0,0,-1),new lt(0,1,0),new lt(0,-1,0)],this._cubeUps=[new lt(0,1,0),new lt(0,1,0),new lt(0,1,0),new lt(0,1,0),new lt(0,0,1),new lt(0,0,-1)]}updateMatrices(e,a=0){const s=this.camera,u=this.matrix,h=e.distance||s.far;h!==s.far&&(s.far=h,s.updateProjectionMatrix()),Su.setFromMatrixPosition(e.matrixWorld),s.position.copy(Su),Ip.copy(s.position),Ip.add(this._cubeDirections[a]),s.up.copy(this._cubeUps[a]),s.lookAt(Ip),s.updateMatrixWorld(),u.makeTranslation(-Su.x,-Su.y,-Su.z),Yy.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Yy)}}class Bp extends NS{constructor(e,a,s=0,u=2){super(e,a),this.isPointLight=!0,this.type="PointLight",this.distance=s,this.decay=u,this.shadow=new m2}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,a){return super.copy(e,a),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class g2 extends NS{constructor(e,a){super(e,a),this.isAmbientLight=!0,this.type="AmbientLight"}}class v2{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=qy(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const a=qy();e=(a-this.oldTime)/1e3,this.oldTime=a,this.elapsedTime+=e}return e}}function qy(){return performance.now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:wm}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=wm);var Fp={},Wy;function _2(){return Wy||(Wy=1,(function(){var o;function e(f){var m=0;return function(){return m<f.length?{done:!1,value:f[m++]}:{done:!0}}}var a=typeof Object.defineProperties=="function"?Object.defineProperty:function(f,m,S){return f==Array.prototype||f==Object.prototype||(f[m]=S.value),f};function s(f){f=[typeof globalThis=="object"&&globalThis,f,typeof window=="object"&&window,typeof self=="object"&&self,typeof w_=="object"&&w_];for(var m=0;m<f.length;++m){var S=f[m];if(S&&S.Math==Math)return S}throw Error("Cannot find global object")}var u=s(this);function h(f,m){if(m)t:{var S=u;f=f.split(".");for(var b=0;b<f.length-1;b++){var I=f[b];if(!(I in S))break t;S=S[I]}f=f[f.length-1],b=S[f],m=m(b),m!=b&&m!=null&&a(S,f,{configurable:!0,writable:!0,value:m})}}h("Symbol",function(f){function m(F){if(this instanceof m)throw new TypeError("Symbol is not a constructor");return new S(b+(F||"")+"_"+I++,F)}function S(F,B){this.h=F,a(this,"description",{configurable:!0,writable:!0,value:B})}if(f)return f;S.prototype.toString=function(){return this.h};var b="jscomp_symbol_"+(1e9*Math.random()>>>0)+"_",I=0;return m}),h("Symbol.iterator",function(f){if(f)return f;f=Symbol("Symbol.iterator");for(var m="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),S=0;S<m.length;S++){var b=u[m[S]];typeof b=="function"&&typeof b.prototype[f]!="function"&&a(b.prototype,f,{configurable:!0,writable:!0,value:function(){return p(e(this))}})}return f});function p(f){return f={next:f},f[Symbol.iterator]=function(){return this},f}function d(f){var m=typeof Symbol<"u"&&Symbol.iterator&&f[Symbol.iterator];return m?m.call(f):{next:e(f)}}function g(f){if(!(f instanceof Array)){f=d(f);for(var m,S=[];!(m=f.next()).done;)S.push(m.value);f=S}return f}var y=typeof Object.assign=="function"?Object.assign:function(f,m){for(var S=1;S<arguments.length;S++){var b=arguments[S];if(b)for(var I in b)Object.prototype.hasOwnProperty.call(b,I)&&(f[I]=b[I])}return f};h("Object.assign",function(f){return f||y});var x=typeof Object.create=="function"?Object.create:function(f){function m(){}return m.prototype=f,new m},_;if(typeof Object.setPrototypeOf=="function")_=Object.setPrototypeOf;else{var E;t:{var A={a:!0},w={};try{w.__proto__=A,E=w.a;break t}catch{}E=!1}_=E?function(f,m){if(f.__proto__=m,f.__proto__!==m)throw new TypeError(f+" is not extensible");return f}:null}var L=_;function T(f,m){if(f.prototype=x(m.prototype),f.prototype.constructor=f,L)L(f,m);else for(var S in m)if(S!="prototype")if(Object.defineProperties){var b=Object.getOwnPropertyDescriptor(m,S);b&&Object.defineProperty(f,S,b)}else f[S]=m[S];f.ya=m.prototype}function M(){this.m=!1,this.j=null,this.i=void 0,this.h=1,this.v=this.s=0,this.l=null}function X(f){if(f.m)throw new TypeError("Generator is already running");f.m=!0}M.prototype.u=function(f){this.i=f};function G(f,m){f.l={ma:m,na:!0},f.h=f.s||f.v}M.prototype.return=function(f){this.l={return:f},this.h=this.v};function O(f,m,S){return f.h=S,{value:m}}function ft(f){this.h=new M,this.i=f}function Z(f,m){X(f.h);var S=f.h.j;return S?V(f,"return"in S?S.return:function(b){return{value:b,done:!0}},m,f.h.return):(f.h.return(m),q(f))}function V(f,m,S,b){try{var I=m.call(f.h.j,S);if(!(I instanceof Object))throw new TypeError("Iterator result "+I+" is not an object");if(!I.done)return f.h.m=!1,I;var F=I.value}catch(B){return f.h.j=null,G(f.h,B),q(f)}return f.h.j=null,b.call(f.h,F),q(f)}function q(f){for(;f.h.h;)try{var m=f.i(f.h);if(m)return f.h.m=!1,{value:m.value,done:!1}}catch(S){f.h.i=void 0,G(f.h,S)}if(f.h.m=!1,f.h.l){if(m=f.h.l,f.h.l=null,m.na)throw m.ma;return{value:m.return,done:!0}}return{value:void 0,done:!0}}function P(f){this.next=function(m){return X(f.h),f.h.j?m=V(f,f.h.j.next,m,f.h.u):(f.h.u(m),m=q(f)),m},this.throw=function(m){return X(f.h),f.h.j?m=V(f,f.h.j.throw,m,f.h.u):(G(f.h,m),m=q(f)),m},this.return=function(m){return Z(f,m)},this[Symbol.iterator]=function(){return this}}function N(f){function m(b){return f.next(b)}function S(b){return f.throw(b)}return new Promise(function(b,I){function F(B){B.done?b(B.value):Promise.resolve(B.value).then(m,S).then(F,I)}F(f.next())})}function k(f){return N(new P(new ft(f)))}h("Promise",function(f){function m(B){this.i=0,this.j=void 0,this.h=[],this.u=!1;var K=this.l();try{B(K.resolve,K.reject)}catch(pt){K.reject(pt)}}function S(){this.h=null}function b(B){return B instanceof m?B:new m(function(K){K(B)})}if(f)return f;S.prototype.i=function(B){if(this.h==null){this.h=[];var K=this;this.j(function(){K.m()})}this.h.push(B)};var I=u.setTimeout;S.prototype.j=function(B){I(B,0)},S.prototype.m=function(){for(;this.h&&this.h.length;){var B=this.h;this.h=[];for(var K=0;K<B.length;++K){var pt=B[K];B[K]=null;try{pt()}catch(Lt){this.l(Lt)}}}this.h=null},S.prototype.l=function(B){this.j(function(){throw B})},m.prototype.l=function(){function B(Lt){return function(Gt){pt||(pt=!0,Lt.call(K,Gt))}}var K=this,pt=!1;return{resolve:B(this.I),reject:B(this.m)}},m.prototype.I=function(B){if(B===this)this.m(new TypeError("A Promise cannot resolve to itself"));else if(B instanceof m)this.L(B);else{t:switch(typeof B){case"object":var K=B!=null;break t;case"function":K=!0;break t;default:K=!1}K?this.F(B):this.s(B)}},m.prototype.F=function(B){var K=void 0;try{K=B.then}catch(pt){this.m(pt);return}typeof K=="function"?this.M(K,B):this.s(B)},m.prototype.m=function(B){this.v(2,B)},m.prototype.s=function(B){this.v(1,B)},m.prototype.v=function(B,K){if(this.i!=0)throw Error("Cannot settle("+B+", "+K+"): Promise already settled in state"+this.i);this.i=B,this.j=K,this.i===2&&this.K(),this.H()},m.prototype.K=function(){var B=this;I(function(){if(B.D()){var K=u.console;typeof K<"u"&&K.error(B.j)}},1)},m.prototype.D=function(){if(this.u)return!1;var B=u.CustomEvent,K=u.Event,pt=u.dispatchEvent;return typeof pt>"u"?!0:(typeof B=="function"?B=new B("unhandledrejection",{cancelable:!0}):typeof K=="function"?B=new K("unhandledrejection",{cancelable:!0}):(B=u.document.createEvent("CustomEvent"),B.initCustomEvent("unhandledrejection",!1,!0,B)),B.promise=this,B.reason=this.j,pt(B))},m.prototype.H=function(){if(this.h!=null){for(var B=0;B<this.h.length;++B)F.i(this.h[B]);this.h=null}};var F=new S;return m.prototype.L=function(B){var K=this.l();B.T(K.resolve,K.reject)},m.prototype.M=function(B,K){var pt=this.l();try{B.call(K,pt.resolve,pt.reject)}catch(Lt){pt.reject(Lt)}},m.prototype.then=function(B,K){function pt(ce,$t){return typeof ce=="function"?function(Me){try{Lt(ce(Me))}catch(De){Gt(De)}}:$t}var Lt,Gt,xe=new m(function(ce,$t){Lt=ce,Gt=$t});return this.T(pt(B,Lt),pt(K,Gt)),xe},m.prototype.catch=function(B){return this.then(void 0,B)},m.prototype.T=function(B,K){function pt(){switch(Lt.i){case 1:B(Lt.j);break;case 2:K(Lt.j);break;default:throw Error("Unexpected state: "+Lt.i)}}var Lt=this;this.h==null?F.i(pt):this.h.push(pt),this.u=!0},m.resolve=b,m.reject=function(B){return new m(function(K,pt){pt(B)})},m.race=function(B){return new m(function(K,pt){for(var Lt=d(B),Gt=Lt.next();!Gt.done;Gt=Lt.next())b(Gt.value).T(K,pt)})},m.all=function(B){var K=d(B),pt=K.next();return pt.done?b([]):new m(function(Lt,Gt){function xe(Me){return function(De){ce[Me]=De,$t--,$t==0&&Lt(ce)}}var ce=[],$t=0;do ce.push(void 0),$t++,b(pt.value).T(xe(ce.length-1),Gt),pt=K.next();while(!pt.done)})},m});function yt(f,m){f instanceof String&&(f+="");var S=0,b=!1,I={next:function(){if(!b&&S<f.length){var F=S++;return{value:m(F,f[F]),done:!1}}return b=!0,{done:!0,value:void 0}}};return I[Symbol.iterator]=function(){return I},I}h("Array.prototype.keys",function(f){return f||function(){return yt(this,function(m){return m})}}),h("Array.prototype.fill",function(f){return f||function(m,S,b){var I=this.length||0;for(0>S&&(S=Math.max(0,I+S)),(b==null||b>I)&&(b=I),b=Number(b),0>b&&(b=Math.max(0,I+b)),S=Number(S||0);S<b;S++)this[S]=m;return this}});function dt(f){return f||Array.prototype.fill}h("Int8Array.prototype.fill",dt),h("Uint8Array.prototype.fill",dt),h("Uint8ClampedArray.prototype.fill",dt),h("Int16Array.prototype.fill",dt),h("Uint16Array.prototype.fill",dt),h("Int32Array.prototype.fill",dt),h("Uint32Array.prototype.fill",dt),h("Float32Array.prototype.fill",dt),h("Float64Array.prototype.fill",dt),h("Object.is",function(f){return f||function(m,S){return m===S?m!==0||1/m===1/S:m!==m&&S!==S}}),h("Array.prototype.includes",function(f){return f||function(m,S){var b=this;b instanceof String&&(b=String(b));var I=b.length;for(S=S||0,0>S&&(S=Math.max(S+I,0));S<I;S++){var F=b[S];if(F===m||Object.is(F,m))return!0}return!1}}),h("String.prototype.includes",function(f){return f||function(m,S){if(this==null)throw new TypeError("The 'this' value for String.prototype.includes must not be null or undefined");if(m instanceof RegExp)throw new TypeError("First argument to String.prototype.includes must not be a regular expression");return this.indexOf(m,S||0)!==-1}});var Rt=this||self;function gt(f,m){f=f.split(".");var S=Rt;f[0]in S||typeof S.execScript>"u"||S.execScript("var "+f[0]);for(var b;f.length&&(b=f.shift());)f.length||m===void 0?S[b]&&S[b]!==Object.prototype[b]?S=S[b]:S=S[b]={}:S[b]=m}function Q(f){var m;t:{if((m=Rt.navigator)&&(m=m.userAgent))break t;m=""}return m.indexOf(f)!=-1}var ht=Array.prototype.map?function(f,m){return Array.prototype.map.call(f,m,void 0)}:function(f,m){for(var S=f.length,b=Array(S),I=typeof f=="string"?f.split(""):f,F=0;F<S;F++)F in I&&(b[F]=m.call(void 0,I[F],F,f));return b},at={},wt=null;function Nt(f){var m=f.length,S=3*m/4;S%3?S=Math.floor(S):"=.".indexOf(f[m-1])!=-1&&(S="=.".indexOf(f[m-2])!=-1?S-2:S-1);var b=new Uint8Array(S),I=0;return Jt(f,function(F){b[I++]=F}),I!==S?b.subarray(0,I):b}function Jt(f,m){function S(pt){for(;b<f.length;){var Lt=f.charAt(b++),Gt=wt[Lt];if(Gt!=null)return Gt;if(!/^[\s\xa0]*$/.test(Lt))throw Error("Unknown base64 encoding at char: "+Lt)}return pt}pe();for(var b=0;;){var I=S(-1),F=S(0),B=S(64),K=S(64);if(K===64&&I===-1)break;m(I<<2|F>>4),B!=64&&(m(F<<4&240|B>>2),K!=64&&m(B<<6&192|K))}}function pe(){if(!wt){wt={};for(var f="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),m=["+/=","+/","-_=","-_.","-_"],S=0;5>S;S++){var b=f.concat(m[S].split(""));at[S]=b;for(var I=0;I<b.length;I++){var F=b[I];wt[F]===void 0&&(wt[F]=I)}}}}var be=typeof Uint8Array<"u",U=!(Q("Trident")||Q("MSIE"))&&typeof Rt.btoa=="function";function J(f){if(!U){var m;m===void 0&&(m=0),pe(),m=at[m];for(var S=Array(Math.floor(f.length/3)),b=m[64]||"",I=0,F=0;I<f.length-2;I+=3){var B=f[I],K=f[I+1],pt=f[I+2],Lt=m[B>>2];B=m[(B&3)<<4|K>>4],K=m[(K&15)<<2|pt>>6],pt=m[pt&63],S[F++]=Lt+B+K+pt}switch(Lt=0,pt=b,f.length-I){case 2:Lt=f[I+1],pt=m[(Lt&15)<<2]||b;case 1:f=f[I],S[F]=m[f>>2]+m[(f&3)<<4|Lt>>4]+pt+b}return S.join("")}for(m="";10240<f.length;)m+=String.fromCharCode.apply(null,f.subarray(0,10240)),f=f.subarray(10240);return m+=String.fromCharCode.apply(null,f),btoa(m)}var At=RegExp("[-_.]","g");function vt(f){switch(f){case"-":return"+";case"_":return"/";case".":return"=";default:return""}}function zt(f){if(!U)return Nt(f);At.test(f)&&(f=f.replace(At,vt)),f=atob(f);for(var m=new Uint8Array(f.length),S=0;S<f.length;S++)m[S]=f.charCodeAt(S);return m}var Ft;function jt(){return Ft||(Ft=new Uint8Array(0))}var Ot={},Bt=typeof Uint8Array.prototype.slice=="function",ve=0,j=0;function un(f){var m=0>f;f=Math.abs(f);var S=f>>>0;f=Math.floor((f-S)/4294967296),m&&(S=d(ue(S,f)),m=S.next().value,f=S.next().value,S=m),ve=S>>>0,j=f>>>0}var Se=typeof BigInt=="function";function ue(f,m){return m=~m,f?f=~f+1:m+=1,[f,m]}function Ht(f,m){this.i=f>>>0,this.h=m>>>0}function we(f){if(!f)return le||(le=new Ht(0,0));if(!/^-?\d+$/.test(f))return null;if(16>f.length)un(Number(f));else if(Se)f=BigInt(f),ve=Number(f&BigInt(4294967295))>>>0,j=Number(f>>BigInt(32)&BigInt(4294967295));else{var m=+(f[0]==="-");j=ve=0;for(var S=f.length,b=m,I=(S-m)%6+m;I<=S;b=I,I+=6)b=Number(f.slice(b,I)),j*=1e6,ve=1e6*ve+b,4294967296<=ve&&(j+=ve/4294967296|0,ve%=4294967296);m&&(m=d(ue(ve,j)),f=m.next().value,m=m.next().value,ve=f,j=m)}return new Ht(ve,j)}var le;function z(f,m){return Error("Invalid wire type: "+f+" (at position "+m+")")}function C(){return Error("Failed to read varint, encoding is invalid.")}function ot(f,m){return Error("Tried to read past the end of the data "+m+" > "+f)}function xt(){throw Error("Invalid UTF8")}function Dt(f,m){return m=String.fromCharCode.apply(null,m),f==null?m:f+m}var Mt=void 0,ne,St=typeof TextDecoder<"u",Ut,de=typeof TextEncoder<"u",bt;function Yt(f){if(f!==Ot)throw Error("illegal external caller")}function re(f,m){if(Yt(m),this.V=f,f!=null&&f.length===0)throw Error("ByteString should be constructed with non-empty values")}function me(){return bt||(bt=new re(null,Ot))}function It(f){Yt(Ot);var m=f.V;return m=m==null||be&&m!=null&&m instanceof Uint8Array?m:typeof m=="string"?zt(m):null,m==null?m:f.V=m}function Vt(f){if(typeof f=="string")return{buffer:zt(f),C:!1};if(Array.isArray(f))return{buffer:new Uint8Array(f),C:!1};if(f.constructor===Uint8Array)return{buffer:f,C:!1};if(f.constructor===ArrayBuffer)return{buffer:new Uint8Array(f),C:!1};if(f.constructor===re)return{buffer:It(f)||jt(),C:!0};if(f instanceof Uint8Array)return{buffer:new Uint8Array(f.buffer,f.byteOffset,f.byteLength),C:!1};throw Error("Type not convertible to a Uint8Array, expected a Uint8Array, an ArrayBuffer, a base64 encoded string, a ByteString or an Array of numbers")}function _e(f,m){this.i=null,this.m=!1,this.h=this.j=this.l=0,Ge(this,f,m)}function Ge(f,m,S){S=S===void 0?{}:S,f.S=S.S===void 0?!1:S.S,m&&(m=Vt(m),f.i=m.buffer,f.m=m.C,f.l=0,f.j=f.i.length,f.h=f.l)}_e.prototype.reset=function(){this.h=this.l};function W(f,m){if(f.h=m,m>f.j)throw ot(f.j,m)}function Xt(f){var m=f.i,S=f.h,b=m[S++],I=b&127;if(b&128&&(b=m[S++],I|=(b&127)<<7,b&128&&(b=m[S++],I|=(b&127)<<14,b&128&&(b=m[S++],I|=(b&127)<<21,b&128&&(b=m[S++],I|=b<<28,b&128&&m[S++]&128&&m[S++]&128&&m[S++]&128&&m[S++]&128&&m[S++]&128)))))throw C();return W(f,S),I}function _t(f,m){if(0>m)throw Error("Tried to read a negative byte length: "+m);var S=f.h,b=S+m;if(b>f.j)throw ot(m,f.j-S);return f.h=b,S}var Ct=[];function qt(){this.h=[]}qt.prototype.length=function(){return this.h.length},qt.prototype.end=function(){var f=this.h;return this.h=[],f};function Kt(f,m,S){for(;0<S||127<m;)f.h.push(m&127|128),m=(m>>>7|S<<25)>>>0,S>>>=7;f.h.push(m)}function ye(f,m){for(;127<m;)f.h.push(m&127|128),m>>>=7;f.h.push(m)}function an(f,m){if(Ct.length){var S=Ct.pop();Ge(S,f,m),f=S}else f=new _e(f,m);this.h=f,this.j=this.h.h,this.i=this.l=-1,this.setOptions(m)}an.prototype.setOptions=function(f){f=f===void 0?{}:f,this.ca=f.ca===void 0?!1:f.ca},an.prototype.reset=function(){this.h.reset(),this.j=this.h.h,this.i=this.l=-1};function En(f){var m=f.h;if(m.h==m.j)return!1;f.j=f.h.h;var S=Xt(f.h)>>>0;if(m=S>>>3,S&=7,!(0<=S&&5>=S))throw z(S,f.j);if(1>m)throw Error("Invalid field number: "+m+" (at position "+f.j+")");return f.l=m,f.i=S,!0}function Le(f){switch(f.i){case 0:if(f.i!=0)Le(f);else t:{f=f.h;for(var m=f.h,S=m+10,b=f.i;m<S;)if((b[m++]&128)===0){W(f,m);break t}throw C()}break;case 1:f=f.h,W(f,f.h+8);break;case 2:f.i!=2?Le(f):(m=Xt(f.h)>>>0,f=f.h,W(f,f.h+m));break;case 5:f=f.h,W(f,f.h+4);break;case 3:m=f.l;do{if(!En(f))throw Error("Unmatched start-group tag: stream EOF");if(f.i==4){if(f.l!=m)throw Error("Unmatched end-group tag");break}Le(f)}while(!0);break;default:throw z(f.i,f.j)}}var Qe=[];function An(){this.j=[],this.i=0,this.h=new qt}function gn(f,m){m.length!==0&&(f.j.push(m),f.i+=m.length)}function Ys(f,m){if(m=m.R){gn(f,f.h.end());for(var S=0;S<m.length;S++)gn(f,It(m[S])||jt())}}var Ln=typeof Symbol=="function"&&typeof Symbol()=="symbol"?Symbol():void 0;function Ri(f,m){return Ln?f[Ln]|=m:f.A!==void 0?f.A|=m:(Object.defineProperties(f,{A:{value:m,configurable:!0,writable:!0,enumerable:!1}}),m)}function va(f,m){Ln?f[Ln]&&(f[Ln]&=~m):f.A!==void 0&&(f.A&=~m)}function $e(f){var m;return Ln?m=f[Ln]:m=f.A,m??0}function bn(f,m){Ln?f[Ln]=m:f.A!==void 0?f.A=m:Object.defineProperties(f,{A:{value:m,configurable:!0,writable:!0,enumerable:!1}})}function vi(f){return Ri(f,1),f}function $i(f,m){bn(m,(f|0)&-51)}function Ci(f,m){bn(m,(f|18)&-41)}var Ba={};function ur(f){return f!==null&&typeof f=="object"&&!Array.isArray(f)&&f.constructor===Object}var _a,cr=[];bn(cr,23),_a=Object.freeze(cr);function D(f){if($e(f.o)&2)throw Error("Cannot mutate an immutable Message")}function nt(f){var m=f.length;(m=m?f[m-1]:void 0)&&ur(m)?m.g=1:(m={},f.push((m.g=1,m)))}function mt(f){var m=f.i+f.G;return f.B||(f.B=f.o[m]={})}function ut(f,m){return m===-1?null:m>=f.i?f.B?f.B[m]:void 0:f.o[m+f.G]}function $(f,m,S,b){D(f),Pt(f,m,S,b)}function Pt(f,m,S,b){f.j&&(f.j=void 0),m>=f.i||b?mt(f)[m]=S:(f.o[m+f.G]=S,(f=f.B)&&m in f&&delete f[m])}function Wt(f,m,S,b){var I=ut(f,m);Array.isArray(I)||(I=_a);var F=$e(I);if(F&1||vi(I),b)F&2||Ri(I,2),S&1||Object.freeze(I);else{b=!(S&2);var B=F&2;S&1||!B?b&&F&16&&!B&&va(I,16):(I=vi(Array.prototype.slice.call(I)),Pt(f,m,I))}return I}function ae(f,m){var S=ut(f,m),b=S==null?S:typeof S=="number"||S==="NaN"||S==="Infinity"||S==="-Infinity"?Number(S):void 0;return b!=null&&b!==S&&Pt(f,m,b),b}function se(f,m,S,b,I){f.h||(f.h={});var F=f.h[S],B=Wt(f,S,3,I);if(!F){var K=B;F=[];var pt=!!($e(f.o)&16);B=!!($e(K)&2);var Lt=K;!I&&B&&(K=Array.prototype.slice.call(K));for(var Gt=B,xe=0;xe<K.length;xe++){var ce=K[xe],$t=m,Me=!1;if(Me=Me===void 0?!1:Me,ce=Array.isArray(ce)?new $t(ce):Me?new $t:void 0,ce!==void 0){$t=ce.o;var De=Me=$e($t);B&&(De|=2),pt&&(De|=16),De!=Me&&bn($t,De),$t=De,Gt=Gt||!!(2&$t),F.push(ce)}}return f.h[S]=F,pt=$e(K),m=pt|33,m=Gt?m&-9:m|8,pt!=m&&(Gt=K,Object.isFrozen(Gt)&&(Gt=Array.prototype.slice.call(Gt)),bn(Gt,m),K=Gt),Lt!==K&&Pt(f,S,K),(I||b&&B)&&Ri(F,2),b&&Object.freeze(F),F}return I||(I=Object.isFrozen(F),b&&!I?Object.freeze(F):!b&&I&&(F=Array.prototype.slice.call(F),f.h[S]=F)),F}function fe(f,m,S){var b=!!($e(f.o)&2);if(m=se(f,m,S,b,b),f=Wt(f,S,3,b),!(b||$e(f)&8)){for(b=0;b<m.length;b++){if(S=m[b],$e(S.o)&2){var I=ci(S,!1);I.j=S}else I=S;S!==I&&(m[b]=I,f[b]=I.o)}Ri(f,8)}return m}function te(f,m,S){if(S!=null&&typeof S!="number")throw Error("Value of float/double field must be a number|null|undefined, found "+typeof S+": "+S);$(f,m,S)}function Zt(f,m,S,b,I){D(f);var F=se(f,S,m,!1,!1);return S=b??new S,f=Wt(f,m,2,!1),I!=null?(F.splice(I,0,S),f.splice(I,0,S.o)):(F.push(S),f.push(S.o)),S.C()&&va(f,8),S}function Ae(f,m){return f??m}function Oe(f,m,S){return S=S===void 0?0:S,Ae(ae(f,m),S)}var je;function Hn(f){switch(typeof f){case"number":return isFinite(f)?f:String(f);case"object":if(f)if(Array.isArray(f)){if(($e(f)&128)!==0)return f=Array.prototype.slice.call(f),nt(f),f}else{if(be&&f!=null&&f instanceof Uint8Array)return J(f);if(f instanceof re){var m=f.V;return m==null?"":typeof m=="string"?m:f.V=J(m)}}}return f}function Ve(f,m,S,b){if(f!=null){if(Array.isArray(f))f=ie(f,m,S,b!==void 0);else if(ur(f)){var I={},F;for(F in f)I[F]=Ve(f[F],m,S,b);f=I}else f=m(f,b);return f}}function ie(f,m,S,b){var I=$e(f);b=b?!!(I&16):void 0,f=Array.prototype.slice.call(f);for(var F=0;F<f.length;F++)f[F]=Ve(f[F],m,S,b);return S(I,f),f}function ti(f){return f.ja===Ba?f.toJSON():Hn(f)}function Ie(f,m){f&128&&nt(m)}function yn(f,m,S){if(S=S===void 0?Ci:S,f!=null){if(be&&f instanceof Uint8Array)return f.length?new re(new Uint8Array(f),Ot):me();if(Array.isArray(f)){var b=$e(f);return b&2?f:m&&!(b&32)&&(b&16||b===0)?(bn(f,b|2),f):(f=ie(f,yn,b&4?Ci:S,!0),m=$e(f),m&4&&m&2&&Object.freeze(f),f)}return f.ja===Ba?Sn(f):f}}function ei(f,m,S,b,I,F,B){if(f=f.h&&f.h[S]){if(b=$e(f),b&2?b=f:(F=ht(f,Sn),Ci(b,F),Object.freeze(F),b=F),D(m),B=b==null?_a:vi([]),b!=null){for(F=!!b.length,f=0;f<b.length;f++){var K=b[f];F=F&&!($e(K.o)&2),B[f]=K.o}F=(F?8:0)|1,f=$e(B),(f&F)!==F&&(Object.isFrozen(B)&&(B=Array.prototype.slice.call(B)),bn(B,f|F)),m.h||(m.h={}),m.h[S]=b}else m.h&&(m.h[S]=void 0);Pt(m,S,B,I)}else $(m,S,yn(b,F,B),I)}function Sn(f){return $e(f.o)&2||(f=ci(f,!0),Ri(f.o,2)),f}function ci(f,m){var S=f.o,b=[];Ri(b,16);var I=f.constructor.h;if(I&&b.push(I),I=f.B,I){b.length=S.length,b.fill(void 0,b.length,S.length);var F={};b[b.length-1]=F}($e(S)&128)!==0&&nt(b),m=m||f.C()?Ci:$i,F=f.constructor,je=b,b=new F(b),je=void 0,f.R&&(b.R=f.R.slice()),F=!!($e(S)&16);for(var B=I?S.length-1:S.length,K=0;K<B;K++)ei(f,b,K-f.G,S[K],!1,F,m);if(I)for(var pt in I)ei(f,b,+pt,I[pt],!0,F,m);return b}function he(f,m,S){f==null&&(f=je),je=void 0;var b=this.constructor.i||0,I=0<b,F=this.constructor.h,B=!1;if(f==null){f=F?[F]:[];var K=48,pt=!0;I&&(b=0,K|=128),bn(f,K)}else{if(!Array.isArray(f)||F&&F!==f[0])throw Error();var Lt=K=Ri(f,0);if((pt=(16&Lt)!==0)&&((B=(32&Lt)!==0)||(Lt|=32)),I){if(128&Lt)b=0;else if(0<f.length){var Gt=f[f.length-1];if(ur(Gt)&&"g"in Gt){b=0,Lt|=128,delete Gt.g;var xe=!0,ce;for(ce in Gt){xe=!1;break}xe&&f.pop()}}}else if(128&Lt)throw Error();K!==Lt&&bn(f,Lt)}this.G=(F?0:-1)-b,this.h=void 0,this.o=f;t:{if(F=this.o.length,b=F-1,F&&(F=this.o[b],ur(F))){this.B=F,this.i=b-this.G;break t}m!==void 0&&-1<m?(this.i=Math.max(m,b+1-this.G),this.B=void 0):this.i=Number.MAX_VALUE}if(!I&&this.B&&"g"in this.B)throw Error('Unexpected "g" flag in sparse object of message that is not a group type.');if(S){m=pt&&!B&&!0,I=this.i;var $t;for(pt=0;pt<S.length;pt++)B=S[pt],B<I?(B+=this.G,(b=f[B])?ni(b,m):f[B]=_a):($t||($t=mt(this)),(b=$t[B])?ni(b,m):$t[B]=_a)}}he.prototype.toJSON=function(){return ie(this.o,ti,Ie)},he.prototype.C=function(){return!!($e(this.o)&2)};function ni(f,m){if(Array.isArray(f)){var S=$e(f),b=1;!m||S&2||(b|=16),(S&b)!==b&&bn(f,S|b)}}he.prototype.ja=Ba,he.prototype.toString=function(){return this.o.toString()};function ta(f,m,S){if(S){var b={},I;for(I in S){var F=S[I],B=F.qa;B||(b.J=F.wa||F.oa.W,F.ia?(b.aa=vl(F.ia),B=(function(K){return function(pt,Lt,Gt){return K.J(pt,Lt,Gt,K.aa)}})(b)):F.ka?(b.Z=Jr(F.da.P,F.ka),B=(function(K){return function(pt,Lt,Gt){return K.J(pt,Lt,Gt,K.Z)}})(b)):B=b.J,F.qa=B),B(m,f,F.da),b={J:b.J,aa:b.aa,Z:b.Z}}}Ys(m,f)}var Rn=Symbol();function On(f,m,S){return f[Rn]||(f[Rn]=function(b,I){return m(b,I,S)})}function Gn(f){var m=f[Rn];if(!m){var S=ts(f);m=function(b,I){return Fa(b,I,S)},f[Rn]=m}return m}function qs(f){var m=f.ia;if(m)return Gn(m);if(m=f.va)return On(f.da.P,m,f.ka)}function Uu(f){var m=qs(f),S=f.da,b=f.oa.U;return m?function(I,F){return b(I,F,S,m)}:function(I,F){return b(I,F,S)}}function gl(f,m){var S=f[m];return typeof S=="function"&&S.length===0&&(S=S(),f[m]=S),Array.isArray(S)&&(fr in S||ya in S||0<S.length&&typeof S[0]=="function")?S:void 0}function Nu(f,m,S,b,I,F){m.P=f[0];var B=1;if(f.length>B&&typeof f[B]!="number"){var K=f[B++];S(m,K)}for(;B<f.length;){S=f[B++];for(var pt=B+1;pt<f.length&&typeof f[pt]!="number";)pt++;switch(K=f[B++],pt-=B,pt){case 0:b(m,S,K);break;case 1:(pt=gl(f,B))?(B++,I(m,S,K,pt)):b(m,S,K,f[B++]);break;case 2:pt=B++,pt=gl(f,pt),I(m,S,K,pt,f[B++]);break;case 3:F(m,S,K,f[B++],f[B++],f[B++]);break;case 4:F(m,S,K,f[B++],f[B++],f[B++],f[B++]);break;default:throw Error("unexpected number of binary field arguments: "+pt)}}return m}var Be=Symbol();function vl(f){var m=f[Be];if(!m){var S=$r(f);m=function(b,I){return yl(b,I,S)},f[Be]=m}return m}function Jr(f,m){var S=f[Be];return S||(S=function(b,I){return ta(b,I,m)},f[Be]=S),S}var ya=Symbol();function ea(f,m){f.push(m)}function fi(f,m,S){f.push(m,S.W)}function Lu(f,m,S,b){var I=vl(b),F=$r(b).P,B=S.W;f.push(m,function(K,pt,Lt){return B(K,pt,Lt,F,I)})}function Ff(f,m,S,b,I,F){var B=Jr(b,F),K=S.W;f.push(m,function(pt,Lt,Gt){return K(pt,Lt,Gt,b,B)})}function $r(f){var m=f[ya];return m||(m=Nu(f,f[ya]=[],ea,fi,Lu,Ff),fr in f&&ya in f&&(f.length=0),m)}var fr=Symbol();function Hf(f,m){f[0]=m}function _i(f,m,S,b){var I=S.U;f[m]=b?function(F,B,K){return I(F,B,K,b)}:I}function _l(f,m,S,b,I){var F=S.U,B=Gn(b),K=ts(b).P;f[m]=function(pt,Lt,Gt){return F(pt,Lt,Gt,K,B,I)}}function Ou(f,m,S,b,I,F,B){var K=S.U,pt=On(b,I,F);f[m]=function(Lt,Gt,xe){return K(Lt,Gt,xe,b,pt,B)}}function ts(f){var m=f[fr];return m||(m=Nu(f,f[fr]={},Hf,_i,_l,Ou),fr in f&&ya in f&&(f.length=0),m)}function Fa(f,m,S){for(;En(m)&&m.i!=4;){var b=m.l,I=S[b];if(!I){var F=S[0];F&&(F=F[b])&&(I=S[b]=Uu(F))}if(!I||!I(m,f,b)){I=m,b=f,F=I.j,Le(I);var B=I;if(!B.ca){if(I=B.h.h-F,B.h.h=F,B=B.h,I==0)I=me();else{if(F=_t(B,I),B.S&&B.m)I=B.i.subarray(F,F+I);else{B=B.i;var K=F;I=F+I,I=K===I?jt():Bt?B.slice(K,I):new Uint8Array(B.subarray(K,I))}I=I.length==0?me():new re(I,Ot)}(F=b.R)?F.push(I):b.R=[I]}}}return f}function yl(f,m,S){for(var b=S.length,I=b%2==1,F=I?1:0;F<b;F+=2)(0,S[F+1])(m,f,S[F]);ta(f,m,I?S[0]:void 0)}function hr(f,m){return{U:f,W:m}}var Vn=hr(function(f,m,S){if(f.i!==5)return!1;f=f.h;var b=f.i,I=f.h,F=b[I],B=b[I+1],K=b[I+2];return b=b[I+3],W(f,f.h+4),B=(F<<0|B<<8|K<<16|b<<24)>>>0,f=2*(B>>31)+1,F=B>>>23&255,B&=8388607,$(m,S,F==255?B?NaN:1/0*f:F==0?f*Math.pow(2,-149)*B:f*Math.pow(2,F-150)*(B+Math.pow(2,23))),!0},function(f,m,S){if(m=ae(m,S),m!=null){ye(f.h,8*S+5),f=f.h;var b=+m;b===0?0<1/b?ve=j=0:(j=0,ve=2147483648):isNaN(b)?(j=0,ve=2147483647):(b=(S=0>b?-2147483648:0)?-b:b,34028234663852886e22<b?(j=0,ve=(S|2139095040)>>>0):11754943508222875e-54>b?(b=Math.round(b/Math.pow(2,-149)),j=0,ve=(S|b)>>>0):(m=Math.floor(Math.log(b)/Math.LN2),b*=Math.pow(2,-m),b=Math.round(8388608*b),16777216<=b&&++m,j=0,ve=(S|m+127<<23|b&8388607)>>>0)),S=ve,f.h.push(S>>>0&255),f.h.push(S>>>8&255),f.h.push(S>>>16&255),f.h.push(S>>>24&255)}}),Gf=hr(function(f,m,S){if(f.i!==0)return!1;var b=f.h,I=0,F=f=0,B=b.i,K=b.h;do{var pt=B[K++];I|=(pt&127)<<F,F+=7}while(32>F&&pt&128);for(32<F&&(f|=(pt&127)>>4),F=3;32>F&&pt&128;F+=7)pt=B[K++],f|=(pt&127)<<F;if(W(b,K),128>pt)b=I>>>0,pt=f>>>0,(f=pt&2147483648)&&(b=~b+1>>>0,pt=~pt>>>0,b==0&&(pt=pt+1>>>0)),b=4294967296*pt+(b>>>0);else throw C();return $(m,S,f?-b:b),!0},function(f,m,S){m=ut(m,S),m!=null&&(typeof m=="string"&&we(m),m!=null&&(ye(f.h,8*S),typeof m=="number"?(f=f.h,un(m),Kt(f,ve,j)):(S=we(m),Kt(f.h,S.i,S.h))))}),Pu=hr(function(f,m,S){return f.i!==0?!1:($(m,S,Xt(f.h)),!0)},function(f,m,S){if(m=ut(m,S),m!=null&&m!=null)if(ye(f.h,8*S),f=f.h,S=m,0<=S)ye(f,S);else{for(m=0;9>m;m++)f.h.push(S&127|128),S>>=7;f.h.push(1)}}),Sl=hr(function(f,m,S){if(f.i!==2)return!1;var b=Xt(f.h)>>>0;f=f.h;var I=_t(f,b);if(f=f.i,St){var F=f,B;(B=ne)||(B=ne=new TextDecoder("utf-8",{fatal:!0})),f=I+b,F=I===0&&f===F.length?F:F.subarray(I,f);try{var K=B.decode(F)}catch(xe){if(Mt===void 0){try{B.decode(new Uint8Array([128]))}catch{}try{B.decode(new Uint8Array([97])),Mt=!0}catch{Mt=!1}}throw!Mt&&(ne=void 0),xe}}else{K=I,b=K+b,I=[];for(var pt=null,Lt,Gt;K<b;)Lt=f[K++],128>Lt?I.push(Lt):224>Lt?K>=b?xt():(Gt=f[K++],194>Lt||(Gt&192)!==128?(K--,xt()):I.push((Lt&31)<<6|Gt&63)):240>Lt?K>=b-1?xt():(Gt=f[K++],(Gt&192)!==128||Lt===224&&160>Gt||Lt===237&&160<=Gt||((F=f[K++])&192)!==128?(K--,xt()):I.push((Lt&15)<<12|(Gt&63)<<6|F&63)):244>=Lt?K>=b-2?xt():(Gt=f[K++],(Gt&192)!==128||(Lt<<28)+(Gt-144)>>30!==0||((F=f[K++])&192)!==128||((B=f[K++])&192)!==128?(K--,xt()):(Lt=(Lt&7)<<18|(Gt&63)<<12|(F&63)<<6|B&63,Lt-=65536,I.push((Lt>>10&1023)+55296,(Lt&1023)+56320))):xt(),8192<=I.length&&(pt=Dt(pt,I),I.length=0);K=Dt(pt,I)}return $(m,S,K),!0},function(f,m,S){if(m=ut(m,S),m!=null){var b=!1;if(b=b===void 0?!1:b,de){if(b&&/(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])/.test(m))throw Error("Found an unpaired surrogate");m=(Ut||(Ut=new TextEncoder)).encode(m)}else{for(var I=0,F=new Uint8Array(3*m.length),B=0;B<m.length;B++){var K=m.charCodeAt(B);if(128>K)F[I++]=K;else{if(2048>K)F[I++]=K>>6|192;else{if(55296<=K&&57343>=K){if(56319>=K&&B<m.length){var pt=m.charCodeAt(++B);if(56320<=pt&&57343>=pt){K=1024*(K-55296)+pt-56320+65536,F[I++]=K>>18|240,F[I++]=K>>12&63|128,F[I++]=K>>6&63|128,F[I++]=K&63|128;continue}else B--}if(b)throw Error("Found an unpaired surrogate");K=65533}F[I++]=K>>12|224,F[I++]=K>>6&63|128}F[I++]=K&63|128}}m=I===F.length?F:F.subarray(0,I)}ye(f.h,8*S+2),ye(f.h,m.length),gn(f,f.h.end()),gn(f,m)}}),Ws=hr(function(f,m,S,b,I){if(f.i!==2)return!1;m=Zt(m,S,b),S=f.h.j,b=Xt(f.h)>>>0;var F=f.h.h+b,B=F-S;if(0>=B&&(f.h.j=F,I(m,f,void 0,void 0,void 0),B=F-f.h.h),B)throw Error("Message parsing ended unexpectedly. Expected to read "+(b+" bytes, instead read "+(b-B)+" bytes, either the data ended unexpectedly or the message misreported its own length"));return f.h.h=F,f.h.j=S,!0},function(f,m,S,b,I){if(m=fe(m,b,S),m!=null)for(b=0;b<m.length;b++){var F=f;ye(F.h,8*S+2);var B=F.h.end();gn(F,B),B.push(F.i),F=B,I(m[b],f),B=f;var K=F.pop();for(K=B.i+B.h.length()-K;127<K;)F.push(K&127|128),K>>>=7,B.i++;F.push(K),B.i++}});function xl(f){return function(m,S){t:{if(Qe.length){var b=Qe.pop();b.setOptions(S),Ge(b.h,m,S),m=b}else m=new an(m,S);try{var I=ts(f),F=Fa(new I.P,m,I);break t}finally{I=m.h,I.i=null,I.m=!1,I.l=0,I.j=0,I.h=0,I.S=!1,m.l=-1,m.i=-1,100>Qe.length&&Qe.push(m)}F=void 0}return F}}function Ml(f){return function(){var m=new An;yl(this,m,$r(f)),gn(m,m.h.end());for(var S=new Uint8Array(m.i),b=m.j,I=b.length,F=0,B=0;B<I;B++){var K=b[B];S.set(K,F),F+=K.length}return m.j=[S],S}}function na(f){he.call(this,f)}T(na,he);var wi=[na,1,Pu,2,Vn,3,Sl,4,Sl];na.prototype.l=Ml(wi);function es(f){he.call(this,f,-1,El)}T(es,he),es.prototype.addClassification=function(f,m){return Zt(this,1,na,f,m),this};var El=[1],Ha=xl([es,1,Ws,wi]);function Di(f){he.call(this,f)}T(Di,he);var Tl=[Di,1,Vn,2,Vn,3,Vn,4,Vn,5,Vn];Di.prototype.l=Ml(Tl);function js(f){he.call(this,f,-1,zu)}T(js,he);var zu=[1],dr=xl([js,1,Ws,Tl]);function yi(f){he.call(this,f)}T(yi,he);var Zs=[yi,1,Vn,2,Vn,3,Vn,4,Vn,5,Vn,6,Gf],ns=xl(Zs);yi.prototype.l=Ml(Zs);function ia(f,m,S){if(S=f.createShader(S===0?f.VERTEX_SHADER:f.FRAGMENT_SHADER),f.shaderSource(S,m),f.compileShader(S),!f.getShaderParameter(S,f.COMPILE_STATUS))throw Error(`Could not compile WebGL shader.

`+f.getShaderInfoLog(S));return S}function Ks(f){return fe(f,na,1).map(function(m){var S=ut(m,1);return{index:S??0,score:Oe(m,2),label:ut(m,3)!=null?Ae(ut(m,3),""):void 0,displayName:ut(m,4)!=null?Ae(ut(m,4),""):void 0}})}function is(f){return{x:Oe(f,1),y:Oe(f,2),z:Oe(f,3),visibility:ae(f,4)!=null?Oe(f,4):void 0}}function Al(f){return f.map(function(m){return fe(dr(m),Di,1).map(is)})}function pr(f,m){this.i=f,this.h=m,this.m=0}function as(f,m,S){return Iu(f,m),typeof f.h.canvas.transferToImageBitmap=="function"?Promise.resolve(f.h.canvas.transferToImageBitmap()):S?Promise.resolve(f.h.canvas):typeof createImageBitmap=="function"?createImageBitmap(f.h.canvas):(f.j===void 0&&(f.j=document.createElement("canvas")),new Promise(function(b){f.j.height=f.h.canvas.height,f.j.width=f.h.canvas.width,f.j.getContext("2d",{}).drawImage(f.h.canvas,0,0,f.h.canvas.width,f.h.canvas.height),b(f.j)}))}function Iu(f,m){var S=f.h;if(f.s===void 0){var b=ia(S,`
  attribute vec2 aVertex;
  attribute vec2 aTex;
  varying vec2 vTex;
  void main(void) {
    gl_Position = vec4(aVertex, 0.0, 1.0);
    vTex = aTex;
  }`,0),I=ia(S,`
  precision mediump float;
  varying vec2 vTex;
  uniform sampler2D sampler0;
  void main(){
    gl_FragColor = texture2D(sampler0, vTex);
  }`,1),F=S.createProgram();if(S.attachShader(F,b),S.attachShader(F,I),S.linkProgram(F),!S.getProgramParameter(F,S.LINK_STATUS))throw Error(`Could not compile WebGL program.

`+S.getProgramInfoLog(F));b=f.s=F,S.useProgram(b),I=S.getUniformLocation(b,"sampler0"),f.l={O:S.getAttribLocation(b,"aVertex"),N:S.getAttribLocation(b,"aTex"),xa:I},f.v=S.createBuffer(),S.bindBuffer(S.ARRAY_BUFFER,f.v),S.enableVertexAttribArray(f.l.O),S.vertexAttribPointer(f.l.O,2,S.FLOAT,!1,0,0),S.bufferData(S.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),S.STATIC_DRAW),S.bindBuffer(S.ARRAY_BUFFER,null),f.u=S.createBuffer(),S.bindBuffer(S.ARRAY_BUFFER,f.u),S.enableVertexAttribArray(f.l.N),S.vertexAttribPointer(f.l.N,2,S.FLOAT,!1,0,0),S.bufferData(S.ARRAY_BUFFER,new Float32Array([0,1,0,0,1,0,1,1]),S.STATIC_DRAW),S.bindBuffer(S.ARRAY_BUFFER,null),S.uniform1i(I,0)}b=f.l,S.useProgram(f.s),S.canvas.width=m.width,S.canvas.height=m.height,S.viewport(0,0,m.width,m.height),S.activeTexture(S.TEXTURE0),f.i.bindTexture2d(m.glName),S.enableVertexAttribArray(b.O),S.bindBuffer(S.ARRAY_BUFFER,f.v),S.vertexAttribPointer(b.O,2,S.FLOAT,!1,0,0),S.enableVertexAttribArray(b.N),S.bindBuffer(S.ARRAY_BUFFER,f.u),S.vertexAttribPointer(b.N,2,S.FLOAT,!1,0,0),S.bindFramebuffer(S.DRAW_FRAMEBUFFER?S.DRAW_FRAMEBUFFER:S.FRAMEBUFFER,null),S.clearColor(0,0,0,0),S.clear(S.COLOR_BUFFER_BIT),S.colorMask(!0,!0,!0,!0),S.drawArrays(S.TRIANGLE_FAN,0,4),S.disableVertexAttribArray(b.O),S.disableVertexAttribArray(b.N),S.bindBuffer(S.ARRAY_BUFFER,null),f.i.bindTexture2d(0)}function Wn(f){this.h=f}var Sa=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,9,1,7,0,65,0,253,15,26,11]);function Qs(f,m){return m+f}function mr(f,m){window[f]=m}function Vf(f){var m=document.createElement("script");return m.setAttribute("src",f),m.setAttribute("crossorigin","anonymous"),new Promise(function(S){m.addEventListener("load",function(){S()},!1),m.addEventListener("error",function(){S()},!1),document.body.appendChild(m)})}function bl(){return k(function(f){switch(f.h){case 1:return f.s=2,O(f,WebAssembly.instantiate(Sa),4);case 4:f.h=3,f.s=0;break;case 2:return f.s=0,f.l=null,f.return(!1);case 3:return f.return(!0)}})}function rs(f){if(this.h=f,this.listeners={},this.l={},this.L={},this.s={},this.v={},this.M=this.u=this.ga=!0,this.I=Promise.resolve(),this.fa="",this.D={},this.locateFile=f&&f.locateFile||Qs,typeof window=="object")var m=window.location.pathname.toString().substring(0,window.location.pathname.toString().lastIndexOf("/"))+"/";else if(typeof location<"u")m=location.pathname.toString().substring(0,location.pathname.toString().lastIndexOf("/"))+"/";else throw Error("solutions can only be loaded on a web page or in a web worker");if(this.ha=m,f.options){m=d(Object.keys(f.options));for(var S=m.next();!S.done;S=m.next()){S=S.value;var b=f.options[S].default;b!==void 0&&(this.l[S]=typeof b=="function"?b():b)}}}o=rs.prototype,o.close=function(){return this.j&&this.j.delete(),Promise.resolve()};function ss(f){var m,S,b,I,F,B,K,pt,Lt,Gt,xe;return k(function(ce){switch(ce.h){case 1:return f.ga?(m=f.h.files===void 0?[]:typeof f.h.files=="function"?f.h.files(f.l):f.h.files,O(ce,bl(),2)):ce.return();case 2:if(S=ce.i,typeof window=="object")return mr("createMediapipeSolutionsWasm",{locateFile:f.locateFile}),mr("createMediapipeSolutionsPackedAssets",{locateFile:f.locateFile}),B=m.filter(function($t){return $t.data!==void 0}),K=m.filter(function($t){return $t.data===void 0}),pt=Promise.all(B.map(function($t){var Me=$s(f,$t.url);if($t.path!==void 0){var De=$t.path;Me=Me.then(function(cn){return f.overrideFile(De,cn),Promise.resolve(cn)})}return Me})),Lt=Promise.all(K.map(function($t){return $t.simd===void 0||$t.simd&&S||!$t.simd&&!S?Vf(f.locateFile($t.url,f.ha)):Promise.resolve()})).then(function(){var $t,Me,De;return k(function(cn){if(cn.h==1)return $t=window.createMediapipeSolutionsWasm,Me=window.createMediapipeSolutionsPackedAssets,De=f,O(cn,$t(Me),2);De.i=cn.i,cn.h=0})}),Gt=(function(){return k(function($t){return f.h.graph&&f.h.graph.url?$t=O($t,$s(f,f.h.graph.url),0):($t.h=0,$t=void 0),$t})})(),O(ce,Promise.all([Lt,pt,Gt]),7);if(typeof importScripts!="function")throw Error("solutions can only be loaded on a web page or in a web worker");return b=m.filter(function($t){return $t.simd===void 0||$t.simd&&S||!$t.simd&&!S}).map(function($t){return f.locateFile($t.url,f.ha)}),importScripts.apply(null,g(b)),I=f,O(ce,createMediapipeSolutionsWasm(Module),6);case 6:I.i=ce.i,f.m=new OffscreenCanvas(1,1),f.i.canvas=f.m,F=f.i.GL.createContext(f.m,{antialias:!1,alpha:!1,ua:typeof WebGL2RenderingContext<"u"?2:1}),f.i.GL.makeContextCurrent(F),ce.h=4;break;case 7:if(f.m=document.createElement("canvas"),xe=f.m.getContext("webgl2",{}),!xe&&(xe=f.m.getContext("webgl",{}),!xe))return alert("Failed to create WebGL canvas context when passing video frame."),ce.return();f.K=xe,f.i.canvas=f.m,f.i.createContext(f.m,!0,!0,{});case 4:f.j=new f.i.SolutionWasm,f.ga=!1,ce.h=0}})}function Js(f){var m,S,b,I,F,B,K,pt;return k(function(Lt){if(Lt.h==1){if(f.h.graph&&f.h.graph.url&&f.fa===f.h.graph.url)return Lt.return();if(f.u=!0,!f.h.graph||!f.h.graph.url){Lt.h=2;return}return f.fa=f.h.graph.url,O(Lt,$s(f,f.h.graph.url),3)}for(Lt.h!=2&&(m=Lt.i,f.j.loadGraph(m)),S=d(Object.keys(f.D)),b=S.next();!b.done;b=S.next())I=b.value,f.j.overrideFile(I,f.D[I]);if(f.D={},f.h.listeners)for(F=d(f.h.listeners),B=F.next();!B.done;B=F.next())K=B.value,Rl(f,K);pt=f.l,f.l={},f.setOptions(pt),Lt.h=0})}o.reset=function(){var f=this;return k(function(m){f.j&&(f.j.reset(),f.s={},f.v={}),m.h=0})},o.setOptions=function(f,m){var S=this;if(m=m||this.h.options){for(var b=[],I=[],F={},B=d(Object.keys(f)),K=B.next();!K.done;F={X:F.X,Y:F.Y},K=B.next())if(K=K.value,!(K in this.l&&this.l[K]===f[K])){this.l[K]=f[K];var pt=m[K];pt!==void 0&&(pt.onChange&&(F.X=pt.onChange,F.Y=f[K],b.push((function(Lt){return function(){var Gt;return k(function(xe){if(xe.h==1)return O(xe,Lt.X(Lt.Y),2);Gt=xe.i,Gt===!0&&(S.u=!0),xe.h=0})}})(F))),pt.graphOptionXref&&(K=Object.assign({},{calculatorName:"",calculatorIndex:0},pt.graphOptionXref,{valueNumber:pt.type===1?f[K]:0,valueBoolean:pt.type===0?f[K]:!1,valueString:pt.type===2?f[K]:""}),I.push(K)))}(b.length!==0||I.length!==0)&&(this.u=!0,this.H=(this.H===void 0?[]:this.H).concat(I),this.F=(this.F===void 0?[]:this.F).concat(b))}};function Bu(f){var m,S,b,I,F,B,K;return k(function(pt){switch(pt.h){case 1:if(!f.u)return pt.return();if(!f.F){pt.h=2;break}m=d(f.F),S=m.next();case 3:if(S.done){pt.h=5;break}return b=S.value,O(pt,b(),4);case 4:S=m.next(),pt.h=3;break;case 5:f.F=void 0;case 2:if(f.H){for(I=new f.i.GraphOptionChangeRequestList,F=d(f.H),B=F.next();!B.done;B=F.next())K=B.value,I.push_back(K);f.j.changeOptions(I),I.delete(),f.H=void 0}f.u=!1,pt.h=0}})}o.initialize=function(){var f=this;return k(function(m){return m.h==1?O(m,ss(f),2):m.h!=3?O(m,Js(f),3):O(m,Bu(f),0)})};function $s(f,m){var S,b;return k(function(I){return m in f.L?I.return(f.L[m]):(S=f.locateFile(m,""),b=fetch(S).then(function(F){return F.arrayBuffer()}),f.L[m]=b,I.return(b))})}o.overrideFile=function(f,m){this.j?this.j.overrideFile(f,m):this.D[f]=m},o.clearOverriddenFiles=function(){this.D={},this.j&&this.j.clearOverriddenFiles()},o.send=function(f,m){var S=this,b,I,F,B,K,pt,Lt,Gt,xe;return k(function(ce){switch(ce.h){case 1:return S.h.inputs?(b=1e3*(m??performance.now()),O(ce,S.I,2)):ce.return();case 2:return O(ce,S.initialize(),3);case 3:for(I=new S.i.PacketDataList,F=d(Object.keys(f)),B=F.next();!B.done;B=F.next())if(K=B.value,pt=S.h.inputs[K]){t:{var $t=f[K];switch(pt.type){case"video":var Me=S.s[pt.stream];if(Me||(Me=new pr(S.i,S.K),S.s[pt.stream]=Me),Me.m===0&&(Me.m=Me.i.createTexture()),typeof HTMLVideoElement<"u"&&$t instanceof HTMLVideoElement)var De=$t.videoWidth,cn=$t.videoHeight;else typeof HTMLImageElement<"u"&&$t instanceof HTMLImageElement?(De=$t.naturalWidth,cn=$t.naturalHeight):(De=$t.width,cn=$t.height);cn={glName:Me.m,width:De,height:cn},De=Me.h,De.canvas.width=cn.width,De.canvas.height=cn.height,De.activeTexture(De.TEXTURE0),Me.i.bindTexture2d(Me.m),De.texImage2D(De.TEXTURE_2D,0,De.RGBA,De.RGBA,De.UNSIGNED_BYTE,$t),Me.i.bindTexture2d(0),Me=cn;break t;case"detections":for(Me=S.s[pt.stream],Me||(Me=new Wn(S.i),S.s[pt.stream]=Me),Me.data||(Me.data=new Me.h.DetectionListData),Me.data.reset($t.length),cn=0;cn<$t.length;++cn){De=$t[cn];var rn=Me.data,Pn=rn.setBoundingBox,Si=cn,ii=De.la,Ye=new yi;if(te(Ye,1,ii.ra),te(Ye,2,ii.sa),te(Ye,3,ii.height),te(Ye,4,ii.width),te(Ye,5,ii.rotation),$(Ye,6,ii.pa),ii=Ye.l(),Pn.call(rn,Si,ii),De.ea)for(rn=0;rn<De.ea.length;++rn){Ye=De.ea[rn],Pn=Me.data,Si=Pn.addNormalizedLandmark,ii=cn,Ye=Object.assign({},Ye,{visibility:Ye.visibility?Ye.visibility:0});var zn=new Di;te(zn,1,Ye.x),te(zn,2,Ye.y),te(zn,3,Ye.z),Ye.visibility&&te(zn,4,Ye.visibility),Ye=zn.l(),Si.call(Pn,ii,Ye)}if(De.ba)for(rn=0;rn<De.ba.length;++rn)Pn=Me.data,Si=Pn.addClassification,ii=cn,Ye=De.ba[rn],zn=new na,te(zn,2,Ye.score),Ye.index&&$(zn,1,Ye.index),Ye.label&&$(zn,3,Ye.label),Ye.displayName&&$(zn,4,Ye.displayName),Ye=zn.l(),Si.call(Pn,ii,Ye)}Me=Me.data;break t;default:Me={}}}switch(Lt=Me,Gt=pt.stream,pt.type){case"video":I.pushTexture2d(Object.assign({},Lt,{stream:Gt,timestamp:b}));break;case"detections":xe=Lt,xe.stream=Gt,xe.timestamp=b,I.pushDetectionList(xe);break;default:throw Error("Unknown input config type: '"+pt.type+"'")}}return S.j.send(I),O(ce,S.I,4);case 4:I.delete(),ce.h=0}})};function Xf(f,m,S){var b,I,F,B,K,pt,Lt,Gt,xe,ce,$t,Me,De,cn;return k(function(rn){switch(rn.h){case 1:if(!S)return rn.return(m);for(b={},I=0,F=d(Object.keys(S)),B=F.next();!B.done;B=F.next())K=B.value,pt=S[K],typeof pt!="string"&&pt.type==="texture"&&m[pt.stream]!==void 0&&++I;1<I&&(f.M=!1),Lt=d(Object.keys(S)),B=Lt.next();case 2:if(B.done){rn.h=4;break}if(Gt=B.value,xe=S[Gt],typeof xe=="string")return De=b,cn=Gt,O(rn,kf(f,Gt,m[xe]),14);if(ce=m[xe.stream],xe.type==="detection_list"){if(ce){for(var Pn=ce.getRectList(),Si=ce.getLandmarksList(),ii=ce.getClassificationsList(),Ye=[],zn=0;zn<Pn.size();++zn){var xa=ns(Pn.get(zn)),Cl=Oe(xa,1),os=Oe(xa,2),Yf=Oe(xa,3),Gu=Oe(xa,4),Vu=Oe(xa,5,0),ls=void 0;ls=ls===void 0?0:ls,xa={la:{ra:Cl,sa:os,height:Yf,width:Gu,rotation:Vu,pa:Ae(ut(xa,6),ls)},ea:fe(dr(Si.get(zn)),Di,1).map(is),ba:Ks(Ha(ii.get(zn)))},Ye.push(xa)}Pn=Ye}else Pn=[];b[Gt]=Pn,rn.h=7;break}if(xe.type==="proto_list"){if(ce){for(Pn=Array(ce.size()),Si=0;Si<ce.size();Si++)Pn[Si]=ce.get(Si);ce.delete()}else Pn=[];b[Gt]=Pn,rn.h=7;break}if(ce===void 0){rn.h=3;break}if(xe.type==="float_list"){b[Gt]=ce,rn.h=7;break}if(xe.type==="proto"){b[Gt]=ce,rn.h=7;break}if(xe.type!=="texture")throw Error("Unknown output config type: '"+xe.type+"'");return $t=f.v[Gt],$t||($t=new pr(f.i,f.K),f.v[Gt]=$t),O(rn,as($t,ce,f.M),13);case 13:Me=rn.i,b[Gt]=Me;case 7:xe.transform&&b[Gt]&&(b[Gt]=xe.transform(b[Gt])),rn.h=3;break;case 14:De[cn]=rn.i;case 3:B=Lt.next(),rn.h=2;break;case 4:return rn.return(b)}})}function kf(f,m,S){var b;return k(function(I){return typeof S=="number"||S instanceof Uint8Array||S instanceof f.i.Uint8BlobList?I.return(S):S instanceof f.i.Texture2dDataOut?(b=f.v[m],b||(b=new pr(f.i,f.K),f.v[m]=b),I.return(as(b,S,f.M))):I.return(void 0)})}function Rl(f,m){for(var S=m.name||"$",b=[].concat(g(m.wants)),I=new f.i.StringList,F=d(m.wants),B=F.next();!B.done;B=F.next())I.push_back(B.value);F=f.i.PacketListener.implement({onResults:function(K){for(var pt={},Lt=0;Lt<m.wants.length;++Lt)pt[b[Lt]]=K.get(Lt);var Gt=f.listeners[S];Gt&&(f.I=Xf(f,pt,m.outs).then(function(xe){xe=Gt(xe);for(var ce=0;ce<m.wants.length;++ce){var $t=pt[b[ce]];typeof $t=="object"&&$t.hasOwnProperty&&$t.hasOwnProperty("delete")&&$t.delete()}xe&&(f.I=xe)}))}}),f.j.attachMultiListener(I,F),I.delete()}o.onResults=function(f,m){this.listeners[m||"$"]=f},gt("Solution",rs),gt("OptionType",{BOOL:0,NUMBER:1,ta:2,0:"BOOL",1:"NUMBER",2:"STRING"});function Fu(f){return f===void 0&&(f=0),f===1?"hand_landmark_full.tflite":"hand_landmark_lite.tflite"}function Hu(f){var m=this;f=f||{},this.h=new rs({locateFile:f.locateFile,files:function(S){return[{url:"hands_solution_packed_assets_loader.js"},{simd:!1,url:"hands_solution_wasm_bin.js"},{simd:!0,url:"hands_solution_simd_wasm_bin.js"},{data:!0,url:Fu(S.modelComplexity)}]},graph:{url:"hands.binarypb"},inputs:{image:{type:"video",stream:"input_frames_gpu"}},listeners:[{wants:["multi_hand_landmarks","multi_hand_world_landmarks","image_transformed","multi_handedness"],outs:{image:"image_transformed",multiHandLandmarks:{type:"proto_list",stream:"multi_hand_landmarks",transform:Al},multiHandWorldLandmarks:{type:"proto_list",stream:"multi_hand_world_landmarks",transform:Al},multiHandedness:{type:"proto_list",stream:"multi_handedness",transform:function(S){return S.map(function(b){return Ks(Ha(b))[0]})}}}}],options:{useCpuInference:{type:0,graphOptionXref:{calculatorType:"InferenceCalculator",fieldName:"use_cpu_inference"},default:typeof window!="object"||window.navigator===void 0?!1:"iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";").includes(navigator.platform)||navigator.userAgent.includes("Mac")&&"ontouchend"in document},selfieMode:{type:0,graphOptionXref:{calculatorType:"GlScalerCalculator",calculatorIndex:1,fieldName:"flip_horizontal"}},maxNumHands:{type:1,graphOptionXref:{calculatorType:"ConstantSidePacketCalculator",calculatorName:"ConstantSidePacketCalculator",fieldName:"int_value"}},modelComplexity:{type:1,graphOptionXref:{calculatorType:"ConstantSidePacketCalculator",calculatorName:"ConstantSidePacketCalculatorModelComplexity",fieldName:"int_value"},onChange:function(S){var b,I,F;return k(function(B){return B.h==1?(b=Fu(S),I="third_party/mediapipe/modules/hand_landmark/"+b,O(B,$s(m.h,b),2)):(F=B.i,m.h.overrideFile(I,F),B.return(!0))})}},minDetectionConfidence:{type:1,graphOptionXref:{calculatorType:"TensorsToDetectionsCalculator",calculatorName:"handlandmarktrackinggpu__palmdetectiongpu__TensorsToDetectionsCalculator",fieldName:"min_score_thresh"}},minTrackingConfidence:{type:1,graphOptionXref:{calculatorType:"ThresholdingCalculator",calculatorName:"handlandmarktrackinggpu__handlandmarkgpu__ThresholdingCalculator",fieldName:"threshold"}}}})}o=Hu.prototype,o.close=function(){return this.h.close(),Promise.resolve()},o.onResults=function(f){this.h.onResults(f)},o.initialize=function(){var f=this;return k(function(m){return O(m,f.h.initialize(),0)})},o.reset=function(){this.h.reset()},o.send=function(f){var m=this;return k(function(S){return O(S,m.h.send(f),0)})},o.setOptions=function(f){this.h.setOptions(f)},gt("Hands",Hu),gt("HAND_CONNECTIONS",[[0,1],[1,2],[2,3],[3,4],[0,5],[5,6],[6,7],[7,8],[5,9],[9,10],[10,11],[11,12],[9,13],[13,14],[14,15],[15,16],[13,17],[0,17],[17,18],[18,19],[19,20]]),gt("VERSION","0.4.1675469240")}).call(Fp)),Fp}var y2=_2();let Eu=null,$o=0;function jy(){$o+=1,Eu==null||Eu.getTracks().forEach(o=>o.stop()),Eu=null}const qr=6500,Ps=2800;function Zy(o,e,a){const s=16*Math.sin(o)**3,u=13*Math.cos(o)-5*Math.cos(2*o)-2*Math.cos(3*o)-Math.cos(4*o),h=Math.cos(e*Math.PI*.5),p=7*h*e*.9+Math.cos(o*2)*1.5*h,d=Math.cos(e*Math.PI*.25)*.8,g=a/16;return new lt((s+d)*g,(u+d*.5)*g,p*g)}function Ky(o){const e=[],s=Math.floor(o/30);for(let u=0;u<30;u++){const h=u/29*2-1;for(let p=0;p<s;p++){const d=Zy(Math.random()*Math.PI*2,h,4.2);d.multiplyScalar(.32+Math.random()*.68),d.x*=1.05,d.y*=.9,d.x+=(Math.random()-.5)*.1,d.y+=(Math.random()-.5)*.1,d.z+=(Math.random()-.5)*.15,e.push(d)}}for(;e.length<o;){const u=Zy(Math.random()*Math.PI*2,Math.random()*2-1,3.8);u.multiplyScalar(.34+Math.random()*.66),u.x*=1.05,u.y*=.9,e.push(u)}return e.slice(0,o)}function Qy(){const o=6+Math.random()*14,e=Math.random()*Math.PI*2,a=Math.acos(2*Math.random()-1);return new lt(o*Math.sin(a)*Math.cos(e),o*Math.sin(a)*Math.sin(e),o*Math.cos(a))}function S2(o){const e=o[0],a=[o[8],o[12],o[16],o[20]],s=[o[5],o[9],o[13],o[17]];let u=0;for(let h=0;h<4;h++){const p=Math.hypot(a[h].x-e.x,a[h].y-e.y),d=Math.hypot(s[h].x-e.x,s[h].y-e.y);p<d*1.15&&(u+=1)}return u>=3?"fist":u<=1?"open":"none"}function x2(){const o=document.createElement("canvas");o.width=64,o.height=64;const e=o.getContext("2d");if(!e)return null;const a=e.createRadialGradient(32,32,0,32,32,32);a.addColorStop(0,"rgba(255,255,255,1)"),a.addColorStop(.45,"rgba(255,220,230,0.7)"),a.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=a,e.fillRect(0,0,64,64);const s=new f2(o);return s.colorSpace=Hi,s}function M2({mode:o,cameraRetry:e,onGesture:a,onCameraError:s}){const u=da.useRef(null),h=da.useRef(o),p=da.useRef(e),d=da.useRef(a),g=da.useRef(s);return h.current=o,p.current=e,d.current=a,g.current=s,da.useEffect(()=>{const y=u.current;if(!y)return;const x=Ky(qr),_=Ky(Ps),E=Array.from({length:qr},Qy),A=Array.from({length:Ps},Qy),w=new s2;w.background=new Ne(1710622),w.fog=new Hm(1710622,.02);const L=new Gi(45,1,.1,100),T=new r2({antialias:!0});T.setPixelRatio(Math.min(window.devicePixelRatio,2)),T.toneMapping=tS,T.toneMappingExposure=1.35,y.appendChild(T.domElement),w.add(new g2(1708064,.55));const M=new Bp(16720452,8,40);M.position.set(4,6,10),w.add(M);const X=new Bp(16729190,5,40);X.position.set(-7,-2,8),w.add(X);const G=new Bp(16716083,6,30);G.position.set(0,3,-8),w.add(G);const O=new Gm(1,10,8),ft=new d2({color:16720452,metalness:.45,roughness:.22,emissive:16711731,emissiveIntensity:.35,clearcoat:1,clearcoatRoughness:.12}),Z=new u2(O,ft,qr);w.add(Z);const V=new ui,q=new Float32Array(qr*3),P=new Float32Array(qr*3),N=new Float32Array(qr),k=new Ne(10096680),yt=new Ne(16722492),dt=new Ne(16734826),Rt=new Ne;for(let St=0;St<qr;St++){const Ut=x[St],de=E[St];q[St*3]=de.x,q[St*3+1]=de.y,q[St*3+2]=de.z;const bt=Io.clamp((Ut.z+1.6)/3.2,0,1),Yt=Math.hypot(Ut.x,Ut.y);N[St]=.046+bt*.016+(Yt<1.15?.01:0),Rt.copy(k).lerp(yt,.35+bt*.65).lerp(dt,bt*.25),Z.setColorAt(St,Rt)}Z.instanceColor.needsUpdate=!0;const gt=new Float32Array(Ps*3),Q=new Float32Array(Ps*3),ht=new Float32Array(Ps*3);for(let St=0;St<Ps;St++){const Ut=A[St];gt[St*3]=Ut.x,gt[St*3+1]=Ut.y,gt[St*3+2]=Ut.z;const de=Io.clamp((_[St].z+1.6)/3.2,0,1);Rt.copy(k).lerp(dt,de),ht[St*3]=Rt.r,ht[St*3+1]=Rt.g,ht[St*3+2]=Rt.b}const at=new Ia;at.setAttribute("position",new Xi(gt,3)),at.setAttribute("color",new Xi(ht,3));const wt=new US({size:.055,map:x2(),vertexColors:!0,transparent:!0,opacity:.85,depthWrite:!1,blending:Hp,sizeAttenuation:!0});w.add(new c2(at,wt));let Nt=.15,Jt=1.18,pe=13,be=.15,U=Jt,J=pe,At=0,vt="none",zt=!1,Ft=0,jt=0,Ot=null,Bt=0,ve=0;const j=document.createElement("video");j.playsInline=!0,j.muted=!0,j.autoplay=!0,j.style.cssText="position:absolute;width:1px;height:1px;opacity:0;pointer-events:none;",y.appendChild(j);const un=new y2.Hands({locateFile:St=>`https://cdn.jsdelivr.net/npm/@mediapipe/hands/${St}`});un.setOptions({maxNumHands:1,modelComplexity:1,minDetectionConfidence:.7,minTrackingConfidence:.6}),un.onResults(St=>{var re;const Ut=((re=St.multiHandLandmarks)==null?void 0:re[0])??null;if(!Ut){vt="none",Ot=null;return}const de=S2(Ut);de!=="none"&&(vt=de);const bt=Ut[9];Ot&&(be-=(bt.x-Ot.x)*7,U=Io.clamp(U+(bt.y-Ot.y)*2.2,.35,Math.PI-.35)),Ot={x:bt.x,y:bt.y},Math.hypot(Ut[8].x-Ut[4].x,Ut[8].y-Ut[4].y)<.06&&(J=Io.clamp(7+bt.y*8,6.5,16))});let Se=0,ue=!1,Ht=p.current;const we=()=>{cancelAnimationFrame(Se),ue=!1},le=async()=>{const St=$o+1;jy(),$o=St;try{const Ut=await navigator.mediaDevices.getUserMedia({audio:!1,video:{facingMode:"user",width:{ideal:640},height:{ideal:480}}});if(St!==$o){Ut.getTracks().forEach(bt=>bt.stop());return}Eu=Ut,j.srcObject=Ut,await j.play(),g.current("");const de=async()=>{if(St===$o){if(j.readyState>=2&&!ue){ue=!0;try{await un.send({image:j})}catch{}ue=!1}Se=requestAnimationFrame(()=>{de()})}};de()}catch(Ut){if(St!==$o)return;const de=Ut instanceof DOMException?Ut.name:"";de==="NotReadableError"||de==="TrackStartError"?g.current("Камера занята другой вкладкой или программой. Закрой её и нажми «Ещё раз»."):de==="NotAllowedError"?g.current("Доступ к камере закрыт. Разреши его в браузере и нажми «Ещё раз»."):g.current("Камера не открылась. Сердце можно собрать кнопкой.")}};le();const z=()=>{const St=y.clientWidth||window.innerWidth,Ut=y.clientHeight||window.innerHeight;L.aspect=St/Math.max(Ut,1),L.updateProjectionMatrix(),T.setSize(St,Ut,!1)};z();const C=St=>{St.target.closest("button")||(zt=!0,Ft=St.clientX,jt=St.clientY)},ot=St=>{zt&&(be-=(St.clientX-Ft)*.01,U=Io.clamp(U+(St.clientY-jt)*.007,.35,Math.PI-.35),Ft=St.clientX,jt=St.clientY)},xt=()=>{zt=!1},Dt=St=>{St.preventDefault(),J=Io.clamp(J+St.deltaY*.01,6.5,18)};y.addEventListener("pointerdown",C),window.addEventListener("pointermove",ot),window.addEventListener("pointerup",xt),y.addEventListener("wheel",Dt,{passive:!1}),window.addEventListener("resize",z);const Mt=new v2,ne=()=>{Bt=requestAnimationFrame(ne);const St=Mt.getElapsedTime(),Ut=h.current,de=Ut==="auto"?vt:Ut,bt=de==="fist";At+=((bt?1:0)-At)*.04,Nt+=(be-Nt)*.08,Jt+=(U-Jt)*.08,pe+=(J-pe)*.08,L.position.set(pe*Math.sin(Jt)*Math.sin(Nt),pe*Math.cos(Jt)+.2,pe*Math.sin(Jt)*Math.cos(Nt)),L.lookAt(0,.15,0);const Yt=bt?1+Math.sin(St*3)*.035*At:1,re=bt?.08:.018;ft.emissiveIntensity=.2+At*.55;for(let It=0;It<qr;It++){const Vt=It*3,_e=bt?x[It]:E[It];bt||(P[Vt]+=(Math.random()-.5)*.02,P[Vt+1]+=(Math.random()-.5)*.02,P[Vt+2]+=(Math.random()-.5)*.02,P[Vt]*=.94,P[Vt+1]*=.94,P[Vt+2]*=.94,q[Vt]+=P[Vt],q[Vt+1]+=P[Vt+1],q[Vt+2]+=P[Vt+2]),q[Vt]+=(_e.x*(bt?Yt:1)-q[Vt])*re,q[Vt+1]+=(_e.y*(bt?Yt:1)-q[Vt+1])*re,q[Vt+2]+=(_e.z*(bt?Yt:1)-q[Vt+2])*re,V.position.set(q[Vt],q[Vt+1],q[Vt+2]),V.scale.setScalar(N[It]*Yt),V.rotation.set(St*.35+It*.05,St*.22+It*.07,0),V.updateMatrix(),Z.setMatrixAt(It,V.matrix)}Z.instanceMatrix.needsUpdate=!0,p.current!==Ht&&(Ht=p.current,le());const me=bt?.06:.014;for(let It=0;It<Ps;It++){const Vt=It*3,_e=bt?_[It]:A[It],Ge=bt?1.04:1;bt||(Q[Vt]+=(Math.random()-.5)*.02,Q[Vt+1]+=(Math.random()-.5)*.02,Q[Vt+2]+=(Math.random()-.5)*.02,Q[Vt]*=.94,Q[Vt+1]*=.94,Q[Vt+2]*=.94,gt[Vt]+=Q[Vt],gt[Vt+1]+=Q[Vt+1],gt[Vt+2]+=Q[Vt+2]),gt[Vt]+=(_e.x*Ge*(bt?Yt:1)-gt[Vt])*me,gt[Vt+1]+=(_e.y*Ge*(bt?Yt:1)-gt[Vt+1])*me,gt[Vt+2]+=(_e.z*Ge*(bt?Yt:1)-gt[Vt+2])*me}at.attributes.position.needsUpdate=!0,wt.opacity=.35+At*.6,ve+=1,ve%10===0&&d.current(de,vt!=="none"),T.render(w,L)};return ne(),()=>{var St;cancelAnimationFrame(Bt),y.removeEventListener("pointerdown",C),window.removeEventListener("pointermove",ot),window.removeEventListener("pointerup",xt),y.removeEventListener("wheel",Dt),window.removeEventListener("resize",z),we(),jy(),un.close(),O.dispose(),ft.dispose(),at.dispose(),(St=wt.map)==null||St.dispose(),wt.dispose(),T.dispose(),T.domElement.remove(),j.remove()}},[]),_n.jsx("div",{className:"scene",ref:u})}const E2={fist:"Сердце пульсирует",open:"Вспышка — частицы разлетаются",none:"Покажите руку перед камерой"};function T2(){const[o,e]=da.useState(!1),[a,s]=da.useState("auto"),[u,h]=da.useState("none"),[p,d]=da.useState(""),[g,y]=da.useState(0);return _n.jsxs("div",{className:"app",children:[o&&_n.jsx(M2,{mode:a,cameraRetry:g,onGesture:x=>h(x),onCameraError:d}),o&&_n.jsxs("div",{className:"hud",children:[_n.jsx("div",{className:"brand",children:"СЕРДЦЕ"}),_n.jsxs("div",{className:"hud-bottom",children:[_n.jsx("div",{className:"status",children:E2[u]}),_n.jsx("p",{className:"hint",children:"Кулак собирает сердце и оно пульсирует · ладонь разбрасывает · мышью можно облететь вокруг"}),p&&_n.jsx("p",{className:"camera-note",children:p}),_n.jsxs("div",{className:"controls",children:[p&&_n.jsx("button",{className:"mode-button",type:"button",onClick:()=>y(x=>x+1),children:"Ещё раз"}),_n.jsx("button",{className:a==="auto"?"mode-button active":"mode-button",onClick:()=>s("auto"),type:"button",children:"Камера"}),_n.jsx("button",{className:a==="fist"?"mode-button active":"mode-button",onClick:()=>s("fist"),type:"button",children:"Собрать"}),_n.jsx("button",{className:a==="open"?"mode-button active":"mode-button",onClick:()=>s("open"),type:"button",children:"Разлёт"})]})]})]}),!o&&_n.jsx("div",{className:"start-screen",children:_n.jsxs("div",{className:"start-content",children:[_n.jsx("div",{className:"heart-icon",children:"♥"}),_n.jsx("h1",{children:"СЕРДЦЕ"}),_n.jsx("p",{className:"lead",children:"Кулак собирает и сжимает объёмное сердце. Открытая ладонь отпускает частицы."}),_n.jsx("p",{className:"sub",children:"Ведите рукой или мышью, чтобы облететь его со всех сторон. Щипок и колёсико приближают."}),_n.jsx("button",{className:"start-button",type:"button",onClick:()=>e(!0),children:"Включить камеру"}),_n.jsx("p",{className:"disclaimer",children:"Камера работает только в браузере, видео никуда не отправляется"})]})})]})}XM.createRoot(document.getElementById("root")).render(_n.jsx(T2,{}));
