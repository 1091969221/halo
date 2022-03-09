"use strict";(self["webpackChunkhalo_admin"]=self["webpackChunkhalo_admin"]||[]).push([[814],{77794:function(e,t,r){r.d(t,{Z:function(){return d}});var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("a-tree-select",{attrs:{allowClear:!0,treeData:e.categoryTreeData,treeDataSimpleMode:!0,placeholder:"请选择上级目录，默认为顶级目录",treeDefaultExpandAll:""},model:{value:e.categoryIdString,callback:function(t){e.categoryIdString=t},expression:"categoryIdString"}})},n=[],o=r(75725),i=(r(12566),r(41479),r(82395),r(21082),r(31875),r(11074),{name:"CategorySelectTree",props:{categoryId:{type:Number,required:!0,default:0},categories:{type:Array,required:!1,default:function(){return[]}}},computed:{categoryTreeData:function(){return[{id:0,title:"根目录",value:"0",pId:-1}].concat((0,o.Z)(this.categories.map((function(e){return{id:e.id,title:e.name,value:e.id.toString(),pId:e.parentId}}))))},categoryIdString:{get:function(){return this.categoryId.toString()},set:function(e){this.$emit("update:categoryId",e?parseInt(e):0)}}}}),l=i,s=r(42177),c=(0,s.Z)(l,a,n,!1,null,null,null),d=c.exports},84814:function(e,t,r){r.r(t),r.d(t,{default:function(){return I}});var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("page-view",[r("a-row",{attrs:{gutter:12}},[r("a-col",{staticClass:"pb-3",attrs:{lg:8,md:8,sm:24,xl:8,xs:24}},[r("a-card",{attrs:{bodyStyle:{padding:"16px"},"head-style":{padding:"8px 16px!important"},title:e.title}},[r("a-form-model",{ref:"categoryForm",attrs:{model:e.form.model,rules:e.form.rules,layout:"horizontal"}},[r("a-form-model-item",{attrs:{help:"* 页面上所显示的名称",label:"名称：",prop:"name"}},[r("a-input",{ref:"nameInput",model:{value:e.form.model.name,callback:function(t){e.$set(e.form.model,"name",t)},expression:"form.model.name"}})],1),r("a-form-model-item",{attrs:{help:"* 一般为单个分类页面的标识，最好为英文",label:"别名：",prop:"slug"}},[r("a-input",{model:{value:e.form.model.slug,callback:function(t){e.$set(e.form.model,"slug",t)},expression:"form.model.slug"}})],1),r("a-form-model-item",{attrs:{label:"上级目录：",prop:"parentId"}},[r("category-select-tree",{attrs:{categories:e.list.data,"category-id":e.form.model.parentId},on:{"update:categoryId":function(t){return e.$set(e.form.model,"parentId",t)},"update:category-id":function(t){return e.$set(e.form.model,"parentId",t)}}})],1),r("a-form-model-item",{attrs:{help:"* 在分类页面可展示，需要主题支持",label:"封面图：",prop:"thumbnail"}},[r("AttachmentInput",{attrs:{title:"选择封面图"},model:{value:e.form.model.thumbnail,callback:function(t){e.$set(e.form.model,"thumbnail",t)},expression:"form.model.thumbnail"}})],1),r("a-form-model-item",{attrs:{help:"* 分类密码",label:"密码：",prop:"password"}},[r("a-input-password",{attrs:{autocomplete:"new-password"},model:{value:e.form.model.password,callback:function(t){e.$set(e.form.model,"password",t)},expression:"form.model.password"}})],1),r("a-form-model-item",{attrs:{help:"* 分类描述，需要主题支持",label:"描述：",prop:"description"}},[r("a-input",{attrs:{autoSize:{minRows:3},type:"textarea"},model:{value:e.form.model.description,callback:function(t){e.$set(e.form.model,"description",t)},expression:"form.model.description"}})],1),r("a-form-model-item",[e.isUpdateMode?r("a-button-group",[r("ReactiveButton",{attrs:{errored:e.form.errored,loading:e.form.saving,erroredText:"更新失败",loadedText:"更新成功",text:"更新",type:"primary"},on:{callback:e.handleSavedCallback,click:e.handleCreateOrUpdateCategory}}),r("a-button",{attrs:{type:"dashed"},on:{click:function(t){e.form.model={}}}},[e._v("返回添加")])],1):r("ReactiveButton",{attrs:{errored:e.form.errored,loading:e.form.saving,erroredText:"保存失败",loadedText:"保存成功",text:"保存",type:"primary"},on:{callback:e.handleSavedCallback,click:e.handleCreateOrUpdateCategory}})],1)],1)],1)],1),r("a-col",{staticClass:"pb-3",attrs:{lg:16,md:16,sm:24,xl:16,xs:24}},[r("a-card",{attrs:{bodyStyle:{padding:"16px"},title:"分类列表"},scopedSlots:e._u([{key:"extra",fn:function(){return[r("ReactiveButton",{attrs:{disabled:e.list.data.length<=0,errored:e.formBatch.errored,loading:e.formBatch.saving,erroredText:"保存失败",loadedText:"保存成功",text:"保存"},on:{callback:function(t){e.formBatch.errored=!1},click:e.handleUpdateBatch}})]},proxy:!0}])},[r("a-spin",{attrs:{spinning:e.list.loading}},[r("CategoryTreeNode",{on:{edit:e.handleEdit,reload:e.handleListCategories,select:e.handleSelect},model:{value:e.list.treeData,callback:function(t){e.$set(e.list,"treeData",t)},expression:"list.treeData"}})],1)],1)],1)],1)],1)},n=[],o=r(75725),i=r(86475),l=r(47458),s=(r(31875),r(18482),r(41479),r(70315),r(27474)),c=r(77794),d=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("a-list",{attrs:{"item-layout":"horizontal"}},[r("draggable",e._b({staticClass:"item-container",attrs:{list:e.list,value:e.value,handle:".mover",tag:"div"},on:{end:function(t){e.isDragging=!1},input:e.emitter,start:function(t){e.isDragging=!0}}},"draggable",{animation:300,group:"description",ghostClass:"ghost",chosenClass:"chosen",dragClass:"drag",emptyInsertThreshold:20},!1),[r("transition-group",e._l(e.realValue,(function(t){return r("div",{key:t.id},[r("a-list-item",{staticClass:"menu-item",scopedSlots:e._u([{key:"actions",fn:function(){return[r("a-button",{staticClass:"!p-0",attrs:{type:"link"},on:{click:function(r){return e.handleSelect(t)}}},[e._v("新增")]),r("a-button",{staticClass:"!p-0",attrs:{type:"link"},on:{click:function(r){return e.handleEdit(t)}}},[e._v("编辑")]),r("a-button",{staticClass:"!p-0",attrs:{type:"link"},on:{click:function(r){return e.handleDelete(t)}}},[e._v("删除")])]},proxy:!0}],null,!0)},[r("a-list-item-meta",[r("span",{staticClass:"inline-block font-bold title",attrs:{slot:"title"},slot:"title"},[r("a-icon",{staticClass:"cursor-move mover mr-1",attrs:{type:"bars"}}),e._v(" "+e._s(t.name)+e._s(t.hasPassword?"（加密）":"")+" ")],1),r("span",{staticClass:"inline-block",attrs:{slot:"description"},slot:"description"},[r("a",{staticClass:"ant-anchor-link-title",attrs:{href:t.fullPath,target:"_blank"}},[e._v(" "+e._s(t.fullPath)+" ")])])])],1),r("div",{staticClass:"a-list-nested",staticStyle:{"margin-left":"44px"}},[r("CategoryTreeNode",{attrs:{list:t.children},on:{edit:e.handleEdit,reload:function(t){return e.$emit("reload")},select:e.handleSelect}})],1)],1)})),0)],1)],1)},u=[],m=(r(21082),r(77513)),p=r.n(m),f=r(17132),g={name:"CategoryTreeNode",components:{draggable:p()},props:{value:{required:!1,type:Array,default:null},list:{required:!1,type:Array,default:null}},computed:{realValue:function(){return this.value?this.value:this.list}},data:function(){return{isDragging:!1}},methods:{emitter:function(e){this.$emit("input",e)},handleDelete:function(e){var t=this;t.$confirm({title:"提示",content:"确定要删除名为".concat(e.name,"的分类？"),onOk:function(){return(0,l.Z)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,f.Z.category["delete"](e.id);case 3:t.$emit("reload"),r.next=9;break;case 6:r.prev=6,r.t0=r["catch"](0),t.$log.error("Fail to delete category",r.t0);case 9:case"end":return r.stop()}}),r,null,[[0,6]])})))()}})},handleEdit:function(e){this.$emit("edit",e)},handleSelect:function(e){this.$emit("select",e)}}},h=g,v=r(42177),y=(0,v.Z)(h,d,u,!1,null,"93ae2cf2",null),b=y.exports,x=r(91411),k={components:{PageView:s.B4,CategorySelectTree:c.Z,CategoryTreeNode:b},mixins:[x.jB,x.KT],data:function(){return{list:{data:[],treeData:[],loading:!1},form:{model:{},saving:!1,errored:!1,rules:{name:[{required:!0,message:"* 分类名称不能为空",trigger:["change"]},{max:255,message:"* 分类名称的字符长度不能超过 255",trigger:["change"]}],slug:[{max:255,message:"* 分类别名的字符长度不能超过 255",trigger:["change"]}],thumbnail:[{max:1023,message:"* 封面图链接的字符长度不能超过 1023",trigger:["change"]}],description:[{max:100,message:"* 分类描述的字符长度不能超过 100",trigger:["change"]}]}},formBatch:{saving:!1,errored:!1}}},computed:{title:function(){return this.isUpdateMode?"修改分类":"添加分类"},isUpdateMode:function(){return!!this.form.model.id}},created:function(){this.handleListCategories()},methods:{handleListCategories:function(){var e=this;return(0,l.Z)(regeneratorRuntime.mark((function t(){var r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,e.list.loading=!0,t.next=4,f.Z.category.list({});case 4:r=t.sent,a=r.data,e.list.data=a,e.list.treeData=e.convertDataToTree(a),t.next=13;break;case 10:t.prev=10,t.t0=t["catch"](0),e.$log.error("Failed to get categories",t.t0);case 13:return t.prev=13,e.list.loading=!1,t.finish(13);case 16:case"end":return t.stop()}}),t,null,[[0,10,13,16]])})))()},convertDataToTree:function(e){var t={},r=[];return e.forEach((function(e){return t[e.id]=(0,i.Z)((0,i.Z)({},e),{},{children:[]})})),e.forEach((function(e){var a=t[e.id],n=t[e.parentId];a.password&&(a.hasPassword=!0),n&&(n.password||n.hasPassword)&&(a.hasPassword=!0),e.parentId?t[e.parentId].children.push(a):r.push(a)})),r},handleEdit:function(e){var t=this;return(0,l.Z)(regeneratorRuntime.mark((function r(){var a,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,f.Z.category.get(e.id);case 3:a=r.sent,n=a.data,t.form.model=n,t.$refs.nameInput.focus(),r.next=12;break;case 9:r.prev=9,r.t0=r["catch"](0),t.$log.error("Failed to get category",r.t0);case 12:case"end":return r.stop()}}),r,null,[[0,9]])})))()},handleSelect:function(e){this.form.model={parentId:e.id},this.$refs.nameInput.focus()},handleCreateOrUpdateCategory:function(){var e=this,t=this;t.$refs.categoryForm.validate((function(r){r&&(t.form.saving=!0,t.isUpdateMode?f.Z.category.update(t.form.model.id,t.form.model).catch((function(){e.form.errored=!0})).finally((function(){setTimeout((function(){t.form.saving=!1}),400)})):f.Z.category.create(e.form.model).catch((function(){e.form.errored=!0})).finally((function(){setTimeout((function(){t.form.saving=!1}),400)})))}))},handleUpdateBatch:function(){var e=this;return(0,l.Z)(regeneratorRuntime.mark((function t(){var r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=function e(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return t&&0!==t.length?t.reduce((function(t,a,n){a.priority=n+1,a.parentId=r;var i=a.children.length>0?e(a.children,a.id):[];return[].concat((0,o.Z)(t),[a],(0,o.Z)(i))}),[]):[]},a=r(e.list.treeData),t.prev=2,e.formBatch.saving=!0,t.next=6,f.Z.category.updateInBatch(a);case 6:t.next=12;break;case 8:t.prev=8,t.t0=t["catch"](2),e.formBatch.errored=!0,e.$log.error("Failed to update categories",t.t0);case 12:return t.prev=12,setTimeout((function(){e.formBatch.saving=!1,e.handleListCategories()}),400),t.finish(12);case 15:case"end":return t.stop()}}),t,null,[[2,8,12,15]])})))()},handleSavedCallback:function(){if(this.form.errored)this.form.errored=!1;else{var e=this;e.form.model={},e.handleListCategories()}},handleQueryCategoryPosts:function(e){this.$router.push({name:"PostList",query:{categoryId:e.id}})}}},C=k,w=(0,v.Z)(C,a,n,!1,null,null,null),I=w.exports}}]);