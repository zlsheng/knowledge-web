import{C as a}from"./index.6887baff.js";import"./index.9eab7d25.js";import"./index.8e1683e4.js";import"./index.5eb2f555.js";import t from"./VisitAnalysis.7ffab5cd.js";import s from"./VisitAnalysisBar.8528e97b.js";import{d as e,f as i,Y as r,Q as n,R as o,x as b,_ as p,c,a0 as d}from"./vendor.445a818e.js";import"./index.87ed27e4.js";import"./UpOutlined.241fc329.js";import"./PlusOutlined.6dfdcf6e.js";import"./responsiveObserve.c545f1cc.js";import"./useECharts.a21bc6af.js";import"./props.4c53b92e.js";var f=e({components:{Card:a,VisitAnalysis:t,VisitAnalysisBar:s},setup(){const a=i("tab1");return{tabListTitle:[{key:"tab1",tab:"流量趋势"},{key:"tab2",tab:"访问量"}],activeKey:a,onTabChange:function(t){a.value=t}}}});const m={key:0},l={key:1};f.render=function(a,t,s,e,i,f){const y=r("VisitAnalysis"),j=r("VisitAnalysisBar"),u=r("Card");return n(),o(u,b({"tab-list":a.tabListTitle},a.$attrs,{"active-tab-key":a.activeKey,onTabChange:a.onTabChange}),{default:p((()=>["tab1"===a.activeKey?(n(),o("p",m,[c(y)])):d("",!0),"tab2"===a.activeKey?(n(),o("p",l,[c(j)])):d("",!0)])),_:1},16,["tab-list","active-tab-key","onTabChange"])};export default f;
