(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{124:function(e,t,r){},134:function(module,exports,__webpack_require__){"use strict";(function(module){Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,r,a){return r&&e(t.prototype,r),a&&e(t,a),t}}(),_react=__webpack_require__(0),_react2=_interopRequireDefault(_react),_core=__webpack_require__(74),_SolidButton=__webpack_require__(51),_SolidButton2=_interopRequireDefault(_SolidButton),_API=__webpack_require__(57),API=_interopRequireWildcard(_API),enterModule;function _interopRequireWildcard(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}__webpack_require__(124),enterModule="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0,enterModule&&enterModule(module);var __signature__="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},Registration=function(_React$Component){function Registration(e){_classCallCheck(this,Registration);var t=_possibleConstructorReturn(this,(Registration.__proto__||Object.getPrototypeOf(Registration)).call(this,e));return t.state={name:"",lastName:"",email:"",password:"",repeatPassword:"",group:"",check:!1,error:"",isLoading:!1},t.submitHandler=t.submitHandler.bind(t),t}return _inherits(Registration,_React$Component),_createClass(Registration,[{key:"submitHandler",value:function(e){var t=this;e.preventDefault(),this.state.check?this.state.password===this.state.repeatPassword?(this.setState({isLoading:!0}),API.Registration(this.state.name,this.state.lastName,this.state.email,this.state.password,this.state.group,"Студент").then((function(e){localStorage.setItem("token",e.data.token),location.replace("/"),t.setState({isLoading:!1})})).catch((function(e){t.setState({isLoading:!1}),409===e.response.status?t.setState({error:"Аккаунт с таким Email уже существует"}):t.setState({error:e.response.statusText})}))):this.setState({error:"Пароли не совпадают"}):this.setState({error:"Подтвердите согласие на обработку персональных данных"})}},{key:"render",value:function(){var e=this;return _react2.default.createElement("main",null,_react2.default.createElement("h1",{className:"center"},"Регистрация"),_react2.default.createElement("form",{className:"logpass-form",onSubmit:this.submitHandler},_react2.default.createElement("div",{className:"wrapper-field"},_react2.default.createElement(_core.TextField,{id:"name",label:"Ваше имя",className:"field",placeholder:"Ваше имя",margin:"normal",required:!0,onChange:function(t){return e.setState({name:t.target.value})}})),_react2.default.createElement("div",{className:"wrapper-field"},_react2.default.createElement(_core.TextField,{id:"lastName",label:"Ваша фамилия",className:"field",placeholder:"Ваша фамилия",margin:"normal",required:!0,onChange:function(t){return e.setState({lastName:t.target.value})}})),_react2.default.createElement("div",{className:"wrapper-field"},_react2.default.createElement(_core.TextField,{id:"email",label:"Email",className:"field",placeholder:"Email",margin:"normal",required:!0,onChange:function(t){return e.setState({email:t.target.value})}})),_react2.default.createElement("div",{className:"wrapper-field"},_react2.default.createElement(_core.TextField,{id:"group",label:"Группа",className:"field",placeholder:"Группа",margin:"normal",required:!0,onChange:function(t){return e.setState({group:t.target.value})}})),_react2.default.createElement("div",{className:"wrapper-field"},_react2.default.createElement(_core.TextField,{id:"password",label:"Пароль",className:"field",placeholder:"Пароль",margin:"normal",required:!0,onChange:function(t){return e.setState({password:t.target.value})},type:"password"})),_react2.default.createElement("div",{className:"wrapper-field"},_react2.default.createElement(_core.TextField,{id:"repeat-password",label:"Повторите пароль",className:"field",placeholder:"Повторите пароль",margin:"normal",required:!0,onChange:function(t){return e.setState({repeatPassword:t.target.value})},type:"password"})),_react2.default.createElement("div",{className:"wrapper-check"},_react2.default.createElement(_core.FormControlLabel,{control:_react2.default.createElement(_core.Checkbox,{onChange:function(t){return e.setState({check:t.target.checked})}}),label:"Подтверждение на обработку персональных данных"})),this.state.error?_react2.default.createElement("p",{className:"form-error"},this.state.error):null,_react2.default.createElement(_SolidButton2.default,{text:this.state.isLoading?"Загрузка...":"Зарегистрироваться",size:"big",className:"form-button"})))}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),Registration}(_react2.default.Component),_default=Registration,reactHotLoader,leaveModule;exports.default=_default,reactHotLoader="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0,reactHotLoader&&(reactHotLoader.register(Registration,"Registration","C:\\Users\\Admin\\Desktop\\Проекты\\Система нормконтроля 3 семестр\\NormativeControl\\NormativeControl\\Client\\Pages\\RegistrationAndLogIn\\Registration.js"),reactHotLoader.register(_default,"default","C:\\Users\\Admin\\Desktop\\Проекты\\Система нормконтроля 3 семестр\\NormativeControl\\NormativeControl\\Client\\Pages\\RegistrationAndLogIn\\Registration.js")),leaveModule="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0,leaveModule&&leaveModule(module)}).call(this,__webpack_require__(13)(module))},51:function(module,exports,__webpack_require__){"use strict";(function(module){Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,r,a){return r&&e(t.prototype,r),a&&e(t,a),t}}(),_react=__webpack_require__(0),_react2=_interopRequireDefault(_react),enterModule;function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}__webpack_require__(90),enterModule="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0,enterModule&&enterModule(module);var __signature__="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},SolidButton=function(_React$Component){function SolidButton(){return _classCallCheck(this,SolidButton),_possibleConstructorReturn(this,(SolidButton.__proto__||Object.getPrototypeOf(SolidButton)).apply(this,arguments))}return _inherits(SolidButton,_React$Component),_createClass(SolidButton,[{key:"render",value:function(){return _react2.default.createElement("button",{className:"solid-button "+this.props.size+" "+this.props.className,disabled:this.props.disable,onClick:this.props.onClick},this.props.text)}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),SolidButton}(_react2.default.Component),_default=SolidButton,reactHotLoader,leaveModule;exports.default=_default,reactHotLoader="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0,reactHotLoader&&(reactHotLoader.register(SolidButton,"SolidButton","C:\\Users\\Admin\\Desktop\\Проекты\\Система нормконтроля 3 семестр\\NormativeControl\\NormativeControl\\Client\\Components\\Buttons\\SolidButton.js"),reactHotLoader.register(_default,"default","C:\\Users\\Admin\\Desktop\\Проекты\\Система нормконтроля 3 семестр\\NormativeControl\\NormativeControl\\Client\\Components\\Buttons\\SolidButton.js")),leaveModule="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0,leaveModule&&leaveModule(module)}).call(this,__webpack_require__(13)(module))},90:function(e,t,r){}}]);