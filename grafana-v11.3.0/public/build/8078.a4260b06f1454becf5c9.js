"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[8078],{48241:(E,f,s)=>{s.d(f,{i:()=>e});var r=s(2543),t=s.n(r),n=s(47232),l=s(11261);const e=(h,p=!1)=>{const S=h.values;switch(h.type){case l.PU.number:return N(S,p);case l.PU.string:return R(S,p);case l.PU.boolean:return L(S,p);case l.PU.time:return typeof h.values[0]=="number"?b(S,p):F(S,p);default:return U(p)}},o=(h,p)=>{if(!h||!p)return v(h,p);if((0,r.isNumber)(h)&&(0,r.isNumber)(p))return c(h,p);if((0,n.u8)(h)&&(0,n.u8)(p)){if((0,n.KQ)(h).isBefore(p))return-1;if((0,n.KQ)(p).isBefore(h))return 1}return 0},c=(h,p)=>h-p,u=(h,p)=>!h||!p?v(h,p):h.localeCompare(p),g=(h,p)=>v(h,p),v=(h,p)=>!h&&p?1:h&&!p?-1:0,b=(h,p)=>{let S=p?-1:1;return(P,O)=>S*(h[P]-h[O])},F=(h,p)=>(S,P)=>{const O=h[S],M=h[P];return p?o(M,O):o(O,M)},L=(h,p)=>(S,P)=>{const O=h[S],M=h[P];return p?g(M,O):g(O,M)},N=(h,p)=>(S,P)=>{const O=h[S],M=h[P];return p?c(M,O):c(O,M)},R=(h,p)=>(S,P)=>{const O=h[S],M=h[P];return p?u(M,O):u(O,M)},U=h=>(p,S)=>h?c(S,p):c(p,S)},98358:(E,f,s)=>{s.d(f,{c:()=>t});var r=s(52622);function t(n,l,e){switch((n==null||e==null)&&(n==null&&(n="null"),e==null&&(e="null"),(l===r.zT.GTE||l===r.zT.LTE)&&(l=r.zT.EQ)),l){case r.zT.EQ:return`${n}`==`${e}`;case r.zT.NEQ:return`${n}`!=`${e}`;case r.zT.GT:return n>e;case r.zT.GTE:return n>=e;case r.zT.LT:return n<e;case r.zT.LTE:return n<=e;default:return!1}}},7029:(E,f,s)=>{s.d(f,{_:()=>c});var r=s(11261),t=s(1173);const n={id:t.Ct.byType,name:"Field Type",description:"match based on the field type",defaultOptions:r.PU.number,get:u=>(g,v,b)=>u===g.type,getOptionsDisplayText:u=>`Field type: ${u}`},l={id:t.Ct.byTypes,name:"Field Type",description:"match based on the field types",defaultOptions:new Set,get:u=>(g,v,b)=>u.has(g.type),getOptionsDisplayText:u=>`Field types: ${[...u].join(" | ")}`},e={id:t.Ct.numeric,name:"Numeric Fields",description:"Fields with type number",get:()=>n.get(r.PU.number),getOptionsDisplayText:()=>"Numeric Fields"},o={id:t.Ct.time,name:"Time Fields",description:"Fields with type time",get:()=>n.get(r.PU.time),getOptionsDisplayText:()=>"Time Fields"};function c(){return[n,l,e,o]}},24814:(E,f,s)=>{s.d(f,{u:()=>o});var r=s(52622),t=s(75059),n=s(98358),l=s(1173);function e(c){return c===t.gy.allIsNull||c===t.gy.allIsZero}const o={id:l.Ct.byValue,name:"By value (reducer)",description:"Reduce a field to a single value and test for inclusion",defaultOptions:{reducer:t.gy.allIsZero,op:r.zT.GTE,value:0},get:c=>{if(!c||!c.reducer)return()=>!1;let{reducer:u,op:g,value:v}=c;const b=e(u);return g||(g=r.zT.EQ),(F,L,N)=>{const R=(0,t.Nw)({field:F,reducers:[u]})[u];return b?!!R:(0,n.c)(R,g,v)}},getOptionsDisplayText:c=>`By value (${c.reducer})`}},1173:(E,f,s)=>{s.d(f,{Ct:()=>t,Js:()=>l,cV:()=>r,jR:()=>n});var r=(e=>(e.anyMatch="anyMatch",e.allMatch="allMatch",e.invertMatch="invertMatch",e.alwaysMatch="alwaysMatch",e.neverMatch="neverMatch",e))(r||{}),t=(e=>(e.numeric="numeric",e.time="time",e.first="first",e.firstTimeField="firstTimeField",e.byType="byType",e.byTypes="byTypes",e.byName="byName",e.byNames="byNames",e.byRegexp="byRegexp",e.byRegexpOrNames="byRegexpOrNames",e.byFrameRefID="byFrameRefID",e.byValue="byValue",e))(t||{}),n=(e=>(e.byName="byName",e.byRefId="byRefId",e.byIndex="byIndex",e))(n||{}),l=(e=>(e.regex="regex",e.isNull="isNull",e.isNotNull="isNotNull",e.greater="greater",e.greaterOrEqual="greaterOrEqual",e.lower="lower",e.lowerOrEqual="lowerOrEqual",e.equal="equal",e.notEqual="notEqual",e.substring="substring",e.notSubstring="notSubstring",e.between="between",e))(l||{})},8549:(E,f,s)=>{s.d(f,{i:()=>l});var r=s(54479),t=s(1173);const n={id:t.jR.byRefId,name:"Query refId",description:"match the refId",defaultOptions:"A",get:e=>{const o=(0,r.dO)(e);return c=>o.test(c.refId||"")},getOptionsDisplayText:e=>`RefID: ${e}`};function l(){return[n]}},83855:(E,f,s)=>{s.d(f,{W:()=>e});var r=s(11261),t=s(1173);const n={id:t.Ct.first,name:"First Field",description:"The first field in the frame",get:o=>(c,u,g)=>c===u.fields[0],getOptionsDisplayText:()=>"First field"},l={id:t.Ct.firstTimeField,name:"First time field",description:"The first field of type time in a frame",get:o=>(c,u,g)=>c.type===r.PU.time&&c===u.fields.find(v=>v.type===r.PU.time),getOptionsDisplayText:()=>"First time field"};function e(){return[n,l]}},60005:(E,f,s)=>{s.d(f,{d:()=>l});var r=s(1173);const t={id:r.Js.equal,name:"Is equal",description:"Match where value for given field is equal to options value.",get:e=>(o,c)=>c.values[o]==e.value,getOptionsDisplayText:()=>"Matches all rows where field is null.",isApplicable:()=>!0,getDefaultOptions:()=>({value:""})},n={id:r.Js.notEqual,name:"Is not equal",description:"Match where value for given field is not equal to options value.",get:e=>(o,c)=>c.values[o]!=e.value,getOptionsDisplayText:()=>"Matches all rows where field is not null.",isApplicable:()=>!0,getDefaultOptions:()=>({value:""})},l=()=>[t,n]},21262:(E,f,s)=>{s.d(f,{_:()=>l});var r=s(1173);const t={id:r.Js.isNull,name:"Is null",description:"Match where value for given field is null.",get:()=>(e,o)=>o.values[e]==null,getOptionsDisplayText:()=>"Matches all rows where field is null.",isApplicable:()=>!0,getDefaultOptions:()=>({})},n={id:r.Js.isNotNull,name:"Is not null",description:"Match where value for given field is not null.",get:()=>(e,o)=>o.values[e]!=null,getOptionsDisplayText:()=>"Matches all rows where field is not null.",isApplicable:()=>!0,getDefaultOptions:()=>({})},l=()=>[t,n]},70218:(E,f,s)=>{s.d(f,{E:()=>c});var r=s(11261),t=s(1173);const n={id:t.Js.greater,name:"Is greater",description:"Match when field value is greater than option.",get:u=>(g,v)=>{const b=v.values[g];return isNaN(b)?!1:b>u.value},getOptionsDisplayText:u=>`Matches all rows where field value is greater than: ${u.value}.`,isApplicable:u=>u.type===r.PU.number,getDefaultOptions:()=>({value:0})},l={id:t.Js.greaterOrEqual,name:"Is greater or equal",description:"Match when field value is greater than or equal to option.",get:u=>(g,v)=>{const b=v.values[g];return isNaN(b)?!1:b>=u.value},getOptionsDisplayText:u=>`Matches all rows where field value is greater than or equal to: ${u.value}.`,isApplicable:u=>u.type===r.PU.number,getDefaultOptions:()=>({value:0})},e={id:t.Js.lower,name:"Is lower",description:"Match when field value is lower than option.",get:u=>(g,v)=>{const b=v.values[g];return isNaN(b)?!1:b<u.value},getOptionsDisplayText:u=>`Matches all rows where field value is lower than: ${u.value}.`,isApplicable:u=>u.type===r.PU.number,getDefaultOptions:()=>({value:0})},o={id:t.Js.lowerOrEqual,name:"Is lower or equal",description:"Match when field value is lower or equal than option.",get:u=>(g,v)=>{const b=v.values[g];return isNaN(b)?!1:b<=u.value},getOptionsDisplayText:u=>`Matches all rows where field value is lower or equal than: ${u.value}.`,isApplicable:u=>u.type===r.PU.number,getDefaultOptions:()=>({value:0})},c=()=>[n,l,e,o]},55008:(E,f,s)=>{s.d(f,{G:()=>l});var r=s(11261),t=s(1173);const n={id:t.Js.between,name:"Is between",description:"Match when field value is between given option values.",get:e=>(o,c)=>{const u=c.values[o];return isNaN(u)?!1:u>e.from&&u<e.to},getOptionsDisplayText:e=>`Matches all rows where field value is between ${e.from} and ${e.to}.`,isApplicable:e=>e.type===r.PU.number,getDefaultOptions:()=>({from:0,to:100})},l=()=>[n]},16378:(E,f,s)=>{s.d(f,{z:()=>n});var r=s(1173);const t={id:r.Js.regex,name:"Regex",description:"Match when field value is matching regex.",get:l=>{const e=new RegExp(l.value);return(o,c)=>{const u=c.values[o];return e.test(u)}},getOptionsDisplayText:l=>`Matches all rows where field value is matching regex: ${l.value}`,isApplicable:()=>!0,getDefaultOptions:()=>({value:".*"})},n=()=>[t]},75754:(E,f,s)=>{s.d(f,{m:()=>e});var r=s(11261),t=s(1173);const n={id:t.Js.substring,name:"Contains substring",description:"Match where value for given field is a substring to options value.",get:o=>(c,u)=>{const g=u.values[c];return g&&o.value&&typeof g=="string"&&g.toLowerCase().includes(o.value.toLowerCase())||o.value===""},getOptionsDisplayText:()=>"Matches all rows where field is similar to the value.",isApplicable:o=>o.type===r.PU.string,getDefaultOptions:()=>({value:""})},l={id:t.Js.notSubstring,name:"Does not contain substring",description:"Match where value for given field is not a substring to options value.",get:o=>(c,u)=>{const g=u.values[c];return typeof g=="string"&&o.value&&g&&o.value!==""&&!g.toLowerCase().includes(o.value.toLowerCase())},getOptionsDisplayText:()=>"Matches all rows where field is not similar to the value.",isApplicable:o=>o.type===r.PU.string,getDefaultOptions:()=>({value:""})},e=()=>[n,l]},18282:(E,f,s)=>{s.d(f,{F:()=>r});var r=(t=>(t.append="append",t.reduce="reduce",t.order="order",t.organize="organize",t.rename="rename",t.calculateField="calculateField",t.seriesToColumns="seriesToColumns",t.seriesToRows="seriesToRows",t.merge="merge",t.concatenate="concatenate",t.labelsToFields="labelsToFields",t.filterFields="filterFields",t.filterFieldsByName="filterFieldsByName",t.filterFrames="filterFrames",t.filterByRefId="filterByRefId",t.renameByRegex="renameByRegex",t.filterByValue="filterByValue",t.noop="noop",t.ensureColumns="ensureColumns",t.groupBy="groupBy",t.sortBy="sortBy",t.histogram="histogram",t.configFromData="configFromData",t.rowsToFields="rowsToFields",t.prepareTimeSeries="prepareTimeSeries",t.convertFieldType="convertFieldType",t.fieldLookup="fieldLookup",t.heatmap="heatmap",t.spatial="spatial",t.joinByField="joinByField",t.joinByLabels="joinByLabels",t.extractFields="extractFields",t.groupingToMatrix="groupingToMatrix",t.limit="limit",t.partitionByValues="partitionByValues",t.timeSeriesTable="timeSeriesTable",t.transpose="transpose",t.formatTime="formatTime",t.formatString="formatString",t.regression="regression",t.groupToNestedTable="groupToNestedTable",t))(r||{})},43659:(E,f,s)=>{s.d(f,{j:()=>r});function r(t,n){const l=/\{\{\s*(.+?)\s*\}\}/g;return t.replace(l,(e,o)=>n[o]?n[o]:o)}},12091:(E,f,s)=>{s.d(f,{u:()=>r});function r(t){const n=t||{};if(!n.message){if(typeof t=="string")return{message:t};let l="Query error";n.message?l=n.message:n.data&&n.data.message&&n.data?.message!=="Query data error"?l=n.data.message:n?.data?.message==="Query data error"&&n?.data?.error||n.data&&n.data.error?l=n.data.error:n.status&&(l=`Query error: ${n.status} ${n.statusText}`),n.message=l}return n}},97527:(E,f,s)=>{s.d(f,{w:()=>j});var r=s(35392),t=s(1005),n=s(96222),l=s(49426),e=s(55004),o=s(9631),c=s(88483),u=s(39741),g=s(81160),v=s(39070),b=s(12091),F=s(47118);const L=w=>a=>new c.c(i=>{let d=[],m=!0;const _=()=>{i.next(d),d=[]},T=w.subscribe({next:C=>{m=C,m&&d.length&&_()}}),A=a.subscribe({next(C){m?d.length?_():i.next([C]):d.push(C)},error(C){i.error(C)},complete(){i.complete()}});return()=>{A.unsubscribe(),T.unsubscribe()}});var N=(w=>(w[w.Error=0]="Error",w[w.NewValuesSameSchema=1]="NewValuesSameSchema",w[w.ChangedSchema=2]="ChangedSchema",w))(N||{});const R=w=>({values:w.reduce((a,{values:i})=>{for(let d=0;d<i.length;d++){a[d]||(a[d]=[]);for(let m=0;m<i[d].length;m++)a[d].push(i[d][m])}return a},[]),type:1}),U=(w,a)=>w.filter(i=>i.type===a);class h{constructor(a){this.deps=a,this.stream=new u.m(1),this.shutdown=()=>{this.stream.complete(),this.liveEventsSubscription.unsubscribe(),this.deps.onShutdown()},this.shutdownIfNoSubscribers=()=>{this.stream.observed||this.shutdown()},this.onError=i=>{console.log("LiveQuery [error]",{err:i},this.deps.channelId),this.stream.next({type:0,error:(0,b.u)(i)}),this.shutdown()},this.onComplete=()=>{console.log("LiveQuery [complete]",this.deps.channelId),this.shutdown()},this.onNext=i=>{if((0,e.Z7)(i)){this.process(i.message);return}const d=(0,e.ew)(i);if(d&&i.error){const m=(0,b.u)(i.error);this.stream.next({type:0,error:{...m,message:`Streaming channel error: ${m.message}`}})}d&&(i.state===e.ZF.Connected||i.state===e.ZF.Pending)&&i.message&&this.process(i.message)},this.process=i=>{this.frameBuffer.push(i).schemaChanged?this.stream.next({type:2}):this.stream.next({type:1,values:this.frameBuffer.getValuesFromLastPacket()})},this.resizeBuffer=i=>{i&&this.frameBuffer.needsResizing(i)&&this.frameBuffer.resize(i)},this.prepareInternalStreamForNewSubscription=i=>{!this.frameBuffer.hasAtLeastOnePacket()&&i.frame&&this.process(i.frame)},this.clearShutdownTimeout=()=>{this.shutdownTimeoutId&&(clearTimeout(this.shutdownTimeoutId),this.shutdownTimeoutId=void 0)},this.get=(i,d)=>{this.clearShutdownTimeout();const m=(0,o.m8)(i.buffer);this.resizeBuffer(m),this.prepareInternalStreamForNewSubscription(i);const _=i?.buffer?.action===o.Kh.Replace,T=i.filter?.fields,C=T?.length?({name:y})=>T.includes(y):void 0;let K;const V=(y,B)=>(K=C?this.frameBuffer.getMatchingFieldIndexes(C):void 0,_?B?{key:d,state:v.Gu.Error,data:[{type:F._w.FullFrame,frame:this.frameBuffer.serialize(C,m,{maxLength:0})}],error:B}:y.length?{key:d,state:v.Gu.Streaming,data:[{type:F._w.FullFrame,frame:this.frameBuffer.serialize(C,m,{maxLength:this.frameBuffer.packetInfo.length})}],error:B}:(console.warn(`expected to find at least one non error message ${y.map(({type:x})=>x)}`),{key:d,state:v.Gu.Streaming,data:[{type:F._w.FullFrame,frame:this.frameBuffer.serialize(C,m,{maxLength:0})}],error:B}):{key:d,state:B?v.Gu.Error:v.Gu.Streaming,data:[{type:F._w.FullFrame,frame:this.frameBuffer.serialize(C,m)}],error:B}),J=y=>{const B=y.length?y[y.length-1]:void 0,x=_&&B?B.values:R(y).values,W=K?x.filter((Z,z)=>K?.includes(z)):x;return{key:d,state:v.Gu.Streaming,data:[{type:F._w.NewValuesSameSchema,values:W}]}};let I=!0;const D=this.stream.pipe(L(this.deps.subscriberReadiness),(0,g.T)((y,B)=>{const x=U(y,0),W=x.length?x[x.length-1].error:void 0;if(I)return I=!1,V(y,W);if(x.length)return V(y,W);if(y.some($=>$.type===2))return V(y,void 0);const z=U(y,1);return z.length!==y.length&&console.warn(`unsupported message type ${y.map(({type:$})=>$)}`),J(z)}));return new c.c(y=>{const B=D.subscribe({next:x=>{y.next(x)},error:x=>{y.error(x)},complete:()=>{y.complete()}});return()=>{B.unsubscribe(),this.stream.observed||(this.clearShutdownTimeout(),this.shutdownTimeoutId=setTimeout(this.shutdownIfNoSubscribers,this.deps.shutdownDelayInMs))}})},this.frameBuffer=o.k9.empty(a.defaultStreamingFrameOptions),this.liveEventsSubscription=a.liveEventsObservable.subscribe({error:this.onError,complete:this.onComplete,next:this.onNext})}}var p=s(13752);class S{constructor(a,i){this.opened=Date.now(),this.stream=new p.B,this.disconnectIfNoListeners=()=>{this.stream.observers.length===0&&this.disconnect()},this.id=a,this.addr=i,this.currentStatus={type:e.o4.Status,id:a,timestamp:this.opened,state:e.ZF.Pending},(0,e.aj)(i)||(this.currentStatus.state=e.ZF.Invalid,this.currentStatus.error="invalid channel address")}initalize(){if(this.initalized)throw new Error("Channel already initalized: "+this.id);this.initalized=!0,this.subscription.on("publication",a=>{try{a.data&&(a.data.schema&&(this.lastMessageWithSchema=a.data),this.stream.next({type:e.o4.Message,message:a.data})),this.currentStatus.error&&(this.currentStatus.timestamp=Date.now(),delete this.currentStatus.error,this.sendStatus())}catch(i){console.log("publish error",this.addr,i),this.currentStatus.error=i,this.currentStatus.timestamp=Date.now(),this.sendStatus()}}).on("error",a=>{this.currentStatus.timestamp=Date.now(),this.currentStatus.error=a.error.message,this.sendStatus()}).on("subscribed",a=>{this.currentStatus.timestamp=Date.now(),this.currentStatus.state=e.ZF.Connected,delete this.currentStatus.error,a.data?.schema&&(this.lastMessageWithSchema=a.data),this.sendStatus(a.data)}).on("unsubscribed",()=>{this.currentStatus.timestamp=Date.now(),this.currentStatus.state=e.ZF.Disconnected,this.sendStatus()}).on("subscribing",()=>{this.currentStatus.timestamp=Date.now(),this.currentStatus.state=e.ZF.Connecting,this.sendStatus()}).on("join",a=>{this.stream.next({type:e.o4.Join,user:a.info.user})}).on("leave",a=>{this.stream.next({type:e.o4.Leave,user:a.info.user})})}sendStatus(a){const i={...this.currentStatus};a&&(i.message=a),this.stream.next(i)}getStream(){return new c.c(a=>{const i={...this.currentStatus};this.lastMessageWithSchema?.schema&&(i.message={schema:this.lastMessageWithSchema?.schema}),a.next({...this.currentStatus,message:this.lastMessageWithSchema});const d=this.stream.subscribe(a);return()=>{d.unsubscribe(),this.stream.observers.length===0&&setTimeout(this.disconnectIfNoListeners,250)}})}async getPresence(){return this.subscription?this.subscription.presence().then(a=>({users:Object.keys(a.clients)})):Promise.reject("not subscribed")}disconnect(){this.currentStatus.state=e.ZF.Shutdown,this.currentStatus.timestamp=Date.now(),this.subscription&&(this.subscription.unsubscribe(),this.subscription.removeAllListeners(),this.subscription=void 0),this.stream.complete(),this.stream.next({...this.currentStatus}),this.stream.complete(),this.shutdownCallback&&this.shutdownCallback()}shutdownWithError(a){this.currentStatus.error=a,this.sendStatus(),this.disconnect()}}function P(w,a,i){return{id:a,opened:Date.now(),addr:i,getStream:()=>of({type:LiveChannelEventType.Status,id:a,timestamp:Date.now(),state:LiveChannelConnectionState.Invalid,error:w}),disconnect:()=>{}}}const O={maxLength:100,maxDelta:1/0,action:o.Kh.Append},M=5e3;class j{constructor(a){this.deps=a,this.open=new Map,this.liveDataStreamByChannelId={},this.onConnect=m=>{this.connectionState.next(!0)},this.onDisconnect=m=>{this.connectionState.next(!1)},this.onServerSideMessage=m=>{console.log("Publication from server-side channel",m)},this.getConnectionState=()=>this.connectionState.asObservable(),this.getStream=m=>this.getChannel(m).getStream(),this.createSubscriptionKey=m=>m.key??`xstr/${Q++}`,this.getLiveDataStream=m=>{const _=(0,e.Qp)(m.addr),T=this.liveDataStreamByChannelId[_];if(T)return T;const A=this.getChannel(m.addr);return this.liveDataStreamByChannelId[_]=new h({channelId:_,onShutdown:()=>{delete this.liveDataStreamByChannelId[_]},liveEventsObservable:A.getStream(),subscriberReadiness:this.dataStreamSubscriberReadiness,defaultStreamingFrameOptions:O,shutdownDelayInMs:M}),this.liveDataStreamByChannelId[_]},this.getDataStream=m=>{const _=this.createSubscriptionKey(m);return this.getLiveDataStream(m).get(m,_)},this.getQueryData=async m=>(this.centrifuge.state!==r.Uw.Connected&&await this.connectionBlocker,this.centrifuge.rpc("grafana.query",m.body)),this.getPresence=m=>this.getChannel(m).getPresence(),this.dataStreamSubscriberReadiness=a.dataStreamSubscriberReadiness.pipe((0,t.u)(),(0,n.Z)(!0));let i=`${a.appUrl.replace(/^http/,"ws")}/api/live/ws`;const d=a.grafanaAuthToken;d!==null&&d!==""&&(i+="?auth_token="+d),this.centrifuge=new r.Ft(i,{timeout:3e4}),a.liveEnabled&&a.orgRole!==""&&this.centrifuge.connect(),this.connectionState=new l.t(this.centrifuge.state===r.Uw.Connected),this.connectionBlocker=new Promise(m=>{if(this.centrifuge.state===r.Uw.Connected)return m();const _=()=>{m(),this.centrifuge.removeListener("connected",_)};this.centrifuge.addListener("connected",_)}),this.centrifuge.on("connected",this.onConnect),this.centrifuge.on("connecting",this.onDisconnect),this.centrifuge.on("disconnected",this.onDisconnect),this.centrifuge.on("publication",this.onServerSideMessage)}getChannel(a){const i=`${this.deps.orgId}/${a.scope}/${a.namespace}/${a.path}`;let d=this.open.get(i);return d!=null||(d=new S(i,a),d.currentStatus.state===e.ZF.Invalid)||(d.shutdownCallback=()=>{this.open.delete(i),this.centrifuge.removeSubscription(this.centrifuge.getSubscription(i))},this.open.set(i,d),this.initChannel(d).catch(m=>{d&&(d.currentStatus.state=e.ZF.Invalid,d.shutdownWithError(m)),this.open.delete(i)})),d}async initChannel(a){this.centrifuge.state!==r.Uw.Connected&&await this.connectionBlocker;const i=this.centrifuge.newSubscription(a.id,{data:a.addr.data});a.subscription=i,a.initalize(),i.subscribe()}}let Q=0},99355:(E,f,s)=>{var r=s(14590),t=s(75508);const n={canHandle(l){return!!(l&&l instanceof t.vU)},serialize(l){const e=r.BX(l),{port1:o,port2:c}=new MessageChannel;return r.p(e,o),[c,[c]]},deserialize(l){return l.start(),r.LV(l)}};r.J3.set("SubscriberHandler",n)}}]);

//# sourceMappingURL=8078.a4260b06f1454becf5c9.js.map