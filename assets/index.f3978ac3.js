import{a3 as e,y as t,aj as a}from"./index.9eab7d25.js";import{d as n,a as r,e as o,c as i}from"./vendor.445a818e.js";function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var s=e(n({name:"ADivider",props:{prefixCls:String,type:{type:String,default:"horizontal"},dashed:{type:Boolean,default:!1},orientation:{type:String,default:"center"}},setup:function(e,n){var s=n.slots,c=r("configProvider",t).getPrefixCls,u=o((function(){return c("divider",e.prefixCls)})),d=o((function(){var t,a=e.type,n=e.dashed,r=e.orientation,o=r.length>0?"-"+r:r,i=u.value;return l(t={},i,!0),l(t,"".concat(i,"-").concat(a),!0),l(t,"".concat(i,"-with-text").concat(o),s.default),l(t,"".concat(i,"-dashed"),!!n),t}));return function(){var e,t=a(null===(e=s.default)||void 0===e?void 0:e.call(s));return i("div",{class:d.value,role:"separator"},[t.length?i("span",{class:"".concat(u.value,"-inner-text")},[t]):null])}}}));export{s as D};
