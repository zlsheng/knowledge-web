import{bQ as e,g as t}from"./index.9eab7d25.js";import{b as i}from"./index.0019ece6.js";import{d as s,Y as r,Q as o,R as n,F as a,a2 as d,c as p}from"./vendor.445a818e.js";import"./useDrawer.bf60b29f.js";import"./index.ba019837.js";import"./ArrowLeftOutlined.8f27299a.js";import"./index.f3978ac3.js";import"./createAsyncComponent.f0c6d319.js";import"./index.1029dabf.js";import"./uniqBy.c7a7bfeb.js";import"./_baseIteratee.4c28a80c.js";import"./get.0c0a01c7.js";import"./FullscreenOutlined.b91c2893.js";import"./index.da0f621f.js";import"./useWindowSizeFn.4826c9d6.js";import"./usePageContext.1ed373ad.js";import"./index.8e1683e4.js";import"./UpOutlined.241fc329.js";import"./PlusOutlined.6dfdcf6e.js";import"./RedoOutlined.7c6eecfd.js";import"./useSortable.98befea8.js";var c=s({name:"ThemeColorPicker",components:{CheckOutlined:e},props:{colorList:{type:Array,defualt:[]},event:{type:Number,default:()=>{}},def:{type:String}},setup(e){const{prefixCls:s}=t("setting-theme-picker");return{prefixCls:s,handleClick:function(t){e.event&&i(e.event,t)}}}});c.render=function(e,t,i,s,c,l){const m=r("CheckOutlined");return o(),n("div",{class:e.prefixCls},[(o(!0),n(a,null,d(e.colorList||[],(t=>(o(),n("span",{key:t,onClick:i=>e.handleClick(t),class:[`${e.prefixCls}__item`,{[`${e.prefixCls}__item--active`]:e.def===t}],style:{background:t}},[p(m)],14,["onClick"])))),128))],2)};export default c;
