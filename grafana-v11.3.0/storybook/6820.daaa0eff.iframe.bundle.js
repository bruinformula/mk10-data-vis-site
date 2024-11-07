"use strict";(self.webpackChunk_grafana_ui=self.webpackChunk_grafana_ui||[]).push([[6820],{"./src/components/Combobox/Combobox.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{G:function(){return Combobox}});var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),emotion_css_esm=__webpack_require__("../../node_modules/@emotion/css/dist/emotion-css.esm.js"),esm=__webpack_require__("../../node_modules/@tanstack/react-virtual/dist/esm/index.js"),downshift_esm=__webpack_require__("../../node_modules/downshift/dist/downshift.esm.js"),react=__webpack_require__("../../node_modules/react/index.js"),ThemeContext=__webpack_require__("./src/themes/ThemeContext.tsx"),i18n=__webpack_require__("./src/utils/i18n.tsx"),Icon=__webpack_require__("./src/components/Icon/Icon.tsx"),AutoSizeInput=__webpack_require__("./src/components/Input/AutoSizeInput.tsx"),Input=__webpack_require__("./src/components/Input/Input.tsx"),getComboboxStyles=function(theme){return{menuClosed:(0,emotion_css_esm.AH)({display:"none"}),menu:(0,emotion_css_esm.AH)({label:"grafana-select-menu",background:theme.components.dropdown.background,boxShadow:theme.shadows.z3,zIndex:theme.zIndex.dropdown,maxHeight:400,overflowY:"auto",position:"relative"}),menuUlContainer:(0,emotion_css_esm.AH)({label:"grafana-select-menu-ul-container",listStyle:"none"}),option:(0,emotion_css_esm.AH)({label:"grafana-select-option",padding:"8px",position:"absolute",display:"flex",alignItems:"center",flexDirection:"row",flexShrink:0,whiteSpace:"nowrap",width:"100%",overflow:"hidden",cursor:"pointer","&:hover":{background:theme.colors.action.hover,"@media (forced-colors: active), (prefers-contrast: more)":{border:"1px solid ".concat(theme.colors.primary.border)}}}),optionBody:(0,emotion_css_esm.AH)({label:"grafana-select-option-body",display:"flex",fontWeight:theme.typography.fontWeightMedium,flexDirection:"column",flexGrow:1,overflow:"hidden"}),optionLabel:(0,emotion_css_esm.AH)({label:"grafana-select-option-label",textOverflow:"ellipsis",overflow:"hidden"}),optionDescription:(0,emotion_css_esm.AH)({label:"grafana-select-option-description",fontWeight:"normal",fontSize:theme.typography.bodySmall.fontSize,color:theme.colors.text.secondary,lineHeight:theme.typography.body.lineHeight,textOverflow:"ellipsis",overflow:"hidden"}),optionFocused:(0,emotion_css_esm.AH)({label:"grafana-select-option-focused",top:0,background:theme.colors.action.focus,"@media (forced-colors: active), (prefers-contrast: more)":{border:"1px solid ".concat(theme.colors.primary.border)}}),optionSelected:(0,emotion_css_esm.AH)({background:theme.colors.action.selected,"&::before":{backgroundImage:theme.colors.gradients.brandVertical,borderRadius:theme.shape.radius.default,content:'" "',display:"block",height:"100%",position:"absolute",width:theme.spacing(.5),left:0,top:0}}),clear:(0,emotion_css_esm.AH)({label:"grafana-select-clear",cursor:"pointer","&:hover":{color:theme.colors.text.primary}})}},floating_ui_react_dom=__webpack_require__("../../node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.mjs"),floating_ui_react=__webpack_require__("../../node_modules/@floating-ui/react/dist/floating-ui.react.mjs"),floating_ui_dom=__webpack_require__("../../node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})),target}function _sliced_to_array(arr,i){return function _array_with_holes(arr){if(Array.isArray(arr))return arr}(arr)||function _iterable_to_array_limit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}(arr,i)||function _unsupported_iterable_to_array(o,minLen){if(!o)return;if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}(arr,i)||function _non_iterable_rest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function estimateSize(){return 45}var useComboboxFloat=function(items,range,isOpen){var _inputRef_current,inputRef=(0,react.useRef)(null),floatingRef=(0,react.useRef)(null),_useState=_sliced_to_array((0,react.useState)(void 0),2),popoverWidth=_useState[0],setPopoverWidth=_useState[1],_useState1=_sliced_to_array((0,react.useState)(void 0),2),popoverMaxWidth=_useState1[0],setPopoverMaxWidth=_useState1[1],middleware=[(0,floating_ui_react_dom.UU)({crossAxis:!0,boundary:document.body}),(0,floating_ui_react_dom.Ej)({apply:function apply(param){var availableWidth=param.availableWidth;setPopoverMaxWidth(availableWidth)}})],elements={reference:inputRef.current,floating:floatingRef.current},floatingStyles=(0,floating_ui_react.we)({strategy:"fixed",open:isOpen,placement:"bottom-start",middleware:middleware,elements:elements,whileElementsMounted:floating_ui_dom.ll}).floatingStyles;(0,react.useEffect)((function(){if(null!==range){var startVisibleIndex=null==range?void 0:range.startIndex,endVisibleIndex=null==range?void 0:range.endIndex;if(void 0!==startVisibleIndex&&void 0!==endVisibleIndex)if(0===startVisibleIndex||startVisibleIndex%100==0&&startVisibleIndex>=100){for(var maxLength=0,calculationEnd=Math.min(items.length,endVisibleIndex+100),i=startVisibleIndex;i<calculationEnd;i++)maxLength=Math.max(maxLength,items[i].label.length);setPopoverWidth(7.3*maxLength)}else if(endVisibleIndex%100==0&&endVisibleIndex>=100){for(var maxLength1=0,i1=Math.max(0,startVisibleIndex-100);i1<endVisibleIndex;i1++)maxLength1=Math.max(maxLength1,items[i1].label.length);setPopoverWidth(7.3*maxLength1)}}}),[items,range,setPopoverWidth]);var floatStyles=_object_spread_props(function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){_define_property(target,key,source[key])}))}return target}({},floatingStyles),{width:popoverWidth,maxWidth:popoverMaxWidth,minWidth:null===(_inputRef_current=inputRef.current)||void 0===_inputRef_current?void 0:_inputRef_current.offsetWidth});return{inputRef:inputRef,floatingRef:floatingRef,floatStyles:floatStyles}};function Combobox_array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function Combobox_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function Combobox_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){Combobox_define_property(target,key,source[key])}))}return target}function Combobox_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):function Combobox_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function Combobox_sliced_to_array(arr,i){return function Combobox_array_with_holes(arr){if(Array.isArray(arr))return arr}(arr)||function Combobox_iterable_to_array_limit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}(arr,i)||Combobox_unsupported_iterable_to_array(arr,i)||function Combobox_non_iterable_rest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _to_consumable_array(arr){return function _array_without_holes(arr){if(Array.isArray(arr))return Combobox_array_like_to_array(arr)}(arr)||function _iterable_to_array(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}(arr)||Combobox_unsupported_iterable_to_array(arr)||function _non_iterable_spread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Combobox_unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return Combobox_array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);return"Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Combobox_array_like_to_array(o,minLen):void 0}}function itemToString(item){var _item_label,_ref;return null!==(_ref=null!==(_item_label=null==item?void 0:item.label)&&void 0!==_item_label?_item_label:null==item?void 0:item.value.toString())&&void 0!==_ref?_ref:""}var Combobox=function(_param){var options=_param.options,onChange=_param.onChange,value=_param.value,_param_isClearable=_param.isClearable,isClearable=void 0!==_param_isClearable&&_param_isClearable,_param_createCustomValue=_param.createCustomValue,createCustomValue=void 0!==_param_createCustomValue&&_param_createCustomValue,id=_param.id,width=_param.width,ariaLabelledBy=_param["aria-labelledby"],restProps=_object_without_properties(_param,["options","onChange","value","isClearable","createCustomValue","id","width","aria-labelledby"]),_useState=Combobox_sliced_to_array((0,react.useState)(options),2),items=_useState[0],setItems=_useState[1],selectedItemIndex=(0,react.useMemo)((function(){if(null===value)return null;var index=options.findIndex((function(option){return option.value===value}));return-1===index?null:index}),[options,value]),selectedItem=(0,react.useMemo)((function(){return null!==selectedItemIndex?options[selectedItemIndex]:null!==value?{label:value.toString(),value:value}:null}),[selectedItemIndex,options,value]),menuId="downshift-".concat((0,react.useId)().replace(/:/g,"--"),"-menu"),labelId="downshift-".concat((0,react.useId)().replace(/:/g,"--"),"-label"),styles=(0,ThemeContext.of)(getComboboxStyles),virtualizerOptions={count:items.length,getScrollElement:function(){return floatingRef.current},estimateSize:estimateSize,overscan:4},rowVirtualizer=(0,esm.Te)(virtualizerOptions),_useCombobox=(0,downshift_esm.Bp)({menuId:menuId,labelId:labelId,inputId:id,items:items,itemToString:itemToString,selectedItem:selectedItem,onSelectedItemChange:function(param){var selectedItem=param.selectedItem;onChange(selectedItem)},defaultHighlightedIndex:null!=selectedItemIndex?selectedItemIndex:0,scrollIntoView:function(){},onInputValueChange:function(param){var inputValue=param.inputValue,filteredItems=options.filter(function itemFilter(inputValue){var lowerCasedInputValue=inputValue.toLowerCase();return function(item){var _item_label,_item_value;return!inputValue||(null==item||null===(_item_label=item.label)||void 0===_item_label?void 0:_item_label.toLowerCase().includes(lowerCasedInputValue))||(null==item||null===(_item_value=item.value)||void 0===_item_value?void 0:_item_value.toString().toLowerCase().includes(lowerCasedInputValue))}}(inputValue));if(createCustomValue&&inputValue&&-1===filteredItems.findIndex((function(opt){return opt.label===inputValue}))){var customValueOption={label:inputValue,value:inputValue,description:(0,i18n.t)("combobox.custom-value.create","Create custom value")};setItems(_to_consumable_array(filteredItems).concat([customValueOption]))}else setItems(filteredItems)},onIsOpenChange:function(param){param.isOpen&&setItems(options)},onHighlightedIndexChange:function(param){var highlightedIndex=param.highlightedIndex;param.type!==downshift_esm.Bp.stateChangeTypes.MenuMouseLeave&&rowVirtualizer.scrollToIndex(highlightedIndex)}}),getInputProps=_useCombobox.getInputProps,getMenuProps=_useCombobox.getMenuProps,getItemProps=_useCombobox.getItemProps,isOpen=_useCombobox.isOpen,highlightedIndex=_useCombobox.highlightedIndex,setInputValue=_useCombobox.setInputValue,openMenu=_useCombobox.openMenu,closeMenu=_useCombobox.closeMenu,selectItem=_useCombobox.selectItem,_useComboboxFloat=useComboboxFloat(items,rowVirtualizer.range,isOpen),inputRef=_useComboboxFloat.inputRef,floatingRef=_useComboboxFloat.floatingRef,floatStyles=_useComboboxFloat.floatStyles,onBlur=(0,react.useCallback)((function(){var _selectedItem_label,_ref;setInputValue(null!==(_ref=null!==(_selectedItem_label=null==selectedItem?void 0:selectedItem.label)&&void 0!==_selectedItem_label?_selectedItem_label:null==value?void 0:value.toString())&&void 0!==_ref?_ref:"")}),[selectedItem,setInputValue,value]),InputComponent="auto"===width?AutoSizeInput.D:Input.p;return(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)(InputComponent,Combobox_object_spread({width:"auto"===width?void 0:width,suffix:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[!!value&&value===(null==selectedItem?void 0:selectedItem.value)&&isClearable&&(0,jsx_runtime.jsx)(Icon.I,{name:"times",className:styles.clear,title:(0,i18n.t)("combobox.clear.title","Clear value"),tabIndex:0,role:"button",onClick:function(){selectItem(null)},onKeyDown:function(e){"Enter"!==e.key&&" "!==e.key||selectItem(null)}}),(0,jsx_runtime.jsx)(Icon.I,{name:isOpen?"search":"angle-down",onClick:function(){isOpen?closeMenu():openMenu()}})]})},restProps,getInputProps({ref:inputRef,onChange:function(){},onBlur:onBlur,"aria-labelledby":ariaLabelledBy}))),(0,jsx_runtime.jsx)("div",Combobox_object_spread_props(Combobox_object_spread({className:(0,emotion_css_esm.cx)(styles.menu,!isOpen&&styles.menuClosed),style:Combobox_object_spread({},floatStyles)},getMenuProps({ref:floatingRef,"aria-labelledby":ariaLabelledBy})),{children:isOpen&&(0,jsx_runtime.jsx)("ul",{style:{height:rowVirtualizer.getTotalSize()},className:styles.menuUlContainer,children:rowVirtualizer.getVirtualItems().map((function(virtualRow){return(0,jsx_runtime.jsx)("li",Combobox_object_spread_props(Combobox_object_spread({"data-index":virtualRow.index,className:(0,emotion_css_esm.cx)(styles.option,selectedItem&&items[virtualRow.index].value===selectedItem.value&&styles.optionSelected,highlightedIndex===virtualRow.index&&styles.optionFocused),style:{height:virtualRow.size,transform:"translateY(".concat(virtualRow.start,"px)")}},getItemProps({item:items[virtualRow.index],index:virtualRow.index})),{children:(0,jsx_runtime.jsxs)("div",{className:styles.optionBody,children:[(0,jsx_runtime.jsx)("span",{className:styles.optionLabel,children:items[virtualRow.index].label}),items[virtualRow.index].description&&(0,jsx_runtime.jsx)("span",{className:styles.optionDescription,children:items[virtualRow.index].description})]})}),items[virtualRow.index].value+items[virtualRow.index].label)}))})}))]})};try{Combobox.displayName="Combobox",Combobox.__docgenInfo={description:"A performant Select replacement.",displayName:"Combobox",props:{isClearable:{defaultValue:{value:"false"},description:"",name:"isClearable",required:!1,type:{name:"boolean"}},createCustomValue:{defaultValue:{value:"false"},description:"",name:"createCustomValue",required:!1,type:{name:"boolean"}},options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"ComboboxOption<T>[]"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(option: ComboboxOption<T> | null) => void"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string | number | null"}},width:{defaultValue:null,description:"Defaults to 100%. Number is a multiple of 8px. 'auto' will size the input to the content.",name:"width",required:!1,type:{name:'number | "auto"'}},invalid:{defaultValue:null,description:"Show an invalid state around the input",name:"invalid",required:!1,type:{name:"boolean"}},loading:{defaultValue:null,description:"Show a loading indicator as a suffix in the input",name:"loading",required:!1,type:{name:"boolean"}},minWidth:{defaultValue:null,description:"",name:"minWidth",required:!1,type:{name:"number"}},maxWidth:{defaultValue:null,description:"",name:"maxWidth",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Combobox/Combobox.tsx#Combobox"]={docgenInfo:Combobox.__docgenInfo,name:"Combobox",path:"src/components/Combobox/Combobox.tsx#Combobox"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Input/AutoSizeInput.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{D:function(){return AutoSizeInput}});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/index.js"),_utils_measureText__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/utils/measureText.ts"),_Input__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Input/Input.tsx");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _sliced_to_array(arr,i){return function _array_with_holes(arr){if(Array.isArray(arr))return arr}(arr)||function _iterable_to_array_limit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}(arr,i)||function _unsupported_iterable_to_array(o,minLen){if(!o)return;if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}(arr,i)||function _non_iterable_rest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var AutoSizeInput=react__WEBPACK_IMPORTED_MODULE_1__.forwardRef((function(props,ref){var _props_defaultValue=props.defaultValue,defaultValue=void 0===_props_defaultValue?"":_props_defaultValue,_props_minWidth=props.minWidth,minWidth=void 0===_props_minWidth?10:_props_minWidth,maxWidth=props.maxWidth,onCommitChange=props.onCommitChange,onKeyDown=props.onKeyDown,onBlur=props.onBlur,controlledValue=props.value,restProps=_object_without_properties(props,["defaultValue","minWidth","maxWidth","onCommitChange","onKeyDown","onBlur","value"]),_React_useState=_sliced_to_array(react__WEBPACK_IMPORTED_MODULE_1__.useState(null!=controlledValue?controlledValue:defaultValue),2),value=_React_useState[0],setValue=_React_useState[1],_React_useState1=_sliced_to_array(react__WEBPACK_IMPORTED_MODULE_1__.useState(minWidth),2),inputWidth=_React_useState1[0],setInputWidth=_React_useState1[1];return(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((function(){controlledValue&&setValue(controlledValue)}),[controlledValue]),(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((function(){setInputWidth(function getWidthFor(value,minWidth,maxWidth){if(!value)return minWidth;var extraSpace=3,realWidth=(0,_utils_measureText__WEBPACK_IMPORTED_MODULE_3__.kD)(value.toString(),14).width/8+extraSpace;if(minWidth&&realWidth<minWidth)return minWidth;if(maxWidth&&realWidth>maxWidth)return maxWidth;return realWidth}(value.toString(),minWidth,maxWidth))}),[value,minWidth,maxWidth]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Input__WEBPACK_IMPORTED_MODULE_2__.p,_object_spread_props(function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){_define_property(target,key,source[key])}))}return target}({},restProps),{ref:ref,value:value.toString(),onChange:function(event){setValue(event.currentTarget.value)},width:inputWidth,onBlur:function(event){onBlur?onBlur(event):onCommitChange&&onCommitChange(event)},onKeyDown:function(event){onKeyDown?onKeyDown(event):"Enter"===event.key&&onCommitChange&&onCommitChange(event)},"data-testid":"autosize-input"}))}));AutoSizeInput.displayName="AutoSizeInput";try{AutoSizeInput.displayName="AutoSizeInput",AutoSizeInput.__docgenInfo={description:"",displayName:"AutoSizeInput",props:{minWidth:{defaultValue:null,description:"Sets the min-width to a multiple of 8px. Default value is 10",name:"minWidth",required:!1,type:{name:"number"}},width:{defaultValue:null,description:"Sets the width to a multiple of 8px. Should only be used with inline forms. Setting width of the container is preferred in other cases.",name:"width",required:!1,type:{name:"number"}},prefix:{defaultValue:null,description:"Show an icon as a prefix in the input",name:"prefix",required:!1,type:{name:"ReactNode"}},invalid:{defaultValue:null,description:"Show an invalid state around the input",name:"invalid",required:!1,type:{name:"boolean"}},suffix:{defaultValue:null,description:"Show an icon as a suffix in the input",name:"suffix",required:!1,type:{name:"ReactNode"}},loading:{defaultValue:null,description:"Show a loading indicator as a suffix in the input",name:"loading",required:!1,type:{name:"boolean"}},addonBefore:{defaultValue:null,description:"Add a component as an addon before the input",name:"addonBefore",required:!1,type:{name:"ReactNode"}},addonAfter:{defaultValue:null,description:"Add a component as an addon after the input",name:"addonAfter",required:!1,type:{name:"ReactNode"}},maxWidth:{defaultValue:null,description:"Sets the max-width to a multiple of 8px.",name:"maxWidth",required:!1,type:{name:"number"}},onCommitChange:{defaultValue:null,description:"onChange function that will be run on onBlur and onKeyPress with enter",name:"onCommitChange",required:!1,type:{name:"((event: FormEvent<HTMLInputElement>) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Input/AutoSizeInput.tsx#AutoSizeInput"]={docgenInfo:AutoSizeInput.__docgenInfo,name:"AutoSizeInput",path:"src/components/Input/AutoSizeInput.tsx#AutoSizeInput"})}catch(__react_docgen_typescript_loader_error){}},"./src/utils/measureText.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var _context;__webpack_require__.d(__webpack_exports__,{Vr:function(){return calculateFontSize},Yc:function(){return getCanvasContext},kD:function(){return measureText}});var cache=new Map,cacheLimit=500,ctxFontStyle="";function getCanvasContext(){return _context||(_context=document.createElement("canvas").getContext("2d")),_context}function measureText(text,fontSize){var fontStyle="".concat(arguments.length>2&&void 0!==arguments[2]?arguments[2]:400," ").concat(fontSize,"px 'Inter'"),cacheKey=text+fontStyle,fromCache=cache.get(cacheKey);if(fromCache)return fromCache;var context=getCanvasContext();ctxFontStyle!==fontStyle&&(context.font=ctxFontStyle=fontStyle);var metrics=context.measureText(text);return cache.size===cacheLimit&&cache.clear(),cache.set(cacheKey,metrics),metrics}function calculateFontSize(text,width,height,lineHeight,maxSize,fontWeight){var fontSizeBasedOnWidth=width/(measureText(text,14,fontWeight).width+2)*14,fontSizeBasedOnHeight=height/lineHeight,optimalSize=Math.min(fontSizeBasedOnHeight,fontSizeBasedOnWidth);return Math.min(optimalSize,null!=maxSize?maxSize:optimalSize)}}}]);