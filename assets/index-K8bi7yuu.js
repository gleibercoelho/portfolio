function Xy(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const i=Object.getOwnPropertyDescriptor(r,o);i&&Object.defineProperty(e,o,i.get?i:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function B0(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var $0={exports:{}},ul={},G0={exports:{}},H={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ji=Symbol.for("react.element"),Zy=Symbol.for("react.portal"),Jy=Symbol.for("react.fragment"),e5=Symbol.for("react.strict_mode"),t5=Symbol.for("react.profiler"),n5=Symbol.for("react.provider"),r5=Symbol.for("react.context"),o5=Symbol.for("react.forward_ref"),i5=Symbol.for("react.suspense"),s5=Symbol.for("react.memo"),a5=Symbol.for("react.lazy"),Cp=Symbol.iterator;function l5(e){return e===null||typeof e!="object"?null:(e=Cp&&e[Cp]||e["@@iterator"],typeof e=="function"?e:null)}var U0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},H0=Object.assign,W0={};function Po(e,t,n){this.props=e,this.context=t,this.refs=W0,this.updater=n||U0}Po.prototype.isReactComponent={};Po.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Po.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Q0(){}Q0.prototype=Po.prototype;function _d(e,t,n){this.props=e,this.context=t,this.refs=W0,this.updater=n||U0}var Ld=_d.prototype=new Q0;Ld.constructor=_d;H0(Ld,Po.prototype);Ld.isPureReactComponent=!0;var Sp=Array.isArray,q0=Object.prototype.hasOwnProperty,zd={current:null},K0={key:!0,ref:!0,__self:!0,__source:!0};function Y0(e,t,n){var r,o={},i=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(i=""+t.key),t)q0.call(t,r)&&!K0.hasOwnProperty(r)&&(o[r]=t[r]);var a=arguments.length-2;if(a===1)o.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];o.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)o[r]===void 0&&(o[r]=a[r]);return{$$typeof:Ji,type:e,key:i,ref:s,props:o,_owner:zd.current}}function u5(e,t){return{$$typeof:Ji,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Md(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ji}function c5(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var jp=/\/+/g;function Xl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?c5(""+e.key):t.toString(36)}function Hs(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(i){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case Ji:case Zy:s=!0}}if(s)return s=e,o=o(s),e=r===""?"."+Xl(s,0):r,Sp(o)?(n="",e!=null&&(n=e.replace(jp,"$&/")+"/"),Hs(o,t,n,"",function(c){return c})):o!=null&&(Md(o)&&(o=u5(o,n+(!o.key||s&&s.key===o.key?"":(""+o.key).replace(jp,"$&/")+"/")+e)),t.push(o)),1;if(s=0,r=r===""?".":r+":",Sp(e))for(var a=0;a<e.length;a++){i=e[a];var l=r+Xl(i,a);s+=Hs(i,t,n,l,o)}else if(l=l5(e),typeof l=="function")for(e=l.call(e),a=0;!(i=e.next()).done;)i=i.value,l=r+Xl(i,a++),s+=Hs(i,t,n,l,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function gs(e,t,n){if(e==null)return e;var r=[],o=0;return Hs(e,r,"","",function(i){return t.call(n,i,o++)}),r}function d5(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ge={current:null},Ws={transition:null},f5={ReactCurrentDispatcher:Ge,ReactCurrentBatchConfig:Ws,ReactCurrentOwner:zd};H.Children={map:gs,forEach:function(e,t,n){gs(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return gs(e,function(){t++}),t},toArray:function(e){return gs(e,function(t){return t})||[]},only:function(e){if(!Md(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};H.Component=Po;H.Fragment=Jy;H.Profiler=t5;H.PureComponent=_d;H.StrictMode=e5;H.Suspense=i5;H.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=f5;H.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=H0({},e.props),o=e.key,i=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,s=zd.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)q0.call(t,l)&&!K0.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:Ji,type:e.type,key:o,ref:i,props:r,_owner:s}};H.createContext=function(e){return e={$$typeof:r5,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:n5,_context:e},e.Consumer=e};H.createElement=Y0;H.createFactory=function(e){var t=Y0.bind(null,e);return t.type=e,t};H.createRef=function(){return{current:null}};H.forwardRef=function(e){return{$$typeof:o5,render:e}};H.isValidElement=Md;H.lazy=function(e){return{$$typeof:a5,_payload:{_status:-1,_result:e},_init:d5}};H.memo=function(e,t){return{$$typeof:s5,type:e,compare:t===void 0?null:t}};H.startTransition=function(e){var t=Ws.transition;Ws.transition={};try{e()}finally{Ws.transition=t}};H.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};H.useCallback=function(e,t){return Ge.current.useCallback(e,t)};H.useContext=function(e){return Ge.current.useContext(e)};H.useDebugValue=function(){};H.useDeferredValue=function(e){return Ge.current.useDeferredValue(e)};H.useEffect=function(e,t){return Ge.current.useEffect(e,t)};H.useId=function(){return Ge.current.useId()};H.useImperativeHandle=function(e,t,n){return Ge.current.useImperativeHandle(e,t,n)};H.useInsertionEffect=function(e,t){return Ge.current.useInsertionEffect(e,t)};H.useLayoutEffect=function(e,t){return Ge.current.useLayoutEffect(e,t)};H.useMemo=function(e,t){return Ge.current.useMemo(e,t)};H.useReducer=function(e,t,n){return Ge.current.useReducer(e,t,n)};H.useRef=function(e){return Ge.current.useRef(e)};H.useState=function(e){return Ge.current.useState(e)};H.useSyncExternalStore=function(e,t,n){return Ge.current.useSyncExternalStore(e,t,n)};H.useTransition=function(){return Ge.current.useTransition()};H.version="18.2.0";G0.exports=H;var C=G0.exports;const F=B0(C),p5=Xy({__proto__:null,default:F},[C]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var h5=C,m5=Symbol.for("react.element"),g5=Symbol.for("react.fragment"),v5=Object.prototype.hasOwnProperty,y5=h5.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,x5={key:!0,ref:!0,__self:!0,__source:!0};function X0(e,t,n){var r,o={},i=null,s=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)v5.call(t,r)&&!x5.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:m5,type:e,key:i,ref:s,props:o,_owner:y5.current}}ul.Fragment=g5;ul.jsx=X0;ul.jsxs=X0;$0.exports=ul;var u=$0.exports,Zu={},Z0={exports:{}},ct={},J0={exports:{}},em={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(A,z){var O=A.length;A.push(z);e:for(;0<O;){var M=O-1>>>1,te=A[M];if(0<o(te,z))A[M]=z,A[O]=te,O=M;else break e}}function n(A){return A.length===0?null:A[0]}function r(A){if(A.length===0)return null;var z=A[0],O=A.pop();if(O!==z){A[0]=O;e:for(var M=0,te=A.length,Pt=te>>>1;M<Pt;){var Fe=2*(M+1)-1,ft=A[Fe],ke=Fe+1,tt=A[ke];if(0>o(ft,O))ke<te&&0>o(tt,ft)?(A[M]=tt,A[ke]=O,M=ke):(A[M]=ft,A[Fe]=O,M=Fe);else if(ke<te&&0>o(tt,O))A[M]=tt,A[ke]=O,M=ke;else break e}}return z}function o(A,z){var O=A.sortIndex-z.sortIndex;return O!==0?O:A.id-z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var s=Date,a=s.now();e.unstable_now=function(){return s.now()-a}}var l=[],c=[],d=1,f=null,p=3,m=!1,y=!1,x=!1,S=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(A){for(var z=n(c);z!==null;){if(z.callback===null)r(c);else if(z.startTime<=A)r(c),z.sortIndex=z.expirationTime,t(l,z);else break;z=n(c)}}function w(A){if(x=!1,g(A),!y)if(n(l)!==null)y=!0,ee(j);else{var z=n(c);z!==null&&se(w,z.startTime-A)}}function j(A,z){y=!1,x&&(x=!1,v(E),E=-1),m=!0;var O=p;try{for(g(z),f=n(l);f!==null&&(!(f.expirationTime>z)||A&&!I());){var M=f.callback;if(typeof M=="function"){f.callback=null,p=f.priorityLevel;var te=M(f.expirationTime<=z);z=e.unstable_now(),typeof te=="function"?f.callback=te:f===n(l)&&r(l),g(z)}else r(l);f=n(l)}if(f!==null)var Pt=!0;else{var Fe=n(c);Fe!==null&&se(w,Fe.startTime-z),Pt=!1}return Pt}finally{f=null,p=O,m=!1}}var P=!1,k=null,E=-1,R=5,_=-1;function I(){return!(e.unstable_now()-_<R)}function G(){if(k!==null){var A=e.unstable_now();_=A;var z=!0;try{z=k(!0,A)}finally{z?U():(P=!1,k=null)}}else P=!1}var U;if(typeof h=="function")U=function(){h(G)};else if(typeof MessageChannel<"u"){var B=new MessageChannel,q=B.port2;B.port1.onmessage=G,U=function(){q.postMessage(null)}}else U=function(){S(G,0)};function ee(A){k=A,P||(P=!0,U())}function se(A,z){E=S(function(){A(e.unstable_now())},z)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(A){A.callback=null},e.unstable_continueExecution=function(){y||m||(y=!0,ee(j))},e.unstable_forceFrameRate=function(A){0>A||125<A?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<A?Math.floor(1e3/A):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(A){switch(p){case 1:case 2:case 3:var z=3;break;default:z=p}var O=p;p=z;try{return A()}finally{p=O}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(A,z){switch(A){case 1:case 2:case 3:case 4:case 5:break;default:A=3}var O=p;p=A;try{return z()}finally{p=O}},e.unstable_scheduleCallback=function(A,z,O){var M=e.unstable_now();switch(typeof O=="object"&&O!==null?(O=O.delay,O=typeof O=="number"&&0<O?M+O:M):O=M,A){case 1:var te=-1;break;case 2:te=250;break;case 5:te=1073741823;break;case 4:te=1e4;break;default:te=5e3}return te=O+te,A={id:d++,callback:z,priorityLevel:A,startTime:O,expirationTime:te,sortIndex:-1},O>M?(A.sortIndex=O,t(c,A),n(l)===null&&A===n(c)&&(x?(v(E),E=-1):x=!0,se(w,O-M))):(A.sortIndex=te,t(l,A),y||m||(y=!0,ee(j))),A},e.unstable_shouldYield=I,e.unstable_wrapCallback=function(A){var z=p;return function(){var O=p;p=z;try{return A.apply(this,arguments)}finally{p=O}}}})(em);J0.exports=em;var w5=J0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tm=C,lt=w5;function T(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var nm=new Set,Ci={};function kr(e,t){lo(e,t),lo(e+"Capture",t)}function lo(e,t){for(Ci[e]=t,e=0;e<t.length;e++)nm.add(t[e])}var ln=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ju=Object.prototype.hasOwnProperty,C5=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Pp={},kp={};function S5(e){return Ju.call(kp,e)?!0:Ju.call(Pp,e)?!1:C5.test(e)?kp[e]=!0:(Pp[e]=!0,!1)}function j5(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function P5(e,t,n,r){if(t===null||typeof t>"u"||j5(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ue(e,t,n,r,o,i,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=s}var _e={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){_e[e]=new Ue(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];_e[t]=new Ue(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){_e[e]=new Ue(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){_e[e]=new Ue(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){_e[e]=new Ue(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){_e[e]=new Ue(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){_e[e]=new Ue(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){_e[e]=new Ue(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){_e[e]=new Ue(e,5,!1,e.toLowerCase(),null,!1,!1)});var Id=/[\-:]([a-z])/g;function Dd(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Id,Dd);_e[t]=new Ue(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Id,Dd);_e[t]=new Ue(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Id,Dd);_e[t]=new Ue(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){_e[e]=new Ue(e,1,!1,e.toLowerCase(),null,!1,!1)});_e.xlinkHref=new Ue("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){_e[e]=new Ue(e,1,!1,e.toLowerCase(),null,!0,!0)});function Od(e,t,n,r){var o=_e.hasOwnProperty(t)?_e[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(P5(t,n,o,r)&&(n=null),r||o===null?S5(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var fn=tm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,vs=Symbol.for("react.element"),Mr=Symbol.for("react.portal"),Ir=Symbol.for("react.fragment"),Nd=Symbol.for("react.strict_mode"),ec=Symbol.for("react.profiler"),rm=Symbol.for("react.provider"),om=Symbol.for("react.context"),Fd=Symbol.for("react.forward_ref"),tc=Symbol.for("react.suspense"),nc=Symbol.for("react.suspense_list"),Vd=Symbol.for("react.memo"),yn=Symbol.for("react.lazy"),im=Symbol.for("react.offscreen"),Ep=Symbol.iterator;function Lo(e){return e===null||typeof e!="object"?null:(e=Ep&&e[Ep]||e["@@iterator"],typeof e=="function"?e:null)}var de=Object.assign,Zl;function Wo(e){if(Zl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Zl=t&&t[1]||""}return`
`+Zl+e}var Jl=!1;function eu(e,t){if(!e||Jl)return"";Jl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var o=c.stack.split(`
`),i=r.stack.split(`
`),s=o.length-1,a=i.length-1;1<=s&&0<=a&&o[s]!==i[a];)a--;for(;1<=s&&0<=a;s--,a--)if(o[s]!==i[a]){if(s!==1||a!==1)do if(s--,a--,0>a||o[s]!==i[a]){var l=`
`+o[s].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=s&&0<=a);break}}}finally{Jl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Wo(e):""}function k5(e){switch(e.tag){case 5:return Wo(e.type);case 16:return Wo("Lazy");case 13:return Wo("Suspense");case 19:return Wo("SuspenseList");case 0:case 2:case 15:return e=eu(e.type,!1),e;case 11:return e=eu(e.type.render,!1),e;case 1:return e=eu(e.type,!0),e;default:return""}}function rc(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ir:return"Fragment";case Mr:return"Portal";case ec:return"Profiler";case Nd:return"StrictMode";case tc:return"Suspense";case nc:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case om:return(e.displayName||"Context")+".Consumer";case rm:return(e._context.displayName||"Context")+".Provider";case Fd:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Vd:return t=e.displayName||null,t!==null?t:rc(e.type)||"Memo";case yn:t=e._payload,e=e._init;try{return rc(e(t))}catch{}}return null}function E5(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return rc(t);case 8:return t===Nd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Un(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function sm(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function T5(e){var t=sm(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(s){r=""+s,i.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ys(e){e._valueTracker||(e._valueTracker=T5(e))}function am(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=sm(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function ya(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function oc(e,t){var n=t.checked;return de({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Tp(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Un(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function lm(e,t){t=t.checked,t!=null&&Od(e,"checked",t,!1)}function ic(e,t){lm(e,t);var n=Un(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?sc(e,t.type,n):t.hasOwnProperty("defaultValue")&&sc(e,t.type,Un(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function bp(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function sc(e,t,n){(t!=="number"||ya(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Qo=Array.isArray;function Xr(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Un(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function ac(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(T(91));return de({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Rp(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(T(92));if(Qo(n)){if(1<n.length)throw Error(T(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Un(n)}}function um(e,t){var n=Un(t.value),r=Un(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Ap(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function cm(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function lc(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?cm(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var xs,dm=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(xs=xs||document.createElement("div"),xs.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=xs.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Si(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var ei={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},b5=["Webkit","ms","Moz","O"];Object.keys(ei).forEach(function(e){b5.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ei[t]=ei[e]})});function fm(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||ei.hasOwnProperty(e)&&ei[e]?(""+t).trim():t+"px"}function pm(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=fm(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var R5=de({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function uc(e,t){if(t){if(R5[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(T(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(T(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(T(61))}if(t.style!=null&&typeof t.style!="object")throw Error(T(62))}}function cc(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var dc=null;function Bd(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var fc=null,Zr=null,Jr=null;function _p(e){if(e=ns(e)){if(typeof fc!="function")throw Error(T(280));var t=e.stateNode;t&&(t=hl(t),fc(e.stateNode,e.type,t))}}function hm(e){Zr?Jr?Jr.push(e):Jr=[e]:Zr=e}function mm(){if(Zr){var e=Zr,t=Jr;if(Jr=Zr=null,_p(e),t)for(e=0;e<t.length;e++)_p(t[e])}}function gm(e,t){return e(t)}function vm(){}var tu=!1;function ym(e,t,n){if(tu)return e(t,n);tu=!0;try{return gm(e,t,n)}finally{tu=!1,(Zr!==null||Jr!==null)&&(vm(),mm())}}function ji(e,t){var n=e.stateNode;if(n===null)return null;var r=hl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(T(231,t,typeof n));return n}var pc=!1;if(ln)try{var zo={};Object.defineProperty(zo,"passive",{get:function(){pc=!0}}),window.addEventListener("test",zo,zo),window.removeEventListener("test",zo,zo)}catch{pc=!1}function A5(e,t,n,r,o,i,s,a,l){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(d){this.onError(d)}}var ti=!1,xa=null,wa=!1,hc=null,_5={onError:function(e){ti=!0,xa=e}};function L5(e,t,n,r,o,i,s,a,l){ti=!1,xa=null,A5.apply(_5,arguments)}function z5(e,t,n,r,o,i,s,a,l){if(L5.apply(this,arguments),ti){if(ti){var c=xa;ti=!1,xa=null}else throw Error(T(198));wa||(wa=!0,hc=c)}}function Er(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function xm(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Lp(e){if(Er(e)!==e)throw Error(T(188))}function M5(e){var t=e.alternate;if(!t){if(t=Er(e),t===null)throw Error(T(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return Lp(o),e;if(i===r)return Lp(o),t;i=i.sibling}throw Error(T(188))}if(n.return!==r.return)n=o,r=i;else{for(var s=!1,a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s){for(a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s)throw Error(T(189))}}if(n.alternate!==r)throw Error(T(190))}if(n.tag!==3)throw Error(T(188));return n.stateNode.current===n?e:t}function wm(e){return e=M5(e),e!==null?Cm(e):null}function Cm(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Cm(e);if(t!==null)return t;e=e.sibling}return null}var Sm=lt.unstable_scheduleCallback,zp=lt.unstable_cancelCallback,I5=lt.unstable_shouldYield,D5=lt.unstable_requestPaint,me=lt.unstable_now,O5=lt.unstable_getCurrentPriorityLevel,$d=lt.unstable_ImmediatePriority,jm=lt.unstable_UserBlockingPriority,Ca=lt.unstable_NormalPriority,N5=lt.unstable_LowPriority,Pm=lt.unstable_IdlePriority,cl=null,Gt=null;function F5(e){if(Gt&&typeof Gt.onCommitFiberRoot=="function")try{Gt.onCommitFiberRoot(cl,e,void 0,(e.current.flags&128)===128)}catch{}}var Lt=Math.clz32?Math.clz32:$5,V5=Math.log,B5=Math.LN2;function $5(e){return e>>>=0,e===0?32:31-(V5(e)/B5|0)|0}var ws=64,Cs=4194304;function qo(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Sa(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,s=n&268435455;if(s!==0){var a=s&~o;a!==0?r=qo(a):(i&=s,i!==0&&(r=qo(i)))}else s=n&~o,s!==0?r=qo(s):i!==0&&(r=qo(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Lt(t),o=1<<n,r|=e[n],t&=~o;return r}function G5(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function U5(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var s=31-Lt(i),a=1<<s,l=o[s];l===-1?(!(a&n)||a&r)&&(o[s]=G5(a,t)):l<=t&&(e.expiredLanes|=a),i&=~a}}function mc(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function km(){var e=ws;return ws<<=1,!(ws&4194240)&&(ws=64),e}function nu(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function es(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Lt(t),e[t]=n}function H5(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-Lt(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function Gd(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Lt(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var Z=0;function Em(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Tm,Ud,bm,Rm,Am,gc=!1,Ss=[],_n=null,Ln=null,zn=null,Pi=new Map,ki=new Map,Cn=[],W5="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Mp(e,t){switch(e){case"focusin":case"focusout":_n=null;break;case"dragenter":case"dragleave":Ln=null;break;case"mouseover":case"mouseout":zn=null;break;case"pointerover":case"pointerout":Pi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ki.delete(t.pointerId)}}function Mo(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=ns(t),t!==null&&Ud(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function Q5(e,t,n,r,o){switch(t){case"focusin":return _n=Mo(_n,e,t,n,r,o),!0;case"dragenter":return Ln=Mo(Ln,e,t,n,r,o),!0;case"mouseover":return zn=Mo(zn,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return Pi.set(i,Mo(Pi.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,ki.set(i,Mo(ki.get(i)||null,e,t,n,r,o)),!0}return!1}function _m(e){var t=ur(e.target);if(t!==null){var n=Er(t);if(n!==null){if(t=n.tag,t===13){if(t=xm(n),t!==null){e.blockedOn=t,Am(e.priority,function(){bm(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Qs(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=vc(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);dc=r,n.target.dispatchEvent(r),dc=null}else return t=ns(n),t!==null&&Ud(t),e.blockedOn=n,!1;t.shift()}return!0}function Ip(e,t,n){Qs(e)&&n.delete(t)}function q5(){gc=!1,_n!==null&&Qs(_n)&&(_n=null),Ln!==null&&Qs(Ln)&&(Ln=null),zn!==null&&Qs(zn)&&(zn=null),Pi.forEach(Ip),ki.forEach(Ip)}function Io(e,t){e.blockedOn===t&&(e.blockedOn=null,gc||(gc=!0,lt.unstable_scheduleCallback(lt.unstable_NormalPriority,q5)))}function Ei(e){function t(o){return Io(o,e)}if(0<Ss.length){Io(Ss[0],e);for(var n=1;n<Ss.length;n++){var r=Ss[n];r.blockedOn===e&&(r.blockedOn=null)}}for(_n!==null&&Io(_n,e),Ln!==null&&Io(Ln,e),zn!==null&&Io(zn,e),Pi.forEach(t),ki.forEach(t),n=0;n<Cn.length;n++)r=Cn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Cn.length&&(n=Cn[0],n.blockedOn===null);)_m(n),n.blockedOn===null&&Cn.shift()}var eo=fn.ReactCurrentBatchConfig,ja=!0;function K5(e,t,n,r){var o=Z,i=eo.transition;eo.transition=null;try{Z=1,Hd(e,t,n,r)}finally{Z=o,eo.transition=i}}function Y5(e,t,n,r){var o=Z,i=eo.transition;eo.transition=null;try{Z=4,Hd(e,t,n,r)}finally{Z=o,eo.transition=i}}function Hd(e,t,n,r){if(ja){var o=vc(e,t,n,r);if(o===null)fu(e,t,r,Pa,n),Mp(e,r);else if(Q5(o,e,t,n,r))r.stopPropagation();else if(Mp(e,r),t&4&&-1<W5.indexOf(e)){for(;o!==null;){var i=ns(o);if(i!==null&&Tm(i),i=vc(e,t,n,r),i===null&&fu(e,t,r,Pa,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else fu(e,t,r,null,n)}}var Pa=null;function vc(e,t,n,r){if(Pa=null,e=Bd(r),e=ur(e),e!==null)if(t=Er(e),t===null)e=null;else if(n=t.tag,n===13){if(e=xm(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Pa=e,null}function Lm(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(O5()){case $d:return 1;case jm:return 4;case Ca:case N5:return 16;case Pm:return 536870912;default:return 16}default:return 16}}var jn=null,Wd=null,qs=null;function zm(){if(qs)return qs;var e,t=Wd,n=t.length,r,o="value"in jn?jn.value:jn.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===o[i-r];r++);return qs=o.slice(e,1<r?1-r:void 0)}function Ks(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function js(){return!0}function Dp(){return!1}function dt(e){function t(n,r,o,i,s){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=s,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(i):i[a]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?js:Dp,this.isPropagationStopped=Dp,this}return de(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=js)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=js)},persist:function(){},isPersistent:js}),t}var ko={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Qd=dt(ko),ts=de({},ko,{view:0,detail:0}),X5=dt(ts),ru,ou,Do,dl=de({},ts,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:qd,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Do&&(Do&&e.type==="mousemove"?(ru=e.screenX-Do.screenX,ou=e.screenY-Do.screenY):ou=ru=0,Do=e),ru)},movementY:function(e){return"movementY"in e?e.movementY:ou}}),Op=dt(dl),Z5=de({},dl,{dataTransfer:0}),J5=dt(Z5),e3=de({},ts,{relatedTarget:0}),iu=dt(e3),t3=de({},ko,{animationName:0,elapsedTime:0,pseudoElement:0}),n3=dt(t3),r3=de({},ko,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),o3=dt(r3),i3=de({},ko,{data:0}),Np=dt(i3),s3={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},a3={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},l3={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function u3(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=l3[e])?!!t[e]:!1}function qd(){return u3}var c3=de({},ts,{key:function(e){if(e.key){var t=s3[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ks(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?a3[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:qd,charCode:function(e){return e.type==="keypress"?Ks(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ks(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),d3=dt(c3),f3=de({},dl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Fp=dt(f3),p3=de({},ts,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:qd}),h3=dt(p3),m3=de({},ko,{propertyName:0,elapsedTime:0,pseudoElement:0}),g3=dt(m3),v3=de({},dl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),y3=dt(v3),x3=[9,13,27,32],Kd=ln&&"CompositionEvent"in window,ni=null;ln&&"documentMode"in document&&(ni=document.documentMode);var w3=ln&&"TextEvent"in window&&!ni,Mm=ln&&(!Kd||ni&&8<ni&&11>=ni),Vp=" ",Bp=!1;function Im(e,t){switch(e){case"keyup":return x3.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Dm(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Dr=!1;function C3(e,t){switch(e){case"compositionend":return Dm(t);case"keypress":return t.which!==32?null:(Bp=!0,Vp);case"textInput":return e=t.data,e===Vp&&Bp?null:e;default:return null}}function S3(e,t){if(Dr)return e==="compositionend"||!Kd&&Im(e,t)?(e=zm(),qs=Wd=jn=null,Dr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Mm&&t.locale!=="ko"?null:t.data;default:return null}}var j3={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function $p(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!j3[e.type]:t==="textarea"}function Om(e,t,n,r){hm(r),t=ka(t,"onChange"),0<t.length&&(n=new Qd("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var ri=null,Ti=null;function P3(e){qm(e,0)}function fl(e){var t=Fr(e);if(am(t))return e}function k3(e,t){if(e==="change")return t}var Nm=!1;if(ln){var su;if(ln){var au="oninput"in document;if(!au){var Gp=document.createElement("div");Gp.setAttribute("oninput","return;"),au=typeof Gp.oninput=="function"}su=au}else su=!1;Nm=su&&(!document.documentMode||9<document.documentMode)}function Up(){ri&&(ri.detachEvent("onpropertychange",Fm),Ti=ri=null)}function Fm(e){if(e.propertyName==="value"&&fl(Ti)){var t=[];Om(t,Ti,e,Bd(e)),ym(P3,t)}}function E3(e,t,n){e==="focusin"?(Up(),ri=t,Ti=n,ri.attachEvent("onpropertychange",Fm)):e==="focusout"&&Up()}function T3(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return fl(Ti)}function b3(e,t){if(e==="click")return fl(t)}function R3(e,t){if(e==="input"||e==="change")return fl(t)}function A3(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var It=typeof Object.is=="function"?Object.is:A3;function bi(e,t){if(It(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!Ju.call(t,o)||!It(e[o],t[o]))return!1}return!0}function Hp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Wp(e,t){var n=Hp(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Hp(n)}}function Vm(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Vm(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Bm(){for(var e=window,t=ya();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=ya(e.document)}return t}function Yd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function _3(e){var t=Bm(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Vm(n.ownerDocument.documentElement,n)){if(r!==null&&Yd(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=Wp(n,i);var s=Wp(n,r);o&&s&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var L3=ln&&"documentMode"in document&&11>=document.documentMode,Or=null,yc=null,oi=null,xc=!1;function Qp(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;xc||Or==null||Or!==ya(r)||(r=Or,"selectionStart"in r&&Yd(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),oi&&bi(oi,r)||(oi=r,r=ka(yc,"onSelect"),0<r.length&&(t=new Qd("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Or)))}function Ps(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Nr={animationend:Ps("Animation","AnimationEnd"),animationiteration:Ps("Animation","AnimationIteration"),animationstart:Ps("Animation","AnimationStart"),transitionend:Ps("Transition","TransitionEnd")},lu={},$m={};ln&&($m=document.createElement("div").style,"AnimationEvent"in window||(delete Nr.animationend.animation,delete Nr.animationiteration.animation,delete Nr.animationstart.animation),"TransitionEvent"in window||delete Nr.transitionend.transition);function pl(e){if(lu[e])return lu[e];if(!Nr[e])return e;var t=Nr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in $m)return lu[e]=t[n];return e}var Gm=pl("animationend"),Um=pl("animationiteration"),Hm=pl("animationstart"),Wm=pl("transitionend"),Qm=new Map,qp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function qn(e,t){Qm.set(e,t),kr(t,[e])}for(var uu=0;uu<qp.length;uu++){var cu=qp[uu],z3=cu.toLowerCase(),M3=cu[0].toUpperCase()+cu.slice(1);qn(z3,"on"+M3)}qn(Gm,"onAnimationEnd");qn(Um,"onAnimationIteration");qn(Hm,"onAnimationStart");qn("dblclick","onDoubleClick");qn("focusin","onFocus");qn("focusout","onBlur");qn(Wm,"onTransitionEnd");lo("onMouseEnter",["mouseout","mouseover"]);lo("onMouseLeave",["mouseout","mouseover"]);lo("onPointerEnter",["pointerout","pointerover"]);lo("onPointerLeave",["pointerout","pointerover"]);kr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));kr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));kr("onBeforeInput",["compositionend","keypress","textInput","paste"]);kr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));kr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));kr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ko="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),I3=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ko));function Kp(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,z5(r,t,void 0,e),e.currentTarget=null}function qm(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var s=r.length-1;0<=s;s--){var a=r[s],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==i&&o.isPropagationStopped())break e;Kp(o,a,c),i=l}else for(s=0;s<r.length;s++){if(a=r[s],l=a.instance,c=a.currentTarget,a=a.listener,l!==i&&o.isPropagationStopped())break e;Kp(o,a,c),i=l}}}if(wa)throw e=hc,wa=!1,hc=null,e}function re(e,t){var n=t[Pc];n===void 0&&(n=t[Pc]=new Set);var r=e+"__bubble";n.has(r)||(Km(t,e,2,!1),n.add(r))}function du(e,t,n){var r=0;t&&(r|=4),Km(n,e,r,t)}var ks="_reactListening"+Math.random().toString(36).slice(2);function Ri(e){if(!e[ks]){e[ks]=!0,nm.forEach(function(n){n!=="selectionchange"&&(I3.has(n)||du(n,!1,e),du(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ks]||(t[ks]=!0,du("selectionchange",!1,t))}}function Km(e,t,n,r){switch(Lm(t)){case 1:var o=K5;break;case 4:o=Y5;break;default:o=Hd}n=o.bind(null,t,n,e),o=void 0,!pc||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function fu(e,t,n,r,o){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===o||a.nodeType===8&&a.parentNode===o)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===o||l.nodeType===8&&l.parentNode===o))return;s=s.return}for(;a!==null;){if(s=ur(a),s===null)return;if(l=s.tag,l===5||l===6){r=i=s;continue e}a=a.parentNode}}r=r.return}ym(function(){var c=i,d=Bd(n),f=[];e:{var p=Qm.get(e);if(p!==void 0){var m=Qd,y=e;switch(e){case"keypress":if(Ks(n)===0)break e;case"keydown":case"keyup":m=d3;break;case"focusin":y="focus",m=iu;break;case"focusout":y="blur",m=iu;break;case"beforeblur":case"afterblur":m=iu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=Op;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=J5;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=h3;break;case Gm:case Um:case Hm:m=n3;break;case Wm:m=g3;break;case"scroll":m=X5;break;case"wheel":m=y3;break;case"copy":case"cut":case"paste":m=o3;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Fp}var x=(t&4)!==0,S=!x&&e==="scroll",v=x?p!==null?p+"Capture":null:p;x=[];for(var h=c,g;h!==null;){g=h;var w=g.stateNode;if(g.tag===5&&w!==null&&(g=w,v!==null&&(w=ji(h,v),w!=null&&x.push(Ai(h,w,g)))),S)break;h=h.return}0<x.length&&(p=new m(p,y,null,n,d),f.push({event:p,listeners:x}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",m=e==="mouseout"||e==="pointerout",p&&n!==dc&&(y=n.relatedTarget||n.fromElement)&&(ur(y)||y[un]))break e;if((m||p)&&(p=d.window===d?d:(p=d.ownerDocument)?p.defaultView||p.parentWindow:window,m?(y=n.relatedTarget||n.toElement,m=c,y=y?ur(y):null,y!==null&&(S=Er(y),y!==S||y.tag!==5&&y.tag!==6)&&(y=null)):(m=null,y=c),m!==y)){if(x=Op,w="onMouseLeave",v="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(x=Fp,w="onPointerLeave",v="onPointerEnter",h="pointer"),S=m==null?p:Fr(m),g=y==null?p:Fr(y),p=new x(w,h+"leave",m,n,d),p.target=S,p.relatedTarget=g,w=null,ur(d)===c&&(x=new x(v,h+"enter",y,n,d),x.target=g,x.relatedTarget=S,w=x),S=w,m&&y)t:{for(x=m,v=y,h=0,g=x;g;g=Rr(g))h++;for(g=0,w=v;w;w=Rr(w))g++;for(;0<h-g;)x=Rr(x),h--;for(;0<g-h;)v=Rr(v),g--;for(;h--;){if(x===v||v!==null&&x===v.alternate)break t;x=Rr(x),v=Rr(v)}x=null}else x=null;m!==null&&Yp(f,p,m,x,!1),y!==null&&S!==null&&Yp(f,S,y,x,!0)}}e:{if(p=c?Fr(c):window,m=p.nodeName&&p.nodeName.toLowerCase(),m==="select"||m==="input"&&p.type==="file")var j=k3;else if($p(p))if(Nm)j=R3;else{j=T3;var P=E3}else(m=p.nodeName)&&m.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(j=b3);if(j&&(j=j(e,c))){Om(f,j,n,d);break e}P&&P(e,p,c),e==="focusout"&&(P=p._wrapperState)&&P.controlled&&p.type==="number"&&sc(p,"number",p.value)}switch(P=c?Fr(c):window,e){case"focusin":($p(P)||P.contentEditable==="true")&&(Or=P,yc=c,oi=null);break;case"focusout":oi=yc=Or=null;break;case"mousedown":xc=!0;break;case"contextmenu":case"mouseup":case"dragend":xc=!1,Qp(f,n,d);break;case"selectionchange":if(L3)break;case"keydown":case"keyup":Qp(f,n,d)}var k;if(Kd)e:{switch(e){case"compositionstart":var E="onCompositionStart";break e;case"compositionend":E="onCompositionEnd";break e;case"compositionupdate":E="onCompositionUpdate";break e}E=void 0}else Dr?Im(e,n)&&(E="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(E="onCompositionStart");E&&(Mm&&n.locale!=="ko"&&(Dr||E!=="onCompositionStart"?E==="onCompositionEnd"&&Dr&&(k=zm()):(jn=d,Wd="value"in jn?jn.value:jn.textContent,Dr=!0)),P=ka(c,E),0<P.length&&(E=new Np(E,e,null,n,d),f.push({event:E,listeners:P}),k?E.data=k:(k=Dm(n),k!==null&&(E.data=k)))),(k=w3?C3(e,n):S3(e,n))&&(c=ka(c,"onBeforeInput"),0<c.length&&(d=new Np("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:c}),d.data=k))}qm(f,t)})}function Ai(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ka(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=ji(e,n),i!=null&&r.unshift(Ai(e,i,o)),i=ji(e,t),i!=null&&r.push(Ai(e,i,o))),e=e.return}return r}function Rr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Yp(e,t,n,r,o){for(var i=t._reactName,s=[];n!==null&&n!==r;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&c!==null&&(a=c,o?(l=ji(n,i),l!=null&&s.unshift(Ai(n,l,a))):o||(l=ji(n,i),l!=null&&s.push(Ai(n,l,a)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var D3=/\r\n?/g,O3=/\u0000|\uFFFD/g;function Xp(e){return(typeof e=="string"?e:""+e).replace(D3,`
`).replace(O3,"")}function Es(e,t,n){if(t=Xp(t),Xp(e)!==t&&n)throw Error(T(425))}function Ea(){}var wc=null,Cc=null;function Sc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var jc=typeof setTimeout=="function"?setTimeout:void 0,N3=typeof clearTimeout=="function"?clearTimeout:void 0,Zp=typeof Promise=="function"?Promise:void 0,F3=typeof queueMicrotask=="function"?queueMicrotask:typeof Zp<"u"?function(e){return Zp.resolve(null).then(e).catch(V3)}:jc;function V3(e){setTimeout(function(){throw e})}function pu(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),Ei(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);Ei(t)}function Mn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Jp(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Eo=Math.random().toString(36).slice(2),$t="__reactFiber$"+Eo,_i="__reactProps$"+Eo,un="__reactContainer$"+Eo,Pc="__reactEvents$"+Eo,B3="__reactListeners$"+Eo,$3="__reactHandles$"+Eo;function ur(e){var t=e[$t];if(t)return t;for(var n=e.parentNode;n;){if(t=n[un]||n[$t]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Jp(e);e!==null;){if(n=e[$t])return n;e=Jp(e)}return t}e=n,n=e.parentNode}return null}function ns(e){return e=e[$t]||e[un],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Fr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(T(33))}function hl(e){return e[_i]||null}var kc=[],Vr=-1;function Kn(e){return{current:e}}function ie(e){0>Vr||(e.current=kc[Vr],kc[Vr]=null,Vr--)}function ne(e,t){Vr++,kc[Vr]=e.current,e.current=t}var Hn={},Oe=Kn(Hn),Xe=Kn(!1),yr=Hn;function uo(e,t){var n=e.type.contextTypes;if(!n)return Hn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Ze(e){return e=e.childContextTypes,e!=null}function Ta(){ie(Xe),ie(Oe)}function eh(e,t,n){if(Oe.current!==Hn)throw Error(T(168));ne(Oe,t),ne(Xe,n)}function Ym(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(T(108,E5(e)||"Unknown",o));return de({},n,r)}function ba(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Hn,yr=Oe.current,ne(Oe,e),ne(Xe,Xe.current),!0}function th(e,t,n){var r=e.stateNode;if(!r)throw Error(T(169));n?(e=Ym(e,t,yr),r.__reactInternalMemoizedMergedChildContext=e,ie(Xe),ie(Oe),ne(Oe,e)):ie(Xe),ne(Xe,n)}var en=null,ml=!1,hu=!1;function Xm(e){en===null?en=[e]:en.push(e)}function G3(e){ml=!0,Xm(e)}function Yn(){if(!hu&&en!==null){hu=!0;var e=0,t=Z;try{var n=en;for(Z=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}en=null,ml=!1}catch(o){throw en!==null&&(en=en.slice(e+1)),Sm($d,Yn),o}finally{Z=t,hu=!1}}return null}var Br=[],$r=0,Ra=null,Aa=0,mt=[],gt=0,xr=null,nn=1,rn="";function tr(e,t){Br[$r++]=Aa,Br[$r++]=Ra,Ra=e,Aa=t}function Zm(e,t,n){mt[gt++]=nn,mt[gt++]=rn,mt[gt++]=xr,xr=e;var r=nn;e=rn;var o=32-Lt(r)-1;r&=~(1<<o),n+=1;var i=32-Lt(t)+o;if(30<i){var s=o-o%5;i=(r&(1<<s)-1).toString(32),r>>=s,o-=s,nn=1<<32-Lt(t)+o|n<<o|r,rn=i+e}else nn=1<<i|n<<o|r,rn=e}function Xd(e){e.return!==null&&(tr(e,1),Zm(e,1,0))}function Zd(e){for(;e===Ra;)Ra=Br[--$r],Br[$r]=null,Aa=Br[--$r],Br[$r]=null;for(;e===xr;)xr=mt[--gt],mt[gt]=null,rn=mt[--gt],mt[gt]=null,nn=mt[--gt],mt[gt]=null}var at=null,it=null,ae=!1,bt=null;function Jm(e,t){var n=xt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function nh(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,at=e,it=Mn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,at=e,it=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=xr!==null?{id:nn,overflow:rn}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=xt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,at=e,it=null,!0):!1;default:return!1}}function Ec(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Tc(e){if(ae){var t=it;if(t){var n=t;if(!nh(e,t)){if(Ec(e))throw Error(T(418));t=Mn(n.nextSibling);var r=at;t&&nh(e,t)?Jm(r,n):(e.flags=e.flags&-4097|2,ae=!1,at=e)}}else{if(Ec(e))throw Error(T(418));e.flags=e.flags&-4097|2,ae=!1,at=e}}}function rh(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;at=e}function Ts(e){if(e!==at)return!1;if(!ae)return rh(e),ae=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Sc(e.type,e.memoizedProps)),t&&(t=it)){if(Ec(e))throw eg(),Error(T(418));for(;t;)Jm(e,t),t=Mn(t.nextSibling)}if(rh(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(T(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){it=Mn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}it=null}}else it=at?Mn(e.stateNode.nextSibling):null;return!0}function eg(){for(var e=it;e;)e=Mn(e.nextSibling)}function co(){it=at=null,ae=!1}function Jd(e){bt===null?bt=[e]:bt.push(e)}var U3=fn.ReactCurrentBatchConfig;function Et(e,t){if(e&&e.defaultProps){t=de({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var _a=Kn(null),La=null,Gr=null,ef=null;function tf(){ef=Gr=La=null}function nf(e){var t=_a.current;ie(_a),e._currentValue=t}function bc(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function to(e,t){La=e,ef=Gr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(qe=!0),e.firstContext=null)}function Ct(e){var t=e._currentValue;if(ef!==e)if(e={context:e,memoizedValue:t,next:null},Gr===null){if(La===null)throw Error(T(308));Gr=e,La.dependencies={lanes:0,firstContext:e}}else Gr=Gr.next=e;return t}var cr=null;function rf(e){cr===null?cr=[e]:cr.push(e)}function tg(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,rf(t)):(n.next=o.next,o.next=n),t.interleaved=n,cn(e,r)}function cn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var xn=!1;function of(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ng(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function sn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function In(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,Q&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,cn(e,n)}return o=r.interleaved,o===null?(t.next=t,rf(r)):(t.next=o.next,o.next=t),r.interleaved=t,cn(e,n)}function Ys(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Gd(e,n)}}function oh(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=s:i=i.next=s,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function za(e,t,n,r){var o=e.updateQueue;xn=!1;var i=o.firstBaseUpdate,s=o.lastBaseUpdate,a=o.shared.pending;if(a!==null){o.shared.pending=null;var l=a,c=l.next;l.next=null,s===null?i=c:s.next=c,s=l;var d=e.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==s&&(a===null?d.firstBaseUpdate=c:a.next=c,d.lastBaseUpdate=l))}if(i!==null){var f=o.baseState;s=0,d=c=l=null,a=i;do{var p=a.lane,m=a.eventTime;if((r&p)===p){d!==null&&(d=d.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=e,x=a;switch(p=t,m=n,x.tag){case 1:if(y=x.payload,typeof y=="function"){f=y.call(m,f,p);break e}f=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=x.payload,p=typeof y=="function"?y.call(m,f,p):y,p==null)break e;f=de({},f,p);break e;case 2:xn=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,p=o.effects,p===null?o.effects=[a]:p.push(a))}else m={eventTime:m,lane:p,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(c=d=m,l=f):d=d.next=m,s|=p;if(a=a.next,a===null){if(a=o.shared.pending,a===null)break;p=a,a=p.next,p.next=null,o.lastBaseUpdate=p,o.shared.pending=null}}while(!0);if(d===null&&(l=f),o.baseState=l,o.firstBaseUpdate=c,o.lastBaseUpdate=d,t=o.shared.interleaved,t!==null){o=t;do s|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);Cr|=s,e.lanes=s,e.memoizedState=f}}function ih(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(T(191,o));o.call(r)}}}var rg=new tm.Component().refs;function Rc(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:de({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var gl={isMounted:function(e){return(e=e._reactInternals)?Er(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=$e(),o=On(e),i=sn(r,o);i.payload=t,n!=null&&(i.callback=n),t=In(e,i,o),t!==null&&(zt(t,e,o,r),Ys(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=$e(),o=On(e),i=sn(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=In(e,i,o),t!==null&&(zt(t,e,o,r),Ys(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=$e(),r=On(e),o=sn(n,r);o.tag=2,t!=null&&(o.callback=t),t=In(e,o,r),t!==null&&(zt(t,e,r,n),Ys(t,e,r))}};function sh(e,t,n,r,o,i,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,s):t.prototype&&t.prototype.isPureReactComponent?!bi(n,r)||!bi(o,i):!0}function og(e,t,n){var r=!1,o=Hn,i=t.contextType;return typeof i=="object"&&i!==null?i=Ct(i):(o=Ze(t)?yr:Oe.current,r=t.contextTypes,i=(r=r!=null)?uo(e,o):Hn),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=gl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function ah(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&gl.enqueueReplaceState(t,t.state,null)}function Ac(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs=rg,of(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=Ct(i):(i=Ze(t)?yr:Oe.current,o.context=uo(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Rc(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&gl.enqueueReplaceState(o,o.state,null),za(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Oo(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(T(309));var r=n.stateNode}if(!r)throw Error(T(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(s){var a=o.refs;a===rg&&(a=o.refs={}),s===null?delete a[i]:a[i]=s},t._stringRef=i,t)}if(typeof e!="string")throw Error(T(284));if(!n._owner)throw Error(T(290,e))}return e}function bs(e,t){throw e=Object.prototype.toString.call(t),Error(T(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function lh(e){var t=e._init;return t(e._payload)}function ig(e){function t(v,h){if(e){var g=v.deletions;g===null?(v.deletions=[h],v.flags|=16):g.push(h)}}function n(v,h){if(!e)return null;for(;h!==null;)t(v,h),h=h.sibling;return null}function r(v,h){for(v=new Map;h!==null;)h.key!==null?v.set(h.key,h):v.set(h.index,h),h=h.sibling;return v}function o(v,h){return v=Nn(v,h),v.index=0,v.sibling=null,v}function i(v,h,g){return v.index=g,e?(g=v.alternate,g!==null?(g=g.index,g<h?(v.flags|=2,h):g):(v.flags|=2,h)):(v.flags|=1048576,h)}function s(v){return e&&v.alternate===null&&(v.flags|=2),v}function a(v,h,g,w){return h===null||h.tag!==6?(h=Cu(g,v.mode,w),h.return=v,h):(h=o(h,g),h.return=v,h)}function l(v,h,g,w){var j=g.type;return j===Ir?d(v,h,g.props.children,w,g.key):h!==null&&(h.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===yn&&lh(j)===h.type)?(w=o(h,g.props),w.ref=Oo(v,h,g),w.return=v,w):(w=na(g.type,g.key,g.props,null,v.mode,w),w.ref=Oo(v,h,g),w.return=v,w)}function c(v,h,g,w){return h===null||h.tag!==4||h.stateNode.containerInfo!==g.containerInfo||h.stateNode.implementation!==g.implementation?(h=Su(g,v.mode,w),h.return=v,h):(h=o(h,g.children||[]),h.return=v,h)}function d(v,h,g,w,j){return h===null||h.tag!==7?(h=mr(g,v.mode,w,j),h.return=v,h):(h=o(h,g),h.return=v,h)}function f(v,h,g){if(typeof h=="string"&&h!==""||typeof h=="number")return h=Cu(""+h,v.mode,g),h.return=v,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case vs:return g=na(h.type,h.key,h.props,null,v.mode,g),g.ref=Oo(v,null,h),g.return=v,g;case Mr:return h=Su(h,v.mode,g),h.return=v,h;case yn:var w=h._init;return f(v,w(h._payload),g)}if(Qo(h)||Lo(h))return h=mr(h,v.mode,g,null),h.return=v,h;bs(v,h)}return null}function p(v,h,g,w){var j=h!==null?h.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return j!==null?null:a(v,h,""+g,w);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case vs:return g.key===j?l(v,h,g,w):null;case Mr:return g.key===j?c(v,h,g,w):null;case yn:return j=g._init,p(v,h,j(g._payload),w)}if(Qo(g)||Lo(g))return j!==null?null:d(v,h,g,w,null);bs(v,g)}return null}function m(v,h,g,w,j){if(typeof w=="string"&&w!==""||typeof w=="number")return v=v.get(g)||null,a(h,v,""+w,j);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case vs:return v=v.get(w.key===null?g:w.key)||null,l(h,v,w,j);case Mr:return v=v.get(w.key===null?g:w.key)||null,c(h,v,w,j);case yn:var P=w._init;return m(v,h,g,P(w._payload),j)}if(Qo(w)||Lo(w))return v=v.get(g)||null,d(h,v,w,j,null);bs(h,w)}return null}function y(v,h,g,w){for(var j=null,P=null,k=h,E=h=0,R=null;k!==null&&E<g.length;E++){k.index>E?(R=k,k=null):R=k.sibling;var _=p(v,k,g[E],w);if(_===null){k===null&&(k=R);break}e&&k&&_.alternate===null&&t(v,k),h=i(_,h,E),P===null?j=_:P.sibling=_,P=_,k=R}if(E===g.length)return n(v,k),ae&&tr(v,E),j;if(k===null){for(;E<g.length;E++)k=f(v,g[E],w),k!==null&&(h=i(k,h,E),P===null?j=k:P.sibling=k,P=k);return ae&&tr(v,E),j}for(k=r(v,k);E<g.length;E++)R=m(k,v,E,g[E],w),R!==null&&(e&&R.alternate!==null&&k.delete(R.key===null?E:R.key),h=i(R,h,E),P===null?j=R:P.sibling=R,P=R);return e&&k.forEach(function(I){return t(v,I)}),ae&&tr(v,E),j}function x(v,h,g,w){var j=Lo(g);if(typeof j!="function")throw Error(T(150));if(g=j.call(g),g==null)throw Error(T(151));for(var P=j=null,k=h,E=h=0,R=null,_=g.next();k!==null&&!_.done;E++,_=g.next()){k.index>E?(R=k,k=null):R=k.sibling;var I=p(v,k,_.value,w);if(I===null){k===null&&(k=R);break}e&&k&&I.alternate===null&&t(v,k),h=i(I,h,E),P===null?j=I:P.sibling=I,P=I,k=R}if(_.done)return n(v,k),ae&&tr(v,E),j;if(k===null){for(;!_.done;E++,_=g.next())_=f(v,_.value,w),_!==null&&(h=i(_,h,E),P===null?j=_:P.sibling=_,P=_);return ae&&tr(v,E),j}for(k=r(v,k);!_.done;E++,_=g.next())_=m(k,v,E,_.value,w),_!==null&&(e&&_.alternate!==null&&k.delete(_.key===null?E:_.key),h=i(_,h,E),P===null?j=_:P.sibling=_,P=_);return e&&k.forEach(function(G){return t(v,G)}),ae&&tr(v,E),j}function S(v,h,g,w){if(typeof g=="object"&&g!==null&&g.type===Ir&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case vs:e:{for(var j=g.key,P=h;P!==null;){if(P.key===j){if(j=g.type,j===Ir){if(P.tag===7){n(v,P.sibling),h=o(P,g.props.children),h.return=v,v=h;break e}}else if(P.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===yn&&lh(j)===P.type){n(v,P.sibling),h=o(P,g.props),h.ref=Oo(v,P,g),h.return=v,v=h;break e}n(v,P);break}else t(v,P);P=P.sibling}g.type===Ir?(h=mr(g.props.children,v.mode,w,g.key),h.return=v,v=h):(w=na(g.type,g.key,g.props,null,v.mode,w),w.ref=Oo(v,h,g),w.return=v,v=w)}return s(v);case Mr:e:{for(P=g.key;h!==null;){if(h.key===P)if(h.tag===4&&h.stateNode.containerInfo===g.containerInfo&&h.stateNode.implementation===g.implementation){n(v,h.sibling),h=o(h,g.children||[]),h.return=v,v=h;break e}else{n(v,h);break}else t(v,h);h=h.sibling}h=Su(g,v.mode,w),h.return=v,v=h}return s(v);case yn:return P=g._init,S(v,h,P(g._payload),w)}if(Qo(g))return y(v,h,g,w);if(Lo(g))return x(v,h,g,w);bs(v,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,h!==null&&h.tag===6?(n(v,h.sibling),h=o(h,g),h.return=v,v=h):(n(v,h),h=Cu(g,v.mode,w),h.return=v,v=h),s(v)):n(v,h)}return S}var fo=ig(!0),sg=ig(!1),rs={},Ut=Kn(rs),Li=Kn(rs),zi=Kn(rs);function dr(e){if(e===rs)throw Error(T(174));return e}function sf(e,t){switch(ne(zi,t),ne(Li,e),ne(Ut,rs),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:lc(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=lc(t,e)}ie(Ut),ne(Ut,t)}function po(){ie(Ut),ie(Li),ie(zi)}function ag(e){dr(zi.current);var t=dr(Ut.current),n=lc(t,e.type);t!==n&&(ne(Li,e),ne(Ut,n))}function af(e){Li.current===e&&(ie(Ut),ie(Li))}var le=Kn(0);function Ma(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var mu=[];function lf(){for(var e=0;e<mu.length;e++)mu[e]._workInProgressVersionPrimary=null;mu.length=0}var Xs=fn.ReactCurrentDispatcher,gu=fn.ReactCurrentBatchConfig,wr=0,ce=null,je=null,Ee=null,Ia=!1,ii=!1,Mi=0,H3=0;function ze(){throw Error(T(321))}function uf(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!It(e[n],t[n]))return!1;return!0}function cf(e,t,n,r,o,i){if(wr=i,ce=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Xs.current=e===null||e.memoizedState===null?K3:Y3,e=n(r,o),ii){i=0;do{if(ii=!1,Mi=0,25<=i)throw Error(T(301));i+=1,Ee=je=null,t.updateQueue=null,Xs.current=X3,e=n(r,o)}while(ii)}if(Xs.current=Da,t=je!==null&&je.next!==null,wr=0,Ee=je=ce=null,Ia=!1,t)throw Error(T(300));return e}function df(){var e=Mi!==0;return Mi=0,e}function Nt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ee===null?ce.memoizedState=Ee=e:Ee=Ee.next=e,Ee}function St(){if(je===null){var e=ce.alternate;e=e!==null?e.memoizedState:null}else e=je.next;var t=Ee===null?ce.memoizedState:Ee.next;if(t!==null)Ee=t,je=e;else{if(e===null)throw Error(T(310));je=e,e={memoizedState:je.memoizedState,baseState:je.baseState,baseQueue:je.baseQueue,queue:je.queue,next:null},Ee===null?ce.memoizedState=Ee=e:Ee=Ee.next=e}return Ee}function Ii(e,t){return typeof t=="function"?t(e):t}function vu(e){var t=St(),n=t.queue;if(n===null)throw Error(T(311));n.lastRenderedReducer=e;var r=je,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var s=o.next;o.next=i.next,i.next=s}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var a=s=null,l=null,c=i;do{var d=c.lane;if((wr&d)===d)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var f={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=f,s=r):l=l.next=f,ce.lanes|=d,Cr|=d}c=c.next}while(c!==null&&c!==i);l===null?s=r:l.next=a,It(r,t.memoizedState)||(qe=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,ce.lanes|=i,Cr|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function yu(e){var t=St(),n=t.queue;if(n===null)throw Error(T(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var s=o=o.next;do i=e(i,s.action),s=s.next;while(s!==o);It(i,t.memoizedState)||(qe=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function lg(){}function ug(e,t){var n=ce,r=St(),o=t(),i=!It(r.memoizedState,o);if(i&&(r.memoizedState=o,qe=!0),r=r.queue,ff(fg.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||Ee!==null&&Ee.memoizedState.tag&1){if(n.flags|=2048,Di(9,dg.bind(null,n,r,o,t),void 0,null),be===null)throw Error(T(349));wr&30||cg(n,t,o)}return o}function cg(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ce.updateQueue,t===null?(t={lastEffect:null,stores:null},ce.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function dg(e,t,n,r){t.value=n,t.getSnapshot=r,pg(t)&&hg(e)}function fg(e,t,n){return n(function(){pg(t)&&hg(e)})}function pg(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!It(e,n)}catch{return!0}}function hg(e){var t=cn(e,1);t!==null&&zt(t,e,1,-1)}function uh(e){var t=Nt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ii,lastRenderedState:e},t.queue=e,e=e.dispatch=q3.bind(null,ce,e),[t.memoizedState,e]}function Di(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ce.updateQueue,t===null?(t={lastEffect:null,stores:null},ce.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function mg(){return St().memoizedState}function Zs(e,t,n,r){var o=Nt();ce.flags|=e,o.memoizedState=Di(1|t,n,void 0,r===void 0?null:r)}function vl(e,t,n,r){var o=St();r=r===void 0?null:r;var i=void 0;if(je!==null){var s=je.memoizedState;if(i=s.destroy,r!==null&&uf(r,s.deps)){o.memoizedState=Di(t,n,i,r);return}}ce.flags|=e,o.memoizedState=Di(1|t,n,i,r)}function ch(e,t){return Zs(8390656,8,e,t)}function ff(e,t){return vl(2048,8,e,t)}function gg(e,t){return vl(4,2,e,t)}function vg(e,t){return vl(4,4,e,t)}function yg(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function xg(e,t,n){return n=n!=null?n.concat([e]):null,vl(4,4,yg.bind(null,t,e),n)}function pf(){}function wg(e,t){var n=St();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&uf(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Cg(e,t){var n=St();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&uf(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Sg(e,t,n){return wr&21?(It(n,t)||(n=km(),ce.lanes|=n,Cr|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,qe=!0),e.memoizedState=n)}function W3(e,t){var n=Z;Z=n!==0&&4>n?n:4,e(!0);var r=gu.transition;gu.transition={};try{e(!1),t()}finally{Z=n,gu.transition=r}}function jg(){return St().memoizedState}function Q3(e,t,n){var r=On(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Pg(e))kg(t,n);else if(n=tg(e,t,n,r),n!==null){var o=$e();zt(n,e,r,o),Eg(n,t,r)}}function q3(e,t,n){var r=On(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Pg(e))kg(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var s=t.lastRenderedState,a=i(s,n);if(o.hasEagerState=!0,o.eagerState=a,It(a,s)){var l=t.interleaved;l===null?(o.next=o,rf(t)):(o.next=l.next,l.next=o),t.interleaved=o;return}}catch{}finally{}n=tg(e,t,o,r),n!==null&&(o=$e(),zt(n,e,r,o),Eg(n,t,r))}}function Pg(e){var t=e.alternate;return e===ce||t!==null&&t===ce}function kg(e,t){ii=Ia=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Eg(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Gd(e,n)}}var Da={readContext:Ct,useCallback:ze,useContext:ze,useEffect:ze,useImperativeHandle:ze,useInsertionEffect:ze,useLayoutEffect:ze,useMemo:ze,useReducer:ze,useRef:ze,useState:ze,useDebugValue:ze,useDeferredValue:ze,useTransition:ze,useMutableSource:ze,useSyncExternalStore:ze,useId:ze,unstable_isNewReconciler:!1},K3={readContext:Ct,useCallback:function(e,t){return Nt().memoizedState=[e,t===void 0?null:t],e},useContext:Ct,useEffect:ch,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Zs(4194308,4,yg.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Zs(4194308,4,e,t)},useInsertionEffect:function(e,t){return Zs(4,2,e,t)},useMemo:function(e,t){var n=Nt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Nt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Q3.bind(null,ce,e),[r.memoizedState,e]},useRef:function(e){var t=Nt();return e={current:e},t.memoizedState=e},useState:uh,useDebugValue:pf,useDeferredValue:function(e){return Nt().memoizedState=e},useTransition:function(){var e=uh(!1),t=e[0];return e=W3.bind(null,e[1]),Nt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ce,o=Nt();if(ae){if(n===void 0)throw Error(T(407));n=n()}else{if(n=t(),be===null)throw Error(T(349));wr&30||cg(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,ch(fg.bind(null,r,i,e),[e]),r.flags|=2048,Di(9,dg.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=Nt(),t=be.identifierPrefix;if(ae){var n=rn,r=nn;n=(r&~(1<<32-Lt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Mi++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=H3++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Y3={readContext:Ct,useCallback:wg,useContext:Ct,useEffect:ff,useImperativeHandle:xg,useInsertionEffect:gg,useLayoutEffect:vg,useMemo:Cg,useReducer:vu,useRef:mg,useState:function(){return vu(Ii)},useDebugValue:pf,useDeferredValue:function(e){var t=St();return Sg(t,je.memoizedState,e)},useTransition:function(){var e=vu(Ii)[0],t=St().memoizedState;return[e,t]},useMutableSource:lg,useSyncExternalStore:ug,useId:jg,unstable_isNewReconciler:!1},X3={readContext:Ct,useCallback:wg,useContext:Ct,useEffect:ff,useImperativeHandle:xg,useInsertionEffect:gg,useLayoutEffect:vg,useMemo:Cg,useReducer:yu,useRef:mg,useState:function(){return yu(Ii)},useDebugValue:pf,useDeferredValue:function(e){var t=St();return je===null?t.memoizedState=e:Sg(t,je.memoizedState,e)},useTransition:function(){var e=yu(Ii)[0],t=St().memoizedState;return[e,t]},useMutableSource:lg,useSyncExternalStore:ug,useId:jg,unstable_isNewReconciler:!1};function ho(e,t){try{var n="",r=t;do n+=k5(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function xu(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function _c(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Z3=typeof WeakMap=="function"?WeakMap:Map;function Tg(e,t,n){n=sn(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Na||(Na=!0,Bc=r),_c(e,t)},n}function bg(e,t,n){n=sn(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){_c(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){_c(e,t),typeof r!="function"&&(Dn===null?Dn=new Set([this]):Dn.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function dh(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Z3;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=f4.bind(null,e,t,n),t.then(e,e))}function fh(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function ph(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=sn(-1,1),t.tag=2,In(n,t,1))),n.lanes|=1),e)}var J3=fn.ReactCurrentOwner,qe=!1;function Be(e,t,n,r){t.child=e===null?sg(t,null,n,r):fo(t,e.child,n,r)}function hh(e,t,n,r,o){n=n.render;var i=t.ref;return to(t,o),r=cf(e,t,n,r,i,o),n=df(),e!==null&&!qe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,dn(e,t,o)):(ae&&n&&Xd(t),t.flags|=1,Be(e,t,r,o),t.child)}function mh(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!Cf(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,Rg(e,t,i,r,o)):(e=na(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var s=i.memoizedProps;if(n=n.compare,n=n!==null?n:bi,n(s,r)&&e.ref===t.ref)return dn(e,t,o)}return t.flags|=1,e=Nn(i,r),e.ref=t.ref,e.return=t,t.child=e}function Rg(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(bi(i,r)&&e.ref===t.ref)if(qe=!1,t.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(qe=!0);else return t.lanes=e.lanes,dn(e,t,o)}return Lc(e,t,n,r,o)}function Ag(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ne(Hr,ot),ot|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ne(Hr,ot),ot|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,ne(Hr,ot),ot|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,ne(Hr,ot),ot|=r;return Be(e,t,o,n),t.child}function _g(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Lc(e,t,n,r,o){var i=Ze(n)?yr:Oe.current;return i=uo(t,i),to(t,o),n=cf(e,t,n,r,i,o),r=df(),e!==null&&!qe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,dn(e,t,o)):(ae&&r&&Xd(t),t.flags|=1,Be(e,t,n,o),t.child)}function gh(e,t,n,r,o){if(Ze(n)){var i=!0;ba(t)}else i=!1;if(to(t,o),t.stateNode===null)Js(e,t),og(t,n,r),Ac(t,n,r,o),r=!0;else if(e===null){var s=t.stateNode,a=t.memoizedProps;s.props=a;var l=s.context,c=n.contextType;typeof c=="object"&&c!==null?c=Ct(c):(c=Ze(n)?yr:Oe.current,c=uo(t,c));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof s.getSnapshotBeforeUpdate=="function";f||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||l!==c)&&ah(t,s,r,c),xn=!1;var p=t.memoizedState;s.state=p,za(t,r,s,o),l=t.memoizedState,a!==r||p!==l||Xe.current||xn?(typeof d=="function"&&(Rc(t,n,d,r),l=t.memoizedState),(a=xn||sh(t,n,a,r,p,l,c))?(f||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),s.props=r,s.state=l,s.context=c,r=a):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,ng(e,t),a=t.memoizedProps,c=t.type===t.elementType?a:Et(t.type,a),s.props=c,f=t.pendingProps,p=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=Ct(l):(l=Ze(n)?yr:Oe.current,l=uo(t,l));var m=n.getDerivedStateFromProps;(d=typeof m=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==f||p!==l)&&ah(t,s,r,l),xn=!1,p=t.memoizedState,s.state=p,za(t,r,s,o);var y=t.memoizedState;a!==f||p!==y||Xe.current||xn?(typeof m=="function"&&(Rc(t,n,m,r),y=t.memoizedState),(c=xn||sh(t,n,c,r,p,y,l)||!1)?(d||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,y,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,y,l)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),s.props=r,s.state=y,s.context=l,r=c):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return zc(e,t,n,r,i,o)}function zc(e,t,n,r,o,i){_g(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return o&&th(t,n,!1),dn(e,t,i);r=t.stateNode,J3.current=t;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=fo(t,e.child,null,i),t.child=fo(t,null,a,i)):Be(e,t,a,i),t.memoizedState=r.state,o&&th(t,n,!0),t.child}function Lg(e){var t=e.stateNode;t.pendingContext?eh(e,t.pendingContext,t.pendingContext!==t.context):t.context&&eh(e,t.context,!1),sf(e,t.containerInfo)}function vh(e,t,n,r,o){return co(),Jd(o),t.flags|=256,Be(e,t,n,r),t.child}var Mc={dehydrated:null,treeContext:null,retryLane:0};function Ic(e){return{baseLanes:e,cachePool:null,transitions:null}}function zg(e,t,n){var r=t.pendingProps,o=le.current,i=!1,s=(t.flags&128)!==0,a;if((a=s)||(a=e!==null&&e.memoizedState===null?!1:(o&2)!==0),a?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),ne(le,o&1),e===null)return Tc(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,i?(r=t.mode,i=t.child,s={mode:"hidden",children:s},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=s):i=wl(s,r,0,null),e=mr(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Ic(n),t.memoizedState=Mc,e):hf(t,s));if(o=e.memoizedState,o!==null&&(a=o.dehydrated,a!==null))return e4(e,t,s,r,a,o,n);if(i){i=r.fallback,s=t.mode,o=e.child,a=o.sibling;var l={mode:"hidden",children:r.children};return!(s&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=Nn(o,l),r.subtreeFlags=o.subtreeFlags&14680064),a!==null?i=Nn(a,i):(i=mr(i,s,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,s=e.child.memoizedState,s=s===null?Ic(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},i.memoizedState=s,i.childLanes=e.childLanes&~n,t.memoizedState=Mc,r}return i=e.child,e=i.sibling,r=Nn(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function hf(e,t){return t=wl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Rs(e,t,n,r){return r!==null&&Jd(r),fo(t,e.child,null,n),e=hf(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function e4(e,t,n,r,o,i,s){if(n)return t.flags&256?(t.flags&=-257,r=xu(Error(T(422))),Rs(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=wl({mode:"visible",children:r.children},o,0,null),i=mr(i,o,s,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&fo(t,e.child,null,s),t.child.memoizedState=Ic(s),t.memoizedState=Mc,i);if(!(t.mode&1))return Rs(e,t,s,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var a=r.dgst;return r=a,i=Error(T(419)),r=xu(i,r,void 0),Rs(e,t,s,r)}if(a=(s&e.childLanes)!==0,qe||a){if(r=be,r!==null){switch(s&-s){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|s)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,cn(e,o),zt(r,e,o,-1))}return wf(),r=xu(Error(T(421))),Rs(e,t,s,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=p4.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,it=Mn(o.nextSibling),at=t,ae=!0,bt=null,e!==null&&(mt[gt++]=nn,mt[gt++]=rn,mt[gt++]=xr,nn=e.id,rn=e.overflow,xr=t),t=hf(t,r.children),t.flags|=4096,t)}function yh(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),bc(e.return,t,n)}function wu(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function Mg(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(Be(e,t,r.children,n),r=le.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&yh(e,n,t);else if(e.tag===19)yh(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ne(le,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&Ma(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),wu(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&Ma(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}wu(t,!0,n,null,i);break;case"together":wu(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Js(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function dn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Cr|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(T(153));if(t.child!==null){for(e=t.child,n=Nn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Nn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function t4(e,t,n){switch(t.tag){case 3:Lg(t),co();break;case 5:ag(t);break;case 1:Ze(t.type)&&ba(t);break;case 4:sf(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;ne(_a,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ne(le,le.current&1),t.flags|=128,null):n&t.child.childLanes?zg(e,t,n):(ne(le,le.current&1),e=dn(e,t,n),e!==null?e.sibling:null);ne(le,le.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Mg(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),ne(le,le.current),r)break;return null;case 22:case 23:return t.lanes=0,Ag(e,t,n)}return dn(e,t,n)}var Ig,Dc,Dg,Og;Ig=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Dc=function(){};Dg=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,dr(Ut.current);var i=null;switch(n){case"input":o=oc(e,o),r=oc(e,r),i=[];break;case"select":o=de({},o,{value:void 0}),r=de({},r,{value:void 0}),i=[];break;case"textarea":o=ac(e,o),r=ac(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Ea)}uc(n,r);var s;n=null;for(c in o)if(!r.hasOwnProperty(c)&&o.hasOwnProperty(c)&&o[c]!=null)if(c==="style"){var a=o[c];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Ci.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in r){var l=r[c];if(a=o!=null?o[c]:void 0,r.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(i||(i=[]),i.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(i=i||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(i=i||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Ci.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&re("scroll",e),i||a===l||(i=[])):(i=i||[]).push(c,l))}n&&(i=i||[]).push("style",n);var c=i;(t.updateQueue=c)&&(t.flags|=4)}};Og=function(e,t,n,r){n!==r&&(t.flags|=4)};function No(e,t){if(!ae)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Me(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function n4(e,t,n){var r=t.pendingProps;switch(Zd(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Me(t),null;case 1:return Ze(t.type)&&Ta(),Me(t),null;case 3:return r=t.stateNode,po(),ie(Xe),ie(Oe),lf(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Ts(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,bt!==null&&(Uc(bt),bt=null))),Dc(e,t),Me(t),null;case 5:af(t);var o=dr(zi.current);if(n=t.type,e!==null&&t.stateNode!=null)Dg(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(T(166));return Me(t),null}if(e=dr(Ut.current),Ts(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[$t]=t,r[_i]=i,e=(t.mode&1)!==0,n){case"dialog":re("cancel",r),re("close",r);break;case"iframe":case"object":case"embed":re("load",r);break;case"video":case"audio":for(o=0;o<Ko.length;o++)re(Ko[o],r);break;case"source":re("error",r);break;case"img":case"image":case"link":re("error",r),re("load",r);break;case"details":re("toggle",r);break;case"input":Tp(r,i),re("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},re("invalid",r);break;case"textarea":Rp(r,i),re("invalid",r)}uc(n,i),o=null;for(var s in i)if(i.hasOwnProperty(s)){var a=i[s];s==="children"?typeof a=="string"?r.textContent!==a&&(i.suppressHydrationWarning!==!0&&Es(r.textContent,a,e),o=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(i.suppressHydrationWarning!==!0&&Es(r.textContent,a,e),o=["children",""+a]):Ci.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&re("scroll",r)}switch(n){case"input":ys(r),bp(r,i,!0);break;case"textarea":ys(r),Ap(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Ea)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=cm(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[$t]=t,e[_i]=r,Ig(e,t,!1,!1),t.stateNode=e;e:{switch(s=cc(n,r),n){case"dialog":re("cancel",e),re("close",e),o=r;break;case"iframe":case"object":case"embed":re("load",e),o=r;break;case"video":case"audio":for(o=0;o<Ko.length;o++)re(Ko[o],e);o=r;break;case"source":re("error",e),o=r;break;case"img":case"image":case"link":re("error",e),re("load",e),o=r;break;case"details":re("toggle",e),o=r;break;case"input":Tp(e,r),o=oc(e,r),re("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=de({},r,{value:void 0}),re("invalid",e);break;case"textarea":Rp(e,r),o=ac(e,r),re("invalid",e);break;default:o=r}uc(n,o),a=o;for(i in a)if(a.hasOwnProperty(i)){var l=a[i];i==="style"?pm(e,l):i==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&dm(e,l)):i==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Si(e,l):typeof l=="number"&&Si(e,""+l):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Ci.hasOwnProperty(i)?l!=null&&i==="onScroll"&&re("scroll",e):l!=null&&Od(e,i,l,s))}switch(n){case"input":ys(e),bp(e,r,!1);break;case"textarea":ys(e),Ap(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Un(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Xr(e,!!r.multiple,i,!1):r.defaultValue!=null&&Xr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Ea)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Me(t),null;case 6:if(e&&t.stateNode!=null)Og(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(T(166));if(n=dr(zi.current),dr(Ut.current),Ts(t)){if(r=t.stateNode,n=t.memoizedProps,r[$t]=t,(i=r.nodeValue!==n)&&(e=at,e!==null))switch(e.tag){case 3:Es(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Es(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[$t]=t,t.stateNode=r}return Me(t),null;case 13:if(ie(le),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ae&&it!==null&&t.mode&1&&!(t.flags&128))eg(),co(),t.flags|=98560,i=!1;else if(i=Ts(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(T(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(T(317));i[$t]=t}else co(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Me(t),i=!1}else bt!==null&&(Uc(bt),bt=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||le.current&1?Pe===0&&(Pe=3):wf())),t.updateQueue!==null&&(t.flags|=4),Me(t),null);case 4:return po(),Dc(e,t),e===null&&Ri(t.stateNode.containerInfo),Me(t),null;case 10:return nf(t.type._context),Me(t),null;case 17:return Ze(t.type)&&Ta(),Me(t),null;case 19:if(ie(le),i=t.memoizedState,i===null)return Me(t),null;if(r=(t.flags&128)!==0,s=i.rendering,s===null)if(r)No(i,!1);else{if(Pe!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=Ma(e),s!==null){for(t.flags|=128,No(i,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,s=i.alternate,s===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=s.childLanes,i.lanes=s.lanes,i.child=s.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=s.memoizedProps,i.memoizedState=s.memoizedState,i.updateQueue=s.updateQueue,i.type=s.type,e=s.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ne(le,le.current&1|2),t.child}e=e.sibling}i.tail!==null&&me()>mo&&(t.flags|=128,r=!0,No(i,!1),t.lanes=4194304)}else{if(!r)if(e=Ma(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),No(i,!0),i.tail===null&&i.tailMode==="hidden"&&!s.alternate&&!ae)return Me(t),null}else 2*me()-i.renderingStartTime>mo&&n!==1073741824&&(t.flags|=128,r=!0,No(i,!1),t.lanes=4194304);i.isBackwards?(s.sibling=t.child,t.child=s):(n=i.last,n!==null?n.sibling=s:t.child=s,i.last=s)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=me(),t.sibling=null,n=le.current,ne(le,r?n&1|2:n&1),t):(Me(t),null);case 22:case 23:return xf(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?ot&1073741824&&(Me(t),t.subtreeFlags&6&&(t.flags|=8192)):Me(t),null;case 24:return null;case 25:return null}throw Error(T(156,t.tag))}function r4(e,t){switch(Zd(t),t.tag){case 1:return Ze(t.type)&&Ta(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return po(),ie(Xe),ie(Oe),lf(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return af(t),null;case 13:if(ie(le),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(T(340));co()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ie(le),null;case 4:return po(),null;case 10:return nf(t.type._context),null;case 22:case 23:return xf(),null;case 24:return null;default:return null}}var As=!1,Ie=!1,o4=typeof WeakSet=="function"?WeakSet:Set,L=null;function Ur(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){fe(e,t,r)}else n.current=null}function Oc(e,t,n){try{n()}catch(r){fe(e,t,r)}}var xh=!1;function i4(e,t){if(wc=ja,e=Bm(),Yd(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,c=0,d=0,f=e,p=null;t:for(;;){for(var m;f!==n||o!==0&&f.nodeType!==3||(a=s+o),f!==i||r!==0&&f.nodeType!==3||(l=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break t;if(p===n&&++c===o&&(a=s),p===i&&++d===r&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Cc={focusedElem:e,selectionRange:n},ja=!1,L=t;L!==null;)if(t=L,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,L=e;else for(;L!==null;){t=L;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var x=y.memoizedProps,S=y.memoizedState,v=t.stateNode,h=v.getSnapshotBeforeUpdate(t.elementType===t.type?x:Et(t.type,x),S);v.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var g=t.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(T(163))}}catch(w){fe(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,L=e;break}L=t.return}return y=xh,xh=!1,y}function si(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&Oc(t,n,i)}o=o.next}while(o!==r)}}function yl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Nc(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Ng(e){var t=e.alternate;t!==null&&(e.alternate=null,Ng(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[$t],delete t[_i],delete t[Pc],delete t[B3],delete t[$3])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Fg(e){return e.tag===5||e.tag===3||e.tag===4}function wh(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Fg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Fc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ea));else if(r!==4&&(e=e.child,e!==null))for(Fc(e,t,n),e=e.sibling;e!==null;)Fc(e,t,n),e=e.sibling}function Vc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Vc(e,t,n),e=e.sibling;e!==null;)Vc(e,t,n),e=e.sibling}var Re=null,Tt=!1;function pn(e,t,n){for(n=n.child;n!==null;)Vg(e,t,n),n=n.sibling}function Vg(e,t,n){if(Gt&&typeof Gt.onCommitFiberUnmount=="function")try{Gt.onCommitFiberUnmount(cl,n)}catch{}switch(n.tag){case 5:Ie||Ur(n,t);case 6:var r=Re,o=Tt;Re=null,pn(e,t,n),Re=r,Tt=o,Re!==null&&(Tt?(e=Re,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Re.removeChild(n.stateNode));break;case 18:Re!==null&&(Tt?(e=Re,n=n.stateNode,e.nodeType===8?pu(e.parentNode,n):e.nodeType===1&&pu(e,n),Ei(e)):pu(Re,n.stateNode));break;case 4:r=Re,o=Tt,Re=n.stateNode.containerInfo,Tt=!0,pn(e,t,n),Re=r,Tt=o;break;case 0:case 11:case 14:case 15:if(!Ie&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,s=i.destroy;i=i.tag,s!==void 0&&(i&2||i&4)&&Oc(n,t,s),o=o.next}while(o!==r)}pn(e,t,n);break;case 1:if(!Ie&&(Ur(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){fe(n,t,a)}pn(e,t,n);break;case 21:pn(e,t,n);break;case 22:n.mode&1?(Ie=(r=Ie)||n.memoizedState!==null,pn(e,t,n),Ie=r):pn(e,t,n);break;default:pn(e,t,n)}}function Ch(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new o4),t.forEach(function(r){var o=h4.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function kt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,s=t,a=s;e:for(;a!==null;){switch(a.tag){case 5:Re=a.stateNode,Tt=!1;break e;case 3:Re=a.stateNode.containerInfo,Tt=!0;break e;case 4:Re=a.stateNode.containerInfo,Tt=!0;break e}a=a.return}if(Re===null)throw Error(T(160));Vg(i,s,o),Re=null,Tt=!1;var l=o.alternate;l!==null&&(l.return=null),o.return=null}catch(c){fe(o,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Bg(t,e),t=t.sibling}function Bg(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(kt(t,e),Ot(e),r&4){try{si(3,e,e.return),yl(3,e)}catch(x){fe(e,e.return,x)}try{si(5,e,e.return)}catch(x){fe(e,e.return,x)}}break;case 1:kt(t,e),Ot(e),r&512&&n!==null&&Ur(n,n.return);break;case 5:if(kt(t,e),Ot(e),r&512&&n!==null&&Ur(n,n.return),e.flags&32){var o=e.stateNode;try{Si(o,"")}catch(x){fe(e,e.return,x)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,s=n!==null?n.memoizedProps:i,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&i.type==="radio"&&i.name!=null&&lm(o,i),cc(a,s);var c=cc(a,i);for(s=0;s<l.length;s+=2){var d=l[s],f=l[s+1];d==="style"?pm(o,f):d==="dangerouslySetInnerHTML"?dm(o,f):d==="children"?Si(o,f):Od(o,d,f,c)}switch(a){case"input":ic(o,i);break;case"textarea":um(o,i);break;case"select":var p=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var m=i.value;m!=null?Xr(o,!!i.multiple,m,!1):p!==!!i.multiple&&(i.defaultValue!=null?Xr(o,!!i.multiple,i.defaultValue,!0):Xr(o,!!i.multiple,i.multiple?[]:"",!1))}o[_i]=i}catch(x){fe(e,e.return,x)}}break;case 6:if(kt(t,e),Ot(e),r&4){if(e.stateNode===null)throw Error(T(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(x){fe(e,e.return,x)}}break;case 3:if(kt(t,e),Ot(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ei(t.containerInfo)}catch(x){fe(e,e.return,x)}break;case 4:kt(t,e),Ot(e);break;case 13:kt(t,e),Ot(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(vf=me())),r&4&&Ch(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(Ie=(c=Ie)||d,kt(t,e),Ie=c):kt(t,e),Ot(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!d&&e.mode&1)for(L=e,d=e.child;d!==null;){for(f=L=d;L!==null;){switch(p=L,m=p.child,p.tag){case 0:case 11:case 14:case 15:si(4,p,p.return);break;case 1:Ur(p,p.return);var y=p.stateNode;if(typeof y.componentWillUnmount=="function"){r=p,n=p.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(x){fe(r,n,x)}}break;case 5:Ur(p,p.return);break;case 22:if(p.memoizedState!==null){jh(f);continue}}m!==null?(m.return=p,L=m):jh(f)}d=d.sibling}e:for(d=null,f=e;;){if(f.tag===5){if(d===null){d=f;try{o=f.stateNode,c?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(a=f.stateNode,l=f.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=fm("display",s))}catch(x){fe(e,e.return,x)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(x){fe(e,e.return,x)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:kt(t,e),Ot(e),r&4&&Ch(e);break;case 21:break;default:kt(t,e),Ot(e)}}function Ot(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Fg(n)){var r=n;break e}n=n.return}throw Error(T(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(Si(o,""),r.flags&=-33);var i=wh(e);Vc(e,i,o);break;case 3:case 4:var s=r.stateNode.containerInfo,a=wh(e);Fc(e,a,s);break;default:throw Error(T(161))}}catch(l){fe(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function s4(e,t,n){L=e,$g(e)}function $g(e,t,n){for(var r=(e.mode&1)!==0;L!==null;){var o=L,i=o.child;if(o.tag===22&&r){var s=o.memoizedState!==null||As;if(!s){var a=o.alternate,l=a!==null&&a.memoizedState!==null||Ie;a=As;var c=Ie;if(As=s,(Ie=l)&&!c)for(L=o;L!==null;)s=L,l=s.child,s.tag===22&&s.memoizedState!==null?Ph(o):l!==null?(l.return=s,L=l):Ph(o);for(;i!==null;)L=i,$g(i),i=i.sibling;L=o,As=a,Ie=c}Sh(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,L=i):Sh(e)}}function Sh(e){for(;L!==null;){var t=L;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Ie||yl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ie)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:Et(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&ih(t,i,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}ih(t,s,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&Ei(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(T(163))}Ie||t.flags&512&&Nc(t)}catch(p){fe(t,t.return,p)}}if(t===e){L=null;break}if(n=t.sibling,n!==null){n.return=t.return,L=n;break}L=t.return}}function jh(e){for(;L!==null;){var t=L;if(t===e){L=null;break}var n=t.sibling;if(n!==null){n.return=t.return,L=n;break}L=t.return}}function Ph(e){for(;L!==null;){var t=L;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{yl(4,t)}catch(l){fe(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(l){fe(t,o,l)}}var i=t.return;try{Nc(t)}catch(l){fe(t,i,l)}break;case 5:var s=t.return;try{Nc(t)}catch(l){fe(t,s,l)}}}catch(l){fe(t,t.return,l)}if(t===e){L=null;break}var a=t.sibling;if(a!==null){a.return=t.return,L=a;break}L=t.return}}var a4=Math.ceil,Oa=fn.ReactCurrentDispatcher,mf=fn.ReactCurrentOwner,wt=fn.ReactCurrentBatchConfig,Q=0,be=null,we=null,Ae=0,ot=0,Hr=Kn(0),Pe=0,Oi=null,Cr=0,xl=0,gf=0,ai=null,Qe=null,vf=0,mo=1/0,Xt=null,Na=!1,Bc=null,Dn=null,_s=!1,Pn=null,Fa=0,li=0,$c=null,ea=-1,ta=0;function $e(){return Q&6?me():ea!==-1?ea:ea=me()}function On(e){return e.mode&1?Q&2&&Ae!==0?Ae&-Ae:U3.transition!==null?(ta===0&&(ta=km()),ta):(e=Z,e!==0||(e=window.event,e=e===void 0?16:Lm(e.type)),e):1}function zt(e,t,n,r){if(50<li)throw li=0,$c=null,Error(T(185));es(e,n,r),(!(Q&2)||e!==be)&&(e===be&&(!(Q&2)&&(xl|=n),Pe===4&&Sn(e,Ae)),Je(e,r),n===1&&Q===0&&!(t.mode&1)&&(mo=me()+500,ml&&Yn()))}function Je(e,t){var n=e.callbackNode;U5(e,t);var r=Sa(e,e===be?Ae:0);if(r===0)n!==null&&zp(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&zp(n),t===1)e.tag===0?G3(kh.bind(null,e)):Xm(kh.bind(null,e)),F3(function(){!(Q&6)&&Yn()}),n=null;else{switch(Em(r)){case 1:n=$d;break;case 4:n=jm;break;case 16:n=Ca;break;case 536870912:n=Pm;break;default:n=Ca}n=Yg(n,Gg.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Gg(e,t){if(ea=-1,ta=0,Q&6)throw Error(T(327));var n=e.callbackNode;if(no()&&e.callbackNode!==n)return null;var r=Sa(e,e===be?Ae:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Va(e,r);else{t=r;var o=Q;Q|=2;var i=Hg();(be!==e||Ae!==t)&&(Xt=null,mo=me()+500,hr(e,t));do try{c4();break}catch(a){Ug(e,a)}while(!0);tf(),Oa.current=i,Q=o,we!==null?t=0:(be=null,Ae=0,t=Pe)}if(t!==0){if(t===2&&(o=mc(e),o!==0&&(r=o,t=Gc(e,o))),t===1)throw n=Oi,hr(e,0),Sn(e,r),Je(e,me()),n;if(t===6)Sn(e,r);else{if(o=e.current.alternate,!(r&30)&&!l4(o)&&(t=Va(e,r),t===2&&(i=mc(e),i!==0&&(r=i,t=Gc(e,i))),t===1))throw n=Oi,hr(e,0),Sn(e,r),Je(e,me()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(T(345));case 2:nr(e,Qe,Xt);break;case 3:if(Sn(e,r),(r&130023424)===r&&(t=vf+500-me(),10<t)){if(Sa(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){$e(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=jc(nr.bind(null,e,Qe,Xt),t);break}nr(e,Qe,Xt);break;case 4:if(Sn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var s=31-Lt(r);i=1<<s,s=t[s],s>o&&(o=s),r&=~i}if(r=o,r=me()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*a4(r/1960))-r,10<r){e.timeoutHandle=jc(nr.bind(null,e,Qe,Xt),r);break}nr(e,Qe,Xt);break;case 5:nr(e,Qe,Xt);break;default:throw Error(T(329))}}}return Je(e,me()),e.callbackNode===n?Gg.bind(null,e):null}function Gc(e,t){var n=ai;return e.current.memoizedState.isDehydrated&&(hr(e,t).flags|=256),e=Va(e,t),e!==2&&(t=Qe,Qe=n,t!==null&&Uc(t)),e}function Uc(e){Qe===null?Qe=e:Qe.push.apply(Qe,e)}function l4(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!It(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Sn(e,t){for(t&=~gf,t&=~xl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Lt(t),r=1<<n;e[n]=-1,t&=~r}}function kh(e){if(Q&6)throw Error(T(327));no();var t=Sa(e,0);if(!(t&1))return Je(e,me()),null;var n=Va(e,t);if(e.tag!==0&&n===2){var r=mc(e);r!==0&&(t=r,n=Gc(e,r))}if(n===1)throw n=Oi,hr(e,0),Sn(e,t),Je(e,me()),n;if(n===6)throw Error(T(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,nr(e,Qe,Xt),Je(e,me()),null}function yf(e,t){var n=Q;Q|=1;try{return e(t)}finally{Q=n,Q===0&&(mo=me()+500,ml&&Yn())}}function Sr(e){Pn!==null&&Pn.tag===0&&!(Q&6)&&no();var t=Q;Q|=1;var n=wt.transition,r=Z;try{if(wt.transition=null,Z=1,e)return e()}finally{Z=r,wt.transition=n,Q=t,!(Q&6)&&Yn()}}function xf(){ot=Hr.current,ie(Hr)}function hr(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,N3(n)),we!==null)for(n=we.return;n!==null;){var r=n;switch(Zd(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ta();break;case 3:po(),ie(Xe),ie(Oe),lf();break;case 5:af(r);break;case 4:po();break;case 13:ie(le);break;case 19:ie(le);break;case 10:nf(r.type._context);break;case 22:case 23:xf()}n=n.return}if(be=e,we=e=Nn(e.current,null),Ae=ot=t,Pe=0,Oi=null,gf=xl=Cr=0,Qe=ai=null,cr!==null){for(t=0;t<cr.length;t++)if(n=cr[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var s=i.next;i.next=o,r.next=s}n.pending=r}cr=null}return e}function Ug(e,t){do{var n=we;try{if(tf(),Xs.current=Da,Ia){for(var r=ce.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}Ia=!1}if(wr=0,Ee=je=ce=null,ii=!1,Mi=0,mf.current=null,n===null||n.return===null){Pe=1,Oi=t,we=null;break}e:{var i=e,s=n.return,a=n,l=t;if(t=Ae,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,d=a,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var p=d.alternate;p?(d.updateQueue=p.updateQueue,d.memoizedState=p.memoizedState,d.lanes=p.lanes):(d.updateQueue=null,d.memoizedState=null)}var m=fh(s);if(m!==null){m.flags&=-257,ph(m,s,a,i,t),m.mode&1&&dh(i,c,t),t=m,l=c;var y=t.updateQueue;if(y===null){var x=new Set;x.add(l),t.updateQueue=x}else y.add(l);break e}else{if(!(t&1)){dh(i,c,t),wf();break e}l=Error(T(426))}}else if(ae&&a.mode&1){var S=fh(s);if(S!==null){!(S.flags&65536)&&(S.flags|=256),ph(S,s,a,i,t),Jd(ho(l,a));break e}}i=l=ho(l,a),Pe!==4&&(Pe=2),ai===null?ai=[i]:ai.push(i),i=s;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var v=Tg(i,l,t);oh(i,v);break e;case 1:a=l;var h=i.type,g=i.stateNode;if(!(i.flags&128)&&(typeof h.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Dn===null||!Dn.has(g)))){i.flags|=65536,t&=-t,i.lanes|=t;var w=bg(i,a,t);oh(i,w);break e}}i=i.return}while(i!==null)}Qg(n)}catch(j){t=j,we===n&&n!==null&&(we=n=n.return);continue}break}while(!0)}function Hg(){var e=Oa.current;return Oa.current=Da,e===null?Da:e}function wf(){(Pe===0||Pe===3||Pe===2)&&(Pe=4),be===null||!(Cr&268435455)&&!(xl&268435455)||Sn(be,Ae)}function Va(e,t){var n=Q;Q|=2;var r=Hg();(be!==e||Ae!==t)&&(Xt=null,hr(e,t));do try{u4();break}catch(o){Ug(e,o)}while(!0);if(tf(),Q=n,Oa.current=r,we!==null)throw Error(T(261));return be=null,Ae=0,Pe}function u4(){for(;we!==null;)Wg(we)}function c4(){for(;we!==null&&!I5();)Wg(we)}function Wg(e){var t=Kg(e.alternate,e,ot);e.memoizedProps=e.pendingProps,t===null?Qg(e):we=t,mf.current=null}function Qg(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=r4(n,t),n!==null){n.flags&=32767,we=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Pe=6,we=null;return}}else if(n=n4(n,t,ot),n!==null){we=n;return}if(t=t.sibling,t!==null){we=t;return}we=t=e}while(t!==null);Pe===0&&(Pe=5)}function nr(e,t,n){var r=Z,o=wt.transition;try{wt.transition=null,Z=1,d4(e,t,n,r)}finally{wt.transition=o,Z=r}return null}function d4(e,t,n,r){do no();while(Pn!==null);if(Q&6)throw Error(T(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(T(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(H5(e,i),e===be&&(we=be=null,Ae=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||_s||(_s=!0,Yg(Ca,function(){return no(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=wt.transition,wt.transition=null;var s=Z;Z=1;var a=Q;Q|=4,mf.current=null,i4(e,n),Bg(n,e),_3(Cc),ja=!!wc,Cc=wc=null,e.current=n,s4(n),D5(),Q=a,Z=s,wt.transition=i}else e.current=n;if(_s&&(_s=!1,Pn=e,Fa=o),i=e.pendingLanes,i===0&&(Dn=null),F5(n.stateNode),Je(e,me()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(Na)throw Na=!1,e=Bc,Bc=null,e;return Fa&1&&e.tag!==0&&no(),i=e.pendingLanes,i&1?e===$c?li++:(li=0,$c=e):li=0,Yn(),null}function no(){if(Pn!==null){var e=Em(Fa),t=wt.transition,n=Z;try{if(wt.transition=null,Z=16>e?16:e,Pn===null)var r=!1;else{if(e=Pn,Pn=null,Fa=0,Q&6)throw Error(T(331));var o=Q;for(Q|=4,L=e.current;L!==null;){var i=L,s=i.child;if(L.flags&16){var a=i.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(L=c;L!==null;){var d=L;switch(d.tag){case 0:case 11:case 15:si(8,d,i)}var f=d.child;if(f!==null)f.return=d,L=f;else for(;L!==null;){d=L;var p=d.sibling,m=d.return;if(Ng(d),d===c){L=null;break}if(p!==null){p.return=m,L=p;break}L=m}}}var y=i.alternate;if(y!==null){var x=y.child;if(x!==null){y.child=null;do{var S=x.sibling;x.sibling=null,x=S}while(x!==null)}}L=i}}if(i.subtreeFlags&2064&&s!==null)s.return=i,L=s;else e:for(;L!==null;){if(i=L,i.flags&2048)switch(i.tag){case 0:case 11:case 15:si(9,i,i.return)}var v=i.sibling;if(v!==null){v.return=i.return,L=v;break e}L=i.return}}var h=e.current;for(L=h;L!==null;){s=L;var g=s.child;if(s.subtreeFlags&2064&&g!==null)g.return=s,L=g;else e:for(s=h;L!==null;){if(a=L,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:yl(9,a)}}catch(j){fe(a,a.return,j)}if(a===s){L=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,L=w;break e}L=a.return}}if(Q=o,Yn(),Gt&&typeof Gt.onPostCommitFiberRoot=="function")try{Gt.onPostCommitFiberRoot(cl,e)}catch{}r=!0}return r}finally{Z=n,wt.transition=t}}return!1}function Eh(e,t,n){t=ho(n,t),t=Tg(e,t,1),e=In(e,t,1),t=$e(),e!==null&&(es(e,1,t),Je(e,t))}function fe(e,t,n){if(e.tag===3)Eh(e,e,n);else for(;t!==null;){if(t.tag===3){Eh(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Dn===null||!Dn.has(r))){e=ho(n,e),e=bg(t,e,1),t=In(t,e,1),e=$e(),t!==null&&(es(t,1,e),Je(t,e));break}}t=t.return}}function f4(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=$e(),e.pingedLanes|=e.suspendedLanes&n,be===e&&(Ae&n)===n&&(Pe===4||Pe===3&&(Ae&130023424)===Ae&&500>me()-vf?hr(e,0):gf|=n),Je(e,t)}function qg(e,t){t===0&&(e.mode&1?(t=Cs,Cs<<=1,!(Cs&130023424)&&(Cs=4194304)):t=1);var n=$e();e=cn(e,t),e!==null&&(es(e,t,n),Je(e,n))}function p4(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),qg(e,n)}function h4(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(T(314))}r!==null&&r.delete(t),qg(e,n)}var Kg;Kg=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Xe.current)qe=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return qe=!1,t4(e,t,n);qe=!!(e.flags&131072)}else qe=!1,ae&&t.flags&1048576&&Zm(t,Aa,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Js(e,t),e=t.pendingProps;var o=uo(t,Oe.current);to(t,n),o=cf(null,t,r,e,o,n);var i=df();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ze(r)?(i=!0,ba(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,of(t),o.updater=gl,t.stateNode=o,o._reactInternals=t,Ac(t,r,e,n),t=zc(null,t,r,!0,i,n)):(t.tag=0,ae&&i&&Xd(t),Be(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Js(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=g4(r),e=Et(r,e),o){case 0:t=Lc(null,t,r,e,n);break e;case 1:t=gh(null,t,r,e,n);break e;case 11:t=hh(null,t,r,e,n);break e;case 14:t=mh(null,t,r,Et(r.type,e),n);break e}throw Error(T(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Et(r,o),Lc(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Et(r,o),gh(e,t,r,o,n);case 3:e:{if(Lg(t),e===null)throw Error(T(387));r=t.pendingProps,i=t.memoizedState,o=i.element,ng(e,t),za(t,r,null,n);var s=t.memoizedState;if(r=s.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=ho(Error(T(423)),t),t=vh(e,t,r,n,o);break e}else if(r!==o){o=ho(Error(T(424)),t),t=vh(e,t,r,n,o);break e}else for(it=Mn(t.stateNode.containerInfo.firstChild),at=t,ae=!0,bt=null,n=sg(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(co(),r===o){t=dn(e,t,n);break e}Be(e,t,r,n)}t=t.child}return t;case 5:return ag(t),e===null&&Tc(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,s=o.children,Sc(r,o)?s=null:i!==null&&Sc(r,i)&&(t.flags|=32),_g(e,t),Be(e,t,s,n),t.child;case 6:return e===null&&Tc(t),null;case 13:return zg(e,t,n);case 4:return sf(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=fo(t,null,r,n):Be(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Et(r,o),hh(e,t,r,o,n);case 7:return Be(e,t,t.pendingProps,n),t.child;case 8:return Be(e,t,t.pendingProps.children,n),t.child;case 12:return Be(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,s=o.value,ne(_a,r._currentValue),r._currentValue=s,i!==null)if(It(i.value,s)){if(i.children===o.children&&!Xe.current){t=dn(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var a=i.dependencies;if(a!==null){s=i.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(i.tag===1){l=sn(-1,n&-n),l.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?l.next=l:(l.next=d.next,d.next=l),c.pending=l}}i.lanes|=n,l=i.alternate,l!==null&&(l.lanes|=n),bc(i.return,n,t),a.lanes|=n;break}l=l.next}}else if(i.tag===10)s=i.type===t.type?null:i.child;else if(i.tag===18){if(s=i.return,s===null)throw Error(T(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),bc(s,n,t),s=i.sibling}else s=i.child;if(s!==null)s.return=i;else for(s=i;s!==null;){if(s===t){s=null;break}if(i=s.sibling,i!==null){i.return=s.return,s=i;break}s=s.return}i=s}Be(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,to(t,n),o=Ct(o),r=r(o),t.flags|=1,Be(e,t,r,n),t.child;case 14:return r=t.type,o=Et(r,t.pendingProps),o=Et(r.type,o),mh(e,t,r,o,n);case 15:return Rg(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Et(r,o),Js(e,t),t.tag=1,Ze(r)?(e=!0,ba(t)):e=!1,to(t,n),og(t,r,o),Ac(t,r,o,n),zc(null,t,r,!0,e,n);case 19:return Mg(e,t,n);case 22:return Ag(e,t,n)}throw Error(T(156,t.tag))};function Yg(e,t){return Sm(e,t)}function m4(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function xt(e,t,n,r){return new m4(e,t,n,r)}function Cf(e){return e=e.prototype,!(!e||!e.isReactComponent)}function g4(e){if(typeof e=="function")return Cf(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Fd)return 11;if(e===Vd)return 14}return 2}function Nn(e,t){var n=e.alternate;return n===null?(n=xt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function na(e,t,n,r,o,i){var s=2;if(r=e,typeof e=="function")Cf(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case Ir:return mr(n.children,o,i,t);case Nd:s=8,o|=8;break;case ec:return e=xt(12,n,t,o|2),e.elementType=ec,e.lanes=i,e;case tc:return e=xt(13,n,t,o),e.elementType=tc,e.lanes=i,e;case nc:return e=xt(19,n,t,o),e.elementType=nc,e.lanes=i,e;case im:return wl(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case rm:s=10;break e;case om:s=9;break e;case Fd:s=11;break e;case Vd:s=14;break e;case yn:s=16,r=null;break e}throw Error(T(130,e==null?e:typeof e,""))}return t=xt(s,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function mr(e,t,n,r){return e=xt(7,e,r,t),e.lanes=n,e}function wl(e,t,n,r){return e=xt(22,e,r,t),e.elementType=im,e.lanes=n,e.stateNode={isHidden:!1},e}function Cu(e,t,n){return e=xt(6,e,null,t),e.lanes=n,e}function Su(e,t,n){return t=xt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function v4(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=nu(0),this.expirationTimes=nu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=nu(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Sf(e,t,n,r,o,i,s,a,l){return e=new v4(e,t,n,a,l),t===1?(t=1,i===!0&&(t|=8)):t=0,i=xt(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},of(i),e}function y4(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Mr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Xg(e){if(!e)return Hn;e=e._reactInternals;e:{if(Er(e)!==e||e.tag!==1)throw Error(T(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ze(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(T(171))}if(e.tag===1){var n=e.type;if(Ze(n))return Ym(e,n,t)}return t}function Zg(e,t,n,r,o,i,s,a,l){return e=Sf(n,r,!0,e,o,i,s,a,l),e.context=Xg(null),n=e.current,r=$e(),o=On(n),i=sn(r,o),i.callback=t??null,In(n,i,o),e.current.lanes=o,es(e,o,r),Je(e,r),e}function Cl(e,t,n,r){var o=t.current,i=$e(),s=On(o);return n=Xg(n),t.context===null?t.context=n:t.pendingContext=n,t=sn(i,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=In(o,t,s),e!==null&&(zt(e,o,s,i),Ys(e,o,s)),s}function Ba(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Th(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function jf(e,t){Th(e,t),(e=e.alternate)&&Th(e,t)}function x4(){return null}var Jg=typeof reportError=="function"?reportError:function(e){console.error(e)};function Pf(e){this._internalRoot=e}Sl.prototype.render=Pf.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(T(409));Cl(e,t,null,null)};Sl.prototype.unmount=Pf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Sr(function(){Cl(null,e,null,null)}),t[un]=null}};function Sl(e){this._internalRoot=e}Sl.prototype.unstable_scheduleHydration=function(e){if(e){var t=Rm();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Cn.length&&t!==0&&t<Cn[n].priority;n++);Cn.splice(n,0,e),n===0&&_m(e)}};function kf(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function jl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function bh(){}function w4(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var c=Ba(s);i.call(c)}}var s=Zg(t,r,e,0,null,!1,!1,"",bh);return e._reactRootContainer=s,e[un]=s.current,Ri(e.nodeType===8?e.parentNode:e),Sr(),s}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var a=r;r=function(){var c=Ba(l);a.call(c)}}var l=Sf(e,0,!1,null,null,!1,!1,"",bh);return e._reactRootContainer=l,e[un]=l.current,Ri(e.nodeType===8?e.parentNode:e),Sr(function(){Cl(t,l,n,r)}),l}function Pl(e,t,n,r,o){var i=n._reactRootContainer;if(i){var s=i;if(typeof o=="function"){var a=o;o=function(){var l=Ba(s);a.call(l)}}Cl(t,s,e,o)}else s=w4(n,t,e,o,r);return Ba(s)}Tm=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=qo(t.pendingLanes);n!==0&&(Gd(t,n|1),Je(t,me()),!(Q&6)&&(mo=me()+500,Yn()))}break;case 13:Sr(function(){var r=cn(e,1);if(r!==null){var o=$e();zt(r,e,1,o)}}),jf(e,1)}};Ud=function(e){if(e.tag===13){var t=cn(e,134217728);if(t!==null){var n=$e();zt(t,e,134217728,n)}jf(e,134217728)}};bm=function(e){if(e.tag===13){var t=On(e),n=cn(e,t);if(n!==null){var r=$e();zt(n,e,t,r)}jf(e,t)}};Rm=function(){return Z};Am=function(e,t){var n=Z;try{return Z=e,t()}finally{Z=n}};fc=function(e,t,n){switch(t){case"input":if(ic(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=hl(r);if(!o)throw Error(T(90));am(r),ic(r,o)}}}break;case"textarea":um(e,n);break;case"select":t=n.value,t!=null&&Xr(e,!!n.multiple,t,!1)}};gm=yf;vm=Sr;var C4={usingClientEntryPoint:!1,Events:[ns,Fr,hl,hm,mm,yf]},Fo={findFiberByHostInstance:ur,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},S4={bundleType:Fo.bundleType,version:Fo.version,rendererPackageName:Fo.rendererPackageName,rendererConfig:Fo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:fn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=wm(e),e===null?null:e.stateNode},findFiberByHostInstance:Fo.findFiberByHostInstance||x4,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ls=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ls.isDisabled&&Ls.supportsFiber)try{cl=Ls.inject(S4),Gt=Ls}catch{}}ct.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=C4;ct.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!kf(t))throw Error(T(200));return y4(e,t,null,n)};ct.createRoot=function(e,t){if(!kf(e))throw Error(T(299));var n=!1,r="",o=Jg;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Sf(e,1,!1,null,null,n,!1,r,o),e[un]=t.current,Ri(e.nodeType===8?e.parentNode:e),new Pf(t)};ct.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(T(188)):(e=Object.keys(e).join(","),Error(T(268,e)));return e=wm(t),e=e===null?null:e.stateNode,e};ct.flushSync=function(e){return Sr(e)};ct.hydrate=function(e,t,n){if(!jl(t))throw Error(T(200));return Pl(null,e,t,!0,n)};ct.hydrateRoot=function(e,t,n){if(!kf(e))throw Error(T(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",s=Jg;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=Zg(t,null,e,1,n??null,o,!1,i,s),e[un]=t.current,Ri(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new Sl(t)};ct.render=function(e,t,n){if(!jl(t))throw Error(T(200));return Pl(null,e,t,!1,n)};ct.unmountComponentAtNode=function(e){if(!jl(e))throw Error(T(40));return e._reactRootContainer?(Sr(function(){Pl(null,null,e,!1,function(){e._reactRootContainer=null,e[un]=null})}),!0):!1};ct.unstable_batchedUpdates=yf;ct.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!jl(n))throw Error(T(200));if(e==null||e._reactInternals===void 0)throw Error(T(38));return Pl(e,t,n,!1,r)};ct.version="18.2.0-next-9e3b772b8-20220608";function e2(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e2)}catch(e){console.error(e)}}e2(),Z0.exports=ct;var t2=Z0.exports,Rh=t2;Zu.createRoot=Rh.createRoot,Zu.hydrateRoot=Rh.hydrateRoot;/**
 * @remix-run/router v1.13.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ni(){return Ni=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ni.apply(this,arguments)}var kn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(kn||(kn={}));const Ah="popstate";function j4(e){e===void 0&&(e={});function t(r,o){let{pathname:i,search:s,hash:a}=r.location;return Hc("",{pathname:i,search:s,hash:a},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(r,o){return typeof o=="string"?o:$a(o)}return k4(t,n,null,e)}function Ce(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Ef(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function P4(){return Math.random().toString(36).substr(2,8)}function _h(e,t){return{usr:e.state,key:e.key,idx:t}}function Hc(e,t,n,r){return n===void 0&&(n=null),Ni({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?To(t):t,{state:n,key:t&&t.key||r||P4()})}function $a(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function To(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function k4(e,t,n,r){r===void 0&&(r={});let{window:o=document.defaultView,v5Compat:i=!1}=r,s=o.history,a=kn.Pop,l=null,c=d();c==null&&(c=0,s.replaceState(Ni({},s.state,{idx:c}),""));function d(){return(s.state||{idx:null}).idx}function f(){a=kn.Pop;let S=d(),v=S==null?null:S-c;c=S,l&&l({action:a,location:x.location,delta:v})}function p(S,v){a=kn.Push;let h=Hc(x.location,S,v);n&&n(h,S),c=d()+1;let g=_h(h,c),w=x.createHref(h);try{s.pushState(g,"",w)}catch(j){if(j instanceof DOMException&&j.name==="DataCloneError")throw j;o.location.assign(w)}i&&l&&l({action:a,location:x.location,delta:1})}function m(S,v){a=kn.Replace;let h=Hc(x.location,S,v);n&&n(h,S),c=d();let g=_h(h,c),w=x.createHref(h);s.replaceState(g,"",w),i&&l&&l({action:a,location:x.location,delta:0})}function y(S){let v=o.location.origin!=="null"?o.location.origin:o.location.href,h=typeof S=="string"?S:$a(S);return Ce(v,"No window.location.(origin|href) available to create URL for href: "+h),new URL(h,v)}let x={get action(){return a},get location(){return e(o,s)},listen(S){if(l)throw new Error("A history only accepts one active listener");return o.addEventListener(Ah,f),l=S,()=>{o.removeEventListener(Ah,f),l=null}},createHref(S){return t(o,S)},createURL:y,encodeLocation(S){let v=y(S);return{pathname:v.pathname,search:v.search,hash:v.hash}},push:p,replace:m,go(S){return s.go(S)}};return x}var Lh;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Lh||(Lh={}));function E4(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?To(t):t,o=Tf(r.pathname||"/",n);if(o==null)return null;let i=n2(e);T4(i);let s=null;for(let a=0;s==null&&a<i.length;++a)s=D4(i[a],F4(o));return s}function n2(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let o=(i,s,a)=>{let l={relativePath:a===void 0?i.path||"":a,caseSensitive:i.caseSensitive===!0,childrenIndex:s,route:i};l.relativePath.startsWith("/")&&(Ce(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let c=Fn([r,l.relativePath]),d=n.concat(l);i.children&&i.children.length>0&&(Ce(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),n2(i.children,t,d,c)),!(i.path==null&&!i.index)&&t.push({path:c,score:M4(c,i.index),routesMeta:d})};return e.forEach((i,s)=>{var a;if(i.path===""||!((a=i.path)!=null&&a.includes("?")))o(i,s);else for(let l of r2(i.path))o(i,s,l)}),t}function r2(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,o=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return o?[i,""]:[i];let s=r2(r.join("/")),a=[];return a.push(...s.map(l=>l===""?i:[i,l].join("/"))),o&&a.push(...s),a.map(l=>e.startsWith("/")&&l===""?"/":l)}function T4(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:I4(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const b4=/^:\w+$/,R4=3,A4=2,_4=1,L4=10,z4=-2,zh=e=>e==="*";function M4(e,t){let n=e.split("/"),r=n.length;return n.some(zh)&&(r+=z4),t&&(r+=A4),n.filter(o=>!zh(o)).reduce((o,i)=>o+(b4.test(i)?R4:i===""?_4:L4),r)}function I4(e,t){return e.length===t.length&&e.slice(0,-1).every((r,o)=>r===t[o])?e[e.length-1]-t[t.length-1]:0}function D4(e,t){let{routesMeta:n}=e,r={},o="/",i=[];for(let s=0;s<n.length;++s){let a=n[s],l=s===n.length-1,c=o==="/"?t:t.slice(o.length)||"/",d=O4({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},c);if(!d)return null;Object.assign(r,d.params);let f=a.route;i.push({params:r,pathname:Fn([o,d.pathname]),pathnameBase:G4(Fn([o,d.pathnameBase])),route:f}),d.pathnameBase!=="/"&&(o=Fn([o,d.pathnameBase]))}return i}function O4(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=N4(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let i=o[0],s=i.replace(/(.)\/+$/,"$1"),a=o.slice(1);return{params:r.reduce((c,d,f)=>{let{paramName:p,isOptional:m}=d;if(p==="*"){let x=a[f]||"";s=i.slice(0,i.length-x.length).replace(/(.)\/+$/,"$1")}const y=a[f];return m&&!y?c[p]=void 0:c[p]=V4(y||"",p),c},{}),pathname:i,pathnameBase:s,pattern:e}}function N4(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Ef(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:(\w+)(\?)?/g,(s,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),r]}function F4(e){try{return decodeURI(e)}catch(t){return Ef(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function V4(e,t){try{return decodeURIComponent(e)}catch(n){return Ef(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function Tf(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function B4(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:o=""}=typeof e=="string"?To(e):e;return{pathname:n?n.startsWith("/")?n:$4(n,t):t,search:U4(r),hash:H4(o)}}function $4(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function ju(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function o2(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function i2(e,t,n,r){r===void 0&&(r=!1);let o;typeof e=="string"?o=To(e):(o=Ni({},e),Ce(!o.pathname||!o.pathname.includes("?"),ju("?","pathname","search",o)),Ce(!o.pathname||!o.pathname.includes("#"),ju("#","pathname","hash",o)),Ce(!o.search||!o.search.includes("#"),ju("#","search","hash",o)));let i=e===""||o.pathname==="",s=i?"/":o.pathname,a;if(s==null)a=n;else if(r){let f=t[t.length-1].replace(/^\//,"").split("/");if(s.startsWith("..")){let p=s.split("/");for(;p[0]==="..";)p.shift(),f.pop();o.pathname=p.join("/")}a="/"+f.join("/")}else{let f=t.length-1;if(s.startsWith("..")){let p=s.split("/");for(;p[0]==="..";)p.shift(),f-=1;o.pathname=p.join("/")}a=f>=0?t[f]:"/"}let l=B4(o,a),c=s&&s!=="/"&&s.endsWith("/"),d=(i||s===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(c||d)&&(l.pathname+="/"),l}const Fn=e=>e.join("/").replace(/\/\/+/g,"/"),G4=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),U4=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,H4=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function W4(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const s2=["post","put","patch","delete"];new Set(s2);const Q4=["get",...s2];new Set(Q4);/**
 * React Router v6.20.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ga(){return Ga=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ga.apply(this,arguments)}const bf=C.createContext(null),q4=C.createContext(null),bo=C.createContext(null),kl=C.createContext(null),Xn=C.createContext({outlet:null,matches:[],isDataRoute:!1}),a2=C.createContext(null);function K4(e,t){let{relative:n}=t===void 0?{}:t;os()||Ce(!1);let{basename:r,navigator:o}=C.useContext(bo),{hash:i,pathname:s,search:a}=u2(e,{relative:n}),l=s;return r!=="/"&&(l=s==="/"?r:Fn([r,s])),o.createHref({pathname:l,search:a,hash:i})}function os(){return C.useContext(kl)!=null}function is(){return os()||Ce(!1),C.useContext(kl).location}function l2(e){C.useContext(bo).static||C.useLayoutEffect(e)}function Y4(){let{isDataRoute:e}=C.useContext(Xn);return e?ux():X4()}function X4(){os()||Ce(!1);let e=C.useContext(bf),{basename:t,navigator:n}=C.useContext(bo),{matches:r}=C.useContext(Xn),{pathname:o}=is(),i=JSON.stringify(o2(r).map(l=>l.pathnameBase)),s=C.useRef(!1);return l2(()=>{s.current=!0}),C.useCallback(function(l,c){if(c===void 0&&(c={}),!s.current)return;if(typeof l=="number"){n.go(l);return}let d=i2(l,JSON.parse(i),o,c.relative==="path");e==null&&t!=="/"&&(d.pathname=d.pathname==="/"?t:Fn([t,d.pathname])),(c.replace?n.replace:n.push)(d,c.state,c)},[t,n,i,o,e])}function Z4(){let{matches:e}=C.useContext(Xn),t=e[e.length-1];return t?t.params:{}}function u2(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=C.useContext(Xn),{pathname:o}=is(),i=JSON.stringify(o2(r).map(s=>s.pathnameBase));return C.useMemo(()=>i2(e,JSON.parse(i),o,n==="path"),[e,i,o,n])}function c2(e,t){return J4(e,t)}function J4(e,t,n){os()||Ce(!1);let{navigator:r}=C.useContext(bo),{matches:o}=C.useContext(Xn),i=o[o.length-1],s=i?i.params:{};i&&i.pathname;let a=i?i.pathnameBase:"/";i&&i.route;let l=is(),c;if(t){var d;let x=typeof t=="string"?To(t):t;a==="/"||(d=x.pathname)!=null&&d.startsWith(a)||Ce(!1),c=x}else c=l;let f=c.pathname||"/",p=a==="/"?f:f.slice(a.length)||"/",m=E4(e,{pathname:p}),y=ox(m&&m.map(x=>Object.assign({},x,{params:Object.assign({},s,x.params),pathname:Fn([a,r.encodeLocation?r.encodeLocation(x.pathname).pathname:x.pathname]),pathnameBase:x.pathnameBase==="/"?a:Fn([a,r.encodeLocation?r.encodeLocation(x.pathnameBase).pathname:x.pathnameBase])})),o,n);return t&&y?C.createElement(kl.Provider,{value:{location:Ga({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:kn.Pop}},y):y}function ex(){let e=lx(),t=W4(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},i=null;return C.createElement(C.Fragment,null,C.createElement("h2",null,"Unexpected Application Error!"),C.createElement("h3",{style:{fontStyle:"italic"}},t),n?C.createElement("pre",{style:o},n):null,i)}const tx=C.createElement(ex,null);class nx extends C.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error||n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?C.createElement(Xn.Provider,{value:this.props.routeContext},C.createElement(a2.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function rx(e){let{routeContext:t,match:n,children:r}=e,o=C.useContext(bf);return o&&o.static&&o.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=n.route.id),C.createElement(Xn.Provider,{value:t},r)}function ox(e,t,n){var r;if(t===void 0&&(t=[]),n===void 0&&(n=null),e==null){var o;if((o=n)!=null&&o.errors)e=n.matches;else return null}let i=e,s=(r=n)==null?void 0:r.errors;if(s!=null){let a=i.findIndex(l=>l.route.id&&(s==null?void 0:s[l.route.id]));a>=0||Ce(!1),i=i.slice(0,Math.min(i.length,a+1))}return i.reduceRight((a,l,c)=>{let d=l.route.id?s==null?void 0:s[l.route.id]:null,f=null;n&&(f=l.route.errorElement||tx);let p=t.concat(i.slice(0,c+1)),m=()=>{let y;return d?y=f:l.route.Component?y=C.createElement(l.route.Component,null):l.route.element?y=l.route.element:y=a,C.createElement(rx,{match:l,routeContext:{outlet:a,matches:p,isDataRoute:n!=null},children:y})};return n&&(l.route.ErrorBoundary||l.route.errorElement||c===0)?C.createElement(nx,{location:n.location,revalidation:n.revalidation,component:f,error:d,children:m(),routeContext:{outlet:null,matches:p,isDataRoute:!0}}):m()},null)}var d2=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(d2||{}),Ua=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Ua||{});function ix(e){let t=C.useContext(bf);return t||Ce(!1),t}function sx(e){let t=C.useContext(q4);return t||Ce(!1),t}function ax(e){let t=C.useContext(Xn);return t||Ce(!1),t}function f2(e){let t=ax(),n=t.matches[t.matches.length-1];return n.route.id||Ce(!1),n.route.id}function lx(){var e;let t=C.useContext(a2),n=sx(Ua.UseRouteError),r=f2(Ua.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function ux(){let{router:e}=ix(d2.UseNavigateStable),t=f2(Ua.UseNavigateStable),n=C.useRef(!1);return l2(()=>{n.current=!0}),C.useCallback(function(o,i){i===void 0&&(i={}),n.current&&(typeof o=="number"?e.navigate(o):e.navigate(o,Ga({fromRouteId:t},i)))},[e,t])}function p2(e){Ce(!1)}function cx(e){let{basename:t="/",children:n=null,location:r,navigationType:o=kn.Pop,navigator:i,static:s=!1}=e;os()&&Ce(!1);let a=t.replace(/^\/*/,"/"),l=C.useMemo(()=>({basename:a,navigator:i,static:s}),[a,i,s]);typeof r=="string"&&(r=To(r));let{pathname:c="/",search:d="",hash:f="",state:p=null,key:m="default"}=r,y=C.useMemo(()=>{let x=Tf(c,a);return x==null?null:{location:{pathname:x,search:d,hash:f,state:p,key:m},navigationType:o}},[a,c,d,f,p,m,o]);return y==null?null:C.createElement(bo.Provider,{value:l},C.createElement(kl.Provider,{children:n,value:y}))}function dx(e){let{children:t,location:n}=e;return c2(Wc(t),n)}new Promise(()=>{});function Wc(e,t){t===void 0&&(t=[]);let n=[];return C.Children.forEach(e,(r,o)=>{if(!C.isValidElement(r))return;let i=[...t,o];if(r.type===C.Fragment){n.push.apply(n,Wc(r.props.children,i));return}r.type!==p2&&Ce(!1),!r.props.index||!r.props.children||Ce(!1);let s={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(s.children=Wc(r.props.children,i)),n.push(s)}),n}/**
 * React Router DOM v6.20.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Qc(){return Qc=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Qc.apply(this,arguments)}function fx(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function px(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function hx(e,t){return e.button===0&&(!t||t==="_self")&&!px(e)}const mx=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],gx="startTransition",Mh=p5[gx];function vx(e){let{basename:t,children:n,future:r,window:o}=e,i=C.useRef();i.current==null&&(i.current=j4({window:o,v5Compat:!0}));let s=i.current,[a,l]=C.useState({action:s.action,location:s.location}),{v7_startTransition:c}=r||{},d=C.useCallback(f=>{c&&Mh?Mh(()=>l(f)):l(f)},[l,c]);return C.useLayoutEffect(()=>s.listen(d),[s,d]),C.createElement(cx,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:s})}const yx=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",xx=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,N=C.forwardRef(function(t,n){let{onClick:r,relative:o,reloadDocument:i,replace:s,state:a,target:l,to:c,preventScrollReset:d,unstable_viewTransition:f}=t,p=fx(t,mx),{basename:m}=C.useContext(bo),y,x=!1;if(typeof c=="string"&&xx.test(c)&&(y=c,yx))try{let g=new URL(window.location.href),w=c.startsWith("//")?new URL(g.protocol+c):new URL(c),j=Tf(w.pathname,m);w.origin===g.origin&&j!=null?c=j+w.search+w.hash:x=!0}catch{}let S=K4(c,{relative:o}),v=wx(c,{replace:s,state:a,target:l,preventScrollReset:d,relative:o,unstable_viewTransition:f});function h(g){r&&r(g),g.defaultPrevented||v(g)}return C.createElement("a",Qc({},p,{href:y||S,onClick:x||i?r:h,ref:n,target:l}))});var Ih;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Ih||(Ih={}));var Dh;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Dh||(Dh={}));function wx(e,t){let{target:n,replace:r,state:o,preventScrollReset:i,relative:s,unstable_viewTransition:a}=t===void 0?{}:t,l=Y4(),c=is(),d=u2(e,{relative:s});return C.useCallback(f=>{if(hx(f,n)){f.preventDefault();let p=r!==void 0?r:$a(c)===$a(d);l(e,{replace:p,state:o,preventScrollReset:i,relative:s,unstable_viewTransition:a})}},[c,l,d,r,o,n,e,i,s,a])}const El=C.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"}),Tl=C.createContext({}),bl=C.createContext(null),Rl=typeof document<"u",Ro=Rl?C.useLayoutEffect:C.useEffect,h2=C.createContext({strict:!1}),Rf=e=>e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),Cx="framerAppearId",m2="data-"+Rf(Cx);function Sx(e,t,n,r){const{visualElement:o}=C.useContext(Tl),i=C.useContext(h2),s=C.useContext(bl),a=C.useContext(El).reducedMotion,l=C.useRef();r=r||i.renderer,!l.current&&r&&(l.current=r(e,{visualState:t,parent:o,props:n,presenceContext:s,blockInitialAnimation:s?s.initial===!1:!1,reducedMotionConfig:a}));const c=l.current;C.useInsertionEffect(()=>{c&&c.update(n,s)});const d=C.useRef(!!(n[m2]&&!window.HandoffComplete));return Ro(()=>{c&&(c.render(),d.current&&c.animationState&&c.animationState.animateChanges())}),C.useEffect(()=>{c&&(c.updateFeatures(),!d.current&&c.animationState&&c.animationState.animateChanges(),d.current&&(d.current=!1,window.HandoffComplete=!0))}),c}function Wr(e){return typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}function jx(e,t,n){return C.useCallback(r=>{r&&e.mount&&e.mount(r),t&&(r?t.mount(r):t.unmount()),n&&(typeof n=="function"?n(r):Wr(n)&&(n.current=r))},[t])}function Fi(e){return typeof e=="string"||Array.isArray(e)}function Al(e){return typeof e=="object"&&typeof e.start=="function"}const Af=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],_f=["initial",...Af];function _l(e){return Al(e.animate)||_f.some(t=>Fi(e[t]))}function g2(e){return!!(_l(e)||e.variants)}function Px(e,t){if(_l(e)){const{initial:n,animate:r}=e;return{initial:n===!1||Fi(n)?n:void 0,animate:Fi(r)?r:void 0}}return e.inherit!==!1?t:{}}function kx(e){const{initial:t,animate:n}=Px(e,C.useContext(Tl));return C.useMemo(()=>({initial:t,animate:n}),[Oh(t),Oh(n)])}function Oh(e){return Array.isArray(e)?e.join(" "):e}const Nh={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},Vi={};for(const e in Nh)Vi[e]={isEnabled:t=>Nh[e].some(n=>!!t[n])};function Ex(e){for(const t in e)Vi[t]={...Vi[t],...e[t]}}const Lf=C.createContext({}),v2=C.createContext({}),Tx=Symbol.for("motionComponentSymbol");function bx({preloadedFeatures:e,createVisualElement:t,useRender:n,useVisualState:r,Component:o}){e&&Ex(e);function i(a,l){let c;const d={...C.useContext(El),...a,layoutId:Rx(a)},{isStatic:f}=d,p=kx(a),m=r(a,f);if(!f&&Rl){p.visualElement=Sx(o,m,d,t);const y=C.useContext(v2),x=C.useContext(h2).strict;p.visualElement&&(c=p.visualElement.loadFeatures(d,x,e,y))}return C.createElement(Tl.Provider,{value:p},c&&p.visualElement?C.createElement(c,{visualElement:p.visualElement,...d}):null,n(o,a,jx(m,p.visualElement,l),m,f,p.visualElement))}const s=C.forwardRef(i);return s[Tx]=o,s}function Rx({layoutId:e}){const t=C.useContext(Lf).id;return t&&e!==void 0?t+"-"+e:e}function Ax(e){function t(r,o={}){return bx(e(r,o))}if(typeof Proxy>"u")return t;const n=new Map;return new Proxy(t,{get:(r,o)=>(n.has(o)||n.set(o,t(o)),n.get(o))})}const _x=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function zf(e){return typeof e!="string"||e.includes("-")?!1:!!(_x.indexOf(e)>-1||/[A-Z]/.test(e))}const Ha={};function Lx(e){Object.assign(Ha,e)}const ss=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Tr=new Set(ss);function y2(e,{layout:t,layoutId:n}){return Tr.has(e)||e.startsWith("origin")||(t||n!==void 0)&&(!!Ha[e]||e==="opacity")}const Ne=e=>!!(e&&e.getVelocity),zx={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},Mx=ss.length;function Ix(e,{enableHardwareAcceleration:t=!0,allowTransformNone:n=!0},r,o){let i="";for(let s=0;s<Mx;s++){const a=ss[s];if(e[a]!==void 0){const l=zx[a]||a;i+=`${l}(${e[a]}) `}}return t&&!e.z&&(i+="translateZ(0)"),i=i.trim(),o?i=o(e,r?"":i):n&&r&&(i="none"),i}const x2=e=>t=>typeof t=="string"&&t.startsWith(e),w2=x2("--"),qc=x2("var(--"),Dx=/var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g,Ox=(e,t)=>t&&typeof e=="number"?t.transform(e):e,Wn=(e,t,n)=>Math.min(Math.max(n,e),t),br={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},ui={...br,transform:e=>Wn(0,1,e)},zs={...br,default:1},ci=e=>Math.round(e*1e5)/1e5,Ll=/(-)?([\d]*\.?[\d])+/g,C2=/(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,Nx=/^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function as(e){return typeof e=="string"}const ls=e=>({test:t=>as(t)&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),mn=ls("deg"),Ht=ls("%"),D=ls("px"),Fx=ls("vh"),Vx=ls("vw"),Fh={...Ht,parse:e=>Ht.parse(e)/100,transform:e=>Ht.transform(e*100)},Vh={...br,transform:Math.round},S2={borderWidth:D,borderTopWidth:D,borderRightWidth:D,borderBottomWidth:D,borderLeftWidth:D,borderRadius:D,radius:D,borderTopLeftRadius:D,borderTopRightRadius:D,borderBottomRightRadius:D,borderBottomLeftRadius:D,width:D,maxWidth:D,height:D,maxHeight:D,size:D,top:D,right:D,bottom:D,left:D,padding:D,paddingTop:D,paddingRight:D,paddingBottom:D,paddingLeft:D,margin:D,marginTop:D,marginRight:D,marginBottom:D,marginLeft:D,rotate:mn,rotateX:mn,rotateY:mn,rotateZ:mn,scale:zs,scaleX:zs,scaleY:zs,scaleZ:zs,skew:mn,skewX:mn,skewY:mn,distance:D,translateX:D,translateY:D,translateZ:D,x:D,y:D,z:D,perspective:D,transformPerspective:D,opacity:ui,originX:Fh,originY:Fh,originZ:D,zIndex:Vh,fillOpacity:ui,strokeOpacity:ui,numOctaves:Vh};function Mf(e,t,n,r){const{style:o,vars:i,transform:s,transformOrigin:a}=e;let l=!1,c=!1,d=!0;for(const f in t){const p=t[f];if(w2(f)){i[f]=p;continue}const m=S2[f],y=Ox(p,m);if(Tr.has(f)){if(l=!0,s[f]=y,!d)continue;p!==(m.default||0)&&(d=!1)}else f.startsWith("origin")?(c=!0,a[f]=y):o[f]=y}if(t.transform||(l||r?o.transform=Ix(e.transform,n,d,r):o.transform&&(o.transform="none")),c){const{originX:f="50%",originY:p="50%",originZ:m=0}=a;o.transformOrigin=`${f} ${p} ${m}`}}const If=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function j2(e,t,n){for(const r in t)!Ne(t[r])&&!y2(r,n)&&(e[r]=t[r])}function Bx({transformTemplate:e},t,n){return C.useMemo(()=>{const r=If();return Mf(r,t,{enableHardwareAcceleration:!n},e),Object.assign({},r.vars,r.style)},[t])}function $x(e,t,n){const r=e.style||{},o={};return j2(o,r,e),Object.assign(o,Bx(e,t,n)),e.transformValues?e.transformValues(o):o}function Gx(e,t,n){const r={},o=$x(e,t,n);return e.drag&&e.dragListener!==!1&&(r.draggable=!1,o.userSelect=o.WebkitUserSelect=o.WebkitTouchCallout="none",o.touchAction=e.drag===!0?"none":`pan-${e.drag==="x"?"y":"x"}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(r.tabIndex=0),r.style=o,r}const Ux=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","transformValues","custom","inherit","onLayoutAnimationStart","onLayoutAnimationComplete","onLayoutMeasure","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","ignoreStrict","viewport"]);function Wa(e){return e.startsWith("while")||e.startsWith("drag")&&e!=="draggable"||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||Ux.has(e)}let P2=e=>!Wa(e);function Hx(e){e&&(P2=t=>t.startsWith("on")?!Wa(t):e(t))}try{Hx(require("@emotion/is-prop-valid").default)}catch{}function Wx(e,t,n){const r={};for(const o in e)o==="values"&&typeof e.values=="object"||(P2(o)||n===!0&&Wa(o)||!t&&!Wa(o)||e.draggable&&o.startsWith("onDrag"))&&(r[o]=e[o]);return r}function Bh(e,t,n){return typeof e=="string"?e:D.transform(t+n*e)}function Qx(e,t,n){const r=Bh(t,e.x,e.width),o=Bh(n,e.y,e.height);return`${r} ${o}`}const qx={offset:"stroke-dashoffset",array:"stroke-dasharray"},Kx={offset:"strokeDashoffset",array:"strokeDasharray"};function Yx(e,t,n=1,r=0,o=!0){e.pathLength=1;const i=o?qx:Kx;e[i.offset]=D.transform(-r);const s=D.transform(t),a=D.transform(n);e[i.array]=`${s} ${a}`}function Df(e,{attrX:t,attrY:n,attrScale:r,originX:o,originY:i,pathLength:s,pathSpacing:a=1,pathOffset:l=0,...c},d,f,p){if(Mf(e,c,d,p),f){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};const{attrs:m,style:y,dimensions:x}=e;m.transform&&(x&&(y.transform=m.transform),delete m.transform),x&&(o!==void 0||i!==void 0||y.transform)&&(y.transformOrigin=Qx(x,o!==void 0?o:.5,i!==void 0?i:.5)),t!==void 0&&(m.x=t),n!==void 0&&(m.y=n),r!==void 0&&(m.scale=r),s!==void 0&&Yx(m,s,a,l,!1)}const k2=()=>({...If(),attrs:{}}),Of=e=>typeof e=="string"&&e.toLowerCase()==="svg";function Xx(e,t,n,r){const o=C.useMemo(()=>{const i=k2();return Df(i,t,{enableHardwareAcceleration:!1},Of(r),e.transformTemplate),{...i.attrs,style:{...i.style}}},[t]);if(e.style){const i={};j2(i,e.style,e),o.style={...i,...o.style}}return o}function Zx(e=!1){return(n,r,o,{latestValues:i},s)=>{const l=(zf(n)?Xx:Gx)(r,i,s,n),d={...Wx(r,typeof n=="string",e),...l,ref:o},{children:f}=r,p=C.useMemo(()=>Ne(f)?f.get():f,[f]);return C.createElement(n,{...d,children:p})}}function E2(e,{style:t,vars:n},r,o){Object.assign(e.style,t,o&&o.getProjectionStyles(r));for(const i in n)e.style.setProperty(i,n[i])}const T2=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function b2(e,t,n,r){E2(e,t,void 0,r);for(const o in t.attrs)e.setAttribute(T2.has(o)?o:Rf(o),t.attrs[o])}function Nf(e,t){const{style:n}=e,r={};for(const o in n)(Ne(n[o])||t.style&&Ne(t.style[o])||y2(o,e))&&(r[o]=n[o]);return r}function R2(e,t){const n=Nf(e,t);for(const r in e)if(Ne(e[r])||Ne(t[r])){const o=ss.indexOf(r)!==-1?"attr"+r.charAt(0).toUpperCase()+r.substring(1):r;n[o]=e[r]}return n}function Ff(e,t,n,r={},o={}){return typeof t=="function"&&(t=t(n!==void 0?n:e.custom,r,o)),typeof t=="string"&&(t=e.variants&&e.variants[t]),typeof t=="function"&&(t=t(n!==void 0?n:e.custom,r,o)),t}function us(e){const t=C.useRef(null);return t.current===null&&(t.current=e()),t.current}const Qa=e=>Array.isArray(e),Jx=e=>!!(e&&typeof e=="object"&&e.mix&&e.toValue),e6=e=>Qa(e)?e[e.length-1]||0:e;function ra(e){const t=Ne(e)?e.get():e;return Jx(t)?t.toValue():t}function t6({scrapeMotionValuesFromProps:e,createRenderState:t,onMount:n},r,o,i){const s={latestValues:n6(r,o,i,e),renderState:t()};return n&&(s.mount=a=>n(r,a,s)),s}const A2=e=>(t,n)=>{const r=C.useContext(Tl),o=C.useContext(bl),i=()=>t6(e,t,r,o);return n?i():us(i)};function n6(e,t,n,r){const o={},i=r(e,{});for(const p in i)o[p]=ra(i[p]);let{initial:s,animate:a}=e;const l=_l(e),c=g2(e);t&&c&&!l&&e.inherit!==!1&&(s===void 0&&(s=t.initial),a===void 0&&(a=t.animate));let d=n?n.initial===!1:!1;d=d||s===!1;const f=d?a:s;return f&&typeof f!="boolean"&&!Al(f)&&(Array.isArray(f)?f:[f]).forEach(m=>{const y=Ff(e,m);if(!y)return;const{transitionEnd:x,transition:S,...v}=y;for(const h in v){let g=v[h];if(Array.isArray(g)){const w=d?g.length-1:0;g=g[w]}g!==null&&(o[h]=g)}for(const h in x)o[h]=x[h]}),o}const pe=e=>e;class $h{constructor(){this.order=[],this.scheduled=new Set}add(t){if(!this.scheduled.has(t))return this.scheduled.add(t),this.order.push(t),!0}remove(t){const n=this.order.indexOf(t);n!==-1&&(this.order.splice(n,1),this.scheduled.delete(t))}clear(){this.order.length=0,this.scheduled.clear()}}function r6(e){let t=new $h,n=new $h,r=0,o=!1,i=!1;const s=new WeakSet,a={schedule:(l,c=!1,d=!1)=>{const f=d&&o,p=f?t:n;return c&&s.add(l),p.add(l)&&f&&o&&(r=t.order.length),l},cancel:l=>{n.remove(l),s.delete(l)},process:l=>{if(o){i=!0;return}if(o=!0,[t,n]=[n,t],n.clear(),r=t.order.length,r)for(let c=0;c<r;c++){const d=t.order[c];d(l),s.has(d)&&(a.schedule(d),e())}o=!1,i&&(i=!1,a.process(l))}};return a}const Ms=["prepare","read","update","preRender","render","postRender"],o6=40;function i6(e,t){let n=!1,r=!0;const o={delta:0,timestamp:0,isProcessing:!1},i=Ms.reduce((f,p)=>(f[p]=r6(()=>n=!0),f),{}),s=f=>i[f].process(o),a=()=>{const f=performance.now();n=!1,o.delta=r?1e3/60:Math.max(Math.min(f-o.timestamp,o6),1),o.timestamp=f,o.isProcessing=!0,Ms.forEach(s),o.isProcessing=!1,n&&t&&(r=!1,e(a))},l=()=>{n=!0,r=!0,o.isProcessing||e(a)};return{schedule:Ms.reduce((f,p)=>{const m=i[p];return f[p]=(y,x=!1,S=!1)=>(n||l(),m.schedule(y,x,S)),f},{}),cancel:f=>Ms.forEach(p=>i[p].cancel(f)),state:o,steps:i}}const{schedule:X,cancel:Qt,state:Se,steps:Pu}=i6(typeof requestAnimationFrame<"u"?requestAnimationFrame:pe,!0),s6={useVisualState:A2({scrapeMotionValuesFromProps:R2,createRenderState:k2,onMount:(e,t,{renderState:n,latestValues:r})=>{X.read(()=>{try{n.dimensions=typeof t.getBBox=="function"?t.getBBox():t.getBoundingClientRect()}catch{n.dimensions={x:0,y:0,width:0,height:0}}}),X.render(()=>{Df(n,r,{enableHardwareAcceleration:!1},Of(t.tagName),e.transformTemplate),b2(t,n)})}})},a6={useVisualState:A2({scrapeMotionValuesFromProps:Nf,createRenderState:If})};function l6(e,{forwardMotionProps:t=!1},n,r){return{...zf(e)?s6:a6,preloadedFeatures:n,useRender:Zx(t),createVisualElement:r,Component:e}}function on(e,t,n,r={passive:!0}){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n)}const _2=e=>e.pointerType==="mouse"?typeof e.button!="number"||e.button<=0:e.isPrimary!==!1;function zl(e,t="page"){return{point:{x:e[t+"X"],y:e[t+"Y"]}}}const u6=e=>t=>_2(t)&&e(t,zl(t));function an(e,t,n,r){return on(e,t,u6(n),r)}const c6=(e,t)=>n=>t(e(n)),Vn=(...e)=>e.reduce(c6);function L2(e){let t=null;return()=>{const n=()=>{t=null};return t===null?(t=e,n):!1}}const Gh=L2("dragHorizontal"),Uh=L2("dragVertical");function z2(e){let t=!1;if(e==="y")t=Uh();else if(e==="x")t=Gh();else{const n=Gh(),r=Uh();n&&r?t=()=>{n(),r()}:(n&&n(),r&&r())}return t}function M2(){const e=z2(!0);return e?(e(),!1):!0}class Zn{constructor(t){this.isMounted=!1,this.node=t}update(){}}function Hh(e,t){const n="pointer"+(t?"enter":"leave"),r="onHover"+(t?"Start":"End"),o=(i,s)=>{if(i.type==="touch"||M2())return;const a=e.getProps();e.animationState&&a.whileHover&&e.animationState.setActive("whileHover",t),a[r]&&X.update(()=>a[r](i,s))};return an(e.current,n,o,{passive:!e.getProps()[r]})}class d6 extends Zn{mount(){this.unmount=Vn(Hh(this.node,!0),Hh(this.node,!1))}unmount(){}}class f6 extends Zn{constructor(){super(...arguments),this.isActive=!1}onFocus(){let t=!1;try{t=this.node.current.matches(":focus-visible")}catch{t=!0}!t||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Vn(on(this.node.current,"focus",()=>this.onFocus()),on(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}const I2=(e,t)=>t?e===t?!0:I2(e,t.parentElement):!1;function ku(e,t){if(!t)return;const n=new PointerEvent("pointer"+e);t(n,zl(n))}class p6 extends Zn{constructor(){super(...arguments),this.removeStartListeners=pe,this.removeEndListeners=pe,this.removeAccessibleListeners=pe,this.startPointerPress=(t,n)=>{if(this.removeEndListeners(),this.isPressing)return;const r=this.node.getProps(),i=an(window,"pointerup",(a,l)=>{if(!this.checkPressEnd())return;const{onTap:c,onTapCancel:d}=this.node.getProps();X.update(()=>{I2(this.node.current,a.target)?c&&c(a,l):d&&d(a,l)})},{passive:!(r.onTap||r.onPointerUp)}),s=an(window,"pointercancel",(a,l)=>this.cancelPress(a,l),{passive:!(r.onTapCancel||r.onPointerCancel)});this.removeEndListeners=Vn(i,s),this.startPress(t,n)},this.startAccessiblePress=()=>{const t=i=>{if(i.key!=="Enter"||this.isPressing)return;const s=a=>{a.key!=="Enter"||!this.checkPressEnd()||ku("up",(l,c)=>{const{onTap:d}=this.node.getProps();d&&X.update(()=>d(l,c))})};this.removeEndListeners(),this.removeEndListeners=on(this.node.current,"keyup",s),ku("down",(a,l)=>{this.startPress(a,l)})},n=on(this.node.current,"keydown",t),r=()=>{this.isPressing&&ku("cancel",(i,s)=>this.cancelPress(i,s))},o=on(this.node.current,"blur",r);this.removeAccessibleListeners=Vn(n,o)}}startPress(t,n){this.isPressing=!0;const{onTapStart:r,whileTap:o}=this.node.getProps();o&&this.node.animationState&&this.node.animationState.setActive("whileTap",!0),r&&X.update(()=>r(t,n))}checkPressEnd(){return this.removeEndListeners(),this.isPressing=!1,this.node.getProps().whileTap&&this.node.animationState&&this.node.animationState.setActive("whileTap",!1),!M2()}cancelPress(t,n){if(!this.checkPressEnd())return;const{onTapCancel:r}=this.node.getProps();r&&X.update(()=>r(t,n))}mount(){const t=this.node.getProps(),n=an(this.node.current,"pointerdown",this.startPointerPress,{passive:!(t.onTapStart||t.onPointerStart)}),r=on(this.node.current,"focus",this.startAccessiblePress);this.removeStartListeners=Vn(n,r)}unmount(){this.removeStartListeners(),this.removeEndListeners(),this.removeAccessibleListeners()}}const Kc=new WeakMap,Eu=new WeakMap,h6=e=>{const t=Kc.get(e.target);t&&t(e)},m6=e=>{e.forEach(h6)};function g6({root:e,...t}){const n=e||document;Eu.has(n)||Eu.set(n,{});const r=Eu.get(n),o=JSON.stringify(t);return r[o]||(r[o]=new IntersectionObserver(m6,{root:e,...t})),r[o]}function v6(e,t,n){const r=g6(t);return Kc.set(e,n),r.observe(e),()=>{Kc.delete(e),r.unobserve(e)}}const y6={some:0,all:1};class x6 extends Zn{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:t={}}=this.node.getProps(),{root:n,margin:r,amount:o="some",once:i}=t,s={root:n?n.current:void 0,rootMargin:r,threshold:typeof o=="number"?o:y6[o]},a=l=>{const{isIntersecting:c}=l;if(this.isInView===c||(this.isInView=c,i&&!c&&this.hasEnteredView))return;c&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",c);const{onViewportEnter:d,onViewportLeave:f}=this.node.getProps(),p=c?d:f;p&&p(l)};return v6(this.node.current,s,a)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:t,prevProps:n}=this.node;["amount","margin","root"].some(w6(t,n))&&this.startObserver()}unmount(){}}function w6({viewport:e={}},{viewport:t={}}={}){return n=>e[n]!==t[n]}const C6={inView:{Feature:x6},tap:{Feature:p6},focus:{Feature:f6},hover:{Feature:d6}};function D2(e,t){if(!Array.isArray(t))return!1;const n=t.length;if(n!==e.length)return!1;for(let r=0;r<n;r++)if(t[r]!==e[r])return!1;return!0}function S6(e){const t={};return e.values.forEach((n,r)=>t[r]=n.get()),t}function j6(e){const t={};return e.values.forEach((n,r)=>t[r]=n.getVelocity()),t}function Ml(e,t,n){const r=e.getProps();return Ff(r,t,n!==void 0?n:r.custom,S6(e),j6(e))}let O2=pe,Il=pe;const Bn=e=>e*1e3,Wt=e=>e/1e3,P6={current:!1},N2=e=>Array.isArray(e)&&typeof e[0]=="number";function F2(e){return!!(!e||typeof e=="string"&&V2[e]||N2(e)||Array.isArray(e)&&e.every(F2))}const Yo=([e,t,n,r])=>`cubic-bezier(${e}, ${t}, ${n}, ${r})`,V2={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Yo([0,.65,.55,1]),circOut:Yo([.55,0,1,.45]),backIn:Yo([.31,.01,.66,-.59]),backOut:Yo([.33,1.53,.69,.99])};function B2(e){if(e)return N2(e)?Yo(e):Array.isArray(e)?e.map(B2):V2[e]}function k6(e,t,n,{delay:r=0,duration:o,repeat:i=0,repeatType:s="loop",ease:a,times:l}={}){const c={[t]:n};l&&(c.offset=l);const d=B2(a);return Array.isArray(d)&&(c.easing=d),e.animate(c,{delay:r,duration:o,easing:Array.isArray(d)?"linear":d,fill:"both",iterations:i+1,direction:s==="reverse"?"alternate":"normal"})}function E6(e,{repeat:t,repeatType:n="loop"}){const r=t&&n!=="loop"&&t%2===1?0:e.length-1;return e[r]}const $2=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e,T6=1e-7,b6=12;function R6(e,t,n,r,o){let i,s,a=0;do s=t+(n-t)/2,i=$2(s,r,o)-e,i>0?n=s:t=s;while(Math.abs(i)>T6&&++a<b6);return s}function cs(e,t,n,r){if(e===t&&n===r)return pe;const o=i=>R6(i,0,1,e,n);return i=>i===0||i===1?i:$2(o(i),t,r)}const A6=cs(.42,0,1,1),_6=cs(0,0,.58,1),G2=cs(.42,0,.58,1),L6=e=>Array.isArray(e)&&typeof e[0]!="number",U2=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,H2=e=>t=>1-e(1-t),Vf=e=>1-Math.sin(Math.acos(e)),W2=H2(Vf),z6=U2(Vf),Q2=cs(.33,1.53,.69,.99),Bf=H2(Q2),M6=U2(Bf),I6=e=>(e*=2)<1?.5*Bf(e):.5*(2-Math.pow(2,-10*(e-1))),D6={linear:pe,easeIn:A6,easeInOut:G2,easeOut:_6,circIn:Vf,circInOut:z6,circOut:W2,backIn:Bf,backInOut:M6,backOut:Q2,anticipate:I6},Wh=e=>{if(Array.isArray(e)){Il(e.length===4);const[t,n,r,o]=e;return cs(t,n,r,o)}else if(typeof e=="string")return D6[e];return e},$f=(e,t)=>n=>!!(as(n)&&Nx.test(n)&&n.startsWith(e)||t&&Object.prototype.hasOwnProperty.call(n,t)),q2=(e,t,n)=>r=>{if(!as(r))return r;const[o,i,s,a]=r.match(Ll);return{[e]:parseFloat(o),[t]:parseFloat(i),[n]:parseFloat(s),alpha:a!==void 0?parseFloat(a):1}},O6=e=>Wn(0,255,e),Tu={...br,transform:e=>Math.round(O6(e))},fr={test:$f("rgb","red"),parse:q2("red","green","blue"),transform:({red:e,green:t,blue:n,alpha:r=1})=>"rgba("+Tu.transform(e)+", "+Tu.transform(t)+", "+Tu.transform(n)+", "+ci(ui.transform(r))+")"};function N6(e){let t="",n="",r="",o="";return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),r=e.substring(5,7),o=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),r=e.substring(3,4),o=e.substring(4,5),t+=t,n+=n,r+=r,o+=o),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:o?parseInt(o,16)/255:1}}const Yc={test:$f("#"),parse:N6,transform:fr.transform},Qr={test:$f("hsl","hue"),parse:q2("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:n,alpha:r=1})=>"hsla("+Math.round(e)+", "+Ht.transform(ci(t))+", "+Ht.transform(ci(n))+", "+ci(ui.transform(r))+")"},Ve={test:e=>fr.test(e)||Yc.test(e)||Qr.test(e),parse:e=>fr.test(e)?fr.parse(e):Qr.test(e)?Qr.parse(e):Yc.parse(e),transform:e=>as(e)?e:e.hasOwnProperty("red")?fr.transform(e):Qr.transform(e)},ue=(e,t,n)=>-n*e+n*t+e;function bu(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function F6({hue:e,saturation:t,lightness:n,alpha:r}){e/=360,t/=100,n/=100;let o=0,i=0,s=0;if(!t)o=i=s=n;else{const a=n<.5?n*(1+t):n+t-n*t,l=2*n-a;o=bu(l,a,e+1/3),i=bu(l,a,e),s=bu(l,a,e-1/3)}return{red:Math.round(o*255),green:Math.round(i*255),blue:Math.round(s*255),alpha:r}}const Ru=(e,t,n)=>{const r=e*e;return Math.sqrt(Math.max(0,n*(t*t-r)+r))},V6=[Yc,fr,Qr],B6=e=>V6.find(t=>t.test(e));function Qh(e){const t=B6(e);let n=t.parse(e);return t===Qr&&(n=F6(n)),n}const K2=(e,t)=>{const n=Qh(e),r=Qh(t),o={...n};return i=>(o.red=Ru(n.red,r.red,i),o.green=Ru(n.green,r.green,i),o.blue=Ru(n.blue,r.blue,i),o.alpha=ue(n.alpha,r.alpha,i),fr.transform(o))};function $6(e){var t,n;return isNaN(e)&&as(e)&&(((t=e.match(Ll))===null||t===void 0?void 0:t.length)||0)+(((n=e.match(C2))===null||n===void 0?void 0:n.length)||0)>0}const Y2={regex:Dx,countKey:"Vars",token:"${v}",parse:pe},X2={regex:C2,countKey:"Colors",token:"${c}",parse:Ve.parse},Z2={regex:Ll,countKey:"Numbers",token:"${n}",parse:br.parse};function Au(e,{regex:t,countKey:n,token:r,parse:o}){const i=e.tokenised.match(t);i&&(e["num"+n]=i.length,e.tokenised=e.tokenised.replace(t,r),e.values.push(...i.map(o)))}function qa(e){const t=e.toString(),n={value:t,tokenised:t,values:[],numVars:0,numColors:0,numNumbers:0};return n.value.includes("var(--")&&Au(n,Y2),Au(n,X2),Au(n,Z2),n}function J2(e){return qa(e).values}function ev(e){const{values:t,numColors:n,numVars:r,tokenised:o}=qa(e),i=t.length;return s=>{let a=o;for(let l=0;l<i;l++)l<r?a=a.replace(Y2.token,s[l]):l<r+n?a=a.replace(X2.token,Ve.transform(s[l])):a=a.replace(Z2.token,ci(s[l]));return a}}const G6=e=>typeof e=="number"?0:e;function U6(e){const t=J2(e);return ev(e)(t.map(G6))}const Qn={test:$6,parse:J2,createTransformer:ev,getAnimatableNone:U6},tv=(e,t)=>n=>`${n>0?t:e}`;function nv(e,t){return typeof e=="number"?n=>ue(e,t,n):Ve.test(e)?K2(e,t):e.startsWith("var(")?tv(e,t):ov(e,t)}const rv=(e,t)=>{const n=[...e],r=n.length,o=e.map((i,s)=>nv(i,t[s]));return i=>{for(let s=0;s<r;s++)n[s]=o[s](i);return n}},H6=(e,t)=>{const n={...e,...t},r={};for(const o in n)e[o]!==void 0&&t[o]!==void 0&&(r[o]=nv(e[o],t[o]));return o=>{for(const i in r)n[i]=r[i](o);return n}},ov=(e,t)=>{const n=Qn.createTransformer(t),r=qa(e),o=qa(t);return r.numVars===o.numVars&&r.numColors===o.numColors&&r.numNumbers>=o.numNumbers?Vn(rv(r.values,o.values),n):tv(e,t)},go=(e,t,n)=>{const r=t-e;return r===0?1:(n-e)/r},qh=(e,t)=>n=>ue(e,t,n);function W6(e){return typeof e=="number"?qh:typeof e=="string"?Ve.test(e)?K2:ov:Array.isArray(e)?rv:typeof e=="object"?H6:qh}function Q6(e,t,n){const r=[],o=n||W6(e[0]),i=e.length-1;for(let s=0;s<i;s++){let a=o(e[s],e[s+1]);if(t){const l=Array.isArray(t)?t[s]||pe:t;a=Vn(l,a)}r.push(a)}return r}function Gf(e,t,{clamp:n=!0,ease:r,mixer:o}={}){const i=e.length;if(Il(i===t.length),i===1)return()=>t[0];e[0]>e[i-1]&&(e=[...e].reverse(),t=[...t].reverse());const s=Q6(t,r,o),a=s.length,l=c=>{let d=0;if(a>1)for(;d<e.length-2&&!(c<e[d+1]);d++);const f=go(e[d],e[d+1],c);return s[d](f)};return n?c=>l(Wn(e[0],e[i-1],c)):l}function q6(e,t){const n=e[e.length-1];for(let r=1;r<=t;r++){const o=go(0,t,r);e.push(ue(n,1,o))}}function iv(e){const t=[0];return q6(t,e.length-1),t}function K6(e,t){return e.map(n=>n*t)}function Y6(e,t){return e.map(()=>t||G2).splice(0,e.length-1)}function Ka({duration:e=300,keyframes:t,times:n,ease:r="easeInOut"}){const o=L6(r)?r.map(Wh):Wh(r),i={done:!1,value:t[0]},s=K6(n&&n.length===t.length?n:iv(t),e),a=Gf(s,t,{ease:Array.isArray(o)?o:Y6(t,o)});return{calculatedDuration:e,next:l=>(i.value=a(l),i.done=l>=e,i)}}function Uf(e,t){return t?e*(1e3/t):0}const X6=5;function sv(e,t,n){const r=Math.max(t-X6,0);return Uf(n-e(r),t-r)}const _u=.001,Z6=.01,Kh=10,J6=.05,e8=1;function t8({duration:e=800,bounce:t=.25,velocity:n=0,mass:r=1}){let o,i;O2(e<=Bn(Kh));let s=1-t;s=Wn(J6,e8,s),e=Wn(Z6,Kh,Wt(e)),s<1?(o=c=>{const d=c*s,f=d*e,p=d-n,m=Xc(c,s),y=Math.exp(-f);return _u-p/m*y},i=c=>{const f=c*s*e,p=f*n+n,m=Math.pow(s,2)*Math.pow(c,2)*e,y=Math.exp(-f),x=Xc(Math.pow(c,2),s);return(-o(c)+_u>0?-1:1)*((p-m)*y)/x}):(o=c=>{const d=Math.exp(-c*e),f=(c-n)*e+1;return-_u+d*f},i=c=>{const d=Math.exp(-c*e),f=(n-c)*(e*e);return d*f});const a=5/e,l=r8(o,i,a);if(e=Bn(e),isNaN(l))return{stiffness:100,damping:10,duration:e};{const c=Math.pow(l,2)*r;return{stiffness:c,damping:s*2*Math.sqrt(r*c),duration:e}}}const n8=12;function r8(e,t,n){let r=n;for(let o=1;o<n8;o++)r=r-e(r)/t(r);return r}function Xc(e,t){return e*Math.sqrt(1-t*t)}const o8=["duration","bounce"],i8=["stiffness","damping","mass"];function Yh(e,t){return t.some(n=>e[n]!==void 0)}function s8(e){let t={velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1,...e};if(!Yh(e,i8)&&Yh(e,o8)){const n=t8(e);t={...t,...n,velocity:0,mass:1},t.isResolvedFromDuration=!0}return t}function av({keyframes:e,restDelta:t,restSpeed:n,...r}){const o=e[0],i=e[e.length-1],s={done:!1,value:o},{stiffness:a,damping:l,mass:c,velocity:d,duration:f,isResolvedFromDuration:p}=s8(r),m=d?-Wt(d):0,y=l/(2*Math.sqrt(a*c)),x=i-o,S=Wt(Math.sqrt(a/c)),v=Math.abs(x)<5;n||(n=v?.01:2),t||(t=v?.005:.5);let h;if(y<1){const g=Xc(S,y);h=w=>{const j=Math.exp(-y*S*w);return i-j*((m+y*S*x)/g*Math.sin(g*w)+x*Math.cos(g*w))}}else if(y===1)h=g=>i-Math.exp(-S*g)*(x+(m+S*x)*g);else{const g=S*Math.sqrt(y*y-1);h=w=>{const j=Math.exp(-y*S*w),P=Math.min(g*w,300);return i-j*((m+y*S*x)*Math.sinh(P)+g*x*Math.cosh(P))/g}}return{calculatedDuration:p&&f||null,next:g=>{const w=h(g);if(p)s.done=g>=f;else{let j=m;g!==0&&(y<1?j=sv(h,g,w):j=0);const P=Math.abs(j)<=n,k=Math.abs(i-w)<=t;s.done=P&&k}return s.value=s.done?i:w,s}}}function Xh({keyframes:e,velocity:t=0,power:n=.8,timeConstant:r=325,bounceDamping:o=10,bounceStiffness:i=500,modifyTarget:s,min:a,max:l,restDelta:c=.5,restSpeed:d}){const f=e[0],p={done:!1,value:f},m=E=>a!==void 0&&E<a||l!==void 0&&E>l,y=E=>a===void 0?l:l===void 0||Math.abs(a-E)<Math.abs(l-E)?a:l;let x=n*t;const S=f+x,v=s===void 0?S:s(S);v!==S&&(x=v-f);const h=E=>-x*Math.exp(-E/r),g=E=>v+h(E),w=E=>{const R=h(E),_=g(E);p.done=Math.abs(R)<=c,p.value=p.done?v:_};let j,P;const k=E=>{m(p.value)&&(j=E,P=av({keyframes:[p.value,y(p.value)],velocity:sv(g,E,p.value),damping:o,stiffness:i,restDelta:c,restSpeed:d}))};return k(0),{calculatedDuration:null,next:E=>{let R=!1;return!P&&j===void 0&&(R=!0,w(E),k(E)),j!==void 0&&E>j?P.next(E-j):(!R&&w(E),p)}}}const a8=e=>{const t=({timestamp:n})=>e(n);return{start:()=>X.update(t,!0),stop:()=>Qt(t),now:()=>Se.isProcessing?Se.timestamp:performance.now()}},Zh=2e4;function Jh(e){let t=0;const n=50;let r=e.next(t);for(;!r.done&&t<Zh;)t+=n,r=e.next(t);return t>=Zh?1/0:t}const l8={decay:Xh,inertia:Xh,tween:Ka,keyframes:Ka,spring:av};function Bi({autoplay:e=!0,delay:t=0,driver:n=a8,keyframes:r,type:o="keyframes",repeat:i=0,repeatDelay:s=0,repeatType:a="loop",onPlay:l,onStop:c,onComplete:d,onUpdate:f,...p}){let m=1,y=!1,x,S;const v=()=>{S=new Promise(M=>{x=M})};v();let h;const g=l8[o]||Ka;let w;g!==Ka&&typeof r[0]!="number"&&(w=Gf([0,100],r,{clamp:!1}),r=[0,100]);const j=g({...p,keyframes:r});let P;a==="mirror"&&(P=g({...p,keyframes:[...r].reverse(),velocity:-(p.velocity||0)}));let k="idle",E=null,R=null,_=null;j.calculatedDuration===null&&i&&(j.calculatedDuration=Jh(j));const{calculatedDuration:I}=j;let G=1/0,U=1/0;I!==null&&(G=I+s,U=G*(i+1)-s);let B=0;const q=M=>{if(R===null)return;m>0&&(R=Math.min(R,M)),m<0&&(R=Math.min(M-U/m,R)),E!==null?B=E:B=Math.round(M-R)*m;const te=B-t*(m>=0?1:-1),Pt=m>=0?te<0:te>U;B=Math.max(te,0),k==="finished"&&E===null&&(B=U);let Fe=B,ft=j;if(i){const Jn=B/G;let Yt=Math.floor(Jn),Le=Jn%1;!Le&&Jn>=1&&(Le=1),Le===1&&Yt--,Yt=Math.min(Yt,i+1);const xp=!!(Yt%2);xp&&(a==="reverse"?(Le=1-Le,s&&(Le-=s/G)):a==="mirror"&&(ft=P));let wp=Wn(0,1,Le);B>U&&(wp=a==="reverse"&&xp?1:0),Fe=wp*G}const ke=Pt?{done:!1,value:r[0]}:ft.next(Fe);w&&(ke.value=w(ke.value));let{done:tt}=ke;!Pt&&I!==null&&(tt=m>=0?B>=U:B<=0);const Kt=E===null&&(k==="finished"||k==="running"&&tt);return f&&f(ke.value),Kt&&A(),ke},ee=()=>{h&&h.stop(),h=void 0},se=()=>{k="idle",ee(),x(),v(),R=_=null},A=()=>{k="finished",d&&d(),ee(),x()},z=()=>{if(y)return;h||(h=n(q));const M=h.now();l&&l(),E!==null?R=M-E:(!R||k==="finished")&&(R=M),k==="finished"&&v(),_=R,E=null,k="running",h.start()};e&&z();const O={then(M,te){return S.then(M,te)},get time(){return Wt(B)},set time(M){M=Bn(M),B=M,E!==null||!h||m===0?E=M:R=h.now()-M/m},get duration(){const M=j.calculatedDuration===null?Jh(j):j.calculatedDuration;return Wt(M)},get speed(){return m},set speed(M){M===m||!h||(m=M,O.time=Wt(B))},get state(){return k},play:z,pause:()=>{k="paused",E=B},stop:()=>{y=!0,k!=="idle"&&(k="idle",c&&c(),se())},cancel:()=>{_!==null&&q(_),se()},complete:()=>{k="finished"},sample:M=>(R=0,q(M))};return O}function u8(e){let t;return()=>(t===void 0&&(t=e()),t)}const c8=u8(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),d8=new Set(["opacity","clipPath","filter","transform","backgroundColor"]),Is=10,f8=2e4,p8=(e,t)=>t.type==="spring"||e==="backgroundColor"||!F2(t.ease);function h8(e,t,{onUpdate:n,onComplete:r,...o}){if(!(c8()&&d8.has(t)&&!o.repeatDelay&&o.repeatType!=="mirror"&&o.damping!==0&&o.type!=="inertia"))return!1;let s=!1,a,l;const c=()=>{l=new Promise(h=>{a=h})};c();let{keyframes:d,duration:f=300,ease:p,times:m}=o;if(p8(t,o)){const h=Bi({...o,repeat:0,delay:0});let g={done:!1,value:d[0]};const w=[];let j=0;for(;!g.done&&j<f8;)g=h.sample(j),w.push(g.value),j+=Is;m=void 0,d=w,f=j-Is,p="linear"}const y=k6(e.owner.current,t,d,{...o,duration:f,ease:p,times:m}),x=()=>y.cancel(),S=()=>{X.update(x),a(),c()};return y.onfinish=()=>{e.set(E6(d,o)),r&&r(),S()},{then(h,g){return l.then(h,g)},attachTimeline(h){return y.timeline=h,y.onfinish=null,pe},get time(){return Wt(y.currentTime||0)},set time(h){y.currentTime=Bn(h)},get speed(){return y.playbackRate},set speed(h){y.playbackRate=h},get duration(){return Wt(f)},play:()=>{s||(y.play(),Qt(x))},pause:()=>y.pause(),stop:()=>{if(s=!0,y.playState==="idle")return;const{currentTime:h}=y;if(h){const g=Bi({...o,autoplay:!1});e.setWithVelocity(g.sample(h-Is).value,g.sample(h).value,Is)}S()},complete:()=>y.finish(),cancel:S}}function m8({keyframes:e,delay:t,onUpdate:n,onComplete:r}){const o=()=>(n&&n(e[e.length-1]),r&&r(),{time:0,speed:1,duration:0,play:pe,pause:pe,stop:pe,then:i=>(i(),Promise.resolve()),cancel:pe,complete:pe});return t?Bi({keyframes:[0,1],duration:0,delay:t,onComplete:o}):o()}const g8={type:"spring",stiffness:500,damping:25,restSpeed:10},v8=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),y8={type:"keyframes",duration:.8},x8={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},w8=(e,{keyframes:t})=>t.length>2?y8:Tr.has(e)?e.startsWith("scale")?v8(t[1]):g8:x8,Zc=(e,t)=>e==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&(Qn.test(t)||t==="0")&&!t.startsWith("url(")),C8=new Set(["brightness","contrast","saturate","opacity"]);function S8(e){const[t,n]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[r]=n.match(Ll)||[];if(!r)return e;const o=n.replace(r,"");let i=C8.has(t)?1:0;return r!==n&&(i*=100),t+"("+i+o+")"}const j8=/([a-z-]*)\(.*?\)/g,Jc={...Qn,getAnimatableNone:e=>{const t=e.match(j8);return t?t.map(S8).join(" "):e}},P8={...S2,color:Ve,backgroundColor:Ve,outlineColor:Ve,fill:Ve,stroke:Ve,borderColor:Ve,borderTopColor:Ve,borderRightColor:Ve,borderBottomColor:Ve,borderLeftColor:Ve,filter:Jc,WebkitFilter:Jc},Hf=e=>P8[e];function lv(e,t){let n=Hf(e);return n!==Jc&&(n=Qn),n.getAnimatableNone?n.getAnimatableNone(t):void 0}const uv=e=>/^0[^.\s]+$/.test(e);function k8(e){if(typeof e=="number")return e===0;if(e!==null)return e==="none"||e==="0"||uv(e)}function E8(e,t,n,r){const o=Zc(t,n);let i;Array.isArray(n)?i=[...n]:i=[null,n];const s=r.from!==void 0?r.from:e.get();let a;const l=[];for(let c=0;c<i.length;c++)i[c]===null&&(i[c]=c===0?s:i[c-1]),k8(i[c])&&l.push(c),typeof i[c]=="string"&&i[c]!=="none"&&i[c]!=="0"&&(a=i[c]);if(o&&l.length&&a)for(let c=0;c<l.length;c++){const d=l[c];i[d]=lv(t,a)}return i}function T8({when:e,delay:t,delayChildren:n,staggerChildren:r,staggerDirection:o,repeat:i,repeatType:s,repeatDelay:a,from:l,elapsed:c,...d}){return!!Object.keys(d).length}function Wf(e,t){return e[t]||e.default||e}const Qf=(e,t,n,r={})=>o=>{const i=Wf(r,e)||{},s=i.delay||r.delay||0;let{elapsed:a=0}=r;a=a-Bn(s);const l=E8(t,e,n,i),c=l[0],d=l[l.length-1],f=Zc(e,c),p=Zc(e,d);let m={keyframes:l,velocity:t.getVelocity(),ease:"easeOut",...i,delay:-a,onUpdate:y=>{t.set(y),i.onUpdate&&i.onUpdate(y)},onComplete:()=>{o(),i.onComplete&&i.onComplete()}};if(T8(i)||(m={...m,...w8(e,m)}),m.duration&&(m.duration=Bn(m.duration)),m.repeatDelay&&(m.repeatDelay=Bn(m.repeatDelay)),!f||!p||P6.current||i.type===!1)return m8(m);if(!r.isHandoff&&t.owner&&t.owner.current instanceof HTMLElement&&!t.owner.getProps().onUpdate){const y=h8(t,e,m);if(y)return y}return Bi(m)};function Ya(e){return!!(Ne(e)&&e.add)}const cv=e=>/^\-?\d*\.?\d+$/.test(e);function qf(e,t){e.indexOf(t)===-1&&e.push(t)}function Kf(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}class Yf{constructor(){this.subscriptions=[]}add(t){return qf(this.subscriptions,t),()=>Kf(this.subscriptions,t)}notify(t,n,r){const o=this.subscriptions.length;if(o)if(o===1)this.subscriptions[0](t,n,r);else for(let i=0;i<o;i++){const s=this.subscriptions[i];s&&s(t,n,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const b8=e=>!isNaN(parseFloat(e));class R8{constructor(t,n={}){this.version="10.16.16",this.timeDelta=0,this.lastUpdated=0,this.canTrackVelocity=!1,this.events={},this.updateAndNotify=(r,o=!0)=>{this.prev=this.current,this.current=r;const{delta:i,timestamp:s}=Se;this.lastUpdated!==s&&(this.timeDelta=i,this.lastUpdated=s,X.postRender(this.scheduleVelocityCheck)),this.prev!==this.current&&this.events.change&&this.events.change.notify(this.current),this.events.velocityChange&&this.events.velocityChange.notify(this.getVelocity()),o&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.scheduleVelocityCheck=()=>X.postRender(this.velocityCheck),this.velocityCheck=({timestamp:r})=>{r!==this.lastUpdated&&(this.prev=this.current,this.events.velocityChange&&this.events.velocityChange.notify(this.getVelocity()))},this.hasAnimated=!1,this.prev=this.current=t,this.canTrackVelocity=b8(this.current),this.owner=n.owner}onChange(t){return this.on("change",t)}on(t,n){this.events[t]||(this.events[t]=new Yf);const r=this.events[t].add(n);return t==="change"?()=>{r(),X.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(const t in this.events)this.events[t].clear()}attach(t,n){this.passiveEffect=t,this.stopPassiveEffect=n}set(t,n=!0){!n||!this.passiveEffect?this.updateAndNotify(t,n):this.passiveEffect(t,this.updateAndNotify)}setWithVelocity(t,n,r){this.set(n),this.prev=t,this.timeDelta=r}jump(t){this.updateAndNotify(t),this.prev=t,this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){return this.canTrackVelocity?Uf(parseFloat(this.current)-parseFloat(this.prev),this.timeDelta):0}start(t){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=t(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function At(e,t){return new R8(e,t)}const dv=e=>t=>t.test(e),A8={test:e=>e==="auto",parse:e=>e},fv=[br,D,Ht,mn,Vx,Fx,A8],Vo=e=>fv.find(dv(e)),_8=[...fv,Ve,Qn],L8=e=>_8.find(dv(e));function z8(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,At(n))}function Xf(e,t){const n=Ml(e,t);let{transitionEnd:r={},transition:o={},...i}=n?e.makeTargetAnimatable(n,!1):{};i={...i,...r};for(const s in i){const a=e6(i[s]);z8(e,s,a)}}function ed(e,t){[...t].reverse().forEach(r=>{const o=e.getVariant(r);o&&Xf(e,o),e.variantChildren&&e.variantChildren.forEach(i=>{ed(i,t)})})}function M8(e,t){if(Array.isArray(t))return ed(e,t);if(typeof t=="string")return ed(e,[t]);Xf(e,t)}function I8(e,t,n){var r,o;const i=Object.keys(t).filter(a=>!e.hasValue(a)),s=i.length;if(s)for(let a=0;a<s;a++){const l=i[a],c=t[l];let d=null;Array.isArray(c)&&(d=c[0]),d===null&&(d=(o=(r=n[l])!==null&&r!==void 0?r:e.readValue(l))!==null&&o!==void 0?o:t[l]),d!=null&&(typeof d=="string"&&(cv(d)||uv(d))?d=parseFloat(d):!L8(d)&&Qn.test(c)&&(d=lv(l,c)),e.addValue(l,At(d,{owner:e})),n[l]===void 0&&(n[l]=d),d!==null&&e.setBaseTarget(l,d))}}function D8(e,t){return t?(t[e]||t.default||t).from:void 0}function O8(e,t,n){const r={};for(const o in e){const i=D8(o,t);if(i!==void 0)r[o]=i;else{const s=n.getValue(o);s&&(r[o]=s.get())}}return r}function N8({protectedKeys:e,needsAnimating:t},n){const r=e.hasOwnProperty(n)&&t[n]!==!0;return t[n]=!1,r}function F8(e,t){const n=e.get();if(Array.isArray(t)){for(let r=0;r<t.length;r++)if(t[r]!==n)return!0}else return n!==t}function pv(e,t,{delay:n=0,transitionOverride:r,type:o}={}){let{transition:i=e.getDefaultTransition(),transitionEnd:s,...a}=e.makeTargetAnimatable(t);const l=e.getValue("willChange");r&&(i=r);const c=[],d=o&&e.animationState&&e.animationState.getState()[o];for(const f in a){const p=e.getValue(f),m=a[f];if(!p||m===void 0||d&&N8(d,f))continue;const y={delay:n,elapsed:0,...Wf(i||{},f)};if(window.HandoffAppearAnimations){const v=e.getProps()[m2];if(v){const h=window.HandoffAppearAnimations(v,f,p,X);h!==null&&(y.elapsed=h,y.isHandoff=!0)}}let x=!y.isHandoff&&!F8(p,m);if(y.type==="spring"&&(p.getVelocity()||y.velocity)&&(x=!1),p.animation&&(x=!1),x)continue;p.start(Qf(f,p,m,e.shouldReduceMotion&&Tr.has(f)?{type:!1}:y));const S=p.animation;Ya(l)&&(l.add(f),S.then(()=>l.remove(f))),c.push(S)}return s&&Promise.all(c).then(()=>{s&&Xf(e,s)}),c}function td(e,t,n={}){const r=Ml(e,t,n.custom);let{transition:o=e.getDefaultTransition()||{}}=r||{};n.transitionOverride&&(o=n.transitionOverride);const i=r?()=>Promise.all(pv(e,r,n)):()=>Promise.resolve(),s=e.variantChildren&&e.variantChildren.size?(l=0)=>{const{delayChildren:c=0,staggerChildren:d,staggerDirection:f}=o;return V8(e,t,c+l,d,f,n)}:()=>Promise.resolve(),{when:a}=o;if(a){const[l,c]=a==="beforeChildren"?[i,s]:[s,i];return l().then(()=>c())}else return Promise.all([i(),s(n.delay)])}function V8(e,t,n=0,r=0,o=1,i){const s=[],a=(e.variantChildren.size-1)*r,l=o===1?(c=0)=>c*r:(c=0)=>a-c*r;return Array.from(e.variantChildren).sort(B8).forEach((c,d)=>{c.notify("AnimationStart",t),s.push(td(c,t,{...i,delay:n+l(d)}).then(()=>c.notify("AnimationComplete",t)))}),Promise.all(s)}function B8(e,t){return e.sortNodePosition(t)}function hv(e,t,n={}){e.notify("AnimationStart",t);let r;if(Array.isArray(t)){const o=t.map(i=>td(e,i,n));r=Promise.all(o)}else if(typeof t=="string")r=td(e,t,n);else{const o=typeof t=="function"?Ml(e,t,n.custom):t;r=Promise.all(pv(e,o,n))}return r.then(()=>e.notify("AnimationComplete",t))}const $8=[...Af].reverse(),G8=Af.length;function U8(e){return t=>Promise.all(t.map(({animation:n,options:r})=>hv(e,n,r)))}function H8(e){let t=U8(e);const n=Q8();let r=!0;const o=(l,c)=>{const d=Ml(e,c);if(d){const{transition:f,transitionEnd:p,...m}=d;l={...l,...m,...p}}return l};function i(l){t=l(e)}function s(l,c){const d=e.getProps(),f=e.getVariantContext(!0)||{},p=[],m=new Set;let y={},x=1/0;for(let v=0;v<G8;v++){const h=$8[v],g=n[h],w=d[h]!==void 0?d[h]:f[h],j=Fi(w),P=h===c?g.isActive:null;P===!1&&(x=v);let k=w===f[h]&&w!==d[h]&&j;if(k&&r&&e.manuallyAnimateOnMount&&(k=!1),g.protectedKeys={...y},!g.isActive&&P===null||!w&&!g.prevProp||Al(w)||typeof w=="boolean")continue;const E=W8(g.prevProp,w);let R=E||h===c&&g.isActive&&!k&&j||v>x&&j;const _=Array.isArray(w)?w:[w];let I=_.reduce(o,{});P===!1&&(I={});const{prevResolvedValues:G={}}=g,U={...G,...I},B=q=>{R=!0,m.delete(q),g.needsAnimating[q]=!0};for(const q in U){const ee=I[q],se=G[q];y.hasOwnProperty(q)||(ee!==se?Qa(ee)&&Qa(se)?!D2(ee,se)||E?B(q):g.protectedKeys[q]=!0:ee!==void 0?B(q):m.add(q):ee!==void 0&&m.has(q)?B(q):g.protectedKeys[q]=!0)}g.prevProp=w,g.prevResolvedValues=I,g.isActive&&(y={...y,...I}),r&&e.blockInitialAnimation&&(R=!1),R&&!k&&p.push(..._.map(q=>({animation:q,options:{type:h,...l}})))}if(m.size){const v={};m.forEach(h=>{const g=e.getBaseTarget(h);g!==void 0&&(v[h]=g)}),p.push({animation:v})}let S=!!p.length;return r&&(d.initial===!1||d.initial===d.animate)&&!e.manuallyAnimateOnMount&&(S=!1),r=!1,S?t(p):Promise.resolve()}function a(l,c,d){var f;if(n[l].isActive===c)return Promise.resolve();(f=e.variantChildren)===null||f===void 0||f.forEach(m=>{var y;return(y=m.animationState)===null||y===void 0?void 0:y.setActive(l,c)}),n[l].isActive=c;const p=s(d,l);for(const m in n)n[m].protectedKeys={};return p}return{animateChanges:s,setActive:a,setAnimateFunction:i,getState:()=>n}}function W8(e,t){return typeof t=="string"?t!==e:Array.isArray(t)?!D2(t,e):!1}function er(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function Q8(){return{animate:er(!0),whileInView:er(),whileHover:er(),whileTap:er(),whileDrag:er(),whileFocus:er(),exit:er()}}class q8 extends Zn{constructor(t){super(t),t.animationState||(t.animationState=H8(t))}updateAnimationControlsSubscription(){const{animate:t}=this.node.getProps();this.unmount(),Al(t)&&(this.unmount=t.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:t}=this.node.getProps(),{animate:n}=this.node.prevProps||{};t!==n&&this.updateAnimationControlsSubscription()}unmount(){}}let K8=0;class Y8 extends Zn{constructor(){super(...arguments),this.id=K8++}update(){if(!this.node.presenceContext)return;const{isPresent:t,onExitComplete:n,custom:r}=this.node.presenceContext,{isPresent:o}=this.node.prevPresenceContext||{};if(!this.node.animationState||t===o)return;const i=this.node.animationState.setActive("exit",!t,{custom:r??this.node.getProps().custom});n&&!t&&i.then(()=>n(this.id))}mount(){const{register:t}=this.node.presenceContext||{};t&&(this.unmount=t(this.id))}unmount(){}}const X8={animation:{Feature:q8},exit:{Feature:Y8}},e1=(e,t)=>Math.abs(e-t);function Z8(e,t){const n=e1(e.x,t.x),r=e1(e.y,t.y);return Math.sqrt(n**2+r**2)}class mv{constructor(t,n,{transformPagePoint:r,contextWindow:o}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const d=zu(this.lastMoveEventInfo,this.history),f=this.startEvent!==null,p=Z8(d.offset,{x:0,y:0})>=3;if(!f&&!p)return;const{point:m}=d,{timestamp:y}=Se;this.history.push({...m,timestamp:y});const{onStart:x,onMove:S}=this.handlers;f||(x&&x(this.lastMoveEvent,d),this.startEvent=this.lastMoveEvent),S&&S(this.lastMoveEvent,d)},this.handlePointerMove=(d,f)=>{this.lastMoveEvent=d,this.lastMoveEventInfo=Lu(f,this.transformPagePoint),X.update(this.updatePoint,!0)},this.handlePointerUp=(d,f)=>{if(this.end(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const{onEnd:p,onSessionEnd:m}=this.handlers,y=zu(d.type==="pointercancel"?this.lastMoveEventInfo:Lu(f,this.transformPagePoint),this.history);this.startEvent&&p&&p(d,y),m&&m(d,y)},!_2(t))return;this.handlers=n,this.transformPagePoint=r,this.contextWindow=o||window;const i=zl(t),s=Lu(i,this.transformPagePoint),{point:a}=s,{timestamp:l}=Se;this.history=[{...a,timestamp:l}];const{onSessionStart:c}=n;c&&c(t,zu(s,this.history)),this.removeListeners=Vn(an(this.contextWindow,"pointermove",this.handlePointerMove),an(this.contextWindow,"pointerup",this.handlePointerUp),an(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),Qt(this.updatePoint)}}function Lu(e,t){return t?{point:t(e.point)}:e}function t1(e,t){return{x:e.x-t.x,y:e.y-t.y}}function zu({point:e},t){return{point:e,delta:t1(e,gv(t)),offset:t1(e,J8(t)),velocity:e9(t,.1)}}function J8(e){return e[0]}function gv(e){return e[e.length-1]}function e9(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,r=null;const o=gv(e);for(;n>=0&&(r=e[n],!(o.timestamp-r.timestamp>Bn(t)));)n--;if(!r)return{x:0,y:0};const i=Wt(o.timestamp-r.timestamp);if(i===0)return{x:0,y:0};const s={x:(o.x-r.x)/i,y:(o.y-r.y)/i};return s.x===1/0&&(s.x=0),s.y===1/0&&(s.y=0),s}function ut(e){return e.max-e.min}function nd(e,t=0,n=.01){return Math.abs(e-t)<=n}function n1(e,t,n,r=.5){e.origin=r,e.originPoint=ue(t.min,t.max,e.origin),e.scale=ut(n)/ut(t),(nd(e.scale,1,1e-4)||isNaN(e.scale))&&(e.scale=1),e.translate=ue(n.min,n.max,e.origin)-e.originPoint,(nd(e.translate)||isNaN(e.translate))&&(e.translate=0)}function di(e,t,n,r){n1(e.x,t.x,n.x,r?r.originX:void 0),n1(e.y,t.y,n.y,r?r.originY:void 0)}function r1(e,t,n){e.min=n.min+t.min,e.max=e.min+ut(t)}function t9(e,t,n){r1(e.x,t.x,n.x),r1(e.y,t.y,n.y)}function o1(e,t,n){e.min=t.min-n.min,e.max=e.min+ut(t)}function fi(e,t,n){o1(e.x,t.x,n.x),o1(e.y,t.y,n.y)}function n9(e,{min:t,max:n},r){return t!==void 0&&e<t?e=r?ue(t,e,r.min):Math.max(e,t):n!==void 0&&e>n&&(e=r?ue(n,e,r.max):Math.min(e,n)),e}function i1(e,t,n){return{min:t!==void 0?e.min+t:void 0,max:n!==void 0?e.max+n-(e.max-e.min):void 0}}function r9(e,{top:t,left:n,bottom:r,right:o}){return{x:i1(e.x,n,o),y:i1(e.y,t,r)}}function s1(e,t){let n=t.min-e.min,r=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,r]=[r,n]),{min:n,max:r}}function o9(e,t){return{x:s1(e.x,t.x),y:s1(e.y,t.y)}}function i9(e,t){let n=.5;const r=ut(e),o=ut(t);return o>r?n=go(t.min,t.max-r,e.min):r>o&&(n=go(e.min,e.max-o,t.min)),Wn(0,1,n)}function s9(e,t){const n={};return t.min!==void 0&&(n.min=t.min-e.min),t.max!==void 0&&(n.max=t.max-e.min),n}const rd=.35;function a9(e=rd){return e===!1?e=0:e===!0&&(e=rd),{x:a1(e,"left","right"),y:a1(e,"top","bottom")}}function a1(e,t,n){return{min:l1(e,t),max:l1(e,n)}}function l1(e,t){return typeof e=="number"?e:e[t]||0}const u1=()=>({translate:0,scale:1,origin:0,originPoint:0}),qr=()=>({x:u1(),y:u1()}),c1=()=>({min:0,max:0}),ge=()=>({x:c1(),y:c1()});function Ft(e){return[e("x"),e("y")]}function vv({top:e,left:t,right:n,bottom:r}){return{x:{min:t,max:n},y:{min:e,max:r}}}function l9({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function u9(e,t){if(!t)return e;const n=t({x:e.left,y:e.top}),r=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}function Mu(e){return e===void 0||e===1}function od({scale:e,scaleX:t,scaleY:n}){return!Mu(e)||!Mu(t)||!Mu(n)}function rr(e){return od(e)||yv(e)||e.z||e.rotate||e.rotateX||e.rotateY}function yv(e){return d1(e.x)||d1(e.y)}function d1(e){return e&&e!=="0%"}function Xa(e,t,n){const r=e-n,o=t*r;return n+o}function f1(e,t,n,r,o){return o!==void 0&&(e=Xa(e,o,r)),Xa(e,n,r)+t}function id(e,t=0,n=1,r,o){e.min=f1(e.min,t,n,r,o),e.max=f1(e.max,t,n,r,o)}function xv(e,{x:t,y:n}){id(e.x,t.translate,t.scale,t.originPoint),id(e.y,n.translate,n.scale,n.originPoint)}function c9(e,t,n,r=!1){const o=n.length;if(!o)return;t.x=t.y=1;let i,s;for(let a=0;a<o;a++){i=n[a],s=i.projectionDelta;const l=i.instance;l&&l.style&&l.style.display==="contents"||(r&&i.options.layoutScroll&&i.scroll&&i!==i.root&&Kr(e,{x:-i.scroll.offset.x,y:-i.scroll.offset.y}),s&&(t.x*=s.x.scale,t.y*=s.y.scale,xv(e,s)),r&&rr(i.latestValues)&&Kr(e,i.latestValues))}t.x=p1(t.x),t.y=p1(t.y)}function p1(e){return Number.isInteger(e)||e>1.0000000000001||e<.999999999999?e:1}function wn(e,t){e.min=e.min+t,e.max=e.max+t}function h1(e,t,[n,r,o]){const i=t[o]!==void 0?t[o]:.5,s=ue(e.min,e.max,i);id(e,t[n],t[r],s,t.scale)}const d9=["x","scaleX","originX"],f9=["y","scaleY","originY"];function Kr(e,t){h1(e.x,t,d9),h1(e.y,t,f9)}function wv(e,t){return vv(u9(e.getBoundingClientRect(),t))}function p9(e,t,n){const r=wv(e,n),{scroll:o}=t;return o&&(wn(r.x,o.offset.x),wn(r.y,o.offset.y)),r}const Cv=({current:e})=>e?e.ownerDocument.defaultView:null,h9=new WeakMap;class m9{constructor(t){this.openGlobalLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=ge(),this.visualElement=t}start(t,{snapToCursor:n=!1}={}){const{presenceContext:r}=this.visualElement;if(r&&r.isPresent===!1)return;const o=l=>{this.stopAnimation(),n&&this.snapToCursor(zl(l,"page").point)},i=(l,c)=>{const{drag:d,dragPropagation:f,onDragStart:p}=this.getProps();if(d&&!f&&(this.openGlobalLock&&this.openGlobalLock(),this.openGlobalLock=z2(d),!this.openGlobalLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Ft(y=>{let x=this.getAxisMotionValue(y).get()||0;if(Ht.test(x)){const{projection:S}=this.visualElement;if(S&&S.layout){const v=S.layout.layoutBox[y];v&&(x=ut(v)*(parseFloat(x)/100))}}this.originPoint[y]=x}),p&&X.update(()=>p(l,c),!1,!0);const{animationState:m}=this.visualElement;m&&m.setActive("whileDrag",!0)},s=(l,c)=>{const{dragPropagation:d,dragDirectionLock:f,onDirectionLock:p,onDrag:m}=this.getProps();if(!d&&!this.openGlobalLock)return;const{offset:y}=c;if(f&&this.currentDirection===null){this.currentDirection=g9(y),this.currentDirection!==null&&p&&p(this.currentDirection);return}this.updateAxis("x",c.point,y),this.updateAxis("y",c.point,y),this.visualElement.render(),m&&m(l,c)},a=(l,c)=>this.stop(l,c);this.panSession=new mv(t,{onSessionStart:o,onStart:i,onMove:s,onSessionEnd:a},{transformPagePoint:this.visualElement.getTransformPagePoint(),contextWindow:Cv(this.visualElement)})}stop(t,n){const r=this.isDragging;if(this.cancel(),!r)return;const{velocity:o}=n;this.startAnimation(o);const{onDragEnd:i}=this.getProps();i&&X.update(()=>i(t,n))}cancel(){this.isDragging=!1;const{projection:t,animationState:n}=this.visualElement;t&&(t.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:r}=this.getProps();!r&&this.openGlobalLock&&(this.openGlobalLock(),this.openGlobalLock=null),n&&n.setActive("whileDrag",!1)}updateAxis(t,n,r){const{drag:o}=this.getProps();if(!r||!Ds(t,o,this.currentDirection))return;const i=this.getAxisMotionValue(t);let s=this.originPoint[t]+r[t];this.constraints&&this.constraints[t]&&(s=n9(s,this.constraints[t],this.elastic[t])),i.set(s)}resolveConstraints(){var t;const{dragConstraints:n,dragElastic:r}=this.getProps(),o=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(t=this.visualElement.projection)===null||t===void 0?void 0:t.layout,i=this.constraints;n&&Wr(n)?this.constraints||(this.constraints=this.resolveRefConstraints()):n&&o?this.constraints=r9(o.layoutBox,n):this.constraints=!1,this.elastic=a9(r),i!==this.constraints&&o&&this.constraints&&!this.hasMutatedConstraints&&Ft(s=>{this.getAxisMotionValue(s)&&(this.constraints[s]=s9(o.layoutBox[s],this.constraints[s]))})}resolveRefConstraints(){const{dragConstraints:t,onMeasureDragConstraints:n}=this.getProps();if(!t||!Wr(t))return!1;const r=t.current,{projection:o}=this.visualElement;if(!o||!o.layout)return!1;const i=p9(r,o.root,this.visualElement.getTransformPagePoint());let s=o9(o.layout.layoutBox,i);if(n){const a=n(l9(s));this.hasMutatedConstraints=!!a,a&&(s=vv(a))}return s}startAnimation(t){const{drag:n,dragMomentum:r,dragElastic:o,dragTransition:i,dragSnapToOrigin:s,onDragTransitionEnd:a}=this.getProps(),l=this.constraints||{},c=Ft(d=>{if(!Ds(d,n,this.currentDirection))return;let f=l&&l[d]||{};s&&(f={min:0,max:0});const p=o?200:1e6,m=o?40:1e7,y={type:"inertia",velocity:r?t[d]:0,bounceStiffness:p,bounceDamping:m,timeConstant:750,restDelta:1,restSpeed:10,...i,...f};return this.startAxisValueAnimation(d,y)});return Promise.all(c).then(a)}startAxisValueAnimation(t,n){const r=this.getAxisMotionValue(t);return r.start(Qf(t,r,0,n))}stopAnimation(){Ft(t=>this.getAxisMotionValue(t).stop())}getAxisMotionValue(t){const n="_drag"+t.toUpperCase(),r=this.visualElement.getProps(),o=r[n];return o||this.visualElement.getValue(t,(r.initial?r.initial[t]:void 0)||0)}snapToCursor(t){Ft(n=>{const{drag:r}=this.getProps();if(!Ds(n,r,this.currentDirection))return;const{projection:o}=this.visualElement,i=this.getAxisMotionValue(n);if(o&&o.layout){const{min:s,max:a}=o.layout.layoutBox[n];i.set(t[n]-ue(s,a,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:t,dragConstraints:n}=this.getProps(),{projection:r}=this.visualElement;if(!Wr(n)||!r||!this.constraints)return;this.stopAnimation();const o={x:0,y:0};Ft(s=>{const a=this.getAxisMotionValue(s);if(a){const l=a.get();o[s]=i9({min:l,max:l},this.constraints[s])}});const{transformTemplate:i}=this.visualElement.getProps();this.visualElement.current.style.transform=i?i({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.resolveConstraints(),Ft(s=>{if(!Ds(s,t,null))return;const a=this.getAxisMotionValue(s),{min:l,max:c}=this.constraints[s];a.set(ue(l,c,o[s]))})}addListeners(){if(!this.visualElement.current)return;h9.set(this.visualElement,this);const t=this.visualElement.current,n=an(t,"pointerdown",l=>{const{drag:c,dragListener:d=!0}=this.getProps();c&&d&&this.start(l)}),r=()=>{const{dragConstraints:l}=this.getProps();Wr(l)&&(this.constraints=this.resolveRefConstraints())},{projection:o}=this.visualElement,i=o.addEventListener("measure",r);o&&!o.layout&&(o.root&&o.root.updateScroll(),o.updateLayout()),r();const s=on(window,"resize",()=>this.scalePositionWithinConstraints()),a=o.addEventListener("didUpdate",({delta:l,hasLayoutChanged:c})=>{this.isDragging&&c&&(Ft(d=>{const f=this.getAxisMotionValue(d);f&&(this.originPoint[d]+=l[d].translate,f.set(f.get()+l[d].translate))}),this.visualElement.render())});return()=>{s(),n(),i(),a&&a()}}getProps(){const t=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:r=!1,dragPropagation:o=!1,dragConstraints:i=!1,dragElastic:s=rd,dragMomentum:a=!0}=t;return{...t,drag:n,dragDirectionLock:r,dragPropagation:o,dragConstraints:i,dragElastic:s,dragMomentum:a}}}function Ds(e,t,n){return(t===!0||t===e)&&(n===null||n===e)}function g9(e,t=10){let n=null;return Math.abs(e.y)>t?n="y":Math.abs(e.x)>t&&(n="x"),n}class v9 extends Zn{constructor(t){super(t),this.removeGroupControls=pe,this.removeListeners=pe,this.controls=new m9(t)}mount(){const{dragControls:t}=this.node.getProps();t&&(this.removeGroupControls=t.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||pe}unmount(){this.removeGroupControls(),this.removeListeners()}}const m1=e=>(t,n)=>{e&&X.update(()=>e(t,n))};class y9 extends Zn{constructor(){super(...arguments),this.removePointerDownListener=pe}onPointerDown(t){this.session=new mv(t,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:Cv(this.node)})}createPanHandlers(){const{onPanSessionStart:t,onPanStart:n,onPan:r,onPanEnd:o}=this.node.getProps();return{onSessionStart:m1(t),onStart:m1(n),onMove:r,onEnd:(i,s)=>{delete this.session,o&&X.update(()=>o(i,s))}}}mount(){this.removePointerDownListener=an(this.node.current,"pointerdown",t=>this.onPointerDown(t))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}function x9(){const e=C.useContext(bl);if(e===null)return[!0,null];const{isPresent:t,onExitComplete:n,register:r}=e,o=C.useId();return C.useEffect(()=>r(o),[]),!t&&n?[!1,()=>n&&n(o)]:[!0]}const oa={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function g1(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}const Bo={correct:(e,t)=>{if(!t.target)return e;if(typeof e=="string")if(D.test(e))e=parseFloat(e);else return e;const n=g1(e,t.target.x),r=g1(e,t.target.y);return`${n}% ${r}%`}},w9={correct:(e,{treeScale:t,projectionDelta:n})=>{const r=e,o=Qn.parse(e);if(o.length>5)return r;const i=Qn.createTransformer(e),s=typeof o[0]!="number"?1:0,a=n.x.scale*t.x,l=n.y.scale*t.y;o[0+s]/=a,o[1+s]/=l;const c=ue(a,l,.5);return typeof o[2+s]=="number"&&(o[2+s]/=c),typeof o[3+s]=="number"&&(o[3+s]/=c),i(o)}};class C9 extends F.Component{componentDidMount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r,layoutId:o}=this.props,{projection:i}=t;Lx(S9),i&&(n.group&&n.group.add(i),r&&r.register&&o&&r.register(i),i.root.didUpdate(),i.addEventListener("animationComplete",()=>{this.safeToRemove()}),i.setOptions({...i.options,onExitComplete:()=>this.safeToRemove()})),oa.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){const{layoutDependency:n,visualElement:r,drag:o,isPresent:i}=this.props,s=r.projection;return s&&(s.isPresent=i,o||t.layoutDependency!==n||n===void 0?s.willUpdate():this.safeToRemove(),t.isPresent!==i&&(i?s.promote():s.relegate()||X.postRender(()=>{const a=s.getStack();(!a||!a.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:t}=this.props.visualElement;t&&(t.root.didUpdate(),queueMicrotask(()=>{!t.currentAnimation&&t.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r}=this.props,{projection:o}=t;o&&(o.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(o),r&&r.deregister&&r.deregister(o))}safeToRemove(){const{safeToRemove:t}=this.props;t&&t()}render(){return null}}function Sv(e){const[t,n]=x9(),r=C.useContext(Lf);return F.createElement(C9,{...e,layoutGroup:r,switchLayoutGroup:C.useContext(v2),isPresent:t,safeToRemove:n})}const S9={borderRadius:{...Bo,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Bo,borderTopRightRadius:Bo,borderBottomLeftRadius:Bo,borderBottomRightRadius:Bo,boxShadow:w9},jv=["TopLeft","TopRight","BottomLeft","BottomRight"],j9=jv.length,v1=e=>typeof e=="string"?parseFloat(e):e,y1=e=>typeof e=="number"||D.test(e);function P9(e,t,n,r,o,i){o?(e.opacity=ue(0,n.opacity!==void 0?n.opacity:1,k9(r)),e.opacityExit=ue(t.opacity!==void 0?t.opacity:1,0,E9(r))):i&&(e.opacity=ue(t.opacity!==void 0?t.opacity:1,n.opacity!==void 0?n.opacity:1,r));for(let s=0;s<j9;s++){const a=`border${jv[s]}Radius`;let l=x1(t,a),c=x1(n,a);if(l===void 0&&c===void 0)continue;l||(l=0),c||(c=0),l===0||c===0||y1(l)===y1(c)?(e[a]=Math.max(ue(v1(l),v1(c),r),0),(Ht.test(c)||Ht.test(l))&&(e[a]+="%")):e[a]=c}(t.rotate||n.rotate)&&(e.rotate=ue(t.rotate||0,n.rotate||0,r))}function x1(e,t){return e[t]!==void 0?e[t]:e.borderRadius}const k9=Pv(0,.5,W2),E9=Pv(.5,.95,pe);function Pv(e,t,n){return r=>r<e?0:r>t?1:n(go(e,t,r))}function w1(e,t){e.min=t.min,e.max=t.max}function pt(e,t){w1(e.x,t.x),w1(e.y,t.y)}function C1(e,t,n,r,o){return e-=t,e=Xa(e,1/n,r),o!==void 0&&(e=Xa(e,1/o,r)),e}function T9(e,t=0,n=1,r=.5,o,i=e,s=e){if(Ht.test(t)&&(t=parseFloat(t),t=ue(s.min,s.max,t/100)-s.min),typeof t!="number")return;let a=ue(i.min,i.max,r);e===i&&(a-=t),e.min=C1(e.min,t,n,a,o),e.max=C1(e.max,t,n,a,o)}function S1(e,t,[n,r,o],i,s){T9(e,t[n],t[r],t[o],t.scale,i,s)}const b9=["x","scaleX","originX"],R9=["y","scaleY","originY"];function j1(e,t,n,r){S1(e.x,t,b9,n?n.x:void 0,r?r.x:void 0),S1(e.y,t,R9,n?n.y:void 0,r?r.y:void 0)}function P1(e){return e.translate===0&&e.scale===1}function kv(e){return P1(e.x)&&P1(e.y)}function A9(e,t){return e.x.min===t.x.min&&e.x.max===t.x.max&&e.y.min===t.y.min&&e.y.max===t.y.max}function Ev(e,t){return Math.round(e.x.min)===Math.round(t.x.min)&&Math.round(e.x.max)===Math.round(t.x.max)&&Math.round(e.y.min)===Math.round(t.y.min)&&Math.round(e.y.max)===Math.round(t.y.max)}function k1(e){return ut(e.x)/ut(e.y)}class _9{constructor(){this.members=[]}add(t){qf(this.members,t),t.scheduleRender()}remove(t){if(Kf(this.members,t),t===this.prevLead&&(this.prevLead=void 0),t===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(t){const n=this.members.findIndex(o=>t===o);if(n===0)return!1;let r;for(let o=n;o>=0;o--){const i=this.members[o];if(i.isPresent!==!1){r=i;break}}return r?(this.promote(r),!0):!1}promote(t,n){const r=this.lead;if(t!==r&&(this.prevLead=r,this.lead=t,t.show(),r)){r.instance&&r.scheduleRender(),t.scheduleRender(),t.resumeFrom=r,n&&(t.resumeFrom.preserveOpacity=!0),r.snapshot&&(t.snapshot=r.snapshot,t.snapshot.latestValues=r.animationValues||r.latestValues),t.root&&t.root.isUpdating&&(t.isLayoutDirty=!0);const{crossfade:o}=t.options;o===!1&&r.hide()}}exitAnimationComplete(){this.members.forEach(t=>{const{options:n,resumingFrom:r}=t;n.onExitComplete&&n.onExitComplete(),r&&r.options.onExitComplete&&r.options.onExitComplete()})}scheduleRender(){this.members.forEach(t=>{t.instance&&t.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function E1(e,t,n){let r="";const o=e.x.translate/t.x,i=e.y.translate/t.y;if((o||i)&&(r=`translate3d(${o}px, ${i}px, 0) `),(t.x!==1||t.y!==1)&&(r+=`scale(${1/t.x}, ${1/t.y}) `),n){const{rotate:l,rotateX:c,rotateY:d}=n;l&&(r+=`rotate(${l}deg) `),c&&(r+=`rotateX(${c}deg) `),d&&(r+=`rotateY(${d}deg) `)}const s=e.x.scale*t.x,a=e.y.scale*t.y;return(s!==1||a!==1)&&(r+=`scale(${s}, ${a})`),r||"none"}const L9=(e,t)=>e.depth-t.depth;class z9{constructor(){this.children=[],this.isDirty=!1}add(t){qf(this.children,t),this.isDirty=!0}remove(t){Kf(this.children,t),this.isDirty=!0}forEach(t){this.isDirty&&this.children.sort(L9),this.isDirty=!1,this.children.forEach(t)}}function M9(e,t){const n=performance.now(),r=({timestamp:o})=>{const i=o-n;i>=t&&(Qt(r),e(i-t))};return X.read(r,!0),()=>Qt(r)}function I9(e){window.MotionDebug&&window.MotionDebug.record(e)}function D9(e){return e instanceof SVGElement&&e.tagName!=="svg"}function O9(e,t,n){const r=Ne(e)?e:At(e);return r.start(Qf("",r,t,n)),r.animation}const T1=["","X","Y","Z"],N9={visibility:"hidden"},b1=1e3;let F9=0;const or={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0};function Tv({attachResizeListener:e,defaultParent:t,measureScroll:n,checkIsScrollRoot:r,resetTransform:o}){return class{constructor(s={},a=t==null?void 0:t()){this.id=F9++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,or.totalNodes=or.resolvedTargetDeltas=or.recalculatedProjection=0,this.nodes.forEach($9),this.nodes.forEach(Q9),this.nodes.forEach(q9),this.nodes.forEach(G9),I9(or)},this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=s,this.root=a?a.root||a:this,this.path=a?[...a.path,a]:[],this.parent=a,this.depth=a?a.depth+1:0;for(let l=0;l<this.path.length;l++)this.path[l].shouldResetTransform=!0;this.root===this&&(this.nodes=new z9)}addEventListener(s,a){return this.eventHandlers.has(s)||this.eventHandlers.set(s,new Yf),this.eventHandlers.get(s).add(a)}notifyListeners(s,...a){const l=this.eventHandlers.get(s);l&&l.notify(...a)}hasListeners(s){return this.eventHandlers.has(s)}mount(s,a=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=D9(s),this.instance=s;const{layoutId:l,layout:c,visualElement:d}=this.options;if(d&&!d.current&&d.mount(s),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),a&&(c||l)&&(this.isLayoutDirty=!0),e){let f;const p=()=>this.root.updateBlockedByResize=!1;e(s,()=>{this.root.updateBlockedByResize=!0,f&&f(),f=M9(p,250),oa.hasAnimatedSinceResize&&(oa.hasAnimatedSinceResize=!1,this.nodes.forEach(A1))})}l&&this.root.registerSharedNode(l,this),this.options.animate!==!1&&d&&(l||c)&&this.addEventListener("didUpdate",({delta:f,hasLayoutChanged:p,hasRelativeTargetChanged:m,layout:y})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const x=this.options.transition||d.getDefaultTransition()||J9,{onLayoutAnimationStart:S,onLayoutAnimationComplete:v}=d.getProps(),h=!this.targetLayout||!Ev(this.targetLayout,y)||m,g=!p&&m;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||g||p&&(h||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(f,g);const w={...Wf(x,"layout"),onPlay:S,onComplete:v};(d.shouldReduceMotion||this.options.layoutRoot)&&(w.delay=0,w.type=!1),this.startAnimation(w)}else p||A1(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=y})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const s=this.getStack();s&&s.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,Qt(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(K9),this.animationId++)}getTransformTemplate(){const{visualElement:s}=this.options;return s&&s.getProps().transformTemplate}willUpdate(s=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let d=0;d<this.path.length;d++){const f=this.path[d];f.shouldResetTransform=!0,f.updateScroll("snapshot"),f.options.layoutRoot&&f.willUpdate(!1)}const{layoutId:a,layout:l}=this.options;if(a===void 0&&!l)return;const c=this.getTransformTemplate();this.prevTransformTemplateValue=c?c(this.latestValues,""):void 0,this.updateSnapshot(),s&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(R1);return}this.isUpdating||this.nodes.forEach(H9),this.isUpdating=!1,this.nodes.forEach(W9),this.nodes.forEach(V9),this.nodes.forEach(B9),this.clearAllSnapshots();const a=performance.now();Se.delta=Wn(0,1e3/60,a-Se.timestamp),Se.timestamp=a,Se.isProcessing=!0,Pu.update.process(Se),Pu.preRender.process(Se),Pu.render.process(Se),Se.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,queueMicrotask(()=>this.update()))}clearAllSnapshots(){this.nodes.forEach(U9),this.sharedNodes.forEach(Y9)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,X.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){X.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let l=0;l<this.path.length;l++)this.path[l].updateScroll();const s=this.layout;this.layout=this.measure(!1),this.layoutCorrected=ge(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:a}=this.options;a&&a.notify("LayoutMeasure",this.layout.layoutBox,s?s.layoutBox:void 0)}updateScroll(s="measure"){let a=!!(this.options.layoutScroll&&this.instance);this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===s&&(a=!1),a&&(this.scroll={animationId:this.root.animationId,phase:s,isRoot:r(this.instance),offset:n(this.instance)})}resetTransform(){if(!o)return;const s=this.isLayoutDirty||this.shouldResetTransform,a=this.projectionDelta&&!kv(this.projectionDelta),l=this.getTransformTemplate(),c=l?l(this.latestValues,""):void 0,d=c!==this.prevTransformTemplateValue;s&&(a||rr(this.latestValues)||d)&&(o(this.instance,c),this.shouldResetTransform=!1,this.scheduleRender())}measure(s=!0){const a=this.measurePageBox();let l=this.removeElementScroll(a);return s&&(l=this.removeTransform(l)),e7(l),{animationId:this.root.animationId,measuredBox:a,layoutBox:l,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:s}=this.options;if(!s)return ge();const a=s.measureViewportBox(),{scroll:l}=this.root;return l&&(wn(a.x,l.offset.x),wn(a.y,l.offset.y)),a}removeElementScroll(s){const a=ge();pt(a,s);for(let l=0;l<this.path.length;l++){const c=this.path[l],{scroll:d,options:f}=c;if(c!==this.root&&d&&f.layoutScroll){if(d.isRoot){pt(a,s);const{scroll:p}=this.root;p&&(wn(a.x,-p.offset.x),wn(a.y,-p.offset.y))}wn(a.x,d.offset.x),wn(a.y,d.offset.y)}}return a}applyTransform(s,a=!1){const l=ge();pt(l,s);for(let c=0;c<this.path.length;c++){const d=this.path[c];!a&&d.options.layoutScroll&&d.scroll&&d!==d.root&&Kr(l,{x:-d.scroll.offset.x,y:-d.scroll.offset.y}),rr(d.latestValues)&&Kr(l,d.latestValues)}return rr(this.latestValues)&&Kr(l,this.latestValues),l}removeTransform(s){const a=ge();pt(a,s);for(let l=0;l<this.path.length;l++){const c=this.path[l];if(!c.instance||!rr(c.latestValues))continue;od(c.latestValues)&&c.updateSnapshot();const d=ge(),f=c.measurePageBox();pt(d,f),j1(a,c.latestValues,c.snapshot?c.snapshot.layoutBox:void 0,d)}return rr(this.latestValues)&&j1(a,this.latestValues),a}setTargetDelta(s){this.targetDelta=s,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(s){this.options={...this.options,...s,crossfade:s.crossfade!==void 0?s.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Se.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(s=!1){var a;const l=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=l.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=l.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=l.isSharedProjectionDirty);const c=!!this.resumingFrom||this!==l;if(!(s||c&&this.isSharedProjectionDirty||this.isProjectionDirty||!((a=this.parent)===null||a===void 0)&&a.isProjectionDirty||this.attemptToResolveRelativeTarget))return;const{layout:f,layoutId:p}=this.options;if(!(!this.layout||!(f||p))){if(this.resolvedRelativeTargetAt=Se.timestamp,!this.targetDelta&&!this.relativeTarget){const m=this.getClosestProjectingParent();m&&m.layout&&this.animationProgress!==1?(this.relativeParent=m,this.forceRelativeParentToResolveTarget(),this.relativeTarget=ge(),this.relativeTargetOrigin=ge(),fi(this.relativeTargetOrigin,this.layout.layoutBox,m.layout.layoutBox),pt(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=ge(),this.targetWithTransforms=ge()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),t9(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):pt(this.target,this.layout.layoutBox),xv(this.target,this.targetDelta)):pt(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const m=this.getClosestProjectingParent();m&&!!m.resumingFrom==!!this.resumingFrom&&!m.options.layoutScroll&&m.target&&this.animationProgress!==1?(this.relativeParent=m,this.forceRelativeParentToResolveTarget(),this.relativeTarget=ge(),this.relativeTargetOrigin=ge(),fi(this.relativeTargetOrigin,this.target,m.target),pt(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}or.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||od(this.parent.latestValues)||yv(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var s;const a=this.getLead(),l=!!this.resumingFrom||this!==a;let c=!0;if((this.isProjectionDirty||!((s=this.parent)===null||s===void 0)&&s.isProjectionDirty)&&(c=!1),l&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(c=!1),this.resolvedRelativeTargetAt===Se.timestamp&&(c=!1),c)return;const{layout:d,layoutId:f}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(d||f))return;pt(this.layoutCorrected,this.layout.layoutBox);const p=this.treeScale.x,m=this.treeScale.y;c9(this.layoutCorrected,this.treeScale,this.path,l),a.layout&&!a.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(a.target=a.layout.layoutBox);const{target:y}=a;if(!y){this.projectionTransform&&(this.projectionDelta=qr(),this.projectionTransform="none",this.scheduleRender());return}this.projectionDelta||(this.projectionDelta=qr(),this.projectionDeltaWithTransform=qr());const x=this.projectionTransform;di(this.projectionDelta,this.layoutCorrected,y,this.latestValues),this.projectionTransform=E1(this.projectionDelta,this.treeScale),(this.projectionTransform!==x||this.treeScale.x!==p||this.treeScale.y!==m)&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",y)),or.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(s=!0){if(this.options.scheduleRender&&this.options.scheduleRender(),s){const a=this.getStack();a&&a.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}setAnimationOrigin(s,a=!1){const l=this.snapshot,c=l?l.latestValues:{},d={...this.latestValues},f=qr();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!a;const p=ge(),m=l?l.source:void 0,y=this.layout?this.layout.source:void 0,x=m!==y,S=this.getStack(),v=!S||S.members.length<=1,h=!!(x&&!v&&this.options.crossfade===!0&&!this.path.some(Z9));this.animationProgress=0;let g;this.mixTargetDelta=w=>{const j=w/1e3;_1(f.x,s.x,j),_1(f.y,s.y,j),this.setTargetDelta(f),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(fi(p,this.layout.layoutBox,this.relativeParent.layout.layoutBox),X9(this.relativeTarget,this.relativeTargetOrigin,p,j),g&&A9(this.relativeTarget,g)&&(this.isProjectionDirty=!1),g||(g=ge()),pt(g,this.relativeTarget)),x&&(this.animationValues=d,P9(d,c,this.latestValues,j,h,v)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=j},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(s){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(Qt(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=X.update(()=>{oa.hasAnimatedSinceResize=!0,this.currentAnimation=O9(0,b1,{...s,onUpdate:a=>{this.mixTargetDelta(a),s.onUpdate&&s.onUpdate(a)},onComplete:()=>{s.onComplete&&s.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const s=this.getStack();s&&s.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(b1),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const s=this.getLead();let{targetWithTransforms:a,target:l,layout:c,latestValues:d}=s;if(!(!a||!l||!c)){if(this!==s&&this.layout&&c&&bv(this.options.animationType,this.layout.layoutBox,c.layoutBox)){l=this.target||ge();const f=ut(this.layout.layoutBox.x);l.x.min=s.target.x.min,l.x.max=l.x.min+f;const p=ut(this.layout.layoutBox.y);l.y.min=s.target.y.min,l.y.max=l.y.min+p}pt(a,l),Kr(a,d),di(this.projectionDeltaWithTransform,this.layoutCorrected,a,d)}}registerSharedNode(s,a){this.sharedNodes.has(s)||this.sharedNodes.set(s,new _9),this.sharedNodes.get(s).add(a);const c=a.options.initialPromotionConfig;a.promote({transition:c?c.transition:void 0,preserveFollowOpacity:c&&c.shouldPreserveFollowOpacity?c.shouldPreserveFollowOpacity(a):void 0})}isLead(){const s=this.getStack();return s?s.lead===this:!0}getLead(){var s;const{layoutId:a}=this.options;return a?((s=this.getStack())===null||s===void 0?void 0:s.lead)||this:this}getPrevLead(){var s;const{layoutId:a}=this.options;return a?(s=this.getStack())===null||s===void 0?void 0:s.prevLead:void 0}getStack(){const{layoutId:s}=this.options;if(s)return this.root.sharedNodes.get(s)}promote({needsReset:s,transition:a,preserveFollowOpacity:l}={}){const c=this.getStack();c&&c.promote(this,l),s&&(this.projectionDelta=void 0,this.needsReset=!0),a&&this.setOptions({transition:a})}relegate(){const s=this.getStack();return s?s.relegate(this):!1}resetRotation(){const{visualElement:s}=this.options;if(!s)return;let a=!1;const{latestValues:l}=s;if((l.rotate||l.rotateX||l.rotateY||l.rotateZ)&&(a=!0),!a)return;const c={};for(let d=0;d<T1.length;d++){const f="rotate"+T1[d];l[f]&&(c[f]=l[f],s.setStaticValue(f,0))}s.render();for(const d in c)s.setStaticValue(d,c[d]);s.scheduleRender()}getProjectionStyles(s){var a,l;if(!this.instance||this.isSVG)return;if(!this.isVisible)return N9;const c={visibility:""},d=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,c.opacity="",c.pointerEvents=ra(s==null?void 0:s.pointerEvents)||"",c.transform=d?d(this.latestValues,""):"none",c;const f=this.getLead();if(!this.projectionDelta||!this.layout||!f.target){const x={};return this.options.layoutId&&(x.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,x.pointerEvents=ra(s==null?void 0:s.pointerEvents)||""),this.hasProjected&&!rr(this.latestValues)&&(x.transform=d?d({},""):"none",this.hasProjected=!1),x}const p=f.animationValues||f.latestValues;this.applyTransformsToTarget(),c.transform=E1(this.projectionDeltaWithTransform,this.treeScale,p),d&&(c.transform=d(p,c.transform));const{x:m,y}=this.projectionDelta;c.transformOrigin=`${m.origin*100}% ${y.origin*100}% 0`,f.animationValues?c.opacity=f===this?(l=(a=p.opacity)!==null&&a!==void 0?a:this.latestValues.opacity)!==null&&l!==void 0?l:1:this.preserveOpacity?this.latestValues.opacity:p.opacityExit:c.opacity=f===this?p.opacity!==void 0?p.opacity:"":p.opacityExit!==void 0?p.opacityExit:0;for(const x in Ha){if(p[x]===void 0)continue;const{correct:S,applyTo:v}=Ha[x],h=c.transform==="none"?p[x]:S(p[x],f);if(v){const g=v.length;for(let w=0;w<g;w++)c[v[w]]=h}else c[x]=h}return this.options.layoutId&&(c.pointerEvents=f===this?ra(s==null?void 0:s.pointerEvents)||"":"none"),c}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(s=>{var a;return(a=s.currentAnimation)===null||a===void 0?void 0:a.stop()}),this.root.nodes.forEach(R1),this.root.sharedNodes.clear()}}}function V9(e){e.updateLayout()}function B9(e){var t;const n=((t=e.resumeFrom)===null||t===void 0?void 0:t.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&n&&e.hasListeners("didUpdate")){const{layoutBox:r,measuredBox:o}=e.layout,{animationType:i}=e.options,s=n.source!==e.layout.source;i==="size"?Ft(f=>{const p=s?n.measuredBox[f]:n.layoutBox[f],m=ut(p);p.min=r[f].min,p.max=p.min+m}):bv(i,n.layoutBox,r)&&Ft(f=>{const p=s?n.measuredBox[f]:n.layoutBox[f],m=ut(r[f]);p.max=p.min+m,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[f].max=e.relativeTarget[f].min+m)});const a=qr();di(a,r,n.layoutBox);const l=qr();s?di(l,e.applyTransform(o,!0),n.measuredBox):di(l,r,n.layoutBox);const c=!kv(a);let d=!1;if(!e.resumeFrom){const f=e.getClosestProjectingParent();if(f&&!f.resumeFrom){const{snapshot:p,layout:m}=f;if(p&&m){const y=ge();fi(y,n.layoutBox,p.layoutBox);const x=ge();fi(x,r,m.layoutBox),Ev(y,x)||(d=!0),f.options.layoutRoot&&(e.relativeTarget=x,e.relativeTargetOrigin=y,e.relativeParent=f)}}}e.notifyListeners("didUpdate",{layout:r,snapshot:n,delta:l,layoutDelta:a,hasLayoutChanged:c,hasRelativeTargetChanged:d})}else if(e.isLead()){const{onExitComplete:r}=e.options;r&&r()}e.options.transition=void 0}function $9(e){or.totalNodes++,e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function G9(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function U9(e){e.clearSnapshot()}function R1(e){e.clearMeasurements()}function H9(e){e.isLayoutDirty=!1}function W9(e){const{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function A1(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function Q9(e){e.resolveTargetDelta()}function q9(e){e.calcProjection()}function K9(e){e.resetRotation()}function Y9(e){e.removeLeadSnapshot()}function _1(e,t,n){e.translate=ue(t.translate,0,n),e.scale=ue(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function L1(e,t,n,r){e.min=ue(t.min,n.min,r),e.max=ue(t.max,n.max,r)}function X9(e,t,n,r){L1(e.x,t.x,n.x,r),L1(e.y,t.y,n.y,r)}function Z9(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}const J9={duration:.45,ease:[.4,0,.1,1]},z1=e=>typeof navigator<"u"&&navigator.userAgent.toLowerCase().includes(e),M1=z1("applewebkit/")&&!z1("chrome/")?Math.round:pe;function I1(e){e.min=M1(e.min),e.max=M1(e.max)}function e7(e){I1(e.x),I1(e.y)}function bv(e,t,n){return e==="position"||e==="preserve-aspect"&&!nd(k1(t),k1(n),.2)}const t7=Tv({attachResizeListener:(e,t)=>on(e,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),Iu={current:void 0},Rv=Tv({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!Iu.current){const e=new t7({});e.mount(window),e.setOptions({layoutScroll:!0}),Iu.current=e}return Iu.current},resetTransform:(e,t)=>{e.style.transform=t!==void 0?t:"none"},checkIsScrollRoot:e=>window.getComputedStyle(e).position==="fixed"}),n7={pan:{Feature:y9},drag:{Feature:v9,ProjectionNode:Rv,MeasureLayout:Sv}},r7=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;function o7(e){const t=r7.exec(e);if(!t)return[,];const[,n,r]=t;return[n,r]}function sd(e,t,n=1){const[r,o]=o7(e);if(!r)return;const i=window.getComputedStyle(t).getPropertyValue(r);if(i){const s=i.trim();return cv(s)?parseFloat(s):s}else return qc(o)?sd(o,t,n+1):o}function i7(e,{...t},n){const r=e.current;if(!(r instanceof Element))return{target:t,transitionEnd:n};n&&(n={...n}),e.values.forEach(o=>{const i=o.get();if(!qc(i))return;const s=sd(i,r);s&&o.set(s)});for(const o in t){const i=t[o];if(!qc(i))continue;const s=sd(i,r);s&&(t[o]=s,n||(n={}),n[o]===void 0&&(n[o]=i))}return{target:t,transitionEnd:n}}const s7=new Set(["width","height","top","left","right","bottom","x","y","translateX","translateY"]),Av=e=>s7.has(e),a7=e=>Object.keys(e).some(Av),D1=e=>e===br||e===D,O1=(e,t)=>parseFloat(e.split(", ")[t]),N1=(e,t)=>(n,{transform:r})=>{if(r==="none"||!r)return 0;const o=r.match(/^matrix3d\((.+)\)$/);if(o)return O1(o[1],t);{const i=r.match(/^matrix\((.+)\)$/);return i?O1(i[1],e):0}},l7=new Set(["x","y","z"]),u7=ss.filter(e=>!l7.has(e));function c7(e){const t=[];return u7.forEach(n=>{const r=e.getValue(n);r!==void 0&&(t.push([n,r.get()]),r.set(n.startsWith("scale")?1:0))}),t.length&&e.render(),t}const vo={width:({x:e},{paddingLeft:t="0",paddingRight:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),height:({y:e},{paddingTop:t="0",paddingBottom:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:N1(4,13),y:N1(5,14)};vo.translateX=vo.x;vo.translateY=vo.y;const d7=(e,t,n)=>{const r=t.measureViewportBox(),o=t.current,i=getComputedStyle(o),{display:s}=i,a={};s==="none"&&t.setStaticValue("display",e.display||"block"),n.forEach(c=>{a[c]=vo[c](r,i)}),t.render();const l=t.measureViewportBox();return n.forEach(c=>{const d=t.getValue(c);d&&d.jump(a[c]),e[c]=vo[c](l,i)}),e},f7=(e,t,n={},r={})=>{t={...t},r={...r};const o=Object.keys(t).filter(Av);let i=[],s=!1;const a=[];if(o.forEach(l=>{const c=e.getValue(l);if(!e.hasValue(l))return;let d=n[l],f=Vo(d);const p=t[l];let m;if(Qa(p)){const y=p.length,x=p[0]===null?1:0;d=p[x],f=Vo(d);for(let S=x;S<y&&p[S]!==null;S++)m?Il(Vo(p[S])===m):m=Vo(p[S])}else m=Vo(p);if(f!==m)if(D1(f)&&D1(m)){const y=c.get();typeof y=="string"&&c.set(parseFloat(y)),typeof p=="string"?t[l]=parseFloat(p):Array.isArray(p)&&m===D&&(t[l]=p.map(parseFloat))}else f!=null&&f.transform&&(m!=null&&m.transform)&&(d===0||p===0)?d===0?c.set(m.transform(d)):t[l]=f.transform(p):(s||(i=c7(e),s=!0),a.push(l),r[l]=r[l]!==void 0?r[l]:t[l],c.jump(p))}),a.length){const l=a.indexOf("height")>=0?window.pageYOffset:null,c=d7(t,e,a);return i.length&&i.forEach(([d,f])=>{e.getValue(d).set(f)}),e.render(),Rl&&l!==null&&window.scrollTo({top:l}),{target:c,transitionEnd:r}}else return{target:t,transitionEnd:r}};function p7(e,t,n,r){return a7(t)?f7(e,t,n,r):{target:t,transitionEnd:r}}const h7=(e,t,n,r)=>{const o=i7(e,t,r);return t=o.target,r=o.transitionEnd,p7(e,t,n,r)},ad={current:null},_v={current:!1};function m7(){if(_v.current=!0,!!Rl)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),t=()=>ad.current=e.matches;e.addListener(t),t()}else ad.current=!1}function g7(e,t,n){const{willChange:r}=t;for(const o in t){const i=t[o],s=n[o];if(Ne(i))e.addValue(o,i),Ya(r)&&r.add(o);else if(Ne(s))e.addValue(o,At(i,{owner:e})),Ya(r)&&r.remove(o);else if(s!==i)if(e.hasValue(o)){const a=e.getValue(o);!a.hasAnimated&&a.set(i)}else{const a=e.getStaticValue(o);e.addValue(o,At(a!==void 0?a:i,{owner:e}))}}for(const o in n)t[o]===void 0&&e.removeValue(o);return t}const F1=new WeakMap,Lv=Object.keys(Vi),v7=Lv.length,V1=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"],y7=_f.length;class x7{constructor({parent:t,props:n,presenceContext:r,reducedMotionConfig:o,visualState:i},s={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.scheduleRender=()=>X.render(this.render,!1,!0);const{latestValues:a,renderState:l}=i;this.latestValues=a,this.baseTarget={...a},this.initialValues=n.initial?{...a}:{},this.renderState=l,this.parent=t,this.props=n,this.presenceContext=r,this.depth=t?t.depth+1:0,this.reducedMotionConfig=o,this.options=s,this.isControllingVariants=_l(n),this.isVariantNode=g2(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(t&&t.current);const{willChange:c,...d}=this.scrapeMotionValuesFromProps(n,{});for(const f in d){const p=d[f];a[f]!==void 0&&Ne(p)&&(p.set(a[f],!1),Ya(c)&&c.add(f))}}scrapeMotionValuesFromProps(t,n){return{}}mount(t){this.current=t,F1.set(t,this),this.projection&&!this.projection.instance&&this.projection.mount(t),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((n,r)=>this.bindToMotionValue(r,n)),_v.current||m7(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:ad.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){F1.delete(this.current),this.projection&&this.projection.unmount(),Qt(this.notifyUpdate),Qt(this.render),this.valueSubscriptions.forEach(t=>t()),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const t in this.events)this.events[t].clear();for(const t in this.features)this.features[t].unmount();this.current=null}bindToMotionValue(t,n){const r=Tr.has(t),o=n.on("change",s=>{this.latestValues[t]=s,this.props.onUpdate&&X.update(this.notifyUpdate,!1,!0),r&&this.projection&&(this.projection.isTransformDirty=!0)}),i=n.on("renderRequest",this.scheduleRender);this.valueSubscriptions.set(t,()=>{o(),i()})}sortNodePosition(t){return!this.current||!this.sortInstanceNodePosition||this.type!==t.type?0:this.sortInstanceNodePosition(this.current,t.current)}loadFeatures({children:t,...n},r,o,i){let s,a;for(let l=0;l<v7;l++){const c=Lv[l],{isEnabled:d,Feature:f,ProjectionNode:p,MeasureLayout:m}=Vi[c];p&&(s=p),d(n)&&(!this.features[c]&&f&&(this.features[c]=new f(this)),m&&(a=m))}if(!this.projection&&s){this.projection=new s(this.latestValues,this.parent&&this.parent.projection);const{layoutId:l,layout:c,drag:d,dragConstraints:f,layoutScroll:p,layoutRoot:m}=n;this.projection.setOptions({layoutId:l,layout:c,alwaysMeasureLayout:!!d||f&&Wr(f),visualElement:this,scheduleRender:()=>this.scheduleRender(),animationType:typeof c=="string"?c:"both",initialPromotionConfig:i,layoutScroll:p,layoutRoot:m})}return a}updateFeatures(){for(const t in this.features){const n=this.features[t];n.isMounted?n.update():(n.mount(),n.isMounted=!0)}}triggerBuild(){this.build(this.renderState,this.latestValues,this.options,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):ge()}getStaticValue(t){return this.latestValues[t]}setStaticValue(t,n){this.latestValues[t]=n}makeTargetAnimatable(t,n=!0){return this.makeTargetAnimatableFromInstance(t,this.props,n)}update(t,n){(t.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=t,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let r=0;r<V1.length;r++){const o=V1[r];this.propEventSubscriptions[o]&&(this.propEventSubscriptions[o](),delete this.propEventSubscriptions[o]);const i=t["on"+o];i&&(this.propEventSubscriptions[o]=this.on(o,i))}this.prevMotionValues=g7(this,this.scrapeMotionValuesFromProps(t,this.prevProps),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(t){return this.props.variants?this.props.variants[t]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}getVariantContext(t=!1){if(t)return this.parent?this.parent.getVariantContext():void 0;if(!this.isControllingVariants){const r=this.parent?this.parent.getVariantContext()||{}:{};return this.props.initial!==void 0&&(r.initial=this.props.initial),r}const n={};for(let r=0;r<y7;r++){const o=_f[r],i=this.props[o];(Fi(i)||i===!1)&&(n[o]=i)}return n}addVariantChild(t){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(t),()=>n.variantChildren.delete(t)}addValue(t,n){n!==this.values.get(t)&&(this.removeValue(t),this.bindToMotionValue(t,n)),this.values.set(t,n),this.latestValues[t]=n.get()}removeValue(t){this.values.delete(t);const n=this.valueSubscriptions.get(t);n&&(n(),this.valueSubscriptions.delete(t)),delete this.latestValues[t],this.removeValueFromRenderState(t,this.renderState)}hasValue(t){return this.values.has(t)}getValue(t,n){if(this.props.values&&this.props.values[t])return this.props.values[t];let r=this.values.get(t);return r===void 0&&n!==void 0&&(r=At(n,{owner:this}),this.addValue(t,r)),r}readValue(t){var n;return this.latestValues[t]!==void 0||!this.current?this.latestValues[t]:(n=this.getBaseTargetFromProps(this.props,t))!==null&&n!==void 0?n:this.readValueFromInstance(this.current,t,this.options)}setBaseTarget(t,n){this.baseTarget[t]=n}getBaseTarget(t){var n;const{initial:r}=this.props,o=typeof r=="string"||typeof r=="object"?(n=Ff(this.props,r))===null||n===void 0?void 0:n[t]:void 0;if(r&&o!==void 0)return o;const i=this.getBaseTargetFromProps(this.props,t);return i!==void 0&&!Ne(i)?i:this.initialValues[t]!==void 0&&o===void 0?void 0:this.baseTarget[t]}on(t,n){return this.events[t]||(this.events[t]=new Yf),this.events[t].add(n)}notify(t,...n){this.events[t]&&this.events[t].notify(...n)}}class zv extends x7{sortInstanceNodePosition(t,n){return t.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(t,n){return t.style?t.style[n]:void 0}removeValueFromRenderState(t,{vars:n,style:r}){delete n[t],delete r[t]}makeTargetAnimatableFromInstance({transition:t,transitionEnd:n,...r},{transformValues:o},i){let s=O8(r,t||{},this);if(o&&(n&&(n=o(n)),r&&(r=o(r)),s&&(s=o(s))),i){I8(this,r,s);const a=h7(this,r,s,n);n=a.transitionEnd,r=a.target}return{transition:t,transitionEnd:n,...r}}}function w7(e){return window.getComputedStyle(e)}class C7 extends zv{readValueFromInstance(t,n){if(Tr.has(n)){const r=Hf(n);return r&&r.default||0}else{const r=w7(t),o=(w2(n)?r.getPropertyValue(n):r[n])||0;return typeof o=="string"?o.trim():o}}measureInstanceViewportBox(t,{transformPagePoint:n}){return wv(t,n)}build(t,n,r,o){Mf(t,n,r,o.transformTemplate)}scrapeMotionValuesFromProps(t,n){return Nf(t,n)}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:t}=this.props;Ne(t)&&(this.childSubscription=t.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}renderInstance(t,n,r,o){E2(t,n,r,o)}}class S7 extends zv{constructor(){super(...arguments),this.isSVGTag=!1}getBaseTargetFromProps(t,n){return t[n]}readValueFromInstance(t,n){if(Tr.has(n)){const r=Hf(n);return r&&r.default||0}return n=T2.has(n)?n:Rf(n),t.getAttribute(n)}measureInstanceViewportBox(){return ge()}scrapeMotionValuesFromProps(t,n){return R2(t,n)}build(t,n,r,o){Df(t,n,r,this.isSVGTag,o.transformTemplate)}renderInstance(t,n,r,o){b2(t,n,r,o)}mount(t){this.isSVGTag=Of(t.tagName),super.mount(t)}}const j7=(e,t)=>zf(e)?new S7(t,{enableHardwareAcceleration:!1}):new C7(t,{enableHardwareAcceleration:!0}),P7={layout:{ProjectionNode:Rv,MeasureLayout:Sv}},k7={...X8,...C6,...n7,...P7},De=Ax((e,t)=>l6(e,t,k7,j7));function Mv(){const e=C.useRef(!1);return Ro(()=>(e.current=!0,()=>{e.current=!1}),[]),e}function E7(){const e=Mv(),[t,n]=C.useState(0),r=C.useCallback(()=>{e.current&&n(t+1)},[t]);return[C.useCallback(()=>X.postRender(r),[r]),t]}class T7 extends C.Component{getSnapshotBeforeUpdate(t){const n=this.props.childRef.current;if(n&&t.isPresent&&!this.props.isPresent){const r=this.props.sizeRef.current;r.height=n.offsetHeight||0,r.width=n.offsetWidth||0,r.top=n.offsetTop,r.left=n.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function b7({children:e,isPresent:t}){const n=C.useId(),r=C.useRef(null),o=C.useRef({width:0,height:0,top:0,left:0});return C.useInsertionEffect(()=>{const{width:i,height:s,top:a,left:l}=o.current;if(t||!r.current||!i||!s)return;r.current.dataset.motionPopId=n;const c=document.createElement("style");return document.head.appendChild(c),c.sheet&&c.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${i}px !important;
            height: ${s}px !important;
            top: ${a}px !important;
            left: ${l}px !important;
          }
        `),()=>{document.head.removeChild(c)}},[t]),C.createElement(T7,{isPresent:t,childRef:r,sizeRef:o},C.cloneElement(e,{ref:r}))}const Du=({children:e,initial:t,isPresent:n,onExitComplete:r,custom:o,presenceAffectsLayout:i,mode:s})=>{const a=us(R7),l=C.useId(),c=C.useMemo(()=>({id:l,initial:t,isPresent:n,custom:o,onExitComplete:d=>{a.set(d,!0);for(const f of a.values())if(!f)return;r&&r()},register:d=>(a.set(d,!1),()=>a.delete(d))}),i?void 0:[n]);return C.useMemo(()=>{a.forEach((d,f)=>a.set(f,!1))},[n]),C.useEffect(()=>{!n&&!a.size&&r&&r()},[n]),s==="popLayout"&&(e=C.createElement(b7,{isPresent:n},e)),C.createElement(bl.Provider,{value:c},e)};function R7(){return new Map}function A7(e){return C.useEffect(()=>()=>e(),[])}const ir=e=>e.key||"";function _7(e,t){e.forEach(n=>{const r=ir(n);t.set(r,n)})}function L7(e){const t=[];return C.Children.forEach(e,n=>{C.isValidElement(n)&&t.push(n)}),t}const z7=({children:e,custom:t,initial:n=!0,onExitComplete:r,exitBeforeEnter:o,presenceAffectsLayout:i=!0,mode:s="sync"})=>{const a=C.useContext(Lf).forceRender||E7()[0],l=Mv(),c=L7(e);let d=c;const f=C.useRef(new Map).current,p=C.useRef(d),m=C.useRef(new Map).current,y=C.useRef(!0);if(Ro(()=>{y.current=!1,_7(c,m),p.current=d}),A7(()=>{y.current=!0,m.clear(),f.clear()}),y.current)return C.createElement(C.Fragment,null,d.map(h=>C.createElement(Du,{key:ir(h),isPresent:!0,initial:n?void 0:!1,presenceAffectsLayout:i,mode:s},h)));d=[...d];const x=p.current.map(ir),S=c.map(ir),v=x.length;for(let h=0;h<v;h++){const g=x[h];S.indexOf(g)===-1&&!f.has(g)&&f.set(g,void 0)}return s==="wait"&&f.size&&(d=[]),f.forEach((h,g)=>{if(S.indexOf(g)!==-1)return;const w=m.get(g);if(!w)return;const j=x.indexOf(g);let P=h;if(!P){const k=()=>{f.delete(g);const E=Array.from(m.keys()).filter(R=>!S.includes(R));if(E.forEach(R=>m.delete(R)),p.current=c.filter(R=>{const _=ir(R);return _===g||E.includes(_)}),!f.size){if(l.current===!1)return;a(),r&&r()}};P=C.createElement(Du,{key:ir(w),isPresent:!1,onExitComplete:k,custom:t,presenceAffectsLayout:i,mode:s},w),f.set(g,P)}d.splice(j,0,P)}),d=d.map(h=>{const g=h.key;return f.has(g)?h:C.createElement(Du,{key:ir(h),isPresent:!0,presenceAffectsLayout:i,mode:s},h)}),C.createElement(C.Fragment,null,f.size?d:d.map(h=>C.cloneElement(h)))};function M7(e){const t=us(()=>At(e)),{isStatic:n}=C.useContext(El);if(n){const[,r]=C.useState(e);C.useEffect(()=>t.on("change",r),[])}return t}function Iv(e,t={}){const{isStatic:n}=C.useContext(El),r=C.useRef(null),o=M7(Ne(e)?e.get():e),i=()=>{r.current&&r.current.stop()};return C.useInsertionEffect(()=>o.attach((s,a)=>{if(n)return a(s);if(i(),r.current=Bi({keyframes:[o.get(),s],velocity:o.getVelocity(),type:"spring",restDelta:.001,restSpeed:.01,...t,onUpdate:a}),!Se.isProcessing){const l=performance.now()-Se.timestamp;l<30&&(r.current.time=Wt(l))}return o.get()},i),[JSON.stringify(t)]),Ro(()=>{if(Ne(e))return e.on("change",s=>o.set(parseFloat(s)))},[o]),o}function Dv(e,t,n){var r;if(typeof e=="string"){let o=document;t&&(Il(!!t.current),o=t.current),n?((r=n[e])!==null&&r!==void 0||(n[e]=o.querySelectorAll(e)),e=n[e]):e=o.querySelectorAll(e)}else e instanceof Element&&(e=[e]);return Array.from(e||[])}const ia=new WeakMap;let gn;function I7(e,t){if(t){const{inlineSize:n,blockSize:r}=t[0];return{width:n,height:r}}else return e instanceof SVGElement&&"getBBox"in e?e.getBBox():{width:e.offsetWidth,height:e.offsetHeight}}function D7({target:e,contentRect:t,borderBoxSize:n}){var r;(r=ia.get(e))===null||r===void 0||r.forEach(o=>{o({target:e,contentSize:t,get size(){return I7(e,n)}})})}function O7(e){e.forEach(D7)}function N7(){typeof ResizeObserver>"u"||(gn=new ResizeObserver(O7))}function F7(e,t){gn||N7();const n=Dv(e);return n.forEach(r=>{let o=ia.get(r);o||(o=new Set,ia.set(r,o)),o.add(t),gn==null||gn.observe(r)}),()=>{n.forEach(r=>{const o=ia.get(r);o==null||o.delete(t),o!=null&&o.size||gn==null||gn.unobserve(r)})}}const sa=new Set;let pi;function V7(){pi=()=>{const e={width:window.innerWidth,height:window.innerHeight},t={target:window,size:e,contentSize:e};sa.forEach(n=>n(t))},window.addEventListener("resize",pi)}function B7(e){return sa.add(e),pi||V7(),()=>{sa.delete(e),!sa.size&&pi&&(pi=void 0)}}function $7(e,t){return typeof e=="function"?B7(e):F7(e,t)}const G7=50,B1=()=>({current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0}),U7=()=>({time:0,x:B1(),y:B1()}),H7={x:{length:"Width",position:"Left"},y:{length:"Height",position:"Top"}};function $1(e,t,n,r){const o=n[t],{length:i,position:s}=H7[t],a=o.current,l=n.time;o.current=e["scroll"+s],o.scrollLength=e["scroll"+i]-e["client"+i],o.offset.length=0,o.offset[0]=0,o.offset[1]=o.scrollLength,o.progress=go(0,o.scrollLength,o.current);const c=r-l;o.velocity=c>G7?0:Uf(o.current-a,c)}function W7(e,t,n){$1(e,"x",t,n),$1(e,"y",t,n),t.time=n}function Q7(e,t){const n={x:0,y:0};let r=e;for(;r&&r!==t;)if(r instanceof HTMLElement)n.x+=r.offsetLeft,n.y+=r.offsetTop,r=r.offsetParent;else if(r.tagName==="svg"){const o=r.getBoundingClientRect();r=r.parentElement;const i=r.getBoundingClientRect();n.x+=o.left-i.left,n.y+=o.top-i.top}else if(r instanceof SVGGraphicsElement){const{x:o,y:i}=r.getBBox();n.x+=o,n.y+=i;let s=null,a=r.parentNode;for(;!s;)a.tagName==="svg"&&(s=a),a=r.parentNode;r=s}else break;return n}const q7={Enter:[[0,1],[1,1]],Exit:[[0,0],[1,0]],Any:[[1,0],[0,1]],All:[[0,0],[1,1]]},ld={start:0,center:.5,end:1};function G1(e,t,n=0){let r=0;if(ld[e]!==void 0&&(e=ld[e]),typeof e=="string"){const o=parseFloat(e);e.endsWith("px")?r=o:e.endsWith("%")?e=o/100:e.endsWith("vw")?r=o/100*document.documentElement.clientWidth:e.endsWith("vh")?r=o/100*document.documentElement.clientHeight:e=o}return typeof e=="number"&&(r=t*e),n+r}const K7=[0,0];function Y7(e,t,n,r){let o=Array.isArray(e)?e:K7,i=0,s=0;return typeof e=="number"?o=[e,e]:typeof e=="string"&&(e=e.trim(),e.includes(" ")?o=e.split(" "):o=[e,ld[e]?e:"0"]),i=G1(o[0],n,r),s=G1(o[1],t),i-s}const X7={x:0,y:0};function Z7(e){return"getBBox"in e&&e.tagName!=="svg"?e.getBBox():{width:e.clientWidth,height:e.clientHeight}}function J7(e,t,n){let{offset:r=q7.All}=n;const{target:o=e,axis:i="y"}=n,s=i==="y"?"height":"width",a=o!==e?Q7(o,e):X7,l=o===e?{width:e.scrollWidth,height:e.scrollHeight}:Z7(o),c={width:e.clientWidth,height:e.clientHeight};t[i].offset.length=0;let d=!t[i].interpolate;const f=r.length;for(let p=0;p<f;p++){const m=Y7(r[p],c[s],l[s],a[i]);!d&&m!==t[i].interpolatorOffsets[p]&&(d=!0),t[i].offset[p]=m}d&&(t[i].interpolate=Gf(t[i].offset,iv(r)),t[i].interpolatorOffsets=[...t[i].offset]),t[i].progress=t[i].interpolate(t[i].current)}function ew(e,t=e,n){if(n.x.targetOffset=0,n.y.targetOffset=0,t!==e){let r=t;for(;r&&r!==e;)n.x.targetOffset+=r.offsetLeft,n.y.targetOffset+=r.offsetTop,r=r.offsetParent}n.x.targetLength=t===e?t.scrollWidth:t.clientWidth,n.y.targetLength=t===e?t.scrollHeight:t.clientHeight,n.x.containerLength=e.clientWidth,n.y.containerLength=e.clientHeight}function tw(e,t,n,r={}){return{measure:()=>ew(e,r.target,n),update:o=>{W7(e,n,o),(r.offset||r.target)&&J7(e,n,r)},notify:()=>t(n)}}const $o=new WeakMap,U1=new WeakMap,Ou=new WeakMap,H1=e=>e===document.documentElement?window:e;function nw(e,{container:t=document.documentElement,...n}={}){let r=Ou.get(t);r||(r=new Set,Ou.set(t,r));const o=U7(),i=tw(t,e,o,n);if(r.add(i),!$o.has(t)){const a=()=>{for(const p of r)p.measure()},l=()=>{for(const p of r)p.update(Se.timestamp)},c=()=>{for(const p of r)p.notify()},d=()=>{X.read(a,!1,!0),X.update(l,!1,!0),X.update(c,!1,!0)};$o.set(t,d);const f=H1(t);window.addEventListener("resize",d,{passive:!0}),t!==document.documentElement&&U1.set(t,$7(t,d)),f.addEventListener("scroll",d,{passive:!0})}const s=$o.get(t);return X.read(s,!1,!0),()=>{var a;Qt(s);const l=Ou.get(t);if(!l||(l.delete(i),l.size))return;const c=$o.get(t);$o.delete(t),c&&(H1(t).removeEventListener("scroll",c),(a=U1.get(t))===null||a===void 0||a(),window.removeEventListener("resize",c))}}function W1(e,t){O2(!!(!t||t.current))}const rw=()=>({scrollX:At(0),scrollY:At(0),scrollXProgress:At(0),scrollYProgress:At(0)});function Ov({container:e,target:t,layoutEffect:n=!0,...r}={}){const o=us(rw);return(n?Ro:C.useEffect)(()=>(W1("target",t),W1("container",e),nw(({x:s,y:a})=>{o.scrollX.set(s.current),o.scrollXProgress.set(s.progress),o.scrollY.set(a.current),o.scrollYProgress.set(a.progress)},{...r,container:(e==null?void 0:e.current)||void 0,target:(t==null?void 0:t.current)||void 0})),[e,t,JSON.stringify(r.offset)]),o}function ow(e){e.values.forEach(t=>t.stop())}function iw(){const e=new Set,t={subscribe(n){return e.add(n),()=>void e.delete(n)},start(n,r){const o=[];return e.forEach(i=>{o.push(hv(i,n,{transitionOverride:r}))}),Promise.all(o)},set(n){return e.forEach(r=>{M8(r,n)})},stop(){e.forEach(n=>{ow(n)})},mount(){return()=>{t.stop()}}};return t}function sw(){const e=us(iw);return Ro(e.mount,[]),e}const ud=sw,aw={some:0,all:1};function lw(e,t,{root:n,margin:r,amount:o="some"}={}){const i=Dv(e),s=new WeakMap,a=c=>{c.forEach(d=>{const f=s.get(d.target);if(d.isIntersecting!==!!f)if(d.isIntersecting){const p=t(d);typeof p=="function"?s.set(d.target,p):l.unobserve(d.target)}else f&&(f(d),s.delete(d.target))})},l=new IntersectionObserver(a,{root:n,rootMargin:r,threshold:typeof o=="number"?o:aw[o]});return i.forEach(c=>l.observe(c)),()=>l.disconnect()}function Nv(e,{root:t,margin:n,amount:r,once:o=!1}={}){const[i,s]=C.useState(!1);return C.useEffect(()=>{if(!e.current||o&&i)return;const a=()=>(s(!0),o?void 0:()=>s(!1)),l={root:t&&t.current||void 0,margin:n,amount:r};return lw(e.current,a,l)},[t,e,n,o]),i}var Ke=function(){return Ke=Object.assign||function(t){for(var n,r=1,o=arguments.length;r<o;r++){n=arguments[r];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Ke.apply(this,arguments)};function Za(e,t,n){if(n||arguments.length===2)for(var r=0,o=t.length,i;r<o;r++)(i||!(r in t))&&(i||(i=Array.prototype.slice.call(t,0,r)),i[r]=t[r]);return e.concat(i||Array.prototype.slice.call(t))}var oe="-ms-",hi="-moz-",K="-webkit-",Fv="comm",Dl="rule",Zf="decl",uw="@import",Vv="@keyframes",cw="@layer",dw=Math.abs,Jf=String.fromCharCode,cd=Object.assign;function fw(e,t){return Te(e,0)^45?(((t<<2^Te(e,0))<<2^Te(e,1))<<2^Te(e,2))<<2^Te(e,3):0}function Bv(e){return e.trim()}function Zt(e,t){return(e=t.exec(e))?e[0]:e}function $(e,t,n){return e.replace(t,n)}function aa(e,t){return e.indexOf(t)}function Te(e,t){return e.charCodeAt(t)|0}function yo(e,t,n){return e.slice(t,n)}function Bt(e){return e.length}function $v(e){return e.length}function Xo(e,t){return t.push(e),e}function pw(e,t){return e.map(t).join("")}function Q1(e,t){return e.filter(function(n){return!Zt(n,t)})}var Ol=1,xo=1,Gv=0,jt=0,xe=0,Ao="";function Nl(e,t,n,r,o,i,s,a){return{value:e,root:t,parent:n,type:r,props:o,children:i,line:Ol,column:xo,length:s,return:"",siblings:a}}function vn(e,t){return cd(Nl("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Ar(e){for(;e.root;)e=vn(e.root,{children:[e]});Xo(e,e.siblings)}function hw(){return xe}function mw(){return xe=jt>0?Te(Ao,--jt):0,xo--,xe===10&&(xo=1,Ol--),xe}function Mt(){return xe=jt<Gv?Te(Ao,jt++):0,xo++,xe===10&&(xo=1,Ol++),xe}function gr(){return Te(Ao,jt)}function la(){return jt}function Fl(e,t){return yo(Ao,e,t)}function dd(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function gw(e){return Ol=xo=1,Gv=Bt(Ao=e),jt=0,[]}function vw(e){return Ao="",e}function Nu(e){return Bv(Fl(jt-1,fd(e===91?e+2:e===40?e+1:e)))}function yw(e){for(;(xe=gr())&&xe<33;)Mt();return dd(e)>2||dd(xe)>3?"":" "}function xw(e,t){for(;--t&&Mt()&&!(xe<48||xe>102||xe>57&&xe<65||xe>70&&xe<97););return Fl(e,la()+(t<6&&gr()==32&&Mt()==32))}function fd(e){for(;Mt();)switch(xe){case e:return jt;case 34:case 39:e!==34&&e!==39&&fd(xe);break;case 40:e===41&&fd(e);break;case 92:Mt();break}return jt}function ww(e,t){for(;Mt()&&e+xe!==57;)if(e+xe===84&&gr()===47)break;return"/*"+Fl(t,jt-1)+"*"+Jf(e===47?e:Mt())}function Cw(e){for(;!dd(gr());)Mt();return Fl(e,jt)}function Sw(e){return vw(ua("",null,null,null,[""],e=gw(e),0,[0],e))}function ua(e,t,n,r,o,i,s,a,l){for(var c=0,d=0,f=s,p=0,m=0,y=0,x=1,S=1,v=1,h=0,g="",w=o,j=i,P=r,k=g;S;)switch(y=h,h=Mt()){case 40:if(y!=108&&Te(k,f-1)==58){aa(k+=$(Nu(h),"&","&\f"),"&\f")!=-1&&(v=-1);break}case 34:case 39:case 91:k+=Nu(h);break;case 9:case 10:case 13:case 32:k+=yw(y);break;case 92:k+=xw(la()-1,7);continue;case 47:switch(gr()){case 42:case 47:Xo(jw(ww(Mt(),la()),t,n,l),l);break;default:k+="/"}break;case 123*x:a[c++]=Bt(k)*v;case 125*x:case 59:case 0:switch(h){case 0:case 125:S=0;case 59+d:v==-1&&(k=$(k,/\f/g,"")),m>0&&Bt(k)-f&&Xo(m>32?K1(k+";",r,n,f-1,l):K1($(k," ","")+";",r,n,f-2,l),l);break;case 59:k+=";";default:if(Xo(P=q1(k,t,n,c,d,o,a,g,w=[],j=[],f,i),i),h===123)if(d===0)ua(k,t,P,P,w,i,f,a,j);else switch(p===99&&Te(k,3)===110?100:p){case 100:case 108:case 109:case 115:ua(e,P,P,r&&Xo(q1(e,P,P,0,0,o,a,g,o,w=[],f,j),j),o,j,f,a,r?w:j);break;default:ua(k,P,P,P,[""],j,0,a,j)}}c=d=m=0,x=v=1,g=k="",f=s;break;case 58:f=1+Bt(k),m=y;default:if(x<1){if(h==123)--x;else if(h==125&&x++==0&&mw()==125)continue}switch(k+=Jf(h),h*x){case 38:v=d>0?1:(k+="\f",-1);break;case 44:a[c++]=(Bt(k)-1)*v,v=1;break;case 64:gr()===45&&(k+=Nu(Mt())),p=gr(),d=f=Bt(g=k+=Cw(la())),h++;break;case 45:y===45&&Bt(k)==2&&(x=0)}}return i}function q1(e,t,n,r,o,i,s,a,l,c,d,f){for(var p=o-1,m=o===0?i:[""],y=$v(m),x=0,S=0,v=0;x<r;++x)for(var h=0,g=yo(e,p+1,p=dw(S=s[x])),w=e;h<y;++h)(w=Bv(S>0?m[h]+" "+g:$(g,/&\f/g,m[h])))&&(l[v++]=w);return Nl(e,t,n,o===0?Dl:a,l,c,d,f)}function jw(e,t,n,r){return Nl(e,t,n,Fv,Jf(hw()),yo(e,2,-2),0,r)}function K1(e,t,n,r,o){return Nl(e,t,n,Zf,yo(e,0,r),yo(e,r+1,-1),r,o)}function Uv(e,t,n){switch(fw(e,t)){case 5103:return K+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return K+e+e;case 4789:return hi+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return K+e+hi+e+oe+e+e;case 5936:switch(Te(e,t+11)){case 114:return K+e+oe+$(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return K+e+oe+$(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return K+e+oe+$(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return K+e+oe+e+e;case 6165:return K+e+oe+"flex-"+e+e;case 5187:return K+e+$(e,/(\w+).+(:[^]+)/,K+"box-$1$2"+oe+"flex-$1$2")+e;case 5443:return K+e+oe+"flex-item-"+$(e,/flex-|-self/g,"")+(Zt(e,/flex-|baseline/)?"":oe+"grid-row-"+$(e,/flex-|-self/g,""))+e;case 4675:return K+e+oe+"flex-line-pack"+$(e,/align-content|flex-|-self/g,"")+e;case 5548:return K+e+oe+$(e,"shrink","negative")+e;case 5292:return K+e+oe+$(e,"basis","preferred-size")+e;case 6060:return K+"box-"+$(e,"-grow","")+K+e+oe+$(e,"grow","positive")+e;case 4554:return K+$(e,/([^-])(transform)/g,"$1"+K+"$2")+e;case 6187:return $($($(e,/(zoom-|grab)/,K+"$1"),/(image-set)/,K+"$1"),e,"")+e;case 5495:case 3959:return $(e,/(image-set\([^]*)/,K+"$1$`$1");case 4968:return $($(e,/(.+:)(flex-)?(.*)/,K+"box-pack:$3"+oe+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+K+e+e;case 4200:if(!Zt(e,/flex-|baseline/))return oe+"grid-column-align"+yo(e,t)+e;break;case 2592:case 3360:return oe+$(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,o){return t=o,Zt(r.props,/grid-\w+-end/)})?~aa(e+(n=n[t].value),"span")?e:oe+$(e,"-start","")+e+oe+"grid-row-span:"+(~aa(n,"span")?Zt(n,/\d+/):+Zt(n,/\d+/)-+Zt(e,/\d+/))+";":oe+$(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return Zt(r.props,/grid-\w+-start/)})?e:oe+$($(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return $(e,/(.+)-inline(.+)/,K+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Bt(e)-1-t>6)switch(Te(e,t+1)){case 109:if(Te(e,t+4)!==45)break;case 102:return $(e,/(.+:)(.+)-([^]+)/,"$1"+K+"$2-$3$1"+hi+(Te(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~aa(e,"stretch")?Uv($(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return $(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,o,i,s,a,l,c){return oe+o+":"+i+c+(s?oe+o+"-span:"+(a?l:+l-+i)+c:"")+e});case 4949:if(Te(e,t+6)===121)return $(e,":",":"+K)+e;break;case 6444:switch(Te(e,Te(e,14)===45?18:11)){case 120:return $(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+K+(Te(e,14)===45?"inline-":"")+"box$3$1"+K+"$2$3$1"+oe+"$2box$3")+e;case 100:return $(e,":",":"+oe)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return $(e,"scroll-","scroll-snap-")+e}return e}function Ja(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function Pw(e,t,n,r){switch(e.type){case cw:if(e.children.length)break;case uw:case Zf:return e.return=e.return||e.value;case Fv:return"";case Vv:return e.return=e.value+"{"+Ja(e.children,r)+"}";case Dl:if(!Bt(e.value=e.props.join(",")))return""}return Bt(n=Ja(e.children,r))?e.return=e.value+"{"+n+"}":""}function kw(e){var t=$v(e);return function(n,r,o,i){for(var s="",a=0;a<t;a++)s+=e[a](n,r,o,i)||"";return s}}function Ew(e){return function(t){t.root||(t=t.return)&&e(t)}}function Tw(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case Zf:e.return=Uv(e.value,e.length,n);return;case Vv:return Ja([vn(e,{value:$(e.value,"@","@"+K)})],r);case Dl:if(e.length)return pw(n=e.props,function(o){switch(Zt(o,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Ar(vn(e,{props:[$(o,/:(read-\w+)/,":"+hi+"$1")]})),Ar(vn(e,{props:[o]})),cd(e,{props:Q1(n,r)});break;case"::placeholder":Ar(vn(e,{props:[$(o,/:(plac\w+)/,":"+K+"input-$1")]})),Ar(vn(e,{props:[$(o,/:(plac\w+)/,":"+hi+"$1")]})),Ar(vn(e,{props:[$(o,/:(plac\w+)/,oe+"input-$1")]})),Ar(vn(e,{props:[o]})),cd(e,{props:Q1(n,r)});break}return""})}}var bw={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},rt={},wo=typeof process<"u"&&rt!==void 0&&(rt.REACT_APP_SC_ATTR||rt.SC_ATTR)||"data-styled",ep=typeof window<"u"&&"HTMLElement"in window,Rw=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&rt!==void 0&&rt.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&rt.REACT_APP_SC_DISABLE_SPEEDY!==""?rt.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&rt.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&rt!==void 0&&rt.SC_DISABLE_SPEEDY!==void 0&&rt.SC_DISABLE_SPEEDY!==""&&rt.SC_DISABLE_SPEEDY!=="false"&&rt.SC_DISABLE_SPEEDY),Vl=Object.freeze([]),Co=Object.freeze({});function Aw(e,t,n){return n===void 0&&(n=Co),e.theme!==n.theme&&e.theme||t||n.theme}var Hv=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),_w=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Lw=/(^-|-$)/g;function Y1(e){return e.replace(_w,"-").replace(Lw,"")}var zw=/(a)(d)/gi,X1=function(e){return String.fromCharCode(e+(e>25?39:97))};function pd(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=X1(t%52)+n;return(X1(t%52)+n).replace(zw,"$1-$2")}var Fu,Yr=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Wv=function(e){return Yr(5381,e)};function Mw(e){return pd(Wv(e)>>>0)}function Iw(e){return e.displayName||e.name||"Component"}function Vu(e){return typeof e=="string"&&!0}var Qv=typeof Symbol=="function"&&Symbol.for,qv=Qv?Symbol.for("react.memo"):60115,Dw=Qv?Symbol.for("react.forward_ref"):60112,Ow={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Nw={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Kv={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Fw=((Fu={})[Dw]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Fu[qv]=Kv,Fu);function Z1(e){return("type"in(t=e)&&t.type.$$typeof)===qv?Kv:"$$typeof"in e?Fw[e.$$typeof]:Ow;var t}var Vw=Object.defineProperty,Bw=Object.getOwnPropertyNames,J1=Object.getOwnPropertySymbols,$w=Object.getOwnPropertyDescriptor,Gw=Object.getPrototypeOf,e0=Object.prototype;function Yv(e,t,n){if(typeof t!="string"){if(e0){var r=Gw(t);r&&r!==e0&&Yv(e,r,n)}var o=Bw(t);J1&&(o=o.concat(J1(t)));for(var i=Z1(e),s=Z1(t),a=0;a<o.length;++a){var l=o[a];if(!(l in Nw||n&&n[l]||s&&l in s||i&&l in i)){var c=$w(t,l);try{Vw(e,l,c)}catch{}}}}return e}function So(e){return typeof e=="function"}function tp(e){return typeof e=="object"&&"styledComponentId"in e}function pr(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function t0(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function $i(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function hd(e,t,n){if(n===void 0&&(n=!1),!n&&!$i(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=hd(e[r],t[r]);else if($i(t))for(var r in t)e[r]=hd(e[r],t[r]);return e}function np(e,t){Object.defineProperty(e,"toString",{value:t})}function ds(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var Uw=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,o=r.length,i=o;t>=i;)if((i<<=1)<0)throw ds(16,"".concat(t));this.groupSizes=new Uint32Array(i),this.groupSizes.set(r),this.length=i;for(var s=o;s<i;s++)this.groupSizes[s]=0}for(var a=this.indexOfGroup(t+1),l=(s=0,n.length);s<l;s++)this.tag.insertRule(a,n[s])&&(this.groupSizes[t]++,a++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),o=r+n;this.groupSizes[t]=0;for(var i=r;i<o;i++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],o=this.indexOfGroup(t),i=o+r,s=o;s<i;s++)n+="".concat(this.tag.getRule(s)).concat(`/*!sc*/
`);return n},e}(),ca=new Map,el=new Map,da=1,Os=function(e){if(ca.has(e))return ca.get(e);for(;el.has(da);)da++;var t=da++;return ca.set(e,t),el.set(t,e),t},Hw=function(e,t){da=t+1,ca.set(e,t),el.set(t,e)},Ww="style[".concat(wo,"][").concat("data-styled-version",'="').concat("6.1.1",'"]'),Qw=new RegExp("^".concat(wo,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),qw=function(e,t,n){for(var r,o=n.split(","),i=0,s=o.length;i<s;i++)(r=o[i])&&e.registerName(t,r)},Kw=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(`/*!sc*/
`),o=[],i=0,s=r.length;i<s;i++){var a=r[i].trim();if(a){var l=a.match(Qw);if(l){var c=0|parseInt(l[1],10),d=l[2];c!==0&&(Hw(d,c),qw(e,d,l[3]),e.getTag().insertRules(c,o)),o.length=0}else o.push(a)}}};function Yw(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Xv=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=function(a){var l=Array.from(a.querySelectorAll("style[".concat(wo,"]")));return l[l.length-1]}(n),i=o!==void 0?o.nextSibling:null;r.setAttribute(wo,"active"),r.setAttribute("data-styled-version","6.1.1");var s=Yw();return s&&r.setAttribute("nonce",s),n.insertBefore(r,i),r},Xw=function(){function e(t){this.element=Xv(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,o=0,i=r.length;o<i;o++){var s=r[o];if(s.ownerNode===n)return s}throw ds(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),Zw=function(){function e(t){this.element=Xv(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),Jw=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),n0=ep,eC={isServer:!ep,useCSSOMInjection:!Rw},Zv=function(){function e(t,n,r){t===void 0&&(t=Co),n===void 0&&(n={});var o=this;this.options=Ke(Ke({},eC),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&ep&&n0&&(n0=!1,function(i){for(var s=document.querySelectorAll(Ww),a=0,l=s.length;a<l;a++){var c=s[a];c&&c.getAttribute(wo)!=="active"&&(Kw(i,c),c.parentNode&&c.parentNode.removeChild(c))}}(this)),np(this,function(){return function(i){for(var s=i.getTag(),a=s.length,l="",c=function(f){var p=function(v){return el.get(v)}(f);if(p===void 0)return"continue";var m=i.names.get(p),y=s.getGroup(f);if(m===void 0||y.length===0)return"continue";var x="".concat(wo,".g").concat(f,'[id="').concat(p,'"]'),S="";m!==void 0&&m.forEach(function(v){v.length>0&&(S+="".concat(v,","))}),l+="".concat(y).concat(x,'{content:"').concat(S,'"}').concat(`/*!sc*/
`)},d=0;d<a;d++)c(d);return l}(o)})}return e.registerId=function(t){return Os(t)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(Ke(Ke({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,o=n.target;return n.isServer?new Jw(o):r?new Xw(o):new Zw(o)}(this.options),new Uw(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(Os(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(Os(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(Os(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),tC=/&/g,nC=/^\s*\/\/.*$/gm;function Jv(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=Jv(n.children,t)),n})}function rC(e){var t,n,r,o=e===void 0?Co:e,i=o.options,s=i===void 0?Co:i,a=o.plugins,l=a===void 0?Vl:a,c=function(p,m,y){return y===n||y.startsWith(n)&&y.endsWith(n)&&y.replaceAll(n,"").length>0?".".concat(t):p},d=l.slice();d.push(function(p){p.type===Dl&&p.value.includes("&")&&(p.props[0]=p.props[0].replace(tC,n).replace(r,c))}),s.prefix&&d.push(Tw),d.push(Pw);var f=function(p,m,y,x){m===void 0&&(m=""),y===void 0&&(y=""),x===void 0&&(x="&"),t=x,n=m,r=new RegExp("\\".concat(n,"\\b"),"g");var S=p.replace(nC,""),v=Sw(y||m?"".concat(y," ").concat(m," { ").concat(S," }"):S);s.namespace&&(v=Jv(v,s.namespace));var h=[];return Ja(v,kw(d.concat(Ew(function(g){return h.push(g)})))),h};return f.hash=l.length?l.reduce(function(p,m){return m.name||ds(15),Yr(p,m.name)},5381).toString():"",f}var oC=new Zv,md=rC(),ey=F.createContext({shouldForwardProp:void 0,styleSheet:oC,stylis:md});ey.Consumer;F.createContext(void 0);function r0(){return C.useContext(ey)}var iC=function(){function e(t,n){var r=this;this.inject=function(o,i){i===void 0&&(i=md);var s=r.name+i.hash;o.hasNameForId(r.id,s)||o.insertRules(r.id,s,i(r.rules,s,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,np(this,function(){throw ds(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=md),this.name+t.hash},e}(),sC=function(e){return e>="A"&&e<="Z"};function o0(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;sC(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var ty=function(e){return e==null||e===!1||e===""},ny=function(e){var t,n,r=[];for(var o in e){var i=e[o];e.hasOwnProperty(o)&&!ty(i)&&(Array.isArray(i)&&i.isCss||So(i)?r.push("".concat(o0(o),":"),i,";"):$i(i)?r.push.apply(r,Za(Za(["".concat(o," {")],ny(i),!1),["}"],!1)):r.push("".concat(o0(o),": ").concat((t=o,(n=i)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in bw||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function vr(e,t,n,r){if(ty(e))return[];if(tp(e))return[".".concat(e.styledComponentId)];if(So(e)){if(!So(i=e)||i.prototype&&i.prototype.isReactComponent||!t)return[e];var o=e(t);return vr(o,t,n,r)}var i;return e instanceof iC?n?(e.inject(n,r),[e.getName(r)]):[e]:$i(e)?ny(e):Array.isArray(e)?Array.prototype.concat.apply(Vl,e.map(function(s){return vr(s,t,n,r)})):[e.toString()]}function aC(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(So(n)&&!tp(n))return!1}return!0}var lC=Wv("6.1.1"),uC=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&aC(t),this.componentId=n,this.baseHash=Yr(lC,n),this.baseStyle=r,Zv.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))o=pr(o,this.staticRulesId);else{var i=t0(vr(this.rules,t,n,r)),s=pd(Yr(this.baseHash,i)>>>0);if(!n.hasNameForId(this.componentId,s)){var a=r(i,".".concat(s),void 0,this.componentId);n.insertRules(this.componentId,s,a)}o=pr(o,s),this.staticRulesId=s}else{for(var l=Yr(this.baseHash,r.hash),c="",d=0;d<this.rules.length;d++){var f=this.rules[d];if(typeof f=="string")c+=f;else if(f){var p=t0(vr(f,t,n,r));l=Yr(l,p+d),c+=p}}if(c){var m=pd(l>>>0);n.hasNameForId(this.componentId,m)||n.insertRules(this.componentId,m,r(c,".".concat(m),void 0,this.componentId)),o=pr(o,m)}}return o},e}(),ry=F.createContext(void 0);ry.Consumer;var Bu={};function cC(e,t,n){var r=tp(e),o=e,i=!Vu(e),s=t.attrs,a=s===void 0?Vl:s,l=t.componentId,c=l===void 0?function(w,j){var P=typeof w!="string"?"sc":Y1(w);Bu[P]=(Bu[P]||0)+1;var k="".concat(P,"-").concat(Mw("6.1.1"+P+Bu[P]));return j?"".concat(j,"-").concat(k):k}(t.displayName,t.parentComponentId):l,d=t.displayName,f=d===void 0?function(w){return Vu(w)?"styled.".concat(w):"Styled(".concat(Iw(w),")")}(e):d,p=t.displayName&&t.componentId?"".concat(Y1(t.displayName),"-").concat(t.componentId):t.componentId||c,m=r&&o.attrs?o.attrs.concat(a).filter(Boolean):a,y=t.shouldForwardProp;if(r&&o.shouldForwardProp){var x=o.shouldForwardProp;if(t.shouldForwardProp){var S=t.shouldForwardProp;y=function(w,j){return x(w,j)&&S(w,j)}}else y=x}var v=new uC(n,p,r?o.componentStyle:void 0);function h(w,j){return function(P,k,E){var R=P.attrs,_=P.componentStyle,I=P.defaultProps,G=P.foldedComponentIds,U=P.styledComponentId,B=P.target,q=F.useContext(ry),ee=r0(),se=P.shouldForwardProp||ee.shouldForwardProp,A=function(Fe,ft,ke){for(var tt,Kt=Ke(Ke({},ft),{className:void 0,theme:ke}),Jn=0;Jn<Fe.length;Jn+=1){var Yt=So(tt=Fe[Jn])?tt(Kt):tt;for(var Le in Yt)Kt[Le]=Le==="className"?pr(Kt[Le],Yt[Le]):Le==="style"?Ke(Ke({},Kt[Le]),Yt[Le]):Yt[Le]}return ft.className&&(Kt.className=pr(Kt.className,ft.className)),Kt}(R,k,Aw(k,q,I)||Co),z=A.as||B,O={};for(var M in A)A[M]===void 0||M[0]==="$"||M==="as"||M==="theme"||(M==="forwardedAs"?O.as=A.forwardedAs:se&&!se(M,z)||(O[M]=A[M]));var te=function(Fe,ft){var ke=r0(),tt=Fe.generateAndInjectStyles(ft,ke.styleSheet,ke.stylis);return tt}(_,A),Pt=pr(G,U);return te&&(Pt+=" "+te),A.className&&(Pt+=" "+A.className),O[Vu(z)&&!Hv.has(z)?"class":"className"]=Pt,O.ref=E,C.createElement(z,O)}(g,w,j)}h.displayName=f;var g=F.forwardRef(h);return g.attrs=m,g.componentStyle=v,g.displayName=f,g.shouldForwardProp=y,g.foldedComponentIds=r?pr(o.foldedComponentIds,o.styledComponentId):"",g.styledComponentId=p,g.target=r?o.target:e,Object.defineProperty(g,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(w){this._foldedDefaultProps=r?function(j){for(var P=[],k=1;k<arguments.length;k++)P[k-1]=arguments[k];for(var E=0,R=P;E<R.length;E++)hd(j,R[E],!0);return j}({},o.defaultProps,w):w}}),np(g,function(){return".".concat(g.styledComponentId)}),i&&Yv(g,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),g}function i0(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n}var s0=function(e){return Object.assign(e,{isCss:!0})};function dC(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(So(e)||$i(e)){var r=e;return s0(vr(i0(Vl,Za([r],t,!0))))}var o=e;return t.length===0&&o.length===1&&typeof o[0]=="string"?vr(o):s0(vr(i0(o,t)))}function gd(e,t,n){if(n===void 0&&(n=Co),!t)throw ds(1,t);var r=function(o){for(var i=[],s=1;s<arguments.length;s++)i[s-1]=arguments[s];return e(t,n,dC.apply(void 0,Za([o],i,!1)))};return r.attrs=function(o){return gd(e,t,Ke(Ke({},n),{attrs:Array.prototype.concat(n.attrs,o).filter(Boolean)}))},r.withConfig=function(o){return gd(e,t,Ke(Ke({},n),o))},r}var oy=function(e){return gd(cC,e)},et=oy;Hv.forEach(function(e){et[e]=oy(e)});const fC=et.div`

.stairs{
    .transition-container{
        height: 100vh;
        width: 100vw;
        position: fixed;
        top: 0;
        left: 0;
        margin: 0;
        padding: 0;
        border: none; 
        pointer-events: none;
        display: flex;
        z-index: 999;

        div{
            position: relative;
            height: 100%;
            width: 100%;
            margin: 0;
            padding: 0;
            border: none; 
            background-color: #000000;
            z-index: 999;
        }
    }
    .background{
        height: 100vh;
        width: 100vw;
        position: fixed;
        top: 0;
        left: 0;
        pointer-events: none;       
        z-index: 999;
        background-color: black;

    }
 }









.slide-in{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: #0f0f0f;
    transform-origin: bottom;
    z-index: 999;

}
.slide-out{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: #0f0f0f;
    transform-origin: top;
    z-index: 999;

}
`,fs=({children:e})=>{const t=(o,i)=>({initial:"initial",animate:"enter",exit:"exit",variants:o,custom:i}),n={initial:{top:0},enter:o=>({top:"100%",transition:{duration:.7,delay:.05*o},transitionEnd:{height:0,top:0}}),exit:o=>({height:"100%",transition:{duration:.7,delay:.05*o}})},r=7;return u.jsxs(fC,{children:[u.jsx("div",{className:"page stairs",children:u.jsx("div",{className:"transition-container",children:[...Array(r)].map((o,i)=>C.createElement(De.div,{...t(n,r-i),key:i}))})}),e]})},pC=et.div`

    box-sizing: border-box;
    margin: 0;
    padding: 0;




    height: 43.125rem;
    overflow: hidden;
    background-color: black;


        section{
        
            position: relative;
            width: 100%;
            height: 6.25rem;
            
            background: red;
            font-family: 'Poppins', sans-serif;
            z-index: 0;
            
        }
        .text{
            position: relative;
            transform: skewY(345deg) translateY(-200px) !important;
            background-color: black;
            /* animation: animatedColor 5s linear infinite; */
            z-index: 1;
            height: 1300px;
            width: 100%;
            bottom: 100px;
            overflow: hidden;
        }

/* @keyframes animatedColor {
    0%{
        filter: hue-rotate(0deg);
    }
    100%{
        filter: hue-rotate(720deg);
    }
    
} */

    .text h2{
        position: relative;
        width: 100%;
        font-size: 6em;
        color: purple;
        pointer-events: none;
        line-height: 1em;
        white-space: nowrap;
        text-shadow: calc(var(--x)) 100px 0 rgba(255,255,255,0.2);  
        transform: translateX(calc(0% - var(--x) * var(--i)));
        opacity: 1;
    }

    /* .text p {
    position: relative;
    width: 100%;
    font-size: 1em;
    color: white;
    pointer-events: none;
    line-height: 1em;
    white-space: nowrap;
    text-shadow: var(--x, 0) 0 0 rgba(255, 255, 255, 0.95);
                
    transform: translateX(calc(0% - var(--x, 0) * var(--i))); 
    opacity: 1;
    } */


    .text h2 span{
    color: #F9F871;
    margin: 0 10px;
    }
    .text h2 span:nth-child(even){
        color: transparent;
        -webkit-text-stroke: 2px white;
    }
   

  

  

    /* &::before,
    &::after {
      content: "";
      position: absolute;
      z-index: 0; 
      width: calc(100% + 10px);
      height: calc(100% + 10px);
      background: linear-gradient(45deg, #ffff00, #00ff00, #0099ff, #001aff, #a200ff, #ff0055, #ff0000, #ffff00, #00ff00, #0099ff, #001aff, #a200ff);
      border-radius: 50%;
      background-size: 300%;
      animation: BorderAnimation 8s linear infinite;
      
    }

    @keyframes BorderAnimation {
        0%{
            background-position: 0;
        }
        100%{
            background-position: 300%;
        }

    }

    &::after{
        filter: blur(15px);
    }  */

  .box{
       
        background-image: linear-gradient(to right, #000000, #090506, #100a0d, #150e12, #191217);
        color: #00C89B;              
        height: 22.5rem;        
        z-index: 3;     
        position: relative;
        top: -75rem; 
        width: 100%;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;

        .title {
            position: relative;
            font-family: 'Poppins', sans-serif;                   
            width: 60%;
            z-index: 0;
            top: 0px;
            left: 8%;
            color: #479ED0;  
            h1{
                
                font-size: 120px;
            font-weight: 600;
            line-height: 130px;    
            }
        } 
        .caixa {
            position: relative;
            width: 40%;
            height: 100%;            
            z-index: -2;    
           border-radius: 0%;
           
           
                img {            
           
           border-radius: 50%; 
           transform: scale(1.0);
           position: relative;
           top: -70px; 
           left: 5px;                                
            z-index: -3;
           
           
            
            }
        
        }
    }
    @media only screen and (max-width: 1310px){
        .box{
            
            .title{
                h1{
           font-size: 60px;
           width: 600px;     
        }}
        .caixa {
            img{
                width: 300px;
                object-fit: contain; 
                top: 20px ;
                left: -100px ;
            }}
    }
        /* .caixa {           
            left: 400px;
            top: -400px;
            z-index: -2;
            background-color: transparent;
            
             
            
            img{
                width: 400px;
                position: relative;
                top: -50px !important;
                left: 20px !important;
    }
    } */
    }
    @media only screen and (max-width: 768px){

     
        height: 500px;
        

        .box{
            height: 18.75rem; 
            width: 100%; 

             h1{
            font-size: 40px !important; 
            left: 30px;
            line-height: 100px;
            width: 380px !important;
            top: 50px;
            }          
            .caixa {           
           /*  left: 70px;
            top: -270px;
            z-index: -2;
            width: 300px;
            height: 300px; */
            

            img{
                width: 230px;
                object-fit: contain; 
                top: 20px ;
                left: -80px ;    
                /*            
                position: relative !important;
                
                z-index: 0;   */              
            }
        }       
    }
            

    .text h2{
        font-size: 70px;
        line-height: 14px;
    }
}
`,hC="/portfolio/assets/Captura de tela 2023-01-05 012557-2xbGSWZ3.png";var mC=Object.defineProperty,gC=(e,t)=>{for(var n in t)mC(e,n,{get:t[n],enumerable:!0})},Dt={};gC(Dt,{assign:()=>xC,colors:()=>$n,createStringInterpolator:()=>up,skipAnimation:()=>dy,to:()=>cy,willAdvance:()=>cp});var rp=hs(),V=e=>ps(e,rp),op=hs();V.write=e=>ps(e,op);var Bl=hs();V.onStart=e=>ps(e,Bl);var ip=hs();V.onFrame=e=>ps(e,ip);var sp=hs();V.onFinish=e=>ps(e,sp);var ro=[];V.setTimeout=(e,t)=>{const n=V.now()+t,r=()=>{const i=ro.findIndex(s=>s.cancel==r);~i&&ro.splice(i,1),Tn-=~i?1:0},o={time:n,handler:e,cancel:r};return ro.splice(iy(n),0,o),Tn+=1,sy(),o};var iy=e=>~(~ro.findIndex(t=>t.time>e)||~ro.length);V.cancel=e=>{Bl.delete(e),ip.delete(e),sp.delete(e),rp.delete(e),op.delete(e)};V.sync=e=>{vd=!0,V.batchedUpdates(e),vd=!1};V.throttle=e=>{let t;function n(){try{e(...t)}finally{t=null}}function r(...o){t=o,V.onStart(n)}return r.handler=e,r.cancel=()=>{Bl.delete(n),t=null},r};var ap=typeof window<"u"?window.requestAnimationFrame:()=>{};V.use=e=>ap=e;V.now=typeof performance<"u"?()=>performance.now():Date.now;V.batchedUpdates=e=>e();V.catch=console.error;V.frameLoop="always";V.advance=()=>{V.frameLoop!=="demand"?console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand"):ly()};var En=-1,Tn=0,vd=!1;function ps(e,t){vd?(t.delete(e),e(0)):(t.add(e),sy())}function sy(){En<0&&(En=0,V.frameLoop!=="demand"&&ap(ay))}function vC(){En=-1}function ay(){~En&&(ap(ay),V.batchedUpdates(ly))}function ly(){const e=En;En=V.now();const t=iy(En);if(t&&(uy(ro.splice(0,t),n=>n.handler()),Tn-=t),!Tn){vC();return}Bl.flush(),rp.flush(e?Math.min(64,En-e):16.667),ip.flush(),op.flush(),sp.flush()}function hs(){let e=new Set,t=e;return{add(n){Tn+=t==e&&!e.has(n)?1:0,e.add(n)},delete(n){return Tn-=t==e&&e.has(n)?1:0,e.delete(n)},flush(n){t.size&&(e=new Set,Tn-=t.size,uy(t,r=>r(n)&&e.add(r)),Tn+=e.size,t=e)}}}function uy(e,t){e.forEach(n=>{try{t(n)}catch(r){V.catch(r)}})}function yd(){}var yC=(e,t,n)=>Object.defineProperty(e,t,{value:n,writable:!0,configurable:!0}),b={arr:Array.isArray,obj:e=>!!e&&e.constructor.name==="Object",fun:e=>typeof e=="function",str:e=>typeof e=="string",num:e=>typeof e=="number",und:e=>e===void 0};function Jt(e,t){if(b.arr(e)){if(!b.arr(t)||e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}return e===t}var W=(e,t)=>e.forEach(t);function qt(e,t,n){if(b.arr(e)){for(let r=0;r<e.length;r++)t.call(n,e[r],`${r}`);return}for(const r in e)e.hasOwnProperty(r)&&t.call(n,e[r],r)}var st=e=>b.und(e)?[]:b.arr(e)?e:[e];function mi(e,t){if(e.size){const n=Array.from(e);e.clear(),W(n,t)}}var Zo=(e,...t)=>mi(e,n=>n(...t)),lp=()=>typeof window>"u"||!window.navigator||/ServerSideRendering|^Deno\//.test(window.navigator.userAgent),up,cy,$n=null,dy=!1,cp=yd,xC=e=>{e.to&&(cy=e.to),e.now&&(V.now=e.now),e.colors!==void 0&&($n=e.colors),e.skipAnimation!=null&&(dy=e.skipAnimation),e.createStringInterpolator&&(up=e.createStringInterpolator),e.requestAnimationFrame&&V.use(e.requestAnimationFrame),e.batchedUpdates&&(V.batchedUpdates=e.batchedUpdates),e.willAdvance&&(cp=e.willAdvance),e.frameLoop&&(V.frameLoop=e.frameLoop)},gi=new Set,yt=[],$u=[],tl=0,$l={get idle(){return!gi.size&&!yt.length},start(e){tl>e.priority?(gi.add(e),V.onStart(wC)):(fy(e),V(xd))},advance:xd,sort(e){if(tl)V.onFrame(()=>$l.sort(e));else{const t=yt.indexOf(e);~t&&(yt.splice(t,1),py(e))}},clear(){yt=[],gi.clear()}};function wC(){gi.forEach(fy),gi.clear(),V(xd)}function fy(e){yt.includes(e)||py(e)}function py(e){yt.splice(CC(yt,t=>t.priority>e.priority),0,e)}function xd(e){const t=$u;for(let n=0;n<yt.length;n++){const r=yt[n];tl=r.priority,r.idle||(cp(r),r.advance(e),r.idle||t.push(r))}return tl=0,$u=yt,$u.length=0,yt=t,yt.length>0}function CC(e,t){const n=e.findIndex(t);return n<0?e.length:n}var SC=(e,t,n)=>Math.min(Math.max(n,e),t),jC={transparent:0,aliceblue:4042850303,antiquewhite:4209760255,aqua:16777215,aquamarine:2147472639,azure:4043309055,beige:4126530815,bisque:4293182719,black:255,blanchedalmond:4293643775,blue:65535,blueviolet:2318131967,brown:2771004159,burlywood:3736635391,burntsienna:3934150143,cadetblue:1604231423,chartreuse:2147418367,chocolate:3530104575,coral:4286533887,cornflowerblue:1687547391,cornsilk:4294499583,crimson:3692313855,cyan:16777215,darkblue:35839,darkcyan:9145343,darkgoldenrod:3095792639,darkgray:2846468607,darkgreen:6553855,darkgrey:2846468607,darkkhaki:3182914559,darkmagenta:2332068863,darkolivegreen:1433087999,darkorange:4287365375,darkorchid:2570243327,darkred:2332033279,darksalmon:3918953215,darkseagreen:2411499519,darkslateblue:1211993087,darkslategray:793726975,darkslategrey:793726975,darkturquoise:13554175,darkviolet:2483082239,deeppink:4279538687,deepskyblue:12582911,dimgray:1768516095,dimgrey:1768516095,dodgerblue:512819199,firebrick:2988581631,floralwhite:4294635775,forestgreen:579543807,fuchsia:4278255615,gainsboro:3705462015,ghostwhite:4177068031,gold:4292280575,goldenrod:3668254975,gray:2155905279,green:8388863,greenyellow:2919182335,grey:2155905279,honeydew:4043305215,hotpink:4285117695,indianred:3445382399,indigo:1258324735,ivory:4294963455,khaki:4041641215,lavender:3873897215,lavenderblush:4293981695,lawngreen:2096890111,lemonchiffon:4294626815,lightblue:2916673279,lightcoral:4034953471,lightcyan:3774873599,lightgoldenrodyellow:4210742015,lightgray:3553874943,lightgreen:2431553791,lightgrey:3553874943,lightpink:4290167295,lightsalmon:4288707327,lightseagreen:548580095,lightskyblue:2278488831,lightslategray:2005441023,lightslategrey:2005441023,lightsteelblue:2965692159,lightyellow:4294959359,lime:16711935,limegreen:852308735,linen:4210091775,magenta:4278255615,maroon:2147483903,mediumaquamarine:1724754687,mediumblue:52735,mediumorchid:3126187007,mediumpurple:2473647103,mediumseagreen:1018393087,mediumslateblue:2070474495,mediumspringgreen:16423679,mediumturquoise:1221709055,mediumvioletred:3340076543,midnightblue:421097727,mintcream:4127193855,mistyrose:4293190143,moccasin:4293178879,navajowhite:4292783615,navy:33023,oldlace:4260751103,olive:2155872511,olivedrab:1804477439,orange:4289003775,orangered:4282712319,orchid:3664828159,palegoldenrod:4008225535,palegreen:2566625535,paleturquoise:2951671551,palevioletred:3681588223,papayawhip:4293907967,peachpuff:4292524543,peru:3448061951,pink:4290825215,plum:3718307327,powderblue:2967529215,purple:2147516671,rebeccapurple:1714657791,red:4278190335,rosybrown:3163525119,royalblue:1097458175,saddlebrown:2336560127,salmon:4202722047,sandybrown:4104413439,seagreen:780883967,seashell:4294307583,sienna:2689740287,silver:3233857791,skyblue:2278484991,slateblue:1784335871,slategray:1887473919,slategrey:1887473919,snow:4294638335,springgreen:16744447,steelblue:1182971135,tan:3535047935,teal:8421631,thistle:3636451583,tomato:4284696575,turquoise:1088475391,violet:4001558271,wheat:4125012991,white:4294967295,whitesmoke:4126537215,yellow:4294902015,yellowgreen:2597139199},_t="[-+]?\\d*\\.?\\d+",nl=_t+"%";function Gl(...e){return"\\(\\s*("+e.join(")\\s*,\\s*(")+")\\s*\\)"}var PC=new RegExp("rgb"+Gl(_t,_t,_t)),kC=new RegExp("rgba"+Gl(_t,_t,_t,_t)),EC=new RegExp("hsl"+Gl(_t,nl,nl)),TC=new RegExp("hsla"+Gl(_t,nl,nl,_t)),bC=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,RC=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,AC=/^#([0-9a-fA-F]{6})$/,_C=/^#([0-9a-fA-F]{8})$/;function LC(e){let t;return typeof e=="number"?e>>>0===e&&e>=0&&e<=4294967295?e:null:(t=AC.exec(e))?parseInt(t[1]+"ff",16)>>>0:$n&&$n[e]!==void 0?$n[e]:(t=PC.exec(e))?(_r(t[1])<<24|_r(t[2])<<16|_r(t[3])<<8|255)>>>0:(t=kC.exec(e))?(_r(t[1])<<24|_r(t[2])<<16|_r(t[3])<<8|u0(t[4]))>>>0:(t=bC.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+"ff",16)>>>0:(t=_C.exec(e))?parseInt(t[1],16)>>>0:(t=RC.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+t[4]+t[4],16)>>>0:(t=EC.exec(e))?(a0(l0(t[1]),Ns(t[2]),Ns(t[3]))|255)>>>0:(t=TC.exec(e))?(a0(l0(t[1]),Ns(t[2]),Ns(t[3]))|u0(t[4]))>>>0:null}function Gu(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function a0(e,t,n){const r=n<.5?n*(1+t):n+t-n*t,o=2*n-r,i=Gu(o,r,e+1/3),s=Gu(o,r,e),a=Gu(o,r,e-1/3);return Math.round(i*255)<<24|Math.round(s*255)<<16|Math.round(a*255)<<8}function _r(e){const t=parseInt(e,10);return t<0?0:t>255?255:t}function l0(e){return(parseFloat(e)%360+360)%360/360}function u0(e){const t=parseFloat(e);return t<0?0:t>1?255:Math.round(t*255)}function Ns(e){const t=parseFloat(e);return t<0?0:t>100?1:t/100}function c0(e){let t=LC(e);if(t===null)return e;t=t||0;const n=(t&4278190080)>>>24,r=(t&16711680)>>>16,o=(t&65280)>>>8,i=(t&255)/255;return`rgba(${n}, ${r}, ${o}, ${i})`}var Gi=(e,t,n)=>{if(b.fun(e))return e;if(b.arr(e))return Gi({range:e,output:t,extrapolate:n});if(b.str(e.output[0]))return up(e);const r=e,o=r.output,i=r.range||[0,1],s=r.extrapolateLeft||r.extrapolate||"extend",a=r.extrapolateRight||r.extrapolate||"extend",l=r.easing||(c=>c);return c=>{const d=MC(c,i);return zC(c,i[d],i[d+1],o[d],o[d+1],l,s,a,r.map)}};function zC(e,t,n,r,o,i,s,a,l){let c=l?l(e):e;if(c<t){if(s==="identity")return c;s==="clamp"&&(c=t)}if(c>n){if(a==="identity")return c;a==="clamp"&&(c=n)}return r===o?r:t===n?e<=t?r:o:(t===-1/0?c=-c:n===1/0?c=c-t:c=(c-t)/(n-t),c=i(c),r===-1/0?c=-c:o===1/0?c=c+r:c=c*(o-r)+r,c)}function MC(e,t){for(var n=1;n<t.length-1&&!(t[n]>=e);++n);return n-1}var IC=(e,t="end")=>n=>{n=t==="end"?Math.min(n,.999):Math.max(n,.001);const r=n*e,o=t==="end"?Math.floor(r):Math.ceil(r);return SC(0,1,o/e)},rl=1.70158,Fs=rl*1.525,d0=rl+1,f0=2*Math.PI/3,p0=2*Math.PI/4.5,Vs=e=>e<1/2.75?7.5625*e*e:e<2/2.75?7.5625*(e-=1.5/2.75)*e+.75:e<2.5/2.75?7.5625*(e-=2.25/2.75)*e+.9375:7.5625*(e-=2.625/2.75)*e+.984375,DC={linear:e=>e,easeInQuad:e=>e*e,easeOutQuad:e=>1-(1-e)*(1-e),easeInOutQuad:e=>e<.5?2*e*e:1-Math.pow(-2*e+2,2)/2,easeInCubic:e=>e*e*e,easeOutCubic:e=>1-Math.pow(1-e,3),easeInOutCubic:e=>e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2,easeInQuart:e=>e*e*e*e,easeOutQuart:e=>1-Math.pow(1-e,4),easeInOutQuart:e=>e<.5?8*e*e*e*e:1-Math.pow(-2*e+2,4)/2,easeInQuint:e=>e*e*e*e*e,easeOutQuint:e=>1-Math.pow(1-e,5),easeInOutQuint:e=>e<.5?16*e*e*e*e*e:1-Math.pow(-2*e+2,5)/2,easeInSine:e=>1-Math.cos(e*Math.PI/2),easeOutSine:e=>Math.sin(e*Math.PI/2),easeInOutSine:e=>-(Math.cos(Math.PI*e)-1)/2,easeInExpo:e=>e===0?0:Math.pow(2,10*e-10),easeOutExpo:e=>e===1?1:1-Math.pow(2,-10*e),easeInOutExpo:e=>e===0?0:e===1?1:e<.5?Math.pow(2,20*e-10)/2:(2-Math.pow(2,-20*e+10))/2,easeInCirc:e=>1-Math.sqrt(1-Math.pow(e,2)),easeOutCirc:e=>Math.sqrt(1-Math.pow(e-1,2)),easeInOutCirc:e=>e<.5?(1-Math.sqrt(1-Math.pow(2*e,2)))/2:(Math.sqrt(1-Math.pow(-2*e+2,2))+1)/2,easeInBack:e=>d0*e*e*e-rl*e*e,easeOutBack:e=>1+d0*Math.pow(e-1,3)+rl*Math.pow(e-1,2),easeInOutBack:e=>e<.5?Math.pow(2*e,2)*((Fs+1)*2*e-Fs)/2:(Math.pow(2*e-2,2)*((Fs+1)*(e*2-2)+Fs)+2)/2,easeInElastic:e=>e===0?0:e===1?1:-Math.pow(2,10*e-10)*Math.sin((e*10-10.75)*f0),easeOutElastic:e=>e===0?0:e===1?1:Math.pow(2,-10*e)*Math.sin((e*10-.75)*f0)+1,easeInOutElastic:e=>e===0?0:e===1?1:e<.5?-(Math.pow(2,20*e-10)*Math.sin((20*e-11.125)*p0))/2:Math.pow(2,-20*e+10)*Math.sin((20*e-11.125)*p0)/2+1,easeInBounce:e=>1-Vs(1-e),easeOutBounce:Vs,easeInOutBounce:e=>e<.5?(1-Vs(1-2*e))/2:(1+Vs(2*e-1))/2,steps:IC},Ui=Symbol.for("FluidValue.get"),jo=Symbol.for("FluidValue.observers"),vt=e=>!!(e&&e[Ui]),We=e=>e&&e[Ui]?e[Ui]():e,h0=e=>e[jo]||null;function OC(e,t){e.eventObserved?e.eventObserved(t):e(t)}function Hi(e,t){const n=e[jo];n&&n.forEach(r=>{OC(r,t)})}var hy=class{constructor(e){if(!e&&!(e=this.get))throw Error("Unknown getter");NC(this,e)}},NC=(e,t)=>my(e,Ui,t);function _o(e,t){if(e[Ui]){let n=e[jo];n||my(e,jo,n=new Set),n.has(t)||(n.add(t),e.observerAdded&&e.observerAdded(n.size,t))}return t}function Wi(e,t){const n=e[jo];if(n&&n.has(t)){const r=n.size-1;r?n.delete(t):e[jo]=null,e.observerRemoved&&e.observerRemoved(r,t)}}var my=(e,t,n)=>Object.defineProperty(e,t,{value:n,writable:!0,configurable:!0}),fa=/[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,FC=/(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,m0=new RegExp(`(${fa.source})(%|[a-z]+)`,"i"),VC=/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,Ul=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,gy=e=>{const[t,n]=BC(e);if(!t||lp())return e;const r=window.getComputedStyle(document.documentElement).getPropertyValue(t);if(r)return r.trim();if(n&&n.startsWith("--")){const o=window.getComputedStyle(document.documentElement).getPropertyValue(n);return o||e}else{if(n&&Ul.test(n))return gy(n);if(n)return n}return e},BC=e=>{const t=Ul.exec(e);if(!t)return[,];const[,n,r]=t;return[n,r]},Uu,$C=(e,t,n,r,o)=>`rgba(${Math.round(t)}, ${Math.round(n)}, ${Math.round(r)}, ${o})`,vy=e=>{Uu||(Uu=$n?new RegExp(`(${Object.keys($n).join("|")})(?!\\w)`,"g"):/^\b$/);const t=e.output.map(i=>We(i).replace(Ul,gy).replace(FC,c0).replace(Uu,c0)),n=t.map(i=>i.match(fa).map(Number)),o=n[0].map((i,s)=>n.map(a=>{if(!(s in a))throw Error('The arity of each "output" value must be equal');return a[s]})).map(i=>Gi({...e,output:i}));return i=>{var l;const s=!m0.test(t[0])&&((l=t.find(c=>m0.test(c)))==null?void 0:l.replace(fa,""));let a=0;return t[0].replace(fa,()=>`${o[a++](i)}${s||""}`).replace(VC,$C)}},dp="react-spring: ",yy=e=>{const t=e;let n=!1;if(typeof t!="function")throw new TypeError(`${dp}once requires a function parameter`);return(...r)=>{n||(t(...r),n=!0)}},GC=yy(console.warn);function UC(){GC(`${dp}The "interpolate" function is deprecated in v9 (use "to" instead)`)}var HC=yy(console.warn);function WC(){HC(`${dp}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`)}function Hl(e){return b.str(e)&&(e[0]=="#"||/\d/.test(e)||!lp()&&Ul.test(e)||e in($n||{}))}var fp=lp()?C.useEffect:C.useLayoutEffect,QC=()=>{const e=C.useRef(!1);return fp(()=>(e.current=!0,()=>{e.current=!1}),[]),e};function xy(){const e=C.useState()[1],t=QC();return()=>{t.current&&e(Math.random())}}function qC(e,t){const[n]=C.useState(()=>({inputs:t,result:e()})),r=C.useRef(),o=r.current;let i=o;return i?t&&i.inputs&&KC(t,i.inputs)||(i={inputs:t,result:e()}):i=n,C.useEffect(()=>{r.current=i,o==n&&(n.inputs=n.result=void 0)},[i]),i.result}function KC(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}var wy=e=>C.useEffect(e,YC),YC=[];function g0(e){const t=C.useRef();return C.useEffect(()=>{t.current=e}),t.current}var Qi=Symbol.for("Animated:node"),XC=e=>!!e&&e[Qi]===e,Vt=e=>e&&e[Qi],pp=(e,t)=>yC(e,Qi,t),Wl=e=>e&&e[Qi]&&e[Qi].getPayload(),Cy=class{constructor(){pp(this,this)}getPayload(){return this.payload||[]}},ms=class extends Cy{constructor(e){super(),this._value=e,this.done=!0,this.durationProgress=0,b.num(this._value)&&(this.lastPosition=this._value)}static create(e){return new ms(e)}getPayload(){return[this]}getValue(){return this._value}setValue(e,t){return b.num(e)&&(this.lastPosition=e,t&&(e=Math.round(e/t)*t,this.done&&(this.lastPosition=e))),this._value===e?!1:(this._value=e,!0)}reset(){const{done:e}=this;this.done=!1,b.num(this._value)&&(this.elapsedTime=0,this.durationProgress=0,this.lastPosition=this._value,e&&(this.lastVelocity=null),this.v0=null)}},qi=class extends ms{constructor(e){super(0),this._string=null,this._toString=Gi({output:[e,e]})}static create(e){return new qi(e)}getValue(){const e=this._string;return e??(this._string=this._toString(this._value))}setValue(e){if(b.str(e)){if(e==this._string)return!1;this._string=e,this._value=1}else if(super.setValue(e))this._string=null;else return!1;return!0}reset(e){e&&(this._toString=Gi({output:[this.getValue(),e]})),this._value=0,super.reset()}},ol={dependencies:null},Ql=class extends Cy{constructor(e){super(),this.source=e,this.setValue(e)}getValue(e){const t={};return qt(this.source,(n,r)=>{XC(n)?t[r]=n.getValue(e):vt(n)?t[r]=We(n):e||(t[r]=n)}),t}setValue(e){this.source=e,this.payload=this._makePayload(e)}reset(){this.payload&&W(this.payload,e=>e.reset())}_makePayload(e){if(e){const t=new Set;return qt(e,this._addToPayload,t),Array.from(t)}}_addToPayload(e){ol.dependencies&&vt(e)&&ol.dependencies.add(e);const t=Wl(e);t&&W(t,n=>this.add(n))}},Sy=class extends Ql{constructor(e){super(e)}static create(e){return new Sy(e)}getValue(){return this.source.map(e=>e.getValue())}setValue(e){const t=this.getPayload();return e.length==t.length?t.map((n,r)=>n.setValue(e[r])).some(Boolean):(super.setValue(e.map(ZC)),!0)}};function ZC(e){return(Hl(e)?qi:ms).create(e)}function wd(e){const t=Vt(e);return t?t.constructor:b.arr(e)?Sy:Hl(e)?qi:ms}var v0=(e,t)=>{const n=!b.fun(e)||e.prototype&&e.prototype.isReactComponent;return C.forwardRef((r,o)=>{const i=C.useRef(null),s=n&&C.useCallback(y=>{i.current=tS(o,y)},[o]),[a,l]=eS(r,t),c=xy(),d=()=>{const y=i.current;if(n&&!y)return;(y?t.applyAnimatedValues(y,a.getValue(!0)):!1)===!1&&c()},f=new JC(d,l),p=C.useRef();fp(()=>(p.current=f,W(l,y=>_o(y,f)),()=>{p.current&&(W(p.current.deps,y=>Wi(y,p.current)),V.cancel(p.current.update))})),C.useEffect(d,[]),wy(()=>()=>{const y=p.current;W(y.deps,x=>Wi(x,y))});const m=t.getComponentProps(a.getValue());return C.createElement(e,{...m,ref:s})})},JC=class{constructor(e,t){this.update=e,this.deps=t}eventObserved(e){e.type=="change"&&V.write(this.update)}};function eS(e,t){const n=new Set;return ol.dependencies=n,e.style&&(e={...e,style:t.createAnimatedStyle(e.style)}),e=new Ql(e),ol.dependencies=null,[e,n]}function tS(e,t){return e&&(b.fun(e)?e(t):e.current=t),t}var y0=Symbol.for("AnimatedComponent"),nS=(e,{applyAnimatedValues:t=()=>!1,createAnimatedStyle:n=o=>new Ql(o),getComponentProps:r=o=>o}={})=>{const o={applyAnimatedValues:t,createAnimatedStyle:n,getComponentProps:r},i=s=>{const a=x0(s)||"Anonymous";return b.str(s)?s=i[s]||(i[s]=v0(s,o)):s=s[y0]||(s[y0]=v0(s,o)),s.displayName=`Animated(${a})`,s};return qt(e,(s,a)=>{b.arr(e)&&(a=x0(s)),i[a]=i(s)}),{animated:i}},x0=e=>b.str(e)?e:e&&b.str(e.displayName)?e.displayName:b.fun(e)&&e.name||null;function lr(e,...t){return b.fun(e)?e(...t):e}var vi=(e,t)=>e===!0||!!(t&&e&&(b.fun(e)?e(t):st(e).includes(t))),jy=(e,t)=>b.obj(e)?t&&e[t]:e,Py=(e,t)=>e.default===!0?e[t]:e.default?e.default[t]:void 0,rS=e=>e,hp=(e,t=rS)=>{let n=oS;e.default&&e.default!==!0&&(e=e.default,n=Object.keys(e));const r={};for(const o of n){const i=t(e[o],o);b.und(i)||(r[o]=i)}return r},oS=["config","onProps","onStart","onChange","onPause","onResume","onRest"],iS={config:1,from:1,to:1,ref:1,loop:1,reset:1,pause:1,cancel:1,reverse:1,immediate:1,default:1,delay:1,onProps:1,onStart:1,onChange:1,onPause:1,onResume:1,onRest:1,onResolve:1,items:1,trail:1,sort:1,expires:1,initial:1,enter:1,update:1,leave:1,children:1,onDestroyed:1,keys:1,callId:1,parentId:1};function sS(e){const t={};let n=0;if(qt(e,(r,o)=>{iS[o]||(t[o]=r,n++)}),n)return t}function ky(e){const t=sS(e);if(t){const n={to:t};return qt(e,(r,o)=>o in t||(n[o]=r)),n}return{...e}}function Ki(e){return e=We(e),b.arr(e)?e.map(Ki):Hl(e)?Dt.createStringInterpolator({range:[0,1],output:[e,e]})(1):e}function aS(e){for(const t in e)return!0;return!1}function Cd(e){return b.fun(e)||b.arr(e)&&b.obj(e[0])}function lS(e,t){var n;(n=e.ref)==null||n.delete(e),t==null||t.delete(e)}function uS(e,t){var n;t&&e.ref!==t&&((n=e.ref)==null||n.delete(e),t.add(e),e.ref=t)}var cS={default:{tension:170,friction:26},gentle:{tension:120,friction:14},wobbly:{tension:180,friction:12},stiff:{tension:210,friction:20},slow:{tension:280,friction:60},molasses:{tension:280,friction:120}},Sd={...cS.default,mass:1,damping:1,easing:DC.linear,clamp:!1},dS=class{constructor(){this.velocity=0,Object.assign(this,Sd)}};function fS(e,t,n){n&&(n={...n},w0(n,t),t={...n,...t}),w0(e,t),Object.assign(e,t);for(const s in Sd)e[s]==null&&(e[s]=Sd[s]);let{frequency:r,damping:o}=e;const{mass:i}=e;return b.und(r)||(r<.01&&(r=.01),o<0&&(o=0),e.tension=Math.pow(2*Math.PI/r,2)*i,e.friction=4*Math.PI*o*i/r),e}function w0(e,t){if(!b.und(t.decay))e.duration=void 0;else{const n=!b.und(t.tension)||!b.und(t.friction);(n||!b.und(t.frequency)||!b.und(t.damping)||!b.und(t.mass))&&(e.duration=void 0,e.decay=void 0),n&&(e.frequency=void 0)}}var C0=[],pS=class{constructor(){this.changed=!1,this.values=C0,this.toValues=null,this.fromValues=C0,this.config=new dS,this.immediate=!1}};function Ey(e,{key:t,props:n,defaultProps:r,state:o,actions:i}){return new Promise((s,a)=>{let l,c,d=vi(n.cancel??(r==null?void 0:r.cancel),t);if(d)m();else{b.und(n.pause)||(o.paused=vi(n.pause,t));let y=r==null?void 0:r.pause;y!==!0&&(y=o.paused||vi(y,t)),l=lr(n.delay||0,t),y?(o.resumeQueue.add(p),i.pause()):(i.resume(),p())}function f(){o.resumeQueue.add(p),o.timeouts.delete(c),c.cancel(),l=c.time-V.now()}function p(){l>0&&!Dt.skipAnimation?(o.delayed=!0,c=V.setTimeout(m,l),o.pauseQueue.add(f),o.timeouts.add(c)):m()}function m(){o.delayed&&(o.delayed=!1),o.pauseQueue.delete(f),o.timeouts.delete(c),e<=(o.cancelId||0)&&(d=!0);try{i.start({...n,callId:e,cancel:d},s)}catch(y){a(y)}}})}var mp=(e,t)=>t.length==1?t[0]:t.some(n=>n.cancelled)?oo(e.get()):t.every(n=>n.noop)?Ty(e.get()):Rt(e.get(),t.every(n=>n.finished)),Ty=e=>({value:e,noop:!0,finished:!0,cancelled:!1}),Rt=(e,t,n=!1)=>({value:e,finished:t,cancelled:n}),oo=e=>({value:e,cancelled:!0,finished:!1});function by(e,t,n,r){const{callId:o,parentId:i,onRest:s}=t,{asyncTo:a,promise:l}=n;return!i&&e===a&&!t.reset?l:n.promise=(async()=>{n.asyncId=o,n.asyncTo=e;const c=hp(t,(S,v)=>v==="onRest"?void 0:S);let d,f;const p=new Promise((S,v)=>(d=S,f=v)),m=S=>{const v=o<=(n.cancelId||0)&&oo(r)||o!==n.asyncId&&Rt(r,!1);if(v)throw S.result=v,f(S),S},y=(S,v)=>{const h=new S0,g=new j0;return(async()=>{if(Dt.skipAnimation)throw Yi(n),g.result=Rt(r,!1),f(g),g;m(h);const w=b.obj(S)?{...S}:{...v,to:S};w.parentId=o,qt(c,(P,k)=>{b.und(w[k])&&(w[k]=P)});const j=await r.start(w);return m(h),n.paused&&await new Promise(P=>{n.resumeQueue.add(P)}),j})()};let x;if(Dt.skipAnimation)return Yi(n),Rt(r,!1);try{let S;b.arr(e)?S=(async v=>{for(const h of v)await y(h)})(e):S=Promise.resolve(e(y,r.stop.bind(r))),await Promise.all([S.then(d),p]),x=Rt(r.get(),!0,!1)}catch(S){if(S instanceof S0)x=S.result;else if(S instanceof j0)x=S.result;else throw S}finally{o==n.asyncId&&(n.asyncId=i,n.asyncTo=i?a:void 0,n.promise=i?l:void 0)}return b.fun(s)&&V.batchedUpdates(()=>{s(x,r,r.item)}),x})()}function Yi(e,t){mi(e.timeouts,n=>n.cancel()),e.pauseQueue.clear(),e.resumeQueue.clear(),e.asyncId=e.asyncTo=e.promise=void 0,t&&(e.cancelId=t)}var S0=class extends Error{constructor(){super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.")}},j0=class extends Error{constructor(){super("SkipAnimationSignal")}},jd=e=>e instanceof gp,hS=1,gp=class extends hy{constructor(){super(...arguments),this.id=hS++,this._priority=0}get priority(){return this._priority}set priority(e){this._priority!=e&&(this._priority=e,this._onPriorityChange(e))}get(){const e=Vt(this);return e&&e.getValue()}to(...e){return Dt.to(this,e)}interpolate(...e){return UC(),Dt.to(this,e)}toJSON(){return this.get()}observerAdded(e){e==1&&this._attach()}observerRemoved(e){e==0&&this._detach()}_attach(){}_detach(){}_onChange(e,t=!1){Hi(this,{type:"change",parent:this,value:e,idle:t})}_onPriorityChange(e){this.idle||$l.sort(this),Hi(this,{type:"priority",parent:this,priority:e})}},jr=Symbol.for("SpringPhase"),Ry=1,Pd=2,kd=4,Hu=e=>(e[jr]&Ry)>0,hn=e=>(e[jr]&Pd)>0,Go=e=>(e[jr]&kd)>0,P0=(e,t)=>t?e[jr]|=Pd|Ry:e[jr]&=~Pd,k0=(e,t)=>t?e[jr]|=kd:e[jr]&=~kd,mS=class extends gp{constructor(e,t){if(super(),this.animation=new pS,this.defaultProps={},this._state={paused:!1,delayed:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._pendingCalls=new Set,this._lastCallId=0,this._lastToId=0,this._memoizedDuration=0,!b.und(e)||!b.und(t)){const n=b.obj(e)?{...e}:{...t,from:e};b.und(n.default)&&(n.default=!0),this.start(n)}}get idle(){return!(hn(this)||this._state.asyncTo)||Go(this)}get goal(){return We(this.animation.to)}get velocity(){const e=Vt(this);return e instanceof ms?e.lastVelocity||0:e.getPayload().map(t=>t.lastVelocity||0)}get hasAnimated(){return Hu(this)}get isAnimating(){return hn(this)}get isPaused(){return Go(this)}get isDelayed(){return this._state.delayed}advance(e){let t=!0,n=!1;const r=this.animation;let{toValues:o}=r;const{config:i}=r,s=Wl(r.to);!s&&vt(r.to)&&(o=st(We(r.to))),r.values.forEach((c,d)=>{if(c.done)return;const f=c.constructor==qi?1:s?s[d].lastPosition:o[d];let p=r.immediate,m=f;if(!p){if(m=c.lastPosition,i.tension<=0){c.done=!0;return}let y=c.elapsedTime+=e;const x=r.fromValues[d],S=c.v0!=null?c.v0:c.v0=b.arr(i.velocity)?i.velocity[d]:i.velocity;let v;const h=i.precision||(x==f?.005:Math.min(1,Math.abs(f-x)*.001));if(b.und(i.duration))if(i.decay){const g=i.decay===!0?.998:i.decay,w=Math.exp(-(1-g)*y);m=x+S/(1-g)*(1-w),p=Math.abs(c.lastPosition-m)<=h,v=S*w}else{v=c.lastVelocity==null?S:c.lastVelocity;const g=i.restVelocity||h/10,w=i.clamp?0:i.bounce,j=!b.und(w),P=x==f?c.v0>0:x<f;let k,E=!1;const R=1,_=Math.ceil(e/R);for(let I=0;I<_&&(k=Math.abs(v)>g,!(!k&&(p=Math.abs(f-m)<=h,p)));++I){j&&(E=m==f||m>f==P,E&&(v=-v*w,m=f));const G=-i.tension*1e-6*(m-f),U=-i.friction*.001*v,B=(G+U)/i.mass;v=v+B*R,m=m+v*R}}else{let g=1;i.duration>0&&(this._memoizedDuration!==i.duration&&(this._memoizedDuration=i.duration,c.durationProgress>0&&(c.elapsedTime=i.duration*c.durationProgress,y=c.elapsedTime+=e)),g=(i.progress||0)+y/this._memoizedDuration,g=g>1?1:g<0?0:g,c.durationProgress=g),m=x+i.easing(g)*(f-x),v=(m-c.lastPosition)/e,p=g==1}c.lastVelocity=v,Number.isNaN(m)&&(console.warn("Got NaN while animating:",this),p=!0)}s&&!s[d].done&&(p=!1),p?c.done=!0:t=!1,c.setValue(m,i.round)&&(n=!0)});const a=Vt(this),l=a.getValue();if(t){const c=We(r.to);(l!==c||n)&&!i.decay?(a.setValue(c),this._onChange(c)):n&&i.decay&&this._onChange(l),this._stop()}else n&&this._onChange(l)}set(e){return V.batchedUpdates(()=>{this._stop(),this._focus(e),this._set(e)}),this}pause(){this._update({pause:!0})}resume(){this._update({pause:!1})}finish(){if(hn(this)){const{to:e,config:t}=this.animation;V.batchedUpdates(()=>{this._onStart(),t.decay||this._set(e,!1),this._stop()})}return this}update(e){return(this.queue||(this.queue=[])).push(e),this}start(e,t){let n;return b.und(e)?(n=this.queue||[],this.queue=[]):n=[b.obj(e)?e:{...t,to:e}],Promise.all(n.map(r=>this._update(r))).then(r=>mp(this,r))}stop(e){const{to:t}=this.animation;return this._focus(this.get()),Yi(this._state,e&&this._lastCallId),V.batchedUpdates(()=>this._stop(t,e)),this}reset(){this._update({reset:!0})}eventObserved(e){e.type=="change"?this._start():e.type=="priority"&&(this.priority=e.priority+1)}_prepareNode(e){const t=this.key||"";let{to:n,from:r}=e;n=b.obj(n)?n[t]:n,(n==null||Cd(n))&&(n=void 0),r=b.obj(r)?r[t]:r,r==null&&(r=void 0);const o={to:n,from:r};return Hu(this)||(e.reverse&&([n,r]=[r,n]),r=We(r),b.und(r)?Vt(this)||this._set(n):this._set(r)),o}_update({...e},t){const{key:n,defaultProps:r}=this;e.default&&Object.assign(r,hp(e,(s,a)=>/^on/.test(a)?jy(s,n):s)),T0(this,e,"onProps"),Ho(this,"onProps",e,this);const o=this._prepareNode(e);if(Object.isFrozen(this))throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");const i=this._state;return Ey(++this._lastCallId,{key:n,props:e,defaultProps:r,state:i,actions:{pause:()=>{Go(this)||(k0(this,!0),Zo(i.pauseQueue),Ho(this,"onPause",Rt(this,Uo(this,this.animation.to)),this))},resume:()=>{Go(this)&&(k0(this,!1),hn(this)&&this._resume(),Zo(i.resumeQueue),Ho(this,"onResume",Rt(this,Uo(this,this.animation.to)),this))},start:this._merge.bind(this,o)}}).then(s=>{if(e.loop&&s.finished&&!(t&&s.noop)){const a=Ay(e);if(a)return this._update(a,!0)}return s})}_merge(e,t,n){if(t.cancel)return this.stop(!0),n(oo(this));const r=!b.und(e.to),o=!b.und(e.from);if(r||o)if(t.callId>this._lastToId)this._lastToId=t.callId;else return n(oo(this));const{key:i,defaultProps:s,animation:a}=this,{to:l,from:c}=a;let{to:d=l,from:f=c}=e;o&&!r&&(!t.default||b.und(d))&&(d=f),t.reverse&&([d,f]=[f,d]);const p=!Jt(f,c);p&&(a.from=f),f=We(f);const m=!Jt(d,l);m&&this._focus(d);const y=Cd(t.to),{config:x}=a,{decay:S,velocity:v}=x;(r||o)&&(x.velocity=0),t.config&&!y&&fS(x,lr(t.config,i),t.config!==s.config?lr(s.config,i):void 0);let h=Vt(this);if(!h||b.und(d))return n(Rt(this,!0));const g=b.und(t.reset)?o&&!t.default:!b.und(f)&&vi(t.reset,i),w=g?f:this.get(),j=Ki(d),P=b.num(j)||b.arr(j)||Hl(j),k=!y&&(!P||vi(s.immediate||t.immediate,i));if(m){const I=wd(d);if(I!==h.constructor)if(k)h=this._set(j);else throw Error(`Cannot animate between ${h.constructor.name} and ${I.name}, as the "to" prop suggests`)}const E=h.constructor;let R=vt(d),_=!1;if(!R){const I=g||!Hu(this)&&p;(m||I)&&(_=Jt(Ki(w),j),R=!_),(!Jt(a.immediate,k)&&!k||!Jt(x.decay,S)||!Jt(x.velocity,v))&&(R=!0)}if(_&&hn(this)&&(a.changed&&!g?R=!0:R||this._stop(l)),!y&&((R||vt(l))&&(a.values=h.getPayload(),a.toValues=vt(d)?null:E==qi?[1]:st(j)),a.immediate!=k&&(a.immediate=k,!k&&!g&&this._set(l)),R)){const{onRest:I}=a;W(vS,U=>T0(this,t,U));const G=Rt(this,Uo(this,l));Zo(this._pendingCalls,G),this._pendingCalls.add(n),a.changed&&V.batchedUpdates(()=>{var U;a.changed=!g,I==null||I(G,this),g?lr(s.onRest,G):(U=a.onStart)==null||U.call(a,G,this)})}g&&this._set(w),y?n(by(t.to,t,this._state,this)):R?this._start():hn(this)&&!m?this._pendingCalls.add(n):n(Ty(w))}_focus(e){const t=this.animation;e!==t.to&&(h0(this)&&this._detach(),t.to=e,h0(this)&&this._attach())}_attach(){let e=0;const{to:t}=this.animation;vt(t)&&(_o(t,this),jd(t)&&(e=t.priority+1)),this.priority=e}_detach(){const{to:e}=this.animation;vt(e)&&Wi(e,this)}_set(e,t=!0){const n=We(e);if(!b.und(n)){const r=Vt(this);if(!r||!Jt(n,r.getValue())){const o=wd(n);!r||r.constructor!=o?pp(this,o.create(n)):r.setValue(n),r&&V.batchedUpdates(()=>{this._onChange(n,t)})}}return Vt(this)}_onStart(){const e=this.animation;e.changed||(e.changed=!0,Ho(this,"onStart",Rt(this,Uo(this,e.to)),this))}_onChange(e,t){t||(this._onStart(),lr(this.animation.onChange,e,this)),lr(this.defaultProps.onChange,e,this),super._onChange(e,t)}_start(){const e=this.animation;Vt(this).reset(We(e.to)),e.immediate||(e.fromValues=e.values.map(t=>t.lastPosition)),hn(this)||(P0(this,!0),Go(this)||this._resume())}_resume(){Dt.skipAnimation?this.finish():$l.start(this)}_stop(e,t){if(hn(this)){P0(this,!1);const n=this.animation;W(n.values,o=>{o.done=!0}),n.toValues&&(n.onChange=n.onPause=n.onResume=void 0),Hi(this,{type:"idle",parent:this});const r=t?oo(this.get()):Rt(this.get(),Uo(this,e??n.to));Zo(this._pendingCalls,r),n.changed&&(n.changed=!1,Ho(this,"onRest",r,this))}}};function Uo(e,t){const n=Ki(t),r=Ki(e.get());return Jt(r,n)}function Ay(e,t=e.loop,n=e.to){const r=lr(t);if(r){const o=r!==!0&&ky(r),i=(o||e).reverse,s=!o||o.reset;return Xi({...e,loop:t,default:!1,pause:void 0,to:!i||Cd(n)?n:void 0,from:s?e.from:void 0,reset:s,...o})}}function Xi(e){const{to:t,from:n}=e=ky(e),r=new Set;return b.obj(t)&&E0(t,r),b.obj(n)&&E0(n,r),e.keys=r.size?Array.from(r):null,e}function gS(e){const t=Xi(e);return b.und(t.default)&&(t.default=hp(t)),t}function E0(e,t){qt(e,(n,r)=>n!=null&&t.add(r))}var vS=["onStart","onRest","onChange","onPause","onResume"];function T0(e,t,n){e.animation[n]=t[n]!==Py(t,n)?jy(t[n],e.key):void 0}function Ho(e,t,...n){var r,o,i,s;(o=(r=e.animation)[t])==null||o.call(r,...n),(s=(i=e.defaultProps)[t])==null||s.call(i,...n)}var yS=["onStart","onChange","onRest"],xS=1,wS=class{constructor(e,t){this.id=xS++,this.springs={},this.queue=[],this._lastAsyncId=0,this._active=new Set,this._changed=new Set,this._started=!1,this._state={paused:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._events={onStart:new Map,onChange:new Map,onRest:new Map},this._onFrame=this._onFrame.bind(this),t&&(this._flush=t),e&&this.start({default:!0,...e})}get idle(){return!this._state.asyncTo&&Object.values(this.springs).every(e=>e.idle&&!e.isDelayed&&!e.isPaused)}get item(){return this._item}set item(e){this._item=e}get(){const e={};return this.each((t,n)=>e[n]=t.get()),e}set(e){for(const t in e){const n=e[t];b.und(n)||this.springs[t].set(n)}}update(e){return e&&this.queue.push(Xi(e)),this}start(e){let{queue:t}=this;return e?t=st(e).map(Xi):this.queue=[],this._flush?this._flush(this,t):(Iy(this,t),Ed(this,t))}stop(e,t){if(e!==!!e&&(t=e),t){const n=this.springs;W(st(t),r=>n[r].stop(!!e))}else Yi(this._state,this._lastAsyncId),this.each(n=>n.stop(!!e));return this}pause(e){if(b.und(e))this.start({pause:!0});else{const t=this.springs;W(st(e),n=>t[n].pause())}return this}resume(e){if(b.und(e))this.start({pause:!1});else{const t=this.springs;W(st(e),n=>t[n].resume())}return this}each(e){qt(this.springs,e)}_onFrame(){const{onStart:e,onChange:t,onRest:n}=this._events,r=this._active.size>0,o=this._changed.size>0;(r&&!this._started||o&&!this._started)&&(this._started=!0,mi(e,([a,l])=>{l.value=this.get(),a(l,this,this._item)}));const i=!r&&this._started,s=o||i&&n.size?this.get():null;o&&t.size&&mi(t,([a,l])=>{l.value=s,a(l,this,this._item)}),i&&(this._started=!1,mi(n,([a,l])=>{l.value=s,a(l,this,this._item)}))}eventObserved(e){if(e.type=="change")this._changed.add(e.parent),e.idle||this._active.add(e.parent);else if(e.type=="idle")this._active.delete(e.parent);else return;V.onFrame(this._onFrame)}};function Ed(e,t){return Promise.all(t.map(n=>_y(e,n))).then(n=>mp(e,n))}async function _y(e,t,n){const{keys:r,to:o,from:i,loop:s,onRest:a,onResolve:l}=t,c=b.obj(t.default)&&t.default;s&&(t.loop=!1),o===!1&&(t.to=null),i===!1&&(t.from=null);const d=b.arr(o)||b.fun(o)?o:void 0;d?(t.to=void 0,t.onRest=void 0,c&&(c.onRest=void 0)):W(yS,x=>{const S=t[x];if(b.fun(S)){const v=e._events[x];t[x]=({finished:h,cancelled:g})=>{const w=v.get(S);w?(h||(w.finished=!1),g&&(w.cancelled=!0)):v.set(S,{value:null,finished:h||!1,cancelled:g||!1})},c&&(c[x]=t[x])}});const f=e._state;t.pause===!f.paused?(f.paused=t.pause,Zo(t.pause?f.pauseQueue:f.resumeQueue)):f.paused&&(t.pause=!0);const p=(r||Object.keys(e.springs)).map(x=>e.springs[x].start(t)),m=t.cancel===!0||Py(t,"cancel")===!0;(d||m&&f.asyncId)&&p.push(Ey(++e._lastAsyncId,{props:t,state:f,actions:{pause:yd,resume:yd,start(x,S){m?(Yi(f,e._lastAsyncId),S(oo(e))):(x.onRest=a,S(by(d,x,f,e)))}}})),f.paused&&await new Promise(x=>{f.resumeQueue.add(x)});const y=mp(e,await Promise.all(p));if(s&&y.finished&&!(n&&y.noop)){const x=Ay(t,s,o);if(x)return Iy(e,[x]),_y(e,x,!0)}return l&&V.batchedUpdates(()=>l(y,e,e.item)),y}function b0(e,t){const n={...e.springs};return t&&W(st(t),r=>{b.und(r.keys)&&(r=Xi(r)),b.obj(r.to)||(r={...r,to:void 0}),My(n,r,o=>zy(o))}),Ly(e,n),n}function Ly(e,t){qt(t,(n,r)=>{e.springs[r]||(e.springs[r]=n,_o(n,e))})}function zy(e,t){const n=new mS;return n.key=e,t&&_o(n,t),n}function My(e,t,n){t.keys&&W(t.keys,r=>{(e[r]||(e[r]=n(r)))._prepareNode(t)})}function Iy(e,t){W(t,n=>{My(e.springs,n,r=>zy(r,e))})}var ql=({children:e,...t})=>{const n=C.useContext(il),r=t.pause||!!n.pause,o=t.immediate||!!n.immediate;t=qC(()=>({pause:r,immediate:o}),[r,o]);const{Provider:i}=il;return C.createElement(i,{value:t},e)},il=CS(ql,{});ql.Provider=il.Provider;ql.Consumer=il.Consumer;function CS(e,t){return Object.assign(e,C.createContext(t)),e.Provider._context=e,e.Consumer._context=e,e}var SS=()=>{const e=[],t=function(r){WC();const o=[];return W(e,(i,s)=>{if(b.und(r))o.push(i.start());else{const a=n(r,i,s);a&&o.push(i.start(a))}}),o};t.current=e,t.add=function(r){e.includes(r)||e.push(r)},t.delete=function(r){const o=e.indexOf(r);~o&&e.splice(o,1)},t.pause=function(){return W(e,r=>r.pause(...arguments)),this},t.resume=function(){return W(e,r=>r.resume(...arguments)),this},t.set=function(r){W(e,(o,i)=>{const s=b.fun(r)?r(i,o):r;s&&o.set(s)})},t.start=function(r){const o=[];return W(e,(i,s)=>{if(b.und(r))o.push(i.start());else{const a=this._getProps(r,i,s);a&&o.push(i.start(a))}}),o},t.stop=function(){return W(e,r=>r.stop(...arguments)),this},t.update=function(r){return W(e,(o,i)=>o.update(this._getProps(r,o,i))),this};const n=function(r,o,i){return b.fun(r)?r(i,o):r};return t._getProps=n,t};function jS(e,t,n){const r=b.fun(t)&&t;r&&!n&&(n=[]);const o=C.useMemo(()=>r||arguments.length==3?SS():void 0,[]),i=C.useRef(0),s=xy(),a=C.useMemo(()=>({ctrls:[],queue:[],flush(v,h){const g=b0(v,h);return i.current>0&&!a.queue.length&&!Object.keys(g).some(j=>!v.springs[j])?Ed(v,h):new Promise(j=>{Ly(v,g),a.queue.push(()=>{j(Ed(v,h))}),s()})}}),[]),l=C.useRef([...a.ctrls]),c=[],d=g0(e)||0;C.useMemo(()=>{W(l.current.slice(e,d),v=>{lS(v,o),v.stop(!0)}),l.current.length=e,f(d,e)},[e]),C.useMemo(()=>{f(0,Math.min(d,e))},n);function f(v,h){for(let g=v;g<h;g++){const w=l.current[g]||(l.current[g]=new wS(null,a.flush)),j=r?r(g,w):t[g];j&&(c[g]=gS(j))}}const p=l.current.map((v,h)=>b0(v,c[h])),m=C.useContext(ql),y=g0(m),x=m!==y&&aS(m);fp(()=>{i.current++,a.ctrls=l.current;const{queue:v}=a;v.length&&(a.queue=[],W(v,h=>h())),W(l.current,(h,g)=>{o==null||o.add(h),x&&h.start({default:m});const w=c[g];w&&(uS(h,w.ref),h.ref?h.queue.push(w):h.start(w))})}),wy(()=>()=>{W(a.ctrls,v=>v.stop(!0))});const S=p.map(v=>({...v}));return o?[S,o]:S}function PS(e,t){const n=b.fun(e),[[r],o]=jS(1,n?e:[e],n?t||[]:t);return n||arguments.length==2?[r,o]:r}var kS=class extends gp{constructor(e,t){super(),this.source=e,this.idle=!0,this._active=new Set,this.calc=Gi(...t);const n=this._get(),r=wd(n);pp(this,r.create(n))}advance(e){const t=this._get(),n=this.get();Jt(t,n)||(Vt(this).setValue(t),this._onChange(t,this.idle)),!this.idle&&R0(this._active)&&Wu(this)}_get(){const e=b.arr(this.source)?this.source.map(We):st(We(this.source));return this.calc(...e)}_start(){this.idle&&!R0(this._active)&&(this.idle=!1,W(Wl(this),e=>{e.done=!1}),Dt.skipAnimation?(V.batchedUpdates(()=>this.advance()),Wu(this)):$l.start(this))}_attach(){let e=1;W(st(this.source),t=>{vt(t)&&_o(t,this),jd(t)&&(t.idle||this._active.add(t),e=Math.max(e,t.priority+1))}),this.priority=e,this._start()}_detach(){W(st(this.source),e=>{vt(e)&&Wi(e,this)}),this._active.clear(),Wu(this)}eventObserved(e){e.type=="change"?e.idle?this.advance():(this._active.add(e.parent),this._start()):e.type=="idle"?this._active.delete(e.parent):e.type=="priority"&&(this.priority=st(this.source).reduce((t,n)=>Math.max(t,(jd(n)?n.priority:0)+1),0))}};function ES(e){return e.idle!==!1}function R0(e){return!e.size||Array.from(e).every(ES)}function Wu(e){e.idle||(e.idle=!0,W(Wl(e),t=>{t.done=!0}),Hi(e,{type:"idle",parent:e}))}Dt.assign({createStringInterpolator:vy,to:(e,t)=>new kS(e,t)});var Dy=/^--/;function TS(e,t){return t==null||typeof t=="boolean"||t===""?"":typeof t=="number"&&t!==0&&!Dy.test(e)&&!(yi.hasOwnProperty(e)&&yi[e])?t+"px":(""+t).trim()}var A0={};function bS(e,t){if(!e.nodeType||!e.setAttribute)return!1;const n=e.nodeName==="filter"||e.parentNode&&e.parentNode.nodeName==="filter",{style:r,children:o,scrollTop:i,scrollLeft:s,viewBox:a,...l}=t,c=Object.values(l),d=Object.keys(l).map(f=>n||e.hasAttribute(f)?f:A0[f]||(A0[f]=f.replace(/([A-Z])/g,p=>"-"+p.toLowerCase())));o!==void 0&&(e.textContent=o);for(const f in r)if(r.hasOwnProperty(f)){const p=TS(f,r[f]);Dy.test(f)?e.style.setProperty(f,p):e.style[f]=p}d.forEach((f,p)=>{e.setAttribute(f,c[p])}),i!==void 0&&(e.scrollTop=i),s!==void 0&&(e.scrollLeft=s),a!==void 0&&e.setAttribute("viewBox",a)}var yi={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},RS=(e,t)=>e+t.charAt(0).toUpperCase()+t.substring(1),AS=["Webkit","Ms","Moz","O"];yi=Object.keys(yi).reduce((e,t)=>(AS.forEach(n=>e[RS(n,t)]=e[t]),e),yi);var _S=/^(matrix|translate|scale|rotate|skew)/,LS=/^(translate)/,zS=/^(rotate|skew)/,Qu=(e,t)=>b.num(e)&&e!==0?e+t:e,pa=(e,t)=>b.arr(e)?e.every(n=>pa(n,t)):b.num(e)?e===t:parseFloat(e)===t,MS=class extends Ql{constructor({x:e,y:t,z:n,...r}){const o=[],i=[];(e||t||n)&&(o.push([e||0,t||0,n||0]),i.push(s=>[`translate3d(${s.map(a=>Qu(a,"px")).join(",")})`,pa(s,0)])),qt(r,(s,a)=>{if(a==="transform")o.push([s||""]),i.push(l=>[l,l===""]);else if(_S.test(a)){if(delete r[a],b.und(s))return;const l=LS.test(a)?"px":zS.test(a)?"deg":"";o.push(st(s)),i.push(a==="rotate3d"?([c,d,f,p])=>[`rotate3d(${c},${d},${f},${Qu(p,l)})`,pa(p,0)]:c=>[`${a}(${c.map(d=>Qu(d,l)).join(",")})`,pa(c,a.startsWith("scale")?1:0)])}}),o.length&&(r.transform=new IS(o,i)),super(r)}},IS=class extends hy{constructor(e,t){super(),this.inputs=e,this.transforms=t,this._value=null}get(){return this._value||(this._value=this._get())}_get(){let e="",t=!0;return W(this.inputs,(n,r)=>{const o=We(n[0]),[i,s]=this.transforms[r](b.arr(o)?o:n.map(We));e+=" "+i,t=t&&s}),t?"none":e}observerAdded(e){e==1&&W(this.inputs,t=>W(t,n=>vt(n)&&_o(n,this)))}observerRemoved(e){e==0&&W(this.inputs,t=>W(t,n=>vt(n)&&Wi(n,this)))}eventObserved(e){e.type=="change"&&(this._value=null),Hi(this,e)}},DS=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"];Dt.assign({batchedUpdates:t2.unstable_batchedUpdates,createStringInterpolator:vy,colors:jC});var OS=nS(DS,{applyAnimatedValues:bS,createAnimatedStyle:e=>new MS(e),getComponentProps:({scrollTop:e,scrollLeft:t,...n})=>n}),nt=OS.animated;const NS=()=>{C.useEffect(()=>{const i=document.documentElement,s=a=>{i.style.setProperty("--x",a.clientX+"px")};return i.addEventListener("mousemove",s),()=>{i.removeEventListener("mousemove",s)}},[]);const[e,t]=C.useState(0),n=()=>{t(window.scrollY)};C.useEffect(()=>(window.addEventListener("scroll",n),()=>{window.removeEventListener("scroll",n)}),[]);const{transform:r}=PS({transform:`translateX(${e}px)`,config:{mass:1,tension:120,friction:14}}),o=({children:i,style:s,...a})=>u.jsx("h2",{style:s,...a,children:i});return u.jsxs(pC,{children:[u.jsxs(De.div,{initial:{opacity:0,left:100},animate:{opacity:1,left:0},transition:{duration:1,delay:.75},className:"text",children:[u.jsx(o,{style:{"--i":.5},children:u.jsxs(nt.div,{style:{transform:r,transition:"transform 0.2s ease-in-out"},children:[u.jsx("span",{children:"Gleiber Coelho"}),u.jsx("span",{children:"Gleiber Coelho"}),u.jsx("span",{children:"Gleiber Coelho"}),u.jsx("span",{children:"Gleiber Coelho"}),u.jsx("span",{children:"Gleiber Coelho"}),u.jsx("span",{children:"Gleiber Coelho"}),u.jsx("span",{children:"Gleiber Coelho"}),u.jsx("span",{children:"Gleiber Coelho"}),u.jsx("span",{children:"Gleiber Coelho"}),u.jsx("span",{children:"Gleiber Coelho"})]})}),u.jsx(o,{style:{"--i":1.5},children:u.jsxs(nt.div,{style:{transform:r,transition:"transform 0.1s ease-in-out"},children:[u.jsx("span",{children:"Gleiber Coelho"}),u.jsx("span",{children:"Gleiber Coelho"}),u.jsx("span",{children:"Gleiber Coelho"}),u.jsx("span",{children:"Gleiber Coelho"}),u.jsx("span",{children:"Gleiber Coelho"}),u.jsx("span",{children:"Gleiber Coelho"}),u.jsx("span",{children:"Gleiber Coelho"}),u.jsx("span",{children:"Gleiber Coelho"}),u.jsx("span",{children:"Gleiber Coelho"}),u.jsx("span",{children:"Gleiber Coelho"})]})}),u.jsx(o,{style:{"--i":2.5},children:u.jsxs(nt.div,{style:{transform:r,transition:"transform 0.3s ease-in-out"},children:[u.jsx("span",{children:"Gleiber Coelho"}),u.jsx("span",{children:"Gleiber Coelho"}),u.jsx("span",{children:"Gleiber Coelho"}),u.jsx("span",{children:"Gleiber Coelho"}),u.jsx("span",{children:"Gleiber Coelho"}),u.jsx("span",{children:"Gleiber Coelho"}),u.jsx("span",{children:"Gleiber Coelho"}),u.jsx("span",{children:"Gleiber Coelho"}),u.jsx("span",{children:"Gleiber Coelho"}),u.jsx("span",{children:"Gleiber Coelho"})]})}),u.jsx(o,{style:{"--i":2.25},children:u.jsxs(nt.div,{style:{transform:r,transition:"transform 0.3s ease-in-out"},children:[u.jsx("span",{children:"Gleiber Coelho"}),u.jsx("span",{children:"Gleiber Coelho"}),u.jsx("span",{children:"Gleiber Coelho"}),u.jsx("span",{children:"Gleiber Coelho"}),u.jsx("span",{children:"Gleiber Coelho"}),u.jsx("span",{children:"Gleiber Coelho"}),u.jsx("span",{children:"Gleiber Coelho"}),u.jsx("span",{children:"Gleiber Coelho"}),u.jsx("span",{children:"Gleiber Coelho"}),u.jsx("span",{children:"Gleiber Coelho"})]})}),u.jsx(o,{style:{"--i":2.25},children:u.jsxs(nt.div,{style:{transform:r,transition:"transform 0.4s ease-in-out"},children:[u.jsx("span",{children:"Gleiber Coelho"}),u.jsx("span",{children:"Gleiber Coelho"}),u.jsx("span",{children:"Gleiber Coelho"}),u.jsx("span",{children:"Gleiber Coelho"}),u.jsx("span",{children:"Gleiber Coelho"}),u.jsx("span",{children:"Gleiber Coelho"}),u.jsx("span",{children:"Gleiber Coelho"}),u.jsx("span",{children:"Gleiber Coelho"}),u.jsx("span",{children:"Gleiber Coelho"}),u.jsx("span",{children:"Gleiber Coelho"})]})}),u.jsx(o,{style:{"--i":4.25},children:u.jsxs(nt.div,{style:{transform:r,transition:"transform 0.32s ease-in-out"},children:[u.jsx("span",{children:"Gleiber Coelho"}),u.jsx("span",{children:"Gleiber Coelho"}),u.jsx("span",{children:"Gleiber Coelho"}),u.jsx("span",{children:"Gleiber Coelho"}),u.jsx("span",{children:"Gleiber Coelho"}),u.jsx("span",{children:"Gleiber Coelho"}),u.jsx("span",{children:"Gleiber Coelho"}),u.jsx("span",{children:"Gleiber Coelho"}),u.jsx("span",{children:"Gleiber Coelho"}),u.jsx("span",{children:"Gleiber Coelho"})]})}),u.jsx(o,{style:{"--i":.75},children:u.jsxs(nt.div,{style:{transform:r,transition:"transform 0.24s ease-in-out"},children:[u.jsx("span",{children:"Gleiber Coelho"}),u.jsx("span",{children:"Gleiber Coelho"}),u.jsx("span",{children:"Gleiber Coelho"}),u.jsx("span",{children:"Gleiber Coelho"}),u.jsx("span",{children:"Gleiber Coelho"}),u.jsx("span",{children:"Gleiber Coelho"}),u.jsx("span",{children:"Gleiber Coelho"}),u.jsx("span",{children:"Gleiber Coelho"}),u.jsx("span",{children:"Gleiber Coelho"}),u.jsx("span",{children:"Gleiber Coelho"})]})}),u.jsx(o,{style:{"--i":3},children:u.jsxs(nt.div,{style:{transform:r,transition:"transform 0.17s ease-in-out"},children:[u.jsx("span",{children:"Gleiber Coelho"}),u.jsx("span",{children:"Gleiber Coelho"}),u.jsx("span",{children:"Gleiber Coelho"}),u.jsx("span",{children:"Gleiber Coelho"}),u.jsx("span",{children:"Gleiber Coelho"}),u.jsx("span",{children:"Gleiber Coelho"}),u.jsx("span",{children:"Gleiber Coelho"}),u.jsx("span",{children:"Gleiber Coelho"}),u.jsx("span",{children:"Gleiber Coelho"}),u.jsx("span",{children:"Gleiber Coelho"})]})}),u.jsx(o,{style:{"--i":.35},children:u.jsxs(nt.div,{style:{transform:r,transition:"transform 0.1s ease-in-out"},children:[u.jsx("span",{children:"Gleiber Coelho"}),u.jsx("span",{children:"Gleiber Coelho"}),u.jsx("span",{children:"Gleiber Coelho"}),u.jsx("span",{children:"Gleiber Coelho"}),u.jsx("span",{children:"Gleiber Coelho"}),u.jsx("span",{children:"Gleiber Coelho"}),u.jsx("span",{children:"Gleiber Coelho"}),u.jsx("span",{children:"Gleiber Coelho"}),u.jsx("span",{children:"Gleiber Coelho"}),u.jsx("span",{children:"Gleiber Coelho"})]})}),u.jsx(o,{style:{"--i":1.25},children:u.jsxs(nt.div,{style:{transform:r,transition:"transform 0.08s ease-in-out"},children:[u.jsx("span",{children:"Gleiber Coelho"}),u.jsx("span",{children:"Gleiber Coelho"}),u.jsx("span",{children:"Gleiber Coelho"}),u.jsx("span",{children:"Gleiber Coelho"}),u.jsx("span",{children:"Gleiber Coelho"}),u.jsx("span",{children:"Gleiber Coelho"}),u.jsx("span",{children:"Gleiber Coelho"}),u.jsx("span",{children:"Gleiber Coelho"}),u.jsx("span",{children:"Gleiber Coelho"}),u.jsx("span",{children:"Gleiber Coelho"})]})}),u.jsx(o,{style:{"--i":4.25},children:u.jsxs(nt.div,{style:{transform:r,transition:"transform 0.18s ease-in-out"},children:[u.jsx("span",{children:"Gleiber Coelho"}),u.jsx("span",{children:"Gleiber Coelho"}),u.jsx("span",{children:"Gleiber Coelho"}),u.jsx("span",{children:"Gleiber Coelho"}),u.jsx("span",{children:"Gleiber Coelho"}),u.jsx("span",{children:"Gleiber Coelho"}),u.jsx("span",{children:"Gleiber Coelho"}),u.jsx("span",{children:"Gleiber Coelho"}),u.jsx("span",{children:"Gleiber Coelho"}),u.jsx("span",{children:"Gleiber Coelho"})]})}),u.jsx(o,{style:{"--i":2.5},children:u.jsxs(nt.div,{style:{transform:r,transition:"transform 0.25s ease-in-out"},children:[u.jsx("span",{children:"Gleiber Coelho"}),u.jsx("span",{children:"Gleiber Coelho"}),u.jsx("span",{children:"Gleiber Coelho"}),u.jsx("span",{children:"Gleiber Coelho"}),u.jsx("span",{children:"Gleiber Coelho"}),u.jsx("span",{children:"Gleiber Coelho"}),u.jsx("span",{children:"Gleiber Coelho"}),u.jsx("span",{children:"Gleiber Coelho"}),u.jsx("span",{children:"Gleiber Coelho"}),u.jsx("span",{children:"Gleiber Coelho"})]})}),u.jsx(o,{style:{"--i":.75},children:u.jsxs(nt.div,{style:{transform:r,transition:"transform 0.s ease-in-out"},children:[u.jsx("span",{children:"Gleiber Coelho"}),u.jsx("span",{children:"Gleiber Coelho"}),u.jsx("span",{children:"Gleiber Coelho"}),u.jsx("span",{children:"Gleiber Coelho"}),u.jsx("span",{children:"Gleiber Coelho"}),u.jsx("span",{children:"Gleiber Coelho"}),u.jsx("span",{children:"Gleiber Coelho"}),u.jsx("span",{children:"Gleiber Coelho"}),u.jsx("span",{children:"Gleiber Coelho"}),u.jsx("span",{children:"Gleiber Coelho"})]})})]}),u.jsxs("div",{className:"box",children:[u.jsx(De.div,{initial:{opacity:0,x:-100},animate:{opacity:1,x:0},transition:{duration:1,delay:.75},className:"title",children:u.jsx("h1",{children:"Front-End Desenvolvedor"})}),u.jsx(De.div,{initial:{opacity:0,x:100},animate:{opacity:1,x:0},transition:{duration:1,delay:.75},className:"caixa",children:u.jsx("img",{src:hC,alt:""})})]})]})},FS=et.div`

Reveal {

}
/* background-image: linear-gradient(to left, #00060f, #061627, #002040, #002a5a, #083374); */
background-image: linear-gradient(to left, #00060f, #041222, #001935, #002049, #00255c);
margin: 0;
padding: 0;
a{
  text-decoration: none;
}
h1{
  display: flex;
  font-family: 'Poppins', sans-serif;
  font-size: 70px;
  text-justify: center;
  justify-content: center;
  color: #D0A616;
  font-weight: 900;
  margin: 0;
  padding: 40px 0 30px 0;
  
}
.footer{
  display: flex;
  flex-direction: row;
  font-family: 'Poppins', sans-serif;
  text-justify: center;
  justify-content: right;
  h2{
  color: #D0A616;
  font-weight: 900;
  margin: 0;
  padding: 60px 0px 50px 0;
  margin-right: 60px;
  width: 100%;
  font-size: 50px;}
}

.leftProjects.oriented-Div-animated0{
opacity: 0;
transition: opacity 1s;
}
.RightProjects.oriented-Div-animated1{
opacity: 0;
transition: opacity 1s;
}
.leftProjects.oriented-Div-animated2{
opacity: 0;
transition: opacity 1s;
}
.RightProjects.oriented-Div-animated3{
opacity: 0;
transition: opacity 1s;
}
.leftProjects.oriented-Div-animated4{
opacity: 0;
transition: opacity 1s;
}
.RightProjects.oriented-Div-animated5{
opacity: 0;
transition: opacity 1s;
}

.leftProjects{
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;    
    align-items: center;
    font-family: 'Poppins', sans-serif;
    color: #071F27;
    height: 350px;
    opacity: 1;
    transition: 1.0s;
    
    
    .button{
      height: 30px;
      font-size: 20px;
      width: 120px;
      border: none;
      border-radius: 5px;
      color: black;
      background-color: #6572B3;
      font-family: 'Poppins', sans-serif;
      align-items: center;
    }
   
}

.RightProjects{
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;   
    align-items: center;
    font-family: 'Poppins', sans-serif;
    height: 350px;
    transition: 1s;
    
    .button{
      height: 30px;
      font-size: 20px;
      width: 120px;
      border: none;
      border-radius: 5px;
      color: black;
      background-color: #6572B3;
      font-family: 'Poppins', sans-serif;
      align-items: center;
    }
}


.textDiv{
  flex-direction:column;
  h2{
  color: #B28C00;
  font-size: 52px;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  
}

p{
  font-size: 20px;
  color: #FBEAFF;
}

svg{
  font-size: 35px;
  color: #FBEAFF;
}
}


.secretDiv.show-animated {
  opacity: 1;
  transition: opacity 1s ease-in-out;
  /* Adicione outras animações aqui conforme necessário */
}
.secretDiv {
  height: 350px;
  width: 100vw !important;
  position: relative;
  z-index: 0;
  flex-wrap: wrap;
  flex-direction: column; 
  color: #F7F8FF;
  margin: 0;
  padding: 0;
  border: 0;
  background-color: black;
  overflow: hidden;  
  opacity: 0.0;
  transition: opacity 2s; /* Defina a duração da transição conforme necessário */





  
  
  .secretDivRow{
    display:flex;
    width: 100%;       
    flex-direction: row;
    justify-content: right;
    height: 350px; 
    ;

   .saibaMais {
    height: 350px;
    margin: 0;
    padding: 0;
    border: 0; 
    position: relative;
    transform: translateX(-100%);
    transition: 1s;
    background-color: black;
    color: white;
  }
  
  .saibaMais.show-Button {
    height: 350px;
    margin: 0;
    padding: 0;
    border: 0; 
    position: relative;
    left: 0px;   
    transform: translateX(0);
    transition: 1s;
  }
  
  
  .saibaMais.show-Button.show-Button-transition {
  /* Defina a terceira animação aqui */
  transition: transform 1.0s ease-in-out, background-color 0.3s ease-in-out, color 0.01s ease-in-out, border-radius 0.01s; /* Agrupe as propriedades de transição com diferentes tempos */
  transform: translateX(100vw) scale(100);
  /* font-size: 0; */
  color: transparent;
  background-color: white;
  border-radius: 50%;
  
}

  
  }

  .secretDivColumn{
    display: flex;
    flex-direction: column;
    

    width: 100vw;
    height: 350px;
    
    justify-content: flex-end;
    p{
      padding-left: 40%;
      font-size: 35px;
      color: #F7F8FF;
    }
    a{
      text-decoration: none;
    }
  }

  .Acess{
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    width: 100%;
    height: 100%;
    
    align-items: flex-end;
  }
  .AcessDois{
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    width: 100%;
    
    white-space: nowrap;
    div{
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    p{
      display: flex;
      font-size: 20px;
      align-self: center;
      padding-left: -80px;
      color: #F7F8FF;

    }
    svg{
      display: flex;
      font-size: 30px;
      align-self: center;
      padding-left: 70px;
      color: #F7F8FF;
    }
  }
  .carousel { 
  height: 350px;
  position: relative;
  top: -50px;
  right: 1200px;
  z-index:-1;
  opacity: 0.5;

  .slide {
  display: none;  
  transition: opacity 0.5s ease-in-out;
 
}

.active {
  display: flex; /* ou o valor apropriado para exibição */
  
  
}
  
}
.slide.active.EcommerceSecretOne {
  position: relative;
  object-fit: cover;
  left: -600px;
  bottom: 300px;     
  animation: shaking 4s ease-in-out infinite;
}
.slide.active.EcommerceSecretTwo {
  position: relative;
  object-fit: cover;
  transform: scale(0.9);
  left: -600px;
  bottom: 350px;
  animation: shakingInverse 4s ease-in-out infinite;
}
.slide.active.EcommerceSecretThree {
  position: relative;
  object-fit: cover;
  transform: scale(1.0);
  left: -700px;
  bottom: 500px;
  animation: shaking 4s ease-in-out infinite;
}
.slide.active.GGWPSecretOne {
  position: relative;   
  left: -600px;
  bottom: 10px;   
  zoom: 2.0;
  animation: shaking 4s ease-in-out infinite;
}
.slide.active.GGWPSecretTwo {
  position: relative;  
  zoom: 2.0;
  left: -400px;
  bottom: 400px;
  animation: shakingInverse 4s ease-in-out infinite;
}
.slide.active.GGWPSecretThree {
  position: relative;
  zoom: 2.0;
  left: -400px;
  bottom: 950px;
  animation: shaking 4s ease-in-out infinite;
}
.slide.active.SoundGardenSecretOne {
  position: relative;
  object-fit: cover;   
  left: -400px;
  bottom: 350px;   
  zoom: 2.0;
  animation: shaking 4s ease-in-out infinite;
}
.slide.active.SoundGardenSecretTwo {
  position: relative;  
  zoom: 1.2;
  left: -360px;
  bottom: 125px;
  animation: shakingInverse 4s ease-in-out infinite;
}
.slide.active.SoundGardenSecretThree {
  position: relative;
  zoom: 2.0;
  left: -500px;
  bottom: 350px;
  animation: shaking 4s ease-in-out infinite;
}
.slide.active.CodeleapSecretOne {
  position: relative;  
  left: -300px;
  bottom: 120px;   
  zoom: 1.2;
  animation: shaking 4s ease-in-out infinite;
}
.slide.active.CodeleapSecretTwo {
  position: relative;  
  zoom: 1.2;
  left: -350px;
  bottom: 125px;
  animation: shakingInverse 4s ease-in-out infinite;
}
.slide.active.CodeleapSecretThree {
  position: relative;
  zoom: 1.3;
  left: -410px;
  bottom: 150px;
  animation: shaking 4s ease-in-out infinite;
}
.slide.active.DindinSecretOne {
  position: relative;  
  left: -420px;
  bottom: 250px;   
  zoom: 1.3;
  animation: shaking 4s ease-in-out infinite;
}
.slide.active.DindinSecretTwo {
  position: relative;  
  zoom: 1.2;
  left: -350px;
  bottom: 125px;
  animation: shakingInverse 4s ease-in-out infinite;
}
.slide.active.DindinSecretThree {
  position: relative;
  zoom: 1.3;
  left: -410px;
  bottom: 150px;
  animation: shaking 4s ease-in-out infinite;
}
.slide.active.SheillaSecretOne {
  position: relative;  
  left: -420px;
  bottom: 250px;   
  zoom: 1.3;
  animation: shaking 4s ease-in-out infinite;
}
.slide.active.SheillaSecretTwo {
  position: relative;  
  zoom: 1.2;
  left: -350px;
  bottom: 125px;
  animation: shakingInverse 4s ease-in-out infinite;
}
.slide.active.SheillaSecretThree {
  position: relative;
  zoom: 1.3;
  left: -410px;
  bottom: 100px;
  animation: shaking 4s ease-in-out infinite;
}


}


@keyframes shaking
{
   /* 0% { width: 0; height: 0vh;fill-opacity: 0;}
    50% { width: 0; height: 0vh;fill-opacity: 0;}
    100% {width:600px; height: 500px; fill-opacity: 1;} */
    0% {
		
		transform:translatex(0)
	}
	100%{
		
		transform:translatex(-20px)
	}   
}
@keyframes shakingInverse
{
   /* 0% { width: 0; height: 0vh;fill-opacity: 0;}
    50% { width: 0; height: 0vh;fill-opacity: 0;}
    100% {width:600px; height: 500px; fill-opacity: 1;} */
    0% {
		
		transform:translatex(0)
	}
	100%{
		
		transform:translatex(20px)
	}   
}

.card {
  position: relative;
  overflow: hidden;
 /*  overflow-y:scroll; */
    width: 550px;
  height: 300px;
  margin: 50px 0;
  background-color: none;
  .textDiv h2{
    margin-bottom: 20px;
  }
  .textDiv p{
    margin-top: 0px;
  }
}

.card img {
  width: 100%;
  object-fit: contain;  
  transition: transform 0.3s ease-in-out;
}

.Ecommerce{
  position: relative;
  transform: scale(1.05);
  top: -20px;
  left: 6px;
  /* transform: translateY(2px); */
}


.GGWP{
  position: relative;
  transform: scale(14.05);
  top: 1680px;
  left: 130px;
  /* transform: translateY(2px); */
}
.Soundgarden{
  position: relative;
  transform: scale(3.25);
  top: 320px;
  left: -5px;
  /* transform: translateY(2px); */
}
.Codeleap{
  position: relative;
  transform: scale(1.16);
  top: 0px;
  left: 0px;
  /* transform: translateY(2px); */
}
.Dindin{
  position: relative;
  transform: scale(5.45);
  top: 570px;
  left: -15px;
  /* transform: translateY(2px); */
}
.Sheilla{
  position: relative;
  transform: scale(1.1);
  top: 0px;
  left: 25px;
  /* transform: translateY(2px); */
}

@media only screen and (max-width: 1260px){

  h1{
    font-size: 50px;
    align-self: center;
  }
  .footer h2{
    font-size: 35px;
  }
  .leftProjects{
    h2{
      font-size: 35px;
      padding-left: 20px;
      margin: 10px 0;
    }
    p{
      font-size: 20px;
      padding-left: 20px;
      margin: 10px 0;
     }
     p svg{
      font-size: 20px;
      padding-left: 5px;
     }
     .button{
      height: 25px;
      font-size: 18px;
      width: 100px;
      border-radius: 5px;
      margin-left: 20px;
     }
  }
  .RightProjects{
    h2{
      font-size: 35px;
      
      margin: 10px 0;
    }
    p{
      font-size: 20px;
      
      margin: 10px 0;
     }
     p svg{
      font-size: 20px;
      padding-left: 5px;
     }
     .button{
      height: 25px;
      font-size: 18px;
      width: 100px;
      border-radius: 5px;
      
     }
  }
  .secretDiv .secretDivColumn p{
    font-size: 30px;
  }
}

@media only screen and (max-width: 768px){

    h1{
      font-size: 30px;
      align-self: center;
    }
    .footer h2{
      font-size: 25px;
    }
    .leftProjects{
      display: flex;
      flex-direction: column-reverse;
      height: 400px;
     

     
     
     h2{
      font-size: 20px;
     } 
     p{
      font-size: 15px;
     }
     p svg{
      font-size: 15px;
     }
     .button{
      font-size: 15px;
      width: 80px;
      height: 25px;
      border-radius: 5px;
      margin-bottom: 0;
      padding-bottom: 0;
     }
     .textDiv{
      height: 150px;
      margin: 10px 0; 
      
     }
     img{
      width: 300px;
      height: 250px;
      object-fit: contain;
      margin-top: 0;
      padding-top: 0;         
     }
     .card {
      height: 300px;
      width: 300px;
      background-color: green;
      .Ecommerce{
        top: -50px;
     }
     .Soundgarden{
      top: 150px;
     }
     .Dindin{
      top: 350px;
      left: 10px;
      transform: scale(4.5);
     }
    }
    .secretDiv{
      background-image: linear-gradient(to right, #00255c, #003f71, #005675, #006b6a, #007d58);
    }
  }
    .RightProjects{
      display: flex;
      flex-direction: column;
      height: 400px;
      overflow: visible;

      .saibaMais{
        height: 400px;
      }
     h2{
      font-size: 20px;
     } 
     p{
      font-size: 15px;
     }
     p svg{
      font-size: 15px;
     }
     .button{
      font-size: 15px;
      width: 80px;
      height: 25px;
      border-radius: 5px;
      margin-bottom: 0;
      padding-bottom: 0;
     }
     .textDiv{
      height: 150px;
      margin: 10px 0; 
      
     }
     img{
      width: 300px;
      height: 200px;
      object-fit: contain;
      margin-top: 0;
      padding-top: 0;
      
      
     }
     .card {
      
     
      width: 300px;
      height: 200px;
      .GGWP{
        top: 1110px;
        left: 45px;
     }
     .Sheilla{
      left: 10px;
     }
    }
    .secretDiv{
      background-image: linear-gradient(to right, #00255c, #25183f, #250f26, #1b0813, #000000);
      color: #D0A616;
     
    }
  }
    .secretDiv {
      overflow: visible;
      height: 400px;
      color: #D0A616 !important;  
     
     
        .secretDivRow{

          height: 400px;

          
          .saibaMais.show-Button{

            height: 400px;
            
        }
        .secretDivColumn{
              height: 400px;              
              justify-content: center;
              align-items: center;              
              text-align: justify; 
               
              color: #D0A616 !important;    
             
              
              p{
                font-size: 23px;
                padding-left: 10%;
                width: 80%;
                color: #D0A616 !important;
                
              }
              a{
                font-size: 20px;
              }
             
          }
            .AcessDois{
              
             div{
              p{
                font-size: 15px;
                padding-left: 0px;
                color: #FFF7D6;
              }
              svg{
                font-size: 20px;
                padding-left: 20px;
                color: #B6BFFF;
              }
             }
            }
           
            .carousel{
              height: 400px;
              z-index: 2 !important;
              right: 0;
              background-color: pink;
              
              .slide.active.SheillaSecretOne {
   
                  left: -20px;
                  bottom: -250px;
                }
            .slide.active.SheillaSecretTwo {
              
              left: -50px;
              bottom: -225px;
            
            }
            .slide.active.SheillaSecretThree {

              left: -10px;
              bottom: -100px;
              
            }
        }
     }
  }
}

`;var Oy={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},_0=F.createContext&&F.createContext(Oy),Gn=function(){return Gn=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},Gn.apply(this,arguments)},VS=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n};function Ny(e){return e&&e.map(function(t,n){return F.createElement(t.tag,Gn({key:n},t.attr),Ny(t.child))})}function J(e){return function(t){return F.createElement(BS,Gn({attr:Gn({},e.attr)},t),Ny(e.child))}}function BS(e){var t=function(n){var r=e.attr,o=e.size,i=e.title,s=VS(e,["attr","size","title"]),a=o||n.size||"1em",l;return n.className&&(l=n.className),e.className&&(l=(l?l+" ":"")+e.className),F.createElement("svg",Gn({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,s,{className:l,style:Gn(Gn({color:e.color||n.color},n.style),e.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),i&&F.createElement("title",null,i),e.children)};return _0!==void 0?F.createElement(_0.Consumer,null,function(n){return t(n)}):t(Oy)}function $S(e){return J({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M185.7 268.1h76.2l-38.1-91.6-38.1 91.6zM223.8 32L16 106.4l31.8 275.7 176 97.9 176-97.9 31.8-275.7zM354 373.8h-48.6l-26.2-65.4H168.6l-26.2 65.4H93.7L223.8 81.5z"}}]})(e)}function sl(e){return J({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M333.5,201.4c0-22.1-15.6-34.3-43-34.3h-50.4v71.2h42.5C315.4,238.2,333.5,225,333.5,201.4z M517,188.6 c-9.5-30.9-10.9-68.8-9.8-98.1c1.1-30.5-22.7-58.5-54.7-58.5H123.7c-32.1,0-55.8,28.1-54.7,58.5c1,29.3-0.3,67.2-9.8,98.1 c-9.6,31-25.7,50.6-52.2,53.1v28.5c26.4,2.5,42.6,22.1,52.2,53.1c9.5,30.9,10.9,68.8,9.8,98.1c-1.1,30.5,22.7,58.5,54.7,58.5h328.7 c32.1,0,55.8-28.1,54.7-58.5c-1-29.3,0.3-67.2,9.8-98.1c9.6-31,25.7-50.6,52.1-53.1v-28.5C542.7,239.2,526.5,219.6,517,188.6z M300.2,375.1h-97.9V136.8h97.4c43.3,0,71.7,23.4,71.7,59.4c0,25.3-19.1,47.9-43.5,51.8v1.3c33.2,3.6,55.5,26.6,55.5,58.3 C383.4,349.7,352.1,375.1,300.2,375.1z M290.2,266.4h-50.1v78.4h52.3c34.2,0,52.3-13.7,52.3-39.5 C344.7,279.6,326.1,266.4,290.2,266.4z"}}]})(e)}function ve(e){return J({tag:"svg",attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M0 32l34.9 395.8L192 480l157.1-52.2L384 32H0zm313.1 80l-4.8 47.3L193 208.6l-.3.1h111.5l-12.8 146.6-98.2 28.7-98.8-29.2-6.4-73.9h48.9l3.2 38.3 52.6 13.3 54.7-15.4 3.7-61.6-166.3-.5v-.1l-.2.1-3.6-46.3L193.1 162l6.5-2.7H76.7L70.9 112h242.2z"}}]})(e)}function sr(e){return J({tag:"svg",attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"}}]})(e)}function ye(e){return J({tag:"svg",attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z"}}]})(e)}function bn(e){return J({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z"}}]})(e)}function Fy(e){return J({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M301.84 378.92c-.3.6-.6 1.08 0 0zm249.13-87a131.16 131.16 0 0 0-58 13.5c-5.9-11.9-12-22.3-13-30.1-1.2-9.1-2.5-14.5-1.1-25.3s7.7-26.1 7.6-27.2-1.4-6.6-14.3-6.7-24 2.5-25.29 5.9a122.83 122.83 0 0 0-5.3 19.1c-2.3 11.7-25.79 53.5-39.09 75.3-4.4-8.5-8.1-16-8.9-22-1.2-9.1-2.5-14.5-1.1-25.3s7.7-26.1 7.6-27.2-1.4-6.6-14.29-6.7-24 2.5-25.3 5.9-2.7 11.4-5.3 19.1-33.89 77.3-42.08 95.4c-4.2 9.2-7.8 16.6-10.4 21.6-.4.8-.7 1.3-.9 1.7.3-.5.5-1 .5-.8-2.2 4.3-3.5 6.7-3.5 6.7v.1c-1.7 3.2-3.6 6.1-4.5 6.1-.6 0-1.9-8.4.3-19.9 4.7-24.2 15.8-61.8 15.7-63.1-.1-.7 2.1-7.2-7.3-10.7-9.1-3.3-12.4 2.2-13.2 2.2s-1.4 2-1.4 2 10.1-42.4-19.39-42.4c-18.4 0-44 20.2-56.58 38.5-7.9 4.3-25 13.6-43 23.5-6.9 3.8-14 7.7-20.7 11.4-.5-.5-.9-1-1.4-1.5-35.79-38.2-101.87-65.2-99.07-116.5 1-18.7 7.5-67.8 127.07-127.4 98-48.8 176.35-35.4 189.84-5.6 19.4 42.5-41.89 121.6-143.66 133-38.79 4.3-59.18-10.7-64.28-16.3-5.3-5.9-6.1-6.2-8.1-5.1-3.3 1.8-1.2 7 0 10.1 3 7.9 15.5 21.9 36.79 28.9 18.7 6.1 64.18 9.5 119.17-11.8 61.78-23.8 109.87-90.1 95.77-145.6C386.52 18.32 293-.18 204.57 31.22c-52.69 18.7-109.67 48.1-150.66 86.4-48.69 45.6-56.48 85.3-53.28 101.9 11.39 58.9 92.57 97.3 125.06 125.7-1.6.9-3.1 1.7-4.5 2.5-16.29 8.1-78.18 40.5-93.67 74.7-17.5 38.8 2.9 66.6 16.29 70.4 41.79 11.6 84.58-9.3 107.57-43.6s20.2-79.1 9.6-99.5c-.1-.3-.3-.5-.4-.8 4.2-2.5 8.5-5 12.8-7.5 8.29-4.9 16.39-9.4 23.49-13.3-4 10.8-6.9 23.8-8.4 42.6-1.8 22 7.3 50.5 19.1 61.7 5.2 4.9 11.49 5 15.39 5 13.8 0 20-11.4 26.89-25 8.5-16.6 16-35.9 16-35.9s-9.4 52.2 16.3 52.2c9.39 0 18.79-12.1 23-18.3v.1s.2-.4.7-1.2c1-1.5 1.5-2.4 1.5-2.4v-.3c3.8-6.5 12.1-21.4 24.59-46 16.2-31.8 31.69-71.5 31.69-71.5a201.24 201.24 0 0 0 6.2 25.8c2.8 9.5 8.7 19.9 13.4 30-3.8 5.2-6.1 8.2-6.1 8.2a.31.31 0 0 0 .1.2c-3 4-6.4 8.3-9.9 12.5-12.79 15.2-28 32.6-30 37.6-2.4 5.9-1.8 10.3 2.8 13.7 3.4 2.6 9.4 3 15.69 2.5 11.5-.8 19.6-3.6 23.5-5.4a82.2 82.2 0 0 0 20.19-10.6c12.5-9.2 20.1-22.4 19.4-39.8-.4-9.6-3.5-19.2-7.3-28.2 1.1-1.6 2.3-3.3 3.4-5C434.8 301.72 450.1 270 450.1 270a201.24 201.24 0 0 0 6.2 25.8c2.4 8.1 7.09 17 11.39 25.7-18.59 15.1-30.09 32.6-34.09 44.1-7.4 21.3-1.6 30.9 9.3 33.1 4.9 1 11.9-1.3 17.1-3.5a79.46 79.46 0 0 0 21.59-11.1c12.5-9.2 24.59-22.1 23.79-39.6-.3-7.9-2.5-15.8-5.4-23.4 15.7-6.6 36.09-10.2 62.09-7.2 55.68 6.5 66.58 41.3 64.48 55.8s-13.8 22.6-17.7 25-5.1 3.3-4.8 5.1c.5 2.6 2.3 2.5 5.6 1.9 4.6-.8 29.19-11.8 30.29-38.7 1.6-34-31.09-71.4-89-71.1zm-429.18 144.7c-18.39 20.1-44.19 27.7-55.28 21.3C54.61 451 59.31 421.42 82 400c13.8-13 31.59-25 43.39-32.4 2.7-1.6 6.6-4 11.4-6.9.8-.5 1.2-.7 1.2-.7.9-.6 1.9-1.1 2.9-1.7 8.29 30.4.3 57.2-19.1 78.3zm134.36-91.4c-6.4 15.7-19.89 55.7-28.09 53.6-7-1.8-11.3-32.3-1.4-62.3 5-15.1 15.6-33.1 21.9-40.1 10.09-11.3 21.19-14.9 23.79-10.4 3.5 5.9-12.2 49.4-16.2 59.2zm111 53c-2.7 1.4-5.2 2.3-6.4 1.6-.9-.5 1.1-2.4 1.1-2.4s13.9-14.9 19.4-21.7c3.2-4 6.9-8.7 10.89-13.9 0 .5.1 1 .1 1.6-.13 17.9-17.32 30-25.12 34.8zm85.58-19.5c-2-1.4-1.7-6.1 5-20.7 2.6-5.7 8.59-15.3 19-24.5a36.18 36.18 0 0 1 1.9 10.8c-.1 22.5-16.2 30.9-25.89 34.4z"}}]})(e)}function GS(e){return J({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M356.9 64.3H280l-56 88.6-48-88.6H0L224 448 448 64.3h-91.1zm-301.2 32h53.8L224 294.5 338.4 96.3h53.8L224 384.5 55.7 96.3z"}}]})(e)}function US(e){return J({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"}}]})(e)}function HS(e){return J({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"}}]})(e)}function Lr(e){return J({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M278.9 511.5l-61-17.7c-6.4-1.8-10-8.5-8.2-14.9L346.2 8.7c1.8-6.4 8.5-10 14.9-8.2l61 17.7c6.4 1.8 10 8.5 8.2 14.9L293.8 503.3c-1.9 6.4-8.5 10.1-14.9 8.2zm-114-112.2l43.5-46.4c4.6-4.9 4.3-12.7-.8-17.2L117 256l90.6-79.7c5.1-4.5 5.5-12.3.8-17.2l-43.5-46.4c-4.5-4.8-12.1-5.1-17-.5L3.8 247.2c-5.1 4.7-5.1 12.8 0 17.5l144.1 135.1c4.9 4.6 12.5 4.4 17-.5zm327.2.6l144.1-135.1c5.1-4.7 5.1-12.8 0-17.5L492.1 112.1c-4.8-4.5-12.4-4.3-17 .5L431.6 159c-4.6 4.9-4.3 12.7.8 17.2L523 256l-90.6 79.7c-5.1 4.5-5.5 12.3-.8 17.2l43.5 46.4c4.5 4.9 12.1 5.1 17 .6z"}}]})(e)}function Vy(e){return J({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"}}]})(e)}function al(e){return J({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224 508c-6.7 0-13.5-1.8-19.4-5.2l-61.7-36.5c-9.2-5.2-4.7-7-1.7-8 12.3-4.3 14.8-5.2 27.9-12.7 1.4-.8 3.2-.5 4.6.4l47.4 28.1c1.7 1 4.1 1 5.7 0l184.7-106.6c1.7-1 2.8-3 2.8-5V149.3c0-2.1-1.1-4-2.9-5.1L226.8 37.7c-1.7-1-4-1-5.7 0L36.6 144.3c-1.8 1-2.9 3-2.9 5.1v213.1c0 2 1.1 4 2.9 4.9l50.6 29.2c27.5 13.7 44.3-2.4 44.3-18.7V167.5c0-3 2.4-5.3 5.4-5.3h23.4c2.9 0 5.4 2.3 5.4 5.3V378c0 36.6-20 57.6-54.7 57.6-10.7 0-19.1 0-42.5-11.6l-48.4-27.9C8.1 389.2.7 376.3.7 362.4V149.3c0-13.8 7.4-26.8 19.4-33.7L204.6 9c11.7-6.6 27.2-6.6 38.8 0l184.7 106.7c12 6.9 19.4 19.8 19.4 33.7v213.1c0 13.8-7.4 26.7-19.4 33.7L243.4 502.8c-5.9 3.4-12.6 5.2-19.4 5.2zm149.1-210.1c0-39.9-27-50.5-83.7-58-57.4-7.6-63.2-11.5-63.2-24.9 0-11.1 4.9-25.9 47.4-25.9 37.9 0 51.9 8.2 57.7 33.8.5 2.4 2.7 4.2 5.2 4.2h24c1.5 0 2.9-.6 3.9-1.7s1.5-2.6 1.4-4.1c-3.7-44.1-33-64.6-92.2-64.6-52.7 0-84.1 22.2-84.1 59.5 0 40.4 31.3 51.6 81.8 56.6 60.5 5.9 65.2 14.8 65.2 26.7 0 20.6-16.6 29.4-55.5 29.4-48.9 0-59.6-12.3-63.2-36.6-.4-2.6-2.6-4.5-5.3-4.5h-23.9c-3 0-5.3 2.4-5.3 5.3 0 31.1 16.9 68.2 97.8 68.2 58.4-.1 92-23.2 92-63.4z"}}]})(e)}function WS(e){return J({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z"}}]})(e)}function zr(e){return J({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM184 296c0 13.3 10.7 24 24 24s24-10.7 24-24V232h64c13.3 0 24-10.7 24-24s-10.7-24-24-24H232V120c0-13.3-10.7-24-24-24s-24 10.7-24 24v64H120c-13.3 0-24 10.7-24 24s10.7 24 24 24h64v64z"}}]})(e)}function Bs(e){return J({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M408 480H184a72 72 0 01-72-72V184a72 72 0 0172-72h224a72 72 0 0172 72v224a72 72 0 01-72 72z"}},{tag:"path",attr:{d:"M160 80h235.88A72.12 72.12 0 00328 32H104a72 72 0 00-72 72v224a72.12 72.12 0 0048 67.88V160a80 80 0 0180-80z"}}]})(e)}function he(e){return J({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M32 32v448h448V32zm240 348c0 43.61-25.76 64.87-63.05 64.87-33.68 0-53.23-17.44-63.15-38.49l34.28-20.75c6.61 11.73 11.63 21.65 26.06 21.65 12 0 21.86-5.41 21.86-26.46V240h44zm99.35 63.87c-39.09 0-64.35-17.64-76.68-42L329 382c9 14.74 20.75 24.56 41.5 24.56 17.44 0 27.57-7.72 27.57-19.75 0-14.43-10.43-19.54-29.68-28l-10.52-4.52c-30.38-12.92-50.52-29.16-50.52-63.45 0-31.57 24.05-54.63 61.64-54.63 26.77 0 46 8.32 59.85 32.68L396 290c-7.22-12.93-15-18-27.06-18-12.33 0-20.15 7.82-20.15 18 0 12.63 7.82 17.74 25.86 25.56l10.52 4.51c35.79 15.34 55.94 31 55.94 66.16.01 37.9-29.76 57.64-69.76 57.64z"}}]})(e)}function QS(e){return J({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"title",attr:{},child:[]},{tag:"path",attr:{d:"M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z"}}]})(e)}function io(e){return J({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"title",attr:{},child:[]},{tag:"path",attr:{d:"M16.634 16.504c.87-.075 1.543-.84 1.5-1.754-.047-.914-.796-1.648-1.709-1.648h-.061a1.71 1.71 0 00-1.648 1.769c.03.479.226.869.494 1.153-1.048 2.038-2.621 3.536-5.005 4.795-1.603.838-3.296 1.154-4.944.93-1.378-.195-2.456-.81-3.116-1.799-.988-1.499-1.078-3.116-.255-4.734.6-1.17 1.499-2.023 2.099-2.443a9.96 9.96 0 01-.42-1.543C-.868 14.408-.416 18.752.932 20.805c1.004 1.498 3.057 2.456 5.304 2.456.6 0 1.23-.044 1.843-.194 3.897-.749 6.848-3.086 8.541-6.532zm5.348-3.746c-2.32-2.728-5.738-4.226-9.634-4.226h-.51c-.253-.554-.837-.899-1.498-.899h-.045c-.943 0-1.678.81-1.647 1.753.03.898.794 1.648 1.708 1.648h.074a1.69 1.69 0 001.499-1.049h.555c2.309 0 4.495.674 6.488 1.992 1.527 1.005 2.622 2.323 3.237 3.897.538 1.288.509 2.547-.045 3.597-.855 1.647-2.294 2.517-4.196 2.517-1.199 0-2.367-.375-2.967-.644-.36.298-.96.793-1.394 1.093 1.318.598 2.652.943 3.94.943 2.922 0 5.094-1.647 5.919-3.236.898-1.798.824-4.824-1.47-7.416zM6.49 17.042c.03.899.793 1.648 1.708 1.648h.06a1.688 1.688 0 001.648-1.768c0-.9-.779-1.647-1.693-1.647h-.06c-.06 0-.15 0-.226.029-1.243-2.098-1.768-4.347-1.572-6.772.12-1.828.72-3.417 1.797-4.735.9-1.124 2.593-1.68 3.747-1.708 3.236-.061 4.585 3.971 4.689 5.574l1.498.45C17.741 3.197 14.686.62 11.764.62 9.02.62 6.49 2.613 5.47 5.535 4.077 9.43 4.991 13.177 6.7 16.174c-.15.195-.24.539-.21.868z"}}]})(e)}function Rn(e){return J({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"title",attr:{},child:[]},{tag:"path",attr:{d:"M16.214 6.762l-.075.391c-.116.741-.074.953.244 1.228l.307.254-.318 1.418c-.19.846-.423 1.555-.571 1.788-.127.201-.275.497-.307.656-.053.19-.233.381-.508.55-.243.138-.72.508-1.058.805-.27.243-.456.392-.557.456l-.33.261c-.106.17-.166.307-.189.411-.023.107-.01.178.024.23.033.05.09.085.168.107a.954.954 0 00.282.023 3 3 0 00.632-.112c.07-.019.125-.037.173-.053.074-.091.245-.263.548-.562.804-.793 1.111-1.227.794-1.11-.117.042-.064-.064.137-.276.424-.413.667-1.037 1.175-2.994.402-1.545.402-1.567.698-1.567.139 0 .532.024.532.024V6.762h-.902zm3.839 3.165c-.064 0-.17.096-.233.202-.116.19.021.306 1.767 1.396 1.037.657 1.873 1.217 1.852 1.26-.021.031-.868.582-1.883 1.217-1.842 1.142-1.852 1.153-1.683 1.386.212.275 0 .37 2.391-1.122L24 13.155v-.836l-1.937-1.196c-1.047-.656-1.957-1.185-2.01-1.196zm-16.085.117c-.053 0-.963.54-2.01 1.185L0 12.425v.836l1.947 1.217c1.08.666 1.99 1.217 2.032 1.217.042 0 .127-.096.212-.212.127-.201.02-.286-1.768-1.418C.72 12.996.54 12.848.71 12.732c.106-.074.91-.572 1.778-1.111 1.979-1.217 1.873-1.133 1.714-1.387-.063-.105-.17-.2-.233-.19zm8.684.023c-.292-.002-.92.443-2.8 1.978-.081.193-.088.326-.051.412.024.059.068.1.129.13.06.03.138.048.224.055.171.015.373-.012.536-.044l.11-.025a.386.386 0 01.144-.118c.116-.064.603-.508 1.09-.984.857-.868 1.058-1.26.709-1.387a.24.24 0 00-.09-.017zm2.196.603c-.257.007-.72.305-1.513.938-.398.323-.65.497-.785.533l-.524.414c-.197.36-.226.583-.174.706a.25.25 0 00.138.134.644.644 0 00.24.045 2.18 2.18 0 00.58-.085 3.466 3.466 0 00.291-.092l.029-.012.053-.028c.1-.129.33-.372.618-.652.91-.878 1.375-1.502 1.28-1.735-.043-.113-.117-.17-.233-.166zm-2.424 1.08c-.074.008-.24.136-.539.398-.432.382-.903.602-1.066.504a3.97 3.97 0 01-.114.024c-.166.033-.373.06-.558.045a.708.708 0 01-.252-.063.337.337 0 01-.168-.17c-.037-.09-.037-.202.005-.345l-.65.534-1.471 1.217V15.867l4.82-3.797a.41.41 0 01.016-.123c.037-.134.035-.202-.023-.196zm2.074.639c-.073 0-.195.103-.39.31-.265.283-.682.557-.903.613l-.034.018a2.191 2.191 0 01-.11.042c-.06.02-.138.044-.228.068-.18.049-.404.094-.604.089a.732.732 0 01-.275-.054.344.344 0 01-.184-.18c-.058-.139-.035-.334.092-.611L7.61 16.033v1.205h1.868l3.962-3.112c.103-.114.258-.27.467-.465.56-.519.687-.698.687-.963 0-.206-.023-.31-.096-.31zm.943 1.95l-.339.338c-.19.18-.529.402-.761.497l-.046.02-.003.005-.01.01c-.009.007-.013.008-.02.011a3.432 3.432 0 01-.282.093 3.058 3.058 0 01-.65.115 1.035 1.035 0 01-.31-.027.364.364 0 01-.218-.144c-.048-.074-.062-.173-.035-.295a1.11 1.11 0 01.095-.25l-3.197 2.526h4.252l.508-.582c.698-.814 1.016-1.396 1.016-1.894z"}}]})(e)}function qS(e){return J({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"title",attr:{},child:[]},{tag:"path",attr:{d:"M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"}}]})(e)}function tn(e){return J({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"title",attr:{},child:[]},{tag:"path",attr:{d:"M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"}}]})(e)}function vp(e){return J({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M5.46192862,4.04007684 C5.18892668,4.03501656 4.99575061,4.06967946 4.79169495,4.11446291 L4.79169495,4.15152944 L4.82901449,4.15152944 C4.95944313,4.41909158 5.18943271,4.591394 5.35034952,4.82188962 C5.47407329,5.08262038 5.59817658,5.34297163 5.72227987,5.60332288 C5.73493056,5.5909252 5.74745474,5.57865403 5.75959941,5.56625635 C5.99047454,5.40394797 6.0957283,5.14410275 6.09471625,4.74737704 C6.00211318,4.64996671 5.98832392,4.52826705 5.90837155,4.4122602 C5.80235875,4.25754224 5.59615247,4.17012595 5.46192862,4.04007684 L5.46192862,4.04007684 Z M23.478665,23.1369293 C23.6543831,23.2658398 23.772161,23.4657208 24,23.5466852 L24,23.5093657 C23.8800714,23.3573044 23.8495833,23.1474294 23.7395222,22.9880306 C23.5786054,22.8271138 23.4164236,22.6655645 23.2555068,22.5040152 C22.7821179,21.8759083 22.1818425,21.3245911 21.5432356,20.8663831 C21.0345512,20.5006515 19.8944709,20.0072745 19.6819392,19.4148426 C19.6697946,19.4021919 19.6571439,19.3896677 19.6444932,19.3770171 C20.0054174,19.3365348 20.4283301,19.2059797 20.7614228,19.1165393 C21.3210894,18.9665021 21.8214243,19.0054662 22.3990549,18.8560615 C22.6600387,18.781296 22.9203899,18.7066569 23.1808677,18.6329033 L23.1808677,18.4834987 C22.8887632,18.1836773 22.6805328,17.7869515 22.3622414,17.5155942 C21.5283078,16.8061434 20.6188495,16.0966926 19.6818127,15.5056522 C19.1626283,15.1774933 18.5200996,14.9645821 17.969415,14.6865199 C17.7842089,14.5931578 17.4590861,14.5444526 17.3365009,14.3887226 C17.0476856,14.0198284 16.8899314,13.5523853 16.6667732,13.1228943 C16.1997097,12.2230506 15.740363,11.2403448 15.3263059,10.293567 C15.044322,9.6481287 14.8597484,9.01154587 14.5076796,8.43227067 C12.8174206,5.65329311 10.9976185,3.97581132 8.17942382,2.3270466 C7.57927498,1.97649592 6.85742648,1.83809735 6.09471625,1.65719245 C5.68546635,1.6325236 5.27545742,1.60734872 4.86620752,1.58267987 C4.61635635,1.47831166 4.35651113,1.17267094 4.12184079,1.02427832 C3.18796669,0.434503045 0.792811133,-0.848656668 0.10157731,0.838313141 C-0.335124586,1.90286889 0.753847001,2.94174374 1.14361483,3.48142227 C1.4172493,3.85980447 1.76704094,4.2842352 1.96287366,4.70967798 C2.09127818,4.98938478 2.11316388,5.27010364 2.22385744,5.56600333 C2.49432924,6.29518923 2.7293791,7.08838764 3.07929725,7.76241652 C3.25653344,8.10322617 3.45173363,8.46263233 3.67539786,8.76738751 C3.81265788,8.95449125 4.04720171,9.03684725 4.08401522,9.32578906 C3.85465817,9.64749617 3.84150145,10.1466925 3.7125909,10.5541713 C3.13065906,12.3887747 3.35014857,14.6686824 4.19660638,16.0266077 C4.45594557,16.443195 5.06773305,17.3374725 5.90837155,16.9942592 C6.64375629,16.6946908 6.47980332,15.76613 6.69018433,14.9469976 C6.73749792,14.760906 6.70865434,14.624405 6.80176344,14.5003017 L6.80176344,14.5373682 C7.02542767,14.9840642 7.2488389,15.4307601 7.47199711,15.8773296 C7.96815726,16.6759678 8.84826592,17.5111665 9.59415073,18.0739958 C9.98037636,18.3659737 10.2848785,18.8709894 10.7852134,19.0419002 L10.7852134,19.0040746 L10.7478939,19.0040746 C10.6504835,18.8536579 10.4989282,18.790531 10.3759635,18.6694638 C10.0844916,18.3836847 9.76050733,18.0287063 9.51938514,17.7014329 C8.84080201,16.780589 8.24153872,15.7725818 7.69553484,14.7235864 C7.43455106,14.2224925 7.20785066,13.6697838 6.98785512,13.1600874 C6.90322199,12.9633691 6.90423404,12.6662043 6.72737736,12.5643663 C6.48650818,12.9378147 6.13190928,13.2401663 5.94556458,13.6811694 C5.64776729,14.386319 5.60943569,15.2461865 5.49899515,16.1379338 C5.43371758,16.1614641 5.46268766,16.1453977 5.42422956,16.1750003 C4.90555118,16.0502645 4.72350772,15.5164053 4.53096418,15.0584502 C4.04378602,13.9006589 3.95333357,12.0360734 4.38206553,10.7030699 C4.4930121,10.3583386 4.99499157,9.27202362 4.79131543,8.95347919 C4.69441112,8.63544079 4.37510765,8.45187925 4.19635337,8.20885945 C3.97420721,7.90853201 3.75332613,7.5134509 3.59974672,7.16644241 C3.20150293,6.26368901 3.01528474,5.25024206 2.59540827,4.33749461 C2.39451528,3.90142525 2.0550972,3.45966308 1.77627595,3.07166635 C1.46759906,2.64204884 1.12185564,2.32578153 0.882884062,1.80583808 C0.797744903,1.62126448 0.681991069,1.32587082 0.808244978,1.13598393 C0.848094658,1.00783242 0.905022773,0.954446496 1.03190922,0.912572704 C1.24810955,0.746089595 1.84889092,0.967982736 2.07394674,1.06147135 C2.67055338,1.30929841 3.16924367,1.54548684 3.67489184,1.88035066 C3.91740561,2.04126747 4.16295554,2.35272751 4.45607208,2.43887872 L4.79118892,2.43887872 C5.31568662,2.5591868 5.90280525,2.47645128 6.39200751,2.62509691 C7.25744137,2.8881048 8.0329288,3.29722819 8.73719284,3.74202653 C10.8826237,5.09653615 12.6370217,7.02526068 13.8370664,9.32578906 C14.030116,9.69620133 14.1138635,10.0496617 14.2836358,10.4427187 C14.6265961,11.2350315 15.0591233,12.0501156 15.4004389,12.825097 C15.7408691,13.5978013 16.0728232,14.3779695 16.5541821,15.0213837 C16.8071959,15.3594102 17.7850944,15.5408211 18.2297663,15.7288104 C18.5412263,15.8602511 19.0514287,15.9976376 19.3460633,16.1750003 C19.9100312,16.5151775 20.4556556,16.9197466 20.9842015,17.292183 C21.2483479,17.4785277 22.0606489,17.886639 22.1006251,18.2223884 C20.7916579,18.1877255 19.7916207,18.3092986 18.9366869,18.6695903 C18.6936671,18.7716814 18.3064295,18.7747176 18.2664533,19.0787137 C18.4000446,19.2186304 18.4211712,19.4281259 18.527437,19.6000488 C18.7309867,19.9304848 19.0755915,20.3728795 19.3833829,20.6053993 C19.7195118,20.8590456 20.0657612,21.130403 20.4255469,21.3498925 C21.0663045,21.7407989 21.7818276,21.9638306 22.3984224,22.3551165 C22.7632683,22.5861182 23.1241926,22.8764515 23.478665,23.1369293 L23.478665,23.1369293 Z"}}]})(e)}const L0="/portfolio/assets/home-3KlNCXFT.png",KS="/portfolio/assets/filter-d7XFgzKA.png",YS="/portfolio/assets/product details-OX7lWFmS.png",qu="/portfolio/assets/GGWP-Ou2tofM0.png",XS="/portfolio/assets/FireShot Capture 021 - GG-WP - www.gg-wp.info-p4OMVzc6.png",z0="/portfolio/assets/soundgarden-Cnh8S8xk.png",ZS="/portfolio/assets/jsajosajdoia-n35RSTnT.png",JS="/portfolio/assets/dgfgdfgdfg-Px4pT7g1.png",M0="/portfolio/assets/codeleap-pDrfXJhU.png",ej="/portfolio/assets/FireShot Capture 013 - Codeleap - gleibercoelho.github.io-4iqmdNU0.png",tj="/portfolio/assets/FireShot Capture 015 - Codeleap - gleibercoelho.github.io-ruOO4w4i.png",I0="/portfolio/assets/FireShot Capture 004 - Dindin - gleibercoelho.github.io-Cp_TQjbN.png",nj="/portfolio/assets/FireShot Capture 008 - Dindin - gleibercoelho.github.io-eIGYl7IU.png",rj="/portfolio/assets/FireShot Capture 005 - Dindin - gleibercoelho.github.io-lJ5mV9tz.png",D0="/portfolio/assets/sheilla-Hhe_1fBv.png",oj="/portfolio/assets/FireShot Capture 010 - Pompom - -8JjTq5vw.png",ij="/portfolio/assets/FireShot Capture 011 - Pompom - -n2zDAbnX.png",sj=({children:e,width:t="98vw"})=>{const n=C.useRef(null),r=Nv(n,{once:!0}),o=ud();return C.useEffect(()=>{r&&o.start("visible")},[r]),u.jsx("div",{ref:n,style:{position:"relative",width:t,overflow:"hidden"},children:u.jsx(De.div,{variants:{hidden:{x:"100%"},visible:{x:0}},initial:"hidden",animate:o,transition:{duration:1.2,delay:.25,ease:"easeInOut"},children:e})})},aj=()=>{const[e,t]=C.useState(!1),[n,r]=C.useState(!1),[o,i]=C.useState("");function s(w,j){var _;const P=document.getElementById(`project-${j}`),k=P==null?void 0:P.querySelector(".textDiv"),E=P==null?void 0:P.querySelector(".card"),R=P==null?void 0:P.querySelector(".secretDiv");if(console.log(w),console.log(o),r(!n),h(),((_=R==null?void 0:R.style)==null?void 0:_.display)==="none"){console.log(e),l(R),l(k),l(E);const I=setTimeout(()=>(a(),i(j),console.log(e),I),200)}else{t(!1),i(j);const I=setTimeout(()=>(l(R),l(k),l(E),I),1e3),G=setTimeout(()=>{var B;const U=(B=g[j])==null?void 0:B.current;return U&&(U.classList.remove(`oriented-Div-animated${j}`),i(""),console.log(o)),G},1e3)}}const a=()=>{t(!0),console.log(e)};function l(w){w.style.display=w.style.display==="none"?"flex":"none"}C.useEffect(()=>{const w=document.getElementById(`project-${o}`),j=w==null?void 0:w.querySelector(".secretDiv"),P=w==null?void 0:w.querySelector(".saibaMais");if(e)j==null||j.classList.add("show-animated"),P==null||P.classList.add("show-Button"),console.log(e);else{j==null||j.classList.remove("show-animated"),P==null||P.classList.add("show-Button-transition"),console.log(e);const k=setTimeout(()=>(P==null||P.classList.remove("show-Button"),P==null||P.classList.remove("show-Button-transition"),console.log(e),k),1e3);if(o!==""){const E=parseInt(o,10);if(!isNaN(E)){const R=setTimeout(()=>{var I;const _=(I=g[E])==null?void 0:I.current;return _&&_.current&&(_.current.classList.add(`oriented-Div-animated${E}`),console.log(o)),R},300)}}}},[e,o]);const c=[{id:0,imageClass:"Ecommerce",imageSrc:L0,title:"Mercado Gadgets",technologies:u.jsxs("div",{children:[u.jsx(bn,{}),u.jsx(io,{}),u.jsx(tn,{}),u.jsx(Rn,{}),u.jsx(he,{}),u.jsx(ye,{}),u.jsx(ve,{})]}),secretText:"Comercio Gadgets é um projeto Full-Stack no qual eu desenvolvi o Fron end. Este é um e-commerce com experiência completa ",secretTextAcess:u.jsxs("div",{className:"AcessDois",children:[u.jsx("div",{children:u.jsxs(N,{to:"/projects/0",children:[u.jsx(zr,{})," ",u.jsx("p",{children:" mais detalhes"})]})})," ",u.jsx("div",{children:u.jsxs(N,{to:"https://github.com/gleibercoelho/Gama-XP-47-final",target:"_blank",children:[u.jsx(sr,{}),u.jsx("p",{children:"GitHub"})]})}),u.jsx("div",{children:u.jsxs(N,{to:"#",children:[u.jsx(Lr,{}),u.jsx("p",{children:"acessar site"})]})})]}),imageSrcSecretOne:KS,imageSrcSecretTwo:YS,imageSrcSecretThree:L0,imageClassSecretOne:"EcommerceSecretOne",imageClassSecretTwo:"EcommerceSecretTwo",imageClassSecretThree:"EcommerceSecretThree"},{id:1,imageClass:"GGWP",imageSrc:qu,title:"GG-WP",technologies:u.jsxs("div",{children:[u.jsx(bn,{}),u.jsx(tn,{}),u.jsx(Rn,{}),u.jsx(al,{}),u.jsx(he,{}),u.jsx(vp,{}),u.jsx(ye,{}),u.jsx(ve,{})]}),secretText:"GG-WP é um Web-aplicativo Full-Stack que busca os status de partida dos jogadores de league of legends do mundo inteiro.",secretTextAcess:u.jsxs("div",{className:"AcessDois",children:[u.jsx("div",{children:u.jsxs(N,{to:"/projects/1",children:[u.jsx(zr,{})," ",u.jsx("p",{children:" mais detalhes"})]})})," ",u.jsx("div",{children:u.jsxs(N,{to:"#",children:[u.jsx(sr,{}),u.jsx("p",{children:"GitHub"})]})}),u.jsx("div",{children:u.jsxs(N,{to:"https://www.gg-wp.info/",target:"_blank",children:[u.jsx(Lr,{}),u.jsx("p",{children:"acessar site"})]})})]}),imageSrcSecretOne:qu,imageSrcSecretTwo:qu,imageSrcSecretThree:XS,imageClassSecretOne:"GGWPSecretThree",imageClassSecretTwo:"GGWPSecretTwo",imageClassSecretThree:"GGWPSecretOne"},{id:2,imageClass:"Soundgarden",imageSrc:z0,title:"Sound-Garden",technologies:u.jsxs("div",{children:[u.jsx(he,{}),u.jsx(sl,{}),u.jsx(ye,{}),u.jsx(ve,{})]}),secretText:"Sound Garden é um site desenvolvido para uma grande empresa de eventos que mostra os pricipais shows que estão por vir.",secretTextAcess:u.jsxs("div",{className:"AcessDois",children:[u.jsx("div",{children:u.jsxs(N,{to:"/projects/2",children:[u.jsx(zr,{})," ",u.jsx("p",{children:" mais detalhes"})]})})," ",u.jsx("div",{children:u.jsxs(N,{to:"https://github.com/gleibercoelho/soundgarden-front",target:"_blank",children:[u.jsx(sr,{}),u.jsx("p",{children:"GitHub"})]})}),u.jsx("div",{children:u.jsxs(N,{to:"https://gleibercoelho.github.io/soundgarden-front/",target:"_blank",children:[u.jsx(Lr,{}),u.jsx("p",{children:"acessar site"})]})})]}),imageSrcSecretOne:z0,imageSrcSecretTwo:ZS,imageSrcSecretThree:JS,imageClassSecretOne:"SoundGardenSecretOne",imageClassSecretTwo:"SoundGardenSecretTwo",imageClassSecretThree:"SoundGardenSecretThree"},{id:3,imageClass:"Codeleap",imageSrc:M0,title:"CodeLeap",technologies:u.jsxs("div",{children:[u.jsx(bn,{}),u.jsx(io,{}),u.jsx(tn,{}),u.jsx(Rn,{}),u.jsx(he,{}),u.jsx(ye,{}),u.jsx(ve,{})]}),secretText:"Codeleap é um serviço de microblog para publicar todas as suas ideias e pensamentos para o mundo",secretTextAcess:u.jsxs("div",{className:"AcessDois",children:[u.jsx("div",{children:u.jsxs(N,{to:"/projects/3",children:[u.jsx(zr,{})," ",u.jsx("p",{children:" mais detalhes"})]})})," ",u.jsx("div",{children:u.jsxs(N,{to:"https://github.com/gleibercoelho/codeLeap",target:"_blank",children:[u.jsx(sr,{}),u.jsx("p",{children:"GitHub"})]})}),u.jsx("div",{children:u.jsxs(N,{to:"https://gleibercoelho.github.io/codeleapPage/",target:"_blank",children:[u.jsx(Lr,{}),u.jsx("p",{children:"acessar site"})]})})]}),imageSrcSecretOne:M0,imageSrcSecretTwo:ej,imageSrcSecretThree:tj,imageClassSecretOne:"CodeleapSecretOne",imageClassSecretTwo:"CodeleapSecretTwo",imageClassSecretThree:"CodeleapSecretThree"},{id:4,imageClass:"Dindin",imageSrc:I0,title:"Dindin",technologies:u.jsxs("div",{children:[u.jsx(he,{}),u.jsx(ye,{}),u.jsx(ve,{})]}),secretText:"Dindin é uma plataforma de cursos de educação financeira onde é possível assistir aulas gravadas",secretTextAcess:u.jsxs("div",{className:"AcessDois",children:[u.jsx("div",{children:u.jsxs(N,{to:"/projects/4",children:[u.jsx(zr,{})," ",u.jsx("p",{children:" mais detalhes"})]})})," ",u.jsx("div",{children:u.jsxs(N,{to:"https://github.com/gleibercoelho/Dindin-website-of-education",target:"_blank",children:[u.jsx(sr,{}),u.jsx("p",{children:"GitHub"})]})}),u.jsx("div",{children:u.jsxs(N,{to:"https://gleibercoelho.github.io/Dindin-website-of-education/",target:"_blank",children:[u.jsx(Lr,{}),u.jsx("p",{children:"acessar site"})]})})]}),imageSrcSecretOne:I0,imageSrcSecretTwo:nj,imageSrcSecretThree:rj,imageClassSecretOne:"DindinSecretOne",imageClassSecretTwo:"DindinSecretTwo",imageClassSecretThree:"DindinSecretThree"},{id:5,imageClass:"Sheilla",imageSrc:D0,title:"Pompom",technologies:u.jsxs("div",{children:[u.jsx(he,{}),u.jsx(ye,{}),u.jsx(ve,{})]}),secretText:"Pompom é um site de uma criadora de conteúdo Drag Queen de jogos e lives de entretenimento LGBTQIA+ friendly",secretTextAcess:u.jsxs("div",{className:"AcessDois",children:[u.jsx("div",{children:u.jsxs(N,{to:"/projects/5",children:[u.jsx(zr,{})," ",u.jsx("p",{children:" mais detalhes"})]})})," ",u.jsx("div",{children:u.jsxs(N,{to:"https://github.com/gleibercoelho/SheillaPompom",target:"_blank",children:[u.jsx(sr,{}),u.jsx("p",{children:"GitHub"})]})}),u.jsx("div",{children:u.jsxs(N,{to:"https://gleibercoelho.github.io/SheillaPompom/",target:"_blank",children:[u.jsx(Lr,{}),u.jsx("p",{children:"acessar site"})]})})]}),imageSrcSecretOne:D0,imageSrcSecretTwo:oj,imageSrcSecretThree:ij,imageClassSecretOne:"SheillaSecretOne",imageClassSecretTwo:"SheillaSecretTwo",imageClassSecretThree:"SheillaSecretThree"}],[d,f]=C.useState(1),[p,m]=C.useState(null),y=w=>{const j=document.getElementById(`slide${w}-${w}`);j&&(j.style.display="flex")},x=3;C.useEffect(()=>{n&&v()},[n]);const S=()=>{f(w=>{const j=w%x+1;return y(j),j})},v=()=>{if(!p){const w=setInterval(()=>{S()},3e3);m(w)}},h=()=>{n||r(!0)},g=Array.from({length:x},()=>F.createRef());return u.jsxs(FS,{children:[u.jsx("h1",{children:"Projetos em destaque"}),u.jsx("div",{children:c.map((w,j)=>u.jsx(sj,{children:u.jsxs("section",{ref:g[j],className:`${j%2===0?"leftProjects":"RightProjects"} `,id:`project-${j}`,children:[j%2===0?u.jsxs(u.Fragment,{children:[u.jsx("div",{className:"card",style:{display:"flex"},children:u.jsx("img",{className:w.imageClass,src:w.imageSrc,alt:""})}),u.jsxs("div",{className:"textDiv",style:{display:"flex"},children:[u.jsx("h2",{children:w.title}),u.jsxs("p",{children:["techs: ",w.technologies]}),u.jsx("button",{className:"button",onClick:P=>s(P,w.id),children:"Saiba +"})]})]}):u.jsxs(u.Fragment,{children:[u.jsxs("div",{className:"textDiv",style:{display:"flex"},children:[u.jsx("h2",{children:w.title}),u.jsxs("p",{children:["techs:",w.technologies]}),u.jsx("button",{className:"button",onClick:P=>s(P,w.id),children:"Saiba +"})]}),u.jsx("div",{className:"card",style:{display:"flex"},children:u.jsx("img",{className:w.imageClass,src:w.imageSrc,alt:""})})]}),u.jsxs("div",{className:"secretDiv",style:{display:"none"},children:[u.jsxs("div",{className:"secretDivRow",children:[u.jsx("button",{className:"saibaMais",onClick:P=>{s(P,w.id)},children:"Fechar -"}),u.jsxs("div",{className:"secretDivColumn",children:[u.jsx("p",{children:w.secretText}),u.jsx("div",{className:"Acess",children:w.secretTextAcess})]})]}),u.jsxs("div",{className:"carousel",children:[u.jsx("img",{src:w.imageSrcSecretOne,alt:"",className:`slide ${d===1?"active":""} ${w.imageClassSecretOne}`,id:"slide1"}),u.jsx("img",{src:w.imageSrcSecretTwo,alt:"",className:`slide ${d===2?"active":""} ${w.imageClassSecretTwo}`,id:"slide2"}),u.jsx("img",{src:w.imageSrcSecretThree,alt:"",className:`slide ${d===3?"active":""} ${w.imageClassSecretThree}`,id:"slide3"})]})]})]},j)}))}),u.jsx("div",{className:"footer",children:u.jsx(N,{to:"/projects",children:u.jsx("h2",{children:"Ver todos os projetos"})})})]})};function lj(e){return J({tag:"svg",attr:{viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}},{tag:"path",attr:{d:"M12 12l-8 -8v16l16 -16v16l-4 -4"}},{tag:"path",attr:{d:"M20 12l-8 8l-4 -4"}}]})(e)}const uj=et.div`

.master{
    
    display: flex !important;
    flex-direction: row !important;
    flex-wrap: nowrap !important;
    justify-content: center;
    align-items: start;
    
    height: 100vh;
    background-image: linear-gradient(to left bottom, #1f242d, #10252b, #092422, #122213, #211d00);
    overflow: hidden;
    font-family: 'Poppins', sans-serif;
    padding-top: 50px;
  
    
}

h1{
    font-size: 90px;
    color: greenyellow;
    align-self: center;
}
h2{
    font-size: 40px;    
    color: yellowgreen;
    
}

p{
    font-size: 20px;
    color: #0ef;
    font-weight: 600;
    padding: 0 30px 0 30px;    
    line-height: 2px;
    text-align: left;
    display: flex;
    flex-direction: row;
    align-items: center;
   
}

.eight{
        align-self: end;
        padding-top: 280px;
        font-size: 10px;
        color: #1D4D60;
    }

svg{
    display: flex;
    flex-direction: row;
    font-size: 30px;
    line-height: 2px;
    text-align: left;
    align-items: center;
    padding: 0 8px 0 0;

}


.sec-1{

    display: flex !important;
    flex-direction: row !important;
    flex-wrap: nowrap !important;
    justify-content: space-around;    
    width: 98vw;
    height: 100vh;
   .boxes{
        display: flex;
    flex-direction: column;
    justify-content: start;
    text-justify: left;
    align-items: left;

    }
 
}
@media only screen and (max-width: 1260px){

    .master{
        height: 100%;
    }
    .sec-1{
        height: 100%;
    }
    h1{
        font-size: 60px;      
    }
    h2{
        font-size: 30px;
        margin: 0;
        padding: 0;
        text-justify: center !important;
    }
    p{
        font-size: 20px;
        padding: 0;
        text-justify: center !important;
    }
    svg{
        font-size: 25px;
        padding: 0;
        text-justify: center !important;
    }
    

}
@media only screen and (max-width: 768px){
    justify-content: center !important;
    h1{
        font-size: 40px;
    }
    h2{
        font-size: 25px;
        margin: 20px 0;
        padding: 0;
        text-justify: center !important;
    }
    p{
        font-size: 15px;
        padding: 0;
        text-justify: center !important;
    }
    svg{
        font-size: 20px;
        padding: 0;
        text-justify: center !important;
    }
    .eight{
        padding: 0;
    }

    .master{
        flex-direction: column !important;
        justify-content: center !important;
        height: 100%;
    }
    .sec-1{
        flex-direction: column !important;
        justify-content: center !important;
        height: 100%;
        text-justify: center !important;
        align-items: center;
        margin: 0;
        padding: 0;
        width: 100vw;
        flex-wrap: wrap;
        white-space: wrap;
    }
    .sec-1.boxes{
        display: flex;
        justify-content: center !important;
        text-justify: center !important;
        align-items: center;        
        margin: 0;
        padding: 0;
        height: 100%;
    }
}


`,cj=et.div`

   
    margin: 0;
    padding: 0;
    box-sizing: border-box;  
  width: 100%;
height: 100%;
        
`,so=({children:e,width:t="98vw"})=>{const n=C.useRef(null),r=Nv(n,{once:!0}),o=ud(),i=ud();return C.useEffect(()=>{r&&(o.start("visible"),i.start("visible"))},[r]),u.jsx(cj,{children:u.jsx("div",{ref:n,style:{position:"relative",width:t,overflow:"hidden"},children:u.jsx(De.div,{variants:{hidden:{opacity:0,x:75},visible:{opacity:1,x:0}},initial:"hidden",animate:o,transition:{duration:.5,delay:.25,ease:"easeInOut"},children:e})})})},dj=()=>u.jsx(uj,{children:u.jsx("div",{className:"master",children:u.jsx(so,{children:u.jsxs("section",{className:"sec-1",children:[u.jsx("h1",{className:"animate",children:"Skills"}),u.jsxs("div",{className:"boxes",children:[u.jsxs("h2",{children:["Front-End / ",u.jsx("br",{}),"Framework"]}),u.jsxs("p",{children:[u.jsx(he,{})," JavaScript"]}),u.jsxs("p",{children:[u.jsx(tn,{})," Typescript"]}),u.jsxs("p",{children:[u.jsx(bn,{})," React JS"]}),u.jsxs("p",{children:[u.jsx(io,{})," Redux"]}),u.jsxs("p",{children:[u.jsx($S,{})," Angular"]}),u.jsxs("p",{children:[u.jsx(GS,{})," Vue Js *"]})]}),u.jsxs("div",{className:"boxes",children:[u.jsx("h2",{children:"Estilização"}),u.jsxs("p",{children:[u.jsx(lj,{})," Framer Motion"]}),u.jsxs("p",{children:[u.jsx(Rn,{})," Styled Components"]}),u.jsxs("p",{children:[u.jsx(Fy,{})," Sass"]}),u.jsxs("p",{children:[u.jsx(qS,{})," TailWind"]}),u.jsxs("p",{children:[u.jsx(sl,{})," Bootstrap"]}),u.jsxs("p",{children:[u.jsx(ve,{})," CSS"]}),u.jsxs("p",{children:[u.jsx(ye,{})," HTML"]})]}),u.jsxs("div",{className:"boxes",children:[u.jsx("h2",{children:"Back-end/BD"}),u.jsxs("p",{children:[u.jsx(al,{})," Node Js"]}),u.jsxs("p",{children:[u.jsx(vp,{})," MySQL"]}),u.jsxs("p",{children:[u.jsx(QS,{}),"Mongo DB *"]}),u.jsx("p",{className:"eight",children:"* aprendendo atualmente"})]})]})})})});function ao(e){return J({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"13 17 18 12 13 7"}},{tag:"polyline",attr:{points:"6 17 11 12 6 7"}}]})(e)}function By(e){return J({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"3",y1:"12",x2:"21",y2:"12"}},{tag:"line",attr:{x1:"3",y1:"6",x2:"21",y2:"6"}},{tag:"line",attr:{x1:"3",y1:"18",x2:"21",y2:"18"}}]})(e)}function $y(e){return J({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"18",y1:"6",x2:"6",y2:"18"}},{tag:"line",attr:{x1:"6",y1:"6",x2:"18",y2:"18"}}]})(e)}const fj=et.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: black;
  color: #9296F0;
  font-family: 'Poppins', sans-serif;

  h1{
    font-size: 30px;
    padding-left: 20px;
  }
  h2{
    font-size: 30px;
    padding-right: 20px;
  }
  .menu-icon {
      svg{
      font-size: 50px;
      
    }}
  .toast-menu {
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: ${e=>e.isOpen?"0":"-100%"};
    left: 50%;
    transform: translate(-50%, 0%);
    background-image: linear-gradient(to right bottom, #ff0000, #c60019, #8c001c, #530616, #210003);
    opacity: 0.98;
    z-index: 7;
    transition: top 1.0s ease-in-out;
    align-items: center;
    justify-content: center;
    text-align: center;

    a{
      text-decoration: none;
      color: white;
    }
    a svg{
      font-size: 60px;
    }
  }
 

  .toast-menu.active {
    transition: top 0.5s ease-in-out;
    top: 0;
  }

  .toast-menu ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
    font-family: 'Poppins', sans-serif;
  }

  .fade-in {
    opacity: 0;
    transition: opacity 0.7s ease-in-out;
    font-size:0;
    color: transparent;
  }

  .fade-in.show {
    opacity: 1;
    font-size:0;
    color: #E4F68D;
    
    
  }
  .fade-in.show.svg{
    position: relative;
    left: 45%;
    font-size: 40px;
    transition: opacity 0s;
    color: #E4F68D;
  }

  .left-align {
    text-align: left;
  }

  .toast-menu li {
    display: flex;
    justify-content: flex-start; /* Alinhe à esquerda */
    padding: 10px;
    margin-top: 40px;
    font-size: 80px;
    font-weight: 900;
    color: white;
    cursor: pointer;
    padding-left: 35%;    
    align-items: center;
  }

  .button{
    opacity: 0;
    transition: opacity 0.7s ease-in-out;
    font-size: 0;
  }

  button.svg{
    opacity: 0;
    transition: opacity 0.7s ease-in-out;
    font-size: 0;
  }
  .button.show {
    position: relative;
    font-size: 40px !important;
    color: #E4F68D;
    left: -45%;
    margin-top: 10px;
    padding: 10px;    
    cursor: pointer;   
    opacity: 1;
    transition: opacity 0s
  }

  @media only screen and (max-width: 1260px){
    .toast-menu{
     
       li{
      
      padding-left: 25%
    }
  }
  @media only screen and (max-width: 768px){

    h1{
      font-size: 15px;
    }
    h2{
      font-size: 15px;
    }
    .menu-icon {
      svg{
      font-size: 30px;
      display: flex;
      
    }}
    .toast-menu{
      left: 50%;
      width: 100%;
      height: 100%;
      a svg{
        font-size: 30px;
    }
    li{
      font-size: 40px;
      padding-left: 25%
    }
    
  }
  .toast-menu.active .button.show{
    padding-left: 70px;
  }
}
`,Zi=()=>{const[e,t]=C.useState(!1),[n,r]=C.useState(!1),[o,i]=C.useState(!1),[s,a]=C.useState(new Date);C.useEffect(()=>{const d=setInterval(()=>{a(new Date)},1e3);return()=>clearInterval(d)},[]),C.useEffect(()=>{if(e){const d=setTimeout(()=>{r(!0)},100),f=setTimeout(()=>{i(!0)},1e3);return()=>{clearTimeout(d),clearTimeout(f)}}},[e]);const l=()=>{if(!e)t(!0);else{i(!1);const d=setTimeout(()=>{r(!1)},100),f=setTimeout(()=>{t(!1)},1500);return()=>{clearTimeout(d),clearTimeout(f)}}},c=d=>{window.location.pathname===d&&window.history.replaceState(null,"",d)};return u.jsxs(fj,{children:[u.jsx("h1",{children:"Gleiber Coelho"}),u.jsx("div",{className:"menu-icon",onClick:l,children:u.jsx(By,{})}),e&&u.jsxs("div",{className:`toast-menu ${n&&"active"}`,children:[u.jsx($y,{onClick:l,size:"50px",className:`fade-in svg ${o&&"show"}`}),u.jsx(N,{to:"/",onClick:()=>c("/"),children:u.jsx(Vy,{className:`button svg ${o&&"show"}`})}),u.jsxs("ul",{className:`fade-in ${o&&"show"}`,children:[u.jsx("li",{children:u.jsxs(N,{to:"/projects",onClick:()=>c("/projects"),children:[u.jsx(ao,{color:"black"}),"Projetos"]})}),u.jsx("li",{children:u.jsxs(N,{to:"/about",onClick:()=>c("/about"),children:[u.jsx(ao,{color:"black"}),"Sobre"]})}),u.jsx("li",{children:u.jsxs(N,{to:"/contact",onClick:()=>c("/contact"),children:[u.jsx(ao,{color:"black"}),"Contato"]})})]})]}),u.jsx("h2",{children:s.toLocaleTimeString()})]})},pj=()=>{const{scrollYProgress:e}=Ov(),t=Iv(e);return u.jsxs(fs,{children:[u.jsx(Zi,{}),u.jsx(NS,{}),u.jsx(aj,{}),u.jsx(dj,{}),u.jsx(De.div,{style:{scaleX:t,transformOrigin:"left",background:"white",position:"sticky",bottom:0,width:"100%",height:"5px"}})]})},hj="/portfolio/assets/Captura de tela 2023-12-22 184050-YVvUj5OI.png",mj=et.div`

display: flex;
flex-direction: row;
justify-content: space-around;
width: 98vw;

background-image: linear-gradient(to right, #6441a5, #56328b, #472473, #39165b, #2a0845);
font-family: 'Poppins', sans-serif;

.imgBox{

    img{
        padding: 100px 50px 100px 100px;
        /* transform: scale(3); */
        filter: saturate(100%)
        opacity(1);
        border-radius: 130px;
        
    }
}
.informationBox{
display: flex;
flex-direction: column;

h1{
    color: #C2F8CB;
    font-size: 70px;
    padding: 50px 0 0 0;
    margin: 0;
    span{
        font-size: 50px;
    }
}
h2{
    color: #C2F8CB;
    font-size: 50px;
    padding: 0;
    margin: 0 0 30px 0;
    span{
        color: #0EB1D2;
        font-size: 70px;
        padding: 0;
    }
}

p{
    color: #95B8D1;
    font-size: 20px;
    text-justify: justify;
    text-align: justify;
    padding-right: 40px;
    span{
        color: #FEF7FF;
    }
}

hr{
    background-color: #0061A7;
    color: #751754;
    height: 2px;
    width: 95%;
    border: none;
}
}
.gridBox{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    white-space: wrap;
    p{
    color: #E8D5B5;
    font-size: 24px;

    span{
        color: #B872EA;
    }
}

}
.gridColumnOne{
    display: flex;
    flex-direction: column;

}
.gridColumnTwo{
    display: flex;
    flex-direction: column;
}
@media only screen and (max-width: 1260px){
    flex-direction: column;
    .imgBox{
        display: flex;
        align-items: center;
        
        justify-content: center;

        img{
            display: flex;
            align-items: center;
            justify-content: center;
            
        }
    }
    .informationBox{
        padding-left: 20px;
        padding-right: 20px;
    }
}
@media only screen and (max-width: 768px){

    flex-direction: column-reverse;
    
    .imgBox{
        img{
            width: 300px;
            object-fit: contain;
            padding: 100px 20px 50px 20px;
            border-radius: 20%;
        }
    }
    .informationBox{
        padding-left: 20px;
        padding-right: 20px;
    
        .gridBox{
            flex-direction: column;
            padding-left: 20px;
        padding-right: 20px;
        }

    }
}
`,gj=()=>u.jsxs(mj,{children:[u.jsx(De.div,{initial:{opacity:0,x:-100},animate:{opacity:1,x:0},transition:{duration:1,delay:.75},className:"imgBox",children:u.jsx("img",{src:hj,alt:""})}),u.jsxs(De.div,{initial:{opacity:0,x:100},animate:{opacity:1,x:0},transition:{duration:1,delay:.75},className:"informationBox",children:[u.jsxs("h1",{children:["Olá",u.jsx("span",{children:","})]}),u.jsxs("h2",{children:["eu sou o ",u.jsx("span",{children:"Gleiber"}),"."]}),u.jsxs("p",{children:["Eu sou desenvolvedor front-end júnior em transição de carreira. Sou apaixonado com desenvolvimento de sites e estilização. Estudo programação desde o início de 2022 e estou em busca da minha primeira oportunidade formal na área. Tenho experiencia tanto em front-end, quando em back-end, que estão evidenciados nos projetos que eu criei; Neste portifólio estão disponíveis alguns dos sites e aplicações que eu criei de forma independente e/ou em cursos e vídeo aulas. vamos trabalhar juntos? ",u.jsx("span",{children:"Estou aberto a propostas freelance."})]}),u.jsx("hr",{}),u.jsxs("div",{className:"gridBox",children:[u.jsxs("div",{className:"gridColumnOne",children:[u.jsxs("p",{children:["Name: ",u.jsx("span",{children:"Gleiber Coelho"})]}),u.jsxs("p",{children:["Formação: ",u.jsxs("span",{children:["Cursando Análise e ",u.jsx("br",{})," Desenvolvimento De Sistemas"]})]})]}),u.jsxs("div",{className:"gridColumnTwo",children:[u.jsxs("p",{children:["Linguaguem: ",u.jsx("span",{children:"Javascript"})]}),u.jsxs("p",{children:["Especialização ",u.jsx("span",{children:"Fron-End"})]})]})]})]})]}),vj=et.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: black;
  color: #9296F0;
  font-family: 'Poppins', sans-serif;
  width: 98vw;

  .CV{
    font-size: 30px;
  }
  h1{
    font-size: 30px;
    padding-left: 20px;
  }

 a svg{
    font-size: 25px;
    color: #0EB1D2;
    display: flex;
    align-items: center;
    font-size: 70px;   
    
  }

  a{
    text-decoration: none;
    font-size: 100px;
    font-weight: 600;
    display: flex;
    align-items: center;
    color: #C2F8CB
  }
  a p{
    text-decoration: none;
    font-size: 30px;
    font-weight: 600;
    display: flex;
    align-items: center;
    color: #C2F8CB;
    padding-right: 20px
  }


  color: #9296F0;

  .toast-menu {
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: ${e=>e.isOpen?"0":"-100%"};
    left: 50%;
    transform: translate(-50%, 0%);
    background-image: linear-gradient(to right bottom, #ff0000, #c60019, #8c001c, #530616, #210003);
    opacity: 0.98;
    z-index: 5;
    transition: top 1.0s ease-in-out;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
 

  .toast-menu.active {
    transition: top 0.5s ease-in-out;
    top: 0;
  }

  .toast-menu ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
    font-family: 'Poppins', sans-serif;
    font-size: 100px;
  }

  .fade-in {
    opacity: 0;
    transition: opacity 0.7s ease-in-out;
    font-size:0;
    color: transparent;
  }

  .fade-in.show {
    opacity: 1;
    font-size:0;
    color: #E4F68D;
    
    
  }
  .fade-in.show.svg{
    position: relative;
    left: 45%;
    font-size: 40px;
    transition: opacity 0s;
    color: #E4F68D;
  }

  .left-align {
    text-align: left;
  }

  .toast-menu li {
    display: flex;
    justify-content: flex-start; /* Alinhe à esquerda */
    padding: 10px;
    margin-top: 0px;
    font-size: 100px;
    font-weight: 900;
    color: white;
    cursor: pointer;
    padding-left: 35%;    
    align-items: center;
  }

  .button{
    opacity: 0;
    transition: opacity 0.7s ease-in-out;
    font-size: 0;
  }

  button.svg{
    opacity: 0;
    transition: opacity 0.7s ease-in-out;
    font-size: 0;
  }
  .button.show {
    position: relative;
    font-size: 40px !important;
    color: #E4F68D;
    left: 3%;
    bottom: 70px;
    margin-top: 10px;
    padding: 10px;    
    cursor: pointer;   
    opacity: 1;
    transition: opacity 0s
  }
  @media only screen and (max-width: 1260px){
    .toast-menu{
      
   
    li{
      padding-left: 25%
  }}}
  @media only screen and (max-width: 768px){

    h1{
      font-size: 15px;
    }
    h2{
      font-size: 15px;
    }
    .menu-icon svg{
      width: 20px;
      display: flex;
    }
    .CV{
    width: 20px;
    }
    a p {
      font-size: 15px;
    }
    .toast-menu{
      left: 50%;
      width: 100%;
      height: 100%;
      svg{
        font-size: 20px;
    }
    li a{
      font-size: 40px;
      color: white;
    }
    li{
      padding-left: 25%
    }
    
  }
  .toast-menu.active .button.show{
    padding-left: 70px;
  }
  .fade-in.show.svg{
    padding-right: 70px;
  }
}
`;function yj(e){return J({tag:"svg",attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z",clipRule:"evenodd"}}]})(e)}const xj=()=>{const[e,t]=C.useState(!1),[n,r]=C.useState(!1),[o,i]=C.useState(!1);C.useEffect(()=>{if(e){const l=setTimeout(()=>{r(!0)},100),c=setTimeout(()=>{i(!0)},1e3);return()=>{clearTimeout(l),clearTimeout(c)}}},[e]);const s=()=>{if(!e)t(!0);else{i(!1);const l=setTimeout(()=>{r(!1)},100),c=setTimeout(()=>{t(!1)},1500);return()=>{clearTimeout(l),clearTimeout(c)}}},a=l=>{window.location.pathname===l&&window.history.replaceState(null,"",l)};return u.jsxs(vj,{children:[u.jsx("h1",{children:"Gleiber Coelho"}),u.jsx("div",{className:"menu-icon",onClick:s,children:u.jsx(By,{size:"50px"})}),e&&u.jsxs("div",{className:`toast-menu ${n&&"active"}`,children:[u.jsx($y,{onClick:s,size:"50px",className:`fade-in svg ${o&&"show"}`}),u.jsx(N,{to:"/",children:u.jsx(Vy,{className:`button svg ${o&&"show"}`,onClick:()=>a("/")})}),u.jsxs("ul",{className:`fade-in ${o&&"show"}`,children:[u.jsx("li",{children:u.jsxs(N,{to:"/projects",onClick:()=>a("/projects"),children:[u.jsx(ao,{color:"black"}),"Projetos"]})}),u.jsx("li",{children:u.jsxs(N,{to:"/about",onClick:()=>a("/about"),children:[u.jsx(ao,{color:"black"}),"Sobre"]})}),u.jsx("li",{children:u.jsxs(N,{to:"/contact",onClick:()=>a("/contact"),children:[u.jsx(ao,{color:"black"})," Contato"]})})]})]}),u.jsxs("a",{href:"/assets/Profile(7).pdf",download:!0,children:[u.jsx(yj,{className:"CV"}),u.jsx("p",{children:" Baixar CV"})]})]})},wj=()=>u.jsx(u.Fragment,{children:u.jsxs(fs,{children:[u.jsx(xj,{}),u.jsx(gj,{})]})}),Cj=et.div`
    display:flex;
    flex-direction:column;
    font-family: "Poppins", "sans-serif";
    background-image: linear-gradient(to left bottom, #6b004b, #520935, #390d23, #220b14, #000000);
    color: #00C9AB;

    --toastify-color-success: #00C9AB;
    --toastify-icon-color-success:#00C9AB;
    --toastify-toast-background: #6b004b;
    
    h1{
        
        align-self: center;
        font-size: 45px;
        color: #FFE4FC;
        margin-bottom: 20px;
    }

    .MapNFormBox{
        display:flex;
        flex-direction:row;
        justify-content: space-around;
}
    .FormBox{
        display:flex;
        flex-direction:column;        
        width: 40%;
        

        h2{
        font-size: 30px;
        font-weight: 500;
        margin-left: 30px;
        }

    form{
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        padding-left: 20px;      
    input{
        font-family: "Poppins", "sans-serif";
        display: flex;
        flex-direction: row;
        align-items: center;
        font-size: 30px;
        height: 35px;
        margin: 5px;
        width: 520px;    
        border: none;
        outline: none;  
        border-radius: 5px;
        color: #00C9AB;
        background-color: #54424B;
        padding-left: 20px;
        padding-right: 20px;
    }
    textarea{
        font-family: "Poppins", "sans-serif";
        width: 520px;
        margin: 5px;
        height: 300px;
        font-size: 30px;
        border: none;
        outline: none;
        resize: none;
        overflow-y: auto;
        border-radius: 5px;
        color: #00C9AB;
        background-color: #54424B;
        padding-left: 20px;
        padding-right: 20px;
    }

    button{
        font-family: "Poppins", "sans-serif";
        font-size:30px;
        margin: 5px;
        width: 560px !important;
        border-radius: 5px;
        cursor: pointer;
        background-color: #00C9AB;
        color: #54424B;
    }
    ::placeholder{
        
        font-family: "Poppins", "sans-serif";
        color: #A2407C;
      }
    }
}
    .MapBox{
        display:flex;
        flex-direction:column;
        p{
            font-size: 30px;
        }

        
}
    .ContactWayBox{
        display: flex;
        flex-direction: row !important;
        justify-content: space-around;
        margin-top: 30px;
        span{
           color: #FFE4FC;
        }
        svg{
            color: #A2407C;
        }
        a{
            text-decoration: none;
        }

    .SubContactOne{
        display: flex;
        flex-direction: column;
        font-size: 25px;
        justify-content: space-evenly;

        .zapzap{
            color:  #37c638;
            font-size: 30px;
            padding: 0 15px 0 15px;
        }
    }
    .SubContactTwo{
        display: flex;
        flex-direction: column;
        font-size: 25px;
    }
}
@media only screen and (max-width: 1310px){
    .MapNFormBox{
        flex-direction: column;
        align-items: center;
    }
    .FormBox{
        width: 100%;
        align-items: center;
        }
        .ContactWayBox{
            padding-left: 20px;
            padding-right: 20px;
        }
 }


@media only screen and (max-width: 768px){

    .MapNFormBox{
        flex-direction: column;
    }

    .FormBox{
        width: 85%;
        h2{
           
            align-self: center;
        }
        form{

            input{
                width: 290px;
            }
            textarea{
                width: 290px;
            }
            button{
                width: 330px !important;
            }
        }
    }
        .MapBox{
            
            p{
            width: 300px !important;
            font-size: 25px;
            white-space: wrap !important;
            align-self: center;
            }
            span{
                width: 300px !important;
            font-size: 25px;
                white-space: wrap !important; 
                align-self: center;
            }          
        }
        .ContactWayBox{
            display: flex;
            flex-direction: column;
            flex-wrap: wrap; 
           padding-left: 20px;
           padding-right: 20px;
            
            p{
                font-size: 20px;
            }
            .SubContactOne{
            flex-wrap: wrap;  

            }
            
        }
}

`;function Sj(e){return J({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M260.062 32C138.605 32 40.134 129.701 40.134 250.232c0 41.23 11.532 79.79 31.559 112.687L32 480l121.764-38.682c31.508 17.285 67.745 27.146 106.298 27.146C381.535 468.464 480 370.749 480 250.232 480 129.701 381.535 32 260.062 32zm109.362 301.11c-5.174 12.827-28.574 24.533-38.899 25.072-10.314.547-10.608 7.994-66.84-16.434-56.225-24.434-90.052-83.844-92.719-87.67-2.669-3.812-21.78-31.047-20.749-58.455 1.038-27.413 16.047-40.346 21.404-45.725 5.351-5.387 11.486-6.352 15.232-6.413 4.428-.072 7.296-.132 10.573-.011 3.274.124 8.192-.685 12.45 10.639 4.256 11.323 14.443 39.153 15.746 41.989 1.302 2.839 2.108 6.126.102 9.771-2.012 3.653-3.042 5.935-5.961 9.083-2.935 3.148-6.174 7.042-8.792 9.449-2.92 2.665-5.97 5.572-2.9 11.269 3.068 5.693 13.653 24.356 29.779 39.736 20.725 19.771 38.598 26.329 44.098 29.317 5.515 3.004 8.806 2.67 12.226-.929 3.404-3.599 14.639-15.746 18.596-21.169 3.955-5.438 7.661-4.373 12.742-2.329 5.078 2.052 32.157 16.556 37.673 19.551 5.51 2.989 9.193 4.529 10.51 6.9 1.317 2.38.901 13.531-4.271 26.359z"}}]})(e)}/*! clipboard-copy. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */var jj=Ej;function yp(){return new DOMException("The request is not allowed","NotAllowedError")}async function Pj(e){if(!navigator.clipboard)throw yp();return navigator.clipboard.writeText(e)}async function kj(e){const t=document.createElement("span");t.textContent=e,t.style.whiteSpace="pre",t.style.webkitUserSelect="auto",t.style.userSelect="all",document.body.appendChild(t);const n=window.getSelection(),r=window.document.createRange();n.removeAllRanges(),r.selectNode(t),n.addRange(r);let o=!1;try{o=window.document.execCommand("copy")}finally{n.removeAllRanges(),window.document.body.removeChild(t)}if(!o)throw yp()}async function Ej(e){try{await Pj(e)}catch(t){try{await kj(e)}catch(n){throw n||t||yp()}}}const $s=B0(jj);function Gy(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=Gy(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function An(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=Gy(e))&&(r&&(r+=" "),r+=t);return r}const xi=e=>typeof e=="number"&&!isNaN(e),Pr=e=>typeof e=="string",Ye=e=>typeof e=="function",ha=e=>Pr(e)||Ye(e)?e:null,Ku=e=>C.isValidElement(e)||Pr(e)||Ye(e)||xi(e);function Tj(e,t,n){n===void 0&&(n=300);const{scrollHeight:r,style:o}=e;requestAnimationFrame(()=>{o.minHeight="initial",o.height=r+"px",o.transition=`all ${n}ms`,requestAnimationFrame(()=>{o.height="0",o.padding="0",o.margin="0",setTimeout(t,n)})})}function Kl(e){let{enter:t,exit:n,appendPosition:r=!1,collapse:o=!0,collapseDuration:i=300}=e;return function(s){let{children:a,position:l,preventExitTransition:c,done:d,nodeRef:f,isIn:p}=s;const m=r?`${t}--${l}`:t,y=r?`${n}--${l}`:n,x=C.useRef(0);return C.useLayoutEffect(()=>{const S=f.current,v=m.split(" "),h=g=>{g.target===f.current&&(S.dispatchEvent(new Event("d")),S.removeEventListener("animationend",h),S.removeEventListener("animationcancel",h),x.current===0&&g.type!=="animationcancel"&&S.classList.remove(...v))};S.classList.add(...v),S.addEventListener("animationend",h),S.addEventListener("animationcancel",h)},[]),C.useEffect(()=>{const S=f.current,v=()=>{S.removeEventListener("animationend",v),o?Tj(S,d,i):d()};p||(c?v():(x.current=1,S.className+=` ${y}`,S.addEventListener("animationend",v)))},[p]),F.createElement(F.Fragment,null,a)}}function O0(e,t){return e!=null?{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:t}:{}}const ht={list:new Map,emitQueue:new Map,on(e,t){return this.list.has(e)||this.list.set(e,[]),this.list.get(e).push(t),this},off(e,t){if(t){const n=this.list.get(e).filter(r=>r!==t);return this.list.set(e,n),this}return this.list.delete(e),this},cancelEmit(e){const t=this.emitQueue.get(e);return t&&(t.forEach(clearTimeout),this.emitQueue.delete(e)),this},emit(e){this.list.has(e)&&this.list.get(e).forEach(t=>{const n=setTimeout(()=>{t(...[].slice.call(arguments,1))},0);this.emitQueue.has(e)||this.emitQueue.set(e,[]),this.emitQueue.get(e).push(n)})}},Gs=e=>{let{theme:t,type:n,...r}=e;return F.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:t==="colored"?"currentColor":`var(--toastify-icon-color-${n})`,...r})},Yu={info:function(e){return F.createElement(Gs,{...e},F.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return F.createElement(Gs,{...e},F.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return F.createElement(Gs,{...e},F.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return F.createElement(Gs,{...e},F.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return F.createElement("div",{className:"Toastify__spinner"})}};function bj(e){const[,t]=C.useReducer(m=>m+1,0),[n,r]=C.useState([]),o=C.useRef(null),i=C.useRef(new Map).current,s=m=>n.indexOf(m)!==-1,a=C.useRef({toastKey:1,displayedToast:0,count:0,queue:[],props:e,containerId:null,isToastActive:s,getToast:m=>i.get(m)}).current;function l(m){let{containerId:y}=m;const{limit:x}=a.props;!x||y&&a.containerId!==y||(a.count-=a.queue.length,a.queue=[])}function c(m){r(y=>m==null?[]:y.filter(x=>x!==m))}function d(){const{toastContent:m,toastProps:y,staleId:x}=a.queue.shift();p(m,y,x)}function f(m,y){let{delay:x,staleId:S,...v}=y;if(!Ku(m)||function(G){return!o.current||a.props.enableMultiContainer&&G.containerId!==a.props.containerId||i.has(G.toastId)&&G.updateId==null}(v))return;const{toastId:h,updateId:g,data:w}=v,{props:j}=a,P=()=>c(h),k=g==null;k&&a.count++;const E={...j,style:j.toastStyle,key:a.toastKey++,...Object.fromEntries(Object.entries(v).filter(G=>{let[U,B]=G;return B!=null})),toastId:h,updateId:g,data:w,closeToast:P,isIn:!1,className:ha(v.className||j.toastClassName),bodyClassName:ha(v.bodyClassName||j.bodyClassName),progressClassName:ha(v.progressClassName||j.progressClassName),autoClose:!v.isLoading&&(R=v.autoClose,_=j.autoClose,R===!1||xi(R)&&R>0?R:_),deleteToast(){const G=O0(i.get(h),"removed");i.delete(h),ht.emit(4,G);const U=a.queue.length;if(a.count=h==null?a.count-a.displayedToast:a.count-1,a.count<0&&(a.count=0),U>0){const B=h==null?a.props.limit:1;if(U===1||B===1)a.displayedToast++,d();else{const q=B>U?U:B;a.displayedToast=q;for(let ee=0;ee<q;ee++)d()}}else t()}};var R,_;E.iconOut=function(G){let{theme:U,type:B,isLoading:q,icon:ee}=G,se=null;const A={theme:U,type:B};return ee===!1||(Ye(ee)?se=ee(A):C.isValidElement(ee)?se=C.cloneElement(ee,A):Pr(ee)||xi(ee)?se=ee:q?se=Yu.spinner():(z=>z in Yu)(B)&&(se=Yu[B](A))),se}(E),Ye(v.onOpen)&&(E.onOpen=v.onOpen),Ye(v.onClose)&&(E.onClose=v.onClose),E.closeButton=j.closeButton,v.closeButton===!1||Ku(v.closeButton)?E.closeButton=v.closeButton:v.closeButton===!0&&(E.closeButton=!Ku(j.closeButton)||j.closeButton);let I=m;C.isValidElement(m)&&!Pr(m.type)?I=C.cloneElement(m,{closeToast:P,toastProps:E,data:w}):Ye(m)&&(I=m({closeToast:P,toastProps:E,data:w})),j.limit&&j.limit>0&&a.count>j.limit&&k?a.queue.push({toastContent:I,toastProps:E,staleId:S}):xi(x)?setTimeout(()=>{p(I,E,S)},x):p(I,E,S)}function p(m,y,x){const{toastId:S}=y;x&&i.delete(x);const v={content:m,props:y};i.set(S,v),r(h=>[...h,S].filter(g=>g!==x)),ht.emit(4,O0(v,v.props.updateId==null?"added":"updated"))}return C.useEffect(()=>(a.containerId=e.containerId,ht.cancelEmit(3).on(0,f).on(1,m=>o.current&&c(m)).on(5,l).emit(2,a),()=>{i.clear(),ht.emit(3,a)}),[]),C.useEffect(()=>{a.props=e,a.isToastActive=s,a.displayedToast=n.length}),{getToastToRender:function(m){const y=new Map,x=Array.from(i.values());return e.newestOnTop&&x.reverse(),x.forEach(S=>{const{position:v}=S.props;y.has(v)||y.set(v,[]),y.get(v).push(S)}),Array.from(y,S=>m(S[0],S[1]))},containerRef:o,isToastActive:s}}function N0(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientX:e.clientX}function F0(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientY:e.clientY}function Rj(e){const[t,n]=C.useState(!1),[r,o]=C.useState(!1),i=C.useRef(null),s=C.useRef({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,a=C.useRef(e),{autoClose:l,pauseOnHover:c,closeToast:d,onClick:f,closeOnClick:p}=e;function m(w){if(e.draggable){w.nativeEvent.type==="touchstart"&&w.nativeEvent.preventDefault(),s.didMove=!1,document.addEventListener("mousemove",v),document.addEventListener("mouseup",h),document.addEventListener("touchmove",v),document.addEventListener("touchend",h);const j=i.current;s.canCloseOnClick=!0,s.canDrag=!0,s.boundingRect=j.getBoundingClientRect(),j.style.transition="",s.x=N0(w.nativeEvent),s.y=F0(w.nativeEvent),e.draggableDirection==="x"?(s.start=s.x,s.removalDistance=j.offsetWidth*(e.draggablePercent/100)):(s.start=s.y,s.removalDistance=j.offsetHeight*(e.draggablePercent===80?1.5*e.draggablePercent:e.draggablePercent/100))}}function y(w){if(s.boundingRect){const{top:j,bottom:P,left:k,right:E}=s.boundingRect;w.nativeEvent.type!=="touchend"&&e.pauseOnHover&&s.x>=k&&s.x<=E&&s.y>=j&&s.y<=P?S():x()}}function x(){n(!0)}function S(){n(!1)}function v(w){const j=i.current;s.canDrag&&j&&(s.didMove=!0,t&&S(),s.x=N0(w),s.y=F0(w),s.delta=e.draggableDirection==="x"?s.x-s.start:s.y-s.start,s.start!==s.x&&(s.canCloseOnClick=!1),j.style.transform=`translate${e.draggableDirection}(${s.delta}px)`,j.style.opacity=""+(1-Math.abs(s.delta/s.removalDistance)))}function h(){document.removeEventListener("mousemove",v),document.removeEventListener("mouseup",h),document.removeEventListener("touchmove",v),document.removeEventListener("touchend",h);const w=i.current;if(s.canDrag&&s.didMove&&w){if(s.canDrag=!1,Math.abs(s.delta)>s.removalDistance)return o(!0),void e.closeToast();w.style.transition="transform 0.2s, opacity 0.2s",w.style.transform=`translate${e.draggableDirection}(0)`,w.style.opacity="1"}}C.useEffect(()=>{a.current=e}),C.useEffect(()=>(i.current&&i.current.addEventListener("d",x,{once:!0}),Ye(e.onOpen)&&e.onOpen(C.isValidElement(e.children)&&e.children.props),()=>{const w=a.current;Ye(w.onClose)&&w.onClose(C.isValidElement(w.children)&&w.children.props)}),[]),C.useEffect(()=>(e.pauseOnFocusLoss&&(document.hasFocus()||S(),window.addEventListener("focus",x),window.addEventListener("blur",S)),()=>{e.pauseOnFocusLoss&&(window.removeEventListener("focus",x),window.removeEventListener("blur",S))}),[e.pauseOnFocusLoss]);const g={onMouseDown:m,onTouchStart:m,onMouseUp:y,onTouchEnd:y};return l&&c&&(g.onMouseEnter=S,g.onMouseLeave=x),p&&(g.onClick=w=>{f&&f(w),s.canCloseOnClick&&d()}),{playToast:x,pauseToast:S,isRunning:t,preventExitTransition:r,toastRef:i,eventHandlers:g}}function Uy(e){let{closeToast:t,theme:n,ariaLabel:r="close"}=e;return F.createElement("button",{className:`Toastify__close-button Toastify__close-button--${n}`,type:"button",onClick:o=>{o.stopPropagation(),t(o)},"aria-label":r},F.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},F.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function Aj(e){let{delay:t,isRunning:n,closeToast:r,type:o="default",hide:i,className:s,style:a,controlledProgress:l,progress:c,rtl:d,isIn:f,theme:p}=e;const m=i||l&&c===0,y={...a,animationDuration:`${t}ms`,animationPlayState:n?"running":"paused",opacity:m?0:1};l&&(y.transform=`scaleX(${c})`);const x=An("Toastify__progress-bar",l?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${p}`,`Toastify__progress-bar--${o}`,{"Toastify__progress-bar--rtl":d}),S=Ye(s)?s({rtl:d,type:o,defaultClassName:x}):An(x,s);return F.createElement("div",{role:"progressbar","aria-hidden":m?"true":"false","aria-label":"notification timer",className:S,style:y,[l&&c>=1?"onTransitionEnd":"onAnimationEnd"]:l&&c<1?null:()=>{f&&r()}})}const _j=e=>{const{isRunning:t,preventExitTransition:n,toastRef:r,eventHandlers:o}=Rj(e),{closeButton:i,children:s,autoClose:a,onClick:l,type:c,hideProgressBar:d,closeToast:f,transition:p,position:m,className:y,style:x,bodyClassName:S,bodyStyle:v,progressClassName:h,progressStyle:g,updateId:w,role:j,progress:P,rtl:k,toastId:E,deleteToast:R,isIn:_,isLoading:I,iconOut:G,closeOnClick:U,theme:B}=e,q=An("Toastify__toast",`Toastify__toast-theme--${B}`,`Toastify__toast--${c}`,{"Toastify__toast--rtl":k},{"Toastify__toast--close-on-click":U}),ee=Ye(y)?y({rtl:k,position:m,type:c,defaultClassName:q}):An(q,y),se=!!P||!a,A={closeToast:f,type:c,theme:B};let z=null;return i===!1||(z=Ye(i)?i(A):C.isValidElement(i)?C.cloneElement(i,A):Uy(A)),F.createElement(p,{isIn:_,done:R,position:m,preventExitTransition:n,nodeRef:r},F.createElement("div",{id:E,onClick:l,className:ee,...o,style:x,ref:r},F.createElement("div",{..._&&{role:j},className:Ye(S)?S({type:c}):An("Toastify__toast-body",S),style:v},G!=null&&F.createElement("div",{className:An("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!I})},G),F.createElement("div",null,s)),z,F.createElement(Aj,{...w&&!se?{key:`pb-${w}`}:{},rtl:k,theme:B,delay:a,isRunning:t,isIn:_,closeToast:f,hide:d,type:c,style:g,className:h,controlledProgress:se,progress:P||0})))},Yl=function(e,t){return t===void 0&&(t=!1),{enter:`Toastify--animate Toastify__${e}-enter`,exit:`Toastify--animate Toastify__${e}-exit`,appendPosition:t}},Lj=Kl(Yl("bounce",!0));Kl(Yl("slide",!0));Kl(Yl("zoom"));Kl(Yl("flip"));const Td=C.forwardRef((e,t)=>{const{getToastToRender:n,containerRef:r,isToastActive:o}=bj(e),{className:i,style:s,rtl:a,containerId:l}=e;function c(d){const f=An("Toastify__toast-container",`Toastify__toast-container--${d}`,{"Toastify__toast-container--rtl":a});return Ye(i)?i({position:d,rtl:a,defaultClassName:f}):An(f,ha(i))}return C.useEffect(()=>{t&&(t.current=r.current)},[]),F.createElement("div",{ref:r,className:"Toastify",id:l},n((d,f)=>{const p=f.length?{...s}:{...s,pointerEvents:"none"};return F.createElement("div",{className:c(d),style:p,key:`container-${d}`},f.map((m,y)=>{let{content:x,props:S}=m;return F.createElement(_j,{...S,isIn:o(S.toastId),style:{...S.style,"--nth":y+1,"--len":f.length},key:`toast-${S.key}`},x)}))}))});Td.displayName="ToastContainer",Td.defaultProps={position:"top-right",transition:Lj,autoClose:5e3,closeButton:Uy,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};let Xu,ar=new Map,Jo=[],zj=1;function Hy(){return""+zj++}function Mj(e){return e&&(Pr(e.toastId)||xi(e.toastId))?e.toastId:Hy()}function wi(e,t){return ar.size>0?ht.emit(0,e,t):Jo.push({content:e,options:t}),t.toastId}function ll(e,t){return{...t,type:t&&t.type||e,toastId:Mj(t)}}function Us(e){return(t,n)=>wi(t,ll(e,n))}function Y(e,t){return wi(e,ll("default",t))}Y.loading=(e,t)=>wi(e,ll("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...t})),Y.promise=function(e,t,n){let r,{pending:o,error:i,success:s}=t;o&&(r=Pr(o)?Y.loading(o,n):Y.loading(o.render,{...n,...o}));const a={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},l=(d,f,p)=>{if(f==null)return void Y.dismiss(r);const m={type:d,...a,...n,data:p},y=Pr(f)?{render:f}:f;return r?Y.update(r,{...m,...y}):Y(y.render,{...m,...y}),p},c=Ye(e)?e():e;return c.then(d=>l("success",s,d)).catch(d=>l("error",i,d)),c},Y.success=Us("success"),Y.info=Us("info"),Y.error=Us("error"),Y.warning=Us("warning"),Y.warn=Y.warning,Y.dark=(e,t)=>wi(e,ll("default",{theme:"dark",...t})),Y.dismiss=e=>{ar.size>0?ht.emit(1,e):Jo=Jo.filter(t=>e!=null&&t.options.toastId!==e)},Y.clearWaitingQueue=function(e){return e===void 0&&(e={}),ht.emit(5,e)},Y.isActive=e=>{let t=!1;return ar.forEach(n=>{n.isToastActive&&n.isToastActive(e)&&(t=!0)}),t},Y.update=function(e,t){t===void 0&&(t={}),setTimeout(()=>{const n=function(r,o){let{containerId:i}=o;const s=ar.get(i||Xu);return s&&s.getToast(r)}(e,t);if(n){const{props:r,content:o}=n,i={delay:100,...r,...t,toastId:t.toastId||e,updateId:Hy()};i.toastId!==e&&(i.staleId=e);const s=i.render||o;delete i.render,wi(s,i)}},0)},Y.done=e=>{Y.update(e,{progress:1})},Y.onChange=e=>(ht.on(4,e),()=>{ht.off(4,e)}),Y.POSITION={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},Y.TYPE={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},ht.on(2,e=>{Xu=e.containerId||e,ar.set(Xu,e),Jo.forEach(t=>{ht.emit(0,t.content,t.options)}),Jo=[]}).on(3,e=>{ar.delete(e.containerId||e),ar.size===0&&ht.off(0).off(1).off(5)});const Ij=()=>{const[e,t]=C.useState(""),[n,r]=C.useState(""),[o,i]=C.useState(""),s=async f=>{f.preventDefault();const p=new FormData;p.append("name",e),p.append("email",n),p.append("message",o);try{(await fetch("https://formspree.io/f/mgegwdwa",{method:"POST",body:p,headers:{Accept:"application/json"}})).ok?(Y.success("mensagem enviada!"),t(""),r(""),i("")):Y.error("Erro ao enviar!")}catch(m){console.error("Ocorreu um erro:",m),Y.error("Erro ao enviar!")}},a=()=>{event==null||event.preventDefault(),$s("gleiberfelipe@hotmail.com"),Y.success("Email copiado!")},l=()=>{event==null||event.preventDefault(),$s("31991326989"),Y.success("Whatsapp copiado!")},c=()=>{event==null||event.preventDefault(),$s("https://www.linkedin.com/in/gleiber-coelho-40ba6927/"),Y.success("Link do LinkedIn copiado!")},d=()=>{event==null||event.preventDefault(),$s("https://github.com/gleibercoelho"),Y.success("Link do GitHub copiado!")};return u.jsxs(Cj,{children:[u.jsx(De.h1,{initial:{opacity:0,x:-100},animate:{opacity:1,x:0},transition:{duration:1,delay:.75},children:"Contato"}),u.jsxs("div",{className:"MapNFormBox",children:[u.jsxs(De.div,{initial:{opacity:0,x:-100},animate:{opacity:1,x:0},transition:{duration:1,delay:.75},className:"FormBox",children:[u.jsx("h2",{children:"Mande uma mensagem:"}),u.jsxs("form",{onSubmit:s,children:[u.jsx("input",{id:"name",type:"text",value:e,onChange:f=>t(f.target.value),placeholder:"Nome",required:!0}),u.jsx("input",{id:"email",type:"email",value:n,onChange:f=>r(f.target.value),placeholder:"Email",required:!0}),u.jsx("textarea",{id:"message",value:o,onChange:f=>i(f.target.value),placeholder:"Mensagem",required:!0}),u.jsx("button",{type:"submit",children:"Enviar"})]})]}),u.jsxs(De.div,{initial:{opacity:0,x:100},animate:{opacity:1,x:0},transition:{duration:1,delay:.75},className:"MapBox",children:[u.jsxs("p",{children:["Onde eu moro? ",u.jsx("span",{children:" Santa Luzia, MG."})]}),u.jsx("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d240300.7113113177!2d-44.16931426628847!3d-19.76795545981135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa686b107f0f8eb%3A0xff4527c57ed28253!2sSanta%20Luzia%2C%20MG!5e0!3m2!1spt-BR!2sbr!4v1703372366065!5m2!1spt-BR!2sbr",width:"600",height:"450",style:{border:"0",maxWidth:"100%"},loading:"eager",referrerPolicy:"no-referrer-when-downgrade"})]})]}),u.jsx(so,{children:u.jsxs("div",{className:"ContactWayBox",children:[u.jsxs("div",{className:"SubContactOne",children:[u.jsxs("p",{children:["Me mande um email ",u.jsx("a",{href:"mailto:gleiberfelipe@hotmail.com",target:"_blank",children:u.jsx("span",{children:"gleiberfelipe@hotmail.com"})})," ",u.jsx("a",{className:"copy",href:"#",onClick:a,children:u.jsx(Bs,{})})]}),u.jsxs("p",{children:["Me mande um whatsapp ",u.jsx("a",{href:"https://wa.me/31991326989?text=Olá,%20Gleiber.%20Acabei%20de%20ver%20seu%20portfólio.",target:"_blank",children:u.jsx("span",{children:u.jsx(Sj,{className:"zapzap"})})})," ",u.jsx("a",{className:"copy",href:"#",onClick:l,children:u.jsx(Bs,{})})]})]}),u.jsxs("div",{className:"SubContactTwo",children:[u.jsxs("p",{children:["Se conecte comigo no ",u.jsx("a",{href:"https://www.linkedin.com/in/gleiber-coelho-40ba6927/",target:"_blank",children:u.jsx("span",{children:"LinkedIn"})})," ",u.jsx("a",{className:"copy",href:"#",onClick:c,children:u.jsx(Bs,{})})]}),u.jsxs("p",{children:["Conheça e/ou me siga no ",u.jsx("a",{href:"https://github.com/gleibercoelho",target:"_blank",children:u.jsx("span",{children:"GitHub"})})," ",u.jsx("a",{className:"copy",href:"#",onClick:d,children:u.jsx(Bs,{})})]})]})]})}),u.jsx(Td,{})]})},Dj=()=>u.jsx(u.Fragment,{children:u.jsxs(fs,{children:[u.jsx(Zi,{}),u.jsx(Ij,{})]})}),Oj=et.div`

  display: grid;
  background-image: linear-gradient(to right, #01674a, #01664a, #016549, #016549, #016448);
  grid-template-columns: repeat(auto-fit, minmax(100px, 3fr));
  grid-template-rows: repeat(13, 100px); /* Defina as alturas desejadas aqui */
  gap: 10px;
  background-color: black;

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  max-width: 1400px !important;
  min-width: 1236px !important;
  justify-content: center;
  justify-self: center;
  width: 100%;
  @media only screen and (max-width: 1236px){
    grid-template-columns: repeat(auto-fit, minmax(100px, 6fr));
    grid-template-rows: repeat(7, 100px);
    max-width: 100% !important;
    min-width: 100% !important;
  }
 
  @media only screen and (max-width: 768px){
    grid-template-columns: repeat(auto-fit, minmax(100px, 3fr));
    grid-template-rows: repeat(28, 100px);
    max-width: 100% !important;
  min-width: 100% !important;
  }
`,He=et.div`
  background-color: #3498db;
  color: #fff;
  text-align: center;
  padding: 0px;
  border-radius: 5px;
  overflow: hidden;
 

.CafeHero{
  transform: scale(1.0);
  object-fit: cover; 
  width: 100%;
  height: 100%;
}
.pokedexHero{
  transform: scale(1.6);
  object-fit: contain; 
  width: 100%;
  height: 120%;
  position: relative;
  top: 70px;
  left: 100px;
  }
.ommaHero{
  transform: scale(1.0);
  object-fit: cover; 
  width: 100%;
  height: 100%;
}
.gadgetsHero{
  transform: scale(1.0);
  object-fit: cover;
  width: 100%;
  height: 100%;
}
.ggwpHero{
  transform: scale(1.0);
  object-fit: contain;
  width: 100%;
  height: 100%;
}
.pompomHero{
  transform: scale(1.0);
  object-fit: cover;
  width: 100%;
  height: 100%;
  background-color: #ffc0cb;
}
.soundgardenHero{
  transform: scale(1.0);
  object-fit: cover;
  width: 100%;
  height: 100%;
}
.netflixHero{
    transform: scale(1.0);
  object-fit: cover;
  width: 100%;
  height: 100%;
}
.dindinHero{
    transform: scale(1.0);
  object-fit: cover;
  width: 100%;
  height: 100%;
}
.mechHero{
    transform: scale(1.0);
  object-fit: cover;
  width: 100%;
  height: 100%;
}
.codeleapHero{
    transform: scale(1.1);
  object-fit: cover;
  width: 100%;
  height: 100%;
}
.APIFeriadoHero{
    transform: scale(1.0);
  object-fit: cover;
  width: 95%;
  height: 100%;
}
.APICEPHero{
    transform: scale(1.0);
  object-fit: cover;
  width: 100%;
  height: 100%;
}
.APICEPHero{
    transform: scale(1.0);
  object-fit: cover;
  width: 100%;
  height: 100%;
  position: relative;

}

p{
  position: relative;
  bottom: 70px;
  font-family: "Poppins", "sans-serif";
  font-size: 50px;
  background-color: rgba(220, 000, 000, 0.7);
  opacity: 0;
  transition: opacity 0.8s ease-in-out;
  font-weight: 600;
}
.pokedex{
  position: relative;
  bottom: 110px;
  transition: opacity 0.8s ease-in-out;
}
&:hover{
  p{
    opacity: 1;
    transition: opacity 0.8s ease-in-out;
  }
}
@media only screen and (max-width: 1236px){
  grid-column: span 3 !important;
  grid-row: span 2 !important;
  
  .pokedexHero{
    top: 0px !important;
  }
  
}
@media only screen and (max-width: 768px){

  grid-column: span 3 !important;
  grid-row: span 2 !important;
  grid-row-gap: wrap;
  margin: 0 20px;

  .pokedexHero{
    top: 0px !important;
  }
}
`,Nj=et.div`
display: flex;
flex-direction: column;
justify-content: center;
min-width: 1236px !important;
background-image: linear-gradient(to right, #01674a, #01664a, #016549, #016549, #016448);
a{
  text-decoration: none;
  font-family: "Poppins", sans-serif;
  color: white;
}
.box{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: black;
  background-image: linear-gradient(to right, #01674a, #01664a, #016549, #016549, #016448);
}
h1{
  font-family: "Poppins", sans-serif;
  font-size: 70px;
  align-self: center;
  justify-self: center;
  color: #00B1FF;
}

padding-bottom: 20px;
@media only screen and (max-width: 1236px){
  min-width: 100% !important;

 
}
@media only screen and (max-width: 768px){
  min-width: 100% !important;
  
}
`,bd="/portfolio/assets/FireShot Capture 030 - Café 3 Corações - -Q97voV2u.png",Rd="/portfolio/assets/FireShot Capture 028 - PokeDex - -p75Pk0rL.png",Ad="/portfolio/assets/FireShot Capture 038 - Omma - Receitas legais - -gQE5YVQO.png",Wy="/portfolio/assets/home-5trWkx6v.png",Fj="/portfolio/assets/logo-POccvoNR.png",Vj="/portfolio/assets/Logotipo 500x500  px. (2)-DBfD1uzb.png",Qy="/portfolio/assets/pexels-wendy-wei-2183361-wu9tiy-O.jpg",Bj="/portfolio/assets/HOUSE OF CARDS-etJ9YoGB.jpg",qy="/portfolio/assets/dindin-vOXPKhyA.png",Ky="/portfolio/assets/login-um8ThpwP.jpeg",Yy="/portfolio/assets/codeleap-pDrfXJhU.png",ma="/portfolio/assets/FireShot Capture 064 - Consulta feriados - 127.0.0.1-oPgmtjOQ.png",ga="/portfolio/assets/FireShot Capture 065 - Consulta API-CEP - 127.0.0.1-sn-mvJiG.png",va="/portfolio/assets/0_MNVJq_8e0SJoqZb5-uSyNBVVC.jpg",$j=()=>u.jsxs(Nj,{children:[u.jsx(De.h1,{initial:{opacity:0,x:-100},animate:{opacity:1,x:0},transition:{duration:1,delay:.75},children:"Projetos"}),u.jsx(so,{children:u.jsx("div",{className:"box",children:u.jsxs(Oj,{children:[u.jsx(He,{style:{gridColumn:"span 6",gridRow:"span 3"},children:u.jsxs(N,{to:"/projects/8",children:[u.jsx("img",{className:"CafeHero",src:bd,alt:""}),u.jsx("p",{children:"Cafe 3 Corações"})]})}),u.jsx(He,{style:{gridColumn:"span 5",gridRow:"span 2"},children:u.jsxs(N,{to:"/projects/7",children:[u.jsx("img",{className:"pokedexHero",src:Rd,alt:""}),u.jsx("p",{className:"pokedex",children:"Pokedex"})]})}),u.jsx(He,{style:{gridColumn:"span 5",gridRow:"span 3"},children:u.jsxs(N,{to:"/projects/9",children:[u.jsx("img",{className:"ommaHero",src:Ad,alt:""}),u.jsx("p",{children:"Omma"})]})}),u.jsx(He,{style:{gridColumn:"span 3",gridRow:"span 3"},children:u.jsxs(N,{to:"/projects/0",children:[u.jsx("img",{className:"gadgetsHero",src:Wy,alt:""}),u.jsx("p",{children:"Gadgets"})]})}),u.jsx(He,{style:{gridColumn:"span 3",gridRow:"span 5"},children:u.jsxs(N,{to:"/projects/1",children:[u.jsx("img",{className:"ggwpHero",src:Fj,alt:""}),u.jsx("p",{children:"GG-WP"})]})}),u.jsx(He,{style:{gridColumn:"span 2",gridRow:"span 2"},children:u.jsxs(N,{to:"/projects/5",children:[u.jsx("img",{className:"pompomHero",src:Vj,alt:""}),u.jsx("p",{children:"Pompom"})]})}),u.jsx(He,{style:{gridColumn:"span 3",gridRow:"span 2"},children:u.jsxs(N,{to:"/projects/12",children:[u.jsx("img",{className:"soundgardenHero",src:ga,alt:""}),u.jsx("p",{children:"API CEP"})]})}),u.jsx(He,{style:{gridColumn:"span 3",gridRow:"span 4"},children:u.jsxs(N,{to:"/projects/2",children:[u.jsx("img",{className:"APICEPHero",src:Qy,alt:""}),u.jsx("p",{children:"Sound-G"})]})}),u.jsx(He,{style:{gridColumn:"span 5",gridRow:"span 3"},children:u.jsxs(N,{to:"/projects/4",children:[u.jsx("img",{className:"dindinHero",src:qy,alt:""}),u.jsx("p",{children:"Dindin"})]})}),u.jsx(He,{style:{gridColumn:"span 3",gridRow:"span 2"},children:u.jsxs(N,{to:"/projects/10",children:[u.jsx("img",{className:"mechHero",src:Ky,alt:""}),u.jsx("p",{children:"Mech"})]})}),u.jsx(He,{style:{gridColumn:"span 5",gridRow:"span 3"},children:u.jsxs(N,{to:"/projects/6",children:[u.jsx("img",{className:"netflixHero",src:Bj,alt:""}),u.jsx("p",{children:"Netflix Clone"})]})}),u.jsx(He,{style:{gridColumn:"span 2",gridRow:"span 3"},children:u.jsxs(N,{to:"/projects/13",children:[u.jsx("img",{className:"APIFeriadoHero",src:ma,alt:""}),u.jsx("p",{children:"API"})]})}),u.jsx(He,{style:{gridColumn:"span 4",gridRow:"span 2"},children:u.jsxs(N,{to:"/projects/3",children:[u.jsx("img",{className:"codeleapHero",src:Yy,alt:""}),u.jsx("p",{children:"Codeleap"})]})}),u.jsx(He,{style:{gridColumn:"span 4",gridRow:"span 1"},children:u.jsxs(N,{to:"/projects/11",children:[u.jsx("img",{className:"APICEPHero",src:va,alt:""}),u.jsx("p",{children:"La Vie"})]})})]})})})]}),Gj=()=>u.jsx(u.Fragment,{children:u.jsxs(fs,{children:[u.jsx(Zi,{}),u.jsx($j,{})]})}),Uj=et.div`
display: flex;
flex-direction: column;
background-image: linear-gradient(to left, #aa076b, #980369, #860267, #730363, #61045f);
color: #C2FCF4;
font-family: 'Poppins', sans-serif;


    .heroPhoto{
        height: 90vh;
        width: 100%;
        overflow: hidden;
        position: relative;
        /* img{
            height: 90vh;
            width: 98vw;
            object-fit: cover;
        }   */      
    
        transform-origin: bottom;
        top: 0;
    }

    .infoDiv{
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: space-between;
        padding-left: 80px;
        margin-top: 30px;
        height: 100%;
        h1{
            font-size: 50px;
            color: #DB98B5;
        }
        h2{
            font-size: 30px;
            text-align: justify;
        }

        p{
            font-size: 20px;
        }
        div{
            display: flex;
        flex-direction: column;
        padding: 20px;

        }
        .subtextDiv{
        width: 75vw;
        margin-top: 15px;
        margin-bottom: 15px;
            p{
                font-size: 27px;
                text-align: justify;
            }
        }
     

        .infoEnd{
            width: 45vw;
            margin-top: 45px;
            p{
                padding: 0;
                margin: 0;
                font-size: 22px;
            }
            a{
                text-decoration: none;               
                color: #DB98B5;                
                font-family: 'Poppins', sans-serif;
            }
            svg{
                font-size: 30px
            }
        }
    }
    .bodyDiv{
        display: flex;
        flex-direction: row;
        padding-right: 80px;
        margin-top: 20px;
        img{
            
            width: 65vw;
            padding-left: 80px;
            object-fit: cover;
        }

        p{
            font-size: 25px;
            text-align: justify;
            margin-left: 35px;
        }
        .pBottom{
            padding-left: 50px;
        }
    }

    .carosselDiv{
        display: flex;
        flex-direction: row;
        .carousel{
        
            .slide {
                display: none;  
                transition: opacity 0.5s ease-in-out;
            }
            .slide.active {
            display: flex; /* ou o valor apropriado para exibição */
  
                    
            }
            img{
                width: 65vw;
                padding-left: 80px;
                object-fit: cover;
                margin-bottom: 50px;
            }
        }
        p{
            font-size: 24px;
            text-align: justify;
            margin-left: 35px;
            padding-right: 80px;
        }
    }

    .links{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        a{
            display: flex;
            text-decoration: none;
            color: #C2FCF4;
            font-size: 40px;
            align-items: center;
            &:hover{
              color:  #DB98B5
            }
        }
        svg{
            font-size: 50px;
            align-items: center;
        }
    }
    @media only screen and (max-width: 1236px){
        .heroPhoto{
            height: 60vh;
        }
        .infoDiv{
            flex-direction: column;
            padding: 0 20px 0 20px;
        }
        .bodyDiv{
            flex-direction: column;
            padding: 0 20px 0 20px !important;
            img{
                width: 100%;
                padding: 0 !important;
            }
            p{
                margin-left: 0px;
            }
            p.pBottom{
                padding-left: 0px !important;
                margin: 0px !important;
            }    
        }
        .carosselDiv{
            flex-direction: column;
            padding: 0 20px 0 20px;

            .carousel .slide.active img{
                width: 100% !important;
                padding-left: 0px !important;
            }
            p{
                margin-left: 20px;
                padding-right: 20px; 
                margin-bottom: 60px;
            }
        }
    }
    @media only screen and (max-width: 768px){
        .heroPhoto{
            display: none;
        }
        .infoDiv{
            flex-direction: column;
            padding: 0 20px 0 20px;
        }
        .bodyDiv{
            flex-direction: column;
            padding-left: 20px !important;
            padding: 0 20px 0 20px !important;
            img{
                width: 100%;
                padding: 0 !important;
            }
        p{
            margin-left: 0px;
        }
        p.pBottom{
            padding-left: 0px !important;
            margin: 0px !important;
        }
        }
        .carosselDiv{
            flex-direction: column;
            padding: 0 20px 0 20px;

            img{
                width: 75vw !important;
                padding-left: 0px !important;
                padding: 0 20px !important;
                object-fit: contain !important;
                margin-bottom: 50px !important;
            }
            p{
                margin-left: 20px;
                padding-right: 20px; 
                margin-bottom: 60px;
            }
        }

        .links{
            a{
            
            font-size: 20px;
            }
            svg{
            font-size: 20px;
            ;
        }
        }
    }
`,Hj="/portfolio/assets/FireShot Capture 029 - Café 3 Corações - -frflmq30.png",Wj="/portfolio/assets/FireShot Capture 031 - Café 3 Corações - -D43oc_Uq.png",Qj="/portfolio/assets/FireShot Capture 032 - Café 3 Corações - -O_Bl2lK7.png",qj="/portfolio/assets/FireShot Capture 033 - Café 3 Corações - -5GcgrXyQ.png",Kj="/portfolio/assets/FireShot Capture 035 - Café 3 Corações - -VEcpMw4r.png",Yj="/portfolio/assets/FireShot Capture 036 - Café 3 Corações - -o-trZ61K.png",Xj="/portfolio/assets/FireShot Capture 024 - PokeDex - -dFkb-el4.png",Zj="/portfolio/assets/FireShot Capture 025 - PokeDex - -shZch6vD.png",Jj="/portfolio/assets/FireShot Capture 026 - PokeDex - -z6FNvUOX.png",eP="/portfolio/assets/FireShot Capture 027 - PokeDex - -_Fgd1bMB.png",tP="/portfolio/assets/FireShot Capture 042 - Onma - gleibercoelho.github.io-lLTh5PM5.png",nP="/portfolio/assets/FireShot Capture 039 - Omma - Receitas legais - -vMsE6VPj.png",rP="/portfolio/assets/FireShot Capture 041 - Omma - Receitas legais - -cU_DzttC.png",oP="/portfolio/assets/FireShot Capture 043 - Mercado da Informática - 127.0.0.1-7VSEXyFr.png",iP="/portfolio/assets/FireShot Capture 022 - Mercado da Informática - 127.0.0.1-8ceDRbG2.png",sP="/portfolio/assets/FireShot Capture 045 - Mercado da Informática - 127.0.0.1-j-KgQMtT.png",aP="/portfolio/assets/FireShot Capture 046 - Mercado da Informática - 127.0.0.1-g7jYHMaO.png",lP="/portfolio/assets/FireShot Capture 047 - Mercado da Informática - 127.0.0.1-G4rQog9R.png",uP="/portfolio/assets/FireShot Capture 044 - Mercado da Informática - 127.0.0.1-cCoHPw4V.png",cP="/portfolio/assets/FireShot Capture 049 - Mercado da Informática - 127.0.0.1-FPOYnY27.png",dP="/portfolio/assets/FireShot Capture 052 - GG-WP - www.gg-wp.info-MYrVPDX4.png",fP="/portfolio/assets/FireShot Capture 053 - GG-WP - www.gg-wp.info-WGYYlRwF.png",pP="/portfolio/assets/FireShot Capture 054 - GG-WP - www.gg-wp.info copia 2-9q1-_c29.png",hP="/portfolio/assets/FireShot Capture 054 - GG-WP - www.gg-wp.info copia-dAdJqnr2.png",mP="/portfolio/assets/FireShot Capture 054 - GG-WP - www.gg-wp.info-NklJxnhX.png",gP="/portfolio/assets/FireShot Capture 066 - Pompom - gleibercoelho.github.io 12-wlBkzIk5.png",vP="/portfolio/assets/sheilla-JVX7UifC.png",yP="/portfolio/assets/FireShot Capture 011 - Pompom - -n2zDAbnX.png",xP="/portfolio/assets/FireShot Capture 010 - Pompom - -8JjTq5vw.png",wP="/portfolio/assets/FireShot Capture 058 - Pompom - gleibercoelho.github.io-nXwd0kfM.png",CP="/portfolio/assets/FireShot Capture 059 - Pompom - gleibercoelho.github.io-sFkZT590.png",SP="/portfolio/assets/FireShot Capture 055 - Sound Garden - gleibercoelho.github.io-TeWr6wdt.png",jP="/portfolio/assets/FireShot Capture 056 - Sound Gardens - Painel Administrativo - gleibercoelho.github.io-irvciQ3z.png",PP="/portfolio/assets/FireShot Capture 037 - NETFLIX CLONE - gleibercoelho.github.io copia-d68U8NfP.png",V0="/portfolio/assets/FireShot Capture 037 - NETFLIX CLONE - gleibercoelho.github.io-mqZXGdOX.png",kP="/portfolio/assets/FireShot Capture 004 - Dindin - gleibercoelho.github.io-Cp_TQjbN.png",EP="/portfolio/assets/FireShot Capture 061 - Dindin - -a34iLq4_.png",TP="/portfolio/assets/FireShot Capture 060 - Dindin - -Wh9bMKg4.png",bP="/portfolio/assets/FireShot Capture 063 - Dindin - -WOtpwKA8.png",RP="/portfolio/assets/FireShot Capture 008 - Dindin - gleibercoelho.github.io-eIGYl7IU.png",AP="/portfolio/assets/home-xiHVmTKq.jpeg",_P="/portfolio/assets/sales-5sFL2Q8G.jpeg",LP="/portfolio/assets/stock-yx5ay75Y.jpeg",zP="/portfolio/assets/FireShot Capture 013 - Codeleap - gleibercoelho.github.io-4iqmdNU0.png",MP="/portfolio/assets/FireShot Capture 015 - Codeleap - gleibercoelho.github.io-ruOO4w4i.png",IP=[{id:0,heroPhoto:Wy,heroPhotoClass:"classeHerophoto0",title:"Mercado de Gadgets. ",subText:"Este é um projeto ecommerce desenvolvido com React. Inspirado no design da Apple.",subText2:"Este é um projeto de Ecommerce Full Stack no qual eu sou responsável pelo desenvolvimento do front end e integração com o back end. O site oferece toda a experiencia de compra para um usuário.",infoEnd:"#",infoRepo:"https://github.com/gleibercoelho/Gama-XP-47-final",infoTechs:u.jsx("div",{children:u.jsxs("p",{children:[u.jsx(bn,{}),u.jsx(io,{}),u.jsx(tn,{}),u.jsx(Rn,{}),u.jsx(he,{}),u.jsx(ye,{}),u.jsx(ve,{})]})}),bodyPhoto:oP,bodyPhotoClass:"classe-da-foto-corpo",textSide:"Dentro do site é possível se cadastrar como usuário, ver seu histórico de compras, adicionar e remover produtos do seu carinho, fechar pedidos, adicionar cupons de desconto. Este site foi desenvolvido em React. Eu configurei toda integração do CRUD com o back end",textBottom:"Este site foi desenvolvido como trabalho de conclusão do meu curso de programação com ênfase em front end na Gama Academy. Para conhecer como foi o processo de desenvolvimento, consulte meu repositório.",PhotoCarrosel1:iP,PhotoCarrosel2:sP,PhotoCarrosel3:aP,PhotoCarrosel4:lP,PhotoCarrosel5:uP,PhotoCarrosel6:cP,textcarrosel:"O site também conta com painel de controle para o administrador verificar todos os produtos cadastrados, classes de produtos, usuários cadastrados, pedidos feitos. O painel foi desenvolvido para o usuário administrador realizar toda gestão do site sem precisar programar.",totalSlide:5},{id:1,heroPhoto:dP,heroPhotoClass:"classeHerophoto0",title:"GG-WP",subText:"Esta é uma aplicação web desenvolvida em React. Criada para jogadores do game League of Legends.",subText2:"Essa aplicação foi desenvolvida para mostrar os status das partidas de qualquer jogador de Lol em qualquer servidor do mundo. Basta digitar um nome de usuário válido para acessar os dados do jogador.",infoEnd:"https://www.gg-wp.info/",infoRepo:"#",infoTechs:u.jsx("div",{children:u.jsxs("p",{children:[u.jsx(bn,{}),u.jsx(al,{}),u.jsx(tn,{}),u.jsx(Rn,{}),u.jsx(he,{}),u.jsx(ye,{}),u.jsx(ve,{})]})}),bodyPhoto:fP,bodyPhotoClass:"classe-da-foto-corpo",textSide:"Dentro do site é possível gráficos de dano, quantidade de kills, e receber insight exclusivos com base na análise dos dados disponíveis",textBottom:"A criação desse site foi possível graças as API da Riot Games produtora do League of Legends. Nesta API sao disponibilizadas uma quantidade absurda de informação. É necessário bastante conhecimento prévio do jogo para conseguir organizar estes dados e trazer análises para os usuários.",PhotoCarrosel1:pP,PhotoCarrosel2:hP,PhotoCarrosel3:mP,PhotoCarrosel4:"url-da-foto-4",PhotoCarrosel5:"url-da-foto-5",PhotoCarrosel6:"url-da-foto-6",textcarrosel:"Para ser elegível a uma das chaves da Riot Games que possibilita a consulta de dados das APIs em grande escala é necessário colocar camadas de proteção desta chave token de acesso. Para isso ser possível foi necessário criar um servidor intermediário no back end para receber as requisições do navegador e enviar para o servidor da Riot e retornar apenas os dados solicitados pelo usuário.",totalSlide:3},{id:2,heroPhoto:Qy,heroPhotoClass:"classeHerophoto0",title:"Sound Garden",subText:"Sound Garden é uma grande empresa de eventos que promove shows e festivais pelo país.",subText2:"Este é um site desenvolvido com HTML e Javascript para que os usuários possam entrar para consultar os proximos eventos e realizar a reserva do seu ingresso bem como a compra do mesmo.",infoEnd:"https://gleibercoelho.github.io/soundgarden-front/",infoRepo:"https://github.com/gleibercoelho/soundgarden-front",infoTechs:u.jsx("div",{children:u.jsxs("p",{children:[u.jsx(he,{}),u.jsx(ye,{}),u.jsx(ve,{}),u.jsx(sl,{})]})}),bodyPhoto:SP,bodyPhotoClass:"classe-da-foto-corpo",textSide:"O design do front end foi criado inspirados em sites do mesmo segmento.",textBottom:"O administrador também pode consultar, editar, remover ou adicionar reservas que os demais usuário fizeram para cada evento.",PhotoCarrosel1:jP,PhotoCarrosel2:"url-da-foto-2",PhotoCarrosel3:"url-da-foto-3",PhotoCarrosel4:"url-da-foto-4",PhotoCarrosel5:"url-da-foto-5",PhotoCarrosel6:"url-da-foto-6",textcarrosel:"O back end desse site foi fornecido pela Gama Academy durante meu curso de front end e infelizmente nao esta mais disponível; imposibilitando visualizar todas as propriedades do site.",totalSlide:1},{id:3,heroPhoto:Yy,heroPhotoClass:"classeHerophoto0",title:"Codeleap",subText:"Esta é uma aplicação web criada em React para se compartilhar ideias.",subText2:"Codeleap é um micro blog no qual e possivel logar com seu usuário e compartilhar suas ideias com o resto do mundo. Voce pode escrever sobre qualquer assunto e publicar neste site. Que tal começar agora?",infoEnd:"https://gleibercoelho.github.io/codeleapPage/",infoRepo:"https://github.com/gleibercoelho/codeLeap",infoTechs:u.jsx("div",{children:u.jsxs("p",{children:[u.jsx(bn,{}),u.jsx(io,{}),u.jsx(tn,{}),u.jsx(Rn,{}),u.jsx(he,{}),u.jsx(ye,{}),u.jsx(ve,{})]})}),bodyPhoto:zP,bodyPhotoClass:"classe-da-foto-corpo",textSide:"Este projeto faz parte de um desafio de código técnica para uma vaga de front end na Codeleap. O desafio é criar o código de um blog disponibilizado a partir do Figma. A criação, edição e remoção dos posts do blog é feita através da API disponibilizada para esse desafio.",textBottom:"Este foi meu primeiro projeto desenvolvido usando session storage. Eu pude aprender como enviar informações armazenadas na session para o Redux, uma vez que ele perde as informações da store quando a página é recarregada",PhotoCarrosel1:MP,PhotoCarrosel2:"url-da-foto-2",PhotoCarrosel3:"url-da-foto-3",PhotoCarrosel4:"url-da-foto-4",PhotoCarrosel5:"url-da-foto-5",PhotoCarrosel6:"url-da-foto-6",textcarrosel:"A session storage e o Redux foram combinados porque esse site foi imaginado para acessos recorrentes ao longo do dia. Dessa forma é possível o usuário continuar logado e voltar a página que estava lendo sem precisar relogar",totalSlide:1},{id:4,heroPhoto:qy,heroPhotoClass:"classeHerophoto0",title:"Dindin",subText:"Dindin é um site de educação financeira onde você aprende a investir",subText2:"Este site foi criado para que os usuários possam ler artigos sobre economia e finanças e também assistir a vídeo aulas de como aplicar seu dinheiro de forma segura e duradoura. Venha assistir uma aula e planejar seu futuro.",infoEnd:"https://gleibercoelho.github.io/Dindin-website-of-education/",infoRepo:"https://github.com/gleibercoelho/Dindin-website-of-education",infoTechs:u.jsx("div",{children:u.jsxs("p",{children:[u.jsx(he,{}),u.jsx(ye,{}),u.jsx(ve,{})]})}),bodyPhoto:kP,bodyPhotoClass:"classe-da-foto-corpo",textSide:"Este projeto foi o primeiro criado por mim no curso de fron end da Gama Academy. Desenvolvido com HTML, CSS e Javascript. ",textBottom:"Com este site aprendi conceitos iniciais de flexbox e grid.",PhotoCarrosel1:EP,PhotoCarrosel2:TP,PhotoCarrosel3:bP,PhotoCarrosel4:RP,PhotoCarrosel5:"url-da-foto-5",PhotoCarrosel6:"url-da-foto-6",textcarrosel:"Que tal aprender sobre educação financeira?",totalSlide:4},{id:5,heroPhoto:gP,heroPhotoClass:"classeHerophoto0",title:"Pompom",subText:"Este é o lugar para os fãs encontrarem conteúdo exclusivo da sua criadora de conteúdo gamer preferida.",subText2:"Este site foi criado para criadora de conteúdo de jogos Sheilla Pompom possa compartilhar o conteudo das suas lives, youtube e demais redes com seus fãs. Sheilla é uma Drag Queen",infoEnd:"https://gleibercoelho.github.io/SheillaPompom/",infoRepo:"https://github.com/gleibercoelho/SheillaPompom",infoTechs:u.jsx("div",{children:u.jsxs("p",{children:[u.jsx(he,{}),u.jsx(ye,{}),u.jsx(ve,{})]})}),bodyPhoto:vP,bodyPhotoClass:"classe-da-foto-corpo",textSide:"Este é um site colorido para um público colorido por uma criadora colorida.",textBottom:"Através do site os fãs podem acompanhar o último conteúdo lançado. Desenvolvido em HTML e Javascript.",PhotoCarrosel1:yP,PhotoCarrosel2:xP,PhotoCarrosel3:wP,PhotoCarrosel4:CP,PhotoCarrosel5:"url-da-foto-5",PhotoCarrosel6:"url-da-foto-6",textcarrosel:"Quer saber da próxima live ou rever a última? Vem pra cá",totalSlide:4},{id:6,heroPhoto:PP,heroPhotoClass:"classeHerophoto0",title:"Netflix Clone",subText:"Este projeto recria a home page do maior site de streaming do mundo.",subText2:"Este projeto foi desenvolvido utilizando o Bootstrap, a biblioteca do Javascript para criar o carrossel de imagens que simula os filmes disponíveis no catálogo do site. ",infoEnd:"https://gleibercoelho.github.io/Neflix-Ladding-Page-Clone/",infoRepo:"https://github.com/gleibercoelho/Neflix-Ladding-Page-Clone",infoTechs:u.jsx("div",{children:u.jsxs("p",{children:[u.jsx(he,{}),u.jsx(ye,{}),u.jsx(sl,{}),u.jsx(ve,{})]})}),bodyPhoto:V0,bodyPhotoClass:"classe-da-foto-corpo",textSide:"O bootstrap fornece diversos blocos de código predefinidos para que programadores possam reaproveitar esses blocos prontos e incorporarem aos seus projetos. ",textBottom:"Outra vantagem que usar bootstrap no projeto é a sua responsividade. O código já é construído para os diferentes tamanhos de tela.",PhotoCarrosel1:V0,PhotoCarrosel2:"url-da-foto-2",PhotoCarrosel3:"url-da-foto-3",PhotoCarrosel4:"url-da-foto-4",PhotoCarrosel5:"url-da-foto-5",PhotoCarrosel6:"url-da-foto-6",textcarrosel:"Este tipo de biblioteca e amplamente usado por programadores para acelerar o processo de criação. ",totalSlide:1},{id:7,heroPhoto:Rd,heroPhotoClass:"classeHerophoto0",title:"Pokedex",subText:"Encontre todos os seus pokémons preferidos da primeira geração do clássico anime japonês.",subText2:"Este e o projeto de um catálogo de pokémons inspirado em uma agenda eletrônica do anime onde é possível consultar informações de todos os monstros criados que você encontrar pelo caminho.",infoEnd:"https://gleibercoelho.github.io/pokedex/",infoRepo:"https://github.com/gleibercoelho/pokedex",infoTechs:u.jsx("div",{children:u.jsxs("p",{children:[u.jsx(he,{}),u.jsx(ye,{}),u.jsx(ve,{})]})}),bodyPhoto:Xj,bodyPhotoClass:"classe-da-foto-corpo",textSide:"Este projeto consome dados de uma API usando Javascript para trazer as informações dos monstrinhos direito para o site.",textBottom:"Projeto curinga no portifólio de todo programador iniciante, a pokedex é um otimo desafio para começar no Javascript e consumir dados de APIs.",PhotoCarrosel1:Zj,PhotoCarrosel2:Jj,PhotoCarrosel3:eP,PhotoCarrosel4:Rd,PhotoCarrosel5:"url-da-foto-5",PhotoCarrosel6:"url-da-foto-6",textcarrosel:"Conheça todos os monstros da primeira temporada do anime",totalSlide:4},{id:8,heroPhoto:bd,heroPhotoClass:"classeHerophoto0",title:"Café 3 Corações",subText:"Site criado inspirado na marca de cafés brasileiro 3 Corações",subText2:"Site criado em HTML com Javascript para uma marca de cafés onde é possível ver seus produtos, avaliações, encontrar lojas físicas e entrar em contato com o atendimento ao cliente. O design é inspirado em sites de cafeteria.",infoEnd:"https://gleibercoelho.github.io/Site-case-caf-3-coracoes/",infoRepo:"https://github.com/gleibercoelho/Site-case-caf-3-coracoes",infoTechs:u.jsx("div",{children:u.jsxs("p",{children:[u.jsx(he,{}),u.jsx(ye,{}),u.jsx(ve,{})]})}),bodyPhoto:Hj,bodyPhotoClass:"classe-da-foto-corpo",textSide:"Este projeto front end foi imaginado para fornecer uma experiencia para os consumidores encontrarem não só café, mas outros produtos que a marca oferece.",textBottom:"No site também é possível comprar os produtos disponives e colocar no seu carinho. Veja os produtos mais bem avaliados para ajudar na sua decisão.",PhotoCarrosel1:Wj,PhotoCarrosel2:Qj,PhotoCarrosel3:qj,PhotoCarrosel4:Kj,PhotoCarrosel5:Yj,PhotoCarrosel6:bd,textcarrosel:"Conheça e aprenda a fazer as últimas receitas mais deliciosas no nosso blog.",totalSlide:6},{id:10,heroPhoto:Ky,heroPhotoClass:"classeHerophoto0",title:"Mech Oficina",subText:"Este é um projeto front end de uma oficina desenvolvido em React.",subText2:"Este foi meu primeiro projeto desenvolvido com React e Typescript. Neste projeto foi desenvolvido a simulação de sistema de uma loja de peças que monitora as vendas feitas e o estoque de peças. o login foi implementado com Redux",infoEnd:"#",infoRepo:"https://github.com/gleibercoelho/vite-project",infoTechs:u.jsx("div",{children:u.jsxs("p",{children:[u.jsx(bn,{}),u.jsx(tn,{}),u.jsx(io,{}),u.jsx(Rn,{}),u.jsx(he,{}),u.jsx(Fy,{}),u.jsx(ye,{}),u.jsx(ve,{})]})}),bodyPhoto:AP,bodyPhotoClass:"classe-da-foto-corpo",textSide:"O foco do projeto é desenvolver o front end, então para o back end eu criei um mock up do estoque e das vendas.",textBottom:"O sistema de login foi implementado com Redux para que o estado de login do usuário esteja disponível em todo o site.",PhotoCarrosel1:_P,PhotoCarrosel2:LP,PhotoCarrosel3:"url-da-foto-3",PhotoCarrosel4:"url-da-foto-4",PhotoCarrosel5:"url-da-foto-5",PhotoCarrosel6:"url-da-foto-6",textcarrosel:"Este site pode atender facilmente uma pequena loja e realizar seus controles de vendas e estoque.",totalSlide:2},{id:9,heroPhoto:Ad,heroPhotoClass:"classeHerophoto0",title:"Omma",subText:"Site de culinária para você preparar as melhores receitas.",subText2:" Este site foi desenvolvido no meu curso de front end na Gama Academy. Consiste em disponibilizar um site com receitas para que os usuários possam consultar ingredientes, instruções e vídeos para realizar o preparo da receita escolhida. ",infoEnd:"https://gleibercoelho.github.io/Site-de-Receitas/index.html",infoRepo:"https://github.com/gleibercoelho/Site-de-Receitas",infoTechs:u.jsx("div",{children:u.jsxs("p",{children:[u.jsx(he,{}),u.jsx(ye,{}),u.jsx(ve,{})]})}),bodyPhoto:tP,bodyPhotoClass:"classe-da-foto-corpo",textSide:"Omma é um site de receitas onde você pode consultar as melhores opções do que servir naquele almoço especial de domingo. Escolha dentre os melhores doces até os melhores pratos.",textBottom:"Omma foi desenvolvido com HTML e CSS.",PhotoCarrosel1:nP,PhotoCarrosel2:Ad,PhotoCarrosel3:rP,PhotoCarrosel4:"url-da-foto-4",PhotoCarrosel5:"url-da-foto-5",PhotoCarrosel6:"url-da-foto-6",textcarrosel:"Conheça e aprenda a fazer as últimas receitas mais deliciosas no nosso site.",totalSlide:3},{id:11,heroPhoto:va,heroPhotoClass:"classeHerophoto0",title:"La Vie",subText:"La vie é um projeto de back end para um clínica médica desenvolvida com Node Js.",subText2:"Neste projeto os usuários são psicólogos da clinica La vie que entram no sistema desenvolvido para criar o cadastro dos pacientes e o registro das consultar para registrar os seus respectivos prontuários médicos.",infoEnd:"https://gleibercoelho.github.io/Site-de-Receitas/index.html",infoRepo:"https://github.com/gleibercoelho/Site-de-Receitas",infoTechs:u.jsx("div",{children:u.jsxs("p",{children:[u.jsx(al,{}),u.jsx(tn,{}),u.jsx(he,{}),u.jsx(vp,{})]})}),bodyPhoto:va,bodyPhotoClass:"classe-da-foto-corpo",textSide:"O servidor foi desenvolvido com autenticação de token JWT de modo o registro do médico seja registrado no prontuário dos pacientes.",textBottom:"O mesmo paciente pode ter vários prontuários de atendimento no qual são registrados os médicos que fizeram seu atendimento.",PhotoCarrosel1:va,PhotoCarrosel2:"url-da-foto-2",PhotoCarrosel3:"url-da-foto-3",PhotoCarrosel4:"url-da-foto-4",PhotoCarrosel5:"url-da-foto-5",PhotoCarrosel6:"url-da-foto-6",textcarrosel:"O sistema foi criado com um administrador que pode criar cadastro de novos psicólogos com seu login e senha.",totalSlide:1},{id:13,heroPhoto:ma,heroPhotoClass:"classeHerophoto0",title:"API de Feriados",subText:"Esta é uma aplicação web desenvolvida com HTML e Javascript",subText2:"Neste site é possível consultar todos feriados nacionais de um ano. Basta digitar o ano e buscar pelos feriados.",infoEnd:"https://gleibercoelho.github.io/API-Feriados-Nacionais/",infoRepo:"https://github.com/gleibercoelho/API-Feriados-Nacionais",infoTechs:u.jsx("div",{children:u.jsxs("p",{children:[u.jsx(he,{}),u.jsx(ye,{}),u.jsx(ve,{})]})}),bodyPhoto:ma,bodyPhotoClass:"classe-da-foto-corpo",textSide:"APIs são criadas a partir de servidores que fornecem determinados dados quando você se conecta com eles de forma correta.",textBottom:"Apesar de simples, essa aplicação pode ser facilmente incorporada a outros sites e ser usados de forma automática em uma página ou através de requisições do usuário.",PhotoCarrosel1:ma,PhotoCarrosel2:"url-da-foto-2",PhotoCarrosel3:"url-da-foto-3",PhotoCarrosel4:"url-da-foto-4",PhotoCarrosel5:"url-da-foto-5",PhotoCarrosel6:"url-da-foto-6",textcarrosel:"Quando configuradas de forma correta, o front end traz informações diretamente de um back end através da API",totalSlide:1},{id:12,heroPhoto:ga,heroPhotoClass:"classeHerophoto0",title:"API de Endereços",subText:"Esta é uma aplicação web desenvolvida com HTML e Javascript",subText2:"Neste site e possível consultar todos os endereços nacionais através do CEP. Basta digitar o CEP e o site vai retornas demais informações do endereço como bairro, cidade e nome da rua.",infoEnd:"https://gleibercoelho.github.io/API-Feriados-Nacionais/",infoRepo:"https://github.com/gleibercoelho/API-Feriados-Nacionais",infoTechs:u.jsx("div",{children:u.jsxs("p",{children:[u.jsx(he,{}),u.jsx(ye,{}),u.jsx(ve,{})]})}),bodyPhoto:ga,bodyPhotoClass:"classe-da-foto-corpo",textSide:"APIs são criadas a partir de servidores que fornecem determinados dados quando você se conecta com eles de forma correta.",textBottom:"apesar de simples essa aplicação pode ser facilmente incorporado a outros sites e ser usados de forma automática em uma página ou através de requisições do usuário.",PhotoCarrosel1:ga,PhotoCarrosel2:"url-da-foto-2",PhotoCarrosel3:"url-da-foto-3",PhotoCarrosel4:"url-da-foto-4",PhotoCarrosel5:"url-da-foto-5",PhotoCarrosel6:"url-da-foto-6",textcarrosel:"Quando confiuradas de forma correta o front end traz informacoes diretamente de um back end atraves da API",totalSlide:1}],DP=({product:e})=>{C.useState(0);const[t,n]=C.useState(1),r=e.totalSlide;C.useEffect(()=>{const s=setInterval(()=>{o()},3e3);return()=>clearInterval(s)},[t]);const o=()=>{n(s=>s%r+1)},i=s=>{window.location.pathname===s&&window.history.replaceState(null,"",s)};return u.jsxs(Uj,{children:[u.jsxs("div",{className:"heroPhoto",children:[u.jsx(De.div,{style:{position:"absolute",width:"100%",height:"100%",backgroundImage:"linear-gradient(to left, #aa076b, #980369, #860267, #730363, #61045f)"},initial:{translateY:"0%"},animate:{translateY:"-100%"},transition:{duration:.4,delay:1}}),u.jsx(De.img,{src:e.heroPhoto,alt:"",className:e.heroPhotoClass,style:{width:"100%",height:"100%",objectFit:"cover"}})]}),u.jsx(so,{children:u.jsxs("div",{className:"infoDiv",children:[u.jsxs("div",{children:[u.jsx("h1",{children:e.title}),u.jsx("h2",{children:e.subText})]}),u.jsx("div",{className:"subtextDiv",children:u.jsx("p",{children:e.subText2})}),u.jsxs("div",{className:"infoEnd",children:[u.jsxs("p",{children:["Site: ",u.jsx(N,{to:e.infoEnd,target:"_blank",children:u.jsx(WS,{})})]}),u.jsxs("p",{children:["Repositorio ",u.jsx(N,{to:e.infoRepo,target:"_blank",children:u.jsx(sr,{})})]}),u.jsxs("p",{children:["Techs: ",e.infoTechs]})]})]})}),u.jsx(so,{children:u.jsxs("div",{className:"bodyDiv",children:[u.jsxs("div",{children:[u.jsx("img",{src:e.bodyPhoto,alt:"",className:e.bodyPhotoClass}),u.jsx("p",{className:"pBottom",children:e.textBottom})]}),u.jsx("div",{children:u.jsx("p",{children:e.textSide})})]})}),u.jsx(so,{children:u.jsxs("div",{className:"carosselDiv",children:[u.jsx("div",{className:"carousel",children:Array.from({length:r}).map((s,a)=>u.jsx("img",{src:String(e[`PhotoCarrosel${a+1}`]),alt:"",className:`slide ${t===a+1?"active":""} ${String(e[`imageClassSecret${a+1}`])}`,id:`slide${a+1}`},`slide${a+1}`))}),u.jsx("p",{children:e.textcarrosel})]})}),u.jsxs("div",{className:"links",children:[u.jsxs(N,{to:e.id===0?"#":`/projects/${e.id-1}`,onClick:()=>i(`/projects/${e.id-1}`),children:[u.jsx(US,{})," Anterior"]}),u.jsx(N,{to:"/projects",onClick:()=>i("/projects"),children:"Projetos"}),u.jsxs(N,{to:e.id===13?"#":`/projects/${e.id+1}`,onClick:()=>i(`/projects/${e.id+1}`),children:["Próximo ",u.jsx(HS,{})]})]})]})},OP=()=>{const{productId:e}=Z4(),t=IP.find(o=>o.id===parseInt(e??"",10));if(!t)return u.jsxs("div",{children:[u.jsx(Zi,{}),u.jsx("p",{children:"Produto não encontrado"})]});const{scrollYProgress:n}=Ov(),r=Iv(n);return C.useEffect(()=>{window.scrollTo(0,0)}),u.jsxs(fs,{children:[u.jsx(Zi,{}),u.jsx(DP,{product:t}),u.jsx(De.div,{style:{scaleX:r,transformOrigin:"left",background:"black",position:"sticky",bottom:0,width:"100%",height:"5px"}})]})};function NP(){const e=c2([{path:"/",element:u.jsx(pj,{})},{path:"/about",element:u.jsx(wj,{})},{path:"/contact",element:u.jsx(Dj,{})},{path:"/projects",element:u.jsx(Gj,{})},{path:"/projects/:productId",element:u.jsx(OP,{})}]),t=is();return e?u.jsx(z7,{mode:"wait",children:F.cloneElement(e,{key:t.pathname})}):null}Zu.createRoot(document.getElementById("root")).render(u.jsx(F.StrictMode,{children:u.jsx(vx,{basename:"/portfolio/",children:u.jsx(dx,{children:u.jsx(p2,{path:"/*",element:u.jsx(NP,{})})})})}));
