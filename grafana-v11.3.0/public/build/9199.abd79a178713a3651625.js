"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[9199],{99199:(x,i,n)=>{n.r(i),n.d(i,{default:()=>E});var t=n(74848),o=n(42418),d=n(51488),g=n(70383),l=n(49785),A=n(67061),f=n(55852),j=n(40715),y=n(31678),p=n(61410),O=n(26627),S=n(21607),F=n(57220),u=n(78742),M=n(72399),N=n(88467),L=n(23807);const v={smtp_require_tls:!0},P=({config:a,alertManagerSourceName:e})=>{const c=(0,y.useDispatch)();(0,j.o)(r=>r.unifiedAlerting.saveAMConfig=N.jA);const{loading:s,error:m}=(0,p.$)(r=>r.saveAMConfig),h=(0,F.AL)(e),C=(0,l.mN)({defaultValues:JSON.parse(JSON.stringify({...v,...a.alertmanager_config.global??{}}))}),{handleSubmit:V,formState:{errors:B}}=C,D=r=>{c((0,O.RW)({newConfig:{...a,alertmanager_config:{...a.alertmanager_config,global:(0,M.FN)(r)}},oldConfig:a,alertManagerSourceName:e,successMessage:"Global config updated.",redirectPath:(0,u.nL)("/alerting/notifications",e)}))};return(0,t.jsx)(l.Op,{...C,children:(0,t.jsxs)("form",{onSubmit:V(D),children:[m&&(0,t.jsx)(o.F,{severity:"error",title:"Error saving receiver",children:m.message||String(m)}),S.U.map(r=>(0,t.jsx)(L.e,{readOnly:h,defaultValue:v[r.propertyName],option:r,error:B[r.propertyName],pathPrefix:""},r.propertyName)),(0,t.jsx)("div",{children:(0,t.jsxs)(A.B,{children:[!h&&(0,t.jsxs)(t.Fragment,{children:[s&&(0,t.jsx)(f.$n,{disabled:!0,icon:"spinner",variant:"primary",children:"Saving..."}),!s&&(0,t.jsx)(f.$n,{type:"submit",children:"Save global config"})]}),(0,t.jsx)(f.z9,{disabled:s,fill:"outline",variant:"secondary",href:(0,u.nL)("alerting/notifications",e),children:"Cancel"})]})})]})})},E=()=>{const{selectedAlertmanager:a}=(0,g.VI)(),{data:e,isLoading:c,error:s}=(0,d.f)(a);return c&&!e?"loading...":s?(0,t.jsx)(o.F,{severity:"error",title:"Failed to fetch notification template",children:String(s)}):e?(0,t.jsx)(P,{config:e,alertManagerSourceName:a}):null}},51488:(x,i,n)=>{n.d(i,{f:()=>o});var t=n(82843);function o(d,g){const l=t.m.endpoints.getAlertmanagerConfiguration.useQuery(d??"",{refetchOnMountOrArgChange:!0,...g,skip:!d});return{...l,error:l.error}}}}]);

//# sourceMappingURL=9199.abd79a178713a3651625.js.map