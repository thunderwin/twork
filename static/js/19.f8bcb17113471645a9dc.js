webpackJsonp([19],{"0RkU":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});a("u4WU");var l=a("P9l9"),n={data:function(){return{familyInfo:{apartment:"",roomie_number:"2",roomie_id:"1",district:"changning",subwayline:"2",family_name:"Fatboy's club",tag:"washing"}}},methods:{getUsername:function(){},updateFamilyInfo:function(){Object(l.e)(this.familyInfo).then().catch()}},mounted:function(){this.getUsername()}},i={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"newfamily"},[a("yd-navbar",{attrs:{title:"New family"}},[a("router-link",{attrs:{slot:"left",to:"/"},slot:"left"},[a("yd-navbar-back-icon",[t._v("back")])],1)],1),t._v(" "),a("yd-cell-group",{attrs:{title:"Family Name:"}},[a("yd-cell-item",[a("span",{attrs:{slot:"left"},slot:"left"}),t._v(" "),a("yd-input",{attrs:{slot:"right",type:"text",placeholder:""},slot:"right",model:{value:t.familyInfo.family_name,callback:function(e){t.$set(t.familyInfo,"family_name",e)},expression:"familyInfo.family_name"}})],1)],1),t._v(" "),a("yd-cell-group",{attrs:{title:"Roomie Number:"}},[a("yd-cell-item",[a("span",{attrs:{slot:"left"},slot:"left"}),t._v(" "),a("yd-input",{attrs:{slot:"right",type:"text",placeholder:""},slot:"right",model:{value:t.familyInfo.roomie_number,callback:function(e){t.$set(t.familyInfo,"roomie_number",e)},expression:"familyInfo.roomie_number"}})],1)],1),t._v(" "),a("yd-button-group",[a("yd-button",{attrs:{size:"large",type:"primary"},nativeOn:{click:function(e){return t.updateFamilyInfo(e)}}},[t._v("Save")])],1)],1)},staticRenderFns:[]},o=a("VU/8")(n,i,!1,null,null,null);e.default=o.exports}});
//# sourceMappingURL=19.f8bcb17113471645a9dc.js.map