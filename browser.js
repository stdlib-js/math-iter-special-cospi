// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(r="undefined"!=typeof globalThis?globalThis:r||self).iterCospi=t()}(this,(function(){"use strict";function r(r){var t=r.default;if("function"==typeof t){var n=function(){return t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(r).forEach((function(t){var e=Object.getOwnPropertyDescriptor(r,t);Object.defineProperty(n,t,e.get?e:{enumerable:!0,get:function(){return r[t]}})})),n}var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var n=function(){try{return t({},"x",{}),!0}catch(r){return!1}},e=Object.defineProperty,o=Object.prototype,u=o.toString,i=o.__defineGetter__,a=o.__defineSetter__,f=o.__lookupGetter__,c=o.__lookupSetter__;var l=function(r,t,n){var e,l,v,y;if("object"!=typeof r||null===r||"[object Array]"===u.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof n||null===n||"[object Array]"===u.call(n))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+n+"`.");if((l="value"in n)&&(f.call(r,t)||c.call(r,t)?(e=r.__proto__,r.__proto__=o,delete r[t],r[t]=n.value,r.__proto__=e):r[t]=n.value),v="get"in n,y="set"in n,l&&(v||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return v&&i&&i.call(r,t,n.get),y&&a&&a.call(r,t,n.set),r},v=e,y=l,p=n()?v:y;var s=function(r,t,n){p(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})},b=s,d=/./;var m=function(r){return"boolean"==typeof r};var w=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var j=function(){return w&&"symbol"==typeof Symbol.toStringTag},h=Object.prototype.toString,g=h;var _=function(r){return g.call(r)},A=Object.prototype.hasOwnProperty;var O=function(r,t){return null!=r&&A.call(r,t)},N="function"==typeof Symbol?Symbol.toStringTag:"",E=O,U=N,S=h;var P=_,T=function(r){var t,n,e;if(null==r)return S.call(r);n=r[U],t=E(r,U);try{r[U]=void 0}catch(t){return S.call(r)}return e=S.call(r),t?r[U]=n:delete r[U],e},F=j()?T:P,I=Boolean.prototype.toString;var x=F,G=function(r){try{return I.call(r),!0}catch(r){return!1}},V=j();var H=function(r){return"object"==typeof r&&(r instanceof Boolean||(V?G(r):"[object Boolean]"===x(r)))},B=m,L=H;var M=b,k=function(r){return B(r)||L(r)},C=H;M(k,"isPrimitive",m),M(k,"isObject",C);var W=k;var R=function(){return new Function("return this;")()},X="object"==typeof self?self:null,Y="object"==typeof window?window:null,z="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},D="object"==typeof z?z:null;module.exports=D;var q=W.isPrimitive,J=R,K=X,Q=Y,Z=r(Object.freeze({__proto__:null}));var $=function(r){if(arguments.length){if(!q(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return J()}if(K)return K;if(Q)return Q;if(Z)return Z;throw new Error("unexpected error. Unable to resolve global object.")},rr=$(),tr=rr.document&&rr.document.childNodes,nr=Int8Array,er=d,or=tr,ur=nr;var ir=function(){return"function"==typeof er||"object"==typeof ur||"function"==typeof or};var ar=function(){return/^\s*function\s*([^(]*)/i},fr=ar;b(fr,"REGEXP",ar());var cr=fr,lr=F;var vr=Array.isArray?Array.isArray:function(r){return"[object Array]"===lr(r)},yr=vr;var pr=function(r){return null!==r&&"object"==typeof r};b(pr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(t){var n,e;if(!yr(t))return!1;if(0===(n=t.length))return!1;for(e=0;e<n;e++)if(!1===r(t[e]))return!1;return!0}}(pr));var sr=pr;var br=F,dr=cr.REGEXP,mr=function(r){return sr(r)&&(r._isBuffer||r.constructor&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r))};var wr=function(r){var t,n,e;if(("Object"===(n=br(r).slice(8,-1))||"Error"===n)&&r.constructor){if("string"==typeof(e=r.constructor).name)return e.name;if(t=dr.exec(e.toString()))return t[1]}return mr(r)?"Buffer":n},jr=wr;var hr=wr;var gr=function(r){var t;return null===r?"null":"object"===(t=typeof r)?jr(r).toLowerCase():t},_r=function(r){return hr(r).toLowerCase()},Ar=ir()?_r:gr;var Or=function(r){return"function"===Ar(r)},Nr=Or;var Er=function(r){var t=typeof r;return null!==r&&("object"===t||"function"===t)&&Nr(r.next)};var Ur=function(r){return"number"==typeof r},Sr=Number,Pr=Sr.prototype.toString;var Tr=F,Fr=Sr,Ir=function(r){try{return Pr.call(r),!0}catch(r){return!1}},xr=j();var Gr=function(r){return"object"==typeof r&&(r instanceof Fr||(xr?Ir(r):"[object Number]"===Tr(r)))},Vr=Ur,Hr=Gr;var Br=b,Lr=function(r){return Vr(r)||Hr(r)},Mr=Gr;Br(Lr,"isPrimitive",Ur),Br(Lr,"isObject",Mr);var kr=Lr,Cr=O;var Wr=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")&&Cr(Symbol,"iterator")&&"symbol"==typeof Symbol.iterator}()?Symbol.iterator:null,Rr=vr;var Xr=function(r){return"object"==typeof r&&null!==r&&!Rr(r)},Yr=Object.getPrototypeOf;var zr=function(r){return r.__proto__},Dr=F,qr=zr;var Jr=function(r){var t=qr(r);return t||null===t?t:"[object Function]"===Dr(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null},Kr=Yr,Qr=Jr,Zr=Or(Object.getPrototypeOf)?Kr:Qr;var $r=Xr,rt=Or,tt=function(r){return null==r?null:(r=Object(r),Zr(r))},nt=O,et=F,ot=Object.prototype;var ut=function(r){var t;return!!$r(r)&&(!(t=tt(r))||!nt(r,"constructor")&&nt(t,"constructor")&&rt(t.constructor)&&"[object Function]"===et(t.constructor)&&nt(t,"isPrototypeOf")&&rt(t.isPrototypeOf)&&(t===ot||function(r){var t;for(t in r)if(!nt(r,t))return!1;return!0}(r)))},it=ut,at=O;var ft=b,ct=Or,lt=Er,vt=kr.isPrimitive,yt=Wr,pt=function(r,t){return it(t)?(at(t,"invalid")&&(r.invalid=t.invalid),null):new TypeError("invalid argument. Options argument must be an object. Value: `"+t+"`.")};var st=function r(t,n,e){var o,u,i,a;if(!lt(t))throw new TypeError("invalid argument. First argument must be an iterator protocol-compliant object. Value: `"+t+"`.");if(!ct(n))throw new TypeError("invalid argument. Second argument must be a function. Value: `"+n+"`.");if(o={invalid:NaN},arguments.length>2&&(i=pt(o,e)))throw i;return ft(u={},"next",f),ft(u,"return",c),yt&&ct(t[yt])&&ft(u,yt,l),u;function f(){var r;return a?{done:!0}:(r=t.next()).done?(a=!0,r):{value:vt(r.value)?n(r.value):o.invalid,done:!1}}function c(r){return a=!0,arguments.length?{value:r,done:!0}:{done:!0}}function l(){return r(t[yt](),n,o)}},bt=st;var dt=function(r){return r!=r},mt=Number.POSITIVE_INFINITY,wt=Sr.NEGATIVE_INFINITY,jt=mt,ht=wt;var gt=function(r){return r===jt||r===ht};var _t=function(r){return Math.abs(r)},At=F,Ot="function"==typeof Uint32Array;var Nt="function"==typeof Uint32Array?Uint32Array:null,Et=function(r){return Ot&&r instanceof Uint32Array||"[object Uint32Array]"===At(r)},Ut=Nt;var St=function(){var r,t;if("function"!=typeof Ut)return!1;try{t=new Ut(t=[1,3.14,-3.14,4294967296,4294967297]),r=Et(t)&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r};var Pt="function"==typeof Uint32Array?Uint32Array:void 0,Tt=function(){throw new Error("not implemented")},Ft=St()?Pt:Tt,It=F,xt="function"==typeof Float64Array;var Gt="function"==typeof Float64Array?Float64Array:null,Vt=function(r){return xt&&r instanceof Float64Array||"[object Float64Array]"===It(r)},Ht=Gt;var Bt=function(){var r,t;if("function"!=typeof Ht)return!1;try{t=new Ht([1,3.14,-3.14,NaN]),r=Vt(t)&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r};var Lt="function"==typeof Float64Array?Float64Array:void 0,Mt=function(){throw new Error("not implemented")},kt=Bt()?Lt:Mt,Ct=F,Wt="function"==typeof Uint8Array;var Rt="function"==typeof Uint8Array?Uint8Array:null,Xt=function(r){return Wt&&r instanceof Uint8Array||"[object Uint8Array]"===Ct(r)},Yt=Rt;var zt=function(){var r,t;if("function"!=typeof Yt)return!1;try{t=new Yt(t=[1,3.14,-3.14,256,257]),r=Xt(t)&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r};var Dt="function"==typeof Uint8Array?Uint8Array:void 0,qt=function(){throw new Error("not implemented")},Jt=zt()?Dt:qt,Kt=F,Qt="function"==typeof Uint16Array;var Zt="function"==typeof Uint16Array?Uint16Array:null,$t=function(r){return Qt&&r instanceof Uint16Array||"[object Uint16Array]"===Kt(r)},rn=Zt;var tn=function(){var r,t;if("function"!=typeof rn)return!1;try{t=new rn(t=[1,3.14,-3.14,65536,65537]),r=$t(t)&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r};var nn,en="function"==typeof Uint16Array?Uint16Array:void 0,on=function(){throw new Error("not implemented")},un={uint16:tn()?en:on,uint8:Jt};(nn=new un.uint16(1))[0]=4660;var an=52===new un.uint8(nn.buffer)[0],fn=Ft,cn=!0===an?1:0,ln=new kt(1),vn=new fn(ln.buffer);var yn=function(r){return ln[0]=r,vn[cn]};var pn=function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)},sn=function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7};var bn=function(r,t){var n,e,o,u;return o=(u=r*r)*u,e=u*pn(u),e+=o*o*sn(u),(o=1-(n=.5*u))+(1-o-n+(u*e-r*t))},dn=-.16666666666666632;var mn=function(r,t){var n,e,o;return n=.00833333333332249+(o=r*r)*(27557313707070068e-22*o-.0001984126982985795)+o*(o*o)*(1.58969099521155e-10*o-2.5050760253406863e-8),e=o*r,0===t?r+e*(dn+o*n):r-(o*(.5*t-e*n)-t-e*dn)},wn=Ft,jn=!0===an?0:1,hn=new kt(1),gn=new wn(hn.buffer);var _n,An,On=function(r){return hn[0]=r,gn[jn]};!0===an?(_n=1,An=0):(_n=0,An=1);var Nn=Ft,En={HIGH:_n,LOW:An},Un=new kt(1),Sn=new Nn(Un.buffer),Pn=En.HIGH,Tn=En.LOW;var Fn,In,xn=function(r,t){return Sn[Pn]=r,Sn[Tn]=t,Un[0]},Gn=xn,Vn=Math.floor;!0===an?(Fn=1,In=0):(Fn=0,In=1);var Hn=Ft,Bn={HIGH:Fn,LOW:In},Ln=new kt(1),Mn=new Hn(Ln.buffer),kn=Bn.HIGH,Cn=Bn.LOW;var Wn=function(r,t){return Ln[0]=t,r[0]=Mn[kn],r[1]=Mn[Cn],r};var Rn=function(r,t){return 1===arguments.length?Wn([0,0],r):Wn(r,t)},Xn=Rn,Yn=yn,zn=Gn,Dn=[0,0];var qn=gt,Jn=dt,Kn=_t;var Qn=function(r,t){return Jn(t)||qn(t)?(r[0]=t,r[1]=0,r):0!==t&&Kn(t)<22250738585072014e-324?(r[0]=4503599627370496*t,r[1]=-52,r):(r[0]=t,r[1]=0,r)};var Zn=function(r,t){return 1===arguments.length?Qn([0,0],r):Qn(r,t)},$n=yn;var re=function(r){var t=$n(r);return(t=(2146435072&t)>>>20)-1023|0},te=mt,ne=wt,ee=dt,oe=gt,ue=function(r,t){var n,e;return Xn(Dn,r),n=Dn[0],n&=2147483647,e=Yn(t),zn(n|=e&=2147483648,Dn[1])},ie=Zn,ae=re,fe=Rn,ce=Gn,le=[0,0],ve=[0,0];var ye=function(r,t){var n,e;return 0===t||0===r||ee(r)||oe(r)?r:(ie(le,r),t+=le[1],(t+=ae(r=le[0]))<-1074?ue(0,r):t>1023?r<0?ne:te:(t<=-1023?(t+=52,e=2220446049250313e-31):e=1,fe(ve,r),n=ve[0],n&=2148532223,e*ce(n|=t+1023<<20,ve[1])))};var pe=function(r,t){var n,e;for(n=[],e=0;e<t;e++)n.push(r);return n};var se=Vn,be=ye,de=function(r){return pe(0,r)},me=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],we=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],je=16777216,he=5.960464477539063e-8,ge=de(20),_e=de(20),Ae=de(20),Oe=de(20);function Ne(r,t,n,e,o,u,i,a,f){var c,l,v,y,p,s,b,d,m;for(y=u,m=e[n],d=n,p=0;d>0;p++)l=he*m|0,Oe[p]=m-je*l|0,m=e[d-1]+l,d-=1;if(m=be(m,o),m-=8*se(.125*m),m-=b=0|m,v=0,o>0?(b+=p=Oe[n-1]>>24-o,Oe[n-1]-=p<<24-o,v=Oe[n-1]>>23-o):0===o?v=Oe[n-1]>>23:m>=.5&&(v=2),v>0){for(b+=1,c=0,p=0;p<n;p++)d=Oe[p],0===c?0!==d&&(c=1,Oe[p]=16777216-d):Oe[p]=16777215-d;if(o>0)switch(o){case 1:Oe[n-1]&=8388607;break;case 2:Oe[n-1]&=4194303}2===v&&(m=1-m,0!==c&&(m-=be(1,o)))}if(0===m){for(d=0,p=n-1;p>=u;p--)d|=Oe[p];if(0===d){for(s=1;0===Oe[u-s];s++);for(p=n+1;p<=n+s;p++){for(f[a+p]=me[i+p],l=0,d=0;d<=a;d++)l+=r[d]*f[a+(p-d)];e[p]=l}return Ne(r,t,n+=s,e,o,u,i,a,f)}}if(0===m)for(n-=1,o-=24;0===Oe[n];)n-=1,o-=24;else(m=be(m,-o))>=je?(l=he*m|0,Oe[n]=m-je*l|0,o+=24,Oe[n+=1]=l):Oe[n]=0|m;for(l=be(1,o),p=n;p>=0;p--)e[p]=l*Oe[p],l*=he;for(p=n;p>=0;p--){for(l=0,s=0;s<=y&&s<=n-p;s++)l+=we[s]*e[p+s];Ae[n-p]=l}for(l=0,p=n;p>=0;p--)l+=Ae[p];for(t[0]=0===v?l:-l,l=Ae[0]-l,p=1;p<=n;p++)l+=Ae[p];return t[1]=0===v?l:-l,7&b}var Ee=function(r,t,n,e){var o,u,i,a,f,c,l;for(4,(u=(n-3)/24|0)<0&&(u=0),a=n-24*(u+1),c=u-(i=e-1),l=i+4,f=0;f<=l;f++)ge[f]=c<0?0:me[c],c+=1;for(f=0;f<=4;f++){for(o=0,c=0;c<=i;c++)o+=r[c]*ge[i+(f-c)];_e[f]=o}return 4,Ne(r,t,4,_e,a,4,u,i,ge)},Ue=Math.round,Se=yn;var Pe=yn,Te=On,Fe=Gn,Ie=Ee,xe=function(r,t,n){var e,o,u,i,a;return u=r-1.5707963267341256*(e=Ue(.6366197723675814*r)),i=6077100506506192e-26*e,a=t>>20|0,n[0]=u-i,a-(Se(n[0])>>20&2047)>16&&(i=20222662487959506e-37*e-((o=u)-(u=o-(i=6077100506303966e-26*e))-i),n[0]=u-i,a-(Se(n[0])>>20&2047)>49&&(i=84784276603689e-45*e-((o=u)-(u=o-(i=20222662487111665e-37*e))-i),n[0]=u-i)),n[1]=u-n[0]-i,e},Ge=1.5707963267341256,Ve=6077100506506192e-26,He=2*Ve,Be=3*Ve,Le=4*Ve,Me=[0,0,0],ke=[0,0];var Ce=function(r,t){var n,e,o,u,i,a,f;if((o=2147483647&Pe(r)|0)<=1072243195)return t[0]=r,t[1]=0,0;if(o<=1074752122)return 598523==(1048575&o)?xe(r,o,t):o<=1073928572?r>0?(f=r-Ge,t[0]=f-Ve,t[1]=f-t[0]-Ve,1):(f=r+Ge,t[0]=f+Ve,t[1]=f-t[0]+Ve,-1):r>0?(f=r-2*Ge,t[0]=f-He,t[1]=f-t[0]-He,2):(f=r+2*Ge,t[0]=f+He,t[1]=f-t[0]+He,-2);if(o<=1075594811)return o<=1075183036?1074977148===o?xe(r,o,t):r>0?(f=r-3*Ge,t[0]=f-Be,t[1]=f-t[0]-Be,3):(f=r+3*Ge,t[0]=f+Be,t[1]=f-t[0]+Be,-3):1075388923===o?xe(r,o,t):r>0?(f=r-4*Ge,t[0]=f-Le,t[1]=f-t[0]-Le,4):(f=r+4*Ge,t[0]=f+Le,t[1]=f-t[0]+Le,-4);if(o<1094263291)return xe(r,o,t);if(o>=2146435072)return t[0]=NaN,t[1]=NaN,0;for(n=Te(r),f=Fe(o-((e=(o>>20)-1046)<<20|0),n),i=0;i<2;i++)Me[i]=0|f,f=16777216*(f-Me[i]);for(Me[2]=f,u=3;0===Me[u-1];)u-=1;return a=Ie(Me,ke,e,u),r<0?(t[0]=-ke[0],t[1]=-ke[1],-a):(t[0]=ke[0],t[1]=ke[1],a)},We=yn,Re=bn,Xe=mn,Ye=Ce,ze=[0,0];var De=yn,qe=bn,Je=mn,Ke=Ce,Qe=[0,0];var Ze=dt,$e=gt,ro=_t,to=function(r){var t;if(t=We(r),(t&=2147483647)<=1072243195)return t<1044381696?1:Re(r,0);if(t>=2146435072)return NaN;switch(3&Ye(r,ze)){case 0:return Re(ze[0],ze[1]);case 1:return-Xe(ze[0],ze[1]);case 2:return-Re(ze[0],ze[1]);default:return Xe(ze[0],ze[1])}},no=function(r){var t;if(t=De(r),(t&=2147483647)<=1072243195)return t<1045430272?r:Je(r,0);if(t>=2146435072)return NaN;switch(3&Ke(r,Qe)){case 0:return Je(Qe[0],Qe[1]);case 1:return qe(Qe[0],Qe[1]);case 2:return-Je(Qe[0],Qe[1]);default:return-qe(Qe[0],Qe[1])}},eo=Vn,oo=3.141592653589793;var uo=function(r){var t,n,e,o;return Ze(r)||$e(r)?NaN:(t=ro(r))>9007199254740992?1:.5===(e=t-(n=eo(t)))?0:(o=e<.25?to(oo*e):e<.75?no(oo*(e=.5-e)):-to(oo*(e=1-e)),n%2==1?-o:o)};return function(r){return bt(r,uo)}}));
//# sourceMappingURL=browser.js.map
