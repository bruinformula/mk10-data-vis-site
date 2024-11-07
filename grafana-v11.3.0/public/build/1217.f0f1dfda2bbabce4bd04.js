"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[1217],{91062:(X,L,n)=>{n.d(L,{A:()=>Z});var e=n(96540),o=n(47433),p=Object.defineProperty,I=Object.defineProperties,i=Object.getOwnPropertyDescriptors,B=Object.getOwnPropertySymbols,G=Object.prototype.hasOwnProperty,T=Object.prototype.propertyIsEnumerable,N=(C,l,r)=>l in C?p(C,l,{enumerable:!0,configurable:!0,writable:!0,value:r}):C[l]=r,Y=(C,l)=>{for(var r in l||(l={}))G.call(l,r)&&N(C,r,l[r]);if(B)for(var r of B(l))T.call(l,r)&&N(C,r,l[r]);return C},w=(C,l)=>I(C,i(l)),h=(C,l)=>{var r={};for(var d in C)G.call(C,d)&&l.indexOf(d)<0&&(r[d]=C[d]);if(C!=null&&B)for(var d of B(C))l.indexOf(d)<0&&T.call(C,d)&&(r[d]=C[d]);return r};const Z=C=>{var l=C,{children:r}=l,d=h(l,["children"]);return e.createElement(o.x,w(Y({},d),{kind:"section"}),r)}},47433:(X,L,n)=>{n.d(L,{x:()=>C});var e=n(96540),o=n(32196),p=n(40845),I=n(29158),i=Object.defineProperty,B=Object.defineProperties,G=Object.getOwnPropertyDescriptors,T=Object.getOwnPropertySymbols,N=Object.prototype.hasOwnProperty,Y=Object.prototype.propertyIsEnumerable,w=(l,r,d)=>r in l?i(l,r,{enumerable:!0,configurable:!0,writable:!0,value:d}):l[r]=d,h=(l,r)=>{for(var d in r||(r={}))N.call(r,d)&&w(l,d,r[d]);if(T)for(var d of T(r))Y.call(r,d)&&w(l,d,r[d]);return l},Z=(l,r)=>B(l,G(r));const C=({children:l,title:r,description:d,isCollapsible:te=!1,isInitiallyOpen:k=!0,kind:J="section",className:oe})=>{const{colors:K,typography:ne,spacing:ae}=(0,p.$j)(),[H,u]=(0,e.useState)(te?k:!0),g=H?"angle-up":"angle-down",R=J==="sub-section",V=`${H?"Collapse":"Expand"} section ${r}`,_={header:(0,o.css)({display:"flex",justifyContent:"space-between",alignItems:"center"}),title:(0,o.css)({margin:0}),subtitle:(0,o.css)({margin:0,fontWeight:ne.fontWeightRegular}),descriptionText:(0,o.css)(Z(h({marginTop:ae(R?.25:.5),marginBottom:0},ne.bodySmall),{color:K.text.secondary})),content:(0,o.css)({marginTop:ae(2)})};return e.createElement("div",{className:oe},e.createElement("div",{className:_.header},J==="section"?e.createElement("h3",{className:_.title},r):e.createElement("h6",{className:_.subtitle},r),te&&e.createElement(I.K,{name:g,onClick:()=>u(!H),type:"button",size:"xl","aria-label":V})),d&&e.createElement("p",{className:_.descriptionText},d),H&&e.createElement("div",{className:_.content},l))}},92762:(X,L,n)=>{n.d(L,{Z:()=>G});var e=n(32196),o=n(28848),p=n.n(o),I=n(96540),i=n(80997),B=n(40845);function G({query:N,language:Y,className:w}){const h=(0,B.$j)(),Z=T(h),C=p().highlight(N,Y.grammar,Y.name);return I.createElement("div",{className:(0,e.cx)(Z.editorField,"prism-syntax-highlight",w),"aria-label":"selector",dangerouslySetInnerHTML:{__html:i.sQ.sanitize(C)}})}const T=N=>({editorField:(0,e.css)({fontFamily:N.typography.fontFamilyMonospace,fontSize:N.typography.bodySmall.fontSize})})},61217:(X,L,n)=>{n.d(L,{A:()=>Ve});var e=n(74848),o=n(96540),p=n(71468),I=n(32264),i=n(67061),B=n(74868),G=n(77454),T=n(10096),N=n(35538),Y=n(85464),w=n(34258),h=n(32196),Z=n(2543),C=n(91062),l=n(17172),r=n(40845),d=n(90613),te=n(82762),k=n(56034),J=n(14578),oe=n(42418),K=n(55852),ne=n(94753),ae=n(87455),H=n(13680),u=n(49785),g=n(88575),R=n(10354),V=n(98742),_=n(8484),je=n(92762),Ee=n(71713);const Se=["loki"],Ge="X-Prom-Label-Policy";function Ae(s){return!!s.basicAuth&&Se.includes(s.type)}function pe(s){const c=/\{([^{}]*)\}/.exec(s);return c&&c.length>1?c[1].trim():""}function fe(s){const c=/\{{0,1}([^\{\}]*)\}{0,1}/.exec(s);return c&&c.length>1?`{ ${c[1].trim()} }`:""}function Ye(s){const c=/\w+\:\{{0,1}([^\{\}]*)\}{0,1}/.exec(s);return c&&c.length>1?c[1].trim():""}const me=s=>{if(!s)return!1;const a=s.trim().replace(/^{|}$/g,"");return/^\s*(?:\s*\w+\s*(?:=|!=|=~|!~)\s*\"[^\"]+\"\s*,*)+\s*$/.test(a)},Pe=s=>{const a=[];return s.length&&s.forEach(c=>{Number(c.teamId)&&a.push(Number(c.teamId))}),a},De=(s,a)=>{const c=(0,_.t)("access-control.permissions.lbac-warning-service-account","Warning: This service account has full data access if no LBAC rules are set."),f=(0,_.t)("access-control.permissions.lbac-warning-team","Warning: This team has full data access if no LBAC rules are set.");return a.map(E=>{if(E.builtInRole&&E.permission!=="Admin"){const P=(0,_.t)("access-control.permissions.lbac-warning-basic-role",`Warning: ${E.builtInRole} may have full data access if permission is not removed.`);E.warning=P}else E.isServiceAccount&&E.userId?E.warning=c:E.teamId&&!s.includes(E.teamId)&&(E.warning=f);return{...E}})},Je=(s,a)=>{const c=t("access-control.permissions.lbac-warning-rule","Warning: This team might not have permission to the query the datasource.");return a.map(f=>(f.teamId&&!s.includes(Number(f.teamId))&&(f.warning=c),{...f}))},he=({isEditing:s,value:a,disabled:c,error:f,onChange:E})=>{const[P,S]=(0,o.useState)(pe(a)),z=(0,r.$j)(),Q=(0,r.of)(Be);return(0,o.useEffect)(()=>{s||S(pe(a))},[s,a]),(0,e.jsx)("div",{className:Q.wrapper,children:s?(0,e.jsx)(e.Fragment,{children:(0,e.jsx)(R.p,{className:Q.input,value:P,onChange:j=>{const M=j.currentTarget.value;S(M),E&&E(`{ ${M} }`)},invalid:!!f,suffix:f&&(0,e.jsx)(k.m,{content:f,children:(0,e.jsx)(J.I,{name:"exclamation-triangle"})})})}):(0,e.jsx)("span",{style:{color:c?z.colors.text.disabled:"unset"},children:(0,e.jsx)(je.Z,{query:a,language:{grammar:Ee.Ay,name:"logql"}})})})},Be=s=>({wrapper:(0,h.css)({padding:s.spacing(0,1)}),input:(0,h.css)({"& input":{fontFamily:s.typography.fontFamilyMonospace}})}),Te=({onSubmit:s})=>{const a=(0,r.of)(Le),{handleSubmit:c,register:f,control:E,watch:P,formState:{errors:S}}=(0,u.mN)({mode:"onChange"}),z=P("team"),Q=P("rule"),j=()=>z>0&&me(Q);return(0,e.jsxs)("div",{className:a.container,children:[(0,e.jsx)("h5",{className:a.heading,children:"New LBAC Rule"}),(0,e.jsxs)("div",{className:a.example,children:["Example: ",(0,e.jsx)(he,{value:'{ cluster="us-west-0", namespace=~"dev|prod" }',disabled:!0})]}),(0,e.jsx)("form",{id:"lbacForm",onSubmit:c(s),className:a.form,children:(0,e.jsxs)(i.B,{gap:2,direction:"column",children:[(0,e.jsx)(g.D,{label:"Team",children:(0,e.jsx)(u.xI,{render:({field:{onChange:M,ref:$,...q}})=>(0,e.jsx)(V.e,{...q,onSelected:y=>M(y.value?.id),className:a.teamPicker}),control:E,name:"team",rules:{required:{value:!0,message:"Required"}}})}),(0,e.jsx)(g.D,{label:"Rule",invalid:!!S.rule,error:S?.rule?.message,children:(0,e.jsx)(R.p,{className:a.input,type:"text",...f("rule",{required:"Rule is required",validate:M=>me(M)||"Invalid LBAC rule syntax"}),placeholder:'{ cluster="us-west-0", namespace=~"dev|prod" }',invalid:!!S.rule})}),(0,e.jsx)("div",{className:a.buttonContainer,children:(0,e.jsx)(K.$n,{type:"submit",disabled:!j(),children:(0,e.jsx)(_.x6,{i18nKey:"access-control.add-permissions.save",children:"Save"})})})]})})]})},Le=s=>({container:(0,h.css)({padding:s.spacing(2)}),heading:(0,h.css)({color:s.colors.text.primary,margin:`0 0 ${s.spacing(2)} 0`,fontSize:s.typography.h5.fontSize}),example:(0,h.css)({marginBottom:s.spacing(2),color:s.colors.text.secondary,fontSize:s.typography.size.sm}),form:(0,h.css)({display:"flex",flexDirection:"column",gap:s.spacing(2),width:"100%",maxWidth:"500px"}),input:(0,h.css)({width:"100%","& input":{fontFamily:s.typography.fontFamilyMonospace,width:"100%"}}),teamPicker:(0,h.css)({width:"100%"}),buttonContainer:(0,h.css)({display:"flex",justifyContent:"flex-end",marginTop:s.spacing(2)})});var ie=n(29158),xe=n(91605),Oe=n(12942);const Ie=({team:s,disabled:a,warning:c})=>{const f=(0,r.of)(Re);return s?!s.name&&!s.avatarUrl?(0,e.jsxs)("span",{className:f.notFound,children:["Team with id ",s.id," not found"]}):(0,e.jsxs)("div",{className:f.wrapper,children:[s.avatarUrl&&(0,e.jsx)(Oe.e,{src:s.avatarUrl,alt:""}),(0,e.jsx)("span",{className:(0,h.cx)(f.label,{[f.disabled]:a}),children:s.name}),c&&(0,e.jsx)(k.m,{content:(0,e.jsx)(d.a,{children:c}),children:(0,e.jsx)(J.I,{name:"exclamation-triangle",className:f.warning})})]}):(0,e.jsx)(e.Fragment,{})},Re=s=>({wrapper:(0,h.css)({display:"flex",alignItems:"center"}),label:(0,h.css)({overflow:"hidden",marginLeft:s.spacing(2),marginRight:s.spacing(2)}),avatar:(0,h.css)({width:"24px",height:"24px"}),notFound:(0,h.css)({color:s.colors.text.secondary}),disabled:(0,h.css)({color:s.colors.text.disabled}),warning:(0,h.css)({color:s.colors.warning.main})}),Me=({teamRules:s,team:a,disabled:c,onChange:f,warning:E})=>{const[P,S]=(0,o.useState)({}),[z,Q]=(0,o.useState)({}),[j,M]=(0,o.useState)(s),[$,q]=(0,o.useState)({}),y=(0,r.of)(Ue);if((0,o.useEffect)(()=>{M(s)},[s]),!s?.length)return null;const ee=(x,v)=>{Q({...z,[x]:v?j[x]:void 0}),S({...P,[x]:v})},re=(x,v)=>{Q({...z,[x]:v})},le=x=>{const v=z[x];if(v){if(!me(v)){q({...$,[x]:"Invalid LBAC rule syntax"});return}const ce=j.map((ue,ge)=>ge===x&&v?v:ue);f(ce),S({...P,[x]:!1})}},se=x=>{const v=j.slice(0,x).concat(j.slice(x+1));f(v)},de=()=>{S({...P,[j.length]:!0}),M(j.concat(""))},U=x=>{ee(x,!1),x===j.length-1&&!j[x]&&M(j.slice(0,-1))};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)("tr",{role:"row",children:[(0,e.jsx)("td",{children:(0,e.jsx)(Ie,{team:a,warning:E})}),(0,e.jsx)("td",{}),(0,e.jsx)("td",{children:(0,e.jsx)(he,{value:j[0],isEditing:P[0],error:$[0],onChange:x=>re(0,x)})}),(0,e.jsx)("td",{children:c?(0,e.jsx)("div",{className:y.buttonsCell,children:(0,e.jsx)(K.$n,{tooltip:"Provisioned rule",size:"sm",icon:"lock"})}):(0,e.jsxs)("div",{className:y.buttonsCell,children:[j?.length===1&&!P[0]&&(0,e.jsx)("div",{className:y.buttonRight,children:(0,e.jsx)(ie.K,{name:"plus-circle",tooltip:"Add new rule","aria-label":"add team rule",onClick:()=>de()})}),P[0]?(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("div",{className:y.editButton,children:(0,e.jsx)(K.$n,{size:"sm",variant:"primary",onClick:()=>le(0),children:"Save"})}),(0,e.jsx)("div",{className:y.editButton,children:(0,e.jsx)(K.$n,{size:"sm",variant:"secondary",onClick:()=>U(0),children:"Cancel"})})]}):(0,e.jsx)("div",{className:y.editButton,children:(0,e.jsx)(ie.K,{name:"pen","aria-label":"edit team rule",onClick:()=>ee(0,!0)})}),(0,e.jsx)("div",{className:y.buttonRight,children:(0,e.jsx)(xe.e,{"aria-label":"Delete rule",size:"sm",onConfirm:()=>se(0)})})]})})]},`${a.id}-0`),j.length>1&&j.slice(1).map((x,v)=>(0,e.jsxs)("tr",{role:"row",children:[(0,e.jsx)("td",{}),(0,e.jsx)("td",{className:y.ruleOr,children:"OR"}),(0,e.jsx)("td",{children:(0,e.jsx)(he,{value:x,isEditing:P[v+1],error:$[v+1],onChange:ce=>re(v+1,ce)})}),(0,e.jsx)("td",{children:c?(0,e.jsx)("div",{className:y.buttonsCell,children:(0,e.jsx)(K.$n,{tooltip:"Provisioned rule",size:"sm",icon:"lock"})}):(0,e.jsxs)("div",{className:y.buttonsCell,children:[v===j?.length-2&&!P[v+1]&&(0,e.jsx)("div",{className:y.buttonRight,children:(0,e.jsx)(ie.K,{name:"plus-circle",tooltip:"Add new rule","aria-label":"add team rule",onClick:()=>de()})}),P[v+1]?(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("div",{className:y.editButton,children:(0,e.jsx)(K.$n,{size:"sm",variant:"primary",onClick:()=>le(v+1),children:"Save"})}),(0,e.jsx)("div",{className:y.editButton,children:(0,e.jsx)(K.$n,{size:"sm",variant:"secondary",onClick:()=>U(v+1),children:"Cancel"})})]}):(0,e.jsx)("div",{className:y.editButton,children:(0,e.jsx)(ie.K,{name:"pen","aria-label":"edit team rule",onClick:()=>ee(v+1,!0)})}),(0,e.jsx)("div",{className:y.buttonRight,children:(0,e.jsx)(xe.e,{"aria-label":"Delete rule",size:"sm",onConfirm:()=>se(v+1)})})]})})]},`${a.id}-${v+1}`))]})},Ue=s=>({editButton:(0,h.css)({display:"flex",alignItems:"center",marginLeft:s.spacing(2)}),buttonRight:(0,h.css)({display:"flex",alignItems:"center",marginLeft:s.spacing(2),marginRight:s.spacing(.5)}),buttonsCell:(0,h.css)({display:"flex",justifyContent:"end",alignItems:"center"}),ruleOr:(0,h.css)({color:s.colors.text.secondary})});var We=n(31749);function ve(s){return async a=>{const c=await(0,l.AI)().get(`api/datasources/uid/${s}/lbac/teams`);a((0,We.Tg)(c))}}function be(s,a){return async c=>{await(0,l.AI)().put(`api/datasources/uid/${s}/lbac/teams`,{...a}),c(ve(s))}}function Ne(s){return{teamLBACConfig:s.teamLBAC?.teamLBACConfig}}const we={getTeamLBAC:ve,updateTeamLBACRules:be},Ke=(0,p.connect)(Ne,we),_e=({teamLBACConfig:s,dataSourceConfig:a,readOnly:c,onTeamLBACUpdate:f,getTeamLBAC:E,updateTeamLBACRules:P,items:S})=>{const[z,Q]=(0,o.useState)([]),[j,M]=(0,o.useState)(!1),[$,q]=(0,o.useState)(new Set),[y,ee]=(0,o.useState)(new Set),[re,le]=(0,o.useState)(new Set),[se,de]=(0,o.useState)(new Set),U=(0,o.useMemo)(()=>s?.rules||[],[s?.rules]),x=(0,r.of)(ze),[v,ce]=(0,o.useState)(!1);(0,o.useEffect)(()=>{E(a.uid)},[a.uid,E]),(0,o.useEffect)(()=>{(async()=>{const D=U.map(b=>b.teamId);if(!D?.length)return;const W=((await(0,l.AI)().get("/api/teams/search",{teamId:D}))?.teams).map(b=>({id:b.id,value:b.id,teamId:b.id,name:b.name,avatarUrl:b.avatarUrl}));Q(W)})()},[U]),(0,o.useEffect)(()=>{if(!S?.length)return;const m=new Set(U.map(A=>A.teamId)),D=new Set(S.map(A=>A.teamId)),O=new Set(S.filter(A=>A.isServiceAccount).map(A=>A.id)),F=new Set(S.filter(A=>typeof A.builtInRole=="string"&&A.builtInRole.trim()!==""&&A.permission!=="Admin").map(A=>A.builtInRole)),W=new Set(Array.from(D).filter(A=>A!==void 0&&!m.has(A.toString())).map(A=>A?.toString()||"")),b=new Set(Array.from(m).filter(A=>A&&!D.has(Number(A))));b&&de(b),W&&le(W),O&&ee(O),F&&q(F)},[S,U]);const ue=(0,o.useCallback)(async m=>{await P(a.uid,{rules:m}),await f()},[a.uid,f,P]),ge=async({team:m,rule:D})=>{let O=[];U.find(W=>W.teamId===m.toString())?O=U.map(W=>W.teamId===m.toString()?{...W,rules:[...W.rules,fe(D)]}:{...W}):O=U.concat({teamId:m.toString(),rules:[fe(D)]}),await ue(O),M(!1)},Qe=async(m,D)=>{const O=U.map(F=>F.teamId===m?{...F,rules:D}:F);await ue(O)},Ce=T.TP.hasPermission(H.AccessControlAction.DataSourcesPermissionsWrite)&&!c,ye=m=>{if(m.userId)return m.userLogin;if(m.teamId)return m.team;if(m.builtInRole)return m.builtInRole};return(0,e.jsxs)(d.a,{paddingBottom:2,children:[c&&(0,e.jsx)(ae.r,{}),(0,e.jsxs)(i.B,{direction:"column",gap:3,children:[(0,e.jsxs)(C.A,{title:"Data access",description:"Here you can configure access to specific data within the datasource using LogQL label selectors.",children:[(se.size>0||re.size>0||y.size>0||$.size>0&&U.length>0)&&(0,e.jsxs)(d.a,{marginBottom:3,children:[(0,e.jsx)(te.S,{label:v?"Hide Access Control Recommendations":(0,e.jsxs)(i.B,{direction:"row",alignItems:"center",gap:1,children:[(0,e.jsx)(k.m,{content:"Found recommendations",children:(0,e.jsx)(J.I,{name:"exclamation-triangle",className:x.warning})}),(0,e.jsx)("span",{children:"Show Access Control Recommendations"})]}),isOpen:v,onToggle:()=>ce(!v)}),v&&(0,e.jsxs)(oe.F,{title:"Access Control Recommendations",severity:"warning",children:[(0,e.jsx)("p",{children:"To ensure proper access control, please follow these recommendations:"}),(0,e.jsxs)("ul",{className:x.warningList,children:[se.size>0&&(0,e.jsxs)("li",{children:[(0,e.jsx)("strong",{children:"Add Query Permissions:"})," The following teams do not have query permissions for the data source, and are therefore not able to query logs with the configured LBAC rules.",(0,e.jsx)("ul",{children:Array.from(se).map(m=>{const D=z?.find(O=>O.id?.toString()===m)?.name;return(0,e.jsx)("li",{className:x.warningList,children:D},m)})})]}),re.size>0&&(0,e.jsxs)("li",{children:[(0,e.jsx)("strong",{children:"Add Team LBAC Rules:"})," The following teams can query all logs. Please add Team LBAC rules for them:",(0,e.jsx)("ul",{children:Array.from(re).map(m=>{const D=S?.find(O=>O.teamId?.toString()===m);return D?(0,e.jsx)("li",{className:x.warningList,children:ye(D)},m):null})})]}),y.size>0&&(0,e.jsxs)("li",{children:[(0,e.jsx)("strong",{children:"Note:"})," LBAC rules cannot be applied to service accounts. Consider reviewing their access if necessary.",(0,e.jsx)("ul",{children:Array.from(y).map(m=>{const D=S?.find(O=>O.id===m);return D?(0,e.jsx)("li",{className:x.warningList,children:`Service Account: ${ye(D)}`},m):null})})]}),$.size>0&&(0,e.jsxs)("li",{children:[(0,e.jsx)("strong",{children:"Remove Unrestricted Access:"})," The following roles currently have unrestricted access to logs.",(0,e.jsx)("ul",{children:Array.from($).map(m=>(0,e.jsx)("li",{className:x.warningList,children:`Role: ${m}`},m))})]})]})]})]}),(0,e.jsxs)(i.B,{direction:"column",gap:2,children:[(0,e.jsxs)(d.a,{children:[(0,e.jsx)("h4",{children:"LBAC (Label-based access control)"}),(0,e.jsxs)("p",{children:["Configure LBAC rules to restrict team log queries based on LogQL.",(0,e.jsx)(K.z9,{fill:"text",icon:"external-link-alt",variant:"secondary",size:"sm",href:"https://grafana.com/docs/grafana/latest/administration/data-source-management/teamlbac/create-teamlbac-rules/#lbac-rule",target:"_blank",rel:"noopener noreferrer",children:"Learn more about LBAC rules"})]})]}),Ce&&(0,e.jsxs)(d.a,{children:[(0,e.jsx)(K.z9,{onClick:()=>M(!j),icon:j?"angle-down":"plus",children:j?"Hide LBAC rule":"Add a LBAC rule"}),j&&(0,e.jsx)(d.a,{marginTop:2,children:(0,e.jsx)(Te,{onSubmit:ge})})]})]})]}),!(0,Z.isEmpty)(U)&&(0,e.jsxs)(d.a,{children:[(0,e.jsxs)("table",{className:x.table,role:"grid","aria-labelledby":"team_lbac_rules",children:[(0,e.jsx)("thead",{children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("th",{style:{width:"30%"},children:"Team"}),(0,e.jsx)("th",{style:{width:"1%"}}),(0,e.jsx)("th",{children:"Label selector"}),(0,e.jsx)("th",{style:{width:"1%"}})]})}),(0,e.jsx)("tbody",{children:U.map((m,D)=>{const O=m.rules,F=m.teamId;let W="";return se.has(m.teamId)&&(W="Warning: This team may not have permission to query the datasource."),(0,e.jsx)(Me,{teamRules:O,disabled:!Ce,team:z.find(b=>b.id?.toString()===F)||{id:Number(F),name:"",avatarUrl:""},onChange:b=>Qe(F,b),warning:W},D)})})]}),(0,e.jsx)(d.a,{marginTop:2,children:(0,e.jsx)(ne.E,{variant:"bodySmall",color:"secondary",children:"Note: LBAC rules will NOT apply to the query if the authenticated Cloud Access Policy token has any label selectors configured in Grafana Cloud."})})]})]})]})},ze=s=>({warning:(0,h.css)({...s.typography.bodySmall,color:s.colors.warning.text}),warningList:(0,h.css)({...s.typography.bodySmall,listStylePosition:"inside",marginLeft:s.spacing(2)}),table:(0,h.css)({...s.typography.bodySmall,width:"100%",borderCollapse:"collapse","& th, & td":{padding:s.spacing(2),borderBottom:`1px solid ${s.colors.border.weak}`},"& th":{textAlign:"left",fontWeight:s.typography.fontWeightMedium}})}),$e=Ke(_e);function Fe(s,a){const{uid:c}=a;return{resourceId:c,dataSourceConfig:s.dataSources.dataSource,teamLBACConfig:s.teamLBAC?.teamLBACConfig}}const He={loadDataSource:w.ak,loadDataSourceMeta:w.xI,updateDataSource:w.jB},Ve=(0,p.connect)(Fe,He)(({resourceId:s,dataSourceConfig:a,teamLBACConfig:c,loadDataSource:f,loadDataSourceMeta:E,updateDataSource:P})=>{(0,o.useEffect)(()=>{f(s)},[s,f]);const S=T.TP.hasPermissionInMetadata(H.AccessControlAction.DataSourcesPermissionsWrite,a);(0,o.useEffect)(()=>{f(s).then(E)},[f,E,s]);const z=()=>{f(s)},Q=()=>y=>{if(!$||!c?.rules?.length)return y;const ee=Pe(c?.rules);return De(ee,y)},{readOnly:j,hasWriteRights:M}=(0,Y.u1)(a.uid),$=I.$.featureToggles.teamHttpHeaders&&Ae(a),q=j||!S||!M;return(0,e.jsxs)(i.B,{direction:"column",gap:2,children:[(0,N.z5)()&&(0,e.jsx)(G.Iz,{featureId:"data-source-permissions",eventVariant:"trial",featureName:"data source permissions",text:"Enable data source permissions for free during your trial of Grafana Pro."}),(0,e.jsx)(B.x,{resource:"datasources",resourceId:s,canSetPermissions:S,getWarnings:$?Q():void 0,epilogue:$?y=>(0,e.jsx)($e,{dataSourceConfig:a,readOnly:q,onTeamLBACUpdate:z,items:y}):void 0})]})})},87455:(X,L,n)=>{n.d(L,{r:()=>i});var e=n(74848),o=n(13544),p=n(42418);const I="This data source was added by config and cannot be modified using the UI. Please contact your server admin to update this data source.";function i(){return(0,e.jsx)(p.F,{"data-testid":o.Tp.pages.DataSource.readOnly,severity:"info",title:"Provisioned data source",children:I})}},458:(X,L,n)=>{n.d(L,{C:()=>p});var e=n(96540),o=n(83883);const p=(0,e.createContext)(o.I)},11084:(X,L,n)=>{n.d(L,{$k:()=>k,BY:()=>Z,S4:()=>K,Tn:()=>oe,US:()=>C,Um:()=>d,_e:()=>ne,aM:()=>H,hx:()=>r,k9:()=>te,oU:()=>h,u1:()=>ae,xw:()=>J});var e=n(96540),o=n(97007),p=n(28138),I=n(10096),i=n(31678),B=n(28444),G=n(11959),T=n(34258),N=n(458),Y=n(36227),w=n(54226);const h=u=>{const g=(0,i.useDispatch)();(0,e.useEffect)(()=>(g((0,T.PK)(u)),function(){g((0,o.N)({cleanupAction:V=>V.dataSourceSettings=Y.IJ}))}),[u,g])},Z=u=>{const g=(0,i.useDispatch)(),R=H();return()=>g((0,T.Ge)(u,R.Edit))},C=()=>{const u=(0,i.useDispatch)(),g=(0,i.useSelector)(V=>V.dataSources.isLoadingDataSources),R=(0,i.useSelector)(V=>V.dataSources.dataSources);return(0,e.useEffect)(()=>{u((0,T.bn)())},[u]),{isLoading:g,dataSources:R}},l=u=>{const g=useDispatch();useEffect(()=>{g(loadDataSource(u))},[g,u])},r=()=>{const u=(0,i.useDispatch)();(0,e.useEffect)(()=>{u((0,T.G2)())},[u])},d=()=>{const u=(0,i.useDispatch)(),g=H();return R=>{u((0,T.du)(R,g.Edit))}},te=()=>{const u=(0,i.useDispatch)();return async g=>u((0,T.jB)(g))},k=()=>{const u=(0,i.useDispatch)(),{name:g}=(0,i.useSelector)(R=>R.dataSources.dataSource);return()=>{p.A.publish(new B.bY({title:"Delete",text:`Are you sure you want to delete the "${g}" data source?`,yesText:"Delete",icon:"trash-alt",onConfirm:()=>u((0,T.Qq)())}))}},J=u=>(0,i.useSelector)(g=>(0,w.U4)(g.dataSources,u)),oe=u=>{const g=J(u);return(0,G.h)(g)},K=u=>(0,i.useSelector)(g=>(0,w.Fj)(g.dataSources,u)),ne=()=>(0,i.useSelector)(u=>u.dataSourceSettings),ae=u=>{const g=J(u),R=g.readOnly===!0,V=I.TP.hasPermissionInMetadata(i.AccessControlAction.DataSourcesWrite,g),_=I.TP.hasPermissionInMetadata(i.AccessControlAction.DataSourcesDelete,g);return{readOnly:R,hasWriteRights:V,hasDeleteRights:_}},H=()=>(0,e.useContext)(N.C)},85464:(X,L,n)=>{n.d(L,{$k:()=>p.$k,$m:()=>I.$m,BY:()=>p.BY,Bs:()=>i.Bs,CR:()=>o.C,C_:()=>i.C_,S4:()=>p.S4,Tk:()=>i.Tk,Tn:()=>p.Tn,US:()=>p.US,Um:()=>p.Um,_e:()=>p._e,aM:()=>p.aM,du:()=>e.du,eB:()=>i.eB,hp:()=>B.hp,hx:()=>p.hx,jz:()=>i.jz,k9:()=>p.k9,lv:()=>B.lv,oU:()=>p.oU,rb:()=>i.rb,u1:()=>p.u1,wC:()=>B.wC,xs:()=>B.xs,xw:()=>p.xw,zC:()=>B.zC});var e=n(34258),o=n(458),p=n(11084),I=n(74984),i=n(36227),B=n(54226)},11959:(X,L,n)=>{n.d(L,{h:()=>p});var e=n(76885),o=n(71733);const p=I=>{const i=JSON.stringify({datasource:I.name,context:"explore"});return e.kM.renderUrl(o.I.assureBaseUrl("/explore"),{left:i})}}}]);

//# sourceMappingURL=1217.f0f1dfda2bbabce4bd04.js.map