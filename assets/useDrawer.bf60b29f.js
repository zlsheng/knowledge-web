var e=Object.defineProperty,t=Object.prototype.hasOwnProperty,o=Object.getOwnPropertySymbols,s=Object.prototype.propertyIsEnumerable,l=(t,o,s)=>o in t?e(t,o,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[o]=s,a=(e,a)=>{for(var r in a||(a={}))t.call(a,r)&&l(e,r,a[r]);if(o)for(var r of o(a))s.call(a,r)&&l(e,r,a[r]);return e};import{D as r}from"./index.ba019837.js";import{al as n,h as i,g as c,bW as u,aT as p,ay as d,bB as f,cn as g,bT as b,bE as h,S as w,bY as v,bg as m}from"./index.9eab7d25.js";import{d as C,e as k,Y as y,Q as D,R as x,F as $,$ as O,x as P,_ as B,a0 as T,q as _,S as F,c as j,f as S,g as L,w as H,G as V,y as A,A as I,n as N,a4 as R,a9 as E,k as M,a2 as W,r as Y}from"./vendor.445a818e.js";import{A as q}from"./ArrowLeftOutlined.8f27299a.js";const{t:z}=i(),G={confirmLoading:n.bool,showCancelBtn:n.bool.def(!0),cancelButtonProps:Object,cancelText:n.string.def(z("common.cancelText")),showOkBtn:n.bool.def(!0),okButtonProps:Object,okText:n.string.def(z("common.okText")),okType:n.string.def("primary"),showFooter:n.bool,footerHeight:{type:[String,Number],default:60}},Q=a({isDetail:n.bool,title:n.string.def(""),loadingText:n.string,showDetailBack:n.bool.def(!0),visible:n.bool,loading:n.bool,maskClosable:n.bool.def(!0),getContainer:{type:[Object,String]},scrollOptions:{type:Object,default:null},closeFunc:{type:[Function,Object],default:null},triggerWindowResize:n.bool,destroyOnClose:n.bool},G);var J=C({name:"BasicDrawerFooter",props:a(a({},G),{height:{type:String,default:"60px"}}),emits:["ok","close"],setup(e,{emit:t}){const{prefixCls:o}=c("basic-drawer-footer");return{handleOk:function(){t("ok")},prefixCls:o,handleClose:function(){t("close")},getStyle:k((()=>{const t=`${e.height}`;return{height:t,lineHeight:t}}))}}});J.render=function(e,t,o,s,l,a){const r=y("a-button");return e.showFooter||e.$slots.footer?(D(),x("div",{key:0,class:e.prefixCls,style:e.getStyle},[e.$slots.footer?O(e.$slots,"footer",{key:1}):(D(),x($,{key:0},[O(e.$slots,"insertFooter"),e.showCancelBtn?(D(),x(r,P({key:0},e.cancelButtonProps,{onClick:e.handleClose,class:"mr-2"}),{default:B((()=>[_(F(e.cancelText),1)])),_:1},16,["onClick"])):T("",!0),O(e.$slots,"centerFooter"),e.showOkBtn?(D(),x(r,P({key:1,type:e.okType,onClick:e.handleOk},e.okButtonProps,{class:"mr-2",loading:e.confirmLoading}),{default:B((()=>[_(F(e.okText),1)])),_:1},16,["type","onClick","loading"])):T("",!0),O(e.$slots,"appendFooter")],64))],6)):T("",!0)};var K=C({name:"BasicDrawerHeader",components:{BasicTitle:u,ArrowLeftOutlined:q},props:{isDetail:n.bool,showDetailBack:n.bool,title:n.string},emits:["close"],setup(e,{emit:t}){const{prefixCls:o}=c("basic-drawer-header");return{prefixCls:o,handleClose:function(){t("close")}}}});const U={key:1};K.render=function(e,t,o,s,l,a){const r=y("BasicTitle"),n=y("ArrowLeftOutlined");return e.isDetail?(D(),x("div",{key:1,class:[e.prefixCls,`${e.prefixCls}--detail`]},[j("span",{class:`${e.prefixCls}__twrap`},[e.showDetailBack?(D(),x("span",{key:0,onClick:t[1]||(t[1]=(...t)=>e.handleClose&&e.handleClose(...t))},[j(n,{class:`${e.prefixCls}__back`},null,8,["class"])])):T("",!0),e.title?(D(),x("span",U,F(e.title),1)):T("",!0)],2),j("span",{class:`${e.prefixCls}__toolbar`},[O(e.$slots,"titleToolbar")],2)],2)):(D(),x(r,{key:0,class:e.prefixCls},{default:B((()=>[O(e.$slots,"title"),_(" "+F(e.$slots.title?"":e.title),1)])),_:3},8,["class"]))};var X=C({components:{Drawer:r,ScrollContainer:p,DrawerFooter:J,DrawerHeader:K},inheritAttrs:!1,props:Q,emits:["visible-change","ok","close","register"],setup(e,{emit:t}){const o=S(!1),s=f(),l=S(null),{t:r}=i(),{prefixVar:n,prefixCls:u}=c("basic-drawer"),p={setDrawerProps:function(e){l.value=g(V(l)||{},e),Reflect.has(e,"visible")&&(o.value=!!e.visible)},emitVisible:void 0},h=A();h&&t("register",p,h.uid);const w=k((()=>g(I(e),V(l)))),v=k((()=>{const e=a(a(a({placement:"right"},V(s)),V(w)),{visible:V(o)});e.title=void 0;const{isDetail:t,width:l,wrapClassName:r,getContainer:i}=e;if(t){l||(e.width="100%");const t=`${u}__detail`;e.wrapClassName=r?`${r} ${t}`:t,i||(e.getContainer=`.${n}-layout-content`)}return e})),m=k((()=>a(a({},s),V(v)))),C=k((()=>{const{footerHeight:e,showFooter:t}=V(v);return t&&e?b(e)?`${e}px`:`${e.replace("px","")}px`:"0px"})),y=k((()=>({position:"relative",height:`calc(100% - ${V(C)})`}))),D=k((()=>{var e;return!!(null==(e=V(v))?void 0:e.loading)}));return L((()=>{o.value=e.visible})),H((()=>o.value),(e=>{N((()=>{var o;t("visible-change",e),h&&(null==(o=p.emitVisible)||o.call(p,e,h.uid))}))})),{onClose:function(e){return s=this,l=null,a=function*(){const{closeFunc:s}=V(v);if(t("close",e),s&&d(s)){const e=yield s();o.value=!e}else o.value=!1},new Promise(((t,o)=>{var r=t=>{try{i(a.next(t))}catch(e){o(e)}},n=t=>{try{i(a.throw(t))}catch(e){o(e)}},i=e=>e.done?t(e.value):Promise.resolve(e.value).then(r,n);i((a=a.apply(s,l)).next())}));var s,l,a},t:r,prefixCls:u,getMergeProps:w,getScrollContentStyle:y,getProps:v,getLoading:D,getBindValues:m,getFooterHeight:C,handleOk:function(){t("ok")}}}});X.render=function(e,t,o,s,l,a){const r=y("DrawerHeader"),n=y("ScrollContainer"),i=y("DrawerFooter"),c=y("Drawer"),u=R("loading");return D(),x(c,P({class:e.prefixCls,onClose:e.onClose},e.getBindValues),E({default:B((()=>[M(j(n,{style:e.getScrollContentStyle,"loading-tip":e.loadingText||e.t("common.loadingText")},{default:B((()=>[O(e.$slots,"default")])),_:3},8,["style","loading-tip"]),[[u,e.getLoading]]),j(i,P(e.getProps,{onClose:e.onClose,onOk:e.handleOk,height:e.getFooterHeight}),E({_:2},[W(Object.keys(e.$slots),(t=>({name:t,fn:B((o=>[O(e.$slots,t,o)]))})))]),1040,["onClose","onOk","height"])])),_:2},[e.$slots.title?{name:"title",fn:B((()=>[O(e.$slots,"title")]))}:{name:"title",fn:B((()=>[j(r,{title:e.getMergeProps.title,isDetail:e.isDetail,showDetailBack:e.showDetailBack,onClose:e.onClose},{titleToolbar:B((()=>[O(e.$slots,"titleToolbar")])),_:1},8,["title","isDetail","showDetailBack","onClose"])]))}]),1040,["class","onClose"])};const Z=Y({}),ee=Y({});function te(){const e=S(null),t=S(!1),o=S("");const s=()=>{const t=V(e);return t||v("useDrawer instance is undefined!"),t};return[function(s,l){m((()=>{e.value=null,t.value=null,Z[V(o)]=null})),V(t)&&h()&&s===V(e)||(o.value=l,e.value=s,t.value=!0,s.emitVisible=(e,t)=>{ee[t]=e})},{setDrawerProps:e=>{var t;null==(t=s())||t.setDrawerProps(e)},getVisible:k((()=>ee[~~V(o)])),openDrawer:(e=!0,t,l=!0)=>{var a;if(null==(a=s())||a.setDrawerProps({visible:e}),!t)return;if(l)return Z[V(o)]=null,void(Z[V(o)]=I(t));w(I(Z[V(o)]),I(t))||(Z[V(o)]=I(t))}}]}const oe=e=>{const t=S(null),o=A(),s=S("");o||v("useDrawerInner instance is undefined!");const l=()=>{const e=V(t);if(e)return e;v("useDrawerInner instance is undefined!")};return L((()=>{const t=Z[V(s)];t&&e&&d(e)&&N((()=>{e(t)}))})),[(e,l)=>{m((()=>{t.value=null})),s.value=l,t.value=e,null==o||o.emit("register",e,l)},{changeLoading:(e=!0)=>{var t;null==(t=l())||t.setDrawerProps({loading:e})},changeOkLoading:(e=!0)=>{var t;null==(t=l())||t.setDrawerProps({confirmLoading:e})},getVisible:k((()=>ee[~~V(s)])),closeDrawer:()=>{var e;null==(e=l())||e.setDrawerProps({visible:!1})},setDrawerProps:e=>{var t;null==(t=l())||t.setDrawerProps(e)}}]};export{X as _,oe as a,te as u};
