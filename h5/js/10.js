(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"160":function(e,t,n){},"17":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var r=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),a=(_interopRequireDefault(n(1)),_interopRequireDefault(n(0))),o=n(49),i=_interopRequireDefault(n(91)),l=_interopRequireDefault(n(70)),u=_interopRequireDefault(n(52));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}n(160);var s=function(e){function BadgePage(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,BadgePage);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(BadgePage.__proto__||Object.getPrototypeOf(BadgePage)).apply(this,arguments));return e.config={"navigationBarTitleText":"Taro UI"},e.state={},e}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(BadgePage,a.default.Component),r(BadgePage,[{"key":"render","value":function render(){return a.default.createElement(o.View,{"className":"page"},a.default.createElement(u.default,{"title":"Badge 徽标"}),a.default.createElement(o.View,{"className":"doc-body"},a.default.createElement(o.View,{"className":"panel"},a.default.createElement(o.View,{"className":"panel__title"},"数字"),a.default.createElement(o.View,{"className":"panel__content"},a.default.createElement(o.View,{"className":"badge-item"},a.default.createElement(o.View,{"className":"subitem"},a.default.createElement(i.default,{"value":"10","maxValue":"99"},a.default.createElement(l.default,{"size":"small","circle":!0},"按钮"))),a.default.createElement(o.View,{"className":"subitem"},a.default.createElement(i.default,{"value":"100","maxValue":"99"},a.default.createElement(l.default,{"size":"small"},"按钮")))))),a.default.createElement(o.View,{"className":"panel"},a.default.createElement(o.View,{"className":"panel__title"},"小红点"),a.default.createElement(o.View,{"className":"panel__content"},a.default.createElement(o.View,{"className":"badge-item"},a.default.createElement(o.View,{"className":"subitem"},a.default.createElement(i.default,{"dot":!0},a.default.createElement(l.default,{"size":"small","circle":!0},"按钮"))),a.default.createElement(o.View,{"className":"subitem"},a.default.createElement(i.default,{"dot":!0},a.default.createElement(l.default,{"size":"small"},"按钮")))))),a.default.createElement(o.View,{"className":"panel"},a.default.createElement(o.View,{"className":"panel__title"},"文本"),a.default.createElement(o.View,{"className":"panel__content"},a.default.createElement(o.View,{"className":"badge-item"},a.default.createElement(o.View,{"className":"subitem"},a.default.createElement(i.default,{"value":"NEW"},a.default.createElement(l.default,{"size":"small","circle":!0},"按钮"))),a.default.createElement(o.View,{"className":"subitem"},a.default.createElement(i.default,{"value":"NEW"},a.default.createElement(l.default,{"size":"small"},"按钮")))))),a.default.createElement(o.View,{"className":"panel"},a.default.createElement(o.View,{"className":"panel__title"},"省略号"),a.default.createElement(o.View,{"className":"panel__content"},a.default.createElement(o.View,{"className":"badge-item"},a.default.createElement(o.View,{"className":"subitem"},a.default.createElement(i.default,{"value":"···"},a.default.createElement(l.default,{"size":"small","circle":!0},"按钮"))),a.default.createElement(o.View,{"className":"subitem"},a.default.createElement(i.default,{"value":"···"},a.default.createElement(l.default,{"size":"small"},"按钮"))))))))}}]),BadgePage}();t.default=s},"50":function(e,t,n){e.exports=n(54)()},"51":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var r=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=n(1);_interopRequireDefault(o),_interopRequireDefault(n(0));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}var i=function objectToString(e){if("object"===(void 0===e?"undefined":a(e))){var t="";return Object.keys(e).forEach(function(n){var r=n.replace(/([A-Z])/g,"-$1").toLowerCase();t+=r+":"+e[n]+";"}),t}return e},l=function(e){function AtComponent(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,AtComponent),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(AtComponent.__proto__||Object.getPrototypeOf(AtComponent)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(AtComponent,o.Component),r(AtComponent,[{"key":"mergeStyle","value":function mergeStyle(e,t){return i(e)+i(t)}},{"key":"getClassName","value":function getClassName(e){var t=this.props.className;if(!t)return e;var n=e,r=t;return Array.isArray(r)||(r=[r]),Array.isArray(n)||(n=[n]),n.concat(r)}}]),AtComponent}();l.options={"addGlobalClass":!0},t.default=l},"52":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var r=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),a=n(1),o=(_interopRequireDefault(a),_interopRequireDefault(n(0))),i=_interopRequireDefault(n(50)),l=n(49);function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}n(56);var u=function(e){function DocsHeader(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,DocsHeader),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(DocsHeader.__proto__||Object.getPrototypeOf(DocsHeader)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(DocsHeader,a.Component),r(DocsHeader,[{"key":"render","value":function render(){var e=this.props.title;return o.default.createElement(l.View,{"className":"doc-header"},o.default.createElement(l.View,{"className":"doc-header__title"},e))}}]),DocsHeader}();t.default=u,u.defaultProps={"title":"标题"},u.propTypes={"title":i.default.string}},"54":function(e,t,n){"use strict";var r=n(55);function emptyFunction(){}e.exports=function(){function shim(e,t,n,a,o,i){if(i!==r){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function getShim(){return shim}shim.isRequired=shim;var e={"array":shim,"bool":shim,"func":shim,"number":shim,"object":shim,"string":shim,"symbol":shim,"any":shim,"arrayOf":getShim,"element":shim,"instanceOf":getShim,"node":shim,"objectOf":getShim,"oneOf":getShim,"oneOfType":getShim,"shape":getShim,"exact":getShim};return e.checkPropTypes=emptyFunction,e.PropTypes=e,e}},"55":function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},"56":function(e,t,n){},"58":function(e,t,n){var r=n(60).Symbol;e.exports=r},"59":function(e,t,n){var r=n(58),a=n(62),o=n(63),i="[object Null]",l="[object Undefined]",u=r?r.toStringTag:void 0;e.exports=function baseGetTag(e){return null==e?void 0===e?l:i:u&&u in Object(e)?a(e):o(e)}},"60":function(e,t,n){var r=n(61),a="object"==typeof self&&self&&self.Object===Object&&self,o=r||a||Function("return this")();e.exports=o},"61":function(e,t,n){(function(t){var n="object"==typeof t&&t&&t.Object===Object&&t;e.exports=n}).call(this,n(2))},"62":function(e,t,n){var r=n(58),a=Object.prototype,o=a.hasOwnProperty,i=a.toString,l=r?r.toStringTag:void 0;e.exports=function getRawTag(e){var t=o.call(e,l),n=e[l];try{e[l]=void 0;var r=!0}catch(e){}var a=i.call(e);return r&&(t?e[l]=n:delete e[l]),a}},"63":function(e,t){var n=Object.prototype.toString;e.exports=function objectToString(e){return n.call(e)}},"66":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var r=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),a=(_interopRequireDefault(n(1)),_interopRequireDefault(n(0))),o=_interopRequireDefault(n(50)),i=n(49),l=_interopRequireDefault(n(51));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}n(67);var u=function(e){function AtLoading(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,AtLoading),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(AtLoading.__proto__||Object.getPrototypeOf(AtLoading)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(AtLoading,l.default),r(AtLoading,[{"key":"render","value":function render(){var e=this.props,t=e.color,n=e.size,r={"width":n+"px","height":n+"px"},o={"border":"1px solid "+t,"border-color":t+" transparent transparent transparent"},l=Object.assign({},o,r);return a.default.createElement(i.View,{"className":"at-loading","style":r},a.default.createElement(i.View,{"className":"at-loading__ring","style":l}),a.default.createElement(i.View,{"className":"at-loading__ring","style":l}),a.default.createElement(i.View,{"className":"at-loading__ring","style":l}))}}]),AtLoading}();u.defaultProps={"size":"18","color":"#fff"},u.propTypes={"size":o.default.oneOfType([o.default.string,o.default.number]),"color":o.default.oneOfType([o.default.string,o.default.number])},t.default=u},"67":function(e,t,n){},"70":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var r=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),a=_interopRequireDefault(n(1)),o=_interopRequireDefault(n(0)),i=n(49),l=_interopRequireDefault(n(50)),u=_interopRequireDefault(n(66)),s=_interopRequireDefault(n(51));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}n(71);var f={"normal":"normal","small":"small"},c={"primary":"primary","secondary":"secondary"},p=function(e){function AtButton(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,AtButton);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(AtButton.__proto__||Object.getPrototypeOf(AtButton)).apply(this,arguments));return e.state={"isWEAPP":a.default.getEnv()===a.default.ENV_TYPE.WEAPP,"BUTTON_PROPS_FUNC":{"ONGETUSERINFO":"onGetUserInfo","ONGETPHONENUMBER":"onGetPhoneNumber","ONCONTACT":"onContact","ONERROR":"onError","ONOPENSETTING":"onOpenSetting"}},e}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(AtButton,s.default),r(AtButton,[{"key":"onClick","value":function onClick(){var e,t;((e=console).log.apply(e,arguments),this.props.disabled)||this.props.onClick&&(t=this.props).onClick.apply(t,arguments)}},{"key":"onButtonCall","value":function onButtonCall(){var e,t=[].concat(Array.prototype.slice.call(arguments)),n=t.shift();n&&!this.props.disabled&&this.props[n]&&(e=this.props)[n].apply(e,function _toConsumableArray(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}(t))}},{"key":"render","value":function render(){var e=this.props,t=e.size,n=void 0===t?"normal":t,r=e.type,a=void 0===r?"":r,l=e.circle,s=e.loading,p=e.disabled,d=e.customStyle,m=e.formType,b=e.openType,y=e.lang,h=e.sessionFrom,_=e.sendMessageTitle,g=e.sendMessagePath,O=e.sendMessageImg,E=e.showMessageCard,v=e.appParameter,w=this.state,P=w.isWEAPP,N=w.BUTTON_PROPS_FUNC,C=["at-button"],T=f[n]||"",j=p?"at-button--disabled":"",R=c[a]?"at-button--"+a:"",S=l?"at-button--circle":"";C.push("at-button--"+T,R,S,j),C=C.filter(function(e){return""!==e});var V="primary"===a?"#fff":"#6190E8",A="small"===n?"16":"18",k=void 0;return s&&(k=o.default.createElement(i.View,{"className":"at-button__icon"},o.default.createElement(u.default,{"color":V,"size":A})),C.push("at-button--icon")),o.default.createElement(i.View,{"className":this.getClassName(C,this.props.className),"style":d,"onClick":this.onClick.bind(this)},P&&!p&&o.default.createElement(i.Button,{"className":"at-button__wxbutton","formType":m,"openType":b,"lang":y,"sessionFrom":h,"sendMessageTitle":_,"sendMessagePath":g,"sendMessageImg":O,"showMessageCard":E,"appParameter":v,"onGetUserInfo":this.onButtonCall.bind(this,N.ONGETUSERINFO),"onGetPhoneNumber":this.onButtonCall.bind(this,N.ONGETPHONENUMBER),"onOpenSetting":this.onButtonCall.bind(this,N.ONOPENSETTING),"onError":this.onButtonCall.bind(this,N.ONERROR),"onContact":this.onButtonCall.bind(this,N.ONCONTACT)}),k,o.default.createElement(i.View,{"className":"at-button__text"},this.props.children))}}]),AtButton}();t.default=p,p.defaultProps={"size":"normal","type":"","circle":!1,"loading":!1,"disabled":!1,"customStyle":{},"onClick":function onClick(){},"formType":"","openType":"","lang":"en","sessionFrom":"","sendMessageTitle":"","sendMessagePath":"","sendMessageImg":"","showMessageCard":!1,"appParameter":"","onGetUserInfo":function onGetUserInfo(){},"onContact":function onContact(){},"onGetPhoneNumber":function onGetPhoneNumber(){},"onError":function onError(){},"onOpenSetting":function onOpenSetting(){}},p.propTypes={"size":l.default.oneOf(["normal","small"]),"type":l.default.oneOf(["primary","secondary"]),"circle":l.default.bool,"loading":l.default.bool,"disabled":l.default.bool,"onClick":l.default.func,"customStyle":l.default.oneOfType([l.default.object,l.default.string]),"formType":l.default.oneOf(["submit","reset"]),"openType":l.default.oneOf(["contact","share","getUserInfo","getPhoneNumber","launchApp","openSetting","feedback","getRealnameAuthInfo"]),"lang":l.default.string,"sessionFrom":l.default.string,"sendMessageTitle":l.default.string,"sendMessagePath":l.default.string,"sendMessageImg":l.default.string,"showMessageCard":l.default.bool,"appParameter":l.default.string,"onGetUserInfo":l.default.func,"onContact":l.default.func,"onGetPhoneNumber":l.default.func,"onError":l.default.func,"onOpenSetting":l.default.func}},"71":function(e,t,n){},"79":function(e,t){e.exports=function isObjectLike(e){return null!=e&&"object"==typeof e}},"91":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var r=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),a=(_interopRequireDefault(n(1)),_interopRequireDefault(n(50))),o=_interopRequireDefault(n(0)),i=n(49),l=_interopRequireDefault(n(92)),u=_interopRequireDefault(n(51));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}n(94);var s=function(e){function AtBadge(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,AtBadge);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(AtBadge.__proto__||Object.getPrototypeOf(AtBadge)).apply(this,arguments));return e.state={},e}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(AtBadge,u.default),r(AtBadge,[{"key":"formatValue","value":function formatValue(e,t){if(""===e||null===e)return"";var n=+e;return(0,l.default)(n)?e:n>t?t+"+":n}},{"key":"render","value":function render(){var e=this.props,t=e.dot,n=e.value,r=e.maxValue,a=e.customStyle,l=this.formatValue(n,r);return o.default.createElement(i.View,{"className":this.getClassName(["at-badge"],this.props.className),"style":a},this.props.children,t?o.default.createElement(i.View,{"className":"at-badge__dot"}):""!==l&&o.default.createElement(i.View,{"className":"at-badge__num"},l))}}]),AtBadge}();t.default=s,s.defaultProps={"dot":!1,"value":"","maxValue":99,"customStyle":{}},s.propTypes={"dot":a.default.bool,"value":a.default.oneOfType([a.default.string,a.default.number]),"maxValue":a.default.number,"customStyle":a.default.oneOfType([a.default.object,a.default.string])}},"92":function(e,t,n){var r=n(93);e.exports=function isNaN(e){return r(e)&&e!=+e}},"93":function(e,t,n){var r=n(59),a=n(79),o="[object Number]";e.exports=function isNumber(e){return"number"==typeof e||a(e)&&r(e)==o}},"94":function(e,t,n){}}]);