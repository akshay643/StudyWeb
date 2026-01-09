function k1(e,t){for(var n=0;n<t.length;n++){const o=t[n];if(typeof o!="string"&&!Array.isArray(o)){for(const r in o)if(r!=="default"&&!(r in e)){const s=Object.getOwnPropertyDescriptor(o,r);s&&Object.defineProperty(e,r,s.get?s:{enumerable:!0,get:()=>o[r]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function Ng(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Og={exports:{}},Ua={},Mg={exports:{}},G={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fs=Symbol.for("react.element"),j1=Symbol.for("react.portal"),P1=Symbol.for("react.fragment"),T1=Symbol.for("react.strict_mode"),A1=Symbol.for("react.profiler"),R1=Symbol.for("react.provider"),N1=Symbol.for("react.context"),O1=Symbol.for("react.forward_ref"),M1=Symbol.for("react.suspense"),I1=Symbol.for("react.memo"),L1=Symbol.for("react.lazy"),lp=Symbol.iterator;function D1(e){return e===null||typeof e!="object"?null:(e=lp&&e[lp]||e["@@iterator"],typeof e=="function"?e:null)}var Ig={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Lg=Object.assign,Dg={};function cr(e,t,n){this.props=e,this.context=t,this.refs=Dg,this.updater=n||Ig}cr.prototype.isReactComponent={};cr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};cr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Fg(){}Fg.prototype=cr.prototype;function Zu(e,t,n){this.props=e,this.context=t,this.refs=Dg,this.updater=n||Ig}var ed=Zu.prototype=new Fg;ed.constructor=Zu;Lg(ed,cr.prototype);ed.isPureReactComponent=!0;var cp=Array.isArray,_g=Object.prototype.hasOwnProperty,td={current:null},Ug={key:!0,ref:!0,__self:!0,__source:!0};function Bg(e,t,n){var o,r={},s=null,i=null;if(t!=null)for(o in t.ref!==void 0&&(i=t.ref),t.key!==void 0&&(s=""+t.key),t)_g.call(t,o)&&!Ug.hasOwnProperty(o)&&(r[o]=t[o]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(e&&e.defaultProps)for(o in a=e.defaultProps,a)r[o]===void 0&&(r[o]=a[o]);return{$$typeof:Fs,type:e,key:s,ref:i,props:r,_owner:td.current}}function F1(e,t){return{$$typeof:Fs,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function nd(e){return typeof e=="object"&&e!==null&&e.$$typeof===Fs}function _1(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var up=/\/+/g;function Tl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?_1(""+e.key):t.toString(36)}function Ni(e,t,n,o,r){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(s){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case Fs:case j1:i=!0}}if(i)return i=e,r=r(i),e=o===""?"."+Tl(i,0):o,cp(r)?(n="",e!=null&&(n=e.replace(up,"$&/")+"/"),Ni(r,t,n,"",function(c){return c})):r!=null&&(nd(r)&&(r=F1(r,n+(!r.key||i&&i.key===r.key?"":(""+r.key).replace(up,"$&/")+"/")+e)),t.push(r)),1;if(i=0,o=o===""?".":o+":",cp(e))for(var a=0;a<e.length;a++){s=e[a];var l=o+Tl(s,a);i+=Ni(s,t,n,l,r)}else if(l=D1(e),typeof l=="function")for(e=l.call(e),a=0;!(s=e.next()).done;)s=s.value,l=o+Tl(s,a++),i+=Ni(s,t,n,l,r);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function ni(e,t,n){if(e==null)return e;var o=[],r=0;return Ni(e,o,"","",function(s){return t.call(n,s,r++)}),o}function U1(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ve={current:null},Oi={transition:null},B1={ReactCurrentDispatcher:Ve,ReactCurrentBatchConfig:Oi,ReactCurrentOwner:td};function Vg(){throw Error("act(...) is not supported in production builds of React.")}G.Children={map:ni,forEach:function(e,t,n){ni(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ni(e,function(){t++}),t},toArray:function(e){return ni(e,function(t){return t})||[]},only:function(e){if(!nd(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};G.Component=cr;G.Fragment=P1;G.Profiler=A1;G.PureComponent=Zu;G.StrictMode=T1;G.Suspense=M1;G.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=B1;G.act=Vg;G.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=Lg({},e.props),r=e.key,s=e.ref,i=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,i=td.current),t.key!==void 0&&(r=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)_g.call(t,l)&&!Ug.hasOwnProperty(l)&&(o[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)o.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];o.children=a}return{$$typeof:Fs,type:e.type,key:r,ref:s,props:o,_owner:i}};G.createContext=function(e){return e={$$typeof:N1,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:R1,_context:e},e.Consumer=e};G.createElement=Bg;G.createFactory=function(e){var t=Bg.bind(null,e);return t.type=e,t};G.createRef=function(){return{current:null}};G.forwardRef=function(e){return{$$typeof:O1,render:e}};G.isValidElement=nd;G.lazy=function(e){return{$$typeof:L1,_payload:{_status:-1,_result:e},_init:U1}};G.memo=function(e,t){return{$$typeof:I1,type:e,compare:t===void 0?null:t}};G.startTransition=function(e){var t=Oi.transition;Oi.transition={};try{e()}finally{Oi.transition=t}};G.unstable_act=Vg;G.useCallback=function(e,t){return Ve.current.useCallback(e,t)};G.useContext=function(e){return Ve.current.useContext(e)};G.useDebugValue=function(){};G.useDeferredValue=function(e){return Ve.current.useDeferredValue(e)};G.useEffect=function(e,t){return Ve.current.useEffect(e,t)};G.useId=function(){return Ve.current.useId()};G.useImperativeHandle=function(e,t,n){return Ve.current.useImperativeHandle(e,t,n)};G.useInsertionEffect=function(e,t){return Ve.current.useInsertionEffect(e,t)};G.useLayoutEffect=function(e,t){return Ve.current.useLayoutEffect(e,t)};G.useMemo=function(e,t){return Ve.current.useMemo(e,t)};G.useReducer=function(e,t,n){return Ve.current.useReducer(e,t,n)};G.useRef=function(e){return Ve.current.useRef(e)};G.useState=function(e){return Ve.current.useState(e)};G.useSyncExternalStore=function(e,t,n){return Ve.current.useSyncExternalStore(e,t,n)};G.useTransition=function(){return Ve.current.useTransition()};G.version="18.3.1";Mg.exports=G;var m=Mg.exports;const _e=Ng(m),Ba=k1({__proto__:null,default:_e},[m]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var V1=m,H1=Symbol.for("react.element"),W1=Symbol.for("react.fragment"),$1=Object.prototype.hasOwnProperty,z1=V1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,J1={key:!0,ref:!0,__self:!0,__source:!0};function Hg(e,t,n){var o,r={},s=null,i=null;n!==void 0&&(s=""+n),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(i=t.ref);for(o in t)$1.call(t,o)&&!J1.hasOwnProperty(o)&&(r[o]=t[o]);if(e&&e.defaultProps)for(o in t=e.defaultProps,t)r[o]===void 0&&(r[o]=t[o]);return{$$typeof:H1,type:e,key:s,ref:i,props:r,_owner:z1.current}}Ua.Fragment=W1;Ua.jsx=Hg;Ua.jsxs=Hg;Og.exports=Ua;var d=Og.exports,Rc={},Wg={exports:{}},st={},$g={exports:{}},zg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(P,T){var L=P.length;P.push(T);e:for(;0<L;){var M=L-1>>>1,V=P[M];if(0<r(V,T))P[M]=T,P[L]=V,L=M;else break e}}function n(P){return P.length===0?null:P[0]}function o(P){if(P.length===0)return null;var T=P[0],L=P.pop();if(L!==T){P[0]=L;e:for(var M=0,V=P.length,Q=V>>>1;M<Q;){var ye=2*(M+1)-1,Le=P[ye],De=ye+1,$e=P[De];if(0>r(Le,L))De<V&&0>r($e,Le)?(P[M]=$e,P[De]=L,M=De):(P[M]=Le,P[ye]=L,M=ye);else if(De<V&&0>r($e,L))P[M]=$e,P[De]=L,M=De;else break e}}return T}function r(P,T){var L=P.sortIndex-T.sortIndex;return L!==0?L:P.id-T.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var i=Date,a=i.now();e.unstable_now=function(){return i.now()-a}}var l=[],c=[],u=1,f=null,p=3,y=!1,w=!1,v=!1,x=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function b(P){for(var T=n(c);T!==null;){if(T.callback===null)o(c);else if(T.startTime<=P)o(c),T.sortIndex=T.expirationTime,t(l,T);else break;T=n(c)}}function S(P){if(v=!1,b(P),!w)if(n(l)!==null)w=!0,D(C);else{var T=n(c);T!==null&&B(S,T.startTime-P)}}function C(P,T){w=!1,v&&(v=!1,h(j),j=-1),y=!0;var L=p;try{for(b(T),f=n(l);f!==null&&(!(f.expirationTime>T)||P&&!F());){var M=f.callback;if(typeof M=="function"){f.callback=null,p=f.priorityLevel;var V=M(f.expirationTime<=T);T=e.unstable_now(),typeof V=="function"?f.callback=V:f===n(l)&&o(l),b(T)}else o(l);f=n(l)}if(f!==null)var Q=!0;else{var ye=n(c);ye!==null&&B(S,ye.startTime-T),Q=!1}return Q}finally{f=null,p=L,y=!1}}var k=!1,E=null,j=-1,R=5,A=-1;function F(){return!(e.unstable_now()-A<R)}function _(){if(E!==null){var P=e.unstable_now();A=P;var T=!0;try{T=E(!0,P)}finally{T?W():(k=!1,E=null)}}else k=!1}var W;if(typeof g=="function")W=function(){g(_)};else if(typeof MessageChannel<"u"){var I=new MessageChannel,O=I.port2;I.port1.onmessage=_,W=function(){O.postMessage(null)}}else W=function(){x(_,0)};function D(P){E=P,k||(k=!0,W())}function B(P,T){j=x(function(){P(e.unstable_now())},T)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(P){P.callback=null},e.unstable_continueExecution=function(){w||y||(w=!0,D(C))},e.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<P?Math.floor(1e3/P):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(P){switch(p){case 1:case 2:case 3:var T=3;break;default:T=p}var L=p;p=T;try{return P()}finally{p=L}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(P,T){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var L=p;p=P;try{return T()}finally{p=L}},e.unstable_scheduleCallback=function(P,T,L){var M=e.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?M+L:M):L=M,P){case 1:var V=-1;break;case 2:V=250;break;case 5:V=1073741823;break;case 4:V=1e4;break;default:V=5e3}return V=L+V,P={id:u++,callback:T,priorityLevel:P,startTime:L,expirationTime:V,sortIndex:-1},L>M?(P.sortIndex=L,t(c,P),n(l)===null&&P===n(c)&&(v?(h(j),j=-1):v=!0,B(S,L-M))):(P.sortIndex=V,t(l,P),w||y||(w=!0,D(C))),P},e.unstable_shouldYield=F,e.unstable_wrapCallback=function(P){var T=p;return function(){var L=p;p=T;try{return P.apply(this,arguments)}finally{p=L}}}})(zg);$g.exports=zg;var G1=$g.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var K1=m,ot=G1;function N(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Jg=new Set,is={};function uo(e,t){Qo(e,t),Qo(e+"Capture",t)}function Qo(e,t){for(is[e]=t,e=0;e<t.length;e++)Jg.add(t[e])}var Xt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Nc=Object.prototype.hasOwnProperty,Y1=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,dp={},fp={};function q1(e){return Nc.call(fp,e)?!0:Nc.call(dp,e)?!1:Y1.test(e)?fp[e]=!0:(dp[e]=!0,!1)}function Q1(e,t,n,o){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return o?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function X1(e,t,n,o){if(t===null||typeof t>"u"||Q1(e,t,n,o))return!0;if(o)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function He(e,t,n,o,r,s,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=o,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=i}var je={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){je[e]=new He(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];je[t]=new He(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){je[e]=new He(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){je[e]=new He(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){je[e]=new He(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){je[e]=new He(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){je[e]=new He(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){je[e]=new He(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){je[e]=new He(e,5,!1,e.toLowerCase(),null,!1,!1)});var od=/[\-:]([a-z])/g;function rd(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(od,rd);je[t]=new He(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(od,rd);je[t]=new He(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(od,rd);je[t]=new He(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){je[e]=new He(e,1,!1,e.toLowerCase(),null,!1,!1)});je.xlinkHref=new He("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){je[e]=new He(e,1,!1,e.toLowerCase(),null,!0,!0)});function sd(e,t,n,o){var r=je.hasOwnProperty(t)?je[t]:null;(r!==null?r.type!==0:o||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(X1(t,n,r,o)&&(n=null),o||r===null?q1(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):r.mustUseProperty?e[r.propertyName]=n===null?r.type===3?!1:"":n:(t=r.attributeName,o=r.attributeNamespace,n===null?e.removeAttribute(t):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,o?e.setAttributeNS(o,t,n):e.setAttribute(t,n))))}var ln=K1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,oi=Symbol.for("react.element"),Eo=Symbol.for("react.portal"),ko=Symbol.for("react.fragment"),id=Symbol.for("react.strict_mode"),Oc=Symbol.for("react.profiler"),Gg=Symbol.for("react.provider"),Kg=Symbol.for("react.context"),ad=Symbol.for("react.forward_ref"),Mc=Symbol.for("react.suspense"),Ic=Symbol.for("react.suspense_list"),ld=Symbol.for("react.memo"),hn=Symbol.for("react.lazy"),Yg=Symbol.for("react.offscreen"),pp=Symbol.iterator;function Er(e){return e===null||typeof e!="object"?null:(e=pp&&e[pp]||e["@@iterator"],typeof e=="function"?e:null)}var ce=Object.assign,Al;function Lr(e){if(Al===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Al=t&&t[1]||""}return`
`+Al+e}var Rl=!1;function Nl(e,t){if(!e||Rl)return"";Rl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var o=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){o=c}e.call(t.prototype)}else{try{throw Error()}catch(c){o=c}e()}}catch(c){if(c&&o&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=o.stack.split(`
`),i=r.length-1,a=s.length-1;1<=i&&0<=a&&r[i]!==s[a];)a--;for(;1<=i&&0<=a;i--,a--)if(r[i]!==s[a]){if(i!==1||a!==1)do if(i--,a--,0>a||r[i]!==s[a]){var l=`
`+r[i].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=i&&0<=a);break}}}finally{Rl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Lr(e):""}function Z1(e){switch(e.tag){case 5:return Lr(e.type);case 16:return Lr("Lazy");case 13:return Lr("Suspense");case 19:return Lr("SuspenseList");case 0:case 2:case 15:return e=Nl(e.type,!1),e;case 11:return e=Nl(e.type.render,!1),e;case 1:return e=Nl(e.type,!0),e;default:return""}}function Lc(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ko:return"Fragment";case Eo:return"Portal";case Oc:return"Profiler";case id:return"StrictMode";case Mc:return"Suspense";case Ic:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Kg:return(e.displayName||"Context")+".Consumer";case Gg:return(e._context.displayName||"Context")+".Provider";case ad:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ld:return t=e.displayName||null,t!==null?t:Lc(e.type)||"Memo";case hn:t=e._payload,e=e._init;try{return Lc(e(t))}catch{}}return null}function eS(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Lc(t);case 8:return t===id?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function On(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function qg(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function tS(e){var t=qg(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),o=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return r.call(this)},set:function(i){o=""+i,s.call(this,i)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return o},setValue:function(i){o=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ri(e){e._valueTracker||(e._valueTracker=tS(e))}function Qg(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),o="";return e&&(o=qg(e)?e.checked?"true":"false":e.value),e=o,e!==n?(t.setValue(e),!0):!1}function Yi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Dc(e,t){var n=t.checked;return ce({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function mp(e,t){var n=t.defaultValue==null?"":t.defaultValue,o=t.checked!=null?t.checked:t.defaultChecked;n=On(t.value!=null?t.value:n),e._wrapperState={initialChecked:o,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Xg(e,t){t=t.checked,t!=null&&sd(e,"checked",t,!1)}function Fc(e,t){Xg(e,t);var n=On(t.value),o=t.type;if(n!=null)o==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(o==="submit"||o==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?_c(e,t.type,n):t.hasOwnProperty("defaultValue")&&_c(e,t.type,On(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function hp(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var o=t.type;if(!(o!=="submit"&&o!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function _c(e,t,n){(t!=="number"||Yi(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Dr=Array.isArray;function Ho(e,t,n,o){if(e=e.options,t){t={};for(var r=0;r<n.length;r++)t["$"+n[r]]=!0;for(n=0;n<e.length;n++)r=t.hasOwnProperty("$"+e[n].value),e[n].selected!==r&&(e[n].selected=r),r&&o&&(e[n].defaultSelected=!0)}else{for(n=""+On(n),t=null,r=0;r<e.length;r++){if(e[r].value===n){e[r].selected=!0,o&&(e[r].defaultSelected=!0);return}t!==null||e[r].disabled||(t=e[r])}t!==null&&(t.selected=!0)}}function Uc(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(N(91));return ce({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function gp(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(N(92));if(Dr(n)){if(1<n.length)throw Error(N(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:On(n)}}function Zg(e,t){var n=On(t.value),o=On(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),o!=null&&(e.defaultValue=""+o)}function yp(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function ey(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Bc(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?ey(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var si,ty=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,o,r){MSApp.execUnsafeLocalFunction(function(){return e(t,n,o,r)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(si=si||document.createElement("div"),si.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=si.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function as(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var $r={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},nS=["Webkit","ms","Moz","O"];Object.keys($r).forEach(function(e){nS.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),$r[t]=$r[e]})});function ny(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||$r.hasOwnProperty(e)&&$r[e]?(""+t).trim():t+"px"}function oy(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var o=n.indexOf("--")===0,r=ny(n,t[n],o);n==="float"&&(n="cssFloat"),o?e.setProperty(n,r):e[n]=r}}var oS=ce({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Vc(e,t){if(t){if(oS[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(N(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(N(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(N(61))}if(t.style!=null&&typeof t.style!="object")throw Error(N(62))}}function Hc(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Wc=null;function cd(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var $c=null,Wo=null,$o=null;function vp(e){if(e=Bs(e)){if(typeof $c!="function")throw Error(N(280));var t=e.stateNode;t&&(t=za(t),$c(e.stateNode,e.type,t))}}function ry(e){Wo?$o?$o.push(e):$o=[e]:Wo=e}function sy(){if(Wo){var e=Wo,t=$o;if($o=Wo=null,vp(e),t)for(e=0;e<t.length;e++)vp(t[e])}}function iy(e,t){return e(t)}function ay(){}var Ol=!1;function ly(e,t,n){if(Ol)return e(t,n);Ol=!0;try{return iy(e,t,n)}finally{Ol=!1,(Wo!==null||$o!==null)&&(ay(),sy())}}function ls(e,t){var n=e.stateNode;if(n===null)return null;var o=za(n);if(o===null)return null;n=o[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(N(231,t,typeof n));return n}var zc=!1;if(Xt)try{var kr={};Object.defineProperty(kr,"passive",{get:function(){zc=!0}}),window.addEventListener("test",kr,kr),window.removeEventListener("test",kr,kr)}catch{zc=!1}function rS(e,t,n,o,r,s,i,a,l){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(u){this.onError(u)}}var zr=!1,qi=null,Qi=!1,Jc=null,sS={onError:function(e){zr=!0,qi=e}};function iS(e,t,n,o,r,s,i,a,l){zr=!1,qi=null,rS.apply(sS,arguments)}function aS(e,t,n,o,r,s,i,a,l){if(iS.apply(this,arguments),zr){if(zr){var c=qi;zr=!1,qi=null}else throw Error(N(198));Qi||(Qi=!0,Jc=c)}}function fo(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function cy(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function bp(e){if(fo(e)!==e)throw Error(N(188))}function lS(e){var t=e.alternate;if(!t){if(t=fo(e),t===null)throw Error(N(188));return t!==e?null:e}for(var n=e,o=t;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(o=r.return,o!==null){n=o;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return bp(r),e;if(s===o)return bp(r),t;s=s.sibling}throw Error(N(188))}if(n.return!==o.return)n=r,o=s;else{for(var i=!1,a=r.child;a;){if(a===n){i=!0,n=r,o=s;break}if(a===o){i=!0,o=r,n=s;break}a=a.sibling}if(!i){for(a=s.child;a;){if(a===n){i=!0,n=s,o=r;break}if(a===o){i=!0,o=s,n=r;break}a=a.sibling}if(!i)throw Error(N(189))}}if(n.alternate!==o)throw Error(N(190))}if(n.tag!==3)throw Error(N(188));return n.stateNode.current===n?e:t}function uy(e){return e=lS(e),e!==null?dy(e):null}function dy(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=dy(e);if(t!==null)return t;e=e.sibling}return null}var fy=ot.unstable_scheduleCallback,wp=ot.unstable_cancelCallback,cS=ot.unstable_shouldYield,uS=ot.unstable_requestPaint,pe=ot.unstable_now,dS=ot.unstable_getCurrentPriorityLevel,ud=ot.unstable_ImmediatePriority,py=ot.unstable_UserBlockingPriority,Xi=ot.unstable_NormalPriority,fS=ot.unstable_LowPriority,my=ot.unstable_IdlePriority,Va=null,It=null;function pS(e){if(It&&typeof It.onCommitFiberRoot=="function")try{It.onCommitFiberRoot(Va,e,void 0,(e.current.flags&128)===128)}catch{}}var Et=Math.clz32?Math.clz32:gS,mS=Math.log,hS=Math.LN2;function gS(e){return e>>>=0,e===0?32:31-(mS(e)/hS|0)|0}var ii=64,ai=4194304;function Fr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Zi(e,t){var n=e.pendingLanes;if(n===0)return 0;var o=0,r=e.suspendedLanes,s=e.pingedLanes,i=n&268435455;if(i!==0){var a=i&~r;a!==0?o=Fr(a):(s&=i,s!==0&&(o=Fr(s)))}else i=n&~r,i!==0?o=Fr(i):s!==0&&(o=Fr(s));if(o===0)return 0;if(t!==0&&t!==o&&!(t&r)&&(r=o&-o,s=t&-t,r>=s||r===16&&(s&4194240)!==0))return t;if(o&4&&(o|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=o;0<t;)n=31-Et(t),r=1<<n,o|=e[n],t&=~r;return o}function yS(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function vS(e,t){for(var n=e.suspendedLanes,o=e.pingedLanes,r=e.expirationTimes,s=e.pendingLanes;0<s;){var i=31-Et(s),a=1<<i,l=r[i];l===-1?(!(a&n)||a&o)&&(r[i]=yS(a,t)):l<=t&&(e.expiredLanes|=a),s&=~a}}function Gc(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function hy(){var e=ii;return ii<<=1,!(ii&4194240)&&(ii=64),e}function Ml(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function _s(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Et(t),e[t]=n}function bS(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var o=e.eventTimes;for(e=e.expirationTimes;0<n;){var r=31-Et(n),s=1<<r;t[r]=0,o[r]=-1,e[r]=-1,n&=~s}}function dd(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var o=31-Et(n),r=1<<o;r&t|e[o]&t&&(e[o]|=t),n&=~r}}var X=0;function gy(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var yy,fd,vy,by,wy,Kc=!1,li=[],Sn=null,Cn=null,En=null,cs=new Map,us=new Map,yn=[],wS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function xp(e,t){switch(e){case"focusin":case"focusout":Sn=null;break;case"dragenter":case"dragleave":Cn=null;break;case"mouseover":case"mouseout":En=null;break;case"pointerover":case"pointerout":cs.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":us.delete(t.pointerId)}}function jr(e,t,n,o,r,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:o,nativeEvent:s,targetContainers:[r]},t!==null&&(t=Bs(t),t!==null&&fd(t)),e):(e.eventSystemFlags|=o,t=e.targetContainers,r!==null&&t.indexOf(r)===-1&&t.push(r),e)}function xS(e,t,n,o,r){switch(t){case"focusin":return Sn=jr(Sn,e,t,n,o,r),!0;case"dragenter":return Cn=jr(Cn,e,t,n,o,r),!0;case"mouseover":return En=jr(En,e,t,n,o,r),!0;case"pointerover":var s=r.pointerId;return cs.set(s,jr(cs.get(s)||null,e,t,n,o,r)),!0;case"gotpointercapture":return s=r.pointerId,us.set(s,jr(us.get(s)||null,e,t,n,o,r)),!0}return!1}function xy(e){var t=qn(e.target);if(t!==null){var n=fo(t);if(n!==null){if(t=n.tag,t===13){if(t=cy(n),t!==null){e.blockedOn=t,wy(e.priority,function(){vy(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Mi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Yc(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var o=new n.constructor(n.type,n);Wc=o,n.target.dispatchEvent(o),Wc=null}else return t=Bs(n),t!==null&&fd(t),e.blockedOn=n,!1;t.shift()}return!0}function Sp(e,t,n){Mi(e)&&n.delete(t)}function SS(){Kc=!1,Sn!==null&&Mi(Sn)&&(Sn=null),Cn!==null&&Mi(Cn)&&(Cn=null),En!==null&&Mi(En)&&(En=null),cs.forEach(Sp),us.forEach(Sp)}function Pr(e,t){e.blockedOn===t&&(e.blockedOn=null,Kc||(Kc=!0,ot.unstable_scheduleCallback(ot.unstable_NormalPriority,SS)))}function ds(e){function t(r){return Pr(r,e)}if(0<li.length){Pr(li[0],e);for(var n=1;n<li.length;n++){var o=li[n];o.blockedOn===e&&(o.blockedOn=null)}}for(Sn!==null&&Pr(Sn,e),Cn!==null&&Pr(Cn,e),En!==null&&Pr(En,e),cs.forEach(t),us.forEach(t),n=0;n<yn.length;n++)o=yn[n],o.blockedOn===e&&(o.blockedOn=null);for(;0<yn.length&&(n=yn[0],n.blockedOn===null);)xy(n),n.blockedOn===null&&yn.shift()}var zo=ln.ReactCurrentBatchConfig,ea=!0;function CS(e,t,n,o){var r=X,s=zo.transition;zo.transition=null;try{X=1,pd(e,t,n,o)}finally{X=r,zo.transition=s}}function ES(e,t,n,o){var r=X,s=zo.transition;zo.transition=null;try{X=4,pd(e,t,n,o)}finally{X=r,zo.transition=s}}function pd(e,t,n,o){if(ea){var r=Yc(e,t,n,o);if(r===null)Wl(e,t,o,ta,n),xp(e,o);else if(xS(r,e,t,n,o))o.stopPropagation();else if(xp(e,o),t&4&&-1<wS.indexOf(e)){for(;r!==null;){var s=Bs(r);if(s!==null&&yy(s),s=Yc(e,t,n,o),s===null&&Wl(e,t,o,ta,n),s===r)break;r=s}r!==null&&o.stopPropagation()}else Wl(e,t,o,null,n)}}var ta=null;function Yc(e,t,n,o){if(ta=null,e=cd(o),e=qn(e),e!==null)if(t=fo(e),t===null)e=null;else if(n=t.tag,n===13){if(e=cy(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ta=e,null}function Sy(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(dS()){case ud:return 1;case py:return 4;case Xi:case fS:return 16;case my:return 536870912;default:return 16}default:return 16}}var bn=null,md=null,Ii=null;function Cy(){if(Ii)return Ii;var e,t=md,n=t.length,o,r="value"in bn?bn.value:bn.textContent,s=r.length;for(e=0;e<n&&t[e]===r[e];e++);var i=n-e;for(o=1;o<=i&&t[n-o]===r[s-o];o++);return Ii=r.slice(e,1<o?1-o:void 0)}function Li(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ci(){return!0}function Cp(){return!1}function it(e){function t(n,o,r,s,i){this._reactName=n,this._targetInst=r,this.type=o,this.nativeEvent=s,this.target=i,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ci:Cp,this.isPropagationStopped=Cp,this}return ce(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ci)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ci)},persist:function(){},isPersistent:ci}),t}var ur={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},hd=it(ur),Us=ce({},ur,{view:0,detail:0}),kS=it(Us),Il,Ll,Tr,Ha=ce({},Us,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:gd,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Tr&&(Tr&&e.type==="mousemove"?(Il=e.screenX-Tr.screenX,Ll=e.screenY-Tr.screenY):Ll=Il=0,Tr=e),Il)},movementY:function(e){return"movementY"in e?e.movementY:Ll}}),Ep=it(Ha),jS=ce({},Ha,{dataTransfer:0}),PS=it(jS),TS=ce({},Us,{relatedTarget:0}),Dl=it(TS),AS=ce({},ur,{animationName:0,elapsedTime:0,pseudoElement:0}),RS=it(AS),NS=ce({},ur,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),OS=it(NS),MS=ce({},ur,{data:0}),kp=it(MS),IS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},LS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},DS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function FS(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=DS[e])?!!t[e]:!1}function gd(){return FS}var _S=ce({},Us,{key:function(e){if(e.key){var t=IS[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Li(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?LS[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:gd,charCode:function(e){return e.type==="keypress"?Li(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Li(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),US=it(_S),BS=ce({},Ha,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),jp=it(BS),VS=ce({},Us,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:gd}),HS=it(VS),WS=ce({},ur,{propertyName:0,elapsedTime:0,pseudoElement:0}),$S=it(WS),zS=ce({},Ha,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),JS=it(zS),GS=[9,13,27,32],yd=Xt&&"CompositionEvent"in window,Jr=null;Xt&&"documentMode"in document&&(Jr=document.documentMode);var KS=Xt&&"TextEvent"in window&&!Jr,Ey=Xt&&(!yd||Jr&&8<Jr&&11>=Jr),Pp=" ",Tp=!1;function ky(e,t){switch(e){case"keyup":return GS.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function jy(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var jo=!1;function YS(e,t){switch(e){case"compositionend":return jy(t);case"keypress":return t.which!==32?null:(Tp=!0,Pp);case"textInput":return e=t.data,e===Pp&&Tp?null:e;default:return null}}function qS(e,t){if(jo)return e==="compositionend"||!yd&&ky(e,t)?(e=Cy(),Ii=md=bn=null,jo=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ey&&t.locale!=="ko"?null:t.data;default:return null}}var QS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ap(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!QS[e.type]:t==="textarea"}function Py(e,t,n,o){ry(o),t=na(t,"onChange"),0<t.length&&(n=new hd("onChange","change",null,n,o),e.push({event:n,listeners:t}))}var Gr=null,fs=null;function XS(e){_y(e,0)}function Wa(e){var t=Ao(e);if(Qg(t))return e}function ZS(e,t){if(e==="change")return t}var Ty=!1;if(Xt){var Fl;if(Xt){var _l="oninput"in document;if(!_l){var Rp=document.createElement("div");Rp.setAttribute("oninput","return;"),_l=typeof Rp.oninput=="function"}Fl=_l}else Fl=!1;Ty=Fl&&(!document.documentMode||9<document.documentMode)}function Np(){Gr&&(Gr.detachEvent("onpropertychange",Ay),fs=Gr=null)}function Ay(e){if(e.propertyName==="value"&&Wa(fs)){var t=[];Py(t,fs,e,cd(e)),ly(XS,t)}}function eC(e,t,n){e==="focusin"?(Np(),Gr=t,fs=n,Gr.attachEvent("onpropertychange",Ay)):e==="focusout"&&Np()}function tC(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Wa(fs)}function nC(e,t){if(e==="click")return Wa(t)}function oC(e,t){if(e==="input"||e==="change")return Wa(t)}function rC(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var jt=typeof Object.is=="function"?Object.is:rC;function ps(e,t){if(jt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),o=Object.keys(t);if(n.length!==o.length)return!1;for(o=0;o<n.length;o++){var r=n[o];if(!Nc.call(t,r)||!jt(e[r],t[r]))return!1}return!0}function Op(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Mp(e,t){var n=Op(e);e=0;for(var o;n;){if(n.nodeType===3){if(o=e+n.textContent.length,e<=t&&o>=t)return{node:n,offset:t-e};e=o}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Op(n)}}function Ry(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ry(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ny(){for(var e=window,t=Yi();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Yi(e.document)}return t}function vd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function sC(e){var t=Ny(),n=e.focusedElem,o=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Ry(n.ownerDocument.documentElement,n)){if(o!==null&&vd(n)){if(t=o.start,e=o.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var r=n.textContent.length,s=Math.min(o.start,r);o=o.end===void 0?s:Math.min(o.end,r),!e.extend&&s>o&&(r=o,o=s,s=r),r=Mp(n,s);var i=Mp(n,o);r&&i&&(e.rangeCount!==1||e.anchorNode!==r.node||e.anchorOffset!==r.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(t=t.createRange(),t.setStart(r.node,r.offset),e.removeAllRanges(),s>o?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var iC=Xt&&"documentMode"in document&&11>=document.documentMode,Po=null,qc=null,Kr=null,Qc=!1;function Ip(e,t,n){var o=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Qc||Po==null||Po!==Yi(o)||(o=Po,"selectionStart"in o&&vd(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Kr&&ps(Kr,o)||(Kr=o,o=na(qc,"onSelect"),0<o.length&&(t=new hd("onSelect","select",null,t,n),e.push({event:t,listeners:o}),t.target=Po)))}function ui(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var To={animationend:ui("Animation","AnimationEnd"),animationiteration:ui("Animation","AnimationIteration"),animationstart:ui("Animation","AnimationStart"),transitionend:ui("Transition","TransitionEnd")},Ul={},Oy={};Xt&&(Oy=document.createElement("div").style,"AnimationEvent"in window||(delete To.animationend.animation,delete To.animationiteration.animation,delete To.animationstart.animation),"TransitionEvent"in window||delete To.transitionend.transition);function $a(e){if(Ul[e])return Ul[e];if(!To[e])return e;var t=To[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Oy)return Ul[e]=t[n];return e}var My=$a("animationend"),Iy=$a("animationiteration"),Ly=$a("animationstart"),Dy=$a("transitionend"),Fy=new Map,Lp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function _n(e,t){Fy.set(e,t),uo(t,[e])}for(var Bl=0;Bl<Lp.length;Bl++){var Vl=Lp[Bl],aC=Vl.toLowerCase(),lC=Vl[0].toUpperCase()+Vl.slice(1);_n(aC,"on"+lC)}_n(My,"onAnimationEnd");_n(Iy,"onAnimationIteration");_n(Ly,"onAnimationStart");_n("dblclick","onDoubleClick");_n("focusin","onFocus");_n("focusout","onBlur");_n(Dy,"onTransitionEnd");Qo("onMouseEnter",["mouseout","mouseover"]);Qo("onMouseLeave",["mouseout","mouseover"]);Qo("onPointerEnter",["pointerout","pointerover"]);Qo("onPointerLeave",["pointerout","pointerover"]);uo("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));uo("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));uo("onBeforeInput",["compositionend","keypress","textInput","paste"]);uo("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));uo("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));uo("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var _r="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),cC=new Set("cancel close invalid load scroll toggle".split(" ").concat(_r));function Dp(e,t,n){var o=e.type||"unknown-event";e.currentTarget=n,aS(o,t,void 0,e),e.currentTarget=null}function _y(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var o=e[n],r=o.event;o=o.listeners;e:{var s=void 0;if(t)for(var i=o.length-1;0<=i;i--){var a=o[i],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Dp(r,a,c),s=l}else for(i=0;i<o.length;i++){if(a=o[i],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Dp(r,a,c),s=l}}}if(Qi)throw e=Jc,Qi=!1,Jc=null,e}function te(e,t){var n=t[nu];n===void 0&&(n=t[nu]=new Set);var o=e+"__bubble";n.has(o)||(Uy(t,e,2,!1),n.add(o))}function Hl(e,t,n){var o=0;t&&(o|=4),Uy(n,e,o,t)}var di="_reactListening"+Math.random().toString(36).slice(2);function ms(e){if(!e[di]){e[di]=!0,Jg.forEach(function(n){n!=="selectionchange"&&(cC.has(n)||Hl(n,!1,e),Hl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[di]||(t[di]=!0,Hl("selectionchange",!1,t))}}function Uy(e,t,n,o){switch(Sy(t)){case 1:var r=CS;break;case 4:r=ES;break;default:r=pd}n=r.bind(null,t,n,e),r=void 0,!zc||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(r=!0),o?r!==void 0?e.addEventListener(t,n,{capture:!0,passive:r}):e.addEventListener(t,n,!0):r!==void 0?e.addEventListener(t,n,{passive:r}):e.addEventListener(t,n,!1)}function Wl(e,t,n,o,r){var s=o;if(!(t&1)&&!(t&2)&&o!==null)e:for(;;){if(o===null)return;var i=o.tag;if(i===3||i===4){var a=o.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(i===4)for(i=o.return;i!==null;){var l=i.tag;if((l===3||l===4)&&(l=i.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;i=i.return}for(;a!==null;){if(i=qn(a),i===null)return;if(l=i.tag,l===5||l===6){o=s=i;continue e}a=a.parentNode}}o=o.return}ly(function(){var c=s,u=cd(n),f=[];e:{var p=Fy.get(e);if(p!==void 0){var y=hd,w=e;switch(e){case"keypress":if(Li(n)===0)break e;case"keydown":case"keyup":y=US;break;case"focusin":w="focus",y=Dl;break;case"focusout":w="blur",y=Dl;break;case"beforeblur":case"afterblur":y=Dl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=Ep;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=PS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=HS;break;case My:case Iy:case Ly:y=RS;break;case Dy:y=$S;break;case"scroll":y=kS;break;case"wheel":y=JS;break;case"copy":case"cut":case"paste":y=OS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=jp}var v=(t&4)!==0,x=!v&&e==="scroll",h=v?p!==null?p+"Capture":null:p;v=[];for(var g=c,b;g!==null;){b=g;var S=b.stateNode;if(b.tag===5&&S!==null&&(b=S,h!==null&&(S=ls(g,h),S!=null&&v.push(hs(g,S,b)))),x)break;g=g.return}0<v.length&&(p=new y(p,w,null,n,u),f.push({event:p,listeners:v}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",p&&n!==Wc&&(w=n.relatedTarget||n.fromElement)&&(qn(w)||w[Zt]))break e;if((y||p)&&(p=u.window===u?u:(p=u.ownerDocument)?p.defaultView||p.parentWindow:window,y?(w=n.relatedTarget||n.toElement,y=c,w=w?qn(w):null,w!==null&&(x=fo(w),w!==x||w.tag!==5&&w.tag!==6)&&(w=null)):(y=null,w=c),y!==w)){if(v=Ep,S="onMouseLeave",h="onMouseEnter",g="mouse",(e==="pointerout"||e==="pointerover")&&(v=jp,S="onPointerLeave",h="onPointerEnter",g="pointer"),x=y==null?p:Ao(y),b=w==null?p:Ao(w),p=new v(S,g+"leave",y,n,u),p.target=x,p.relatedTarget=b,S=null,qn(u)===c&&(v=new v(h,g+"enter",w,n,u),v.target=b,v.relatedTarget=x,S=v),x=S,y&&w)t:{for(v=y,h=w,g=0,b=v;b;b=bo(b))g++;for(b=0,S=h;S;S=bo(S))b++;for(;0<g-b;)v=bo(v),g--;for(;0<b-g;)h=bo(h),b--;for(;g--;){if(v===h||h!==null&&v===h.alternate)break t;v=bo(v),h=bo(h)}v=null}else v=null;y!==null&&Fp(f,p,y,v,!1),w!==null&&x!==null&&Fp(f,x,w,v,!0)}}e:{if(p=c?Ao(c):window,y=p.nodeName&&p.nodeName.toLowerCase(),y==="select"||y==="input"&&p.type==="file")var C=ZS;else if(Ap(p))if(Ty)C=oC;else{C=tC;var k=eC}else(y=p.nodeName)&&y.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(C=nC);if(C&&(C=C(e,c))){Py(f,C,n,u);break e}k&&k(e,p,c),e==="focusout"&&(k=p._wrapperState)&&k.controlled&&p.type==="number"&&_c(p,"number",p.value)}switch(k=c?Ao(c):window,e){case"focusin":(Ap(k)||k.contentEditable==="true")&&(Po=k,qc=c,Kr=null);break;case"focusout":Kr=qc=Po=null;break;case"mousedown":Qc=!0;break;case"contextmenu":case"mouseup":case"dragend":Qc=!1,Ip(f,n,u);break;case"selectionchange":if(iC)break;case"keydown":case"keyup":Ip(f,n,u)}var E;if(yd)e:{switch(e){case"compositionstart":var j="onCompositionStart";break e;case"compositionend":j="onCompositionEnd";break e;case"compositionupdate":j="onCompositionUpdate";break e}j=void 0}else jo?ky(e,n)&&(j="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(j="onCompositionStart");j&&(Ey&&n.locale!=="ko"&&(jo||j!=="onCompositionStart"?j==="onCompositionEnd"&&jo&&(E=Cy()):(bn=u,md="value"in bn?bn.value:bn.textContent,jo=!0)),k=na(c,j),0<k.length&&(j=new kp(j,e,null,n,u),f.push({event:j,listeners:k}),E?j.data=E:(E=jy(n),E!==null&&(j.data=E)))),(E=KS?YS(e,n):qS(e,n))&&(c=na(c,"onBeforeInput"),0<c.length&&(u=new kp("onBeforeInput","beforeinput",null,n,u),f.push({event:u,listeners:c}),u.data=E))}_y(f,t)})}function hs(e,t,n){return{instance:e,listener:t,currentTarget:n}}function na(e,t){for(var n=t+"Capture",o=[];e!==null;){var r=e,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=ls(e,n),s!=null&&o.unshift(hs(e,s,r)),s=ls(e,t),s!=null&&o.push(hs(e,s,r))),e=e.return}return o}function bo(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Fp(e,t,n,o,r){for(var s=t._reactName,i=[];n!==null&&n!==o;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===o)break;a.tag===5&&c!==null&&(a=c,r?(l=ls(n,s),l!=null&&i.unshift(hs(n,l,a))):r||(l=ls(n,s),l!=null&&i.push(hs(n,l,a)))),n=n.return}i.length!==0&&e.push({event:t,listeners:i})}var uC=/\r\n?/g,dC=/\u0000|\uFFFD/g;function _p(e){return(typeof e=="string"?e:""+e).replace(uC,`
`).replace(dC,"")}function fi(e,t,n){if(t=_p(t),_p(e)!==t&&n)throw Error(N(425))}function oa(){}var Xc=null,Zc=null;function eu(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var tu=typeof setTimeout=="function"?setTimeout:void 0,fC=typeof clearTimeout=="function"?clearTimeout:void 0,Up=typeof Promise=="function"?Promise:void 0,pC=typeof queueMicrotask=="function"?queueMicrotask:typeof Up<"u"?function(e){return Up.resolve(null).then(e).catch(mC)}:tu;function mC(e){setTimeout(function(){throw e})}function $l(e,t){var n=t,o=0;do{var r=n.nextSibling;if(e.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(o===0){e.removeChild(r),ds(t);return}o--}else n!=="$"&&n!=="$?"&&n!=="$!"||o++;n=r}while(n);ds(t)}function kn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Bp(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var dr=Math.random().toString(36).slice(2),Nt="__reactFiber$"+dr,gs="__reactProps$"+dr,Zt="__reactContainer$"+dr,nu="__reactEvents$"+dr,hC="__reactListeners$"+dr,gC="__reactHandles$"+dr;function qn(e){var t=e[Nt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Zt]||n[Nt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Bp(e);e!==null;){if(n=e[Nt])return n;e=Bp(e)}return t}e=n,n=e.parentNode}return null}function Bs(e){return e=e[Nt]||e[Zt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Ao(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(N(33))}function za(e){return e[gs]||null}var ou=[],Ro=-1;function Un(e){return{current:e}}function ne(e){0>Ro||(e.current=ou[Ro],ou[Ro]=null,Ro--)}function Z(e,t){Ro++,ou[Ro]=e.current,e.current=t}var Mn={},Me=Un(Mn),Ge=Un(!1),oo=Mn;function Xo(e,t){var n=e.type.contextTypes;if(!n)return Mn;var o=e.stateNode;if(o&&o.__reactInternalMemoizedUnmaskedChildContext===t)return o.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=t[s];return o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=r),r}function Ke(e){return e=e.childContextTypes,e!=null}function ra(){ne(Ge),ne(Me)}function Vp(e,t,n){if(Me.current!==Mn)throw Error(N(168));Z(Me,t),Z(Ge,n)}function By(e,t,n){var o=e.stateNode;if(t=t.childContextTypes,typeof o.getChildContext!="function")return n;o=o.getChildContext();for(var r in o)if(!(r in t))throw Error(N(108,eS(e)||"Unknown",r));return ce({},n,o)}function sa(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Mn,oo=Me.current,Z(Me,e),Z(Ge,Ge.current),!0}function Hp(e,t,n){var o=e.stateNode;if(!o)throw Error(N(169));n?(e=By(e,t,oo),o.__reactInternalMemoizedMergedChildContext=e,ne(Ge),ne(Me),Z(Me,e)):ne(Ge),Z(Ge,n)}var Jt=null,Ja=!1,zl=!1;function Vy(e){Jt===null?Jt=[e]:Jt.push(e)}function yC(e){Ja=!0,Vy(e)}function Bn(){if(!zl&&Jt!==null){zl=!0;var e=0,t=X;try{var n=Jt;for(X=1;e<n.length;e++){var o=n[e];do o=o(!0);while(o!==null)}Jt=null,Ja=!1}catch(r){throw Jt!==null&&(Jt=Jt.slice(e+1)),fy(ud,Bn),r}finally{X=t,zl=!1}}return null}var No=[],Oo=0,ia=null,aa=0,ut=[],dt=0,ro=null,Gt=1,Kt="";function Jn(e,t){No[Oo++]=aa,No[Oo++]=ia,ia=e,aa=t}function Hy(e,t,n){ut[dt++]=Gt,ut[dt++]=Kt,ut[dt++]=ro,ro=e;var o=Gt;e=Kt;var r=32-Et(o)-1;o&=~(1<<r),n+=1;var s=32-Et(t)+r;if(30<s){var i=r-r%5;s=(o&(1<<i)-1).toString(32),o>>=i,r-=i,Gt=1<<32-Et(t)+r|n<<r|o,Kt=s+e}else Gt=1<<s|n<<r|o,Kt=e}function bd(e){e.return!==null&&(Jn(e,1),Hy(e,1,0))}function wd(e){for(;e===ia;)ia=No[--Oo],No[Oo]=null,aa=No[--Oo],No[Oo]=null;for(;e===ro;)ro=ut[--dt],ut[dt]=null,Kt=ut[--dt],ut[dt]=null,Gt=ut[--dt],ut[dt]=null}var et=null,Ze=null,re=!1,Ct=null;function Wy(e,t){var n=ft(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Wp(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,et=e,Ze=kn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,et=e,Ze=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=ro!==null?{id:Gt,overflow:Kt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=ft(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,et=e,Ze=null,!0):!1;default:return!1}}function ru(e){return(e.mode&1)!==0&&(e.flags&128)===0}function su(e){if(re){var t=Ze;if(t){var n=t;if(!Wp(e,t)){if(ru(e))throw Error(N(418));t=kn(n.nextSibling);var o=et;t&&Wp(e,t)?Wy(o,n):(e.flags=e.flags&-4097|2,re=!1,et=e)}}else{if(ru(e))throw Error(N(418));e.flags=e.flags&-4097|2,re=!1,et=e}}}function $p(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;et=e}function pi(e){if(e!==et)return!1;if(!re)return $p(e),re=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!eu(e.type,e.memoizedProps)),t&&(t=Ze)){if(ru(e))throw $y(),Error(N(418));for(;t;)Wy(e,t),t=kn(t.nextSibling)}if($p(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(N(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ze=kn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ze=null}}else Ze=et?kn(e.stateNode.nextSibling):null;return!0}function $y(){for(var e=Ze;e;)e=kn(e.nextSibling)}function Zo(){Ze=et=null,re=!1}function xd(e){Ct===null?Ct=[e]:Ct.push(e)}var vC=ln.ReactCurrentBatchConfig;function Ar(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(N(309));var o=n.stateNode}if(!o)throw Error(N(147,e));var r=o,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(i){var a=r.refs;i===null?delete a[s]:a[s]=i},t._stringRef=s,t)}if(typeof e!="string")throw Error(N(284));if(!n._owner)throw Error(N(290,e))}return e}function mi(e,t){throw e=Object.prototype.toString.call(t),Error(N(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function zp(e){var t=e._init;return t(e._payload)}function zy(e){function t(h,g){if(e){var b=h.deletions;b===null?(h.deletions=[g],h.flags|=16):b.push(g)}}function n(h,g){if(!e)return null;for(;g!==null;)t(h,g),g=g.sibling;return null}function o(h,g){for(h=new Map;g!==null;)g.key!==null?h.set(g.key,g):h.set(g.index,g),g=g.sibling;return h}function r(h,g){return h=An(h,g),h.index=0,h.sibling=null,h}function s(h,g,b){return h.index=b,e?(b=h.alternate,b!==null?(b=b.index,b<g?(h.flags|=2,g):b):(h.flags|=2,g)):(h.flags|=1048576,g)}function i(h){return e&&h.alternate===null&&(h.flags|=2),h}function a(h,g,b,S){return g===null||g.tag!==6?(g=Xl(b,h.mode,S),g.return=h,g):(g=r(g,b),g.return=h,g)}function l(h,g,b,S){var C=b.type;return C===ko?u(h,g,b.props.children,S,b.key):g!==null&&(g.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===hn&&zp(C)===g.type)?(S=r(g,b.props),S.ref=Ar(h,g,b),S.return=h,S):(S=Hi(b.type,b.key,b.props,null,h.mode,S),S.ref=Ar(h,g,b),S.return=h,S)}function c(h,g,b,S){return g===null||g.tag!==4||g.stateNode.containerInfo!==b.containerInfo||g.stateNode.implementation!==b.implementation?(g=Zl(b,h.mode,S),g.return=h,g):(g=r(g,b.children||[]),g.return=h,g)}function u(h,g,b,S,C){return g===null||g.tag!==7?(g=to(b,h.mode,S,C),g.return=h,g):(g=r(g,b),g.return=h,g)}function f(h,g,b){if(typeof g=="string"&&g!==""||typeof g=="number")return g=Xl(""+g,h.mode,b),g.return=h,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case oi:return b=Hi(g.type,g.key,g.props,null,h.mode,b),b.ref=Ar(h,null,g),b.return=h,b;case Eo:return g=Zl(g,h.mode,b),g.return=h,g;case hn:var S=g._init;return f(h,S(g._payload),b)}if(Dr(g)||Er(g))return g=to(g,h.mode,b,null),g.return=h,g;mi(h,g)}return null}function p(h,g,b,S){var C=g!==null?g.key:null;if(typeof b=="string"&&b!==""||typeof b=="number")return C!==null?null:a(h,g,""+b,S);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case oi:return b.key===C?l(h,g,b,S):null;case Eo:return b.key===C?c(h,g,b,S):null;case hn:return C=b._init,p(h,g,C(b._payload),S)}if(Dr(b)||Er(b))return C!==null?null:u(h,g,b,S,null);mi(h,b)}return null}function y(h,g,b,S,C){if(typeof S=="string"&&S!==""||typeof S=="number")return h=h.get(b)||null,a(g,h,""+S,C);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case oi:return h=h.get(S.key===null?b:S.key)||null,l(g,h,S,C);case Eo:return h=h.get(S.key===null?b:S.key)||null,c(g,h,S,C);case hn:var k=S._init;return y(h,g,b,k(S._payload),C)}if(Dr(S)||Er(S))return h=h.get(b)||null,u(g,h,S,C,null);mi(g,S)}return null}function w(h,g,b,S){for(var C=null,k=null,E=g,j=g=0,R=null;E!==null&&j<b.length;j++){E.index>j?(R=E,E=null):R=E.sibling;var A=p(h,E,b[j],S);if(A===null){E===null&&(E=R);break}e&&E&&A.alternate===null&&t(h,E),g=s(A,g,j),k===null?C=A:k.sibling=A,k=A,E=R}if(j===b.length)return n(h,E),re&&Jn(h,j),C;if(E===null){for(;j<b.length;j++)E=f(h,b[j],S),E!==null&&(g=s(E,g,j),k===null?C=E:k.sibling=E,k=E);return re&&Jn(h,j),C}for(E=o(h,E);j<b.length;j++)R=y(E,h,j,b[j],S),R!==null&&(e&&R.alternate!==null&&E.delete(R.key===null?j:R.key),g=s(R,g,j),k===null?C=R:k.sibling=R,k=R);return e&&E.forEach(function(F){return t(h,F)}),re&&Jn(h,j),C}function v(h,g,b,S){var C=Er(b);if(typeof C!="function")throw Error(N(150));if(b=C.call(b),b==null)throw Error(N(151));for(var k=C=null,E=g,j=g=0,R=null,A=b.next();E!==null&&!A.done;j++,A=b.next()){E.index>j?(R=E,E=null):R=E.sibling;var F=p(h,E,A.value,S);if(F===null){E===null&&(E=R);break}e&&E&&F.alternate===null&&t(h,E),g=s(F,g,j),k===null?C=F:k.sibling=F,k=F,E=R}if(A.done)return n(h,E),re&&Jn(h,j),C;if(E===null){for(;!A.done;j++,A=b.next())A=f(h,A.value,S),A!==null&&(g=s(A,g,j),k===null?C=A:k.sibling=A,k=A);return re&&Jn(h,j),C}for(E=o(h,E);!A.done;j++,A=b.next())A=y(E,h,j,A.value,S),A!==null&&(e&&A.alternate!==null&&E.delete(A.key===null?j:A.key),g=s(A,g,j),k===null?C=A:k.sibling=A,k=A);return e&&E.forEach(function(_){return t(h,_)}),re&&Jn(h,j),C}function x(h,g,b,S){if(typeof b=="object"&&b!==null&&b.type===ko&&b.key===null&&(b=b.props.children),typeof b=="object"&&b!==null){switch(b.$$typeof){case oi:e:{for(var C=b.key,k=g;k!==null;){if(k.key===C){if(C=b.type,C===ko){if(k.tag===7){n(h,k.sibling),g=r(k,b.props.children),g.return=h,h=g;break e}}else if(k.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===hn&&zp(C)===k.type){n(h,k.sibling),g=r(k,b.props),g.ref=Ar(h,k,b),g.return=h,h=g;break e}n(h,k);break}else t(h,k);k=k.sibling}b.type===ko?(g=to(b.props.children,h.mode,S,b.key),g.return=h,h=g):(S=Hi(b.type,b.key,b.props,null,h.mode,S),S.ref=Ar(h,g,b),S.return=h,h=S)}return i(h);case Eo:e:{for(k=b.key;g!==null;){if(g.key===k)if(g.tag===4&&g.stateNode.containerInfo===b.containerInfo&&g.stateNode.implementation===b.implementation){n(h,g.sibling),g=r(g,b.children||[]),g.return=h,h=g;break e}else{n(h,g);break}else t(h,g);g=g.sibling}g=Zl(b,h.mode,S),g.return=h,h=g}return i(h);case hn:return k=b._init,x(h,g,k(b._payload),S)}if(Dr(b))return w(h,g,b,S);if(Er(b))return v(h,g,b,S);mi(h,b)}return typeof b=="string"&&b!==""||typeof b=="number"?(b=""+b,g!==null&&g.tag===6?(n(h,g.sibling),g=r(g,b),g.return=h,h=g):(n(h,g),g=Xl(b,h.mode,S),g.return=h,h=g),i(h)):n(h,g)}return x}var er=zy(!0),Jy=zy(!1),la=Un(null),ca=null,Mo=null,Sd=null;function Cd(){Sd=Mo=ca=null}function Ed(e){var t=la.current;ne(la),e._currentValue=t}function iu(e,t,n){for(;e!==null;){var o=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,o!==null&&(o.childLanes|=t)):o!==null&&(o.childLanes&t)!==t&&(o.childLanes|=t),e===n)break;e=e.return}}function Jo(e,t){ca=e,Sd=Mo=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Je=!0),e.firstContext=null)}function ht(e){var t=e._currentValue;if(Sd!==e)if(e={context:e,memoizedValue:t,next:null},Mo===null){if(ca===null)throw Error(N(308));Mo=e,ca.dependencies={lanes:0,firstContext:e}}else Mo=Mo.next=e;return t}var Qn=null;function kd(e){Qn===null?Qn=[e]:Qn.push(e)}function Gy(e,t,n,o){var r=t.interleaved;return r===null?(n.next=n,kd(t)):(n.next=r.next,r.next=n),t.interleaved=n,en(e,o)}function en(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var gn=!1;function jd(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ky(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Yt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function jn(e,t,n){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,Y&2){var r=o.pending;return r===null?t.next=t:(t.next=r.next,r.next=t),o.pending=t,en(e,n)}return r=o.interleaved,r===null?(t.next=t,kd(o)):(t.next=r.next,r.next=t),o.interleaved=t,en(e,n)}function Di(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var o=t.lanes;o&=e.pendingLanes,n|=o,t.lanes=n,dd(e,n)}}function Jp(e,t){var n=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,n===o)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var i={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=i:s=s.next=i,n=n.next}while(n!==null);s===null?r=s=t:s=s.next=t}else r=s=t;n={baseState:o.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:o.shared,effects:o.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ua(e,t,n,o){var r=e.updateQueue;gn=!1;var s=r.firstBaseUpdate,i=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,i===null?s=c:i.next=c,i=l;var u=e.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==i&&(a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=l))}if(s!==null){var f=r.baseState;i=0,u=c=l=null,a=s;do{var p=a.lane,y=a.eventTime;if((o&p)===p){u!==null&&(u=u.next={eventTime:y,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var w=e,v=a;switch(p=t,y=n,v.tag){case 1:if(w=v.payload,typeof w=="function"){f=w.call(y,f,p);break e}f=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=v.payload,p=typeof w=="function"?w.call(y,f,p):w,p==null)break e;f=ce({},f,p);break e;case 2:gn=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,p=r.effects,p===null?r.effects=[a]:p.push(a))}else y={eventTime:y,lane:p,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(c=u=y,l=f):u=u.next=y,i|=p;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;p=a,a=p.next,p.next=null,r.lastBaseUpdate=p,r.shared.pending=null}}while(!0);if(u===null&&(l=f),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=u,t=r.shared.interleaved,t!==null){r=t;do i|=r.lane,r=r.next;while(r!==t)}else s===null&&(r.shared.lanes=0);io|=i,e.lanes=i,e.memoizedState=f}}function Gp(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var o=e[t],r=o.callback;if(r!==null){if(o.callback=null,o=n,typeof r!="function")throw Error(N(191,r));r.call(o)}}}var Vs={},Lt=Un(Vs),ys=Un(Vs),vs=Un(Vs);function Xn(e){if(e===Vs)throw Error(N(174));return e}function Pd(e,t){switch(Z(vs,t),Z(ys,e),Z(Lt,Vs),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Bc(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Bc(t,e)}ne(Lt),Z(Lt,t)}function tr(){ne(Lt),ne(ys),ne(vs)}function Yy(e){Xn(vs.current);var t=Xn(Lt.current),n=Bc(t,e.type);t!==n&&(Z(ys,e),Z(Lt,n))}function Td(e){ys.current===e&&(ne(Lt),ne(ys))}var ie=Un(0);function da(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Jl=[];function Ad(){for(var e=0;e<Jl.length;e++)Jl[e]._workInProgressVersionPrimary=null;Jl.length=0}var Fi=ln.ReactCurrentDispatcher,Gl=ln.ReactCurrentBatchConfig,so=0,le=null,ve=null,xe=null,fa=!1,Yr=!1,bs=0,bC=0;function Pe(){throw Error(N(321))}function Rd(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!jt(e[n],t[n]))return!1;return!0}function Nd(e,t,n,o,r,s){if(so=s,le=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Fi.current=e===null||e.memoizedState===null?CC:EC,e=n(o,r),Yr){s=0;do{if(Yr=!1,bs=0,25<=s)throw Error(N(301));s+=1,xe=ve=null,t.updateQueue=null,Fi.current=kC,e=n(o,r)}while(Yr)}if(Fi.current=pa,t=ve!==null&&ve.next!==null,so=0,xe=ve=le=null,fa=!1,t)throw Error(N(300));return e}function Od(){var e=bs!==0;return bs=0,e}function Rt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return xe===null?le.memoizedState=xe=e:xe=xe.next=e,xe}function gt(){if(ve===null){var e=le.alternate;e=e!==null?e.memoizedState:null}else e=ve.next;var t=xe===null?le.memoizedState:xe.next;if(t!==null)xe=t,ve=e;else{if(e===null)throw Error(N(310));ve=e,e={memoizedState:ve.memoizedState,baseState:ve.baseState,baseQueue:ve.baseQueue,queue:ve.queue,next:null},xe===null?le.memoizedState=xe=e:xe=xe.next=e}return xe}function ws(e,t){return typeof t=="function"?t(e):t}function Kl(e){var t=gt(),n=t.queue;if(n===null)throw Error(N(311));n.lastRenderedReducer=e;var o=ve,r=o.baseQueue,s=n.pending;if(s!==null){if(r!==null){var i=r.next;r.next=s.next,s.next=i}o.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,o=o.baseState;var a=i=null,l=null,c=s;do{var u=c.lane;if((so&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),o=c.hasEagerState?c.eagerState:e(o,c.action);else{var f={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=f,i=o):l=l.next=f,le.lanes|=u,io|=u}c=c.next}while(c!==null&&c!==s);l===null?i=o:l.next=a,jt(o,t.memoizedState)||(Je=!0),t.memoizedState=o,t.baseState=i,t.baseQueue=l,n.lastRenderedState=o}if(e=n.interleaved,e!==null){r=e;do s=r.lane,le.lanes|=s,io|=s,r=r.next;while(r!==e)}else r===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Yl(e){var t=gt(),n=t.queue;if(n===null)throw Error(N(311));n.lastRenderedReducer=e;var o=n.dispatch,r=n.pending,s=t.memoizedState;if(r!==null){n.pending=null;var i=r=r.next;do s=e(s,i.action),i=i.next;while(i!==r);jt(s,t.memoizedState)||(Je=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,o]}function qy(){}function Qy(e,t){var n=le,o=gt(),r=t(),s=!jt(o.memoizedState,r);if(s&&(o.memoizedState=r,Je=!0),o=o.queue,Md(ev.bind(null,n,o,e),[e]),o.getSnapshot!==t||s||xe!==null&&xe.memoizedState.tag&1){if(n.flags|=2048,xs(9,Zy.bind(null,n,o,r,t),void 0,null),Se===null)throw Error(N(349));so&30||Xy(n,t,r)}return r}function Xy(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=le.updateQueue,t===null?(t={lastEffect:null,stores:null},le.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Zy(e,t,n,o){t.value=n,t.getSnapshot=o,tv(t)&&nv(e)}function ev(e,t,n){return n(function(){tv(t)&&nv(e)})}function tv(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!jt(e,n)}catch{return!0}}function nv(e){var t=en(e,1);t!==null&&kt(t,e,1,-1)}function Kp(e){var t=Rt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ws,lastRenderedState:e},t.queue=e,e=e.dispatch=SC.bind(null,le,e),[t.memoizedState,e]}function xs(e,t,n,o){return e={tag:e,create:t,destroy:n,deps:o,next:null},t=le.updateQueue,t===null?(t={lastEffect:null,stores:null},le.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(o=n.next,n.next=e,e.next=o,t.lastEffect=e)),e}function ov(){return gt().memoizedState}function _i(e,t,n,o){var r=Rt();le.flags|=e,r.memoizedState=xs(1|t,n,void 0,o===void 0?null:o)}function Ga(e,t,n,o){var r=gt();o=o===void 0?null:o;var s=void 0;if(ve!==null){var i=ve.memoizedState;if(s=i.destroy,o!==null&&Rd(o,i.deps)){r.memoizedState=xs(t,n,s,o);return}}le.flags|=e,r.memoizedState=xs(1|t,n,s,o)}function Yp(e,t){return _i(8390656,8,e,t)}function Md(e,t){return Ga(2048,8,e,t)}function rv(e,t){return Ga(4,2,e,t)}function sv(e,t){return Ga(4,4,e,t)}function iv(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function av(e,t,n){return n=n!=null?n.concat([e]):null,Ga(4,4,iv.bind(null,t,e),n)}function Id(){}function lv(e,t){var n=gt();t=t===void 0?null:t;var o=n.memoizedState;return o!==null&&t!==null&&Rd(t,o[1])?o[0]:(n.memoizedState=[e,t],e)}function cv(e,t){var n=gt();t=t===void 0?null:t;var o=n.memoizedState;return o!==null&&t!==null&&Rd(t,o[1])?o[0]:(e=e(),n.memoizedState=[e,t],e)}function uv(e,t,n){return so&21?(jt(n,t)||(n=hy(),le.lanes|=n,io|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Je=!0),e.memoizedState=n)}function wC(e,t){var n=X;X=n!==0&&4>n?n:4,e(!0);var o=Gl.transition;Gl.transition={};try{e(!1),t()}finally{X=n,Gl.transition=o}}function dv(){return gt().memoizedState}function xC(e,t,n){var o=Tn(e);if(n={lane:o,action:n,hasEagerState:!1,eagerState:null,next:null},fv(e))pv(t,n);else if(n=Gy(e,t,n,o),n!==null){var r=Ue();kt(n,e,o,r),mv(n,t,o)}}function SC(e,t,n){var o=Tn(e),r={lane:o,action:n,hasEagerState:!1,eagerState:null,next:null};if(fv(e))pv(t,r);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var i=t.lastRenderedState,a=s(i,n);if(r.hasEagerState=!0,r.eagerState=a,jt(a,i)){var l=t.interleaved;l===null?(r.next=r,kd(t)):(r.next=l.next,l.next=r),t.interleaved=r;return}}catch{}finally{}n=Gy(e,t,r,o),n!==null&&(r=Ue(),kt(n,e,o,r),mv(n,t,o))}}function fv(e){var t=e.alternate;return e===le||t!==null&&t===le}function pv(e,t){Yr=fa=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function mv(e,t,n){if(n&4194240){var o=t.lanes;o&=e.pendingLanes,n|=o,t.lanes=n,dd(e,n)}}var pa={readContext:ht,useCallback:Pe,useContext:Pe,useEffect:Pe,useImperativeHandle:Pe,useInsertionEffect:Pe,useLayoutEffect:Pe,useMemo:Pe,useReducer:Pe,useRef:Pe,useState:Pe,useDebugValue:Pe,useDeferredValue:Pe,useTransition:Pe,useMutableSource:Pe,useSyncExternalStore:Pe,useId:Pe,unstable_isNewReconciler:!1},CC={readContext:ht,useCallback:function(e,t){return Rt().memoizedState=[e,t===void 0?null:t],e},useContext:ht,useEffect:Yp,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,_i(4194308,4,iv.bind(null,t,e),n)},useLayoutEffect:function(e,t){return _i(4194308,4,e,t)},useInsertionEffect:function(e,t){return _i(4,2,e,t)},useMemo:function(e,t){var n=Rt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var o=Rt();return t=n!==void 0?n(t):t,o.memoizedState=o.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},o.queue=e,e=e.dispatch=xC.bind(null,le,e),[o.memoizedState,e]},useRef:function(e){var t=Rt();return e={current:e},t.memoizedState=e},useState:Kp,useDebugValue:Id,useDeferredValue:function(e){return Rt().memoizedState=e},useTransition:function(){var e=Kp(!1),t=e[0];return e=wC.bind(null,e[1]),Rt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var o=le,r=Rt();if(re){if(n===void 0)throw Error(N(407));n=n()}else{if(n=t(),Se===null)throw Error(N(349));so&30||Xy(o,t,n)}r.memoizedState=n;var s={value:n,getSnapshot:t};return r.queue=s,Yp(ev.bind(null,o,s,e),[e]),o.flags|=2048,xs(9,Zy.bind(null,o,s,n,t),void 0,null),n},useId:function(){var e=Rt(),t=Se.identifierPrefix;if(re){var n=Kt,o=Gt;n=(o&~(1<<32-Et(o)-1)).toString(32)+n,t=":"+t+"R"+n,n=bs++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=bC++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},EC={readContext:ht,useCallback:lv,useContext:ht,useEffect:Md,useImperativeHandle:av,useInsertionEffect:rv,useLayoutEffect:sv,useMemo:cv,useReducer:Kl,useRef:ov,useState:function(){return Kl(ws)},useDebugValue:Id,useDeferredValue:function(e){var t=gt();return uv(t,ve.memoizedState,e)},useTransition:function(){var e=Kl(ws)[0],t=gt().memoizedState;return[e,t]},useMutableSource:qy,useSyncExternalStore:Qy,useId:dv,unstable_isNewReconciler:!1},kC={readContext:ht,useCallback:lv,useContext:ht,useEffect:Md,useImperativeHandle:av,useInsertionEffect:rv,useLayoutEffect:sv,useMemo:cv,useReducer:Yl,useRef:ov,useState:function(){return Yl(ws)},useDebugValue:Id,useDeferredValue:function(e){var t=gt();return ve===null?t.memoizedState=e:uv(t,ve.memoizedState,e)},useTransition:function(){var e=Yl(ws)[0],t=gt().memoizedState;return[e,t]},useMutableSource:qy,useSyncExternalStore:Qy,useId:dv,unstable_isNewReconciler:!1};function xt(e,t){if(e&&e.defaultProps){t=ce({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function au(e,t,n,o){t=e.memoizedState,n=n(o,t),n=n==null?t:ce({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ka={isMounted:function(e){return(e=e._reactInternals)?fo(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var o=Ue(),r=Tn(e),s=Yt(o,r);s.payload=t,n!=null&&(s.callback=n),t=jn(e,s,r),t!==null&&(kt(t,e,r,o),Di(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var o=Ue(),r=Tn(e),s=Yt(o,r);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=jn(e,s,r),t!==null&&(kt(t,e,r,o),Di(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ue(),o=Tn(e),r=Yt(n,o);r.tag=2,t!=null&&(r.callback=t),t=jn(e,r,o),t!==null&&(kt(t,e,o,n),Di(t,e,o))}};function qp(e,t,n,o,r,s,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,s,i):t.prototype&&t.prototype.isPureReactComponent?!ps(n,o)||!ps(r,s):!0}function hv(e,t,n){var o=!1,r=Mn,s=t.contextType;return typeof s=="object"&&s!==null?s=ht(s):(r=Ke(t)?oo:Me.current,o=t.contextTypes,s=(o=o!=null)?Xo(e,r):Mn),t=new t(n,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ka,e.stateNode=t,t._reactInternals=e,o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=r,e.__reactInternalMemoizedMaskedChildContext=s),t}function Qp(e,t,n,o){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,o),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,o),t.state!==e&&Ka.enqueueReplaceState(t,t.state,null)}function lu(e,t,n,o){var r=e.stateNode;r.props=n,r.state=e.memoizedState,r.refs={},jd(e);var s=t.contextType;typeof s=="object"&&s!==null?r.context=ht(s):(s=Ke(t)?oo:Me.current,r.context=Xo(e,s)),r.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(au(e,t,s,n),r.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(t=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),t!==r.state&&Ka.enqueueReplaceState(r,r.state,null),ua(e,n,r,o),r.state=e.memoizedState),typeof r.componentDidMount=="function"&&(e.flags|=4194308)}function nr(e,t){try{var n="",o=t;do n+=Z1(o),o=o.return;while(o);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:r,digest:null}}function ql(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function cu(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var jC=typeof WeakMap=="function"?WeakMap:Map;function gv(e,t,n){n=Yt(-1,n),n.tag=3,n.payload={element:null};var o=t.value;return n.callback=function(){ha||(ha=!0,bu=o),cu(e,t)},n}function yv(e,t,n){n=Yt(-1,n),n.tag=3;var o=e.type.getDerivedStateFromError;if(typeof o=="function"){var r=t.value;n.payload=function(){return o(r)},n.callback=function(){cu(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){cu(e,t),typeof o!="function"&&(Pn===null?Pn=new Set([this]):Pn.add(this));var i=t.stack;this.componentDidCatch(t.value,{componentStack:i!==null?i:""})}),n}function Xp(e,t,n){var o=e.pingCache;if(o===null){o=e.pingCache=new jC;var r=new Set;o.set(t,r)}else r=o.get(t),r===void 0&&(r=new Set,o.set(t,r));r.has(n)||(r.add(n),e=BC.bind(null,e,t,n),t.then(e,e))}function Zp(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function em(e,t,n,o,r){return e.mode&1?(e.flags|=65536,e.lanes=r,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Yt(-1,1),t.tag=2,jn(n,t,1))),n.lanes|=1),e)}var PC=ln.ReactCurrentOwner,Je=!1;function Fe(e,t,n,o){t.child=e===null?Jy(t,null,n,o):er(t,e.child,n,o)}function tm(e,t,n,o,r){n=n.render;var s=t.ref;return Jo(t,r),o=Nd(e,t,n,o,s,r),n=Od(),e!==null&&!Je?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~r,tn(e,t,r)):(re&&n&&bd(t),t.flags|=1,Fe(e,t,o,r),t.child)}function nm(e,t,n,o,r){if(e===null){var s=n.type;return typeof s=="function"&&!Hd(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=s,vv(e,t,s,o,r)):(e=Hi(n.type,null,o,t,t.mode,r),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!(e.lanes&r)){var i=s.memoizedProps;if(n=n.compare,n=n!==null?n:ps,n(i,o)&&e.ref===t.ref)return tn(e,t,r)}return t.flags|=1,e=An(s,o),e.ref=t.ref,e.return=t,t.child=e}function vv(e,t,n,o,r){if(e!==null){var s=e.memoizedProps;if(ps(s,o)&&e.ref===t.ref)if(Je=!1,t.pendingProps=o=s,(e.lanes&r)!==0)e.flags&131072&&(Je=!0);else return t.lanes=e.lanes,tn(e,t,r)}return uu(e,t,n,o,r)}function bv(e,t,n){var o=t.pendingProps,r=o.children,s=e!==null?e.memoizedState:null;if(o.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Z(Lo,qe),qe|=n;else{if(!(n&1073741824))return e=s!==null?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Z(Lo,qe),qe|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},o=s!==null?s.baseLanes:n,Z(Lo,qe),qe|=o}else s!==null?(o=s.baseLanes|n,t.memoizedState=null):o=n,Z(Lo,qe),qe|=o;return Fe(e,t,r,n),t.child}function wv(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function uu(e,t,n,o,r){var s=Ke(n)?oo:Me.current;return s=Xo(t,s),Jo(t,r),n=Nd(e,t,n,o,s,r),o=Od(),e!==null&&!Je?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~r,tn(e,t,r)):(re&&o&&bd(t),t.flags|=1,Fe(e,t,n,r),t.child)}function om(e,t,n,o,r){if(Ke(n)){var s=!0;sa(t)}else s=!1;if(Jo(t,r),t.stateNode===null)Ui(e,t),hv(t,n,o),lu(t,n,o,r),o=!0;else if(e===null){var i=t.stateNode,a=t.memoizedProps;i.props=a;var l=i.context,c=n.contextType;typeof c=="object"&&c!==null?c=ht(c):(c=Ke(n)?oo:Me.current,c=Xo(t,c));var u=n.getDerivedStateFromProps,f=typeof u=="function"||typeof i.getSnapshotBeforeUpdate=="function";f||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(a!==o||l!==c)&&Qp(t,i,o,c),gn=!1;var p=t.memoizedState;i.state=p,ua(t,o,i,r),l=t.memoizedState,a!==o||p!==l||Ge.current||gn?(typeof u=="function"&&(au(t,n,u,o),l=t.memoizedState),(a=gn||qp(t,n,a,o,p,l,c))?(f||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=o,t.memoizedState=l),i.props=o,i.state=l,i.context=c,o=a):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),o=!1)}else{i=t.stateNode,Ky(e,t),a=t.memoizedProps,c=t.type===t.elementType?a:xt(t.type,a),i.props=c,f=t.pendingProps,p=i.context,l=n.contextType,typeof l=="object"&&l!==null?l=ht(l):(l=Ke(n)?oo:Me.current,l=Xo(t,l));var y=n.getDerivedStateFromProps;(u=typeof y=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(a!==f||p!==l)&&Qp(t,i,o,l),gn=!1,p=t.memoizedState,i.state=p,ua(t,o,i,r);var w=t.memoizedState;a!==f||p!==w||Ge.current||gn?(typeof y=="function"&&(au(t,n,y,o),w=t.memoizedState),(c=gn||qp(t,n,c,o,p,w,l)||!1)?(u||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(o,w,l),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(o,w,l)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=o,t.memoizedState=w),i.props=o,i.state=w,i.context=l,o=c):(typeof i.componentDidUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),o=!1)}return du(e,t,n,o,s,r)}function du(e,t,n,o,r,s){wv(e,t);var i=(t.flags&128)!==0;if(!o&&!i)return r&&Hp(t,n,!1),tn(e,t,s);o=t.stateNode,PC.current=t;var a=i&&typeof n.getDerivedStateFromError!="function"?null:o.render();return t.flags|=1,e!==null&&i?(t.child=er(t,e.child,null,s),t.child=er(t,null,a,s)):Fe(e,t,a,s),t.memoizedState=o.state,r&&Hp(t,n,!0),t.child}function xv(e){var t=e.stateNode;t.pendingContext?Vp(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Vp(e,t.context,!1),Pd(e,t.containerInfo)}function rm(e,t,n,o,r){return Zo(),xd(r),t.flags|=256,Fe(e,t,n,o),t.child}var fu={dehydrated:null,treeContext:null,retryLane:0};function pu(e){return{baseLanes:e,cachePool:null,transitions:null}}function Sv(e,t,n){var o=t.pendingProps,r=ie.current,s=!1,i=(t.flags&128)!==0,a;if((a=i)||(a=e!==null&&e.memoizedState===null?!1:(r&2)!==0),a?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(r|=1),Z(ie,r&1),e===null)return su(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(i=o.children,e=o.fallback,s?(o=t.mode,s=t.child,i={mode:"hidden",children:i},!(o&1)&&s!==null?(s.childLanes=0,s.pendingProps=i):s=Qa(i,o,0,null),e=to(e,o,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=pu(n),t.memoizedState=fu,e):Ld(t,i));if(r=e.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return TC(e,t,i,o,a,r,n);if(s){s=o.fallback,i=t.mode,r=e.child,a=r.sibling;var l={mode:"hidden",children:o.children};return!(i&1)&&t.child!==r?(o=t.child,o.childLanes=0,o.pendingProps=l,t.deletions=null):(o=An(r,l),o.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=An(a,s):(s=to(s,i,n,null),s.flags|=2),s.return=t,o.return=t,o.sibling=s,t.child=o,o=s,s=t.child,i=e.child.memoizedState,i=i===null?pu(n):{baseLanes:i.baseLanes|n,cachePool:null,transitions:i.transitions},s.memoizedState=i,s.childLanes=e.childLanes&~n,t.memoizedState=fu,o}return s=e.child,e=s.sibling,o=An(s,{mode:"visible",children:o.children}),!(t.mode&1)&&(o.lanes=n),o.return=t,o.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=o,t.memoizedState=null,o}function Ld(e,t){return t=Qa({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function hi(e,t,n,o){return o!==null&&xd(o),er(t,e.child,null,n),e=Ld(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function TC(e,t,n,o,r,s,i){if(n)return t.flags&256?(t.flags&=-257,o=ql(Error(N(422))),hi(e,t,i,o)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=o.fallback,r=t.mode,o=Qa({mode:"visible",children:o.children},r,0,null),s=to(s,r,i,null),s.flags|=2,o.return=t,s.return=t,o.sibling=s,t.child=o,t.mode&1&&er(t,e.child,null,i),t.child.memoizedState=pu(i),t.memoizedState=fu,s);if(!(t.mode&1))return hi(e,t,i,null);if(r.data==="$!"){if(o=r.nextSibling&&r.nextSibling.dataset,o)var a=o.dgst;return o=a,s=Error(N(419)),o=ql(s,o,void 0),hi(e,t,i,o)}if(a=(i&e.childLanes)!==0,Je||a){if(o=Se,o!==null){switch(i&-i){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(o.suspendedLanes|i)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,en(e,r),kt(o,e,r,-1))}return Vd(),o=ql(Error(N(421))),hi(e,t,i,o)}return r.data==="$?"?(t.flags|=128,t.child=e.child,t=VC.bind(null,e),r._reactRetry=t,null):(e=s.treeContext,Ze=kn(r.nextSibling),et=t,re=!0,Ct=null,e!==null&&(ut[dt++]=Gt,ut[dt++]=Kt,ut[dt++]=ro,Gt=e.id,Kt=e.overflow,ro=t),t=Ld(t,o.children),t.flags|=4096,t)}function sm(e,t,n){e.lanes|=t;var o=e.alternate;o!==null&&(o.lanes|=t),iu(e.return,t,n)}function Ql(e,t,n,o,r){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:o,tail:n,tailMode:r}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=o,s.tail=n,s.tailMode=r)}function Cv(e,t,n){var o=t.pendingProps,r=o.revealOrder,s=o.tail;if(Fe(e,t,o.children,n),o=ie.current,o&2)o=o&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&sm(e,n,t);else if(e.tag===19)sm(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}if(Z(ie,o),!(t.mode&1))t.memoizedState=null;else switch(r){case"forwards":for(n=t.child,r=null;n!==null;)e=n.alternate,e!==null&&da(e)===null&&(r=n),n=n.sibling;n=r,n===null?(r=t.child,t.child=null):(r=n.sibling,n.sibling=null),Ql(t,!1,r,n,s);break;case"backwards":for(n=null,r=t.child,t.child=null;r!==null;){if(e=r.alternate,e!==null&&da(e)===null){t.child=r;break}e=r.sibling,r.sibling=n,n=r,r=e}Ql(t,!0,n,null,s);break;case"together":Ql(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ui(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function tn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),io|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(N(153));if(t.child!==null){for(e=t.child,n=An(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=An(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function AC(e,t,n){switch(t.tag){case 3:xv(t),Zo();break;case 5:Yy(t);break;case 1:Ke(t.type)&&sa(t);break;case 4:Pd(t,t.stateNode.containerInfo);break;case 10:var o=t.type._context,r=t.memoizedProps.value;Z(la,o._currentValue),o._currentValue=r;break;case 13:if(o=t.memoizedState,o!==null)return o.dehydrated!==null?(Z(ie,ie.current&1),t.flags|=128,null):n&t.child.childLanes?Sv(e,t,n):(Z(ie,ie.current&1),e=tn(e,t,n),e!==null?e.sibling:null);Z(ie,ie.current&1);break;case 19:if(o=(n&t.childLanes)!==0,e.flags&128){if(o)return Cv(e,t,n);t.flags|=128}if(r=t.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),Z(ie,ie.current),o)break;return null;case 22:case 23:return t.lanes=0,bv(e,t,n)}return tn(e,t,n)}var Ev,mu,kv,jv;Ev=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};mu=function(){};kv=function(e,t,n,o){var r=e.memoizedProps;if(r!==o){e=t.stateNode,Xn(Lt.current);var s=null;switch(n){case"input":r=Dc(e,r),o=Dc(e,o),s=[];break;case"select":r=ce({},r,{value:void 0}),o=ce({},o,{value:void 0}),s=[];break;case"textarea":r=Uc(e,r),o=Uc(e,o),s=[];break;default:typeof r.onClick!="function"&&typeof o.onClick=="function"&&(e.onclick=oa)}Vc(n,o);var i;n=null;for(c in r)if(!o.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(i in a)a.hasOwnProperty(i)&&(n||(n={}),n[i]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(is.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in o){var l=o[c];if(a=r!=null?r[c]:void 0,o.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(i in a)!a.hasOwnProperty(i)||l&&l.hasOwnProperty(i)||(n||(n={}),n[i]="");for(i in l)l.hasOwnProperty(i)&&a[i]!==l[i]&&(n||(n={}),n[i]=l[i])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(is.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&te("scroll",e),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(t.updateQueue=c)&&(t.flags|=4)}};jv=function(e,t,n,o){n!==o&&(t.flags|=4)};function Rr(e,t){if(!re)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var o=null;n!==null;)n.alternate!==null&&(o=n),n=n.sibling;o===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function Te(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,o=0;if(t)for(var r=e.child;r!==null;)n|=r.lanes|r.childLanes,o|=r.subtreeFlags&14680064,o|=r.flags&14680064,r.return=e,r=r.sibling;else for(r=e.child;r!==null;)n|=r.lanes|r.childLanes,o|=r.subtreeFlags,o|=r.flags,r.return=e,r=r.sibling;return e.subtreeFlags|=o,e.childLanes=n,t}function RC(e,t,n){var o=t.pendingProps;switch(wd(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Te(t),null;case 1:return Ke(t.type)&&ra(),Te(t),null;case 3:return o=t.stateNode,tr(),ne(Ge),ne(Me),Ad(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(e===null||e.child===null)&&(pi(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ct!==null&&(Su(Ct),Ct=null))),mu(e,t),Te(t),null;case 5:Td(t);var r=Xn(vs.current);if(n=t.type,e!==null&&t.stateNode!=null)kv(e,t,n,o,r),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!o){if(t.stateNode===null)throw Error(N(166));return Te(t),null}if(e=Xn(Lt.current),pi(t)){o=t.stateNode,n=t.type;var s=t.memoizedProps;switch(o[Nt]=t,o[gs]=s,e=(t.mode&1)!==0,n){case"dialog":te("cancel",o),te("close",o);break;case"iframe":case"object":case"embed":te("load",o);break;case"video":case"audio":for(r=0;r<_r.length;r++)te(_r[r],o);break;case"source":te("error",o);break;case"img":case"image":case"link":te("error",o),te("load",o);break;case"details":te("toggle",o);break;case"input":mp(o,s),te("invalid",o);break;case"select":o._wrapperState={wasMultiple:!!s.multiple},te("invalid",o);break;case"textarea":gp(o,s),te("invalid",o)}Vc(n,s),r=null;for(var i in s)if(s.hasOwnProperty(i)){var a=s[i];i==="children"?typeof a=="string"?o.textContent!==a&&(s.suppressHydrationWarning!==!0&&fi(o.textContent,a,e),r=["children",a]):typeof a=="number"&&o.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&fi(o.textContent,a,e),r=["children",""+a]):is.hasOwnProperty(i)&&a!=null&&i==="onScroll"&&te("scroll",o)}switch(n){case"input":ri(o),hp(o,s,!0);break;case"textarea":ri(o),yp(o);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(o.onclick=oa)}o=r,t.updateQueue=o,o!==null&&(t.flags|=4)}else{i=r.nodeType===9?r:r.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=ey(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof o.is=="string"?e=i.createElement(n,{is:o.is}):(e=i.createElement(n),n==="select"&&(i=e,o.multiple?i.multiple=!0:o.size&&(i.size=o.size))):e=i.createElementNS(e,n),e[Nt]=t,e[gs]=o,Ev(e,t,!1,!1),t.stateNode=e;e:{switch(i=Hc(n,o),n){case"dialog":te("cancel",e),te("close",e),r=o;break;case"iframe":case"object":case"embed":te("load",e),r=o;break;case"video":case"audio":for(r=0;r<_r.length;r++)te(_r[r],e);r=o;break;case"source":te("error",e),r=o;break;case"img":case"image":case"link":te("error",e),te("load",e),r=o;break;case"details":te("toggle",e),r=o;break;case"input":mp(e,o),r=Dc(e,o),te("invalid",e);break;case"option":r=o;break;case"select":e._wrapperState={wasMultiple:!!o.multiple},r=ce({},o,{value:void 0}),te("invalid",e);break;case"textarea":gp(e,o),r=Uc(e,o),te("invalid",e);break;default:r=o}Vc(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?oy(e,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&ty(e,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&as(e,l):typeof l=="number"&&as(e,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(is.hasOwnProperty(s)?l!=null&&s==="onScroll"&&te("scroll",e):l!=null&&sd(e,s,l,i))}switch(n){case"input":ri(e),hp(e,o,!1);break;case"textarea":ri(e),yp(e);break;case"option":o.value!=null&&e.setAttribute("value",""+On(o.value));break;case"select":e.multiple=!!o.multiple,s=o.value,s!=null?Ho(e,!!o.multiple,s,!1):o.defaultValue!=null&&Ho(e,!!o.multiple,o.defaultValue,!0);break;default:typeof r.onClick=="function"&&(e.onclick=oa)}switch(n){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}}o&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Te(t),null;case 6:if(e&&t.stateNode!=null)jv(e,t,e.memoizedProps,o);else{if(typeof o!="string"&&t.stateNode===null)throw Error(N(166));if(n=Xn(vs.current),Xn(Lt.current),pi(t)){if(o=t.stateNode,n=t.memoizedProps,o[Nt]=t,(s=o.nodeValue!==n)&&(e=et,e!==null))switch(e.tag){case 3:fi(o.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&fi(o.nodeValue,n,(e.mode&1)!==0)}s&&(t.flags|=4)}else o=(n.nodeType===9?n:n.ownerDocument).createTextNode(o),o[Nt]=t,t.stateNode=o}return Te(t),null;case 13:if(ne(ie),o=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(re&&Ze!==null&&t.mode&1&&!(t.flags&128))$y(),Zo(),t.flags|=98560,s=!1;else if(s=pi(t),o!==null&&o.dehydrated!==null){if(e===null){if(!s)throw Error(N(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(N(317));s[Nt]=t}else Zo(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Te(t),s=!1}else Ct!==null&&(Su(Ct),Ct=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(o=o!==null,o!==(e!==null&&e.memoizedState!==null)&&o&&(t.child.flags|=8192,t.mode&1&&(e===null||ie.current&1?we===0&&(we=3):Vd())),t.updateQueue!==null&&(t.flags|=4),Te(t),null);case 4:return tr(),mu(e,t),e===null&&ms(t.stateNode.containerInfo),Te(t),null;case 10:return Ed(t.type._context),Te(t),null;case 17:return Ke(t.type)&&ra(),Te(t),null;case 19:if(ne(ie),s=t.memoizedState,s===null)return Te(t),null;if(o=(t.flags&128)!==0,i=s.rendering,i===null)if(o)Rr(s,!1);else{if(we!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(i=da(e),i!==null){for(t.flags|=128,Rr(s,!1),o=i.updateQueue,o!==null&&(t.updateQueue=o,t.flags|=4),t.subtreeFlags=0,o=n,n=t.child;n!==null;)s=n,e=o,s.flags&=14680066,i=s.alternate,i===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=i.childLanes,s.lanes=i.lanes,s.child=i.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=i.memoizedProps,s.memoizedState=i.memoizedState,s.updateQueue=i.updateQueue,s.type=i.type,e=i.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Z(ie,ie.current&1|2),t.child}e=e.sibling}s.tail!==null&&pe()>or&&(t.flags|=128,o=!0,Rr(s,!1),t.lanes=4194304)}else{if(!o)if(e=da(i),e!==null){if(t.flags|=128,o=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Rr(s,!0),s.tail===null&&s.tailMode==="hidden"&&!i.alternate&&!re)return Te(t),null}else 2*pe()-s.renderingStartTime>or&&n!==1073741824&&(t.flags|=128,o=!0,Rr(s,!1),t.lanes=4194304);s.isBackwards?(i.sibling=t.child,t.child=i):(n=s.last,n!==null?n.sibling=i:t.child=i,s.last=i)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=pe(),t.sibling=null,n=ie.current,Z(ie,o?n&1|2:n&1),t):(Te(t),null);case 22:case 23:return Bd(),o=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==o&&(t.flags|=8192),o&&t.mode&1?qe&1073741824&&(Te(t),t.subtreeFlags&6&&(t.flags|=8192)):Te(t),null;case 24:return null;case 25:return null}throw Error(N(156,t.tag))}function NC(e,t){switch(wd(t),t.tag){case 1:return Ke(t.type)&&ra(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return tr(),ne(Ge),ne(Me),Ad(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Td(t),null;case 13:if(ne(ie),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(N(340));Zo()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ne(ie),null;case 4:return tr(),null;case 10:return Ed(t.type._context),null;case 22:case 23:return Bd(),null;case 24:return null;default:return null}}var gi=!1,Re=!1,OC=typeof WeakSet=="function"?WeakSet:Set,U=null;function Io(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(o){de(e,t,o)}else n.current=null}function hu(e,t,n){try{n()}catch(o){de(e,t,o)}}var im=!1;function MC(e,t){if(Xc=ea,e=Ny(),vd(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var o=n.getSelection&&n.getSelection();if(o&&o.rangeCount!==0){n=o.anchorNode;var r=o.anchorOffset,s=o.focusNode;o=o.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var i=0,a=-1,l=-1,c=0,u=0,f=e,p=null;t:for(;;){for(var y;f!==n||r!==0&&f.nodeType!==3||(a=i+r),f!==s||o!==0&&f.nodeType!==3||(l=i+o),f.nodeType===3&&(i+=f.nodeValue.length),(y=f.firstChild)!==null;)p=f,f=y;for(;;){if(f===e)break t;if(p===n&&++c===r&&(a=i),p===s&&++u===o&&(l=i),(y=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=y}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Zc={focusedElem:e,selectionRange:n},ea=!1,U=t;U!==null;)if(t=U,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,U=e;else for(;U!==null;){t=U;try{var w=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var v=w.memoizedProps,x=w.memoizedState,h=t.stateNode,g=h.getSnapshotBeforeUpdate(t.elementType===t.type?v:xt(t.type,v),x);h.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var b=t.stateNode.containerInfo;b.nodeType===1?b.textContent="":b.nodeType===9&&b.documentElement&&b.removeChild(b.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(N(163))}}catch(S){de(t,t.return,S)}if(e=t.sibling,e!==null){e.return=t.return,U=e;break}U=t.return}return w=im,im=!1,w}function qr(e,t,n){var o=t.updateQueue;if(o=o!==null?o.lastEffect:null,o!==null){var r=o=o.next;do{if((r.tag&e)===e){var s=r.destroy;r.destroy=void 0,s!==void 0&&hu(t,n,s)}r=r.next}while(r!==o)}}function Ya(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var o=n.create;n.destroy=o()}n=n.next}while(n!==t)}}function gu(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Pv(e){var t=e.alternate;t!==null&&(e.alternate=null,Pv(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Nt],delete t[gs],delete t[nu],delete t[hC],delete t[gC])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Tv(e){return e.tag===5||e.tag===3||e.tag===4}function am(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Tv(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function yu(e,t,n){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=oa));else if(o!==4&&(e=e.child,e!==null))for(yu(e,t,n),e=e.sibling;e!==null;)yu(e,t,n),e=e.sibling}function vu(e,t,n){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(o!==4&&(e=e.child,e!==null))for(vu(e,t,n),e=e.sibling;e!==null;)vu(e,t,n),e=e.sibling}var Ce=null,St=!1;function un(e,t,n){for(n=n.child;n!==null;)Av(e,t,n),n=n.sibling}function Av(e,t,n){if(It&&typeof It.onCommitFiberUnmount=="function")try{It.onCommitFiberUnmount(Va,n)}catch{}switch(n.tag){case 5:Re||Io(n,t);case 6:var o=Ce,r=St;Ce=null,un(e,t,n),Ce=o,St=r,Ce!==null&&(St?(e=Ce,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ce.removeChild(n.stateNode));break;case 18:Ce!==null&&(St?(e=Ce,n=n.stateNode,e.nodeType===8?$l(e.parentNode,n):e.nodeType===1&&$l(e,n),ds(e)):$l(Ce,n.stateNode));break;case 4:o=Ce,r=St,Ce=n.stateNode.containerInfo,St=!0,un(e,t,n),Ce=o,St=r;break;case 0:case 11:case 14:case 15:if(!Re&&(o=n.updateQueue,o!==null&&(o=o.lastEffect,o!==null))){r=o=o.next;do{var s=r,i=s.destroy;s=s.tag,i!==void 0&&(s&2||s&4)&&hu(n,t,i),r=r.next}while(r!==o)}un(e,t,n);break;case 1:if(!Re&&(Io(n,t),o=n.stateNode,typeof o.componentWillUnmount=="function"))try{o.props=n.memoizedProps,o.state=n.memoizedState,o.componentWillUnmount()}catch(a){de(n,t,a)}un(e,t,n);break;case 21:un(e,t,n);break;case 22:n.mode&1?(Re=(o=Re)||n.memoizedState!==null,un(e,t,n),Re=o):un(e,t,n);break;default:un(e,t,n)}}function lm(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new OC),t.forEach(function(o){var r=HC.bind(null,e,o);n.has(o)||(n.add(o),o.then(r,r))})}}function bt(e,t){var n=t.deletions;if(n!==null)for(var o=0;o<n.length;o++){var r=n[o];try{var s=e,i=t,a=i;e:for(;a!==null;){switch(a.tag){case 5:Ce=a.stateNode,St=!1;break e;case 3:Ce=a.stateNode.containerInfo,St=!0;break e;case 4:Ce=a.stateNode.containerInfo,St=!0;break e}a=a.return}if(Ce===null)throw Error(N(160));Av(s,i,r),Ce=null,St=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){de(r,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Rv(t,e),t=t.sibling}function Rv(e,t){var n=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(bt(t,e),At(e),o&4){try{qr(3,e,e.return),Ya(3,e)}catch(v){de(e,e.return,v)}try{qr(5,e,e.return)}catch(v){de(e,e.return,v)}}break;case 1:bt(t,e),At(e),o&512&&n!==null&&Io(n,n.return);break;case 5:if(bt(t,e),At(e),o&512&&n!==null&&Io(n,n.return),e.flags&32){var r=e.stateNode;try{as(r,"")}catch(v){de(e,e.return,v)}}if(o&4&&(r=e.stateNode,r!=null)){var s=e.memoizedProps,i=n!==null?n.memoizedProps:s,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Xg(r,s),Hc(a,i);var c=Hc(a,s);for(i=0;i<l.length;i+=2){var u=l[i],f=l[i+1];u==="style"?oy(r,f):u==="dangerouslySetInnerHTML"?ty(r,f):u==="children"?as(r,f):sd(r,u,f,c)}switch(a){case"input":Fc(r,s);break;case"textarea":Zg(r,s);break;case"select":var p=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var y=s.value;y!=null?Ho(r,!!s.multiple,y,!1):p!==!!s.multiple&&(s.defaultValue!=null?Ho(r,!!s.multiple,s.defaultValue,!0):Ho(r,!!s.multiple,s.multiple?[]:"",!1))}r[gs]=s}catch(v){de(e,e.return,v)}}break;case 6:if(bt(t,e),At(e),o&4){if(e.stateNode===null)throw Error(N(162));r=e.stateNode,s=e.memoizedProps;try{r.nodeValue=s}catch(v){de(e,e.return,v)}}break;case 3:if(bt(t,e),At(e),o&4&&n!==null&&n.memoizedState.isDehydrated)try{ds(t.containerInfo)}catch(v){de(e,e.return,v)}break;case 4:bt(t,e),At(e);break;case 13:bt(t,e),At(e),r=e.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(_d=pe())),o&4&&lm(e);break;case 22:if(u=n!==null&&n.memoizedState!==null,e.mode&1?(Re=(c=Re)||u,bt(t,e),Re=c):bt(t,e),At(e),o&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!u&&e.mode&1)for(U=e,u=e.child;u!==null;){for(f=U=u;U!==null;){switch(p=U,y=p.child,p.tag){case 0:case 11:case 14:case 15:qr(4,p,p.return);break;case 1:Io(p,p.return);var w=p.stateNode;if(typeof w.componentWillUnmount=="function"){o=p,n=p.return;try{t=o,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch(v){de(o,n,v)}}break;case 5:Io(p,p.return);break;case 22:if(p.memoizedState!==null){um(f);continue}}y!==null?(y.return=p,U=y):um(f)}u=u.sibling}e:for(u=null,f=e;;){if(f.tag===5){if(u===null){u=f;try{r=f.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,i=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=ny("display",i))}catch(v){de(e,e.return,v)}}}else if(f.tag===6){if(u===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(v){de(e,e.return,v)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;u===f&&(u=null),f=f.return}u===f&&(u=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:bt(t,e),At(e),o&4&&lm(e);break;case 21:break;default:bt(t,e),At(e)}}function At(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Tv(n)){var o=n;break e}n=n.return}throw Error(N(160))}switch(o.tag){case 5:var r=o.stateNode;o.flags&32&&(as(r,""),o.flags&=-33);var s=am(e);vu(e,s,r);break;case 3:case 4:var i=o.stateNode.containerInfo,a=am(e);yu(e,a,i);break;default:throw Error(N(161))}}catch(l){de(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function IC(e,t,n){U=e,Nv(e)}function Nv(e,t,n){for(var o=(e.mode&1)!==0;U!==null;){var r=U,s=r.child;if(r.tag===22&&o){var i=r.memoizedState!==null||gi;if(!i){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Re;a=gi;var c=Re;if(gi=i,(Re=l)&&!c)for(U=r;U!==null;)i=U,l=i.child,i.tag===22&&i.memoizedState!==null?dm(r):l!==null?(l.return=i,U=l):dm(r);for(;s!==null;)U=s,Nv(s),s=s.sibling;U=r,gi=a,Re=c}cm(e)}else r.subtreeFlags&8772&&s!==null?(s.return=r,U=s):cm(e)}}function cm(e){for(;U!==null;){var t=U;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Re||Ya(5,t);break;case 1:var o=t.stateNode;if(t.flags&4&&!Re)if(n===null)o.componentDidMount();else{var r=t.elementType===t.type?n.memoizedProps:xt(t.type,n.memoizedProps);o.componentDidUpdate(r,n.memoizedState,o.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&Gp(t,s,o);break;case 3:var i=t.updateQueue;if(i!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Gp(t,i,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var f=u.dehydrated;f!==null&&ds(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(N(163))}Re||t.flags&512&&gu(t)}catch(p){de(t,t.return,p)}}if(t===e){U=null;break}if(n=t.sibling,n!==null){n.return=t.return,U=n;break}U=t.return}}function um(e){for(;U!==null;){var t=U;if(t===e){U=null;break}var n=t.sibling;if(n!==null){n.return=t.return,U=n;break}U=t.return}}function dm(e){for(;U!==null;){var t=U;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Ya(4,t)}catch(l){de(t,n,l)}break;case 1:var o=t.stateNode;if(typeof o.componentDidMount=="function"){var r=t.return;try{o.componentDidMount()}catch(l){de(t,r,l)}}var s=t.return;try{gu(t)}catch(l){de(t,s,l)}break;case 5:var i=t.return;try{gu(t)}catch(l){de(t,i,l)}}}catch(l){de(t,t.return,l)}if(t===e){U=null;break}var a=t.sibling;if(a!==null){a.return=t.return,U=a;break}U=t.return}}var LC=Math.ceil,ma=ln.ReactCurrentDispatcher,Dd=ln.ReactCurrentOwner,pt=ln.ReactCurrentBatchConfig,Y=0,Se=null,me=null,ke=0,qe=0,Lo=Un(0),we=0,Ss=null,io=0,qa=0,Fd=0,Qr=null,ze=null,_d=0,or=1/0,zt=null,ha=!1,bu=null,Pn=null,yi=!1,wn=null,ga=0,Xr=0,wu=null,Bi=-1,Vi=0;function Ue(){return Y&6?pe():Bi!==-1?Bi:Bi=pe()}function Tn(e){return e.mode&1?Y&2&&ke!==0?ke&-ke:vC.transition!==null?(Vi===0&&(Vi=hy()),Vi):(e=X,e!==0||(e=window.event,e=e===void 0?16:Sy(e.type)),e):1}function kt(e,t,n,o){if(50<Xr)throw Xr=0,wu=null,Error(N(185));_s(e,n,o),(!(Y&2)||e!==Se)&&(e===Se&&(!(Y&2)&&(qa|=n),we===4&&vn(e,ke)),Ye(e,o),n===1&&Y===0&&!(t.mode&1)&&(or=pe()+500,Ja&&Bn()))}function Ye(e,t){var n=e.callbackNode;vS(e,t);var o=Zi(e,e===Se?ke:0);if(o===0)n!==null&&wp(n),e.callbackNode=null,e.callbackPriority=0;else if(t=o&-o,e.callbackPriority!==t){if(n!=null&&wp(n),t===1)e.tag===0?yC(fm.bind(null,e)):Vy(fm.bind(null,e)),pC(function(){!(Y&6)&&Bn()}),n=null;else{switch(gy(o)){case 1:n=ud;break;case 4:n=py;break;case 16:n=Xi;break;case 536870912:n=my;break;default:n=Xi}n=Uv(n,Ov.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Ov(e,t){if(Bi=-1,Vi=0,Y&6)throw Error(N(327));var n=e.callbackNode;if(Go()&&e.callbackNode!==n)return null;var o=Zi(e,e===Se?ke:0);if(o===0)return null;if(o&30||o&e.expiredLanes||t)t=ya(e,o);else{t=o;var r=Y;Y|=2;var s=Iv();(Se!==e||ke!==t)&&(zt=null,or=pe()+500,eo(e,t));do try{_C();break}catch(a){Mv(e,a)}while(!0);Cd(),ma.current=s,Y=r,me!==null?t=0:(Se=null,ke=0,t=we)}if(t!==0){if(t===2&&(r=Gc(e),r!==0&&(o=r,t=xu(e,r))),t===1)throw n=Ss,eo(e,0),vn(e,o),Ye(e,pe()),n;if(t===6)vn(e,o);else{if(r=e.current.alternate,!(o&30)&&!DC(r)&&(t=ya(e,o),t===2&&(s=Gc(e),s!==0&&(o=s,t=xu(e,s))),t===1))throw n=Ss,eo(e,0),vn(e,o),Ye(e,pe()),n;switch(e.finishedWork=r,e.finishedLanes=o,t){case 0:case 1:throw Error(N(345));case 2:Gn(e,ze,zt);break;case 3:if(vn(e,o),(o&130023424)===o&&(t=_d+500-pe(),10<t)){if(Zi(e,0)!==0)break;if(r=e.suspendedLanes,(r&o)!==o){Ue(),e.pingedLanes|=e.suspendedLanes&r;break}e.timeoutHandle=tu(Gn.bind(null,e,ze,zt),t);break}Gn(e,ze,zt);break;case 4:if(vn(e,o),(o&4194240)===o)break;for(t=e.eventTimes,r=-1;0<o;){var i=31-Et(o);s=1<<i,i=t[i],i>r&&(r=i),o&=~s}if(o=r,o=pe()-o,o=(120>o?120:480>o?480:1080>o?1080:1920>o?1920:3e3>o?3e3:4320>o?4320:1960*LC(o/1960))-o,10<o){e.timeoutHandle=tu(Gn.bind(null,e,ze,zt),o);break}Gn(e,ze,zt);break;case 5:Gn(e,ze,zt);break;default:throw Error(N(329))}}}return Ye(e,pe()),e.callbackNode===n?Ov.bind(null,e):null}function xu(e,t){var n=Qr;return e.current.memoizedState.isDehydrated&&(eo(e,t).flags|=256),e=ya(e,t),e!==2&&(t=ze,ze=n,t!==null&&Su(t)),e}function Su(e){ze===null?ze=e:ze.push.apply(ze,e)}function DC(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var o=0;o<n.length;o++){var r=n[o],s=r.getSnapshot;r=r.value;try{if(!jt(s(),r))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function vn(e,t){for(t&=~Fd,t&=~qa,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Et(t),o=1<<n;e[n]=-1,t&=~o}}function fm(e){if(Y&6)throw Error(N(327));Go();var t=Zi(e,0);if(!(t&1))return Ye(e,pe()),null;var n=ya(e,t);if(e.tag!==0&&n===2){var o=Gc(e);o!==0&&(t=o,n=xu(e,o))}if(n===1)throw n=Ss,eo(e,0),vn(e,t),Ye(e,pe()),n;if(n===6)throw Error(N(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Gn(e,ze,zt),Ye(e,pe()),null}function Ud(e,t){var n=Y;Y|=1;try{return e(t)}finally{Y=n,Y===0&&(or=pe()+500,Ja&&Bn())}}function ao(e){wn!==null&&wn.tag===0&&!(Y&6)&&Go();var t=Y;Y|=1;var n=pt.transition,o=X;try{if(pt.transition=null,X=1,e)return e()}finally{X=o,pt.transition=n,Y=t,!(Y&6)&&Bn()}}function Bd(){qe=Lo.current,ne(Lo)}function eo(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,fC(n)),me!==null)for(n=me.return;n!==null;){var o=n;switch(wd(o),o.tag){case 1:o=o.type.childContextTypes,o!=null&&ra();break;case 3:tr(),ne(Ge),ne(Me),Ad();break;case 5:Td(o);break;case 4:tr();break;case 13:ne(ie);break;case 19:ne(ie);break;case 10:Ed(o.type._context);break;case 22:case 23:Bd()}n=n.return}if(Se=e,me=e=An(e.current,null),ke=qe=t,we=0,Ss=null,Fd=qa=io=0,ze=Qr=null,Qn!==null){for(t=0;t<Qn.length;t++)if(n=Qn[t],o=n.interleaved,o!==null){n.interleaved=null;var r=o.next,s=n.pending;if(s!==null){var i=s.next;s.next=r,o.next=i}n.pending=o}Qn=null}return e}function Mv(e,t){do{var n=me;try{if(Cd(),Fi.current=pa,fa){for(var o=le.memoizedState;o!==null;){var r=o.queue;r!==null&&(r.pending=null),o=o.next}fa=!1}if(so=0,xe=ve=le=null,Yr=!1,bs=0,Dd.current=null,n===null||n.return===null){we=1,Ss=t,me=null;break}e:{var s=e,i=n.return,a=n,l=t;if(t=ke,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=a,f=u.tag;if(!(u.mode&1)&&(f===0||f===11||f===15)){var p=u.alternate;p?(u.updateQueue=p.updateQueue,u.memoizedState=p.memoizedState,u.lanes=p.lanes):(u.updateQueue=null,u.memoizedState=null)}var y=Zp(i);if(y!==null){y.flags&=-257,em(y,i,a,s,t),y.mode&1&&Xp(s,c,t),t=y,l=c;var w=t.updateQueue;if(w===null){var v=new Set;v.add(l),t.updateQueue=v}else w.add(l);break e}else{if(!(t&1)){Xp(s,c,t),Vd();break e}l=Error(N(426))}}else if(re&&a.mode&1){var x=Zp(i);if(x!==null){!(x.flags&65536)&&(x.flags|=256),em(x,i,a,s,t),xd(nr(l,a));break e}}s=l=nr(l,a),we!==4&&(we=2),Qr===null?Qr=[s]:Qr.push(s),s=i;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var h=gv(s,l,t);Jp(s,h);break e;case 1:a=l;var g=s.type,b=s.stateNode;if(!(s.flags&128)&&(typeof g.getDerivedStateFromError=="function"||b!==null&&typeof b.componentDidCatch=="function"&&(Pn===null||!Pn.has(b)))){s.flags|=65536,t&=-t,s.lanes|=t;var S=yv(s,a,t);Jp(s,S);break e}}s=s.return}while(s!==null)}Dv(n)}catch(C){t=C,me===n&&n!==null&&(me=n=n.return);continue}break}while(!0)}function Iv(){var e=ma.current;return ma.current=pa,e===null?pa:e}function Vd(){(we===0||we===3||we===2)&&(we=4),Se===null||!(io&268435455)&&!(qa&268435455)||vn(Se,ke)}function ya(e,t){var n=Y;Y|=2;var o=Iv();(Se!==e||ke!==t)&&(zt=null,eo(e,t));do try{FC();break}catch(r){Mv(e,r)}while(!0);if(Cd(),Y=n,ma.current=o,me!==null)throw Error(N(261));return Se=null,ke=0,we}function FC(){for(;me!==null;)Lv(me)}function _C(){for(;me!==null&&!cS();)Lv(me)}function Lv(e){var t=_v(e.alternate,e,qe);e.memoizedProps=e.pendingProps,t===null?Dv(e):me=t,Dd.current=null}function Dv(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=NC(n,t),n!==null){n.flags&=32767,me=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{we=6,me=null;return}}else if(n=RC(n,t,qe),n!==null){me=n;return}if(t=t.sibling,t!==null){me=t;return}me=t=e}while(t!==null);we===0&&(we=5)}function Gn(e,t,n){var o=X,r=pt.transition;try{pt.transition=null,X=1,UC(e,t,n,o)}finally{pt.transition=r,X=o}return null}function UC(e,t,n,o){do Go();while(wn!==null);if(Y&6)throw Error(N(327));n=e.finishedWork;var r=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(N(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(bS(e,s),e===Se&&(me=Se=null,ke=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||yi||(yi=!0,Uv(Xi,function(){return Go(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=pt.transition,pt.transition=null;var i=X;X=1;var a=Y;Y|=4,Dd.current=null,MC(e,n),Rv(n,e),sC(Zc),ea=!!Xc,Zc=Xc=null,e.current=n,IC(n),uS(),Y=a,X=i,pt.transition=s}else e.current=n;if(yi&&(yi=!1,wn=e,ga=r),s=e.pendingLanes,s===0&&(Pn=null),pS(n.stateNode),Ye(e,pe()),t!==null)for(o=e.onRecoverableError,n=0;n<t.length;n++)r=t[n],o(r.value,{componentStack:r.stack,digest:r.digest});if(ha)throw ha=!1,e=bu,bu=null,e;return ga&1&&e.tag!==0&&Go(),s=e.pendingLanes,s&1?e===wu?Xr++:(Xr=0,wu=e):Xr=0,Bn(),null}function Go(){if(wn!==null){var e=gy(ga),t=pt.transition,n=X;try{if(pt.transition=null,X=16>e?16:e,wn===null)var o=!1;else{if(e=wn,wn=null,ga=0,Y&6)throw Error(N(331));var r=Y;for(Y|=4,U=e.current;U!==null;){var s=U,i=s.child;if(U.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(U=c;U!==null;){var u=U;switch(u.tag){case 0:case 11:case 15:qr(8,u,s)}var f=u.child;if(f!==null)f.return=u,U=f;else for(;U!==null;){u=U;var p=u.sibling,y=u.return;if(Pv(u),u===c){U=null;break}if(p!==null){p.return=y,U=p;break}U=y}}}var w=s.alternate;if(w!==null){var v=w.child;if(v!==null){w.child=null;do{var x=v.sibling;v.sibling=null,v=x}while(v!==null)}}U=s}}if(s.subtreeFlags&2064&&i!==null)i.return=s,U=i;else e:for(;U!==null;){if(s=U,s.flags&2048)switch(s.tag){case 0:case 11:case 15:qr(9,s,s.return)}var h=s.sibling;if(h!==null){h.return=s.return,U=h;break e}U=s.return}}var g=e.current;for(U=g;U!==null;){i=U;var b=i.child;if(i.subtreeFlags&2064&&b!==null)b.return=i,U=b;else e:for(i=g;U!==null;){if(a=U,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Ya(9,a)}}catch(C){de(a,a.return,C)}if(a===i){U=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,U=S;break e}U=a.return}}if(Y=r,Bn(),It&&typeof It.onPostCommitFiberRoot=="function")try{It.onPostCommitFiberRoot(Va,e)}catch{}o=!0}return o}finally{X=n,pt.transition=t}}return!1}function pm(e,t,n){t=nr(n,t),t=gv(e,t,1),e=jn(e,t,1),t=Ue(),e!==null&&(_s(e,1,t),Ye(e,t))}function de(e,t,n){if(e.tag===3)pm(e,e,n);else for(;t!==null;){if(t.tag===3){pm(t,e,n);break}else if(t.tag===1){var o=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Pn===null||!Pn.has(o))){e=nr(n,e),e=yv(t,e,1),t=jn(t,e,1),e=Ue(),t!==null&&(_s(t,1,e),Ye(t,e));break}}t=t.return}}function BC(e,t,n){var o=e.pingCache;o!==null&&o.delete(t),t=Ue(),e.pingedLanes|=e.suspendedLanes&n,Se===e&&(ke&n)===n&&(we===4||we===3&&(ke&130023424)===ke&&500>pe()-_d?eo(e,0):Fd|=n),Ye(e,t)}function Fv(e,t){t===0&&(e.mode&1?(t=ai,ai<<=1,!(ai&130023424)&&(ai=4194304)):t=1);var n=Ue();e=en(e,t),e!==null&&(_s(e,t,n),Ye(e,n))}function VC(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Fv(e,n)}function HC(e,t){var n=0;switch(e.tag){case 13:var o=e.stateNode,r=e.memoizedState;r!==null&&(n=r.retryLane);break;case 19:o=e.stateNode;break;default:throw Error(N(314))}o!==null&&o.delete(t),Fv(e,n)}var _v;_v=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ge.current)Je=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Je=!1,AC(e,t,n);Je=!!(e.flags&131072)}else Je=!1,re&&t.flags&1048576&&Hy(t,aa,t.index);switch(t.lanes=0,t.tag){case 2:var o=t.type;Ui(e,t),e=t.pendingProps;var r=Xo(t,Me.current);Jo(t,n),r=Nd(null,t,o,e,r,n);var s=Od();return t.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ke(o)?(s=!0,sa(t)):s=!1,t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,jd(t),r.updater=Ka,t.stateNode=r,r._reactInternals=t,lu(t,o,e,n),t=du(null,t,o,!0,s,n)):(t.tag=0,re&&s&&bd(t),Fe(null,t,r,n),t=t.child),t;case 16:o=t.elementType;e:{switch(Ui(e,t),e=t.pendingProps,r=o._init,o=r(o._payload),t.type=o,r=t.tag=$C(o),e=xt(o,e),r){case 0:t=uu(null,t,o,e,n);break e;case 1:t=om(null,t,o,e,n);break e;case 11:t=tm(null,t,o,e,n);break e;case 14:t=nm(null,t,o,xt(o.type,e),n);break e}throw Error(N(306,o,""))}return t;case 0:return o=t.type,r=t.pendingProps,r=t.elementType===o?r:xt(o,r),uu(e,t,o,r,n);case 1:return o=t.type,r=t.pendingProps,r=t.elementType===o?r:xt(o,r),om(e,t,o,r,n);case 3:e:{if(xv(t),e===null)throw Error(N(387));o=t.pendingProps,s=t.memoizedState,r=s.element,Ky(e,t),ua(t,o,null,n);var i=t.memoizedState;if(o=i.element,s.isDehydrated)if(s={element:o,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){r=nr(Error(N(423)),t),t=rm(e,t,o,n,r);break e}else if(o!==r){r=nr(Error(N(424)),t),t=rm(e,t,o,n,r);break e}else for(Ze=kn(t.stateNode.containerInfo.firstChild),et=t,re=!0,Ct=null,n=Jy(t,null,o,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Zo(),o===r){t=tn(e,t,n);break e}Fe(e,t,o,n)}t=t.child}return t;case 5:return Yy(t),e===null&&su(t),o=t.type,r=t.pendingProps,s=e!==null?e.memoizedProps:null,i=r.children,eu(o,r)?i=null:s!==null&&eu(o,s)&&(t.flags|=32),wv(e,t),Fe(e,t,i,n),t.child;case 6:return e===null&&su(t),null;case 13:return Sv(e,t,n);case 4:return Pd(t,t.stateNode.containerInfo),o=t.pendingProps,e===null?t.child=er(t,null,o,n):Fe(e,t,o,n),t.child;case 11:return o=t.type,r=t.pendingProps,r=t.elementType===o?r:xt(o,r),tm(e,t,o,r,n);case 7:return Fe(e,t,t.pendingProps,n),t.child;case 8:return Fe(e,t,t.pendingProps.children,n),t.child;case 12:return Fe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(o=t.type._context,r=t.pendingProps,s=t.memoizedProps,i=r.value,Z(la,o._currentValue),o._currentValue=i,s!==null)if(jt(s.value,i)){if(s.children===r.children&&!Ge.current){t=tn(e,t,n);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var a=s.dependencies;if(a!==null){i=s.child;for(var l=a.firstContext;l!==null;){if(l.context===o){if(s.tag===1){l=Yt(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),iu(s.return,n,t),a.lanes|=n;break}l=l.next}}else if(s.tag===10)i=s.type===t.type?null:s.child;else if(s.tag===18){if(i=s.return,i===null)throw Error(N(341));i.lanes|=n,a=i.alternate,a!==null&&(a.lanes|=n),iu(i,n,t),i=s.sibling}else i=s.child;if(i!==null)i.return=s;else for(i=s;i!==null;){if(i===t){i=null;break}if(s=i.sibling,s!==null){s.return=i.return,i=s;break}i=i.return}s=i}Fe(e,t,r.children,n),t=t.child}return t;case 9:return r=t.type,o=t.pendingProps.children,Jo(t,n),r=ht(r),o=o(r),t.flags|=1,Fe(e,t,o,n),t.child;case 14:return o=t.type,r=xt(o,t.pendingProps),r=xt(o.type,r),nm(e,t,o,r,n);case 15:return vv(e,t,t.type,t.pendingProps,n);case 17:return o=t.type,r=t.pendingProps,r=t.elementType===o?r:xt(o,r),Ui(e,t),t.tag=1,Ke(o)?(e=!0,sa(t)):e=!1,Jo(t,n),hv(t,o,r),lu(t,o,r,n),du(null,t,o,!0,e,n);case 19:return Cv(e,t,n);case 22:return bv(e,t,n)}throw Error(N(156,t.tag))};function Uv(e,t){return fy(e,t)}function WC(e,t,n,o){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ft(e,t,n,o){return new WC(e,t,n,o)}function Hd(e){return e=e.prototype,!(!e||!e.isReactComponent)}function $C(e){if(typeof e=="function")return Hd(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ad)return 11;if(e===ld)return 14}return 2}function An(e,t){var n=e.alternate;return n===null?(n=ft(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Hi(e,t,n,o,r,s){var i=2;if(o=e,typeof e=="function")Hd(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case ko:return to(n.children,r,s,t);case id:i=8,r|=8;break;case Oc:return e=ft(12,n,t,r|2),e.elementType=Oc,e.lanes=s,e;case Mc:return e=ft(13,n,t,r),e.elementType=Mc,e.lanes=s,e;case Ic:return e=ft(19,n,t,r),e.elementType=Ic,e.lanes=s,e;case Yg:return Qa(n,r,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Gg:i=10;break e;case Kg:i=9;break e;case ad:i=11;break e;case ld:i=14;break e;case hn:i=16,o=null;break e}throw Error(N(130,e==null?e:typeof e,""))}return t=ft(i,n,t,r),t.elementType=e,t.type=o,t.lanes=s,t}function to(e,t,n,o){return e=ft(7,e,o,t),e.lanes=n,e}function Qa(e,t,n,o){return e=ft(22,e,o,t),e.elementType=Yg,e.lanes=n,e.stateNode={isHidden:!1},e}function Xl(e,t,n){return e=ft(6,e,null,t),e.lanes=n,e}function Zl(e,t,n){return t=ft(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function zC(e,t,n,o,r){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ml(0),this.expirationTimes=Ml(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ml(0),this.identifierPrefix=o,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Wd(e,t,n,o,r,s,i,a,l){return e=new zC(e,t,n,a,l),t===1?(t=1,s===!0&&(t|=8)):t=0,s=ft(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:o,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},jd(s),e}function JC(e,t,n){var o=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Eo,key:o==null?null:""+o,children:e,containerInfo:t,implementation:n}}function Bv(e){if(!e)return Mn;e=e._reactInternals;e:{if(fo(e)!==e||e.tag!==1)throw Error(N(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ke(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(N(171))}if(e.tag===1){var n=e.type;if(Ke(n))return By(e,n,t)}return t}function Vv(e,t,n,o,r,s,i,a,l){return e=Wd(n,o,!0,e,r,s,i,a,l),e.context=Bv(null),n=e.current,o=Ue(),r=Tn(n),s=Yt(o,r),s.callback=t??null,jn(n,s,r),e.current.lanes=r,_s(e,r,o),Ye(e,o),e}function Xa(e,t,n,o){var r=t.current,s=Ue(),i=Tn(r);return n=Bv(n),t.context===null?t.context=n:t.pendingContext=n,t=Yt(s,i),t.payload={element:e},o=o===void 0?null:o,o!==null&&(t.callback=o),e=jn(r,t,i),e!==null&&(kt(e,r,i,s),Di(e,r,i)),i}function va(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function mm(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function $d(e,t){mm(e,t),(e=e.alternate)&&mm(e,t)}function GC(){return null}var Hv=typeof reportError=="function"?reportError:function(e){console.error(e)};function zd(e){this._internalRoot=e}Za.prototype.render=zd.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(N(409));Xa(e,t,null,null)};Za.prototype.unmount=zd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;ao(function(){Xa(null,e,null,null)}),t[Zt]=null}};function Za(e){this._internalRoot=e}Za.prototype.unstable_scheduleHydration=function(e){if(e){var t=by();e={blockedOn:null,target:e,priority:t};for(var n=0;n<yn.length&&t!==0&&t<yn[n].priority;n++);yn.splice(n,0,e),n===0&&xy(e)}};function Jd(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function el(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function hm(){}function KC(e,t,n,o,r){if(r){if(typeof o=="function"){var s=o;o=function(){var c=va(i);s.call(c)}}var i=Vv(t,o,e,0,null,!1,!1,"",hm);return e._reactRootContainer=i,e[Zt]=i.current,ms(e.nodeType===8?e.parentNode:e),ao(),i}for(;r=e.lastChild;)e.removeChild(r);if(typeof o=="function"){var a=o;o=function(){var c=va(l);a.call(c)}}var l=Wd(e,0,!1,null,null,!1,!1,"",hm);return e._reactRootContainer=l,e[Zt]=l.current,ms(e.nodeType===8?e.parentNode:e),ao(function(){Xa(t,l,n,o)}),l}function tl(e,t,n,o,r){var s=n._reactRootContainer;if(s){var i=s;if(typeof r=="function"){var a=r;r=function(){var l=va(i);a.call(l)}}Xa(t,i,e,r)}else i=KC(n,t,e,r,o);return va(i)}yy=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Fr(t.pendingLanes);n!==0&&(dd(t,n|1),Ye(t,pe()),!(Y&6)&&(or=pe()+500,Bn()))}break;case 13:ao(function(){var o=en(e,1);if(o!==null){var r=Ue();kt(o,e,1,r)}}),$d(e,1)}};fd=function(e){if(e.tag===13){var t=en(e,134217728);if(t!==null){var n=Ue();kt(t,e,134217728,n)}$d(e,134217728)}};vy=function(e){if(e.tag===13){var t=Tn(e),n=en(e,t);if(n!==null){var o=Ue();kt(n,e,t,o)}$d(e,t)}};by=function(){return X};wy=function(e,t){var n=X;try{return X=e,t()}finally{X=n}};$c=function(e,t,n){switch(t){case"input":if(Fc(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var o=n[t];if(o!==e&&o.form===e.form){var r=za(o);if(!r)throw Error(N(90));Qg(o),Fc(o,r)}}}break;case"textarea":Zg(e,n);break;case"select":t=n.value,t!=null&&Ho(e,!!n.multiple,t,!1)}};iy=Ud;ay=ao;var YC={usingClientEntryPoint:!1,Events:[Bs,Ao,za,ry,sy,Ud]},Nr={findFiberByHostInstance:qn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},qC={bundleType:Nr.bundleType,version:Nr.version,rendererPackageName:Nr.rendererPackageName,rendererConfig:Nr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ln.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=uy(e),e===null?null:e.stateNode},findFiberByHostInstance:Nr.findFiberByHostInstance||GC,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var vi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!vi.isDisabled&&vi.supportsFiber)try{Va=vi.inject(qC),It=vi}catch{}}st.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=YC;st.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Jd(t))throw Error(N(200));return JC(e,t,null,n)};st.createRoot=function(e,t){if(!Jd(e))throw Error(N(299));var n=!1,o="",r=Hv;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onRecoverableError!==void 0&&(r=t.onRecoverableError)),t=Wd(e,1,!1,null,null,n,!1,o,r),e[Zt]=t.current,ms(e.nodeType===8?e.parentNode:e),new zd(t)};st.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(N(188)):(e=Object.keys(e).join(","),Error(N(268,e)));return e=uy(t),e=e===null?null:e.stateNode,e};st.flushSync=function(e){return ao(e)};st.hydrate=function(e,t,n){if(!el(t))throw Error(N(200));return tl(null,e,t,!0,n)};st.hydrateRoot=function(e,t,n){if(!Jd(e))throw Error(N(405));var o=n!=null&&n.hydratedSources||null,r=!1,s="",i=Hv;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),t=Vv(t,null,e,1,n??null,r,!1,s,i),e[Zt]=t.current,ms(e),o)for(e=0;e<o.length;e++)n=o[e],r=n._getVersion,r=r(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,r]:t.mutableSourceEagerHydrationData.push(n,r);return new Za(t)};st.render=function(e,t,n){if(!el(t))throw Error(N(200));return tl(null,e,t,!1,n)};st.unmountComponentAtNode=function(e){if(!el(e))throw Error(N(40));return e._reactRootContainer?(ao(function(){tl(null,null,e,!1,function(){e._reactRootContainer=null,e[Zt]=null})}),!0):!1};st.unstable_batchedUpdates=Ud;st.unstable_renderSubtreeIntoContainer=function(e,t,n,o){if(!el(n))throw Error(N(200));if(e==null||e._reactInternals===void 0)throw Error(N(38));return tl(e,t,n,!1,o)};st.version="18.3.1-next-f1338f8080-20240426";function Wv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Wv)}catch(e){console.error(e)}}Wv(),Wg.exports=st;var nl=Wg.exports;const QC=Ng(nl);var gm=nl;Rc.createRoot=gm.createRoot,Rc.hydrateRoot=gm.hydrateRoot;/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Cs(){return Cs=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},Cs.apply(this,arguments)}var xn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(xn||(xn={}));const ym="popstate";function XC(e){e===void 0&&(e={});function t(o,r){let{pathname:s,search:i,hash:a}=o.location;return Cu("",{pathname:s,search:i,hash:a},r.state&&r.state.usr||null,r.state&&r.state.key||"default")}function n(o,r){return typeof r=="string"?r:ba(r)}return eE(t,n,null,e)}function he(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Gd(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function ZC(){return Math.random().toString(36).substr(2,8)}function vm(e,t){return{usr:e.state,key:e.key,idx:t}}function Cu(e,t,n,o){return n===void 0&&(n=null),Cs({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?fr(t):t,{state:n,key:t&&t.key||o||ZC()})}function ba(e){let{pathname:t="/",search:n="",hash:o=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),o&&o!=="#"&&(t+=o.charAt(0)==="#"?o:"#"+o),t}function fr(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let o=e.indexOf("?");o>=0&&(t.search=e.substr(o),e=e.substr(0,o)),e&&(t.pathname=e)}return t}function eE(e,t,n,o){o===void 0&&(o={});let{window:r=document.defaultView,v5Compat:s=!1}=o,i=r.history,a=xn.Pop,l=null,c=u();c==null&&(c=0,i.replaceState(Cs({},i.state,{idx:c}),""));function u(){return(i.state||{idx:null}).idx}function f(){a=xn.Pop;let x=u(),h=x==null?null:x-c;c=x,l&&l({action:a,location:v.location,delta:h})}function p(x,h){a=xn.Push;let g=Cu(v.location,x,h);c=u()+1;let b=vm(g,c),S=v.createHref(g);try{i.pushState(b,"",S)}catch(C){if(C instanceof DOMException&&C.name==="DataCloneError")throw C;r.location.assign(S)}s&&l&&l({action:a,location:v.location,delta:1})}function y(x,h){a=xn.Replace;let g=Cu(v.location,x,h);c=u();let b=vm(g,c),S=v.createHref(g);i.replaceState(b,"",S),s&&l&&l({action:a,location:v.location,delta:0})}function w(x){let h=r.location.origin!=="null"?r.location.origin:r.location.href,g=typeof x=="string"?x:ba(x);return g=g.replace(/ $/,"%20"),he(h,"No window.location.(origin|href) available to create URL for href: "+g),new URL(g,h)}let v={get action(){return a},get location(){return e(r,i)},listen(x){if(l)throw new Error("A history only accepts one active listener");return r.addEventListener(ym,f),l=x,()=>{r.removeEventListener(ym,f),l=null}},createHref(x){return t(r,x)},createURL:w,encodeLocation(x){let h=w(x);return{pathname:h.pathname,search:h.search,hash:h.hash}},push:p,replace:y,go(x){return i.go(x)}};return v}var bm;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(bm||(bm={}));function tE(e,t,n){return n===void 0&&(n="/"),nE(e,t,n)}function nE(e,t,n,o){let r=typeof t=="string"?fr(t):t,s=Kd(r.pathname||"/",n);if(s==null)return null;let i=$v(e);oE(i);let a=null;for(let l=0;a==null&&l<i.length;++l){let c=hE(s);a=fE(i[l],c)}return a}function $v(e,t,n,o){t===void 0&&(t=[]),n===void 0&&(n=[]),o===void 0&&(o="");let r=(s,i,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:i,route:s};l.relativePath.startsWith("/")&&(he(l.relativePath.startsWith(o),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+o+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(o.length));let c=Rn([o,l.relativePath]),u=n.concat(l);s.children&&s.children.length>0&&(he(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),$v(s.children,t,u,c)),!(s.path==null&&!s.index)&&t.push({path:c,score:uE(c,s.index),routesMeta:u})};return e.forEach((s,i)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))r(s,i);else for(let l of zv(s.path))r(s,i,l)}),t}function zv(e){let t=e.split("/");if(t.length===0)return[];let[n,...o]=t,r=n.endsWith("?"),s=n.replace(/\?$/,"");if(o.length===0)return r?[s,""]:[s];let i=zv(o.join("/")),a=[];return a.push(...i.map(l=>l===""?s:[s,l].join("/"))),r&&a.push(...i),a.map(l=>e.startsWith("/")&&l===""?"/":l)}function oE(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:dE(t.routesMeta.map(o=>o.childrenIndex),n.routesMeta.map(o=>o.childrenIndex)))}const rE=/^:[\w-]+$/,sE=3,iE=2,aE=1,lE=10,cE=-2,wm=e=>e==="*";function uE(e,t){let n=e.split("/"),o=n.length;return n.some(wm)&&(o+=cE),t&&(o+=iE),n.filter(r=>!wm(r)).reduce((r,s)=>r+(rE.test(s)?sE:s===""?aE:lE),o)}function dE(e,t){return e.length===t.length&&e.slice(0,-1).every((o,r)=>o===t[r])?e[e.length-1]-t[t.length-1]:0}function fE(e,t,n){let{routesMeta:o}=e,r={},s="/",i=[];for(let a=0;a<o.length;++a){let l=o[a],c=a===o.length-1,u=s==="/"?t:t.slice(s.length)||"/",f=pE({path:l.relativePath,caseSensitive:l.caseSensitive,end:c},u),p=l.route;if(!f)return null;Object.assign(r,f.params),i.push({params:r,pathname:Rn([s,f.pathname]),pathnameBase:wE(Rn([s,f.pathnameBase])),route:p}),f.pathnameBase!=="/"&&(s=Rn([s,f.pathnameBase]))}return i}function pE(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,o]=mE(e.path,e.caseSensitive,e.end),r=t.match(n);if(!r)return null;let s=r[0],i=s.replace(/(.)\/+$/,"$1"),a=r.slice(1);return{params:o.reduce((c,u,f)=>{let{paramName:p,isOptional:y}=u;if(p==="*"){let v=a[f]||"";i=s.slice(0,s.length-v.length).replace(/(.)\/+$/,"$1")}const w=a[f];return y&&!w?c[p]=void 0:c[p]=(w||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:i,pattern:e}}function mE(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Gd(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let o=[],r="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(i,a,l)=>(o.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(o.push({paramName:"*"}),r+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?r+="\\/*$":e!==""&&e!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,t?void 0:"i"),o]}function hE(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Gd(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Kd(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,o=e.charAt(n);return o&&o!=="/"?null:e.slice(n)||"/"}const gE=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,yE=e=>gE.test(e);function vE(e,t){t===void 0&&(t="/");let{pathname:n,search:o="",hash:r=""}=typeof e=="string"?fr(e):e,s;if(n)if(yE(n))s=n;else{if(n.includes("//")){let i=n;n=n.replace(/\/\/+/g,"/"),Gd(!1,"Pathnames cannot have embedded double slashes - normalizing "+(i+" -> "+n))}n.startsWith("/")?s=xm(n.substring(1),"/"):s=xm(n,t)}else s=t;return{pathname:s,search:xE(o),hash:SE(r)}}function xm(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(r=>{r===".."?n.length>1&&n.pop():r!=="."&&n.push(r)}),n.length>1?n.join("/"):"/"}function ec(e,t,n,o){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(o)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function bE(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Jv(e,t){let n=bE(e);return t?n.map((o,r)=>r===n.length-1?o.pathname:o.pathnameBase):n.map(o=>o.pathnameBase)}function Gv(e,t,n,o){o===void 0&&(o=!1);let r;typeof e=="string"?r=fr(e):(r=Cs({},e),he(!r.pathname||!r.pathname.includes("?"),ec("?","pathname","search",r)),he(!r.pathname||!r.pathname.includes("#"),ec("#","pathname","hash",r)),he(!r.search||!r.search.includes("#"),ec("#","search","hash",r)));let s=e===""||r.pathname==="",i=s?"/":r.pathname,a;if(i==null)a=n;else{let f=t.length-1;if(!o&&i.startsWith("..")){let p=i.split("/");for(;p[0]==="..";)p.shift(),f-=1;r.pathname=p.join("/")}a=f>=0?t[f]:"/"}let l=vE(r,a),c=i&&i!=="/"&&i.endsWith("/"),u=(s||i===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(c||u)&&(l.pathname+="/"),l}const Rn=e=>e.join("/").replace(/\/\/+/g,"/"),wE=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),xE=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,SE=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function CE(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Kv=["post","put","patch","delete"];new Set(Kv);const EE=["get",...Kv];new Set(EE);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Es(){return Es=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},Es.apply(this,arguments)}const Yd=m.createContext(null),kE=m.createContext(null),po=m.createContext(null),ol=m.createContext(null),Vn=m.createContext({outlet:null,matches:[],isDataRoute:!1}),Yv=m.createContext(null);function jE(e,t){let{relative:n}=t===void 0?{}:t;Hs()||he(!1);let{basename:o,navigator:r}=m.useContext(po),{hash:s,pathname:i,search:a}=Qv(e,{relative:n}),l=i;return o!=="/"&&(l=i==="/"?o:Rn([o,i])),r.createHref({pathname:l,search:a,hash:s})}function Hs(){return m.useContext(ol)!=null}function Hn(){return Hs()||he(!1),m.useContext(ol).location}function qv(e){m.useContext(po).static||m.useLayoutEffect(e)}function Ie(){let{isDataRoute:e}=m.useContext(Vn);return e?UE():PE()}function PE(){Hs()||he(!1);let e=m.useContext(Yd),{basename:t,future:n,navigator:o}=m.useContext(po),{matches:r}=m.useContext(Vn),{pathname:s}=Hn(),i=JSON.stringify(Jv(r,n.v7_relativeSplatPath)),a=m.useRef(!1);return qv(()=>{a.current=!0}),m.useCallback(function(c,u){if(u===void 0&&(u={}),!a.current)return;if(typeof c=="number"){o.go(c);return}let f=Gv(c,JSON.parse(i),s,u.relative==="path");e==null&&t!=="/"&&(f.pathname=f.pathname==="/"?t:Rn([t,f.pathname])),(u.replace?o.replace:o.push)(f,u.state,u)},[t,o,i,s,e])}function Wn(){let{matches:e}=m.useContext(Vn),t=e[e.length-1];return t?t.params:{}}function Qv(e,t){let{relative:n}=t===void 0?{}:t,{future:o}=m.useContext(po),{matches:r}=m.useContext(Vn),{pathname:s}=Hn(),i=JSON.stringify(Jv(r,o.v7_relativeSplatPath));return m.useMemo(()=>Gv(e,JSON.parse(i),s,n==="path"),[e,i,s,n])}function TE(e,t){return AE(e,t)}function AE(e,t,n,o){Hs()||he(!1);let{navigator:r}=m.useContext(po),{matches:s}=m.useContext(Vn),i=s[s.length-1],a=i?i.params:{};i&&i.pathname;let l=i?i.pathnameBase:"/";i&&i.route;let c=Hn(),u;if(t){var f;let x=typeof t=="string"?fr(t):t;l==="/"||(f=x.pathname)!=null&&f.startsWith(l)||he(!1),u=x}else u=c;let p=u.pathname||"/",y=p;if(l!=="/"){let x=l.replace(/^\//,"").split("/");y="/"+p.replace(/^\//,"").split("/").slice(x.length).join("/")}let w=tE(e,{pathname:y}),v=IE(w&&w.map(x=>Object.assign({},x,{params:Object.assign({},a,x.params),pathname:Rn([l,r.encodeLocation?r.encodeLocation(x.pathname).pathname:x.pathname]),pathnameBase:x.pathnameBase==="/"?l:Rn([l,r.encodeLocation?r.encodeLocation(x.pathnameBase).pathname:x.pathnameBase])})),s,n,o);return t&&v?m.createElement(ol.Provider,{value:{location:Es({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:xn.Pop}},v):v}function RE(){let e=_E(),t=CE(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return m.createElement(m.Fragment,null,m.createElement("h2",null,"Unexpected Application Error!"),m.createElement("h3",{style:{fontStyle:"italic"}},t),n?m.createElement("pre",{style:r},n):null,null)}const NE=m.createElement(RE,null);class OE extends m.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?m.createElement(Vn.Provider,{value:this.props.routeContext},m.createElement(Yv.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function ME(e){let{routeContext:t,match:n,children:o}=e,r=m.useContext(Yd);return r&&r.static&&r.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=n.route.id),m.createElement(Vn.Provider,{value:t},o)}function IE(e,t,n,o){var r;if(t===void 0&&(t=[]),n===void 0&&(n=null),o===void 0&&(o=null),e==null){var s;if(!n)return null;if(n.errors)e=n.matches;else if((s=o)!=null&&s.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let i=e,a=(r=n)==null?void 0:r.errors;if(a!=null){let u=i.findIndex(f=>f.route.id&&(a==null?void 0:a[f.route.id])!==void 0);u>=0||he(!1),i=i.slice(0,Math.min(i.length,u+1))}let l=!1,c=-1;if(n&&o&&o.v7_partialHydration)for(let u=0;u<i.length;u++){let f=i[u];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(c=u),f.route.id){let{loaderData:p,errors:y}=n,w=f.route.loader&&p[f.route.id]===void 0&&(!y||y[f.route.id]===void 0);if(f.route.lazy||w){l=!0,c>=0?i=i.slice(0,c+1):i=[i[0]];break}}}return i.reduceRight((u,f,p)=>{let y,w=!1,v=null,x=null;n&&(y=a&&f.route.id?a[f.route.id]:void 0,v=f.route.errorElement||NE,l&&(c<0&&p===0?(BE("route-fallback"),w=!0,x=null):c===p&&(w=!0,x=f.route.hydrateFallbackElement||null)));let h=t.concat(i.slice(0,p+1)),g=()=>{let b;return y?b=v:w?b=x:f.route.Component?b=m.createElement(f.route.Component,null):f.route.element?b=f.route.element:b=u,m.createElement(ME,{match:f,routeContext:{outlet:u,matches:h,isDataRoute:n!=null},children:b})};return n&&(f.route.ErrorBoundary||f.route.errorElement||p===0)?m.createElement(OE,{location:n.location,revalidation:n.revalidation,component:v,error:y,children:g(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):g()},null)}var Xv=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Xv||{}),Zv=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Zv||{});function LE(e){let t=m.useContext(Yd);return t||he(!1),t}function DE(e){let t=m.useContext(kE);return t||he(!1),t}function FE(e){let t=m.useContext(Vn);return t||he(!1),t}function eb(e){let t=FE(),n=t.matches[t.matches.length-1];return n.route.id||he(!1),n.route.id}function _E(){var e;let t=m.useContext(Yv),n=DE(),o=eb();return t!==void 0?t:(e=n.errors)==null?void 0:e[o]}function UE(){let{router:e}=LE(Xv.UseNavigateStable),t=eb(Zv.UseNavigateStable),n=m.useRef(!1);return qv(()=>{n.current=!0}),m.useCallback(function(r,s){s===void 0&&(s={}),n.current&&(typeof r=="number"?e.navigate(r):e.navigate(r,Es({fromRouteId:t},s)))},[e,t])}const Sm={};function BE(e,t,n){Sm[e]||(Sm[e]=!0)}function VE(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function be(e){he(!1)}function HE(e){let{basename:t="/",children:n=null,location:o,navigationType:r=xn.Pop,navigator:s,static:i=!1,future:a}=e;Hs()&&he(!1);let l=t.replace(/^\/*/,"/"),c=m.useMemo(()=>({basename:l,navigator:s,static:i,future:Es({v7_relativeSplatPath:!1},a)}),[l,a,s,i]);typeof o=="string"&&(o=fr(o));let{pathname:u="/",search:f="",hash:p="",state:y=null,key:w="default"}=o,v=m.useMemo(()=>{let x=Kd(u,l);return x==null?null:{location:{pathname:x,search:f,hash:p,state:y,key:w},navigationType:r}},[l,u,f,p,y,w,r]);return v==null?null:m.createElement(po.Provider,{value:c},m.createElement(ol.Provider,{children:n,value:v}))}function Ws(e){let{children:t,location:n}=e;return TE(Eu(t),n)}new Promise(()=>{});function Eu(e,t){t===void 0&&(t=[]);let n=[];return m.Children.forEach(e,(o,r)=>{if(!m.isValidElement(o))return;let s=[...t,r];if(o.type===m.Fragment){n.push.apply(n,Eu(o.props.children,s));return}o.type!==be&&he(!1),!o.props.index||!o.props.children||he(!1);let i={id:o.props.id||s.join("-"),caseSensitive:o.props.caseSensitive,element:o.props.element,Component:o.props.Component,index:o.props.index,path:o.props.path,loader:o.props.loader,action:o.props.action,errorElement:o.props.errorElement,ErrorBoundary:o.props.ErrorBoundary,hasErrorBoundary:o.props.ErrorBoundary!=null||o.props.errorElement!=null,shouldRevalidate:o.props.shouldRevalidate,handle:o.props.handle,lazy:o.props.lazy};o.props.children&&(i.children=Eu(o.props.children,s)),n.push(i)}),n}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ku(){return ku=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},ku.apply(this,arguments)}function WE(e,t){if(e==null)return{};var n={},o=Object.keys(e),r,s;for(s=0;s<o.length;s++)r=o[s],!(t.indexOf(r)>=0)&&(n[r]=e[r]);return n}function $E(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function zE(e,t){return e.button===0&&(!t||t==="_self")&&!$E(e)}const JE=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],GE="6";try{window.__reactRouterVersion=GE}catch{}const KE="startTransition",Cm=Ba[KE];function YE(e){let{basename:t,children:n,future:o,window:r}=e,s=m.useRef();s.current==null&&(s.current=XC({window:r,v5Compat:!0}));let i=s.current,[a,l]=m.useState({action:i.action,location:i.location}),{v7_startTransition:c}=o||{},u=m.useCallback(f=>{c&&Cm?Cm(()=>l(f)):l(f)},[l,c]);return m.useLayoutEffect(()=>i.listen(u),[i,u]),m.useEffect(()=>VE(o),[o]),m.createElement(HE,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:i,future:o})}const qE=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",QE=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Zr=m.forwardRef(function(t,n){let{onClick:o,relative:r,reloadDocument:s,replace:i,state:a,target:l,to:c,preventScrollReset:u,viewTransition:f}=t,p=WE(t,JE),{basename:y}=m.useContext(po),w,v=!1;if(typeof c=="string"&&QE.test(c)&&(w=c,qE))try{let b=new URL(window.location.href),S=c.startsWith("//")?new URL(b.protocol+c):new URL(c),C=Kd(S.pathname,y);S.origin===b.origin&&C!=null?c=C+S.search+S.hash:v=!0}catch{}let x=jE(c,{relative:r}),h=XE(c,{replace:i,state:a,target:l,preventScrollReset:u,relative:r,viewTransition:f});function g(b){o&&o(b),b.defaultPrevented||h(b)}return m.createElement("a",ku({},p,{href:w||x,onClick:v||s?o:g,ref:n,target:l}))});var Em;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Em||(Em={}));var km;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(km||(km={}));function XE(e,t){let{target:n,replace:o,state:r,preventScrollReset:s,relative:i,viewTransition:a}=t===void 0?{}:t,l=Ie(),c=Hn(),u=Qv(e,{relative:i});return m.useCallback(f=>{if(zE(f,n)){f.preventDefault();let p=o!==void 0?o:ba(c)===ba(u);l(e,{replace:p,state:r,preventScrollReset:s,relative:i,viewTransition:a})}},[c,l,u,o,r,n,e,s,i,a])}const qd=m.createContext({});function Qd(e){const t=m.useRef(null);return t.current===null&&(t.current=e()),t.current}const rl=m.createContext(null),Xd=m.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"});class ZE extends m.Component{getSnapshotBeforeUpdate(t){const n=this.props.childRef.current;if(n&&t.isPresent&&!this.props.isPresent){const o=this.props.sizeRef.current;o.height=n.offsetHeight||0,o.width=n.offsetWidth||0,o.top=n.offsetTop,o.left=n.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function ek({children:e,isPresent:t}){const n=m.useId(),o=m.useRef(null),r=m.useRef({width:0,height:0,top:0,left:0}),{nonce:s}=m.useContext(Xd);return m.useInsertionEffect(()=>{const{width:i,height:a,top:l,left:c}=r.current;if(t||!o.current||!i||!a)return;o.current.dataset.motionPopId=n;const u=document.createElement("style");return s&&(u.nonce=s),document.head.appendChild(u),u.sheet&&u.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${i}px !important;
            height: ${a}px !important;
            top: ${l}px !important;
            left: ${c}px !important;
          }
        `),()=>{document.head.removeChild(u)}},[t]),d.jsx(ZE,{isPresent:t,childRef:o,sizeRef:r,children:m.cloneElement(e,{ref:o})})}const tk=({children:e,initial:t,isPresent:n,onExitComplete:o,custom:r,presenceAffectsLayout:s,mode:i})=>{const a=Qd(nk),l=m.useId(),c=m.useCallback(f=>{a.set(f,!0);for(const p of a.values())if(!p)return;o&&o()},[a,o]),u=m.useMemo(()=>({id:l,initial:t,isPresent:n,custom:r,onExitComplete:c,register:f=>(a.set(f,!1),()=>a.delete(f))}),s?[Math.random(),c]:[n,c]);return m.useMemo(()=>{a.forEach((f,p)=>a.set(p,!1))},[n]),m.useEffect(()=>{!n&&!a.size&&o&&o()},[n]),i==="popLayout"&&(e=d.jsx(ek,{isPresent:n,children:e})),d.jsx(rl.Provider,{value:u,children:e})};function nk(){return new Map}function tb(e=!0){const t=m.useContext(rl);if(t===null)return[!0,null];const{isPresent:n,onExitComplete:o,register:r}=t,s=m.useId();m.useEffect(()=>{e&&r(s)},[e]);const i=m.useCallback(()=>e&&o&&o(s),[s,o,e]);return!n&&o?[!1,i]:[!0]}const bi=e=>e.key||"";function jm(e){const t=[];return m.Children.forEach(e,n=>{m.isValidElement(n)&&t.push(n)}),t}const Zd=typeof window<"u",nb=Zd?m.useLayoutEffect:m.useEffect,ob=({children:e,custom:t,initial:n=!0,onExitComplete:o,presenceAffectsLayout:r=!0,mode:s="sync",propagate:i=!1})=>{const[a,l]=tb(i),c=m.useMemo(()=>jm(e),[e]),u=i&&!a?[]:c.map(bi),f=m.useRef(!0),p=m.useRef(c),y=Qd(()=>new Map),[w,v]=m.useState(c),[x,h]=m.useState(c);nb(()=>{f.current=!1,p.current=c;for(let S=0;S<x.length;S++){const C=bi(x[S]);u.includes(C)?y.delete(C):y.get(C)!==!0&&y.set(C,!1)}},[x,u.length,u.join("-")]);const g=[];if(c!==w){let S=[...c];for(let C=0;C<x.length;C++){const k=x[C],E=bi(k);u.includes(E)||(S.splice(C,0,k),g.push(k))}s==="wait"&&g.length&&(S=g),h(jm(S)),v(c);return}const{forceRender:b}=m.useContext(qd);return d.jsx(d.Fragment,{children:x.map(S=>{const C=bi(S),k=i&&!a?!1:c===x||u.includes(C),E=()=>{if(y.has(C))y.set(C,!0);else return;let j=!0;y.forEach(R=>{R||(j=!1)}),j&&(b==null||b(),h(p.current),i&&(l==null||l()),o&&o())};return d.jsx(tk,{isPresent:k,initial:!f.current||n?void 0:!1,custom:k?void 0:t,presenceAffectsLayout:r,mode:s,onExitComplete:k?void 0:E,children:S},C)})})},tt=e=>e;let rb=tt;function ef(e){let t;return()=>(t===void 0&&(t=e()),t)}const rr=(e,t,n)=>{const o=t-e;return o===0?1:(n-e)/o},qt=e=>e*1e3,Qt=e=>e/1e3,ok={useManualTiming:!1};function rk(e){let t=new Set,n=new Set,o=!1,r=!1;const s=new WeakSet;let i={delta:0,timestamp:0,isProcessing:!1};function a(c){s.has(c)&&(l.schedule(c),e()),c(i)}const l={schedule:(c,u=!1,f=!1)=>{const y=f&&o?t:n;return u&&s.add(c),y.has(c)||y.add(c),c},cancel:c=>{n.delete(c),s.delete(c)},process:c=>{if(i=c,o){r=!0;return}o=!0,[t,n]=[n,t],t.forEach(a),t.clear(),o=!1,r&&(r=!1,l.process(c))}};return l}const wi=["read","resolveKeyframes","update","preRender","render","postRender"],sk=40;function sb(e,t){let n=!1,o=!0;const r={delta:0,timestamp:0,isProcessing:!1},s=()=>n=!0,i=wi.reduce((h,g)=>(h[g]=rk(s),h),{}),{read:a,resolveKeyframes:l,update:c,preRender:u,render:f,postRender:p}=i,y=()=>{const h=performance.now();n=!1,r.delta=o?1e3/60:Math.max(Math.min(h-r.timestamp,sk),1),r.timestamp=h,r.isProcessing=!0,a.process(r),l.process(r),c.process(r),u.process(r),f.process(r),p.process(r),r.isProcessing=!1,n&&t&&(o=!1,e(y))},w=()=>{n=!0,o=!0,r.isProcessing||e(y)};return{schedule:wi.reduce((h,g)=>{const b=i[g];return h[g]=(S,C=!1,k=!1)=>(n||w(),b.schedule(S,C,k)),h},{}),cancel:h=>{for(let g=0;g<wi.length;g++)i[wi[g]].cancel(h)},state:r,steps:i}}const{schedule:oe,cancel:In,state:Ee,steps:tc}=sb(typeof requestAnimationFrame<"u"?requestAnimationFrame:tt,!0),ib=m.createContext({strict:!1}),Pm={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},sr={};for(const e in Pm)sr[e]={isEnabled:t=>Pm[e].some(n=>!!t[n])};function ik(e){for(const t in e)sr[t]={...sr[t],...e[t]}}const ak=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function wa(e){return e.startsWith("while")||e.startsWith("drag")&&e!=="draggable"||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||ak.has(e)}let ab=e=>!wa(e);function lk(e){e&&(ab=t=>t.startsWith("on")?!wa(t):e(t))}try{lk(require("@emotion/is-prop-valid").default)}catch{}function ck(e,t,n){const o={};for(const r in e)r==="values"&&typeof e.values=="object"||(ab(r)||n===!0&&wa(r)||!t&&!wa(r)||e.draggable&&r.startsWith("onDrag"))&&(o[r]=e[r]);return o}function uk(e){if(typeof Proxy>"u")return e;const t=new Map,n=(...o)=>e(...o);return new Proxy(n,{get:(o,r)=>r==="create"?e:(t.has(r)||t.set(r,e(r)),t.get(r))})}const sl=m.createContext({});function ks(e){return typeof e=="string"||Array.isArray(e)}function il(e){return e!==null&&typeof e=="object"&&typeof e.start=="function"}const tf=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],nf=["initial",...tf];function al(e){return il(e.animate)||nf.some(t=>ks(e[t]))}function lb(e){return!!(al(e)||e.variants)}function dk(e,t){if(al(e)){const{initial:n,animate:o}=e;return{initial:n===!1||ks(n)?n:void 0,animate:ks(o)?o:void 0}}return e.inherit!==!1?t:{}}function fk(e){const{initial:t,animate:n}=dk(e,m.useContext(sl));return m.useMemo(()=>({initial:t,animate:n}),[Tm(t),Tm(n)])}function Tm(e){return Array.isArray(e)?e.join(" "):e}const pk=Symbol.for("motionComponentSymbol");function Do(e){return e&&typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}function mk(e,t,n){return m.useCallback(o=>{o&&e.onMount&&e.onMount(o),t&&(o?t.mount(o):t.unmount()),n&&(typeof n=="function"?n(o):Do(n)&&(n.current=o))},[t])}const of=e=>e.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),hk="framerAppearId",cb="data-"+of(hk),{schedule:rf}=sb(queueMicrotask,!1),ub=m.createContext({});function gk(e,t,n,o,r){var s,i;const{visualElement:a}=m.useContext(sl),l=m.useContext(ib),c=m.useContext(rl),u=m.useContext(Xd).reducedMotion,f=m.useRef(null);o=o||l.renderer,!f.current&&o&&(f.current=o(e,{visualState:t,parent:a,props:n,presenceContext:c,blockInitialAnimation:c?c.initial===!1:!1,reducedMotionConfig:u}));const p=f.current,y=m.useContext(ub);p&&!p.projection&&r&&(p.type==="html"||p.type==="svg")&&yk(f.current,n,r,y);const w=m.useRef(!1);m.useInsertionEffect(()=>{p&&w.current&&p.update(n,c)});const v=n[cb],x=m.useRef(!!v&&!(!((s=window.MotionHandoffIsComplete)===null||s===void 0)&&s.call(window,v))&&((i=window.MotionHasOptimisedAnimation)===null||i===void 0?void 0:i.call(window,v)));return nb(()=>{p&&(w.current=!0,window.MotionIsMounted=!0,p.updateFeatures(),rf.render(p.render),x.current&&p.animationState&&p.animationState.animateChanges())}),m.useEffect(()=>{p&&(!x.current&&p.animationState&&p.animationState.animateChanges(),x.current&&(queueMicrotask(()=>{var h;(h=window.MotionHandoffMarkAsComplete)===null||h===void 0||h.call(window,v)}),x.current=!1))}),p}function yk(e,t,n,o){const{layoutId:r,layout:s,drag:i,dragConstraints:a,layoutScroll:l,layoutRoot:c}=t;e.projection=new n(e.latestValues,t["data-framer-portal-id"]?void 0:db(e.parent)),e.projection.setOptions({layoutId:r,layout:s,alwaysMeasureLayout:!!i||a&&Do(a),visualElement:e,animationType:typeof s=="string"?s:"both",initialPromotionConfig:o,layoutScroll:l,layoutRoot:c})}function db(e){if(e)return e.options.allowProjection!==!1?e.projection:db(e.parent)}function vk({preloadedFeatures:e,createVisualElement:t,useRender:n,useVisualState:o,Component:r}){var s,i;e&&ik(e);function a(c,u){let f;const p={...m.useContext(Xd),...c,layoutId:bk(c)},{isStatic:y}=p,w=fk(c),v=o(c,y);if(!y&&Zd){wk();const x=xk(p);f=x.MeasureLayout,w.visualElement=gk(r,v,p,t,x.ProjectionNode)}return d.jsxs(sl.Provider,{value:w,children:[f&&w.visualElement?d.jsx(f,{visualElement:w.visualElement,...p}):null,n(r,c,mk(v,w.visualElement,u),v,y,w.visualElement)]})}a.displayName=`motion.${typeof r=="string"?r:`create(${(i=(s=r.displayName)!==null&&s!==void 0?s:r.name)!==null&&i!==void 0?i:""})`}`;const l=m.forwardRef(a);return l[pk]=r,l}function bk({layoutId:e}){const t=m.useContext(qd).id;return t&&e!==void 0?t+"-"+e:e}function wk(e,t){m.useContext(ib).strict}function xk(e){const{drag:t,layout:n}=sr;if(!t&&!n)return{};const o={...t,...n};return{MeasureLayout:t!=null&&t.isEnabled(e)||n!=null&&n.isEnabled(e)?o.MeasureLayout:void 0,ProjectionNode:o.ProjectionNode}}const Sk=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function sf(e){return typeof e!="string"||e.includes("-")?!1:!!(Sk.indexOf(e)>-1||/[A-Z]/u.test(e))}function Am(e){const t=[{},{}];return e==null||e.values.forEach((n,o)=>{t[0][o]=n.get(),t[1][o]=n.getVelocity()}),t}function af(e,t,n,o){if(typeof t=="function"){const[r,s]=Am(o);t=t(n!==void 0?n:e.custom,r,s)}if(typeof t=="string"&&(t=e.variants&&e.variants[t]),typeof t=="function"){const[r,s]=Am(o);t=t(n!==void 0?n:e.custom,r,s)}return t}const ju=e=>Array.isArray(e),Ck=e=>!!(e&&typeof e=="object"&&e.mix&&e.toValue),Ek=e=>ju(e)?e[e.length-1]||0:e,Oe=e=>!!(e&&e.getVelocity);function Wi(e){const t=Oe(e)?e.get():e;return Ck(t)?t.toValue():t}function kk({scrapeMotionValuesFromProps:e,createRenderState:t,onUpdate:n},o,r,s){const i={latestValues:jk(o,r,s,e),renderState:t()};return n&&(i.onMount=a=>n({props:o,current:a,...i}),i.onUpdate=a=>n(a)),i}const fb=e=>(t,n)=>{const o=m.useContext(sl),r=m.useContext(rl),s=()=>kk(e,t,o,r);return n?s():Qd(s)};function jk(e,t,n,o){const r={},s=o(e,{});for(const p in s)r[p]=Wi(s[p]);let{initial:i,animate:a}=e;const l=al(e),c=lb(e);t&&c&&!l&&e.inherit!==!1&&(i===void 0&&(i=t.initial),a===void 0&&(a=t.animate));let u=n?n.initial===!1:!1;u=u||i===!1;const f=u?a:i;if(f&&typeof f!="boolean"&&!il(f)){const p=Array.isArray(f)?f:[f];for(let y=0;y<p.length;y++){const w=af(e,p[y]);if(w){const{transitionEnd:v,transition:x,...h}=w;for(const g in h){let b=h[g];if(Array.isArray(b)){const S=u?b.length-1:0;b=b[S]}b!==null&&(r[g]=b)}for(const g in v)r[g]=v[g]}}}return r}const pr=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],mo=new Set(pr),pb=e=>t=>typeof t=="string"&&t.startsWith(e),mb=pb("--"),Pk=pb("var(--"),lf=e=>Pk(e)?Tk.test(e.split("/*")[0].trim()):!1,Tk=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,hb=(e,t)=>t&&typeof e=="number"?t.transform(e):e,nn=(e,t,n)=>n>t?t:n<e?e:n,mr={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},js={...mr,transform:e=>nn(0,1,e)},xi={...mr,default:1},$s=e=>({test:t=>typeof t=="string"&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),pn=$s("deg"),Dt=$s("%"),H=$s("px"),Ak=$s("vh"),Rk=$s("vw"),Rm={...Dt,parse:e=>Dt.parse(e)/100,transform:e=>Dt.transform(e*100)},Nk={borderWidth:H,borderTopWidth:H,borderRightWidth:H,borderBottomWidth:H,borderLeftWidth:H,borderRadius:H,radius:H,borderTopLeftRadius:H,borderTopRightRadius:H,borderBottomRightRadius:H,borderBottomLeftRadius:H,width:H,maxWidth:H,height:H,maxHeight:H,top:H,right:H,bottom:H,left:H,padding:H,paddingTop:H,paddingRight:H,paddingBottom:H,paddingLeft:H,margin:H,marginTop:H,marginRight:H,marginBottom:H,marginLeft:H,backgroundPositionX:H,backgroundPositionY:H},Ok={rotate:pn,rotateX:pn,rotateY:pn,rotateZ:pn,scale:xi,scaleX:xi,scaleY:xi,scaleZ:xi,skew:pn,skewX:pn,skewY:pn,distance:H,translateX:H,translateY:H,translateZ:H,x:H,y:H,z:H,perspective:H,transformPerspective:H,opacity:js,originX:Rm,originY:Rm,originZ:H},Nm={...mr,transform:Math.round},cf={...Nk,...Ok,zIndex:Nm,size:H,fillOpacity:js,strokeOpacity:js,numOctaves:Nm},Mk={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},Ik=pr.length;function Lk(e,t,n){let o="",r=!0;for(let s=0;s<Ik;s++){const i=pr[s],a=e[i];if(a===void 0)continue;let l=!0;if(typeof a=="number"?l=a===(i.startsWith("scale")?1:0):l=parseFloat(a)===0,!l||n){const c=hb(a,cf[i]);if(!l){r=!1;const u=Mk[i]||i;o+=`${u}(${c}) `}n&&(t[i]=c)}}return o=o.trim(),n?o=n(t,r?"":o):r&&(o="none"),o}function uf(e,t,n){const{style:o,vars:r,transformOrigin:s}=e;let i=!1,a=!1;for(const l in t){const c=t[l];if(mo.has(l)){i=!0;continue}else if(mb(l)){r[l]=c;continue}else{const u=hb(c,cf[l]);l.startsWith("origin")?(a=!0,s[l]=u):o[l]=u}}if(t.transform||(i||n?o.transform=Lk(t,e.transform,n):o.transform&&(o.transform="none")),a){const{originX:l="50%",originY:c="50%",originZ:u=0}=s;o.transformOrigin=`${l} ${c} ${u}`}}const Dk={offset:"stroke-dashoffset",array:"stroke-dasharray"},Fk={offset:"strokeDashoffset",array:"strokeDasharray"};function _k(e,t,n=1,o=0,r=!0){e.pathLength=1;const s=r?Dk:Fk;e[s.offset]=H.transform(-o);const i=H.transform(t),a=H.transform(n);e[s.array]=`${i} ${a}`}function Om(e,t,n){return typeof e=="string"?e:H.transform(t+n*e)}function Uk(e,t,n){const o=Om(t,e.x,e.width),r=Om(n,e.y,e.height);return`${o} ${r}`}function df(e,{attrX:t,attrY:n,attrScale:o,originX:r,originY:s,pathLength:i,pathSpacing:a=1,pathOffset:l=0,...c},u,f){if(uf(e,c,f),u){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};const{attrs:p,style:y,dimensions:w}=e;p.transform&&(w&&(y.transform=p.transform),delete p.transform),w&&(r!==void 0||s!==void 0||y.transform)&&(y.transformOrigin=Uk(w,r!==void 0?r:.5,s!==void 0?s:.5)),t!==void 0&&(p.x=t),n!==void 0&&(p.y=n),o!==void 0&&(p.scale=o),i!==void 0&&_k(p,i,a,l,!1)}const ff=()=>({style:{},transform:{},transformOrigin:{},vars:{}}),gb=()=>({...ff(),attrs:{}}),pf=e=>typeof e=="string"&&e.toLowerCase()==="svg";function yb(e,{style:t,vars:n},o,r){Object.assign(e.style,t,r&&r.getProjectionStyles(o));for(const s in n)e.style.setProperty(s,n[s])}const vb=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function bb(e,t,n,o){yb(e,t,void 0,o);for(const r in t.attrs)e.setAttribute(vb.has(r)?r:of(r),t.attrs[r])}const xa={};function Bk(e){Object.assign(xa,e)}function wb(e,{layout:t,layoutId:n}){return mo.has(e)||e.startsWith("origin")||(t||n!==void 0)&&(!!xa[e]||e==="opacity")}function mf(e,t,n){var o;const{style:r}=e,s={};for(const i in r)(Oe(r[i])||t.style&&Oe(t.style[i])||wb(i,e)||((o=n==null?void 0:n.getValue(i))===null||o===void 0?void 0:o.liveStyle)!==void 0)&&(s[i]=r[i]);return s}function xb(e,t,n){const o=mf(e,t,n);for(const r in e)if(Oe(e[r])||Oe(t[r])){const s=pr.indexOf(r)!==-1?"attr"+r.charAt(0).toUpperCase()+r.substring(1):r;o[s]=e[r]}return o}function Vk(e,t){try{t.dimensions=typeof e.getBBox=="function"?e.getBBox():e.getBoundingClientRect()}catch{t.dimensions={x:0,y:0,width:0,height:0}}}const Mm=["x","y","width","height","cx","cy","r"],Hk={useVisualState:fb({scrapeMotionValuesFromProps:xb,createRenderState:gb,onUpdate:({props:e,prevProps:t,current:n,renderState:o,latestValues:r})=>{if(!n)return;let s=!!e.drag;if(!s){for(const a in r)if(mo.has(a)){s=!0;break}}if(!s)return;let i=!t;if(t)for(let a=0;a<Mm.length;a++){const l=Mm[a];e[l]!==t[l]&&(i=!0)}i&&oe.read(()=>{Vk(n,o),oe.render(()=>{df(o,r,pf(n.tagName),e.transformTemplate),bb(n,o)})})}})},Wk={useVisualState:fb({scrapeMotionValuesFromProps:mf,createRenderState:ff})};function Sb(e,t,n){for(const o in t)!Oe(t[o])&&!wb(o,n)&&(e[o]=t[o])}function $k({transformTemplate:e},t){return m.useMemo(()=>{const n=ff();return uf(n,t,e),Object.assign({},n.vars,n.style)},[t])}function zk(e,t){const n=e.style||{},o={};return Sb(o,n,e),Object.assign(o,$k(e,t)),o}function Jk(e,t){const n={},o=zk(e,t);return e.drag&&e.dragListener!==!1&&(n.draggable=!1,o.userSelect=o.WebkitUserSelect=o.WebkitTouchCallout="none",o.touchAction=e.drag===!0?"none":`pan-${e.drag==="x"?"y":"x"}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(n.tabIndex=0),n.style=o,n}function Gk(e,t,n,o){const r=m.useMemo(()=>{const s=gb();return df(s,t,pf(o),e.transformTemplate),{...s.attrs,style:{...s.style}}},[t]);if(e.style){const s={};Sb(s,e.style,e),r.style={...s,...r.style}}return r}function Kk(e=!1){return(n,o,r,{latestValues:s},i)=>{const l=(sf(n)?Gk:Jk)(o,s,i,n),c=ck(o,typeof n=="string",e),u=n!==m.Fragment?{...c,...l,ref:r}:{},{children:f}=o,p=m.useMemo(()=>Oe(f)?f.get():f,[f]);return m.createElement(n,{...u,children:p})}}function Yk(e,t){return function(o,{forwardMotionProps:r}={forwardMotionProps:!1}){const i={...sf(o)?Hk:Wk,preloadedFeatures:e,useRender:Kk(r),createVisualElement:t,Component:o};return vk(i)}}function Cb(e,t){if(!Array.isArray(t))return!1;const n=t.length;if(n!==e.length)return!1;for(let o=0;o<n;o++)if(t[o]!==e[o])return!1;return!0}function ll(e,t,n){const o=e.getProps();return af(o,t,n!==void 0?n:o.custom,e)}const qk=ef(()=>window.ScrollTimeline!==void 0);class Qk{constructor(t){this.stop=()=>this.runAll("stop"),this.animations=t.filter(Boolean)}get finished(){return Promise.all(this.animations.map(t=>"finished"in t?t.finished:t))}getAll(t){return this.animations[0][t]}setAll(t,n){for(let o=0;o<this.animations.length;o++)this.animations[o][t]=n}attachTimeline(t,n){const o=this.animations.map(r=>{if(qk()&&r.attachTimeline)return r.attachTimeline(t);if(typeof n=="function")return n(r)});return()=>{o.forEach((r,s)=>{r&&r(),this.animations[s].stop()})}}get time(){return this.getAll("time")}set time(t){this.setAll("time",t)}get speed(){return this.getAll("speed")}set speed(t){this.setAll("speed",t)}get startTime(){return this.getAll("startTime")}get duration(){let t=0;for(let n=0;n<this.animations.length;n++)t=Math.max(t,this.animations[n].duration);return t}runAll(t){this.animations.forEach(n=>n[t]())}flatten(){this.runAll("flatten")}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}class Xk extends Qk{then(t,n){return Promise.all(this.animations).then(t).catch(n)}}function hf(e,t){return e?e[t]||e.default||e:void 0}const Pu=2e4;function Eb(e){let t=0;const n=50;let o=e.next(t);for(;!o.done&&t<Pu;)t+=n,o=e.next(t);return t>=Pu?1/0:t}function gf(e){return typeof e=="function"}function Im(e,t){e.timeline=t,e.onfinish=null}const yf=e=>Array.isArray(e)&&typeof e[0]=="number",Zk={linearEasing:void 0};function ej(e,t){const n=ef(e);return()=>{var o;return(o=Zk[t])!==null&&o!==void 0?o:n()}}const Sa=ej(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),kb=(e,t,n=10)=>{let o="";const r=Math.max(Math.round(t/n),2);for(let s=0;s<r;s++)o+=e(rr(0,r-1,s))+", ";return`linear(${o.substring(0,o.length-2)})`};function jb(e){return!!(typeof e=="function"&&Sa()||!e||typeof e=="string"&&(e in Tu||Sa())||yf(e)||Array.isArray(e)&&e.every(jb))}const Ur=([e,t,n,o])=>`cubic-bezier(${e}, ${t}, ${n}, ${o})`,Tu={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Ur([0,.65,.55,1]),circOut:Ur([.55,0,1,.45]),backIn:Ur([.31,.01,.66,-.59]),backOut:Ur([.33,1.53,.69,.99])};function Pb(e,t){if(e)return typeof e=="function"&&Sa()?kb(e,t):yf(e)?Ur(e):Array.isArray(e)?e.map(n=>Pb(n,t)||Tu.easeOut):Tu[e]}const wt={x:!1,y:!1};function Tb(){return wt.x||wt.y}function tj(e,t,n){var o;if(e instanceof Element)return[e];if(typeof e=="string"){let r=document;const s=(o=void 0)!==null&&o!==void 0?o:r.querySelectorAll(e);return s?Array.from(s):[]}return Array.from(e)}function Ab(e,t){const n=tj(e),o=new AbortController,r={passive:!0,...t,signal:o.signal};return[n,r,()=>o.abort()]}function Lm(e){return t=>{t.pointerType==="touch"||Tb()||e(t)}}function nj(e,t,n={}){const[o,r,s]=Ab(e,n),i=Lm(a=>{const{target:l}=a,c=t(a);if(typeof c!="function"||!l)return;const u=Lm(f=>{c(f),l.removeEventListener("pointerleave",u)});l.addEventListener("pointerleave",u,r)});return o.forEach(a=>{a.addEventListener("pointerenter",i,r)}),s}const Rb=(e,t)=>t?e===t?!0:Rb(e,t.parentElement):!1,vf=e=>e.pointerType==="mouse"?typeof e.button!="number"||e.button<=0:e.isPrimary!==!1,oj=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function rj(e){return oj.has(e.tagName)||e.tabIndex!==-1}const Br=new WeakSet;function Dm(e){return t=>{t.key==="Enter"&&e(t)}}function nc(e,t){e.dispatchEvent(new PointerEvent("pointer"+t,{isPrimary:!0,bubbles:!0}))}const sj=(e,t)=>{const n=e.currentTarget;if(!n)return;const o=Dm(()=>{if(Br.has(n))return;nc(n,"down");const r=Dm(()=>{nc(n,"up")}),s=()=>nc(n,"cancel");n.addEventListener("keyup",r,t),n.addEventListener("blur",s,t)});n.addEventListener("keydown",o,t),n.addEventListener("blur",()=>n.removeEventListener("keydown",o),t)};function Fm(e){return vf(e)&&!Tb()}function ij(e,t,n={}){const[o,r,s]=Ab(e,n),i=a=>{const l=a.currentTarget;if(!Fm(a)||Br.has(l))return;Br.add(l);const c=t(a),u=(y,w)=>{window.removeEventListener("pointerup",f),window.removeEventListener("pointercancel",p),!(!Fm(y)||!Br.has(l))&&(Br.delete(l),typeof c=="function"&&c(y,{success:w}))},f=y=>{u(y,n.useGlobalTarget||Rb(l,y.target))},p=y=>{u(y,!1)};window.addEventListener("pointerup",f,r),window.addEventListener("pointercancel",p,r)};return o.forEach(a=>{!rj(a)&&a.getAttribute("tabindex")===null&&(a.tabIndex=0),(n.useGlobalTarget?window:a).addEventListener("pointerdown",i,r),a.addEventListener("focus",c=>sj(c,r),r)}),s}function aj(e){return e==="x"||e==="y"?wt[e]?null:(wt[e]=!0,()=>{wt[e]=!1}):wt.x||wt.y?null:(wt.x=wt.y=!0,()=>{wt.x=wt.y=!1})}const Nb=new Set(["width","height","top","left","right","bottom",...pr]);let $i;function lj(){$i=void 0}const Ft={now:()=>($i===void 0&&Ft.set(Ee.isProcessing||ok.useManualTiming?Ee.timestamp:performance.now()),$i),set:e=>{$i=e,queueMicrotask(lj)}};function bf(e,t){e.indexOf(t)===-1&&e.push(t)}function wf(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}class xf{constructor(){this.subscriptions=[]}add(t){return bf(this.subscriptions,t),()=>wf(this.subscriptions,t)}notify(t,n,o){const r=this.subscriptions.length;if(r)if(r===1)this.subscriptions[0](t,n,o);else for(let s=0;s<r;s++){const i=this.subscriptions[s];i&&i(t,n,o)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}function Ob(e,t){return t?e*(1e3/t):0}const _m=30,cj=e=>!isNaN(parseFloat(e));class uj{constructor(t,n={}){this.version="11.18.2",this.canTrackVelocity=null,this.events={},this.updateAndNotify=(o,r=!0)=>{const s=Ft.now();this.updatedAt!==s&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(o),this.current!==this.prev&&this.events.change&&this.events.change.notify(this.current),r&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.hasAnimated=!1,this.setCurrent(t),this.owner=n.owner}setCurrent(t){this.current=t,this.updatedAt=Ft.now(),this.canTrackVelocity===null&&t!==void 0&&(this.canTrackVelocity=cj(this.current))}setPrevFrameValue(t=this.current){this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt}onChange(t){return this.on("change",t)}on(t,n){this.events[t]||(this.events[t]=new xf);const o=this.events[t].add(n);return t==="change"?()=>{o(),oe.read(()=>{this.events.change.getSize()||this.stop()})}:o}clearListeners(){for(const t in this.events)this.events[t].clear()}attach(t,n){this.passiveEffect=t,this.stopPassiveEffect=n}set(t,n=!0){!n||!this.passiveEffect?this.updateAndNotify(t,n):this.passiveEffect(t,this.updateAndNotify)}setWithVelocity(t,n,o){this.set(n),this.prev=void 0,this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt-o}jump(t,n=!0){this.updateAndNotify(t),this.prev=t,this.prevUpdatedAt=this.prevFrameValue=void 0,n&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const t=Ft.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||t-this.updatedAt>_m)return 0;const n=Math.min(this.updatedAt-this.prevUpdatedAt,_m);return Ob(parseFloat(this.current)-parseFloat(this.prevFrameValue),n)}start(t){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=t(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Ps(e,t){return new uj(e,t)}function dj(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,Ps(n))}function fj(e,t){const n=ll(e,t);let{transitionEnd:o={},transition:r={},...s}=n||{};s={...s,...o};for(const i in s){const a=Ek(s[i]);dj(e,i,a)}}function pj(e){return!!(Oe(e)&&e.add)}function Au(e,t){const n=e.getValue("willChange");if(pj(n))return n.add(t)}function Mb(e){return e.props[cb]}const Ib=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e,mj=1e-7,hj=12;function gj(e,t,n,o,r){let s,i,a=0;do i=t+(n-t)/2,s=Ib(i,o,r)-e,s>0?n=i:t=i;while(Math.abs(s)>mj&&++a<hj);return i}function zs(e,t,n,o){if(e===t&&n===o)return tt;const r=s=>gj(s,0,1,e,n);return s=>s===0||s===1?s:Ib(r(s),t,o)}const Lb=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,Db=e=>t=>1-e(1-t),Fb=zs(.33,1.53,.69,.99),Sf=Db(Fb),_b=Lb(Sf),Ub=e=>(e*=2)<1?.5*Sf(e):.5*(2-Math.pow(2,-10*(e-1))),Cf=e=>1-Math.sin(Math.acos(e)),Bb=Db(Cf),Vb=Lb(Cf),Hb=e=>/^0[^.\s]+$/u.test(e);function yj(e){return typeof e=="number"?e===0:e!==null?e==="none"||e==="0"||Hb(e):!0}const es=e=>Math.round(e*1e5)/1e5,Ef=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function vj(e){return e==null}const bj=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,kf=(e,t)=>n=>!!(typeof n=="string"&&bj.test(n)&&n.startsWith(e)||t&&!vj(n)&&Object.prototype.hasOwnProperty.call(n,t)),Wb=(e,t,n)=>o=>{if(typeof o!="string")return o;const[r,s,i,a]=o.match(Ef);return{[e]:parseFloat(r),[t]:parseFloat(s),[n]:parseFloat(i),alpha:a!==void 0?parseFloat(a):1}},wj=e=>nn(0,255,e),oc={...mr,transform:e=>Math.round(wj(e))},Zn={test:kf("rgb","red"),parse:Wb("red","green","blue"),transform:({red:e,green:t,blue:n,alpha:o=1})=>"rgba("+oc.transform(e)+", "+oc.transform(t)+", "+oc.transform(n)+", "+es(js.transform(o))+")"};function xj(e){let t="",n="",o="",r="";return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),o=e.substring(5,7),r=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),o=e.substring(3,4),r=e.substring(4,5),t+=t,n+=n,o+=o,r+=r),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(o,16),alpha:r?parseInt(r,16)/255:1}}const Ru={test:kf("#"),parse:xj,transform:Zn.transform},Fo={test:kf("hsl","hue"),parse:Wb("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:n,alpha:o=1})=>"hsla("+Math.round(e)+", "+Dt.transform(es(t))+", "+Dt.transform(es(n))+", "+es(js.transform(o))+")"},Ae={test:e=>Zn.test(e)||Ru.test(e)||Fo.test(e),parse:e=>Zn.test(e)?Zn.parse(e):Fo.test(e)?Fo.parse(e):Ru.parse(e),transform:e=>typeof e=="string"?e:e.hasOwnProperty("red")?Zn.transform(e):Fo.transform(e)},Sj=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function Cj(e){var t,n;return isNaN(e)&&typeof e=="string"&&(((t=e.match(Ef))===null||t===void 0?void 0:t.length)||0)+(((n=e.match(Sj))===null||n===void 0?void 0:n.length)||0)>0}const $b="number",zb="color",Ej="var",kj="var(",Um="${}",jj=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Ts(e){const t=e.toString(),n=[],o={color:[],number:[],var:[]},r=[];let s=0;const a=t.replace(jj,l=>(Ae.test(l)?(o.color.push(s),r.push(zb),n.push(Ae.parse(l))):l.startsWith(kj)?(o.var.push(s),r.push(Ej),n.push(l)):(o.number.push(s),r.push($b),n.push(parseFloat(l))),++s,Um)).split(Um);return{values:n,split:a,indexes:o,types:r}}function Jb(e){return Ts(e).values}function Gb(e){const{split:t,types:n}=Ts(e),o=t.length;return r=>{let s="";for(let i=0;i<o;i++)if(s+=t[i],r[i]!==void 0){const a=n[i];a===$b?s+=es(r[i]):a===zb?s+=Ae.transform(r[i]):s+=r[i]}return s}}const Pj=e=>typeof e=="number"?0:e;function Tj(e){const t=Jb(e);return Gb(e)(t.map(Pj))}const Ln={test:Cj,parse:Jb,createTransformer:Gb,getAnimatableNone:Tj},Aj=new Set(["brightness","contrast","saturate","opacity"]);function Rj(e){const[t,n]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[o]=n.match(Ef)||[];if(!o)return e;const r=n.replace(o,"");let s=Aj.has(t)?1:0;return o!==n&&(s*=100),t+"("+s+r+")"}const Nj=/\b([a-z-]*)\(.*?\)/gu,Nu={...Ln,getAnimatableNone:e=>{const t=e.match(Nj);return t?t.map(Rj).join(" "):e}},Oj={...cf,color:Ae,backgroundColor:Ae,outlineColor:Ae,fill:Ae,stroke:Ae,borderColor:Ae,borderTopColor:Ae,borderRightColor:Ae,borderBottomColor:Ae,borderLeftColor:Ae,filter:Nu,WebkitFilter:Nu},jf=e=>Oj[e];function Kb(e,t){let n=jf(e);return n!==Nu&&(n=Ln),n.getAnimatableNone?n.getAnimatableNone(t):void 0}const Mj=new Set(["auto","none","0"]);function Ij(e,t,n){let o=0,r;for(;o<e.length&&!r;){const s=e[o];typeof s=="string"&&!Mj.has(s)&&Ts(s).values.length&&(r=e[o]),o++}if(r&&n)for(const s of t)e[s]=Kb(n,r)}const Bm=e=>e===mr||e===H,Vm=(e,t)=>parseFloat(e.split(", ")[t]),Hm=(e,t)=>(n,{transform:o})=>{if(o==="none"||!o)return 0;const r=o.match(/^matrix3d\((.+)\)$/u);if(r)return Vm(r[1],t);{const s=o.match(/^matrix\((.+)\)$/u);return s?Vm(s[1],e):0}},Lj=new Set(["x","y","z"]),Dj=pr.filter(e=>!Lj.has(e));function Fj(e){const t=[];return Dj.forEach(n=>{const o=e.getValue(n);o!==void 0&&(t.push([n,o.get()]),o.set(n.startsWith("scale")?1:0))}),t}const ir={width:({x:e},{paddingLeft:t="0",paddingRight:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),height:({y:e},{paddingTop:t="0",paddingBottom:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:Hm(4,13),y:Hm(5,14)};ir.translateX=ir.x;ir.translateY=ir.y;const no=new Set;let Ou=!1,Mu=!1;function Yb(){if(Mu){const e=Array.from(no).filter(o=>o.needsMeasurement),t=new Set(e.map(o=>o.element)),n=new Map;t.forEach(o=>{const r=Fj(o);r.length&&(n.set(o,r),o.render())}),e.forEach(o=>o.measureInitialState()),t.forEach(o=>{o.render();const r=n.get(o);r&&r.forEach(([s,i])=>{var a;(a=o.getValue(s))===null||a===void 0||a.set(i)})}),e.forEach(o=>o.measureEndState()),e.forEach(o=>{o.suspendedScrollY!==void 0&&window.scrollTo(0,o.suspendedScrollY)})}Mu=!1,Ou=!1,no.forEach(e=>e.complete()),no.clear()}function qb(){no.forEach(e=>{e.readKeyframes(),e.needsMeasurement&&(Mu=!0)})}function _j(){qb(),Yb()}class Pf{constructor(t,n,o,r,s,i=!1){this.isComplete=!1,this.isAsync=!1,this.needsMeasurement=!1,this.isScheduled=!1,this.unresolvedKeyframes=[...t],this.onComplete=n,this.name=o,this.motionValue=r,this.element=s,this.isAsync=i}scheduleResolve(){this.isScheduled=!0,this.isAsync?(no.add(this),Ou||(Ou=!0,oe.read(qb),oe.resolveKeyframes(Yb))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:t,name:n,element:o,motionValue:r}=this;for(let s=0;s<t.length;s++)if(t[s]===null)if(s===0){const i=r==null?void 0:r.get(),a=t[t.length-1];if(i!==void 0)t[0]=i;else if(o&&n){const l=o.readValue(n,a);l!=null&&(t[0]=l)}t[0]===void 0&&(t[0]=a),r&&i===void 0&&r.set(t[0])}else t[s]=t[s-1]}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(){this.isComplete=!0,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe),no.delete(this)}cancel(){this.isComplete||(this.isScheduled=!1,no.delete(this))}resume(){this.isComplete||this.scheduleResolve()}}const Qb=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),Uj=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function Bj(e){const t=Uj.exec(e);if(!t)return[,];const[,n,o,r]=t;return[`--${n??o}`,r]}function Xb(e,t,n=1){const[o,r]=Bj(e);if(!o)return;const s=window.getComputedStyle(t).getPropertyValue(o);if(s){const i=s.trim();return Qb(i)?parseFloat(i):i}return lf(r)?Xb(r,t,n+1):r}const Zb=e=>t=>t.test(e),Vj={test:e=>e==="auto",parse:e=>e},ew=[mr,H,Dt,pn,Rk,Ak,Vj],Wm=e=>ew.find(Zb(e));class tw extends Pf{constructor(t,n,o,r,s){super(t,n,o,r,s,!0)}readKeyframes(){const{unresolvedKeyframes:t,element:n,name:o}=this;if(!n||!n.current)return;super.readKeyframes();for(let l=0;l<t.length;l++){let c=t[l];if(typeof c=="string"&&(c=c.trim(),lf(c))){const u=Xb(c,n.current);u!==void 0&&(t[l]=u),l===t.length-1&&(this.finalKeyframe=c)}}if(this.resolveNoneKeyframes(),!Nb.has(o)||t.length!==2)return;const[r,s]=t,i=Wm(r),a=Wm(s);if(i!==a)if(Bm(i)&&Bm(a))for(let l=0;l<t.length;l++){const c=t[l];typeof c=="string"&&(t[l]=parseFloat(c))}else this.needsMeasurement=!0}resolveNoneKeyframes(){const{unresolvedKeyframes:t,name:n}=this,o=[];for(let r=0;r<t.length;r++)yj(t[r])&&o.push(r);o.length&&Ij(t,o,n)}measureInitialState(){const{element:t,unresolvedKeyframes:n,name:o}=this;if(!t||!t.current)return;o==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=ir[o](t.measureViewportBox(),window.getComputedStyle(t.current)),n[0]=this.measuredOrigin;const r=n[n.length-1];r!==void 0&&t.getValue(o,r).jump(r,!1)}measureEndState(){var t;const{element:n,name:o,unresolvedKeyframes:r}=this;if(!n||!n.current)return;const s=n.getValue(o);s&&s.jump(this.measuredOrigin,!1);const i=r.length-1,a=r[i];r[i]=ir[o](n.measureViewportBox(),window.getComputedStyle(n.current)),a!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=a),!((t=this.removedTransforms)===null||t===void 0)&&t.length&&this.removedTransforms.forEach(([l,c])=>{n.getValue(l).set(c)}),this.resolveNoneKeyframes()}}const $m=(e,t)=>t==="zIndex"?!1:!!(typeof e=="number"||Array.isArray(e)||typeof e=="string"&&(Ln.test(e)||e==="0")&&!e.startsWith("url("));function Hj(e){const t=e[0];if(e.length===1)return!0;for(let n=0;n<e.length;n++)if(e[n]!==t)return!0}function Wj(e,t,n,o){const r=e[0];if(r===null)return!1;if(t==="display"||t==="visibility")return!0;const s=e[e.length-1],i=$m(r,t),a=$m(s,t);return!i||!a?!1:Hj(e)||(n==="spring"||gf(n))&&o}const $j=e=>e!==null;function cl(e,{repeat:t,repeatType:n="loop"},o){const r=e.filter($j),s=t&&n!=="loop"&&t%2===1?0:r.length-1;return!s||o===void 0?r[s]:o}const zj=40;class nw{constructor({autoplay:t=!0,delay:n=0,type:o="keyframes",repeat:r=0,repeatDelay:s=0,repeatType:i="loop",...a}){this.isStopped=!1,this.hasAttemptedResolve=!1,this.createdAt=Ft.now(),this.options={autoplay:t,delay:n,type:o,repeat:r,repeatDelay:s,repeatType:i,...a},this.updateFinishedPromise()}calcStartTime(){return this.resolvedAt?this.resolvedAt-this.createdAt>zj?this.resolvedAt:this.createdAt:this.createdAt}get resolved(){return!this._resolved&&!this.hasAttemptedResolve&&_j(),this._resolved}onKeyframesResolved(t,n){this.resolvedAt=Ft.now(),this.hasAttemptedResolve=!0;const{name:o,type:r,velocity:s,delay:i,onComplete:a,onUpdate:l,isGenerator:c}=this.options;if(!c&&!Wj(t,o,r,s))if(i)this.options.duration=0;else{l&&l(cl(t,this.options,n)),a&&a(),this.resolveFinishedPromise();return}const u=this.initPlayback(t,n);u!==!1&&(this._resolved={keyframes:t,finalKeyframe:n,...u},this.onPostResolved())}onPostResolved(){}then(t,n){return this.currentFinishedPromise.then(t,n)}flatten(){this.options.type="keyframes",this.options.ease="linear"}updateFinishedPromise(){this.currentFinishedPromise=new Promise(t=>{this.resolveFinishedPromise=t})}}const ae=(e,t,n)=>e+(t-e)*n;function rc(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function Jj({hue:e,saturation:t,lightness:n,alpha:o}){e/=360,t/=100,n/=100;let r=0,s=0,i=0;if(!t)r=s=i=n;else{const a=n<.5?n*(1+t):n+t-n*t,l=2*n-a;r=rc(l,a,e+1/3),s=rc(l,a,e),i=rc(l,a,e-1/3)}return{red:Math.round(r*255),green:Math.round(s*255),blue:Math.round(i*255),alpha:o}}function Ca(e,t){return n=>n>0?t:e}const sc=(e,t,n)=>{const o=e*e,r=n*(t*t-o)+o;return r<0?0:Math.sqrt(r)},Gj=[Ru,Zn,Fo],Kj=e=>Gj.find(t=>t.test(e));function zm(e){const t=Kj(e);if(!t)return!1;let n=t.parse(e);return t===Fo&&(n=Jj(n)),n}const Jm=(e,t)=>{const n=zm(e),o=zm(t);if(!n||!o)return Ca(e,t);const r={...n};return s=>(r.red=sc(n.red,o.red,s),r.green=sc(n.green,o.green,s),r.blue=sc(n.blue,o.blue,s),r.alpha=ae(n.alpha,o.alpha,s),Zn.transform(r))},Yj=(e,t)=>n=>t(e(n)),Js=(...e)=>e.reduce(Yj),Iu=new Set(["none","hidden"]);function qj(e,t){return Iu.has(e)?n=>n<=0?e:t:n=>n>=1?t:e}function Qj(e,t){return n=>ae(e,t,n)}function Tf(e){return typeof e=="number"?Qj:typeof e=="string"?lf(e)?Ca:Ae.test(e)?Jm:eP:Array.isArray(e)?ow:typeof e=="object"?Ae.test(e)?Jm:Xj:Ca}function ow(e,t){const n=[...e],o=n.length,r=e.map((s,i)=>Tf(s)(s,t[i]));return s=>{for(let i=0;i<o;i++)n[i]=r[i](s);return n}}function Xj(e,t){const n={...e,...t},o={};for(const r in n)e[r]!==void 0&&t[r]!==void 0&&(o[r]=Tf(e[r])(e[r],t[r]));return r=>{for(const s in o)n[s]=o[s](r);return n}}function Zj(e,t){var n;const o=[],r={color:0,var:0,number:0};for(let s=0;s<t.values.length;s++){const i=t.types[s],a=e.indexes[i][r[i]],l=(n=e.values[a])!==null&&n!==void 0?n:0;o[s]=l,r[i]++}return o}const eP=(e,t)=>{const n=Ln.createTransformer(t),o=Ts(e),r=Ts(t);return o.indexes.var.length===r.indexes.var.length&&o.indexes.color.length===r.indexes.color.length&&o.indexes.number.length>=r.indexes.number.length?Iu.has(e)&&!r.values.length||Iu.has(t)&&!o.values.length?qj(e,t):Js(ow(Zj(o,r),r.values),n):Ca(e,t)};function rw(e,t,n){return typeof e=="number"&&typeof t=="number"&&typeof n=="number"?ae(e,t,n):Tf(e)(e,t)}const tP=5;function sw(e,t,n){const o=Math.max(t-tP,0);return Ob(n-e(o),t-o)}const ue={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},ic=.001;function nP({duration:e=ue.duration,bounce:t=ue.bounce,velocity:n=ue.velocity,mass:o=ue.mass}){let r,s,i=1-t;i=nn(ue.minDamping,ue.maxDamping,i),e=nn(ue.minDuration,ue.maxDuration,Qt(e)),i<1?(r=c=>{const u=c*i,f=u*e,p=u-n,y=Lu(c,i),w=Math.exp(-f);return ic-p/y*w},s=c=>{const f=c*i*e,p=f*n+n,y=Math.pow(i,2)*Math.pow(c,2)*e,w=Math.exp(-f),v=Lu(Math.pow(c,2),i);return(-r(c)+ic>0?-1:1)*((p-y)*w)/v}):(r=c=>{const u=Math.exp(-c*e),f=(c-n)*e+1;return-ic+u*f},s=c=>{const u=Math.exp(-c*e),f=(n-c)*(e*e);return u*f});const a=5/e,l=rP(r,s,a);if(e=qt(e),isNaN(l))return{stiffness:ue.stiffness,damping:ue.damping,duration:e};{const c=Math.pow(l,2)*o;return{stiffness:c,damping:i*2*Math.sqrt(o*c),duration:e}}}const oP=12;function rP(e,t,n){let o=n;for(let r=1;r<oP;r++)o=o-e(o)/t(o);return o}function Lu(e,t){return e*Math.sqrt(1-t*t)}const sP=["duration","bounce"],iP=["stiffness","damping","mass"];function Gm(e,t){return t.some(n=>e[n]!==void 0)}function aP(e){let t={velocity:ue.velocity,stiffness:ue.stiffness,damping:ue.damping,mass:ue.mass,isResolvedFromDuration:!1,...e};if(!Gm(e,iP)&&Gm(e,sP))if(e.visualDuration){const n=e.visualDuration,o=2*Math.PI/(n*1.2),r=o*o,s=2*nn(.05,1,1-(e.bounce||0))*Math.sqrt(r);t={...t,mass:ue.mass,stiffness:r,damping:s}}else{const n=nP(e);t={...t,...n,mass:ue.mass},t.isResolvedFromDuration=!0}return t}function iw(e=ue.visualDuration,t=ue.bounce){const n=typeof e!="object"?{visualDuration:e,keyframes:[0,1],bounce:t}:e;let{restSpeed:o,restDelta:r}=n;const s=n.keyframes[0],i=n.keyframes[n.keyframes.length-1],a={done:!1,value:s},{stiffness:l,damping:c,mass:u,duration:f,velocity:p,isResolvedFromDuration:y}=aP({...n,velocity:-Qt(n.velocity||0)}),w=p||0,v=c/(2*Math.sqrt(l*u)),x=i-s,h=Qt(Math.sqrt(l/u)),g=Math.abs(x)<5;o||(o=g?ue.restSpeed.granular:ue.restSpeed.default),r||(r=g?ue.restDelta.granular:ue.restDelta.default);let b;if(v<1){const C=Lu(h,v);b=k=>{const E=Math.exp(-v*h*k);return i-E*((w+v*h*x)/C*Math.sin(C*k)+x*Math.cos(C*k))}}else if(v===1)b=C=>i-Math.exp(-h*C)*(x+(w+h*x)*C);else{const C=h*Math.sqrt(v*v-1);b=k=>{const E=Math.exp(-v*h*k),j=Math.min(C*k,300);return i-E*((w+v*h*x)*Math.sinh(j)+C*x*Math.cosh(j))/C}}const S={calculatedDuration:y&&f||null,next:C=>{const k=b(C);if(y)a.done=C>=f;else{let E=0;v<1&&(E=C===0?qt(w):sw(b,C,k));const j=Math.abs(E)<=o,R=Math.abs(i-k)<=r;a.done=j&&R}return a.value=a.done?i:k,a},toString:()=>{const C=Math.min(Eb(S),Pu),k=kb(E=>S.next(C*E).value,C,30);return C+"ms "+k}};return S}function Km({keyframes:e,velocity:t=0,power:n=.8,timeConstant:o=325,bounceDamping:r=10,bounceStiffness:s=500,modifyTarget:i,min:a,max:l,restDelta:c=.5,restSpeed:u}){const f=e[0],p={done:!1,value:f},y=j=>a!==void 0&&j<a||l!==void 0&&j>l,w=j=>a===void 0?l:l===void 0||Math.abs(a-j)<Math.abs(l-j)?a:l;let v=n*t;const x=f+v,h=i===void 0?x:i(x);h!==x&&(v=h-f);const g=j=>-v*Math.exp(-j/o),b=j=>h+g(j),S=j=>{const R=g(j),A=b(j);p.done=Math.abs(R)<=c,p.value=p.done?h:A};let C,k;const E=j=>{y(p.value)&&(C=j,k=iw({keyframes:[p.value,w(p.value)],velocity:sw(b,j,p.value),damping:r,stiffness:s,restDelta:c,restSpeed:u}))};return E(0),{calculatedDuration:null,next:j=>{let R=!1;return!k&&C===void 0&&(R=!0,S(j),E(j)),C!==void 0&&j>=C?k.next(j-C):(!R&&S(j),p)}}}const lP=zs(.42,0,1,1),cP=zs(0,0,.58,1),aw=zs(.42,0,.58,1),uP=e=>Array.isArray(e)&&typeof e[0]!="number",dP={linear:tt,easeIn:lP,easeInOut:aw,easeOut:cP,circIn:Cf,circInOut:Vb,circOut:Bb,backIn:Sf,backInOut:_b,backOut:Fb,anticipate:Ub},Ym=e=>{if(yf(e)){rb(e.length===4);const[t,n,o,r]=e;return zs(t,n,o,r)}else if(typeof e=="string")return dP[e];return e};function fP(e,t,n){const o=[],r=n||rw,s=e.length-1;for(let i=0;i<s;i++){let a=r(e[i],e[i+1]);if(t){const l=Array.isArray(t)?t[i]||tt:t;a=Js(l,a)}o.push(a)}return o}function pP(e,t,{clamp:n=!0,ease:o,mixer:r}={}){const s=e.length;if(rb(s===t.length),s===1)return()=>t[0];if(s===2&&t[0]===t[1])return()=>t[1];const i=e[0]===e[1];e[0]>e[s-1]&&(e=[...e].reverse(),t=[...t].reverse());const a=fP(t,o,r),l=a.length,c=u=>{if(i&&u<e[0])return t[0];let f=0;if(l>1)for(;f<e.length-2&&!(u<e[f+1]);f++);const p=rr(e[f],e[f+1],u);return a[f](p)};return n?u=>c(nn(e[0],e[s-1],u)):c}function mP(e,t){const n=e[e.length-1];for(let o=1;o<=t;o++){const r=rr(0,t,o);e.push(ae(n,1,r))}}function hP(e){const t=[0];return mP(t,e.length-1),t}function gP(e,t){return e.map(n=>n*t)}function yP(e,t){return e.map(()=>t||aw).splice(0,e.length-1)}function Ea({duration:e=300,keyframes:t,times:n,ease:o="easeInOut"}){const r=uP(o)?o.map(Ym):Ym(o),s={done:!1,value:t[0]},i=gP(n&&n.length===t.length?n:hP(t),e),a=pP(i,t,{ease:Array.isArray(r)?r:yP(t,r)});return{calculatedDuration:e,next:l=>(s.value=a(l),s.done=l>=e,s)}}const vP=e=>{const t=({timestamp:n})=>e(n);return{start:()=>oe.update(t,!0),stop:()=>In(t),now:()=>Ee.isProcessing?Ee.timestamp:Ft.now()}},bP={decay:Km,inertia:Km,tween:Ea,keyframes:Ea,spring:iw},wP=e=>e/100;class Af extends nw{constructor(t){super(t),this.holdTime=null,this.cancelTime=null,this.currentTime=0,this.playbackSpeed=1,this.pendingPlayState="running",this.startTime=null,this.state="idle",this.stop=()=>{if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.teardown();const{onStop:l}=this.options;l&&l()};const{name:n,motionValue:o,element:r,keyframes:s}=this.options,i=(r==null?void 0:r.KeyframeResolver)||Pf,a=(l,c)=>this.onKeyframesResolved(l,c);this.resolver=new i(s,a,n,o,r),this.resolver.scheduleResolve()}flatten(){super.flatten(),this._resolved&&Object.assign(this._resolved,this.initPlayback(this._resolved.keyframes))}initPlayback(t){const{type:n="keyframes",repeat:o=0,repeatDelay:r=0,repeatType:s,velocity:i=0}=this.options,a=gf(n)?n:bP[n]||Ea;let l,c;a!==Ea&&typeof t[0]!="number"&&(l=Js(wP,rw(t[0],t[1])),t=[0,100]);const u=a({...this.options,keyframes:t});s==="mirror"&&(c=a({...this.options,keyframes:[...t].reverse(),velocity:-i})),u.calculatedDuration===null&&(u.calculatedDuration=Eb(u));const{calculatedDuration:f}=u,p=f+r,y=p*(o+1)-r;return{generator:u,mirroredGenerator:c,mapPercentToKeyframes:l,calculatedDuration:f,resolvedDuration:p,totalDuration:y}}onPostResolved(){const{autoplay:t=!0}=this.options;this.play(),this.pendingPlayState==="paused"||!t?this.pause():this.state=this.pendingPlayState}tick(t,n=!1){const{resolved:o}=this;if(!o){const{keyframes:j}=this.options;return{done:!0,value:j[j.length-1]}}const{finalKeyframe:r,generator:s,mirroredGenerator:i,mapPercentToKeyframes:a,keyframes:l,calculatedDuration:c,totalDuration:u,resolvedDuration:f}=o;if(this.startTime===null)return s.next(0);const{delay:p,repeat:y,repeatType:w,repeatDelay:v,onUpdate:x}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,t):this.speed<0&&(this.startTime=Math.min(t-u/this.speed,this.startTime)),n?this.currentTime=t:this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=Math.round(t-this.startTime)*this.speed;const h=this.currentTime-p*(this.speed>=0?1:-1),g=this.speed>=0?h<0:h>u;this.currentTime=Math.max(h,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=u);let b=this.currentTime,S=s;if(y){const j=Math.min(this.currentTime,u)/f;let R=Math.floor(j),A=j%1;!A&&j>=1&&(A=1),A===1&&R--,R=Math.min(R,y+1),!!(R%2)&&(w==="reverse"?(A=1-A,v&&(A-=v/f)):w==="mirror"&&(S=i)),b=nn(0,1,A)*f}const C=g?{done:!1,value:l[0]}:S.next(b);a&&(C.value=a(C.value));let{done:k}=C;!g&&c!==null&&(k=this.speed>=0?this.currentTime>=u:this.currentTime<=0);const E=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&k);return E&&r!==void 0&&(C.value=cl(l,this.options,r)),x&&x(C.value),E&&this.finish(),C}get duration(){const{resolved:t}=this;return t?Qt(t.calculatedDuration):0}get time(){return Qt(this.currentTime)}set time(t){t=qt(t),this.currentTime=t,this.holdTime!==null||this.speed===0?this.holdTime=t:this.driver&&(this.startTime=this.driver.now()-t/this.speed)}get speed(){return this.playbackSpeed}set speed(t){const n=this.playbackSpeed!==t;this.playbackSpeed=t,n&&(this.time=Qt(this.currentTime))}play(){if(this.resolver.isScheduled||this.resolver.resume(),!this._resolved){this.pendingPlayState="running";return}if(this.isStopped)return;const{driver:t=vP,onPlay:n,startTime:o}=this.options;this.driver||(this.driver=t(s=>this.tick(s))),n&&n();const r=this.driver.now();this.holdTime!==null?this.startTime=r-this.holdTime:this.startTime?this.state==="finished"&&(this.startTime=r):this.startTime=o??this.calcStartTime(),this.state==="finished"&&this.updateFinishedPromise(),this.cancelTime=this.startTime,this.holdTime=null,this.state="running",this.driver.start()}pause(){var t;if(!this._resolved){this.pendingPlayState="paused";return}this.state="paused",this.holdTime=(t=this.currentTime)!==null&&t!==void 0?t:0}complete(){this.state!=="running"&&this.play(),this.pendingPlayState=this.state="finished",this.holdTime=null}finish(){this.teardown(),this.state="finished";const{onComplete:t}=this.options;t&&t()}cancel(){this.cancelTime!==null&&this.tick(this.cancelTime),this.teardown(),this.updateFinishedPromise()}teardown(){this.state="idle",this.stopDriver(),this.resolveFinishedPromise(),this.updateFinishedPromise(),this.startTime=this.cancelTime=null,this.resolver.cancel()}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(t){return this.startTime=0,this.tick(t,!0)}}const xP=new Set(["opacity","clipPath","filter","transform"]);function SP(e,t,n,{delay:o=0,duration:r=300,repeat:s=0,repeatType:i="loop",ease:a="easeInOut",times:l}={}){const c={[t]:n};l&&(c.offset=l);const u=Pb(a,r);return Array.isArray(u)&&(c.easing=u),e.animate(c,{delay:o,duration:r,easing:Array.isArray(u)?"linear":u,fill:"both",iterations:s+1,direction:i==="reverse"?"alternate":"normal"})}const CP=ef(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),ka=10,EP=2e4;function kP(e){return gf(e.type)||e.type==="spring"||!jb(e.ease)}function jP(e,t){const n=new Af({...t,keyframes:e,repeat:0,delay:0,isGenerator:!0});let o={done:!1,value:e[0]};const r=[];let s=0;for(;!o.done&&s<EP;)o=n.sample(s),r.push(o.value),s+=ka;return{times:void 0,keyframes:r,duration:s-ka,ease:"linear"}}const lw={anticipate:Ub,backInOut:_b,circInOut:Vb};function PP(e){return e in lw}class qm extends nw{constructor(t){super(t);const{name:n,motionValue:o,element:r,keyframes:s}=this.options;this.resolver=new tw(s,(i,a)=>this.onKeyframesResolved(i,a),n,o,r),this.resolver.scheduleResolve()}initPlayback(t,n){let{duration:o=300,times:r,ease:s,type:i,motionValue:a,name:l,startTime:c}=this.options;if(!a.owner||!a.owner.current)return!1;if(typeof s=="string"&&Sa()&&PP(s)&&(s=lw[s]),kP(this.options)){const{onComplete:f,onUpdate:p,motionValue:y,element:w,...v}=this.options,x=jP(t,v);t=x.keyframes,t.length===1&&(t[1]=t[0]),o=x.duration,r=x.times,s=x.ease,i="keyframes"}const u=SP(a.owner.current,l,t,{...this.options,duration:o,times:r,ease:s});return u.startTime=c??this.calcStartTime(),this.pendingTimeline?(Im(u,this.pendingTimeline),this.pendingTimeline=void 0):u.onfinish=()=>{const{onComplete:f}=this.options;a.set(cl(t,this.options,n)),f&&f(),this.cancel(),this.resolveFinishedPromise()},{animation:u,duration:o,times:r,type:i,ease:s,keyframes:t}}get duration(){const{resolved:t}=this;if(!t)return 0;const{duration:n}=t;return Qt(n)}get time(){const{resolved:t}=this;if(!t)return 0;const{animation:n}=t;return Qt(n.currentTime||0)}set time(t){const{resolved:n}=this;if(!n)return;const{animation:o}=n;o.currentTime=qt(t)}get speed(){const{resolved:t}=this;if(!t)return 1;const{animation:n}=t;return n.playbackRate}set speed(t){const{resolved:n}=this;if(!n)return;const{animation:o}=n;o.playbackRate=t}get state(){const{resolved:t}=this;if(!t)return"idle";const{animation:n}=t;return n.playState}get startTime(){const{resolved:t}=this;if(!t)return null;const{animation:n}=t;return n.startTime}attachTimeline(t){if(!this._resolved)this.pendingTimeline=t;else{const{resolved:n}=this;if(!n)return tt;const{animation:o}=n;Im(o,t)}return tt}play(){if(this.isStopped)return;const{resolved:t}=this;if(!t)return;const{animation:n}=t;n.playState==="finished"&&this.updateFinishedPromise(),n.play()}pause(){const{resolved:t}=this;if(!t)return;const{animation:n}=t;n.pause()}stop(){if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.resolveFinishedPromise(),this.updateFinishedPromise();const{resolved:t}=this;if(!t)return;const{animation:n,keyframes:o,duration:r,type:s,ease:i,times:a}=t;if(n.playState==="idle"||n.playState==="finished")return;if(this.time){const{motionValue:c,onUpdate:u,onComplete:f,element:p,...y}=this.options,w=new Af({...y,keyframes:o,duration:r,type:s,ease:i,times:a,isGenerator:!0}),v=qt(this.time);c.setWithVelocity(w.sample(v-ka).value,w.sample(v).value,ka)}const{onStop:l}=this.options;l&&l(),this.cancel()}complete(){const{resolved:t}=this;t&&t.animation.finish()}cancel(){const{resolved:t}=this;t&&t.animation.cancel()}static supports(t){const{motionValue:n,name:o,repeatDelay:r,repeatType:s,damping:i,type:a}=t;if(!n||!n.owner||!(n.owner.current instanceof HTMLElement))return!1;const{onUpdate:l,transformTemplate:c}=n.owner.getProps();return CP()&&o&&xP.has(o)&&!l&&!c&&!r&&s!=="mirror"&&i!==0&&a!=="inertia"}}const TP={type:"spring",stiffness:500,damping:25,restSpeed:10},AP=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),RP={type:"keyframes",duration:.8},NP={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},OP=(e,{keyframes:t})=>t.length>2?RP:mo.has(e)?e.startsWith("scale")?AP(t[1]):TP:NP;function MP({when:e,delay:t,delayChildren:n,staggerChildren:o,staggerDirection:r,repeat:s,repeatType:i,repeatDelay:a,from:l,elapsed:c,...u}){return!!Object.keys(u).length}const Rf=(e,t,n,o={},r,s)=>i=>{const a=hf(o,e)||{},l=a.delay||o.delay||0;let{elapsed:c=0}=o;c=c-qt(l);let u={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:t.getVelocity(),...a,delay:-c,onUpdate:p=>{t.set(p),a.onUpdate&&a.onUpdate(p)},onComplete:()=>{i(),a.onComplete&&a.onComplete()},name:e,motionValue:t,element:s?void 0:r};MP(a)||(u={...u,...OP(e,u)}),u.duration&&(u.duration=qt(u.duration)),u.repeatDelay&&(u.repeatDelay=qt(u.repeatDelay)),u.from!==void 0&&(u.keyframes[0]=u.from);let f=!1;if((u.type===!1||u.duration===0&&!u.repeatDelay)&&(u.duration=0,u.delay===0&&(f=!0)),f&&!s&&t.get()!==void 0){const p=cl(u.keyframes,a);if(p!==void 0)return oe.update(()=>{u.onUpdate(p),u.onComplete()}),new Xk([])}return!s&&qm.supports(u)?new qm(u):new Af(u)};function IP({protectedKeys:e,needsAnimating:t},n){const o=e.hasOwnProperty(n)&&t[n]!==!0;return t[n]=!1,o}function cw(e,t,{delay:n=0,transitionOverride:o,type:r}={}){var s;let{transition:i=e.getDefaultTransition(),transitionEnd:a,...l}=t;o&&(i=o);const c=[],u=r&&e.animationState&&e.animationState.getState()[r];for(const f in l){const p=e.getValue(f,(s=e.latestValues[f])!==null&&s!==void 0?s:null),y=l[f];if(y===void 0||u&&IP(u,f))continue;const w={delay:n,...hf(i||{},f)};let v=!1;if(window.MotionHandoffAnimation){const h=Mb(e);if(h){const g=window.MotionHandoffAnimation(h,f,oe);g!==null&&(w.startTime=g,v=!0)}}Au(e,f),p.start(Rf(f,p,y,e.shouldReduceMotion&&Nb.has(f)?{type:!1}:w,e,v));const x=p.animation;x&&c.push(x)}return a&&Promise.all(c).then(()=>{oe.update(()=>{a&&fj(e,a)})}),c}function Du(e,t,n={}){var o;const r=ll(e,t,n.type==="exit"?(o=e.presenceContext)===null||o===void 0?void 0:o.custom:void 0);let{transition:s=e.getDefaultTransition()||{}}=r||{};n.transitionOverride&&(s=n.transitionOverride);const i=r?()=>Promise.all(cw(e,r,n)):()=>Promise.resolve(),a=e.variantChildren&&e.variantChildren.size?(c=0)=>{const{delayChildren:u=0,staggerChildren:f,staggerDirection:p}=s;return LP(e,t,u+c,f,p,n)}:()=>Promise.resolve(),{when:l}=s;if(l){const[c,u]=l==="beforeChildren"?[i,a]:[a,i];return c().then(()=>u())}else return Promise.all([i(),a(n.delay)])}function LP(e,t,n=0,o=0,r=1,s){const i=[],a=(e.variantChildren.size-1)*o,l=r===1?(c=0)=>c*o:(c=0)=>a-c*o;return Array.from(e.variantChildren).sort(DP).forEach((c,u)=>{c.notify("AnimationStart",t),i.push(Du(c,t,{...s,delay:n+l(u)}).then(()=>c.notify("AnimationComplete",t)))}),Promise.all(i)}function DP(e,t){return e.sortNodePosition(t)}function FP(e,t,n={}){e.notify("AnimationStart",t);let o;if(Array.isArray(t)){const r=t.map(s=>Du(e,s,n));o=Promise.all(r)}else if(typeof t=="string")o=Du(e,t,n);else{const r=typeof t=="function"?ll(e,t,n.custom):t;o=Promise.all(cw(e,r,n))}return o.then(()=>{e.notify("AnimationComplete",t)})}const _P=nf.length;function uw(e){if(!e)return;if(!e.isControllingVariants){const n=e.parent?uw(e.parent)||{}:{};return e.props.initial!==void 0&&(n.initial=e.props.initial),n}const t={};for(let n=0;n<_P;n++){const o=nf[n],r=e.props[o];(ks(r)||r===!1)&&(t[o]=r)}return t}const UP=[...tf].reverse(),BP=tf.length;function VP(e){return t=>Promise.all(t.map(({animation:n,options:o})=>FP(e,n,o)))}function HP(e){let t=VP(e),n=Qm(),o=!0;const r=l=>(c,u)=>{var f;const p=ll(e,u,l==="exit"?(f=e.presenceContext)===null||f===void 0?void 0:f.custom:void 0);if(p){const{transition:y,transitionEnd:w,...v}=p;c={...c,...v,...w}}return c};function s(l){t=l(e)}function i(l){const{props:c}=e,u=uw(e.parent)||{},f=[],p=new Set;let y={},w=1/0;for(let x=0;x<BP;x++){const h=UP[x],g=n[h],b=c[h]!==void 0?c[h]:u[h],S=ks(b),C=h===l?g.isActive:null;C===!1&&(w=x);let k=b===u[h]&&b!==c[h]&&S;if(k&&o&&e.manuallyAnimateOnMount&&(k=!1),g.protectedKeys={...y},!g.isActive&&C===null||!b&&!g.prevProp||il(b)||typeof b=="boolean")continue;const E=WP(g.prevProp,b);let j=E||h===l&&g.isActive&&!k&&S||x>w&&S,R=!1;const A=Array.isArray(b)?b:[b];let F=A.reduce(r(h),{});C===!1&&(F={});const{prevResolvedValues:_={}}=g,W={..._,...F},I=B=>{j=!0,p.has(B)&&(R=!0,p.delete(B)),g.needsAnimating[B]=!0;const P=e.getValue(B);P&&(P.liveStyle=!1)};for(const B in W){const P=F[B],T=_[B];if(y.hasOwnProperty(B))continue;let L=!1;ju(P)&&ju(T)?L=!Cb(P,T):L=P!==T,L?P!=null?I(B):p.add(B):P!==void 0&&p.has(B)?I(B):g.protectedKeys[B]=!0}g.prevProp=b,g.prevResolvedValues=F,g.isActive&&(y={...y,...F}),o&&e.blockInitialAnimation&&(j=!1),j&&(!(k&&E)||R)&&f.push(...A.map(B=>({animation:B,options:{type:h}})))}if(p.size){const x={};p.forEach(h=>{const g=e.getBaseTarget(h),b=e.getValue(h);b&&(b.liveStyle=!0),x[h]=g??null}),f.push({animation:x})}let v=!!f.length;return o&&(c.initial===!1||c.initial===c.animate)&&!e.manuallyAnimateOnMount&&(v=!1),o=!1,v?t(f):Promise.resolve()}function a(l,c){var u;if(n[l].isActive===c)return Promise.resolve();(u=e.variantChildren)===null||u===void 0||u.forEach(p=>{var y;return(y=p.animationState)===null||y===void 0?void 0:y.setActive(l,c)}),n[l].isActive=c;const f=i(l);for(const p in n)n[p].protectedKeys={};return f}return{animateChanges:i,setActive:a,setAnimateFunction:s,getState:()=>n,reset:()=>{n=Qm(),o=!0}}}function WP(e,t){return typeof t=="string"?t!==e:Array.isArray(t)?!Cb(t,e):!1}function zn(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function Qm(){return{animate:zn(!0),whileInView:zn(),whileHover:zn(),whileTap:zn(),whileDrag:zn(),whileFocus:zn(),exit:zn()}}class $n{constructor(t){this.isMounted=!1,this.node=t}update(){}}class $P extends $n{constructor(t){super(t),t.animationState||(t.animationState=HP(t))}updateAnimationControlsSubscription(){const{animate:t}=this.node.getProps();il(t)&&(this.unmountControls=t.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:t}=this.node.getProps(),{animate:n}=this.node.prevProps||{};t!==n&&this.updateAnimationControlsSubscription()}unmount(){var t;this.node.animationState.reset(),(t=this.unmountControls)===null||t===void 0||t.call(this)}}let zP=0;class JP extends $n{constructor(){super(...arguments),this.id=zP++}update(){if(!this.node.presenceContext)return;const{isPresent:t,onExitComplete:n}=this.node.presenceContext,{isPresent:o}=this.node.prevPresenceContext||{};if(!this.node.animationState||t===o)return;const r=this.node.animationState.setActive("exit",!t);n&&!t&&r.then(()=>n(this.id))}mount(){const{register:t}=this.node.presenceContext||{};t&&(this.unmount=t(this.id))}unmount(){}}const GP={animation:{Feature:$P},exit:{Feature:JP}};function As(e,t,n,o={passive:!0}){return e.addEventListener(t,n,o),()=>e.removeEventListener(t,n)}function Gs(e){return{point:{x:e.pageX,y:e.pageY}}}const KP=e=>t=>vf(t)&&e(t,Gs(t));function ts(e,t,n,o){return As(e,t,KP(n),o)}const Xm=(e,t)=>Math.abs(e-t);function YP(e,t){const n=Xm(e.x,t.x),o=Xm(e.y,t.y);return Math.sqrt(n**2+o**2)}class dw{constructor(t,n,{transformPagePoint:o,contextWindow:r,dragSnapToOrigin:s=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const f=lc(this.lastMoveEventInfo,this.history),p=this.startEvent!==null,y=YP(f.offset,{x:0,y:0})>=3;if(!p&&!y)return;const{point:w}=f,{timestamp:v}=Ee;this.history.push({...w,timestamp:v});const{onStart:x,onMove:h}=this.handlers;p||(x&&x(this.lastMoveEvent,f),this.startEvent=this.lastMoveEvent),h&&h(this.lastMoveEvent,f)},this.handlePointerMove=(f,p)=>{this.lastMoveEvent=f,this.lastMoveEventInfo=ac(p,this.transformPagePoint),oe.update(this.updatePoint,!0)},this.handlePointerUp=(f,p)=>{this.end();const{onEnd:y,onSessionEnd:w,resumeAnimation:v}=this.handlers;if(this.dragSnapToOrigin&&v&&v(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const x=lc(f.type==="pointercancel"?this.lastMoveEventInfo:ac(p,this.transformPagePoint),this.history);this.startEvent&&y&&y(f,x),w&&w(f,x)},!vf(t))return;this.dragSnapToOrigin=s,this.handlers=n,this.transformPagePoint=o,this.contextWindow=r||window;const i=Gs(t),a=ac(i,this.transformPagePoint),{point:l}=a,{timestamp:c}=Ee;this.history=[{...l,timestamp:c}];const{onSessionStart:u}=n;u&&u(t,lc(a,this.history)),this.removeListeners=Js(ts(this.contextWindow,"pointermove",this.handlePointerMove),ts(this.contextWindow,"pointerup",this.handlePointerUp),ts(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),In(this.updatePoint)}}function ac(e,t){return t?{point:t(e.point)}:e}function Zm(e,t){return{x:e.x-t.x,y:e.y-t.y}}function lc({point:e},t){return{point:e,delta:Zm(e,fw(t)),offset:Zm(e,qP(t)),velocity:QP(t,.1)}}function qP(e){return e[0]}function fw(e){return e[e.length-1]}function QP(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,o=null;const r=fw(e);for(;n>=0&&(o=e[n],!(r.timestamp-o.timestamp>qt(t)));)n--;if(!o)return{x:0,y:0};const s=Qt(r.timestamp-o.timestamp);if(s===0)return{x:0,y:0};const i={x:(r.x-o.x)/s,y:(r.y-o.y)/s};return i.x===1/0&&(i.x=0),i.y===1/0&&(i.y=0),i}const pw=1e-4,XP=1-pw,ZP=1+pw,mw=.01,eT=0-mw,tT=0+mw;function rt(e){return e.max-e.min}function nT(e,t,n){return Math.abs(e-t)<=n}function eh(e,t,n,o=.5){e.origin=o,e.originPoint=ae(t.min,t.max,e.origin),e.scale=rt(n)/rt(t),e.translate=ae(n.min,n.max,e.origin)-e.originPoint,(e.scale>=XP&&e.scale<=ZP||isNaN(e.scale))&&(e.scale=1),(e.translate>=eT&&e.translate<=tT||isNaN(e.translate))&&(e.translate=0)}function ns(e,t,n,o){eh(e.x,t.x,n.x,o?o.originX:void 0),eh(e.y,t.y,n.y,o?o.originY:void 0)}function th(e,t,n){e.min=n.min+t.min,e.max=e.min+rt(t)}function oT(e,t,n){th(e.x,t.x,n.x),th(e.y,t.y,n.y)}function nh(e,t,n){e.min=t.min-n.min,e.max=e.min+rt(t)}function os(e,t,n){nh(e.x,t.x,n.x),nh(e.y,t.y,n.y)}function rT(e,{min:t,max:n},o){return t!==void 0&&e<t?e=o?ae(t,e,o.min):Math.max(e,t):n!==void 0&&e>n&&(e=o?ae(n,e,o.max):Math.min(e,n)),e}function oh(e,t,n){return{min:t!==void 0?e.min+t:void 0,max:n!==void 0?e.max+n-(e.max-e.min):void 0}}function sT(e,{top:t,left:n,bottom:o,right:r}){return{x:oh(e.x,n,r),y:oh(e.y,t,o)}}function rh(e,t){let n=t.min-e.min,o=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,o]=[o,n]),{min:n,max:o}}function iT(e,t){return{x:rh(e.x,t.x),y:rh(e.y,t.y)}}function aT(e,t){let n=.5;const o=rt(e),r=rt(t);return r>o?n=rr(t.min,t.max-o,e.min):o>r&&(n=rr(e.min,e.max-r,t.min)),nn(0,1,n)}function lT(e,t){const n={};return t.min!==void 0&&(n.min=t.min-e.min),t.max!==void 0&&(n.max=t.max-e.min),n}const Fu=.35;function cT(e=Fu){return e===!1?e=0:e===!0&&(e=Fu),{x:sh(e,"left","right"),y:sh(e,"top","bottom")}}function sh(e,t,n){return{min:ih(e,t),max:ih(e,n)}}function ih(e,t){return typeof e=="number"?e:e[t]||0}const ah=()=>({translate:0,scale:1,origin:0,originPoint:0}),_o=()=>({x:ah(),y:ah()}),lh=()=>({min:0,max:0}),fe=()=>({x:lh(),y:lh()});function ct(e){return[e("x"),e("y")]}function hw({top:e,left:t,right:n,bottom:o}){return{x:{min:t,max:n},y:{min:e,max:o}}}function uT({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function dT(e,t){if(!t)return e;const n=t({x:e.left,y:e.top}),o=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:o.y,right:o.x}}function cc(e){return e===void 0||e===1}function _u({scale:e,scaleX:t,scaleY:n}){return!cc(e)||!cc(t)||!cc(n)}function Kn(e){return _u(e)||gw(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}function gw(e){return ch(e.x)||ch(e.y)}function ch(e){return e&&e!=="0%"}function ja(e,t,n){const o=e-n,r=t*o;return n+r}function uh(e,t,n,o,r){return r!==void 0&&(e=ja(e,r,o)),ja(e,n,o)+t}function Uu(e,t=0,n=1,o,r){e.min=uh(e.min,t,n,o,r),e.max=uh(e.max,t,n,o,r)}function yw(e,{x:t,y:n}){Uu(e.x,t.translate,t.scale,t.originPoint),Uu(e.y,n.translate,n.scale,n.originPoint)}const dh=.999999999999,fh=1.0000000000001;function fT(e,t,n,o=!1){const r=n.length;if(!r)return;t.x=t.y=1;let s,i;for(let a=0;a<r;a++){s=n[a],i=s.projectionDelta;const{visualElement:l}=s.options;l&&l.props.style&&l.props.style.display==="contents"||(o&&s.options.layoutScroll&&s.scroll&&s!==s.root&&Bo(e,{x:-s.scroll.offset.x,y:-s.scroll.offset.y}),i&&(t.x*=i.x.scale,t.y*=i.y.scale,yw(e,i)),o&&Kn(s.latestValues)&&Bo(e,s.latestValues))}t.x<fh&&t.x>dh&&(t.x=1),t.y<fh&&t.y>dh&&(t.y=1)}function Uo(e,t){e.min=e.min+t,e.max=e.max+t}function ph(e,t,n,o,r=.5){const s=ae(e.min,e.max,r);Uu(e,t,n,s,o)}function Bo(e,t){ph(e.x,t.x,t.scaleX,t.scale,t.originX),ph(e.y,t.y,t.scaleY,t.scale,t.originY)}function vw(e,t){return hw(dT(e.getBoundingClientRect(),t))}function pT(e,t,n){const o=vw(e,n),{scroll:r}=t;return r&&(Uo(o.x,r.offset.x),Uo(o.y,r.offset.y)),o}const bw=({current:e})=>e?e.ownerDocument.defaultView:null,mT=new WeakMap;class hT{constructor(t){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=fe(),this.visualElement=t}start(t,{snapToCursor:n=!1}={}){const{presenceContext:o}=this.visualElement;if(o&&o.isPresent===!1)return;const r=u=>{const{dragSnapToOrigin:f}=this.getProps();f?this.pauseAnimation():this.stopAnimation(),n&&this.snapToCursor(Gs(u).point)},s=(u,f)=>{const{drag:p,dragPropagation:y,onDragStart:w}=this.getProps();if(p&&!y&&(this.openDragLock&&this.openDragLock(),this.openDragLock=aj(p),!this.openDragLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),ct(x=>{let h=this.getAxisMotionValue(x).get()||0;if(Dt.test(h)){const{projection:g}=this.visualElement;if(g&&g.layout){const b=g.layout.layoutBox[x];b&&(h=rt(b)*(parseFloat(h)/100))}}this.originPoint[x]=h}),w&&oe.postRender(()=>w(u,f)),Au(this.visualElement,"transform");const{animationState:v}=this.visualElement;v&&v.setActive("whileDrag",!0)},i=(u,f)=>{const{dragPropagation:p,dragDirectionLock:y,onDirectionLock:w,onDrag:v}=this.getProps();if(!p&&!this.openDragLock)return;const{offset:x}=f;if(y&&this.currentDirection===null){this.currentDirection=gT(x),this.currentDirection!==null&&w&&w(this.currentDirection);return}this.updateAxis("x",f.point,x),this.updateAxis("y",f.point,x),this.visualElement.render(),v&&v(u,f)},a=(u,f)=>this.stop(u,f),l=()=>ct(u=>{var f;return this.getAnimationState(u)==="paused"&&((f=this.getAxisMotionValue(u).animation)===null||f===void 0?void 0:f.play())}),{dragSnapToOrigin:c}=this.getProps();this.panSession=new dw(t,{onSessionStart:r,onStart:s,onMove:i,onSessionEnd:a,resumeAnimation:l},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:c,contextWindow:bw(this.visualElement)})}stop(t,n){const o=this.isDragging;if(this.cancel(),!o)return;const{velocity:r}=n;this.startAnimation(r);const{onDragEnd:s}=this.getProps();s&&oe.postRender(()=>s(t,n))}cancel(){this.isDragging=!1;const{projection:t,animationState:n}=this.visualElement;t&&(t.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:o}=this.getProps();!o&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),n&&n.setActive("whileDrag",!1)}updateAxis(t,n,o){const{drag:r}=this.getProps();if(!o||!Si(t,r,this.currentDirection))return;const s=this.getAxisMotionValue(t);let i=this.originPoint[t]+o[t];this.constraints&&this.constraints[t]&&(i=rT(i,this.constraints[t],this.elastic[t])),s.set(i)}resolveConstraints(){var t;const{dragConstraints:n,dragElastic:o}=this.getProps(),r=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(t=this.visualElement.projection)===null||t===void 0?void 0:t.layout,s=this.constraints;n&&Do(n)?this.constraints||(this.constraints=this.resolveRefConstraints()):n&&r?this.constraints=sT(r.layoutBox,n):this.constraints=!1,this.elastic=cT(o),s!==this.constraints&&r&&this.constraints&&!this.hasMutatedConstraints&&ct(i=>{this.constraints!==!1&&this.getAxisMotionValue(i)&&(this.constraints[i]=lT(r.layoutBox[i],this.constraints[i]))})}resolveRefConstraints(){const{dragConstraints:t,onMeasureDragConstraints:n}=this.getProps();if(!t||!Do(t))return!1;const o=t.current,{projection:r}=this.visualElement;if(!r||!r.layout)return!1;const s=pT(o,r.root,this.visualElement.getTransformPagePoint());let i=iT(r.layout.layoutBox,s);if(n){const a=n(uT(i));this.hasMutatedConstraints=!!a,a&&(i=hw(a))}return i}startAnimation(t){const{drag:n,dragMomentum:o,dragElastic:r,dragTransition:s,dragSnapToOrigin:i,onDragTransitionEnd:a}=this.getProps(),l=this.constraints||{},c=ct(u=>{if(!Si(u,n,this.currentDirection))return;let f=l&&l[u]||{};i&&(f={min:0,max:0});const p=r?200:1e6,y=r?40:1e7,w={type:"inertia",velocity:o?t[u]:0,bounceStiffness:p,bounceDamping:y,timeConstant:750,restDelta:1,restSpeed:10,...s,...f};return this.startAxisValueAnimation(u,w)});return Promise.all(c).then(a)}startAxisValueAnimation(t,n){const o=this.getAxisMotionValue(t);return Au(this.visualElement,t),o.start(Rf(t,o,0,n,this.visualElement,!1))}stopAnimation(){ct(t=>this.getAxisMotionValue(t).stop())}pauseAnimation(){ct(t=>{var n;return(n=this.getAxisMotionValue(t).animation)===null||n===void 0?void 0:n.pause()})}getAnimationState(t){var n;return(n=this.getAxisMotionValue(t).animation)===null||n===void 0?void 0:n.state}getAxisMotionValue(t){const n=`_drag${t.toUpperCase()}`,o=this.visualElement.getProps(),r=o[n];return r||this.visualElement.getValue(t,(o.initial?o.initial[t]:void 0)||0)}snapToCursor(t){ct(n=>{const{drag:o}=this.getProps();if(!Si(n,o,this.currentDirection))return;const{projection:r}=this.visualElement,s=this.getAxisMotionValue(n);if(r&&r.layout){const{min:i,max:a}=r.layout.layoutBox[n];s.set(t[n]-ae(i,a,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:t,dragConstraints:n}=this.getProps(),{projection:o}=this.visualElement;if(!Do(n)||!o||!this.constraints)return;this.stopAnimation();const r={x:0,y:0};ct(i=>{const a=this.getAxisMotionValue(i);if(a&&this.constraints!==!1){const l=a.get();r[i]=aT({min:l,max:l},this.constraints[i])}});const{transformTemplate:s}=this.visualElement.getProps();this.visualElement.current.style.transform=s?s({},""):"none",o.root&&o.root.updateScroll(),o.updateLayout(),this.resolveConstraints(),ct(i=>{if(!Si(i,t,null))return;const a=this.getAxisMotionValue(i),{min:l,max:c}=this.constraints[i];a.set(ae(l,c,r[i]))})}addListeners(){if(!this.visualElement.current)return;mT.set(this.visualElement,this);const t=this.visualElement.current,n=ts(t,"pointerdown",l=>{const{drag:c,dragListener:u=!0}=this.getProps();c&&u&&this.start(l)}),o=()=>{const{dragConstraints:l}=this.getProps();Do(l)&&l.current&&(this.constraints=this.resolveRefConstraints())},{projection:r}=this.visualElement,s=r.addEventListener("measure",o);r&&!r.layout&&(r.root&&r.root.updateScroll(),r.updateLayout()),oe.read(o);const i=As(window,"resize",()=>this.scalePositionWithinConstraints()),a=r.addEventListener("didUpdate",({delta:l,hasLayoutChanged:c})=>{this.isDragging&&c&&(ct(u=>{const f=this.getAxisMotionValue(u);f&&(this.originPoint[u]+=l[u].translate,f.set(f.get()+l[u].translate))}),this.visualElement.render())});return()=>{i(),n(),s(),a&&a()}}getProps(){const t=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:o=!1,dragPropagation:r=!1,dragConstraints:s=!1,dragElastic:i=Fu,dragMomentum:a=!0}=t;return{...t,drag:n,dragDirectionLock:o,dragPropagation:r,dragConstraints:s,dragElastic:i,dragMomentum:a}}}function Si(e,t,n){return(t===!0||t===e)&&(n===null||n===e)}function gT(e,t=10){let n=null;return Math.abs(e.y)>t?n="y":Math.abs(e.x)>t&&(n="x"),n}class yT extends $n{constructor(t){super(t),this.removeGroupControls=tt,this.removeListeners=tt,this.controls=new hT(t)}mount(){const{dragControls:t}=this.node.getProps();t&&(this.removeGroupControls=t.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||tt}unmount(){this.removeGroupControls(),this.removeListeners()}}const mh=e=>(t,n)=>{e&&oe.postRender(()=>e(t,n))};class vT extends $n{constructor(){super(...arguments),this.removePointerDownListener=tt}onPointerDown(t){this.session=new dw(t,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:bw(this.node)})}createPanHandlers(){const{onPanSessionStart:t,onPanStart:n,onPan:o,onPanEnd:r}=this.node.getProps();return{onSessionStart:mh(t),onStart:mh(n),onMove:o,onEnd:(s,i)=>{delete this.session,r&&oe.postRender(()=>r(s,i))}}}mount(){this.removePointerDownListener=ts(this.node.current,"pointerdown",t=>this.onPointerDown(t))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const zi={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function hh(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}const Or={correct:(e,t)=>{if(!t.target)return e;if(typeof e=="string")if(H.test(e))e=parseFloat(e);else return e;const n=hh(e,t.target.x),o=hh(e,t.target.y);return`${n}% ${o}%`}},bT={correct:(e,{treeScale:t,projectionDelta:n})=>{const o=e,r=Ln.parse(e);if(r.length>5)return o;const s=Ln.createTransformer(e),i=typeof r[0]!="number"?1:0,a=n.x.scale*t.x,l=n.y.scale*t.y;r[0+i]/=a,r[1+i]/=l;const c=ae(a,l,.5);return typeof r[2+i]=="number"&&(r[2+i]/=c),typeof r[3+i]=="number"&&(r[3+i]/=c),s(r)}};class wT extends m.Component{componentDidMount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:o,layoutId:r}=this.props,{projection:s}=t;Bk(xT),s&&(n.group&&n.group.add(s),o&&o.register&&r&&o.register(s),s.root.didUpdate(),s.addEventListener("animationComplete",()=>{this.safeToRemove()}),s.setOptions({...s.options,onExitComplete:()=>this.safeToRemove()})),zi.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){const{layoutDependency:n,visualElement:o,drag:r,isPresent:s}=this.props,i=o.projection;return i&&(i.isPresent=s,r||t.layoutDependency!==n||n===void 0?i.willUpdate():this.safeToRemove(),t.isPresent!==s&&(s?i.promote():i.relegate()||oe.postRender(()=>{const a=i.getStack();(!a||!a.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:t}=this.props.visualElement;t&&(t.root.didUpdate(),rf.postRender(()=>{!t.currentAnimation&&t.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:o}=this.props,{projection:r}=t;r&&(r.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(r),o&&o.deregister&&o.deregister(r))}safeToRemove(){const{safeToRemove:t}=this.props;t&&t()}render(){return null}}function ww(e){const[t,n]=tb(),o=m.useContext(qd);return d.jsx(wT,{...e,layoutGroup:o,switchLayoutGroup:m.useContext(ub),isPresent:t,safeToRemove:n})}const xT={borderRadius:{...Or,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Or,borderTopRightRadius:Or,borderBottomLeftRadius:Or,borderBottomRightRadius:Or,boxShadow:bT};function ST(e,t,n){const o=Oe(e)?e:Ps(e);return o.start(Rf("",o,t,n)),o.animation}function CT(e){return e instanceof SVGElement&&e.tagName!=="svg"}const ET=(e,t)=>e.depth-t.depth;class kT{constructor(){this.children=[],this.isDirty=!1}add(t){bf(this.children,t),this.isDirty=!0}remove(t){wf(this.children,t),this.isDirty=!0}forEach(t){this.isDirty&&this.children.sort(ET),this.isDirty=!1,this.children.forEach(t)}}function jT(e,t){const n=Ft.now(),o=({timestamp:r})=>{const s=r-n;s>=t&&(In(o),e(s-t))};return oe.read(o,!0),()=>In(o)}const xw=["TopLeft","TopRight","BottomLeft","BottomRight"],PT=xw.length,gh=e=>typeof e=="string"?parseFloat(e):e,yh=e=>typeof e=="number"||H.test(e);function TT(e,t,n,o,r,s){r?(e.opacity=ae(0,n.opacity!==void 0?n.opacity:1,AT(o)),e.opacityExit=ae(t.opacity!==void 0?t.opacity:1,0,RT(o))):s&&(e.opacity=ae(t.opacity!==void 0?t.opacity:1,n.opacity!==void 0?n.opacity:1,o));for(let i=0;i<PT;i++){const a=`border${xw[i]}Radius`;let l=vh(t,a),c=vh(n,a);if(l===void 0&&c===void 0)continue;l||(l=0),c||(c=0),l===0||c===0||yh(l)===yh(c)?(e[a]=Math.max(ae(gh(l),gh(c),o),0),(Dt.test(c)||Dt.test(l))&&(e[a]+="%")):e[a]=c}(t.rotate||n.rotate)&&(e.rotate=ae(t.rotate||0,n.rotate||0,o))}function vh(e,t){return e[t]!==void 0?e[t]:e.borderRadius}const AT=Sw(0,.5,Bb),RT=Sw(.5,.95,tt);function Sw(e,t,n){return o=>o<e?0:o>t?1:n(rr(e,t,o))}function bh(e,t){e.min=t.min,e.max=t.max}function lt(e,t){bh(e.x,t.x),bh(e.y,t.y)}function wh(e,t){e.translate=t.translate,e.scale=t.scale,e.originPoint=t.originPoint,e.origin=t.origin}function xh(e,t,n,o,r){return e-=t,e=ja(e,1/n,o),r!==void 0&&(e=ja(e,1/r,o)),e}function NT(e,t=0,n=1,o=.5,r,s=e,i=e){if(Dt.test(t)&&(t=parseFloat(t),t=ae(i.min,i.max,t/100)-i.min),typeof t!="number")return;let a=ae(s.min,s.max,o);e===s&&(a-=t),e.min=xh(e.min,t,n,a,r),e.max=xh(e.max,t,n,a,r)}function Sh(e,t,[n,o,r],s,i){NT(e,t[n],t[o],t[r],t.scale,s,i)}const OT=["x","scaleX","originX"],MT=["y","scaleY","originY"];function Ch(e,t,n,o){Sh(e.x,t,OT,n?n.x:void 0,o?o.x:void 0),Sh(e.y,t,MT,n?n.y:void 0,o?o.y:void 0)}function Eh(e){return e.translate===0&&e.scale===1}function Cw(e){return Eh(e.x)&&Eh(e.y)}function kh(e,t){return e.min===t.min&&e.max===t.max}function IT(e,t){return kh(e.x,t.x)&&kh(e.y,t.y)}function jh(e,t){return Math.round(e.min)===Math.round(t.min)&&Math.round(e.max)===Math.round(t.max)}function Ew(e,t){return jh(e.x,t.x)&&jh(e.y,t.y)}function Ph(e){return rt(e.x)/rt(e.y)}function Th(e,t){return e.translate===t.translate&&e.scale===t.scale&&e.originPoint===t.originPoint}class LT{constructor(){this.members=[]}add(t){bf(this.members,t),t.scheduleRender()}remove(t){if(wf(this.members,t),t===this.prevLead&&(this.prevLead=void 0),t===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(t){const n=this.members.findIndex(r=>t===r);if(n===0)return!1;let o;for(let r=n;r>=0;r--){const s=this.members[r];if(s.isPresent!==!1){o=s;break}}return o?(this.promote(o),!0):!1}promote(t,n){const o=this.lead;if(t!==o&&(this.prevLead=o,this.lead=t,t.show(),o)){o.instance&&o.scheduleRender(),t.scheduleRender(),t.resumeFrom=o,n&&(t.resumeFrom.preserveOpacity=!0),o.snapshot&&(t.snapshot=o.snapshot,t.snapshot.latestValues=o.animationValues||o.latestValues),t.root&&t.root.isUpdating&&(t.isLayoutDirty=!0);const{crossfade:r}=t.options;r===!1&&o.hide()}}exitAnimationComplete(){this.members.forEach(t=>{const{options:n,resumingFrom:o}=t;n.onExitComplete&&n.onExitComplete(),o&&o.options.onExitComplete&&o.options.onExitComplete()})}scheduleRender(){this.members.forEach(t=>{t.instance&&t.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function DT(e,t,n){let o="";const r=e.x.translate/t.x,s=e.y.translate/t.y,i=(n==null?void 0:n.z)||0;if((r||s||i)&&(o=`translate3d(${r}px, ${s}px, ${i}px) `),(t.x!==1||t.y!==1)&&(o+=`scale(${1/t.x}, ${1/t.y}) `),n){const{transformPerspective:c,rotate:u,rotateX:f,rotateY:p,skewX:y,skewY:w}=n;c&&(o=`perspective(${c}px) ${o}`),u&&(o+=`rotate(${u}deg) `),f&&(o+=`rotateX(${f}deg) `),p&&(o+=`rotateY(${p}deg) `),y&&(o+=`skewX(${y}deg) `),w&&(o+=`skewY(${w}deg) `)}const a=e.x.scale*t.x,l=e.y.scale*t.y;return(a!==1||l!==1)&&(o+=`scale(${a}, ${l})`),o||"none"}const Yn={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0},Vr=typeof window<"u"&&window.MotionDebug!==void 0,uc=["","X","Y","Z"],FT={visibility:"hidden"},Ah=1e3;let _T=0;function dc(e,t,n,o){const{latestValues:r}=t;r[e]&&(n[e]=r[e],t.setStaticValue(e,0),o&&(o[e]=0))}function kw(e){if(e.hasCheckedOptimisedAppear=!0,e.root===e)return;const{visualElement:t}=e.options;if(!t)return;const n=Mb(t);if(window.MotionHasOptimisedAnimation(n,"transform")){const{layout:r,layoutId:s}=e.options;window.MotionCancelOptimisedAnimation(n,"transform",oe,!(r||s))}const{parent:o}=e;o&&!o.hasCheckedOptimisedAppear&&kw(o)}function jw({attachResizeListener:e,defaultParent:t,measureScroll:n,checkIsScrollRoot:o,resetTransform:r}){return class{constructor(i={},a=t==null?void 0:t()){this.id=_T++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,Vr&&(Yn.totalNodes=Yn.resolvedTargetDeltas=Yn.recalculatedProjection=0),this.nodes.forEach(VT),this.nodes.forEach(JT),this.nodes.forEach(GT),this.nodes.forEach(HT),Vr&&window.MotionDebug.record(Yn)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=i,this.root=a?a.root||a:this,this.path=a?[...a.path,a]:[],this.parent=a,this.depth=a?a.depth+1:0;for(let l=0;l<this.path.length;l++)this.path[l].shouldResetTransform=!0;this.root===this&&(this.nodes=new kT)}addEventListener(i,a){return this.eventHandlers.has(i)||this.eventHandlers.set(i,new xf),this.eventHandlers.get(i).add(a)}notifyListeners(i,...a){const l=this.eventHandlers.get(i);l&&l.notify(...a)}hasListeners(i){return this.eventHandlers.has(i)}mount(i,a=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=CT(i),this.instance=i;const{layoutId:l,layout:c,visualElement:u}=this.options;if(u&&!u.current&&u.mount(i),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),a&&(c||l)&&(this.isLayoutDirty=!0),e){let f;const p=()=>this.root.updateBlockedByResize=!1;e(i,()=>{this.root.updateBlockedByResize=!0,f&&f(),f=jT(p,250),zi.hasAnimatedSinceResize&&(zi.hasAnimatedSinceResize=!1,this.nodes.forEach(Nh))})}l&&this.root.registerSharedNode(l,this),this.options.animate!==!1&&u&&(l||c)&&this.addEventListener("didUpdate",({delta:f,hasLayoutChanged:p,hasRelativeTargetChanged:y,layout:w})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const v=this.options.transition||u.getDefaultTransition()||XT,{onLayoutAnimationStart:x,onLayoutAnimationComplete:h}=u.getProps(),g=!this.targetLayout||!Ew(this.targetLayout,w)||y,b=!p&&y;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||b||p&&(g||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(f,b);const S={...hf(v,"layout"),onPlay:x,onComplete:h};(u.shouldReduceMotion||this.options.layoutRoot)&&(S.delay=0,S.type=!1),this.startAnimation(S)}else p||Nh(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=w})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const i=this.getStack();i&&i.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,In(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(KT),this.animationId++)}getTransformTemplate(){const{visualElement:i}=this.options;return i&&i.getProps().transformTemplate}willUpdate(i=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&kw(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let u=0;u<this.path.length;u++){const f=this.path[u];f.shouldResetTransform=!0,f.updateScroll("snapshot"),f.options.layoutRoot&&f.willUpdate(!1)}const{layoutId:a,layout:l}=this.options;if(a===void 0&&!l)return;const c=this.getTransformTemplate();this.prevTransformTemplateValue=c?c(this.latestValues,""):void 0,this.updateSnapshot(),i&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(Rh);return}this.isUpdating||this.nodes.forEach($T),this.isUpdating=!1,this.nodes.forEach(zT),this.nodes.forEach(UT),this.nodes.forEach(BT),this.clearAllSnapshots();const a=Ft.now();Ee.delta=nn(0,1e3/60,a-Ee.timestamp),Ee.timestamp=a,Ee.isProcessing=!0,tc.update.process(Ee),tc.preRender.process(Ee),tc.render.process(Ee),Ee.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,rf.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(WT),this.sharedNodes.forEach(YT)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,oe.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){oe.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let l=0;l<this.path.length;l++)this.path[l].updateScroll();const i=this.layout;this.layout=this.measure(!1),this.layoutCorrected=fe(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:a}=this.options;a&&a.notify("LayoutMeasure",this.layout.layoutBox,i?i.layoutBox:void 0)}updateScroll(i="measure"){let a=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===i&&(a=!1),a){const l=o(this.instance);this.scroll={animationId:this.root.animationId,phase:i,isRoot:l,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:l}}}resetTransform(){if(!r)return;const i=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,a=this.projectionDelta&&!Cw(this.projectionDelta),l=this.getTransformTemplate(),c=l?l(this.latestValues,""):void 0,u=c!==this.prevTransformTemplateValue;i&&(a||Kn(this.latestValues)||u)&&(r(this.instance,c),this.shouldResetTransform=!1,this.scheduleRender())}measure(i=!0){const a=this.measurePageBox();let l=this.removeElementScroll(a);return i&&(l=this.removeTransform(l)),ZT(l),{animationId:this.root.animationId,measuredBox:a,layoutBox:l,latestValues:{},source:this.id}}measurePageBox(){var i;const{visualElement:a}=this.options;if(!a)return fe();const l=a.measureViewportBox();if(!(((i=this.scroll)===null||i===void 0?void 0:i.wasRoot)||this.path.some(eA))){const{scroll:u}=this.root;u&&(Uo(l.x,u.offset.x),Uo(l.y,u.offset.y))}return l}removeElementScroll(i){var a;const l=fe();if(lt(l,i),!((a=this.scroll)===null||a===void 0)&&a.wasRoot)return l;for(let c=0;c<this.path.length;c++){const u=this.path[c],{scroll:f,options:p}=u;u!==this.root&&f&&p.layoutScroll&&(f.wasRoot&&lt(l,i),Uo(l.x,f.offset.x),Uo(l.y,f.offset.y))}return l}applyTransform(i,a=!1){const l=fe();lt(l,i);for(let c=0;c<this.path.length;c++){const u=this.path[c];!a&&u.options.layoutScroll&&u.scroll&&u!==u.root&&Bo(l,{x:-u.scroll.offset.x,y:-u.scroll.offset.y}),Kn(u.latestValues)&&Bo(l,u.latestValues)}return Kn(this.latestValues)&&Bo(l,this.latestValues),l}removeTransform(i){const a=fe();lt(a,i);for(let l=0;l<this.path.length;l++){const c=this.path[l];if(!c.instance||!Kn(c.latestValues))continue;_u(c.latestValues)&&c.updateSnapshot();const u=fe(),f=c.measurePageBox();lt(u,f),Ch(a,c.latestValues,c.snapshot?c.snapshot.layoutBox:void 0,u)}return Kn(this.latestValues)&&Ch(a,this.latestValues),a}setTargetDelta(i){this.targetDelta=i,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(i){this.options={...this.options,...i,crossfade:i.crossfade!==void 0?i.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Ee.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(i=!1){var a;const l=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=l.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=l.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=l.isSharedProjectionDirty);const c=!!this.resumingFrom||this!==l;if(!(i||c&&this.isSharedProjectionDirty||this.isProjectionDirty||!((a=this.parent)===null||a===void 0)&&a.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:f,layoutId:p}=this.options;if(!(!this.layout||!(f||p))){if(this.resolvedRelativeTargetAt=Ee.timestamp,!this.targetDelta&&!this.relativeTarget){const y=this.getClosestProjectingParent();y&&y.layout&&this.animationProgress!==1?(this.relativeParent=y,this.forceRelativeParentToResolveTarget(),this.relativeTarget=fe(),this.relativeTargetOrigin=fe(),os(this.relativeTargetOrigin,this.layout.layoutBox,y.layout.layoutBox),lt(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=fe(),this.targetWithTransforms=fe()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),oT(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):lt(this.target,this.layout.layoutBox),yw(this.target,this.targetDelta)):lt(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const y=this.getClosestProjectingParent();y&&!!y.resumingFrom==!!this.resumingFrom&&!y.options.layoutScroll&&y.target&&this.animationProgress!==1?(this.relativeParent=y,this.forceRelativeParentToResolveTarget(),this.relativeTarget=fe(),this.relativeTargetOrigin=fe(),os(this.relativeTargetOrigin,this.target,y.target),lt(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}Vr&&Yn.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||_u(this.parent.latestValues)||gw(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var i;const a=this.getLead(),l=!!this.resumingFrom||this!==a;let c=!0;if((this.isProjectionDirty||!((i=this.parent)===null||i===void 0)&&i.isProjectionDirty)&&(c=!1),l&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(c=!1),this.resolvedRelativeTargetAt===Ee.timestamp&&(c=!1),c)return;const{layout:u,layoutId:f}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(u||f))return;lt(this.layoutCorrected,this.layout.layoutBox);const p=this.treeScale.x,y=this.treeScale.y;fT(this.layoutCorrected,this.treeScale,this.path,l),a.layout&&!a.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(a.target=a.layout.layoutBox,a.targetWithTransforms=fe());const{target:w}=a;if(!w){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(wh(this.prevProjectionDelta.x,this.projectionDelta.x),wh(this.prevProjectionDelta.y,this.projectionDelta.y)),ns(this.projectionDelta,this.layoutCorrected,w,this.latestValues),(this.treeScale.x!==p||this.treeScale.y!==y||!Th(this.projectionDelta.x,this.prevProjectionDelta.x)||!Th(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",w)),Vr&&Yn.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(i=!0){var a;if((a=this.options.visualElement)===null||a===void 0||a.scheduleRender(),i){const l=this.getStack();l&&l.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=_o(),this.projectionDelta=_o(),this.projectionDeltaWithTransform=_o()}setAnimationOrigin(i,a=!1){const l=this.snapshot,c=l?l.latestValues:{},u={...this.latestValues},f=_o();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!a;const p=fe(),y=l?l.source:void 0,w=this.layout?this.layout.source:void 0,v=y!==w,x=this.getStack(),h=!x||x.members.length<=1,g=!!(v&&!h&&this.options.crossfade===!0&&!this.path.some(QT));this.animationProgress=0;let b;this.mixTargetDelta=S=>{const C=S/1e3;Oh(f.x,i.x,C),Oh(f.y,i.y,C),this.setTargetDelta(f),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(os(p,this.layout.layoutBox,this.relativeParent.layout.layoutBox),qT(this.relativeTarget,this.relativeTargetOrigin,p,C),b&&IT(this.relativeTarget,b)&&(this.isProjectionDirty=!1),b||(b=fe()),lt(b,this.relativeTarget)),v&&(this.animationValues=u,TT(u,c,this.latestValues,C,g,h)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=C},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(i){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(In(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=oe.update(()=>{zi.hasAnimatedSinceResize=!0,this.currentAnimation=ST(0,Ah,{...i,onUpdate:a=>{this.mixTargetDelta(a),i.onUpdate&&i.onUpdate(a)},onComplete:()=>{i.onComplete&&i.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const i=this.getStack();i&&i.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(Ah),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const i=this.getLead();let{targetWithTransforms:a,target:l,layout:c,latestValues:u}=i;if(!(!a||!l||!c)){if(this!==i&&this.layout&&c&&Pw(this.options.animationType,this.layout.layoutBox,c.layoutBox)){l=this.target||fe();const f=rt(this.layout.layoutBox.x);l.x.min=i.target.x.min,l.x.max=l.x.min+f;const p=rt(this.layout.layoutBox.y);l.y.min=i.target.y.min,l.y.max=l.y.min+p}lt(a,l),Bo(a,u),ns(this.projectionDeltaWithTransform,this.layoutCorrected,a,u)}}registerSharedNode(i,a){this.sharedNodes.has(i)||this.sharedNodes.set(i,new LT),this.sharedNodes.get(i).add(a);const c=a.options.initialPromotionConfig;a.promote({transition:c?c.transition:void 0,preserveFollowOpacity:c&&c.shouldPreserveFollowOpacity?c.shouldPreserveFollowOpacity(a):void 0})}isLead(){const i=this.getStack();return i?i.lead===this:!0}getLead(){var i;const{layoutId:a}=this.options;return a?((i=this.getStack())===null||i===void 0?void 0:i.lead)||this:this}getPrevLead(){var i;const{layoutId:a}=this.options;return a?(i=this.getStack())===null||i===void 0?void 0:i.prevLead:void 0}getStack(){const{layoutId:i}=this.options;if(i)return this.root.sharedNodes.get(i)}promote({needsReset:i,transition:a,preserveFollowOpacity:l}={}){const c=this.getStack();c&&c.promote(this,l),i&&(this.projectionDelta=void 0,this.needsReset=!0),a&&this.setOptions({transition:a})}relegate(){const i=this.getStack();return i?i.relegate(this):!1}resetSkewAndRotation(){const{visualElement:i}=this.options;if(!i)return;let a=!1;const{latestValues:l}=i;if((l.z||l.rotate||l.rotateX||l.rotateY||l.rotateZ||l.skewX||l.skewY)&&(a=!0),!a)return;const c={};l.z&&dc("z",i,c,this.animationValues);for(let u=0;u<uc.length;u++)dc(`rotate${uc[u]}`,i,c,this.animationValues),dc(`skew${uc[u]}`,i,c,this.animationValues);i.render();for(const u in c)i.setStaticValue(u,c[u]),this.animationValues&&(this.animationValues[u]=c[u]);i.scheduleRender()}getProjectionStyles(i){var a,l;if(!this.instance||this.isSVG)return;if(!this.isVisible)return FT;const c={visibility:""},u=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,c.opacity="",c.pointerEvents=Wi(i==null?void 0:i.pointerEvents)||"",c.transform=u?u(this.latestValues,""):"none",c;const f=this.getLead();if(!this.projectionDelta||!this.layout||!f.target){const v={};return this.options.layoutId&&(v.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,v.pointerEvents=Wi(i==null?void 0:i.pointerEvents)||""),this.hasProjected&&!Kn(this.latestValues)&&(v.transform=u?u({},""):"none",this.hasProjected=!1),v}const p=f.animationValues||f.latestValues;this.applyTransformsToTarget(),c.transform=DT(this.projectionDeltaWithTransform,this.treeScale,p),u&&(c.transform=u(p,c.transform));const{x:y,y:w}=this.projectionDelta;c.transformOrigin=`${y.origin*100}% ${w.origin*100}% 0`,f.animationValues?c.opacity=f===this?(l=(a=p.opacity)!==null&&a!==void 0?a:this.latestValues.opacity)!==null&&l!==void 0?l:1:this.preserveOpacity?this.latestValues.opacity:p.opacityExit:c.opacity=f===this?p.opacity!==void 0?p.opacity:"":p.opacityExit!==void 0?p.opacityExit:0;for(const v in xa){if(p[v]===void 0)continue;const{correct:x,applyTo:h}=xa[v],g=c.transform==="none"?p[v]:x(p[v],f);if(h){const b=h.length;for(let S=0;S<b;S++)c[h[S]]=g}else c[v]=g}return this.options.layoutId&&(c.pointerEvents=f===this?Wi(i==null?void 0:i.pointerEvents)||"":"none"),c}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(i=>{var a;return(a=i.currentAnimation)===null||a===void 0?void 0:a.stop()}),this.root.nodes.forEach(Rh),this.root.sharedNodes.clear()}}}function UT(e){e.updateLayout()}function BT(e){var t;const n=((t=e.resumeFrom)===null||t===void 0?void 0:t.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&n&&e.hasListeners("didUpdate")){const{layoutBox:o,measuredBox:r}=e.layout,{animationType:s}=e.options,i=n.source!==e.layout.source;s==="size"?ct(f=>{const p=i?n.measuredBox[f]:n.layoutBox[f],y=rt(p);p.min=o[f].min,p.max=p.min+y}):Pw(s,n.layoutBox,o)&&ct(f=>{const p=i?n.measuredBox[f]:n.layoutBox[f],y=rt(o[f]);p.max=p.min+y,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[f].max=e.relativeTarget[f].min+y)});const a=_o();ns(a,o,n.layoutBox);const l=_o();i?ns(l,e.applyTransform(r,!0),n.measuredBox):ns(l,o,n.layoutBox);const c=!Cw(a);let u=!1;if(!e.resumeFrom){const f=e.getClosestProjectingParent();if(f&&!f.resumeFrom){const{snapshot:p,layout:y}=f;if(p&&y){const w=fe();os(w,n.layoutBox,p.layoutBox);const v=fe();os(v,o,y.layoutBox),Ew(w,v)||(u=!0),f.options.layoutRoot&&(e.relativeTarget=v,e.relativeTargetOrigin=w,e.relativeParent=f)}}}e.notifyListeners("didUpdate",{layout:o,snapshot:n,delta:l,layoutDelta:a,hasLayoutChanged:c,hasRelativeTargetChanged:u})}else if(e.isLead()){const{onExitComplete:o}=e.options;o&&o()}e.options.transition=void 0}function VT(e){Vr&&Yn.totalNodes++,e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function HT(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function WT(e){e.clearSnapshot()}function Rh(e){e.clearMeasurements()}function $T(e){e.isLayoutDirty=!1}function zT(e){const{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function Nh(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function JT(e){e.resolveTargetDelta()}function GT(e){e.calcProjection()}function KT(e){e.resetSkewAndRotation()}function YT(e){e.removeLeadSnapshot()}function Oh(e,t,n){e.translate=ae(t.translate,0,n),e.scale=ae(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function Mh(e,t,n,o){e.min=ae(t.min,n.min,o),e.max=ae(t.max,n.max,o)}function qT(e,t,n,o){Mh(e.x,t.x,n.x,o),Mh(e.y,t.y,n.y,o)}function QT(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}const XT={duration:.45,ease:[.4,0,.1,1]},Ih=e=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),Lh=Ih("applewebkit/")&&!Ih("chrome/")?Math.round:tt;function Dh(e){e.min=Lh(e.min),e.max=Lh(e.max)}function ZT(e){Dh(e.x),Dh(e.y)}function Pw(e,t,n){return e==="position"||e==="preserve-aspect"&&!nT(Ph(t),Ph(n),.2)}function eA(e){var t;return e!==e.root&&((t=e.scroll)===null||t===void 0?void 0:t.wasRoot)}const tA=jw({attachResizeListener:(e,t)=>As(e,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),fc={current:void 0},Tw=jw({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!fc.current){const e=new tA({});e.mount(window),e.setOptions({layoutScroll:!0}),fc.current=e}return fc.current},resetTransform:(e,t)=>{e.style.transform=t!==void 0?t:"none"},checkIsScrollRoot:e=>window.getComputedStyle(e).position==="fixed"}),nA={pan:{Feature:vT},drag:{Feature:yT,ProjectionNode:Tw,MeasureLayout:ww}};function Fh(e,t,n){const{props:o}=e;e.animationState&&o.whileHover&&e.animationState.setActive("whileHover",n==="Start");const r="onHover"+n,s=o[r];s&&oe.postRender(()=>s(t,Gs(t)))}class oA extends $n{mount(){const{current:t}=this.node;t&&(this.unmount=nj(t,n=>(Fh(this.node,n,"Start"),o=>Fh(this.node,o,"End"))))}unmount(){}}class rA extends $n{constructor(){super(...arguments),this.isActive=!1}onFocus(){let t=!1;try{t=this.node.current.matches(":focus-visible")}catch{t=!0}!t||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Js(As(this.node.current,"focus",()=>this.onFocus()),As(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function _h(e,t,n){const{props:o}=e;e.animationState&&o.whileTap&&e.animationState.setActive("whileTap",n==="Start");const r="onTap"+(n==="End"?"":n),s=o[r];s&&oe.postRender(()=>s(t,Gs(t)))}class sA extends $n{mount(){const{current:t}=this.node;t&&(this.unmount=ij(t,n=>(_h(this.node,n,"Start"),(o,{success:r})=>_h(this.node,o,r?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const Bu=new WeakMap,pc=new WeakMap,iA=e=>{const t=Bu.get(e.target);t&&t(e)},aA=e=>{e.forEach(iA)};function lA({root:e,...t}){const n=e||document;pc.has(n)||pc.set(n,{});const o=pc.get(n),r=JSON.stringify(t);return o[r]||(o[r]=new IntersectionObserver(aA,{root:e,...t})),o[r]}function cA(e,t,n){const o=lA(t);return Bu.set(e,n),o.observe(e),()=>{Bu.delete(e),o.unobserve(e)}}const uA={some:0,all:1};class dA extends $n{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:t={}}=this.node.getProps(),{root:n,margin:o,amount:r="some",once:s}=t,i={root:n?n.current:void 0,rootMargin:o,threshold:typeof r=="number"?r:uA[r]},a=l=>{const{isIntersecting:c}=l;if(this.isInView===c||(this.isInView=c,s&&!c&&this.hasEnteredView))return;c&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",c);const{onViewportEnter:u,onViewportLeave:f}=this.node.getProps(),p=c?u:f;p&&p(l)};return cA(this.node.current,i,a)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:t,prevProps:n}=this.node;["amount","margin","root"].some(fA(t,n))&&this.startObserver()}unmount(){}}function fA({viewport:e={}},{viewport:t={}}={}){return n=>e[n]!==t[n]}const pA={inView:{Feature:dA},tap:{Feature:sA},focus:{Feature:rA},hover:{Feature:oA}},mA={layout:{ProjectionNode:Tw,MeasureLayout:ww}},Vu={current:null},Aw={current:!1};function hA(){if(Aw.current=!0,!!Zd)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),t=()=>Vu.current=e.matches;e.addListener(t),t()}else Vu.current=!1}const gA=[...ew,Ae,Ln],yA=e=>gA.find(Zb(e)),Uh=new WeakMap;function vA(e,t,n){for(const o in t){const r=t[o],s=n[o];if(Oe(r))e.addValue(o,r);else if(Oe(s))e.addValue(o,Ps(r,{owner:e}));else if(s!==r)if(e.hasValue(o)){const i=e.getValue(o);i.liveStyle===!0?i.jump(r):i.hasAnimated||i.set(r)}else{const i=e.getStaticValue(o);e.addValue(o,Ps(i!==void 0?i:r,{owner:e}))}}for(const o in n)t[o]===void 0&&e.removeValue(o);return t}const Bh=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class bA{scrapeMotionValuesFromProps(t,n,o){return{}}constructor({parent:t,props:n,presenceContext:o,reducedMotionConfig:r,blockInitialAnimation:s,visualState:i},a={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=Pf,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const y=Ft.now();this.renderScheduledAt<y&&(this.renderScheduledAt=y,oe.render(this.render,!1,!0))};const{latestValues:l,renderState:c,onUpdate:u}=i;this.onUpdate=u,this.latestValues=l,this.baseTarget={...l},this.initialValues=n.initial?{...l}:{},this.renderState=c,this.parent=t,this.props=n,this.presenceContext=o,this.depth=t?t.depth+1:0,this.reducedMotionConfig=r,this.options=a,this.blockInitialAnimation=!!s,this.isControllingVariants=al(n),this.isVariantNode=lb(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(t&&t.current);const{willChange:f,...p}=this.scrapeMotionValuesFromProps(n,{},this);for(const y in p){const w=p[y];l[y]!==void 0&&Oe(w)&&w.set(l[y],!1)}}mount(t){this.current=t,Uh.set(t,this),this.projection&&!this.projection.instance&&this.projection.mount(t),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((n,o)=>this.bindToMotionValue(o,n)),Aw.current||hA(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:Vu.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){Uh.delete(this.current),this.projection&&this.projection.unmount(),In(this.notifyUpdate),In(this.render),this.valueSubscriptions.forEach(t=>t()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const t in this.events)this.events[t].clear();for(const t in this.features){const n=this.features[t];n&&(n.unmount(),n.isMounted=!1)}this.current=null}bindToMotionValue(t,n){this.valueSubscriptions.has(t)&&this.valueSubscriptions.get(t)();const o=mo.has(t),r=n.on("change",a=>{this.latestValues[t]=a,this.props.onUpdate&&oe.preRender(this.notifyUpdate),o&&this.projection&&(this.projection.isTransformDirty=!0)}),s=n.on("renderRequest",this.scheduleRender);let i;window.MotionCheckAppearSync&&(i=window.MotionCheckAppearSync(this,t,n)),this.valueSubscriptions.set(t,()=>{r(),s(),i&&i(),n.owner&&n.stop()})}sortNodePosition(t){return!this.current||!this.sortInstanceNodePosition||this.type!==t.type?0:this.sortInstanceNodePosition(this.current,t.current)}updateFeatures(){let t="animation";for(t in sr){const n=sr[t];if(!n)continue;const{isEnabled:o,Feature:r}=n;if(!this.features[t]&&r&&o(this.props)&&(this.features[t]=new r(this)),this.features[t]){const s=this.features[t];s.isMounted?s.update():(s.mount(),s.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):fe()}getStaticValue(t){return this.latestValues[t]}setStaticValue(t,n){this.latestValues[t]=n}update(t,n){(t.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=t,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let o=0;o<Bh.length;o++){const r=Bh[o];this.propEventSubscriptions[r]&&(this.propEventSubscriptions[r](),delete this.propEventSubscriptions[r]);const s="on"+r,i=t[s];i&&(this.propEventSubscriptions[r]=this.on(r,i))}this.prevMotionValues=vA(this,this.scrapeMotionValuesFromProps(t,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue(),this.onUpdate&&this.onUpdate(this)}getProps(){return this.props}getVariant(t){return this.props.variants?this.props.variants[t]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(t){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(t),()=>n.variantChildren.delete(t)}addValue(t,n){const o=this.values.get(t);n!==o&&(o&&this.removeValue(t),this.bindToMotionValue(t,n),this.values.set(t,n),this.latestValues[t]=n.get())}removeValue(t){this.values.delete(t);const n=this.valueSubscriptions.get(t);n&&(n(),this.valueSubscriptions.delete(t)),delete this.latestValues[t],this.removeValueFromRenderState(t,this.renderState)}hasValue(t){return this.values.has(t)}getValue(t,n){if(this.props.values&&this.props.values[t])return this.props.values[t];let o=this.values.get(t);return o===void 0&&n!==void 0&&(o=Ps(n===null?void 0:n,{owner:this}),this.addValue(t,o)),o}readValue(t,n){var o;let r=this.latestValues[t]!==void 0||!this.current?this.latestValues[t]:(o=this.getBaseTargetFromProps(this.props,t))!==null&&o!==void 0?o:this.readValueFromInstance(this.current,t,this.options);return r!=null&&(typeof r=="string"&&(Qb(r)||Hb(r))?r=parseFloat(r):!yA(r)&&Ln.test(n)&&(r=Kb(t,n)),this.setBaseTarget(t,Oe(r)?r.get():r)),Oe(r)?r.get():r}setBaseTarget(t,n){this.baseTarget[t]=n}getBaseTarget(t){var n;const{initial:o}=this.props;let r;if(typeof o=="string"||typeof o=="object"){const i=af(this.props,o,(n=this.presenceContext)===null||n===void 0?void 0:n.custom);i&&(r=i[t])}if(o&&r!==void 0)return r;const s=this.getBaseTargetFromProps(this.props,t);return s!==void 0&&!Oe(s)?s:this.initialValues[t]!==void 0&&r===void 0?void 0:this.baseTarget[t]}on(t,n){return this.events[t]||(this.events[t]=new xf),this.events[t].add(n)}notify(t,...n){this.events[t]&&this.events[t].notify(...n)}}class Rw extends bA{constructor(){super(...arguments),this.KeyframeResolver=tw}sortInstanceNodePosition(t,n){return t.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(t,n){return t.style?t.style[n]:void 0}removeValueFromRenderState(t,{vars:n,style:o}){delete n[t],delete o[t]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:t}=this.props;Oe(t)&&(this.childSubscription=t.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}}function wA(e){return window.getComputedStyle(e)}class xA extends Rw{constructor(){super(...arguments),this.type="html",this.renderInstance=yb}readValueFromInstance(t,n){if(mo.has(n)){const o=jf(n);return o&&o.default||0}else{const o=wA(t),r=(mb(n)?o.getPropertyValue(n):o[n])||0;return typeof r=="string"?r.trim():r}}measureInstanceViewportBox(t,{transformPagePoint:n}){return vw(t,n)}build(t,n,o){uf(t,n,o.transformTemplate)}scrapeMotionValuesFromProps(t,n,o){return mf(t,n,o)}}class SA extends Rw{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=fe}getBaseTargetFromProps(t,n){return t[n]}readValueFromInstance(t,n){if(mo.has(n)){const o=jf(n);return o&&o.default||0}return n=vb.has(n)?n:of(n),t.getAttribute(n)}scrapeMotionValuesFromProps(t,n,o){return xb(t,n,o)}build(t,n,o){df(t,n,this.isSVGTag,o.transformTemplate)}renderInstance(t,n,o,r){bb(t,n,o,r)}mount(t){this.isSVGTag=pf(t.tagName),super.mount(t)}}const CA=(e,t)=>sf(e)?new SA(t):new xA(t,{allowProjection:e!==m.Fragment}),EA=Yk({...GP,...pA,...nA,...mA},CA),yt=uk(EA);function Nw(e){var t,n,o="";if(typeof e=="string"||typeof e=="number")o+=e;else if(typeof e=="object")if(Array.isArray(e)){var r=e.length;for(t=0;t<r;t++)e[t]&&(n=Nw(e[t]))&&(o&&(o+=" "),o+=n)}else for(n in e)e[n]&&(o&&(o+=" "),o+=n);return o}function Ow(){for(var e,t,n=0,o="",r=arguments.length;n<r;n++)(e=arguments[n])&&(t=Nw(e))&&(o&&(o+=" "),o+=t);return o}const Nf="-",kA=e=>{const t=PA(e),{conflictingClassGroups:n,conflictingClassGroupModifiers:o}=e;return{getClassGroupId:i=>{const a=i.split(Nf);return a[0]===""&&a.length!==1&&a.shift(),Mw(a,t)||jA(i)},getConflictingClassGroupIds:(i,a)=>{const l=n[i]||[];return a&&o[i]?[...l,...o[i]]:l}}},Mw=(e,t)=>{var i;if(e.length===0)return t.classGroupId;const n=e[0],o=t.nextPart.get(n),r=o?Mw(e.slice(1),o):void 0;if(r)return r;if(t.validators.length===0)return;const s=e.join(Nf);return(i=t.validators.find(({validator:a})=>a(s)))==null?void 0:i.classGroupId},Vh=/^\[(.+)\]$/,jA=e=>{if(Vh.test(e)){const t=Vh.exec(e)[1],n=t==null?void 0:t.substring(0,t.indexOf(":"));if(n)return"arbitrary.."+n}},PA=e=>{const{theme:t,prefix:n}=e,o={nextPart:new Map,validators:[]};return AA(Object.entries(e.classGroups),n).forEach(([s,i])=>{Hu(i,o,s,t)}),o},Hu=(e,t,n,o)=>{e.forEach(r=>{if(typeof r=="string"){const s=r===""?t:Hh(t,r);s.classGroupId=n;return}if(typeof r=="function"){if(TA(r)){Hu(r(o),t,n,o);return}t.validators.push({validator:r,classGroupId:n});return}Object.entries(r).forEach(([s,i])=>{Hu(i,Hh(t,s),n,o)})})},Hh=(e,t)=>{let n=e;return t.split(Nf).forEach(o=>{n.nextPart.has(o)||n.nextPart.set(o,{nextPart:new Map,validators:[]}),n=n.nextPart.get(o)}),n},TA=e=>e.isThemeGetter,AA=(e,t)=>t?e.map(([n,o])=>{const r=o.map(s=>typeof s=="string"?t+s:typeof s=="object"?Object.fromEntries(Object.entries(s).map(([i,a])=>[t+i,a])):s);return[n,r]}):e,RA=e=>{if(e<1)return{get:()=>{},set:()=>{}};let t=0,n=new Map,o=new Map;const r=(s,i)=>{n.set(s,i),t++,t>e&&(t=0,o=n,n=new Map)};return{get(s){let i=n.get(s);if(i!==void 0)return i;if((i=o.get(s))!==void 0)return r(s,i),i},set(s,i){n.has(s)?n.set(s,i):r(s,i)}}},Iw="!",NA=e=>{const{separator:t,experimentalParseClassName:n}=e,o=t.length===1,r=t[0],s=t.length,i=a=>{const l=[];let c=0,u=0,f;for(let x=0;x<a.length;x++){let h=a[x];if(c===0){if(h===r&&(o||a.slice(x,x+s)===t)){l.push(a.slice(u,x)),u=x+s;continue}if(h==="/"){f=x;continue}}h==="["?c++:h==="]"&&c--}const p=l.length===0?a:a.substring(u),y=p.startsWith(Iw),w=y?p.substring(1):p,v=f&&f>u?f-u:void 0;return{modifiers:l,hasImportantModifier:y,baseClassName:w,maybePostfixModifierPosition:v}};return n?a=>n({className:a,parseClassName:i}):i},OA=e=>{if(e.length<=1)return e;const t=[];let n=[];return e.forEach(o=>{o[0]==="["?(t.push(...n.sort(),o),n=[]):n.push(o)}),t.push(...n.sort()),t},MA=e=>({cache:RA(e.cacheSize),parseClassName:NA(e),...kA(e)}),IA=/\s+/,LA=(e,t)=>{const{parseClassName:n,getClassGroupId:o,getConflictingClassGroupIds:r}=t,s=[],i=e.trim().split(IA);let a="";for(let l=i.length-1;l>=0;l-=1){const c=i[l],{modifiers:u,hasImportantModifier:f,baseClassName:p,maybePostfixModifierPosition:y}=n(c);let w=!!y,v=o(w?p.substring(0,y):p);if(!v){if(!w){a=c+(a.length>0?" "+a:a);continue}if(v=o(p),!v){a=c+(a.length>0?" "+a:a);continue}w=!1}const x=OA(u).join(":"),h=f?x+Iw:x,g=h+v;if(s.includes(g))continue;s.push(g);const b=r(v,w);for(let S=0;S<b.length;++S){const C=b[S];s.push(h+C)}a=c+(a.length>0?" "+a:a)}return a};function DA(){let e=0,t,n,o="";for(;e<arguments.length;)(t=arguments[e++])&&(n=Lw(t))&&(o&&(o+=" "),o+=n);return o}const Lw=e=>{if(typeof e=="string")return e;let t,n="";for(let o=0;o<e.length;o++)e[o]&&(t=Lw(e[o]))&&(n&&(n+=" "),n+=t);return n};function FA(e,...t){let n,o,r,s=i;function i(l){const c=t.reduce((u,f)=>f(u),e());return n=MA(c),o=n.cache.get,r=n.cache.set,s=a,a(l)}function a(l){const c=o(l);if(c)return c;const u=LA(l,n);return r(l,u),u}return function(){return s(DA.apply(null,arguments))}}const ee=e=>{const t=n=>n[e]||[];return t.isThemeGetter=!0,t},Dw=/^\[(?:([a-z-]+):)?(.+)\]$/i,_A=/^\d+\/\d+$/,UA=new Set(["px","full","screen"]),BA=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,VA=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,HA=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,WA=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,$A=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,$t=e=>Ko(e)||UA.has(e)||_A.test(e),dn=e=>hr(e,"length",XA),Ko=e=>!!e&&!Number.isNaN(Number(e)),mc=e=>hr(e,"number",Ko),Mr=e=>!!e&&Number.isInteger(Number(e)),zA=e=>e.endsWith("%")&&Ko(e.slice(0,-1)),z=e=>Dw.test(e),fn=e=>BA.test(e),JA=new Set(["length","size","percentage"]),GA=e=>hr(e,JA,Fw),KA=e=>hr(e,"position",Fw),YA=new Set(["image","url"]),qA=e=>hr(e,YA,e2),QA=e=>hr(e,"",ZA),Ir=()=>!0,hr=(e,t,n)=>{const o=Dw.exec(e);return o?o[1]?typeof t=="string"?o[1]===t:t.has(o[1]):n(o[2]):!1},XA=e=>VA.test(e)&&!HA.test(e),Fw=()=>!1,ZA=e=>WA.test(e),e2=e=>$A.test(e),t2=()=>{const e=ee("colors"),t=ee("spacing"),n=ee("blur"),o=ee("brightness"),r=ee("borderColor"),s=ee("borderRadius"),i=ee("borderSpacing"),a=ee("borderWidth"),l=ee("contrast"),c=ee("grayscale"),u=ee("hueRotate"),f=ee("invert"),p=ee("gap"),y=ee("gradientColorStops"),w=ee("gradientColorStopPositions"),v=ee("inset"),x=ee("margin"),h=ee("opacity"),g=ee("padding"),b=ee("saturate"),S=ee("scale"),C=ee("sepia"),k=ee("skew"),E=ee("space"),j=ee("translate"),R=()=>["auto","contain","none"],A=()=>["auto","hidden","clip","visible","scroll"],F=()=>["auto",z,t],_=()=>[z,t],W=()=>["",$t,dn],I=()=>["auto",Ko,z],O=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],D=()=>["solid","dashed","dotted","double","none"],B=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],P=()=>["start","end","center","between","around","evenly","stretch"],T=()=>["","0",z],L=()=>["auto","avoid","all","avoid-page","page","left","right","column"],M=()=>[Ko,z];return{cacheSize:500,separator:":",theme:{colors:[Ir],spacing:[$t,dn],blur:["none","",fn,z],brightness:M(),borderColor:[e],borderRadius:["none","","full",fn,z],borderSpacing:_(),borderWidth:W(),contrast:M(),grayscale:T(),hueRotate:M(),invert:T(),gap:_(),gradientColorStops:[e],gradientColorStopPositions:[zA,dn],inset:F(),margin:F(),opacity:M(),padding:_(),saturate:M(),scale:M(),sepia:T(),skew:M(),space:_(),translate:_()},classGroups:{aspect:[{aspect:["auto","square","video",z]}],container:["container"],columns:[{columns:[fn]}],"break-after":[{"break-after":L()}],"break-before":[{"break-before":L()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...O(),z]}],overflow:[{overflow:A()}],"overflow-x":[{"overflow-x":A()}],"overflow-y":[{"overflow-y":A()}],overscroll:[{overscroll:R()}],"overscroll-x":[{"overscroll-x":R()}],"overscroll-y":[{"overscroll-y":R()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[v]}],"inset-x":[{"inset-x":[v]}],"inset-y":[{"inset-y":[v]}],start:[{start:[v]}],end:[{end:[v]}],top:[{top:[v]}],right:[{right:[v]}],bottom:[{bottom:[v]}],left:[{left:[v]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",Mr,z]}],basis:[{basis:F()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",z]}],grow:[{grow:T()}],shrink:[{shrink:T()}],order:[{order:["first","last","none",Mr,z]}],"grid-cols":[{"grid-cols":[Ir]}],"col-start-end":[{col:["auto",{span:["full",Mr,z]},z]}],"col-start":[{"col-start":I()}],"col-end":[{"col-end":I()}],"grid-rows":[{"grid-rows":[Ir]}],"row-start-end":[{row:["auto",{span:[Mr,z]},z]}],"row-start":[{"row-start":I()}],"row-end":[{"row-end":I()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",z]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",z]}],gap:[{gap:[p]}],"gap-x":[{"gap-x":[p]}],"gap-y":[{"gap-y":[p]}],"justify-content":[{justify:["normal",...P()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...P(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...P(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[g]}],px:[{px:[g]}],py:[{py:[g]}],ps:[{ps:[g]}],pe:[{pe:[g]}],pt:[{pt:[g]}],pr:[{pr:[g]}],pb:[{pb:[g]}],pl:[{pl:[g]}],m:[{m:[x]}],mx:[{mx:[x]}],my:[{my:[x]}],ms:[{ms:[x]}],me:[{me:[x]}],mt:[{mt:[x]}],mr:[{mr:[x]}],mb:[{mb:[x]}],ml:[{ml:[x]}],"space-x":[{"space-x":[E]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[E]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",z,t]}],"min-w":[{"min-w":[z,t,"min","max","fit"]}],"max-w":[{"max-w":[z,t,"none","full","min","max","fit","prose",{screen:[fn]},fn]}],h:[{h:[z,t,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[z,t,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[z,t,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[z,t,"auto","min","max","fit"]}],"font-size":[{text:["base",fn,dn]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",mc]}],"font-family":[{font:[Ir]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",z]}],"line-clamp":[{"line-clamp":["none",Ko,mc]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",$t,z]}],"list-image":[{"list-image":["none",z]}],"list-style-type":[{list:["none","disc","decimal",z]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[h]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[h]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...D(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",$t,dn]}],"underline-offset":[{"underline-offset":["auto",$t,z]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:_()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",z]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",z]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[h]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...O(),KA]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",GA]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},qA]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[w]}],"gradient-via-pos":[{via:[w]}],"gradient-to-pos":[{to:[w]}],"gradient-from":[{from:[y]}],"gradient-via":[{via:[y]}],"gradient-to":[{to:[y]}],rounded:[{rounded:[s]}],"rounded-s":[{"rounded-s":[s]}],"rounded-e":[{"rounded-e":[s]}],"rounded-t":[{"rounded-t":[s]}],"rounded-r":[{"rounded-r":[s]}],"rounded-b":[{"rounded-b":[s]}],"rounded-l":[{"rounded-l":[s]}],"rounded-ss":[{"rounded-ss":[s]}],"rounded-se":[{"rounded-se":[s]}],"rounded-ee":[{"rounded-ee":[s]}],"rounded-es":[{"rounded-es":[s]}],"rounded-tl":[{"rounded-tl":[s]}],"rounded-tr":[{"rounded-tr":[s]}],"rounded-br":[{"rounded-br":[s]}],"rounded-bl":[{"rounded-bl":[s]}],"border-w":[{border:[a]}],"border-w-x":[{"border-x":[a]}],"border-w-y":[{"border-y":[a]}],"border-w-s":[{"border-s":[a]}],"border-w-e":[{"border-e":[a]}],"border-w-t":[{"border-t":[a]}],"border-w-r":[{"border-r":[a]}],"border-w-b":[{"border-b":[a]}],"border-w-l":[{"border-l":[a]}],"border-opacity":[{"border-opacity":[h]}],"border-style":[{border:[...D(),"hidden"]}],"divide-x":[{"divide-x":[a]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[a]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[h]}],"divide-style":[{divide:D()}],"border-color":[{border:[r]}],"border-color-x":[{"border-x":[r]}],"border-color-y":[{"border-y":[r]}],"border-color-s":[{"border-s":[r]}],"border-color-e":[{"border-e":[r]}],"border-color-t":[{"border-t":[r]}],"border-color-r":[{"border-r":[r]}],"border-color-b":[{"border-b":[r]}],"border-color-l":[{"border-l":[r]}],"divide-color":[{divide:[r]}],"outline-style":[{outline:["",...D()]}],"outline-offset":[{"outline-offset":[$t,z]}],"outline-w":[{outline:[$t,dn]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:W()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[h]}],"ring-offset-w":[{"ring-offset":[$t,dn]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",fn,QA]}],"shadow-color":[{shadow:[Ir]}],opacity:[{opacity:[h]}],"mix-blend":[{"mix-blend":[...B(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":B()}],filter:[{filter:["","none"]}],blur:[{blur:[n]}],brightness:[{brightness:[o]}],contrast:[{contrast:[l]}],"drop-shadow":[{"drop-shadow":["","none",fn,z]}],grayscale:[{grayscale:[c]}],"hue-rotate":[{"hue-rotate":[u]}],invert:[{invert:[f]}],saturate:[{saturate:[b]}],sepia:[{sepia:[C]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[n]}],"backdrop-brightness":[{"backdrop-brightness":[o]}],"backdrop-contrast":[{"backdrop-contrast":[l]}],"backdrop-grayscale":[{"backdrop-grayscale":[c]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[u]}],"backdrop-invert":[{"backdrop-invert":[f]}],"backdrop-opacity":[{"backdrop-opacity":[h]}],"backdrop-saturate":[{"backdrop-saturate":[b]}],"backdrop-sepia":[{"backdrop-sepia":[C]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[i]}],"border-spacing-x":[{"border-spacing-x":[i]}],"border-spacing-y":[{"border-spacing-y":[i]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",z]}],duration:[{duration:M()}],ease:[{ease:["linear","in","out","in-out",z]}],delay:[{delay:M()}],animate:[{animate:["none","spin","ping","pulse","bounce",z]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[S]}],"scale-x":[{"scale-x":[S]}],"scale-y":[{"scale-y":[S]}],rotate:[{rotate:[Mr,z]}],"translate-x":[{"translate-x":[j]}],"translate-y":[{"translate-y":[j]}],"skew-x":[{"skew-x":[k]}],"skew-y":[{"skew-y":[k]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",z]}],accent:[{accent:["auto",e]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",z]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":_()}],"scroll-mx":[{"scroll-mx":_()}],"scroll-my":[{"scroll-my":_()}],"scroll-ms":[{"scroll-ms":_()}],"scroll-me":[{"scroll-me":_()}],"scroll-mt":[{"scroll-mt":_()}],"scroll-mr":[{"scroll-mr":_()}],"scroll-mb":[{"scroll-mb":_()}],"scroll-ml":[{"scroll-ml":_()}],"scroll-p":[{"scroll-p":_()}],"scroll-px":[{"scroll-px":_()}],"scroll-py":[{"scroll-py":_()}],"scroll-ps":[{"scroll-ps":_()}],"scroll-pe":[{"scroll-pe":_()}],"scroll-pt":[{"scroll-pt":_()}],"scroll-pr":[{"scroll-pr":_()}],"scroll-pb":[{"scroll-pb":_()}],"scroll-pl":[{"scroll-pl":_()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",z]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[$t,dn,mc]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}},n2=FA(t2);function q(...e){return n2(Ow(e))}function Wh(e,t){if(typeof e=="function")return e(t);e!=null&&(e.current=t)}function ho(...e){return t=>{let n=!1;const o=e.map(r=>{const s=Wh(r,t);return!n&&typeof s=="function"&&(n=!0),s});if(n)return()=>{for(let r=0;r<o.length;r++){const s=o[r];typeof s=="function"?s():Wh(e[r],null)}}}}function ge(...e){return m.useCallback(ho(...e),e)}function o2(e){const t=r2(e),n=m.forwardRef((o,r)=>{const{children:s,...i}=o,a=m.Children.toArray(s),l=a.find(i2);if(l){const c=l.props.children,u=a.map(f=>f===l?m.Children.count(c)>1?m.Children.only(null):m.isValidElement(c)?c.props.children:null:f);return d.jsx(t,{...i,ref:r,children:m.isValidElement(c)?m.cloneElement(c,void 0,u):null})}return d.jsx(t,{...i,ref:r,children:s})});return n.displayName=`${e}.Slot`,n}function r2(e){const t=m.forwardRef((n,o)=>{const{children:r,...s}=n;if(m.isValidElement(r)){const i=l2(r),a=a2(s,r.props);return r.type!==m.Fragment&&(a.ref=o?ho(o,i):i),m.cloneElement(r,a)}return m.Children.count(r)>1?m.Children.only(null):null});return t.displayName=`${e}.SlotClone`,t}var s2=Symbol("radix.slottable");function i2(e){return m.isValidElement(e)&&typeof e.type=="function"&&"__radixId"in e.type&&e.type.__radixId===s2}function a2(e,t){const n={...t};for(const o in t){const r=e[o],s=t[o];/^on[A-Z]/.test(o)?r&&s?n[o]=(...a)=>{const l=s(...a);return r(...a),l}:r&&(n[o]=r):o==="style"?n[o]={...r,...s}:o==="className"&&(n[o]=[r,s].filter(Boolean).join(" "))}return{...e,...n}}function l2(e){var o,r;let t=(o=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:o.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(t=(r=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:r.get,n=t&&"isReactWarning"in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}var c2=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],se=c2.reduce((e,t)=>{const n=o2(`Primitive.${t}`),o=m.forwardRef((r,s)=>{const{asChild:i,...a}=r,l=i?n:t;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),d.jsx(l,{...a,ref:s})});return o.displayName=`Primitive.${t}`,{...e,[t]:o}},{});function _w(e,t){e&&nl.flushSync(()=>e.dispatchEvent(t))}var on=globalThis!=null&&globalThis.document?m.useLayoutEffect:()=>{};function u2(e,t){return m.useReducer((n,o)=>t[n][o]??n,e)}var Vt=e=>{const{present:t,children:n}=e,o=d2(t),r=typeof n=="function"?n({present:o.isPresent}):m.Children.only(n),s=ge(o.ref,f2(r));return typeof n=="function"||o.isPresent?m.cloneElement(r,{ref:s}):null};Vt.displayName="Presence";function d2(e){const[t,n]=m.useState(),o=m.useRef(null),r=m.useRef(e),s=m.useRef("none"),i=e?"mounted":"unmounted",[a,l]=u2(i,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return m.useEffect(()=>{const c=Ci(o.current);s.current=a==="mounted"?c:"none"},[a]),on(()=>{const c=o.current,u=r.current;if(u!==e){const p=s.current,y=Ci(c);e?l("MOUNT"):y==="none"||(c==null?void 0:c.display)==="none"?l("UNMOUNT"):l(u&&p!==y?"ANIMATION_OUT":"UNMOUNT"),r.current=e}},[e,l]),on(()=>{if(t){let c;const u=t.ownerDocument.defaultView??window,f=y=>{const v=Ci(o.current).includes(CSS.escape(y.animationName));if(y.target===t&&v&&(l("ANIMATION_END"),!r.current)){const x=t.style.animationFillMode;t.style.animationFillMode="forwards",c=u.setTimeout(()=>{t.style.animationFillMode==="forwards"&&(t.style.animationFillMode=x)})}},p=y=>{y.target===t&&(s.current=Ci(o.current))};return t.addEventListener("animationstart",p),t.addEventListener("animationcancel",f),t.addEventListener("animationend",f),()=>{u.clearTimeout(c),t.removeEventListener("animationstart",p),t.removeEventListener("animationcancel",f),t.removeEventListener("animationend",f)}}else l("ANIMATION_END")},[t,l]),{isPresent:["mounted","unmountSuspended"].includes(a),ref:m.useCallback(c=>{o.current=c?getComputedStyle(c):null,n(c)},[])}}function Ci(e){return(e==null?void 0:e.animationName)||"none"}function f2(e){var o,r;let t=(o=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:o.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(t=(r=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:r.get,n=t&&"isReactWarning"in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}function go(e,t=[]){let n=[];function o(s,i){const a=m.createContext(i),l=n.length;n=[...n,i];const c=f=>{var h;const{scope:p,children:y,...w}=f,v=((h=p==null?void 0:p[e])==null?void 0:h[l])||a,x=m.useMemo(()=>w,Object.values(w));return d.jsx(v.Provider,{value:x,children:y})};c.displayName=s+"Provider";function u(f,p){var v;const y=((v=p==null?void 0:p[e])==null?void 0:v[l])||a,w=m.useContext(y);if(w)return w;if(i!==void 0)return i;throw new Error(`\`${f}\` must be used within \`${s}\``)}return[c,u]}const r=()=>{const s=n.map(i=>m.createContext(i));return function(a){const l=(a==null?void 0:a[e])||s;return m.useMemo(()=>({[`__scope${e}`]:{...a,[e]:l}}),[a,l])}};return r.scopeName=e,[o,p2(r,...t)]}function p2(...e){const t=e[0];if(e.length===1)return t;const n=()=>{const o=e.map(r=>({useScope:r(),scopeName:r.scopeName}));return function(s){const i=o.reduce((a,{useScope:l,scopeName:c})=>{const f=l(s)[`__scope${c}`];return{...a,...f}},{});return m.useMemo(()=>({[`__scope${t.scopeName}`]:i}),[i])}};return n.scopeName=t.scopeName,n}function Ne(e){const t=m.useRef(e);return m.useEffect(()=>{t.current=e}),m.useMemo(()=>(...n)=>{var o;return(o=t.current)==null?void 0:o.call(t,...n)},[])}var m2=m.createContext(void 0);function ul(e){const t=m.useContext(m2);return e||t||"ltr"}function h2(e,[t,n]){return Math.min(n,Math.max(t,e))}function $(e,t,{checkForDefaultPrevented:n=!0}={}){return function(r){if(e==null||e(r),n===!1||!r.defaultPrevented)return t==null?void 0:t(r)}}function g2(e,t){return m.useReducer((n,o)=>t[n][o]??n,e)}var Of="ScrollArea",[Uw]=go(Of),[y2,vt]=Uw(Of),Bw=m.forwardRef((e,t)=>{const{__scopeScrollArea:n,type:o="hover",dir:r,scrollHideDelay:s=600,...i}=e,[a,l]=m.useState(null),[c,u]=m.useState(null),[f,p]=m.useState(null),[y,w]=m.useState(null),[v,x]=m.useState(null),[h,g]=m.useState(0),[b,S]=m.useState(0),[C,k]=m.useState(!1),[E,j]=m.useState(!1),R=ge(t,F=>l(F)),A=ul(r);return d.jsx(y2,{scope:n,type:o,dir:A,scrollHideDelay:s,scrollArea:a,viewport:c,onViewportChange:u,content:f,onContentChange:p,scrollbarX:y,onScrollbarXChange:w,scrollbarXEnabled:C,onScrollbarXEnabledChange:k,scrollbarY:v,onScrollbarYChange:x,scrollbarYEnabled:E,onScrollbarYEnabledChange:j,onCornerWidthChange:g,onCornerHeightChange:S,children:d.jsx(se.div,{dir:A,...i,ref:R,style:{position:"relative","--radix-scroll-area-corner-width":h+"px","--radix-scroll-area-corner-height":b+"px",...e.style}})})});Bw.displayName=Of;var Vw="ScrollAreaViewport",Hw=m.forwardRef((e,t)=>{const{__scopeScrollArea:n,children:o,nonce:r,...s}=e,i=vt(Vw,n),a=m.useRef(null),l=ge(t,a,i.onViewportChange);return d.jsxs(d.Fragment,{children:[d.jsx("style",{dangerouslySetInnerHTML:{__html:"[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"},nonce:r}),d.jsx(se.div,{"data-radix-scroll-area-viewport":"",...s,ref:l,style:{overflowX:i.scrollbarXEnabled?"scroll":"hidden",overflowY:i.scrollbarYEnabled?"scroll":"hidden",...e.style},children:d.jsx("div",{ref:i.onContentChange,style:{minWidth:"100%",display:"table"},children:o})})]})});Hw.displayName=Vw;var Ht="ScrollAreaScrollbar",Mf=m.forwardRef((e,t)=>{const{forceMount:n,...o}=e,r=vt(Ht,e.__scopeScrollArea),{onScrollbarXEnabledChange:s,onScrollbarYEnabledChange:i}=r,a=e.orientation==="horizontal";return m.useEffect(()=>(a?s(!0):i(!0),()=>{a?s(!1):i(!1)}),[a,s,i]),r.type==="hover"?d.jsx(v2,{...o,ref:t,forceMount:n}):r.type==="scroll"?d.jsx(b2,{...o,ref:t,forceMount:n}):r.type==="auto"?d.jsx(Ww,{...o,ref:t,forceMount:n}):r.type==="always"?d.jsx(If,{...o,ref:t}):null});Mf.displayName=Ht;var v2=m.forwardRef((e,t)=>{const{forceMount:n,...o}=e,r=vt(Ht,e.__scopeScrollArea),[s,i]=m.useState(!1);return m.useEffect(()=>{const a=r.scrollArea;let l=0;if(a){const c=()=>{window.clearTimeout(l),i(!0)},u=()=>{l=window.setTimeout(()=>i(!1),r.scrollHideDelay)};return a.addEventListener("pointerenter",c),a.addEventListener("pointerleave",u),()=>{window.clearTimeout(l),a.removeEventListener("pointerenter",c),a.removeEventListener("pointerleave",u)}}},[r.scrollArea,r.scrollHideDelay]),d.jsx(Vt,{present:n||s,children:d.jsx(Ww,{"data-state":s?"visible":"hidden",...o,ref:t})})}),b2=m.forwardRef((e,t)=>{const{forceMount:n,...o}=e,r=vt(Ht,e.__scopeScrollArea),s=e.orientation==="horizontal",i=fl(()=>l("SCROLL_END"),100),[a,l]=g2("hidden",{hidden:{SCROLL:"scrolling"},scrolling:{SCROLL_END:"idle",POINTER_ENTER:"interacting"},interacting:{SCROLL:"interacting",POINTER_LEAVE:"idle"},idle:{HIDE:"hidden",SCROLL:"scrolling",POINTER_ENTER:"interacting"}});return m.useEffect(()=>{if(a==="idle"){const c=window.setTimeout(()=>l("HIDE"),r.scrollHideDelay);return()=>window.clearTimeout(c)}},[a,r.scrollHideDelay,l]),m.useEffect(()=>{const c=r.viewport,u=s?"scrollLeft":"scrollTop";if(c){let f=c[u];const p=()=>{const y=c[u];f!==y&&(l("SCROLL"),i()),f=y};return c.addEventListener("scroll",p),()=>c.removeEventListener("scroll",p)}},[r.viewport,s,l,i]),d.jsx(Vt,{present:n||a!=="hidden",children:d.jsx(If,{"data-state":a==="hidden"?"hidden":"visible",...o,ref:t,onPointerEnter:$(e.onPointerEnter,()=>l("POINTER_ENTER")),onPointerLeave:$(e.onPointerLeave,()=>l("POINTER_LEAVE"))})})}),Ww=m.forwardRef((e,t)=>{const n=vt(Ht,e.__scopeScrollArea),{forceMount:o,...r}=e,[s,i]=m.useState(!1),a=e.orientation==="horizontal",l=fl(()=>{if(n.viewport){const c=n.viewport.offsetWidth<n.viewport.scrollWidth,u=n.viewport.offsetHeight<n.viewport.scrollHeight;i(a?c:u)}},10);return ar(n.viewport,l),ar(n.content,l),d.jsx(Vt,{present:o||s,children:d.jsx(If,{"data-state":s?"visible":"hidden",...r,ref:t})})}),If=m.forwardRef((e,t)=>{const{orientation:n="vertical",...o}=e,r=vt(Ht,e.__scopeScrollArea),s=m.useRef(null),i=m.useRef(0),[a,l]=m.useState({content:0,viewport:0,scrollbar:{size:0,paddingStart:0,paddingEnd:0}}),c=Kw(a.viewport,a.content),u={...o,sizes:a,onSizesChange:l,hasThumb:c>0&&c<1,onThumbChange:p=>s.current=p,onThumbPointerUp:()=>i.current=0,onThumbPointerDown:p=>i.current=p};function f(p,y){return k2(p,i.current,a,y)}return n==="horizontal"?d.jsx(w2,{...u,ref:t,onThumbPositionChange:()=>{if(r.viewport&&s.current){const p=r.viewport.scrollLeft,y=$h(p,a,r.dir);s.current.style.transform=`translate3d(${y}px, 0, 0)`}},onWheelScroll:p=>{r.viewport&&(r.viewport.scrollLeft=p)},onDragScroll:p=>{r.viewport&&(r.viewport.scrollLeft=f(p,r.dir))}}):n==="vertical"?d.jsx(x2,{...u,ref:t,onThumbPositionChange:()=>{if(r.viewport&&s.current){const p=r.viewport.scrollTop,y=$h(p,a);s.current.style.transform=`translate3d(0, ${y}px, 0)`}},onWheelScroll:p=>{r.viewport&&(r.viewport.scrollTop=p)},onDragScroll:p=>{r.viewport&&(r.viewport.scrollTop=f(p))}}):null}),w2=m.forwardRef((e,t)=>{const{sizes:n,onSizesChange:o,...r}=e,s=vt(Ht,e.__scopeScrollArea),[i,a]=m.useState(),l=m.useRef(null),c=ge(t,l,s.onScrollbarXChange);return m.useEffect(()=>{l.current&&a(getComputedStyle(l.current))},[l]),d.jsx(zw,{"data-orientation":"horizontal",...r,ref:c,sizes:n,style:{bottom:0,left:s.dir==="rtl"?"var(--radix-scroll-area-corner-width)":0,right:s.dir==="ltr"?"var(--radix-scroll-area-corner-width)":0,"--radix-scroll-area-thumb-width":dl(n)+"px",...e.style},onThumbPointerDown:u=>e.onThumbPointerDown(u.x),onDragScroll:u=>e.onDragScroll(u.x),onWheelScroll:(u,f)=>{if(s.viewport){const p=s.viewport.scrollLeft+u.deltaX;e.onWheelScroll(p),qw(p,f)&&u.preventDefault()}},onResize:()=>{l.current&&s.viewport&&i&&o({content:s.viewport.scrollWidth,viewport:s.viewport.offsetWidth,scrollbar:{size:l.current.clientWidth,paddingStart:Ta(i.paddingLeft),paddingEnd:Ta(i.paddingRight)}})}})}),x2=m.forwardRef((e,t)=>{const{sizes:n,onSizesChange:o,...r}=e,s=vt(Ht,e.__scopeScrollArea),[i,a]=m.useState(),l=m.useRef(null),c=ge(t,l,s.onScrollbarYChange);return m.useEffect(()=>{l.current&&a(getComputedStyle(l.current))},[l]),d.jsx(zw,{"data-orientation":"vertical",...r,ref:c,sizes:n,style:{top:0,right:s.dir==="ltr"?0:void 0,left:s.dir==="rtl"?0:void 0,bottom:"var(--radix-scroll-area-corner-height)","--radix-scroll-area-thumb-height":dl(n)+"px",...e.style},onThumbPointerDown:u=>e.onThumbPointerDown(u.y),onDragScroll:u=>e.onDragScroll(u.y),onWheelScroll:(u,f)=>{if(s.viewport){const p=s.viewport.scrollTop+u.deltaY;e.onWheelScroll(p),qw(p,f)&&u.preventDefault()}},onResize:()=>{l.current&&s.viewport&&i&&o({content:s.viewport.scrollHeight,viewport:s.viewport.offsetHeight,scrollbar:{size:l.current.clientHeight,paddingStart:Ta(i.paddingTop),paddingEnd:Ta(i.paddingBottom)}})}})}),[S2,$w]=Uw(Ht),zw=m.forwardRef((e,t)=>{const{__scopeScrollArea:n,sizes:o,hasThumb:r,onThumbChange:s,onThumbPointerUp:i,onThumbPointerDown:a,onThumbPositionChange:l,onDragScroll:c,onWheelScroll:u,onResize:f,...p}=e,y=vt(Ht,n),[w,v]=m.useState(null),x=ge(t,R=>v(R)),h=m.useRef(null),g=m.useRef(""),b=y.viewport,S=o.content-o.viewport,C=Ne(u),k=Ne(l),E=fl(f,10);function j(R){if(h.current){const A=R.clientX-h.current.left,F=R.clientY-h.current.top;c({x:A,y:F})}}return m.useEffect(()=>{const R=A=>{const F=A.target;(w==null?void 0:w.contains(F))&&C(A,S)};return document.addEventListener("wheel",R,{passive:!1}),()=>document.removeEventListener("wheel",R,{passive:!1})},[b,w,S,C]),m.useEffect(k,[o,k]),ar(w,E),ar(y.content,E),d.jsx(S2,{scope:n,scrollbar:w,hasThumb:r,onThumbChange:Ne(s),onThumbPointerUp:Ne(i),onThumbPositionChange:k,onThumbPointerDown:Ne(a),children:d.jsx(se.div,{...p,ref:x,style:{position:"absolute",...p.style},onPointerDown:$(e.onPointerDown,R=>{R.button===0&&(R.target.setPointerCapture(R.pointerId),h.current=w.getBoundingClientRect(),g.current=document.body.style.webkitUserSelect,document.body.style.webkitUserSelect="none",y.viewport&&(y.viewport.style.scrollBehavior="auto"),j(R))}),onPointerMove:$(e.onPointerMove,j),onPointerUp:$(e.onPointerUp,R=>{const A=R.target;A.hasPointerCapture(R.pointerId)&&A.releasePointerCapture(R.pointerId),document.body.style.webkitUserSelect=g.current,y.viewport&&(y.viewport.style.scrollBehavior=""),h.current=null})})})}),Pa="ScrollAreaThumb",Jw=m.forwardRef((e,t)=>{const{forceMount:n,...o}=e,r=$w(Pa,e.__scopeScrollArea);return d.jsx(Vt,{present:n||r.hasThumb,children:d.jsx(C2,{ref:t,...o})})}),C2=m.forwardRef((e,t)=>{const{__scopeScrollArea:n,style:o,...r}=e,s=vt(Pa,n),i=$w(Pa,n),{onThumbPositionChange:a}=i,l=ge(t,f=>i.onThumbChange(f)),c=m.useRef(void 0),u=fl(()=>{c.current&&(c.current(),c.current=void 0)},100);return m.useEffect(()=>{const f=s.viewport;if(f){const p=()=>{if(u(),!c.current){const y=j2(f,a);c.current=y,a()}};return a(),f.addEventListener("scroll",p),()=>f.removeEventListener("scroll",p)}},[s.viewport,u,a]),d.jsx(se.div,{"data-state":i.hasThumb?"visible":"hidden",...r,ref:l,style:{width:"var(--radix-scroll-area-thumb-width)",height:"var(--radix-scroll-area-thumb-height)",...o},onPointerDownCapture:$(e.onPointerDownCapture,f=>{const y=f.target.getBoundingClientRect(),w=f.clientX-y.left,v=f.clientY-y.top;i.onThumbPointerDown({x:w,y:v})}),onPointerUp:$(e.onPointerUp,i.onThumbPointerUp)})});Jw.displayName=Pa;var Lf="ScrollAreaCorner",Gw=m.forwardRef((e,t)=>{const n=vt(Lf,e.__scopeScrollArea),o=!!(n.scrollbarX&&n.scrollbarY);return n.type!=="scroll"&&o?d.jsx(E2,{...e,ref:t}):null});Gw.displayName=Lf;var E2=m.forwardRef((e,t)=>{const{__scopeScrollArea:n,...o}=e,r=vt(Lf,n),[s,i]=m.useState(0),[a,l]=m.useState(0),c=!!(s&&a);return ar(r.scrollbarX,()=>{var f;const u=((f=r.scrollbarX)==null?void 0:f.offsetHeight)||0;r.onCornerHeightChange(u),l(u)}),ar(r.scrollbarY,()=>{var f;const u=((f=r.scrollbarY)==null?void 0:f.offsetWidth)||0;r.onCornerWidthChange(u),i(u)}),c?d.jsx(se.div,{...o,ref:t,style:{width:s,height:a,position:"absolute",right:r.dir==="ltr"?0:void 0,left:r.dir==="rtl"?0:void 0,bottom:0,...e.style}}):null});function Ta(e){return e?parseInt(e,10):0}function Kw(e,t){const n=e/t;return isNaN(n)?0:n}function dl(e){const t=Kw(e.viewport,e.content),n=e.scrollbar.paddingStart+e.scrollbar.paddingEnd,o=(e.scrollbar.size-n)*t;return Math.max(o,18)}function k2(e,t,n,o="ltr"){const r=dl(n),s=r/2,i=t||s,a=r-i,l=n.scrollbar.paddingStart+i,c=n.scrollbar.size-n.scrollbar.paddingEnd-a,u=n.content-n.viewport,f=o==="ltr"?[0,u]:[u*-1,0];return Yw([l,c],f)(e)}function $h(e,t,n="ltr"){const o=dl(t),r=t.scrollbar.paddingStart+t.scrollbar.paddingEnd,s=t.scrollbar.size-r,i=t.content-t.viewport,a=s-o,l=n==="ltr"?[0,i]:[i*-1,0],c=h2(e,l);return Yw([0,i],[0,a])(c)}function Yw(e,t){return n=>{if(e[0]===e[1]||t[0]===t[1])return t[0];const o=(t[1]-t[0])/(e[1]-e[0]);return t[0]+o*(n-e[0])}}function qw(e,t){return e>0&&e<t}var j2=(e,t=()=>{})=>{let n={left:e.scrollLeft,top:e.scrollTop},o=0;return function r(){const s={left:e.scrollLeft,top:e.scrollTop},i=n.left!==s.left,a=n.top!==s.top;(i||a)&&t(),n=s,o=window.requestAnimationFrame(r)}(),()=>window.cancelAnimationFrame(o)};function fl(e,t){const n=Ne(e),o=m.useRef(0);return m.useEffect(()=>()=>window.clearTimeout(o.current),[]),m.useCallback(()=>{window.clearTimeout(o.current),o.current=window.setTimeout(n,t)},[n,t])}function ar(e,t){const n=Ne(t);on(()=>{let o=0;if(e){const r=new ResizeObserver(()=>{cancelAnimationFrame(o),o=window.requestAnimationFrame(n)});return r.observe(e),()=>{window.cancelAnimationFrame(o),r.unobserve(e)}}},[e,n])}var Qw=Bw,P2=Hw,T2=Gw;const pl=m.forwardRef(({className:e,children:t,...n},o)=>d.jsxs(Qw,{ref:o,className:q("relative overflow-hidden",e),...n,children:[d.jsx(P2,{className:"h-full w-full rounded-[inherit]",children:t}),d.jsx(Xw,{}),d.jsx(T2,{})]}));pl.displayName=Qw.displayName;const Xw=m.forwardRef(({className:e,orientation:t="vertical",...n},o)=>d.jsx(Mf,{ref:o,orientation:t,className:q("flex touch-none select-none transition-colors",t==="vertical"&&"h-full w-2.5 border-l border-l-transparent p-[1px]",t==="horizontal"&&"h-2.5 flex-col border-t border-t-transparent p-[1px]",e),...n,children:d.jsx(Jw,{className:"relative flex-1 rounded-full bg-border"})}));Xw.displayName=Mf.displayName;var A2=Symbol.for("react.lazy"),Aa=Ba[" use ".trim().toString()];function R2(e){return typeof e=="object"&&e!==null&&"then"in e}function Zw(e){return e!=null&&typeof e=="object"&&"$$typeof"in e&&e.$$typeof===A2&&"_payload"in e&&R2(e._payload)}function ex(e){const t=O2(e),n=m.forwardRef((o,r)=>{let{children:s,...i}=o;Zw(s)&&typeof Aa=="function"&&(s=Aa(s._payload));const a=m.Children.toArray(s),l=a.find(I2);if(l){const c=l.props.children,u=a.map(f=>f===l?m.Children.count(c)>1?m.Children.only(null):m.isValidElement(c)?c.props.children:null:f);return d.jsx(t,{...i,ref:r,children:m.isValidElement(c)?m.cloneElement(c,void 0,u):null})}return d.jsx(t,{...i,ref:r,children:s})});return n.displayName=`${e}.Slot`,n}var N2=ex("Slot");function O2(e){const t=m.forwardRef((n,o)=>{let{children:r,...s}=n;if(Zw(r)&&typeof Aa=="function"&&(r=Aa(r._payload)),m.isValidElement(r)){const i=D2(r),a=L2(s,r.props);return r.type!==m.Fragment&&(a.ref=o?ho(o,i):i),m.cloneElement(r,a)}return m.Children.count(r)>1?m.Children.only(null):null});return t.displayName=`${e}.SlotClone`,t}var M2=Symbol("radix.slottable");function I2(e){return m.isValidElement(e)&&typeof e.type=="function"&&"__radixId"in e.type&&e.type.__radixId===M2}function L2(e,t){const n={...t};for(const o in t){const r=e[o],s=t[o];/^on[A-Z]/.test(o)?r&&s?n[o]=(...a)=>{const l=s(...a);return r(...a),l}:r&&(n[o]=r):o==="style"?n[o]={...r,...s}:o==="className"&&(n[o]=[r,s].filter(Boolean).join(" "))}return{...e,...n}}function D2(e){var o,r;let t=(o=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:o.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(t=(r=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:r.get,n=t&&"isReactWarning"in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}const zh=e=>typeof e=="boolean"?`${e}`:e===0?"0":e,Jh=Ow,tx=(e,t)=>n=>{var o;if((t==null?void 0:t.variants)==null)return Jh(e,n==null?void 0:n.class,n==null?void 0:n.className);const{variants:r,defaultVariants:s}=t,i=Object.keys(r).map(c=>{const u=n==null?void 0:n[c],f=s==null?void 0:s[c];if(u===null)return null;const p=zh(u)||zh(f);return r[c][p]}),a=n&&Object.entries(n).reduce((c,u)=>{let[f,p]=u;return p===void 0||(c[f]=p),c},{}),l=t==null||(o=t.compoundVariants)===null||o===void 0?void 0:o.reduce((c,u)=>{let{class:f,className:p,...y}=u;return Object.entries(y).every(w=>{let[v,x]=w;return Array.isArray(x)?x.includes({...s,...a}[v]):{...s,...a}[v]===x})?[...c,f,p]:c},[]);return Jh(e,i,l,n==null?void 0:n.class,n==null?void 0:n.className)},F2=tx("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),J=m.forwardRef(({className:e,variant:t,size:n,asChild:o=!1,...r},s)=>{const i=o?N2:"button";return d.jsx(i,{className:q(F2({variant:t,size:n,className:e})),ref:s,...r})});J.displayName="Button";var _2=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],U2=_2.reduce((e,t)=>{const n=ex(`Primitive.${t}`),o=m.forwardRef((r,s)=>{const{asChild:i,...a}=r,l=i?n:t;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),d.jsx(l,{...a,ref:s})});return o.displayName=`Primitive.${t}`,{...e,[t]:o}},{}),B2="Separator",Gh="horizontal",V2=["horizontal","vertical"],nx=m.forwardRef((e,t)=>{const{decorative:n,orientation:o=Gh,...r}=e,s=H2(o)?o:Gh,a=n?{role:"none"}:{"aria-orientation":s==="vertical"?s:void 0,role:"separator"};return d.jsx(U2.div,{"data-orientation":s,...a,...r,ref:t})});nx.displayName=B2;function H2(e){return V2.includes(e)}var ox=nx;const rx=m.forwardRef(({className:e,orientation:t="horizontal",decorative:n=!0,...o},r)=>d.jsx(ox,{ref:r,decorative:n,orientation:t,className:q("shrink-0 bg-border",t==="horizontal"?"h-[1px] w-full":"h-full w-[1px]",e),...o}));rx.displayName=ox.displayName;/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var W2={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $2=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),K=(e,t)=>{const n=m.forwardRef(({color:o="currentColor",size:r=24,strokeWidth:s=2,absoluteStrokeWidth:i,className:a="",children:l,...c},u)=>m.createElement("svg",{ref:u,...W2,width:r,height:r,stroke:o,strokeWidth:i?Number(s)*24/Number(r):s,className:["lucide",`lucide-${$2(e)}`,a].join(" "),...c},[...t.map(([f,p])=>m.createElement(f,p)),...Array.isArray(l)?l:[l]]));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z2=K("AlertCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J2=K("AlertTriangle",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",key:"c3ski4"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G2=K("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ks=K("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Df=K("Atom",[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["path",{d:"M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z",key:"1l2ple"}],["path",{d:"M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z",key:"1wam0m"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rs=K("BookOpen",[["path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z",key:"vv98re"}],["path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",key:"1cyq3y"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ff=K("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K2=K("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sx=K("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ra=K("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y2=K("Circle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ys=K("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ns=K("Code2",[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wu=K("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q2=K("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q2=K("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ix=K("FileCode",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m10 13-2 2 2 2",key:"17smn8"}],["path",{d:"m14 17 2-2-2-2",key:"14mezr"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X2=K("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z2=K("GripVertical",[["circle",{cx:"9",cy:"12",r:"1",key:"1vctgf"}],["circle",{cx:"9",cy:"5",r:"1",key:"hp0tcf"}],["circle",{cx:"9",cy:"19",r:"1",key:"fkjjf6"}],["circle",{cx:"15",cy:"12",r:"1",key:"1tmaij"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["circle",{cx:"15",cy:"19",r:"1",key:"f4zoj3"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ax=K("Home",[["path",{d:"m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"y5dka4"}],["polyline",{points:"9 22 9 12 15 12 15 22",key:"e2us08"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lx=K("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kh=K("Loader2",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eR=K("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _f=K("MessageSquareCode",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}],["path",{d:"m10 8-2 2 2 2",key:"19bv1o"}],["path",{d:"m14 8 2 2-2 2",key:"1whylv"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tR=K("Monitor",[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21",key:"1svkeh"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21",key:"vw1qmm"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yh=K("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uf=K("Palette",[["circle",{cx:"13.5",cy:"6.5",r:".5",key:"1xcu5"}],["circle",{cx:"17.5",cy:"10.5",r:".5",key:"736e4u"}],["circle",{cx:"8.5",cy:"7.5",r:".5",key:"clrty"}],["circle",{cx:"6.5",cy:"12.5",r:".5",key:"1s4xz9"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",key:"12rzf8"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lo=K("Play",[["polygon",{points:"5 3 19 12 5 21 5 3",key:"191637"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nR=K("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oR=K("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cx=K("Sparkles",[["path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",key:"17u4zn"}],["path",{d:"M5 3v4",key:"bklmnn"}],["path",{d:"M19 17v4",key:"iiml17"}],["path",{d:"M3 5h4",key:"nem4j1"}],["path",{d:"M17 19h4",key:"lbex7p"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qh=K("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bf=K("Terminal",[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rR=K("Trophy",[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",key:"17hqa7"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",key:"lmptdp"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",key:"1nw9bq"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",key:"1np0yb"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z",key:"u46fv3"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sR=K("Zap",[["polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2",key:"45s27k"}]]),iR=[{name:"Home",href:"/",icon:ax},{name:"Playground",href:"/playground",icon:Bf}],aR=[{name:"JavaScript",href:"/javascript",icon:ix,color:"text-yellow-500"},{name:"HTML & CSS",href:"/html-css",icon:Uf,color:"text-orange-500"},{name:"React",href:"/react",icon:Df,color:"text-cyan-500"},{name:"Interview Prep",href:"/interview",icon:_f,color:"text-purple-500"}];function lR({open:e,onOpenChange:t}){const n=Hn();return d.jsxs(d.Fragment,{children:[d.jsx(ob,{children:e&&d.jsx(yt.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:()=>t(!1),className:"fixed inset-0 z-40 bg-background/80 backdrop-blur-sm md:hidden"})}),d.jsxs(yt.aside,{initial:!1,animate:{width:e?280:0,opacity:e?1:0},transition:{duration:.2,ease:"easeInOut"},className:q("fixed md:relative z-50 h-screen border-r bg-card overflow-hidden","flex flex-col"),children:[d.jsxs("div",{className:"flex h-16 items-center justify-between px-4 border-b",children:[d.jsxs(Zr,{to:"/",className:"flex items-center gap-2",children:[d.jsx("div",{className:"flex h-8 w-8 items-center justify-center rounded-lg bg-primary",children:d.jsx(Ns,{className:"h-5 w-5 text-primary-foreground"})}),d.jsx("span",{className:"font-bold text-lg",children:"StudyWeb"})]}),d.jsx(J,{variant:"ghost",size:"icon",onClick:()=>t(!1),className:"h-8 w-8",children:d.jsx(sx,{className:"h-4 w-4"})})]}),d.jsxs(pl,{className:"flex-1 px-3 py-4",children:[d.jsx("div",{className:"space-y-1",children:iR.map(o=>{const r=n.pathname===o.href;return d.jsx(Zr,{to:o.href,children:d.jsxs(J,{variant:r?"secondary":"ghost",className:q("w-full justify-start gap-3",r&&"bg-secondary"),children:[d.jsx(o.icon,{className:"h-4 w-4"}),o.name]})},o.name)})}),d.jsx(rx,{className:"my-4"}),d.jsx("div",{className:"mb-2 px-2",children:d.jsxs("span",{className:"text-xs font-semibold text-muted-foreground uppercase tracking-wider flex items-center gap-2",children:[d.jsx(Rs,{className:"h-3 w-3"}),"Study Materials"]})}),d.jsx("div",{className:"space-y-1",children:aR.map(o=>{const r=n.pathname.startsWith(o.href);return d.jsx(Zr,{to:o.href,children:d.jsxs(J,{variant:r?"secondary":"ghost",className:q("w-full justify-start gap-3",r&&"bg-secondary"),children:[d.jsx(o.icon,{className:q("h-4 w-4",o.color)}),o.name]})},o.name)})})]}),d.jsx("div",{className:"p-4 border-t",children:d.jsxs("div",{className:"rounded-lg bg-gradient-to-r from-primary/10 to-primary/5 p-4",children:[d.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[d.jsx(cx,{className:"h-4 w-4 text-primary"}),d.jsx("span",{className:"font-semibold text-sm",children:"Pro Tip"})]}),d.jsx("p",{className:"text-xs text-muted-foreground",children:"Use the Playground to practice code examples from any lesson!"})]})})]})]})}var cR=Ba[" useInsertionEffect ".trim().toString()]||on;function Vf({prop:e,defaultProp:t,onChange:n=()=>{},caller:o}){const[r,s,i]=uR({defaultProp:t,onChange:n}),a=e!==void 0,l=a?e:r;{const u=m.useRef(e!==void 0);m.useEffect(()=>{const f=u.current;f!==a&&console.warn(`${o} is changing from ${f?"controlled":"uncontrolled"} to ${a?"controlled":"uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`),u.current=a},[a,o])}const c=m.useCallback(u=>{var f;if(a){const p=dR(u)?u(e):u;p!==e&&((f=i.current)==null||f.call(i,p))}else s(u)},[a,e,s,i]);return[l,c]}function uR({defaultProp:e,onChange:t}){const[n,o]=m.useState(e),r=m.useRef(n),s=m.useRef(t);return cR(()=>{s.current=t},[t]),m.useEffect(()=>{var i;r.current!==n&&((i=s.current)==null||i.call(s,n),r.current=n)},[n,r]),[n,o,s]}function dR(e){return typeof e=="function"}function Qh(e){const t=fR(e),n=m.forwardRef((o,r)=>{const{children:s,...i}=o,a=m.Children.toArray(s),l=a.find(mR);if(l){const c=l.props.children,u=a.map(f=>f===l?m.Children.count(c)>1?m.Children.only(null):m.isValidElement(c)?c.props.children:null:f);return d.jsx(t,{...i,ref:r,children:m.isValidElement(c)?m.cloneElement(c,void 0,u):null})}return d.jsx(t,{...i,ref:r,children:s})});return n.displayName=`${e}.Slot`,n}function fR(e){const t=m.forwardRef((n,o)=>{const{children:r,...s}=n;if(m.isValidElement(r)){const i=gR(r),a=hR(s,r.props);return r.type!==m.Fragment&&(a.ref=o?ho(o,i):i),m.cloneElement(r,a)}return m.Children.count(r)>1?m.Children.only(null):null});return t.displayName=`${e}.SlotClone`,t}var pR=Symbol("radix.slottable");function mR(e){return m.isValidElement(e)&&typeof e.type=="function"&&"__radixId"in e.type&&e.type.__radixId===pR}function hR(e,t){const n={...t};for(const o in t){const r=e[o],s=t[o];/^on[A-Z]/.test(o)?r&&s?n[o]=(...a)=>{const l=s(...a);return r(...a),l}:r&&(n[o]=r):o==="style"?n[o]={...r,...s}:o==="className"&&(n[o]=[r,s].filter(Boolean).join(" "))}return{...e,...n}}function gR(e){var o,r;let t=(o=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:o.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(t=(r=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:r.get,n=t&&"isReactWarning"in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}function ux(e){const t=e+"CollectionProvider",[n,o]=go(t),[r,s]=n(t,{collectionRef:{current:null},itemMap:new Map}),i=v=>{const{scope:x,children:h}=v,g=_e.useRef(null),b=_e.useRef(new Map).current;return d.jsx(r,{scope:x,itemMap:b,collectionRef:g,children:h})};i.displayName=t;const a=e+"CollectionSlot",l=Qh(a),c=_e.forwardRef((v,x)=>{const{scope:h,children:g}=v,b=s(a,h),S=ge(x,b.collectionRef);return d.jsx(l,{ref:S,children:g})});c.displayName=a;const u=e+"CollectionItemSlot",f="data-radix-collection-item",p=Qh(u),y=_e.forwardRef((v,x)=>{const{scope:h,children:g,...b}=v,S=_e.useRef(null),C=ge(x,S),k=s(u,h);return _e.useEffect(()=>(k.itemMap.set(S,{ref:S,...b}),()=>void k.itemMap.delete(S))),d.jsx(p,{[f]:"",ref:C,children:g})});y.displayName=u;function w(v){const x=s(e+"CollectionConsumer",v);return _e.useCallback(()=>{const g=x.collectionRef.current;if(!g)return[];const b=Array.from(g.querySelectorAll(`[${f}]`));return Array.from(x.itemMap.values()).sort((k,E)=>b.indexOf(k.ref.current)-b.indexOf(E.ref.current))},[x.collectionRef,x.itemMap])}return[{Provider:i,Slot:c,ItemSlot:y},w,o]}function yR(e,t=globalThis==null?void 0:globalThis.document){const n=Ne(e);m.useEffect(()=>{const o=r=>{r.key==="Escape"&&n(r)};return t.addEventListener("keydown",o,{capture:!0}),()=>t.removeEventListener("keydown",o,{capture:!0})},[n,t])}var vR="DismissableLayer",$u="dismissableLayer.update",bR="dismissableLayer.pointerDownOutside",wR="dismissableLayer.focusOutside",Xh,dx=m.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),fx=m.forwardRef((e,t)=>{const{disableOutsidePointerEvents:n=!1,onEscapeKeyDown:o,onPointerDownOutside:r,onFocusOutside:s,onInteractOutside:i,onDismiss:a,...l}=e,c=m.useContext(dx),[u,f]=m.useState(null),p=(u==null?void 0:u.ownerDocument)??(globalThis==null?void 0:globalThis.document),[,y]=m.useState({}),w=ge(t,E=>f(E)),v=Array.from(c.layers),[x]=[...c.layersWithOutsidePointerEventsDisabled].slice(-1),h=v.indexOf(x),g=u?v.indexOf(u):-1,b=c.layersWithOutsidePointerEventsDisabled.size>0,S=g>=h,C=CR(E=>{const j=E.target,R=[...c.branches].some(A=>A.contains(j));!S||R||(r==null||r(E),i==null||i(E),E.defaultPrevented||a==null||a())},p),k=ER(E=>{const j=E.target;[...c.branches].some(A=>A.contains(j))||(s==null||s(E),i==null||i(E),E.defaultPrevented||a==null||a())},p);return yR(E=>{g===c.layers.size-1&&(o==null||o(E),!E.defaultPrevented&&a&&(E.preventDefault(),a()))},p),m.useEffect(()=>{if(u)return n&&(c.layersWithOutsidePointerEventsDisabled.size===0&&(Xh=p.body.style.pointerEvents,p.body.style.pointerEvents="none"),c.layersWithOutsidePointerEventsDisabled.add(u)),c.layers.add(u),Zh(),()=>{n&&c.layersWithOutsidePointerEventsDisabled.size===1&&(p.body.style.pointerEvents=Xh)}},[u,p,n,c]),m.useEffect(()=>()=>{u&&(c.layers.delete(u),c.layersWithOutsidePointerEventsDisabled.delete(u),Zh())},[u,c]),m.useEffect(()=>{const E=()=>y({});return document.addEventListener($u,E),()=>document.removeEventListener($u,E)},[]),d.jsx(se.div,{...l,ref:w,style:{pointerEvents:b?S?"auto":"none":void 0,...e.style},onFocusCapture:$(e.onFocusCapture,k.onFocusCapture),onBlurCapture:$(e.onBlurCapture,k.onBlurCapture),onPointerDownCapture:$(e.onPointerDownCapture,C.onPointerDownCapture)})});fx.displayName=vR;var xR="DismissableLayerBranch",SR=m.forwardRef((e,t)=>{const n=m.useContext(dx),o=m.useRef(null),r=ge(t,o);return m.useEffect(()=>{const s=o.current;if(s)return n.branches.add(s),()=>{n.branches.delete(s)}},[n.branches]),d.jsx(se.div,{...e,ref:r})});SR.displayName=xR;function CR(e,t=globalThis==null?void 0:globalThis.document){const n=Ne(e),o=m.useRef(!1),r=m.useRef(()=>{});return m.useEffect(()=>{const s=a=>{if(a.target&&!o.current){let l=function(){px(bR,n,c,{discrete:!0})};const c={originalEvent:a};a.pointerType==="touch"?(t.removeEventListener("click",r.current),r.current=l,t.addEventListener("click",r.current,{once:!0})):l()}else t.removeEventListener("click",r.current);o.current=!1},i=window.setTimeout(()=>{t.addEventListener("pointerdown",s)},0);return()=>{window.clearTimeout(i),t.removeEventListener("pointerdown",s),t.removeEventListener("click",r.current)}},[t,n]),{onPointerDownCapture:()=>o.current=!0}}function ER(e,t=globalThis==null?void 0:globalThis.document){const n=Ne(e),o=m.useRef(!1);return m.useEffect(()=>{const r=s=>{s.target&&!o.current&&px(wR,n,{originalEvent:s},{discrete:!1})};return t.addEventListener("focusin",r),()=>t.removeEventListener("focusin",r)},[t,n]),{onFocusCapture:()=>o.current=!0,onBlurCapture:()=>o.current=!1}}function Zh(){const e=new CustomEvent($u);document.dispatchEvent(e)}function px(e,t,n,{discrete:o}){const r=n.originalEvent.target,s=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:n});t&&r.addEventListener(e,t,{once:!0}),o?_w(r,s):r.dispatchEvent(s)}var hc=0;function kR(){m.useEffect(()=>{const e=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",e[0]??eg()),document.body.insertAdjacentElement("beforeend",e[1]??eg()),hc++,()=>{hc===1&&document.querySelectorAll("[data-radix-focus-guard]").forEach(t=>t.remove()),hc--}},[])}function eg(){const e=document.createElement("span");return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.outline="none",e.style.opacity="0",e.style.position="fixed",e.style.pointerEvents="none",e}var gc="focusScope.autoFocusOnMount",yc="focusScope.autoFocusOnUnmount",tg={bubbles:!1,cancelable:!0},jR="FocusScope",mx=m.forwardRef((e,t)=>{const{loop:n=!1,trapped:o=!1,onMountAutoFocus:r,onUnmountAutoFocus:s,...i}=e,[a,l]=m.useState(null),c=Ne(r),u=Ne(s),f=m.useRef(null),p=ge(t,v=>l(v)),y=m.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;m.useEffect(()=>{if(o){let v=function(b){if(y.paused||!a)return;const S=b.target;a.contains(S)?f.current=S:mn(f.current,{select:!0})},x=function(b){if(y.paused||!a)return;const S=b.relatedTarget;S!==null&&(a.contains(S)||mn(f.current,{select:!0}))},h=function(b){if(document.activeElement===document.body)for(const C of b)C.removedNodes.length>0&&mn(a)};document.addEventListener("focusin",v),document.addEventListener("focusout",x);const g=new MutationObserver(h);return a&&g.observe(a,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",v),document.removeEventListener("focusout",x),g.disconnect()}}},[o,a,y.paused]),m.useEffect(()=>{if(a){og.add(y);const v=document.activeElement;if(!a.contains(v)){const h=new CustomEvent(gc,tg);a.addEventListener(gc,c),a.dispatchEvent(h),h.defaultPrevented||(PR(OR(hx(a)),{select:!0}),document.activeElement===v&&mn(a))}return()=>{a.removeEventListener(gc,c),setTimeout(()=>{const h=new CustomEvent(yc,tg);a.addEventListener(yc,u),a.dispatchEvent(h),h.defaultPrevented||mn(v??document.body,{select:!0}),a.removeEventListener(yc,u),og.remove(y)},0)}}},[a,c,u,y]);const w=m.useCallback(v=>{if(!n&&!o||y.paused)return;const x=v.key==="Tab"&&!v.altKey&&!v.ctrlKey&&!v.metaKey,h=document.activeElement;if(x&&h){const g=v.currentTarget,[b,S]=TR(g);b&&S?!v.shiftKey&&h===S?(v.preventDefault(),n&&mn(b,{select:!0})):v.shiftKey&&h===b&&(v.preventDefault(),n&&mn(S,{select:!0})):h===g&&v.preventDefault()}},[n,o,y.paused]);return d.jsx(se.div,{tabIndex:-1,...i,ref:p,onKeyDown:w})});mx.displayName=jR;function PR(e,{select:t=!1}={}){const n=document.activeElement;for(const o of e)if(mn(o,{select:t}),document.activeElement!==n)return}function TR(e){const t=hx(e),n=ng(t,e),o=ng(t.reverse(),e);return[n,o]}function hx(e){const t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:o=>{const r=o.tagName==="INPUT"&&o.type==="hidden";return o.disabled||o.hidden||r?NodeFilter.FILTER_SKIP:o.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function ng(e,t){for(const n of e)if(!AR(n,{upTo:t}))return n}function AR(e,{upTo:t}){if(getComputedStyle(e).visibility==="hidden")return!0;for(;e;){if(t!==void 0&&e===t)return!1;if(getComputedStyle(e).display==="none")return!0;e=e.parentElement}return!1}function RR(e){return e instanceof HTMLInputElement&&"select"in e}function mn(e,{select:t=!1}={}){if(e&&e.focus){const n=document.activeElement;e.focus({preventScroll:!0}),e!==n&&RR(e)&&t&&e.select()}}var og=NR();function NR(){let e=[];return{add(t){const n=e[0];t!==n&&(n==null||n.pause()),e=rg(e,t),e.unshift(t)},remove(t){var n;e=rg(e,t),(n=e[0])==null||n.resume()}}}function rg(e,t){const n=[...e],o=n.indexOf(t);return o!==-1&&n.splice(o,1),n}function OR(e){return e.filter(t=>t.tagName!=="A")}var MR=Ba[" useId ".trim().toString()]||(()=>{}),IR=0;function Na(e){const[t,n]=m.useState(MR());return on(()=>{n(o=>o??String(IR++))},[e]),t?`radix-${t}`:""}const LR=["top","right","bottom","left"],Dn=Math.min,Xe=Math.max,Oa=Math.round,Ei=Math.floor,_t=e=>({x:e,y:e}),DR={left:"right",right:"left",bottom:"top",top:"bottom"},FR={start:"end",end:"start"};function zu(e,t,n){return Xe(e,Dn(t,n))}function rn(e,t){return typeof e=="function"?e(t):e}function sn(e){return e.split("-")[0]}function gr(e){return e.split("-")[1]}function Hf(e){return e==="x"?"y":"x"}function Wf(e){return e==="y"?"height":"width"}const _R=new Set(["top","bottom"]);function Mt(e){return _R.has(sn(e))?"y":"x"}function $f(e){return Hf(Mt(e))}function UR(e,t,n){n===void 0&&(n=!1);const o=gr(e),r=$f(e),s=Wf(r);let i=r==="x"?o===(n?"end":"start")?"right":"left":o==="start"?"bottom":"top";return t.reference[s]>t.floating[s]&&(i=Ma(i)),[i,Ma(i)]}function BR(e){const t=Ma(e);return[Ju(e),t,Ju(t)]}function Ju(e){return e.replace(/start|end/g,t=>FR[t])}const sg=["left","right"],ig=["right","left"],VR=["top","bottom"],HR=["bottom","top"];function WR(e,t,n){switch(e){case"top":case"bottom":return n?t?ig:sg:t?sg:ig;case"left":case"right":return t?VR:HR;default:return[]}}function $R(e,t,n,o){const r=gr(e);let s=WR(sn(e),n==="start",o);return r&&(s=s.map(i=>i+"-"+r),t&&(s=s.concat(s.map(Ju)))),s}function Ma(e){return e.replace(/left|right|bottom|top/g,t=>DR[t])}function zR(e){return{top:0,right:0,bottom:0,left:0,...e}}function gx(e){return typeof e!="number"?zR(e):{top:e,right:e,bottom:e,left:e}}function Ia(e){const{x:t,y:n,width:o,height:r}=e;return{width:o,height:r,top:n,left:t,right:t+o,bottom:n+r,x:t,y:n}}function ag(e,t,n){let{reference:o,floating:r}=e;const s=Mt(t),i=$f(t),a=Wf(i),l=sn(t),c=s==="y",u=o.x+o.width/2-r.width/2,f=o.y+o.height/2-r.height/2,p=o[a]/2-r[a]/2;let y;switch(l){case"top":y={x:u,y:o.y-r.height};break;case"bottom":y={x:u,y:o.y+o.height};break;case"right":y={x:o.x+o.width,y:f};break;case"left":y={x:o.x-r.width,y:f};break;default:y={x:o.x,y:o.y}}switch(gr(t)){case"start":y[i]-=p*(n&&c?-1:1);break;case"end":y[i]+=p*(n&&c?-1:1);break}return y}const JR=async(e,t,n)=>{const{placement:o="bottom",strategy:r="absolute",middleware:s=[],platform:i}=n,a=s.filter(Boolean),l=await(i.isRTL==null?void 0:i.isRTL(t));let c=await i.getElementRects({reference:e,floating:t,strategy:r}),{x:u,y:f}=ag(c,o,l),p=o,y={},w=0;for(let v=0;v<a.length;v++){const{name:x,fn:h}=a[v],{x:g,y:b,data:S,reset:C}=await h({x:u,y:f,initialPlacement:o,placement:p,strategy:r,middlewareData:y,rects:c,platform:i,elements:{reference:e,floating:t}});u=g??u,f=b??f,y={...y,[x]:{...y[x],...S}},C&&w<=50&&(w++,typeof C=="object"&&(C.placement&&(p=C.placement),C.rects&&(c=C.rects===!0?await i.getElementRects({reference:e,floating:t,strategy:r}):C.rects),{x:u,y:f}=ag(c,p,l)),v=-1)}return{x:u,y:f,placement:p,strategy:r,middlewareData:y}};async function Os(e,t){var n;t===void 0&&(t={});const{x:o,y:r,platform:s,rects:i,elements:a,strategy:l}=e,{boundary:c="clippingAncestors",rootBoundary:u="viewport",elementContext:f="floating",altBoundary:p=!1,padding:y=0}=rn(t,e),w=gx(y),x=a[p?f==="floating"?"reference":"floating":f],h=Ia(await s.getClippingRect({element:(n=await(s.isElement==null?void 0:s.isElement(x)))==null||n?x:x.contextElement||await(s.getDocumentElement==null?void 0:s.getDocumentElement(a.floating)),boundary:c,rootBoundary:u,strategy:l})),g=f==="floating"?{x:o,y:r,width:i.floating.width,height:i.floating.height}:i.reference,b=await(s.getOffsetParent==null?void 0:s.getOffsetParent(a.floating)),S=await(s.isElement==null?void 0:s.isElement(b))?await(s.getScale==null?void 0:s.getScale(b))||{x:1,y:1}:{x:1,y:1},C=Ia(s.convertOffsetParentRelativeRectToViewportRelativeRect?await s.convertOffsetParentRelativeRectToViewportRelativeRect({elements:a,rect:g,offsetParent:b,strategy:l}):g);return{top:(h.top-C.top+w.top)/S.y,bottom:(C.bottom-h.bottom+w.bottom)/S.y,left:(h.left-C.left+w.left)/S.x,right:(C.right-h.right+w.right)/S.x}}const GR=e=>({name:"arrow",options:e,async fn(t){const{x:n,y:o,placement:r,rects:s,platform:i,elements:a,middlewareData:l}=t,{element:c,padding:u=0}=rn(e,t)||{};if(c==null)return{};const f=gx(u),p={x:n,y:o},y=$f(r),w=Wf(y),v=await i.getDimensions(c),x=y==="y",h=x?"top":"left",g=x?"bottom":"right",b=x?"clientHeight":"clientWidth",S=s.reference[w]+s.reference[y]-p[y]-s.floating[w],C=p[y]-s.reference[y],k=await(i.getOffsetParent==null?void 0:i.getOffsetParent(c));let E=k?k[b]:0;(!E||!await(i.isElement==null?void 0:i.isElement(k)))&&(E=a.floating[b]||s.floating[w]);const j=S/2-C/2,R=E/2-v[w]/2-1,A=Dn(f[h],R),F=Dn(f[g],R),_=A,W=E-v[w]-F,I=E/2-v[w]/2+j,O=zu(_,I,W),D=!l.arrow&&gr(r)!=null&&I!==O&&s.reference[w]/2-(I<_?A:F)-v[w]/2<0,B=D?I<_?I-_:I-W:0;return{[y]:p[y]+B,data:{[y]:O,centerOffset:I-O-B,...D&&{alignmentOffset:B}},reset:D}}}),KR=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var n,o;const{placement:r,middlewareData:s,rects:i,initialPlacement:a,platform:l,elements:c}=t,{mainAxis:u=!0,crossAxis:f=!0,fallbackPlacements:p,fallbackStrategy:y="bestFit",fallbackAxisSideDirection:w="none",flipAlignment:v=!0,...x}=rn(e,t);if((n=s.arrow)!=null&&n.alignmentOffset)return{};const h=sn(r),g=Mt(a),b=sn(a)===a,S=await(l.isRTL==null?void 0:l.isRTL(c.floating)),C=p||(b||!v?[Ma(a)]:BR(a)),k=w!=="none";!p&&k&&C.push(...$R(a,v,w,S));const E=[a,...C],j=await Os(t,x),R=[];let A=((o=s.flip)==null?void 0:o.overflows)||[];if(u&&R.push(j[h]),f){const I=UR(r,i,S);R.push(j[I[0]],j[I[1]])}if(A=[...A,{placement:r,overflows:R}],!R.every(I=>I<=0)){var F,_;const I=(((F=s.flip)==null?void 0:F.index)||0)+1,O=E[I];if(O&&(!(f==="alignment"?g!==Mt(O):!1)||A.every(P=>Mt(P.placement)===g?P.overflows[0]>0:!0)))return{data:{index:I,overflows:A},reset:{placement:O}};let D=(_=A.filter(B=>B.overflows[0]<=0).sort((B,P)=>B.overflows[1]-P.overflows[1])[0])==null?void 0:_.placement;if(!D)switch(y){case"bestFit":{var W;const B=(W=A.filter(P=>{if(k){const T=Mt(P.placement);return T===g||T==="y"}return!0}).map(P=>[P.placement,P.overflows.filter(T=>T>0).reduce((T,L)=>T+L,0)]).sort((P,T)=>P[1]-T[1])[0])==null?void 0:W[0];B&&(D=B);break}case"initialPlacement":D=a;break}if(r!==D)return{reset:{placement:D}}}return{}}}};function lg(e,t){return{top:e.top-t.height,right:e.right-t.width,bottom:e.bottom-t.height,left:e.left-t.width}}function cg(e){return LR.some(t=>e[t]>=0)}const YR=function(e){return e===void 0&&(e={}),{name:"hide",options:e,async fn(t){const{rects:n}=t,{strategy:o="referenceHidden",...r}=rn(e,t);switch(o){case"referenceHidden":{const s=await Os(t,{...r,elementContext:"reference"}),i=lg(s,n.reference);return{data:{referenceHiddenOffsets:i,referenceHidden:cg(i)}}}case"escaped":{const s=await Os(t,{...r,altBoundary:!0}),i=lg(s,n.floating);return{data:{escapedOffsets:i,escaped:cg(i)}}}default:return{}}}}},yx=new Set(["left","top"]);async function qR(e,t){const{placement:n,platform:o,elements:r}=e,s=await(o.isRTL==null?void 0:o.isRTL(r.floating)),i=sn(n),a=gr(n),l=Mt(n)==="y",c=yx.has(i)?-1:1,u=s&&l?-1:1,f=rn(t,e);let{mainAxis:p,crossAxis:y,alignmentAxis:w}=typeof f=="number"?{mainAxis:f,crossAxis:0,alignmentAxis:null}:{mainAxis:f.mainAxis||0,crossAxis:f.crossAxis||0,alignmentAxis:f.alignmentAxis};return a&&typeof w=="number"&&(y=a==="end"?w*-1:w),l?{x:y*u,y:p*c}:{x:p*c,y:y*u}}const QR=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){var n,o;const{x:r,y:s,placement:i,middlewareData:a}=t,l=await qR(t,e);return i===((n=a.offset)==null?void 0:n.placement)&&(o=a.arrow)!=null&&o.alignmentOffset?{}:{x:r+l.x,y:s+l.y,data:{...l,placement:i}}}}},XR=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:n,y:o,placement:r}=t,{mainAxis:s=!0,crossAxis:i=!1,limiter:a={fn:x=>{let{x:h,y:g}=x;return{x:h,y:g}}},...l}=rn(e,t),c={x:n,y:o},u=await Os(t,l),f=Mt(sn(r)),p=Hf(f);let y=c[p],w=c[f];if(s){const x=p==="y"?"top":"left",h=p==="y"?"bottom":"right",g=y+u[x],b=y-u[h];y=zu(g,y,b)}if(i){const x=f==="y"?"top":"left",h=f==="y"?"bottom":"right",g=w+u[x],b=w-u[h];w=zu(g,w,b)}const v=a.fn({...t,[p]:y,[f]:w});return{...v,data:{x:v.x-n,y:v.y-o,enabled:{[p]:s,[f]:i}}}}}},ZR=function(e){return e===void 0&&(e={}),{options:e,fn(t){const{x:n,y:o,placement:r,rects:s,middlewareData:i}=t,{offset:a=0,mainAxis:l=!0,crossAxis:c=!0}=rn(e,t),u={x:n,y:o},f=Mt(r),p=Hf(f);let y=u[p],w=u[f];const v=rn(a,t),x=typeof v=="number"?{mainAxis:v,crossAxis:0}:{mainAxis:0,crossAxis:0,...v};if(l){const b=p==="y"?"height":"width",S=s.reference[p]-s.floating[b]+x.mainAxis,C=s.reference[p]+s.reference[b]-x.mainAxis;y<S?y=S:y>C&&(y=C)}if(c){var h,g;const b=p==="y"?"width":"height",S=yx.has(sn(r)),C=s.reference[f]-s.floating[b]+(S&&((h=i.offset)==null?void 0:h[f])||0)+(S?0:x.crossAxis),k=s.reference[f]+s.reference[b]+(S?0:((g=i.offset)==null?void 0:g[f])||0)-(S?x.crossAxis:0);w<C?w=C:w>k&&(w=k)}return{[p]:y,[f]:w}}}},eN=function(e){return e===void 0&&(e={}),{name:"size",options:e,async fn(t){var n,o;const{placement:r,rects:s,platform:i,elements:a}=t,{apply:l=()=>{},...c}=rn(e,t),u=await Os(t,c),f=sn(r),p=gr(r),y=Mt(r)==="y",{width:w,height:v}=s.floating;let x,h;f==="top"||f==="bottom"?(x=f,h=p===(await(i.isRTL==null?void 0:i.isRTL(a.floating))?"start":"end")?"left":"right"):(h=f,x=p==="end"?"top":"bottom");const g=v-u.top-u.bottom,b=w-u.left-u.right,S=Dn(v-u[x],g),C=Dn(w-u[h],b),k=!t.middlewareData.shift;let E=S,j=C;if((n=t.middlewareData.shift)!=null&&n.enabled.x&&(j=b),(o=t.middlewareData.shift)!=null&&o.enabled.y&&(E=g),k&&!p){const A=Xe(u.left,0),F=Xe(u.right,0),_=Xe(u.top,0),W=Xe(u.bottom,0);y?j=w-2*(A!==0||F!==0?A+F:Xe(u.left,u.right)):E=v-2*(_!==0||W!==0?_+W:Xe(u.top,u.bottom))}await l({...t,availableWidth:j,availableHeight:E});const R=await i.getDimensions(a.floating);return w!==R.width||v!==R.height?{reset:{rects:!0}}:{}}}};function ml(){return typeof window<"u"}function yr(e){return vx(e)?(e.nodeName||"").toLowerCase():"#document"}function nt(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function Wt(e){var t;return(t=(vx(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function vx(e){return ml()?e instanceof Node||e instanceof nt(e).Node:!1}function Pt(e){return ml()?e instanceof Element||e instanceof nt(e).Element:!1}function Ut(e){return ml()?e instanceof HTMLElement||e instanceof nt(e).HTMLElement:!1}function ug(e){return!ml()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof nt(e).ShadowRoot}const tN=new Set(["inline","contents"]);function qs(e){const{overflow:t,overflowX:n,overflowY:o,display:r}=Tt(e);return/auto|scroll|overlay|hidden|clip/.test(t+o+n)&&!tN.has(r)}const nN=new Set(["table","td","th"]);function oN(e){return nN.has(yr(e))}const rN=[":popover-open",":modal"];function hl(e){return rN.some(t=>{try{return e.matches(t)}catch{return!1}})}const sN=["transform","translate","scale","rotate","perspective"],iN=["transform","translate","scale","rotate","perspective","filter"],aN=["paint","layout","strict","content"];function zf(e){const t=Jf(),n=Pt(e)?Tt(e):e;return sN.some(o=>n[o]?n[o]!=="none":!1)||(n.containerType?n.containerType!=="normal":!1)||!t&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!t&&(n.filter?n.filter!=="none":!1)||iN.some(o=>(n.willChange||"").includes(o))||aN.some(o=>(n.contain||"").includes(o))}function lN(e){let t=Fn(e);for(;Ut(t)&&!lr(t);){if(zf(t))return t;if(hl(t))return null;t=Fn(t)}return null}function Jf(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}const cN=new Set(["html","body","#document"]);function lr(e){return cN.has(yr(e))}function Tt(e){return nt(e).getComputedStyle(e)}function gl(e){return Pt(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function Fn(e){if(yr(e)==="html")return e;const t=e.assignedSlot||e.parentNode||ug(e)&&e.host||Wt(e);return ug(t)?t.host:t}function bx(e){const t=Fn(e);return lr(t)?e.ownerDocument?e.ownerDocument.body:e.body:Ut(t)&&qs(t)?t:bx(t)}function Ms(e,t,n){var o;t===void 0&&(t=[]),n===void 0&&(n=!0);const r=bx(e),s=r===((o=e.ownerDocument)==null?void 0:o.body),i=nt(r);if(s){const a=Gu(i);return t.concat(i,i.visualViewport||[],qs(r)?r:[],a&&n?Ms(a):[])}return t.concat(r,Ms(r,[],n))}function Gu(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function wx(e){const t=Tt(e);let n=parseFloat(t.width)||0,o=parseFloat(t.height)||0;const r=Ut(e),s=r?e.offsetWidth:n,i=r?e.offsetHeight:o,a=Oa(n)!==s||Oa(o)!==i;return a&&(n=s,o=i),{width:n,height:o,$:a}}function Gf(e){return Pt(e)?e:e.contextElement}function Yo(e){const t=Gf(e);if(!Ut(t))return _t(1);const n=t.getBoundingClientRect(),{width:o,height:r,$:s}=wx(t);let i=(s?Oa(n.width):n.width)/o,a=(s?Oa(n.height):n.height)/r;return(!i||!Number.isFinite(i))&&(i=1),(!a||!Number.isFinite(a))&&(a=1),{x:i,y:a}}const uN=_t(0);function xx(e){const t=nt(e);return!Jf()||!t.visualViewport?uN:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function dN(e,t,n){return t===void 0&&(t=!1),!n||t&&n!==nt(e)?!1:t}function co(e,t,n,o){t===void 0&&(t=!1),n===void 0&&(n=!1);const r=e.getBoundingClientRect(),s=Gf(e);let i=_t(1);t&&(o?Pt(o)&&(i=Yo(o)):i=Yo(e));const a=dN(s,n,o)?xx(s):_t(0);let l=(r.left+a.x)/i.x,c=(r.top+a.y)/i.y,u=r.width/i.x,f=r.height/i.y;if(s){const p=nt(s),y=o&&Pt(o)?nt(o):o;let w=p,v=Gu(w);for(;v&&o&&y!==w;){const x=Yo(v),h=v.getBoundingClientRect(),g=Tt(v),b=h.left+(v.clientLeft+parseFloat(g.paddingLeft))*x.x,S=h.top+(v.clientTop+parseFloat(g.paddingTop))*x.y;l*=x.x,c*=x.y,u*=x.x,f*=x.y,l+=b,c+=S,w=nt(v),v=Gu(w)}}return Ia({width:u,height:f,x:l,y:c})}function yl(e,t){const n=gl(e).scrollLeft;return t?t.left+n:co(Wt(e)).left+n}function Sx(e,t){const n=e.getBoundingClientRect(),o=n.left+t.scrollLeft-yl(e,n),r=n.top+t.scrollTop;return{x:o,y:r}}function fN(e){let{elements:t,rect:n,offsetParent:o,strategy:r}=e;const s=r==="fixed",i=Wt(o),a=t?hl(t.floating):!1;if(o===i||a&&s)return n;let l={scrollLeft:0,scrollTop:0},c=_t(1);const u=_t(0),f=Ut(o);if((f||!f&&!s)&&((yr(o)!=="body"||qs(i))&&(l=gl(o)),Ut(o))){const y=co(o);c=Yo(o),u.x=y.x+o.clientLeft,u.y=y.y+o.clientTop}const p=i&&!f&&!s?Sx(i,l):_t(0);return{width:n.width*c.x,height:n.height*c.y,x:n.x*c.x-l.scrollLeft*c.x+u.x+p.x,y:n.y*c.y-l.scrollTop*c.y+u.y+p.y}}function pN(e){return Array.from(e.getClientRects())}function mN(e){const t=Wt(e),n=gl(e),o=e.ownerDocument.body,r=Xe(t.scrollWidth,t.clientWidth,o.scrollWidth,o.clientWidth),s=Xe(t.scrollHeight,t.clientHeight,o.scrollHeight,o.clientHeight);let i=-n.scrollLeft+yl(e);const a=-n.scrollTop;return Tt(o).direction==="rtl"&&(i+=Xe(t.clientWidth,o.clientWidth)-r),{width:r,height:s,x:i,y:a}}const dg=25;function hN(e,t){const n=nt(e),o=Wt(e),r=n.visualViewport;let s=o.clientWidth,i=o.clientHeight,a=0,l=0;if(r){s=r.width,i=r.height;const u=Jf();(!u||u&&t==="fixed")&&(a=r.offsetLeft,l=r.offsetTop)}const c=yl(o);if(c<=0){const u=o.ownerDocument,f=u.body,p=getComputedStyle(f),y=u.compatMode==="CSS1Compat"&&parseFloat(p.marginLeft)+parseFloat(p.marginRight)||0,w=Math.abs(o.clientWidth-f.clientWidth-y);w<=dg&&(s-=w)}else c<=dg&&(s+=c);return{width:s,height:i,x:a,y:l}}const gN=new Set(["absolute","fixed"]);function yN(e,t){const n=co(e,!0,t==="fixed"),o=n.top+e.clientTop,r=n.left+e.clientLeft,s=Ut(e)?Yo(e):_t(1),i=e.clientWidth*s.x,a=e.clientHeight*s.y,l=r*s.x,c=o*s.y;return{width:i,height:a,x:l,y:c}}function fg(e,t,n){let o;if(t==="viewport")o=hN(e,n);else if(t==="document")o=mN(Wt(e));else if(Pt(t))o=yN(t,n);else{const r=xx(e);o={x:t.x-r.x,y:t.y-r.y,width:t.width,height:t.height}}return Ia(o)}function Cx(e,t){const n=Fn(e);return n===t||!Pt(n)||lr(n)?!1:Tt(n).position==="fixed"||Cx(n,t)}function vN(e,t){const n=t.get(e);if(n)return n;let o=Ms(e,[],!1).filter(a=>Pt(a)&&yr(a)!=="body"),r=null;const s=Tt(e).position==="fixed";let i=s?Fn(e):e;for(;Pt(i)&&!lr(i);){const a=Tt(i),l=zf(i);!l&&a.position==="fixed"&&(r=null),(s?!l&&!r:!l&&a.position==="static"&&!!r&&gN.has(r.position)||qs(i)&&!l&&Cx(e,i))?o=o.filter(u=>u!==i):r=a,i=Fn(i)}return t.set(e,o),o}function bN(e){let{element:t,boundary:n,rootBoundary:o,strategy:r}=e;const i=[...n==="clippingAncestors"?hl(t)?[]:vN(t,this._c):[].concat(n),o],a=i[0],l=i.reduce((c,u)=>{const f=fg(t,u,r);return c.top=Xe(f.top,c.top),c.right=Dn(f.right,c.right),c.bottom=Dn(f.bottom,c.bottom),c.left=Xe(f.left,c.left),c},fg(t,a,r));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function wN(e){const{width:t,height:n}=wx(e);return{width:t,height:n}}function xN(e,t,n){const o=Ut(t),r=Wt(t),s=n==="fixed",i=co(e,!0,s,t);let a={scrollLeft:0,scrollTop:0};const l=_t(0);function c(){l.x=yl(r)}if(o||!o&&!s)if((yr(t)!=="body"||qs(r))&&(a=gl(t)),o){const y=co(t,!0,s,t);l.x=y.x+t.clientLeft,l.y=y.y+t.clientTop}else r&&c();s&&!o&&r&&c();const u=r&&!o&&!s?Sx(r,a):_t(0),f=i.left+a.scrollLeft-l.x-u.x,p=i.top+a.scrollTop-l.y-u.y;return{x:f,y:p,width:i.width,height:i.height}}function vc(e){return Tt(e).position==="static"}function pg(e,t){if(!Ut(e)||Tt(e).position==="fixed")return null;if(t)return t(e);let n=e.offsetParent;return Wt(e)===n&&(n=n.ownerDocument.body),n}function Ex(e,t){const n=nt(e);if(hl(e))return n;if(!Ut(e)){let r=Fn(e);for(;r&&!lr(r);){if(Pt(r)&&!vc(r))return r;r=Fn(r)}return n}let o=pg(e,t);for(;o&&oN(o)&&vc(o);)o=pg(o,t);return o&&lr(o)&&vc(o)&&!zf(o)?n:o||lN(e)||n}const SN=async function(e){const t=this.getOffsetParent||Ex,n=this.getDimensions,o=await n(e.floating);return{reference:xN(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:o.width,height:o.height}}};function CN(e){return Tt(e).direction==="rtl"}const EN={convertOffsetParentRelativeRectToViewportRelativeRect:fN,getDocumentElement:Wt,getClippingRect:bN,getOffsetParent:Ex,getElementRects:SN,getClientRects:pN,getDimensions:wN,getScale:Yo,isElement:Pt,isRTL:CN};function kx(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function kN(e,t){let n=null,o;const r=Wt(e);function s(){var a;clearTimeout(o),(a=n)==null||a.disconnect(),n=null}function i(a,l){a===void 0&&(a=!1),l===void 0&&(l=1),s();const c=e.getBoundingClientRect(),{left:u,top:f,width:p,height:y}=c;if(a||t(),!p||!y)return;const w=Ei(f),v=Ei(r.clientWidth-(u+p)),x=Ei(r.clientHeight-(f+y)),h=Ei(u),b={rootMargin:-w+"px "+-v+"px "+-x+"px "+-h+"px",threshold:Xe(0,Dn(1,l))||1};let S=!0;function C(k){const E=k[0].intersectionRatio;if(E!==l){if(!S)return i();E?i(!1,E):o=setTimeout(()=>{i(!1,1e-7)},1e3)}E===1&&!kx(c,e.getBoundingClientRect())&&i(),S=!1}try{n=new IntersectionObserver(C,{...b,root:r.ownerDocument})}catch{n=new IntersectionObserver(C,b)}n.observe(e)}return i(!0),s}function jN(e,t,n,o){o===void 0&&(o={});const{ancestorScroll:r=!0,ancestorResize:s=!0,elementResize:i=typeof ResizeObserver=="function",layoutShift:a=typeof IntersectionObserver=="function",animationFrame:l=!1}=o,c=Gf(e),u=r||s?[...c?Ms(c):[],...Ms(t)]:[];u.forEach(h=>{r&&h.addEventListener("scroll",n,{passive:!0}),s&&h.addEventListener("resize",n)});const f=c&&a?kN(c,n):null;let p=-1,y=null;i&&(y=new ResizeObserver(h=>{let[g]=h;g&&g.target===c&&y&&(y.unobserve(t),cancelAnimationFrame(p),p=requestAnimationFrame(()=>{var b;(b=y)==null||b.observe(t)})),n()}),c&&!l&&y.observe(c),y.observe(t));let w,v=l?co(e):null;l&&x();function x(){const h=co(e);v&&!kx(v,h)&&n(),v=h,w=requestAnimationFrame(x)}return n(),()=>{var h;u.forEach(g=>{r&&g.removeEventListener("scroll",n),s&&g.removeEventListener("resize",n)}),f==null||f(),(h=y)==null||h.disconnect(),y=null,l&&cancelAnimationFrame(w)}}const PN=QR,TN=XR,AN=KR,RN=eN,NN=YR,mg=GR,ON=ZR,MN=(e,t,n)=>{const o=new Map,r={platform:EN,...n},s={...r.platform,_c:o};return JR(e,t,{...r,platform:s})};var IN=typeof document<"u",LN=function(){},Ji=IN?m.useLayoutEffect:LN;function La(e,t){if(e===t)return!0;if(typeof e!=typeof t)return!1;if(typeof e=="function"&&e.toString()===t.toString())return!0;let n,o,r;if(e&&t&&typeof e=="object"){if(Array.isArray(e)){if(n=e.length,n!==t.length)return!1;for(o=n;o--!==0;)if(!La(e[o],t[o]))return!1;return!0}if(r=Object.keys(e),n=r.length,n!==Object.keys(t).length)return!1;for(o=n;o--!==0;)if(!{}.hasOwnProperty.call(t,r[o]))return!1;for(o=n;o--!==0;){const s=r[o];if(!(s==="_owner"&&e.$$typeof)&&!La(e[s],t[s]))return!1}return!0}return e!==e&&t!==t}function jx(e){return typeof window>"u"?1:(e.ownerDocument.defaultView||window).devicePixelRatio||1}function hg(e,t){const n=jx(e);return Math.round(t*n)/n}function bc(e){const t=m.useRef(e);return Ji(()=>{t.current=e}),t}function DN(e){e===void 0&&(e={});const{placement:t="bottom",strategy:n="absolute",middleware:o=[],platform:r,elements:{reference:s,floating:i}={},transform:a=!0,whileElementsMounted:l,open:c}=e,[u,f]=m.useState({x:0,y:0,strategy:n,placement:t,middlewareData:{},isPositioned:!1}),[p,y]=m.useState(o);La(p,o)||y(o);const[w,v]=m.useState(null),[x,h]=m.useState(null),g=m.useCallback(P=>{P!==k.current&&(k.current=P,v(P))},[]),b=m.useCallback(P=>{P!==E.current&&(E.current=P,h(P))},[]),S=s||w,C=i||x,k=m.useRef(null),E=m.useRef(null),j=m.useRef(u),R=l!=null,A=bc(l),F=bc(r),_=bc(c),W=m.useCallback(()=>{if(!k.current||!E.current)return;const P={placement:t,strategy:n,middleware:p};F.current&&(P.platform=F.current),MN(k.current,E.current,P).then(T=>{const L={...T,isPositioned:_.current!==!1};I.current&&!La(j.current,L)&&(j.current=L,nl.flushSync(()=>{f(L)}))})},[p,t,n,F,_]);Ji(()=>{c===!1&&j.current.isPositioned&&(j.current.isPositioned=!1,f(P=>({...P,isPositioned:!1})))},[c]);const I=m.useRef(!1);Ji(()=>(I.current=!0,()=>{I.current=!1}),[]),Ji(()=>{if(S&&(k.current=S),C&&(E.current=C),S&&C){if(A.current)return A.current(S,C,W);W()}},[S,C,W,A,R]);const O=m.useMemo(()=>({reference:k,floating:E,setReference:g,setFloating:b}),[g,b]),D=m.useMemo(()=>({reference:S,floating:C}),[S,C]),B=m.useMemo(()=>{const P={position:n,left:0,top:0};if(!D.floating)return P;const T=hg(D.floating,u.x),L=hg(D.floating,u.y);return a?{...P,transform:"translate("+T+"px, "+L+"px)",...jx(D.floating)>=1.5&&{willChange:"transform"}}:{position:n,left:T,top:L}},[n,a,D.floating,u.x,u.y]);return m.useMemo(()=>({...u,update:W,refs:O,elements:D,floatingStyles:B}),[u,W,O,D,B])}const FN=e=>{function t(n){return{}.hasOwnProperty.call(n,"current")}return{name:"arrow",options:e,fn(n){const{element:o,padding:r}=typeof e=="function"?e(n):e;return o&&t(o)?o.current!=null?mg({element:o.current,padding:r}).fn(n):{}:o?mg({element:o,padding:r}).fn(n):{}}}},_N=(e,t)=>({...PN(e),options:[e,t]}),UN=(e,t)=>({...TN(e),options:[e,t]}),BN=(e,t)=>({...ON(e),options:[e,t]}),VN=(e,t)=>({...AN(e),options:[e,t]}),HN=(e,t)=>({...RN(e),options:[e,t]}),WN=(e,t)=>({...NN(e),options:[e,t]}),$N=(e,t)=>({...FN(e),options:[e,t]});var zN="Arrow",Px=m.forwardRef((e,t)=>{const{children:n,width:o=10,height:r=5,...s}=e;return d.jsx(se.svg,{...s,ref:t,width:o,height:r,viewBox:"0 0 30 10",preserveAspectRatio:"none",children:e.asChild?n:d.jsx("polygon",{points:"0,0 30,0 15,10"})})});Px.displayName=zN;var JN=Px;function GN(e){const[t,n]=m.useState(void 0);return on(()=>{if(e){n({width:e.offsetWidth,height:e.offsetHeight});const o=new ResizeObserver(r=>{if(!Array.isArray(r)||!r.length)return;const s=r[0];let i,a;if("borderBoxSize"in s){const l=s.borderBoxSize,c=Array.isArray(l)?l[0]:l;i=c.inlineSize,a=c.blockSize}else i=e.offsetWidth,a=e.offsetHeight;n({width:i,height:a})});return o.observe(e,{box:"border-box"}),()=>o.unobserve(e)}else n(void 0)},[e]),t}var Kf="Popper",[Tx,Ax]=go(Kf),[KN,Rx]=Tx(Kf),Nx=e=>{const{__scopePopper:t,children:n}=e,[o,r]=m.useState(null);return d.jsx(KN,{scope:t,anchor:o,onAnchorChange:r,children:n})};Nx.displayName=Kf;var Ox="PopperAnchor",Mx=m.forwardRef((e,t)=>{const{__scopePopper:n,virtualRef:o,...r}=e,s=Rx(Ox,n),i=m.useRef(null),a=ge(t,i),l=m.useRef(null);return m.useEffect(()=>{const c=l.current;l.current=(o==null?void 0:o.current)||i.current,c!==l.current&&s.onAnchorChange(l.current)}),o?null:d.jsx(se.div,{...r,ref:a})});Mx.displayName=Ox;var Yf="PopperContent",[YN,qN]=Tx(Yf),Ix=m.forwardRef((e,t)=>{var $e,xr,at,Sr,sp,ip;const{__scopePopper:n,side:o="bottom",sideOffset:r=0,align:s="center",alignOffset:i=0,arrowPadding:a=0,avoidCollisions:l=!0,collisionBoundary:c=[],collisionPadding:u=0,sticky:f="partial",hideWhenDetached:p=!1,updatePositionStrategy:y="optimized",onPlaced:w,...v}=e,x=Rx(Yf,n),[h,g]=m.useState(null),b=ge(t,Cr=>g(Cr)),[S,C]=m.useState(null),k=GN(S),E=(k==null?void 0:k.width)??0,j=(k==null?void 0:k.height)??0,R=o+(s!=="center"?"-"+s:""),A=typeof u=="number"?u:{top:0,right:0,bottom:0,left:0,...u},F=Array.isArray(c)?c:[c],_=F.length>0,W={padding:A,boundary:F.filter(XN),altBoundary:_},{refs:I,floatingStyles:O,placement:D,isPositioned:B,middlewareData:P}=DN({strategy:"fixed",placement:R,whileElementsMounted:(...Cr)=>jN(...Cr,{animationFrame:y==="always"}),elements:{reference:x.anchor},middleware:[_N({mainAxis:r+j,alignmentAxis:i}),l&&UN({mainAxis:!0,crossAxis:!1,limiter:f==="partial"?BN():void 0,...W}),l&&VN({...W}),HN({...W,apply:({elements:Cr,rects:ap,availableWidth:x1,availableHeight:S1})=>{const{width:C1,height:E1}=ap.reference,ti=Cr.floating.style;ti.setProperty("--radix-popper-available-width",`${x1}px`),ti.setProperty("--radix-popper-available-height",`${S1}px`),ti.setProperty("--radix-popper-anchor-width",`${C1}px`),ti.setProperty("--radix-popper-anchor-height",`${E1}px`)}}),S&&$N({element:S,padding:a}),ZN({arrowWidth:E,arrowHeight:j}),p&&WN({strategy:"referenceHidden",...W})]}),[T,L]=Fx(D),M=Ne(w);on(()=>{B&&(M==null||M())},[B,M]);const V=($e=P.arrow)==null?void 0:$e.x,Q=(xr=P.arrow)==null?void 0:xr.y,ye=((at=P.arrow)==null?void 0:at.centerOffset)!==0,[Le,De]=m.useState();return on(()=>{h&&De(window.getComputedStyle(h).zIndex)},[h]),d.jsx("div",{ref:I.setFloating,"data-radix-popper-content-wrapper":"",style:{...O,transform:B?O.transform:"translate(0, -200%)",minWidth:"max-content",zIndex:Le,"--radix-popper-transform-origin":[(Sr=P.transformOrigin)==null?void 0:Sr.x,(sp=P.transformOrigin)==null?void 0:sp.y].join(" "),...((ip=P.hide)==null?void 0:ip.referenceHidden)&&{visibility:"hidden",pointerEvents:"none"}},dir:e.dir,children:d.jsx(YN,{scope:n,placedSide:T,onArrowChange:C,arrowX:V,arrowY:Q,shouldHideArrow:ye,children:d.jsx(se.div,{"data-side":T,"data-align":L,...v,ref:b,style:{...v.style,animation:B?void 0:"none"}})})})});Ix.displayName=Yf;var Lx="PopperArrow",QN={top:"bottom",right:"left",bottom:"top",left:"right"},Dx=m.forwardRef(function(t,n){const{__scopePopper:o,...r}=t,s=qN(Lx,o),i=QN[s.placedSide];return d.jsx("span",{ref:s.onArrowChange,style:{position:"absolute",left:s.arrowX,top:s.arrowY,[i]:0,transformOrigin:{top:"",right:"0 0",bottom:"center 0",left:"100% 0"}[s.placedSide],transform:{top:"translateY(100%)",right:"translateY(50%) rotate(90deg) translateX(-50%)",bottom:"rotate(180deg)",left:"translateY(50%) rotate(-90deg) translateX(50%)"}[s.placedSide],visibility:s.shouldHideArrow?"hidden":void 0},children:d.jsx(JN,{...r,ref:n,style:{...r.style,display:"block"}})})});Dx.displayName=Lx;function XN(e){return e!==null}var ZN=e=>({name:"transformOrigin",options:e,fn(t){var x,h,g;const{placement:n,rects:o,middlewareData:r}=t,i=((x=r.arrow)==null?void 0:x.centerOffset)!==0,a=i?0:e.arrowWidth,l=i?0:e.arrowHeight,[c,u]=Fx(n),f={start:"0%",center:"50%",end:"100%"}[u],p=(((h=r.arrow)==null?void 0:h.x)??0)+a/2,y=(((g=r.arrow)==null?void 0:g.y)??0)+l/2;let w="",v="";return c==="bottom"?(w=i?f:`${p}px`,v=`${-l}px`):c==="top"?(w=i?f:`${p}px`,v=`${o.floating.height+l}px`):c==="right"?(w=`${-l}px`,v=i?f:`${y}px`):c==="left"&&(w=`${o.floating.width+l}px`,v=i?f:`${y}px`),{data:{x:w,y:v}}}});function Fx(e){const[t,n="center"]=e.split("-");return[t,n]}var eO=Nx,tO=Mx,nO=Ix,oO=Dx,rO="Portal",_x=m.forwardRef((e,t)=>{var a;const{container:n,...o}=e,[r,s]=m.useState(!1);on(()=>s(!0),[]);const i=n||r&&((a=globalThis==null?void 0:globalThis.document)==null?void 0:a.body);return i?QC.createPortal(d.jsx(se.div,{...o,ref:t}),i):null});_x.displayName=rO;var wc="rovingFocusGroup.onEntryFocus",sO={bubbles:!1,cancelable:!0},Qs="RovingFocusGroup",[Ku,Ux,iO]=ux(Qs),[aO,vl]=go(Qs,[iO]),[lO,cO]=aO(Qs),Bx=m.forwardRef((e,t)=>d.jsx(Ku.Provider,{scope:e.__scopeRovingFocusGroup,children:d.jsx(Ku.Slot,{scope:e.__scopeRovingFocusGroup,children:d.jsx(uO,{...e,ref:t})})}));Bx.displayName=Qs;var uO=m.forwardRef((e,t)=>{const{__scopeRovingFocusGroup:n,orientation:o,loop:r=!1,dir:s,currentTabStopId:i,defaultCurrentTabStopId:a,onCurrentTabStopIdChange:l,onEntryFocus:c,preventScrollOnEntryFocus:u=!1,...f}=e,p=m.useRef(null),y=ge(t,p),w=ul(s),[v,x]=Vf({prop:i,defaultProp:a??null,onChange:l,caller:Qs}),[h,g]=m.useState(!1),b=Ne(c),S=Ux(n),C=m.useRef(!1),[k,E]=m.useState(0);return m.useEffect(()=>{const j=p.current;if(j)return j.addEventListener(wc,b),()=>j.removeEventListener(wc,b)},[b]),d.jsx(lO,{scope:n,orientation:o,dir:w,loop:r,currentTabStopId:v,onItemFocus:m.useCallback(j=>x(j),[x]),onItemShiftTab:m.useCallback(()=>g(!0),[]),onFocusableItemAdd:m.useCallback(()=>E(j=>j+1),[]),onFocusableItemRemove:m.useCallback(()=>E(j=>j-1),[]),children:d.jsx(se.div,{tabIndex:h||k===0?-1:0,"data-orientation":o,...f,ref:y,style:{outline:"none",...e.style},onMouseDown:$(e.onMouseDown,()=>{C.current=!0}),onFocus:$(e.onFocus,j=>{const R=!C.current;if(j.target===j.currentTarget&&R&&!h){const A=new CustomEvent(wc,sO);if(j.currentTarget.dispatchEvent(A),!A.defaultPrevented){const F=S().filter(D=>D.focusable),_=F.find(D=>D.active),W=F.find(D=>D.id===v),O=[_,W,...F].filter(Boolean).map(D=>D.ref.current);Wx(O,u)}}C.current=!1}),onBlur:$(e.onBlur,()=>g(!1))})})}),Vx="RovingFocusGroupItem",Hx=m.forwardRef((e,t)=>{const{__scopeRovingFocusGroup:n,focusable:o=!0,active:r=!1,tabStopId:s,children:i,...a}=e,l=Na(),c=s||l,u=cO(Vx,n),f=u.currentTabStopId===c,p=Ux(n),{onFocusableItemAdd:y,onFocusableItemRemove:w,currentTabStopId:v}=u;return m.useEffect(()=>{if(o)return y(),()=>w()},[o,y,w]),d.jsx(Ku.ItemSlot,{scope:n,id:c,focusable:o,active:r,children:d.jsx(se.span,{tabIndex:f?0:-1,"data-orientation":u.orientation,...a,ref:t,onMouseDown:$(e.onMouseDown,x=>{o?u.onItemFocus(c):x.preventDefault()}),onFocus:$(e.onFocus,()=>u.onItemFocus(c)),onKeyDown:$(e.onKeyDown,x=>{if(x.key==="Tab"&&x.shiftKey){u.onItemShiftTab();return}if(x.target!==x.currentTarget)return;const h=pO(x,u.orientation,u.dir);if(h!==void 0){if(x.metaKey||x.ctrlKey||x.altKey||x.shiftKey)return;x.preventDefault();let b=p().filter(S=>S.focusable).map(S=>S.ref.current);if(h==="last")b.reverse();else if(h==="prev"||h==="next"){h==="prev"&&b.reverse();const S=b.indexOf(x.currentTarget);b=u.loop?mO(b,S+1):b.slice(S+1)}setTimeout(()=>Wx(b))}}),children:typeof i=="function"?i({isCurrentTabStop:f,hasTabStop:v!=null}):i})})});Hx.displayName=Vx;var dO={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function fO(e,t){return t!=="rtl"?e:e==="ArrowLeft"?"ArrowRight":e==="ArrowRight"?"ArrowLeft":e}function pO(e,t,n){const o=fO(e.key,n);if(!(t==="vertical"&&["ArrowLeft","ArrowRight"].includes(o))&&!(t==="horizontal"&&["ArrowUp","ArrowDown"].includes(o)))return dO[o]}function Wx(e,t=!1){const n=document.activeElement;for(const o of e)if(o===n||(o.focus({preventScroll:t}),document.activeElement!==n))return}function mO(e,t){return e.map((n,o)=>e[(t+o)%e.length])}var $x=Bx,zx=Hx;function hO(e){const t=gO(e),n=m.forwardRef((o,r)=>{const{children:s,...i}=o,a=m.Children.toArray(s),l=a.find(vO);if(l){const c=l.props.children,u=a.map(f=>f===l?m.Children.count(c)>1?m.Children.only(null):m.isValidElement(c)?c.props.children:null:f);return d.jsx(t,{...i,ref:r,children:m.isValidElement(c)?m.cloneElement(c,void 0,u):null})}return d.jsx(t,{...i,ref:r,children:s})});return n.displayName=`${e}.Slot`,n}function gO(e){const t=m.forwardRef((n,o)=>{const{children:r,...s}=n;if(m.isValidElement(r)){const i=wO(r),a=bO(s,r.props);return r.type!==m.Fragment&&(a.ref=o?ho(o,i):i),m.cloneElement(r,a)}return m.Children.count(r)>1?m.Children.only(null):null});return t.displayName=`${e}.SlotClone`,t}var yO=Symbol("radix.slottable");function vO(e){return m.isValidElement(e)&&typeof e.type=="function"&&"__radixId"in e.type&&e.type.__radixId===yO}function bO(e,t){const n={...t};for(const o in t){const r=e[o],s=t[o];/^on[A-Z]/.test(o)?r&&s?n[o]=(...a)=>{const l=s(...a);return r(...a),l}:r&&(n[o]=r):o==="style"?n[o]={...r,...s}:o==="className"&&(n[o]=[r,s].filter(Boolean).join(" "))}return{...e,...n}}function wO(e){var o,r;let t=(o=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:o.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(t=(r=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:r.get,n=t&&"isReactWarning"in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}var xO=function(e){if(typeof document>"u")return null;var t=Array.isArray(e)?e[0]:e;return t.ownerDocument.body},wo=new WeakMap,ki=new WeakMap,ji={},xc=0,Jx=function(e){return e&&(e.host||Jx(e.parentNode))},SO=function(e,t){return t.map(function(n){if(e.contains(n))return n;var o=Jx(n);return o&&e.contains(o)?o:(console.error("aria-hidden",n,"in not contained inside",e,". Doing nothing"),null)}).filter(function(n){return!!n})},CO=function(e,t,n,o){var r=SO(t,Array.isArray(e)?e:[e]);ji[n]||(ji[n]=new WeakMap);var s=ji[n],i=[],a=new Set,l=new Set(r),c=function(f){!f||a.has(f)||(a.add(f),c(f.parentNode))};r.forEach(c);var u=function(f){!f||l.has(f)||Array.prototype.forEach.call(f.children,function(p){if(a.has(p))u(p);else try{var y=p.getAttribute(o),w=y!==null&&y!=="false",v=(wo.get(p)||0)+1,x=(s.get(p)||0)+1;wo.set(p,v),s.set(p,x),i.push(p),v===1&&w&&ki.set(p,!0),x===1&&p.setAttribute(n,"true"),w||p.setAttribute(o,"true")}catch(h){console.error("aria-hidden: cannot operate on ",p,h)}})};return u(t),a.clear(),xc++,function(){i.forEach(function(f){var p=wo.get(f)-1,y=s.get(f)-1;wo.set(f,p),s.set(f,y),p||(ki.has(f)||f.removeAttribute(o),ki.delete(f)),y||f.removeAttribute(n)}),xc--,xc||(wo=new WeakMap,wo=new WeakMap,ki=new WeakMap,ji={})}},EO=function(e,t,n){n===void 0&&(n="data-aria-hidden");var o=Array.from(Array.isArray(e)?e:[e]),r=xO(e);return r?(o.push.apply(o,Array.from(r.querySelectorAll("[aria-live], script"))),CO(o,r,n,"aria-hidden")):function(){return null}},Ot=function(){return Ot=Object.assign||function(t){for(var n,o=1,r=arguments.length;o<r;o++){n=arguments[o];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(t[s]=n[s])}return t},Ot.apply(this,arguments)};function Gx(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]]);return n}function kO(e,t,n){if(n||arguments.length===2)for(var o=0,r=t.length,s;o<r;o++)(s||!(o in t))&&(s||(s=Array.prototype.slice.call(t,0,o)),s[o]=t[o]);return e.concat(s||Array.prototype.slice.call(t))}var Gi="right-scroll-bar-position",Ki="width-before-scroll-bar",jO="with-scroll-bars-hidden",PO="--removed-body-scroll-bar-size";function Sc(e,t){return typeof e=="function"?e(t):e&&(e.current=t),e}function TO(e,t){var n=m.useState(function(){return{value:e,callback:t,facade:{get current(){return n.value},set current(o){var r=n.value;r!==o&&(n.value=o,n.callback(o,r))}}}})[0];return n.callback=t,n.facade}var AO=typeof window<"u"?m.useLayoutEffect:m.useEffect,gg=new WeakMap;function RO(e,t){var n=TO(null,function(o){return e.forEach(function(r){return Sc(r,o)})});return AO(function(){var o=gg.get(n);if(o){var r=new Set(o),s=new Set(e),i=n.current;r.forEach(function(a){s.has(a)||Sc(a,null)}),s.forEach(function(a){r.has(a)||Sc(a,i)})}gg.set(n,e)},[e]),n}function NO(e){return e}function OO(e,t){t===void 0&&(t=NO);var n=[],o=!1,r={read:function(){if(o)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return n.length?n[n.length-1]:e},useMedium:function(s){var i=t(s,o);return n.push(i),function(){n=n.filter(function(a){return a!==i})}},assignSyncMedium:function(s){for(o=!0;n.length;){var i=n;n=[],i.forEach(s)}n={push:function(a){return s(a)},filter:function(){return n}}},assignMedium:function(s){o=!0;var i=[];if(n.length){var a=n;n=[],a.forEach(s),i=n}var l=function(){var u=i;i=[],u.forEach(s)},c=function(){return Promise.resolve().then(l)};c(),n={push:function(u){i.push(u),c()},filter:function(u){return i=i.filter(u),n}}}};return r}function MO(e){e===void 0&&(e={});var t=OO(null);return t.options=Ot({async:!0,ssr:!1},e),t}var Kx=function(e){var t=e.sideCar,n=Gx(e,["sideCar"]);if(!t)throw new Error("Sidecar: please provide `sideCar` property to import the right car");var o=t.read();if(!o)throw new Error("Sidecar medium not found");return m.createElement(o,Ot({},n))};Kx.isSideCarExport=!0;function IO(e,t){return e.useMedium(t),Kx}var Yx=MO(),Cc=function(){},bl=m.forwardRef(function(e,t){var n=m.useRef(null),o=m.useState({onScrollCapture:Cc,onWheelCapture:Cc,onTouchMoveCapture:Cc}),r=o[0],s=o[1],i=e.forwardProps,a=e.children,l=e.className,c=e.removeScrollBar,u=e.enabled,f=e.shards,p=e.sideCar,y=e.noRelative,w=e.noIsolation,v=e.inert,x=e.allowPinchZoom,h=e.as,g=h===void 0?"div":h,b=e.gapMode,S=Gx(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noRelative","noIsolation","inert","allowPinchZoom","as","gapMode"]),C=p,k=RO([n,t]),E=Ot(Ot({},S),r);return m.createElement(m.Fragment,null,u&&m.createElement(C,{sideCar:Yx,removeScrollBar:c,shards:f,noRelative:y,noIsolation:w,inert:v,setCallbacks:s,allowPinchZoom:!!x,lockRef:n,gapMode:b}),i?m.cloneElement(m.Children.only(a),Ot(Ot({},E),{ref:k})):m.createElement(g,Ot({},E,{className:l,ref:k}),a))});bl.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1};bl.classNames={fullWidth:Ki,zeroRight:Gi};var LO=function(){if(typeof __webpack_nonce__<"u")return __webpack_nonce__};function DO(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var t=LO();return t&&e.setAttribute("nonce",t),e}function FO(e,t){e.styleSheet?e.styleSheet.cssText=t:e.appendChild(document.createTextNode(t))}function _O(e){var t=document.head||document.getElementsByTagName("head")[0];t.appendChild(e)}var UO=function(){var e=0,t=null;return{add:function(n){e==0&&(t=DO())&&(FO(t,n),_O(t)),e++},remove:function(){e--,!e&&t&&(t.parentNode&&t.parentNode.removeChild(t),t=null)}}},BO=function(){var e=UO();return function(t,n){m.useEffect(function(){return e.add(t),function(){e.remove()}},[t&&n])}},qx=function(){var e=BO(),t=function(n){var o=n.styles,r=n.dynamic;return e(o,r),null};return t},VO={left:0,top:0,right:0,gap:0},Ec=function(e){return parseInt(e||"",10)||0},HO=function(e){var t=window.getComputedStyle(document.body),n=t[e==="padding"?"paddingLeft":"marginLeft"],o=t[e==="padding"?"paddingTop":"marginTop"],r=t[e==="padding"?"paddingRight":"marginRight"];return[Ec(n),Ec(o),Ec(r)]},WO=function(e){if(e===void 0&&(e="margin"),typeof window>"u")return VO;var t=HO(e),n=document.documentElement.clientWidth,o=window.innerWidth;return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,o-n+t[2]-t[0])}},$O=qx(),qo="data-scroll-locked",zO=function(e,t,n,o){var r=e.left,s=e.top,i=e.right,a=e.gap;return n===void 0&&(n="margin"),`
  .`.concat(jO,` {
   overflow: hidden `).concat(o,`;
   padding-right: `).concat(a,"px ").concat(o,`;
  }
  body[`).concat(qo,`] {
    overflow: hidden `).concat(o,`;
    overscroll-behavior: contain;
    `).concat([t&&"position: relative ".concat(o,";"),n==="margin"&&`
    padding-left: `.concat(r,`px;
    padding-top: `).concat(s,`px;
    padding-right: `).concat(i,`px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(a,"px ").concat(o,`;
    `),n==="padding"&&"padding-right: ".concat(a,"px ").concat(o,";")].filter(Boolean).join(""),`
  }
  
  .`).concat(Gi,` {
    right: `).concat(a,"px ").concat(o,`;
  }
  
  .`).concat(Ki,` {
    margin-right: `).concat(a,"px ").concat(o,`;
  }
  
  .`).concat(Gi," .").concat(Gi,` {
    right: 0 `).concat(o,`;
  }
  
  .`).concat(Ki," .").concat(Ki,` {
    margin-right: 0 `).concat(o,`;
  }
  
  body[`).concat(qo,`] {
    `).concat(PO,": ").concat(a,`px;
  }
`)},yg=function(){var e=parseInt(document.body.getAttribute(qo)||"0",10);return isFinite(e)?e:0},JO=function(){m.useEffect(function(){return document.body.setAttribute(qo,(yg()+1).toString()),function(){var e=yg()-1;e<=0?document.body.removeAttribute(qo):document.body.setAttribute(qo,e.toString())}},[])},GO=function(e){var t=e.noRelative,n=e.noImportant,o=e.gapMode,r=o===void 0?"margin":o;JO();var s=m.useMemo(function(){return WO(r)},[r]);return m.createElement($O,{styles:zO(s,!t,r,n?"":"!important")})},Yu=!1;if(typeof window<"u")try{var Pi=Object.defineProperty({},"passive",{get:function(){return Yu=!0,!0}});window.addEventListener("test",Pi,Pi),window.removeEventListener("test",Pi,Pi)}catch{Yu=!1}var xo=Yu?{passive:!1}:!1,KO=function(e){return e.tagName==="TEXTAREA"},Qx=function(e,t){if(!(e instanceof Element))return!1;var n=window.getComputedStyle(e);return n[t]!=="hidden"&&!(n.overflowY===n.overflowX&&!KO(e)&&n[t]==="visible")},YO=function(e){return Qx(e,"overflowY")},qO=function(e){return Qx(e,"overflowX")},vg=function(e,t){var n=t.ownerDocument,o=t;do{typeof ShadowRoot<"u"&&o instanceof ShadowRoot&&(o=o.host);var r=Xx(e,o);if(r){var s=Zx(e,o),i=s[1],a=s[2];if(i>a)return!0}o=o.parentNode}while(o&&o!==n.body);return!1},QO=function(e){var t=e.scrollTop,n=e.scrollHeight,o=e.clientHeight;return[t,n,o]},XO=function(e){var t=e.scrollLeft,n=e.scrollWidth,o=e.clientWidth;return[t,n,o]},Xx=function(e,t){return e==="v"?YO(t):qO(t)},Zx=function(e,t){return e==="v"?QO(t):XO(t)},ZO=function(e,t){return e==="h"&&t==="rtl"?-1:1},eM=function(e,t,n,o,r){var s=ZO(e,window.getComputedStyle(t).direction),i=s*o,a=n.target,l=t.contains(a),c=!1,u=i>0,f=0,p=0;do{if(!a)break;var y=Zx(e,a),w=y[0],v=y[1],x=y[2],h=v-x-s*w;(w||h)&&Xx(e,a)&&(f+=h,p+=w);var g=a.parentNode;a=g&&g.nodeType===Node.DOCUMENT_FRAGMENT_NODE?g.host:g}while(!l&&a!==document.body||l&&(t.contains(a)||t===a));return(u&&Math.abs(f)<1||!u&&Math.abs(p)<1)&&(c=!0),c},Ti=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},bg=function(e){return[e.deltaX,e.deltaY]},wg=function(e){return e&&"current"in e?e.current:e},tM=function(e,t){return e[0]===t[0]&&e[1]===t[1]},nM=function(e){return`
  .block-interactivity-`.concat(e,` {pointer-events: none;}
  .allow-interactivity-`).concat(e,` {pointer-events: all;}
`)},oM=0,So=[];function rM(e){var t=m.useRef([]),n=m.useRef([0,0]),o=m.useRef(),r=m.useState(oM++)[0],s=m.useState(qx)[0],i=m.useRef(e);m.useEffect(function(){i.current=e},[e]),m.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(r));var v=kO([e.lockRef.current],(e.shards||[]).map(wg),!0).filter(Boolean);return v.forEach(function(x){return x.classList.add("allow-interactivity-".concat(r))}),function(){document.body.classList.remove("block-interactivity-".concat(r)),v.forEach(function(x){return x.classList.remove("allow-interactivity-".concat(r))})}}},[e.inert,e.lockRef.current,e.shards]);var a=m.useCallback(function(v,x){if("touches"in v&&v.touches.length===2||v.type==="wheel"&&v.ctrlKey)return!i.current.allowPinchZoom;var h=Ti(v),g=n.current,b="deltaX"in v?v.deltaX:g[0]-h[0],S="deltaY"in v?v.deltaY:g[1]-h[1],C,k=v.target,E=Math.abs(b)>Math.abs(S)?"h":"v";if("touches"in v&&E==="h"&&k.type==="range")return!1;var j=window.getSelection(),R=j&&j.anchorNode,A=R?R===k||R.contains(k):!1;if(A)return!1;var F=vg(E,k);if(!F)return!0;if(F?C=E:(C=E==="v"?"h":"v",F=vg(E,k)),!F)return!1;if(!o.current&&"changedTouches"in v&&(b||S)&&(o.current=C),!C)return!0;var _=o.current||C;return eM(_,x,v,_==="h"?b:S)},[]),l=m.useCallback(function(v){var x=v;if(!(!So.length||So[So.length-1]!==s)){var h="deltaY"in x?bg(x):Ti(x),g=t.current.filter(function(C){return C.name===x.type&&(C.target===x.target||x.target===C.shadowParent)&&tM(C.delta,h)})[0];if(g&&g.should){x.cancelable&&x.preventDefault();return}if(!g){var b=(i.current.shards||[]).map(wg).filter(Boolean).filter(function(C){return C.contains(x.target)}),S=b.length>0?a(x,b[0]):!i.current.noIsolation;S&&x.cancelable&&x.preventDefault()}}},[]),c=m.useCallback(function(v,x,h,g){var b={name:v,delta:x,target:h,should:g,shadowParent:sM(h)};t.current.push(b),setTimeout(function(){t.current=t.current.filter(function(S){return S!==b})},1)},[]),u=m.useCallback(function(v){n.current=Ti(v),o.current=void 0},[]),f=m.useCallback(function(v){c(v.type,bg(v),v.target,a(v,e.lockRef.current))},[]),p=m.useCallback(function(v){c(v.type,Ti(v),v.target,a(v,e.lockRef.current))},[]);m.useEffect(function(){return So.push(s),e.setCallbacks({onScrollCapture:f,onWheelCapture:f,onTouchMoveCapture:p}),document.addEventListener("wheel",l,xo),document.addEventListener("touchmove",l,xo),document.addEventListener("touchstart",u,xo),function(){So=So.filter(function(v){return v!==s}),document.removeEventListener("wheel",l,xo),document.removeEventListener("touchmove",l,xo),document.removeEventListener("touchstart",u,xo)}},[]);var y=e.removeScrollBar,w=e.inert;return m.createElement(m.Fragment,null,w?m.createElement(s,{styles:nM(r)}):null,y?m.createElement(GO,{noRelative:e.noRelative,gapMode:e.gapMode}):null)}function sM(e){for(var t=null;e!==null;)e instanceof ShadowRoot&&(t=e.host,e=e.host),e=e.parentNode;return t}const iM=IO(Yx,rM);var e0=m.forwardRef(function(e,t){return m.createElement(bl,Ot({},e,{ref:t,sideCar:iM}))});e0.classNames=bl.classNames;var qu=["Enter"," "],aM=["ArrowDown","PageUp","Home"],t0=["ArrowUp","PageDown","End"],lM=[...aM,...t0],cM={ltr:[...qu,"ArrowRight"],rtl:[...qu,"ArrowLeft"]},uM={ltr:["ArrowLeft"],rtl:["ArrowRight"]},Xs="Menu",[Is,dM,fM]=ux(Xs),[yo,n0]=go(Xs,[fM,Ax,vl]),wl=Ax(),o0=vl(),[pM,vo]=yo(Xs),[mM,Zs]=yo(Xs),r0=e=>{const{__scopeMenu:t,open:n=!1,children:o,dir:r,onOpenChange:s,modal:i=!0}=e,a=wl(t),[l,c]=m.useState(null),u=m.useRef(!1),f=Ne(s),p=ul(r);return m.useEffect(()=>{const y=()=>{u.current=!0,document.addEventListener("pointerdown",w,{capture:!0,once:!0}),document.addEventListener("pointermove",w,{capture:!0,once:!0})},w=()=>u.current=!1;return document.addEventListener("keydown",y,{capture:!0}),()=>{document.removeEventListener("keydown",y,{capture:!0}),document.removeEventListener("pointerdown",w,{capture:!0}),document.removeEventListener("pointermove",w,{capture:!0})}},[]),d.jsx(eO,{...a,children:d.jsx(pM,{scope:t,open:n,onOpenChange:f,content:l,onContentChange:c,children:d.jsx(mM,{scope:t,onClose:m.useCallback(()=>f(!1),[f]),isUsingKeyboardRef:u,dir:p,modal:i,children:o})})})};r0.displayName=Xs;var hM="MenuAnchor",qf=m.forwardRef((e,t)=>{const{__scopeMenu:n,...o}=e,r=wl(n);return d.jsx(tO,{...r,...o,ref:t})});qf.displayName=hM;var Qf="MenuPortal",[gM,s0]=yo(Qf,{forceMount:void 0}),i0=e=>{const{__scopeMenu:t,forceMount:n,children:o,container:r}=e,s=vo(Qf,t);return d.jsx(gM,{scope:t,forceMount:n,children:d.jsx(Vt,{present:n||s.open,children:d.jsx(_x,{asChild:!0,container:r,children:o})})})};i0.displayName=Qf;var mt="MenuContent",[yM,Xf]=yo(mt),a0=m.forwardRef((e,t)=>{const n=s0(mt,e.__scopeMenu),{forceMount:o=n.forceMount,...r}=e,s=vo(mt,e.__scopeMenu),i=Zs(mt,e.__scopeMenu);return d.jsx(Is.Provider,{scope:e.__scopeMenu,children:d.jsx(Vt,{present:o||s.open,children:d.jsx(Is.Slot,{scope:e.__scopeMenu,children:i.modal?d.jsx(vM,{...r,ref:t}):d.jsx(bM,{...r,ref:t})})})})}),vM=m.forwardRef((e,t)=>{const n=vo(mt,e.__scopeMenu),o=m.useRef(null),r=ge(t,o);return m.useEffect(()=>{const s=o.current;if(s)return EO(s)},[]),d.jsx(Zf,{...e,ref:r,trapFocus:n.open,disableOutsidePointerEvents:n.open,disableOutsideScroll:!0,onFocusOutside:$(e.onFocusOutside,s=>s.preventDefault(),{checkForDefaultPrevented:!1}),onDismiss:()=>n.onOpenChange(!1)})}),bM=m.forwardRef((e,t)=>{const n=vo(mt,e.__scopeMenu);return d.jsx(Zf,{...e,ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,disableOutsideScroll:!1,onDismiss:()=>n.onOpenChange(!1)})}),wM=hO("MenuContent.ScrollLock"),Zf=m.forwardRef((e,t)=>{const{__scopeMenu:n,loop:o=!1,trapFocus:r,onOpenAutoFocus:s,onCloseAutoFocus:i,disableOutsidePointerEvents:a,onEntryFocus:l,onEscapeKeyDown:c,onPointerDownOutside:u,onFocusOutside:f,onInteractOutside:p,onDismiss:y,disableOutsideScroll:w,...v}=e,x=vo(mt,n),h=Zs(mt,n),g=wl(n),b=o0(n),S=dM(n),[C,k]=m.useState(null),E=m.useRef(null),j=ge(t,E,x.onContentChange),R=m.useRef(0),A=m.useRef(""),F=m.useRef(0),_=m.useRef(null),W=m.useRef("right"),I=m.useRef(0),O=w?e0:m.Fragment,D=w?{as:wM,allowPinchZoom:!0}:void 0,B=T=>{var $e,xr;const L=A.current+T,M=S().filter(at=>!at.disabled),V=document.activeElement,Q=($e=M.find(at=>at.ref.current===V))==null?void 0:$e.textValue,ye=M.map(at=>at.textValue),Le=OM(ye,L,Q),De=(xr=M.find(at=>at.textValue===Le))==null?void 0:xr.ref.current;(function at(Sr){A.current=Sr,window.clearTimeout(R.current),Sr!==""&&(R.current=window.setTimeout(()=>at(""),1e3))})(L),De&&setTimeout(()=>De.focus())};m.useEffect(()=>()=>window.clearTimeout(R.current),[]),kR();const P=m.useCallback(T=>{var M,V;return W.current===((M=_.current)==null?void 0:M.side)&&IM(T,(V=_.current)==null?void 0:V.area)},[]);return d.jsx(yM,{scope:n,searchRef:A,onItemEnter:m.useCallback(T=>{P(T)&&T.preventDefault()},[P]),onItemLeave:m.useCallback(T=>{var L;P(T)||((L=E.current)==null||L.focus(),k(null))},[P]),onTriggerLeave:m.useCallback(T=>{P(T)&&T.preventDefault()},[P]),pointerGraceTimerRef:F,onPointerGraceIntentChange:m.useCallback(T=>{_.current=T},[]),children:d.jsx(O,{...D,children:d.jsx(mx,{asChild:!0,trapped:r,onMountAutoFocus:$(s,T=>{var L;T.preventDefault(),(L=E.current)==null||L.focus({preventScroll:!0})}),onUnmountAutoFocus:i,children:d.jsx(fx,{asChild:!0,disableOutsidePointerEvents:a,onEscapeKeyDown:c,onPointerDownOutside:u,onFocusOutside:f,onInteractOutside:p,onDismiss:y,children:d.jsx($x,{asChild:!0,...b,dir:h.dir,orientation:"vertical",loop:o,currentTabStopId:C,onCurrentTabStopIdChange:k,onEntryFocus:$(l,T=>{h.isUsingKeyboardRef.current||T.preventDefault()}),preventScrollOnEntryFocus:!0,children:d.jsx(nO,{role:"menu","aria-orientation":"vertical","data-state":C0(x.open),"data-radix-menu-content":"",dir:h.dir,...g,...v,ref:j,style:{outline:"none",...v.style},onKeyDown:$(v.onKeyDown,T=>{const M=T.target.closest("[data-radix-menu-content]")===T.currentTarget,V=T.ctrlKey||T.altKey||T.metaKey,Q=T.key.length===1;M&&(T.key==="Tab"&&T.preventDefault(),!V&&Q&&B(T.key));const ye=E.current;if(T.target!==ye||!lM.includes(T.key))return;T.preventDefault();const De=S().filter($e=>!$e.disabled).map($e=>$e.ref.current);t0.includes(T.key)&&De.reverse(),RM(De)}),onBlur:$(e.onBlur,T=>{T.currentTarget.contains(T.target)||(window.clearTimeout(R.current),A.current="")}),onPointerMove:$(e.onPointerMove,Ls(T=>{const L=T.target,M=I.current!==T.clientX;if(T.currentTarget.contains(L)&&M){const V=T.clientX>I.current?"right":"left";W.current=V,I.current=T.clientX}}))})})})})})})});a0.displayName=mt;var xM="MenuGroup",ep=m.forwardRef((e,t)=>{const{__scopeMenu:n,...o}=e;return d.jsx(se.div,{role:"group",...o,ref:t})});ep.displayName=xM;var SM="MenuLabel",l0=m.forwardRef((e,t)=>{const{__scopeMenu:n,...o}=e;return d.jsx(se.div,{...o,ref:t})});l0.displayName=SM;var Da="MenuItem",xg="menu.itemSelect",xl=m.forwardRef((e,t)=>{const{disabled:n=!1,onSelect:o,...r}=e,s=m.useRef(null),i=Zs(Da,e.__scopeMenu),a=Xf(Da,e.__scopeMenu),l=ge(t,s),c=m.useRef(!1),u=()=>{const f=s.current;if(!n&&f){const p=new CustomEvent(xg,{bubbles:!0,cancelable:!0});f.addEventListener(xg,y=>o==null?void 0:o(y),{once:!0}),_w(f,p),p.defaultPrevented?c.current=!1:i.onClose()}};return d.jsx(c0,{...r,ref:l,disabled:n,onClick:$(e.onClick,u),onPointerDown:f=>{var p;(p=e.onPointerDown)==null||p.call(e,f),c.current=!0},onPointerUp:$(e.onPointerUp,f=>{var p;c.current||(p=f.currentTarget)==null||p.click()}),onKeyDown:$(e.onKeyDown,f=>{const p=a.searchRef.current!=="";n||p&&f.key===" "||qu.includes(f.key)&&(f.currentTarget.click(),f.preventDefault())})})});xl.displayName=Da;var c0=m.forwardRef((e,t)=>{const{__scopeMenu:n,disabled:o=!1,textValue:r,...s}=e,i=Xf(Da,n),a=o0(n),l=m.useRef(null),c=ge(t,l),[u,f]=m.useState(!1),[p,y]=m.useState("");return m.useEffect(()=>{const w=l.current;w&&y((w.textContent??"").trim())},[s.children]),d.jsx(Is.ItemSlot,{scope:n,disabled:o,textValue:r??p,children:d.jsx(zx,{asChild:!0,...a,focusable:!o,children:d.jsx(se.div,{role:"menuitem","data-highlighted":u?"":void 0,"aria-disabled":o||void 0,"data-disabled":o?"":void 0,...s,ref:c,onPointerMove:$(e.onPointerMove,Ls(w=>{o?i.onItemLeave(w):(i.onItemEnter(w),w.defaultPrevented||w.currentTarget.focus({preventScroll:!0}))})),onPointerLeave:$(e.onPointerLeave,Ls(w=>i.onItemLeave(w))),onFocus:$(e.onFocus,()=>f(!0)),onBlur:$(e.onBlur,()=>f(!1))})})})}),CM="MenuCheckboxItem",u0=m.forwardRef((e,t)=>{const{checked:n=!1,onCheckedChange:o,...r}=e;return d.jsx(h0,{scope:e.__scopeMenu,checked:n,children:d.jsx(xl,{role:"menuitemcheckbox","aria-checked":Fa(n)?"mixed":n,...r,ref:t,"data-state":np(n),onSelect:$(r.onSelect,()=>o==null?void 0:o(Fa(n)?!0:!n),{checkForDefaultPrevented:!1})})})});u0.displayName=CM;var d0="MenuRadioGroup",[EM,kM]=yo(d0,{value:void 0,onValueChange:()=>{}}),f0=m.forwardRef((e,t)=>{const{value:n,onValueChange:o,...r}=e,s=Ne(o);return d.jsx(EM,{scope:e.__scopeMenu,value:n,onValueChange:s,children:d.jsx(ep,{...r,ref:t})})});f0.displayName=d0;var p0="MenuRadioItem",m0=m.forwardRef((e,t)=>{const{value:n,...o}=e,r=kM(p0,e.__scopeMenu),s=n===r.value;return d.jsx(h0,{scope:e.__scopeMenu,checked:s,children:d.jsx(xl,{role:"menuitemradio","aria-checked":s,...o,ref:t,"data-state":np(s),onSelect:$(o.onSelect,()=>{var i;return(i=r.onValueChange)==null?void 0:i.call(r,n)},{checkForDefaultPrevented:!1})})})});m0.displayName=p0;var tp="MenuItemIndicator",[h0,jM]=yo(tp,{checked:!1}),g0=m.forwardRef((e,t)=>{const{__scopeMenu:n,forceMount:o,...r}=e,s=jM(tp,n);return d.jsx(Vt,{present:o||Fa(s.checked)||s.checked===!0,children:d.jsx(se.span,{...r,ref:t,"data-state":np(s.checked)})})});g0.displayName=tp;var PM="MenuSeparator",y0=m.forwardRef((e,t)=>{const{__scopeMenu:n,...o}=e;return d.jsx(se.div,{role:"separator","aria-orientation":"horizontal",...o,ref:t})});y0.displayName=PM;var TM="MenuArrow",v0=m.forwardRef((e,t)=>{const{__scopeMenu:n,...o}=e,r=wl(n);return d.jsx(oO,{...r,...o,ref:t})});v0.displayName=TM;var AM="MenuSub",[SD,b0]=yo(AM),Hr="MenuSubTrigger",w0=m.forwardRef((e,t)=>{const n=vo(Hr,e.__scopeMenu),o=Zs(Hr,e.__scopeMenu),r=b0(Hr,e.__scopeMenu),s=Xf(Hr,e.__scopeMenu),i=m.useRef(null),{pointerGraceTimerRef:a,onPointerGraceIntentChange:l}=s,c={__scopeMenu:e.__scopeMenu},u=m.useCallback(()=>{i.current&&window.clearTimeout(i.current),i.current=null},[]);return m.useEffect(()=>u,[u]),m.useEffect(()=>{const f=a.current;return()=>{window.clearTimeout(f),l(null)}},[a,l]),d.jsx(qf,{asChild:!0,...c,children:d.jsx(c0,{id:r.triggerId,"aria-haspopup":"menu","aria-expanded":n.open,"aria-controls":r.contentId,"data-state":C0(n.open),...e,ref:ho(t,r.onTriggerChange),onClick:f=>{var p;(p=e.onClick)==null||p.call(e,f),!(e.disabled||f.defaultPrevented)&&(f.currentTarget.focus(),n.open||n.onOpenChange(!0))},onPointerMove:$(e.onPointerMove,Ls(f=>{s.onItemEnter(f),!f.defaultPrevented&&!e.disabled&&!n.open&&!i.current&&(s.onPointerGraceIntentChange(null),i.current=window.setTimeout(()=>{n.onOpenChange(!0),u()},100))})),onPointerLeave:$(e.onPointerLeave,Ls(f=>{var y,w;u();const p=(y=n.content)==null?void 0:y.getBoundingClientRect();if(p){const v=(w=n.content)==null?void 0:w.dataset.side,x=v==="right",h=x?-5:5,g=p[x?"left":"right"],b=p[x?"right":"left"];s.onPointerGraceIntentChange({area:[{x:f.clientX+h,y:f.clientY},{x:g,y:p.top},{x:b,y:p.top},{x:b,y:p.bottom},{x:g,y:p.bottom}],side:v}),window.clearTimeout(a.current),a.current=window.setTimeout(()=>s.onPointerGraceIntentChange(null),300)}else{if(s.onTriggerLeave(f),f.defaultPrevented)return;s.onPointerGraceIntentChange(null)}})),onKeyDown:$(e.onKeyDown,f=>{var y;const p=s.searchRef.current!=="";e.disabled||p&&f.key===" "||cM[o.dir].includes(f.key)&&(n.onOpenChange(!0),(y=n.content)==null||y.focus(),f.preventDefault())})})})});w0.displayName=Hr;var x0="MenuSubContent",S0=m.forwardRef((e,t)=>{const n=s0(mt,e.__scopeMenu),{forceMount:o=n.forceMount,...r}=e,s=vo(mt,e.__scopeMenu),i=Zs(mt,e.__scopeMenu),a=b0(x0,e.__scopeMenu),l=m.useRef(null),c=ge(t,l);return d.jsx(Is.Provider,{scope:e.__scopeMenu,children:d.jsx(Vt,{present:o||s.open,children:d.jsx(Is.Slot,{scope:e.__scopeMenu,children:d.jsx(Zf,{id:a.contentId,"aria-labelledby":a.triggerId,...r,ref:c,align:"start",side:i.dir==="rtl"?"left":"right",disableOutsidePointerEvents:!1,disableOutsideScroll:!1,trapFocus:!1,onOpenAutoFocus:u=>{var f;i.isUsingKeyboardRef.current&&((f=l.current)==null||f.focus()),u.preventDefault()},onCloseAutoFocus:u=>u.preventDefault(),onFocusOutside:$(e.onFocusOutside,u=>{u.target!==a.trigger&&s.onOpenChange(!1)}),onEscapeKeyDown:$(e.onEscapeKeyDown,u=>{i.onClose(),u.preventDefault()}),onKeyDown:$(e.onKeyDown,u=>{var y;const f=u.currentTarget.contains(u.target),p=uM[i.dir].includes(u.key);f&&p&&(s.onOpenChange(!1),(y=a.trigger)==null||y.focus(),u.preventDefault())})})})})})});S0.displayName=x0;function C0(e){return e?"open":"closed"}function Fa(e){return e==="indeterminate"}function np(e){return Fa(e)?"indeterminate":e?"checked":"unchecked"}function RM(e){const t=document.activeElement;for(const n of e)if(n===t||(n.focus(),document.activeElement!==t))return}function NM(e,t){return e.map((n,o)=>e[(t+o)%e.length])}function OM(e,t,n){const r=t.length>1&&Array.from(t).every(c=>c===t[0])?t[0]:t,s=n?e.indexOf(n):-1;let i=NM(e,Math.max(s,0));r.length===1&&(i=i.filter(c=>c!==n));const l=i.find(c=>c.toLowerCase().startsWith(r.toLowerCase()));return l!==n?l:void 0}function MM(e,t){const{x:n,y:o}=e;let r=!1;for(let s=0,i=t.length-1;s<t.length;i=s++){const a=t[s],l=t[i],c=a.x,u=a.y,f=l.x,p=l.y;u>o!=p>o&&n<(f-c)*(o-u)/(p-u)+c&&(r=!r)}return r}function IM(e,t){if(!t)return!1;const n={x:e.clientX,y:e.clientY};return MM(n,t)}function Ls(e){return t=>t.pointerType==="mouse"?e(t):void 0}var LM=r0,DM=qf,FM=i0,_M=a0,UM=ep,BM=l0,VM=xl,HM=u0,WM=f0,$M=m0,zM=g0,JM=y0,GM=v0,KM=w0,YM=S0,Sl="DropdownMenu",[qM]=go(Sl,[n0]),We=n0(),[QM,E0]=qM(Sl),k0=e=>{const{__scopeDropdownMenu:t,children:n,dir:o,open:r,defaultOpen:s,onOpenChange:i,modal:a=!0}=e,l=We(t),c=m.useRef(null),[u,f]=Vf({prop:r,defaultProp:s??!1,onChange:i,caller:Sl});return d.jsx(QM,{scope:t,triggerId:Na(),triggerRef:c,contentId:Na(),open:u,onOpenChange:f,onOpenToggle:m.useCallback(()=>f(p=>!p),[f]),modal:a,children:d.jsx(LM,{...l,open:u,onOpenChange:f,dir:o,modal:a,children:n})})};k0.displayName=Sl;var j0="DropdownMenuTrigger",P0=m.forwardRef((e,t)=>{const{__scopeDropdownMenu:n,disabled:o=!1,...r}=e,s=E0(j0,n),i=We(n);return d.jsx(DM,{asChild:!0,...i,children:d.jsx(se.button,{type:"button",id:s.triggerId,"aria-haspopup":"menu","aria-expanded":s.open,"aria-controls":s.open?s.contentId:void 0,"data-state":s.open?"open":"closed","data-disabled":o?"":void 0,disabled:o,...r,ref:ho(t,s.triggerRef),onPointerDown:$(e.onPointerDown,a=>{!o&&a.button===0&&a.ctrlKey===!1&&(s.onOpenToggle(),s.open||a.preventDefault())}),onKeyDown:$(e.onKeyDown,a=>{o||(["Enter"," "].includes(a.key)&&s.onOpenToggle(),a.key==="ArrowDown"&&s.onOpenChange(!0),["Enter"," ","ArrowDown"].includes(a.key)&&a.preventDefault())})})})});P0.displayName=j0;var XM="DropdownMenuPortal",T0=e=>{const{__scopeDropdownMenu:t,...n}=e,o=We(t);return d.jsx(FM,{...o,...n})};T0.displayName=XM;var A0="DropdownMenuContent",R0=m.forwardRef((e,t)=>{const{__scopeDropdownMenu:n,...o}=e,r=E0(A0,n),s=We(n),i=m.useRef(!1);return d.jsx(_M,{id:r.contentId,"aria-labelledby":r.triggerId,...s,...o,ref:t,onCloseAutoFocus:$(e.onCloseAutoFocus,a=>{var l;i.current||(l=r.triggerRef.current)==null||l.focus(),i.current=!1,a.preventDefault()}),onInteractOutside:$(e.onInteractOutside,a=>{const l=a.detail.originalEvent,c=l.button===0&&l.ctrlKey===!0,u=l.button===2||c;(!r.modal||u)&&(i.current=!0)}),style:{...e.style,"--radix-dropdown-menu-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-dropdown-menu-content-available-width":"var(--radix-popper-available-width)","--radix-dropdown-menu-content-available-height":"var(--radix-popper-available-height)","--radix-dropdown-menu-trigger-width":"var(--radix-popper-anchor-width)","--radix-dropdown-menu-trigger-height":"var(--radix-popper-anchor-height)"}})});R0.displayName=A0;var ZM="DropdownMenuGroup",eI=m.forwardRef((e,t)=>{const{__scopeDropdownMenu:n,...o}=e,r=We(n);return d.jsx(UM,{...r,...o,ref:t})});eI.displayName=ZM;var tI="DropdownMenuLabel",N0=m.forwardRef((e,t)=>{const{__scopeDropdownMenu:n,...o}=e,r=We(n);return d.jsx(BM,{...r,...o,ref:t})});N0.displayName=tI;var nI="DropdownMenuItem",O0=m.forwardRef((e,t)=>{const{__scopeDropdownMenu:n,...o}=e,r=We(n);return d.jsx(VM,{...r,...o,ref:t})});O0.displayName=nI;var oI="DropdownMenuCheckboxItem",M0=m.forwardRef((e,t)=>{const{__scopeDropdownMenu:n,...o}=e,r=We(n);return d.jsx(HM,{...r,...o,ref:t})});M0.displayName=oI;var rI="DropdownMenuRadioGroup",sI=m.forwardRef((e,t)=>{const{__scopeDropdownMenu:n,...o}=e,r=We(n);return d.jsx(WM,{...r,...o,ref:t})});sI.displayName=rI;var iI="DropdownMenuRadioItem",I0=m.forwardRef((e,t)=>{const{__scopeDropdownMenu:n,...o}=e,r=We(n);return d.jsx($M,{...r,...o,ref:t})});I0.displayName=iI;var aI="DropdownMenuItemIndicator",L0=m.forwardRef((e,t)=>{const{__scopeDropdownMenu:n,...o}=e,r=We(n);return d.jsx(zM,{...r,...o,ref:t})});L0.displayName=aI;var lI="DropdownMenuSeparator",D0=m.forwardRef((e,t)=>{const{__scopeDropdownMenu:n,...o}=e,r=We(n);return d.jsx(JM,{...r,...o,ref:t})});D0.displayName=lI;var cI="DropdownMenuArrow",uI=m.forwardRef((e,t)=>{const{__scopeDropdownMenu:n,...o}=e,r=We(n);return d.jsx(GM,{...r,...o,ref:t})});uI.displayName=cI;var dI="DropdownMenuSubTrigger",F0=m.forwardRef((e,t)=>{const{__scopeDropdownMenu:n,...o}=e,r=We(n);return d.jsx(KM,{...r,...o,ref:t})});F0.displayName=dI;var fI="DropdownMenuSubContent",_0=m.forwardRef((e,t)=>{const{__scopeDropdownMenu:n,...o}=e,r=We(n);return d.jsx(YM,{...r,...o,ref:t,style:{...e.style,"--radix-dropdown-menu-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-dropdown-menu-content-available-width":"var(--radix-popper-available-width)","--radix-dropdown-menu-content-available-height":"var(--radix-popper-available-height)","--radix-dropdown-menu-trigger-width":"var(--radix-popper-anchor-width)","--radix-dropdown-menu-trigger-height":"var(--radix-popper-anchor-height)"}})});_0.displayName=fI;var pI=k0,mI=P0,hI=T0,U0=R0,B0=N0,V0=O0,H0=M0,W0=I0,$0=L0,z0=D0,J0=F0,G0=_0;const K0=pI,Y0=mI,gI=m.forwardRef(({className:e,inset:t,children:n,...o},r)=>d.jsxs(J0,{ref:r,className:q("flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",t&&"pl-8",e),...o,children:[n,d.jsx(Ra,{className:"ml-auto h-4 w-4"})]}));gI.displayName=J0.displayName;const yI=m.forwardRef(({className:e,...t},n)=>d.jsx(G0,{ref:n,className:q("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",e),...t}));yI.displayName=G0.displayName;const op=m.forwardRef(({className:e,sideOffset:t=4,...n},o)=>d.jsx(hI,{children:d.jsx(U0,{ref:o,sideOffset:t,className:q("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",e),...n})}));op.displayName=U0.displayName;const rs=m.forwardRef(({className:e,inset:t,...n},o)=>d.jsx(V0,{ref:o,className:q("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",t&&"pl-8",e),...n}));rs.displayName=V0.displayName;const vI=m.forwardRef(({className:e,children:t,checked:n,...o},r)=>d.jsxs(H0,{ref:r,className:q("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",e),checked:n,...o,children:[d.jsx("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:d.jsx($0,{children:d.jsx(Ff,{className:"h-4 w-4"})})}),t]}));vI.displayName=H0.displayName;const bI=m.forwardRef(({className:e,children:t,...n},o)=>d.jsxs(W0,{ref:o,className:q("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",e),...n,children:[d.jsx("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:d.jsx($0,{children:d.jsx(Y2,{className:"h-2 w-2 fill-current"})})}),t]}));bI.displayName=W0.displayName;const wI=m.forwardRef(({className:e,inset:t,...n},o)=>d.jsx(B0,{ref:o,className:q("px-2 py-1.5 text-sm font-semibold",t&&"pl-8",e),...n}));wI.displayName=B0.displayName;const xI=m.forwardRef(({className:e,...t},n)=>d.jsx(z0,{ref:n,className:q("-mx-1 my-1 h-px bg-muted",e),...t}));xI.displayName=z0.displayName;const SI={theme:"system",setTheme:()=>null},q0=m.createContext(SI);function CI({children:e,defaultTheme:t="system",storageKey:n="vite-ui-theme",...o}){const[r,s]=m.useState(()=>localStorage.getItem(n)||t);m.useEffect(()=>{const a=window.document.documentElement;if(a.classList.remove("light","dark"),r==="system"){const l=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";a.classList.add(l);return}a.classList.add(r)},[r]);const i={theme:r,setTheme:a=>{localStorage.setItem(n,a),s(a)}};return d.jsx(q0.Provider,{...o,value:i,children:e})}const Q0=()=>{const e=m.useContext(q0);if(e===void 0)throw new Error("useTheme must be used within a ThemeProvider");return e},EI={"":"Home",playground:"Playground",javascript:"JavaScript","html-css":"HTML & CSS",react:"React",interview:"Interview Prep",basics:"Basics",advanced:"Advanced",async:"Async Programming",dom:"DOM Manipulation"};function kI(){const t=Hn().pathname.split("/").filter(n=>n);return t.length===0?null:d.jsxs("nav",{className:"flex items-center text-sm text-muted-foreground",children:[d.jsx(Zr,{to:"/",className:"flex items-center hover:text-foreground transition-colors",children:d.jsx(ax,{className:"h-4 w-4"})}),t.map((n,o)=>{const r=`/${t.slice(0,o+1).join("/")}`,s=o===t.length-1,i=EI[n]||n.charAt(0).toUpperCase()+n.slice(1);return d.jsxs("div",{className:"flex items-center",children:[d.jsx(Ra,{className:"h-4 w-4 mx-2"}),s?d.jsx("span",{className:"font-medium text-foreground",children:i}):d.jsx(Zr,{to:r,className:q("hover:text-foreground transition-colors",s&&"text-foreground font-medium"),children:i})]},n)})]})}function jI({onMenuClick:e}){const{setTheme:t}=Q0();return d.jsxs("header",{className:"sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-4 md:px-6",children:[d.jsxs(J,{variant:"ghost",size:"icon",onClick:e,className:"shrink-0",children:[d.jsx(eR,{className:"h-5 w-5"}),d.jsx("span",{className:"sr-only",children:"Toggle menu"})]}),d.jsx(kI,{}),d.jsx("div",{className:"flex-1"}),d.jsxs("div",{className:"flex items-center gap-2",children:[d.jsxs(J,{variant:"outline",size:"sm",className:"hidden md:flex gap-2",children:[d.jsx(oR,{className:"h-4 w-4"}),d.jsx("span",{className:"text-muted-foreground",children:"Search..."}),d.jsxs("kbd",{className:"pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground",children:[d.jsx("span",{className:"text-xs",children:"⌘"}),"K"]})]}),d.jsx(J,{variant:"ghost",size:"icon",asChild:!0,children:d.jsxs("a",{href:"https://github.com",target:"_blank",rel:"noopener noreferrer",children:[d.jsx(X2,{className:"h-5 w-5"}),d.jsx("span",{className:"sr-only",children:"GitHub"})]})}),d.jsxs(K0,{children:[d.jsx(Y0,{asChild:!0,children:d.jsxs(J,{variant:"ghost",size:"icon",children:[d.jsx(qh,{className:"h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"}),d.jsx(Yh,{className:"absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"}),d.jsx("span",{className:"sr-only",children:"Toggle theme"})]})}),d.jsxs(op,{align:"end",children:[d.jsxs(rs,{onClick:()=>t("light"),children:[d.jsx(qh,{className:"mr-2 h-4 w-4"}),"Light"]}),d.jsxs(rs,{onClick:()=>t("dark"),children:[d.jsx(Yh,{className:"mr-2 h-4 w-4"}),"Dark"]}),d.jsxs(rs,{onClick:()=>t("system"),children:[d.jsx(tR,{className:"mr-2 h-4 w-4"}),"System"]})]})]})]})]})}function Co({children:e}){return d.jsx(yt.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},transition:{duration:.2,ease:"easeInOut"},children:e})}function PI(e=768){const[t,n]=m.useState(typeof window<"u"?window.innerWidth<e:!1);return m.useEffect(()=>{const o=()=>{n(window.innerWidth<e)};return window.addEventListener("resize",o),()=>window.removeEventListener("resize",o)},[e]),t}const Bt=m.forwardRef(({className:e,...t},n)=>d.jsx("div",{ref:n,className:q("rounded-lg border bg-card text-card-foreground shadow-sm",e),...t}));Bt.displayName="Card";const vr=m.forwardRef(({className:e,...t},n)=>d.jsx("div",{ref:n,className:q("flex flex-col space-y-1.5 p-6",e),...t}));vr.displayName="CardHeader";const br=m.forwardRef(({className:e,...t},n)=>d.jsx("h3",{ref:n,className:q("text-2xl font-semibold leading-none tracking-tight",e),...t}));br.displayName="CardTitle";const wr=m.forwardRef(({className:e,...t},n)=>d.jsx("p",{ref:n,className:q("text-sm text-muted-foreground",e),...t}));wr.displayName="CardDescription";const an=m.forwardRef(({className:e,...t},n)=>d.jsx("div",{ref:n,className:q("p-6 pt-0",e),...t}));an.displayName="CardContent";const TI=m.forwardRef(({className:e,...t},n)=>d.jsx("div",{ref:n,className:q("flex items-center p-6 pt-0",e),...t}));TI.displayName="CardFooter";const AI=tx("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground hover:bg-primary/80",secondary:"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",destructive:"border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",outline:"text-foreground",success:"border-transparent bg-green-500 text-white hover:bg-green-600",warning:"border-transparent bg-yellow-500 text-white hover:bg-yellow-600"}},defaultVariants:{variant:"default"}});function Be({className:e,variant:t,...n}){return d.jsx("div",{className:q(AI({variant:t}),e),...n})}const RI=[{icon:Bf,title:"Interactive Playground",description:"Write and run JavaScript, TypeScript, HTML & CSS directly in your browser.",href:"/playground",color:"bg-green-500/10 text-green-500"},{icon:ix,title:"JavaScript Mastery",description:"From basics to advanced concepts, master JavaScript step by step.",href:"/javascript",color:"bg-yellow-500/10 text-yellow-500"},{icon:Uf,title:"HTML & CSS",description:"Build beautiful, responsive layouts with modern CSS techniques.",href:"/html-css",color:"bg-orange-500/10 text-orange-500"},{icon:Df,title:"React Development",description:"Learn React from fundamentals to advanced patterns and hooks.",href:"/react",color:"bg-cyan-500/10 text-cyan-500"},{icon:_f,title:"Interview Prep",description:"Prepare for frontend interviews with curated questions and challenges.",href:"/interview",color:"bg-purple-500/10 text-purple-500"}];function NI(){const e=Ie(),t=n=>{e(n)};return d.jsxs("div",{className:"min-h-screen",children:[d.jsx("section",{className:"relative overflow-hidden border-b bg-gradient-to-b from-primary/5 via-background to-background",children:d.jsx("div",{className:"container mx-auto px-4 py-16 md:py-24",children:d.jsxs(yt.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5},className:"text-center max-w-3xl mx-auto",children:[d.jsxs(Be,{variant:"secondary",className:"mb-4",children:[d.jsx(cx,{className:"h-3 w-3 mr-1"}),"Learn Frontend Development"]}),d.jsxs("h1",{className:"text-4xl md:text-6xl font-bold tracking-tight mb-6",children:["Master"," ",d.jsx("span",{className:"text-primary",children:"Frontend Development"})," ","the Right Way"]}),d.jsx("p",{className:"text-xl text-muted-foreground mb-8 max-w-2xl mx-auto",children:"Interactive learning platform with hands-on coding exercises, comprehensive study materials, and interview preparation resources."}),d.jsxs("div",{className:"flex flex-col sm:flex-row gap-4 justify-center",children:[d.jsxs(J,{size:"lg",onClick:()=>t("/playground"),children:[d.jsx(Bf,{className:"h-5 w-5 mr-2"}),"Try Playground"]}),d.jsxs(J,{size:"lg",variant:"outline",onClick:()=>t("/javascript"),children:[d.jsx(Rs,{className:"h-5 w-5 mr-2"}),"Start Learning"]})]})]})})}),d.jsxs("section",{className:"container mx-auto px-4 py-16",children:[d.jsxs("div",{className:"text-center mb-12",children:[d.jsx("h2",{className:"text-3xl font-bold mb-4",children:"Everything You Need to Succeed"}),d.jsx("p",{className:"text-muted-foreground max-w-2xl mx-auto",children:"Comprehensive learning resources designed to take you from beginner to job-ready developer."})]}),d.jsx("div",{className:"grid md:grid-cols-2 lg:grid-cols-3 gap-6",children:RI.map((n,o)=>d.jsx(yt.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:o*.1},children:d.jsx(Bt,{className:"h-full hover:shadow-lg transition-all hover:border-primary/50 group cursor-pointer",onClick:()=>t(n.href),children:d.jsxs(vr,{children:[d.jsx("div",{className:`w-12 h-12 rounded-lg ${n.color} flex items-center justify-center mb-4`,children:d.jsx(n.icon,{className:"h-6 w-6"})}),d.jsxs(br,{className:"flex items-center justify-between",children:[n.title,d.jsx(Ks,{className:"h-5 w-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all"})]}),d.jsx(wr,{children:n.description})]})})},n.title))})]}),d.jsx("section",{className:"border-t bg-muted/30",children:d.jsx("div",{className:"container mx-auto px-4 py-16",children:d.jsx(Bt,{className:"bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20",children:d.jsxs(an,{className:"p-8 md:p-12 text-center",children:[d.jsx(sR,{className:"h-12 w-12 text-primary mx-auto mb-4"}),d.jsx("h3",{className:"text-2xl md:text-3xl font-bold mb-4",children:"Ready to Start Coding?"}),d.jsx("p",{className:"text-muted-foreground mb-6 max-w-xl mx-auto",children:"Jump into our interactive playground and start experimenting with JavaScript right away. No setup required!"}),d.jsxs(J,{size:"lg",onClick:()=>t("/playground"),children:[d.jsx(Ns,{className:"h-5 w-5 mr-2"}),"Open Playground"]})]})})})})]})}function Sg(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,o=Array(t);n<t;n++)o[n]=e[n];return o}function OI(e){if(Array.isArray(e))return e}function MI(e,t,n){return(t=BI(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function II(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var o,r,s,i,a=[],l=!0,c=!1;try{if(s=(n=n.call(e)).next,t!==0)for(;!(l=(o=s.call(n)).done)&&(a.push(o.value),a.length!==t);l=!0);}catch(u){c=!0,r=u}finally{try{if(!l&&n.return!=null&&(i=n.return(),Object(i)!==i))return}finally{if(c)throw r}}return a}}function LI(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Cg(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,o)}return n}function Eg(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Cg(Object(n),!0).forEach(function(o){MI(e,o,n[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Cg(Object(n)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(n,o))})}return e}function DI(e,t){if(e==null)return{};var n,o,r=FI(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function FI(e,t){if(e==null)return{};var n={};for(var o in e)if({}.hasOwnProperty.call(e,o)){if(t.indexOf(o)!==-1)continue;n[o]=e[o]}return n}function _I(e,t){return OI(e)||II(e,t)||VI(e,t)||LI()}function UI(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var o=n.call(e,t);if(typeof o!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function BI(e){var t=UI(e,"string");return typeof t=="symbol"?t:t+""}function VI(e,t){if(e){if(typeof e=="string")return Sg(e,t);var n={}.toString.call(e).slice(8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?Array.from(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Sg(e,t):void 0}}function HI(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function kg(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,o)}return n}function jg(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?kg(Object(n),!0).forEach(function(o){HI(e,o,n[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):kg(Object(n)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(n,o))})}return e}function WI(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(o){return t.reduceRight(function(r,s){return s(r)},o)}}function Wr(e){return function t(){for(var n=this,o=arguments.length,r=new Array(o),s=0;s<o;s++)r[s]=arguments[s];return r.length>=e.length?e.apply(this,r):function(){for(var i=arguments.length,a=new Array(i),l=0;l<i;l++)a[l]=arguments[l];return t.apply(n,[].concat(r,a))}}}function _a(e){return{}.toString.call(e).includes("Object")}function $I(e){return!Object.keys(e).length}function Ds(e){return typeof e=="function"}function zI(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function JI(e,t){return _a(t)||Nn("changeType"),Object.keys(t).some(function(n){return!zI(e,n)})&&Nn("changeField"),t}function GI(e){Ds(e)||Nn("selectorType")}function KI(e){Ds(e)||_a(e)||Nn("handlerType"),_a(e)&&Object.values(e).some(function(t){return!Ds(t)})&&Nn("handlersType")}function YI(e){e||Nn("initialIsRequired"),_a(e)||Nn("initialType"),$I(e)&&Nn("initialContent")}function qI(e,t){throw new Error(e[t]||e.default)}var QI={initialIsRequired:"initial state is required",initialType:"initial state should be an object",initialContent:"initial state shouldn't be an empty object",handlerType:"handler should be an object or a function",handlersType:"all handlers should be a functions",selectorType:"selector should be a function",changeType:"provided value of changes should be an object",changeField:'it seams you want to change a field in the state which is not specified in the "initial" state',default:"an unknown error accured in `state-local` package"},Nn=Wr(qI)(QI),Ai={changes:JI,selector:GI,handler:KI,initial:YI};function XI(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};Ai.initial(e),Ai.handler(t);var n={current:e},o=Wr(tL)(n,t),r=Wr(eL)(n),s=Wr(Ai.changes)(e),i=Wr(ZI)(n);function a(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:function(u){return u};return Ai.selector(c),c(n.current)}function l(c){WI(o,r,s,i)(c)}return[a,l]}function ZI(e,t){return Ds(t)?t(e.current):t}function eL(e,t){return e.current=jg(jg({},e.current),t),t}function tL(e,t,n){return Ds(t)?t(e.current):Object.keys(n).forEach(function(o){var r;return(r=t[o])===null||r===void 0?void 0:r.call(t,e.current[o])}),n}var nL={create:XI},oL={paths:{vs:"https://cdn.jsdelivr.net/npm/monaco-editor@0.55.1/min/vs"}};function rL(e){return function t(){for(var n=this,o=arguments.length,r=new Array(o),s=0;s<o;s++)r[s]=arguments[s];return r.length>=e.length?e.apply(this,r):function(){for(var i=arguments.length,a=new Array(i),l=0;l<i;l++)a[l]=arguments[l];return t.apply(n,[].concat(r,a))}}}function sL(e){return{}.toString.call(e).includes("Object")}function iL(e){return e||Pg("configIsRequired"),sL(e)||Pg("configType"),e.urls?(aL(),{paths:{vs:e.urls.monacoBase}}):e}function aL(){console.warn(X0.deprecation)}function lL(e,t){throw new Error(e[t]||e.default)}var X0={configIsRequired:"the configuration object is required",configType:"the configuration object should be an object",default:"an unknown error accured in `@monaco-editor/loader` package",deprecation:`Deprecation warning!
    You are using deprecated way of configuration.

    Instead of using
      monaco.config({ urls: { monacoBase: '...' } })
    use
      monaco.config({ paths: { vs: '...' } })

    For more please check the link https://github.com/suren-atoyan/monaco-loader#config
  `},Pg=rL(lL)(X0),cL={config:iL},uL=function(){for(var t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];return function(r){return n.reduceRight(function(s,i){return i(s)},r)}};function Z0(e,t){return Object.keys(t).forEach(function(n){t[n]instanceof Object&&e[n]&&Object.assign(t[n],Z0(e[n],t[n]))}),Eg(Eg({},e),t)}var dL={type:"cancelation",msg:"operation is manually canceled"};function kc(e){var t=!1,n=new Promise(function(o,r){e.then(function(s){return t?r(dL):o(s)}),e.catch(r)});return n.cancel=function(){return t=!0},n}var fL=["monaco"],pL=nL.create({config:oL,isInitialized:!1,resolve:null,reject:null,monaco:null}),e1=_I(pL,2),ei=e1[0],Cl=e1[1];function mL(e){var t=cL.config(e),n=t.monaco,o=DI(t,fL);Cl(function(r){return{config:Z0(r.config,o),monaco:n}})}function hL(){var e=ei(function(t){var n=t.monaco,o=t.isInitialized,r=t.resolve;return{monaco:n,isInitialized:o,resolve:r}});if(!e.isInitialized){if(Cl({isInitialized:!0}),e.monaco)return e.resolve(e.monaco),kc(jc);if(window.monaco&&window.monaco.editor)return t1(window.monaco),e.resolve(window.monaco),kc(jc);uL(gL,vL)(bL)}return kc(jc)}function gL(e){return document.body.appendChild(e)}function yL(e){var t=document.createElement("script");return e&&(t.src=e),t}function vL(e){var t=ei(function(o){var r=o.config,s=o.reject;return{config:r,reject:s}}),n=yL("".concat(t.config.paths.vs,"/loader.js"));return n.onload=function(){return e()},n.onerror=t.reject,n}function bL(){var e=ei(function(n){var o=n.config,r=n.resolve,s=n.reject;return{config:o,resolve:r,reject:s}}),t=window.require;t.config(e.config),t(["vs/editor/editor.main"],function(n){var o=n.m||n;t1(o),e.resolve(o)},function(n){e.reject(n)})}function t1(e){ei().monaco||Cl({monaco:e})}function wL(){return ei(function(e){var t=e.monaco;return t})}var jc=new Promise(function(e,t){return Cl({resolve:e,reject:t})}),n1={config:mL,init:hL,__getMonacoInstance:wL},xL={wrapper:{display:"flex",position:"relative",textAlign:"initial"},fullWidth:{width:"100%"},hide:{display:"none"}},Pc=xL,SL={container:{display:"flex",height:"100%",width:"100%",justifyContent:"center",alignItems:"center"}},CL=SL;function EL({children:e}){return _e.createElement("div",{style:CL.container},e)}var kL=EL,jL=kL;function PL({width:e,height:t,isEditorReady:n,loading:o,_ref:r,className:s,wrapperProps:i}){return _e.createElement("section",{style:{...Pc.wrapper,width:e,height:t},...i},!n&&_e.createElement(jL,null,o),_e.createElement("div",{ref:r,style:{...Pc.fullWidth,...!n&&Pc.hide},className:s}))}var TL=PL,o1=m.memo(TL);function AL(e){m.useEffect(e,[])}var r1=AL;function RL(e,t,n=!0){let o=m.useRef(!0);m.useEffect(o.current||!n?()=>{o.current=!1}:e,t)}var Qe=RL;function ss(){}function Vo(e,t,n,o){return NL(e,o)||OL(e,t,n,o)}function NL(e,t){return e.editor.getModel(s1(e,t))}function OL(e,t,n,o){return e.editor.createModel(t,n,o?s1(e,o):void 0)}function s1(e,t){return e.Uri.parse(t)}function ML({original:e,modified:t,language:n,originalLanguage:o,modifiedLanguage:r,originalModelPath:s,modifiedModelPath:i,keepCurrentOriginalModel:a=!1,keepCurrentModifiedModel:l=!1,theme:c="light",loading:u="Loading...",options:f={},height:p="100%",width:y="100%",className:w,wrapperProps:v={},beforeMount:x=ss,onMount:h=ss}){let[g,b]=m.useState(!1),[S,C]=m.useState(!0),k=m.useRef(null),E=m.useRef(null),j=m.useRef(null),R=m.useRef(h),A=m.useRef(x),F=m.useRef(!1);r1(()=>{let O=n1.init();return O.then(D=>(E.current=D)&&C(!1)).catch(D=>(D==null?void 0:D.type)!=="cancelation"&&console.error("Monaco initialization: error:",D)),()=>k.current?I():O.cancel()}),Qe(()=>{if(k.current&&E.current){let O=k.current.getOriginalEditor(),D=Vo(E.current,e||"",o||n||"text",s||"");D!==O.getModel()&&O.setModel(D)}},[s],g),Qe(()=>{if(k.current&&E.current){let O=k.current.getModifiedEditor(),D=Vo(E.current,t||"",r||n||"text",i||"");D!==O.getModel()&&O.setModel(D)}},[i],g),Qe(()=>{let O=k.current.getModifiedEditor();O.getOption(E.current.editor.EditorOption.readOnly)?O.setValue(t||""):t!==O.getValue()&&(O.executeEdits("",[{range:O.getModel().getFullModelRange(),text:t||"",forceMoveMarkers:!0}]),O.pushUndoStop())},[t],g),Qe(()=>{var O,D;(D=(O=k.current)==null?void 0:O.getModel())==null||D.original.setValue(e||"")},[e],g),Qe(()=>{let{original:O,modified:D}=k.current.getModel();E.current.editor.setModelLanguage(O,o||n||"text"),E.current.editor.setModelLanguage(D,r||n||"text")},[n,o,r],g),Qe(()=>{var O;(O=E.current)==null||O.editor.setTheme(c)},[c],g),Qe(()=>{var O;(O=k.current)==null||O.updateOptions(f)},[f],g);let _=m.useCallback(()=>{var B;if(!E.current)return;A.current(E.current);let O=Vo(E.current,e||"",o||n||"text",s||""),D=Vo(E.current,t||"",r||n||"text",i||"");(B=k.current)==null||B.setModel({original:O,modified:D})},[n,t,r,e,o,s,i]),W=m.useCallback(()=>{var O;!F.current&&j.current&&(k.current=E.current.editor.createDiffEditor(j.current,{automaticLayout:!0,...f}),_(),(O=E.current)==null||O.editor.setTheme(c),b(!0),F.current=!0)},[f,c,_]);m.useEffect(()=>{g&&R.current(k.current,E.current)},[g]),m.useEffect(()=>{!S&&!g&&W()},[S,g,W]);function I(){var D,B,P,T;let O=(D=k.current)==null?void 0:D.getModel();a||((B=O==null?void 0:O.original)==null||B.dispose()),l||((P=O==null?void 0:O.modified)==null||P.dispose()),(T=k.current)==null||T.dispose()}return _e.createElement(o1,{width:y,height:p,isEditorReady:g,loading:u,_ref:j,className:w,wrapperProps:v})}var IL=ML;m.memo(IL);function LL(e){let t=m.useRef();return m.useEffect(()=>{t.current=e},[e]),t.current}var DL=LL,Ri=new Map;function FL({defaultValue:e,defaultLanguage:t,defaultPath:n,value:o,language:r,path:s,theme:i="light",line:a,loading:l="Loading...",options:c={},overrideServices:u={},saveViewState:f=!0,keepCurrentModel:p=!1,width:y="100%",height:w="100%",className:v,wrapperProps:x={},beforeMount:h=ss,onMount:g=ss,onChange:b,onValidate:S=ss}){let[C,k]=m.useState(!1),[E,j]=m.useState(!0),R=m.useRef(null),A=m.useRef(null),F=m.useRef(null),_=m.useRef(g),W=m.useRef(h),I=m.useRef(),O=m.useRef(o),D=DL(s),B=m.useRef(!1),P=m.useRef(!1);r1(()=>{let M=n1.init();return M.then(V=>(R.current=V)&&j(!1)).catch(V=>(V==null?void 0:V.type)!=="cancelation"&&console.error("Monaco initialization: error:",V)),()=>A.current?L():M.cancel()}),Qe(()=>{var V,Q,ye,Le;let M=Vo(R.current,e||o||"",t||r||"",s||n||"");M!==((V=A.current)==null?void 0:V.getModel())&&(f&&Ri.set(D,(Q=A.current)==null?void 0:Q.saveViewState()),(ye=A.current)==null||ye.setModel(M),f&&((Le=A.current)==null||Le.restoreViewState(Ri.get(s))))},[s],C),Qe(()=>{var M;(M=A.current)==null||M.updateOptions(c)},[c],C),Qe(()=>{!A.current||o===void 0||(A.current.getOption(R.current.editor.EditorOption.readOnly)?A.current.setValue(o):o!==A.current.getValue()&&(P.current=!0,A.current.executeEdits("",[{range:A.current.getModel().getFullModelRange(),text:o,forceMoveMarkers:!0}]),A.current.pushUndoStop(),P.current=!1))},[o],C),Qe(()=>{var V,Q;let M=(V=A.current)==null?void 0:V.getModel();M&&r&&((Q=R.current)==null||Q.editor.setModelLanguage(M,r))},[r],C),Qe(()=>{var M;a!==void 0&&((M=A.current)==null||M.revealLine(a))},[a],C),Qe(()=>{var M;(M=R.current)==null||M.editor.setTheme(i)},[i],C);let T=m.useCallback(()=>{var M;if(!(!F.current||!R.current)&&!B.current){W.current(R.current);let V=s||n,Q=Vo(R.current,o||e||"",t||r||"",V||"");A.current=(M=R.current)==null?void 0:M.editor.create(F.current,{model:Q,automaticLayout:!0,...c},u),f&&A.current.restoreViewState(Ri.get(V)),R.current.editor.setTheme(i),a!==void 0&&A.current.revealLine(a),k(!0),B.current=!0}},[e,t,n,o,r,s,c,u,f,i,a]);m.useEffect(()=>{C&&_.current(A.current,R.current)},[C]),m.useEffect(()=>{!E&&!C&&T()},[E,C,T]),O.current=o,m.useEffect(()=>{var M,V;C&&b&&((M=I.current)==null||M.dispose(),I.current=(V=A.current)==null?void 0:V.onDidChangeModelContent(Q=>{P.current||b(A.current.getValue(),Q)}))},[C,b]),m.useEffect(()=>{if(C){let M=R.current.editor.onDidChangeMarkers(V=>{var ye;let Q=(ye=A.current.getModel())==null?void 0:ye.uri;if(Q&&V.find(Le=>Le.path===Q.path)){let Le=R.current.editor.getModelMarkers({resource:Q});S==null||S(Le)}});return()=>{M==null||M.dispose()}}return()=>{}},[C,S]);function L(){var M,V;(M=I.current)==null||M.dispose(),p?f&&Ri.set(s,A.current.saveViewState()):(V=A.current.getModel())==null||V.dispose(),A.current.dispose()}return _e.createElement(o1,{width:y,height:w,isEditorReady:C,loading:l,_ref:F,className:v,wrapperProps:x})}var _L=FL,UL=m.memo(_L),BL=UL;function Tg({value:e,onChange:t,language:n="javascript",readOnly:o=!1,height:r="100%"}){const{theme:s}=Q0(),i=m.useRef(null),[a,l]=m.useState("vs-dark");m.useEffect(()=>{l(s==="system"?window.matchMedia("(prefers-color-scheme: dark)").matches?"vs-dark":"light":s==="dark"?"vs-dark":"light")},[s]);const c=f=>{i.current=f,o||f.focus()},u=f=>({javascript:"javascript",typescript:"typescript",html:"html",css:"css",python:"python",cpp:"cpp"})[f]||"javascript";return d.jsx("div",{className:"h-full w-full overflow-hidden rounded-lg border bg-card",children:d.jsx(BL,{height:r,language:u(n),value:e,theme:a,onChange:f=>t(f||""),onMount:c,options:{minimap:{enabled:!1},fontSize:14,lineNumbers:"on",roundedSelection:!0,scrollBeyondLastLine:!1,automaticLayout:!0,tabSize:2,wordWrap:"on",padding:{top:16,bottom:16},fontFamily:"JetBrains Mono, Menlo, Monaco, Consolas, monospace",fontLigatures:!0,readOnly:o,domReadOnly:o}})})}const VL={log:null,error:z2,warn:J2,info:lx},HL={log:"text-foreground",error:"text-red-500 bg-red-500/10",warn:"text-yellow-500 bg-yellow-500/10",info:"text-blue-500 bg-blue-500/10"};function Ag({logs:e}){return d.jsxs("div",{className:"h-full flex flex-col rounded-lg border bg-card",children:[d.jsxs("div",{className:"flex items-center justify-between px-4 py-2 border-b bg-muted/50",children:[d.jsx("span",{className:"text-sm font-medium",children:"Console"}),d.jsxs("span",{className:"text-xs text-muted-foreground",children:[e.length," ",e.length===1?"message":"messages"]})]}),d.jsx(pl,{className:"flex-1",children:d.jsx("div",{className:"p-2 space-y-1 font-mono text-sm",children:e.length===0?d.jsxs("div",{className:"flex items-center gap-2 text-muted-foreground p-2",children:[d.jsx(lx,{className:"h-4 w-4"}),d.jsx("span",{children:"Console output will appear here..."})]}):e.map(t=>{const n=VL[t.type];return d.jsxs("div",{className:q("flex items-start gap-2 px-2 py-1.5 rounded",HL[t.type]),children:[n&&d.jsx(n,{className:"h-4 w-4 shrink-0 mt-0.5"}),d.jsx("pre",{className:"whitespace-pre-wrap break-all flex-1",children:t.content}),d.jsx("span",{className:"text-xs text-muted-foreground shrink-0",children:t.timestamp.toLocaleTimeString()})]},t.id)})})})]})}var El="Tabs",[WL]=go(El,[vl]),i1=vl(),[$L,rp]=WL(El),a1=m.forwardRef((e,t)=>{const{__scopeTabs:n,value:o,onValueChange:r,defaultValue:s,orientation:i="horizontal",dir:a,activationMode:l="automatic",...c}=e,u=ul(a),[f,p]=Vf({prop:o,onChange:r,defaultProp:s??"",caller:El});return d.jsx($L,{scope:n,baseId:Na(),value:f,onValueChange:p,orientation:i,dir:u,activationMode:l,children:d.jsx(se.div,{dir:u,"data-orientation":i,...c,ref:t})})});a1.displayName=El;var l1="TabsList",c1=m.forwardRef((e,t)=>{const{__scopeTabs:n,loop:o=!0,...r}=e,s=rp(l1,n),i=i1(n);return d.jsx($x,{asChild:!0,...i,orientation:s.orientation,dir:s.dir,loop:o,children:d.jsx(se.div,{role:"tablist","aria-orientation":s.orientation,...r,ref:t})})});c1.displayName=l1;var u1="TabsTrigger",d1=m.forwardRef((e,t)=>{const{__scopeTabs:n,value:o,disabled:r=!1,...s}=e,i=rp(u1,n),a=i1(n),l=m1(i.baseId,o),c=h1(i.baseId,o),u=o===i.value;return d.jsx(zx,{asChild:!0,...a,focusable:!r,active:u,children:d.jsx(se.button,{type:"button",role:"tab","aria-selected":u,"aria-controls":c,"data-state":u?"active":"inactive","data-disabled":r?"":void 0,disabled:r,id:l,...s,ref:t,onMouseDown:$(e.onMouseDown,f=>{!r&&f.button===0&&f.ctrlKey===!1?i.onValueChange(o):f.preventDefault()}),onKeyDown:$(e.onKeyDown,f=>{[" ","Enter"].includes(f.key)&&i.onValueChange(o)}),onFocus:$(e.onFocus,()=>{const f=i.activationMode!=="manual";!u&&!r&&f&&i.onValueChange(o)})})})});d1.displayName=u1;var f1="TabsContent",p1=m.forwardRef((e,t)=>{const{__scopeTabs:n,value:o,forceMount:r,children:s,...i}=e,a=rp(f1,n),l=m1(a.baseId,o),c=h1(a.baseId,o),u=o===a.value,f=m.useRef(u);return m.useEffect(()=>{const p=requestAnimationFrame(()=>f.current=!1);return()=>cancelAnimationFrame(p)},[]),d.jsx(Vt,{present:r||u,children:({present:p})=>d.jsx(se.div,{"data-state":u?"active":"inactive","data-orientation":a.orientation,role:"tabpanel","aria-labelledby":l,hidden:!p,id:c,tabIndex:0,...i,ref:t,style:{...e.style,animationDuration:f.current?"0s":void 0},children:p&&s})})});p1.displayName=f1;function m1(e,t){return`${e}-trigger-${t}`}function h1(e,t){return`${e}-content-${t}`}var zL=a1,g1=c1,y1=d1,v1=p1;const JL=zL,b1=m.forwardRef(({className:e,...t},n)=>d.jsx(g1,{ref:n,className:q("inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",e),...t}));b1.displayName=g1.displayName;const Qu=m.forwardRef(({className:e,...t},n)=>d.jsx(y1,{ref:n,className:q("inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",e),...t}));Qu.displayName=y1.displayName;const Xu=m.forwardRef(({className:e,...t},n)=>d.jsx(v1,{ref:n,className:q("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",e),...t}));Xu.displayName=v1.displayName;function GL(){const[e,t]=m.useState(!1),[n,o]=m.useState(!1),[r,s]=m.useState(null),[i,a]=m.useState(null);m.useEffect(()=>{const u=window;u.pyodideInstance&&(a(u.pyodideInstance),o(!0))},[]);const l=m.useCallback(async()=>{const u=window;if(i||u.pyodideInstance)return u.pyodideInstance||i;if(!u.loadPyodide)throw new Error("Pyodide script not loaded. Please wait and try again.");t(!0),s(null);try{const f=await u.loadPyodide({indexURL:"https://cdn.jsdelivr.net/pyodide/v0.24.1/full/"});return u.pyodideInstance=f,a(f),o(!0),f}catch(f){const p=f instanceof Error?f:new Error("Failed to load Pyodide");throw s(p),p}finally{t(!1)}},[i]);return{runPython:m.useCallback(async u=>{try{const f=await l();if(!f)return{output:"",error:"Pyodide not loaded"};f.runPython(`
import sys
from io import StringIO
sys.stdout = StringIO()
sys.stderr = StringIO()
      `);try{await f.runPythonAsync(u);const p=f.runPython("sys.stdout.getvalue()"),y=f.runPython("sys.stderr.getvalue()");return f.runPython(`
sys.stdout = sys.__stdout__
sys.stderr = sys.__stderr__
        `),{output:p||"",error:y||null}}catch(p){return f.runPython(`
sys.stdout = sys.__stdout__
sys.stderr = sys.__stderr__
        `),{output:"",error:p instanceof Error?p.message:"Python execution error"}}}catch(f){return{output:"",error:f instanceof Error?f.message:"Failed to run Python"}}},[l]),isLoading:e,isReady:n,error:r,pyodide:i}}const Tc={javascript:`// Welcome to StudyWeb Playground! 🚀
// Write JavaScript code here and click Run

const fruits = ['apple', 'banana', 'orange'];
console.log('Fruits:', fruits);

const upperFruits = fruits.map(fruit => fruit.toUpperCase());
console.log('Uppercase:', upperFruits);

// Math operations work!
console.log('Max of 4, 5:', Math.max(4, 5));
console.log('Random:', Math.random());

// Try your own code below!
`,typescript:`// TypeScript Playground
// Note: This runs as JavaScript (types are stripped)

interface User {
  name: string;
  age: number;
}

const user: User = {
  name: "John Doe",
  age: 30
};

console.log("User:", user);
console.log("Name:", user.name);
console.log("Max:", Math.max(10, 20, 5));
`,html:`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>My Page</title>
  <style>
    body { font-family: sans-serif; padding: 20px; }
    .card { padding: 20px; border: 1px solid #ddd; border-radius: 8px; }
  </style>
</head>
<body>
  <div class="card">
    <h1>Hello, World!</h1>
    <p>This is a sample HTML page.</p>
  </div>
</body>
</html>`,css:`/* CSS Playground */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.button {
  background-color: #3b82f6;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s;
}

.button:hover {
  background-color: #2563eb;
}`,python:`# Python Playground 🐍
# Powered by Pyodide - Real Python in the browser!

from datetime import datetime
import math
import random

# Current date and time
print("Current time:", datetime.now())
print("Date:", datetime.now().strftime("%Y-%m-%d"))

# Math operations
print("\\nMath operations:")
print("Pi:", math.pi)
print("Square root of 16:", math.sqrt(16))
print("2^10:", math.pow(2, 10))

# Random numbers
print("\\nRandom:")
print("Random float:", random.random())
print("Random int 1-100:", random.randint(1, 100))

# Lists and comprehensions
numbers = [1, 2, 3, 4, 5]
squared = [x**2 for x in numbers]
print("\\nSquared:", squared)

# Try your own Python code!
`,cpp:`// C++ Playground
// Note: This is a simulated environment
// For full C++ support, use a local compiler

#include <iostream>
#include <vector>
#include <string>

using namespace std;

int main() {
    // Variables
    string name = "World";
    cout << "Hello, " << name << "!" << endl;
    
    // Vector
    vector<int> numbers = {1, 2, 3, 4, 5};
    
    cout << "Numbers: ";
    for (int num : numbers) {
        cout << num << " ";
    }
    cout << endl;
    
    // Sum
    int sum = 0;
    for (int num : numbers) {
        sum += num;
    }
    cout << "Sum: " << sum << endl;
    
    return 0;
}
`},Ac={javascript:"JavaScript",typescript:"TypeScript",html:"HTML",css:"CSS",python:"Python",cpp:"C++"};function KL({initialCode:e,initialLanguage:t="javascript",className:n}){const[o,r]=m.useState(t),[s,i]=m.useState(e||Tc[t]),[a,l]=m.useState([]),[c,u]=m.useState(!1),[f,p]=m.useState(!1),[y,w]=m.useState(""),[v,x]=m.useState(65),[h,g]=m.useState(!1),{isReady:b}=GL(),S=m.useRef(null),C=m.useRef(!1);m.useEffect(()=>{if(typeof window<"u"&&!window.loadPyodide){const O=document.createElement("script");O.src="https://cdn.jsdelivr.net/pyodide/v0.24.1/full/pyodide.js",O.async=!0,document.head.appendChild(O)}},[]);const k=async()=>{const I=window;if(!I.loadPyodide)throw new Error("Pyodide is still loading. Please wait a moment and try again.");g(!0);try{return await I.loadPyodide({indexURL:"https://cdn.jsdelivr.net/pyodide/v0.24.1/full/"})}catch(O){throw O}finally{g(!1)}},E=m.useCallback(I=>{I.preventDefault(),C.current=!0,document.body.style.cursor="col-resize",document.body.style.userSelect="none"},[]);m.useEffect(()=>{const I=D=>{if(!C.current||!S.current)return;const P=S.current.getBoundingClientRect(),T=(D.clientX-P.left)/P.width*100;x(Math.min(80,Math.max(30,T)))},O=()=>{C.current=!1,document.body.style.cursor="",document.body.style.userSelect=""};return document.addEventListener("mousemove",I),document.addEventListener("mouseup",O),()=>{document.removeEventListener("mousemove",I),document.removeEventListener("mouseup",O)}},[]);const j=I=>{r(I),e||i(Tc[I]),l([]),w("")},R=m.useCallback(async()=>{u(!0),l([]),w("");const I=[],O=(D,B)=>{I.push({id:crypto.randomUUID(),type:D,content:B,timestamp:new Date})};try{if(o==="html"){w(s),O("info","HTML preview rendered below"),l(I),u(!1);return}if(o==="css"){O("info","CSS code validated. Use with HTML to see styles in action."),l(I),u(!1);return}if(o==="python"){try{O("info",b?"Running Python...":"Loading Python runtime (first run may take a few seconds)..."),l([...I]);const P=await k();P.runPython(`
import sys
from io import StringIO
sys.stdout = StringIO()
sys.stderr = StringIO()
          `);try{await P.runPythonAsync(s);const T=P.runPython("sys.stdout.getvalue()"),L=P.runPython("sys.stderr.getvalue()");I.length=0,T&&T.split(`
`).filter(M=>M).forEach(M=>{O("log",M)}),L&&L.split(`
`).filter(M=>M).forEach(M=>{O("error",M)}),!T&&!L&&O("info","Code executed successfully (no output)")}catch(T){I.length=0,O("error",T.message)}P.runPython(`
sys.stdout = sys.__stdout__
sys.stderr = sys.__stderr__
          `)}catch(P){I.length=0,O("error",`Python Error: ${P.message}`)}l(I),u(!1);return}if(o==="cpp"){O("info","C++ Simulation (for full support, use a local compiler)");const P=/cout\s*<<\s*(.*?)\s*<<\s*endl/g;let T;for(;(T=P.exec(s))!==null;){const M=T[1].split("<<").map(V=>{const Q=V.trim();return Q.startsWith('"')&&Q.endsWith('"')?Q.slice(1,-1):`[${Q}]`});O("log",M.join(""))}I.length===1&&O("info","Tip: For real C++ execution, use an online compiler like godbolt.org or a local IDE."),l(I),u(!1);return}const D={log:(...P)=>{O("log",P.map(T=>typeof T=="object"?JSON.stringify(T,null,2):String(T)).join(" "))},error:(...P)=>{O("error",P.map(T=>typeof T=="object"?JSON.stringify(T,null,2):String(T)).join(" "))},warn:(...P)=>{O("warn",P.map(T=>typeof T=="object"?JSON.stringify(T,null,2):String(T)).join(" "))},info:(...P)=>{O("info",P.map(T=>typeof T=="object"?JSON.stringify(T,null,2):String(T)).join(" "))}};new Function("console","Math","Date","JSON","Array","Object","String","Number","Boolean","RegExp","Error","Map","Set","Promise","setTimeout","setInterval","clearTimeout","clearInterval",s)(D,Math,Date,JSON,Array,Object,String,Number,Boolean,RegExp,Error,Map,Set,Promise,(P,T)=>setTimeout(()=>{P(),l([...I])},T),(P,T)=>setInterval(()=>{P(),l([...I])},T),clearTimeout,clearInterval)}catch(D){I.push({id:crypto.randomUUID(),type:"error",content:D.message||"An error occurred",timestamp:new Date})}l(I),u(!1)},[s,o,b]),A=()=>{l([]),w("")},F=()=>{i(e||Tc[o]),l([]),w("")},_=async()=>{await navigator.clipboard.writeText(s),p(!0),setTimeout(()=>p(!1),2e3)},W=()=>{const I={javascript:"js",typescript:"ts",html:"html",css:"css",python:"py",cpp:"cpp"},O=new Blob([s],{type:"text/plain"}),D=URL.createObjectURL(O),B=document.createElement("a");B.href=D,B.download=`code.${I[o]}`,B.click(),URL.revokeObjectURL(D)};return d.jsxs("div",{className:q("flex flex-col h-full",n),children:[d.jsxs("div",{className:"flex items-center justify-between gap-2 p-2 border-b bg-muted/30 shrink-0",children:[d.jsxs("div",{className:"flex items-center gap-2",children:[d.jsxs(K0,{children:[d.jsx(Y0,{asChild:!0,children:d.jsxs(J,{variant:"outline",size:"sm",className:"gap-2",children:[Ac[o],d.jsx(K2,{className:"h-4 w-4"})]})}),d.jsx(op,{children:Object.keys(Ac).map(I=>d.jsxs(rs,{onClick:()=>j(I),className:q(I===o&&"bg-accent"),children:[Ac[I],I==="python"&&!b&&d.jsx("span",{className:"ml-2 text-xs text-muted-foreground",children:"(loads on first run)"})]},I))})]}),d.jsxs(J,{onClick:R,disabled:c||h,size:"sm",className:"gap-2",children:[c||h?d.jsx(Kh,{className:"h-4 w-4 animate-spin"}):d.jsx(lo,{className:"h-4 w-4"}),h?"Loading...":o==="html"?"Preview":"Run"]}),d.jsx(J,{onClick:A,variant:"outline",size:"sm",children:"Clear"})]}),d.jsxs("div",{className:"flex items-center gap-1",children:[d.jsx(J,{onClick:_,variant:"ghost",size:"icon",className:"h-8 w-8",children:f?d.jsx(Ff,{className:"h-4 w-4"}):d.jsx(Wu,{className:"h-4 w-4"})}),d.jsx(J,{onClick:W,variant:"ghost",size:"icon",className:"h-8 w-8",children:d.jsx(q2,{className:"h-4 w-4"})}),d.jsx(J,{onClick:F,variant:"ghost",size:"icon",className:"h-8 w-8",children:d.jsx(nR,{className:"h-4 w-4"})})]})]}),o==="python"&&h&&d.jsxs("div",{className:"px-4 py-2 bg-blue-500/10 border-b text-sm text-blue-600 dark:text-blue-400 flex items-center gap-2",children:[d.jsx(Kh,{className:"h-4 w-4 animate-spin"}),"Loading Python runtime (Pyodide)... This may take a few seconds on first run."]}),d.jsxs("div",{className:"flex-1 flex flex-col lg:flex-row min-h-0",children:[d.jsx("div",{className:"lg:hidden flex-1 min-h-0",children:d.jsxs(JL,{defaultValue:"editor",className:"h-full flex flex-col",children:[d.jsxs(b1,{className:"w-full justify-start rounded-none border-b bg-transparent px-2",children:[d.jsx(Qu,{value:"editor",children:"Editor"}),d.jsx(Qu,{value:"output",children:o==="html"?"Preview":`Console (${a.length})`})]}),d.jsx(Xu,{value:"editor",className:"flex-1 m-0 min-h-0",children:d.jsx(Tg,{value:s,onChange:i,language:o})}),d.jsx(Xu,{value:"output",className:"flex-1 m-0 min-h-0",children:o==="html"&&y?d.jsx("div",{className:"h-full border rounded-lg overflow-auto bg-white",children:d.jsx("iframe",{srcDoc:y,className:"w-full h-full border-0",title:"HTML Preview",sandbox:"allow-scripts"})}):d.jsx(Ag,{logs:a})})]})}),d.jsxs("div",{ref:S,className:"hidden lg:flex flex-1 min-h-0",children:[d.jsx("div",{className:"min-w-0 p-2 flex flex-col",style:{width:`${v}%`},children:d.jsx(Tg,{value:s,onChange:i,language:o})}),d.jsx("div",{className:"w-1 bg-border hover:bg-primary/50 cursor-col-resize flex items-center justify-center group transition-colors",onMouseDown:E,children:d.jsx("div",{className:"w-4 h-8 flex items-center justify-center rounded bg-muted border opacity-0 group-hover:opacity-100 transition-opacity",children:d.jsx(Z2,{className:"h-4 w-4 text-muted-foreground"})})}),d.jsx("div",{className:"p-2 flex flex-col min-h-0",style:{width:`${100-v}%`},children:o==="html"&&y?d.jsx("div",{className:"flex-1 border rounded-lg overflow-auto bg-white",children:d.jsx("iframe",{srcDoc:y,className:"w-full h-full border-0",title:"HTML Preview",sandbox:"allow-scripts"})}):d.jsx(Ag,{logs:a})})]})]})]})}function YL(){const t=Hn().state;return d.jsx("div",{className:"h-[calc(100vh-4rem)]",children:d.jsx(KL,{initialCode:t==null?void 0:t.code,initialLanguage:(t==null?void 0:t.language)||"javascript"})})}const w1=[{id:"interview-js",title:"JavaScript Interview",description:"Common JavaScript interview questions and answers.",difficulty:"intermediate",duration:"4 hours",topics:["Closures","this keyword","Event Loop","Hoisting"],lessons:[{id:"interview-closures",title:"Closures Interview Questions",content:`# Closures – Interview Questions

Closures are a fundamental concept in JavaScript that allow functions to remember and access variables from their outer scope even after the outer function has finished executing. They are widely used in real-world applications and are essential for understanding JavaScript deeply.

## What is a Closure?

A closure is created when a function is defined inside another function and the inner function uses variables from the outer function. The inner function "closes over" the outer variables, meaning it retains access to them even after the outer function returns.

In simple terms, a closure allows a function to remember data from where it was created.

## How Closures Work (Simple Explanation)

When a function runs, JavaScript creates a scope for it. Normally, once the function finishes execution, its variables are removed from memory. However, if an inner function references those variables, JavaScript preserves them in memory. This preserved scope is called the lexical environment, and together with the function, it forms a closure.


## Key Points
- A closure is a combination of a function and its lexical environment
- Inner functions can access variables of their outer functions
- Variables are referenced, not copied
- Each closure has its own independent scope
- Closures are created at function definition time, not execution time
- Closures remain in memory as long as they are referenced

## Simple Example

\`\`\`js
function outer() {
  let message = "Hello World";

  function inner() {
    console.log(message);
  }

  return inner;
}

const greet = outer();
greet(); // Hello World
\`\`\`

Even though the outer function has completed execution, the inner function still has access to the message variable.

---

## Why Closures Are Important

Closures help JavaScript:
- Maintain state between function calls
- Create private variables
- Share data across asynchronous operations
- Build reusable and flexible functions

---

## Common Real-World Use Cases

### Data Encapsulation (Private Variables)

\`\`\`js
function createCounter() {
  let count = 0;

  return function () {
    count++;
    return count;
  };
}

const counter = createCounter();
counter(); // 1
counter(); // 2
\`\`\`

The count variable cannot be accessed directly from outside, making it private.

---

## Closures in Loops (Very Common Interview Question)

\`\`\`js
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);
}
\`\`\`

### Output:
3  
3  
3  

### Why?
var has function scope, so all callbacks share the same variable reference.

### Correct Approach:

\`\`\`js
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);
}
\`\`\`

let creates a new block-scoped variable for each iteration.

---

## Memory Considerations

Closures keep variables in memory, which can lead to memory leaks if not managed properly. Always clean up unused timers, listeners, and references when they are no longer needed.

---

## Interview One-Liners

- A closure is a function that remembers its outer scope
- Closures allow variables to persist after function execution
- Variables in closures are referenced, not copied
- Closures are created when functions are defined

---

## Final Takeaway

Closures are a powerful JavaScript feature that enable state retention, data encapsulation, and reliable asynchronous behavior. Mastering closures is essential for writing clean code and succeeding in JavaScript interviews.
`,codeExample:`// Classic Question: What will this print?
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log("var loop:", i), 100);
}
// Answer: 3, 3, 3

// Fix with let
for (let j = 0; j < 3; j++) {
  setTimeout(() => console.log("let loop:", j), 200);
}
// Answer: 0, 1, 2

// Private Counter Question
function createCounter() {
  let count = 0;
  return {
    increment() {
      return ++count;
    },
    getCount() {
      return count;
    }
  };
}

const counter = createCounter();
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.count); // undefined - private!
`,language:"javascript"},{id:"interview-hoisting",title:"Hoisting - Complete Guide",content:`# Hoisting – Complete Guide
Hoisting is a fundamental JavaScript concept that explains how variables and functions are processed before code execution. Understanding hoisting helps avoid unexpected bugs and is essential for writing predictable and clean JavaScript code.
## What is Hoisting?
Hoisting is JavaScript’s default behavior of moving **declarations** (not initializations) to the top of their scope during the compilation phase. This means variables and functions can sometimes be used before they are written in the code.
In simple terms, JavaScript **knows about variables and functions before running the code**, but how it treats them depends on how they are declared.

## How Hoisting Works (Simple Explanation)

Before executing your code, JavaScript scans it and registers:
- Variable declarations
- Function declarations
- Class declarations

Only the declarations are hoisted. Assignments and initializations remain in place.

## Key Points
- Function declarations are fully hoisted
- var declarations are hoisted and initialized with undefined
- let and const are hoisted but stay in the Temporal Dead Zone (TDZ)
- Class declarations are hoisted but not initialized
- Function expressions and arrow functions are not hoisted

## Variable Hoisting Explained

### var Hoisting

\`\`\`js
console.log(a); // undefined
var a = 5;
console.log(a); // 5
\`\`\`
JavaScript treats this as:
\`\`\`js
var a;
console.log(a);
a = 5;
\`\`\`

### let and const Hoisting (Temporal Dead Zone)

\`\`\`js
// console.log(b); // ReferenceError
let b = 10;
\`\`\`

Although let and const are hoisted, they cannot be accessed before their declaration. This phase is called the **Temporal Dead Zone (TDZ)**.


## What is Temporal Dead Zone (TDZ)?

TDZ is the time between entering a scope and declaring a variable using let or const. Accessing the variable during this period results in a ReferenceError.


## Function Hoisting

### Function Declaration (Fully Hoisted)

\`\`\`js
console.log(greet()); // "Hello!"

function greet() {
  return "Hello!";
}
\`\`\`

### Function Expression (Not Hoisted)

\`\`\`js
// console.log(sayHi()); // TypeError
var sayHi = function () {
  return "Hi!";
};
\`\`\`

### Arrow Function (Not Hoisted)

\`\`\`js
// console.log(sayBye()); // TypeError
var sayBye = () => "Bye!";
\`\`\`


## Hoisting Priority Rule

When a variable and function share the same name, **function declarations take priority** over variable declarations during hoisting.


## Hoisting Inside Functions

\`\`\`js
var x = 1;

function foo() {
  console.log(x); // undefined
  var x = 2;
  console.log(x); // 2
}

foo();
\`\`\`

The local variable x is hoisted inside the function, shadowing the global variable.

## Hoisting in Loops (let vs var)

\`\`\`js
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);
}
// Output: 0, 1, 2
\`\`\`

let creates a new binding for each iteration, avoiding common hoisting-related bugs.


## const Hoisting

const behaves like let in terms of hoisting but must be initialized immediately.

\`\`\`js
// console.log(PI); // ReferenceError
const PI = 3.14;
\`\`\`

---

## Class Hoisting

Classes are hoisted but remain in the TDZ until declared.

\`\`\`js
// const obj = new MyClass(); // ReferenceError
class MyClass {
  constructor() {
    this.name = "MyClass";
  }
}
\`\`\`


## Common Interview Questions

- What is hoisting in JavaScript?
- What is the Temporal Dead Zone?
- Difference between var, let, and const hoisting?
- Why do function declarations work before definition?
- Are classes hoisted in JavaScript?


## Interview One-Liners

- Hoisting moves declarations, not initializations
- var is hoisted and initialized with undefined
- let and const are hoisted but inaccessible due to TDZ
- Function declarations are fully hoisted
- Function expressions and arrow functions are not hoisted


## Final Takeaway

Hoisting explains many confusing behaviors in JavaScript. Understanding how different declarations are hoisted helps write safer, cleaner, and more predictable code and is a must-know topic for JavaScript interviews.
`,codeExample:`// ===== QUESTION 1: Variable Hoisting =====
console.log(a); // undefined (hoisted, initialized to undefined)
var a = 5;
console.log(a); // 5

// ===== QUESTION 2: Temporal Dead Zone (TDZ) =====
// console.log(b); // ReferenceError
let b = 10;

// TDZ exists from start of block until declaration
function checkTDZ() {
  console.log(typeof undeclaredVar); // "undefined"
  // console.log(typeof x); // ReferenceError
  let x = 10;
  console.log(typeof x); // "number"
}

// ===== QUESTION 3: Function Hoisting =====
console.log(greet()); // "Hello!"

function greet() {
  return "Hello!";
}

// Function Expression - NOT hoisted
// console.log(sayHi()); // TypeError
var sayHi = function () {
  return "Hi!";
};

// Arrow Function - NOT hoisted
// console.log(sayBye()); // TypeError
var sayBye = () => "Bye!";

// ===== QUESTION 4: Tricky Hoisting =====
var x = 1;
function foo() {
  console.log(x); // undefined
  var x = 2;
  console.log(x); // 2
}
foo();

// ===== QUESTION 5: Function vs Variable Hoisting =====
console.log(typeof myFunc); // "function"
var myFunc = "string";
function myFunc() {
  return "function";
}
console.log(typeof myFunc); // "string"

// ===== QUESTION 6: let in loops =====
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);
}

// ===== QUESTION 7: const Hoisting =====
// console.log(PI); // ReferenceError
const PI = 3.14;

// ===== QUESTION 8: Class Hoisting =====
// const obj = new MyClass(); // ReferenceError
class MyClass {
  constructor() {
    this.name = "MyClass";
  }
}

// ===== QUESTION 9: Hoisting in Block Scope =====
{
  // console.log(blockLet); // ReferenceError
  let blockLet = "block scoped";
  console.log(blockLet);
}
// console.log(blockLet); // ReferenceError
`,language:"javascript"},{id:"interview-this-keyword",title:'The "this" Keyword - Mastery',content:`# The "this" Keyword – Mastery
The **this** keyword refers to the object that is responsible for executing the current function. Its value is determined at runtime and depends entirely on **how the function is called**, not where it is written. This is one of the most frequently tested concepts in JavaScript interviews.
## How "this" Works
In JavaScript, **this is dynamic**. Each time a function is invoked, JavaScript decides the value of this based on specific binding rules.
## Rules of "this" (Order of Precedence)
1. **new binding** – when a function is called using new, this refers to the newly created object
2. **Explicit binding** – call, apply, or bind explicitly set this
3. **Implicit binding** – when a function is called as an object method
4. **Default binding** – global object (undefined in strict mode)
5. **Arrow functions** – do not have their own this, they inherit it from parent scope
## Default Binding
When a function is called normally, this falls back to the default binding.
\`\`\`js
function showThis() {
  console.log(this);
}
showThis();
\`\`\`
In browsers this refers to window, in Node.js it refers to global, and in strict mode it is undefined.

## Implicit Binding
When a function is called as a method of an object, this refers to that object.
\`\`\`js
const person = {
  name: 'John',
  greet() {
    console.log('Hello ' + this.name);
  }
};
person.greet();
\`\`\`
Here, this refers to person because greet is called using person.greet().
## Lost Context (Very Common Interview Question)
\`\`\`js
const greetFunc = person.greet;
greetFunc();
\`\`\`
The context is lost because the function is no longer called as a method of the object. this falls back to default binding.
## Explicit Binding (call, apply, bind)
Explicit binding allows us to manually set the value of this.
\`\`\`js
greetFunc.call(person);
greetFunc.apply(person);
const boundGreet = person.greet.bind(person);
boundGreet();
\`\`\`
call and apply invoke immediately, while bind returns a new function with permanently bound this.
## new Binding
When a function is called with new, JavaScript creates a new object and binds this to it.
\`\`\`js
function User(name) {
  this.name = name;
}
const user = new User('Alice');
console.log(user.name);
\`\`\`
This pattern is commonly used in constructor functions.
## Arrow Functions (Lexical this)
Arrow functions do not create their own this. They inherit this from the surrounding scope.
\`\`\`js
const team = {
  name: 'Dev Team',
  members: ['Alice', 'Bob'],
  showMembers() {
    this.members.forEach(member => {
      console.log(member + ' is in ' + this.name);
    });
  }
};
team.showMembers();
\`\`\`
Arrow functions are useful to avoid context loss in callbacks.
## Problem with Regular Functions Inside Methods
\`\`\`js
const broken = {
  name: 'Team',
  members: ['A', 'B'],
  show() {
    this.members.forEach(function(m) {
      console.log(m + ' in ' + this.name);
    });
  }
};
broken.show();
\`\`\`
Here, this inside the callback refers to the global object, not the parent object.
## Tricky Interview Case: Arrow vs Regular Function
\`\`\`js
const obj = {
  name: 'Object',
  regular() {
    console.log(this.name);
  },
  arrow: () => {
    console.log(this.name);
  }
};
obj.regular();
obj.arrow();
\`\`\`
Regular functions use the calling object as this, arrow functions use lexical this.
## Callback Context Loss
\`\`\`js
const button = {
  text: 'Click me',
  click() {
    console.log(this.text + ' clicked');
  }
};
setTimeout(button.click, 100);
setTimeout(button.click.bind(button), 100);
\`\`\`
Passing a method as a callback loses its context unless bind or arrow functions are used.
## Custom bind Implementation (Advanced Interview Question)
\`\`\`js
Function.prototype.myBind = function(ctx, ...args) {
  const fn = this;
  return function(...newArgs) {
    return fn.apply(ctx, [...args, ...newArgs]);
  };
};
\`\`\`
This demonstrates how bind works internally using closures and apply.
## Interview One-Liners
- this depends on how a function is called
- Arrow functions inherit this from parent scope
- bind permanently sets this
- call and apply invoke immediately
- new creates a new this binding
## Final Takeaway
Understanding the this keyword is essential for avoiding context-related bugs and answering advanced JavaScript interview questions with confidence.
`,codeExample:`// Default binding
function showThis() {
  console.log(this);
}
showThis();

// Implicit binding
const person = {
  name: 'John',
  greet() {
    console.log(this.name);
  }
};
person.greet();

// Explicit binding
const greet = person.greet;
greet.call(person);

// new binding
function User(name) {
  this.name = name;
}
const u = new User('Alice');
console.log(u.name);

// Arrow function
const obj = {
  name: 'Obj',
  arrow: () => console.log(this.name)
};
obj.arrow();
`,language:"javascript"},{id:"interview-scope",title:"Scope & var/let/const",content:`# Scope & var/let/const – Complete Guide
Scope defines where variables and functions are accessible in JavaScript. It controls variable visibility, lifetime, and helps prevent naming conflicts. Understanding scope is essential for writing predictable code and answering JavaScript interview questions.
## What is Scope?
Scope determines the visibility of variables. JavaScript follows lexical scoping, meaning scope is decided by where variables are written in the code.
## Types of Scope
1. Global Scope – variables accessible everywhere
2. Function Scope – variables declared with var inside functions
3. Block Scope – variables declared with let and const inside {}
4. Module Scope – variables scoped to ES modules using import/export
## Global Scope
Variables declared outside functions belong to the global scope. In browsers, var declarations become properties of the window object, while let and const do not. Overusing global scope leads to bugs and conflicts.
## Function Scope
var is function-scoped, not block-scoped. Variables declared with var inside a function are accessible throughout the entire function, even inside blocks.
## Block Scope
let and const are block-scoped and exist only within the nearest braces. This prevents accidental overwrites and makes code safer.
## var vs let vs const
| Feature | var | let | const |
| Scope | Function | Block | Block |
| Hoisting | Yes (undefined) | Yes (TDZ) | Yes (TDZ) |
| Redeclaration | Allowed | Not allowed | Not allowed |
| Reassignment | Allowed | Allowed | Not allowed |
| Global object property | Yes | No | No |
## Hoisting and Temporal Dead Zone
var is hoisted and initialized with undefined. let and const are hoisted but remain in the Temporal Dead Zone until declared, causing ReferenceError if accessed early.
## const Does Not Mean Immutable
const prevents reassignment but allows mutation of objects and arrays. True immutability requires Object.freeze.
## Scope Chain
When accessing a variable, JavaScript first looks in the current scope, then outer scopes, until it reaches the global scope. This lookup process is called the scope chain.
## Lexical Scope
Lexical scope means a function remembers variables from where it was defined, not where it is called. This concept is fundamental to closures.
## Variable Shadowing
Shadowing happens when a variable in an inner scope has the same name as one in an outer scope. The inner variable takes precedence within its scope.
## IIFE and Scope Isolation
Before ES6 modules, IIFEs were used to create private scopes and avoid polluting the global namespace.
## Interview One-Liners
- Scope defines where variables are accessible
- JavaScript uses lexical scoping
- var is function-scoped, let and const are block-scoped
- const prevents reassignment, not mutation
- Scope chain controls variable lookup
## Final Takeaway
Mastering scope and var/let/const behavior helps prevent bugs, improves code clarity, and is critical for JavaScript interviews.`,codeExample:`// GLOBAL SCOPE
var globalVar = 'global var';
let globalLet = 'global let';
console.log(window.globalVar);
console.log(window.globalLet);
// FUNCTION SCOPE
function testVar() {
  var x = 1;
  if (true) {
    var x = 2;
    console.log(x);
  }
  console.log(x);
}
function testLet() {
  let x = 1;
  if (true) {
    let x = 2;
    console.log(x);
  }
  console.log(x);
}
// BLOCK SCOPE
{
  var blockVar = 'I escape blocks';
  let blockLet = 'I stay in blocks';
  const blockConst = 'Me too';
}
console.log(blockVar);
// CONST MUTABILITY
const obj = { name: 'John' };
obj.name = 'Jane';
console.log(obj);
const arr = [1, 2, 3];
arr.push(4);
console.log(arr);
// IMMUTABILITY
const frozen = Object.freeze({ name: 'John' });
frozen.name = 'Jane';
console.log(frozen.name);
// REDECLARATION
var a = 1;
var a = 2;
let b = 1;
// SCOPE CHAIN
const globalVal = 'global';
function outer() {
  const outerVal = 'outer';
  function inner() {
    const innerVal = 'inner';
    console.log(globalVal, outerVal, innerVal);
  }
  inner();
}
outer();
// LEXICAL SCOPE
function createFunctions() {
  const funcs = [];
  for (let i = 0; i < 3; i++) {
    funcs.push(() => i);
  }
  return funcs;
}
const functions = createFunctions();
console.log(functions[0](), functions[1](), functions[2]());
// SHADOWING
const x = 10;
function shadow() {
  const x = 20;
  console.log(x);
  if (true) {
    const x = 30;
    console.log(x);
  }
  console.log(x);
}
shadow();
console.log(x);
// IIFE
(function() {
  var privateVar = 'private';
  console.log(privateVar);
})();`,language:"javascript"},{id:"interview-event-loop",title:"Event Loop & Concurrency",content:`# Event Loop & Concurrency – Complete Guide
The Event Loop is the core mechanism that allows JavaScript to handle asynchronous operations despite being single-threaded. It decides the execution order of synchronous code, promises, timers, and async callbacks. Understanding the event loop is critical for predicting output-based interview questions.
## What is the Event Loop?
The event loop is a continuous process that monitors the call stack and task queues. When the call stack becomes empty, the event loop pushes queued tasks into the stack for execution.
## Why Event Loop Exists
JavaScript runs on a single thread, meaning it can execute only one task at a time. The event loop enables non-blocking behavior by offloading asynchronous tasks and executing them later.
## Main Components
1. Call Stack – Executes synchronous code line by line
2. Web APIs – Browser or Node APIs that handle async operations
3. Microtask Queue – Promise callbacks, queueMicrotask, MutationObserver
4. Macrotask Queue – setTimeout, setInterval, I/O, UI events
## Execution Order Rule
1. Execute all synchronous code in Call Stack
2. Execute all Microtasks until the queue is empty
3. Execute one Macrotask
4. Repeat the cycle
## Key Interview Rule
All microtasks are executed completely before moving to the next macrotask.
## Microtasks
Microtasks have higher priority than macrotasks. Promise.then, async/await continuation, and queueMicrotask are microtasks.
## Macrotasks
Macrotasks include setTimeout, setInterval, setImmediate, I/O callbacks, and UI events.
## Async/Await and Event Loop
async functions execute synchronously until the first await. After await, the remaining code is scheduled as a microtask.
## requestAnimationFrame
requestAnimationFrame runs before the browser repaint and after microtasks. Its timing can vary depending on rendering cycles.
## Common Interview Traps
- Promises always run before setTimeout
- await pauses execution but does not block the call stack
- Nested promises inside timers still execute before the next macrotask
## Interview One-Liners
- JavaScript is single-threaded but asynchronous
- Microtasks always run before macrotasks
- Promises have higher priority than timers
- async/await is syntax sugar over promises
- The event loop controls execution order
## Final Takeaway
Mastering the event loop allows you to confidently solve output-based questions, avoid race conditions, and write efficient asynchronous JavaScript code.`,codeExample:`// BASIC EVENT LOOP
console.log('1');
setTimeout(() => console.log('2'), 0);
Promise.resolve().then(() => console.log('3'));
console.log('4');
// Output: 1 4 3 2
// COMPLEX ORDER
console.log('Start');
setTimeout(() => console.log('Timeout 1'), 0);
Promise.resolve().then(() => console.log('Promise 1')).then(() => console.log('Promise 2'));
setTimeout(() => {
  console.log('Timeout 2');
  Promise.resolve().then(() => console.log('Promise inside Timeout'));
}, 0);
Promise.resolve().then(() => console.log('Promise 3'));
console.log('End');
// Output: Start End Promise1 Promise3 Promise2 Timeout1 Timeout2 Promise inside Timeout
// NESTED TASKS
setTimeout(() => {
  console.log('timeout 1');
  setTimeout(() => console.log('timeout 2'), 0);
  Promise.resolve().then(() => console.log('promise in timeout'));
}, 0);
setTimeout(() => console.log('timeout 3'), 0);
// Output: timeout1 promise in timeout timeout3 timeout2
// ASYNC AWAIT
async function async1() {
  console.log('async1 start');
  await async2();
  console.log('async1 end');
}
async function async2() {
  console.log('async2');
}
console.log('script start');
setTimeout(() => console.log('setTimeout'), 0);
async1();
new Promise(resolve => {
  console.log('promise1');
  resolve();
}).then(() => console.log('promise2'));
console.log('script end');
// queueMicrotask
console.log('1');
queueMicrotask(() => console.log('2'));
Promise.resolve().then(() => console.log('3'));
console.log('4');
// requestAnimationFrame
console.log('A');
requestAnimationFrame(() => console.log('rAF'));
setTimeout(() => console.log('timeout'), 0);
Promise.resolve().then(() => console.log('promise'));
console.log('B');`,language:"javascript"},{id:"interview-promises",title:"Promises - Complete Guide",content:`# Promises – Complete Guide
Promises are a core JavaScript feature used to handle asynchronous operations in a clean and predictable way. They help avoid callback hell and are heavily tested in JavaScript interviews, especially with output-based and event loop questions.
## What is a Promise?
A Promise is an object that represents the eventual completion or failure of an asynchronous operation. It acts as a placeholder for a value that will be available in the future.
## Why Promises Exist
Promises solve problems related to deeply nested callbacks, error handling, and async flow control. They allow chaining, centralized error handling, and better readability.
## Promise States
1. Pending – initial state, neither fulfilled nor rejected
2. Fulfilled – operation completed successfully
3. Rejected – operation failed with an error
A promise can move only once from pending to fulfilled or rejected.
## How Promises Work Internally
When a promise is resolved or rejected, its callbacks are pushed into the microtask queue. These callbacks run after the current call stack finishes but before any macrotasks.
## Core Promise Methods
then() handles successful resolution and returns a new promise
catch() handles errors and rejected promises
finally() runs regardless of success or failure
## Promise Chaining
then() always returns a new promise, allowing multiple asynchronous steps to be chained in sequence. Returning a value passes it to the next then, returning a promise waits for it to resolve.
## Error Handling in Promises
Errors thrown inside then are automatically passed to the nearest catch. A single catch can handle errors from the entire chain.
## Promise.all
Promise.all runs multiple promises in parallel and resolves only when all promises resolve. It fails fast if any promise rejects.
## Promise.allSettled
Promise.allSettled waits for all promises to finish, regardless of success or failure, and returns detailed results for each promise.
## Promise.race
Promise.race resolves or rejects as soon as the first promise settles, regardless of outcome.
## Promise.any
Promise.any resolves as soon as the first promise fulfills. If all promises reject, it throws an AggregateError.
## Promises vs Async/Await
async/await is syntax sugar over promises. await pauses execution of the async function and resumes it as a microtask.
## Common Interview Traps
- Promise callbacks run before setTimeout
- then callbacks are microtasks
- Errors inside then go to catch
- Promise.all fails fast
- Promise.any ignores rejected promises until all fail
## Interview One-Liners
- Promises represent future values
- then returns a new promise
- catch handles rejected promises
- Microtasks have higher priority than timers
- async/await is built on promises
## Final Takeaway
Understanding promises deeply allows you to reason about async execution order, avoid race conditions, and confidently solve JavaScript interview questions.`,codeExample:`// CREATING A PROMISE
const promise = new Promise((resolve, reject) => {
  const success = true;
  setTimeout(() => {
    if (success) resolve('Data loaded');
    else reject(new Error('Failed to load'));
  }, 1000);
});
promise.then(data => console.log(data)).catch(err => console.error(err)).finally(() => console.log('Cleanup'));
// PROMISE CHAINING
function fetchUser(id) {
  return new Promise(resolve => {
    setTimeout(() => resolve({ id, name: 'John' }), 100);
  });
}
function fetchPosts(userId) {
  return new Promise(resolve => {
    setTimeout(() => resolve([{ id: 1, title: 'Post 1' }]), 100);
  });
}
fetchUser(1).then(user => {
  console.log('User:', user);
  return fetchPosts(user.id);
}).then(posts => {
  console.log('Posts:', posts);
  return posts.length;
}).then(count => console.log('Post count:', count)).catch(err => console.error(err));
// PROMISE.ALL
const p1 = Promise.resolve(1);
const p2 = Promise.resolve(2);
const p3 = Promise.resolve(3);
Promise.all([p1, p2, p3]).then(values => console.log(values));
const p4 = Promise.reject('Error!');
Promise.all([p1, p4, p3]).catch(err => console.log('Caught:', err));
// PROMISE.ALLSETTLED
Promise.allSettled([p1, p4, p3]).then(results => console.log(results));
// PROMISE.RACE
const slow = new Promise(r => setTimeout(() => r('slow'), 200));
const fast = new Promise(r => setTimeout(() => r('fast'), 100));
Promise.race([slow, fast]).then(result => console.log(result));
// PROMISE.ANY
const fail1 = Promise.reject('fail1');
const fail2 = Promise.reject('fail2');
const success1 = new Promise(r => setTimeout(() => r('success'), 100));
Promise.any([fail1, fail2, success1]).then(result => console.log(result)).catch(err => console.log(err.errors));
// ERROR HANDLING
Promise.resolve().then(() => {
  throw new Error('Error in then');
}).then(() => {
  console.log('This will not run');
}).catch(err => {
  console.log('Caught:', err.message);
  return 'recovered';
}).then(val => console.log('Recovered with:', val));
// ORDER OF EXECUTION
Promise.resolve().then(() => console.log(1)).then(() => console.log(2));
Promise.resolve().then(() => console.log(3)).then(() => console.log(4));
// IMPLEMENT PROMISE.ALL
function myPromiseAll(promises) {
  return new Promise((resolve, reject) => {
    const results = [];
    let completed = 0;
    if (promises.length === 0) resolve(results);
    promises.forEach((promise, index) => {
      Promise.resolve(promise).then(value => {
        results[index] = value;
        completed++;
        if (completed === promises.length) resolve(results);
      }).catch(reject);
    });
  });
}
// IMPLEMENT PROMISE.RACE
function myPromiseRace(promises) {
  return new Promise((resolve, reject) => {
    promises.forEach(promise => {
      Promise.resolve(promise).then(resolve).catch(reject);
    });
  });
}
// PROMISIFY CALLBACK
function promisify(fn) {
  return function(...args) {
    return new Promise((resolve, reject) => {
      fn(...args, (err, result) => {
        if (err) reject(err);
        else resolve(result);
      });
    });
  };
}
function callbackFn(a, b, callback) {
  setTimeout(() => callback(null, a + b), 100);
}
const promiseFn = promisify(callbackFn);
promiseFn(1, 2).then(result => console.log(result));`,language:"javascript"},{id:"interview-async-await",title:"Async/Await - Mastery",content:`# Async/Await – Mastery
Async/await is a modern JavaScript feature built on top of Promises that allows asynchronous code to be written in a synchronous-looking manner. It improves readability, error handling, and control flow and is heavily tested in JavaScript interviews.
## What is Async/Await?
async/await is syntactic sugar over Promises. An async function always returns a Promise, and await pauses the execution of the async function until the awaited Promise settles.
## Why Async/Await Exists
Async/await solves problems related to deeply nested then chains, unclear control flow, and scattered error handling in promise-based code.
## How async Works
When a function is marked async, JavaScript automatically wraps its return value inside a Promise. Returning a value resolves the Promise, and throwing an error rejects it.
## How await Works
await pauses execution of the current async function until the Promise resolves or rejects. It does not block the call stack; instead, it schedules the remaining code as a microtask.
## Execution Order with Async/Await
Code before await runs synchronously. Code after await runs asynchronously as a microtask once the awaited Promise resolves.
## Error Handling
Errors inside async functions should be handled using try/catch. A thrown error inside async behaves like a rejected Promise.
## Sequential vs Parallel Execution
Using await sequentially inside a function runs operations one after another. To run tasks in parallel, Promise.all should be used with await.
## await Limitations
await can only be used inside async functions or at the top level of ES modules. Using await inside forEach does not work as expected.
## Async/Await and Event Loop
await resumes execution via the microtask queue, giving it higher priority than timers like setTimeout.
## Common Interview Traps
- async functions always return Promises
- await does not block the main thread
- forEach does not work with await
- try/catch is required for proper error handling
- async/await is built on Promises
## Interview One-Liners
- async returns a Promise
- await pauses async function execution
- Errors in async reject the Promise
- async/await uses microtasks
- Promise.all enables parallel execution
## Final Takeaway
Mastering async/await helps write clean asynchronous code, understand execution order, and confidently solve output-based JavaScript interview questions.`,codeExample:`// BASIC ASYNC AWAIT
async function fetchData() {
  const response = await fetch('https://api.example.com/data');
  const data = await response.json();
  return data;
}
// PROMISE EQUIVALENT
function fetchDataPromise() {
  return fetch('https://api.example.com/data').then(r => r.json());
}
// ERROR HANDLING
async function fetchWithError() {
  try {
    const response = await fetch('https://invalid-url');
    return await response.json();
  } catch (error) {
    console.error(error.message);
    throw error;
  } finally {
    console.log('Cleanup');
  }
}
// PARALLEL VS SEQUENTIAL
async function fetchParallel() {
  const user = await fetchUser(1);
  const posts = await fetchPosts(1);
  const [user2, posts2] = await Promise.all([fetchUser(1), fetchPosts(1)]);
  return { user2, posts2 };
}
// SEQUENTIAL LOOP
async function processSequentially(items) {
  const results = [];
  for (const item of items) {
    results.push(await processItem(item));
  }
  return results;
}
// forEach PITFALL
async function wrongWay(items) {
  items.forEach(async item => {
    await processItem(item);
  });
  console.log('Done');
}
// CORRECT for...of
async function correctWay(items) {
  for (const item of items) {
    await processItem(item);
  }
  console.log('Done');
}
// PROMISE.ALL WAY
async function parallelWay(items) {
  await Promise.all(items.map(item => processItem(item)));
  console.log('Done');
}
// ASYNC IIFE
(async () => {
  const data = await fetchData();
  console.log(data);
})();
// RETURN VALUE
async function getNumber() {
  return 42;
}
getNumber().then(num => console.log(num));
// THROW ERROR
async function throwError() {
  throw new Error('Oops');
}
throwError().catch(err => console.log(err.message));
// AWAIT NON PROMISE
async function awaitNonPromise() {
  const value = await 42;
  console.log(value);
}
// OUTPUT QUESTION
async function foo() {
  console.log('foo start');
  await bar();
  console.log('foo end');
}
async function bar() {
  console.log('bar');
}
console.log('script start');
foo();
console.log('script end');
// ASYNC RETRY
async function retry(fn, retries = 3, delayMs = 1000) {
  for (let i = 0; i < retries; i++) {
    try {
      return await fn();
    } catch (e) {
      if (i === retries - 1) throw e;
      await new Promise(r => setTimeout(r, delayMs));
    }
  }
}
// ASYNC DELAY
const delay = ms => new Promise(r => setTimeout(r, ms));
async function delayedLog() {
  console.log('Start');
  await delay(1000);
  console.log('After 1 second');
  await delay(1000);
  console.log('After 2 seconds');
}
// CONCURRENCY LIMIT
async function asyncPool(limit, items, fn) {
  const results = [];
  const executing = [];
  for (const item of items) {
    const p = Promise.resolve().then(() => fn(item));
    results.push(p);
    if (limit <= items.length) {
      const e = p.then(() => executing.splice(executing.indexOf(e), 1));
      executing.push(e);
      if (executing.length >= limit) await Promise.race(executing);
    }
  }
  return Promise.all(results);
}`,language:"javascript"},{id:"interview-callbacks",title:"Callbacks & Callback Hell",content:`# Callbacks - Complete Interview Guide

## What is a Callback?
A callback is a function passed as an argument to another function, to be executed later (synchronously or asynchronously). The term "callback" refers to the fact that we're "calling back" into our code from within another function.

## Why Callbacks Exist
JavaScript is single-threaded and uses an event-driven, non-blocking I/O model. Callbacks allow us to:
- Handle asynchronous operations without blocking the main thread
- Write code that responds to events (clicks, API responses, timers)
- Create reusable higher-order functions (map, filter, reduce)

## Types of Callbacks
1. Synchronous - Executed immediately within the calling function (Array methods)
2. Asynchronous - Scheduled to execute later via event loop (setTimeout, API calls, file I/O)

## Error-First Pattern (Node.js Convention)
First argument is always the error object, second is the data. If no error occurred, first arg is null. This standardization allows consistent error handling across all async operations.

## Callback Hell (Pyramid of Doom)
Deeply nested callbacks causing:
- Poor readability - code moves horizontally more than vertically
- Difficult debugging - hard to trace execution flow
- Hard to maintain - changes require modifying deeply nested code
- Error handling complexity - try/catch doesn't work with async callbacks
- Tight coupling - each level depends on the previous

## Solutions to Callback Hell
1. Named functions - extract anonymous functions into named ones
2. Modularization - separate concerns into different modules
3. Promises - chain operations instead of nesting
4. Async/Await - write async code that looks synchronous
5. Control flow libraries (async.js) - utilities for managing async operations
6. Event emitters - pub/sub pattern for decoupled communication

---

## BASIC CALLBACK CONCEPT
A callback is simply a function passed to another function as an argument. The receiving function can then "call back" (execute) that function whenever it's appropriate - immediately, after some operation, or in response to an event.

\`\`\`js
// Basic callback example - synchronous execution
// Here, the callback is executed immediately within the greet function
function greet(name, callback) {
  console.log('Hello, ' + name);
  // The callback is invoked after the greeting
  // This allows the caller to define what happens next
  callback();
}
greet('John', function() {
  console.log('Callback executed');
});
// Output: "Hello, John" then "Callback executed"
// The callback runs synchronously - it executes before greet() returns

// Callback with parameters - passing data to the callback
// This pattern allows the function to share computed results with the callback
function calculate(a, b, callback) {
  // The callback receives the two numbers and can perform any operation
  // This makes calculate() extremely flexible - it doesn't need to know
  // what operation will be performed
  const result = callback(a, b);
  console.log('Result:', result);
  return result;
}
// Same function, different callbacks - demonstrating flexibility
calculate(5, 3, (x, y) => x + y); // Result: 8 (addition)
calculate(5, 3, (x, y) => x * y); // Result: 15 (multiplication)
calculate(5, 3, (x, y) => x ** y); // Result: 125 (exponentiation)
// This is the foundation of functional programming in JavaScript
\`\`\`

### Real-world Analogy
Think of ordering food at a restaurant:
1. You place an order (call a function)
2. You give the waiter your table number (pass a callback)
3. The kitchen prepares food (async operation)
4. Waiter brings food to your table (callback is executed)
You don't wait at the counter - you're free to do other things!

---

## SYNCHRONOUS VS ASYNCHRONOUS CALLBACKS
Understanding this difference is CRUCIAL for JavaScript interviews. It's the foundation of how JavaScript handles concurrency.

### Synchronous Callbacks
- Execute immediately, one after another
- Block the execution until complete
- Run on the main thread in the current call stack
- Examples: Array methods (map, filter, forEach, reduce)

### Asynchronous Callbacks
- Scheduled to execute later
- Don't block execution - code continues immediately
- Run after the current call stack is empty
- Examples: setTimeout, setInterval, fetch, event handlers, I/O operations

\`\`\`js
// SYNCHRONOUS CALLBACKS
console.log('Start');
[1, 2, 3].forEach(num => console.log(num)); // Sync callback - runs immediately
console.log('End');
// Output: Start, 1, 2, 3, End (in exact order)
// The forEach callback executes synchronously - the loop completes before 'End' prints

// ASYNCHRONOUS CALLBACKS
console.log('Start');
setTimeout(() => console.log('Timeout'), 0); // Async - even with 0ms delay!
console.log('End');
// Output: Start, End, Timeout
// Even with 0ms delay, setTimeout callback goes to the task queue
// It only executes AFTER the current synchronous code completes

// Detailed comparison showing the execution flow
function syncOperation(callback) {
  console.log('Before callback');
  callback(); // Executes RIGHT NOW, in this exact spot
  console.log('After callback');
}
function asyncOperation(callback) {
  console.log('Before callback');
  setTimeout(callback, 0); // Schedules for LATER, continues immediately
  console.log('After callback');
}
// Sync: Before -> Callback -> After (callback in the middle)
syncOperation(() => console.log('Sync callback'));
// Async: Before -> After -> Callback (callback at the end)
asyncOperation(() => console.log('Async callback'));
\`\`\`

**Why this matters for interviews:** This is the foundation of the JavaScript Event Loop. Understanding this helps you predict code output and debug timing issues.

---

## ERROR-FIRST CALLBACK PATTERN (NODE.JS CONVENTION)
This is the standard pattern used throughout Node.js and many JS libraries.

**Convention:** callback(error, data)
- First parameter is ALWAYS the error (null if no error)
- Second parameter is the result data
- This allows consistent error handling across all async operations

\`\`\`js
function readFile(path, callback) {
  // Simulating async file reading with setTimeout
  setTimeout(() => {
    // Error case: invalid path
    if (!path || path === 'invalid') {
      // Pass error as FIRST argument, data as null
      callback(new Error('File not found'), null);
    } else {
      // Success case: null error, data as SECOND argument
      callback(null, 'File content: Hello World');
    }
  }, 100);
}
// Proper error handling with error-first pattern
readFile('valid.txt', (err, data) => {
  // ALWAYS check for error first
  if (err) {
    console.error('Error:', err.message);
    return; // Early return prevents executing success code
  }
  // Only process data if no error
  console.log('Data:', data);
});
\`\`\`

### Why Error-First?
1. **Consistency** - every callback has the same signature
2. **Forces error handling** - you can't forget to check errors
3. **try/catch doesn't work** with async callbacks
4. **Allows for generic** error handling utilities

\`\`\`js
// More complex example with multiple error conditions
function writeFile(path, content, callback) {
  setTimeout(() => {
    // Validate inputs and provide specific error messages
    if (!path) {
      callback(new Error('Path is required'));
      return; // Always return after calling callback with error
    }
    if (!content) {
      callback(new Error('Content is required'));
      return;
    }
    if (path.includes('..')) {
      callback(new Error('Invalid path: directory traversal not allowed'));
      return;
    }
    // Success - null error, result object
    callback(null, { 
      success: true, 
      bytesWritten: content.length,
      timestamp: Date.now()
    });
  }, 100);
}
writeFile('test.txt', 'Hello', (err, result) => {
  if (err) return console.error(err.message);
  console.log('Written:', result.bytesWritten, 'bytes');
});
\`\`\`

### Common Mistake
Forgetting to return after error callback causes success code to run even after an error!

\`\`\`js
// BAD:
if (err) { callback(err); } // Missing return!
callback(null, data); // This still runs!

// GOOD:
if (err) { return callback(err); } // Return stops execution
callback(null, data); // Only runs if no error
\`\`\`

---

## CALLBACK HELL - THE PROBLEM
Callback Hell (also called "Pyramid of Doom") occurs when we have multiple asynchronous operations that depend on each other's results. Each nested callback adds indentation, making code hard to read and maintain.

\`\`\`js
// Setting up our async functions that simulate API calls
function getUser(id, callback) {
  setTimeout(() => {
    console.log('Fetched user');
    callback({ id, name: 'John', email: 'john@example.com' });
  }, 100);
}
function getPosts(userId, callback) {
  setTimeout(() => {
    console.log('Fetched posts');
    callback([
      { id: 1, title: 'Post 1', userId },
      { id: 2, title: 'Post 2', userId }
    ]);
  }, 100);
}
function getComments(postId, callback) {
  setTimeout(() => {
    console.log('Fetched comments');
    callback([
      { id: 1, text: 'Great post!', postId },
      { id: 2, text: 'Thanks for sharing', postId }
    ]);
  }, 100);
}
function getLikes(commentId, callback) {
  setTimeout(() => {
    console.log('Fetched likes');
    callback({ count: 42, commentId });
  }, 100);
}

// THE PYRAMID OF DOOM - Classic callback hell
// Each operation depends on the previous one's result
// Notice how the code moves more RIGHT than DOWN
getUser(1, (user) => {
  console.log('User:', user.name);
  getPosts(user.id, (posts) => {
    console.log('Posts:', posts.length);
    getComments(posts[0].id, (comments) => {
      console.log('Comments:', comments.length);
      getLikes(comments[0].id, (likes) => {
        console.log('Likes:', likes.count);
        // Imagine adding more levels...
        // The indentation keeps growing
        // Error handling would make this even worse
        // Debugging becomes a nightmare
      });
    });
  });
});
\`\`\`

### Problems with Callback Hell
1. **READABILITY**: Hard to follow the flow of logic
2. **MAINTAINABILITY**: Adding/removing steps requires restructuring
3. **ERROR HANDLING**: Where do errors go? How do we handle them consistently?
4. **REUSABILITY**: Can't easily reuse parts of this chain
5. **TESTING**: Difficult to test individual parts

\`\`\`js
// WITH ERROR HANDLING - The pyramid gets worse!
function getUserWithError(id, callback) {
  setTimeout(() => {
    if (!id) return callback(new Error('ID required'), null);
    callback(null, { id, name: 'John' });
  }, 100);
}
function getPostsWithError(userId, callback) {
  setTimeout(() => {
    if (!userId) return callback(new Error('User ID required'), null);
    callback(null, [{ id: 1, title: 'Post 1' }]);
  }, 100);
}
// Error handling makes callback hell even more painful
// Every level needs its own if (err) check
getUserWithError(1, (err, user) => {
  if (err) {
    console.error('User error:', err.message);
    return; // Must return to prevent continuing
  }
  getPostsWithError(user.id, (err, posts) => {
    if (err) {
      console.error('Posts error:', err.message);
      return;
    }
    getComments(posts[0].id, (comments) => {
      // Even more error handling...
      // The repetition is exhausting
      // Easy to forget error handling at any level
    });
  });
});
// This is why Promises and async/await were introduced!
\`\`\`

---

## SOLUTION 1: NAMED FUNCTIONS
The simplest solution: extract anonymous callbacks into named functions.

### Benefits
- Flattens the pyramid structure
- Functions have descriptive names showing their purpose
- Easier to debug (function names appear in stack traces)
- Functions can be reused elsewhere
- Easier to test individual functions

\`\`\`js
function handleLikes(likes) {
  console.log('Final likes count:', likes.count);
  // Processing is complete
  // In real code, you might update UI or call another callback here
}
function handleComments(comments) {
  console.log('Processing comments:', comments.length);
  // Each function calls the next in the chain
  getLikes(comments[0].id, handleLikes);
}
function handlePosts(posts) {
  console.log('Processing posts:', posts.length);
  getComments(posts[0].id, handleComments);
}
function handleUser(user) {
  console.log('Processing user:', user.name);
  getPosts(user.id, handlePosts);
}
// Now the entry point is clean and simple
getUser(1, handleUser);
// The code flows vertically, not horizontally
// Each function has a single responsibility
// Stack traces will show: handleLikes <- handleComments <- handlePosts <- handleUser
\`\`\`

**Drawback:** Functions are defined in reverse order of execution. You read the definitions bottom-to-top to understand the flow.

---

## SOLUTION 2: MODULARIZATION
Organize related callbacks into service objects or modules. This adds structure and separates concerns. Each service handles one type of entity (users, posts, comments).

\`\`\`js
const UserService = {
  get(id, callback) {
    setTimeout(() => {
      if (!id) return callback(new Error('ID required'), null);
      callback(null, { id, name: 'John', email: 'john@example.com' });
    }, 100);
  },
  update(id, data, callback) {
    setTimeout(() => callback(null, { ...data, id, updated: true }), 100);
  }
};
const PostService = {
  getByUser(userId, callback) {
    setTimeout(() => {
      callback(null, [
        { id: 1, title: 'Post 1', userId },
        { id: 2, title: 'Post 2', userId }
      ]);
    }, 100);
  },
  create(data, callback) {
    setTimeout(() => callback(null, { id: Date.now(), ...data }), 100);
  }
};
const CommentService = {
  getByPost(postId, callback) {
    setTimeout(() => {
      callback(null, [
        { id: 1, text: 'Great!', postId },
        { id: 2, text: 'Thanks!', postId }
      ]);
    }, 100);
  }
};
// Usage is cleaner with clear service names
UserService.get(1, (err, user) => {
  if (err) return console.error(err);
  PostService.getByUser(user.id, (err, posts) => {
    if (err) return console.error(err);
    console.log('Modular approach - User:', user.name, 'Posts:', posts.length);
  });
});
\`\`\`

### Benefits
- Code is organized by domain/feature
- Easy to find related functionality
- Services can be tested independently
- Clear separation of concerns

---

## SOLUTION 3: PROMISIFY CALLBACKS
Convert callback-based functions to Promises. This allows using .then() chains or async/await. Many libraries provide promisify utilities (util.promisify in Node.js).

\`\`\`js
// Generic promisify function for error-first callbacks
// This works with any function that follows the Node.js callback convention
function promisify(fn) {
  return function(...args) {
    return new Promise((resolve, reject) => {
      // Call the original function with a callback that resolves/rejects
      fn(...args, (err, result) => {
        if (err) reject(err);
        else resolve(result);
      });
    });
  };
}
// Example callback function following error-first pattern
function getUserCallback(id, callback) {
  setTimeout(() => {
    if (!id) callback(new Error('ID required'), null);
    else callback(null, { id, name: 'John' });
  }, 100);
}
// Promisify it
const getUserPromise = promisify(getUserCallback);
// Now we can use async/await - much cleaner!
async function fetchUserData() {
  try {
    const user = await getUserPromise(1);
    console.log('User via promise:', user);
    return user;
  } catch (err) {
    console.error('Error:', err.message);
    throw err;
  }
}
\`\`\`

### For Non-Error-First Callbacks
\`\`\`js
// For callbacks that don't use error-first pattern
// (just pass the result directly to callback)
function wrapAsPromise(fn) {
  return function(...args) {
    return new Promise(resolve => {
      fn(...args, resolve);
    });
  };
}
// Promisify our non-error-first callbacks
const getUserP = wrapAsPromise(getUser);
const getPostsP = wrapAsPromise(getPosts);
const getCommentsP = wrapAsPromise(getComments);
// Beautiful async/await code - reads like synchronous code!
async function fetchAll() {
  const user = await getUserP(1);
  const posts = await getPostsP(user.id);
  const comments = await getCommentsP(posts[0].id);
  console.log('Fetched all:', { user, posts, comments });
  return { user, posts, comments };
}
// Compare this to the pyramid of doom above
// Same functionality, infinitely more readable
\`\`\`

---

## SOLUTION 4: CONTROL FLOW PATTERNS
Sometimes we need to manage multiple async operations. These patterns help coordinate callbacks without promises.

### SERIES EXECUTION
Run tasks one after another in order. Each task completes before the next starts. Useful when order matters or tasks depend on previous results.

\`\`\`js
function series(tasks, finalCallback) {
  let index = 0;
  const results = [];
  function next(err, result) {
    if (err) return finalCallback(err);
    // Store result (skip first call which has no result)
    if (index > 0) results.push(result);
    // Check if all tasks complete
    if (index >= tasks.length) {
      return finalCallback(null, results);
    }
    // Execute next task, passing 'next' as the callback
    const task = tasks[index++];
    task(next);
  }
  next(); // Start the chain
}
// Usage - tasks run in order: First, then Second, then Third
series([
  (cb) => setTimeout(() => cb(null, 'First'), 100),
  (cb) => setTimeout(() => cb(null, 'Second'), 50),
  (cb) => setTimeout(() => cb(null, 'Third'), 75)
], (err, results) => {
  console.log('Series results:', results);
  // ['First', 'Second', 'Third'] - always in this order
  // Total time: 100 + 50 + 75 = 225ms
});
\`\`\`

### PARALLEL EXECUTION
Run all tasks simultaneously. Collect results when all complete. Useful for independent operations - faster than series!

\`\`\`js
function parallel(tasks, finalCallback) {
  let completed = 0;
  const results = new Array(tasks.length); // Pre-sized for correct order
  let hasError = false;
  if (tasks.length === 0) {
    return finalCallback(null, []);
  }
  tasks.forEach((task, index) => {
    task((err, result) => {
      // Ignore if already errored
      if (hasError) return;
      if (err) {
        hasError = true;
        return finalCallback(err);
      }
      // Store result at correct index (maintains order)
      results[index] = result;
      completed++;
      // Check if all complete
      if (completed === tasks.length) {
        finalCallback(null, results);
      }
    });
  });
}
// Usage - tasks run simultaneously, results maintain order
parallel([
  (cb) => setTimeout(() => cb(null, 'A'), 300), // Slowest
  (cb) => setTimeout(() => cb(null, 'B'), 100), // Fastest
  (cb) => setTimeout(() => cb(null, 'C'), 200)  // Middle
], (err, results) => {
  console.log('Parallel results:', results);
  // ['A', 'B', 'C'] - order preserved despite different timings
  // Total time: ~300ms (max of all, not sum)
});
\`\`\`

### WATERFALL
Run tasks in series, but pass each result to the next task. Each task receives the result of the previous task. Perfect for dependent operations.

\`\`\`js
function waterfall(tasks, finalCallback) {
  let index = 0;
  function next(err, ...args) {
    if (err) return finalCallback(err);
    // All tasks complete, pass final result
    if (index >= tasks.length) {
      return finalCallback(null, ...args);
    }
    // Run next task with previous results
    const task = tasks[index++];
    task(...args, next);
  }
  next(null); // Start with no initial arguments
}
// Usage - each task receives and transforms the previous result
waterfall([
  (cb) => cb(null, 1),           // Start with 1
  (num, cb) => cb(null, num + 1), // 1 + 1 = 2
  (num, cb) => cb(null, num * 2), // 2 * 2 = 4
  (num, cb) => cb(null, num ** 2) // 4 ** 2 = 16
], (err, result) => {
  console.log('Waterfall result:', result); // 16
});
// These patterns are what async.js library provides
// Now you understand how they work internally!
\`\`\`

---

## HIGHER-ORDER FUNCTIONS WITH CALLBACKS
Higher-order functions either:
1. Take a function as an argument (callbacks)
2. Return a function
3. Both

Array methods are the most common example of callbacks in JavaScript.

\`\`\`js
const numbers = [1, 2, 3, 4, 5];

// MAP - Transform each element using the callback
// Returns a NEW array with transformed values
// Original array is unchanged (immutable operation)
// Callback receives: (element, index, originalArray)
const doubled = numbers.map(function(num, index, arr) {
  // num: current element
  // index: current index
  // arr: the original array
  return num * 2; // Return value becomes the new element
});
console.log('Doubled:', doubled); // [2, 4, 6, 8, 10]
console.log('Original unchanged:', numbers); // [1, 2, 3, 4, 5]

// FILTER - Keep elements that pass a test
// Returns a NEW array with only elements where callback returns true
// Callback should return a boolean
const evens = numbers.filter(num => num % 2 === 0);
console.log('Evens:', evens); // [2, 4]

// More complex filter example
const users = [
  { name: 'John', age: 25, active: true },
  { name: 'Jane', age: 17, active: true },
  { name: 'Bob', age: 30, active: false }
];
const activeAdults = users.filter(user => user.active && user.age >= 18);
console.log('Active adults:', activeAdults); // [{ name: 'John', ... }]

// REDUCE - Accumulate all elements into a single value
// Most powerful array method - can implement map, filter, and more
// Callback receives: (accumulator, currentElement, index, array)
const sum = numbers.reduce((acc, num) => acc + num, 0);
// Step by step: 0+1=1, 1+2=3, 3+3=6, 6+4=10, 10+5=15
console.log('Sum:', sum); // 15

// Reduce to find max
const max = numbers.reduce((acc, num) => num > acc ? num : acc, -Infinity);
console.log('Max:', max); // 5

// Reduce to group items
const items = ['apple', 'banana', 'apple', 'cherry', 'banana', 'apple'];
const counts = items.reduce((acc, item) => {
  acc[item] = (acc[item] || 0) + 1;
  return acc;
}, {});
console.log('Counts:', counts); // { apple: 3, banana: 2, cherry: 1 }

// FIND - Return first element that passes test
// Returns the element itself, or undefined if not found
const firstEven = numbers.find(num => num % 2 === 0);
console.log('First even:', firstEven); // 2

// FINDINDEX - Return index of first element that passes test
// Returns -1 if not found
const firstEvenIndex = numbers.findIndex(num => num % 2 === 0);
console.log('First even index:', firstEvenIndex); // 1

// SOME - Check if at least one element passes test
// Returns true if ANY callback returns true, false otherwise
// Short-circuits: stops as soon as it finds a true
const hasEven = numbers.some(num => num % 2 === 0);
console.log('Has even:', hasEven); // true

// EVERY - Check if all elements pass test
// Returns true only if ALL callbacks return true
// Short-circuits: stops as soon as it finds a false
const allPositive = numbers.every(num => num > 0);
console.log('All positive:', allPositive); // true
const allEven = numbers.every(num => num % 2 === 0);
console.log('All even:', allEven); // false

// FOREACH - Iterate without returning anything
// Used for side effects (logging, updating external variables)
// Returns undefined - can't chain after forEach
numbers.forEach((num, i) => console.log(\`Index \${i}: \${num}\`));

// SORT - Sort array in place using comparison callback
// Comparison callback returns:
//   negative: a comes before b
//   positive: b comes before a
//   zero: order unchanged
const unsorted = [3, 1, 4, 1, 5, 9, 2, 6];
const sorted = [...unsorted].sort((a, b) => a - b); // Ascending
console.log('Sorted:', sorted); // [1, 1, 2, 3, 4, 5, 6, 9]
const descending = [...unsorted].sort((a, b) => b - a); // Descending
console.log('Descending:', descending); // [9, 6, 5, 4, 3, 2, 1, 1]
\`\`\`

---

## IMPLEMENT ARRAY METHODS FROM SCRATCH
Understanding how these work internally is crucial for interviews. It demonstrates deep understanding of callbacks and iteration.

### Custom MAP Implementation
Key points:
- Create new array (don't modify original)
- Call callback for each element
- Push callback's return value to result
- Handle sparse arrays with 'in' operator

\`\`\`js
function myMap(arr, callback) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    // 'in' checks if index exists (handles sparse arrays)
    // [1, , 3] has no index 1, so we skip it
    if (i in arr) {
      result[i] = callback(arr[i], i, arr);
    }
  }
  return result;
}
console.log(myMap([1, 2, 3], x => x * 2)); // [2, 4, 6]
\`\`\`

### Custom FILTER Implementation
Key points:
- Only push elements where callback returns truthy value
- Result array may be smaller than original

\`\`\`js
function myFilter(arr, callback) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (i in arr && callback(arr[i], i, arr)) {
      result.push(arr[i]);
    }
  }
  return result;
}
console.log(myFilter([1, 2, 3, 4], x => x % 2 === 0)); // [2, 4]
\`\`\`

### Custom REDUCE Implementation
Key points:
- Handle optional initial value
- If no initial value, use first element and start from index 1
- Throw error for empty array with no initial value

\`\`\`js
function myReduce(arr, callback, initialValue) {
  let accumulator;
  let startIndex;
  // Determine starting point and initial accumulator
  if (initialValue !== undefined) {
    accumulator = initialValue;
    startIndex = 0;
  } else {
    // No initial value - use first element
    if (arr.length === 0) {
      throw new TypeError('Reduce of empty array with no initial value');
    }
    accumulator = arr[0];
    startIndex = 1; // Skip first element since it's the initial value
  }
  for (let i = startIndex; i < arr.length; i++) {
    if (i in arr) {
      accumulator = callback(accumulator, arr[i], i, arr);
    }
  }
  return accumulator;
}
console.log(myReduce([1, 2, 3, 4], (a, b) => a + b, 0)); // 10
console.log(myReduce([1, 2, 3, 4], (a, b) => a + b)); // 10 (no initial value)
\`\`\`

### Custom FIND Implementation
Returns first matching element or undefined.

\`\`\`js
function myFind(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    if (i in arr && callback(arr[i], i, arr)) {
      return arr[i]; // Return immediately on first match
    }
  }
  return undefined; // No match found
}
console.log(myFind([1, 2, 3, 4], x => x > 2)); // 3
\`\`\`

### Custom FINDINDEX Implementation
Returns index of first match or -1.

\`\`\`js
function myFindIndex(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    if (i in arr && callback(arr[i], i, arr)) {
      return i; // Return index, not element
    }
  }
  return -1; // Convention: -1 means "not found"
}
console.log(myFindIndex([1, 2, 3, 4], x => x > 2)); // 2
\`\`\`

### Custom SOME Implementation
Returns true if any element passes, false otherwise.

\`\`\`js
function mySome(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    if (i in arr && callback(arr[i], i, arr)) {
      return true; // Short-circuit: found one, stop looking
    }
  }
  return false; // None matched
}
console.log(mySome([1, 2, 3], x => x > 2)); // true
\`\`\`

### Custom EVERY Implementation
Returns true only if ALL elements pass.

\`\`\`js
function myEvery(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    if (i in arr && !callback(arr[i], i, arr)) {
      return false; // Short-circuit: found failure, stop looking
    }
  }
  return true; // All passed
}
console.log(myEvery([1, 2, 3], x => x > 0)); // true
\`\`\`

### Custom FOREACH Implementation
No return value - just executes callback for each element.

\`\`\`js
function myForEach(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    if (i in arr) {
      callback(arr[i], i, arr);
    }
  }
  // Returns undefined implicitly
}
\`\`\`

### Custom FLAT Implementation
Flattens nested arrays to specified depth.

\`\`\`js
function myFlat(arr, depth = 1) {
  const result = [];
  function flatten(array, d) {
    for (let i = 0; i < array.length; i++) {
      if (Array.isArray(array[i]) && d > 0) {
        // Recursively flatten with reduced depth
        flatten(array[i], d - 1);
      } else {
        result.push(array[i]);
      }
    }
  }
  flatten(arr, depth);
  return result;
}
console.log(myFlat([1, [2, [3, [4]]]], 1)); // [1, 2, [3, [4]]]
console.log(myFlat([1, [2, [3, [4]]]], 2)); // [1, 2, 3, [4]]
console.log(myFlat([1, [2, [3, [4]]]], Infinity)); // [1, 2, 3, 4]
\`\`\`

### Custom FLATMAP Implementation
Map then flatten by 1 level - more efficient than map().flat().

\`\`\`js
function myFlatMap(arr, callback) {
  return myFlat(myMap(arr, callback), 1);
}
console.log(myFlatMap([1, 2, 3], x => [x, x * 2]));
// [1, 2, 2, 4, 3, 6]
\`\`\`

---

## CALLBACK COMPOSITION PATTERNS
Advanced patterns for combining and enhancing callbacks.

### COMPOSE - Chain Async Callbacks Together
Each callback's result feeds into the next. Similar to waterfall but creates a reusable composed function.

\`\`\`js
function compose(...callbacks) {
  return function(initialValue, finalCallback) {
    function executeNext(index, value) {
      // All callbacks executed, return final result
      if (index >= callbacks.length) {
        return finalCallback(null, value);
      }
      // Execute current callback with current value
      callbacks[index](value, (err, result) => {
        if (err) return finalCallback(err);
        // Move to next callback with this result
        executeNext(index + 1, result);
      });
    }
    executeNext(0, initialValue);
  };
}
// Define individual transformation callbacks
const addOne = (x, cb) => setTimeout(() => cb(null, x + 1), 50);
const double = (x, cb) => setTimeout(() => cb(null, x * 2), 50);
const square = (x, cb) => setTimeout(() => cb(null, x * x), 50);
// Compose them into a single function
const composed = compose(addOne, double, square);
// Use the composed function
composed(3, (err, result) => {
  console.log('Composed result:', result);
  // Step by step: 3 -> 4 (addOne) -> 8 (double) -> 64 (square)
});
\`\`\`

### RETRY PATTERN
Automatically retry failed operations with delay between attempts. Essential for handling flaky network requests or transient errors.

\`\`\`js
function retry(fn, retries, delay, callback) {
  fn((err, result) => {
    // Success - no need to retry
    if (!err) return callback(null, result);
    // Out of retries - return the error
    if (retries <= 0) return callback(err);
    // Retry after delay
    console.log(\`Retrying... \${retries} attempts left\`);
    setTimeout(() => {
      retry(fn, retries - 1, delay, callback);
    }, delay);
  });
}
// Simulate an unreliable operation that fails twice then succeeds
let attempts = 0;
const unreliableOperation = (cb) => {
  attempts++;
  console.log(\`Attempt \${attempts}\`);
  if (attempts < 3) {
    cb(new Error('Random failure'));
  } else {
    cb(null, 'Success!');
  }
};
retry(unreliableOperation, 5, 100, (err, result) => {
  console.log('Retry result:', err?.message || result);
  // Output: Attempt 1, Retry..., Attempt 2, Retry..., Attempt 3, Success!
});
\`\`\`

### TIMEOUT WRAPPER
Ensure callbacks complete within a time limit. Prevents hanging operations from blocking indefinitely.

\`\`\`js
function withTimeout(fn, timeout, callback) {
  let timedOut = false;
  // Set timeout to fire error
  const timer = setTimeout(() => {
    timedOut = true;
    callback(new Error(\`Operation timed out after \${timeout}ms\`));
  }, timeout);
  // Execute the function
  fn((err, result) => {
    // If already timed out, ignore this callback
    if (timedOut) return;
    // Clear timeout and return result
    clearTimeout(timer);
    callback(err, result);
  });
}
// Test with a slow operation
const slowOperation = (cb) => setTimeout(() => cb(null, 'Done'), 2000);
withTimeout(slowOperation, 1000, (err, result) => {
  console.log('Timeout test:', err?.message || result);
  // "Operation timed out after 1000ms" (operation takes 2000ms)
});
\`\`\`

---

## DEBOUNCE AND THROTTLE WITH CALLBACKS
Essential patterns for performance optimization. Often asked in interviews for front-end positions.

### DEBOUNCE
Delays execution until after a quiet period. Only the LAST call in a burst of calls will execute.

**Use case:** Search input - wait until user stops typing.

\`\`\`js
function debounce(callback, delay) {
  let timeoutId;
  return function(...args) {
    // Clear any existing timeout
    clearTimeout(timeoutId);
    // Set new timeout
    timeoutId = setTimeout(() => {
      callback.apply(this, args);
    }, delay);
  };
}
const debouncedSearch = debounce((query) => {
  console.log('Searching for:', query);
}, 300);
// Simulating rapid typing
debouncedSearch('h');    // Cancelled by next call
debouncedSearch('he');   // Cancelled by next call
debouncedSearch('hel');  // Cancelled by next call
debouncedSearch('hell'); // Cancelled by next call
debouncedSearch('hello'); // This one executes after 300ms
\`\`\`

### DEBOUNCE WITH IMMEDIATE OPTION
Execute immediately on first call, then debounce subsequent calls.

**Use case:** Submit button - prevent double-clicks but respond immediately.

\`\`\`js
function debounceImmediate(callback, delay, immediate = false) {
  let timeoutId;
  return function(...args) {
    const callNow = immediate && !timeoutId;
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      timeoutId = null;
      if (!immediate) callback.apply(this, args);
    }, delay);
    // Execute immediately if requested and not in debounce period
    if (callNow) callback.apply(this, args);
  };
}
\`\`\`

### THROTTLE
Execute at most once per time interval. FIRST call in each interval executes, subsequent calls are ignored.

**Use case:** Scroll events - update position but not on every pixel.

\`\`\`js
function throttle(callback, limit) {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      callback.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}
const throttledScroll = throttle((position) => {
  console.log('Scroll position:', position);
}, 1000);
// Even with 100 calls, only executes once per second
for (let i = 0; i < 100; i++) {
  throttledScroll(i);
}
\`\`\`

### THROTTLE WITH TRAILING CALL
Execute first call, then queue the last call to execute when throttle ends. Ensures you always get the final state.

\`\`\`js
function throttleTrailing(callback, limit) {
  let lastArgs;
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      callback.apply(this, args);
      inThrottle = true;
      setTimeout(() => {
        inThrottle = false;
        // Execute queued call if exists
        if (lastArgs) {
          callback.apply(this, lastArgs);
          lastArgs = null;
        }
      }, limit);
    } else {
      // Queue this call (overwrites previous queued call)
      lastArgs = args;
    }
  };
}
\`\`\`

---

## MEMOIZATION WITH CALLBACKS
Cache expensive async operation results. Avoid redundant computations or API calls.

\`\`\`js
function memoizeAsync(fn) {
  const cache = new Map();
  return function(arg, callback) {
    const key = JSON.stringify(arg);
    // Return cached result if available
    if (cache.has(key)) {
      console.log('Cache hit for:', arg);
      // Use setTimeout to keep it async (consistent behavior)
      return setTimeout(() => callback(null, cache.get(key)), 0);
    }
    // Execute function and cache result
    fn(arg, (err, result) => {
      if (!err) {
        cache.set(key, result);
        console.log('Cached result for:', arg);
      }
      callback(err, result);
    });
  };
}
const expensiveOperation = (n, cb) => {
  console.log('Computing expensive operation for:', n);
  setTimeout(() => cb(null, n * n), 500);
};
const memoized = memoizeAsync(expensiveOperation);
memoized(5, (e, r) => console.log('Result:', r)); // Computes (500ms)
// Later...
memoized(5, (e, r) => console.log('Result:', r)); // From cache (instant)
\`\`\`

---

## EVENT EMITTER PATTERN (Callback Based)
Pub/Sub pattern for decoupled communication. Callbacks are registered as event listeners. This is how Node.js EventEmitter works internally.

\`\`\`js
class EventEmitter {
  constructor() {
    this.events = {}; // Map of event name -> array of callbacks
  }
  // Register a callback for an event
  on(event, callback) {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(callback);
    return this; // Allow chaining
  }
  // Remove a callback from an event
  off(event, callback) {
    if (!this.events[event]) return this;
    this.events[event] = this.events[event].filter(cb => cb !== callback);
    return this;
  }
  // Trigger an event - call all registered callbacks
  emit(event, ...args) {
    if (!this.events[event]) return false;
    this.events[event].forEach(callback => callback(...args));
    return true;
  }
  // Register a callback that only fires once
  once(event, callback) {
    const wrapper = (...args) => {
      callback(...args);
      this.off(event, wrapper); // Remove after first call
    };
    this.on(event, wrapper);
    return this;
  }
}
// Usage example
const emitter = new EventEmitter();
// Register event handlers
emitter.on('data', (data) => console.log('Received:', data));
emitter.on('data', (data) => console.log('Also received:', data));
emitter.once('connect', () => console.log('Connected!'));
// Emit events
emitter.emit('connect'); // "Connected!" - fires once
emitter.emit('connect'); // Nothing - once handler removed
emitter.emit('data', { id: 1 }); // Both handlers fire
\`\`\`

---

## COMMON INTERVIEW QUESTIONS

### Q1: What's the output? (Tests understanding of event loop)
\`\`\`js
console.log('Start');
setTimeout(() => console.log('Timeout 1'), 0);
Promise.resolve().then(() => console.log('Promise'));
setTimeout(() => console.log('Timeout 2'), 0);
console.log('End');
// Answer: Start, End, Promise, Timeout 1, Timeout 2
// Explanation:
// 1. Sync code runs first: "Start", "End"
// 2. Microtasks (Promises) run before macrotasks: "Promise"
// 3. Macrotasks (setTimeout) run in order: "Timeout 1", "Timeout 2"
\`\`\`

### Q2: Implement sequential async execution
\`\`\`js
function fetchSequentially(urls, callback) {
  const results = [];
  function fetchNext(index) {
    if (index >= urls.length) {
      return callback(null, results);
    }
    simulateFetch(urls[index], (err, data) => {
      if (err) return callback(err);
      results.push(data);
      fetchNext(index + 1); // Recursively fetch next
    });
  }
  fetchNext(0);
}
function simulateFetch(url, cb) {
  setTimeout(() => cb(null, \`Data from \${url}\`), 100);
}
\`\`\`

### Q3: Convert any callback function to Promise
\`\`\`js
function callbackToPromise(fn) {
  return (...args) => {
    return new Promise((resolve, reject) => {
      fn(...args, (err, result) => {
        if (err) reject(err);
        else resolve(result);
      });
    });
  };
}
\`\`\`

### Q4: Implement once() - function that only executes once
\`\`\`js
function once(fn) {
  let called = false;
  let result;
  return function(...args) {
    if (!called) {
      called = true;
      result = fn.apply(this, args);
    }
    return result; // Return cached result on subsequent calls
  };
}
const initOnce = once(() => {
  console.log('Initialized!');
  return 'done';
});
initOnce(); // "Initialized!", returns 'done'
initOnce(); // Returns 'done' (no log)
initOnce(); // Returns 'done' (no log)
\`\`\`

### Q5: Implement after() - callback fires after n invocations
\`\`\`js
function after(n, callback) {
  let count = 0;
  return function(...args) {
    count++;
    if (count >= n) {
      return callback.apply(this, args);
    }
  };
}
const afterThree = after(3, () => console.log('Called 3 times!'));
afterThree(); // Nothing (count = 1)
afterThree(); // Nothing (count = 2)
afterThree(); // "Called 3 times!" (count = 3)
afterThree(); // "Called 3 times!" (count = 4, still fires)
\`\`\`

### Q6: Implement before() - callback only fires first n times
\`\`\`js
function before(n, callback) {
  let count = 0;
  let result;
  return function(...args) {
    if (count < n) {
      result = callback.apply(this, args);
      count++;
    }
    return result;
  };
}
const beforeThree = before(3, (x) => x * 2);
console.log(beforeThree(5)); // 10 (fires)
console.log(beforeThree(10)); // 20 (fires)
console.log(beforeThree(15)); // 30 (fires)
console.log(beforeThree(20)); // 30 (returns last result)
\`\`\`

---

## QUICK REFERENCE CHEAT SHEET

| Pattern | Purpose | When to Use |
|---------|---------|-------------|
| Error-First | Consistent error handling | Node.js async operations |
| Named Functions | Flatten callback hell | Multiple nested callbacks |
| Promisify | Convert to Promises | Use async/await with callbacks |
| Series | Sequential execution | Order-dependent operations |
| Parallel | Concurrent execution | Independent operations |
| Waterfall | Pass results through chain | Dependent transformations |
| Debounce | Delay until quiet | Search inputs, resize events |
| Throttle | Limit frequency | Scroll events, rate limiting |
| Memoize | Cache results | Expensive computations |
| Event Emitter | Pub/Sub communication | Decoupled components |

---

## KEY TAKEAWAYS FOR INTERVIEWS

1. **Callbacks are foundational** - They're the basis for Promises and async/await
2. **Understand sync vs async** - This is the foundation of the event loop
3. **Error-first is standard** - Always use this pattern in Node.js
4. **Know how to escape callback hell** - Named functions, Promises, async/await
5. **Implement array methods** - Shows deep understanding of callbacks
6. **Master debounce/throttle** - Essential for front-end performance
7. **Understand event loop** - Predict output of async code
8. **Practice composition** - Combine callbacks effectively`,language:"javascript"},{id:"interview-prototypes",title:"Prototypes & Inheritance",content:`# Prototypes & Inheritance - Complete Interview Guide

## What is a Prototype?
Every JavaScript object has a hidden internal property called [[Prototype]] (accessed via __proto__ or Object.getPrototypeOf()) that references another object. This creates a chain of objects known as the prototype chain. When you access a property on an object, JavaScript first looks at the object itself, then walks up the prototype chain until it finds the property or reaches null.

## Why Prototypes Matter
JavaScript uses prototypal inheritance, not classical inheritance like Java or C++. Understanding prototypes is essential because:
- It's how JavaScript implements inheritance
- Methods are shared across instances (memory efficient)
- It's the foundation for ES6 classes (which are syntactic sugar)
- Many interview questions test this knowledge

## Key Concepts
1. **[[Prototype]]** - Internal hidden property linking objects
2. **__proto__** - Accessor property to get/set [[Prototype]] (deprecated but widely used)
3. **prototype** - Property on constructor functions, becomes __proto__ of instances
4. **Prototype Chain** - Linked list of objects for property lookup
5. **Object.create()** - Creates object with specified prototype
6. **Constructor Functions** - Functions used with 'new' to create objects
7. **ES6 Classes** - Syntactic sugar over prototype-based inheritance

## The Prototype Chain Lookup
When accessing a property:
1. Check the object itself (own property)
2. Check object's [[Prototype]]
3. Check [[Prototype]]'s [[Prototype]]
4. Continue until property found or reach null
5. Return undefined if not found

---

## PROTOTYPE BASICS
Every object in JavaScript has a prototype. The prototype is another object that the current object inherits properties and methods from. This creates a chain of inheritance.

\`\`\`js
// Creating an object with a prototype
// The 'animal' object will serve as a prototype for other objects
const animal = {
  eats: true,
  walk() {
    console.log('Animal walks');
  },
  sleep() {
    console.log('Animal sleeps');
  }
};

// Creating 'rabbit' with 'animal' as its prototype
// __proto__ is the accessor to set/get the [[Prototype]]
const rabbit = {
  jumps: true,
  __proto__: animal // Sets animal as rabbit's prototype
};

// Property lookup demonstration
console.log(rabbit.jumps); // true - own property (found on rabbit itself)
console.log(rabbit.eats);  // true - inherited from animal prototype
rabbit.walk(); // "Animal walks" - method inherited from animal

// The rabbit doesn't have 'walk' as its own property
// JavaScript looks up the prototype chain and finds it on animal
console.log(rabbit.hasOwnProperty('jumps')); // true - own property
console.log(rabbit.hasOwnProperty('eats'));  // false - inherited
console.log(rabbit.hasOwnProperty('walk'));  // false - inherited

// You can override inherited properties
rabbit.walk = function() {
  console.log('Rabbit hops');
};
rabbit.walk(); // "Rabbit hops" - now uses own property

// The original animal.walk is unchanged
animal.walk(); // "Animal walks"
\`\`\`

### How Property Lookup Works
When you access \`rabbit.eats\`:
1. JavaScript checks if \`rabbit\` has own property \`eats\` → No
2. JavaScript checks \`rabbit.__proto__\` (which is \`animal\`) → Found! Returns \`true\`

\`\`\`js
// Demonstrating the lookup process
const base = { 
  x: 10,
  getX() { return this.x; }
};
const derived = { 
  y: 20,
  __proto__: base 
};
const leaf = { 
  z: 30,
  __proto__: derived 
};

console.log(leaf.z); // 30 - own property
console.log(leaf.y); // 20 - from derived
console.log(leaf.x); // 10 - from base
console.log(leaf.getX()); // 10 - method from base, 'this' is leaf

// 'this' in inherited methods refers to the object that called the method
leaf.x = 100; // Creates own property, doesn't modify base.x
console.log(leaf.getX()); // 100 - now uses leaf.x
console.log(base.x); // 10 - unchanged
\`\`\`

---

## PROTOTYPE CHAIN
The prototype chain is a linked list of objects. Each object's [[Prototype]] points to another object, until the chain ends with null. Object.prototype is typically at the top of the chain (its [[Prototype]] is null).

\`\`\`js
// Building a prototype chain
const grandparent = { 
  a: 1,
  greet() { return 'Hello from grandparent'; }
};
const parent = { 
  b: 2, 
  __proto__: grandparent 
};
const child = { 
  c: 3, 
  __proto__: parent 
};

// Accessing properties through the chain
console.log(child.c); // 3 - own property
console.log(child.b); // 2 - from parent (1 step up)
console.log(child.a); // 1 - from grandparent (2 steps up)
console.log(child.greet()); // "Hello from grandparent"

// Checking the chain
console.log(child.__proto__ === parent); // true
console.log(parent.__proto__ === grandparent); // true
console.log(grandparent.__proto__ === Object.prototype); // true
console.log(Object.prototype.__proto__ === null); // true - end of chain

// The complete chain for 'child':
// child -> parent -> grandparent -> Object.prototype -> null
\`\`\`

### Visualizing the Prototype Chain
\`\`\`js
// Helper function to visualize the chain
function getPrototypeChain(obj) {
  const chain = [];
  let current = obj;
  while (current !== null) {
    chain.push(current);
    current = Object.getPrototypeOf(current);
  }
  chain.push(null);
  return chain;
}

const myObj = { name: 'test' };
console.log(getPrototypeChain(myObj));
// [{ name: 'test' }, Object.prototype, null]

// Arrays have an extra link in the chain
const myArr = [1, 2, 3];
console.log(getPrototypeChain(myArr));
// [[1, 2, 3], Array.prototype, Object.prototype, null]

// Functions also have their own prototype chain
function myFunc() {}
console.log(getPrototypeChain(myFunc));
// [myFunc, Function.prototype, Object.prototype, null]
\`\`\`

### Property Shadowing
When an object has an own property with the same name as a prototype property, the own property "shadows" the inherited one.

\`\`\`js
const proto = {
  value: 100,
  getValue() {
    return this.value;
  }
};

const obj = {
  __proto__: proto
};

console.log(obj.value); // 100 - inherited
console.log(obj.getValue()); // 100

// Creating an own property that shadows the inherited one
obj.value = 200;
console.log(obj.value); // 200 - own property (shadows proto.value)
console.log(proto.value); // 100 - unchanged
console.log(obj.getValue()); // 200 - 'this' refers to obj

// Deleting the own property reveals the inherited one again
delete obj.value;
console.log(obj.value); // 100 - back to inherited value
\`\`\`

---

## __proto__ VS prototype
This is one of the most confusing aspects of JavaScript and a common interview question. They are related but different!

### __proto__ (Dunder Proto)
- Every object has it
- Points to the object's prototype (the object it inherits from)
- Accessor property (getter/setter for [[Prototype]])
- Deprecated in favor of Object.getPrototypeOf() / Object.setPrototypeOf()

### prototype (Property)
- Only exists on functions
- Used when the function is called with 'new'
- Becomes the __proto__ of instances created by that constructor
- Not the function's own prototype (that's __proto__)

\`\`\`js
// Understanding the difference
function Person(name) {
  this.name = name;
}

// 'prototype' is a property on the Person function
// It's an object that will become __proto__ of instances
Person.prototype.greet = function() {
  return 'Hello, ' + this.name;
};

// Create an instance using 'new'
const john = new Person('John');

// john's __proto__ points to Person.prototype
console.log(john.__proto__ === Person.prototype); // true

// Person (the function) also has a __proto__
// It points to Function.prototype (because functions are objects too!)
console.log(Person.__proto__ === Function.prototype); // true

// The prototype object has a 'constructor' property pointing back
console.log(Person.prototype.constructor === Person); // true
console.log(john.constructor === Person); // true (inherited)

// Diagram:
// john (instance)
//   ├── name: 'John' (own property)
//   └── __proto__ ──→ Person.prototype
//                         ├── greet: function
//                         ├── constructor ──→ Person
//                         └── __proto__ ──→ Object.prototype
//                                               └── __proto__ ──→ null
\`\`\`

### Deep Dive: What Happens with 'new'
\`\`\`js
// When you call: new Person('John')
// JavaScript does approximately this:

function simulateNew(Constructor, ...args) {
  // 1. Create a new empty object
  const obj = {};
  
  // 2. Set its __proto__ to Constructor.prototype
  Object.setPrototypeOf(obj, Constructor.prototype);
  // Or: obj.__proto__ = Constructor.prototype;
  
  // 3. Execute Constructor with 'this' bound to new object
  const result = Constructor.apply(obj, args);
  
  // 4. Return the object (unless Constructor returns an object)
  return result instanceof Object ? result : obj;
}

// Usage
const jane = simulateNew(Person, 'Jane');
console.log(jane.name); // 'Jane'
console.log(jane.greet()); // 'Hello, Jane'
console.log(jane instanceof Person); // true
\`\`\`

### Common Confusion Points
\`\`\`js
function Dog(name) {
  this.name = name;
}

const buddy = new Dog('Buddy');

// ❌ WRONG: Trying to access 'prototype' on an instance
console.log(buddy.prototype); // undefined - instances don't have 'prototype'

// ✅ RIGHT: Access __proto__ on instance
console.log(buddy.__proto__ === Dog.prototype); // true

// ❌ WRONG: Confusing function's __proto__ with prototype
console.log(Dog.__proto__ === Dog.prototype); // false!

// ✅ RIGHT: Function's __proto__ is Function.prototype
console.log(Dog.__proto__ === Function.prototype); // true

// Function.prototype vs instance prototype
console.log(Dog.prototype); // { constructor: Dog } - for instances
console.log(Dog.__proto__); // Function.prototype - Dog's own prototype

// The prototype property is for instances, __proto__ is for the object itself
\`\`\`

### Modern Way: Object.getPrototypeOf / Object.setPrototypeOf
\`\`\`js
// __proto__ is deprecated, use these instead:

// Getting the prototype
const proto1 = Object.getPrototypeOf(buddy);
console.log(proto1 === Dog.prototype); // true

// Setting the prototype (not recommended for performance)
const newProto = {
  speak() { return 'Woof!'; }
};
Object.setPrototypeOf(buddy, newProto);
console.log(buddy.speak()); // 'Woof!'

// Check if prototype changed
console.log(Object.getPrototypeOf(buddy) === newProto); // true
console.log(Object.getPrototypeOf(buddy) === Dog.prototype); // false

// Warning: Changing prototype after object creation is slow!
// Prefer Object.create() for setting prototype at creation time
\`\`\`

---

## CONSTRUCTOR FUNCTIONS
Before ES6 classes, constructor functions were the primary way to create objects with shared behavior. Understanding them is crucial for interviews.

\`\`\`js
// A constructor function (by convention, starts with capital letter)
function Animal(name, species) {
  // 'this' refers to the newly created object
  this.name = name;
  this.species = species;
  this.isAlive = true;
  
  // Don't define methods inside constructor!
  // This creates a new function for each instance (inefficient)
  // this.speak = function() { ... } // BAD!
}

// Define methods on the prototype (shared across all instances)
Animal.prototype.speak = function() {
  console.log(this.name + ' makes a sound');
};

Animal.prototype.die = function() {
  this.isAlive = false;
  console.log(this.name + ' has died');
};

// Static method (on constructor, not prototype)
Animal.kingdom = 'Animalia';
Animal.isAnimal = function(obj) {
  return obj instanceof Animal;
};

// Create instances
const lion = new Animal('Leo', 'Lion');
const eagle = new Animal('Eddie', 'Eagle');

// Methods are shared (same function reference)
console.log(lion.speak === eagle.speak); // true - same function!

// Own properties are not shared
console.log(lion.name === eagle.name); // false

lion.speak(); // "Leo makes a sound"
eagle.speak(); // "Eddie makes a sound"

// Static method usage
console.log(Animal.kingdom); // 'Animalia'
console.log(Animal.isAnimal(lion)); // true
console.log(Animal.isAnimal({})); // false
\`\`\`

### Inheritance with Constructor Functions
This is how we implemented inheritance before ES6 classes. It's more verbose but understanding it helps you understand what classes do under the hood.

\`\`\`js
// Parent constructor
function Animal(name) {
  this.name = name;
  this.isAlive = true;
}

Animal.prototype.speak = function() {
  console.log(this.name + ' makes a sound');
};

Animal.prototype.eat = function() {
  console.log(this.name + ' is eating');
};

// Child constructor
function Dog(name, breed) {
  // Step 1: Call parent constructor with 'this' context
  // This sets up the parent's properties on the new object
  Animal.call(this, name);
  
  // Add child-specific properties
  this.breed = breed;
  this.legs = 4;
}

// Step 2: Set up prototype chain
// Create a new object with Animal.prototype as its prototype
// This becomes Dog.prototype
Dog.prototype = Object.create(Animal.prototype);

// Step 3: Fix the constructor property
// Object.create made Dog.prototype.constructor point to Animal
// We need to fix it to point to Dog
Dog.prototype.constructor = Dog;

// Step 4: Add child-specific methods
Dog.prototype.bark = function() {
  console.log(this.name + ' barks: Woof!');
};

// Step 5: Override parent methods (optional)
Dog.prototype.speak = function() {
  console.log(this.name + ' says: Woof woof!');
};

// Create a Dog instance
const buddy = new Dog('Buddy', 'Golden Retriever');

// Test own properties
console.log(buddy.name);  // 'Buddy' (from Animal via call)
console.log(buddy.breed); // 'Golden Retriever' (from Dog)
console.log(buddy.legs);  // 4 (from Dog)

// Test methods
buddy.speak(); // "Buddy says: Woof woof!" (overridden)
buddy.eat();   // "Buddy is eating" (inherited from Animal)
buddy.bark();  // "Buddy barks: Woof!" (Dog's own)

// Test prototype chain
console.log(buddy instanceof Dog);    // true
console.log(buddy instanceof Animal); // true
console.log(buddy instanceof Object); // true

// Verify constructor
console.log(buddy.constructor === Dog); // true
\`\`\`

### Why Each Step Matters
\`\`\`js
// Let's see what happens without each step

// Without Animal.call(this, name):
function BadDog1(name, breed) {
  // Forgot to call parent constructor!
  this.breed = breed;
}
BadDog1.prototype = Object.create(Animal.prototype);
const bad1 = new BadDog1('Rex', 'German Shepherd');
console.log(bad1.name); // undefined! Parent properties not set

// Without Object.create (wrong way):
function BadDog2(name, breed) {
  Animal.call(this, name);
  this.breed = breed;
}
BadDog2.prototype = Animal.prototype; // WRONG! Same object reference
BadDog2.prototype.bark = function() {
  console.log('Woof!');
};
// Now Animal.prototype also has bark method! We polluted the parent!
console.log(Animal.prototype.bark); // function! BAD!

// Without fixing constructor:
function BadDog3(name, breed) {
  Animal.call(this, name);
  this.breed = breed;
}
BadDog3.prototype = Object.create(Animal.prototype);
// Forgot: BadDog3.prototype.constructor = BadDog3;
const bad3 = new BadDog3('Max', 'Bulldog');
console.log(bad3.constructor === BadDog3); // false!
console.log(bad3.constructor === Animal);  // true (inherited)
\`\`\`

---

## OBJECT.CREATE()
Object.create() is a powerful method that creates a new object with a specified prototype. It's cleaner than manipulating __proto__ and is preferred for prototype-based programming.

\`\`\`js
// Basic usage - create object with specific prototype
const personProto = {
  greet() {
    return 'Hello, I am ' + this.name;
  },
  introduce() {
    return this.greet() + ', aged ' + this.age;
  }
};

// Create an object with personProto as its prototype
const john = Object.create(personProto);
john.name = 'John';
john.age = 30;

console.log(john.greet()); // "Hello, I am John"
console.log(john.introduce()); // "Hello, I am John, aged 30"

// Verify the prototype
console.log(Object.getPrototypeOf(john) === personProto); // true
console.log(john.__proto__ === personProto); // true
\`\`\`

### Object.create with Property Descriptors
The second argument allows you to define properties with full control over their attributes.

\`\`\`js
// Create object with property descriptors
const person = Object.create(personProto, {
  // Each property is defined with a descriptor object
  name: {
    value: 'Jane',
    writable: true,     // Can be changed
    enumerable: true,   // Shows up in for...in
    configurable: true  // Can be deleted/reconfigured
  },
  age: {
    value: 25,
    writable: true,
    enumerable: true,
    configurable: true
  },
  ssn: {
    value: '123-45-6789',
    writable: false,    // Cannot be changed
    enumerable: false,  // Hidden from for...in
    configurable: false // Cannot be deleted/reconfigured
  }
});

console.log(person.name); // 'Jane'
console.log(person.ssn);  // '123-45-6789'

// Test writable
person.name = 'Janet'; // Works
person.ssn = '000-00-0000'; // Silently fails (or throws in strict mode)
console.log(person.name); // 'Janet'
console.log(person.ssn);  // '123-45-6789' (unchanged)

// Test enumerable
console.log(Object.keys(person)); // ['name', 'age'] - ssn not included

for (let key in person) {
  if (person.hasOwnProperty(key)) {
    console.log(key); // 'name', 'age' - ssn hidden
  }
}

// Test configurable
delete person.ssn; // Silently fails
console.log(person.ssn); // '123-45-6789' (still exists)
\`\`\`

### Object.create(null) - Pure Dictionary
Creating an object with no prototype is useful for creating pure key-value stores without inherited properties.

\`\`\`js
// Normal object inherits from Object.prototype
const normalObj = {};
console.log(normalObj.toString); // function (inherited)
console.log(normalObj.hasOwnProperty); // function (inherited)
console.log('toString' in normalObj); // true

// Object with null prototype - pure dictionary
const pureDict = Object.create(null);
console.log(pureDict.toString); // undefined
console.log(pureDict.hasOwnProperty); // undefined
console.log('toString' in pureDict); // false

// Useful for:
// 1. Storing user-provided keys without collision with built-in methods
pureDict['toString'] = 'my value'; // Safe! No collision
pureDict['constructor'] = 'my constructor'; // Safe!

// 2. Slightly faster property access (no prototype chain to check)
// 3. JSON-like data structures

// Common use case: caching/memoization
function createCache() {
  const cache = Object.create(null);
  return {
    get(key) { return cache[key]; },
    set(key, value) { cache[key] = value; },
    has(key) { return key in cache; }
  };
}
\`\`\`

### Factory Pattern with Object.create
\`\`\`js
// Using Object.create for a factory pattern
const vehicleProto = {
  init(make, model) {
    this.make = make;
    this.model = model;
    return this;
  },
  start() {
    console.log(\`\${this.make} \${this.model} is starting\`);
  },
  stop() {
    console.log(\`\${this.make} \${this.model} is stopping\`);
  }
};

// Factory function
function createVehicle(make, model) {
  return Object.create(vehicleProto).init(make, model);
}

const car1 = createVehicle('Toyota', 'Camry');
const car2 = createVehicle('Honda', 'Accord');

car1.start(); // "Toyota Camry is starting"
car2.start(); // "Honda Accord is starting"

// Both share the same prototype
console.log(Object.getPrototypeOf(car1) === vehicleProto); // true
console.log(Object.getPrototypeOf(car2) === vehicleProto); // true
\`\`\`

---

## ES6 CLASSES
ES6 classes are syntactic sugar over prototype-based inheritance. They provide a cleaner, more familiar syntax for creating objects and implementing inheritance.

\`\`\`js
// Class declaration
class Vehicle {
  // Constructor method - called when 'new' is used
  constructor(make, model) {
    this.make = make;
    this.model = model;
    this.isRunning = false;
  }
  
  // Instance methods - added to Vehicle.prototype
  start() {
    this.isRunning = true;
    console.log(\`\${this.make} \${this.model} is starting...\`);
  }
  
  stop() {
    this.isRunning = false;
    console.log(\`\${this.make} \${this.model} has stopped.\`);
  }
  
  // Static method - on Vehicle itself, not prototype
  static compare(v1, v2) {
    return v1.make === v2.make && v1.model === v2.model;
  }
  
  // Static property (ES2022+)
  static category = 'Transportation';
  
  // Getter - accessed like a property
  get description() {
    return \`\${this.make} \${this.model}\`;
  }
  
  // Setter - assigned like a property
  set description(value) {
    const parts = value.split(' ');
    this.make = parts[0];
    this.model = parts[1];
  }
}

// Usage
const car = new Vehicle('Toyota', 'Camry');
car.start(); // "Toyota Camry is starting..."

console.log(car.description); // "Toyota Camry" (getter)
car.description = 'Honda Accord'; // setter
console.log(car.make); // "Honda"

// Static members
console.log(Vehicle.category); // "Transportation"
const car2 = new Vehicle('Honda', 'Accord');
console.log(Vehicle.compare(car, car2)); // true (both now Honda Accord)

// Classes are still functions!
console.log(typeof Vehicle); // "function"
console.log(Vehicle.prototype.start); // function
\`\`\`

### Class Inheritance with extends and super
\`\`\`js
class Vehicle {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }
  
  start() {
    console.log(\`\${this.make} \${this.model} starting...\`);
  }
  
  stop() {
    console.log(\`\${this.make} \${this.model} stopping...\`);
  }
  
  static isVehicle(obj) {
    return obj instanceof Vehicle;
  }
}

// Child class extending Vehicle
class Car extends Vehicle {
  constructor(make, model, doors) {
    // MUST call super() before using 'this' in derived class
    super(make, model); // Calls Vehicle constructor
    this.doors = doors;
    this.wheels = 4;
  }
  
  // Override parent method
  start() {
    super.start(); // Call parent's start method
    console.log('Engine revving...');
    console.log('Ready to drive!');
  }
  
  // Add new method
  honk() {
    console.log('Beep beep!');
  }
  
  // Override getter
  get description() {
    return \`\${this.make} \${this.model} with \${this.doors} doors\`;
  }
}

// Another child class
class Motorcycle extends Vehicle {
  constructor(make, model, type) {
    super(make, model);
    this.type = type; // 'sport', 'cruiser', etc.
    this.wheels = 2;
  }
  
  wheelie() {
    console.log(\`\${this.make} \${this.model} doing a wheelie!\`);
  }
}

// Usage
const myCar = new Car('Toyota', 'Camry', 4);
myCar.start();
// "Toyota Camry starting..."
// "Engine revving..."
// "Ready to drive!"

const myBike = new Motorcycle('Harley', 'Sportster', 'cruiser');
myBike.start(); // "Harley Sportster starting..." (inherited)
myBike.wheelie(); // "Harley Sportster doing a wheelie!"

// Inheritance checks
console.log(myCar instanceof Car);      // true
console.log(myCar instanceof Vehicle);  // true
console.log(myBike instanceof Car);     // false
console.log(Vehicle.isVehicle(myCar));  // true
console.log(Vehicle.isVehicle(myBike)); // true
\`\`\`

### Important: super() Rules
\`\`\`js
class Parent {
  constructor(name) {
    this.name = name;
  }
}

class Child extends Parent {
  constructor(name, age) {
    // ❌ WRONG: Cannot use 'this' before super()
    // this.age = age; // ReferenceError!
    
    // ✅ RIGHT: Call super first
    super(name);
    this.age = age;
  }
}

// If no constructor in child, it implicitly does this:
class ImplicitChild extends Parent {
  // Implicit constructor:
  // constructor(...args) {
  //   super(...args);
  // }
}

const child = new ImplicitChild('Test');
console.log(child.name); // 'Test'
\`\`\`

### Static Members Inheritance
\`\`\`js
class Animal {
  static kingdom = 'Animalia';
  
  static describe() {
    return \`All animals belong to kingdom \${this.kingdom}\`;
  }
}

class Dog extends Animal {
  static species = 'Canis familiaris';
  
  static describe() {
    // Call parent static method
    return super.describe() + \`, Dog species: \${this.species}\`;
  }
}

console.log(Animal.kingdom); // 'Animalia'
console.log(Dog.kingdom);    // 'Animalia' (inherited)
console.log(Dog.species);    // 'Canis familiaris'

console.log(Animal.describe()); 
// "All animals belong to kingdom Animalia"

console.log(Dog.describe());
// "All animals belong to kingdom Animalia, Dog species: Canis familiaris"
\`\`\`

---

## PRIVATE FIELDS AND METHODS (ES2022)
JavaScript now supports truly private class members using the # prefix.

\`\`\`js
class BankAccount {
  // Private fields (must be declared)
  #balance = 0;
  #accountNumber;
  #transactionHistory = [];
  
  // Public field
  ownerName;
  
  constructor(ownerName, accountNumber, initialDeposit = 0) {
    this.ownerName = ownerName;
    this.#accountNumber = accountNumber;
    this.#balance = initialDeposit;
    this.#logTransaction('OPEN', initialDeposit);
  }
  
  // Private method
  #logTransaction(type, amount) {
    this.#transactionHistory.push({
      type,
      amount,
      date: new Date(),
      balance: this.#balance
    });
  }
  
  // Public methods that use private fields
  deposit(amount) {
    if (amount <= 0) throw new Error('Invalid amount');
    this.#balance += amount;
    this.#logTransaction('DEPOSIT', amount);
    return this.#balance;
  }
  
  withdraw(amount) {
    if (amount <= 0) throw new Error('Invalid amount');
    if (amount > this.#balance) throw new Error('Insufficient funds');
    this.#balance -= amount;
    this.#logTransaction('WITHDRAW', amount);
    return this.#balance;
  }
  
  // Getter for private field (controlled access)
  get balance() {
    return this.#balance;
  }
  
  // Cannot set balance directly
  // No setter provided
  
  getStatement() {
    // Private fields accessible within class methods
    return {
      account: this.#maskAccountNumber(),
      owner: this.ownerName,
      balance: this.#balance,
      transactions: this.#transactionHistory.length
    };
  }
  
  #maskAccountNumber() {
    const str = String(this.#accountNumber);
    return '****' + str.slice(-4);
  }
  
  // Static private field
  static #bankName = 'MyBank';
  
  // Static private method
  static #generateId() {
    return Math.random().toString(36).substr(2, 9);
  }
  
  static getBankInfo() {
    return {
      name: BankAccount.#bankName,
      id: BankAccount.#generateId()
    };
  }
}

// Usage
const account = new BankAccount('John Doe', 1234567890, 1000);

console.log(account.ownerName);  // 'John Doe' (public)
console.log(account.balance);    // 1000 (via getter)

account.deposit(500);
console.log(account.balance);    // 1500

// ❌ Cannot access private fields from outside
// console.log(account.#balance); // SyntaxError!
// account.#balance = 1000000;    // SyntaxError!
// account.#logTransaction();     // SyntaxError!

// ❌ Private fields don't exist on the object externally
console.log(Object.keys(account)); // ['ownerName']
console.log('balance' in account); // true (the getter)
// console.log('#balance' in account); // SyntaxError

console.log(account.getStatement());
// { account: '****7890', owner: 'John Doe', balance: 1500, transactions: 2 }

console.log(BankAccount.getBankInfo());
// { name: 'MyBank', id: 'abc123xyz' }
\`\`\`

### Private Fields vs Closures
\`\`\`js
// Old way: Using closures for privacy
function createCounter() {
  let count = 0; // Private via closure
  
  return {
    increment() { return ++count; },
    decrement() { return --count; },
    getCount() { return count; }
  };
}

const counter = createCounter();
console.log(counter.getCount()); // 0
console.log(counter.increment()); // 1
// counter.count is undefined - truly private

// New way: Using private fields
class Counter {
  #count = 0;
  
  increment() { return ++this.#count; }
  decrement() { return --this.#count; }
  get count() { return this.#count; }
}

const counter2 = new Counter();
console.log(counter2.count); // 0
console.log(counter2.increment()); // 1
// counter2.#count is inaccessible
\`\`\`

---

## GETTERS AND SETTERS
Getters and setters allow you to define properties that are computed or validated when accessed or assigned.

\`\`\`js
class Temperature {
  constructor(celsius) {
    this._celsius = celsius; // Convention: underscore for "private"
  }
  
  // Getter - accessed like a property
  get celsius() {
    return this._celsius;
  }
  
  // Setter - assigned like a property
  set celsius(value) {
    if (value < -273.15) {
      throw new Error('Temperature below absolute zero!');
    }
    this._celsius = value;
  }
  
  // Computed property via getter
  get fahrenheit() {
    return this._celsius * 9/5 + 32;
  }
  
  set fahrenheit(value) {
    this._celsius = (value - 32) * 5/9;
  }
  
  get kelvin() {
    return this._celsius + 273.15;
  }
  
  set kelvin(value) {
    this._celsius = value - 273.15;
  }
}

const temp = new Temperature(25);

// Using getters (no parentheses - it's a property)
console.log(temp.celsius);    // 25
console.log(temp.fahrenheit); // 77
console.log(temp.kelvin);     // 298.15

// Using setters (assignment)
temp.fahrenheit = 100;
console.log(temp.celsius);    // 37.777...

temp.celsius = -300; // Error: Temperature below absolute zero!
\`\`\`

### Getters/Setters in Object Literals
\`\`\`js
const person = {
  firstName: 'John',
  lastName: 'Doe',
  
  // Getter
  get fullName() {
    return \`\${this.firstName} \${this.lastName}\`;
  },
  
  // Setter
  set fullName(value) {
    const parts = value.split(' ');
    this.firstName = parts[0];
    this.lastName = parts[1] || '';
  }
};

console.log(person.fullName); // "John Doe"
person.fullName = 'Jane Smith';
console.log(person.firstName); // "Jane"
console.log(person.lastName);  // "Smith"
\`\`\`

### Using Object.defineProperty for Getters/Setters
\`\`\`js
const obj = {
  _value: 0
};

Object.defineProperty(obj, 'value', {
  get() {
    console.log('Getting value');
    return this._value;
  },
  set(newValue) {
    console.log('Setting value to', newValue);
    this._value = newValue;
  },
  enumerable: true,
  configurable: true
});

obj.value = 10; // "Setting value to 10"
console.log(obj.value); // "Getting value" then 10
\`\`\`

---

## MIXINS
Mixins are a way to add functionality to classes without using inheritance. JavaScript doesn't support multiple inheritance, but mixins provide a workaround.

\`\`\`js
// Mixin objects containing reusable functionality
const canSwim = {
  swim() {
    console.log(\`\${this.name} is swimming\`);
  }
};

const canFly = {
  fly() {
    console.log(\`\${this.name} is flying\`);
  }
};

const canWalk = {
  walk() {
    console.log(\`\${this.name} is walking\`);
  }
};

// Base class
class Animal {
  constructor(name) {
    this.name = name;
  }
}

// Apply mixins using Object.assign
class Duck extends Animal {
  constructor(name) {
    super(name);
  }
  quack() {
    console.log(\`\${this.name} says: Quack!\`);
  }
}

// Add mixin methods to Duck's prototype
Object.assign(Duck.prototype, canSwim, canFly, canWalk);

const donald = new Duck('Donald');
donald.quack(); // "Donald says: Quack!"
donald.swim();  // "Donald is swimming"
donald.fly();   // "Donald is flying"
donald.walk();  // "Donald is walking"
\`\`\`

### Mixin Factory Function
\`\`\`js
// Function that creates mixins with options
function createTimestampMixin(options = {}) {
  const { autoUpdate = false } = options;
  
  return {
    createdAt: null,
    updatedAt: null,
    
    initTimestamps() {
      this.createdAt = new Date();
      this.updatedAt = new Date();
    },
    
    touch() {
      this.updatedAt = new Date();
    },
    
    getAge() {
      return Date.now() - this.createdAt.getTime();
    }
  };
}

// Serialization mixin
const serializableMixin = {
  toJSON() {
    return JSON.stringify(this);
  },
  
  toObject() {
    return { ...this };
  }
};

// Event mixin
const eventMixin = {
  _events: null,
  
  on(event, handler) {
    if (!this._events) this._events = {};
    if (!this._events[event]) this._events[event] = [];
    this._events[event].push(handler);
    return this;
  },
  
  off(event, handler) {
    if (!this._events?.[event]) return this;
    this._events[event] = this._events[event].filter(h => h !== handler);
    return this;
  },
  
  emit(event, ...args) {
    if (!this._events?.[event]) return this;
    this._events[event].forEach(handler => handler.apply(this, args));
    return this;
  }
};

// Usage
class User {
  constructor(name) {
    this.name = name;
    this.initTimestamps?.();
  }
}

Object.assign(User.prototype, 
  createTimestampMixin(),
  serializableMixin,
  eventMixin
);

const user = new User('John');
user.initTimestamps();

// Use timestamp methods
console.log(user.createdAt);
user.touch();
console.log(user.updatedAt);

// Use serialization
console.log(user.toJSON());

// Use events
user.on('change', (prop, value) => {
  console.log(\`Property \${prop} changed to \${value}\`);
});
user.emit('change', 'name', 'Jane');
\`\`\`

### Class-based Mixin Pattern
\`\`\`js
// Mixin as a function that takes a superclass
const TimestampMixin = (superclass) => class extends superclass {
  constructor(...args) {
    super(...args);
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }
  
  touch() {
    this.updatedAt = new Date();
  }
};

const SerializableMixin = (superclass) => class extends superclass {
  toJSON() {
    return JSON.stringify({ ...this });
  }
};

// Base class
class Entity {
  constructor(id) {
    this.id = id;
  }
}

// Compose mixins
class User extends TimestampMixin(SerializableMixin(Entity)) {
  constructor(id, name) {
    super(id);
    this.name = name;
  }
}

const user = new User(1, 'John');
console.log(user.id);        // 1
console.log(user.name);      // 'John'
console.log(user.createdAt); // Date
console.log(user.toJSON());  // JSON string
\`\`\`

---

## INSTANCEOF AND TYPE CHECKING
Understanding how to check types and prototype relationships is crucial for interviews.

\`\`\`js
// instanceof checks if an object's prototype chain contains a constructor's prototype
class Animal {}
class Dog extends Animal {}
class Cat extends Animal {}

const buddy = new Dog();

console.log(buddy instanceof Dog);    // true
console.log(buddy instanceof Animal); // true
console.log(buddy instanceof Object); // true
console.log(buddy instanceof Cat);    // false

// How instanceof works internally
function myInstanceof(obj, Constructor) {
  let proto = Object.getPrototypeOf(obj);
  
  while (proto !== null) {
    if (proto === Constructor.prototype) {
      return true;
    }
    proto = Object.getPrototypeOf(proto);
  }
  
  return false;
}

console.log(myInstanceof(buddy, Dog));    // true
console.log(myInstanceof(buddy, Animal)); // true
console.log(myInstanceof(buddy, Cat));    // false
\`\`\`

### isPrototypeOf() Method
\`\`\`js
// isPrototypeOf checks if an object exists in another object's prototype chain
const animal = { eats: true };
const rabbit = Object.create(animal);
const whiteRabbit = Object.create(rabbit);

console.log(animal.isPrototypeOf(rabbit));      // true
console.log(animal.isPrototypeOf(whiteRabbit)); // true
console.log(rabbit.isPrototypeOf(whiteRabbit)); // true
console.log(rabbit.isPrototypeOf(animal));      // false

// With classes
console.log(Dog.prototype.isPrototypeOf(buddy));    // true
console.log(Animal.prototype.isPrototypeOf(buddy)); // true
\`\`\`

### Object.getPrototypeOf()
\`\`\`js
// Get the prototype of an object
const proto = Object.getPrototypeOf(buddy);
console.log(proto === Dog.prototype); // true

const grandProto = Object.getPrototypeOf(proto);
console.log(grandProto === Animal.prototype); // true

const greatGrandProto = Object.getPrototypeOf(grandProto);
console.log(greatGrandProto === Object.prototype); // true

console.log(Object.getPrototypeOf(greatGrandProto)); // null
\`\`\`

### Checking Types Properly
\`\`\`js
// typeof for primitives and functions
console.log(typeof 'hello');     // 'string'
console.log(typeof 42);          // 'number'
console.log(typeof true);        // 'boolean'
console.log(typeof undefined);   // 'undefined'
console.log(typeof null);        // 'object' (historical bug!)
console.log(typeof {});          // 'object'
console.log(typeof []);          // 'object' (arrays are objects)
console.log(typeof function(){}); // 'function'
console.log(typeof Symbol());    // 'symbol'
console.log(typeof 1n);          // 'bigint'

// Array.isArray for arrays
console.log(Array.isArray([]));           // true
console.log(Array.isArray({}));           // false
console.log(Array.isArray('array'));      // false

// Object.prototype.toString for detailed type
function getType(value) {
  return Object.prototype.toString.call(value).slice(8, -1);
}

console.log(getType('hello'));     // 'String'
console.log(getType(42));          // 'Number'
console.log(getType(true));        // 'Boolean'
console.log(getType(undefined));   // 'Undefined'
console.log(getType(null));        // 'Null'
console.log(getType({}));          // 'Object'
console.log(getType([]));          // 'Array'
console.log(getType(function(){})); // 'Function'
console.log(getType(/regex/));     // 'RegExp'
console.log(getType(new Date()));  // 'Date'
console.log(getType(new Map()));   // 'Map'
console.log(getType(new Set()));   // 'Set'
\`\`\`

---

## hasOwnProperty VS in OPERATOR
Understanding the difference between own properties and inherited properties is essential.

\`\`\`js
const parent = { inherited: true };
const child = Object.create(parent);
child.own = true;

// 'in' operator checks own AND prototype chain
console.log('own' in child);       // true (own property)
console.log('inherited' in child); // true (from prototype)
console.log('toString' in child);  // true (from Object.prototype)

// hasOwnProperty checks ONLY own properties
console.log(child.hasOwnProperty('own'));       // true
console.log(child.hasOwnProperty('inherited')); // false
console.log(child.hasOwnProperty('toString'));  // false

// Safe way to check own properties
// (in case hasOwnProperty is overridden or object has null prototype)
console.log(Object.prototype.hasOwnProperty.call(child, 'own')); // true
console.log(Object.hasOwn(child, 'own')); // true (ES2022+)
\`\`\`

### Iterating Own vs Inherited Properties
\`\`\`js
const proto = { inherited: 'from proto' };
const obj = Object.create(proto);
obj.own1 = 'own property 1';
obj.own2 = 'own property 2';

// for...in iterates own AND enumerable inherited properties
console.log('for...in:');
for (let key in obj) {
  console.log(key); // 'own1', 'own2', 'inherited'
}

// Filter to only own properties
console.log('for...in with hasOwnProperty:');
for (let key in obj) {
  if (obj.hasOwnProperty(key)) {
    console.log(key); // 'own1', 'own2'
  }
}

// Object.keys() returns only own enumerable properties
console.log('Object.keys:', Object.keys(obj)); // ['own1', 'own2']

// Object.values() returns values of own enumerable properties
console.log('Object.values:', Object.values(obj)); // ['own property 1', 'own property 2']

// Object.entries() returns [key, value] pairs
console.log('Object.entries:', Object.entries(obj));
// [['own1', 'own property 1'], ['own2', 'own property 2']]

// Object.getOwnPropertyNames() includes non-enumerable own properties
Object.defineProperty(obj, 'hidden', {
  value: 'non-enumerable',
  enumerable: false
});
console.log(Object.keys(obj)); // ['own1', 'own2']
console.log(Object.getOwnPropertyNames(obj)); // ['own1', 'own2', 'hidden']
\`\`\`

### Potential Pitfall: hasOwnProperty Override
\`\`\`js
// Someone might override hasOwnProperty (bad practice, but possible)
const malicious = {
  hasOwnProperty: function() {
    return false; // Always returns false!
  },
  realProperty: 'exists'
};

console.log(malicious.hasOwnProperty('realProperty')); // false (wrong!)

// Safe way: call from Object.prototype
console.log(Object.prototype.hasOwnProperty.call(malicious, 'realProperty')); // true

// Even safer: Object.hasOwn (ES2022+)
console.log(Object.hasOwn(malicious, 'realProperty')); // true

// Object with null prototype doesn't have hasOwnProperty at all
const nullProto = Object.create(null);
nullProto.foo = 'bar';
// nullProto.hasOwnProperty('foo'); // TypeError: not a function
console.log(Object.hasOwn(nullProto, 'foo')); // true
\`\`\`

---

## PROPERTY DESCRIPTORS
Every property has attributes (descriptors) that control its behavior.

\`\`\`js
const person = {
  name: 'John'
};

// Get descriptor of a property
const descriptor = Object.getOwnPropertyDescriptor(person, 'name');
console.log(descriptor);
// {
//   value: 'John',
//   writable: true,
//   enumerable: true,
//   configurable: true
// }

// Define property with custom descriptors
Object.defineProperty(person, 'ssn', {
  value: '123-45-6789',
  writable: false,     // Cannot change value
  enumerable: false,   // Won't show in for...in or Object.keys
  configurable: false  // Cannot delete or reconfigure
});

person.ssn = '000-00-0000'; // Fails silently (throws in strict mode)
console.log(person.ssn);    // '123-45-6789'

delete person.ssn;          // Fails silently
console.log(person.ssn);    // '123-45-6789'

console.log(Object.keys(person)); // ['name'] - ssn not included
\`\`\`

### Object.defineProperties
\`\`\`js
const product = {};

Object.defineProperties(product, {
  _price: {
    value: 0,
    writable: true,
    enumerable: false
  },
  price: {
    get() { return '$' + this._price.toFixed(2); },
    set(value) { this._price = parseFloat(value) || 0; },
    enumerable: true
  },
  id: {
    value: Date.now(),
    writable: false,
    enumerable: true,
    configurable: false
  }
});

product.price = 29.99;
console.log(product.price); // '$29.99'
console.log(product._price); // 29.99
console.log(Object.keys(product)); // ['price', 'id']
\`\`\`

### Object Prevention Methods
\`\`\`js
// Object.preventExtensions - can't add new properties
const obj1 = { a: 1 };
Object.preventExtensions(obj1);
obj1.b = 2; // Fails silently
console.log(obj1.b); // undefined
obj1.a = 10; // Works - can still modify existing
console.log(Object.isExtensible(obj1)); // false

// Object.seal - can't add/delete, but can modify existing
const obj2 = { a: 1 };
Object.seal(obj2);
obj2.b = 2; // Fails
delete obj2.a; // Fails
obj2.a = 10; // Works
console.log(Object.isSealed(obj2)); // true

// Object.freeze - can't add/delete/modify (shallow freeze)
const obj3 = { a: 1, nested: { b: 2 } };
Object.freeze(obj3);
obj3.a = 10; // Fails
obj3.b = 2;  // Fails
obj3.nested.b = 20; // Works! Freeze is shallow
console.log(Object.isFrozen(obj3)); // true

// Deep freeze helper
function deepFreeze(obj) {
  Object.keys(obj).forEach(key => {
    if (typeof obj[key] === 'object' && obj[key] !== null) {
      deepFreeze(obj[key]);
    }
  });
  return Object.freeze(obj);
}

const frozen = deepFreeze({ a: { b: { c: 1 } } });
frozen.a.b.c = 999; // Fails - deeply frozen
console.log(frozen.a.b.c); // 1
\`\`\`

---

## PROTOTYPE POLLUTION
Prototype pollution is a security vulnerability where attackers can modify Object.prototype, affecting all objects. Understanding this is important for interviews at security-conscious companies.

\`\`\`js
// NEVER modify Object.prototype in production!
// This is just to demonstrate the danger

// ❌ BAD: Polluting Object.prototype
Object.prototype.polluted = 'gotcha';

const innocent = {};
console.log(innocent.polluted); // 'gotcha' - affected!

const arr = [];
console.log(arr.polluted); // 'gotcha' - even arrays!

// This can break code that checks for properties
for (let key in {}) {
  console.log(key); // 'polluted' - unexpected!
}

// How attackers exploit this (common vulnerability in old code)
function merge(target, source) {
  for (let key in source) {
    if (typeof source[key] === 'object') {
      target[key] = merge(target[key] || {}, source[key]);
    } else {
      target[key] = source[key];
    }
  }
  return target;
}

// Attacker sends malicious payload
const maliciousPayload = JSON.parse('{"__proto__": {"isAdmin": true}}');
merge({}, maliciousPayload);

// Now ALL objects have isAdmin!
const user = {};
console.log(user.isAdmin); // true (vulnerability!)

// Clean up
delete Object.prototype.polluted;
delete Object.prototype.isAdmin;
\`\`\`

### Preventing Prototype Pollution
\`\`\`js
// Safe merge function
function safeMerge(target, source) {
  for (let key in source) {
    // Skip __proto__ and constructor
    if (key === '__proto__' || key === 'constructor' || key === 'prototype') {
      continue;
    }
    
    // Only copy own properties
    if (!source.hasOwnProperty(key)) continue;
    
    if (typeof source[key] === 'object' && source[key] !== null) {
      target[key] = safeMerge(target[key] || {}, source[key]);
    } else {
      target[key] = source[key];
    }
  }
  return target;
}

// Use Object.create(null) for dictionaries
const safeDict = Object.create(null);
safeDict.__proto__ = 'test'; // Just a regular property, not prototype!
console.log(Object.getPrototypeOf(safeDict)); // null

// Use Map instead of objects for user-provided keys
const userPrefs = new Map();
userPrefs.set('__proto__', 'safe'); // Just a key, no pollution
\`\`\`

---

## COMMON INTERVIEW QUESTIONS

### Q1: Explain the difference between __proto__ and prototype
\`\`\`js
// Answer:
// - prototype is a property on FUNCTIONS (specifically constructors)
// - __proto__ is a property on ALL OBJECTS pointing to their prototype

function Dog(name) {
  this.name = name;
}

const buddy = new Dog('Buddy');

// prototype is what instances will inherit from
console.log(Dog.prototype); // { constructor: Dog }

// __proto__ is the actual prototype of an instance
console.log(buddy.__proto__ === Dog.prototype); // true

// A function's own __proto__ is Function.prototype
console.log(Dog.__proto__ === Function.prototype); // true
\`\`\`

### Q2: Implement your own 'new' operator
\`\`\`js
function myNew(Constructor, ...args) {
  // 1. Create empty object with Constructor.prototype as its prototype
  const obj = Object.create(Constructor.prototype);
  
  // 2. Execute Constructor with 'this' bound to new object
  const result = Constructor.apply(obj, args);
  
  // 3. Return object (unless Constructor returns a different object)
  return result instanceof Object ? result : obj;
}

// Test
function Person(name, age) {
  this.name = name;
  this.age = age;
}
Person.prototype.greet = function() {
  return \`Hi, I'm \${this.name}\`;
};

const john = myNew(Person, 'John', 30);
console.log(john.name);    // 'John'
console.log(john.greet()); // "Hi, I'm John"
console.log(john instanceof Person); // true
\`\`\`

### Q3: Implement inheritance without ES6 classes
\`\`\`js
// Parent
function Animal(name) {
  this.name = name;
}
Animal.prototype.speak = function() {
  console.log(this.name + ' makes a sound');
};

// Child
function Dog(name, breed) {
  Animal.call(this, name); // Call parent constructor
  this.breed = breed;
}

// Set up prototype chain
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

// Add child methods
Dog.prototype.bark = function() {
  console.log(this.name + ' barks');
};

// Test
const buddy = new Dog('Buddy', 'Lab');
buddy.speak(); // "Buddy makes a sound"
buddy.bark();  // "Buddy barks"
console.log(buddy instanceof Dog);    // true
console.log(buddy instanceof Animal); // true
\`\`\`

### Q4: What's the output?
\`\`\`js
function Parent() {
  this.name = 'Parent';
}
Parent.prototype.getName = function() {
  return this.name;
};

function Child() {
  this.name = 'Child';
}
Child.prototype = new Parent(); // Anti-pattern, but valid
Child.prototype.constructor = Child;

const child = new Child();
console.log(child.getName()); // 'Child'
console.log(child.hasOwnProperty('name')); // true
console.log(child.hasOwnProperty('getName')); // false

// Explanation:
// - child.name is 'Child' (set in Child constructor)
// - getName() uses 'this', which is child
// - name is own property, getName is inherited
\`\`\`

### Q5: Implement Object.create polyfill
\`\`\`js
if (typeof Object.create !== 'function') {
  Object.create = function(proto, propertiesObject) {
    if (typeof proto !== 'object' && typeof proto !== 'function') {
      throw new TypeError('Object prototype may only be an Object or null');
    }
    
    function F() {}
    F.prototype = proto;
    const obj = new F();
    
    if (propertiesObject !== undefined) {
      Object.defineProperties(obj, propertiesObject);
    }
    
    return obj;
  };
}

// Test
const parent = { greet() { return 'Hello'; } };
const child = Object.create(parent);
console.log(child.greet()); // 'Hello'
console.log(Object.getPrototypeOf(child) === parent); // true
\`\`\`

### Q6: Implement instanceof
\`\`\`js
function myInstanceof(obj, Constructor) {
  // Handle primitives
  if (obj === null || (typeof obj !== 'object' && typeof obj !== 'function')) {
    return false;
  }
  
  let proto = Object.getPrototypeOf(obj);
  
  while (proto !== null) {
    if (proto === Constructor.prototype) {
      return true;
    }
    proto = Object.getPrototypeOf(proto);
  }
  
  return false;
}

// Test
console.log(myInstanceof([], Array));   // true
console.log(myInstanceof([], Object));  // true
console.log(myInstanceof({}, Array));   // false
console.log(myInstanceof(null, Object)); // false
\`\`\`

### Q7: Class vs Function Constructor - What's the difference?
\`\`\`js
// ES6 Class
class PersonClass {
  constructor(name) {
    this.name = name;
  }
  greet() {
    return 'Hello ' + this.name;
  }
}

// Function Constructor
function PersonFunc(name) {
  this.name = name;
}
PersonFunc.prototype.greet = function() {
  return 'Hello ' + this.name;
};

// Differences:
// 1. Classes must be called with 'new'
new PersonClass('John'); // OK
// PersonClass('John'); // TypeError: Class constructor cannot be invoked without 'new'

PersonFunc('John'); // Works (but wrong - sets global.name)
new PersonFunc('John'); // OK

// 2. Class methods are non-enumerable by default
console.log(Object.keys(PersonClass.prototype)); // []
console.log(Object.keys(PersonFunc.prototype));  // ['greet']

// 3. Classes are in strict mode by default
// 4. Classes are not hoisted like function declarations
// 5. Class methods don't have [[Construct]] - can't be used with 'new'
\`\`\`

### Q8: Create a chain of prototype methods (fluent interface)
\`\`\`js
class Calculator {
  constructor(value = 0) {
    this.value = value;
  }
  
  add(n) {
    this.value += n;
    return this; // Return this for chaining
  }
  
  subtract(n) {
    this.value -= n;
    return this;
  }
  
  multiply(n) {
    this.value *= n;
    return this;
  }
  
  divide(n) {
    if (n === 0) throw new Error('Cannot divide by zero');
    this.value /= n;
    return this;
  }
  
  result() {
    return this.value;
  }
}

const result = new Calculator(10)
  .add(5)      // 15
  .multiply(2) // 30
  .subtract(5) // 25
  .divide(5)   // 5
  .result();

console.log(result); // 5
\`\`\`

---

## QUICK REFERENCE CHEAT SHEET

| Concept | Description | Example |
|---------|-------------|---------|
| \`__proto__\` | Object's internal prototype reference | \`obj.__proto__\` |
| \`prototype\` | Constructor's prototype for instances | \`Array.prototype\` |
| \`Object.create()\` | Create object with specific prototype | \`Object.create(proto)\` |
| \`Object.getPrototypeOf()\` | Get object's prototype | \`Object.getPrototypeOf(obj)\` |
| \`instanceof\` | Check prototype chain | \`obj instanceof Class\` |
| \`isPrototypeOf()\` | Check if object is in chain | \`proto.isPrototypeOf(obj)\` |
| \`hasOwnProperty()\` | Check own property | \`obj.hasOwnProperty('key')\` |
| \`Object.hasOwn()\` | Safe own property check (ES2022) | \`Object.hasOwn(obj, 'key')\` |
| \`extends\` | Class inheritance | \`class Child extends Parent\` |
| \`super\` | Call parent constructor/method | \`super(args)\` |

---

## KEY TAKEAWAYS FOR INTERVIEWS

1. **Understand the prototype chain** - Every object has a prototype, forming a chain to null
2. **Know __proto__ vs prototype** - __proto__ is on objects, prototype is on functions
3. **Master Object.create()** - Creates objects with specified prototype
4. **ES6 classes are sugar** - They compile down to prototype-based inheritance
5. **Private fields use #** - Truly private, not accessible outside class
6. **Use hasOwn for safety** - Object.hasOwn() is safer than hasOwnProperty()
7. **Beware prototype pollution** - Never modify Object.prototype in production
8. **Know how 'new' works** - Creates object, links prototype, calls constructor
9. **Understand instanceof** - Walks the prototype chain to find constructor.prototype
10. **Static vs instance** - Static on constructor, instance on prototype`,language:"javascript"},{id:"interview-objects",title:"Objects - Deep Dive",content:`# Objects - Interview Questions

## Object Creation
1. Object literal
2. Constructor function
3. Object.create()
4. ES6 Class

## Important Methods
- Object.keys(), values(), entries()
- Object.assign()
- Object.freeze(), seal()
- Property descriptors`,codeExample:`// ===== OBJECT CREATION =====
// 1. Object Literal
const obj1 = { name: 'John', age: 30 };

// 2. Constructor
function Person(name) {
  this.name = name;
}
const obj2 = new Person('Jane');

// 3. Object.create
const proto = { greet() { return 'Hello'; } };
const obj3 = Object.create(proto);

// 4. Class
class User {
  constructor(name) {
    this.name = name;
  }
}
const obj4 = new User('Bob');

// ===== OBJECT METHODS =====
const person = { name: 'John', age: 30, city: 'NYC' };

console.log(Object.keys(person));   // ['name', 'age', 'city']
console.log(Object.values(person)); // ['John', 30, 'NYC']
console.log(Object.entries(person)); 
// [['name', 'John'], ['age', 30], ['city', 'NYC']]

// Convert entries back to object
const entries = [['a', 1], ['b', 2]];
console.log(Object.fromEntries(entries)); // { a: 1, b: 2 }

// ===== OBJECT.ASSIGN =====
const target = { a: 1 };
const source1 = { b: 2 };
const source2 = { c: 3, a: 4 }; // a will be overwritten

Object.assign(target, source1, source2);
console.log(target); // { a: 4, b: 2, c: 3 }

// Shallow clone
const clone = Object.assign({}, person);

// ===== SPREAD OPERATOR =====
const clone2 = { ...person };
const merged = { ...source1, ...source2 }; // { b: 2, c: 3, a: 4 }

// ===== OBJECT.FREEZE vs SEAL =====
// freeze - no add, delete, modify
const frozen = Object.freeze({ name: 'John' });
frozen.name = 'Jane';     // Fails silently
frozen.age = 30;          // Fails silently
delete frozen.name;       // Fails silently
console.log(frozen);      // { name: 'John' }

// seal - no add, delete; CAN modify
const sealed = Object.seal({ name: 'John' });
sealed.name = 'Jane';     // Works!
sealed.age = 30;          // Fails silently
delete sealed.name;       // Fails silently
console.log(sealed);      // { name: 'Jane' }

// Check status
console.log(Object.isFrozen(frozen)); // true
console.log(Object.isSealed(sealed)); // true

// ===== PROPERTY DESCRIPTORS =====
const user = {};

Object.defineProperty(user, 'name', {
  value: 'John',
  writable: false,      // Cannot change value
  enumerable: true,     // Shows in for...in
  configurable: false   // Cannot delete or reconfigure
});

user.name = 'Jane'; // Fails silently
console.log(user.name); // "John"

// Multiple properties
Object.defineProperties(user, {
  age: {
    value: 30,
    writable: true,
    enumerable: true
  },
  ssn: {
    value: '123-45-6789',
    enumerable: false // Hidden from iteration
  }
});

console.log(Object.keys(user)); // ['name', 'age'] - ssn hidden

// Get descriptor
console.log(Object.getOwnPropertyDescriptor(user, 'name'));
// { value: 'John', writable: false, enumerable: true, configurable: false }

// ===== GETTERS AND SETTERS =====
const account = {
  _balance: 1000, // Convention: _ means private
  
  get balance() {
    return '$' + this._balance;
  },
  
  set balance(value) {
    if (value < 0) throw new Error('Invalid balance');
    this._balance = value;
  }
};

console.log(account.balance); // "$1000"
account.balance = 2000;
console.log(account.balance); // "$2000"

// ===== COMPUTED PROPERTY NAMES =====
const key = 'dynamic';
const value = 123;

const computed = {
  [key]: value,
  ['key_' + 1]: 'one',
  ['get' + key.charAt(0).toUpperCase() + key.slice(1)]() {
    return this[key];
  }
};

console.log(computed.dynamic);      // 123
console.log(computed.key_1);        // "one"
console.log(computed.getDynamic()); // 123

// ===== SHORTHAND PROPERTIES =====
const name = 'John';
const age = 30;

const shorthand = { name, age }; // Same as { name: name, age: age }

// Method shorthand
const methods = {
  greet() { return 'Hello'; }, // Same as greet: function() {}
  *generator() { yield 1; },
  async fetch() { return await Promise.resolve('data'); }
};

// ===== OPTIONAL CHAINING & NULLISH COALESCING =====
const data = {
  user: {
    profile: {
      name: 'John'
    }
  }
};

// Without optional chaining
const userName = data && data.user && data.user.profile && data.user.profile.name;

// With optional chaining
const userName2 = data?.user?.profile?.name; // "John"
const missing = data?.user?.address?.city;    // undefined (no error)

// Nullish coalescing
const value1 = null ?? 'default';    // "default"
const value2 = undefined ?? 'default'; // "default"
const value3 = 0 ?? 'default';       // 0 (0 is not nullish)
const value4 = '' ?? 'default';      // '' (empty string is not nullish)
const value5 = false ?? 'default';   // false

// Compare with ||
const value6 = 0 || 'default';       // "default" (0 is falsy)`,language:"javascript"},{id:"interview-arrays",title:"Array Methods - Complete Reference",content:`# Array Methods - Interview Questions

## Mutating Methods (modify original)
push, pop, shift, unshift, splice, sort, reverse, fill

## Non-Mutating Methods (return new array)
map, filter, reduce, slice, concat, flat, flatMap

## Search Methods
find, findIndex, indexOf, includes, some, every`,codeExample:`// ===== BASIC METHODS =====
const arr = [1, 2, 3, 4, 5];

// Adding/Removing
arr.push(6);          // [1,2,3,4,5,6] - add to end
arr.pop();            // [1,2,3,4,5] - remove from end
arr.unshift(0);       // [0,1,2,3,4,5] - add to start
arr.shift();          // [1,2,3,4,5] - remove from start

// Splice - mutates!
const removed = arr.splice(2, 1, 'a', 'b'); // Start at 2, remove 1, insert 'a','b'
console.log(arr);     // [1, 2, 'a', 'b', 4, 5]
console.log(removed); // [3]

// Slice - doesn't mutate
const nums = [1, 2, 3, 4, 5];
console.log(nums.slice(1, 3));  // [2, 3]
console.log(nums.slice(-2));    // [4, 5]

// ===== MAP =====
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(n => n * 2);
console.log(doubled); // [2, 4, 6, 8]

// Map with index
const indexed = numbers.map((n, i) => ({ value: n, index: i }));

// ===== FILTER =====
const evens = numbers.filter(n => n % 2 === 0);
console.log(evens); // [2, 4]

// Filter with truthy values
const mixed = [0, 1, '', 'hello', null, undefined, false, true];
const truthy = mixed.filter(Boolean);
console.log(truthy); // [1, 'hello', true]

// ===== REDUCE =====
// Sum
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // 10

// Max
const max = numbers.reduce((a, b) => Math.max(a, b));
console.log(max); // 4

// Group by
const people = [
  { name: 'John', age: 25 },
  { name: 'Jane', age: 25 },
  { name: 'Bob', age: 30 }
];

const grouped = people.reduce((acc, person) => {
  const key = person.age;
  acc[key] = acc[key] || [];
  acc[key].push(person);
  return acc;
}, {});
console.log(grouped);
// { 25: [{...}, {...}], 30: [{...}] }

// Count occurrences
const letters = ['a', 'b', 'a', 'c', 'b', 'a'];
const count = letters.reduce((acc, letter) => {
  acc[letter] = (acc[letter] || 0) + 1;
  return acc;
}, {});
console.log(count); // { a: 3, b: 2, c: 1 }

// Flatten array
const nested = [[1, 2], [3, 4], [5]];
const flat = nested.reduce((acc, curr) => acc.concat(curr), []);
console.log(flat); // [1, 2, 3, 4, 5]

// ===== FIND / FINDINDEX =====
const users = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Jane' }
];

const found = users.find(u => u.id === 2);
console.log(found); // { id: 2, name: 'Jane' }

const index = users.findIndex(u => u.id === 2);
console.log(index); // 1

// ===== SOME / EVERY =====
const nums2 = [1, 2, 3, 4, 5];

console.log(nums2.some(n => n > 3));  // true (at least one)
console.log(nums2.every(n => n > 0)); // true (all)
console.log(nums2.every(n => n > 3)); // false

// ===== FLAT / FLATMAP =====
const deepNested = [1, [2, [3, [4]]]];

console.log(deepNested.flat());     // [1, 2, [3, [4]]]
console.log(deepNested.flat(2));    // [1, 2, 3, [4]]
console.log(deepNested.flat(Infinity)); // [1, 2, 3, 4]

// flatMap = map + flat(1)
const sentences = ['Hello World', 'How are you'];
const words = sentences.flatMap(s => s.split(' '));
console.log(words); // ['Hello', 'World', 'How', 'are', 'you']

// ===== SORT =====
const unsorted = [3, 1, 4, 1, 5, 9];
unsorted.sort(); // Mutates! Default is string comparison
console.log(unsorted); // [1, 1, 3, 4, 5, 9]

// Numeric sort
const numSort = [10, 2, 33, 4].sort((a, b) => a - b);
console.log(numSort); // [2, 4, 10, 33]

// Object sort
const sortedPeople = [...people].sort((a, b) => a.age - b.age);

// ===== INCLUDES / INDEXOF =====
const arr2 = [1, 2, NaN, 4];

console.log(arr2.includes(2));    // true
console.log(arr2.includes(NaN));  // true (handles NaN!)
console.log(arr2.indexOf(2));     // 1
console.log(arr2.indexOf(NaN));   // -1 (doesn't handle NaN)

// ===== FILL / COPYWITHIN =====
const fillArr = [1, 2, 3, 4, 5];
fillArr.fill(0, 2, 4); // Fill with 0 from index 2 to 4
console.log(fillArr); // [1, 2, 0, 0, 5]

// ===== ARRAY.FROM / ARRAY.OF =====
// From - create array from iterable
console.log(Array.from('hello')); // ['h', 'e', 'l', 'l', 'o']
console.log(Array.from({ length: 5 }, (_, i) => i)); // [0, 1, 2, 3, 4]

// Of - create array from arguments
console.log(Array.of(1, 2, 3)); // [1, 2, 3]
console.log(Array(3));          // [empty × 3]
console.log(Array.of(3));       // [3]

// ===== IMPLEMENT ARRAY METHODS =====
Array.prototype.myMap = function(callback) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i], i, this));
  }
  return result;
};

Array.prototype.myFilter = function(callback) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      result.push(this[i]);
    }
  }
  return result;
};

Array.prototype.myReduce = function(callback, initialValue) {
  let acc = initialValue;
  let startIndex = 0;
  
  if (acc === undefined) {
    acc = this[0];
    startIndex = 1;
  }
  
  for (let i = startIndex; i < this.length; i++) {
    acc = callback(acc, this[i], i, this);
  }
  
  return acc;
};`,language:"javascript"},{id:"interview-functions",title:"Functions - All Types",content:`# Functions - Interview Questions

## Function Types
1. Function Declaration
2. Function Expression
3. Arrow Function
4. IIFE
5. Generator Function
6. Async Function

## Key Concepts
- First-class functions
- Higher-order functions
- Pure functions
- Function composition`,codeExample:`// ===== FUNCTION TYPES =====

// 1. Function Declaration - Hoisted
function greet(name) {
  return 'Hello, ' + name;
}

// 2. Function Expression - Not hoisted
const greet2 = function(name) {
  return 'Hello, ' + name;
};

// Named Function Expression
const greet3 = function sayHello(name) {
  return 'Hello, ' + name;
  // sayHello can be used for recursion inside
};

// 3. Arrow Function
const greet4 = (name) => 'Hello, ' + name;

// Arrow with block body
const greet5 = (name) => {
  const greeting = 'Hello';
  return greeting + ', ' + name;
};

// 4. IIFE - Immediately Invoked Function Expression
(function() {
  console.log('I run immediately');
})();

// Arrow IIFE
(() => {
  console.log('Arrow IIFE');
})();

// IIFE with parameters
((name) => {
  console.log('Hello, ' + name);
})('John');

// 5. Generator Function
function* numberGenerator() {
  yield 1;
  yield 2;
  yield 3;
}

const gen = numberGenerator();
console.log(gen.next()); // { value: 1, done: false }
console.log(gen.next()); // { value: 2, done: false }

// 6. Async Function
async function fetchData() {
  const response = await fetch('/api/data');
  return response.json();
}

// ===== ARROW FUNCTIONS DIFFERENCES =====

// No own 'this'
const obj = {
  name: 'Object',
  regular: function() {
    console.log(this.name); // 'Object'
  },
  arrow: () => {
    console.log(this.name); // undefined (global this)
  }
};

// No 'arguments' object
function regular() {
  console.log(arguments); // Works
}

const arrow = () => {
  // console.log(arguments); // ReferenceError
};

// Rest params workaround
const arrowWithArgs = (...args) => {
  console.log(args);
};

// Cannot be used as constructor
const Person = (name) => {
  this.name = name;
};
// new Person('John'); // TypeError: Person is not a constructor

// ===== HIGHER-ORDER FUNCTIONS =====
// Function that takes/returns function

// Takes function
function repeat(n, action) {
  for (let i = 0; i < n; i++) {
    action(i);
  }
}
repeat(3, console.log); // 0, 1, 2

// Returns function
function multiplier(factor) {
  return (number) => number * factor;
}
const double = multiplier(2);
console.log(double(5)); // 10

// ===== FUNCTION COMPOSITION =====
const add10 = x => x + 10;
const multiply2 = x => x * 2;
const subtract5 = x => x - 5;

// Manual composition
const result = subtract5(multiply2(add10(5))); // ((5+10)*2)-5 = 25

// Compose function (right to left)
const compose = (...fns) => (x) => 
  fns.reduceRight((acc, fn) => fn(acc), x);

const combined = compose(subtract5, multiply2, add10);
console.log(combined(5)); // 25

// Pipe function (left to right)
const pipe = (...fns) => (x) => 
  fns.reduce((acc, fn) => fn(acc), x);

const piped = pipe(add10, multiply2, subtract5);
console.log(piped(5)); // 25

// ===== PURE FUNCTIONS =====
// Same input = same output, no side effects

// Pure
function add(a, b) {
  return a + b;
}

// Impure - depends on external state
let multiplier2 = 2;
function impureMultiply(x) {
  return x * multiplier2;
}

// Impure - has side effect
function impureAdd(arr, item) {
  arr.push(item); // Mutates input
  return arr;
}

// Pure alternative
function pureAdd(arr, item) {
  return [...arr, item]; // Returns new array
}

// ===== DEFAULT PARAMETERS =====
function greetUser(name = 'Guest', greeting = 'Hello') {
  return \`\${greeting}, \${name}!\`;
}

console.log(greetUser());           // "Hello, Guest!"
console.log(greetUser('John'));     // "Hello, John!"
console.log(greetUser('John', 'Hi')); // "Hi, John!"

// Default with expressions
function getDefault() {
  return 'default';
}

function test(value = getDefault()) {
  return value;
}

// ===== REST PARAMETERS =====
function sum(...numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}

console.log(sum(1, 2, 3, 4, 5)); // 15

// Must be last parameter
function formatName(title, ...names) {
  return title + ' ' + names.join(' ');
}

console.log(formatName('Mr.', 'John', 'Doe')); // "Mr. John Doe"`,language:"javascript"},{id:"interview-currying",title:"Currying & Partial Application",content:`# Currying & Partial Application - Complete Interview Guide

## What is Currying?
Currying is transforming a function that takes multiple arguments into a sequence of functions, each taking one argument at a time. Instead of calling f(a, b, c), you call f(a)(b)(c).

## Simple Analogy
Think of ordering a custom pizza:
- **Normal function**: "I want a large pepperoni pizza with extra cheese" (all at once)
- **Curried function**: "I want large" → "pepperoni" → "extra cheese" (one choice at a time)

Each step returns a function waiting for the next piece of information!

## Why Do Interviewers Ask About Currying?
- Tests understanding of closures and higher-order functions
- Shows functional programming knowledge
- Common in libraries like Lodash, Ramda, and React (Redux)
- Demonstrates ability to write reusable, composable code

## Real-World Uses
- Configuration functions (logging, API calls)
- Event handlers with pre-set parameters
- Creating specialized functions from general ones
- Function composition and pipelines

---

# UNDERSTANDING CURRYING STEP BY STEP

## Regular Function vs Curried Function
\`\`\`js
// Regular function - takes all arguments at once
function regularAdd(a, b, c) {
  return a + b + c;
}
console.log(regularAdd(1, 2, 3)); // 6

// Curried function - takes one argument at a time
function curriedAdd(a) {
  return function(b) {
    return function(c) {
      return a + b + c;
    };
  };
}
console.log(curriedAdd(1)(2)(3)); // 6

// How it works step by step:
const step1 = curriedAdd(1);    // Returns function waiting for b
const step2 = step1(2);         // Returns function waiting for c
const step3 = step2(3);         // Returns 6
console.log(step1); // [Function]
console.log(step2); // [Function]
console.log(step3); // 6
\`\`\`

## Arrow Function Syntax (Cleaner!)
\`\`\`js
// Regular curried function (verbose)
function curriedAdd(a) {
  return function(b) {
    return function(c) {
      return a + b + c;
    };
  };
}

// Arrow function curried (concise)
const curriedAddArrow = a => b => c => a + b + c;

// Both work the same way
console.log(curriedAdd(1)(2)(3));      // 6
console.log(curriedAddArrow(1)(2)(3)); // 6

// Reading arrow curry: a => b => c => a + b + c
// "Takes a, returns function that takes b, 
//  returns function that takes c, returns a + b + c"
\`\`\`

## Why Does Currying Work? (Closures!)
\`\`\`js
// Currying works because of closures
// Each inner function "remembers" the outer variables

const curriedAdd = a => {
  // 'a' is captured in this closure
  return b => {
    // 'a' and 'b' are captured in this closure
    return c => {
      // 'a', 'b', and 'c' are all available here
      return a + b + c;
    };
  };
};

// When we call curriedAdd(1), it returns a function
// that has access to a=1 via closure

const add1 = curriedAdd(1);
// add1 has a=1 "baked in"

const add1and2 = add1(2);
// add1and2 has a=1, b=2 "baked in"

console.log(add1and2(3)); // 6 (1 + 2 + 3)
console.log(add1and2(10)); // 13 (1 + 2 + 10)
\`\`\`

---

# INTERVIEW FAVORITE: sum(1)(2)(3)

## Basic Implementation
\`\`\`js
// Question: Implement a function where sum(1)(2)(3) returns 6

// Solution 1: Fixed number of arguments
function sum(a) {
  return function(b) {
    return function(c) {
      return a + b + c;
    };
  };
}
console.log(sum(1)(2)(3)); // 6

// Solution 2: Arrow function
const sumArrow = a => b => c => a + b + c;
console.log(sumArrow(1)(2)(3)); // 6
\`\`\`

## Follow-up: Make It Work for Any Number of Arguments
\`\`\`js
// Question: What if we want sum(1)(2)(3)(4)(5)...?

// Solution 1: Call with empty () to get result
function infiniteSum(a) {
  return function(b) {
    if (b === undefined) {
      return a; // No more arguments, return sum
    }
    return infiniteSum(a + b); // Continue summing
  };
}

console.log(infiniteSum(1)(2)(3)(4)()); // 10
console.log(infiniteSum(5)(10)());       // 15

// How it works:
// infiniteSum(1) returns function, stores a=1
// (2) returns infiniteSum(3), stores a=3
// (3) returns infiniteSum(6), stores a=6
// (4) returns infiniteSum(10), stores a=10
// () calls with b=undefined, returns 10
\`\`\`

## Advanced: Using valueOf/toString
\`\`\`js
// Question: Make sum(1)(2)(3) work without final ()

// When JavaScript needs a primitive value (like in arithmetic),
// it calls valueOf() or toString()

function sum(a) {
  const innerFunc = function(b) {
    return sum(a + b);
  };
  
  // Called when JS needs a number
  innerFunc.valueOf = function() {
    return a;
  };
  
  // Called when JS needs a string
  innerFunc.toString = function() {
    return String(a);
  };
  
  return innerFunc;
}

// Works because valueOf is called when coercing to number
console.log(sum(1)(2)(3) + 0);  // 6
console.log(sum(1)(2)(3) == 6); // true
console.log(+sum(1)(2)(3));     // 6

// Works because toString is called
console.log(\`Result: \${sum(1)(2)(3)}\`); // "Result: 6"

// But direct comparison doesn't work (no coercion)
console.log(sum(1)(2)(3) === 6); // false (it's a function!)
console.log(typeof sum(1)(2)(3)); // "function"
\`\`\`

## Using Reduce for Cleaner Code
\`\`\`js
function sum(...args) {
  const total = args.reduce((acc, val) => acc + val, 0);
  
  const innerFunc = function(...moreArgs) {
    return sum(total, ...moreArgs);
  };
  
  innerFunc.valueOf = () => total;
  innerFunc.toString = () => String(total);
  
  return innerFunc;
}

// Now supports multiple arguments at each call!
console.log(sum(1, 2)(3, 4)(5) + 0); // 15
console.log(sum(1)(2)(3)(4)(5) + 0); // 15
\`\`\`

---

# GENERIC CURRY FUNCTION

## The Classic Interview Question
\`\`\`js
// Question: Implement a curry function that can curry any function

function curry(fn) {
  // Return a curried version of fn
  return function curried(...args) {
    // If we have enough arguments, call the original function
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    }
    // Otherwise, return a function that waits for more arguments
    return function(...moreArgs) {
      return curried.apply(this, args.concat(moreArgs));
    };
  };
}

// fn.length gives the number of expected parameters
function add(a, b, c) {
  return a + b + c;
}
console.log(add.length); // 3

// Usage
const curriedAdd = curry(add);

// All these work!
console.log(curriedAdd(1)(2)(3));   // 6 - one at a time
console.log(curriedAdd(1, 2)(3));   // 6 - two then one
console.log(curriedAdd(1)(2, 3));   // 6 - one then two
console.log(curriedAdd(1, 2, 3));   // 6 - all at once
\`\`\`

## Step-by-Step Walkthrough
\`\`\`js
function curry(fn) {
  return function curried(...args) {
    console.log('Called with:', args, 'Need:', fn.length);
    
    if (args.length >= fn.length) {
      console.log('Enough args! Calling original function');
      return fn.apply(this, args);
    }
    
    console.log('Not enough args, returning new function');
    return function(...moreArgs) {
      console.log('More args:', moreArgs);
      return curried.apply(this, args.concat(moreArgs));
    };
  };
}

const add = (a, b, c) => a + b + c;
const curriedAdd = curry(add);

curriedAdd(1)(2)(3);
// Called with: [1] Need: 3
// Not enough args, returning new function
// More args: [2]
// Called with: [1, 2] Need: 3
// Not enough args, returning new function
// More args: [3]
// Called with: [1, 2, 3] Need: 3
// Enough args! Calling original function
// 6
\`\`\`

## Arrow Function Version
\`\`\`js
const curry = fn => {
  const curried = (...args) =>
    args.length >= fn.length
      ? fn(...args)
      : (...moreArgs) => curried(...args, ...moreArgs);
  return curried;
};

// Usage
const multiply = (a, b, c) => a * b * c;
const curriedMultiply = curry(multiply);

console.log(curriedMultiply(2)(3)(4)); // 24
\`\`\`

## Handling Edge Cases
\`\`\`js
function curry(fn) {
  // Handle functions with no parameters
  if (fn.length === 0) {
    return fn;
  }
  
  return function curried(...args) {
    // Handle extra arguments
    if (args.length >= fn.length) {
      return fn.apply(this, args.slice(0, fn.length));
    }
    return function(...moreArgs) {
      return curried.apply(this, args.concat(moreArgs));
    };
  };
}

// Edge case: function with default parameters
// Note: fn.length doesn't count parameters with defaults!
const withDefault = (a, b = 2) => a + b;
console.log(withDefault.length); // 1 (only counts 'a')

const curriedDefault = curry(withDefault);
console.log(curriedDefault(5)); // 7 (uses default b=2)

// Edge case: rest parameters
// fn.length doesn't count rest parameters
const withRest = (a, ...rest) => a + rest.length;
console.log(withRest.length); // 1 (only counts 'a')
\`\`\`

---

# PARTIAL APPLICATION

## What is Partial Application?
Partial application is fixing some arguments of a function and returning a new function that takes the remaining arguments. Unlike currying, you can fix multiple arguments at once.

## Currying vs Partial Application
\`\`\`js
// Original function
function add(a, b, c) {
  return a + b + c;
}

// CURRYING: Transforms into sequence of single-argument functions
// f(a, b, c) → f(a)(b)(c)
const curriedAdd = a => b => c => a + b + c;
console.log(curriedAdd(1)(2)(3)); // 6

// PARTIAL APPLICATION: Pre-fills some arguments
// f(a, b, c) with a=1 → g(b, c)
function partial(fn, ...presetArgs) {
  return function(...laterArgs) {
    return fn(...presetArgs, ...laterArgs);
  };
}

const add1 = partial(add, 1);        // a is fixed to 1
console.log(add1(2, 3));             // 6

const add1and2 = partial(add, 1, 2); // a and b are fixed
console.log(add1and2(3));            // 6
\`\`\`

## Implementing Partial Application
\`\`\`js
// Basic partial application
function partial(fn, ...presetArgs) {
  return function(...laterArgs) {
    return fn(...presetArgs, ...laterArgs);
  };
}

// Example: Greeting function
function greet(greeting, name, punctuation) {
  return \`\${greeting}, \${name}\${punctuation}\`;
}

// Create specialized functions
const sayHello = partial(greet, 'Hello');
console.log(sayHello('John', '!'));     // "Hello, John!"
console.log(sayHello('Jane', '?'));     // "Hello, Jane?"

const sayHelloToJohn = partial(greet, 'Hello', 'John');
console.log(sayHelloToJohn('!'));       // "Hello, John!"
console.log(sayHelloToJohn('...'));     // "Hello, John..."

const exactGreeting = partial(greet, 'Hi', 'Bob', '!');
console.log(exactGreeting());           // "Hi, Bob!"
\`\`\`

## Using bind() for Partial Application
\`\`\`js
// JavaScript's bind() can do partial application!
// First argument is 'this', rest are preset arguments

function greet(greeting, name, punctuation) {
  return \`\${greeting}, \${name}\${punctuation}\`;
}

// Using bind (first arg is 'this' context, use null if not needed)
const sayHi = greet.bind(null, 'Hi');
console.log(sayHi('Jane', '.')); // "Hi, Jane."

const sayHiToJane = greet.bind(null, 'Hi', 'Jane');
console.log(sayHiToJane('!')); // "Hi, Jane!"

// With methods (preserving 'this')
const obj = {
  multiplier: 2,
  multiply(a, b, c) {
    return (a + b + c) * this.multiplier;
  }
};

const multiplyWith5 = obj.multiply.bind(obj, 5);
console.log(multiplyWith5(3, 2)); // (5 + 3 + 2) * 2 = 20
\`\`\`

## Partial Application with Placeholders
\`\`\`js
// Advanced: Allow filling arguments in any order using placeholders

const _ = Symbol('placeholder'); // Unique placeholder

function partialWithPlaceholders(fn, ...presetArgs) {
  return function(...laterArgs) {
    // Replace placeholders with actual arguments
    const args = presetArgs.map(arg => 
      arg === _ ? laterArgs.shift() : arg
    );
    // Add any remaining arguments
    return fn(...args, ...laterArgs);
  };
}

function greet(greeting, name, punctuation) {
  return \`\${greeting}, \${name}\${punctuation}\`;
}

// Fix just the name (middle argument)
const greetJohn = partialWithPlaceholders(greet, _, 'John', _);
console.log(greetJohn('Hello', '!'));  // "Hello, John!"
console.log(greetJohn('Hi', '?'));     // "Hi, John?"

// Fix first and last
const helloWith = partialWithPlaceholders(greet, 'Hello', _, '!');
console.log(helloWith('Jane'));        // "Hello, Jane!"
console.log(helloWith('Bob'));         // "Hello, Bob!"
\`\`\`

---

# PRACTICAL REAL-WORLD EXAMPLES

## Example 1: Logging with Curry
\`\`\`js
// Create a configurable logger
const log = level => component => message => {
  const timestamp = new Date().toISOString();
  console.log(\`[\${timestamp}] [\${level}] [\${component}] \${message}\`);
};

// Create specialized loggers
const errorLog = log('ERROR');
const authErrorLog = errorLog('AUTH');
const dbErrorLog = errorLog('DATABASE');

const infoLog = log('INFO');
const apiInfoLog = infoLog('API');

// Use them
authErrorLog('Invalid credentials');
// [2024-01-15T10:30:00.000Z] [ERROR] [AUTH] Invalid credentials

dbErrorLog('Connection failed');
// [2024-01-15T10:30:00.000Z] [ERROR] [DATABASE] Connection failed

apiInfoLog('Request received');
// [2024-01-15T10:30:00.000Z] [INFO] [API] Request received

// Each specialized logger "remembers" its configuration via closures!
\`\`\`

## Example 2: API URL Builder
\`\`\`js
// Curried URL builder
const createURL = baseURL => endpoint => params => {
  const queryString = new URLSearchParams(params).toString();
  return queryString 
    ? \`\${baseURL}\${endpoint}?\${queryString}\`
    : \`\${baseURL}\${endpoint}\`;
};

// Create specialized builders
const apiURL = createURL('https://api.example.com');
const usersEndpoint = apiURL('/users');
const productsEndpoint = apiURL('/products');

// Build specific URLs
console.log(usersEndpoint({ page: 1, limit: 10 }));
// "https://api.example.com/users?page=1&limit=10"

console.log(usersEndpoint({ id: 123 }));
// "https://api.example.com/users?id=123"

console.log(productsEndpoint({ category: 'electronics', sort: 'price' }));
// "https://api.example.com/products?category=electronics&sort=price"

// Different base URL for testing
const testURL = createURL('http://localhost:3000');
const testUsers = testURL('/users');
console.log(testUsers({ test: true }));
// "http://localhost:3000/users?test=true"
\`\`\`

## Example 3: Event Handler Factory
\`\`\`js
// Curried event handler creator
const createHandler = eventType => element => callback => {
  element.addEventListener(eventType, callback);
  // Return cleanup function
  return () => element.removeEventListener(eventType, callback);
};

// Create specialized handlers
const onClick = createHandler('click');
const onSubmit = createHandler('submit');
const onKeyPress = createHandler('keypress');

// Usage (in a real app with DOM elements)
// const button = document.querySelector('#myButton');
// const form = document.querySelector('#myForm');

// const removeClickListener = onClick(button)(() => {
//   console.log('Button clicked!');
// });

// const removeSubmitListener = onSubmit(form)((e) => {
//   e.preventDefault();
//   console.log('Form submitted!');
// });

// Later: cleanup
// removeClickListener();
// removeSubmitListener();
\`\`\`

## Example 4: Validation Functions
\`\`\`js
// Curried validators
const validate = type => config => value => {
  switch(type) {
    case 'minLength':
      return value.length >= config.min;
    case 'maxLength':
      return value.length <= config.max;
    case 'pattern':
      return config.regex.test(value);
    case 'range':
      return value >= config.min && value <= config.max;
    default:
      return true;
  }
};

// Create specific validators
const minLength = validate('minLength');
const maxLength = validate('maxLength');
const pattern = validate('pattern');
const range = validate('range');

// Create even more specific validators
const minLength5 = minLength({ min: 5 });
const maxLength20 = maxLength({ max: 20 });
const isEmail = pattern({ regex: /^[^s@]+@[^s@]+.[^s@]+$/ });
const isAdult = range({ min: 18, max: 120 });

// Use them
console.log(minLength5('hello'));     // true
console.log(minLength5('hi'));        // false
console.log(isEmail('test@email.com')); // true
console.log(isEmail('invalid'));      // false
console.log(isAdult(25));             // true
console.log(isAdult(15));             // false

// Combine validators
const validateUsername = value => 
  minLength5(value) && maxLength20(value);

console.log(validateUsername('john')); // false (too short)
console.log(validateUsername('john_doe')); // true
\`\`\`

## Example 5: Math Operations
\`\`\`js
// Curried math functions
const add = a => b => a + b;
const multiply = a => b => a * b;
const subtract = a => b => a - b;
const divide = a => b => a / b;
const power = base => exponent => Math.pow(base, exponent);

// Create specialized functions
const add10 = add(10);
const double = multiply(2);
const triple = multiply(3);
const half = divide(2); // Note: divide(2)(10) = 10/2, not 2/10!
const square = power(2); // Hmm, this is exponent 2, not base 2

// Wait, let me fix the divide and power for intuition:
const divideBy = divisor => value => value / divisor;
const powerOf = exponent => base => Math.pow(base, exponent);

const halve = divideBy(2);
const square2 = powerOf(2);
const cube = powerOf(3);

console.log(add10(5));     // 15
console.log(double(7));    // 14
console.log(triple(4));    // 12
console.log(halve(10));    // 5
console.log(square2(5));   // 25
console.log(cube(3));      // 27

// Chain operations
const process = value => cube(double(add10(value)));
console.log(process(5)); // ((5 + 10) * 2)^3 = 30^3 = 27000
\`\`\`

## Example 6: React/Redux Style Patterns
\`\`\`js
// Redux-style action creator (curried)
const createAction = type => payload => ({
  type,
  payload,
  timestamp: Date.now()
});

const addUser = createAction('ADD_USER');
const removeUser = createAction('REMOVE_USER');
const updateUser = createAction('UPDATE_USER');

console.log(addUser({ name: 'John', age: 30 }));
// { type: 'ADD_USER', payload: { name: 'John', age: 30 }, timestamp: ... }

console.log(removeUser({ id: 123 }));
// { type: 'REMOVE_USER', payload: { id: 123 }, timestamp: ... }

// Higher-order component pattern (simplified)
const withLoading = Component => props => {
  if (props.isLoading) {
    return 'Loading...';
  }
  return Component(props);
};

// Usage:
// const EnhancedList = withLoading(List);
\`\`\`

---

# CURRY WITH PLACEHOLDER (ADVANCED)

## Interview Challenge: Implement Placeholder Support
\`\`\`js
// Question: Implement curry that supports placeholders
// curry(fn)(_, 2)(1, 3) should work like fn(1, 2, 3)

const _ = Symbol('placeholder');

function curry(fn) {
  return function curried(...args) {
    // Check if we have enough non-placeholder arguments
    const complete = args.length >= fn.length &&
                     !args.slice(0, fn.length).includes(_);
    
    if (complete) {
      return fn.apply(this, args);
    }
    
    // Return function to accept more arguments
    return function(...newArgs) {
      // Replace placeholders with new arguments
      const mergedArgs = args.map(arg => {
        if (arg === _ && newArgs.length > 0) {
          return newArgs.shift(); // Take from newArgs
        }
        return arg;
      });
      
      // Add any remaining new arguments
      return curried.apply(this, [...mergedArgs, ...newArgs]);
    };
  };
}

// Usage
const join = (a, b, c) => \`\${a}-\${b}-\${c}\`;
const curriedJoin = curry(join);

console.log(curriedJoin(1, 2, 3));      // "1-2-3"
console.log(curriedJoin(1)(2)(3));      // "1-2-3"
console.log(curriedJoin(1, 2)(3));      // "1-2-3"
console.log(curriedJoin(_, 2)(1, 3));   // "1-2-3"
console.log(curriedJoin(_, _, 3)(1)(2)); // "1-2-3"
console.log(curriedJoin(_, 2, _)(1, 3)); // "1-2-3"
console.log(curriedJoin(_, _, _)(1)(2)(3)); // "1-2-3"
\`\`\`

## Step-by-Step Explanation
\`\`\`js
const _ = Symbol('placeholder');

function curry(fn) {
  return function curried(...args) {
    console.log('Current args:', args.map(a => a === _ ? '_' : a));
    
    const complete = args.length >= fn.length &&
                     !args.slice(0, fn.length).includes(_);
    
    console.log('Complete?', complete);
    
    if (complete) {
      return fn.apply(this, args);
    }
    
    return function(...newArgs) {
      console.log('New args:', newArgs);
      
      const mergedArgs = args.map(arg => {
        if (arg === _ && newArgs.length > 0) {
          const replacement = newArgs.shift();
          console.log('Replacing _ with', replacement);
          return replacement;
        }
        return arg;
      });
      
      console.log('Merged args:', mergedArgs.map(a => a === _ ? '_' : a));
      return curried.apply(this, [...mergedArgs, ...newArgs]);
    };
  };
}

const join = (a, b, c) => \`\${a}-\${b}-\${c}\`;
const curriedJoin = curry(join);

curriedJoin(_, 2, _)(1)(3);
// Current args: ['_', 2, '_']
// Complete? false
// New args: [1]
// Replacing _ with 1
// Merged args: [1, 2, '_']
// Current args: [1, 2, '_']
// Complete? false
// New args: [3]
// Replacing _ with 3
// Merged args: [1, 2, 3]
// Current args: [1, 2, 3]
// Complete? true
// "1-2-3"
\`\`\`

---

# FUNCTION COMPOSITION WITH CURRY

## Compose and Pipe
\`\`\`js
// Compose: Right to left execution
const compose = (...fns) => x => fns.reduceRight((acc, fn) => fn(acc), x);

// Pipe: Left to right execution  
const pipe = (...fns) => x => fns.reduce((acc, fn) => fn(acc), x);

// Curried utility functions
const add = a => b => a + b;
const multiply = a => b => a * b;
const subtract = a => b => b - a; // Note: b - a for easier composition

// Create specialized functions
const add5 = add(5);
const double = multiply(2);
const subtract3 = subtract(3);

// Compose them
const processCompose = compose(subtract3, double, add5);
// Reads right to left: add 5, then double, then subtract 3

const processPipe = pipe(add5, double, subtract3);
// Reads left to right: add 5, then double, then subtract 3

console.log(processCompose(10)); // ((10 + 5) * 2) - 3 = 27
console.log(processPipe(10));    // ((10 + 5) * 2) - 3 = 27

// More readable pipeline
const calculateTax = pipe(
  add(100),      // Add base fee
  multiply(1.1), // Add 10% tax
  Math.round     // Round to whole number
);

console.log(calculateTax(500)); // (500 + 100) * 1.1 = 660
\`\`\`

## Real-World Composition Example
\`\`\`js
// Data transformation pipeline
const users = [
  { name: 'John', age: 25, active: true },
  { name: 'Jane', age: 17, active: true },
  { name: 'Bob', age: 30, active: false },
  { name: 'Alice', age: 22, active: true }
];

// Curried array methods
const filter = predicate => array => array.filter(predicate);
const map = transform => array => array.map(transform);
const sort = compareFn => array => [...array].sort(compareFn);

// Curried predicates and transforms
const isActive = user => user.active;
const isAdult = user => user.age >= 18;
const getName = user => user.name;
const alphabetical = (a, b) => a.localeCompare(b);

// Compose the pipeline
const getActiveAdultNames = pipe(
  filter(isActive),
  filter(isAdult),
  map(getName),
  sort(alphabetical)
);

console.log(getActiveAdultNames(users));
// ['Alice', 'John']
\`\`\`

---

# COMMON INTERVIEW QUESTIONS

## Question 1: Implement multiply(2)(3)(4)
\`\`\`js
// Basic solution
const multiply = a => b => c => a * b * c;
console.log(multiply(2)(3)(4)); // 24

// Flexible solution (any number of args)
function multiply(...args) {
  const product = args.reduce((acc, val) => acc * val, 1);
  
  const inner = function(...moreArgs) {
    return multiply(product, ...moreArgs);
  };
  
  inner.valueOf = () => product;
  inner.toString = () => String(product);
  
  return inner;
}

console.log(multiply(2)(3)(4) + 0); // 24
console.log(multiply(2, 3)(4, 5) + 0); // 120
\`\`\`

## Question 2: Implement add(1, 2)(3, 4)(5)
\`\`\`js
// Variable arguments per call
function add(...args) {
  let sum = args.reduce((a, b) => a + b, 0);
  
  const inner = function(...moreArgs) {
    sum += moreArgs.reduce((a, b) => a + b, 0);
    return inner;
  };
  
  inner.valueOf = () => sum;
  inner.toString = () => String(sum);
  
  return inner;
}

console.log(add(1, 2)(3, 4)(5) + 0); // 15
console.log(add(1)(2)(3)(4)(5) + 0); // 15
\`\`\`

## Question 3: What's the Output?
\`\`\`js
const curry = fn => {
  const curried = (...args) =>
    args.length >= fn.length
      ? fn(...args)
      : (...more) => curried(...args, ...more);
  return curried;
};

const sum = curry((a, b, c) => a + b + c);

console.log(sum(1)(2)(3));   // 6
console.log(sum(1, 2)(3));   // 6
console.log(sum(1)(2, 3));   // 6
console.log(sum(1, 2, 3));   // 6
console.log(sum()(1)(2)(3)); // [Function] - empty call returns new function!
console.log(sum(1, 2, 3, 4)); // 6 - extra arg ignored
\`\`\`

## Question 4: Why Use Currying?
\`\`\`js
// Answer: Creates reusable, specialized functions

// Without currying - repetitive
fetch('/api/users?status=active');
fetch('/api/posts?status=active');
fetch('/api/comments?status=active');

// With currying - reusable
const fetchWithStatus = status => endpoint => 
  fetch(\`\${endpoint}?status=\${status}\`);

const fetchActive = fetchWithStatus('active');
fetchActive('/api/users');
fetchActive('/api/posts');
fetchActive('/api/comments');

// Benefits:
// 1. Code reuse
// 2. Better readability
// 3. Easier testing (test each layer separately)
// 4. Function composition
// 5. Delayed execution
\`\`\`

---

# QUICK REFERENCE

## Currying vs Partial Application
| Feature | Currying | Partial Application |
|---------|----------|---------------------|
| Transformation | f(a,b,c) → f(a)(b)(c) | f(a,b,c) → g(c) |
| Arguments per call | One at a time | Any number |
| Returns | Function (until complete) | Function with preset args |
| Use case | Function composition | Creating specialized functions |

## Key Formulas
\`\`\`js
// Basic curry
const curry = a => b => c => a + b + c;

// Generic curry
const curry = fn => (...args) =>
  args.length >= fn.length
    ? fn(...args)
    : (...more) => curry(fn)(...args, ...more);

// Partial application
const partial = (fn, ...preset) => (...later) => fn(...preset, ...later);

// Using bind
const partial = fn.bind(null, arg1, arg2);

// Infinite curry with valueOf
function sum(a) {
  const f = b => sum(a + b);
  f.valueOf = () => a;
  return f;
}
\`\`\``,codeExample:`// Currying & Partial Application Cheat Sheet
// ==========================================

// BASIC CURRY
const add = a => b => c => a + b + c;
add(1)(2)(3); // 6

// GENERIC CURRY FUNCTION
function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn(...args);
    }
    return (...more) => curried(...args, ...more);
  };
}

// PARTIAL APPLICATION
function partial(fn, ...preset) {
  return (...later) => fn(...preset, ...later);
}

// USING BIND FOR PARTIAL
const greet = (a, b, c) => \`\${a}, \${b}\${c}\`;
const sayHello = greet.bind(null, 'Hello');
sayHello('John', '!'); // "Hello, John!"

// INFINITE SUM
function sum(a) {
  return function(b) {
    return b !== undefined ? sum(a + b) : a;
  };
}
sum(1)(2)(3)(); // 6

// WITH VALUEOF (no final call needed)
function sum(a) {
  const f = b => sum(a + b);
  f.valueOf = () => a;
  return f;
}
sum(1)(2)(3) + 0; // 6

// PRACTICAL: LOGGER
const log = level => module => msg =>
  console.log(\`[\${level}] [\${module}] \${msg}\`);
const errorLog = log('ERROR');
const dbError = errorLog('DB');
dbError('Connection failed');

// PRACTICAL: URL BUILDER
const url = base => path => params =>
  \`\${base}\${path}?\${new URLSearchParams(params)}\`;
const api = url('https://api.com');
const users = api('/users');
users({ page: 1 }); // "https://api.com/users?page=1"`,language:"javascript"},{id:"interview-coercion",title:"Type Coercion & Equality",content:`# Type Coercion & Equality - Complete Interview Guide

## What is Type Coercion?
Type coercion is JavaScript automatically converting one data type to another when needed. Think of it like JavaScript being "helpful" by converting values behind the scenes - but this "help" often causes unexpected bugs!

## Why Do Interviewers Love This Topic?
- Tests deep understanding of JavaScript behavior
- Reveals if you know the quirky parts of JS
- Shows awareness of common bug sources
- Essential for debugging weird issues

## Simple Analogy
Imagine you're a translator. When someone speaks French to an English speaker, you translate automatically. JavaScript does the same with data types - it "translates" numbers to strings, strings to numbers, etc. Sometimes the translation makes sense, sometimes it's bizarre!

---

# TYPES IN JAVASCRIPT

## Primitive Types (7 types)
\`\`\`js
// 1. String
const str = "Hello";
console.log(typeof str); // "string"

// 2. Number
const num = 42;
const float = 3.14;
console.log(typeof num); // "number"

// 3. Boolean
const bool = true;
console.log(typeof bool); // "boolean"

// 4. Undefined
let undef;
console.log(typeof undef); // "undefined"

// 5. Null (famous bug!)
const nothing = null;
console.log(typeof nothing); // "object" - THIS IS A BUG!

// 6. Symbol (ES6)
const sym = Symbol('id');
console.log(typeof sym); // "symbol"

// 7. BigInt (ES2020)
const big = 123n;
console.log(typeof big); // "bigint"
\`\`\`

## Non-Primitive Types
\`\`\`js
// Objects
const obj = { name: 'John' };
console.log(typeof obj); // "object"

// Arrays (are objects!)
const arr = [1, 2, 3];
console.log(typeof arr); // "object"
console.log(Array.isArray(arr)); // true - proper way to check

// Functions
const func = function() {};
console.log(typeof func); // "function"

// Special: Date, RegExp, Map, Set - all "object"
console.log(typeof new Date()); // "object"
console.log(typeof /regex/);    // "object"
\`\`\`

## Interview Favorite: typeof Quirks
\`\`\`js
// The famous quirks!
console.log(typeof null);           // "object" (historical bug since 1995!)
console.log(typeof undefined);      // "undefined"
console.log(typeof NaN);            // "number" (Not-a-Number is a number!)
console.log(typeof Infinity);       // "number"
console.log(typeof []);             // "object"
console.log(typeof {});             // "object"
console.log(typeof function(){});   // "function"

// How to properly check types
console.log(Array.isArray([]));           // true
console.log(value === null);              // check for null
console.log(Number.isNaN(NaN));           // true
console.log(Object.prototype.toString.call([])); // "[object Array]"
\`\`\`

---

# EXPLICIT COERCION (Type Casting)

Explicit coercion is when YOU tell JavaScript to convert a type. It's intentional and clear.

## Converting to String
\`\`\`js
// Method 1: String() constructor
console.log(String(123));       // "123"
console.log(String(true));      // "true"
console.log(String(false));     // "false"
console.log(String(null));      // "null"
console.log(String(undefined)); // "undefined"
console.log(String([1, 2, 3])); // "1,2,3"
console.log(String({a: 1}));    // "[object Object]"

// Method 2: .toString() method
console.log((123).toString());  // "123"
console.log(true.toString());   // "true"
// null.toString();              // TypeError!
// undefined.toString();         // TypeError!

// Method 3: Template literal
const num = 42;
console.log(\`\${num}\`);         // "42"

// Method 4: Concatenate with empty string
console.log(123 + '');          // "123"
console.log(true + '');         // "true"
\`\`\`

## Converting to Number
\`\`\`js
// Method 1: Number() constructor
console.log(Number('123'));     // 123
console.log(Number('123.45'));  // 123.45
console.log(Number(''));        // 0
console.log(Number('  '));      // 0 (whitespace only)
console.log(Number('hello'));   // NaN
console.log(Number('123abc'));  // NaN
console.log(Number(true));      // 1
console.log(Number(false));     // 0
console.log(Number(null));      // 0
console.log(Number(undefined)); // NaN
console.log(Number([]));        // 0
console.log(Number([1]));       // 1
console.log(Number([1, 2]));    // NaN
console.log(Number({}));        // NaN

// Method 2: parseInt() and parseFloat()
console.log(parseInt('123'));       // 123
console.log(parseInt('123.45'));    // 123 (truncates)
console.log(parseInt('123abc'));    // 123 (parses until non-digit)
console.log(parseInt('abc123'));    // NaN (starts with non-digit)
console.log(parseInt('  123  '));   // 123 (trims whitespace)
console.log(parseFloat('123.45'));  // 123.45
console.log(parseFloat('3.14more')); // 3.14

// Method 3: Unary plus (+)
console.log(+'123');     // 123
console.log(+'');        // 0
console.log(+true);      // 1
console.log(+false);     // 0
console.log(+null);      // 0
console.log(+undefined); // NaN
console.log(+[]);        // 0
console.log(+{});        // NaN

// Method 4: Multiply by 1 or subtract 0
console.log('123' * 1);  // 123
console.log('123' - 0);  // 123
\`\`\`

## Converting to Boolean
\`\`\`js
// Method 1: Boolean() constructor
console.log(Boolean(1));          // true
console.log(Boolean(0));          // false
console.log(Boolean('hello'));    // true
console.log(Boolean(''));         // false
console.log(Boolean(null));       // false
console.log(Boolean(undefined));  // false
console.log(Boolean([]));         // true (empty array is truthy!)
console.log(Boolean({}));         // true (empty object is truthy!)

// Method 2: Double NOT (!!)
console.log(!!1);          // true
console.log(!!0);          // false
console.log(!!'hello');    // true
console.log(!!'');         // false
console.log(!![]);         // true
console.log(!!null);       // false

// How !! works:
// !1 = false (NOT of truthy is false)
// !!1 = !false = true (NOT of false is true)
\`\`\`

---

# TRUTHY AND FALSY VALUES

## The 7 Falsy Values (MEMORIZE THESE!)
\`\`\`js
// There are exactly 7 falsy values in JavaScript:
console.log(Boolean(false));     // false - the boolean false
console.log(Boolean(0));         // false - zero
console.log(Boolean(-0));        // false - negative zero
console.log(Boolean(0n));        // false - BigInt zero
console.log(Boolean(''));        // false - empty string
console.log(Boolean(null));      // false - null
console.log(Boolean(undefined)); // false - undefined
console.log(Boolean(NaN));       // false - Not a Number

// Memory trick: "0, empty, nothing, and false itself"
\`\`\`

## Everything Else is Truthy
\`\`\`js
// Common truthy values that trick people:
console.log(Boolean([]));           // true - empty array!
console.log(Boolean({}));           // true - empty object!
console.log(Boolean('0'));          // true - string with zero!
console.log(Boolean('false'));      // true - string with "false"!
console.log(Boolean(new Boolean(false))); // true - Boolean object!
console.log(Boolean(-1));           // true - negative numbers
console.log(Boolean(Infinity));     // true
console.log(Boolean(-Infinity));    // true
console.log(Boolean(' '));          // true - string with space
console.log(Boolean('null'));       // true - string "null"
console.log(Boolean(function(){})); // true - functions
console.log(Boolean(new Date()));   // true - objects
console.log(Boolean(/regex/));      // true - regex

// Common interview trap:
if ([]) console.log('Empty array is truthy!');  // This runs!
if ({}) console.log('Empty object is truthy!'); // This runs!
if ('0') console.log('String "0" is truthy!');  // This runs!
\`\`\`

## Truthy/Falsy in Practice
\`\`\`js
// Conditional checking
const user = null;
if (user) {
  console.log('User exists');
} else {
  console.log('No user'); // This runs
}

// Gotcha with 0
const count = 0;
if (count) {
  console.log('Has items');
} else {
  console.log('No items'); // This runs, but 0 might be valid!
}

// Better approach for 0
if (count !== undefined && count !== null) {
  console.log('Count is defined:', count); // Now 0 works
}

// Or use nullish coalescing
const displayCount = count ?? 'No count';
console.log(displayCount); // 0 (not 'No count')
\`\`\`

---

# IMPLICIT COERCION

Implicit coercion is when JavaScript automatically converts types without you asking. This is where the "weird" behavior comes from!

## String Coercion (+ operator with strings)
\`\`\`js
// Rule: If any operand is string, + does concatenation
console.log('5' + 3);         // "53" (3 becomes "3")
console.log(3 + '5');         // "35" (3 becomes "3")
console.log('5' + true);      // "5true"
console.log('5' + false);     // "5false"
console.log('5' + null);      // "5null"
console.log('5' + undefined); // "5undefined"
console.log('5' + [1, 2]);    // "51,2"
console.log('5' + {});        // "5[object Object]"

// Multiple operations (left to right)
console.log(1 + 2 + '3');     // "33" (1+2=3, then 3+"3"="33")
console.log('1' + 2 + 3);     // "123" (string from start)
console.log(1 + '2' + 3);     // "123" (string after '2')

// Interview question:
console.log(1 + 2 + 3 + '4' + 5 + 6);
// Step by step:
// 1 + 2 = 3
// 3 + 3 = 6
// 6 + '4' = '64'
// '64' + 5 = '645'
// '645' + 6 = '6456'
// Answer: "6456"
\`\`\`

## Number Coercion (-, *, /, % operators)
\`\`\`js
// Rule: -, *, /, % always try to convert to numbers
console.log('5' - 3);         // 2
console.log('5' * '2');       // 10
console.log('10' / '2');      // 5
console.log('10' % '3');      // 1
console.log('5' - true);      // 4 (true = 1)
console.log('5' - false);     // 5 (false = 0)
console.log('5' - null);      // 5 (null = 0)
console.log('5' - undefined); // NaN (undefined = NaN)
console.log('5' * []);        // 0 ([] = 0)
console.log('5' * [2]);       // 10 ([2] = 2)
console.log('5' * [1, 2]);    // NaN ([1,2] can't convert)

// Interesting cases
console.log('5' - '3');       // 2
console.log('abc' - 1);       // NaN
console.log('5abc' - 1);      // NaN
\`\`\`

## Boolean Coercion
\`\`\`js
// Logical operators and conditions trigger boolean coercion
if ('hello') {
  console.log('Truthy!'); // Runs
}

// Logical NOT forces boolean
console.log(!0);          // true
console.log!'hello');     // false
console.log(!!'hello');   // true (double NOT = Boolean())

// Comparison with boolean
console.log(true + true);   // 2 (1 + 1)
console.log(true + false);  // 1 (1 + 0)
console.log(true - true);   // 0 (1 - 1)
console.log(false * 10);    // 0 (0 * 10)
\`\`\`

---

# THE + OPERATOR COMPLEXITY

## The Rules
\`\`\`js
// + operator has two modes:
// 1. Addition (when both operands are numbers)
// 2. Concatenation (when any operand is string)

// Rule: If either side is string, concatenate
// Otherwise, convert both to numbers and add

console.log(1 + 1);       // 2 (both numbers)
console.log('1' + '1');   // "11" (both strings)
console.log(1 + '1');     // "11" (one is string)
console.log('1' + 1);     // "11" (one is string)

// What about objects and arrays?
// They get converted to primitives first using ToPrimitive

// Arrays convert to string
console.log([1, 2] + [3, 4]); // "1,23,4"
// Step: [1,2].toString() = "1,2", [3,4].toString() = "3,4"
// Then: "1,2" + "3,4" = "1,23,4"

// Empty array converts to empty string
console.log([] + []);     // ""
// Step: "".toString() = "", "" + "" = ""

// Objects convert to "[object Object]"
console.log({} + {});     // "[object Object][object Object]"
console.log({} + []);     // "[object Object]"
console.log([] + {});     // "[object Object]"
\`\`\`

## The {} + [] Gotcha
\`\`\`js
// This is context-dependent!

// In browser console:
{} + []  // 0
// Why? {} is treated as empty block, not object!
// So it becomes: + [] which is +'' which is 0

// But in expression context:
console.log({} + []); // "[object Object]"
// Here {} is definitely an object

// Force it to be an object:
({}) + []  // "[object Object]"
\`\`\`

---

# EQUALITY OPERATORS (== vs ===)

## Strict Equality (===)
\`\`\`js
// === compares value AND type
// No coercion happens!

console.log(5 === 5);       // true
console.log(5 === '5');     // false (different types)
console.log(true === 1);    // false (different types)
console.log(null === null); // true
console.log(undefined === undefined); // true
console.log(null === undefined);      // false (different types)

// NaN is never equal to anything, including itself!
console.log(NaN === NaN);   // false
console.log(Number.isNaN(NaN)); // true (proper way to check)

// Objects compare by reference, not value
console.log([] === []);     // false (different references)
console.log({} === {});     // false (different references)

const arr = [1, 2, 3];
const sameArr = arr;
console.log(arr === sameArr); // true (same reference)
\`\`\`

## Loose Equality (==)
\`\`\`js
// == compares values with type coercion
// Complex rules apply!

console.log(5 == 5);        // true
console.log(5 == '5');      // true (string converted to number)
console.log(true == 1);     // true (boolean converted to number)
console.log(false == 0);    // true
console.log(null == undefined); // true (special rule!)
console.log(null == null);  // true
console.log(undefined == undefined); // true

// But null is NOT == to other falsy values
console.log(null == 0);     // false
console.log(null == '');    // false
console.log(null == false); // false
console.log(undefined == 0); // false
\`\`\`

## == Coercion Rules
\`\`\`js
// The algorithm (simplified):
// 1. If same type, compare directly
// 2. null == undefined is true
// 3. Number vs String: convert string to number
// 4. Boolean vs anything: convert boolean to number first
// 5. Object vs primitive: convert object to primitive

// Examples with explanation:
console.log('5' == 5);
// String vs Number → '5' becomes 5 → 5 == 5 → true

console.log(true == '1');
// Boolean vs String → true becomes 1 → 1 == '1'
// Number vs String → '1' becomes 1 → 1 == 1 → true

console.log([] == false);
// Object vs Boolean → false becomes 0 → [] == 0
// Object vs Number → [] becomes '' → '' == 0
// String vs Number → '' becomes 0 → 0 == 0 → true

console.log([] == '');
// Object vs String → [] becomes '' → '' == '' → true

console.log([1] == 1);
// Object vs Number → [1] becomes '1' → '1' == 1
// String vs Number → '1' becomes 1 → 1 == 1 → true

console.log([1, 2] == '1,2');
// Object vs String → [1,2] becomes '1,2' → '1,2' == '1,2' → true
\`\`\`

## Interview Favorite: Weird Comparisons
\`\`\`js
console.log([] == ![]);      // true!
// Step by step:
// ![] = false (array is truthy, NOT makes it false)
// [] == false
// [] == 0 (false to number)
// '' == 0 (array to string)
// 0 == 0 → true!

console.log([] == []);       // false (different references)
console.log(![] == []);      // true (as shown above)

console.log('' == false);    // true (both become 0)
console.log('0' == false);   // true ('0' → 0, false → 0)
console.log('' == '0');      // false (both strings, compared directly)

// Transitivity broken!
console.log('' == 0);        // true
console.log(0 == '0');       // true
console.log('' == '0');      // false! (not transitive)

// More weirdness
console.log(false == 'false');  // false ('false' → NaN)
console.log(false == '0');      // true ('0' → 0, false → 0)
console.log(false == undefined); // false
console.log(false == null);     // false

// Recommendation: ALWAYS use === unless you have specific reason for ==
\`\`\`

---

# NaN (Not a Number)

## Understanding NaN
\`\`\`js
// NaN represents a failed number conversion
console.log(Number('hello'));  // NaN
console.log(parseInt('abc'));  // NaN
console.log(Math.sqrt(-1));    // NaN
console.log(0 / 0);            // NaN
console.log(Infinity - Infinity); // NaN

// NaN is the only value not equal to itself
console.log(NaN === NaN);      // false
console.log(NaN == NaN);       // false

// How to check for NaN
// Method 1: Number.isNaN() - RECOMMENDED
console.log(Number.isNaN(NaN));        // true
console.log(Number.isNaN('hello'));    // false (doesn't coerce)
console.log(Number.isNaN(undefined));  // false

// Method 2: isNaN() - NOT recommended (coerces first)
console.log(isNaN(NaN));       // true
console.log(isNaN('hello'));   // true (coerces to NaN first!)
console.log(isNaN(undefined)); // true (coerces to NaN!)

// Method 3: Object.is()
console.log(Object.is(NaN, NaN)); // true

// Method 4: Self comparison (clever trick)
const value = NaN;
console.log(value !== value); // true only for NaN!
\`\`\`

## NaN Propagates
\`\`\`js
// Any operation with NaN produces NaN
console.log(NaN + 1);      // NaN
console.log(NaN * 100);    // NaN
console.log(NaN / NaN);    // NaN
console.log(Math.max(1, 2, NaN)); // NaN

// Except comparison which gives false
console.log(NaN > 0);      // false
console.log(NaN < 0);      // false
console.log(NaN >= 0);     // false
console.log(NaN <= 0);     // false
\`\`\`

---

# COMPARISON OPERATORS QUIRKS

## Comparing Different Types
\`\`\`js
// < > <= >= convert both to numbers (usually)
console.log('5' > 3);       // true ('5' → 5)
console.log('5' < '10');    // false! (string comparison: '5' > '1')
console.log(5 < '10');      // true ('10' → 10)

// String comparison is lexicographic (character by character)
console.log('apple' < 'banana'); // true ('a' < 'b')
console.log('10' < '9');    // true! ('1' < '9')
console.log('10' < 9);      // false (10 < 9)
\`\`\`

## The null/undefined Comparison Trap
\`\`\`js
// This is a famous interview question!
console.log(null == undefined);  // true (special rule)
console.log(null === undefined); // false

// But with comparisons:
console.log(null > 0);   // false (null → 0, 0 > 0)
console.log(null == 0);  // false (special rule: null only == undefined)
console.log(null >= 0);  // true! (null → 0, 0 >= 0)

// So null is NOT > 0, NOT == 0, but IS >= 0???
// This is because == and >= use different algorithms!

// undefined is even weirder
console.log(undefined > 0);  // false (undefined → NaN)
console.log(undefined < 0);  // false (NaN comparison)
console.log(undefined == 0); // false
console.log(undefined >= 0); // false (NaN >= 0 is false)
\`\`\`

## Chained Comparisons Trap
\`\`\`js
// JavaScript doesn't work like math!
console.log(1 < 2 < 3);  // true
// But not for the reason you think!
// 1 < 2 → true
// true < 3 → 1 < 3 → true

console.log(3 > 2 > 1);  // false!
// 3 > 2 → true
// true > 1 → 1 > 1 → false

console.log(1 < 2 < 1);  // true!
// 1 < 2 → true
// true < 1 → 1 < 1 → false... wait, that's false

// Let me recalculate:
console.log(1 < 2);      // true
console.log(true < 1);   // false (1 < 1 is false)
// So 1 < 2 < 1 should be false, let me verify...
// Actually: 1 < 2 < 1
// 1 < 2 = true
// true < 1 = 1 < 1 = false
// Result: false
\`\`\`

---

# SHORT-CIRCUIT EVALUATION

## OR Operator (||)
\`\`\`js
// || returns first truthy value, or last value if all falsy
console.log('hello' || 'default');  // 'hello' (first truthy)
console.log('' || 'default');       // 'default' ('' is falsy)
console.log(0 || 'default');        // 'default' (0 is falsy)
console.log(null || 'default');     // 'default'
console.log(undefined || 'default'); // 'default'
console.log(false || 'default');    // 'default'

// Returns the actual value, not boolean
console.log(false || 0 || '' || 'found'); // 'found'
console.log(false || 0 || '' || null);    // null (last value)

// Practical: Default values
function greet(name) {
  name = name || 'Guest';
  console.log('Hello, ' + name);
}
greet('John');  // 'Hello, John'
greet('');      // 'Hello, Guest' - But what if empty string is valid?
greet(0);       // 'Hello, Guest' - Bug if 0 is a valid name!
\`\`\`

## AND Operator (&&)
\`\`\`js
// && returns first falsy value, or last value if all truthy
console.log('hello' && 'world');    // 'world' (both truthy, returns last)
console.log('' && 'world');         // '' (first falsy)
console.log('hello' && 0 && 'world'); // 0 (first falsy)
console.log(null && 'anything');    // null

// Practical: Conditional execution
const user = { name: 'John' };
user && console.log(user.name); // 'John'

const noUser = null;
noUser && console.log(noUser.name); // Nothing (short-circuits)

// Practical: Conditional rendering (React)
// {isLoggedIn && <Dashboard />}
// {items.length > 0 && <ItemList items={items} />}
\`\`\`

## Nullish Coalescing (??)
\`\`\`js
// ?? only checks for null/undefined, not all falsy values
console.log(0 || 'default');    // 'default' (0 is falsy)
console.log(0 ?? 'default');    // 0 (0 is not null/undefined)

console.log('' || 'default');   // 'default' ('' is falsy)
console.log('' ?? 'default');   // '' ('' is not null/undefined)

console.log(false || 'default'); // 'default'
console.log(false ?? 'default'); // false

console.log(null ?? 'default');  // 'default'
console.log(undefined ?? 'default'); // 'default'

// Use ?? when 0, '', or false are valid values
const count = 0;
const displayCount = count ?? 'No count'; // 0 (correct!)
const wrongCount = count || 'No count';   // 'No count' (wrong!)
\`\`\`

---

# FLOATING POINT PRECISION

## The Famous 0.1 + 0.2 Problem
\`\`\`js
console.log(0.1 + 0.2);          // 0.30000000000000004
console.log(0.1 + 0.2 === 0.3);  // false!

// Why? Binary floating point can't represent 0.1 exactly
// Just like 1/3 can't be represented exactly in decimal

// Other examples:
console.log(0.1 + 0.7);  // 0.7999999999999999
console.log(1.1 + 1.3);  // 2.4000000000000004
console.log(0.3 - 0.1);  // 0.19999999999999998
\`\`\`

## Solutions
\`\`\`js
// Solution 1: Use epsilon comparison
function areEqual(a, b) {
  return Math.abs(a - b) < Number.EPSILON;
}
console.log(areEqual(0.1 + 0.2, 0.3)); // true

// Solution 2: Round to fixed decimal places
console.log((0.1 + 0.2).toFixed(1) === '0.3'); // true
console.log(parseFloat((0.1 + 0.2).toFixed(10))); // 0.3

// Solution 3: Use integers (cents instead of dollars)
const price1 = 10; // cents
const price2 = 20; // cents
const total = (price1 + price2) / 100; // $0.30

// Solution 4: Use a library (decimal.js, big.js)
\`\`\`

---

# CLASSIC INTERVIEW QUESTIONS

## Question 1: The "banana" Question
\`\`\`js
console.log('b' + 'a' + + 'a' + 'a');
// Answer: "baNaNa"

// Explanation:
// 'b' + 'a' = 'ba'
// + 'a' = NaN (unary + tries to convert 'a' to number)
// 'ba' + NaN = 'baNaN'
// 'baNaN' + 'a' = 'baNaNa'
\`\`\`

## Question 2: Array Equality
\`\`\`js
console.log([] == false);  // true
console.log(![] == false); // true
console.log([] == ![]);    // true

// But:
console.log([] == []);     // false
console.log([] === []);    // false
\`\`\`

## Question 3: What Will This Output?
\`\`\`js
console.log(typeof typeof 1);
// Answer: "string"

// Explanation:
// typeof 1 = "number" (a string)
// typeof "number" = "string"
\`\`\`

## Question 4: Double Bang
\`\`\`js
console.log(!!null);       // false
console.log(!!'');         // false
console.log(!!0);          // false
console.log(!!NaN);        // false
console.log(!!undefined);  // false
console.log(!!'false');    // true (non-empty string)
console.log(!!'0');        // true (non-empty string)
console.log(!![]);         // true (empty array is truthy)
console.log(!!{});         // true (empty object is truthy)
\`\`\`

## Question 5: Increment Operators
\`\`\`js
let a = '5';
console.log(++a);  // 6 (converts to number first)
console.log(a);    // 6 (now a number)

let b = '5';
console.log(b++);  // "5" (returns before increment? No!)
// Actually: b++ converts to number, returns 5, then increments
console.log(b);    // 6
\`\`\`

## Question 6: Object Coercion
\`\`\`js
const obj = {
  valueOf() {
    return 42;
  },
  toString() {
    return 'hello';
  }
};

console.log(obj + 1);   // 43 (valueOf used for number context)
console.log(\`\${obj}\`);  // 'hello' (toString used for string context)
console.log(String(obj)); // 'hello'
console.log(Number(obj)); // 42
\`\`\`

---

# BEST PRACTICES

## Avoid Implicit Coercion When Possible
\`\`\`js
// BAD: Relies on implicit coercion
if (value) { }
const display = value || 'default';

// GOOD: Explicit checks
if (value !== null && value !== undefined) { }
if (value != null) { } // OK for null/undefined check
const display = value ?? 'default';
\`\`\`

## Always Use === (Mostly)
\`\`\`js
// Always use ===
if (a === b) { }

// Only exception: checking for null/undefined together
if (value == null) { } // checks both null and undefined
// Equivalent to:
if (value === null || value === undefined) { }
\`\`\`

## Be Explicit with Conversions
\`\`\`js
// BAD: Implicit
const num = +string;
const str = number + '';
const bool = !!value;

// GOOD: Explicit
const num = Number(string);
const num = parseInt(string, 10); // Always specify radix!
const str = String(number);
const bool = Boolean(value);
\`\`\``,codeExample:`// Type Coercion Quick Reference
// ==============================

// FALSY VALUES (memorize these 7!)
// false, 0, -0, 0n, '', null, undefined, NaN

// TRUTHY GOTCHAS
Boolean([]);        // true - empty array!
Boolean({});        // true - empty object!
Boolean('0');       // true - string with zero!
Boolean('false');   // true - string "false"!

// TYPE CONVERSION
String(123);        // "123"
Number('123');      // 123
Boolean(1);         // true
parseInt('42px');   // 42
parseFloat('3.14'); // 3.14

// == vs ===
5 == '5';           // true (coercion)
5 === '5';          // false (strict)
null == undefined;  // true
null === undefined; // false

// NaN checks
NaN === NaN;        // false (always!)
Number.isNaN(NaN);  // true (correct way)
isNaN('hello');     // true (wrong - coerces first)

// || vs ??
0 || 'default';     // 'default' (0 is falsy)
0 ?? 'default';     // 0 (only null/undefined)

// Classic traps
[] + [];            // ""
[] + {};            // "[object Object]"
{} + [];            // 0 or "[object Object]"
0.1 + 0.2 === 0.3;  // false!

// The "banana" trick
'b' + 'a' + + 'a' + 'a'; // "baNaNa"

// Type checking
typeof null;        // "object" (bug!)
typeof NaN;         // "number"
typeof [];          // "object"
Array.isArray([]);  // true`,language:"javascript"},{id:"interview-es6",title:"ES6+ Features Overview",content:`# ES6+ Features - Complete Interview Guide
## What is ES6?
ES6 (ECMAScript 2015) is a major update to JavaScript that introduced many new features we use daily. Think of it as JavaScript getting a massive upgrade with new tools that make coding easier and cleaner.
## Why Do Interviewers Ask About ES6?
- Shows you write modern JavaScript
- Many features solve common problems elegantly
- Understanding ES6+ is essential for React, Node.js, and modern frameworks
## Timeline of Features
- **ES6 (2015)**: let/const, arrow functions, classes, promises, destructuring, spread/rest, modules, symbols, Map/Set
- **ES7 (2016)**: Array.includes(), exponentiation operator (**)
- **ES8 (2017)**: async/await, Object.entries/values, string padding
- **ES9 (2018)**: Rest/spread for objects, Promise.finally()
- **ES10 (2019)**: Array.flat(), Object.fromEntries(), optional catch binding
- **ES11 (2020)**: Optional chaining (?.), nullish coalescing (??), BigInt, Promise.allSettled()
- **ES12 (2021)**: String.replaceAll(), Promise.any(), logical assignment operators
---
# LET, CONST, AND VAR
## The Problem with var
\`\`\`js
// var has function scope, not block scope
function varProblem() {
  if (true) {
    var x = 10;
  }
  console.log(x); // 10 - x is accessible outside the block!
}
// var gets hoisted
console.log(hoisted); // undefined (not error!)
var hoisted = 'I am hoisted';
// var allows redeclaration
var name = 'John';
var name = 'Jane'; // No error - can cause bugs!
\`\`\`
## let and const Fix These Issues
\`\`\`js
// Block scoped
if (true) {
  let blockScoped = 'only here';
  const alsoBlockScoped = 'only here too';
}
// console.log(blockScoped); // ReferenceError!
// No hoisting (actually hoisted but in "temporal dead zone")
// console.log(tdzVariable); // ReferenceError!
let tdzVariable = 'value';
// No redeclaration
let unique = 'first';
// let unique = 'second'; // SyntaxError!
// const must be initialized and can't be reassigned
const PI = 3.14159;
// PI = 3.14; // TypeError!
// const EMPTY; // SyntaxError - must initialize
// BUT const objects/arrays can be mutated
const person = { name: 'John' };
person.name = 'Jane'; // This works!
person.age = 30;      // This works!
// person = {};       // This fails - can't reassign
const numbers = [1, 2, 3];
numbers.push(4);      // This works! [1, 2, 3, 4]
// numbers = [];      // This fails - can't reassign
\`\`\`
## Interview Question: When to Use What?
\`\`\`js
// Use const by default (most variables don't need reassignment)
const API_URL = 'https://api.example.com';
const user = { name: 'John' };
const items = [1, 2, 3];
// Use let only when you need to reassign
let counter = 0;
counter++;
let status = 'pending';
status = 'completed';
// Never use var in modern JavaScript
\`\`\`
---
# ARROW FUNCTIONS
## Basic Syntax
\`\`\`js
// Regular function
function add(a, b) {
  return a + b;
}
// Arrow function - full syntax
const addArrow = (a, b) => {
  return a + b;
};
// Arrow function - implicit return (single expression)
const addShort = (a, b) => a + b;
// Single parameter - no parentheses needed
const double = x => x * 2;
// No parameters - empty parentheses required
const greet = () => 'Hello!';
// Returning object - wrap in parentheses
const makeUser = (name, age) => ({ name, age });
console.log(makeUser('John', 30)); // { name: 'John', age: 30 }
\`\`\`
## The "this" Difference (VERY IMPORTANT!)
\`\`\`js
// Regular function: "this" depends on HOW it's called
const obj1 = {
  name: 'Object 1',
  regularMethod: function() {
    console.log(this.name); // 'Object 1'
    setTimeout(function() {
      console.log(this.name); // undefined! "this" is window/undefined
    }, 100);
  }
};
// Arrow function: "this" is inherited from surrounding scope (lexical)
const obj2 = {
  name: 'Object 2',
  arrowMethod: function() {
    console.log(this.name); // 'Object 2'
    setTimeout(() => {
      console.log(this.name); // 'Object 2'! Arrow inherits "this"
    }, 100);
  }
};
// Old workaround before arrow functions
const obj3 = {
  name: 'Object 3',
  method: function() {
    const self = this; // Save reference
    setTimeout(function() {
      console.log(self.name); // 'Object 3'
    }, 100);
  }
};
\`\`\`
## When NOT to Use Arrow Functions
\`\`\`js
// 1. Object methods that need their own "this"
const person = {
  name: 'John',
  // BAD - arrow doesn't have its own "this"
  greetArrow: () => {
    console.log('Hello, ' + this.name); // undefined!
  },
  // GOOD - regular function has its own "this"
  greetRegular() {
    console.log('Hello, ' + this.name); // 'Hello, John'
  }
};
// 2. Constructor functions
// const Person = (name) => { this.name = name; }; // Can't use "new"
// new Person('John'); // TypeError!
// 3. When you need "arguments" object
function regularWithArgs() {
  console.log(arguments); // Works!
}
const arrowWithArgs = () => {
  // console.log(arguments); // ReferenceError!
};
// Use rest parameters instead
const arrowWithRest = (...args) => {
  console.log(args); // Works!
};
\`\`\`
---
# TEMPLATE LITERALS
## Basic Usage
\`\`\`js
const name = 'John';
const age = 30;
// Old way - string concatenation
const oldMessage = 'Hello, ' + name + '! You are ' + age + ' years old.';
// New way - template literals
const newMessage = \`Hello, \${name}! You are \${age} years old.\`;
// Expressions inside \${}
const price = 19.99;
const quantity = 3;
const total = \`Total: $\${(price * quantity).toFixed(2)}\`; // 'Total: $59.97'
// Function calls inside \${}
const upper = \`Name: \${name.toUpperCase()}\`; // 'Name: JOHN'
// Conditional expressions
const greeting = \`Hello, \${age >= 18 ? 'Adult' : 'Minor'}!\`;
\`\`\`
## Multi-line Strings
\`\`\`js
// Old way - concatenation or escape characters
const oldMulti = 'Line 1\\n' +
                 'Line 2\\n' +
                 'Line 3';
// New way - just press Enter
const newMulti = \`
  Line 1
  Line 2
  Line 3
\`;
// Practical: HTML templates
const html = \`
  <div class="card">
    <h2>\${name}</h2>
    <p>Age: \${age}</p>
  </div>
\`;
\`\`\`
## Tagged Templates (Advanced - But Asked in Interviews!)
\`\`\`js
// Tagged template is a function that processes template literal
function highlight(strings, ...values) {
  // strings: array of string parts
  // values: array of interpolated values
  console.log(strings); // ['Hello, ', '! You are ', ' years old.']
  console.log(values);  // ['John', 30]
  return strings.reduce((result, str, i) => {
    const value = values[i] ? \`<b>\${values[i]}</b>\` : '';
    return result + str + value;
  }, '');
}
const highlighted = highlight\`Hello, \${name}! You are \${age} years old.\`;
console.log(highlighted); // 'Hello, <b>John</b>! You are <b>30</b> years old.'
// Practical: SQL query sanitization
function sql(strings, ...values) {
  // Escape values to prevent SQL injection
  const escaped = values.map(v => 
    typeof v === 'string' ? v.replace(/'/g, "''") : v
  );
  return strings.reduce((result, str, i) => 
    result + str + (escaped[i] ?? ''), ''
  );
}
const userInput = "John'; DROP TABLE users; --";
const query = sql\`SELECT * FROM users WHERE name = '\${userInput}'\`;
// Safely escaped!
// Practical: Styled components (React)
// const Button = styled.button\`
//   background: \${props => props.primary ? 'blue' : 'white'};
//   color: \${props => props.primary ? 'white' : 'blue'};
// \`;
\`\`\`
---
# DESTRUCTURING
## Array Destructuring
\`\`\`js
const numbers = [1, 2, 3, 4, 5];
// Basic destructuring
const [a, b, c] = numbers;
console.log(a, b, c); // 1, 2, 3
// Skip elements
const [first, , third] = numbers;
console.log(first, third); // 1, 3
// Rest pattern - collect remaining
const [head, ...tail] = numbers;
console.log(head); // 1
console.log(tail); // [2, 3, 4, 5]
// Default values
const [x, y, z = 0] = [1, 2];
console.log(x, y, z); // 1, 2, 0
// Swapping variables (classic interview question!)
let m = 1, n = 2;
[m, n] = [n, m];
console.log(m, n); // 2, 1
// Nested arrays
const nested = [1, [2, 3], 4];
const [one, [two, three], four] = nested;
console.log(two, three); // 2, 3
// From function return
function getCoordinates() {
  return [10, 20];
}
const [lat, lng] = getCoordinates();
\`\`\`
## Object Destructuring
\`\`\`js
const person = {
  name: 'John',
  age: 30,
  city: 'New York',
  country: 'USA'
};
// Basic destructuring
const { name, age } = person;
console.log(name, age); // 'John', 30
// Rename variables
const { name: personName, age: personAge } = person;
console.log(personName, personAge); // 'John', 30
// Default values
const { name: n, phone = 'N/A' } = person;
console.log(phone); // 'N/A'
// Rest pattern
const { name: userName, ...otherInfo } = person;
console.log(otherInfo); // { age: 30, city: 'New York', country: 'USA' }
// Nested destructuring
const data = {
  user: {
    profile: {
      firstName: 'John',
      lastName: 'Doe'
    }
  }
};
const { user: { profile: { firstName, lastName } } } = data;
console.log(firstName, lastName); // 'John', 'Doe'
// With default for nested
const { user: { profile: { middleName = 'N/A' } } } = data;
console.log(middleName); // 'N/A'
\`\`\`
## Function Parameter Destructuring
\`\`\`js
// Object parameter destructuring
function greet({ name, age = 18, city = 'Unknown' }) {
  return \`\${name}, \${age}, from \${city}\`;
}
console.log(greet({ name: 'John', age: 30 }));
// 'John, 30, from Unknown'
// With renaming
function processUser({ name: userName, id: oderId }) {
  console.log(userName, oderId);
}
// Array parameter destructuring
function getFirstTwo([first, second]) {
  return first + second;
}
console.log(getFirstTwo([10, 20, 30])); // 30
// Common pattern: Options object
function createServer({
  port = 3000,
  host = 'localhost',
  protocol = 'http'
} = {}) {
  return \`\${protocol}://\${host}:\${port}\`;
}
console.log(createServer()); // 'http://localhost:3000'
console.log(createServer({ port: 8080 })); // 'http://localhost:8080'
// React props destructuring
// function Component({ title, onClick, children }) {
//   return <button onClick={onClick}>{title}{children}</button>;
// }
\`\`\`
## Interview Favorite: Complex Destructuring
\`\`\`js
// API response handling
const apiResponse = {
  status: 200,
  data: {
    users: [
      { id: 1, name: 'John', email: 'john@email.com' },
      { id: 2, name: 'Jane', email: 'jane@email.com' }
    ],
    pagination: {
      page: 1,
      total: 100
    }
  }
};
// Extract what you need
const {
  status,
  data: {
    users: [firstUser, secondUser],
    pagination: { page, total }
  }
} = apiResponse;
console.log(status);    // 200
console.log(firstUser); // { id: 1, name: 'John', email: 'john@email.com' }
console.log(page);      // 1
\`\`\`
---
# SYMBOLS
## What are Symbols?
Symbols are a primitive data type that creates unique identifiers. Think of them as guaranteed unique IDs that can never collide with anything else.
## Basic Symbol Usage
\`\`\`js
// Creating symbols
const sym1 = Symbol('description');
const sym2 = Symbol('description');
// Even with same description, symbols are unique
console.log(sym1 === sym2); // false
console.log(sym1 === sym1); // true
// Symbols as object keys
const SECRET_KEY = Symbol('secret');
const user = {
  name: 'John',
  age: 30,
  [SECRET_KEY]: 'hidden password'
};
// Regular iteration doesn't show symbols
console.log(Object.keys(user));    // ['name', 'age']
console.log(Object.values(user));  // ['John', 30]
console.log(JSON.stringify(user)); // '{"name":"John","age":30}'
// But you can access it directly
console.log(user[SECRET_KEY]); // 'hidden password'
// Get all symbol keys
console.log(Object.getOwnPropertySymbols(user)); // [Symbol(secret)]
\`\`\`
## Why Use Symbols?
\`\`\`js
// 1. Prevent property name collisions
const INTERNAL_STATE = Symbol('internal');
class MyClass {
  constructor() {
    this[INTERNAL_STATE] = 'private-ish';
  }
}
// 2. Define "hidden" properties
const metadata = Symbol('metadata');
const document = {
  title: 'My Document',
  content: 'Hello World',
  [metadata]: { created: new Date(), author: 'John' }
};
// 3. Create unique constants
const STATUS = {
  PENDING: Symbol('pending'),
  APPROVED: Symbol('approved'),
  REJECTED: Symbol('rejected')
};
// Can never accidentally equal something else
\`\`\`
## Global Symbol Registry
\`\`\`js
// Symbol.for() creates/retrieves from global registry
const globalSym1 = Symbol.for('app.id');
const globalSym2 = Symbol.for('app.id');
console.log(globalSym1 === globalSym2); // true! Same symbol
// Get key from symbol
console.log(Symbol.keyFor(globalSym1)); // 'app.id'
// Regular Symbol() not in registry
const localSym = Symbol('local');
console.log(Symbol.keyFor(localSym)); // undefined
\`\`\`
## Well-Known Symbols (Advanced)
\`\`\`js
// Symbol.iterator - makes object iterable
const customIterable = {
  data: [1, 2, 3],
  [Symbol.iterator]() {
    let index = 0;
    return {
      next: () => {
        if (index < this.data.length) {
          return { value: this.data[index++], done: false };
        }
        return { done: true };
      }
    };
  }
};
for (const item of customIterable) {
  console.log(item); // 1, 2, 3
}
// Symbol.toStringTag - customize Object.prototype.toString()
class MyClass {
  get [Symbol.toStringTag]() {
    return 'MyClass';
  }
}
console.log(Object.prototype.toString.call(new MyClass())); 
// '[object MyClass]'
\`\`\`
---
# MAP AND SET
## Map - Key-Value Pairs with Any Key Type
\`\`\`js
// Object limitation: keys are always strings
const objMap = {};
objMap[1] = 'one';
objMap['1'] = 'string one';
console.log(objMap); // { '1': 'string one' } - key converted to string!
// Map can use any type as key
const map = new Map();
// Different key types
map.set('string', 'value1');
map.set(1, 'value2');
map.set(true, 'value3');
map.set({ key: 'obj' }, 'value4');
map.set(function() {}, 'value5');
console.log(map.get('string')); // 'value1'
console.log(map.get(1));        // 'value2'
console.log(map.size);          // 5
// Map methods
console.log(map.has('string')); // true
map.delete('string');
console.log(map.has('string')); // false
// Initialize with array of arrays
const map2 = new Map([
  ['name', 'John'],
  ['age', 30],
  ['city', 'NYC']
]);
// Iteration
for (const [key, value] of map2) {
  console.log(\`\${key}: \${value}\`);
}
// Convert to array
const entries = [...map2];          // [['name','John'], ['age',30], ['city','NYC']]
const keys = [...map2.keys()];      // ['name', 'age', 'city']
const values = [...map2.values()];  // ['John', 30, 'NYC']
// Clear all entries
map2.clear();
\`\`\`
## Map vs Object - When to Use Which?
\`\`\`js
// Use Map when:
// 1. Keys are not strings
// 2. You need to iterate in insertion order
// 3. You need frequent additions/deletions
// 4. You need to know the size easily
// Use Object when:
// 1. Simple string keys
// 2. You need JSON serialization
// 3. You need to work with object methods
// 4. You're using it as a record/struct
// Map preserves insertion order
const orderMap = new Map();
orderMap.set('z', 1);
orderMap.set('a', 2);
orderMap.set('m', 3);
console.log([...orderMap.keys()]); // ['z', 'a', 'm'] - order preserved!
// Object also preserves order (for string keys) in modern JS
// But numeric keys are sorted numerically
const obj = { 3: 'three', 1: 'one', 2: 'two' };
console.log(Object.keys(obj)); // ['1', '2', '3'] - sorted!
\`\`\`
## Set - Unique Values Only
\`\`\`js
// Creating a Set
const set = new Set();
set.add(1);
set.add(2);
set.add(2); // Duplicate - ignored!
set.add(3);
console.log(set); // Set { 1, 2, 3 }
console.log(set.size); // 3
// Initialize with array
const set2 = new Set([1, 2, 2, 3, 3, 3, 4, 4, 4, 4]);
console.log([...set2]); // [1, 2, 3, 4]
// Most common use: Remove duplicates
const duplicates = [1, 2, 2, 3, 3, 3, 'a', 'a', 'b'];
const unique = [...new Set(duplicates)];
console.log(unique); // [1, 2, 3, 'a', 'b']
// Set methods
set.has(2);     // true
set.delete(2);  // removes 2
set.clear();    // removes all
// Iteration
const fruits = new Set(['apple', 'banana', 'orange']);
for (const fruit of fruits) {
  console.log(fruit);
}
// Set operations (not built-in, but easy to implement)
const setA = new Set([1, 2, 3, 4]);
const setB = new Set([3, 4, 5, 6]);
// Union
const union = new Set([...setA, ...setB]);
console.log([...union]); // [1, 2, 3, 4, 5, 6]
// Intersection
const intersection = new Set([...setA].filter(x => setB.has(x)));
console.log([...intersection]); // [3, 4]
// Difference
const difference = new Set([...setA].filter(x => !setB.has(x)));
console.log([...difference]); // [1, 2]
\`\`\`
## WeakMap and WeakSet
\`\`\`js
// WeakMap - keys must be objects, garbage collected when no other references
// Use case: Storing metadata about objects without preventing garbage collection
let user = { name: 'John' };
const weakMap = new WeakMap();
weakMap.set(user, 'some metadata');
console.log(weakMap.get(user)); // 'some metadata'
user = null; // Now the object can be garbage collected
// The weakMap entry is automatically removed
// WeakSet - same concept for unique values
let obj = { data: 'test' };
const weakSet = new WeakSet();
weakSet.add(obj);
console.log(weakSet.has(obj)); // true
obj = null; // Object can be garbage collected
// Practical use: Track visited objects
const visited = new WeakSet();
function processObject(obj) {
  if (visited.has(obj)) {
    return; // Already processed
  }
  visited.add(obj);
  // Process object...
}
\`\`\`
---
# OPTIONAL CHAINING (?.)
## The Problem It Solves
\`\`\`js
const user = {
  name: 'John',
  address: {
    city: 'NYC'
  }
};
// Old way - verbose null checks
const city = user && user.address && user.address.city;
// Or with ternary
const city2 = user ? (user.address ? user.address.city : undefined) : undefined;
// New way - optional chaining
const city3 = user?.address?.city; // 'NYC'
\`\`\`
## Different Usage Patterns
\`\`\`js
const user = {
  name: 'John',
  address: {
    city: 'NYC',
    coordinates: {
      lat: 40.7128,
      lng: -74.0060
    }
  },
  friends: ['Alice', 'Bob'],
  greet() {
    return 'Hello!';
  }
};
// Property access
console.log(user?.name);                    // 'John'
console.log(user?.email);                   // undefined
console.log(user?.address?.city);           // 'NYC'
console.log(user?.address?.country);        // undefined
console.log(user?.phone?.number);           // undefined (no error!)
// Method calls
console.log(user?.greet?.());               // 'Hello!'
console.log(user?.nonExistent?.());         // undefined
// Array access
console.log(user?.friends?.[0]);            // 'Alice'
console.log(user?.friends?.[10]);           // undefined
console.log(user?.enemies?.[0]);            // undefined
// Combining with nullish coalescing
const country = user?.address?.country ?? 'Unknown';
console.log(country); // 'Unknown'
\`\`\`
## Common Interview Patterns
\`\`\`js
// API response handling
const response = {
  data: {
    users: [
      { id: 1, profile: { avatar: 'url1' } },
      { id: 2 }
    ]
  }
};
const firstAvatar = response?.data?.users?.[0]?.profile?.avatar;
console.log(firstAvatar); // 'url1'
const secondAvatar = response?.data?.users?.[1]?.profile?.avatar;
console.log(secondAvatar); // undefined (profile doesn't exist)
// With functions
const callback = null;
callback?.(); // Does nothing, no error
// Delete with optional chaining
delete user?.address?.temp;
// Cannot use with assignment
// user?.name = 'Jane'; // SyntaxError!
\`\`\`
---
# NULLISH COALESCING (??)
## The Problem with ||
\`\`\`js
// || returns first truthy value
// Problem: 0, '', false are valid values but falsy!
const count = 0;
const message = '';
const isActive = false;
// Using || - wrong results!
console.log(count || 10);      // 10 (but we wanted 0!)
console.log(message || 'N/A'); // 'N/A' (but we wanted ''!)
console.log(isActive || true); // true (but we wanted false!)
// Using ?? - correct results!
console.log(count ?? 10);      // 0 (correct!)
console.log(message ?? 'N/A'); // '' (correct!)
console.log(isActive ?? true); // false (correct!)
\`\`\`
## How It Works
\`\`\`js
// ?? only checks for null or undefined
// Returns right side only if left side is null/undefined
console.log(null ?? 'default');      // 'default'
console.log(undefined ?? 'default'); // 'default'
console.log(0 ?? 'default');         // 0
console.log('' ?? 'default');        // ''
console.log(false ?? 'default');     // false
console.log(NaN ?? 'default');       // NaN
// Comparison
const value = 0;
console.log(value || 100); // 100 (treats 0 as falsy)
console.log(value ?? 100); // 0 (only null/undefined trigger default)
\`\`\`
## Combining with Optional Chaining
\`\`\`js
const config = {
  settings: {
    timeout: 0,
    retries: null
  }
};
// Get timeout (0 is valid)
const timeout = config?.settings?.timeout ?? 5000;
console.log(timeout); // 0 (not 5000!)
// Get retries (null should use default)
const retries = config?.settings?.retries ?? 3;
console.log(retries); // 3
// Get missing property
const maxSize = config?.settings?.maxSize ?? 1024;
console.log(maxSize); // 1024
\`\`\`
## Logical Assignment Operators (ES2021)
\`\`\`js
// Nullish assignment (??=)
let a = null;
a ??= 'default';
console.log(a); // 'default'
let b = 'existing';
b ??= 'default';
console.log(b); // 'existing'
// Logical OR assignment (||=)
let c = '';
c ||= 'default';
console.log(c); // 'default' (empty string is falsy)
// Logical AND assignment (&&=)
let d = 'value';
d &&= 'new value';
console.log(d); // 'new value' (only assigns if truthy)
let e = null;
e &&= 'new value';
console.log(e); // null (doesn't assign if falsy)
\`\`\`
---
# BIGINT
## Why Do We Need BigInt?
\`\`\`js
// JavaScript numbers have a safe integer limit
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
// Beyond this, precision is lost
console.log(9007199254740991 + 1); // 9007199254740992 (correct)
console.log(9007199254740991 + 2); // 9007199254740992 (WRONG!)
console.log(9007199254740991 + 3); // 9007199254740994 (WRONG!)
// BigInt solves this
console.log(9007199254740991n + 1n); // 9007199254740992n (correct)
console.log(9007199254740991n + 2n); // 9007199254740993n (correct!)
console.log(9007199254740991n + 3n); // 9007199254740994n (correct!)
\`\`\`
## Creating BigInt
\`\`\`js
// Using n suffix
const big1 = 9007199254740991n;
const big2 = 123456789012345678901234567890n;
// Using BigInt() constructor
const big3 = BigInt(9007199254740991);
const big4 = BigInt('123456789012345678901234567890');
// Operations
console.log(big1 + 1n);  // 9007199254740992n
console.log(big1 * 2n);  // 18014398509481982n
console.log(big1 / 2n);  // 4503599627370495n (truncates decimal)
console.log(big1 % 3n);  // 1n
console.log(big1 ** 2n); // 81129638414606663681390495662081n
\`\`\`
## BigInt Limitations
\`\`\`js
// Cannot mix BigInt and Number
const big = 10n;
const num = 5;
// console.log(big + num); // TypeError!
// Must convert first
console.log(big + BigInt(num)); // 15n
console.log(Number(big) + num); // 15
// Cannot use Math methods
// Math.max(1n, 2n); // TypeError!
// Comparison works across types
console.log(10n > 5);   // true
console.log(10n === 10); // false (different types)
console.log(10n == 10);  // true (loose equality)
// JSON.stringify doesn't work
// JSON.stringify({ big: 10n }); // TypeError!
// Workaround
const data = { big: 10n };
JSON.stringify(data, (key, value) =>
  typeof value === 'bigint' ? value.toString() : value
);
\`\`\`
---
# PROMISE METHODS (ADVANCED)
## Promise.all vs Promise.allSettled vs Promise.race vs Promise.any
\`\`\`js
const promise1 = Promise.resolve(1);
const promise2 = Promise.resolve(2);
const promise3 = Promise.reject('Error!');
// Promise.all - fails if ANY promise rejects
Promise.all([promise1, promise2])
  .then(results => console.log(results)); // [1, 2]
Promise.all([promise1, promise2, promise3])
  .catch(error => console.log(error)); // 'Error!'
// Promise.allSettled - waits for all, never rejects
Promise.allSettled([promise1, promise2, promise3])
  .then(results => console.log(results));
// [
//   { status: 'fulfilled', value: 1 },
//   { status: 'fulfilled', value: 2 },
//   { status: 'rejected', reason: 'Error!' }
// ]
// Promise.race - returns first settled (fulfilled or rejected)
Promise.race([
  new Promise(r => setTimeout(() => r('slow'), 100)),
  new Promise(r => setTimeout(() => r('fast'), 50))
]).then(result => console.log(result)); // 'fast'
// Promise.any - returns first fulfilled (ignores rejections)
Promise.any([
  Promise.reject('Error 1'),
  Promise.resolve('Success!'),
  Promise.reject('Error 2')
]).then(result => console.log(result)); // 'Success!'
// Promise.any fails only if ALL reject
Promise.any([
  Promise.reject('Error 1'),
  Promise.reject('Error 2')
]).catch(error => console.log(error)); // AggregateError
\`\`\`
---
# QUICK REFERENCE SUMMARY
| Feature | Purpose | Example |
|---------|---------|---------|
| let/const | Block scoped variables | const x = 1; let y = 2; |
| Arrow functions | Shorter syntax, lexical this | const fn = (x) => x * 2 |
| Template literals | String interpolation | \\\`Hello \${name}\\\` |
| Destructuring | Extract values | const {a, b} = obj |
| Spread | Expand elements | [...arr1, ...arr2] |
| Rest | Collect elements | function(...args) |
| Symbol | Unique identifier | Symbol('id') |
| Map | Key-value (any key type) | new Map() |
| Set | Unique values | new Set([1,2,2,3]) |
| Optional chaining | Safe property access | obj?.prop?.nested |
| Nullish coalescing | Default for null/undefined | value ?? 'default' |
| BigInt | Large integers | 9007199254740991n |`,codeExample:`// ES6+ Quick Cheat Sheet
// ======================
// let/const (block scoped)
const PI = 3.14;
let count = 0;
// Arrow functions
const add = (a, b) => a + b;
const double = x => x * 2;
// Template literals
const greeting = \`Hello, \${name}!\`;
// Destructuring
const [first, ...rest] = [1, 2, 3, 4];
const { name, age = 18 } = person;
// Spread operator
const merged = [...arr1, ...arr2];
const clone = { ...original };
// Default parameters
function greet(name = 'Guest') {}
// Symbol
const SECRET = Symbol('secret');
obj[SECRET] = 'hidden';
// Map & Set
const map = new Map([['key', 'value']]);
const unique = [...new Set([1, 2, 2, 3])];
// Optional chaining
const city = user?.address?.city;
// Nullish coalescing
const value = input ?? 'default';
// BigInt
const big = 9007199254740991n;
// Promise methods
await Promise.all([p1, p2]);
await Promise.allSettled([p1, p2]);
await Promise.race([p1, p2]);
await Promise.any([p1, p2]);`,language:"javascript"},{id:"interview-spread-rest",title:"Spread & Rest Operators",content:`# Spread & Rest Operators - Complete Interview Guide

## What are These Operators?
Both spread and rest use the same three dots (...) syntax but they do completely opposite things. This is one of the most confusing topics for beginners but very simple once you understand the context.

## Simple Analogy
- **Spread**: Imagine you have a box of chocolates. Spread is like opening the box and spreading all chocolates on the table individually.
- **Rest**: Imagine chocolates are scattered on table. Rest is like collecting all remaining chocolates and putting them back in a box.

## The Golden Rule
- If ... is on the RIGHT side of = or in function CALL → It's SPREAD (expanding)
- If ... is on the LEFT side of = or in function DEFINITION → It's REST (collecting)

---

# REST PARAMETER (...rest)

## What is Rest Parameter?
Rest parameter allows a function to accept any number of arguments and collects them into a single array. The word "rest" literally means "the rest of the arguments".

## Basic Syntax
\`\`\`js
function functionName(param1, param2, ...restParams) {
  // restParams is an array containing all remaining arguments
}
\`\`\`

## Example 1: Sum of Any Number of Arguments
\`\`\`js
// Without rest parameter (old way using arguments object)
function sumOld() {
  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
}

// With rest parameter (modern and clean)
function sum(...numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}
console.log(sum(1, 2));           // 3
console.log(sum(1, 2, 3, 4, 5));  // 15
console.log(sum(10, 20, 30));     // 60
\`\`\`

## Interview Question: Why is Rest Better Than arguments Object?
\`\`\`js
// arguments object problems:
function oldWay() {
  console.log(arguments);           // { '0': 1, '1': 2, '2': 3 }
  console.log(Array.isArray(arguments)); // false (it's array-like, not real array)
  // arguments.map(x => x * 2);     // TypeError! map doesn't exist
  
  // Need to convert first
  const arr = Array.from(arguments);
  return arr.map(x => x * 2);
}

// Rest parameter gives real array directly
function newWay(...nums) {
  console.log(nums);                // [1, 2, 3]
  console.log(Array.isArray(nums)); // true
  return nums.map(x => x * 2);      // Works directly!
}
oldWay(1, 2, 3);
newWay(1, 2, 3);
\`\`\`

## Example 2: Rest Must Be Last Parameter
\`\`\`js
// Correct - rest at the end
function greet(greeting, ...names) {
  return names.map(name => greeting + ' ' + name);
}
console.log(greet('Hello', 'John', 'Jane', 'Bob'));
// ['Hello John', 'Hello Jane', 'Hello Bob']

// Correct - first few params separate, rest collects remaining
function calculate(operation, ...numbers) {
  if (operation === 'add') {
    return numbers.reduce((a, b) => a + b, 0);
  } else if (operation === 'multiply') {
    return numbers.reduce((a, b) => a * b, 1);
  }
}
console.log(calculate('add', 1, 2, 3, 4));      // 10
console.log(calculate('multiply', 1, 2, 3, 4)); // 24

// WRONG - SyntaxError!
// function wrong(...rest, last) { } // Rest must be last!
// function wrong(...a, ...b) { }    // Only one rest allowed!
\`\`\`

## Example 3: Extracting First Few and Rest
\`\`\`js
function introduceTeam(leader, coLeader, ...members) {
  console.log('Leader:', leader);
  console.log('Co-Leader:', coLeader);
  console.log('Team Members:', members);
}
introduceTeam('Alice', 'Bob', 'Charlie', 'David', 'Eve');
// Leader: Alice
// Co-Leader: Bob
// Team Members: ['Charlie', 'David', 'Eve']
\`\`\`

---

# SPREAD OPERATOR (...spread)

## What is Spread Operator?
Spread operator expands an iterable (array, string, object) into individual elements. It's like unpacking a suitcase and laying out all items separately.

## Spread in Function Calls
\`\`\`js
// Problem: Math.max expects individual arguments, not array
const scores = [85, 92, 78, 96, 88];
// console.log(Math.max(scores)); // NaN - doesn't work!

// Solution: Spread the array
console.log(Math.max(...scores)); // 96
console.log(Math.min(...scores)); // 78

// What spread does internally:
// Math.max(...scores) becomes Math.max(85, 92, 78, 96, 88)

// Mix spread with other values
console.log(Math.max(0, ...scores, 100)); // 100
console.log(Math.min(-10, ...scores));    // -10
\`\`\`

## Spread in Arrays

### Copying Arrays
\`\`\`js
const original = [1, 2, 3];

// Spread creates a new array (shallow copy)
const copy = [...original];
copy.push(4);
console.log(original); // [1, 2, 3] - unchanged!
console.log(copy);     // [1, 2, 3, 4]

// Without spread (reference copy - both point to same array)
const wrongCopy = original;
wrongCopy.push(4);
console.log(original); // [1, 2, 3, 4] - original changed!
\`\`\`

### Merging Arrays
\`\`\`js
const frontend = ['HTML', 'CSS', 'JavaScript'];
const backend = ['Node.js', 'Python', 'Java'];
const database = ['MongoDB', 'PostgreSQL'];

// Merge all arrays
const fullStack = [...frontend, ...backend, ...database];
console.log(fullStack);
// ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Python', 'Java', 'MongoDB', 'PostgreSQL']

// Insert in between
const skills = [...frontend, 'React', 'Vue', ...backend];
console.log(skills);
// ['HTML', 'CSS', 'JavaScript', 'React', 'Vue', 'Node.js', 'Python', 'Java']

// Add at beginning and end
const complete = ['Fundamentals', ...frontend, 'Advanced'];
console.log(complete);
// ['Fundamentals', 'HTML', 'CSS', 'JavaScript', 'Advanced']
\`\`\`

### Converting Iterables to Arrays
\`\`\`js
// String to array of characters
const word = 'Hello';
const letters = [...word];
console.log(letters); // ['H', 'e', 'l', 'l', 'o']

// Set to array (removes duplicates)
const numbersWithDupes = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];
const unique = [...new Set(numbersWithDupes)];
console.log(unique); // [1, 2, 3, 4]

// Map to array
const map = new Map([['a', 1], ['b', 2]]);
const mapArray = [...map];
console.log(mapArray); // [['a', 1], ['b', 2]]

// NodeList to array (DOM)
// const divs = [...document.querySelectorAll('div')];
\`\`\`

## Spread in Objects

### Copying Objects
\`\`\`js
const user = { name: 'John', age: 30 };

// Spread creates new object (shallow copy)
const userCopy = { ...user };
userCopy.age = 31;
console.log(user.age);     // 30 - unchanged!
console.log(userCopy.age); // 31
\`\`\`

### Merging Objects
\`\`\`js
const personalInfo = { name: 'John', age: 30 };
const contactInfo = { email: 'john@email.com', phone: '123-456' };
const jobInfo = { company: 'Google', role: 'Developer' };

// Merge all objects
const profile = { ...personalInfo, ...contactInfo, ...jobInfo };
console.log(profile);
// { name: 'John', age: 30, email: 'john@email.com', phone: '123-456', company: 'Google', role: 'Developer' }
\`\`\`

### Property Override (Last One Wins)
\`\`\`js
const defaults = { theme: 'light', fontSize: 14, language: 'en' };
const userPrefs = { theme: 'dark', fontSize: 18 };

// User preferences override defaults
const settings = { ...defaults, ...userPrefs };
console.log(settings);
// { theme: 'dark', fontSize: 18, language: 'en' }

// Order matters!
const wrongOrder = { ...userPrefs, ...defaults };
console.log(wrongOrder);
// { theme: 'light', fontSize: 14, language: 'en' } - defaults override user prefs!
\`\`\`

### Adding or Updating Properties
\`\`\`js
const product = { id: 1, name: 'Phone', price: 999 };

// Add new property
const withStock = { ...product, inStock: true };
console.log(withStock);
// { id: 1, name: 'Phone', price: 999, inStock: true }

// Update existing property
const discounted = { ...product, price: 799 };
console.log(discounted);
// { id: 1, name: 'Phone', price: 799 }

// Add and update together
const updated = { ...product, price: 799, inStock: true, category: 'Electronics' };
console.log(updated);
// { id: 1, name: 'Phone', price: 799, inStock: true, category: 'Electronics' }
\`\`\`

---

# REST IN DESTRUCTURING

## Array Destructuring with Rest
\`\`\`js
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Get first two, rest in array
const [first, second, ...remaining] = numbers;
console.log(first);     // 1
console.log(second);    // 2
console.log(remaining); // [3, 4, 5, 6, 7, 8, 9, 10]

// Skip some values
const [a, , , d, ...rest] = numbers;
console.log(a);    // 1
console.log(d);    // 4
console.log(rest); // [5, 6, 7, 8, 9, 10]

// Practical: Head and Tail
const [head, ...tail] = [1, 2, 3, 4, 5];
console.log(head); // 1
console.log(tail); // [2, 3, 4, 5]
\`\`\`

## Object Destructuring with Rest
\`\`\`js
const employee = {
  id: 101,
  name: 'John',
  age: 30,
  department: 'Engineering',
  salary: 75000,
  password: 'secret123'
};

// Extract specific properties, collect rest
const { id, name, ...otherDetails } = employee;
console.log(id);           // 101
console.log(name);         // 'John'
console.log(otherDetails); // { age: 30, department: 'Engineering', salary: 75000, password: 'secret123' }

// Practical: Remove sensitive data
const { password, salary, ...publicInfo } = employee;
console.log(publicInfo);
// { id: 101, name: 'John', age: 30, department: 'Engineering' }
\`\`\`

---

# INTERVIEW FAVORITE QUESTIONS

## Q1: Remove Property Immutably (Without Mutating Original)
\`\`\`js
// Common requirement in React/Redux
const user = {
  id: 1,
  name: 'John',
  email: 'john@email.com',
  password: 'secret123'
};

// Method 1: Using rest in destructuring
const removeProperty = (obj, propToRemove) => {
  const { [propToRemove]: removed, ...rest } = obj;
  return rest;
};

const safeUser = removeProperty(user, 'password');
console.log(safeUser); // { id: 1, name: 'John', email: 'john@email.com' }
console.log(user);     // Original unchanged

// Method 2: Remove multiple properties
const { password, email, ...minimal } = user;
console.log(minimal); // { id: 1, name: 'John' }
\`\`\`

## Q2: Conditional Object Properties
\`\`\`js
// Add property only if condition is true
const isAdmin = true;
const hasSubscription = false;

const user = {
  name: 'John',
  age: 30,
  ...(isAdmin && { role: 'admin', permissions: ['read', 'write', 'delete'] }),
  ...(hasSubscription && { plan: 'premium', expiryDate: '2025-12-31' })
};

console.log(user);
// { name: 'John', age: 30, role: 'admin', permissions: ['read', 'write', 'delete'] }
// Note: hasSubscription properties not added because condition is false

// Why this works:
// true && { role: 'admin' } = { role: 'admin' } -> spread adds the properties
// false && { plan: 'premium' } = false -> spread of false adds nothing
\`\`\`

## Q3: Function with Options Object
\`\`\`js
// Common pattern in libraries and APIs
function createUser({ name, email, ...options }) {
  const user = {
    name,
    email,
    createdAt: new Date(),
    ...options
  };
  return user;
}

const newUser = createUser({
  name: 'John',
  email: 'john@email.com',
  age: 30,
  role: 'developer',
  department: 'Engineering'
});

console.log(newUser);
// { name: 'John', email: 'john@email.com', createdAt: Date, age: 30, role: 'developer', department: 'Engineering' }
\`\`\`

## Q4: Merge Arrays Without Duplicates
\`\`\`js
const array1 = [1, 2, 3, 4, 5];
const array2 = [4, 5, 6, 7, 8];

// Combine and remove duplicates
const merged = [...new Set([...array1, ...array2])];
console.log(merged); // [1, 2, 3, 4, 5, 6, 7, 8]

// Step by step:
// 1. [...array1, ...array2] = [1, 2, 3, 4, 5, 4, 5, 6, 7, 8]
// 2. new Set([...]) = Set { 1, 2, 3, 4, 5, 6, 7, 8 }
// 3. [...Set] = [1, 2, 3, 4, 5, 6, 7, 8]
\`\`\`

## Q5: Clone and Modify in One Line
\`\`\`js
const state = {
  user: 'John',
  isLoggedIn: true,
  cart: ['item1', 'item2']
};

// Add item to cart immutably (common in React)
const newState = {
  ...state,
  cart: [...state.cart, 'item3']
};

console.log(state.cart);    // ['item1', 'item2'] - unchanged
console.log(newState.cart); // ['item1', 'item2', 'item3']
\`\`\`

## Q6: Convert Arguments to Array and Transform
\`\`\`js
function doubleAll(...numbers) {
  return numbers.map(n => n * 2);
}
console.log(doubleAll(1, 2, 3, 4, 5)); // [2, 4, 6, 8, 10]

// Practical: Logger function
function log(level, ...messages) {
  const timestamp = new Date().toISOString();
  console.log(\`[\${timestamp}] [\${level.toUpperCase()}]\`, ...messages);
}
log('info', 'User logged in', 'userId:', 123);
// [2024-01-15T10:30:00.000Z] [INFO] User logged in userId: 123
\`\`\`

---

# SHALLOW VS DEEP COPY (CRITICAL FOR INTERVIEWS!)

## Understanding Shallow Copy
\`\`\`js
// Spread creates SHALLOW copy
// Shallow = Only first level is copied, nested objects are still referenced

const original = {
  name: 'John',
  age: 30,
  address: {
    city: 'New York',
    country: 'USA'
  },
  hobbies: ['reading', 'gaming']
};

const shallowCopy = { ...original };

// Modifying primitive (first level) - SAFE
shallowCopy.name = 'Jane';
shallowCopy.age = 25;
console.log(original.name); // 'John' - unchanged
console.log(original.age);  // 30 - unchanged

// Modifying nested object - DANGER!
shallowCopy.address.city = 'Los Angeles';
console.log(original.address.city); // 'Los Angeles' - CHANGED!

// Modifying nested array - DANGER!
shallowCopy.hobbies.push('cooking');
console.log(original.hobbies); // ['reading', 'gaming', 'cooking'] - CHANGED!
\`\`\`

## Why Does This Happen?
\`\`\`js
// Visual explanation:
// original.address -----> { city: 'New York', country: 'USA' }
//                              ^
// shallowCopy.address -------- | (points to same object!)

// After spread:
// - Primitives (name, age) are copied by value
// - Objects/Arrays (address, hobbies) are copied by reference
\`\`\`

## Deep Copy Solutions

### Solution 1: JSON Method
\`\`\`js
const original = {
  name: 'John',
  address: { city: 'NYC' }
};

const deepCopy = JSON.parse(JSON.stringify(original));
deepCopy.address.city = 'LA';
console.log(original.address.city); // 'NYC' - unchanged!

// LIMITATIONS of JSON method:
const problematic = {
  date: new Date(),           // Becomes string
  func: function() {},        // Lost completely
  undef: undefined,           // Lost completely
  symbol: Symbol('test'),     // Lost completely
  infinity: Infinity,         // Becomes null
  nan: NaN,                   // Becomes null
  regex: /test/g              // Becomes empty object {}
};
const jsonCopy = JSON.parse(JSON.stringify(problematic));
console.log(jsonCopy);
// { date: '2024-01-15T...', infinity: null, nan: null, regex: {} }
// func, undef, symbol are missing!
\`\`\`

### Solution 2: structuredClone (Modern - Recommended)
\`\`\`js
const original = {
  name: 'John',
  address: { city: 'NYC' },
  date: new Date(),
  numbers: [1, 2, 3],
  nested: { deep: { deeper: { value: 42 } } }
};

const deepCopy = structuredClone(original);
deepCopy.address.city = 'LA';
deepCopy.nested.deep.deeper.value = 100;

console.log(original.address.city);           // 'NYC' - unchanged!
console.log(original.nested.deep.deeper.value); // 42 - unchanged!

// LIMITATIONS of structuredClone:
// - Cannot clone functions
// - Cannot clone DOM nodes
// - Cannot clone certain objects (Error, WeakMap, WeakSet)
\`\`\`

### Solution 3: Custom Recursive Function
\`\`\`js
function deepClone(obj) {
  // Handle null and primitives
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }
  // Handle Date
  if (obj instanceof Date) {
    return new Date(obj.getTime());
  }
  // Handle Array
  if (Array.isArray(obj)) {
    return obj.map(item => deepClone(item));
  }
  // Handle Object
  const cloned = {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      cloned[key] = deepClone(obj[key]);
    }
  }
  return cloned;
}

const original = {
  a: 1,
  b: { c: 2, d: { e: 3 } },
  arr: [1, [2, 3], { f: 4 }]
};
const deep = deepClone(original);
deep.b.d.e = 100;
console.log(original.b.d.e); // 3 - unchanged!
\`\`\`

### Solution 4: Lodash Library
\`\`\`js
// Using lodash (most reliable for complex cases)
// import _ from 'lodash';
// const deepCopy = _.cloneDeep(original);
\`\`\`

---

# COMMON INTERVIEW MISTAKES AND TRAPS

## Mistake 1: Thinking Spread Does Deep Copy
\`\`\`js
const nested = { arr: [1, 2, 3] };
const copy = { ...nested };
copy.arr.push(4);
console.log(nested.arr); // [1, 2, 3, 4] - Original modified!

// Fix: Deep clone nested parts too
const correctCopy = { ...nested, arr: [...nested.arr] };
correctCopy.arr.push(4);
console.log(nested.arr); // [1, 2, 3] - Original safe!
\`\`\`

## Mistake 2: Spreading Non-Iterables
\`\`\`js
// These will throw errors:
// const spreadNumber = [...123];      // TypeError
// const spreadNull = [...null];       // TypeError
// const spreadUndefined = [...undefined]; // TypeError

// These work:
const spreadString = [..."hello"];     // ['h', 'e', 'l', 'l', 'o']
const spreadArray = [...[1, 2, 3]];    // [1, 2, 3]
const spreadSet = [...new Set([1])];  // [1]
\`\`\`

## Mistake 3: Rest Not at the End
\`\`\`js
// WRONG - SyntaxError
// function wrong(...rest, last) { }
// const [first, ...middle, last] = [1, 2, 3, 4];

// CORRECT
function correct(first, ...rest) { }
const [head, ...tail] = [1, 2, 3, 4];
\`\`\`

## Mistake 4: Spreading Object into Array
\`\`\`js
const obj = { a: 1, b: 2 };
// const arr = [...obj]; // TypeError! Objects aren't iterable

// Correct ways:
const keys = Object.keys(obj);     // ['a', 'b']
const values = Object.values(obj); // [1, 2]
const entries = Object.entries(obj); // [['a', 1], ['b', 2]]
\`\`\`

---

# QUICK REFERENCE TABLE

| Feature | Spread | Rest |
|---------|--------|------|
| Syntax | ...array | ...params |
| Purpose | Expand elements | Collect elements |
| Location | Right side / Function call | Left side / Function definition |
| Result | Individual elements | Array |
| Example | Math.max(...arr) | function(...args) |

---

# PRACTICAL REAL-WORLD EXAMPLES

## React State Update
\`\`\`js
// Adding item to array in state
const [items, setItems] = useState(['item1', 'item2']);
setItems([...items, 'newItem']);

// Updating object in state
const [user, setUser] = useState({ name: 'John', age: 30 });
setUser({ ...user, age: 31 });

// Removing item from array
const removeItem = (index) => {
  setItems(items.filter((_, i) => i !== index));
};
\`\`\`

## API Response Handling
\`\`\`js
const apiResponse = {
  data: { id: 1, name: 'Product' },
  meta: { timestamp: '2024-01-15' },
  status: 200
};

const { data, ...metadata } = apiResponse;
console.log(data);     // { id: 1, name: 'Product' }
console.log(metadata); // { meta: {...}, status: 200 }
\`\`\`

## Config Merging
\`\`\`js
const defaultConfig = {
  timeout: 5000,
  retries: 3,
  baseURL: 'https://api.example.com',
  headers: { 'Content-Type': 'application/json' }
};

function createClient(userConfig = {}) {
  return {
    ...defaultConfig,
    ...userConfig,
    headers: {
      ...defaultConfig.headers,
      ...userConfig.headers
    }
  };
}

const client = createClient({
  timeout: 10000,
  headers: { 'Authorization': 'Bearer token' }
});
console.log(client);
// { timeout: 10000, retries: 3, baseURL: '...', headers: { 'Content-Type': '...', 'Authorization': '...' } }
\`\`\``,codeExample:`// Quick Cheat Sheet for Interview
// ================================

// REST - Collects arguments into array
function sum(...nums) { return nums.reduce((a,b) => a+b, 0); }

// SPREAD - Expands array into arguments
Math.max(...[1, 2, 3]); // 3

// SPREAD - Copy array
const copy = [...original];

// SPREAD - Merge arrays
const merged = [...arr1, ...arr2];

// SPREAD - Copy object
const clone = { ...obj };

// SPREAD - Merge objects (last wins)
const merged = { ...defaults, ...userPrefs };

// REST in destructuring
const [first, ...rest] = [1, 2, 3, 4];
const { name, ...others } = person;

// Remove property immutably
const { password, ...safeUser } = user;

// Conditional spread
const obj = { a: 1, ...(condition && { b: 2 }) };

// REMEMBER: Spread = SHALLOW copy only!
const shallow = { ...nested }; // Nested objects still referenced`,language:"javascript"}]},{id:"interview-react",title:"React Interview",description:"React-specific interview questions and patterns.",difficulty:"intermediate",duration:"3 hours",topics:["Virtual DOM","Lifecycle","Hooks","State Management"],lessons:[]},{id:"interview-coding",title:"Coding Challenges",description:"Practice common coding challenges for interviews.",difficulty:"advanced",duration:"6 hours",topics:["Arrays","Strings","Objects","Algorithms"],lessons:[{id:"interview-array-challenges",title:"Array Challenges",content:`# Array Coding Challenges

Practice common array manipulation problems.`,codeExample:`// Remove Duplicates
const removeDuplicates = arr => [...new Set(arr)];
console.log("Remove duplicates:", removeDuplicates([1,2,2,3,3,3]));

// Find Duplicates
const findDuplicates = arr => {
  const seen = new Set();
  const dupes = new Set();
  arr.forEach(x => seen.has(x) ? dupes.add(x) : seen.add(x));
  return [...dupes];
};
console.log("Find duplicates:", findDuplicates([1,2,2,3,3,4]));

// Array Intersection
const intersection = (a, b) => a.filter(x => new Set(b).has(x));
console.log("Intersection:", intersection([1,2,3], [2,3,4]));

// Flatten Array
const flatten = arr => arr.flat(Infinity);
console.log("Flatten:", flatten([1,[2,[3,[4]]]]));

// Chunk Array
const chunk = (arr, size) => {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
};
console.log("Chunk:", chunk([1,2,3,4,5], 2));`,language:"javascript"}]},{id:"interview-system",title:"System Design",description:"Frontend system design interview preparation.",difficulty:"advanced",duration:"4 hours",topics:["Architecture","Performance","Scalability","Best Practices"],lessons:[]}];function qL(e){switch(e){case"interview":return w1;default:return[]}}function cn(e,t){return qL(e).find(o=>o.id===t)}function kl(e,t,n){const o=cn(e,t);return o==null?void 0:o.lessons.find(r=>r.id===n)}const QL=[{id:"js-basics",title:"JavaScript Basics",description:"Learn the fundamentals of JavaScript including variables, data types, and operators.",difficulty:"beginner",duration:"2 hours",topics:["Variables","Data Types","Operators","Type Coercion"],lessons:[{id:"js-variables",title:"Variables in JavaScript",content:`# Variables in JavaScript

Variables are containers for storing data values. In JavaScript, we have three ways to declare variables:

## var (Legacy)
The oldest way to declare variables. Has function scope and can be redeclared.

## let (Modern)
Block-scoped variable that can be reassigned but not redeclared in the same scope.

## const (Modern)
Block-scoped variable that cannot be reassigned. Must be initialized when declared.

### Best Practices
- Use \`const\` by default
- Use \`let\` when you need to reassign
- Avoid \`var\` in modern code`,codeExample:`// Using var (avoid in modern code)
var oldWay = "I can be redeclared";
var oldWay = "See?";

// Using let (for values that change)
let counter = 0;
counter = 1;
console.log("let counter:", counter);

// Using const (for values that don't change)
const PI = 3.14159;
console.log("const PI:", PI);

const user = { name: "John" };
user.name = "Jane"; // Can modify properties
console.log("const object:", user);`,language:"javascript"},{id:"js-data-types",title:"Data Types",content:`# Data Types in JavaScript

JavaScript has 8 data types divided into two categories:

## Primitive Types (7)
1. **String** - Text data
2. **Number** - Integers and floats
3. **BigInt** - Large integers
4. **Boolean** - true/false
5. **undefined** - Uninitialized variable
6. **null** - Intentional empty value
7. **Symbol** - Unique identifier

## Reference Type (1)
- **Object** - Collections of data`,codeExample:`// Primitive Types
const str = "Hello World";
const num = 42;
const bool = true;
let undef;
const empty = null;

// Type checking
console.log("String:", typeof str);
console.log("Number:", typeof num);
console.log("Boolean:", typeof bool);
console.log("Undefined:", typeof undef);
console.log("Null:", typeof empty);

// Reference Types
const obj = { name: "John", age: 30 };
const arr = [1, 2, 3, 4, 5];

console.log("Object:", typeof obj);
console.log("Array:", Array.isArray(arr));`,language:"javascript"},{id:"js-operators",title:"Operators",content:`# Operators in JavaScript

## Arithmetic Operators
Used for mathematical operations: +, -, *, /, %, **

## Comparison Operators
Used to compare values. Always prefer === over ==.

## Logical Operators
Used to combine boolean expressions: &&, ||, !`,codeExample:`// Arithmetic Operators
console.log("5 + 3 =", 5 + 3);
console.log("10 - 4 =", 10 - 4);
console.log("4 * 3 =", 4 * 3);
console.log("15 / 3 =", 15 / 3);
console.log("17 % 5 =", 17 % 5);
console.log("2 ** 3 =", 2 ** 3);

// Comparison Operators
console.log("\\n5 == '5':", 5 == '5');
console.log("5 === '5':", 5 === '5');
console.log("10 > 5:", 10 > 5);

// Logical Operators
console.log("\\ntrue && false:", true && false);
console.log("true || false:", true || false);
console.log("!true:", !true);`,language:"javascript"},{id:"js-type-coercion",title:"Type Coercion",content:`# Type Coercion in JavaScript

Type coercion is the automatic conversion of values from one type to another.

## Implicit Coercion
JavaScript automatically converts types when needed.

## Explicit Coercion
Manual conversion using built-in functions.

## Truthy and Falsy Values
Values that evaluate to true or false in boolean context.

### Falsy Values
- false, 0, -0, 0n, "", null, undefined, NaN

### Truthy Values
- Everything else (including [], {}, "0")`,codeExample:`// Implicit Coercion
console.log("5" + 3);        // "53" (string)
console.log("5" - 3);        // 2 (number)
console.log("5" * "2");      // 10 (number)
console.log(true + 1);       // 2

// Explicit Coercion
console.log(Number("42"));   // 42
console.log(String(42));     // "42"
console.log(Boolean(1));     // true
console.log(parseInt("42px")); // 42
console.log(parseFloat("3.14")); // 3.14

// Truthy and Falsy
console.log("\\nFalsy values:");
console.log(Boolean(0));       // false
console.log(Boolean(""));      // false
console.log(Boolean(null));    // false
console.log(Boolean(undefined)); // false

console.log("\\nTruthy values:");
console.log(Boolean([]));      // true
console.log(Boolean({}));      // true
console.log(Boolean("0"));     // true`,language:"javascript"}]},{id:"js-control-flow",title:"Control Flow",description:"Master conditional statements, loops, and control structures.",difficulty:"beginner",duration:"2 hours",topics:["If/Else","Switch","For Loops","While Loops","Loop Control"],lessons:[{id:"js-conditionals",title:"Conditional Statements",content:`# Conditional Statements

Control the flow of your program based on conditions.

## if...else
Execute code blocks based on conditions.

## Ternary Operator
Shorthand for simple if...else statements.

## Nullish Coalescing (??)
Returns right operand when left is null/undefined.

## Optional Chaining (?.)
Safely access nested properties.`,codeExample:`// if...else
const age = 18;

if (age < 13) {
  console.log("Child");
} else if (age < 20) {
  console.log("Teenager");
} else {
  console.log("Adult");
}

// Ternary Operator
const status = age >= 18 ? "Adult" : "Minor";
console.log("Status:", status);

// Nullish Coalescing
const username = null;
const displayName = username ?? "Guest";
console.log("Display name:", displayName);

// Optional Chaining
const user = { profile: { name: "John" } };
console.log(user?.profile?.name);  // "John"
console.log(user?.settings?.theme); // undefined (no error)

// Short-circuit Evaluation
const isLoggedIn = true;
isLoggedIn && console.log("Welcome back!");

const defaultValue = "" || "fallback";
console.log("Default:", defaultValue);`,language:"javascript"},{id:"js-switch",title:"Switch Statement",content:`# Switch Statement

Execute different code blocks based on different cases.

## Key Points
- Uses strict equality (===)
- Break prevents fall-through
- Default handles no match
- Can group cases together`,codeExample:`// Basic Switch
const day = new Date().getDay();
let dayName;

switch (day) {
  case 0:
    dayName = "Sunday";
    break;
  case 1:
    dayName = "Monday";
    break;
  case 2:
    dayName = "Tuesday";
    break;
  case 3:
    dayName = "Wednesday";
    break;
  case 4:
    dayName = "Thursday";
    break;
  case 5:
    dayName = "Friday";
    break;
  case 6:
    dayName = "Saturday";
    break;
  default:
    dayName = "Unknown";
}

console.log("Today is:", dayName);

// Grouped Cases
const grade = "B";
switch (grade) {
  case "A":
  case "B":
    console.log("Great job!");
    break;
  case "C":
    console.log("Good effort!");
    break;
  case "D":
  case "F":
    console.log("Needs improvement");
    break;
  default:
    console.log("Invalid grade");
}`,language:"javascript"},{id:"js-for-loops",title:"For Loops",content:`# For Loops

Repeat code a specific number of times.

## Types of For Loops
- **for** - Classic loop with counter
- **for...of** - Iterate over iterable values
- **for...in** - Iterate over object keys
- **forEach** - Array method for iteration`,codeExample:`// Classic for loop
console.log("Classic for loop:");
for (let i = 0; i < 5; i++) {
  console.log("Iteration:", i);
}

// for...of (arrays, strings, etc.)
const fruits = ["apple", "banana", "cherry"];
console.log("\\nfor...of loop:");
for (const fruit of fruits) {
  console.log("Fruit:", fruit);
}

// for...in (object properties)
const person = { name: "John", age: 30, city: "NYC" };
console.log("\\nfor...in loop:");
for (const key in person) {
  console.log(\`\${key}: \${person[key]}\`);
}

// forEach method
console.log("\\nforEach method:");
fruits.forEach((fruit, index) => {
  console.log(\`\${index}: \${fruit}\`);
});

// Iterating with entries
console.log("\\nWith entries:");
for (const [index, fruit] of fruits.entries()) {
  console.log(\`\${index}: \${fruit}\`);
}`,language:"javascript"},{id:"js-while-loops",title:"While Loops",content:`# While Loops

Repeat code while a condition is true.

## while
Checks condition before each iteration.

## do...while
Executes at least once, then checks condition.

## Use Cases
- Unknown number of iterations
- Reading data until complete
- Game loops`,codeExample:`// while loop
console.log("while loop:");
let count = 0;
while (count < 5) {
  console.log("Count:", count);
  count++;
}

// do...while loop
console.log("\\ndo...while loop:");
let num = 0;
do {
  console.log("Number:", num);
  num++;
} while (num < 3);

// Difference: do...while runs at least once
console.log("\\nDifference demo:");
let x = 10;
do {
  console.log("This runs once even though x > 5");
} while (x < 5);

// Practical example: Random number game
console.log("\\nNumber guessing simulation:");
let target = 7;
let guess = 0;
let attempts = 0;

while (guess !== target) {
  guess = Math.floor(Math.random() * 10) + 1;
  attempts++;
  console.log(\`Attempt \${attempts}: Guessed \${guess}\`);
  if (attempts > 10) break; // Safety limit
}
console.log(\`Found \${target} in \${attempts} attempts!\`);`,language:"javascript"},{id:"js-loop-control",title:"Loop Control",content:`# Loop Control Statements

Control the flow within loops.

## break
Exit the loop immediately.

## continue
Skip current iteration, continue to next.

## Labels
Name loops for nested loop control.`,codeExample:`// break - Exit loop early
console.log("break example:");
for (let i = 0; i < 10; i++) {
  if (i === 5) break;
  console.log(i);
}

// continue - Skip iteration
console.log("\\ncontinue example (skip evens):");
for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) continue;
  console.log(i);
}

// Labeled statements for nested loops
console.log("\\nLabeled break:");
outerLoop: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (i === 1 && j === 1) {
      console.log("Breaking outer loop");
      break outerLoop;
    }
    console.log(\`i=\${i}, j=\${j}\`);
  }
}

// Finding element in 2D array
console.log("\\nSearch in 2D array:");
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

const target = 5;
let found = false;

search: for (let row = 0; row < matrix.length; row++) {
  for (let col = 0; col < matrix[row].length; col++) {
    if (matrix[row][col] === target) {
      console.log(\`Found \${target} at [\${row}][\${col}]\`);
      found = true;
      break search;
    }
  }
}`,language:"javascript"}]},{id:"js-strings",title:"Strings & String Methods",description:"Master string manipulation and template literals.",difficulty:"beginner",duration:"2 hours",topics:["String Creation","String Methods","Template Literals","Regular Expressions Basics"],lessons:[{id:"js-string-basics",title:"String Basics",content:`# Strings in JavaScript

Strings are sequences of characters used to represent text.

## Creating Strings
- Single quotes: 'Hello'
- Double quotes: "Hello"
- Backticks: \`Hello\` (template literals)

## String Properties
- Strings are immutable
- Have a length property
- Can be accessed by index`,codeExample:`// Creating strings
const single = 'Hello';
const double = "World";
const backtick = \`Hello World\`;

// String length
console.log("Length:", single.length);

// Accessing characters
const str = "JavaScript";
console.log("First char:", str[0]);
console.log("Last char:", str[str.length - 1]);
console.log("charAt(4):", str.charAt(4));

// Strings are immutable
let greeting = "Hello";
greeting[0] = "J"; // This doesn't work
console.log(greeting); // Still "Hello"

// String comparison
console.log("\\nString comparison:");
console.log("'a' < 'b':", 'a' < 'b');
console.log("'A' < 'a':", 'A' < 'a');
console.log("'10' < '9':", '10' < '9'); // String comparison!

// Unicode
console.log("\\nUnicode:");
console.log("Char code of 'A':", "A".charCodeAt(0));
console.log("From char code 65:", String.fromCharCode(65));`,language:"javascript"},{id:"js-string-methods",title:"String Methods",content:`# Essential String Methods

## Search Methods
- indexOf, lastIndexOf, includes, startsWith, endsWith

## Extraction Methods
- slice, substring, substr (deprecated)

## Transformation Methods
- toUpperCase, toLowerCase, trim, replace, split`,codeExample:`const text = "  Hello, JavaScript World!  ";

// Search methods
console.log("includes('Java'):", text.includes("Java"));
console.log("startsWith('  Hello'):", text.startsWith("  Hello"));
console.log("endsWith('!  '):", text.endsWith("!  "));
console.log("indexOf('o'):", text.indexOf("o"));
console.log("lastIndexOf('o'):", text.lastIndexOf("o"));

// Extraction methods
console.log("\\nslice(2, 7):", text.slice(2, 7));
console.log("slice(-8, -2):", text.slice(-8, -2));
console.log("substring(2, 7):", text.substring(2, 7));

// Transformation methods
console.log("\\ntoUpperCase:", text.toUpperCase());
console.log("toLowerCase:", text.toLowerCase());
console.log("trim:", text.trim());
console.log("trimStart:", text.trimStart());
console.log("trimEnd:", text.trimEnd());

// Replace
console.log("\\nreplace:", text.replace("World", "Universe"));
console.log("replaceAll:", "a-b-c".replaceAll("-", "_"));

// Split and Join
const words = text.trim().split(" ");
console.log("\\nsplit:", words);
console.log("join:", words.join("-"));

// Padding
console.log("\\npadStart:", "5".padStart(3, "0"));
console.log("padEnd:", "5".padEnd(3, "0"));

// Repeat
console.log("repeat:", "Ha".repeat(3));`,language:"javascript"},{id:"js-template-literals",title:"Template Literals",content:`# Template Literals

Modern way to work with strings using backticks.

## Features
- String interpolation with \${expression}
- Multi-line strings
- Tagged templates for advanced processing`,codeExample:`// String Interpolation
const name = "Alice";
const age = 25;

console.log(\`Hello, \${name}! You are \${age} years old.\`);
console.log(\`Next year you'll be \${age + 1}.\`);

// Multi-line strings
const poem = \`
  Roses are red,
  Violets are blue,
  JavaScript is awesome,
  And so are you!
\`;
console.log(poem);

// Expression interpolation
const items = ["apple", "banana", "cherry"];
console.log(\`Items: \${items.join(", ")}\`);
console.log(\`Random: \${Math.floor(Math.random() * 100)}\`);

// Nested templates
const data = { user: { name: "Bob", role: "Admin" } };
console.log(\`User: \${data.user.name} (\${data.user.role})\`);

// Tagged template literals
function highlight(strings, ...values) {
  return strings.reduce((result, str, i) => {
    const value = values[i] ? \`**\${values[i]}**\` : '';
    return result + str + value;
  }, '');
}

const product = "laptop";
const price = 999;
console.log(highlight\`The \${product} costs $\${price}.\`);

// HTML template
const createCard = (title, content) => \`
  <div class="card">
    <h2>\${title}</h2>
    <p>\${content}</p>
  </div>
\`;

console.log(createCard("Welcome", "Hello World"));`,language:"javascript"}]},{id:"js-functions",title:"Functions & Scope",description:"Master functions, closures, and understand how scope works in JavaScript.",difficulty:"beginner",duration:"3 hours",topics:["Function Declaration","Arrow Functions","Closures","Scope Chain"],lessons:[{id:"js-function-basics",title:"Function Basics",content:`# Functions in JavaScript

Functions are reusable blocks of code.

## Function Declaration
Traditional way, hoisted to the top.

## Function Expression
Stored in a variable, not hoisted.

## Arrow Functions
Concise syntax with lexical this binding.`,codeExample:`// Function Declaration
function greet(name) {
  return "Hello, " + name + "!";
}

// Function Expression
const sayGoodbye = function(name) {
  return "Goodbye, " + name + "!";
};

// Arrow Function
const add = (a, b) => a + b;

// Default Parameters
const welcome = (name = "Guest") => \`Welcome, \${name}!\`;

// Rest Parameters
const sum = (...numbers) => numbers.reduce((a, b) => a + b, 0);

console.log(greet("Alice"));
console.log(sayGoodbye("Bob"));
console.log("2 + 3 =", add(2, 3));
console.log(welcome());
console.log("Sum 1-5:", sum(1, 2, 3, 4, 5));`,language:"javascript"},{id:"js-closures",title:"Closures",content:`# Closures in JavaScript

A closure is a function that remembers variables from its outer scope.

## Key Concepts
1. Functions create new scopes
2. Inner functions access outer variables
3. The connection persists after outer function returns`,codeExample:`// Basic Closure
function outer() {
  const message = "Hello from outer!";
  return function inner() {
    console.log(message);
  };
}

const myFunc = outer();
myFunc();

// Private Variables with Closure
function createCounter() {
  let count = 0;
  return {
    increment: () => ++count,
    decrement: () => --count,
    getCount: () => count
  };
}

const counter = createCounter();
console.log("Increment:", counter.increment());
console.log("Increment:", counter.increment());
console.log("Decrement:", counter.decrement());
console.log("Count:", counter.getCount());`,language:"javascript"},{id:"js-scope",title:"Scope & Hoisting",content:`# Scope in JavaScript

Scope determines the accessibility of variables.

## Types of Scope
- **Global Scope** - Accessible everywhere
- **Function Scope** - Accessible within function
- **Block Scope** - Accessible within {} (let/const)

## Hoisting
Variable and function declarations are moved to the top.`,codeExample:`// Global Scope
const globalVar = "I'm global";

function scopeDemo() {
  // Function Scope
  var functionVar = "I'm function-scoped";
  
  if (true) {
    // Block Scope
    let blockLet = "I'm block-scoped (let)";
    const blockConst = "I'm block-scoped (const)";
    var notBlockScoped = "I'm function-scoped (var)";
    
    console.log(blockLet);
    console.log(blockConst);
  }
  
  // console.log(blockLet); // Error!
  console.log(notBlockScoped); // Works
  console.log(functionVar);
}

scopeDemo();
console.log(globalVar);

// Hoisting
console.log("\\nHoisting Demo:");

// Function declarations are hoisted
hoistedFunc();
function hoistedFunc() {
  console.log("I'm hoisted!");
}

// var is hoisted (but not initialized)
console.log("hoistedVar:", hoistedVar); // undefined
var hoistedVar = "Now I have a value";

// let/const are NOT hoisted (temporal dead zone)
// console.log(notHoisted); // ReferenceError
let notHoisted = "I'm not hoisted";`,language:"javascript"},{id:"js-higher-order",title:"Higher-Order Functions",content:`# Higher-Order Functions

Functions that take or return other functions.

## Common Uses
- Callbacks
- Function factories
- Decorators/Wrappers
- Composition`,codeExample:`// Function as argument (callback)
function processArray(arr, callback) {
  const result = [];
  for (const item of arr) {
    result.push(callback(item));
  }
  return result;
}

const numbers = [1, 2, 3, 4, 5];
const doubled = processArray(numbers, n => n * 2);
console.log("Doubled:", doubled);

// Function returning function (factory)
function multiplier(factor) {
  return function(number) {
    return number * factor;
  };
}

const double = multiplier(2);
const triple = multiplier(3);
console.log("double(5):", double(5));
console.log("triple(5):", triple(5));

// Function wrapper (decorator)
function withLogging(fn) {
  return function(...args) {
    console.log(\`Calling with args: \${args}\`);
    const result = fn(...args);
    console.log(\`Result: \${result}\`);
    return result;
  };
}

const add = (a, b) => a + b;
const loggedAdd = withLogging(add);
loggedAdd(3, 4);

// Function composition
const compose = (...fns) => x => fns.reduceRight((acc, fn) => fn(acc), x);

const addOne = x => x + 1;
const square = x => x * x;
const composed = compose(square, addOne);
console.log("\\ncomposed(4):", composed(4)); // (4+1)² = 25`,language:"javascript"},{id:"js-iife",title:"IIFE & Modules Pattern",content:`# IIFE - Immediately Invoked Function Expression

A function that runs as soon as it's defined.

## Use Cases
- Avoid polluting global scope
- Create private variables
- Module pattern (pre-ES6)`,codeExample:`// Basic IIFE
(function() {
  console.log("I run immediately!");
})();

// IIFE with parameters
(function(name) {
  console.log(\`Hello, \${name}!\`);
})("World");

// Arrow function IIFE
(() => {
  console.log("Arrow IIFE!");
})();

// Module Pattern
const Calculator = (function() {
  // Private variables
  let result = 0;
  
  // Private function
  function log(operation) {
    console.log(\`\${operation}: \${result}\`);
  }
  
  // Public interface
  return {
    add(n) {
      result += n;
      log("Add");
      return this;
    },
    subtract(n) {
      result -= n;
      log("Subtract");
      return this;
    },
    multiply(n) {
      result *= n;
      log("Multiply");
      return this;
    },
    getResult() {
      return result;
    },
    reset() {
      result = 0;
      log("Reset");
      return this;
    }
  };
})();

Calculator.add(10).multiply(2).subtract(5);
console.log("Final result:", Calculator.getResult());

// Revealing Module Pattern
const CounterModule = (function() {
  let count = 0;
  
  function increment() { count++; }
  function decrement() { count--; }
  function getCount() { return count; }
  
  return { increment, decrement, getCount };
})();

CounterModule.increment();
CounterModule.increment();
console.log("Counter:", CounterModule.getCount());`,language:"javascript"}]},{id:"js-arrays",title:"Arrays & Objects",description:"Deep dive into arrays, objects, and their built-in methods.",difficulty:"intermediate",duration:"4 hours",topics:["Array Methods","Object Methods","Destructuring","Spread Operator"],lessons:[{id:"js-array-methods",title:"Array Methods",content:`# Essential Array Methods

## Transformation Methods
- map() - Transform each element
- filter() - Keep elements that pass a test
- reduce() - Reduce to a single value

## Search Methods
- find() - Find first matching element
- includes() - Check if element exists`,codeExample:`const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// map - Transform each element
const doubled = numbers.map(n => n * 2);
console.log("Doubled:", doubled);

// filter - Keep elements that pass test
const evens = numbers.filter(n => n % 2 === 0);
console.log("Evens:", evens);

// reduce - Reduce to single value
const sum = numbers.reduce((acc, n) => acc + n, 0);
console.log("Sum:", sum);

// find - Find first match
const firstOver5 = numbers.find(n => n > 5);
console.log("First > 5:", firstOver5);

// Chaining methods
const result = numbers
  .filter(n => n % 2 === 0)
  .map(n => n * 3)
  .reduce((a, b) => a + b);
console.log("Chain result:", result);`,language:"javascript"},{id:"js-array-methods-advanced",title:"Advanced Array Methods",content:`# More Array Methods

## Iteration Methods
- forEach, every, some

## Transformation Methods  
- flat, flatMap, sort, reverse

## Search Methods
- findIndex, indexOf, lastIndexOf`,codeExample:`// every - Check if ALL pass test
const numbers = [2, 4, 6, 8, 10];
console.log("All even?", numbers.every(n => n % 2 === 0));

// some - Check if ANY pass test
console.log("Any > 5?", numbers.some(n => n > 5));

// findIndex - Find index of match
const users = [
  { id: 1, name: "John" },
  { id: 2, name: "Jane" },
  { id: 3, name: "Bob" }
];
const janeIndex = users.findIndex(u => u.name === "Jane");
console.log("Jane's index:", janeIndex);

// flat - Flatten nested arrays
const nested = [1, [2, 3], [4, [5, 6]]];
console.log("flat(1):", nested.flat(1));
console.log("flat(2):", nested.flat(2));

// flatMap - Map then flatten
const sentences = ["Hello World", "How are you"];
const words = sentences.flatMap(s => s.split(" "));
console.log("flatMap:", words);

// sort - Sort array (mutates!)
const names = ["Charlie", "Alice", "Bob"];
console.log("Sorted:", [...names].sort());

const nums = [10, 5, 8, 1, 7];
console.log("Sorted nums:", [...nums].sort((a, b) => a - b));

// reverse - Reverse array (mutates!)
console.log("Reversed:", [...nums].reverse());

// Array.from - Create array from iterable
console.log("Array.from:", Array.from("hello"));
console.log("Range:", Array.from({ length: 5 }, (_, i) => i + 1));

// Array.of - Create array from arguments
console.log("Array.of:", Array.of(1, 2, 3));`,language:"javascript"},{id:"js-array-manipulation",title:"Array Manipulation",content:`# Array Manipulation Methods

## Adding/Removing Elements
- push, pop, unshift, shift
- splice, slice

## Combining Arrays
- concat, spread operator

## Other Useful Methods
- join, fill, copyWithin`,codeExample:`// push/pop - Add/remove from end
const arr = [1, 2, 3];
arr.push(4);
console.log("After push:", arr);
const popped = arr.pop();
console.log("Popped:", popped, "Array:", arr);

// unshift/shift - Add/remove from start
arr.unshift(0);
console.log("After unshift:", arr);
const shifted = arr.shift();
console.log("Shifted:", shifted, "Array:", arr);

// splice - Add/remove at any position
const colors = ["red", "green", "blue"];
colors.splice(1, 1, "yellow", "purple");
console.log("After splice:", colors);

// slice - Extract portion (doesn't mutate)
const sliced = colors.slice(1, 3);
console.log("Sliced:", sliced);

// concat vs spread
const arr1 = [1, 2];
const arr2 = [3, 4];
console.log("concat:", arr1.concat(arr2));
console.log("spread:", [...arr1, ...arr2]);

// fill - Fill array with value
const filled = new Array(5).fill(0);
console.log("Filled:", filled);

// join - Convert to string
console.log("Joined:", colors.join(" | "));

// includes with fromIndex
const items = [1, 2, 3, 4, 5];
console.log("includes 3 from index 2:", items.includes(3, 2));

// at - Access with negative index
console.log("at(-1):", items.at(-1));
console.log("at(-2):", items.at(-2));`,language:"javascript"},{id:"js-object-basics",title:"Object Fundamentals",content:`# Objects in JavaScript

Objects store collections of key-value pairs.

## Creating Objects
- Object literal
- Constructor
- Object.create()

## Accessing Properties
- Dot notation
- Bracket notation`,codeExample:`// Creating Objects
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  "favorite color": "blue",
  greet() {
    console.log(\`Hello, I'm \${this.firstName}\`);
  }
};

// Accessing properties
console.log("Dot:", person.firstName);
console.log("Bracket:", person["lastName"]);
console.log("Dynamic:", person["favorite color"]);

// Modifying properties
person.age = 31;
person.email = "john@example.com";
delete person["favorite color"];

console.log("Modified:", person);

// Method shorthand
const calculator = {
  value: 0,
  add(n) { this.value += n; return this; },
  subtract(n) { this.value -= n; return this; },
  multiply(n) { this.value *= n; return this; },
  result() { return this.value; }
};

console.log("Calc:", calculator.add(10).multiply(2).subtract(5).result());

// Computed property names
const propName = "dynamicKey";
const obj = {
  [propName]: "dynamic value",
  [\`computed_\${1 + 1}\`]: "computed"
};
console.log("Dynamic obj:", obj);

// Property shorthand
const name = "Alice";
const age = 25;
const user = { name, age };
console.log("Shorthand:", user);`,language:"javascript"},{id:"js-object-methods",title:"Object Methods",content:`# Object Static Methods

## Keys, Values, Entries
Get arrays of object data.

## Merging Objects
Combine objects with assign or spread.

## Property Descriptors
Control property behavior.`,codeExample:`const user = {
  name: "John",
  age: 30,
  city: "NYC"
};

// Object.keys, values, entries
console.log("Keys:", Object.keys(user));
console.log("Values:", Object.values(user));
console.log("Entries:", Object.entries(user));

// Iterating with entries
for (const [key, value] of Object.entries(user)) {
  console.log(\`\${key}: \${value}\`);
}

// Object.assign - Merge objects
const defaults = { theme: "dark", fontSize: 14 };
const userPrefs = { fontSize: 16 };
const merged = Object.assign({}, defaults, userPrefs);
console.log("\\nMerged:", merged);

// Spread operator (better!)
const merged2 = { ...defaults, ...userPrefs };
console.log("Spread merge:", merged2);

// Object.freeze - Prevent modifications
const frozen = Object.freeze({ x: 1 });
frozen.x = 2; // Silently fails
console.log("\\nFrozen:", frozen);

// Object.seal - Prevent add/delete
const sealed = Object.seal({ y: 1 });
sealed.y = 2; // This works
sealed.z = 3; // This doesn't
console.log("Sealed:", sealed);

// Check status
console.log("Is frozen?", Object.isFrozen(frozen));
console.log("Is sealed?", Object.isSealed(sealed));

// Object.fromEntries - Create object from entries
const entries = [["a", 1], ["b", 2], ["c", 3]];
const fromEntries = Object.fromEntries(entries);
console.log("\\nFrom entries:", fromEntries);`,language:"javascript"},{id:"js-destructuring",title:"Destructuring",content:`# Destructuring Assignment

Extract values from arrays and objects into variables.

## Array Destructuring
Extract by position.

## Object Destructuring
Extract by property name.

## Use Cases
- Swap variables
- Function parameters
- Module imports`,codeExample:`// Array Destructuring
const colors = ["red", "green", "blue", "yellow"];

const [first, second] = colors;
console.log("First two:", first, second);

// Skip elements
const [, , third] = colors;
console.log("Third:", third);

// Rest pattern
const [primary, ...rest] = colors;
console.log("Primary:", primary, "Rest:", rest);

// Default values
const [a, b, c, d, e = "purple"] = colors;
console.log("With default:", e);

// Swap variables
let x = 1, y = 2;
[x, y] = [y, x];
console.log("\\nSwapped:", x, y);

// Object Destructuring
const person = {
  name: "John",
  age: 30,
  city: "NYC",
  country: "USA"
};

const { name, age } = person;
console.log("\\nName and age:", name, age);

// Rename variables
const { name: personName, city: location } = person;
console.log("Renamed:", personName, location);

// Default values
const { phone = "N/A" } = person;
console.log("With default:", phone);

// Nested destructuring
const company = {
  name: "Tech Corp",
  address: {
    street: "123 Main St",
    city: "San Francisco"
  }
};

const { address: { city: companyCity } } = company;
console.log("\\nNested:", companyCity);

// Function parameters
function greet({ name, age = 0 }) {
  console.log(\`Hello \${name}, you are \${age}\`);
}
greet({ name: "Alice", age: 25 });`,language:"javascript"},{id:"js-spread-rest",title:"Spread & Rest Operators",content:`# Spread and Rest Operators

The ... syntax has two uses:

## Spread Operator
Expands an iterable into individual elements.

## Rest Operator
Collects multiple elements into an array.`,codeExample:`// Spread in Arrays
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

// Combine arrays
const combined = [...arr1, ...arr2];
console.log("Combined:", combined);

// Copy array (shallow)
const copy = [...arr1];
console.log("Copy:", copy);

// Insert in middle
const inserted = [0, ...arr1, 4];
console.log("Inserted:", inserted);

// Spread in Objects
const defaults = { theme: "dark", size: "medium" };
const custom = { size: "large", color: "blue" };

const merged = { ...defaults, ...custom };
console.log("\\nMerged:", merged);

// Copy with modification
const user = { name: "John", age: 30 };
const updated = { ...user, age: 31, email: "john@test.com" };
console.log("Updated:", updated);

// Spread in function calls
const numbers = [5, 2, 8, 1, 9];
console.log("\\nMax:", Math.max(...numbers));
console.log("Min:", Math.min(...numbers));

// Rest in function parameters
function sum(...nums) {
  return nums.reduce((a, b) => a + b, 0);
}
console.log("\\nSum:", sum(1, 2, 3, 4, 5));

// Rest with other parameters
function greet(greeting, ...names) {
  names.forEach(name => console.log(\`\${greeting}, \${name}!\`));
}
greet("Hello", "Alice", "Bob", "Charlie");

// Rest in destructuring
const [first, second, ...others] = [1, 2, 3, 4, 5];
console.log("\\nFirst:", first, "Others:", others);

const { a, ...remaining } = { a: 1, b: 2, c: 3 };
console.log("Remaining:", remaining);`,language:"javascript"}]},{id:"js-async",title:"Asynchronous JavaScript",description:"Learn callbacks, promises, and async/await patterns.",difficulty:"intermediate",duration:"4 hours",topics:["Callbacks","Promises","Async/Await","Error Handling"],lessons:[{id:"js-callbacks",title:"Callbacks",content:`# Callbacks in JavaScript

A callback is a function passed as an argument to another function.

## Synchronous Callbacks
Execute immediately (like array methods).

## Asynchronous Callbacks
Execute later (like setTimeout, event handlers).

## Callback Hell
Nested callbacks become hard to manage.`,codeExample:`// Synchronous callback
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(function(n) {
  return n * 2;
});
console.log("Sync callback:", doubled);

// Asynchronous callback
console.log("\\n1. Starting...");

setTimeout(function() {
  console.log("3. Timeout callback executed!");
}, 1000);

console.log("2. Continuing...");

// Callback with error-first pattern
function fetchData(callback) {
  setTimeout(() => {
    const success = Math.random() > 0.3;
    if (success) {
      callback(null, { data: "Success!" });
    } else {
      callback(new Error("Failed to fetch"), null);
    }
  }, 500);
}

console.log("\\nFetching data...");
fetchData((error, result) => {
  if (error) {
    console.log("Error:", error.message);
  } else {
    console.log("Result:", result);
  }
});

// Callback Hell (avoid this!)
function step1(callback) {
  setTimeout(() => {
    console.log("\\nStep 1 complete");
    callback();
  }, 300);
}

function step2(callback) {
  setTimeout(() => {
    console.log("Step 2 complete");
    callback();
  }, 300);
}

function step3(callback) {
  setTimeout(() => {
    console.log("Step 3 complete");
    callback();
  }, 300);
}

// Nested callbacks
step1(() => {
  step2(() => {
    step3(() => {
      console.log("All steps complete!");
    });
  });
});`,language:"javascript"},{id:"js-promises",title:"Promises",content:`# Promises in JavaScript

A Promise represents the eventual completion or failure of an async operation.

## Promise States
1. Pending - Initial state
2. Fulfilled - Operation completed
3. Rejected - Operation failed`,codeExample:`// Creating a Promise
const fetchData = (success) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (success) {
        resolve({ data: "Success!" });
      } else {
        reject(new Error("Failed"));
      }
    }, 1000);
  });
};

console.log("Fetching data...");

fetchData(true)
  .then(data => console.log("Resolved:", data))
  .catch(err => console.log("Error:", err))
  .finally(() => console.log("Done!"));

// Promise.all
Promise.all([
  Promise.resolve(1),
  Promise.resolve(2),
  Promise.resolve(3)
]).then(values => console.log("All:", values));`,language:"javascript"},{id:"js-promise-methods",title:"Promise Static Methods",content:`# Promise Static Methods

## Promise.all
Wait for all promises to resolve.

## Promise.race
Return first settled promise.

## Promise.allSettled
Wait for all to settle (resolve or reject).

## Promise.any
Return first fulfilled promise.`,codeExample:`// Helper function
const delay = (ms, value, shouldFail = false) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldFail) {
        reject(new Error(\`Failed: \${value}\`));
      } else {
        resolve(value);
      }
    }, ms);
  });
};

// Promise.all - All must succeed
console.log("Promise.all:");
Promise.all([
  delay(100, "First"),
  delay(200, "Second"),
  delay(150, "Third")
])
.then(results => console.log("All results:", results))
.catch(err => console.log("Error:", err.message));

// Promise.race - First to settle wins
console.log("\\nPromise.race:");
Promise.race([
  delay(100, "Fast"),
  delay(200, "Medium"),
  delay(300, "Slow")
])
.then(result => console.log("Race winner:", result));

// Promise.allSettled - Get all results
console.log("\\nPromise.allSettled:");
Promise.allSettled([
  delay(100, "Success 1"),
  delay(150, "Fail 1", true),
  delay(200, "Success 2")
])
.then(results => {
  results.forEach((result, i) => {
    if (result.status === "fulfilled") {
      console.log(\`\${i}: Fulfilled - \${result.value}\`);
    } else {
      console.log(\`\${i}: Rejected - \${result.reason.message}\`);
    }
  });
});

// Promise.any - First success wins
console.log("\\nPromise.any:");
Promise.any([
  delay(200, "Fail 1", true),
  delay(100, "Success"),
  delay(150, "Fail 2", true)
])
.then(result => console.log("Any result:", result))
.catch(err => console.log("All failed"));

// Promise.resolve and Promise.reject
const resolved = Promise.resolve("Already resolved");
const rejected = Promise.reject(new Error("Already rejected"));

resolved.then(v => console.log("\\n" + v));
rejected.catch(e => console.log(e.message));`,language:"javascript"},{id:"js-async-await",title:"Async/Await",content:`# Async/Await

Modern syntax for working with promises.

## async Functions
Always return a promise.

## await Keyword
Pause until promise settles.

## Error Handling
Use try/catch blocks.`,codeExample:`// Basic async/await
async function fetchUser(id) {
  // Simulate API call
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ id, name: \`User \${id}\` });
    }, 500);
  });
}

async function getUser() {
  console.log("Fetching user...");
  const user = await fetchUser(1);
  console.log("User:", user);
  return user;
}

getUser();

// Error handling with try/catch
async function fetchWithError() {
  return new Promise((_, reject) => {
    setTimeout(() => reject(new Error("Network error")), 500);
  });
}

async function handleErrors() {
  try {
    const result = await fetchWithError();
    console.log(result);
  } catch (error) {
    console.log("\\nCaught error:", error.message);
  } finally {
    console.log("Cleanup done");
  }
}

handleErrors();

// Sequential vs Parallel
async function sequential() {
  console.log("\\nSequential:");
  const start = Date.now();
  const user1 = await fetchUser(1);
  const user2 = await fetchUser(2);
  console.log("Time:", Date.now() - start, "ms");
  console.log("Users:", user1, user2);
}

async function parallel() {
  console.log("\\nParallel:");
  const start = Date.now();
  const [user1, user2] = await Promise.all([
    fetchUser(1),
    fetchUser(2)
  ]);
  console.log("Time:", Date.now() - start, "ms");
  console.log("Users:", user1, user2);
}

sequential().then(() => parallel());

// Async iteration
async function* asyncGenerator() {
  yield await Promise.resolve(1);
  yield await Promise.resolve(2);
  yield await Promise.resolve(3);
}

async function useAsyncGenerator() {
  console.log("\\nAsync iteration:");
  for await (const num of asyncGenerator()) {
    console.log("Value:", num);
  }
}

useAsyncGenerator();`,language:"javascript"},{id:"js-error-handling-async",title:"Async Error Handling",content:`# Error Handling in Async Code

## Patterns
- try/catch with async/await
- .catch() with promises
- Error boundaries
- Graceful degradation`,codeExample:`// Central error handler
function handleError(error, context) {
  console.error(\`[\${context}] \${error.message}\`);
  // In real app: log to service, show notification
}

// Wrapper for async functions
function asyncHandler(fn) {
  return async (...args) => {
    try {
      return await fn(...args);
    } catch (error) {
      handleError(error, fn.name);
      throw error; // Re-throw if needed
    }
  };
}

// Usage
const riskyOperation = asyncHandler(async function riskyOperation() {
  throw new Error("Something went wrong!");
});

riskyOperation().catch(() => console.log("Handled in catch"));

// Multiple operations with individual handling
async function fetchMultiple() {
  const results = await Promise.allSettled([
    fetch("https://api.example.com/users"),
    fetch("https://api.example.com/posts"),
    fetch("https://api.example.com/comments")
  ]);

  results.forEach((result, index) => {
    if (result.status === "rejected") {
      console.log(\`Request \${index} failed:\`, result.reason);
    }
  });

  // Filter successful results
  const successfulResults = results
    .filter(r => r.status === "fulfilled")
    .map(r => r.value);
  
  return successfulResults;
}

// Retry pattern
async function withRetry(fn, retries = 3, delay = 1000) {
  for (let i = 0; i < retries; i++) {
    try {
      return await fn();
    } catch (error) {
      console.log(\`Attempt \${i + 1} failed: \${error.message}\`);
      if (i < retries - 1) {
        await new Promise(r => setTimeout(r, delay));
      }
    }
  }
  throw new Error(\`Failed after \${retries} attempts\`);
}

// Example usage
let attemptCount = 0;
async function unreliableOperation() {
  attemptCount++;
  if (attemptCount < 3) {
    throw new Error("Random failure");
  }
  return "Success!";
}

withRetry(unreliableOperation)
  .then(result => console.log("\\nRetry result:", result))
  .catch(err => console.log("Final error:", err.message));`,language:"javascript"}]},{id:"js-this",title:"The this Keyword",description:"Understand how this works in different contexts.",difficulty:"intermediate",duration:"2 hours",topics:["Global Context","Object Methods","Constructors","Arrow Functions","Explicit Binding"],lessons:[{id:"js-this-basics",title:"Understanding this",content:`# The this Keyword

The value of this depends on HOW a function is called.

## Different Contexts
1. Global context
2. Object methods
3. Constructor functions
4. Event handlers
5. Arrow functions (lexical)`,codeExample:`// Global context (in browser: window, in Node: global/undefined in strict mode)
console.log("Global this:", typeof this);

// Object method - this = the object
const person = {
  name: "John",
  greet() {
    console.log("Object this:", this.name);
  },
  greetArrow: () => {
    console.log("Arrow this:", this.name); // undefined (lexical)
  }
};

person.greet();
person.greetArrow();

// Lost context
const greetFunc = person.greet;
// greetFunc(); // this would be undefined in strict mode

// Constructor function - this = new instance
function Animal(name) {
  this.name = name;
  console.log("Constructor this:", this);
}

const cat = new Animal("Whiskers");

// Class methods - this = instance
class Dog {
  constructor(name) {
    this.name = name;
  }
  
  bark() {
    console.log(\`\${this.name} barks!\`);
  }
  
  // Arrow function preserves this
  delayedBark = () => {
    setTimeout(() => {
      console.log(\`\${this.name} barks (delayed)!\`);
    }, 100);
  }
}

const dog = new Dog("Max");
dog.bark();
dog.delayedBark();`,language:"javascript"},{id:"js-this-binding",title:"Explicit this Binding",content:`# Binding this Explicitly

## Methods
- **call** - Invoke with this and individual args
- **apply** - Invoke with this and args array
- **bind** - Return new function with bound this`,codeExample:`function greet(greeting, punctuation) {
  console.log(\`\${greeting}, \${this.name}\${punctuation}\`);
}

const person1 = { name: "Alice" };
const person2 = { name: "Bob" };

// call - individual arguments
greet.call(person1, "Hello", "!");
greet.call(person2, "Hi", "?");

// apply - arguments as array
greet.apply(person1, ["Hey", "!!"]);
greet.apply(person2, ["Yo", "..."]);

// bind - returns new function
const greetAlice = greet.bind(person1);
greetAlice("Welcome", "!");

// Partial application with bind
const sayHiTo = greet.bind(null, "Hi");
sayHiTo.call(person1, "!");

// Practical example: event handlers
const button = {
  text: "Click me",
  handleClick: function() {
    console.log(\`Button "\${this.text}" clicked\`);
  }
};

// In real DOM:
// element.addEventListener('click', button.handleClick.bind(button));

// Using bind to fix lost context
const boundHandler = button.handleClick.bind(button);
boundHandler();

// Borrowing methods
const numbers = { 0: "a", 1: "b", 2: "c", length: 3 };
const arr = Array.prototype.slice.call(numbers);
console.log("Borrowed slice:", arr);

// Modern alternative
console.log("Array.from:", Array.from(numbers));`,language:"javascript"},{id:"js-arrow-this",title:"Arrow Functions and this",content:`# Arrow Functions and this

Arrow functions don't have their own this.
They inherit this from the enclosing scope (lexical).

## When to Use
- Callbacks inside methods
- When you need to preserve outer this

## When NOT to Use
- Object methods
- Constructors
- Event handlers (usually)`,codeExample:`// Arrow functions inherit this
const team = {
  name: "Engineering",
  members: ["Alice", "Bob", "Charlie"],
  
  // Regular function - this = team
  showMembers() {
    console.log(\`Team: \${this.name}\`);
    
    // Arrow function inherits this from showMembers
    this.members.forEach(member => {
      console.log(\`\${member} is in \${this.name}\`);
    });
  },
  
  // Problem with regular function callback
  showMembersOld() {
    const self = this; // Old pattern
    this.members.forEach(function(member) {
      // console.log(this.name); // undefined!
      console.log(\`\${member} is in \${self.name}\`);
    });
  }
};

team.showMembers();

// Nested arrow functions
const outer = {
  value: 42,
  
  getValueGetter() {
    return () => () => this.value;
  }
};

const getter = outer.getValueGetter();
console.log("\\nNested arrow:", getter()());

// Common mistake: Arrow as method
const badObject = {
  name: "Bad",
  getName: () => this.name // this is not the object!
};
console.log("Arrow method:", badObject.getName()); // undefined

// Correct way
const goodObject = {
  name: "Good",
  getName() { return this.name; }
};
console.log("Regular method:", goodObject.getName());

// Class with arrow functions
class Timer {
  constructor() {
    this.seconds = 0;
  }
  
  // Arrow function as class field
  start = () => {
    setInterval(() => {
      this.seconds++;
      console.log(\`Timer: \${this.seconds}s\`);
    }, 1000);
  }
}

// const timer = new Timer();
// timer.start(); // Would work correctly`,language:"javascript"}]},{id:"js-dom",title:"DOM Manipulation",description:"Interact with the Document Object Model and handle events.",difficulty:"intermediate",duration:"3 hours",topics:["DOM Selection","Event Handling","DOM Traversal","Dynamic Content"],lessons:[{id:"js-dom-selection",title:"DOM Selection",content:`# Selecting DOM Elements

## Modern Methods
- querySelector - First match
- querySelectorAll - All matches

## Legacy Methods
- getElementById
- getElementsByClassName
- getElementsByTagName`,codeExample:`// Note: These examples show DOM concepts
// They would work in a browser environment

// querySelector - Returns first match
const header = document.querySelector('h1');
const firstButton = document.querySelector('.btn');
const submitBtn = document.querySelector('#submit');
const navLink = document.querySelector('nav a.active');

// querySelectorAll - Returns NodeList
const allButtons = document.querySelectorAll('.btn');
const allParagraphs = document.querySelectorAll('p');
const formInputs = document.querySelectorAll('form input');

// Converting NodeList to Array
const buttonsArray = Array.from(allButtons);
// or
const buttonsArray2 = [...allButtons];

// Legacy methods
const byId = document.getElementById('myId');
const byClass = document.getElementsByClassName('myClass');
const byTag = document.getElementsByTagName('div');

// Differences:
// - querySelector: Returns Element or null
// - getElementById: Returns Element or null
// - getElementsBy*: Returns live HTMLCollection
// - querySelectorAll: Returns static NodeList

// Simulating for demo purposes
console.log("DOM Selection Examples");
console.log("querySelector returns:", typeof document.querySelector);
console.log("Use CSS selectors: 'div.class#id[attr=value]'");

// Complex selectors
const examples = [
  'div.container > p',          // Direct child
  'ul li:first-child',          // First li in ul
  'input[type="text"]',         // Input with type
  '.item:not(.disabled)',       // Not selector
  'tr:nth-child(odd)',          // Odd rows
  '[data-active="true"]'        // Data attribute
];

examples.forEach(sel => console.log("Selector:", sel));`,language:"javascript"},{id:"js-dom-manipulation",title:"DOM Manipulation",content:`# Manipulating DOM Elements

## Content
- textContent, innerHTML, innerText

## Attributes
- getAttribute, setAttribute, dataset

## Styles and Classes
- style, classList`,codeExample:`// Creating elements
const div = document.createElement('div');
const text = document.createTextNode('Hello');

// Setting content
div.textContent = 'Plain text content';
div.innerHTML = '<strong>HTML</strong> content';
div.innerText = 'Visible text only';

// Attributes
div.setAttribute('id', 'myDiv');
div.getAttribute('id');
div.removeAttribute('id');
div.hasAttribute('id');

// Data attributes
div.dataset.userId = '123';
div.dataset.userName = 'john';
// Creates: data-user-id="123" data-user-name="john"

// Classes
div.classList.add('active', 'visible');
div.classList.remove('hidden');
div.classList.toggle('expanded');
div.classList.contains('active'); // true
div.classList.replace('old-class', 'new-class');

// Inline styles
div.style.backgroundColor = 'blue';
div.style.fontSize = '16px';
div.style.cssText = 'color: white; padding: 10px;';

// Getting computed styles
// const styles = getComputedStyle(div);
// console.log(styles.backgroundColor);

// Inserting elements
const parent = document.createElement('ul');
const child = document.createElement('li');

parent.appendChild(child);
parent.prepend(child);               // Add at start
parent.append(child);                // Add at end
parent.insertBefore(child, parent.firstChild);

// Modern insertion methods
div.insertAdjacentHTML('beforebegin', '<p>Before</p>');
div.insertAdjacentHTML('afterbegin', '<p>First child</p>');
div.insertAdjacentHTML('beforeend', '<p>Last child</p>');
div.insertAdjacentHTML('afterend', '<p>After</p>');

// Removing elements
child.remove();
parent.removeChild(child);

// Cloning
const clone = div.cloneNode(true); // true = deep clone

console.log("DOM Manipulation methods demonstrated");`,language:"javascript"},{id:"js-events",title:"Event Handling",content:`# DOM Events

## Adding Listeners
- addEventListener
- removeEventListener

## Event Object
Contains info about the event.

## Event Flow
- Capturing (down)
- Target
- Bubbling (up)`,codeExample:`// Adding event listeners
const button = document.createElement('button');

function handleClick(event) {
  console.log('Button clicked!');
  console.log('Event type:', event.type);
  console.log('Target:', event.target);
  console.log('Current target:', event.currentTarget);
}

button.addEventListener('click', handleClick);

// Remove listener (must use same function reference)
button.removeEventListener('click', handleClick);

// One-time listener
button.addEventListener('click', () => {
  console.log('Only runs once!');
}, { once: true });

// Event delegation
const list = document.createElement('ul');
list.addEventListener('click', (event) => {
  if (event.target.tagName === 'LI') {
    console.log('List item clicked:', event.target.textContent);
  }
});

// Stopping propagation
button.addEventListener('click', (event) => {
  event.stopPropagation(); // Stop bubbling
  event.stopImmediatePropagation(); // Stop all handlers
});

// Prevent default behavior
const link = document.createElement('a');
link.addEventListener('click', (event) => {
  event.preventDefault(); // Don't navigate
  console.log('Link click prevented');
});

// Common events
const events = [
  // Mouse
  'click', 'dblclick', 'mouseenter', 'mouseleave', 'mousemove',
  // Keyboard
  'keydown', 'keyup', 'keypress',
  // Form
  'submit', 'change', 'input', 'focus', 'blur',
  // Document
  'DOMContentLoaded', 'load', 'scroll', 'resize'
];

console.log("Common events:", events);

// Keyboard event example
document.addEventListener('keydown', (event) => {
  console.log('Key:', event.key);
  console.log('Code:', event.code);
  console.log('Ctrl:', event.ctrlKey);
  console.log('Shift:', event.shiftKey);
});

// Custom events
const customEvent = new CustomEvent('userLoggedIn', {
  detail: { userId: 123, name: 'John' }
});

document.addEventListener('userLoggedIn', (event) => {
  console.log('User logged in:', event.detail);
});

document.dispatchEvent(customEvent);`,language:"javascript"},{id:"js-event-delegation",title:"Event Delegation",content:`# Event Delegation Pattern

Attach one listener to parent instead of many to children.

## Benefits
- Better performance
- Works with dynamic content
- Less memory usage`,codeExample:`// Without delegation - Bad for many items
function setupBadExample() {
  const items = document.querySelectorAll('.item');
  items.forEach(item => {
    item.addEventListener('click', handleClick);
  });
  // Problem: New items won't have listeners!
}

// With delegation - Better!
function setupGoodExample() {
  const container = document.querySelector('.container');
  
  container.addEventListener('click', (event) => {
    // Check if clicked element matches
    if (event.target.matches('.item')) {
      handleItemClick(event.target);
    }
    
    // Or check for closest matching parent
    const item = event.target.closest('.item');
    if (item) {
      handleItemClick(item);
    }
  });
}

function handleItemClick(item) {
  console.log('Item clicked:', item);
}

// Practical example: Todo list
class TodoList {
  constructor(container) {
    this.container = container;
    this.todos = [];
    this.setupListeners();
  }
  
  setupListeners() {
    // Single listener handles all actions
    this.container.addEventListener('click', (event) => {
      const target = event.target;
      
      if (target.matches('.delete-btn')) {
        const todoItem = target.closest('.todo-item');
        this.deleteTodo(todoItem.dataset.id);
      }
      
      if (target.matches('.toggle-btn')) {
        const todoItem = target.closest('.todo-item');
        this.toggleTodo(todoItem.dataset.id);
      }
      
      if (target.matches('.edit-btn')) {
        const todoItem = target.closest('.todo-item');
        this.editTodo(todoItem.dataset.id);
      }
    });
  }
  
  deleteTodo(id) {
    console.log('Delete:', id);
  }
  
  toggleTodo(id) {
    console.log('Toggle:', id);
  }
  
  editTodo(id) {
    console.log('Edit:', id);
  }
}

// Data attributes for delegation
const html = \`
<ul class="container">
  <li class="todo-item" data-id="1" data-priority="high">
    <span>Todo 1</span>
    <button class="toggle-btn">Toggle</button>
    <button class="edit-btn">Edit</button>
    <button class="delete-btn">Delete</button>
  </li>
</ul>
\`;

console.log("Event delegation example with data attributes");`,language:"javascript"}]},{id:"js-error-handling",title:"Error Handling",description:"Learn to handle errors gracefully with try/catch and custom errors.",difficulty:"intermediate",duration:"2 hours",topics:["Try/Catch","Error Types","Custom Errors","Debugging"],lessons:[{id:"js-try-catch",title:"Try/Catch/Finally",content:`# Error Handling with Try/Catch

Handle runtime errors gracefully.

## Syntax
- try: Code that might throw
- catch: Handle the error
- finally: Always runs

## Error Object
Contains name, message, and stack.`,codeExample:`// Basic try/catch
try {
  const result = riskyOperation();
  console.log(result);
} catch (error) {
  console.error("Error caught:", error.message);
}

// Try/catch/finally
function processFile(filename) {
  let file = null;
  try {
    file = openFile(filename);
    processData(file);
  } catch (error) {
    console.error("Processing failed:", error.message);
  } finally {
    // Always runs - cleanup
    if (file) {
      console.log("Closing file...");
      // closeFile(file);
    }
  }
}

// Throwing errors
function divide(a, b) {
  if (b === 0) {
    throw new Error("Division by zero");
  }
  return a / b;
}

try {
  console.log(divide(10, 2));
  console.log(divide(10, 0)); // Throws
} catch (error) {
  console.error("Math error:", error.message);
}

// Error object properties
try {
  throw new Error("Something went wrong");
} catch (error) {
  console.log("\\nError properties:");
  console.log("Name:", error.name);
  console.log("Message:", error.message);
  console.log("Stack:", error.stack?.substring(0, 100) + "...");
}

// Re-throwing errors
function outer() {
  try {
    inner();
  } catch (error) {
    if (error.message.includes("critical")) {
      throw error; // Re-throw critical errors
    }
    console.log("Handled non-critical error");
  }
}

function inner() {
  throw new Error("Non-critical failure");
}

outer();`,language:"javascript"},{id:"js-error-types",title:"Error Types",content:`# Built-in Error Types

JavaScript has several built-in error types:

## Error Types
- **Error** - Generic error
- **SyntaxError** - Invalid syntax
- **ReferenceError** - Invalid reference
- **TypeError** - Wrong type operation
- **RangeError** - Number out of range
- **URIError** - Invalid URI`,codeExample:`// TypeError - Wrong type
try {
  const num = 42;
  num.toUpperCase();
} catch (error) {
  console.log("TypeError:", error.message);
}

// ReferenceError - Undefined variable
try {
  console.log(undefinedVariable);
} catch (error) {
  console.log("ReferenceError:", error.message);
}

// RangeError - Out of range
try {
  const arr = new Array(-1);
} catch (error) {
  console.log("RangeError:", error.message);
}

// SyntaxError (caught during parsing, not runtime)
try {
  eval("const x = ;");
} catch (error) {
  console.log("SyntaxError:", error.message);
}

// URIError
try {
  decodeURIComponent('%');
} catch (error) {
  console.log("URIError:", error.message);
}

// Checking error types
function handleError(error) {
  if (error instanceof TypeError) {
    console.log("Type problem - check your types");
  } else if (error instanceof ReferenceError) {
    console.log("Reference problem - variable undefined");
  } else if (error instanceof RangeError) {
    console.log("Range problem - value out of bounds");
  } else {
    console.log("Unknown error:", error.message);
  }
}

try {
  null.toString();
} catch (error) {
  handleError(error);
}`,language:"javascript"},{id:"js-custom-errors",title:"Custom Errors",content:`# Creating Custom Errors

Extend Error class for specific error types.

## Benefits
- Better error identification
- Custom properties
- Cleaner error handling`,codeExample:`// Custom Error Class
class ValidationError extends Error {
  constructor(field, message) {
    super(message);
    this.name = "ValidationError";
    this.field = field;
  }
}

class NetworkError extends Error {
  constructor(status, message) {
    super(message);
    this.name = "NetworkError";
    this.status = status;
  }
}

class AuthenticationError extends Error {
  constructor(message = "Authentication failed") {
    super(message);
    this.name = "AuthenticationError";
  }
}

// Using custom errors
function validateUser(user) {
  if (!user.email) {
    throw new ValidationError("email", "Email is required");
  }
  if (!user.email.includes("@")) {
    throw new ValidationError("email", "Invalid email format");
  }
  if (!user.password || user.password.length < 8) {
    throw new ValidationError("password", "Password must be 8+ chars");
  }
  return true;
}

// Handling specific error types
function processUser(user) {
  try {
    validateUser(user);
    console.log("User is valid!");
  } catch (error) {
    if (error instanceof ValidationError) {
      console.log(\`Validation failed for \${error.field}: \${error.message}\`);
    } else if (error instanceof AuthenticationError) {
      console.log("Please log in again");
    } else {
      throw error; // Re-throw unknown errors
    }
  }
}

processUser({ email: "test", password: "123" });
processUser({ email: "test@example.com", password: "password123" });

// Error factory
const ErrorFactory = {
  validation: (field, msg) => new ValidationError(field, msg),
  network: (status, msg) => new NetworkError(status, msg),
  auth: (msg) => new AuthenticationError(msg)
};

throw ErrorFactory.validation("username", "Username taken");`,language:"javascript"}]},{id:"js-regex",title:"Regular Expressions",description:"Master pattern matching with regular expressions.",difficulty:"intermediate",duration:"3 hours",topics:["Pattern Syntax","Methods","Common Patterns","Groups & Lookaheads"],lessons:[{id:"js-regex-basics",title:"RegEx Basics",content:`# Regular Expressions

Patterns for matching text.

## Creating RegEx
- Literal: /pattern/flags
- Constructor: new RegExp("pattern", "flags")

## Common Flags
- g: Global (all matches)
- i: Case insensitive
- m: Multiline`,codeExample:`// Creating regular expressions
const regex1 = /hello/i;
const regex2 = new RegExp("hello", "i");

// Basic patterns
const text = "Hello World! hello again.";

console.log("Test:", regex1.test(text)); // true
console.log("Match:", text.match(regex1)); // First match

// Global flag - find all
const globalRegex = /hello/gi;
console.log("All matches:", text.match(globalRegex));

// Character classes
const digits = "My phone: 123-456-7890";
console.log("\\nDigits:", digits.match(/\\d+/g));

const words = "Hello World 123";
console.log("Words:", words.match(/\\w+/g));
console.log("Non-digits:", words.match(/\\D+/g));

// Quantifiers
console.log("\\nQuantifiers:");
console.log("a*:", "aaa".match(/a*/g));      // 0 or more
console.log("a+:", "aaa".match(/a+/g));      // 1 or more
console.log("a?:", "aaa".match(/a?/g));      // 0 or 1
console.log("a{2}:", "aaa".match(/a{2}/g));  // Exactly 2
console.log("a{1,2}:", "aaa".match(/a{1,2}/g)); // 1 to 2

// Anchors
console.log("\\nAnchors:");
console.log("^Hello:", /^Hello/.test("Hello World")); // Start
console.log("World$:", /World$/.test("Hello World")); // End
console.log("\\\\bword\\\\b:", "a word here".match(/\\bword\\b/)); // Word boundary`,language:"javascript"},{id:"js-regex-methods",title:"RegEx Methods",content:`# RegEx Methods

## RegExp Methods
- test() - Returns boolean
- exec() - Returns match details

## String Methods
- match() - Find matches
- matchAll() - Iterator of all matches
- replace() - Replace matches
- split() - Split by pattern
- search() - Find index`,codeExample:`const text = "The quick brown fox jumps over the lazy dog";

// test() - Returns boolean
console.log("Has 'fox':", /fox/.test(text));

// exec() - Returns match with details
const regex = /\\w+/g;
let match;
console.log("\\nexec() results:");
while ((match = regex.exec(text)) !== null) {
  if (match.index < 20) { // Limit output
    console.log(\`Found "\${match[0]}" at index \${match.index}\`);
  }
}

// match() - Returns array of matches
console.log("\\nmatch():", text.match(/\\b\\w{4}\\b/g)); // 4-letter words

// matchAll() - Returns iterator with details
console.log("\\nmatchAll():");
const matches = text.matchAll(/\\b(\\w{3})\\b/g);
for (const m of matches) {
  console.log(\`"\${m[0]}" at \${m.index}\`);
}

// replace() - Replace matches
console.log("\\nreplace():", text.replace(/fox/, "cat"));
console.log("replaceAll:", text.replace(/the/gi, "a"));

// Replace with function
const result = text.replace(/\\b\\w+\\b/g, (word) => {
  return word.length > 4 ? word.toUpperCase() : word;
});
console.log("Function replace:", result);

// split() - Split by pattern
const csv = "apple, banana,  cherry,orange";
console.log("\\nsplit():", csv.split(/,\\s*/));

// search() - Returns index
console.log("\\nsearch():", text.search(/brown/)); // 10`,language:"javascript"},{id:"js-regex-groups",title:"Groups & Lookaheads",content:`# Groups and Lookaheads

## Capturing Groups
Capture parts of the match with ().

## Non-Capturing Groups
Group without capturing with (?:).

## Lookaheads
Match based on what follows.`,codeExample:`// Capturing groups
const dateStr = "2024-01-15";
const dateRegex = /(\\d{4})-(\\d{2})-(\\d{2})/;
const dateMatch = dateStr.match(dateRegex);
console.log("Full match:", dateMatch[0]);
console.log("Year:", dateMatch[1]);
console.log("Month:", dateMatch[2]);
console.log("Day:", dateMatch[3]);

// Named groups
const namedRegex = /(?<year>\\d{4})-(?<month>\\d{2})-(?<day>\\d{2})/;
const namedMatch = dateStr.match(namedRegex);
console.log("\\nNamed groups:", namedMatch.groups);

// Non-capturing groups
const urlRegex = /https?:\\/\\/(?:www\\.)?([\\w.]+)/;
const url = "https://www.example.com";
console.log("\\nDomain:", url.match(urlRegex)[1]);

// Backreferences
const repeated = "hello hello world";
const dupRegex = /\\b(\\w+)\\s+\\1\\b/;
console.log("\\nDuplicate:", repeated.match(dupRegex));

// Lookahead - Match if followed by
const prices = "100 dollars 50 euros 75 dollars";
console.log("\\nPositive lookahead:");
console.log("Before 'dollars':", prices.match(/\\d+(?= dollars)/g));

// Negative lookahead - Match if NOT followed by
console.log("Not before 'dollars':", prices.match(/\\d+(?! dollars)/g));

// Lookbehind - Match if preceded by
const data = "$100 and €50";
console.log("\\nPositive lookbehind:");
console.log("After $:", data.match(/(?<=\\$)\\d+/g));

// Replace with groups
const name = "John Doe";
const reversed = name.replace(/(\\w+)\\s(\\w+)/, "$2, $1");
console.log("\\nReversed:", reversed);

// Complex example: Extract info
const log = "[ERROR] 2024-01-15 10:30:45 - User not found";
const logRegex = /\\[(?<level>\\w+)\\]\\s(?<date>[\\d-]+)\\s(?<time>[\\d:]+)\\s-\\s(?<message>.+)/;
const logMatch = log.match(logRegex);
console.log("\\nLog parsed:", logMatch.groups);`,language:"javascript"},{id:"js-regex-patterns",title:"Common Patterns",content:`# Common RegEx Patterns

Useful patterns for validation and extraction.`,codeExample:`// Email validation
const emailRegex = /^[\\w.-]+@[\\w.-]+\\.\\w{2,}$/;
console.log("Email valid:", emailRegex.test("user@example.com"));
console.log("Email invalid:", emailRegex.test("invalid-email"));

// Phone number (US format)
const phoneRegex = /^\\(?\\d{3}\\)?[-.\\s]?\\d{3}[-.\\s]?\\d{4}$/;
console.log("\\nPhone tests:");
console.log(phoneRegex.test("(123) 456-7890")); // true
console.log(phoneRegex.test("123-456-7890"));   // true
console.log(phoneRegex.test("1234567890"));     // true

// URL validation
const urlRegex = /^(https?:\\/\\/)?(www\\.)?[\\w-]+\\.[a-z]{2,}(\\/\\S*)?$/i;
console.log("\\nURL tests:");
console.log(urlRegex.test("https://www.example.com")); // true
console.log(urlRegex.test("example.com/path"));        // true

// Password strength
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$/;
console.log("\\nPassword tests:");
console.log(passwordRegex.test("Weak1!"));           // false (too short)
console.log(passwordRegex.test("StrongPass1!"));     // true

// Extract hashtags
const tweet = "Learning #JavaScript and #WebDevelopment is fun! #coding";
const hashtags = tweet.match(/#\\w+/g);
console.log("\\nHashtags:", hashtags);

// Extract URLs from text
const textWithUrls = "Visit https://google.com or http://example.com";
const urls = textWithUrls.match(/https?:\\/\\/[\\w.-]+/g);
console.log("URLs:", urls);

// Validate credit card (basic)
const ccRegex = /^\\d{4}[- ]?\\d{4}[- ]?\\d{4}[- ]?\\d{4}$/;
console.log("\\nCC valid:", ccRegex.test("1234-5678-9012-3456"));

// Remove HTML tags
const html = "<p>Hello <b>World</b>!</p>";
const plainText = html.replace(/<[^>]*>/g, "");
console.log("\\nPlain text:", plainText);

// Sanitize input
const input = "  Hello   World!  ";
const sanitized = input.trim().replace(/\\s+/g, " ");
console.log("Sanitized:", sanitized);`,language:"javascript"}]}];function jl({topic:e,basePath:t,categoryTitle:n,onBack:o}){const r=Ie(),s=a=>{r(`${t}/${e.id}/${a}`)},i=e.difficulty==="beginner"?"success":e.difficulty==="intermediate"?"warning":"destructive";return d.jsxs(yt.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},className:"container mx-auto px-4 py-8",children:[d.jsxs(J,{variant:"ghost",onClick:o,className:"mb-6 gap-2",children:[d.jsx(G2,{className:"h-4 w-4"}),"Back to ",n]}),d.jsxs("div",{className:"mb-8",children:[d.jsxs("div",{className:"flex items-start justify-between flex-wrap gap-4",children:[d.jsxs("div",{children:[d.jsx("h1",{className:"text-3xl font-bold mb-2",children:e.title}),d.jsx("p",{className:"text-muted-foreground max-w-2xl",children:e.description})]}),d.jsx(Be,{variant:i,className:"text-sm",children:e.difficulty})]}),d.jsxs("div",{className:"flex items-center gap-6 mt-4 text-sm text-muted-foreground",children:[d.jsxs("div",{className:"flex items-center gap-2",children:[d.jsx(Ys,{className:"h-4 w-4"}),d.jsx("span",{children:e.duration})]}),d.jsxs("div",{className:"flex items-center gap-2",children:[d.jsx(Rs,{className:"h-4 w-4"}),d.jsxs("span",{children:[e.lessons.length," lessons"]})]})]}),d.jsx("div",{className:"flex flex-wrap gap-2 mt-4",children:e.topics.map(a=>d.jsx(Be,{variant:"outline",children:a},a))})]}),d.jsxs("div",{className:"space-y-4",children:[d.jsxs("h2",{className:"text-xl font-semibold flex items-center gap-2",children:[d.jsx(Rs,{className:"h-5 w-5"}),"Lessons"]}),e.lessons.length===0?d.jsx(Bt,{className:"border-dashed",children:d.jsx(an,{className:"py-12 text-center",children:d.jsx("p",{className:"text-muted-foreground",children:"Lessons for this topic are coming soon!"})})}):d.jsx("div",{className:"grid gap-4",children:e.lessons.map((a,l)=>d.jsx(yt.div,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{delay:l*.1},children:d.jsx(Bt,{className:"hover:shadow-md transition-all hover:border-primary/50 cursor-pointer group",onClick:()=>s(a.id),children:d.jsx(an,{className:"p-4",children:d.jsxs("div",{className:"flex items-center justify-between",children:[d.jsxs("div",{className:"flex items-center gap-4",children:[d.jsx("div",{className:"flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary font-semibold",children:l+1}),d.jsxs("div",{children:[d.jsx("h3",{className:"font-medium group-hover:text-primary transition-colors",children:a.title}),a.language&&d.jsx(Be,{variant:"secondary",className:"mt-1 text-xs",children:a.language})]})]}),d.jsx(J,{variant:"ghost",size:"icon",className:"opacity-0 group-hover:opacity-100 transition-opacity",children:d.jsx(lo,{className:"h-4 w-4"})})]})})})},a.id))})]}),e.lessons.length>0&&d.jsx("div",{className:"mt-8 flex justify-center",children:d.jsxs(J,{size:"lg",onClick:()=>s(e.lessons[0].id),className:"gap-2",children:[d.jsx(lo,{className:"h-5 w-5"}),"Start Learning"]})})]})}function Pl({topic:e,lesson:t,lessonIndex:n,basePath:o}){const r=Ie(),[s,i]=m.useState(!1),a=e.lessons[n-1],l=e.lessons[n+1],c=t.language||"javascript",u=async()=>{t.codeExample&&(await navigator.clipboard.writeText(t.codeExample),i(!0),setTimeout(()=>i(!1),2e3))},f=()=>{r("/playground",{state:{code:t.codeExample,language:c}})},p=w=>{const v=[],x=w.split(`
`);let h=0,g=0;for(;h<x.length;){const b=x[h],S=b.match(/^```(\w*)/);if(S){const C=S[1]||"javascript",k=[];for(h++;h<x.length&&!x[h].startsWith("```");)k.push(x[h]),h++;h++;const E=k.join(`
`);v.push(d.jsx("div",{className:"my-4",children:d.jsxs("div",{className:"rounded-lg border bg-card overflow-hidden",children:[d.jsxs("div",{className:"flex items-center justify-between px-4 py-2 border-b bg-muted/50",children:[d.jsxs("div",{className:"flex items-center gap-2",children:[d.jsx(Ns,{className:"h-4 w-4 text-muted-foreground"}),d.jsx(Be,{variant:"secondary",className:"text-xs",children:C})]}),d.jsxs(J,{variant:"ghost",size:"sm",className:"h-7 text-xs gap-1",onClick:()=>{navigator.clipboard.writeText(E)},children:[d.jsx(Wu,{className:"h-3 w-3"}),"Copy"]})]}),d.jsx("div",{className:"overflow-x-auto",children:d.jsx("pre",{className:"p-4 text-sm font-mono leading-relaxed",children:d.jsx("code",{children:E.split(`
`).map((j,R)=>d.jsxs("div",{className:"table-row",children:[d.jsx("span",{className:"table-cell pr-4 text-muted-foreground select-none text-right w-8 opacity-50",children:R+1}),d.jsx("span",{className:"table-cell",children:Rg(j,C)})]},R))})})})]})},g++));continue}if(b.trim().startsWith("|")&&b.trim().endsWith("|")){const C=[];for(;h<x.length&&x[h].trim().startsWith("|")&&x[h].trim().endsWith("|");)C.push(x[h]),h++;if(C.length>=2){const k=F=>F.split("|").slice(1,-1).map(_=>_.trim()),E=k(C[0]),j=F=>/^\|[\s\-:]+\|$/.test(F.replace(/\|/g,"|").replace(/[^|\-:\s]/g,""));let R=1;C.length>1&&j(C[1])&&(R=2);const A=C.slice(R).map(k);v.push(d.jsx("div",{className:"my-4 overflow-x-auto",children:d.jsxs("table",{className:"w-full border-collapse border border-border rounded-lg text-sm",children:[d.jsx("thead",{children:d.jsx("tr",{className:"bg-muted/50",children:E.map((F,_)=>d.jsx("th",{className:"border border-border px-4 py-2 text-left font-semibold",children:y(F)},_))})}),d.jsx("tbody",{children:A.map((F,_)=>d.jsx("tr",{className:_%2===0?"bg-background":"bg-muted/20",children:F.map((W,I)=>d.jsx("td",{className:"border border-border px-4 py-2",children:y(W)},I))},_))})]})},g++));continue}}b.startsWith("# ")?v.push(d.jsx("h1",{className:"text-3xl font-bold mt-8 mb-4 first:mt-0",children:b.slice(2)},g++)):b.startsWith("## ")?v.push(d.jsx("h2",{className:"text-2xl font-semibold mt-8 mb-3",children:b.slice(3)},g++)):b.startsWith("### ")?v.push(d.jsx("h3",{className:"text-xl font-semibold mt-6 mb-2",children:b.slice(4)},g++)):b.startsWith("- ")?v.push(d.jsx("li",{className:"ml-6 mb-1 list-disc",children:y(b.slice(2))},g++)):b.match(/^\d+\. /)?v.push(d.jsx("li",{className:"ml-6 mb-1 list-decimal",children:y(b.replace(/^\d+\. /,""))},g++)):b.startsWith("---")?v.push(d.jsx("hr",{className:"my-6 border-border"},g++)):b.trim()===""?v.push(d.jsx("div",{className:"h-2"},g++)):v.push(d.jsx("p",{className:"mb-3 text-muted-foreground leading-relaxed",children:y(b)},g++)),h++}return v},y=w=>w.split(/(`[^`]+`)/).map((x,h)=>x.startsWith("`")&&x.endsWith("`")?d.jsx("code",{className:"bg-muted px-1.5 py-0.5 rounded text-sm font-mono text-primary",children:x.slice(1,-1)},h):x.split(/(\*\*[^*]+\*\*)/).map((b,S)=>b.startsWith("**")&&b.endsWith("**")?d.jsx("strong",{className:"text-foreground font-semibold",children:b.slice(2,-2)},`${h}-${S}`):d.jsx("span",{children:b},`${h}-${S}`)));return d.jsxs(yt.div,{initial:{opacity:0},animate:{opacity:1},className:"h-[calc(100vh-4rem)] flex flex-col",children:[d.jsxs("div",{className:"border-b bg-card px-6 py-4 shrink-0",children:[d.jsxs("div",{className:"flex items-center gap-2 text-sm text-muted-foreground mb-2",children:[d.jsx(Rs,{className:"h-4 w-4"}),d.jsx("span",{children:e.title}),d.jsx(Ra,{className:"h-4 w-4"}),d.jsx("span",{className:"text-foreground font-medium",children:t.title})]}),d.jsx("div",{className:"flex items-center justify-between",children:d.jsx("h1",{className:"text-2xl font-bold",children:t.title})})]}),d.jsx("div",{className:"flex-1 min-h-0 overflow-hidden",children:d.jsx(pl,{className:"h-full",children:d.jsxs("div",{className:"p-6 max-w-4xl mx-auto",children:[d.jsx("div",{className:"prose prose-slate dark:prose-invert max-w-none",children:p(t.content)}),t.codeExample&&d.jsx("div",{className:"mt-8",children:d.jsxs("div",{className:"rounded-lg border bg-card overflow-hidden",children:[d.jsxs("div",{className:"flex items-center justify-between px-4 py-2 border-b bg-muted/50",children:[d.jsxs("div",{className:"flex items-center gap-2",children:[d.jsx(Ns,{className:"h-4 w-4 text-muted-foreground"}),d.jsx("span",{className:"text-sm font-medium",children:"Code Example"}),d.jsx(Be,{variant:"secondary",className:"text-xs",children:c})]}),d.jsxs("div",{className:"flex items-center gap-1",children:[d.jsxs(J,{onClick:u,variant:"ghost",size:"sm",className:"gap-1 h-7 text-xs",children:[s?d.jsx(Ff,{className:"h-3 w-3"}):d.jsx(Wu,{className:"h-3 w-3"}),s?"Copied!":"Copy"]}),d.jsxs(J,{onClick:f,variant:"ghost",size:"sm",className:"gap-1 h-7 text-xs",children:[d.jsx(Q2,{className:"h-3 w-3"}),"Try in Playground"]})]})]}),d.jsx("div",{className:"overflow-x-auto",children:d.jsx("pre",{className:"p-4 text-sm font-mono leading-relaxed",children:d.jsx("code",{className:q("block whitespace-pre",c==="javascript"&&"language-javascript",c==="typescript"&&"language-typescript",c==="html"&&"language-html",c==="css"&&"language-css",c==="python"&&"language-python",c==="cpp"&&"language-cpp"),children:t.codeExample.split(`
`).map((w,v)=>d.jsxs("div",{className:"table-row",children:[d.jsx("span",{className:"table-cell pr-4 text-muted-foreground select-none text-right w-8",children:v+1}),d.jsx("span",{className:"table-cell",children:Rg(w,c)})]},v))})})})]})})]})})}),d.jsx("div",{className:"border-t bg-card px-6 py-4 shrink-0",children:d.jsxs("div",{className:"flex items-center justify-between max-w-4xl mx-auto",children:[d.jsxs(J,{variant:"outline",onClick:()=>a&&r(`${o}/${e.id}/${a.id}`),disabled:!a,className:"gap-2",children:[d.jsx(sx,{className:"h-4 w-4"}),d.jsx("span",{className:"hidden sm:inline",children:(a==null?void 0:a.title)||"Previous"}),d.jsx("span",{className:"sm:hidden",children:"Prev"})]}),d.jsxs("span",{className:"text-sm text-muted-foreground",children:[n+1," / ",e.lessons.length]}),d.jsxs(J,{onClick:()=>l&&r(`${o}/${e.id}/${l.id}`),disabled:!l,className:"gap-2",children:[d.jsx("span",{className:"hidden sm:inline",children:(l==null?void 0:l.title)||"Next"}),d.jsx("span",{className:"sm:hidden",children:"Next"}),d.jsx(Ra,{className:"h-4 w-4"})]})]})})]})}function Rg(e,t){if(!e)return" ";const n={javascript:["const","let","var","function","return","if","else","for","while","class","import","export","from","async","await","try","catch","throw","new","this","true","false","null","undefined","typeof","instanceof"],js:["const","let","var","function","return","if","else","for","while","class","import","export","from","async","await","try","catch","throw","new","this","true","false","null","undefined","typeof","instanceof"],typescript:["const","let","var","function","return","if","else","for","while","class","import","export","from","async","await","try","catch","throw","new","this","true","false","null","undefined","interface","type","extends","implements","typeof","instanceof"],ts:["const","let","var","function","return","if","else","for","while","class","import","export","from","async","await","try","catch","throw","new","this","true","false","null","undefined","interface","type","extends","implements","typeof","instanceof"],python:["def","return","if","else","elif","for","while","class","import","from","try","except","raise","with","as","True","False","None","and","or","not","in","is","lambda","yield","async","await"],cpp:["int","float","double","char","void","bool","string","return","if","else","for","while","class","struct","public","private","protected","include","using","namespace","std","cout","cin","endl","true","false","nullptr","new","delete"]},o=n[t]||n.javascript||[];return e.trim().startsWith("//")||e.trim().startsWith("#")?d.jsx("span",{className:"text-muted-foreground italic",children:e}):e.split(/(\s+|[(){}[\];,.<>]|"[^"]*"|'[^']*'|`[^`]*`)/).map((s,i)=>s.startsWith('"')||s.startsWith("'")||s.startsWith("`")?d.jsx("span",{className:"text-green-600 dark:text-green-400",children:s},i):/^\d+$/.test(s)?d.jsx("span",{className:"text-orange-600 dark:text-orange-400",children:s},i):o.includes(s)?d.jsx("span",{className:"text-purple-600 dark:text-purple-400 font-medium",children:s},i):["console","print","cout","log","error","warn"].includes(s)?d.jsx("span",{className:"text-blue-600 dark:text-blue-400",children:s},i):d.jsx("span",{children:s},i))}const XL={beginner:"success",intermediate:"warning",advanced:"destructive"};function ZL(){const e=Ie();return d.jsxs("div",{className:"container mx-auto px-4 py-8",children:[d.jsxs("div",{className:"mb-8",children:[d.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[d.jsx("div",{className:"w-12 h-12 rounded-lg bg-yellow-500/10 flex items-center justify-center",children:d.jsx(Ns,{className:"h-6 w-6 text-yellow-500"})}),d.jsxs("div",{children:[d.jsx("h1",{className:"text-3xl font-bold",children:"JavaScript"}),d.jsx("p",{className:"text-muted-foreground",children:"Master the language of the web"})]})]}),d.jsx("p",{className:"text-muted-foreground max-w-3xl",children:"From variables and functions to async programming and advanced patterns, this comprehensive guide will take you from beginner to proficient JavaScript developer."})]}),d.jsx("div",{className:"grid md:grid-cols-2 gap-6",children:QL.map((t,n)=>d.jsx(yt.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.3,delay:n*.1},children:d.jsxs(Bt,{className:"h-full hover:shadow-lg transition-all hover:border-primary/50 group cursor-pointer",onClick:()=>e(`/javascript/${t.id}`),children:[d.jsxs(vr,{children:[d.jsxs("div",{className:"flex items-start justify-between",children:[d.jsx(br,{className:"text-xl",children:t.title}),d.jsx(Be,{variant:XL[t.difficulty],children:t.difficulty})]}),d.jsx(wr,{children:t.description})]}),d.jsxs(an,{children:[d.jsxs("div",{className:"flex items-center gap-4 text-sm text-muted-foreground mb-4",children:[d.jsxs("div",{className:"flex items-center gap-1",children:[d.jsx(Ys,{className:"h-4 w-4"}),d.jsx("span",{children:t.duration})]}),d.jsxs("div",{className:"flex items-center gap-1",children:[d.jsx(lo,{className:"h-4 w-4"}),d.jsxs("span",{children:[t.lessons.length," lessons"]})]})]}),d.jsxs("div",{className:"flex flex-wrap gap-2 mb-4",children:[t.topics.slice(0,3).map(o=>d.jsx(Be,{variant:"outline",className:"text-xs",children:o},o)),t.topics.length>3&&d.jsxs(Be,{variant:"outline",className:"text-xs",children:["+",t.topics.length-3," more"]})]}),d.jsxs(J,{className:"w-full group-hover:bg-primary group-hover:text-primary-foreground",variant:"outline",children:["Start Learning",d.jsx(Ks,{className:"h-4 w-4 ml-2"})]})]})]})},t.id))})]})}function eD(){const{topicId:e}=Wn(),t=Ie(),n=cn("javascript",e||"");return n?d.jsx(jl,{topic:n,basePath:"/javascript",categoryTitle:"JavaScript",onBack:()=>t("/javascript")}):d.jsxs("div",{className:"container mx-auto px-4 py-8 text-center",children:[d.jsx("h1",{className:"text-2xl font-bold mb-4",children:"Topic not found"}),d.jsx(J,{onClick:()=>t("/javascript"),children:"Back to JavaScript"})]})}function tD(){const{topicId:e,lessonId:t}=Wn(),n=Ie(),o=cn("javascript",e||""),r=kl("javascript",e||"",t||"");if(!o||!r)return d.jsxs("div",{className:"container mx-auto px-4 py-8 text-center",children:[d.jsx("h1",{className:"text-2xl font-bold mb-4",children:"Lesson not found"}),d.jsx(J,{onClick:()=>n("/javascript"),children:"Back to JavaScript"})]});const s=o.lessons.findIndex(i=>i.id===t);return d.jsx(Pl,{topic:o,lesson:r,lessonIndex:s,basePath:"/javascript"})}function nD(){return d.jsxs(Ws,{children:[d.jsx(be,{index:!0,element:d.jsx(ZL,{})}),d.jsx(be,{path:":topicId",element:d.jsx(eD,{})}),d.jsx(be,{path:":topicId/:lessonId",element:d.jsx(tD,{})})]})}const oD=[{id:"html-basics",title:"HTML Fundamentals",description:"Learn the building blocks of web pages with semantic HTML.",difficulty:"beginner",duration:"2 hours",topics:["HTML Structure","Semantic Elements","Forms","Accessibility"],lessons:[{id:"html-structure",title:"HTML Document Structure",content:`# HTML Document Structure

Every HTML document follows a basic structure.

## Essential Elements
- <!DOCTYPE html> - Declares HTML5
- <html> - Root element
- <head> - Metadata container
- <body> - Visible content`,codeExample:`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Website</title>
</head>
<body>
  <header>
    <nav>
      <a href="/">Home</a>
      <a href="/about">About</a>
    </nav>
  </header>
  
  <main>
    <h1>Welcome to My Website</h1>
    <p>This is a paragraph of text.</p>
  </main>
  
  <footer>
    <p>&copy; 2024 My Website</p>
  </footer>
</body>
</html>`,language:"html"}]},{id:"css-basics",title:"CSS Basics",description:"Style your web pages with CSS fundamentals.",difficulty:"beginner",duration:"3 hours",topics:["Selectors","Box Model","Colors & Typography","Units"],lessons:[{id:"css-selectors",title:"CSS Selectors",content:`# CSS Selectors

Selectors determine which HTML elements to style.

## Basic Selectors
- Element: p { }
- Class: .classname { }
- ID: #idname { }`,codeExample:`/* Element Selector */
p {
  color: #333;
  line-height: 1.6;
}

/* Class Selector */
.highlight {
  background-color: yellow;
  padding: 0.25rem;
}

/* ID Selector */
#main-title {
  font-size: 2.5rem;
  color: #1a1a1a;
}

/* Pseudo-classes */
a:hover {
  color: #3b82f6;
  text-decoration: underline;
}

button:focus {
  outline: 2px solid #3b82f6;
}

li:first-child {
  font-weight: bold;
}`,language:"css"}]},{id:"css-layout",title:"CSS Layout",description:"Master Flexbox and Grid for modern layouts.",difficulty:"intermediate",duration:"4 hours",topics:["Flexbox","CSS Grid","Positioning","Responsive Design"],lessons:[{id:"css-flexbox",title:"Flexbox",content:`# Flexbox Layout

Flexbox is a one-dimensional layout method.

## Container Properties
- display: flex
- flex-direction
- justify-content
- align-items`,codeExample:`.flex-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}

.navbar {
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
}

.card-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
}

.card {
  flex: 1 1 300px;
}

.center-content {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}`,language:"css"}]},{id:"css-advanced",title:"Advanced CSS",description:"Animations, transitions, and modern CSS features.",difficulty:"advanced",duration:"3 hours",topics:["Animations","Transitions","CSS Variables","Modern Features"],lessons:[]}],rD={beginner:"success",intermediate:"warning",advanced:"destructive"};function sD(){const e=Ie();return d.jsxs("div",{className:"container mx-auto px-4 py-8",children:[d.jsxs("div",{className:"mb-8",children:[d.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[d.jsx("div",{className:"w-12 h-12 rounded-lg bg-orange-500/10 flex items-center justify-center",children:d.jsx(Uf,{className:"h-6 w-6 text-orange-500"})}),d.jsxs("div",{children:[d.jsx("h1",{className:"text-3xl font-bold",children:"HTML & CSS"}),d.jsx("p",{className:"text-muted-foreground",children:"Build beautiful, responsive web pages"})]})]}),d.jsx("p",{className:"text-muted-foreground max-w-3xl",children:"Learn to structure content with semantic HTML and style it with modern CSS. Master Flexbox, Grid, and responsive design techniques."})]}),d.jsx("div",{className:"grid md:grid-cols-2 gap-6",children:oD.map((t,n)=>d.jsx(yt.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.3,delay:n*.1},children:d.jsxs(Bt,{className:"h-full hover:shadow-lg transition-all hover:border-primary/50 group cursor-pointer",onClick:()=>e(`/html-css/${t.id}`),children:[d.jsxs(vr,{children:[d.jsxs("div",{className:"flex items-start justify-between",children:[d.jsx(br,{className:"text-xl",children:t.title}),d.jsx(Be,{variant:rD[t.difficulty],children:t.difficulty})]}),d.jsx(wr,{children:t.description})]}),d.jsxs(an,{children:[d.jsxs("div",{className:"flex items-center gap-4 text-sm text-muted-foreground mb-4",children:[d.jsxs("div",{className:"flex items-center gap-1",children:[d.jsx(Ys,{className:"h-4 w-4"}),d.jsx("span",{children:t.duration})]}),d.jsxs("div",{className:"flex items-center gap-1",children:[d.jsx(lo,{className:"h-4 w-4"}),d.jsxs("span",{children:[t.lessons.length," lessons"]})]})]}),d.jsx("div",{className:"flex flex-wrap gap-2 mb-4",children:t.topics.map(o=>d.jsx(Be,{variant:"outline",className:"text-xs",children:o},o))}),d.jsxs(J,{className:"w-full group-hover:bg-primary group-hover:text-primary-foreground",variant:"outline",children:["Start Learning",d.jsx(Ks,{className:"h-4 w-4 ml-2"})]})]})]})},t.id))})]})}function iD(){const{topicId:e}=Wn(),t=Ie(),n=cn("html-css",e||"");return n?d.jsx(jl,{topic:n,basePath:"/html-css",categoryTitle:"HTML & CSS",onBack:()=>t("/html-css")}):d.jsxs("div",{className:"container mx-auto px-4 py-8 text-center",children:[d.jsx("h1",{className:"text-2xl font-bold mb-4",children:"Topic not found"}),d.jsx(J,{onClick:()=>t("/html-css"),children:"Back to HTML & CSS"})]})}function aD(){const{topicId:e,lessonId:t}=Wn(),n=Ie(),o=cn("html-css",e||""),r=kl("html-css",e||"",t||"");if(!o||!r)return d.jsxs("div",{className:"container mx-auto px-4 py-8 text-center",children:[d.jsx("h1",{className:"text-2xl font-bold mb-4",children:"Lesson not found"}),d.jsx(J,{onClick:()=>n("/html-css"),children:"Back to HTML & CSS"})]});const s=o.lessons.findIndex(i=>i.id===t);return d.jsx(Pl,{topic:o,lesson:r,lessonIndex:s,basePath:"/html-css"})}function lD(){return d.jsxs(Ws,{children:[d.jsx(be,{index:!0,element:d.jsx(sD,{})}),d.jsx(be,{path:":topicId",element:d.jsx(iD,{})}),d.jsx(be,{path:":topicId/:lessonId",element:d.jsx(aD,{})})]})}const cD=[{id:"js-basics",title:"JavaScript Basics",description:"Learn the fundamentals of JavaScript including variables, data types, and operators.",difficulty:"beginner",duration:"2 hours",topics:["Variables","Data Types","Operators","Type Coercion"],lessons:[{id:"js-variables",title:"Variables in JavaScript",content:`# Variables in JavaScript

Variables are containers for storing data values. In JavaScript, we have three ways to declare variables:

## var (Legacy)
The oldest way to declare variables. Has function scope and can be redeclared.

## let (Modern)
Block-scoped variable that can be reassigned but not redeclared in the same scope.

## const (Modern)
Block-scoped variable that cannot be reassigned. Must be initialized when declared.

### Best Practices
- Use \`const\` by default
- Use \`let\` when you need to reassign
- Avoid \`var\` in modern code`,codeExample:`// Using var (avoid in modern code)
var oldWay = "I can be redeclared";
var oldWay = "See?";

// Using let (for values that change)
let counter = 0;
counter = 1;
console.log("let counter:", counter);

// Using const (for values that don't change)
const PI = 3.14159;
console.log("const PI:", PI);

const user = { name: "John" };
user.name = "Jane"; // Can modify properties
console.log("const object:", user);`,language:"javascript"},{id:"js-data-types",title:"Data Types",content:`# Data Types in JavaScript

JavaScript has 8 data types divided into two categories:

## Primitive Types (7)
1. **String** - Text data
2. **Number** - Integers and floats
3. **BigInt** - Large integers
4. **Boolean** - true/false
5. **undefined** - Uninitialized variable
6. **null** - Intentional empty value
7. **Symbol** - Unique identifier

## Reference Type (1)
- **Object** - Collections of data`,codeExample:`// Primitive Types
const str = "Hello World";
const num = 42;
const bool = true;
let undef;
const empty = null;

// Type checking
console.log("String:", typeof str);
console.log("Number:", typeof num);
console.log("Boolean:", typeof bool);
console.log("Undefined:", typeof undef);
console.log("Null:", typeof empty);

// Reference Types
const obj = { name: "John", age: 30 };
const arr = [1, 2, 3, 4, 5];

console.log("Object:", typeof obj);
console.log("Array:", Array.isArray(arr));`,language:"javascript"},{id:"js-operators",title:"Operators",content:`# Operators in JavaScript

## Arithmetic Operators
Used for mathematical operations: +, -, *, /, %, **

## Comparison Operators
Used to compare values. Always prefer === over ==.

## Logical Operators
Used to combine boolean expressions: &&, ||, !`,codeExample:`// Arithmetic Operators
console.log("5 + 3 =", 5 + 3);
console.log("10 - 4 =", 10 - 4);
console.log("4 * 3 =", 4 * 3);
console.log("15 / 3 =", 15 / 3);
console.log("17 % 5 =", 17 % 5);
console.log("2 ** 3 =", 2 ** 3);

// Comparison Operators
console.log("\\n5 == '5':", 5 == '5');
console.log("5 === '5':", 5 === '5');
console.log("10 > 5:", 10 > 5);

// Logical Operators
console.log("\\ntrue && false:", true && false);
console.log("true || false:", true || false);
console.log("!true:", !true);`,language:"javascript"},{id:"js-type-coercion",title:"Type Coercion",content:`# Type Coercion in JavaScript

Type coercion is the automatic conversion of values from one type to another.

## Implicit Coercion
JavaScript automatically converts types when needed.

## Explicit Coercion
Manual conversion using built-in functions.

## Truthy and Falsy Values
Values that evaluate to true or false in boolean context.

### Falsy Values
- false, 0, -0, 0n, "", null, undefined, NaN

### Truthy Values
- Everything else (including [], {}, "0")`,codeExample:`// Implicit Coercion
console.log("5" + 3);        // "53" (string)
console.log("5" - 3);        // 2 (number)
console.log("5" * "2");      // 10 (number)
console.log(true + 1);       // 2

// Explicit Coercion
console.log(Number("42"));   // 42
console.log(String(42));     // "42"
console.log(Boolean(1));     // true
console.log(parseInt("42px")); // 42
console.log(parseFloat("3.14")); // 3.14

// Truthy and Falsy
console.log("\\nFalsy values:");
console.log(Boolean(0));       // false
console.log(Boolean(""));      // false
console.log(Boolean(null));    // false
console.log(Boolean(undefined)); // false

console.log("\\nTruthy values:");
console.log(Boolean([]));      // true
console.log(Boolean({}));      // true
console.log(Boolean("0"));     // true`,language:"javascript"}]},{id:"js-control-flow",title:"Control Flow",description:"Master conditional statements, loops, and control structures.",difficulty:"beginner",duration:"2 hours",topics:["If/Else","Switch","For Loops","While Loops","Loop Control"],lessons:[{id:"js-conditionals",title:"Conditional Statements",content:`# Conditional Statements

Control the flow of your program based on conditions.

## if...else
Execute code blocks based on conditions.

## Ternary Operator
Shorthand for simple if...else statements.

## Nullish Coalescing (??)
Returns right operand when left is null/undefined.

## Optional Chaining (?.)
Safely access nested properties.`,codeExample:`// if...else
const age = 18;

if (age < 13) {
  console.log("Child");
} else if (age < 20) {
  console.log("Teenager");
} else {
  console.log("Adult");
}

// Ternary Operator
const status = age >= 18 ? "Adult" : "Minor";
console.log("Status:", status);

// Nullish Coalescing
const username = null;
const displayName = username ?? "Guest";
console.log("Display name:", displayName);

// Optional Chaining
const user = { profile: { name: "John" } };
console.log(user?.profile?.name);  // "John"
console.log(user?.settings?.theme); // undefined (no error)

// Short-circuit Evaluation
const isLoggedIn = true;
isLoggedIn && console.log("Welcome back!");

const defaultValue = "" || "fallback";
console.log("Default:", defaultValue);`,language:"javascript"},{id:"js-switch",title:"Switch Statement",content:`# Switch Statement

Execute different code blocks based on different cases.

## Key Points
- Uses strict equality (===)
- Break prevents fall-through
- Default handles no match
- Can group cases together`,codeExample:`// Basic Switch
const day = new Date().getDay();
let dayName;

switch (day) {
  case 0:
    dayName = "Sunday";
    break;
  case 1:
    dayName = "Monday";
    break;
  case 2:
    dayName = "Tuesday";
    break;
  case 3:
    dayName = "Wednesday";
    break;
  case 4:
    dayName = "Thursday";
    break;
  case 5:
    dayName = "Friday";
    break;
  case 6:
    dayName = "Saturday";
    break;
  default:
    dayName = "Unknown";
}

console.log("Today is:", dayName);

// Grouped Cases
const grade = "B";
switch (grade) {
  case "A":
  case "B":
    console.log("Great job!");
    break;
  case "C":
    console.log("Good effort!");
    break;
  case "D":
  case "F":
    console.log("Needs improvement");
    break;
  default:
    console.log("Invalid grade");
}`,language:"javascript"},{id:"js-for-loops",title:"For Loops",content:`# For Loops

Repeat code a specific number of times.

## Types of For Loops
- **for** - Classic loop with counter
- **for...of** - Iterate over iterable values
- **for...in** - Iterate over object keys
- **forEach** - Array method for iteration`,codeExample:`// Classic for loop
console.log("Classic for loop:");
for (let i = 0; i < 5; i++) {
  console.log("Iteration:", i);
}

// for...of (arrays, strings, etc.)
const fruits = ["apple", "banana", "cherry"];
console.log("\\nfor...of loop:");
for (const fruit of fruits) {
  console.log("Fruit:", fruit);
}

// for...in (object properties)
const person = { name: "John", age: 30, city: "NYC" };
console.log("\\nfor...in loop:");
for (const key in person) {
  console.log(\`\${key}: \${person[key]}\`);
}

// forEach method
console.log("\\nforEach method:");
fruits.forEach((fruit, index) => {
  console.log(\`\${index}: \${fruit}\`);
});

// Iterating with entries
console.log("\\nWith entries:");
for (const [index, fruit] of fruits.entries()) {
  console.log(\`\${index}: \${fruit}\`);
}`,language:"javascript"},{id:"js-while-loops",title:"While Loops",content:`# While Loops

Repeat code while a condition is true.

## while
Checks condition before each iteration.

## do...while
Executes at least once, then checks condition.

## Use Cases
- Unknown number of iterations
- Reading data until complete
- Game loops`,codeExample:`// while loop
console.log("while loop:");
let count = 0;
while (count < 5) {
  console.log("Count:", count);
  count++;
}

// do...while loop
console.log("\\ndo...while loop:");
let num = 0;
do {
  console.log("Number:", num);
  num++;
} while (num < 3);

// Difference: do...while runs at least once
console.log("\\nDifference demo:");
let x = 10;
do {
  console.log("This runs once even though x > 5");
} while (x < 5);

// Practical example: Random number game
console.log("\\nNumber guessing simulation:");
let target = 7;
let guess = 0;
let attempts = 0;

while (guess !== target) {
  guess = Math.floor(Math.random() * 10) + 1;
  attempts++;
  console.log(\`Attempt \${attempts}: Guessed \${guess}\`);
  if (attempts > 10) break; // Safety limit
}
console.log(\`Found \${target} in \${attempts} attempts!\`);`,language:"javascript"},{id:"js-loop-control",title:"Loop Control",content:`# Loop Control Statements

Control the flow within loops.

## break
Exit the loop immediately.

## continue
Skip current iteration, continue to next.

## Labels
Name loops for nested loop control.`,codeExample:`// break - Exit loop early
console.log("break example:");
for (let i = 0; i < 10; i++) {
  if (i === 5) break;
  console.log(i);
}

// continue - Skip iteration
console.log("\\ncontinue example (skip evens):");
for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) continue;
  console.log(i);
}

// Labeled statements for nested loops
console.log("\\nLabeled break:");
outerLoop: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (i === 1 && j === 1) {
      console.log("Breaking outer loop");
      break outerLoop;
    }
    console.log(\`i=\${i}, j=\${j}\`);
  }
}

// Finding element in 2D array
console.log("\\nSearch in 2D array:");
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

const target = 5;
let found = false;

search: for (let row = 0; row < matrix.length; row++) {
  for (let col = 0; col < matrix[row].length; col++) {
    if (matrix[row][col] === target) {
      console.log(\`Found \${target} at [\${row}][\${col}]\`);
      found = true;
      break search;
    }
  }
}`,language:"javascript"}]},{id:"js-strings",title:"Strings & String Methods",description:"Master string manipulation and template literals.",difficulty:"beginner",duration:"2 hours",topics:["String Creation","String Methods","Template Literals","Regular Expressions Basics"],lessons:[{id:"js-string-basics",title:"String Basics",content:`# Strings in JavaScript

Strings are sequences of characters used to represent text.

## Creating Strings
- Single quotes: 'Hello'
- Double quotes: "Hello"
- Backticks: \`Hello\` (template literals)

## String Properties
- Strings are immutable
- Have a length property
- Can be accessed by index`,codeExample:`// Creating strings
const single = 'Hello';
const double = "World";
const backtick = \`Hello World\`;

// String length
console.log("Length:", single.length);

// Accessing characters
const str = "JavaScript";
console.log("First char:", str[0]);
console.log("Last char:", str[str.length - 1]);
console.log("charAt(4):", str.charAt(4));

// Strings are immutable
let greeting = "Hello";
greeting[0] = "J"; // This doesn't work
console.log(greeting); // Still "Hello"

// String comparison
console.log("\\nString comparison:");
console.log("'a' < 'b':", 'a' < 'b');
console.log("'A' < 'a':", 'A' < 'a');
console.log("'10' < '9':", '10' < '9'); // String comparison!

// Unicode
console.log("\\nUnicode:");
console.log("Char code of 'A':", "A".charCodeAt(0));
console.log("From char code 65:", String.fromCharCode(65));`,language:"javascript"},{id:"js-string-methods",title:"String Methods",content:`# Essential String Methods

## Search Methods
- indexOf, lastIndexOf, includes, startsWith, endsWith

## Extraction Methods
- slice, substring, substr (deprecated)

## Transformation Methods
- toUpperCase, toLowerCase, trim, replace, split`,codeExample:`const text = "  Hello, JavaScript World!  ";

// Search methods
console.log("includes('Java'):", text.includes("Java"));
console.log("startsWith('  Hello'):", text.startsWith("  Hello"));
console.log("endsWith('!  '):", text.endsWith("!  "));
console.log("indexOf('o'):", text.indexOf("o"));
console.log("lastIndexOf('o'):", text.lastIndexOf("o"));

// Extraction methods
console.log("\\nslice(2, 7):", text.slice(2, 7));
console.log("slice(-8, -2):", text.slice(-8, -2));
console.log("substring(2, 7):", text.substring(2, 7));

// Transformation methods
console.log("\\ntoUpperCase:", text.toUpperCase());
console.log("toLowerCase:", text.toLowerCase());
console.log("trim:", text.trim());
console.log("trimStart:", text.trimStart());
console.log("trimEnd:", text.trimEnd());

// Replace
console.log("\\nreplace:", text.replace("World", "Universe"));
console.log("replaceAll:", "a-b-c".replaceAll("-", "_"));

// Split and Join
const words = text.trim().split(" ");
console.log("\\nsplit:", words);
console.log("join:", words.join("-"));

// Padding
console.log("\\npadStart:", "5".padStart(3, "0"));
console.log("padEnd:", "5".padEnd(3, "0"));

// Repeat
console.log("repeat:", "Ha".repeat(3));`,language:"javascript"},{id:"js-template-literals",title:"Template Literals",content:`# Template Literals

Modern way to work with strings using backticks.

## Features
- String interpolation with \${expression}
- Multi-line strings
- Tagged templates for advanced processing`,codeExample:`// String Interpolation
const name = "Alice";
const age = 25;

console.log(\`Hello, \${name}! You are \${age} years old.\`);
console.log(\`Next year you'll be \${age + 1}.\`);

// Multi-line strings
const poem = \`
  Roses are red,
  Violets are blue,
  JavaScript is awesome,
  And so are you!
\`;
console.log(poem);

// Expression interpolation
const items = ["apple", "banana", "cherry"];
console.log(\`Items: \${items.join(", ")}\`);
console.log(\`Random: \${Math.floor(Math.random() * 100)}\`);

// Nested templates
const data = { user: { name: "Bob", role: "Admin" } };
console.log(\`User: \${data.user.name} (\${data.user.role})\`);

// Tagged template literals
function highlight(strings, ...values) {
  return strings.reduce((result, str, i) => {
    const value = values[i] ? \`**\${values[i]}**\` : '';
    return result + str + value;
  }, '');
}

const product = "laptop";
const price = 999;
console.log(highlight\`The \${product} costs $\${price}.\`);

// HTML template
const createCard = (title, content) => \`
  <div class="card">
    <h2>\${title}</h2>
    <p>\${content}</p>
  </div>
\`;

console.log(createCard("Welcome", "Hello World"));`,language:"javascript"}]},{id:"js-functions",title:"Functions & Scope",description:"Master functions, closures, and understand how scope works in JavaScript.",difficulty:"beginner",duration:"3 hours",topics:["Function Declaration","Arrow Functions","Closures","Scope Chain"],lessons:[{id:"js-function-basics",title:"Function Basics",content:`# Functions in JavaScript

Functions are reusable blocks of code.

## Function Declaration
Traditional way, hoisted to the top.

## Function Expression
Stored in a variable, not hoisted.

## Arrow Functions
Concise syntax with lexical this binding.`,codeExample:`// Function Declaration
function greet(name) {
  return "Hello, " + name + "!";
}

// Function Expression
const sayGoodbye = function(name) {
  return "Goodbye, " + name + "!";
};

// Arrow Function
const add = (a, b) => a + b;

// Default Parameters
const welcome = (name = "Guest") => \`Welcome, \${name}!\`;

// Rest Parameters
const sum = (...numbers) => numbers.reduce((a, b) => a + b, 0);

console.log(greet("Alice"));
console.log(sayGoodbye("Bob"));
console.log("2 + 3 =", add(2, 3));
console.log(welcome());
console.log("Sum 1-5:", sum(1, 2, 3, 4, 5));`,language:"javascript"},{id:"js-closures",title:"Closures",content:`# Closures in JavaScript

A closure is a function that remembers variables from its outer scope.

## Key Concepts
1. Functions create new scopes
2. Inner functions access outer variables
3. The connection persists after outer function returns`,codeExample:`// Basic Closure
function outer() {
  const message = "Hello from outer!";
  return function inner() {
    console.log(message);
  };
}

const myFunc = outer();
myFunc();

// Private Variables with Closure
function createCounter() {
  let count = 0;
  return {
    increment: () => ++count,
    decrement: () => --count,
    getCount: () => count
  };
}

const counter = createCounter();
console.log("Increment:", counter.increment());
console.log("Increment:", counter.increment());
console.log("Decrement:", counter.decrement());
console.log("Count:", counter.getCount());`,language:"javascript"},{id:"js-scope",title:"Scope & Hoisting",content:`# Scope in JavaScript

Scope determines the accessibility of variables.

## Types of Scope
- **Global Scope** - Accessible everywhere
- **Function Scope** - Accessible within function
- **Block Scope** - Accessible within {} (let/const)

## Hoisting
Variable and function declarations are moved to the top.`,codeExample:`// Global Scope
const globalVar = "I'm global";

function scopeDemo() {
  // Function Scope
  var functionVar = "I'm function-scoped";
  
  if (true) {
    // Block Scope
    let blockLet = "I'm block-scoped (let)";
    const blockConst = "I'm block-scoped (const)";
    var notBlockScoped = "I'm function-scoped (var)";
    
    console.log(blockLet);
    console.log(blockConst);
  }
  
  // console.log(blockLet); // Error!
  console.log(notBlockScoped); // Works
  console.log(functionVar);
}

scopeDemo();
console.log(globalVar);

// Hoisting
console.log("\\nHoisting Demo:");

// Function declarations are hoisted
hoistedFunc();
function hoistedFunc() {
  console.log("I'm hoisted!");
}

// var is hoisted (but not initialized)
console.log("hoistedVar:", hoistedVar); // undefined
var hoistedVar = "Now I have a value";

// let/const are NOT hoisted (temporal dead zone)
// console.log(notHoisted); // ReferenceError
let notHoisted = "I'm not hoisted";`,language:"javascript"},{id:"js-higher-order",title:"Higher-Order Functions",content:`# Higher-Order Functions

Functions that take or return other functions.

## Common Uses
- Callbacks
- Function factories
- Decorators/Wrappers
- Composition`,codeExample:`// Function as argument (callback)
function processArray(arr, callback) {
  const result = [];
  for (const item of arr) {
    result.push(callback(item));
  }
  return result;
}

const numbers = [1, 2, 3, 4, 5];
const doubled = processArray(numbers, n => n * 2);
console.log("Doubled:", doubled);

// Function returning function (factory)
function multiplier(factor) {
  return function(number) {
    return number * factor;
  };
}

const double = multiplier(2);
const triple = multiplier(3);
console.log("double(5):", double(5));
console.log("triple(5):", triple(5));

// Function wrapper (decorator)
function withLogging(fn) {
  return function(...args) {
    console.log(\`Calling with args: \${args}\`);
    const result = fn(...args);
    console.log(\`Result: \${result}\`);
    return result;
  };
}

const add = (a, b) => a + b;
const loggedAdd = withLogging(add);
loggedAdd(3, 4);

// Function composition
const compose = (...fns) => x => fns.reduceRight((acc, fn) => fn(acc), x);

const addOne = x => x + 1;
const square = x => x * x;
const composed = compose(square, addOne);
console.log("\\ncomposed(4):", composed(4)); // (4+1)² = 25`,language:"javascript"},{id:"js-iife",title:"IIFE & Modules Pattern",content:`# IIFE - Immediately Invoked Function Expression

A function that runs as soon as it's defined.

## Use Cases
- Avoid polluting global scope
- Create private variables
- Module pattern (pre-ES6)`,codeExample:`// Basic IIFE
(function() {
  console.log("I run immediately!");
})();

// IIFE with parameters
(function(name) {
  console.log(\`Hello, \${name}!\`);
})("World");

// Arrow function IIFE
(() => {
  console.log("Arrow IIFE!");
})();

// Module Pattern
const Calculator = (function() {
  // Private variables
  let result = 0;
  
  // Private function
  function log(operation) {
    console.log(\`\${operation}: \${result}\`);
  }
  
  // Public interface
  return {
    add(n) {
      result += n;
      log("Add");
      return this;
    },
    subtract(n) {
      result -= n;
      log("Subtract");
      return this;
    },
    multiply(n) {
      result *= n;
      log("Multiply");
      return this;
    },
    getResult() {
      return result;
    },
    reset() {
      result = 0;
      log("Reset");
      return this;
    }
  };
})();

Calculator.add(10).multiply(2).subtract(5);
console.log("Final result:", Calculator.getResult());

// Revealing Module Pattern
const CounterModule = (function() {
  let count = 0;
  
  function increment() { count++; }
  function decrement() { count--; }
  function getCount() { return count; }
  
  return { increment, decrement, getCount };
})();

CounterModule.increment();
CounterModule.increment();
console.log("Counter:", CounterModule.getCount());`,language:"javascript"}]},{id:"js-arrays",title:"Arrays & Objects",description:"Deep dive into arrays, objects, and their built-in methods.",difficulty:"intermediate",duration:"4 hours",topics:["Array Methods","Object Methods","Destructuring","Spread Operator"],lessons:[{id:"js-array-methods",title:"Array Methods",content:`# Essential Array Methods

## Transformation Methods
- map() - Transform each element
- filter() - Keep elements that pass a test
- reduce() - Reduce to a single value

## Search Methods
- find() - Find first matching element
- includes() - Check if element exists`,codeExample:`const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// map - Transform each element
const doubled = numbers.map(n => n * 2);
console.log("Doubled:", doubled);

// filter - Keep elements that pass test
const evens = numbers.filter(n => n % 2 === 0);
console.log("Evens:", evens);

// reduce - Reduce to single value
const sum = numbers.reduce((acc, n) => acc + n, 0);
console.log("Sum:", sum);

// find - Find first match
const firstOver5 = numbers.find(n => n > 5);
console.log("First > 5:", firstOver5);

// Chaining methods
const result = numbers
  .filter(n => n % 2 === 0)
  .map(n => n * 3)
  .reduce((a, b) => a + b);
console.log("Chain result:", result);`,language:"javascript"},{id:"js-array-methods-advanced",title:"Advanced Array Methods",content:`# More Array Methods

## Iteration Methods
- forEach, every, some

## Transformation Methods  
- flat, flatMap, sort, reverse

## Search Methods
- findIndex, indexOf, lastIndexOf`,codeExample:`// every - Check if ALL pass test
const numbers = [2, 4, 6, 8, 10];
console.log("All even?", numbers.every(n => n % 2 === 0));

// some - Check if ANY pass test
console.log("Any > 5?", numbers.some(n => n > 5));

// findIndex - Find index of match
const users = [
  { id: 1, name: "John" },
  { id: 2, name: "Jane" },
  { id: 3, name: "Bob" }
];
const janeIndex = users.findIndex(u => u.name === "Jane");
console.log("Jane's index:", janeIndex);

// flat - Flatten nested arrays
const nested = [1, [2, 3], [4, [5, 6]]];
console.log("flat(1):", nested.flat(1));
console.log("flat(2):", nested.flat(2));

// flatMap - Map then flatten
const sentences = ["Hello World", "How are you"];
const words = sentences.flatMap(s => s.split(" "));
console.log("flatMap:", words);

// sort - Sort array (mutates!)
const names = ["Charlie", "Alice", "Bob"];
console.log("Sorted:", [...names].sort());

const nums = [10, 5, 8, 1, 7];
console.log("Sorted nums:", [...nums].sort((a, b) => a - b));

// reverse - Reverse array (mutates!)
console.log("Reversed:", [...nums].reverse());

// Array.from - Create array from iterable
console.log("Array.from:", Array.from("hello"));
console.log("Range:", Array.from({ length: 5 }, (_, i) => i + 1));

// Array.of - Create array from arguments
console.log("Array.of:", Array.of(1, 2, 3));`,language:"javascript"},{id:"js-array-manipulation",title:"Array Manipulation",content:`# Array Manipulation Methods

## Adding/Removing Elements
- push, pop, unshift, shift
- splice, slice

## Combining Arrays
- concat, spread operator

## Other Useful Methods
- join, fill, copyWithin`,codeExample:`// push/pop - Add/remove from end
const arr = [1, 2, 3];
arr.push(4);
console.log("After push:", arr);
const popped = arr.pop();
console.log("Popped:", popped, "Array:", arr);

// unshift/shift - Add/remove from start
arr.unshift(0);
console.log("After unshift:", arr);
const shifted = arr.shift();
console.log("Shifted:", shifted, "Array:", arr);

// splice - Add/remove at any position
const colors = ["red", "green", "blue"];
colors.splice(1, 1, "yellow", "purple");
console.log("After splice:", colors);

// slice - Extract portion (doesn't mutate)
const sliced = colors.slice(1, 3);
console.log("Sliced:", sliced);

// concat vs spread
const arr1 = [1, 2];
const arr2 = [3, 4];
console.log("concat:", arr1.concat(arr2));
console.log("spread:", [...arr1, ...arr2]);

// fill - Fill array with value
const filled = new Array(5).fill(0);
console.log("Filled:", filled);

// join - Convert to string
console.log("Joined:", colors.join(" | "));

// includes with fromIndex
const items = [1, 2, 3, 4, 5];
console.log("includes 3 from index 2:", items.includes(3, 2));

// at - Access with negative index
console.log("at(-1):", items.at(-1));
console.log("at(-2):", items.at(-2));`,language:"javascript"},{id:"js-object-basics",title:"Object Fundamentals",content:`# Objects in JavaScript

Objects store collections of key-value pairs.

## Creating Objects
- Object literal
- Constructor
- Object.create()

## Accessing Properties
- Dot notation
- Bracket notation`,codeExample:`// Creating Objects
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  "favorite color": "blue",
  greet() {
    console.log(\`Hello, I'm \${this.firstName}\`);
  }
};

// Accessing properties
console.log("Dot:", person.firstName);
console.log("Bracket:", person["lastName"]);
console.log("Dynamic:", person["favorite color"]);

// Modifying properties
person.age = 31;
person.email = "john@example.com";
delete person["favorite color"];

console.log("Modified:", person);

// Method shorthand
const calculator = {
  value: 0,
  add(n) { this.value += n; return this; },
  subtract(n) { this.value -= n; return this; },
  multiply(n) { this.value *= n; return this; },
  result() { return this.value; }
};

console.log("Calc:", calculator.add(10).multiply(2).subtract(5).result());

// Computed property names
const propName = "dynamicKey";
const obj = {
  [propName]: "dynamic value",
  [\`computed_\${1 + 1}\`]: "computed"
};
console.log("Dynamic obj:", obj);

// Property shorthand
const name = "Alice";
const age = 25;
const user = { name, age };
console.log("Shorthand:", user);`,language:"javascript"},{id:"js-object-methods",title:"Object Methods",content:`# Object Static Methods

## Keys, Values, Entries
Get arrays of object data.

## Merging Objects
Combine objects with assign or spread.

## Property Descriptors
Control property behavior.`,codeExample:`const user = {
  name: "John",
  age: 30,
  city: "NYC"
};

// Object.keys, values, entries
console.log("Keys:", Object.keys(user));
console.log("Values:", Object.values(user));
console.log("Entries:", Object.entries(user));

// Iterating with entries
for (const [key, value] of Object.entries(user)) {
  console.log(\`\${key}: \${value}\`);
}

// Object.assign - Merge objects
const defaults = { theme: "dark", fontSize: 14 };
const userPrefs = { fontSize: 16 };
const merged = Object.assign({}, defaults, userPrefs);
console.log("\\nMerged:", merged);

// Spread operator (better!)
const merged2 = { ...defaults, ...userPrefs };
console.log("Spread merge:", merged2);

// Object.freeze - Prevent modifications
const frozen = Object.freeze({ x: 1 });
frozen.x = 2; // Silently fails
console.log("\\nFrozen:", frozen);

// Object.seal - Prevent add/delete
const sealed = Object.seal({ y: 1 });
sealed.y = 2; // This works
sealed.z = 3; // This doesn't
console.log("Sealed:", sealed);

// Check status
console.log("Is frozen?", Object.isFrozen(frozen));
console.log("Is sealed?", Object.isSealed(sealed));

// Object.fromEntries - Create object from entries
const entries = [["a", 1], ["b", 2], ["c", 3]];
const fromEntries = Object.fromEntries(entries);
console.log("\\nFrom entries:", fromEntries);`,language:"javascript"},{id:"js-destructuring",title:"Destructuring",content:`# Destructuring Assignment

Extract values from arrays and objects into variables.

## Array Destructuring
Extract by position.

## Object Destructuring
Extract by property name.

## Use Cases
- Swap variables
- Function parameters
- Module imports`,codeExample:`// Array Destructuring
const colors = ["red", "green", "blue", "yellow"];

const [first, second] = colors;
console.log("First two:", first, second);

// Skip elements
const [, , third] = colors;
console.log("Third:", third);

// Rest pattern
const [primary, ...rest] = colors;
console.log("Primary:", primary, "Rest:", rest);

// Default values
const [a, b, c, d, e = "purple"] = colors;
console.log("With default:", e);

// Swap variables
let x = 1, y = 2;
[x, y] = [y, x];
console.log("\\nSwapped:", x, y);

// Object Destructuring
const person = {
  name: "John",
  age: 30,
  city: "NYC",
  country: "USA"
};

const { name, age } = person;
console.log("\\nName and age:", name, age);

// Rename variables
const { name: personName, city: location } = person;
console.log("Renamed:", personName, location);

// Default values
const { phone = "N/A" } = person;
console.log("With default:", phone);

// Nested destructuring
const company = {
  name: "Tech Corp",
  address: {
    street: "123 Main St",
    city: "San Francisco"
  }
};

const { address: { city: companyCity } } = company;
console.log("\\nNested:", companyCity);

// Function parameters
function greet({ name, age = 0 }) {
  console.log(\`Hello \${name}, you are \${age}\`);
}
greet({ name: "Alice", age: 25 });`,language:"javascript"},{id:"js-spread-rest",title:"Spread & Rest Operators",content:`# Spread and Rest Operators

The ... syntax has two uses:

## Spread Operator
Expands an iterable into individual elements.

## Rest Operator
Collects multiple elements into an array.`,codeExample:`// Spread in Arrays
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

// Combine arrays
const combined = [...arr1, ...arr2];
console.log("Combined:", combined);

// Copy array (shallow)
const copy = [...arr1];
console.log("Copy:", copy);

// Insert in middle
const inserted = [0, ...arr1, 4];
console.log("Inserted:", inserted);

// Spread in Objects
const defaults = { theme: "dark", size: "medium" };
const custom = { size: "large", color: "blue" };

const merged = { ...defaults, ...custom };
console.log("\\nMerged:", merged);

// Copy with modification
const user = { name: "John", age: 30 };
const updated = { ...user, age: 31, email: "john@test.com" };
console.log("Updated:", updated);

// Spread in function calls
const numbers = [5, 2, 8, 1, 9];
console.log("\\nMax:", Math.max(...numbers));
console.log("Min:", Math.min(...numbers));

// Rest in function parameters
function sum(...nums) {
  return nums.reduce((a, b) => a + b, 0);
}
console.log("\\nSum:", sum(1, 2, 3, 4, 5));

// Rest with other parameters
function greet(greeting, ...names) {
  names.forEach(name => console.log(\`\${greeting}, \${name}!\`));
}
greet("Hello", "Alice", "Bob", "Charlie");

// Rest in destructuring
const [first, second, ...others] = [1, 2, 3, 4, 5];
console.log("\\nFirst:", first, "Others:", others);

const { a, ...remaining } = { a: 1, b: 2, c: 3 };
console.log("Remaining:", remaining);`,language:"javascript"}]},{id:"js-async",title:"Asynchronous JavaScript",description:"Learn callbacks, promises, and async/await patterns.",difficulty:"intermediate",duration:"4 hours",topics:["Callbacks","Promises","Async/Await","Error Handling"],lessons:[{id:"js-callbacks",title:"Callbacks",content:`# Callbacks in JavaScript

A callback is a function passed as an argument to another function.

## Synchronous Callbacks
Execute immediately (like array methods).

## Asynchronous Callbacks
Execute later (like setTimeout, event handlers).

## Callback Hell
Nested callbacks become hard to manage.`,codeExample:`// Synchronous callback
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(function(n) {
  return n * 2;
});
console.log("Sync callback:", doubled);

// Asynchronous callback
console.log("\\n1. Starting...");

setTimeout(function() {
  console.log("3. Timeout callback executed!");
}, 1000);

console.log("2. Continuing...");

// Callback with error-first pattern
function fetchData(callback) {
  setTimeout(() => {
    const success = Math.random() > 0.3;
    if (success) {
      callback(null, { data: "Success!" });
    } else {
      callback(new Error("Failed to fetch"), null);
    }
  }, 500);
}

console.log("\\nFetching data...");
fetchData((error, result) => {
  if (error) {
    console.log("Error:", error.message);
  } else {
    console.log("Result:", result);
  }
});

// Callback Hell (avoid this!)
function step1(callback) {
  setTimeout(() => {
    console.log("\\nStep 1 complete");
    callback();
  }, 300);
}

function step2(callback) {
  setTimeout(() => {
    console.log("Step 2 complete");
    callback();
  }, 300);
}

function step3(callback) {
  setTimeout(() => {
    console.log("Step 3 complete");
    callback();
  }, 300);
}

// Nested callbacks
step1(() => {
  step2(() => {
    step3(() => {
      console.log("All steps complete!");
    });
  });
});`,language:"javascript"},{id:"js-promises",title:"Promises",content:`# Promises in JavaScript

A Promise represents the eventual completion or failure of an async operation.

## Promise States
1. Pending - Initial state
2. Fulfilled - Operation completed
3. Rejected - Operation failed`,codeExample:`// Creating a Promise
const fetchData = (success) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (success) {
        resolve({ data: "Success!" });
      } else {
        reject(new Error("Failed"));
      }
    }, 1000);
  });
};

console.log("Fetching data...");

fetchData(true)
  .then(data => console.log("Resolved:", data))
  .catch(err => console.log("Error:", err))
  .finally(() => console.log("Done!"));

// Promise.all
Promise.all([
  Promise.resolve(1),
  Promise.resolve(2),
  Promise.resolve(3)
]).then(values => console.log("All:", values));`,language:"javascript"},{id:"js-promise-methods",title:"Promise Static Methods",content:`# Promise Static Methods

## Promise.all
Wait for all promises to resolve.

## Promise.race
Return first settled promise.

## Promise.allSettled
Wait for all to settle (resolve or reject).

## Promise.any
Return first fulfilled promise.`,codeExample:`// Helper function
const delay = (ms, value, shouldFail = false) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldFail) {
        reject(new Error(\`Failed: \${value}\`));
      } else {
        resolve(value);
      }
    }, ms);
  });
};

// Promise.all - All must succeed
console.log("Promise.all:");
Promise.all([
  delay(100, "First"),
  delay(200, "Second"),
  delay(150, "Third")
])
.then(results => console.log("All results:", results))
.catch(err => console.log("Error:", err.message));

// Promise.race - First to settle wins
console.log("\\nPromise.race:");
Promise.race([
  delay(100, "Fast"),
  delay(200, "Medium"),
  delay(300, "Slow")
])
.then(result => console.log("Race winner:", result));

// Promise.allSettled - Get all results
console.log("\\nPromise.allSettled:");
Promise.allSettled([
  delay(100, "Success 1"),
  delay(150, "Fail 1", true),
  delay(200, "Success 2")
])
.then(results => {
  results.forEach((result, i) => {
    if (result.status === "fulfilled") {
      console.log(\`\${i}: Fulfilled - \${result.value}\`);
    } else {
      console.log(\`\${i}: Rejected - \${result.reason.message}\`);
    }
  });
});

// Promise.any - First success wins
console.log("\\nPromise.any:");
Promise.any([
  delay(200, "Fail 1", true),
  delay(100, "Success"),
  delay(150, "Fail 2", true)
])
.then(result => console.log("Any result:", result))
.catch(err => console.log("All failed"));

// Promise.resolve and Promise.reject
const resolved = Promise.resolve("Already resolved");
const rejected = Promise.reject(new Error("Already rejected"));

resolved.then(v => console.log("\\n" + v));
rejected.catch(e => console.log(e.message));`,language:"javascript"},{id:"js-async-await",title:"Async/Await",content:`# Async/Await

Modern syntax for working with promises.

## async Functions
Always return a promise.

## await Keyword
Pause until promise settles.

## Error Handling
Use try/catch blocks.`,codeExample:`// Basic async/await
async function fetchUser(id) {
  // Simulate API call
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ id, name: \`User \${id}\` });
    }, 500);
  });
}

async function getUser() {
  console.log("Fetching user...");
  const user = await fetchUser(1);
  console.log("User:", user);
  return user;
}

getUser();

// Error handling with try/catch
async function fetchWithError() {
  return new Promise((_, reject) => {
    setTimeout(() => reject(new Error("Network error")), 500);
  });
}

async function handleErrors() {
  try {
    const result = await fetchWithError();
    console.log(result);
  } catch (error) {
    console.log("\\nCaught error:", error.message);
  } finally {
    console.log("Cleanup done");
  }
}

handleErrors();

// Sequential vs Parallel
async function sequential() {
  console.log("\\nSequential:");
  const start = Date.now();
  const user1 = await fetchUser(1);
  const user2 = await fetchUser(2);
  console.log("Time:", Date.now() - start, "ms");
  console.log("Users:", user1, user2);
}

async function parallel() {
  console.log("\\nParallel:");
  const start = Date.now();
  const [user1, user2] = await Promise.all([
    fetchUser(1),
    fetchUser(2)
  ]);
  console.log("Time:", Date.now() - start, "ms");
  console.log("Users:", user1, user2);
}

sequential().then(() => parallel());

// Async iteration
async function* asyncGenerator() {
  yield await Promise.resolve(1);
  yield await Promise.resolve(2);
  yield await Promise.resolve(3);
}

async function useAsyncGenerator() {
  console.log("\\nAsync iteration:");
  for await (const num of asyncGenerator()) {
    console.log("Value:", num);
  }
}

useAsyncGenerator();`,language:"javascript"},{id:"js-error-handling-async",title:"Async Error Handling",content:`# Error Handling in Async Code

## Patterns
- try/catch with async/await
- .catch() with promises
- Error boundaries
- Graceful degradation`,codeExample:`// Central error handler
function handleError(error, context) {
  console.error(\`[\${context}] \${error.message}\`);
  // In real app: log to service, show notification
}

// Wrapper for async functions
function asyncHandler(fn) {
  return async (...args) => {
    try {
      return await fn(...args);
    } catch (error) {
      handleError(error, fn.name);
      throw error; // Re-throw if needed
    }
  };
}

// Usage
const riskyOperation = asyncHandler(async function riskyOperation() {
  throw new Error("Something went wrong!");
});

riskyOperation().catch(() => console.log("Handled in catch"));

// Multiple operations with individual handling
async function fetchMultiple() {
  const results = await Promise.allSettled([
    fetch("https://api.example.com/users"),
    fetch("https://api.example.com/posts"),
    fetch("https://api.example.com/comments")
  ]);

  results.forEach((result, index) => {
    if (result.status === "rejected") {
      console.log(\`Request \${index} failed:\`, result.reason);
    }
  });

  // Filter successful results
  const successfulResults = results
    .filter(r => r.status === "fulfilled")
    .map(r => r.value);
  
  return successfulResults;
}

// Retry pattern
async function withRetry(fn, retries = 3, delay = 1000) {
  for (let i = 0; i < retries; i++) {
    try {
      return await fn();
    } catch (error) {
      console.log(\`Attempt \${i + 1} failed: \${error.message}\`);
      if (i < retries - 1) {
        await new Promise(r => setTimeout(r, delay));
      }
    }
  }
  throw new Error(\`Failed after \${retries} attempts\`);
}

// Example usage
let attemptCount = 0;
async function unreliableOperation() {
  attemptCount++;
  if (attemptCount < 3) {
    throw new Error("Random failure");
  }
  return "Success!";
}

withRetry(unreliableOperation)
  .then(result => console.log("\\nRetry result:", result))
  .catch(err => console.log("Final error:", err.message));`,language:"javascript"}]},{id:"js-this",title:"The this Keyword",description:"Understand how this works in different contexts.",difficulty:"intermediate",duration:"2 hours",topics:["Global Context","Object Methods","Constructors","Arrow Functions","Explicit Binding"],lessons:[{id:"js-this-basics",title:"Understanding this",content:`# The this Keyword

The value of this depends on HOW a function is called.

## Different Contexts
1. Global context
2. Object methods
3. Constructor functions
4. Event handlers
5. Arrow functions (lexical)`,codeExample:`// Global context (in browser: window, in Node: global/undefined in strict mode)
console.log("Global this:", typeof this);

// Object method - this = the object
const person = {
  name: "John",
  greet() {
    console.log("Object this:", this.name);
  },
  greetArrow: () => {
    console.log("Arrow this:", this.name); // undefined (lexical)
  }
};

person.greet();
person.greetArrow();

// Lost context
const greetFunc = person.greet;
// greetFunc(); // this would be undefined in strict mode

// Constructor function - this = new instance
function Animal(name) {
  this.name = name;
  console.log("Constructor this:", this);
}

const cat = new Animal("Whiskers");

// Class methods - this = instance
class Dog {
  constructor(name) {
    this.name = name;
  }
  
  bark() {
    console.log(\`\${this.name} barks!\`);
  }
  
  // Arrow function preserves this
  delayedBark = () => {
    setTimeout(() => {
      console.log(\`\${this.name} barks (delayed)!\`);
    }, 100);
  }
}

const dog = new Dog("Max");
dog.bark();
dog.delayedBark();`,language:"javascript"},{id:"js-this-binding",title:"Explicit this Binding",content:`# Binding this Explicitly

## Methods
- **call** - Invoke with this and individual args
- **apply** - Invoke with this and args array
- **bind** - Return new function with bound this`,codeExample:`function greet(greeting, punctuation) {
  console.log(\`\${greeting}, \${this.name}\${punctuation}\`);
}

const person1 = { name: "Alice" };
const person2 = { name: "Bob" };

// call - individual arguments
greet.call(person1, "Hello", "!");
greet.call(person2, "Hi", "?");

// apply - arguments as array
greet.apply(person1, ["Hey", "!!"]);
greet.apply(person2, ["Yo", "..."]);

// bind - returns new function
const greetAlice = greet.bind(person1);
greetAlice("Welcome", "!");

// Partial application with bind
const sayHiTo = greet.bind(null, "Hi");
sayHiTo.call(person1, "!");

// Practical example: event handlers
const button = {
  text: "Click me",
  handleClick: function() {
    console.log(\`Button "\${this.text}" clicked\`);
  }
};

// In real DOM:
// element.addEventListener('click', button.handleClick.bind(button));

// Using bind to fix lost context
const boundHandler = button.handleClick.bind(button);
boundHandler();

// Borrowing methods
const numbers = { 0: "a", 1: "b", 2: "c", length: 3 };
const arr = Array.prototype.slice.call(numbers);
console.log("Borrowed slice:", arr);

// Modern alternative
console.log("Array.from:", Array.from(numbers));`,language:"javascript"},{id:"js-arrow-this",title:"Arrow Functions and this",content:`# Arrow Functions and this

Arrow functions don't have their own this.
They inherit this from the enclosing scope (lexical).

## When to Use
- Callbacks inside methods
- When you need to preserve outer this

## When NOT to Use
- Object methods
- Constructors
- Event handlers (usually)`,codeExample:`// Arrow functions inherit this
const team = {
  name: "Engineering",
  members: ["Alice", "Bob", "Charlie"],
  
  // Regular function - this = team
  showMembers() {
    console.log(\`Team: \${this.name}\`);
    
    // Arrow function inherits this from showMembers
    this.members.forEach(member => {
      console.log(\`\${member} is in \${this.name}\`);
    });
  },
  
  // Problem with regular function callback
  showMembersOld() {
    const self = this; // Old pattern
    this.members.forEach(function(member) {
      // console.log(this.name); // undefined!
      console.log(\`\${member} is in \${self.name}\`);
    });
  }
};

team.showMembers();

// Nested arrow functions
const outer = {
  value: 42,
  
  getValueGetter() {
    return () => () => this.value;
  }
};

const getter = outer.getValueGetter();
console.log("\\nNested arrow:", getter()());

// Common mistake: Arrow as method
const badObject = {
  name: "Bad",
  getName: () => this.name // this is not the object!
};
console.log("Arrow method:", badObject.getName()); // undefined

// Correct way
const goodObject = {
  name: "Good",
  getName() { return this.name; }
};
console.log("Regular method:", goodObject.getName());

// Class with arrow functions
class Timer {
  constructor() {
    this.seconds = 0;
  }
  
  // Arrow function as class field
  start = () => {
    setInterval(() => {
      this.seconds++;
      console.log(\`Timer: \${this.seconds}s\`);
    }, 1000);
  }
}

// const timer = new Timer();
// timer.start(); // Would work correctly`,language:"javascript"}]},{id:"js-dom",title:"DOM Manipulation",description:"Interact with the Document Object Model and handle events.",difficulty:"intermediate",duration:"3 hours",topics:["DOM Selection","Event Handling","DOM Traversal","Dynamic Content"],lessons:[{id:"js-dom-selection",title:"DOM Selection",content:`# Selecting DOM Elements

## Modern Methods
- querySelector - First match
- querySelectorAll - All matches

## Legacy Methods
- getElementById
- getElementsByClassName
- getElementsByTagName`,codeExample:`// Note: These examples show DOM concepts
// They would work in a browser environment

// querySelector - Returns first match
const header = document.querySelector('h1');
const firstButton = document.querySelector('.btn');
const submitBtn = document.querySelector('#submit');
const navLink = document.querySelector('nav a.active');

// querySelectorAll - Returns NodeList
const allButtons = document.querySelectorAll('.btn');
const allParagraphs = document.querySelectorAll('p');
const formInputs = document.querySelectorAll('form input');

// Converting NodeList to Array
const buttonsArray = Array.from(allButtons);
// or
const buttonsArray2 = [...allButtons];

// Legacy methods
const byId = document.getElementById('myId');
const byClass = document.getElementsByClassName('myClass');
const byTag = document.getElementsByTagName('div');

// Differences:
// - querySelector: Returns Element or null
// - getElementById: Returns Element or null
// - getElementsBy*: Returns live HTMLCollection
// - querySelectorAll: Returns static NodeList

// Simulating for demo purposes
console.log("DOM Selection Examples");
console.log("querySelector returns:", typeof document.querySelector);
console.log("Use CSS selectors: 'div.class#id[attr=value]'");

// Complex selectors
const examples = [
  'div.container > p',          // Direct child
  'ul li:first-child',          // First li in ul
  'input[type="text"]',         // Input with type
  '.item:not(.disabled)',       // Not selector
  'tr:nth-child(odd)',          // Odd rows
  '[data-active="true"]'        // Data attribute
];

examples.forEach(sel => console.log("Selector:", sel));`,language:"javascript"},{id:"js-dom-manipulation",title:"DOM Manipulation",content:`# Manipulating DOM Elements

## Content
- textContent, innerHTML, innerText

## Attributes
- getAttribute, setAttribute, dataset

## Styles and Classes
- style, classList`,codeExample:`// Creating elements
const div = document.createElement('div');
const text = document.createTextNode('Hello');

// Setting content
div.textContent = 'Plain text content';
div.innerHTML = '<strong>HTML</strong> content';
div.innerText = 'Visible text only';

// Attributes
div.setAttribute('id', 'myDiv');
div.getAttribute('id');
div.removeAttribute('id');
div.hasAttribute('id');

// Data attributes
div.dataset.userId = '123';
div.dataset.userName = 'john';
// Creates: data-user-id="123" data-user-name="john"

// Classes
div.classList.add('active', 'visible');
div.classList.remove('hidden');
div.classList.toggle('expanded');
div.classList.contains('active'); // true
div.classList.replace('old-class', 'new-class');

// Inline styles
div.style.backgroundColor = 'blue';
div.style.fontSize = '16px';
div.style.cssText = 'color: white; padding: 10px;';

// Getting computed styles
// const styles = getComputedStyle(div);
// console.log(styles.backgroundColor);

// Inserting elements
const parent = document.createElement('ul');
const child = document.createElement('li');

parent.appendChild(child);
parent.prepend(child);               // Add at start
parent.append(child);                // Add at end
parent.insertBefore(child, parent.firstChild);

// Modern insertion methods
div.insertAdjacentHTML('beforebegin', '<p>Before</p>');
div.insertAdjacentHTML('afterbegin', '<p>First child</p>');
div.insertAdjacentHTML('beforeend', '<p>Last child</p>');
div.insertAdjacentHTML('afterend', '<p>After</p>');

// Removing elements
child.remove();
parent.removeChild(child);

// Cloning
const clone = div.cloneNode(true); // true = deep clone

console.log("DOM Manipulation methods demonstrated");`,language:"javascript"},{id:"js-events",title:"Event Handling",content:`# DOM Events

## Adding Listeners
- addEventListener
- removeEventListener

## Event Object
Contains info about the event.

## Event Flow
- Capturing (down)
- Target
- Bubbling (up)`,codeExample:`// Adding event listeners
const button = document.createElement('button');

function handleClick(event) {
  console.log('Button clicked!');
  console.log('Event type:', event.type);
  console.log('Target:', event.target);
  console.log('Current target:', event.currentTarget);
}

button.addEventListener('click', handleClick);

// Remove listener (must use same function reference)
button.removeEventListener('click', handleClick);

// One-time listener
button.addEventListener('click', () => {
  console.log('Only runs once!');
}, { once: true });

// Event delegation
const list = document.createElement('ul');
list.addEventListener('click', (event) => {
  if (event.target.tagName === 'LI') {
    console.log('List item clicked:', event.target.textContent);
  }
});

// Stopping propagation
button.addEventListener('click', (event) => {
  event.stopPropagation(); // Stop bubbling
  event.stopImmediatePropagation(); // Stop all handlers
});

// Prevent default behavior
const link = document.createElement('a');
link.addEventListener('click', (event) => {
  event.preventDefault(); // Don't navigate
  console.log('Link click prevented');
});

// Common events
const events = [
  // Mouse
  'click', 'dblclick', 'mouseenter', 'mouseleave', 'mousemove',
  // Keyboard
  'keydown', 'keyup', 'keypress',
  // Form
  'submit', 'change', 'input', 'focus', 'blur',
  // Document
  'DOMContentLoaded', 'load', 'scroll', 'resize'
];

console.log("Common events:", events);

// Keyboard event example
document.addEventListener('keydown', (event) => {
  console.log('Key:', event.key);
  console.log('Code:', event.code);
  console.log('Ctrl:', event.ctrlKey);
  console.log('Shift:', event.shiftKey);
});

// Custom events
const customEvent = new CustomEvent('userLoggedIn', {
  detail: { userId: 123, name: 'John' }
});

document.addEventListener('userLoggedIn', (event) => {
  console.log('User logged in:', event.detail);
});

document.dispatchEvent(customEvent);`,language:"javascript"},{id:"js-event-delegation",title:"Event Delegation",content:`# Event Delegation Pattern

Attach one listener to parent instead of many to children.

## Benefits
- Better performance
- Works with dynamic content
- Less memory usage`,codeExample:`// Without delegation - Bad for many items
function setupBadExample() {
  const items = document.querySelectorAll('.item');
  items.forEach(item => {
    item.addEventListener('click', handleClick);
  });
  // Problem: New items won't have listeners!
}

// With delegation - Better!
function setupGoodExample() {
  const container = document.querySelector('.container');
  
  container.addEventListener('click', (event) => {
    // Check if clicked element matches
    if (event.target.matches('.item')) {
      handleItemClick(event.target);
    }
    
    // Or check for closest matching parent
    const item = event.target.closest('.item');
    if (item) {
      handleItemClick(item);
    }
  });
}

function handleItemClick(item) {
  console.log('Item clicked:', item);
}

// Practical example: Todo list
class TodoList {
  constructor(container) {
    this.container = container;
    this.todos = [];
    this.setupListeners();
  }
  
  setupListeners() {
    // Single listener handles all actions
    this.container.addEventListener('click', (event) => {
      const target = event.target;
      
      if (target.matches('.delete-btn')) {
        const todoItem = target.closest('.todo-item');
        this.deleteTodo(todoItem.dataset.id);
      }
      
      if (target.matches('.toggle-btn')) {
        const todoItem = target.closest('.todo-item');
        this.toggleTodo(todoItem.dataset.id);
      }
      
      if (target.matches('.edit-btn')) {
        const todoItem = target.closest('.todo-item');
        this.editTodo(todoItem.dataset.id);
      }
    });
  }
  
  deleteTodo(id) {
    console.log('Delete:', id);
  }
  
  toggleTodo(id) {
    console.log('Toggle:', id);
  }
  
  editTodo(id) {
    console.log('Edit:', id);
  }
}

// Data attributes for delegation
const html = \`
<ul class="container">
  <li class="todo-item" data-id="1" data-priority="high">
    <span>Todo 1</span>
    <button class="toggle-btn">Toggle</button>
    <button class="edit-btn">Edit</button>
    <button class="delete-btn">Delete</button>
  </li>
</ul>
\`;

console.log("Event delegation example with data attributes");`,language:"javascript"}]},{id:"js-error-handling",title:"Error Handling",description:"Learn to handle errors gracefully with try/catch and custom errors.",difficulty:"intermediate",duration:"2 hours",topics:["Try/Catch","Error Types","Custom Errors","Debugging"],lessons:[{id:"js-try-catch",title:"Try/Catch/Finally",content:`# Error Handling with Try/Catch

Handle runtime errors gracefully.

## Syntax
- try: Code that might throw
- catch: Handle the error
- finally: Always runs

## Error Object
Contains name, message, and stack.`,codeExample:`// Basic try/catch
try {
  const result = riskyOperation();
  console.log(result);
} catch (error) {
  console.error("Error caught:", error.message);
}

// Try/catch/finally
function processFile(filename) {
  let file = null;
  try {
    file = openFile(filename);
    processData(file);
  } catch (error) {
    console.error("Processing failed:", error.message);
  } finally {
    // Always runs - cleanup
    if (file) {
      console.log("Closing file...");
      // closeFile(file);
    }
  }
}

// Throwing errors
function divide(a, b) {
  if (b === 0) {
    throw new Error("Division by zero");
  }
  return a / b;
}

try {
  console.log(divide(10, 2));
  console.log(divide(10, 0)); // Throws
} catch (error) {
  console.error("Math error:", error.message);
}

// Error object properties
try {
  throw new Error("Something went wrong");
} catch (error) {
  console.log("\\nError properties:");
  console.log("Name:", error.name);
  console.log("Message:", error.message);
  console.log("Stack:", error.stack?.substring(0, 100) + "...");
}

// Re-throwing errors
function outer() {
  try {
    inner();
  } catch (error) {
    if (error.message.includes("critical")) {
      throw error; // Re-throw critical errors
    }
    console.log("Handled non-critical error");
  }
}

function inner() {
  throw new Error("Non-critical failure");
}

outer();`,language:"javascript"},{id:"js-error-types",title:"Error Types",content:`# Built-in Error Types

JavaScript has several built-in error types:

## Error Types
- **Error** - Generic error
- **SyntaxError** - Invalid syntax
- **ReferenceError** - Invalid reference
- **TypeError** - Wrong type operation
- **RangeError** - Number out of range
- **URIError** - Invalid URI`,codeExample:`// TypeError - Wrong type
try {
  const num = 42;
  num.toUpperCase();
} catch (error) {
  console.log("TypeError:", error.message);
}

// ReferenceError - Undefined variable
try {
  console.log(undefinedVariable);
} catch (error) {
  console.log("ReferenceError:", error.message);
}

// RangeError - Out of range
try {
  const arr = new Array(-1);
} catch (error) {
  console.log("RangeError:", error.message);
}

// SyntaxError (caught during parsing, not runtime)
try {
  eval("const x = ;");
} catch (error) {
  console.log("SyntaxError:", error.message);
}

// URIError
try {
  decodeURIComponent('%');
} catch (error) {
  console.log("URIError:", error.message);
}

// Checking error types
function handleError(error) {
  if (error instanceof TypeError) {
    console.log("Type problem - check your types");
  } else if (error instanceof ReferenceError) {
    console.log("Reference problem - variable undefined");
  } else if (error instanceof RangeError) {
    console.log("Range problem - value out of bounds");
  } else {
    console.log("Unknown error:", error.message);
  }
}

try {
  null.toString();
} catch (error) {
  handleError(error);
}`,language:"javascript"},{id:"js-custom-errors",title:"Custom Errors",content:`# Creating Custom Errors

Extend Error class for specific error types.

## Benefits
- Better error identification
- Custom properties
- Cleaner error handling`,codeExample:`// Custom Error Class
class ValidationError extends Error {
  constructor(field, message) {
    super(message);
    this.name = "ValidationError";
    this.field = field;
  }
}

class NetworkError extends Error {
  constructor(status, message) {
    super(message);
    this.name = "NetworkError";
    this.status = status;
  }
}

class AuthenticationError extends Error {
  constructor(message = "Authentication failed") {
    super(message);
    this.name = "AuthenticationError";
  }
}

// Using custom errors
function validateUser(user) {
  if (!user.email) {
    throw new ValidationError("email", "Email is required");
  }
  if (!user.email.includes("@")) {
    throw new ValidationError("email", "Invalid email format");
  }
  if (!user.password || user.password.length < 8) {
    throw new ValidationError("password", "Password must be 8+ chars");
  }
  return true;
}

// Handling specific error types
function processUser(user) {
  try {
    validateUser(user);
    console.log("User is valid!");
  } catch (error) {
    if (error instanceof ValidationError) {
      console.log(\`Validation failed for \${error.field}: \${error.message}\`);
    } else if (error instanceof AuthenticationError) {
      console.log("Please log in again");
    } else {
      throw error; // Re-throw unknown errors
    }
  }
}

processUser({ email: "test", password: "123" });
processUser({ email: "test@example.com", password: "password123" });

// Error factory
const ErrorFactory = {
  validation: (field, msg) => new ValidationError(field, msg),
  network: (status, msg) => new NetworkError(status, msg),
  auth: (msg) => new AuthenticationError(msg)
};

throw ErrorFactory.validation("username", "Username taken");`,language:"javascript"}]},{id:"js-regex",title:"Regular Expressions",description:"Master pattern matching with regular expressions.",difficulty:"intermediate",duration:"3 hours",topics:["Pattern Syntax","Methods","Common Patterns","Groups & Lookaheads"],lessons:[{id:"js-regex-basics",title:"RegEx Basics",content:`# Regular Expressions

Patterns for matching text.

## Creating RegEx
- Literal: /pattern/flags
- Constructor: new RegExp("pattern", "flags")

## Common Flags
- g: Global (all matches)
- i: Case insensitive
- m: Multiline`,codeExample:`// Creating regular expressions
const regex1 = /hello/i;
const regex2 = new RegExp("hello", "i");

// Basic patterns
const text = "Hello World! hello again.";

console.log("Test:", regex1.test(text)); // true
console.log("Match:", text.match(regex1)); // First match

// Global flag - find all
const globalRegex = /hello/gi;
console.log("All matches:", text.match(globalRegex));

// Character classes
const digits = "My phone: 123-456-7890";
console.log("\\nDigits:", digits.match(/\\d+/g));

const words = "Hello World 123";
console.log("Words:", words.match(/\\w+/g));
console.log("Non-digits:", words.match(/\\D+/g));

// Quantifiers
console.log("\\nQuantifiers:");
console.log("a*:", "aaa".match(/a*/g));      // 0 or more
console.log("a+:", "aaa".match(/a+/g));      // 1 or more
console.log("a?:", "aaa".match(/a?/g));      // 0 or 1
console.log("a{2}:", "aaa".match(/a{2}/g));  // Exactly 2
console.log("a{1,2}:", "aaa".match(/a{1,2}/g)); // 1 to 2

// Anchors
console.log("\\nAnchors:");
console.log("^Hello:", /^Hello/.test("Hello World")); // Start
console.log("World$:", /World$/.test("Hello World")); // End
console.log("\\\\bword\\\\b:", "a word here".match(/\\bword\\b/)); // Word boundary`,language:"javascript"},{id:"js-regex-methods",title:"RegEx Methods",content:`# RegEx Methods

## RegExp Methods
- test() - Returns boolean
- exec() - Returns match details

## String Methods
- match() - Find matches
- matchAll() - Iterator of all matches
- replace() - Replace matches
- split() - Split by pattern
- search() - Find index`,codeExample:`const text = "The quick brown fox jumps over the lazy dog";

// test() - Returns boolean
console.log("Has 'fox':", /fox/.test(text));

// exec() - Returns match with details
const regex = /\\w+/g;
let match;
console.log("\\nexec() results:");
while ((match = regex.exec(text)) !== null) {
  if (match.index < 20) { // Limit output
    console.log(\`Found "\${match[0]}" at index \${match.index}\`);
  }
}

// match() - Returns array of matches
console.log("\\nmatch():", text.match(/\\b\\w{4}\\b/g)); // 4-letter words

// matchAll() - Returns iterator with details
console.log("\\nmatchAll():");
const matches = text.matchAll(/\\b(\\w{3})\\b/g);
for (const m of matches) {
  console.log(\`"\${m[0]}" at \${m.index}\`);
}

// replace() - Replace matches
console.log("\\nreplace():", text.replace(/fox/, "cat"));
console.log("replaceAll:", text.replace(/the/gi, "a"));

// Replace with function
const result = text.replace(/\\b\\w+\\b/g, (word) => {
  return word.length > 4 ? word.toUpperCase() : word;
});
console.log("Function replace:", result);

// split() - Split by pattern
const csv = "apple, banana,  cherry,orange";
console.log("\\nsplit():", csv.split(/,\\s*/));

// search() - Returns index
console.log("\\nsearch():", text.search(/brown/)); // 10`,language:"javascript"},{id:"js-regex-groups",title:"Groups & Lookaheads",content:`# Groups and Lookaheads

## Capturing Groups
Capture parts of the match with ().

## Non-Capturing Groups
Group without capturing with (?:).

## Lookaheads
Match based on what follows.`,codeExample:`// Capturing groups
const dateStr = "2024-01-15";
const dateRegex = /(\\d{4})-(\\d{2})-(\\d{2})/;
const dateMatch = dateStr.match(dateRegex);
console.log("Full match:", dateMatch[0]);
console.log("Year:", dateMatch[1]);
console.log("Month:", dateMatch[2]);
console.log("Day:", dateMatch[3]);

// Named groups
const namedRegex = /(?<year>\\d{4})-(?<month>\\d{2})-(?<day>\\d{2})/;
const namedMatch = dateStr.match(namedRegex);
console.log("\\nNamed groups:", namedMatch.groups);

// Non-capturing groups
const urlRegex = /https?:\\/\\/(?:www\\.)?([\\w.]+)/;
const url = "https://www.example.com";
console.log("\\nDomain:", url.match(urlRegex)[1]);

// Backreferences
const repeated = "hello hello world";
const dupRegex = /\\b(\\w+)\\s+\\1\\b/;
console.log("\\nDuplicate:", repeated.match(dupRegex));

// Lookahead - Match if followed by
const prices = "100 dollars 50 euros 75 dollars";
console.log("\\nPositive lookahead:");
console.log("Before 'dollars':", prices.match(/\\d+(?= dollars)/g));

// Negative lookahead - Match if NOT followed by
console.log("Not before 'dollars':", prices.match(/\\d+(?! dollars)/g));

// Lookbehind - Match if preceded by
const data = "$100 and €50";
console.log("\\nPositive lookbehind:");
console.log("After $:", data.match(/(?<=\\$)\\d+/g));

// Replace with groups
const name = "John Doe";
const reversed = name.replace(/(\\w+)\\s(\\w+)/, "$2, $1");
console.log("\\nReversed:", reversed);

// Complex example: Extract info
const log = "[ERROR] 2024-01-15 10:30:45 - User not found";
const logRegex = /\\[(?<level>\\w+)\\]\\s(?<date>[\\d-]+)\\s(?<time>[\\d:]+)\\s-\\s(?<message>.+)/;
const logMatch = log.match(logRegex);
console.log("\\nLog parsed:", logMatch.groups);`,language:"javascript"},{id:"js-regex-patterns",title:"Common Patterns",content:`# Common RegEx Patterns

Useful patterns for validation and extraction.`,codeExample:`// Email validation
const emailRegex = /^[\\w.-]+@[\\w.-]+\\.\\w{2,}$/;
console.log("Email valid:", emailRegex.test("user@example.com"));
console.log("Email invalid:", emailRegex.test("invalid-email"));

// Phone number (US format)
const phoneRegex = /^\\(?\\d{3}\\)?[-.\\s]?\\d{3}[-.\\s]?\\d{4}$/;
console.log("\\nPhone tests:");
console.log(phoneRegex.test("(123) 456-7890")); // true
console.log(phoneRegex.test("123-456-7890"));   // true
console.log(phoneRegex.test("1234567890"));     // true

// URL validation
const urlRegex = /^(https?:\\/\\/)?(www\\.)?[\\w-]+\\.[a-z]{2,}(\\/\\S*)?$/i;
console.log("\\nURL tests:");
console.log(urlRegex.test("https://www.example.com")); // true
console.log(urlRegex.test("example.com/path"));        // true

// Password strength
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$/;
console.log("\\nPassword tests:");
console.log(passwordRegex.test("Weak1!"));           // false (too short)
console.log(passwordRegex.test("StrongPass1!"));     // true

// Extract hashtags
const tweet = "Learning #JavaScript and #WebDevelopment is fun! #coding";
const hashtags = tweet.match(/#\\w+/g);
console.log("\\nHashtags:", hashtags);

// Extract URLs from text
const textWithUrls = "Visit https://google.com or http://example.com";
const urls = textWithUrls.match(/https?:\\/\\/[\\w.-]+/g);
console.log("URLs:", urls);

// Validate credit card (basic)
const ccRegex = /^\\d{4}[- ]?\\d{4}[- ]?\\d{4}[- ]?\\d{4}$/;
console.log("\\nCC valid:", ccRegex.test("1234-5678-9012-3456"));

// Remove HTML tags
const html = "<p>Hello <b>World</b>!</p>";
const plainText = html.replace(/<[^>]*>/g, "");
console.log("\\nPlain text:", plainText);

// Sanitize input
const input = "  Hello   World!  ";
const sanitized = input.trim().replace(/\\s+/g, " ");
console.log("Sanitized:", sanitized);`,language:"javascript"}]},{id:"react-basics",title:"React Fundamentals",description:"Get started with React components and JSX.",difficulty:"beginner",duration:"3 hours",topics:["Components","JSX","Props","Rendering"],lessons:[{id:"react-components",title:"Components & JSX",content:`# React Components

Components are the building blocks of React apps.

## Function Components
Modern way using functions.

## JSX Rules
- Return single root element
- Close all tags
- Use className instead of class`,codeExample:`// This is conceptual React code
// Run it in a React environment

function Welcome({ name }) {
  return <h1>Hello, {name}!</h1>;
}

function UserCard({ user }) {
  const isOnline = user.status === 'online';
  
  return (
    <div className="user-card">
      <h2>{user.name}</h2>
      <span className={isOnline ? 'online' : 'offline'}>
        {isOnline ? '🟢 Online' : '⚫ Offline'}
      </span>
    </div>
  );
}

// Example usage shown as strings
console.log("React Component Example:");
console.log("<Welcome name='Alice' />");
console.log("<UserCard user={{ name: 'John', status: 'online' }} />");`,language:"javascript"}]},{id:"react-state",title:"State Management",description:"Learn useState, useReducer, and state management patterns.",difficulty:"intermediate",duration:"4 hours",topics:["useState","useReducer","Context API","State Patterns"],lessons:[]},{id:"react-hooks",title:"React Hooks",description:"Master all React hooks and create custom hooks.",difficulty:"intermediate",duration:"4 hours",topics:["useEffect","useRef","useMemo","Custom Hooks"],lessons:[]},{id:"react-advanced",title:"Advanced React",description:"Performance optimization and advanced patterns.",difficulty:"advanced",duration:"5 hours",topics:["Performance","Suspense","Error Boundaries","Portals"],lessons:[]},{id:"react-forms",title:"Forms & User Input",description:"Build accessible forms with controlled components and validation.",difficulty:"beginner",duration:"3 hours",topics:["Controlled Components","Uncontrolled Components","Form Handling","Validation"],lessons:[{id:"react-controlled-components",title:"Controlled vs Uncontrolled Components",content:`# Controlled vs Uncontrolled Components

In React, form elements can be managed in two main ways: controlled and uncontrolled.

## Controlled Components
- Form data is handled by React state.
- The input's value is always driven by state.
- You listen to events (like onChange) and update state.
- Easier to validate and transform data.

## Uncontrolled Components
- Form data is handled by the DOM, not React state.
- You access values using refs when needed.
- Less code, but harder to validate in real time.

## When To Use Which
- Use controlled components for most app forms.
- Use uncontrolled components for simple forms, existing non-React code, or when you only need the value on submit.`,codeExample:`import React, { useState, useRef } from 'react';

export function ControlledInputExample() {
  const [name, setName] = useState('');

  function handleChange(event) {
    setName(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    alert('Controlled value: ' + name);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name (controlled):
        <input
          type="text"
          value={name}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export function UncontrolledInputExample() {
  const inputRef = useRef(null);

  function handleSubmit(event) {
    event.preventDefault();
    if (inputRef.current) {
      alert('Uncontrolled value: ' + inputRef.current.value);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name (uncontrolled):
        <input type="text" ref={inputRef} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}`,language:"javascript"},{id:"react-form-validation",title:"Basic Form Validation",content:`# Basic Form Validation

Validation ensures users submit correct and complete data.

## Common Validation Types
- Required fields (cannot be empty)
- Pattern checks (email, password strength)
- Length checks (min / max characters)
- Cross-field checks (password confirmation)

## Validation Approaches
1. Inline validation on every change
2. OnBlur validation when leaving a field
3. OnSubmit validation before sending data

## UX Tips
- Show clear error messages near the fields.
- Use friendly language.
- Highlight invalid fields visually (e.g. red border).`,codeExample:`import React, { useState } from 'react';

export function SignupForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ email: '', password: '' });

  function validate() {
    const newErrors = { email: '', password: '' };

    if (!email) {
      newErrors.email = 'Email is required.';
    } else if (!email.includes('@')) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!password) {
      newErrors.password = 'Password is required.';
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters.';
    }

    setErrors(newErrors);
    return !newErrors.email && !newErrors.password;
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!validate()) return;
    alert('Form is valid, sending data...');
    // Send to server here
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={event => setEmail(event.target.value)}
          />
        </label>
        {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
      </div>

      <div>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={event => setPassword(event.target.value)}
          />
        </label>
        {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
      </div>

      <button type="submit">Sign up</button>
    </form>
  );
}`,language:"javascript"}]},{id:"react-routing",title:"Routing & Navigation",description:"Create multi-page experiences using React Router.",difficulty:"intermediate",duration:"3 hours",topics:["React Router","Route Params","Nested Routes","Navigation"],lessons:[{id:"react-router-basics",title:"Routing Basics with React Router",content:`# Routing Basics with React Router

React Router lets you map URLs to components so your app can have multiple "pages".

## Core Concepts
- BrowserRouter: Wraps your app and listens to URL changes.
- Routes: A list of Route definitions.
- Route: Connects a path (like /about) to a component.
- Link: Navigates without reloading the page.

## Benefits
- Single Page Application (SPA) navigation.
- Preserves state across page changes.
- Works well with browser history (back/forward).`,codeExample:`import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function HomePage() {
  return <h1>Home</h1>;
}

function AboutPage() {
  return <h1>About</h1>;
}

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> |{' '}
        <Link to="/about">About</Link>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;`,language:"javascript"},{id:"react-router-advanced",title:"Route Params & Nested Routes",content:`# Route Params & Nested Routes

You can make dynamic routes that depend on URL parameters and nest routes for layouts.

## Route Params
- Use :id syntax in the path (e.g. /users/:id).
- Access the value with useParams() hook.
- Great for detail pages (user, product, article).

## Nested Routes
- Let you define parent layouts and child pages.
- Parent renders common UI (nav, sidebar).
- Children render inside an outlet area.`,codeExample:`import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useParams,
  Outlet
} from 'react-router-dom';

function UsersLayout() {
  return (
    <div>
      <h2>Users</h2>
      <nav>
        <Link to="1">User 1</Link> |{' '}
        <Link to="2">User 2</Link>
      </nav>
      <Outlet />
    </div>
  );
}

function UserDetails() {
  const params = useParams();
  return <p>Showing details for user with ID: {params.userId}</p>;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="users" element={<UsersLayout />}>
          <Route path=":userId" element={<UserDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;`,language:"javascript"}]},{id:"react-testing",title:"Testing React Applications",description:"Write reliable tests for components and hooks.",difficulty:"intermediate",duration:"4 hours",topics:["Jest","React Testing Library","Component Testing","Mocking"],lessons:[{id:"react-testing-library-intro",title:"Testing Components with React Testing Library",content:`# Testing Components with React Testing Library

React Testing Library (RTL) focuses on testing components as users see them.

## Key Principles
- Test behavior, not implementation details.
- Query elements the way a user would (by text, role, label).
- Avoid relying on internal state or class names when possible.

## Basic Flow
1. Render the component.
2. Query for elements you care about.
3. Interact with them (click, type).
4. Assert on the output.`,codeExample:`import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

function Counter() {
  const [count, setCount] = React.useState(0);
  return (
    <div>
      <p>Count: <span>{count}</span></p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

test('increments counter when button is clicked', () => {
  render(<Counter />);

  // Assert initial state
  expect(screen.getByText(/count:/i)).toHaveTextContent('Count: 0');

  // Click the button
  fireEvent.click(screen.getByText(/increment/i));

  // Assert updated state
  expect(screen.getByText(/count:/i)).toHaveTextContent('Count: 1');
});`,language:"javascript"},{id:"react-testing-async-mocking",title:"Async Tests & Mocking",content:`# Async Tests & Mocking

Many components fetch data or use timers. You need async tests and mocking to handle these cases.

## Async Testing
- Use findBy queries (which wait for elements to appear).
- Or use waitFor to wait for state updates.

## Mocking
- Mock network requests (e.g. fetch or axios).
- Mock timers (setTimeout, setInterval).
- Helps you test without real APIs or delays.`,codeExample:`import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';

// Example component that fetches data
function UserProfile({ userId }) {
  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
    let isMounted = true;
    fetch('/api/users/' + userId)
      .then(res => res.json())
      .then(data => {
        if (isMounted) setUser(data);
      });
    return () => {
      isMounted = false;
    };
  }, [userId]);

  if (!user) return <p>Loading...</p>;
  return <h1>{user.name}</h1>;
}

// Mock the global fetch
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ name: 'Alice' })
  })
);

test('loads and displays user name', async () => {
  render(<UserProfile userId="123" />);

  // Initially shows loading
  expect(screen.getByText(/loading/i)).toBeInTheDocument();

  // Wait for the name to appear
  await waitFor(() => {
    expect(screen.getByRole('heading')).toHaveTextContent('Alice');
  });

  // Ensure fetch was called correctly
  expect(global.fetch).toHaveBeenCalledWith('/api/users/123');
});`,language:"javascript"}]},{id:"react-typescript",title:"React with TypeScript",description:"Type your components, props, and hooks using TypeScript.",difficulty:"intermediate",duration:"3 hours",topics:["Typing Props","Typing State","Generics with Hooks","Reusable Types"],lessons:[{id:"react-typescript-props-state",title:"Typing Props & State",content:`# Typing Props & State in React

TypeScript makes React components safer and more self-documenting.

## Typing Props
- Define an interface or type for your props.
- Use it in your function component definition.
- Helps catch missing or wrong props at compile time.

## Typing State
- useState is generic: useState<Type>().
- Helps ensure you only set valid values.
- Prevents many runtime bugs.`,codeExample:`import React, { useState } from 'react';

type UserCardProps = {
  name: string;
  age?: number; // optional prop
  isOnline: boolean;
};

export function UserCard({ name, age, isOnline }: UserCardProps) {
  return (
    <article>
      <h2>{name}</h2>
      {age !== undefined && <p>Age: {age}</p>}
      <p>Status: {isOnline ? 'Online' : 'Offline'}</p>
    </article>
  );
}

export function Counter() {
  // Explicit state type annotation
  const [count, setCount] = useState<number>(0);
  const [name, setName] = useState('Anonymous'); // type inferred as string

  function increment() {
    setCount(prev => prev + 1);
  }

  function updateName(newName: string) {
    setName(newName);
  }

  return (
    <div>
      <p>
        {name}'s count: {count}
      </p>
      <button onClick={increment}>+1</button>
      <button onClick={() => updateName('Alice')}>Set name to Alice</button>
    </div>
  );
}`,language:"typescript"}]},{id:"react-performance-patterns",title:"Performance & Optimization Patterns",description:"Optimize rendering and avoid unnecessary work in React apps.",difficulty:"advanced",duration:"4 hours",topics:["memo","useMemo","useCallback","Code Splitting"],lessons:[{id:"react-memoization",title:"Memoization with memo, useMemo, and useCallback",content:`# Memoization in React

Memoization helps you avoid unnecessary re-renders or expensive recalculations.

## React.memo
- Wraps a component to skip re-rendering when props haven't changed.
- Useful for pure presentational components.

## useMemo
- Caches the result of an expensive calculation.
- Recomputes only when dependencies change.

## useCallback
- Caches a function instance.
- Helps prevent child components from re-rendering when they depend on function props.`,codeExample:`import React, { useState, useMemo, useCallback, memo } from 'react';

// Expensive calculation example
function slowDouble(value) {
  console.log('Running slowDouble...');
  for (let i = 0; i < 100000000; i++) {}
  return value * 2;
}

const DisplayResult = memo(function DisplayResult({ result }) {
  console.log('DisplayResult rendered');
  return <p>Result: {result}</p>;
});

const IncrementButton = memo(function IncrementButton({ onClick }) {
  console.log('IncrementButton rendered');
  return <button onClick={onClick}>Increment count</button>;
});

export function PerformanceExample() {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState(1);

  const doubled = useMemo(() => slowDouble(value), [value]);

  const increment = useCallback(() => {
    setCount(prev => prev + 1);
  }, []);

  return (
    <div>
      <h2>Performance Example</h2>

      <section>
        <h3>Expensive calculation</h3>
        <p>Value: {value}</p>
        <button onClick={() => setValue(value + 1)}>Increase value</button>
        <DisplayResult result={doubled} />
      </section>

      <section>
        <h3>Stable callback</h3>
        <p>Count: {count}</p>
        <IncrementButton onClick={increment} />
      </section>
    </div>
  );
}`,language:"javascript"}]},{id:"react-data-fetching",title:"Data Fetching & Server State",description:"Fetch, cache, and synchronize server data with React apps.",difficulty:"intermediate",duration:"5 hours",topics:["fetch","AbortController","Loading/Error States","React Query/TanStack Query"],lessons:[{id:"react-fetch-useeffect",title:"Fetching Data with useEffect",content:`# Fetching Data with useEffect

Most real apps need data from an API. The simplest approach is to fetch inside \`useEffect\`.

## Key Ideas
- Keep 3 UI states: loading, error, and success.
- Avoid setting state after a component unmounts.
- Abort requests when the component unmounts or params change.

## Common Mistakes
- Forgetting dependency arrays (causes repeated fetching).
- Not handling errors (blank UI).
- Updating state after unmount (console warnings).`,codeExample:`import React from 'react';

export function UsersList() {
  const [users, setUsers] = React.useState([]);
  const [status, setStatus] = React.useState('idle'); // 'idle' | 'loading' | 'success' | 'error'
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    const controller = new AbortController();

    async function load() {
      setStatus('loading');
      setError(null);

      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users', {
          signal: controller.signal
        });

        if (!res.ok) throw new Error('Request failed: ' + res.status);

        const data = await res.json();
        setUsers(data);
        setStatus('success');
      } catch (err) {
        if (err.name === 'AbortError') return;
        setError(err);
        setStatus('error');
      }
    }

    load();
    return () => controller.abort();
  }, []);

  if (status === 'loading') return <p>Loading users...</p>;
  if (status === 'error') return <p style={{ color: 'red' }}>Error: {String(error?.message || error)}</p>;

  return (
    <ul>
      {users.map(u => (
        <li key={u.id}>{u.name}</li>
      ))}
    </ul>
  );
}`,language:"javascript"},{id:"react-server-state-intro",title:"Server State vs Client State",content:`# Server State vs Client State

Not all state is the same.

## Client State
- Lives only in the UI (e.g. open/closed modal, selected tab).
- Often managed by useState/useReducer/Context.

## Server State
- Comes from a backend (users, products, messages).
- Needs: caching, refetching, background updates, retry, pagination.

## Why This Matters
If you manage server state manually, you'll re-implement:
- caching
- request deduplication
- retry logic
- stale-while-revalidate patterns

Libraries like TanStack Query specialize in this.`,codeExample:`// No runnable code here - conceptual lesson.
// Example distinctions:
//
// client: const [isOpen, setIsOpen] = useState(false)
// server: const { data, isLoading } = useQuery({ queryKey: ['users'], queryFn: fetchUsers })`,language:"javascript"}]},{id:"react-context",title:"Context API & App-Level State",description:"Share state across the component tree without prop drilling.",difficulty:"intermediate",duration:"4 hours",topics:["createContext","useContext","Provider Pattern","Context Performance"],lessons:[{id:"react-context-basics",title:"Context Basics: Provider and useContext",content:`# Context Basics

Context lets you pass values deep into the tree without manually threading props.

## When Context Helps
- Theme (light/dark)
- Auth user/session
- Locale/i18n
- Feature flags

## When NOT to Use Context
- High-frequency updates (like typing) that cause large re-renders.
- Server state (prefer a server-state library).`,codeExample:`import React from 'react';

const ThemeContext = React.createContext({ theme: 'light', toggle: () => {} });

export function ThemeProvider({ children }) {
  const [theme, setTheme] = React.useState('light');

  const value = React.useMemo(() => {
    return {
      theme,
      toggle: () => setTheme(t => (t === 'light' ? 'dark' : 'light'))
    };
  }, [theme]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function ThemeButton() {
  const { theme, toggle } = React.useContext(ThemeContext);
  return (
    <button onClick={toggle}>
      Current theme: {theme} (click to toggle)
    </button>
  );
}`,language:"javascript"},{id:"react-context-performance",title:"Context Performance Patterns",content:`# Context Performance Patterns

Context updates re-render all consumers.

## Patterns to Reduce Re-renders
- Memoize provider value with useMemo (avoid new object each render).
- Split contexts (AuthContext vs ThemeContext).
- Keep frequently-changing state local; only lift when needed.`,codeExample:`import React from 'react';

const AuthStateContext = React.createContext(null);
const AuthActionsContext = React.createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = React.useState(null);

  const actions = React.useMemo(() => ({
    login: async () => setUser({ id: '1', name: 'Alice' }),
    logout: () => setUser(null)
  }), []);

  return (
    <AuthStateContext.Provider value={user}>
      <AuthActionsContext.Provider value={actions}>
        {children}
      </AuthActionsContext.Provider>
    </AuthStateContext.Provider>
  );
}

export function useAuthUser() {
  return React.useContext(AuthStateContext);
}

export function useAuthActions() {
  return React.useContext(AuthActionsContext);
}`,language:"javascript"}]},{id:"react-reducer-patterns",title:"useReducer & State Machines",description:"Model complex UI state with reducers and predictable transitions.",difficulty:"intermediate",duration:"4 hours",topics:["useReducer","Reducer Patterns","Finite States","Actions"],lessons:[{id:"react-usereducer-basics",title:"useReducer for Complex State",content:`# useReducer for Complex State

When state transitions matter, \`useReducer\` can be clearer than many \`useState\` calls.

## Good Use Cases
- Multi-step forms (idle -> submitting -> success/error)
- Complex updates based on previous state
- Centralizing logic for readability and testing

## Reducer Rules
- Pure function: (state, action) -> newState
- Do not mutate state directly
- Use action objects like { type: '...' }`,codeExample:`import React from 'react';

const initialState = { status: 'idle', error: null };

function reducer(state, action) {
  switch (action.type) {
    case 'submit':
      return { status: 'submitting', error: null };
    case 'success':
      return { status: 'success', error: null };
    case 'error':
      return { status: 'error', error: action.error };
    case 'reset':
      return initialState;
    default:
      return state;
  }
}

export function SaveButton() {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  async function onSave() {
    dispatch({ type: 'submit' });
    try {
      await new Promise(r => setTimeout(r, 400));
      dispatch({ type: 'success' });
    } catch (e) {
      dispatch({ type: 'error', error: e });
    }
  }

  return (
    <div>
      <button onClick={onSave} disabled={state.status === 'submitting'}>
        {state.status === 'submitting' ? 'Saving...' : 'Save'}
      </button>
      {state.status === 'error' && (
        <p style={{ color: 'red' }}>Failed: {String(state.error)}</p>
      )}
      {state.status === 'success' && <p>Saved!</p>}
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
    </div>
  );
}`,language:"javascript"}]},{id:"react-refs-dom",title:"Refs & Direct DOM Work",description:"Use refs for focus management, measurements, and imperative APIs.",difficulty:"intermediate",duration:"3 hours",topics:["useRef","forwardRef","useImperativeHandle","Measuring DOM"],lessons:[{id:"react-useRef-focus",title:"useRef for Focus and DOM Access",content:`# useRef for Focus and DOM Access

Refs let you keep a mutable value that persists across renders.
For DOM nodes, refs provide a safe way to call imperative methods (focus, scrollIntoView).

## Use Cases
- Auto-focus an input
- Scroll to an element
- Read element size/position (with ResizeObserver)

## Avoid
- Using refs as a replacement for state (it won't trigger renders).`,codeExample:`import React from 'react';

export function FocusInput() {
  const inputRef = React.useRef(null);

  React.useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div>
      <label>
        Search:
        <input ref={inputRef} placeholder="Type here..." />
      </label>
    </div>
  );
}`,language:"javascript"},{id:"react-forwardRef-imperative",title:"forwardRef and useImperativeHandle",content:`# forwardRef and useImperativeHandle

Sometimes you want a parent to call a child method (like open(), focus()).

## Pattern
- forwardRef passes a ref into a child component
- useImperativeHandle controls what the parent can access

Use it sparingly; prefer declarative props when possible.`,codeExample:`import React from 'react';

const FancyInput = React.forwardRef(function FancyInput(props, ref) {
  const innerRef = React.useRef(null);

  React.useImperativeHandle(ref, () => ({
    focus: () => innerRef.current?.focus(),
    clear: () => {
      if (innerRef.current) innerRef.current.value = '';
    }
  }));

  return <input ref={innerRef} placeholder="Fancy input" />;
});

export function Parent() {
  const fancyRef = React.useRef(null);

  return (
    <div>
      <FancyInput ref={fancyRef} />
      <button onClick={() => fancyRef.current?.focus()}>Focus</button>
      <button onClick={() => fancyRef.current?.clear()}>Clear</button>
    </div>
  );
}`,language:"javascript"}]},{id:"react-error-handling",title:"Error Handling & Resilience",description:"Handle runtime errors gracefully with Error Boundaries and patterns.",difficulty:"advanced",duration:"3 hours",topics:["Error Boundaries","Fallback UI","Recoverable Errors","Logging"],lessons:[{id:"react-error-boundary",title:"Error Boundaries",content:`# Error Boundaries

Error boundaries catch rendering errors in their child tree and show a fallback UI.

## What They Catch
- Errors during rendering
- Errors in lifecycle methods
- Errors in constructors of class components

## What They Do NOT Catch
- Event handlers (you handle with try/catch)
- Async code (promises)
- Errors in the error boundary itself`,codeExample:`import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    // Send to logging service here
    console.error('Caught by ErrorBoundary:', error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div role="alert">
          <h2>Something went wrong.</h2>
          <pre>{String(this.state.error)}</pre>
          <button onClick={() => this.setState({ hasError: false, error: null })}>
            Try again
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

function Buggy({ crash }) {
  if (crash) throw new Error('Boom!');
  return <p>All good</p>;
}

export function Demo() {
  const [crash, setCrash] = React.useState(false);
  return (
    <div>
      <button onClick={() => setCrash(true)}>Crash</button>
      <ErrorBoundary>
        <Buggy crash={crash} />
      </ErrorBoundary>
    </div>
  );
}`,language:"javascript"}]},{id:"react-accessibility",title:"Accessibility in React",description:"Build inclusive UIs: semantics, keyboard navigation, and ARIA.",difficulty:"intermediate",duration:"4 hours",topics:["Semantic HTML","ARIA","Keyboard Navigation","Focus Management"],lessons:[{id:"react-a11y-forms",title:"Accessible Forms & Labels",content:`# Accessible Forms & Labels

Accessibility starts with correct HTML.

## Basics
- Always pair <label> with form controls (htmlFor + id).
- Prefer semantic elements (<button>, <nav>, <main>).
- Use aria-* only when semantics are not enough.

## Common Pitfalls
- Clickable <div> instead of <button>
- Missing focus styles
- Modals without focus trapping`,codeExample:`import React from 'react';

export function EmailField() {
  return (
    <div>
      <label htmlFor="email">Email</label>
      <input id="email" name="email" type="email" autoComplete="email" />
      <p id="emailHelp">We'll never share your email.</p>
    </div>
  );
}

export function IconButton() {
  return (
    <button type="button" aria-label="Close dialog">
      ✕
    </button>
  );
}`,language:"javascript"}]},{id:"react-animations",title:"Animations & Transitions",description:"Animate UI changes with CSS, transitions, and libraries.",difficulty:"intermediate",duration:"3 hours",topics:["CSS Transitions","React Transition Group","Layout Animations"],lessons:[{id:"react-css-transitions",title:"CSS Transitions with State",content:`# CSS Transitions with State

The simplest animation approach:
- Toggle a class based on state
- Animate via CSS transitions

## Tips
- Prefer transform/opacity for smooth performance.
- Avoid animating layout-heavy properties if possible.`,codeExample:`import React from 'react';
import './panel.css';

export function SlidingPanel() {
  const [open, setOpen] = React.useState(false);

  return (
    <div>
      <button onClick={() => setOpen(o => !o)}>
        {open ? 'Close' : 'Open'} panel
      </button>

      <div className={open ? 'panel panelOpen' : 'panel'}>
        <p>Hi! I slide in.</p>
      </div>
    </div>
  );
}

// panel.css
// .panel { transform: translateX(-20px); opacity: 0; transition: transform 200ms ease, opacity 200ms ease; }
// .panelOpen { transform: translateX(0); opacity: 1; }`,language:"javascript"}]},{id:"react-security",title:"Security Essentials for React",description:"Avoid common client-side security pitfalls in React apps.",difficulty:"intermediate",duration:"3 hours",topics:["XSS","dangerouslySetInnerHTML","Auth Tokens","Safe Rendering"],lessons:[{id:"react-xss-basics",title:"XSS and Safe Rendering",content:`# XSS and Safe Rendering

React escapes values in JSX by default:
- {userInput} is escaped (safe in most cases)

## Where You Can Get Hurt
- dangerouslySetInnerHTML
- Rendering untrusted HTML from CMS/users
- Injecting URLs into href/src without validation

## Best Practices
- Avoid dangerouslySetInnerHTML unless you sanitize input.
- Validate/allowlist URL protocols (http, https).
- Use HttpOnly cookies for sessions when possible (backend-controlled).`,codeExample:`import React from 'react';

export function SafeComment({ text }) {
  // React escapes this automatically
  return <p>{text}</p>;
}

export function UnsafeHtml({ html }) {
  // Only do this if html is sanitized server-side or with a trusted sanitizer
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}

export function SafeLink({ url, children }) {
  const safe = typeof url === 'string' && /^https?:\\/\\//i.test(url) ? url : '#';
  return <a href={safe}>{children}</a>;
}`,language:"javascript"}]},{id:"react-architecture",title:"React Architecture & Project Structure",description:"Scale React codebases with clean boundaries, patterns, and conventions.",difficulty:"advanced",duration:"5 hours",topics:["Folder Structure","Feature Modules","Composition","Dependency Direction"],lessons:[{id:"react-feature-based-structure",title:"Feature-Based Folder Structure",content:`# Feature-Based Folder Structure

As apps grow, organizing by "feature" often scales better than by file type.

## Example Structure
- src/
  - app/ (providers, router, app shell)
  - features/
    - auth/
      - api/
      - components/
      - hooks/
      - routes/
      - types.ts
    - users/
  - shared/
    - ui/
    - lib/
    - hooks/

## Benefits
- Better encapsulation
- Easier ownership
- Fewer tangled imports`,codeExample:`// Example: shared UI button
export function Button({ variant = 'primary', ...props }) {
  return <button data-variant={variant} {...props} />;
}

// Example: feature-level API module
export async function getUsers() {
  const res = await fetch('/api/users');
  if (!res.ok) throw new Error('Failed to load users');
  return res.json();
}`,language:"javascript"}]},{id:"react-build-tooling",title:"Build Tooling & Deployment",description:"Understand bundling, environment variables, and deployment basics.",difficulty:"intermediate",duration:"4 hours",topics:["Vite","Env Vars","Production Builds","Deployment Strategies"],lessons:[{id:"react-env-vars",title:"Environment Variables",content:`# Environment Variables

Env vars let you change behavior per environment (dev/staging/prod).

## Rules of Thumb
- Never ship secrets to the browser.
- Client env vars are public (any user can view them).
- Prefer backend-provided secrets and token exchange.

## Typical Uses
- API base URL
- Feature flags (non-sensitive)
- Build-time configuration`,codeExample:`// Vite example:
// .env
// VITE_API_BASE_URL=https://api.example.com
//
// usage:
const baseUrl = import.meta.env.VITE_API_BASE_URL;

export async function loadHealth() {
  const res = await fetch(baseUrl + '/health');
  if (!res.ok) throw new Error('Health check failed');
  return res.json();
}`,language:"javascript"}]},{id:"react-internationalization",title:"Internationalization",description:"Build apps that support multiple languages and locales.",difficulty:"intermediate",duration:"3 hours",topics:["i18n Basics","Locale Formatting","Pluralization","RTL"],lessons:[{id:"react-i18n-formatting",title:"Locale Formatting and Message Keys",content:`# Internationalization

Good i18n design starts early.

## Concepts
- Use message keys instead of hard-coded strings.
- Format dates/numbers with Intl APIs.
- Plan for longer strings and RTL layouts.

## Common Approach
- messages: { "home.title": "Welcome" }
- t(key) returns the localized string`,codeExample:`import React from 'react';

const messages = {
  en: { 'home.title': 'Welcome', 'cart.items': '{count} items' },
  fr: { 'home.title': 'Bienvenue', 'cart.items': '{count} articles' }
};

function createT(locale) {
  return (key, vars = {}) => {
    const template = messages[locale]?.[key] ?? key;
    return template.replace(/\\{(\\w+)\\}/g, (_, k) => String(vars[k] ?? ''));
  };
}

export function I18nDemo() {
  const [locale, setLocale] = React.useState('en');
  const t = React.useMemo(() => createT(locale), [locale]);

  const today = new Intl.DateTimeFormat(locale, { dateStyle: 'medium' }).format(new Date());

  return (
    <div>
      <select value={locale} onChange={e => setLocale(e.target.value)}>
        <option value="en">English</option>
        <option value="fr">Français</option>
      </select>

      <h1>{t('home.title')}</h1>
      <p>Today: {today}</p>
      <p>{t('cart.items', { count: 3 })}</p>
    </div>
  );
}`,language:"javascript"}]}],uD={beginner:"success",intermediate:"warning",advanced:"destructive"};function dD(){const e=Ie();return d.jsxs("div",{className:"container mx-auto px-4 py-8",children:[d.jsxs("div",{className:"mb-8",children:[d.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[d.jsx("div",{className:"w-12 h-12 rounded-lg bg-cyan-500/10 flex items-center justify-center",children:d.jsx(Df,{className:"h-6 w-6 text-cyan-500"})}),d.jsxs("div",{children:[d.jsx("h1",{className:"text-3xl font-bold",children:"React"}),d.jsx("p",{className:"text-muted-foreground",children:"Build modern user interfaces"})]})]}),d.jsx("p",{className:"text-muted-foreground max-w-3xl",children:"Learn React from the ground up. Master components, hooks, state management, and advanced patterns used in production applications."})]}),d.jsx("div",{className:"grid md:grid-cols-2 gap-6",children:cD.map((t,n)=>d.jsx(yt.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.3,delay:n*.1},children:d.jsxs(Bt,{className:"h-full hover:shadow-lg transition-all hover:border-primary/50 group cursor-pointer",onClick:()=>e(`/react/${t.id}`),children:[d.jsxs(vr,{children:[d.jsxs("div",{className:"flex items-start justify-between",children:[d.jsx(br,{className:"text-xl",children:t.title}),d.jsx(Be,{variant:uD[t.difficulty],children:t.difficulty})]}),d.jsx(wr,{children:t.description})]}),d.jsxs(an,{children:[d.jsxs("div",{className:"flex items-center gap-4 text-sm text-muted-foreground mb-4",children:[d.jsxs("div",{className:"flex items-center gap-1",children:[d.jsx(Ys,{className:"h-4 w-4"}),d.jsx("span",{children:t.duration})]}),d.jsxs("div",{className:"flex items-center gap-1",children:[d.jsx(lo,{className:"h-4 w-4"}),d.jsxs("span",{children:[t.lessons.length," lessons"]})]})]}),d.jsx("div",{className:"flex flex-wrap gap-2 mb-4",children:t.topics.map(o=>d.jsx(Be,{variant:"outline",className:"text-xs",children:o},o))}),d.jsxs(J,{className:"w-full group-hover:bg-primary group-hover:text-primary-foreground",variant:"outline",children:["Start Learning",d.jsx(Ks,{className:"h-4 w-4 ml-2"})]})]})]})},t.id))})]})}function fD(){const{topicId:e}=Wn(),t=Ie(),n=cn("react",e||"");return n?d.jsx(jl,{topic:n,basePath:"/react",categoryTitle:"React",onBack:()=>t("/react")}):d.jsxs("div",{className:"container mx-auto px-4 py-8 text-center",children:[d.jsx("h1",{className:"text-2xl font-bold mb-4",children:"Topic not found"}),d.jsx(J,{onClick:()=>t("/react"),children:"Back to React"})]})}function pD(){const{topicId:e,lessonId:t}=Wn(),n=Ie(),o=cn("react",e||""),r=kl("react",e||"",t||"");if(!o||!r)return d.jsxs("div",{className:"container mx-auto px-4 py-8 text-center",children:[d.jsx("h1",{className:"text-2xl font-bold mb-4",children:"Lesson not found"}),d.jsx(J,{onClick:()=>n("/react"),children:"Back to React"})]});const s=o.lessons.findIndex(i=>i.id===t);return d.jsx(Pl,{topic:o,lesson:r,lessonIndex:s,basePath:"/react"})}function mD(){return d.jsxs(Ws,{children:[d.jsx(be,{index:!0,element:d.jsx(dD,{})}),d.jsx(be,{path:":topicId",element:d.jsx(fD,{})}),d.jsx(be,{path:":topicId/:lessonId",element:d.jsx(pD,{})})]})}const hD={beginner:"success",intermediate:"warning",advanced:"destructive"};function gD(){const e=Ie();return d.jsxs("div",{className:"container mx-auto px-4 py-8",children:[d.jsxs("div",{className:"mb-8",children:[d.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[d.jsx("div",{className:"w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center",children:d.jsx(_f,{className:"h-6 w-6 text-purple-500"})}),d.jsxs("div",{children:[d.jsx("h1",{className:"text-3xl font-bold",children:"Interview Preparation"}),d.jsx("p",{className:"text-muted-foreground",children:"Ace your frontend interviews"})]})]}),d.jsx("p",{className:"text-muted-foreground max-w-3xl",children:"Prepare for frontend developer interviews with curated questions, coding challenges, and system design problems."})]}),d.jsx(Bt,{className:"mb-8 bg-gradient-to-r from-purple-500/10 to-purple-500/5 border-purple-500/20",children:d.jsx(an,{className:"p-6",children:d.jsxs("div",{className:"flex items-start gap-4",children:[d.jsx(rR,{className:"h-8 w-8 text-purple-500 shrink-0"}),d.jsxs("div",{children:[d.jsx("h3",{className:"font-semibold mb-2",children:"Interview Success Tips"}),d.jsxs("ul",{className:"text-sm text-muted-foreground space-y-1",children:[d.jsx("li",{children:"• Practice coding problems daily in the Playground"}),d.jsx("li",{children:"• Understand concepts deeply, not just memorize answers"}),d.jsx("li",{children:"• Build projects to demonstrate your skills"}),d.jsx("li",{children:"• Review common behavioral questions too"})]})]})]})})}),d.jsx("div",{className:"grid md:grid-cols-2 gap-6",children:w1.map((t,n)=>d.jsx(yt.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.3,delay:n*.1},children:d.jsxs(Bt,{className:"h-full hover:shadow-lg transition-all hover:border-primary/50 group cursor-pointer",onClick:()=>e(`/interview/${t.id}`),children:[d.jsxs(vr,{children:[d.jsxs("div",{className:"flex items-start justify-between",children:[d.jsx(br,{className:"text-xl",children:t.title}),d.jsx(Be,{variant:hD[t.difficulty],children:t.difficulty})]}),d.jsx(wr,{children:t.description})]}),d.jsxs(an,{children:[d.jsxs("div",{className:"flex items-center gap-4 text-sm text-muted-foreground mb-4",children:[d.jsxs("div",{className:"flex items-center gap-1",children:[d.jsx(Ys,{className:"h-4 w-4"}),d.jsx("span",{children:t.duration})]}),d.jsxs("div",{className:"flex items-center gap-1",children:[d.jsx(lo,{className:"h-4 w-4"}),d.jsxs("span",{children:[t.lessons.length," lessons"]})]})]}),d.jsx("div",{className:"flex flex-wrap gap-2 mb-4",children:t.topics.map(o=>d.jsx(Be,{variant:"outline",className:"text-xs",children:o},o))}),d.jsxs(J,{className:"w-full group-hover:bg-primary group-hover:text-primary-foreground",variant:"outline",children:["Start Practice",d.jsx(Ks,{className:"h-4 w-4 ml-2"})]})]})]})},t.id))})]})}function yD(){const{topicId:e}=Wn(),t=Ie(),n=cn("interview",e||"");return n?d.jsx(jl,{topic:n,basePath:"/interview",categoryTitle:"Interview Prep",onBack:()=>t("/interview")}):d.jsxs("div",{className:"container mx-auto px-4 py-8 text-center",children:[d.jsx("h1",{className:"text-2xl font-bold mb-4",children:"Topic not found"}),d.jsx(J,{onClick:()=>t("/interview"),children:"Back to Interview Prep"})]})}function vD(){const{topicId:e,lessonId:t}=Wn(),n=Ie(),o=cn("interview",e||""),r=kl("interview",e||"",t||"");if(!o||!r)return d.jsxs("div",{className:"container mx-auto px-4 py-8 text-center",children:[d.jsx("h1",{className:"text-2xl font-bold mb-4",children:"Lesson not found"}),d.jsx(J,{onClick:()=>n("/interview"),children:"Back to Interview Prep"})]});const s=o.lessons.findIndex(i=>i.id===t);return d.jsx(Pl,{topic:o,lesson:r,lessonIndex:s,basePath:"/interview"})}function bD(){return d.jsxs(Ws,{children:[d.jsx(be,{index:!0,element:d.jsx(gD,{})}),d.jsx(be,{path:":topicId",element:d.jsx(yD,{})}),d.jsx(be,{path:":topicId/:lessonId",element:d.jsx(vD,{})})]})}function wD(){const e=Hn(),t=PI(),[n,o]=m.useState(!t);return d.jsxs("div",{className:"flex min-h-screen bg-background",children:[d.jsx(lR,{open:n,onOpenChange:o}),d.jsxs("div",{className:"flex-1 flex flex-col min-h-screen",children:[d.jsx(jI,{onMenuClick:()=>o(!n)}),d.jsx("main",{className:"flex-1 overflow-auto",children:d.jsx(ob,{mode:"wait",children:d.jsxs(Ws,{location:e,children:[d.jsx(be,{path:"/",element:d.jsx(Co,{children:d.jsx(NI,{})})}),d.jsx(be,{path:"/playground",element:d.jsx(Co,{children:d.jsx(YL,{})})}),d.jsx(be,{path:"/javascript/*",element:d.jsx(Co,{children:d.jsx(nD,{})})}),d.jsx(be,{path:"/html-css/*",element:d.jsx(Co,{children:d.jsx(lD,{})})}),d.jsx(be,{path:"/react/*",element:d.jsx(Co,{children:d.jsx(mD,{})})}),d.jsx(be,{path:"/interview/*",element:d.jsx(Co,{children:d.jsx(bD,{})})})]},e.pathname)})})]})]})}Rc.createRoot(document.getElementById("root")).render(d.jsx(_e.StrictMode,{children:d.jsx(YE,{children:d.jsx(CI,{defaultTheme:"system",storageKey:"study-web-theme",children:d.jsx(wD,{})})})}));
