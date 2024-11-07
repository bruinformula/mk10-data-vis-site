"use strict";(self.webpackChunk_grafana_ui=self.webpackChunk_grafana_ui||[]).push([[2962],{"../grafana-data/src/datetime/formats.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _to_consumable_array(arr){return function _array_without_holes(arr){if(Array.isArray(arr))return _array_like_to_array(arr)}(arr)||function _iterable_to_array(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}(arr)||function _unsupported_iterable_to_array(o,minLen){if(!o)return;if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}(arr)||function _non_iterable_spread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}__webpack_require__.d(__webpack_exports__,{Od:function(){return localTimeFormat},WC:function(){return systemDateFormats}});var DEFAULT_SYSTEM_DATE_FORMAT="YYYY-MM-DD HH:mm:ss";function localTimeFormat(options,locale,fallback){if(missingIntlDateTimeFormatSupport())return null!=fallback?fallback:DEFAULT_SYSTEM_DATE_FORMAT;!locale&&navigator&&(locale=_to_consumable_array(navigator.languages));var dateTimeFormat=new Intl.DateTimeFormat(locale||void 0,options),parts=dateTimeFormat.formatToParts(new Date),mapping={year:"YYYY",month:"MM",day:"DD",hour:dateTimeFormat.resolvedOptions().hour12?"hh":"HH",minute:"mm",second:"ss",weekday:"ddd",era:"N",dayPeriod:"A",timeZoneName:"Z"};return parts.map((function(part){return mapping[part.type]||part.value})).join("")}var systemDateFormats=new(function(){function SystemDateFormatsState(){!function _class_call_check(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,SystemDateFormatsState),_define_property(this,"fullDate",DEFAULT_SYSTEM_DATE_FORMAT),_define_property(this,"fullDateMS","YYYY-MM-DD HH:mm:ss.SSS"),_define_property(this,"interval",{millisecond:"HH:mm:ss.SSS",second:"HH:mm:ss",minute:"HH:mm",hour:"MM/DD HH:mm",day:"MM/DD",month:"YYYY-MM",year:"YYYY"})}return function _create_class(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Constructor}(SystemDateFormatsState,[{key:"update",value:function update(settings){this.fullDate=settings.fullDate,this.interval=settings.interval,settings.useBrowserLocale&&this.useBrowserLocale()}},{key:"useBrowserLocale",value:function useBrowserLocale(){this.fullDate=localTimeFormat({year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"}),this.fullDateMS=this.fullDate.replace("ss","ss.SSS"),this.interval.millisecond=localTimeFormat({hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1},null,this.interval.second).replace("ss","ss.SSS"),this.interval.second=localTimeFormat({hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1},null,this.interval.second),this.interval.minute=localTimeFormat({hour:"2-digit",minute:"2-digit",hour12:!1},null,this.interval.minute),this.interval.hour=localTimeFormat({month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",hour12:!1},null,this.interval.hour),this.interval.day=localTimeFormat({month:"2-digit",day:"2-digit",hour12:!1},null,this.interval.day),this.interval.month=localTimeFormat({year:"numeric",month:"2-digit",hour12:!1},null,this.interval.month)}},{key:"getTimeFieldUnit",value:function getTimeFieldUnit(useMsResolution){return"time:".concat(useMsResolution?this.fullDateMS:this.fullDate)}}]),SystemDateFormatsState}()),missingIntlDateTimeFormatSupport=function(){return!("DateTimeFormat"in Intl)||!("formatToParts"in Intl.DateTimeFormat.prototype)}},"../grafana-data/src/datetime/formatter.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{LE:function(){return dateTimeFormat},fq:function(){return dateTimeFormatTimeAgo},jw:function(){return timeZoneAbbrevation}});var moment_timezone__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/moment-timezone/index.js"),moment_timezone__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(moment_timezone__WEBPACK_IMPORTED_MODULE_0__),_common__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../grafana-data/src/datetime/common.ts"),_formats__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../grafana-data/src/datetime/formats.ts"),_moment_wrapper__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../grafana-data/src/datetime/moment_wrapper.ts"),dateTimeFormat=function(dateInUtc,options){return toTz(dateInUtc,(0,_common__WEBPACK_IMPORTED_MODULE_1__.O)(options)).format(getFormat(options))},dateTimeFormatTimeAgo=function(dateInUtc,options){return toTz(dateInUtc,(0,_common__WEBPACK_IMPORTED_MODULE_1__.O)(options)).fromNow()},timeZoneAbbrevation=function(dateInUtc,options){return toTz(dateInUtc,(0,_common__WEBPACK_IMPORTED_MODULE_1__.O)(options)).format("z")},getFormat=function(options){var _options_format,_options_format1;return(null==options?void 0:options.defaultWithMS)?null!==(_options_format=null==options?void 0:options.format)&&void 0!==_options_format?_options_format:_formats__WEBPACK_IMPORTED_MODULE_2__.WC.fullDateMS:null!==(_options_format1=null==options?void 0:options.format)&&void 0!==_options_format1?_options_format1:_formats__WEBPACK_IMPORTED_MODULE_2__.WC.fullDate},toTz=function(dateInUtc,timeZone){var date=dateInUtc,zone=moment_timezone__WEBPACK_IMPORTED_MODULE_0___default().tz.zone(timeZone);return zone&&zone.name?(0,_moment_wrapper__WEBPACK_IMPORTED_MODULE_3__.AN)((0,_moment_wrapper__WEBPACK_IMPORTED_MODULE_3__.yT)(date)).tz(zone.name):"utc"===timeZone?(0,_moment_wrapper__WEBPACK_IMPORTED_MODULE_3__.AN)((0,_moment_wrapper__WEBPACK_IMPORTED_MODULE_3__.yT)(date)):(0,_moment_wrapper__WEBPACK_IMPORTED_MODULE_3__.AN)((0,_moment_wrapper__WEBPACK_IMPORTED_MODULE_3__.yT)(date)).local()}},"../grafana-data/src/valueFormats/valueFormats.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Qc:function(){return booleanValueFormatter},cN:function(){return formattedValueToString},j_:function(){return getValueFormat},Ke:function(){return getValueFormats},j9:function(){return isBooleanUnit},Hg:function(){return locale},yP:function(){return scaledUnits},UR:function(){return simpleCountUnit},cH:function(){return stringFormater},Mg:function(){return toFixed},gZ:function(){return toFixedScaled},G8:function(){return toFixedUnit}});var lodash=__webpack_require__("../../node_modules/lodash/lodash.js");function toPercent(size,decimals){return null===size?{text:""}:{text:toFixed(size,decimals),suffix:"%"}}function toPercentUnit(size,decimals){return null===size?{text:""}:{text:toFixed(100*size,decimals),suffix:"%"}}function toHex0x(value,decimals){if(null==value)return{text:""};var asHex=toHex(value,decimals);return"-"===asHex.text.substring(0,1)?asHex.text="-0x"+asHex.text.substring(1):asHex.text="0x"+asHex.text,asHex}function toHex(value,decimals){return null==value?{text:""}:{text:parseFloat(toFixed(value,decimals)).toString(16).toUpperCase()}}function sci(value,decimals){return null==value?{text:""}:{text:value.toExponential(null!=decimals?decimals:void 0)}}var Interval,formats=__webpack_require__("../grafana-data/src/datetime/formats.ts"),formatter=__webpack_require__("../grafana-data/src/datetime/formatter.ts"),moment_wrapper=__webpack_require__("../grafana-data/src/datetime/moment_wrapper.ts");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}!function(Interval){Interval.Year="year",Interval.Month="month",Interval.Week="week",Interval.Day="day",Interval.Hour="hour",Interval.Minute="minute",Interval.Second="second",Interval.Millisecond="millisecond"}(Interval||(Interval={}));var _obj,UNITS=["year","month","week","day","hour","minute","second","millisecond"],INTERVALS_IN_SECONDS=(_define_property(_obj={},"year",31536e3),_define_property(_obj,"month",2592e3),_define_property(_obj,"week",604800),_define_property(_obj,"day",86400),_define_property(_obj,"hour",3600),_define_property(_obj,"minute",60),_define_property(_obj,"second",1),_define_property(_obj,"millisecond",.001),_obj);function toNanoSeconds(size,decimals){return null===size?{text:""}:Math.abs(size)<1e3?{text:toFixed(size,decimals),suffix:" ns"}:Math.abs(size)<1e6?toFixedScaled(size/1e3,decimals," µs"):Math.abs(size)<1e9?toFixedScaled(size/1e6,decimals," ms"):Math.abs(size)<6e10?toFixedScaled(size/1e9,decimals," s"):Math.abs(size)<36e11?toFixedScaled(size/6e10,decimals," min"):Math.abs(size)<864e11?toFixedScaled(size/36e11,decimals," hour"):toFixedScaled(size/864e11,decimals," day")}function toMicroSeconds(size,decimals){return null===size?{text:""}:Math.abs(size)<1e3?{text:toFixed(size,decimals),suffix:" µs"}:Math.abs(size)<1e6?toFixedScaled(size/1e3,decimals," ms"):toFixedScaled(size/1e6,decimals," s")}function toMilliSeconds(size,decimals,scaledDecimals){return null===size?{text:""}:Math.abs(size)<1e3?{text:toFixed(size,decimals),suffix:" ms"}:Math.abs(size)<6e4?toFixedScaled(size/1e3,decimals," s"):Math.abs(size)<36e5?toFixedScaled(size/6e4,decimals," min"):Math.abs(size)<864e5?toFixedScaled(size/36e5,decimals," hour"):Math.abs(size)<31536e6?toFixedScaled(size/864e5,decimals," day"):toFixedScaled(size/31536e6,decimals," year")}function toSeconds(size,decimals){return null===size?{text:""}:0===size?{text:"0",suffix:" s"}:Math.abs(size)<1e-6?toFixedScaled(1e9*size,decimals," ns"):Math.abs(size)<.001?toFixedScaled(1e6*size,decimals," µs"):Math.abs(size)<1?toFixedScaled(1e3*size,decimals," ms"):Math.abs(size)<60?{text:toFixed(size,decimals),suffix:" s"}:Math.abs(size)<3600?toFixedScaled(size/60,decimals," min"):Math.abs(size)<86400?toFixedScaled(size/3600,decimals," hour"):Math.abs(size)<604800?toFixedScaled(size/86400,decimals," day"):Math.abs(size)<31536e3?toFixedScaled(size/604800,decimals," week"):toFixedScaled(size/31556900,decimals," year")}function toMinutes(size,decimals){return null===size?{text:""}:Math.abs(size)<60?{text:toFixed(size,decimals),suffix:" min"}:Math.abs(size)<1440?toFixedScaled(size/60,decimals," hour"):Math.abs(size)<10080?toFixedScaled(size/1440,decimals," day"):Math.abs(size)<604800?toFixedScaled(size/10080,decimals," week"):toFixedScaled(size/525948,decimals," year")}function toHours(size,decimals){return null===size?{text:""}:Math.abs(size)<24?{text:toFixed(size,decimals),suffix:" hour"}:Math.abs(size)<168?toFixedScaled(size/24,decimals," day"):Math.abs(size)<8760?toFixedScaled(size/168,decimals," week"):toFixedScaled(size/8760,decimals," year")}function toDays(size,decimals){return null===size?{text:""}:Math.abs(size)<7?toFixedScaled(size,decimals," day"):Math.abs(size)<365?toFixedScaled(size/7,decimals," week"):toFixedScaled(size/365,decimals," year")}function toDuration(size,decimals,timeScale){if(null===size)return{text:""};if(0===size)return{text:"0",suffix:" "+timeScale+"s"};if(size<0){var v=toDuration(-size,decimals,timeScale);return v.suffix||(v.suffix=""),v.suffix+=" ago",v}size*=1e3*INTERVALS_IN_SECONDS[timeScale];var strings=[],decrementDecimals=!1,decimalsCount=0;null!=decimals&&(decimalsCount=decimals);for(var i=0;i<UNITS.length&&decimalsCount>=0;i++){var interval=1e3*INTERVALS_IN_SECONDS[UNITS[i]],value=size/interval;if(value>=1||decrementDecimals){decrementDecimals=!0;var floor=Math.floor(value),unit=UNITS[i]+(1!==floor?"s":"");strings.push(floor+" "+unit),size%=interval,decimalsCount--}}return{text:strings.join(", ")}}function toClock(size,decimals){if(null===size)return{text:""};if(size<1e3)return{text:(0,moment_wrapper.yT)(size).format("SSS\\m\\s")};if(size<6e4){var format="ss\\s:SSS\\m\\s";return 0===decimals&&(format="ss\\s"),{text:(0,moment_wrapper.yT)(size).format(format)}}if(size<36e5){var format1="mm\\m:ss\\s:SSS\\m\\s";return 0===decimals?format1="mm\\m":1===decimals&&(format1="mm\\m:ss\\s"),{text:(0,moment_wrapper.yT)(size).format(format1)}}var format2="mm\\m:ss\\s:SSS\\m\\s",hours="".concat(Math.floor((0,moment_wrapper.Ah)(size,"milliseconds").asHours()),"h");return 0===decimals?format2="":1===decimals?format2="mm\\m":2===decimals&&(format2="mm\\m:ss\\s"),{text:format2?"".concat(hours,":").concat((0,moment_wrapper.yT)(size).format(format2)):hours}}function toDurationInMilliseconds(size,decimals){return toDuration(size,decimals,"millisecond")}function toDurationInSeconds(size,decimals){return toDuration(size,decimals,"second")}function toDurationInHoursMinutesSeconds(size){if(size<0){var v=toDurationInHoursMinutesSeconds(-size);return v.suffix||(v.suffix=""),v.suffix+=" ago",v}var strings=[],numHours=Math.floor(size/3600),numMinutes=Math.floor(size%3600/60),numSeconds=Math.floor(size%3600%60);return numHours>9?strings.push(""+numHours):strings.push("0"+numHours),numMinutes>9?strings.push(""+numMinutes):strings.push("0"+numMinutes),numSeconds>9?strings.push(""+numSeconds):strings.push("0"+numSeconds),{text:strings.join(":")}}function toDurationInDaysHoursMinutesSeconds(size){if(size<0){var v=toDurationInDaysHoursMinutesSeconds(-size);return v.suffix||(v.suffix=""),v.suffix+=" ago",v}var dayString="",numDays=Math.floor(size/86400);return numDays>0&&(dayString=numDays+" d "),{text:dayString+toDurationInHoursMinutesSeconds(size-24*numDays*3600).text}}function toTimeTicks(size,decimals){return toSeconds(size/100,decimals)}function toClockMilliseconds(size,decimals){return toClock(size,decimals)}function toClockSeconds(size,decimals){return toClock(1e3*size,decimals)}function toDateTimeValueFormatter(pattern,todayPattern){return function(value,decimals,scaledDecimals,timeZone){return todayPattern&&(0,moment_wrapper.KQ)().isSame(value,"day")?{text:(0,formatter.LE)(value,{format:todayPattern,timeZone:timeZone})}:{text:(0,formatter.LE)(value,{format:pattern,timeZone:timeZone})}}}var dateTimeAsIso=toDateTimeValueFormatter("YYYY-MM-DD HH:mm:ss"),dateTimeAsIsoNoDateIfToday=toDateTimeValueFormatter("YYYY-MM-DD HH:mm:ss","HH:mm:ss"),dateTimeAsUS=toDateTimeValueFormatter("MM/DD/YYYY h:mm:ss a"),dateTimeAsUSNoDateIfToday=toDateTimeValueFormatter("MM/DD/YYYY h:mm:ss a","h:mm:ss a");function dateTimeSystemFormatter(value,decimals,scaledDecimals,timeZone,showMs){return{text:(0,formatter.LE)(value,{format:showMs?formats.WC.fullDateMS:formats.WC.fullDate,timeZone:timeZone})}}function dateTimeFromNow(value,decimals,scaledDecimals,timeZone){return{text:(0,formatter.fq)(value,{timeZone:timeZone})}}function currency(symbol,asSuffix){var scaler=scaledUnits(1e3,["","K","M","B","T"]);return function(value,decimals,scaledDecimals){if(null==value)return{text:""};var isNegative=value<0;isNegative&&(value=Math.abs(value));var _scaled_prefix,scaled=scaler(value,decimals,scaledDecimals);(asSuffix?scaled.suffix=void 0!==scaled.suffix?"".concat(scaled.suffix).concat(symbol):void 0:scaled.prefix=symbol,isNegative)&&(scaled.prefix="-".concat((null===(_scaled_prefix=scaled.prefix)||void 0===_scaled_prefix?void 0:_scaled_prefix.length)?scaled.prefix:""));return scaled}}var SI_PREFIXES=["f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"],SI_BASE_INDEX=SI_PREFIXES.indexOf("");var BIN_PREFIXES=["","Ki","Mi","Gi","Ti","Pi","Ei","Zi","Yi"];function binaryPrefix(unit){var offset=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return scaledUnits(1024,BIN_PREFIXES.map((function(p){return" "+p+unit})),offset)}function SIPrefix(unit){var offset=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return scaledUnits(1e3,SI_PREFIXES.map((function(p){return" "+p+unit})),SI_BASE_INDEX+offset)}var getCategories=function(){return[{name:"Misc",formats:[{name:"Number",id:"none",fn:toFixedUnit("")},{name:"String",id:"string",fn:stringFormater},{name:"short",id:"short",fn:scaledUnits(1e3,[""," K"," Mil"," Bil"," Tri"," Quadr"," Quint"," Sext"," Sept"])},{name:"SI short",id:"sishort",fn:SIPrefix("")},{name:"Percent (0-100)",id:"percent",fn:toPercent},{name:"Percent (0.0-1.0)",id:"percentunit",fn:toPercentUnit},{name:"Humidity (%H)",id:"humidity",fn:toFixedUnit("%H")},{name:"Decibel",id:"dB",fn:toFixedUnit("dB")},{name:"Candela (cd)",id:"candela",fn:SIPrefix("cd")},{name:"Hexadecimal (0x)",id:"hex0x",fn:toHex0x},{name:"Hexadecimal",id:"hex",fn:toHex},{name:"Scientific notation",id:"sci",fn:sci},{name:"Locale format",id:"locale",fn:locale},{name:"Pixels",id:"pixel",fn:toFixedUnit("px")}]},{name:"Acceleration",formats:[{name:"Meters/sec²",id:"accMS2",fn:toFixedUnit("m/sec²")},{name:"Feet/sec²",id:"accFS2",fn:toFixedUnit("f/sec²")},{name:"G unit",id:"accG",fn:toFixedUnit("g")}]},{name:"Angle",formats:[{name:"Degrees (°)",id:"degree",fn:toFixedUnit("°")},{name:"Radians",id:"radian",fn:toFixedUnit("rad")},{name:"Gradian",id:"grad",fn:toFixedUnit("grad")},{name:"Arc Minutes",id:"arcmin",fn:toFixedUnit("arcmin")},{name:"Arc Seconds",id:"arcsec",fn:toFixedUnit("arcsec")}]},{name:"Area",formats:[{name:"Square Meters (m²)",id:"areaM2",fn:toFixedUnit("m²")},{name:"Square Feet (ft²)",id:"areaF2",fn:toFixedUnit("ft²")},{name:"Square Miles (mi²)",id:"areaMI2",fn:toFixedUnit("mi²")},{name:"Acres (ac)",id:"acres",fn:toFixedUnit("ac")},{name:"Hectares (ha)",id:"hectares",fn:toFixedUnit("ha")}]},{name:"Computation",formats:[{name:"FLOP/s",id:"flops",fn:SIPrefix("FLOPS")},{name:"MFLOP/s",id:"mflops",fn:SIPrefix("FLOPS",2)},{name:"GFLOP/s",id:"gflops",fn:SIPrefix("FLOPS",3)},{name:"TFLOP/s",id:"tflops",fn:SIPrefix("FLOPS",4)},{name:"PFLOP/s",id:"pflops",fn:SIPrefix("FLOPS",5)},{name:"EFLOP/s",id:"eflops",fn:SIPrefix("FLOPS",6)},{name:"ZFLOP/s",id:"zflops",fn:SIPrefix("FLOPS",7)},{name:"YFLOP/s",id:"yflops",fn:SIPrefix("FLOPS",8)}]},{name:"Concentration",formats:[{name:"parts-per-million (ppm)",id:"ppm",fn:toFixedUnit("ppm")},{name:"parts-per-billion (ppb)",id:"conppb",fn:toFixedUnit("ppb")},{name:"nanogram per cubic meter (ng/m³)",id:"conngm3",fn:toFixedUnit("ng/m³")},{name:"nanogram per normal cubic meter (ng/Nm³)",id:"conngNm3",fn:toFixedUnit("ng/Nm³")},{name:"microgram per cubic meter (μg/m³)",id:"conμgm3",fn:toFixedUnit("μg/m³")},{name:"microgram per normal cubic meter (μg/Nm³)",id:"conμgNm3",fn:toFixedUnit("μg/Nm³")},{name:"milligram per cubic meter (mg/m³)",id:"conmgm3",fn:toFixedUnit("mg/m³")},{name:"milligram per normal cubic meter (mg/Nm³)",id:"conmgNm3",fn:toFixedUnit("mg/Nm³")},{name:"gram per cubic meter (g/m³)",id:"congm3",fn:toFixedUnit("g/m³")},{name:"gram per normal cubic meter (g/Nm³)",id:"congNm3",fn:toFixedUnit("g/Nm³")},{name:"milligrams per decilitre (mg/dL)",id:"conmgdL",fn:toFixedUnit("mg/dL")},{name:"millimoles per litre (mmol/L)",id:"conmmolL",fn:toFixedUnit("mmol/L")}]},{name:"Currency",formats:[{name:"Dollars ($)",id:"currencyUSD",fn:currency("$")},{name:"Pounds (£)",id:"currencyGBP",fn:currency("£")},{name:"Euro (€)",id:"currencyEUR",fn:currency("€")},{name:"Yen (¥)",id:"currencyJPY",fn:currency("¥")},{name:"Rubles (₽)",id:"currencyRUB",fn:currency("₽")},{name:"Hryvnias (₴)",id:"currencyUAH",fn:currency("₴")},{name:"Real (R$)",id:"currencyBRL",fn:currency("R$")},{name:"Danish Krone (kr)",id:"currencyDKK",fn:currency("kr",!0)},{name:"Icelandic Króna (kr)",id:"currencyISK",fn:currency("kr",!0)},{name:"Norwegian Krone (kr)",id:"currencyNOK",fn:currency("kr",!0)},{name:"Swedish Krona (kr)",id:"currencySEK",fn:currency("kr",!0)},{name:"Czech koruna (czk)",id:"currencyCZK",fn:currency("czk")},{name:"Swiss franc (CHF)",id:"currencyCHF",fn:currency("CHF")},{name:"Polish Złoty (PLN)",id:"currencyPLN",fn:currency("PLN")},{name:"Bitcoin (฿)",id:"currencyBTC",fn:currency("฿")},{name:"Milli Bitcoin (฿)",id:"currencymBTC",fn:currency("mBTC")},{name:"Micro Bitcoin (฿)",id:"currencyμBTC",fn:currency("μBTC")},{name:"South African Rand (R)",id:"currencyZAR",fn:currency("R")},{name:"Indian Rupee (₹)",id:"currencyINR",fn:currency("₹")},{name:"South Korean Won (₩)",id:"currencyKRW",fn:currency("₩")},{name:"Indonesian Rupiah (Rp)",id:"currencyIDR",fn:currency("Rp")},{name:"Philippine Peso (PHP)",id:"currencyPHP",fn:currency("PHP")},{name:"Vietnamese Dong (VND)",id:"currencyVND",fn:currency("đ",!0)},{name:"Turkish Lira (₺)",id:"currencyTRY",fn:currency("₺",!0)},{name:"Malaysian Ringgit (RM)",id:"currencyMYR",fn:currency("RM")},{name:"CFP franc (XPF)",id:"currencyXPF",fn:currency("XPF")},{name:"Bulgarian Lev (BGN)",id:"currencyBGN",fn:currency("BGN")},{name:"Guaraní (₲)",id:"currencyPYG",fn:currency("₲")},{name:"Uruguay Peso (UYU)",id:"currencyUYU",fn:currency("UYU")},{name:"Israeli New Shekels (₪)",id:"currencyILS",fn:currency("₪")}]},{name:"Data",formats:[{name:"bytes(IEC)",id:"bytes",fn:binaryPrefix("B")},{name:"bytes(SI)",id:"decbytes",fn:SIPrefix("B")},{name:"bits(IEC)",id:"bits",fn:binaryPrefix("b")},{name:"bits(SI)",id:"decbits",fn:SIPrefix("b")},{name:"kibibytes",id:"kbytes",fn:binaryPrefix("B",1)},{name:"kilobytes",id:"deckbytes",fn:SIPrefix("B",1)},{name:"mebibytes",id:"mbytes",fn:binaryPrefix("B",2)},{name:"megabytes",id:"decmbytes",fn:SIPrefix("B",2)},{name:"gibibytes",id:"gbytes",fn:binaryPrefix("B",3)},{name:"gigabytes",id:"decgbytes",fn:SIPrefix("B",3)},{name:"tebibytes",id:"tbytes",fn:binaryPrefix("B",4)},{name:"terabytes",id:"dectbytes",fn:SIPrefix("B",4)},{name:"pebibytes",id:"pbytes",fn:binaryPrefix("B",5)},{name:"petabytes",id:"decpbytes",fn:SIPrefix("B",5)}]},{name:"Data rate",formats:[{name:"packets/sec",id:"pps",fn:SIPrefix("p/s")},{name:"bytes/sec(IEC)",id:"binBps",fn:binaryPrefix("B/s")},{name:"bytes/sec(SI)",id:"Bps",fn:SIPrefix("B/s")},{name:"bits/sec(IEC)",id:"binbps",fn:binaryPrefix("b/s")},{name:"bits/sec(SI)",id:"bps",fn:SIPrefix("b/s")},{name:"kibibytes/sec",id:"KiBs",fn:binaryPrefix("B/s",1)},{name:"kibibits/sec",id:"Kibits",fn:binaryPrefix("b/s",1)},{name:"kilobytes/sec",id:"KBs",fn:SIPrefix("B/s",1)},{name:"kilobits/sec",id:"Kbits",fn:SIPrefix("b/s",1)},{name:"mebibytes/sec",id:"MiBs",fn:binaryPrefix("B/s",2)},{name:"mebibits/sec",id:"Mibits",fn:binaryPrefix("b/s",2)},{name:"megabytes/sec",id:"MBs",fn:SIPrefix("B/s",2)},{name:"megabits/sec",id:"Mbits",fn:SIPrefix("b/s",2)},{name:"gibibytes/sec",id:"GiBs",fn:binaryPrefix("B/s",3)},{name:"gibibits/sec",id:"Gibits",fn:binaryPrefix("b/s",3)},{name:"gigabytes/sec",id:"GBs",fn:SIPrefix("B/s",3)},{name:"gigabits/sec",id:"Gbits",fn:SIPrefix("b/s",3)},{name:"tebibytes/sec",id:"TiBs",fn:binaryPrefix("B/s",4)},{name:"tebibits/sec",id:"Tibits",fn:binaryPrefix("b/s",4)},{name:"terabytes/sec",id:"TBs",fn:SIPrefix("B/s",4)},{name:"terabits/sec",id:"Tbits",fn:SIPrefix("b/s",4)},{name:"pebibytes/sec",id:"PiBs",fn:binaryPrefix("B/s",5)},{name:"pebibits/sec",id:"Pibits",fn:binaryPrefix("b/s",5)},{name:"petabytes/sec",id:"PBs",fn:SIPrefix("B/s",5)},{name:"petabits/sec",id:"Pbits",fn:SIPrefix("b/s",5)}]},{name:"Date & time",formats:[{name:"Datetime ISO",id:"dateTimeAsIso",fn:dateTimeAsIso},{name:"Datetime ISO (No date if today)",id:"dateTimeAsIsoNoDateIfToday",fn:dateTimeAsIsoNoDateIfToday},{name:"Datetime US",id:"dateTimeAsUS",fn:dateTimeAsUS},{name:"Datetime US (No date if today)",id:"dateTimeAsUSNoDateIfToday",fn:dateTimeAsUSNoDateIfToday},{name:"Datetime local",id:"dateTimeAsLocal",fn:toDateTimeValueFormatter((0,formats.Od)({year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"}))},{name:"Datetime local (No date if today)",id:"dateTimeAsLocalNoDateIfToday",fn:toDateTimeValueFormatter((0,formats.Od)({year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"}),(0,formats.Od)({hour:"2-digit",minute:"2-digit",second:"2-digit"}))},{name:"Datetime default",id:"dateTimeAsSystem",fn:dateTimeSystemFormatter},{name:"From Now",id:"dateTimeFromNow",fn:dateTimeFromNow}]},{name:"Energy",formats:[{name:"Watt (W)",id:"watt",fn:SIPrefix("W")},{name:"Kilowatt (kW)",id:"kwatt",fn:SIPrefix("W",1)},{name:"Megawatt (MW)",id:"megwatt",fn:SIPrefix("W",2)},{name:"Gigawatt (GW)",id:"gwatt",fn:SIPrefix("W",3)},{name:"Milliwatt (mW)",id:"mwatt",fn:SIPrefix("W",-1)},{name:"Watt per square meter (W/m²)",id:"Wm2",fn:toFixedUnit("W/m²")},{name:"Volt-Ampere (VA)",id:"voltamp",fn:SIPrefix("VA")},{name:"Kilovolt-Ampere (kVA)",id:"kvoltamp",fn:SIPrefix("VA",1)},{name:"Volt-Ampere reactive (VAr)",id:"voltampreact",fn:SIPrefix("VAr")},{name:"Kilovolt-Ampere reactive (kVAr)",id:"kvoltampreact",fn:SIPrefix("VAr",1)},{name:"Watt-hour (Wh)",id:"watth",fn:SIPrefix("Wh")},{name:"Watt-hour per Kilogram (Wh/kg)",id:"watthperkg",fn:SIPrefix("Wh/kg")},{name:"Kilowatt-hour (kWh)",id:"kwatth",fn:SIPrefix("Wh",1)},{name:"Kilowatt-min (kWm)",id:"kwattm",fn:SIPrefix("W-Min",1)},{name:"Megawatt-hour (MWh)",id:"mwatth",fn:SIPrefix("Wh",2)},{name:"Ampere-hour (Ah)",id:"amph",fn:SIPrefix("Ah")},{name:"Kiloampere-hour (kAh)",id:"kamph",fn:SIPrefix("Ah",1)},{name:"Milliampere-hour (mAh)",id:"mamph",fn:SIPrefix("Ah",-1)},{name:"Joule (J)",id:"joule",fn:SIPrefix("J")},{name:"Electron volt (eV)",id:"ev",fn:SIPrefix("eV")},{name:"Ampere (A)",id:"amp",fn:SIPrefix("A")},{name:"Kiloampere (kA)",id:"kamp",fn:SIPrefix("A",1)},{name:"Milliampere (mA)",id:"mamp",fn:SIPrefix("A",-1)},{name:"Volt (V)",id:"volt",fn:SIPrefix("V")},{name:"Kilovolt (kV)",id:"kvolt",fn:SIPrefix("V",1)},{name:"Millivolt (mV)",id:"mvolt",fn:SIPrefix("V",-1)},{name:"Decibel-milliwatt (dBm)",id:"dBm",fn:SIPrefix("dBm")},{name:"Milliohm (mΩ)",id:"mohm",fn:SIPrefix("Ω",-1)},{name:"Ohm (Ω)",id:"ohm",fn:SIPrefix("Ω")},{name:"Kiloohm (kΩ)",id:"kohm",fn:SIPrefix("Ω",1)},{name:"Megaohm (MΩ)",id:"Mohm",fn:SIPrefix("Ω",2)},{name:"Farad (F)",id:"farad",fn:SIPrefix("F")},{name:"Microfarad (µF)",id:"µfarad",fn:SIPrefix("F",-2)},{name:"Nanofarad (nF)",id:"nfarad",fn:SIPrefix("F",-3)},{name:"Picofarad (pF)",id:"pfarad",fn:SIPrefix("F",-4)},{name:"Femtofarad (fF)",id:"ffarad",fn:SIPrefix("F",-5)},{name:"Henry (H)",id:"henry",fn:SIPrefix("H")},{name:"Millihenry (mH)",id:"mhenry",fn:SIPrefix("H",-1)},{name:"Microhenry (µH)",id:"µhenry",fn:SIPrefix("H",-2)},{name:"Lumens (Lm)",id:"lumens",fn:SIPrefix("Lm")}]},{name:"Flow",formats:[{name:"Gallons/min (gpm)",id:"flowgpm",fn:toFixedUnit("gpm")},{name:"Cubic meters/sec (cms)",id:"flowcms",fn:toFixedUnit("cms")},{name:"Cubic feet/sec (cfs)",id:"flowcfs",fn:toFixedUnit("cfs")},{name:"Cubic feet/min (cfm)",id:"flowcfm",fn:toFixedUnit("cfm")},{name:"Litre/hour",id:"litreh",fn:toFixedUnit("L/h")},{name:"Litre/min (L/min)",id:"flowlpm",fn:toFixedUnit("L/min")},{name:"milliLitre/min (mL/min)",id:"flowmlpm",fn:toFixedUnit("mL/min")},{name:"Lux (lx)",id:"lux",fn:toFixedUnit("lux")}]},{name:"Force",formats:[{name:"Newton-meters (Nm)",id:"forceNm",fn:SIPrefix("Nm")},{name:"Kilonewton-meters (kNm)",id:"forcekNm",fn:SIPrefix("Nm",1)},{name:"Newtons (N)",id:"forceN",fn:SIPrefix("N")},{name:"Kilonewtons (kN)",id:"forcekN",fn:SIPrefix("N",1)}]},{name:"Hash rate",formats:[{name:"hashes/sec",id:"Hs",fn:SIPrefix("H/s")},{name:"kilohashes/sec",id:"KHs",fn:SIPrefix("H/s",1)},{name:"megahashes/sec",id:"MHs",fn:SIPrefix("H/s",2)},{name:"gigahashes/sec",id:"GHs",fn:SIPrefix("H/s",3)},{name:"terahashes/sec",id:"THs",fn:SIPrefix("H/s",4)},{name:"petahashes/sec",id:"PHs",fn:SIPrefix("H/s",5)},{name:"exahashes/sec",id:"EHs",fn:SIPrefix("H/s",6)}]},{name:"Mass",formats:[{name:"milligram (mg)",id:"massmg",fn:SIPrefix("g",-1)},{name:"gram (g)",id:"massg",fn:SIPrefix("g")},{name:"pound (lb)",id:"masslb",fn:toFixedUnit("lb")},{name:"kilogram (kg)",id:"masskg",fn:SIPrefix("g",1)},{name:"metric ton (t)",id:"masst",fn:toFixedUnit("t")}]},{name:"Length",formats:[{name:"millimeter (mm)",id:"lengthmm",fn:SIPrefix("m",-1)},{name:"inch (in)",id:"lengthin",fn:toFixedUnit("in")},{name:"feet (ft)",id:"lengthft",fn:toFixedUnit("ft")},{name:"meter (m)",id:"lengthm",fn:SIPrefix("m")},{name:"kilometer (km)",id:"lengthkm",fn:SIPrefix("m",1)},{name:"mile (mi)",id:"lengthmi",fn:toFixedUnit("mi")}]},{name:"Pressure",formats:[{name:"Millibars",id:"pressurembar",fn:SIPrefix("bar",-1)},{name:"Bars",id:"pressurebar",fn:SIPrefix("bar")},{name:"Kilobars",id:"pressurekbar",fn:SIPrefix("bar",1)},{name:"Pascals",id:"pressurepa",fn:SIPrefix("Pa")},{name:"Hectopascals",id:"pressurehpa",fn:toFixedUnit("hPa")},{name:"Kilopascals",id:"pressurekpa",fn:toFixedUnit("kPa")},{name:"Inches of mercury",id:"pressurehg",fn:toFixedUnit('"Hg')},{name:"PSI",id:"pressurepsi",fn:scaledUnits(1e3,["psi","ksi","Mpsi"])}]},{name:"Radiation",formats:[{name:"Becquerel (Bq)",id:"radbq",fn:SIPrefix("Bq")},{name:"curie (Ci)",id:"radci",fn:SIPrefix("Ci")},{name:"Gray (Gy)",id:"radgy",fn:SIPrefix("Gy")},{name:"rad",id:"radrad",fn:SIPrefix("rad")},{name:"Sievert (Sv)",id:"radsv",fn:SIPrefix("Sv")},{name:"milliSievert (mSv)",id:"radmsv",fn:SIPrefix("Sv",-1)},{name:"microSievert (µSv)",id:"radusv",fn:SIPrefix("Sv",-2)},{name:"rem",id:"radrem",fn:SIPrefix("rem")},{name:"Exposure (C/kg)",id:"radexpckg",fn:SIPrefix("C/kg")},{name:"roentgen (R)",id:"radr",fn:SIPrefix("R")},{name:"Sievert/hour (Sv/h)",id:"radsvh",fn:SIPrefix("Sv/h")},{name:"milliSievert/hour (mSv/h)",id:"radmsvh",fn:SIPrefix("Sv/h",-1)},{name:"microSievert/hour (µSv/h)",id:"radusvh",fn:SIPrefix("Sv/h",-2)}]},{name:"Rotational Speed",formats:[{name:"Revolutions per minute (rpm)",id:"rotrpm",fn:toFixedUnit("rpm")},{name:"Hertz (Hz)",id:"rothz",fn:SIPrefix("Hz")},{name:"Kilohertz (kHz)",id:"rotkhz",fn:SIPrefix("Hz",1)},{name:"Megahertz (MHz)",id:"rotmhz",fn:SIPrefix("Hz",2)},{name:"Gigahertz (GHz)",id:"rotghz",fn:SIPrefix("Hz",3)},{name:"Radians per second (rad/s)",id:"rotrads",fn:toFixedUnit("rad/s")},{name:"Degrees per second (°/s)",id:"rotdegs",fn:toFixedUnit("°/s")}]},{name:"Temperature",formats:[{name:"Celsius (°C)",id:"celsius",fn:toFixedUnit("°C")},{name:"Fahrenheit (°F)",id:"fahrenheit",fn:toFixedUnit("°F")},{name:"Kelvin (K)",id:"kelvin",fn:toFixedUnit("K")}]},{name:"Time",formats:[{name:"Hertz (1/s)",id:"hertz",fn:SIPrefix("Hz")},{name:"nanoseconds (ns)",id:"ns",fn:toNanoSeconds},{name:"microseconds (µs)",id:"µs",fn:toMicroSeconds},{name:"milliseconds (ms)",id:"ms",fn:toMilliSeconds},{name:"seconds (s)",id:"s",fn:toSeconds},{name:"minutes (m)",id:"m",fn:toMinutes},{name:"hours (h)",id:"h",fn:toHours},{name:"days (d)",id:"d",fn:toDays},{name:"duration (ms)",id:"dtdurationms",fn:toDurationInMilliseconds},{name:"duration (s)",id:"dtdurations",fn:toDurationInSeconds},{name:"duration (hh:mm:ss)",id:"dthms",fn:toDurationInHoursMinutesSeconds},{name:"duration (d hh:mm:ss)",id:"dtdhms",fn:toDurationInDaysHoursMinutesSeconds},{name:"Timeticks (s/100)",id:"timeticks",fn:toTimeTicks},{name:"clock (ms)",id:"clockms",fn:toClockMilliseconds},{name:"clock (s)",id:"clocks",fn:toClockSeconds}]},{name:"Throughput",formats:[{name:"counts/sec (cps)",id:"cps",fn:simpleCountUnit("c/s")},{name:"ops/sec (ops)",id:"ops",fn:simpleCountUnit("ops/s")},{name:"requests/sec (rps)",id:"reqps",fn:simpleCountUnit("req/s")},{name:"reads/sec (rps)",id:"rps",fn:simpleCountUnit("rd/s")},{name:"writes/sec (wps)",id:"wps",fn:simpleCountUnit("wr/s")},{name:"I/O ops/sec (iops)",id:"iops",fn:simpleCountUnit("io/s")},{name:"events/sec (eps)",id:"eps",fn:simpleCountUnit("evt/s")},{name:"messages/sec (mps)",id:"mps",fn:simpleCountUnit("msg/s")},{name:"records/sec (rps)",id:"recps",fn:simpleCountUnit("rec/s")},{name:"rows/sec (rps)",id:"rowsps",fn:simpleCountUnit("rows/s")},{name:"counts/min (cpm)",id:"cpm",fn:simpleCountUnit("c/m")},{name:"ops/min (opm)",id:"opm",fn:simpleCountUnit("ops/m")},{name:"requests/min (rpm)",id:"reqpm",fn:simpleCountUnit("req/m")},{name:"reads/min (rpm)",id:"rpm",fn:simpleCountUnit("rd/m")},{name:"writes/min (wpm)",id:"wpm",fn:simpleCountUnit("wr/m")},{name:"events/min (epm)",id:"epm",fn:simpleCountUnit("evts/m")},{name:"messages/min (mpm)",id:"mpm",fn:simpleCountUnit("msgs/m")},{name:"records/min (rpm)",id:"recpm",fn:simpleCountUnit("rec/m")},{name:"rows/min (rpm)",id:"rowspm",fn:simpleCountUnit("rows/m")}]},{name:"Velocity",formats:[{name:"meters/second (m/s)",id:"velocityms",fn:toFixedUnit("m/s")},{name:"kilometers/hour (km/h)",id:"velocitykmh",fn:toFixedUnit("km/h")},{name:"miles/hour (mph)",id:"velocitymph",fn:toFixedUnit("mph")},{name:"knot (kn)",id:"velocityknot",fn:toFixedUnit("kn")}]},{name:"Volume",formats:[{name:"millilitre (mL)",id:"mlitre",fn:SIPrefix("L",-1)},{name:"litre (L)",id:"litre",fn:SIPrefix("L")},{name:"cubic meter",id:"m3",fn:toFixedUnit("m³")},{name:"Normal cubic meter",id:"Nm3",fn:toFixedUnit("Nm³")},{name:"cubic decimeter",id:"dm3",fn:toFixedUnit("dm³")},{name:"gallons",id:"gallons",fn:toFixedUnit("gal")}]},{name:"Boolean",formats:[{name:"True / False",id:"bool",fn:booleanValueFormatter("True","False")},{name:"Yes / No",id:"bool_yes_no",fn:booleanValueFormatter("Yes","No")},{name:"On / Off",id:"bool_on_off",fn:booleanValueFormatter("On","Off")}]}]};function formattedValueToString(val){var _val_prefix,_val_suffix;return"".concat(null!==(_val_prefix=val.prefix)&&void 0!==_val_prefix?_val_prefix:"").concat(val.text).concat(null!==(_val_suffix=val.suffix)&&void 0!==_val_suffix?_val_suffix:"")}var categories=[],index={},hasBuiltIndex=!1;function toFixed(value,decimals){if(null===value)return"";if(value===Number.NEGATIVE_INFINITY||value===Number.POSITIVE_INFINITY)return value.toLocaleString();if(null==decimals&&(decimals=function getDecimalsForValue(value){var absValue=Math.abs(value),dec=1-Math.floor(Math.log(absValue)/Math.LN10),magn=Math.pow(10,-dec);absValue/magn>2.25&&++dec;value%1==0&&(dec=0);var decimals=Math.max(0,dec);return decimals}(value)),0===value)return value.toFixed(decimals);var factor=decimals?Math.pow(10,Math.max(0,decimals)):1,formatted=String(Math.round(value*factor)/factor);if(-1!==formatted.indexOf("e")||0===value)return formatted;var decimalPos=formatted.indexOf("."),precision=-1===decimalPos?0:formatted.length-decimalPos-1;return precision<decimals?(precision?formatted:formatted+".")+String(factor).slice(1,decimals-precision+1):formatted}function toFixedScaled(value,decimals,ext){return{text:toFixed(value,decimals),suffix:appendPluralIf(ext,Math.abs(value)>1)}}function appendPluralIf(ext,condition){if(!condition)return ext;switch(ext){case" min":case" hour":case" day":case" week":case" year":return"".concat(ext,"s");default:return ext}}function toFixedUnit(unit,asPrefix){return function(size,decimals){if(null===size)return{text:""};var text=toFixed(size,decimals);return unit?asPrefix?{text:text,prefix:unit}:{text:text,suffix:" "+unit}:{text:text}}}function isBooleanUnit(unit){return unit&&unit.startsWith("bool")}function booleanValueFormatter(t,f){return function(value){return{text:value?t:f}}}var logb=function(b,x){return Math.log10(x)/Math.log10(b)};function scaledUnits(factor,extArray){var offset=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return function(size,decimals){if(null==size)return{text:""};if(size===Number.NEGATIVE_INFINITY||size===Number.POSITIVE_INFINITY||isNaN(size))return{text:size.toLocaleString()};var siIndex=0===size?0:Math.floor(logb(factor,Math.abs(size))),suffix=extArray[(0,lodash.clamp)(offset+siIndex,0,extArray.length-1)];return{text:toFixed(size/Math.pow(factor,(0,lodash.clamp)(siIndex,-offset,extArray.length-offset-1)),decimals),suffix:suffix}}}function locale(value,decimals){return null==value?{text:""}:{text:value.toLocaleString(void 0,{maximumFractionDigits:null!=decimals?decimals:void 0})}}function simpleCountUnit(symbol){var scaler=scaledUnits(1e3,["","K","M","B","T"]);return function(size,decimals,scaledDecimals){if(null===size)return{text:""};var v=scaler(size,decimals,scaledDecimals);return v.suffix+=" "+symbol,v}}function stringFormater(value){return{text:"".concat(value)}}function buildFormats(){categories=getCategories();var _iteratorNormalCompletion=!0,_didIteratorError=!1,_iteratorError=void 0;try{for(var _step,_iterator=categories[Symbol.iterator]();!(_iteratorNormalCompletion=(_step=_iterator.next()).done);_iteratorNormalCompletion=!0){var cat=_step.value,_iteratorNormalCompletion1=!0,_didIteratorError1=!1,_iteratorError1=void 0;try{for(var _step1,_iterator1=cat.formats[Symbol.iterator]();!(_iteratorNormalCompletion1=(_step1=_iterator1.next()).done);_iteratorNormalCompletion1=!0){var format=_step1.value;index[format.id]=format.fn}}catch(err){_didIteratorError1=!0,_iteratorError1=err}finally{try{_iteratorNormalCompletion1||null==_iterator1.return||_iterator1.return()}finally{if(_didIteratorError1)throw _iteratorError1}}}}catch(err){_didIteratorError=!0,_iteratorError=err}finally{try{_iteratorNormalCompletion||null==_iterator.return||_iterator.return()}finally{if(_didIteratorError)throw _iteratorError}}[{from:"farenheit",to:"fahrenheit"}].forEach((function(alias){var f=index[alias.to];f&&(index[alias.from]=f)})),hasBuiltIndex=!0}function getValueFormat(id){if(!id)return toFixedUnit("");hasBuiltIndex||buildFormats();var fmt=index[id];if(!fmt&&id){var idx=id.indexOf(":");if(idx>0){var key=id.substring(0,idx),sub=id.substring(idx+1);if("prefix"===key)return toFixedUnit(sub,!0);if("suffix"===key)return toFixedUnit(sub,!1);if("time"===key)return toDateTimeValueFormatter(sub);if("si"===key){var offset=function getOffsetFromSIPrefix(c){var charIndex=SI_PREFIXES.findIndex((function(prefix){return prefix.normalize("NFKD")===c.normalize("NFKD")}));return charIndex<0?0:charIndex-SI_BASE_INDEX}(sub.charAt(0));return SIPrefix(0===offset?sub:sub.substring(1),offset)}if("count"===key)return simpleCountUnit(sub);if("currency"===key)return currency(sub);if("bool"===key)return(idx=sub.indexOf("/"))>=0?booleanValueFormatter(sub.substring(0,idx),sub.substring(idx+1)):booleanValueFormatter(sub,"-")}return toFixedUnit(id)}return fmt}function getValueFormats(){return hasBuiltIndex||buildFormats(),categories.map((function(cat){return{text:cat.name,submenu:cat.formats.map((function(format){return{text:format.name,value:format.id}}))}}))}}}]);