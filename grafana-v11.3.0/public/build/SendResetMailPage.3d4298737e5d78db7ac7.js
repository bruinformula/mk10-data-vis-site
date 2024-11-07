"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[3818],{2713:(M,m,t)=>{t.r(m),t.d(m,{SendResetMailPage:()=>g,default:()=>v});var n=t(74848),s=t(20851),x=t(32196),u=t(96540),a=t(49785),f=t(17172),p=t(40845),y=t(66864),c=t(55852),d=t(17408),o=t(88575),e=t(10354),l=t(67061),i=t(2913);const h=r=>(0,x.css)({color:r.colors.text.secondary,fontSize:r.typography.bodySmall.fontSize,fontWeight:r.typography.fontWeightRegular,marginTop:r.spacing(1),display:"block"}),j=()=>{const[r,E]=(0,u.useState)(!1),L=(0,p.of)(h),B=`${i.Ay.appSubUrl}/login`,{handleSubmit:C,register:D,formState:{errors:S}}=(0,a.mN)(),I=async O=>{await(0,f.AI)().post("/api/user/password/send-reset-email",O)&&E(!0)};return r?(0,n.jsxs)("div",{children:[(0,n.jsx)("p",{children:"An email with a reset link has been sent to the email address. You should receive it shortly."}),(0,n.jsx)(y.mc,{margin:"md"}),(0,n.jsx)(c.z9,{variant:"primary",href:B,children:"Back to login"})]}):(0,n.jsxs)("form",{onSubmit:C(I),children:[(0,n.jsx)(d.s,{children:"Reset password"}),(0,n.jsx)(o.D,{label:"User",description:"Enter your information to get a reset link sent to you",invalid:!!S.userOrEmail,error:S?.userOrEmail?.message,children:(0,n.jsx)(e.p,{id:"user-input",placeholder:"Email or username",...D("userOrEmail",{required:"Email or username is required"})})}),(0,n.jsxs)(l.B,{children:[(0,n.jsx)(c.$n,{type:"submit",children:"Send reset email"}),(0,n.jsx)(c.z9,{fill:"text",href:B,children:"Back to login"})]}),(0,n.jsx)("p",{className:L,children:"Did you forget your username or email? Contact your Grafana administrator."})]})},g=()=>(0,n.jsx)(s.GU,{children:(0,n.jsx)(s.qm,{children:(0,n.jsx)(j,{})})}),v=g},20851:(M,m,t)=>{t.d(m,{GU:()=>y,YO:()=>d,qm:()=>p});var n=t(74848),s=t(32196),x=t(96540),u=t(40845),a=t(19361),f=t(38645);const p=({children:o,enterAnimation:e=!0})=>{const l=(0,u.of)(d);return(0,n.jsx)("div",{className:(0,s.cx)(l.loginInnerBox,e&&l.enterAnimation),children:o})},y=({children:o,branding:e,isChangingPassword:l})=>{const i=(0,u.of)(d),[h,j]=(0,x.useState)(!1),g=e?.loginSubtitle??a.M.GetLoginSubTitle(),v=e?.loginTitle??a.M.LoginTitle,r=e?.loginBoxBackground||a.M.LoginBoxBackground(),E=e?.loginLogo,L=e?.hideEdition??a.M.HideEdition;return(0,x.useEffect)(()=>j(!0),[]),(0,n.jsxs)(a.M.LoginBackground,{className:(0,s.cx)(i.container,h&&i.loginAnim,e?.loginBackground),children:[(0,n.jsx)("div",{className:i.loginMain,children:(0,n.jsxs)("div",{className:(0,s.cx)(i.loginContent,r,"login-content-box"),children:[(0,n.jsxs)("div",{className:i.loginLogoWrapper,children:[(0,n.jsx)(a.M.LoginLogo,{className:i.loginLogo,logo:E}),(0,n.jsx)("div",{className:i.titleWrapper,children:l?(0,n.jsx)("h1",{className:i.mainTitle,children:"Update your password"}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("h1",{className:i.mainTitle,children:v}),g&&(0,n.jsx)("h3",{className:i.subTitle,children:g})]})})]}),(0,n.jsx)("div",{className:i.loginOuterBox,children:o})]})}),e?.hideFooter?(0,n.jsx)(n.Fragment,{}):(0,n.jsx)(f.wi,{hideEdition:L,customLinks:e?.footerLinks})]})},c=(0,s.keyframes)`
from{
  opacity: 0;
  transform: translate(-60px, 0px);
}

to{
  opacity: 1;
  transform: translate(0px, 0px);
}`,d=o=>({loginMain:(0,s.css)({flexGrow:1,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",minWidth:"100%"}),container:(0,s.css)({minHeight:"100%",backgroundPosition:"center",backgroundRepeat:"no-repeat",flex:1,minWidth:"100%",marginLeft:0,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}),loginAnim:(0,s.css)({"&:before":{opacity:1},".login-content-box":{opacity:1}}),submitButton:(0,s.css)({justifyContent:"center",width:"100%"}),loginLogo:(0,s.css)({width:"100%",maxWidth:60,marginBottom:o.spacing(2),[o.breakpoints.up("sm")]:{maxWidth:100}}),loginLogoWrapper:(0,s.css)({display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",padding:o.spacing(3)}),titleWrapper:(0,s.css)({textAlign:"center"}),mainTitle:(0,s.css)({fontSize:22,[o.breakpoints.up("sm")]:{fontSize:32}}),subTitle:(0,s.css)({fontSize:o.typography.size.md,color:o.colors.text.secondary}),loginContent:(0,s.css)({maxWidth:478,width:"calc(100% - 2rem)",display:"flex",alignItems:"stretch",flexDirection:"column",position:"relative",justifyContent:"flex-start",zIndex:1,minHeight:320,borderRadius:o.shape.radius.default,padding:o.spacing(2,0),opacity:0,[o.transitions.handleMotion("no-preference","reduce")]:{transition:"opacity 0.5s ease-in-out"},[o.breakpoints.up("sm")]:{minHeight:o.spacing(40),justifyContent:"center"}}),loginOuterBox:(0,s.css)({display:"flex",overflowY:"hidden",alignItems:"center",justifyContent:"center"}),loginInnerBox:(0,s.css)({padding:o.spacing(0,2,2,2),display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",flexGrow:1,maxWidth:415,width:"100%",transform:"translate(0px, 0px)",[o.transitions.handleMotion("no-preference")]:{transition:"0.25s ease"}}),enterAnimation:(0,s.css)({[o.transitions.handleMotion("no-preference")]:{animation:`${c} ease-out 0.2s`}})})}}]);

//# sourceMappingURL=SendResetMailPage.3d4298737e5d78db7ac7.js.map