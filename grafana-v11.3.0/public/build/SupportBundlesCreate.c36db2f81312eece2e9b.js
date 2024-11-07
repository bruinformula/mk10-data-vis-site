"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[1515],{72235:(A,d,t)=>{t.d(d,{l:()=>a});var e=t(74848),M=t(32196),o=t(96540),_=t(49785);function a({defaultValues:E,onSubmit:D,validateOnMount:u=!1,validateFieldsOnMount:c,children:i,validateOn:p="onSubmit",maxWidth:r=600,...n}){const{handleSubmit:P,trigger:B,formState:f,...C}=(0,_.mN)({mode:p,defaultValues:E});return(0,o.useEffect)(()=>{u&&B(c)},[B,c,u]),(0,e.jsx)("form",{className:(0,M.css)({maxWidth:r!=="none"?r+"px":r,width:"100%"}),onSubmit:P(D),...n,children:i({errors:f.errors,formState:f,trigger:B,...C})})}},33809:(A,d,t)=>{t.r(d),t.d(d,{SupportBundlesCreateUnconnected:()=>f,default:()=>C});var e=t(74848),M=t(96540),o=t(71468),_=t(42418),a=t(88575),E=t(10880),D=t(67061),u=t(55852),c=t(72235),i=t(21780),p=t(58330);const r=(0,e.jsx)("span",{children:"Choose the components for the support bundle. The support bundle will be available for 3 days after creation."}),n=l=>({collectors:l.supportBundles.supportBundleCollectors,isLoading:l.supportBundles.createBundlePageLoading,loadCollectorsError:l.supportBundles.loadBundlesError,createBundleError:l.supportBundles.createBundleError}),P={loadSupportBundleCollectors:p.OS,createSupportBundle:p.iO},B=(0,o.connect)(n,P),f=({collectors:l,isLoading:I,loadCollectorsError:h,createBundleError:v,loadSupportBundleCollectors:T,createSupportBundle:g})=>{const L=O=>{const s=Object.keys(O).filter(m=>O[m]);g({collectors:s})};(0,M.useEffect)(()=>{T()},[T]);const y=l.reduce((O,s)=>({...O,[s.uid]:s.default}),{});return(0,e.jsx)(i.YW,{navId:"support-bundles",pageNav:{text:"Create support bundle"},subTitle:r,children:(0,e.jsxs)(i.YW.Contents,{isLoading:I,children:[h&&(0,e.jsx)(_.F,{title:h,severity:"error"}),v&&(0,e.jsx)(_.F,{title:v,severity:"error"}),!!l.length&&(0,e.jsx)(c.l,{defaultValues:y,onSubmit:L,validateOn:"onSubmit",children:({register:O})=>(0,e.jsxs)(e.Fragment,{children:[[...l].sort((s,m)=>s.displayName.localeCompare(m.displayName)).map(s=>(0,e.jsx)(a.D,{children:(0,e.jsx)(E.S,{...O(s.uid),label:s.displayName,id:s.uid,description:s.description,defaultChecked:s.default,disabled:s.includedByDefault})},s.uid)),(0,e.jsxs)(D.B,{children:[(0,e.jsx)(u.$n,{type:"submit",children:"Create"}),(0,e.jsx)(u.z9,{href:"/support-bundles",variant:"secondary",children:"Cancel"})]})]})})]})})},C=B(f)},58330:(A,d,t)=>{t.d(d,{Hb:()=>c,OS:()=>i,WJ:()=>E,ac:()=>u,iO:()=>p});var e=t(2543),M=t.n(e),o=t(17172),_=t(39601),a=t(8212);function E(r=!1){return async n=>{try{r||n((0,a.sF)());const P=await(0,o.AI)().get("/api/support-bundles");n((0,a.sJ)(P))}finally{n((0,a.kH)())}}}const D=(0,e.throttle)(async r=>{const n=await(0,o.AI)().get("/api/support-bundles");r((0,a.sJ)(n))},1e3);function u(){return async r=>{r(D)}}function c(r){return async n=>{await(0,o.AI)().delete(`/api/support-bundles/${r}`),n(E(!0))}}function i(){return async r=>{try{r((0,a.Y1)());const n=await(0,o.AI)().get("/api/support-bundles/collectors");r((0,a.j7)(n))}catch{r((0,a.pB)("Error loading support bundles data collectors"))}finally{r((0,a.s7)())}}}function p(r){return async n=>{try{await(0,o.AI)().post("/api/support-bundles",r),_.Ny.push("/support-bundles")}catch{n((0,a.NV)("Error creating support bundle"))}}}}}]);

//# sourceMappingURL=SupportBundlesCreate.c36db2f81312eece2e9b.js.map