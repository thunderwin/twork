webpackJsonp([11],{"+Im3":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var l=i("Dd8w"),a=i.n(l),o=i("P9l9"),s={data:function(){return{fileList2:[{name:"food.jpeg",url:"https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"},{name:"food2.jpeg",url:"https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"}]}},methods:{handleRemove:function(t,e){console.log(t,e)},handlePreview:function(t){console.log(t)}}},r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"upload"},[e("el-upload",{staticClass:"upload-demo",attrs:{action:"https://jsonplaceholder.typicode.com/posts/","on-preview":this.handlePreview,"on-remove":this.handleRemove,"file-list":this.fileList2,multiple:"","list-type":"picture"}},[e("el-button",{attrs:{size:"small",type:"primary"}},[this._v("点击上传")]),this._v(" "),e("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[this._v("只能上传jpg/png文件，且不超过500kb")])],1)],1)},staticRenderFns:[]},n=i("VU/8")(s,r,!1,null,null,null).exports,v=i("r8FW"),c=i("NYxO"),u={components:{Radio:v.Radio,RadioGroup:v.RadioGroup,CellGroup:v.CellGroup,CellItem:v.CellItem,Eleqiniu:n,CitySelect:v.CitySelect,CheckListItem:v.CheckListItem,CheckList:v.CheckList,TextArea:v.TextArea},data:function(){return{shared:!0,nosmokers:!0,nopet:!0,subway:!0,livingroom:!0,startdata:"2018-05-11",floor:"17",room:"1704",street:"",subwayline:"",rooms_num:0,bath_num:0,district:"",files:[],price:"",deposit:"",facilities:[],desc:"",facilitiesshow:!1}},computed:a()({},Object(c.c)(["roomimg"])),methods:{UploadMyApartment:function(){Object(o.i)({shared:this.shared,nosmokers:this.nosmokers,nopet:this.nopet,subway:this.subway,livingroom:this.livingroom,startdata:this.startdata,floor:this.floor,room:this.room,street:this.street,subwayline:this.subwayline,rooms_num:this.rooms_num,bath_num:this.bath_num,district:this.district,files:this.roomimg,price:this.price,deposit:this.deposit,facilities:this.facilities,desc:this.desc}).then(function(t){console.log(t.data)}).catch(function(t){console.log("出错了！"+t)})}}},p={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"upload"},[i("yd-layout",[i("h1",{staticClass:"bigtitle"},[t._v("Upload your apartment")]),t._v(" "),i("yd-cell-group",{attrs:{title:"Tips"}},[i("yd-cell-item",{attrs:{type:"label"}},[i("div",{attrs:{slot:"left"},slot:"left"},[t._v("No Smoking ")]),t._v(" "),i("yd-switch",{attrs:{slot:"right"},slot:"right",model:{value:t.nosmokers,callback:function(e){t.nosmokers=e},expression:"nosmokers"}})],1),t._v(" "),i("yd-cell-item",{attrs:{type:"label"}},[i("div",{attrs:{slot:"left"},slot:"left"},[t._v("No Pet ")]),t._v(" "),i("yd-switch",{attrs:{slot:"right"},slot:"right",model:{value:t.nopet,callback:function(e){t.nopet=e},expression:"nopet"}})],1),t._v(" "),i("yd-cell-item",{attrs:{type:"label"}},[i("div",{attrs:{slot:"left"},slot:"left"},[t._v("Subway (Max 10 mins walk) ")]),t._v(" "),i("yd-switch",{attrs:{slot:"right"},slot:"right",model:{value:t.subway,callback:function(e){t.subway=e},expression:"subway"}})],1),t._v(" "),i("yd-cell-item",{attrs:{type:"label"}},[i("div",{attrs:{slot:"left"},slot:"left"},[t._v("Shard bathroom? ")]),t._v(" "),i("yd-switch",{attrs:{slot:"right"},slot:"right",model:{value:t.livingroom,callback:function(e){t.livingroom=e},expression:"livingroom"}})],1)],1),t._v(" "),i("yd-cell-group",{attrs:{title:"Availability"}},[i("yd-cell-item",{attrs:{arrow:""}},[i("span",{attrs:{slot:"left"},slot:"left"},[t._v("Avaliable from:  ")]),t._v(" "),i("yd-datetime",{attrs:{slot:"right",type:"date"},slot:"right",model:{value:t.startdata,callback:function(e){t.startdata=e},expression:"startdata"}})],1)],1),t._v(" "),i("yd-cell-group",{attrs:{title:"Apartment details"}},[i("div",{staticClass:"room_desc_item"},[i("span",{staticClass:"item-title"},[t._v("Bedroom : ")]),t._v(" "),i("yd-spinner",{staticClass:"item-count",attrs:{width:"150px",height:"40px",min:"1",unit:"1",max:"5"},model:{value:t.rooms_num,callback:function(e){t.rooms_num=e},expression:"rooms_num"}})],1),t._v(" "),i("div",{staticClass:"room_desc_item"},[i("span",{staticClass:"item-title"},[t._v("Bathroom : ")]),t._v(" "),i("yd-spinner",{staticClass:"item-count",attrs:{width:"150px",height:"40px",min:"1",unit:"1",max:"5"},model:{value:t.bath_num,callback:function(e){t.bath_num=e},expression:"bath_num"}})],1)]),t._v(" "),i("yd-cell-group",{attrs:{title:""}},[i("yd-cell-item",[i("span",{attrs:{slot:"left"},slot:"left"},[t._v(" Size:  ")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.price,expression:"price"}],attrs:{slot:"right",type:"number",placeholder:""},domProps:{value:t.price},on:{input:function(e){e.target.composing||(t.price=e.target.value)}},slot:"right"}),t._v(" "),i("span",{attrs:{slot:"right"},slot:"right"},[t._v(" sq.m ")])]),t._v(" "),i("yd-cell-item",{attrs:{arrow:""}},[i("span",{attrs:{slot:"left"},slot:"left"},[t._v("District:   ")]),t._v(" "),i("select",{directives:[{name:"model",rawName:"v-model",value:t.district,expression:"district"}],attrs:{slot:"right"},on:{change:function(e){var i=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.district=e.target.multiple?i:i[0]}},slot:"right"},[i("option",{attrs:{value:"xuhui"}},[t._v("jingan")]),t._v(" "),i("option",{attrs:{value:"jingan"}},[t._v("xuhui")]),t._v(" "),i("option",{attrs:{value:"pudong"}},[t._v("huangpu")]),t._v(" "),i("option",{attrs:{value:"huangpu"}},[t._v("pudong")]),t._v(" "),i("option",{attrs:{value:"pudong"}},[t._v("changning")]),t._v(" "),i("option",{attrs:{value:"pudong"}},[t._v("minhang")]),t._v(" "),i("option",{attrs:{value:"pudong"}},[t._v("luwan")]),t._v(" "),i("option",{attrs:{value:"pudong"}},[t._v("hongkou")]),t._v(" "),i("option",{attrs:{value:"pudong"}},[t._v("baoshan")]),t._v(" "),i("option",{attrs:{value:"pudong"}},[t._v("zhabei")]),t._v(" "),i("option",{attrs:{value:"pudong"}},[t._v("songjiang")])])]),t._v(" "),i("yd-cell-item",{attrs:{arrow:""}},[i("span",{attrs:{slot:"left"},slot:"left"},[t._v("Subway line:   ")]),t._v(" "),i("select",{directives:[{name:"model",rawName:"v-model",value:t.subwayline,expression:"subwayline"}],attrs:{slot:"right"},on:{change:function(e){var i=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.subwayline=e.target.multiple?i:i[0]}},slot:"right"},[i("option",{attrs:{value:"1"}},[t._v("line 1")]),t._v(" "),i("option",{attrs:{value:"2"}},[t._v("line 2")]),t._v(" "),i("option",{attrs:{value:"3"}},[t._v("line 3")]),t._v(" "),i("option",{attrs:{value:"4"}},[t._v("line 4")]),t._v(" "),i("option",{attrs:{value:"5"}},[t._v("line 5")]),t._v(" "),i("option",{attrs:{value:"6"}},[t._v("line 6")]),t._v(" "),i("option",{attrs:{value:"7"}},[t._v("line 7")]),t._v(" "),i("option",{attrs:{value:"8"}},[t._v("line 8")]),t._v(" "),i("option",{attrs:{value:"9"}},[t._v("line 9")]),t._v(" "),i("option",{attrs:{value:"10"}},[t._v("line 10")]),t._v(" "),i("option",{attrs:{value:"11"}},[t._v("line 11")]),t._v(" "),i("option",{attrs:{value:"12"}},[t._v("line 12")]),t._v(" "),i("option",{attrs:{value:"13"}},[t._v("line 13")])])]),t._v(" "),i("yd-cell-item",[i("span",{attrs:{slot:"left"},slot:"left"},[t._v(" Floor:   ")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.floor,expression:"floor"}],attrs:{slot:"right",type:"number",placeholder:"",required:""},domProps:{value:t.floor},on:{input:function(e){e.target.composing||(t.floor=e.target.value)}},slot:"right"})]),t._v(" "),i("yd-cell-item",[i("span",{attrs:{slot:"left"},slot:"left"},[t._v(" Room N.O:   ")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.room,expression:"room"}],attrs:{slot:"right",type:"number",placeholder:"",required:""},domProps:{value:t.room},on:{input:function(e){e.target.composing||(t.room=e.target.value)}},slot:"right"})]),t._v(" "),i("yd-cell-item",[i("span",{attrs:{slot:"left"},slot:"left"},[t._v(" Street:   ")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.street,expression:"street"}],attrs:{slot:"right",type:"text",placeholder:"",required:""},domProps:{value:t.street},on:{input:function(e){e.target.composing||(t.street=e.target.value)}},slot:"right"})])],1),t._v(" "),i("yd-cell-group",{attrs:{title:"Amenities"}},[i("yd-cell-item",{attrs:{arrow:""},nativeOn:{click:function(e){t.facilitiesshow=!0}}},[i("span",{attrs:{slot:"left"},slot:"left"},[t._v("Choose what you have")])])],1),t._v(" "),i("yd-popup",{attrs:{position:"bottom",height:"75%"},model:{value:t.facilitiesshow,callback:function(e){t.facilitiesshow=e},expression:"facilitiesshow"}},[i("yd-checklist",{attrs:{align:"right"},model:{value:t.facilities,callback:function(e){t.facilities=e},expression:"facilities"}},[i("yd-checklist-item",{attrs:{val:"Bath"}},[i("div",{staticStyle:{height:"50px","line-height":"50px"}},[t._v("Balcony")])]),t._v(" "),i("yd-checklist-item",{attrs:{val:"Subway"}},[i("div",{staticStyle:{height:"50px","line-height":"50px"}},[t._v("Swimming pool")])]),t._v(" "),i("yd-checklist-item",{attrs:{val:"3"}},[i("div",{staticStyle:{height:"50px","line-height":"50px"}},[t._v("Garden")])]),t._v(" "),i("yd-checklist-item",{attrs:{val:"3"}},[i("div",{staticStyle:{height:"50px","line-height":"50px"}},[t._v("Rooftop")])]),t._v(" "),i("yd-checklist-item",{attrs:{val:"3"}},[i("div",{staticStyle:{height:"50px","line-height":"50px"}},[t._v("Bathtub")])]),t._v(" "),i("yd-checklist-item",{attrs:{val:"3"}},[i("div",{staticStyle:{height:"50px","line-height":"50px"}},[t._v("Gym")])]),t._v(" "),i("yd-checklist-item",{attrs:{val:"3"}},[i("div",{staticStyle:{height:"50px","line-height":"50px"}},[t._v("Oven")])]),t._v(" "),i("yd-checklist-item",{attrs:{val:"3"}},[i("div",{staticStyle:{height:"50px","line-height":"50px"}},[t._v("Dishwasher")])]),t._v(" "),i("yd-checklist-item",{attrs:{val:"3"}},[i("div",{staticStyle:{height:"50px","line-height":"50px"}},[t._v("AC")])]),t._v(" "),i("yd-checklist-item",{attrs:{val:"3"}},[i("div",{staticStyle:{height:"50px","line-height":"50px"}},[t._v("Heating")])]),t._v(" "),i("yd-checklist-item",{attrs:{val:"3"}},[i("div",{staticStyle:{height:"50px","line-height":"50px"}},[t._v("Double pined windows")])]),t._v(" "),i("yd-checklist-item",{attrs:{val:"3"}},[i("div",{staticStyle:{height:"50px","line-height":"50px"}},[t._v("Internet")])]),t._v(" "),i("yd-checklist-item",{attrs:{val:"3"}},[i("div",{staticStyle:{height:"50px","line-height":"50px"}},[t._v("Cable tv")])])],1)],1),t._v(" "),i("yd-cell-group",{attrs:{title:"Your house pictures"}},[i("Eleqiniu")],1),t._v(" "),i("yd-cell-group",{attrs:{title:"Term"}},[i("yd-cell-item",[i("span",{attrs:{slot:"left"},slot:"left"},[t._v(" Price: ¥  ")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.price,expression:"price"}],attrs:{slot:"right",type:"number",placeholder:""},domProps:{value:t.price},on:{input:function(e){e.target.composing||(t.price=e.target.value)}},slot:"right"})]),t._v(" "),i("yd-cell-item",[i("span",{attrs:{slot:"left"},slot:"left"},[t._v(" Deposit:   ")]),t._v(" "),i("select",{directives:[{name:"model",rawName:"v-model",value:t.subwayline,expression:"subwayline"}],attrs:{slot:"right"},on:{change:function(e){var i=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.subwayline=e.target.multiple?i:i[0]}},slot:"right"},[i("option",{attrs:{value:"1"}},[t._v("1 month rent")]),t._v(" "),i("option",{attrs:{value:"2"}},[t._v("1.5 month rent")])])]),t._v(" "),i("yd-cell-item",{attrs:{arrow:""}},[i("span",{attrs:{slot:"left"},slot:"left"},[t._v("Lease length:   ")]),t._v(" "),i("select",{directives:[{name:"model",rawName:"v-model",value:t.subwayline,expression:"subwayline"}],attrs:{slot:"right"},on:{change:function(e){var i=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.subwayline=e.target.multiple?i:i[0]}},slot:"right"},[i("option",{attrs:{value:"1"}},[t._v("1 year")]),t._v(" "),i("option",{attrs:{value:"2"}},[t._v("2 year")])])]),t._v(" "),i("yd-cell-item",{attrs:{arrow:""}},[i("span",{attrs:{slot:"left"},slot:"left"},[t._v("Payment methods:   ")]),t._v(" "),i("select",{directives:[{name:"model",rawName:"v-model",value:t.subwayline,expression:"subwayline"}],attrs:{slot:"right"},on:{change:function(e){var i=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.subwayline=e.target.multiple?i:i[0]}},slot:"right"},[i("option",{attrs:{value:"1"}},[t._v("Per 1 month")]),t._v(" "),i("option",{attrs:{value:"2"}},[t._v("Per 2 month")]),t._v(" "),i("option",{attrs:{value:"2"}},[t._v("Per 3 month")])])])],1),t._v(" "),i("yd-cell-group",{attrs:{title:"Describe your awesome room.. "}},[i("yd-cell-item",[i("yd-textarea",{attrs:{slot:"right",placeholder:"Tell me your bank password",maxlength:"100"},slot:"right",model:{value:t.desc,callback:function(e){t.desc=e},expression:"desc"}})],1)],1),t._v(" "),i("yd-button-group",[i("yd-button",{attrs:{size:"large",type:"primary"},nativeOn:{click:function(e){return t.UploadMyApartment(e)}}},[t._v("Upload")])],1)],1)],1)},staticRenderFns:[]};var d=i("VU/8")(u,p,!1,function(t){i("8DJT")},"data-v-3de69a15",null);e.default=d.exports},"8DJT":function(t,e){}});
//# sourceMappingURL=11.e5ce168589f4c64120ea.js.map