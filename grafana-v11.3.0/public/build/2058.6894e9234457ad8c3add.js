"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[2058],{92058:(D,s,e)=>{e.r(s),e.d(s,{plugin:()=>P});var n=e(40187),u=e(36666),r=e(62467),f=e(49935),c=e(81160),g=e(69850),E=e(84537),l=e(74730);class C extends n.mA{constructor(t){super(t)}getCollapsedText(t){return`Dashboard Reference: ${t.panelId}`}query(t){const o=t.scopedVars?.__sceneObject;let v=o?o.value.valueOf():void 0;if(t.requestId.indexOf("mixed")>-1)throw new Error("Dashboard data source cannot be used with Mixed data source.");if(!v)throw new Error("Can only be called from a scene");const i=t.targets[0];if(!i)return(0,r.of)({data:[]});const m=i.panelId;if(!m)return(0,r.of)({data:[]});let h=this.findSourcePanel(v,m);if(!h)return(0,r.of)({data:[],error:{message:"Could not find source panel"}});let a=h.state.$data;return!i.withTransforms&&a instanceof E.Es&&(a=a.state.$data),!a||!a.getResultsStream?(0,r.of)({data:[]}):(0,f.v)(()=>{!a.isActive&&a?.setContainerWidth&&a?.setContainerWidth(500);const O=a.activate();return a.getResultsStream().pipe((0,c.T)(d=>({data:d.data.series,state:d.data.state,errors:d.data.errors,error:d.data.error,key:"source-ds-provider"})),(0,g.j)(O))})}findSourcePanel(t,o){return(0,l.vL)(t,(0,l.XA)(o))}testDatasource(){return Promise.resolve({message:"",status:""})}}const P=new n.tD(C).setQueryEditor(u.A)},49935:(D,s,e)=>{e.d(s,{v:()=>r});var n=e(88483),u=e(15964);function r(f){return new n.c(function(c){(0,u.Tg)(f()).subscribe(c)})}}}]);

//# sourceMappingURL=2058.6894e9234457ad8c3add.js.map