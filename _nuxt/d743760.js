(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{1636:function(t,e,n){"use strict";var o={inserted:function(t,e){var n=e.value,o=e.options||{passive:!0};window.addEventListener("resize",n,o),t._onResize={callback:n,options:o},e.modifiers&&e.modifiers.quiet||n()},unbind:function(t){if(t._onResize){var e=t._onResize,n=e.callback,o=e.options;window.removeEventListener("resize",n,o),delete t._onResize}}};e.a=o},1638:function(t,e,n){"use strict";var o=n(3);function r(t,e){var n=t.changedTouches[0];e.touchendX=n.clientX,e.touchendY=n.clientY,e.end&&e.end(Object.assign(t,e)),function(t){var e=t.touchstartX,n=t.touchendX,o=t.touchstartY,r=t.touchendY;t.offsetX=n-e,t.offsetY=r-o,Math.abs(t.offsetY)<.5*Math.abs(t.offsetX)&&(t.left&&n<e-16&&t.left(t),t.right&&n>e+16&&t.right(t)),Math.abs(t.offsetX)<.5*Math.abs(t.offsetY)&&(t.up&&r<o-16&&t.up(t),t.down&&r>o+16&&t.down(t))}(e)}function c(t){var e={touchstartX:0,touchstartY:0,touchendX:0,touchendY:0,touchmoveX:0,touchmoveY:0,offsetX:0,offsetY:0,left:t.left,right:t.right,up:t.up,down:t.down,start:t.start,move:t.move,end:t.end};return{touchstart:function(t){return function(t,e){var n=t.changedTouches[0];e.touchstartX=n.clientX,e.touchstartY=n.clientY,e.start&&e.start(Object.assign(t,e))}(t,e)},touchend:function(t){return r(t,e)},touchmove:function(t){return function(t,e){var n=t.changedTouches[0];e.touchmoveX=n.clientX,e.touchmoveY=n.clientY,e.move&&e.move(Object.assign(t,e))}(t,e)}}}var l={inserted:function(t,e,n){var r=e.value,l=r.parent?t.parentElement:t,h=r.options||{passive:!0};if(l){var v=c(e.value);l._touchHandlers=Object(l._touchHandlers),l._touchHandlers[n.context._uid]=v,Object(o.t)(v).forEach((function(t){l.addEventListener(t,v[t],h)}))}},unbind:function(t,e,n){var r=e.value.parent?t.parentElement:t;if(r&&r._touchHandlers){var c=r._touchHandlers[n.context._uid];Object(o.t)(c).forEach((function(t){r.removeEventListener(t,c[t])})),delete r._touchHandlers[n.context._uid]}}};e.a=l},1648:function(t,e,n){var content=n(1706);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(25).default)("5c313445",content,!0,{sourceMap:!1})},1649:function(t,e,n){"use strict";n(55),n(70),n(71),n(47);var o=n(19),r=n(1);e.a=r.a.extend({name:"mobile",props:{mobileBreakpoint:{type:[Number,String],default:function(){return this.$vuetify?this.$vuetify.breakpoint.mobileBreakpoint:void 0},validator:function(t){return!isNaN(Number(t))||["xs","sm","md","lg","xl"].includes(String(t))}}},computed:{isMobile:function(){var t=this.$vuetify.breakpoint,e=t.mobile,n=t.width,o=t.name;if(t.mobileBreakpoint===this.mobileBreakpoint)return e;var r=parseInt(this.mobileBreakpoint,10);return!isNaN(r)?n<r:o===this.mobileBreakpoint}},created:function(){this.$attrs.hasOwnProperty("mobile-break-point")&&Object(o.d)("mobile-break-point","mobile-breakpoint",this)}})},1650:function(t,e,n){var content=n(1710);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(25).default)("509a3607",content,!0,{sourceMap:!1})},1705:function(t,e,n){"use strict";var o=n(1648);n.n(o).a},1706:function(t,e,n){(e=n(24)(!1)).push([t.i,".navdrawersidebar[data-v-1042df48]{color:#8cc0e0;font:black}",""]),t.exports=e},1707:function(t,e,n){var content=n(1708);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(25).default)("c82bbd6a",content,!0,{sourceMap:!1})},1708:function(t,e,n){(e=n(24)(!1)).push([t.i,".theme--light.v-navigation-drawer{background-color:#fff}.theme--light.v-navigation-drawer:not(.v-navigation-drawer--floating) .v-navigation-drawer__border{background-color:rgba(0,0,0,.12)}.theme--light.v-navigation-drawer .v-divider{border-color:rgba(0,0,0,.12)}.theme--dark.v-navigation-drawer{background-color:#363636}.theme--dark.v-navigation-drawer:not(.v-navigation-drawer--floating) .v-navigation-drawer__border{background-color:hsla(0,0%,100%,.12)}.theme--dark.v-navigation-drawer .v-divider{border-color:hsla(0,0%,100%,.12)}.v-navigation-drawer{-webkit-overflow-scrolling:touch;display:flex;flex-direction:column;left:0;max-width:100%;overflow:hidden;pointer-events:auto;top:0;transition-duration:.2s;transition-timing-function:cubic-bezier(.4,0,.2,1);will-change:transform;transition-property:transform,visibility,width}.v-navigation-drawer:not([data-booted=true]){transition:none!important}.v-navigation-drawer.v-navigation-drawer--right:after{left:0;right:auto}.v-navigation-drawer .v-list:not(.v-select-list){background:inherit}.v-navigation-drawer__border{position:absolute;right:0;top:0;height:100%;width:1px}.v-navigation-drawer__content{height:100%;overflow-y:auto;overflow-x:hidden}.v-navigation-drawer__image{border-radius:inherit;height:100%;position:absolute;top:0;bottom:0;z-index:-1;contain:strict;width:100%}.v-navigation-drawer__image .v-image{border-radius:inherit}.v-navigation-drawer--bottom.v-navigation-drawer--is-mobile{max-height:50%;top:auto;bottom:0;min-width:100%}.v-navigation-drawer--right{left:auto;right:0}.v-navigation-drawer--right>.v-navigation-drawer__border{right:auto;left:0}.v-navigation-drawer--absolute{z-index:1}.v-navigation-drawer--fixed{z-index:6}.v-navigation-drawer--absolute{position:absolute}.v-navigation-drawer--clipped:not(.v-navigation-drawer--temporary):not(.v-navigation-drawer--is-mobile){z-index:4}.v-navigation-drawer--fixed{position:fixed}.v-navigation-drawer--floating:after{display:none}.v-navigation-drawer--mini-variant{overflow:hidden}.v-navigation-drawer--mini-variant .v-list-item>:first-child{margin-left:0;margin-right:0}.v-navigation-drawer--mini-variant .v-list-item>:not(:first-child){position:absolute!important;height:1px;width:1px;overflow:hidden;clip:rect(1px,1px,1px,1px);white-space:nowrap;display:inline;display:initial}.v-navigation-drawer--mini-variant .v-list-group--no-action .v-list-group__items,.v-navigation-drawer--mini-variant .v-list-group--sub-group{display:none}.v-navigation-drawer--mini-variant.v-navigation-drawer--custom-mini-variant .v-list-item{justify-content:center}.v-navigation-drawer--temporary{z-index:7}.v-navigation-drawer--mobile{z-index:6}.v-navigation-drawer--close{visibility:hidden}.v-navigation-drawer--is-mobile:not(.v-navigation-drawer--close),.v-navigation-drawer--temporary:not(.v-navigation-drawer--close){box-shadow:0 8px 10px -5px rgba(0,0,0,.2),0 16px 24px 2px rgba(0,0,0,.14),0 6px 30px 5px rgba(0,0,0,.12)}",""]),t.exports=e},1709:function(t,e,n){"use strict";var o=n(1650);n.n(o).a},1710:function(t,e,n){(e=n(24)(!1)).push([t.i,'.font-header[data-v-411b10d6]{font-size:20px;font-weight:700}.font-header[data-v-411b10d6],.font-navdrawer[data-v-411b10d6]{color:rgba(20,23,26,.8)!important;font-family:"Montserrat"}.font-navdrawer[data-v-411b10d6]{font-size:16px}',""]),t.exports=e},1750:function(t,e,n){"use strict";n.r(e);n(22),n(15),n(11),n(8),n(16),n(55),n(112);var o=n(4),r=n(2),c=n(69),l=n(1629),h=n(700),v=n(274),d=n(1673),f=n(1635);function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var w={components:{ComposeJamDialog:v.a},props:{togglemenu:{type:String,default:function(){return{}}}},data:function(){return{showComposeJamDialog:!1,items:[{icon:"mdi-home-outline",title:"Home",to:"/discover"},{icon:"mdi-magnify",title:"Explore",to:"/search"},{icon:"mdi-bell-outline",title:"Notifications",to:"/notifications"},{icon:"mdi-email-outline",title:"Messages",to:"/messages"},{icon:"mdi-bookmark-outline",title:"Bookmarks",to:"/bookmarks"}]}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(c.c)(["badgeCount"]))},y=(n(1705),n(81)),O=n(121),x=n.n(O),_=n(1625),k=n(1609),j=n(268),C=n(1615),A=n(442),M=n(269),$=n(443),P=n(222),D=n(97),B=(n(456),n(47),n(1707),n(171)),V=n(14);var z=n(46),E=n(459),R=n(1649),T=n(440),J=n(461),S=n(38),X=n(455),H=n(1636),N=n(1638),I=n(3);function L(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var Y=Object(V.a)(function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return Object(V.a)(Object(B.b)(["absolute","fixed"])).extend({name:"applicationable",props:{app:Boolean},computed:{applicationProperty:function(){return t}},watch:{app:function(t,e){e?this.removeApplication(!0):this.callUpdate()},applicationProperty:function(t,e){this.$vuetify.application.unregister(this._uid,e)}},activated:function(){this.callUpdate()},created:function(){for(var i=0,t=e.length;i<t;i++)this.$watch(e[i],this.callUpdate);this.callUpdate()},mounted:function(){this.callUpdate()},deactivated:function(){this.removeApplication()},destroyed:function(){this.removeApplication()},methods:{callUpdate:function(){this.app&&this.$vuetify.application.register(this._uid,this.applicationProperty,this.updateApplication())},removeApplication:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];(t||this.app)&&this.$vuetify.application.unregister(this._uid,this.applicationProperty)},updateApplication:function(){return 0}}})}("left",["isActive","isMobile","miniVariant","expandOnHover","permanent","right","temporary","width"]),z.a,E.a,R.a,T.a,J.a,S.a).extend({name:"v-navigation-drawer",provide:function(){return{isInNav:"nav"===this.tag}},directives:{ClickOutside:X.a,Resize:H.a,Touch:N.a},props:{bottom:Boolean,clipped:Boolean,disableResizeWatcher:Boolean,disableRouteWatcher:Boolean,expandOnHover:Boolean,floating:Boolean,height:{type:[Number,String],default:function(){return this.app?"100vh":"100%"}},miniVariant:Boolean,miniVariantWidth:{type:[Number,String],default:56},permanent:Boolean,right:Boolean,src:{type:[String,Object],default:""},stateless:Boolean,tag:{type:String,default:function(){return this.app?"nav":"aside"}},temporary:Boolean,touchless:Boolean,width:{type:[Number,String],default:256},value:null},data:function(){return{isMouseover:!1,touchArea:{left:0,right:0},stackMinZIndex:6}},computed:{applicationProperty:function(){return this.right?"right":"left"},classes:function(){return function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?L(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):L(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({"v-navigation-drawer":!0,"v-navigation-drawer--absolute":this.absolute,"v-navigation-drawer--bottom":this.bottom,"v-navigation-drawer--clipped":this.clipped,"v-navigation-drawer--close":!this.isActive,"v-navigation-drawer--fixed":!this.absolute&&(this.app||this.fixed),"v-navigation-drawer--floating":this.floating,"v-navigation-drawer--is-mobile":this.isMobile,"v-navigation-drawer--is-mouseover":this.isMouseover,"v-navigation-drawer--mini-variant":this.isMiniVariant,"v-navigation-drawer--custom-mini-variant":56!==Number(this.miniVariantWidth),"v-navigation-drawer--open":this.isActive,"v-navigation-drawer--open-on-hover":this.expandOnHover,"v-navigation-drawer--right":this.right,"v-navigation-drawer--temporary":this.temporary},this.themeClasses)},computedMaxHeight:function(){if(!this.hasApp)return null;var t=this.$vuetify.application.bottom+this.$vuetify.application.footer+this.$vuetify.application.bar;return this.clipped?t+this.$vuetify.application.top:t},computedTop:function(){if(!this.hasApp)return 0;var t=this.$vuetify.application.bar;return t+=this.clipped?this.$vuetify.application.top:0,t},computedTransform:function(){return this.isActive?0:this.isBottom||this.right?100:-100},computedWidth:function(){return this.isMiniVariant?this.miniVariantWidth:this.width},hasApp:function(){return this.app&&!this.isMobile&&!this.temporary},isBottom:function(){return this.bottom&&this.isMobile},isMiniVariant:function(){return!this.expandOnHover&&this.miniVariant||this.expandOnHover&&!this.isMouseover},isMobile:function(){return!this.stateless&&!this.permanent&&R.a.options.computed.isMobile.call(this)},reactsToClick:function(){return!this.stateless&&!this.permanent&&(this.isMobile||this.temporary)},reactsToMobile:function(){return this.app&&!this.disableResizeWatcher&&!this.permanent&&!this.stateless&&!this.temporary},reactsToResize:function(){return!this.disableResizeWatcher&&!this.stateless},reactsToRoute:function(){return!this.disableRouteWatcher&&!this.stateless&&(this.temporary||this.isMobile)},showOverlay:function(){return!this.hideOverlay&&this.isActive&&(this.isMobile||this.temporary)},styles:function(){var t=this.isBottom?"translateY":"translateX",e={height:Object(I.f)(this.height),top:this.isBottom?"auto":Object(I.f)(this.computedTop),maxHeight:null!=this.computedMaxHeight?"calc(100% - ".concat(Object(I.f)(this.computedMaxHeight),")"):void 0,transform:"".concat(t,"(").concat(Object(I.f)(this.computedTransform,"%"),")"),width:Object(I.f)(this.computedWidth)};return e}},watch:{$route:"onRouteChange",isActive:function(t){this.$emit("input",t)},isMobile:function(t,e){!t&&this.isActive&&!this.temporary&&this.removeOverlay(),null!=e&&this.reactsToResize&&this.reactsToMobile&&(this.isActive=!t)},permanent:function(t){t&&(this.isActive=!0)},showOverlay:function(t){t?this.genOverlay():this.removeOverlay()},value:function(t){this.permanent||(null!=t?t!==this.isActive&&(this.isActive=t):this.init())},expandOnHover:"updateMiniVariant",isMouseover:function(t){this.updateMiniVariant(!t)}},beforeMount:function(){this.init()},methods:{calculateTouchArea:function(){var t=this.$el.parentNode;if(t){var e=t.getBoundingClientRect();this.touchArea={left:e.left+50,right:e.right-50}}},closeConditional:function(){return this.isActive&&!this._isDestroyed&&this.reactsToClick},genAppend:function(){return this.genPosition("append")},genBackground:function(){var t={height:"100%",width:"100%",src:this.src},image=this.$scopedSlots.img?this.$scopedSlots.img(t):this.$createElement(C.a,{props:t});return this.$createElement("div",{staticClass:"v-navigation-drawer__image"},[image])},genDirectives:function(){var t=this,e=[{name:"click-outside",value:{handler:function(){t.isActive=!1},closeConditional:this.closeConditional,include:this.getOpenDependentElements}}];return this.touchless||this.stateless||e.push({name:"touch",value:{parent:!0,left:this.swipeLeft,right:this.swipeRight}}),e},genListeners:function(){var t=this,e={transitionend:function(e){if(e.target===e.currentTarget){t.$emit("transitionend",e);var n=document.createEvent("UIEvents");n.initUIEvent("resize",!0,!1,window,0),window.dispatchEvent(n)}}};return this.miniVariant&&(e.click=function(){return t.$emit("update:mini-variant",!1)}),this.expandOnHover&&(e.mouseenter=function(){return t.isMouseover=!0},e.mouseleave=function(){return t.isMouseover=!1}),e},genPosition:function(t){var slot=Object(I.n)(this,t);return slot?this.$createElement("div",{staticClass:"v-navigation-drawer__".concat(t)},slot):slot},genPrepend:function(){return this.genPosition("prepend")},genContent:function(){return this.$createElement("div",{staticClass:"v-navigation-drawer__content"},this.$slots.default)},genBorder:function(){return this.$createElement("div",{staticClass:"v-navigation-drawer__border"})},init:function(){this.permanent?this.isActive=!0:this.stateless||null!=this.value?this.isActive=this.value:this.temporary||(this.isActive=!this.isMobile)},onRouteChange:function(){this.reactsToRoute&&this.closeConditional()&&(this.isActive=!1)},swipeLeft:function(t){this.isActive&&this.right||(this.calculateTouchArea(),Math.abs(t.touchendX-t.touchstartX)<100||(this.right&&t.touchstartX>=this.touchArea.right?this.isActive=!0:!this.right&&this.isActive&&(this.isActive=!1)))},swipeRight:function(t){this.isActive&&!this.right||(this.calculateTouchArea(),Math.abs(t.touchendX-t.touchstartX)<100||(!this.right&&t.touchstartX<=this.touchArea.left?this.isActive=!0:this.right&&this.isActive&&(this.isActive=!1)))},updateApplication:function(){if(!this.isActive||this.isMobile||this.temporary||!this.$el)return 0;var t=Number(this.computedWidth);return isNaN(t)?this.$el.clientWidth:t},updateMiniVariant:function(t){this.miniVariant!==t&&this.$emit("update:mini-variant",t)}},render:function(t){var e=[this.genPrepend(),this.genContent(),this.genAppend(),this.genBorder()];return(this.src||Object(I.n)(this,"img"))&&e.unshift(this.genBackground()),t(this.tag,this.setBackgroundColor(this.color,{class:this.classes,style:this.styles,directives:this.genDirectives(),on:this.genListeners()}),e)}}),U=n(1620),component=Object(y.a)(w,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-navigation-drawer",{attrs:{absolute:"",temporary:""},model:{value:t.togglemenu,callback:function(e){t.togglemenu=e},expression:"togglemenu"}},[o("v-row",{attrs:{justify:"center","no-gutters":""}},[o("v-list",{staticClass:"pr-0",attrs:{nav:"",justify:"center",rounded:""}},[o("nuxt-link",{attrs:{to:"/discover"}},[o("v-list-item-avatar",{attrs:{size:"35px"},on:{click:function(e){return t.$router.push("/")}}},[o("v-img",{attrs:{src:n(454),size:"20px"}})],1)],1),t._v(" "),t._l(t.items,(function(e){return o("v-list-item",{key:e.title,staticClass:"pr-0",attrs:{nuxt:"",to:e.to,exact:"","exact-active-class":"navdrawersidebar"}},[o("v-list-item-icon",[o("v-badge",{attrs:{content:t.badgeCount(e.to.substring(1)),value:t.badgeCount(e.to.substring(1)),color:"red",overlap:""}},[o("v-icon",{staticClass:"menu-text",attrs:{size:"20px"}},[t._v(t._s(e.icon))])],1)],1),t._v(" "),o("v-list-item-title",{staticClass:"font-navdrawer",domProps:{textContent:t._s(e.title)}},[t._v("{item.title}}\n        ")])],1)})),t._v(" "),o("v-list-item",{attrs:{exact:""},on:{click:function(e){return t.logout()}}},[o("v-list-item-icon",[o("v-icon",{staticClass:"menu-text",staticStyle:{"margin-left":"2px"},attrs:{size:"20px"}},[t._v("mdi-logout")])],1),t._v(" "),o("v-list-item-title",{staticClass:"font-navdrawer"},[t._v("Logout ")])],1),t._v(" "),o("ComposeJamDialog",{attrs:{dialog:t.showComposeJamDialog},on:{close:function(e){t.showComposeJamDialog=!1}}}),t._v(" "),o("v-list-item",[o("v-btn",{staticClass:"ml-n2",staticStyle:{"font-size":"16px"},attrs:{rounded:"",fab:"",dark:"",color:"#008de4",height:"42px",width:"210px"},on:{click:function(e){e.stopPropagation(),t.showComposeJamDialog=!0},close:function(e){t.showComposeJamDialog=!1}}},[t._v("\n          Post Jam\n          "),o("v-icon",{attrs:{size:"20px",color:"white"}},[t._v("mdi-feather")])],1)],1)],2)],1)],1)}),[],!1,null,"1042df48",null),W=component.exports;function Z(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function F(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?Z(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):Z(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}x()(component,{VBadge:_.a,VBtn:k.a,VIcon:j.a,VImg:C.a,VList:A.a,VListItem:M.a,VListItemAvatar:$.a,VListItemIcon:P.a,VListItemTitle:D.c,VNavigationDrawer:Y,VRow:U.a});var G={components:{navbarMobile:W,searchBar:f.a,Tweet:l.a,ComposeJam:h.a,ComposeJamDialog:v.a,OnboardDialog:d.a},data:function(){return{showComposeJamDialog:!1,togglemenu:null,showOnboardDialog:!1,items:[{icon:"mdi-campfire",title:"Home",to:"/discover"},{icon:"mdi-magnify",title:"Explore",to:"/search"},{icon:"mdi-bell-outline",title:"Notifications",to:"/notifications"},{icon:"mdi-email-outline",title:"Messages",to:"/messages"},{icon:"mdi-bookmark-outline",title:"Bookmarks",to:"/bookmarks"}]}},computed:F({},Object(c.c)(["getJams","getProfile"])),created:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.showOnboardDialog=!t.$store.state.users[t.$store.state.name.label.toLowerCase()]&&!t.$store.state.presentedOnboarding,t.showOnboardDialog&&t.$store.commit("setPresentedOnboarding",!0),e.next=4,t.fetchJams({view:"/discover",orderBy:[["$createdAt","desc"]]});case 4:case"end":return e.stop()}}),e)})))()},methods:F({},Object(c.b)(["fetchJams","refreshLikesInState","refreshCommentCountInState"]))},K=(n(1709),n(437)),Q=n(1619),tt=n(1626),et=n(1610),it=Object(y.a)(G,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-col",{staticClass:"flex-nowrap pt-0 pr-0",class:{fullscreen:t.$vuetify.breakpoint.mdAndUp,halfscreen:t.$vuetify.breakpoint.smAndDown}},[n("v-row",{attrs:{"no-gutters":""}},[n("v-col",{staticClass:"flex-nowrap py-0 pr-0",staticStyle:{"max-width":"600px"}},[n("v-container",{staticClass:"pa-0 borders pt-0"},[n("v-row",[n("v-col",{staticClass:"py-2"},[t.$vuetify.breakpoint.smAndUp?n("v-row",{staticClass:"pl-2 pb-1 pt-2",attrs:{align:"center","no-gutters":""}},[n("span",{staticClass:"font-header pb-2 pl-4"},[t._v(" Home ")])]):t._e(),t._v(" "),t.$vuetify.breakpoint.xs?n("v-row",{staticClass:"pl-2 pb-1 pt-0 pr-2",attrs:{align:"center","no-gutters":""}},[n("v-list-item-avatar",{staticClass:"pa-4"},[n("v-avatar",{attrs:{size:"40",color:"lightgray"},on:{click:function(e){e.stopPropagation(),t.togglemenu=!t.togglemenu}}},[n("v-img",{staticClass:"elevation-6",attrs:{src:t.getProfile(t.$store.state.name.label).avatar}})],1)],1),t._v(" "),n("span",{staticClass:"font-header pt-1 pb-1 pl-4"},[t._v(" Home ")])],1):t._e(),t._v(" "),n("v-divider")],1)],1),t._v(" "),t.togglemenu?n("navbarMobile",{on:{close:function(e){t.togglemenu}}}):t._e(),t._v(" "),t.$vuetify.breakpoint.smAndUp?n("ComposeJam"):t._e(),t._v(" "),t._l(t.getJams("/discover"),(function(t,i){return n("Tweet",{key:i,attrs:{jam:t}})})),t._v(" "),t.showOnboardDialog?n("OnboardDialog",{attrs:{dialog:t.showOnboardDialog},on:{close:function(e){t.showOnboardDialog=!1}}}):t._e(),t._v(" "),t.$vuetify.breakpoint.xs?n("v-btn",{attrs:{fixed:"",fab:"",bottom:"",right:"",color:"blue"},on:{click:function(e){e.stopPropagation(),t.showComposeJamDialog=!0}}},[n("v-icon",{attrs:{color:"white"}},[t._v("mdi-feather")])],1):t._e(),t._v(" "),n("ComposeJamDialog",{attrs:{dialog:t.showComposeJamDialog},on:{close:function(e){t.showComposeJamDialog=!1}}})],2)],1),t._v(" "),t.$vuetify.breakpoint.mdAndUp?n("v-col",{staticClass:"pt-0",staticStyle:{"max-width":"320px"}},[n("searchBar")],1):t._e()],1)],1)}),[],!1,null,"411b10d6",null);e.default=it.exports;x()(it,{VAvatar:K.a,VBtn:k.a,VCol:Q.a,VContainer:tt.a,VDivider:et.a,VIcon:j.a,VImg:C.a,VListItemAvatar:$.a,VRow:U.a})}}]);