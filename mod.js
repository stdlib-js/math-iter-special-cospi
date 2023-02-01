// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var t,n=Object.defineProperty,e=Object.prototype,o=e.toString,u=e.__defineGetter__,i=e.__defineSetter__,f=e.__lookupGetter__,a=e.__lookupSetter__;t=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?n:function(r,t,n){var c,l,y,v;if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof n||null===n||"[object Array]"===o.call(n))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+n+"`.");if((l="value"in n)&&(f.call(r,t)||a.call(r,t)?(c=r.__proto__,r.__proto__=e,delete r[t],r[t]=n.value,r.__proto__=c):r[t]=n.value),y="get"in n,v="set"in n,l&&(y||v))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&u&&u.call(r,t,n.get),v&&i&&i.call(r,t,n.set),r};var c=t;function l(r,t,n){c(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}var y=/./;function v(r){return"boolean"==typeof r}var p="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function s(){return p&&"symbol"==typeof Symbol.toStringTag}var b=Object.prototype.toString;var d=Object.prototype.hasOwnProperty;function w(r,t){return null!=r&&d.call(r,t)}var m="function"==typeof Symbol?Symbol.toStringTag:"";var j=s()?function(r){var t,n,e;if(null==r)return b.call(r);n=r[m],t=w(r,m);try{r[m]=void 0}catch(t){return b.call(r)}return e=b.call(r),t?r[m]=n:delete r[m],e}:function(r){return b.call(r)},g=Boolean.prototype.toString;var A=s();function h(r){return"object"==typeof r&&(r instanceof Boolean||(A?function(r){try{return g.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===j(r)))}function _(r){return v(r)||h(r)}function O(){return new Function("return this;")()}l(_,"isPrimitive",v),l(_,"isObject",h);var N="object"==typeof self?self:null,U="object"==typeof window?window:null,S="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},E="object"==typeof S?S:null;var F=function(r){if(arguments.length){if(!v(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return O()}if(N)return N;if(U)return U;if(E)return E;throw new Error("unexpected error. Unable to resolve global object.")}(),I=F.document&&F.document.childNodes,P=Int8Array;function T(){return/^\s*function\s*([^(]*)/i}var V=/^\s*function\s*([^(]*)/i;l(T,"REGEXP",V);var G=Array.isArray?Array.isArray:function(r){return"[object Array]"===j(r)};function H(r){return null!==r&&"object"==typeof r}function x(r){var t,n,e,o;if(("Object"===(n=j(r).slice(8,-1))||"Error"===n)&&r.constructor){if("string"==typeof(e=r.constructor).name)return e.name;if(t=V.exec(e.toString()))return t[1]}return H(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":n}l(H,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(t){var n,e;if(!G(t))return!1;if(0===(n=t.length))return!1;for(e=0;e<n;e++)if(!1===r(t[e]))return!1;return!0}}(H));var B="function"==typeof y||"object"==typeof P||"function"==typeof I?function(r){return x(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"===(t=typeof r)?x(r).toLowerCase():t};function L(r){return"function"===B(r)}function M(r){var t=typeof r;return null!==r&&("object"===t||"function"===t)&&L(r.next)}function k(r){return"number"==typeof r}var W=Number,C=W.prototype.toString;var Y=s();function R(r){return"object"==typeof r&&(r instanceof W||(Y?function(r){try{return C.call(r),!0}catch(r){return!1}}(r):"[object Number]"===j(r)))}function X(r){return k(r)||R(r)}l(X,"isPrimitive",k),l(X,"isObject",R);var q="function"==typeof Symbol&&"symbol"==typeof Symbol("foo")&&w(Symbol,"iterator")&&"symbol"==typeof Symbol.iterator?Symbol.iterator:null;var z,D=Object.getPrototypeOf;z=L(Object.getPrototypeOf)?D:function(r){var t=function(r){return r.__proto__}(r);return t||null===t?t:"[object Function]"===j(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var J=z;var K=Object.prototype;function Q(r){var t;return!!function(r){return"object"==typeof r&&null!==r&&!G(r)}(r)&&(t=function(r){return null==r?null:(r=Object(r),J(r))}(r),!t||!w(r,"constructor")&&w(t,"constructor")&&L(t.constructor)&&"[object Function]"===j(t.constructor)&&w(t,"isPrototypeOf")&&L(t.isPrototypeOf)&&(t===K||function(r){var t;for(t in r)if(!w(r,t))return!1;return!0}(r)))}function Z(r,t){return Q(t)?(w(t,"invalid")&&(r.invalid=t.invalid),null):new TypeError("invalid argument. Options argument must be an object. Value: `"+t+"`.")}function $(r,t,n){var e,o,u,i;if(!M(r))throw new TypeError("invalid argument. First argument must be an iterator protocol-compliant object. Value: `"+r+"`.");if(!L(t))throw new TypeError("invalid argument. Second argument must be a function. Value: `"+t+"`.");if(e={invalid:NaN},arguments.length>2&&(u=Z(e,n)))throw u;return l(o={},"next",f),l(o,"return",a),q&&L(r[q])&&l(o,q,c),o;function f(){var n;return i?{done:!0}:(n=r.next()).done?(i=!0,n):{value:k(n.value)?t(n.value):e.invalid,done:!1}}function a(r){return i=!0,arguments.length?{value:r,done:!0}:{done:!0}}function c(){return $(r[q](),t,e)}}function rr(r){return r!=r}var tr=Number.POSITIVE_INFINITY,nr=W.NEGATIVE_INFINITY;function er(r){return r===tr||r===nr}function or(r){return Math.abs(r)}var ur="function"==typeof Uint32Array;var ir="function"==typeof Uint32Array?Uint32Array:null;var fr,ar="function"==typeof Uint32Array?Uint32Array:void 0;fr=function(){var r,t,n;if("function"!=typeof ir)return!1;try{t=new ir(t=[1,3.14,-3.14,4294967296,4294967297]),n=t,r=(ur&&n instanceof Uint32Array||"[object Uint32Array]"===j(n))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?ar:function(){throw new Error("not implemented")};var cr=fr,lr="function"==typeof Float64Array;var yr="function"==typeof Float64Array?Float64Array:null;var vr,pr="function"==typeof Float64Array?Float64Array:void 0;vr=function(){var r,t,n;if("function"!=typeof yr)return!1;try{t=new yr([1,3.14,-3.14,NaN]),n=t,r=(lr&&n instanceof Float64Array||"[object Float64Array]"===j(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?pr:function(){throw new Error("not implemented")};var sr=vr,br="function"==typeof Uint8Array;var dr="function"==typeof Uint8Array?Uint8Array:null;var wr,mr="function"==typeof Uint8Array?Uint8Array:void 0;wr=function(){var r,t,n;if("function"!=typeof dr)return!1;try{t=new dr(t=[1,3.14,-3.14,256,257]),n=t,r=(br&&n instanceof Uint8Array||"[object Uint8Array]"===j(n))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?mr:function(){throw new Error("not implemented")};var jr=wr,gr="function"==typeof Uint16Array;var Ar="function"==typeof Uint16Array?Uint16Array:null;var hr,_r="function"==typeof Uint16Array?Uint16Array:void 0;hr=function(){var r,t,n;if("function"!=typeof Ar)return!1;try{t=new Ar(t=[1,3.14,-3.14,65536,65537]),n=t,r=(gr&&n instanceof Uint16Array||"[object Uint16Array]"===j(n))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?_r:function(){throw new Error("not implemented")};var Or,Nr={uint16:hr,uint8:jr};(Or=new Nr.uint16(1))[0]=4660;var Ur=52===new Nr.uint8(Or.buffer)[0],Sr=!0===Ur?1:0,Er=new sr(1),Fr=new cr(Er.buffer);function Ir(r){return Er[0]=r,Fr[Sr]}function Pr(r,t){var n,e,o,u;return o=(u=r*r)*u,e=u*function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)}(u),e+=o*o*function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7}(u),(o=1-(n=.5*u))+(1-o-n+(u*e-r*t))}var Tr=-.16666666666666632;function Vr(r,t){var n,e,o;return n=.00833333333332249+(o=r*r)*(27557313707070068e-22*o-.0001984126982985795)+o*(o*o)*(1.58969099521155e-10*o-2.5050760253406863e-8),e=o*r,0===t?r+e*(Tr+o*n):r-(o*(.5*t-e*n)-t-e*Tr)}var Gr,Hr,xr=!0===Ur?0:1,Br=new sr(1),Lr=new cr(Br.buffer);!0===Ur?(Gr=1,Hr=0):(Gr=0,Hr=1);var Mr={HIGH:Gr,LOW:Hr},kr=new sr(1),Wr=new cr(kr.buffer),Cr=Mr.HIGH,Yr=Mr.LOW;function Rr(r,t){return Wr[Cr]=r,Wr[Yr]=t,kr[0]}var Xr,qr,zr=Math.floor;!0===Ur?(Xr=1,qr=0):(Xr=0,qr=1);var Dr={HIGH:Xr,LOW:qr},Jr=new sr(1),Kr=new cr(Jr.buffer),Qr=Dr.HIGH,Zr=Dr.LOW;function $r(r,t,n,e){return Jr[0]=r,t[e]=Kr[Qr],t[e+n]=Kr[Zr],t}function rt(r){return $r(r,[0,0],1,0)}l(rt,"assign",$r);var tt=[0,0];function nt(r,t,n,e){return rr(r)||er(r)?(t[e]=r,t[e+n]=0,t):0!==r&&or(r)<22250738585072014e-324?(t[e]=4503599627370496*r,t[e+n]=-52,t):(t[e]=r,t[e+n]=0,t)}l((function(r){return nt(r,[0,0],1,0)}),"assign",nt);var et=[0,0],ot=[0,0];function ut(r,t){var n,e,o,u,i,f;return 0===t||0===r||rr(r)||er(r)?r:(nt(r,et,1,0),t+=et[1],t+=function(r){var t=Ir(r);return(t=(2146435072&t)>>>20)-1023|0}(r=et[0]),t<-1074?(o=0,u=r,rt.assign(o,tt,1,0),i=tt[0],i&=2147483647,f=Ir(u),Rr(i|=f&=2147483648,tt[1])):t>1023?r<0?nr:tr:(t<=-1023?(t+=52,e=2220446049250313e-31):e=1,rt.assign(r,ot,1,0),n=ot[0],n&=2148532223,e*Rr(n|=t+1023<<20,ot[1])))}function it(r){return function(r,t){var n,e;for(n=[],e=0;e<t;e++)n.push(r);return n}(0,r)}var ft=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],at=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],ct=5.960464477539063e-8,lt=it(20),yt=it(20),vt=it(20),pt=it(20);function st(r,t,n,e,o,u,i,f,a){var c,l,y,v,p,s,b,d,w;for(v=u,w=e[n],d=n,p=0;d>0;p++)l=ct*w|0,pt[p]=w-16777216*l|0,w=e[d-1]+l,d-=1;if(w=ut(w,o),w-=8*zr(.125*w),w-=b=0|w,y=0,o>0?(b+=p=pt[n-1]>>24-o,pt[n-1]-=p<<24-o,y=pt[n-1]>>23-o):0===o?y=pt[n-1]>>23:w>=.5&&(y=2),y>0){for(b+=1,c=0,p=0;p<n;p++)d=pt[p],0===c?0!==d&&(c=1,pt[p]=16777216-d):pt[p]=16777215-d;if(o>0)switch(o){case 1:pt[n-1]&=8388607;break;case 2:pt[n-1]&=4194303}2===y&&(w=1-w,0!==c&&(w-=ut(1,o)))}if(0===w){for(d=0,p=n-1;p>=u;p--)d|=pt[p];if(0===d){for(s=1;0===pt[u-s];s++);for(p=n+1;p<=n+s;p++){for(a[f+p]=ft[i+p],l=0,d=0;d<=f;d++)l+=r[d]*a[f+(p-d)];e[p]=l}return st(r,t,n+=s,e,o,u,i,f,a)}}if(0===w)for(n-=1,o-=24;0===pt[n];)n-=1,o-=24;else(w=ut(w,-o))>=16777216?(l=ct*w|0,pt[n]=w-16777216*l|0,o+=24,pt[n+=1]=l):pt[n]=0|w;for(l=ut(1,o),p=n;p>=0;p--)e[p]=l*pt[p],l*=ct;for(p=n;p>=0;p--){for(l=0,s=0;s<=v&&s<=n-p;s++)l+=at[s]*e[p+s];vt[n-p]=l}for(l=0,p=n;p>=0;p--)l+=vt[p];for(t[0]=0===y?l:-l,l=vt[0]-l,p=1;p<=n;p++)l+=vt[p];return t[1]=0===y?l:-l,7&b}function bt(r,t,n,e){var o,u,i,f,a,c,l;for(4,(u=(n-3)/24|0)<0&&(u=0),f=n-24*(u+1),c=u-(i=e-1),l=i+4,a=0;a<=l;a++)lt[a]=c<0?0:ft[c],c+=1;for(a=0;a<=4;a++){for(o=0,c=0;c<=i;c++)o+=r[c]*lt[i+(a-c)];yt[a]=o}return 4,st(r,t,4,yt,f,4,u,i,lt)}var dt=Math.round;function wt(r,t,n){var e,o,u,i,f;return u=r-1.5707963267341256*(e=dt(.6366197723675814*r)),i=6077100506506192e-26*e,f=t>>20|0,n[0]=u-i,f-(Ir(n[0])>>20&2047)>16&&(i=20222662487959506e-37*e-((o=u)-(u=o-(i=6077100506303966e-26*e))-i),n[0]=u-i,f-(Ir(n[0])>>20&2047)>49&&(i=84784276603689e-45*e-((o=u)-(u=o-(i=20222662487111665e-37*e))-i),n[0]=u-i)),n[1]=u-n[0]-i,e}var mt=1.5707963267341256,jt=6077100506506192e-26,gt=2*jt,At=4*jt,ht=[0,0,0],_t=[0,0];function Ot(r,t){var n,e,o,u,i,f,a;if((o=2147483647&Ir(r)|0)<=1072243195)return t[0]=r,t[1]=0,0;if(o<=1074752122)return 598523==(1048575&o)?wt(r,o,t):o<=1073928572?r>0?(a=r-mt,t[0]=a-jt,t[1]=a-t[0]-jt,1):(a=r+mt,t[0]=a+jt,t[1]=a-t[0]+jt,-1):r>0?(a=r-2*mt,t[0]=a-gt,t[1]=a-t[0]-gt,2):(a=r+2*mt,t[0]=a+gt,t[1]=a-t[0]+gt,-2);if(o<=1075594811)return o<=1075183036?1074977148===o?wt(r,o,t):r>0?(a=r-3*mt,t[0]=a-1.8231301519518578e-10,t[1]=a-t[0]-1.8231301519518578e-10,3):(a=r+3*mt,t[0]=a+1.8231301519518578e-10,t[1]=a-t[0]+1.8231301519518578e-10,-3):1075388923===o?wt(r,o,t):r>0?(a=r-4*mt,t[0]=a-At,t[1]=a-t[0]-At,4):(a=r+4*mt,t[0]=a+At,t[1]=a-t[0]+At,-4);if(o<1094263291)return wt(r,o,t);if(o>=2146435072)return t[0]=NaN,t[1]=NaN,0;for(n=function(r){return Br[0]=r,Lr[xr]}(r),a=Rr(o-((e=(o>>20)-1046)<<20|0),n),i=0;i<2;i++)ht[i]=0|a,a=16777216*(a-ht[i]);for(ht[2]=a,u=3;0===ht[u-1];)u-=1;return f=bt(ht,_t,e,u),r<0?(t[0]=-_t[0],t[1]=-_t[1],-f):(t[0]=_t[0],t[1]=_t[1],f)}var Nt=[0,0];function Ut(r){var t;if(t=Ir(r),(t&=2147483647)<=1072243195)return t<1044381696?1:Pr(r,0);if(t>=2146435072)return NaN;switch(3&Ot(r,Nt)){case 0:return Pr(Nt[0],Nt[1]);case 1:return-Vr(Nt[0],Nt[1]);case 2:return-Pr(Nt[0],Nt[1]);default:return Vr(Nt[0],Nt[1])}}var St=[0,0];var Et=3.141592653589793;function Ft(r){var t,n,e,o;return rr(r)||er(r)?NaN:(t=or(r))>9007199254740992?1:.5===(e=t-(n=zr(t)))?0:(o=e<.25?Ut(Et*e):e<.75?function(r){var t;if(t=Ir(r),(t&=2147483647)<=1072243195)return t<1045430272?r:Vr(r,0);if(t>=2146435072)return NaN;switch(3&Ot(r,St)){case 0:return Vr(St[0],St[1]);case 1:return Pr(St[0],St[1]);case 2:return-Vr(St[0],St[1]);default:return-Pr(St[0],St[1])}}(Et*(e=.5-e)):-Ut(Et*(e=1-e)),n%2==1?-o:o)}function It(r){return $(r,Ft)}export{It as default};
//# sourceMappingURL=mod.js.map
