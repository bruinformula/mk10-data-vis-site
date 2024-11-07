"use strict";(self.webpackChunk_grafana_ui=self.webpackChunk_grafana_ui||[]).push([[286],{"./src/components/Forms/Legend.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{s:function(){return Legend}});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),_emotion_css__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@emotion/css/dist/emotion-css.esm.js"),_themes__WEBPACK_IMPORTED_MODULE_3__=(__webpack_require__("../../node_modules/react/index.js"),__webpack_require__("./src/themes/ThemeContext.tsx"));function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var getLegendStyles=function(theme){return{legend:(0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.AH)({fontSize:theme.typography.h3.fontSize,fontWeight:theme.typography.fontWeightRegular,margin:theme.spacing(0,0,2,0)})}},Legend=function(_param){var children=_param.children,className=_param.className,legendProps=_object_without_properties(_param,["children","className"]),styles=(0,_themes__WEBPACK_IMPORTED_MODULE_3__.of)(getLegendStyles);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("legend",_object_spread_props(function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){_define_property(target,key,source[key])}))}return target}({className:(0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.cx)(styles.legend,className)},legendProps),{children:children}))};try{getLegendStyles.displayName="getLegendStyles",getLegendStyles.__docgenInfo={description:"",displayName:"getLegendStyles",props:{name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},isDark:{defaultValue:null,description:"",name:"isDark",required:!0,type:{name:"boolean"}},isLight:{defaultValue:null,description:"",name:"isLight",required:!0,type:{name:"boolean"}},colors:{defaultValue:null,description:"",name:"colors",required:!0,type:{name:"ThemeColors"}},breakpoints:{defaultValue:null,description:"",name:"breakpoints",required:!0,type:{name:"ThemeBreakpoints"}},spacing:{defaultValue:null,description:"",name:"spacing",required:!0,type:{name:"ThemeSpacing"}},shape:{defaultValue:null,description:"",name:"shape",required:!0,type:{name:"ThemeShape"}},components:{defaultValue:null,description:"",name:"components",required:!0,type:{name:"ThemeComponents"}},typography:{defaultValue:null,description:"",name:"typography",required:!0,type:{name:"ThemeTypography"}},zIndex:{defaultValue:null,description:"",name:"zIndex",required:!0,type:{name:"{ activePanel: number; navbarFixed: number; sidemenu: number; dropdown: number; typeahead: number; tooltip: number; modalBackdrop: number; modal: number; portal: number; }"}},shadows:{defaultValue:null,description:"",name:"shadows",required:!0,type:{name:"ThemeShadows"}},visualization:{defaultValue:null,description:"",name:"visualization",required:!0,type:{name:"ThemeVisualizationColors"}},transitions:{defaultValue:null,description:"",name:"transitions",required:!0,type:{name:"ThemeTransitions"}},v1:{defaultValue:null,description:"@deprecated Will be removed in a future version",name:"v1",required:!0,type:{name:"GrafanaTheme"}},flags:{defaultValue:null,description:"feature flags that might impact component looks",name:"flags",required:!0,type:{name:"{}"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Forms/Legend.tsx#getLegendStyles"]={docgenInfo:getLegendStyles.__docgenInfo,name:"getLegendStyles",path:"src/components/Forms/Legend.tsx#getLegendStyles"})}catch(__react_docgen_typescript_loader_error){}try{Legend.displayName="Legend",Legend.__docgenInfo={description:"",displayName:"Legend",props:{description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Forms/Legend.tsx#Legend"]={docgenInfo:Legend.__docgenInfo,name:"Legend",path:"src/components/Forms/Legend.tsx#Legend"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Forms/Legend.story.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:function(){return Basic},default:function(){return Legend_story}});var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),Legend=__webpack_require__("./src/components/Forms/Legend.tsx"),lib=(__webpack_require__("../../node_modules/react/index.js"),__webpack_require__("../../node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js")),dist=__webpack_require__("../../node_modules/@storybook/blocks/dist/index.mjs");function _createMdxContent(props){const _components={code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",...(0,lib.R)(),...props.components};return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.W8,{title:"MDX|Legend",component:Legend.s}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"legend",children:"Legend"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"when-to-use",children:"When to use"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Legend should be used to add a caption to a group of related form elements that have been grouped toegheter into a ",(0,jsx_runtime.jsx)(_components.code,{children:"FieldSet"}),"."]}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"usage",children:"Usage"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:"import { Forms } from '@grafana/ui';\n\n<Legend>{label}</Legend>;\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"props",children:"Props"}),"\n",(0,jsx_runtime.jsx)(dist.ov,{of:Legend.s})]})}var meta={title:"Forms/Legend",component:Legend.s,parameters:{docs:{page:function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,lib.R)(),...props.components};return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}},controls:{exclude:["description"]}},argTypes:{children:{name:"Label"}}},Basic=function(args){return(0,jsx_runtime.jsx)(Legend.s,{children:args.children})};Basic.args={children:"Form section"};var Legend_story=meta;Basic.parameters={...Basic.parameters,docs:{...Basic.parameters?.docs,source:{originalSource:"args => {\n  return <Legend>{args.children}</Legend>;\n}",...Basic.parameters?.docs?.source}}}}}]);