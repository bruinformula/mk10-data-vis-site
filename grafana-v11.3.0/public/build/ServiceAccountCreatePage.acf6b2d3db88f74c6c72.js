"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[4176],{72235:(K,d,e)=>{e.d(d,{l:()=>l});var o=e(74848),t=e(32196),O=e(96540),D=e(49785);function l({defaultValues:R,onSubmit:r,validateOnMount:M=!1,validateFieldsOnMount:u,children:c,validateOn:i="onSubmit",maxWidth:a=600,...n}){const{handleSubmit:E,trigger:C,formState:v,...g}=(0,D.mN)({mode:i,defaultValues:R});return(0,O.useEffect)(()=>{M&&C(u)},[C,u,M]),(0,o.jsx)("form",{className:(0,t.css)({maxWidth:a!=="none"?a+"px":a,width:"100%"}),onSubmit:E(r),...n,children:c({errors:v.errors,formState:v,trigger:C,...g})})}},89062:(K,d,e)=>{e.d(d,{y:()=>M});var o=e(74848),t=e(96540),O=e(41053),D=e(10096),l=e(31678),R=e(37425),r=e(85927);const M=({basicRole:u,roles:c,userId:i,orgId:a,onBasicRoleChange:n,roleOptions:E,disabled:C,basicRoleDisabled:v,basicRoleDisabledMessage:g,apply:T=!1,onApplyRoles:L,pendingRoles:P,maxWidth:m,width:U,isLoading:p})=>{const[{loading:B,value:A=c||[]},f]=(0,O.A)(async()=>{try{if(c)return c;if(T&&P?.length)return P;if(D.TP.hasPermission(l.AccessControlAction.ActionUserRolesList)&&i>0)return await(0,r.Xh)(i,a)}catch{console.error("Error loading options")}return[]},[a,i,P,c]);(0,t.useEffect)(()=>{a&&f()},[f,a]);const j=async h=>{T?L&&L(h,i,a):(await(0,r.eA)(h,i,a),await f())},W=D.TP.hasPermission(l.AccessControlAction.ActionUserRolesAdd)&&D.TP.hasPermission(l.AccessControlAction.ActionUserRolesRemove);return(0,o.jsx)(R.n,{appliedRoles:A,basicRole:u,onRolesChange:j,onBasicRoleChange:n,roleOptions:E,isLoading:B||p,disabled:C,basicRoleDisabled:v,basicRoleDisabledMessage:g,showBasicRole:!0,apply:T,canUpdateRoles:W,maxWidth:m,width:U})}},5133:(K,d,e)=>{e.d(d,{r:()=>R});var o=e(74848),t=e(62625),O=e(90182);const l=Object.values(t.X).filter(r=>r!==t.X.None).map(r=>({label:r,value:r}));function R({value:r,onChange:M,"aria-label":u,inputId:c,autoFocus:i,...a}){return(0,o.jsx)(O.l6,{inputId:c,value:r,options:l,onChange:n=>M(n.value??t.X.None),placeholder:"Choose role...","aria-label":u,autoFocus:i,...a})}},63606:(K,d,e)=>{e.r(d),e.d(d,{ServiceAccountCreatePage:()=>T,default:()=>L});var o=e(74848),t=e(96540),O=e(17172),D=e(39601),l=e(84167),R=e(88575),r=e(10354),M=e(55852),u=e(72235),c=e(21780),i=e(89062),a=e(85927),n=e(10096),E=e(31678),C=e(5133);const v=async P=>{const m=await(0,O.AI)().post("/api/serviceaccounts/",P);return await n.TP.fetchUserPermissions(),m},g=async(P,m)=>(0,O.AI)().patch(`/api/serviceaccounts/${P}`,m),T=({})=>{const[P,m]=(0,t.useState)([]),[U,p]=(0,t.useState)([]),B=n.TP.user.orgId,[A,f]=(0,t.useState)({id:0,orgId:n.TP.user.orgId,role:n.TP.licensedAccessControlEnabled()?E.OrgRole.None:E.OrgRole.Viewer,tokens:0,name:"",login:"",isDisabled:!1,createdAt:"",teams:[]});(0,t.useEffect)(()=>{async function _(){try{if(n.TP.hasPermission(E.AccessControlAction.ActionRolesList)){let s=await(0,a.RL)(B);m(s)}}catch(s){console.error("Error loading options",s)}}n.TP.licensedAccessControlEnabled()&&_()},[B]);const j=(0,t.useCallback)(async _=>{_.role=A.role;const s=await v(_);try{const I={avatarUrl:s.avatarUrl,id:s.id,isDisabled:s.isDisabled,login:s.login,name:s.name,orgId:s.orgId,role:s.role,tokens:s.tokens};await g(s.id,_),n.TP.licensedAccessControlEnabled()&&n.TP.hasPermission(E.AccessControlAction.ActionUserRolesAdd)&&n.TP.hasPermission(E.AccessControlAction.ActionUserRolesRemove)&&await(0,a.eA)(U,I.id,I.orgId)}catch(I){console.error(I)}D.Ny.push(`/org/serviceaccounts/${s.id}`)},[A.role,U]),W=_=>{f({...A,role:_})},h=(_,s,I)=>{p(_)};return(0,o.jsx)(c.YW,{navId:"serviceaccounts",pageNav:{text:"Create service account"},children:(0,o.jsx)(c.YW.Contents,{children:(0,o.jsx)(u.l,{onSubmit:j,validateOn:"onSubmit",children:({register:_,errors:s})=>(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(l.n,{children:[(0,o.jsx)(R.D,{label:"Display name",required:!0,invalid:!!s.name,error:s.name?"Display name is required":void 0,children:(0,o.jsx)(r.p,{id:"display-name-input",..._("name",{required:!0}),autoFocus:!0})}),(0,o.jsx)(R.D,{label:"Role",children:n.TP.licensedAccessControlEnabled()?(0,o.jsx)(i.y,{apply:!0,userId:A.id||0,orgId:A.orgId,basicRole:A.role,onBasicRoleChange:W,roleOptions:P,onApplyRoles:h,pendingRoles:U,maxWidth:"100%"}):(0,o.jsx)(C.r,{"aria-label":"Role",value:A.role,onChange:W})})]}),(0,o.jsx)(M.$n,{type:"submit",children:"Create"})]})})})})},L=T}}]);

//# sourceMappingURL=ServiceAccountCreatePage.acf6b2d3db88f74c6c72.js.map