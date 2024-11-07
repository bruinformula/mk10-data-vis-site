"use strict";(self.webpackChunk_grafana_ui=self.webpackChunk_grafana_ui||[]).push([[6630],{"../grafana-data/src/types/dataFrame.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var FieldType;__webpack_require__.d(__webpack_exports__,{Bc:function(){return TIME_SERIES_VALUE_FIELD_NAME},LE:function(){return TIME_SERIES_TIME_FIELD_NAME},PU:function(){return FieldType}}),function(FieldType){FieldType.time="time",FieldType.number="number",FieldType.string="string",FieldType.boolean="boolean",FieldType.trace="trace",FieldType.geo="geo",FieldType.enum="enum",FieldType.other="other",FieldType.frame="frame",FieldType.nestedFrames="nestedFrames"}(FieldType||(FieldType={}));var TIME_SERIES_VALUE_FIELD_NAME="Value",TIME_SERIES_TIME_FIELD_NAME="Time"},"./src/components/Layout/Stack/Stack.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{B:function(){return Stack}});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),_emotion_css__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@emotion/css/dist/emotion-css.esm.js"),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/react/index.js"),_themes__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/themes/ThemeContext.tsx"),_utils_responsiveness__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/components/Layout/utils/responsiveness.tsx"),_utils_styles__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/Layout/utils/styles.ts");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var Stack=react__WEBPACK_IMPORTED_MODULE_2__.forwardRef((function(props,ref){var _props_gap=props.gap,gap=void 0===_props_gap?1:_props_gap,alignItems=props.alignItems,justifyContent=props.justifyContent,direction=props.direction,wrap=props.wrap,children=props.children,grow=props.grow,shrink=props.shrink,basis=props.basis,flex=props.flex,width=props.width,minWidth=props.minWidth,maxWidth=props.maxWidth,height=props.height,minHeight=props.minHeight,maxHeight=props.maxHeight,rest=_object_without_properties(props,["gap","alignItems","justifyContent","direction","wrap","children","grow","shrink","basis","flex","width","minWidth","maxWidth","height","minHeight","maxHeight"]),styles=(0,_themes__WEBPACK_IMPORTED_MODULE_3__.of)(getStyles,gap,alignItems,justifyContent,direction,wrap,grow,shrink,basis,flex),sizeStyles=(0,_themes__WEBPACK_IMPORTED_MODULE_3__.of)(_utils_styles__WEBPACK_IMPORTED_MODULE_4__.E,width,minWidth,maxWidth,height,minHeight,maxHeight);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",_object_spread_props(function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){_define_property(target,key,source[key])}))}return target}({ref:ref,className:(0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.cx)(styles.flex,sizeStyles)},rest),{children:children}))}));Stack.displayName="Stack";var getStyles=function(theme,gap,alignItems,justifyContent,direction,wrap,grow,shrink,basis,flex){return{flex:(0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.AH)([{display:"flex"},(0,_utils_responsiveness__WEBPACK_IMPORTED_MODULE_5__.Y)(theme,direction,(function(val){return{flexDirection:val}})),(0,_utils_responsiveness__WEBPACK_IMPORTED_MODULE_5__.Y)(theme,wrap,(function(val){return{flexWrap:"boolean"==typeof val?val?"wrap":"nowrap":val}})),(0,_utils_responsiveness__WEBPACK_IMPORTED_MODULE_5__.Y)(theme,alignItems,(function(val){return{alignItems:val}})),(0,_utils_responsiveness__WEBPACK_IMPORTED_MODULE_5__.Y)(theme,justifyContent,(function(val){return{justifyContent:val}})),(0,_utils_responsiveness__WEBPACK_IMPORTED_MODULE_5__.Y)(theme,gap,(function(val){return{gap:theme.spacing(val)}})),(0,_utils_responsiveness__WEBPACK_IMPORTED_MODULE_5__.Y)(theme,grow,(function(val){return{flexGrow:val}})),(0,_utils_responsiveness__WEBPACK_IMPORTED_MODULE_5__.Y)(theme,shrink,(function(val){return{flexShrink:val}})),(0,_utils_responsiveness__WEBPACK_IMPORTED_MODULE_5__.Y)(theme,basis,(function(val){return{flexBasis:val}})),(0,_utils_responsiveness__WEBPACK_IMPORTED_MODULE_5__.Y)(theme,flex,(function(val){return{flex:val}}))])}};try{Stack.displayName="Stack",Stack.__docgenInfo={description:"",displayName:"Stack",props:{gap:{defaultValue:null,description:"",name:"gap",required:!1,type:{name:"ResponsiveProp<ThemeSpacingTokens>"}},alignItems:{defaultValue:null,description:"",name:"alignItems",required:!1,type:{name:"ResponsiveProp<AlignItems>"}},justifyContent:{defaultValue:null,description:"",name:"justifyContent",required:!1,type:{name:"ResponsiveProp<JustifyContent>"}},direction:{defaultValue:null,description:"",name:"direction",required:!1,type:{name:"ResponsiveProp<Direction>"}},wrap:{defaultValue:null,description:"",name:"wrap",required:!1,type:{name:"ResponsiveProp<Wrap>"}},grow:{defaultValue:null,description:"Sets the property `flex-grow`",name:"grow",required:!1,type:{name:"ResponsiveProp<number>"}},shrink:{defaultValue:null,description:"Sets the property `flex-shrink`",name:"shrink",required:!1,type:{name:"ResponsiveProp<number>"}},basis:{defaultValue:null,description:"Sets the property `flex-basis`",name:"basis",required:!1,type:{name:"ResponsiveProp<FlexBasis>"}},flex:{defaultValue:null,description:"Sets the property `flex`",name:"flex",required:!1,type:{name:"ResponsiveProp<Flex>"}},minWidth:{defaultValue:null,description:"",name:"minWidth",required:!1,type:{name:"ResponsiveProp<MinWidth<number>>"}},maxWidth:{defaultValue:null,description:"",name:"maxWidth",required:!1,type:{name:"ResponsiveProp<MaxWidth<number>>"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"ResponsiveProp<Width<number>>"}},minHeight:{defaultValue:null,description:"",name:"minHeight",required:!1,type:{name:"ResponsiveProp<MinHeight<number>>"}},maxHeight:{defaultValue:null,description:"",name:"maxHeight",required:!1,type:{name:"ResponsiveProp<MaxHeight<number>>"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"ResponsiveProp<Height<number>>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Layout/Stack/Stack.tsx#Stack"]={docgenInfo:Stack.__docgenInfo,name:"Stack",path:"src/components/Layout/Stack/Stack.tsx#Stack"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Layout/utils/responsiveness.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){function breakpointCSS(theme,prop,getCSS,key){var value=prop[key];if(null!=value)return function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}({},theme.breakpoints.up(key),getCSS(value))}function getResponsiveStyle(theme,prop,getCSS){return null==prop?null:"object"==typeof prop&&"xs"in prop?[breakpointCSS(theme,prop,getCSS,"xs"),breakpointCSS(theme,prop,getCSS,"sm"),breakpointCSS(theme,prop,getCSS,"md"),breakpointCSS(theme,prop,getCSS,"lg"),breakpointCSS(theme,prop,getCSS,"xl"),breakpointCSS(theme,prop,getCSS,"xxl")]:getCSS(prop)}__webpack_require__.d(__webpack_exports__,{Y:function(){return getResponsiveStyle}});try{getResponsiveStyle.displayName="getResponsiveStyle",getResponsiveStyle.__docgenInfo={description:"Function that converts a ResponsiveProp object into CSS",displayName:"getResponsiveStyle",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Layout/utils/responsiveness.tsx#getResponsiveStyle"]={docgenInfo:getResponsiveStyle.__docgenInfo,name:"getResponsiveStyle",path:"src/components/Layout/utils/responsiveness.tsx#getResponsiveStyle"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Layout/utils/styles.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{E:function(){return getSizeStyles}});var _emotion_css__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/@emotion/css/dist/emotion-css.esm.js"),_responsiveness__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Layout/utils/responsiveness.tsx"),getSizeStyles=function(theme,width,minWidth,maxWidth,height,minHeight,maxHeight){return(0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.AH)([(0,_responsiveness__WEBPACK_IMPORTED_MODULE_1__.Y)(theme,width,(function(val){return{width:theme.spacing(val)}})),(0,_responsiveness__WEBPACK_IMPORTED_MODULE_1__.Y)(theme,minWidth,(function(val){return{minWidth:theme.spacing(val)}})),(0,_responsiveness__WEBPACK_IMPORTED_MODULE_1__.Y)(theme,maxWidth,(function(val){return{maxWidth:theme.spacing(val)}})),(0,_responsiveness__WEBPACK_IMPORTED_MODULE_1__.Y)(theme,height,(function(val){return{height:theme.spacing(val)}})),(0,_responsiveness__WEBPACK_IMPORTED_MODULE_1__.Y)(theme,minHeight,(function(val){return{minHeight:theme.spacing(val)}})),(0,_responsiveness__WEBPACK_IMPORTED_MODULE_1__.Y)(theme,maxHeight,(function(val){return{maxHeight:theme.spacing(val)}}))])}},"./src/types/icon.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{GO:function(){return getAvailableIcons},SS:function(){return getFieldTypeIcon},rJ:function(){return isIconSize}});var _grafana_data__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../grafana-data/src/types/icon.ts"),_grafana_data__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../grafana-data/src/types/dataFrame.ts"),isIconSize=function(value){return["xs","sm","md","lg","xl","xxl","xxxl"].includes(value)},getAvailableIcons=function(){return Object.keys(_grafana_data__WEBPACK_IMPORTED_MODULE_0__.az)};function getFieldTypeIcon(field){return function getFieldTypeIconName(type){if(type)switch(type){case _grafana_data__WEBPACK_IMPORTED_MODULE_1__.PU.time:return"clock-nine";case _grafana_data__WEBPACK_IMPORTED_MODULE_1__.PU.string:return"font";case _grafana_data__WEBPACK_IMPORTED_MODULE_1__.PU.number:return"calculator-alt";case _grafana_data__WEBPACK_IMPORTED_MODULE_1__.PU.boolean:return"toggle-on";case _grafana_data__WEBPACK_IMPORTED_MODULE_1__.PU.trace:return"info-circle";case _grafana_data__WEBPACK_IMPORTED_MODULE_1__.PU.enum:return"list-ol";case _grafana_data__WEBPACK_IMPORTED_MODULE_1__.PU.geo:return"map-marker";case _grafana_data__WEBPACK_IMPORTED_MODULE_1__.PU.other:return"brackets-curly"}return"question-circle"}(null==field?void 0:field.type)}},"./src/components/FilterPill/FilterPill.story.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:function(){return Basic},Example:function(){return Example},default:function(){return FilterPill_story}});var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),react=__webpack_require__("../../node_modules/react/index.js"),icon=__webpack_require__("./src/types/icon.ts"),Stack=__webpack_require__("./src/components/Layout/Stack/Stack.tsx"),emotion_css_esm=__webpack_require__("../../node_modules/@emotion/css/dist/emotion-css.esm.js"),ThemeContext=__webpack_require__("./src/themes/ThemeContext.tsx"),Button=__webpack_require__("./src/components/Button/Button.tsx"),Icon=__webpack_require__("./src/components/Icon/Icon.tsx"),FilterPill=function(param){var label=param.label,selected=param.selected,onClick=param.onClick,_param_icon=param.icon,icon=void 0===_param_icon?"check":_param_icon,styles=(0,ThemeContext.of)(getStyles),clearButton=(0,ThemeContext.of)(Button.my);return(0,jsx_runtime.jsxs)("button",{type:"button",className:(0,emotion_css_esm.cx)(clearButton,styles.wrapper,selected&&styles.selected),onClick:onClick,children:[(0,jsx_runtime.jsx)("span",{children:label}),selected&&(0,jsx_runtime.jsx)(Icon.I,{name:icon,className:styles.icon})]})},getStyles=function(theme){return{wrapper:(0,emotion_css_esm.AH)({background:theme.colors.background.secondary,borderRadius:theme.shape.radius.pill,padding:theme.spacing(0,2),fontSize:theme.typography.bodySmall.fontSize,fontWeight:theme.typography.fontWeightMedium,lineHeight:theme.typography.bodySmall.lineHeight,color:theme.colors.text.secondary,display:"flex",alignItems:"center",height:"32px",position:"relative",border:"1px solid ".concat(theme.colors.background.secondary),whiteSpace:"nowrap","&:hover":{background:theme.colors.action.hover,color:theme.colors.text.primary}}),selected:(0,emotion_css_esm.AH)({color:theme.colors.text.primary,background:theme.colors.action.selected,"&:hover":{background:theme.colors.action.focus}}),icon:(0,emotion_css_esm.AH)({marginLeft:theme.spacing(.5)})}};try{FilterPill.displayName="FilterPill",FilterPill.__docgenInfo={description:"",displayName:"FilterPill",props:{selected:{defaultValue:null,description:"",name:"selected",required:!0,type:{name:"boolean"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"MouseEventHandler<HTMLElement>"}},icon:{defaultValue:{value:"check"},description:"",name:"icon",required:!1,type:{name:"enum",value:[{value:'"play"'},{value:'"google"'},{value:'"microsoft"'},{value:'"github"'},{value:'"gitlab"'},{value:'"okta"'},{value:'"discord"'},{value:'"hipchat"'},{value:'"amazon"'},{value:'"google-hangouts-alt"'},{value:'"pagerduty"'},{value:'"line"'},{value:'"anchor"'},{value:'"adjust-circle"'},{value:'"angle-double-down"'},{value:'"angle-double-right"'},{value:'"angle-double-left"'},{value:'"angle-double-up"'},{value:'"angle-down"'},{value:'"angle-left"'},{value:'"angle-right"'},{value:'"angle-up"'},{value:'"align-left"'},{value:'"align-right"'},{value:'"application-observability"'},{value:'"apps"'},{value:'"archive-alt"'},{value:'"arrow"'},{value:'"arrow-down"'},{value:'"arrow-from-right"'},{value:'"arrow-left"'},{value:'"arrow-random"'},{value:'"arrow-right"'},{value:'"arrow-to-right"'},{value:'"arrow-up"'},{value:'"arrows-h"'},{value:'"arrows-v"'},{value:'"asserts"'},{value:'"expand-arrows"'},{value:'"expand-arrows-alt"'},{value:'"at"'},{value:'"ai"'},{value:'"backward"'},{value:'"bars"'},{value:'"bell"'},{value:'"bell-slash"'},{value:'"bolt"'},{value:'"book"'},{value:'"bookmark"'},{value:'"book-open"'},{value:'"brackets-curly"'},{value:'"bug"'},{value:'"building"'},{value:'"calculator-alt"'},{value:'"calendar-alt"'},{value:'"calendar-slash"'},{value:'"camera"'},{value:'"capture"'},{value:'"channel-add"'},{value:'"chart-line"'},{value:'"check"'},{value:'"check-circle"'},{value:'"check-square"'},{value:'"circle"'},{value:'"circle-mono"'},{value:'"clipboard-alt"'},{value:'"clock-nine"'},{value:'"cloud"'},{value:'"cloud-download"'},{value:'"cloud-upload"'},{value:'"code-branch"'},{value:'"cog"'},{value:'"columns"'},{value:'"comment-alt"'},{value:'"comment-alt-message"'},{value:'"comment-alt-share"'},{value:'"comments-alt"'},{value:'"compass"'},{value:'"compress-arrows"'},{value:'"copy"'},{value:'"corner-down-right-alt"'},{value:'"create-dashboard"'},{value:'"credit-card"'},{value:'"crosshair"'},{value:'"cube"'},{value:'"dashboard"'},{value:'"database"'},{value:'"dice-three"'},{value:'"docker"'},{value:'"document-info"'},{value:'"document-layout-left"'},{value:'"download-alt"'},{value:'"draggabledots"'},{value:'"edit"'},{value:'"ellipsis-v"'},{value:'"enter"'},{value:'"envelope"'},{value:'"exchange-alt"'},{value:'"exclamation-triangle"'},{value:'"exclamation-circle"'},{value:'"exclamation"'},{value:'"external-link-alt"'},{value:'"eye"'},{value:'"eye-slash"'},{value:'"ellipsis-h"'},{value:'"fa fa-spinner"'},{value:'"favorite"'},{value:'"file-alt"'},{value:'"file-blank"'},{value:'"file-copy-alt"'},{value:'"file-download"'},{value:'"file-edit-alt"'},{value:'"file-landscape-alt"'},{value:'"filter"'},{value:'"flip"'},{value:'"folder"'},{value:'"font"'},{value:'"fire"'},{value:'"folder-open"'},{value:'"folder-plus"'},{value:'"folder-upload"'},{value:'"forward"'},{value:'"frontend-observability"'},{value:'"gf-bar-alignment-after"'},{value:'"gf-bar-alignment-before"'},{value:'"gf-bar-alignment-center"'},{value:'"gf-glue"'},{value:'"gf-grid"'},{value:'"gf-interpolation-linear"'},{value:'"gf-interpolation-smooth"'},{value:'"gf-interpolation-step-after"'},{value:'"gf-interpolation-step-before"'},{value:'"gf-landscape"'},{value:'"gf-layout-simple"'},{value:'"gf-logs"'},{value:'"gf-ml"'},{value:'"gf-movepane-left"'},{value:'"gf-movepane-right"'},{value:'"gf-portrait"'},{value:'"gf-service-account"'},{value:'"gf-show-context"'},{value:'"gf-pin"'},{value:'"gf-prometheus"'},{value:'"gf-traces"'},{value:'"globe"'},{value:'"grafana"'},{value:'"graph-bar"'},{value:'"heart"'},{value:'"heart-rate"'},{value:'"heart-break"'},{value:'"history"'},{value:'"history-alt"'},{value:'"home"'},{value:'"home-alt"'},{value:'"horizontal-align-center"'},{value:'"horizontal-align-left"'},{value:'"horizontal-align-right"'},{value:'"hourglass"'},{value:'"import"'},{value:'"info"'},{value:'"info-circle"'},{value:'"k6"'},{value:'"key-skeleton-alt"'},{value:'"keyboard"'},{value:'"kubernetes"'},{value:'"layer-group"'},{value:'"layers-alt"'},{value:'"legend-hide"'},{value:'"legend-show"'},{value:'"library-panel"'},{value:'"line-alt"'},{value:'"link"'},{value:'"link-broken"'},{value:'"list-ui-alt"'},{value:'"list-ul"'},{value:'"list-ol"'},{value:'"lock"'},{value:'"map-marker"'},{value:'"map-marker-plus"'},{value:'"map-marker-minus"'},{value:'"message"'},{value:'"minus"'},{value:'"minus-circle"'},{value:'"mobile-android"'},{value:'"monitor"'},{value:'"palette"'},{value:'"panel-add"'},{value:'"paragraph"'},{value:'"pathfinder-unite"'},{value:'"pause"'},{value:'"pause-circle"'},{value:'"pen"'},{value:'"percentage"'},{value:'"plug"'},{value:'"plus"'},{value:'"plus-circle"'},{value:'"plus-square"'},{value:'"power"'},{value:'"presentation-play"'},{value:'"process"'},{value:'"question-circle"'},{value:'"record-audio"'},{value:'"repeat"'},{value:'"rocket"'},{value:'"ruler-combined"'},{value:'"save"'},{value:'"search"'},{value:'"search-minus"'},{value:'"search-plus"'},{value:'"share-alt"'},{value:'"shield"'},{value:'"shield-exclamation"'},{value:'"signal"'},{value:'"signin"'},{value:'"signout"'},{value:'"sitemap"'},{value:'"slack"'},{value:'"sliders-v-alt"'},{value:'"spinner"'},{value:'"sort-amount-down"'},{value:'"sort-amount-up"'},{value:'"square-shape"'},{value:'"star"'},{value:'"step-backward"'},{value:'"stopwatch"'},{value:'"stopwatch-slash"'},{value:'"sync"'},{value:'"sync-slash"'},{value:'"table"'},{value:'"table-collapse-all"'},{value:'"table-expand-all"'},{value:'"tag-alt"'},{value:'"telegram-alt"'},{value:'"text-fields"'},{value:'"thumbs-up"'},{value:'"times"'},{value:'"times-circle"'},{value:'"toggle-on"'},{value:'"toggle-off"'},{value:'"trash-alt"'},{value:'"unarchive"'},{value:'"unlock"'},{value:'"upload"'},{value:'"user"'},{value:'"users-alt"'},{value:'"user-arrows"'},{value:'"vertical-align-bottom"'},{value:'"vertical-align-center"'},{value:'"vertical-align-top"'},{value:'"web-section-alt"'},{value:'"wrap-text"'},{value:'"rss"'},{value:'"x"'},{value:'"add-user"'},{value:'"attach"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/FilterPill/FilterPill.tsx#FilterPill"]={docgenInfo:FilterPill.__docgenInfo,name:"FilterPill",path:"src/components/FilterPill/FilterPill.tsx#FilterPill"})}catch(__react_docgen_typescript_loader_error){}var lib=__webpack_require__("../../node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("../../node_modules/@storybook/blocks/dist/index.mjs");function _createMdxContent(props){const _components={code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",...(0,lib.R)(),...props.components};return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(_components.h1,{id:"filterpill",children:"FilterPill"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"A component used for quick toggling on/off filters. Mostly used in inline form components and transformation/query editors."}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"usage",children:"Usage"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:"import { FilterPill } from '@grafana/ui';\n\n<FilterPill label={'Test'} onClick={() => console.log('toggle')} />;\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"props",children:"Props"}),"\n",(0,jsx_runtime.jsx)(dist.ov,{of:FilterPill})]})}function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _sliced_to_array(arr,i){return function _array_with_holes(arr){if(Array.isArray(arr))return arr}(arr)||function _iterable_to_array_limit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}(arr,i)||function _unsupported_iterable_to_array(o,minLen){if(!o)return;if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}(arr,i)||function _non_iterable_rest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var meta={title:"General/FilterPill",component:FilterPill,argTypes:{icon:{control:{type:"select",options:(0,icon.GO)()}},onClick:{action:"Pill Clicked"}},parameters:{docs:{page:function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,lib.R)(),...props.components};return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}}}},Basic=function(args){return(0,jsx_runtime.jsx)(FilterPill,function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){_define_property(target,key,source[key])}))}return target}({},args))},Example=function(){var _useState=_sliced_to_array((0,react.useState)("Stockholm"),2),selected=_useState[0],setSelected=_useState[1];return(0,jsx_runtime.jsx)(Stack.B,{children:["Singapore","Paris","Stockholm","New York","London"].map((function(item){return(0,jsx_runtime.jsx)(FilterPill,{label:item,selected:item===selected,onClick:function(){return setSelected(item)}},item)}))})};Basic.args={selected:!1,label:"Test",icon:void 0};var FilterPill_story=meta;Basic.parameters={...Basic.parameters,docs:{...Basic.parameters?.docs,source:{originalSource:"args => {\n  return <FilterPill {...args} />;\n}",...Basic.parameters?.docs?.source}}},Example.parameters={...Example.parameters,docs:{...Example.parameters?.docs,source:{originalSource:"() => {\n  const [selected, setSelected] = useState('Stockholm');\n  const elements = ['Singapore', 'Paris', 'Stockholm', 'New York', 'London'];\n  return <Stack>\n      {elements.map(item => <FilterPill key={item} label={item} selected={item === selected} onClick={() => setSelected(item)} />)}\n    </Stack>;\n}",...Example.parameters?.docs?.source}}}}}]);