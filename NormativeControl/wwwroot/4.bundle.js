(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{105:function(module,exports,__webpack_require__){"use strict";(function(module){Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,r,a){return r&&e(t.prototype,r),a&&e(t,a),t}}(),_react=__webpack_require__(0),_react2=_interopRequireDefault(_react),enterModule;function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}__webpack_require__(65),enterModule="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0,enterModule&&enterModule(module);var __signature__="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},SolidButton=function(_React$Component){function SolidButton(){return _classCallCheck(this,SolidButton),_possibleConstructorReturn(this,(SolidButton.__proto__||Object.getPrototypeOf(SolidButton)).apply(this,arguments))}return _inherits(SolidButton,_React$Component),_createClass(SolidButton,[{key:"render",value:function(){return _react2.default.createElement("button",{className:"lite-button "+this.props.size+" "+this.props.className,disabled:this.props.disable,onClick:this.props.onClick},this.props.text)}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),SolidButton}(_react2.default.Component),_default=SolidButton,reactHotLoader,leaveModule;exports.default=_default,reactHotLoader="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0,reactHotLoader&&(reactHotLoader.register(SolidButton,"SolidButton","C:\\Users\\Admin\\Desktop\\Проекты\\Система нормконтроля 3 семестр\\NormativeControl\\NormativeControl\\Client\\Components\\Buttons\\LiteButton.js"),reactHotLoader.register(_default,"default","C:\\Users\\Admin\\Desktop\\Проекты\\Система нормконтроля 3 семестр\\NormativeControl\\NormativeControl\\Client\\Components\\Buttons\\LiteButton.js")),leaveModule="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0,leaveModule&&leaveModule(module)}).call(this,__webpack_require__(11)(module))},121:function(e,t,r){},154:function(module,exports,__webpack_require__){"use strict";(function(module){Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,r,a){return r&&e(t.prototype,r),a&&e(t,a),t}}(),_react=__webpack_require__(0),_react2=_interopRequireDefault(_react),_reactFontawesome=__webpack_require__(42),enterModule;function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}__webpack_require__(155),enterModule="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0,enterModule&&enterModule(module);var __signature__="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},Stepper=function(_React$Component){function Stepper(e){return _classCallCheck(this,Stepper),_possibleConstructorReturn(this,(Stepper.__proto__||Object.getPrototypeOf(Stepper)).call(this,e))}return _inherits(Stepper,_React$Component),_createClass(Stepper,[{key:"getClasses",value:function(e){return this.props.activeStep-1===e?"step step_active":e+1<this.props.activeStep?"step step_success":"step"}},{key:"getNumOrIcon",value:function(e){return e+1<this.props.activeStep?_react2.default.createElement(_reactFontawesome.FontAwesomeIcon,{icon:"check"}):e+1}},{key:"render",value:function(){var e=this;return _react2.default.createElement("div",{className:"stepper"},this.props.steps.map((function(t,r){return _react2.default.createElement(_react2.default.Fragment,{key:r+1},_react2.default.createElement("div",{className:e.getClasses(r)},_react2.default.createElement("div",{className:"step__num"},e.getNumOrIcon(r)),_react2.default.createElement("div",{className:"step__title"},t)),e.props.steps.length-1!==r?_react2.default.createElement("div",{className:"step__line"}):null)})))}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),Stepper}(_react2.default.Component),_default=Stepper,reactHotLoader,leaveModule;exports.default=_default,reactHotLoader="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0,reactHotLoader&&(reactHotLoader.register(Stepper,"Stepper","C:\\Users\\Admin\\Desktop\\Проекты\\Система нормконтроля 3 семестр\\NormativeControl\\NormativeControl\\Client\\Components\\Stepper\\Stepper.js"),reactHotLoader.register(_default,"default","C:\\Users\\Admin\\Desktop\\Проекты\\Система нормконтроля 3 семестр\\NormativeControl\\NormativeControl\\Client\\Components\\Stepper\\Stepper.js")),leaveModule="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0,leaveModule&&leaveModule(module)}).call(this,__webpack_require__(11)(module))},155:function(e,t,r){},156:function(module,exports,__webpack_require__){"use strict";(function(module){Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,r,a){return r&&e(t.prototype,r),a&&e(t,a),t}}(),_react=__webpack_require__(0),_react2=_interopRequireDefault(_react);__webpack_require__(60);var _reactRouterDom=__webpack_require__(43),enterModule;function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}enterModule="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0,enterModule&&enterModule(module);var __signature__="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},Step1=function(_React$Component){function Step1(e){_classCallCheck(this,Step1);var t=_possibleConstructorReturn(this,(Step1.__proto__||Object.getPrototypeOf(Step1)).call(this,e));return t.state={selectedTemplate:1},t}return _inherits(Step1,_React$Component),_createClass(Step1,[{key:"selectTemplate",value:function(e){this.props.selectTemplate(e)}},{key:"render",value:function(){var e=this;return _react2.default.createElement("div",{className:"step-wrapper"},_react2.default.createElement("p",{className:"step-text"},"Выберете нужный шаблон офорления, который будет использоваться для проверки вашей работы."),_react2.default.createElement("div",{className:"templates"},this.props.templates.map((function(t,r){return _react2.default.createElement("div",{className:r+1===e.props.selectedTemplate?"template template_active":"template",onClick:function(){return e.selectTemplate(r+1)},key:t.id},_react2.default.createElement("div",{className:"template__title"},t.name),_react2.default.createElement("div",{className:"template__link"},_react2.default.createElement("a",{href:t.path,target:"_blank"},"Правила оформления")))}))))}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),Step1}(_react2.default.Component),_default=Step1,reactHotLoader,leaveModule;exports.default=_default,reactHotLoader="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0,reactHotLoader&&(reactHotLoader.register(Step1,"Step1","C:\\Users\\Admin\\Desktop\\Проекты\\Система нормконтроля 3 семестр\\NormativeControl\\NormativeControl\\Client\\Pages\\Send\\Step1.js"),reactHotLoader.register(_default,"default","C:\\Users\\Admin\\Desktop\\Проекты\\Система нормконтроля 3 семестр\\NormativeControl\\NormativeControl\\Client\\Pages\\Send\\Step1.js")),leaveModule="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0,leaveModule&&leaveModule(module)}).call(this,__webpack_require__(11)(module))},157:function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var a=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var r=[],a=!0,o=!1,l=void 0;try{for(var n,i=e[Symbol.iterator]();!(a=(n=i.next()).done)&&(r.push(n.value),!t||r.length!==t);a=!0);}catch(e){o=!0,l=e}finally{try{!a&&i.return&&i.return()}finally{if(o)throw l}}return r}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},o=r(0),l=c(o),n=c(r(158));r(60);var i,s=c(r(41)),u=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}(r(26));function c(e){return e&&e.__esModule?e:{default:e}}(i="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&i(e);var d,p,f="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},_=function(e){var t=e.onDropHandler,r=e.selectedFile,i=e.toBunNextStep,c=e.toAllowNextStep,d=e.successLoaded,p=e.isSuccessLoaded,f=e.setUrlFile,_=(0,o.useState)({disable:p}),m=a(_,2),b=m[0],v=m[1],h=(0,o.useState)({isLoading:!1}),y=a(h,2),S=y[0],C=y[1];(0,o.useEffect)((function(){p||i()}),[]);return l.default.createElement("div",{className:"step-wrapper"},l.default.createElement("p",null,"Загрузите свою работу в формате docx."),l.default.createElement("div",{className:"mt-40"},l.default.createElement(n.default,{onDropHandler:function(e){t(e),v({disable:!1})},selectedFile:r})),l.default.createElement(s.default,{text:p?"Загрузка завершена":S.isLoading?"Загрузка...":"Загрузить",className:"mt-30 load-button",disable:null===r||b.disable,onClick:function(){C({isLoading:!0}),u.UploadTempFile(r).then((function(e){c(),d(),v({disable:!0}),C({isLoading:!1}),f(e.data)})).catch((function(e){C({isLoading:!1}),console.log(e)}))}}))};f(_,"useState{[disableLoad, setDisableLoad]({disable: isSuccessLoaded})}\nuseState{[isLoading, setIsLoading]({isLoading: false})}\nuseEffect{}"),t.default=_,(d="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&d.register(_,"default","C:\\Users\\Admin\\Desktop\\Проекты\\Система нормконтроля 3 семестр\\NormativeControl\\NormativeControl\\Client\\Pages\\Send\\Step2.js"),(p="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&p(e)}).call(this,r(11)(e))},158:function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},o=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var r=[],a=!0,o=!1,l=void 0;try{for(var n,i=e[Symbol.iterator]();!(a=(n=i.next()).done)&&(r.push(n.value),!t||r.length!==t);a=!0);}catch(e){o=!0,l=e}finally{try{!a&&i.return&&i.return()}finally{if(o)throw l}}return r}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")};t.default=f;var l,n,i,s=r(0),u=p(s),c=r(170),d=p(r(159));function p(e){return e&&e.__esModule?e:{default:e}}function f(e){var t=e.onDropHandler,r=e.selectedFile,l=(0,s.useCallback)((function(e){e.length>1?f({textError:"Вы можете загрузить только один файл"}):"application/vnd.openxmlformats-officedocument.wordprocessingml.document"===e[0].type?(f({textError:""}),t(e[0]),v({isSuccess:!0})):f({textError:"Неверный формат файла. Допустимый формат: docx"})}),[]),n=(0,s.useState)({textError:""}),i=o(n,2),p=i[0],f=i[1],_=(0,s.useState)({isSuccess:r}),m=o(_,2),b=m[0],v=m[1],h=(0,c.useDropzone)({onDrop:l}),y=h.getRootProps,S=h.getInputProps,C=h.isDragActive;return u.default.createElement("div",a({},y(),{className:b.isSuccess?"dropzone-container dropzone-container_success":"dropzone-container"}),u.default.createElement("input",S()),u.default.createElement("div",{className:"dropzone-text"},C?u.default.createElement("p",null,"Перетащите файл сюда"):r?u.default.createElement(u.default.Fragment,null,u.default.createElement("img",{src:d.default,alt:"docx",className:"dropzone-icon"}),u.default.createElement("p",{className:"dropzone-line"},"Выбран файл: ",r.name)):u.default.createElement("p",null,"Перетащите файл сюда или кликните, чтобы выбрать его"),u.default.createElement("br",null),function(){if(p.textError)return u.default.createElement("p",{className:"dropzone-error"},p.textError)}()))}r(160),(l="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&l(e),("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e})(f,"useCallback{onDrop}\nuseState{[error, setError]({textError: ''})}\nuseState{[loadState, setLoadState]({isSuccess: selectedFile})}\nuseDropzone{{getRootProps, getInputProps, isDragActive}}",(function(){return[c.useDropzone]})),(n="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&n.register(f,"Dropzone","C:\\Users\\Admin\\Desktop\\Проекты\\Система нормконтроля 3 семестр\\NormativeControl\\NormativeControl\\Client\\Components\\Dropzone\\Dropzone.js"),(i="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&i(e)}).call(this,r(11)(e))},159:function(e,t,r){e.exports=r.p+"img/docx.svg"},160:function(e,t,r){},161:function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var a=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var r=[],a=!0,o=!1,l=void 0;try{for(var n,i=e[Symbol.iterator]();!(a=(n=i.next()).done)&&(r.push(n.value),!t||r.length!==t);a=!0);}catch(e){o=!0,l=e}finally{try{!a&&i.return&&i.return()}finally{if(o)throw l}}return r}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},o=r(0),l=p(o),n=p(r(41));r(60);var i,s=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}(r(26)),u=p(r(61)),c=p(r(89)),d=p(r(78));function p(e){return e&&e.__esModule?e:{default:e}}(i="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&i(e);var f,_,m="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},b=function(e){var t=e.templates,r=e.selectedTemplate,i=e.file,p=e.globalSetErrors,f=e.getGlobalErrors,_=e.isGlobalChecked,m=e.urlFile,b=e.onDropHandler,v=e.successLoaded,h=e.setUrlFile,y=e.toBunNextStep,S=e.toAllowNextStep,C=(0,o.useState)({isCheck:_}),L=a(C,2),k=L[0],E=L[1],g=(0,o.useState)({errors:f}),w=a(g,2),N=w[0],H=w[1],G=(0,o.useState)({isLoading:!1}),M=a(G,2),x=M[0],O=M[1];(0,o.useEffect)((function(){k.isCheck||y()}),[]);return l.default.createElement("div",{className:"step-wrapper"},l.default.createElement("p",null,"Пройдите компьютерную проверку."),l.default.createElement("div",{className:"d-flex"},l.default.createElement("div",{className:"table-wrapper mt-30"},l.default.createElement("div",{className:"step__table"},l.default.createElement("div",{className:"step__row"},l.default.createElement("p",{className:"step__el step__el_key"},"Выбран шаблон:"),l.default.createElement("p",{className:"step__el step__el_value"},t[r-1].name)),l.default.createElement("div",{className:"step__row"},l.default.createElement("p",{className:"step__el step__el_key"},"Загружен файл:"),l.default.createElement("p",{className:"step__el step__el_value"},i.name)),l.default.createElement("div",{className:"step__row"},l.default.createElement("p",{className:"step__el step__el_key"},"Проверка:"),l.default.createElement("div",{className:"step__el step__el_value"},l.default.createElement("div",{className:"step__point "+(k.isCheck?"step__point_active":null)}),k.isCheck?"Пройдена":"Не пройдена"))),l.default.createElement(n.default,{text:"Проверка",size:"small",className:"mt-30",onClick:function(){O({isLoading:!0});var e=t[r-1].id;s.GetErrors(e).then((function(e){O({isLoading:!1}),E({isCheck:!0}),H({errors:e.data}),p(e.data),S()})).catch((function(e){O({isLoading:!1}),console.log(e)}))}})),l.default.createElement("div",{className:"errors-wrapper mt-30"},l.default.createElement("h4",{className:"mt-15"},k.isCheck?"Ошибки":x.isLoading?null:"Пройдите проверку"),k.isCheck?l.default.createElement(l.default.Fragment,null,0===N.errors.length?l.default.createElement("p",{className:"mt-20"},"Ошибок не найдено"):l.default.createElement(d.default,{errorList:N.errors,className:"mt-20"}),l.default.createElement("div",{className:"errors__btns"},l.default.createElement(c.default,{text:"Сдать еще раз",onChange:function(e){var t=e.target.files[0];b(t),s.UploadTempFile(t).then((function(e){v(),h(e.data),E({isCheck:!1}),H({errors:[]}),y()})).catch((function(e){console.log(e)}))}}),l.default.createElement("a",{href:m,target:"_blank",className:"errors__down under-link"},"Скачать свою работу ",l.default.createElement("br",null),"c подробными комментариями"))):x.isLoading?l.default.createElement("div",{className:"step-loading-wrapper"},l.default.createElement(u.default,{color:"secondary"})):null)))};m(b,"useState{[check, setCheck]({isCheck: isGlobalChecked})}\nuseState{[errors, setErrors]({errors: getGlobalErrors})}\nuseState{[loading, setLoading]({isLoading: false})}\nuseEffect{}"),t.default=b,(f="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&f.register(b,"default","C:\\Users\\Admin\\Desktop\\Проекты\\Система нормконтроля 3 семестр\\NormativeControl\\NormativeControl\\Client\\Pages\\Send\\Step3.js"),(_="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&_(e)}).call(this,r(11)(e))},162:function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var a=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var r=[],a=!0,o=!1,l=void 0;try{for(var n,i=e[Symbol.iterator]();!(a=(n=i.next()).done)&&(r.push(n.value),!t||r.length!==t);a=!0);}catch(e){o=!0,l=e}finally{try{!a&&i.return&&i.return()}finally{if(o)throw l}}return r}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},o=r(0),l=d(o),n=d(r(41));r(60);var i,s=r(68),u=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}(r(26)),c=d(r(163));function d(e){return e&&e.__esModule?e:{default:e}}(i="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&i(e);var p,f,_="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},m=function(e){var t=e.templates,r=e.selectedTemplate,i=e.isGlobalChecked,d=e.getGlobalErrors,p=e.file,f=(0,o.useState)({isEmail:!1}),_=a(f,2),m=_[0],b=_[1],v=(0,o.useState)(!1),h=a(v,2),y=h[0],S=h[1];return l.default.createElement("div",{className:"step-wrapper"},l.default.createElement("p",null,"Отправьте работу на проверку нормоконтролеру."),l.default.createElement("div",{className:"step__table mt-30"},l.default.createElement("div",{className:"step__row"},l.default.createElement("p",{className:"step__el step__el_key"},"Выбран шаблон:"),l.default.createElement("p",{className:"step__el step__el_value"},t[r-1].name)),l.default.createElement("div",{className:"step__row"},l.default.createElement("p",{className:"step__el step__el_key"},"Загружен файл:"),l.default.createElement("p",{className:"step__el step__el_value"},p.name)),l.default.createElement("div",{className:"step__row"},l.default.createElement("p",{className:"step__el step__el_key"},"Проверка:"),l.default.createElement("div",{className:"step__el step__el_value"},l.default.createElement("div",{className:"step__point "+(i?"step__point_active":null)}),i?"Пройдена":"Не пройдена")),l.default.createElement("div",{className:"step__row"},l.default.createElement("p",{className:"step__el step__el_key"},"Ошибки:"),l.default.createElement("p",{className:"step__el step__el_value"},d.length))),l.default.createElement(s.FormControlLabel,{control:l.default.createElement(s.Checkbox,{onChange:function(e){return b({isEmail:e.target.checked})}}),label:"Уведомлять по почте о статусе проверки"}),0!==d.length?l.default.createElement("p",{className:"step4-error mt-20"},"Компьютер нашел у вас ошибки в оформлении работы, мы рекомендуем вам исправить ошибки и загрузить работу заново. Вы уверены, что хотите отправить работу?"):null,l.default.createElement(n.default,{text:"Отправить",size:"small",className:"mt-20",onClick:function(){u.SendWork(p,t[r-1].id,m.isEmail).then((function(e){S(!0)})).catch((function(e){console.log(e)}))}}),l.default.createElement(c.default,{isOpen:y,onClose:function(){location.replace("/status")}}))};_(m,"useState{[check, setCheck]({isEmail: false})}\nuseState{[isOpen, setOpen](false)}"),t.default=m,(p="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&p.register(m,"default","C:\\Users\\Admin\\Desktop\\Проекты\\Система нормконтроля 3 семестр\\NormativeControl\\NormativeControl\\Client\\Pages\\Send\\Step4.js"),(f="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&f(e)}).call(this,r(11)(e))},163:function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=d;var a,o=s(r(0)),l=s(r(104)),n=r(42),i=s(r(105));function s(e){return e&&e.__esModule?e:{default:e}}r(164),(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&a(e);var u,c;"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;function d(e){var t=e.isOpen,r=e.onClose;return o.default.createElement(l.default,{open:t,"aria-labelledby":"simple-dialog-title",onClose:r},o.default.createElement("div",{className:"dialog-wrapper"},o.default.createElement("div",{className:"dialog__check-wrapper"},o.default.createElement("div",{className:"dialog__check"},o.default.createElement(n.FontAwesomeIcon,{icon:"check"}))),o.default.createElement("h4",null,"Работа успешно отправлена на проверку"),o.default.createElement(i.default,{text:"Закрыть",onClick:r,size:"medium",className:"dialog-button"})))}(u="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&u.register(d,"SuccessDialog","C:\\Users\\Admin\\Desktop\\Проекты\\Система нормконтроля 3 семестр\\NormativeControl\\NormativeControl\\Client\\Components\\SuccessDialog\\SuccessDialog.js"),(c="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&c(e)}).call(this,r(11)(e))},164:function(e,t,r){},180:function(module,exports,__webpack_require__){"use strict";(function(module){Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,r,a){return r&&e(t.prototype,r),a&&e(t,a),t}}(),_react=__webpack_require__(0),_react2=_interopRequireDefault(_react),_Stepper=__webpack_require__(154),_Stepper2=_interopRequireDefault(_Stepper),_SolidButton=__webpack_require__(41),_SolidButton2=_interopRequireDefault(_SolidButton);__webpack_require__(60);var _reactRouterDom=__webpack_require__(43),_Step=__webpack_require__(156),_Step2=_interopRequireDefault(_Step),_Step3=__webpack_require__(157),_Step4=_interopRequireDefault(_Step3),_Step5=__webpack_require__(161),_Step6=_interopRequireDefault(_Step5),_Step7=__webpack_require__(162),_Step8=_interopRequireDefault(_Step7),_reactRedux=__webpack_require__(51),_LiteButton=__webpack_require__(105),_LiteButton2=_interopRequireDefault(_LiteButton),_API=__webpack_require__(26),API=_interopRequireWildcard(_API),enterModule;function _interopRequireWildcard(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}enterModule="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0,enterModule&&enterModule(module);var __signature__="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},Send=function(_React$Component){function Send(e){_classCallCheck(this,Send);var t=_possibleConstructorReturn(this,(Send.__proto__||Object.getPrototypeOf(Send)).call(this,e));return t.state={activeStep:1,isBunNextStep:!1,steps:["Выбор шаблона","Загрузка работы","Проверка","Отправка"],selectedTemplate:1,templates:[],file:null,isSuccessLoaded:!1,errors:[],isChecked:!1,urlFile:""},t.prevStep=t.prevStep.bind(t),t.nextStep=t.nextStep.bind(t),t.toBunNextStep=t.toBunNextStep.bind(t),t.toAllowNextStep=t.toAllowNextStep.bind(t),t.selectTemplate=t.selectTemplate.bind(t),t.onDropHandler=t.onDropHandler.bind(t),t.successLoaded=t.successLoaded.bind(t),t.setErrors=t.setErrors.bind(t),t.setUrlFile=t.setUrlFile.bind(t),t}return _inherits(Send,_React$Component),_createClass(Send,[{key:"componentDidMount",value:function(){var e=this;API.GetTemplates().then((function(t){e.setState({templates:t.data})})).catch((function(e){console.log(e)}))}},{key:"setUrlFile",value:function(e){this.setState({urlFile:e})}},{key:"setErrors",value:function(e){this.setState({isChecked:!0}),this.setState({errors:e})}},{key:"prevStep",value:function(){this.setState({activeStep:this.state.activeStep-1}),this.toAllowNextStep()}},{key:"nextStep",value:function(){this.setState({activeStep:this.state.activeStep+1})}},{key:"toBunNextStep",value:function(){this.setState({isBunNextStep:!0})}},{key:"toAllowNextStep",value:function(){this.setState({isBunNextStep:!1})}},{key:"selectTemplate",value:function(e){this.setState({selectedTemplate:e}),this.setState({errors:[],isChecked:!1})}},{key:"onDropHandler",value:function(e){this.setState({file:e}),this.setState({isSuccessLoaded:!1}),this.setState({errors:[],isChecked:!1})}},{key:"successLoaded",value:function(){this.setState({isSuccessLoaded:!0})}},{key:"getStep",value:function(){switch(this.state.activeStep){case 1:return _react2.default.createElement(_Step2.default,{selectTemplate:this.selectTemplate,templates:this.state.templates,selectedTemplate:this.state.selectedTemplate});case 2:return _react2.default.createElement(_Step4.default,{onDropHandler:this.onDropHandler,selectedFile:this.state.file,toBunNextStep:this.toBunNextStep,toAllowNextStep:this.toAllowNextStep,successLoaded:this.successLoaded,isSuccessLoaded:this.state.isSuccessLoaded,setUrlFile:this.setUrlFile});case 3:return _react2.default.createElement(_Step6.default,{templates:this.state.templates,selectedTemplate:this.state.selectedTemplate,file:this.state.file,globalSetErrors:this.setErrors,getGlobalErrors:this.state.errors,isGlobalChecked:this.state.isChecked,urlFile:this.state.urlFile,onDropHandler:this.onDropHandler,successLoaded:this.successLoaded,setUrlFile:this.setUrlFile,toBunNextStep:this.toBunNextStep,toAllowNextStep:this.toAllowNextStep});case 4:return _react2.default.createElement(_Step8.default,{templates:this.state.templates,selectedTemplate:this.state.selectedTemplate,isGlobalChecked:this.state.isChecked,getGlobalErrors:this.state.errors,file:this.state.file})}}},{key:"render",value:function(){return _react2.default.createElement("main",null,this.props.isAuth?_react2.default.createElement(_react2.default.Fragment,null,_react2.default.createElement(_Stepper2.default,{steps:this.state.steps,activeStep:this.state.activeStep}),this.getStep(),_react2.default.createElement("div",{className:"send-buttons"},_react2.default.createElement(_LiteButton2.default,{size:"big",text:"Предыдущий шаг",disable:1===this.state.activeStep,onClick:this.prevStep}),_react2.default.createElement(_SolidButton2.default,{size:"big",text:"Следующий шаг",disable:this.state.activeStep===this.state.steps.length||this.state.isBunNextStep,onClick:this.nextStep}))):_react2.default.createElement("p",{className:"shouldAuth"},"Для того, чтобы отправить работу нужно ",_react2.default.createElement(_reactRouterDom.Link,{to:"/sign-in"},"авторизоваться")))}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),Send}(_react2.default.Component),mapStateToProps=function(e){return{isAuth:e.AuthReducer.isAuth}},mapDispatchToProps=function(e){return{}},_default=(0,_reactRouterDom.withRouter)((0,_reactRedux.connect)(mapStateToProps,mapDispatchToProps)(Send)),reactHotLoader,leaveModule;exports.default=_default,reactHotLoader="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0,reactHotLoader&&(reactHotLoader.register(Send,"Send","C:\\Users\\Admin\\Desktop\\Проекты\\Система нормконтроля 3 семестр\\NormativeControl\\NormativeControl\\Client\\Pages\\Send\\Send.js"),reactHotLoader.register(mapStateToProps,"mapStateToProps","C:\\Users\\Admin\\Desktop\\Проекты\\Система нормконтроля 3 семестр\\NormativeControl\\NormativeControl\\Client\\Pages\\Send\\Send.js"),reactHotLoader.register(mapDispatchToProps,"mapDispatchToProps","C:\\Users\\Admin\\Desktop\\Проекты\\Система нормконтроля 3 семестр\\NormativeControl\\NormativeControl\\Client\\Pages\\Send\\Send.js"),reactHotLoader.register(_default,"default","C:\\Users\\Admin\\Desktop\\Проекты\\Система нормконтроля 3 семестр\\NormativeControl\\NormativeControl\\Client\\Pages\\Send\\Send.js")),leaveModule="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0,leaveModule&&leaveModule(module)}).call(this,__webpack_require__(11)(module))},41:function(module,exports,__webpack_require__){"use strict";(function(module){Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,r,a){return r&&e(t.prototype,r),a&&e(t,a),t}}(),_react=__webpack_require__(0),_react2=_interopRequireDefault(_react),enterModule;function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}__webpack_require__(65),enterModule="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0,enterModule&&enterModule(module);var __signature__="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},SolidButton=function(_React$Component){function SolidButton(){return _classCallCheck(this,SolidButton),_possibleConstructorReturn(this,(SolidButton.__proto__||Object.getPrototypeOf(SolidButton)).apply(this,arguments))}return _inherits(SolidButton,_React$Component),_createClass(SolidButton,[{key:"render",value:function(){return _react2.default.createElement("button",{className:"solid-button "+this.props.size+" "+this.props.className,disabled:this.props.disable,onClick:this.props.onClick},this.props.text)}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),SolidButton}(_react2.default.Component),_default=SolidButton,reactHotLoader,leaveModule;exports.default=_default,reactHotLoader="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0,reactHotLoader&&(reactHotLoader.register(SolidButton,"SolidButton","C:\\Users\\Admin\\Desktop\\Проекты\\Система нормконтроля 3 семестр\\NormativeControl\\NormativeControl\\Client\\Components\\Buttons\\SolidButton.js"),reactHotLoader.register(_default,"default","C:\\Users\\Admin\\Desktop\\Проекты\\Система нормконтроля 3 семестр\\NormativeControl\\NormativeControl\\Client\\Components\\Buttons\\SolidButton.js")),leaveModule="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0,leaveModule&&leaveModule(module)}).call(this,__webpack_require__(11)(module))},60:function(e,t,r){},65:function(e,t,r){},78:function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=c;var a=i(r(0));r(121);var o,l=i(r(57)),n=r(42);function i(e){return e&&e.__esModule?e:{default:e}}(o="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&o(e);var s,u;"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;function c(e){var t=e.errorList,r=e.className,o=e.isDelete,i=e.deleteHandler,s=e.disable;return a.default.createElement("div",{className:"error-list "+r},t.map((function(e,t){return a.default.createElement("div",{className:"error",key:t},a.default.createElement("div",{className:"error__point"})," ",a.default.createElement("p",{className:"error__text"},e),o&&a.default.createElement(l.default,{disabled:s,className:"error__remove","aria-label":"delete",onClick:function(e){return i(t)}},a.default.createElement(n.FontAwesomeIcon,{icon:"times"})))})))}(s="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&s.register(c,"ErrorList","C:\\Users\\Admin\\Desktop\\Проекты\\Система нормконтроля 3 семестр\\NormativeControl\\NormativeControl\\Client\\Components\\ErrorList\\ErrorList.js"),(u="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&u(e)}).call(this,r(11)(e))},89:function(module,exports,__webpack_require__){"use strict";(function(module){Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,r,a){return r&&e(t.prototype,r),a&&e(t,a),t}}(),_react=__webpack_require__(0),_react2=_interopRequireDefault(_react),enterModule;function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}__webpack_require__(65),enterModule="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0,enterModule&&enterModule(module);var __signature__="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},FileButton=function(_React$Component){function FileButton(){return _classCallCheck(this,FileButton),_possibleConstructorReturn(this,(FileButton.__proto__||Object.getPrototypeOf(FileButton)).apply(this,arguments))}return _inherits(FileButton,_React$Component),_createClass(FileButton,[{key:"render",value:function(){return _react2.default.createElement("div",{className:"lite-button lite-button_file medium "+this.props.className},_react2.default.createElement("input",{id:this.props.id,accept:".docx",type:"file",className:"opacity-0 input-file-btn z-i_0",onChange:this.props.onChange}),_react2.default.createElement("label",{htmlFor:this.props.id},this.props.text))}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),FileButton}(_react2.default.Component),_default=FileButton,reactHotLoader,leaveModule;exports.default=_default,reactHotLoader="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0,reactHotLoader&&(reactHotLoader.register(FileButton,"FileButton","C:\\Users\\Admin\\Desktop\\Проекты\\Система нормконтроля 3 семестр\\NormativeControl\\NormativeControl\\Client\\Components\\Buttons\\FileButton.js"),reactHotLoader.register(_default,"default","C:\\Users\\Admin\\Desktop\\Проекты\\Система нормконтроля 3 семестр\\NormativeControl\\NormativeControl\\Client\\Components\\Buttons\\FileButton.js")),leaveModule="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0,leaveModule&&leaveModule(module)}).call(this,__webpack_require__(11)(module))}}]);