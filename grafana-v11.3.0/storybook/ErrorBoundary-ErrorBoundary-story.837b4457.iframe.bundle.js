"use strict";(self.webpackChunk_grafana_ui=self.webpackChunk_grafana_ui||[]).push([[1422],{"./src/components/ErrorBoundary/ErrorWithStack.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{D:function(){return ErrorWithStack}});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),_emotion_css__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@emotion/css/dist/emotion-css.esm.js"),_themes__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/themes/ThemeContext.tsx"),ErrorWithStack=function(param){var error=param.error,errorInfo=param.errorInfo,title=param.title,style=(0,_themes__WEBPACK_IMPORTED_MODULE_2__.of)(getStyles);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:style,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h2",{children:title}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("details",{style:{whiteSpace:"pre-wrap"},children:[error&&error.toString(),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br",{}),errorInfo&&errorInfo.componentStack]})]})};ErrorWithStack.displayName="ErrorWithStack";var getStyles=function(){return(0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.AH)({width:"500px",margin:"64px auto"})};try{ErrorWithStack.displayName="ErrorWithStack",ErrorWithStack.__docgenInfo={description:"",displayName:"ErrorWithStack",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},error:{defaultValue:null,description:"",name:"error",required:!0,type:{name:"Error | null"}},errorInfo:{defaultValue:null,description:"",name:"errorInfo",required:!0,type:{name:"ErrorInfo | null"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ErrorBoundary/ErrorWithStack.tsx#ErrorWithStack"]={docgenInfo:ErrorWithStack.__docgenInfo,name:"ErrorWithStack",path:"src/components/ErrorBoundary/ErrorWithStack.tsx#ErrorWithStack"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Text/Text.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{E:function(){return Text}});var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),emotion_css_esm=__webpack_require__("../../node_modules/@emotion/css/dist/emotion-css.esm.js"),react=__webpack_require__("../../node_modules/react/index.js"),ThemeContext=__webpack_require__("./src/themes/ThemeContext.tsx"),server_browser=__webpack_require__("../../node_modules/react-dom/server.browser.js"),Tooltip=__webpack_require__("./src/components/Tooltip/Tooltip.tsx");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _sliced_to_array(arr,i){return function _array_with_holes(arr){if(Array.isArray(arr))return arr}(arr)||function _iterable_to_array_limit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}(arr,i)||function _unsupported_iterable_to_array(o,minLen){if(!o)return;if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}(arr,i)||function _non_iterable_rest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var TruncatedText=react.forwardRef((function(param,ref){var childElement=param.childElement,children=param.children,_useState=_sliced_to_array((0,react.useState)(!1),2),isOverflowing=_useState[0],setIsOverflowing=_useState[1],internalRef=(0,react.useRef)(null);(0,react.useImperativeHandle)(ref,(function(){return internalRef.current}));var resizeObserver=(0,react.useMemo)((function(){return new ResizeObserver((function(entries){var _iteratorNormalCompletion=!0,_didIteratorError=!1,_iteratorError=void 0;try{for(var _step,_iterator=entries[Symbol.iterator]();!(_iteratorNormalCompletion=(_step=_iterator.next()).done);_iteratorNormalCompletion=!0){var entry=_step.value;entry.target.clientWidth&&entry.target.scrollWidth&&(entry.target.scrollWidth>entry.target.clientWidth&&setIsOverflowing(!0),entry.target.scrollWidth<=entry.target.clientWidth&&setIsOverflowing(!1))}}catch(err){_didIteratorError=!0,_iteratorError=err}finally{try{_iteratorNormalCompletion||null==_iterator.return||_iterator.return()}finally{if(_didIteratorError)throw _iteratorError}}}))}),[]);(0,react.useEffect)((function(){var current=internalRef.current;return current&&resizeObserver.observe(current),function(){resizeObserver.disconnect()}}),[setIsOverflowing,resizeObserver]);return isOverflowing?(0,jsx_runtime.jsx)(Tooltip.m,{ref:internalRef,content:function(children){return"string"==typeof children?children:server_browser.renderToStaticMarkup((0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:children})).replace(/(<([^>]+)>)/gi,"")}(children),children:childElement(void 0)}):childElement(internalRef)}));TruncatedText.displayName="TruncatedText";try{TruncatedText.displayName="TruncatedText",TruncatedText.__docgenInfo={description:"",displayName:"TruncatedText",props:{childElement:{defaultValue:null,description:"",name:"childElement",required:!0,type:{name:"(ref: ForwardedRef<HTMLElement> | undefined) => ReactElement<any, string | JSXElementConstructor<any>>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Text/TruncatedText.tsx#TruncatedText"]={docgenInfo:TruncatedText.__docgenInfo,name:"TruncatedText",path:"src/components/Text/TruncatedText.tsx#TruncatedText"})}catch(__react_docgen_typescript_loader_error){}var utils=__webpack_require__("./src/components/Text/utils.ts");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){_define_property(target,key,source[key])}))}return target}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var Text=react.forwardRef((function(_param,ref){var _param_element=_param.element,element=void 0===_param_element?"span":_param_element,variant=_param.variant,weight=_param.weight,color=_param.color,truncate=_param.truncate,italic=_param.italic,textAlignment=_param.textAlignment,children=_param.children,tabular=_param.tabular,restProps=_object_without_properties(_param,["element","variant","weight","color","truncate","italic","textAlignment","children","tabular"]),styles=(0,ThemeContext.of)(getTextStyles,element,variant,color,weight,truncate,italic,textAlignment,tabular),childElement=function(ref){return(0,react.createElement)(element,_object_spread_props(_object_spread({},restProps),{style:void 0,className:styles,ref:ref}),children)};return truncate&&"span"!==element?(0,jsx_runtime.jsx)(TruncatedText,{childElement:childElement,children:children,ref:ref}):childElement(void 0)}));Text.displayName="Text";var getTextStyles=function(theme,element,variant,color,weight,truncate,italic,textAlignment,tabular){return(0,emotion_css_esm.AH)([_object_spread({margin:0,padding:0},(0,utils.d$)(theme,element,variant)),variant&&_object_spread({},theme.typography[variant]),color&&{color:(0,utils.vT)(color,theme)},weight&&{fontWeight:(0,utils.iV)(weight,theme)},truncate&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},italic&&{fontStyle:"italic"},textAlignment&&{textAlign:textAlignment},tabular&&{fontFeatureSettings:'"tnum"'}])};try{Text.displayName="Text",Text.__docgenInfo={description:"",displayName:"Text",props:{element:{defaultValue:{value:"span"},description:'Defines what HTML element is defined underneath. "span" by default',name:"element",required:!1,type:{name:"enum",value:[{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'},{value:'"p"'},{value:'"span"'}]}},variant:{defaultValue:null,description:"What typograpy variant should be used for the component. Only use if default variant for the defined element is not what is needed",name:"variant",required:!1,type:{name:"enum",value:[{value:'"body"'},{value:'"code"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'},{value:'"bodySmall"'}]}},weight:{defaultValue:null,description:"Override the default weight for the used variant",name:"weight",required:!1,type:{name:"enum",value:[{value:'"medium"'},{value:'"bold"'},{value:'"light"'},{value:'"regular"'}]}},color:{defaultValue:null,description:"Color to use for text",name:"color",required:!1,type:{name:"enum",value:[{value:'"info"'},{value:'"link"'},{value:'"primary"'},{value:'"secondary"'},{value:'"success"'},{value:'"error"'},{value:'"disabled"'},{value:'"warning"'},{value:'"maxContrast"'}]}},truncate:{defaultValue:null,description:"Use to cut the text off with ellipsis if there isn't space to show all of it. On hover shows the rest of the text",name:"truncate",required:!1,type:{name:"boolean"}},italic:{defaultValue:null,description:"If true, show the text as italic. False by default",name:"italic",required:!1,type:{name:"boolean"}},tabular:{defaultValue:null,description:"If true, numbers will have fixed width, useful for displaying tabular data. False by default",name:"tabular",required:!1,type:{name:"boolean"}},textAlignment:{defaultValue:null,description:"Whether to align the text to left, center or right",name:"textAlignment",required:!1,type:{name:"enum",value:[{value:'"right"'},{value:'"left"'},{value:'"start"'},{value:'"end"'},{value:'"center"'},{value:'"inherit"'},{value:'"justify"'},{value:'"initial"'},{value:'"-moz-initial"'},{value:'"revert"'},{value:'"revert-layer"'},{value:'"unset"'},{value:'"-webkit-match-parent"'},{value:'"match-parent"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Text/Text.tsx#Text"]={docgenInfo:Text.__docgenInfo,name:"Text",path:"src/components/Text/Text.tsx#Text"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Text/utils.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{d$:function(){return customVariant},iV:function(){return customWeight},vT:function(){return customColor}});var customWeight=function(weight,theme){switch(weight){case"bold":return theme.typography.fontWeightBold;case"medium":return theme.typography.fontWeightMedium;case"light":return theme.typography.fontWeightLight;case"regular":case void 0:return theme.typography.fontWeightRegular}},customColor=function(color,theme){switch(color){case"error":return theme.colors.error.text;case"success":return theme.colors.success.text;case"info":return theme.colors.info.text;case"warning":return theme.colors.warning.text;default:return color?theme.colors.text[color]:void 0}},customVariant=function(theme,element,variant){if(variant)return theme.typography[variant];switch(element){case"span":return;case"h1":return theme.typography.h1;case"h2":return theme.typography.h2;case"h3":return theme.typography.h3;case"h4":return theme.typography.h4;case"h5":return theme.typography.h5;case"h6":return theme.typography.h6;default:return theme.typography.body}}},"./src/components/ErrorBoundary/ErrorBoundary.story.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:function(){return Basic},BoundaryAlert:function(){return BoundaryAlert},WithStack:function(){return WithStack},default:function(){return ErrorBoundary_story}});var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),react=__webpack_require__("../../node_modules/react/index.js"),Alert=__webpack_require__("./src/components/Alert/Alert.tsx"),Button=__webpack_require__("./src/components/Button/Button.tsx");let faro={};var ErrorWithStack=__webpack_require__("./src/components/ErrorBoundary/ErrorWithStack.tsx");function _assert_this_initialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}function _class_call_check(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}function _create_class(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Constructor}function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _get_prototype_of(o){return _get_prototype_of=Object.setPrototypeOf?Object.getPrototypeOf:function getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o)},_get_prototype_of(o)}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),superClass&&_set_prototype_of(subClass,superClass)}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){_define_property(target,key,source[key])}))}return target}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})),target}function _possible_constructor_return(self,call){return!call||"object"!==function _type_of(obj){return obj&&"undefined"!=typeof Symbol&&obj.constructor===Symbol?"symbol":typeof obj}(call)&&"function"!=typeof call?_assert_this_initialized(self):call}function _set_prototype_of(o,p){return _set_prototype_of=Object.setPrototypeOf||function setPrototypeOf(o,p){return o.__proto__=p,o},_set_prototype_of(o,p)}function _create_super(Derived){var hasNativeReflectConstruct=function _is_native_reflect_construct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var result,Super=_get_prototype_of(Derived);if(hasNativeReflectConstruct){var NewTarget=_get_prototype_of(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else result=Super.apply(this,arguments);return _possible_constructor_return(this,result)}}var ErrorBoundary=function(PureComponent){_inherits(ErrorBoundary,PureComponent);var _super=_create_super(ErrorBoundary);function ErrorBoundary(){var _this;return _class_call_check(this,ErrorBoundary),_define_property(_assert_this_initialized(_this=_super.apply(this,arguments)),"state",{error:null,errorInfo:null}),_this}return _create_class(ErrorBoundary,[{key:"componentDidCatch",value:function componentDidCatch(error,errorInfo){var _faro_api;null==faro||null===(_faro_api=faro.api)||void 0===_faro_api||_faro_api.pushError(error),this.setState({error:error,errorInfo:errorInfo}),this.props.onError&&this.props.onError(error)}},{key:"componentDidUpdate",value:function componentDidUpdate(prevProps){var _this_props=this.props,dependencies=_this_props.dependencies,onRecover=_this_props.onRecover;if(this.state.error&&dependencies&&prevProps.dependencies)for(var i=0;i<dependencies.length;i++)if(dependencies[i]!==prevProps.dependencies[i]){this.setState({error:null,errorInfo:null}),onRecover&&onRecover();break}}},{key:"render",value:function render(){var children=this.props.children,_this_state=this.state;return children({error:_this_state.error,errorInfo:_this_state.errorInfo})}}]),ErrorBoundary}(react.PureComponent),ErrorBoundaryAlert=function(PureComponent){_inherits(ErrorBoundaryAlert,PureComponent);var _super=_create_super(ErrorBoundaryAlert);function ErrorBoundaryAlert(){return _class_call_check(this,ErrorBoundaryAlert),_super.apply(this,arguments)}return _create_class(ErrorBoundaryAlert,[{key:"render",value:function render(){var _this_props=this.props,title=_this_props.title,children=_this_props.children,style=_this_props.style,dependencies=_this_props.dependencies;return(0,jsx_runtime.jsx)(ErrorBoundary,{dependencies:dependencies,children:function(param){var error=param.error,errorInfo=param.errorInfo;return errorInfo?"alertbox"===style?(0,jsx_runtime.jsx)(Alert.F,{title:title||"",children:(0,jsx_runtime.jsxs)("details",{style:{whiteSpace:"pre-wrap"},children:[error&&error.toString(),(0,jsx_runtime.jsx)("br",{}),errorInfo.componentStack]})}):(0,jsx_runtime.jsx)(ErrorWithStack.D,{title:title||"",error:error,errorInfo:errorInfo}):children}})}}]),ErrorBoundaryAlert}(react.PureComponent);function withErrorBoundary(Component){var errorBoundaryProps=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},comp=function(props){return _jsx(ErrorBoundaryAlert,_object_spread_props(_object_spread({},errorBoundaryProps),{children:_jsx(Component,_object_spread({},props))}))};return comp.displayName="WithErrorBoundary",comp}_define_property(ErrorBoundaryAlert,"defaultProps",{title:"An unexpected error happened",style:"alertbox"});try{withErrorBoundary.displayName="withErrorBoundary",withErrorBoundary.__docgenInfo={description:"HOC for wrapping a component in an error boundary.",displayName:"withErrorBoundary",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ErrorBoundary/ErrorBoundary.tsx#withErrorBoundary"]={docgenInfo:withErrorBoundary.__docgenInfo,name:"withErrorBoundary",path:"src/components/ErrorBoundary/ErrorBoundary.tsx#withErrorBoundary"})}catch(__react_docgen_typescript_loader_error){}try{ErrorBoundary.displayName="ErrorBoundary",ErrorBoundary.__docgenInfo={description:"",displayName:"ErrorBoundary",props:{dependencies:{defaultValue:null,description:"Will re-render children after error if recover values changes",name:"dependencies",required:!1,type:{name:"unknown[]"}},onError:{defaultValue:null,description:"Callback called on error",name:"onError",required:!1,type:{name:"((error: Error) => void)"}},onRecover:{defaultValue:null,description:"Callback error state is cleared due to recover props change",name:"onRecover",required:!1,type:{name:"(() => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ErrorBoundary/ErrorBoundary.tsx#ErrorBoundary"]={docgenInfo:ErrorBoundary.__docgenInfo,name:"ErrorBoundary",path:"src/components/ErrorBoundary/ErrorBoundary.tsx#ErrorBoundary"})}catch(__react_docgen_typescript_loader_error){}try{ErrorBoundaryAlert.displayName="ErrorBoundaryAlert",ErrorBoundaryAlert.__docgenInfo={description:"",displayName:"ErrorBoundaryAlert",props:{title:{defaultValue:{value:"An unexpected error happened"},description:"Title for the error boundary alert",name:"title",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"Component to be wrapped with an error boundary",name:"children",required:!0,type:{name:"ReactNode"}},style:{defaultValue:{value:"alertbox"},description:"'page' will render full page error with stacktrace. 'alertbox' will render an <Alert />. Default 'alertbox'",name:"style",required:!1,type:{name:"enum",value:[{value:'"page"'},{value:'"alertbox"'}]}},dependencies:{defaultValue:null,description:"Will re-render children after error if recover values changes",name:"dependencies",required:!1,type:{name:"unknown[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ErrorBoundary/ErrorBoundary.tsx#ErrorBoundaryAlert"]={docgenInfo:ErrorBoundaryAlert.__docgenInfo,name:"ErrorBoundaryAlert",path:"src/components/ErrorBoundary/ErrorBoundary.tsx#ErrorBoundaryAlert"})}catch(__react_docgen_typescript_loader_error){}var lib=__webpack_require__("../../node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("../../node_modules/@storybook/blocks/dist/index.mjs");function _createMdxContent(props){const _components={a:"a",code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",...(0,lib.R)(),...props.components};return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(_components.h1,{id:"errorboundary",children:"ErrorBoundary"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["A React component that catches errors in child components. Useful for logging or displaying a fallback UI in case of errors. More information about error boundaries is available at ",(0,jsx_runtime.jsx)(_components.a,{href:"https://reactjs.org/docs/error-boundaries.html",rel:"nofollow",children:"React documentation website"}),"."]}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"usage",children:"Usage"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:"import { ErrorBoundary, Alert } from '@grafana/ui';\n\n<ErrorBoundary>\n  {({ error }) => {\n    if (error) {\n      return <Alert title={error.message} />;\n    }\n    return <Component />;\n  }}\n</ErrorBoundary>;\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"errorboundaryalert",children:"ErrorBoundaryAlert"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"An error boundary component with built-in alert to display in case of error."}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"usage-1",children:"Usage"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:"import { ErrorBoundaryAlert } from '@grafana/ui';\n\n<ErrorBoundaryAlert>\n  <Component />\n</ErrorBoundaryAlert>;\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"props",children:"Props"}),"\n",(0,jsx_runtime.jsx)(dist.ov,{of:ErrorBoundaryAlert}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"errorwithstack",children:"ErrorWithStack"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"A component that displays error together with its stack trace."}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"usage-2",children:"Usage"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:"import { ErrorWithStack } from '@grafana/ui';\n\n<ErrorWithStack error={new Error('Test error')} title={'Unexpected error'} errorInfo={null} />;\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"props-1",children:"Props"}),"\n",(0,jsx_runtime.jsx)(dist.ov,{of:ErrorWithStack.D}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"witherrorboundary",children:"withErrorBoundary"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"a HOC to conveniently wrap component in an error boundary"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"usage-3",children:"Usage"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:"import { withErrorBoundary } from '@grafana/ui';\n\ninterface MyCompProps {}\n\nconst MyComp = withErrorBoundary(\n  (props: MyCompProps) => {\n    return <>...</>;\n  },\n  { style: 'page' }\n);\n"})})]})}function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _sliced_to_array(arr,i){return function _array_with_holes(arr){if(Array.isArray(arr))return arr}(arr)||function _iterable_to_array_limit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}(arr,i)||function _unsupported_iterable_to_array(o,minLen){if(!o)return;if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}(arr,i)||function _non_iterable_rest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var BuggyComponent=function(){var _useState=_sliced_to_array((0,react.useState)(0),2),count=_useState[0],setCount=_useState[1];if(count>2)throw new Error("Crashed");return(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)("p",{children:"Increase the count to 3 to trigger error"}),(0,jsx_runtime.jsx)(Button.$n,{onClick:function(){return setCount(count+1)},children:count.toString()})]})},Basic=function(){return(0,jsx_runtime.jsx)(ErrorBoundary,{children:function(param){var error=param.error;return error?(0,jsx_runtime.jsx)(Alert.F,{title:error.message}):(0,jsx_runtime.jsx)(BuggyComponent,{})}})},WithStack=function(){return(0,jsx_runtime.jsx)(ErrorWithStack.D,{error:new Error("Test error"),title:"Unexpected error",errorInfo:null})},BoundaryAlert=function(){return(0,jsx_runtime.jsx)(ErrorBoundaryAlert,{children:(0,jsx_runtime.jsx)(BuggyComponent,{})})},ErrorBoundary_story={title:"General/ErrorBoundary",component:ErrorBoundary,parameters:{docs:{page:function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,lib.R)(),...props.components};return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}}}};Basic.parameters={...Basic.parameters,docs:{...Basic.parameters?.docs,source:{originalSource:"() => {\n  return <ErrorBoundary>\n      {({\n      error\n    }) => {\n      if (error) {\n        return <Alert title={error.message} />;\n      }\n      return <BuggyComponent />;\n    }}\n    </ErrorBoundary>;\n}",...Basic.parameters?.docs?.source}}},WithStack.parameters={...WithStack.parameters,docs:{...WithStack.parameters?.docs,source:{originalSource:"() => {\n  return <ErrorWithStack error={new Error('Test error')} title={'Unexpected error'} errorInfo={null} />;\n}",...WithStack.parameters?.docs?.source}}},BoundaryAlert.parameters={...BoundaryAlert.parameters,docs:{...BoundaryAlert.parameters?.docs,source:{originalSource:"() => {\n  return <ErrorBoundaryAlert>\n      <BuggyComponent />\n    </ErrorBoundaryAlert>;\n}",...BoundaryAlert.parameters?.docs?.source}}}}}]);