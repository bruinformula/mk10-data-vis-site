"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[4650,4492],{7882:(y,D,t)=>{t.r(D),t.d(D,{default:()=>o});var _=t(74848),u=t(4213),E=t.n(u),i=t(96540),m=t(71468),A=t(54148),g=t(39070),B=t(90708),L=t(72436),R=t(72724),K=t(32264),W=t(76888),h=t(55087),S=t(20470);const v=e=>({dashboard:e.dashboard.getModel()}),I={initDashboard:S.vR},o=(0,m.connect)(v,I)(({initDashboard:e,route:n,queryParams:a,dashboard:s})=>{const{keybindings:r}=(0,W.Il)(),[P,f]=(0,i.useState)(null),[C,T]=(0,i.useState)(!1),{slug:c,uid:M,type:U}=(0,A.g)();(0,i.useEffect)(()=>{e({urlSlug:c,urlUid:M,urlType:U,routeName:n.routeName,fixUrl:!1,keybindingSrv:r})},[c,M,U,n.routeName,r,e]);const l=()=>parseInt(a.panelId??"0",10);return(0,i.useEffect)(()=>{if(s){const z=d=>{if(!d||d.state!==g.Gu.Done&&d.state!==g.Gu.Streaming)return;const F=d.series,N=a.timezone||s?.timezone;let j={defaults:{},overrides:[]};const V=(0,B.we)({data:F,theme:K.$.theme2,fieldConfig:O?.fieldConfig||j,replaceVariables:Q=>Q,timeZone:N}),G=(0,L._O)([V[0]],{}),$=new Blob(["\uFEFF",G],{type:"text/csv;charset=utf-8"}),X=`${O?.getDisplayTitle()}-data-${(0,R.LE)(new Date)}.csv`;(0,u.saveAs)($,X)},O=s.getPanelByUrlId(a.panelId);if(!O){T(!0);return}f(O),O.getQueryRunner().getData({withTransforms:!0,withFieldConfig:!0}).subscribe({next:d=>z(d)})}},[s,a.panelId,a.timezone]),(0,_.jsx)(h.SoloPanel,{dashboard:s,notFound:C,panel:P,panelId:l(),timezone:a.timezone})})},55087:(y,D,t)=>{t.r(D),t.d(D,{SoloPanel:()=>I,SoloPanelPage:()=>v,default:()=>x});var _=t(74848),u=t(32196),E=t(96540),i=t(71468),m=t(54148),A=t(70713),g=t(40845),B=t(42418),L=t(76888),R=t(39569),K=t(20470);const W=o=>({dashboard:o.dashboard.getModel()}),h={initDashboard:K.vR},S=(0,i.connect)(W,h),v=({route:o,queryParams:e,dashboard:n,initDashboard:a})=>{const[s,r]=(0,E.useState)(null),[P,f]=(0,E.useState)(!1),{keybindings:C}=(0,L.Il)(),{slug:T,uid:c,type:M}=(0,m.g)();(0,E.useEffect)(()=>{a({urlSlug:T,urlUid:c,urlType:M,routeName:o.routeName,fixUrl:!1,keybindingSrv:C})},[T,c,M,o.routeName,a,C]);const U=(0,E.useCallback)(()=>parseInt(e.panelId??"0",10),[e.panelId]);return(0,E.useEffect)(()=>{if(n){const l=n.getPanelByUrlId(e.panelId);if(!l){f(!0);return}l&&n.exitViewPanel(l),r(l),n.initViewPanel(l)}},[n,e.panelId]),(0,_.jsx)(I,{dashboard:n,notFound:P,panel:s,panelId:U(),timezone:e.timezone})},I=({dashboard:o,notFound:e,panel:n,panelId:a,timezone:s})=>{const r=(0,g.of)(p);return e?(0,_.jsx)(B.F,{severity:"error",title:`Panel with id ${a} not found`}):!n||!o?(0,_.jsx)("div",{children:"Loading & initializing dashboard"}):(0,_.jsx)("div",{className:r.container,children:(0,_.jsx)(A.Ay,{children:({width:P,height:f})=>P===0?null:(0,_.jsx)(R.L,{stateKey:n.key,width:P,height:f,dashboard:o,panel:n,isEditing:!1,isViewing:!0,lazy:!1,timezone:s,hideMenu:!0})})})},x=S(v),p=o=>({container:(0,u.css)({position:"fixed",bottom:0,right:0,margin:0,left:0,top:0,width:"100%",height:"100%"})})}}]);

//# sourceMappingURL=CSVExportPage.a3a8080cfe4b9508ee75.js.map