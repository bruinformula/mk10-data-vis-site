"use strict";(self.webpackChunk_grafana_ui=self.webpackChunk_grafana_ui||[]).push([[3546],{"../../node_modules/react-use/esm/useAsyncFn.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{A:function(){return useAsyncFn}});var tslib_es6=__webpack_require__("../../node_modules/tslib/tslib.es6.mjs"),react=__webpack_require__("../../node_modules/react/index.js");function useAsyncFn(fn,deps,initialState){void 0===deps&&(deps=[]),void 0===initialState&&(initialState={loading:!1});var lastCallId=(0,react.useRef)(0),isMounted=function useMountedState(){var mountedRef=(0,react.useRef)(!1),get=(0,react.useCallback)((function(){return mountedRef.current}),[]);return(0,react.useEffect)((function(){return mountedRef.current=!0,function(){mountedRef.current=!1}}),[]),get}(),_a=(0,react.useState)(initialState),state=_a[0],set=_a[1],callback=(0,react.useCallback)((function(){for(var args=[],_i=0;_i<arguments.length;_i++)args[_i]=arguments[_i];var callId=++lastCallId.current;return state.loading||set((function(prevState){return(0,tslib_es6.__assign)((0,tslib_es6.__assign)({},prevState),{loading:!0})})),fn.apply(void 0,args).then((function(value){return isMounted()&&callId===lastCallId.current&&set({value:value,loading:!1}),value}),(function(error){return isMounted()&&callId===lastCallId.current&&set({error:error,loading:!1}),error}))}),deps);return[state,callback]}},"./src/components/Segment/SegmentAsync.story.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ArrayOptions:function(){return ArrayOptions},ArrayOptionsWithPrimitiveValue:function(){return ArrayOptionsWithPrimitiveValue},Basic:function(){return Basic},CustomLabel:function(){return CustomLabel},CustomOptionsAllowed:function(){return CustomOptionsAllowed},CustomStateMessageHandler:function(){return CustomStateMessageHandler},GroupedArrayOptions:function(){return GroupedArrayOptions},HtmlAttributes:function(){return HtmlAttributes},default:function(){return SegmentAsync_story}});var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),dist=__webpack_require__("../../node_modules/@storybook/addon-actions/dist/index.mjs"),react=__webpack_require__("../../node_modules/react/index.js"),Icon=__webpack_require__("./src/components/Icon/Icon.tsx"),SegmentSection=__webpack_require__("./src/components/Segment/SegmentSection.tsx"),emotion_css_esm=__webpack_require__("../../node_modules/@emotion/css/dist/emotion-css.esm.js"),lodash=__webpack_require__("../../node_modules/lodash/lodash.js"),useAsyncFn=__webpack_require__("../../node_modules/react-use/esm/useAsyncFn.js"),ThemeContext=__webpack_require__("./src/themes/ThemeContext.tsx"),i18n=__webpack_require__("./src/utils/i18n.tsx"),InlineLabel=__webpack_require__("./src/components/Forms/InlineLabel.tsx"),SegmentSelect=__webpack_require__("./src/components/Segment/SegmentSelect.tsx"),Segment_styles=__webpack_require__("./src/components/Segment/styles.ts"),useExpandableLabel=__webpack_require__("./src/components/Segment/useExpandableLabel.tsx");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _sliced_to_array(arr,i){return function _array_with_holes(arr){if(Array.isArray(arr))return arr}(arr)||function _iterable_to_array_limit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}(arr,i)||function _unsupported_iterable_to_array(o,minLen){if(!o)return;if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}(arr,i)||function _non_iterable_rest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function SegmentAsync(_param){var _state_value,value=_param.value,onChange=_param.onChange,loadOptions=_param.loadOptions,_param_reloadOptionsOnChange=_param.reloadOptionsOnChange,reloadOptionsOnChange=void 0!==_param_reloadOptionsOnChange&&_param_reloadOptionsOnChange,Component=_param.Component,className=_param.className,allowCustomValue=_param.allowCustomValue,allowEmptyValue=_param.allowEmptyValue,disabled=_param.disabled,placeholder=_param.placeholder,inputMinWidth=_param.inputMinWidth,inputPlaceholder=_param.inputPlaceholder,_param_autofocus=_param.autofocus,autofocus=void 0!==_param_autofocus&&_param_autofocus,onExpandedChange=_param.onExpandedChange,_param_noOptionMessageHandler=_param.noOptionMessageHandler,noOptionMessageHandler=void 0===_param_noOptionMessageHandler?mapStateToNoOptionsMessage:_param_noOptionMessageHandler,rest=_object_without_properties(_param,["value","onChange","loadOptions","reloadOptionsOnChange","Component","className","allowCustomValue","allowEmptyValue","disabled","placeholder","inputMinWidth","inputPlaceholder","autofocus","onExpandedChange","noOptionMessageHandler"]),_useAsyncFn=_sliced_to_array((0,useAsyncFn.A)(loadOptions,[loadOptions]),2),state=_useAsyncFn[0],fetchOptions=_useAsyncFn[1],_useExpandableLabel=_sliced_to_array((0,useExpandableLabel.Q)(autofocus,onExpandedChange),4),Label=_useExpandableLabel[0],labelWidth=_useExpandableLabel[1],expanded=_useExpandableLabel[2],setExpanded=_useExpandableLabel[3],width=inputMinWidth?Math.max(inputMinWidth,labelWidth):labelWidth,styles=(0,ThemeContext.of)(Segment_styles.m);if(!expanded){var _obj,label=(0,lodash.isObject)(value)?value.label:value,labelAsString=null!=label?String(label):void 0;return(0,jsx_runtime.jsx)(Label,{onClick:reloadOptionsOnChange?void 0:fetchOptions,disabled:disabled,Component:Component||(0,jsx_runtime.jsx)(InlineLabel.c,{className:(0,emotion_css_esm.cx)(styles.segment,(_obj={},_define_property(_obj,styles.queryPlaceholder,void 0!==placeholder&&!value),_define_property(_obj,styles.disabled,disabled),_obj),className),children:labelAsString||placeholder})})}return(0,jsx_runtime.jsx)(SegmentSelect.a,_object_spread_props(function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){_define_property(target,key,source[key])}))}return target}({},rest),{value:value&&!(0,lodash.isObject)(value)?{value:value}:value,placeholder:inputPlaceholder,options:null!==(_state_value=state.value)&&void 0!==_state_value?_state_value:[],loadOptions:reloadOptionsOnChange?fetchOptions:void 0,width:width,noOptionsMessage:noOptionMessageHandler(state),allowCustomValue:allowCustomValue,allowEmptyValue:allowEmptyValue,onClickOutside:function(){setExpanded(!1)},onChange:function(item){setExpanded(!1),onChange(item)}}))}function mapStateToNoOptionsMessage(state){return state.loading?(0,i18n.t)("grafana-ui.segment-async.loading","Loading options..."):state.error?(0,i18n.t)("grafana-ui.segment-async.error","Failed to load options"):(0,i18n.t)("grafana-ui.segment-async.no-options","No options found")}try{SegmentAsync.displayName="SegmentAsync",SegmentAsync.__docgenInfo={description:"",displayName:"SegmentAsync",props:{value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"T | SelectableValue<T>"}},loadOptions:{defaultValue:null,description:"",name:"loadOptions",required:!0,type:{name:"(query?: string | undefined) => Promise<SelectableValue<T>[]>"}},reloadOptionsOnChange:{defaultValue:{value:"false"},description:"If true options will be reloaded when user changes the value in the input,\notherwise, options will be loaded when the segment is clicked",name:"reloadOptionsOnChange",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(item: SelectableValue<T>) => void"}},noOptionMessageHandler:{defaultValue:null,description:"",name:"noOptionMessageHandler",required:!1,type:{name:"((state: AsyncState<SelectableValue<T>[]>) => string)"}},inputMinWidth:{defaultValue:null,description:"",name:"inputMinWidth",required:!1,type:{name:"number"}},Component:{defaultValue:null,description:"",name:"Component",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},allowCustomValue:{defaultValue:null,description:"",name:"allowCustomValue",required:!1,type:{name:"boolean"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},onExpandedChange:{defaultValue:null,description:"",name:"onExpandedChange",required:!1,type:{name:"((expanded: boolean) => void)"}},autofocus:{defaultValue:{value:"false"},description:"",name:"autofocus",required:!1,type:{name:"boolean"}},allowEmptyValue:{defaultValue:null,description:"",name:"allowEmptyValue",required:!1,type:{name:"boolean"}},inputPlaceholder:{defaultValue:null,description:"",name:"inputPlaceholder",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Segment/SegmentAsync.tsx#SegmentAsync"]={docgenInfo:SegmentAsync.__docgenInfo,name:"SegmentAsync",path:"src/components/Segment/SegmentAsync.tsx#SegmentAsync"})}catch(__react_docgen_typescript_loader_error){}function SegmentAsync_story_array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg),value=info.value}catch(error){return void reject(error)}info.done?resolve(value):Promise.resolve(value).then(_next,_throw)}function _async_to_generator(fn){return function(){var self=this,args=arguments;return new Promise((function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}_next(void 0)}))}}function SegmentAsync_story_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function SegmentAsync_story_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){SegmentAsync_story_define_property(target,key,source[key])}))}return target}function SegmentAsync_story_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):function SegmentAsync_story_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})),target}function SegmentAsync_story_sliced_to_array(arr,i){return function SegmentAsync_story_array_with_holes(arr){if(Array.isArray(arr))return arr}(arr)||function SegmentAsync_story_iterable_to_array_limit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}(arr,i)||function SegmentAsync_story_unsupported_iterable_to_array(o,minLen){if(!o)return;if("string"==typeof o)return SegmentAsync_story_array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return SegmentAsync_story_array_like_to_array(o,minLen)}(arr,i)||function SegmentAsync_story_non_iterable_rest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _ts_generator(thisArg,body){var f,y,t,g,_={label:0,sent:function(){if(1&t[0])throw t[1];return t[1]},trys:[],ops:[]};return g={next:verb(0),throw:verb(1),return:verb(2)},"function"==typeof Symbol&&(g[Symbol.iterator]=function(){return this}),g;function verb(n){return function(v){return function step(op){if(f)throw new TypeError("Generator is already executing.");for(;_;)try{if(f=1,y&&(t=2&op[0]?y.return:op[0]?y.throw||((t=y.return)&&t.call(y),0):y.next)&&!(t=t.call(y,op[1])).done)return t;switch(y=0,t&&(op=[2&op[0],t.value]),op[0]){case 0:case 1:t=op;break;case 4:return _.label++,{value:op[1],done:!1};case 5:_.label++,y=op[1],op=[0];continue;case 7:op=_.ops.pop(),_.trys.pop();continue;default:if(!(t=_.trys,(t=t.length>0&&t[t.length-1])||6!==op[0]&&2!==op[0])){_=0;continue}if(3===op[0]&&(!t||op[1]>t[0]&&op[1]<t[3])){_.label=op[1];break}if(6===op[0]&&_.label<t[1]){_.label=t[1],t=op;break}if(t&&_.label<t[2]){_.label=t[2],_.ops.push(op);break}t[2]&&_.ops.pop(),_.trys.pop();continue}op=body.call(thisArg,_)}catch(e){op=[6,e],y=0}finally{f=t=0}if(5&op[0])throw op[1];return{value:op[0]?op[1]:void 0,done:!0}}([n,v])}}}var AddButton=(0,jsx_runtime.jsx)("span",{className:"gf-form-label query-part",children:(0,jsx_runtime.jsx)(Icon.I,{name:"plus"})}),toOption=function(value){return{label:String(value),value:value}},options=["Option1","Option2","OptionWithLooongLabel","Option4"].map(toOption),loadOptions=function(options){return new Promise((function(res){return setTimeout((function(){return res(options)}),2e3)}))},loadOptionsErr=function(){return new Promise((function(_,rej){return setTimeout((function(){return rej(Error("Could not find data"))}),2e3)}))},SegmentFrame=function(param){var loadOptions=param.loadOptions,children=param.children;return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsxs)(SegmentSection.L,{label:"Segment",children:[children,(0,jsx_runtime.jsx)(SegmentAsync,{Component:AddButton,onChange:function(value){return(0,dist.XI)("New value added")(value)},loadOptions:function(){return loadOptions(options)},inputMinWidth:100})]})})},ArrayOptions=function(){var _useState=SegmentAsync_story_sliced_to_array((0,react.useState)(options[0]),2),value=_useState[0],setValue=_useState[1];return(0,jsx_runtime.jsx)(SegmentFrame,{loadOptions:function(){return loadOptions(options)},children:(0,jsx_runtime.jsx)(SegmentAsync,{value:value,loadOptions:function(){return loadOptions(options)},onChange:function(item){setValue(item),(0,dist.XI)("Segment value changed")(item.value)}})})},meta={title:"Data Source/Segment/SegmentAsync",component:SegmentAsync},ArrayOptionsWithPrimitiveValue=function(){var _useState=SegmentAsync_story_sliced_to_array((0,react.useState)(options[0].value),2),value=_useState[0],setValue=_useState[1];return(0,jsx_runtime.jsx)(SegmentFrame,{loadOptions:function(){return loadOptions(options)},children:(0,jsx_runtime.jsx)(SegmentAsync,{value:value,loadOptions:function(){return loadOptions(options)},onChange:function(param){var value=param.value;setValue(value),(0,dist.XI)("Segment value changed")(value)}})})},groupedOptions=[{label:"Names",options:["Jane","Tom","Lisa"].map(toOption)},{label:"Prime",options:[2,3,5,7,11,13].map(toOption)}],GroupedArrayOptions=function(){var _useState=SegmentAsync_story_sliced_to_array((0,react.useState)(groupedOptions[0].options[0]),2),value=_useState[0],setValue=_useState[1];return(0,jsx_runtime.jsx)(SegmentFrame,{loadOptions:function(){return loadOptions(groupedOptions)},children:(0,jsx_runtime.jsx)(SegmentAsync,{value:value,loadOptions:function(){return loadOptions(groupedOptions)},onChange:function(item){setValue(item),(0,dist.XI)("Segment value changed")(item.value)}})})},CustomOptionsAllowed=function(){var _useState=SegmentAsync_story_sliced_to_array((0,react.useState)(groupedOptions[0].options[0]),2),value=_useState[0],setValue=_useState[1];return(0,jsx_runtime.jsx)(SegmentFrame,{loadOptions:function(){return loadOptions(groupedOptions)},children:(0,jsx_runtime.jsx)(SegmentAsync,{allowCustomValue:!0,value:value,loadOptions:function(){return loadOptions(options)},onChange:function(item){setValue(item),(0,dist.XI)("Segment value changed")(item.value)}})})},CustomLabelComponent=function(param){var value=param.value;return(0,jsx_runtime.jsxs)("div",{className:"gf-form-label",children:["custom(",String(value),")"]})},CustomLabel=function(){var _useState=SegmentAsync_story_sliced_to_array((0,react.useState)(groupedOptions[0].options[0].value),2),value=_useState[0],setValue=_useState[1];return(0,jsx_runtime.jsx)(SegmentFrame,{loadOptions:function(){return loadOptions(groupedOptions)},children:(0,jsx_runtime.jsx)(SegmentAsync,{Component:(0,jsx_runtime.jsx)(CustomLabelComponent,{value:value}),loadOptions:function(){return loadOptions(groupedOptions)},onChange:function(param){var value=param.value;setValue(value),(0,dist.XI)("Segment value changed")(value)}})})},CustomStateMessageHandler=function(){var stateToTextFunction=function(state){return state.loading?"You're going too fast for me, please wait...":state.error?"Outch ! We encountered an error...":Array.isArray(state.value)&&0!==state.value.length?"":"It is empty :)"},_useState=SegmentAsync_story_sliced_to_array((0,react.useState)(options[0].value),2),value=_useState[0],setValue=_useState[1];return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(SegmentFrame,{loadOptions:function(){return loadOptions(groupedOptions)},children:(0,jsx_runtime.jsx)(SegmentAsync,{value:value,noOptionMessageHandler:stateToTextFunction,loadOptions:function(){return loadOptions(groupedOptions)},onChange:function(param){var value=param.value;setValue(value),(0,dist.XI)("Segment value changed")(value)}})}),(0,jsx_runtime.jsx)(SegmentFrame,{loadOptions:function(){return loadOptions([])},children:(0,jsx_runtime.jsx)(SegmentAsync,{value:value,noOptionMessageHandler:stateToTextFunction,loadOptions:function(){return loadOptions([])},onChange:function(param){var value=param.value;setValue(value),(0,dist.XI)("Segment value changed")(value)}})}),(0,jsx_runtime.jsx)(SegmentFrame,{loadOptions:function(){return loadOptionsErr()},children:(0,jsx_runtime.jsx)(SegmentAsync,{value:value,noOptionMessageHandler:stateToTextFunction,loadOptions:function(){return loadOptionsErr()},onChange:function(param){var value=param.value;setValue(value),(0,dist.XI)("Segment value changed")(value)}})})]})},HtmlAttributes=function(){var _useState=SegmentAsync_story_sliced_to_array((0,react.useState)(options[0]),2),value=_useState[0],setValue=_useState[1];return(0,jsx_runtime.jsx)(SegmentFrame,{loadOptions:function(){return loadOptions(options)},children:(0,jsx_runtime.jsx)(SegmentAsync,{"data-testid":"segment-async-test",id:"segment-async",value:value,loadOptions:function(){return loadOptions(options)},onChange:function(item){setValue(item),(0,dist.XI)("Segment value changed")(item.value)}})})},Basic=function(args){var _useState=SegmentAsync_story_sliced_to_array((0,react.useState)(args.value),2),value=_useState[0],setValue=_useState[1],props=SegmentAsync_story_object_spread_props(SegmentAsync_story_object_spread({},args),{value:value,loadOptions:_async_to_generator((function(){var query,result,_arguments=arguments;return _ts_generator(this,(function(_state){switch(_state.label){case 0:return query=_arguments.length>0&&void 0!==_arguments[0]?_arguments[0]:"",(0,dist.XI)("loadOptions fired")({query:query}),[4,loadOptions(options)];case 1:return result=_state.sent(),query?[2,result.filter((function(data){var _data_label;return null===(_data_label=data.label)||void 0===_data_label?void 0:_data_label.includes(query)}))]:[2,loadOptions(options)]}}))})),onChange:function(param){var value=param.value;setValue(value),(0,dist.XI)("onChange fired")(value)},onExpandedChange:function(expanded){return(0,dist.XI)("onExpandedChange fired")({expanded:expanded})},noOptionMessageHandler:function(state){return(0,dist.XI)("noOptionMessageHandler fired")(state),state.loading?"Loading...":state.error?"Failed to load options":Array.isArray(state.value)&&0!==state.value.length?"":"No options found"}});return(0,jsx_runtime.jsx)(SegmentSection.L,{label:"Segment:",children:(0,jsx_runtime.jsx)(SegmentAsync,SegmentAsync_story_object_spread({},props))})};Basic.parameters={controls:{exclude:["value","loadOptions","onChange","noOptionMessageHandler","Component","className","onExpandedChange"]}},Basic.args={inputMinWidth:0,allowCustomValue:!1,reloadOptionsOnChange:!1,placeholder:"Placeholder text",disabled:!1,autofocus:!1,allowEmptyValue:!1,inputPlaceholder:"Start typing..."};var SegmentAsync_story=meta;ArrayOptions.parameters={...ArrayOptions.parameters,docs:{...ArrayOptions.parameters?.docs,source:{originalSource:"() => {\n  const [value, setValue] = useState(options[0]);\n  return <SegmentFrame loadOptions={() => loadOptions(options)}>\n      <SegmentAsync value={value} loadOptions={() => loadOptions(options)} onChange={item => {\n      setValue(item);\n      action('Segment value changed')(item.value);\n    }} />\n    </SegmentFrame>;\n}",...ArrayOptions.parameters?.docs?.source}}},ArrayOptionsWithPrimitiveValue.parameters={...ArrayOptionsWithPrimitiveValue.parameters,docs:{...ArrayOptionsWithPrimitiveValue.parameters?.docs,source:{originalSource:"() => {\n  const [value, setValue] = useState(options[0].value);\n  return <SegmentFrame loadOptions={() => loadOptions(options)}>\n      <SegmentAsync value={value} loadOptions={() => loadOptions(options)} onChange={({\n      value\n    }) => {\n      setValue(value);\n      action('Segment value changed')(value);\n    }} />\n    </SegmentFrame>;\n}",...ArrayOptionsWithPrimitiveValue.parameters?.docs?.source}}},GroupedArrayOptions.parameters={...GroupedArrayOptions.parameters,docs:{...GroupedArrayOptions.parameters?.docs,source:{originalSource:"() => {\n  const [value, setValue] = useState(groupedOptions[0].options[0]);\n  return <SegmentFrame loadOptions={() => loadOptions(groupedOptions)}>\n      <SegmentAsync<string | number> value={value} loadOptions={() => loadOptions(groupedOptions)} onChange={item => {\n      setValue(item);\n      action('Segment value changed')(item.value);\n    }} />\n    </SegmentFrame>;\n}",...GroupedArrayOptions.parameters?.docs?.source}}},CustomOptionsAllowed.parameters={...CustomOptionsAllowed.parameters,docs:{...CustomOptionsAllowed.parameters?.docs,source:{originalSource:"() => {\n  const [value, setValue] = useState(groupedOptions[0].options[0]);\n  return <SegmentFrame loadOptions={() => loadOptions(groupedOptions)}>\n      <SegmentAsync allowCustomValue value={value} loadOptions={() => loadOptions(options)} onChange={item => {\n      setValue(item);\n      action('Segment value changed')(item.value);\n    }} />\n    </SegmentFrame>;\n}",...CustomOptionsAllowed.parameters?.docs?.source}}},CustomLabel.parameters={...CustomLabel.parameters,docs:{...CustomLabel.parameters?.docs,source:{originalSource:"() => {\n  const [value, setValue] = useState(groupedOptions[0].options[0].value);\n  return <SegmentFrame loadOptions={() => loadOptions(groupedOptions)}>\n      <SegmentAsync<string | number> Component={<CustomLabelComponent value={value} />} loadOptions={() => loadOptions(groupedOptions)} onChange={({\n      value\n    }) => {\n      setValue(value);\n      action('Segment value changed')(value);\n    }} />\n    </SegmentFrame>;\n}",...CustomLabel.parameters?.docs?.source}}},CustomStateMessageHandler.parameters={...CustomStateMessageHandler.parameters,docs:{...CustomStateMessageHandler.parameters?.docs,source:{originalSource:"() => {\n  const stateToTextFunction = (state: AsyncState<Array<SelectableValue<string>>>) => {\n    if (state.loading) {\n      return \"You're going too fast for me, please wait...\";\n    }\n    if (state.error) {\n      return 'Outch ! We encountered an error...';\n    }\n    if (!Array.isArray(state.value) || state.value.length === 0) {\n      return 'It is empty :)';\n    }\n    return '';\n  };\n  const [value, setValue] = useState(options[0].value);\n  return <>\n      <SegmentFrame loadOptions={() => loadOptions(groupedOptions)}>\n        <SegmentAsync value={value} noOptionMessageHandler={stateToTextFunction} loadOptions={() => loadOptions(groupedOptions)} onChange={({\n        value\n      }) => {\n        setValue(value);\n        action('Segment value changed')(value);\n      }} />\n      </SegmentFrame>\n      <SegmentFrame loadOptions={() => loadOptions([])}>\n        <SegmentAsync value={value} noOptionMessageHandler={stateToTextFunction} loadOptions={() => loadOptions([])} onChange={({\n        value\n      }) => {\n        setValue(value);\n        action('Segment value changed')(value);\n      }} />\n      </SegmentFrame>\n      <SegmentFrame loadOptions={() => loadOptionsErr()}>\n        <SegmentAsync value={value} noOptionMessageHandler={stateToTextFunction} loadOptions={() => loadOptionsErr()} onChange={({\n        value\n      }) => {\n        setValue(value);\n        action('Segment value changed')(value);\n      }} />\n      </SegmentFrame>\n    </>;\n}",...CustomStateMessageHandler.parameters?.docs?.source}}},HtmlAttributes.parameters={...HtmlAttributes.parameters,docs:{...HtmlAttributes.parameters?.docs,source:{originalSource:'() => {\n  const [value, setValue] = useState(options[0]);\n  return <SegmentFrame loadOptions={() => loadOptions(options)}>\n      <SegmentAsync data-testid="segment-async-test" id="segment-async" value={value} loadOptions={() => loadOptions(options)} onChange={item => {\n      setValue(item);\n      action(\'Segment value changed\')(item.value);\n    }} />\n    </SegmentFrame>;\n}',...HtmlAttributes.parameters?.docs?.source}}},Basic.parameters={...Basic.parameters,docs:{...Basic.parameters?.docs,source:{originalSource:"(args: SegmentAsyncProps<string>) => {\n  const [value, setValue] = useState(args.value);\n  const props: SegmentAsyncProps<string> = {\n    ...args,\n    value,\n    loadOptions: async (query = '') => {\n      action('loadOptions fired')({\n        query\n      });\n      const result = await loadOptions(options);\n      if (query) {\n        return result.filter(data => data.label?.includes(query));\n      }\n      return loadOptions(options);\n    },\n    onChange: ({\n      value\n    }) => {\n      setValue(value);\n      action('onChange fired')(value);\n    },\n    onExpandedChange: expanded => action('onExpandedChange fired')({\n      expanded\n    }),\n    noOptionMessageHandler: state => {\n      action('noOptionMessageHandler fired')(state);\n      if (state.loading) {\n        return 'Loading...';\n      }\n      if (state.error) {\n        return 'Failed to load options';\n      }\n      if (!Array.isArray(state.value) || state.value.length === 0) {\n        return 'No options found';\n      }\n      return '';\n    }\n  };\n  return <SegmentSection label=\"Segment:\">\n      <SegmentAsync<string> {...props} />\n    </SegmentSection>;\n}",...Basic.parameters?.docs?.source}}}}}]);