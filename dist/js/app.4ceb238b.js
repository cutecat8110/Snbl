(function(n){function e(e){for(var t,u,o=e[0],h=e[1],f=e[2],d=0,i=[];d<o.length;d++)u=o[d],Object.prototype.hasOwnProperty.call(a,u)&&a[u]&&i.push(a[u][0]),a[u]=0;for(t in h)Object.prototype.hasOwnProperty.call(h,t)&&(n[t]=h[t]);l&&l(e);while(i.length)i.shift()();return r.push.apply(r,f||[]),c()}function c(){for(var n,e=0;e<r.length;e++){for(var c=r[e],t=!0,u=1;u<c.length;u++){var o=c[u];0!==a[o]&&(t=!1)}t&&(r.splice(e--,1),n=h(h.s=c[0]))}return n}var t={},u={app:0},a={app:0},r=[];function o(n){return h.p+"js/"+({}[n]||n)+"."+{"chunk-09a71c88":"d00d60c2","chunk-0c3045fc":"62bfe7ed","chunk-1901fa34":"3e61ea02","chunk-2b19361e":"71a20196","chunk-371b038e":"f9920e2b","chunk-7627d3f2":"4046abea","chunk-27a0b616":"20fd3986","chunk-6206f936":"c7f9d969","chunk-24ea2c1a":"269d45b4","chunk-0a4422a0":"1b0e8e85","chunk-0e7473ac":"35c90563","chunk-127068a8":"e57faf0b","chunk-21dd1f96":"8c2a50be","chunk-2d0c8d68":"b5ba0f3c","chunk-2d21eb0a":"092cb3b6","chunk-2eedc32d":"35e566b6","chunk-32b18ff4":"a225a0ae","chunk-3b998fbf":"7752c323","chunk-3f5cf8c8":"ed7b34b9","chunk-438c77f2":"fbc7743f","chunk-5a52ca92":"782b3428","chunk-26386ca7":"f671a52c","chunk-6aef6238":"a244bee6","chunk-744ac758":"5de714f0","chunk-c3f8578a":"f09ecb3f","chunk-dfda33b2":"5b85bc9a","chunk-e2a5c824":"a8a115f1","chunk-ea5cc840":"47e84ba4"}[n]+".js"}function h(e){if(t[e])return t[e].exports;var c=t[e]={i:e,l:!1,exports:{}};return n[e].call(c.exports,c,c.exports,h),c.l=!0,c.exports}h.e=function(n){var e=[],c={"chunk-0c3045fc":1,"chunk-1901fa34":1,"chunk-2b19361e":1,"chunk-371b038e":1,"chunk-7627d3f2":1,"chunk-27a0b616":1,"chunk-6206f936":1,"chunk-24ea2c1a":1,"chunk-0a4422a0":1,"chunk-0e7473ac":1,"chunk-127068a8":1,"chunk-21dd1f96":1,"chunk-2eedc32d":1,"chunk-32b18ff4":1,"chunk-3f5cf8c8":1,"chunk-438c77f2":1,"chunk-5a52ca92":1,"chunk-26386ca7":1,"chunk-6aef6238":1,"chunk-744ac758":1,"chunk-c3f8578a":1,"chunk-dfda33b2":1,"chunk-e2a5c824":1,"chunk-ea5cc840":1};u[n]?e.push(u[n]):0!==u[n]&&c[n]&&e.push(u[n]=new Promise((function(e,c){for(var t="css/"+({}[n]||n)+"."+{"chunk-09a71c88":"31d6cfe0","chunk-0c3045fc":"2136bced","chunk-1901fa34":"383508c7","chunk-2b19361e":"c9a77038","chunk-371b038e":"ceacbbfb","chunk-7627d3f2":"e352427c","chunk-27a0b616":"08f82989","chunk-6206f936":"fddca726","chunk-24ea2c1a":"b609d32d","chunk-0a4422a0":"f1374a3b","chunk-0e7473ac":"b0e22183","chunk-127068a8":"57191d5c","chunk-21dd1f96":"ebfc75f1","chunk-2d0c8d68":"31d6cfe0","chunk-2d21eb0a":"31d6cfe0","chunk-2eedc32d":"85b38eca","chunk-32b18ff4":"bde4aac9","chunk-3b998fbf":"31d6cfe0","chunk-3f5cf8c8":"c7fafe9e","chunk-438c77f2":"9ef33bb6","chunk-5a52ca92":"dfeb603a","chunk-26386ca7":"64eedc12","chunk-6aef6238":"8aae5a6f","chunk-744ac758":"36e4e234","chunk-c3f8578a":"ffe3ce4e","chunk-dfda33b2":"f1661a43","chunk-e2a5c824":"392749b3","chunk-ea5cc840":"4dab9cba"}[n]+".css",a=h.p+t,r=document.getElementsByTagName("link"),o=0;o<r.length;o++){var f=r[o],d=f.getAttribute("data-href")||f.getAttribute("href");if("stylesheet"===f.rel&&(d===t||d===a))return e()}var i=document.getElementsByTagName("style");for(o=0;o<i.length;o++){f=i[o],d=f.getAttribute("data-href");if(d===t||d===a)return e()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=e,l.onerror=function(e){var t=e&&e.target&&e.target.src||a,r=new Error("Loading CSS chunk "+n+" failed.\n("+t+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=t,delete u[n],l.parentNode.removeChild(l),c(r)},l.href=a;var b=document.getElementsByTagName("head")[0];b.appendChild(l)})).then((function(){u[n]=0})));var t=a[n];if(0!==t)if(t)e.push(t[2]);else{var r=new Promise((function(e,c){t=a[n]=[e,c]}));e.push(t[2]=r);var f,d=document.createElement("script");d.charset="utf-8",d.timeout=120,h.nc&&d.setAttribute("nonce",h.nc),d.src=o(n);var i=new Error;f=function(e){d.onerror=d.onload=null,clearTimeout(l);var c=a[n];if(0!==c){if(c){var t=e&&("load"===e.type?"missing":e.type),u=e&&e.target&&e.target.src;i.message="Loading chunk "+n+" failed.\n("+t+": "+u+")",i.name="ChunkLoadError",i.type=t,i.request=u,c[1](i)}a[n]=void 0}};var l=setTimeout((function(){f({type:"timeout",target:d})}),12e4);d.onerror=d.onload=f,document.head.appendChild(d)}return Promise.all(e)},h.m=n,h.c=t,h.d=function(n,e,c){h.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:c})},h.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},h.t=function(n,e){if(1&e&&(n=h(n)),8&e)return n;if(4&e&&"object"===typeof n&&n&&n.__esModule)return n;var c=Object.create(null);if(h.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var t in n)h.d(c,t,function(e){return n[e]}.bind(null,t));return c},h.n=function(n){var e=n&&n.__esModule?function(){return n["default"]}:function(){return n};return h.d(e,"a",e),e},h.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},h.p="/snbl/dist/",h.oe=function(n){throw console.error(n),n};var f=window["webpackJsonp"]=window["webpackJsonp"]||[],d=f.push.bind(f);f.push=e,f=f.slice();for(var i=0;i<f.length;i++)e(f[i]);var l=d;r.push([0,"chunk-vendors"]),c()})({0:function(n,e,c){n.exports=c("56d7")},"226c":function(n,e,c){},"2eb5":function(n,e,c){"use strict";c("226c")},"56d7":function(n,e,c){"use strict";c.r(e);c("e260"),c("e6cf"),c("cca6"),c("a79d"),c("159b"),c("b64b");var t=c("7a23"),u=c("bc3a"),a=c.n(u),r=c("2106"),o=c.n(r),h=(c("7b17"),c("3730")),f=c.n(h),d=(c("15f5"),c("f9d5")),i=c.n(d),l=(c("4413"),c("7bb1")),b=c("3aa8"),p=c("cbdf"),k=c("9457"),s=c("9062"),m=c.n(s);c("e40d"),c("ac1f"),c("5319"),c("b680");function v(n){var e=parseInt(n,10);return"".concat(e.toFixed(0).replace(/./g,(function(n,e,c){return e&&"."!==n&&(c.length-e)%3===0?", ".concat(n).replace(/\s/g,""):n})))}function g(n){var e=new Date(1e3*n);return e.toLocaleDateString()}function y(n,e){var c=Object(t["resolveComponent"])("router-view");return Object(t["openBlock"])(),Object(t["createBlock"])(c)}c("2eb5");const O={};O.render=y;var j=O,P=(c("d3b7"),c("3ca3"),c("ddb0"),c("6c02")),w=[{path:"/",component:function(){return Promise.all([c.e("chunk-09a71c88"),c.e("chunk-27a0b616")]).then(c.bind(null,"4bac"))},children:[{path:"",component:function(){return Promise.all([c.e("chunk-6206f936"),c.e("chunk-26386ca7")]).then(c.bind(null,"ec5a"))}},{path:"products",component:function(){return c.e("chunk-744ac758").then(c.bind(null,"ed84"))}},{path:"products/:id",component:function(){return c.e("chunk-744ac758").then(c.bind(null,"ed84"))}},{path:"product/:id",component:function(){return Promise.all([c.e("chunk-09a71c88"),c.e("chunk-6206f936"),c.e("chunk-24ea2c1a")]).then(c.bind(null,"658f"))}},{path:"cart",component:function(){return c.e("chunk-c3f8578a").then(c.bind(null,"62b3"))},children:[{path:"",component:function(){return c.e("chunk-438c77f2").then(c.bind(null,"fcdd"))}},{path:"add",component:function(){return c.e("chunk-32b18ff4").then(c.bind(null,"9309"))}}]},{name:"cart-completed",path:"order/:id",component:function(){return c.e("chunk-0a4422a0").then(c.bind(null,"69ff"))}},{path:"story",component:function(){return c.e("chunk-3b998fbf").then(c.bind(null,"8899"))}},{path:"try-free",component:function(){return c.e("chunk-21dd1f96").then(c.bind(null,"74bc"))}},{path:"vip",component:function(){return c.e("chunk-0e7473ac").then(c.bind(null,"93de"))}},{path:"qa",component:function(){return c.e("chunk-3f5cf8c8").then(c.bind(null,"fb97"))}},{path:"shopping-process",component:function(){return c.e("chunk-e2a5c824").then(c.bind(null,"0569"))}},{path:"policy",component:function(){return c.e("chunk-ea5cc840").then(c.bind(null,"f2b9"))}},{path:"payment-delivery",component:function(){return c.e("chunk-127068a8").then(c.bind(null,"9b42"))}},{path:"terms",component:function(){return c.e("chunk-5a52ca92").then(c.bind(null,"97fd"))}}]},{path:"/login",component:function(){return c.e("chunk-dfda33b2").then(c.bind(null,"62d5"))}},{path:"/admin",component:function(){return c.e("chunk-2eedc32d").then(c.bind(null,"a92e"))},children:[{path:"products",component:function(){return Promise.all([c.e("chunk-09a71c88"),c.e("chunk-0c3045fc"),c.e("chunk-2b19361e")]).then(c.bind(null,"372d"))}},{path:"product/:id",component:function(){return Promise.all([c.e("chunk-6206f936"),c.e("chunk-6aef6238")]).then(c.bind(null,"9464"))}},{path:"orders",component:function(){return Promise.all([c.e("chunk-09a71c88"),c.e("chunk-0c3045fc"),c.e("chunk-7627d3f2")]).then(c.bind(null,"0d5f"))}},{path:"coupons",component:function(){return Promise.all([c.e("chunk-09a71c88"),c.e("chunk-0c3045fc"),c.e("chunk-371b038e")]).then(c.bind(null,"e532"))}},{path:"article",component:function(){return Promise.all([c.e("chunk-09a71c88"),c.e("chunk-0c3045fc"),c.e("chunk-1901fa34")]).then(c.bind(null,"f983"))}},{path:"articles",component:function(){return c.e("chunk-2d21eb0a").then(c.bind(null,"d745"))}},{path:"articles",component:function(){return c.e("chunk-2d21eb0a").then(c.bind(null,"d745"))}},{path:"cart",component:function(){return c.e("chunk-2d0c8d68").then(c.bind(null,"571a"))}}]}],E=Object(P["a"])({history:Object(P["b"])(),routes:w,scrollBehavior:function(){return{left:0,top:0,behavior:"instant"}},linkExactActiveClass:"active"}),_=E;Object.keys(b["a"]).forEach((function(n){Object(l["e"])(n,b["a"][n])})),Object(l["d"])({generateMessage:Object(p["a"])({zh_TW:k}),validateOnInput:!0}),Object(p["b"])("zh_TW");var S=Object(t["createApp"])(j);S.config.globalProperties.$filters={date:g,currency:v},S.use(_),S.use(o.a,a.a),S.use(f.a),S.use(i.a),S.component("Loading",m.a),S.component("ErrorMessage",l["a"]),S.component("Field",l["b"]),S.component("Form",l["c"]),S.mount("#app")}});
//# sourceMappingURL=app.4ceb238b.js.map