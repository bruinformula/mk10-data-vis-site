"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[4258],{34258:(O,M,t)=>{t.d(M,{du:()=>ta,Qq:()=>ra,PK:()=>q,ak:()=>V,xI:()=>j,G2:()=>ia,bn:()=>ea,Ge:()=>aa,jB:()=>sa});var l=t(69129),P=t(71733),f=t(26657),y=t(17172),m=t(32264),S=t(39601),x=t(82467),v=t(10096),c=t(27677),u=t(2468),h=t(6320),E=t(31193),s=t(27716),g=t(1682),I=t(31678),b=t(75505),D=t(80714);const k=async()=>await(0,c.AI)().get("/api/datasources"),$=async a=>{const e=await(0,b.s)((0,c.AI)().fetch({method:"GET",url:`/api/datasources/${a}`,params:(0,D.F)(),showErrorAlert:!1}));if(e.ok)return e.data;throw Error(`Could not find data source by ID: "${a}"`)},w=async a=>{const e=await(0,b.s)((0,c.AI)().fetch({method:"GET",url:`/api/datasources/uid/${a}`,params:(0,D.F)(),showErrorAlert:!1}));if(e.ok)return e.data;throw Error(`Could not find data source by UID: "${a}"`)},B=async a=>{try{return await w(a)}catch{console.log(`Failed to lookup data source using UID "${a}"`)}try{return await $(a)}catch{console.log(`Failed to lookup data source using ID "${a}"`)}throw Error("Could not find data source")},T=a=>(0,c.AI)().post("/api/datasources",a),U=()=>(0,c.AI)().get("/api/plugins",{enabled:1,type:"datasource"}),R=a=>(0,c.AI)().put(`/api/datasources/uid/${a.uid}`,a,{showErrorAlert:!1,showSuccessAlert:!1}),K=a=>(0,c.AI)().delete(`/api/datasources/uid/${a}`);var F=t(83883),z=t(4589),W=t(43429),Q=t(33378);function H(a){const e=[{id:"tsdb",title:"Time series databases",plugins:[]},{id:"logging",title:"Logging & document databases",plugins:[]},{id:"tracing",title:"Distributed tracing",plugins:[]},{id:"profiling",title:"Profiling",plugins:[]},{id:"sql",title:"SQL",plugins:[]},{id:"cloud",title:"Cloud",plugins:[]},{id:"enterprise",title:"Enterprise plugins",plugins:[]},{id:"iot",title:"Industrial & IoT",plugins:[]},{id:"other",title:"Others",plugins:[]}].filter(i=>i),n={},o={},d=Z();for(const i of e)n[i.id]=i;for(const i of a){const A=d.find(C=>C.id===i.id);if((i.enterprise||A)&&(i.category="enterprise",i.unlicensed=!(0,Q.a)("enterprise.plugins"),i.info.links=A?.info?.links||i.info.links),i.info.links)for(const C of i.info.links)C.name="Learn more";(e.find(C=>C.id===i.category)||n.other).plugins.push(i),o[i.id]=i}for(const i of e){if(i.id==="cloud"&&i.plugins.push(X()),i.id==="enterprise")for(const A of d)o[A.id]||i.plugins.push(A);J(i.plugins)}return e.filter(i=>i.plugins.length>0)}function J(a){const e={prometheus:100,graphite:95,loki:90,mysql:80,jaeger:100,postgres:79,gcloud:-1};a.sort((n,o)=>{const d=e[n.id]||0,i=e[o.id]||0;return d>i?-1:d<i||n.name>o.name?1:-1})}function Z(){return[r({id:"grafana-splunk-datasource",name:"Splunk",description:"Visualize and explore Splunk logs",imgUrl:"public/img/plugins/splunk_logo_128.png"}),r({id:"grafana-oracle-datasource",name:"Oracle",description:"Visualize and explore Oracle SQL",imgUrl:"public/img/plugins/oracle.png"}),r({id:"grafana-dynatrace-datasource",name:"Dynatrace",description:"Visualize and explore Dynatrace data",imgUrl:"public/img/plugins/dynatrace.png"}),r({id:"grafana-servicenow-datasource",description:"ServiceNow integration and data source",name:"ServiceNow",imgUrl:"public/img/plugins/servicenow.svg"}),r({id:"grafana-datadog-datasource",description:"DataDog integration and data source",name:"DataDog",imgUrl:"public/img/plugins/datadog.png"}),r({id:"grafana-newrelic-datasource",description:"New Relic integration and data source",name:"New Relic",imgUrl:"public/img/plugins/newrelic.svg"}),r({id:"grafana-mongodb-datasource",description:"MongoDB integration and data source",name:"MongoDB",imgUrl:"public/img/plugins/mongodb.svg"}),r({id:"grafana-snowflake-datasource",description:"Snowflake integration and data source",name:"Snowflake",imgUrl:"public/img/plugins/snowflake.svg"}),r({id:"grafana-wavefront-datasource",description:"Wavefront integration and data source",name:"Wavefront",imgUrl:"public/img/plugins/wavefront.svg"}),r({id:"dlopes7-appdynamics-datasource",description:"AppDynamics integration and data source",name:"AppDynamics",imgUrl:"public/img/plugins/appdynamics.svg"}),r({id:"grafana-saphana-datasource",description:"SAP HANA\xAE integration and data source",name:"SAP HANA\xAE",imgUrl:"public/img/plugins/sap_hana.png"}),r({id:"grafana-honeycomb-datasource",description:"Honeycomb integration and datasource",name:"Honeycomb",imgUrl:"public/img/plugins/honeycomb.png"}),r({id:"grafana-salesforce-datasource",description:"Salesforce integration and datasource",name:"Salesforce",imgUrl:"public/img/plugins/salesforce.svg"}),r({id:"grafana-jira-datasource",description:"Jira integration and datasource",name:"Jira",imgUrl:"public/img/plugins/jira_logo.png"}),r({id:"grafana-gitlab-datasource",description:"GitLab integration and datasource",name:"GitLab",imgUrl:"public/img/plugins/gitlab.svg"}),r({id:"grafana-splunk-monitoring-datasource",description:"SignalFx integration and datasource",name:"Splunk Infrastructure Monitoring",imgUrl:"public/img/plugins/signalfx-logo.svg"}),r({id:"grafana-azuredevops-datasource",description:"Azure Devops datasource",name:"Azure Devops",imgUrl:"public/img/plugins/azure-devops.png"}),r({id:"grafana-sumologic-datasource",description:"SumoLogic integration and datasource",name:"SumoLogic",imgUrl:"public/img/plugins/sumo.svg"}),r({id:"grafana-pagerduty-datasource",description:"PagerDuty datasource",name:"PagerDuty",imgUrl:"public/img/plugins/pagerduty.svg"}),r({id:"grafana-catchpoint-datasource",description:"Catchpoint datasource",name:"Catchpoint",imgUrl:"public/img/plugins/catchpoint.svg"}),r({id:"grafana-azurecosmosdb-datasource",description:"Azure CosmosDB datasource",name:"Azure CosmosDB",imgUrl:"public/img/plugins/azure-cosmosdb.svg"}),r({id:"grafana-adobeanalytics-datasource",description:"Adobe Analytics datasource",name:"Adobe Analytics",imgUrl:"public/img/plugins/adobe-analytics.svg"}),r({id:"grafana-cloudflare-datasource",description:"Cloudflare datasource",name:"Cloudflare",imgUrl:"public/img/plugins/cloudflare.jpg"}),r({id:"grafana-cockroachdb-datasource",description:"CockroachDB datasource",name:"CockroachDB",imgUrl:"public/img/plugins/cockroachdb.jpg"}),r({id:"grafana-netlify-datasource",description:"Netlify datasource",name:"Netlify",imgUrl:"public/img/plugins/netlify.svg"}),r({id:"grafana-drone-datasource",description:"Drone datasource",name:"Drone",imgUrl:"public/img/plugins/drone.svg"}),r({id:"grafana-zendesk-datasource",description:"Zendesk datasource",name:"Zendesk",imgUrl:"public/img/plugins/zendesk.svg"}),r({id:"grafana-atlassianstatuspage-datasource",description:"Atlassian Statuspage datasource",name:"Atlassian Statuspage",imgUrl:"public/img/plugins/atlassian-statuspage.svg"}),r({id:"grafana-aurora-datasource",description:"Aurora data source",name:"Aurora",imgUrl:"public/img/plugins/aurora.svg"})]}function X(){return{id:"gcloud",name:"Grafana Cloud",type:W.QE.datasource,module:"phantom",baseUrl:"",info:{description:"Hosted Graphite, Prometheus, and Loki",logos:{small:"public/img/grafana_icon.svg",large:"asd"},author:{name:"Grafana Labs"},links:[{url:"https://grafana.com/products/cloud/",name:"Learn more"}],screenshots:[],updated:"2019-05-10",version:"1.0.0"}}}function r(a){return{id:a.id,name:a.name,type:W.QE.datasource,module:"phantom",baseUrl:"",info:{description:a.description,logos:{small:a.imgUrl,large:a.imgUrl},author:{name:"Grafana Labs"},links:[{url:"/plugins/"+a.id,name:"Install now",target:"_self"}],screenshots:[],updated:"2019-05-10",version:"1.0.0"}}}var Y=t(74984),p=t(36227),G=t(54226);const N=a=>{let e,n;return a.error&&a.error instanceof f.b1?(e=a.error.message,n=a.error.details):(0,y.NF)(a)?e=a.data.message??`HTTP error ${a.statusText}`:a instanceof Error&&(e=a.message),{message:e,details:n}},_=a=>{const{details:e,message:n,status:o}=a;return{status:o,message:n,details:e}},q=(a,e={loadDataSource:V,loadDataSourceMeta:j,getDataSource:G.U4,getDataSourceMeta:G.Fj,importDataSourcePlugin:g.cS})=>async(n,o)=>{if(!a){n((0,p.qR)(new Error("Invalid UID")));return}try{const d=await n(e.loadDataSource(a));await n(e.loadDataSourceMeta(d));const i=e.getDataSource(o().dataSources,a),A=e.getDataSourceMeta(o().dataSources,i.type),L=await e.importDataSourcePlugin(A);n((0,p.Ks)(L))}catch(d){d instanceof Error&&n((0,p.qR)(d))}},aa=(a,e=F.I.Edit,n={getDatasourceSrv:E.tR,getBackendSrv:c.AI})=>async(o,d)=>{const i=await n.getDatasourceSrv().get(a),A=e.replace(/:uid/gi,a);i.testDatasource&&(o((0,p.QZ)()),n.getBackendSrv().withNoBackendCache(async()=>{try{const L=await i.testDatasource(),C=_({...L,details:{...L.details}});o((0,p.lg)(C)),(0,z.Mh)({grafana_version:m.$.buildInfo.version,plugin_id:i.type,datasource_uid:i.uid,success:!0,path:A}),v.lE.publish(new l.NI)}catch(L){const C=N(L);o((0,p.UP)({...C})),(0,z.Mh)({grafana_version:m.$.buildInfo.version,plugin_id:i.type,datasource_uid:i.uid,success:!1,path:A}),v.lE.publish(new l.LL)}}))};function ea(){return async a=>{if(!v.TP.hasPermission(I.AccessControlAction.DataSourcesRead))return;a((0,p.TN)());const e=await k();a((0,p.E1)(e))}}function V(a){return async e=>{let n=await B(a);return a!==n.uid&&(window.location.href=P.I.assureBaseUrl(`/datasources/edit/${n.uid}`),n={}),e((0,p.jz)(n)),n}}function j(a){return async e=>{const n=await(0,s.x)(a.type),o=await(0,g.cS)(n),d=o.DataSourceClass.prototype instanceof f.iy,i={...n,isBackend:n.backend||d};e((0,p.gZ)(i)),o.meta=i,e((0,x.Vz)((0,Y.R4)(a,o)))}}function ta(a,e=F.I.Edit){return async()=>{const n={type:a.id,access:"proxy"},o=await T(n),d=e.replace(/:uid/gi,o.datasource.uid);await(0,E.tR)().reload(),await v.TP.fetchUserPermissions(),(0,z.V9)({grafana_version:m.$.buildInfo.version,plugin_id:a.id,datasource_uid:o.datasource.uid,plugin_version:o.meta?.info?.version,path:d}),S.Ny.push(d)}}function ia(){return async a=>{a((0,p.Gc)());const e=await U(),n=H(e);a((0,p.f$)({plugins:e,categories:n}))}}const na=new u.H;function sa(a){return async e=>{try{m.$.featureToggles.grafanaAPIServerWithExperimentalAPIs&&(a.apiVersion=await na.get(a.type)),await R(a)}catch(n){const o=N(n);e((0,p.UP)(o));const d=(0,y.NF)(n)?n.data:{message:"An unexpected error occurred.",traceID:""};return Promise.reject(d)}return await(0,E.tR)().reload(),e(V(a.uid))}}function ra(){return async(a,e)=>{const{uid:n}=e().dataSources.dataSource;try{await K(n),await(0,E.tR)().reload();const o=h.b.DataSources;S.Ny.push(o)}catch(o){const d=N(o);a((0,p.UP)(d))}}}},74984:(O,M,t)=>{t.d(M,{$m:()=>h,R4:()=>c,Vh:()=>u});var l=t(43429),P=t(33378),f=t(76323),y=t(2913),m=t(10096),S=t(35538),x=t(31678);const v="Loading";function c(s,g){const I=g.meta,b=y.Ay.featureToggles.featureHighlights,D={img:I.info.logos.large,id:"datasource-"+s.uid,url:"",text:s.name,children:[{active:!1,icon:"sliders-v-alt",id:`datasource-settings-${s.uid}`,text:"Settings",url:`datasources/edit/${s.uid}/`}]};if(g.configPages)for(const U of g.configPages)D.children.push({active:!1,text:U.title,icon:U.icon,url:`datasources/edit/${s.uid}/?page=${U.id}`,id:`datasource-page-${U.id}`});I.includes&&E(I.includes)&&m.TP.hasRole("Admin")&&D.children.push({active:!1,icon:"apps",id:`datasource-dashboards-${s.uid}`,text:"Dashboards",url:`datasources/edit/${s.uid}/dashboards`});const k=s.type===v,$="feature-highlights-data-source-permissions-badge",w={active:!1,icon:"lock",id:`datasource-permissions-${s.uid}`,text:"Permissions",url:`datasources/edit/${s.uid}/permissions`};if((0,S.z5)()&&!k&&(w.tabSuffix=()=>(0,f.J)({experimentId:$,eventVariant:"trial"})),(0,P.a)("dspermissions.enforcement")?m.TP.hasPermissionInMetadata(x.AccessControlAction.DataSourcesPermissionsRead,s)&&D.children.push(w):b&&!k&&D.children.push({...w,url:w.url+"/upgrade",tabSuffix:()=>(0,f.J)({experimentId:$})}),y.Ay.analytics?.enabled){const U="feature-highlights-data-source-insights-badge",R={active:!1,icon:"info-circle",id:`datasource-insights-${s.uid}`,text:"Insights",url:`datasources/edit/${s.uid}/insights`};(0,S.z5)()&&!k&&(R.tabSuffix=()=>(0,f.J)({experimentId:U,eventVariant:"trial"})),(0,P.a)("analytics")?m.TP.hasPermission(x.AccessControlAction.DataSourcesInsightsRead)&&D.children.push(R):b&&!k&&D.children.push({...R,url:R.url+"/upgrade",tabSuffix:()=>(0,f.J)({experimentId:U})})}const B="feature-highlights-query-caching-badge",T={active:!1,icon:"database",id:`datasource-cache-${s.uid}`,text:"Cache",url:`datasources/edit/${s.uid}/cache`,hideFromTabs:!I.isBackend||!y.Ay.caching.enabled};return(0,S.z5)()&&!k&&(T.tabSuffix=()=>(0,f.J)({experimentId:B,eventVariant:"trial"})),(0,P.a)("caching")?m.TP.hasPermissionInMetadata(x.AccessControlAction.DataSourcesCachingRead,s)&&D.children.push(T):b&&!k&&D.children.push({...T,url:T.url+"/upgrade",tabSuffix:()=>(0,f.J)({experimentId:B})}),D}function u(s,g){let I={text:""};for(const b of s.children)if(b.id.indexOf(g)>0){b.active=!0,I=b;break}return{main:s,node:I}}function h(s){const g=c({access:"",basicAuth:!1,basicAuthUser:"",withCredentials:!1,database:"",id:1,uid:"x",isDefault:!1,jsonData:{authType:"credentials",defaultRegion:"eu-west-2"},name:"Loading",orgId:1,readOnly:!1,type:v,typeName:v,typeLogoUrl:"public/img/icn-datasource.svg",url:"",user:"",secureJsonFields:{}},{meta:{id:"1",type:l.QE.datasource,name:"",info:{author:{name:"",url:""},description:"",links:[{name:"",url:""}],logos:{large:"",small:""},screenshots:[],updated:"",version:""},includes:[],module:"",baseUrl:""}});return u(g,s)}function E(s){return s.find(g=>g.type==="dashboard")!==void 0}},54226:(O,M,t)=>{t.d(M,{Fj:()=>m,U4:()=>y,hp:()=>f,lv:()=>c,wC:()=>v,xs:()=>S,zC:()=>P});var l=t(41811);const P=(0,l.A)(u=>{const h=new RegExp(u.searchQuery,"i");return u.dataSources.filter(s=>h.test(s.name)||h.test(s.database)||h.test(s.type)).sort((s,g)=>u.isSortAscending?s.name.localeCompare(g.name):g.name.localeCompare(s.name))}),f=(0,l.A)(u=>{const h=new RegExp(u.dataSourceTypeSearchQuery,"i");return u.plugins.filter(E=>h.test(E.name))}),y=(u,h)=>u.dataSource.uid===h?u.dataSource:{},m=(u,h)=>u.dataSourceMeta.id===h?u.dataSourceMeta:{},S=u=>u.searchQuery,x=u=>u.layoutMode,v=u=>u.dataSourcesCount,c=u=>u.isSortAscending},4589:(O,M,t)=>{t.d(M,{M1:()=>y,Mh:()=>f,TR:()=>m,V9:()=>P,_i:()=>x,kg:()=>S,m3:()=>v});var l=t(14110);const P=c=>{(0,l.rR)("grafana_ds_add_datasource_clicked",c)},f=c=>{(0,l.rR)("grafana_ds_test_datasource_clicked",c)},y=c=>{(0,l.rR)("grafana_ds_explore_datasource_clicked",c)},m=c=>{(0,l.rR)("grafana_ds_create_dashboard_clicked",c)},S=c=>{(0,l.rR)("grafana_ds_datasources_list_viewed",c)},x=c=>{(0,l.rR)("connections_datasources_settings_clicked",{item:c})},v=c=>{(0,l.rR)("connections_datasources_ds_configured",c)}}}]);

//# sourceMappingURL=4258.0aa2561d68b3cbbea152.js.map