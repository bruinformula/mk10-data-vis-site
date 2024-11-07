"use strict";(self.webpackChunk_grafana_ui=self.webpackChunk_grafana_ui||[]).push([[4870],{"../grafana-data/src/types/icon.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Uo:function(){return toIconName},az:function(){return availableIconsIndex},n6:function(){return isIconName}});var availableIconsIndex={google:!0,microsoft:!0,github:!0,gitlab:!0,okta:!0,discord:!0,hipchat:!0,amazon:!0,"google-hangouts-alt":!0,pagerduty:!0,line:!0,anchor:!0,"adjust-circle":!0,"angle-double-down":!0,"angle-double-right":!0,"angle-double-left":!0,"angle-double-up":!0,"angle-down":!0,"angle-left":!0,"angle-right":!0,"angle-up":!0,"align-left":!0,"align-right":!0,"application-observability":!0,apps:!0,"archive-alt":!0,arrow:!0,"arrow-down":!0,"arrow-from-right":!0,"arrow-left":!0,"arrow-random":!0,"arrow-right":!0,"arrow-to-right":!0,"arrow-up":!0,"arrows-h":!0,"arrows-v":!0,asserts:!0,"expand-arrows":!0,"expand-arrows-alt":!0,at:!0,ai:!0,backward:!0,bars:!0,bell:!0,"bell-slash":!0,bolt:!0,book:!0,bookmark:!0,"book-open":!0,"brackets-curly":!0,bug:!0,building:!0,"calculator-alt":!0,"calendar-alt":!0,"calendar-slash":!0,camera:!0,capture:!0,"channel-add":!0,"chart-line":!0,check:!0,"check-circle":!0,"check-square":!0,circle:!0,"circle-mono":!0,"clipboard-alt":!0,"clock-nine":!0,cloud:!0,"cloud-download":!0,"cloud-upload":!0,"code-branch":!0,cog:!0,columns:!0,"comment-alt":!0,"comment-alt-message":!0,"comment-alt-share":!0,"comments-alt":!0,compass:!0,"compress-arrows":!0,copy:!0,"corner-down-right-alt":!0,"create-dashboard":!0,"credit-card":!0,crosshair:!0,cube:!0,dashboard:!0,database:!0,"dice-three":!0,docker:!0,"document-info":!0,"document-layout-left":!0,"download-alt":!0,draggabledots:!0,edit:!0,"ellipsis-v":!0,enter:!0,envelope:!0,"exchange-alt":!0,"exclamation-triangle":!0,"exclamation-circle":!0,exclamation:!0,"external-link-alt":!0,eye:!0,"eye-slash":!0,"ellipsis-h":!0,"fa fa-spinner":!0,favorite:!0,"file-alt":!0,"file-blank":!0,"file-copy-alt":!0,"file-download":!0,"file-edit-alt":!0,"file-landscape-alt":!0,filter:!0,flip:!0,folder:!0,font:!0,fire:!0,"folder-open":!0,"folder-plus":!0,"folder-upload":!0,forward:!0,"frontend-observability":!0,"gf-bar-alignment-after":!0,"gf-bar-alignment-before":!0,"gf-bar-alignment-center":!0,"gf-glue":!0,"gf-grid":!0,"gf-interpolation-linear":!0,"gf-interpolation-smooth":!0,"gf-interpolation-step-after":!0,"gf-interpolation-step-before":!0,"gf-landscape":!0,"gf-layout-simple":!0,"gf-logs":!0,"gf-ml":!0,"gf-movepane-left":!0,"gf-movepane-right":!0,"gf-portrait":!0,"gf-service-account":!0,"gf-show-context":!0,"gf-pin":!0,"gf-prometheus":!0,"gf-traces":!0,globe:!0,grafana:!0,"graph-bar":!0,heart:!0,"heart-rate":!0,"heart-break":!0,history:!0,"history-alt":!0,home:!0,"home-alt":!0,"horizontal-align-center":!0,"horizontal-align-left":!0,"horizontal-align-right":!0,hourglass:!0,import:!0,info:!0,"info-circle":!0,k6:!0,"key-skeleton-alt":!0,keyboard:!0,kubernetes:!0,"layer-group":!0,"layers-alt":!0,"legend-hide":!0,"legend-show":!0,"library-panel":!0,"line-alt":!0,link:!0,"link-broken":!0,"list-ui-alt":!0,"list-ul":!0,"list-ol":!0,lock:!0,"map-marker":!0,"map-marker-plus":!0,"map-marker-minus":!0,message:!0,minus:!0,"minus-circle":!0,"mobile-android":!0,monitor:!0,palette:!0,"panel-add":!0,paragraph:!0,"pathfinder-unite":!0,pause:!0,"pause-circle":!0,pen:!0,percentage:!0,play:!0,plug:!0,plus:!0,"plus-circle":!0,"plus-square":!0,power:!0,"presentation-play":!0,process:!0,"question-circle":!0,"record-audio":!0,repeat:!0,rocket:!0,"ruler-combined":!0,save:!0,search:!0,"search-minus":!0,"search-plus":!0,"share-alt":!0,shield:!0,"shield-exclamation":!0,signal:!0,signin:!0,signout:!0,sitemap:!0,slack:!0,"sliders-v-alt":!0,spinner:!0,"sort-amount-down":!0,"sort-amount-up":!0,"square-shape":!0,star:!0,"step-backward":!0,stopwatch:!0,"stopwatch-slash":!0,sync:!0,"sync-slash":!0,table:!0,"table-collapse-all":!0,"table-expand-all":!0,"tag-alt":!0,"telegram-alt":!0,"text-fields":!0,"thumbs-up":!0,times:!0,"times-circle":!0,"toggle-on":!0,"toggle-off":!0,"trash-alt":!0,unarchive:!0,unlock:!0,upload:!0,user:!0,"users-alt":!0,"user-arrows":!0,"vertical-align-bottom":!0,"vertical-align-center":!0,"vertical-align-top":!0,"web-section-alt":!0,"wrap-text":!0,rss:!0,x:!0,"add-user":!0,attach:!0};function isIconName(iconName){return!(!iconName||"string"!=typeof iconName)&&iconName in availableIconsIndex}function toIconName(iconName){if(isIconName(iconName))return iconName}},"./src/components/Icon/Icon.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{I:function(){return Icon}});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),_emotion_css__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@emotion/css/dist/emotion-css.esm.js"),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/react/index.js"),react_inlinesvg__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("../../node_modules/react-inlinesvg/esm/index.js"),_grafana_data__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../grafana-data/src/types/icon.ts"),_themes_ThemeContext__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/themes/ThemeContext.tsx"),_utils_keyframes__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/utils/keyframes.ts"),_utils__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/components/Icon/utils.ts");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var getIconStyles=function(theme){return{icon:(0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.AH)({display:"inline-block",fill:"currentColor",flexShrink:0,label:"Icon",lineHeight:0,verticalAlign:"middle"}),orange:(0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.AH)({fill:theme.v1.palette.orange}),spin:(0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.AH)(_define_property({},theme.transitions.handleMotion("no-preference","reduce"),{animation:"".concat(_utils_keyframes__WEBPACK_IMPORTED_MODULE_3__.t," 2s infinite linear")}))}},Icon=react__WEBPACK_IMPORTED_MODULE_2__.forwardRef((function(_param,ref){var _param_size=_param.size,size=void 0===_param_size?"md":_param_size,_param_type=_param.type,type=void 0===_param_type?"default":_param_type,name=_param.name,className=_param.className,style=_param.style,_param_title=_param.title,title=void 0===_param_title?"":_param_title,rest=_object_without_properties(_param,["size","type","name","className","style","title"]),styles=(0,_themes_ThemeContext__WEBPACK_IMPORTED_MODULE_4__.of)(getIconStyles);(0,_grafana_data__WEBPACK_IMPORTED_MODULE_5__.n6)(name)||console.warn("Icon component passed an invalid icon name",name);var iconName="fa fa-spinner"===name?"spinner":name,iconRoot=(0,_utils__WEBPACK_IMPORTED_MODULE_6__.Wj)(),svgSize=(0,_utils__WEBPACK_IMPORTED_MODULE_6__.cs)(size),svgHgt=svgSize,svgWid=name.startsWith("gf-bar-align")?16:name.startsWith("gf-interp")?30:svgSize,subDir=(0,_utils__WEBPACK_IMPORTED_MODULE_6__.Xi)(iconName,type),svgPath="".concat(iconRoot).concat(subDir,"/").concat(iconName,".svg"),composedClassName=(0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.cx)(styles.icon,className,"mono"===type?_define_property({},styles.orange,"favorite"===name):"",_define_property({},styles.spin,"spinner"===iconName));return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_inlinesvg__WEBPACK_IMPORTED_MODULE_7__.A,function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){_define_property(target,key,source[key])}))}return target}({"aria-hidden":!(void 0!==rest.tabIndex||title||rest["aria-label"]||rest["aria-labelledby"]||rest["aria-describedby"]),innerRef:ref,src:svgPath,width:svgWid,height:svgHgt,title:title,className:composedClassName,style:style},rest))}));Icon.displayName="Icon";try{Icon.displayName="Icon",Icon.__docgenInfo={description:"",displayName:"Icon",props:{name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"enum",value:[{value:'"play"'},{value:'"google"'},{value:'"microsoft"'},{value:'"github"'},{value:'"gitlab"'},{value:'"okta"'},{value:'"discord"'},{value:'"hipchat"'},{value:'"amazon"'},{value:'"google-hangouts-alt"'},{value:'"pagerduty"'},{value:'"line"'},{value:'"anchor"'},{value:'"adjust-circle"'},{value:'"angle-double-down"'},{value:'"angle-double-right"'},{value:'"angle-double-left"'},{value:'"angle-double-up"'},{value:'"angle-down"'},{value:'"angle-left"'},{value:'"angle-right"'},{value:'"angle-up"'},{value:'"align-left"'},{value:'"align-right"'},{value:'"application-observability"'},{value:'"apps"'},{value:'"archive-alt"'},{value:'"arrow"'},{value:'"arrow-down"'},{value:'"arrow-from-right"'},{value:'"arrow-left"'},{value:'"arrow-random"'},{value:'"arrow-right"'},{value:'"arrow-to-right"'},{value:'"arrow-up"'},{value:'"arrows-h"'},{value:'"arrows-v"'},{value:'"asserts"'},{value:'"expand-arrows"'},{value:'"expand-arrows-alt"'},{value:'"at"'},{value:'"ai"'},{value:'"backward"'},{value:'"bars"'},{value:'"bell"'},{value:'"bell-slash"'},{value:'"bolt"'},{value:'"book"'},{value:'"bookmark"'},{value:'"book-open"'},{value:'"brackets-curly"'},{value:'"bug"'},{value:'"building"'},{value:'"calculator-alt"'},{value:'"calendar-alt"'},{value:'"calendar-slash"'},{value:'"camera"'},{value:'"capture"'},{value:'"channel-add"'},{value:'"chart-line"'},{value:'"check"'},{value:'"check-circle"'},{value:'"check-square"'},{value:'"circle"'},{value:'"circle-mono"'},{value:'"clipboard-alt"'},{value:'"clock-nine"'},{value:'"cloud"'},{value:'"cloud-download"'},{value:'"cloud-upload"'},{value:'"code-branch"'},{value:'"cog"'},{value:'"columns"'},{value:'"comment-alt"'},{value:'"comment-alt-message"'},{value:'"comment-alt-share"'},{value:'"comments-alt"'},{value:'"compass"'},{value:'"compress-arrows"'},{value:'"copy"'},{value:'"corner-down-right-alt"'},{value:'"create-dashboard"'},{value:'"credit-card"'},{value:'"crosshair"'},{value:'"cube"'},{value:'"dashboard"'},{value:'"database"'},{value:'"dice-three"'},{value:'"docker"'},{value:'"document-info"'},{value:'"document-layout-left"'},{value:'"download-alt"'},{value:'"draggabledots"'},{value:'"edit"'},{value:'"ellipsis-v"'},{value:'"enter"'},{value:'"envelope"'},{value:'"exchange-alt"'},{value:'"exclamation-triangle"'},{value:'"exclamation-circle"'},{value:'"exclamation"'},{value:'"external-link-alt"'},{value:'"eye"'},{value:'"eye-slash"'},{value:'"ellipsis-h"'},{value:'"fa fa-spinner"'},{value:'"favorite"'},{value:'"file-alt"'},{value:'"file-blank"'},{value:'"file-copy-alt"'},{value:'"file-download"'},{value:'"file-edit-alt"'},{value:'"file-landscape-alt"'},{value:'"filter"'},{value:'"flip"'},{value:'"folder"'},{value:'"font"'},{value:'"fire"'},{value:'"folder-open"'},{value:'"folder-plus"'},{value:'"folder-upload"'},{value:'"forward"'},{value:'"frontend-observability"'},{value:'"gf-bar-alignment-after"'},{value:'"gf-bar-alignment-before"'},{value:'"gf-bar-alignment-center"'},{value:'"gf-glue"'},{value:'"gf-grid"'},{value:'"gf-interpolation-linear"'},{value:'"gf-interpolation-smooth"'},{value:'"gf-interpolation-step-after"'},{value:'"gf-interpolation-step-before"'},{value:'"gf-landscape"'},{value:'"gf-layout-simple"'},{value:'"gf-logs"'},{value:'"gf-ml"'},{value:'"gf-movepane-left"'},{value:'"gf-movepane-right"'},{value:'"gf-portrait"'},{value:'"gf-service-account"'},{value:'"gf-show-context"'},{value:'"gf-pin"'},{value:'"gf-prometheus"'},{value:'"gf-traces"'},{value:'"globe"'},{value:'"grafana"'},{value:'"graph-bar"'},{value:'"heart"'},{value:'"heart-rate"'},{value:'"heart-break"'},{value:'"history"'},{value:'"history-alt"'},{value:'"home"'},{value:'"home-alt"'},{value:'"horizontal-align-center"'},{value:'"horizontal-align-left"'},{value:'"horizontal-align-right"'},{value:'"hourglass"'},{value:'"import"'},{value:'"info"'},{value:'"info-circle"'},{value:'"k6"'},{value:'"key-skeleton-alt"'},{value:'"keyboard"'},{value:'"kubernetes"'},{value:'"layer-group"'},{value:'"layers-alt"'},{value:'"legend-hide"'},{value:'"legend-show"'},{value:'"library-panel"'},{value:'"line-alt"'},{value:'"link"'},{value:'"link-broken"'},{value:'"list-ui-alt"'},{value:'"list-ul"'},{value:'"list-ol"'},{value:'"lock"'},{value:'"map-marker"'},{value:'"map-marker-plus"'},{value:'"map-marker-minus"'},{value:'"message"'},{value:'"minus"'},{value:'"minus-circle"'},{value:'"mobile-android"'},{value:'"monitor"'},{value:'"palette"'},{value:'"panel-add"'},{value:'"paragraph"'},{value:'"pathfinder-unite"'},{value:'"pause"'},{value:'"pause-circle"'},{value:'"pen"'},{value:'"percentage"'},{value:'"plug"'},{value:'"plus"'},{value:'"plus-circle"'},{value:'"plus-square"'},{value:'"power"'},{value:'"presentation-play"'},{value:'"process"'},{value:'"question-circle"'},{value:'"record-audio"'},{value:'"repeat"'},{value:'"rocket"'},{value:'"ruler-combined"'},{value:'"save"'},{value:'"search"'},{value:'"search-minus"'},{value:'"search-plus"'},{value:'"share-alt"'},{value:'"shield"'},{value:'"shield-exclamation"'},{value:'"signal"'},{value:'"signin"'},{value:'"signout"'},{value:'"sitemap"'},{value:'"slack"'},{value:'"sliders-v-alt"'},{value:'"spinner"'},{value:'"sort-amount-down"'},{value:'"sort-amount-up"'},{value:'"square-shape"'},{value:'"star"'},{value:'"step-backward"'},{value:'"stopwatch"'},{value:'"stopwatch-slash"'},{value:'"sync"'},{value:'"sync-slash"'},{value:'"table"'},{value:'"table-collapse-all"'},{value:'"table-expand-all"'},{value:'"tag-alt"'},{value:'"telegram-alt"'},{value:'"text-fields"'},{value:'"thumbs-up"'},{value:'"times"'},{value:'"times-circle"'},{value:'"toggle-on"'},{value:'"toggle-off"'},{value:'"trash-alt"'},{value:'"unarchive"'},{value:'"unlock"'},{value:'"upload"'},{value:'"user"'},{value:'"users-alt"'},{value:'"user-arrows"'},{value:'"vertical-align-bottom"'},{value:'"vertical-align-center"'},{value:'"vertical-align-top"'},{value:'"web-section-alt"'},{value:'"wrap-text"'},{value:'"rss"'},{value:'"x"'},{value:'"add-user"'},{value:'"attach"'}]}},size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"xxl"'},{value:'"xxxl"'}]}},type:{defaultValue:{value:"default"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"solid"'},{value:'"default"'},{value:'"mono"'}]}},title:{defaultValue:{value:""},description:"Give your icon a semantic meaning. The icon will be hidden from screen readers, unless this prop or an aria-label is provided.",name:"title",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Icon/Icon.tsx#Icon"]={docgenInfo:Icon.__docgenInfo,name:"Icon",path:"src/components/Icon/Icon.tsx#Icon"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Icon/utils.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Wj:function(){return getIconRoot},Xi:function(){return getIconSubDir},cs:function(){return getSvgSize}});var iconRoot,alwaysMonoIcons=["grafana","favorite","heart-break","heart","panel-add","library-panel","circle-mono"];function getIconSubDir(name,type){return(null==name?void 0:name.startsWith("gf-"))?"custom":alwaysMonoIcons.includes(name)?"mono":"default"===type?"unicons":"solid"===type?"solid":"mono"}function getSvgSize(size){switch(size){case"xs":return 12;case"sm":return 14;case"md":return 16;case"lg":return 18;case"xl":return 24;case"xxl":return 36;case"xxxl":return 48}}function getIconRoot(){if(iconRoot)return iconRoot;var grafanaPublicPath="undefined"!=typeof window&&window.__grafana_public_path__;return iconRoot=grafanaPublicPath?grafanaPublicPath+"img/icons/":"public/img/icons/"}},"./src/components/Portal/Portal.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{ZL:function(){return Portal},gF:function(){return getPortalContainer}});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("../../node_modules/@emotion/css/dist/emotion-css.esm.js"),__webpack_require__("../../node_modules/react/index.js")),react_dom__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/react-dom/index.js"),_themes__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/themes/ThemeContext.tsx");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})),target}function Portal(props){var children=props.children,className=props.className,root=props.root,forwardedRef=props.forwardedRef,theme=(0,_themes__WEBPACK_IMPORTED_MODULE_4__.$j)(),node=(0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null),portalRoot=null!=root?root:getPortalContainer();return node.current||(node.current=document.createElement("div"),className&&(node.current.className=className),node.current.style.position="relative",node.current.style.zIndex="".concat(theme.zIndex.portal)),(0,react__WEBPACK_IMPORTED_MODULE_2__.useLayoutEffect)((function(){return node.current&&portalRoot.appendChild(node.current),function(){node.current&&portalRoot.removeChild(node.current)}}),[portalRoot]),react_dom__WEBPACK_IMPORTED_MODULE_3__.createPortal((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{ref:forwardedRef,children:children}),node.current)}function getPortalContainer(){var _window_document_getElementById;return null!==(_window_document_getElementById=window.document.getElementById("grafana-portal-container"))&&void 0!==_window_document_getElementById?_window_document_getElementById:document.body}var RefForwardingPortal=react__WEBPACK_IMPORTED_MODULE_2__.forwardRef((function(props,ref){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Portal,_object_spread_props(function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){_define_property(target,key,source[key])}))}return target}({},props),{forwardedRef:ref}))}));RefForwardingPortal.displayName="RefForwardingPortal";try{Portal.displayName="RefForwardingPortal",Portal.__docgenInfo={description:"",displayName:"RefForwardingPortal",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},root:{defaultValue:null,description:"",name:"root",required:!1,type:{name:"HTMLElement"}},forwardedRef:{defaultValue:null,description:"",name:"forwardedRef",required:!1,type:{name:"ForwardedRef<HTMLDivElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Portal/Portal.tsx#RefForwardingPortal"]={docgenInfo:RefForwardingPortal.__docgenInfo,name:"RefForwardingPortal",path:"src/components/Portal/Portal.tsx#RefForwardingPortal"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Tooltip/Tooltip.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{m:function(){return Tooltip}});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),_floating_ui_react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.mjs"),_floating_ui_react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/@floating-ui/react/dist/floating-ui.react.mjs"),_floating_ui_react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/index.js"),_grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("../grafana-e2e-selectors/src/selectors/index.ts"),_themes_ThemeContext__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/themes/ThemeContext.tsx"),_utils_tooltipUtils__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/utils/tooltipUtils.ts"),_Portal_Portal__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./src/components/Portal/Portal.tsx");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){_define_property(target,key,source[key])}))}return target}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})),target}function _sliced_to_array(arr,i){return function _array_with_holes(arr){if(Array.isArray(arr))return arr}(arr)||function _iterable_to_array_limit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}(arr,i)||function _unsupported_iterable_to_array(o,minLen){if(!o)return;if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}(arr,i)||function _non_iterable_rest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var Tooltip=(0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((function(param,forwardedRef){var children=param.children,theme=param.theme,interactive=param.interactive,show=param.show,placement=param.placement,content=param.content,arrowRef=(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null),_useState=_sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(show),2),controlledVisible=_useState[0],setControlledVisible=_useState[1],isOpen=null!=show?show:controlledVisible,middleware=[(0,_floating_ui_react__WEBPACK_IMPORTED_MODULE_2__.cY)(8),(0,_floating_ui_react__WEBPACK_IMPORTED_MODULE_2__.UU)({fallbackAxisSideDirection:"end",crossAxis:!1,boundary:document.body}),(0,_floating_ui_react__WEBPACK_IMPORTED_MODULE_2__.BN)(),(0,_floating_ui_react__WEBPACK_IMPORTED_MODULE_2__.UE)({element:arrowRef})],_useFloating=(0,_floating_ui_react__WEBPACK_IMPORTED_MODULE_3__.we)({open:isOpen,placement:(0,_utils_tooltipUtils__WEBPACK_IMPORTED_MODULE_4__.O)(placement),onOpenChange:setControlledVisible,middleware:middleware,whileElementsMounted:_floating_ui_react__WEBPACK_IMPORTED_MODULE_5__.ll}),context=_useFloating.context,refs=_useFloating.refs,floatingStyles=_useFloating.floatingStyles,tooltipId=(0,react__WEBPACK_IMPORTED_MODULE_1__.useId)(),hover=(0,_floating_ui_react__WEBPACK_IMPORTED_MODULE_3__.Mk)(context,{delay:{close:interactive?100:0},move:!1}),focus=(0,_floating_ui_react__WEBPACK_IMPORTED_MODULE_3__.iQ)(context),dismiss=(0,_floating_ui_react__WEBPACK_IMPORTED_MODULE_3__.s9)(context),_useInteractions=(0,_floating_ui_react__WEBPACK_IMPORTED_MODULE_3__.bv)([dismiss,hover,focus]),getReferenceProps=_useInteractions.getReferenceProps,getFloatingProps=_useInteractions.getFloatingProps,contentIsFunction="function"==typeof content,style=(0,_themes_ThemeContext__WEBPACK_IMPORTED_MODULE_6__.of)(getStyles)[null!=theme?theme:"info"],handleRef=(0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((function(ref){refs.setReference(ref),"function"==typeof forwardedRef?forwardedRef(ref):forwardedRef&&(forwardedRef.current=ref)}),[forwardedRef,refs]),childHasMatchingAriaLabel="aria-label"in children.props&&children.props["aria-label"]===content;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[(0,react__WEBPACK_IMPORTED_MODULE_1__.cloneElement)(children,_object_spread({ref:handleRef,tabIndex:0,"aria-describedby":!childHasMatchingAriaLabel&&isOpen?tooltipId:void 0},getReferenceProps())),isOpen&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Portal_Portal__WEBPACK_IMPORTED_MODULE_7__.ZL,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",_object_spread_props(_object_spread({ref:refs.setFloating,style:floatingStyles},getFloatingProps()),{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_floating_ui_react__WEBPACK_IMPORTED_MODULE_3__.ie,{className:style.arrow,ref:arrowRef,context:context}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{"data-testid":_grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_8__.Tp.components.Tooltip.container,id:tooltipId,role:"tooltip",className:style.container,children:["string"==typeof content&&content,(0,react__WEBPACK_IMPORTED_MODULE_1__.isValidElement)(content)&&(0,react__WEBPACK_IMPORTED_MODULE_1__.cloneElement)(content),contentIsFunction&&content({})]})]}))})]})}));Tooltip.displayName="Tooltip";var getStyles=function(theme){var _obj,info=(0,_utils_tooltipUtils__WEBPACK_IMPORTED_MODULE_4__.f)(theme,theme.components.tooltip.background,theme.components.tooltip.background,theme.components.tooltip.text,{topBottom:.5,rightLeft:1}),error=(0,_utils_tooltipUtils__WEBPACK_IMPORTED_MODULE_4__.f)(theme,theme.colors.error.main,theme.colors.error.main,theme.colors.error.contrastText,{topBottom:.5,rightLeft:1});return _define_property(_obj={info:info},"info-alt",info),_define_property(_obj,"error",error),_obj};try{Tooltip.displayName="Tooltip",Tooltip.__docgenInfo={description:"",displayName:"Tooltip",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"enum",value:[{value:'"info"'},{value:'"error"'},{value:'"info-alt"'}]}},show:{defaultValue:null,description:"",name:"show",required:!1,type:{name:"boolean"}},placement:{defaultValue:null,description:"",name:"placement",required:!1,type:{name:"enum",value:[{value:'"auto"'},{value:'"bottom"'},{value:'"top"'},{value:'"right"'},{value:'"left"'},{value:'"bottom-start"'},{value:'"bottom-end"'},{value:'"top-start"'},{value:'"top-end"'},{value:'"right-start"'},{value:'"right-end"'},{value:'"left-start"'},{value:'"left-end"'},{value:'"auto-start"'},{value:'"auto-end"'}]}},content:{defaultValue:null,description:"",name:"content",required:!0,type:{name:"PopoverContent"}},interactive:{defaultValue:null,description:"Set to true if you want the tooltip to stay long enough so the user can move mouse over content to select text or click a link",name:"interactive",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Tooltip/Tooltip.tsx#Tooltip"]={docgenInfo:Tooltip.__docgenInfo,name:"Tooltip",path:"src/components/Tooltip/Tooltip.tsx#Tooltip"})}catch(__react_docgen_typescript_loader_error){}},"./src/utils/keyframes.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{t:function(){return spin}});var spin=(0,__webpack_require__("../../node_modules/@emotion/css/dist/emotion-css.esm.js").i7)({"0%":{transform:"rotate(0deg)"},"100%":{transform:"rotate(359deg)"}})},"./src/utils/tooltipUtils.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{O:function(){return getPlacement},f:function(){return buildTooltipTheme}});var _emotion_css__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/@emotion/css/dist/emotion-css.esm.js");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function getPlacement(placement){switch(placement){case"auto":return"bottom";case"auto-start":return"bottom-start";case"auto-end":return"bottom-end";default:return null!=placement?placement:"bottom"}}function buildTooltipTheme(theme,tooltipBg,toggletipBorder,tooltipText,tooltipPadding){var _obj;return{arrow:(0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.AH)({fill:tooltipBg}),container:(0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.AH)((_obj={backgroundColor:tooltipBg,borderRadius:theme.shape.radius.default,border:"1px solid ".concat(toggletipBorder),boxShadow:theme.shadows.z2,color:tooltipText,fontSize:theme.typography.bodySmall.fontSize,padding:theme.spacing(tooltipPadding.topBottom,tooltipPadding.rightLeft)},_define_property(_obj,theme.transitions.handleMotion("no-preference","reduce"),{transition:"opacity 0.3s"}),_define_property(_obj,"zIndex",theme.zIndex.tooltip),_define_property(_obj,"maxWidth","400px"),_define_property(_obj,"overflowWrap","break-word"),_define_property(_obj,"&[data-popper-interactive='false']",{pointerEvents:"none"}),_obj)),headerClose:(0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.AH)({color:theme.colors.text.secondary,position:"absolute",right:theme.spacing(1),top:theme.spacing(1.5),backgroundColor:"transparent",border:0}),header:(0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.AH)({paddingTop:theme.spacing(1),paddingBottom:theme.spacing(2)}),body:(0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.AH)({paddingTop:theme.spacing(1),paddingBottom:theme.spacing(1)}),footer:(0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.AH)({paddingTop:theme.spacing(2),paddingBottom:theme.spacing(1)})}}},"./src/components/FeatureBadge/FeatureBadge.story.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:function(){return Basic},default:function(){return FeatureBadge_story}});var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),app=__webpack_require__("../grafana-data/src/types/app.ts"),FeatureBadge=__webpack_require__("./src/components/FeatureBadge/FeatureBadge.tsx"),lib=(__webpack_require__("../../node_modules/react/index.js"),__webpack_require__("../../node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js")),dist=__webpack_require__("../../node_modules/@storybook/blocks/dist/index.mjs");function _createMdxContent(props){const _components={a:"a",h2:"h2",p:"p",...(0,lib.R)(),...props.components};return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.W8,{title:"MDX|FeatureBadge",component:FeatureBadge.y}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"featurebadge",children:"FeatureBadge"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["A component for displaying information about different release stages of features, in accordance with the guidelines provided at ",(0,jsx_runtime.jsx)(_components.a,{href:"https://grafana.com/docs/release-life-cycle",rel:"nofollow",children:"Grafana's Release Life Cycle"}),"."]}),"\n",(0,jsx_runtime.jsx)(dist.ov,{of:FeatureBadge.y})]})}function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var meta={title:"Data Display/FeatureBadge",component:FeatureBadge.y,parameters:{docs:{page:function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,lib.R)(),...props.components};return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}}},argTypes:{featureState:{control:{type:"select",options:["experimental","private preview","preview"]}},tooltip:{control:"text"}}},Basic=function(args){return(0,jsx_runtime.jsx)(FeatureBadge.y,function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){_define_property(target,key,source[key])}))}return target}({},args))}.bind({});Basic.args={featureState:app.Ay.preview,tooltip:"This feature is in selected mode"};var FeatureBadge_story=meta;Basic.parameters={...Basic.parameters,docs:{...Basic.parameters?.docs,source:{originalSource:"args => <FeatureBadge {...args} />",...Basic.parameters?.docs?.source}}}}}]);