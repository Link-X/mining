webpackJsonp([2],{"2nK7":function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o={data:function(){return{from:{username:"12",passWord:"2"}}},methods:{back:function(){console.log(1),this.$router.back()}}},n={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"login"},[s("div",{staticClass:"login-header"},[t._v("设置密码")]),t._v(" "),s("div",{staticClass:"login-from"},[s("ul",{staticClass:"login-from_ul"},[s("li",{staticClass:"login-from_userName"},[s("i",{staticClass:"iconfont icon-mima"}),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.from.username,expression:"from.username"}],staticClass:"from-inp",attrs:{type:"password"},domProps:{value:t.from.username},on:{input:function(e){e.target.composing||t.$set(t.from,"username",e.target.value)}}})]),t._v(" "),s("li",[s("i",{staticClass:"iconfont icon-mima"}),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.from.passWord,expression:"from.passWord"}],staticClass:"from-inp",attrs:{type:"password"},domProps:{value:t.from.passWord},on:{input:function(e){e.target.composing||t.$set(t.from,"passWord",e.target.value)}}})])])]),t._v(" "),s("mt-button",{staticClass:"login-from_submit",attrs:{type:"default"}},[t._v("确定")]),t._v(" "),s("div",{staticClass:"login-close",on:{click:t.back}},[s("i",{staticClass:"iconfont icon-closecircleoutline"})])],1)},staticRenderFns:[]};var a=s("VU/8")(o,n,!1,function(t){s("zk5M")},"data-v-011ccb52",null);e.default=a.exports},BfK2:function(t,e){},Dd8w:function(t,e,s){"use strict";e.__esModule=!0;var o,n=s("woOf"),a=(o=n)&&o.__esModule?o:{default:o};e.default=a.default||function(t){for(var e=1;e<arguments.length;e++){var s=arguments[e];for(var o in s)Object.prototype.hasOwnProperty.call(s,o)&&(t[o]=s[o])}return t}},QWRR:function(t,e){t.exports={header:{home:"首页",anomaly:"异常消息",account:"我的",anomalyDetals:"消息列表",mineDetails:"矿机详情",setting:"我的设置",miningList:"矿机筛选"}}},R4wc:function(t,e,s){var o=s("kM2E");o(o.S+o.F,"Object",{assign:s("To3L")})},To3L:function(t,e,s){"use strict";var o=s("lktj"),n=s("1kS7"),a=s("NpIQ"),i=s("sB3e"),r=s("MU5D"),c=Object.assign;t.exports=!c||s("S82l")(function(){var t={},e={},s=Symbol(),o="abcdefghijklmnopqrst";return t[s]=7,o.split("").forEach(function(t){e[t]=t}),7!=c({},t)[s]||Object.keys(c({},e)).join("")!=o})?function(t,e){for(var s=i(t),c=arguments.length,l=1,u=n.f,m=a.f;c>l;)for(var f,d=r(arguments[l++]),v=u?o(d).concat(u(d)):o(d),p=v.length,_=0;p>_;)m.call(d,f=v[_++])&&(s[f]=d[f]);return s}:c},V3tA:function(t,e,s){s("R4wc"),t.exports=s("FeBl").Object.assign},"e+TV":function(t,e){},ftSK:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=s("Dd8w"),n=s.n(o),a=s("QWRR"),i=s.n(a),r=s("0xDb"),c=s("9rMa"),l={name:"layout",data:function(){return{selected:"",data:[{name:"首页",icon:"icon-shouye",router:"/home"},{name:"异常消息",icon:"icon-xiaoxi",router:"/anomaly",isBadge:!0},{name:"我的",icon:"icon-home",router:"/account"}]}},created:function(){this.selected=this.$route.path},methods:{goClick:function(){this.$router.push({path:this.selected})},back:function(){this.$router.back()},touchDom:function(t,e){console.log(t),"add"===e?Object(r.b)(this.$refs[t][0].$el,"home-li_click"):Object(r.e)(this.$refs[t][0].$el,"home-li_click")}},computed:n()({headerTitle:function(){return i.a.header[this.$route.name]},isBack:function(){return"首页"!==this.headerTitle&&"异常消息"!==this.headerTitle&&"我的"!==this.headerTitle}},Object(c.b)(["newsNumber"])),watch:{$route:function(t,e){this.selected=t.path}}},u={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"layout"},[s("mt-header",{attrs:{title:t.headerTitle}},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.isBack,expression:"isBack"}],attrs:{slot:"left"},slot:"left"},[s("mt-button",{attrs:{icon:"back"},on:{click:t.back}},[t._v("返回")])],1)]),t._v(" "),s("router-view"),t._v(" "),s("mt-tabbar",{staticClass:"layout-bar",attrs:{fixed:!0},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}},t._l(t.data,function(e,o){return s("mt-tab-item",{key:o,ref:e.router,refInFor:!0,attrs:{id:e.router},nativeOn:{touchstart:function(s){t.touchDom(e.router,"add")},touchend:function(s){t.touchDom(e.router,"rem")},click:function(e){t.goClick(e)}}},[s("i",{staticClass:"iconfont",class:e.icon,attrs:{slot:"icon"},slot:"icon"}),t._v(" "),s("div",{staticClass:"tabSpan"},[t._v("\n        "+t._s(e.name)+"\n        "),e.isBadge?s("mt-badge",{staticClass:"errorC",attrs:{size:"small",type:"error"}},[t._v(t._s(t.newsNumber))]):t._e()],1)])}))],1)},staticRenderFns:[]};var m=s("VU/8")(l,u,!1,function(t){s("e+TV")},"data-v-9b31500e",null).exports,f={data:function(){return{from:{username:"13660555555",passWord:"2223233"}}},methods:n()({submit:function(){this.SET_TOKEN_STORAGE("1"),this.SET_IPHONE(this.from.username)}},Object(c.c)(["SET_TOKEN_STORAGE","SET_IPHONE"]))},d={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"login"},[s("div",{staticClass:"login-header"},[t._v("登录")]),t._v(" "),s("div",{staticClass:"login-from"},[s("ul",{staticClass:"login-from_ul"},[s("li",{staticClass:"login-from_userName"},[s("i",{staticClass:"iconfont icon-me"}),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.from.username,expression:"from.username"}],staticClass:"from-inp",domProps:{value:t.from.username},on:{input:function(e){e.target.composing||t.$set(t.from,"username",e.target.value)}}})]),t._v(" "),s("li",[s("i",{staticClass:"iconfont icon-mima"}),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.from.passWord,expression:"from.passWord"}],staticClass:"from-inp",attrs:{type:"password"},domProps:{value:t.from.passWord},on:{input:function(e){e.target.composing||t.$set(t.from,"passWord",e.target.value)}}})])])]),t._v(" "),s("mt-button",{staticClass:"login-from_submit",attrs:{type:"default"},nativeOn:{click:function(e){t.submit(e)}}},[t._v("登录")]),t._v(" "),s("div",{staticClass:"login-bottom"},[s("router-link",{staticClass:"login-bottom_link",attrs:{tag:"div",to:"/FindKey"}},[s("span",[t._v("忘记密码,重新找回密码")]),t._v(" "),s("i",{staticClass:"iconfont icon-yuanjiantou"})])],1)],1)},staticRenderFns:[]};var v={name:"main-page",components:{layout:m,Login:s("VU/8")(f,d,!1,function(t){s("pbdx")},"data-v-f114c904",null).exports},created:function(){this.GET_TOKEN_STORAGE()},methods:n()({},Object(c.c)(["GET_TOKEN_STORAGE"])),computed:n()({},Object(c.b)(["isLogin"]),{mainView:function(){return this.isLogin?"layout":"Login"}})},p={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"main-page"},[e(this.mainView,{tag:"component"})],1)},staticRenderFns:[]};var _=s("VU/8")(v,p,!1,function(t){s("BfK2")},"data-v-266f930b",null);e.default=_.exports},pbdx:function(t,e){},woOf:function(t,e,s){t.exports={default:s("V3tA"),__esModule:!0}},zk5M:function(t,e){}});