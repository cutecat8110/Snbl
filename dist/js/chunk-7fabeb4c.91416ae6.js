(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7fabeb4c"],{1551:function(e,t,c){},"23c2":function(e,t,c){},"4a52":function(e,t,c){},"658f":function(e,t,c){"use strict";c.r(t);var o=c("7a23");Object(o["pushScopeId"])("data-v-3e9da8ff");var r={class:"container py-4"},n={class:"aside-navbar"},l={class:"product"},a={class:"product-title"},i=["src"],d={ref:"modelImagesUrl"},s=["src"],u={ref:"detalImagesUrl"},b=["src"],m=["src"],p=["src"],O=["src"],j=["src"],f=["src"],v={class:"product-form"};function h(e,t,c,h,k,E){var N=Object(o["resolveComponent"])("AsideNavbar"),V=Object(o["resolveComponent"])("SubNavbar"),y=Object(o["resolveComponent"])("ProductSwiper"),g=Object(o["resolveComponent"])("ProductForm");return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",r,[Object(o["createElementVNode"])("div",n,[Object(o["createVNode"])(N)]),Object(o["createElementVNode"])("main",null,[Object(o["createElementVNode"])("div",l,[Object(o["createElementVNode"])("div",a,[Object(o["createElementVNode"])("h1",null,Object(o["toDisplayString"])(k.product.title),1),Object(o["createVNode"])(V,{product:k.product},null,8,["product"])]),Object(o["createVNode"])(y,{tempProduct:k.product},null,8,["tempProduct"]),Object(o["createElementVNode"])("img",{class:"img-fluid",src:k.product.modelImageUrl},null,8,i),Object(o["createElementVNode"])("div",d,null,512),(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(k.product.modelImagesUrl,(function(e,t){return Object(o["openBlock"])(),Object(o["createElementBlock"])("img",{class:"img-fluid",key:t,src:e},null,8,s)})),128)),Object(o["createElementVNode"])("div",u,null,512),(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(k.product.detalImagesUrl,(function(e,t){return Object(o["openBlock"])(),Object(o["createElementBlock"])("img",{class:"img-fluid",key:t,src:e},null,8,b)})),128)),Object(o["createElementVNode"])("img",{class:"img-fluid",src:k.product.tabricImageUrl},null,8,m),Object(o["createElementVNode"])("img",{ref:"infolImageUrl",class:"img-fluid",src:k.product.infolImageUrl},null,8,p),Object(o["createElementVNode"])("img",{class:"img-fluid",src:k.product.sizeImageUrl},null,8,O),Object(o["createElementVNode"])("img",{class:"img-fluid",src:k.product.modelInfoImageUrl},null,8,j),Object(o["createElementVNode"])("img",{class:"img-fluid",src:k.product.tryOnImageUrl},null,8,f)]),Object(o["createElementVNode"])("div",v,[Object(o["createVNode"])(g,{product:k.product,onSubNav:E.subNav},null,8,["product","onSubNav"])])])])}Object(o["popScopeId"])();c("99af");var k=c("b35a");c("b0c0");Object(o["pushScopeId"])("data-v-463b7886");var E={class:"web"},N={class:"product-title"},V=Object(o["createElementVNode"])("i",{class:"material-icons pointer"},"bookmark_border",-1),y={class:"price"},g={class:"me-2"},w={key:0,class:"origin-price"},B={key:0,class:"new-sale"},S={key:1,class:"new-sale"},C=Object(o["createElementVNode"])("div",{class:"vertical"},null,-1),x=Object(o["createElementVNode"])("div",{class:"vertical"},null,-1),q={class:"color-container"},I={class:"form-label"},U={class:"color"},M=["for"],_=["id","value"],z={class:"h-36 w-36 rounded selected-box"},T={class:"size-container"},D={class:"form-label"},F={class:"size"},P=["for"],L=["id","value"],$={class:"h-36 w-36 selected-box rounded"},Q={class:"qty input-group bg-light border flex-nowrap rounded"},A=["disabled"],R=Object(o["createElementVNode"])("i",{class:"material-icons md-dark"},"remove",-1),J=[R],G=["min","max"],W=["disabled"],Z=Object(o["createElementVNode"])("i",{class:"material-icons md-dark"},"add",-1),H=[Z],Y={key:2,class:"btn cursor prompt d-block"},K={key:3,class:"btn cursor prompt d-block"},X={class:"share-container"},ee=Object(o["createElementVNode"])("div",{class:"share-title"}," Show Us Your Style ",-1),te=Object(o["createElementVNode"])("div",{class:"share-text"}," 標籤 #snbl 在你的 IG 貼文上，和我們分享你的森女穿搭吧！ ",-1),ce={class:"share-link-container"},oe={class:"share-link"},re=Object(o["createElementVNode"])("i",{class:"fab fa-facebook-square"},null,-1),ne=[re],le={class:"share-link"},ae=Object(o["createElementVNode"])("i",{class:"fab fa-line"},null,-1),ie=[ae],de={class:"share-link"},se=Object(o["createElementVNode"])("i",{class:"fab fa-twitter"},null,-1),ue=[se],be={class:"share-link"},me=Object(o["createElementVNode"])("i",{class:"fab fa-weibo"},null,-1),pe=[me];function Oe(e,t,c,r,n,l){var a=Object(o["resolveComponent"])("ProductFormModal");return Object(o["openBlock"])(),Object(o["createElementBlock"])(o["Fragment"],null,[Object(o["createElementVNode"])("section",null,[Object(o["createElementVNode"])("div",E,[Object(o["createElementVNode"])("div",N,[Object(o["createElementVNode"])("h1",null,Object(o["toDisplayString"])(c.product.title),1),V]),Object(o["createElementVNode"])("div",y,[Object(o["createElementVNode"])("span",g,"NT$ "+Object(o["toDisplayString"])(c.product.price),1),c.product.price!=c.product.origin_price?(Object(o["openBlock"])(),Object(o["createElementBlock"])("span",w," NT$ "+Object(o["toDisplayString"])(c.product.origin_price),1)):Object(o["createCommentVNode"])("",!0)]),c.product.origin_price==c.product.price?(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",B," NEW ")):(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",S,"SALE")),Object(o["createElementVNode"])("nav",null,[Object(o["createElementVNode"])("a",{href:"#",class:"product-form-navbar-link",onClick:t[0]||(t[0]=Object(o["withModifiers"])((function(t){return e.$emit("subNav","modelImagesUrl")}),["prevent"]))},"模特展示"),C,Object(o["createElementVNode"])("a",{href:"#",class:"product-form-navbar-link",onClick:t[1]||(t[1]=Object(o["withModifiers"])((function(t){return e.$emit("subNav","detalImagesUrl")}),["prevent"]))},"細節展示"),x,Object(o["createElementVNode"])("a",{href:"#",class:"product-form-navbar-link",onClick:t[2]||(t[2]=Object(o["withModifiers"])((function(t){return e.$emit("subNav","infolImageUrl")}),["prevent"]))},"商品信息")]),Object(o["createElementVNode"])("div",q,[Object(o["createElementVNode"])("div",I,"COLOR :  "+Object(o["toDisplayString"])(n.selected.color),1),Object(o["createElementVNode"])("div",U,[(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(c.product.colors,(function(e,c){return Object(o["openBlock"])(),Object(o["createElementBlock"])("label",{key:c,for:"colors"+c,class:Object(o["normalizeClass"])(["pointer",n.selected.color===e.name?"active":""])},[Object(o["withDirectives"])(Object(o["createElementVNode"])("input",{id:"colors"+c,class:"d-none",type:"radio",value:e.name,"onUpdate:modelValue":t[3]||(t[3]=function(e){return n.selected.color=e})},null,8,_),[[o["vModelRadio"],n.selected.color]]),Object(o["createElementVNode"])("div",z,[Object(o["createElementVNode"])("div",{class:"h-28 w-28 rounded",style:Object(o["normalizeStyle"])({backgroundColor:e.colorChart})},null,4)])],10,M)})),128))])]),Object(o["createElementVNode"])("div",T,[Object(o["createElementVNode"])("div",D,"SIZE :  "+Object(o["toDisplayString"])(n.selected.size.name),1),Object(o["createElementVNode"])("div",F,[(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(c.product.clothSize,(function(e,c){return Object(o["openBlock"])(),Object(o["createElementBlock"])("label",{key:c,for:"clothSize"+c,class:Object(o["normalizeClass"])(["pointer",n.selected.size===e?"active":""])},[Object(o["withDirectives"])(Object(o["createElementVNode"])("input",{id:"clothSize"+c,class:"d-none",type:"radio",value:e,"onUpdate:modelValue":t[4]||(t[4]=function(e){return n.selected.size=e})},null,8,L),[[o["vModelRadio"],n.selected.size]]),Object(o["createElementVNode"])("div",$,Object(o["toDisplayString"])(e),1)],10,P)})),128))])]),Object(o["createElementVNode"])("div",Q,[Object(o["createElementVNode"])("div",null,[Object(o["createElementVNode"])("button",{class:"qty-btn btn",type:"button",onMousedown:t[5]||(t[5]=function(e){return n.qty--}),disabled:n.qty<=1},J,40,A)]),Object(o["withDirectives"])(Object(o["createElementVNode"])("input",{type:"text",class:"form-control border-0 text-center bg-light shadow-none",min:n.min,max:n.max,onInput:t[6]||(t[6]=function(){return l.handleInput&&l.handleInput.apply(l,arguments)}),onBlur:t[7]||(t[7]=function(t){return l.makeUp(e.index)}),"onUpdate:modelValue":t[8]||(t[8]=function(e){return n.qty=e})},null,40,G),[[o["vModelText"],n.qty,void 0,{number:!0}]]),Object(o["createElementVNode"])("div",null,[Object(o["createElementVNode"])("button",{class:"qty-btn btn",type:"button",onMousedown:t[9]||(t[9]=function(e){return n.qty++}),disabled:n.qty>=99},H,40,W)])]),n.selected.color?n.selected.size?(Object(o["openBlock"])(),Object(o["createElementBlock"])("a",{key:4,href:"#",class:"btn add-cart d-block",onClick:t[10]||(t[10]=Object(o["withModifiers"])((function(){return l.addToCart&&l.addToCart.apply(l,arguments)}),["prevent"]))},"加入購物車 ")):(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",K," 請選擇尺寸 ")):(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",Y," 請選擇顏色 ")),Object(o["createElementVNode"])("div",X,[ee,te,Object(o["createElementVNode"])("div",ce,[Object(o["createElementVNode"])("div",oe,[Object(o["createElementVNode"])("a",{href:"#",onClick:t[11]||(t[11]=Object(o["withModifiers"])((function(){}),["prevent"])),class:"facebook"},ne)]),Object(o["createElementVNode"])("div",le,[Object(o["createElementVNode"])("a",{href:"#",onClick:t[12]||(t[12]=Object(o["withModifiers"])((function(){}),["prevent"])),class:"line"},ie)]),Object(o["createElementVNode"])("div",de,[Object(o["createElementVNode"])("a",{href:"#",onClick:t[13]||(t[13]=Object(o["withModifiers"])((function(){}),["prevent"])),class:"twitter"},ue)]),Object(o["createElementVNode"])("div",be,[Object(o["createElementVNode"])("a",{href:"#",onClick:t[14]||(t[14]=Object(o["withModifiers"])((function(){}),["prevent"])),class:"weibo"},pe)])])])]),Object(o["createElementVNode"])("a",{href:"#",class:"btn mobile rounded-0",onClick:t[15]||(t[15]=Object(o["withModifiers"])((function(){return l.openModal&&l.openModal.apply(l,arguments)}),["prevent"]))},"加入購物車 ")]),Object(o["createVNode"])(a,{ref:"ProductFormModal",product:c.product,tempSelected:n.selected,tempQty:n.qty,onAddToCart:l.addToCart,onGetQty:l.getQty},null,8,["product","tempSelected","tempQty","onAddToCart","onGetQty"])],64)}Object(o["popScopeId"])();c("ac1f"),c("5319");Object(o["pushScopeId"])("data-v-75563fb8");var je={id:"ProductFormModal",ref:"modal",class:"modal fade",tabindex:"-1","aria-labelledby":"ProductFormModalLabel","aria-hidden":"true"},fe={class:"modal-dialog fixed-bottom"},ve={class:"modal-content border-0 rounded-0"},he=Object(o["createElementVNode"])("div",{class:"modal-header border-0"},[Object(o["createElementVNode"])("button",{type:"button",class:"btn-close btn-close-white","data-bs-dismiss":"modal","aria-label":"Close"})],-1),ke={class:"modal-body "},Ee={class:"container"},Ne={class:"product"},Ve={class:"product-text"},ye={class:"price"},ge={class:"me-2"},we={key:0,class:"origin-price"},Be={class:"color-container"},Se={class:"form-label"},Ce={class:"color"},xe=["for"],qe=["id","value"],Ie={class:"h-36 w-36 rounded selected-box"},Ue={class:"size-container"},Me={class:"form-label"},_e={class:"size"},ze=["for"],Te=["id","value"],De={class:"h-36 w-36 selected-box rounded"},Fe=["src"],Pe={class:"product-oder"},Le={class:"qty input-group bg-light border flex-nowrap rounded"},$e=["disabled"],Qe=Object(o["createElementVNode"])("i",{class:"material-icons md-dark"},"remove",-1),Ae=[Qe],Re=["min","max"],Je=["disabled"],Ge=Object(o["createElementVNode"])("i",{class:"material-icons md-dark"},"add",-1),We=[Ge],Ze={key:0,class:"btn cursor prompt d-block"},He={key:1,class:"btn cursor prompt d-block"};function Ye(e,t,c,r,n,l){return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",je,[Object(o["createElementVNode"])("div",fe,[Object(o["createElementVNode"])("div",ve,[he,Object(o["createElementVNode"])("div",ke,[Object(o["createElementVNode"])("div",Ee,[Object(o["createElementVNode"])("div",Ne,[Object(o["createElementVNode"])("div",Ve,[Object(o["createElementVNode"])("h1",null,Object(o["toDisplayString"])(c.product.title),1),Object(o["createElementVNode"])("div",ye,[Object(o["createElementVNode"])("span",ge,"NT$ "+Object(o["toDisplayString"])(c.product.price),1),c.product.price!=c.product.origin_price?(Object(o["openBlock"])(),Object(o["createElementBlock"])("span",we," NT$ "+Object(o["toDisplayString"])(c.product.origin_price),1)):Object(o["createCommentVNode"])("",!0)]),Object(o["createElementVNode"])("div",Be,[Object(o["createElementVNode"])("div",Se,"COLOR :  "+Object(o["toDisplayString"])(n.selected.color),1),Object(o["createElementVNode"])("div",Ce,[(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(c.product.colors,(function(e,c){return Object(o["openBlock"])(),Object(o["createElementBlock"])("label",{key:c,for:"colors"+c,class:Object(o["normalizeClass"])(["pointer",n.selected.color===e.name?"active":""])},[Object(o["withDirectives"])(Object(o["createElementVNode"])("input",{id:"colors"+c,class:"d-none",type:"radio",value:e.name,"onUpdate:modelValue":t[0]||(t[0]=function(e){return n.selected.color=e})},null,8,qe),[[o["vModelRadio"],n.selected.color]]),Object(o["createElementVNode"])("div",Ie,[Object(o["createElementVNode"])("div",{class:"h-28 w-28 rounded",style:Object(o["normalizeStyle"])({backgroundColor:e.colorChart})},null,4)])],10,xe)})),128))])]),Object(o["createElementVNode"])("div",Ue,[Object(o["createElementVNode"])("div",Me,"SIZE :  "+Object(o["toDisplayString"])(n.selected.size.name),1),Object(o["createElementVNode"])("div",_e,[(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(c.product.clothSize,(function(e,c){return Object(o["openBlock"])(),Object(o["createElementBlock"])("label",{key:c,for:"clothSize"+c,class:Object(o["normalizeClass"])(["pointer",n.selected.size===e?"active":""])},[Object(o["withDirectives"])(Object(o["createElementVNode"])("input",{id:"clothSize"+c,class:"d-none",type:"radio",value:e,"onUpdate:modelValue":t[1]||(t[1]=function(e){return n.selected.size=e})},null,8,Te),[[o["vModelRadio"],n.selected.size]]),Object(o["createElementVNode"])("div",De,Object(o["toDisplayString"])(e),1)],10,ze)})),128))])])]),Object(o["createElementVNode"])("img",{class:"img-fluid img-thumbnail rounded",src:c.product.imageUrl},null,8,Fe)]),Object(o["createElementVNode"])("div",Pe,[Object(o["createElementVNode"])("div",Le,[Object(o["createElementVNode"])("div",null,[Object(o["createElementVNode"])("button",{class:"qty-btn btn",type:"button",onMousedown:t[2]||(t[2]=function(e){return n.qty--}),disabled:1===n.qty},Ae,40,$e)]),Object(o["withDirectives"])(Object(o["createElementVNode"])("input",{type:"text",class:"form-control border-0 text-center bg-light shadow-none",min:n.min,max:n.max,onInput:t[3]||(t[3]=function(){return l.handleInput&&l.handleInput.apply(l,arguments)}),onBlur:t[4]||(t[4]=function(){return l.makeUp&&l.makeUp.apply(l,arguments)}),"onUpdate:modelValue":t[5]||(t[5]=function(e){return n.qty=e})},null,40,Re),[[o["vModelText"],n.qty,void 0,{number:!0}]]),Object(o["createElementVNode"])("div",null,[Object(o["createElementVNode"])("button",{class:"qty-btn btn",type:"button",onMousedown:t[6]||(t[6]=function(e){return n.qty++}),disabled:99===n.qty},We,40,Je)])]),n.selected.color?n.selected.size?(Object(o["openBlock"])(),Object(o["createElementBlock"])("a",{key:2,href:"#",class:"btn add-cart d-block",onClick:t[7]||(t[7]=Object(o["withModifiers"])((function(t){return e.$emit("addToCart",!0)}),["prevent"]))},"加入購物車 ")):(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",He," 請選擇尺寸 ")):(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",Ze," 請選擇顏色 "))])])])])])],512)}Object(o["popScopeId"])();var Ke=c("e0ae"),Xe={mixins:[Ke["a"]],props:["product","tempSelected","tempQty"],data:function(){return{selected:{color:"",size:""},qty:1,min:0,max:99}},watch:{tempQty:function(){this.qty=this.tempQty},qty:function(){this.qty>this.max?this.qty=this.max:this.qty<this.min&&(this.qty=this.min),this.$emit("getQty",this.qty)}},methods:{handleInput:function(e){this.qty=e.target.value.replace(/[^\d]/g,"")},makeUp:function(){""===this.qty&&(this.qty=1)}},mounted:function(){this.selected=this.tempSelected,this.qty=this.tempQty}};c("8385");Xe.render=Ye,Xe.__scopeId="data-v-75563fb8";var et=Xe,tt={components:{ProductFormModal:et},inject:["emitter"],props:["product"],emits:["subNav"],data:function(){return{selected:{color:"",size:""},qty:1,min:0,max:99,modal:!1}},watch:{qty:function(){this.qty>this.max?this.qty=this.max:this.qty<this.min&&(this.qty=this.min)}},methods:{handleInput:function(e){this.qty=e.target.value.replace(/[^\d]/g,"")},makeUp:function(){""===this.qty&&(this.qty=1)},getQty:function(e){this.qty=e},openModal:function(){this.$refs.ProductFormModal.openModal()},addToCart:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.modal=e,this.emitter.emit("emitToCart",{id:this.product.id,selected:this.selected,qty:this.qty})}}};c("dbd2");tt.render=Oe,tt.__scopeId="data-v-463b7886";var ct=tt,ot=["src"],rt=["src"],nt=["src"],lt=["src"];function at(e,t,c,r,n,l){var a=Object(o["resolveComponent"])("swiper-slide"),i=Object(o["resolveComponent"])("swiper");return n.product.imagesUrl?(Object(o["openBlock"])(),Object(o["createElementBlock"])(o["Fragment"],{key:0},[Object(o["createVNode"])(i,{navigation:!0,loop:!0,observer:!0,observeSlideChildren:!0,observeParents:!0,thumbs:{swiper:n.thumbsSwiper},class:"mySwiperTop",onSlideChange:r.onSlideChange},{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(a,null,{default:Object(o["withCtx"])((function(){return[Object(o["createElementVNode"])("img",{ref:"productImagesUrl0",class:"img-fluid",src:n.product.imageUrl},null,8,ot)]})),_:1}),(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(n.product.imagesUrl,(function(e){return Object(o["openBlock"])(),Object(o["createBlock"])(a,{key:e},{default:Object(o["withCtx"])((function(){return[Object(o["createElementVNode"])("img",{ref:"productImagesUrl"+e,class:"img-fluid",src:e},null,8,rt)]})),_:2},1024)})),128))]})),_:1},8,["thumbs","onSlideChange"]),Object(o["createVNode"])(i,{onSwiper:l.setThumbsSwiper,allowTouchMove:!1,spaceBetween:8,slidesPerView:4,observer:!0,observeSlideChildren:!0,observeParents:!0,class:"mySwiperBottom"},{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(a,null,{default:Object(o["withCtx"])((function(){return[Object(o["createElementVNode"])("img",{class:"img-fluid",src:n.product.imageUrl},null,8,nt)]})),_:1}),(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(n.product.imagesUrl,(function(e){return Object(o["openBlock"])(),Object(o["createBlock"])(a,{key:e},{default:Object(o["withCtx"])((function(){return[Object(o["createElementVNode"])("img",{class:"img-fluid",src:e},null,8,lt)]})),_:2},1024)})),128))]})),_:1},8,["onSwiper"])],64)):Object(o["createCommentVNode"])("",!0)}var it=c("90ea"),dt=c("a16a"),st=(c("41fa"),c("e25d"),c("6d3b")),ut=c("8343"),bt=c("cc84");st["a"].use([ut["a"],bt["a"]]);var mt={components:{Swiper:it["a"],SwiperSlide:dt["a"]},props:["tempProduct"],data:function(){return{thumbsSwiper:null,product:[]}},methods:{setThumbsSwiper:function(e){this.thumbsSwiper=e}},watch:{tempProduct:function(){this.product=JSON.parse(JSON.stringify(this.tempProduct))}},setup:function(){var e=function(e){e.update()};return{onSlideChange:e}}};c("fbbc");mt.render=at;var pt=mt,Ot=c("e42f"),jt={inject:["emitter"],components:{AsideNavbar:k["a"],ProductForm:ct,ProductSwiper:pt,SubNavbar:Ot["a"]},data:function(){return{product:[]}},watch:{$route:function(){this.getProduct()}},methods:{getProduct:function(){var e=this;this.emitter.emit("isLoading",!0);var t=this.$route.params.id,c="".concat("https://vue3-course-api.hexschool.io/","api/").concat("haohao","/product/").concat(t);this.$http.get(c).then((function(t){e.product=t.data.product,e.emitter.emit("isLoading",!1)}))},subNav:function(e){window.scrollTo(0,this.$refs[e].offsetTop-56)}},created:function(){this.getProduct()}};c("76dc");jt.render=h,jt.__scopeId="data-v-3e9da8ff";t["default"]=jt},6929:function(e,t,c){"use strict";c("4a52")},"76dc":function(e,t,c){"use strict";c("a073")},8385:function(e,t,c){"use strict";c("23c2")},9176:function(e,t,c){"use strict";c("b48a")},a073:function(e,t,c){},b35a:function(e,t,c){"use strict";var o=c("7a23");Object(o["pushScopeId"])("data-v-318fc894");var r={class:"aside-navbar-link"},n=Object(o["createTextVNode"])(" ALL ITEMS ");function l(e,t,c,l,a,i){var d=Object(o["resolveComponent"])("router-link");return Object(o["openBlock"])(),Object(o["createElementBlock"])("nav",null,[Object(o["createElementVNode"])("div",r,[Object(o["createVNode"])(d,{to:"/products"},{default:Object(o["withCtx"])((function(){return[n]})),_:1})]),(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(a.category,(function(e,t){return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",{key:t,class:"aside-navbar-link"},[Object(o["createVNode"])(d,{to:"/products/"+e},{default:Object(o["withCtx"])((function(){return[Object(o["createTextVNode"])(Object(o["toDisplayString"])(e),1)]})),_:2},1032,["to"])])})),128))])}Object(o["popScopeId"])();var a={data:function(){return{category:["NEW 新品","上衣","裙裝","褲裝","配飾","套裝專區"]}}};c("6929");a.render=l,a.__scopeId="data-v-318fc894";t["a"]=a},b48a:function(e,t,c){},dbd2:function(e,t,c){"use strict";c("1551")},e42f:function(e,t,c){"use strict";var o=c("7a23");Object(o["pushScopeId"])("data-v-25746d43");var r=Object(o["createTextVNode"])(" HOME "),n=Object(o["createElementVNode"])("i",{class:"material-icons md-18 md-dark"},"chevron_right",-1),l=Object(o["createTextVNode"])(" 所有商品 "),a={key:1,class:"sub-navbar-link cursor"},i=Object(o["createElementVNode"])("i",{class:"material-icons md-18 md-dark"},"chevron_right",-1),d={class:"sub-navbar-link cursor"},s=Object(o["createElementVNode"])("i",{class:"material-icons md-18 md-dark"},"chevron_right",-1);function u(e,t,c,u,b,m){var p=Object(o["resolveComponent"])("router-link");return Object(o["openBlock"])(),Object(o["createElementBlock"])("nav",null,[Object(o["createVNode"])(p,{to:"/",class:"sub-navbar-link"},{default:Object(o["withCtx"])((function(){return[r]})),_:1}),n,c.product||c.selectCategory?(Object(o["openBlock"])(),Object(o["createBlock"])(p,{key:0,to:"/products",class:"sub-navbar-link"},{default:Object(o["withCtx"])((function(){return[l]})),_:1})):(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",a,"所有商品")),c.selectCategory?(Object(o["openBlock"])(),Object(o["createElementBlock"])(o["Fragment"],{key:2},[i,Object(o["createElementVNode"])("div",d,Object(o["toDisplayString"])(c.selectCategory),1)],64)):c.product?(Object(o["openBlock"])(),Object(o["createElementBlock"])(o["Fragment"],{key:3},[s,Object(o["createVNode"])(p,{to:"/products/"+c.product.category,class:"sub-navbar-link"},{default:Object(o["withCtx"])((function(){return[Object(o["createTextVNode"])(Object(o["toDisplayString"])(c.product.category),1)]})),_:1},8,["to"])],64)):Object(o["createCommentVNode"])("",!0)])}Object(o["popScopeId"])();var b={props:["product","selectCategory"]};c("9176");b.render=u,b.__scopeId="data-v-25746d43";t["a"]=b},f07f:function(e,t,c){},fbbc:function(e,t,c){"use strict";c("f07f")}}]);
//# sourceMappingURL=chunk-7fabeb4c.91416ae6.js.map