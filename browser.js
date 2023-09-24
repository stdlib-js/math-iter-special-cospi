// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,t;r=this,t=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,t=Object.defineProperty;function n(r){return"number"==typeof r}function e(r){var t,n="";for(t=0;t<r;t++)n+="0";return n}function o(r,t,n){var o=!1,i=t-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(o=!0,r=r.substr(1)),r=n?r+e(i):e(i)+r,o&&(r="-"+r)),r}var i=String.prototype.toLowerCase,u=String.prototype.toUpperCase;function a(r){var t,e,a;switch(r.specifier){case"b":t=2;break;case"o":t=8;break;case"x":case"X":t=16;break;default:t=10}if(e=r.arg,a=parseInt(e,10),!isFinite(a)){if(!n(e))throw new Error("invalid integer. Value: "+e);a=0}return a<0&&("u"===r.specifier||10!==t)&&(a=4294967295+a+1),a<0?(e=(-a).toString(t),r.precision&&(e=o(e,r.precision,r.padRight)),e="-"+e):(e=a.toString(t),a||r.precision?r.precision&&(e=o(e,r.precision,r.padRight)):e="",r.sign&&(e=r.sign+e)),16===t&&(r.alternate&&(e="0x"+e),e=r.specifier===u.call(r.specifier)?u.call(e):i.call(e)),8===t&&r.alternate&&"0"!==e.charAt(0)&&(e="0"+e),e}function c(r){return"string"==typeof r}var f=Math.abs,l=String.prototype.toLowerCase,s=String.prototype.toUpperCase,p=String.prototype.replace,y=/e\+(\d)$/,b=/e-(\d)$/,v=/^(\d+)$/,d=/^(\d+)e/,g=/\.0$/,w=/\.0*e/,h=/(\..*[^0])0*e/;function m(r){var t,e,o=parseFloat(r.arg);if(!isFinite(o)){if(!n(r.arg))throw new Error("invalid floating-point number. Value: "+e);o=r.arg}switch(r.specifier){case"e":case"E":e=o.toExponential(r.precision);break;case"f":case"F":e=o.toFixed(r.precision);break;case"g":case"G":f(o)<1e-4?((t=r.precision)>0&&(t-=1),e=o.toExponential(t)):e=o.toPrecision(r.precision),r.alternate||(e=p.call(e,h,"$1e"),e=p.call(e,w,"e"),e=p.call(e,g,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return e=p.call(e,y,"e+0$1"),e=p.call(e,b,"e-0$1"),r.alternate&&(e=p.call(e,v,"$1."),e=p.call(e,d,"$1.e")),o>=0&&r.sign&&(e=r.sign+e),e=r.specifier===s.call(r.specifier)?s.call(e):l.call(e)}function j(r){var t,n="";for(t=0;t<r;t++)n+=" ";return n}function E(r,t,n){var e=t-r.length;return e<0?r:r=n?r+j(e):j(e)+r}var A=String.fromCharCode,_=isNaN,O=Array.isArray;function T(r){var t={};return t.specifier=r.specifier,t.precision=void 0===r.precision?1:r.precision,t.width=r.width,t.flags=r.flags||"",t.mapping=r.mapping,t}function S(r){var t,n,e,i,u,f,l,s,p;if(!O(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(f="",l=1,s=0;s<r.length;s++)if(c(e=r[s]))f+=e;else{if(t=void 0!==e.precision,!(e=T(e)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+e+"`.");for(e.mapping&&(l=e.mapping),n=e.flags,p=0;p<n.length;p++)switch(i=n.charAt(p)){case" ":e.sign=" ";break;case"+":e.sign="+";break;case"-":e.padRight=!0,e.padZeros=!1;break;case"0":e.padZeros=n.indexOf("-")<0;break;case"#":e.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===e.width){if(e.width=parseInt(arguments[l],10),l+=1,_(e.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+e.width+"`.");e.width<0&&(e.padRight=!0,e.width=-e.width)}if(t&&"*"===e.precision){if(e.precision=parseInt(arguments[l],10),l+=1,_(e.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+e.precision+"`.");e.precision<0&&(e.precision=1,t=!1)}switch(e.arg=arguments[l],e.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":t&&(e.padZeros=!1),e.arg=a(e);break;case"s":e.maxWidth=t?e.precision:-1;break;case"c":if(!_(e.arg)){if((u=parseInt(e.arg,10))<0||u>127)throw new Error("invalid character code. Value: "+e.arg);e.arg=_(u)?String(e.arg):A(u)}break;case"e":case"E":case"f":case"F":case"g":case"G":t||(e.precision=6),e.arg=m(e);break;default:throw new Error("invalid specifier: "+e.specifier)}e.maxWidth>=0&&e.arg.length>e.maxWidth&&(e.arg=e.arg.substring(0,e.maxWidth)),e.padZeros?e.arg=o(e.arg,e.width||e.precision,e.padRight):e.width&&(e.arg=E(e.arg,e.width,e.padRight)),f+=e.arg||"",l+=1}return f}var x=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function N(r){var t={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(t.precision="1"),t}function U(r){var t,n,e,o;for(n=[],o=0,e=x.exec(r);e;)(t=r.slice(o,x.lastIndex-e[0].length)).length&&n.push(t),n.push(N(e)),o=x.lastIndex,e=x.exec(r);return(t=r.slice(o)).length&&n.push(t),n}function B(r){return"string"==typeof r}function F(r){var t,n,e;if(!B(r))throw new TypeError(F("invalid argument. First argument must be a string. Value: `%s`.",r));for(t=U(r),(n=new Array(arguments.length))[0]=t,e=1;e<n.length;e++)n[e]=arguments[e];return S.apply(null,n)}var I,V=Object.prototype,k=V.toString,P=V.__defineGetter__,L=V.__defineSetter__,C=V.__lookupGetter__,G=V.__lookupSetter__;I=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?t:function(r,t,n){var e,o,i,u;if("object"!=typeof r||null===r||"[object Array]"===k.call(r))throw new TypeError(F("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof n||null===n||"[object Array]"===k.call(n))throw new TypeError(F("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((o="value"in n)&&(C.call(r,t)||G.call(r,t)?(e=r.__proto__,r.__proto__=V,delete r[t],r[t]=n.value,r.__proto__=e):r[t]=n.value),i="get"in n,u="set"in n,o&&(i||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&P&&P.call(r,t,n.get),u&&L&&L.call(r,t,n.set),r};var M=I;function R(r,t,n){M(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}var $=/./;function H(r){return"boolean"==typeof r}var W="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function X(){return W&&"symbol"==typeof Symbol.toStringTag}var Z=Object.prototype.toString,Y=Object.prototype.hasOwnProperty;function z(r,t){return null!=r&&Y.call(r,t)}var q="function"==typeof Symbol?Symbol:void 0,D="function"==typeof q?q.toStringTag:"",J=X()?function(r){var t,n,e;if(null==r)return Z.call(r);n=r[D],t=z(r,D);try{r[D]=void 0}catch(t){return Z.call(r)}return e=Z.call(r),t?r[D]=n:delete r[D],e}:function(r){return Z.call(r)},K=Boolean,Q=Boolean.prototype.toString,rr=X();function tr(r){return"object"==typeof r&&(r instanceof K||(rr?function(r){try{return Q.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===J(r)))}function nr(r){return H(r)||tr(r)}function er(){return new Function("return this;")()}R(nr,"isPrimitive",H),R(nr,"isObject",tr);var or="object"==typeof self?self:null,ir="object"==typeof window?window:null,ur="object"==typeof globalThis?globalThis:null,ar=function(r){if(arguments.length){if(!H(r))throw new TypeError(F("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return er()}if(ur)return ur;if(or)return or;if(ir)return ir;throw new Error("unexpected error. Unable to resolve global object.")}(),cr=ar.document&&ar.document.childNodes,fr=Int8Array;function lr(){return/^\s*function\s*([^(]*)/i}var sr,pr=/^\s*function\s*([^(]*)/i;R(lr,"REGEXP",pr),sr=Array.isArray?Array.isArray:function(r){return"[object Array]"===J(r)};var yr=sr;function br(r){return null!==r&&"object"==typeof r}var vr=function(r){if("function"!=typeof r)throw new TypeError(F("invalid argument. Must provide a function. Value: `%s`.",r));return function(t){var n,e;if(!yr(t))return!1;if(0===(n=t.length))return!1;for(e=0;e<n;e++)if(!1===r(t[e]))return!1;return!0}}(br);function dr(r){var t,n,e,o;if(("Object"===(n=J(r).slice(8,-1))||"Error"===n)&&r.constructor){if("string"==typeof(e=r.constructor).name)return e.name;if(t=pr.exec(e.toString()))return t[1]}return br(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":n}R(br,"isObjectLikeArray",vr);var gr="function"==typeof $||"object"==typeof fr||"function"==typeof cr?function(r){return dr(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"==(t=typeof r)?dr(r).toLowerCase():t};function wr(r){return"function"===gr(r)}var hr=/./;function mr(r,t,n){M(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}function jr(r){return"boolean"==typeof r}var Er=Boolean.prototype.toString,Ar=X();function _r(r){return"object"==typeof r&&(r instanceof K||(Ar?function(r){try{return Er.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===J(r)))}function Or(r){return jr(r)||_r(r)}function Tr(){return new Function("return this;")()}mr(Or,"isPrimitive",jr),mr(Or,"isObject",_r);var Sr="object"==typeof self?self:null,xr="object"==typeof window?window:null,Nr="object"==typeof globalThis?globalThis:null,Ur=function(r){if(arguments.length){if(!jr(r))throw new TypeError(F("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return Tr()}if(Nr)return Nr;if(Sr)return Sr;if(xr)return xr;throw new Error("unexpected error. Unable to resolve global object.")}(),Br=Ur.document&&Ur.document.childNodes,Fr=Int8Array;function Ir(){return/^\s*function\s*([^(]*)/i}var Vr=/^\s*function\s*([^(]*)/i;function kr(r){return null!==r&&"object"==typeof r}mr(Ir,"REGEXP",Vr);var Pr=function(r){if("function"!=typeof r)throw new TypeError(F("invalid argument. Must provide a function. Value: `%s`.",r));return function(t){var n,e;if(!yr(t))return!1;if(0===(n=t.length))return!1;for(e=0;e<n;e++)if(!1===r(t[e]))return!1;return!0}}(kr);function Lr(r){var t,n,e,o;if(("Object"===(n=J(r).slice(8,-1))||"Error"===n)&&r.constructor){if("string"==typeof(e=r.constructor).name)return e.name;if(t=Vr.exec(e.toString()))return t[1]}return kr(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":n}mr(kr,"isObjectLikeArray",Pr);var Cr="function"==typeof hr||"object"==typeof Fr||"function"==typeof Br?function(r){return Lr(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"==(t=typeof r)?Lr(r).toLowerCase():t};function Gr(r){var t=typeof r;return null!==r&&("object"===t||"function"===t)&&function(r){return"function"===Cr(r)}(r.next)}function Mr(r,t,n){M(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}function Rr(r){return"number"==typeof r}var $r=Number,Hr=$r.prototype.toString,Wr=X();function Xr(r){return"object"==typeof r&&(r instanceof $r||(Wr?function(r){try{return Hr.call(r),!0}catch(r){return!1}}(r):"[object Number]"===J(r)))}function Zr(r){return Rr(r)||Xr(r)}Mr(Zr,"isPrimitive",Rr),Mr(Zr,"isObject",Xr);var Yr="function"==typeof q&&"symbol"==typeof q("foo")&&z(q,"iterator")&&"symbol"==typeof q.iterator?Symbol.iterator:null,zr=/./;function qr(r,t,n){M(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}function Dr(r){return"boolean"==typeof r}var Jr=Boolean.prototype.toString,Kr=X();function Qr(r){return"object"==typeof r&&(r instanceof K||(Kr?function(r){try{return Jr.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===J(r)))}function rt(r){return Dr(r)||Qr(r)}function tt(){return new Function("return this;")()}qr(rt,"isPrimitive",Dr),qr(rt,"isObject",Qr);var nt="object"==typeof self?self:null,et="object"==typeof window?window:null,ot="object"==typeof globalThis?globalThis:null,it=function(r){if(arguments.length){if(!Dr(r))throw new TypeError(F("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return tt()}if(ot)return ot;if(nt)return nt;if(et)return et;throw new Error("unexpected error. Unable to resolve global object.")}(),ut=it.document&&it.document.childNodes,at=Int8Array;function ct(){return/^\s*function\s*([^(]*)/i}var ft=/^\s*function\s*([^(]*)/i;function lt(r){return null!==r&&"object"==typeof r}qr(ct,"REGEXP",ft);var st=function(r){if("function"!=typeof r)throw new TypeError(F("invalid argument. Must provide a function. Value: `%s`.",r));return function(t){var n,e;if(!yr(t))return!1;if(0===(n=t.length))return!1;for(e=0;e<n;e++)if(!1===r(t[e]))return!1;return!0}}(lt);function pt(r){var t,n,e,o;if(("Object"===(n=J(r).slice(8,-1))||"Error"===n)&&r.constructor){if("string"==typeof(e=r.constructor).name)return e.name;if(t=ft.exec(e.toString()))return t[1]}return lt(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":n}qr(lt,"isObjectLikeArray",st);var yt="function"==typeof zr||"object"==typeof at||"function"==typeof ut?function(r){return pt(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"==(t=typeof r)?pt(r).toLowerCase():t};function bt(r){return"function"===yt(r)}var vt=Object,dt=/./;function gt(r,t,n){M(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}function wt(r){return"boolean"==typeof r}var ht=Boolean.prototype.toString,mt=X();function jt(r){return"object"==typeof r&&(r instanceof K||(mt?function(r){try{return ht.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===J(r)))}function Et(r){return wt(r)||jt(r)}function At(){return new Function("return this;")()}gt(Et,"isPrimitive",wt),gt(Et,"isObject",jt);var _t="object"==typeof self?self:null,Ot="object"==typeof window?window:null,Tt="object"==typeof globalThis?globalThis:null,St=function(r){if(arguments.length){if(!wt(r))throw new TypeError(F("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return At()}if(Tt)return Tt;if(_t)return _t;if(Ot)return Ot;throw new Error("unexpected error. Unable to resolve global object.")}(),xt=St.document&&St.document.childNodes,Nt=Int8Array;function Ut(){return/^\s*function\s*([^(]*)/i}var Bt=/^\s*function\s*([^(]*)/i;function Ft(r){return null!==r&&"object"==typeof r}gt(Ut,"REGEXP",Bt);var It=function(r){if("function"!=typeof r)throw new TypeError(F("invalid argument. Must provide a function. Value: `%s`.",r));return function(t){var n,e;if(!yr(t))return!1;if(0===(n=t.length))return!1;for(e=0;e<n;e++)if(!1===r(t[e]))return!1;return!0}}(Ft);function Vt(r){var t,n,e,o;if(("Object"===(n=J(r).slice(8,-1))||"Error"===n)&&r.constructor){if("string"==typeof(e=r.constructor).name)return e.name;if(t=Bt.exec(e.toString()))return t[1]}return Ft(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":n}gt(Ft,"isObjectLikeArray",It);var kt,Pt,Lt="function"==typeof dt||"object"==typeof Nt||"function"==typeof xt?function(r){return Vt(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"==(t=typeof r)?Vt(r).toLowerCase():t},Ct=Object.getPrototypeOf;Pt=Object.getPrototypeOf,kt="function"===Lt(Pt)?Ct:function(r){var t=function(r){return r.__proto__}(r);return t||null===t?t:"[object Function]"===J(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var Gt=kt,Mt=Object.prototype;function Rt(r){var t;return!!function(r){return"object"==typeof r&&null!==r&&!yr(r)}(r)&&(t=function(r){return null==r?null:(r=vt(r),Gt(r))}(r),!t||!z(r,"constructor")&&z(t,"constructor")&&bt(t.constructor)&&"[object Function]"===J(t.constructor)&&z(t,"isPrototypeOf")&&bt(t.isPrototypeOf)&&(t===Mt||function(r){var t;for(t in r)if(!z(r,t))return!1;return!0}(r)))}function $t(r,t){return Rt(t)?(z(t,"invalid")&&(r.invalid=t.invalid),null):new TypeError(F("invalid argument. Options argument must be an object. Value: `%s`.",t))}function Ht(r,t,n){var e,o,i,u;if(!Gr(r))throw new TypeError(F("invalid argument. First argument must be an iterator protocol-compliant object. Value: `%s`.",r));if(!wr(t))throw new TypeError(F("invalid argument. Second argument must be a function. Value: `%s`.",t));if(e={invalid:NaN},arguments.length>2&&(i=$t(e,n)))throw i;return R(o={},"next",a),R(o,"return",c),Yr&&wr(r[Yr])&&R(o,Yr,f),o;function a(){var n;return u?{done:!0}:(n=r.next()).done?(u=!0,n):{value:Rr(n.value)?t(n.value):e.invalid,done:!1}}function c(r){return u=!0,arguments.length?{value:r,done:!0}:{done:!0}}function f(){return Ht(r[Yr](),t,e)}}function Wt(r){return r!=r}var Xt=Number.POSITIVE_INFINITY,Zt=$r.NEGATIVE_INFINITY;function Yt(r){return r===Xt||r===Zt}function zt(r){return Math.abs(r)}var qt,Dt="function"==typeof Uint32Array,Jt="function"==typeof Uint32Array?Uint32Array:null,Kt="function"==typeof Uint32Array?Uint32Array:void 0;qt=function(){var r,t;if("function"!=typeof Jt)return!1;try{r=function(r){return Dt&&r instanceof Uint32Array||"[object Uint32Array]"===J(r)}(t=new Jt(t=[1,3.14,-3.14,4294967296,4294967297]))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?Kt:function(){throw new Error("not implemented")};var Qt,rn=qt,tn="function"==typeof Float64Array,nn="function"==typeof Float64Array?Float64Array:null,en="function"==typeof Float64Array?Float64Array:void 0;Qt=function(){var r,t;if("function"!=typeof nn)return!1;try{r=function(r){return tn&&r instanceof Float64Array||"[object Float64Array]"===J(r)}(t=new nn([1,3.14,-3.14,NaN]))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?en:function(){throw new Error("not implemented")};var on,un=Qt,an="function"==typeof Uint8Array,cn="function"==typeof Uint8Array?Uint8Array:null,fn="function"==typeof Uint8Array?Uint8Array:void 0;on=function(){var r,t;if("function"!=typeof cn)return!1;try{r=function(r){return an&&r instanceof Uint8Array||"[object Uint8Array]"===J(r)}(t=new cn(t=[1,3.14,-3.14,256,257]))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?fn:function(){throw new Error("not implemented")};var ln,sn=on,pn="function"==typeof Uint16Array,yn="function"==typeof Uint16Array?Uint16Array:null,bn="function"==typeof Uint16Array?Uint16Array:void 0;ln=function(){var r,t;if("function"!=typeof yn)return!1;try{r=function(r){return pn&&r instanceof Uint16Array||"[object Uint16Array]"===J(r)}(t=new yn(t=[1,3.14,-3.14,65536,65537]))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?bn:function(){throw new Error("not implemented")};var vn,dn={uint16:ln,uint8:sn};(vn=new dn.uint16(1))[0]=4660;var gn=52===new dn.uint8(vn.buffer)[0],wn=!0===gn?1:0,hn=new un(1),mn=new rn(hn.buffer);function jn(r){return hn[0]=r,mn[wn]}function En(r,t){var n,e,o,i;return o=(i=r*r)*i,e=i*function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)}(i),e+=o*o*function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7}(i),(o=1-(n=.5*i))+(1-o-n+(i*e-r*t))}var An=-.16666666666666632;function _n(r,t){var n,e,o;return n=.00833333333332249+(o=r*r)*(27557313707070068e-22*o-.0001984126982985795)+o*(o*o)*(1.58969099521155e-10*o-2.5050760253406863e-8),e=o*r,0===t?r+e*(An+o*n):r-(o*(.5*t-e*n)-t-e*An)}var On,Tn,Sn=2147483647,xn=2146435072,Nn=!0===gn?0:1,Un=new un(1),Bn=new rn(Un.buffer);!0===gn?(On=1,Tn=0):(On=0,Tn=1);var Fn={HIGH:On,LOW:Tn},In=new un(1),Vn=new rn(In.buffer),kn=Fn.HIGH,Pn=Fn.LOW;function Ln(r,t){return Vn[kn]=r,Vn[Pn]=t,In[0]}var Cn,Gn,Mn=Math.floor;!0===gn?(Cn=1,Gn=0):(Cn=0,Gn=1);var Rn={HIGH:Cn,LOW:Gn},$n=new un(1),Hn=new rn($n.buffer),Wn=Rn.HIGH,Xn=Rn.LOW;function Zn(r,t,n,e){return $n[0]=r,t[e]=Hn[Wn],t[e+n]=Hn[Xn],t}function Yn(r){return Zn(r,[0,0],1,0)}!function(r,t,n){M(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}(Yn,"assign",Zn);var zn=[0,0];function qn(r,t,n,e){return Wt(r)||Yt(r)?(t[e]=r,t[e+n]=0,t):0!==r&&zt(r)<22250738585072014e-324?(t[e]=4503599627370496*r,t[e+n]=-52,t):(t[e]=r,t[e+n]=0,t)}!function(r,t,n){M(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}((function(r){return qn(r,[0,0],1,0)}),"assign",qn);var Dn=[0,0],Jn=[0,0];function Kn(r,t){var n,e,o,i,u,a;return 0===t||0===r||Wt(r)||Yt(r)?r:(qn(r,Dn,1,0),t+=Dn[1],t+=function(r){var t=jn(r);return(t=(t&xn)>>>20)-1023|0}(r=Dn[0]),t<-1074?(o=0,i=r,Yn.assign(o,zn,1,0),u=zn[0],u&=Sn,a=jn(i),Ln(u|=a&=2147483648,zn[1])):t>1023?r<0?Zt:Xt:(t<=-1023?(t+=52,e=2220446049250313e-31):e=1,Yn.assign(r,Jn,1,0),n=Jn[0],n&=2148532223,e*Ln(n|=t+1023<<20,Jn[1])))}function Qn(r){return function(r,t){var n,e;for(n=[],e=0;e<t;e++)n.push(r);return n}(0,r)}var re=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],te=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],ne=16777216,ee=5.960464477539063e-8,oe=Qn(20),ie=Qn(20),ue=Qn(20),ae=Qn(20);function ce(r,t,n,e,o,i,u,a,c){var f,l,s,p,y,b,v,d,g;for(p=i,g=e[n],d=n,y=0;d>0;y++)l=ee*g|0,ae[y]=g-ne*l|0,g=e[d-1]+l,d-=1;if(g=Kn(g,o),g-=8*Mn(.125*g),g-=v=0|g,s=0,o>0?(v+=y=ae[n-1]>>24-o,ae[n-1]-=y<<24-o,s=ae[n-1]>>23-o):0===o?s=ae[n-1]>>23:g>=.5&&(s=2),s>0){for(v+=1,f=0,y=0;y<n;y++)d=ae[y],0===f?0!==d&&(f=1,ae[y]=16777216-d):ae[y]=16777215-d;if(o>0)switch(o){case 1:ae[n-1]&=8388607;break;case 2:ae[n-1]&=4194303}2===s&&(g=1-g,0!==f&&(g-=Kn(1,o)))}if(0===g){for(d=0,y=n-1;y>=i;y--)d|=ae[y];if(0===d){for(b=1;0===ae[i-b];b++);for(y=n+1;y<=n+b;y++){for(c[a+y]=re[u+y],l=0,d=0;d<=a;d++)l+=r[d]*c[a+(y-d)];e[y]=l}return ce(r,t,n+=b,e,o,i,u,a,c)}}if(0===g)for(n-=1,o-=24;0===ae[n];)n-=1,o-=24;else(g=Kn(g,-o))>=ne?(l=ee*g|0,ae[n]=g-ne*l|0,o+=24,ae[n+=1]=l):ae[n]=0|g;for(l=Kn(1,o),y=n;y>=0;y--)e[y]=l*ae[y],l*=ee;for(y=n;y>=0;y--){for(l=0,b=0;b<=p&&b<=n-y;b++)l+=te[b]*e[y+b];ue[n-y]=l}for(l=0,y=n;y>=0;y--)l+=ue[y];for(t[0]=0===s?l:-l,l=ue[0]-l,y=1;y<=n;y++)l+=ue[y];return t[1]=0===s?l:-l,7&v}function fe(r,t,n,e){var o,i,u,a,c,f,l;for((i=(n-3)/24|0)<0&&(i=0),a=n-24*(i+1),f=i-(u=e-1),l=u+4,c=0;c<=l;c++)oe[c]=f<0?0:re[f],f+=1;for(c=0;c<=4;c++){for(o=0,f=0;f<=u;f++)o+=r[f]*oe[u+(c-f)];ie[c]=o}return ce(r,t,4,ie,a,4,i,u,oe)}var le=Math.round;function se(r,t,n){var e,o,i,u,a;return i=r-1.5707963267341256*(e=le(.6366197723675814*r)),u=6077100506506192e-26*e,a=t>>20|0,n[0]=i-u,a-(jn(n[0])>>20&2047)>16&&(u=20222662487959506e-37*e-((o=i)-(i=o-(u=6077100506303966e-26*e))-u),n[0]=i-u,a-(jn(n[0])>>20&2047)>49&&(u=84784276603689e-45*e-((o=i)-(i=o-(u=20222662487111665e-37*e))-u),n[0]=i-u)),n[1]=i-n[0]-u,e}var pe=1.5707963267341256,ye=6077100506506192e-26,be=2*ye,ve=3*ye,de=4*ye,ge=[0,0,0],we=[0,0];function he(r,t){var n,e,o,i,u,a,c;if((o=jn(r)&Sn|0)<=1072243195)return t[0]=r,t[1]=0,0;if(o<=1074752122)return 598523==(1048575&o)?se(r,o,t):o<=1073928572?r>0?(c=r-pe,t[0]=c-ye,t[1]=c-t[0]-ye,1):(c=r+pe,t[0]=c+ye,t[1]=c-t[0]+ye,-1):r>0?(c=r-2*pe,t[0]=c-be,t[1]=c-t[0]-be,2):(c=r+2*pe,t[0]=c+be,t[1]=c-t[0]+be,-2);if(o<=1075594811)return o<=1075183036?1074977148===o?se(r,o,t):r>0?(c=r-3*pe,t[0]=c-ve,t[1]=c-t[0]-ve,3):(c=r+3*pe,t[0]=c+ve,t[1]=c-t[0]+ve,-3):1075388923===o?se(r,o,t):r>0?(c=r-4*pe,t[0]=c-de,t[1]=c-t[0]-de,4):(c=r+4*pe,t[0]=c+de,t[1]=c-t[0]+de,-4);if(o<1094263291)return se(r,o,t);if(o>=xn)return t[0]=NaN,t[1]=NaN,0;for(n=function(r){return Un[0]=r,Bn[Nn]}(r),c=Ln(o-((e=(o>>20)-1046)<<20|0),n),u=0;u<2;u++)ge[u]=0|c,c=16777216*(c-ge[u]);for(ge[2]=c,i=3;0===ge[i-1];)i-=1;return a=fe(ge,we,e,i),r<0?(t[0]=-we[0],t[1]=-we[1],-a):(t[0]=we[0],t[1]=we[1],a)}var me=[0,0];function je(r){var t;if(t=jn(r),(t&=2147483647)<=1072243195)return t<1044381696?1:En(r,0);if(t>=2146435072)return NaN;switch(3&he(r,me)){case 0:return En(me[0],me[1]);case 1:return-_n(me[0],me[1]);case 2:return-En(me[0],me[1]);default:return _n(me[0],me[1])}}var Ee=[0,0],Ae=Math.floor,_e=3.141592653589793;function Oe(r){var t,n,e,o;return Wt(r)||Yt(r)?NaN:(t=zt(r))>9007199254740992?1:.5==(e=t-(n=Ae(t)))?0:(o=e<.25?je(_e*e):e<.75?function(r){var t;if(t=jn(r),(t&=Sn)<=1072243195)return t<1045430272?r:_n(r,0);if(t>=xn)return NaN;switch(3&he(r,Ee)){case 0:return _n(Ee[0],Ee[1]);case 1:return En(Ee[0],Ee[1]);case 2:return-_n(Ee[0],Ee[1]);default:return-En(Ee[0],Ee[1])}}(_e*(e=.5-e)):-je(_e*(e=1-e)),n%2==1?-o:o)}return function(r){return Ht(r,Oe)}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(r="undefined"!=typeof globalThis?globalThis:r||self).iterCospi=t();
//# sourceMappingURL=browser.js.map
