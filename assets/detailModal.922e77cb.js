var e=Object.defineProperty,t=Object.prototype.hasOwnProperty,i=Object.getOwnPropertySymbols,r=Object.prototype.propertyIsEnumerable,o=(t,i,r)=>i in t?e(t,i,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[i]=r,s=(e,t,i)=>new Promise(((r,o)=>{var s=e=>{try{n(i.next(e))}catch(t){o(t)}},a=e=>{try{n(i.throw(e))}catch(t){o(t)}},n=e=>e.done?r(e.value):Promise.resolve(e.value).then(s,a);n((i=i.apply(e,t)).next())}));import{_ as a,b as n}from"./useModal.7f0d4937.js";import{e as l,f as d}from"./useForm.551ed3f6.js";import{d as c}from"./tableData.59ae2a9f.js";import{c as m}from"./Editor.9f53a30f.js";import{h as p}from"./index.9eab7d25.js";import{d as f,Y as u,Q as j,R as b,x as y,_ as g,c as h}from"./vendor.445a818e.js";import"./useWindowSizeFn.4826c9d6.js";import"./FullscreenOutlined.b91c2893.js";import"./index.16147537.js";import"./index.5eb2f555.js";import"./responsiveObserve.c545f1cc.js";import"./_baseIteratee.4c28a80c.js";import"./get.0c0a01c7.js";import"./findIndex.2cb8eacb.js";import"./index.87ed27e4.js";import"./RedoOutlined.7c6eecfd.js";import"./index.81514f39.js";import"./index.defcffb6.js";import"./UpOutlined.241fc329.js";import"./index.286ee882.js";import"./uuid.c3296435.js";import"./uniqBy.c7a7bfeb.js";import"./index.f3978ac3.js";import"./onMountedOrActivated.62880f89.js";var v=f({name:"DetailModal",components:{BasicModal:a,BasicForm:l},emits:["success","register"],setup(e,{emit:a}){const{t:l}=p(),[f,{setFieldsValue:u,resetFields:j,validate:b}]=d({labelWidth:100,schemas:c,showActionButtonGroup:!1,actionColOptions:{span:23}});let y={};const[g,{setModalProps:h,closeModal:v}]=n((e=>s(this,null,(function*(){yield j(),h({confirmLoading:!1}),yield u(((e,s)=>{for(var a in s||(s={}))t.call(s,a)&&o(e,a,s[a]);if(i)for(var a of i(s))r.call(s,a)&&o(e,a,s[a]);return e})({},e.detail)),y=e.detail}))));return{registerModal:g,registerForm:f,handleSubmit:function(){return s(this,null,(function*(){try{const e=yield b();h({confirmLoading:!0}),y.detail=e.detail,yield m(y),v(),a("success")}finally{h({confirmLoading:!1})}}))},t:l}}});v.render=function(e,t,i,r,o,s){const a=u("BasicForm"),n=u("BasicModal");return j(),b(n,y(e.$attrs,{onRegister:e.registerModal,title:e.t("routes.Information.newsDetail.editDetail"),onOk:e.handleSubmit,width:"50%",height:"500"}),{default:g((()=>[h(a,{onRegister:e.registerForm},null,8,["onRegister"])])),_:1},16,["onRegister","title","onOk"])};export default v;
