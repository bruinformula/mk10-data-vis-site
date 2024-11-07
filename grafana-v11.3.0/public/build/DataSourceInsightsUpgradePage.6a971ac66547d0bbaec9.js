"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[876],{8771:(i,r,t)=>{t.d(r,{H:()=>a});var n=t(74848),u=t(40845),o=t(77454),_=t(85464);const a=({uid:c})=>{(0,_.oU)(c);const l=(0,u.$j)();return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.Iz,{featureName:"data source usage insights",featureId:"data-source-insights"}),(0,n.jsx)(o.El,{listItems:["Demonstrate and improve the value of your observability service by keeping track of user engagement","Keep Grafana performant by identifying and fixing slow, error-prone data sources","Clean up your instance by finding and removing unused data sources","Review individual data source usage insights at a glance in the UI, sort search results by usage and errors, or dig into detailed usage logs"],image:`datasource-insights-${l.isLight?"light":"dark"}.png`,featureName:"data source usage insights",description:"Usage Insights provide detailed information about data source usage, like the number of views, queries, and errors users have experienced. You can use this to improve users\u2019 experience and troubleshoot issues",featureUrl:"https://grafana.com/docs/grafana/latest/enterprise/usage-insights/dashboard-datasource-insights"})]})}},96969:(i,r,t)=>{t.r(r),t.d(r,{DataSourceInsightsUpgradePage:()=>d,default:()=>g});var n=t(74848),u=t(54148),o=t(21780),_=t(17422),a=t(85464),c=t(31678),l=t(8771);const d=()=>{const{uid:P=""}=(0,u.g)(),M=(0,a.$m)("insights"),O=(0,c.useSelector)(U=>U.navIndex),h=(0,_.tc)(O,`datasource-insights-${P}`,M);return(0,n.jsx)(o.YW,{navId:"datasources",pageNav:h.main,children:(0,n.jsx)(o.YW.Contents,{children:(0,n.jsx)(l.H,{uid:P})})})},g=d},458:(i,r,t)=>{t.d(r,{C:()=>o});var n=t(96540),u=t(83883);const o=(0,n.createContext)(u.I)},11084:(i,r,t)=>{t.d(r,{$k:()=>B,BY:()=>h,S4:()=>A,Tn:()=>T,US:()=>U,Um:()=>C,_e:()=>R,aM:()=>S,hx:()=>p,k9:()=>I,oU:()=>O,u1:()=>L,xw:()=>v});var n=t(96540),u=t(97007),o=t(28138),_=t(10096),a=t(31678),c=t(28444),l=t(11959),d=t(34258),g=t(458),P=t(36227),M=t(54226);const O=s=>{const e=(0,a.useDispatch)();(0,n.useEffect)(()=>(e((0,d.PK)(s)),function(){e((0,u.N)({cleanupAction:D=>D.dataSourceSettings=P.IJ}))}),[s,e])},h=s=>{const e=(0,a.useDispatch)(),E=S();return()=>e((0,d.Ge)(s,E.Edit))},U=()=>{const s=(0,a.useDispatch)(),e=(0,a.useSelector)(D=>D.dataSources.isLoadingDataSources),E=(0,a.useSelector)(D=>D.dataSources.dataSources);return(0,n.useEffect)(()=>{s((0,d.bn)())},[s]),{isLoading:e,dataSources:E}},f=s=>{const e=useDispatch();useEffect(()=>{e(loadDataSource(s))},[e,s])},p=()=>{const s=(0,a.useDispatch)();(0,n.useEffect)(()=>{s((0,d.G2)())},[s])},C=()=>{const s=(0,a.useDispatch)(),e=S();return E=>{s((0,d.du)(E,e.Edit))}},I=()=>{const s=(0,a.useDispatch)();return async e=>s((0,d.jB)(e))},B=()=>{const s=(0,a.useDispatch)(),{name:e}=(0,a.useSelector)(E=>E.dataSources.dataSource);return()=>{o.A.publish(new c.bY({title:"Delete",text:`Are you sure you want to delete the "${e}" data source?`,yesText:"Delete",icon:"trash-alt",onConfirm:()=>s((0,d.Qq)())}))}},v=s=>(0,a.useSelector)(e=>(0,M.U4)(e.dataSources,s)),T=s=>{const e=v(s);return(0,l.h)(e)},A=s=>(0,a.useSelector)(e=>(0,M.Fj)(e.dataSources,s)),R=()=>(0,a.useSelector)(s=>s.dataSourceSettings),L=s=>{const e=v(s),E=e.readOnly===!0,D=_.TP.hasPermissionInMetadata(a.AccessControlAction.DataSourcesWrite,e),m=_.TP.hasPermissionInMetadata(a.AccessControlAction.DataSourcesDelete,e);return{readOnly:E,hasWriteRights:D,hasDeleteRights:m}},S=()=>(0,n.useContext)(g.C)},85464:(i,r,t)=>{t.d(r,{$k:()=>o.$k,$m:()=>_.$m,BY:()=>o.BY,Bs:()=>a.Bs,CR:()=>u.C,C_:()=>a.C_,S4:()=>o.S4,Tk:()=>a.Tk,Tn:()=>o.Tn,US:()=>o.US,Um:()=>o.Um,_e:()=>o._e,aM:()=>o.aM,du:()=>n.du,eB:()=>a.eB,hp:()=>c.hp,hx:()=>o.hx,jz:()=>a.jz,k9:()=>o.k9,lv:()=>c.lv,oU:()=>o.oU,rb:()=>a.rb,u1:()=>o.u1,wC:()=>c.wC,xs:()=>c.xs,xw:()=>o.xw,zC:()=>c.zC});var n=t(34258),u=t(458),o=t(11084),_=t(74984),a=t(36227),c=t(54226)},11959:(i,r,t)=>{t.d(r,{h:()=>o});var n=t(76885),u=t(71733);const o=_=>{const a=JSON.stringify({datasource:_.name,context:"explore"});return n.kM.renderUrl(u.I.assureBaseUrl("/explore"),{left:a})}}}]);

//# sourceMappingURL=DataSourceInsightsUpgradePage.6a971ac66547d0bbaec9.js.map