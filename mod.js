// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty;function t(r){return"number"==typeof r}function n(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function o(r,e,t){var o=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(o=!0,r=r.substr(1)),r=t?r+n(i):n(i)+r,o&&(r="-"+r)),r}var i=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(r){var e,n,u;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,u=parseInt(n,10),!isFinite(u)){if(!t(n))throw new Error("invalid integer. Value: "+n);u=0}return u<0&&("u"===r.specifier||10!==e)&&(u=4294967295+u+1),u<0?(n=(-u).toString(e),r.precision&&(n=o(n,r.precision,r.padRight)),n="-"+n):(n=u.toString(e),u||r.precision?r.precision&&(n=o(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===a.call(r.specifier)?a.call(n):i.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function c(r){return"string"==typeof r}var f=Math.abs,l=String.prototype.toLowerCase,s=String.prototype.toUpperCase,p=String.prototype.replace,y=/e\+(\d)$/,v=/e-(\d)$/,d=/^(\d+)$/,g=/^(\d+)e/,b=/\.0$/,w=/\.0*e/,h=/(\..*[^0])0*e/;function m(r){var e,n,o=parseFloat(r.arg);if(!isFinite(o)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+n);o=r.arg}switch(r.specifier){case"e":case"E":n=o.toExponential(r.precision);break;case"f":case"F":n=o.toFixed(r.precision);break;case"g":case"G":f(o)<1e-4?((e=r.precision)>0&&(e-=1),n=o.toExponential(e)):n=o.toPrecision(r.precision),r.alternate||(n=p.call(n,h,"$1e"),n=p.call(n,w,"e"),n=p.call(n,b,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=p.call(n,y,"e+0$1"),n=p.call(n,v,"e-0$1"),r.alternate&&(n=p.call(n,d,"$1."),n=p.call(n,g,"$1.e")),o>=0&&r.sign&&(n=r.sign+n),n=r.specifier===s.call(r.specifier)?s.call(n):l.call(n)}function j(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function A(r,e,t){var n=e-r.length;return n<0?r:r=t?r+j(n):j(n)+r}var _=String.fromCharCode,E=isNaN,O=Array.isArray;function S(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function N(r){var e,t,n,i,a,f,l,s,p;if(!O(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(f="",l=1,s=0;s<r.length;s++)if(c(n=r[s]))f+=n;else{if(e=void 0!==n.precision,!(n=S(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(l=n.mapping),t=n.flags,p=0;p<t.length;p++)switch(i=t.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[l],10),l+=1,E(n.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[l],10),l+=1,E(n.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[l],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!E(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=E(a)?String(n.arg):_(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=m(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=o(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=A(n.arg,n.width,n.padRight)),f+=n.arg||"",l+=1}return f}var U=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function x(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function F(r){var e,t,n,o;for(t=[],o=0,n=U.exec(r);n;)(e=r.slice(o,U.lastIndex-n[0].length)).length&&t.push(e),t.push(x(n)),o=U.lastIndex,n=U.exec(r);return(e=r.slice(o)).length&&t.push(e),t}function I(r){return"string"==typeof r}function T(r){var e,t,n;if(!I(r))throw new TypeError(T("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=F(r),(t=new Array(arguments.length))[0]=e,n=1;n<t.length;n++)t[n]=arguments[n];return N.apply(null,t)}var k,V=Object.prototype,P=V.toString,G=V.__defineGetter__,L=V.__defineSetter__,$=V.__lookupGetter__,C=V.__lookupSetter__;k=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var n,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===P.call(r))throw new TypeError(T("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===P.call(t))throw new TypeError(T("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((o="value"in t)&&($.call(r,e)||C.call(r,e)?(n=r.__proto__,r.__proto__=V,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),i="get"in t,a="set"in t,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&G&&G.call(r,e,t.get),a&&L&&L.call(r,e,t.set),r};var H=k;function W(r,e,t){H(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}var B=/./;function R(r){return"boolean"==typeof r}var M="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function Z(){return M&&"symbol"==typeof Symbol.toStringTag}var X=Object.prototype.toString;var Y=Object.prototype.hasOwnProperty;function z(r,e){return null!=r&&Y.call(r,e)}var q="function"==typeof Symbol?Symbol:void 0,D="function"==typeof q?q.toStringTag:"";var J=Z()?function(r){var e,t,n;if(null==r)return X.call(r);t=r[D],e=z(r,D);try{r[D]=void 0}catch(e){return X.call(r)}return n=X.call(r),e?r[D]=t:delete r[D],n}:function(r){return X.call(r)},K=Boolean,Q=Boolean.prototype.toString;var rr=Z();function er(r){return"object"==typeof r&&(r instanceof K||(rr?function(r){try{return Q.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===J(r)))}function tr(r){return R(r)||er(r)}function nr(){return new Function("return this;")()}W(tr,"isPrimitive",R),W(tr,"isObject",er);var or="object"==typeof self?self:null,ir="object"==typeof window?window:null,ar="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},ur="object"==typeof ar?ar:null,cr="object"==typeof globalThis?globalThis:null;var fr=function(r){if(arguments.length){if(!R(r))throw new TypeError(T("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return nr()}if(cr)return cr;if(or)return or;if(ir)return ir;if(ur)return ur;throw new Error("unexpected error. Unable to resolve global object.")}(),lr=fr.document&&fr.document.childNodes,sr=Int8Array;function pr(){return/^\s*function\s*([^(]*)/i}var yr=/^\s*function\s*([^(]*)/i;W(pr,"REGEXP",yr);var vr=Array.isArray?Array.isArray:function(r){return"[object Array]"===J(r)};function dr(r){return null!==r&&"object"==typeof r}function gr(r){var e,t,n,o;if(("Object"===(t=J(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=yr.exec(n.toString()))return e[1]}return dr(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":t}W(dr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(T("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!vr(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(dr));var br="function"==typeof B||"object"==typeof sr||"function"==typeof lr?function(r){return gr(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?gr(r).toLowerCase():e};function wr(r){return"function"===br(r)}function hr(r){var e=typeof r;return null!==r&&("object"===e||"function"===e)&&wr(r.next)}function mr(r){return"number"==typeof r}var jr=Number,Ar=jr.prototype.toString;var _r=Z();function Er(r){return"object"==typeof r&&(r instanceof jr||(_r?function(r){try{return Ar.call(r),!0}catch(r){return!1}}(r):"[object Number]"===J(r)))}function Or(r){return mr(r)||Er(r)}W(Or,"isPrimitive",mr),W(Or,"isObject",Er);var Sr="function"==typeof q&&"symbol"==typeof q("foo")&&z(q,"iterator")&&"symbol"==typeof q.iterator?Symbol.iterator:null;var Nr,Ur=Object,xr=Object.getPrototypeOf;Nr=wr(Object.getPrototypeOf)?xr:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===J(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var Fr=Nr;var Ir=Object.prototype;function Tr(r){var e;return!!function(r){return"object"==typeof r&&null!==r&&!vr(r)}(r)&&(e=function(r){return null==r?null:(r=Ur(r),Fr(r))}(r),!e||!z(r,"constructor")&&z(e,"constructor")&&wr(e.constructor)&&"[object Function]"===J(e.constructor)&&z(e,"isPrototypeOf")&&wr(e.isPrototypeOf)&&(e===Ir||function(r){var e;for(e in r)if(!z(r,e))return!1;return!0}(r)))}function kr(r,e){return Tr(e)?(z(e,"invalid")&&(r.invalid=e.invalid),null):new TypeError(T("invalid argument. Options argument must be an object. Value: `%s`.",e))}function Vr(r,e,t){var n,o,i,a;if(!hr(r))throw new TypeError(T("invalid argument. First argument must be an iterator protocol-compliant object. Value: `%s`.",r));if(!wr(e))throw new TypeError(T("invalid argument. Second argument must be a function. Value: `%s`.",e));if(n={invalid:NaN},arguments.length>2&&(i=kr(n,t)))throw i;return W(o={},"next",u),W(o,"return",c),Sr&&wr(r[Sr])&&W(o,Sr,f),o;function u(){var t;return a?{done:!0}:(t=r.next()).done?(a=!0,t):{value:mr(t.value)?e(t.value):n.invalid,done:!1}}function c(r){return a=!0,arguments.length?{value:r,done:!0}:{done:!0}}function f(){return Vr(r[Sr](),e,n)}}function Pr(r){return r!=r}var Gr=Number.POSITIVE_INFINITY,Lr=jr.NEGATIVE_INFINITY;function $r(r){return r===Gr||r===Lr}function Cr(r){return Math.abs(r)}var Hr="function"==typeof Uint32Array;var Wr="function"==typeof Uint32Array?Uint32Array:null;var Br,Rr="function"==typeof Uint32Array?Uint32Array:void 0;Br=function(){var r,e,t;if("function"!=typeof Wr)return!1;try{e=new Wr(e=[1,3.14,-3.14,4294967296,4294967297]),t=e,r=(Hr&&t instanceof Uint32Array||"[object Uint32Array]"===J(t))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Rr:function(){throw new Error("not implemented")};var Mr=Br,Zr="function"==typeof Float64Array;var Xr="function"==typeof Float64Array?Float64Array:null;var Yr,zr="function"==typeof Float64Array?Float64Array:void 0;Yr=function(){var r,e,t;if("function"!=typeof Xr)return!1;try{e=new Xr([1,3.14,-3.14,NaN]),t=e,r=(Zr&&t instanceof Float64Array||"[object Float64Array]"===J(t))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?zr:function(){throw new Error("not implemented")};var qr=Yr,Dr="function"==typeof Uint8Array;var Jr="function"==typeof Uint8Array?Uint8Array:null;var Kr,Qr="function"==typeof Uint8Array?Uint8Array:void 0;Kr=function(){var r,e,t;if("function"!=typeof Jr)return!1;try{e=new Jr(e=[1,3.14,-3.14,256,257]),t=e,r=(Dr&&t instanceof Uint8Array||"[object Uint8Array]"===J(t))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Qr:function(){throw new Error("not implemented")};var re=Kr,ee="function"==typeof Uint16Array;var te="function"==typeof Uint16Array?Uint16Array:null;var ne,oe="function"==typeof Uint16Array?Uint16Array:void 0;ne=function(){var r,e,t;if("function"!=typeof te)return!1;try{e=new te(e=[1,3.14,-3.14,65536,65537]),t=e,r=(ee&&t instanceof Uint16Array||"[object Uint16Array]"===J(t))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?oe:function(){throw new Error("not implemented")};var ie,ae={uint16:ne,uint8:re};(ie=new ae.uint16(1))[0]=4660;var ue=52===new ae.uint8(ie.buffer)[0],ce=!0===ue?1:0,fe=new qr(1),le=new Mr(fe.buffer);function se(r){return fe[0]=r,le[ce]}function pe(r,e){var t,n,o,i;return o=(i=r*r)*i,n=i*function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)}(i),n+=o*o*function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7}(i),(o=1-(t=.5*i))+(1-o-t+(i*n-r*e))}var ye=-.16666666666666632;function ve(r,e){var t,n,o;return t=.00833333333332249+(o=r*r)*(27557313707070068e-22*o-.0001984126982985795)+o*(o*o)*(1.58969099521155e-10*o-2.5050760253406863e-8),n=o*r,0===e?r+n*(ye+o*t):r-(o*(.5*e-n*t)-e-n*ye)}var de,ge,be=!0===ue?0:1,we=new qr(1),he=new Mr(we.buffer);!0===ue?(de=1,ge=0):(de=0,ge=1);var me={HIGH:de,LOW:ge},je=new qr(1),Ae=new Mr(je.buffer),_e=me.HIGH,Ee=me.LOW;function Oe(r,e){return Ae[_e]=r,Ae[Ee]=e,je[0]}var Se,Ne,Ue=Math.floor;!0===ue?(Se=1,Ne=0):(Se=0,Ne=1);var xe={HIGH:Se,LOW:Ne},Fe=new qr(1),Ie=new Mr(Fe.buffer),Te=xe.HIGH,ke=xe.LOW;function Ve(r,e,t,n){return Fe[0]=r,e[n]=Ie[Te],e[n+t]=Ie[ke],e}function Pe(r){return Ve(r,[0,0],1,0)}W(Pe,"assign",Ve);var Ge=[0,0];function Le(r,e,t,n){return Pr(r)||$r(r)?(e[n]=r,e[n+t]=0,e):0!==r&&Cr(r)<22250738585072014e-324?(e[n]=4503599627370496*r,e[n+t]=-52,e):(e[n]=r,e[n+t]=0,e)}W((function(r){return Le(r,[0,0],1,0)}),"assign",Le);var $e=[0,0],Ce=[0,0];function He(r,e){var t,n,o,i,a,u;return 0===e||0===r||Pr(r)||$r(r)?r:(Le(r,$e,1,0),e+=$e[1],e+=function(r){var e=se(r);return(e=(2146435072&e)>>>20)-1023|0}(r=$e[0]),e<-1074?(o=0,i=r,Pe.assign(o,Ge,1,0),a=Ge[0],a&=2147483647,u=se(i),Oe(a|=u&=2147483648,Ge[1])):e>1023?r<0?Lr:Gr:(e<=-1023?(e+=52,n=2220446049250313e-31):n=1,Pe.assign(r,Ce,1,0),t=Ce[0],t&=2148532223,n*Oe(t|=e+1023<<20,Ce[1])))}function We(r){return function(r,e){var t,n;for(t=[],n=0;n<e;n++)t.push(r);return t}(0,r)}var Be=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],Re=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],Me=5.960464477539063e-8,Ze=We(20),Xe=We(20),Ye=We(20),ze=We(20);function qe(r,e,t,n,o,i,a,u,c){var f,l,s,p,y,v,d,g,b;for(p=i,b=n[t],g=t,y=0;g>0;y++)l=Me*b|0,ze[y]=b-16777216*l|0,b=n[g-1]+l,g-=1;if(b=He(b,o),b-=8*Ue(.125*b),b-=d=0|b,s=0,o>0?(d+=y=ze[t-1]>>24-o,ze[t-1]-=y<<24-o,s=ze[t-1]>>23-o):0===o?s=ze[t-1]>>23:b>=.5&&(s=2),s>0){for(d+=1,f=0,y=0;y<t;y++)g=ze[y],0===f?0!==g&&(f=1,ze[y]=16777216-g):ze[y]=16777215-g;if(o>0)switch(o){case 1:ze[t-1]&=8388607;break;case 2:ze[t-1]&=4194303}2===s&&(b=1-b,0!==f&&(b-=He(1,o)))}if(0===b){for(g=0,y=t-1;y>=i;y--)g|=ze[y];if(0===g){for(v=1;0===ze[i-v];v++);for(y=t+1;y<=t+v;y++){for(c[u+y]=Be[a+y],l=0,g=0;g<=u;g++)l+=r[g]*c[u+(y-g)];n[y]=l}return qe(r,e,t+=v,n,o,i,a,u,c)}}if(0===b)for(t-=1,o-=24;0===ze[t];)t-=1,o-=24;else(b=He(b,-o))>=16777216?(l=Me*b|0,ze[t]=b-16777216*l|0,o+=24,ze[t+=1]=l):ze[t]=0|b;for(l=He(1,o),y=t;y>=0;y--)n[y]=l*ze[y],l*=Me;for(y=t;y>=0;y--){for(l=0,v=0;v<=p&&v<=t-y;v++)l+=Re[v]*n[y+v];Ye[t-y]=l}for(l=0,y=t;y>=0;y--)l+=Ye[y];for(e[0]=0===s?l:-l,l=Ye[0]-l,y=1;y<=t;y++)l+=Ye[y];return e[1]=0===s?l:-l,7&d}function De(r,e,t,n){var o,i,a,u,c,f,l;for(4,(i=(t-3)/24|0)<0&&(i=0),u=t-24*(i+1),f=i-(a=n-1),l=a+4,c=0;c<=l;c++)Ze[c]=f<0?0:Be[f],f+=1;for(c=0;c<=4;c++){for(o=0,f=0;f<=a;f++)o+=r[f]*Ze[a+(c-f)];Xe[c]=o}return 4,qe(r,e,4,Xe,u,4,i,a,Ze)}var Je=Math.round;function Ke(r,e,t){var n,o,i,a,u;return i=r-1.5707963267341256*(n=Je(.6366197723675814*r)),a=6077100506506192e-26*n,u=e>>20|0,t[0]=i-a,u-(se(t[0])>>20&2047)>16&&(a=20222662487959506e-37*n-((o=i)-(i=o-(a=6077100506303966e-26*n))-a),t[0]=i-a,u-(se(t[0])>>20&2047)>49&&(a=84784276603689e-45*n-((o=i)-(i=o-(a=20222662487111665e-37*n))-a),t[0]=i-a)),t[1]=i-t[0]-a,n}var Qe=1.5707963267341256,rt=6077100506506192e-26,et=2*rt,tt=4*rt,nt=[0,0,0],ot=[0,0];function it(r,e){var t,n,o,i,a,u,c;if((o=2147483647&se(r)|0)<=1072243195)return e[0]=r,e[1]=0,0;if(o<=1074752122)return 598523==(1048575&o)?Ke(r,o,e):o<=1073928572?r>0?(c=r-Qe,e[0]=c-rt,e[1]=c-e[0]-rt,1):(c=r+Qe,e[0]=c+rt,e[1]=c-e[0]+rt,-1):r>0?(c=r-2*Qe,e[0]=c-et,e[1]=c-e[0]-et,2):(c=r+2*Qe,e[0]=c+et,e[1]=c-e[0]+et,-2);if(o<=1075594811)return o<=1075183036?1074977148===o?Ke(r,o,e):r>0?(c=r-3*Qe,e[0]=c-1.8231301519518578e-10,e[1]=c-e[0]-1.8231301519518578e-10,3):(c=r+3*Qe,e[0]=c+1.8231301519518578e-10,e[1]=c-e[0]+1.8231301519518578e-10,-3):1075388923===o?Ke(r,o,e):r>0?(c=r-4*Qe,e[0]=c-tt,e[1]=c-e[0]-tt,4):(c=r+4*Qe,e[0]=c+tt,e[1]=c-e[0]+tt,-4);if(o<1094263291)return Ke(r,o,e);if(o>=2146435072)return e[0]=NaN,e[1]=NaN,0;for(t=function(r){return we[0]=r,he[be]}(r),c=Oe(o-((n=(o>>20)-1046)<<20|0),t),a=0;a<2;a++)nt[a]=0|c,c=16777216*(c-nt[a]);for(nt[2]=c,i=3;0===nt[i-1];)i-=1;return u=De(nt,ot,n,i),r<0?(e[0]=-ot[0],e[1]=-ot[1],-u):(e[0]=ot[0],e[1]=ot[1],u)}var at=[0,0];function ut(r){var e;if(e=se(r),(e&=2147483647)<=1072243195)return e<1044381696?1:pe(r,0);if(e>=2146435072)return NaN;switch(3&it(r,at)){case 0:return pe(at[0],at[1]);case 1:return-ve(at[0],at[1]);case 2:return-pe(at[0],at[1]);default:return ve(at[0],at[1])}}var ct=[0,0];var ft=3.141592653589793;function lt(r){var e,t,n,o;return Pr(r)||$r(r)?NaN:(e=Cr(r))>9007199254740992?1:.5===(n=e-(t=Ue(e)))?0:(o=n<.25?ut(ft*n):n<.75?function(r){var e;if(e=se(r),(e&=2147483647)<=1072243195)return e<1045430272?r:ve(r,0);if(e>=2146435072)return NaN;switch(3&it(r,ct)){case 0:return ve(ct[0],ct[1]);case 1:return pe(ct[0],ct[1]);case 2:return-ve(ct[0],ct[1]);default:return-pe(ct[0],ct[1])}}(ft*(n=.5-n)):-ut(ft*(n=1-n)),t%2==1?-o:o)}function st(r){return Vr(r,lt)}export{st as default};
//# sourceMappingURL=mod.js.map
