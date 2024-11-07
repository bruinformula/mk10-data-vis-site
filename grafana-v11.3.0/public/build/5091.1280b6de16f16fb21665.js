"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[5091],{75091:(Z,T,t)=>{t.r(T),t.d(T,{ArgumentOutOfRangeError:()=>Ut.k,AsyncSubject:()=>E.h,BehaviorSubject:()=>c.t,ConnectableObservable:()=>I.G,EMPTY:()=>z.w,EmptyError:()=>Ct.G,NEVER:()=>et.t,NotFoundError:()=>Rt.m,Notification:()=>k.Eg,NotificationKind:()=>k.Ij,ObjectUnsubscribedError:()=>Dt.P,Observable:()=>f.c,ReplaySubject:()=>C.m,Scheduler:()=>It._,SequenceError:()=>Pt.I,Subject:()=>y.B,Subscriber:()=>xt.vU,Subscription:()=>S.yU,TimeoutError:()=>q.M,UnsubscriptionError:()=>jt.Z,VirtualAction:()=>w,VirtualTimeScheduler:()=>Tt,animationFrame:()=>Et,animationFrameScheduler:()=>b,animationFrames:()=>L,asap:()=>mt,asapScheduler:()=>G,async:()=>Y.b,asyncScheduler:()=>Y.E,audit:()=>hn.s,auditTime:()=>cn.Z,bindCallback:()=>zt,bindNodeCallback:()=>Kt,buffer:()=>gn.r,bufferCount:()=>An.S,bufferTime:()=>yn.w,bufferToggle:()=>En.H,bufferWhen:()=>Tn.n,catchError:()=>In.W,combineAll:()=>xn.p,combineLatest:()=>pt.z,combineLatestAll:()=>Fn.A,combineLatestWith:()=>Mn.v,concat:()=>Nt.x,concatAll:()=>Wn.K,concatMap:()=>On.H,concatMapTo:()=>Sn.S,concatWith:()=>Ln.$,config:()=>mn.$,connect:()=>Un.N,connectable:()=>Qt,count:()=>Cn.U,debounce:()=>Rn.s,debounceTime:()=>Dn.B,defaultIfEmpty:()=>Pn.U,defer:()=>V.v,delay:()=>jn.c,delayWhen:()=>Bn.o,dematerialize:()=>zn.Z,distinct:()=>Kn.d,distinctUntilChanged:()=>pn.F,distinctUntilKeyChanged:()=>Nn.w,elementAt:()=>Vn.s,empty:()=>z.I,endWith:()=>Qn.q,every:()=>Hn.S,exhaust:()=>Zn.B,exhaustAll:()=>Jn.C,exhaustMap:()=>$n.p,expand:()=>Gn.f,filter:()=>H.p,finalize:()=>Yn.j,find:()=>Xn.I,findIndex:()=>bn.S,first:()=>wn.$,firstValueFrom:()=>Lt._,flatMap:()=>or.q,forkJoin:()=>Ht.p,from:()=>nt.H,fromEvent:()=>Q,fromEventPattern:()=>it,generate:()=>wt.c,groupBy:()=>kn.$,identity:()=>Wt.D,ignoreElements:()=>qn.w,iif:()=>kt,interval:()=>qt.Y,isEmpty:()=>_n.I,isObservable:()=>Ot.A,last:()=>tr.H,lastValueFrom:()=>St.s,map:()=>nr.T,mapTo:()=>rr.u,materialize:()=>ar.O,max:()=>ir.T,merge:()=>_t.h,mergeAll:()=>er.U,mergeMap:()=>rt.Z,mergeMapTo:()=>sr.C,mergeScan:()=>vr.i,mergeWith:()=>lr.X,min:()=>fr.j,multicast:()=>ur.f,never:()=>et.Z,noop:()=>Mt.l,observable:()=>O.s,observeOn:()=>tt.Q,of:()=>tn.of,onErrorResumeNext:()=>nn.g,onErrorResumeNextWith:()=>dr.w,pairs:()=>rn,pairwise:()=>mr.J,partition:()=>en,pipe:()=>Ft.F,pluck:()=>hr.E,publish:()=>cr.m,publishBehavior:()=>gr.K,publishLast:()=>Ar.k,publishReplay:()=>yr.H,queue:()=>gt,queueScheduler:()=>X,race:()=>on.O,raceWith:()=>Er.w,range:()=>sn,reduce:()=>Tr.T,refCount:()=>Wr.B,repeat:()=>Ir.u,repeatWhen:()=>xr.Y,retry:()=>Fr.L,retryWhen:()=>Mr.l,sample:()=>Or.X,sampleTime:()=>Sr.q,scan:()=>Lr.S,scheduled:()=>dn.c,sequenceEqual:()=>Ur.m,share:()=>Cr.u,shareReplay:()=>Rr.t,single:()=>Dr.J,skip:()=>Pr.i,skipLast:()=>jr.G,skipUntil:()=>Br.U,skipWhile:()=>zr.j,startWith:()=>Kr.Z,subscribeOn:()=>_._,switchAll:()=>pr.w,switchMap:()=>Nr.n,switchMapTo:()=>Vr.K,switchScan:()=>Qr.m,take:()=>Hr.s,takeLast:()=>Zr.o,takeUntil:()=>Jr.Q,takeWhile:()=>$r.v,tap:()=>Gr.M,throttle:()=>Yr.n,throttleTime:()=>Xr.c,throwError:()=>vn.$,throwIfEmpty:()=>br.v,timeInterval:()=>wr.f,timeout:()=>q.w,timeoutWith:()=>kr.o,timer:()=>ln.O,timestamp:()=>qr.v,toArray:()=>_r.$,using:()=>fn,window:()=>ta.x,windowCount:()=>na.k,windowTime:()=>ra.s,windowToggle:()=>aa.J,windowWhen:()=>ia.p,withLatestFrom:()=>ea.E,zip:()=>un.y,zipAll:()=>oa.x,zipWith:()=>sa.O});var f=t(88483),I=t(97255),O=t(55604),x={now:function(){return(x.delegate||performance).now()},delegate:void 0},v=t(31635),S=t(64423),u={schedule:function(a){var i=requestAnimationFrame,n=cancelAnimationFrame,e=u.delegate;e&&(i=e.requestAnimationFrame,n=e.cancelAnimationFrame);var r=i(function(o){n=void 0,a(o)});return new S.yU(function(){return n?.(r)})},requestAnimationFrame:function(){for(var a=[],i=0;i<arguments.length;i++)a[i]=arguments[i];var n=u.delegate;return(n?.requestAnimationFrame||requestAnimationFrame).apply(void 0,(0,v.__spreadArray)([],(0,v.__read)(a)))},cancelAnimationFrame:function(){for(var a=[],i=0;i<arguments.length;i++)a[i]=arguments[i];var n=u.delegate;return(n?.cancelAnimationFrame||cancelAnimationFrame).apply(void 0,(0,v.__spreadArray)([],(0,v.__read)(a)))},delegate:void 0};function L(a){return a?U(a):F}function U(a){return new f.c(function(i){var n=a||x,e=n.now(),r=0,o=function(){i.closed||(r=u.requestAnimationFrame(function(s){r=0;var l=n.now();i.next({timestamp:a?l:s,elapsed:l-e}),o()}))};return o(),function(){r&&u.cancelAnimationFrame(r)}})}var F=U(),y=t(13752),c=t(49426),C=t(39741),E=t(54746),g=t(44876),D=1,d,m={};function J(a){return a in m?(delete m[a],!0):!1}var $={setImmediate:function(a){var i=D++;return m[i]=!0,d||(d=Promise.resolve()),d.then(function(){return J(i)&&a()}),i},clearImmediate:function(a){J(a)}},va={pending:function(){return Object.keys(m).length}},lt=$.setImmediate,ft=$.clearImmediate,P={setImmediate:function(){for(var a=[],i=0;i<arguments.length;i++)a[i]=arguments[i];var n=P.delegate;return(n?.setImmediate||lt).apply(void 0,(0,v.__spreadArray)([],(0,v.__read)(a)))},clearImmediate:function(a){var i=P.delegate;return(i?.clearImmediate||ft)(a)},delegate:void 0},ut=function(a){(0,v.__extends)(i,a);function i(n,e){var r=a.call(this,n,e)||this;return r.scheduler=n,r.work=e,r}return i.prototype.requestAsyncId=function(n,e,r){return r===void 0&&(r=0),r!==null&&r>0?a.prototype.requestAsyncId.call(this,n,e,r):(n.actions.push(this),n._scheduled||(n._scheduled=P.setImmediate(n.flush.bind(n,void 0))))},i.prototype.recycleAsyncId=function(n,e,r){var o;if(r===void 0&&(r=0),r!=null?r>0:this.delay>0)return a.prototype.recycleAsyncId.call(this,n,e,r);var s=n.actions;e!=null&&((o=s[s.length-1])===null||o===void 0?void 0:o.id)!==e&&(P.clearImmediate(e),n._scheduled===e&&(n._scheduled=void 0))},i}(g.R),j=t(40989),dt=function(a){(0,v.__extends)(i,a);function i(){return a!==null&&a.apply(this,arguments)||this}return i.prototype.flush=function(n){this._active=!0;var e=this._scheduled;this._scheduled=void 0;var r=this.actions,o;n=n||r.shift();do if(o=n.execute(n.state,n.delay))break;while((n=r[0])&&n.id===e&&r.shift());if(this._active=!1,o){for(;(n=r[0])&&n.id===e&&r.shift();)n.unsubscribe();throw o}},i}(j.q),G=new dt(ut),mt=G,Y=t(44838),ht=function(a){(0,v.__extends)(i,a);function i(n,e){var r=a.call(this,n,e)||this;return r.scheduler=n,r.work=e,r}return i.prototype.schedule=function(n,e){return e===void 0&&(e=0),e>0?a.prototype.schedule.call(this,n,e):(this.delay=e,this.state=n,this.scheduler.flush(this),this)},i.prototype.execute=function(n,e){return e>0||this.closed?a.prototype.execute.call(this,n,e):this._execute(n,e)},i.prototype.requestAsyncId=function(n,e,r){return r===void 0&&(r=0),r!=null&&r>0||r==null&&this.delay>0?a.prototype.requestAsyncId.call(this,n,e,r):(n.flush(this),0)},i}(g.R),ct=function(a){(0,v.__extends)(i,a);function i(){return a!==null&&a.apply(this,arguments)||this}return i}(j.q),X=new ct(ht),gt=X,At=function(a){(0,v.__extends)(i,a);function i(n,e){var r=a.call(this,n,e)||this;return r.scheduler=n,r.work=e,r}return i.prototype.requestAsyncId=function(n,e,r){return r===void 0&&(r=0),r!==null&&r>0?a.prototype.requestAsyncId.call(this,n,e,r):(n.actions.push(this),n._scheduled||(n._scheduled=u.requestAnimationFrame(function(){return n.flush(void 0)})))},i.prototype.recycleAsyncId=function(n,e,r){var o;if(r===void 0&&(r=0),r!=null?r>0:this.delay>0)return a.prototype.recycleAsyncId.call(this,n,e,r);var s=n.actions;e!=null&&((o=s[s.length-1])===null||o===void 0?void 0:o.id)!==e&&(u.cancelAnimationFrame(e),n._scheduled=void 0)},i}(g.R),yt=function(a){(0,v.__extends)(i,a);function i(){return a!==null&&a.apply(this,arguments)||this}return i.prototype.flush=function(n){this._active=!0;var e=this._scheduled;this._scheduled=void 0;var r=this.actions,o;n=n||r.shift();do if(o=n.execute(n.state,n.delay))break;while((n=r[0])&&n.id===e&&r.shift());if(this._active=!1,o){for(;(n=r[0])&&n.id===e&&r.shift();)n.unsubscribe();throw o}},i}(j.q),b=new yt(At),Et=b,Tt=function(a){(0,v.__extends)(i,a);function i(n,e){n===void 0&&(n=w),e===void 0&&(e=1/0);var r=a.call(this,n,function(){return r.frame})||this;return r.maxFrames=e,r.frame=0,r.index=-1,r}return i.prototype.flush=function(){for(var n=this,e=n.actions,r=n.maxFrames,o,s;(s=e[0])&&s.delay<=r&&(e.shift(),this.frame=s.delay,!(o=s.execute(s.state,s.delay))););if(o){for(;s=e.shift();)s.unsubscribe();throw o}},i.frameTimeFactor=10,i}(j.q),w=function(a){(0,v.__extends)(i,a);function i(n,e,r){r===void 0&&(r=n.index+=1);var o=a.call(this,n,e)||this;return o.scheduler=n,o.work=e,o.index=r,o.active=!0,o.index=n.index=r,o}return i.prototype.schedule=function(n,e){if(e===void 0&&(e=0),Number.isFinite(e)){if(!this.id)return a.prototype.schedule.call(this,n,e);this.active=!1;var r=new i(this.scheduler,this.work);return this.add(r),r.schedule(n,e)}else return S.yU.EMPTY},i.prototype.requestAsyncId=function(n,e,r){r===void 0&&(r=0),this.delay=n.frame+r;var o=n.actions;return o.push(this),o.sort(i.sortActions),1},i.prototype.recycleAsyncId=function(n,e,r){r===void 0&&(r=0)},i.prototype._execute=function(n,e){if(this.active===!0)return a.prototype._execute.call(this,n,e)},i.sortActions=function(n,e){return n.delay===e.delay?n.index===e.index?0:n.index>e.index?1:-1:n.delay>e.delay?1:-1},i}(g.R),It=t(94121),xt=t(75508),k=t(39005),Ft=t(81485),Mt=t(92357),Wt=t(58307),Ot=t(50832),St=t(75505),Lt=t(72985),Ut=t(60064),Ct=t(76464),Rt=t(16418),Dt=t(24455),Pt=t(17156),q=t(90593),jt=t(58909),Bt=t(98820),_=t(1343),N=t(35135),tt=t(19895);function B(a,i,n,e){if(n)if((0,Bt.m)(n))e=n;else return function(){for(var r=[],o=0;o<arguments.length;o++)r[o]=arguments[o];return B(a,i,e).apply(this,r).pipe((0,N.I)(n))};return e?function(){for(var r=[],o=0;o<arguments.length;o++)r[o]=arguments[o];return B(a,i).apply(this,r).pipe((0,_._)(e),(0,tt.Q)(e))}:function(){for(var r=this,o=[],s=0;s<arguments.length;s++)o[s]=arguments[s];var l=new E.h,h=!0;return new f.c(function(M){var W=l.subscribe(M);if(h){h=!1;var ot=!1,st=!1;i.apply(r,(0,v.__spreadArray)((0,v.__spreadArray)([],(0,v.__read)(o)),[function(){for(var R=[],p=0;p<arguments.length;p++)R[p]=arguments[p];if(a){var vt=R.shift();if(vt!=null){l.error(vt);return}}l.next(1<R.length?R:R[0]),st=!0,ot&&l.complete()}])),st&&l.complete(),ot=!0}return W})}}function zt(a,i,n){return B(!1,a,i,n)}function Kt(a,i,n){return B(!0,a,i,n)}var pt=t(49510),Nt=t(47370),V=t(49935),Vt={connector:function(){return new y.B},resetOnDisconnect:!0};function Qt(a,i){i===void 0&&(i=Vt);var n=null,e=i.connector,r=i.resetOnDisconnect,o=r===void 0?!0:r,s=e(),l=new f.c(function(h){return s.subscribe(h)});return l.connect=function(){return(!n||n.closed)&&(n=(0,V.v)(function(){return a}).subscribe(s),o&&n.add(function(){return s=e()})),n},l}var z=t(61701),Ht=t(45650),nt=t(65474),K=t(15964),rt=t(69862),Zt=t(69391),A=t(61209),Jt=["addListener","removeListener"],$t=["addEventListener","removeEventListener"],Gt=["on","off"];function Q(a,i,n,e){if((0,A.T)(n)&&(e=n,n=void 0),e)return Q(a,i,n).pipe((0,N.I)(e));var r=(0,v.__read)(bt(a)?$t.map(function(l){return function(h){return a[l](i,h,n)}}):Yt(a)?Jt.map(at(a,i)):Xt(a)?Gt.map(at(a,i)):[],2),o=r[0],s=r[1];if(!o&&(0,Zt.X)(a))return(0,rt.Z)(function(l){return Q(l,i,n)})((0,K.Tg)(a));if(!o)throw new TypeError("Invalid event target");return new f.c(function(l){var h=function(){for(var M=[],W=0;W<arguments.length;W++)M[W]=arguments[W];return l.next(1<M.length?M:M[0])};return o(h),function(){return s(h)}})}function at(a,i){return function(n){return function(e){return a[n](i,e)}}}function Yt(a){return(0,A.T)(a.addListener)&&(0,A.T)(a.removeListener)}function Xt(a){return(0,A.T)(a.on)&&(0,A.T)(a.off)}function bt(a){return(0,A.T)(a.addEventListener)&&(0,A.T)(a.removeEventListener)}function it(a,i,n){return n?it(a,i).pipe((0,N.I)(n)):new f.c(function(e){var r=function(){for(var s=[],l=0;l<arguments.length;l++)s[l]=arguments[l];return e.next(s.length===1?s[0]:s)},o=a(r);return(0,A.T)(i)?function(){return i(r,o)}:void 0})}var wt=t(51553);function kt(a,i,n){return(0,V.v)(function(){return a()?i:n})}var qt=t(96083),_t=t(44240),et=t(11150),tn=t(62467),nn=t(45983);function rn(a,i){return(0,nt.H)(Object.entries(a),i)}var an=t(44696),H=t(16126);function en(a,i,n){return[(0,H.p)(i,n)((0,K.Tg)(a)),(0,H.p)((0,an.A)(i,n))((0,K.Tg)(a))]}var on=t(39123);function sn(a,i,n){if(i==null&&(i=a,a=0),i<=0)return z.w;var e=i+a;return new f.c(n?function(r){var o=a;return n.schedule(function(){o<e?(r.next(o++),this.schedule()):r.complete()})}:function(r){for(var o=a;o<e&&!r.closed;)r.next(o++);r.complete()})}var vn=t(13288),ln=t(39697);function fn(a,i){return new f.c(function(n){var e=a(),r=i(e),o=r?(0,K.Tg)(r):z.w;return o.subscribe(n),function(){e&&e.unsubscribe()}})}var un=t(43431),dn=t(3738),mn=t(94384),hn=t(7069),cn=t(55208),gn=t(28354),An=t(27639),yn=t(86471),En=t(70978),Tn=t(87598),In=t(66847),xn=t(36172),Fn=t(53389),Mn=t(65548),Wn=t(54889),On=t(95864),Sn=t(53881),Ln=t(75552),Un=t(68504),Cn=t(84093),Rn=t(51575),Dn=t(56978),Pn=t(38495),jn=t(76981),Bn=t(85925),zn=t(4506),Kn=t(6276),pn=t(41900),Nn=t(91283),Vn=t(24271),Qn=t(69111),Hn=t(93313),Zn=t(4056),Jn=t(22953),$n=t(81080),Gn=t(16424),Yn=t(69850),Xn=t(91223),bn=t(24123),wn=t(57532),kn=t(25016),qn=t(8767),_n=t(82027),tr=t(71528),nr=t(81160),rr=t(65961),ar=t(12827),ir=t(17312),er=t(93031),or=t(72773),sr=t(14299),vr=t(42771),lr=t(32382),fr=t(43134),ur=t(14576),dr=t(38633),mr=t(97256),hr=t(48547),cr=t(75805),gr=t(55771),Ar=t(44921),yr=t(68310),Er=t(43781),Tr=t(71030),Ir=t(31731),xr=t(715),Fr=t(33160),Mr=t(37748),Wr=t(93256),Or=t(13146),Sr=t(25759),Lr=t(29405),Ur=t(11929),Cr=t(1005),Rr=t(87718),Dr=t(704),Pr=t(77655),jr=t(26775),Br=t(31911),zr=t(2174),Kr=t(96222),pr=t(4409),Nr=t(63720),Vr=t(28009),Qr=t(72189),Hr=t(38975),Zr=t(80047),Jr=t(67791),$r=t(46662),Gr=t(59099),Yr=t(49184),Xr=t(99165),br=t(41560),wr=t(9420),kr=t(25941),qr=t(1498),_r=t(9084),ta=t(85384),na=t(45149),ra=t(37125),aa=t(96340),ia=t(40084),ea=t(19823),oa=t(70370),sa=t(79201)},49935:(Z,T,t)=>{t.d(T,{v:()=>O});var f=t(88483),I=t(15964);function O(x){return new f.c(function(v){(0,I.Tg)(x()).subscribe(v)})}},51553:(Z,T,t)=>{t.d(T,{c:()=>S});var f=t(31635),I=t(58307),O=t(98820),x=t(49935),v=t(98581);function S(u,L,U,F,y){var c,C,E,g;arguments.length===1?(c=u,g=c.initialState,L=c.condition,U=c.iterate,C=c.resultSelector,E=C===void 0?I.D:C,y=c.scheduler):(g=u,!F||(0,O.m)(F)?(E=I.D,y=F):E=F);function D(){var d;return(0,f.__generator)(this,function(m){switch(m.label){case 0:d=g,m.label=1;case 1:return!L||L(d)?[4,E(d)]:[3,4];case 2:m.sent(),m.label=3;case 3:return d=U(d),[3,1];case 4:return[2]}})}return(0,x.v)(y?function(){return(0,v.S)(D(),y)}:D)}}}]);

//# sourceMappingURL=5091.1280b6de16f16fb21665.js.map