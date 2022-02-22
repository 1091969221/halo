"use strict";(self["webpackChunkhalo_admin"]=self["webpackChunkhalo_admin"]||[]).push([[362],{91362:function(t,e,a){a.r(e),a.d(e,{default:function(){return m}});var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("page-view",[a("a-row",[a("a-col",{attrs:{span:24}},[a("a-card",{attrs:{bodyStyle:{padding:"16px"},bordered:!1}},[a("a-card",{staticClass:"environment-info",attrs:{bodyStyle:{padding:"16px"},bordered:!1}},[a("template",{slot:"title"},[t._v(" 环境信息 "),a("a-button",{staticClass:"!p-0",attrs:{type:"link"},on:{click:t.handleCopyEnvironments}},[a("a-icon",{attrs:{type:"copy"}})],1)],1),a("a-popover",{attrs:{slot:"extra",title:t.isLatest?"当前为最新版本":"有新版本",placement:"left"},slot:"extra"},[a("template",{slot:"content"},[a("p",[t._v(t._s(t.versionMessage))]),a("a-button",{attrs:{type:"dashed"},on:{click:t.handleShowVersionContent}},[t._v("查看详情")])],1),a("a-button",{attrs:{icon:t.isLatest?"check-circle":"exclamation-circle",loading:t.checking,shape:"circle",type:"dashed"}})],2),a("ul",{staticClass:"p-0 m-0 list-none"},[a("li",[t._v("版本："+t._s(t.environments.version))]),a("li",[t._v("数据库："+t._s(t.environments.database))]),a("li",[t._v("运行模式："+t._s(t.environments.mode))]),a("li",[t._v("启用主题："+t._s(t.activatedTheme.name))]),a("li",[t._v("启动时间："+t._s(t._f("moment")(t.environments.startTime)))])]),a("a",{staticClass:"mr-3",attrs:{href:"https://halo.run",target:"_blank"}},[t._v("官网 "),a("a-icon",{attrs:{type:"link"}})],1),a("a",{staticClass:"mr-3",attrs:{href:"https://docs.halo.run",target:"_blank"}},[t._v("文档 "),a("a-icon",{attrs:{type:"link"}})],1),a("a",{staticClass:"mr-3",attrs:{href:"https://github.com/halo-dev",target:"_blank"}},[t._v("开源组织 "),a("a-icon",{attrs:{type:"link"}})],1),a("a",{staticClass:"mr-3",attrs:{href:"https://bbs.halo.run",target:"_blank"}},[t._v("在线社区 "),a("a-icon",{attrs:{type:"link"}})],1)],2),a("a-card",{attrs:{bodyStyle:{padding:"16px"},bordered:!1,loading:t.contributorsLoading,title:"开发者"}},t._l(t.contributors,(function(e,n){return a("a",{key:n,attrs:{href:e.html_url,target:"_blank"}},[a("a-tooltip",{attrs:{title:e.login,placement:"top"}},[a("a-avatar",{style:{marginRight:"10px",marginBottom:"10px"},attrs:{alt:e.login,src:t._f("webpAvatarConvert")(e.avatar_url),size:"large"}})],1)],1)})),0)],1)],1),a("a-col",{attrs:{span:24}})],1),a("a-modal",{attrs:{title:t.versionContentModalTitle,visible:t.versionContentVisible,width:620,"ok-text":"查看更多"},on:{cancel:function(e){t.versionContentVisible=!1},ok:t.handleOpenVersionUrl}},[a("div",{domProps:{innerHTML:t._s(t.versionContent)}})])],1)},s=[],r=a(1540),i=a(10299),o=a.n(i),l=a(90952),c=a(50990);const h=o().create({baseURL:"https://api.github.com",timeout:1e4,headers:{"Content-Type":"application/json",Accept:"application/vnd.github.v3+json"},withCredentials:!1});var d={components:{PageView:c.B4},data(){return{environments:{},contributors:[{login:"",id:0,node_id:"",avatar_url:"",gravatar_id:"",url:"",html_url:"",followers_url:"",following_url:"",gists_url:"",starred_url:"",subscriptions_url:"",organizations_url:"",repos_url:"",events_url:"",received_events_url:"",type:"",site_admin:!1,contributions:0}],contributorsLoading:!0,checking:!1,isLatest:!1,latestData:{},versionContentVisible:!1,activatedTheme:{}}},computed:{versionMessage(){return`当前版本：${this.environments.version}，${this.isLatest?"已经是最新版本。":`新版本：${this.latestData.name}，你可以点击下方按钮查看详情。`}`},versionContent(){return this.latestData&&this.latestData.body?l.TU.parse(this.latestData.body):"暂无内容"},versionContentModalTitle(){return`${this.latestData.name} 更新内容`}},created(){this.getEnvironments(),this.handleGetActivatedTheme(),this.fetchContributors()},methods:{async getEnvironments(){const{data:t}=await r.Z.getEnvironment();this.environments=t,this.checkServerUpdate()},async handleGetActivatedTheme(){const{data:t}=await r.Z.theme.getActivatedTheme();this.activatedTheme=t},handleCopyEnvironments(){const t=`版本：${this.environments.version}\n数据库：${this.environments.database}\n运行模式：${this.environments.mode}\n启用主题：${this.activatedTheme.name}\nUser Agent：${navigator.userAgent}`;this.$copyText(t).then((t=>{this.$log.debug("copy",t),this.$message.success("复制成功！")})).catch((t=>{this.$log.debug("copy.err",t),this.$message.error("复制失败！")}))},fetchContributors(){const t=this;t.contributorsLoading=!0,h.get("/repos/halo-dev/halo/contributors?per_page=100").then((e=>{t.contributors=e.data})).catch((function(e){t.$log.error("Fetch contributors error",e)})).finally((()=>{t.contributorsLoading=!1}))},checkServerUpdate(){const t=this.$createElement,e=this;e.checking=!0,h.get("/repos/halo-dev/halo/releases/latest").then((a=>{const n=a.data;if(e.latestData=n,n.draft||n.prerelease)return;const s=e.calculateIntValue(e.environments.version),r=e.calculateIntValue(n.name);if(s>=r)return void(e.isLatest=!0);const i="新版本提醒",o="检测到 Halo 新版本："+n.name+"，点击下方按钮查看最新版本。";e.$notification.open({message:i,description:o,icon:t("a-icon",{attrs:{type:"smile"},style:"color: #108ee9"}),btn:t=>t("a-button",{props:{type:"primary",size:"small"},on:{click:()=>this.handleShowVersionContent()}},"去看看")})})).catch((function(t){this.$log.error("Check update fail",t)})).finally((()=>{this.checking=!1}))},handleShowVersionContent(){this.versionContentVisible=!0},handleOpenVersionUrl(){window.open(this.latestData.html_url,"_blank")},calculateIntValue(t){t=t.replace(/v/g,"");const e=t.split(".");if(null==e||3!==e.length)return-1;const a=parseInt(e[0]),n=parseInt(e[1]),s=parseInt(e[2]);return isNaN(a)||isNaN(n)||isNaN(s)?-1:1e6*a+1e3*n+s}},filters:{webpAvatarConvert(t){return t.replace("avatars.githubusercontent.com","avatars-githubusercontent.webp.se")}}},p=d,u=a(18156),v=(0,u.Z)(p,n,s,!1,null,null,null),m=v.exports}}]);