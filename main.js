!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";n.r(e);var r=n.p+"7752fc618b895cbe1c13995a3bd345ee.png",o=n.p+"89c486d71a957b8b7d9bc328e4a7874c.png",i=n.p+"426f2629444990abc979ebc038af4a97.png",c=n.p+"0c2edddd07c8010ff7340cf2179fffaf.png",u=n.p+"6ff97f33274eda937a107cd73cd1870e.png",f=n.p+"5bc1d8e3e9f58a459ffccb79eb717047.png",a=n.p+"7355b15cb58f420527225a9765d9089a.png",s=n.p+"a83b6b647deec512a13cfd8bc43d309c.png",l=n.p+"0d455de8d6f96b2bfb98e066e8220e94.png",p=n.p+"ed81716c93e0d8c54b7184a9b29a6353.png",y=n.p+"11378cdc35c375c413e713295cf350f7.png",d=n.p+"4ffdf427ebc2bb1683b529fca1e16fcc.png",b=n.p+"a67bf42f083238775a6787120edd26b8.png",h=n.p+"e34d4095bc2b87a657ba0fb5b21e1941.png",m=n.p+"52b155a64a6e1f4cc9089b872ca99be0.png",g=n.p+"14e33aad28b5ea43ebfd56ea4c71b614.png",v=n.p+"de7d82df82bf88811f3283a030002dd8.png",w=n.p+"9ea67e93e80290588e752515ff25aa4f.png",O=n.p+"a776f6e434800fd0e20dde6efd17d85b.png",j=n.p+"3761a8a3d88f30835dc0a5a56114023b.png",_=n.p+"51ab11191a7b90722a0020ee6b285d7a.png",S=n.p+"839340403818d203bf5b62b281a585d2.png",P=n.p+"d8f314cff4afe8001a9fc3f8dd3b2272.png",R=n.p+"e81b8efd674ad9fc82b52907a8efe61e.mp3",x=n.p+"9bb2e3f4017bf5ba53c9339951f94ec4.mp3",E=n.p+"54a462d8800b80e1f97ab05b98e6487f.mp3",C=n.p+"450ba1bd1bf44d0e6ad07c82b851d0d5.mp3";function k(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function T(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var n=[],r=!0,o=!1,i=void 0;try{for(var c,u=t[Symbol.iterator]();!(r=(c=u.next()).done)&&(n.push(c.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{r||null==u.return||u.return()}finally{if(o)throw i}}return n}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return z(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return z(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function z(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var A=createjs,D=A.LoadQueue,M=A.Sound,I=Object.entries({bg:r,shit:o,snake:i,spider:c,corn:u,ice:f,mango:a,popsicle:s,pudding:l,toast:p,run1:y,run2:d,run3:b,run4:h,run5:m,run6:g,run7:v,run8:w,imgSad:O,imgHappy:j,imgUp:_,sndOn:S,sndOff:P,eat:R,intro:x,stomp:E,jump:C}).map((function(t){var e=T(t,2);return{id:e[0],src:e[1]}})),Y=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}var e,n,r;return e=t,r=[{key:"init",value:function(e){var n=new D;n.installPlugin(M),n.on("complete",e),n.loadManifest(I),t.queue=n}},{key:"get",value:function(e){return t.queue.getResult(e)}}],(n=null)&&k(e.prototype,n),r&&k(e,r),t}(),H=.25,L=.6,q=.93;function X(t){return(X="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function U(t,e){return(U=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function B(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=N(t);if(e){var o=N(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return F(this,n)}}function F(t,e){return!e||"object"!==X(e)&&"function"!=typeof e?$(t):e}function $(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function N(t){return(N=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function Q(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var W=createjs,G=W.Container,J=W.Bitmap,K=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&U(t,e)}(n,t);var e=B(n);function n(){var t;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),Q($(t=e.call(this)),"t",0),Q($(t),"added",(function(){t.t=Date.now(),t.on("tick",t.tick),t._stage=t.stage,t._stage.on("resize",t.resize),t.resize()})),Q($(t),"removed",(function(){t.off("tick",t.tick),t._stage.off("resize",t.resize)})),Q($(t),"resize",(function(){var e=t._stage,n=e.width,r=e.height,o=new J(Y.get("bg")),i=r/720;t.scale=i,t.speed=2e-4*n/i,t.layer.removeAllChildren();for(var c=Math.ceil(n/(1280*i))+1,u=0;u<c;u++){var f=o.clone();f.x=1280*u,t.layer.addChild(f)}})),Q($(t),"tick",(function(){var e=Date.now(),n=e-t.t;t.t=e,t.layer.x-=t.speed*n,t.layer.x<=-1280&&(t.layer.x+=1280)}));var r=new G;return t.addChild(r),t.layer=r,t.on("added",t.added),t.on("removed",t.removed),t}return n}(G);function V(t){return(V="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function Z(t,e){return(Z=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function tt(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=nt(t);if(e){var o=nt(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return et(this,n)}}function et(t,e){return!e||"object"!==V(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function nt(t){return(nt=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var rt=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&Z(t,e)}(n,t);var e=tt(n);function n(t){var r;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n);var o=Y.get(t);return(r=e.call(this,o)).regX=parseInt(o.width/2,10),r.regY=parseInt(o.height/2,10),r}return n}(createjs.Bitmap);function ot(t){return(ot="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function it(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function ct(t,e){return(ct=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function ut(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=st(t);if(e){var o=st(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return ft(this,n)}}function ft(t,e){return!e||"object"!==ot(e)&&"function"!=typeof e?at(t):e}function at(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function st(t){return(st=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function lt(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var pt=createjs,yt=pt.Container,dt=pt.Tween,bt=pt.Ease,ht=["shit","snake","spider"],mt=["corn","pudding","ice","mango","popsicle","toast"],gt=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&ct(t,e)}(i,t);var e,n,r,o=ut(i);function i(t){var e;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),lt(at(e=o.call(this)),"pos",0),lt(at(e),"t",0),lt(at(e),"isHit",!1),lt(at(e),"speed",0),lt(at(e),"added",(function(){e.t=Date.now(),e.on("tick",e.tick),e._stage=e.stage,e._stage.on("resize",e.resize),e.resize()})),lt(at(e),"removed",(function(){e.off("tick",e.tick),e._stage.off("resize",e.resize)})),lt(at(e),"resize",(function(){var t=e._stage.height;e.y=e.pos.y*t,e.scale=t/720})),lt(at(e),"tick",(function(){var t=Date.now(),n=t-e.t;e.t=t,e.pos.x-=2e-4*n,e.x=e.pos.x*e._stage.width,e.pos.x<=-.2&&e.dispatchEvent("remove")})),lt(at(e),"eaten",(function(){dt.get(e.img).to({scale:0},300,bt.backIn).call((function(){return e.dispatchEvent("remove")}))})),lt(at(e),"flatten",(function(){dt.get(e.img).to({y:60,scaleY:.1},300,bt.elasticOut)}));var n,r=(n=t?mt:ht)[parseInt(Math.random()*n.length,10)];e.good=t,i.bitmaps[r]||(i.bitmaps[r]=new rt(r)),e.img=i.bitmaps[r].clone(),e.regY=40,e.addChild(e.img);var c=H,u=L,f=q;return e.pos={x:1.2,y:t?Math.random()<.4?u:c:f},e.on("added",e.added),e.on("removed",e.removed),e}return e=i,(n=[{key:"hit",value:function(){return this.isHit=!0,this.good?this.eaten():this.flatten()}}])&&it(e.prototype,n),r&&it(e,r),i}(yt);function vt(t){return(vt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function wt(t){return function(t){if(Array.isArray(t))return Ot(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return Ot(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Ot(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Ot(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function jt(t,e){return(jt=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function _t(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Rt(t);if(e){var o=Rt(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return St(this,n)}}function St(t,e){return!e||"object"!==vt(e)&&"function"!=typeof e?Pt(t):e}function Pt(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function Rt(t){return(Rt=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function xt(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}lt(gt,"bitmaps",{});var Et=createjs.Container,Ct=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&jt(t,e)}(n,t);var e=_t(n);function n(){var t;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),xt(Pt(t=e.call(this)),"timer",-1),xt(Pt(t),"icons",[]),xt(Pt(t),"added",(function(){clearTimeout(t.timer),t.timer=setTimeout((function(){t.addIcon(),t.added()}),1800+500*Math.random())})),xt(Pt(t),"removed",(function(){clearTimeout(t.timer)})),xt(Pt(t),"addIcon",(function(){var e;e=Math.random()<.25?new gt(!1):new gt(!0),t.addChild(e),t.icons=[].concat(wt(t.icons),[e]),e.on("remove",(function(n){t.removeChild(e),t.icons=t.icons.filter((function(t){return t!==e})),n.remove()}))})),t.layer=new Et,t.addChild(t.layer),t.on("added",t.added),t.on("removed",t.removed),t}return n}(Et);function kt(t){return(kt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function Tt(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function zt(t,e){return(zt=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function At(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=It(t);if(e){var o=It(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Dt(this,n)}}function Dt(t,e){return!e||"object"!==kt(e)&&"function"!=typeof e?Mt(t):e}function Mt(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function It(t){return(It=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function Yt(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var Ht=createjs,Lt=Ht.Sprite,qt=Ht.SpriteSheet,Xt=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&zt(t,e)}(i,t);var e,n,r,o=At(i);function i(){var t;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i);var e=new qt({images:[Y.get("imgSad"),Y.get("imgHappy"),Y.get("imgUp")],frames:{width:200,height:230},animations:{up:2,sad:[0,0,"up",.015],happy:[1,1,"up",.015]}});return Yt(Mt(t=o.call(this,e,"up")),"timer",-1),Yt(Mt(t),"startAnim",(function(){t.stopAnim(),t.timer=setTimeout((function(){t.rotation=-t.rotation,t.startAnim()}),200)})),Yt(Mt(t),"stopAnim",(function(){clearTimeout(t.timer)})),t.regX=100,t.regY=230,t.x=30,t.y=-220,t.rotation=1,t.on("added",t.startAnim),t.on("remove",t.stopAnim),t}return e=i,(n=[{key:"jumping",set:function(t){t?this.stopAnim():this.startAnim()}}])&&Tt(e.prototype,n),r&&Tt(e,r),i}(Lt);function Ut(t){return(Ut="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function Bt(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function Ft(t,e){return(Ft=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function $t(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Qt(t);if(e){var o=Qt(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Nt(this,n)}}function Nt(t,e){return!e||"object"!==Ut(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function Qt(t){return(Qt=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var Wt=createjs,Gt=Wt.Sprite,Jt=Wt.SpriteSheet,Kt=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&Ft(t,e)}(i,t);var e,n,r,o=$t(i);function i(){var t;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i);var e=new Jt({images:[Y.get("run1"),Y.get("run2"),Y.get("run3"),Y.get("run4"),Y.get("run5"),Y.get("run6"),Y.get("run7"),Y.get("run8")],frames:{width:220,height:360},animations:{run:[0,7],jump:0}});return(t=o.call(this,e,"run")).regX=110,t.regY=360,t.framerate=12,t}return e=i,(n=[{key:"jumping",set:function(t){this.gotoAndPlay(t?"jump":"run")}}])&&Bt(e.prototype,n),r&&Bt(e,r),i}(Gt);function Vt(t){return(Vt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function Zt(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function te(t,e){return(te=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function ee(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=oe(t);if(e){var o=oe(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return ne(this,n)}}function ne(t,e){return!e||"object"!==Vt(e)&&"function"!=typeof e?re(t):e}function re(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function oe(t){return(oe=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function ie(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var ce=createjs,ue=ce.Container,fe=ce.Tween,ae=ce.Ease,se=ce.Sound,le=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&te(t,e)}(i,t);var e,n,r,o=ee(i);function i(){var t;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),ie(re(t=o.call(this)),"top",0),ie(re(t),"bottom",0),ie(re(t),"head",{x:60,y:-240}),ie(re(t),"_jumping",!1),ie(re(t),"added",(function(){t._stage=t.stage,t._stage.on("mousedown",t.jump),t._stage.on("resize",t.resize),t.resize(),t.on("tick",t.hitTest)})),ie(re(t),"removed",(function(){t._stage.off("mousedown",t.jump),t._stage.off("resize",t.resize),t.off("tick",t.hitTest)})),ie(re(t),"hitTest",(function(){t.icons.icons.forEach((function(e){if(!e.isHit){var n=t.globalToLocal(e.x,e.y),r=e.good?t.head:{x:0,y:0};Math.abs(n.x-r.x)<t.hitRange&&Math.abs(n.y-r.y)<t.hitRange&&(e.hit(),t.face.gotoAndPlay(e.good?"happy":"sad"),se.play(e.good?"eat":"stomp"))}}))})),ie(re(t),"resize",(function(){var e=H,n=L,r=q,o=t._stage,i=o.width,c=o.height,u=c*(r-n)/240;t.layer.scale=u,t.hitRange=80*u,t.head={x:60*u,y:-240*u},t.top=c*e,t.bottom=c*r,t.x=.3*i,t.y=t.bottom})),ie(re(t),"jump",(function(){t.jumping||(se.play("jump"),fe.get(re(t)).set({jumping:!0}).to({y:t.top-t.head.y},800,ae.sineOut).to({y:t.bottom},800,ae.sineIn).set({jumping:!1}))}));var e=new ue;return t.layer=e,t.addChild(e),t.body=new Kt,e.addChild(t.body),t.face=new Xt,e.addChild(t.face),e.regX=-10,e.regY=-30,t.on("added",t.added),t.on("removed",t.removed),t}return e=i,(n=[{key:"jumping",get:function(){return this._jumping},set:function(t){this._jumping=t,this.face.jumping=t,this.body.jumping=t}}])&&Zt(e.prototype,n),r&&Zt(e,r),i}(ue);function pe(t){return(pe="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function ye(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function de(t,e){return(de=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function be(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=ge(t);if(e){var o=ge(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return he(this,n)}}function he(t,e){return!e||"object"!==pe(e)&&"function"!=typeof e?me(t):e}function me(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function ge(t){return(ge=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function ve(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var we=createjs,Oe=we.Stage,je=we.Shape,_e=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&de(t,e)}(i,t);var e,n,r,o=be(i);function i(){var t;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),ve(me(t=o.call(this,"canvas")),"width",1280),ve(me(t),"height",720),ve(me(t),"resize",(function(){var e=window,n=e.innerWidth,r=e.innerHeight;t.canvas.width=n,t.canvas.height=r,t.width=n,t.height=r,t.bg.graphics.c().f("#b7e3ec").r(0,0,n,r),t.dispatchEvent("resize")})),t.bg=new je,t.addChild(t.bg),t.enableMouseOver(),window.addEventListener("resize",t.resize),t.resize(),t}return e=i,(n=[{key:"destroy",value:function(){window.removeEventListener("resize",this.resize)}}])&&ye(e.prototype,n),r&&ye(e,r),i}(Oe);function Se(t){return(Se="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function Pe(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function Re(t,e){return(Re=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function xe(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=ke(t);if(e){var o=ke(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Ee(this,n)}}function Ee(t,e){return!e||"object"!==Se(e)&&"function"!=typeof e?Ce(t):e}function Ce(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function ke(t){return(ke=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function Te(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var ze=createjs,Ae=ze.Container,De=ze.Bitmap,Me=ze.Sound,Ie=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&Re(t,e)}(i,t);var e,n,r,o=xe(i);function i(){var t;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),Te(Ce(t=o.call(this)),"_play",!1),Te(Ce(t),"added",(function(){t.instance=Me.play("intro",{loop:-1,volume:.25});var e=t.play;t.play=e,t._stage=t.stage,t._stage.on("resize",t.resize),t.resize()})),Te(Ce(t),"removed",(function(){t.play=!1,t._stage.on("resize",t.resize)})),Te(Ce(t),"resize",(function(){t.x=t._stage.width,t.scale=1})),t.sndOn=new De(Y.get("sndOn")),t.sndOff=new De(Y.get("sndOff")),t.addChild(t.sndOn),t.addChild(t.sndOff),t.regX=t.sndOn.image.width+20,t.regY=-20,t.cursor="pointer",t.on("added",t.added),t.on("removed",t.removed),t.on("click",(function(){return t.play=!t.play})),t}return e=i,(n=[{key:"play",get:function(){try{this._play="0"!==window.localStorage.getItem("bgm")}catch(t){}return this._play},set:function(t){this._play=t;try{window.localStorage.setItem("bgm",t?"1":"0")}catch(t){}t?(this.removeChild(this.sndOff),this.addChild(this.sndOn),this.instance.play()):(this.removeChild(this.sndOn),this.addChild(this.sndOff),this.instance.stop())}}])&&Pe(e.prototype,n),r&&Pe(e,r),i}(Ae),Ye=createjs.Ticker;window.addEventListener("load",(function(){var t=document.querySelector("#loading"),e=document.querySelector("#canvas"),n=document.querySelector("#start");Y.init((function(){t.style.display="none",n.style.display="block",n.addEventListener("click",(function(){n.style.display="none",e.style.display="block";var t=new _e,r=new K,o=new le,i=new Ct,c=new Ie;o.icons=i,t.addChild(r),t.addChild(o),t.addChild(i),t.addChild(c),Ye.setFPS(60),Ye.timingMode=Ye.RAF_SYNCHED,Ye.on("tick",t)}))}))}))}]);