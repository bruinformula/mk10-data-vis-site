"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[3594],{40715:(_,I,t)=>{t.d(I,{o:()=>R});var e=t(96540),s=t(31678),O=t(97007);function R(D){const y=(0,s.useDispatch)(),j=(0,e.useRef)(D);j.current=D,(0,e.useEffect)(()=>()=>{y((0,O.N)({cleanupAction:j.current}))},[y])}},41965:(_,I,t)=>{t.d(I,{D:()=>y});var e=t(74848),s=t(32196),O=t(40845),R=t(60029),D=t(67061);function y({label:f,actions:H}){const W=(0,O.of)(j);return(0,e.jsxs)("div",{className:W.container,children:[(0,e.jsx)(R.J,{className:W.label,children:f}),(0,e.jsx)(D.B,{direction:"row",gap:1,children:H})]})}const j=f=>({container:(0,s.css)({display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",padding:f.spacing(1,2),backgroundColor:f.colors.background.secondary,borderBottom:`1px solid ${f.colors.border.medium}`}),label:(0,s.css)({margin:0})})},33594:(_,I,t)=>{t.d(I,{By:()=>pt,R_:()=>Se});var e=t(74848),s=t(32196),O=t(13999);function R(n,o){return(0,O.f)(n,-o)}const D=null;var y=t(87836),j=t(2940);function f(n,o){return(0,y.A)(n,o*j.Cg)}const H=null;function W(n,o){return(0,y.A)(n,o*j.s0)}const ae=null;function Y(n,o){return W(n,-o)}const G=null;var x=t(96540),k=t(49785),me=t(42941),Z=t(70713),oe=t(39601),u=t(32264),b=t(17172),E=t(40845),U=t(21633),N=t(67061),S=t(55852),Q=t(42418),le=t(90613),fe=t(84167),he=t(14186),ge=t(10354),pe=t(87978),xe=t(21780),ve=t(3169),Le=t(40715),be=t(94067),Be=t(75269),Me=t(61410),Ae=t(57220),ye=t(78742),Ie=t(88467),De=t(48205),Ee=t(41965),re=t(33302),We=t(83122),ee=t(38138),we=t(60782),Ue=t(32372),Ce=t(91793),Ke=t(14578),Fe=t(56034),ze=t(78369),ie=t(37390),Ve=t(67647),Oe=t(39558),Ge=t(82843),te=t(75214),Te=t(70026);function Je({onSelect:n,isOpen:o,onClose:i}){const a=(0,E.of)($e),[c,L]=(0,x.useState)(),[m,T]=(0,x.useState)(null),{useGetAlertmanagerAlertsQuery:F}=Ge.m,{currentData:C=[],isFetching:h,isError:J}=F({amSourceName:Ae.hY,filter:{inhibited:!0,silenced:!0,active:!0}}),[w,z]=(0,x.useState)(""),B=(0,x.useMemo)(()=>{const l={};return!h&&C&&C.forEach(r=>{l[r.labels.alertname]||(l[r.labels.alertname]=[]),l[r.labels.alertname].push(r)}),l},[h,C]),A=(0,x.useCallback)(l=>{L(l),T(null)},[]),g=(0,x.useMemo)(()=>{const l=Object.keys(B).filter(v=>v.toLowerCase().includes(w.toLowerCase())),r={};return l.forEach(v=>{r[v]=B[v]}),r},[B,w]);if(J)return null;const d=Object.keys(g||[]),p=({index:l,style:r})=>{if(!g)return null;const v=d[l],P=v===c;return(0,e.jsxs)("button",{type:"button",title:v,style:r,className:(0,s.cx)(a.rowButton,{[a.rowOdd]:l%2===1,[a.rowSelected]:P}),onClick:()=>A(v),children:[(0,e.jsx)("div",{className:(0,s.cx)(a.ruleTitle,a.rowButtonTitle),children:v}),(0,e.jsx)("div",{className:a.alertFolder,children:(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(Ke.I,{name:"folder"})," ",g[v][0].labels.grafana_folder??""]})})]})},K=(l,r)=>{const P=l.map(V=>V.labels).map(te.Dd),q=(0,Te.Q)(P),X=(0,Te.$)((0,te.Dd)(r.labels),q);return X.length?(0,te.M4)((0,te.zm)(X)):(0,te.M4)(r.labels)},$=({index:l,style:r})=>{const v=(0,x.useMemo)(()=>c?B[c]:[],[]),P=v[l],q=m?.includes(P),X=(0,x.useMemo)(()=>K(v,P),[v,P]),M=()=>{if(q&&m){T(m.filter(V=>V!==P));return}T([...m||[],P])};return(0,e.jsx)("button",{type:"button",style:r,className:(0,s.cx)(a.rowButton,a.instanceButton,{[a.rowOdd]:l%2===1,[a.rowSelected]:q}),onClick:M,children:(0,e.jsx)("div",{className:a.rowButtonTitle,title:P.labels.alertname,children:(0,e.jsx)(Fe.m,{placement:"bottom",content:(0,e.jsx)("pre",{children:JSON.stringify(P,null,2)}),theme:"info",children:(0,e.jsx)("div",{children:X.map((V,se)=>(0,e.jsx)(ze.v,{name:V,className:a.tag},se))})})})})},ce=()=>{const l=m?.map(r=>({status:"firing",annotations:r.annotations,labels:r.labels,startsAt:r.startsAt,endsAt:r.endsAt,generatorURL:r.generatorURL,fingerprint:r.fingerprint}))||[];n(l),de()},de=()=>{L(void 0),T(null),z(""),ne("")},ue=()=>{de(),i()},ne=l=>{z(l)};return(0,e.jsx)("div",{children:(0,e.jsxs)(ie.a,{title:"Select alert instances",className:a.modal,closeOnEscape:!0,isOpen:o,onDismiss:ue,contentClassName:a.modalContent,children:[(0,e.jsxs)("div",{className:a.container,children:[(0,e.jsx)(Ve.Z,{value:w,onChange:ne,title:"Search alert rule",placeholder:"Search alert rule",autoFocus:!0}),(0,e.jsx)("div",{children:c&&"Select one or more instances from the list below"||""}),(0,e.jsxs)("div",{className:a.column,children:[h&&(0,e.jsx)(Oe._,{text:"Loading rules...",className:a.loadingPlaceholder}),!h&&(0,e.jsx)(Z.Ay,{children:({height:l,width:r})=>(0,e.jsx)(Ce.Y1,{itemSize:50,height:l,width:r,itemCount:d.length,children:p})})]}),(0,e.jsxs)("div",{className:a.column,children:[!c&&!h&&(0,e.jsx)("div",{className:a.selectedRulePlaceholder,children:(0,e.jsx)("div",{children:"Select an alert rule to get a list of available firing instances"})}),h&&(0,e.jsx)(Oe._,{text:"Loading rule...",className:a.loadingPlaceholder}),c&&B[c].length&&!h&&(0,e.jsx)(Z.Ay,{children:({width:l,height:r})=>(0,e.jsx)(Ce.Y1,{itemSize:32,height:r,width:l,itemCount:B[c].length||0,children:$})})]})]}),(0,e.jsxs)(ie.a.ButtonRow,{children:[(0,e.jsx)(S.$n,{type:"button",variant:"secondary",onClick:ue,children:"Cancel"}),(0,e.jsx)(S.$n,{type:"button",variant:"primary",disabled:!(c&&m),onClick:()=>{c&&m&&ce()},children:"Add alert data to payload"})]})]})})}const $e=n=>{const o=(0,S.my)(n);return{container:(0,s.css)({display:"grid",gridTemplateColumns:"1fr 1.5fr",gridTemplateRows:"min-content auto",gap:n.spacing(2),flex:1}),tag:(0,s.css)({margin:"5px"}),column:(0,s.css)({flex:"1 1 auto"}),alertLabels:(0,s.css)({overflowX:"auto",height:"32px"}),ruleTitle:(0,s.css)({height:"22px",fontWeight:n.typography.fontWeightBold}),rowButton:(0,s.css)(o,{padding:n.spacing(.5),overflow:"hidden",textOverflow:"ellipsis",textAlign:"left",whiteSpace:"nowrap",cursor:"pointer",border:"2px solid transparent","&:disabled":{cursor:"not-allowed",color:n.colors.text.disabled}}),rowButtonTitle:(0,s.css)({overflowX:"auto"}),rowSelected:(0,s.css)({borderColor:n.colors.primary.border}),rowOdd:(0,s.css)({backgroundColor:n.colors.background.secondary}),instanceButton:(0,s.css)({display:"flex",gap:n.spacing(1),justifyContent:"space-between",alignItems:"center"}),loadingPlaceholder:(0,s.css)({height:"100%",display:"flex",justifyContent:"center",alignItems:"center"}),selectedRulePlaceholder:(0,s.css)({width:"100%",height:"100%",display:"flex",flexDirection:"column",justifyContent:"center",textAlign:"center",fontWeight:n.typography.fontWeightBold}),modal:(0,s.css)({height:"100%"}),modalContent:(0,s.css)({flex:1,display:"flex",flexDirection:"column"}),modalAlert:(0,s.css)({flexGrow:0}),warnIcon:(0,s.css)({fill:n.colors.warning.main}),labels:(0,s.css)({justifyContent:"flex-start"}),alertFolder:(0,s.css)({height:"20px",fontSize:n.typography.bodySmall.fontSize,color:n.colors.text.secondary,display:"flex",flexDirection:"row",justifyContent:"flex-start",columnGap:n.spacing(1),alignItems:"center"})}},He=[{name:"Receiver",type:"string",notes:"Name of the contact point that the notification is being sent to."},{name:"Status",type:"string",notes:"firing if at least one alert is firing, otherwise resolved"},{name:"Alerts",type:"[]Alert",notes:"List of alert objects that are included in this notification."},{name:"Alerts.Firing",type:"[]Alert",notes:"List of firing alerts"},{name:"Alerts.Resolved",type:"[]Alert",notes:"List of resolved alerts"},{name:"GroupLabels",type:"KeyValue",notes:"Labels these alerts were grouped by."},{name:"CommonLabels",type:"KeyValue",notes:"Labels common to all the alerts included in this notification."},{name:"CommonAnnotations",type:"KeyValue",notes:"Annotations common to all the alerts included in this notification."},{name:"ExternalURL",type:"string",notes:"Back link to the Grafana that sent the notification."}],Ye=[{name:"labels",type:"Object{}",notes:"Set of labels attached to the alert."},{name:"annotations",type:"Object{}",notes:"Set of annotations attached to the alert."},{name:"startsAt",type:"string (ISO8601)",notes:"Time the alert started firing."},{name:"endsAt",type:"string (ISO8601)",notes:"Time the alert ends firing."}],Ze=[{name:"Status",type:"string",notes:"firing or resolved."},{name:"Labels",type:"KeyValue",notes:"Set of labels attached to the alert."},{name:"Annotations",type:"KeyValue",notes:"Set of annotations attached to the alert."},{name:"Values",type:"KeyValue",notes:"The values of all instant queries, reduce and math expressions, and classic conditions for the alert. It does not contain time series data."},{name:"StartsAt",type:"time.Time",notes:"Time the alert started firing."},{name:"EndsAt",type:"time.Time",notes:"Only set if the end time of an alert is known. Otherwise set to a configurable timeout period from the time since the last alert was received."},{name:"GeneratorURL",type:"string",notes:"A back link to Grafana or external Alertmanager."},{name:"SilenceURL",type:"string",notes:"Link to Grafana silence for with labels for this alert pre-filled. Only for Grafana managed alerts."},{name:"DashboardURL",type:"string",notes:"Link to Grafana dashboard, if alert rule belongs to one. Only for Grafana managed alerts."},{name:"PanelURL",type:"string",notes:"Link to Grafana dashboard panel, if alert rule belongs to one. Only for Grafana managed alerts."},{name:"Fingerprint",type:"string",notes:"Fingerprint that can be used to identify the alert."},{name:"ValueString",type:"string",notes:"String that contains the labels and value of each reduced expression in the alert."}],Qe=[{name:"SortedPairs",returns:"KeyValue",notes:"Returns sorted list of key & value string pairs"},{name:"Remove",args:"[]string",returns:"KeyValue",notes:"Returns a copy of the Key/Value map without the given keys."},{name:"Names",returns:"[]string",notes:"List of label names"},{name:"Values",returns:"[]string",notes:"List of label values"}],Xe=`{
  "summary": "alert summary",
  "description": "alert description"
}
`;var Pe=t(35108);function ke(){const n=(0,E.of)(qe),o=(0,e.jsx)(je,{caption:(0,e.jsxs)("h4",{className:n.header,children:["Alert template data ",(0,e.jsx)("span",{children:"Available only when in the context of an Alert (e.g. inside .Alerts loop)"})]}),dataItems:Ze});return(0,e.jsx)(N.B,{gap:2,children:(0,e.jsx)(je,{caption:(0,e.jsx)("h4",{className:n.header,children:"Template Data"}),dataItems:He,typeRenderer:i=>i==="[]Alert"?(0,e.jsx)(Pe.B,{content:o,children:(0,e.jsx)("div",{className:n.interactiveType,children:i})}):i==="KeyValue"?(0,e.jsx)(Pe.B,{content:(0,e.jsx)(_e,{}),children:(0,e.jsx)("div",{className:n.interactiveType,children:i})}):i})})}const qe=n=>({header:(0,s.css)({color:n.colors.text.primary,span:{color:n.colors.text.secondary,fontSize:n.typography.bodySmall.fontSize}}),interactiveType:(0,s.css)({color:n.colors.text.link})});function je({dataItems:n,caption:o,typeRenderer:i}){const a=(0,E.of)(Re);return(0,e.jsxs)("table",{className:a.table,children:[o&&(0,e.jsx)("caption",{children:o}),(0,e.jsx)("thead",{children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("th",{children:"Name"}),(0,e.jsx)("th",{children:"Type"}),(0,e.jsx)("th",{children:"Notes"})]})}),(0,e.jsx)("tbody",{children:n.map(({name:c,type:L,notes:m},T)=>(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:c}),(0,e.jsx)("td",{children:i?i(L):L}),(0,e.jsx)("td",{children:m})]},T))})]})}function _e(){const n=(0,E.of)(Re);return(0,e.jsxs)("div",{children:["KeyValue is a set of key/value string pairs that represent labels and annotations.",(0,e.jsx)("pre",{children:(0,e.jsx)("code",{children:Xe})}),(0,e.jsxs)("table",{className:n.table,children:[(0,e.jsx)("caption",{children:"Key-value methods"}),(0,e.jsx)("thead",{children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("th",{children:"Name"}),(0,e.jsx)("th",{children:"Arguments"}),(0,e.jsx)("th",{children:"Returns"}),(0,e.jsx)("th",{children:"Notes"})]})}),(0,e.jsx)("tbody",{children:Qe.map(({name:o,args:i,returns:a,notes:c})=>(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:o}),(0,e.jsx)("td",{children:i}),(0,e.jsx)("td",{children:a}),(0,e.jsx)("td",{children:c})]},o))})]})]})}const Re=n=>({table:(0,s.css)({borderCollapse:"collapse",width:"100%",caption:{captionSide:"top"},"td, th":{padding:n.spacing(1,1)},thead:{fontWeight:n.typography.fontWeightBold},"tbody tr:nth-child(2n + 1)":{backgroundColor:n.colors.background.secondary},"tbody td:nth-child(1)":{fontWeight:n.typography.fontWeightBold},"tbody td:nth-child(2)":{fontStyle:"italic"}})});var et=t(2543),tt=t(10860),nt=t(94354),st=t(31099),at=t(97171);const ot={annotations:[{key:"",value:""}],labels:[{key:"",value:""}],status:"firing"},lt=({isOpen:n,onDismiss:o,onAccept:i})=>{const a=(0,E.of)(rt),[c,L]=(0,x.useState)([]),m=(0,k.mN)({defaultValues:ot,mode:"onBlur"}),T=m.watch("annotations"),F=m.watch("labels"),[C,h]=(0,x.useState)("firing"),J=()=>{const A={annotations:T.filter(({key:g,value:d})=>!!g&&!!d).reduce((g,{key:d,value:p})=>({...g,[d]:p}),{}),labels:F.filter(({key:g,value:d})=>!!g&&!!d).reduce((g,{key:d,value:p})=>({...g,[d]:p}),{}),startsAt:"2023-04-01T00:00:00Z",endsAt:C==="firing"?(0,O.f)(new Date,1).toISOString():R(new Date,1).toISOString(),status:C,fingerprint:(0,et.uniqueId)("fingerprint_")};L(g=>[...g,A]),m.reset()},w=()=>{i(c),L([]),m.reset(),h("firing")},z=()=>{const A=F.some(d=>d.key!==""&&d.value!==""),g=T.some(d=>d.key!==""&&d.value!=="");return A||g},B=[{label:"Firing",value:"firing"},{label:"Resolved",value:"resolved"}];return(0,e.jsx)(ie.a,{onDismiss:o,isOpen:n,title:"Add custom alerts",children:(0,e.jsx)(k.Op,{...m,children:(0,e.jsxs)("form",{onSubmit:A=>{A.preventDefault(),A.stopPropagation(),m.reset(),h("firing")},children:[(0,e.jsx)(e.Fragment,{children:(0,e.jsx)(tt.Z,{children:(0,e.jsxs)(N.B,{direction:"column",gap:1,children:[(0,e.jsx)("div",{className:a.section,children:(0,e.jsx)(st.A,{})}),(0,e.jsx)("div",{className:a.section,children:(0,e.jsx)(at.Ay,{})}),(0,e.jsxs)("div",{className:a.flexWrapper,children:[(0,e.jsx)(nt.z,{value:C,options:B,onChange:A=>h(A)}),(0,e.jsx)(S.$n,{onClick:J,className:a.onAddButton,icon:"plus-circle",type:"button",variant:"secondary",disabled:!z(),children:"Add alert data"})]})]})})}),(0,e.jsx)("div",{className:a.onSubmitWrapper}),c.length>0&&(0,e.jsxs)(N.B,{direction:"column",gap:1,children:[(0,e.jsx)("h5",{children:" Review alert data to add to the payload:"}),(0,e.jsx)("pre",{className:a.result,"data-testid":"payloadJSON",children:JSON.stringify(c,null,2)})]}),(0,e.jsx)("div",{className:a.onSubmitWrapper,children:(0,e.jsx)(ie.a.ButtonRow,{children:(0,e.jsx)(S.$n,{onClick:w,disabled:c.length===0,className:a.onSubmitButton,children:"Add alert data to payload"})})})]})})})},rt=n=>({section:(0,s.css)({marginBottom:n.spacing(2)}),onAddButton:(0,s.css)({flex:"none",width:"fit-content",paddingRight:n.spacing(1),marginLeft:"auto"}),flexWrapper:(0,s.css)({display:"flex",flexDirection:"row",justifyContent:"space-between"}),onSubmitWrapper:(0,s.css)({display:"flex",flexDirection:"row",alignItems:"baseline",justifyContent:"flex-end"}),onSubmitButton:(0,s.css)({marginLeft:n.spacing(2)}),result:(0,s.css)({width:"570px",height:"363px"})}),it="Reset to defaults";function ct({payload:n,setPayload:o,defaultPayload:i,setPayloadFormatError:a,payloadFormatError:c,className:L}){const m=(0,E.of)(ut),T=()=>{o(i)},[F,C]=(0,x.useState)(!1),h=()=>{C(!1)},J=c!==null,w=()=>{try{const p=JSON.parse(n);JSON.stringify([...p]),a(null)}catch(p){throw a(p instanceof Error?p.message:"Invalid JSON."),p}},z=()=>{try{w(),C(!0)}catch{}},B=()=>{try{w(),d(!0)}catch{}},A=p=>{h(),d(!1),o(K=>{const $=JSON.parse(K);return JSON.stringify([...$,...p],void 0,2)})},[g,d]=(0,x.useState)(!1);return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)("div",{className:(0,s.cx)(m.wrapper,L),children:[(0,e.jsx)(Ee.D,{label:"Payload",actions:(0,e.jsxs)(N.B,{direction:"row",alignItems:"center",gap:.5,children:[(0,e.jsx)(We.m,{overlay:(0,e.jsxs)(ee.W,{children:[(0,e.jsx)(ee.W.Item,{label:"Use existing alert instances",disabled:J,onClick:B}),(0,e.jsx)(ee.W.Item,{label:"Add custom alert instance",disabled:J,onClick:z}),(0,e.jsx)(ee.W.Divider,{}),(0,e.jsx)(ee.W.Item,{label:it,onClick:T,destructive:!0})]}),children:(0,e.jsx)(S.$n,{variant:"secondary",size:"sm",icon:"angle-down",children:"Edit payload"})}),(0,e.jsx)(we.G,{content:(0,e.jsx)(dt,{}),placement:"top",fitContent:!0,children:(0,e.jsx)(S.$n,{variant:"secondary",fill:"outline",size:"sm",icon:"question-circle",children:"Help"})})]})}),(0,e.jsx)("div",{className:m.editorWrapper,children:(0,e.jsx)(Z.Ay,{children:({width:p,height:K})=>(0,e.jsx)(Ue.B,{containerStyles:m.editorContainer,width:p,height:K,language:"json",showLineNumbers:!0,showMiniMap:!1,value:n,readOnly:!1,onBlur:o,monacoOptions:{scrollBeyondLastLine:!1}})})})]}),(0,e.jsx)(lt,{isOpen:F,onDismiss:h,onAccept:A}),(0,e.jsx)(Je,{onSelect:A,isOpen:g,onClose:()=>d(!1)})]})}const dt=()=>(0,e.jsx)(je,{dataItems:Ye}),ut=n=>({wrapper:(0,s.css)({display:"flex",flexDirection:"column",height:"100%"}),tooltip:(0,s.css)({paddingLeft:n.spacing(1)}),label:(0,s.css)({margin:0}),editorWrapper:(0,s.css)({flex:1}),editorContainer:(0,s.css)({width:"fit-content",border:"none"}),templateDataDocsHeader:(0,s.css)({color:n.colors.text.primary,span:{color:n.colors.text.secondary,fontSize:n.typography.bodySmall.fontSize}})});var mt=t(18996),ft=t(78253),ht=t(57954);const gt=Object.freeze({title:"",content:""}),jt=n=>n.pathname.endsWith("/duplicate"),pt=({originalTemplate:n,prefill:o,alertmanager:i})=>{const a=(0,E.of)(Ne),c=(0,ve._2)(),L=(0,re.xW)({alertmanager:i}),m=(0,re.A1)({alertmanager:i}),{titleIsUnique:T}=(0,re.lx)({alertmanager:i});(0,Le.o)(M=>M.unifiedAlerting.saveAMConfig=Ie.jA);const F=(0,x.useRef)(null),C=i===Ae.hY,{error:h}=(0,Me.$)(M=>M.saveAMConfig),[J,w]=(0,me.A)(!1),[z,B]=(0,x.useState)(Se),[A,g]=(0,x.useState)(null),{isProvisioned:d}=(0,re.OA)(n),p=n?{title:n.title,content:n.content}:void 0,K=(0,U.h)({direction:"column",initialSize:C?.5:1,dragPosition:"middle"}),$=(0,U.h)({direction:"row",initialSize:C?.6:1,dragPosition:"middle"}),ce=(0,k.mN)({mode:"onSubmit",defaultValues:o??p??gt}),{handleSubmit:de,register:ue,formState:{errors:ne,isSubmitting:l},getValues:r,setValue:v,watch:P}=ce,q=async M=>{const V=(0,ye.nL)("/alerting/notifications",i,{tab:be.ActiveTab.NotificationTemplates});try{n?await m({template:n,patch:M}):await L({templateValues:M}),c.success("Template saved",`Template ${M.title} has been saved`),oe.Ny.push(V)}catch(se){c.error("Error saving template",(0,ye.JZ)(se))}},X=(0,x.useMemo)(()=>(0,e.jsxs)(N.B,{children:[(0,e.jsx)(S.$n,{onClick:()=>F.current?.requestSubmit(),variant:"primary",size:"sm",disabled:l,children:"Save"}),(0,e.jsx)(S.z9,{disabled:l,href:(0,ye.nL)("alerting/notifications",i,{tab:be.ActiveTab.NotificationTemplates}),variant:"secondary",size:"sm",children:"Cancel"})]}),[i,l]);return(0,xe.YO)(X),(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)(k.Op,{...ce,children:[!u.$.featureToggles.singleTopNav&&(0,e.jsx)(Be.H,{actions:X}),(0,e.jsxs)("form",{onSubmit:de(q),ref:F,className:a.form,"aria-label":"Template form",children:[h&&(0,e.jsx)(Q.F,{severity:"error",title:"Error saving template",children:h.message||(0,b.NF)(h)&&h.data?.message||String(h)}),d&&(0,e.jsx)(le.a,{grow:0,children:(0,e.jsx)(De.Yi,{resource:De.hk.Template})}),(0,e.jsxs)(fe.n,{disabled:d,className:a.fieldset,children:[(0,e.jsx)(he.I,{label:"Template name",error:ne?.title?.message,invalid:!!ne.title?.message,required:!0,className:a.nameField,children:(0,e.jsx)(ge.p,{...ue("title",{required:{value:!0,message:"Required."},validate:{titleIsUnique:T}}),placeholder:"Give your template a title",width:42,autoFocus:!0,id:"new-template-name"})}),(0,e.jsxs)("div",{...$.containerProps,className:a.contentContainer,children:[(0,e.jsx)("div",{...$.primaryProps,children:(0,e.jsxs)("div",{...K.containerProps,className:a.contentField,children:[(0,e.jsx)("div",{...K.primaryProps,children:(0,e.jsxs)("div",{className:(0,s.cx)(a.flexColumn,a.containerWithBorderAndRadius,a.minEditorSize),children:[(0,e.jsx)(Ee.D,{label:"Template",actions:(0,e.jsx)(S.$n,{icon:"question-circle",size:"sm",fill:"outline",variant:"secondary",onClick:w,children:"Help"})}),(0,e.jsx)(le.a,{flex:1,children:(0,e.jsx)(Z.Ay,{children:({width:M,height:V})=>(0,e.jsx)(mt.K,{value:r("content"),onBlur:se=>v("content",se),containerStyles:a.editorContainer,width:M,height:V})})})]})}),C&&(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("div",{...K.splitterProps}),(0,e.jsx)("div",{...K.secondaryProps,children:(0,e.jsx)("div",{className:(0,s.cx)(a.containerWithBorderAndRadius,a.minEditorSize,a.payloadEditor,a.flexFull),children:(0,e.jsx)(ct,{payload:z,defaultPayload:Se,setPayload:B,setPayloadFormatError:g,payloadFormatError:A})})})]})]})}),C&&(0,e.jsx)(e.Fragment,{children:(0,e.jsxs)("div",{...$.secondaryProps,children:[(0,e.jsx)("div",{...$.splitterProps}),(0,e.jsx)(ft.p,{payload:z,templateName:P("title"),setPayloadFormatError:g,payloadFormatError:A,className:(0,s.cx)(a.templatePreview,a.minEditorSize)})]})})]})]})]})]}),J&&(0,e.jsx)(pe._,{title:"Templating cheat sheet",onClose:w,size:"lg",children:(0,e.jsx)(vt,{})})]})};function xt(){const n=(0,E.of)(Ne);return(0,e.jsxs)(Q.F,{title:"How to",severity:"info",children:[(0,e.jsxs)(N.B,{direction:"row",children:[(0,e.jsxs)("div",{children:["Grafana uses Go templating language to create notification messages.",(0,e.jsx)("br",{}),"To find out more about templating please visit our documentation."]}),(0,e.jsx)("div",{children:(0,e.jsx)(S.z9,{href:"https://grafana.com/docs/grafana/latest/alerting/manage-notifications/template-notifications/",target:"_blank",icon:"external-link-alt",variant:"secondary",children:"Templating documentation"})})]}),(0,e.jsxs)("div",{className:n.snippets,children:["For auto-completion of common templating code, type the following keywords in the content editor:",(0,e.jsx)("div",{className:n.code,children:Object.values(ht.L).map(o=>o.label).join(", ")})]})]})}function vt(){return(0,e.jsxs)(N.B,{direction:"column",gap:1,children:[(0,e.jsx)(xt,{}),(0,e.jsx)(ke,{})]})}const Ne=n=>{const o=n.breakpoints.down("md");return{flexFull:(0,s.css)({flex:1}),minEditorSize:(0,s.css)({minHeight:300,minWidth:300}),payloadEditor:(0,s.css)({minHeight:0}),containerWithBorderAndRadius:(0,s.css)({borderRadius:n.shape.radius.default,border:`1px solid ${n.colors.border.medium}`}),flexColumn:(0,s.css)({display:"flex",flex:1,flexDirection:"column"}),form:(0,s.css)({label:"template-form",height:"100%",display:"flex",flexDirection:"column"}),fieldset:(0,s.css)({label:"template-fieldset",flex:1,display:"flex",flexDirection:"column"}),label:(0,s.css)({margin:0}),nameField:(0,s.css)({marginBottom:n.spacing(1)}),contentContainer:(0,s.css)({flex:1,display:"flex",flexDirection:"row"}),contentField:(0,s.css)({display:"flex",flexDirection:"column",flex:1,marginBottom:0}),templatePreview:(0,s.css)({flex:1,display:"flex"}),templatePayload:(0,s.css)({flex:1}),editorContainer:(0,s.css)({width:"fit-content",border:"none"}),payloadCollapseButton:(0,s.css)({backgroundColor:n.colors.info.transparent,margin:0,[o]:{display:"none"}}),snippets:(0,s.css)({marginTop:n.spacing(2),fontSize:n.typography.bodySmall.fontSize}),code:(0,s.css)({color:n.colors.text.secondary,fontWeight:n.typography.fontWeightBold})}},yt=[{status:"firing",annotations:{summary:"Instance instance1 has been down for more than 5 minutes"},labels:{alertname:"InstanceDown",instance:"instance1"},startsAt:R(new Date,1).toISOString(),endsAt:f(new Date,5).toISOString(),fingerprint:"a5331f0d5a9d81d4",generatorURL:"http://grafana.com/alerting/grafana/cdeqmlhvflz40f/view"},{status:"resolved",annotations:{summary:"CPU usage above 90%"},labels:{alertname:"CpuUsage",instance:"instance1"},startsAt:Y(new Date,4).toISOString(),endsAt:new Date().toISOString(),fingerprint:"b77d941310f9d381",generatorURL:"http://grafana.com/alerting/grafana/oZSMdGj7z/view"}],Se=JSON.stringify(yt,null,2)},78253:(_,I,t)=>{t.d(I,{P:()=>oe,p:()=>x});var e=t(74848),s=t(32196),O=t(2543),R=t.n(O),D=t(49785),y=t(70713),j=t(40845),f=t(55852),H=t(90613),W=t(42418),ae=t(78742),Y=t(41965),G=t(10506);function x({payload:u,templateName:b,payloadFormatError:E,setPayloadFormatError:U,className:N}){const S=(0,j.of)(Z),{watch:Q}=(0,D.xW)(),le=Q("content"),{data:fe,isLoading:he,onPreview:ge,error:pe}=(0,G.g)(le,b,u,U),xe=oe(pe,E,fe);return(0,e.jsxs)("div",{className:(0,s.cx)(S.container,N),children:[(0,e.jsx)(Y.D,{label:"Preview",actions:(0,e.jsx)(f.$n,{disabled:he,icon:"sync","aria-label":"Refresh preview",onClick:ge,size:"sm",variant:"secondary",children:"Refresh"})}),(0,e.jsx)(H.a,{flex:1,children:(0,e.jsx)(y.Ay,{disableWidth:!0,children:({height:ve})=>(0,e.jsx)("div",{className:S.viewerContainer({height:ve}),children:xe})})})]})}function k({previews:u}){const b=(0,j.of)(Z),E=u.length===1;return(0,e.jsx)("ul",{className:b.viewer.container,children:u.map(U=>(0,e.jsxs)("li",{className:b.viewer.box,children:[E?null:(0,e.jsx)("header",{className:b.viewer.header,children:U.name}),(0,e.jsx)("pre",{className:b.viewer.pre,children:U.text??"<Empty>"})]},U.name))})}function me({errors:u}){return u.map(b=>(0,e.jsx)(W.F,{title:(0,O.compact)([b.name,b.kind]).join(" \u2013 "),children:b.message},(0,O.uniqueId)("errors-list")))}const Z=u=>({container:(0,s.css)({label:"template-preview-container",display:"flex",flexDirection:"column",borderRadius:u.shape.radius.default,border:`1px solid ${u.colors.border.medium}`}),viewerContainer:({height:b})=>(0,s.css)({height:b,overflow:"auto",backgroundColor:u.colors.background.primary}),viewer:{container:(0,s.css)({display:"flex",flexDirection:"column",height:"inherit"}),box:(0,s.css)({display:"flex",flexDirection:"column",borderBottom:`1px solid ${u.colors.border.medium}`,height:"inherit"}),header:(0,s.css)({fontSize:u.typography.bodySmall.fontSize,padding:u.spacing(1,2),borderBottom:`1px solid ${u.colors.border.medium}`,backgroundColor:u.colors.background.secondary}),errorText:(0,s.css)({color:u.colors.error.text}),pre:(0,s.css)({backgroundColor:"transparent",margin:0,border:"none",padding:u.spacing(2)})}});function oe(u,b,E){const U=u?(0,ae.JZ)(u):void 0,N=b||U,S=E?.results??[],Q=E?.errors;return(0,e.jsxs)(e.Fragment,{children:[N&&(0,e.jsx)(W.F,{severity:"error",title:"Error",children:N}),Q&&(0,e.jsx)(me,{errors:Q}),S&&(0,e.jsx)(k,{previews:S})]})}},10506:(_,I,t)=>{t.d(I,{g:()=>O});var e=t(96540),s=t(76242);function O(R,D,y,j){const[f,{data:H,error:W,isLoading:ae}]=(0,s.vj)(),Y=(0,e.useCallback)(()=>{try{const G=JSON.parse(y);JSON.stringify([...G]),f({template:R,alerts:G,name:D}),j(null)}catch(G){j(G instanceof Error?G.message:"Invalid JSON.")}},[R,D,y,j,f]);return(0,e.useEffect)(()=>Y(),[Y]),{data:H,error:W,isLoading:ae,onPreview:Y}}},70026:(_,I,t)=>{t.d(I,{$:()=>O,Q:()=>R});var e=t(2543),s=t.n(e);function O(D,y){return D.filter(j=>!y.find(f=>JSON.stringify(f)===JSON.stringify(j)))}function R(D){const y=D.flatMap(f=>f);return(0,e.uniqBy)(y.filter(f=>y.filter(W=>(0,e.isEqual)(f,W)).length===Object.keys(D).length),f=>JSON.stringify(f))}}}]);

//# sourceMappingURL=3594.e10bbc514b4274c27dd0.js.map