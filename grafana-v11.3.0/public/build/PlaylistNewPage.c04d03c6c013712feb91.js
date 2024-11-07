"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[7616],{72235:(S,P,s)=>{s.d(P,{l:()=>h});var a=s(74848),m=s(32196),u=s(96540),E=s(49785);function h({defaultValues:g,onSubmit:y,validateOnMount:D=!1,validateFieldsOnMount:f,children:I,validateOn:C="onSubmit",maxWidth:p=600,...l}){const{handleSubmit:O,trigger:v,formState:x,...B}=(0,E.mN)({mode:C,defaultValues:g});return(0,u.useEffect)(()=>{D&&v(f)},[v,f,D]),(0,a.jsx)("form",{className:(0,m.css)({maxWidth:p!=="none"?p+"px":p,width:"100%"}),onSubmit:O(y),...l,children:I({errors:x.errors,formState:x,trigger:v,...B})})}},23833:(S,P,s)=>{s.d(P,{$:()=>H});var a=s(74848),m=s(96540),u=s(13544),E=s(32264),h=s(88575),g=s(10354),y=s(84167),D=s(67061),f=s(55852),I=s(72235),C=s(59429),p=s(99818),l=s(8484),O=s(65812),v=s(91076),x=s(32196),B=s(55127),R=s.n(B),K=s(40845),F=s(62930),N=s(14578),U=s(29158),$=s(46334);const L=({items:i,onDelete:e})=>{const o=(0,K.of)(W);if(!i?.length)return(0,a.jsx)("div",{children:(0,a.jsx)("em",{children:(0,a.jsx)(l.x6,{i18nKey:"playlist-edit.form.table-empty",children:"Playlist is empty. Add dashboards below."})})});const j=t=>{let c=t.type==="dashboard_by_tag"?"apps":"tag-alt";const r=[],n=t.dashboards?.[0];return t.dashboards?t.type==="dashboard_by_tag"?(r.push((0,a.jsx)($.E,{label:t.value,removeIcon:!1,count:0},t.value)),n?r.push((0,a.jsxs)("span",{children:["\xA0 ",R()("dashboard",t.dashboards.length,!0)]},"info")):(c="exclamation-triangle",r.push((0,a.jsx)("span",{children:"\xA0 No dashboards found"},"info")))):n?r.push(t.dashboards.length>1?(0,a.jsxs)("span",{children:["Multiple items found: $",t.value]},"info"):(0,a.jsx)("span",{children:n.name??t.value},"info")):(c="exclamation-triangle",r.push((0,a.jsxs)("span",{children:["\xA0 Not found: ",t.value]},"info"))):r.push((0,a.jsx)(F.y,{},"spinner")),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(N.I,{name:c,className:o.rightMargin},"icon"),r]})};return(0,a.jsx)(a.Fragment,{children:i.map((t,c)=>(0,a.jsx)(v.sx,{draggableId:`${c}`,index:c,children:r=>(0,a.jsxs)("div",{className:o.row,ref:r.innerRef,...r.draggableProps,...r.dragHandleProps,role:"row",children:[(0,a.jsx)("div",{className:o.actions,role:"cell","aria-label":`Playlist item, ${t.type}, ${t.value}`,children:j(t)}),(0,a.jsxs)("div",{className:o.actions,children:[(0,a.jsx)(U.K,{name:"times",size:"md",onClick:()=>e(c),"data-testid":u.Tp.pages.PlaylistForm.itemDelete,tooltip:(0,l.t)("playlist-edit.form.table-delete","Delete playlist item")}),(0,a.jsx)(N.I,{title:(0,l.t)("playlist-edit.form.table-drag","Drag and drop to reorder"),name:"draggabledots",size:"md"})]})]})},`${c}/${t.value}`))})};function W(i){return{row:(0,x.css)({padding:i.spacing(.75),background:i.colors.background.secondary,borderRadius:i.shape.radius.default,display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"3px",border:`1px solid ${i.colors.border.medium}`,"&:hover":{border:`1px solid ${i.colors.border.strong}`}}),rightMargin:(0,x.css)({marginRight:"5px"}),actions:(0,x.css)({alignItems:"center",justifyContent:"center",display:"flex"}),settings:(0,x.css)({label:"settings",textAlign:"right"})}}const z=({items:i,deleteItem:e,moveItem:o})=>{const j=t=>{t.destination&&o(t.source.index,t.destination?.index)};return(0,a.jsx)(y.n,{label:(0,l.t)("playlist-edit.form.table-heading","Dashboards"),children:(0,a.jsx)(v.JY,{onDragEnd:j,children:(0,a.jsx)(v.gL,{droppableId:"playlist-list",direction:"vertical",children:t=>(0,a.jsxs)("div",{ref:t.innerRef,...t.droppableProps,children:[(0,a.jsx)(L,{items:i,onDelete:e}),t.placeholder]})})})})};var V=s(16817),Y=s(86022);function G(i){const[e,o]=(0,m.useState)(i??[]);(0,V.A)(async()=>{for(const n of e)if(!n.dashboards){o(await(0,Y.qY)(e));return}},[e]);const j=(0,m.useCallback)(n=>{n&&o([...e,{type:"dashboard_by_uid",value:n.uid}])},[e]),t=(0,m.useCallback)(n=>{const d=n[0];if(!d||e.find(A=>A.value===d))return;const b={type:"dashboard_by_tag",value:d};o([...e,b])},[e]),c=(0,m.useCallback)((n,d)=>{if(n===d||!e[n])return;const b=Array.from(e),[A]=b.splice(n,1);b.splice(d,0,A),o(b)},[e]),r=(0,m.useCallback)(n=>{const d=e.slice();d.splice(n,1),o(d)},[e]);return{items:e,addByUID:j,addByTag:t,deleteItem:r,moveItem:c}}const H=({onSubmit:i,playlist:e})=>{const[o,j]=(0,m.useState)(!1),{name:t,interval:c,items:r}=e,n=(0,m.useMemo)(()=>()=>(0,O.getGrafanaSearcher)().tags({kind:["dashboard"]}),[]),{items:d,addByUID:b,addByTag:A,deleteItem:J,moveItem:X}=G(r),Q=M=>{j(!0),i({...M,items:d,uid:e.uid})};return(0,a.jsx)(I.l,{onSubmit:Q,validateOn:"onBlur",children:({register:M,errors:T})=>{const Z=d.length===0||Object.keys(T).length>0;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(h.D,{label:(0,l.t)("playlist-edit.form.name-label","Name"),invalid:!!T.name,error:T?.name?.message,children:(0,a.jsx)(g.p,{type:"text",...M("name",{required:(0,l.t)("playlist-edit.form.name-required","Name is required")}),placeholder:(0,l.t)("playlist-edit.form.name-placeholder","Name"),defaultValue:t,"aria-label":u.Tp.pages.PlaylistForm.name})}),(0,a.jsx)(h.D,{label:(0,l.t)("playlist-edit.form.interval-label","Interval"),invalid:!!T.interval,error:T?.interval?.message,children:(0,a.jsx)(g.p,{type:"text",...M("interval",{required:(0,l.t)("playlist-edit.form.interval-required","Interval is required")}),placeholder:(0,l.t)("playlist-edit.form.interval-placeholder","5m"),defaultValue:c??"5m","aria-label":u.Tp.pages.PlaylistForm.interval})}),(0,a.jsx)(z,{items:d,deleteItem:J,moveItem:X}),(0,a.jsxs)(y.n,{label:(0,l.t)("playlist-edit.form.heading","Add dashboards"),children:[(0,a.jsx)(h.D,{label:(0,l.t)("playlist-edit.form.add-title-label","Add by title"),children:(0,a.jsx)(C.b,{id:"dashboard-picker",onChange:b},d.length)}),(0,a.jsx)(h.D,{label:(0,l.t)("playlist-edit.form.add-tag-label","Add by tag"),children:(0,a.jsx)(p.$,{isClearable:!0,tags:[],hideValues:!0,tagOptions:n,onChange:A,placeholder:(0,l.t)("playlist-edit.form.add-tag-placeholder","Select a tag")})})]}),(0,a.jsxs)(D.B,{children:[(0,a.jsx)(f.$n,{type:"submit",variant:"primary",disabled:Z,icon:o?"spinner":void 0,children:(0,a.jsx)(l.x6,{i18nKey:"playlist-edit.form.save",children:"Save"})}),(0,a.jsx)(f.z9,{variant:"secondary",href:`${E.$.appSubUrl}/playlists`,children:(0,a.jsx)(l.x6,{i18nKey:"playlist-edit.form.cancel",children:"Cancel"})})]})]})}})}},62579:(S,P,s)=>{s.r(P),s.d(P,{PlaylistNewPage:()=>y,default:()=>D});var a=s(74848),m=s(96540),u=s(39601),E=s(21780),h=s(23833),g=s(86022);const y=()=>{const[f]=(0,m.useState)((0,g.aV)()),I=async p=>{await(0,g.NF)().createPlaylist(p),u.Ny.push("/playlists")},C={text:"New playlist",subTitle:"A playlist rotates through a pre-selected list of dashboards. A playlist can be a great way to build situational awareness, or just show off your metrics to your team or visitors."};return(0,a.jsx)(E.YW,{navId:"dashboards/playlists",pageNav:C,children:(0,a.jsx)(E.YW.Contents,{children:(0,a.jsx)(h.$,{onSubmit:I,playlist:f})})})},D=y}}]);

//# sourceMappingURL=PlaylistNewPage.c04d03c6c013712feb91.js.map