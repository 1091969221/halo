(self["webpackChunkhalo_admin"]=self["webpackChunkhalo_admin"]||[]).push([[761],{34761:function(t,e,a){"use strict";a.r(e),a.d(e,{default:function(){return p}});var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("page-view",[a("a-row",{attrs:{gutter:12,align:"middle",type:"flex"}},[a("a-col",{staticClass:"pb-3",attrs:{span:24}},[a("a-card",{attrs:{bodyStyle:{padding:"16px"},bordered:!1}},[a("div",{staticClass:"table-page-search-wrapper"},[a("a-form",{attrs:{layout:"inline"}},[a("a-row",{attrs:{gutter:48}},[a("a-col",{attrs:{md:6,sm:24}},[a("a-form-item",{attrs:{label:"关键词："}},[a("a-input",{model:{value:t.list.queryParam.keyword,callback:function(e){t.$set(t.list.queryParam,"keyword",e)},expression:"list.queryParam.keyword"}})],1)],1),a("a-col",{attrs:{md:6,sm:24}},[a("a-form-item",{attrs:{label:"分组："}},[a("a-select",{on:{change:function(e){return t.handleQuery()}},model:{value:t.list.queryParam.team,callback:function(e){t.$set(t.list.queryParam,"team",e)},expression:"list.queryParam.team"}},t._l(t.computedTeams,(function(e,o){return a("a-select-option",{key:o,attrs:{value:e}},[t._v(t._s(e)+" ")])})),1)],1)],1),a("a-col",{attrs:{md:6,sm:24}},[a("span",{staticClass:"table-page-search-submitButtons"},[a("a-space",[a("a-button",{attrs:{type:"primary"},on:{click:function(e){return t.handleQuery()}}},[t._v("查询")]),a("a-button",{on:{click:function(e){return t.handleResetParam()}}},[t._v("重置")])],1)],1)])],1)],1)],1),a("div",{staticClass:"mb-0 table-operator"},[a("a-button",{attrs:{icon:"plus",type:"primary"},on:{click:function(e){t.form.visible=!0}}},[t._v("添加")])],1)])],1),a("a-col",{attrs:{span:24}},[a("a-list",{attrs:{dataSource:t.list.data,grid:{gutter:12,xs:2,sm:2,md:4,lg:6,xl:6,xxl:6},loading:t.list.loading},scopedSlots:t._u([{key:"renderItem",fn:function(e,o){return a("a-list-item",{key:o},[a("a-card",{attrs:{bodyStyle:{padding:0},hoverable:""},on:{click:function(a){return t.handleOpenEditForm(e)}}},[a("div",{staticClass:"photo-thumb"},[a("img",{attrs:{src:e.thumbnail,loading:"lazy"}})]),a("a-card-meta",{staticClass:"p-3"},[a("ellipsis",{attrs:{slot:"description",length:t.isMobile()?12:16,tooltip:""},slot:"description"},[t._v(t._s(e.name))])],1)],1)],1)}}])})],1)],1),a("div",{staticClass:"page-wrapper"},[a("a-pagination",{attrs:{current:t.list.pagination.page,defaultPageSize:t.list.pagination.size,pageSizeOptions:["18","36","54","72","90","108"],total:t.list.pagination.total,showLessItems:"",showSizeChanger:""},on:{change:t.handlePaginationChange,showSizeChange:t.handlePaginationChange}})],1),a("div",{staticStyle:{position:"fixed",bottom:"30px",right:"30px"}},[a("a-button",{attrs:{icon:"setting",shape:"circle",size:"large",type:"primary"},on:{click:function(e){t.optionFormVisible=!0}}})],1),a("a-modal",{attrs:{afterClose:function(){return t.optionFormVisible=!1},title:"页面设置"},model:{value:t.optionFormVisible,callback:function(e){t.optionFormVisible=e},expression:"optionFormVisible"}},[a("template",{slot:"footer"},[a("a-button",{key:"submit",attrs:{type:"primary"},on:{click:function(e){return t.handleSaveOptions()}}},[t._v("保存")])],1),a("a-form",{attrs:{layout:"vertical"}},[a("a-form-item",{attrs:{help:"* 需要主题进行适配",label:"页面标题："}},[a("a-input",{model:{value:t.options.photos_title,callback:function(e){t.$set(t.options,"photos_title",e)},expression:"options.photos_title"}})],1),a("a-form-item",{attrs:{label:"每页显示条数："}},[a("a-input-number",{staticStyle:{width:"100%"},model:{value:t.options.photos_page_size,callback:function(e){t.$set(t.options,"photos_page_size",e)},expression:"options.photos_page_size"}})],1)],1)],2),a("a-drawer",{attrs:{title:"图片"+(t.form.model.id?"修改":"添加"),visible:t.form.visible,width:t.isMobile()?"100%":"480",closable:"",destroyOnClose:""},on:{close:t.onDrawerClose}},[a("a-form-model",{ref:"photoForm",attrs:{model:t.form.model,rules:t.form.rules,layout:"vertical"}},[a("a-form-model-item",{attrs:{label:"图片地址：",prop:"url"}},[a("div",{staticClass:"pb-2"},[a("img",{staticClass:"w-full cursor-pointer",staticStyle:{"border-radius":"4px"},attrs:{src:t.form.model.url||"/images/placeholder.jpg"},on:{click:function(e){t.attachmentSelectModal.visible=!0}}})]),a("a-input",{attrs:{placeholder:"点击封面图选择图片，或者输入外部链接"},model:{value:t.form.model.url,callback:function(e){t.$set(t.form.model,"url",e)},expression:"form.model.url"}})],1),a("a-form-model-item",{attrs:{label:"缩略图地址：",prop:"thumbnail"}},[a("a-input",{model:{value:t.form.model.thumbnail,callback:function(e){t.$set(t.form.model,"thumbnail",e)},expression:"form.model.thumbnail"}})],1),a("a-form-model-item",{attrs:{label:"图片名称：",prop:"name"}},[a("a-input",{model:{value:t.form.model.name,callback:function(e){t.$set(t.form.model,"name",e)},expression:"form.model.name"}})],1),a("a-form-model-item",{attrs:{label:"拍摄日期：",prop:"takeTime"}},[a("a-date-picker",{staticStyle:{width:"100%"},attrs:{defaultValue:t.takeTimeDefaultValue,format:"YYYY-MM-DD HH:mm:ss",showTime:""},on:{change:t.onTakeTimeChange,ok:t.onTakeTimeSelect}})],1),a("a-form-model-item",{attrs:{label:"拍摄地点：",prop:"location"}},[a("a-input",{model:{value:t.form.model.location,callback:function(e){t.$set(t.form.model,"location",e)},expression:"form.model.location"}})],1),a("a-form-model-item",{attrs:{label:"分组：",prop:"team"}},[a("a-auto-complete",{staticStyle:{width:"100%"},attrs:{dataSource:t.computedTeams,allowClear:""},model:{value:t.form.model.team,callback:function(e){t.$set(t.form.model,"team",e)},expression:"form.model.team"}})],1),a("a-form-model-item",{attrs:{label:"描述：",prop:"description"}},[a("a-input",{attrs:{autoSize:{minRows:5},type:"textarea"},model:{value:t.form.model.description,callback:function(e){t.$set(t.form.model,"description",e)},expression:"form.model.description"}})],1)],1),a("a-divider",{staticClass:"divider-transparent"}),a("div",{staticClass:"bottom-control"},[a("a-space",[a("ReactiveButton",{attrs:{errored:t.form.saveErrored,erroredText:(t.form.model.id?"修改":"添加")+"失败",loadedText:(t.form.model.id?"修改":"添加")+"成功",loading:t.form.saving,text:t.form.model.id?"修改":"添加"},on:{callback:t.handleCreateOrUpdateCallback,click:t.handleCreateOrUpdate}}),t.form.model.id?a("a-popconfirm",{attrs:{cancelText:"取消",okText:"确定",title:"你确定要删除该图片？"},on:{confirm:t.handleDelete}},[a("ReactiveButton",{attrs:{errored:t.form.deleteErrored,loading:t.form.deleting,erroredText:"删除失败",loadedText:"删除成功",text:"删除",type:"danger"},on:{callback:t.handleDeleteCallback,click:function(){}}})],1):t._e()],1)],1),a("AttachmentSelectModal",{attrs:{multiSelect:!1,visible:t.attachmentSelectModal.visible},on:{"update:visible":function(e){return t.$set(t.attachmentSelectModal,"visible",e)},confirm:t.handleAttachmentSelected}})],1)],1)},i=[],n=a(76381),r=(a(90195),a(31875),a(19003),a(41479),a(50990)),l=a(98906),s=a(3832),m=a(1540),c=a(86637),d={mixins:[s.jB,s.KT],components:{PageView:r.B4},data:function(){return{list:{data:[],loading:!1,pagination:{page:1,size:18,sort:null,total:1},queryParam:{page:0,size:18,sort:null,keyword:null,team:null}},form:{model:{},visible:!1,rules:{url:[{required:!0,message:"* 图片地址不能为空",trigger:["change"]}],thumbnail:[{required:!0,message:"* 缩略图地址不能为空",trigger:["change"]}],name:[{required:!0,message:"* 图片名称不能为空",trigger:["change"]}]},saving:!1,saveErrored:!1,deleting:!1,deleteErrored:!1},attachmentSelectModal:{visible:!1},optionFormVisible:!1,teams:[],options:[]}},created:function(){this.handleListPhotos(),this.handleListPhotoTeams(),this.handleListOptions()},computed:{takeTimeDefaultValue:function(){if(this.form.model.takeTime){var t=new Date(this.form.model.takeTime);return(0,c._)(t,"YYYY-MM-DD HH:mm:ss")}return(0,c._)(new Date,"YYYY-MM-DD HH:mm:ss")},computedTeams:function(){return this.teams.filter((function(t){return""!==t}))}},methods:(0,n.Z)((0,n.Z)({},(0,l.nv)(["refreshOptionsCache"])),{},{handleListPhotos:function(){var t=this;this.list.loading=!0,this.list.queryParam.page=this.list.pagination.page-1,this.list.queryParam.size=this.list.pagination.size,this.list.queryParam.sort=this.list.pagination.sort,m.Z.photo.list(this.list.queryParam).then((function(e){t.list.data=e.data.content,t.list.pagination.total=e.data.total})).finally((function(){t.list.loading=!1}))},handleQuery:function(){this.handlePaginationChange(1,this.list.pagination.size)},handleListOptions:function(){var t=this;m.Z.option.list().then((function(e){t.options=e.data}))},handleListPhotoTeams:function(){var t=this;m.Z.photo.listTeams().then((function(e){t.teams=e.data}))},handleCreateOrUpdate:function(){var t=this;t.$refs.photoForm.validate((function(e){e&&(t.form.saving=!0,t.form.model.id?m.Z.photo.update(t.form.model.id,t.form.model).catch((function(){t.form.saveErrored=!0})).finally((function(){setTimeout((function(){t.form.saving=!1}),400)})):m.Z.photo.create(t.form.model).catch((function(){t.form.saveErrored=!0})).finally((function(){setTimeout((function(){t.form.saving=!1}),400)})))}))},handleCreateOrUpdateCallback:function(){this.form.saveErrored?this.form.saveErrored=!1:(this.form.model={},this.form.visible=!1,this.handleListPhotos(),this.handleListPhotoTeams())},handleOpenEditForm:function(t){this.form.model=t,this.form.visible=!0},handlePaginationChange:function(t,e){this.$log.debug("Current: ".concat(t,", PageSize: ").concat(e)),this.list.pagination.page=t,this.list.pagination.size=e,this.handleListPhotos()},handleDelete:function(){var t=this;this.form.deleting=!0,m.Z.photo["delete"](this.form.model.id).catch((function(){t.form.deleteErrored=!0})).finally((function(){setTimeout((function(){t.form.deleting=!1}),400)}))},handleDeleteCallback:function(){this.form.deleteErrored?this.form.deleteErrored=!1:(this.form.model={},this.form.visible=!1,this.handleListPhotos(),this.handleListPhotoTeams())},handleAttachmentSelected:function(t){var e=t.raw;e.length&&(this.form.model.url=encodeURI(e[0].path),this.form.model.thumbnail=encodeURI(e[0].thumbPath)),this.attachmentSelectModal.visible=!1},handleResetParam:function(){this.list.queryParam.keyword=null,this.list.queryParam.team=null,this.handlePaginationChange(1,this.list.pagination.size),this.handleListPhotoTeams()},onDrawerClose:function(){this.form.visible=!1,this.form.model={}},handleSaveOptions:function(){var t=this;m.Z.option.save(this.options).then((function(){t.$message.success("保存成功！"),t.optionFormVisible=!1})).finally((function(){t.handleListOptions(),t.refreshOptionsCache()}))},onTakeTimeChange:function(t){this.form.model.takeTime=t.valueOf()},onTakeTimeSelect:function(t){this.form.model.takeTime=t.valueOf()}})},u=d,h=a(18156),f=(0,h.Z)(u,o,i,!1,null,null,null),p=f.exports},53303:function(t,e,a){var o=a(15820),i=Math.floor,n=function(t,e){var a=t.length,s=i(a/2);return a<8?r(t,e):l(t,n(o(t,0,s),e),n(o(t,s),e),e)},r=function(t,e){var a,o,i=t.length,n=1;while(n<i){o=n,a=t[n];while(o&&e(t[o-1],a)>0)t[o]=t[--o];o!==n++&&(t[o]=a)}return t},l=function(t,e,a,o){var i=e.length,n=a.length,r=0,l=0;while(r<i||l<n)t[r+l]=r<i&&l<n?o(e[r],a[l])<=0?e[r++]:a[l++]:r<i?e[r++]:a[l++];return t};t.exports=n},52103:function(t,e,a){var o=a(82678),i=o.match(/firefox\/(\d+)/i);t.exports=!!i&&+i[1]},76044:function(t,e,a){var o=a(82678);t.exports=/MSIE|Trident/.test(o)},97551:function(t,e,a){var o=a(82678),i=o.match(/AppleWebKit\/(\d+)\./);t.exports=!!i&&+i[1]},19003:function(t,e,a){"use strict";var o=a(79644),i=a(33691),n=a(77925),r=a(43207),l=a(71768),s=a(43150),m=a(32640),c=a(53303),d=a(29415),u=a(52103),h=a(76044),f=a(3718),p=a(97551),g=[],v=i(g.sort),b=i(g.push),k=m((function(){g.sort(void 0)})),y=m((function(){g.sort(null)})),C=d("sort"),x=!m((function(){if(f)return f<70;if(!(u&&u>3)){if(h)return!0;if(p)return p<603;var t,e,a,o,i="";for(t=65;t<76;t++){switch(e=String.fromCharCode(t),t){case 66:case 69:case 70:case 72:a=3;break;case 68:case 71:a=4;break;default:a=2}for(o=0;o<47;o++)g.push({k:e+o,v:a})}for(g.sort((function(t,e){return e.v-t.v})),o=0;o<g.length;o++)e=g[o].k.charAt(0),i.charAt(i.length-1)!==e&&(i+=e);return"DGBEFHACIJK"!==i}})),w=k||!y||!C||!x,T=function(t){return function(e,a){return void 0===a?-1:void 0===e?1:void 0!==t?+t(e,a)||0:s(e)>s(a)?1:-1}};o({target:"Array",proto:!0,forced:w},{sort:function(t){void 0!==t&&n(t);var e=r(this);if(x)return void 0===t?v(e):v(e,t);var a,o,i=[],s=l(e);for(o=0;o<s;o++)o in e&&b(i,e[o]);c(i,T(t)),a=i.length,o=0;while(o<a)e[o]=i[o++];while(o<s)delete e[o++];return e}})}}]);