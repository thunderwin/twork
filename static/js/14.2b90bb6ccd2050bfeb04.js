webpackJsonp([14],{hd9j:function(n,t){},"ot+C":function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a={render:function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"mapwrapper"},[e("el-amap",{staticClass:"amap-demo",attrs:{vid:"amapDemo",zoom:n.zoom,center:n.center,plugin:n.plugin,lang:"zh_en"}},[e("div",{staticClass:"toolbar"},[n.loaded?e("span",[n._v("\n        location: lng = "+n._s(n.lng)+" lat = "+n._s(n.lat)+"\n      ")]):e("span",[n._v("loading")])])])],1)},staticRenderFns:[]};var o=e("VU/8")({data:function(){var n=this;return{zoom:15,center:[121.5273285,31.21515044],lng:0,lat:0,loaded:!1,plugin:[{pName:"ToolBar",events:{init:function(n){}}},{pName:"Geolocation",events:{init:function(t){t.getCurrentPosition(function(t,e){e&&e.position&&(n.lng=e.position.lng,n.lat=e.position.lat,n.center=[n.lng,n.lat],n.loaded=!0,n.$nextTick())})}}}]}},components:{}},a,!1,function(n){e("hd9j")},"data-v-0aadd8e8",null);t.default=o.exports}});
//# sourceMappingURL=14.2b90bb6ccd2050bfeb04.js.map