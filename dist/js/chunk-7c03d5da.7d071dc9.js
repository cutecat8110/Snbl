(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7c03d5da"],{"1dde":function(e,t,c){var r=c("d039"),a=c("b622"),o=c("2d00"),n=a("species");e.exports=function(e){return o>=51||!r((function(){var t=[],c=t.constructor={};return c[n]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},2532:function(e,t,c){"use strict";var r=c("23e7"),a=c("5a34"),o=c("1d80"),n=c("577e"),i=c("ab13");r({target:"String",proto:!0,forced:!i("includes")},{includes:function(e){return!!~n(o(this)).indexOf(n(a(e)),arguments.length>1?arguments[1]:void 0)}})},3817:function(e,t,c){"use strict";c("61fd")},"44e7":function(e,t,c){var r=c("861d"),a=c("c6b6"),o=c("b622"),n=o("match");e.exports=function(e){var t;return r(e)&&(void 0!==(t=e[n])?!!t:"RegExp"==a(e))}},"466d":function(e,t,c){"use strict";var r=c("d784"),a=c("825a"),o=c("50c4"),n=c("577e"),i=c("1d80"),s=c("8aa5"),l=c("14c3");r("match",(function(e,t,c){return[function(t){var c=i(this),r=void 0==t?void 0:t[e];return void 0!==r?r.call(t,c):new RegExp(t)[e](n(c))},function(e){var r=a(this),i=n(e),d=c(t,r,i);if(d.done)return d.value;if(!r.global)return l(r,i);var u=r.unicode;r.lastIndex=0;var p,b=[],f=0;while(null!==(p=l(r,i))){var m=n(p[0]);b[f]=m,""===m&&(r.lastIndex=s(i,o(r.lastIndex),u)),f++}return 0===f?null:b}]}))},"4a52":function(e,t,c){},"4de4":function(e,t,c){"use strict";var r=c("23e7"),a=c("b727").filter,o=c("1dde"),n=o("filter");r({target:"Array",proto:!0,forced:!n},{filter:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}})},"4fae":function(e,t,c){},"5a34":function(e,t,c){var r=c("44e7");e.exports=function(e){if(r(e))throw TypeError("The method doesn't accept regular expressions");return e}},"61fd":function(e,t,c){},6929:function(e,t,c){"use strict";c("4a52")},"73cb":function(e,t,c){"use strict";c("766a")},"766a":function(e,t,c){},"80d2":function(e,t,c){"use strict";c("4fae")},8418:function(e,t,c){"use strict";var r=c("a04b"),a=c("9bf2"),o=c("5c6c");e.exports=function(e,t,c){var n=r(t);n in e?a.f(e,n,o(0,c)):e[n]=c}},9176:function(e,t,c){"use strict";c("b48a")},"99af":function(e,t,c){"use strict";var r=c("23e7"),a=c("d039"),o=c("e8b5"),n=c("861d"),i=c("7b0b"),s=c("50c4"),l=c("8418"),d=c("65f0"),u=c("1dde"),p=c("b622"),b=c("2d00"),f=p("isConcatSpreadable"),m=9007199254740991,v="Maximum allowed index exceeded",g=b>=51||!a((function(){var e=[];return e[f]=!1,e.concat()[0]!==e})),O=u("concat"),j=function(e){if(!n(e))return!1;var t=e[f];return void 0!==t?!!t:o(e)},h=!g||!O;r({target:"Array",proto:!0,forced:h},{concat:function(e){var t,c,r,a,o,n=i(this),u=d(n,0),p=0;for(t=-1,r=arguments.length;t<r;t++)if(o=-1===t?n:arguments[t],j(o)){if(a=s(o.length),p+a>m)throw TypeError(v);for(c=0;c<a;c++,p++)c in o&&l(u,p,o[c])}else{if(p>=m)throw TypeError(v);l(u,p++,o)}return u.length=p,u}})},ab13:function(e,t,c){var r=c("b622"),a=r("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(c){try{return t[a]=!1,"/./"[e](t)}catch(r){}}return!1}},b35a:function(e,t,c){"use strict";var r=c("7a23");Object(r["pushScopeId"])("data-v-318fc894");var a={class:"aside-navbar-link"},o=Object(r["createTextVNode"])(" ALL ITEMS ");function n(e,t,c,n,i,s){var l=Object(r["resolveComponent"])("router-link");return Object(r["openBlock"])(),Object(r["createElementBlock"])("nav",null,[Object(r["createElementVNode"])("div",a,[Object(r["createVNode"])(l,{to:"/products"},{default:Object(r["withCtx"])((function(){return[o]})),_:1})]),(Object(r["openBlock"])(!0),Object(r["createElementBlock"])(r["Fragment"],null,Object(r["renderList"])(i.category,(function(e,t){return Object(r["openBlock"])(),Object(r["createElementBlock"])("div",{key:t,class:"aside-navbar-link"},[Object(r["createVNode"])(l,{to:"/products/"+e},{default:Object(r["withCtx"])((function(){return[Object(r["createTextVNode"])(Object(r["toDisplayString"])(e),1)]})),_:2},1032,["to"])])})),128))])}Object(r["popScopeId"])();var i={data:function(){return{category:["NEW 新品","上衣","裙裝","褲裝","配飾","套裝專區"]}}};c("6929");i.render=n,i.__scopeId="data-v-318fc894";t["a"]=i},b48a:function(e,t,c){},caad:function(e,t,c){"use strict";var r=c("23e7"),a=c("4d64").includes,o=c("44d2");r({target:"Array",proto:!0},{includes:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}}),o("includes")},e42f:function(e,t,c){"use strict";var r=c("7a23");Object(r["pushScopeId"])("data-v-25746d43");var a=Object(r["createTextVNode"])(" HOME "),o=Object(r["createElementVNode"])("i",{class:"material-icons md-18 md-dark"},"chevron_right",-1),n=Object(r["createTextVNode"])(" 所有商品 "),i={key:1,class:"sub-navbar-link cursor"},s=Object(r["createElementVNode"])("i",{class:"material-icons md-18 md-dark"},"chevron_right",-1),l={class:"sub-navbar-link cursor"},d=Object(r["createElementVNode"])("i",{class:"material-icons md-18 md-dark"},"chevron_right",-1);function u(e,t,c,u,p,b){var f=Object(r["resolveComponent"])("router-link");return Object(r["openBlock"])(),Object(r["createElementBlock"])("nav",null,[Object(r["createVNode"])(f,{to:"/",class:"sub-navbar-link"},{default:Object(r["withCtx"])((function(){return[a]})),_:1}),o,c.product||c.selectCategory?(Object(r["openBlock"])(),Object(r["createBlock"])(f,{key:0,to:"/products",class:"sub-navbar-link"},{default:Object(r["withCtx"])((function(){return[n]})),_:1})):(Object(r["openBlock"])(),Object(r["createElementBlock"])("div",i,"所有商品")),c.selectCategory?(Object(r["openBlock"])(),Object(r["createElementBlock"])(r["Fragment"],{key:2},[s,Object(r["createElementVNode"])("div",l,Object(r["toDisplayString"])(c.selectCategory),1)],64)):c.product?(Object(r["openBlock"])(),Object(r["createElementBlock"])(r["Fragment"],{key:3},[d,Object(r["createVNode"])(f,{to:"/products/"+c.product.category,class:"sub-navbar-link"},{default:Object(r["withCtx"])((function(){return[Object(r["createTextVNode"])(Object(r["toDisplayString"])(c.product.category),1)]})),_:1},8,["to"])],64)):Object(r["createCommentVNode"])("",!0)])}Object(r["popScopeId"])();var p={props:["product","selectCategory"]};c("9176");p.render=u,p.__scopeId="data-v-25746d43";t["a"]=p},ed84:function(e,t,c){"use strict";c.r(t);var r=c("7a23");Object(r["pushScopeId"])("data-v-eaaa6b94");var a={class:"container py-4"},o={class:"aside-navbar"},n={class:"sub-navbar"},i={class:"product-list"};function s(e,t,c,s,l,d){var u=Object(r["resolveComponent"])("AsideNavbar"),p=Object(r["resolveComponent"])("SubNavbar"),b=Object(r["resolveComponent"])("ProductCard"),f=Object(r["resolveComponent"])("Pagination");return Object(r["openBlock"])(),Object(r["createElementBlock"])("div",a,[Object(r["createElementVNode"])("div",o,[Object(r["createVNode"])(u)]),Object(r["createElementVNode"])("main",null,[Object(r["createElementVNode"])("div",n,[Object(r["createVNode"])(p,{selectCategory:l.selectCategory},null,8,["selectCategory"])]),Object(r["createElementVNode"])("div",i,[Object(r["createVNode"])(b,{filterproducts:d.filterproducts,products:l.products},null,8,["filterproducts","products"])]),l.selectCategory?Object(r["createCommentVNode"])("",!0):(Object(r["openBlock"])(),Object(r["createBlock"])(f,{key:0,pages:l.pagination,onEmitPage:d.getData},null,8,["pages","onEmitPage"]))])])}Object(r["popScopeId"])();c("99af"),c("4de4"),c("ac1f"),c("466d");var l=c("b35a"),d=c("e42f");Object(r["pushScopeId"])("data-v-6c8fcca2");var u=Object(r["createElementVNode"])("i",{class:"material-icons md-18 md-dark"},"chevron_left",-1),p=[u],b={key:0,class:"page-btn cursor active"},f=["onClick"],m=Object(r["createElementVNode"])("i",{class:"material-icons md-18 md-dark"},"chevron_right",-1),v=[m];function g(e,t,c,a,o,n){return Object(r["openBlock"])(),Object(r["createElementBlock"])("nav",null,[Object(r["createElementVNode"])("a",{href:"#",class:Object(r["normalizeClass"])(["page-btn raquo",{disabled:1===c.pages.current_page}]),onClick:t[0]||(t[0]=Object(r["withModifiers"])((function(e){1!==c.pages.current_page&&n.emitPage(c.pages.current_page-1)}),["prevent"]))},p,2),(Object(r["openBlock"])(!0),Object(r["createElementBlock"])(r["Fragment"],null,Object(r["renderList"])(c.pages.total_pages,(function(e,t){return Object(r["openBlock"])(),Object(r["createElementBlock"])(r["Fragment"],{key:t},[e===c.pages.current_page?(Object(r["openBlock"])(),Object(r["createElementBlock"])("div",b,Object(r["toDisplayString"])(e),1)):(Object(r["openBlock"])(),Object(r["createElementBlock"])("a",{key:1,href:"#",class:"page-btn",onClick:Object(r["withModifiers"])((function(t){return n.emitPage(e)}),["prevent"])},Object(r["toDisplayString"])(e),9,f))],64)})),128)),Object(r["createElementVNode"])("a",{href:"#",class:Object(r["normalizeClass"])(["page-btn raquo",{disabled:c.pages.current_page===c.pages.total_pages}]),onClick:t[1]||(t[1]=Object(r["withModifiers"])((function(e){c.pages.current_page!==c.pages.total_pages&&n.emitPage(c.pages.current_page+1)}),["prevent"]))},v,2)])}Object(r["popScopeId"])();var O={props:["pages"],methods:{emitPage:function(e){this.$emit("emit-page",e)}}};c("80d2");O.render=g,O.__scopeId="data-v-6c8fcca2";var j=O;c("caad"),c("2532");Object(r["pushScopeId"])("data-v-49c64445");var h={class:"img-wrapper"},k=["src"],y={class:"product-card-body"},N={class:"unselect card-text"},E={class:"title pointer"},C={class:"price"},V={class:"me-2"},B={key:0,class:"origin-price"},_=["onClick"],x={class:"material-icons"};function S(e,t,c,a,o,n){var i=Object(r["resolveComponent"])("router-link");return Object(r["openBlock"])(!0),Object(r["createElementBlock"])(r["Fragment"],null,Object(r["renderList"])(n.productcard,(function(t){return Object(r["openBlock"])(),Object(r["createElementBlock"])("div",{class:"product-card",key:t.id},[Object(r["createElementVNode"])("div",h,[Object(r["createVNode"])(i,{to:{path:"/product/".concat(t.id)}},{default:Object(r["withCtx"])((function(){return[Object(r["createElementVNode"])("img",{src:t.imageUrl,class:"img-fluid pointer",alt:"..."},null,8,k)]})),_:2},1032,["to"])]),Object(r["createElementVNode"])("div",y,[Object(r["createElementVNode"])("div",N,[Object(r["createElementVNode"])("h4",E,[Object(r["createVNode"])(i,{to:{path:"/product/".concat(t.id)},class:"text-reset"},{default:Object(r["withCtx"])((function(){return[Object(r["createTextVNode"])(Object(r["toDisplayString"])(t.title),1)]})),_:2},1032,["to"])]),Object(r["createElementVNode"])("div",C,[Object(r["createElementVNode"])("span",V,"NT$ "+Object(r["toDisplayString"])(e.$filters.currency(t.pric)),1),t.price!=t.origin_price?(Object(r["openBlock"])(),Object(r["createElementBlock"])("span",B," NT$ "+Object(r["toDisplayString"])(e.$filters.currency(t.origin_price)),1)):Object(r["createCommentVNode"])("",!0)])]),Object(r["createElementVNode"])("a",{class:Object(r["normalizeClass"])(["pointer",{active:o.myFavorite.includes(t.id)}]),onClick:Object(r["withModifiers"])((function(e){return n.emitUpDateMyFavorite(t.id)}),["prevent"])},[Object(r["createElementVNode"])("i",x,Object(r["toDisplayString"])(o.myFavorite.includes(t.id)?"bookmark":"bookmark_border"),1)],10,_)])])})),128)}Object(r["popScopeId"])();var w={save:function(e){var t=JSON.stringify(e);localStorage.setItem("Snblfavorite",t)},get:function(){return JSON.parse(localStorage.getItem("Snblfavorite"))}},I={props:["filterproducts","products"],inject:["emitter"],data:function(){return{myFavorite:w.get()||[]}},computed:{productcard:function(){return this.$route.params.id?this.filterproducts:this.products}},methods:{emitUpDateMyFavorite:function(e){this.emitter.emit("emitUpDateMyFavorite",e)}},created:function(){var e=this;this.emitter.on("getMyFavorite",(function(){e.myFavorite=w.get()}))}};c("3817");I.render=S,I.__scopeId="data-v-49c64445";var D=I,F={inject:["emitter"],components:{AsideNavbar:l["a"],SubNavbar:d["a"],Pagination:j,ProductCard:D},data:function(){return{products:[],productsAll:[],pagination:[],currentPage:1,selectCategory:""}},methods:{getData:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.emitter.emit("isLoading",!0),this.currentPage=t;var c="".concat("https://vue3-course-api.hexschool.io/","api/").concat("haohao","/products?page=").concat(t);this.$http.get(c).then((function(t){e.products=t.data.products,e.pagination=t.data.pagination,window.scrollTo({top:0}),e.emitter.emit("isLoading",!1)}))},getAll:function(){var e=this;this.emitter.emit("isLoading",!0);var t="".concat("https://vue3-course-api.hexschool.io/","api/").concat("haohao","/products/all");this.$http.get(t).then((function(t){e.productsAll=t.data.products,e.emitter.emit("isLoading",!1)}))}},computed:{filterproducts:function(){var e=this;return this.productsAll.filter((function(t){return t.category.match(e.selectCategory)}))}},watch:{$route:function(){this.$route.params.id?this.productsAll.length||this.getAll():this.$route.params.id||this.products.length||this.getData();var e=this.$route.params.id;this.selectCategory=e}},created:function(){var e=this.$route.params.id;this.selectCategory=e,this.$route.params.id?this.getAll():this.getData()}};c("73cb");F.render=s,F.__scopeId="data-v-eaaa6b94";t["default"]=F}}]);
//# sourceMappingURL=chunk-7c03d5da.7d071dc9.js.map