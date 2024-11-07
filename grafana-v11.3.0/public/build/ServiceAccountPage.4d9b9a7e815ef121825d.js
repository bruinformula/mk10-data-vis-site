"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[6576],{89062:(ee,M,n)=>{n.d(M,{y:()=>D});var e=n(74848),c=n(96540),h=n(41053),I=n(10096),u=n(31678),f=n(37425),r=n(85927);const D=({basicRole:p,roles:x,userId:l,orgId:d,onBasicRoleChange:R,roleOptions:F,disabled:k,basicRoleDisabled:V,basicRoleDisabledMessage:E,apply:v=!1,onApplyRoles:o,pendingRoles:a,maxWidth:$,width:g,isLoading:P})=>{const[{loading:L,value:U=x||[]},T]=(0,h.A)(async()=>{try{if(x)return x;if(v&&a?.length)return a;if(I.TP.hasPermission(u.AccessControlAction.ActionUserRolesList)&&l>0)return await(0,r.Xh)(l,d)}catch{console.error("Error loading options")}return[]},[d,l,a,x]);(0,c.useEffect)(()=>{d&&T()},[T,d]);const W=async y=>{v?o&&o(y,l,d):(await(0,r.eA)(y,l,d),await T())},N=I.TP.hasPermission(u.AccessControlAction.ActionUserRolesAdd)&&I.TP.hasPermission(u.AccessControlAction.ActionUserRolesRemove);return(0,e.jsx)(f.n,{appliedRoles:U,basicRole:p,onRolesChange:W,onBasicRoleChange:R,roleOptions:F,isLoading:L||P,disabled:k,basicRoleDisabled:V,basicRoleDisabledMessage:E,showBasicRole:!0,apply:v,canUpdateRoles:N,maxWidth:$,width:g})}},5133:(ee,M,n)=>{n.d(M,{r:()=>f});var e=n(74848),c=n(62625),h=n(90182);const u=Object.values(c.X).filter(r=>r!==c.X.None).map(r=>({label:r,value:r}));function f({value:r,onChange:D,"aria-label":p,inputId:x,autoFocus:l,...d}){return(0,e.jsx)(h.l6,{inputId:x,value:r,options:u,onChange:R=>D(R.value??c.X.None),placeholder:"Choose role...","aria-label":p,autoFocus:l,...d})}},82936:(ee,M,n)=>{n.r(M),n.d(M,{ServiceAccountPageUnconnected:()=>me,default:()=>Le});var e=n(74848),c=n(96540),h=n(71468),I=n(54148),u=n(1933),f=n(67061),r=n(55852),D=n(29158),p=n(96374),x=n(21780),l=n(10096),d=n(31678),R=n(74868),F=n(16233);const k=t=>{const s=F.TP.hasPermissionInMetadata(d.AccessControlAction.ServiceAccountsPermissionsWrite,t.serviceAccount);return(0,e.jsx)(R.x,{title:"Permissions",addPermissionTitle:"Add permission",buttonLabel:"Add permission",resource:"serviceaccounts",resourceId:t.serviceAccount.id,canSetPermissions:s})};var V=n(98788),E=n(32196),v=n(72724),o=n(40845),a=n(60029),$=n(72109),g=n(85927),P=n(91634),L=n(10354),U=n(82702);const T=({label:t,value:s,inputType:i,disabled:C,onChange:j})=>{const O=(0,c.useRef)(null),[m,b]=(0,c.useState)(s),[K,A]=(0,c.useState)(!1),Q=(0,o.of)(W),_=`${t}-input`;(0,c.useEffect)(()=>{K&&ve()},[K]);const xe=()=>{A(!0)},re=()=>{A(!1),b(s||"")},he=(q,z)=>{z!==P.O.Invalid&&b(q.target.value)},Ee=(q,z)=>{z!==P.O.Invalid&&b(q.target.value)},ve=()=>{O?.current?.focus()},ce=()=>{A(!1),j&&j(m)};return(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:(0,e.jsx)(a.J,{htmlFor:_,children:t})}),(0,e.jsx)("td",{className:"width-25",colSpan:2,children:!C&&K?(0,e.jsx)(L.p,{id:_,type:i,defaultValue:s,onBlur:Ee,onChange:he,ref:O,width:30}):(0,e.jsx)("span",{className:(0,E.cx)({[Q.disabled]:C}),children:s})}),(0,e.jsx)("td",{children:j&&(0,e.jsx)(U.Z,{closeOnConfirm:!0,confirmText:"Save",onConfirm:ce,onClick:xe,onCancel:re,disabled:C,children:"Edit"})})]})},W=t=>({disabled:(0,E.css)`
      color: ${t.colors.text.secondary};
    `});var N=n(89062),y=n(5133);const S=({label:t,serviceAccount:s,roleOptions:i,onRoleChange:C})=>{const j=`${t}-input`,O=l.TP.hasPermissionInMetadata(d.AccessControlAction.ServiceAccountsWrite,s);return(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:(0,e.jsx)(a.J,{htmlFor:j,children:t})}),l.TP.licensedAccessControlEnabled()?(0,e.jsx)("td",{colSpan:3,children:(0,e.jsx)(N.y,{userId:s.id,orgId:s.orgId,basicRole:s.role,onBasicRoleChange:C,roleOptions:i,basicRoleDisabled:!O,disabled:s.isExternal||s.isDisabled})}):(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("td",{children:(0,e.jsx)(y.r,{width:24,inputId:j,"aria-label":"Role",value:s.role,disabled:s.isExternal||s.isDisabled,onChange:C})}),(0,e.jsx)("td",{colSpan:2})]})]})};function te({serviceAccount:t,timeZone:s,onChange:i}){const C=(0,o.of)(J),j=l.TP.hasPermission(d.AccessControlAction.ServiceAccountsWrite),[O,m]=(0,c.useState)([]),b=A=>{i({...t,role:A})},K=A=>{i({...t,name:A})};return(0,c.useEffect)(()=>{async function A(){try{if(l.TP.hasPermission(d.AccessControlAction.ActionRolesList)){let Q=await(0,g.RL)(t.orgId);m(Q)}}catch{console.error("Error loading options for service account")}}l.TP.licensedAccessControlEnabled()&&A()},[t.orgId]),(0,e.jsxs)("div",{className:C.section,children:[(0,e.jsx)("h3",{children:"Information"}),(0,e.jsx)("table",{className:"filter-table",children:(0,e.jsxs)("tbody",{children:[(0,e.jsx)(T,{label:"Name",value:t.name,onChange:t.isExternal?void 0:K,disabled:!j||t.isDisabled}),(0,e.jsx)(T,{label:"ID",value:t.login,disabled:t.isDisabled}),(0,e.jsx)(S,{label:"Roles",serviceAccount:t,onRoleChange:b,roleOptions:O}),(0,e.jsx)(T,{label:"Creation date",value:(0,v.LE)(t.createdAt,{timeZone:s}),disabled:t.isDisabled}),t.isExternal&&t.requiredBy&&(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:(0,e.jsx)(a.J,{children:"Used by"})}),(0,e.jsx)("td",{children:(0,e.jsx)($.Y,{href:`/plugins/${t.requiredBy}`,children:t.requiredBy})})]})]})})]})}const J=t=>({section:(0,E.css)`
    margin-bottom: ${t.spacing(4)};
  `});var ne=n(91605),se=n(56034),Z=n(14578);const H=({tokens:t,timeZone:s,tokenActionsDisabled:i,onDelete:C})=>{const j=(0,o.$j)(),O=ae(j);return(0,e.jsxs)("table",{className:(0,E.cx)(O.section,"filter-table"),children:[(0,e.jsx)("thead",{children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("th",{children:"Name"}),(0,e.jsx)("th",{children:"Expires"}),(0,e.jsx)("th",{children:"Created"}),(0,e.jsx)("th",{children:"Last used at"}),(0,e.jsx)("th",{}),(0,e.jsx)("th",{})]})}),(0,e.jsx)("tbody",{children:t.map(m=>(0,e.jsxs)("tr",{className:O.tableRow(m.hasExpired||m.isRevoked),children:[(0,e.jsx)("td",{children:m.name}),(0,e.jsx)("td",{children:(0,e.jsx)(X,{timeZone:s,token:m})}),(0,e.jsx)("td",{children:oe(s,m.created)}),(0,e.jsx)("td",{children:le(s,m.lastUsedAt)}),(0,e.jsx)("td",{className:"width-1 text-center",children:m.isRevoked&&(0,e.jsx)(de,{})}),(0,e.jsx)("td",{children:(0,e.jsx)(ne.e,{"aria-label":`Delete service account token ${m.name}`,size:"sm",onConfirm:()=>C(m),disabled:i})})]},m.id))})]})};function le(t,s){return s?(0,v.LE)(s,{timeZone:t}):"Never"}function oe(t,s){return s?(0,v.LE)(s,{timeZone:t}):"No expiration date"}function w(t){const s=Math.ceil(t/86400);return`Expires in ${s>1?`${s} days`:`${s} day`}`}const de=()=>{const t=(0,o.of)(ae);return(0,e.jsxs)("span",{className:t.hasExpired,children:["Revoked",(0,e.jsx)("span",{className:t.tooltipContainer,children:(0,e.jsx)(se.m,{content:"This token has been publicly exposed. Please rotate this token",children:(0,e.jsx)(Z.I,{name:"exclamation-triangle",className:t.toolTipIcon})})})]})},X=({timeZone:t,token:s})=>{const i=(0,o.of)(ae);return s.expiration?s.secondsUntilExpiration?(0,e.jsx)("span",{className:i.secondsUntilExpiration,children:w(s.secondsUntilExpiration)}):s.hasExpired?(0,e.jsxs)("span",{className:i.hasExpired,children:["Expired",(0,e.jsx)("span",{className:i.tooltipContainer,children:(0,e.jsx)(se.m,{content:"This token has expired",children:(0,e.jsx)(Z.I,{name:"exclamation-triangle",className:i.toolTipIcon})})})]}):(0,e.jsx)("span",{children:oe(t,s.expiration)}):(0,e.jsx)("span",{className:i.neverExpire,children:"Never"})},ae=t=>({tableRow:s=>(0,E.css)`
    color: ${s?t.colors.text.secondary:t.colors.text.primary};
  `,tooltipContainer:(0,E.css)`
    margin-left: ${t.spacing(1)};
  `,toolTipIcon:(0,E.css)`
    color: ${t.colors.error.text};
  `,secondsUntilExpiration:(0,E.css)`
    color: ${t.colors.warning.text};
  `,hasExpired:(0,E.css)`
    color: ${t.colors.error.text};
  `,neverExpire:(0,E.css)`
    color: ${t.colors.text.secondary};
  `,section:(0,E.css)`
    margin-bottom: ${t.spacing(4)};
  `});var je=n(12966),Y=n(17172),Ae=n(39601),pe=n(80714),ie=n(1936);const G="/api/serviceaccounts";function fe(t){return async s=>{s((0,ie.G3)());try{const i=await(0,Y.AI)().get(`${G}/${t}`,(0,pe.F)());s((0,ie.QM)(i))}catch(i){console.error(i)}finally{s((0,ie.aD)())}}}function ge(t){return async s=>{await(0,Y.AI)().patch(`${G}/${t.id}?accesscontrol=true`,{...t}),s(fe(t.id))}}function ye(t){return async()=>{await(0,Y.AI)().delete(`${G}/${t}`),Ae.Ny.push("/org/serviceaccounts")}}function Se(t,s,i){return async C=>{const j=await(0,Y.AI)().post(`${G}/${t}/tokens`,s);i(j.key),C(ue(t))}}function Oe(t,s){return async i=>{await(0,Y.AI)().delete(`${G}/${t}/tokens/${s}`),i(ue(t))}}function ue(t){return async s=>{try{const i=await(0,Y.AI)().get(`${G}/${t}/tokens`);s((0,ie.ch)(i))}catch(i){console.error(i)}}}function Me(t){return{serviceAccount:t.serviceAccountProfile.serviceAccount,tokens:t.serviceAccountProfile.tokens,isLoading:t.serviceAccountProfile.isLoading,timezone:(0,u.O)(t.user)}}const Ie={createServiceAccountToken:Se,deleteServiceAccount:ye,deleteServiceAccountToken:Oe,loadServiceAccount:fe,loadServiceAccountTokens:ue,updateServiceAccount:ge},Re=(0,h.connect)(Me,Ie),me=({serviceAccount:t,tokens:s,timezone:i,isLoading:C,createServiceAccountToken:j,deleteServiceAccount:O,deleteServiceAccountToken:m,loadServiceAccount:b,loadServiceAccountTokens:K,updateServiceAccount:A})=>{const[Q,_]=(0,c.useState)(""),[xe,re]=(0,c.useState)(!1),[he,Ee]=(0,c.useState)(!1),[ve,ce]=(0,c.useState)(!1),{id:q=""}=(0,I.g)(),z=parseInt(q,10),De=t.isDisabled||t.isExternal||!l.TP.hasPermission(d.AccessControlAction.ServiceAccountsWrite),Pe=l.TP.hasPermission(d.AccessControlAction.ServiceAccountsWrite),$e=l.TP.hasPermissionInMetadata(d.AccessControlAction.ServiceAccountsPermissionsRead,t),Be={text:t.name,img:t.avatarUrl,subTitle:"Manage settings for an individual service account."};(0,c.useEffect)(()=>{b(z),K(z),l.TP.licensedAccessControlEnabled()&&(0,je.pJ)()},[b,K,z]);const Ue=B=>{A(B)},Te=B=>()=>{Ee(B)},Ce=B=>()=>{ce(B)},We=()=>{O(t.id)},Ne=()=>{A({...t,isDisabled:!0}),ce(!1)},be=()=>{A({...t,isDisabled:!1})},Ke=B=>{m(t?.id,B.id)},Fe=B=>{j(t?.id,B,_)},ke=()=>{re(!1),_("")};return(0,e.jsx)(x.YW,{navId:"serviceaccounts",pageNav:Be,children:(0,e.jsxs)(x.YW.Contents,{isLoading:C,children:[(0,e.jsxs)("div",{children:[t&&!t.isExternal&&(0,e.jsxs)(f.B,{gap:2,height:"auto",justifyContent:"flex-end",children:[(0,e.jsx)(r.$n,{type:"button",variant:"destructive",onClick:Te(!0),disabled:!l.TP.hasPermission(d.AccessControlAction.ServiceAccountsDelete),children:"Delete service account"}),t.isDisabled?(0,e.jsx)(r.$n,{type:"button",variant:"secondary",onClick:be,disabled:!Pe,children:"Enable service account"}):(0,e.jsx)(r.$n,{type:"button",variant:"secondary",onClick:Ce(!0),disabled:!Pe,children:"Disable service account"})]}),t&&t.isExternal&&(0,e.jsx)(f.B,{gap:2,height:"auto",justifyContent:"flex-end",children:(0,e.jsx)(D.K,{disabled:!0,name:"lock",size:"md",tooltip:"This is a managed service account and cannot be modified."})}),t&&(0,e.jsx)(te,{serviceAccount:t,timeZone:i,onChange:Ue}),(0,e.jsxs)(f.B,{justifyContent:"space-between",height:"auto",children:[(0,e.jsx)("h3",{children:"Tokens"}),!t.isExternal&&(0,e.jsx)(r.$n,{onClick:()=>re(!0),disabled:De,children:"Add service account token"})]}),s&&(0,e.jsx)(H,{tokens:s,timeZone:i,onDelete:Ke,tokenActionsDisabled:De}),!t.isExternal&&$e&&(0,e.jsx)(k,{serviceAccount:t})]}),(0,e.jsx)(p.u,{isOpen:he,title:"Delete service account",body:"Are you sure you want to delete this service account?",confirmText:"Delete service account",onConfirm:We,onDismiss:Te(!1)}),(0,e.jsx)(p.u,{isOpen:ve,title:"Disable service account",body:"Are you sure you want to disable this service account?",confirmText:"Disable service account",onConfirm:Ne,onDismiss:Ce(!1)}),(0,e.jsx)(V.z,{isOpen:xe,token:Q,serviceAccountLogin:t.login,onCreateToken:Fe,onClose:ke})]})})},Le=Re(me)},98788:(ee,M,n)=>{n.d(M,{z:()=>k});var e=n(74848),c=n(32196),h=n(96540),I=n(62938),u=n(32264),f=n(40845),r=n(37390),D=n(88575),p=n(10354),x=n(94354),l=n(98239),d=n(55852),R=n(10534);const F=[{label:"No expiration",value:!1},{label:"Set expiration date",value:!0}],k=({isOpen:v,token:o,serviceAccountLogin:a,onCreateToken:$,onClose:g})=>{const P=new Date;P.setDate(P.getDate()+1);const L=new Date;u.$.tokenExpirationDayLimit!==void 0&&u.$.tokenExpirationDayLimit>-1?L.setDate(L.getDate()+u.$.tokenExpirationDayLimit+1):L.setDate(864e13);const U=u.$.tokenExpirationDayLimit!==void 0&&u.$.tokenExpirationDayLimit>0,[T,W]=(0,h.useState)(""),[N,y]=(0,h.useState)(""),[S,te]=(0,h.useState)(U),[J,ne]=(0,h.useState)(P),[se,Z]=(0,h.useState)(J!==""),H=(0,f.of)(E);(0,h.useEffect)(()=>{v&&W(`${a}-${(0,I.A)()}`)},[a,v]);const le=X=>{Z(X!==""),ne(X)},oe=()=>{$({name:N||T,secondsToLive:S?V(J):void 0})},w=()=>{y(""),W(""),te(U),ne(P),Z(J!==""),g()},de=o?"Service account token created":"Add service account token";return(0,e.jsx)(r.a,{isOpen:v,title:de,onDismiss:w,className:H.modal,children:o?(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(D.D,{label:"Token",description:"Copy the token now as you will not be able to see it again. Losing a token requires creating a new one.",children:(0,e.jsxs)("div",{className:H.modalTokenRow,children:[(0,e.jsx)(p.p,{name:"tokenValue",value:o,readOnly:!0}),(0,e.jsx)(R.b,{className:H.modalCopyToClipboardButton,variant:"primary",size:"md",icon:"copy",getText:()=>o,children:"Copy clipboard"})]})}),(0,e.jsxs)(r.a.ButtonRow,{children:[(0,e.jsx)(R.b,{variant:"primary",getText:()=>o,onClipboardCopy:w,children:"Copy to clipboard and close"}),(0,e.jsx)(d.$n,{variant:"secondary",onClick:w,children:"Close"})]})]}):(0,e.jsxs)("div",{children:[(0,e.jsx)(D.D,{label:"Display name",description:"Name to easily identify the token",required:!0,children:(0,e.jsx)(p.p,{name:"tokenName",value:N,placeholder:T,onChange:X=>{y(X.currentTarget.value)}})}),(0,e.jsx)(D.D,{label:"Expiration",children:(0,e.jsx)(x.z,{options:F,value:S,onChange:te,size:"md"})}),S&&(0,e.jsx)(D.D,{label:"Expiration date",children:(0,e.jsx)(l.l,{onChange:le,value:J,placeholder:"",minDate:P,maxDate:L})}),(0,e.jsx)(r.a.ButtonRow,{children:(0,e.jsx)(d.$n,{onClick:oe,disabled:S&&!se,children:"Generate token"})})]})})},V=v=>{const o=new Date(v),a=new Date;return Math.ceil((o.getTime()-a.getTime())/1e3)},E=v=>({modal:(0,c.css)({width:"550px"}),modalTokenRow:(0,c.css)({display:"flex"}),modalCopyToClipboardButton:(0,c.css)({marginLeft:v.spacing(.5)})})},12966:(ee,M,n)=>{n.d(M,{W4:()=>R,iJ:()=>x,mV:()=>d,nM:()=>V,pJ:()=>p,qS:()=>E,yC:()=>F,yd:()=>v});var e=n(2543),c=n.n(e),h=n(17172),I=n(85927),u=n(16233),f=n(31678),r=n(1936);const D="/api/serviceaccounts";function p(){return async o=>{try{if(u.TP.licensedAccessControlEnabled()&&u.TP.hasPermission(f.AccessControlAction.ActionRolesList)){const a=await(0,I.RL)();o((0,r.ew)(a))}}catch(a){console.error(a)}}}function x({withLoadingIndicator:o}={withLoadingIndicator:!1}){return async(a,$)=>{try{if(u.TP.hasPermission(f.AccessControlAction.ServiceAccountsRead)){o&&a((0,r.FW)());const{perPage:g,page:P,query:L,serviceAccountStateFilter:U}=$().serviceAccounts,T=await(0,h.AI)().get(`/api/serviceaccounts/search?perpage=${g}&page=${P}&query=${L}${k(U)}&accesscontrol=true`);if(u.TP.licensedAccessControlEnabled()&&u.TP.hasPermission(f.AccessControlAction.ActionUserRolesList)){a((0,r.dJ)());const W=u.TP.user.orgId,N=T?.serviceAccounts.map(S=>S.id),y=await(0,h.AI)().post("/api/access-control/users/roles/search",{userIds:N,orgId:W});T.serviceAccounts.forEach(S=>{S.roles=y?y[S.id]||[]:[]}),a((0,r.jE)())}a((0,r.zh)(T))}}catch(g){console.error(g)}finally{a((0,r.Yh)())}}}const l=(0,e.debounce)(o=>o(x()),500,{leading:!0});function d(o){return async a=>{await(0,h.AI)().patch(`${D}/${o.id}?accesscontrol=true`,{...o}),a(x())}}function R(o){return async a=>{await(0,h.AI)().delete(`${D}/${o}`),a(x())}}function F(o,a,$){return async g=>{const P=await(0,h.AI)().post(`${D}/${o}/tokens`,a);$(P.key),g(x())}}const k=o=>{switch(o){case f.ServiceAccountStateFilter.WithExpiredTokens:return"&expiredTokens=true";case f.ServiceAccountStateFilter.Disabled:return"&disabled=true";case f.ServiceAccountStateFilter.External:return"&external=true";default:return""}};function V(o){return async a=>{a((0,r.L5)(o)),l(a)}}function E(o){return async a=>{a((0,r.c3)(o)),a(x())}}function v(o){return async a=>{a((0,r.EC)(o)),a(x())}}}}]);

//# sourceMappingURL=ServiceAccountPage.4d9b9a7e815ef121825d.js.map