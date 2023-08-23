/*! For license information please see main.bundle.js.LICENSE.txt */
var EntryPoint;(()=>{var e={242:(e,t,r)=>{(t=r(645)(!1)).push([e.id,"/** @format */\n\nhtml { \n\t--primario: rgba(0, 81, 139, 1);\n\t--primario10: rgb(113, 147, 188);\n\t--primario-10: rgba(0, 41, 93, 1);\n\t--on-primario: rgba(245, 245, 245, 1);\n\t--on-primario-bajada: rgba(255, 255, 255, 0.6);\n\t--secundario: rgba(0, 147, 171, 1);\n\t--secundario10: rgba(86, 196, 221, 1);\n\t--secundario-10: rgba(0, 101, 124, 1);\n\t--on-secundario: rgba(255, 255, 255, 1);\n\t--on-secundario-bajada: rgba(255, 255, 255, 0.6);\n\t--terciario: rgba(254, 203, 25, 1);\n\t--terciario10: rgba(255, 254, 88, 1);\n\t--terciario-10: rgba(198, 155, 0, 1);\n\t--on-terciario: rgba(66, 66, 66, 1);\n\t--on-terciario-bajada: rgba(0, 0, 0, 0.6);\n\t--ok: rgba(168, 235, 16, 1);\n\t--warning: rgb(235, 224, 16);\n\t--error: #b00020;\n\n\t--cumplido: rgba(168, 235, 16, 1);\n\t--pendiente:rgba(166, 166, 166, 1);\n\t--alertado:rgb(235, 224, 16);\n\t--vencido:#b00020;\n\t--vigente:#0084b0;\n\t--anulado:#7200b0;\n\t--pausado:#003bb0;\n\n\n\t--aplicacion: rgba(224, 224, 224, 1);\n\t--on-aplicacion: rgba(0, 0, 0, 0.87);\n\t--on-aplicacion-disabled: rgba(0, 0, 0, 0.38);\n\t--on-aplicacion-separador: rgba(0, 0, 0, 0.12);\n\t--on-aplicacion-bajada: rgba(0, 0, 0, 0.6);\n\t--formulario: rgba(238, 238, 238, 1);\n\t--formulario-disabled: rgb(192, 192, 192);\n\t--on-formulario: rgba(0, 0, 0, 0.87);\n\t--on-formulario-disabled: rgba(0, 0, 0, 0.38);\n\t--on-formulario-separador: rgba(0, 0, 0, 0.12);\n\t--on-formulario-bajada: rgba(0, 0, 0, 0.6);\n\t--velo: rgba(0, 0, 0, 0.32);\n\t--negro: rgb(0, 0, 0);\n\t--blanco:rgb(255,255,255)\n}\n\n@media (prefers-color-scheme: dark) {\n\thtml {\n\t\t--formulario: #343434;\n\t\t--formulario-disabled: rgb(72, 72, 72);\n\t\t--on-formulario: rgba(255, 255, 255, 0.87);\n\t\t--on-formulario-disabled: rgba(255, 255, 255, 0.38);\n\t\t--on-formulario-separador: rgba(255, 255, 255, 0.12);\n\t\t--on-formulario-bajada: rgba(255, 255, 255, 0.6);\n\n\t\t--aplicacion: #121212;\n\t\t--on-aplicacion: rgba(255, 255, 255, 0.87);\n\t\t--on-aplicacion-disabled: rgba(255, 255, 255, 0.38);\n\t\t--on-aplicacion-separador: rgba(255, 255, 255, 0.12);\n\t\t--on-aplicacion-bajada: rgba(255, 255, 255, 0.6);\n\n\t\t--error: #cf6679;\n\n\t\t--primario: var(--primario10);\n\t\t--negro:rgb(255, 255, 255);\n\t\t--blanco:rgb(0,0,0)\n\t}\n}\n",""]),e.exports=t},719:(e,t,r)=>{(t=r(645)(!1)).push([e.id,"/** @format */\n\nhtml {\n    --font-header-h1-family: inherit;\n    --font-header-h1-size: 1.2rem;\n    --font-header-h1-weight: 600;\n\n    --font-header-h1-menos-family: inherit;\n    --font-header-h1-menos-size: 0.9rem;\n    --font-header-h1-menos-weight: normal;\n\n    --font-header-h2-family: inherit;\n    --font-header-h2-size: 0.7rem;\n    --font-header-h2-weight: 600;\n\n    --font-bajada-family: inherit;\n    --font-bajada-size: 1rem;\n    --font-bajada-weight: normal;\n\n    --font-label-family: inherit;\n    --font-label-size: 0.8rem;\n    --font-label-weight: normal;\n\n    --font-error-family: inherit;\n    --font-error-size: 0.8rem;\n    --font-error-weight: normal;\n}\n",""]),e.exports=t},238:(e,t,r)=>{var i=r(645),o=r(667),n=r(903);t=i(!1);var a=o(n);t.push([e.id,"/** @format */\n\nhtml {\n    --logo: url("+a+');\n    width: 100vw;\n    height: 100vh;\n    overflow-x: hidden;\n    overflow-y: hidden;\n    padding: 0;\n    margin: 0;\n    border: 0;\n}\n\nbody {\n    width: 100vw;\n    height: 100vh;\n    overflow-x: hidden;\n    overflow-y: hidden;\n    padding: 0;\n    margin: 0;\n    border: 0;\n    position: fixed;\n    font-family: "Nunito";\n    display: grid;\n    place-content: stretch;\n}\n',""]),e.exports=t},845:(e,t,r)=>{(t=r(645)(!1)).push([e.id,"/** @format */\n\n@media only screen and (max-width: 600px) {\n    html {\n        font-size: 4vmin;\n    }\n}\n\n@media only screen and (max-width: 800px) and (min-width: 601px) {\n    html {\n        font-size: 3vmin;\n    }\n}\n\n@media only screen and (min-width: 801px) {\n    html {\n        font-size: 2.3vmin;\n    }\n}\n",""]),e.exports=t},20:(e,t,r)=>{var i=r(645),o=r(667),n=r(80);t=i(!1);var a=o(n);t.push([e.id,"@font-face {\n    font-family: 'Nunito', sans-serif;\n    font-style: normal;\n    font-weight: normal;\n    src: url("+a+") format('ttf');\n}\nhtml{\n    font-family: 'Nunito',sans-serif;\n}\n\n\nbody{\n    font-family: 'Nunito',sans-serif;\n}",""]),e.exports=t},94:(e,t,r)=>{(t=r(645)(!1)).push([e.id,"/** @format */\n\nhtml {\n    --shadow-none-box: none;\n    --shadow-none-z: 0;\n\n    --shadow-elevation-2-box: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);\n    --shadow-elevation-2-z: 200;\n\n    --shadow-elevation-3-box: 0 3px 4px 0 rgba(0, 0, 0, 0.14), 0 1px 8px 0 rgba(0, 0, 0, 0.12), 0 3px 3px -2px rgba(0, 0, 0, 0.4);\n    --shadow-elevation-3-z: 300;\n\n    --shadow-elevation-4-box: 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.4);\n    --shadow-elevation-4-z: 400;\n\n    --shadow-elevation-6-box: 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12), 0 3px 5px -1px rgba(0, 0, 0, 0.4);\n    --shadow-elevation-6-z: 600;\n\n    --shadow-elevation-8-box: 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.4);\n    --shadow-elevation-8-z: 800;\n\n    --shadow-elevation-12-box: 0 12px 16px 1px rgba(0, 0, 0, 0.14), 0 4px 22px 3px rgba(0, 0, 0, 0.12), 0 6px 7px -4px rgba(0, 0, 0, 0.4);\n    --shadow-elevation-12-z: 1200;\n\n    --shadow-elevation-16-box: 0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.4);\n    --shadow-elevation-16-z: 1600;\n\n    --shadow-elevation-24-box: 0 24px 38px 3px rgba(0, 0, 0, 0.14), 0 9px 46px 8px rgba(0, 0, 0, 0.12), 0 11px 15px -7px rgba(0, 0, 0, 0.4);\n    --shadow-elevation-24-z: 2400;\n\n    --control-radius: 0.2rem;\n}\n",""]),e.exports=t},645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r=function(e,t){var r=e[1]||"",i=e[3];if(!i)return r;if(t&&"function"==typeof btoa){var o=(a=i,s=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(l," */")),n=i.sources.map((function(e){return"/*# sourceURL=".concat(i.sourceRoot||"").concat(e," */")}));return[r].concat(n).concat([o]).join("\n")}var a,s,l;return[r].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(r,"}"):r})).join("")},t.i=function(e,r,i){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(i)for(var n=0;n<this.length;n++){var a=this[n][0];null!=a&&(o[a]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);i&&o[l[0]]||(r&&(l[2]?l[2]="".concat(r," and ").concat(l[2]):l[2]=r),t.push(l))}},t}},667:e=>{"use strict";e.exports=function(e,t){return t||(t={}),"string"!=typeof(e=e&&e.__esModule?e.default:e)?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e)}},903:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>i});const i=r.p+"f362e46826f4ed49dda912420df04ff8.png"},486:function(e,t,r){var i;e=r.nmd(e),function(){var o,n="Expected a function",a="__lodash_hash_undefined__",s="__lodash_placeholder__",l=16,d=32,c=64,u=128,p=256,h=1/0,m=9007199254740991,f=NaN,g=4294967295,v=[["ary",u],["bind",1],["bindKey",2],["curry",8],["curryRight",l],["flip",512],["partial",d],["partialRight",c],["rearg",p]],b="[object Arguments]",y="[object Array]",w="[object Boolean]",S="[object Date]",A="[object Error]",_="[object Function]",x="[object GeneratorFunction]",T="[object Map]",E="[object Number]",k="[object Object]",C="[object Promise]",D="[object RegExp]",R="[object Set]",I="[object String]",j="[object Symbol]",O="[object WeakMap]",z="[object ArrayBuffer]",P="[object DataView]",L="[object Float32Array]",q="[object Float64Array]",U="[object Int8Array]",M="[object Int16Array]",$="[object Int32Array]",B="[object Uint8Array]",N="[object Uint8ClampedArray]",H="[object Uint16Array]",F="[object Uint32Array]",G=/\b__p \+= '';/g,V=/\b(__p \+=) '' \+/g,Q=/(__e\(.*?\)|\b__t\)) \+\n'';/g,Y=/&(?:amp|lt|gt|quot|#39);/g,Z=/[&<>"']/g,W=RegExp(Y.source),X=RegExp(Z.source),J=/<%-([\s\S]+?)%>/g,K=/<%([\s\S]+?)%>/g,ee=/<%=([\s\S]+?)%>/g,te=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,re=/^\w*$/,ie=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,oe=/[\\^$.*+?()[\]{}|]/g,ne=RegExp(oe.source),ae=/^\s+/,se=/\s/,le=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,de=/\{\n\/\* \[wrapped with (.+)\] \*/,ce=/,? & /,ue=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,pe=/[()=,{}\[\]\/\s]/,he=/\\(\\)?/g,me=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,fe=/\w*$/,ge=/^[-+]0x[0-9a-f]+$/i,ve=/^0b[01]+$/i,be=/^\[object .+?Constructor\]$/,ye=/^0o[0-7]+$/i,we=/^(?:0|[1-9]\d*)$/,Se=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Ae=/($^)/,_e=/['\n\r\u2028\u2029\\]/g,xe="\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff",Te="\\u2700-\\u27bf",Ee="a-z\\xdf-\\xf6\\xf8-\\xff",ke="A-Z\\xc0-\\xd6\\xd8-\\xde",Ce="\\ufe0e\\ufe0f",De="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Re="['’]",Ie="[\\ud800-\\udfff]",je="["+De+"]",Oe="["+xe+"]",ze="\\d+",Pe="[\\u2700-\\u27bf]",Le="["+Ee+"]",qe="[^\\ud800-\\udfff"+De+ze+Te+Ee+ke+"]",Ue="\\ud83c[\\udffb-\\udfff]",Me="[^\\ud800-\\udfff]",$e="(?:\\ud83c[\\udde6-\\uddff]){2}",Be="[\\ud800-\\udbff][\\udc00-\\udfff]",Ne="["+ke+"]",He="(?:"+Le+"|"+qe+")",Fe="(?:"+Ne+"|"+qe+")",Ge="(?:['’](?:d|ll|m|re|s|t|ve))?",Ve="(?:['’](?:D|LL|M|RE|S|T|VE))?",Qe="(?:"+Oe+"|"+Ue+")"+"?",Ye="[\\ufe0e\\ufe0f]?",Ze=Ye+Qe+("(?:\\u200d(?:"+[Me,$e,Be].join("|")+")"+Ye+Qe+")*"),We="(?:"+[Pe,$e,Be].join("|")+")"+Ze,Xe="(?:"+[Me+Oe+"?",Oe,$e,Be,Ie].join("|")+")",Je=RegExp(Re,"g"),Ke=RegExp(Oe,"g"),et=RegExp(Ue+"(?="+Ue+")|"+Xe+Ze,"g"),tt=RegExp([Ne+"?"+Le+"+"+Ge+"(?="+[je,Ne,"$"].join("|")+")",Fe+"+"+Ve+"(?="+[je,Ne+He,"$"].join("|")+")",Ne+"?"+He+"+"+Ge,Ne+"+"+Ve,"\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",ze,We].join("|"),"g"),rt=RegExp("[\\u200d\\ud800-\\udfff"+xe+Ce+"]"),it=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,ot=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],nt=-1,at={};at[L]=at[q]=at[U]=at[M]=at[$]=at[B]=at[N]=at[H]=at[F]=!0,at[b]=at[y]=at[z]=at[w]=at[P]=at[S]=at[A]=at[_]=at[T]=at[E]=at[k]=at[D]=at[R]=at[I]=at[O]=!1;var st={};st[b]=st[y]=st[z]=st[P]=st[w]=st[S]=st[L]=st[q]=st[U]=st[M]=st[$]=st[T]=st[E]=st[k]=st[D]=st[R]=st[I]=st[j]=st[B]=st[N]=st[H]=st[F]=!0,st[A]=st[_]=st[O]=!1;var lt={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},dt=parseFloat,ct=parseInt,ut="object"==typeof r.g&&r.g&&r.g.Object===Object&&r.g,pt="object"==typeof self&&self&&self.Object===Object&&self,ht=ut||pt||Function("return this")(),mt=t&&!t.nodeType&&t,ft=mt&&e&&!e.nodeType&&e,gt=ft&&ft.exports===mt,vt=gt&&ut.process,bt=function(){try{var e=ft&&ft.require&&ft.require("util").types;return e||vt&&vt.binding&&vt.binding("util")}catch(e){}}(),yt=bt&&bt.isArrayBuffer,wt=bt&&bt.isDate,St=bt&&bt.isMap,At=bt&&bt.isRegExp,_t=bt&&bt.isSet,xt=bt&&bt.isTypedArray;function Tt(e,t,r){switch(r.length){case 0:return e.call(t);case 1:return e.call(t,r[0]);case 2:return e.call(t,r[0],r[1]);case 3:return e.call(t,r[0],r[1],r[2])}return e.apply(t,r)}function Et(e,t,r,i){for(var o=-1,n=null==e?0:e.length;++o<n;){var a=e[o];t(i,a,r(a),e)}return i}function kt(e,t){for(var r=-1,i=null==e?0:e.length;++r<i&&!1!==t(e[r],r,e););return e}function Ct(e,t){for(var r=null==e?0:e.length;r--&&!1!==t(e[r],r,e););return e}function Dt(e,t){for(var r=-1,i=null==e?0:e.length;++r<i;)if(!t(e[r],r,e))return!1;return!0}function Rt(e,t){for(var r=-1,i=null==e?0:e.length,o=0,n=[];++r<i;){var a=e[r];t(a,r,e)&&(n[o++]=a)}return n}function It(e,t){return!!(null==e?0:e.length)&&Bt(e,t,0)>-1}function jt(e,t,r){for(var i=-1,o=null==e?0:e.length;++i<o;)if(r(t,e[i]))return!0;return!1}function Ot(e,t){for(var r=-1,i=null==e?0:e.length,o=Array(i);++r<i;)o[r]=t(e[r],r,e);return o}function zt(e,t){for(var r=-1,i=t.length,o=e.length;++r<i;)e[o+r]=t[r];return e}function Pt(e,t,r,i){var o=-1,n=null==e?0:e.length;for(i&&n&&(r=e[++o]);++o<n;)r=t(r,e[o],o,e);return r}function Lt(e,t,r,i){var o=null==e?0:e.length;for(i&&o&&(r=e[--o]);o--;)r=t(r,e[o],o,e);return r}function qt(e,t){for(var r=-1,i=null==e?0:e.length;++r<i;)if(t(e[r],r,e))return!0;return!1}var Ut=Gt("length");function Mt(e,t,r){var i;return r(e,(function(e,r,o){if(t(e,r,o))return i=r,!1})),i}function $t(e,t,r,i){for(var o=e.length,n=r+(i?1:-1);i?n--:++n<o;)if(t(e[n],n,e))return n;return-1}function Bt(e,t,r){return t==t?function(e,t,r){var i=r-1,o=e.length;for(;++i<o;)if(e[i]===t)return i;return-1}(e,t,r):$t(e,Ht,r)}function Nt(e,t,r,i){for(var o=r-1,n=e.length;++o<n;)if(i(e[o],t))return o;return-1}function Ht(e){return e!=e}function Ft(e,t){var r=null==e?0:e.length;return r?Yt(e,t)/r:f}function Gt(e){return function(t){return null==t?o:t[e]}}function Vt(e){return function(t){return null==e?o:e[t]}}function Qt(e,t,r,i,o){return o(e,(function(e,o,n){r=i?(i=!1,e):t(r,e,o,n)})),r}function Yt(e,t){for(var r,i=-1,n=e.length;++i<n;){var a=t(e[i]);a!==o&&(r=r===o?a:r+a)}return r}function Zt(e,t){for(var r=-1,i=Array(e);++r<e;)i[r]=t(r);return i}function Wt(e){return e?e.slice(0,mr(e)+1).replace(ae,""):e}function Xt(e){return function(t){return e(t)}}function Jt(e,t){return Ot(t,(function(t){return e[t]}))}function Kt(e,t){return e.has(t)}function er(e,t){for(var r=-1,i=e.length;++r<i&&Bt(t,e[r],0)>-1;);return r}function tr(e,t){for(var r=e.length;r--&&Bt(t,e[r],0)>-1;);return r}function rr(e,t){for(var r=e.length,i=0;r--;)e[r]===t&&++i;return i}var ir=Vt({À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"}),or=Vt({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"});function nr(e){return"\\"+lt[e]}function ar(e){return rt.test(e)}function sr(e){var t=-1,r=Array(e.size);return e.forEach((function(e,i){r[++t]=[i,e]})),r}function lr(e,t){return function(r){return e(t(r))}}function dr(e,t){for(var r=-1,i=e.length,o=0,n=[];++r<i;){var a=e[r];a!==t&&a!==s||(e[r]=s,n[o++]=r)}return n}function cr(e){var t=-1,r=Array(e.size);return e.forEach((function(e){r[++t]=e})),r}function ur(e){var t=-1,r=Array(e.size);return e.forEach((function(e){r[++t]=[e,e]})),r}function pr(e){return ar(e)?function(e){var t=et.lastIndex=0;for(;et.test(e);)++t;return t}(e):Ut(e)}function hr(e){return ar(e)?function(e){return e.match(et)||[]}(e):function(e){return e.split("")}(e)}function mr(e){for(var t=e.length;t--&&se.test(e.charAt(t)););return t}var fr=Vt({"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"});var gr=function e(t){var r,i=(t=null==t?ht:gr.defaults(ht.Object(),t,gr.pick(ht,ot))).Array,se=t.Date,xe=t.Error,Te=t.Function,Ee=t.Math,ke=t.Object,Ce=t.RegExp,De=t.String,Re=t.TypeError,Ie=i.prototype,je=Te.prototype,Oe=ke.prototype,ze=t["__core-js_shared__"],Pe=je.toString,Le=Oe.hasOwnProperty,qe=0,Ue=(r=/[^.]+$/.exec(ze&&ze.keys&&ze.keys.IE_PROTO||""))?"Symbol(src)_1."+r:"",Me=Oe.toString,$e=Pe.call(ke),Be=ht._,Ne=Ce("^"+Pe.call(Le).replace(oe,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),He=gt?t.Buffer:o,Fe=t.Symbol,Ge=t.Uint8Array,Ve=He?He.allocUnsafe:o,Qe=lr(ke.getPrototypeOf,ke),Ye=ke.create,Ze=Oe.propertyIsEnumerable,We=Ie.splice,Xe=Fe?Fe.isConcatSpreadable:o,et=Fe?Fe.iterator:o,rt=Fe?Fe.toStringTag:o,lt=function(){try{var e=mn(ke,"defineProperty");return e({},"",{}),e}catch(e){}}(),ut=t.clearTimeout!==ht.clearTimeout&&t.clearTimeout,pt=se&&se.now!==ht.Date.now&&se.now,mt=t.setTimeout!==ht.setTimeout&&t.setTimeout,ft=Ee.ceil,vt=Ee.floor,bt=ke.getOwnPropertySymbols,Ut=He?He.isBuffer:o,Vt=t.isFinite,vr=Ie.join,br=lr(ke.keys,ke),yr=Ee.max,wr=Ee.min,Sr=se.now,Ar=t.parseInt,_r=Ee.random,xr=Ie.reverse,Tr=mn(t,"DataView"),Er=mn(t,"Map"),kr=mn(t,"Promise"),Cr=mn(t,"Set"),Dr=mn(t,"WeakMap"),Rr=mn(ke,"create"),Ir=Dr&&new Dr,jr={},Or=Bn(Tr),zr=Bn(Er),Pr=Bn(kr),Lr=Bn(Cr),qr=Bn(Dr),Ur=Fe?Fe.prototype:o,Mr=Ur?Ur.valueOf:o,$r=Ur?Ur.toString:o;function Br(e){if(os(e)&&!Qa(e)&&!(e instanceof Gr)){if(e instanceof Fr)return e;if(Le.call(e,"__wrapped__"))return Nn(e)}return new Fr(e)}var Nr=function(){function e(){}return function(t){if(!is(t))return{};if(Ye)return Ye(t);e.prototype=t;var r=new e;return e.prototype=o,r}}();function Hr(){}function Fr(e,t){this.__wrapped__=e,this.__actions__=[],this.__chain__=!!t,this.__index__=0,this.__values__=o}function Gr(e){this.__wrapped__=e,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=g,this.__views__=[]}function Vr(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var i=e[t];this.set(i[0],i[1])}}function Qr(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var i=e[t];this.set(i[0],i[1])}}function Yr(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var i=e[t];this.set(i[0],i[1])}}function Zr(e){var t=-1,r=null==e?0:e.length;for(this.__data__=new Yr;++t<r;)this.add(e[t])}function Wr(e){var t=this.__data__=new Qr(e);this.size=t.size}function Xr(e,t){var r=Qa(e),i=!r&&Va(e),o=!r&&!i&&Xa(e),n=!r&&!i&&!o&&ps(e),a=r||i||o||n,s=a?Zt(e.length,De):[],l=s.length;for(var d in e)!t&&!Le.call(e,d)||a&&("length"==d||o&&("offset"==d||"parent"==d)||n&&("buffer"==d||"byteLength"==d||"byteOffset"==d)||Sn(d,l))||s.push(d);return s}function Jr(e){var t=e.length;return t?e[Zi(0,t-1)]:o}function Kr(e,t){return Un(Io(e),li(t,0,e.length))}function ei(e){return Un(Io(e))}function ti(e,t,r){(r!==o&&!Ha(e[t],r)||r===o&&!(t in e))&&ai(e,t,r)}function ri(e,t,r){var i=e[t];Le.call(e,t)&&Ha(i,r)&&(r!==o||t in e)||ai(e,t,r)}function ii(e,t){for(var r=e.length;r--;)if(Ha(e[r][0],t))return r;return-1}function oi(e,t,r,i){return hi(e,(function(e,o,n){t(i,e,r(e),n)})),i}function ni(e,t){return e&&jo(t,zs(t),e)}function ai(e,t,r){"__proto__"==t&&lt?lt(e,t,{configurable:!0,enumerable:!0,value:r,writable:!0}):e[t]=r}function si(e,t){for(var r=-1,n=t.length,a=i(n),s=null==e;++r<n;)a[r]=s?o:Ds(e,t[r]);return a}function li(e,t,r){return e==e&&(r!==o&&(e=e<=r?e:r),t!==o&&(e=e>=t?e:t)),e}function di(e,t,r,i,n,a){var s,l=1&t,d=2&t,c=4&t;if(r&&(s=n?r(e,i,n,a):r(e)),s!==o)return s;if(!is(e))return e;var u=Qa(e);if(u){if(s=function(e){var t=e.length,r=new e.constructor(t);t&&"string"==typeof e[0]&&Le.call(e,"index")&&(r.index=e.index,r.input=e.input);return r}(e),!l)return Io(e,s)}else{var p=vn(e),h=p==_||p==x;if(Xa(e))return To(e,l);if(p==k||p==b||h&&!n){if(s=d||h?{}:yn(e),!l)return d?function(e,t){return jo(e,gn(e),t)}(e,function(e,t){return e&&jo(t,Ps(t),e)}(s,e)):function(e,t){return jo(e,fn(e),t)}(e,ni(s,e))}else{if(!st[p])return n?e:{};s=function(e,t,r){var i=e.constructor;switch(t){case z:return Eo(e);case w:case S:return new i(+e);case P:return function(e,t){var r=t?Eo(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.byteLength)}(e,r);case L:case q:case U:case M:case $:case B:case N:case H:case F:return ko(e,r);case T:return new i;case E:case I:return new i(e);case D:return function(e){var t=new e.constructor(e.source,fe.exec(e));return t.lastIndex=e.lastIndex,t}(e);case R:return new i;case j:return o=e,Mr?ke(Mr.call(o)):{}}var o}(e,p,l)}}a||(a=new Wr);var m=a.get(e);if(m)return m;a.set(e,s),ds(e)?e.forEach((function(i){s.add(di(i,t,r,i,e,a))})):ns(e)&&e.forEach((function(i,o){s.set(o,di(i,t,r,o,e,a))}));var f=u?o:(c?d?sn:an:d?Ps:zs)(e);return kt(f||e,(function(i,o){f&&(i=e[o=i]),ri(s,o,di(i,t,r,o,e,a))})),s}function ci(e,t,r){var i=r.length;if(null==e)return!i;for(e=ke(e);i--;){var n=r[i],a=t[n],s=e[n];if(s===o&&!(n in e)||!a(s))return!1}return!0}function ui(e,t,r){if("function"!=typeof e)throw new Re(n);return zn((function(){e.apply(o,r)}),t)}function pi(e,t,r,i){var o=-1,n=It,a=!0,s=e.length,l=[],d=t.length;if(!s)return l;r&&(t=Ot(t,Xt(r))),i?(n=jt,a=!1):t.length>=200&&(n=Kt,a=!1,t=new Zr(t));e:for(;++o<s;){var c=e[o],u=null==r?c:r(c);if(c=i||0!==c?c:0,a&&u==u){for(var p=d;p--;)if(t[p]===u)continue e;l.push(c)}else n(t,u,i)||l.push(c)}return l}Br.templateSettings={escape:J,evaluate:K,interpolate:ee,variable:"",imports:{_:Br}},Br.prototype=Hr.prototype,Br.prototype.constructor=Br,Fr.prototype=Nr(Hr.prototype),Fr.prototype.constructor=Fr,Gr.prototype=Nr(Hr.prototype),Gr.prototype.constructor=Gr,Vr.prototype.clear=function(){this.__data__=Rr?Rr(null):{},this.size=0},Vr.prototype.delete=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},Vr.prototype.get=function(e){var t=this.__data__;if(Rr){var r=t[e];return r===a?o:r}return Le.call(t,e)?t[e]:o},Vr.prototype.has=function(e){var t=this.__data__;return Rr?t[e]!==o:Le.call(t,e)},Vr.prototype.set=function(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=Rr&&t===o?a:t,this},Qr.prototype.clear=function(){this.__data__=[],this.size=0},Qr.prototype.delete=function(e){var t=this.__data__,r=ii(t,e);return!(r<0)&&(r==t.length-1?t.pop():We.call(t,r,1),--this.size,!0)},Qr.prototype.get=function(e){var t=this.__data__,r=ii(t,e);return r<0?o:t[r][1]},Qr.prototype.has=function(e){return ii(this.__data__,e)>-1},Qr.prototype.set=function(e,t){var r=this.__data__,i=ii(r,e);return i<0?(++this.size,r.push([e,t])):r[i][1]=t,this},Yr.prototype.clear=function(){this.size=0,this.__data__={hash:new Vr,map:new(Er||Qr),string:new Vr}},Yr.prototype.delete=function(e){var t=pn(this,e).delete(e);return this.size-=t?1:0,t},Yr.prototype.get=function(e){return pn(this,e).get(e)},Yr.prototype.has=function(e){return pn(this,e).has(e)},Yr.prototype.set=function(e,t){var r=pn(this,e),i=r.size;return r.set(e,t),this.size+=r.size==i?0:1,this},Zr.prototype.add=Zr.prototype.push=function(e){return this.__data__.set(e,a),this},Zr.prototype.has=function(e){return this.__data__.has(e)},Wr.prototype.clear=function(){this.__data__=new Qr,this.size=0},Wr.prototype.delete=function(e){var t=this.__data__,r=t.delete(e);return this.size=t.size,r},Wr.prototype.get=function(e){return this.__data__.get(e)},Wr.prototype.has=function(e){return this.__data__.has(e)},Wr.prototype.set=function(e,t){var r=this.__data__;if(r instanceof Qr){var i=r.__data__;if(!Er||i.length<199)return i.push([e,t]),this.size=++r.size,this;r=this.__data__=new Yr(i)}return r.set(e,t),this.size=r.size,this};var hi=Po(Si),mi=Po(Ai,!0);function fi(e,t){var r=!0;return hi(e,(function(e,i,o){return r=!!t(e,i,o)})),r}function gi(e,t,r){for(var i=-1,n=e.length;++i<n;){var a=e[i],s=t(a);if(null!=s&&(l===o?s==s&&!us(s):r(s,l)))var l=s,d=a}return d}function vi(e,t){var r=[];return hi(e,(function(e,i,o){t(e,i,o)&&r.push(e)})),r}function bi(e,t,r,i,o){var n=-1,a=e.length;for(r||(r=wn),o||(o=[]);++n<a;){var s=e[n];t>0&&r(s)?t>1?bi(s,t-1,r,i,o):zt(o,s):i||(o[o.length]=s)}return o}var yi=Lo(),wi=Lo(!0);function Si(e,t){return e&&yi(e,t,zs)}function Ai(e,t){return e&&wi(e,t,zs)}function _i(e,t){return Rt(t,(function(t){return es(e[t])}))}function xi(e,t){for(var r=0,i=(t=So(t,e)).length;null!=e&&r<i;)e=e[$n(t[r++])];return r&&r==i?e:o}function Ti(e,t,r){var i=t(e);return Qa(e)?i:zt(i,r(e))}function Ei(e){return null==e?e===o?"[object Undefined]":"[object Null]":rt&&rt in ke(e)?function(e){var t=Le.call(e,rt),r=e[rt];try{e[rt]=o;var i=!0}catch(e){}var n=Me.call(e);i&&(t?e[rt]=r:delete e[rt]);return n}(e):function(e){return Me.call(e)}(e)}function ki(e,t){return e>t}function Ci(e,t){return null!=e&&Le.call(e,t)}function Di(e,t){return null!=e&&t in ke(e)}function Ri(e,t,r){for(var n=r?jt:It,a=e[0].length,s=e.length,l=s,d=i(s),c=1/0,u=[];l--;){var p=e[l];l&&t&&(p=Ot(p,Xt(t))),c=wr(p.length,c),d[l]=!r&&(t||a>=120&&p.length>=120)?new Zr(l&&p):o}p=e[0];var h=-1,m=d[0];e:for(;++h<a&&u.length<c;){var f=p[h],g=t?t(f):f;if(f=r||0!==f?f:0,!(m?Kt(m,g):n(u,g,r))){for(l=s;--l;){var v=d[l];if(!(v?Kt(v,g):n(e[l],g,r)))continue e}m&&m.push(g),u.push(f)}}return u}function Ii(e,t,r){var i=null==(e=Rn(e,t=So(t,e)))?e:e[$n(Kn(t))];return null==i?o:Tt(i,e,r)}function ji(e){return os(e)&&Ei(e)==b}function Oi(e,t,r,i,n){return e===t||(null==e||null==t||!os(e)&&!os(t)?e!=e&&t!=t:function(e,t,r,i,n,a){var s=Qa(e),l=Qa(t),d=s?y:vn(e),c=l?y:vn(t),u=(d=d==b?k:d)==k,p=(c=c==b?k:c)==k,h=d==c;if(h&&Xa(e)){if(!Xa(t))return!1;s=!0,u=!1}if(h&&!u)return a||(a=new Wr),s||ps(e)?on(e,t,r,i,n,a):function(e,t,r,i,o,n,a){switch(r){case P:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case z:return!(e.byteLength!=t.byteLength||!n(new Ge(e),new Ge(t)));case w:case S:case E:return Ha(+e,+t);case A:return e.name==t.name&&e.message==t.message;case D:case I:return e==t+"";case T:var s=sr;case R:var l=1&i;if(s||(s=cr),e.size!=t.size&&!l)return!1;var d=a.get(e);if(d)return d==t;i|=2,a.set(e,t);var c=on(s(e),s(t),i,o,n,a);return a.delete(e),c;case j:if(Mr)return Mr.call(e)==Mr.call(t)}return!1}(e,t,d,r,i,n,a);if(!(1&r)){var m=u&&Le.call(e,"__wrapped__"),f=p&&Le.call(t,"__wrapped__");if(m||f){var g=m?e.value():e,v=f?t.value():t;return a||(a=new Wr),n(g,v,r,i,a)}}if(!h)return!1;return a||(a=new Wr),function(e,t,r,i,n,a){var s=1&r,l=an(e),d=l.length,c=an(t).length;if(d!=c&&!s)return!1;var u=d;for(;u--;){var p=l[u];if(!(s?p in t:Le.call(t,p)))return!1}var h=a.get(e),m=a.get(t);if(h&&m)return h==t&&m==e;var f=!0;a.set(e,t),a.set(t,e);var g=s;for(;++u<d;){var v=e[p=l[u]],b=t[p];if(i)var y=s?i(b,v,p,t,e,a):i(v,b,p,e,t,a);if(!(y===o?v===b||n(v,b,r,i,a):y)){f=!1;break}g||(g="constructor"==p)}if(f&&!g){var w=e.constructor,S=t.constructor;w==S||!("constructor"in e)||!("constructor"in t)||"function"==typeof w&&w instanceof w&&"function"==typeof S&&S instanceof S||(f=!1)}return a.delete(e),a.delete(t),f}(e,t,r,i,n,a)}(e,t,r,i,Oi,n))}function zi(e,t,r,i){var n=r.length,a=n,s=!i;if(null==e)return!a;for(e=ke(e);n--;){var l=r[n];if(s&&l[2]?l[1]!==e[l[0]]:!(l[0]in e))return!1}for(;++n<a;){var d=(l=r[n])[0],c=e[d],u=l[1];if(s&&l[2]){if(c===o&&!(d in e))return!1}else{var p=new Wr;if(i)var h=i(c,u,d,e,t,p);if(!(h===o?Oi(u,c,3,i,p):h))return!1}}return!0}function Pi(e){return!(!is(e)||(t=e,Ue&&Ue in t))&&(es(e)?Ne:be).test(Bn(e));var t}function Li(e){return"function"==typeof e?e:null==e?al:"object"==typeof e?Qa(e)?Ni(e[0],e[1]):Bi(e):fl(e)}function qi(e){if(!En(e))return br(e);var t=[];for(var r in ke(e))Le.call(e,r)&&"constructor"!=r&&t.push(r);return t}function Ui(e){if(!is(e))return function(e){var t=[];if(null!=e)for(var r in ke(e))t.push(r);return t}(e);var t=En(e),r=[];for(var i in e)("constructor"!=i||!t&&Le.call(e,i))&&r.push(i);return r}function Mi(e,t){return e<t}function $i(e,t){var r=-1,o=Za(e)?i(e.length):[];return hi(e,(function(e,i,n){o[++r]=t(e,i,n)})),o}function Bi(e){var t=hn(e);return 1==t.length&&t[0][2]?Cn(t[0][0],t[0][1]):function(r){return r===e||zi(r,e,t)}}function Ni(e,t){return _n(e)&&kn(t)?Cn($n(e),t):function(r){var i=Ds(r,e);return i===o&&i===t?Rs(r,e):Oi(t,i,3)}}function Hi(e,t,r,i,n){e!==t&&yi(t,(function(a,s){if(n||(n=new Wr),is(a))!function(e,t,r,i,n,a,s){var l=jn(e,r),d=jn(t,r),c=s.get(d);if(c)return void ti(e,r,c);var u=a?a(l,d,r+"",e,t,s):o,p=u===o;if(p){var h=Qa(d),m=!h&&Xa(d),f=!h&&!m&&ps(d);u=d,h||m||f?Qa(l)?u=l:Wa(l)?u=Io(l):m?(p=!1,u=To(d,!0)):f?(p=!1,u=ko(d,!0)):u=[]:ss(d)||Va(d)?(u=l,Va(l)?u=ws(l):is(l)&&!es(l)||(u=yn(d))):p=!1}p&&(s.set(d,u),n(u,d,i,a,s),s.delete(d));ti(e,r,u)}(e,t,s,r,Hi,i,n);else{var l=i?i(jn(e,s),a,s+"",e,t,n):o;l===o&&(l=a),ti(e,s,l)}}),Ps)}function Fi(e,t){var r=e.length;if(r)return Sn(t+=t<0?r:0,r)?e[t]:o}function Gi(e,t,r){t=t.length?Ot(t,(function(e){return Qa(e)?function(t){return xi(t,1===e.length?e[0]:e)}:e})):[al];var i=-1;t=Ot(t,Xt(un()));var o=$i(e,(function(e,r,o){var n=Ot(t,(function(t){return t(e)}));return{criteria:n,index:++i,value:e}}));return function(e,t){var r=e.length;for(e.sort(t);r--;)e[r]=e[r].value;return e}(o,(function(e,t){return function(e,t,r){var i=-1,o=e.criteria,n=t.criteria,a=o.length,s=r.length;for(;++i<a;){var l=Co(o[i],n[i]);if(l)return i>=s?l:l*("desc"==r[i]?-1:1)}return e.index-t.index}(e,t,r)}))}function Vi(e,t,r){for(var i=-1,o=t.length,n={};++i<o;){var a=t[i],s=xi(e,a);r(s,a)&&eo(n,So(a,e),s)}return n}function Qi(e,t,r,i){var o=i?Nt:Bt,n=-1,a=t.length,s=e;for(e===t&&(t=Io(t)),r&&(s=Ot(e,Xt(r)));++n<a;)for(var l=0,d=t[n],c=r?r(d):d;(l=o(s,c,l,i))>-1;)s!==e&&We.call(s,l,1),We.call(e,l,1);return e}function Yi(e,t){for(var r=e?t.length:0,i=r-1;r--;){var o=t[r];if(r==i||o!==n){var n=o;Sn(o)?We.call(e,o,1):ho(e,o)}}return e}function Zi(e,t){return e+vt(_r()*(t-e+1))}function Wi(e,t){var r="";if(!e||t<1||t>m)return r;do{t%2&&(r+=e),(t=vt(t/2))&&(e+=e)}while(t);return r}function Xi(e,t){return Pn(Dn(e,t,al),e+"")}function Ji(e){return Jr(Hs(e))}function Ki(e,t){var r=Hs(e);return Un(r,li(t,0,r.length))}function eo(e,t,r,i){if(!is(e))return e;for(var n=-1,a=(t=So(t,e)).length,s=a-1,l=e;null!=l&&++n<a;){var d=$n(t[n]),c=r;if("__proto__"===d||"constructor"===d||"prototype"===d)return e;if(n!=s){var u=l[d];(c=i?i(u,d,l):o)===o&&(c=is(u)?u:Sn(t[n+1])?[]:{})}ri(l,d,c),l=l[d]}return e}var to=Ir?function(e,t){return Ir.set(e,t),e}:al,ro=lt?function(e,t){return lt(e,"toString",{configurable:!0,enumerable:!1,value:il(t),writable:!0})}:al;function io(e){return Un(Hs(e))}function oo(e,t,r){var o=-1,n=e.length;t<0&&(t=-t>n?0:n+t),(r=r>n?n:r)<0&&(r+=n),n=t>r?0:r-t>>>0,t>>>=0;for(var a=i(n);++o<n;)a[o]=e[o+t];return a}function no(e,t){var r;return hi(e,(function(e,i,o){return!(r=t(e,i,o))})),!!r}function ao(e,t,r){var i=0,o=null==e?i:e.length;if("number"==typeof t&&t==t&&o<=2147483647){for(;i<o;){var n=i+o>>>1,a=e[n];null!==a&&!us(a)&&(r?a<=t:a<t)?i=n+1:o=n}return o}return so(e,t,al,r)}function so(e,t,r,i){var n=0,a=null==e?0:e.length;if(0===a)return 0;for(var s=(t=r(t))!=t,l=null===t,d=us(t),c=t===o;n<a;){var u=vt((n+a)/2),p=r(e[u]),h=p!==o,m=null===p,f=p==p,g=us(p);if(s)var v=i||f;else v=c?f&&(i||h):l?f&&h&&(i||!m):d?f&&h&&!m&&(i||!g):!m&&!g&&(i?p<=t:p<t);v?n=u+1:a=u}return wr(a,4294967294)}function lo(e,t){for(var r=-1,i=e.length,o=0,n=[];++r<i;){var a=e[r],s=t?t(a):a;if(!r||!Ha(s,l)){var l=s;n[o++]=0===a?0:a}}return n}function co(e){return"number"==typeof e?e:us(e)?f:+e}function uo(e){if("string"==typeof e)return e;if(Qa(e))return Ot(e,uo)+"";if(us(e))return $r?$r.call(e):"";var t=e+"";return"0"==t&&1/e==-1/0?"-0":t}function po(e,t,r){var i=-1,o=It,n=e.length,a=!0,s=[],l=s;if(r)a=!1,o=jt;else if(n>=200){var d=t?null:Xo(e);if(d)return cr(d);a=!1,o=Kt,l=new Zr}else l=t?[]:s;e:for(;++i<n;){var c=e[i],u=t?t(c):c;if(c=r||0!==c?c:0,a&&u==u){for(var p=l.length;p--;)if(l[p]===u)continue e;t&&l.push(u),s.push(c)}else o(l,u,r)||(l!==s&&l.push(u),s.push(c))}return s}function ho(e,t){return null==(e=Rn(e,t=So(t,e)))||delete e[$n(Kn(t))]}function mo(e,t,r,i){return eo(e,t,r(xi(e,t)),i)}function fo(e,t,r,i){for(var o=e.length,n=i?o:-1;(i?n--:++n<o)&&t(e[n],n,e););return r?oo(e,i?0:n,i?n+1:o):oo(e,i?n+1:0,i?o:n)}function go(e,t){var r=e;return r instanceof Gr&&(r=r.value()),Pt(t,(function(e,t){return t.func.apply(t.thisArg,zt([e],t.args))}),r)}function vo(e,t,r){var o=e.length;if(o<2)return o?po(e[0]):[];for(var n=-1,a=i(o);++n<o;)for(var s=e[n],l=-1;++l<o;)l!=n&&(a[n]=pi(a[n]||s,e[l],t,r));return po(bi(a,1),t,r)}function bo(e,t,r){for(var i=-1,n=e.length,a=t.length,s={};++i<n;){var l=i<a?t[i]:o;r(s,e[i],l)}return s}function yo(e){return Wa(e)?e:[]}function wo(e){return"function"==typeof e?e:al}function So(e,t){return Qa(e)?e:_n(e,t)?[e]:Mn(Ss(e))}var Ao=Xi;function _o(e,t,r){var i=e.length;return r=r===o?i:r,!t&&r>=i?e:oo(e,t,r)}var xo=ut||function(e){return ht.clearTimeout(e)};function To(e,t){if(t)return e.slice();var r=e.length,i=Ve?Ve(r):new e.constructor(r);return e.copy(i),i}function Eo(e){var t=new e.constructor(e.byteLength);return new Ge(t).set(new Ge(e)),t}function ko(e,t){var r=t?Eo(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.length)}function Co(e,t){if(e!==t){var r=e!==o,i=null===e,n=e==e,a=us(e),s=t!==o,l=null===t,d=t==t,c=us(t);if(!l&&!c&&!a&&e>t||a&&s&&d&&!l&&!c||i&&s&&d||!r&&d||!n)return 1;if(!i&&!a&&!c&&e<t||c&&r&&n&&!i&&!a||l&&r&&n||!s&&n||!d)return-1}return 0}function Do(e,t,r,o){for(var n=-1,a=e.length,s=r.length,l=-1,d=t.length,c=yr(a-s,0),u=i(d+c),p=!o;++l<d;)u[l]=t[l];for(;++n<s;)(p||n<a)&&(u[r[n]]=e[n]);for(;c--;)u[l++]=e[n++];return u}function Ro(e,t,r,o){for(var n=-1,a=e.length,s=-1,l=r.length,d=-1,c=t.length,u=yr(a-l,0),p=i(u+c),h=!o;++n<u;)p[n]=e[n];for(var m=n;++d<c;)p[m+d]=t[d];for(;++s<l;)(h||n<a)&&(p[m+r[s]]=e[n++]);return p}function Io(e,t){var r=-1,o=e.length;for(t||(t=i(o));++r<o;)t[r]=e[r];return t}function jo(e,t,r,i){var n=!r;r||(r={});for(var a=-1,s=t.length;++a<s;){var l=t[a],d=i?i(r[l],e[l],l,r,e):o;d===o&&(d=e[l]),n?ai(r,l,d):ri(r,l,d)}return r}function Oo(e,t){return function(r,i){var o=Qa(r)?Et:oi,n=t?t():{};return o(r,e,un(i,2),n)}}function zo(e){return Xi((function(t,r){var i=-1,n=r.length,a=n>1?r[n-1]:o,s=n>2?r[2]:o;for(a=e.length>3&&"function"==typeof a?(n--,a):o,s&&An(r[0],r[1],s)&&(a=n<3?o:a,n=1),t=ke(t);++i<n;){var l=r[i];l&&e(t,l,i,a)}return t}))}function Po(e,t){return function(r,i){if(null==r)return r;if(!Za(r))return e(r,i);for(var o=r.length,n=t?o:-1,a=ke(r);(t?n--:++n<o)&&!1!==i(a[n],n,a););return r}}function Lo(e){return function(t,r,i){for(var o=-1,n=ke(t),a=i(t),s=a.length;s--;){var l=a[e?s:++o];if(!1===r(n[l],l,n))break}return t}}function qo(e){return function(t){var r=ar(t=Ss(t))?hr(t):o,i=r?r[0]:t.charAt(0),n=r?_o(r,1).join(""):t.slice(1);return i[e]()+n}}function Uo(e){return function(t){return Pt(el(Vs(t).replace(Je,"")),e,"")}}function Mo(e){return function(){var t=arguments;switch(t.length){case 0:return new e;case 1:return new e(t[0]);case 2:return new e(t[0],t[1]);case 3:return new e(t[0],t[1],t[2]);case 4:return new e(t[0],t[1],t[2],t[3]);case 5:return new e(t[0],t[1],t[2],t[3],t[4]);case 6:return new e(t[0],t[1],t[2],t[3],t[4],t[5]);case 7:return new e(t[0],t[1],t[2],t[3],t[4],t[5],t[6])}var r=Nr(e.prototype),i=e.apply(r,t);return is(i)?i:r}}function $o(e){return function(t,r,i){var n=ke(t);if(!Za(t)){var a=un(r,3);t=zs(t),r=function(e){return a(n[e],e,n)}}var s=e(t,r,i);return s>-1?n[a?t[s]:s]:o}}function Bo(e){return nn((function(t){var r=t.length,i=r,a=Fr.prototype.thru;for(e&&t.reverse();i--;){var s=t[i];if("function"!=typeof s)throw new Re(n);if(a&&!l&&"wrapper"==dn(s))var l=new Fr([],!0)}for(i=l?i:r;++i<r;){var d=dn(s=t[i]),c="wrapper"==d?ln(s):o;l=c&&xn(c[0])&&424==c[1]&&!c[4].length&&1==c[9]?l[dn(c[0])].apply(l,c[3]):1==s.length&&xn(s)?l[d]():l.thru(s)}return function(){var e=arguments,i=e[0];if(l&&1==e.length&&Qa(i))return l.plant(i).value();for(var o=0,n=r?t[o].apply(this,e):i;++o<r;)n=t[o].call(this,n);return n}}))}function No(e,t,r,n,a,s,l,d,c,p){var h=t&u,m=1&t,f=2&t,g=24&t,v=512&t,b=f?o:Mo(e);return function o(){for(var u=arguments.length,y=i(u),w=u;w--;)y[w]=arguments[w];if(g)var S=cn(o),A=rr(y,S);if(n&&(y=Do(y,n,a,g)),s&&(y=Ro(y,s,l,g)),u-=A,g&&u<p){var _=dr(y,S);return Zo(e,t,No,o.placeholder,r,y,_,d,c,p-u)}var x=m?r:this,T=f?x[e]:e;return u=y.length,d?y=In(y,d):v&&u>1&&y.reverse(),h&&c<u&&(y.length=c),this&&this!==ht&&this instanceof o&&(T=b||Mo(T)),T.apply(x,y)}}function Ho(e,t){return function(r,i){return function(e,t,r,i){return Si(e,(function(e,o,n){t(i,r(e),o,n)})),i}(r,e,t(i),{})}}function Fo(e,t){return function(r,i){var n;if(r===o&&i===o)return t;if(r!==o&&(n=r),i!==o){if(n===o)return i;"string"==typeof r||"string"==typeof i?(r=uo(r),i=uo(i)):(r=co(r),i=co(i)),n=e(r,i)}return n}}function Go(e){return nn((function(t){return t=Ot(t,Xt(un())),Xi((function(r){var i=this;return e(t,(function(e){return Tt(e,i,r)}))}))}))}function Vo(e,t){var r=(t=t===o?" ":uo(t)).length;if(r<2)return r?Wi(t,e):t;var i=Wi(t,ft(e/pr(t)));return ar(t)?_o(hr(i),0,e).join(""):i.slice(0,e)}function Qo(e){return function(t,r,n){return n&&"number"!=typeof n&&An(t,r,n)&&(r=n=o),t=gs(t),r===o?(r=t,t=0):r=gs(r),function(e,t,r,o){for(var n=-1,a=yr(ft((t-e)/(r||1)),0),s=i(a);a--;)s[o?a:++n]=e,e+=r;return s}(t,r,n=n===o?t<r?1:-1:gs(n),e)}}function Yo(e){return function(t,r){return"string"==typeof t&&"string"==typeof r||(t=ys(t),r=ys(r)),e(t,r)}}function Zo(e,t,r,i,n,a,s,l,u,p){var h=8&t;t|=h?d:c,4&(t&=~(h?c:d))||(t&=-4);var m=[e,t,n,h?a:o,h?s:o,h?o:a,h?o:s,l,u,p],f=r.apply(o,m);return xn(e)&&On(f,m),f.placeholder=i,Ln(f,e,t)}function Wo(e){var t=Ee[e];return function(e,r){if(e=ys(e),(r=null==r?0:wr(vs(r),292))&&Vt(e)){var i=(Ss(e)+"e").split("e");return+((i=(Ss(t(i[0]+"e"+(+i[1]+r)))+"e").split("e"))[0]+"e"+(+i[1]-r))}return t(e)}}var Xo=Cr&&1/cr(new Cr([,-0]))[1]==h?function(e){return new Cr(e)}:ul;function Jo(e){return function(t){var r=vn(t);return r==T?sr(t):r==R?ur(t):function(e,t){return Ot(t,(function(t){return[t,e[t]]}))}(t,e(t))}}function Ko(e,t,r,a,h,m,f,g){var v=2&t;if(!v&&"function"!=typeof e)throw new Re(n);var b=a?a.length:0;if(b||(t&=-97,a=h=o),f=f===o?f:yr(vs(f),0),g=g===o?g:vs(g),b-=h?h.length:0,t&c){var y=a,w=h;a=h=o}var S=v?o:ln(e),A=[e,t,r,a,h,y,w,m,f,g];if(S&&function(e,t){var r=e[1],i=t[1],o=r|i,n=o<131,a=i==u&&8==r||i==u&&r==p&&e[7].length<=t[8]||384==i&&t[7].length<=t[8]&&8==r;if(!n&&!a)return e;1&i&&(e[2]=t[2],o|=1&r?0:4);var l=t[3];if(l){var d=e[3];e[3]=d?Do(d,l,t[4]):l,e[4]=d?dr(e[3],s):t[4]}(l=t[5])&&(d=e[5],e[5]=d?Ro(d,l,t[6]):l,e[6]=d?dr(e[5],s):t[6]);(l=t[7])&&(e[7]=l);i&u&&(e[8]=null==e[8]?t[8]:wr(e[8],t[8]));null==e[9]&&(e[9]=t[9]);e[0]=t[0],e[1]=o}(A,S),e=A[0],t=A[1],r=A[2],a=A[3],h=A[4],!(g=A[9]=A[9]===o?v?0:e.length:yr(A[9]-b,0))&&24&t&&(t&=-25),t&&1!=t)_=8==t||t==l?function(e,t,r){var n=Mo(e);return function a(){for(var s=arguments.length,l=i(s),d=s,c=cn(a);d--;)l[d]=arguments[d];var u=s<3&&l[0]!==c&&l[s-1]!==c?[]:dr(l,c);return(s-=u.length)<r?Zo(e,t,No,a.placeholder,o,l,u,o,o,r-s):Tt(this&&this!==ht&&this instanceof a?n:e,this,l)}}(e,t,g):t!=d&&33!=t||h.length?No.apply(o,A):function(e,t,r,o){var n=1&t,a=Mo(e);return function t(){for(var s=-1,l=arguments.length,d=-1,c=o.length,u=i(c+l),p=this&&this!==ht&&this instanceof t?a:e;++d<c;)u[d]=o[d];for(;l--;)u[d++]=arguments[++s];return Tt(p,n?r:this,u)}}(e,t,r,a);else var _=function(e,t,r){var i=1&t,o=Mo(e);return function t(){return(this&&this!==ht&&this instanceof t?o:e).apply(i?r:this,arguments)}}(e,t,r);return Ln((S?to:On)(_,A),e,t)}function en(e,t,r,i){return e===o||Ha(e,Oe[r])&&!Le.call(i,r)?t:e}function tn(e,t,r,i,n,a){return is(e)&&is(t)&&(a.set(t,e),Hi(e,t,o,tn,a),a.delete(t)),e}function rn(e){return ss(e)?o:e}function on(e,t,r,i,n,a){var s=1&r,l=e.length,d=t.length;if(l!=d&&!(s&&d>l))return!1;var c=a.get(e),u=a.get(t);if(c&&u)return c==t&&u==e;var p=-1,h=!0,m=2&r?new Zr:o;for(a.set(e,t),a.set(t,e);++p<l;){var f=e[p],g=t[p];if(i)var v=s?i(g,f,p,t,e,a):i(f,g,p,e,t,a);if(v!==o){if(v)continue;h=!1;break}if(m){if(!qt(t,(function(e,t){if(!Kt(m,t)&&(f===e||n(f,e,r,i,a)))return m.push(t)}))){h=!1;break}}else if(f!==g&&!n(f,g,r,i,a)){h=!1;break}}return a.delete(e),a.delete(t),h}function nn(e){return Pn(Dn(e,o,Yn),e+"")}function an(e){return Ti(e,zs,fn)}function sn(e){return Ti(e,Ps,gn)}var ln=Ir?function(e){return Ir.get(e)}:ul;function dn(e){for(var t=e.name+"",r=jr[t],i=Le.call(jr,t)?r.length:0;i--;){var o=r[i],n=o.func;if(null==n||n==e)return o.name}return t}function cn(e){return(Le.call(Br,"placeholder")?Br:e).placeholder}function un(){var e=Br.iteratee||sl;return e=e===sl?Li:e,arguments.length?e(arguments[0],arguments[1]):e}function pn(e,t){var r,i,o=e.__data__;return("string"==(i=typeof(r=t))||"number"==i||"symbol"==i||"boolean"==i?"__proto__"!==r:null===r)?o["string"==typeof t?"string":"hash"]:o.map}function hn(e){for(var t=zs(e),r=t.length;r--;){var i=t[r],o=e[i];t[r]=[i,o,kn(o)]}return t}function mn(e,t){var r=function(e,t){return null==e?o:e[t]}(e,t);return Pi(r)?r:o}var fn=bt?function(e){return null==e?[]:(e=ke(e),Rt(bt(e),(function(t){return Ze.call(e,t)})))}:bl,gn=bt?function(e){for(var t=[];e;)zt(t,fn(e)),e=Qe(e);return t}:bl,vn=Ei;function bn(e,t,r){for(var i=-1,o=(t=So(t,e)).length,n=!1;++i<o;){var a=$n(t[i]);if(!(n=null!=e&&r(e,a)))break;e=e[a]}return n||++i!=o?n:!!(o=null==e?0:e.length)&&rs(o)&&Sn(a,o)&&(Qa(e)||Va(e))}function yn(e){return"function"!=typeof e.constructor||En(e)?{}:Nr(Qe(e))}function wn(e){return Qa(e)||Va(e)||!!(Xe&&e&&e[Xe])}function Sn(e,t){var r=typeof e;return!!(t=null==t?m:t)&&("number"==r||"symbol"!=r&&we.test(e))&&e>-1&&e%1==0&&e<t}function An(e,t,r){if(!is(r))return!1;var i=typeof t;return!!("number"==i?Za(r)&&Sn(t,r.length):"string"==i&&t in r)&&Ha(r[t],e)}function _n(e,t){if(Qa(e))return!1;var r=typeof e;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!us(e))||(re.test(e)||!te.test(e)||null!=t&&e in ke(t))}function xn(e){var t=dn(e),r=Br[t];if("function"!=typeof r||!(t in Gr.prototype))return!1;if(e===r)return!0;var i=ln(r);return!!i&&e===i[0]}(Tr&&vn(new Tr(new ArrayBuffer(1)))!=P||Er&&vn(new Er)!=T||kr&&vn(kr.resolve())!=C||Cr&&vn(new Cr)!=R||Dr&&vn(new Dr)!=O)&&(vn=function(e){var t=Ei(e),r=t==k?e.constructor:o,i=r?Bn(r):"";if(i)switch(i){case Or:return P;case zr:return T;case Pr:return C;case Lr:return R;case qr:return O}return t});var Tn=ze?es:yl;function En(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||Oe)}function kn(e){return e==e&&!is(e)}function Cn(e,t){return function(r){return null!=r&&(r[e]===t&&(t!==o||e in ke(r)))}}function Dn(e,t,r){return t=yr(t===o?e.length-1:t,0),function(){for(var o=arguments,n=-1,a=yr(o.length-t,0),s=i(a);++n<a;)s[n]=o[t+n];n=-1;for(var l=i(t+1);++n<t;)l[n]=o[n];return l[t]=r(s),Tt(e,this,l)}}function Rn(e,t){return t.length<2?e:xi(e,oo(t,0,-1))}function In(e,t){for(var r=e.length,i=wr(t.length,r),n=Io(e);i--;){var a=t[i];e[i]=Sn(a,r)?n[a]:o}return e}function jn(e,t){if(("constructor"!==t||"function"!=typeof e[t])&&"__proto__"!=t)return e[t]}var On=qn(to),zn=mt||function(e,t){return ht.setTimeout(e,t)},Pn=qn(ro);function Ln(e,t,r){var i=t+"";return Pn(e,function(e,t){var r=t.length;if(!r)return e;var i=r-1;return t[i]=(r>1?"& ":"")+t[i],t=t.join(r>2?", ":" "),e.replace(le,"{\n/* [wrapped with "+t+"] */\n")}(i,function(e,t){return kt(v,(function(r){var i="_."+r[0];t&r[1]&&!It(e,i)&&e.push(i)})),e.sort()}(function(e){var t=e.match(de);return t?t[1].split(ce):[]}(i),r)))}function qn(e){var t=0,r=0;return function(){var i=Sr(),n=16-(i-r);if(r=i,n>0){if(++t>=800)return arguments[0]}else t=0;return e.apply(o,arguments)}}function Un(e,t){var r=-1,i=e.length,n=i-1;for(t=t===o?i:t;++r<t;){var a=Zi(r,n),s=e[a];e[a]=e[r],e[r]=s}return e.length=t,e}var Mn=function(e){var t=qa(e,(function(e){return 500===r.size&&r.clear(),e})),r=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(ie,(function(e,r,i,o){t.push(i?o.replace(he,"$1"):r||e)})),t}));function $n(e){if("string"==typeof e||us(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t}function Bn(e){if(null!=e){try{return Pe.call(e)}catch(e){}try{return e+""}catch(e){}}return""}function Nn(e){if(e instanceof Gr)return e.clone();var t=new Fr(e.__wrapped__,e.__chain__);return t.__actions__=Io(e.__actions__),t.__index__=e.__index__,t.__values__=e.__values__,t}var Hn=Xi((function(e,t){return Wa(e)?pi(e,bi(t,1,Wa,!0)):[]})),Fn=Xi((function(e,t){var r=Kn(t);return Wa(r)&&(r=o),Wa(e)?pi(e,bi(t,1,Wa,!0),un(r,2)):[]})),Gn=Xi((function(e,t){var r=Kn(t);return Wa(r)&&(r=o),Wa(e)?pi(e,bi(t,1,Wa,!0),o,r):[]}));function Vn(e,t,r){var i=null==e?0:e.length;if(!i)return-1;var o=null==r?0:vs(r);return o<0&&(o=yr(i+o,0)),$t(e,un(t,3),o)}function Qn(e,t,r){var i=null==e?0:e.length;if(!i)return-1;var n=i-1;return r!==o&&(n=vs(r),n=r<0?yr(i+n,0):wr(n,i-1)),$t(e,un(t,3),n,!0)}function Yn(e){return(null==e?0:e.length)?bi(e,1):[]}function Zn(e){return e&&e.length?e[0]:o}var Wn=Xi((function(e){var t=Ot(e,yo);return t.length&&t[0]===e[0]?Ri(t):[]})),Xn=Xi((function(e){var t=Kn(e),r=Ot(e,yo);return t===Kn(r)?t=o:r.pop(),r.length&&r[0]===e[0]?Ri(r,un(t,2)):[]})),Jn=Xi((function(e){var t=Kn(e),r=Ot(e,yo);return(t="function"==typeof t?t:o)&&r.pop(),r.length&&r[0]===e[0]?Ri(r,o,t):[]}));function Kn(e){var t=null==e?0:e.length;return t?e[t-1]:o}var ea=Xi(ta);function ta(e,t){return e&&e.length&&t&&t.length?Qi(e,t):e}var ra=nn((function(e,t){var r=null==e?0:e.length,i=si(e,t);return Yi(e,Ot(t,(function(e){return Sn(e,r)?+e:e})).sort(Co)),i}));function ia(e){return null==e?e:xr.call(e)}var oa=Xi((function(e){return po(bi(e,1,Wa,!0))})),na=Xi((function(e){var t=Kn(e);return Wa(t)&&(t=o),po(bi(e,1,Wa,!0),un(t,2))})),aa=Xi((function(e){var t=Kn(e);return t="function"==typeof t?t:o,po(bi(e,1,Wa,!0),o,t)}));function sa(e){if(!e||!e.length)return[];var t=0;return e=Rt(e,(function(e){if(Wa(e))return t=yr(e.length,t),!0})),Zt(t,(function(t){return Ot(e,Gt(t))}))}function la(e,t){if(!e||!e.length)return[];var r=sa(e);return null==t?r:Ot(r,(function(e){return Tt(t,o,e)}))}var da=Xi((function(e,t){return Wa(e)?pi(e,t):[]})),ca=Xi((function(e){return vo(Rt(e,Wa))})),ua=Xi((function(e){var t=Kn(e);return Wa(t)&&(t=o),vo(Rt(e,Wa),un(t,2))})),pa=Xi((function(e){var t=Kn(e);return t="function"==typeof t?t:o,vo(Rt(e,Wa),o,t)})),ha=Xi(sa);var ma=Xi((function(e){var t=e.length,r=t>1?e[t-1]:o;return r="function"==typeof r?(e.pop(),r):o,la(e,r)}));function fa(e){var t=Br(e);return t.__chain__=!0,t}function ga(e,t){return t(e)}var va=nn((function(e){var t=e.length,r=t?e[0]:0,i=this.__wrapped__,n=function(t){return si(t,e)};return!(t>1||this.__actions__.length)&&i instanceof Gr&&Sn(r)?((i=i.slice(r,+r+(t?1:0))).__actions__.push({func:ga,args:[n],thisArg:o}),new Fr(i,this.__chain__).thru((function(e){return t&&!e.length&&e.push(o),e}))):this.thru(n)}));var ba=Oo((function(e,t,r){Le.call(e,r)?++e[r]:ai(e,r,1)}));var ya=$o(Vn),wa=$o(Qn);function Sa(e,t){return(Qa(e)?kt:hi)(e,un(t,3))}function Aa(e,t){return(Qa(e)?Ct:mi)(e,un(t,3))}var _a=Oo((function(e,t,r){Le.call(e,r)?e[r].push(t):ai(e,r,[t])}));var xa=Xi((function(e,t,r){var o=-1,n="function"==typeof t,a=Za(e)?i(e.length):[];return hi(e,(function(e){a[++o]=n?Tt(t,e,r):Ii(e,t,r)})),a})),Ta=Oo((function(e,t,r){ai(e,r,t)}));function Ea(e,t){return(Qa(e)?Ot:$i)(e,un(t,3))}var ka=Oo((function(e,t,r){e[r?0:1].push(t)}),(function(){return[[],[]]}));var Ca=Xi((function(e,t){if(null==e)return[];var r=t.length;return r>1&&An(e,t[0],t[1])?t=[]:r>2&&An(t[0],t[1],t[2])&&(t=[t[0]]),Gi(e,bi(t,1),[])})),Da=pt||function(){return ht.Date.now()};function Ra(e,t,r){return t=r?o:t,t=e&&null==t?e.length:t,Ko(e,u,o,o,o,o,t)}function Ia(e,t){var r;if("function"!=typeof t)throw new Re(n);return e=vs(e),function(){return--e>0&&(r=t.apply(this,arguments)),e<=1&&(t=o),r}}var ja=Xi((function(e,t,r){var i=1;if(r.length){var o=dr(r,cn(ja));i|=d}return Ko(e,i,t,r,o)})),Oa=Xi((function(e,t,r){var i=3;if(r.length){var o=dr(r,cn(Oa));i|=d}return Ko(t,i,e,r,o)}));function za(e,t,r){var i,a,s,l,d,c,u=0,p=!1,h=!1,m=!0;if("function"!=typeof e)throw new Re(n);function f(t){var r=i,n=a;return i=a=o,u=t,l=e.apply(n,r)}function g(e){return u=e,d=zn(b,t),p?f(e):l}function v(e){var r=e-c;return c===o||r>=t||r<0||h&&e-u>=s}function b(){var e=Da();if(v(e))return y(e);d=zn(b,function(e){var r=t-(e-c);return h?wr(r,s-(e-u)):r}(e))}function y(e){return d=o,m&&i?f(e):(i=a=o,l)}function w(){var e=Da(),r=v(e);if(i=arguments,a=this,c=e,r){if(d===o)return g(c);if(h)return xo(d),d=zn(b,t),f(c)}return d===o&&(d=zn(b,t)),l}return t=ys(t)||0,is(r)&&(p=!!r.leading,s=(h="maxWait"in r)?yr(ys(r.maxWait)||0,t):s,m="trailing"in r?!!r.trailing:m),w.cancel=function(){d!==o&&xo(d),u=0,i=c=a=d=o},w.flush=function(){return d===o?l:y(Da())},w}var Pa=Xi((function(e,t){return ui(e,1,t)})),La=Xi((function(e,t,r){return ui(e,ys(t)||0,r)}));function qa(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new Re(n);var r=function(){var i=arguments,o=t?t.apply(this,i):i[0],n=r.cache;if(n.has(o))return n.get(o);var a=e.apply(this,i);return r.cache=n.set(o,a)||n,a};return r.cache=new(qa.Cache||Yr),r}function Ua(e){if("function"!=typeof e)throw new Re(n);return function(){var t=arguments;switch(t.length){case 0:return!e.call(this);case 1:return!e.call(this,t[0]);case 2:return!e.call(this,t[0],t[1]);case 3:return!e.call(this,t[0],t[1],t[2])}return!e.apply(this,t)}}qa.Cache=Yr;var Ma=Ao((function(e,t){var r=(t=1==t.length&&Qa(t[0])?Ot(t[0],Xt(un())):Ot(bi(t,1),Xt(un()))).length;return Xi((function(i){for(var o=-1,n=wr(i.length,r);++o<n;)i[o]=t[o].call(this,i[o]);return Tt(e,this,i)}))})),$a=Xi((function(e,t){var r=dr(t,cn($a));return Ko(e,d,o,t,r)})),Ba=Xi((function(e,t){var r=dr(t,cn(Ba));return Ko(e,c,o,t,r)})),Na=nn((function(e,t){return Ko(e,p,o,o,o,t)}));function Ha(e,t){return e===t||e!=e&&t!=t}var Fa=Yo(ki),Ga=Yo((function(e,t){return e>=t})),Va=ji(function(){return arguments}())?ji:function(e){return os(e)&&Le.call(e,"callee")&&!Ze.call(e,"callee")},Qa=i.isArray,Ya=yt?Xt(yt):function(e){return os(e)&&Ei(e)==z};function Za(e){return null!=e&&rs(e.length)&&!es(e)}function Wa(e){return os(e)&&Za(e)}var Xa=Ut||yl,Ja=wt?Xt(wt):function(e){return os(e)&&Ei(e)==S};function Ka(e){if(!os(e))return!1;var t=Ei(e);return t==A||"[object DOMException]"==t||"string"==typeof e.message&&"string"==typeof e.name&&!ss(e)}function es(e){if(!is(e))return!1;var t=Ei(e);return t==_||t==x||"[object AsyncFunction]"==t||"[object Proxy]"==t}function ts(e){return"number"==typeof e&&e==vs(e)}function rs(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=m}function is(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}function os(e){return null!=e&&"object"==typeof e}var ns=St?Xt(St):function(e){return os(e)&&vn(e)==T};function as(e){return"number"==typeof e||os(e)&&Ei(e)==E}function ss(e){if(!os(e)||Ei(e)!=k)return!1;var t=Qe(e);if(null===t)return!0;var r=Le.call(t,"constructor")&&t.constructor;return"function"==typeof r&&r instanceof r&&Pe.call(r)==$e}var ls=At?Xt(At):function(e){return os(e)&&Ei(e)==D};var ds=_t?Xt(_t):function(e){return os(e)&&vn(e)==R};function cs(e){return"string"==typeof e||!Qa(e)&&os(e)&&Ei(e)==I}function us(e){return"symbol"==typeof e||os(e)&&Ei(e)==j}var ps=xt?Xt(xt):function(e){return os(e)&&rs(e.length)&&!!at[Ei(e)]};var hs=Yo(Mi),ms=Yo((function(e,t){return e<=t}));function fs(e){if(!e)return[];if(Za(e))return cs(e)?hr(e):Io(e);if(et&&e[et])return function(e){for(var t,r=[];!(t=e.next()).done;)r.push(t.value);return r}(e[et]());var t=vn(e);return(t==T?sr:t==R?cr:Hs)(e)}function gs(e){return e?(e=ys(e))===h||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0}function vs(e){var t=gs(e),r=t%1;return t==t?r?t-r:t:0}function bs(e){return e?li(vs(e),0,g):0}function ys(e){if("number"==typeof e)return e;if(us(e))return f;if(is(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=is(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=Wt(e);var r=ve.test(e);return r||ye.test(e)?ct(e.slice(2),r?2:8):ge.test(e)?f:+e}function ws(e){return jo(e,Ps(e))}function Ss(e){return null==e?"":uo(e)}var As=zo((function(e,t){if(En(t)||Za(t))jo(t,zs(t),e);else for(var r in t)Le.call(t,r)&&ri(e,r,t[r])})),_s=zo((function(e,t){jo(t,Ps(t),e)})),xs=zo((function(e,t,r,i){jo(t,Ps(t),e,i)})),Ts=zo((function(e,t,r,i){jo(t,zs(t),e,i)})),Es=nn(si);var ks=Xi((function(e,t){e=ke(e);var r=-1,i=t.length,n=i>2?t[2]:o;for(n&&An(t[0],t[1],n)&&(i=1);++r<i;)for(var a=t[r],s=Ps(a),l=-1,d=s.length;++l<d;){var c=s[l],u=e[c];(u===o||Ha(u,Oe[c])&&!Le.call(e,c))&&(e[c]=a[c])}return e})),Cs=Xi((function(e){return e.push(o,tn),Tt(qs,o,e)}));function Ds(e,t,r){var i=null==e?o:xi(e,t);return i===o?r:i}function Rs(e,t){return null!=e&&bn(e,t,Di)}var Is=Ho((function(e,t,r){null!=t&&"function"!=typeof t.toString&&(t=Me.call(t)),e[t]=r}),il(al)),js=Ho((function(e,t,r){null!=t&&"function"!=typeof t.toString&&(t=Me.call(t)),Le.call(e,t)?e[t].push(r):e[t]=[r]}),un),Os=Xi(Ii);function zs(e){return Za(e)?Xr(e):qi(e)}function Ps(e){return Za(e)?Xr(e,!0):Ui(e)}var Ls=zo((function(e,t,r){Hi(e,t,r)})),qs=zo((function(e,t,r,i){Hi(e,t,r,i)})),Us=nn((function(e,t){var r={};if(null==e)return r;var i=!1;t=Ot(t,(function(t){return t=So(t,e),i||(i=t.length>1),t})),jo(e,sn(e),r),i&&(r=di(r,7,rn));for(var o=t.length;o--;)ho(r,t[o]);return r}));var Ms=nn((function(e,t){return null==e?{}:function(e,t){return Vi(e,t,(function(t,r){return Rs(e,r)}))}(e,t)}));function $s(e,t){if(null==e)return{};var r=Ot(sn(e),(function(e){return[e]}));return t=un(t),Vi(e,r,(function(e,r){return t(e,r[0])}))}var Bs=Jo(zs),Ns=Jo(Ps);function Hs(e){return null==e?[]:Jt(e,zs(e))}var Fs=Uo((function(e,t,r){return t=t.toLowerCase(),e+(r?Gs(t):t)}));function Gs(e){return Ks(Ss(e).toLowerCase())}function Vs(e){return(e=Ss(e))&&e.replace(Se,ir).replace(Ke,"")}var Qs=Uo((function(e,t,r){return e+(r?"-":"")+t.toLowerCase()})),Ys=Uo((function(e,t,r){return e+(r?" ":"")+t.toLowerCase()})),Zs=qo("toLowerCase");var Ws=Uo((function(e,t,r){return e+(r?"_":"")+t.toLowerCase()}));var Xs=Uo((function(e,t,r){return e+(r?" ":"")+Ks(t)}));var Js=Uo((function(e,t,r){return e+(r?" ":"")+t.toUpperCase()})),Ks=qo("toUpperCase");function el(e,t,r){return e=Ss(e),(t=r?o:t)===o?function(e){return it.test(e)}(e)?function(e){return e.match(tt)||[]}(e):function(e){return e.match(ue)||[]}(e):e.match(t)||[]}var tl=Xi((function(e,t){try{return Tt(e,o,t)}catch(e){return Ka(e)?e:new xe(e)}})),rl=nn((function(e,t){return kt(t,(function(t){t=$n(t),ai(e,t,ja(e[t],e))})),e}));function il(e){return function(){return e}}var ol=Bo(),nl=Bo(!0);function al(e){return e}function sl(e){return Li("function"==typeof e?e:di(e,1))}var ll=Xi((function(e,t){return function(r){return Ii(r,e,t)}})),dl=Xi((function(e,t){return function(r){return Ii(e,r,t)}}));function cl(e,t,r){var i=zs(t),o=_i(t,i);null!=r||is(t)&&(o.length||!i.length)||(r=t,t=e,e=this,o=_i(t,zs(t)));var n=!(is(r)&&"chain"in r&&!r.chain),a=es(e);return kt(o,(function(r){var i=t[r];e[r]=i,a&&(e.prototype[r]=function(){var t=this.__chain__;if(n||t){var r=e(this.__wrapped__),o=r.__actions__=Io(this.__actions__);return o.push({func:i,args:arguments,thisArg:e}),r.__chain__=t,r}return i.apply(e,zt([this.value()],arguments))})})),e}function ul(){}var pl=Go(Ot),hl=Go(Dt),ml=Go(qt);function fl(e){return _n(e)?Gt($n(e)):function(e){return function(t){return xi(t,e)}}(e)}var gl=Qo(),vl=Qo(!0);function bl(){return[]}function yl(){return!1}var wl=Fo((function(e,t){return e+t}),0),Sl=Wo("ceil"),Al=Fo((function(e,t){return e/t}),1),_l=Wo("floor");var xl,Tl=Fo((function(e,t){return e*t}),1),El=Wo("round"),kl=Fo((function(e,t){return e-t}),0);return Br.after=function(e,t){if("function"!=typeof t)throw new Re(n);return e=vs(e),function(){if(--e<1)return t.apply(this,arguments)}},Br.ary=Ra,Br.assign=As,Br.assignIn=_s,Br.assignInWith=xs,Br.assignWith=Ts,Br.at=Es,Br.before=Ia,Br.bind=ja,Br.bindAll=rl,Br.bindKey=Oa,Br.castArray=function(){if(!arguments.length)return[];var e=arguments[0];return Qa(e)?e:[e]},Br.chain=fa,Br.chunk=function(e,t,r){t=(r?An(e,t,r):t===o)?1:yr(vs(t),0);var n=null==e?0:e.length;if(!n||t<1)return[];for(var a=0,s=0,l=i(ft(n/t));a<n;)l[s++]=oo(e,a,a+=t);return l},Br.compact=function(e){for(var t=-1,r=null==e?0:e.length,i=0,o=[];++t<r;){var n=e[t];n&&(o[i++]=n)}return o},Br.concat=function(){var e=arguments.length;if(!e)return[];for(var t=i(e-1),r=arguments[0],o=e;o--;)t[o-1]=arguments[o];return zt(Qa(r)?Io(r):[r],bi(t,1))},Br.cond=function(e){var t=null==e?0:e.length,r=un();return e=t?Ot(e,(function(e){if("function"!=typeof e[1])throw new Re(n);return[r(e[0]),e[1]]})):[],Xi((function(r){for(var i=-1;++i<t;){var o=e[i];if(Tt(o[0],this,r))return Tt(o[1],this,r)}}))},Br.conforms=function(e){return function(e){var t=zs(e);return function(r){return ci(r,e,t)}}(di(e,1))},Br.constant=il,Br.countBy=ba,Br.create=function(e,t){var r=Nr(e);return null==t?r:ni(r,t)},Br.curry=function e(t,r,i){var n=Ko(t,8,o,o,o,o,o,r=i?o:r);return n.placeholder=e.placeholder,n},Br.curryRight=function e(t,r,i){var n=Ko(t,l,o,o,o,o,o,r=i?o:r);return n.placeholder=e.placeholder,n},Br.debounce=za,Br.defaults=ks,Br.defaultsDeep=Cs,Br.defer=Pa,Br.delay=La,Br.difference=Hn,Br.differenceBy=Fn,Br.differenceWith=Gn,Br.drop=function(e,t,r){var i=null==e?0:e.length;return i?oo(e,(t=r||t===o?1:vs(t))<0?0:t,i):[]},Br.dropRight=function(e,t,r){var i=null==e?0:e.length;return i?oo(e,0,(t=i-(t=r||t===o?1:vs(t)))<0?0:t):[]},Br.dropRightWhile=function(e,t){return e&&e.length?fo(e,un(t,3),!0,!0):[]},Br.dropWhile=function(e,t){return e&&e.length?fo(e,un(t,3),!0):[]},Br.fill=function(e,t,r,i){var n=null==e?0:e.length;return n?(r&&"number"!=typeof r&&An(e,t,r)&&(r=0,i=n),function(e,t,r,i){var n=e.length;for((r=vs(r))<0&&(r=-r>n?0:n+r),(i=i===o||i>n?n:vs(i))<0&&(i+=n),i=r>i?0:bs(i);r<i;)e[r++]=t;return e}(e,t,r,i)):[]},Br.filter=function(e,t){return(Qa(e)?Rt:vi)(e,un(t,3))},Br.flatMap=function(e,t){return bi(Ea(e,t),1)},Br.flatMapDeep=function(e,t){return bi(Ea(e,t),h)},Br.flatMapDepth=function(e,t,r){return r=r===o?1:vs(r),bi(Ea(e,t),r)},Br.flatten=Yn,Br.flattenDeep=function(e){return(null==e?0:e.length)?bi(e,h):[]},Br.flattenDepth=function(e,t){return(null==e?0:e.length)?bi(e,t=t===o?1:vs(t)):[]},Br.flip=function(e){return Ko(e,512)},Br.flow=ol,Br.flowRight=nl,Br.fromPairs=function(e){for(var t=-1,r=null==e?0:e.length,i={};++t<r;){var o=e[t];i[o[0]]=o[1]}return i},Br.functions=function(e){return null==e?[]:_i(e,zs(e))},Br.functionsIn=function(e){return null==e?[]:_i(e,Ps(e))},Br.groupBy=_a,Br.initial=function(e){return(null==e?0:e.length)?oo(e,0,-1):[]},Br.intersection=Wn,Br.intersectionBy=Xn,Br.intersectionWith=Jn,Br.invert=Is,Br.invertBy=js,Br.invokeMap=xa,Br.iteratee=sl,Br.keyBy=Ta,Br.keys=zs,Br.keysIn=Ps,Br.map=Ea,Br.mapKeys=function(e,t){var r={};return t=un(t,3),Si(e,(function(e,i,o){ai(r,t(e,i,o),e)})),r},Br.mapValues=function(e,t){var r={};return t=un(t,3),Si(e,(function(e,i,o){ai(r,i,t(e,i,o))})),r},Br.matches=function(e){return Bi(di(e,1))},Br.matchesProperty=function(e,t){return Ni(e,di(t,1))},Br.memoize=qa,Br.merge=Ls,Br.mergeWith=qs,Br.method=ll,Br.methodOf=dl,Br.mixin=cl,Br.negate=Ua,Br.nthArg=function(e){return e=vs(e),Xi((function(t){return Fi(t,e)}))},Br.omit=Us,Br.omitBy=function(e,t){return $s(e,Ua(un(t)))},Br.once=function(e){return Ia(2,e)},Br.orderBy=function(e,t,r,i){return null==e?[]:(Qa(t)||(t=null==t?[]:[t]),Qa(r=i?o:r)||(r=null==r?[]:[r]),Gi(e,t,r))},Br.over=pl,Br.overArgs=Ma,Br.overEvery=hl,Br.overSome=ml,Br.partial=$a,Br.partialRight=Ba,Br.partition=ka,Br.pick=Ms,Br.pickBy=$s,Br.property=fl,Br.propertyOf=function(e){return function(t){return null==e?o:xi(e,t)}},Br.pull=ea,Br.pullAll=ta,Br.pullAllBy=function(e,t,r){return e&&e.length&&t&&t.length?Qi(e,t,un(r,2)):e},Br.pullAllWith=function(e,t,r){return e&&e.length&&t&&t.length?Qi(e,t,o,r):e},Br.pullAt=ra,Br.range=gl,Br.rangeRight=vl,Br.rearg=Na,Br.reject=function(e,t){return(Qa(e)?Rt:vi)(e,Ua(un(t,3)))},Br.remove=function(e,t){var r=[];if(!e||!e.length)return r;var i=-1,o=[],n=e.length;for(t=un(t,3);++i<n;){var a=e[i];t(a,i,e)&&(r.push(a),o.push(i))}return Yi(e,o),r},Br.rest=function(e,t){if("function"!=typeof e)throw new Re(n);return Xi(e,t=t===o?t:vs(t))},Br.reverse=ia,Br.sampleSize=function(e,t,r){return t=(r?An(e,t,r):t===o)?1:vs(t),(Qa(e)?Kr:Ki)(e,t)},Br.set=function(e,t,r){return null==e?e:eo(e,t,r)},Br.setWith=function(e,t,r,i){return i="function"==typeof i?i:o,null==e?e:eo(e,t,r,i)},Br.shuffle=function(e){return(Qa(e)?ei:io)(e)},Br.slice=function(e,t,r){var i=null==e?0:e.length;return i?(r&&"number"!=typeof r&&An(e,t,r)?(t=0,r=i):(t=null==t?0:vs(t),r=r===o?i:vs(r)),oo(e,t,r)):[]},Br.sortBy=Ca,Br.sortedUniq=function(e){return e&&e.length?lo(e):[]},Br.sortedUniqBy=function(e,t){return e&&e.length?lo(e,un(t,2)):[]},Br.split=function(e,t,r){return r&&"number"!=typeof r&&An(e,t,r)&&(t=r=o),(r=r===o?g:r>>>0)?(e=Ss(e))&&("string"==typeof t||null!=t&&!ls(t))&&!(t=uo(t))&&ar(e)?_o(hr(e),0,r):e.split(t,r):[]},Br.spread=function(e,t){if("function"!=typeof e)throw new Re(n);return t=null==t?0:yr(vs(t),0),Xi((function(r){var i=r[t],o=_o(r,0,t);return i&&zt(o,i),Tt(e,this,o)}))},Br.tail=function(e){var t=null==e?0:e.length;return t?oo(e,1,t):[]},Br.take=function(e,t,r){return e&&e.length?oo(e,0,(t=r||t===o?1:vs(t))<0?0:t):[]},Br.takeRight=function(e,t,r){var i=null==e?0:e.length;return i?oo(e,(t=i-(t=r||t===o?1:vs(t)))<0?0:t,i):[]},Br.takeRightWhile=function(e,t){return e&&e.length?fo(e,un(t,3),!1,!0):[]},Br.takeWhile=function(e,t){return e&&e.length?fo(e,un(t,3)):[]},Br.tap=function(e,t){return t(e),e},Br.throttle=function(e,t,r){var i=!0,o=!0;if("function"!=typeof e)throw new Re(n);return is(r)&&(i="leading"in r?!!r.leading:i,o="trailing"in r?!!r.trailing:o),za(e,t,{leading:i,maxWait:t,trailing:o})},Br.thru=ga,Br.toArray=fs,Br.toPairs=Bs,Br.toPairsIn=Ns,Br.toPath=function(e){return Qa(e)?Ot(e,$n):us(e)?[e]:Io(Mn(Ss(e)))},Br.toPlainObject=ws,Br.transform=function(e,t,r){var i=Qa(e),o=i||Xa(e)||ps(e);if(t=un(t,4),null==r){var n=e&&e.constructor;r=o?i?new n:[]:is(e)&&es(n)?Nr(Qe(e)):{}}return(o?kt:Si)(e,(function(e,i,o){return t(r,e,i,o)})),r},Br.unary=function(e){return Ra(e,1)},Br.union=oa,Br.unionBy=na,Br.unionWith=aa,Br.uniq=function(e){return e&&e.length?po(e):[]},Br.uniqBy=function(e,t){return e&&e.length?po(e,un(t,2)):[]},Br.uniqWith=function(e,t){return t="function"==typeof t?t:o,e&&e.length?po(e,o,t):[]},Br.unset=function(e,t){return null==e||ho(e,t)},Br.unzip=sa,Br.unzipWith=la,Br.update=function(e,t,r){return null==e?e:mo(e,t,wo(r))},Br.updateWith=function(e,t,r,i){return i="function"==typeof i?i:o,null==e?e:mo(e,t,wo(r),i)},Br.values=Hs,Br.valuesIn=function(e){return null==e?[]:Jt(e,Ps(e))},Br.without=da,Br.words=el,Br.wrap=function(e,t){return $a(wo(t),e)},Br.xor=ca,Br.xorBy=ua,Br.xorWith=pa,Br.zip=ha,Br.zipObject=function(e,t){return bo(e||[],t||[],ri)},Br.zipObjectDeep=function(e,t){return bo(e||[],t||[],eo)},Br.zipWith=ma,Br.entries=Bs,Br.entriesIn=Ns,Br.extend=_s,Br.extendWith=xs,cl(Br,Br),Br.add=wl,Br.attempt=tl,Br.camelCase=Fs,Br.capitalize=Gs,Br.ceil=Sl,Br.clamp=function(e,t,r){return r===o&&(r=t,t=o),r!==o&&(r=(r=ys(r))==r?r:0),t!==o&&(t=(t=ys(t))==t?t:0),li(ys(e),t,r)},Br.clone=function(e){return di(e,4)},Br.cloneDeep=function(e){return di(e,5)},Br.cloneDeepWith=function(e,t){return di(e,5,t="function"==typeof t?t:o)},Br.cloneWith=function(e,t){return di(e,4,t="function"==typeof t?t:o)},Br.conformsTo=function(e,t){return null==t||ci(e,t,zs(t))},Br.deburr=Vs,Br.defaultTo=function(e,t){return null==e||e!=e?t:e},Br.divide=Al,Br.endsWith=function(e,t,r){e=Ss(e),t=uo(t);var i=e.length,n=r=r===o?i:li(vs(r),0,i);return(r-=t.length)>=0&&e.slice(r,n)==t},Br.eq=Ha,Br.escape=function(e){return(e=Ss(e))&&X.test(e)?e.replace(Z,or):e},Br.escapeRegExp=function(e){return(e=Ss(e))&&ne.test(e)?e.replace(oe,"\\$&"):e},Br.every=function(e,t,r){var i=Qa(e)?Dt:fi;return r&&An(e,t,r)&&(t=o),i(e,un(t,3))},Br.find=ya,Br.findIndex=Vn,Br.findKey=function(e,t){return Mt(e,un(t,3),Si)},Br.findLast=wa,Br.findLastIndex=Qn,Br.findLastKey=function(e,t){return Mt(e,un(t,3),Ai)},Br.floor=_l,Br.forEach=Sa,Br.forEachRight=Aa,Br.forIn=function(e,t){return null==e?e:yi(e,un(t,3),Ps)},Br.forInRight=function(e,t){return null==e?e:wi(e,un(t,3),Ps)},Br.forOwn=function(e,t){return e&&Si(e,un(t,3))},Br.forOwnRight=function(e,t){return e&&Ai(e,un(t,3))},Br.get=Ds,Br.gt=Fa,Br.gte=Ga,Br.has=function(e,t){return null!=e&&bn(e,t,Ci)},Br.hasIn=Rs,Br.head=Zn,Br.identity=al,Br.includes=function(e,t,r,i){e=Za(e)?e:Hs(e),r=r&&!i?vs(r):0;var o=e.length;return r<0&&(r=yr(o+r,0)),cs(e)?r<=o&&e.indexOf(t,r)>-1:!!o&&Bt(e,t,r)>-1},Br.indexOf=function(e,t,r){var i=null==e?0:e.length;if(!i)return-1;var o=null==r?0:vs(r);return o<0&&(o=yr(i+o,0)),Bt(e,t,o)},Br.inRange=function(e,t,r){return t=gs(t),r===o?(r=t,t=0):r=gs(r),function(e,t,r){return e>=wr(t,r)&&e<yr(t,r)}(e=ys(e),t,r)},Br.invoke=Os,Br.isArguments=Va,Br.isArray=Qa,Br.isArrayBuffer=Ya,Br.isArrayLike=Za,Br.isArrayLikeObject=Wa,Br.isBoolean=function(e){return!0===e||!1===e||os(e)&&Ei(e)==w},Br.isBuffer=Xa,Br.isDate=Ja,Br.isElement=function(e){return os(e)&&1===e.nodeType&&!ss(e)},Br.isEmpty=function(e){if(null==e)return!0;if(Za(e)&&(Qa(e)||"string"==typeof e||"function"==typeof e.splice||Xa(e)||ps(e)||Va(e)))return!e.length;var t=vn(e);if(t==T||t==R)return!e.size;if(En(e))return!qi(e).length;for(var r in e)if(Le.call(e,r))return!1;return!0},Br.isEqual=function(e,t){return Oi(e,t)},Br.isEqualWith=function(e,t,r){var i=(r="function"==typeof r?r:o)?r(e,t):o;return i===o?Oi(e,t,o,r):!!i},Br.isError=Ka,Br.isFinite=function(e){return"number"==typeof e&&Vt(e)},Br.isFunction=es,Br.isInteger=ts,Br.isLength=rs,Br.isMap=ns,Br.isMatch=function(e,t){return e===t||zi(e,t,hn(t))},Br.isMatchWith=function(e,t,r){return r="function"==typeof r?r:o,zi(e,t,hn(t),r)},Br.isNaN=function(e){return as(e)&&e!=+e},Br.isNative=function(e){if(Tn(e))throw new xe("Unsupported core-js use. Try https://npms.io/search?q=ponyfill.");return Pi(e)},Br.isNil=function(e){return null==e},Br.isNull=function(e){return null===e},Br.isNumber=as,Br.isObject=is,Br.isObjectLike=os,Br.isPlainObject=ss,Br.isRegExp=ls,Br.isSafeInteger=function(e){return ts(e)&&e>=-9007199254740991&&e<=m},Br.isSet=ds,Br.isString=cs,Br.isSymbol=us,Br.isTypedArray=ps,Br.isUndefined=function(e){return e===o},Br.isWeakMap=function(e){return os(e)&&vn(e)==O},Br.isWeakSet=function(e){return os(e)&&"[object WeakSet]"==Ei(e)},Br.join=function(e,t){return null==e?"":vr.call(e,t)},Br.kebabCase=Qs,Br.last=Kn,Br.lastIndexOf=function(e,t,r){var i=null==e?0:e.length;if(!i)return-1;var n=i;return r!==o&&(n=(n=vs(r))<0?yr(i+n,0):wr(n,i-1)),t==t?function(e,t,r){for(var i=r+1;i--;)if(e[i]===t)return i;return i}(e,t,n):$t(e,Ht,n,!0)},Br.lowerCase=Ys,Br.lowerFirst=Zs,Br.lt=hs,Br.lte=ms,Br.max=function(e){return e&&e.length?gi(e,al,ki):o},Br.maxBy=function(e,t){return e&&e.length?gi(e,un(t,2),ki):o},Br.mean=function(e){return Ft(e,al)},Br.meanBy=function(e,t){return Ft(e,un(t,2))},Br.min=function(e){return e&&e.length?gi(e,al,Mi):o},Br.minBy=function(e,t){return e&&e.length?gi(e,un(t,2),Mi):o},Br.stubArray=bl,Br.stubFalse=yl,Br.stubObject=function(){return{}},Br.stubString=function(){return""},Br.stubTrue=function(){return!0},Br.multiply=Tl,Br.nth=function(e,t){return e&&e.length?Fi(e,vs(t)):o},Br.noConflict=function(){return ht._===this&&(ht._=Be),this},Br.noop=ul,Br.now=Da,Br.pad=function(e,t,r){e=Ss(e);var i=(t=vs(t))?pr(e):0;if(!t||i>=t)return e;var o=(t-i)/2;return Vo(vt(o),r)+e+Vo(ft(o),r)},Br.padEnd=function(e,t,r){e=Ss(e);var i=(t=vs(t))?pr(e):0;return t&&i<t?e+Vo(t-i,r):e},Br.padStart=function(e,t,r){e=Ss(e);var i=(t=vs(t))?pr(e):0;return t&&i<t?Vo(t-i,r)+e:e},Br.parseInt=function(e,t,r){return r||null==t?t=0:t&&(t=+t),Ar(Ss(e).replace(ae,""),t||0)},Br.random=function(e,t,r){if(r&&"boolean"!=typeof r&&An(e,t,r)&&(t=r=o),r===o&&("boolean"==typeof t?(r=t,t=o):"boolean"==typeof e&&(r=e,e=o)),e===o&&t===o?(e=0,t=1):(e=gs(e),t===o?(t=e,e=0):t=gs(t)),e>t){var i=e;e=t,t=i}if(r||e%1||t%1){var n=_r();return wr(e+n*(t-e+dt("1e-"+((n+"").length-1))),t)}return Zi(e,t)},Br.reduce=function(e,t,r){var i=Qa(e)?Pt:Qt,o=arguments.length<3;return i(e,un(t,4),r,o,hi)},Br.reduceRight=function(e,t,r){var i=Qa(e)?Lt:Qt,o=arguments.length<3;return i(e,un(t,4),r,o,mi)},Br.repeat=function(e,t,r){return t=(r?An(e,t,r):t===o)?1:vs(t),Wi(Ss(e),t)},Br.replace=function(){var e=arguments,t=Ss(e[0]);return e.length<3?t:t.replace(e[1],e[2])},Br.result=function(e,t,r){var i=-1,n=(t=So(t,e)).length;for(n||(n=1,e=o);++i<n;){var a=null==e?o:e[$n(t[i])];a===o&&(i=n,a=r),e=es(a)?a.call(e):a}return e},Br.round=El,Br.runInContext=e,Br.sample=function(e){return(Qa(e)?Jr:Ji)(e)},Br.size=function(e){if(null==e)return 0;if(Za(e))return cs(e)?pr(e):e.length;var t=vn(e);return t==T||t==R?e.size:qi(e).length},Br.snakeCase=Ws,Br.some=function(e,t,r){var i=Qa(e)?qt:no;return r&&An(e,t,r)&&(t=o),i(e,un(t,3))},Br.sortedIndex=function(e,t){return ao(e,t)},Br.sortedIndexBy=function(e,t,r){return so(e,t,un(r,2))},Br.sortedIndexOf=function(e,t){var r=null==e?0:e.length;if(r){var i=ao(e,t);if(i<r&&Ha(e[i],t))return i}return-1},Br.sortedLastIndex=function(e,t){return ao(e,t,!0)},Br.sortedLastIndexBy=function(e,t,r){return so(e,t,un(r,2),!0)},Br.sortedLastIndexOf=function(e,t){if(null==e?0:e.length){var r=ao(e,t,!0)-1;if(Ha(e[r],t))return r}return-1},Br.startCase=Xs,Br.startsWith=function(e,t,r){return e=Ss(e),r=null==r?0:li(vs(r),0,e.length),t=uo(t),e.slice(r,r+t.length)==t},Br.subtract=kl,Br.sum=function(e){return e&&e.length?Yt(e,al):0},Br.sumBy=function(e,t){return e&&e.length?Yt(e,un(t,2)):0},Br.template=function(e,t,r){var i=Br.templateSettings;r&&An(e,t,r)&&(t=o),e=Ss(e),t=xs({},t,i,en);var n,a,s=xs({},t.imports,i.imports,en),l=zs(s),d=Jt(s,l),c=0,u=t.interpolate||Ae,p="__p += '",h=Ce((t.escape||Ae).source+"|"+u.source+"|"+(u===ee?me:Ae).source+"|"+(t.evaluate||Ae).source+"|$","g"),m="//# sourceURL="+(Le.call(t,"sourceURL")?(t.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++nt+"]")+"\n";e.replace(h,(function(t,r,i,o,s,l){return i||(i=o),p+=e.slice(c,l).replace(_e,nr),r&&(n=!0,p+="' +\n__e("+r+") +\n'"),s&&(a=!0,p+="';\n"+s+";\n__p += '"),i&&(p+="' +\n((__t = ("+i+")) == null ? '' : __t) +\n'"),c=l+t.length,t})),p+="';\n";var f=Le.call(t,"variable")&&t.variable;if(f){if(pe.test(f))throw new xe("Invalid `variable` option passed into `_.template`")}else p="with (obj) {\n"+p+"\n}\n";p=(a?p.replace(G,""):p).replace(V,"$1").replace(Q,"$1;"),p="function("+(f||"obj")+") {\n"+(f?"":"obj || (obj = {});\n")+"var __t, __p = ''"+(n?", __e = _.escape":"")+(a?", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n":";\n")+p+"return __p\n}";var g=tl((function(){return Te(l,m+"return "+p).apply(o,d)}));if(g.source=p,Ka(g))throw g;return g},Br.times=function(e,t){if((e=vs(e))<1||e>m)return[];var r=g,i=wr(e,g);t=un(t),e-=g;for(var o=Zt(i,t);++r<e;)t(r);return o},Br.toFinite=gs,Br.toInteger=vs,Br.toLength=bs,Br.toLower=function(e){return Ss(e).toLowerCase()},Br.toNumber=ys,Br.toSafeInteger=function(e){return e?li(vs(e),-9007199254740991,m):0===e?e:0},Br.toString=Ss,Br.toUpper=function(e){return Ss(e).toUpperCase()},Br.trim=function(e,t,r){if((e=Ss(e))&&(r||t===o))return Wt(e);if(!e||!(t=uo(t)))return e;var i=hr(e),n=hr(t);return _o(i,er(i,n),tr(i,n)+1).join("")},Br.trimEnd=function(e,t,r){if((e=Ss(e))&&(r||t===o))return e.slice(0,mr(e)+1);if(!e||!(t=uo(t)))return e;var i=hr(e);return _o(i,0,tr(i,hr(t))+1).join("")},Br.trimStart=function(e,t,r){if((e=Ss(e))&&(r||t===o))return e.replace(ae,"");if(!e||!(t=uo(t)))return e;var i=hr(e);return _o(i,er(i,hr(t))).join("")},Br.truncate=function(e,t){var r=30,i="...";if(is(t)){var n="separator"in t?t.separator:n;r="length"in t?vs(t.length):r,i="omission"in t?uo(t.omission):i}var a=(e=Ss(e)).length;if(ar(e)){var s=hr(e);a=s.length}if(r>=a)return e;var l=r-pr(i);if(l<1)return i;var d=s?_o(s,0,l).join(""):e.slice(0,l);if(n===o)return d+i;if(s&&(l+=d.length-l),ls(n)){if(e.slice(l).search(n)){var c,u=d;for(n.global||(n=Ce(n.source,Ss(fe.exec(n))+"g")),n.lastIndex=0;c=n.exec(u);)var p=c.index;d=d.slice(0,p===o?l:p)}}else if(e.indexOf(uo(n),l)!=l){var h=d.lastIndexOf(n);h>-1&&(d=d.slice(0,h))}return d+i},Br.unescape=function(e){return(e=Ss(e))&&W.test(e)?e.replace(Y,fr):e},Br.uniqueId=function(e){var t=++qe;return Ss(e)+t},Br.upperCase=Js,Br.upperFirst=Ks,Br.each=Sa,Br.eachRight=Aa,Br.first=Zn,cl(Br,(xl={},Si(Br,(function(e,t){Le.call(Br.prototype,t)||(xl[t]=e)})),xl),{chain:!1}),Br.VERSION="4.17.21",kt(["bind","bindKey","curry","curryRight","partial","partialRight"],(function(e){Br[e].placeholder=Br})),kt(["drop","take"],(function(e,t){Gr.prototype[e]=function(r){r=r===o?1:yr(vs(r),0);var i=this.__filtered__&&!t?new Gr(this):this.clone();return i.__filtered__?i.__takeCount__=wr(r,i.__takeCount__):i.__views__.push({size:wr(r,g),type:e+(i.__dir__<0?"Right":"")}),i},Gr.prototype[e+"Right"]=function(t){return this.reverse()[e](t).reverse()}})),kt(["filter","map","takeWhile"],(function(e,t){var r=t+1,i=1==r||3==r;Gr.prototype[e]=function(e){var t=this.clone();return t.__iteratees__.push({iteratee:un(e,3),type:r}),t.__filtered__=t.__filtered__||i,t}})),kt(["head","last"],(function(e,t){var r="take"+(t?"Right":"");Gr.prototype[e]=function(){return this[r](1).value()[0]}})),kt(["initial","tail"],(function(e,t){var r="drop"+(t?"":"Right");Gr.prototype[e]=function(){return this.__filtered__?new Gr(this):this[r](1)}})),Gr.prototype.compact=function(){return this.filter(al)},Gr.prototype.find=function(e){return this.filter(e).head()},Gr.prototype.findLast=function(e){return this.reverse().find(e)},Gr.prototype.invokeMap=Xi((function(e,t){return"function"==typeof e?new Gr(this):this.map((function(r){return Ii(r,e,t)}))})),Gr.prototype.reject=function(e){return this.filter(Ua(un(e)))},Gr.prototype.slice=function(e,t){e=vs(e);var r=this;return r.__filtered__&&(e>0||t<0)?new Gr(r):(e<0?r=r.takeRight(-e):e&&(r=r.drop(e)),t!==o&&(r=(t=vs(t))<0?r.dropRight(-t):r.take(t-e)),r)},Gr.prototype.takeRightWhile=function(e){return this.reverse().takeWhile(e).reverse()},Gr.prototype.toArray=function(){return this.take(g)},Si(Gr.prototype,(function(e,t){var r=/^(?:filter|find|map|reject)|While$/.test(t),i=/^(?:head|last)$/.test(t),n=Br[i?"take"+("last"==t?"Right":""):t],a=i||/^find/.test(t);n&&(Br.prototype[t]=function(){var t=this.__wrapped__,s=i?[1]:arguments,l=t instanceof Gr,d=s[0],c=l||Qa(t),u=function(e){var t=n.apply(Br,zt([e],s));return i&&p?t[0]:t};c&&r&&"function"==typeof d&&1!=d.length&&(l=c=!1);var p=this.__chain__,h=!!this.__actions__.length,m=a&&!p,f=l&&!h;if(!a&&c){t=f?t:new Gr(this);var g=e.apply(t,s);return g.__actions__.push({func:ga,args:[u],thisArg:o}),new Fr(g,p)}return m&&f?e.apply(this,s):(g=this.thru(u),m?i?g.value()[0]:g.value():g)})})),kt(["pop","push","shift","sort","splice","unshift"],(function(e){var t=Ie[e],r=/^(?:push|sort|unshift)$/.test(e)?"tap":"thru",i=/^(?:pop|shift)$/.test(e);Br.prototype[e]=function(){var e=arguments;if(i&&!this.__chain__){var o=this.value();return t.apply(Qa(o)?o:[],e)}return this[r]((function(r){return t.apply(Qa(r)?r:[],e)}))}})),Si(Gr.prototype,(function(e,t){var r=Br[t];if(r){var i=r.name+"";Le.call(jr,i)||(jr[i]=[]),jr[i].push({name:t,func:r})}})),jr[No(o,2).name]=[{name:"wrapper",func:o}],Gr.prototype.clone=function(){var e=new Gr(this.__wrapped__);return e.__actions__=Io(this.__actions__),e.__dir__=this.__dir__,e.__filtered__=this.__filtered__,e.__iteratees__=Io(this.__iteratees__),e.__takeCount__=this.__takeCount__,e.__views__=Io(this.__views__),e},Gr.prototype.reverse=function(){if(this.__filtered__){var e=new Gr(this);e.__dir__=-1,e.__filtered__=!0}else(e=this.clone()).__dir__*=-1;return e},Gr.prototype.value=function(){var e=this.__wrapped__.value(),t=this.__dir__,r=Qa(e),i=t<0,o=r?e.length:0,n=function(e,t,r){var i=-1,o=r.length;for(;++i<o;){var n=r[i],a=n.size;switch(n.type){case"drop":e+=a;break;case"dropRight":t-=a;break;case"take":t=wr(t,e+a);break;case"takeRight":e=yr(e,t-a)}}return{start:e,end:t}}(0,o,this.__views__),a=n.start,s=n.end,l=s-a,d=i?s:a-1,c=this.__iteratees__,u=c.length,p=0,h=wr(l,this.__takeCount__);if(!r||!i&&o==l&&h==l)return go(e,this.__actions__);var m=[];e:for(;l--&&p<h;){for(var f=-1,g=e[d+=t];++f<u;){var v=c[f],b=v.iteratee,y=v.type,w=b(g);if(2==y)g=w;else if(!w){if(1==y)continue e;break e}}m[p++]=g}return m},Br.prototype.at=va,Br.prototype.chain=function(){return fa(this)},Br.prototype.commit=function(){return new Fr(this.value(),this.__chain__)},Br.prototype.next=function(){this.__values__===o&&(this.__values__=fs(this.value()));var e=this.__index__>=this.__values__.length;return{done:e,value:e?o:this.__values__[this.__index__++]}},Br.prototype.plant=function(e){for(var t,r=this;r instanceof Hr;){var i=Nn(r);i.__index__=0,i.__values__=o,t?n.__wrapped__=i:t=i;var n=i;r=r.__wrapped__}return n.__wrapped__=e,t},Br.prototype.reverse=function(){var e=this.__wrapped__;if(e instanceof Gr){var t=e;return this.__actions__.length&&(t=new Gr(this)),(t=t.reverse()).__actions__.push({func:ga,args:[ia],thisArg:o}),new Fr(t,this.__chain__)}return this.thru(ia)},Br.prototype.toJSON=Br.prototype.valueOf=Br.prototype.value=function(){return go(this.__wrapped__,this.__actions__)},Br.prototype.first=Br.prototype.head,et&&(Br.prototype[et]=function(){return this}),Br}();ht._=gr,(i=function(){return gr}.call(t,r,t,e))===o||(e.exports=i)}.call(this)},500:function(e,t,r){!function(e){"use strict";function t(e,t){e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})}function i(e,t){Object.defineProperty(this,"kind",{value:e,enumerable:!0}),t&&t.length&&Object.defineProperty(this,"path",{value:t,enumerable:!0})}function o(e,t,r){o.super_.call(this,"E",e),Object.defineProperty(this,"lhs",{value:t,enumerable:!0}),Object.defineProperty(this,"rhs",{value:r,enumerable:!0})}function n(e,t){n.super_.call(this,"N",e),Object.defineProperty(this,"rhs",{value:t,enumerable:!0})}function a(e,t){a.super_.call(this,"D",e),Object.defineProperty(this,"lhs",{value:t,enumerable:!0})}function s(e,t,r){s.super_.call(this,"A",e),Object.defineProperty(this,"index",{value:t,enumerable:!0}),Object.defineProperty(this,"item",{value:r,enumerable:!0})}function l(e,t,r){var i=e.slice((r||t)+1||e.length);return e.length=t<0?e.length+t:t,e.push.apply(e,i),e}function d(e){var t=void 0===e?"undefined":R(e);return"object"!==t?t:e===Math?"math":null===e?"null":Array.isArray(e)?"array":"[object Date]"===Object.prototype.toString.call(e)?"date":"function"==typeof e.toString&&/^\/.*\//.test(e.toString())?"regexp":"object"}function c(e,t,r,i,u,p,h){h=h||[];var m=(u=u||[]).slice(0);if(void 0!==p){if(i){if("function"==typeof i&&i(m,p))return;if("object"===(void 0===i?"undefined":R(i))){if(i.prefilter&&i.prefilter(m,p))return;if(i.normalize){var f=i.normalize(m,p,e,t);f&&(e=f[0],t=f[1])}}}m.push(p)}"regexp"===d(e)&&"regexp"===d(t)&&(e=e.toString(),t=t.toString());var g=void 0===e?"undefined":R(e),v=void 0===t?"undefined":R(t),b="undefined"!==g||h&&h[h.length-1].lhs&&h[h.length-1].lhs.hasOwnProperty(p),y="undefined"!==v||h&&h[h.length-1].rhs&&h[h.length-1].rhs.hasOwnProperty(p);if(!b&&y)r(new n(m,t));else if(!y&&b)r(new a(m,e));else if(d(e)!==d(t))r(new o(m,e,t));else if("date"===d(e)&&e-t!=0)r(new o(m,e,t));else if("object"===g&&null!==e&&null!==t)if(h.filter((function(t){return t.lhs===e})).length)e!==t&&r(new o(m,e,t));else{if(h.push({lhs:e,rhs:t}),Array.isArray(e)){var w;for(e.length,w=0;w<e.length;w++)w>=t.length?r(new s(m,w,new a(void 0,e[w]))):c(e[w],t[w],r,i,m,w,h);for(;w<t.length;)r(new s(m,w,new n(void 0,t[w++])))}else{var S=Object.keys(e),A=Object.keys(t);S.forEach((function(o,n){var a=A.indexOf(o);a>=0?(c(e[o],t[o],r,i,m,o,h),A=l(A,a)):c(e[o],void 0,r,i,m,o,h)})),A.forEach((function(e){c(void 0,t[e],r,i,m,e,h)}))}h.length=h.length-1}else e!==t&&("number"===g&&isNaN(e)&&isNaN(t)||r(new o(m,e,t)))}function u(e,t,r,i){return i=i||[],c(e,t,(function(e){e&&i.push(e)}),r),i.length?i:void 0}function p(e,t,r){if(r.path&&r.path.length){var i,o=e[t],n=r.path.length-1;for(i=0;i<n;i++)o=o[r.path[i]];switch(r.kind){case"A":p(o[r.path[i]],r.index,r.item);break;case"D":delete o[r.path[i]];break;case"E":case"N":o[r.path[i]]=r.rhs}}else switch(r.kind){case"A":p(e[t],r.index,r.item);break;case"D":e=l(e,t);break;case"E":case"N":e[t]=r.rhs}return e}function h(e,t,r){if(e&&t&&r&&r.kind){for(var i=e,o=-1,n=r.path?r.path.length-1:0;++o<n;)void 0===i[r.path[o]]&&(i[r.path[o]]="number"==typeof r.path[o]?[]:{}),i=i[r.path[o]];switch(r.kind){case"A":p(r.path?i[r.path[o]]:i,r.index,r.item);break;case"D":delete i[r.path[o]];break;case"E":case"N":i[r.path[o]]=r.rhs}}}function m(e,t,r){if(r.path&&r.path.length){var i,o=e[t],n=r.path.length-1;for(i=0;i<n;i++)o=o[r.path[i]];switch(r.kind){case"A":m(o[r.path[i]],r.index,r.item);break;case"D":case"E":o[r.path[i]]=r.lhs;break;case"N":delete o[r.path[i]]}}else switch(r.kind){case"A":m(e[t],r.index,r.item);break;case"D":case"E":e[t]=r.lhs;break;case"N":e=l(e,t)}return e}function f(e,t,r){if(e&&t&&r&&r.kind){var i,o,n=e;for(o=r.path.length-1,i=0;i<o;i++)void 0===n[r.path[i]]&&(n[r.path[i]]={}),n=n[r.path[i]];switch(r.kind){case"A":m(n[r.path[i]],r.index,r.item);break;case"D":case"E":n[r.path[i]]=r.lhs;break;case"N":delete n[r.path[i]]}}}function g(e,t,r){e&&t&&c(e,t,(function(i){r&&!r(e,t,i)||h(e,t,i)}))}function v(e){return"color: "+O[e].color+"; font-weight: bold"}function b(e){var t=e.kind,r=e.path,i=e.lhs,o=e.rhs,n=e.index,a=e.item;switch(t){case"E":return[r.join("."),i,"→",o];case"N":return[r.join("."),o];case"D":return[r.join(".")];case"A":return[r.join(".")+"["+n+"]",a];default:return[]}}function y(e,t,r,i){var o=u(e,t);try{i?r.groupCollapsed("diff"):r.group("diff")}catch(e){r.log("diff")}o?o.forEach((function(e){var t=e.kind,i=b(e);r.log.apply(r,["%c "+O[t].text,v(t)].concat(I(i)))})):r.log("—— no diff ——");try{r.groupEnd()}catch(e){r.log("—— diff end —— ")}}function w(e,t,r,i){switch(void 0===e?"undefined":R(e)){case"object":return"function"==typeof e[i]?e[i].apply(e,I(r)):e[i];case"function":return e(t);default:return e}}function S(e){var t=e.timestamp,r=e.duration;return function(e,i,o){var n=["action"];return n.push("%c"+String(e.type)),t&&n.push("%c@ "+i),r&&n.push("%c(in "+o.toFixed(2)+" ms)"),n.join(" ")}}function A(e,t){var r=t.logger,i=t.actionTransformer,o=t.titleFormatter,n=void 0===o?S(t):o,a=t.collapsed,s=t.colors,l=t.level,d=t.diff,c=void 0===t.titleFormatter;e.forEach((function(o,u){var p=o.started,h=o.startedTime,m=o.action,f=o.prevState,g=o.error,v=o.took,b=o.nextState,S=e[u+1];S&&(b=S.prevState,v=S.started-p);var A=i(m),_="function"==typeof a?a((function(){return b}),m,o):a,x=C(h),T=s.title?"color: "+s.title(A)+";":"",E=["color: gray; font-weight: lighter;"];E.push(T),t.timestamp&&E.push("color: gray; font-weight: lighter;"),t.duration&&E.push("color: gray; font-weight: lighter;");var k=n(A,x,v);try{_?s.title&&c?r.groupCollapsed.apply(r,["%c "+k].concat(E)):r.groupCollapsed(k):s.title&&c?r.group.apply(r,["%c "+k].concat(E)):r.group(k)}catch(e){r.log(k)}var D=w(l,A,[f],"prevState"),R=w(l,A,[A],"action"),I=w(l,A,[g,f],"error"),j=w(l,A,[b],"nextState");if(D)if(s.prevState){var O="color: "+s.prevState(f)+"; font-weight: bold";r[D]("%c prev state",O,f)}else r[D]("prev state",f);if(R)if(s.action){var z="color: "+s.action(A)+"; font-weight: bold";r[R]("%c action    ",z,A)}else r[R]("action    ",A);if(g&&I)if(s.error){var P="color: "+s.error(g,f)+"; font-weight: bold;";r[I]("%c error     ",P,g)}else r[I]("error     ",g);if(j)if(s.nextState){var L="color: "+s.nextState(b)+"; font-weight: bold";r[j]("%c next state",L,b)}else r[j]("next state",b);d&&y(f,b,r,_);try{r.groupEnd()}catch(e){r.log("—— log end ——")}}))}function _(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object.assign({},z,e),r=t.logger,i=t.stateTransformer,o=t.errorTransformer,n=t.predicate,a=t.logErrors,s=t.diffPredicate;if(void 0===r)return function(){return function(e){return function(t){return e(t)}}};if(e.getState&&e.dispatch)return console.error("[redux-logger] redux-logger not installed. Make sure to pass logger instance as middleware:\n// Logger with default options\nimport { logger } from 'redux-logger'\nconst store = createStore(\n  reducer,\n  applyMiddleware(logger)\n)\n// Or you can create your own logger with custom options http://bit.ly/redux-logger-options\nimport createLogger from 'redux-logger'\nconst logger = createLogger({\n  // ...options\n});\nconst store = createStore(\n  reducer,\n  applyMiddleware(logger)\n)\n"),function(){return function(e){return function(t){return e(t)}}};var l=[];return function(e){var r=e.getState;return function(e){return function(d){if("function"==typeof n&&!n(r,d))return e(d);var c={};l.push(c),c.started=D.now(),c.startedTime=new Date,c.prevState=i(r()),c.action=d;var u=void 0;if(a)try{u=e(d)}catch(e){c.error=o(e)}else u=e(d);c.took=D.now()-c.started,c.nextState=i(r());var p=t.diff&&"function"==typeof s?s(r,d):t.diff;if(A(l,Object.assign({},t,{diff:p})),l.length=0,c.error)throw c.error;return u}}}}var x,T,E=function(e,t){return new Array(t+1).join(e)},k=function(e,t){return E("0",t-e.toString().length)+e},C=function(e){return k(e.getHours(),2)+":"+k(e.getMinutes(),2)+":"+k(e.getSeconds(),2)+"."+k(e.getMilliseconds(),3)},D="undefined"!=typeof performance&&null!==performance&&"function"==typeof performance.now?performance:Date,R="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},I=function(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)},j=[];x="object"===(void 0===r.g?"undefined":R(r.g))&&r.g?r.g:"undefined"!=typeof window?window:{},(T=x.DeepDiff)&&j.push((function(){void 0!==T&&x.DeepDiff===u&&(x.DeepDiff=T,T=void 0)})),t(o,i),t(n,i),t(a,i),t(s,i),Object.defineProperties(u,{diff:{value:u,enumerable:!0},observableDiff:{value:c,enumerable:!0},applyDiff:{value:g,enumerable:!0},applyChange:{value:h,enumerable:!0},revertChange:{value:f,enumerable:!0},isConflict:{value:function(){return void 0!==T},enumerable:!0},noConflict:{value:function(){return j&&(j.forEach((function(e){e()})),j=null),u},enumerable:!0}});var O={E:{color:"#2196F3",text:"CHANGED:"},N:{color:"#4CAF50",text:"ADDED:"},D:{color:"#F44336",text:"DELETED:"},A:{color:"#2196F3",text:"ARRAY:"}},z={level:"log",logger:console,logErrors:!0,collapsed:void 0,predicate:void 0,duration:!1,timestamp:!0,stateTransformer:function(e){return e},actionTransformer:function(e){return e},errorTransformer:function(e){return e},colors:{title:function(){return"inherit"},prevState:function(){return"#9E9E9E"},action:function(){return"#03A9F4"},nextState:function(){return"#4CAF50"},error:function(){return"#F20404"}},diff:!1,diffPredicate:void 0,transformer:void 0},P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.dispatch,r=e.getState;return"function"==typeof t||"function"==typeof r?_()({dispatch:t,getState:r}):void console.error("\n[redux-logger v3] BREAKING CHANGE\n[redux-logger v3] Since 3.0.0 redux-logger exports by default logger with default settings.\n[redux-logger v3] Change\n[redux-logger v3] import createLogger from 'redux-logger'\n[redux-logger v3] to\n[redux-logger v3] import { createLogger } from 'redux-logger'\n")};e.defaults=z,e.createLogger=_,e.logger=P,e.default=P,Object.defineProperty(e,"__esModule",{value:!0})}(t)},66:(e,t,r)=>{var i=r(379),o=r(242);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.id,o,""]]);var n={insert:"head",singleton:!1};i(o,n);e.exports=o.locals||{}},729:(e,t,r)=>{var i=r(379),o=r(719);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.id,o,""]]);var n={insert:"head",singleton:!1};i(o,n);e.exports=o.locals||{}},356:(e,t,r)=>{var i=r(379),o=r(238);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.id,o,""]]);var n={insert:"head",singleton:!1};i(o,n);e.exports=o.locals||{}},594:(e,t,r)=>{var i=r(379),o=r(845);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.id,o,""]]);var n={insert:"head",singleton:!1};i(o,n);e.exports=o.locals||{}},69:(e,t,r)=>{var i=r(379),o=r(20);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.id,o,""]]);var n={insert:"head",singleton:!1};i(o,n);e.exports=o.locals||{}},627:(e,t,r)=>{var i=r(379),o=r(94);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.id,o,""]]);var n={insert:"head",singleton:!1};i(o,n);e.exports=o.locals||{}},379:(e,t,r)=>{"use strict";var i,o=function(){return void 0===i&&(i=Boolean(window&&document&&document.all&&!window.atob)),i},n=function(){var e={};return function(t){if(void 0===e[t]){var r=document.querySelector(t);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}e[t]=r}return e[t]}}(),a=[];function s(e){for(var t=-1,r=0;r<a.length;r++)if(a[r].identifier===e){t=r;break}return t}function l(e,t){for(var r={},i=[],o=0;o<e.length;o++){var n=e[o],l=t.base?n[0]+t.base:n[0],d=r[l]||0,c="".concat(l," ").concat(d);r[l]=d+1;var u=s(c),p={css:n[1],media:n[2],sourceMap:n[3]};-1!==u?(a[u].references++,a[u].updater(p)):a.push({identifier:c,updater:g(p,t),references:1}),i.push(c)}return i}function d(e){var t=document.createElement("style"),i=e.attributes||{};if(void 0===i.nonce){var o=r.nc;o&&(i.nonce=o)}if(Object.keys(i).forEach((function(e){t.setAttribute(e,i[e])})),"function"==typeof e.insert)e.insert(t);else{var a=n(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var c,u=(c=[],function(e,t){return c[e]=t,c.filter(Boolean).join("\n")});function p(e,t,r,i){var o=r?"":i.media?"@media ".concat(i.media," {").concat(i.css,"}"):i.css;if(e.styleSheet)e.styleSheet.cssText=u(t,o);else{var n=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(n,a[t]):e.appendChild(n)}}function h(e,t,r){var i=r.css,o=r.media,n=r.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),n&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(n))))," */")),e.styleSheet)e.styleSheet.cssText=i;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(i))}}var m=null,f=0;function g(e,t){var r,i,o;if(t.singleton){var n=f++;r=m||(m=d(t)),i=p.bind(null,r,n,!1),o=p.bind(null,r,n,!0)}else r=d(t),i=h.bind(null,r,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(r)};return i(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;i(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=o());var r=l(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var i=0;i<r.length;i++){var o=s(r[i]);a[o].references--}for(var n=l(e,t),d=0;d<r.length;d++){var c=s(r[d]);0===a[c].references&&(a[c].updater(),a.splice(c,1))}r=n}}}},80:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>i});const i=r.p+"dba92cb9dc60f9f35cbf62428afd3ac1.ttf"},856:e=>{"use strict";e.exports=JSON.parse('[{"opcion":"menu-planes","roles":["usuario","administrador"]},{"opcion":"menu-sectores","roles":["administrador"]},{"opcion":"menu-usuarios","roles":["administrador"]},{"opcion":"planes-filtrar-sectores","roles":["administrador"]}]')},866:e=>{"use strict";e.exports=JSON.parse('[{"opcion":[{"menu":"0.0","orden":0}],"tipo":"titulo","svg":null,"titulo":"FILTROS","accion":null,"param":null},{"opcion":[{"menu":"0.0","orden":1}],"tipo":null,"svg":null,"titulo":"Descripcion del plan","accion":"[entreComponentes] BUSQUEDA_DESCRIPCION__LOAD01","param":{"accion":"find","descripciones":{"titulo":"Busqueda por descripcion","caption":"Descripcion a buscar","campo":"descripcion"}}},{"opcion":[{"menu":"0.0","orden":2}],"tipo":null,"svg":null,"titulo":"Identificador del plan","accion":"[entreComponentes] BUSQUEDA_DESCRIPCION__LOAD01","param":{"accion":"find","descripciones":{"titulo":"Identificador del plan","caption":"Ingrese el identificador","campo":"urlReferencia"}}},{"opcion":[{"menu":"0.0","orden":5}],"tipo":"linea","svg":null,"titulo":"","accion":null,"param":null},{"opcion":[{"menu":"0.0","orden":6}],"tipo":null,"svg":"CUMPLIDO","titulo":"Cumplidos","accion":"[entreComponentes] AMPAROS__FILTER01","param":{"campo":"estado","valor":"cumplida"}},{"opcion":[{"menu":"0.0","orden":7}],"tipo":null,"svg":"VIGENTE","titulo":"Vigentes","accion":"[entreComponentes] AMPAROS__FILTER01","param":{"campo":"estado","valor":"vigente"}},{"opcion":[{"menu":"0.0","orden":8}],"tipo":null,"svg":"PENDIETE","titulo":"Pendientes","accion":"[entreComponentes] AMPAROS__FILTER01","param":{"campo":"estado","valor":"pendiente"}},{"opcion":[{"menu":"0.0","orden":9}],"tipo":null,"svg":"ALERTADO","titulo":"Alertados","accion":"[entreComponentes] AMPAROS__FILTER01","param":{"campo":"estado","valor":"alerta"}},{"opcion":[{"menu":"0.0","orden":10}],"tipo":null,"svg":"VENCIDO","titulo":"Vencidos","accion":"[entreComponentes] AMPAROS__FILTER01","param":{"campo":"estado","valor":"vencida"}},{"opcion":[{"menu":"0.0","orden":11}],"tipo":"linea","svg":null,"titulo":"","accion":null,"param":null},{"opcion":[{"menu":"0.0","orden":12}],"tipo":null,"svg":null,"titulo":"Sacar filtros","accion":"[entreComponentes] AMPAROS__SACAR_FILTER01","param":null},{"opcion":[{"menu":"1.0","orden":0}],"tipo":"titulo","svg":null,"titulo":"FILTRO POR SECTOR","accion":null,"param":null},{"opcion":[{"menu":"1.0","orden":1}],"tipo":null,"svg":null,"titulo":"Por sector ceador","accion":"[entreComponentes] BUSQUEDA_DESCRIPCION__LOAD01","param":{"accion":"find","descripciones":{"titulo":"Sector creador","caption":"Ingrese el sector ceador","campo":"creador"}}},{"opcion":[{"menu":"1.0","orden":2}],"tipo":null,"svg":null,"titulo":"Por sector ejecutor","accion":"[entreComponentes] BUSQUEDA_DESCRIPCION__LOAD01","param":{"accion":"find","descripciones":{"titulo":"Sector ejecutor","caption":"Ingrese el sector ejecutor","campo":"ejecutor"}}},{"opcion":[{"menu":"1.0","orden":3}],"tipo":"linea","svg":null,"titulo":"","accion":null,"param":null},{"opcion":[{"menu":"1.0","orden":4}],"tipo":null,"svg":null,"titulo":"Sacar filtros","accion":"[entreComponentes] AMPAROS__SACAR_FILTER02","param":null},{"opcion":[{"menu":"1.1","orden":0}],"tipo":"titulo","svg":null,"titulo":"FILTRO POR SECTOR","accion":null,"param":null},{"opcion":[{"menu":"1.1","orden":1}],"tipo":null,"svg":null,"titulo":"Por sector ceador","accion":"[entreComponentes] AMPAROS__FILTER02","param":{"campo":"creador","valor":null}},{"opcion":[{"menu":"1.1","orden":2}],"tipo":null,"svg":null,"titulo":"Por sector ejecutor","accion":"[entreComponentes] AMPAROS__FILTER02","param":{"campo":"ejecutor","valor":null}},{"opcion":[{"menu":"2.0","orden":0},{"menu":"2.1","orden":0}],"tipo":"titulo","svg":null,"titulo":"PLANES","accion":null,"param":null},{"opcion":[{"menu":"2.0","orden":1},{"menu":"2.1","orden":1},{"menu":"3.0","orden":1},{"menu":"3.1","orden":1},{"menu":"3.4","orden":1},{"menu":"3.6","orden":1},{"menu":"3.8","orden":1},{"menu":"3.10","orden":1}],"tipo":null,"svg":null,"titulo":"Nueva tarea simple","accion":"[entreComponentes] TAREA_CARGA__LOAD01","param":{"accion":"add"}},{"opcion":[{"menu":"2.0","orden":2}],"tipo":null,"svg":null,"titulo":"Modificar el plan","accion":"[entreComponentes] PLAN_CARGA__LOAD01","param":{"accion":"edit"}},{"opcion":[{"menu":"2.0","orden":3}],"tipo":null,"svg":null,"titulo":"Eliminar el plan","accion":"[entreComponentes] PLAN_CARGA__LOAD01","param":{"accion":"delete"}},{"opcion":[{"menu":"2.0","orden":4},{"menu":"2.1","orden":2}],"tipo":null,"svg":null,"titulo":"Ver plan","accion":"[entreComponentes] PLAN_CARGA__LOAD01","param":{"accion":"view"}},{"opcion":[{"menu":"3.0","orden":0},{"menu":"3.1","orden":0},{"menu":"3.2","orden":0},{"menu":"3.3","orden":0},{"menu":"3.4","orden":0},{"menu":"3.5","orden":0},{"menu":"3.6","orden":0},{"menu":"3.7","orden":0},{"menu":"3.8","orden":0},{"menu":"3.9","orden":0},{"menu":"3.10","orden":0},{"menu":"3.11","orden":0}],"tipo":"titulo","svg":null,"titulo":"TAREAS","accion":null,"param":null},{"opcion":[{"menu":"3.0","orden":2},{"menu":"3.1","orden":2},{"menu":"3.4","orden":2},{"menu":"3.6","orden":2},{"menu":"3.8","orden":2},{"menu":"3.10","orden":2}],"tipo":null,"svg":null,"titulo":"Nueva tarea multiple por lapso","accion":"[entreComponentes] TAREA_CARGA__LOAD02","param":{"accion":"add"}},{"opcion":[{"menu":"3.0","orden":3},{"menu":"3.1","orden":3},{"menu":"3.4","orden":3},{"menu":"3.6","orden":3},{"menu":"3.8","orden":3},{"menu":"3.10","orden":3}],"tipo":null,"svg":null,"titulo":"Nueva tarea multiple por fecha","accion":"[entreComponentes] TAREA_CARGA__LOAD03","param":{"accion":"add"}},{"opcion":[{"menu":"3.0","orden":4},{"menu":"3.3","orden":1},{"menu":"3.6","orden":4},{"menu":"3.7","orden":1}],"tipo":null,"svg":null,"titulo":"Dar como cumplida","accion":"[eventos] EJECUTAR_TAREA_DAR_CUMPLIMIENTO","param":{"accion":"darCumplimiento"}},{"opcion":[{"menu":"3.8","orden":4},{"menu":"3.9","orden":1},{"menu":"3.10","orden":4},{"menu":"3.11","orden":1}],"tipo":null,"svg":null,"titulo":"Quitar cumplimiento","accion":"[eventos] EJECUTAR_TAREA_QUITAR_CUMPLIMIENTO","param":{"accion":"quitarCumplimiento"}},{"opcion":[{"menu":"3.0","orden":5},{"menu":"3.3","orden":2},{"menu":"3.4","orden":4},{"menu":"3.5","orden":1},{"menu":"3.8","orden":5},{"menu":"3.9","orden":2}],"tipo":null,"svg":null,"titulo":"Modificar tarea","accion":"[entreComponentes] TAREA_CARGA__LOAD01","param":{"accion":"edit"}},{"opcion":[{"menu":"3.0","orden":6},{"menu":"3.3","orden":3},{"menu":"3.4","orden":5},{"menu":"3.5","orden":2},{"menu":"3.8","orden":6},{"menu":"3.9","orden":3}],"tipo":null,"svg":null,"titulo":"Eliminar tarea","accion":"[entreComponentes] TAREA_CARGA__LOAD01","param":{"accion":"delete"}},{"opcion":[{"menu":"3.0","orden":7},{"menu":"3.1","orden":4},{"menu":"3.2","orden":1},{"menu":"3.3","orden":4},{"menu":"3.4","orden":4},{"menu":"3.5","orden":3},{"menu":"3.6","orden":5},{"menu":"3.7","orden":2},{"menu":"3.8","orden":7},{"menu":"3.9","orden":4},{"menu":"3.10","orden":5},{"menu":"3.11","orden":2}],"tipo":null,"svg":null,"titulo":"Ver tarea","accion":"[entreComponentes] TAREA_CARGA__LOAD01","param":{"accion":"view"}}]')}},t={};function r(i){var o=t[i];if(void 0!==o)return o.exports;var n=t[i]={id:i,loaded:!1,exports:{}};return e[i].call(n.exports,n,n.exports,r),n.loaded=!0,n.exports}r.d=(e,t)=>{for(var i in t)r.o(t,i)&&!r.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),r.p="./",r.nc=void 0;var i={};(()=>{"use strict";r.r(i),r.d(i,{default:()=>Wd});r(356),r(594),r(69),r(729),r(66),r(627);function e(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function t(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function o(r){for(var i=1;i<arguments.length;i++){var o=null!=arguments[i]?arguments[i]:{};i%2?t(Object(o),!0).forEach((function(t){e(r,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(o)):t(Object(o)).forEach((function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(o,e))}))}return r}function n(e){return"Minified Redux error #"+e+"; visit https://redux.js.org/Errors?code="+e+" for the full message or use the non-minified dev environment for full errors. "}var a="function"==typeof Symbol&&Symbol.observable||"@@observable",s=function(){return Math.random().toString(36).substring(7).split("").join(".")},l={INIT:"@@redux/INIT"+s(),REPLACE:"@@redux/REPLACE"+s(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+s()}};function d(e){if("object"!=typeof e||null===e)return!1;for(var t=e;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function c(e,t,r){var i;if("function"==typeof t&&"function"==typeof r||"function"==typeof r&&"function"==typeof arguments[3])throw new Error(n(0));if("function"==typeof t&&void 0===r&&(r=t,t=void 0),void 0!==r){if("function"!=typeof r)throw new Error(n(1));return r(c)(e,t)}if("function"!=typeof e)throw new Error(n(2));var o=e,s=t,u=[],p=u,h=!1;function m(){p===u&&(p=u.slice())}function f(){if(h)throw new Error(n(3));return s}function g(e){if("function"!=typeof e)throw new Error(n(4));if(h)throw new Error(n(5));var t=!0;return m(),p.push(e),function(){if(t){if(h)throw new Error(n(6));t=!1,m();var r=p.indexOf(e);p.splice(r,1),u=null}}}function v(e){if(!d(e))throw new Error(n(7));if(void 0===e.type)throw new Error(n(8));if(h)throw new Error(n(9));try{h=!0,s=o(s,e)}finally{h=!1}for(var t=u=p,r=0;r<t.length;r++){(0,t[r])()}return e}function b(e){if("function"!=typeof e)throw new Error(n(10));o=e,v({type:l.REPLACE})}function y(){var e,t=g;return(e={subscribe:function(e){if("object"!=typeof e||null===e)throw new Error(n(11));function r(){e.next&&e.next(f())}return r(),{unsubscribe:t(r)}}})[a]=function(){return this},e}return v({type:l.INIT}),(i={dispatch:v,subscribe:g,getState:f,replaceReducer:b})[a]=y,i}function u(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return 0===t.length?function(e){return e}:1===t.length?t[0]:t.reduce((function(e,t){return function(){return e(t.apply(void 0,arguments))}}))}r(500);const p="[ui] show spinner",h="[ui] hide spinner",m="[ui] show error",f="[ui] hide error",g="[ui] show warning",v="[ui] hide warning",b="[ui] capture media",y="[ui] set media",w="[ui] set media orientation",S="[ui] selection",A="[ui] step",x="[ui] show alert",T="[ui] show confirm",E="[ui] loguear con nuevo usuario",k=()=>({type:E}),C=(e="Atencion",t="Sin mensaje",r=null,i=null)=>({type:T,titulo:e,mensaje:t,onOk:r,onCancel:i}),D=(e="",t="",r="fondoInformacion",i=1500)=>({type:g,titulo:e,subTitulo:t,backgroundColor:r,timeOut:i}),R=e=>({type:y,size:e}),I=e=>({type:w,orientation:e}),j={spinner:{loading:0},error:{message:"",timestamp:null},media:{size:"large",orientation:"landscape",timeStamp:null},menu:{timeStamp:null,option:""},alert:{timeStamp:null,titulo:null,mensaje:null},confirm:{timeStamp:null,titulo:null,mensaje:null,onOk:null,onCancel:null},loginOk:!1,steps:{step:1},warning:{titulo:"",subTitulo:"",backgroundColor:"fondoInformacion",timeStamp:null,hidden:!0,tineOut:1500},loguearConNuevoUsuarioTimeStamp:null},O=(e=j,t)=>{const r={...e};switch(t.type){case p:r.spinner.loading+=1;break;case h:r.spinner.loading-=1;break;case m:r.error.timeStamp=(new Date).getTime(),r.error.messages=t.message;break;case f:r.error.timeStamp=(new Date).getTime(),r.error.messages=null;break;case y:r.media.size=t.size,r.media.timeStamp=(new Date).getTime();break;case w:r.media.orientation=t.orientation,r.media.timeStamp=(new Date).getTime();break;case S:r.menu.timeStamp=(new Date).getTime(),r.menu.option=t.option;break;case x:r.alert.timeStamp=(new Date).getTime(),r.alert.titulo=t.titulo,r.alert.mensaje=t.mensaje;break;case T:r.confirm.timeStamp=(new Date).getTime(),r.confirm.titulo=t.titulo,r.confirm.mensaje=t.mensaje,r.confirm.onOk=t.onOk,r.confirm.onCancel=t.onCancel;break;case A:r.steps.step=t.step;break;case g:r.warning.timeStamp=(new Date).getTime(),r.warning.titulo=t.titulo,r.warning.subTitulo=t.subTitulo,r.warning.backgroundColor=t.backgroundColor,r.warning.hidden=!1,r.warning.timeOut=t.timeOut;break;case v:r.warning.timeStamp=(new Date).getTime(),r.warning.titulo="",r.warning.subTitulo="",r.warning.hidden=!0,r.warning.timeOut=1500;break;case E:r.loguearConNuevoUsuarioTimeStamp=(new Date).getTime()}return r},z={name:"HEADER_BODY",areas:["header","body"]},P={inicial:{small:z,medium:z,large:z},amparos:{small:z,medium:z,large:z},verSectores:{small:z,medium:z,large:z},abmUsuarios:{small:z,medium:z,large:z},solicitarAutorizacion:{small:z,medium:z,large:z},esperarAutorizacion:{small:z,medium:z,large:z}},L=e=>{if(!e.screen.layouts[e.ui.media.size])throw"no hay un layout definido en el state para media-size:"+e.ui.media.size;let t=e.screen.layouts[e.ui.media.size];return e.screen.layouts[e.ui.media.size][e.ui.media.orientation]&&(t=e.screen.layouts[e.ui.media.size][e.ui.media.orientation]),t},q=(e,t)=>L(e).areas.find((e=>e==t)),U="[screen] show screen",M={name:null,layouts:{small:{name:"",areas:[]},medium:{name:"",areas:[]},large:{name:"",areas:[]}},timeStamp:null},$=(e=M,t)=>{const r={...e};if(t.type===U)r.timeStamp=(new Date).getTime(),r.layouts=t.layouts,r.name=t.name;return r},B="[routing] go next",N="[routing] go prev",H="[routing] go to",F="[routing] go history prev",G="[routing] pop history",V="[routing] push history",Q="[routing] set Current",Y=(e,t)=>({type:H,name:e,preventHistory:t}),Z=e=>({type:F}),W=()=>({type:G}),X=e=>({type:V,name:e}),J=e=>({type:Q,node:e}),K={current:{pointer:0,name:""},history:[]},ee=(e=K,t)=>{const r={...e};switch(t.type){case Q:r.current=t.node;break;case G:r.history.pop();break;case V:[...r.history].pop()!=t.name&&r.history.push(t.name)}return r},te="[app] API Request",re="[app] API Update",ie="[app] API Delete",oe="[app] API Add",ne="[app] API Action",ae="[app] API Funct",se="[app] API Show spinner",le="[app] API hide spinner",de=e=>({type:se,fetch:e}),ce=e=>({type:le,fetch:e}),ue={loading:0,fetch:null,sentido:""},pe=(e=ue,t)=>{const r={...e};switch(t.type){case se:r.loading+=1,r.fetch=t.fetch,r.sentido="ida";break;case le:r.loading-=1,r.fetch=t.fetch,r.sentido="vuelta"}return r},he="[autorizacion] Autorizacion",me="[autorizacion] Autorizacion success",fe="[autorizacion] Autorizacion  error",ge="[autorizacion] Aceptar Usuario",ve="[autorizacion] Aceptar Usuario success",be="[autorizacion] Aceptar Usuario  error",ye="[autorizacion] Accept",we="[autorizacion] Accept success",Se=e=>({type:he,token:e}),Ae={entities:null,tokenAutentication:null,timeStamp:null,errorTimeStamp:null,acceptTimeStamp:null,aceptarUsuario:{timeStamp:null,errorTimeStamp:null}},_e=(e=Ae,t)=>{const r={...e};switch(t.type){case he:r.tokenAutentication=t.token;break;case ve:r.aceptarUsuario.timeStamp=(new Date).getTime();break;case me:r.entities=t.payload.receive,r.timeStamp=(new Date).getTime();break;case fe:r.errorTimeStamp=(new Date).getTime();break;case be:r.aceptarUsuario.errorTimeStamp=(new Date).getTime();break;case we:r.acceptTimeStamp=(new Date).getTime();break;case fe:r.errorTimeStamp=(new Date).getTime()}return r},xe="[planes] GET",Te="[planes] GET_BY_ID",Ee="[planes] GET_ALL",ke="[planes] ADD",Ce="[planes] ADD_SIMPLE",De="[planes] ADD_LAPSO",Re="[planes] ADD_FECHA",Ie="[planes] UPDATE",je="[planes] REMOVE",Oe="[planes] EDIT",ze="[planes] GET_ALL success",Pe="[planes] GET_BY_ID success",Le="[planes] GET success",qe="[planes] ADD success",Ue="[planes] ADD_SIMPLE success",Me="[planes] ADD_LAPSO success",$e="[planes] ADD_FECHA success",Be="[planes] PATCH success",Ne="[planes] UPDATE success",He="[planes] REMOVE success",Fe="[planes] GET_ALL error",Ge="[planes] GET_BY_ID error",Ve="[planes] GET error",Qe="[planes] ADD error",Ye="[planes] ADD_SIMPLE error",Ze="[planes] ADD_LAPSO error",We="[planes] ADD_FECHA error",Xe="[planes] PATCH error",Je="[planes] UPDATE error",Ke="[planes] REMOVE error",et=e=>({type:Te,id:e,success:Pe,error:Ge}),tt=e=>({type:Ee,options:e,success:ze,error:Fe}),rt={entities:null,timeStamp:null,removeTimeStamp:null,updateTimeStamp:null,addTimeStamp:null,addSimpleTimeStamp:null,addLapsoTimeStamp:null,addFechaTimeStamp:null,errorTimeStamp:null,commandErrorTimeStamp:null,editTimeStamp:null,byId:{entities:null,timeStamp:null,errorTimeStamp:null},all:{entities:null,count:0,timeStamp:null},table:{entities:null,count:0,timeStamp:null}},it=(e=rt,t)=>{const r={...e};switch(t.type){case Le:r.entities=t.payload.receive,r.timeStamp=(new Date).getTime();break;case Pe:r.byId.entities=t.payload.receive,r.byId.timeStamp=(new Date).getTime();break;case ze:let e=[];t.payload.receive.map(((t,r)=>{let i={clase:"plan"};i.id=t.id,i.planId=t.id,i.descripcion=t.descripcion,i.urlReferencia=t.urlReferencia,i.estado=t.estado,i.conTareas=t.conTareas,i.hijo=t.conTareas,i.padre="0",i.padreClase="",i.tipo="",i.fechaDeAlta=t.fechaDeAlta,e.push(i)})),r.all.entities=e.sort(((e,t)=>t.fechaDeAlta.localeCompare(e.fechaDeAlta))),r.all.timeStamp=(new Date).getTime();break;case Oe:r.editTimeStamp=(new Date).getTime(),r.entities.currentItem=t.item,r.modo=t.modo;break;case Ne:case Be:r.updateTimeStamp=(new Date).getTime();break;case He:r.removeTimeStamp=(new Date).getTime();break;case qe:r.addTimeStamp=(new Date).getTime();break;case Ue:r.addSimpleTimeStamp=(new Date).getTime();break;case Me:r.addLapsoTimeStamp=(new Date).getTime();break;case $e:r.addFechaTimeStamp=(new Date).getTime();break;case Ve:r.errorTimeStamp=(new Date).getTime();break;case Ge:r.byId.errorTimeStamp=(new Date).getTime();break;case Fe:r.all.entities=null,r.all.errorTimeStamp=(new Date).getTime();break;case Je:case Ke:case Xe:case Qe:case Ye:case Ze:case We:r.commandErrorTimeStamp=(new Date).getTime()}return r},ot="[tareas] GET_BY_ID",nt="[tareas] GET_BY_PLAN_ID",at="[sectores] GET_MI_SECTOR",st="[tareas] ADD_SIMPLE",lt="[tareas] ADD_LAPSO",dt="[tareas] ADD_FECHA",ct="[tareas] UPDATE",ut="[tareas] REMOVE",pt="[tareas] EDIT",ht="[tareas] DAR_CUMPLIMIENTO",mt="[tareas] QUITAR_CUMPLIMIENTO",ft="[tareas] GET success",gt="[tareas] GET_BY_ID success",vt="[tareas] GET_BY_PLAN_ID success",bt="[sectores] GET_MI_SECTOR success",yt="[tareas] ADD success",wt="[tareas] ADD_SIMPLE success",St="[tareas] ADD_LAPSO success",At="[tareas] ADD_FECHA success",_t="[tareas] PATCH success",xt="[tareas] UPDATE success",Tt="[tareas] REMOVE success",Et="[tareas] DAR_CUMPLIMIENTO success",kt="[tareas] QUITAR_CUMPLIMIENTO success",Ct="[tareas] GET error",Dt="[tareas] GET_BY_ID error",Rt="[tareas] GET_BY_PLAN_ID error",It="[sectores] GET_MI_SECTOR error",jt="[tareas] ADD error",Ot="[tareas] ADD_SIMPLE error",zt="[tareas] ADD_LAPSO error",Pt="[tareas] ADD_FECHA error",Lt="[tareas] PATCH error",qt="[tareas] UPDATE error",Ut="[tareas] REMOVE error",Mt="[tareas] DAR_CUMPLIMIENTO error",$t="[tareas] QUITAR_CUMPLIMIENTO error",Bt=e=>({type:nt,options:e,success:vt,error:Rt}),Nt={entities:null,timeStamp:null,removeTimeStamp:null,updateTimeStamp:null,addTimeStamp:null,addSimpleTimeStamp:null,addLapsoTimeStamp:null,addFechaTimeStamp:null,errorTimeStamp:null,commandErrorTimeStamp:null,editTimeStamp:null,darCumplimientoTimeStamp:null,errorDarCumplimientoTimeStamp:null,quitarCumplimientoTimeStamp:null,errorQuitarCumplimientoTimeStamp:null,byId:{entities:null,timeStamp:null,errorTimeStamp:null},byPlanId:{entities:null,timeStamp:null,errorTimeStamp:null},table:{entities:null,count:0,timeStamp:null},miSector:{entities:null,timeStamp:null,errorTimeStamp:null}},Ht=(e=Nt,t)=>{const r={...e};switch(t.type){case ft:r.entities=t.payload.receive,r.timeStamp=(new Date).getTime();break;case gt:r.byId.entities=t.payload.receive,r.byId.timeStamp=(new Date).getTime();break;case vt:r.byPlanId.entities=t.payload.receive,r.byPlanId.timeStamp=(new Date).getTime();break;case bt:r.miSector.entities=t.payload.receive,r.miSector.timeStamp=(new Date).getTime();break;case kt:r.quitarCumplimientoTimeStamp=(new Date).getTime();break;case Et:r.darCumplimientoTimeStamp=(new Date).getTime();break;case pt:r.editTimeStamp=(new Date).getTime(),r.entities.currentItem=t.item,r.modo=t.modo;break;case xt:case _t:r.updateTimeStamp=(new Date).getTime();break;case Tt:r.removeTimeStamp=(new Date).getTime();break;case yt:r.addTimeStamp=(new Date).getTime();break;case wt:r.addSimpleTimeStamp=(new Date).getTime();break;case St:r.addLapsoTimeStamp=(new Date).getTime();break;case At:r.addFechaTimeStamp=(new Date).getTime();break;case Ct:r.errorTimeStamp=(new Date).getTime();break;case Dt:r.byId.errorTimeStamp=(new Date).getTime();break;case Rt:r.byPlanId.errorTimeStamp=(new Date).getTime();break;case It:r.miSector.errorTimeStamp=(new Date).getTime();break;case Mt:r.errorDarCumplimientoTimeStamp=(new Date).getTime();break;case $t:r.errorQuitarCumplimientoTimeStamp=(new Date).getTime();break;case qt:case Ut:case Lt:case jt:case Ot:case zt:case Pt:r.commandErrorTimeStamp=(new Date).getTime()}return r},Ft="[eventos] MOSTRAR_HIJOS",Gt="[eventos] MOSTRAR_POPUP_TAREAS",Vt="[eventos] MOSTRAR_POPUP_PLANES",Qt="[eventos] EJECUTAR_TAREA_DAR_CUMPLIMIENTO",Yt="[eventos] EJECUTAR_TAREA_QUITAR_CUMPLIMIENTO",Zt=(e,t)=>({type:Ft,registro:e,nombreComponente:t}),Wt={mostrarHijos:{timeStamp:null,registro:null,nombreComponente:null},mostrarPopupPlanes:{timeStamp:null,registro:null,nombreComponente:null,x:0,y:0},mostrarPopupTareas:{timeStamp:null,registro:null,nombreComponente:null,x:0,y:0},ejecutarTareaDarCumplimiento:{timeStamp:null,idTarea:null},ejecutarTareaQuitarCumplimiento:{timeStamp:null,idTarea:null}},Xt=(e=Wt,t)=>{const r={...e};switch(t.type){case Ft:r.mostrarHijos.timeStamp=(new Date).getTime(),r.mostrarHijos.registro=t.registro,r.mostrarHijos.nombreComponente=t.nombreComponente;break;case Vt:r.mostrarPopupPlanes.timeStamp=(new Date).getTime(),r.mostrarPopupPlanes.registro=t.registro,r.mostrarPopupPlanes.nombreComponente=t.nombreComponente,r.mostrarPopupPlanes.x=t.x,r.mostrarPopupPlanes.y=t.y;break;case Gt:r.mostrarPopupTareas.timeStamp=(new Date).getTime(),r.mostrarPopupTareas.registro=t.registro,r.mostrarPopupTareas.nombreComponente=t.nombreComponente,r.mostrarPopupTareas.x=t.x,r.mostrarPopupTareas.y=t.y;break;case Qt:r.ejecutarTareaDarCumplimiento.idTarea=t.idTarea||t.param?.item?.id,r.ejecutarTareaDarCumplimiento.item=t.item||t.param?.item,r.ejecutarTareaDarCumplimiento.param=t.param,r.ejecutarTareaDarCumplimiento.timeStamp=(new Date).getTime();break;case Yt:r.ejecutarTareaQuitarCumplimiento.idTarea=t.idTarea||t.param?.item?.id,r.ejecutarTareaQuitarCumplimiento.item=t.item||t.param?.item,r.ejecutarTareaQuitarCumplimiento.param=t.param,r.ejecutarTareaQuitarCumplimiento.timeStamp=(new Date).getTime()}return r},Jt="[popup] GET_ALL",Kt="[popup] SHOW",er="[popup] HIDDEN",tr="[popup] GET_ALL success",rr="[popup] GET_ALL error",ir=(e,t,r,i)=>({type:Kt,opcion:e,item:t,x:r,y:i}),or={all:{entities:null,timeStamp:null,errorTimeStamp:null},show:{opcion:null,item:null,x:null,y:null,timeStamp:null},hidden:null},nr=(e=or,t)=>{const r={...e};switch(t.type){case tr:r.all.entities=t.payload.receive,r.all.timeStamp=(new Date).getTime();break;case rr:r.all.entities=null,r.all.errorTimeStamp=(new Date).getTime();break;case Kt:r.show.opcion=t.opcion,r.show.item=t.item,r.show.x=t.x,r.show.y=t.y,r.show.timeStamp=(new Date).getTime();break;case er:r.hidden=(new Date).getTime()}return r},ar="[entreComponentes] BUSQUEDA_DESCRIPCION__LOAD01",sr="[entreComponentes] TAREA_CARGA__LOAD01",lr="[entreComponentes] TAREA_CARGA__LOAD02",dr="[entreComponentes] TAREA_CARGA__LOAD03",cr="[entreComponentes] TAREA_CARGA_A_AMPARO__RETORNO",ur="[entreComponentes] PLAN_CARGA__LOAD01",pr="[entreComponentes] AMPAROS__FILTER01",hr="[entreComponentes] AMPAROS__FILTER02",mr="[entreComponentes] AMPAROS__SACAR_FILTER01",fr="[entreComponentes] AMPAROS__SACAR_FILTER02",gr="[entreComponentes] CARGA_SECTORES__LOAD01",vr="[entreComponentes] VER_USUARIOS__LOAD01",br="[entreComponentes] CARGA_USUARIOS__LOAD01",yr="[entreComponentes] VER_ROLES__LOAD01",wr=(e,t)=>({type:gr,item:e,accion:t}),Sr=(e,t,r)=>({type:vr,usuariosItems:e,sectorItem:t,accion:r}),Ar=(e,t,r)=>({type:br,item:e,itemSector:t,accion:r}),_r=(e,t,r)=>({type:cr,item:e,itemPadre:t,accion:r}),xr=(e,t,r)=>({type:yr,item:e,itemSector:t,accion:r}),Tr={busqueDescripcion_Load01:{timeStamp:null,item:null,accion:null},planCarga_Load01:{timeStamp:null,item:null,accion:null},tareaCarga_Load01:{timeStamp:null,item:null,accion:null},tareaCarga_Load02:{timeStamp:null,item:null,accion:null},tareaCarga_Load03:{timeStamp:null,item:null,accion:null},amparos_Filter01:{timeStamp:null,campo:null,valor:null},amparos_Filter02:{timeStamp:null,campo:null,valor:null},amparos_SacarFilter01:{timeStamp:null},amparos_SacarFilter02:{timeStamp:null},cargaSectores_Load01:{timeStamp:null,item:null,accion:null},verUsuarios_Load01:{timeStamp:null,item:null,accion:null,sectorItem:null},cargaUsuarios_Load01:{timeStamp:null,item:null,accion:null},tareaCargaAAmparo_Retorno01:{timeStamp:null,item:null,itemPadre:null,accion:null},verRoles__Load01:{timeStamp:null,item:null,accion:null}},Er=(e=Tr,t)=>{const r={...e};switch(t.type){case ar:r.busqueDescripcion_Load01.timeStamp=(new Date).getTime(),r.busqueDescripcion_Load01.descripciones=t.descripciones||t.param?.descripciones,r.busqueDescripcion_Load01.accion=t.accion||t.param?.accion;break;case ur:r.planCarga_Load01.timeStamp=(new Date).getTime(),r.planCarga_Load01.item=t.item||t.param?.item,r.planCarga_Load01.accion=t.accion||t.param.accion;break;case sr:r.tareaCarga_Load01.timeStamp=(new Date).getTime(),r.tareaCarga_Load01.item=t.item||t.param?.item,r.tareaCarga_Load01.accion=t.accion||t.param.accion;break;case lr:r.tareaCarga_Load02.timeStamp=(new Date).getTime(),r.tareaCarga_Load02.item=t.item||t.param?.item,r.tareaCarga_Load02.accion=t.accion||t.param.accion;break;case dr:r.tareaCarga_Load03.timeStamp=(new Date).getTime(),r.tareaCarga_Load03.item=t.item||t.param?.item,r.tareaCarga_Load03.accion=t.accion||t.param.accion;break;case pr:r.amparos_Filter01.timeStamp=(new Date).getTime(),r.amparos_Filter01.campo=t.campo||t.param.campo,r.amparos_Filter01.valor=t.valor||t.param.valor,r.amparos_Filter01.valor="TODOS"==r.amparos_Filter01.valor?"":r.amparos_Filter01.valor;break;case hr:r.amparos_Filter02.timeStamp=(new Date).getTime(),r.amparos_Filter02.campo=t.campo||t.param.campo,r.amparos_Filter02.valor=t.valor||t.param.valor;break;case mr:r.amparos_SacarFilter01.timeStamp=(new Date).getTime();break;case fr:r.amparos_SacarFilter02.timeStamp=(new Date).getTime();break;case gr:r.cargaSectores_Load01.timeStamp=(new Date).getTime(),r.cargaSectores_Load01.item=t.item||t.param?.item,r.cargaSectores_Load01.accion=t.accion||t.param.accion;break;case vr:r.verUsuarios_Load01.timeStamp=(new Date).getTime(),r.verUsuarios_Load01.usuariosItems=t.usuariosItems||t.param?.usuariosItems,r.verUsuarios_Load01.sectorItem=t.sectorItem||t.param.sectorItem,r.verUsuarios_Load01.accion=t.accion||t.param.accion;break;case br:r.cargaUsuarios_Load01.timeStamp=(new Date).getTime(),r.cargaUsuarios_Load01.item=t.item||t.param?.item,r.cargaUsuarios_Load01.itemSector=t.itemSector||t.param?.itemSector,r.cargaUsuarios_Load01.accion=t.accion||t.param.accion;break;case cr:r.tareaCargaAAmparo_Retorno01.timeStamp=(new Date).getTime(),r.tareaCargaAAmparo_Retorno01.item=t.item||t.param?.item,r.tareaCargaAAmparo_Retorno01.itemPadre=t.itemPadre||t.param?.itemPadre,r.tareaCargaAAmparo_Retorno01.accion=t.accion||t.param.accion;break;case yr:r.verRoles__Load01.timeStamp=(new Date).getTime(),r.verRoles__Load01.item=t.item||t.param?.item,r.verRoles__Load01.itemSector=t.itemSector||t.param?.itemSector,r.verRoles__Load01.accion=t.accion||t.param.accion}return r},kr="[sectores] GET_BY_ID",Cr="[sectores] GET_BY_DESCRIPCION",Dr="[sectores] GET_ALL",Rr="[sectores] GET_ALL_USUARIOS",Ir="[sectores] ADD",jr="[sectores] PATCH",Or="[sectores] UPDATE",zr="[sectores] EDIT",Pr="[sectores] SUMAR_INTEGRANTE",Lr="[sectores] QUITAR_INTEGRANTE",qr="[sectores] MODIFICAR_INTEGRANTE",Ur="[sectores] USUARIO_HACER_RESPONSABLE",Mr="[sectores] QUITAR_ROL_INTEGRANTE",$r="[sectores] ASIGNAR_ROL_INTEGRANTE",Br="[sectores] ACTIVAR_INTEGRANTE",Nr="[sectores] GET_BY_ID success",Hr="[sectores] GET_BY_DESCRIPCION success",Fr="[sectores] GET_ALL success",Gr="[sectores] GET_ALL_USUARIOS success",Vr="[sectores] ADD success",Qr="[sectores] PATCH success",Yr="[sectores] UPDATE success",Zr="[sectores] REMOVE success",Wr="[sectores] SUMAR_INTEGRANTE success",Xr="[sectores] QUITAR_INTEGRANTE success",Jr="[sectores] MODIFICAR_INTEGRANTE success",Kr="[sectores] USUARIO_HACER_RESPONSABLE success",ei="[sectores] QUITAR_ROL_INTEGRANTE success",ti="[sectores] ASIGNAR_ROL_INTEGRANTE success",ri="[sectores] ACTIVAR_INTEGRANTE success",ii="[sectores] GET_BY_ID error",oi="[sectores] GET_BY_DESCRIPCION error",ni="[sectores] GET_ALL error",ai="[sectores] GET_ALL_USUARIOS error",si="[sectores] ADD error",li="[sectores] PATCH error",di="[sectores] UPDATE error",ci="[sectores] REMOVE error",ui="[sectores] SUMAR_INTEGRANTE error",pi="[sectores] QUITAR_INTEGRANTE error",hi="[sectores] MODIFICAR_INTEGRANTE error",mi="[sectores] USUARIO_HACER_RESPONSABLE error",fi="[sectores] QUITAR_ROL_INTEGRANTE error",gi="[sectores] ASIGNAR_ROL_INTEGRANTE error",vi="[sectores] ACTIVAR_INTEGRANTE error",bi=e=>({type:kr,id:e,success:Nr,error:ii}),yi=e=>({type:Dr,options:e,success:Fr,error:ni}),wi=e=>({type:Rr,options:e,success:Gr,error:ai}),Si={entities:null,timeStamp:null,removeTimeStamp:null,updateTimeStamp:null,addTimeStamp:null,errorTimeStamp:null,commandErrorTimeStamp:null,editTimeStamp:null,byId:{entities:null,timeStamp:null,errorTimeStamp:null},byDescripcion:{entities:null,timeStamp:null,errorTimeStamp:null},all:{entities:null,count:0,timeStamp:null,errorTimeStamp:null},sumarIntegrante:{timeStamp:null,errorTimeStamp:null},quitarIntegrante:{timeStamp:null,errorTimeStamp:null},modificarIntegrante:{timeStamp:null,errorTimeStamp:null},usuarioHacerResponsable:{timeStamp:null,errorTimeStamp:null},usuariosAll:{entities:null,count:0,timeStamp:null,errorTimeStamp:null},quitarRolIntegrante:{timeStamp:null,errorTimeStamp:null},asignarRolIntegrante:{timeStamp:null,errorTimeStamp:null},activarIntegrante:{timeStamp:null,errorTimeStamp:null}},Ai=(e=Si,t)=>{const r={...e};switch(t.type){case Nr:r.byId.entities=t.payload.receive,r.byId.timeStamp=(new Date).getTime();break;case Hr:r.byDescripcion.entities=t.payload.receive,r.byDescripcion.timeStamp=(new Date).getTime();break;case Fr:r.all.entities=t.payload.receive.sort(((e,t)=>e.descripcion.localeCompare(t.descripcion))),r.all.timeStamp=(new Date).getTime();break;case Gr:r.usuariosAll.entities=t.payload.receive.sort(((e,t)=>e.apellido.localeCompare(t.apellido))),r.usuariosAll.timeStamp=(new Date).getTime();break;case zr:r.editTimeStamp=(new Date).getTime(),r.entities.currentItem=t.item,r.modo=t.modo;break;case Yr:case Qr:r.updateTimeStamp=(new Date).getTime();break;case Zr:r.removeTimeStamp=(new Date).getTime();break;case Vr:r.addTimeStamp=(new Date).getTime();break;case Wr:r.sumarIntegrante.timeStamp=(new Date).getTime();break;case Xr:r.quitarIntegrante.timeStamp=(new Date).getTime();break;case Jr:r.modificarIntegrante.timeStamp=(new Date).getTime();break;case Kr:r.usuarioHacerResponsable.timeStamp=(new Date).getTime();break;case ei:r.quitarRolIntegrante.timeStamp=(new Date).getTime();break;case ti:r.asignarRolIntegrante.timeStamp=(new Date).getTime();break;case ri:r.activarIntegrante.timeStamp=(new Date).getTime();break;case ii:r.byId.errorTimeStamp=(new Date).getTime();break;case oi:r.byDescripcion.errorTimeStamp=(new Date).getTime();break;case ni:r.all.entities=null,r.all.errorTimeStamp=(new Date).getTime();break;case ai:r.usuariosAll.entities=null,r.usuariosAll.errorTimeStamp=(new Date).getTime();break;case ui:r.sumarIntegrante.errorTimeStamp=(new Date).getTime();break;case pi:r.quitarIntegrante.errorTimeStamp=(new Date).getTime();break;case hi:r.modificarIntegrante.errorTimeStamp=(new Date).getTime();break;case mi:r.usuarioHacerResponsable.errorTimeStamp=(new Date).getTime();break;case fi:r.quitarRolIntegrante.errorTimeStamp=(new Date).getTime();break;case gi:r.asignarRolIntegrante.errorTimeStamp=(new Date).getTime();break;case vi:r.activarIntegrante.errorTimeStamp=(new Date).getTime();break;case di:case ci:case li:case si:r.commandErrorTimeStamp=(new Date).getTime()}return r},_i="[miPerfil] SET",xi=e=>({type:_i,item:e}),Ti={timeStamp:null,ok:!1},Ei=(e=Ti,t)=>{const r={...e};if(t.type===_i)t.item?(r.timeStamp=(new Date).getTime(),r.ok=!0,Object.entries(t.item).forEach((([e,t])=>{r[e]=t,"sectores"==e&&t.length>0&&(r.sector=t[0])}))):r.ok=!1;return r},ki="[getCombinados] GET_INICIAL",Ci="[getCombinados] successInicial",Di="[getCombinados] noSuccessInicial",Ri={inicial:{entitiesCountOk:3,entitiesCountError:0,timeStamp:null,errorTimeStamp:null}},Ii=(e=Ri,t)=>{const r={...e};switch(t.type){case ki:r.inicial.entitiesCountOk=3,r.inicial.entitiesCountError=0;break;case Ci:r.inicial.entitiesCountOk-=1,0==r.inicial.entitiesCountOk&&0==r.inicial.entitiesCountError&&(r.inicial.timeStamp=(new Date).getTime());break;case Di:r.inicial.entitiesCountError+=1,1==r.inicial.entitiesCountError&&(r.inicial.errorTimeStamp=(new Date).getTime())}return r},ji=[({dispatch:e})=>t=>r=>{if(t(r),r.type==b){const t=window.matchMedia("(max-width: 600px)");t.addEventListener("change",(t=>{t.matches&&e(R("small"))}));const r=window.matchMedia("(max-width: 800px) and (min-width: 601px)");r.addEventListener("change",(t=>{t.matches&&e(R("medium"))}));const i=window.matchMedia("(min-width: 801px)");i.addEventListener("change",(t=>{t.matches&&e(R("large"))}));const o=window.matchMedia("(orientation:landscape)");o.addEventListener("change",(t=>{t.matches&&e(I("landscape"))}));const n=window.matchMedia("(orientation:portrait)");n.addEventListener("change",(t=>{t.matches&&e(I("portrait"))})),t.matches&&e(R("small")),r.matches&&e(R("medium")),i.matches&&e(R("large")),o.matches&&e(I("landscape")),n.matches&&e(I("portrait"))}}],Oi="[app] REST Request",zi="[app] REST Update",Pi="[app] REST Patch",Li="[app] REST Delete",qi="[app] REST Add",Ui=(e,t,r,i,o)=>({type:Oi,meta:{RESTfetch:e,id:t,onSuccess:r,onError:i,token:o}}),Mi=(e,t,r,i,o,n)=>({type:zi,meta:{RESTfetch:e,body:r,id:t,onSuccess:i,onError:o,token:n}}),$i=(e,t,r,i,o,n)=>({type:qi,payload:{},meta:{RESTfetch:e,body:t,onSuccess:r,onError:i,token:o,id:n}}),Bi=(e,t)=>{const r=e.split("/"),i=t.split("/");return r.pop(),i.pop(),r.join()==i.join()},Ni=(e,t)=>e.trim().split("/").length-1==t.trim().split("/").length,Hi=(e,t)=>t.findIndex((t=>t.split("-")[1]==e)),Fi=(e,t)=>({pointer:e,name:t[e].split("-")[1].trim()}),Gi=["1-inicial","2-solicitarAutorizacion","3-esperarAutorizacion","4-amparos","5-verSectores","6-abmUsuarios"],Vi=[({dispatch:e,getState:t})=>r=>i=>{if(r(i),i.type==B){let r=((e,t)=>{let r=e,i=t[e].split("-")[0];for(;e<t.length-1;){let r=t[e+=1].split("-")[0];if(Bi(i,r))return e}return r})(t().routing.current.pointer,Gi);e(J(Fi(r,Gi))),e(X(r))}},({dispatch:e,getState:t})=>r=>i=>{if(r(i),i.type==N){let r=((e,t)=>{let r=t[e].split("-")[0];for(;e>0;){let i=t[e-=1].split("-")[0];if(Bi(r,i)||Ni(r,i))return e}return e})(t().routing.current.pointer,Gi);e(J(Fi(r,Gi))),e(W())}},({dispatch:e,getState:t})=>t=>r=>{if(t(r),r.type==H){if("login"==r.name)viewMode("login");else{let t=Hi(r.name,Gi);e(J(Fi(t,Gi))),e(X(r.name))}r.preventHistory||window.history.pushState({option:r.name,suboption:1},null,"")}},({dispatch:e,getState:t})=>r=>i=>{var o;r(i),i.type==Q&&e((o=t().routing.current.name,{type:U,name:o,layouts:P[o]}))},({dispatch:e,getState:t})=>r=>i=>{if(r(i),i.type==F){let r=t().routing.history;if(r.length>1){let t=Hi(r[r.length-2],Gi);e(J(Fi(t,Gi))),e(W())}else{let t=Hi(Gi[0].split("-")[1],Gi);e(J(Fi(t,Gi))),e(W())}}}],Qi=[];function Yi(e){var t={};if(1==e.nodeType){if(e.attributes.length>0)for(var r=0;r<e.attributes.length;r++){var i=e.attributes.item(r);t[i.nodeName]=i.nodeValue}}else 3==e.nodeType&&(t=e.nodeValue);if(e.hasChildNodes())for(var o=0;o<e.childNodes.length;o++){var n=e.childNodes.item(o),a=n.nodeName;if(void 0===t[a])t[a]=Yi(n);else{if(void 0===t[a].push){var s=t[a];t[a]=[],t[a].push(s)}t[a].push(Yi(n))}}return t}const Zi=(e,t)=>({get:({key:r=null,top:i=null,filter:o=null,expand:n=null,orderby:a=null,select:s=null,apply:l=null,skip:d=null,customParameters:c=null,count:u,credentials:p,token:h})=>e({method:"GET",entity:t,key:r,top:i,filter:o,expand:n,orderby:a,select:s,apply:l,skip:d,customParameters:c,count:u,credentials:p,token:h}),post:(r,i)=>e({method:"POST",entity:t,body:r,token:i}),action:(r,i,o,n)=>e({method:"POST",action:r,entity:t,body:i,key:o,token:n}),execute:(t,r,i)=>e({method:"GET",funct:t,body:r,token:i}),put:(r,i)=>e({method:"PUT",entity:t,body:r,token:i}),delete:(r,i)=>e({method:"DELETE",entity:t,body:r,token:i}),patch:(r,i)=>e({method:"PATCH",entity:t,body:r,token:i}),getEmpty:()=>e({metadata:!0}).then((e=>e.EntityType.find((e=>e.Name==t)))).then((e=>e.Property.reduce(((e,t)=>{switch(t.Type){case"Edm.String":e[t.Name]="";break;case"Edm.Boolean":e[t.Name]=!1;break;case"Edm.DateTimeOffset":case"Edm.DateTime":e[t.Name]=new Date(1970,0,1,0,0,0).toJSON();break;default:e[t.Name]=0}return e}),{})))}),Wi=({fetch:e,domain:t=""})=>({method:r="GET",body:i=null,entity:o=null,action:n=null,funct:a=null,key:s=null,filter:l=null,expand:d=null,top:c=null,orderby:u=null,select:p=null,apply:h=null,skip:m=null,metadata:f=!1,customParameters:g=null,count:v=null,credentials:b="omit",token:y=""}={})=>{(()=>{if("POST"!=r&&null!=n)throw new Error("odata-fetch: el metodo "+r+" no es válido para invocar un 'action'");if("GET"!=r&&null!=a)throw new Error("odata-fetch: el metodo "+r+" no es válido para invocar un 'function'");if(!["GET","POST","PATCH","PUT","DELETE"].find((e=>e==r)))throw new Error("odata-fetch: parámetro 'method' no válido");if("GET"==r&&null!=i)throw new Error("odata-fetch: el parámetro 'body' debe estar vacío cuando el parámetro 'method' es 'GET'");if(null==o&&null==n&&null==a&&!f)throw new Error("odata-fetch: debe especidifcar el menos uno de estos parametros 'entity','action','funct', 'metadata'")})();let w=t+"/odata/";const S={method:r,credentials:b,headers:{"Content-Type":"application/json",Authorization:"Bearer "+y}};if("GET"!=r&&(S.body=JSON.stringify(i)),"PUT"!=r&&"PATCH"!=r&&"DELETE"!=r||(s=i.Id),f){const r=Qi.find((e=>e.domain==t));return null!=r?new Promise(((e,t)=>{e(r.meta)})):(w+="$metadata",e(w,S).then((e=>e.text())).then((e=>{const r=Yi((new window.DOMParser).parseFromString(e,"text/xml"))["edmx:Edmx"]["edmx:DataServices"].Schema[0];return Qi.push({domain:t,meta:r}),r})))}return n&&(o&&(s&&(o=o+"("+s+")"),w+=o+"/"),w+=n),a&&(o&&(s&&(o=o+"("+s+")"),w+=o+"/"),w+=a),!o||n||a||(s&&(o=o+"("+s+")"),w+=o+"/?",d&&(w+="$expand="+d),c&&(w+="&$top="+c),l&&(w+="&$filter="+l),u&&(w+="&$orderby="+u),p&&(w+="&$select="+p),h&&(w+="&$apply="+h),m&&(w+="&$skip="+m),g&&(w+="&"+g),v&&(w+="&$count=true")),e(w,S).then((e=>e.json())).then((e=>{if(null==e)throw new Error("No se puede acceder al servidor, verifique sus credenciales");if(null!=e.value)return"object"==typeof e.value&&(e.value.__odataCount=e["@odata.count"]||0),e.value;if(e.error){if(e.error.innererror)throw new Error(e.error.innererror.message);throw new Error(e.error.message)}return e}))},Xi=(e,t)=>{e=e+"/"+t;const r=e=>({"Content-Type":"application/json",Authorization:"Bearer "+e});return{get:(t,i)=>{let o=e;return t&&(o=e+"/"+t),fetch(o,{method:"GET",headers:r(i)}).then((e=>e.text())).then((e=>JSON.parse(e||"{}")))},post:(t,i,o)=>{let n=e;return o&&(n=e+"("+o+")"),fetch(n,{method:"POST",body:JSON.stringify(t),headers:r(i)}).then((e=>e.text())).then((e=>JSON.parse(e||"{}")))},patch:(t,i,o)=>fetch(e+"/"+t,{method:"PATCH",body:JSON.stringify(i),headers:r(o)}).then((e=>e.text())).then((e=>JSON.parse(e||"{}"))),put:(t,i,o)=>{let n="";return n=t?e+"/"+t:e,fetch(n,{method:"PUT",body:JSON.stringify(i),headers:r(o)}).then((e=>e.text())).then((e=>JSON.parse(e||"{}")))},delete:(t,i)=>fetch(e+"/"+t,{method:"DELETE",headers:r(i)}).then((e=>e.text())).then((e=>JSON.parse(e||"{}")))}};let Ji="https://scatest.uocra.net/api/v1";const Ki=Wi({fetch,domain:"https://scatest.uocra.net"}),eo=Xi(Ji,"Autorizacion"),to=Xi(Ji,"Autorizacion/AceptarUsuario"),ro=Xi(Ji,"Autorizacion/Accept"),io=(Xi(Ji,"LoginOS"),Zi(Ki,"Logon"),Zi(Ki,"PedirRecupero"),Zi(Ki,"CambiarPassword"),Xi(Ji,"Plan")),oo=Xi(Ji,"Plan/GetAll"),no=Xi(Ji,"Plan/NuevoPlan"),ao=Xi(Ji,"Plan/Modificar"),so=Xi(Ji,"Plan/AgregarTareas"),lo=Xi(Ji,"Plan/AgregarMultiplesTareasPorLapso"),co=Xi(Ji,"Plan/AgregarMultiplesTareasEnFecha"),uo=Xi(Ji,"Plan/Quitar"),po=Xi(Ji,"Tarea"),ho=Xi(Ji,"Tarea/GetByPlanId"),mo=Xi(Ji,"Tarea/DarCumplimiento"),fo=Xi(Ji,"Tarea/QuitarCumplimiento"),go=Xi(Ji,"Tarea/SumarCondicion"),vo=Xi(Ji,"Tarea/AgregarMultiplesCondicionesPorLapso"),bo=Xi(Ji,"Tarea/AgregarMultiplesCondicionesEnFecha"),yo=Xi(Ji,"Tarea/QuitarTarea"),wo=Xi(Ji,"Tarea/ModificarDescripcion"),So=Xi(Ji,"Tarea/GetMiSector"),Ao=Xi(Ji,"Sector"),_o=Xi(Ji,"Sector/all"),xo=Xi(Ji,"Sector/getByDescripcion"),To=Xi(Ji,"Sector/add"),Eo=Xi(Ji,"Sector/update"),ko=Xi(Ji,"Sector/SumarIntegrante"),Co=Xi(Ji,"Sector/QuitarIntegrante"),Do=Xi(Ji,"Sector/ModificarIntegrante"),Ro=Xi(Ji,"Sector/HacerResponsable"),Io=Xi(Ji,"Sector/allUsuarios"),jo=Xi(Ji,"Sector/QuitarRolIntegrante"),Oo=Xi(Ji,"Sector/AsignarRolIntegrante"),zo=Xi(Ji,"Sector/ActivarIntegrante"),Po=[({dispatch:e})=>t=>r=>{t(r),r.type===xe&&e(Ui(oo,null,Le,Ve,r.token))},({dispatch:e})=>t=>r=>{t(r),r.type===Te&&e(Ui(io,r.id,Pe,Ge,r.token))},({dispatch:e})=>t=>r=>{t(r),r.type===Ee&&e(Ui(oo,r.options,ze,Fe,r.token))},({dispatch:e})=>t=>r=>{t(r),r.type===ke&&e($i(no,r.body,qe,Qe,r.token))},({dispatch:e})=>t=>r=>{t(r),r.type===Ce&&e($i(so,r.body,Ue,Ye,r.token))},({dispatch:e})=>t=>r=>{t(r),r.type===De&&e($i(lo,r.body,Me,Ze,r.token))},({dispatch:e})=>t=>r=>{t(r),r.type===Re&&e($i(co,r.body,$e,We,r.token))},({dispatch:e})=>e=>t=>{e(t),t.type},({dispatch:e})=>e=>t=>{e(t),t.type},({dispatch:e})=>t=>r=>{t(r),r.type===je&&e($i(uo,r.id,He,Ke,r.token))},({dispatch:e})=>e=>t=>{e(t),t.type===Le||t.type},({dispatch:e})=>e=>t=>{e(t),t.type===qe||t.type===Ue||t.type===Me||t.type===$e||t.type===Ne||t.type===He||t.type},({dispatch:e})=>e=>t=>{e(t),t.type===Ve||t.type===Fe||t.type===Qe||t.type===Ye||t.type===Ze||t.type===We||t.type===Je||t.type===Ke||t.type},({dispatch:e})=>t=>r=>{t(r),r.type===Ie&&e($i(ao,r.body,Ne,Je,r.token))}],Lo=[({dispatch:e})=>e=>t=>{e(t),t.type},({dispatch:e})=>t=>r=>{t(r),r.type===ot&&e(Ui(po,r.id,gt,Dt,r.token))},({dispatch:e})=>t=>r=>{t(r),r.type===nt&&e(Ui(ho,r.options,vt,Rt,r.token))},({dispatch:e,getState:t})=>r=>i=>{r(i),i.type===at&&t().miPerfil?.sector?.token&&e(Ui(So,"",bt,It,t().miPerfil?.sector?.token))},({dispatch:e})=>e=>t=>{e(t),t.type},({dispatch:e})=>t=>r=>{t(r),r.type===st&&e($i(go,r.body,wt,Ot,r.token))},({dispatch:e})=>t=>r=>{t(r),r.type===lt&&e($i(vo,r.body,St,zt,r.token))},({dispatch:e})=>t=>r=>{t(r),r.type===dt&&e($i(bo,r.body,At,Pt,r.token))},({dispatch:e})=>t=>r=>{t(r),r.type===ht&&e($i(mo,r.idTarea,Et,Mt,r.token))},({dispatch:e})=>t=>r=>{t(r),r.type===mt&&e($i(fo,r.idTarea,kt,$t,r.token))},({dispatch:e})=>t=>r=>{t(r),r.type===ct&&e(Mi(wo,null,r.body,xt,qt,r.token))},({dispatch:e})=>e=>t=>{e(t),t.type},({dispatch:e})=>t=>r=>{t(r),r.type===ut&&e(Mi(yo,null,r.id,Tt,Ut,r.token))},({dispatch:e})=>e=>t=>{e(t),t.type},({dispatch:e})=>e=>t=>{e(t),t.type===yt||t.type===xt||t.type===Tt||t.type},({dispatch:e})=>e=>t=>{e(t),t.type===Ct||t.type===jt||t.type===qt||t.type===Ut||t.type}],qo=[({dispatch:e})=>t=>i=>{if(t(i),i.type===Jt){let t=r(866);e({type:tr,payload:{send:1,receive:t}})}}],Uo=[({dispatch:e})=>t=>r=>{t(r),r.type===kr&&e(Ui(Ao,r.id,Nr,Nr,r.token))},({dispatch:e})=>t=>r=>{t(r),r.type===Ur&&e(Mi(Ro,null,r.body,Kr,mi,r.token))},({dispatch:e})=>t=>r=>{t(r),r.type===Cr&&e(Ui(xo,r.descripcion,Hr,oi,r.token))},({dispatch:e})=>t=>r=>{t(r),r.type===Dr&&e(Ui(_o,null,Fr,ni,r.token))},({dispatch:e})=>t=>r=>{t(r),r.type===Rr&&e(Ui(Io,null,Gr,ai,r.token))},({dispatch:e})=>t=>r=>{t(r),r.type===Ir&&e($i(To,r.body,Vr,si,r.token))},({dispatch:e})=>t=>r=>{t(r),r.type===Or&&e(Mi(Eo,r.id,r.body,Yr,di,r.token))},({dispatch:e})=>t=>r=>{t(r),r.type===jr&&e(((e,t,r,i,o,n)=>({type:Pi,meta:{RESTfetch:e,body:r,id:t,onSuccess:i,onError:o,token:n}}))(Eo,r.id,r.body,Yr,di,r.token))},({dispatch:e})=>e=>t=>{e(t),t.type},({dispatch:e})=>t=>r=>{t(r),r.type===Pr&&e(Mi(ko,null,r.body,Wr,ui,r.token))},({dispatch:e})=>t=>r=>{t(r),r.type===Lr&&e(Mi(Co,null,r.body,Xr,pi,r.token))},({dispatch:e})=>t=>r=>{t(r),r.type===Br&&e(Mi(zo,null,r.body,ri,vi,r.token))},({dispatch:e})=>t=>r=>{t(r),r.type===qr&&e(Mi(Do,null,r.body,Jr,hi,r.token))},({dispatch:e})=>t=>r=>{t(r),r.type===Mr&&e(Mi(jo,null,r.body,ei,fi,r.token))},({dispatch:e})=>t=>r=>{t(r),r.type===$r&&e(Mi(Oo,null,r.body,ti,gi,r.token))},({dispatch:e})=>e=>t=>{e(t),t.type===Nr||t.type},({dispatch:e})=>e=>t=>{e(t),t.type===Vr||t.type===Yr||t.type===Zr||t.type},({dispatch:e})=>e=>t=>{e(t),t.type===ii||t.type===ni||t.type===si||t.type===di||t.type===ci||t.type}],Mo=[({dispatch:e})=>t=>r=>{t(r),r.type===he&&e(Ui(eo,"?token="+r.token,me,fe,""))},({dispatch:e})=>t=>r=>{t(r),r.type===ge&&e($i(to,r.body,ve,be,""))},({dispatch:e,getState:t})=>r=>i=>{r(i),i.type===ye&&e($i(ro,{AfiliadoId:i.id},we,"[autorizacion] Accept  error",t().autorizacion.entities.token))},({dispatch:e,getState:t})=>r=>i=>{r(i),i.type===we&&e(Se(t().autorizacion.tokenAutentication))},({dispatch:e,getState:t})=>e=>t=>{e(t),t.type},({dispatch:e,getState:t})=>e=>t=>{e(t)},({dispatch:e})=>e=>t=>{e(t)}],$o=[({dispatch:e})=>t=>r=>{t(r),r.type===ki&&(e({type:Jt,success:tr,error:rr}),e(yi()),e(wi()))},({dispatch:e})=>t=>r=>{t(r),r.type!=tr&&r.type!=Fr&&r.type!=Gr||e({type:Ci})},({dispatch:e})=>t=>r=>{t(r),r.type!==rr&&r.type!=ni&&r.type!=ai||e({type:Di})}];const Bo=c(((e={},t)=>{e.presentacionesEstados;return{autorizacion:_e(e.autorizacion,t),api:pe(e.api,t),ui:O(e.ui,t),screen:$(e.screen,t),routing:ee(e.routing,t),planes:it(e.planes,t),tareas:Ht(e.tareas,t),eventos:Xt(e.eventos,t),popup:nr(e.popup,t),entreComponentes:Er(e.entreComponentes,t),sectores:Ai(e.sectores,t),miPerfil:Ei(e.miPerfil,t),getCombinados:Ii(e.getCombinados,t)}}),{},(window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||u)(function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(e){return function(){var r=e.apply(void 0,arguments),i=function(){throw new Error(n(15))},a={getState:r.getState,dispatch:function(){return i.apply(void 0,arguments)}},s=t.map((function(e){return e(a)}));return i=u.apply(void 0,s)(r.dispatch),o(o({},r),{},{dispatch:i})}}}(...[({dispatch:e,getState:t})=>r=>i=>{const o=t().autorizacion?.usuario&&t().autorizacion.usuario.Profiles[0].Token||"";if(i.type===te){const{ODataFetch:t,params:r,onSuccess:n,onError:a}=i.meta;r.token=o,e(de(t)),t.get(r).then((i=>{e(ce(t)),e({type:n,payload:{send:r,receive:i}})})).catch((r=>{e(ce(t)),e({type:a,payload:r})}))}if(i.type===re){const{ODataFetch:t,body:r,onSuccess:n,onError:a}=i.meta;e(de(t)),t.patch(r,o).then((i=>{e(ce(t)),e({type:n,payload:{send:r,receive:i}})})).catch((i=>{e(ce(t)),e({type:a,payload:{send:r,receive:i}})}))}if(i.type===ie){const{ODataFetch:t,body:r,onSuccess:n,onError:a}=i.meta;e(de(t)),t.delete(r,o).then((i=>{e(ce(t)),e({type:n,payload:{send:r,receive:i}})})).catch((i=>{e(ce(t)),e({type:a,payload:{send:r,receive:i}})}))}if(i.type===oe){const{ODataFetch:t,body:r,onSuccess:n,onError:a}=i.meta;e(de(t)),t.post(r,o).then((i=>{e(ce(t)),e({type:n,payload:{send:r,receive:i}})})).catch((i=>{e(ce(t)),e({type:a,payload:{send:r,receive:i}})}))}if(i.type===ne){const{ODataFetch:t,body:r,key:n,accion:a,onSuccess:s,onError:l}=i.meta;e(de(t)),t.action(a,r,n,o).then((i=>{e(ce(t)),i.redirect&&(location.href=i.redirect),e({type:s,payload:{send:r,receive:i}})})).catch((i=>{e(ce(t)),e({type:l,payload:{send:r,receive:i}})}))}if(i.type===ae){const{ODataFetch:t,funct:r,onSuccess:n,onError:a}=i.meta;e(de(t)),t.execute(r,o).then((r=>{e(ce(t)),r.redirect&&(location.href=r.redirect),e({type:n,payload:{receive:r}})})).catch((r=>{e(ce(t)),e({type:a,payload:{send:body,receive:r}})}))}return r(i)},({dispatch:e})=>t=>r=>{if(r.type===Oi){const{RESTfetch:t,id:i,onSuccess:o,onError:n,token:a}=r.meta;e(de()),t.get(i,a).then((t=>{e(ce()),e({type:o,payload:{send:i,receive:t}})})).catch((t=>{e(ce()),e({type:n,payload:{send:i,receive:t}})}))}if(r.type===Pi){const{RESTfetch:t,id:i,body:o,onSuccess:n,onError:a,token:s}=r.meta;e(de()),t.patch(i,o,s).then((t=>{e(ce()),e({type:n,payload:{send:{id:i,body:o},receive:t}})})).catch((t=>{e(ce()),e({type:a,payload:{send:{id:i,body:o},receive:t}})}))}if(r.type===zi){const{RESTfetch:t,id:i,body:o,onSuccess:n,onError:a,token:s}=r.meta;e(de()),t.put(i,o,s).then((t=>{e(ce()),e({type:n,payload:{send:{id:i,body:o},receive:t}})})).catch((t=>{e(ce()),e({type:a,payload:{send:{id:i,body:o},receive:t}})}))}if(r.type===Li){const{RESTfetch:t,id:i,onSuccess:o,onError:n,token:a}=r.meta;e(de()),t.delete(i,a).then((t=>{e(ce()),e({type:o,payload:{send:i,receive:t}})})).catch((t=>{e(ce()),e({type:n,payload:{send:i,receive:t}})}))}if(r.type===qi){const{RESTfetch:t,body:i,onSuccess:o,onError:n,token:a,id:s}=r.meta;e(de()),t.post(i,a,s).then((t=>{e(ce()),e({type:o,payload:{send:i,receive:t}})})).catch((t=>{e(ce()),e({type:n,payload:{send:i,receive:t}})}))}return t(r)},...ji,...Vi,...Mo,...Po,...Lo,...qo,...Uo,...$o]))),No=window,Ho=No.ShadowRoot&&(void 0===No.ShadyCSS||No.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Fo=Symbol(),Go=new WeakMap;class Vo{constructor(e,t,r){if(this._$cssResult$=!0,r!==Fo)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(Ho&&void 0===e){const r=void 0!==t&&1===t.length;r&&(e=Go.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&Go.set(t,e))}return e}toString(){return this.cssText}}const Qo=e=>new Vo("string"==typeof e?e:e+"",void 0,Fo),Yo=(e,...t)=>{const r=1===e.length?e[0]:t.reduce(((t,r,i)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+e[i+1]),e[0]);return new Vo(r,e,Fo)},Zo=Ho?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const r of e.cssRules)t+=r.cssText;return Qo(t)})(e):e;var Wo;const Xo=window,Jo=Xo.trustedTypes,Ko=Jo?Jo.emptyScript:"",en=Xo.reactiveElementPolyfillSupport,tn={toAttribute(e,t){switch(t){case Boolean:e=e?Ko:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=null!==e;break;case Number:r=null===e?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch(e){r=null}}return r}},rn=(e,t)=>t!==e&&(t==t||e==e),on={attribute:!0,type:String,converter:tn,reflect:!1,hasChanged:rn};class nn extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(e){var t;this.finalize(),(null!==(t=this.h)&&void 0!==t?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach(((t,r)=>{const i=this._$Ep(r,t);void 0!==i&&(this._$Ev.set(i,r),e.push(i))})),e}static createProperty(e,t=on){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const r="symbol"==typeof e?Symbol():"__"+e,i=this.getPropertyDescriptor(e,r,t);void 0!==i&&Object.defineProperty(this.prototype,e,i)}}static getPropertyDescriptor(e,t,r){return{get(){return this[t]},set(i){const o=this[e];this[t]=i,this.requestUpdate(e,o,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||on}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),void 0!==e.h&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,t=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const r of t)this.createProperty(r,e[r])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const r=new Set(e.flat(1/0).reverse());for(const e of r)t.unshift(Zo(e))}else void 0!==e&&t.push(Zo(e));return t}static _$Ep(e,t){const r=t.attribute;return!1===r?void 0:"string"==typeof r?r:"string"==typeof e?e.toLowerCase():void 0}u(){var e;this._$E_=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(e=this.constructor.h)||void 0===e||e.forEach((e=>e(this)))}addController(e){var t,r;(null!==(t=this._$ES)&&void 0!==t?t:this._$ES=[]).push(e),void 0!==this.renderRoot&&this.isConnected&&(null===(r=e.hostConnected)||void 0===r||r.call(e))}removeController(e){var t;null===(t=this._$ES)||void 0===t||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])}))}createRenderRoot(){var e;const t=null!==(e=this.shadowRoot)&&void 0!==e?e:this.attachShadow(this.constructor.shadowRootOptions);return((e,t)=>{Ho?e.adoptedStyleSheets=t.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet)):t.forEach((t=>{const r=document.createElement("style"),i=No.litNonce;void 0!==i&&r.setAttribute("nonce",i),r.textContent=t.cssText,e.appendChild(r)}))})(t,this.constructor.elementStyles),t}connectedCallback(){var e;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(e=this._$ES)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostConnected)||void 0===t?void 0:t.call(e)}))}enableUpdating(e){}disconnectedCallback(){var e;null===(e=this._$ES)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostDisconnected)||void 0===t?void 0:t.call(e)}))}attributeChangedCallback(e,t,r){this._$AK(e,r)}_$EO(e,t,r=on){var i;const o=this.constructor._$Ep(e,r);if(void 0!==o&&!0===r.reflect){const n=(void 0!==(null===(i=r.converter)||void 0===i?void 0:i.toAttribute)?r.converter:tn).toAttribute(t,r.type);this._$El=e,null==n?this.removeAttribute(o):this.setAttribute(o,n),this._$El=null}}_$AK(e,t){var r;const i=this.constructor,o=i._$Ev.get(e);if(void 0!==o&&this._$El!==o){const e=i.getPropertyOptions(o),n="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==(null===(r=e.converter)||void 0===r?void 0:r.fromAttribute)?e.converter:tn;this._$El=o,this[o]=n.fromAttribute(t,e.type),this._$El=null}}requestUpdate(e,t,r){let i=!0;void 0!==e&&(((r=r||this.constructor.getPropertyOptions(e)).hasChanged||rn)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),!0===r.reflect&&this._$El!==e&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(e,r))):i=!1),!this.isUpdatePending&&i&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((e,t)=>this[t]=e)),this._$Ei=void 0);let t=!1;const r=this._$AL;try{t=this.shouldUpdate(r),t?(this.willUpdate(r),null===(e=this._$ES)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostUpdate)||void 0===t?void 0:t.call(e)})),this.update(r)):this._$Ek()}catch(e){throw t=!1,this._$Ek(),e}t&&this._$AE(r)}willUpdate(e){}_$AE(e){var t;null===(t=this._$ES)||void 0===t||t.forEach((e=>{var t;return null===(t=e.hostUpdated)||void 0===t?void 0:t.call(e)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){void 0!==this._$EC&&(this._$EC.forEach(((e,t)=>this._$EO(t,this[t],e))),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}}var an;nn.finalized=!0,nn.elementProperties=new Map,nn.elementStyles=[],nn.shadowRootOptions={mode:"open"},null==en||en({ReactiveElement:nn}),(null!==(Wo=Xo.reactiveElementVersions)&&void 0!==Wo?Wo:Xo.reactiveElementVersions=[]).push("1.5.0");const sn=window,ln=sn.trustedTypes,dn=ln?ln.createPolicy("lit-html",{createHTML:e=>e}):void 0,cn=`lit$${(Math.random()+"").slice(9)}$`,un="?"+cn,pn=`<${un}>`,hn=document,mn=(e="")=>hn.createComment(e),fn=e=>null===e||"object"!=typeof e&&"function"!=typeof e,gn=Array.isArray,vn=e=>gn(e)||"function"==typeof(null==e?void 0:e[Symbol.iterator]),bn=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,yn=/-->/g,wn=/>/g,Sn=RegExp(">|[ \t\n\f\r](?:([^\\s\"'>=/]+)([ \t\n\f\r]*=[ \t\n\f\r]*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)","g"),An=/'/g,_n=/"/g,xn=/^(?:script|style|textarea|title)$/i,Tn=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),En=Tn(1),kn=Tn(2),Cn=Symbol.for("lit-noChange"),Dn=Symbol.for("lit-nothing"),Rn=new WeakMap,In=hn.createTreeWalker(hn,129,null,!1),jn=(e,t)=>{const r=e.length-1,i=[];let o,n=2===t?"<svg>":"",a=bn;for(let t=0;t<r;t++){const r=e[t];let s,l,d=-1,c=0;for(;c<r.length&&(a.lastIndex=c,l=a.exec(r),null!==l);)c=a.lastIndex,a===bn?"!--"===l[1]?a=yn:void 0!==l[1]?a=wn:void 0!==l[2]?(xn.test(l[2])&&(o=RegExp("</"+l[2],"g")),a=Sn):void 0!==l[3]&&(a=Sn):a===Sn?">"===l[0]?(a=null!=o?o:bn,d=-1):void 0===l[1]?d=-2:(d=a.lastIndex-l[2].length,s=l[1],a=void 0===l[3]?Sn:'"'===l[3]?_n:An):a===_n||a===An?a=Sn:a===yn||a===wn?a=bn:(a=Sn,o=void 0);const u=a===Sn&&e[t+1].startsWith("/>")?" ":"";n+=a===bn?r+pn:d>=0?(i.push(s),r.slice(0,d)+"$lit$"+r.slice(d)+cn+u):r+cn+(-2===d?(i.push(void 0),t):u)}const s=n+(e[r]||"<?>")+(2===t?"</svg>":"");if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==dn?dn.createHTML(s):s,i]};class On{constructor({strings:e,_$litType$:t},r){let i;this.parts=[];let o=0,n=0;const a=e.length-1,s=this.parts,[l,d]=jn(e,t);if(this.el=On.createElement(l,r),In.currentNode=this.el.content,2===t){const e=this.el.content,t=e.firstChild;t.remove(),e.append(...t.childNodes)}for(;null!==(i=In.nextNode())&&s.length<a;){if(1===i.nodeType){if(i.hasAttributes()){const e=[];for(const t of i.getAttributeNames())if(t.endsWith("$lit$")||t.startsWith(cn)){const r=d[n++];if(e.push(t),void 0!==r){const e=i.getAttribute(r.toLowerCase()+"$lit$").split(cn),t=/([.?@])?(.*)/.exec(r);s.push({type:1,index:o,name:t[2],strings:e,ctor:"."===t[1]?Un:"?"===t[1]?$n:"@"===t[1]?Bn:qn})}else s.push({type:6,index:o})}for(const t of e)i.removeAttribute(t)}if(xn.test(i.tagName)){const e=i.textContent.split(cn),t=e.length-1;if(t>0){i.textContent=ln?ln.emptyScript:"";for(let r=0;r<t;r++)i.append(e[r],mn()),In.nextNode(),s.push({type:2,index:++o});i.append(e[t],mn())}}}else if(8===i.nodeType)if(i.data===un)s.push({type:2,index:o});else{let e=-1;for(;-1!==(e=i.data.indexOf(cn,e+1));)s.push({type:7,index:o}),e+=cn.length-1}o++}}static createElement(e,t){const r=hn.createElement("template");return r.innerHTML=e,r}}function zn(e,t,r=e,i){var o,n,a,s;if(t===Cn)return t;let l=void 0!==i?null===(o=r._$Co)||void 0===o?void 0:o[i]:r._$Cl;const d=fn(t)?void 0:t._$litDirective$;return(null==l?void 0:l.constructor)!==d&&(null===(n=null==l?void 0:l._$AO)||void 0===n||n.call(l,!1),void 0===d?l=void 0:(l=new d(e),l._$AT(e,r,i)),void 0!==i?(null!==(a=(s=r)._$Co)&&void 0!==a?a:s._$Co=[])[i]=l:r._$Cl=l),void 0!==l&&(t=zn(e,l._$AS(e,t.values),l,i)),t}class Pn{constructor(e,t){this.u=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(e){var t;const{el:{content:r},parts:i}=this._$AD,o=(null!==(t=null==e?void 0:e.creationScope)&&void 0!==t?t:hn).importNode(r,!0);In.currentNode=o;let n=In.nextNode(),a=0,s=0,l=i[0];for(;void 0!==l;){if(a===l.index){let t;2===l.type?t=new Ln(n,n.nextSibling,this,e):1===l.type?t=new l.ctor(n,l.name,l.strings,this,e):6===l.type&&(t=new Nn(n,this,e)),this.u.push(t),l=i[++s]}a!==(null==l?void 0:l.index)&&(n=In.nextNode(),a++)}return o}p(e){let t=0;for(const r of this.u)void 0!==r&&(void 0!==r.strings?(r._$AI(e,r,t),t+=r.strings.length-2):r._$AI(e[t])),t++}}class Ln{constructor(e,t,r,i){var o;this.type=2,this._$AH=Dn,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=r,this.options=i,this._$Cm=null===(o=null==i?void 0:i.isConnected)||void 0===o||o}get _$AU(){var e,t;return null!==(t=null===(e=this._$AM)||void 0===e?void 0:e._$AU)&&void 0!==t?t:this._$Cm}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=zn(this,e,t),fn(e)?e===Dn||null==e||""===e?(this._$AH!==Dn&&this._$AR(),this._$AH=Dn):e!==this._$AH&&e!==Cn&&this.g(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):vn(e)?this.k(e):this.g(e)}O(e,t=this._$AB){return this._$AA.parentNode.insertBefore(e,t)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}g(e){this._$AH!==Dn&&fn(this._$AH)?this._$AA.nextSibling.data=e:this.T(hn.createTextNode(e)),this._$AH=e}$(e){var t;const{values:r,_$litType$:i}=e,o="number"==typeof i?this._$AC(e):(void 0===i.el&&(i.el=On.createElement(i.h,this.options)),i);if((null===(t=this._$AH)||void 0===t?void 0:t._$AD)===o)this._$AH.p(r);else{const e=new Pn(o,this),t=e.v(this.options);e.p(r),this.T(t),this._$AH=e}}_$AC(e){let t=Rn.get(e.strings);return void 0===t&&Rn.set(e.strings,t=new On(e)),t}k(e){gn(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let r,i=0;for(const o of e)i===t.length?t.push(r=new Ln(this.O(mn()),this.O(mn()),this,this.options)):r=t[i],r._$AI(o),i++;i<t.length&&(this._$AR(r&&r._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){var r;for(null===(r=this._$AP)||void 0===r||r.call(this,!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){var t;void 0===this._$AM&&(this._$Cm=e,null===(t=this._$AP)||void 0===t||t.call(this,e))}}class qn{constructor(e,t,r,i,o){this.type=1,this._$AH=Dn,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=o,r.length>2||""!==r[0]||""!==r[1]?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=Dn}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,r,i){const o=this.strings;let n=!1;if(void 0===o)e=zn(this,e,t,0),n=!fn(e)||e!==this._$AH&&e!==Cn,n&&(this._$AH=e);else{const i=e;let a,s;for(e=o[0],a=0;a<o.length-1;a++)s=zn(this,i[r+a],t,a),s===Cn&&(s=this._$AH[a]),n||(n=!fn(s)||s!==this._$AH[a]),s===Dn?e=Dn:e!==Dn&&(e+=(null!=s?s:"")+o[a+1]),this._$AH[a]=s}n&&!i&&this.j(e)}j(e){e===Dn?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=e?e:"")}}class Un extends qn{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===Dn?void 0:e}}const Mn=ln?ln.emptyScript:"";class $n extends qn{constructor(){super(...arguments),this.type=4}j(e){e&&e!==Dn?this.element.setAttribute(this.name,Mn):this.element.removeAttribute(this.name)}}class Bn extends qn{constructor(e,t,r,i,o){super(e,t,r,i,o),this.type=5}_$AI(e,t=this){var r;if((e=null!==(r=zn(this,e,t,0))&&void 0!==r?r:Dn)===Cn)return;const i=this._$AH,o=e===Dn&&i!==Dn||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,n=e!==Dn&&(i===Dn||o);o&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,r;"function"==typeof this._$AH?this._$AH.call(null!==(r=null===(t=this.options)||void 0===t?void 0:t.host)&&void 0!==r?r:this.element,e):this._$AH.handleEvent(e)}}class Nn{constructor(e,t,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){zn(this,e)}}const Hn=sn.litHtmlPolyfillSupport;null==Hn||Hn(On,Ln),(null!==(an=sn.litHtmlVersions)&&void 0!==an?an:sn.litHtmlVersions=[]).push("2.5.0");var Fn,Gn;class Vn extends nn{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;const r=super.createRenderRoot();return null!==(e=(t=this.renderOptions).renderBefore)&&void 0!==e||(t.renderBefore=r.firstChild),r}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,r)=>{var i,o;const n=null!==(i=null==r?void 0:r.renderBefore)&&void 0!==i?i:t;let a=n._$litPart$;if(void 0===a){const e=null!==(o=null==r?void 0:r.renderBefore)&&void 0!==o?o:null;n._$litPart$=a=new Ln(t.insertBefore(mn(),e),e,void 0,null!=r?r:{})}return a._$AI(e),a})(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),null===(e=this._$Do)||void 0===e||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),null===(e=this._$Do)||void 0===e||e.setConnected(!1)}render(){return Cn}}Vn.finalized=!0,Vn._$litElement$=!0,null===(Fn=globalThis.litElementHydrateSupport)||void 0===Fn||Fn.call(globalThis,{LitElement:Vn});const Qn=globalThis.litElementPolyfillSupport;null==Qn||Qn({LitElement:Vn});(null!==(Gn=globalThis.litElementVersions)&&void 0!==Gn?Gn:globalThis.litElementVersions=[]).push("3.2.2");const Yn=(...e)=>t=>e.reduce(((e,t)=>null!=e&&null!=e[t]?e[t]:null),t),Zn=(e,...t)=>r=>class extends r{constructor(){super(),this.store=e,this.__currentStates=[],this.__deepValues=[]}connectedCallback(){for(let r=0;r<t.length;r++){const i=t[r].split(".");this.__currentStates.push(null);let o=i.length>0?Yn(...i):null;this.__deepValues.push(o),this.__currentStates[r]=this.__deepValues[r](e.getState()),this.__storeUnsubscribe=e.subscribe((()=>this.__stateChanged(r,e.getState()))),this.__stateChanged(r,e.getState())}super.connectedCallback&&super.connectedCallback()}getCurrent(){return[...this.__currentStates]}disconnectedCallback(){this.__storeUnsubscribe(),super.disconnectedCallback&&super.disconnectedCallback()}__stateChanged(e,r){if(this.stateChanged){let i=!0;if(this.__deepValues[e]){let t=this.__currentStates[e];this.__currentStates[e]=this.__deepValues[e](r),i=t!=this.__currentStates[e]}i&&this.stateChanged(r,t[e])}}},Wn=Zn,Xn=Yo`
	:host([layout="${Qo("SLIDER_HEADER_BODY")}"]) {
		grid-template-areas:
			"foot  header"
			"foot    body";
		grid-template-rows: 1.8fr 8.2fr;
		grid-template-columns: 1.5fr 8.5fr;
		grid-gap: 0rem;
	}

	:host([layout="${Qo(z.name)}"]) {
		grid-template-areas:
			"header"
			"body";
		grid-template-rows: 0.5fr 9.5fr;
		grid-template-columns: 1fr;
		grid-gap: 0rem;
	}
	:host([layout="${Qo("BODY_FOOT")}"]) {
		grid-template-areas:
			"body"
			"foot";
		grid-template-rows: 9fr 1fr;
		grid-gap: 0.3rem;
	}

	:host([layout="${Qo("HEADER_BODY_FOOT")}"]) {
		grid-template-areas:
			"header"
			"body"
			"foot";
		grid-template-rows: 1.8fr 7.2fr 1fr;
		grid-template-columns: 1fr;
	}
	:host([layout="${Qo("TODO_BODY")}"]) {
		grid-template-areas: "body";
		grid-template-rows: 1fr;
		grid-template-columns: 1fr;
	}

	.header {
		grid-area: header;
		padding: 0 1rem 0 1rem;
	}
	.body {
		grid-area: body;
	}
	.foot {
		grid-area: foot;
	}
`,Jn=Yo`
    .no-padding {
        padding: 0 !important;
    }
    .grid {
        display: grid;
        grid-gap: 0.5rem;
        padding: 0.5rem;
        align-items: center;
    }

    .inner-grid {
        display: grid;
        grid-gap: 0.5rem;
        padding: 0 !important;
        align-items: center;
    }

    .fit {
        grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr));
    }

    .fit2 {
        grid-template-columns: repeat(auto-fit, minmax(2rem, 1fr));
    }
    .fit3 {
        grid-template-columns: repeat(auto-fit, minmax(3rem, 1fr));
    }
    .fit4 {
        grid-template-columns: repeat(auto-fit, minmax(4rem, 1fr));
    }
    .fit6 {
        grid-template-columns: repeat(auto-fit, minmax(6rem, 1fr));
    }

    .fit10 {
        grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
    }

    .fit18 {
        grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));
    }
    .fill {
        grid-template-columns: repeat(auto-fill, minmax(12rem, 1fr));
    }
    .column {
        grid-auto-flow: column;
    }
    .row {
        grid-auto-flow: row;
    }
    .start {
        place-content: start;
    }
    .end {
        place-content: end;
    }
    .center {
        place-content: center;
    }
    .itemsCenter {
        justify-items: center;
    }

    .itemsRight {
        justify-items: right;
    }
    .itemsLeft {
        justify-items: left;
    }
    .stretch {
        justify-content: stretch;
        align-content: stretch;
    }
    .justify-self-end {
        justify-self: end;
    }
    .justify-self-start {
        justify-self: start;
    }
    .justify-self-center {
        justify-self: center;
    }
    .align-self-end {
        align-self: end;
    }
    .align-self-start {
        align-self: start;
    }
    .align-start {
        align-items: start;
    }
    .align-end {
        align-items: end;
    }

    .align-self-stretch {
        align-self: stretch;
    }

    .justify-self-stretch {
        justify-self: stretch;
    }
`,Kn=Yo`
    .spinner[fixed] {
        position: fixed;
    }
    .spinner {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        z-index: 100000;
        width: 3rem;
        height: 3rem;
    }

    .spinner[hidden] {
        display: none;
    }

    .spinner[anillo] {
        border: 3px solid var(--primario);
        border-top-color: var(--secundario);
        border-radius: 50%;
        -webkit-animation: rotation 0.8s ease infinite;
        animation: rotation 0.8s ease infinite;
    }
    .spinner[aro] {
        border: 3px solid transparent;
        border-top-color: var(--primario);
        border-bottom-color: var(--secundario);
        border-radius: 50%;
        -webkit-animation: rotation 0.8s ease infinite;
        animation: rotation 0.8s ease infinite;
    }
    .spinner[cometa] {
        border-top: 3px solid var(--primario);
        border-right: 3px solid transparent;
        border-radius: 50%;
        -webkit-animation: rotation 0.8s linear infinite;
        animation: rotation 0.8s linear infinite;
    }
    .spinner[bloque] {
        background: var(--primario);
        -webkit-animation: flip 1.2s ease infinite;
        animation: flip 1.2s ease infinite;
    }
    .spinner[progress] {
        overflow: hidden;
        height: 0.5rem;
        background: var(--primario);
    }
    .spinner[progress]::before {
        content: "";
        position: absolute;
        left: -130%;
        width: 100%;
        height: 100%;
        background: var(--secundario);
        -webkit-animation: progress 4s linear infinite;
        animation: progress 4s linear infinite;
    }
    .spinner[radar] {
        background: var(--primario);
        border-radius: 50%;
        -webkit-animation: pulse 1s ease-in-out infinite;
        animation: pulse 1s ease-in-out infinite;
        -webkit-transform: translate(-50%, -50%) scale(0);
        transform: translate(-50%, -50%) scale(0);
    }

    .spinner[sonar]::before,
    .spinner[sonar]::after {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        -webkit-transform: translate(-50%, -50%) scale(0);
        transform: translate(-50%, -50%) scale(0);
    }
    .spinner[sonar]::before {
        background: var(--primario);
        -webkit-animation: pulse2 2s ease-in-out infinite;
        animation: pulse2 2s ease-in-out infinite;
    }
    .spinner[sonar]::after {
        background: var(--primario);
        -webkit-animation: pulse2 2s 1s ease-in-out infinite;
        animation: pulse2 2s 1s ease-in-out infinite;
    }
    .spinner[dado] {
        -webkit-perspective: 200px;
        perspective: 200px;
    }
    .spinner[dado]::before {
        display: block;
        content: "";
        width: 50%;
        height: 50%;
        background: var(--primario);
        -webkit-animation: 2s flipWalker ease infinite;
        animation: 2s flipWalker ease infinite;
    }

    @-webkit-keyframes rotation {
        from {
            -webkit-transform: rotate(0deg);
            transform: translate(-50%, -50%) rotate(0deg);
        }
        to {
            -webkit-transform: rotate(360deg);
            transform: translate(-50%, -50%) rotate(360deg);
        }
    }

    @keyframes rotation {
        from {
            -webkit-transform: translate(-50%, -50%) rotate(0deg);
            transform: translate(-50%, -50%) rotate(0deg);
        }
        to {
            -webkit-transform: translate(-50%, -50%) rotate(360deg);
            transform: translate(-50%, -50%) rotate(360deg);
        }
    }
    @-webkit-keyframes flip {
        0% {
            -webkit-transform: translate(-50%, -50%) perspective(120px) rotateX(0deg) rotateY(0deg);
            transform: translate(-50%, -50%) perspective(120px) rotateX(0deg) rotateY(0deg);
        }
        50% {
            -webkit-transform: translate(-50%, -50%) perspective(120px) rotateX(-180deg) rotateY(0deg);
            transform: translate(-50%, -50%) perspective(120px) rotateX(-180deg) rotateY(0deg);
        }
        100% {
            -webkit-transform: translate(-50%, -50%) perspective(120px) rotateX(-180deg) rotateY(-180deg);
            transform: translate(-50%, -50%) perspective(120px) rotateX(-180deg) rotateY(-180deg);
        }
    }
    @keyframes flip {
        0% {
            -webkit-transform: translate(-50%, -50%) perspective(120px) rotateX(0deg) rotateY(0deg);
            transform: translate(-50%, -50%) perspective(120px) rotateX(0deg) rotateY(0deg);
        }
        50% {
            -webkit-transform: translate(-50%, -50%) perspective(120px) rotateX(-180deg) rotateY(0deg);
            transform: translate(-50%, -50%) perspective(120px) rotateX(-180deg) rotateY(0deg);
        }
        100% {
            -webkit-transform: translate(-50%, -50%) perspective(120px) rotateX(-180deg) rotateY(-180deg);
            transform: translate(-50%, -50%) perspective(120px) rotateX(-180deg) rotateY(-180deg);
        }
    }
    @-webkit-keyframes progress {
        0% {
            left: -130%;
            background: rgba(0, 0, 0, 0.5);
        }
        50% {
            left: 130%;
            background: rgba(0, 0, 0, 0.5);
        }
        51% {
            background: rgba(255, 255, 255, 0.5);
        }
        100% {
            background: rgba(255, 255, 255, 0.5);
        }
    }
    @keyframes progress {
        0% {
            left: -130%;
            background: rgba(0, 0, 0, 0.5);
        }
        50% {
            left: 130%;
            background: rgba(0, 0, 0, 0.5);
        }
        51% {
            background: rgba(255, 255, 255, 0.5);
        }
        100% {
            background: rgba(255, 255, 255, 0.5);
        }
    }
    @-webkit-keyframes pulse {
        0% {
            -webkit-transform: translate(-50%, -50%) scale(0);
            transform: translate(-50%, -50%) scale(0);
            opacity: 1;
        }
        100% {
            -webkit-transform: translate(-50%, -50%) scale(1);
            transform: translate(-50%, -50%) scale(1);
            opacity: 0;
        }
    }
    @keyframes pulse {
        0% {
            -webkit-transform: translate(-50%, -50%) scale(0);
            transform: translate(-50%, -50%) scale(0);
            opacity: 1;
        }
        100% {
            -webkit-transform: translate(-50%, -50%) scale(1);
            transform: translate(-50%, -50%) scale(1);
            opacity: 0;
        }
    }
    @-webkit-keyframes pulse2 {
        0%,
        100% {
            -webkit-transform: translate(-50%, -50%) scale(0);
            transform: translate(-50%, -50%) scale(0);
            opacity: 1;
        }
        50% {
            -webkit-transform: translate(-50%, -50%) scale(1);
            transform: translate(-50%, -50%) scale(1);
            opacity: 0;
        }
    }
    @keyframes pulse2 {
        0%,
        100% {
            -webkit-transform: translate(-50%, -50%) scale(0);
            transform: translate(-50%, -50%) scale(0);
            opacity: 1;
        }
        50% {
            -webkit-transform: translate(-50%, -50%) scale(1);
            transform: translate(-50%, -50%) scale(1);
            opacity: 0;
        }
    }
    @-webkit-keyframes flipWalker {
        0% {
            -webkit-transform: translate(0, 0) rotateX(0) rotateY(0);
            transform: translate(0, 0) rotateX(0) rotateY(0);
        }
        25% {
            -webkit-transform: translate(100%, 0) rotateX(0) rotateY(180deg);
            transform: translate(100%, 0) rotateX(0) rotateY(180deg);
        }
        50% {
            -webkit-transform: translate(100%, 100%) rotateX(-180deg) rotateY(180deg);
            transform: translate(100%, 100%) rotateX(-180deg) rotateY(180deg);
        }
        75% {
            -webkit-transform: translate(0, 100%) rotateX(-180deg) rotateY(360deg);
            transform: translate(0, 100%) rotateX(-180deg) rotateY(360deg);
        }
        100% {
            -webkit-transform: translate(0, 0) rotateX(0) rotateY(360deg);
            transform: translate(0, 0) rotateX(0) rotateY(360deg);
        }
    }
    @keyframes flipWalker {
        0% {
            -webkit-transform: translate(0, 0) rotateX(0) rotateY(0);
            transform: translate(0, 0) rotateX(0) rotateY(0);
        }
        25% {
            -webkit-transform: translate(100%, 0) rotateX(0) rotateY(180deg);
            transform: translate(100%, 0) rotateX(0) rotateY(180deg);
        }
        50% {
            -webkit-transform: translate(100%, 100%) rotateX(-180deg) rotateY(180deg);
            transform: translate(100%, 100%) rotateX(-180deg) rotateY(180deg);
        }
        75% {
            -webkit-transform: translate(0, 100%) rotateX(-180deg) rotateY(360deg);
            transform: translate(0, 100%) rotateX(-180deg) rotateY(360deg);
        }
        100% {
            -webkit-transform: translate(0, 0) rotateX(0) rotateY(360deg);
            transform: translate(0, 0) rotateX(0) rotateY(360deg);
        }
    }

    @keyframes glow {
        0% {
            box-shadow: none;
        }
        50% {
            box-shadow: 10px -10px 30px cyan, -10px 10px 30px cyan;
        }
        100% {
            box-shadow: none;
        }
    }
`,ea="api.loading";class ta extends(Zn(Bo,ea)(Vn)){constructor(){super(),this.hidden=!0}static get styles(){return Yo`
            ${Kn}
            :host[hidden] {
                display: none;
            }
        `}render(){return En`<div
            class="spinner"
            ?anillo=${this.anillo}
            ?aro=${this.aro}
            ?cometa=${this.cometa}
            ?bloque=${this.bloque}
            ?progress=${this.progress}
            ?sonar=${this.sonar}
            ?radar=${this.radar}
            ?dado=${this.dado}
        ></div>`}stateChanged(e,t){t==ea&&(this.hidden=0==e.api.loading)}static get properties(){return{hidden:{type:Boolean,reflect:!0},anillo:{type:Boolean,reflect:!0},aro:{type:Boolean,reflect:!0},cometa:{type:Boolean,reflect:!0},bloque:{type:Boolean,reflect:!0},progress:{type:Boolean,reflect:!0},sonar:{type:Boolean,reflect:!0},radar:{type:Boolean,reflect:!0},dado:{type:Boolean,reflect:!0}}}}window.customElements.define("spinner-control",ta);const ra="ui.warning.timeStamp";class ia extends(Wn(Bo,ra,"ui.media.timeStamp","screen.timeStamp")(Vn)){constructor(){super(),this.hidden=!0}static get styles(){return Yo`
			:host {
				position: fixed;
				display: grid;
				top: 0rem;
				left: 0rem;
				bottom: 0rem;
				right: 0rem;
				height: 100vh;
				width: 100vw;
				z-index: 100000;
			}
			:host([hidden]) {
				display: none;
			}
			#fondo {
				position: absolute;
				display: grid;
				top: 0rem;
				left: 0rem;
				bottom: 0rem;
				right: 0rem;
				height: 100%;
				width: 100%;
				background-color: var(--negro) !important;
				opacity: 0.3;
				backdrop-filter: blur(2px);
			}
			#datos {
				position: relative;
				display: grid;
				max-width: fit-content;
				min-width: 14rem;
				justify-self: center;
				max-height: fit-content;
				min-height: 8rem;
				align-self: center;
				border-radius: 1rem;
				box-shadow: var(--shadow-elevation-3-box);
				grid-template-rows: 20% 20% 60%;
				grid-gap: 0.5rem;
				align-items: center;
			}
			.fondoInformacion {
				background-color: var(--formulario) !important;
				color: var(--on-formulario);
			}
			.fondoError {
				background-color: var(--error) !important;
				color: var(--formulario);
			}
			.fondoOk {
				background-color: var(--ok) !important;
				color: var(--negro);
			}
			.fondoAmarillo {
				background-color: var(--secundario) !important;
				color: var(--on-secundario);
			}
			#x {
				position: relative;
				align-self: flex-start;
				justify-self: flex-end;
				padding: 0.6rem 1rem 0 0;
				cursor: pointer;
			}
			#titulo {
				position: relative;
				text-align: center;
				font-size: var(--font-header-h1-menos-size);
				font-weight: var(--font-header-h1-menos-weight);
			}
			#cuerpo {
				position: relative;
				text-align: center;
				width: 80%;
				justify-self: center;
				align-self: flex-start;
				font-size: var(--font-header-h2-size);
				font-weight: var(--font-header-h2-weight);
			}
		`}render(){return En`
			<div id="fondo" @click=${this.clickBoton1}></div>
			<div id="datos">
				<div id="x" @click=${this.clickBoton1}>X</div>
				<label id="titulo"> </label>
				<label id="cuerpo"> </label>
			</div>
		`}stateChanged(e,t){if(t==ra){if(this.hidden=e.ui.warning.hidden,!this.hidden){var r=this.shadowRoot.querySelector("#datos"),i=this.shadowRoot.querySelector("#titulo"),o=this.shadowRoot.querySelector("#cuerpo");i&&(i.innerHTML=e.ui.warning.titulo),o&&(o.innerHTML=e.ui.warning.subTitulo),r.className="",r.classList.add(e.ui.warning.backgroundColor),e.ui.warning.timeOut>0&&setTimeout((()=>{this.clickBoton1()}),e.ui.warning.timeOut)}this.update()}}clickBoton1(){Bo.dispatch({type:v})}firstUpdated(){}static get properties(){return{mediaSize:{type:String,reflect:!0,attribute:"media-size"},hidden:{type:Boolean,reflect:!0}}}}window.customElements.define("pantalla-warning",ia);const oa=Yo`
    dialog::backdrop {
        backdrop-filter: blur(30px);
    }
    dialog:not([open]) {
        display: none;
    }
    dialog[open] {
        display: grid;
        grid-template-areas:
            "header"
            "body"
            "footer";
        grid-template-rows: auto 1fr auto;
        background-color: var(--formulario);
        color: var(--on-formulario);
        grid-gap: 0.5rem;
        border-radius: var(--control-radius);
        box-shadow: var(--shadow-elevation-12-box);
        z-index: var(--nivel-maximo);
        border: none;
    }

    dialog .header {
        display: grid;
        grid-area: header;
        font-size: var(--font-header-h1-size);
        font-weight: var(--font-header-h1-weight);
        padding: 1rem;
    }
    dialog .body {
        display: grid;
        grid-area: body;
        color: var(--on-formulario-bajada);
        font-size: var(--font-bajada--size);
        font-weight: var(--font-bajada--weight);
        padding: 0 1rem 1rem 1rem;
    }
    p {
        margin: 0;
    }
    dialog .footer {
        display: grid;
        grid-area: footer;
    }
`,na=Yo`
    button {
    }

    button[flat] {
        position: relative;
        cursor: pointer;
        color: var(--primario);
        fill: var(--primario);
        stroke: var(--primario);
        background-color: transparent;
        font-size: var(--font-bajada-size);
        font-weight: var(--font-bajada-weight);
        border-radius: var(--control-radius);
        border: 1px solid var(--primario);
        padding: 0.5rem 1rem;
        text-decoration: none;
        outline: none;
    }
    button[flat][round],
    button[raised][round] {
        border-radius: 1rem;
    }
    button[flat][circle],
    button[raised][circle] {
        display: grid;
        place-content: center;
        border-radius: 50%;
        width: 0;
        height: 0;
        padding: 1.5rem;
    }
    button[circle][big] {
        padding: 2rem;
    }
    button[circle][big] {
        padding: 2rem;
    }
    button[flat][action] {
        color: var(--secundario);
        fill: var(--secundario);
        stroke: var(--secundario);
        border: 1px solid var(--secundario);
    }
    button:not([disabled])[flat]:hover {
        background-color: var(--primario);
        color: var(--on-primario);
        fill: var(--on-primario);
        stroke: var(--on-primario);
    }

    button:not([disabled])[flat][action]:hover {
        background-color: var(--secundario);
        color: var(--on-secundario);
        fill: var(--on-secundario);
        stroke: var(--on-secundario);
    }
    button[flat]:active {
        background-color: var(--primario);
    }

    button[flat][disabled] {
        color: var(--on-formulario-disabled);
        fill: var(--on-formulario-disabled);
        stroke: var(--on-formulario-disabled);
        background-color: transparent;
        cursor: not-allowed;
        pointer-events: none;
        border: 0px;
    }

    button[link] {
        cursor: pointer;
        color: var(--primario);
        fill: var(--primario);
        stroke: var(--primario);
        background-color: transparent;
        font-size: var(--font-bajada-size);
        font-weight: var(--font-bajada-weight);
        padding: 0.5rem 1rem;
        text-decoration: none;
        outline: none;
        border: none;
    }

    button:not([disabled])[link]:hover {
        text-decoration: underline;
    }

    button[link][action] {
        color: var(--secundario);
        fill: var(--secundario);
        stroke: var(--secundario);
    }

    button[link][disabled] {
        color: var(--on-formulario-disabled);
        fill: var(--on-formulario-disabled);
        stroke: var(--on-formulario-disabled);
        cursor: not-;
        pointer-events: none;
        text-decoration: underline;
    }

    button[raised] {
        cursor: pointer;
        color: var(--on-primario);
        fill: var(--on-primario);
        stroke: var(--on-primario);
        background-color: var(--primario);
        font-size: var(--font-bajada-size);
        font-weight: var(--font-bajada-weight);
        border-radius: var(--control-radius);
        padding: 0.5rem 1rem;
        transition-duration: 0.2s;
        text-decoration: none;
        border: none;
        outline: none;
        box-shadow: var(--shadow-elevation-2-box);
    }

    button:not([disabled])[raised]:hover {
        background-color: var(--primario10);
        box-shadow: var(--shadow-elevation-6-box);
    }
    button:not([disabled])[raised][action]:hover {
        background-color: var(--secundario10);
    }

    button[raised][action] {
        background-color: var(--secundario);
        color: var(--on-secundario);
        fill: var(--on-secundario);
        stroke: var(--on-secundario);
    }
    button[raised][disabled] {
        color: var(--on-formulario-disabled);
        fill: var(--on-formulario-disabled);
        stroke: var(--on-formulario-disabled);
        background-color: var(--light-separator);
        cursor: not-allowed;
        pointer-events: none;
        box-shadow: none;
    }
    button[raised]:focus {
        box-shadow: var(--shadow-elevation-6-box);
        transform: scale(1.02);
        background-color: var(--primario10);
    }
    button[raised][action]:focus {
        background-color: var(--secundario10);
    }
    button[flat]:focus {
        background-color: var(--primario);
        color: var(--on-primario);
        fill: var(--on-primario);
        stroke: var(--on-primario);
    }
    button[flat][action]:focus {
        background-color: var(--secundario);
        color: var(--on-secundario);
        fill: var(--on-secundario);
        stroke: var(--on-secundario);
    }
    button[link]:focus {
        text-decoration: underline;
    }
    button[link][action]:focus {
        text-decoration: underline;
    }
`,aa="ui.alert.timeStamp";class sa extends(Zn(Bo,aa)(Vn)){constructor(){super(),this.hidden=!0}static get styles(){return Yo`
            ${na}
            ${oa}
            :host[hidden] {
                display: none;
            }
        `}render(){return En`<dialog>
            <div class="header">${this.titulo}</div>
            <div class="body">${this.mensaje}</div>
            <div class="footer">
                <button link @click="${this.cerrar}">
                    <div>OK</div>
                </button>
            </div>
        </dialog>`}stateChanged(e,t){t==aa&&(this.titulo=e.ui.alert.titulo,this.mensaje=e.ui.alert.mensaje,this.renderRoot.querySelector("dialog").showModal(),this.hidden=!1)}cerrar(){this.renderRoot.querySelector("dialog").close(),this.hidden=!0}static get properties(){return{hidden:{type:Boolean,reflect:!0},titulo:{type:String,reflect:!0},mensaje:{type:String,reflect:!0}}}}window.customElements.define("alert-control",sa);const la="ui.confirm.timeStamp";class da extends(Zn(Bo,la)(Vn)){constructor(){super(),this.hidden=!0}static get styles(){return Yo`
            ${na}
            ${oa}
            ${Jn}
            :host[hidden] {
                display: none;
            }
        `}render(){return En`<dialog>
            <div class="header">${this.titulo}</div>
            <div class="body">${this.mensaje}</div>
            <div class="footer column">
                <button link @click="${this.cancel}">
                    <div>NO</div>
                </button>
                <button link @click="${this.ok}">
                    <div>SI</div>
                </button>
            </div>
        </dialog>`}stateChanged(e,t){t==la&&(this.titulo=e.ui.confirm.titulo,this.mensaje=e.ui.confirm.mensaje,this.onOk=e.ui.confirm.onOk,this.onCancel=e.ui.confirm.onCancel,this.renderRoot.querySelector("dialog").showModal(),this.hidden=!1)}cerrar(){this.renderRoot.querySelector("dialog").close(),this.hidden=!0}ok(e){this.onOk&&Bo.dispatch(this.onOk),this.cerrar()}cancel(e){this.onCancel&&Bo.dispatch(this.onCancel),this.cerrar()}static get properties(){return{hidden:{type:Boolean,reflect:!0},titulo:{type:String,reflect:!0},mensaje:{type:String,reflect:!0},onOk:{type:Object},onCancel:{type:Object}}}}window.customElements.define("confirm-control",da);const ca=Yo`
	.logo {
		background-image: var(--logo);
		height: 4vh;
		width: 4vh;
		background-repeat: none;
		background-position: center;
		background-size: cover;
	}
`,ua=Yo`
	.select {
		display: grid;
		grid-template-areas:
			"for"
			"select"
			"subtext";
		grid-template-rows: 1fr auto 1fr;
		grid-gap: 0.1rem;
		font-family: inherit;
	}
	.select[disabled] select {
		color: var(--on-formulario-disabled);
		border-color: var(--on-formulario-disabled);
		cursor: not-allowed;
	}
	.select[disabled] label {
		color: var(--on-formulario-disabled);
		cursor: not-allowed;
	}
	.select select::-ms-expand {
		display: none;
	}
	.select select {
		grid-area: select;
		box-sizing: border-box;
		width: 100%;
		padding: 0.5rem;
		color: var(--on-formulario);
		cursor: pointer;
		font-size: var(--font-bajada-size);
		font-weight: var(--font-bajada-weight);
		border-radius: var(--control-radius);
		outline: 0;
		box-shadow: none;
		border: 1px solid var(--on-formulario);
		background-image: none;
		background-color: transparent;
		appearance: initial;
	}
	.select:not([disabled]) select {
		background-image: url("data:image/svg+xml;utf8,<svg id='fondo' fill='black' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>");
		background-size: contain;
		background-repeat: no-repeat;
		background-position-x: 100%;
		background-position-y: 50%;
		padding-right: 10%;
	}
	.select select:focus {
		border-color: var(--primario);
		background-color: var(--aplicacion);
	}

	.select:not([error]):focus-within label[for] {
		color: var(--primario);
	}
	.select option {
		color: var(--on-formulario);
		font-size: var(--font-bajada-size);
		font-weight: var(--font-bajada-weight);
		background-color: var(--formulario);
		font-family: inherit;
	}
	.select select:required:invalid {
		color: var(--on-formulario-disabled);
	}
	.select option[value=""][disabled] {
		display: none;
	}
	.select label {
		font-size: var(--font-label-size);
		font-weight: var(--font-label-weight);
		color: var(--on-formulario);
	}
	.select label[subtext],
	.select label[error] {
		font-size: 0.65rem;
		grid-area: subtext;
	}
	.select[error] label {
		color: var(--error);
	}
	.select[error] select {
		border-color: var(--error);
	}
	.select:not([error]) label[error] {
		display: none;
	}
	.select[error] label[subtext] {
		display: none;
	}
`,pa=kn`<svg xmlns="http://www.w3.org/2000/svg" height="2rem" viewBox="0 0 24 24" width="2rem"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>`,ha=kn`<svg xmlns="http://www.w3.org/2000/svg" height="2rem" viewBox="0 0 24 24" width="2rem"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>`,ma=kn`<svg xmlns="http://www.w3.org/2000/svg" height="2rem" viewBox="0 0 24 24" width="2rem"><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/></svg>`,fa=(kn`<svg xmlns="http://www.w3.org/2000/svg" height="2rem" viewBox="0 0 24 24" width="2rem"><path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"/></svg>`,kn`<svg xmlns="http://www.w3.org/2000/svg" height="2rem" viewBox="0 0 24 24" width="2rem"><path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"/></svg>`,kn`<svg xmlns="http://www.w3.org/2000/svg" height="2rem" viewBox="0 0 24 24" width="2rem"><path d="M21 11H6.83l3.58-3.59L9 6l-6 6 6 6 1.41-1.41L6.83 13H21z"/></svg>`,kn`<svg xmlns="http://www.w3.org/2000/svg" height="2rem" viewBox="0 0 24 24" width="2rem"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>`),ga=(kn`<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z"/></svg>`,kn`<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M720-400v-120H600v-80h120v-120h80v120h120v80H800v120h-80Zm-360-80q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM40-160v-112q0-34 17.5-62.5T104-378q62-31 126-46.5T360-440q66 0 130 15.5T616-378q29 15 46.5 43.5T680-272v112H40Zm80-80h480v-32q0-11-5.5-20T580-306q-54-27-109-40.5T360-360q-56 0-111 13.5T140-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T440-640q0-33-23.5-56.5T360-720q-33 0-56.5 23.5T280-640q0 33 23.5 56.5T360-560Zm0-80Zm0 400Z"/></svg>`,kn`<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M640-400q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35ZM400-160v-76q0-21 10-40t28-30q45-27 95.5-40.5T640-360q56 0 106.5 13.5T842-306q18 11 28 30t10 40v76H400Zm86-80h308q-35-20-74-30t-80-10q-41 0-80 10t-74 30Zm154-240q17 0 28.5-11.5T680-520q0-17-11.5-28.5T640-560q-17 0-28.5 11.5T600-520q0 17 11.5 28.5T640-480Zm0-40Zm0 280ZM120-400v-80h320v80H120Zm0-320v-80h480v80H120Zm324 160H120v-80h360q-14 17-22.5 37T444-560Z"/></svg>`,kn`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" width="699.428px" height="699.428px" viewBox="0 0 699.428 699.428" style="enable-background:new 0 0 699.428 699.428;" xml:space="preserve"><g><g id="_x33__21_"><g><path d="M502.714,0c-2.71,0-262.286,0-262.286,0C194.178,0,153,42.425,153,87.429l-25.267,0.59     c-46.228,0-84.019,41.834-84.019,86.838V612c0,45.004,41.179,87.428,87.429,87.428H459c46.249,0,87.428-42.424,87.428-87.428     h21.857c46.25,0,87.429-42.424,87.429-87.428v-349.19L502.714,0z M459,655.715H131.143c-22.95,0-43.714-21.441-43.714-43.715     V174.857c0-22.272,18.688-42.993,41.638-42.993L153,131.143v393.429C153,569.576,194.178,612,240.428,612h262.286     C502.714,634.273,481.949,655.715,459,655.715z M612,524.572c0,22.271-20.765,43.713-43.715,43.713H240.428     c-22.95,0-43.714-21.441-43.714-43.713V87.429c0-22.272,20.764-43.714,43.714-43.714H459c-0.351,50.337,0,87.975,0,87.975     c0,45.419,40.872,86.882,87.428,86.882c0,0,23.213,0,65.572,0V524.572z M546.428,174.857c-23.277,0-43.714-42.293-43.714-64.981     c0,0,0-22.994,0-65.484v-0.044L612,174.857H546.428z M502.714,306.394H306c-12.065,0-21.857,9.77-21.857,21.835     c0,12.065,9.792,21.835,21.857,21.835h196.714c12.065,0,21.857-9.771,21.857-21.835     C524.571,316.164,514.779,306.394,502.714,306.394z M502.714,415.57H306c-12.065,0-21.857,9.77-21.857,21.834     c0,12.066,9.792,21.836,21.857,21.836h196.714c12.065,0,21.857-9.77,21.857-21.836C524.571,425.34,514.779,415.57,502.714,415.57z"/></g></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>`,kn`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"/></svg>`,kn`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z"/></svg>`,kn`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M10 9V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z"/></svg>`,kn`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12l1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z"/></svg>`,kn`<svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/></svg>`,kn`<svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24"><path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9H9V9h10v2zm-4 4H9v-2h6v2zm4-8H9V5h10v2z"/></svg>`,kn`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="24" height="24" viewBox="0 0 24 24"><path d="M11,15H13V17H11V15M11,7H13V13H11V7M12,2C6.47,2 2,6.5 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2M12,20C7.58,20 4,16.42 4,12C4,7.58 7.58,4 12,4C16.42,4 20,7.58 20,12C20,16.42 16.42,20 12,20Z" /></svg>`),va=kn`<svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 0 24 24" width="48px" fill="#FFFFFF"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/></svg>`,ba=(kn`<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><g><rect fill="none" height="24" width="24"/></g><g><g><path d="M15.5,14h-0.79l-0.28-0.27C15.41,12.59,16,11.11,16,9.5C16,5.91,13.09,3,9.5,3C6.08,3,3.28,5.64,3.03,9h2.02 C5.3,6.75,7.18,5,9.5,5C11.99,5,14,7.01,14,9.5S11.99,14,9.5,14c-0.17,0-0.33-0.03-0.5-0.05v2.02C9.17,15.99,9.33,16,9.5,16 c1.61,0,3.09-0.59,4.23-1.57L14,14.71v0.79l5,4.99L20.49,19L15.5,14z"/><polygon points="6.47,10.82 4,13.29 1.53,10.82 0.82,11.53 3.29,14 0.82,16.47 1.53,17.18 4,14.71 6.47,17.18 7.18,16.47 4.71,14 7.18,11.53"/></g></g></svg>`,kn`<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><rect fill="none" height="24" width="24"/><path d="M15,5l-1.41,1.41L18.17,11H2V13h16.17l-4.59,4.59L15,19l7-7L15,5z"/></svg>`),ya=kn`<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><rect fill="none" height="24" width="24"/><path d="M9,19l1.41-1.41L5.83,13H22V11H5.83l4.59-4.59L9,5l-7,7L9,19z"/></svg>`,wa=kn`<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M11.67 3.87L9.9 2.1 0 12l9.9 9.9 1.77-1.77L3.54 12z"/></svg>`,Sa=kn`<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg>`,Aa=kn`<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/></svg>`,_a=kn`<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5l-1-1h-5l-1 1H5v2h14V4z"/></svg>`,xa=kn`<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 6c3.79 0 7.17 2.13 8.82 5.5C19.17 14.87 15.79 17 12 17s-7.17-2.13-8.82-5.5C4.83 8.13 8.21 6 12 6m0-2C7 4 2.73 7.11 1 11.5 2.73 15.89 7 19 12 19s9.27-3.11 11-7.5C21.27 7.11 17 4 12 4zm0 5c1.38 0 2.5 1.12 2.5 2.5S13.38 14 12 14s-2.5-1.12-2.5-2.5S10.62 9 12 9m0-2c-2.48 0-4.5 2.02-4.5 4.5S9.52 16 12 16s4.5-2.02 4.5-4.5S14.48 7 12 7z"/></svg>`,Ta=(kn`<svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M12 22q-2.05 0-3.875-.788-1.825-.787-3.187-2.15-1.363-1.362-2.15-3.187Q2 14.05 2 12q0-2.075.788-3.887.787-1.813 2.15-3.175Q6.3 3.575 8.125 2.787 9.95 2 12 2q2.075 0 3.887.787 1.813.788 3.175 2.151 1.363 1.362 2.15 3.175Q22 9.925 22 12q0 2.05-.788 3.875-.787 1.825-2.15 3.187-1.362 1.363-3.175 2.15Q14.075 22 12 22Zm0-2.05q.65-.9 1.125-1.875T13.9 16h-3.8q.3 1.1.775 2.075.475.975 1.125 1.875Zm-2.6-.4q-.45-.825-.787-1.713Q8.275 16.95 8.05 16H5.1q.725 1.25 1.812 2.175Q8 19.1 9.4 19.55Zm5.2 0q1.4-.45 2.487-1.375Q18.175 17.25 18.9 16h-2.95q-.225.95-.562 1.837-.338.888-.788 1.713ZM4.25 14h3.4q-.075-.5-.113-.988Q7.5 12.525 7.5 12t.037-1.012q.038-.488.113-.988h-3.4q-.125.5-.188.988Q4 11.475 4 12t.062 1.012q.063.488.188.988Zm5.4 0h4.7q.075-.5.113-.988.037-.487.037-1.012t-.037-1.012q-.038-.488-.113-.988h-4.7q-.075.5-.112.988Q9.5 11.475 9.5 12t.038 1.012q.037.488.112.988Zm6.7 0h3.4q.125-.5.188-.988Q20 12.525 20 12t-.062-1.012q-.063-.488-.188-.988h-3.4q.075.5.112.988.038.487.038 1.012t-.038 1.012q-.037.488-.112.988Zm-.4-6h2.95q-.725-1.25-1.813-2.175Q16 4.9 14.6 4.45q.45.825.788 1.712.337.888.562 1.838ZM10.1 8h3.8q-.3-1.1-.775-2.075Q12.65 4.95 12 4.05q-.65.9-1.125 1.875T10.1 8Zm-5 0h2.95q.225-.95.563-1.838.337-.887.787-1.712Q8 4.9 6.912 5.825 5.825 6.75 5.1 8Z"/></svg>`,kn`<svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M10.6 16q0-2.025.363-2.913.362-.887 1.537-1.937 1.025-.9 1.562-1.563.538-.662.538-1.512 0-1.025-.687-1.7Q13.225 5.7 12 5.7q-1.275 0-1.938.775-.662.775-.937 1.575L6.55 6.95q.525-1.6 1.925-2.775Q9.875 3 12 3q2.625 0 4.038 1.463 1.412 1.462 1.412 3.512 0 1.25-.537 2.138-.538.887-1.688 2.012Q14 13.3 13.738 13.912q-.263.613-.263 2.088Zm1.4 6q-.825 0-1.412-.587Q10 20.825 10 20q0-.825.588-1.413Q11.175 18 12 18t1.413.587Q14 19.175 14 20q0 .825-.587 1.413Q12.825 22 12 22Z"/></svg>`,kn`<svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M6.5 16q1.175 0 2.288.262 1.112.263 2.212.788V7.2q-1.025-.6-2.175-.9Q7.675 6 6.5 6q-.9 0-1.787.175Q3.825 6.35 3 6.7v9.9q.875-.3 1.738-.45Q5.6 16 6.5 16Zm6.5 1.05q1.1-.525 2.213-.788Q16.325 16 17.5 16q.9 0 1.763.15.862.15 1.737.45V6.7q-.825-.35-1.712-.525Q18.4 6 17.5 6q-1.175 0-2.325.3-1.15.3-2.175.9ZM12 20q-1.2-.95-2.6-1.475Q8 18 6.5 18q-1.05 0-2.062.275-1.013.275-1.938.775-.525.275-1.012-.025Q1 18.725 1 18.15V6.1q0-.275.138-.525.137-.25.412-.375 1.15-.6 2.4-.9Q5.2 4 6.5 4q1.45 0 2.838.375Q10.725 4.75 12 5.5q1.275-.75 2.663-1.125Q16.05 4 17.5 4q1.3 0 2.55.3 1.25.3 2.4.9.275.125.413.375.137.25.137.525v12.05q0 .575-.487.875-.488.3-1.013.025-.925-.5-1.938-.775Q18.55 18 17.5 18q-1.5 0-2.9.525T12 20Zm-5-8.35Z"/></svg>`,kn`<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg>`,kn`<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg>`,kn`<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"/></svg>`,kn`<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"/></svg>`,kn`<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 96 960 960" width="24px"><path d="M480 896q-33 0-56.5-23.5T400 816q0-33 23.5-56.5T480 736q33 0 56.5 23.5T560 816q0 33-23.5 56.5T480 896Zm0-240q-33 0-56.5-23.5T400 576q0-33 23.5-56.5T480 496q33 0 56.5 23.5T560 576q0 33-23.5 56.5T480 656Zm0-240q-33 0-56.5-23.5T400 336q0-33 23.5-56.5T480 256q33 0 56.5 23.5T560 336q0 33-23.5 56.5T480 416Z"/></svg>`),Ea=kn`<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M400-240v-80h160v80H400ZM240-440v-80h480v80H240ZM120-640v-80h720v80H120Z"/></svg>`,ka=kn`<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M791-55 55-791l57-57 736 736-57 57ZM120-640v-80h86v80h-86Zm120 200v-80h166v80H240Zm193-200-80-80h487v80H433Zm-33 400v-80h160v80H400Zm233-200-80-80h167v80h-87Z"/></svg>`,Ca=kn`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_1848_1860)"><path d="M21.75 0.75H2.25C1.42125 0.75 0.75 1.42125 0.75 2.25V21.75C0.75 22.5788 1.42125 23.25 2.25 23.25H21.75C22.5788 23.25 23.25 22.5788 23.25 21.75V2.25C23.25 1.42125 22.5788 0.75 21.75 0.75Z" fill="#716F6F"/><path d="M20.5688 0.75H2.15625C1.78413 0.752699 1.42801 0.901724 1.16487 1.16486C0.901728 1.428 0.752704 1.78412 0.750004 2.15625V20.5125C0.748129 21.2888 1.37625 21.9169 2.1525 21.9188H20.55C21.3263 21.9206 21.9544 21.2925 21.9563 20.5162V2.15625C21.9731 1.39687 21.3694 0.766875 20.61 0.75H20.5688Z" fill="#A6A6A6"/><path d="M7.44375 2.41894C7.44375 1.98769 7.14375 1.85644 5.41875 1.91269C3.97501 1.96894 3.26251 2.13769 2.83126 2.66269C2.47501 3.09394 2.40001 3.71269 2.34376 4.23769C2.30626 4.65019 1.93126 7.03144 3.00001 6.33769C3.12751 6.25332 3.23063 6.13707 3.30001 6.00019C3.52501 5.60644 3.65626 5.34394 3.91876 4.95019C4.9125 3.33769 7.44375 2.98144 7.44375 2.41894Z" fill="#D2D2D2"/></g><defs><clipPath id="clip0_1848_1860"><rect width="24" height="24" fill="white"/></clipPath></defs></svg>`,Da=kn`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_1848_1864)"><path d="M21.75 0.75H2.25C1.42125 0.75 0.75 1.42125 0.75 2.25V21.75C0.75 22.5788 1.42125 23.25 2.25 23.25H21.75C22.5788 23.25 23.25 22.5788 23.25 21.75V2.25C23.25 1.42125 22.5788 0.75 21.75 0.75Z" fill="#689F38"/><path d="M20.5688 0.75H2.15625C1.78413 0.752699 1.42801 0.901724 1.16487 1.16486C0.901728 1.428 0.752704 1.78412 0.750004 2.15625V20.5125C0.748129 21.2888 1.37625 21.9169 2.1525 21.9188H20.55C21.3263 21.9206 21.9544 21.2925 21.9563 20.5162V2.15625C21.9731 1.39687 21.3694 0.766875 20.61 0.75H20.5688Z" fill="#CCED80"/><path d="M7.44375 2.41894C7.44375 1.98769 7.14375 1.85644 5.41875 1.91269C3.975 1.96894 3.2625 2.13769 2.83125 2.66269C2.4 3.18769 2.2875 4.25644 2.26875 5.53144C2.26875 6.43144 2.26875 7.27519 2.7375 7.27519C3.375 7.27519 3.375 5.79394 3.9 4.96894C4.9125 3.33769 7.44375 2.98144 7.44375 2.41894Z" fill="#AED581"/></g><defs><clipPath id="clip0_1848_1864"><rect width="24" height="24" fill="white"/></clipPath></defs></svg>`,Ra=kn`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_1848_1872)"><path d="M21.75 0.75H2.25C1.42125 0.75 0.75 1.42125 0.75 2.25V21.75C0.75 22.5788 1.42125 23.25 2.25 23.25H21.75C22.5788 23.25 23.25 22.5788 23.25 21.75V2.25C23.25 1.42125 22.5788 0.75 21.75 0.75Z" fill="#F2A600"/><path d="M20.5688 0.75H2.15625C1.78413 0.752699 1.42801 0.901724 1.16487 1.16486C0.901728 1.428 0.752704 1.78412 0.750004 2.15625V20.5125C0.748129 21.2888 1.37625 21.9169 2.1525 21.9188H20.55C21.3263 21.9206 21.9544 21.2925 21.9563 20.5162V2.15625C21.9731 1.39687 21.3694 0.766875 20.61 0.75H20.5688Z" fill="#EBCC32"/><path d="M7.44375 2.41894C7.44375 1.98769 7.14375 1.85644 5.41875 1.91269C3.97501 1.96894 3.26251 2.13769 2.83126 2.66269C2.47501 3.09394 2.40001 3.71269 2.34376 4.23769C2.30626 4.65019 1.93126 7.03144 3.00001 6.33769C3.12751 6.25332 3.23063 6.13707 3.30001 6.00019C3.52501 5.60644 3.65626 5.34394 3.91876 4.95019C4.9125 3.33769 7.44375 2.98144 7.44375 2.41894Z" fill="#FFF170"/></g><defs><clipPath id="clip0_1848_1872"><rect width="24" height="24" fill="white"/></clipPath></defs></svg>`,Ia=kn`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_1848_1856)"><path d="M21.75 0.75H2.25C1.42125 0.75 0.75 1.42125 0.75 2.25V21.75C0.75 22.5788 1.42125 23.25 2.25 23.25H21.75C22.5788 23.25 23.25 22.5788 23.25 21.75V2.25C23.25 1.42125 22.5788 0.75 21.75 0.75Z" fill="#700101"/><path d="M20.5688 0.75H2.15625C1.78413 0.752699 1.42801 0.901724 1.16487 1.16486C0.901728 1.428 0.752704 1.78412 0.750004 2.15625V20.5125C0.748129 21.2888 1.37625 21.9169 2.1525 21.9188H20.55C21.3263 21.9206 21.9544 21.2925 21.9563 20.5162V2.15625C21.9731 1.39687 21.3694 0.766875 20.61 0.75H20.5688Z" fill="#B00020"/><path d="M7.44375 2.41894C7.44375 1.98769 7.14375 1.85644 5.41875 1.91269C3.97501 1.96894 3.26251 2.13769 2.83126 2.66269C2.47501 3.09394 2.40001 3.71269 2.34376 4.23769C2.30626 4.65019 1.93126 7.03144 3.00001 6.33769C3.12751 6.25332 3.23063 6.13707 3.30001 6.00019C3.52501 5.60644 3.65626 5.34394 3.91876 4.95019C4.9125 3.33769 7.44375 2.98144 7.44375 2.41894Z" fill="#FF8A80"/></g><defs><clipPath id="clip0_1848_1856"><rect width="24" height="24" fill="white"/></clipPath></defs></svg>`,ja=kn`<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.5688 0.75H2.15625C1.78413 0.752699 1.42801 0.901724 1.16487 1.16486C0.901728 1.428 0.752704 1.78412 0.750004 2.15625V20.5125C0.748129 21.2888 1.37625 21.9169 2.1525 21.9188H20.55C21.3263 21.9206 21.9544 21.2925 21.9563 20.5162V2.15625C21.9731 1.39687 21.3694 0.766875 20.61 0.75H20.5688Z" fill="#0084B0"/></svg>`,Oa=kn`<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M480-160q-134 0-227-93t-93-227q0-134 93-227t227-93q69 0 132 28.5T720-690v-110h80v280H520v-80h168q-32-56-87.5-88T480-720q-100 0-170 70t-70 170q0 100 70 170t170 70q77 0 139-44t87-116h84q-28 106-114 173t-196 67Z"/></svg>`,za=kn`<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M280-240q-100 0-170-70T40-480q0-100 70-170t170-70q66 0 121 33t87 87h432v240h-80v120H600v-120H488q-32 54-87 87t-121 33Zm0-80q66 0 106-40.5t48-79.5h246v120h80v-120h80v-80H434q-8-39-48-79.5T280-640q-66 0-113 47t-47 113q0 66 47 113t113 47Zm0-80q33 0 56.5-23.5T360-480q0-33-23.5-56.5T280-560q-33 0-56.5 23.5T200-480q0 33 23.5 56.5T280-400Zm0-80Z"/></svg>`,Pa=kn`<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M720-120H280v-520l280-280 50 50q7 7 11.5 19t4.5 23v14l-44 174h258q32 0 56 24t24 56v80q0 7-2 15t-4 15L794-168q-9 20-30 34t-44 14Zm-360-80h360l120-280v-80H480l54-220-174 174v406Zm0-406v406-406Zm-80-34v80H160v360h120v80H80v-520h200Z"/></svg>`,La=kn`<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M412-168q45-91 120-121.5T660-320q23 0 45 4t43 10q24-38 38-82t14-92q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 45 11.5 86t34.5 76q41-20 85-31t89-11q32 0 61.5 5.5T500-340q-23 12-43.5 28T418-278q-12-2-20.5-2H380q-32 0-63.5 7T256-252q32 32 71.5 53.5T412-168Zm68 88q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80ZM380-420q-58 0-99-41t-41-99q0-58 41-99t99-41q58 0 99 41t41 99q0 58-41 99t-99 41Zm0-80q25 0 42.5-17.5T440-560q0-25-17.5-42.5T380-620q-25 0-42.5 17.5T320-560q0 25 17.5 42.5T380-500Zm280 120q-42 0-71-29t-29-71q0-42 29-71t71-29q42 0 71 29t29 71q0 42-29 71t-71 29ZM480-480Z"/></svg>`,qa=kn`<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"/></svg>`,Ua=kn`<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M80-240v-480h80v480H80Zm560 0-57-56 144-144H240v-80h487L584-664l56-56 240 240-240 240Z"/></svg>`,Ma=kn`<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M440-440h80v-200h-80v200Zm40 120q17 0 28.5-11.5T520-360q0-17-11.5-28.5T480-400q-17 0-28.5 11.5T440-360q0 17 11.5 28.5T480-320ZM160-200v-80h80v-280q0-83 50-147.5T420-792v-28q0-25 17.5-42.5T480-880q25 0 42.5 17.5T540-820v28q80 20 130 84.5T720-560v280h80v80H160Zm320-300Zm0 420q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80ZM320-280h320v-280q0-66-47-113t-113-47q-66 0-113 47t-47 113v280Z"/></svg>`,$a=kn`<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/></svg>`,Ba=kn`<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M800-240v-480h80v480h-80Zm-320 0-57-56 144-144H80v-80h487L424-664l56-56 240 240-240 240Z"/></svg>`,Na=kn`<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M280-80 120-240l160-160 56 58-62 62h406v-160h80v240H274l62 62-56 58Zm-80-440v-240h486l-62-62 56-58 160 160-160 160-56-58 62-62H280v160h-80Z"/></svg>`,Ha=kn`<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v240h-80v-80H200v400h280v80H200ZM760 0q-73 0-127.5-45.5T564-160h62q13 44 49.5 72T760-60q58 0 99-41t41-99q0-58-41-99t-99-41q-29 0-54 10.5T662-300h58v60H560v-160h60v57q27-26 63-41.5t77-15.5q83 0 141.5 58.5T960-200q0 83-58.5 141.5T760 0ZM200-640h560v-80H200v80Zm0 0v-80 80Z"/></svg>`,Fa=kn`<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M360-300q-42 0-71-29t-29-71q0-42 29-71t71-29q42 0 71 29t29 71q0 42-29 71t-71 29ZM200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Zm0-480h560v-80H200v80Zm0 0v-80 80Z"/></svg>`;class Ga{static get properties(){return{host:{type:Object},gestureMethod:{type:Object}}}constructor(e,t){this.host=e,this.gestureMethod=t,this._x=0,this._y=0,e.addController(this)}hostConnected(){this.host.addEventListener("touchstart",this._touchstart,!1),this.host.addEventListener("touchmove",this._touchmove,!1),this.host.addEventListener("touchcancel",this._touchcancel,!1),this.host.addEventListener("touchend",this._touchend,!1),this.host.addEventListener("gestures",this.gestureMethod)}_touchstart(e){if(e.changedTouches.length>0){this._x=e.changedTouches[0].pageX,this._y=e.changedTouches[0].pageY;let t={RIGHT_TO_LEFT:!1,LEFT_TO_RIGHT:!1,DOWN:!1,UP:!1,FINGERS:e.changedTouches.length,ACTION:"start",x:e.changedTouches[0].pageX,y:e.changedTouches[0].pageY,dx:0,dy:0};const r=new CustomEvent("gestures",{detail:t});this.dispatchEvent(r)}}_touchmove(e){let t={RIGHT_TO_LEFT:!1,LEFT_TO_RIGHT:!1,DOWN:!1,UP:!1,FINGERS:e.changedTouches.length,ACTION:"move",x:e.changedTouches[0].pageX,y:e.changedTouches[0].pageY,dx:e.changedTouches[0].pageX-this._x,dy:e.changedTouches[0].pageY-this._y};const r=new CustomEvent("gestures",{detail:t});this.dispatchEvent(r)}_touchend(e){if(e.changedTouches.length>0){let t={RIGHT_TO_LEFT:this._x>e.changedTouches[0].pageX,LEFT_TO_RIGHT:this._x<e.changedTouches[0].pageX,DOWN:this._y<e.changedTouches[0].pageY,UP:this._y>e.changedTouches[0].pageY,FINGERS:e.changedTouches.length,ACTION:"end",x:e.changedTouches[0].pageX,y:e.changedTouches[0].pageY,dx:e.changedTouches[0].pageX-this._x,dy:e.changedTouches[0].pageY-this._y};const r=new CustomEvent("gestures",{detail:t});this.dispatchEvent(r)}}_touchcancel(e){}}const Va=e=>!!/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(e),Qa=e=>{if(!/^\d{1,4}\-\d{1,2}\-\d{1,2}([a-zA-Z0-9_\.\-\:])+$/.test(e))return!1;var t=e.split("-"),r=parseInt(t[2],10),i=parseInt(t[1],10),o=parseInt(t[0],10);if(o<1e3||o>3e3||0==i||i>12)return!1;var n=[31,28,31,30,31,30,31,31,30,31,30,31];return(o%400==0||o%100!=0&&o%4==0)&&(n[1]=29),r>0&&r<=n[i-1]},Ya=(e,t)=>{for(let r=0;r<e.length;r++){if(e[r].id===t)return e[r];if(e[r].condiciones){const i=Ya(e[r].condiciones,t);if(i)return i}}return null},Za=(e,t)=>{let r=[];if("0"==e)r=t;else{r=Ya(t,e).condiciones.sort(((e,t)=>t.vigenteDesde.localeCompare(e.vigenteDesde))).sort(((e,t)=>t.vencimiento.localeCompare(e.vencimiento)))}let i=[];return r.map(((t,r)=>{let o={clase:"tarea"};o.id=t.id,o.planId=t.planId,o.descripcion=t.descripcion,o.urlReferencia="",o.estado=t.estado,o.conTareas=t.condiciones.length>0,o.hijo=t.condiciones.length>0,o.esPorLapso=t.esPorLapso,"0"==e?(o.padre=t.planId,o.padreClase="plan"):(o.padre=e,o.padreClase="tarea"),o.tipo=t.tipo,o.cumplidaEl="0001-01-01T00:00:00"==t.cumplidaEl?null:t.cumplidaEl,o.creacion=t.creacion,o.creador=t.creador,o.ejecutor=t.ejecutor,o.instrucciones=t.instrucciones,o.vencimiento=t.vencimiento,o.vigenteDesde=t.vigenteDesde,o.alerta=t.alerta,i.push(o)})),i},Wa=()=>{let e=new Date,t=String(e.getDate()).padStart(2,"0"),r=String(e.getMonth()+1).padStart(2,"0");return e.getFullYear()+"-"+r+"-"+t},Xa=e=>new Date(e).toLocaleDateString("es-ES",{year:"2-digit",month:"short",day:"numeric"}),Ja=e=>{let t=new Date(e);return t.getFullYear()+"-"+("0"+(t.getMonth()+1)).slice(-2)+"-"+("0"+t.getDate()).slice(-2)},Ka=e=>{let t=!0;if(Bo.getState().autorizacion.entities?.result?.sectores[0]?.token){let i=Bo.getState().miPerfil.sector.roles,o=r(856).find((t=>t.opcion==e));i.forEach((e=>o.roles.forEach((r=>{e.nombre==r&&(t=!1)}))))}return t},es="ui.media.timeStamp",ts="screen.timeStamp",rs="autorizacion.timeStamp",is="autorizacion.errorTimeStamp",os="ui.loguearConNuevoUsuarioTimeStamp",ns="getCombinados.inicial.timeStamp",as="getCombinados.inicial.errorTimeStamp",ss="sectores.all.timeStamp",ls="sectores.all.errorTimeStamp";class ds extends(Wn(Bo,ss,ls,ns,as,es,ts,"ui.menu.timeStamp",rs,is,os)(Vn)){constructor(){super(),this.area="header",this.visible=!1,this.arrastrando=!1,this.usuario=null,this.optionsCount=4,this.defaultOption=0,this.selectedOption=new Array(this.optionsCount).fill(!1),this.selectedOption[this.defaultOption]=!0;new Ga(this,this.gestos);this.profile="ACCEDER",this.popUp=null,this.logueado=!1,window.addEventListener("message",(e=>{if("https://fronttest.uocra.net"==e.origin)try{this.popUp.close();if(this.parseJwt(e.data).exp<(new Date).getTime()/1e3)return void Bo.dispatch(C("Control de Accesos","Su permiso ha expirado, ¿ quiere actualizalo ?",k(),null));this.logueado=!0,Bo.dispatch(Se(e.data))}catch(e){console.log(e)}}),!1)}static get styles(){return Yo`
            ${Jn}
            ${ua}
            ${ca}
            ${na}
            .logo {
                height: 7vh;
                width: 7vh;
                background-color: var(--on-primario);
                border-radius: 50%;
            }
            :host {
                display: grid;
                grid-auto-flow: column;
                padding: 0 !important;
                background-color: var(--primario);
            }
            :host([hidden]) {
                display: none;
            }

            #titulo {
                color: var(--on-primario);
                cursor: pointer;
            }

            .menuItem {
                color: var(--on-secundario);
                cursor: pointer;
            }

            div[oculto] {
                display: none;
            }
            h1 {
                margin: 0;
            }
            #version {
                color: var(--on-primario);
                font-size: 0.6rem;
                align-self: start;
            }
            #opciones {
                justify-content: end;
                grid-gap: 2rem;
                padding: 1rem;
            }

            :host([media-size="large"]) .menu-button,
            :host([media-size="large"]) #velo {
                display: none;
            }

            #velo {
                position: fixed;
                top: 0;
                right: -100%;
                width: 100vw;
                height: 100vh;
                background-color: var(--velo);
                z-index: 90;
            }

            .menu-button {
                cursor: pointer;
                justify-self: end;
                justify-content: end;
                display: grid;
            }

            :host([visible]) #velo {
                right: 0;
            }

            :host([arrastrando]) #opciones {
                position: absolute;
                transition: none;
            }
            .activo {
                color: var(--light-text-color);
                font-size: var(--font-label-size);
            }

            :host([media-size="large"]) button[selected] {
                color: var(--terciario);
                stroke: var(--terciario);
                fill: var(--terciario);
            }

            :host(:not([media-size="large"])) #opciones {
                position: fixed;
                top: 0;
                right: -100%;
                height: 100vh;
                width: 60%;
                grid-auto-flow: row;
                background-color: var(--secundario);
                align-content: start;
                transition: 0.3s all;
                display: grid;
                justify-items: start;
                z-index: 100;
            }
            svg {
                height: 1.2rem;
                width: 1.2rem;
            }
            button[etiqueta] {
                display: grid;
                grid-auto-flow: column;
                grid-template-columns: auto 1fr;
                grid-gap: 0.3rem;
                align-items: center;
                align-content: center;
            }
            button[link] {
                color: var(--on-primario);
                stroke: var(--on-primario);
                fill: var(--on-primario);
            }
            button[raised] {
                box-shadow: none;
            }
            #version {
                color: var(--on-primario-bajada);
            }

            .popup {
                position: absolute;
                left: 0;
                top: 100%;
                background-color: var(--formulario);
                color: var(--on-formulario);
                display: none;
                z-index: 1000;
            }
            #acceso {
                position: relative;
            }
            #acceso[logueado]:hover .popup {
                display: grid;
            }
            :host([media-size="small"]) #acceso[logueado] .popup {
                display: grid;
                background-color: var(--secundario);
            }
            :host([media-size="small"]) #acceso[logueado] .popup button {
                color: var(--on-primario);
                font-size: 0.8rem;
                text-align: start;
                padding: 0rem 0rem;
            }
            *[hidden] {
                display: none;
            }
        `}render(){return En`
            <div id="velo" @click=${this.toggleMenu}></div>
            <div class="grid column">
                <div class="inner-grid column start">
                    <div class="logo"></div>
                    <h1 id="titulo" @click="${this.click}" .option=${"inicial"}>${"Control de Amparos"}</h1>
                    <div id="version">${"1.0.20"}</div>
                </div>
                <button raised circle class="menu-button" @click=${this.toggleMenu}>${ha}</button>
            </div>

            <div id="opciones" class="grid column" @click=${this.toggleMenu}>
                <button raised circle action class="menu-button">${ma}</button>
                <button link ?selected="${this.selectedOption[0]}" @click=${this.click} .option=${"inicial"}>Home</button>
                <button link ?selected="${this.selectedOption[1]}" @click=${this.click} .option=${"amparos"} ?hidden=${Ka("menu-planes")}>Planes</button>
                <button link ?selected="${this.selectedOption[2]}" @click=${this.click} .option=${"verSectores"} ?hidden=${Ka("menu-sectores")}>Sectores</button>
                <button link ?selected="${this.selectedOption[3]}" @click=${this.click} .option=${"abmUsuarios"} ?hidden=${Ka("menu-usuarios")}>Usuarios</button>

                <div id="acceso" ?logueado="${this.logueado}">
                    <button link etiqueta ?selected="${this.selectedOption[2]}" @click=${this.abrir} .option=${"log"}>
                        <div>${fa}</div>
                        <div class="justify-self-start">${this.profile}</div>
                    </button>
                    <div class="grid popup">
                        <button flat="" action="" @click=${this.abrirForzado}>
                            <div>Acceder con otro usuario</div>
                        </button>
                        <button flat="" action="" @click=${this.salir}>
                            <div>Salir</div>
                        </button>
                    </div>
                </div>
            </div>
        `}isSelected(e){return!0}gestos(e){"large"!=this.mediaSize&&("move"==e.detail.ACTION&&e.detail.dx>0&&(this.arrastrando=!0,this.opciones.style.right=-e.detail.dx+"px"),"end"==e.detail.ACTION&&e.detail.LEFT_TO_RIGHT&&(this.arrastrando=!1,e.detail.dx>40?this.toggleMenu():this.opciones.style.right="0"))}toggleMenu(){this.visible=!this.visible,this.opciones.style.right=this.visible?"0":"-100%"}click(e){var t;this.selectedOption=new Array(this.optionsCount).fill(!1),this.selectedOption[Array.from(e.currentTarget.parentNode.children).indexOf(e.currentTarget)-1]=!0,Bo.dispatch((t=e.currentTarget.option,{type:S,option:t})),Bo.dispatch(Y(e.currentTarget.option))}parseJwt(e){var t=e.split(".")[1].replace(/-/g,"+").replace(/_/g,"/"),r=decodeURIComponent(window.atob(t).split("").map((function(e){return"%"+("00"+e.charCodeAt(0).toString(16)).slice(-2)})).join(""));return JSON.parse(r)}abrir(e){"ACCEDER"==this.profile&&(this.popUp=window.open("https://fronttest.uocra.net/auth/index.html"))}abrirForzado(e){this.popUp=window.open("https://fronttest.uocra.net/auth/index.html?nuevo=true"),Bo.dispatch(Y("inicial"))}salir(){this.profile="ACCEDER",this.logueado=!1,Bo.dispatch(Y("inicial"))}firstUpdated(e){this.opciones=this.shadowRoot.querySelector("#opciones"),this.abrir()}stateChanged(e,t){if(t==ts||t==es){this.mediaSize=e.ui.media.size,this.hidden=!0;const t=null!=e.screen.name;q(e,this.area)&&t&&(this.hidden=!1)}if(t==rs){const t=this.parseJwt(e.autorizacion.tokenAutentication);if(0==e.autorizacion.entities.result.sectores.length)this.profile="NO AUTORIZADO",Bo.dispatch(xi(e.autorizacion.entities.result)),Bo.dispatch(yi());else{let r=e.autorizacion.entities.result.sectores[0].descripcion;this.profile=t.family_name+" "+t.given_name+" ("+r+")",e.autorizacion.entities.result.sectores[0].token?(Bo.dispatch(xi(e.autorizacion.entities.result)),Bo.dispatch({type:ki})):Bo.dispatch(Y("esperarAutorizacion"))}}t==is&&Bo.dispatch(C("Control de Accesos","Acceso denegado, ¿ quiere acceder con otro usuario ?",k(),null)),t==os&&this.abrirForzado(),t==ns&&e.autorizacion.entities.result.sectores.length>0&&Bo.dispatch(Y("inicial")),t==ss&&0==e.autorizacion.entities.result.sectores.length&&Bo.dispatch(Y("solicitarAutorizacion"))}static get properties(){return{mediaSize:{type:String,reflect:!0,attribute:"media-size"},layout:{type:String,reflect:!0},hidden:{type:Boolean,reflect:!0},area:{type:String},visible:{type:Boolean,reflect:!0},arrastrando:{type:Boolean,reflect:!0},selectedOption:{type:Array},profile:{type:String,reflect:!1},logueado:{type:Boolean,reflect:!0}}}}window.customElements.define("menu-principal",ds);const cs=Yo`
	.dmd-button {
		display: grid;
		align-items: center;
		cursor: pointer;
		width: fit-content;
		border: none;
		outline: none;
		padding: 0.5rem 1rem;
		transition-duration: 0.3s;
		font: inherit;
	}
	.dmd-button div {
		display: grid;
		grid-template-columns: auto auto;
		grid-gap: 0.3rem;
		font-size: var(--font-bajada-size);
		font-weight: var(--font-bajada-weight);
	}
	.dmd-button[sombra] {
		box-shadow: 0 3px 6px 0 var(--primario);
	}
	.dmd-button[bordeRedondo] {
		border-radius: 0.4rem;
	}
	.dmd-button label {
		align-self: center;
		transition-duration: 0.3s;
	}
	.dmd-button svg {
		width: var(--font-bajada-size);
		height: var(--font-bajada-size);
		align-self: center;
		transition-duration: 0.3s;
	}
	/* ------ Boton normal ------ */
	.dmd-button[normal] {
		background-color: var(--primario);
		color: var(--terciario);
	}
	.dmd-button[normal]:hover {
		background-color: var(--terciario);
		color: var(--primario);
	}
	.dmd-button[normal]:active {
		background-color: var(--terciario);
		transform: scale(1.2);
	}
	.dmd-button[normal][apagado] {
		opacity: 0.8;
		background-color: var(--on-formulario-disabled);
		cursor: not-allowed;
		pointer-events: none;
	}
	.dmd-button[normal] svg {
		fill: var(--terciario);
	}
	.dmd-button[normal]:hover svg {
		fill: var(--primario);
	}

	/* ------ Boton soloTexto ------ */
	.dmd-button[soloTexto] {
		background-color: transparent;
		color: var(--primario);
	}
	.dmd-button[soloTexto]:hover {
		color: var(--terciario);
	}
	.dmd-button[soloTexto]:active {
		color: var(--primario);
		transform: scale(1.2);
	}
	.dmd-button[soloTexto][apagado] {
		opacity: 0.8;
		color: var(--primario-bajada);
		cursor: not-allowed;
		pointer-events: none;
	}
	.dmd-button[soloTexto] svg {
		fill: var(--primario);
	}
	.dmd-button[soloTexto]:hover svg {
		fill: var(--terciario);
	}
	/* ------ Boton conBorde ------ */
	.dmd-button[conBorde] {
		color: var(--primario);
		background-color: transparent;
		border: 1px solid var(--primario);
	}
	.dmd-button[conBorde]:hover {
		background-color: var(--terciario);
	}
	.dmd-button[conBorde]:active {
		background-color: transparent;
		transform: scale(1.2);
	}
	.dmd-button[conBorde][apagado] {
		opacity: 0.8;
		background-color: var(--on-primario-bajada);
		cursor: not-allowed;
		pointer-events: none;
	}
	.dmd-button[conBorde] svg {
		fill: var(--primario);
	}
	.dmd-button[disabled] {
		border: 1px solid hsl(var(--fondo1), var(--fondo2), calc(var(--fondo3) - 6%));
		background-color: hsl(var(--fondo1), var(--fondo2), calc(var(--fondo3) - 6%));
		color: hsl(var(--fondo1), var(--fondo2), calc(var(--fondo3) - 20%));
	}
	.dmd-button[disabled]:active {
		transform: scale(1);
	}
	.dmd-button[disabled]:hover {
		background-color: hsl(var(--fondo1), var(--fondo2), calc(var(--fondo3) - 6%));
		color: hsl(var(--fondo1), var(--fondo2), calc(var(--fondo3) - 20%));
	}
`,us="popup.show.timeStamp",ps="popup.hidden";class hs extends(Zn(Bo,us,ps)(Vn)){constructor(){super(),this.addEventListener("mouseleave",this.cerrar),this.hidden=!0,this.items=null,this.iconos={ALERTADO:Ra,VENCIDO:Ia,PENDIETE:Ca,CUMPLIDO:Da,VIGENTE:ja}}static get styles(){return Yo`
			${na}
			:host {
				position: fixed;
				display: grid;
				grid-auto-flow: row;
				background-color: var(--formulario);
				padding: 0rem;
				border: solid 0.5px var(--on-formulario);
				border-radius: 0.3rem;
				box-shadow: 2px 2px 7px -1px var(--on-aplicacion);
			}
			:host([hidden]) {
				display: grid;
				display: none !important;
			}
			.div-cuerpo {
				display: grid;
				grid-template-columns: auto 1fr;
				height: 1.7rem;
				padding: 0.2rem 0.8rem;
				background-color: transparent;
				cursor: pointer;
				align-items: center;
				grid-gap: 0.5rem;
				color: var(--on-formulario);
			}
			.div-cuerpo:hover {
				background-color: var(--on-formulario);
				color: var(--formulario);
			}
			.div-cuerpo svg {
				fill: var(--on-formulario);
			}
			.div-cuerpo:hover svg {
				fill: var(--formulario);
			}
			.div-titulo {
				display: grid;
				height: 2rem;
				text-align: center;
				background-color: var(--primario);
				color: var(--on-primario);
				align-items: center;
				font-family: var(font-header-h1-family);
				font-size: var(--font-header-h1-size);
				font-weight: var(--font-header-h1-weight);
				padding: 0px 4px 2px 4px;
			}
			.div-linea {
				height: 1px;
				background-color: var(--on-formulario);
				margin: 2px 0;
			}
			*[hidden] {
				display: none !important;
			}
			.fadeInDown {
				-webkit-animation-name: fadeInDown;
				animation-name: fadeInDown;
				-webkit-animation-duration: 1s;
				animation-duration: 1s;
				-webkit-animation-fill-mode: both;
				animation-fill-mode: both;
			}
			@-webkit-keyframes fadeInDown {
				0% {
					opacity: 0;
					-webkit-transform: translate3d(0, -100%, 0);
					transform: translate3d(0, -100%, 0);
				}
				100% {
					opacity: 1;
					-webkit-transform: none;
					transform: none;
				}
			}
			@keyframes fadeInDown {
				0% {
					opacity: 0;
					-webkit-transform: translate3d(0, -100%, 0);
					transform: translate3d(0, -100%, 0);
				}
				100% {
					opacity: 1;
					-webkit-transform: none;
					transform: none;
				}
			}
		`}firstUpdated(){super.firstUpdated()}willUpdate(e){e.has("hidden")}updated(e){if(e.has("hidden")&&!this.hidden){let e=this.clientWidth,t=this.offsetHeight;if(0!=t&&0!=e){Bo.getState().popup.show;let r=Number(Bo.getState().popup.show.x.toString().replace("px","")),i=Number(Bo.getState().popup.show.y.toString().replace("px","")),o=Number(document.documentElement.scrollWidth),n=Number(document.documentElement.scrollHeight),a=0,s=0;a=r+e<=o?r-5:r+5-e,s=i+t<=n?i-5:i+15-t,this.style.left=a+"px",this.style.top=s+"px"}}}render(){if(this.items)return En`
				${this.items.map(((e,t)=>En` <div class="div-cuerpo" ?hidden=${e.tipo} .item=${e} @click="${this.accion}">
							<div class="div-opcion" ?hidden=${!e.svg}>${e.svg?this.iconos[e.svg]:""}</div>
							<div class="div-opcion">${e.titulo}</div>
						</div>
						<div class="div-titulo" ?hidden=${"titulo"!=e.tipo}>${e.titulo}</div>
						<div class="div-linea" ?hidden=${"linea"!=e.tipo}></div>`))}
			`}accion(e){let t=e.currentTarget.item,r=e.currentTarget.item.param;r&&(r.item=Bo.getState().popup.show.item),t.accion&&Bo.dispatch({type:t.accion,param:r}),this.cerrar()}stateChanged(e,t){if(t==us){let t=e.popup.all.entities.filter((t=>t.opcion.filter((t=>t.menu==e.popup.show.opcion)).length>0));if(t.length>0){this.items=JSON.parse(JSON.stringify(t)),this.items.map(((t,r)=>{let i={};t.opcion.map(((t,r)=>{t.menu==e.popup.show.opcion&&(i=t)})),this.items[r].opcion=[],this.items[r].opcion.push(i)}));this.items;this.items.sort(((e,t)=>e.opcion[0].orden-t.opcion[0].orden))}else this.items=null;this.hidden=!1}t==ps&&(this.hidden=!0)}cerrar(){this.hidden=!0}static get properties(){return{hidden:{type:Boolean,reflect:!0,attribute:"hidden"}}}}window.customElements.define("poopup-control",hs);const ms=Yo`
	@keyframes fadeIn {
		from {
			opacity: 0;
		}

		to {
			opacity: 1;
		}
	}
	@keyframes altaPlan {
		from {
			background-color: var(--formulario);
		}

		to {
			background-color: var(--on-formulario);
		}
	}
`,fs="ui.media.timeStamp",gs="screen.timeStamp";class vs extends(Wn(Bo,fs,gs)(Vn)){constructor(){super(),this.expandido=!1}static get styles(){return Yo`
			${ms}
			:host {
				display: grid;
				position: relative;
				background-color: var(--formulario);
				animation: fadeIn 1s;
			}
			:host::-webkit-scrollbar {
				display: none;
			}
			#div-trajeta {
				display: grid;
				background-color: transparent;
				grid-template-columns: 0.4rem 18rem;
				align-content: center;
				padding: 0rem;
				border-radius: 4px;
				gap: 0m;
				border: solid 1px var(--formulario);
			}
			#div-trajeta[seleccionado] {
				background-color: var(--aplicacion);
				box-shadow: var(--shadow-elevation-8-box);
			}
			#div-estado {
				height: inherit;
				width: auto;
				border-radius: 3px 0 0 3px;
			}
			#div-estado[cumplido] {
				background-color: var(--cumplido);
			}
			#div-estado[alertado] {
				background-color: var(--alertado);
			}
			#div-estado[vencida] {
				background-color: var(--vencido);
			}
			#div-estado[pendiente] {
				background-color: var(--pendiente);
			}
			#div-estado[vigente] {
				background-color: var(--vigente);
			}
			#div-estado[anulada] {
				background-color: var(--anulado);
			}
			#div-estado[pausada] {
				background-color: var(--pausado);
			}

			#div-cuerpo {
				display: grid;
				grid-template-rows: max-content 2.2rem;
				gap: 0;
				padding: 0.5rem;
			}
			#textarea-titulo {
				font-family: var(--font-header-h1-menos-family);
				font-size: var(--font-header-h1-menos-size);
				font-weight: bold;
				background-color: transparent;
				color: var(--on-formulario);
				border: 0;
				box-shadow: none;
				padding: 0.2rem 0.1rem;
				cursor: default;
				resize: none;
				text-wrap: initial;
			}
			#textarea-titulo::-webkit-scrollbar {
				display: none;
			}
			#textarea-titulo:focus {
				outline: none !important;
				border: none;
			}
			#div-botonera {
				display: grid;
				grid-template-columns: 1fr auto;
				align-items: center;
				gap: 0.6rem;
			}
			.btn {
				font-family: var(font-header-h1-menos-family);
				font-size: var(--font-header-h1-menos-size);
				font-weight: var(--font-header-h1-menos-weight);
				border-radius: 0.5rem;
				width: max-content;
				justify-self: start;
				background-color: transparent;
				color: var(--primario);
				border: none;
				height: fit-content;
				cursor: pointer;
				padding: 0;
			}
			#div-menu {
				display: grid;
				justify-content: right;
			}
			*[invisible] {
				visibility: hidden;
			}
			svg {
				fill: var(--on-formulario);
				width: auto;
				height: 1.4rem;
			}
			.titulo {
				display: grid;
				grid-template-columns: 1fr auto;
				gap: 1rem;
			}
		`}firstUpdated(){super.firstUpdated()}willUpdate(e){e.has("registro")&&(this.expandido=!1,this.registro?.conTareas&&this.registroseleccionado?.id==this.registro?.id&&(this.expandido=!0)),e.has("registroseleccionado")&&(this.expandido=!1,this.registro?.conTareas&&this.registroseleccionado?.id==this.registro?.id&&(this.expandido=!0))}updated(e){}render(){if(this.registro)return En`
				<div id="div-trajeta" ?seleccionado=${this.registroseleccionado?.id==this.registro.id}>
					<div id="div-estado" ?cumplido=${"cumplida"==this.registro.estado} ?alertado=${"alerta"==this.registro.estado} ?vencida=${"vencida"==this.registro.estado} ?pendiente=${"pendiente"==this.registro.estado} ?vigente=${"vigente"==this.registro.estado} ?pausada=${"pausada"==this.registro.estado} ?anulada=${"anualada"==this.registro.estado}></div>
					<div id="div-cuerpo">
						<div class="titulo">
							<div id="textarea-titulo" readonly>${this.registro.descripcion}</div>
							<div id="div-menu" @click="${this.popup}" title="Menu de opciones">${Ta}</div>
						</div>
						<div id="div-botonera">
							<button class="btn" @click="${this.mostrarAmparo}" title="Ver el detlle del amparo">AMPARO</button>
							<button class="btn" @click="${this.mostrarTareas}" ?invisible=${!this.registro.conTareas} title="Ver las tareas asignadas">${this.registroseleccionado?.id!=this.registro.id?"MOSTRAR":"OCULTAR"} TAREAS</button>
						</div>
					</div>
				</div>
			`}popup(e){Bo.dispatch(((e,t,r,i)=>({type:Vt,registro:e,nombreComponente:t,x:r,y:i}))(this.registro,this.id,e.clientX,e.clientY))}mostrarAmparo(e){e.preventDefault(),e.stopPropagation(),window.open("https://www.uocra.net/Amparos/Index.html?dni="+this.registro.urlReferencia,"_blank")}mostrarTareas(e){e.preventDefault(),e.stopPropagation(),Bo.dispatch(Zt(this.registro,this.id))}stateChanged(e,t){t!=gs&&t!=fs||this.update()}static get properties(){return{registro:{type:Object},expandido:{type:Boolean,reflect:!0,attribute:"expandido"},registroseleccionado:{type:Object}}}}window.customElements.define("plan-componente",vs);const bs="ui.media.timeStamp",ys="screen.timeStamp",ws="sectores.byId.timeStamp",Ss="sectores.byId.errorTimeStamp";class As extends(Wn(Bo,ws,Ss,bs,ys)(Vn)){constructor(){super(),this.expandido=!1}static get styles(){return Yo`
			${ms}
			:host {
				display: grid;
				position: relative;
				background-color: var(--formulario);
				animation: fadeIn 1s;
				max-width: 27rem;
			}
			:host::-webkit-scrollbar {
				display: none;
			}
			.div-etiqueta {
				display: grid;
				grid-template-columns: 0.8rem 1fr;
				grid-gap: 0;
				border: solid var(--on-formulario-bajada) 1px;
				align-content: center;
				padding: 0;
				border-radius: 4px;
				border: solid 1px var(--formulario);
			}
			.div-etiqueta[cursorpointer] {
				/* cursor: pointer; */
			}
			.div-etiqueta[seleccionado] {
				background-color: var(--aplicacion);
				box-shadow: var(--shadow-elevation-8-box);
			}
			svg {
				cursor: pointer;
			}
			.estado {
				height: 100%;
				width: 0.5rem;
				align-self: center;
			}
			.estado[cumplido] {
				background-color: var(--cumplido);
			}
			.estado[alertado] {
				background-color: var(--alertado);
			}
			.estado[vencida] {
				background-color: var(--vencido);
			}
			.estado[pendiente] {
				background-color: var(--pendiente);
			}
			.estado[vigente] {
				background-color: var(--vigente);
			}
			.estado[anulada] {
				background-color: var(--anulado);
			}
			.estado[pausada] {
				background-color: var(--pausado);
			}
			.div-cuerpo {
				display: grid;
				gap: 1rem;
				padding: 1rem;
			}

			#textarea-titulo {
				font-family: var(--font-header-h1-menos-family);
				font-size: var(--font-header-h1-menos-size);
				font-weight: bold;
				background-color: transparent;
				color: var(--on-formulario);
				border: 0;
				box-shadow: none;
				padding: 0.2rem 0.1rem;
				cursor: default;
				resize: none;
				text-wrap: wrap;
			}
			#textarea-titulo::-webkit-scrollbar {
				display: none;
			}
			#textarea-titulo:focus {
				outline: none !important;
				border: none;
			}
			#div-botonera {
				display: grid;
				grid-auto-flow: column;
				align-content: flex-start;
				gap: 0.6rem;
			}
			#div-botonera svg {
				fill: var(--on-formulario-bajada);
			}

			.btn {
				font-family: var(font-header-h1-menos-family);
				font-size: var(--font-header-h1-menos-size);
				font-weight: var(--font-header-h1-menos-weight);
				border-radius: 0.5rem;
				width: max-content;
				justify-self: start;
				background-color: transparent;
				color: var(--primario);
				border: none;
				height: fit-content;
				cursor: pointer;
				padding: 0;
			}
			.btn:hover {
				text-decoration: underline;
			}
			#div-menu {
				display: grid;
				justify-content: right;
			}
			.div-imagen {
				display: grid;
				align-content: center;
			}
			*[hidden] {
				display: none !important;
			}
			*[invisible] {
				visibility: hidden;
			}
			svg {
				fill: var(--on-formulario);
			}
			.caption {
				color: var(--on-formulario-bajada);
			}
			.caption svg {
				fill: var(--on-formulario-bajada);
				cursor: auto;
			}
			.lineas {
				display: grid;
				grid-auto-flow: column;
				font-size: var(--font-bajada-size);
				color: var(--on-formulario);
				align-self: center;
				gap: 2rem;
			}
			.subtitulo {
				display: grid;
				grid-auto-flow: column;
				font-size: var(--font-bajada-size);
				color: var(--on-formulario);
				align-self: center;
				justify-content: start;
			}
			.lineas div {
				display: grid;
				justify-content: start;
				justify-items: start;
				gap: 0.5rem;
			}
			.titulo {
				display: grid;
				grid-template-columns: 1fr auto;
				gap: 1rem;
			}
			.titulo div {
				display: grid;
				align-content: center;
				align-items: center;
			}
			.separador {
				height: 0;
				border-top: 1px solid var(--on-aplicacion-disabled);
			}
			.center {
				justify-self: center;
			}
			.end {
				justify-self: end;
			}
		`}firstUpdated(){super.firstUpdated()}willUpdate(e){e.has("registro")&&(this.expandido=!1,this.registro?.hijo&&this.registroseleccionado?.id==this.registro?.id&&(this.expandido=!0)),e.has("registroseleccionado")&&(this.expandido=!1,this.registro?.hijo&&this.registroseleccionado?.id==this.registro?.id&&(this.expandido=!0))}render(){if(this.registro)return En`
				<div class="div-etiqueta" ?cursorpointer=${this.registro.hijo} ?seleccionado=${this.registroseleccionado&&this.registroseleccionado.id==this.registro.id}>
					<div class="estado" ?cumplido=${"cumplida"==this.registro.estado} ?alertado=${"alerta"==this.registro.estado} ?vencida=${"vencida"==this.registro.estado} ?pendiente=${"pendiente"==this.registro.estado} ?vigente=${"vigente"==this.registro.estado} ?pausada=${"pausada"==this.registro.estado} ?anulada=${"anualada"==this.registro.estado}></div>
					<div class="div-cuerpo">
						<div class="titulo">
							<div>
								<div id="textarea-titulo" readonly>${this.registro.descripcion}</div>
								<div class="subtitulo">
									<div class="btn" @click="${this.verUsuariosCreador}">${this.registro.creador.descripcion.toUpperCase()}</div>
									<div class="caption">${ba}</div>
									<div class="btn" @click="${this.verUsuariosEjecutor}">${this.registro.ejecutor.descripcion.toUpperCase()}</div>
								</div>
							</div>
							<div id="div-botonera">
								<div id="div-menu" @click="${this.popup}" title="Menu de opciones">${Ta}</div>
							</div>
						</div>
						<div class="separador"></div>
						<div class="lineas">
							<div title="fecha de inicio">
								<div class="caption">${Ua}</div>
								<div>${Xa(this.registro.vigenteDesde)}</div>
							</div>
							<div title="fecha de alerta" style="justify-content: center;">
								<div class="caption center">${Ma}</div>
								<div>${Xa(this.registro.alerta)}</div>
							</div>
							<div ?hidden="${!("cumplida"==this.registro.estado&&"simple"==this.registro.tipo&&new Date(this.registro.cumplidaEl).getTime()<=new Date(this.registro.vencimiento).getTime())}" title="fecha de cumplimiento">
								<div class="caption center">${$a}</div>
								<div>${Xa(this.registro.cumplidaEl)}</div>
							</div>
							<div title="fecha de vencimiento" style="justify-content: flex-end;">
								<div class="caption end">${Ba}</div>
								<div>${Xa(this.registro.vencimiento)}</div>
							</div>
							<div ?hidden="${!("cumplida"==this.registro.estado&&"simple"==this.registro.tipo&&new Date(this.registro.cumplidaEl).getTime()>new Date(this.registro.vencimiento).getTime())}" title="fecha de cumplimiento">
								<div class="caption center">${$a}</div>
								<div>${Xa(this.registro.cumplidaEl)}</div>
							</div>
						</div>

						<div class="separador"></div>

						<div id="div-botonera">
							<button class="btn" @click="${this.verTarea}" title="Ver el detlle de la tarea">VER</button>
							<button class="btn" @click="${this.mostrarTareas}" style="justify-self: flex-end;" ?invisible=${!this.registro.conTareas} title="Ver las tareas asignadas">${this.registroseleccionado?.id!=this.registro.id?"MOSTRAR":"OCULTAR"} CONDICIONES</button>
						</div>
					</div>
				</div>
			`}popup(e){Bo.dispatch(((e,t,r,i)=>({type:Gt,registro:e,nombreComponente:t,x:r,y:i}))(this.registro,this.id,e.clientX,e.clientY))}verTarea(e){var t;Bo.dispatch((t=this.registro,{type:sr,item:t,accion:"view"}))}verUsuariosCreador(e){Bo.dispatch(bi(this.registro.creador.id))}verUsuariosEjecutor(e){Bo.dispatch(bi(this.registro.ejecutor.id))}mostrarTareas(e){e.preventDefault(),e.stopPropagation(),Bo.dispatch(Zt(this.registro,this.id))}stateChanged(e,t){t!=ys&&t!=bs||this.update(),t==ws&&Bo.dispatch(Sr(e.sectores.byId.entities.usuarios,e.sectores.byId.entities,"view")),t==Ss&&Bo.dispatch(showWarning("Error!","No se pudo recuperar los usuarios, intente nuevamente","fondoError",3e3))}static get properties(){return{registro:{type:Object},expandido:{type:Boolean,reflect:!0,attribute:"expandido"},registroseleccionado:{type:Object}}}}window.customElements.define("tarea-componente",As);const _s="ui.media.timeStamp",xs="screen.timeStamp",Ts="planes.all.timeStamp",Es="planes.all.errorTimeStamp",ks="eventos.mostrarHijos.timeStamp",Cs="eventos.mostrarPopupPlanes.timeStamp",Ds="eventos.mostrarPopupTareas.timeStamp",Rs="entreComponentes.amparos_Filter01.timeStamp",Is="entreComponentes.amparos_SacarFilter01.timeStamp",js="entreComponentes.amparos_SacarFilter02.timeStamp",Os="entreComponentes.amparos_Filter02.timeStamp",zs="tareas.byPlanId.timeStamp",Ps="tareas.byPlanId.errorTimeStamp",Ls="tareas.darCumplimientoTimeStamp",qs="tareas.errorDarCumplimientoTimeStamp",Us="eventos.ejecutarTareaDarCumplimiento.timeStamp",Ms="tareas.quitarCumplimientoTimeStamp",$s="tareas.errorQuitarCumplimientoTimeStamp",Bs="eventos.ejecutarTareaQuitarCumplimiento.timeStamp",Ns="planes.addTimeStamp",Hs="planes.updateTimeStamp",Fs="entreComponentes.tareaCargaAAmparo_Retorno01.timeStamp";class Gs extends(Wn(Bo,Os,Ms,$s,Bs,Fs,Us,Ls,qs,Rs,Ns,Is,js,Cs,Ds,ks,Ts,Es,Hs,zs,Ps,_s,xs)(Vn)){constructor(){super(),this.hidden=!0,this.area="body",this.current="",this.arbol=null,this.rama=-1,this.itemsSeleccionados=[],this.filtro=!1,this.cargaArbolDe0=!0,this.sectorEjecutorFiltro={ejecutorCreador:"",sectorDescripcion:""}}static get styles(){return Yo`
            ${cs}
            :host {
                display: grid;
                grid-template-rows: 6vh auto;
                background-color: var(--aplicacion);
                overflow: auto;
            }
            :host([hidden]) {
                display: none;
            }
            :host::-webkit-scrollbar {
                display: none;
            }
            #div-titulo {
                display: grid;
                position: relative;
                grid-auto-flow: column;
                justify-content: left;
                align-items: center;
                width: 100vw;
                background-color: var(--secundario);
                font-family: var(font-header-h1-family);
                font-size: 1.5rem;
                color: var(--on-secundario);
                gap: 1rem;
                padding-left: 0.6rem;
            }
            #div-sectores {
                display: grid;
                grid-auto-flow: column;
                gap: 0.1rem;
            }
            #div-sectores-Descri {
                font-family: var(font-header-h2-family);
                font-size: 0.8rem;
                align-self: center;
                padding-right: 0.3rem;
            }
            #div-titulo-leyenda {
                display: grid;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
            }
            .titulo-boton {
                border: 1px solid rgba(256, 256, 256, 0.6);
                height: 2rem;
                cursor: pointer;
                border-radius: 0.4rem;
                background-color: rgba(0, 0, 0, 0.1);
            }
            #div-buscar {
                display: grid;
                position: relative;
                width: 100vw;
                font-family: var(font-header-h1-family);
                font-size: 0.8rem;
                background-color: rgba(255, 255, 255, 0.1);
                color: grey;
                text-align: left;
                grid-auto-flow: column;
                justify-content: flex-start;
                grid-gap: 0.2rem;
            }
            .div-arbol {
                display: grid;
                width: 100vw;
                grid-auto-flow: column;
                grid-gap: 0.5rem;
                overflow-x: auto;
                white-space: nowrap;
                justify-content: flex-start;
            }
            .div-arbol::-webkit-scrollbar {
                display: none;
            }
            .div-rama {
                display: grid;
                width: max-content;
                grid-auto-flow: row;
                grid-gap: 1rem;
                overflow-y: auto;
                white-space: nowrap;
                align-content: flex-start;
                padding: 0.5rem;
            }
            .div-rama::-webkit-scrollbar {
                display: none;
            }
            svg {
                width: 2rem;
                height: 2rem;
                fill: var(--on-secundario);
            }
            *[hidden] {
                display: none !important;
            }
        `}render(){if(this.arbol)return En` <div id="div-titulo">
                    <div id="div-alta-amparo" class="titulo-boton" @click="${this.altaAmparo}" title="Alta de nuevo plan">${Sa}</div>
                    <div id="div-refresh" class="titulo-boton" @click="${this.refresh}" title="Refrescar la lista de planes">${Oa}</div>
                    <div id="div-menu" class="titulo-boton" @click="${this.filtroMenu}" title="filtro de amparos">${Ea}</div>
                    <div id="div-sacar-filtro" class="titulo-boton" @click="${this.filtroSacar}" ?hidden=${!this.filtro} title="Sacar filtros">${ka}</div>
                    <div id="div-sectores" class="titulo-boton" ?hidden=${Ka("planes-filtrar-sectores")} @click="${this.filtroPorSector}" title="Filtro por sector">
                        <div>${qa}</div>
                        <div id="div-sectores-Descri" ?hidden=${""==this.sectorEjecutorFiltro.ejecutorCreador}>${this.sectorEjecutorFiltro.ejecutorCreador.toUpperCase()+": "+this.sectorEjecutorFiltro.sectorDescripcion}</div>
                    </div>
                    <div id="div-sectores" class="titulo-boton" ?hidden=${!Ka("planes-filtrar-sectores")} @click="${this.filtroPorSectorSinDescripicion}" title="Filtro por sector">
                        <div>${qa}</div>
                        <div id="div-sectores-Descri" ?hidden=${""==this.sectorEjecutorFiltro.ejecutorCreador}>${this.sectorEjecutorFiltro.ejecutorCreador.toUpperCase()+": "+this.sectorEjecutorFiltro.sectorDescripcion}</div>
                    </div>
                </div>
                <div class="div-arbol">
                    ${this.arbol.filter(((e,t)=>t<=this.rama+1)).map(((e,t)=>En`<div class="div-rama">
                                ${e.filter(((e,r)=>0==t||t>0&&e.padre==this.itemsSeleccionados[t-1].id)).map(((e,r)=>0==t?En`<plan-componente id=${"p"+t+"-"+r} class="nodotarea" .registro=${e} .rama=${t} .registroseleccionado=${this.itemsSeleccionados[t]}></plan-componente>`:En`<tarea-componente id=${"t"+t+"-"+r} .registro=${e} .rama=${t} .registroseleccionado=${this.itemsSeleccionados[t]}></tarea-componente>`))}
                            </div>`))}
                    <poopup-control id="popup"></poopup-control>
                </div>`}inicializarArbol(){this.cargaArbolDe0&&(this.itemsSeleccionados=[],this.rama=-1,this.filtro=!1)}filtroMenu(e){Bo.dispatch(ir("0.0",null,e.clientX,e.clientY))}filtroPorSector(e){Bo.dispatch(ir("1.0",null,e.clientX,e.clientY))}filtroPorSectorSinDescripicion(e){Bo.dispatch(ir("1.1",null,e.clientX,e.clientY))}altaAmparo(){Bo.dispatch({type:ur,item:null,accion:"add"})}filtrar(e,t){if(this.arbol.length>0){this.inicializarArbol(),this.filtro=!0,this.arbol.splice(1);let r=Bo.getState().entreComponentes.amparos_Filter01.campo;"creador"==r||"ejecutor"==r?this.filtro=!1:this.arbol[0]=this.arbol[0].filter((r=>"estado"==e?r[e]==t:"descripcion"==e||"urlReferencia"==e?r[e].toLowerCase().includes(t.toLowerCase()):void 0)),this.update()}}filtroSacar(){this.filtro=!1,""==this.sectorEjecutorFiltro.ejecutorCreador?Bo.dispatch(tt()):Bo.dispatch(tt("?ejecutorCreador="+this.sectorEjecutorFiltro.ejecutorCreador+"&sectorDescripcion="+this.sectorEjecutorFiltro.sectorDescripcion))}clickNodo(e){let t=this.shadowRoot.querySelector("#"+e),r=t.registro;this.rama=t.rama,t.hasAttribute("expandido")?(this.itemsSeleccionados.splice(this.rama),this.arbol.splice(this.rama+1),this.update()):0==this.itemsSeleccionados.length||this.itemsSeleccionados.length<this.rama+1?(this.itemsSeleccionados.push(r),""==this.sectorEjecutorFiltro.ejecutorCreador?Bo.dispatch(Bt(r.planId)):Bo.dispatch(Bt(r.planId+"?ejecutorCreador="+this.sectorEjecutorFiltro.ejecutorCreador+"&sectorDescripcion="+this.sectorEjecutorFiltro.sectorDescripcion))):(this.itemsSeleccionados[this.rama]=r,this.itemsSeleccionados.splice(this.rama+1),0==this.rama?(this.arbol.splice(1),""==this.sectorEjecutorFiltro.ejecutorCreador?Bo.dispatch(Bt(r.planId)):Bo.dispatch(Bt(r.planId+"?ejecutorCreador="+this.sectorEjecutorFiltro.ejecutorCreador+"&sectorDescripcion="+this.sectorEjecutorFiltro.sectorDescripcion))):(this.arbol.splice(this.rama+1),""==this.sectorEjecutorFiltro.ejecutorCreador?Bo.dispatch(Bt(r.planId)):Bo.dispatch(Bt(r.planId+"?ejecutorCreador="+this.sectorEjecutorFiltro.ejecutorCreador+"&sectorDescripcion="+this.sectorEjecutorFiltro.sectorDescripcion))))}refresh(){this.cargaArbolDe0=!0,this.inicializarArbol(),this.filtroSacar()}stateChanged(e,t){if(t==xs||t==_s){this.mediaSize=e.ui.media.size;let t=this.hidden;this.hidden=!0,this.current=e.screen.name;const r=q(e,this.area),i=-1!="-amparos-".indexOf("-"+e.screen.name+"-");r&&i&&(t&&(Ka("planes-filtrar-sectores")&&(this.sectorEjecutorFiltro.ejecutorCreador="ejecutor",this.sectorEjecutorFiltro.sectorDescripcion=e.miPerfil.sector.descripcion),this.filtroSacar()),this.hidden=!1)}if(t==Ts&&(this.inicializarArbol(),this.arbol=[e.planes.all.entities],this.cargaArbolDe0?this.update():""==this.sectorEjecutorFiltro.ejecutorCreador?Bo.dispatch(Bt(this.itemsSeleccionados[0].planId)):Bo.dispatch(Bt(this.itemsSeleccionados[0].planId+"?ejecutorCreador="+this.sectorEjecutorFiltro.ejecutorCreador+"&sectorDescripcion="+this.sectorEjecutorFiltro.sectorDescripcion))),t==Es&&(this.inicializarArbol(),Bo.dispatch(D("Error!","No se pudo recuperar los amparos, intente nuevamente","fondoError",3e3)),this.update()),t==zs){if(this.cargaArbolDe0){let t=[];t=0==this.rama?Za("0",e.tareas.byPlanId.entities):Za(this.itemsSeleccionados[this.rama].id,e.tareas.byPlanId.entities),this.arbol.push(t)}else if(this.cargaArbolDe0=!0,this.itemsSeleccionados.length>0){this.arbol.splice(1);let t=-1;for(const r of this.itemsSeleccionados){t++;let r=[];if(r=Za(0==t?"0":this.itemsSeleccionados[t].id,e.tareas.byPlanId.entities),!(r.length>0)){0==t?(this.itemsSeleccionados=[],this.rama=-1):this.rama=this.arbol.length-2;break}this.arbol.push(r)}}this.update()}if(t==Ps&&(this.cargaArbolDe0=!0,Bo.dispatch(D("Error!","No se pudo recuperar las tareas, intente nuevamente","fondoError",3e3))),t==ks&&this.clickNodo(e.eventos.mostrarHijos.nombreComponente),t==Cs&&(e.eventos.mostrarPopupPlanes.registro?.conTareas?Bo.dispatch(ir("2.1",e.eventos.mostrarPopupPlanes.registro,e.eventos.mostrarPopupPlanes.x+"px",e.eventos.mostrarPopupPlanes.y+"px")):Bo.dispatch(ir("2.0",e.eventos.mostrarPopupPlanes.registro,e.eventos.mostrarPopupPlanes.x+"px",e.eventos.mostrarPopupPlanes.y+"px"))),t==Ds){let t=e.eventos.mostrarPopupTareas.registro?.ejecutor.id,r=e.eventos.mostrarPopupTareas.registro?.creador.id,i=e.eventos.mostrarPopupTareas.registro?.esPorLapso,o=e.eventos.mostrarPopupTareas.registro?.estado,n=e.eventos.mostrarPopupTareas.registro?.conTareas,a=e.autorizacion.entities.result.sectores[0].id,s=r==a&&t!=a,l=r!=a&&t==a,d=r==a&&t==a;r!=a&&t!=a?Bo.dispatch(ir("3.2",e.eventos.mostrarPopupTareas.registro,e.eventos.mostrarPopupTareas.x+"px",e.eventos.mostrarPopupTareas.y+"px")):!d||i||n?d&&!i&&n?Bo.dispatch(ir("3.1",e.eventos.mostrarPopupTareas.registro,e.eventos.mostrarPopupTareas.x+"px",e.eventos.mostrarPopupTareas.y+"px")):d&&i?("cumplida"!=o&&Bo.dispatch(ir("3.3",e.eventos.mostrarPopupTareas.registro,e.eventos.mostrarPopupTareas.x+"px",e.eventos.mostrarPopupTareas.y+"px")),"cumplida"==o&&Bo.dispatch(ir("3.9",e.eventos.mostrarPopupTareas.registro,e.eventos.mostrarPopupTareas.x+"px",e.eventos.mostrarPopupTareas.y+"px"))):!s||i||n?s&&!i&&n?Bo.dispatch(ir("3.2",e.eventos.mostrarPopupTareas.registro,e.eventos.mostrarPopupTareas.x+"px",e.eventos.mostrarPopupTareas.y+"px")):s&&i?("cumplida"!=o&&Bo.dispatch(ir("3.5",e.eventos.mostrarPopupTareas.registro,e.eventos.mostrarPopupTareas.x+"px",e.eventos.mostrarPopupTareas.y+"px")),"cumplida"==o&&Bo.dispatch(ir("3.2",e.eventos.mostrarPopupTareas.registro,e.eventos.mostrarPopupTareas.x+"px",e.eventos.mostrarPopupTareas.y+"px"))):!l||i||n?l&&!i&&n?Bo.dispatch(ir("3.1",e.eventos.mostrarPopupTareas.registro,e.eventos.mostrarPopupTareas.x+"px",e.eventos.mostrarPopupTareas.y+"px")):l&&i&&("cumplida"!=o&&Bo.dispatch(ir("3.7",e.eventos.mostrarPopupTareas.registro,e.eventos.mostrarPopupTareas.x+"px",e.eventos.mostrarPopupTareas.y+"px")),"cumplida"==o&&Bo.dispatch(ir("3.11",e.eventos.mostrarPopupTareas.registro,e.eventos.mostrarPopupTareas.x+"px",e.eventos.mostrarPopupTareas.y+"px"))):("cumplida"!=o&&Bo.dispatch(ir("3.6",e.eventos.mostrarPopupTareas.registro,e.eventos.mostrarPopupTareas.x+"px",e.eventos.mostrarPopupTareas.y+"px")),"cumplida"==o&&Bo.dispatch(ir("3.10",e.eventos.mostrarPopupTareas.registro,e.eventos.mostrarPopupTareas.x+"px",e.eventos.mostrarPopupTareas.y+"px"))):("cumplida"!=o&&Bo.dispatch(ir("3.5",e.eventos.mostrarPopupTareas.registro,e.eventos.mostrarPopupTareas.x+"px",e.eventos.mostrarPopupTareas.y+"px")),"cumplida"==o&&Bo.dispatch(ir("3.2",e.eventos.mostrarPopupTareas.registro,e.eventos.mostrarPopupTareas.x+"px",e.eventos.mostrarPopupTareas.y+"px"))):("cumplida"!=o&&Bo.dispatch(ir("3.0",e.eventos.mostrarPopupTareas.registro,e.eventos.mostrarPopupTareas.x+"px",e.eventos.mostrarPopupTareas.y+"px")),"cumplida"==o&&Bo.dispatch(ir("3.8",e.eventos.mostrarPopupTareas.registro,e.eventos.mostrarPopupTareas.x+"px",e.eventos.mostrarPopupTareas.y+"px")))}if(t==Rs){let t=e.entreComponentes.amparos_Filter01.campo;"creador"==t?(this.sectorEjecutorFiltro.ejecutorCreador="creador",this.sectorEjecutorFiltro.sectorDescripcion=e.entreComponentes.amparos_Filter01.valor):"ejecutor"==t&&(this.sectorEjecutorFiltro.ejecutorCreador="ejecutor",this.sectorEjecutorFiltro.sectorDescripcion=e.entreComponentes.amparos_Filter01.valor),this.filtrar(t,e.entreComponentes.amparos_Filter01.valor)}if(t!=Is&&t!=Ns&&t!=Hs||this.filtroSacar(),t==js&&(this.sectorEjecutorFiltro.ejecutorCreador="",this.sectorEjecutorFiltro.sectorDescripcion="",Bo.dispatch(tt())),t==Os){let t=e.entreComponentes.amparos_Filter02.campo;"creador"==t||"ejecutor"==t?(this.sectorEjecutorFiltro.ejecutorCreador=t,e.entreComponentes.amparos_Filter02.valor?this.sectorEjecutorFiltro.sectorDescripcion=e.entreComponentes.amparos_Filter02.valor:this.sectorEjecutorFiltro.sectorDescripcion=e.miPerfil.sector.descripcion):(this.sectorEjecutorFiltro.ejecutorCreador="",this.sectorEjecutorFiltro.sectorDescripcion=""),""==this.sectorEjecutorFiltro.ejecutorCreador?Bo.dispatch(tt()):Bo.dispatch(tt("?ejecutorCreador="+this.sectorEjecutorFiltro.ejecutorCreador+"&sectorDescripcion="+this.sectorEjecutorFiltro.sectorDescripcion))}if(t!=Ls&&t!=Ms||(Bo.dispatch(D("Atencion","Se dio como cumplido o descumplido la tarea","fondoOk",3e3)),this.cargaArbolDe0=!1,""==this.sectorEjecutorFiltro.ejecutorCreador?Bo.dispatch(tt()):Bo.dispatch(tt("?ejecutorCreador="+this.sectorEjecutorFiltro.ejecutorCreador+"&sectorDescripcion="+this.sectorEjecutorFiltro.sectorDescripcion))),t!=qs&&t!=$s||Bo.dispatch(D("Error!","No se pudo marcar como cumplido o descumplimiento, intente nuevamente","fondoError",3e3)),t==Us){let t={};t.tareaId=e.eventos.ejecutarTareaDarCumplimiento.idTarea,Bo.dispatch({type:ht,idTarea:t})}if(t==Bs){let t={};t.tareaId=e.eventos.ejecutarTareaQuitarCumplimiento.idTarea,Bo.dispatch((e=>({type:mt,idTarea:e}))(t))}if(t==Fs){this.cargaArbolDe0=!1;let t=null;-1!="-delete-edit-".indexOf("-"+e.entreComponentes.tareaCargaAAmparo_Retorno01.accion+"-")?this.arbol.map((r=>{r.map((r=>{r.id==e.entreComponentes.tareaCargaAAmparo_Retorno01.item.padre&&(t=r)}))})):t=e.entreComponentes.tareaCargaAAmparo_Retorno01.itemPadre,"plan"==t.clase?this.arbol[0].map((e=>{e.planId==t.planId&&(this.itemsSeleccionados[0]=e,this.itemsSeleccionados.splice(1),this.rama=0)})):this.arbol.map(((e,r)=>{e.map(((e,i)=>{r>0&&e.id==t.id&&(this.itemsSeleccionados[r]=t,this.itemsSeleccionados.splice(r+1),this.rama=r)}))})),""==this.sectorEjecutorFiltro.ejecutorCreador?Bo.dispatch(tt()):Bo.dispatch(tt("?ejecutorCreador="+this.sectorEjecutorFiltro.ejecutorCreador+"&sectorDescripcion="+this.sectorEjecutorFiltro.sectorDescripcion))}}static get properties(){return{mediaSize:{type:String,reflect:!0,attribute:"media-size"},layout:{type:String,reflect:!0},hidden:{type:Boolean,reflect:!0},area:{type:String},current:{type:String,reflect:!0}}}}window.customElements.define("amparos-screen",Gs);kn`<?xml version="1.0" standalone="no"?>
	<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
	 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
	<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
	 width="100%" height="100%" viewBox="0 0 100.000000 100.000000"
	 preserveAspectRatio="xMidYMid meet">
	<metadata>
	Created by potrace 1.16, written by Peter Selinger 2001-2019
	</metadata>
	<g transform="translate(0.000000,100.000000) scale(0.025000,-0.025000)"
	fill="#0195ad" stroke="none">
	<path d="M1769 3996 c-2 -2 -42 -10 -89 -16 -47 -6 -103 -16 -125 -21 -97 -25
	-121 -32 -140 -39 -11 -4 -45 -15 -75 -25 -133 -43 -402 -177 -467 -232 -14
	-13 -29 -23 -33 -23 -3 0 -15 -8 -26 -17 -10 -10 -37 -31 -59 -48 -96 -71
	-259 -234 -330 -330 -17 -22 -38 -49 -47 -59 -10 -11 -18 -23 -18 -26 0 -4
	-10 -19 -22 -33 -56 -65 -190 -334 -233 -467 -10 -30 -21 -64 -25 -75 -18 -47
	-47 -172 -61 -255 -6 -36 -13 -166 -16 -290 -6 -288 11 -419 86 -655 65 -205
	198 -461 315 -605 20 -25 49 -60 64 -79 41 -50 212 -220 252 -250 19 -14 37
	-29 40 -32 3 -3 37 -28 75 -55 258 -182 512 -287 835 -345 120 -22 569 -19
	690 4 209 41 409 109 570 196 36 19 75 39 87 45 13 6 23 14 23 19 0 4 4 7 10
	7 11 0 139 87 190 129 10 9 34 27 52 41 69 53 232 222 293 306 11 15 25 32 30
	38 41 45 135 201 189 311 57 119 64 137 99 245 84 259 92 312 92 635 0 269 -2
	289 -42 470 -28 131 -104 340 -161 445 -62 116 -186 309 -211 330 -3 3 -18 21
	-32 40 -23 30 -182 193 -244 248 -168 152 -485 325 -715 391 -25 8 -56 17 -70
	21 -120 39 -305 60 -533 60 -118 0 -216 -2 -218 -4z m141 -883 c0 -4 -9 -16
	-19 -27 -36 -40 -121 -189 -151 -267 -75 -195 -77 -363 -8 -583 24 -78 100
	-232 149 -302 74 -109 153 -282 183 -404 39 -160 44 -256 21 -390 -26 -154
	-51 -238 -107 -357 l-29 -63 -334 0 -335 0 0 245 0 245 -245 0 -245 0 0 710 0
	710 245 0 245 0 0 245 0 245 315 0 c173 0 315 -3 315 -7z m810 -238 l0 -245
	245 0 245 0 0 -710 0 -710 -245 0 -245 0 0 -245 0 -245 -305 0 c-168 0 -305 3
	-305 7 0 3 22 40 49 82 95 149 139 261 161 414 29 192 -45 447 -197 682 -212
	327 -264 627 -169 970 15 55 43 127 76 199 l22 46 334 0 334 0 0 -245z"/>
	</g>
	</svg>
`,kn`<?xml version="1.0" encoding="UTF-8" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg width="100%" height="100%" viewBox="0 0 68 68" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;"><clipPath id="_clip1"><rect id="Fondo" x="-252.16" y="0" width="320" height="101.76"/></clipPath><g clip-path="url(#_clip1)"><use xlink:href="#_Image2" x="0" y="0" width="67.84px" height="67.84px" transform="matrix(0.997647,0,0,0.997647,0,0)"/></g><defs><image id="_Image2" width="68px" height="68px" xlink:href="data:image/png;base64,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"/></defs></svg>`;const Vs=kn`<?xml version="1.0" encoding="UTF-8" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg width="100%" height="100%" viewBox="0 0 320 102" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;"><clipPath id="_clip1"><rect id="Fondo" x="0" y="0" width="320" height="101.76"/></clipPath><g clip-path="url(#_clip1)"><use xlink:href="#_Image2" x="0" y="0" width="320px" height="101.76px" transform="matrix(1,0,0,0.997647,0,0)"/></g><defs><image id="_Image2" width="320px" height="102px" xlink:href="data:image/png;base64,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"/></defs></svg>`,Qs="ui.media.timeStamp",Ys="screen.timeStamp";class Zs extends(Wn(Bo,Qs,Ys)(Vn)){constructor(){super(),this.hidden=!0,this.area="body",this.current=""}static get styles(){return Yo`
            ${cs}
            :host {
                display: grid;
                position: relative;
                height: 100%;
                width: 100%;
                background-color: var(--formulario);
                color: var(--on-formulario);
                grid-template-columns: 80%;
                grid-gap: 4rem;
                justify-content: center;
                justify-items: center;
                align-content: center;
                overflow-y: auto;
            }
            :host([hidden]) {
                display: none;
            }
            :host::-webkit-scrollbar {
                display: none;
            }
            #titulo {
            }
            label {
                padding-top: 5vh;
                font-size: var(--font-header-h1-size);
                font-weight: var(--font-header-h1-weight);
                color: var(--on-formulario);
                text-align: center;
            }
        `}render(){return En` <div id="titulo">${Vs}</div> `}stateChanged(e,t){if(t==Ys||t==Qs){this.mediaSize=e.ui.media.size,this.hidden=!0,this.current=e.screen.name;const t=q(e,this.area),r=-1!="-inicial-".indexOf("-"+e.screen.name+"-");t&&r&&(this.hidden=!1,this.update())}}sesion(){Bo.dispatch(Y("login"))}registro(){Bo.dispatch(Y("registro"))}registroUpdate(){Bo.dispatch(Y("registroUpdate"))}static get properties(){return{mediaSize:{type:String,reflect:!0,attribute:"media-size"},layout:{type:String,reflect:!0},hidden:{type:Boolean,reflect:!0},area:{type:String},current:{type:String,reflect:!0}}}}window.customElements.define("inicial-screen",Zs);const Ws=Yo`
	.dmd-input {
		display: grid;
		position: relative;
		grid-template-rows: auto auto auto;
		grid-gap: 0rem;
		color: var(--on-aplicacion);
		font-weight: 300;
	}
	.dmd-input input,
	.dmd-input textarea {
		/*padding: 0.15rem 0.6rem;*/
		padding: 0rem 0.6rem;
		color: var(--on-formulario);
		background-color: var(--formulario);
		border: 1px solid var(--primario);
		font-size: var(--font-bajada-size);
		outline: none;
		border-radius: 0.4rem;
		transition: all 0.3s ease-in-out;
	}
	.dmd-input input {
		height: 2.1rem;
	}
	.dmd-input input[disabled],
	.dmd-input textarea[disabled] {
		background-color: var(--formulario-disabled);
		color: var(--on-formulario-disable);
	}
	.dmd-input input:focus,
	.dmd-input textarea:focus {
		background-color: var(--aplicacion);
		color: var(--on-aplicacion);
		transition: all 0.3s ease-in-out;
	}
	.dmd-input input[type="date"] {
		/* width: 100%; */
	}

	.dmd-input input[error],
	.dmd-input textarea[error] {
		border: 1px solid var(--error);
	}
	.dmd-input label {
		color: var(--on-aplicacion);
		font-size: 0.9rem;
		padding-left: 0.6rem;
		transition: all 0.3s ease-in-out;
	}
	.dmd-input:focus-within label {
		color: var(--primario);
		transition: all 0.3s ease-in-out;
	}
	.dmd-input div {
		color: var(--error);
		font-size: 0.7rem;
		display: none;
	}
	.dmd-input input[error] + div,
	.dmd-input textarea[error] + div {
		display: grid;
	}
	::placeholder {
		/* Firefox, Chrome, Opera */
		color: var(--on-formulario-bajada);
	}
	.dmd-input span {
		margin-left: 0.5rem;
		font-size: 0.7rem;
		display: none;
	}
	.dmd-input[helper] span {
		display: grid;
	}
	.dmd-input[helper] input[error] ~ span,
	.dmd-input[helper] textarea[error] ~ span {
		display: none;
	}
	.dmd-input svg {
		display: none;
		position: absolute;
		top: 0.4rem;
		right: 0.1rem;
		height: 1.1rem;
		width: 1.1rem;
		transform: translateY(-50%) scale(0.9);
		fill: var(--error);
	}
	.dmd-input input[error] ~ svg,
	.dmd-input textarea[error] ~ svg {
		display: grid;
	}
`,Xs=Yo`
	.dmd-select {
		display: grid;
		position: relative;
		grid-template-rows: 1fr auto 1fr;
		grid-gap: 0rem;
		color: var(--on-formulario);
		font-weight: 300;
	}
	.dmd-select label {
		font-size: 0.9rem;
		padding-left: 0.6rem;
	}

	.dmd-select select {
		padding: 0rem 0.6rem;
		border: 1px solid var(--primario);
		color: var(--on-formulario);
		font-size: var(--font-bajada-size);
		outline: none;
		border-radius: 0.4rem;
		background-color: var(--formulario);
		-moz-appearance: none;
		-webkit-appearance: none;
		appearance: none;
		transition: all 0.3s ease-in-out;
	}
	.dmd-select select[disabled] {
		background-color: var(--formulario-disabled);
		color: var(--on-formulario-disable);
	}
	select:not([multiple]) {
		height: 2.1rem;
		padding: 0rem 2rem 0rem 0.6rem;
		background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAQAAAD9CzEMAAAAuklEQVRYhe2XsRGDMBAEN2NIgG7oDRDURQUaqIYO5MAzlmXLELyecfAbEe1m+gMM424WFl19IDDr6tUSUR8IOF198UTUHxyv70lD39OXTqR6IEmM5fWfiUGir9kz+jThqSSJji2jjwlPI9EDtKwZ/TOxyvWGYRj/QXP62LVyvT99rjc6ib7CXx6cnVqSGC5PpnhKjqdHv8hSnX7OlmJD+D2hoAdwX9Ox+Ix3unqAWVcfE8r/OKp6w8jxAAS9rp+ekk9nAAAAAElFTkSuQmCC) no-repeat 99% 50%;
		background-size: contain;
		background-color: var(--formulario);
	}
	:host([dispositivo="MOVIL"]) select {
		height: 2.1rem;
		background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAQAAAD9CzEMAAAAuklEQVRYhe2XsRGDMBAEN2NIgG7oDRDURQUaqIYO5MAzlmXLELyecfAbEe1m+gMM424WFl19IDDr6tUSUR8IOF198UTUHxyv70lD39OXTqR6IEmM5fWfiUGir9kz+jThqSSJji2jjwlPI9EDtKwZ/TOxyvWGYRj/QXP62LVyvT99rjc6ib7CXx6cnVqSGC5PpnhKjqdHv8hSnX7OlmJD+D2hoAdwX9Ox+Ix3unqAWVcfE8r/OKp6w8jxAAS9rp+ekk9nAAAAAElFTkSuQmCC) no-repeat 99% 50%;
		background-size: contain;
		background-color: var(--formulario);
	}

	.dmd-select select::-ms-expand {
		display: none;
	}
	.dmd-select select:focus {
		background-color: var(--aplicacion);
		color: var(--on-aplicacion);
	}
	.dmd-select select[error] {
		border: 1px solid var(--error);
	}

	.dmd-select:focus-within label {
		color: var(--primario);
		transition: all 0.3s ease-in-out;
	}
	.dmd-select div {
		color: var(--error);
		font-size: 0.7rem;
		display: none;
	}
	.dmd-select select[error] + div {
		display: grid;
	}
	.dmd-select span {
		margin-left: 0.5rem;
		font-size: 0.7rem;
		display: none;
	}
	.dmd-select[helper] span {
		display: grid;
	}
	.dmd-select[helper] select[error] ~ span {
		display: none;
	}
	.dmd-select svg {
		display: none;
		position: absolute;
		top: 0.4rem;
		right: 0.1rem;
		height: 1.1rem;
		width: 1.1rem;
		transform: translateY(-50%) scale(0.9);
		fill: var(--error);
	}
	.dmd-select select[error] ~ svg {
		display: grid;
	}
`,Js="autorizacion.aceptarUsuario.timeStamp",Ks="autorizacion.aceptarUsuario.errorTimeStamp",el="ui.media.timeStamp",tl="screen.timeStamp";class rl extends(Wn(Bo,Js,Ks,el,tl)(Vn)){constructor(){super(),this.hidden=!0,this.area="body",this.current="",this.accion="",this.item=null,this.sector=null}static get styles(){return Yo`
			${cs}
			${Ws}
			${Xs}
			:host {
				display: grid;
				position: relative;
				height: 100%;
				width: 100vw;
				background-color: var(--formulario);
				align-content: flex-start;
				grid-auto-flow: row;
				gap: 0;
			}
			:host([hidden]) {
				display: none;
			}
			#titulo {
				padding-top: 0.5rem;
				justify-self: center;
				color: var(--on-formulario);
				font-size: var(--font-header-h1-size);
				font-weight: var(--font-header-h1-weight);
			}
			#sub-titulo {
				padding-top: 0.5rem;
				justify-self: center;
				color: var(--on-formulario);
				font-size: var(--font-header-h2-size);
				font-weight: var(--font-header-h2-weight);
			}
			#cuerpo {
				display: grid;
				position: relative;
				width: 100%;
				background-color: var(--formulario);
				grid-template-columns: 60%;
				grid-auto-flow: row;
				justify-content: center;
				overflow-y: auto;
				grid-gap: 0.5rem;
			}
			:host([media-size="large"]) #cuerpo {
				width: 60%;
				place-self: center;
				border-radius: 2rem;
			}

			hr {
				border-top: 1px solid var(--on-formulario-bajada);
				width: 100%;
			}
			.dmd-button {
				justify-self: center;
			}
		`}get _usuario(){return this.shadowRoot.querySelector("#usuario")}get _apellido(){return this.shadowRoot.querySelector("#apellido")}get _nombre(){return this.shadowRoot.querySelector("#nombre")}get _sector(){return this.shadowRoot.querySelector("#sector")}get _email(){return this.shadowRoot.querySelector("#email")}get _contacto(){return this.shadowRoot.querySelector("#contacto")}get _botonAceptar(){return this.shadowRoot.getElementById("btnAceptar")}firstUpdated(){super.firstUpdated()}willUpdate(e){e.has("")}render(){return En`
			<div id="titulo">Autorizacion de Usuario</div>
			<div id="sub-titulo">Ingrese los datos faltantes, al administrador del sistema le enviará un mail autorizando su ingreso</div>
			<hr />
			<div id="cuerpo">
				<div class="dmd-input" helper>
					<label>Usuario</label>
					<input type="text" id="usuario" disabled autocomplete="off" autocomplete="off" placeholder="" value="" />
					<div>Debe ingresar el apellido</div>
					<span>Ingrese un texto</span>
					${ga}
				</div>

				<div class="dmd-input" helper>
					<label>Apellido</label>
					<input type="text" id="apellido" disabled autocomplete="off" autocomplete="off" placeholder="" value="" />
					<div>Debe ingresar el apellido</div>
					<span>Ingrese un texto</span>
					${ga}
				</div>

				<div class="dmd-input" helper>
					<label>Nombre</label>
					<input type="text" id="nombre" disabled autocomplete="off" autocomplete="off" placeholder="" value="" />
					<div>Debe ingresar el nombre</div>
					<span>Ingrese un texto</span>
					${ga}
				</div>

				<div class="dmd-select" helper ?hidden=${"edit"==this.accion}>
					<label>Sector</label>
					<select id="sector">
						<option value="-1" disabled selected hidden>Seleccione opcion</option>
						${Bo.getState().sectores.all.entities?Bo.getState().sectores.all.entities.map(((e,t)=>En`<option value=${e.id}>${e.descripcion}</option> `)):""}
					</select>
					<div>Debe cargar una opcion</div>
					<span>Seleccione un sector</span>
					${ga}
				</div>

				<div class="dmd-input" helper>
					<label>Email</label>
					<input type="text" id="email" ?disabled=${"view"==this.accion} autocomplete="off" autocomplete="off" placeholder="" value="" />
					<div>Debe ingresar el email</div>
					<span>Ingrese un texto</span>
					${ga}
				</div>

				<div class="dmd-input" helper>
					<label>Contacto</label>
					<input type="text" id="contacto" ?disabled=${"view"==this.accion} autocomplete="off" autocomplete="off" placeholder="" value="" />
					<div>Debe ingresar el contacto</div>
					<span>Ingrese datos para contactarse</span>
					${ga}
				</div>

				<button id="btnAceptar" class="dmd-button" normal bordeRedondo @click="${this.grabar}">Aceptar</button>
				<div style="height:2rem"></div>
			</div>
		`}stateChanged(e,t){if(t==tl||t==el){this.mediaSize=e.ui.media.size,this.hidden=!0,this.current=e.screen.name;const t=q(e,this.area),r=-1!="-solicitarAutorizacion-".indexOf("-"+e.screen.name+"-");t&&r&&(this.hidden=!1,this._usuario.value=e.miPerfil.usuario,this._apellido.value=e.miPerfil.apellido,this._nombre.value=e.miPerfil.nombre,this.update())}t==Js&&(Bo.dispatch(D("Atencion!","El Usuario fue actualizado correctamente","fondoOk",3e3)),Bo.dispatch(Y("esperarAutorizacion"))),t==Ks&&Bo.dispatch(D("Error!","No se pudo actualiza el usuario. Intente nuevamente","fondoError",3e3))}grabar(e){let t=e.currentTarget;[].forEach.call(this.shadowRoot.querySelectorAll("[error]"),(e=>{e.removeAttribute("error")}));var r=!0;if(""==this._usuario.value&&(r=!1,this._usuario.setAttribute("error","")),""==this._apellido.value&&(r=!1,this._apellido.setAttribute("error","")),""==this._nombre.value&&(r=!1,this._nombre.setAttribute("error","")),"-1"==this._sector.value&&(r=!1,this._sector.setAttribute("error","")),""!=this._email.value&&Va(this._email.value)||(r=!1,this._email.setAttribute("error","")),""==this._contacto.value&&(r=!1,this._contacto.setAttribute("error","")),r){let e={rol:"usuario"};e.sectorId=this._sector.value,e.contacto=this._contacto.value,e.token=Bo.getState().autorizacion.tokenAutentication,Bo.dispatch((e=>({type:ge,body:e}))(e))}else t.disabled=!1,Bo.dispatch(D("Atencion!","Falta cargar campos.","fondoError",3e3))}static get properties(){return{mediaSize:{type:String,reflect:!0,attribute:"media-size"},layout:{type:String,reflect:!0},hidden:{type:Boolean,reflect:!0},area:{type:String},current:{type:String,reflect:!0}}}}window.customElements.define("solicitar-autorizacion",rl);const il="ui.media.timeStamp",ol="screen.timeStamp";class nl extends(Wn(Bo,il,ol)(Vn)){constructor(){super(),this.hidden=!0,this.area="body",this.current=""}static get styles(){return Yo`
			${cs}
			:host {
				display: grid;
				height: 100%;
				width: 100%;
				background-color: var(--aplicacion);
				justify-content: center;
				align-content: flex-start;
				padding-top: 10rem;
			}
			:host([hidden]) {
				display: none;
			}
			#ventana {
				padding: 5rem;
				width: 40vw;
				border: solid 0.1px var(--on-formulario-bajada);
				font-size: var(--font-header-h1-size);
				font-weight: 200;
				background-color: var(--formulario);
				color: var(--on-formulario);
				box-shadow: 2px 2px 7px -1px var(--on-formulario-bajada);
				border-radius: 4px;
			}
		`}render(){return En` <div id="ventana">El administrador del sistema por el momento no autorizó su ingreso al sistema. Aguarde el mail de confirmación.</div> `}stateChanged(e,t){if(t==ol||t==il){this.mediaSize=e.ui.media.size,this.hidden=!0,this.current=e.screen.name;const t=q(e,this.area),r=-1!="-esperarAutorizacion-".indexOf("-"+e.screen.name+"-");t&&r&&(this.hidden=!1,this.update())}}static get properties(){return{mediaSize:{type:String,reflect:!0,attribute:"media-size"},layout:{type:String,reflect:!0},hidden:{type:Boolean,reflect:!0},area:{type:String},current:{type:String,reflect:!0}}}}window.customElements.define("esperar-autorizacion",nl);const al="ui.media.timeStamp",sl="screen.timeStamp",ll="entreComponentes.busqueDescripcion_Load01.timeStamp";class dl extends(Wn(Bo,ll,al,sl)(Vn)){constructor(){super(),this.hidden=!0,this.area="body",this.current="",this.accion="",this.item={}}static get styles(){return Yo`
			${cs}
			${Ws}
			${Xs}
			:host {
				display: grid;
				position: fixed;
				top: 0;
				left: 0;
				height: 100vh;
				width: 100vw;
				background-color: rgba(0, 0, 0, 0.4);
				z-index: 990;
			}
			:host([hidden]) {
				display: none;
			}
			#cuerpo {
				display: grid;
				position: relative;
				height: max-content;
				width: 100%;
				background-color: var(--formulario);
				color: var(--on-formulario);
				grid-template-columns: 80%;
				grid-gap: 0rem;
				justify-content: center;
				align-content: flex-start;
				overflow-y: auto;
			}
			:host([media-size="large"]) #cuerpo {
				width: 40%;
				place-self: center;
				border-radius: 2rem;
			}
			#titulo {
				font-size: 1.2rem;
				padding-top: 2rem;
				height: 2rem;
				justify-self: center;
			}
			hr {
				border-top: 1px solid var(--on-formulario-separador);
				width: 100%;
			}
			#datos {
				display: grid;
				position: relative;
				width: 90%;
				height: 100%;
				grid-auto-flow: row;
				grid-gap: 1rem;
				overflow-y: auto;
				overflow-x: hidden;
				justify-self: center;
			}
			#datos::-webkit-scrollbar {
				display: none;
			}
			.dmd-button {
				justify-self: center;
			}
			.x {
				display: grid;
				position: absolute;
				top: 1rem;
				right: 1rem;
				font-size: 1.2rem;
				color: var(--on-formulario);
				cursor: pointer;
			}
		`}get _descripcion(){return this.shadowRoot.querySelector("#descripcion")}get _sector(){return this.shadowRoot.querySelector("#sector")}get _botonAceptar(){return this.shadowRoot.getElementById("btnAceptar")}firstUpdated(){super.firstUpdated()}willUpdate(e){e.has("hidden")&&(this.hidden||this._sector&&(this._sector.value="-1"))}render(){if(this.item)return En`
				<div id="cuerpo">
					<div class="x" @click="${this.volver}">X</div>
					<div id="titulo">${this.item.titulo}</div>
					<hr />
					<div id="datos">
						${"creador"!=this.item.campo&&"ejecutor"!=this.item.campo?En` <div class="dmd-input" helper>
									<label>${this.item.caption}</label>
									<input type="text" id="descripcion" autocomplete="off" autocomplete="off" placeholder="" value="" />
									<div>Debe ingresar el dato a buscar</div>
									<span>Ingrese el dato a buscars</span>
									${ga}
							  </div>`:En` <div class="dmd-select" helper }>
									<label>${this.item.caption}</label>
									<select id="sector">
										<!-- <option value="TODOS" selected>Todos los sectores</option> -->
										<option value="-1" disabled selected hidden>Seleccione opcion</option>
										${Bo.getState().sectores.all.entities?Bo.getState().sectores.all.entities.map(((e,t)=>En`<option value=${e.descripcion}>${e.descripcion}</option> `)):""}
									</select>
									<div>Debe cargar una opcion</div>
									<span>Seleccione un sector</span>
									${ga}
							  </div>`}
						<button id="btnAceptar" class="dmd-button" normal bordeRedondo @click="${this.grabar}">Aceptar</button>
						<div style="height:2rem"></div>
					</div>
				</div>
			`}stateChanged(e,t){t!=sl&&t!=al||(this.mediaSize=e.ui.media.size,this.current=e.screen.name),t==ll&&(this.item=e.entreComponentes.busqueDescripcion_Load01.descripciones,this.accion=e.entreComponentes.busqueDescripcion_Load01.accion,[].forEach.call(this.shadowRoot.querySelectorAll("[error]"),(e=>{e.removeAttribute("error")})),this.hidden=!1)}volver(){this.hidden=!0}grabar(e){let t="",r=e.currentTarget;r.disabled=!0,[].forEach.call(this.shadowRoot.querySelectorAll("[error]"),(e=>{e.removeAttribute("error")}));var i=!0;let o="";"creador"!=this.item.campo&&"ejecutor"!=this.item.campo?(""==this._descripcion.value&&(i=!1,this._descripcion.setAttribute("error","")),o=this._descripcion.value):"-1"==this._sector.value?(i=!1,this._sector.setAttribute("error","")):o=this._sector.value,r.disabled=!1,i?("creador"!=this.item.campo&&"ejecutor"!=this.item.campo?Bo.dispatch(((e,t)=>({type:pr,campo:e,valor:t}))(this.item.campo,o)):Bo.dispatch(((e,t)=>({type:hr,campo:e,valor:t}))(this.item.campo,o)),this.hidden=!0):(""==t&&(t="Falta cargar campos."),Bo.dispatch(D("Atencion!",t,"fondoError",3e3)))}static get properties(){return{mediaSize:{type:String,reflect:!0,attribute:"media-size"},layout:{type:String,reflect:!0},hidden:{type:Boolean,reflect:!0},area:{type:String},current:{type:String,reflect:!0}}}}window.customElements.define("busqueda-descripcion-screen",dl);const cl="ui.media.timeStamp",ul="screen.timeStamp",pl="tareas.byId.timeStamp",hl="tareas.byId.errorTimeStamp",ml="entreComponentes.tareaCarga_Load01.timeStamp",fl="entreComponentes.tareaCarga_Load02.timeStamp",gl="entreComponentes.tareaCarga_Load03.timeStamp",vl="planes.addSimpleTimeStamp",bl="planes.addLapsoTimeStamp",yl="planes.addFechaTimeStamp",wl="planes.commandErrorTimeStamp",Sl="tareas.addSimpleTimeStamp",Al="tareas.addLapsoTimeStamp",_l="tareas.addFechaTimeStamp",xl="tareas.commandErrorTimeStamp",Tl="tareas.removeTimeStamp",El="tareas.commandErrorTimeStamp",kl="tareas.updateTimeStamp";class Cl extends(Wn(Bo,kl,"tareas.commandErrorTimeStamp",Tl,El,Sl,Al,_l,xl,vl,bl,yl,wl,pl,hl,ml,fl,gl,cl,ul)(Vn)){constructor(){super(),this.hidden=!0,this.area="body",this.current="",this.accion="",this.item={},this.origen="",this.plan_tarea={},this.tarea={},this.tipoTarea="",this.body={},this.camposEditables=!0}static get styles(){return Yo`
			${cs}
			${Ws}
			${Xs}
			:host {
				display: grid;
				position: fixed;
				top: 0;
				left: 0;
				height: 100vh;
				width: 100vw;
				background-color: rgba(0, 0, 0, 0.4);
				z-index: 990;
			}
			:host([hidden]) {
				display: none;
			}
			#cuerpo {
				display: grid;
				position: relative;
				height: max-content;
				width: 100%;
				background-color: var(--formulario);
				grid-template-columns: 80%;
				grid-gap: 0rem;
				justify-content: center;
				align-content: flex-start;
				overflow-y: auto;
				overflow-x: hidden;
			}
			:host([media-size="large"]) #cuerpo {
				width: 38rem;
				place-self: center;
				border-radius: 2rem;
			}
			#titulo {
				font-size: 1.2rem;
				padding-top: 2rem;
				height: 2rem;
				justify-self: center;
				color: var(--on-formulario);
				font-weight: bolder;
			}

			label {
				font-weight: bold;
				padding-bottom: 0.2rem;
			}
			hr {
				border-top: 1px solid var(--on-formulario-separador);
				width: 100%;
				margin: 1rem 0;
			}
			#datos {
				display: grid;
				position: relative;
				height: 100%;
				width: 100%;
				grid-auto-flow: row;
				grid-gap: 1rem;
				justify-self: center;
				overflow-y: scroll;
				overflow-x: hidden;
			}
			#datos::-webkit-scrollbar {
				display: none;
			}
			.dmd-button {
				justify-self: center;
			}
			.x {
				display: grid;
				position: absolute;
				top: 1rem;
				right: 1rem;
				font-size: 1.2rem;
				color: var(--on-formulario);
				cursor: pointer;
			}
			*[hidden] {
				display: none !important;
			}
			#div-sector {
				display: grid;
				grid-template-columns: auto auto;
				align-items: center;
				gap: 0.6rem;
			}
			#div-dias {
				display: grid;
				grid-auto-flow: column;
				font-size: var(--font-bajada-size);
				color: var(--on-formulario);
				align-items: center;
				gap: 0.6rem;
			}

			span {
				margin-top: 0.2rem;
			}

			/*  #creador {
                width: 100%;
            }
            #ejecutor {
                width: 100%;
            }
            #vigencia {
                width: 85%;
            }
            #vencimiento {
                width: 85%;
            }
            #alerta {
                width: 85%;
            }
 */
			.caption {
				color: var(--on-formulario-bajada);
			}
			.caption svg {
				fill: var(--on-formulario-bajada);
				cursor: auto;
			}
			.lineas {
				display: grid;
				grid-auto-flow: column;
				font-size: var(--font-bajada-size);
				color: var(--on-formulario);
				align-self: center;
				gap: 0.6rem;
			}
			.lineas > div {
				display: grid;
				justify-content: start;
				justify-items: start;
				gap: 0.5rem;
			}
			.center {
				justify-self: center;
			}
			.end {
				justify-self: end;
			}
			input[type="number"],
			input[type="date"] {
				width: 8rem;
				text-align: right;
			}
			.tareas {
				display: grid;
				grid-auto-flow: column;
				font-size: var(--font-bajada-size);
				color: var(--on-formulario);
				align-self: center;
				gap: 0.6rem;
				justify-content: center;
			}
			.tareas > div {
				display: grid;
				justify-content: start;
				justify-items: start;
				gap: 0.5rem;
			}
		`}get _creador(){return this.shadowRoot.querySelector("#creador")}get _ejecutor(){return this.shadowRoot.querySelector("#ejecutor")}get _vigencia(){return this.shadowRoot.querySelector("#vigencia")}get _vencimiento(){return this.shadowRoot.querySelector("#vencimiento")}get _alerta(){return this.shadowRoot.querySelector("#alerta")}get _descripcion(){return this.shadowRoot.querySelector("#descripcion")}get _instrucciones(){return this.shadowRoot.querySelector("#instrucciones")}get _diaDelMes(){return this.shadowRoot.querySelector("#diaDelMes")}get _lapsoEnDias(){return this.shadowRoot.querySelector("#lapsoEnDias")}get _cantidad(){return this.shadowRoot.getElementById("cantidad")}get _botonAceptar(){return this.shadowRoot.getElementById("btnAceptar")}firstUpdated(){super.firstUpdated()}willUpdate(e){e.has("mostrar")}render(){return En`
				<div id="cuerpo" tabindex="1">
					<div class="x" @click="${this.volver}">X</div>
					<div id="titulo" ?hidden=${"add"!=this.accion}>NUEVA TAREA</div>
					<div id="titulo" ?hidden=${"view"!=this.accion}>VISUALIZACIÓN DE TAREA</div>
					<div id="titulo" ?hidden=${"edit"!=this.accion}>MODIFICACIÓN DE TAREA</div>
					<div id="titulo" ?hidden=${"delete"!=this.accion}>ELIMINAR TAREA</div>
					<hr />
					<div id="datos">
						<div class="dmd-input" helper>
							<label>DESCRIPCIÓN</label>
							<input id="descripcion" placeholder="Ingrese breve descripción de la tarea" ?disabled=${!this.camposEditables} />
							<div>Debe ingresar la descripcion de la tarea</div>
							${ga}
						</div>
						<div id="div-sector">
							<div class="dmd-select" helper ?hidden=${"edit"==this.accion}>
								<label>SECTOR ORIGINANTE</label>
								<select id="creador" ?disabled=${!0}>
									${Bo.getState().sectores.all.entities?Bo.getState().sectores.all.entities.map(((e,t)=>En`<option ?selected=${this.selectedEjecutor(e.id)} value=${e.id}>${e.descripcion}</option> `)):""}
								</select>
								<div>Debe cargar una opcion</div>
								${ga}
							</div>

							<div class="dmd-select" helper ?hidden=${"edit"==this.accion}>
								<label>SECTOR EJECUTOR</label>
								<select id="ejecutor" ?disabled=${!this.camposEditables}>
									<option value="-1" disabled selected hidden>Seleccione opción</option>
									${Bo.getState().sectores.all.entities?Bo.getState().sectores.all.entities.map(((e,t)=>En`<option ?selected=${this.tarea?.ejecutor?.id&&e.id==this.tarea.ejecutor.id} value=${e.id}>${e.descripcion}</option> `)):""}
								</select>
								<div>Debe cargar una opción</div>
								${ga}
							</div>
						</div>

						<div class="lineas" ?hidden=${"edit"==this.accion}>
							<div title="fecha de inicio">
								<div class="caption">${Ua}</div>
								<div class="dmd-input" helper ?hidden=${"edit"==this.accion}>
									<input type="date" id="vigencia" min=${(new Date).toISOString().substring(0,10)} autocomplete="off" autocomplete="off" placeholder="" ?disabled=${!this.camposEditables} />
									<div>Debe ingresar fecha de inicio</div>
									<span>Fecha de inicio</span>
								</div>
							</div>
							<div title="fecha de alerta" class="center">
								<div class="caption center">${Ma}</div>
								<div class="dmd-input" helper ?hidden=${"edit"==this.accion}>
									<input type="number" id="alerta" min=${(new Date).toISOString().substring(0,10)} autocomplete="off" autocomplete="off" placeholder="" ?disabled=${!this.camposEditables} />
									<div>Ingrese fecha de alerta</div>
									<span>Alerta al vencimiento</span>
								</div>
							</div>
							<div title="fecha de vencimiento" class="end">
								<div class="caption end">${Ba}</div>
								<div class="dmd-input" helper ?hidden=${"edit"==this.accion}>
									<input type="date" id="vencimiento" min=${(new Date).toISOString().substring(0,10)} autocomplete="off" autocomplete="off" placeholder="" ?disabled=${!this.camposEditables} />
									<div>Ingrese fecha de vencimiento</div>
									<span>Fecha de vencimiento</span>
								</div>
							</div>
						</div>
						<!-- Solo para fecha -->
						<div class="tareas">
							<div title="Dia del mes">
								<div class="caption center" ?hidden=${"fecha"!=this.tipoTarea||"edit"==this.accion}>${Fa}</div>
								<div class="dmd-input" helper ?hidden=${"fecha"!=this.tipoTarea||"edit"==this.accion}>
									<input type="number" id="diaDelMes" autocomplete="off" autocomplete="off" placeholder="" min="1" max="30" ?disabled=${!this.camposEditables} />
									<span>Ingrese el dia del mes</span>

									${ga}
								</div>
							</div>

							<!-- Solo para Lapso -->
							<div title="Lapso en dias" ?hidden=${"lapso"!=this.tipoTarea}>
								<div class="caption center" ?hidden=${"lapso"!=this.tipoTarea||"edit"==this.accion}>${Ha}</div>
								<div class="dmd-input" helper ?hidden=${"lapso"!=this.tipoTarea||"edit"==this.accion}>
									<input type="number" id="lapsoEnDias" autocomplete="off" autocomplete="off" placeholder="" ?disabled=${!this.camposEditables} />

									<span>Ingrese el lapso en dias</span>
									${ga}
								</div>
							</div>
							<div title="Cantidad De repeticiones">
								<div class="caption center" ?hidden=${"simple"==this.tipoTarea||"edit"==this.accion}>${Na}</div>
								<div class="dmd-input" helper ?hidden=${"simple"==this.tipoTarea||"edit"==this.accion}>
									<input type="number" id="cantidad" autocomplete="off" autocomplete="off" placeholder="" ?disabled=${!this.camposEditables} />

									<span>Ingrese la cantidad</span>
									${ga}
								</div>
							</div>
						</div>

						<div class="dmd-input" helper>
							<label>INSTRUCCIONES</label>
							<textarea id="instrucciones" placeholder="Ingresar las instrucciones de la tarea" rows="5" ?disabled=${!this.camposEditables}></textarea>
							<div>Debe ingresar las instrucciones de la tarea</div>
							${ga}
						</div>
						<button id="btnAceptar" class="dmd-button" normal bordeRedondo @click="${this.grabar}" ?hidden=${"view"==this.accion}>Aceptar</button>
						<div style="height:1rem"></div>
					</div>
				</div>
			`}selectedEjecutor(e){let t=!1;return"add"==this.accion&&(t=e==Bo.getState().autorizacion.entities.result.sectores[0].id),"add"!=this.accion&&(t=e==this.tarea?.creador?.id),t}stateChanged(e,t){if(t!=ul&&t!=cl||(this.mediaSize=e.ui.media.size,this.current=e.screen.name),t==pl&&"amparos"==e.screen.name){this.tarea=e.tareas.byId.entities;new Date(this.tarea.vigenteDesde.substring(0,10));let t=new Date(this.tarea.vencimiento.substring(0,10)),r=new Date(this.tarea.alerta.substring(0,10));this._vigencia.value=Ja(this.tarea.vigenteDesde),this._vencimiento.value=Ja(this.tarea.vencimiento),this._alerta.value=(t-r)/864e5,this._descripcion.value=this.tarea.descripcion,this._instrucciones.value=this.tarea.instrucciones,this.hidden=!1,this.update()}var r;t==hl&&"amparos"==e.screen.name&&Bo.dispatch(D("Atencion!","No se puede mostrar la tarea, intente nuevamente","fondoError",3e3)),t!=vl&&t!=bl&&t!=yl||this.hidden||(this.hidden=!0,this._botonAceptar.disabled=!1,Bo.dispatch(D("Atencion!","La tarea se agrego correctamente","fondoOk",3e3)),Bo.dispatch(_r(this.body,this.item,"add"))),t!=Sl&&t!=Al&&t!=_l||this.hidden||(this.hidden=!0,this._botonAceptar.disabled=!1,Bo.dispatch(D("Atencion!","La tarea se agrego correctamente","fondoOk",3e3)),Bo.dispatch(_r(this.body,this.item,"add"))),t!=wl||this.hidden||(this._botonAceptar.disabled=!1,Bo.dispatch(D("Atencion!","No se pudo agregar la tarea, intente nuevamente","fondoError",3e3))),t!=Tl||this.hidden||(this.hidden=!0,this._botonAceptar.disabled=!1,Bo.dispatch(D("Atencion!","La tarea se elimino correctamente","fondoOk",3e3)),Bo.dispatch(_r(this.item,null,"delete"))),t!=kl||this.hidden||(this.hidden=!0,this._botonAceptar.disabled=!1,Bo.dispatch(D("Atencion!","La tarea se modifica correctamente","fondoOk",3e3)),Bo.dispatch(_r(this.item,null,"edit"))),t!=ml&&t!=fl&&t!=gl||(t==ml?(this.tipoTarea="simple",this.item=e.entreComponentes.tareaCarga_Load01.item,this.accion=e.entreComponentes.tareaCarga_Load01.accion,this.plan_tarea=e.entreComponentes.tareaCarga_Load01.item,this.origen=this.item.clase):t==fl?(this.tipoTarea="lapso",this.item=e.entreComponentes.tareaCarga_Load02.item,this.accion=e.entreComponentes.tareaCarga_Load02.accion,this.plan_tarea=e.entreComponentes.tareaCarga_Load02.item,this.origen=this.item.clase):t==gl&&(this.tipoTarea="fecha",this.item=e.entreComponentes.tareaCarga_Load03.item,this.accion=e.entreComponentes.tareaCarga_Load03.accion,this.plan_tarea=e.entreComponentes.tareaCarga_Load03.item,this.origen=this.item.clase),"view"==this.accion?this.camposEditables=!1:"delete"==this.accion?(this.camposEditables=!1,this._botonAceptar.innerText="Eliminar tarea"):"add"==this.accion?(this.camposEditables=!0,this._botonAceptar.innerText="Agregar tarea"):"edit"==this.accion?(this.camposEditables=!0,this._botonAceptar.innerText="Modifcar tarea"):(this.camposEditables=!1,this._botonAceptar.innerText="Aceptar"),[].forEach.call(this.shadowRoot.querySelectorAll("[error]"),(e=>{e.removeAttribute("error")})),"add"==this.accion?(this.tarea=null,this._creador.value=Bo.getState().autorizacion.entities.result.sectores[0].id?Bo.getState().autorizacion.entities.result.sectores[0].id:-1,this._ejecutor.value=this._creador.value,this._vigencia.value=Wa(),this._vencimiento.value=Wa(),this._alerta.value="5",this._descripcion.value="",this._instrucciones.value="",this._lapsoEnDias.value="1",this._diaDelMes.value="1",this._cantidad.value="",this.hidden=!1):"view"!=this.accion&&"delete"!=this.accion&&"edit"!=this.accion||Bo.dispatch((r=this.plan_tarea.id,{type:ot,id:r,success:gt,error:Dt})))}volver(){this.hidden=!0}grabar(e){if("delete"==this.accion)return this.body={},this.body.tareaId=this.tarea.id,void Bo.dispatch((t=this.body,{type:ut,id:t,token:r}));var t,r;let i="";this._botonAceptar.disabled=!0,[].forEach.call(this.shadowRoot.querySelectorAll("[error]"),(e=>{e.removeAttribute("error")}));var o=!0;if(""==this._descripcion.value&&(o=!1,this._descripcion.setAttribute("error","")),""==this._instrucciones.value&&(o=!1,this._instrucciones.setAttribute("error","")),"edit"==this.accion&&o)return this.body={},this.body.tareaId=this.tarea.id,this.body.descripcion=this._descripcion.value,this.body.instrucciones=this._instrucciones.value,void Bo.dispatch(((e,t,r)=>({type:ct,id:e,body:t,token:r}))(null,this.body));"-1"==this._creador.value&&(o=!1,this._creador.setAttribute("error","")),"-1"==this._ejecutor.value&&(o=!1,this._ejecutor.setAttribute("error","")),""!=this._vigencia.value&&new Date(this._vigencia.value)?new Date(this._vigencia.value+"T23:59:59")<new Date&&(o=!1,this._vigencia.setAttribute("error",""),i="La fecha de vigencia debe ser mayor o igual que hoy"):(o=!1,this._vigencia.setAttribute("error","")),""!=this._vencimiento.value&&new Date(this._vencimiento.value)?new Date(this._vencimiento.value+"T00:00:00")<new Date(this._vigencia.value+"T00:00:00")&&(o=!1,this._vencimiento.setAttribute("error",""),i="La fecha de vencimiento debe ser mayor o igual a la fecha de vigencia"):(o=!1,this._vencimiento.setAttribute("error","")),""==this._alerta.value||"0"==this._alerta.value?(o=!1,this._alerta.setAttribute("error","")):parseInt(this._alerta.value,10)>(new Date(this._vencimiento.value).getTime()-new Date(this._vigencia.value).getTime())/864e5&&(o=!1,this._vencimiento.setAttribute("error",""),this._alerta.setAttribute("error",""),i="Los dias de alerta debe ser menor"),"lapso"==this.tipoTarea?""==this._lapsoEnDias.value&&(o=!1,this._lapsoEnDias.setAttribute("error","")):"fecha"==this.tipoTarea&&""==this._diaDelMes.value&&(o=!1,this._diaDelMes.setAttribute("error","")),"simple"!=this.tipoTarea&&""==this._cantidad.value&&(o=!1,this._cantidad.setAttribute("error","")),o?(this.body={},this.body.planId=this.plan_tarea.planId,this.body.creadorId=this._creador.value,this.body.ejecutorId=this._ejecutor.value,this.body.vigenteDesde=this._vigencia.value,this.body.venceEn=(new Date(this._vencimiento.value).getTime()-new Date(this._vigencia.value).getTime())/864e5,this.body.alerta=parseInt(this._alerta.value,10),this.body.descripcion=this._descripcion.value,this.body.instrucciones=this._instrucciones.value,"lapso"==this.tipoTarea?(this.body.cantidad=this._cantidad.value,this.body.lapsoEnDias=this._lapsoEnDias.value):"fecha"==this.tipoTarea&&(this.body.cantidad=this._cantidad.value,this.body.diaDelMes=this._diaDelMes.value),"plan"==this.origen?"simple"==this.tipoTarea?Bo.dispatch(((e,t)=>({type:Ce,body:e,token:t}))(this.body)):"lapso"==this.tipoTarea?Bo.dispatch(((e,t)=>({type:De,body:e,token:t}))(this.body)):"fecha"==this.tipoTarea&&Bo.dispatch(((e,t)=>({type:Re,body:e,token:t}))(this.body)):(this.body.tareaId=this.plan_tarea.id,"simple"==this.tipoTarea?Bo.dispatch(((e,t)=>({type:st,body:e,token:t}))(this.body)):"lapso"==this.tipoTarea?Bo.dispatch(((e,t)=>({type:lt,body:e,token:t}))(this.body)):"fecha"==this.tipoTarea&&Bo.dispatch(((e,t)=>({type:dt,body:e,token:t}))(this.body)))):(this._botonAceptar.disabled=!1,""==i&&(i="Falta cargar campos."),Bo.dispatch(D("Atencion!",i,"fondoError",3e3)))}static get properties(){return{tipoTarea:{type:String,reflect:!0},mediaSize:{type:String,reflect:!0,attribute:"media-size"},layout:{type:String,reflect:!0},hidden:{type:Boolean,reflect:!0},area:{type:String},current:{type:String,reflect:!0}}}}window.customElements.define("tarea-carga-screen",Cl);const Dl="ui.media.timeStamp",Rl="screen.timeStamp",Il="planes.byId.timeStamp",jl="planes.byId.errorTimeStamp",Ol="planes.addTimeStamp",zl="planes.updateTimeStamp",Pl="planes.commandErrorTimeStamp",Ll="planes.removeTimeStamp",ql="entreComponentes.planCarga_Load01.timeStamp";class Ul extends(Wn(Bo,Ll,Ol,Pl,Il,jl,zl,ql,Dl,Rl)(Vn)){constructor(){super(),this.hidden=!0,this.area="body",this.current="",this.accion="",this.item={},this.plan_tarea={},this.plan={}}static get styles(){return Yo`
			${cs}
			${Ws}
			${Xs}
			:host {
				display: grid;
				position: fixed;
				top: 0;
				left: 0;
				height: 100vh;
				width: 100vw;
				background-color: rgba(0, 0, 0, 0.4);
				z-index: 990;
			}
			:host([hidden]) {
				display: none;
			}
			#cuerpo {
				display: grid;
				position: relative;
				height: max-content;
				width: 100%;
				background-color: var(--formulario);
				grid-template-columns: 80%;
				grid-gap: 0rem;
				justify-content: center;
				align-content: flex-start;
				overflow-y: auto;
			}
			:host([media-size="large"]) #cuerpo {
				width: 40%;
				place-self: center;
				border-radius: 2rem;
			}
			#titulo {
				font-size: 1.2rem;
				padding-top: 2rem;
				height: 2rem;
				justify-self: center;
				color: var(--on-formulario);
			}
			hr {
				border-top: 1px solid var(--on-formulario-separador);
				width: 100%;
			}
			#datos {
				display: grid;
				position: relative;
				width: 90%;
				height: 100%;
				grid-auto-flow: row;
				grid-gap: 1rem;
				justify-self: center;
				overflow-y: auto;
			}
			#datos::-webkit-scrollbar {
				display: none;
			}
			.dmd-button {
				justify-self: center;
			}
			.x {
				display: grid;
				position: absolute;
				top: 1rem;
				right: 1rem;
				font-size: 1.2rem;
				color: var(--on-formulario);
				cursor: pointer;
			}
			*[hidden] {
				display: none;
			}
			svg {
				fill: var(--on-formulario);
			}
		`}get _descripcion(){return this.shadowRoot.querySelector("#descripcion")}get _urlReferencia(){return this.shadowRoot.querySelector("#urlReferencia")}get _botonAceptar(){return this.shadowRoot.getElementById("btnAceptar")}firstUpdated(){super.firstUpdated()}willUpdate(e){e.has("mostrar")}render(){return En`
				<div id="cuerpo">
					<div class="x" @click="${this.volver}">X</div>
					<div id="titulo" ?hidden=${"add"!=this.accion}>Nuevo Plan</div>
					<div id="titulo" ?hidden=${"view"!=this.accion}>Visualizacion del Plan</div>
					<div id="titulo" ?hidden=${"edit"!=this.accion}>Modificacion del Plan</div>
					<div id="titulo" ?hidden=${"delete"!=this.accion}>Eliminar del Plan</div>
					<hr />
					<div id="datos">
						<div class="dmd-input" helper>
							<label>Descripcion</label>
							<textarea id="descripcion" placeholder="" value="" rows="5" ?disabled=${"view"==this.accion||"delete"==this.accion}></textarea>
							<div>Debe ingresar una descripcion</div>
							<span>Ingrese un texto</span>
							${ga}
						</div>

						<div class="dmd-input" helper>
							<label>Identificador del plan</label>
							<input type="text" id="urlReferencia" autocomplete="off" autocomplete="off" placeholder="" ?disabled=${"view"==this.accion||"delete"==this.accion} />
							<div>Debe ingresar el identificador</div>
							<span>Ingrese un texto</span>
							${ga}
						</div>

						<button id="btnAceptar" class="dmd-button" normal bordeRedondo @click="${this.grabar}" ?hidden=${"view"==this.accion}>Aceptar</button>
						<div style="height:2rem"></div>
					</div>
				</div>
			`}stateChanged(e,t){t!=Rl&&t!=Dl||(this.mediaSize=e.ui.media.size,this.current=e.screen.name),t==Il&&"amparos"==e.screen.name&&(this.plan=e.planes.byId.entities,this._descripcion.value=this.plan.descripcion,this._urlReferencia.value=this.plan.urlReferencia,this.hidden=!1,this.update()),t==jl&&"amparos"==e.screen.name&&Bo.dispatch(D("Atencion!","No se puede mostrar el amparo, intente nuevamente","fondoError",3e3)),t==Ol&&"amparos"==e.screen.name&&(this.hidden=!0,Bo.dispatch(D("Atencion!","El amparo se actualizo","fondoOk",3e3))),t==zl&&"amparos"==e.screen.name&&(this.hidden=!0,Bo.dispatch(D("Atencion!","El amparo se actualizo","fondoOk",3e3))),t==Ll&&"amparos"==e.screen.name&&(this.hidden=!0,Bo.dispatch(tt()),Bo.dispatch(D("Atencion!","El amparo se actualizo","fondoOk",3e3))),t==Pl&&"amparos"==e.screen.name&&Bo.dispatch(D("Atencion!","No se actualizo el amparo, intente nuevamente","fondoError",3e3)),t==ql&&(this.plan_tarea=e.entreComponentes.planCarga_Load01.item,this.item=e.entreComponentes.planCarga_Load01.item,this.accion=e.entreComponentes.planCarga_Load01.accion,[].forEach.call(this.shadowRoot.querySelectorAll("[error]"),(e=>{e.removeAttribute("error")})),"add"==this.accion?(this._descripcion.value="",this._urlReferencia.value="",this.plan=null,this.hidden=!1):("view"==this.accion||"edit"==this.accion||"delete"==this.accion)&&Bo.dispatch(et(this.plan_tarea.planId)))}volver(){this.hidden=!0}grabar(e){let t="",r=e.currentTarget;r.disabled=!0,[].forEach.call(this.shadowRoot.querySelectorAll("[error]"),(e=>{e.removeAttribute("error")}));var i,o=!0;if(""==this._descripcion.value&&(o=!1,this._descripcion.setAttribute("error","")),""==this._urlReferencia.value&&(o=!1,this._urlReferencia.setAttribute("error","")),r.disabled=!1,o){let e={};e.urlReferencia=this._urlReferencia.value,e.descripcion=this._descripcion.value,"edit"==this.accion?(e.id=this.plan_tarea.planId,Bo.dispatch(((e,t)=>({type:Ie,body:e,token:t}))(e))):"add"==this.accion?Bo.dispatch(((e,t)=>({type:ke,body:e,token:t}))(e)):"delete"==this.accion&&(e={},e.planId=this.plan_tarea.planId,Bo.dispatch({type:je,id:e,token:i}))}else""==t&&(t="Falta cargar campos."),Bo.dispatch(D("Atencion!",t,"fondoError",3e3))}static get properties(){return{mediaSize:{type:String,reflect:!0,attribute:"media-size"},layout:{type:String,reflect:!0},hidden:{type:Boolean,reflect:!0},area:{type:String},current:{type:String,reflect:!0}}}}window.customElements.define("plan-carga-screen",Ul);const Ml=e=>class extends e{constructor(){super()}firstUpdated(){super.firstUpdated();let e=this.shadowRoot.querySelector(".dmd-grid-cabecera-find-buscar"),t=this.shadowRoot.querySelector(".dmd-grid-cabecera-find-cerrar"),r=this.shadowRoot.querySelector(".dmd-grid-cabecera-find-input");e&&e.addEventListener("click",this.__findMostarDmdGrid.bind(this)),t&&t.addEventListener("click",this.__findCerrarDmdGrid.bind(this)),r&&r.addEventListener("input",this._buscarDmdGrid.bind(this)),this.camposOrden={},[].forEach.call(this.shadowRoot.querySelectorAll("[dmd-grid-orden]"),(e=>{e.campo&&(this.camposOrden[e.campo]=!0),e.addEventListener("click",this._buscarDmdGrid.bind(this))}))}_buscarDmdGrid(e){var t=null,r="";t=null;e&&(t=e.currentTarget);var i=null;let o=this.shadowRoot.querySelector(".dmd-grid-cabecera-find-input");var n=" asc",a=" asc";switch(t&&(t.hasAttribute("dmd-grid-orden")||t.hasAttribute("dmd-grid-orden-ascendente")||t.hasAttribute("dmd-grid-orden-descendente"))?(r="ordenar",((i=t).hasAttribute("dmd-grid-orden-descendente")||i.hasAttribute("dmd-grid-orden"))&&(n=" desc")):(r=e?"dmd-grid-cabecera-find-buscar"==t.className?"buscar":"cerrar":"cargaInicial",this.shadowRoot.querySelectorAll("[dmd-grid-orden-ascendente]")[0]?i=this.shadowRoot.querySelectorAll("[dmd-grid-orden-ascendente]")[0]:this.shadowRoot.querySelectorAll("[dmd-grid-orden-descendente]")[0]?i=this.shadowRoot.querySelectorAll("[dmd-grid-orden-descendente]")[0]:this.shadowRoot.querySelectorAll("[dmd-grid-orden]")[0]&&(i=this.shadowRoot.querySelectorAll("[dmd-grid-orden]")[0]),i.hasAttribute("dmd-grid-orden-descendente")&&(n=" desc")),r){case"ordenar":a=" asc"==n?" desc":" asc";break;case"cargaInicial":a=" asc";break;case"buscar":case"cerrar":a=n}if(i){var s=1,l=-1;" desc"==a&&(s=-1,l=1),this.__desmarcarSeleccionDmdGrid(),this.__tituloRefreshIconoDmdTable(),i.removeAttribute("dmd-grid-orden"),i.removeAttribute("dmd-grid-orden-ascendente"),i.removeAttribute("dmd-grid-orden-descendente"),i.setAttribute(" desc"==a?"dmd-grid-orden-descendente":"dmd-grid-orden-ascendente","");let e=[];if(o.value.length>0){if(this.dataSource.length>0){let t=this.camposOrden;e=this.dataSource.filter((function(e){let r=!1;for(let i in e)if(e[i]){let n=e[i].toString();if("object"==typeof e[i]&&null!==e[i]&&(n=e[i][Object.keys(e[i])[0]]),t[i]&&(Qa(n)&&(n=new Date(n).toLocaleDateString("fr-FR").toString()),void 0!==n&&n.toUpperCase().indexOf(o.value.toUpperCase(),0)>-1)){r=!0;break}}if(r)return e}))}}else e=this.dataSource;this.grid=e.sort((function(e,t){i.campo;return null==e[i.campo]?s:null==t[i.campo]?l:"object"==typeof e[i.campo]&&null!==e[i.campo]?e[i.campo][Object.keys(e[i.campo])[0]]>t[i.campo][Object.keys(t[i.campo])[0]]?s:l:e[i.campo]>t[i.campo]?s:l})),this._finalLista(),this.update()}else Bo.dispatch(D("Atencion!","Error, intentelo nuevamente.","fondoError",3e3))}_menuOcultarDmdGrid(){let e=this.shadowRoot.querySelector(".dmd-grid-cuerpo");e.hasAttribute("anchocero")?e.removeAttribute("anchocero"):e.setAttribute("anchocero","")}_menuAmpliarDmdGrid(){let e=this.shadowRoot.querySelector(".dmd-grid-menu");"none"==e.querySelectorAll("label")[0].style.display?e.querySelectorAll("div")[0].children[0].outerHTML=ya.strings[0]:e.querySelectorAll("div")[0].children[0].outerHTML=ba.strings[0],[].forEach.call(e.querySelectorAll("label"),(e=>{"none"==e.style.display?e.style.display="grid":e.style.display="none"}))}_seleccionarRegistroDmdGrid(e){this.__desmarcarSeleccionDmdGrid(),e.currentTarget.setAttribute("seleccionado",""),this._itemSeleccionado(e)}__findMostarDmdGrid(e){let t=this.shadowRoot.querySelector(".dmd-grid-cabecera-find-input"),r=this.shadowRoot.querySelector(".dmd-grid-cabecera-find-cerrar");r.hasAttribute("hidden")?(t.removeAttribute("hidden"),r.removeAttribute("hidden")):this._buscarDmdGrid(e)}_registroFormDmdGrid(e){let t=this.shadowRoot.querySelector("[seleccionado]");if(t){let a=this.shadowRoot.querySelector(".dmd-grid-velo");a.onclick=function(e){a.setAttribute("hidden","")},a.firstChild&&a.removeChild(a.firstChild),a.removeAttribute("hidden");var r=document.createElement("div");r.classList.add("dmd-grid-formulario"),a.appendChild(r),r.addEventListener("click",(e=>{e.preventDefault(),e.stopPropagation()}));let s=this.shadowRoot.querySelectorAll(".dmd-grid-datos-titulo");var i=0;[].forEach.call(s,(e=>{var o=document.createElement("div"),n=document.createElement("input"),a=document.createElement("label");o.classList.add("dmd-input"),t.querySelectorAll(".dmd-grid-datos-registro")[i]&&(n.value=t.querySelectorAll(".dmd-grid-datos-registro")[i].innerText,n.style.width="25rem",a.innerHTML=e.firstElementChild.textContent,n.setAttribute("disabled",""),o.appendChild(a),o.appendChild(n),r.appendChild(o)),i++}));var o=document.createElement("div");if(o.textContent="X",o.style.position="absolute",o.style.top="0rem",o.style.right="0rem",o.style.fontSize="1.2rem",o.style.padding="0.3rem 0.5rem",o.style.cursor="pointer",o.onclick=function(){a.setAttribute("hidden","")},r.appendChild(o),e.currentTarget.hasAttribute("delete")){var n=document.createElement("button");n.classList.add("dmd-button"),n.setAttribute("normal",""),n.setAttribute("bordeRedondo",""),n.textContent="Eliminar",n.style.justifySelf="center",n.style.marginTop="1rem",n.addEventListener("click",this._eliminar.bind(this)),r.appendChild(n)}}else Bo.dispatch(D("Atencion!","No selecciono registro.","fondoError",3e3))}__desmarcarSeleccionDmdGrid(){let e=this.shadowRoot.querySelector("[seleccionado]");e&&e.removeAttribute("seleccionado")}__findCerrarDmdGrid(e){let t=this.shadowRoot.querySelector(".dmd-grid-cabecera-find-input"),r=this.shadowRoot.querySelector(".dmd-grid-cabecera-find-cerrar");t.value="",t.setAttribute("hidden",""),r.setAttribute("hidden",""),this._buscarDmdGrid(e)}__tituloRefreshIconoDmdTable(){[].forEach.call(this.shadowRoot.querySelectorAll(".dmd-grid-datos-titulo"),(e=>{(e.hasAttribute("dmd-grid-orden-ascendente")||e.hasAttribute("dmd-grid-orden-descendente"))&&(e.removeAttribute("dmd-grid-orden-ascendente"),e.removeAttribute("dmd-grid-orden-descendente"),e.setAttribute("dmd-grid-orden",""))}))}_eliminar(){}_finalLista(){}},$l=Yo`
	.dmd-grid {
		display: grid;
		position: relative;
		width: 100%;
		height: 10rem;
		grid-template-rows: 3rem auto;
		overflow: hidden;
	}
	.dmd-grid-velo {
		display: flex;
		flex-direction: column;
		position: absolute;
		top: 0px;
		left: 0px;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.2);
		justify-content: center;
		align-items: center;
		z-index: 20;
	}
	.dmd-grid-cabecera {
		display: grid;
		position: relative;
		grid-template-columns: 2rem auto;
		align-items: center;
		padding-left: 0.4rem;
		grid-gap: 0.3rem;
	}
	.dmd-grid-cabecera svg:hover {
		cursor: pointer;
	}
	.dmd-grid-cuerpo {
		display: grid;
		position: relative;
		width: 100%;
		height: 100%;
		grid-template-columns: max-content 1fr;
		overflow: hidden;
	}
	.dmd-grid-menu {
		display: grid;
		position: relative;
		grid-auto-flow: row;
		overflow-x: hidden;
		overflow-y: auto;
		align-content: flex-start;
		justify-content: left;
		padding: 0.2rem;
		grid-gap: 0rem;
	}
	.dmd-grid-menu div {
		display: grid;
		grid-auto-flow: column;
		height: auto;
		align-items: center;
		justify-content: left;
		border-radius: 0.3rem;
		padding: 0.2rem 0.4rem;
		grid-gap: 0.2rem;
	}
	.dmd-grid-menu svg:hover {
		cursor: pointer;
	}
	.dmd-grid-menu div label {
		display: grid;
	}
	.dmd-grid-datos {
		display: grid;
		position: relative;
		grid-template-rows: max-content;
		align-content: flex-start;
		grid-gap: 0;
		overflow-x: auto;
		overflow-y: auto;
	}
	.dmd-grid-datos-titulos,
	.dmd-grid-datos-registros {
		display: grid;
		grid-template-columns: 1fr 2fr 1fr repeat(2, 2.5fr);
		min-width: max-content;
	}
	.dmd-grid-datos-titulos {
		position: sticky;
		top: 0;
		z-index: 1;
		align-items: center;
		height: 2.5rem;
	}
	.dmd-grid-datos-registros {
		display: grid;
		position: relative;
		height: max-content;
		overflow: hidden;
		padding: 0.4rem 0;
	}
	.dmd-grid-datos-titulo {
		display: grid;
		position: relative;
		padding: 0rem 1rem;
		text-align: center;
		height: 100%;
		align-items: center;
	}
	.dmd-grid-datos-titulo[dmd-grid-orden]:after,
	.dmd-grid-datos-titulo[dmd-grid-orden-ascendente]:after {
		content: "";
		position: absolute;
		height: 0;
		width: 0;
		top: 0.1rem;
		right: 0;
		border-width: 0.4rem;
		border-style: solid;
		border-color: transparent;
		margin-right: 0.1rem;
		margin-left: 0.5rem;
		border-bottom-color: var(--on-formulario);
	}
	.dmd-grid-datos-titulo[dmd-grid-orden]:before,
	.dmd-grid-datos-titulo[dmd-grid-orden-descendente]:before {
		content: "";
		position: absolute;
		height: 0;
		width: 0;
		bottom: 0.1rem;
		right: 0;
		border-width: 0.4rem;
		border-style: solid;
		border-color: transparent;
		margin-right: 0.1rem;
		margin-left: 0.5rem;
		border-top-color: var(--on-formulario);
	}
	.dmd-grid-datos-titulo[dmd-grid-orden-ascendente]:after {
		margin-top: 0.3rem;
	}
	.dmd-grid-datos-titulo[dmd-grid-orden-descendente]:before {
		margin-bottom: 0.3rem;
	}
	.dmd-grid-datos-registro {
		padding: 0rem 1rem;
	}
`,Bl=Yo`
	*[hidden] {
		display: none;
	}
	.dmd-grid {
		border: 1px solid var(--formulario);
		user-select: none; /* Chrome */
		-webkit-touch-callout: none; /* iOS Safari */
		-webkit-user-select: none; /* Safari */
	}
	.dmd-grid-cabecera {
		background: var(--primario);
		color: var(--on-primario);
		font-size: 0.8rem;
		-webkit-box-shadow: 1px 1px 11px 1px rgba(0, 0, 0, 0.27);
		box-shadow: 1px 1px 11px 1px rgba(0, 0, 0, 0.27);
		z-index: 3;
	}
	.dmd-grid-cabecera svg {
		fill: var(--on-primario);
		width: 1.8rem;
		height: 1.8rem;
	}
	.dmd-grid-cuerpo[anchocero] {
		grid-template-columns: 0 1fr;
	}
	.dmd-grid-cuerpo[anchocero] .dmd-grid-menu {
		visibility: hidden;
	}

	.dmd-grid-menu {
		background-color: var(--formulario);
		border-right: 1px solid var(--formulario);
		color: var(--on-formulario);
		width: 100%;
		font-size: 0.8rem;
		-webkit-box-shadow: 6px 0px 19px -4px rgba(0, 0, 0, 0.1);
		box-shadow: 6px 0px 19px -4px rgba(0, 0, 0, 0.1);
		z-index: 2;
	}
	.dmd-grid-menu svg {
		fill: var(--on-formulario);
	}
	.dmd-grid-menu div:hover {
		background-color: var(--primario10);
		color: var(--primario-10);
	}
	.dmd-grid-menu div:hover svg {
		fill: var(--primario-10);
	}
	.dmd-grid-datos {
		background-color: var(--formulario);
	}
	.dmd-grid-datos-titulos {
		background-color: var(--terciario);
		background: var(--terciario);
		color: var(-on-formulario);
	}
	.dmd-grid-datos-titulo {
		font-size: 1rem;
	}
	.dmd-grid-datos-titulo[dmd-grid-orden],
	.dmd-grid-datos-titulo[dmd-grid-orden] label,
	.dmd-grid-datos-titulo[dmd-grid-orden-ascendente],
	.dmd-grid-datos-titulo[dmd-grid-orden-ascendente] label,
	.dmd-grid-datos-titulo[dmd-grid-orden-descendente],
	.dmd-grid-datos-titulo[dmd-grid-orden-descendente] label {
		cursor: pointer;
	}
	.dmd-grid-datos-titulo[dmd-grid-orden-ascendente],
	.dmd-grid-datos-titulo[dmd-grid-orden-ascendente] label,
	.dmd-grid-datos-titulo[dmd-grid-orden-descendente],
	.dmd-grid-datos-titulo[dmd-grid-orden-descendente] label {
		background: var(--terciario-10);
		color: var(--on-terciario);
	}

	.dmd-grid-datos-registros {
		background-color: var(--formulario);
		color: var(--on-formulario);
		border-top: 1px solid var(--on-formulario);
		border-bottom: 1px solid var(--on-formulario);
		font-size: 0.9rem;
	}
	.dmd-grid-datos-registros:hover {
		background-color: var(--secundario);
		background: var(--secundario);
		color: var(--on-secundario);
		border-top: 1px solid var(--secundario);
		border-bottom: 1px solid var(--secundario);
	}
	.dmd-grid-datos-registros[seleccionado] {
		background-color: var(--primario);
		background: var(--primario);
		color: var(--on-primario);
		border-top: 1px solid var(--primario-10);
		border-bottom: 1px solid var(--primario-10);
	}
	.dmd-grid-cabecera-find {
		display: grid;
		position: absolute;
		width: 45%;
		grid-template-columns: 1fr auto auto;
		grid-gap: 0.3rem;
		right: 0.3rem;
		justify-content: right;
		background-color: transparent;
	}
	.dmd-grid-cabecera-find svg {
		background-color: transparent;
		border-radius: 0.4rem;
		width: 1.6rem;
		height: 1.6rem;
	}
	.dmd-grid-cabecera-find input {
		width: 95%;
		border: 1px solid var(--formulario);
		border-radius: 0.4rem;
		font-size: 1rem;
		text-decoration: none;
		justify-self: right;
	}
	.dmd-grid-cabecera-find-buscar {
		justify-self: right;
	}
	.dmd-grid-formulario {
		display: grid;
		position: relative;
		padding: 1.5rem 2rem;
		margin-top: 2rem;
		grid-gap: 0.4rem;
		background-color: var(--formulario);
		border-radius: 0.4rem;
		overflow: auto;
		height: fit-content;
		width: fit-content;
		-webkit-box-shadow: 1px 1px 11px 1px rgba(0, 0, 0, 0.27);
		box-shadow: 1px 1px 11px 1px rgba(0, 0, 0, 0.27);
		justify-items: flex-end;
	}
	.dmd-grid-formulario label {
		color: var(--on-formulario);
		font-family: var(--font-header-h2-family);
		font-size: var(--font-header-h2-size);
	}
	.dmd-grid-formulario input {
		color: var(--on-formulario);
		font-family: var(--font-label-family);
		font-size: var(--font-label-size);
		font-weight: 600;
	}
`,Nl="ui.media.timeStamp",Hl="screen.timeStamp",Fl="sectores.all.timeStamp",Gl="sectores.all.errorTimeStamp";class Vl extends(Ml(Wn(Bo,Fl,Gl,Nl,Hl)(Vn))){constructor(){super(),this.area="body",this.current="",this.hidden=!0,this.dataSource=[],this.item={},this.grid=[],this.usuarioRol="CEMAP"}firstUpdated(){super.firstUpdated(),this.grid=this.dataSource}static get styles(){return Yo`
            ${$l}
            ${Bl}
			${Ws}
			${cs}
			:host {
                display: grid;
                position: relative;
                height: 100%;
                width: 100%;
                background-color: var(--color-fondo);
                grid-gap: 1rem;
                overflow-y: auto;
                justify-items: center;
            }

            :host([hidden]) {
                display: none;
            }
            .dmd-grid {
                height: 70%;
                min-height: 20rem;
                width: max-content;
                padding-top: 1rem;
            }
            .dmd-grid-datos-titulos,
            .dmd-grid-datos-registros {
                grid-template-columns: 15rem 8rem 8rem;
            }
            .dmd-grid-datos-registros[fondorojo] {
                color: var(--color-error) !important;
            }
            .dmd-grid-datos-registros[fondoverde] {
                color: green !important;
            }
            *[hidden] {
                display: none !important;
            }
        `}get _anticipoCarga(){return this.shadowRoot.querySelector("#anticipoCarga")}get _anticipoFechaCierre(){return this.shadowRoot.querySelector("#anticipoFechaCierre")}render(){return En`
            <div class="dmd-grid dmd-grid-theme-normal">
                <div class="dmd-grid-velo" hidden></div>
                <div class="dmd-grid-cabecera">
                    <div @click=${this._menuOcultarDmdGrid}>${ha}</div>
                    <label>Administracion de sectores</label>
                    <div class="dmd-grid-cabecera-find">
                        <input class="dmd-grid-cabecera-find-input" hidden type="text" autocomplete="off" value="" />
                        <buscar class="dmd-grid-cabecera-find-buscar">${pa}</buscar>
                        <cerrar class="dmd-grid-cabecera-find-cerrar" hidden>${va}</cerrar>
                    </div>
                </div>

                <div class="dmd-grid-cuerpo">
                    <div class="dmd-grid-menu">
                        <div title="Mostar / ocultar barra de menu" @click=${this._menuAmpliarDmdGrid}>${ba}<label style="display:none"></label></div>
                        <div title="Atras" atras @click=${this.atras}>${wa}<label style="display:none">Atras</label></div>
                        <div title="Nuevo" @click=${this.alta} ?hidden=${""==this.usuarioRol}>${Sa} <label style="display:none">Nuevo</label></div>
                        <div title="Modificar" @click=${this.modificar} ?hidden=${""==this.usuarioRol}>${Aa}<label style="display:none">Modificar</label></div>
                        <div title="Usuarios" @click=${this.usuarios} ?hidden=${""==this.usuarioRol}>${fa}<label style="display:none">Usuarios</label></div>
                    </div>
                    <div class="dmd-grid-datos">
                        <div class="dmd-grid-datos-titulos">
                            <!-- 	<div .campo=${"id"} dmd-grid-orden class="dmd-grid-datos-titulo">
								<label>Id</label>
							</div> -->
                            <div .campo=${"descripcion"} dmd-grid-orden class="dmd-grid-datos-titulo">
                                <label>Descripcion</label>
                            </div>
                            <div .campo=${"activo"} dmd-grid-orden class="dmd-grid-datos-titulo">
                                <label>Activo</label>
                            </div>
                            <div .campo=${"usuarios"} class="dmd-grid-datos-titulo">
                                <label>Usuarios</label>
                            </div>
                        </div>
                        ${this.grid.map(((e,t)=>En`
                                <div class="dmd-grid-datos-registros" .item=${e} .index=${t} ?fondorojo=${"Rechazado"==e.estado} ?fondoverde=${"Conciliado"==e.estado} @click=${this._seleccionarRegistroDmdGrid}>
                                    <!-- 									<div class="dmd-grid-datos-registro id" style="text-align:right" .valor=${e.id}>${e.id}</div> -->
                                    <div class="dmd-grid-datos-registro" style="text-align:left">${e.descripcion}</div>
                                    <div class="dmd-grid-datos-registro" style="text-align:center">${e.activo,"Si"}</div>
                                    <div class="dmd-grid-datos-registro" style="text-align:center">${e.usuarios.length}</div>
                                </div>
                            `))}
                    </div>
                </div>
            </div>
        `}usuarios(e){this.shadowRoot.querySelector("[seleccionado]")?Bo.dispatch(Sr(this.item.usuarios,this.item,"abm")):Bo.dispatch(D("Atencion!","No selecciono registro.","fondoError",3e3))}alta(e){Bo.dispatch(wr(null,"add"))}modificar(e){this.shadowRoot.querySelector("[seleccionado]")?Bo.dispatch(wr(this.item,"edit")):Bo.dispatch(D("Atencion!","No selecciono registro.","fondoError",3e3))}eliminar(){this.shadowRoot.querySelector("[seleccionado]")||Bo.dispatch(D("Atencion!","No selecciono registro.","fondoError",3e3))}_itemSeleccionado(e){this.item=e.currentTarget.item}atras(){Bo.dispatch(Z())}stateChanged(e,t){if(t==Hl||t==Nl){this.mediaSize=e.ui.media.size,this.hidden=!0,this.current=e.screen.name;const t=q(e,this.area),r=-1!="-verSectores-".indexOf("-"+e.screen.name+"-");t&&r&&(this.hidden=!1,Bo.dispatch(yi()))}t==Fl&&"verSectores"==e.screen.name&&(this.dataSource=e.sectores.all.entities,this._buscarDmdGrid()),t==Gl&&"verSectores"==e.screen.name&&Bo.dispatch(D("Error","No se pudo acceder a los datos, verifique su conexion","fondoError",4e3))}static get properties(){return{grid:{type:Object,state:!0},mediaSize:{type:String,reflect:!0,attribute:"media-size"},layout:{type:String,reflect:!0},hidden:{type:Boolean,reflect:!0},area:{type:String},current:{type:String,reflect:!0}}}}window.customElements.define("ver-sectores",Vl);const Ql="ui.media.timeStamp",Yl="screen.timeStamp",Zl="entreComponentes.cargaSectores_Load01.timeStamp",Wl="sectores.addTimeStamp",Xl="sectores.commandErrorTimeStamp",Jl="sectores.updateTimeStamp",Kl="sectores.commandErrorTimeStamp";class ed extends(Wn(Bo,Jl,Kl,Wl,Xl,Zl,Ql,Yl)(Vn)){constructor(){super(),this.hidden=!0,this.area="body",this.current="",this.accion="",this.item={}}static get styles(){return Yo`
			${cs}
			${Ws}
			:host {
				display: grid;
				position: fixed;
				top: 0;
				left: 0;
				height: 100vh;
				width: 100vw;
				background-color: rgba(0, 0, 0, 0.4);
				z-index: 990;
			}
			:host([hidden]) {
				display: none;
			}
			#cuerpo {
				display: grid;
				position: relative;
				height: max-content;
				width: 100%;
				background-color: var(--formulario);
				grid-template-columns: 80%;
				grid-gap: 0rem;
				justify-content: center;
				align-content: flex-start;
				overflow-y: auto;
			}
			:host([media-size="large"]) #cuerpo {
				width: 60%;
				place-self: center;
				border-radius: 2rem;
			}
			#titulo {
				font-size: 1.2rem;
				padding-top: 2rem;
				height: 2rem;
				justify-self: center;
				color: var(--on-formulario);
			}
			hr {
				border-top: 1px solid var(--on-formulario-bajada);
				width: 100%;
			}
			#datos {
				display: grid;
				position: relative;
				width: 90%;
				height: 100%;
				grid-auto-flow: row;
				grid-gap: 1rem;
				overflow-y: auto;
				overflow-x: hidden;
				justify-self: center;
			}
			#datos::-webkit-scrollbar {
				display: none;
			}
			.dmd-button {
				justify-self: center;
			}
			.x {
				display: grid;
				position: absolute;
				top: 1rem;
				right: 1rem;
				font-size: 1.2rem;
				cursor: pointer;
				color: var(--on-formulario);
			}
		`}get _descripcion(){return this.shadowRoot.querySelector("#descripcion")}get _botonAceptar(){return this.shadowRoot.getElementById("btnAceptar")}firstUpdated(){super.firstUpdated()}willUpdate(e){e.has("")}render(){return En`
			<div id="cuerpo">
				<div class="x" @click="${this.volver}">X</div>
				<div id="titulo" ?hidden=${"add"!=this.accion}>Nuevo Sector</div>
				<div id="titulo" ?hidden=${"view"!=this.accion}>Visualizacion del Sector</div>
				<div id="titulo" ?hidden=${"edit"!=this.accion}>Mofidicacion del Sector</div>
				<hr />
				<div id="datos">
					<div class="dmd-input" helper>
						<label>Nombre del sector</label>
						<input type="text" id="descripcion" autocomplete="off" autocomplete="off" placeholder="" value="" />
						<div>Debe ingresar el nombre del sector</div>
						<span>Ingrese un texto</span>
						${ga}
					</div>

					<button id="btnAceptar" class="dmd-button" normal bordeRedondo @click="${this.grabar}">Aceptar</button>
					<div style="height:2rem"></div>
				</div>
			</div>
		`}stateChanged(e,t){t!=Yl&&t!=Ql||(this.mediaSize=e.ui.media.size,this.current=e.screen.name),t==Zl&&(this.item=e.entreComponentes.cargaSectores_Load01.item,this.accion=e.entreComponentes.cargaSectores_Load01.accion,"add"==this.accion?this._descripcion.value="":"edit"==this.accion&&(this._descripcion.value=this.item.descripcion),this.hidden=!1),t!=Wl&&t!=Jl||this.hidden||(Bo.dispatch(yi()),Bo.dispatch(D("Atencion!","El sector se actulizo correctamente","fondoOk",3e3)),this.hidden=!0),t!=Xl&&t!=Kl||this.hidden||Bo.dispatch(D("Atencion!","El sector no fue actulizado, intente nuevamente","fondoError",3e3))}volver(){this.hidden=!0}grabar(e){let t=e.currentTarget;[].forEach.call(this.shadowRoot.querySelectorAll("[error]"),(e=>{e.removeAttribute("error")}));var r=!0;if(""==this._descripcion.value&&(r=!1,this._descripcion.setAttribute("error","")),r){let e={};e.descripcion=this._descripcion.value,"add"==this.accion?Bo.dispatch(((e,t)=>({type:Ir,body:e,token:t}))(e)):"edit"==this.accion&&(e.id=this.item.id,Bo.dispatch(((e,t,r)=>({type:Or,id:e,body:t,token:r}))(null,e)))}else t.disabled=!1,Bo.dispatch(D("Atencion!","Falta cargar campos.","fondoError",3e3))}static get properties(){return{mediaSize:{type:String,reflect:!0,attribute:"media-size"},layout:{type:String,reflect:!0},hidden:{type:Boolean,reflect:!0},area:{type:String},current:{type:String,reflect:!0}}}}window.customElements.define("carga-sectores",ed);const td="ui.media.timeStamp",rd="screen.timeStamp",id="sectores.all.timeStamp",od="sectores.usuarioHacerResponsable.timeStamp",nd="sectores.usuarioHacerResponsable.errorTimeStamp",ad="entreComponentes.verUsuarios_Load01.timeStamp";class sd extends(Ml(Wn(Bo,od,nd,id,ad,td,rd)(Vn))){constructor(){super(),this.area="body",this.current="",this.hidden=!0,this.grid=[],this.dataSource=[],this.item={},this.usuarioRol="CEMAP",this.sector=null,this.accion=null}firstUpdated(){super.firstUpdated(),this.grid=this.dataSource}static get styles(){return Yo`
			${$l}
			${Bl}
			${Ws}
			${cs}
			:host {
				display: grid;
				position: fixed;
				top: 0;
				left: 0;
				height: 100%;
				width: 100%;
				background-color: rgba(0, 0, 0, 0.4);
				grid-gap: 1rem;
				overflow-y: auto;
				justify-items: center;
				z-index: 99;
			}

			:host([hidden]) {
				display: none;
			}
			.dmd-grid {
				height: 60%;
				min-height: 20rem;
				width: max-content;
				align-self: center;
				box-shadow: 2px 2px 7px -1px var(--on-aplicacion);
				border: 0;
			}
			.dmd-grid-datos-titulos,
			.dmd-grid-datos-registros {
				grid-template-columns: 11rem 11rem 12rem 8rem 8rem 20rem;
			}
			.dmd-grid-datos-registros[fondorojo] {
				color: var(--color-error) !important;
			}
			.dmd-grid-datos-registros[fondoverde] {
				color: green !important;
			}
			*[hidden] {
				display: none !important;
			}
		`}render(){return En`
			<div class="dmd-grid dmd-grid-theme-normal">
				<div class="dmd-grid-velo" hidden></div>
				<div class="dmd-grid-cabecera">
					<div @click=${this._menuOcultarDmdGrid}>${ha}</div>
					<label>Usuarios del Sector: ${"   "+this.sector?.descripcion}</label>
					<div class="dmd-grid-cabecera-find">
						<input class="dmd-grid-cabecera-find-input" hidden type="text" autocomplete="off" value="" />
						<buscar class="dmd-grid-cabecera-find-buscar">${pa}</buscar>
						<cerrar class="dmd-grid-cabecera-find-cerrar" hidden>${va}</cerrar>
					</div>
				</div>

				<div class="dmd-grid-cuerpo">
					<div class="dmd-grid-menu">
						<div title="Mostar / ocultar barra de menu" @click=${this._menuAmpliarDmdGrid}>${ba}<label style="display:none"></label></div>
						<div title="Atras" atras @click=${this.atras}>${wa}<label style="display:none">Atras</label></div>
						<div title="Nuevo" @click=${this.alta} ?hidden=${!0}>${Sa} <label style="display:none">Nuevo</label></div>
						<div title="Modificar" @click=${this.modificar} ?hidden=${""==this.usuarioRol||"view"==this.accion}>${Aa}<label style="display:none">Modificar</label></div>
						<div title="Marcar como responsable" @click=${this.responsable} ?hidden=${""==this.usuarioRol||"view"==this.accion}>${Pa}<label style="display:none">Responsable</label></div>
						<div title="Roles" @click=${this.roles} ?hidden=${""==this.usuarioRol||"view"==this.accion}>${La}<label style="display:none">Roles</label></div>
						<div title="ELiminar" @click=${this.eliminar} ?hidden=${!0}>${_a}<label style="display:none">Eliminar</label></div>
						<div title="Visualizar Usuario" view @click=${this.ver}>${xa}<label style="display:none">Visualizar</label></div>
					</div>
					<div class="dmd-grid-datos">
						<div class="dmd-grid-datos-titulos">
							<div .campo=${"apellido"} dmd-grid-orden class="dmd-grid-datos-titulo">
								<label>Apellido</label>
							</div>
							<div .campo=${"nombre"} dmd-grid-orden class="dmd-grid-datos-titulo">
								<label>Nombre</label>
							</div>
							<div .campo=${"email"} dmd-grid-orden class="dmd-grid-datos-titulo">
								<label>Email</label>
							</div>
							<div .campo=${"activo"} class="dmd-grid-datos-titulo">
								<label>Activo</label>
							</div>
							<div .campo=${"esResponsable"} class="dmd-grid-datos-titulo">
								<label>Responsable</label>
							</div>
							<div .campo=${"contacto"} class="dmd-grid-datos-titulo">
								<label>Contacto</label>
							</div>
						</div>
						${this.grid.map(((e,t)=>En`
								<div class="dmd-grid-datos-registros" .item=${e} .index=${t} ?fondorojo=${"Rechazado"==e.estado} ?fondoverde=${"Conciliado"==e.estado} @click=${this._seleccionarRegistroDmdGrid}>
									<div class="dmd-grid-datos-registro" style="text-align:left">${e.apellido}</div>
									<div class="dmd-grid-datos-registro" style="text-align:left">${e.nombre}</div>
									<div class="dmd-grid-datos-registro" style="text-align:left">${e.email}</div>
									<div class="dmd-grid-datos-registro" style="text-align:center">${e.activo?"Si":"No"}</div>
									<div class="dmd-grid-datos-registro" style="text-align:center">${e.esResponsable?"Si":"No"}</div>
									<div class="dmd-grid-datos-registro" style="text-align:rigth">${e.contacto}</div>
								</div>
							`))}
					</div>
				</div>
			</div>
		`}roles(){this.shadowRoot.querySelector("[seleccionado]")?Bo.dispatch(xr(this.item,this.sector,"edit")):Bo.dispatch(D("Atencion!","No selecciono registro.","fondoError",3e3))}responsable(e){if(this.shadowRoot.querySelector("[seleccionado]")){let e={};e.sectorId=this.sector.id,e.identificador=this.item.identificacion,Bo.dispatch(((e,t)=>({type:Ur,body:e,token:t}))(e))}else Bo.dispatch(D("Atencion!","No selecciono registro.","fondoError",3e3))}alta(e){Bo.dispatch(Ar(null,this.sector,"add"))}modificar(e){this.shadowRoot.querySelector("[seleccionado]")?Bo.dispatch(Ar(this.item,this.sector,"edit")):Bo.dispatch(D("Atencion!","No selecciono registro.","fondoError",3e3))}eliminar(){this.shadowRoot.querySelector("[seleccionado]")?Bo.dispatch(Ar(this.item,this.sector,"delete")):Bo.dispatch(D("Atencion!","No selecciono registro.","fondoError",3e3))}ver(){this.shadowRoot.querySelector("[seleccionado]")?Bo.dispatch(Ar(this.item,this.sector,"view")):Bo.dispatch(D("Atencion!","No selecciono registro.","fondoError",3e3))}_itemSeleccionado(e){this.item=e.currentTarget.item}atras(){this.hidden=!0}stateChanged(e,t){if(t!=rd&&t!=td||(this.mediaSize=e.ui.media.size,this.current=e.screen.name),t==ad&&(this.dataSource=e.entreComponentes.verUsuarios_Load01.usuariosItems,this.sector=e.entreComponentes.verUsuarios_Load01.sectorItem,this.accion=e.entreComponentes.verUsuarios_Load01.accion,this.grid=this.dataSource,this.hidden=!1,this.update()),t==od&&(Bo.dispatch(D("Atencion!","El registro fue actualizado.","fondoOk",3e3)),Bo.dispatch(yi())),t==nd&&Bo.dispatch(D("Atencion!","El registro no fue actualizado, intente nuevamente.","fondoError",3e3)),t==id&&this.sector){let t=e.sectores.all.entities.filter((e=>e.id==this.sector.id));t.length>0&&(this.dataSource=t[0].usuarios,this._buscarDmdGrid())}}static get properties(){return{grid:{type:Object,state:!0},mediaSize:{type:String,reflect:!0,attribute:"media-size"},layout:{type:String,reflect:!0},hidden:{type:Boolean,reflect:!0},area:{type:String},current:{type:String,reflect:!0}}}}window.customElements.define("ver-usuarios",sd);const ld="ui.media.timeStamp",dd="screen.timeStamp",cd="entreComponentes.cargaUsuarios_Load01.timeStamp",ud="sectores.sumarIntegrante.timeStamp",pd="sectores.sumarIntegrante.errorTimeStamp",hd="sectores.modificarIntegrante.timeStamp",md="sectores.modificarIntegrante.errorTimeStamp",fd="sectores.quitarIntegrante.timeStamp",gd="sectores.quitarIntegrante.errorTimeStamp";class vd extends(Wn(Bo,hd,md,ud,pd,fd,gd,cd,ld,dd)(Vn)){constructor(){super(),this.hidden=!0,this.area="body",this.current="",this.accion="",this.item=null,this.sector=null}static get styles(){return Yo`
			${cs}
			${Ws}
			${Xs}
			:host {
				display: grid;
				position: fixed;
				top: 0;
				left: 0;
				height: 100vh;
				width: 100vw;
				background-color: rgba(0, 0, 0, 0.4);
				z-index: 990;
			}
			:host([hidden]) {
				display: none;
			}
			#cuerpo {
				display: grid;
				position: relative;
				height: max-content;
				width: 100%;
				background-color: var(--formulario);
				grid-template-columns: 80%;
				grid-gap: 0rem;
				justify-content: center;
				align-content: flex-start;
				overflow-y: auto;
			}
			:host([media-size="large"]) #cuerpo {
				width: 60%;
				place-self: center;
				border-radius: 2rem;
			}
			#titulo {
				font-size: 1.2rem;
				padding-top: 2rem;
				height: 2rem;
				justify-self: center;
				color: var(--on-formulario);
			}
			hr {
				border-top: 1px solid var(--on-formulario-bajada);
				width: 100%;
			}
			#datos {
				display: grid;
				position: relative;
				width: 90%;
				height: 100%;
				grid-auto-flow: row;
				grid-gap: 1rem;
				overflow-y: auto;
				overflow-x: hidden;
				justify-self: center;
			}
			#datos::-webkit-scrollbar {
				display: none;
			}
			.dmd-button {
				justify-self: center;
			}
			.x {
				display: grid;
				position: absolute;
				top: 1rem;
				right: 1rem;
				font-size: 1.2rem;
				cursor: pointer;
				color: var(--on-formulario);
			}
			*[hidden] {
				display: none;
			}
		`}get _apellido(){return this.shadowRoot.querySelector("#apellido")}get _nombre(){return this.shadowRoot.querySelector("#nombre")}get _email(){return this.shadowRoot.querySelector("#email")}get _contacto(){return this.shadowRoot.querySelector("#contacto")}get _botonAceptar(){return this.shadowRoot.getElementById("btnAceptar")}firstUpdated(){super.firstUpdated()}willUpdate(e){e.has("")}render(){return En`
			<div id="cuerpo">
				<div class="x" @click="${this.volver}">X</div>
				<div id="titulo" ?hidden=${"add"!=this.accion}>Nuevo Usuario</div>
				<div id="titulo" ?hidden=${"view"!=this.accion}>Visualizacion del Usuario</div>
				<div id="titulo" ?hidden=${"edit"!=this.accion}>Mofidicacion del Usuario</div>
				<div id="titulo" ?hidden=${"delete"!=this.accion}>Eliminar Usuario</div>
				<hr />
				<div id="datos">
					<div class="dmd-input" helper>
						<label>Apellido</label>
						<input type="text" id="apellido" ?disabled=${!0} autocomplete="off" autocomplete="off" placeholder="" value="" />
						<div>Debe ingresar el apellido</div>
						<span>Ingrese un texto</span>
						${ga}
					</div>

					<div class="dmd-input" helper>
						<label>Nombre</label>
						<input type="text" id="nombre" ?disabled=${!0} autocomplete="off" autocomplete="off" placeholder="" value="" />
						<div>Debe ingresar el nombre</div>
						<span>Ingrese un texto</span>
						${ga}
					</div>

					<div class="dmd-input" helper>
						<label>Email</label>
						<input type="text" id="email" ?disabled=${!0} autocomplete="off" autocomplete="off" placeholder="" value="" />
						<div>Debe ingresar el email</div>
						<span>Ingrese un texto</span>
						${ga}
					</div>

					<div class="dmd-input" helper>
						<label>Contacto</label>
						<input type="text" id="contacto" ?disabled=${"view"==this.accion||"delete"==this.accion} autocomplete="off" autocomplete="off" placeholder="" value="" />
						<div>Debe ingresar el contacto</div>
						<span>Ingrese datos para contactarse</span>
						${ga}
					</div>

					<button id="btnAceptar" class="dmd-button" ?hidden=${"view"==this.accion} normal bordeRedondo @click="${this.grabar}">${"delete"==this.accion?"Seguro de ELIMINARLO?":"Aceptar"}</button>
					<div style="height:2rem"></div>
				</div>
			</div>
		`}stateChanged(e,t){t!=dd&&t!=ld||(this.mediaSize=e.ui.media.size,this.current=e.screen.name),t==cd&&(this.item=e.entreComponentes.cargaUsuarios_Load01.item,this.sector=e.entreComponentes.cargaUsuarios_Load01.itemSector,this.accion=e.entreComponentes.cargaUsuarios_Load01.accion,"add"==this.accion?(this._apellido.value="",this._nombre.value="",this._email.value="",this._contacto.value=""):"edit"!=this.accion&&"delete"!=this.accion&&"view"!=this.accion||(this._apellido.value=this.item.apellido,this._nombre.value=this.item.nombre,this._email.value=this.item.email,this._contacto.value=this.item.contacto),this.hidden=!1),t!=ud&&t!=hd&&t!=fd||this.hidden||(Bo.dispatch(yi()),Bo.dispatch(D("Atencion!","El sector se actulizo correctamente","fondoOk",3e3)),this.hidden=!0),t!=pd&&t!=md&&t!=gd||this.hidden||Bo.dispatch(D("Atencion!","El usuario no fue actulizado, intente nuevamente","fondoError",3e3))}volver(){this.hidden=!0}grabar(e){let t=e.currentTarget;[].forEach.call(this.shadowRoot.querySelectorAll("[error]"),(e=>{e.removeAttribute("error")}));var r=!0;if(""==this._apellido.value&&(r=!1,this._apellido.setAttribute("error","")),""==this._nombre.value&&(r=!1,this._nombre.setAttribute("error","")),""!=this._email.value&&Va(this._email.value)||(r=!1,this._email.setAttribute("error","")),""==this._contacto.value&&(r=!1,this._contacto.setAttribute("error","")),r){let e={};e.apellido=this._apellido.value,e.nombre=this._nombre.value,e.email=this._email.value,e.contacto=this._contacto.value,e.identificador=([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,(e=>(e^crypto.getRandomValues(new Uint8Array(1))[0]&15>>e/4).toString(16))),e.sectorId=this.sector.id,"add"==this.accion?Bo.dispatch(((e,t)=>({type:Pr,body:e,token:t}))(e)):"edit"==this.accion?(e.identificador=this.item.identificacion,Bo.dispatch(((e,t)=>({type:qr,body:e,token:t}))(e))):"delete"==this.accion&&(e={},e.identificador=this.item.identificacion,e.sectorId=this.sector.id,Bo.dispatch(((e,t)=>({type:Lr,body:e,token:t}))(e)))}else t.disabled=!1,Bo.dispatch(D("Atencion!","Falta cargar campos.","fondoError",3e3))}static get properties(){return{mediaSize:{type:String,reflect:!0,attribute:"media-size"},layout:{type:String,reflect:!0},hidden:{type:Boolean,reflect:!0},area:{type:String},current:{type:String,reflect:!0}}}}window.customElements.define("carga-usuarios",vd);const bd="ui.media.timeStamp",yd="screen.timeStamp",wd="sectores.usuariosAll.timeStamp",Sd="sectores.usuariosAll.errorTimeStamp",Ad="sectores.activarIntegrante.timeStamp",_d="sectores.activarIntegrante.errorTimeStamp";class xd extends(Ml(Wn(Bo,Ad,_d,wd,Sd,bd,yd)(Vn))){constructor(){super(),this.area="body",this.current="",this.hidden=!0,this.dataSource=[],this.item={},this.grid=[],this.usuarioRol="CEMAP"}firstUpdated(){super.firstUpdated()}static get styles(){return Yo`
			${$l}
			${Bl}
			${Ws}
			${cs}
			:host {
				display: grid;
				position: relative;
				height: 100%;
				width: 100%;
				background-color: var(--color-fondo);
				grid-gap: 1rem;
				overflow-y: auto;
				justify-items: center;
			}

			:host([hidden]) {
				display: none;
			}
			.dmd-grid {
				height: 95%;
				min-height: 20rem;
				width: 95%;
				padding-top: 1rem;
			}
			.dmd-grid-datos-titulos,
			.dmd-grid-datos-registros {
				grid-template-columns: 14rem 14rem 13rem 6rem 7rem 14rem 14rem;
			}
			.dmd-grid-datos-registros[fondorojo] {
				color: var(--color-error) !important;
			}
			.dmd-grid-datos-registros[fondoverde] {
				color: green !important;
			}
			*[hidden] {
				display: none !important;
			}
		`}render(){return En`
			<div class="dmd-grid dmd-grid-theme-normal">
				<div class="dmd-grid-velo" hidden></div>
				<div class="dmd-grid-cabecera">
					<div @click=${this._menuOcultarDmdGrid}>${ha}</div>
					<label>Administracion de usuarios</label>
					<div class="dmd-grid-cabecera-find">
						<input class="dmd-grid-cabecera-find-input" hidden type="text" autocomplete="off" value="" />
						<buscar class="dmd-grid-cabecera-find-buscar">${pa}</buscar>
						<cerrar class="dmd-grid-cabecera-find-cerrar" hidden>${va}</cerrar>
					</div>
				</div>

				<div class="dmd-grid-cuerpo">
					<div class="dmd-grid-menu">
						<div title="Mostar / ocultar barra de menu" @click=${this._menuAmpliarDmdGrid}>${ba}<label style="display:none"></label></div>
						<div title="Atras" atras @click=${this.atras}>${wa}<label style="display:none">Atras</label></div>
						<div title="Roles" @click=${this.roles} ?hidden=${""==this.usuarioRol||"view"==this.accion}>${La}<label style="display:none">Roles</label></div>
						<div title="Activar" @click=${this.activar} ?hidden=${""==this.usuarioRol||"view"==this.accion}>${za}<label style="display:none">Activar</label></div>
					</div>
					<div class="dmd-grid-datos">
						<div class="dmd-grid-datos-titulos">
							<div .campo=${"apellido"} dmd-grid-orden class="dmd-grid-datos-titulo">
								<label>Apellido</label>
							</div>
							<div .campo=${"nombre"} dmd-grid-orden class="dmd-grid-datos-titulo">
								<label>Nombre</label>
							</div>
							<div .campo=${"email"} dmd-grid-orden class="dmd-grid-datos-titulo">
								<label>Email</label>
							</div>
							<div .campo=${"__activo"} dmd-grid-orden class="dmd-grid-datos-titulo">
								<label>Activo</label>
							</div>
							<div .campo=${"__esResponsable"} class="dmd-grid-datos-titulo">
								<label>Responsable</label>
							</div>
							<div .campo=${"__sector"} dmd-grid-orden class="dmd-grid-datos-titulo">
								<label>Sector</label>
							</div>
							<div .campo=${"contacto"} class="dmd-grid-datos-titulo">
								<label>Contacto</label>
							</div>
						</div>
						${this.grid.map(((e,t)=>En`
								<div class="dmd-grid-datos-registros" .item=${e} .index=${t} ?fondorojo=${"Rechazado"==e.estado} ?fondoverde=${"Conciliado"==e.estado} @click=${this._seleccionarRegistroDmdGrid}>
									<div class="dmd-grid-datos-registro" style="text-align:left">${e.apellido}</div>
									<div class="dmd-grid-datos-registro" style="text-align:left">${e.nombre}</div>
									<div class="dmd-grid-datos-registro" style="text-align:left">${e.email}</div>
									<div class="dmd-grid-datos-registro" style="text-align:center">${e.__activo}</div>
									<div class="dmd-grid-datos-registro" style="text-align:center">${e.__esResponsable}</div>
									<div class="dmd-grid-datos-registro" style="text-align:left	">${e.__sector}</div>
									<div class="dmd-grid-datos-registro" style="text-align:rigth">${e.contacto}</div>
								</div>
							`))}
					</div>
				</div>
			</div>
		`}roles(){let e=this.shadowRoot.querySelector("[seleccionado]");e?e.item.activo?Bo.dispatch(xr(this.item,this.item.sector,"edit")):Bo.dispatch(D("Atencion!","El usuario no esta activado.","fondoError",3e3)):Bo.dispatch(D("Atencion!","No selecciono registro.","fondoError",3e3))}activar(e){let t=this.shadowRoot.querySelector("[seleccionado]");if(t)if(t.item.activo)Bo.dispatch(D("Atencion!","El usuario no esta activado.","fondoError",3e3));else{let e={};e.identificador=t.item.identificacion,e.sectorId=t.item.sector.id,Bo.dispatch(((e,t)=>({type:Br,body:e,token:t}))(e))}else Bo.dispatch(D("Atencion!","No selecciono registro.","fondoError",3e3))}_itemSeleccionado(e){this.item=e.currentTarget.item}atras(){Bo.dispatch(Z())}stateChanged(e,t){if(t==yd||t==bd){this.mediaSize=e.ui.media.size,this.hidden=!0,this.current=e.screen.name;const t=q(e,this.area),r=-1!="-abmUsuarios-".indexOf("-"+e.screen.name+"-");t&&r&&(this.hidden=!1,Bo.dispatch(wi()))}t==wd&&(this.dataSource=e.sectores.usuariosAll.entities,this.grid=[],this.dataSource.forEach(((e,t)=>{e.__activo=e.activo?"Activo":"Inactivo",e.__esResponsable=e.esResponsable?"Si":"No",e.__sector=e.sector.descripcion,this.grid.push(e)})),this._buscarDmdGrid()),t==Sd&&"abmUsuarios"==e.screen.name&&Bo.dispatch(D("Error","No se pudo acceder a los datos, verifique su conexion","fondoError",4e3)),t==Ad&&(Bo.dispatch(wi()),Bo.dispatch(D("Activado","El usuario fue activado","fondoOk",4e3))),t==_d&&"abmUsuarios"==e.screen.name&&Bo.dispatch(D("Error","No se pudo activar al usuario, verifique su conexion","fondoError",4e3))}static get properties(){return{grid:{type:Object,state:!0},mediaSize:{type:String,reflect:!0,attribute:"media-size"},layout:{type:String,reflect:!0},hidden:{type:Boolean,reflect:!0},area:{type:String},current:{type:String,reflect:!0}}}}window.customElements.define("abm-usuarios",xd);const Td=Yo`
	.dmd-checkbox {
		display: grid;
		position: relative;
		grid-template-rows: 1fr auto 1fr;
		grid-gap: 0rem;
	}
	.dmd-checkbox .dmd-checkbox-titulo {
		color: var(--on-aplicacion);
		font-size: 0.9rem;
		font-weight: 500;
		padding-left: 0.6rem;
		align-self: center;
		transition: all 0.3s ease-in-out;
	}
	.dmd-checkbox:focus-within .dmd-checkbox-titulo {
		color: var(--primario);
		font-weight: 900;
		transition: all 0.3s ease-in-out;
	}

	.dmd-checkbox .dmd-checkbox-checkbox {
		display: grid;
		background-color: var(--formularioo);
		border: 1px solid var(--primario);
		color: var(--on-formulario);
		font-size: 0.9rem;
		font-weight: var(--font-bajada-weight);
		outline: none;
		border-radius: 0.4rem;
		column-gap: 0.5rem;
		padding-left: 0.5rem;
		height: 2.1rem;
		transition: all 0.3s ease-in-out;
	}
	.dmd-checkbox .dmd-checkbox-check {
		padding: 0 !important;
		margin: 0.1rem;
	}

	.dmd-checkbox:focus-within .dmd-checkbox-checkbox {
		background-color: var(--formulario);
		border-color: var(--terciario);
		color: var(--on-formulario);
		transition: all 0.3s ease-in-out;
	}

	.dmd-checkbox[error] .dmd-checkbox-checkbox {
		border: 1px solid var(--error);
	}

	.dmd-checkbox[horizontal] .dmd-checkbox-checkbox {
		grid-template-columns: auto auto;
		justify-content: left;
		align-items: center;
	}
	.dmd-checkbox .dmd-checkbox-error {
		color: var(--error);
		font-size: 0.7rem;
		font-weight: 300;
		display: none;
	}
	.dmd-checkbox[error] .dmd-checkbox-error {
		display: grid;
	}
	.dmd-checkbox .dmd-checkbox-help {
		margin-left: 0.5rem;
		font-size: 0.7rem;
		font-weight: 300;
		display: none;
	}
	.dmd-checkbox[helper] .dmd-checkbox-help {
		display: grid;
	}
	.dmd-checkbox[error] .dmd-checkbox-help {
		display: none;
	}
	.dmd-checkbox svg {
		display: none;
		position: absolute;
		top: 0.4rem;
		right: 0.1rem;
		height: 1.1rem;
		width: 1.1rem;
		transform: translateY(-50%) scale(0.9);
		fill: var(--error);
	}
	.dmd-checkbox[error] svg {
		display: grid;
	}
`,Ed="ui.media.timeStamp",kd="screen.timeStamp",Cd="entreComponentes.verRoles__Load01.timeStamp",Dd="sectores.asignarRolIntegrante.timeStamp",Rd="sectores.asignarRolIntegrante.errorTimeStamp",Id="sectores.quitarRolIntegrante.timeStamp",jd="sectores.quitarRolIntegrante.errorTimeStamp",Od="sectores.all.timeStamp",zd="sectores.all.errorTimeStamp";class Pd extends(Wn(Bo,Od,zd,Id,jd,Dd,Rd,Cd,Ed,kd)(Vn)){constructor(){super(),this.hidden=!0,this.area="body",this.current="",this.accion="",this.item={},this.sector=null,this.roles=[{rol:"administrador",esta:!1},{rol:"supervisor",esta:!1},{rol:"usuario",esta:!1},{rol:"sin acceso",esta:!1}]}static get styles(){return Yo`
			${cs}
			${Ws}
			${Td}
			:host {
				display: grid;
				position: fixed;
				top: 0;
				left: 0;
				height: 100vh;
				width: 100vw;
				background-color: rgba(0, 0, 0, 0.4);
				z-index: 990;
			}
			:host([hidden]) {
				display: none;
			}
			#cuerpo {
				display: grid;
				position: relative;
				height: max-content;
				width: 100%;
				background-color: var(--formulario);
				grid-template-columns: 80%;
				grid-gap: 0rem;
				justify-content: center;
				align-content: flex-start;
				overflow-y: auto;
			}
			:host([media-size="large"]) #cuerpo {
				width: 60%;
				place-self: center;
				border-radius: 2rem;
			}
			#titulo {
				font-size: 1.2rem;
				padding-top: 2rem;
				height: 2rem;
				justify-self: center;
				color: var(--on-formulario);
			}
			hr {
				border-top: 1px solid var(--on-formulario-bajada);
				width: 100%;
			}
			#datos {
				display: grid;
				position: relative;
				height: 100%;
				grid-auto-flow: column;
				grid-gap: 1rem;
				overflow-y: auto;
				overflow-x: hidden;
				justify-self: center;
			}
			#datos::-webkit-scrollbar {
				display: none;
			}
			.dmd-button {
				justify-self: center;
			}
			.x {
				display: grid;
				position: absolute;
				top: 1rem;
				right: 1rem;
				font-size: 1.2rem;
				cursor: pointer;
				color: var(--on-formulario);
			}
		`}get _descripcion(){return this.shadowRoot.querySelector("#descripcion")}get _botonAceptar(){return this.shadowRoot.getElementById("btnAceptar")}firstUpdated(){super.firstUpdated()}willUpdate(e){e.has("")}render(){return En`
			<div id="cuerpo">
				<div class="x" @click="${this.volver}">X</div>
				<div id="titulo" ?hidden=${"add"!=this.accion}>Nuevo Sector</div>
				<div id="titulo" ?hidden=${"view"!=this.accion}>Visualizacion del Sector</div>
				<div id="titulo" ?hidden=${"edit"!=this.accion}>Roles de usuario: ${this.item?.nombre+" "+this.item?.apellido}</div>
				<hr />
				<div style="height:2rem"></div>
				<div id="datos">
					${this.roles.map(((e,t)=>En` <div class="dmd-checkbox" id="check" horizontal>
							<label class="dmd-checkbox-titulo"></label>
							<div class="dmd-checkbox-checkbox" tabindex="0">
								<label class="dmd-checkbox-label">${e.rol}</label>
								<input type="checkbox" ?checked=${e.esta} class="dmd-checkbox-check" .item=${e} @change=${this.cambio} ></input>
							</div>
							<label class="dmd-checkbox-error"></label>
							<label class="dmd-checkbox-help"></label>
							${ga}
						</div>`))}
				</div>
				<div style="height:4rem"></div>
			</div>
		`}cambio(e){let t={};t.identificador=this.item.identificacion,t.sectorId=this.sector.id,t.rol=e.currentTarget.item.rol,e.currentTarget.checked?Bo.dispatch(((e,t)=>({type:$r,body:e,token:t}))(t)):Bo.dispatch(((e,t)=>({type:Mr,body:e,token:t}))(t))}stateChanged(e,t){if(t!=kd&&t!=Ed||(this.mediaSize=e.ui.media.size,this.current=e.screen.name),t==Cd){let t=this.shadowRoot.querySelectorAll(".dmd-checkbox-check");t.forEach((e=>e.checked=!1)),this.item=e.entreComponentes.verRoles__Load01.item,this.sector=e.entreComponentes.verRoles__Load01.itemSector,this.accion=e.entreComponentes.verRoles__Load01.accion,this.roles.forEach(((e,r)=>{this.item.roles.forEach((i=>{e.rol==i.nombre&&(t[r].checked=!0,e.esta=!0)}))})),"add"==this.accion||this.accion,this.hidden=!1,this.update()}if(t!=Dd&&t!=Id||this.hidden||(Bo.dispatch(D("Atencion!","El ROL se actulizo correctamente","fondoOk",1e3)),"verSectores"==e.screen.name&&Bo.dispatch(yi()),"abmUsuarios"==e.screen.name&&Bo.dispatch(wi())),t!=Rd&&t!=jd||this.hidden||Bo.dispatch(D("Atencion!","El ROL no fue actulizado, intente nuevamente","fondoError",3e3)),t==Od&&!this.hidden){let t=null;e.sectores.all.entities.forEach(((e,r)=>{e.id==this.sector&&(t=e)})),t&&(Bo.dispatch(Sr(t.usuarios,t,"abm")),Bo.dispatch(xr(t.usuarios.roles,this.sector,"edit")))}t==zd&&this.hidden}volver(){this.hidden=!0}static get properties(){return{roles:{type:Object,reflect:!0},mediaSize:{type:String,reflect:!0,attribute:"media-size"},layout:{type:String,reflect:!0},hidden:{type:Boolean,reflect:!0},area:{type:String},current:{type:String,reflect:!0}}}}window.customElements.define("ver-roles",Pd);const Ld="ui.media.timeStamp",qd="screen.timeStamp";class Ud extends(Wn(Bo,Ld,qd,"ui.menu.timeStamp")(Vn)){constructor(){super(),window.onpopstate=e=>{e.state?Bo.dispatch(Y(e.state.option,!0)):window.history.back()},window.onkeyup=e=>{if(e.altKey&&107==e.keyCode){const e=document.querySelector("html");if("2.3vh"==e.style.fontSize)return;""==e.style.fontSize&&(e.style.fontSize="2.2vh"),e.style.fontSize=parseFloat(e.style.fontSize.replace("vh",""))+.2+"vh"}if(e.altKey&&109==e.keyCode){const e=document.querySelector("html");if("0.5vh"==e.style.fontSize)return;""==e.style.fontSize&&(e.style.fontSize="2.3vh"),e.style.fontSize=parseFloat(e.style.fontSize.replace("vh",""))-.2+"vh"}}}static get styles(){return Yo`
            ${Xn}
            ${Jn}
            :host {
                display: grid;
                padding: 0;
                background-color: var(--aplicacion);
                overflow: hidden;
            }

            :host::-webkit-scrollbar {
                width: 0.5vw;
                cursor: pointer;
            }
            :host::-webkit-scrollbar([media-size="small"]) {
                display: none;
            }
            :host::-webkit-scrollbar-thumb {
                background: var(--secundario);
                border-radius: 5px;
            }
            #spinner {
                position: absolute;
                z-index: 100;
                height: 3rem;
                width: 3rem;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
            }
        `}render(){return En`
            <spinner-control id="spinner" aro></spinner-control>

            <menu-principal id="menu" class="header"></menu-principal>

            <inicial-screen id="inicial" class="body"></inicial-screen>
            <solicitar-autorizacion id="solicitarAutorizacion" class="body"></solicitar-autorizacion>
            <esperar-autorizacion id="esperarAutorizacion" class="body"></esperar-autorizacion>
            <amparos-screen id="amparos" class="body"></amparos-screen>
            <busqueda-descripcion-screen id="busquedaDescripcion" class="body"></busqueda-descripcion-screen>
            <tarea-carga-screen id="tareaCarga" class="body"></tarea-carga-screen>
            <plan-carga-screen id="planCarga" class="body"></plan-carga-screen>
            <ver-sectores id="verSectores" class="body"></ver-sectores>
            <carga-sectores id="cargaSectores" class="body"></carga-sectores>
            <ver-usuarios id="verUsuarios" class="body"></ver-usuarios>
            <carga-usuarios id="cargaUsuarios" class="body"></carga-usuarios>
            <abm-usuarios id="abmUsuarios" class="body"></abm-usuarios>
            <ver-roles id="verRoles" class="body"></ver-roles>

            <pantalla-warning id="warning"></pantalla-warning>
            <alert-control></alert-control>
            <confirm-control></confirm-control>
        `}stateChanged(e,t){t!=Ld&&t!=qd||(this.mediaSize=e.ui.media.size,this.orientation=e.ui.media.orientation,this.layout=L(e).name,!window.MSStream&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&("standalone"in window.navigator&&window.navigator.standalone?this.style.height=document.documentElement.offsetHeight?document.documentElement.offsetHeight:window.innerHeight+"px":"portrait"==e.ui.media.orientation?this.style.height=window.innerHeight<window.innerWidth?window.innerWidth:window.innerHeight+"px":this.style.height=window.innerHeight>window.innerWidth?window.innerWidth:window.innerHeight+"px")),this.update()}static get properties(){return{mediaSize:{type:String,reflect:!0,attribute:"media-size"},layout:{type:String,reflect:!0},orientation:{type:String,reflect:!0}}}}window.customElements.define("view-manager",Ud);r(486);try{self["workbox:window:6.5.2"]&&_()}catch(Go){}function Md(e,t){return new Promise((function(r){var i=new MessageChannel;i.port1.onmessage=function(e){r(e.data)},e.postMessage(t,[i.port2])}))}function $d(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function Bd(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,i=new Array(t);r<t;r++)i[r]=e[r];return i}try{self["workbox:core:6.5.2"]&&_()}catch(Go){}var Nd=function(){var e=this;this.promise=new Promise((function(t,r){e.resolve=t,e.reject=r}))};function Hd(e,t){var r=location.href;return new URL(e,r).href===new URL(t,r).href}var Fd=function(e,t){this.type=e,Object.assign(this,t)};function Gd(e,t,r){return r?t?t(e):e:(e&&e.then||(e=Promise.resolve(e)),t?e.then(t):e)}function Vd(){}var Qd={type:"SKIP_WAITING"};function Yd(e,t){if(!t)return e&&e.then?e.then(Vd):Promise.resolve()}var Zd=function(e){var t,r;function i(t,r){var i,o;return void 0===r&&(r={}),(i=e.call(this)||this).nn={},i.tn=0,i.rn=new Nd,i.en=new Nd,i.on=new Nd,i.un=0,i.an=new Set,i.cn=function(){var e=i.fn,t=e.installing;i.tn>0||!Hd(t.scriptURL,i.sn.toString())||performance.now()>i.un+6e4?(i.vn=t,e.removeEventListener("updatefound",i.cn)):(i.hn=t,i.an.add(t),i.rn.resolve(t)),++i.tn,t.addEventListener("statechange",i.ln)},i.ln=function(e){var t=i.fn,r=e.target,o=r.state,n=r===i.vn,a={sw:r,isExternal:n,originalEvent:e};!n&&i.mn&&(a.isUpdate=!0),i.dispatchEvent(new Fd(o,a)),"installed"===o?i.wn=self.setTimeout((function(){"installed"===o&&t.waiting===r&&i.dispatchEvent(new Fd("waiting",a))}),200):"activating"===o&&(clearTimeout(i.wn),n||i.en.resolve(r))},i.dn=function(e){var t=i.hn,r=t!==navigator.serviceWorker.controller;i.dispatchEvent(new Fd("controlling",{isExternal:r,originalEvent:e,sw:t,isUpdate:i.mn})),r||i.on.resolve(t)},i.gn=(o=function(e){var t=e.data,r=e.ports,o=e.source;return Gd(i.getSW(),(function(){i.an.has(o)&&i.dispatchEvent(new Fd("message",{data:t,originalEvent:e,ports:r,sw:o}))}))},function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];try{return Promise.resolve(o.apply(this,e))}catch(e){return Promise.reject(e)}}),i.sn=t,i.nn=r,navigator.serviceWorker.addEventListener("message",i.gn),i}r=e,(t=i).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r;var o,n,a=i.prototype;return a.register=function(e){var t=(void 0===e?{}:e).immediate,r=void 0!==t&&t;try{var i=this;return function(e,t){var r=e();return r&&r.then?r.then(t):t()}((function(){if(!r&&"complete"!==document.readyState)return Yd(new Promise((function(e){return window.addEventListener("load",e)})))}),(function(){return i.mn=Boolean(navigator.serviceWorker.controller),i.yn=i.pn(),Gd(i.bn(),(function(e){i.fn=e,i.yn&&(i.hn=i.yn,i.en.resolve(i.yn),i.on.resolve(i.yn),i.yn.addEventListener("statechange",i.ln,{once:!0}));var t=i.fn.waiting;return t&&Hd(t.scriptURL,i.sn.toString())&&(i.hn=t,Promise.resolve().then((function(){i.dispatchEvent(new Fd("waiting",{sw:t,wasWaitingBeforeRegister:!0}))})).then((function(){}))),i.hn&&(i.rn.resolve(i.hn),i.an.add(i.hn)),i.fn.addEventListener("updatefound",i.cn),navigator.serviceWorker.addEventListener("controllerchange",i.dn),i.fn}))}))}catch(e){return Promise.reject(e)}},a.update=function(){try{return this.fn?Yd(this.fn.update()):void 0}catch(e){return Promise.reject(e)}},a.getSW=function(){return void 0!==this.hn?Promise.resolve(this.hn):this.rn.promise},a.messageSW=function(e){try{return Gd(this.getSW(),(function(t){return Md(t,e)}))}catch(e){return Promise.reject(e)}},a.messageSkipWaiting=function(){this.fn&&this.fn.waiting&&Md(this.fn.waiting,Qd)},a.pn=function(){var e=navigator.serviceWorker.controller;return e&&Hd(e.scriptURL,this.sn.toString())?e:void 0},a.bn=function(){try{var e=this;return function(e,t){try{var r=e()}catch(e){return t(e)}return r&&r.then?r.then(void 0,t):r}((function(){return Gd(navigator.serviceWorker.register(e.sn,e.nn),(function(t){return e.un=performance.now(),t}))}),(function(e){throw e}))}catch(e){return Promise.reject(e)}},o=i,(n=[{key:"active",get:function(){return this.en.promise}},{key:"controlling",get:function(){return this.on.promise}}])&&$d(o.prototype,n),i}(function(){function e(){this.Pn=new Map}var t=e.prototype;return t.addEventListener=function(e,t){this.Sn(e).add(t)},t.removeEventListener=function(e,t){this.Sn(e).delete(t)},t.dispatchEvent=function(e){e.target=this;for(var t,r=function(e,t){var r;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=function(e,t){if(e){if("string"==typeof e)return Bd(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Bd(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var i=0;return function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(r=e[Symbol.iterator]()).next.bind(r)}(this.Sn(e.type));!(t=r()).done;)(0,t.value)(e)},t.Sn=function(e){return this.Pn.has(e)||this.Pn.set(e,new Set),this.Pn.get(e)},e}());"serviceWorker"in navigator&&window.addEventListener("load",(()=>{navigator.serviceWorker.register("./service-worker.js").then((e=>{console.log("SW registered: ",e)})).catch((e=>{console.log("SW registration failed: ",e)}))})),(()=>{if("serviceWorker"in navigator){const e=new Zd("./service-worker.js");let t;const r=r=>{alert("La versión 1.0.20 se encuentra discontinuada. Se actualizará a la nueva versión."),e.addEventListener("controlling",(e=>{window.location.reload()})),t&&t.waiting&&Md(t.waiting,{type:"SKIP_WAITING"})};e.addEventListener("waiting",r),e.addEventListener("externalwaiting",r),e.register().then((e=>t=e))}})(),viewMode("main"),Bo.dispatch({type:b}),console.log("Sirviendo datos de :https://scatest.uocra.net");const Wd={login:(e,t)=>{Bo.dispatch(login(e,t))},cambioClave:()=>{Bo.dispatch(Y("cambioClave"))},miembro:()=>{Bo.dispatch(Y("serMiembro"))}}})(),EntryPoint=i})();