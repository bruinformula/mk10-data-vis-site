"use strict";(self.webpackChunk_grafana_ui=self.webpackChunk_grafana_ui||[]).push([[8192],{"./src/components/Tabs/Counter.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{p:function(){return Counter}});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),_emotion_css__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@emotion/css/dist/emotion-css.esm.js"),_grafana_data__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../grafana-data/src/valueFormats/valueFormats.ts"),_themes__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/themes/ThemeContext.tsx"),Counter=function(param){var value=param.value,styles=(0,_themes__WEBPACK_IMPORTED_MODULE_2__.of)(getStyles);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:styles.counter,children:(0,_grafana_data__WEBPACK_IMPORTED_MODULE_3__.Hg)(value,0).text})},getStyles=function(theme){return{counter:(0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.AH)({label:"counter",marginLeft:theme.spacing(1),borderRadius:theme.spacing(3),backgroundColor:theme.colors.action.hover,padding:theme.spacing(.25,1),color:theme.colors.text.secondary,fontWeight:theme.typography.fontWeightMedium,fontSize:theme.typography.size.sm})}};try{Counter.displayName="Counter",Counter.__docgenInfo={description:"",displayName:"Counter",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Tabs/Counter.tsx#Counter"]={docgenInfo:Counter.__docgenInfo,name:"Counter",path:"src/components/Tabs/Counter.tsx#Counter"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Tabs/Tab.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{o:function(){return Tab}});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),_emotion_css__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@emotion/css/dist/emotion-css.esm.js"),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/react/index.js"),_grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("../grafana-e2e-selectors/src/selectors/index.ts"),_themes__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/themes/ThemeContext.tsx"),_themes_mixins__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./src/themes/mixins.ts"),_Button__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/Button/Button.tsx"),_Icon_Icon__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/components/Icon/Icon.tsx"),_Counter__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/components/Tabs/Counter.tsx");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){_define_property(target,key,source[key])}))}return target}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var Tab=react__WEBPACK_IMPORTED_MODULE_2__.forwardRef((function(_param,ref){var label=_param.label,active=_param.active,icon=_param.icon,onChangeTab=_param.onChangeTab,counter=_param.counter,Suffix=_param.suffix,href=(_param.className,_param.href),otherProps=_object_without_properties(_param,["label","active","icon","onChangeTab","counter","suffix","className","href"]),tabsStyles=(0,_themes__WEBPACK_IMPORTED_MODULE_3__.of)(getStyles),clearStyles=(0,_themes__WEBPACK_IMPORTED_MODULE_3__.of)(_Button__WEBPACK_IMPORTED_MODULE_4__.my),content=function(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[icon&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Icon_Icon__WEBPACK_IMPORTED_MODULE_5__.I,{name:icon}),label,"number"==typeof counter&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Counter__WEBPACK_IMPORTED_MODULE_6__.p,{value:counter}),Suffix&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Suffix,{className:tabsStyles.suffix})]})},commonProps=_object_spread_props(_object_spread({className:(0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.cx)(clearStyles,tabsStyles.link,active?tabsStyles.activeStyle:tabsStyles.notActive),"data-testid":_grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_7__.Tp.components.Tab.title(label)},otherProps),{onClick:onChangeTab,role:"tab","aria-selected":active});return href?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:tabsStyles.item,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",_object_spread_props(_object_spread({},commonProps),{href:href,ref:ref,children:content()}))}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:tabsStyles.item,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button",_object_spread_props(_object_spread({},commonProps),{type:"button",ref:ref,children:content()}))})}));Tab.displayName="Tab";var getStyles=function(theme){return{item:(0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.AH)({listStyle:"none",position:"relative",display:"flex",whiteSpace:"nowrap",padding:theme.spacing(.5)}),link:(0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.AH)({color:theme.colors.text.secondary,padding:theme.spacing(1,1.5,.5),borderRadius:theme.shape.radius.default,display:"block",height:"100%",svg:{marginRight:theme.spacing(1)},"&:focus-visible":(0,_themes_mixins__WEBPACK_IMPORTED_MODULE_8__.Hi)(theme),"&::before":{display:"block",content:'" "',position:"absolute",left:0,right:0,height:"4px",borderRadius:theme.shape.radius.default,bottom:0}}),notActive:(0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.AH)({"a:hover, &:hover, &:focus":{color:theme.colors.text.primary,"&::before":{backgroundColor:theme.colors.action.hover}}}),activeStyle:(0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.AH)({label:"activeTabStyle",color:theme.colors.text.primary,overflow:"hidden","&::before":{backgroundImage:theme.colors.gradients.brandHorizontal}}),suffix:(0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.AH)({marginLeft:theme.spacing(1)})}};try{Tab.displayName="Tab",Tab.__docgenInfo={description:"",displayName:"Tab",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"enum",value:[{value:'"play"'},{value:'"google"'},{value:'"microsoft"'},{value:'"github"'},{value:'"gitlab"'},{value:'"okta"'},{value:'"discord"'},{value:'"hipchat"'},{value:'"amazon"'},{value:'"google-hangouts-alt"'},{value:'"pagerduty"'},{value:'"line"'},{value:'"anchor"'},{value:'"adjust-circle"'},{value:'"angle-double-down"'},{value:'"angle-double-right"'},{value:'"angle-double-left"'},{value:'"angle-double-up"'},{value:'"angle-down"'},{value:'"angle-left"'},{value:'"angle-right"'},{value:'"angle-up"'},{value:'"align-left"'},{value:'"align-right"'},{value:'"application-observability"'},{value:'"apps"'},{value:'"archive-alt"'},{value:'"arrow"'},{value:'"arrow-down"'},{value:'"arrow-from-right"'},{value:'"arrow-left"'},{value:'"arrow-random"'},{value:'"arrow-right"'},{value:'"arrow-to-right"'},{value:'"arrow-up"'},{value:'"arrows-h"'},{value:'"arrows-v"'},{value:'"asserts"'},{value:'"expand-arrows"'},{value:'"expand-arrows-alt"'},{value:'"at"'},{value:'"ai"'},{value:'"backward"'},{value:'"bars"'},{value:'"bell"'},{value:'"bell-slash"'},{value:'"bolt"'},{value:'"book"'},{value:'"bookmark"'},{value:'"book-open"'},{value:'"brackets-curly"'},{value:'"bug"'},{value:'"building"'},{value:'"calculator-alt"'},{value:'"calendar-alt"'},{value:'"calendar-slash"'},{value:'"camera"'},{value:'"capture"'},{value:'"channel-add"'},{value:'"chart-line"'},{value:'"check"'},{value:'"check-circle"'},{value:'"check-square"'},{value:'"circle"'},{value:'"circle-mono"'},{value:'"clipboard-alt"'},{value:'"clock-nine"'},{value:'"cloud"'},{value:'"cloud-download"'},{value:'"cloud-upload"'},{value:'"code-branch"'},{value:'"cog"'},{value:'"columns"'},{value:'"comment-alt"'},{value:'"comment-alt-message"'},{value:'"comment-alt-share"'},{value:'"comments-alt"'},{value:'"compass"'},{value:'"compress-arrows"'},{value:'"copy"'},{value:'"corner-down-right-alt"'},{value:'"create-dashboard"'},{value:'"credit-card"'},{value:'"crosshair"'},{value:'"cube"'},{value:'"dashboard"'},{value:'"database"'},{value:'"dice-three"'},{value:'"docker"'},{value:'"document-info"'},{value:'"document-layout-left"'},{value:'"download-alt"'},{value:'"draggabledots"'},{value:'"edit"'},{value:'"ellipsis-v"'},{value:'"enter"'},{value:'"envelope"'},{value:'"exchange-alt"'},{value:'"exclamation-triangle"'},{value:'"exclamation-circle"'},{value:'"exclamation"'},{value:'"external-link-alt"'},{value:'"eye"'},{value:'"eye-slash"'},{value:'"ellipsis-h"'},{value:'"fa fa-spinner"'},{value:'"favorite"'},{value:'"file-alt"'},{value:'"file-blank"'},{value:'"file-copy-alt"'},{value:'"file-download"'},{value:'"file-edit-alt"'},{value:'"file-landscape-alt"'},{value:'"filter"'},{value:'"flip"'},{value:'"folder"'},{value:'"font"'},{value:'"fire"'},{value:'"folder-open"'},{value:'"folder-plus"'},{value:'"folder-upload"'},{value:'"forward"'},{value:'"frontend-observability"'},{value:'"gf-bar-alignment-after"'},{value:'"gf-bar-alignment-before"'},{value:'"gf-bar-alignment-center"'},{value:'"gf-glue"'},{value:'"gf-grid"'},{value:'"gf-interpolation-linear"'},{value:'"gf-interpolation-smooth"'},{value:'"gf-interpolation-step-after"'},{value:'"gf-interpolation-step-before"'},{value:'"gf-landscape"'},{value:'"gf-layout-simple"'},{value:'"gf-logs"'},{value:'"gf-ml"'},{value:'"gf-movepane-left"'},{value:'"gf-movepane-right"'},{value:'"gf-portrait"'},{value:'"gf-service-account"'},{value:'"gf-show-context"'},{value:'"gf-pin"'},{value:'"gf-prometheus"'},{value:'"gf-traces"'},{value:'"globe"'},{value:'"grafana"'},{value:'"graph-bar"'},{value:'"heart"'},{value:'"heart-rate"'},{value:'"heart-break"'},{value:'"history"'},{value:'"history-alt"'},{value:'"home"'},{value:'"home-alt"'},{value:'"horizontal-align-center"'},{value:'"horizontal-align-left"'},{value:'"horizontal-align-right"'},{value:'"hourglass"'},{value:'"import"'},{value:'"info"'},{value:'"info-circle"'},{value:'"k6"'},{value:'"key-skeleton-alt"'},{value:'"keyboard"'},{value:'"kubernetes"'},{value:'"layer-group"'},{value:'"layers-alt"'},{value:'"legend-hide"'},{value:'"legend-show"'},{value:'"library-panel"'},{value:'"line-alt"'},{value:'"link"'},{value:'"link-broken"'},{value:'"list-ui-alt"'},{value:'"list-ul"'},{value:'"list-ol"'},{value:'"lock"'},{value:'"map-marker"'},{value:'"map-marker-plus"'},{value:'"map-marker-minus"'},{value:'"message"'},{value:'"minus"'},{value:'"minus-circle"'},{value:'"mobile-android"'},{value:'"monitor"'},{value:'"palette"'},{value:'"panel-add"'},{value:'"paragraph"'},{value:'"pathfinder-unite"'},{value:'"pause"'},{value:'"pause-circle"'},{value:'"pen"'},{value:'"percentage"'},{value:'"plug"'},{value:'"plus"'},{value:'"plus-circle"'},{value:'"plus-square"'},{value:'"power"'},{value:'"presentation-play"'},{value:'"process"'},{value:'"question-circle"'},{value:'"record-audio"'},{value:'"repeat"'},{value:'"rocket"'},{value:'"ruler-combined"'},{value:'"save"'},{value:'"search"'},{value:'"search-minus"'},{value:'"search-plus"'},{value:'"share-alt"'},{value:'"shield"'},{value:'"shield-exclamation"'},{value:'"signal"'},{value:'"signin"'},{value:'"signout"'},{value:'"sitemap"'},{value:'"slack"'},{value:'"sliders-v-alt"'},{value:'"spinner"'},{value:'"sort-amount-down"'},{value:'"sort-amount-up"'},{value:'"square-shape"'},{value:'"star"'},{value:'"step-backward"'},{value:'"stopwatch"'},{value:'"stopwatch-slash"'},{value:'"sync"'},{value:'"sync-slash"'},{value:'"table"'},{value:'"table-collapse-all"'},{value:'"table-expand-all"'},{value:'"tag-alt"'},{value:'"telegram-alt"'},{value:'"text-fields"'},{value:'"thumbs-up"'},{value:'"times"'},{value:'"times-circle"'},{value:'"toggle-on"'},{value:'"toggle-off"'},{value:'"trash-alt"'},{value:'"unarchive"'},{value:'"unlock"'},{value:'"upload"'},{value:'"user"'},{value:'"users-alt"'},{value:'"user-arrows"'},{value:'"vertical-align-bottom"'},{value:'"vertical-align-center"'},{value:'"vertical-align-top"'},{value:'"web-section-alt"'},{value:'"wrap-text"'},{value:'"rss"'},{value:'"x"'},{value:'"add-user"'},{value:'"attach"'}]}},active:{defaultValue:null,description:"",name:"active",required:!1,type:{name:"boolean"}},href:{defaultValue:null,description:"When provided, it is possible to use the tab as a hyperlink. Use in cases where the tabs update location.",name:"href",required:!1,type:{name:"string"}},suffix:{defaultValue:null,description:"Extra content, displayed after the tab label and counter",name:"suffix",required:!1,type:{name:"ComponentType<{ className?: string; }>"}},onChangeTab:{defaultValue:null,description:"",name:"onChangeTab",required:!1,type:{name:"((event: MouseEvent<HTMLElement, MouseEvent>) => void)"}},counter:{defaultValue:null,description:"A number rendered next to the text. Usually used to display the number of items in a tab's view.",name:"counter",required:!1,type:{name:"number | null"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Tabs/Tab.tsx#Tab"]={docgenInfo:Tab.__docgenInfo,name:"Tab",path:"src/components/Tabs/Tab.tsx#Tab"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Tabs/TabContent.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{J:function(){return TabContent}});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),_emotion_css__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@emotion/css/dist/emotion-css.esm.js"),_themes__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/themes/ThemeContext.tsx");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var TabContent=function(_param){var children=_param.children,className=_param.className,restProps=_object_without_properties(_param,["children","className"]),styles=(0,_themes__WEBPACK_IMPORTED_MODULE_2__.of)(getTabContentStyle);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",_object_spread_props(function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){_define_property(target,key,source[key])}))}return target}({},restProps),{className:(0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.cx)(styles.tabContent,className),children:children}))},getTabContentStyle=function(theme){return{tabContent:(0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.AH)({background:theme.colors.background.primary})}};try{TabContent.displayName="TabContent",TabContent.__docgenInfo={description:"",displayName:"TabContent",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Tabs/TabContent.tsx#TabContent"]={docgenInfo:TabContent.__docgenInfo,name:"TabContent",path:"src/components/Tabs/TabContent.tsx#TabContent"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Tabs/TabsBar.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{U:function(){return TabsBar}});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),_emotion_css__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@emotion/css/dist/emotion-css.esm.js"),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/react/index.js"),_themes__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/themes/ThemeContext.tsx"),TabsBar=(0,react__WEBPACK_IMPORTED_MODULE_2__.forwardRef)((function(param,ref){var children=param.children,className=param.className,_param_hideBorder=param.hideBorder,hideBorder=void 0!==_param_hideBorder&&_param_hideBorder,styles=(0,_themes__WEBPACK_IMPORTED_MODULE_3__.of)(getStyles);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:(0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.cx)(styles.tabsWrapper,hideBorder&&styles.noBorder,className),ref:ref,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:styles.tabs,role:"tablist",children:children})})})),getStyles=function(theme){return{tabsWrapper:(0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.AH)({borderBottom:"1px solid ".concat(theme.colors.border.weak),overflowX:"auto"}),noBorder:(0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.AH)({borderBottom:0}),tabs:(0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.AH)({position:"relative",display:"flex",height:"".concat(theme.components.menuTabs.height,"px"),alignItems:"center"})}};TabsBar.displayName="TabsBar";try{TabsBar.displayName="TabsBar",TabsBar.__docgenInfo={description:"",displayName:"TabsBar",props:{children:{defaultValue:null,description:"Children should be a single <Tab /> or an array of <Tab />",name:"children",required:!0,type:{name:"ReactNode"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},hideBorder:{defaultValue:{value:"false"},description:"For hiding the bottom border (on PageHeader for example)",name:"hideBorder",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Tabs/TabsBar.tsx#TabsBar"]={docgenInfo:TabsBar.__docgenInfo,name:"TabsBar",path:"src/components/Tabs/TabsBar.tsx#TabsBar"})}catch(__react_docgen_typescript_loader_error){}},"./src/utils/storybook/DashboardStoryCanvas.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{s:function(){return DashboardStoryCanvas}});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),_emotion_css__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@emotion/css/dist/emotion-css.esm.js"),_themes__WEBPACK_IMPORTED_MODULE_3__=(__webpack_require__("../../node_modules/react/index.js"),__webpack_require__("./src/themes/ThemeContext.tsx")),DashboardStoryCanvas=function(param){var children=param.children,theme=(0,_themes__WEBPACK_IMPORTED_MODULE_3__.$j)(),style=(0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.AH)({width:"100%",height:"100%",padding:"32px",background:theme.colors.background.canvas,overflow:"auto"});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:style,children:children})};DashboardStoryCanvas.displayName="DashboardStoryCanvas";try{DashboardStoryCanvas.displayName="DashboardStoryCanvas",DashboardStoryCanvas.__docgenInfo={description:"",displayName:"DashboardStoryCanvas",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/utils/storybook/DashboardStoryCanvas.tsx#DashboardStoryCanvas"]={docgenInfo:DashboardStoryCanvas.__docgenInfo,name:"DashboardStoryCanvas",path:"src/utils/storybook/DashboardStoryCanvas.tsx#DashboardStoryCanvas"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Tabs/Tabs.story.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Counter:function(){return Tabs_story_Counter},Simple:function(){return Simple},default:function(){return Tabs_story}});var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),react=__webpack_require__("../../node_modules/react/index.js"),TabsBar=__webpack_require__("./src/components/Tabs/TabsBar.tsx"),Tab=__webpack_require__("./src/components/Tabs/Tab.tsx"),TabContent=__webpack_require__("./src/components/Tabs/TabContent.tsx"),Counter=__webpack_require__("./src/components/Tabs/Counter.tsx"),DashboardStoryCanvas=__webpack_require__("./src/utils/storybook/DashboardStoryCanvas.tsx"),lib=__webpack_require__("../../node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("../../node_modules/@storybook/blocks/dist/index.mjs");function _createMdxContent(props){const _components={code:"code",h1:"h1",p:"p",strong:"strong",...(0,lib.R)(),...props.components};return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(_components.h1,{id:"tabsbar",children:"TabsBar"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"A composition component for rendering a TabBar with Tabs for navigation."}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["It has two modes - navigation and onClick. Navigation renders it as a simple ",(0,jsx_runtime.jsx)(_components.code,{children:"<a>"})," element. To enable it, use the ",(0,jsx_runtime.jsx)(_components.code,{children:"href"})," prop. The onClick mode uses an onClick handler instead. To enable it, use the ",(0,jsx_runtime.jsx)(_components.code,{children:"onChangeTab"})," prop."]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Warning!"})," Using ",(0,jsx_runtime.jsx)(_components.code,{children:"href"})," and ",(0,jsx_runtime.jsx)(_components.code,{children:"onChangeTab"})," at the same time may have unintended consequences."]}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"tab",children:"Tab"}),"\n",(0,jsx_runtime.jsx)(dist.ov,{of:Tab.o}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"counter",children:"Counter"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"A count indicator displayed alongside tabs and showing numeric values."}),"\n",(0,jsx_runtime.jsx)(dist.ov,{of:Counter.p})]})}function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){_define_property(target,key,source[key])}))}return target}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})),target}function _sliced_to_array(arr,i){return function _array_with_holes(arr){if(Array.isArray(arr))return arr}(arr)||function _iterable_to_array_limit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}(arr,i)||function _unsupported_iterable_to_array(o,minLen){if(!o)return;if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}(arr,i)||function _non_iterable_rest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var meta={title:"Layout/Tabs",parameters:{docs:{page:function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,lib.R)(),...props.components};return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}}}},tabs=[{label:"1st child",key:"first",active:!0},{label:"2nd child",key:"second",active:!1},{label:"3rd child",key:"third",active:!1}],Simple=function(){var _useState=_sliced_to_array((0,react.useState)(tabs),2),state=_useState[0],updateState=_useState[1];return(0,jsx_runtime.jsxs)(DashboardStoryCanvas.s,{children:[(0,jsx_runtime.jsx)(TabsBar.U,{children:state.map((function(tab,index){return(0,jsx_runtime.jsx)(Tab.o,{label:tab.label,active:tab.active,onChangeTab:function(){return updateState(state.map((function(tab,idx){return _object_spread_props(_object_spread({},tab),{active:idx===index})})))},counter:1e3*(index+1)},index)}))}),(0,jsx_runtime.jsxs)(TabContent.J,{children:[state[0].active&&(0,jsx_runtime.jsx)("div",{children:"First tab content"}),state[1].active&&(0,jsx_runtime.jsx)("div",{children:"Second tab content"}),state[2].active&&(0,jsx_runtime.jsx)("div",{children:"Third tab content"})]})]})},Tabs_story_Counter=function(args){return(0,jsx_runtime.jsx)(Counter.p,_object_spread({},args))};Tabs_story_Counter.args={value:10};var Tabs_story=meta;Simple.parameters={...Simple.parameters,docs:{...Simple.parameters?.docs,source:{originalSource:"() => {\n  const [state, updateState] = useState(tabs);\n  return <DashboardStoryCanvas>\n      <TabsBar>\n        {state.map((tab, index) => {\n        return <Tab key={index} label={tab.label} active={tab.active} onChangeTab={() => updateState(state.map((tab, idx) => ({\n          ...tab,\n          active: idx === index\n        })))} counter={(index + 1) * 1000} />;\n      })}\n      </TabsBar>\n      <TabContent>\n        {state[0].active && <div>First tab content</div>}\n        {state[1].active && <div>Second tab content</div>}\n        {state[2].active && <div>Third tab content</div>}\n      </TabContent>\n    </DashboardStoryCanvas>;\n}",...Simple.parameters?.docs?.source}}},Tabs_story_Counter.parameters={...Tabs_story_Counter.parameters,docs:{...Tabs_story_Counter.parameters?.docs,source:{originalSource:"args => {\n  return <TabCounter {...args} />;\n}",...Tabs_story_Counter.parameters?.docs?.source}}}}}]);