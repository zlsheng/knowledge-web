import{cp as e}from"./index.9eab7d25.js";var o,r;function t(r="modal"){return e.get({url:o.getOperateType},{errorMessageMode:r})}function a(r,t="modal"){return e.post({url:o.operateList,params:r},{errorMessageMode:t})}function n(r,t="modal"){return e.get({url:`${o.operateInfo}${r}`},{errorMessageMode:t})}function p(r,t="modal"){return e.post({url:o.exceptionList,params:r},{errorMessageMode:t})}function s(r,t="modal"){return e.get({url:`${o.exceptionInfo}${r}`},{errorMessageMode:t})}(r=o||(o={})).operateList="/aop/operationPage",r.operateInfo="/aop/getOperationInfo/",r.exceptionList="/aop/exceptionPage",r.exceptionInfo="/aop/getExceptionInfo/",r.getOperateType="/aop/getOperateType";export{n as a,s as b,p as e,t as g,a as o};
