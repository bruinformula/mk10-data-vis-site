"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[7914],{20851:(D,E,n)=>{n.d(E,{GU:()=>d,YO:()=>p,qm:()=>_});var s=n(74848),e=n(32196),x=n(96540),r=n(40845),o=n(19361),f=n(38645);const _=({children:i,enterAnimation:a=!0})=>{const u=(0,r.of)(p);return(0,s.jsx)("div",{className:(0,e.cx)(u.loginInnerBox,a&&u.enterAnimation),children:i})},d=({children:i,branding:a,isChangingPassword:u})=>{const t=(0,r.of)(p),[P,h]=(0,x.useState)(!1),M=a?.loginSubtitle??o.M.GetLoginSubTitle(),g=a?.loginTitle??o.M.LoginTitle,m=a?.loginBoxBackground||o.M.LoginBoxBackground(),O=a?.loginLogo,j=a?.hideEdition??o.M.HideEdition;return(0,x.useEffect)(()=>h(!0),[]),(0,s.jsxs)(o.M.LoginBackground,{className:(0,e.cx)(t.container,P&&t.loginAnim,a?.loginBackground),children:[(0,s.jsx)("div",{className:t.loginMain,children:(0,s.jsxs)("div",{className:(0,e.cx)(t.loginContent,m,"login-content-box"),children:[(0,s.jsxs)("div",{className:t.loginLogoWrapper,children:[(0,s.jsx)(o.M.LoginLogo,{className:t.loginLogo,logo:O}),(0,s.jsx)("div",{className:t.titleWrapper,children:u?(0,s.jsx)("h1",{className:t.mainTitle,children:"Update your password"}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h1",{className:t.mainTitle,children:g}),M&&(0,s.jsx)("h3",{className:t.subTitle,children:M})]})})]}),(0,s.jsx)("div",{className:t.loginOuterBox,children:i})]})}),a?.hideFooter?(0,s.jsx)(s.Fragment,{}):(0,s.jsx)(f.wi,{hideEdition:j,customLinks:a?.footerLinks})]})},c=(0,e.keyframes)`
from{
  opacity: 0;
  transform: translate(-60px, 0px);
}

to{
  opacity: 1;
  transform: translate(0px, 0px);
}`,p=i=>({loginMain:(0,e.css)({flexGrow:1,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",minWidth:"100%"}),container:(0,e.css)({minHeight:"100%",backgroundPosition:"center",backgroundRepeat:"no-repeat",flex:1,minWidth:"100%",marginLeft:0,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}),loginAnim:(0,e.css)({"&:before":{opacity:1},".login-content-box":{opacity:1}}),submitButton:(0,e.css)({justifyContent:"center",width:"100%"}),loginLogo:(0,e.css)({width:"100%",maxWidth:60,marginBottom:i.spacing(2),[i.breakpoints.up("sm")]:{maxWidth:100}}),loginLogoWrapper:(0,e.css)({display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",padding:i.spacing(3)}),titleWrapper:(0,e.css)({textAlign:"center"}),mainTitle:(0,e.css)({fontSize:22,[i.breakpoints.up("sm")]:{fontSize:32}}),subTitle:(0,e.css)({fontSize:i.typography.size.md,color:i.colors.text.secondary}),loginContent:(0,e.css)({maxWidth:478,width:"calc(100% - 2rem)",display:"flex",alignItems:"stretch",flexDirection:"column",position:"relative",justifyContent:"flex-start",zIndex:1,minHeight:320,borderRadius:i.shape.radius.default,padding:i.spacing(2,0),opacity:0,[i.transitions.handleMotion("no-preference","reduce")]:{transition:"opacity 0.5s ease-in-out"},[i.breakpoints.up("sm")]:{minHeight:i.spacing(40),justifyContent:"center"}}),loginOuterBox:(0,e.css)({display:"flex",overflowY:"hidden",alignItems:"center",justifyContent:"center"}),loginInnerBox:(0,e.css)({padding:i.spacing(0,2,2,2),display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",flexGrow:1,maxWidth:415,width:"100%",transform:"translate(0px, 0px)",[i.transitions.handleMotion("no-preference")]:{transition:"0.25s ease"}}),enterAnimation:(0,e.css)({[i.transitions.handleMotion("no-preference")]:{animation:`${c} ease-out 0.2s`}})})},78361:(D,E,n)=>{n.d(E,{s:()=>f});var s=n(74848),e=n(96540),x=n(13544),r=n(10354),o=n(29158);const f=(0,e.forwardRef)((_,d)=>{const[c,p]=(0,e.useState)(!1);return(0,s.jsx)(r.p,{..._,type:c?"text":"password","data-testid":x.Tp.pages.Login.password,ref:d,suffix:(0,s.jsx)(o.K,{name:c?"eye-slash":"eye","aria-controls":_.id,role:"switch","aria-checked":c,onClick:()=>{p(!c)},tooltip:c?"Hide password":"Show password"})})});f.displayName="PasswordField"},27914:(D,E,n)=>{n.r(E),n.d(E,{SignupPage:()=>u,default:()=>t});var s=n(74848),e=n(49785),x=n(17172),r=n(88575),o=n(10354),f=n(67061),_=n(55852),d=n(2913),c=n(3169),p=n(35538),i=n(20851),a=n(78361);const u=({queryParams:P})=>{const h=(0,c._2)(),{handleSubmit:M,formState:{errors:g},register:m,getValues:O}=(0,e.mN)({defaultValues:{email:P.email,code:P.code}}),j=async l=>{l.name===""&&delete l.name,delete l.confirm,(await(0,x.AI)().post("/api/user/signup/step2",{email:l.email,code:l.code,username:l.email,orgName:l.orgName,password:l.password,name:l.name}).catch(L=>{const B=L.data?.message||L;h.warning(B)})).code==="redirect-to-select-org"&&window.location.assign((0,d.zj)().appSubUrl+"/profile/select-org?signup=1"),window.location.assign((0,d.zj)().appSubUrl+"/")};return(0,s.jsx)(i.GU,{children:(0,s.jsx)(i.qm,{children:(0,s.jsxs)("form",{onSubmit:M(j),style:{width:"100%"},children:[(0,s.jsx)(r.D,{label:"Your name",children:(0,s.jsx)(o.p,{id:"user-name",...m("name"),placeholder:"(optional)"})}),(0,s.jsx)(r.D,{label:"Email",invalid:!!g.email,error:g.email?.message,children:(0,s.jsx)(o.p,{id:"email",...m("email",{required:"Email is required",pattern:{value:p.pL,message:"Email is invalid"}}),type:"email",placeholder:"Email"})}),!(0,d.zj)().autoAssignOrg&&(0,s.jsx)(r.D,{label:"Org. name",children:(0,s.jsx)(o.p,{id:"org-name",...m("orgName"),placeholder:"Org. name"})}),(0,d.zj)().verifyEmailEnabled&&(0,s.jsx)(r.D,{label:"Email verification code (sent to your email)",children:(0,s.jsx)(o.p,{id:"verification-code",...m("code"),placeholder:"Code"})}),(0,s.jsx)(r.D,{label:"Password",invalid:!!g.password,error:g?.password?.message,children:(0,s.jsx)(a.s,{id:"new-password",autoFocus:!0,autoComplete:"new-password",...m("password",{required:"Password is required"})})}),(0,s.jsx)(r.D,{label:"Confirm password",invalid:!!g.confirm,error:g?.confirm?.message,children:(0,s.jsx)(a.s,{id:"confirm-new-password",autoComplete:"new-password",...m("confirm",{required:"Confirmed password is required",validate:l=>l===O().password||"Passwords must match!"})})}),(0,s.jsxs)(f.B,{children:[(0,s.jsx)(_.$n,{type:"submit",children:"Submit"}),(0,s.jsx)(_.z9,{fill:"text",href:(0,d.zj)().appSubUrl+"/login",children:"Back to login"})]})]})})})},t=u}}]);

//# sourceMappingURL=7914.90d4e35881a1358d8d9f.js.map