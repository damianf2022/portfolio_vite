function am(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const a in r)if(a!=="default"&&!(a in e)){const i=Object.getOwnPropertyDescriptor(r,a);i&&Object.defineProperty(e,a,i.get?i:{enumerable:!0,get:()=>r[a]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerpolicy&&(i.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?i.credentials="include":a.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();function im(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ir={},om={get exports(){return Ir},set exports(e){Ir=e}},$i={},$={},lm={get exports(){return $},set exports(e){$=e}},R={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ia=Symbol.for("react.element"),sm=Symbol.for("react.portal"),um=Symbol.for("react.fragment"),cm=Symbol.for("react.strict_mode"),fm=Symbol.for("react.profiler"),dm=Symbol.for("react.provider"),mm=Symbol.for("react.context"),pm=Symbol.for("react.forward_ref"),vm=Symbol.for("react.suspense"),hm=Symbol.for("react.memo"),gm=Symbol.for("react.lazy"),Xu=Symbol.iterator;function ym(e){return e===null||typeof e!="object"?null:(e=Xu&&e[Xu]||e["@@iterator"],typeof e=="function"?e:null)}var Uf={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Vf=Object.assign,Hf={};function er(e,t,n){this.props=e,this.context=t,this.refs=Hf,this.updater=n||Uf}er.prototype.isReactComponent={};er.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};er.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Wf(){}Wf.prototype=er.prototype;function Ps(e,t,n){this.props=e,this.context=t,this.refs=Hf,this.updater=n||Uf}var Os=Ps.prototype=new Wf;Os.constructor=Ps;Vf(Os,er.prototype);Os.isPureReactComponent=!0;var Gu=Array.isArray,Bf=Object.prototype.hasOwnProperty,zs={current:null},Yf={key:!0,ref:!0,__self:!0,__source:!0};function Qf(e,t,n){var r,a={},i=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(i=""+t.key),t)Bf.call(t,r)&&!Yf.hasOwnProperty(r)&&(a[r]=t[r]);var l=arguments.length-2;if(l===1)a.children=n;else if(1<l){for(var s=Array(l),u=0;u<l;u++)s[u]=arguments[u+2];a.children=s}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)a[r]===void 0&&(a[r]=l[r]);return{$$typeof:ia,type:e,key:i,ref:o,props:a,_owner:zs.current}}function wm(e,t){return{$$typeof:ia,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Ts(e){return typeof e=="object"&&e!==null&&e.$$typeof===ia}function xm(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Ku=/\/+/g;function To(e,t){return typeof e=="object"&&e!==null&&e.key!=null?xm(""+e.key):t.toString(36)}function Wa(e,t,n,r,a){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case ia:case sm:o=!0}}if(o)return o=e,a=a(o),e=r===""?"."+To(o,0):r,Gu(a)?(n="",e!=null&&(n=e.replace(Ku,"$&/")+"/"),Wa(a,t,n,"",function(u){return u})):a!=null&&(Ts(a)&&(a=wm(a,n+(!a.key||o&&o.key===a.key?"":(""+a.key).replace(Ku,"$&/")+"/")+e)),t.push(a)),1;if(o=0,r=r===""?".":r+":",Gu(e))for(var l=0;l<e.length;l++){i=e[l];var s=r+To(i,l);o+=Wa(i,t,n,s,a)}else if(s=ym(e),typeof s=="function")for(e=s.call(e),l=0;!(i=e.next()).done;)i=i.value,s=r+To(i,l++),o+=Wa(i,t,n,s,a);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function ha(e,t,n){if(e==null)return e;var r=[],a=0;return Wa(e,r,"","",function(i){return t.call(n,i,a++)}),r}function km(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var _e={current:null},Ba={transition:null},Sm={ReactCurrentDispatcher:_e,ReactCurrentBatchConfig:Ba,ReactCurrentOwner:zs};R.Children={map:ha,forEach:function(e,t,n){ha(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ha(e,function(){t++}),t},toArray:function(e){return ha(e,function(t){return t})||[]},only:function(e){if(!Ts(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};R.Component=er;R.Fragment=um;R.Profiler=fm;R.PureComponent=Ps;R.StrictMode=cm;R.Suspense=vm;R.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Sm;R.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Vf({},e.props),a=e.key,i=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,o=zs.current),t.key!==void 0&&(a=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in t)Bf.call(t,s)&&!Yf.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&l!==void 0?l[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){l=Array(s);for(var u=0;u<s;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:ia,type:e.type,key:a,ref:i,props:r,_owner:o}};R.createContext=function(e){return e={$$typeof:mm,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:dm,_context:e},e.Consumer=e};R.createElement=Qf;R.createFactory=function(e){var t=Qf.bind(null,e);return t.type=e,t};R.createRef=function(){return{current:null}};R.forwardRef=function(e){return{$$typeof:pm,render:e}};R.isValidElement=Ts;R.lazy=function(e){return{$$typeof:gm,_payload:{_status:-1,_result:e},_init:km}};R.memo=function(e,t){return{$$typeof:hm,type:e,compare:t===void 0?null:t}};R.startTransition=function(e){var t=Ba.transition;Ba.transition={};try{e()}finally{Ba.transition=t}};R.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};R.useCallback=function(e,t){return _e.current.useCallback(e,t)};R.useContext=function(e){return _e.current.useContext(e)};R.useDebugValue=function(){};R.useDeferredValue=function(e){return _e.current.useDeferredValue(e)};R.useEffect=function(e,t){return _e.current.useEffect(e,t)};R.useId=function(){return _e.current.useId()};R.useImperativeHandle=function(e,t,n){return _e.current.useImperativeHandle(e,t,n)};R.useInsertionEffect=function(e,t){return _e.current.useInsertionEffect(e,t)};R.useLayoutEffect=function(e,t){return _e.current.useLayoutEffect(e,t)};R.useMemo=function(e,t){return _e.current.useMemo(e,t)};R.useReducer=function(e,t,n){return _e.current.useReducer(e,t,n)};R.useRef=function(e){return _e.current.useRef(e)};R.useState=function(e){return _e.current.useState(e)};R.useSyncExternalStore=function(e,t,n){return _e.current.useSyncExternalStore(e,t,n)};R.useTransition=function(){return _e.current.useTransition()};R.version="18.2.0";(function(e){e.exports=R})(lm);const ji=im($),Zu=am({__proto__:null,default:ji},[$]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cm=$,bm=Symbol.for("react.element"),Em=Symbol.for("react.fragment"),Nm=Object.prototype.hasOwnProperty,_m=Cm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Pm={key:!0,ref:!0,__self:!0,__source:!0};function Xf(e,t,n){var r,a={},i=null,o=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)Nm.call(t,r)&&!Pm.hasOwnProperty(r)&&(a[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)a[r]===void 0&&(a[r]=t[r]);return{$$typeof:bm,type:e,key:i,ref:o,props:a,_owner:_m.current}}$i.Fragment=Em;$i.jsx=Xf;$i.jsxs=Xf;(function(e){e.exports=$i})(om);const Gf=Ir.Fragment,C=Ir.jsx,V=Ir.jsxs;var cl={},fl={},Om={get exports(){return fl},set exports(e){fl=e}},De={},dl={},zm={get exports(){return dl},set exports(e){dl=e}},Kf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(O,L){var A=O.length;O.push(L);e:for(;0<A;){var ae=A-1>>>1,fe=O[ae];if(0<a(fe,L))O[ae]=L,O[A]=fe,A=ae;else break e}}function n(O){return O.length===0?null:O[0]}function r(O){if(O.length===0)return null;var L=O[0],A=O.pop();if(A!==L){O[0]=A;e:for(var ae=0,fe=O.length,pa=fe>>>1;ae<pa;){var en=2*(ae+1)-1,zo=O[en],tn=en+1,va=O[tn];if(0>a(zo,A))tn<fe&&0>a(va,zo)?(O[ae]=va,O[tn]=A,ae=tn):(O[ae]=zo,O[en]=A,ae=en);else if(tn<fe&&0>a(va,A))O[ae]=va,O[tn]=A,ae=tn;else break e}}return L}function a(O,L){var A=O.sortIndex-L.sortIndex;return A!==0?A:O.id-L.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var o=Date,l=o.now();e.unstable_now=function(){return o.now()-l}}var s=[],u=[],f=1,m=null,v=3,g=!1,y=!1,h=!1,N=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(O){for(var L=n(u);L!==null;){if(L.callback===null)r(u);else if(L.startTime<=O)r(u),L.sortIndex=L.expirationTime,t(s,L);else break;L=n(u)}}function w(O){if(h=!1,p(O),!y)if(n(s)!==null)y=!0,Po(x);else{var L=n(u);L!==null&&Oo(w,L.startTime-O)}}function x(O,L){y=!1,h&&(h=!1,d(z),z=-1),g=!0;var A=v;try{for(p(L),m=n(s);m!==null&&(!(m.expirationTime>L)||O&&!Ze());){var ae=m.callback;if(typeof ae=="function"){m.callback=null,v=m.priorityLevel;var fe=ae(m.expirationTime<=L);L=e.unstable_now(),typeof fe=="function"?m.callback=fe:m===n(s)&&r(s),p(L)}else r(s);m=n(s)}if(m!==null)var pa=!0;else{var en=n(u);en!==null&&Oo(w,en.startTime-L),pa=!1}return pa}finally{m=null,v=A,g=!1}}var E=!1,S=null,z=-1,D=5,M=-1;function Ze(){return!(e.unstable_now()-M<D)}function or(){if(S!==null){var O=e.unstable_now();M=O;var L=!0;try{L=S(!0,O)}finally{L?lr():(E=!1,S=null)}}else E=!1}var lr;if(typeof c=="function")lr=function(){c(or)};else if(typeof MessageChannel<"u"){var Qu=new MessageChannel,rm=Qu.port2;Qu.port1.onmessage=or,lr=function(){rm.postMessage(null)}}else lr=function(){N(or,0)};function Po(O){S=O,E||(E=!0,lr())}function Oo(O,L){z=N(function(){O(e.unstable_now())},L)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(O){O.callback=null},e.unstable_continueExecution=function(){y||g||(y=!0,Po(x))},e.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<O?Math.floor(1e3/O):5},e.unstable_getCurrentPriorityLevel=function(){return v},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(O){switch(v){case 1:case 2:case 3:var L=3;break;default:L=v}var A=v;v=L;try{return O()}finally{v=A}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(O,L){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var A=v;v=O;try{return L()}finally{v=A}},e.unstable_scheduleCallback=function(O,L,A){var ae=e.unstable_now();switch(typeof A=="object"&&A!==null?(A=A.delay,A=typeof A=="number"&&0<A?ae+A:ae):A=ae,O){case 1:var fe=-1;break;case 2:fe=250;break;case 5:fe=1073741823;break;case 4:fe=1e4;break;default:fe=5e3}return fe=A+fe,O={id:f++,callback:L,priorityLevel:O,startTime:A,expirationTime:fe,sortIndex:-1},A>ae?(O.sortIndex=A,t(u,O),n(s)===null&&O===n(u)&&(h?(d(z),z=-1):h=!0,Oo(w,A-ae))):(O.sortIndex=fe,t(s,O),y||g||(y=!0,Po(x))),O},e.unstable_shouldYield=Ze,e.unstable_wrapCallback=function(O){var L=v;return function(){var A=v;v=L;try{return O.apply(this,arguments)}finally{v=A}}}})(Kf);(function(e){e.exports=Kf})(zm);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zf=$,Fe=dl;function k(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Jf=new Set,Ar={};function wn(e,t){Bn(e,t),Bn(e+"Capture",t)}function Bn(e,t){for(Ar[e]=t,e=0;e<t.length;e++)Jf.add(t[e])}var xt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ml=Object.prototype.hasOwnProperty,Tm=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ju={},qu={};function Lm(e){return ml.call(qu,e)?!0:ml.call(Ju,e)?!1:Tm.test(e)?qu[e]=!0:(Ju[e]=!0,!1)}function Im(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Am(e,t,n,r){if(t===null||typeof t>"u"||Im(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Pe(e,t,n,r,a,i,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=a,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=o}var ye={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ye[e]=new Pe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ye[t]=new Pe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ye[e]=new Pe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ye[e]=new Pe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ye[e]=new Pe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ye[e]=new Pe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ye[e]=new Pe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ye[e]=new Pe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ye[e]=new Pe(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ls=/[\-:]([a-z])/g;function Is(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Ls,Is);ye[t]=new Pe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Ls,Is);ye[t]=new Pe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Ls,Is);ye[t]=new Pe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ye[e]=new Pe(e,1,!1,e.toLowerCase(),null,!1,!1)});ye.xlinkHref=new Pe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ye[e]=new Pe(e,1,!1,e.toLowerCase(),null,!0,!0)});function As(e,t,n,r){var a=ye.hasOwnProperty(t)?ye[t]:null;(a!==null?a.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Am(t,n,a,r)&&(n=null),r||a===null?Lm(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):a.mustUseProperty?e[a.propertyName]=n===null?a.type===3?!1:"":n:(t=a.attributeName,r=a.attributeNamespace,n===null?e.removeAttribute(t):(a=a.type,n=a===3||a===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var _t=Zf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ga=Symbol.for("react.element"),Sn=Symbol.for("react.portal"),Cn=Symbol.for("react.fragment"),Ms=Symbol.for("react.strict_mode"),pl=Symbol.for("react.profiler"),qf=Symbol.for("react.provider"),ed=Symbol.for("react.context"),Rs=Symbol.for("react.forward_ref"),vl=Symbol.for("react.suspense"),hl=Symbol.for("react.suspense_list"),$s=Symbol.for("react.memo"),Tt=Symbol.for("react.lazy"),td=Symbol.for("react.offscreen"),ec=Symbol.iterator;function sr(e){return e===null||typeof e!="object"?null:(e=ec&&e[ec]||e["@@iterator"],typeof e=="function"?e:null)}var ee=Object.assign,Lo;function gr(e){if(Lo===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Lo=t&&t[1]||""}return`
`+Lo+e}var Io=!1;function Ao(e,t){if(!e||Io)return"";Io=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var a=u.stack.split(`
`),i=r.stack.split(`
`),o=a.length-1,l=i.length-1;1<=o&&0<=l&&a[o]!==i[l];)l--;for(;1<=o&&0<=l;o--,l--)if(a[o]!==i[l]){if(o!==1||l!==1)do if(o--,l--,0>l||a[o]!==i[l]){var s=`
`+a[o].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=o&&0<=l);break}}}finally{Io=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?gr(e):""}function Mm(e){switch(e.tag){case 5:return gr(e.type);case 16:return gr("Lazy");case 13:return gr("Suspense");case 19:return gr("SuspenseList");case 0:case 2:case 15:return e=Ao(e.type,!1),e;case 11:return e=Ao(e.type.render,!1),e;case 1:return e=Ao(e.type,!0),e;default:return""}}function gl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Cn:return"Fragment";case Sn:return"Portal";case pl:return"Profiler";case Ms:return"StrictMode";case vl:return"Suspense";case hl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ed:return(e.displayName||"Context")+".Consumer";case qf:return(e._context.displayName||"Context")+".Provider";case Rs:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case $s:return t=e.displayName||null,t!==null?t:gl(e.type)||"Memo";case Tt:t=e._payload,e=e._init;try{return gl(e(t))}catch{}}return null}function Rm(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return gl(t);case 8:return t===Ms?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Yt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function nd(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function $m(e){var t=nd(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var a=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ya(e){e._valueTracker||(e._valueTracker=$m(e))}function rd(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=nd(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function li(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function yl(e,t){var n=t.checked;return ee({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function tc(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Yt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function ad(e,t){t=t.checked,t!=null&&As(e,"checked",t,!1)}function wl(e,t){ad(e,t);var n=Yt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?xl(e,t.type,n):t.hasOwnProperty("defaultValue")&&xl(e,t.type,Yt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function nc(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function xl(e,t,n){(t!=="number"||li(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var yr=Array.isArray;function $n(e,t,n,r){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Yt(n),t=null,a=0;a<e.length;a++){if(e[a].value===n){e[a].selected=!0,r&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function kl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(k(91));return ee({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function rc(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(k(92));if(yr(n)){if(1<n.length)throw Error(k(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Yt(n)}}function id(e,t){var n=Yt(t.value),r=Yt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function ac(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function od(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Sl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?od(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var wa,ld=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,a){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,a)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(wa=wa||document.createElement("div"),wa.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=wa.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Mr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Sr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},jm=["Webkit","ms","Moz","O"];Object.keys(Sr).forEach(function(e){jm.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Sr[t]=Sr[e]})});function sd(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Sr.hasOwnProperty(e)&&Sr[e]?(""+t).trim():t+"px"}function ud(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,a=sd(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,a):e[n]=a}}var Fm=ee({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Cl(e,t){if(t){if(Fm[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(k(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(k(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(k(61))}if(t.style!=null&&typeof t.style!="object")throw Error(k(62))}}function bl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var El=null;function js(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Nl=null,jn=null,Fn=null;function ic(e){if(e=sa(e)){if(typeof Nl!="function")throw Error(k(280));var t=e.stateNode;t&&(t=Hi(t),Nl(e.stateNode,e.type,t))}}function cd(e){jn?Fn?Fn.push(e):Fn=[e]:jn=e}function fd(){if(jn){var e=jn,t=Fn;if(Fn=jn=null,ic(e),t)for(e=0;e<t.length;e++)ic(t[e])}}function dd(e,t){return e(t)}function md(){}var Mo=!1;function pd(e,t,n){if(Mo)return e(t,n);Mo=!0;try{return dd(e,t,n)}finally{Mo=!1,(jn!==null||Fn!==null)&&(md(),fd())}}function Rr(e,t){var n=e.stateNode;if(n===null)return null;var r=Hi(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(k(231,t,typeof n));return n}var _l=!1;if(xt)try{var ur={};Object.defineProperty(ur,"passive",{get:function(){_l=!0}}),window.addEventListener("test",ur,ur),window.removeEventListener("test",ur,ur)}catch{_l=!1}function Dm(e,t,n,r,a,i,o,l,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(f){this.onError(f)}}var Cr=!1,si=null,ui=!1,Pl=null,Um={onError:function(e){Cr=!0,si=e}};function Vm(e,t,n,r,a,i,o,l,s){Cr=!1,si=null,Dm.apply(Um,arguments)}function Hm(e,t,n,r,a,i,o,l,s){if(Vm.apply(this,arguments),Cr){if(Cr){var u=si;Cr=!1,si=null}else throw Error(k(198));ui||(ui=!0,Pl=u)}}function xn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function vd(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function oc(e){if(xn(e)!==e)throw Error(k(188))}function Wm(e){var t=e.alternate;if(!t){if(t=xn(e),t===null)throw Error(k(188));return t!==e?null:e}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var i=a.alternate;if(i===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===i.child){for(i=a.child;i;){if(i===n)return oc(a),e;if(i===r)return oc(a),t;i=i.sibling}throw Error(k(188))}if(n.return!==r.return)n=a,r=i;else{for(var o=!1,l=a.child;l;){if(l===n){o=!0,n=a,r=i;break}if(l===r){o=!0,r=a,n=i;break}l=l.sibling}if(!o){for(l=i.child;l;){if(l===n){o=!0,n=i,r=a;break}if(l===r){o=!0,r=i,n=a;break}l=l.sibling}if(!o)throw Error(k(189))}}if(n.alternate!==r)throw Error(k(190))}if(n.tag!==3)throw Error(k(188));return n.stateNode.current===n?e:t}function hd(e){return e=Wm(e),e!==null?gd(e):null}function gd(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=gd(e);if(t!==null)return t;e=e.sibling}return null}var yd=Fe.unstable_scheduleCallback,lc=Fe.unstable_cancelCallback,Bm=Fe.unstable_shouldYield,Ym=Fe.unstable_requestPaint,ie=Fe.unstable_now,Qm=Fe.unstable_getCurrentPriorityLevel,Fs=Fe.unstable_ImmediatePriority,wd=Fe.unstable_UserBlockingPriority,ci=Fe.unstable_NormalPriority,Xm=Fe.unstable_LowPriority,xd=Fe.unstable_IdlePriority,Fi=null,dt=null;function Gm(e){if(dt&&typeof dt.onCommitFiberRoot=="function")try{dt.onCommitFiberRoot(Fi,e,void 0,(e.current.flags&128)===128)}catch{}}var rt=Math.clz32?Math.clz32:Jm,Km=Math.log,Zm=Math.LN2;function Jm(e){return e>>>=0,e===0?32:31-(Km(e)/Zm|0)|0}var xa=64,ka=4194304;function wr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function fi(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,a=e.suspendedLanes,i=e.pingedLanes,o=n&268435455;if(o!==0){var l=o&~a;l!==0?r=wr(l):(i&=o,i!==0&&(r=wr(i)))}else o=n&~a,o!==0?r=wr(o):i!==0&&(r=wr(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&a)&&(a=r&-r,i=t&-t,a>=i||a===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-rt(t),a=1<<n,r|=e[n],t&=~a;return r}function qm(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ep(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,a=e.expirationTimes,i=e.pendingLanes;0<i;){var o=31-rt(i),l=1<<o,s=a[o];s===-1?(!(l&n)||l&r)&&(a[o]=qm(l,t)):s<=t&&(e.expiredLanes|=l),i&=~l}}function Ol(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function kd(){var e=xa;return xa<<=1,!(xa&4194240)&&(xa=64),e}function Ro(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function oa(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-rt(t),e[t]=n}function tp(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var a=31-rt(n),i=1<<a;t[a]=0,r[a]=-1,e[a]=-1,n&=~i}}function Ds(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-rt(n),a=1<<r;a&t|e[r]&t&&(e[r]|=t),n&=~a}}var H=0;function Sd(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Cd,Us,bd,Ed,Nd,zl=!1,Sa=[],jt=null,Ft=null,Dt=null,$r=new Map,jr=new Map,It=[],np="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function sc(e,t){switch(e){case"focusin":case"focusout":jt=null;break;case"dragenter":case"dragleave":Ft=null;break;case"mouseover":case"mouseout":Dt=null;break;case"pointerover":case"pointerout":$r.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":jr.delete(t.pointerId)}}function cr(e,t,n,r,a,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[a]},t!==null&&(t=sa(t),t!==null&&Us(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function rp(e,t,n,r,a){switch(t){case"focusin":return jt=cr(jt,e,t,n,r,a),!0;case"dragenter":return Ft=cr(Ft,e,t,n,r,a),!0;case"mouseover":return Dt=cr(Dt,e,t,n,r,a),!0;case"pointerover":var i=a.pointerId;return $r.set(i,cr($r.get(i)||null,e,t,n,r,a)),!0;case"gotpointercapture":return i=a.pointerId,jr.set(i,cr(jr.get(i)||null,e,t,n,r,a)),!0}return!1}function _d(e){var t=an(e.target);if(t!==null){var n=xn(t);if(n!==null){if(t=n.tag,t===13){if(t=vd(n),t!==null){e.blockedOn=t,Nd(e.priority,function(){bd(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ya(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Tl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);El=r,n.target.dispatchEvent(r),El=null}else return t=sa(n),t!==null&&Us(t),e.blockedOn=n,!1;t.shift()}return!0}function uc(e,t,n){Ya(e)&&n.delete(t)}function ap(){zl=!1,jt!==null&&Ya(jt)&&(jt=null),Ft!==null&&Ya(Ft)&&(Ft=null),Dt!==null&&Ya(Dt)&&(Dt=null),$r.forEach(uc),jr.forEach(uc)}function fr(e,t){e.blockedOn===t&&(e.blockedOn=null,zl||(zl=!0,Fe.unstable_scheduleCallback(Fe.unstable_NormalPriority,ap)))}function Fr(e){function t(a){return fr(a,e)}if(0<Sa.length){fr(Sa[0],e);for(var n=1;n<Sa.length;n++){var r=Sa[n];r.blockedOn===e&&(r.blockedOn=null)}}for(jt!==null&&fr(jt,e),Ft!==null&&fr(Ft,e),Dt!==null&&fr(Dt,e),$r.forEach(t),jr.forEach(t),n=0;n<It.length;n++)r=It[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<It.length&&(n=It[0],n.blockedOn===null);)_d(n),n.blockedOn===null&&It.shift()}var Dn=_t.ReactCurrentBatchConfig,di=!0;function ip(e,t,n,r){var a=H,i=Dn.transition;Dn.transition=null;try{H=1,Vs(e,t,n,r)}finally{H=a,Dn.transition=i}}function op(e,t,n,r){var a=H,i=Dn.transition;Dn.transition=null;try{H=4,Vs(e,t,n,r)}finally{H=a,Dn.transition=i}}function Vs(e,t,n,r){if(di){var a=Tl(e,t,n,r);if(a===null)Yo(e,t,r,mi,n),sc(e,r);else if(rp(a,e,t,n,r))r.stopPropagation();else if(sc(e,r),t&4&&-1<np.indexOf(e)){for(;a!==null;){var i=sa(a);if(i!==null&&Cd(i),i=Tl(e,t,n,r),i===null&&Yo(e,t,r,mi,n),i===a)break;a=i}a!==null&&r.stopPropagation()}else Yo(e,t,r,null,n)}}var mi=null;function Tl(e,t,n,r){if(mi=null,e=js(r),e=an(e),e!==null)if(t=xn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=vd(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return mi=e,null}function Pd(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Qm()){case Fs:return 1;case wd:return 4;case ci:case Xm:return 16;case xd:return 536870912;default:return 16}default:return 16}}var Mt=null,Hs=null,Qa=null;function Od(){if(Qa)return Qa;var e,t=Hs,n=t.length,r,a="value"in Mt?Mt.value:Mt.textContent,i=a.length;for(e=0;e<n&&t[e]===a[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===a[i-r];r++);return Qa=a.slice(e,1<r?1-r:void 0)}function Xa(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ca(){return!0}function cc(){return!1}function Ue(e){function t(n,r,a,i,o){this._reactName=n,this._targetInst=a,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(i):i[l]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Ca:cc,this.isPropagationStopped=cc,this}return ee(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ca)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ca)},persist:function(){},isPersistent:Ca}),t}var tr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ws=Ue(tr),la=ee({},tr,{view:0,detail:0}),lp=Ue(la),$o,jo,dr,Di=ee({},la,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Bs,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==dr&&(dr&&e.type==="mousemove"?($o=e.screenX-dr.screenX,jo=e.screenY-dr.screenY):jo=$o=0,dr=e),$o)},movementY:function(e){return"movementY"in e?e.movementY:jo}}),fc=Ue(Di),sp=ee({},Di,{dataTransfer:0}),up=Ue(sp),cp=ee({},la,{relatedTarget:0}),Fo=Ue(cp),fp=ee({},tr,{animationName:0,elapsedTime:0,pseudoElement:0}),dp=Ue(fp),mp=ee({},tr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),pp=Ue(mp),vp=ee({},tr,{data:0}),dc=Ue(vp),hp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},gp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},yp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function wp(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=yp[e])?!!t[e]:!1}function Bs(){return wp}var xp=ee({},la,{key:function(e){if(e.key){var t=hp[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Xa(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?gp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Bs,charCode:function(e){return e.type==="keypress"?Xa(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Xa(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),kp=Ue(xp),Sp=ee({},Di,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),mc=Ue(Sp),Cp=ee({},la,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Bs}),bp=Ue(Cp),Ep=ee({},tr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Np=Ue(Ep),_p=ee({},Di,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Pp=Ue(_p),Op=[9,13,27,32],Ys=xt&&"CompositionEvent"in window,br=null;xt&&"documentMode"in document&&(br=document.documentMode);var zp=xt&&"TextEvent"in window&&!br,zd=xt&&(!Ys||br&&8<br&&11>=br),pc=String.fromCharCode(32),vc=!1;function Td(e,t){switch(e){case"keyup":return Op.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ld(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var bn=!1;function Tp(e,t){switch(e){case"compositionend":return Ld(t);case"keypress":return t.which!==32?null:(vc=!0,pc);case"textInput":return e=t.data,e===pc&&vc?null:e;default:return null}}function Lp(e,t){if(bn)return e==="compositionend"||!Ys&&Td(e,t)?(e=Od(),Qa=Hs=Mt=null,bn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return zd&&t.locale!=="ko"?null:t.data;default:return null}}var Ip={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function hc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Ip[e.type]:t==="textarea"}function Id(e,t,n,r){cd(r),t=pi(t,"onChange"),0<t.length&&(n=new Ws("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Er=null,Dr=null;function Ap(e){Wd(e,0)}function Ui(e){var t=_n(e);if(rd(t))return e}function Mp(e,t){if(e==="change")return t}var Ad=!1;if(xt){var Do;if(xt){var Uo="oninput"in document;if(!Uo){var gc=document.createElement("div");gc.setAttribute("oninput","return;"),Uo=typeof gc.oninput=="function"}Do=Uo}else Do=!1;Ad=Do&&(!document.documentMode||9<document.documentMode)}function yc(){Er&&(Er.detachEvent("onpropertychange",Md),Dr=Er=null)}function Md(e){if(e.propertyName==="value"&&Ui(Dr)){var t=[];Id(t,Dr,e,js(e)),pd(Ap,t)}}function Rp(e,t,n){e==="focusin"?(yc(),Er=t,Dr=n,Er.attachEvent("onpropertychange",Md)):e==="focusout"&&yc()}function $p(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ui(Dr)}function jp(e,t){if(e==="click")return Ui(t)}function Fp(e,t){if(e==="input"||e==="change")return Ui(t)}function Dp(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var it=typeof Object.is=="function"?Object.is:Dp;function Ur(e,t){if(it(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var a=n[r];if(!ml.call(t,a)||!it(e[a],t[a]))return!1}return!0}function wc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function xc(e,t){var n=wc(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=wc(n)}}function Rd(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Rd(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function $d(){for(var e=window,t=li();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=li(e.document)}return t}function Qs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Up(e){var t=$d(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Rd(n.ownerDocument.documentElement,n)){if(r!==null&&Qs(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var a=n.textContent.length,i=Math.min(r.start,a);r=r.end===void 0?i:Math.min(r.end,a),!e.extend&&i>r&&(a=r,r=i,i=a),a=xc(n,i);var o=xc(n,r);a&&o&&(e.rangeCount!==1||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(a.node,a.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Vp=xt&&"documentMode"in document&&11>=document.documentMode,En=null,Ll=null,Nr=null,Il=!1;function kc(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Il||En==null||En!==li(r)||(r=En,"selectionStart"in r&&Qs(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Nr&&Ur(Nr,r)||(Nr=r,r=pi(Ll,"onSelect"),0<r.length&&(t=new Ws("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=En)))}function ba(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Nn={animationend:ba("Animation","AnimationEnd"),animationiteration:ba("Animation","AnimationIteration"),animationstart:ba("Animation","AnimationStart"),transitionend:ba("Transition","TransitionEnd")},Vo={},jd={};xt&&(jd=document.createElement("div").style,"AnimationEvent"in window||(delete Nn.animationend.animation,delete Nn.animationiteration.animation,delete Nn.animationstart.animation),"TransitionEvent"in window||delete Nn.transitionend.transition);function Vi(e){if(Vo[e])return Vo[e];if(!Nn[e])return e;var t=Nn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in jd)return Vo[e]=t[n];return e}var Fd=Vi("animationend"),Dd=Vi("animationiteration"),Ud=Vi("animationstart"),Vd=Vi("transitionend"),Hd=new Map,Sc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Zt(e,t){Hd.set(e,t),wn(t,[e])}for(var Ho=0;Ho<Sc.length;Ho++){var Wo=Sc[Ho],Hp=Wo.toLowerCase(),Wp=Wo[0].toUpperCase()+Wo.slice(1);Zt(Hp,"on"+Wp)}Zt(Fd,"onAnimationEnd");Zt(Dd,"onAnimationIteration");Zt(Ud,"onAnimationStart");Zt("dblclick","onDoubleClick");Zt("focusin","onFocus");Zt("focusout","onBlur");Zt(Vd,"onTransitionEnd");Bn("onMouseEnter",["mouseout","mouseover"]);Bn("onMouseLeave",["mouseout","mouseover"]);Bn("onPointerEnter",["pointerout","pointerover"]);Bn("onPointerLeave",["pointerout","pointerover"]);wn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));wn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));wn("onBeforeInput",["compositionend","keypress","textInput","paste"]);wn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));wn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));wn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var xr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Bp=new Set("cancel close invalid load scroll toggle".split(" ").concat(xr));function Cc(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Hm(r,t,void 0,e),e.currentTarget=null}function Wd(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],a=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var o=r.length-1;0<=o;o--){var l=r[o],s=l.instance,u=l.currentTarget;if(l=l.listener,s!==i&&a.isPropagationStopped())break e;Cc(a,l,u),i=s}else for(o=0;o<r.length;o++){if(l=r[o],s=l.instance,u=l.currentTarget,l=l.listener,s!==i&&a.isPropagationStopped())break e;Cc(a,l,u),i=s}}}if(ui)throw e=Pl,ui=!1,Pl=null,e}function Q(e,t){var n=t[jl];n===void 0&&(n=t[jl]=new Set);var r=e+"__bubble";n.has(r)||(Bd(t,e,2,!1),n.add(r))}function Bo(e,t,n){var r=0;t&&(r|=4),Bd(n,e,r,t)}var Ea="_reactListening"+Math.random().toString(36).slice(2);function Vr(e){if(!e[Ea]){e[Ea]=!0,Jf.forEach(function(n){n!=="selectionchange"&&(Bp.has(n)||Bo(n,!1,e),Bo(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ea]||(t[Ea]=!0,Bo("selectionchange",!1,t))}}function Bd(e,t,n,r){switch(Pd(t)){case 1:var a=ip;break;case 4:a=op;break;default:a=Vs}n=a.bind(null,t,n,e),a=void 0,!_l||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),r?a!==void 0?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):a!==void 0?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function Yo(e,t,n,r,a){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===a||l.nodeType===8&&l.parentNode===a)break;if(o===4)for(o=r.return;o!==null;){var s=o.tag;if((s===3||s===4)&&(s=o.stateNode.containerInfo,s===a||s.nodeType===8&&s.parentNode===a))return;o=o.return}for(;l!==null;){if(o=an(l),o===null)return;if(s=o.tag,s===5||s===6){r=i=o;continue e}l=l.parentNode}}r=r.return}pd(function(){var u=i,f=js(n),m=[];e:{var v=Hd.get(e);if(v!==void 0){var g=Ws,y=e;switch(e){case"keypress":if(Xa(n)===0)break e;case"keydown":case"keyup":g=kp;break;case"focusin":y="focus",g=Fo;break;case"focusout":y="blur",g=Fo;break;case"beforeblur":case"afterblur":g=Fo;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=fc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=up;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=bp;break;case Fd:case Dd:case Ud:g=dp;break;case Vd:g=Np;break;case"scroll":g=lp;break;case"wheel":g=Pp;break;case"copy":case"cut":case"paste":g=pp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=mc}var h=(t&4)!==0,N=!h&&e==="scroll",d=h?v!==null?v+"Capture":null:v;h=[];for(var c=u,p;c!==null;){p=c;var w=p.stateNode;if(p.tag===5&&w!==null&&(p=w,d!==null&&(w=Rr(c,d),w!=null&&h.push(Hr(c,w,p)))),N)break;c=c.return}0<h.length&&(v=new g(v,y,null,n,f),m.push({event:v,listeners:h}))}}if(!(t&7)){e:{if(v=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",v&&n!==El&&(y=n.relatedTarget||n.fromElement)&&(an(y)||y[kt]))break e;if((g||v)&&(v=f.window===f?f:(v=f.ownerDocument)?v.defaultView||v.parentWindow:window,g?(y=n.relatedTarget||n.toElement,g=u,y=y?an(y):null,y!==null&&(N=xn(y),y!==N||y.tag!==5&&y.tag!==6)&&(y=null)):(g=null,y=u),g!==y)){if(h=fc,w="onMouseLeave",d="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(h=mc,w="onPointerLeave",d="onPointerEnter",c="pointer"),N=g==null?v:_n(g),p=y==null?v:_n(y),v=new h(w,c+"leave",g,n,f),v.target=N,v.relatedTarget=p,w=null,an(f)===u&&(h=new h(d,c+"enter",y,n,f),h.target=p,h.relatedTarget=N,w=h),N=w,g&&y)t:{for(h=g,d=y,c=0,p=h;p;p=kn(p))c++;for(p=0,w=d;w;w=kn(w))p++;for(;0<c-p;)h=kn(h),c--;for(;0<p-c;)d=kn(d),p--;for(;c--;){if(h===d||d!==null&&h===d.alternate)break t;h=kn(h),d=kn(d)}h=null}else h=null;g!==null&&bc(m,v,g,h,!1),y!==null&&N!==null&&bc(m,N,y,h,!0)}}e:{if(v=u?_n(u):window,g=v.nodeName&&v.nodeName.toLowerCase(),g==="select"||g==="input"&&v.type==="file")var x=Mp;else if(hc(v))if(Ad)x=Fp;else{x=$p;var E=Rp}else(g=v.nodeName)&&g.toLowerCase()==="input"&&(v.type==="checkbox"||v.type==="radio")&&(x=jp);if(x&&(x=x(e,u))){Id(m,x,n,f);break e}E&&E(e,v,u),e==="focusout"&&(E=v._wrapperState)&&E.controlled&&v.type==="number"&&xl(v,"number",v.value)}switch(E=u?_n(u):window,e){case"focusin":(hc(E)||E.contentEditable==="true")&&(En=E,Ll=u,Nr=null);break;case"focusout":Nr=Ll=En=null;break;case"mousedown":Il=!0;break;case"contextmenu":case"mouseup":case"dragend":Il=!1,kc(m,n,f);break;case"selectionchange":if(Vp)break;case"keydown":case"keyup":kc(m,n,f)}var S;if(Ys)e:{switch(e){case"compositionstart":var z="onCompositionStart";break e;case"compositionend":z="onCompositionEnd";break e;case"compositionupdate":z="onCompositionUpdate";break e}z=void 0}else bn?Td(e,n)&&(z="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(z="onCompositionStart");z&&(zd&&n.locale!=="ko"&&(bn||z!=="onCompositionStart"?z==="onCompositionEnd"&&bn&&(S=Od()):(Mt=f,Hs="value"in Mt?Mt.value:Mt.textContent,bn=!0)),E=pi(u,z),0<E.length&&(z=new dc(z,e,null,n,f),m.push({event:z,listeners:E}),S?z.data=S:(S=Ld(n),S!==null&&(z.data=S)))),(S=zp?Tp(e,n):Lp(e,n))&&(u=pi(u,"onBeforeInput"),0<u.length&&(f=new dc("onBeforeInput","beforeinput",null,n,f),m.push({event:f,listeners:u}),f.data=S))}Wd(m,t)})}function Hr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function pi(e,t){for(var n=t+"Capture",r=[];e!==null;){var a=e,i=a.stateNode;a.tag===5&&i!==null&&(a=i,i=Rr(e,n),i!=null&&r.unshift(Hr(e,i,a)),i=Rr(e,t),i!=null&&r.push(Hr(e,i,a))),e=e.return}return r}function kn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function bc(e,t,n,r,a){for(var i=t._reactName,o=[];n!==null&&n!==r;){var l=n,s=l.alternate,u=l.stateNode;if(s!==null&&s===r)break;l.tag===5&&u!==null&&(l=u,a?(s=Rr(n,i),s!=null&&o.unshift(Hr(n,s,l))):a||(s=Rr(n,i),s!=null&&o.push(Hr(n,s,l)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Yp=/\r\n?/g,Qp=/\u0000|\uFFFD/g;function Ec(e){return(typeof e=="string"?e:""+e).replace(Yp,`
`).replace(Qp,"")}function Na(e,t,n){if(t=Ec(t),Ec(e)!==t&&n)throw Error(k(425))}function vi(){}var Al=null,Ml=null;function Rl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var $l=typeof setTimeout=="function"?setTimeout:void 0,Xp=typeof clearTimeout=="function"?clearTimeout:void 0,Nc=typeof Promise=="function"?Promise:void 0,Gp=typeof queueMicrotask=="function"?queueMicrotask:typeof Nc<"u"?function(e){return Nc.resolve(null).then(e).catch(Kp)}:$l;function Kp(e){setTimeout(function(){throw e})}function Qo(e,t){var n=t,r=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&a.nodeType===8)if(n=a.data,n==="/$"){if(r===0){e.removeChild(a),Fr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=a}while(n);Fr(t)}function Ut(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function _c(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var nr=Math.random().toString(36).slice(2),ct="__reactFiber$"+nr,Wr="__reactProps$"+nr,kt="__reactContainer$"+nr,jl="__reactEvents$"+nr,Zp="__reactListeners$"+nr,Jp="__reactHandles$"+nr;function an(e){var t=e[ct];if(t)return t;for(var n=e.parentNode;n;){if(t=n[kt]||n[ct]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=_c(e);e!==null;){if(n=e[ct])return n;e=_c(e)}return t}e=n,n=e.parentNode}return null}function sa(e){return e=e[ct]||e[kt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function _n(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(k(33))}function Hi(e){return e[Wr]||null}var Fl=[],Pn=-1;function Jt(e){return{current:e}}function G(e){0>Pn||(e.current=Fl[Pn],Fl[Pn]=null,Pn--)}function Y(e,t){Pn++,Fl[Pn]=e.current,e.current=t}var Qt={},Ce=Jt(Qt),Te=Jt(!1),dn=Qt;function Yn(e,t){var n=e.type.contextTypes;if(!n)return Qt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var a={},i;for(i in n)a[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=a),a}function Le(e){return e=e.childContextTypes,e!=null}function hi(){G(Te),G(Ce)}function Pc(e,t,n){if(Ce.current!==Qt)throw Error(k(168));Y(Ce,t),Y(Te,n)}function Yd(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var a in r)if(!(a in t))throw Error(k(108,Rm(e)||"Unknown",a));return ee({},n,r)}function gi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Qt,dn=Ce.current,Y(Ce,e),Y(Te,Te.current),!0}function Oc(e,t,n){var r=e.stateNode;if(!r)throw Error(k(169));n?(e=Yd(e,t,dn),r.__reactInternalMemoizedMergedChildContext=e,G(Te),G(Ce),Y(Ce,e)):G(Te),Y(Te,n)}var ht=null,Wi=!1,Xo=!1;function Qd(e){ht===null?ht=[e]:ht.push(e)}function qp(e){Wi=!0,Qd(e)}function qt(){if(!Xo&&ht!==null){Xo=!0;var e=0,t=H;try{var n=ht;for(H=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}ht=null,Wi=!1}catch(a){throw ht!==null&&(ht=ht.slice(e+1)),yd(Fs,qt),a}finally{H=t,Xo=!1}}return null}var On=[],zn=0,yi=null,wi=0,We=[],Be=0,mn=null,gt=1,yt="";function nn(e,t){On[zn++]=wi,On[zn++]=yi,yi=e,wi=t}function Xd(e,t,n){We[Be++]=gt,We[Be++]=yt,We[Be++]=mn,mn=e;var r=gt;e=yt;var a=32-rt(r)-1;r&=~(1<<a),n+=1;var i=32-rt(t)+a;if(30<i){var o=a-a%5;i=(r&(1<<o)-1).toString(32),r>>=o,a-=o,gt=1<<32-rt(t)+a|n<<a|r,yt=i+e}else gt=1<<i|n<<a|r,yt=e}function Xs(e){e.return!==null&&(nn(e,1),Xd(e,1,0))}function Gs(e){for(;e===yi;)yi=On[--zn],On[zn]=null,wi=On[--zn],On[zn]=null;for(;e===mn;)mn=We[--Be],We[Be]=null,yt=We[--Be],We[Be]=null,gt=We[--Be],We[Be]=null}var $e=null,Re=null,Z=!1,tt=null;function Gd(e,t){var n=Ye(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function zc(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,$e=e,Re=Ut(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,$e=e,Re=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=mn!==null?{id:gt,overflow:yt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ye(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,$e=e,Re=null,!0):!1;default:return!1}}function Dl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ul(e){if(Z){var t=Re;if(t){var n=t;if(!zc(e,t)){if(Dl(e))throw Error(k(418));t=Ut(n.nextSibling);var r=$e;t&&zc(e,t)?Gd(r,n):(e.flags=e.flags&-4097|2,Z=!1,$e=e)}}else{if(Dl(e))throw Error(k(418));e.flags=e.flags&-4097|2,Z=!1,$e=e}}}function Tc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;$e=e}function _a(e){if(e!==$e)return!1;if(!Z)return Tc(e),Z=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Rl(e.type,e.memoizedProps)),t&&(t=Re)){if(Dl(e))throw Kd(),Error(k(418));for(;t;)Gd(e,t),t=Ut(t.nextSibling)}if(Tc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(k(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Re=Ut(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Re=null}}else Re=$e?Ut(e.stateNode.nextSibling):null;return!0}function Kd(){for(var e=Re;e;)e=Ut(e.nextSibling)}function Qn(){Re=$e=null,Z=!1}function Ks(e){tt===null?tt=[e]:tt.push(e)}var ev=_t.ReactCurrentBatchConfig;function qe(e,t){if(e&&e.defaultProps){t=ee({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var xi=Jt(null),ki=null,Tn=null,Zs=null;function Js(){Zs=Tn=ki=null}function qs(e){var t=xi.current;G(xi),e._currentValue=t}function Vl(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Un(e,t){ki=e,Zs=Tn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(ze=!0),e.firstContext=null)}function Xe(e){var t=e._currentValue;if(Zs!==e)if(e={context:e,memoizedValue:t,next:null},Tn===null){if(ki===null)throw Error(k(308));Tn=e,ki.dependencies={lanes:0,firstContext:e}}else Tn=Tn.next=e;return t}var on=null;function eu(e){on===null?on=[e]:on.push(e)}function Zd(e,t,n,r){var a=t.interleaved;return a===null?(n.next=n,eu(t)):(n.next=a.next,a.next=n),t.interleaved=n,St(e,r)}function St(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Lt=!1;function tu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Jd(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function wt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Vt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,j&2){var a=r.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),r.pending=t,St(e,n)}return a=r.interleaved,a===null?(t.next=t,eu(r)):(t.next=a.next,a.next=t),r.interleaved=t,St(e,n)}function Ga(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ds(e,n)}}function Lc(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var a=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?a=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?a=i=t:i=i.next=t}else a=i=t;n={baseState:r.baseState,firstBaseUpdate:a,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Si(e,t,n,r){var a=e.updateQueue;Lt=!1;var i=a.firstBaseUpdate,o=a.lastBaseUpdate,l=a.shared.pending;if(l!==null){a.shared.pending=null;var s=l,u=s.next;s.next=null,o===null?i=u:o.next=u,o=s;var f=e.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==o&&(l===null?f.firstBaseUpdate=u:l.next=u,f.lastBaseUpdate=s))}if(i!==null){var m=a.baseState;o=0,f=u=s=null,l=i;do{var v=l.lane,g=l.eventTime;if((r&v)===v){f!==null&&(f=f.next={eventTime:g,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var y=e,h=l;switch(v=t,g=n,h.tag){case 1:if(y=h.payload,typeof y=="function"){m=y.call(g,m,v);break e}m=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=h.payload,v=typeof y=="function"?y.call(g,m,v):y,v==null)break e;m=ee({},m,v);break e;case 2:Lt=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,v=a.effects,v===null?a.effects=[l]:v.push(l))}else g={eventTime:g,lane:v,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(u=f=g,s=m):f=f.next=g,o|=v;if(l=l.next,l===null){if(l=a.shared.pending,l===null)break;v=l,l=v.next,v.next=null,a.lastBaseUpdate=v,a.shared.pending=null}}while(1);if(f===null&&(s=m),a.baseState=s,a.firstBaseUpdate=u,a.lastBaseUpdate=f,t=a.shared.interleaved,t!==null){a=t;do o|=a.lane,a=a.next;while(a!==t)}else i===null&&(a.shared.lanes=0);vn|=o,e.lanes=o,e.memoizedState=m}}function Ic(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],a=r.callback;if(a!==null){if(r.callback=null,r=n,typeof a!="function")throw Error(k(191,a));a.call(r)}}}var qd=new Zf.Component().refs;function Hl(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ee({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Bi={isMounted:function(e){return(e=e._reactInternals)?xn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ee(),a=Wt(e),i=wt(r,a);i.payload=t,n!=null&&(i.callback=n),t=Vt(e,i,a),t!==null&&(at(t,e,a,r),Ga(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ee(),a=Wt(e),i=wt(r,a);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Vt(e,i,a),t!==null&&(at(t,e,a,r),Ga(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ee(),r=Wt(e),a=wt(n,r);a.tag=2,t!=null&&(a.callback=t),t=Vt(e,a,r),t!==null&&(at(t,e,r,n),Ga(t,e,r))}};function Ac(e,t,n,r,a,i,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,o):t.prototype&&t.prototype.isPureReactComponent?!Ur(n,r)||!Ur(a,i):!0}function e1(e,t,n){var r=!1,a=Qt,i=t.contextType;return typeof i=="object"&&i!==null?i=Xe(i):(a=Le(t)?dn:Ce.current,r=t.contextTypes,i=(r=r!=null)?Yn(e,a):Qt),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Bi,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=i),t}function Mc(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Bi.enqueueReplaceState(t,t.state,null)}function Wl(e,t,n,r){var a=e.stateNode;a.props=n,a.state=e.memoizedState,a.refs=qd,tu(e);var i=t.contextType;typeof i=="object"&&i!==null?a.context=Xe(i):(i=Le(t)?dn:Ce.current,a.context=Yn(e,i)),a.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Hl(e,t,i,n),a.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(t=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),t!==a.state&&Bi.enqueueReplaceState(a,a.state,null),Si(e,n,a,r),a.state=e.memoizedState),typeof a.componentDidMount=="function"&&(e.flags|=4194308)}function mr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(k(309));var r=n.stateNode}if(!r)throw Error(k(147,e));var a=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(o){var l=a.refs;l===qd&&(l=a.refs={}),o===null?delete l[i]:l[i]=o},t._stringRef=i,t)}if(typeof e!="string")throw Error(k(284));if(!n._owner)throw Error(k(290,e))}return e}function Pa(e,t){throw e=Object.prototype.toString.call(t),Error(k(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Rc(e){var t=e._init;return t(e._payload)}function t1(e){function t(d,c){if(e){var p=d.deletions;p===null?(d.deletions=[c],d.flags|=16):p.push(c)}}function n(d,c){if(!e)return null;for(;c!==null;)t(d,c),c=c.sibling;return null}function r(d,c){for(d=new Map;c!==null;)c.key!==null?d.set(c.key,c):d.set(c.index,c),c=c.sibling;return d}function a(d,c){return d=Bt(d,c),d.index=0,d.sibling=null,d}function i(d,c,p){return d.index=p,e?(p=d.alternate,p!==null?(p=p.index,p<c?(d.flags|=2,c):p):(d.flags|=2,c)):(d.flags|=1048576,c)}function o(d){return e&&d.alternate===null&&(d.flags|=2),d}function l(d,c,p,w){return c===null||c.tag!==6?(c=tl(p,d.mode,w),c.return=d,c):(c=a(c,p),c.return=d,c)}function s(d,c,p,w){var x=p.type;return x===Cn?f(d,c,p.props.children,w,p.key):c!==null&&(c.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===Tt&&Rc(x)===c.type)?(w=a(c,p.props),w.ref=mr(d,c,p),w.return=d,w):(w=ti(p.type,p.key,p.props,null,d.mode,w),w.ref=mr(d,c,p),w.return=d,w)}function u(d,c,p,w){return c===null||c.tag!==4||c.stateNode.containerInfo!==p.containerInfo||c.stateNode.implementation!==p.implementation?(c=nl(p,d.mode,w),c.return=d,c):(c=a(c,p.children||[]),c.return=d,c)}function f(d,c,p,w,x){return c===null||c.tag!==7?(c=fn(p,d.mode,w,x),c.return=d,c):(c=a(c,p),c.return=d,c)}function m(d,c,p){if(typeof c=="string"&&c!==""||typeof c=="number")return c=tl(""+c,d.mode,p),c.return=d,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case ga:return p=ti(c.type,c.key,c.props,null,d.mode,p),p.ref=mr(d,null,c),p.return=d,p;case Sn:return c=nl(c,d.mode,p),c.return=d,c;case Tt:var w=c._init;return m(d,w(c._payload),p)}if(yr(c)||sr(c))return c=fn(c,d.mode,p,null),c.return=d,c;Pa(d,c)}return null}function v(d,c,p,w){var x=c!==null?c.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return x!==null?null:l(d,c,""+p,w);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case ga:return p.key===x?s(d,c,p,w):null;case Sn:return p.key===x?u(d,c,p,w):null;case Tt:return x=p._init,v(d,c,x(p._payload),w)}if(yr(p)||sr(p))return x!==null?null:f(d,c,p,w,null);Pa(d,p)}return null}function g(d,c,p,w,x){if(typeof w=="string"&&w!==""||typeof w=="number")return d=d.get(p)||null,l(c,d,""+w,x);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case ga:return d=d.get(w.key===null?p:w.key)||null,s(c,d,w,x);case Sn:return d=d.get(w.key===null?p:w.key)||null,u(c,d,w,x);case Tt:var E=w._init;return g(d,c,p,E(w._payload),x)}if(yr(w)||sr(w))return d=d.get(p)||null,f(c,d,w,x,null);Pa(c,w)}return null}function y(d,c,p,w){for(var x=null,E=null,S=c,z=c=0,D=null;S!==null&&z<p.length;z++){S.index>z?(D=S,S=null):D=S.sibling;var M=v(d,S,p[z],w);if(M===null){S===null&&(S=D);break}e&&S&&M.alternate===null&&t(d,S),c=i(M,c,z),E===null?x=M:E.sibling=M,E=M,S=D}if(z===p.length)return n(d,S),Z&&nn(d,z),x;if(S===null){for(;z<p.length;z++)S=m(d,p[z],w),S!==null&&(c=i(S,c,z),E===null?x=S:E.sibling=S,E=S);return Z&&nn(d,z),x}for(S=r(d,S);z<p.length;z++)D=g(S,d,z,p[z],w),D!==null&&(e&&D.alternate!==null&&S.delete(D.key===null?z:D.key),c=i(D,c,z),E===null?x=D:E.sibling=D,E=D);return e&&S.forEach(function(Ze){return t(d,Ze)}),Z&&nn(d,z),x}function h(d,c,p,w){var x=sr(p);if(typeof x!="function")throw Error(k(150));if(p=x.call(p),p==null)throw Error(k(151));for(var E=x=null,S=c,z=c=0,D=null,M=p.next();S!==null&&!M.done;z++,M=p.next()){S.index>z?(D=S,S=null):D=S.sibling;var Ze=v(d,S,M.value,w);if(Ze===null){S===null&&(S=D);break}e&&S&&Ze.alternate===null&&t(d,S),c=i(Ze,c,z),E===null?x=Ze:E.sibling=Ze,E=Ze,S=D}if(M.done)return n(d,S),Z&&nn(d,z),x;if(S===null){for(;!M.done;z++,M=p.next())M=m(d,M.value,w),M!==null&&(c=i(M,c,z),E===null?x=M:E.sibling=M,E=M);return Z&&nn(d,z),x}for(S=r(d,S);!M.done;z++,M=p.next())M=g(S,d,z,M.value,w),M!==null&&(e&&M.alternate!==null&&S.delete(M.key===null?z:M.key),c=i(M,c,z),E===null?x=M:E.sibling=M,E=M);return e&&S.forEach(function(or){return t(d,or)}),Z&&nn(d,z),x}function N(d,c,p,w){if(typeof p=="object"&&p!==null&&p.type===Cn&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case ga:e:{for(var x=p.key,E=c;E!==null;){if(E.key===x){if(x=p.type,x===Cn){if(E.tag===7){n(d,E.sibling),c=a(E,p.props.children),c.return=d,d=c;break e}}else if(E.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===Tt&&Rc(x)===E.type){n(d,E.sibling),c=a(E,p.props),c.ref=mr(d,E,p),c.return=d,d=c;break e}n(d,E);break}else t(d,E);E=E.sibling}p.type===Cn?(c=fn(p.props.children,d.mode,w,p.key),c.return=d,d=c):(w=ti(p.type,p.key,p.props,null,d.mode,w),w.ref=mr(d,c,p),w.return=d,d=w)}return o(d);case Sn:e:{for(E=p.key;c!==null;){if(c.key===E)if(c.tag===4&&c.stateNode.containerInfo===p.containerInfo&&c.stateNode.implementation===p.implementation){n(d,c.sibling),c=a(c,p.children||[]),c.return=d,d=c;break e}else{n(d,c);break}else t(d,c);c=c.sibling}c=nl(p,d.mode,w),c.return=d,d=c}return o(d);case Tt:return E=p._init,N(d,c,E(p._payload),w)}if(yr(p))return y(d,c,p,w);if(sr(p))return h(d,c,p,w);Pa(d,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,c!==null&&c.tag===6?(n(d,c.sibling),c=a(c,p),c.return=d,d=c):(n(d,c),c=tl(p,d.mode,w),c.return=d,d=c),o(d)):n(d,c)}return N}var Xn=t1(!0),n1=t1(!1),ua={},mt=Jt(ua),Br=Jt(ua),Yr=Jt(ua);function ln(e){if(e===ua)throw Error(k(174));return e}function nu(e,t){switch(Y(Yr,t),Y(Br,e),Y(mt,ua),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Sl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Sl(t,e)}G(mt),Y(mt,t)}function Gn(){G(mt),G(Br),G(Yr)}function r1(e){ln(Yr.current);var t=ln(mt.current),n=Sl(t,e.type);t!==n&&(Y(Br,e),Y(mt,n))}function ru(e){Br.current===e&&(G(mt),G(Br))}var J=Jt(0);function Ci(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Go=[];function au(){for(var e=0;e<Go.length;e++)Go[e]._workInProgressVersionPrimary=null;Go.length=0}var Ka=_t.ReactCurrentDispatcher,Ko=_t.ReactCurrentBatchConfig,pn=0,q=null,se=null,de=null,bi=!1,_r=!1,Qr=0,tv=0;function we(){throw Error(k(321))}function iu(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!it(e[n],t[n]))return!1;return!0}function ou(e,t,n,r,a,i){if(pn=i,q=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ka.current=e===null||e.memoizedState===null?iv:ov,e=n(r,a),_r){i=0;do{if(_r=!1,Qr=0,25<=i)throw Error(k(301));i+=1,de=se=null,t.updateQueue=null,Ka.current=lv,e=n(r,a)}while(_r)}if(Ka.current=Ei,t=se!==null&&se.next!==null,pn=0,de=se=q=null,bi=!1,t)throw Error(k(300));return e}function lu(){var e=Qr!==0;return Qr=0,e}function lt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return de===null?q.memoizedState=de=e:de=de.next=e,de}function Ge(){if(se===null){var e=q.alternate;e=e!==null?e.memoizedState:null}else e=se.next;var t=de===null?q.memoizedState:de.next;if(t!==null)de=t,se=e;else{if(e===null)throw Error(k(310));se=e,e={memoizedState:se.memoizedState,baseState:se.baseState,baseQueue:se.baseQueue,queue:se.queue,next:null},de===null?q.memoizedState=de=e:de=de.next=e}return de}function Xr(e,t){return typeof t=="function"?t(e):t}function Zo(e){var t=Ge(),n=t.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=e;var r=se,a=r.baseQueue,i=n.pending;if(i!==null){if(a!==null){var o=a.next;a.next=i.next,i.next=o}r.baseQueue=a=i,n.pending=null}if(a!==null){i=a.next,r=r.baseState;var l=o=null,s=null,u=i;do{var f=u.lane;if((pn&f)===f)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var m={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(l=s=m,o=r):s=s.next=m,q.lanes|=f,vn|=f}u=u.next}while(u!==null&&u!==i);s===null?o=r:s.next=l,it(r,t.memoizedState)||(ze=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){a=e;do i=a.lane,q.lanes|=i,vn|=i,a=a.next;while(a!==e)}else a===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Jo(e){var t=Ge(),n=t.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,i=t.memoizedState;if(a!==null){n.pending=null;var o=a=a.next;do i=e(i,o.action),o=o.next;while(o!==a);it(i,t.memoizedState)||(ze=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function a1(){}function i1(e,t){var n=q,r=Ge(),a=t(),i=!it(r.memoizedState,a);if(i&&(r.memoizedState=a,ze=!0),r=r.queue,su(s1.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||de!==null&&de.memoizedState.tag&1){if(n.flags|=2048,Gr(9,l1.bind(null,n,r,a,t),void 0,null),me===null)throw Error(k(349));pn&30||o1(n,t,a)}return a}function o1(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=q.updateQueue,t===null?(t={lastEffect:null,stores:null},q.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function l1(e,t,n,r){t.value=n,t.getSnapshot=r,u1(t)&&c1(e)}function s1(e,t,n){return n(function(){u1(t)&&c1(e)})}function u1(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!it(e,n)}catch{return!0}}function c1(e){var t=St(e,1);t!==null&&at(t,e,1,-1)}function $c(e){var t=lt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Xr,lastRenderedState:e},t.queue=e,e=e.dispatch=av.bind(null,q,e),[t.memoizedState,e]}function Gr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=q.updateQueue,t===null?(t={lastEffect:null,stores:null},q.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function f1(){return Ge().memoizedState}function Za(e,t,n,r){var a=lt();q.flags|=e,a.memoizedState=Gr(1|t,n,void 0,r===void 0?null:r)}function Yi(e,t,n,r){var a=Ge();r=r===void 0?null:r;var i=void 0;if(se!==null){var o=se.memoizedState;if(i=o.destroy,r!==null&&iu(r,o.deps)){a.memoizedState=Gr(t,n,i,r);return}}q.flags|=e,a.memoizedState=Gr(1|t,n,i,r)}function jc(e,t){return Za(8390656,8,e,t)}function su(e,t){return Yi(2048,8,e,t)}function d1(e,t){return Yi(4,2,e,t)}function m1(e,t){return Yi(4,4,e,t)}function p1(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function v1(e,t,n){return n=n!=null?n.concat([e]):null,Yi(4,4,p1.bind(null,t,e),n)}function uu(){}function h1(e,t){var n=Ge();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&iu(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function g1(e,t){var n=Ge();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&iu(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function y1(e,t,n){return pn&21?(it(n,t)||(n=kd(),q.lanes|=n,vn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,ze=!0),e.memoizedState=n)}function nv(e,t){var n=H;H=n!==0&&4>n?n:4,e(!0);var r=Ko.transition;Ko.transition={};try{e(!1),t()}finally{H=n,Ko.transition=r}}function w1(){return Ge().memoizedState}function rv(e,t,n){var r=Wt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},x1(e))k1(t,n);else if(n=Zd(e,t,n,r),n!==null){var a=Ee();at(n,e,r,a),S1(n,t,r)}}function av(e,t,n){var r=Wt(e),a={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(x1(e))k1(t,a);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var o=t.lastRenderedState,l=i(o,n);if(a.hasEagerState=!0,a.eagerState=l,it(l,o)){var s=t.interleaved;s===null?(a.next=a,eu(t)):(a.next=s.next,s.next=a),t.interleaved=a;return}}catch{}finally{}n=Zd(e,t,a,r),n!==null&&(a=Ee(),at(n,e,r,a),S1(n,t,r))}}function x1(e){var t=e.alternate;return e===q||t!==null&&t===q}function k1(e,t){_r=bi=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function S1(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ds(e,n)}}var Ei={readContext:Xe,useCallback:we,useContext:we,useEffect:we,useImperativeHandle:we,useInsertionEffect:we,useLayoutEffect:we,useMemo:we,useReducer:we,useRef:we,useState:we,useDebugValue:we,useDeferredValue:we,useTransition:we,useMutableSource:we,useSyncExternalStore:we,useId:we,unstable_isNewReconciler:!1},iv={readContext:Xe,useCallback:function(e,t){return lt().memoizedState=[e,t===void 0?null:t],e},useContext:Xe,useEffect:jc,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Za(4194308,4,p1.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Za(4194308,4,e,t)},useInsertionEffect:function(e,t){return Za(4,2,e,t)},useMemo:function(e,t){var n=lt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=lt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=rv.bind(null,q,e),[r.memoizedState,e]},useRef:function(e){var t=lt();return e={current:e},t.memoizedState=e},useState:$c,useDebugValue:uu,useDeferredValue:function(e){return lt().memoizedState=e},useTransition:function(){var e=$c(!1),t=e[0];return e=nv.bind(null,e[1]),lt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=q,a=lt();if(Z){if(n===void 0)throw Error(k(407));n=n()}else{if(n=t(),me===null)throw Error(k(349));pn&30||o1(r,t,n)}a.memoizedState=n;var i={value:n,getSnapshot:t};return a.queue=i,jc(s1.bind(null,r,i,e),[e]),r.flags|=2048,Gr(9,l1.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=lt(),t=me.identifierPrefix;if(Z){var n=yt,r=gt;n=(r&~(1<<32-rt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Qr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=tv++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},ov={readContext:Xe,useCallback:h1,useContext:Xe,useEffect:su,useImperativeHandle:v1,useInsertionEffect:d1,useLayoutEffect:m1,useMemo:g1,useReducer:Zo,useRef:f1,useState:function(){return Zo(Xr)},useDebugValue:uu,useDeferredValue:function(e){var t=Ge();return y1(t,se.memoizedState,e)},useTransition:function(){var e=Zo(Xr)[0],t=Ge().memoizedState;return[e,t]},useMutableSource:a1,useSyncExternalStore:i1,useId:w1,unstable_isNewReconciler:!1},lv={readContext:Xe,useCallback:h1,useContext:Xe,useEffect:su,useImperativeHandle:v1,useInsertionEffect:d1,useLayoutEffect:m1,useMemo:g1,useReducer:Jo,useRef:f1,useState:function(){return Jo(Xr)},useDebugValue:uu,useDeferredValue:function(e){var t=Ge();return se===null?t.memoizedState=e:y1(t,se.memoizedState,e)},useTransition:function(){var e=Jo(Xr)[0],t=Ge().memoizedState;return[e,t]},useMutableSource:a1,useSyncExternalStore:i1,useId:w1,unstable_isNewReconciler:!1};function Kn(e,t){try{var n="",r=t;do n+=Mm(r),r=r.return;while(r);var a=n}catch(i){a=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:a,digest:null}}function qo(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Bl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var sv=typeof WeakMap=="function"?WeakMap:Map;function C1(e,t,n){n=wt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){_i||(_i=!0,ts=r),Bl(e,t)},n}function b1(e,t,n){n=wt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var a=t.value;n.payload=function(){return r(a)},n.callback=function(){Bl(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Bl(e,t),typeof r!="function"&&(Ht===null?Ht=new Set([this]):Ht.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function Fc(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new sv;var a=new Set;r.set(t,a)}else a=r.get(t),a===void 0&&(a=new Set,r.set(t,a));a.has(n)||(a.add(n),e=Sv.bind(null,e,t,n),t.then(e,e))}function Dc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Uc(e,t,n,r,a){return e.mode&1?(e.flags|=65536,e.lanes=a,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=wt(-1,1),t.tag=2,Vt(n,t,1))),n.lanes|=1),e)}var uv=_t.ReactCurrentOwner,ze=!1;function be(e,t,n,r){t.child=e===null?n1(t,null,n,r):Xn(t,e.child,n,r)}function Vc(e,t,n,r,a){n=n.render;var i=t.ref;return Un(t,a),r=ou(e,t,n,r,i,a),n=lu(),e!==null&&!ze?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,Ct(e,t,a)):(Z&&n&&Xs(t),t.flags|=1,be(e,t,r,a),t.child)}function Hc(e,t,n,r,a){if(e===null){var i=n.type;return typeof i=="function"&&!gu(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,E1(e,t,i,r,a)):(e=ti(n.type,null,r,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&a)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:Ur,n(o,r)&&e.ref===t.ref)return Ct(e,t,a)}return t.flags|=1,e=Bt(i,r),e.ref=t.ref,e.return=t,t.child=e}function E1(e,t,n,r,a){if(e!==null){var i=e.memoizedProps;if(Ur(i,r)&&e.ref===t.ref)if(ze=!1,t.pendingProps=r=i,(e.lanes&a)!==0)e.flags&131072&&(ze=!0);else return t.lanes=e.lanes,Ct(e,t,a)}return Yl(e,t,n,r,a)}function N1(e,t,n){var r=t.pendingProps,a=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Y(In,Me),Me|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Y(In,Me),Me|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,Y(In,Me),Me|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,Y(In,Me),Me|=r;return be(e,t,a,n),t.child}function _1(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Yl(e,t,n,r,a){var i=Le(n)?dn:Ce.current;return i=Yn(t,i),Un(t,a),n=ou(e,t,n,r,i,a),r=lu(),e!==null&&!ze?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,Ct(e,t,a)):(Z&&r&&Xs(t),t.flags|=1,be(e,t,n,a),t.child)}function Wc(e,t,n,r,a){if(Le(n)){var i=!0;gi(t)}else i=!1;if(Un(t,a),t.stateNode===null)Ja(e,t),e1(t,n,r),Wl(t,n,r,a),r=!0;else if(e===null){var o=t.stateNode,l=t.memoizedProps;o.props=l;var s=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Xe(u):(u=Le(n)?dn:Ce.current,u=Yn(t,u));var f=n.getDerivedStateFromProps,m=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";m||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||s!==u)&&Mc(t,o,r,u),Lt=!1;var v=t.memoizedState;o.state=v,Si(t,r,o,a),s=t.memoizedState,l!==r||v!==s||Te.current||Lt?(typeof f=="function"&&(Hl(t,n,f,r),s=t.memoizedState),(l=Lt||Ac(t,n,l,r,v,s,u))?(m||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),o.props=r,o.state=s,o.context=u,r=l):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,Jd(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:qe(t.type,l),o.props=u,m=t.pendingProps,v=o.context,s=n.contextType,typeof s=="object"&&s!==null?s=Xe(s):(s=Le(n)?dn:Ce.current,s=Yn(t,s));var g=n.getDerivedStateFromProps;(f=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==m||v!==s)&&Mc(t,o,r,s),Lt=!1,v=t.memoizedState,o.state=v,Si(t,r,o,a);var y=t.memoizedState;l!==m||v!==y||Te.current||Lt?(typeof g=="function"&&(Hl(t,n,g,r),y=t.memoizedState),(u=Lt||Ac(t,n,u,r,v,y,s)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,y,s),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,y,s)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&v===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&v===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),o.props=r,o.state=y,o.context=s,r=u):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&v===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&v===e.memoizedState||(t.flags|=1024),r=!1)}return Ql(e,t,n,r,i,a)}function Ql(e,t,n,r,a,i){_1(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return a&&Oc(t,n,!1),Ct(e,t,i);r=t.stateNode,uv.current=t;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=Xn(t,e.child,null,i),t.child=Xn(t,null,l,i)):be(e,t,l,i),t.memoizedState=r.state,a&&Oc(t,n,!0),t.child}function P1(e){var t=e.stateNode;t.pendingContext?Pc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Pc(e,t.context,!1),nu(e,t.containerInfo)}function Bc(e,t,n,r,a){return Qn(),Ks(a),t.flags|=256,be(e,t,n,r),t.child}var Xl={dehydrated:null,treeContext:null,retryLane:0};function Gl(e){return{baseLanes:e,cachePool:null,transitions:null}}function O1(e,t,n){var r=t.pendingProps,a=J.current,i=!1,o=(t.flags&128)!==0,l;if((l=o)||(l=e!==null&&e.memoizedState===null?!1:(a&2)!==0),l?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(a|=1),Y(J,a&1),e===null)return Ul(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,i?(r=t.mode,i=t.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=Gi(o,r,0,null),e=fn(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Gl(n),t.memoizedState=Xl,e):cu(t,o));if(a=e.memoizedState,a!==null&&(l=a.dehydrated,l!==null))return cv(e,t,o,r,l,a,n);if(i){i=r.fallback,o=t.mode,a=e.child,l=a.sibling;var s={mode:"hidden",children:r.children};return!(o&1)&&t.child!==a?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=Bt(a,s),r.subtreeFlags=a.subtreeFlags&14680064),l!==null?i=Bt(l,i):(i=fn(i,o,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,o=e.child.memoizedState,o=o===null?Gl(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=e.childLanes&~n,t.memoizedState=Xl,r}return i=e.child,e=i.sibling,r=Bt(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function cu(e,t){return t=Gi({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Oa(e,t,n,r){return r!==null&&Ks(r),Xn(t,e.child,null,n),e=cu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function cv(e,t,n,r,a,i,o){if(n)return t.flags&256?(t.flags&=-257,r=qo(Error(k(422))),Oa(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,a=t.mode,r=Gi({mode:"visible",children:r.children},a,0,null),i=fn(i,a,o,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&Xn(t,e.child,null,o),t.child.memoizedState=Gl(o),t.memoizedState=Xl,i);if(!(t.mode&1))return Oa(e,t,o,null);if(a.data==="$!"){if(r=a.nextSibling&&a.nextSibling.dataset,r)var l=r.dgst;return r=l,i=Error(k(419)),r=qo(i,r,void 0),Oa(e,t,o,r)}if(l=(o&e.childLanes)!==0,ze||l){if(r=me,r!==null){switch(o&-o){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=a&(r.suspendedLanes|o)?0:a,a!==0&&a!==i.retryLane&&(i.retryLane=a,St(e,a),at(r,e,a,-1))}return hu(),r=qo(Error(k(421))),Oa(e,t,o,r)}return a.data==="$?"?(t.flags|=128,t.child=e.child,t=Cv.bind(null,e),a._reactRetry=t,null):(e=i.treeContext,Re=Ut(a.nextSibling),$e=t,Z=!0,tt=null,e!==null&&(We[Be++]=gt,We[Be++]=yt,We[Be++]=mn,gt=e.id,yt=e.overflow,mn=t),t=cu(t,r.children),t.flags|=4096,t)}function Yc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Vl(e.return,t,n)}function el(e,t,n,r,a){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:a}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=a)}function z1(e,t,n){var r=t.pendingProps,a=r.revealOrder,i=r.tail;if(be(e,t,r.children,n),r=J.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Yc(e,n,t);else if(e.tag===19)Yc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Y(J,r),!(t.mode&1))t.memoizedState=null;else switch(a){case"forwards":for(n=t.child,a=null;n!==null;)e=n.alternate,e!==null&&Ci(e)===null&&(a=n),n=n.sibling;n=a,n===null?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),el(t,!1,a,n,i);break;case"backwards":for(n=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&Ci(e)===null){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}el(t,!0,n,null,i);break;case"together":el(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ja(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ct(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),vn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(k(153));if(t.child!==null){for(e=t.child,n=Bt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Bt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function fv(e,t,n){switch(t.tag){case 3:P1(t),Qn();break;case 5:r1(t);break;case 1:Le(t.type)&&gi(t);break;case 4:nu(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,a=t.memoizedProps.value;Y(xi,r._currentValue),r._currentValue=a;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Y(J,J.current&1),t.flags|=128,null):n&t.child.childLanes?O1(e,t,n):(Y(J,J.current&1),e=Ct(e,t,n),e!==null?e.sibling:null);Y(J,J.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return z1(e,t,n);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),Y(J,J.current),r)break;return null;case 22:case 23:return t.lanes=0,N1(e,t,n)}return Ct(e,t,n)}var T1,Kl,L1,I1;T1=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Kl=function(){};L1=function(e,t,n,r){var a=e.memoizedProps;if(a!==r){e=t.stateNode,ln(mt.current);var i=null;switch(n){case"input":a=yl(e,a),r=yl(e,r),i=[];break;case"select":a=ee({},a,{value:void 0}),r=ee({},r,{value:void 0}),i=[];break;case"textarea":a=kl(e,a),r=kl(e,r),i=[];break;default:typeof a.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=vi)}Cl(n,r);var o;n=null;for(u in a)if(!r.hasOwnProperty(u)&&a.hasOwnProperty(u)&&a[u]!=null)if(u==="style"){var l=a[u];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Ar.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in r){var s=r[u];if(l=a!=null?a[u]:void 0,r.hasOwnProperty(u)&&s!==l&&(s!=null||l!=null))if(u==="style")if(l){for(o in l)!l.hasOwnProperty(o)||s&&s.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in s)s.hasOwnProperty(o)&&l[o]!==s[o]&&(n||(n={}),n[o]=s[o])}else n||(i||(i=[]),i.push(u,n)),n=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,l=l?l.__html:void 0,s!=null&&l!==s&&(i=i||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(i=i||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Ar.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&Q("scroll",e),i||l===s||(i=[])):(i=i||[]).push(u,s))}n&&(i=i||[]).push("style",n);var u=i;(t.updateQueue=u)&&(t.flags|=4)}};I1=function(e,t,n,r){n!==r&&(t.flags|=4)};function pr(e,t){if(!Z)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function xe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var a=e.child;a!==null;)n|=a.lanes|a.childLanes,r|=a.subtreeFlags&14680064,r|=a.flags&14680064,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)n|=a.lanes|a.childLanes,r|=a.subtreeFlags,r|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function dv(e,t,n){var r=t.pendingProps;switch(Gs(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return xe(t),null;case 1:return Le(t.type)&&hi(),xe(t),null;case 3:return r=t.stateNode,Gn(),G(Te),G(Ce),au(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(_a(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,tt!==null&&(as(tt),tt=null))),Kl(e,t),xe(t),null;case 5:ru(t);var a=ln(Yr.current);if(n=t.type,e!==null&&t.stateNode!=null)L1(e,t,n,r,a),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(k(166));return xe(t),null}if(e=ln(mt.current),_a(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[ct]=t,r[Wr]=i,e=(t.mode&1)!==0,n){case"dialog":Q("cancel",r),Q("close",r);break;case"iframe":case"object":case"embed":Q("load",r);break;case"video":case"audio":for(a=0;a<xr.length;a++)Q(xr[a],r);break;case"source":Q("error",r);break;case"img":case"image":case"link":Q("error",r),Q("load",r);break;case"details":Q("toggle",r);break;case"input":tc(r,i),Q("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},Q("invalid",r);break;case"textarea":rc(r,i),Q("invalid",r)}Cl(n,i),a=null;for(var o in i)if(i.hasOwnProperty(o)){var l=i[o];o==="children"?typeof l=="string"?r.textContent!==l&&(i.suppressHydrationWarning!==!0&&Na(r.textContent,l,e),a=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(i.suppressHydrationWarning!==!0&&Na(r.textContent,l,e),a=["children",""+l]):Ar.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&Q("scroll",r)}switch(n){case"input":ya(r),nc(r,i,!0);break;case"textarea":ya(r),ac(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=vi)}r=a,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=a.nodeType===9?a:a.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=od(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[ct]=t,e[Wr]=r,T1(e,t,!1,!1),t.stateNode=e;e:{switch(o=bl(n,r),n){case"dialog":Q("cancel",e),Q("close",e),a=r;break;case"iframe":case"object":case"embed":Q("load",e),a=r;break;case"video":case"audio":for(a=0;a<xr.length;a++)Q(xr[a],e);a=r;break;case"source":Q("error",e),a=r;break;case"img":case"image":case"link":Q("error",e),Q("load",e),a=r;break;case"details":Q("toggle",e),a=r;break;case"input":tc(e,r),a=yl(e,r),Q("invalid",e);break;case"option":a=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},a=ee({},r,{value:void 0}),Q("invalid",e);break;case"textarea":rc(e,r),a=kl(e,r),Q("invalid",e);break;default:a=r}Cl(n,a),l=a;for(i in l)if(l.hasOwnProperty(i)){var s=l[i];i==="style"?ud(e,s):i==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&ld(e,s)):i==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&Mr(e,s):typeof s=="number"&&Mr(e,""+s):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Ar.hasOwnProperty(i)?s!=null&&i==="onScroll"&&Q("scroll",e):s!=null&&As(e,i,s,o))}switch(n){case"input":ya(e),nc(e,r,!1);break;case"textarea":ya(e),ac(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Yt(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?$n(e,!!r.multiple,i,!1):r.defaultValue!=null&&$n(e,!!r.multiple,r.defaultValue,!0);break;default:typeof a.onClick=="function"&&(e.onclick=vi)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return xe(t),null;case 6:if(e&&t.stateNode!=null)I1(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(k(166));if(n=ln(Yr.current),ln(mt.current),_a(t)){if(r=t.stateNode,n=t.memoizedProps,r[ct]=t,(i=r.nodeValue!==n)&&(e=$e,e!==null))switch(e.tag){case 3:Na(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Na(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[ct]=t,t.stateNode=r}return xe(t),null;case 13:if(G(J),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Z&&Re!==null&&t.mode&1&&!(t.flags&128))Kd(),Qn(),t.flags|=98560,i=!1;else if(i=_a(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(k(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(k(317));i[ct]=t}else Qn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;xe(t),i=!1}else tt!==null&&(as(tt),tt=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||J.current&1?ue===0&&(ue=3):hu())),t.updateQueue!==null&&(t.flags|=4),xe(t),null);case 4:return Gn(),Kl(e,t),e===null&&Vr(t.stateNode.containerInfo),xe(t),null;case 10:return qs(t.type._context),xe(t),null;case 17:return Le(t.type)&&hi(),xe(t),null;case 19:if(G(J),i=t.memoizedState,i===null)return xe(t),null;if(r=(t.flags&128)!==0,o=i.rendering,o===null)if(r)pr(i,!1);else{if(ue!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=Ci(e),o!==null){for(t.flags|=128,pr(i,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,e=o.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Y(J,J.current&1|2),t.child}e=e.sibling}i.tail!==null&&ie()>Zn&&(t.flags|=128,r=!0,pr(i,!1),t.lanes=4194304)}else{if(!r)if(e=Ci(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),pr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!Z)return xe(t),null}else 2*ie()-i.renderingStartTime>Zn&&n!==1073741824&&(t.flags|=128,r=!0,pr(i,!1),t.lanes=4194304);i.isBackwards?(o.sibling=t.child,t.child=o):(n=i.last,n!==null?n.sibling=o:t.child=o,i.last=o)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=ie(),t.sibling=null,n=J.current,Y(J,r?n&1|2:n&1),t):(xe(t),null);case 22:case 23:return vu(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Me&1073741824&&(xe(t),t.subtreeFlags&6&&(t.flags|=8192)):xe(t),null;case 24:return null;case 25:return null}throw Error(k(156,t.tag))}function mv(e,t){switch(Gs(t),t.tag){case 1:return Le(t.type)&&hi(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Gn(),G(Te),G(Ce),au(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return ru(t),null;case 13:if(G(J),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(k(340));Qn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return G(J),null;case 4:return Gn(),null;case 10:return qs(t.type._context),null;case 22:case 23:return vu(),null;case 24:return null;default:return null}}var za=!1,Se=!1,pv=typeof WeakSet=="function"?WeakSet:Set,P=null;function Ln(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ne(e,t,r)}else n.current=null}function Zl(e,t,n){try{n()}catch(r){ne(e,t,r)}}var Qc=!1;function vv(e,t){if(Al=di,e=$d(),Qs(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var a=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,l=-1,s=-1,u=0,f=0,m=e,v=null;t:for(;;){for(var g;m!==n||a!==0&&m.nodeType!==3||(l=o+a),m!==i||r!==0&&m.nodeType!==3||(s=o+r),m.nodeType===3&&(o+=m.nodeValue.length),(g=m.firstChild)!==null;)v=m,m=g;for(;;){if(m===e)break t;if(v===n&&++u===a&&(l=o),v===i&&++f===r&&(s=o),(g=m.nextSibling)!==null)break;m=v,v=m.parentNode}m=g}n=l===-1||s===-1?null:{start:l,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ml={focusedElem:e,selectionRange:n},di=!1,P=t;P!==null;)if(t=P,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,P=e;else for(;P!==null;){t=P;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var h=y.memoizedProps,N=y.memoizedState,d=t.stateNode,c=d.getSnapshotBeforeUpdate(t.elementType===t.type?h:qe(t.type,h),N);d.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(k(163))}}catch(w){ne(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,P=e;break}P=t.return}return y=Qc,Qc=!1,y}function Pr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var a=r=r.next;do{if((a.tag&e)===e){var i=a.destroy;a.destroy=void 0,i!==void 0&&Zl(t,n,i)}a=a.next}while(a!==r)}}function Qi(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Jl(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function A1(e){var t=e.alternate;t!==null&&(e.alternate=null,A1(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[ct],delete t[Wr],delete t[jl],delete t[Zp],delete t[Jp])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function M1(e){return e.tag===5||e.tag===3||e.tag===4}function Xc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||M1(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ql(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=vi));else if(r!==4&&(e=e.child,e!==null))for(ql(e,t,n),e=e.sibling;e!==null;)ql(e,t,n),e=e.sibling}function es(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(es(e,t,n),e=e.sibling;e!==null;)es(e,t,n),e=e.sibling}var ve=null,et=!1;function Ot(e,t,n){for(n=n.child;n!==null;)R1(e,t,n),n=n.sibling}function R1(e,t,n){if(dt&&typeof dt.onCommitFiberUnmount=="function")try{dt.onCommitFiberUnmount(Fi,n)}catch{}switch(n.tag){case 5:Se||Ln(n,t);case 6:var r=ve,a=et;ve=null,Ot(e,t,n),ve=r,et=a,ve!==null&&(et?(e=ve,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ve.removeChild(n.stateNode));break;case 18:ve!==null&&(et?(e=ve,n=n.stateNode,e.nodeType===8?Qo(e.parentNode,n):e.nodeType===1&&Qo(e,n),Fr(e)):Qo(ve,n.stateNode));break;case 4:r=ve,a=et,ve=n.stateNode.containerInfo,et=!0,Ot(e,t,n),ve=r,et=a;break;case 0:case 11:case 14:case 15:if(!Se&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){a=r=r.next;do{var i=a,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&Zl(n,t,o),a=a.next}while(a!==r)}Ot(e,t,n);break;case 1:if(!Se&&(Ln(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){ne(n,t,l)}Ot(e,t,n);break;case 21:Ot(e,t,n);break;case 22:n.mode&1?(Se=(r=Se)||n.memoizedState!==null,Ot(e,t,n),Se=r):Ot(e,t,n);break;default:Ot(e,t,n)}}function Gc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new pv),t.forEach(function(r){var a=bv.bind(null,e,r);n.has(r)||(n.add(r),r.then(a,a))})}}function Je(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r];try{var i=e,o=t,l=o;e:for(;l!==null;){switch(l.tag){case 5:ve=l.stateNode,et=!1;break e;case 3:ve=l.stateNode.containerInfo,et=!0;break e;case 4:ve=l.stateNode.containerInfo,et=!0;break e}l=l.return}if(ve===null)throw Error(k(160));R1(i,o,a),ve=null,et=!1;var s=a.alternate;s!==null&&(s.return=null),a.return=null}catch(u){ne(a,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)$1(t,e),t=t.sibling}function $1(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Je(t,e),ot(e),r&4){try{Pr(3,e,e.return),Qi(3,e)}catch(h){ne(e,e.return,h)}try{Pr(5,e,e.return)}catch(h){ne(e,e.return,h)}}break;case 1:Je(t,e),ot(e),r&512&&n!==null&&Ln(n,n.return);break;case 5:if(Je(t,e),ot(e),r&512&&n!==null&&Ln(n,n.return),e.flags&32){var a=e.stateNode;try{Mr(a,"")}catch(h){ne(e,e.return,h)}}if(r&4&&(a=e.stateNode,a!=null)){var i=e.memoizedProps,o=n!==null?n.memoizedProps:i,l=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{l==="input"&&i.type==="radio"&&i.name!=null&&ad(a,i),bl(l,o);var u=bl(l,i);for(o=0;o<s.length;o+=2){var f=s[o],m=s[o+1];f==="style"?ud(a,m):f==="dangerouslySetInnerHTML"?ld(a,m):f==="children"?Mr(a,m):As(a,f,m,u)}switch(l){case"input":wl(a,i);break;case"textarea":id(a,i);break;case"select":var v=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!i.multiple;var g=i.value;g!=null?$n(a,!!i.multiple,g,!1):v!==!!i.multiple&&(i.defaultValue!=null?$n(a,!!i.multiple,i.defaultValue,!0):$n(a,!!i.multiple,i.multiple?[]:"",!1))}a[Wr]=i}catch(h){ne(e,e.return,h)}}break;case 6:if(Je(t,e),ot(e),r&4){if(e.stateNode===null)throw Error(k(162));a=e.stateNode,i=e.memoizedProps;try{a.nodeValue=i}catch(h){ne(e,e.return,h)}}break;case 3:if(Je(t,e),ot(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Fr(t.containerInfo)}catch(h){ne(e,e.return,h)}break;case 4:Je(t,e),ot(e);break;case 13:Je(t,e),ot(e),a=e.child,a.flags&8192&&(i=a.memoizedState!==null,a.stateNode.isHidden=i,!i||a.alternate!==null&&a.alternate.memoizedState!==null||(mu=ie())),r&4&&Gc(e);break;case 22:if(f=n!==null&&n.memoizedState!==null,e.mode&1?(Se=(u=Se)||f,Je(t,e),Se=u):Je(t,e),ot(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!f&&e.mode&1)for(P=e,f=e.child;f!==null;){for(m=P=f;P!==null;){switch(v=P,g=v.child,v.tag){case 0:case 11:case 14:case 15:Pr(4,v,v.return);break;case 1:Ln(v,v.return);var y=v.stateNode;if(typeof y.componentWillUnmount=="function"){r=v,n=v.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(h){ne(r,n,h)}}break;case 5:Ln(v,v.return);break;case 22:if(v.memoizedState!==null){Zc(m);continue}}g!==null?(g.return=v,P=g):Zc(m)}f=f.sibling}e:for(f=null,m=e;;){if(m.tag===5){if(f===null){f=m;try{a=m.stateNode,u?(i=a.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(l=m.stateNode,s=m.memoizedProps.style,o=s!=null&&s.hasOwnProperty("display")?s.display:null,l.style.display=sd("display",o))}catch(h){ne(e,e.return,h)}}}else if(m.tag===6){if(f===null)try{m.stateNode.nodeValue=u?"":m.memoizedProps}catch(h){ne(e,e.return,h)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;f===m&&(f=null),m=m.return}f===m&&(f=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Je(t,e),ot(e),r&4&&Gc(e);break;case 21:break;default:Je(t,e),ot(e)}}function ot(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(M1(n)){var r=n;break e}n=n.return}throw Error(k(160))}switch(r.tag){case 5:var a=r.stateNode;r.flags&32&&(Mr(a,""),r.flags&=-33);var i=Xc(e);es(e,i,a);break;case 3:case 4:var o=r.stateNode.containerInfo,l=Xc(e);ql(e,l,o);break;default:throw Error(k(161))}}catch(s){ne(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function hv(e,t,n){P=e,j1(e)}function j1(e,t,n){for(var r=(e.mode&1)!==0;P!==null;){var a=P,i=a.child;if(a.tag===22&&r){var o=a.memoizedState!==null||za;if(!o){var l=a.alternate,s=l!==null&&l.memoizedState!==null||Se;l=za;var u=Se;if(za=o,(Se=s)&&!u)for(P=a;P!==null;)o=P,s=o.child,o.tag===22&&o.memoizedState!==null?Jc(a):s!==null?(s.return=o,P=s):Jc(a);for(;i!==null;)P=i,j1(i),i=i.sibling;P=a,za=l,Se=u}Kc(e)}else a.subtreeFlags&8772&&i!==null?(i.return=a,P=i):Kc(e)}}function Kc(e){for(;P!==null;){var t=P;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Se||Qi(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Se)if(n===null)r.componentDidMount();else{var a=t.elementType===t.type?n.memoizedProps:qe(t.type,n.memoizedProps);r.componentDidUpdate(a,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Ic(t,i,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Ic(t,o,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var m=f.dehydrated;m!==null&&Fr(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(k(163))}Se||t.flags&512&&Jl(t)}catch(v){ne(t,t.return,v)}}if(t===e){P=null;break}if(n=t.sibling,n!==null){n.return=t.return,P=n;break}P=t.return}}function Zc(e){for(;P!==null;){var t=P;if(t===e){P=null;break}var n=t.sibling;if(n!==null){n.return=t.return,P=n;break}P=t.return}}function Jc(e){for(;P!==null;){var t=P;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Qi(4,t)}catch(s){ne(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var a=t.return;try{r.componentDidMount()}catch(s){ne(t,a,s)}}var i=t.return;try{Jl(t)}catch(s){ne(t,i,s)}break;case 5:var o=t.return;try{Jl(t)}catch(s){ne(t,o,s)}}}catch(s){ne(t,t.return,s)}if(t===e){P=null;break}var l=t.sibling;if(l!==null){l.return=t.return,P=l;break}P=t.return}}var gv=Math.ceil,Ni=_t.ReactCurrentDispatcher,fu=_t.ReactCurrentOwner,Qe=_t.ReactCurrentBatchConfig,j=0,me=null,le=null,ge=0,Me=0,In=Jt(0),ue=0,Kr=null,vn=0,Xi=0,du=0,Or=null,Oe=null,mu=0,Zn=1/0,vt=null,_i=!1,ts=null,Ht=null,Ta=!1,Rt=null,Pi=0,zr=0,ns=null,qa=-1,ei=0;function Ee(){return j&6?ie():qa!==-1?qa:qa=ie()}function Wt(e){return e.mode&1?j&2&&ge!==0?ge&-ge:ev.transition!==null?(ei===0&&(ei=kd()),ei):(e=H,e!==0||(e=window.event,e=e===void 0?16:Pd(e.type)),e):1}function at(e,t,n,r){if(50<zr)throw zr=0,ns=null,Error(k(185));oa(e,n,r),(!(j&2)||e!==me)&&(e===me&&(!(j&2)&&(Xi|=n),ue===4&&At(e,ge)),Ie(e,r),n===1&&j===0&&!(t.mode&1)&&(Zn=ie()+500,Wi&&qt()))}function Ie(e,t){var n=e.callbackNode;ep(e,t);var r=fi(e,e===me?ge:0);if(r===0)n!==null&&lc(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&lc(n),t===1)e.tag===0?qp(qc.bind(null,e)):Qd(qc.bind(null,e)),Gp(function(){!(j&6)&&qt()}),n=null;else{switch(Sd(r)){case 1:n=Fs;break;case 4:n=wd;break;case 16:n=ci;break;case 536870912:n=xd;break;default:n=ci}n=Y1(n,F1.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function F1(e,t){if(qa=-1,ei=0,j&6)throw Error(k(327));var n=e.callbackNode;if(Vn()&&e.callbackNode!==n)return null;var r=fi(e,e===me?ge:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Oi(e,r);else{t=r;var a=j;j|=2;var i=U1();(me!==e||ge!==t)&&(vt=null,Zn=ie()+500,cn(e,t));do try{xv();break}catch(l){D1(e,l)}while(1);Js(),Ni.current=i,j=a,le!==null?t=0:(me=null,ge=0,t=ue)}if(t!==0){if(t===2&&(a=Ol(e),a!==0&&(r=a,t=rs(e,a))),t===1)throw n=Kr,cn(e,0),At(e,r),Ie(e,ie()),n;if(t===6)At(e,r);else{if(a=e.current.alternate,!(r&30)&&!yv(a)&&(t=Oi(e,r),t===2&&(i=Ol(e),i!==0&&(r=i,t=rs(e,i))),t===1))throw n=Kr,cn(e,0),At(e,r),Ie(e,ie()),n;switch(e.finishedWork=a,e.finishedLanes=r,t){case 0:case 1:throw Error(k(345));case 2:rn(e,Oe,vt);break;case 3:if(At(e,r),(r&130023424)===r&&(t=mu+500-ie(),10<t)){if(fi(e,0)!==0)break;if(a=e.suspendedLanes,(a&r)!==r){Ee(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=$l(rn.bind(null,e,Oe,vt),t);break}rn(e,Oe,vt);break;case 4:if(At(e,r),(r&4194240)===r)break;for(t=e.eventTimes,a=-1;0<r;){var o=31-rt(r);i=1<<o,o=t[o],o>a&&(a=o),r&=~i}if(r=a,r=ie()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*gv(r/1960))-r,10<r){e.timeoutHandle=$l(rn.bind(null,e,Oe,vt),r);break}rn(e,Oe,vt);break;case 5:rn(e,Oe,vt);break;default:throw Error(k(329))}}}return Ie(e,ie()),e.callbackNode===n?F1.bind(null,e):null}function rs(e,t){var n=Or;return e.current.memoizedState.isDehydrated&&(cn(e,t).flags|=256),e=Oi(e,t),e!==2&&(t=Oe,Oe=n,t!==null&&as(t)),e}function as(e){Oe===null?Oe=e:Oe.push.apply(Oe,e)}function yv(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var a=n[r],i=a.getSnapshot;a=a.value;try{if(!it(i(),a))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function At(e,t){for(t&=~du,t&=~Xi,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-rt(t),r=1<<n;e[n]=-1,t&=~r}}function qc(e){if(j&6)throw Error(k(327));Vn();var t=fi(e,0);if(!(t&1))return Ie(e,ie()),null;var n=Oi(e,t);if(e.tag!==0&&n===2){var r=Ol(e);r!==0&&(t=r,n=rs(e,r))}if(n===1)throw n=Kr,cn(e,0),At(e,t),Ie(e,ie()),n;if(n===6)throw Error(k(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,rn(e,Oe,vt),Ie(e,ie()),null}function pu(e,t){var n=j;j|=1;try{return e(t)}finally{j=n,j===0&&(Zn=ie()+500,Wi&&qt())}}function hn(e){Rt!==null&&Rt.tag===0&&!(j&6)&&Vn();var t=j;j|=1;var n=Qe.transition,r=H;try{if(Qe.transition=null,H=1,e)return e()}finally{H=r,Qe.transition=n,j=t,!(j&6)&&qt()}}function vu(){Me=In.current,G(In)}function cn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Xp(n)),le!==null)for(n=le.return;n!==null;){var r=n;switch(Gs(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&hi();break;case 3:Gn(),G(Te),G(Ce),au();break;case 5:ru(r);break;case 4:Gn();break;case 13:G(J);break;case 19:G(J);break;case 10:qs(r.type._context);break;case 22:case 23:vu()}n=n.return}if(me=e,le=e=Bt(e.current,null),ge=Me=t,ue=0,Kr=null,du=Xi=vn=0,Oe=Or=null,on!==null){for(t=0;t<on.length;t++)if(n=on[t],r=n.interleaved,r!==null){n.interleaved=null;var a=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=a,r.next=o}n.pending=r}on=null}return e}function D1(e,t){do{var n=le;try{if(Js(),Ka.current=Ei,bi){for(var r=q.memoizedState;r!==null;){var a=r.queue;a!==null&&(a.pending=null),r=r.next}bi=!1}if(pn=0,de=se=q=null,_r=!1,Qr=0,fu.current=null,n===null||n.return===null){ue=1,Kr=t,le=null;break}e:{var i=e,o=n.return,l=n,s=t;if(t=ge,l.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,f=l,m=f.tag;if(!(f.mode&1)&&(m===0||m===11||m===15)){var v=f.alternate;v?(f.updateQueue=v.updateQueue,f.memoizedState=v.memoizedState,f.lanes=v.lanes):(f.updateQueue=null,f.memoizedState=null)}var g=Dc(o);if(g!==null){g.flags&=-257,Uc(g,o,l,i,t),g.mode&1&&Fc(i,u,t),t=g,s=u;var y=t.updateQueue;if(y===null){var h=new Set;h.add(s),t.updateQueue=h}else y.add(s);break e}else{if(!(t&1)){Fc(i,u,t),hu();break e}s=Error(k(426))}}else if(Z&&l.mode&1){var N=Dc(o);if(N!==null){!(N.flags&65536)&&(N.flags|=256),Uc(N,o,l,i,t),Ks(Kn(s,l));break e}}i=s=Kn(s,l),ue!==4&&(ue=2),Or===null?Or=[i]:Or.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var d=C1(i,s,t);Lc(i,d);break e;case 1:l=s;var c=i.type,p=i.stateNode;if(!(i.flags&128)&&(typeof c.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(Ht===null||!Ht.has(p)))){i.flags|=65536,t&=-t,i.lanes|=t;var w=b1(i,l,t);Lc(i,w);break e}}i=i.return}while(i!==null)}H1(n)}catch(x){t=x,le===n&&n!==null&&(le=n=n.return);continue}break}while(1)}function U1(){var e=Ni.current;return Ni.current=Ei,e===null?Ei:e}function hu(){(ue===0||ue===3||ue===2)&&(ue=4),me===null||!(vn&268435455)&&!(Xi&268435455)||At(me,ge)}function Oi(e,t){var n=j;j|=2;var r=U1();(me!==e||ge!==t)&&(vt=null,cn(e,t));do try{wv();break}catch(a){D1(e,a)}while(1);if(Js(),j=n,Ni.current=r,le!==null)throw Error(k(261));return me=null,ge=0,ue}function wv(){for(;le!==null;)V1(le)}function xv(){for(;le!==null&&!Bm();)V1(le)}function V1(e){var t=B1(e.alternate,e,Me);e.memoizedProps=e.pendingProps,t===null?H1(e):le=t,fu.current=null}function H1(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=mv(n,t),n!==null){n.flags&=32767,le=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ue=6,le=null;return}}else if(n=dv(n,t,Me),n!==null){le=n;return}if(t=t.sibling,t!==null){le=t;return}le=t=e}while(t!==null);ue===0&&(ue=5)}function rn(e,t,n){var r=H,a=Qe.transition;try{Qe.transition=null,H=1,kv(e,t,n,r)}finally{Qe.transition=a,H=r}return null}function kv(e,t,n,r){do Vn();while(Rt!==null);if(j&6)throw Error(k(327));n=e.finishedWork;var a=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(k(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(tp(e,i),e===me&&(le=me=null,ge=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ta||(Ta=!0,Y1(ci,function(){return Vn(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Qe.transition,Qe.transition=null;var o=H;H=1;var l=j;j|=4,fu.current=null,vv(e,n),$1(n,e),Up(Ml),di=!!Al,Ml=Al=null,e.current=n,hv(n),Ym(),j=l,H=o,Qe.transition=i}else e.current=n;if(Ta&&(Ta=!1,Rt=e,Pi=a),i=e.pendingLanes,i===0&&(Ht=null),Gm(n.stateNode),Ie(e,ie()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)a=t[n],r(a.value,{componentStack:a.stack,digest:a.digest});if(_i)throw _i=!1,e=ts,ts=null,e;return Pi&1&&e.tag!==0&&Vn(),i=e.pendingLanes,i&1?e===ns?zr++:(zr=0,ns=e):zr=0,qt(),null}function Vn(){if(Rt!==null){var e=Sd(Pi),t=Qe.transition,n=H;try{if(Qe.transition=null,H=16>e?16:e,Rt===null)var r=!1;else{if(e=Rt,Rt=null,Pi=0,j&6)throw Error(k(331));var a=j;for(j|=4,P=e.current;P!==null;){var i=P,o=i.child;if(P.flags&16){var l=i.deletions;if(l!==null){for(var s=0;s<l.length;s++){var u=l[s];for(P=u;P!==null;){var f=P;switch(f.tag){case 0:case 11:case 15:Pr(8,f,i)}var m=f.child;if(m!==null)m.return=f,P=m;else for(;P!==null;){f=P;var v=f.sibling,g=f.return;if(A1(f),f===u){P=null;break}if(v!==null){v.return=g,P=v;break}P=g}}}var y=i.alternate;if(y!==null){var h=y.child;if(h!==null){y.child=null;do{var N=h.sibling;h.sibling=null,h=N}while(h!==null)}}P=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,P=o;else e:for(;P!==null;){if(i=P,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Pr(9,i,i.return)}var d=i.sibling;if(d!==null){d.return=i.return,P=d;break e}P=i.return}}var c=e.current;for(P=c;P!==null;){o=P;var p=o.child;if(o.subtreeFlags&2064&&p!==null)p.return=o,P=p;else e:for(o=c;P!==null;){if(l=P,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Qi(9,l)}}catch(x){ne(l,l.return,x)}if(l===o){P=null;break e}var w=l.sibling;if(w!==null){w.return=l.return,P=w;break e}P=l.return}}if(j=a,qt(),dt&&typeof dt.onPostCommitFiberRoot=="function")try{dt.onPostCommitFiberRoot(Fi,e)}catch{}r=!0}return r}finally{H=n,Qe.transition=t}}return!1}function ef(e,t,n){t=Kn(n,t),t=C1(e,t,1),e=Vt(e,t,1),t=Ee(),e!==null&&(oa(e,1,t),Ie(e,t))}function ne(e,t,n){if(e.tag===3)ef(e,e,n);else for(;t!==null;){if(t.tag===3){ef(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ht===null||!Ht.has(r))){e=Kn(n,e),e=b1(t,e,1),t=Vt(t,e,1),e=Ee(),t!==null&&(oa(t,1,e),Ie(t,e));break}}t=t.return}}function Sv(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ee(),e.pingedLanes|=e.suspendedLanes&n,me===e&&(ge&n)===n&&(ue===4||ue===3&&(ge&130023424)===ge&&500>ie()-mu?cn(e,0):du|=n),Ie(e,t)}function W1(e,t){t===0&&(e.mode&1?(t=ka,ka<<=1,!(ka&130023424)&&(ka=4194304)):t=1);var n=Ee();e=St(e,t),e!==null&&(oa(e,t,n),Ie(e,n))}function Cv(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),W1(e,n)}function bv(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(k(314))}r!==null&&r.delete(t),W1(e,n)}var B1;B1=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Te.current)ze=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return ze=!1,fv(e,t,n);ze=!!(e.flags&131072)}else ze=!1,Z&&t.flags&1048576&&Xd(t,wi,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Ja(e,t),e=t.pendingProps;var a=Yn(t,Ce.current);Un(t,n),a=ou(null,t,r,e,a,n);var i=lu();return t.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Le(r)?(i=!0,gi(t)):i=!1,t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,tu(t),a.updater=Bi,t.stateNode=a,a._reactInternals=t,Wl(t,r,e,n),t=Ql(null,t,r,!0,i,n)):(t.tag=0,Z&&i&&Xs(t),be(null,t,a,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Ja(e,t),e=t.pendingProps,a=r._init,r=a(r._payload),t.type=r,a=t.tag=Nv(r),e=qe(r,e),a){case 0:t=Yl(null,t,r,e,n);break e;case 1:t=Wc(null,t,r,e,n);break e;case 11:t=Vc(null,t,r,e,n);break e;case 14:t=Hc(null,t,r,qe(r.type,e),n);break e}throw Error(k(306,r,""))}return t;case 0:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:qe(r,a),Yl(e,t,r,a,n);case 1:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:qe(r,a),Wc(e,t,r,a,n);case 3:e:{if(P1(t),e===null)throw Error(k(387));r=t.pendingProps,i=t.memoizedState,a=i.element,Jd(e,t),Si(t,r,null,n);var o=t.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){a=Kn(Error(k(423)),t),t=Bc(e,t,r,n,a);break e}else if(r!==a){a=Kn(Error(k(424)),t),t=Bc(e,t,r,n,a);break e}else for(Re=Ut(t.stateNode.containerInfo.firstChild),$e=t,Z=!0,tt=null,n=n1(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Qn(),r===a){t=Ct(e,t,n);break e}be(e,t,r,n)}t=t.child}return t;case 5:return r1(t),e===null&&Ul(t),r=t.type,a=t.pendingProps,i=e!==null?e.memoizedProps:null,o=a.children,Rl(r,a)?o=null:i!==null&&Rl(r,i)&&(t.flags|=32),_1(e,t),be(e,t,o,n),t.child;case 6:return e===null&&Ul(t),null;case 13:return O1(e,t,n);case 4:return nu(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Xn(t,null,r,n):be(e,t,r,n),t.child;case 11:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:qe(r,a),Vc(e,t,r,a,n);case 7:return be(e,t,t.pendingProps,n),t.child;case 8:return be(e,t,t.pendingProps.children,n),t.child;case 12:return be(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,a=t.pendingProps,i=t.memoizedProps,o=a.value,Y(xi,r._currentValue),r._currentValue=o,i!==null)if(it(i.value,o)){if(i.children===a.children&&!Te.current){t=Ct(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var l=i.dependencies;if(l!==null){o=i.child;for(var s=l.firstContext;s!==null;){if(s.context===r){if(i.tag===1){s=wt(-1,n&-n),s.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?s.next=s:(s.next=f.next,f.next=s),u.pending=s}}i.lanes|=n,s=i.alternate,s!==null&&(s.lanes|=n),Vl(i.return,n,t),l.lanes|=n;break}s=s.next}}else if(i.tag===10)o=i.type===t.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(k(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Vl(o,n,t),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===t){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}be(e,t,a.children,n),t=t.child}return t;case 9:return a=t.type,r=t.pendingProps.children,Un(t,n),a=Xe(a),r=r(a),t.flags|=1,be(e,t,r,n),t.child;case 14:return r=t.type,a=qe(r,t.pendingProps),a=qe(r.type,a),Hc(e,t,r,a,n);case 15:return E1(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:qe(r,a),Ja(e,t),t.tag=1,Le(r)?(e=!0,gi(t)):e=!1,Un(t,n),e1(t,r,a),Wl(t,r,a,n),Ql(null,t,r,!0,e,n);case 19:return z1(e,t,n);case 22:return N1(e,t,n)}throw Error(k(156,t.tag))};function Y1(e,t){return yd(e,t)}function Ev(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ye(e,t,n,r){return new Ev(e,t,n,r)}function gu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Nv(e){if(typeof e=="function")return gu(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Rs)return 11;if(e===$s)return 14}return 2}function Bt(e,t){var n=e.alternate;return n===null?(n=Ye(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function ti(e,t,n,r,a,i){var o=2;if(r=e,typeof e=="function")gu(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Cn:return fn(n.children,a,i,t);case Ms:o=8,a|=8;break;case pl:return e=Ye(12,n,t,a|2),e.elementType=pl,e.lanes=i,e;case vl:return e=Ye(13,n,t,a),e.elementType=vl,e.lanes=i,e;case hl:return e=Ye(19,n,t,a),e.elementType=hl,e.lanes=i,e;case td:return Gi(n,a,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case qf:o=10;break e;case ed:o=9;break e;case Rs:o=11;break e;case $s:o=14;break e;case Tt:o=16,r=null;break e}throw Error(k(130,e==null?e:typeof e,""))}return t=Ye(o,n,t,a),t.elementType=e,t.type=r,t.lanes=i,t}function fn(e,t,n,r){return e=Ye(7,e,r,t),e.lanes=n,e}function Gi(e,t,n,r){return e=Ye(22,e,r,t),e.elementType=td,e.lanes=n,e.stateNode={isHidden:!1},e}function tl(e,t,n){return e=Ye(6,e,null,t),e.lanes=n,e}function nl(e,t,n){return t=Ye(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function _v(e,t,n,r,a){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ro(0),this.expirationTimes=Ro(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ro(0),this.identifierPrefix=r,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function yu(e,t,n,r,a,i,o,l,s){return e=new _v(e,t,n,l,s),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Ye(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},tu(i),e}function Pv(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Sn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Q1(e){if(!e)return Qt;e=e._reactInternals;e:{if(xn(e)!==e||e.tag!==1)throw Error(k(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Le(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(k(171))}if(e.tag===1){var n=e.type;if(Le(n))return Yd(e,n,t)}return t}function X1(e,t,n,r,a,i,o,l,s){return e=yu(n,r,!0,e,a,i,o,l,s),e.context=Q1(null),n=e.current,r=Ee(),a=Wt(n),i=wt(r,a),i.callback=t??null,Vt(n,i,a),e.current.lanes=a,oa(e,a,r),Ie(e,r),e}function Ki(e,t,n,r){var a=t.current,i=Ee(),o=Wt(a);return n=Q1(n),t.context===null?t.context=n:t.pendingContext=n,t=wt(i,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Vt(a,t,o),e!==null&&(at(e,a,o,i),Ga(e,a,o)),o}function zi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function tf(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function wu(e,t){tf(e,t),(e=e.alternate)&&tf(e,t)}function Ov(){return null}var G1=typeof reportError=="function"?reportError:function(e){console.error(e)};function xu(e){this._internalRoot=e}Zi.prototype.render=xu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(k(409));Ki(e,t,null,null)};Zi.prototype.unmount=xu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;hn(function(){Ki(null,e,null,null)}),t[kt]=null}};function Zi(e){this._internalRoot=e}Zi.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ed();e={blockedOn:null,target:e,priority:t};for(var n=0;n<It.length&&t!==0&&t<It[n].priority;n++);It.splice(n,0,e),n===0&&_d(e)}};function ku(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ji(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function nf(){}function zv(e,t,n,r,a){if(a){if(typeof r=="function"){var i=r;r=function(){var u=zi(o);i.call(u)}}var o=X1(t,r,e,0,null,!1,!1,"",nf);return e._reactRootContainer=o,e[kt]=o.current,Vr(e.nodeType===8?e.parentNode:e),hn(),o}for(;a=e.lastChild;)e.removeChild(a);if(typeof r=="function"){var l=r;r=function(){var u=zi(s);l.call(u)}}var s=yu(e,0,!1,null,null,!1,!1,"",nf);return e._reactRootContainer=s,e[kt]=s.current,Vr(e.nodeType===8?e.parentNode:e),hn(function(){Ki(t,s,n,r)}),s}function qi(e,t,n,r,a){var i=n._reactRootContainer;if(i){var o=i;if(typeof a=="function"){var l=a;a=function(){var s=zi(o);l.call(s)}}Ki(t,o,e,a)}else o=zv(n,t,e,a,r);return zi(o)}Cd=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=wr(t.pendingLanes);n!==0&&(Ds(t,n|1),Ie(t,ie()),!(j&6)&&(Zn=ie()+500,qt()))}break;case 13:hn(function(){var r=St(e,1);if(r!==null){var a=Ee();at(r,e,1,a)}}),wu(e,1)}};Us=function(e){if(e.tag===13){var t=St(e,134217728);if(t!==null){var n=Ee();at(t,e,134217728,n)}wu(e,134217728)}};bd=function(e){if(e.tag===13){var t=Wt(e),n=St(e,t);if(n!==null){var r=Ee();at(n,e,t,r)}wu(e,t)}};Ed=function(){return H};Nd=function(e,t){var n=H;try{return H=e,t()}finally{H=n}};Nl=function(e,t,n){switch(t){case"input":if(wl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=Hi(r);if(!a)throw Error(k(90));rd(r),wl(r,a)}}}break;case"textarea":id(e,n);break;case"select":t=n.value,t!=null&&$n(e,!!n.multiple,t,!1)}};dd=pu;md=hn;var Tv={usingClientEntryPoint:!1,Events:[sa,_n,Hi,cd,fd,pu]},vr={findFiberByHostInstance:an,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Lv={bundleType:vr.bundleType,version:vr.version,rendererPackageName:vr.rendererPackageName,rendererConfig:vr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:_t.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=hd(e),e===null?null:e.stateNode},findFiberByHostInstance:vr.findFiberByHostInstance||Ov,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var La=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!La.isDisabled&&La.supportsFiber)try{Fi=La.inject(Lv),dt=La}catch{}}De.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Tv;De.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ku(t))throw Error(k(200));return Pv(e,t,null,n)};De.createRoot=function(e,t){if(!ku(e))throw Error(k(299));var n=!1,r="",a=G1;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),t=yu(e,1,!1,null,null,n,!1,r,a),e[kt]=t.current,Vr(e.nodeType===8?e.parentNode:e),new xu(t)};De.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(k(188)):(e=Object.keys(e).join(","),Error(k(268,e)));return e=hd(t),e=e===null?null:e.stateNode,e};De.flushSync=function(e){return hn(e)};De.hydrate=function(e,t,n){if(!Ji(t))throw Error(k(200));return qi(null,e,t,!0,n)};De.hydrateRoot=function(e,t,n){if(!ku(e))throw Error(k(405));var r=n!=null&&n.hydratedSources||null,a=!1,i="",o=G1;if(n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=X1(t,null,e,1,n??null,a,!1,i,o),e[kt]=t.current,Vr(e),r)for(e=0;e<r.length;e++)n=r[e],a=n._getVersion,a=a(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,a]:t.mutableSourceEagerHydrationData.push(n,a);return new Zi(t)};De.render=function(e,t,n){if(!Ji(t))throw Error(k(200));return qi(null,e,t,!1,n)};De.unmountComponentAtNode=function(e){if(!Ji(e))throw Error(k(40));return e._reactRootContainer?(hn(function(){qi(null,null,e,!1,function(){e._reactRootContainer=null,e[kt]=null})}),!0):!1};De.unstable_batchedUpdates=pu;De.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ji(n))throw Error(k(200));if(e==null||e._reactInternals===void 0)throw Error(k(38));return qi(e,t,n,!1,r)};De.version="18.2.0-next-9e3b772b8-20220608";(function(e){function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}t(),e.exports=De})(Om);var rf=fl;cl.createRoot=rf.createRoot,cl.hydrateRoot=rf.hydrateRoot;var Iv={prefix:"fab",iconName:"java",icon:[384,512,[],"f4e4","M277.74 312.9c9.8-6.7 23.4-12.5 23.4-12.5s-38.7 7-77.2 10.2c-47.1 3.9-97.7 4.7-123.1 1.3-60.1-8 33-30.1 33-30.1s-36.1-2.4-80.6 19c-52.5 25.4 130 37 224.5 12.1zm-85.4-32.1c-19-42.7-83.1-80.2 0-145.8C296 53.2 242.84 0 242.84 0c21.5 84.5-75.6 110.1-110.7 162.6-23.9 35.9 11.7 74.4 60.2 118.2zm114.6-176.2c.1 0-175.2 43.8-91.5 140.2 24.7 28.4-6.5 54-6.5 54s62.7-32.4 33.9-72.9c-26.9-37.8-47.5-56.6 64.1-121.3zm-6.1 270.5a12.19 12.19 0 0 1-2 2.6c128.3-33.7 81.1-118.9 19.8-97.3a17.33 17.33 0 0 0-8.2 6.3 70.45 70.45 0 0 1 11-3c31-6.5 75.5 41.5-20.6 91.4zM348 437.4s14.5 11.9-15.9 21.2c-57.9 17.5-240.8 22.8-291.6.7-18.3-7.9 16-19 26.8-21.3 11.2-2.4 17.7-2 17.7-2-20.3-14.3-131.3 28.1-56.4 40.2C232.84 509.4 401 461.3 348 437.4zM124.44 396c-78.7 22 47.9 67.4 148.1 24.5a185.89 185.89 0 0 1-28.2-13.8c-44.7 8.5-65.4 9.1-106 4.5-33.5-3.8-13.9-15.2-13.9-15.2zm179.8 97.2c-78.7 14.8-175.8 13.1-233.3 3.6 0-.1 11.8 9.7 72.4 13.6 92.2 5.9 233.8-3.3 237.1-46.9 0 0-6.4 16.5-76.2 29.7zM260.64 353c-59.2 11.4-93.5 11.1-136.8 6.6-33.5-3.5-11.6-19.7-11.6-19.7-86.8 28.8 48.2 61.4 169.5 25.9a60.37 60.37 0 0 1-21.1-12.8z"]},Av={prefix:"fab",iconName:"css3-alt",icon:[384,512,[],"f38b","M0 32l34.9 395.8L192 480l157.1-52.2L384 32H0zm313.1 80l-4.8 47.3L193 208.6l-.3.1h111.5l-12.8 146.6-98.2 28.7-98.8-29.2-6.4-73.9h48.9l3.2 38.3 52.6 13.3 54.7-15.4 3.7-61.6-166.3-.5v-.1l-.2.1-3.6-46.3L193.1 162l6.5-2.7H76.7L70.9 112h242.2z"]},Mv={prefix:"fab",iconName:"git-alt",icon:[448,512,[],"f841","M439.55 236.05L244 40.45a28.87 28.87 0 0 0-40.81 0l-40.66 40.63 51.52 51.52c27.06-9.14 52.68 16.77 43.39 43.68l49.66 49.66c34.23-11.8 61.18 31 35.47 56.69-26.49 26.49-70.21-2.87-56-37.34L240.22 199v121.85c25.3 12.54 22.26 41.85 9.08 55a34.34 34.34 0 0 1-48.55 0c-17.57-17.6-11.07-46.91 11.25-56v-123c-20.8-8.51-24.6-30.74-18.64-45L142.57 101 8.45 235.14a28.86 28.86 0 0 0 0 40.81l195.61 195.6a28.86 28.86 0 0 0 40.8 0l194.69-194.69a28.86 28.86 0 0 0 0-40.81z"]},Rv={prefix:"fab",iconName:"node",icon:[640,512,[],"f419","M316.3 452c-2.1 0-4.2-.6-6.1-1.6L291 439c-2.9-1.6-1.5-2.2-.5-2.5 3.8-1.3 4.6-1.6 8.7-4 .4-.2 1-.1 1.4.1l14.8 8.8c.5.3 1.3.3 1.8 0L375 408c.5-.3.9-.9.9-1.6v-66.7c0-.7-.3-1.3-.9-1.6l-57.8-33.3c-.5-.3-1.2-.3-1.8 0l-57.8 33.3c-.6.3-.9 1-.9 1.6v66.7c0 .6.4 1.2.9 1.5l15.8 9.1c8.6 4.3 13.9-.8 13.9-5.8v-65.9c0-.9.7-1.7 1.7-1.7h7.3c.9 0 1.7.7 1.7 1.7v65.9c0 11.5-6.2 18-17.1 18-3.3 0-6 0-13.3-3.6l-15.2-8.7c-3.7-2.2-6.1-6.2-6.1-10.5v-66.7c0-4.3 2.3-8.4 6.1-10.5l57.8-33.4c3.7-2.1 8.5-2.1 12.1 0l57.8 33.4c3.7 2.2 6.1 6.2 6.1 10.5v66.7c0 4.3-2.3 8.4-6.1 10.5l-57.8 33.4c-1.7 1.1-3.8 1.7-6 1.7zm46.7-65.8c0-12.5-8.4-15.8-26.2-18.2-18-2.4-19.8-3.6-19.8-7.8 0-3.5 1.5-8.1 14.8-8.1 11.9 0 16.3 2.6 18.1 10.6.2.8.8 1.3 1.6 1.3h7.5c.5 0 .9-.2 1.2-.5.3-.4.5-.8.4-1.3-1.2-13.8-10.3-20.2-28.8-20.2-16.5 0-26.3 7-26.3 18.6 0 12.7 9.8 16.1 25.6 17.7 18.9 1.9 20.4 4.6 20.4 8.3 0 6.5-5.2 9.2-17.4 9.2-15.3 0-18.7-3.8-19.8-11.4-.1-.8-.8-1.4-1.7-1.4h-7.5c-.9 0-1.7.7-1.7 1.7 0 9.7 5.3 21.3 30.6 21.3 18.5 0 29-7.2 29-19.8zm54.5-50.1c0 6.1-5 11.1-11.1 11.1s-11.1-5-11.1-11.1c0-6.3 5.2-11.1 11.1-11.1 6-.1 11.1 4.8 11.1 11.1zm-1.8 0c0-5.2-4.2-9.3-9.4-9.3-5.1 0-9.3 4.1-9.3 9.3 0 5.2 4.2 9.4 9.3 9.4 5.2-.1 9.4-4.3 9.4-9.4zm-4.5 6.2h-2.6c-.1-.6-.5-3.8-.5-3.9-.2-.7-.4-1.1-1.3-1.1h-2.2v5h-2.4v-12.5h4.3c1.5 0 4.4 0 4.4 3.3 0 2.3-1.5 2.8-2.4 3.1 1.7.1 1.8 1.2 2.1 2.8.1 1 .3 2.7.6 3.3zm-2.8-8.8c0-1.7-1.2-1.7-1.8-1.7h-2v3.5h1.9c1.6 0 1.9-1.1 1.9-1.8zM137.3 191c0-2.7-1.4-5.1-3.7-6.4l-61.3-35.3c-1-.6-2.2-.9-3.4-1h-.6c-1.2 0-2.3.4-3.4 1L3.7 184.6C1.4 185.9 0 188.4 0 191l.1 95c0 1.3.7 2.5 1.8 3.2 1.1.7 2.5.7 3.7 0L42 268.3c2.3-1.4 3.7-3.8 3.7-6.4v-44.4c0-2.6 1.4-5.1 3.7-6.4l15.5-8.9c1.2-.7 2.4-1 3.7-1 1.3 0 2.6.3 3.7 1l15.5 8.9c2.3 1.3 3.7 3.8 3.7 6.4v44.4c0 2.6 1.4 5.1 3.7 6.4l36.4 20.9c1.1.7 2.6.7 3.7 0 1.1-.6 1.8-1.9 1.8-3.2l.2-95zM472.5 87.3v176.4c0 2.6-1.4 5.1-3.7 6.4l-61.3 35.4c-2.3 1.3-5.1 1.3-7.4 0l-61.3-35.4c-2.3-1.3-3.7-3.8-3.7-6.4v-70.8c0-2.6 1.4-5.1 3.7-6.4l61.3-35.4c2.3-1.3 5.1-1.3 7.4 0l15.3 8.8c1.7 1 3.9-.3 3.9-2.2v-94c0-2.8 3-4.6 5.5-3.2l36.5 20.4c2.3 1.2 3.8 3.7 3.8 6.4zm-46 128.9c0-.7-.4-1.3-.9-1.6l-21-12.2c-.6-.3-1.3-.3-1.9 0l-21 12.2c-.6.3-.9.9-.9 1.6v24.3c0 .7.4 1.3.9 1.6l21 12.1c.6.3 1.3.3 1.8 0l21-12.1c.6-.3.9-.9.9-1.6v-24.3zm209.8-.7c2.3-1.3 3.7-3.8 3.7-6.4V192c0-2.6-1.4-5.1-3.7-6.4l-60.9-35.4c-2.3-1.3-5.1-1.3-7.4 0l-61.3 35.4c-2.3 1.3-3.7 3.8-3.7 6.4v70.8c0 2.7 1.4 5.1 3.7 6.4l60.9 34.7c2.2 1.3 5 1.3 7.3 0l36.8-20.5c2.5-1.4 2.5-5 0-6.4L550 241.6c-1.2-.7-1.9-1.9-1.9-3.2v-22.2c0-1.3.7-2.5 1.9-3.2l19.2-11.1c1.1-.7 2.6-.7 3.7 0l19.2 11.1c1.1.7 1.9 1.9 1.9 3.2v17.4c0 2.8 3.1 4.6 5.6 3.2l36.7-21.3zM559 219c-.4.3-.7.7-.7 1.2v13.6c0 .5.3 1 .7 1.2l11.8 6.8c.4.3 1 .3 1.4 0L584 235c.4-.3.7-.7.7-1.2v-13.6c0-.5-.3-1-.7-1.2l-11.8-6.8c-.4-.3-1-.3-1.4 0L559 219zm-254.2 43.5v-70.4c0-2.6-1.6-5.1-3.9-6.4l-61.1-35.2c-2.1-1.2-5-1.4-7.4 0l-61.1 35.2c-2.3 1.3-3.9 3.7-3.9 6.4v70.4c0 2.8 1.9 5.2 4 6.4l61.2 35.2c2.4 1.4 5.2 1.3 7.4 0l61-35.2c1.8-1 3.1-2.7 3.6-4.7.1-.5.2-1.1.2-1.7zm-74.3-124.9l-.8.5h1.1l-.3-.5zm76.2 130.2l-.4-.7v.9l.4-.2z"]},K1={prefix:"fab",iconName:"react",icon:[512,512,[],"f41b","M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z"]},$v={prefix:"fab",iconName:"bootstrap",icon:[576,512,[],"f836","M333.5,201.4c0-22.1-15.6-34.3-43-34.3h-50.4v71.2h42.5C315.4,238.2,333.5,225,333.5,201.4z M517,188.6 c-9.5-30.9-10.9-68.8-9.8-98.1c1.1-30.5-22.7-58.5-54.7-58.5H123.7c-32.1,0-55.8,28.1-54.7,58.5c1,29.3-0.3,67.2-9.8,98.1 c-9.6,31-25.7,50.6-52.2,53.1v28.5c26.4,2.5,42.6,22.1,52.2,53.1c9.5,30.9,10.9,68.8,9.8,98.1c-1.1,30.5,22.7,58.5,54.7,58.5h328.7 c32.1,0,55.8-28.1,54.7-58.5c-1-29.3,0.3-67.2,9.8-98.1c9.6-31,25.7-50.6,52.1-53.1v-28.5C542.7,239.2,526.5,219.6,517,188.6z M300.2,375.1h-97.9V136.8h97.4c43.3,0,71.7,23.4,71.7,59.4c0,25.3-19.1,47.9-43.5,51.8v1.3c33.2,3.6,55.5,26.6,55.5,58.3 C383.4,349.7,352.1,375.1,300.2,375.1z M290.2,266.4h-50.1v78.4h52.3c34.2,0,52.3-13.7,52.3-39.5 C344.7,279.6,326.1,266.4,290.2,266.4z"]},jv={prefix:"fab",iconName:"linkedin",icon:[448,512,[],"f08c","M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"]},Fv={prefix:"fab",iconName:"figma",icon:[384,512,[],"f799","M14 95.7924C14 42.8877 56.8878 0 109.793 0H274.161C327.066 0 369.954 42.8877 369.954 95.7924C369.954 129.292 352.758 158.776 326.711 175.897C352.758 193.019 369.954 222.502 369.954 256.002C369.954 308.907 327.066 351.795 274.161 351.795H272.081C247.279 351.795 224.678 342.369 207.666 326.904V415.167C207.666 468.777 163.657 512 110.309 512C57.5361 512 14 469.243 14 416.207C14 382.709 31.1945 353.227 57.2392 336.105C31.1945 318.983 14 289.5 14 256.002C14 222.502 31.196 193.019 57.2425 175.897C31.196 158.776 14 129.292 14 95.7924ZM176.288 191.587H109.793C74.2172 191.587 45.3778 220.427 45.3778 256.002C45.3778 291.44 73.9948 320.194 109.381 320.416C109.518 320.415 109.655 320.415 109.793 320.415H176.288V191.587ZM207.666 256.002C207.666 291.577 236.505 320.417 272.081 320.417H274.161C309.737 320.417 338.576 291.577 338.576 256.002C338.576 220.427 309.737 191.587 274.161 191.587H272.081C236.505 191.587 207.666 220.427 207.666 256.002ZM109.793 351.795C109.655 351.795 109.518 351.794 109.381 351.794C73.9948 352.015 45.3778 380.769 45.3778 416.207C45.3778 451.652 74.6025 480.622 110.309 480.622C146.591 480.622 176.288 451.186 176.288 415.167V351.795H109.793ZM109.793 31.3778C74.2172 31.3778 45.3778 60.2173 45.3778 95.7924C45.3778 131.368 74.2172 160.207 109.793 160.207H176.288V31.3778H109.793ZM207.666 160.207H274.161C309.737 160.207 338.576 131.368 338.576 95.7924C338.576 60.2173 309.737 31.3778 274.161 31.3778H207.666V160.207Z"]},Dv={prefix:"fab",iconName:"html5",icon:[384,512,[],"f13b","M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z"]},Uv={prefix:"fab",iconName:"js",icon:[448,512,[],"f3b8","M0 32v448h448V32H0zm243.8 349.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z"]},Z1={prefix:"fab",iconName:"github",icon:[496,512,[],"f09b","M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"]},Vv={prefix:"fab",iconName:"php",icon:[640,512,[],"f457","M320 104.5c171.4 0 303.2 72.2 303.2 151.5S491.3 407.5 320 407.5c-171.4 0-303.2-72.2-303.2-151.5S148.7 104.5 320 104.5m0-16.8C143.3 87.7 0 163 0 256s143.3 168.3 320 168.3S640 349 640 256 496.7 87.7 320 87.7zM218.2 242.5c-7.9 40.5-35.8 36.3-70.1 36.3l13.7-70.6c38 0 63.8-4.1 56.4 34.3zM97.4 350.3h36.7l8.7-44.8c41.1 0 66.6 3 90.2-19.1 26.1-24 32.9-66.7 14.3-88.1-9.7-11.2-25.3-16.7-46.5-16.7h-70.7L97.4 350.3zm185.7-213.6h36.5l-8.7 44.8c31.5 0 60.7-2.3 74.8 10.7 14.8 13.6 7.7 31-8.3 113.1h-37c15.4-79.4 18.3-86 12.7-92-5.4-5.8-17.7-4.6-47.4-4.6l-18.8 96.6h-36.5l32.7-168.6zM505 242.5c-8 41.1-36.7 36.3-70.1 36.3l13.7-70.6c38.2 0 63.8-4.1 56.4 34.3zM384.2 350.3H421l8.7-44.8c43.2 0 67.1 2.5 90.2-19.1 26.1-24 32.9-66.7 14.3-88.1-9.7-11.2-25.3-16.7-46.5-16.7H417l-32.8 168.7z"]},Hv={prefix:"fab",iconName:"twitter",icon:[512,512,[],"f099","M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"]};const Wv="/portfolio_vite/assets/img_ecommerce-54b59ca0.gif",Bv="/portfolio_vite/assets/videogame-d00ae553.gif",Yv="/portfolio_vite/assets/HypeShop-60707964.png",Qv="/portfolio_vite/assets/portfolio-18d7786f.gif",Xv=[{id:1,schoolName:"Ulp universidad de la punta San Luis (Argentina)",specialization:"Tecnico en Desarrollo de software",learning:"Estructuras de datos y algoritmos, administración de bases de datos, ingeniería de software, Java, Php, Sql, C++, Javascript, Html, Css."},{id:2,schoolName:"SoyHenry (Bootcamp)",specialization:"Desarrollador Full Stack",learning:"conocimientos adquiridos: Figma, HTML, CSS, JavaScript, React JS, Node.js, SQL, Express, PostgreSQL, Sequelize, MongoDB, Mongoose"}],Gv=[{id:1,name:"React",icon:K1},{id:2,name:"JavaScript",icon:Uv},{id:3,name:"HTML",icon:Dv},{id:4,name:"CSS",icon:Av},{id:5,name:"Bootstrap",icon:$v},{id:6,name:"Git",icon:Mv},{id:8,name:"Figma",icon:Fv},{id:9,name:"Php",icon:Vv},{id:10,name:"Java",icon:Iv},{id:11,name:"Node",icon:Rv}],Kv=[{id:1,imgSrc:Wv,alt:"ecommerce",projectName:"e-commerce Tech World",technologies:"JavaScript, Html, Tailwind, React.js, Redux, Node.js, Express, MongoDb y Mongoose.",description:"un e-commerce para la venta de diversos productos electrónicos. Ofrecemos un sistema de inicio de sesión y registro tanto local como a través de terceros.",projectLink:"https://www.techwolrd.store/",githubLink:"https://github.com/damianf2022/TechWorld"},{id:2,imgSrc:Qv,alt:"portfolio",projectName:"Portfolio",technologies:"JavaScript, Html, tailwind, React.js.",description:"mi portfolio hecho con vite & react.",projectLink:"https://damianf2022.github.io/portfolio_vite/",githubLink:"https://github.com/damianf2022/portfolio_vite"},{id:3,imgSrc:Bv,alt:"videoGame",projectName:"Libreria de Video Juegos",technologies:"JavaScript, Html, css, React.js, Redux, Node.js, Express, PostgreSql y Sequelize.",description:"Una app de libreria de videojuegos que muestra diferentes tipos de juegos organizados por tarjetas.",projectLink:"",githubLink:"https://github.com/damianf2022/Videos-Juegos"},{id:4,imgSrc:Yv,alt:"ecommerce",projectName:"e-commerce Hype Shop",technologies:"JavaScript, Html, css, React.js, Redux, Node.js, Express, PostgreSql y Sequelize.",description:"un e-commerce para la venta de diferentes tipos de calzados.",projectLink:"https://hype-gamma.vercel.app/",githubLink:"https://github.com/damianf2022/PF-Hype-Shop"}],Zv="/portfolio_vite/assets/Avatar-Profile-Vector-9a7b892a.png";function Jv(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function qv(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var e2=function(){function e(n){var r=this;this._insertTag=function(a){var i;r.tags.length===0?r.insertionPoint?i=r.insertionPoint.nextSibling:r.prepend?i=r.container.firstChild:i=r.before:i=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(a,i),r.tags.push(a)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(r){r.forEach(this._insertTag)},t.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(qv(this));var a=this.tags[this.tags.length-1];if(this.isSpeedy){var i=Jv(a);try{i.insertRule(r,i.cssRules.length)}catch{}}else a.appendChild(document.createTextNode(r));this.ctr++},t.flush=function(){this.tags.forEach(function(r){return r.parentNode&&r.parentNode.removeChild(r)}),this.tags=[],this.ctr=0},e}(),ke="-ms-",Ti="-moz-",F="-webkit-",J1="comm",Su="rule",Cu="decl",t2="@import",q1="@keyframes",n2=Math.abs,eo=String.fromCharCode,r2=Object.assign;function a2(e,t){return he(e,0)^45?(((t<<2^he(e,0))<<2^he(e,1))<<2^he(e,2))<<2^he(e,3):0}function e0(e){return e.trim()}function i2(e,t){return(e=t.exec(e))?e[0]:e}function U(e,t,n){return e.replace(t,n)}function is(e,t){return e.indexOf(t)}function he(e,t){return e.charCodeAt(t)|0}function Zr(e,t,n){return e.slice(t,n)}function st(e){return e.length}function bu(e){return e.length}function Ia(e,t){return t.push(e),e}function o2(e,t){return e.map(t).join("")}var to=1,Jn=1,t0=0,Ae=0,oe=0,rr="";function no(e,t,n,r,a,i,o){return{value:e,root:t,parent:n,type:r,props:a,children:i,line:to,column:Jn,length:o,return:""}}function hr(e,t){return r2(no("",null,null,"",null,null,0),e,{length:-e.length},t)}function l2(){return oe}function s2(){return oe=Ae>0?he(rr,--Ae):0,Jn--,oe===10&&(Jn=1,to--),oe}function je(){return oe=Ae<t0?he(rr,Ae++):0,Jn++,oe===10&&(Jn=1,to++),oe}function pt(){return he(rr,Ae)}function ni(){return Ae}function ca(e,t){return Zr(rr,e,t)}function Jr(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function n0(e){return to=Jn=1,t0=st(rr=e),Ae=0,[]}function r0(e){return rr="",e}function ri(e){return e0(ca(Ae-1,os(e===91?e+2:e===40?e+1:e)))}function u2(e){for(;(oe=pt())&&oe<33;)je();return Jr(e)>2||Jr(oe)>3?"":" "}function c2(e,t){for(;--t&&je()&&!(oe<48||oe>102||oe>57&&oe<65||oe>70&&oe<97););return ca(e,ni()+(t<6&&pt()==32&&je()==32))}function os(e){for(;je();)switch(oe){case e:return Ae;case 34:case 39:e!==34&&e!==39&&os(oe);break;case 40:e===41&&os(e);break;case 92:je();break}return Ae}function f2(e,t){for(;je()&&e+oe!==47+10;)if(e+oe===42+42&&pt()===47)break;return"/*"+ca(t,Ae-1)+"*"+eo(e===47?e:je())}function d2(e){for(;!Jr(pt());)je();return ca(e,Ae)}function m2(e){return r0(ai("",null,null,null,[""],e=n0(e),0,[0],e))}function ai(e,t,n,r,a,i,o,l,s){for(var u=0,f=0,m=o,v=0,g=0,y=0,h=1,N=1,d=1,c=0,p="",w=a,x=i,E=r,S=p;N;)switch(y=c,c=je()){case 40:if(y!=108&&he(S,m-1)==58){is(S+=U(ri(c),"&","&\f"),"&\f")!=-1&&(d=-1);break}case 34:case 39:case 91:S+=ri(c);break;case 9:case 10:case 13:case 32:S+=u2(y);break;case 92:S+=c2(ni()-1,7);continue;case 47:switch(pt()){case 42:case 47:Ia(p2(f2(je(),ni()),t,n),s);break;default:S+="/"}break;case 123*h:l[u++]=st(S)*d;case 125*h:case 59:case 0:switch(c){case 0:case 125:N=0;case 59+f:g>0&&st(S)-m&&Ia(g>32?of(S+";",r,n,m-1):of(U(S," ","")+";",r,n,m-2),s);break;case 59:S+=";";default:if(Ia(E=af(S,t,n,u,f,a,l,p,w=[],x=[],m),i),c===123)if(f===0)ai(S,t,E,E,w,i,m,l,x);else switch(v===99&&he(S,3)===110?100:v){case 100:case 109:case 115:ai(e,E,E,r&&Ia(af(e,E,E,0,0,a,l,p,a,w=[],m),x),a,x,m,l,r?w:x);break;default:ai(S,E,E,E,[""],x,0,l,x)}}u=f=g=0,h=d=1,p=S="",m=o;break;case 58:m=1+st(S),g=y;default:if(h<1){if(c==123)--h;else if(c==125&&h++==0&&s2()==125)continue}switch(S+=eo(c),c*h){case 38:d=f>0?1:(S+="\f",-1);break;case 44:l[u++]=(st(S)-1)*d,d=1;break;case 64:pt()===45&&(S+=ri(je())),v=pt(),f=m=st(p=S+=d2(ni())),c++;break;case 45:y===45&&st(S)==2&&(h=0)}}return i}function af(e,t,n,r,a,i,o,l,s,u,f){for(var m=a-1,v=a===0?i:[""],g=bu(v),y=0,h=0,N=0;y<r;++y)for(var d=0,c=Zr(e,m+1,m=n2(h=o[y])),p=e;d<g;++d)(p=e0(h>0?v[d]+" "+c:U(c,/&\f/g,v[d])))&&(s[N++]=p);return no(e,t,n,a===0?Su:l,s,u,f)}function p2(e,t,n){return no(e,t,n,J1,eo(l2()),Zr(e,2,-2),0)}function of(e,t,n,r){return no(e,t,n,Cu,Zr(e,0,r),Zr(e,r+1,-1),r)}function Hn(e,t){for(var n="",r=bu(e),a=0;a<r;a++)n+=t(e[a],a,e,t)||"";return n}function v2(e,t,n,r){switch(e.type){case t2:case Cu:return e.return=e.return||e.value;case J1:return"";case q1:return e.return=e.value+"{"+Hn(e.children,r)+"}";case Su:e.value=e.props.join(",")}return st(n=Hn(e.children,r))?e.return=e.value+"{"+n+"}":""}function h2(e){var t=bu(e);return function(n,r,a,i){for(var o="",l=0;l<t;l++)o+=e[l](n,r,a,i)||"";return o}}function g2(e){return function(t){t.root||(t=t.return)&&e(t)}}function y2(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var w2=function(t,n,r){for(var a=0,i=0;a=i,i=pt(),a===38&&i===12&&(n[r]=1),!Jr(i);)je();return ca(t,Ae)},x2=function(t,n){var r=-1,a=44;do switch(Jr(a)){case 0:a===38&&pt()===12&&(n[r]=1),t[r]+=w2(Ae-1,n,r);break;case 2:t[r]+=ri(a);break;case 4:if(a===44){t[++r]=pt()===58?"&\f":"",n[r]=t[r].length;break}default:t[r]+=eo(a)}while(a=je());return t},k2=function(t,n){return r0(x2(n0(t),n))},lf=new WeakMap,S2=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var n=t.value,r=t.parent,a=t.column===r.column&&t.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(t.props.length===1&&n.charCodeAt(0)!==58&&!lf.get(r))&&!a){lf.set(t,!0);for(var i=[],o=k2(n,i),l=r.props,s=0,u=0;s<o.length;s++)for(var f=0;f<l.length;f++,u++)t.props[u]=i[s]?o[s].replace(/&\f/g,l[f]):l[f]+" "+o[s]}}},C2=function(t){if(t.type==="decl"){var n=t.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(t.return="",t.value="")}};function a0(e,t){switch(a2(e,t)){case 5103:return F+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return F+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return F+e+Ti+e+ke+e+e;case 6828:case 4268:return F+e+ke+e+e;case 6165:return F+e+ke+"flex-"+e+e;case 5187:return F+e+U(e,/(\w+).+(:[^]+)/,F+"box-$1$2"+ke+"flex-$1$2")+e;case 5443:return F+e+ke+"flex-item-"+U(e,/flex-|-self/,"")+e;case 4675:return F+e+ke+"flex-line-pack"+U(e,/align-content|flex-|-self/,"")+e;case 5548:return F+e+ke+U(e,"shrink","negative")+e;case 5292:return F+e+ke+U(e,"basis","preferred-size")+e;case 6060:return F+"box-"+U(e,"-grow","")+F+e+ke+U(e,"grow","positive")+e;case 4554:return F+U(e,/([^-])(transform)/g,"$1"+F+"$2")+e;case 6187:return U(U(U(e,/(zoom-|grab)/,F+"$1"),/(image-set)/,F+"$1"),e,"")+e;case 5495:case 3959:return U(e,/(image-set\([^]*)/,F+"$1$`$1");case 4968:return U(U(e,/(.+:)(flex-)?(.*)/,F+"box-pack:$3"+ke+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+F+e+e;case 4095:case 3583:case 4068:case 2532:return U(e,/(.+)-inline(.+)/,F+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(st(e)-1-t>6)switch(he(e,t+1)){case 109:if(he(e,t+4)!==45)break;case 102:return U(e,/(.+:)(.+)-([^]+)/,"$1"+F+"$2-$3$1"+Ti+(he(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~is(e,"stretch")?a0(U(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(he(e,t+1)!==115)break;case 6444:switch(he(e,st(e)-3-(~is(e,"!important")&&10))){case 107:return U(e,":",":"+F)+e;case 101:return U(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+F+(he(e,14)===45?"inline-":"")+"box$3$1"+F+"$2$3$1"+ke+"$2box$3")+e}break;case 5936:switch(he(e,t+11)){case 114:return F+e+ke+U(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return F+e+ke+U(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return F+e+ke+U(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return F+e+ke+e+e}return e}var b2=function(t,n,r,a){if(t.length>-1&&!t.return)switch(t.type){case Cu:t.return=a0(t.value,t.length);break;case q1:return Hn([hr(t,{value:U(t.value,"@","@"+F)})],a);case Su:if(t.length)return o2(t.props,function(i){switch(i2(i,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return Hn([hr(t,{props:[U(i,/:(read-\w+)/,":"+Ti+"$1")]})],a);case"::placeholder":return Hn([hr(t,{props:[U(i,/:(plac\w+)/,":"+F+"input-$1")]}),hr(t,{props:[U(i,/:(plac\w+)/,":"+Ti+"$1")]}),hr(t,{props:[U(i,/:(plac\w+)/,ke+"input-$1")]})],a)}return""})}},E2=[b2],N2=function(t){var n=t.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(h){var N=h.getAttribute("data-emotion");N.indexOf(" ")!==-1&&(document.head.appendChild(h),h.setAttribute("data-s",""))})}var a=t.stylisPlugins||E2,i={},o,l=[];o=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(h){for(var N=h.getAttribute("data-emotion").split(" "),d=1;d<N.length;d++)i[N[d]]=!0;l.push(h)});var s,u=[S2,C2];{var f,m=[v2,g2(function(h){f.insert(h)})],v=h2(u.concat(a,m)),g=function(N){return Hn(m2(N),v)};s=function(N,d,c,p){f=c,g(N?N+"{"+d.styles+"}":d.styles),p&&(y.inserted[d.name]=!0)}}var y={key:n,sheet:new e2({key:n,container:o,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:i,registered:{},insert:s};return y.sheet.hydrate(l),y},ls={},_2={get exports(){return ls},set exports(e){ls=e}},W={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pe=typeof Symbol=="function"&&Symbol.for,Eu=pe?Symbol.for("react.element"):60103,Nu=pe?Symbol.for("react.portal"):60106,ro=pe?Symbol.for("react.fragment"):60107,ao=pe?Symbol.for("react.strict_mode"):60108,io=pe?Symbol.for("react.profiler"):60114,oo=pe?Symbol.for("react.provider"):60109,lo=pe?Symbol.for("react.context"):60110,_u=pe?Symbol.for("react.async_mode"):60111,so=pe?Symbol.for("react.concurrent_mode"):60111,uo=pe?Symbol.for("react.forward_ref"):60112,co=pe?Symbol.for("react.suspense"):60113,P2=pe?Symbol.for("react.suspense_list"):60120,fo=pe?Symbol.for("react.memo"):60115,mo=pe?Symbol.for("react.lazy"):60116,O2=pe?Symbol.for("react.block"):60121,z2=pe?Symbol.for("react.fundamental"):60117,T2=pe?Symbol.for("react.responder"):60118,L2=pe?Symbol.for("react.scope"):60119;function Ve(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Eu:switch(e=e.type,e){case _u:case so:case ro:case io:case ao:case co:return e;default:switch(e=e&&e.$$typeof,e){case lo:case uo:case mo:case fo:case oo:return e;default:return t}}case Nu:return t}}}function i0(e){return Ve(e)===so}W.AsyncMode=_u;W.ConcurrentMode=so;W.ContextConsumer=lo;W.ContextProvider=oo;W.Element=Eu;W.ForwardRef=uo;W.Fragment=ro;W.Lazy=mo;W.Memo=fo;W.Portal=Nu;W.Profiler=io;W.StrictMode=ao;W.Suspense=co;W.isAsyncMode=function(e){return i0(e)||Ve(e)===_u};W.isConcurrentMode=i0;W.isContextConsumer=function(e){return Ve(e)===lo};W.isContextProvider=function(e){return Ve(e)===oo};W.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Eu};W.isForwardRef=function(e){return Ve(e)===uo};W.isFragment=function(e){return Ve(e)===ro};W.isLazy=function(e){return Ve(e)===mo};W.isMemo=function(e){return Ve(e)===fo};W.isPortal=function(e){return Ve(e)===Nu};W.isProfiler=function(e){return Ve(e)===io};W.isStrictMode=function(e){return Ve(e)===ao};W.isSuspense=function(e){return Ve(e)===co};W.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===ro||e===so||e===io||e===ao||e===co||e===P2||typeof e=="object"&&e!==null&&(e.$$typeof===mo||e.$$typeof===fo||e.$$typeof===oo||e.$$typeof===lo||e.$$typeof===uo||e.$$typeof===z2||e.$$typeof===T2||e.$$typeof===L2||e.$$typeof===O2)};W.typeOf=Ve;(function(e){e.exports=W})(_2);var o0=ls,I2={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},A2={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},l0={};l0[o0.ForwardRef]=I2;l0[o0.Memo]=A2;var M2=!0;function s0(e,t,n){var r="";return n.split(" ").forEach(function(a){e[a]!==void 0?t.push(e[a]+";"):r+=a+" "}),r}var Pu=function(t,n,r){var a=t.key+"-"+n.name;(r===!1||M2===!1)&&t.registered[a]===void 0&&(t.registered[a]=n.styles)},u0=function(t,n,r){Pu(t,n,r);var a=t.key+"-"+n.name;if(t.inserted[n.name]===void 0){var i=n;do t.insert(n===i?"."+a:"",i,t.sheet,!0),i=i.next;while(i!==void 0)}};function R2(e){for(var t=0,n,r=0,a=e.length;a>=4;++r,a-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(a){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var $2={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},j2=/[A-Z]|^ms/g,F2=/_EMO_([^_]+?)_([^]*?)_EMO_/g,c0=function(t){return t.charCodeAt(1)===45},sf=function(t){return t!=null&&typeof t!="boolean"},rl=y2(function(e){return c0(e)?e:e.replace(j2,"-$&").toLowerCase()}),uf=function(t,n){switch(t){case"animation":case"animationName":if(typeof n=="string")return n.replace(F2,function(r,a,i){return ut={name:a,styles:i,next:ut},a})}return $2[t]!==1&&!c0(t)&&typeof n=="number"&&n!==0?n+"px":n};function qr(e,t,n){if(n==null)return"";if(n.__emotion_styles!==void 0)return n;switch(typeof n){case"boolean":return"";case"object":{if(n.anim===1)return ut={name:n.name,styles:n.styles,next:ut},n.name;if(n.styles!==void 0){var r=n.next;if(r!==void 0)for(;r!==void 0;)ut={name:r.name,styles:r.styles,next:ut},r=r.next;var a=n.styles+";";return a}return D2(e,t,n)}case"function":{if(e!==void 0){var i=ut,o=n(e);return ut=i,qr(e,t,o)}break}}if(t==null)return n;var l=t[n];return l!==void 0?l:n}function D2(e,t,n){var r="";if(Array.isArray(n))for(var a=0;a<n.length;a++)r+=qr(e,t,n[a])+";";else for(var i in n){var o=n[i];if(typeof o!="object")t!=null&&t[o]!==void 0?r+=i+"{"+t[o]+"}":sf(o)&&(r+=rl(i)+":"+uf(i,o)+";");else if(Array.isArray(o)&&typeof o[0]=="string"&&(t==null||t[o[0]]===void 0))for(var l=0;l<o.length;l++)sf(o[l])&&(r+=rl(i)+":"+uf(i,o[l])+";");else{var s=qr(e,t,o);switch(i){case"animation":case"animationName":{r+=rl(i)+":"+s+";";break}default:r+=i+"{"+s+"}"}}}return r}var cf=/label:\s*([^\s;\n{]+)\s*(;|$)/g,ut,Ou=function(t,n,r){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var a=!0,i="";ut=void 0;var o=t[0];o==null||o.raw===void 0?(a=!1,i+=qr(r,n,o)):i+=o[0];for(var l=1;l<t.length;l++)i+=qr(r,n,t[l]),a&&(i+=o[l]);cf.lastIndex=0;for(var s="",u;(u=cf.exec(i))!==null;)s+="-"+u[1];var f=R2(i)+s;return{name:f,styles:i,next:ut}},U2=function(t){return t()},V2=Zu["useInsertionEffect"]?Zu["useInsertionEffect"]:!1,f0=V2||U2,zu={}.hasOwnProperty,d0=$.createContext(typeof HTMLElement<"u"?N2({key:"css"}):null);d0.Provider;var m0=function(t){return $.forwardRef(function(n,r){var a=$.useContext(d0);return t(n,a,r)})},p0=$.createContext({}),ss="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",H2=function(t,n){var r={};for(var a in n)zu.call(n,a)&&(r[a]=n[a]);return r[ss]=t,r},W2=function(t){var n=t.cache,r=t.serialized,a=t.isStringTag;return Pu(n,r,a),f0(function(){return u0(n,r,a)}),null},B2=m0(function(e,t,n){var r=e.css;typeof r=="string"&&t.registered[r]!==void 0&&(r=t.registered[r]);var a=e[ss],i=[r],o="";typeof e.className=="string"?o=s0(t.registered,i,e.className):e.className!=null&&(o=e.className+" ");var l=Ou(i,void 0,$.useContext(p0));o+=t.key+"-"+l.name;var s={};for(var u in e)zu.call(e,u)&&u!=="css"&&u!==ss&&(s[u]=e[u]);return s.ref=n,s.className=o,$.createElement($.Fragment,null,$.createElement(W2,{cache:t,serialized:l,isStringTag:typeof a=="string"}),$.createElement(a,s))});function v0(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return Ou(t)}var b=function(){var t=v0.apply(void 0,arguments),n="animation-"+t.name;return{name:n,styles:"@keyframes "+n+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},Y2=function e(t){for(var n=t.length,r=0,a="";r<n;r++){var i=t[r];if(i!=null){var o=void 0;switch(typeof i){case"boolean":break;case"object":{if(Array.isArray(i))o=e(i);else{o="";for(var l in i)i[l]&&l&&(o&&(o+=" "),o+=l)}break}default:o=i}o&&(a&&(a+=" "),a+=o)}}return a};function Q2(e,t,n){var r=[],a=s0(e,r,n);return r.length<2?n:a+t(r)}var X2=function(t){var n=t.cache,r=t.serializedArr;return f0(function(){for(var a=0;a<r.length;a++)u0(n,r[a],!1)}),null},al=m0(function(e,t){var n=!1,r=[],a=function(){for(var u=arguments.length,f=new Array(u),m=0;m<u;m++)f[m]=arguments[m];var v=Ou(f,t.registered);return r.push(v),Pu(t,v,!1),t.key+"-"+v.name},i=function(){for(var u=arguments.length,f=new Array(u),m=0;m<u;m++)f[m]=arguments[m];return Q2(t.registered,a,Y2(f))},o={css:a,cx:i,theme:$.useContext(p0)},l=e.children(o);return n=!0,$.createElement($.Fragment,null,$.createElement(X2,{cache:t,serializedArr:r}),l)});function us(){return us=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},us.apply(this,arguments)}function G2(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,cs(e,t)}function cs(e,t){return cs=Object.setPrototypeOf||function(r,a){return r.__proto__=a,r},cs(e,t)}function K2(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}var fs=new Map,Aa=new WeakMap,ff=0,Z2=void 0;function J2(e){return e?(Aa.has(e)||(ff+=1,Aa.set(e,ff.toString())),Aa.get(e)):"0"}function q2(e){return Object.keys(e).sort().filter(function(t){return e[t]!==void 0}).map(function(t){return t+"_"+(t==="root"?J2(e.root):e[t])}).toString()}function eh(e){var t=q2(e),n=fs.get(t);if(!n){var r=new Map,a,i=new IntersectionObserver(function(o){o.forEach(function(l){var s,u=l.isIntersecting&&a.some(function(f){return l.intersectionRatio>=f});e.trackVisibility&&typeof l.isVisible>"u"&&(l.isVisible=u),(s=r.get(l.target))==null||s.forEach(function(f){f(u,l)})})},e);a=i.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),n={id:t,observer:i,elements:r},fs.set(t,n)}return n}function h0(e,t,n,r){if(n===void 0&&(n={}),r===void 0&&(r=Z2),typeof window.IntersectionObserver>"u"&&r!==void 0){var a=e.getBoundingClientRect();return t(r,{isIntersecting:r,target:e,intersectionRatio:typeof n.threshold=="number"?n.threshold:0,time:0,boundingClientRect:a,intersectionRect:a,rootBounds:a}),function(){}}var i=eh(n),o=i.id,l=i.observer,s=i.elements,u=s.get(e)||[];return s.has(e)||s.set(e,u),u.push(t),l.observe(e),function(){u.splice(u.indexOf(t),1),u.length===0&&(s.delete(e),l.unobserve(e)),s.size===0&&(l.disconnect(),fs.delete(o))}}var th=["children","as","triggerOnce","threshold","root","rootMargin","onChange","skip","trackVisibility","delay","initialInView","fallbackInView"];function df(e){return typeof e.children!="function"}var mf=function(e){G2(t,e);function t(r){var a;return a=e.call(this,r)||this,a.node=null,a._unobserveCb=null,a.handleNode=function(i){a.node&&(a.unobserve(),!i&&!a.props.triggerOnce&&!a.props.skip&&a.setState({inView:!!a.props.initialInView,entry:void 0})),a.node=i||null,a.observeNode()},a.handleChange=function(i,o){i&&a.props.triggerOnce&&a.unobserve(),df(a.props)||a.setState({inView:i,entry:o}),a.props.onChange&&a.props.onChange(i,o)},a.state={inView:!!r.initialInView,entry:void 0},a}var n=t.prototype;return n.componentDidUpdate=function(a){(a.rootMargin!==this.props.rootMargin||a.root!==this.props.root||a.threshold!==this.props.threshold||a.skip!==this.props.skip||a.trackVisibility!==this.props.trackVisibility||a.delay!==this.props.delay)&&(this.unobserve(),this.observeNode())},n.componentWillUnmount=function(){this.unobserve(),this.node=null},n.observeNode=function(){if(!(!this.node||this.props.skip)){var a=this.props,i=a.threshold,o=a.root,l=a.rootMargin,s=a.trackVisibility,u=a.delay,f=a.fallbackInView;this._unobserveCb=h0(this.node,this.handleChange,{threshold:i,root:o,rootMargin:l,trackVisibility:s,delay:u},f)}},n.unobserve=function(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)},n.render=function(){if(!df(this.props)){var a=this.state,i=a.inView,o=a.entry;return this.props.children({inView:i,entry:o,ref:this.handleNode})}var l=this.props,s=l.children,u=l.as,f=K2(l,th);return $.createElement(u||"div",us({ref:this.handleNode},f),s)},t}($.Component);function g0(e){var t,n=e===void 0?{}:e,r=n.threshold,a=n.delay,i=n.trackVisibility,o=n.rootMargin,l=n.root,s=n.triggerOnce,u=n.skip,f=n.initialInView,m=n.fallbackInView,v=n.onChange,g=$.useState(null),y=g[0],h=g[1],N=$.useRef(),d=$.useState({inView:!!f,entry:void 0}),c=d[0],p=d[1];N.current=v,$.useEffect(function(){if(!(u||!y)){var E;return E=h0(y,function(S,z){p({inView:S,entry:z}),N.current&&N.current(S,z),z.isIntersecting&&s&&E&&(E(),E=void 0)},{root:l,rootMargin:o,threshold:r,trackVisibility:i,delay:a},m),function(){E&&E()}}},[Array.isArray(r)?r.toString():r,y,l,o,s,u,i,m,a]);var w=(t=c.entry)==null?void 0:t.target;$.useEffect(function(){!y&&w&&!s&&!u&&p({inView:!!f,entry:void 0})},[y,w,s,u,f]);var x=[h,c.inView,c.entry];return x.ref=x[0],x.inView=x[1],x.entry=x[2],x}var ds={},nh={get exports(){return ds},set exports(e){ds=e}},B={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tu=Symbol.for("react.element"),Lu=Symbol.for("react.portal"),po=Symbol.for("react.fragment"),vo=Symbol.for("react.strict_mode"),ho=Symbol.for("react.profiler"),go=Symbol.for("react.provider"),yo=Symbol.for("react.context"),rh=Symbol.for("react.server_context"),wo=Symbol.for("react.forward_ref"),xo=Symbol.for("react.suspense"),ko=Symbol.for("react.suspense_list"),So=Symbol.for("react.memo"),Co=Symbol.for("react.lazy"),ah=Symbol.for("react.offscreen"),y0;y0=Symbol.for("react.module.reference");function Ke(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Tu:switch(e=e.type,e){case po:case ho:case vo:case xo:case ko:return e;default:switch(e=e&&e.$$typeof,e){case rh:case yo:case wo:case Co:case So:case go:return e;default:return t}}case Lu:return t}}}B.ContextConsumer=yo;B.ContextProvider=go;B.Element=Tu;B.ForwardRef=wo;B.Fragment=po;B.Lazy=Co;B.Memo=So;B.Portal=Lu;B.Profiler=ho;B.StrictMode=vo;B.Suspense=xo;B.SuspenseList=ko;B.isAsyncMode=function(){return!1};B.isConcurrentMode=function(){return!1};B.isContextConsumer=function(e){return Ke(e)===yo};B.isContextProvider=function(e){return Ke(e)===go};B.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Tu};B.isForwardRef=function(e){return Ke(e)===wo};B.isFragment=function(e){return Ke(e)===po};B.isLazy=function(e){return Ke(e)===Co};B.isMemo=function(e){return Ke(e)===So};B.isPortal=function(e){return Ke(e)===Lu};B.isProfiler=function(e){return Ke(e)===ho};B.isStrictMode=function(e){return Ke(e)===vo};B.isSuspense=function(e){return Ke(e)===xo};B.isSuspenseList=function(e){return Ke(e)===ko};B.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===po||e===ho||e===vo||e===xo||e===ko||e===ah||typeof e=="object"&&e!==null&&(e.$$typeof===Co||e.$$typeof===So||e.$$typeof===go||e.$$typeof===yo||e.$$typeof===wo||e.$$typeof===y0||e.getModuleId!==void 0)};B.typeOf=Ke;(function(e){e.exports=B})(nh);var ih=Gf;function te(e,t,n){return zu.call(t,"css")?C(B2,H2(e,t),n):C(e,t,n)}var oh=b`
  from,
  20%,
  53%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0);
  }

  40%,
  43% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -30px, 0) scaleY(1.1);
  }

  70% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -15px, 0) scaleY(1.05);
  }

  80% {
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -4px, 0) scaleY(1.02);
  }
`,lh=b`
  from,
  50%,
  to {
    opacity: 1;
  }

  25%,
  75% {
    opacity: 0;
  }
`,sh=b`
  0% {
    transform: translateX(0);
  }

  6.5% {
    transform: translateX(-6px) rotateY(-9deg);
  }

  18.5% {
    transform: translateX(5px) rotateY(7deg);
  }

  31.5% {
    transform: translateX(-3px) rotateY(-5deg);
  }

  43.5% {
    transform: translateX(2px) rotateY(3deg);
  }

  50% {
    transform: translateX(0);
  }
`,uh=b`
  0% {
    transform: scale(1);
  }

  14% {
    transform: scale(1.3);
  }

  28% {
    transform: scale(1);
  }

  42% {
    transform: scale(1.3);
  }

  70% {
    transform: scale(1);
  }
`,ch=b`
  from,
  11.1%,
  to {
    transform: translate3d(0, 0, 0);
  }

  22.2% {
    transform: skewX(-12.5deg) skewY(-12.5deg);
  }

  33.3% {
    transform: skewX(6.25deg) skewY(6.25deg);
  }

  44.4% {
    transform: skewX(-3.125deg) skewY(-3.125deg);
  }

  55.5% {
    transform: skewX(1.5625deg) skewY(1.5625deg);
  }

  66.6% {
    transform: skewX(-0.78125deg) skewY(-0.78125deg);
  }

  77.7% {
    transform: skewX(0.390625deg) skewY(0.390625deg);
  }

  88.8% {
    transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
  }
`,fh=b`
  from {
    transform: scale3d(1, 1, 1);
  }

  50% {
    transform: scale3d(1.05, 1.05, 1.05);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`,dh=b`
  from {
    transform: scale3d(1, 1, 1);
  }

  30% {
    transform: scale3d(1.25, 0.75, 1);
  }

  40% {
    transform: scale3d(0.75, 1.25, 1);
  }

  50% {
    transform: scale3d(1.15, 0.85, 1);
  }

  65% {
    transform: scale3d(0.95, 1.05, 1);
  }

  75% {
    transform: scale3d(1.05, 0.95, 1);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`,mh=b`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`,ph=b`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`,vh=b`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(0, -10px, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(0, 10px, 0);
  }
`,hh=b`
  20% {
    transform: rotate3d(0, 0, 1, 15deg);
  }

  40% {
    transform: rotate3d(0, 0, 1, -10deg);
  }

  60% {
    transform: rotate3d(0, 0, 1, 5deg);
  }

  80% {
    transform: rotate3d(0, 0, 1, -5deg);
  }

  to {
    transform: rotate3d(0, 0, 1, 0deg);
  }
`,gh=b`
  from {
    transform: scale3d(1, 1, 1);
  }

  10%,
  20% {
    transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
  }

  30%,
  50%,
  70%,
  90% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
  }

  40%,
  60%,
  80% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`,yh=b`
  from {
    transform: translate3d(0, 0, 0);
  }

  15% {
    transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
  }

  30% {
    transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
  }

  45% {
    transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
  }

  60% {
    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
  }

  75% {
    transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,wh=b`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`,xh=b`
  from {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,kh=b`
  from {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Sh=b`
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Ch=b`
  from {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Iu=b`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,bh=b`
  from {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Eh=b`
  from {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Nh=b`
  from {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,_h=b`
  from {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Ph=b`
  from {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Oh=b`
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,zh=b`
  from {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;function Th({duration:e=1e3,delay:t=0,timingFunction:n="ease",keyframes:r=Iu,iterationCount:a=1}){return v0`
    animation-duration: ${e}ms;
    animation-timing-function: ${n};
    animation-delay: ${t}ms;
    animation-name: ${r};
    animation-direction: normal;
    animation-fill-mode: both;
    animation-iteration-count: ${a};

    @media (prefers-reduced-motion: reduce) {
      animation: none;
    }
  `}function Lh(e){return e==null}function Ih(e){return typeof e=="string"||typeof e=="number"||typeof e=="boolean"}function w0(e,t){return n=>n?e():t()}function Li(e){return w0(e,()=>null)}var ar=e=>{const{cascade:t=!1,damping:n=.5,delay:r=0,duration:a=1e3,fraction:i=0,keyframes:o=Iu,triggerOnce:l=!1,className:s,style:u,childClassName:f,childStyle:m,children:v,onVisibilityChange:g}=e,y=$.useMemo(()=>Th({keyframes:o,duration:a}),[a,o]);return Lh(v)?null:Ih(v)?te(Mh,{...e,animationStyles:y,children:String(v)}):ds.isFragment(v)?te(x0,{...e,animationStyles:y}):te(ih,{children:$.Children.map(v,(h,N)=>{if(!$.isValidElement(h))return null;const d=r+(t?N*a*n:0);switch(h.type){case"ol":case"ul":return te(al,{children:({cx:c})=>te(h.type,{...h.props,className:c(s,h.props.className),style:Object.assign({},u,h.props.style),children:te(ar,{...e,children:h.props.children})})});case"li":return te(mf,{threshold:i,triggerOnce:l,onChange:g,children:({inView:c,ref:p})=>te(al,{children:({cx:w})=>te(h.type,{...h.props,ref:p,className:w(f,h.props.className),css:Li(()=>y)(c),style:Object.assign({},m,h.props.style,{animationDelay:d+"ms"})})})});default:return te(mf,{threshold:i,triggerOnce:l,onChange:g,children:({inView:c,ref:p})=>te("div",{ref:p,className:s,css:Li(()=>y)(c),style:Object.assign({},u,{animationDelay:d+"ms"}),children:te(al,{children:({cx:w})=>te(h.type,{...h.props,className:w(f,h.props.className),style:Object.assign({},m,h.props.style)})})})})}})})},Ah={display:"inline-block",whiteSpace:"pre"},Mh=e=>{const{animationStyles:t,cascade:n=!1,damping:r=.5,delay:a=0,duration:i=1e3,fraction:o=0,triggerOnce:l=!1,className:s,style:u,children:f,onVisibilityChange:m}=e,{ref:v,inView:g}=g0({triggerOnce:l,threshold:o,onChange:m});return w0(()=>te("div",{ref:v,className:s,style:Object.assign({},u,Ah),children:f.split("").map((y,h)=>te("span",{css:Li(()=>t)(g),style:{animationDelay:a+h*i*r+"ms"},children:y},h))}),()=>te(x0,{...e,children:f}))(n)},x0=e=>{const{animationStyles:t,fraction:n=0,triggerOnce:r=!1,className:a,style:i,children:o,onVisibilityChange:l}=e,{ref:s,inView:u}=g0({triggerOnce:r,threshold:n,onChange:l});return te("div",{ref:s,className:a,css:Li(()=>t)(u),style:i,children:o})};function Rh(e){switch(e){case"bounce":return[oh,{transformOrigin:"center bottom"}];case"flash":return[lh];case"headShake":return[sh,{animationTimingFunction:"ease-in-out"}];case"heartBeat":return[uh,{animationTimingFunction:"ease-in-out"}];case"jello":return[ch,{transformOrigin:"center"}];case"pulse":return[fh,{animationTimingFunction:"ease-in-out"}];case"rubberBand":return[dh];case"shake":return[mh];case"shakeX":return[ph];case"shakeY":return[vh];case"swing":return[hh,{transformOrigin:"top center"}];case"tada":return[gh];case"wobble":return[yh]}}var k0=e=>{const{effect:t="bounce",style:n,...r}=e,[a,i]=$.useMemo(()=>Rh(t),[t]);return te(ar,{keyframes:a,style:Object.assign({},n,i),...r})},$h=b`
  from,
  20%,
  40%,
  60%,
  80%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  20% {
    transform: scale3d(1.1, 1.1, 1.1);
  }

  40% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  60% {
    opacity: 1;
    transform: scale3d(1.03, 1.03, 1.03);
  }

  80% {
    transform: scale3d(0.97, 0.97, 0.97);
  }

  to {
    opacity: 1;
    transform: scale3d(1, 1, 1);
  }
`,jh=b`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(0, -3000px, 0) scaleY(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, 25px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, -10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, 5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,Fh=b`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(-3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(-10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,Dh=b`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(-25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(-5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,Uh=b`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(0, 3000px, 0) scaleY(5);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, 10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,Vh=b`
  20% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  50%,
  55% {
    opacity: 1;
    transform: scale3d(1.1, 1.1, 1.1);
  }

  to {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }
`,Hh=b`
  20% {
    transform: translate3d(0, 10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0) scaleY(3);
  }
`,Wh=b`
  20% {
    opacity: 1;
    transform: translate3d(20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0) scaleX(2);
  }
`,Bh=b`
  20% {
    opacity: 1;
    transform: translate3d(-20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0) scaleX(2);
  }
`,Yh=b`
  20% {
    transform: translate3d(0, -10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, 20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0) scaleY(3);
  }
`;function Qh(e,t){switch(t){case"down":return e?Hh:jh;case"left":return e?Wh:Fh;case"right":return e?Bh:Dh;case"up":return e?Yh:Uh;default:return e?Vh:$h}}var Xh=e=>{const{direction:t,reverse:n=!1,...r}=e,a=$.useMemo(()=>Qh(n,t),[t,n]);return te(ar,{keyframes:a,...r})},Gh=b`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`,Kh=b`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }
`,Zh=b`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }
`,Jh=b`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
`,qh=b`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }
`,e3=b`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
`,t3=b`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }
`,n3=b`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
`,r3=b`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }
`,a3=b`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }
`,i3=b`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }
`,o3=b`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
`,l3=b`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }
`;function s3(e,t,n){switch(n){case"bottom-left":return t?Kh:xh;case"bottom-right":return t?Zh:kh;case"down":return e?t?qh:Ch:t?Jh:Sh;case"left":return e?t?t3:bh:t?e3:Iu;case"right":return e?t?r3:Nh:t?n3:Eh;case"top-left":return t?a3:_h;case"top-right":return t?i3:Ph;case"up":return e?t?l3:zh:t?o3:Oh;default:return t?Gh:wh}}var u3=e=>{const{big:t=!1,direction:n,reverse:r=!1,...a}=e,i=$.useMemo(()=>s3(t,r,n),[t,n,r]);return te(ar,{keyframes:i,...a})};b`
  from {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg);
    animation-timing-function: ease-out;
  }

  40% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg);
    animation-timing-function: ease-out;
  }

  50% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg);
    animation-timing-function: ease-in;
  }

  80% {
    transform: perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }

  to {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }
`;b`
  from {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`;b`
  from {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`;b`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    opacity: 0;
  }
`;b`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    opacity: 0;
  }
`;b`
  0% {
    animation-timing-function: ease-in-out;
  }

  20%,
  60% {
    transform: rotate3d(0, 0, 1, 80deg);
    animation-timing-function: ease-in-out;
  }

  40%,
  80% {
    transform: rotate3d(0, 0, 1, 60deg);
    animation-timing-function: ease-in-out;
    opacity: 1;
  }

  to {
    transform: translate3d(0, 700px, 0);
    opacity: 0;
  }
`;b`
  from {
    opacity: 0;
    transform: scale(0.1) rotate(30deg);
    transform-origin: center bottom;
  }

  50% {
    transform: rotate(-10deg);
  }

  70% {
    transform: rotate(3deg);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`;b`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;b`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
  }
`;b`
  from {
    transform: rotate3d(0, 0, 1, -200deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;b`
  from {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;b`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;b`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;b`
  from {
    transform: rotate3d(0, 0, 1, -90deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;b`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 200deg);
    opacity: 0;
  }
`;b`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }
`;b`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`;b`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`;b`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 90deg);
    opacity: 0;
  }
`;var c3=b`
  from {
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,f3=b`
  from {
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,d3=b`
  from {
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,m3=b`
  from {
    transform: translate3d(0, 100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,p3=b`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, 100%, 0);
  }
`,v3=b`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(-100%, 0, 0);
  }
`,h3=b`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(100%, 0, 0);
  }
`,g3=b`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, -100%, 0);
  }
`;function y3(e,t){switch(t){case"down":return e?p3:c3;case"right":return e?h3:d3;case"up":return e?g3:m3;case"left":default:return e?v3:f3}}var S0=e=>{const{direction:t,reverse:n=!1,...r}=e,a=$.useMemo(()=>y3(n,t),[t,n]);return te(ar,{keyframes:a,...r})},w3=b`
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
`,x3=b`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,k3=b`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,S3=b`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,C3=b`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,b3=b`
  from {
    opacity: 1;
  }

  50% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  to {
    opacity: 0;
  }
`,E3=b`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,N3=b`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(-2000px, 0, 0);
  }
`,_3=b`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(2000px, 0, 0);
  }
`,P3=b`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;function O3(e,t){switch(t){case"down":return e?E3:x3;case"left":return e?N3:k3;case"right":return e?_3:S3;case"up":return e?P3:C3;default:return e?b3:w3}}var z3=e=>{const{direction:t,reverse:n=!1,...r}=e,a=$.useMemo(()=>O3(n,t),[t,n]);return te(ar,{keyframes:a,...r})};const T3=()=>C("section",{id:"about",className:"bg-gray-800",children:V("div",{className:"container mx-auto px-4 py-44",children:[C("h2",{className:"text-3xl lg:text-5xl font-bold text-center lg:text-left",children:"Sobre mi"}),V("div",{className:"text-center lg:text-left flex flex-col lg:flex-row gap-16",children:[V("div",{className:"flex flex-col gap-6",children:[V("p",{className:"mt-8 px-4 text-center lg:text-left text-slate-300",children:[C("span",{className:"text-cyan-400",children:"Disfruto"})," del uso de la tecnología como herramienta creadora, y solucionadora de problemas.",C("br",{})," Lo que más me gusta de este mundo es que hay mucho por ",C("span",{className:"text-cyan-400",children:"aprender"}),", y eso es un gran disparador de motivación para mi curiosidad.",C("br",{})]}),C("h3",{className:"text-xl md:text-2xl lg:text-3xl font-semibold",children:"Educacion"}),C("div",{className:"flex flex-col gap-6",children:Xv.map(e=>V("div",{className:"lg:border-l lg:pl-4 text-slate-300",children:[C("strong",{className:"text-white",children:e.schoolName}),C("p",{children:e.specialization}),C("p",{children:e.learning})]}))})]}),C("div",{children:C(S0,{direction:"right",children:C("img",{className:"bg-gray-900 p-4 mx-auto w-72 md:w-80 xl:w-96 rounded-md shadow-2xl hover:scale-105 duration-200",src:Zv,alt:"no me gustan las fotos"})})})]})]})});function pf(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function _(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?pf(Object(n),!0).forEach(function(r){ce(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):pf(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Ii(e){return Ii=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ii(e)}function L3(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function vf(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function I3(e,t,n){return t&&vf(e.prototype,t),n&&vf(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function ce(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Au(e,t){return M3(e)||$3(e,t)||C0(e,t)||F3()}function fa(e){return A3(e)||R3(e)||C0(e)||j3()}function A3(e){if(Array.isArray(e))return ms(e)}function M3(e){if(Array.isArray(e))return e}function R3(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function $3(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,o,l;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));a=!0);}catch(s){i=!0,l=s}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw l}}return r}}function C0(e,t){if(e){if(typeof e=="string")return ms(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ms(e,t)}}function ms(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function j3(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function F3(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var hf=function(){},Mu={},b0={},E0=null,N0={mark:hf,measure:hf};try{typeof window<"u"&&(Mu=window),typeof document<"u"&&(b0=document),typeof MutationObserver<"u"&&(E0=MutationObserver),typeof performance<"u"&&(N0=performance)}catch{}var D3=Mu.navigator||{},gf=D3.userAgent,yf=gf===void 0?"":gf,Xt=Mu,K=b0,wf=E0,Ma=N0;Xt.document;var Pt=!!K.documentElement&&!!K.head&&typeof K.addEventListener=="function"&&typeof K.createElement=="function",_0=~yf.indexOf("MSIE")||~yf.indexOf("Trident/"),Ra,$a,ja,Fa,Da,bt="___FONT_AWESOME___",ps=16,P0="fa",O0="svg-inline--fa",gn="data-fa-i2svg",vs="data-fa-pseudo-element",U3="data-fa-pseudo-element-pending",Ru="data-prefix",$u="data-icon",xf="fontawesome-i2svg",V3="async",H3=["HTML","HEAD","STYLE","SCRIPT"],z0=function(){try{return!0}catch{return!1}}(),X="classic",re="sharp",ju=[X,re];function da(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[X]}})}var ea=da((Ra={},ce(Ra,X,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),ce(Ra,re,{fa:"solid",fass:"solid","fa-solid":"solid"}),Ra)),ta=da(($a={},ce($a,X,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),ce($a,re,{solid:"fass"}),$a)),na=da((ja={},ce(ja,X,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),ce(ja,re,{fass:"fa-solid"}),ja)),W3=da((Fa={},ce(Fa,X,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),ce(Fa,re,{"fa-solid":"fass"}),Fa)),B3=/fa(s|r|l|t|d|b|k|ss)?[\-\ ]/,T0="fa-layers-text",Y3=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Q3=da((Da={},ce(Da,X,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),ce(Da,re,{900:"fass"}),Da)),L0=[1,2,3,4,5,6,7,8,9,10],X3=L0.concat([11,12,13,14,15,16,17,18,19,20]),G3=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],sn={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},ra=new Set;Object.keys(ta[X]).map(ra.add.bind(ra));Object.keys(ta[re]).map(ra.add.bind(ra));var K3=[].concat(ju,fa(ra),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",sn.GROUP,sn.SWAP_OPACITY,sn.PRIMARY,sn.SECONDARY]).concat(L0.map(function(e){return"".concat(e,"x")})).concat(X3.map(function(e){return"w-".concat(e)})),Tr=Xt.FontAwesomeConfig||{};function Z3(e){var t=K.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function J3(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(K&&typeof K.querySelector=="function"){var q3=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];q3.forEach(function(e){var t=Au(e,2),n=t[0],r=t[1],a=J3(Z3(n));a!=null&&(Tr[r]=a)})}var I0={styleDefault:"solid",familyDefault:"classic",cssPrefix:P0,replacementClass:O0,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Tr.familyPrefix&&(Tr.cssPrefix=Tr.familyPrefix);var qn=_(_({},I0),Tr);qn.autoReplaceSvg||(qn.observeMutations=!1);var T={};Object.keys(I0).forEach(function(e){Object.defineProperty(T,e,{enumerable:!0,set:function(n){qn[e]=n,Lr.forEach(function(r){return r(T)})},get:function(){return qn[e]}})});Object.defineProperty(T,"familyPrefix",{enumerable:!0,set:function(t){qn.cssPrefix=t,Lr.forEach(function(n){return n(T)})},get:function(){return qn.cssPrefix}});Xt.FontAwesomeConfig=T;var Lr=[];function eg(e){return Lr.push(e),function(){Lr.splice(Lr.indexOf(e),1)}}var zt=ps,ft={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function tg(e){if(!(!e||!Pt)){var t=K.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=K.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return K.head.insertBefore(t,r),e}}var ng="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function aa(){for(var e=12,t="";e-- >0;)t+=ng[Math.random()*62|0];return t}function ir(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function Fu(e){return e.classList?ir(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function A0(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function rg(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(A0(e[n]),'" ')},"").trim()}function bo(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function Du(e){return e.size!==ft.size||e.x!==ft.x||e.y!==ft.y||e.rotate!==ft.rotate||e.flipX||e.flipY}function ag(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),l="rotate(".concat(t.rotate," 0 0)"),s={transform:"".concat(i," ").concat(o," ").concat(l)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:s,path:u}}function ig(e){var t=e.transform,n=e.width,r=n===void 0?ps:n,a=e.height,i=a===void 0?ps:a,o=e.startCentered,l=o===void 0?!1:o,s="";return l&&_0?s+="translate(".concat(t.x/zt-r/2,"em, ").concat(t.y/zt-i/2,"em) "):l?s+="translate(calc(-50% + ".concat(t.x/zt,"em), calc(-50% + ").concat(t.y/zt,"em)) "):s+="translate(".concat(t.x/zt,"em, ").concat(t.y/zt,"em) "),s+="scale(".concat(t.size/zt*(t.flipX?-1:1),", ").concat(t.size/zt*(t.flipY?-1:1),") "),s+="rotate(".concat(t.rotate,"deg) "),s}var og=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function M0(){var e=P0,t=O0,n=T.cssPrefix,r=T.replacementClass,a=og;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),l=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(l,".".concat(r))}return a}var kf=!1;function il(){T.autoAddCss&&!kf&&(tg(M0()),kf=!0)}var lg={mixout:function(){return{dom:{css:M0,insertCss:il}}},hooks:function(){return{beforeDOMElementCreation:function(){il()},beforeI2svg:function(){il()}}}},Et=Xt||{};Et[bt]||(Et[bt]={});Et[bt].styles||(Et[bt].styles={});Et[bt].hooks||(Et[bt].hooks={});Et[bt].shims||(Et[bt].shims=[]);var nt=Et[bt],R0=[],sg=function e(){K.removeEventListener("DOMContentLoaded",e),Ai=1,R0.map(function(t){return t()})},Ai=!1;Pt&&(Ai=(K.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(K.readyState),Ai||K.addEventListener("DOMContentLoaded",sg));function ug(e){Pt&&(Ai?setTimeout(e,0):R0.push(e))}function ma(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,a=e.children,i=a===void 0?[]:a;return typeof e=="string"?A0(e):"<".concat(t," ").concat(rg(r),">").concat(i.map(ma).join(""),"</").concat(t,">")}function Sf(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var cg=function(t,n){return function(r,a,i,o){return t.call(n,r,a,i,o)}},ol=function(t,n,r,a){var i=Object.keys(t),o=i.length,l=a!==void 0?cg(n,a):n,s,u,f;for(r===void 0?(s=1,f=t[i[0]]):(s=0,f=r);s<o;s++)u=i[s],f=l(f,t[u],u,t);return f};function fg(e){for(var t=[],n=0,r=e.length;n<r;){var a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function hs(e){var t=fg(e);return t.length===1?t[0].toString(16):null}function dg(e,t){var n=e.length,r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function Cf(e){return Object.keys(e).reduce(function(t,n){var r=e[n],a=!!r.icon;return a?t[r.iconName]=r.icon:t[n]=r,t},{})}function gs(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=Cf(t);typeof nt.hooks.addPack=="function"&&!a?nt.hooks.addPack(e,Cf(t)):nt.styles[e]=_(_({},nt.styles[e]||{}),i),e==="fas"&&gs("fa",t)}var Ua,Va,Ha,An=nt.styles,mg=nt.shims,pg=(Ua={},ce(Ua,X,Object.values(na[X])),ce(Ua,re,Object.values(na[re])),Ua),Uu=null,$0={},j0={},F0={},D0={},U0={},vg=(Va={},ce(Va,X,Object.keys(ea[X])),ce(Va,re,Object.keys(ea[re])),Va);function hg(e){return~K3.indexOf(e)}function gg(e,t){var n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!hg(a)?a:null}var V0=function(){var t=function(i){return ol(An,function(o,l,s){return o[s]=ol(l,i,{}),o},{})};$0=t(function(a,i,o){if(i[3]&&(a[i[3]]=o),i[2]){var l=i[2].filter(function(s){return typeof s=="number"});l.forEach(function(s){a[s.toString(16)]=o})}return a}),j0=t(function(a,i,o){if(a[o]=o,i[2]){var l=i[2].filter(function(s){return typeof s=="string"});l.forEach(function(s){a[s]=o})}return a}),U0=t(function(a,i,o){var l=i[2];return a[o]=o,l.forEach(function(s){a[s]=o}),a});var n="far"in An||T.autoFetchSvg,r=ol(mg,function(a,i){var o=i[0],l=i[1],s=i[2];return l==="far"&&!n&&(l="fas"),typeof o=="string"&&(a.names[o]={prefix:l,iconName:s}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:l,iconName:s}),a},{names:{},unicodes:{}});F0=r.names,D0=r.unicodes,Uu=Eo(T.styleDefault,{family:T.familyDefault})};eg(function(e){Uu=Eo(e.styleDefault,{family:T.familyDefault})});V0();function Vu(e,t){return($0[e]||{})[t]}function yg(e,t){return(j0[e]||{})[t]}function un(e,t){return(U0[e]||{})[t]}function H0(e){return F0[e]||{prefix:null,iconName:null}}function wg(e){var t=D0[e],n=Vu("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Gt(){return Uu}var Hu=function(){return{prefix:null,iconName:null,rest:[]}};function Eo(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?X:n,a=ea[r][e],i=ta[r][e]||ta[r][a],o=e in nt.styles?e:null;return i||o||null}var bf=(Ha={},ce(Ha,X,Object.keys(na[X])),ce(Ha,re,Object.keys(na[re])),Ha);function No(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,a=r===void 0?!1:r,i=(t={},ce(t,X,"".concat(T.cssPrefix,"-").concat(X)),ce(t,re,"".concat(T.cssPrefix,"-").concat(re)),t),o=null,l=X;(e.includes(i[X])||e.some(function(u){return bf[X].includes(u)}))&&(l=X),(e.includes(i[re])||e.some(function(u){return bf[re].includes(u)}))&&(l=re);var s=e.reduce(function(u,f){var m=gg(T.cssPrefix,f);if(An[f]?(f=pg[l].includes(f)?W3[l][f]:f,o=f,u.prefix=f):vg[l].indexOf(f)>-1?(o=f,u.prefix=Eo(f,{family:l})):m?u.iconName=m:f!==T.replacementClass&&f!==i[X]&&f!==i[re]&&u.rest.push(f),!a&&u.prefix&&u.iconName){var v=o==="fa"?H0(u.iconName):{},g=un(u.prefix,u.iconName);v.prefix&&(o=null),u.iconName=v.iconName||g||u.iconName,u.prefix=v.prefix||u.prefix,u.prefix==="far"&&!An.far&&An.fas&&!T.autoFetchSvg&&(u.prefix="fas")}return u},Hu());return(e.includes("fa-brands")||e.includes("fab"))&&(s.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(s.prefix="fad"),!s.prefix&&l===re&&(An.fass||T.autoFetchSvg)&&(s.prefix="fass",s.iconName=un(s.prefix,s.iconName)||s.iconName),(s.prefix==="fa"||o==="fa")&&(s.prefix=Gt()||"fas"),s}var xg=function(){function e(){L3(this,e),this.definitions={}}return I3(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(l){n.definitions[l]=_(_({},n.definitions[l]||{}),o[l]),gs(l,o[l]);var s=na[X][l];s&&gs(s,o[l]),V0()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var o=a[i],l=o.prefix,s=o.iconName,u=o.icon,f=u[2];n[l]||(n[l]={}),f.length>0&&f.forEach(function(m){typeof m=="string"&&(n[l][m]=u)}),n[l][s]=u}),n}}]),e}(),Ef=[],Mn={},Wn={},kg=Object.keys(Wn);function Sg(e,t){var n=t.mixoutsTo;return Ef=e,Mn={},Object.keys(Wn).forEach(function(r){kg.indexOf(r)===-1&&delete Wn[r]}),Ef.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(n[o]=a[o]),Ii(a[o])==="object"&&Object.keys(a[o]).forEach(function(l){n[o]||(n[o]={}),n[o][l]=a[o][l]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){Mn[o]||(Mn[o]=[]),Mn[o].push(i[o])})}r.provides&&r.provides(Wn)}),n}function ys(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=Mn[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function yn(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=Mn[e]||[];a.forEach(function(i){i.apply(null,n)})}function Nt(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Wn[e]?Wn[e].apply(null,t):void 0}function ws(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||Gt();if(t)return t=un(n,t)||t,Sf(W0.definitions,n,t)||Sf(nt.styles,n,t)}var W0=new xg,Cg=function(){T.autoReplaceSvg=!1,T.observeMutations=!1,yn("noAuto")},bg={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Pt?(yn("beforeI2svg",t),Nt("pseudoElements2svg",t),Nt("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;T.autoReplaceSvg===!1&&(T.autoReplaceSvg=!0),T.observeMutations=!0,ug(function(){Ng({autoReplaceSvgRoot:n}),yn("watch",t)})}},Eg={icon:function(t){if(t===null)return null;if(Ii(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:un(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=Eo(t[0]);return{prefix:r,iconName:un(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(T.cssPrefix,"-"))>-1||t.match(B3))){var a=No(t.split(" "),{skipLookups:!0});return{prefix:a.prefix||Gt(),iconName:un(a.prefix,a.iconName)||a.iconName}}if(typeof t=="string"){var i=Gt();return{prefix:i,iconName:un(i,t)||t}}}},He={noAuto:Cg,config:T,dom:bg,parse:Eg,library:W0,findIconDefinition:ws,toHtml:ma},Ng=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?K:n;(Object.keys(nt.styles).length>0||T.autoFetchSvg)&&Pt&&T.autoReplaceSvg&&He.dom.i2svg({node:r})};function _o(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return ma(r)})}}),Object.defineProperty(e,"node",{get:function(){if(Pt){var r=K.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function _g(e){var t=e.children,n=e.main,r=e.mask,a=e.attributes,i=e.styles,o=e.transform;if(Du(o)&&n.found&&!r.found){var l=n.width,s=n.height,u={x:l/s/2,y:.5};a.style=bo(_(_({},i),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function Pg(e){var t=e.prefix,n=e.iconName,r=e.children,a=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(T.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:_(_({},a),{},{id:o}),children:r}]}]}function Wu(e){var t=e.icons,n=t.main,r=t.mask,a=e.prefix,i=e.iconName,o=e.transform,l=e.symbol,s=e.title,u=e.maskId,f=e.titleId,m=e.extra,v=e.watchable,g=v===void 0?!1:v,y=r.found?r:n,h=y.width,N=y.height,d=a==="fak",c=[T.replacementClass,i?"".concat(T.cssPrefix,"-").concat(i):""].filter(function(D){return m.classes.indexOf(D)===-1}).filter(function(D){return D!==""||!!D}).concat(m.classes).join(" "),p={children:[],attributes:_(_({},m.attributes),{},{"data-prefix":a,"data-icon":i,class:c,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(h," ").concat(N)})},w=d&&!~m.classes.indexOf("fa-fw")?{width:"".concat(h/N*16*.0625,"em")}:{};g&&(p.attributes[gn]=""),s&&(p.children.push({tag:"title",attributes:{id:p.attributes["aria-labelledby"]||"title-".concat(f||aa())},children:[s]}),delete p.attributes.title);var x=_(_({},p),{},{prefix:a,iconName:i,main:n,mask:r,maskId:u,transform:o,symbol:l,styles:_(_({},w),m.styles)}),E=r.found&&n.found?Nt("generateAbstractMask",x)||{children:[],attributes:{}}:Nt("generateAbstractIcon",x)||{children:[],attributes:{}},S=E.children,z=E.attributes;return x.children=S,x.attributes=z,l?Pg(x):_g(x)}function Nf(e){var t=e.content,n=e.width,r=e.height,a=e.transform,i=e.title,o=e.extra,l=e.watchable,s=l===void 0?!1:l,u=_(_(_({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});s&&(u[gn]="");var f=_({},o.styles);Du(a)&&(f.transform=ig({transform:a,startCentered:!0,width:n,height:r}),f["-webkit-transform"]=f.transform);var m=bo(f);m.length>0&&(u.style=m);var v=[];return v.push({tag:"span",attributes:u,children:[t]}),i&&v.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),v}function Og(e){var t=e.content,n=e.title,r=e.extra,a=_(_(_({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=bo(r.styles);i.length>0&&(a.style=i);var o=[];return o.push({tag:"span",attributes:a,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var ll=nt.styles;function xs(e){var t=e[0],n=e[1],r=e.slice(4),a=Au(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(T.cssPrefix,"-").concat(sn.GROUP)},children:[{tag:"path",attributes:{class:"".concat(T.cssPrefix,"-").concat(sn.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(T.cssPrefix,"-").concat(sn.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}var zg={found:!1,width:512,height:512};function Tg(e,t){!z0&&!T.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function ks(e,t){var n=t;return t==="fa"&&T.styleDefault!==null&&(t=Gt()),new Promise(function(r,a){if(Nt("missingIconAbstract"),n==="fa"){var i=H0(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&ll[t]&&ll[t][e]){var o=ll[t][e];return r(xs(o))}Tg(e,t),r(_(_({},zg),{},{icon:T.showMissingIcons&&e?Nt("missingIconAbstract")||{}:{}}))})}var _f=function(){},Ss=T.measurePerformance&&Ma&&Ma.mark&&Ma.measure?Ma:{mark:_f,measure:_f},kr='FA "6.2.1"',Lg=function(t){return Ss.mark("".concat(kr," ").concat(t," begins")),function(){return B0(t)}},B0=function(t){Ss.mark("".concat(kr," ").concat(t," ends")),Ss.measure("".concat(kr," ").concat(t),"".concat(kr," ").concat(t," begins"),"".concat(kr," ").concat(t," ends"))},Bu={begin:Lg,end:B0},ii=function(){};function Pf(e){var t=e.getAttribute?e.getAttribute(gn):null;return typeof t=="string"}function Ig(e){var t=e.getAttribute?e.getAttribute(Ru):null,n=e.getAttribute?e.getAttribute($u):null;return t&&n}function Ag(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(T.replacementClass)}function Mg(){if(T.autoReplaceSvg===!0)return oi.replace;var e=oi[T.autoReplaceSvg];return e||oi.replace}function Rg(e){return K.createElementNS("http://www.w3.org/2000/svg",e)}function $g(e){return K.createElement(e)}function Y0(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?Rg:$g:n;if(typeof e=="string")return K.createTextNode(e);var a=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){a.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){a.appendChild(Y0(o,{ceFn:r}))}),a}function jg(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var oi={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(a){n.parentNode.insertBefore(Y0(a),n)}),n.getAttribute(gn)===null&&T.keepOriginalSource){var r=K.createComment(jg(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~Fu(n).indexOf(T.replacementClass))return oi.replace(t);var a=new RegExp("".concat(T.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(l,s){return s===T.replacementClass||s.match(a)?l.toSvg.push(s):l.toNode.push(s),l},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(l){return ma(l)}).join(`
`);n.setAttribute(gn,""),n.innerHTML=o}};function Of(e){e()}function Q0(e,t){var n=typeof t=="function"?t:ii;if(e.length===0)n();else{var r=Of;T.mutateApproach===V3&&(r=Xt.requestAnimationFrame||Of),r(function(){var a=Mg(),i=Bu.begin("mutate");e.map(a),i(),n()})}}var Yu=!1;function X0(){Yu=!0}function Cs(){Yu=!1}var Mi=null;function zf(e){if(wf&&T.observeMutations){var t=e.treeCallback,n=t===void 0?ii:t,r=e.nodeCallback,a=r===void 0?ii:r,i=e.pseudoElementsCallback,o=i===void 0?ii:i,l=e.observeMutationsRoot,s=l===void 0?K:l;Mi=new wf(function(u){if(!Yu){var f=Gt();ir(u).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!Pf(m.addedNodes[0])&&(T.searchPseudoElements&&o(m.target),n(m.target)),m.type==="attributes"&&m.target.parentNode&&T.searchPseudoElements&&o(m.target.parentNode),m.type==="attributes"&&Pf(m.target)&&~G3.indexOf(m.attributeName))if(m.attributeName==="class"&&Ig(m.target)){var v=No(Fu(m.target)),g=v.prefix,y=v.iconName;m.target.setAttribute(Ru,g||f),y&&m.target.setAttribute($u,y)}else Ag(m.target)&&a(m.target)})}}),Pt&&Mi.observe(s,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Fg(){Mi&&Mi.disconnect()}function Dg(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],l=i.slice(1);return o&&l.length>0&&(r[o]=l.join(":").trim()),r},{})),n}function Ug(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",a=No(Fu(e));return a.prefix||(a.prefix=Gt()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=yg(a.prefix,e.innerText)||Vu(a.prefix,hs(e.innerText))),!a.iconName&&T.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function Vg(e){var t=ir(e.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return T.autoA11y&&(n?t["aria-labelledby"]="".concat(T.replacementClass,"-title-").concat(r||aa()):(t["aria-hidden"]="true",t.focusable="false")),t}function Hg(){return{iconName:null,title:null,titleId:null,prefix:null,transform:ft,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Tf(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Ug(e),r=n.iconName,a=n.prefix,i=n.rest,o=Vg(e),l=ys("parseNodeAttributes",{},e),s=t.styleParser?Dg(e):[];return _({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:ft,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:s,attributes:o}},l)}var Wg=nt.styles;function G0(e){var t=T.autoReplaceSvg==="nest"?Tf(e,{styleParser:!1}):Tf(e);return~t.extra.classes.indexOf(T0)?Nt("generateLayersText",e,t):Nt("generateSvgReplacementMutation",e,t)}var Kt=new Set;ju.map(function(e){Kt.add("fa-".concat(e))});Object.keys(ea[X]).map(Kt.add.bind(Kt));Object.keys(ea[re]).map(Kt.add.bind(Kt));Kt=fa(Kt);function Lf(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Pt)return Promise.resolve();var n=K.documentElement.classList,r=function(m){return n.add("".concat(xf,"-").concat(m))},a=function(m){return n.remove("".concat(xf,"-").concat(m))},i=T.autoFetchSvg?Kt:ju.map(function(f){return"fa-".concat(f)}).concat(Object.keys(Wg));i.includes("fa")||i.push("fa");var o=[".".concat(T0,":not([").concat(gn,"])")].concat(i.map(function(f){return".".concat(f,":not([").concat(gn,"])")})).join(", ");if(o.length===0)return Promise.resolve();var l=[];try{l=ir(e.querySelectorAll(o))}catch{}if(l.length>0)r("pending"),a("complete");else return Promise.resolve();var s=Bu.begin("onTree"),u=l.reduce(function(f,m){try{var v=G0(m);v&&f.push(v)}catch(g){z0||g.name==="MissingIcon"&&console.error(g)}return f},[]);return new Promise(function(f,m){Promise.all(u).then(function(v){Q0(v,function(){r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),s(),f()})}).catch(function(v){s(),m(v)})})}function Bg(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;G0(e).then(function(n){n&&Q0([n],t)})}function Yg(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:ws(t||{}),a=n.mask;return a&&(a=(a||{}).icon?a:ws(a||{})),e(r,_(_({},n),{},{mask:a}))}}var Qg=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?ft:r,i=n.symbol,o=i===void 0?!1:i,l=n.mask,s=l===void 0?null:l,u=n.maskId,f=u===void 0?null:u,m=n.title,v=m===void 0?null:m,g=n.titleId,y=g===void 0?null:g,h=n.classes,N=h===void 0?[]:h,d=n.attributes,c=d===void 0?{}:d,p=n.styles,w=p===void 0?{}:p;if(t){var x=t.prefix,E=t.iconName,S=t.icon;return _o(_({type:"icon"},t),function(){return yn("beforeDOMElementCreation",{iconDefinition:t,params:n}),T.autoA11y&&(v?c["aria-labelledby"]="".concat(T.replacementClass,"-title-").concat(y||aa()):(c["aria-hidden"]="true",c.focusable="false")),Wu({icons:{main:xs(S),mask:s?xs(s.icon):{found:!1,width:null,height:null,icon:{}}},prefix:x,iconName:E,transform:_(_({},ft),a),symbol:o,title:v,maskId:f,titleId:y,extra:{attributes:c,styles:w,classes:N}})})}},Xg={mixout:function(){return{icon:Yg(Qg)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Lf,n.nodeCallback=Bg,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,a=r===void 0?K:r,i=n.callback,o=i===void 0?function(){}:i;return Lf(a,o)},t.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,o=r.titleId,l=r.prefix,s=r.transform,u=r.symbol,f=r.mask,m=r.maskId,v=r.extra;return new Promise(function(g,y){Promise.all([ks(a,l),f.iconName?ks(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(h){var N=Au(h,2),d=N[0],c=N[1];g([n,Wu({icons:{main:d,mask:c},prefix:l,iconName:a,transform:s,symbol:u,maskId:m,title:i,titleId:o,extra:v,watchable:!0})])}).catch(y)})},t.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.transform,l=n.styles,s=bo(l);s.length>0&&(a.style=s);var u;return Du(o)&&(u=Nt("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(u||i.icon),{children:r,attributes:a}}}},Gg={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return _o({type:"layer"},function(){yn("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(l){Array.isArray(l)?l.map(function(s){o=o.concat(s.abstract)}):o=o.concat(l.abstract)}),[{tag:"span",attributes:{class:["".concat(T.cssPrefix,"-layers")].concat(fa(i)).join(" ")},children:o}]})}}}},Kg={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,o=r.classes,l=o===void 0?[]:o,s=r.attributes,u=s===void 0?{}:s,f=r.styles,m=f===void 0?{}:f;return _o({type:"counter",content:n},function(){return yn("beforeDOMElementCreation",{content:n,params:r}),Og({content:n.toString(),title:i,extra:{attributes:u,styles:m,classes:["".concat(T.cssPrefix,"-layers-counter")].concat(fa(l))}})})}}}},Zg={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?ft:a,o=r.title,l=o===void 0?null:o,s=r.classes,u=s===void 0?[]:s,f=r.attributes,m=f===void 0?{}:f,v=r.styles,g=v===void 0?{}:v;return _o({type:"text",content:n},function(){return yn("beforeDOMElementCreation",{content:n,params:r}),Nf({content:n,transform:_(_({},ft),i),title:l,extra:{attributes:m,styles:g,classes:["".concat(T.cssPrefix,"-layers-text")].concat(fa(u))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var a=r.title,i=r.transform,o=r.extra,l=null,s=null;if(_0){var u=parseInt(getComputedStyle(n).fontSize,10),f=n.getBoundingClientRect();l=f.width/u,s=f.height/u}return T.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,Nf({content:n.innerHTML,width:l,height:s,transform:i,title:a,extra:o,watchable:!0})])}}},Jg=new RegExp('"',"ug"),If=[1105920,1112319];function qg(e){var t=e.replace(Jg,""),n=dg(t,0),r=n>=If[0]&&n<=If[1],a=t.length===2?t[0]===t[1]:!1;return{value:hs(a?t[0]:t),isSecondary:r||a}}function Af(e,t){var n="".concat(U3).concat(t.replace(":","-"));return new Promise(function(r,a){if(e.getAttribute(n)!==null)return r();var i=ir(e.children),o=i.filter(function(S){return S.getAttribute(vs)===t})[0],l=Xt.getComputedStyle(e,t),s=l.getPropertyValue("font-family").match(Y3),u=l.getPropertyValue("font-weight"),f=l.getPropertyValue("content");if(o&&!s)return e.removeChild(o),r();if(s&&f!=="none"&&f!==""){var m=l.getPropertyValue("content"),v=~["Sharp"].indexOf(s[2])?re:X,g=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(s[2])?ta[v][s[2].toLowerCase()]:Q3[v][u],y=qg(m),h=y.value,N=y.isSecondary,d=s[0].startsWith("FontAwesome"),c=Vu(g,h),p=c;if(d){var w=wg(h);w.iconName&&w.prefix&&(c=w.iconName,g=w.prefix)}if(c&&!N&&(!o||o.getAttribute(Ru)!==g||o.getAttribute($u)!==p)){e.setAttribute(n,p),o&&e.removeChild(o);var x=Hg(),E=x.extra;E.attributes[vs]=t,ks(c,g).then(function(S){var z=Wu(_(_({},x),{},{icons:{main:S,mask:Hu()},prefix:g,iconName:p,extra:E,watchable:!0})),D=K.createElement("svg");t==="::before"?e.insertBefore(D,e.firstChild):e.appendChild(D),D.outerHTML=z.map(function(M){return ma(M)}).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function ey(e){return Promise.all([Af(e,"::before"),Af(e,"::after")])}function ty(e){return e.parentNode!==document.head&&!~H3.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(vs)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Mf(e){if(Pt)return new Promise(function(t,n){var r=ir(e.querySelectorAll("*")).filter(ty).map(ey),a=Bu.begin("searchPseudoElements");X0(),Promise.all(r).then(function(){a(),Cs(),t()}).catch(function(){a(),Cs(),n()})})}var ny={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Mf,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?K:r;T.searchPseudoElements&&Mf(a)}}},Rf=!1,ry={mixout:function(){return{dom:{unwatch:function(){X0(),Rf=!0}}}},hooks:function(){return{bootstrap:function(){zf(ys("mutationObserverCallbacks",{}))},noAuto:function(){Fg()},watch:function(n){var r=n.observeMutationsRoot;Rf?Cs():zf(ys("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},$f=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),o=i[0],l=i.slice(1).join("-");if(o&&l==="h")return r.flipX=!0,r;if(o&&l==="v")return r.flipY=!0,r;if(l=parseFloat(l),isNaN(l))return r;switch(o){case"grow":r.size=r.size+l;break;case"shrink":r.size=r.size-l;break;case"left":r.x=r.x-l;break;case"right":r.x=r.x+l;break;case"up":r.y=r.y-l;break;case"down":r.y=r.y+l;break;case"rotate":r.rotate=r.rotate+l;break}return r},n)},ay={mixout:function(){return{parse:{transform:function(n){return $f(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=$f(a)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,o=n.iconWidth,l={transform:"translate(".concat(i/2," 256)")},s="translate(".concat(a.x*32,", ").concat(a.y*32,") "),u="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),f="rotate(".concat(a.rotate," 0 0)"),m={transform:"".concat(s," ").concat(u," ").concat(f)},v={transform:"translate(".concat(o/2*-1," -256)")},g={outer:l,inner:m,path:v};return{tag:"g",attributes:_({},g.outer),children:[{tag:"g",attributes:_({},g.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:_(_({},r.icon.attributes),g.path)}]}]}}}},sl={x:0,y:0,width:"100%",height:"100%"};function jf(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function iy(e){return e.tag==="g"?e.children:[e]}var oy={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?No(a.split(" ").map(function(o){return o.trim()})):Hu();return i.prefix||(i.prefix=Gt()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.mask,l=n.maskId,s=n.transform,u=i.width,f=i.icon,m=o.width,v=o.icon,g=ag({transform:s,containerWidth:m,iconWidth:u}),y={tag:"rect",attributes:_(_({},sl),{},{fill:"white"})},h=f.children?{children:f.children.map(jf)}:{},N={tag:"g",attributes:_({},g.inner),children:[jf(_({tag:f.tag,attributes:_(_({},f.attributes),g.path)},h))]},d={tag:"g",attributes:_({},g.outer),children:[N]},c="mask-".concat(l||aa()),p="clip-".concat(l||aa()),w={tag:"mask",attributes:_(_({},sl),{},{id:c,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[y,d]},x={tag:"defs",children:[{tag:"clipPath",attributes:{id:p},children:iy(v)},w]};return r.push(x,{tag:"rect",attributes:_({fill:"currentColor","clip-path":"url(#".concat(p,")"),mask:"url(#".concat(c,")")},sl)}),{children:r,attributes:a}}}},ly={provides:function(t){var n=!1;Xt.matchMedia&&(n=Xt.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:_(_({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=_(_({},i),{},{attributeName:"opacity"}),l={tag:"circle",attributes:_(_({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||l.children.push({tag:"animate",attributes:_(_({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:_(_({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(l),r.push({tag:"path",attributes:_(_({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:_(_({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:_(_({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:_(_({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},sy={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},uy=[lg,Xg,Gg,Kg,Zg,ny,ry,ay,oy,ly,sy];Sg(uy,{mixoutsTo:He});He.noAuto;He.config;He.library;He.dom;var bs=He.parse;He.findIconDefinition;He.toHtml;var cy=He.icon;He.layer;He.text;He.counter;var I={},fy={get exports(){return I},set exports(e){I=e}},dy="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",my=dy,py=my;function K0(){}function Z0(){}Z0.resetWarningCache=K0;var vy=function(){function e(r,a,i,o,l,s){if(s!==py){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:Z0,resetWarningCache:K0};return n.PropTypes=n,n};fy.exports=vy();function Ff(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function $t(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Ff(Object(n),!0).forEach(function(r){Rn(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ff(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Ri(e){return Ri=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ri(e)}function Rn(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function hy(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function gy(e,t){if(e==null)return{};var n=hy(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Es(e){return yy(e)||wy(e)||xy(e)||ky()}function yy(e){if(Array.isArray(e))return Ns(e)}function wy(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function xy(e,t){if(e){if(typeof e=="string")return Ns(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Ns(e,t)}}function Ns(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function ky(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Sy(e){var t,n=e.beat,r=e.fade,a=e.beatFade,i=e.bounce,o=e.shake,l=e.flash,s=e.spin,u=e.spinPulse,f=e.spinReverse,m=e.pulse,v=e.fixedWidth,g=e.inverse,y=e.border,h=e.listItem,N=e.flip,d=e.size,c=e.rotation,p=e.pull,w=(t={"fa-beat":n,"fa-fade":r,"fa-beat-fade":a,"fa-bounce":i,"fa-shake":o,"fa-flash":l,"fa-spin":s,"fa-spin-reverse":f,"fa-spin-pulse":u,"fa-pulse":m,"fa-fw":v,"fa-inverse":g,"fa-border":y,"fa-li":h,"fa-flip":N===!0,"fa-flip-horizontal":N==="horizontal"||N==="both","fa-flip-vertical":N==="vertical"||N==="both"},Rn(t,"fa-".concat(d),typeof d<"u"&&d!==null),Rn(t,"fa-rotate-".concat(c),typeof c<"u"&&c!==null&&c!==0),Rn(t,"fa-pull-".concat(p),typeof p<"u"&&p!==null),Rn(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(w).map(function(x){return w[x]?x:null}).filter(function(x){return x})}function Cy(e){return e=e-0,e===e}function J0(e){return Cy(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(t,n){return n?n.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var by=["style"];function Ey(e){return e.charAt(0).toUpperCase()+e.slice(1)}function Ny(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=J0(n.slice(0,r)),i=n.slice(r+1).trim();return a.startsWith("webkit")?t[Ey(a)]=i:t[a]=i,t},{})}function q0(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(s){return q0(e,s)}),a=Object.keys(t.attributes||{}).reduce(function(s,u){var f=t.attributes[u];switch(u){case"class":s.attrs.className=f,delete t.attributes.class;break;case"style":s.attrs.style=Ny(f);break;default:u.indexOf("aria-")===0||u.indexOf("data-")===0?s.attrs[u.toLowerCase()]=f:s.attrs[J0(u)]=f}return s},{attrs:{}}),i=n.style,o=i===void 0?{}:i,l=gy(n,by);return a.attrs.style=$t($t({},a.attrs.style),o),e.apply(void 0,[t.tag,$t($t({},a.attrs),l)].concat(Es(r)))}var em=!1;try{em=!0}catch{}function _y(){if(!em&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Df(e){if(e&&Ri(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(bs.icon)return bs.icon(e);if(e===null)return null;if(e&&Ri(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function ul(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?Rn({},e,t):{}}var Ne=ji.forwardRef(function(e,t){var n=e.icon,r=e.mask,a=e.symbol,i=e.className,o=e.title,l=e.titleId,s=e.maskId,u=Df(n),f=ul("classes",[].concat(Es(Sy(e)),Es(i.split(" ")))),m=ul("transform",typeof e.transform=="string"?bs.transform(e.transform):e.transform),v=ul("mask",Df(r)),g=cy(u,$t($t($t($t({},f),m),v),{},{symbol:a,title:o,titleId:l,maskId:s}));if(!g)return _y("Could not find icon",u),null;var y=g.abstract,h={ref:t};return Object.keys(e).forEach(function(N){Ne.defaultProps.hasOwnProperty(N)||(h[N]=e[N])}),Py(y[0],h)});Ne.displayName="FontAwesomeIcon";Ne.propTypes={beat:I.bool,border:I.bool,beatFade:I.bool,bounce:I.bool,className:I.string,fade:I.bool,flash:I.bool,mask:I.oneOfType([I.object,I.array,I.string]),maskId:I.string,fixedWidth:I.bool,inverse:I.bool,flip:I.oneOf([!0,!1,"horizontal","vertical","both"]),icon:I.oneOfType([I.object,I.array,I.string]),listItem:I.bool,pull:I.oneOf(["right","left"]),pulse:I.bool,rotation:I.oneOf([0,90,180,270]),shake:I.bool,size:I.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:I.bool,spinPulse:I.bool,spinReverse:I.bool,symbol:I.oneOfType([I.bool,I.string]),title:I.string,titleId:I.string,transform:I.oneOfType([I.string,I.object]),swapOpacity:I.bool};Ne.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var Py=q0.bind(null,ji.createElement),Oy={prefix:"fas",iconName:"angles-down",icon:[448,512,["angle-double-down"],"f103","M246.6 470.6c-12.5 12.5-32.8 12.5-45.3 0l-160-160c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L224 402.7 361.4 265.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-160 160zm160-352l-160 160c-12.5 12.5-32.8 12.5-45.3 0l-160-160c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L224 210.7 361.4 73.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3z"]},zy={prefix:"fas",iconName:"code",icon:[640,512,[],"f121","M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z"]},Ty={prefix:"fas",iconName:"arrow-up-right-from-square",icon:[512,512,["external-link"],"f08e","M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z"]},Ly={prefix:"fas",iconName:"angles-up",icon:[448,512,["angle-double-up"],"f102","M246.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L224 109.3 361.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160zm160 352l-160-160c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L224 301.3 361.4 438.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3z"]},Iy={prefix:"fas",iconName:"bars-staggered",icon:[512,512,["reorder","stream"],"f550","M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM64 256c0-17.7 14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"]},Ay={prefix:"fas",iconName:"xmark",icon:[320,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"]};const My=()=>C("section",{id:"contact",children:V("div",{className:"container mx-auto px-4 py-40 gap-10",children:[V("div",{className:"flex flex-col gap-10 text-center max-w-3xl mx-auto",children:[C("h2",{className:"text-3xl font-bold lg:text-5xl",children:"Contáctame"}),V(u3,{delay:800,children:[V("p",{className:"text-slate-300",children:["Si le gusta mi trabajo o quiere contratarme, no dude en enviarme un correo electrónico a ",C("span",{className:"bg-cyan-900 px-1 py-1",children:"damianf2022@gmail.com"})," o simplemente presione el botón a continuación."]}),C(k0,{delay:1500,effect:"shakeX",children:C("a",{href:"mailto:damianf2022@gmail.com",className:"bg-gray-200 text-black font-bold px-10 py-4 rounded hover:bg-cyan-800 hover:text-white duration-200",children:"¡Entrevístame!"})})]})]}),C("div",{className:"text-right",children:C("a",{href:"#home",className:"shadow-xl",children:C(Ne,{icon:Ly,className:"animate-bounce text-2xl lg:text-4xl bg-gray-900 rounded-full p-2 hover:bg-sky-700 duration-200"})})})]})});function tm(){return V("div",{className:"flex gap-4 lg:gap-6 justify-center lg:justify-start",children:[C("a",{href:"https://github.com/damianf2022",children:C(Ne,{icon:Z1,className:"text-2xl lg:text-3xl hover:text-stone-700 duration-300"})}),C("a",{href:"https://www.linkedin.com/in/damian-f/",children:C(Ne,{icon:jv,className:"text-2xl lg:text-3xl hover:text-blue-400 duration-300"})}),C("a",{href:"https://twitter.com/damian_ferrera",children:C(Ne,{icon:Hv,className:"text-2xl lg:text-3xl hover:text-sky-400 duration-300"})})]})}function _s(e){return V("a",{className:e.classes,href:e.link,target:"blank",children:[e.linkText," ",C(Ne,{icon:e.icon})]})}const nm="/portfolio_vite/assets/FerreraDamian-e608653a.pdf";function Ry(){return C("section",{id:"hero",className:"bg-gradient-to-r from-gray-600 via-gray-700 to-gray-800",children:V("div",{className:"container mx-auto px-4 py-56",children:[C("div",{className:"text-center lg:text-left flex flex-col lg:justify-center",children:V("div",{className:"flex flex-col gap-6 my-auto lg:pl-20",children:[V("div",{children:[C("span",{className:"lg:text-5xl mb-6 mt-6",children:C(k0,{effect:"shakeX",children:"👋"})}),C("h4",{className:"lg:text-3xl mb-4",children:"Hola, soy "}),C("h1",{className:"text-5xl font-bold md:text-6xl lg:text-7xl xl:text-8xl",children:"Damian Ferrera"}),V("h2",{className:"lg:text-xl mt-4 text-slate-300",children:["Estoy buscando mi primera oportunidad en el ",C("span",{className:"text-cyan-400",children:"desarrollo web"})," "]})]}),C(tm,{}),C(_s,{link:nm,linkText:"Mira mi Curriculum",classes:"mx-auto lg:mx-0 bg-slate-900 rounded shadow-xl px-8 py-4 w-60 hover:bg-sky-800 hover:scale-105 duration-200"})]})}),C("a",{href:"#skills",children:C(Ne,{icon:Oy,className:"bg-gray-800 rounded-full p-2 text-2xl lg:text-4xl animate-bounce hover:bg-sky-700 duration-200"})})]})})}const $y=()=>{const[e,t]=$.useState(!1),n=()=>{t(!e)},r=[{id:1,liName:"Sobre Mi",link:"#about"},{id:2,liName:"Skills",link:"#skills"},{id:3,liName:"Proyectos",link:"#projects"},{id:4,liName:"Contacto",link:"#contact"}];return C("header",{className:"px-4 py-4 fixed left-0 right-0 mx-auto bg-gray-900 shadow-2xl z-50 md:backdrop-blur-xl md:bg-opacity-70",children:V("nav",{className:"container mx-auto flex justify-between items-center",children:[C("h2",{className:"cursor-default text-3xl",children:C(Ne,{icon:zy})}),C("ul",{className:(e?"left-0":"-left-full")+" fixed bottom-0 top-20 bg-gray-900 bg-opacity-95 md:bg-transparent w-10/12 px-4 py-6 md:py-0 space-y-5 md:static md:flex md:space-y-0 md:gap-8 justify-center text-md font-bold xl:text-lg transition-left duration-200",children:r.map(a=>C("li",{className:"hover:md:translate-y-1 duration-100",children:C("a",{className:"hover:text-cyan-500 duration-100",href:a.link,children:a.liName})},a.id))}),V("div",{className:"flex gap-8 items-center",children:[C("a",{href:nm,alt:"Damian Ferrera",target:"blank",className:"px-6 py-3 border rounded hover:rounded-lg hover:bg-cyan-800 duration-200",children:"Curriculum"}),e?C("button",{className:"md:hidden",onClick:n,children:C(Ne,{icon:Ay,className:"text-4xl cursor-pointer hover:text-red-600 duration-100"})}):C("button",{className:"md:hidden",onClick:n,children:C(Ne,{icon:Iy,className:"text-4xl cursor-pointer hover:text-cyan-600 duration-100"})})]})]})})},jy=()=>C("section",{id:"projects",children:V("div",{className:"container mx-auto px-4 py-40",children:[C("div",{className:"py-4",children:C("h2",{className:"text-3xl font-bold lg:text-5xl text-center lg:text-left",children:"Proyectos Personales"})}),C(S0,{children:C("div",{className:"grid ms:grid-cols-2 xl:grid-cols-3 gap-10 mt-8",children:Kv.map(e=>V("div",{className:"flex flex-col shadow-2xl bg-gray-900 rounded md:hover:scale-105 md:hover:bg-stone-900 duration-200",children:[C("img",{src:e.imgSrc,alt:e.alt}),V("div",{className:"px-8 py-10 flex flex-col gap-4",children:[C("h3",{className:"text-2xl lg:text-3xl font-bold text-cyan-500",children:e.projectName}),V("h4",{children:[C("span",{children:"Tecnologias usadas "}),e.technologies]}),C("p",{className:"text-slate-300",children:e.description}),V("div",{children:[C(_s,{classes:"bg-slate-200 text-black font-bold px-6 py-2 m-2 rounded hover:bg-gray-400 duration:200",linkText:"Open",link:e.projectLink,icon:Ty}),C(_s,{classes:"bg-gray-700 px-6 py-2 rounded hover:bg-cyan-800 duration:200",linkText:"Github",link:e.githubLink,icon:Z1})]})]})]},e.id))})})]})}),Fy=()=>C("section",{id:"skills",className:"bg-gray-900",children:V("div",{className:"container mx-auto px-4 py-40",children:[C("h2",{className:"text-3xl lg:text-5xl font-bold text-center lg:text-left pb-12",children:"Skills"}),C(z3,{children:C("ul",{className:"grid gap-3 grid-cols-2 md:grid-cols-5 lg:grid-cols-5 xl:grid-cols-5",children:Gv.map(e=>V("li",{className:"shadow-lg rounded bg-gray-800 flex flex-col items-center gap-2 p-4 hover:scale-110 hover:bg-cyan-800 duration-200",children:[C("strong",{className:"text-lg lg:font-bold",children:C("span",{className:"hover:text-sky-700",children:e.name})}),C(Ne,{icon:e.icon,className:"text-6xl lg:text-8xl"})]},e.id))})})]})}),Dy=()=>{const e=new Date().getFullYear();return C("footer",{className:"bg-gray-900",children:V("div",{className:"container mx-auto px-4 py-20 text-center flex flex-col gap-4",children:[V("div",{className:"flex flex-col gap-4 md:flex-row md:justify-between md:items-center md:gap-0",children:[C(Xh,{children:V("p",{children:["Creado por Damian © ",e," "]})}),C(tm,{})]}),C("hr",{className:"opacity-30"}),C(Gf,{children:V("p",{className:"text-sm text-gray-300",children:["Hecho con ",V("a",{href:"https://reactjs.org/",children:[C(Ne,{icon:K1}),"(React)"]})]})})]})})};function Uy(){return V("main",{id:"home",className:"text-white bg-gray-800",children:[C($y,{}),C(Ry,{}),C(T3,{}),C(Fy,{}),C(jy,{}),C("hr",{className:"opacity-30"}),C(My,{}),C(Dy,{})]})}cl.createRoot(document.getElementById("root")).render(C(ji.StrictMode,{children:C(Uy,{})}));
