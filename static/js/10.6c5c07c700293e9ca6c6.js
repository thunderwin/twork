webpackJsonp([10],{P9l9:function(t,e,r){"use strict";r.d(e,"a",function(){return a}),r.d(e,"c",function(){return s}),r.d(e,"b",function(){return i});var l=r("mtWM"),n=r.n(l),o="http://127.0.0.1:8000/",a=function(t){return n.a.post(o+"login/",t)},s=function(t){return n.a.get(o+"users/"+t+"/")},i=function(t){return n.a.patch(o+"users/1/",t)}},xiKa:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var l=r("P9l9"),n=r("u4WU"),o=r("r8FW"),a={components:{CellGroup:o.CellGroup,CellItem:o.CellItem,Input:o.Input},data:function(){return{userInfo:{name:""},username:""}},methods:{getUserinfo:function(){var t=this;this.username=n.a.getCookie("username"),Object(l.c)(this.username).then(function(e){t.userInfo=e.data,console.log(t.userInfo)})},updateUserInfo:function(){Object(l.b)(this.userInfo)}},created:function(){this.getUserinfo()}},s={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"profile-wrapper"},[r("yd-navbar",{attrs:{title:"Your profile"}},[r("router-link",{attrs:{slot:"left",to:"/setting"},slot:"left"},[r("yd-navbar-back-icon",[t._v("back")])],1)],1),t._v(" "),r("h1",{staticClass:"bigtitle"}),t._v(" "),r("yd-cell-group",{attrs:{title:"Name"}},[r("yd-cell-item",[r("span",{attrs:{slot:"left"},slot:"left"}),t._v(" "),r("yd-input",{attrs:{slot:"right",type:"text",required:"",max:"20",placeholder:" Your name"},slot:"right",model:{value:t.userInfo.name,callback:function(e){t.$set(t.userInfo,"name",e)},expression:"userInfo.name"}})],1)],1),t._v(" "),r("yd-cell-group",{attrs:{title:"About me"}},[r("yd-cell-item",[r("yd-textarea",{attrs:{slot:"right",placeholder:"tell a little about yourself",maxlength:"200"},slot:"right"})],1)],1),t._v(" "),r("yd-cell-group",{attrs:{title:"What do you do?"}},[r("yd-cell-item",[r("yd-input",{attrs:{slot:"right",type:"text",required:"",max:"20",placeholder:" "},slot:"right"})],1)],1),t._v(" "),r("yd-cell-group",{attrs:{title:"Gender"}},[r("yd-cell-item",{attrs:{arrow:""}},[r("select",{attrs:{slot:"right"},slot:"right"},[r("option",{attrs:{value:"1"}},[t._v("male")]),t._v(" "),r("option",{attrs:{value:"2"}},[t._v("female")]),t._v(" "),r("option",{attrs:{value:"3"}},[t._v("others")])])])],1),t._v(" "),r("yd-cell-group",{attrs:{title:"My ideal living location"}},[r("yd-cell-item",{attrs:{arrow:""}},[r("select",{attrs:{slot:"right"},slot:"right"},[r("option",{attrs:{value:"1"}},[t._v("guy")]),t._v(" "),r("option",{attrs:{value:"2"}},[t._v("girl")]),t._v(" "),r("option",{attrs:{value:"3"}},[t._v("other")])])])],1),t._v(" "),r("yd-button-group",[r("yd-button",{attrs:{size:"large",type:"primary"},nativeOn:{click:function(e){return t.updateUserInfo(e)}}},[t._v("Save")])],1)],1)},staticRenderFns:[]},i=r("VU/8")(a,s,!1,null,null,null);e.default=i.exports}});
//# sourceMappingURL=10.6c5c07c700293e9ca6c6.js.map