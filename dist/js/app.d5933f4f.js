(function(e){function a(a){for(var r,u,l=a[0],f=a[1],c=a[2],i=0,s=[];i<l.length;i++)u=l[i],Object.prototype.hasOwnProperty.call(n,u)&&n[u]&&s.push(n[u][0]),n[u]=0;for(r in f)Object.prototype.hasOwnProperty.call(f,r)&&(e[r]=f[r]);b&&b(a);while(s.length)s.shift()();return o.push.apply(o,c||[]),t()}function t(){for(var e,a=0;a<o.length;a++){for(var t=o[a],r=!0,u=1;u<t.length;u++){var f=t[u];0!==n[f]&&(r=!1)}r&&(o.splice(a--,1),e=l(l.s=t[0]))}return e}var r={},n={app:0},o=[];function u(e){return l.p+"js/"+({about:"about"}[e]||e)+"."+{about:"c4e4d8bf"}[e]+".js"}function l(a){if(r[a])return r[a].exports;var t=r[a]={i:a,l:!1,exports:{}};return e[a].call(t.exports,t,t.exports,l),t.l=!0,t.exports}l.e=function(e){var a=[],t=n[e];if(0!==t)if(t)a.push(t[2]);else{var r=new Promise((function(a,r){t=n[e]=[a,r]}));a.push(t[2]=r);var o,f=document.createElement("script");f.charset="utf-8",f.timeout=120,l.nc&&f.setAttribute("nonce",l.nc),f.src=u(e);var c=new Error;o=function(a){f.onerror=f.onload=null,clearTimeout(i);var t=n[e];if(0!==t){if(t){var r=a&&("load"===a.type?"missing":a.type),o=a&&a.target&&a.target.src;c.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",c.name="ChunkLoadError",c.type=r,c.request=o,t[1](c)}n[e]=void 0}};var i=setTimeout((function(){o({type:"timeout",target:f})}),12e4);f.onerror=f.onload=o,document.head.appendChild(f)}return Promise.all(a)},l.m=e,l.c=r,l.d=function(e,a,t){l.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:t})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,a){if(1&a&&(e=l(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(l.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var r in e)l.d(t,r,function(a){return e[a]}.bind(null,r));return t},l.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(a,"a",a),a},l.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},l.p="/snbl/dist/",l.oe=function(e){throw console.error(e),e};var f=window["webpackJsonp"]=window["webpackJsonp"]||[],c=f.push.bind(f);f.push=a,f=f.slice();for(var i=0;i<f.length;i++)a(f[i]);var b=c;o.push([0,"chunk-vendors"]),t()})({0:function(e,a,t){e.exports=t("56d7")},"56d7":function(e,a,t){"use strict";t.r(a);t("e260"),t("e6cf"),t("cca6"),t("a79d");var r=t("7a23"),n={id:"nav"},o=Object(r["g"])("Home"),u=Object(r["g"])(" | "),l=Object(r["g"])("About");function f(e,a){var t=Object(r["w"])("router-link"),f=Object(r["w"])("router-view");return Object(r["q"])(),Object(r["d"])(r["a"],null,[Object(r["e"])("div",n,[Object(r["h"])(t,{to:"/"},{default:Object(r["B"])((function(){return[o]})),_:1}),u,Object(r["h"])(t,{to:"/about"},{default:Object(r["B"])((function(){return[l]})),_:1})]),Object(r["h"])(f)],64)}t("d400");const c={};c.render=f;var i=c,b=(t("d3b7"),t("3ca3"),t("ddb0"),t("6c02")),s=t("cf05"),v=t.n(s),d={class:"home"},p=Object(r["e"])("img",{alt:"Vue logo",src:v.a},null,-1);function h(e,a,t,n,o,u){var l=Object(r["w"])("HelloWorld");return Object(r["q"])(),Object(r["d"])("div",d,[p,Object(r["h"])(l,{msg:"Welcome to Your Vue.js App"})])}Object(r["t"])("data-v-7fbfaaea");var g={class:"hello"},j=Object(r["f"])('<p data-v-7fbfaaea> For a guide and recipes on how to configure / customize this project,<br data-v-7fbfaaea> check out the <a href="https://cli.vuejs.org" target="_blank" rel="noopener" data-v-7fbfaaea>vue-cli documentation</a>. </p><h3 data-v-7fbfaaea>Installed CLI Plugins</h3><ul data-v-7fbfaaea><li data-v-7fbfaaea><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener" data-v-7fbfaaea>babel</a></li><li data-v-7fbfaaea><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router" target="_blank" rel="noopener" data-v-7fbfaaea>router</a></li><li data-v-7fbfaaea><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener" data-v-7fbfaaea>eslint</a></li></ul><h3 data-v-7fbfaaea>Essential Links</h3><ul data-v-7fbfaaea><li data-v-7fbfaaea><a href="https://vuejs.org" target="_blank" rel="noopener" data-v-7fbfaaea>Core Docs</a></li><li data-v-7fbfaaea><a href="https://forum.vuejs.org" target="_blank" rel="noopener" data-v-7fbfaaea>Forum</a></li><li data-v-7fbfaaea><a href="https://chat.vuejs.org" target="_blank" rel="noopener" data-v-7fbfaaea>Community Chat</a></li><li data-v-7fbfaaea><a href="https://twitter.com/vuejs" target="_blank" rel="noopener" data-v-7fbfaaea>Twitter</a></li><li data-v-7fbfaaea><a href="https://news.vuejs.org" target="_blank" rel="noopener" data-v-7fbfaaea>News</a></li></ul><h3 data-v-7fbfaaea>Ecosystem</h3><ul data-v-7fbfaaea><li data-v-7fbfaaea><a href="https://router.vuejs.org" target="_blank" rel="noopener" data-v-7fbfaaea>vue-router</a></li><li data-v-7fbfaaea><a href="https://vuex.vuejs.org" target="_blank" rel="noopener" data-v-7fbfaaea>vuex</a></li><li data-v-7fbfaaea><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener" data-v-7fbfaaea>vue-devtools</a></li><li data-v-7fbfaaea><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener" data-v-7fbfaaea>vue-loader</a></li><li data-v-7fbfaaea><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener" data-v-7fbfaaea>awesome-vue</a></li></ul>',7);function m(e,a,t,n,o,u){return Object(r["q"])(),Object(r["d"])("div",g,[Object(r["e"])("h1",null,Object(r["y"])(t.msg),1),j])}Object(r["r"])();var O={name:"HelloWorld",props:{msg:String}};t("b886");O.render=m,O.__scopeId="data-v-7fbfaaea";var k=O,y={name:"Home",components:{HelloWorld:k}};y.render=h;var w=y,_=[{path:"/",name:"Home",component:w},{path:"/about",name:"About",component:function(){return t.e("about").then(t.bind(null,"f820"))}}],P=Object(b["a"])({history:Object(b["b"])(),routes:_}),x=P;Object(r["c"])(i).use(x).mount("#app")},b886:function(e,a,t){"use strict";t("d735")},c810:function(e,a,t){},cf05:function(e,a,t){e.exports=t.p+"img/logo.82b9c7a5.png"},d400:function(e,a,t){"use strict";t("c810")},d735:function(e,a,t){}});
//# sourceMappingURL=app.d5933f4f.js.map