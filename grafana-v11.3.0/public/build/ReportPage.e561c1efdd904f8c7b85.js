"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[2560],{80304:(x,i,t)=>{t.r(i),t.d(i,{ReportPage:()=>m,default:()=>S});var n=t(74848),d=t(96540),g=t(71468),p=t(54148),v=t(31906),P=t(13680),j=t(72321),E=t(24631),h=t(4179),C=t(32264),f=t(21780),L=t(39419),N=t(19065);const I=({report:a,editMode:e})=>{const{name:o,dashboardName:s=""}=a;return{text:!a.id&&!e?"New report":o||s}},T=({children:a,editMode:e,isLoading:o,className:s,report:c,...r})=>{(0,d.useEffect)(()=>{document.title=`Reporting: ${e?"Edit report":"New report"}`},[e]);const l=I({report:c,editMode:e});return(0,n.jsx)(f.YW,{navId:"reports-list",pageNav:l,children:(0,n.jsx)(f.YW.Contents,{children:(0,n.jsx)("div",{...r,children:o?(0,n.jsx)(L.A,{}):C.$.rendererAvailable?a:(0,n.jsx)(N.c,{variant:"error"})})})})},D=(a,e)=>{const{report:o,isLoading:s}=a.reports;return{existingReport:!!o.id,isLoading:s,report:o}},A={loadReport:E.N1,clearReportState:h.$J},O=(0,g.connect)(D,A),m=({existingReport:a,isLoading:e,loadReport:o,report:s,clearReportState:c})=>{const{id:r,step:l=P.StepKey.SelectDashboard}=(0,p.g)(),R=!!(r&&e);(0,d.useEffect)(()=>(r&&o(parseInt(r,10)),()=>{c()}),[r,o,c]);const W=(0,d.useCallback)(()=>{const u=j.E.find(({id:B})=>B===l)?.component;return u?(0,n.jsx)(u,{reportId:r}):null},[l,r]);return(0,n.jsx)(T,{isLoading:R,editMode:a,report:s,children:R?(0,n.jsx)(v.a,{}):W()})},S=O(m)},31906:(x,i,t)=>{t.d(i,{a:()=>p});var n=t(74848),d=t(90613),g=t(39558);const p=({text:v="Loading..."})=>(0,n.jsx)(d.a,{display:"flex",alignItems:"center",direction:"column",justifyContent:"center",paddingTop:10,children:(0,n.jsx)(g._,{text:v})})}}]);

//# sourceMappingURL=ReportPage.e561c1efdd904f8c7b85.js.map