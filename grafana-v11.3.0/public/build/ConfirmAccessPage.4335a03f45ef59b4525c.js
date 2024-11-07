"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[1290,800],{20851:(T,m,s)=>{s.d(m,{GU:()=>l,YO:()=>p,qm:()=>v});var i=s(74848),t=s(32196),h=s(96540),g=s(40845),c=s(19361),f=s(38645);const v=({children:n,enterAnimation:d=!0})=>{const _=(0,g.of)(p);return(0,i.jsx)("div",{className:(0,t.cx)(_.loginInnerBox,d&&_.enterAnimation),children:n})},l=({children:n,branding:d,isChangingPassword:_})=>{const u=(0,g.of)(p),[E,r]=(0,h.useState)(!1),e=d?.loginSubtitle??c.M.GetLoginSubTitle(),a=d?.loginTitle??c.M.LoginTitle,o=d?.loginBoxBackground||c.M.LoginBoxBackground(),D=d?.loginLogo,y=d?.hideEdition??c.M.HideEdition;return(0,h.useEffect)(()=>r(!0),[]),(0,i.jsxs)(c.M.LoginBackground,{className:(0,t.cx)(u.container,E&&u.loginAnim,d?.loginBackground),children:[(0,i.jsx)("div",{className:u.loginMain,children:(0,i.jsxs)("div",{className:(0,t.cx)(u.loginContent,o,"login-content-box"),children:[(0,i.jsxs)("div",{className:u.loginLogoWrapper,children:[(0,i.jsx)(c.M.LoginLogo,{className:u.loginLogo,logo:D}),(0,i.jsx)("div",{className:u.titleWrapper,children:_?(0,i.jsx)("h1",{className:u.mainTitle,children:"Update your password"}):(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("h1",{className:u.mainTitle,children:a}),e&&(0,i.jsx)("h3",{className:u.subTitle,children:e})]})})]}),(0,i.jsx)("div",{className:u.loginOuterBox,children:n})]})}),d?.hideFooter?(0,i.jsx)(i.Fragment,{}):(0,i.jsx)(f.wi,{hideEdition:y,customLinks:d?.footerLinks})]})},x=(0,t.keyframes)`
from{
  opacity: 0;
  transform: translate(-60px, 0px);
}

to{
  opacity: 1;
  transform: translate(0px, 0px);
}`,p=n=>({loginMain:(0,t.css)({flexGrow:1,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",minWidth:"100%"}),container:(0,t.css)({minHeight:"100%",backgroundPosition:"center",backgroundRepeat:"no-repeat",flex:1,minWidth:"100%",marginLeft:0,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}),loginAnim:(0,t.css)({"&:before":{opacity:1},".login-content-box":{opacity:1}}),submitButton:(0,t.css)({justifyContent:"center",width:"100%"}),loginLogo:(0,t.css)({width:"100%",maxWidth:60,marginBottom:n.spacing(2),[n.breakpoints.up("sm")]:{maxWidth:100}}),loginLogoWrapper:(0,t.css)({display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",padding:n.spacing(3)}),titleWrapper:(0,t.css)({textAlign:"center"}),mainTitle:(0,t.css)({fontSize:22,[n.breakpoints.up("sm")]:{fontSize:32}}),subTitle:(0,t.css)({fontSize:n.typography.size.md,color:n.colors.text.secondary}),loginContent:(0,t.css)({maxWidth:478,width:"calc(100% - 2rem)",display:"flex",alignItems:"stretch",flexDirection:"column",position:"relative",justifyContent:"flex-start",zIndex:1,minHeight:320,borderRadius:n.shape.radius.default,padding:n.spacing(2,0),opacity:0,[n.transitions.handleMotion("no-preference","reduce")]:{transition:"opacity 0.5s ease-in-out"},[n.breakpoints.up("sm")]:{minHeight:n.spacing(40),justifyContent:"center"}}),loginOuterBox:(0,t.css)({display:"flex",overflowY:"hidden",alignItems:"center",justifyContent:"center"}),loginInnerBox:(0,t.css)({padding:n.spacing(0,2,2,2),display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",flexGrow:1,maxWidth:415,width:"100%",transform:"translate(0px, 0px)",[n.transitions.handleMotion("no-preference")]:{transition:"0.25s ease"}}),enterAnimation:(0,t.css)({[n.transitions.handleMotion("no-preference")]:{animation:`${x} ease-out 0.2s`}})})},49542:(T,m,s)=>{s.r(m),s.d(m,{ConfirmAccessPage:()=>d,default:()=>_});var i=s(74848),t=s(32196),h=s(54148),g=s(13544),c=s(40845),f=s(55852),v=s(62930),l=s(20851),x=s(83277),p=s(50800);const n=g.Tp.pages.PublicDashboardConfirmAccess;function d(){const E=(0,c.of)(u),{accessToken:r=""}=(0,h.g)(),[{magicLinkToken:e}]=(0,x.s)(),[a,{isLoading:o,isSuccess:D}]=(0,p.useConfirmAccessMutation)(),y=async()=>{await a({accessToken:r,magicLinkToken:String(e)})};return(0,i.jsx)(l.GU,{branding:{loginTitle:"Dashboard access",loginSubtitle:"Get access to the dashboard for 30 days. After 30 days, you can request access again to continue viewing the dashboard.",hideFooter:!0},children:(0,i.jsx)(l.qm,{children:(0,i.jsxs)(f.$n,{"data-testid":n.submitButton,disabled:o||D,type:"submit",className:E.form,onClick:y,children:[(0,i.jsx)("span",{children:"Confirm access"}),o&&(0,i.jsx)(v.y,{className:E.loadingSpinner})]})})})}const _=d,u=E=>({loadingSpinner:(0,t.css)({marginLeft:E.spacing(1)}),form:(0,t.css)({justifyContent:"center",width:"100%"})})},50800:(T,m,s)=>{s.r(m),s.d(m,{default:()=>E,useConfirmAccessMutation:()=>u,useGetActiveUserDashboardsQuery:()=>d,useGetActiveUsersQuery:()=>_,useRequestAccessMutation:()=>n});var i=s(17172),t=s(32264),h=s(82467),g=s(3169),c=s(8484),f=s(72686),v=s(19042);function l(r){return typeof r=="object"&&r!=null&&"error"in r}function x(r){return l(r)&&(0,i.NF)(r.error)}const p=f.Sm.injectEndpoints({endpoints:r=>({requestAccess:r.mutation({query:e=>({url:"/public/dashboards/share/request-access",method:"POST",data:e})}),confirmAccess:r.mutation({query:({magicLinkToken:e,accessToken:a})=>({url:`/public/dashboards/share/${e}`,method:"POST"}),async onQueryStarted({accessToken:e},{dispatch:a,queryFulfilled:o}){try{await o,a((0,h.dx)((0,g.tZ)((0,c.t)("public-dashboard.email-sharing.success-confirm-access","Access confirmed!")))),window.location.assign(t.$.appSubUrl+`public-dashboards/${e}`)}catch(D){if(x(D)){const{data:{messageId:y}}=D.error;y&&Object.values(v.b5).includes(y)&&window.location.assign(t.$.appSubUrl+`public-dashboards/${e}/request-access?error=${y}`)}}}}),addRecipient:r.mutation({query:({recipient:e,uid:a})=>({url:`/public-dashboards/${a}/share/recipients`,method:"POST",data:{recipient:e}}),async onQueryStarted(e,{dispatch:a,queryFulfilled:o}){await o,a((0,h.dx)((0,g.tZ)((0,c.t)("public-dashboard.email-sharing.success-send-recipient-invitation","The email invitation has been sent."))))},invalidatesTags:(e,a,{dashboardUid:o})=>[{type:"PublicDashboard",id:o}]}),deleteRecipient:r.mutation({query:({uid:e,recipientUid:a})=>({url:`/public-dashboards/${e}/share/recipients/${a}`,method:"DELETE"}),async onQueryStarted({recipientEmail:e},{dispatch:a,queryFulfilled:o}){await o,a((0,h.dx)((0,g.tZ)((0,c.t)("public-dashboard.email-sharing.success-revoke-access-title","Access Revoked"),(0,c.t)("public-dashboard.email-sharing.success-revoke-access-description","You have successfully revoked access for {{recipientEmail}}.",{recipientEmail:e}))))},invalidatesTags:(e,a,{dashboardUid:o})=>[{type:"PublicDashboard",id:o},"UsersWithActiveSessions","ActiveUserDashboards"]}),reshareAccessToRecipient:r.mutation({query:({uid:e,recipientUid:a})=>({url:`/public-dashboards/${e}/share/recipients/${a}`,method:"PATCH"}),async onQueryStarted(e,{dispatch:a,queryFulfilled:o}){await o,a((0,h.dx)((0,g.tZ)((0,c.t)("public-dashboard.email-sharing.success-resend-recipient-invitation","The email invitation has been resent."))))}}),getActiveUsers:r.query({query:()=>({url:"/public-dashboards/share/users?status=active"}),providesTags:["UsersWithActiveSessions"]}),getActiveUserDashboards:r.query({query:e=>({url:`/public-dashboards/share/users/${e}/dashboards?status=active`}),providesTags:(e,a,o)=>[{type:"ActiveUserDashboards",id:o}]}),revokeAllAccess:r.mutation({query:({email:e})=>({url:`/public-dashboards/share/users/${e}`,method:"DELETE"}),async onQueryStarted({email:e},{dispatch:a,queryFulfilled:o}){await o,a((0,h.dx)((0,g.tZ)((0,c.t)("public-dashboard.email-sharing.success-revoke-all-accesses-title","Access Revoked"),(0,c.t)("public-dashboard.email-sharing.success-revoke-all-accesses-description","{{email}}'s access to all public dashboards has been successfully removed.",{email:e}))))},invalidatesTags:["UsersWithActiveSessions"]})}),overrideExisting:!0}),{useRequestAccessMutation:n,useGetActiveUserDashboardsQuery:d,useGetActiveUsersQuery:_,useConfirmAccessMutation:u}=p,E=p},19042:(T,m,s)=>{s.d(m,{Z:()=>v,b5:()=>i});var i=(l=>(l.NOT_FOUND_MAGIC_LINK="publicdashboards.magicLinkNotFound",l.EXPIRED_MAGIC_LINK="publicdashboards.magicLinkExpired",l))(i||{}),t=(l=>(l.INTERNAL_SERVER_ERROR="publicdashboards.internalServerError",l.INVALID_SESSION="publicdashboards.invalidSession",l.EXPIRED_SESSION="publicdashboards.sessionExpired",l))(t||{});const h={title:"Request access",description:"You'll receive an email with a one-time link."},g="Something went wrong",c="To request access to the dashboard again, enter your email. You'll receive an email with a one-time link.",f={"publicdashboards.internalServerError":g,"publicdashboards.magicLinkNotFound":"This link has expired or already been used","publicdashboards.magicLinkExpired":"This magic link has expired","publicdashboards.invalidSession":"You no longer have access","publicdashboards.sessionExpired":"Your access has expired"},v=l=>l?{title:f[String(l)]||g,description:c}:h}}]);

//# sourceMappingURL=ConfirmAccessPage.4335a03f45ef59b4525c.js.map