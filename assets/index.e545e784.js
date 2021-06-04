import{_ as e,u as t}from"./useTable.59d4379d.js";import{_ as o}from"./useForm.551ed3f6.js";import{g as a,a as r}from"./tableData.59ae2a9f.js";import{u as i,n as s,d as n}from"./Editor.9f53a30f.js";import{h as d}from"./index.9eab7d25.js";import{_ as l}from"./PageWrapper.82dec425.js";import{T as c}from"./index.81514f39.js";import{I as m}from"./index.16147537.js";import u from"./detailModal.d2ba8941.js";import{u as p}from"./useModal.7f0d4937.js";import{d as f,Y as j,Q as g,R as b,_ as h,c as x,q as T,S as C}from"./vendor.445a818e.js";import"./index.54ee86d6.js";import"./uuid.c3296435.js";import"./uniqBy.c7a7bfeb.js";import"./_baseIteratee.4c28a80c.js";import"./get.0c0a01c7.js";import"./findIndex.2cb8eacb.js";import"./scrollTo.c1e0f75f.js";import"./transButton.5742404b.js";import"./index.defcffb6.js";import"./UpOutlined.241fc329.js";import"./index.286ee882.js";import"./useWindowSizeFn.4826c9d6.js";import"./onMountedOrActivated.62880f89.js";import"./index.f3978ac3.js";import"./useSortable.98befea8.js";import"./RedoOutlined.7c6eecfd.js";import"./FullscreenOutlined.b91c2893.js";import"./index.87ed27e4.js";import"./index.5eb2f555.js";import"./responsiveObserve.c545f1cc.js";import"./usePageContext.1ed373ad.js";import"./index.37dca516.js";import"./index.c9ee6373.js";import"./ArrowLeftOutlined.8f27299a.js";var I=f({components:{BasicTable:e,Tag:c,Image:m,PageWrapper:l,TableAction:o,DetailModal:u},setup(){const{t:e}=d(),o=i(),[l,{openModal:c}]=p(),[m,{reload:u}]=t({api:s,columns:a(),bordered:!0,useSearchForm:!0,showIndexColumn:!1,formConfig:r(),showTableSetting:!0,actionColumn:{width:80,title:e("routes.Information.infoTable.action"),dataIndex:"action",slots:{customRender:"action"}}});return{t:e,registerTable:m,registerModal:l,getTagName:e=>{var t;let a="";return null==(t=o.tags)||t.forEach((t=>{t.id===e&&(a=t.tagName)})),a},handleEdit:function(e){let t=[];t.push(e.imageUrl),e.imageUrl=t,c(!0,{record:e,isUpdate:!0})},handleDelete:function(e){n(e.id)},handleSuccess:function(){u()},handleCreate:function(){c(!0,{isUpdate:!1})}}}});I.render=function(e,t,o,a,r,i){const s=j("Tag"),n=j("Image"),d=j("a-button"),l=j("TableAction"),c=j("BasicTable"),m=j("DetailModal"),u=j("PageWrapper");return g(),b(u,{title:e.t("routes.Information.Submodule.infoManage")},{default:h((()=>[x(c,{onRegister:e.registerTable},{tag:h((({record:t})=>[x(s,{color:"success"},{default:h((()=>[T(C(e.getTagName(t.tag)),1)])),_:2},1024)])),imageUrl:h((({record:e})=>[x(n,{width:80,src:e.imageUrl},null,8,["src"])])),toolbar:h((()=>[x(d,{type:"primary",onClick:e.handleCreate},{default:h((()=>[T(C(e.t("routes.Information.button.add")),1)])),_:1},8,["onClick"])])),action:h((({record:t})=>[x(l,{actions:[{icon:"clarity:note-edit-line",onClick:e.handleEdit.bind(null,t)},{icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"是否确认删除",confirm:e.handleDelete.bind(null,t)}}]},null,8,["actions"])])),_:1},8,["onRegister"]),x(m,{onRegister:e.registerModal,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])])),_:1},8,["title"])};export default I;
