(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("jQuery"));
	else if(typeof define === 'function' && define.amd)
		define(["jQuery"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("jQuery")) : factory(root["jQuery"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 *
	 * example
	 * @author vfasky <vfasky@gmail.com>
	 **/
	"use strict";
	
	var _jquery = __webpack_require__(1);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	var _mcore = __webpack_require__(2);
	
	var _mcore2 = _interopRequireDefault(_mcore);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.app = function ($main) {
	    var app = new _mcore2.default.App($main);
	
	    app.route('/table', __webpack_require__(24).default).route('/removeItem', __webpack_require__(27).default).route('/changeItem', __webpack_require__(29).default).route('/addItem', __webpack_require__(31).default).route('/findItem', __webpack_require__(33).default).route('/pagination', __webpack_require__(35).default).route('/', __webpack_require__(40).default).run();
	
	    return app;
	};

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 *
	 * mcore version 3
	 * @author vfasky <vfasky@gmail.com>
	 **/
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _util = __webpack_require__(3);
	
	var util = _interopRequireWildcard(_util);
	
	var _element = __webpack_require__(4);
	
	var _element2 = _interopRequireDefault(_element);
	
	var _template = __webpack_require__(5);
	
	var _template2 = _interopRequireDefault(_template);
	
	var _eventEmitter = __webpack_require__(6);
	
	var _eventEmitter2 = _interopRequireDefault(_eventEmitter);
	
	var _component = __webpack_require__(10);
	
	var _component2 = _interopRequireDefault(_component);
	
	var _route = __webpack_require__(18);
	
	var route = _interopRequireWildcard(_route);
	
	var _view = __webpack_require__(21);
	
	var _view2 = _interopRequireDefault(_view);
	
	var _app = __webpack_require__(22);
	
	var _app2 = _interopRequireDefault(_app);
	
	var _http = __webpack_require__(23);
	
	var _http2 = _interopRequireDefault(_http);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	exports.default = {
	    version: '3',
	    util: util,
	    route: route,
	    http: _http2.default,
	    Element: _element2.default,
	    Template: _template2.default,
	    EventEmitter: _eventEmitter2.default,
	    Component: _component2.default,
	    View: _view2.default,
	    App: _app2.default
	};

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 *
	 * 工具类
	 * @author vfasky <vfasky@gmail.com>
	 **/
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	exports.isIOS = isIOS;
	exports.isWeixinBrowser = isWeixinBrowser;
	exports.get$ = get$;
	exports.each = each;
	exports.isNumber = isNumber;
	exports.isArray = isArray;
	exports.isString = isString;
	exports.type = type;
	exports.isFunction = isFunction;
	exports.isObject = isObject;
	exports.isPlainObject = isPlainObject;
	exports.extend = extend;
	exports.getEvents = getEvents;
	exports.getComponents = getComponents;
	exports.getObjAttrByPath = getObjAttrByPath;
	exports.parseDynamicVal = parseDynamicVal;
	exports.callFormatter = callFormatter;
	exports.nextTick = nextTick;
	var $;
	var _varReg = /(^[a-zA-Z0-9_-]+)$/;
	
	var _isIOS = null;
	var _isWeixinBrowser = null;
	
	function isIOS() {
	    if (_isIOS === null) {
	        _isIOS = (typeof window === 'undefined' ? 'undefined' : _typeof(window)) == 'object' && /iphone|ipad/gi.test(window.navigator.appVersion);
	    }
	    return _isIOS;
	}
	
	function isWeixinBrowser() {
	    if (_isWeixinBrowser === null) {
	        _isWeixinBrowser = (typeof window === 'undefined' ? 'undefined' : _typeof(window)) == 'object' && /MicroMessenger/i.test(window.navigator.userAgent);
	    }
	    return _isWeixinBrowser;
	}
	
	function get$() {
	    if ($) {
	        return $;
	    }
	    if ((typeof window === 'undefined' ? 'undefined' : _typeof(window)) == 'object' && typeof window.$ == 'function') {
	        $ = window.$;
	        return window.$;
	    }
	    $ = __webpack_require__(1);
	    return $;
	}
	
	function each(arr, callback) {
	    get$().each(arr, function (k, v) {
	        return callback(v, k);
	    });
	}
	
	function isNumber(x) {
	    return get$().isNumeric(x);
	}
	
	function isArray(x) {
	    return get$().isArray(x);
	}
	
	function isString(x) {
	    return get$().type(x) === 'string';
	}
	
	function type(x) {
	    return get$().type(x);
	}
	
	function isFunction(x) {
	    return get$().isFunction(x);
	}
	
	/**
	 * 兼容 mcore 2
	 */
	function isObject(x) {
	    return get$().isPlainObject(x);
	}
	
	function isPlainObject(x) {
	    return get$().isPlainObject(x);
	}
	
	function extend(x) {
	    if (isArray(x)) {
	        return get$().extend(true, [], x);
	    }
	    return get$().extend(true, {}, x);
	}
	
	function getEvents(element) {
	    var events = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	
	    if (element.children) {
	        element.children.forEach(function (child) {
	            getEvents(child, events);
	        });
	    }
	
	    Object.keys(element.events).forEach(function (name) {
	        var curEvent = element.events[name];
	        if (!events.hasOwnProperty(name)) {
	            events[name] = [];
	        }
	        events[name].push({
	            funName: curEvent.funName,
	            args: curEvent.args,
	            target: function target() {
	                // console.log(element);
	                return element.refs;
	            },
	            element: element
	        });
	    });
	
	    return events;
	}
	
	function getComponents(element) {
	    var components = arguments.length <= 1 || arguments[1] === undefined ? [] : arguments[1];
	
	    if (!element) {
	        return components;
	    }
	    if (element.children) {
	        element.children.forEach(function (child) {
	            getComponents(child, components);
	        });
	    }
	
	    if (element._component) {
	        components.push(element._component);
	    }
	
	    return components;
	}
	
	function getObjAttrByPath(path) {
	    var obj = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	
	    if (path.indexOf('.') === -1) {
	        return obj[path];
	    }
	    var pathArr = path.split('.');
	    var curObj = obj;
	
	    each(pathArr, function (curPath) {
	        if (isNumber(curPath) && isArray(curObj)) {
	            var ix = parseInt(curPath);
	            if (ix < curObj.length) {
	                curObj = curObj[ix];
	                return;
	            } else {
	                curObj = null;
	                return false;
	            }
	        } else if (isObject(curObj) && curObj.hasOwnProperty(curPath)) {
	            curObj = curObj[curPath];
	            return;
	        } else {
	            curObj = null;
	            return false;
	        }
	    });
	
	    return curObj;
	}
	
	function parseDynamicVal(dynamicCode, dynamicCodeStr, view) {
	    if (typeof dynamicCode != 'undefined' && typeof Element === 'function' && false === dynamicCode instanceof Element) {
	        return dynamicCode == 'undefined' ? '' : dynamicCode;
	    } else if (typeof view[dynamicCode] != 'undefined') {
	        return view[dynamicCode];
	    } else if (_varReg.test(dynamicCodeStr)) {
	        return dynamicCodeStr == 'undefined' ? '' : dynamicCodeStr;
	    } else {
	        return '';
	    }
	}
	
	function callFormatter(formatterName, mcore) {
	    if (mcore.Template.formatters.hasOwnProperty(formatterName)) {
	        return mcore.Template.formatters[formatterName];
	    }
	    return function () {};
	}
	
	/**
	 * 放到下一帧执行
	 */
	function nextTick(fun) {
	    if (typeof requestAnimationFrame == 'function') {
	        return requestAnimationFrame(function () {
	            fun();
	        });
	    } else {
	        return setTimeout(function () {
	            fun();
	        }, 0);
	    }
	}
	nextTick.clear = function (id) {
	    if (typeof requestAnimationFrame == 'function') {
	        return cancelAnimationFrame(id);
	    } else {
	        return clearTimeout(id);
	    }
	};

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 *
	 * mcore element
	 * @author vfasky <vfasky@gmail.com>
	 **/
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _template = __webpack_require__(5);
	
	var _template2 = _interopRequireDefault(_template);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Element = function () {
	    function Element(tagName, key) {
	        var props = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];
	        var dynamicProps = arguments.length <= 3 || arguments[3] === undefined ? {} : arguments[3];
	        var children = arguments.length <= 4 || arguments[4] === undefined ? [] : arguments[4];
	
	        var _this = this;
	
	        var events = arguments.length <= 5 || arguments[5] === undefined ? {} : arguments[5];
	        var view = arguments.length <= 6 || arguments[6] === undefined ? null : arguments[6];
	
	        _classCallCheck(this, Element);
	
	        this.tagName = tagName.trim().toLowerCase();
	        this.key = key;
	        //静态属性
	        this.props = props;
	        // this.props._key = key;
	        //动态属性
	        this.dynamicProps = dynamicProps;
	        //子元素
	        this.children = children;
	        //事件
	        this.events = events;
	
	        //上级 element
	        this.parentElement = null;
	
	        //所属的view
	        this.view = view;
	
	        if (false === Array.isArray(children)) {
	            children = [];
	        }
	
	        var count = 0;
	        children.forEach(function (child, i) {
	            if (child instanceof Element) {
	                //指定上级
	                child.parentElement = _this;
	                count += child.count;
	            } else {
	                _this.children[i] = String(child);
	            }
	            count++;
	        });
	        //子节点数量
	        this.count = count;
	    }
	
	    _createClass(Element, [{
	        key: 'cloneElement',
	        value: function cloneElement(element) {
	            var _this2 = this;
	
	            this._component = element._component;
	            this.template = element.template;
	            this.template.element = this;
	            this.refs = element.refs;
	
	            //设置动态属性
	            Object.keys(this.dynamicProps).forEach(function (attr) {
	                // console.log(attr);
	                _this2.template.setAttr(attr.toLowerCase(), _this2.dynamicProps[attr], true, 'update');
	            });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            this.template = new _template2.default(this);
	            this.refs = this.template.render();
	            // console.log(this.refs);
	            return this.refs;
	        }
	    }, {
	        key: 'destroy',
	        value: function destroy(notRemove) {
	            if (this.template) {
	                this.template.destroy(notRemove);
	            }
	        }
	    }]);
	
	    return Element;
	}();
	
	exports.default = Element;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 *
	 * 模板渲染
	 * @author vfasky <vfasky@gmail.com>
	 **/
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _util = __webpack_require__(3);
	
	var util = _interopRequireWildcard(_util);
	
	var _eventEmitter = __webpack_require__(6);
	
	var _eventEmitter2 = _interopRequireDefault(_eventEmitter);
	
	var _binders = __webpack_require__(8);
	
	var _binders2 = _interopRequireDefault(_binders);
	
	var _formatters = __webpack_require__(9);
	
	var _formatters2 = _interopRequireDefault(_formatters);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var getComponents = util.getComponents;
	
	/**
	 * 模板引擎
	 */
	
	var Template = function (_EventEmitter) {
	    _inherits(Template, _EventEmitter);
	
	    function Template(element) {
	        _classCallCheck(this, Template);
	
	        //标记是否监听事件
	
	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Template).call(this));
	
	        _this._isWatchEvent = false;
	
	        _this.element = element;
	        //子元素的自定义组件
	        _this.childrenComponent = [];
	        return _this;
	    }
	
	    _createClass(Template, [{
	        key: 'destroy',
	        value: function destroy(notRemove) {
	
	            getComponents(this.element).forEach(function (component) {
	                component.destroy();
	            });
	
	            // 移除自身
	            if (!notRemove) {
	                if (this.refs && this.refs.parentNode && this.refs.parentNode.removeChild) {
	                    this.refs.parentNode.removeChild(this.refs);
	                }
	            }
	            this.emit('destroy');
	        }
	
	        /**
	         * 渲染 node
	         * @method render
	         * @return {Element}
	         */
	
	    }, {
	        key: 'render',
	        value: function render(oldNode) {
	            var _this2 = this;
	
	            var node = void 0;
	            if (this.element.tagName == '_textnode') {
	
	                if (this.element.dynamicProps.hasOwnProperty('text')) {
	                    node = document.createTextNode(this.element.dynamicProps.text);
	                } else {
	                    node = document.createTextNode(this.element.props.text);
	                }
	                node._key = this.element.key;
	                // console.log(this.element.key, this.element);
	                this.refs = node;
	                // node._element = this.element;
	                return node;
	            }
	            node = document.createElement(this.element.tagName);
	
	            node._key = this.element.key;
	            this.refs = node;
	            node._element = this.element;
	
	            // 自定义组件初始化，子元素由 自定义组件 自己管理
	            if (Template.components.hasOwnProperty(this.element.tagName)) {
	                // 自定义组件，先设置静态属性
	                Object.keys(this.element.props).forEach(function (attr) {
	                    _this2.setAttr(attr.toLowerCase(), _this2.element.props[attr]);
	                });
	                //设置动态属性
	                Object.keys(this.element.dynamicProps).forEach(function (attr) {
	                    _this2.setAttr(attr.toLowerCase(), _this2.element.dynamicProps[attr], true);
	                });
	                this.element._component = new Template.components[this.element.tagName](node, this.element);
	
	                this.element._noDiffChild = true;
	                this.element.children = [];
	                this.element.count = 0;
	                node._component = this.element._component;
	                //兼容mcore2 要开启
	                // Object.keys(this.element.dynamicProps).forEach((attr)=>{
	                //     this.element._component.update(attr.toLowerCase(), this.element.dynamicProps[attr]);
	                // });
	            }
	            // 非自定义组件，渲染子元素
	            else {
	                    this.element.children.forEach(function (child) {
	                        if (child.render) {
	                            var childNode = child.render();
	                            if (childNode) {
	                                //收集自定义组件
	                                if (child._component) {
	                                    _this2.childrenComponent.push(child._component);
	                                }
	                                //收集子元素的所有自定义组件
	                                if (child.childrenComponent && child.childrenComponent.length) {
	                                    child.childrenComponent.forEach(function (c) {
	                                        _this2.childrenComponent.push(c);
	                                    });
	                                }
	
	                                _this2.refs.appendChild(childNode);
	                            } else {
	                                console.log(childNode);
	                            }
	                        } else {
	                            console.log(child);
	                            throw new Error('child not Mcore Element');
	                        }
	                    });
	                    //设置静态属性
	                    Object.keys(this.element.props).forEach(function (attr) {
	                        _this2.setAttr(attr.toLowerCase(), _this2.element.props[attr]);
	                    });
	                    //设置动态属性
	                    Object.keys(this.element.dynamicProps).forEach(function (attr) {
	                        _this2.setAttr(attr.toLowerCase(), _this2.element.dynamicProps[attr], true);
	                    });
	                }
	
	            return node;
	        }
	
	        /**
	         * 调用自定义属性
	         * @method callBinder
	         * @param  {Function | Object}   binder
	         * @param  {String}   status
	         * @param  {Mixed}   value
	         * @param  {Mixed}   attrValue
	         * @return {Void}
	         */
	
	    }, {
	        key: 'callBinder',
	        value: function callBinder(binder, status, value, attrValue) {
	            if ((0, _util.isFunction)(binder)) {
	                this.element._binder = true;
	                binder(this.refs, value, attrValue);
	                return;
	            }
	            if (status === 'init') {
	                if ((0, _util.isFunction)(binder.init)) {
	                    this.element._binder = true;
	                    binder.init(this.refs, value, attrValue);
	                }
	                //兼容mcore2
	                if ((0, _util.isFunction)(binder.rendered)) {
	                    this.element._binder = true;
	                    binder.rendered(this.refs, value, attrValue);
	                }
	            } else {
	                var binderFun = binder[status];
	                if ((0, _util.isFunction)(binderFun)) {
	                    this.element._binder = true;
	                    binderFun(this.refs, value, attrValue);
	                }
	            }
	        }
	
	        /**
	         * 通知更新的值
	         */
	
	    }, {
	        key: 'update',
	        value: function update(attr, value, status) {
	            if (this.element._component) {
	                this.element._component.update(attr, value, status);
	            }
	            this.emit(status, attr, value);
	            this.emit('change:' + attr, value);
	        }
	
	        /**
	         * 设置 node 属性
	         * @method setAttr
	         * @param  {String}  attr
	         * @param  {Mixed}  value
	         * @param  {Boolean} isDynamic = false
	         * @param  {String}  status    = 'init'
	         */
	
	    }, {
	        key: 'setAttr',
	        value: function setAttr(attr, value) {
	            var isDynamic = arguments.length <= 2 || arguments[2] === undefined ? false : arguments[2];
	            var status = arguments.length <= 3 || arguments[3] === undefined ? 'init' : arguments[3];
	
	            //处理动态属性
	            if (isDynamic) {
	                if (false === this.element.dynamicProps.hasOwnProperty(attr)) {
	                    return;
	                }
	                if (Template.binders.hasOwnProperty(attr)) {
	                    var binder = Template.binders[attr];
	                    this.callBinder(binder, status, value);
	                    return;
	                }
	                //处理 mc-class-* (mc-class-test="true" => 'class-test': true)的情况
	                var TemplateBinderKeys = Object.keys(Template.binders);
	                var _iteratorNormalCompletion = true;
	                var _didIteratorError = false;
	                var _iteratorError = undefined;
	
	                try {
	                    for (var _iterator = TemplateBinderKeys[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                        var binderAttr = _step.value;
	
	                        if (binderAttr.indexOf('*')) {
	                            var t = binderAttr.split('*');
	                            if (t.length === 2) {
	                                var attrPrefix = t[0];
	                                var attrValue = attr.replace(attrPrefix, '');
	                                if (attr.indexOf(attrPrefix) === 0) {
	                                    var _binder = Template.binders[binderAttr];
	                                    this.callBinder(_binder, status, value, attrValue);
	                                    return;
	                                }
	                            }
	                        }
	                    }
	                } catch (err) {
	                    _didIteratorError = true;
	                    _iteratorError = err;
	                } finally {
	                    try {
	                        if (!_iteratorNormalCompletion && _iterator.return) {
	                            _iterator.return();
	                        }
	                    } finally {
	                        if (_didIteratorError) {
	                            throw _iteratorError;
	                        }
	                    }
	                }
	
	                if (status != 'init') {
	                    this.update(attr, value, status);
	                }
	            }
	            if (attr === 'class') {
	                this.refs.className = value;
	                return;
	            } else if (attr === 'style') {
	                this.refs.style.cssText = value;
	                return;
	            }
	            // else if(attr === '_key'){
	            //     return;
	            // }
	
	            var tagName = this.element.tagName;
	
	            if (attr === 'value' && ['input', 'textarea', 'select'].indexOf(tagName) !== -1) {
	                this.refs.value = value;
	                return;
	            }
	            if ((0, _util.isNumber)(value) || (0, _util.isString)(value)) {
	                this.refs.setAttribute(attr, value);
	            }
	        }
	    }]);
	
	    return Template;
	}(_eventEmitter2.default);
	
	/**
	 * 自定义组件
	 * @type {Object}
	 */
	
	
	exports.default = Template;
	Template.components = {};
	/**
	 * 自定义属性
	 * @type {Object}
	 */
	Template.binders = _binders2.default;
	
	/**
	 * 过滤函数
	 * @type {Object}
	 */
	Template.formatters = _formatters2.default;
	
	//兼容mcore2
	Template.strToFun = function (el, value) {
	    if (!el._element || !el._element.view || !el._element.view[value]) {
	        return function () {};
	    }
	    return function () {
	        return el._element.view[value].apply(el._element.view, arguments);
	    };
	};
	Template.getEnv = function (el) {
	    return el._element.view;
	};

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 *
	 * event Emitter
	 * @author vfasky <vfasky@gmail.com>
	 **/
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _eventemitter = __webpack_require__(7);
	
	var _eventemitter2 = _interopRequireDefault(_eventemitter);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _eventemitter2.default;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var has = Object.prototype.hasOwnProperty;
	
	//
	// We store our EE objects in a plain object whose properties are event names.
	// If `Object.create(null)` is not supported we prefix the event names with a
	// `~` to make sure that the built-in object properties are not overridden or
	// used as an attack vector.
	// We also assume that `Object.create(null)` is available when the event name
	// is an ES6 Symbol.
	//
	var prefix = typeof Object.create !== 'function' ? '~' : false;
	
	/**
	 * Representation of a single EventEmitter function.
	 *
	 * @param {Function} fn Event handler to be called.
	 * @param {Mixed} context Context for function execution.
	 * @param {Boolean} [once=false] Only emit once
	 * @api private
	 */
	function EE(fn, context, once) {
	  this.fn = fn;
	  this.context = context;
	  this.once = once || false;
	}
	
	/**
	 * Minimal EventEmitter interface that is molded against the Node.js
	 * EventEmitter interface.
	 *
	 * @constructor
	 * @api public
	 */
	function EventEmitter() { /* Nothing to set */ }
	
	/**
	 * Hold the assigned EventEmitters by name.
	 *
	 * @type {Object}
	 * @private
	 */
	EventEmitter.prototype._events = undefined;
	
	/**
	 * Return an array listing the events for which the emitter has registered
	 * listeners.
	 *
	 * @returns {Array}
	 * @api public
	 */
	EventEmitter.prototype.eventNames = function eventNames() {
	  var events = this._events
	    , names = []
	    , name;
	
	  if (!events) return names;
	
	  for (name in events) {
	    if (has.call(events, name)) names.push(prefix ? name.slice(1) : name);
	  }
	
	  if (Object.getOwnPropertySymbols) {
	    return names.concat(Object.getOwnPropertySymbols(events));
	  }
	
	  return names;
	};
	
	/**
	 * Return a list of assigned event listeners.
	 *
	 * @param {String} event The events that should be listed.
	 * @param {Boolean} exists We only need to know if there are listeners.
	 * @returns {Array|Boolean}
	 * @api public
	 */
	EventEmitter.prototype.listeners = function listeners(event, exists) {
	  var evt = prefix ? prefix + event : event
	    , available = this._events && this._events[evt];
	
	  if (exists) return !!available;
	  if (!available) return [];
	  if (available.fn) return [available.fn];
	
	  for (var i = 0, l = available.length, ee = new Array(l); i < l; i++) {
	    ee[i] = available[i].fn;
	  }
	
	  return ee;
	};
	
	/**
	 * Emit an event to all registered event listeners.
	 *
	 * @param {String} event The name of the event.
	 * @returns {Boolean} Indication if we've emitted an event.
	 * @api public
	 */
	EventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
	  var evt = prefix ? prefix + event : event;
	
	  if (!this._events || !this._events[evt]) return false;
	
	  var listeners = this._events[evt]
	    , len = arguments.length
	    , args
	    , i;
	
	  if ('function' === typeof listeners.fn) {
	    if (listeners.once) this.removeListener(event, listeners.fn, undefined, true);
	
	    switch (len) {
	      case 1: return listeners.fn.call(listeners.context), true;
	      case 2: return listeners.fn.call(listeners.context, a1), true;
	      case 3: return listeners.fn.call(listeners.context, a1, a2), true;
	      case 4: return listeners.fn.call(listeners.context, a1, a2, a3), true;
	      case 5: return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
	      case 6: return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
	    }
	
	    for (i = 1, args = new Array(len -1); i < len; i++) {
	      args[i - 1] = arguments[i];
	    }
	
	    listeners.fn.apply(listeners.context, args);
	  } else {
	    var length = listeners.length
	      , j;
	
	    for (i = 0; i < length; i++) {
	      if (listeners[i].once) this.removeListener(event, listeners[i].fn, undefined, true);
	
	      switch (len) {
	        case 1: listeners[i].fn.call(listeners[i].context); break;
	        case 2: listeners[i].fn.call(listeners[i].context, a1); break;
	        case 3: listeners[i].fn.call(listeners[i].context, a1, a2); break;
	        default:
	          if (!args) for (j = 1, args = new Array(len -1); j < len; j++) {
	            args[j - 1] = arguments[j];
	          }
	
	          listeners[i].fn.apply(listeners[i].context, args);
	      }
	    }
	  }
	
	  return true;
	};
	
	/**
	 * Register a new EventListener for the given event.
	 *
	 * @param {String} event Name of the event.
	 * @param {Function} fn Callback function.
	 * @param {Mixed} [context=this] The context of the function.
	 * @api public
	 */
	EventEmitter.prototype.on = function on(event, fn, context) {
	  var listener = new EE(fn, context || this)
	    , evt = prefix ? prefix + event : event;
	
	  if (!this._events) this._events = prefix ? {} : Object.create(null);
	  if (!this._events[evt]) this._events[evt] = listener;
	  else {
	    if (!this._events[evt].fn) this._events[evt].push(listener);
	    else this._events[evt] = [
	      this._events[evt], listener
	    ];
	  }
	
	  return this;
	};
	
	/**
	 * Add an EventListener that's only called once.
	 *
	 * @param {String} event Name of the event.
	 * @param {Function} fn Callback function.
	 * @param {Mixed} [context=this] The context of the function.
	 * @api public
	 */
	EventEmitter.prototype.once = function once(event, fn, context) {
	  var listener = new EE(fn, context || this, true)
	    , evt = prefix ? prefix + event : event;
	
	  if (!this._events) this._events = prefix ? {} : Object.create(null);
	  if (!this._events[evt]) this._events[evt] = listener;
	  else {
	    if (!this._events[evt].fn) this._events[evt].push(listener);
	    else this._events[evt] = [
	      this._events[evt], listener
	    ];
	  }
	
	  return this;
	};
	
	/**
	 * Remove event listeners.
	 *
	 * @param {String} event The event we want to remove.
	 * @param {Function} fn The listener that we need to find.
	 * @param {Mixed} context Only remove listeners matching this context.
	 * @param {Boolean} once Only remove once listeners.
	 * @api public
	 */
	EventEmitter.prototype.removeListener = function removeListener(event, fn, context, once) {
	  var evt = prefix ? prefix + event : event;
	
	  if (!this._events || !this._events[evt]) return this;
	
	  var listeners = this._events[evt]
	    , events = [];
	
	  if (fn) {
	    if (listeners.fn) {
	      if (
	           listeners.fn !== fn
	        || (once && !listeners.once)
	        || (context && listeners.context !== context)
	      ) {
	        events.push(listeners);
	      }
	    } else {
	      for (var i = 0, length = listeners.length; i < length; i++) {
	        if (
	             listeners[i].fn !== fn
	          || (once && !listeners[i].once)
	          || (context && listeners[i].context !== context)
	        ) {
	          events.push(listeners[i]);
	        }
	      }
	    }
	  }
	
	  //
	  // Reset the array, or remove it completely if we have no more listeners.
	  //
	  if (events.length) {
	    this._events[evt] = events.length === 1 ? events[0] : events;
	  } else {
	    delete this._events[evt];
	  }
	
	  return this;
	};
	
	/**
	 * Remove all listeners or only the listeners for the specified event.
	 *
	 * @param {String} event The event want to remove all listeners for.
	 * @api public
	 */
	EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
	  if (!this._events) return this;
	
	  if (event) delete this._events[prefix ? prefix + event : event];
	  else this._events = prefix ? {} : Object.create(null);
	
	  return this;
	};
	
	//
	// Alias methods names because people roll like that.
	//
	EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
	EventEmitter.prototype.addListener = EventEmitter.prototype.on;
	
	//
	// This function doesn't apply anymore.
	//
	EventEmitter.prototype.setMaxListeners = function setMaxListeners() {
	  return this;
	};
	
	//
	// Expose the prefix.
	//
	EventEmitter.prefixed = prefix;
	
	//
	// Expose the module.
	//
	if (true) {
	  module.exports = EventEmitter;
	}


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 *
	 * 模板自定义属性
	 * @author vfasky <vfasky@gmail.com>
	 **/
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _util = __webpack_require__(3);
	
	var binders = {};
	
	binders.show = function (el, value) {
	    el.style.display = value ? '' : 'none';
	};
	
	binders.hide = function (el, value) {
	    el.style.display = value ? 'none' : '';
	};
	
	binders.checked = function (el, value) {
	    el.checked = value ? true : false;
	};
	
	binders.disabled = function (el, value) {
	    el.disabled = value ? true : false;
	};
	
	binders.focus = function (el, value) {
	    if (el.focus && value) {
	        el.focus();
	    } else if (el.blur && !value) {
	        el.blur();
	    }
	};
	
	binders.blur = function (el, value) {
	    if (el.focus && !value) {
	        el.focus();
	    } else if (el.blur && value) {
	        el.blur();
	    }
	};
	
	binders.html = function (el, value) {
	    el.innerHTML = value ? value : '';
	    el._element._noDiffChild = true;
	};
	
	// 声明不要diff子节点
	binders['no-diff-child'] = function (el, value) {
	    el._element._noDiffChild = value ? true : false;
	};
	
	binders['class-*'] = function (el, value, attrValue) {
	    var classNames = String(el.className || '').split(' ').filter(function (name) {
	        return name.trim().length;
	    }).map(function (name) {
	        return name.trim();
	    });
	    var ix = classNames.indexOf(attrValue);
	    if (!value) {
	        if (ix !== -1) {
	            classNames.splice(ix, 1);
	            el.className = classNames.join(' ');
	        }
	    } else {
	        if (ix == -1) {
	            classNames.push(attrValue);
	            el.className = classNames.join(' ');
	        }
	    }
	};
	
	binders['load-data'] = binders['from-load-data'] = {
	    init: function init(el, data) {
	        if (el.tagName.toLowerCase() !== 'form' || !el._element) {
	            return el.setAttribute('load-data', data);
	        }
	        var $ = (0, _util.get$)();
	        var $form = $(el);
	        Object.keys(data).forEach(function (k) {
	            var v = data[k];
	            var $el = $form.find('[name=' + k + ']');
	            if ($el.is('[type=checkbox],[type=radio]')) {
	                $el.prop('checked', String($el.val()) == String(v));
	            } else {
	                $el.val(v);
	            }
	        });
	    }
	};
	
	binders['form-sync'] = {
	    init: function init(el, dataKey) {
	        if (el.tagName.toLowerCase() !== 'form' || !el._element || !el._element.view) {
	            return el.setAttribute('sync', dataKey);
	        }
	        var view = el._element.view;
	        var $ = (0, _util.get$)();
	        var $form = $(el);
	        var soure = dataKey;
	        if ((0, _util.isString)(dataKey)) {
	            soure = (0, _util.getObjAttrByPath)(dataKey, view.scope);
	        }
	
	        $form.on('change', '[name]', function () {
	            var $el = $(this);
	            var name = $el.attr('name');
	            if (name && soure) {
	                if ($el.is('[type=checkbox],[type=radio]')) {
	                    var val = $el.prop('checked') ? this.value : '';
	                    soure[name] = val;
	                } else {
	                    soure[name] = this.value;
	                }
	            }
	        });
	    }
	};
	
	exports.default = binders;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 *
	 * 过滤函数
	 * @author vfasky <vfasky@gmail.com>
	 **/
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _util = __webpack_require__(3);
	
	var $ = (0, _util.get$)();
	
	var formatters = {};
	
	formatters.toNumber = function (x) {
	    if ((0, _util.isNumber)(x)) {
	        return Number(x);
	    }
	    return 0;
	};
	
	formatters.toFixed = function (x) {
	    var len = arguments.length <= 1 || arguments[1] === undefined ? 1 : arguments[1];
	
	    return formatters.toNumber(x).toFixed(len);
	};
	
	formatters.in = function (x) {
	    for (var _len = arguments.length, arr = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        arr[_key - 1] = arguments[_key];
	    }
	
	    return arr.indexOf(x) !== -1;
	};
	
	formatters.objToStyle = function (value) {
	    var autoPx = ['width', 'height', 'left', 'top', 'right', 'bottom', 'margin-top', 'margin-left', 'margin-right', 'margin-bottom', 'padding-top', 'padding-left', 'padding-right', 'padding-bottom'];
	    var css = [];
	
	    Object.keys(value).forEach(function (key) {
	        var val = value[key];
	        if (autoPx.indexOf(key) !== -1 && (0, _util.isNumber)(val)) {
	            val = val + 'px';
	        }
	        css.push(key + ': ' + val);
	    });
	
	    return css.join(';');
	};
	
	exports.default = formatters;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 *
	 * 组件
	 * @author vfasky <vfasky@gmail.com>
	 **/
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _eventEmitter = __webpack_require__(6);
	
	var _eventEmitter2 = _interopRequireDefault(_eventEmitter);
	
	var _util = __webpack_require__(3);
	
	var util = _interopRequireWildcard(_util);
	
	var _template = __webpack_require__(5);
	
	var _template2 = _interopRequireDefault(_template);
	
	var _element = __webpack_require__(4);
	
	var _element2 = _interopRequireDefault(_element);
	
	var _diff = __webpack_require__(11);
	
	var _diff2 = _interopRequireDefault(_diff);
	
	var _patch = __webpack_require__(12);
	
	var _patch2 = _interopRequireDefault(_patch);
	
	var _watch = __webpack_require__(15);
	
	var _watch2 = _interopRequireDefault(_watch);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var isFunction = util.isFunction;
	var nextTick = util.nextTick;
	var getEvents = util.getEvents;
	var getComponents = util.getComponents;
	
	var templateHelper = {
	    Template: _template2.default,
	    util: util,
	    Element: _element2.default
	};
	
	var keyCode = {
	    keyenter: 13, // mcore 2
	    keyesc: 27, // mcore 2
	    'key-enter': 13,
	    'key-esc': 27,
	    'key-back': 8,
	    'key-tab': 9,
	    'key-left': 37,
	    'key-up': 38,
	    'key-right': 39,
	    'key-down': 40,
	    'key-escape': 27
	};
	
	var $_win = null;
	var $_body = null;
	var _id = 0;
	
	var notProxyEvents = ['focus', 'blur'];
	
	var Component = function (_EventEmitter) {
	    _inherits(Component, _EventEmitter);
	
	    function Component(parentNode) {
	        var parentElement = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	        var args = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];
	
	        _classCallCheck(this, Component);
	
	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Component).call(this));
	
	        Object.keys(args).forEach(function (key) {
	            _this[key] = args[key];
	        });
	        _this.parentNode = parentNode;
	        //兼容mcore2
	        _this.el = parentNode;
	        _this.parentElement = parentElement;
	        // 渲染完成，回调队列
	        _this._queueCallbacks = [];
	        // 正在排队的渲染队列id
	        _this._queueId = null;
	        // 存放注册事件
	        _this._regEvents = [];
	
	        _this._initWatchScope = false;
	
	        _this.id = _id++;
	
	        _this.virtualDom = null;
	
	        // 存放 window 及 body 引用
	        if ($_win === null || $_body === null) {
	            $_win = util.get$()(window);
	            $_body = util.get$()('body');
	        }
	        _this.$win = $_win;
	        _this.$body = $_body;
	
	        _this.util = util;
	        _this.nextTick = util.nextTick;
	        // 是否在微信中打开
	        _this.isWeixinBrowser = util.isWeixinBrowser();
	        // 是否在ios中打开
	        _this.isIOS = util.isIOS();
	
	        // 模板 scope
	        _this.scope = parentElement.props || {};
	        Object.keys(parentElement.dynamicProps || {}).forEach(function (attr) {
	            _this.scope[attr] = parentElement.dynamicProps[attr];
	        });
	
	        _this.beforeInit();
	        _this.init();
	        _this.watch();
	
	        return _this;
	    }
	
	    _createClass(Component, [{
	        key: 'beforeInit',
	        value: function beforeInit() {}
	    }, {
	        key: 'init',
	        value: function init() {}
	    }, {
	        key: 'watch',
	        value: function watch() {}
	    }, {
	        key: 'mount',
	        value: function mount() {
	            var parentEl = arguments.length <= 0 || arguments[0] === undefined ? this.parentNode : arguments[0];
	
	            if (this.refs && parentEl.appendChild && !util.get$().contains(parentEl, this.refs)) {
	                parentEl.appendChild(this.refs);
	                this.emit('mount', this.refs);
	            }
	        }
	    }, {
	        key: 'destroy',
	        value: function destroy(notRemove) {
	            if (this._initWatchScope) {
	                this.watchScope.unwatch();
	            }
	
	            // console.log(getComponents(this.virtualDom));
	            getComponents(this.virtualDom).forEach(function (component) {
	                component.destroy();
	            });
	
	            if (!notRemove && this.$refs) {
	                this.$refs.remove();
	                this.$refs = null;
	            } else if (this.$refs) {
	                this.$refs.off();
	            }
	
	            // 渲染完成，回调队列
	            this._queueCallbacks = [];
	        }
	
	        /**
	         * 取调用自定组件的上级view
	         * @method parent
	         * @return {View}
	         */
	
	    }, {
	        key: 'parentView',
	        value: function parentView() {
	            return this.parentElement.view;
	        }
	
	        /**
	         * 触发组件的自定义事件
	         * @method emitEvent
	         * @param  {String}  eventName
	         * @param  {Array}  args
	         * @return {Void}
	         */
	
	    }, {
	        key: 'emitEvent',
	        value: function emitEvent(eventName, args) {
	            var parentView = this.parentView();
	            if (parentView && this.parentElement.events.hasOwnProperty(eventName)) {
	                var eventCtx = this.parentElement.events[eventName];
	                var callback = parentView[eventCtx.funName];
	                if (!isFunction(callback)) {
	                    return;
	                }
	                if (!Array.isArray(args)) {
	                    if (args && args.length !== undefined) {
	                        args = Array.from(args);
	                    } else {
	                        args = [];
	                    }
	                }
	                //如果模板事件有参数，追加在最后一个参数
	                if (Array.isArray(eventCtx.args) && eventCtx.args.length) {
	                    // args.push({
	                    //     type: 'eventContext',
	                    //     args: eventCtx.args,
	                    // });
	                    args = args.concat(eventCtx.args);
	                }
	                callback.apply(parentView, args);
	            }
	        }
	
	        /**
	         * 放入渲染队列
	         * @method renderQueue
	         * @param  {Function | Boolean}    doneOrAsync
	         * @return {Void}
	         */
	
	    }, {
	        key: 'renderQueue',
	        value: function renderQueue(doneOrAsync) {
	            var _this2 = this;
	
	            //加入成功回调队列
	            if (isFunction(doneOrAsync)) {
	                this._queueCallbacks.push(doneOrAsync);
	            }
	            if (this._queueId) {
	                nextTick.clear(this._queueId);
	            }
	            //马上渲染，不进队列
	            if (true === doneOrAsync) {
	                return this._render();
	            } else {
	                this._queueId = nextTick(function () {
	                    _this2._render();
	                });
	            }
	        }
	
	        /**
	         * 真实的渲染操作
	         * @method _render
	         * @return {[type]} [description]
	         */
	
	    }, {
	        key: '_render',
	        value: function _render() {
	            var _this3 = this;
	
	            if (!this.virtualDomDefine) {
	                return;
	            }
	            var $ = util.get$();
	
	            var virtualDoms = this.virtualDomDefine(this.scope, this, templateHelper);
	            var virtualDom = void 0;
	            if (virtualDoms.length == 1) {
	                virtualDom = virtualDoms[0];
	            } else {
	                virtualDom = new _element2.default('mc-vd', '0', {}, {}, virtualDoms);
	            }
	            // 未渲染，不用对比
	            if (!this.virtualDom) {
	                this.virtualDom = virtualDom;
	                this.refs = this.virtualDom.render();
	                this.$refs = $(this.refs);
	                this.mount();
	            } else {
	                var patches = (0, _diff2.default)(this.virtualDom, virtualDom);
	                //先移除事件绑定
	                // if(this.$refs){
	                //     this.$refs.off();
	                // }
	                //更新dom
	                (0, _patch2.default)(this.refs, patches);
	                // console.log(this.refs);
	                // this.$refs = $(this.refs);
	                this.virtualDom = virtualDom;
	            }
	            // 绑定事件
	            this.bindEvents();
	
	            this.emit('rendered', this.refs);
	            this._queueCallbacks.forEach(function (done, ix) {
	                if (isFunction(done)) {
	                    done(_this3.refs);
	                    _this3._queueCallbacks[ix] = null;
	                }
	            });
	
	            if (!this._initWatchScope) {
	                this._initWatchScope = true;
	                // 观察scope, 如果改动，渲染模板
	                this.watchScope = new _watch2.default(this.scope, function (path) {
	                    _this3.renderQueue();
	                });
	            }
	
	            return this.refs;
	        }
	    }, {
	        key: 'callEvent',
	        value: function callEvent(event, eventName) {
	            var $ = util.get$();
	            var res = null;
	            var target = event.target;
	            var eventData = this.events[eventName];
	            if (Array.isArray(eventData)) {
	                // console.log(eventData, eventName);
	                for (var i = 0, len = eventData.length; i < len; i++) {
	                    var ctx = eventData[i];
	                    var ctxTarget = ctx.target();
	                    // console.log(ctxTarget, target);
	                    if (ctxTarget && (ctxTarget === target || $.contains(ctxTarget, target))) {
	                        var callback = this[ctx.funName];
	                        // console.log(callback, ctx.args);
	                        if (isFunction(callback)) {
	                            var args = [event, ctxTarget];
	                            args = args.concat(ctx.args);
	                            // console.log(ctx.element);
	                            res = callback.apply(this, args);
	                            if (false === res) {
	                                break;
	                            }
	                        }
	                    }
	                }
	            }
	            return res;
	        }
	    }, {
	        key: 'regEvent',
	        value: function regEvent(eventName) {
	            var _this4 = this;
	
	            var $ = util.get$();
	            if (this._regEvents.indexOf(eventName) === -1) {
	                this._regEvents.push(eventName);
	
	                if (keyCode.hasOwnProperty(eventName)) {
	                    this.$refs.on('keyup', function (event) {
	                        if (event.keyCode == keyCode[eventName]) {
	                            return _this4.callEvent(event, eventName);
	                        }
	                    });
	                } else if (notProxyEvents.indexOf(eventName) === -1) {
	                    this.$refs.on(eventName, function (event) {
	                        return _this4.callEvent(event, eventName);
	                    });
	                } else if (['focus', 'blur'].indexOf(eventName) !== -1) {
	                    this.$refs.on(eventName, 'input, textarea, select, [tabindex]', function (event) {
	                        return _this4.callEvent(event, eventName);
	                    });
	                }
	            }
	        }
	    }, {
	        key: 'unRegEvent',
	        value: function unRegEvent(eventName) {
	            var ix = this._regEvents.indexOf(eventName);
	            if (ix !== -1) {
	                this.$refs.off(eventName);
	                this._regEvents.splice(ix, 1);
	            }
	        }
	    }, {
	        key: 'bindEvents',
	        value: function bindEvents() {
	            var _this5 = this;
	
	            if (!this.$refs) {
	                return;
	            }
	            var $ = util.get$();
	            if (this.events) {
	                this.oldEvents = this.events;
	            }
	            this.events = getEvents(this.virtualDom);
	            var curEvents = Object.keys(this.events);
	            // console.log(curEvents, this.events);
	
	            this._regEvents.forEach(function (regEventName) {
	                if (curEvents.indexOf(regEventName) === -1) {
	                    _this5.unRegEvent(regEventName);
	                }
	            });
	
	            curEvents.forEach(function (eventName) {
	                _this5.regEvent(eventName);
	            });
	        }
	
	        /**
	         * 更新 scope
	         * @method set
	         * @param  {String} attr
	         * @param  {Mixed} value
	         * @param  {Function | Boolean} doneOrAsync
	         */
	
	    }, {
	        key: 'set',
	        value: function set(attr, value) {
	            var _this6 = this;
	
	            var doneOrAsync = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];
	            var isPromeisCallback = arguments.length <= 3 || arguments[3] === undefined ? false : arguments[3];
	
	            if (isPromeisCallback || !value || !isFunction(value.then)) {
	                var isChange = this.scope[attr] !== value;
	                if (isChange) {
	                    this.scope[attr] = value;
	                    // for mcore3
	                    this.emit('update:' + attr, value);
	                }
	                // else{
	                //     this.renderQueue(doneOrAsync);
	                // }
	                this.emit('changeScope', this.scope, attr, value);
	                this.emit('change:' + attr, value);
	                return isChange;
	            } else {
	                return value.then(function (val) {
	                    var isChange = _this6.set(attr, val, doneOrAsync, true);
	                    return isChange;
	                });
	            }
	        }
	
	        /**
	         * 取 scope 值， 兼容 mcore2
	         * @method get
	         * @param  {String} attr
	         * @param  {Mixed} defaultVal = null
	         * @return {Mixed}
	         */
	
	    }, {
	        key: 'get',
	        value: function get(attr) {
	            var defaultVal = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];
	
	            if (this.scope.hasOwnProperty(attr)) {
	                return this.scope[attr];
	            }
	            return defaultVal;
	        }
	
	        /**
	         * 移除属性
	         * @method remove
	         * @param  {String} attr
	         * @param  {Mixed} doneOrAsync = null
	         * @return {Void}
	         */
	
	    }, {
	        key: 'remove',
	        value: function remove(attr) {
	            var doneOrAsync = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];
	
	            if (this.scope.hasOwnProperty(attr)) {
	                delete this.scope[attr];
	                this.emit('removeScope', this.scope, attr);
	                this.emit('change:' + attr, null);
	            }
	            this.renderQueue(doneOrAsync);
	        }
	
	        /**
	         * 对外接口
	         * @method update
	         * @param  {String} attr
	         * @param  {Mixed} value
	         * @param  {String} status
	         * @return {Void}
	         */
	
	    }, {
	        key: 'update',
	        value: function update(attr, value, status) {
	            if (status === 'remove') {
	                return this.remove(attr);
	            }
	            this.set(attr, value);
	        }
	    }, {
	        key: 'render',
	        value: function render(virtualDomDefine) {
	            var _this7 = this;
	
	            var scope = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	            var doneOrAsync = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];
	
	            this.virtualDomDefine = virtualDomDefine;
	            var scopeKeys = Object.keys(scope);
	            var promiseVals = [];
	            scopeKeys.forEach(function (attr) {
	                promiseVals.push(scope[attr]);
	            });
	            return Promise.all(promiseVals).then(function (results) {
	                scopeKeys.forEach(function (attr, ix) {
	                    _this7.set(attr, results[ix]);
	                });
	
	                //马上渲染
	                if (doneOrAsync === true) {
	                    return _this7.renderQueue(doneOrAsync);
	                }
	                return new Promise(function (resolve) {
	                    _this7.renderQueue(function (refs) {
	                        if (isFunction(doneOrAsync)) {
	                            doneOrAsync(refs);
	                        }
	                        resolve(refs);
	                    });
	                });
	            });
	        }
	    }]);
	
	    return Component;
	}(_eventEmitter2.default);
	
	exports.default = Component;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 *
	 * diff Element
	 * @author vfasky <vfasky@gmail.com>
	 **/
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = diff;
	
	var _patch = __webpack_require__(12);
	
	var _patch2 = _interopRequireDefault(_patch);
	
	var _listDiff = __webpack_require__(13);
	
	var _listDiff2 = _interopRequireDefault(_listDiff);
	
	var _util = __webpack_require__(3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * 比对两个虚拟dom, 标出变更部分
	 * @method dfsWalk
	 * @param  {[type]} oldNode
	 * @param  {[type]} newNode
	 * @param  {[type]} index
	 * @param  {[type]} patches
	 * @return {[type]} [description]
	 */
	function dfsWalk(oldNode, newNode, index, patches) {
	    var currentPatch = [];
	    // node is removed
	    if (newNode === null) {}
	    // 文本替换
	    // else if(isString(oldNode) && isString(newNode)){
	    //     if(newNode != oldNode){
	    //         currentPatch.push({
	    //             type: patch.TEXT,
	    //             content: newNode,
	    //         });
	    //     }
	    // }
	    // 文本替换
	    else if (oldNode.tagName === '_textnode' && oldNode.tagName === newNode.tagName) {
	            var oldText = String(oldNode.dynamicProps.hasOwnProperty('text') ? oldNode.dynamicProps.text : oldNode.props.text);
	            var newText = String(newNode.dynamicProps.hasOwnProperty('text') ? newNode.dynamicProps.text : newNode.props.text);
	            if (oldText != newText) {
	                currentPatch.push({
	                    type: _patch2.default.TEXT,
	                    content: newText === undefined ? '' : newText
	                });
	            }
	        }
	        // 同一 node, 更新属性
	        else if (oldNode.tagName === newNode.tagName && oldNode._key === newNode._key) {
	                // 变更静态属性
	                diffAndPatchStaticProps(oldNode, newNode);
	
	                var propsPatches = diffProps(oldNode, newNode);
	                if (propsPatches) {
	                    currentPatch.push({
	                        type: _patch2.default.PROPS,
	                        props: propsPatches
	                    });
	                }
	                if (!newNode.refs && oldNode.refs) {
	                    // newNode.render(oldNode.refs);
	                    newNode.cloneElement(oldNode);
	                    // console.log(newNode);
	                }
	                // if(!newNode.template && oldNode.template){
	                //     newNode.template = oldNode.template;
	                //     newNode.template.element = newNode;
	                // }
	                // 没有声明不要 diff 子元素
	                // console.log(newNode._noDiffChild);
	                if (!oldNode || !oldNode._noDiffChild || !newNode._noDiffChild) {
	                    diffChildren(oldNode.children, newNode.children, index, patches, currentPatch);
	                }
	            }
	            // 替换
	            else {
	                    currentPatch.push({
	                        type: _patch2.default.REPLACE,
	                        node: newNode
	                    });
	                }
	
	    if (currentPatch.length) {
	        patches[index] = currentPatch;
	    }
	}
	
	function diffChildren(oldChildren, newChildren, index, patches, currentPatch) {
	    var diffs = (0, _listDiff2.default)(oldChildren, newChildren, 'key');
	    newChildren = diffs.children;
	    // 有移动
	    if (diffs.moves.length) {
	        var reorderPatch = {
	            type: _patch2.default.REORDER,
	            moves: diffs.moves
	        };
	        // console.log(diffs, oldChildren, newChildren);
	        currentPatch.push(reorderPatch);
	    }
	    var leftNode = null;
	    var currentNodeIndex = index;
	    Array.from(oldChildren).forEach(function (child, i) {
	        var newChild = newChildren[i];
	        if (leftNode && leftNode.count) {
	            currentNodeIndex += leftNode.count + 1;
	        } else {
	            currentNodeIndex++;
	        }
	        dfsWalk(child, newChild, currentNodeIndex, patches);
	        leftNode = child;
	    });
	}
	
	/**
	 * 检查并更新静态属性
	 * @method diffStaticProps
	 * @param  {Element}        oldNode
	 * @param  {Element}        newNode
	 * @return {Object | Null}        [description]
	 */
	function diffAndPatchStaticProps(oldNode, newNode) {
	    // if(oldNode._noDiffChild || oldNode._component){
	    //     return;
	    // }
	    var oldProps = oldNode.props;
	    var newProps = newNode.props;
	    var node = oldNode.refs;
	    var propsPatches = {};
	
	    if (!node) {
	        throw new Error('node not inexistence');
	    }
	
	    //判断旧值变更或删除
	    Object.keys(oldProps).forEach(function (attr) {
	        // if(attr === '_key'){
	        //     return;
	        // }
	        var value = oldProps[attr];
	        if (newProps[attr] !== value) {
	            propsPatches[attr] = newProps[attr];
	            if (newProps[attr] === undefined) {
	                node.removeAttribute(attr);
	            } else {
	                node.setAttribute(attr, newProps[attr]);
	            }
	        }
	    });
	
	    // 查找新添加的值
	    Object.keys(newProps).forEach(function (attr) {
	        if (false === propsPatches.hasOwnProperty(attr)) {
	            node.setAttribute(attr, newProps[attr]);
	        }
	    });
	
	    if (oldNode._binder) {
	        for (var i = node.attributes.length - 1; i >= 0; i--) {
	            var attr = String(node.attributes[i].name);
	            // if(attr === '_key'){
	            //     return;
	            // }
	            if (false === newProps.hasOwnProperty(attr)) {
	                node.removeAttribute(attr);
	            }
	        }
	    }
	}
	
	/**
	 * 检查属性变更
	 * @method diffProps
	 * @param  {Element}  oldNode
	 * @param  {Element}  newNode
	 * @return {Object | Null}  [description]
	 */
	function diffProps(oldNode, newNode) {
	
	    var count = 0;
	    var oldProps = oldNode.dynamicProps;
	    var newProps = newNode.dynamicProps;
	    var propsPatches = {};
	
	    //判断旧值变更或删除
	    Object.keys(oldProps).forEach(function (attr) {
	        var value = oldProps[attr];
	        if (newProps[attr] !== value) {
	            count++;
	            propsPatches[attr] = newProps[attr];
	        }
	    });
	
	    // 查找新添加的值
	    Object.keys(newProps).forEach(function (attr) {
	        if (false === propsPatches.hasOwnProperty(attr)) {
	            count++;
	            propsPatches[attr] = newProps[attr];
	        }
	    });
	    if (count === 0) {
	        return null;
	    }
	    return propsPatches;
	}
	
	function diff(oldTree, newTree) {
	    var index = 0;
	    var patches = {};
	    dfsWalk(oldTree, newTree, index, patches);
	    return patches;
	}

/***/ },
/* 12 */
/***/ function(module, exports) {

	/**
	 *
	 * 应用比对结果
	 * @author vfasky <vfasky@gmail.com>
	 **/
	"use strict";
	
	// 替换
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = patch;
	var REPLACE = 0;
	// 重新排序
	var REORDER = 1;
	// 属性变更
	var PROPS = 2;
	// 文字
	var TEXT = 3;
	
	function dfsWalk(node, walker) {
	    var patches = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];
	
	    var currentPatches = patches[walker.index];
	    //计算子节点数量
	    var len = void 0;
	
	    if (!node.childNodes || node._element && node._element._noDiffChild) {
	        len = 0;
	    } else {
	        len = node.childNodes.length;
	    }
	
	    for (var i = 0; i < len; i++) {
	        var child = node.childNodes[i];
	        walker.index++;
	        dfsWalk(child, walker, patches);
	    }
	    if (currentPatches) {
	        applyPatches(node, currentPatches);
	    }
	}
	
	function applyPatches(node, currentPatches) {
	    var _iteratorNormalCompletion = true;
	    var _didIteratorError = false;
	    var _iteratorError = undefined;
	
	    try {
	        for (var _iterator = currentPatches[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	            var currentPatch = _step.value;
	
	            switch (currentPatch.type) {
	                // 替换
	                case REPLACE:
	                    var newNode = void 0;
	                    if (currentPatch.node.render) {
	                        newNode = currentPatch.node.render();
	                    } else if (typeof currentPatch.node == 'string') {
	                        newNode = document.createTextNode(currentPatch.node);
	                    }
	                    if (newNode) {
	                        var element = node._element;
	                        node.parentNode.replaceChild(newNode, node);
	                        if (element && element.destroy) {
	                            element.destroy();
	                        }
	                    }
	                    break;
	                // 重新排序
	                case REORDER:
	                    reorderChildren(node, currentPatch.moves);
	                    break;
	                // 属性变更
	                case PROPS:
	                    if (node._element && node._element.template) {
	                        var propkeys = Object.keys(currentPatch.props);
	                        var _iteratorNormalCompletion2 = true;
	                        var _didIteratorError2 = false;
	                        var _iteratorError2 = undefined;
	
	                        try {
	                            for (var _iterator2 = propkeys[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	                                var attr = _step2.value;
	
	                                var value = currentPatch.props[attr];
	                                var status = value !== undefined ? 'update' : 'remove';
	                                node._element.template.setAttr(attr.toLowerCase(), value, true, status);
	                                if (node._element._component) {
	                                    // console.log(node._element._component.set);
	                                    node._element._component.set(attr.toLowerCase(), value, true, status);
	                                }
	                            }
	                        } catch (err) {
	                            _didIteratorError2 = true;
	                            _iteratorError2 = err;
	                        } finally {
	                            try {
	                                if (!_iteratorNormalCompletion2 && _iterator2.return) {
	                                    _iterator2.return();
	                                }
	                            } finally {
	                                if (_didIteratorError2) {
	                                    throw _iteratorError2;
	                                }
	                            }
	                        }
	                    } else if (node.textContent) {
	                        node.textContent = currentPatch.content;
	                    } else if (node.nodeValue) {
	                        node.nodeValue = currentPatch.content;
	                    } else {
	                        console.log(node);
	                        throw new Error('not mcore Element:' + node);
	                    }
	                    break;
	                // 变更文本
	                case TEXT:
	                    // console.log(node.textContent, currentPatch);
	                    if (node.textContent) {
	                        node.textContent = currentPatch.content;
	                    } else {
	                        node.nodeValue = currentPatch.content;
	                    }
	                    break;
	                default:
	                    throw new Error('Unknown patch type ' + currentPatch.type);
	            }
	        }
	    } catch (err) {
	        _didIteratorError = true;
	        _iteratorError = err;
	    } finally {
	        try {
	            if (!_iteratorNormalCompletion && _iterator.return) {
	                _iterator.return();
	            }
	        } finally {
	            if (_didIteratorError) {
	                throw _iteratorError;
	            }
	        }
	    }
	}
	
	/**
	 * 重新排序
	 * @method reorderChildren
	 * @param  {Element}      node
	 * @param  {array}        moves
	 * @return {Void}
	 */
	function reorderChildren(node, moves) {
	    var staticNodeList = Array.from(node.childNodes);
	    var maps = {};
	    staticNodeList.forEach(function (node) {
	        var key = null;
	        if (node._element && node._element.key) {
	            key = node._element.key;
	        }
	        // if(key === null && node.nodeType === 1){
	        //     key = node.getAttribute('_key');
	        // }
	        if (key) {
	            maps[key] = node;
	        }
	    });
	    // console.log(moves);
	    moves.forEach(function (move) {
	        var index = move.index;
	        if (move.type === 0) {
	            // remove item
	            if (staticNodeList[index] == node.childNodes[index]) {
	                var childNode = node.childNodes[index];
	                if (childNode) {
	                    if (childNode._element) {
	                        childNode._element.destroy(true);
	                    }
	                    node.removeChild(childNode);
	                }
	            }
	            staticNodeList.splice(index, 1);
	        } else if (move.type === 1) {
	            var insertNode = void 0;
	            var oldNode = maps[move.item.key];
	            // 使用旧节点
	            if (oldNode && oldNode._element == move.item) {
	                insertNode = maps[move.item.key];
	                if (insertNode._element && insertNode._element.template) {
	                    insertNode._element.template.emit('reorder', node);
	                }
	            }
	            // 创建一个新节点
	            else if (move.item.render) {
	                    insertNode = move.item.render();
	                }
	                // 创建文本
	                else {
	                        insertNode = document.createTextNode(String(move.item));
	                    }
	            if (insertNode && node.insertBefore) {
	                staticNodeList.splice(index, 0, insertNode);
	                node.insertBefore(insertNode, node.childNodes[index] || null);
	            }
	        }
	    });
	}
	
	function patch(node, patches) {
	    var walker = {
	        index: 0
	    };
	    return dfsWalk(node, walker, patches);
	}
	
	patch.REPLACE = REPLACE;
	patch.REORDER = REORDER;
	patch.PROPS = PROPS;
	patch.TEXT = TEXT;

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(14).diff


/***/ },
/* 14 */
/***/ function(module, exports) {

	/**
	 * Diff two list in O(N).
	 * @param {Array} oldList - Original List
	 * @param {Array} newList - List After certain insertions, removes, or moves
	 * @return {Object} - {moves: <Array>}
	 *                  - moves is a list of actions that telling how to remove and insert
	 */
	function diff (oldList, newList, key) {
	  var oldMap = makeKeyIndexAndFree(oldList, key)
	  var newMap = makeKeyIndexAndFree(newList, key)
	
	  var newFree = newMap.free
	
	  var oldKeyIndex = oldMap.keyIndex
	  var newKeyIndex = newMap.keyIndex
	
	  var moves = []
	
	  // a simulate list to manipulate
	  var children = []
	  var i = 0
	  var item
	  var itemKey
	  var freeIndex = 0
	
	  // fist pass to check item in old list: if it's removed or not
	  while (i < oldList.length) {
	    item = oldList[i]
	    itemKey = getItemKey(item, key)
	    if (itemKey) {
	      if (!newKeyIndex.hasOwnProperty(itemKey)) {
	        children.push(null)
	      } else {
	        var newItemIndex = newKeyIndex[itemKey]
	        children.push(newList[newItemIndex])
	      }
	    } else {
	      var freeItem = newFree[freeIndex++]
	      children.push(freeItem || null)
	    }
	    i++
	  }
	
	  var simulateList = children.slice(0)
	
	  // remove items no longer exist
	  i = 0
	  while (i < simulateList.length) {
	    if (simulateList[i] === null) {
	      remove(i)
	      removeSimulate(i)
	    } else {
	      i++
	    }
	  }
	
	  // i is cursor pointing to a item in new list
	  // j is cursor pointing to a item in simulateList
	  var j = i = 0
	  while (i < newList.length) {
	    item = newList[i]
	    itemKey = getItemKey(item, key)
	
	    var simulateItem = simulateList[j]
	    var simulateItemKey = getItemKey(simulateItem, key)
	
	    if (simulateItem) {
	      if (itemKey === simulateItemKey) {
	        j++
	      } else {
	        // new item, just inesrt it
	        if (!oldKeyIndex.hasOwnProperty(itemKey)) {
	          insert(i, item)
	        } else {
	          // if remove current simulateItem make item in right place
	          // then just remove it
	          var nextItemKey = getItemKey(simulateList[j + 1], key)
	          if (nextItemKey === itemKey) {
	            remove(i)
	            removeSimulate(j)
	            j++ // after removing, current j is right, just jump to next one
	          } else {
	            // else insert item
	            insert(i, item)
	          }
	        }
	      }
	    } else {
	      insert(i, item)
	    }
	
	    i++
	  }
	
	  function remove (index) {
	    var move = {index: index, type: 0}
	    moves.push(move)
	  }
	
	  function insert (index, item) {
	    var move = {index: index, item: item, type: 1}
	    moves.push(move)
	  }
	
	  function removeSimulate (index) {
	    simulateList.splice(index, 1)
	  }
	
	  return {
	    moves: moves,
	    children: children
	  }
	}
	
	/**
	 * Convert list to key-item keyIndex object.
	 * @param {Array} list
	 * @param {String|Function} key
	 */
	function makeKeyIndexAndFree (list, key) {
	  var keyIndex = {}
	  var free = []
	  for (var i = 0, len = list.length; i < len; i++) {
	    var item = list[i]
	    var itemKey = getItemKey(item, key)
	    if (itemKey) {
	      keyIndex[itemKey] = i
	    } else {
	      free.push(item)
	    }
	  }
	  return {
	    keyIndex: keyIndex,
	    free: free
	  }
	}
	
	function getItemKey (item, key) {
	  if (!item || !key) return void 666
	  return typeof key === 'string'
	    ? item[key]
	    : key(item)
	}
	
	exports.makeKeyIndexAndFree = makeKeyIndexAndFree // exports for test
	exports.diff = diff


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 *
	 * watch
	 * @author vfasky <vfasky@gmail.com>
	 **/
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _util = __webpack_require__(3);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	__webpack_require__(16);
	__webpack_require__(17);
	
	var Watch = function () {
	    function Watch() {
	        var scope = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	        var callback = arguments.length <= 1 || arguments[1] === undefined ? function () {} : arguments[1];
	
	        _classCallCheck(this, Watch);
	
	        var nextTickTime = null;
	        this.scope = scope;
	
	        this.callback = function (path) {
	            if (nextTickTime) {
	                _util.nextTick.clear(nextTickTime);
	            }
	            nextTickTime = (0, _util.nextTick)(function () {
	                callback(path);
	            });
	            // console.log(path);
	        };
	
	        this._watchReg = {};
	        this._watchTotal = 0;
	        this.watch(this.scope);
	    }
	
	    _createClass(Watch, [{
	        key: 'observer',
	        value: function observer(changes, x, path) {
	            var _this = this;
	
	            // console.log(changes,x, path);
	            changes.forEach(function (change) {
	                var curPath = path + '.' + change.name;
	                // console.log(change, x, path);
	                if (change.type === 'add') {
	                    _this.watch(x[change.name], curPath);
	                } else if (change.type === 'splice' && path != 'scope') {
	                    _this.unwatchByPath(path);
	                    _this.watch(x, path);
	                    // console.log(this._watchReg[path]);
	                } else if (change.type === 'delete') {
	                    _this.unwatchByPath(curPath);
	                }
	                // else if(['reconfigure', 'update', 'splice'].indexOf(change.type) !== -1){
	                else if (change.type === 'update' || change.type === 'reconfigure') {
	                        _this.unwatchByPath(curPath);
	                        _this.watch(x[change.name], curPath);
	                    } else {
	                        console.log(change);
	                    }
	            });
	            // console.log(path, changes);
	            this.callback(path);
	        }
	    }, {
	        key: 'unwatchByPath',
	        value: function unwatchByPath(path) {
	            var _this2 = this;
	
	            Object.keys(this._watchReg).reverse().forEach(function (key) {
	                if (key.indexOf(path + '.') === 0) {
	                    // console.log(key);
	                    _this2._unwatchByPath(key);
	                }
	            });
	            this._unwatchByPath(path);
	        }
	    }, {
	        key: '_unwatchByPath',
	        value: function _unwatchByPath(path) {
	            var reg = this._watchReg[path];
	            if (!reg) {
	                return;
	            }
	            if (reg.type === 'object') {
	                Object.unobserve(reg.x, reg.observer);
	            } else if (reg.type === 'array') {
	                Array.unobserve(reg.x, reg.observer);
	            }
	            delete this._watchReg[path];
	        }
	    }, {
	        key: 'watch',
	        value: function watch(x) {
	            var _this3 = this;
	
	            var path = arguments.length <= 1 || arguments[1] === undefined ? 'scope' : arguments[1];
	
	            var watchType = null;
	            if ((0, _util.isPlainObject)(x)) {
	                watchType = 'object';
	            } else if ((0, _util.isArray)(x)) {
	                watchType = 'array';
	            }
	            if (!watchType) {
	                return;
	            }
	
	            // 已经在观察列表
	            if (this._watchReg[path]) {
	                return;
	            }
	            this._watchReg[path] = {
	                x: x,
	                type: watchType,
	                observer: function observer(changes) {
	                    _this3.observer(changes, x, path);
	                }
	            };
	
	            this._watchTotal++;
	
	            if (watchType === 'object') {
	                Object.observe(x, this._watchReg[path].observer);
	                Object.keys(x).forEach(function (attr) {
	                    var v = x[attr];
	                    _this3.watch(v, path + '.' + attr);
	                });
	            } else if (watchType === 'array') {
	                Array.observe(x, this._watchReg[path].observer);
	                x.forEach(function (v, i) {
	                    _this3.watch(v, path + '.' + i);
	                });
	            }
	        }
	    }, {
	        key: 'unwatch',
	        value: function unwatch() {
	            var _this4 = this;
	
	            Object.keys(this._watchReg).forEach(function (path) {
	                _this4.unwatchByPath(path);
	            });
	            this._watchReg = {};
	        }
	    }]);
	
	    return Watch;
	}();
	
	exports.default = Watch;

/***/ },
/* 16 */
/***/ function(module, exports) {

	/*!
	 * Object.observe polyfill - v0.2.4
	 * by Massimo Artizzu (MaxArt2501)
	 *
	 * https://github.com/MaxArt2501/object-observe
	 *
	 * Licensed under the MIT License
	 * See LICENSE for details
	 */
	
	// Some type definitions
	/**
	 * This represents the data relative to an observed object
	 * @typedef  {Object}                     ObjectData
	 * @property {Map<Handler, HandlerData>}  handlers
	 * @property {String[]}                   properties
	 * @property {*[]}                        values
	 * @property {Descriptor[]}               descriptors
	 * @property {Notifier}                   notifier
	 * @property {Boolean}                    frozen
	 * @property {Boolean}                    extensible
	 * @property {Object}                     proto
	 */
	/**
	 * Function definition of a handler
	 * @callback Handler
	 * @param {ChangeRecord[]}                changes
	*/
	/**
	 * This represents the data relative to an observed object and one of its
	 * handlers
	 * @typedef  {Object}                     HandlerData
	 * @property {Map<Object, ObservedData>}  observed
	 * @property {ChangeRecord[]}             changeRecords
	 */
	/**
	 * @typedef  {Object}                     ObservedData
	 * @property {String[]}                   acceptList
	 * @property {ObjectData}                 data
	*/
	/**
	 * Type definition for a change. Any other property can be added using
	 * the notify() or performChange() methods of the notifier.
	 * @typedef  {Object}                     ChangeRecord
	 * @property {String}                     type
	 * @property {Object}                     object
	 * @property {String}                     [name]
	 * @property {*}                          [oldValue]
	 * @property {Number}                     [index]
	 */
	/**
	 * Type definition for a notifier (what Object.getNotifier returns)
	 * @typedef  {Object}                     Notifier
	 * @property {Function}                   notify
	 * @property {Function}                   performChange
	 */
	/**
	 * Function called with Notifier.performChange. It may optionally return a
	 * ChangeRecord that gets automatically notified, but `type` and `object`
	 * properties are overridden.
	 * @callback Performer
	 * @returns {ChangeRecord|undefined}
	 */
	
	Object.observe || (function(O, A, root, _undefined) {
	    "use strict";
	
	        /**
	         * Relates observed objects and their data
	         * @type {Map<Object, ObjectData}
	         */
	    var observed,
	        /**
	         * List of handlers and their data
	         * @type {Map<Handler, Map<Object, HandlerData>>}
	         */
	        handlers,
	
	        defaultAcceptList = [ "add", "update", "delete", "reconfigure", "setPrototype", "preventExtensions" ];
	
	    // Functions for internal usage
	
	        /**
	         * Checks if the argument is an Array object. Polyfills Array.isArray.
	         * @function isArray
	         * @param {?*} object
	         * @returns {Boolean}
	         */
	    var isArray = A.isArray || (function(toString) {
	            return function (object) { return toString.call(object) === "[object Array]"; };
	        })(O.prototype.toString),
	
	        /**
	         * Returns the index of an item in a collection, or -1 if not found.
	         * Uses the generic Array.indexOf or Array.prototype.indexOf if available.
	         * @function inArray
	         * @param {Array} array
	         * @param {*} pivot           Item to look for
	         * @param {Number} [start=0]  Index to start from
	         * @returns {Number}
	         */
	        inArray = A.prototype.indexOf ? A.indexOf || function(array, pivot, start) {
	            return A.prototype.indexOf.call(array, pivot, start);
	        } : function(array, pivot, start) {
	            for (var i = start || 0; i < array.length; i++)
	                if (array[i] === pivot)
	                    return i;
	            return -1;
	        },
	
	        /**
	         * Returns an instance of Map, or a Map-like object is Map is not
	         * supported or doesn't support forEach()
	         * @function createMap
	         * @returns {Map}
	         */
	        createMap = root.Map === _undefined || !Map.prototype.forEach ? function() {
	            // Lightweight shim of Map. Lacks clear(), entries(), keys() and
	            // values() (the last 3 not supported by IE11, so can't use them),
	            // it doesn't handle the constructor's argument (like IE11) and of
	            // course it doesn't support for...of.
	            // Chrome 31-35 and Firefox 13-24 have a basic support of Map, but
	            // they lack forEach(), so their native implementation is bad for
	            // this polyfill. (Chrome 36+ supports Object.observe.)
	            var keys = [], values = [];
	
	            return {
	                size: 0,
	                has: function(key) { return inArray(keys, key) > -1; },
	                get: function(key) { return values[inArray(keys, key)]; },
	                set: function(key, value) {
	                    var i = inArray(keys, key);
	                    if (i === -1) {
	                        keys.push(key);
	                        values.push(value);
	                        this.size++;
	                    } else values[i] = value;
	                },
	                "delete": function(key) {
	                    var i = inArray(keys, key);
	                    if (i > -1) {
	                        keys.splice(i, 1);
	                        values.splice(i, 1);
	                        this.size--;
	                    }
	                },
	                forEach: function(callback/*, thisObj*/) {
	                    for (var i = 0; i < keys.length; i++)
	                        callback.call(arguments[1], values[i], keys[i], this);
	                }
	            };
	        } : function() { return new Map(); },
	
	        /**
	         * Simple shim for Object.getOwnPropertyNames when is not available
	         * Misses checks on object, don't use as a replacement of Object.keys/getOwnPropertyNames
	         * @function getProps
	         * @param {Object} object
	         * @returns {String[]}
	         */
	        getProps = O.getOwnPropertyNames ? (function() {
	            var func = O.getOwnPropertyNames;
	            try {
	                arguments.callee;
	            } catch (e) {
	                // Strict mode is supported
	
	                // In strict mode, we can't access to "arguments", "caller" and
	                // "callee" properties of functions. Object.getOwnPropertyNames
	                // returns [ "prototype", "length", "name" ] in Firefox; it returns
	                // "caller" and "arguments" too in Chrome and in Internet
	                // Explorer, so those values must be filtered.
	                var avoid = (func(inArray).join(" ") + " ").replace(/prototype |length |name /g, "").slice(0, -1).split(" ");
	                if (avoid.length) func = function(object) {
	                    var props = O.getOwnPropertyNames(object);
	                    if (typeof object === "function")
	                        for (var i = 0, j; i < avoid.length;)
	                            if ((j = inArray(props, avoid[i++])) > -1)
	                                props.splice(j, 1);
	
	                    return props;
	                };
	            }
	            return func;
	        })() : function(object) {
	            // Poor-mouth version with for...in (IE8-)
	            var props = [], prop, hop;
	            if ("hasOwnProperty" in object) {
	                for (prop in object)
	                    if (object.hasOwnProperty(prop))
	                        props.push(prop);
	            } else {
	                hop = O.hasOwnProperty;
	                for (prop in object)
	                    if (hop.call(object, prop))
	                        props.push(prop);
	            }
	
	            // Inserting a common non-enumerable property of arrays
	            if (isArray(object))
	                props.push("length");
	
	            return props;
	        },
	
	        /**
	         * Return the prototype of the object... if defined.
	         * @function getPrototype
	         * @param {Object} object
	         * @returns {Object}
	         */
	        getPrototype = O.getPrototypeOf,
	
	        /**
	         * Return the descriptor of the object... if defined.
	         * IE8 supports a (useless) Object.getOwnPropertyDescriptor for DOM
	         * nodes only, so defineProperties is checked instead.
	         * @function getDescriptor
	         * @param {Object} object
	         * @param {String} property
	         * @returns {Descriptor}
	         */
	        getDescriptor = O.defineProperties && O.getOwnPropertyDescriptor,
	
	        /**
	         * Sets up the next check and delivering iteration, using
	         * requestAnimationFrame or a (close) polyfill.
	         * @function nextFrame
	         * @param {function} func
	         * @returns {number}
	         */
	        nextFrame = root.requestAnimationFrame || root.webkitRequestAnimationFrame || (function() {
	            var initial = +new Date,
	                last = initial;
	            return function(func) {
	                return setTimeout(function() {
	                    func((last = +new Date) - initial);
	                }, 17);
	            };
	        })(),
	
	        /**
	         * Sets up the observation of an object
	         * @function doObserve
	         * @param {Object} object
	         * @param {Handler} handler
	         * @param {String[]} [acceptList]
	         */
	        doObserve = function(object, handler, acceptList) {
	            var data = observed.get(object);
	
	            if (data) {
	                performPropertyChecks(data, object);
	                setHandler(object, data, handler, acceptList);
	            } else {
	                data = createObjectData(object);
	                setHandler(object, data, handler, acceptList);
	
	                if (observed.size === 1)
	                    // Let the observation begin!
	                    nextFrame(runGlobalLoop);
	            }
	        },
	
	        /**
	         * Creates the initial data for an observed object
	         * @function createObjectData
	         * @param {Object} object
	         */
	        createObjectData = function(object, data) {
	            var props = getProps(object),
	                values = [], descs, i = 0,
	                data = {
	                    handlers: createMap(),
	                    frozen: O.isFrozen ? O.isFrozen(object) : false,
	                    extensible: O.isExtensible ? O.isExtensible(object) : true,
	                    proto: getPrototype && getPrototype(object),
	                    properties: props,
	                    values: values,
	                    notifier: retrieveNotifier(object, data)
	                };
	
	            if (getDescriptor) {
	                descs = data.descriptors = [];
	                while (i < props.length) {
	                    descs[i] = getDescriptor(object, props[i]);
	                    values[i] = object[props[i++]];
	                }
	            } else while (i < props.length)
	                values[i] = object[props[i++]];
	
	            observed.set(object, data);
	
	            return data;
	        },
	
	        /**
	         * Performs basic property value change checks on an observed object
	         * @function performPropertyChecks
	         * @param {ObjectData} data
	         * @param {Object} object
	         * @param {String} [except]  Doesn't deliver the changes to the
	         *                           handlers that accept this type
	         */
	        performPropertyChecks = (function() {
	            var updateCheck = getDescriptor ? function(object, data, idx, except, descr) {
	                var key = data.properties[idx],
	                    value = object[key],
	                    ovalue = data.values[idx],
	                    odesc = data.descriptors[idx];
	
	                if ("value" in descr && (ovalue === value
	                        ? ovalue === 0 && 1/ovalue !== 1/value
	                        : ovalue === ovalue || value === value)) {
	                    addChangeRecord(object, data, {
	                        name: key,
	                        type: "update",
	                        object: object,
	                        oldValue: ovalue
	                    }, except);
	                    data.values[idx] = value;
	                }
	                if (odesc.configurable && (!descr.configurable
	                        || descr.writable !== odesc.writable
	                        || descr.enumerable !== odesc.enumerable
	                        || descr.get !== odesc.get
	                        || descr.set !== odesc.set)) {
	                    addChangeRecord(object, data, {
	                        name: key,
	                        type: "reconfigure",
	                        object: object,
	                        oldValue: ovalue
	                    }, except);
	                    data.descriptors[idx] = descr;
	                }
	            } : function(object, data, idx, except) {
	                var key = data.properties[idx],
	                    value = object[key],
	                    ovalue = data.values[idx];
	
	                if (ovalue === value ? ovalue === 0 && 1/ovalue !== 1/value
	                        : ovalue === ovalue || value === value) {
	                    addChangeRecord(object, data, {
	                        name: key,
	                        type: "update",
	                        object: object,
	                        oldValue: ovalue
	                    }, except);
	                    data.values[idx] = value;
	                }
	            };
	
	            // Checks if some property has been deleted
	            var deletionCheck = getDescriptor ? function(object, props, proplen, data, except) {
	                var i = props.length, descr;
	                while (proplen && i--) {
	                    if (props[i] !== null) {
	                        descr = getDescriptor(object, props[i]);
	                        proplen--;
	
	                        // If there's no descriptor, the property has really
	                        // been deleted; otherwise, it's been reconfigured so
	                        // that's not enumerable anymore
	                        if (descr) updateCheck(object, data, i, except, descr);
	                        else {
	                            addChangeRecord(object, data, {
	                                name: props[i],
	                                type: "delete",
	                                object: object,
	                                oldValue: data.values[i]
	                            }, except);
	                            data.properties.splice(i, 1);
	                            data.values.splice(i, 1);
	                            data.descriptors.splice(i, 1);
	                        }
	                    }
	                }
	            } : function(object, props, proplen, data, except) {
	                var i = props.length;
	                while (proplen && i--)
	                    if (props[i] !== null) {
	                        addChangeRecord(object, data, {
	                            name: props[i],
	                            type: "delete",
	                            object: object,
	                            oldValue: data.values[i]
	                        }, except);
	                        data.properties.splice(i, 1);
	                        data.values.splice(i, 1);
	                        proplen--;
	                    }
	            };
	
	            return function(data, object, except) {
	                if (!data.handlers.size || data.frozen) return;
	
	                var props, proplen, keys,
	                    values = data.values,
	                    descs = data.descriptors,
	                    i = 0, idx,
	                    key, value,
	                    proto, descr;
	
	                // If the object isn't extensible, we don't need to check for new
	                // or deleted properties
	                if (data.extensible) {
	
	                    props = data.properties.slice();
	                    proplen = props.length;
	                    keys = getProps(object);
	
	                    if (descs) {
	                        while (i < keys.length) {
	                            key = keys[i++];
	                            idx = inArray(props, key);
	                            descr = getDescriptor(object, key);
	
	                            if (idx === -1) {
	                                addChangeRecord(object, data, {
	                                    name: key,
	                                    type: "add",
	                                    object: object
	                                }, except);
	                                data.properties.push(key);
	                                values.push(object[key]);
	                                descs.push(descr);
	                            } else {
	                                props[idx] = null;
	                                proplen--;
	                                updateCheck(object, data, idx, except, descr);
	                            }
	                        }
	                        deletionCheck(object, props, proplen, data, except);
	
	                        if (!O.isExtensible(object)) {
	                            data.extensible = false;
	                            addChangeRecord(object, data, {
	                                type: "preventExtensions",
	                                object: object
	                            }, except);
	
	                            data.frozen = O.isFrozen(object);
	                        }
	                    } else {
	                        while (i < keys.length) {
	                            key = keys[i++];
	                            idx = inArray(props, key);
	                            value = object[key];
	
	                            if (idx === -1) {
	                                addChangeRecord(object, data, {
	                                    name: key,
	                                    type: "add",
	                                    object: object
	                                }, except);
	                                data.properties.push(key);
	                                values.push(value);
	                            } else {
	                                props[idx] = null;
	                                proplen--;
	                                updateCheck(object, data, idx, except);
	                            }
	                        }
	                        deletionCheck(object, props, proplen, data, except);
	                    }
	
	                } else if (!data.frozen) {
	
	                    // If the object is not extensible, but not frozen, we just have
	                    // to check for value changes
	                    for (; i < props.length; i++) {
	                        key = props[i];
	                        updateCheck(object, data, i, except, getDescriptor(object, key));
	                    }
	
	                    if (O.isFrozen(object))
	                        data.frozen = true;
	                }
	
	                if (getPrototype) {
	                    proto = getPrototype(object);
	                    if (proto !== data.proto) {
	                        addChangeRecord(object, data, {
	                            type: "setPrototype",
	                            name: "__proto__",
	                            object: object,
	                            oldValue: data.proto
	                        });
	                        data.proto = proto;
	                    }
	                }
	            };
	        })(),
	
	        /**
	         * Sets up the main loop for object observation and change notification
	         * It stops if no object is observed.
	         * @function runGlobalLoop
	         */
	        runGlobalLoop = function() {
	            if (observed.size) {
	                observed.forEach(performPropertyChecks);
	                handlers.forEach(deliverHandlerRecords);
	                nextFrame(runGlobalLoop);
	            }
	        },
	
	        /**
	         * Deliver the change records relative to a certain handler, and resets
	         * the record list.
	         * @param {HandlerData} hdata
	         * @param {Handler} handler
	         */
	        deliverHandlerRecords = function(hdata, handler) {
	            var records = hdata.changeRecords;
	            if (records.length) {
	                hdata.changeRecords = [];
	                handler(records);
	            }
	        },
	
	        /**
	         * Returns the notifier for an object - whether it's observed or not
	         * @function retrieveNotifier
	         * @param {Object} object
	         * @param {ObjectData} [data]
	         * @returns {Notifier}
	         */
	        retrieveNotifier = function(object, data) {
	            if (arguments.length < 2)
	                data = observed.get(object);
	
	            /** @type {Notifier} */
	            return data && data.notifier || {
	                /**
	                 * @method notify
	                 * @see http://arv.github.io/ecmascript-object-observe/#notifierprototype._notify
	                 * @memberof Notifier
	                 * @param {ChangeRecord} changeRecord
	                 */
	                notify: function(changeRecord) {
	                    changeRecord.type; // Just to check the property is there...
	
	                    // If there's no data, the object has been unobserved
	                    var data = observed.get(object);
	                    if (data) {
	                        var recordCopy = { object: object }, prop;
	                        for (prop in changeRecord)
	                            if (prop !== "object")
	                                recordCopy[prop] = changeRecord[prop];
	                        addChangeRecord(object, data, recordCopy);
	                    }
	                },
	
	                /**
	                 * @method performChange
	                 * @see http://arv.github.io/ecmascript-object-observe/#notifierprototype_.performchange
	                 * @memberof Notifier
	                 * @param {String} changeType
	                 * @param {Performer} func     The task performer
	                 * @param {*} [thisObj]        Used to set `this` when calling func
	                 */
	                performChange: function(changeType, func/*, thisObj*/) {
	                    if (typeof changeType !== "string")
	                        throw new TypeError("Invalid non-string changeType");
	
	                    if (typeof func !== "function")
	                        throw new TypeError("Cannot perform non-function");
	
	                    // If there's no data, the object has been unobserved
	                    var data = observed.get(object),
	                        prop, changeRecord,
	                        thisObj = arguments[2],
	                        result = thisObj === _undefined ? func() : func.call(thisObj);
	
	                    data && performPropertyChecks(data, object, changeType);
	
	                    // If there's no data, the object has been unobserved
	                    if (data && result && typeof result === "object") {
	                        changeRecord = { object: object, type: changeType };
	                        for (prop in result)
	                            if (prop !== "object" && prop !== "type")
	                                changeRecord[prop] = result[prop];
	                        addChangeRecord(object, data, changeRecord);
	                    }
	                }
	            };
	        },
	
	        /**
	         * Register (or redefines) an handler in the collection for a given
	         * object and a given type accept list.
	         * @function setHandler
	         * @param {Object} object
	         * @param {ObjectData} data
	         * @param {Handler} handler
	         * @param {String[]} acceptList
	         */
	        setHandler = function(object, data, handler, acceptList) {
	            var hdata = handlers.get(handler);
	            if (!hdata)
	                handlers.set(handler, hdata = {
	                    observed: createMap(),
	                    changeRecords: []
	                });
	            hdata.observed.set(object, {
	                acceptList: acceptList.slice(),
	                data: data
	            });
	            data.handlers.set(handler, hdata);
	        },
	
	        /**
	         * Adds a change record in a given ObjectData
	         * @function addChangeRecord
	         * @param {Object} object
	         * @param {ObjectData} data
	         * @param {ChangeRecord} changeRecord
	         * @param {String} [except]
	         */
	        addChangeRecord = function(object, data, changeRecord, except) {
	            data.handlers.forEach(function(hdata) {
	                var acceptList = hdata.observed.get(object).acceptList;
	                // If except is defined, Notifier.performChange has been
	                // called, with except as the type.
	                // All the handlers that accepts that type are skipped.
	                if ((typeof except !== "string"
	                        || inArray(acceptList, except) === -1)
	                        && inArray(acceptList, changeRecord.type) > -1)
	                    hdata.changeRecords.push(changeRecord);
	            });
	        };
	
	    observed = createMap();
	    handlers = createMap();
	
	    /**
	     * @function Object.observe
	     * @see http://arv.github.io/ecmascript-object-observe/#Object.observe
	     * @param {Object} object
	     * @param {Handler} handler
	     * @param {String[]} [acceptList]
	     * @throws {TypeError}
	     * @returns {Object}               The observed object
	     */
	    O.observe = function observe(object, handler, acceptList) {
	        if (!object || typeof object !== "object" && typeof object !== "function")
	            throw new TypeError("Object.observe cannot observe non-object");
	
	        if (typeof handler !== "function")
	            throw new TypeError("Object.observe cannot deliver to non-function");
	
	        if (O.isFrozen && O.isFrozen(handler))
	            throw new TypeError("Object.observe cannot deliver to a frozen function object");
	
	        if (acceptList === _undefined)
	            acceptList = defaultAcceptList;
	        else if (!acceptList || typeof acceptList !== "object")
	            throw new TypeError("Third argument to Object.observe must be an array of strings.");
	
	        doObserve(object, handler, acceptList);
	
	        return object;
	    };
	
	    /**
	     * @function Object.unobserve
	     * @see http://arv.github.io/ecmascript-object-observe/#Object.unobserve
	     * @param {Object} object
	     * @param {Handler} handler
	     * @throws {TypeError}
	     * @returns {Object}         The given object
	     */
	    O.unobserve = function unobserve(object, handler) {
	        if (object === null || typeof object !== "object" && typeof object !== "function")
	            throw new TypeError("Object.unobserve cannot unobserve non-object");
	
	        if (typeof handler !== "function")
	            throw new TypeError("Object.unobserve cannot deliver to non-function");
	
	        var hdata = handlers.get(handler), odata;
	
	        if (hdata && (odata = hdata.observed.get(object))) {
	            hdata.observed.forEach(function(odata, object) {
	                performPropertyChecks(odata.data, object);
	            });
	            nextFrame(function() {
	                deliverHandlerRecords(hdata, handler);
	            });
	
	            // In Firefox 13-18, size is a function, but createMap should fall
	            // back to the shim for those versions
	            if (hdata.observed.size === 1 && hdata.observed.has(object))
	                handlers["delete"](handler);
	            else hdata.observed["delete"](object);
	
	            if (odata.data.handlers.size === 1)
	                observed["delete"](object);
	            else odata.data.handlers["delete"](handler);
	        }
	
	        return object;
	    };
	
	    /**
	     * @function Object.getNotifier
	     * @see http://arv.github.io/ecmascript-object-observe/#GetNotifier
	     * @param {Object} object
	     * @throws {TypeError}
	     * @returns {Notifier}
	     */
	    O.getNotifier = function getNotifier(object) {
	        if (object === null || typeof object !== "object" && typeof object !== "function")
	            throw new TypeError("Object.getNotifier cannot getNotifier non-object");
	
	        if (O.isFrozen && O.isFrozen(object)) return null;
	
	        return retrieveNotifier(object);
	    };
	
	    /**
	     * @function Object.deliverChangeRecords
	     * @see http://arv.github.io/ecmascript-object-observe/#Object.deliverChangeRecords
	     * @see http://arv.github.io/ecmascript-object-observe/#DeliverChangeRecords
	     * @param {Handler} handler
	     * @throws {TypeError}
	     */
	    O.deliverChangeRecords = function deliverChangeRecords(handler) {
	        if (typeof handler !== "function")
	            throw new TypeError("Object.deliverChangeRecords cannot deliver to non-function");
	
	        var hdata = handlers.get(handler);
	        if (hdata) {
	            hdata.observed.forEach(function(odata, object) {
	                performPropertyChecks(odata.data, object);
	            });
	            deliverHandlerRecords(hdata, handler);
	        }
	    };
	
	})(Object, Array, this);


/***/ },
/* 17 */
/***/ function(module, exports) {

	Object.observe && !Array.observe && (function(O, A) {
	"use strict";
	
	var notifier = O.getNotifier,
	    perform = "performChange",
	    original = "_original",
	    type = "splice";
	
	var wrappers = {
	    push: function push(item) {
	        var args = arguments,
	            ret = push[original].apply(this, args);
	
	        notifier(this)[perform](type, function() {
	            return {
	                index: ret - args.length,
	                addedCount: args.length,
	                removed: []
	            };
	        });
	
	        return ret;
	    },
	    unshift: function unshift(item) {
	        var args = arguments,
	            ret = unshift[original].apply(this, args);
	
	        notifier(this)[perform](type, function() {
	            return {
	                index: 0,
	                addedCount: args.length,
	                removed: []
	            };
	        });
	
	        return ret;
	    },
	    pop: function pop() {
	        var len = this.length,
	            item = pop[original].call(this);
	
	        if (this.length !== len)
	            notifier(this)[perform](type, function() {
	                return {
	                    index: this.length,
	                    addedCount: 0,
	                    removed: [ item ]
	                };
	            }, this);
	
	        return item;
	    },
	    shift: function shift() {
	        var len = this.length,
	            item = shift[original].call(this);
	
	        if (this.length !== len)
	            notifier(this)[perform](type, function() {
	                return {
	                    index: 0,
	                    addedCount: 0,
	                    removed: [ item ]
	                };
	            }, this);
	
	        return item;
	    },
	    splice: function splice(start, deleteCount) {
	        var args = arguments,
	            removed = splice[original].apply(this, args);
	
	        if (removed.length || args.length > 2)
	            notifier(this)[perform](type, function() {
	                return {
	                    index: start,
	                    addedCount: args.length - 2,
	                    removed: removed
	                };
	            }, this);
	
	        return removed;
	    }
	};
	
	for (var wrapper in wrappers) {
	    wrappers[wrapper][original] = A.prototype[wrapper];
	    A.prototype[wrapper] = wrappers[wrapper];
	}
	
	A.observe = function(object, handler) {
	    return O.observe(object, handler, [ "add", "update", "delete", type ]);
	};
	A.unobserve = O.unobserve;
	
	})(Object, Array);


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 *
	 * 路由
	 * @author vfasky <vfasky@gmail.com>
	 **/
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Route = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	exports.pathToObject = pathToObject;
	
	var _pathToRegexp = __webpack_require__(19);
	
	var _pathToRegexp2 = _interopRequireDefault(_pathToRegexp);
	
	var _util = __webpack_require__(3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function pathToObject(path) {
	    var url = String(path).trim();
	    var argStr = '';
	    var attr = [];
	    if (url.indexOf('?') !== -1) {
	        argStr = url.split('?').pop();
	    } else if (url.indexOf('&') !== -1) {
	        argStr = url;
	    }
	
	    if (argStr === '') {
	        return {};
	    }
	
	    var args = argStr.split('&');
	    var data = {};
	    var keys = [];
	
	    args.forEach(function (v) {
	        if (v.indexOf('=') === -1) {
	            return;
	        }
	        v = v.split('=');
	        if (v.length !== 2) {
	            return;
	        }
	
	        var key = v[0].trim();
	        var value = decodeValue(v[1]);
	        data[key] = value;
	    });
	
	    return data;
	}
	
	function decodeValue(value) {
	    if ((0, _util.isNumber)(value) && String(value).length < 14) {
	        value = Number(value);
	    } else if (value) {
	        value = decodeURIComponent(value);
	    } else {
	        value = null;
	    }
	    return value;
	}
	
	var Route = exports.Route = function () {
	    function Route() {
	        var hashchange = arguments.length <= 0 || arguments[0] === undefined ? Route.changeByLocationHash : arguments[0];
	        var sensitive = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];
	        var strict = arguments.length <= 2 || arguments[2] === undefined ? false : arguments[2];
	
	        _classCallCheck(this, Route);
	
	        this.hashchange = hashchange;
	        this.sensitive = sensitive;
	        this.strict = strict;
	        this.rule = [];
	    }
	
	    _createClass(Route, [{
	        key: 'run',
	        value: function run() {
	            var _this = this;
	
	            this.hashchange(function (url) {
	                _this.match(url);
	            });
	        }
	    }, {
	        key: 'add',
	        value: function add(path, fn) {
	            var keys = [];
	            var reg = (0, _pathToRegexp2.default)(path, keys, this.sensitive, this.strict);
	            this.rule.push({
	                path: path,
	                reg: reg,
	                keys: keys,
	                fn: fn
	            });
	            return this;
	        }
	    }, {
	        key: 'toUrl',
	        value: function toUrl(path) {
	            var args = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	            var options = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];
	
	            return _pathToRegexp2.default.compile(path)(args, options);
	        }
	    }, {
	        key: 'match',
	        value: function match(url) {
	            var path = String(url);
	            var fullPath = path;
	            var argStr = '';
	            var getIx = path.indexOf('?');
	            var isMatch = false;
	            if (getIx === -1) {
	                getIx = path.indexOf('&');
	            }
	
	            if (getIx !== -1) {
	                argStr = path.substring(getIx);
	                path = path.substring(0, getIx);
	            }
	
	            (0, _util.each)(this.rule, function (v) {
	                var res = v.reg.exec(path);
	                if (null === res) {
	                    return;
	                }
	                isMatch = true;
	                var context = pathToObject(argStr);
	                var data = {};
	                var args = [];
	                for (var i = 1, len = res.length; i < len; i++) {
	                    var k = v.keys[i - 1];
	                    var value = decodeValue(res[i]);
	
	                    if (k && k.name) {
	                        data[k.name] = value;
	                    }
	                    args.push(value);
	                }
	
	                if (isMatch) {
	                    var env = {
	                        url: fullPath,
	                        path: path,
	                        args: argStr,
	                        rule: v.path,
	                        context: context,
	                        keys: v.keys,
	                        data: data
	                    };
	                    v.fn.apply(env, args);
	                    return false;
	                }
	            });
	
	            return this;
	        }
	    }]);
	
	    return Route;
	}();
	
	Route.changeByLocationHash = function (emit) {
	    var hashChanged = function hashChanged() {
	        emit(window.location.hash.substring(1));
	    };
	    if (window.addEventListener) {
	        window.addEventListener('hashchange', hashChanged, false);
	    } else if (window.attachEven) {
	        window.attachEven('onhashchange', hashChanged);
	    } else {
	        throw new Error('window not support hashchange event');
	    }
	    hashChanged();
	};

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	var isarray = __webpack_require__(20)
	
	/**
	 * Expose `pathToRegexp`.
	 */
	module.exports = pathToRegexp
	module.exports.parse = parse
	module.exports.compile = compile
	module.exports.tokensToFunction = tokensToFunction
	module.exports.tokensToRegExp = tokensToRegExp
	
	/**
	 * The main path matching regexp utility.
	 *
	 * @type {RegExp}
	 */
	var PATH_REGEXP = new RegExp([
	  // Match escaped characters that would otherwise appear in future matches.
	  // This allows the user to escape special characters that won't transform.
	  '(\\\\.)',
	  // Match Express-style parameters and un-named parameters with a prefix
	  // and optional suffixes. Matches appear as:
	  //
	  // "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
	  // "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
	  // "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
	  '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'
	].join('|'), 'g')
	
	/**
	 * Parse a string for the raw tokens.
	 *
	 * @param  {string} str
	 * @return {!Array}
	 */
	function parse (str) {
	  var tokens = []
	  var key = 0
	  var index = 0
	  var path = ''
	  var res
	
	  while ((res = PATH_REGEXP.exec(str)) != null) {
	    var m = res[0]
	    var escaped = res[1]
	    var offset = res.index
	    path += str.slice(index, offset)
	    index = offset + m.length
	
	    // Ignore already escaped sequences.
	    if (escaped) {
	      path += escaped[1]
	      continue
	    }
	
	    var next = str[index]
	    var prefix = res[2]
	    var name = res[3]
	    var capture = res[4]
	    var group = res[5]
	    var modifier = res[6]
	    var asterisk = res[7]
	
	    // Push the current path onto the tokens.
	    if (path) {
	      tokens.push(path)
	      path = ''
	    }
	
	    var partial = prefix != null && next != null && next !== prefix
	    var repeat = modifier === '+' || modifier === '*'
	    var optional = modifier === '?' || modifier === '*'
	    var delimiter = res[2] || '/'
	    var pattern = capture || group || (asterisk ? '.*' : '[^' + delimiter + ']+?')
	
	    tokens.push({
	      name: name || key++,
	      prefix: prefix || '',
	      delimiter: delimiter,
	      optional: optional,
	      repeat: repeat,
	      partial: partial,
	      asterisk: !!asterisk,
	      pattern: escapeGroup(pattern)
	    })
	  }
	
	  // Match any characters still remaining.
	  if (index < str.length) {
	    path += str.substr(index)
	  }
	
	  // If the path exists, push it onto the end.
	  if (path) {
	    tokens.push(path)
	  }
	
	  return tokens
	}
	
	/**
	 * Compile a string to a template function for the path.
	 *
	 * @param  {string}             str
	 * @return {!function(Object=, Object=)}
	 */
	function compile (str) {
	  return tokensToFunction(parse(str))
	}
	
	/**
	 * Prettier encoding of URI path segments.
	 *
	 * @param  {string}
	 * @return {string}
	 */
	function encodeURIComponentPretty (str) {
	  return encodeURI(str).replace(/[\/?#]/g, function (c) {
	    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
	  })
	}
	
	/**
	 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
	 *
	 * @param  {string}
	 * @return {string}
	 */
	function encodeAsterisk (str) {
	  return encodeURI(str).replace(/[?#]/g, function (c) {
	    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
	  })
	}
	
	/**
	 * Expose a method for transforming tokens into the path function.
	 */
	function tokensToFunction (tokens) {
	  // Compile all the tokens into regexps.
	  var matches = new Array(tokens.length)
	
	  // Compile all the patterns before compilation.
	  for (var i = 0; i < tokens.length; i++) {
	    if (typeof tokens[i] === 'object') {
	      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$')
	    }
	  }
	
	  return function (obj, opts) {
	    var path = ''
	    var data = obj || {}
	    var options = opts || {}
	    var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent
	
	    for (var i = 0; i < tokens.length; i++) {
	      var token = tokens[i]
	
	      if (typeof token === 'string') {
	        path += token
	
	        continue
	      }
	
	      var value = data[token.name]
	      var segment
	
	      if (value == null) {
	        if (token.optional) {
	          // Prepend partial segment prefixes.
	          if (token.partial) {
	            path += token.prefix
	          }
	
	          continue
	        } else {
	          throw new TypeError('Expected "' + token.name + '" to be defined')
	        }
	      }
	
	      if (isarray(value)) {
	        if (!token.repeat) {
	          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`')
	        }
	
	        if (value.length === 0) {
	          if (token.optional) {
	            continue
	          } else {
	            throw new TypeError('Expected "' + token.name + '" to not be empty')
	          }
	        }
	
	        for (var j = 0; j < value.length; j++) {
	          segment = encode(value[j])
	
	          if (!matches[i].test(segment)) {
	            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`')
	          }
	
	          path += (j === 0 ? token.prefix : token.delimiter) + segment
	        }
	
	        continue
	      }
	
	      segment = token.asterisk ? encodeAsterisk(value) : encode(value)
	
	      if (!matches[i].test(segment)) {
	        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"')
	      }
	
	      path += token.prefix + segment
	    }
	
	    return path
	  }
	}
	
	/**
	 * Escape a regular expression string.
	 *
	 * @param  {string} str
	 * @return {string}
	 */
	function escapeString (str) {
	  return str.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1')
	}
	
	/**
	 * Escape the capturing group by escaping special characters and meaning.
	 *
	 * @param  {string} group
	 * @return {string}
	 */
	function escapeGroup (group) {
	  return group.replace(/([=!:$\/()])/g, '\\$1')
	}
	
	/**
	 * Attach the keys as a property of the regexp.
	 *
	 * @param  {!RegExp} re
	 * @param  {Array}   keys
	 * @return {!RegExp}
	 */
	function attachKeys (re, keys) {
	  re.keys = keys
	  return re
	}
	
	/**
	 * Get the flags for a regexp from the options.
	 *
	 * @param  {Object} options
	 * @return {string}
	 */
	function flags (options) {
	  return options.sensitive ? '' : 'i'
	}
	
	/**
	 * Pull out keys from a regexp.
	 *
	 * @param  {!RegExp} path
	 * @param  {!Array}  keys
	 * @return {!RegExp}
	 */
	function regexpToRegexp (path, keys) {
	  // Use a negative lookahead to match only capturing groups.
	  var groups = path.source.match(/\((?!\?)/g)
	
	  if (groups) {
	    for (var i = 0; i < groups.length; i++) {
	      keys.push({
	        name: i,
	        prefix: null,
	        delimiter: null,
	        optional: false,
	        repeat: false,
	        partial: false,
	        asterisk: false,
	        pattern: null
	      })
	    }
	  }
	
	  return attachKeys(path, keys)
	}
	
	/**
	 * Transform an array into a regexp.
	 *
	 * @param  {!Array}  path
	 * @param  {Array}   keys
	 * @param  {!Object} options
	 * @return {!RegExp}
	 */
	function arrayToRegexp (path, keys, options) {
	  var parts = []
	
	  for (var i = 0; i < path.length; i++) {
	    parts.push(pathToRegexp(path[i], keys, options).source)
	  }
	
	  var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options))
	
	  return attachKeys(regexp, keys)
	}
	
	/**
	 * Create a path regexp from string input.
	 *
	 * @param  {string}  path
	 * @param  {!Array}  keys
	 * @param  {!Object} options
	 * @return {!RegExp}
	 */
	function stringToRegexp (path, keys, options) {
	  var tokens = parse(path)
	  var re = tokensToRegExp(tokens, options)
	
	  // Attach keys back to the regexp.
	  for (var i = 0; i < tokens.length; i++) {
	    if (typeof tokens[i] !== 'string') {
	      keys.push(tokens[i])
	    }
	  }
	
	  return attachKeys(re, keys)
	}
	
	/**
	 * Expose a function for taking tokens and returning a RegExp.
	 *
	 * @param  {!Array}  tokens
	 * @param  {Object=} options
	 * @return {!RegExp}
	 */
	function tokensToRegExp (tokens, options) {
	  options = options || {}
	
	  var strict = options.strict
	  var end = options.end !== false
	  var route = ''
	  var lastToken = tokens[tokens.length - 1]
	  var endsWithSlash = typeof lastToken === 'string' && /\/$/.test(lastToken)
	
	  // Iterate over the tokens and create our regexp string.
	  for (var i = 0; i < tokens.length; i++) {
	    var token = tokens[i]
	
	    if (typeof token === 'string') {
	      route += escapeString(token)
	    } else {
	      var prefix = escapeString(token.prefix)
	      var capture = '(?:' + token.pattern + ')'
	
	      if (token.repeat) {
	        capture += '(?:' + prefix + capture + ')*'
	      }
	
	      if (token.optional) {
	        if (!token.partial) {
	          capture = '(?:' + prefix + '(' + capture + '))?'
	        } else {
	          capture = prefix + '(' + capture + ')?'
	        }
	      } else {
	        capture = prefix + '(' + capture + ')'
	      }
	
	      route += capture
	    }
	  }
	
	  // In non-strict mode we allow a slash at the end of match. If the path to
	  // match already ends with a slash, we remove it for consistency. The slash
	  // is valid at the end of a path match, not in the middle. This is important
	  // in non-ending mode, where "/test/" shouldn't match "/test//route".
	  if (!strict) {
	    route = (endsWithSlash ? route.slice(0, -2) : route) + '(?:\\/(?=$))?'
	  }
	
	  if (end) {
	    route += '$'
	  } else {
	    // In non-ending mode, we need the capturing groups to match as much as
	    // possible by using a positive lookahead to the end or next path segment.
	    route += strict && endsWithSlash ? '' : '(?=\\/|$)'
	  }
	
	  return new RegExp('^' + route, flags(options))
	}
	
	/**
	 * Normalize the given path string, returning a regular expression.
	 *
	 * An empty array can be passed in for the keys, which will hold the
	 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
	 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
	 *
	 * @param  {(string|RegExp|Array)} path
	 * @param  {(Array|Object)=}       keys
	 * @param  {Object=}               options
	 * @return {!RegExp}
	 */
	function pathToRegexp (path, keys, options) {
	  keys = keys || []
	
	  if (!isarray(keys)) {
	    options = /** @type {!Object} */ (keys)
	    keys = []
	  } else if (!options) {
	    options = {}
	  }
	
	  if (path instanceof RegExp) {
	    return regexpToRegexp(path, /** @type {!Array} */ (keys))
	  }
	
	  if (isarray(path)) {
	    return arrayToRegexp(/** @type {!Array} */ (path), /** @type {!Array} */ (keys), options)
	  }
	
	  return stringToRegexp(/** @type {string} */ (path), /** @type {!Array} */ (keys), options)
	}


/***/ },
/* 20 */
/***/ function(module, exports) {

	module.exports = Array.isArray || function (arr) {
	  return Object.prototype.toString.call(arr) == '[object Array]';
	};


/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 *
	 * view
	 * @author vfasky <vfasky@gmail.com>
	 **/
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _component = __webpack_require__(10);
	
	var _component2 = _interopRequireDefault(_component);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _$iframe = null;
	
	var View = function (_Component) {
	    _inherits(View, _Component);
	
	    function View($el, app) {
	        _classCallCheck(this, View);
	
	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(View).call(this, $el[0], {}, { app: app }));
	
	        _this.$el = $el;
	        // this.el = $el[0];
	
	        return _this;
	    }
	
	    _createClass(View, [{
	        key: 'setTitle',
	        value: function setTitle(title) {
	            var _this2 = this;
	
	            this.title = title;
	            if (document.title === title) {
	                return;
	            }
	            document.title = title;
	            if (this.isWeixinBrowser && this.isIOS) {
	                (function () {
	                    if (_$iframe === null) {
	                        _$iframe = _this2.util.get$()('<iframe style="width: 0; height: 0" src="/favicon.ico"></iframe>');
	                    }
	                    var $iframe = _$iframe;
	                    $iframe.one('load', function () {
	                        _this2.nextTick(function () {
	                            $iframe.remove();
	                        });
	                    }).appendTo(_this2.$body);
	                })();
	            }
	        }
	    }, {
	        key: 'back',
	        value: function back() {
	            if (window.history.length >= 1) {
	                window.history.back();
	            } else {
	                window.location.href = '#';
	            }
	            return false;
	        }
	
	        // destroy(){
	        //     console.log("d");
	        //     super.destroy();
	        // }
	
	    }, {
	        key: 'run',
	        value: function run() {}
	    }, {
	        key: 'afterRun',
	        value: function afterRun() {}
	    }]);
	
	    return View;
	}(_component2.default);
	
	exports.default = View;

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 *
	 * app es6
	 * @author vfasky <vfasky@gmail.com>
	 **/
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _route = __webpack_require__(18);
	
	var _eventEmitter = __webpack_require__(6);
	
	var _eventEmitter2 = _interopRequireDefault(_eventEmitter);
	
	var _util = __webpack_require__(3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var App = function (_EventEmitter) {
	    _inherits(App, _EventEmitter);
	
	    function App($el) {
	        var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	
	        _classCallCheck(this, App);
	
	        var $ = (0, _util.get$)();
	
	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(App).call(this));
	
	        _this.$el = $el;
	        _this.options = $.extend({
	            viewClass: 'mcore-app-view',
	            routeChange: _route.Route.changeByLocationHash
	        }, options);
	        // 路由
	        _this.router = new _route.Route(_this.options.routeChange);
	
	        // 当前的 view
	        _this.curView = null;
	
	        // 中间件
	        _this._middlewares = [];
	
	        // url map
	        _this._viewUrlMap = {};
	
	        // 过场动画
	        _this._changeViewEvent = {
	            // 移除 view 之前
	            before: function before(oldView, done, app) {
	                done();
	            },
	            // 插入新 view 之后
	            after: function after(newView, done, app) {
	                done();
	            }
	        };
	        return _this;
	    }
	
	    _createClass(App, [{
	        key: 'route',
	        value: function route(path, View) {
	            var _this2 = this;
	
	            if (!this._viewUrlMap.hasOwnProperty(View.viewName)) {
	                this._viewUrlMap[View.viewName] = [];
	            }
	            this._viewUrlMap[View.viewName].push({
	                path: path,
	                toUrl: function toUrl(args, options) {
	                    return _this2.router.toUrl(path, args, options);
	                }
	            });
	
	            var self = this;
	            this.router.add(path, function () {
	                self.runView(View, this, arguments);
	            });
	            return this;
	        }
	
	        // 添加中间件
	
	    }, {
	        key: 'use',
	        value: function use(middleware) {
	            this._middlewares.push(middleware);
	            return this;
	        }
	    }, {
	        key: '_runView',
	        value: function _runView(done, err) {
	            this.curView.instantiate.route = this.env.route;
	            this.curView.instantiate.context = this.env.context;
	            this.curView.instantiate.run.apply(this.curView.instantiate, this.env.args);
	            this.emit('runView', this.curView);
	            // console.log(this.curView.instantiate);
	            done(err, this.curView.instantiate);
	        }
	    }, {
	        key: 'stack',
	        value: function stack() {
	            var ix = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];
	
	            var _this3 = this;
	
	            var err = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];
	            var done = arguments.length <= 2 || arguments[2] === undefined ? function () {} : arguments[2];
	
	            if (ix >= this._middlewares.length) {
	                return this._runView(done, err);
	            }
	            var middleware = this._middlewares[ix];
	            var nextIx = ix + 1;
	            var next = function next(err) {
	                _this3.stack(nextIx, err, done);
	            };
	            this.env.view = this.curView.instantiate;
	            middleware.call(this.env, err, next);
	        }
	
	        // 调用中间件
	
	    }, {
	        key: 'runMiddlewares',
	        value: function runMiddlewares(done) {
	            if (this._middlewares.length === 0) {
	                return this._runView(done);
	            }
	            this.stack(0, null, done);
	        }
	    }, {
	        key: '_initView',
	        value: function _initView(View, viewName) {
	            var _this4 = this;
	
	            var $el = (0, _util.get$)()('<div />');
	            $el.attr('class', this.options.viewClass);
	
	            var instantiate = new View($el, this);
	
	            this.curView = {
	                name: viewName,
	                instantiate: instantiate
	            };
	
	            this.runMiddlewares(function (err, instantiate) {
	                instantiate.$el.appendTo(_this4.$el);
	                if (!err) {
	                    _this4._changeViewEvent.after(_this4.curView, function () {
	                        instantiate.afterRun();
	                    }, _this4);
	                }
	            });
	        }
	
	        // 启动view
	
	    }, {
	        key: 'runView',
	        value: function runView(View, route, args) {
	            var _this5 = this;
	
	            var viewName = View.viewName;
	            if (!viewName) {
	                throw new Error('View not viewName');
	            }
	
	            this.env = {
	                route: route,
	                context: route.context,
	                args: args,
	                viewName: viewName,
	                app: this
	            };
	            if (this.curView) {
	                // 已经初始化，只调用run方法
	                if (this.curView.name === viewName) {
	                    this.runMiddlewares(function (err, instantiate) {
	                        if (!err) {
	                            instantiate.afterRun();
	                        }
	                    });
	                    return;
	                }
	
	                this._changeViewEvent.before(this.curView, function () {
	                    _this5.emit('destroyView', _this5.curView);
	
	                    _this5.curView.instantiate.destroy();
	                    // console.log(this.curView.instantiate.$el);
	                    _this5.curView.instantiate.$el.remove();
	
	                    _this5._initView(View, viewName);
	                }, this);
	            } else {
	                this._initView(View, viewName);
	            }
	        }
	    }, {
	        key: 'run',
	        value: function run() {
	            this.router.run();
	        }
	    }]);
	
	    return App;
	}(_eventEmitter2.default);
	
	exports.default = App;

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 *
	 * http
	 * @author vfasky <vfasky@gmail.com>
	 **/
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _util = __webpack_require__(3);
	
	// 兼容mcore2
	if (typeof Promise.prototype.done == 'undefined') {
	    Promise.prototype.done = function (onFulfilled, onRejected) {
	        return this.then(onFulfilled, onRejected).catch(function (error) {
	            setTimeout(function () {
	                throw error;
	            }, 0);
	        });
	    };
	}
	if (typeof Promise.prototype.fail == 'undefined') {
	    Promise.prototype.fail = function (onResolveOrReject) {
	        return this.catch(function (reason) {
	            return reason;
	        }).then(onResolveOrReject);
	    };
	}
	if (typeof Promise.prototype.always == 'undefined') {
	    Promise.prototype.always = function (onResolveOrReject) {
	        return this.then(onResolveOrReject, function (reason) {
	            onResolveOrReject(reason);
	            throw reason;
	        });
	    };
	}
	var _networkErrCallback = function _networkErrCallback(xhr, status, hideError) {
	    var msg = 'Network Error';
	    var $ = (0, _util.get$)();
	
	    // 后端是否返回错误信息
	    if (xhr.responseText) try {
	        var res = $.parseJSON(xhr.responseText);
	        if (res.error) {
	            msg = res.error;
	        }
	    } catch (error) {}
	
	    var httpCode = xhr.statusCode().status;
	
	    if (httpCode) {
	        msg = msg + ' ( code: ' + httpCode + ' )';
	    }
	
	    // 是否需要隐藏
	    if (!hideError) {
	        if (window.alert) {
	            window.alert(msg);
	        }
	    } else {
	        console.log(msg);
	    }
	};
	
	// 默认： 业务层面的出错处理
	var _errCallback = function _errCallback() {
	    var res = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	    var hideError = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];
	
	    var msg = res.error || res.msg || 'An unknown error occurred';
	    // 是否需要隐藏
	    if (!hideError) {
	        if (window.alert) {
	            window.alert(msg);
	        }
	    } else {
	        console.log(msg);
	    }
	};
	
	var http = {
	    onBeforeSend: function onBeforeSend(xhr) {},
	    sendDataFormat: function sendDataFormat(data) {
	        return data;
	    },
	    // 返回数据的处理
	    responseFormat: function responseFormat(res) {
	        return res;
	    },
	    // 注册错误处理
	    regErrCallback: function regErrCallback(type, fun) {
	        if (type === 'network') {
	            _networkErrCallback = fun;
	        } else {
	            _errCallback = fun;
	        }
	    },
	    // 构造请求头
	    buildHeaders: function buildHeaders() {
	        return {};
	    },
	    // 判断请求是否成功
	    isSuccess: function isSuccess(res) {
	        return Number(res.code) === 1;
	    },
	    // 注册请求完成事件（无论成功与否）
	    onComplete: function onComplete(xhr) {}
	};
	
	exports.default = http;
	
	
	function ajax(type, url, data) {
	    var hideError = arguments.length <= 3 || arguments[3] === undefined ? false : arguments[3];
	    var timeout = arguments.length <= 4 || arguments[4] === undefined ? 10000 : arguments[4];
	
	    var $ = (0, _util.get$)();
	    data = http.sendDataFormat(data);
	
	    var options = {
	        cache: false,
	        data: data,
	        dataType: 'json',
	        type: type || 'GET',
	        timeout: timeout,
	        headers: http.buildHeaders()
	    };
	
	    if (window.FormData && data instanceof window.FormData) {
	        options.processData = false;
	        options.contentType = false;
	    }
	
	    if (type === 'jsonp') {
	        options.type = 'GET';
	        options.dataType = 'jsonp';
	    }
	
	    var xhr = $.ajax(url, options);
	    xhr.sendData = options.data;
	    http.onBeforeSend(xhr);
	
	    var promise = new Promise(function (resolve, reject) {
	        xhr.then(function (res) {
	            if (http.isSuccess(res, xhr)) {
	                return resolve(http.responseFormat(res));
	            } else {
	                reject(res);
	                return _errCallback(res, hideError, xhr);
	            }
	        }).fail(function (xhr, status) {
	            reject(xhr, status);
	            if (!xhr.statusCode().status) {
	                _networkErrCallback(xhr, status, hideError);
	            } else {
	                var res = {};
	                try {
	                    res = $.parseJSON(xhr.responseText);
	                } catch (error) {}
	                _errCallback(res, hideError);
	            }
	        }).always(function () {
	            http.onComplete(xhr);
	        });
	    });
	    promise.xhr = xhr;
	    promise.reject = Promise.reject;
	    return promise;
	}
	
	http.get = function (url, data) {
	    var hideError = arguments.length <= 2 || arguments[2] === undefined ? false : arguments[2];
	    var timeout = arguments.length <= 3 || arguments[3] === undefined ? 10000 : arguments[3];
	
	    return ajax('GET', url, data, hideError, timeout);
	};
	http.post = function (url, data) {
	    var hideError = arguments.length <= 2 || arguments[2] === undefined ? false : arguments[2];
	    var timeout = arguments.length <= 3 || arguments[3] === undefined ? 10000 : arguments[3];
	
	    return ajax('POST', url, data, hideError, timeout);
	};
	http.jsonp = function (url, data) {
	    var hideError = arguments.length <= 2 || arguments[2] === undefined ? false : arguments[2];
	    var timeout = arguments.length <= 3 || arguments[3] === undefined ? 10000 : arguments[3];
	
	    return ajax('jsonp', url, data, hideError, timeout);
	};

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 *
	 * table render
	 * @author vfasky <vfasky@gmail.com>
	 **/
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _mcore = __webpack_require__(2);
	
	var _mcore2 = _interopRequireDefault(_mcore);
	
	var _svgicon = __webpack_require__(25);
	
	var _svgicon2 = _interopRequireDefault(_svgicon);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Table = function (_mcore$View) {
	    _inherits(Table, _mcore$View);
	
	    function Table() {
	        _classCallCheck(this, Table);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Table).apply(this, arguments));
	    }
	
	    _createClass(Table, [{
	        key: 'run',
	        value: function run() {
	            this.render(__webpack_require__(26), {
	                showIx: 0,
	                icon: 'print',
	                data: [['New Customer', 0, 'Freddy Huang'], ['New Customer', 0, 'Freddy Huang'], ['New Customer', 0, 'Freddy Huang'], ['New Customer', 0, 'Freddy Huang'], ['New Customer', 0, 'Freddy Huang'], ['New Customer', 0, 'Freddy Huang']]
	            });
	        }
	    }, {
	        key: 'changeTable',
	        value: function changeTable(event, el) {
	            this.scope.icon = this.scope.showIx === 1 ? 'print' : 'report-appoint';
	            this.scope.showIx = this.scope.showIx === 1 ? 0 : 1;
	            return false;
	        }
	    }]);
	
	    return Table;
	}(_mcore2.default.View);
	
	exports.default = Table;
	
	Table.viewName = 'table';

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Before change the DOM , We have to encapsulate it into mcore.Component
	 * svg icon
	 * @author vfasky <vfasky@gmail.com>
	 **/
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _mcore = __webpack_require__(2);
	
	var _mcore2 = _interopRequireDefault(_mcore);
	
	var _jquery = __webpack_require__(1);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Svgicon = function (_mcore$Component) {
	    _inherits(Svgicon, _mcore$Component);
	
	    function Svgicon() {
	        _classCallCheck(this, Svgicon);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Svgicon).apply(this, arguments));
	    }
	
	    _createClass(Svgicon, [{
	        key: 'init',
	        value: function init() {
	            // console.log(this);
	            this.$parentNode = (0, _jquery2.default)(this.parentNode);
	            this.buildSVG();
	        }
	    }, {
	        key: 'watch',
	        value: function watch() {
	            var _this2 = this;
	
	            this.on('change:icon', function () {
	                _this2.buildSVG();
	            });
	
	            this.on('change:dir', function () {
	                _this2.buildSVG();
	            });
	
	            this.on('change:fill', function () {
	                _this2.buildSVG();
	            });
	        }
	    }, {
	        key: 'buildSVG',
	        value: function buildSVG() {
	            this.$parentNode.html('\n            <svg class="svg-icon ' + (this.scope.dir ? 'svg-' + this.scope.dir : '') + ' ' + (this.scope.fill !== undefined ? 'svg-fill' : '') + '">\n                <use xlink:href="#' + this.scope.icon + '"></use>\n            </svg>\n        ');
	        }
	    }]);
	
	    return Svgicon;
	}(_mcore2.default.Component);
	
	exports.default = Svgicon;
	
	
	_mcore2.default.Template.components.svgicon = Svgicon;

/***/ },
/* 26 */
/***/ function(module, exports) {

	module.exports = function(scope, __mc__view, __mc__mcore) {
	    var __mc__util = {
	        clone: __mc__mcore.util.clone,
	        build: function(tagName, key, attr, dynamicAttr, events, children) {
	            return new __mc__mcore.Element(tagName, key, attr, dynamicAttr, children, events, __mc__view);
	        },
	        parseDynamicVal: function(dynamicCode, dynamicCodeStr) {
	            return __mc__mcore.util.parseDynamicVal(dynamicCode, dynamicCodeStr, __mc__view);
	        },
	        callFormatter: function(formatterName) {
	            return __mc__mcore.util.callFormatter(formatterName, __mc__mcore);
	        },
	    };
	    var __mc__tree = [];
	
	    (function(scope, __mc__tree, __mc_path) {
	
	        var __mc__forArr = [0];
	
	
	        __mc__forArr.forEach(function(__mc__$vn_, __mc__i) {
	
	            var __mc__children;
	
	            var __mc__attr = {},
	                __mc__dynamicAttr = {},
	                __mc__event = {};
	
	
	            __mc__attr['class'] = 'btn btn-primary';
	
	            __mc__event['click'] = {
	                'funName': 'changeTable',
	                'args': []
	            };
	
	
	
	            __mc__children = [];
	
	
	
	
	            var __mc__pathSubI = String(__mc_path + '.' + (__mc__tree.length));
	            var undefined = 0;
	
	            (function(scope, __mc__tree, __mc_path) {
	
	                var __mc__forArr = [0];
	
	
	                __mc__forArr.forEach(function(__mc__$vn_, __mc__i) {
	
	                    var __mc__children;
	
	                    var __mc__attr = {},
	                        __mc__dynamicAttr = {},
	                        __mc__event = {};
	
	
	                    __mc__dynamicAttr['icon'] = __mc__util.parseDynamicVal((scope.icon), 'scope.icon');
	
	
	
	                    __mc__children = [];
	
	
	
	
	                    var __mc__pathSubI = String(__mc_path + '.' + (__mc__tree.length));
	                    var undefined = 0;
	
	                    __mc__tree.push(
	                        __mc__util.build(
	                            'svgicon', __mc__pathSubI, __mc__attr,
	                            __mc__dynamicAttr, __mc__event, __mc__children
	                        )
	                    );
	
	
	                });
	
	
	
	            })(scope, __mc__children, __mc__pathSubI);
	
	            (function(scope, __mc__tree, __mc_path) {
	
	                var __mc__pathStaticI = __mc_path + '.' + __mc__tree.length;
	
	                var __mc__attr = {
	                    text: "   Change Table "
	                };
	                __mc__tree.push(__mc__util.build('_textNode', __mc__pathStaticI, __mc__attr));
	
	            })(scope, __mc__children, __mc__pathSubI);
	
	            __mc__tree.push(
	                __mc__util.build(
	                    'button', __mc__pathSubI, __mc__attr,
	                    __mc__dynamicAttr, __mc__event, __mc__children
	                )
	            );
	
	
	        });
	
	
	
	    })(scope, __mc__tree, '0');
	
	    (function(scope, __mc__tree, __mc_path) {
	
	        var __mc__forArr = [0];
	
	
	        __mc__forArr.forEach(function(__mc__$vn_, __mc__i) {
	
	            var __mc__children;
	
	            var __mc__attr = {},
	                __mc__dynamicAttr = {},
	                __mc__event = {};
	
	
	            __mc__attr['class'] = 'table-wrap table-v2 m-t-10';
	
	
	
	            __mc__children = [];
	
	
	
	
	            var __mc__pathSubI = String(__mc_path + '.' + (__mc__tree.length));
	            var undefined = 0;
	
	            (function(scope, __mc__tree, __mc_path) {
	
	                var __mc__forArr = [0];
	
	
	                __mc__forArr.forEach(function(__mc__$vn_, __mc__i) {
	
	                    /* [mc-if] scope.showIx == 0 */
	                    if (scope.showIx == 0) {
	
	                        var __mc__children;
	
	                        var __mc__attr = {},
	                            __mc__dynamicAttr = {},
	                            __mc__event = {};
	
	
	                        __mc__attr['class'] = 'table';
	
	
	
	                        __mc__children = [];
	
	
	
	
	                        var __mc__pathSubI = String(__mc_path + '.' + (__mc__tree.length));
	                        var undefined = 0;
	
	                        (function(scope, __mc__tree, __mc_path) {
	
	                            var __mc__forArr = [0];
	
	
	                            __mc__forArr.forEach(function(__mc__$vn_, __mc__i) {
	
	                                var __mc__children;
	
	                                var __mc__attr = {},
	                                    __mc__dynamicAttr = {},
	                                    __mc__event = {};
	
	
	
	
	                                __mc__children = [];
	
	
	
	
	                                var __mc__pathSubI = String(__mc_path + '.' + (__mc__tree.length));
	                                var undefined = 0;
	
	                                (function(scope, __mc__tree, __mc_path) {
	
	                                    var __mc__forArr = [0];
	
	
	                                    __mc__forArr.forEach(function(__mc__$vn_, __mc__i) {
	
	                                        var __mc__children;
	
	                                        var __mc__attr = {},
	                                            __mc__dynamicAttr = {},
	                                            __mc__event = {};
	
	
	
	
	                                        __mc__children = [];
	
	
	
	
	                                        var __mc__pathSubI = String(__mc_path + '.' + (__mc__tree.length));
	                                        var undefined = 0;
	
	                                        (function(scope, __mc__tree, __mc_path) {
	
	                                            var __mc__forArr = [0];
	
	
	                                            __mc__forArr.forEach(function(__mc__$vn_, __mc__i) {
	
	                                                var __mc__children;
	
	                                                var __mc__attr = {},
	                                                    __mc__dynamicAttr = {},
	                                                    __mc__event = {};
	
	
	
	
	                                                __mc__children = [];
	
	
	
	
	                                                var __mc__pathSubI = String(__mc_path + '.' + (__mc__tree.length));
	                                                var undefined = 0;
	
	                                                (function(scope, __mc__tree, __mc_path) {
	
	                                                    var __mc__pathStaticI = __mc_path + '.' + __mc__tree.length;
	
	                                                    var __mc__attr = {
	                                                        text: "Type"
	                                                    };
	                                                    __mc__tree.push(__mc__util.build('_textNode', __mc__pathStaticI, __mc__attr));
	
	                                                })(scope, __mc__children, __mc__pathSubI);
	
	                                                __mc__tree.push(
	                                                    __mc__util.build(
	                                                        'th', __mc__pathSubI, __mc__attr,
	                                                        __mc__dynamicAttr, __mc__event, __mc__children
	                                                    )
	                                                );
	
	
	                                            });
	
	
	
	                                        })(scope, __mc__children, __mc__pathSubI);
	
	                                        (function(scope, __mc__tree, __mc_path) {
	
	                                            var __mc__forArr = [0];
	
	
	                                            __mc__forArr.forEach(function(__mc__$vn_, __mc__i) {
	
	                                                var __mc__children;
	
	                                                var __mc__attr = {},
	                                                    __mc__dynamicAttr = {},
	                                                    __mc__event = {};
	
	
	
	
	                                                __mc__children = [];
	
	
	
	
	                                                var __mc__pathSubI = String(__mc_path + '.' + (__mc__tree.length));
	                                                var undefined = 0;
	
	                                                (function(scope, __mc__tree, __mc_path) {
	
	                                                    var __mc__pathStaticI = __mc_path + '.' + __mc__tree.length;
	
	                                                    var __mc__attr = {
	                                                        text: "Bookings"
	                                                    };
	                                                    __mc__tree.push(__mc__util.build('_textNode', __mc__pathStaticI, __mc__attr));
	
	                                                })(scope, __mc__children, __mc__pathSubI);
	
	                                                __mc__tree.push(
	                                                    __mc__util.build(
	                                                        'th', __mc__pathSubI, __mc__attr,
	                                                        __mc__dynamicAttr, __mc__event, __mc__children
	                                                    )
	                                                );
	
	
	                                            });
	
	
	
	                                        })(scope, __mc__children, __mc__pathSubI);
	
	                                        (function(scope, __mc__tree, __mc_path) {
	
	                                            var __mc__forArr = [0];
	
	
	                                            __mc__forArr.forEach(function(__mc__$vn_, __mc__i) {
	
	                                                var __mc__children;
	
	                                                var __mc__attr = {},
	                                                    __mc__dynamicAttr = {},
	                                                    __mc__event = {};
	
	
	
	
	                                                __mc__children = [];
	
	
	
	
	                                                var __mc__pathSubI = String(__mc_path + '.' + (__mc__tree.length));
	                                                var undefined = 0;
	
	                                                __mc__tree.push(
	                                                    __mc__util.build(
	                                                        'th', __mc__pathSubI, __mc__attr,
	                                                        __mc__dynamicAttr, __mc__event, __mc__children
	                                                    )
	                                                );
	
	
	                                            });
	
	
	
	                                        })(scope, __mc__children, __mc__pathSubI);
	
	                                        __mc__tree.push(
	                                            __mc__util.build(
	                                                'tr', __mc__pathSubI, __mc__attr,
	                                                __mc__dynamicAttr, __mc__event, __mc__children
	                                            )
	                                        );
	
	
	                                    });
	
	
	
	                                })(scope, __mc__children, __mc__pathSubI);
	
	                                __mc__tree.push(
	                                    __mc__util.build(
	                                        'thead', __mc__pathSubI, __mc__attr,
	                                        __mc__dynamicAttr, __mc__event, __mc__children
	                                    )
	                                );
	
	
	                            });
	
	
	
	                        })(scope, __mc__children, __mc__pathSubI);
	
	                        (function(scope, __mc__tree, __mc_path) {
	
	                            var __mc__forArr = [0];
	
	
	                            __mc__forArr.forEach(function(__mc__$vn_, __mc__i) {
	
	                                var __mc__children;
	
	                                var __mc__attr = {},
	                                    __mc__dynamicAttr = {},
	                                    __mc__event = {};
	
	
	
	
	                                __mc__children = [];
	
	
	
	
	                                var __mc__pathSubI = String(__mc_path + '.' + (__mc__tree.length));
	                                var undefined = 0;
	
	                                (function(scope, __mc__tree, __mc_path) {
	
	                                    /* [for-in] v in scope.data */
	                                    var __mc__forArr = scope.data;
	                                    if (false == Array.isArray(__mc__forArr)) {
	                                        __mc__forArr = [];
	                                    }
	
	
	                                    __mc__forArr.forEach(function(v, __mc__$ix_) {
	
	                                        var __mc__children;
	
	                                        var __mc__attr = {},
	                                            __mc__dynamicAttr = {},
	                                            __mc__event = {};
	
	
	
	
	                                        __mc__children = [];
	
	
	
	
	                                        var __mc__pathSubI = String(__mc_path + '.' + (__mc__tree.length));
	                                        var undefined = 0;
	
	                                        (function(scope, __mc__tree, __mc_path) {
	
	                                            var __mc__forArr = [0];
	
	
	                                            __mc__forArr.forEach(function(__mc__$vn_, __mc__i) {
	
	                                                var __mc__children;
	
	                                                var __mc__attr = {},
	                                                    __mc__dynamicAttr = {},
	                                                    __mc__event = {};
	
	
	
	
	                                                __mc__children = [];
	
	
	
	
	                                                var __mc__pathSubI = String(__mc_path + '.' + (__mc__tree.length));
	                                                var undefined = 0;
	
	                                                (function(scope, __mc__tree, __mc_path) {
	
	                                                    var __mc__pathStaticI = __mc_path + '.' + __mc__tree.length;
	                                                    var __mc__strVal = {}
	                                                    var __mc__tmpAttr;
	                                                    try {
	                                                        __mc__tmpAttr = v[0];
	                                                    } catch (err) {}
	
	                                                    __mc__strVal['rp_0'] = (function(x) {
	
	                                                        return x === undefined ? '' : x;
	                                                    })(__mc__tmpAttr);
	
	                                                    /* [formatter] {v[0]} */
	                                                    var __mc__str = "" + __mc__strVal['rp_0'] + "";
	                                                    var __mc__dynamicAttr = {
	                                                        text: __mc__str
	                                                    };
	                                                    __mc__tree.push(__mc__util.build(
	                                                        '_textNode', __mc__pathStaticI, {},
	                                                        __mc__dynamicAttr, {}, []
	                                                    ));
	
	                                                })(scope, __mc__children, __mc__pathSubI);
	
	                                                __mc__tree.push(
	                                                    __mc__util.build(
	                                                        'td', __mc__pathSubI, __mc__attr,
	                                                        __mc__dynamicAttr, __mc__event, __mc__children
	                                                    )
	                                                );
	
	
	                                            });
	
	
	
	                                        })(scope, __mc__children, __mc__pathSubI);
	
	                                        (function(scope, __mc__tree, __mc_path) {
	
	                                            var __mc__forArr = [0];
	
	
	                                            __mc__forArr.forEach(function(__mc__$vn_, __mc__i) {
	
	                                                var __mc__children;
	
	                                                var __mc__attr = {},
	                                                    __mc__dynamicAttr = {},
	                                                    __mc__event = {};
	
	
	
	
	                                                __mc__children = [];
	
	
	
	
	                                                var __mc__pathSubI = String(__mc_path + '.' + (__mc__tree.length));
	                                                var undefined = 0;
	
	                                                (function(scope, __mc__tree, __mc_path) {
	
	                                                    var __mc__pathStaticI = __mc_path + '.' + __mc__tree.length;
	                                                    var __mc__strVal = {}
	                                                    var __mc__tmpAttr;
	                                                    try {
	                                                        __mc__tmpAttr = v[1];
	                                                    } catch (err) {}
	
	                                                    __mc__strVal['rp_0'] = (function(x) {
	
	                                                        return x === undefined ? '' : x;
	                                                    })(__mc__tmpAttr);
	
	                                                    /* [formatter] {v[1]} */
	                                                    var __mc__str = "" + __mc__strVal['rp_0'] + "";
	                                                    var __mc__dynamicAttr = {
	                                                        text: __mc__str
	                                                    };
	                                                    __mc__tree.push(__mc__util.build(
	                                                        '_textNode', __mc__pathStaticI, {},
	                                                        __mc__dynamicAttr, {}, []
	                                                    ));
	
	                                                })(scope, __mc__children, __mc__pathSubI);
	
	                                                __mc__tree.push(
	                                                    __mc__util.build(
	                                                        'td', __mc__pathSubI, __mc__attr,
	                                                        __mc__dynamicAttr, __mc__event, __mc__children
	                                                    )
	                                                );
	
	
	                                            });
	
	
	
	                                        })(scope, __mc__children, __mc__pathSubI);
	
	                                        (function(scope, __mc__tree, __mc_path) {
	
	                                            var __mc__forArr = [0];
	
	
	                                            __mc__forArr.forEach(function(__mc__$vn_, __mc__i) {
	
	                                                var __mc__children;
	
	                                                var __mc__attr = {},
	                                                    __mc__dynamicAttr = {},
	                                                    __mc__event = {};
	
	
	
	
	                                                __mc__children = [];
	
	
	
	
	                                                var __mc__pathSubI = String(__mc_path + '.' + (__mc__tree.length));
	                                                var undefined = 0;
	
	                                                (function(scope, __mc__tree, __mc_path) {
	
	                                                    var __mc__forArr = [0];
	
	
	                                                    __mc__forArr.forEach(function(__mc__$vn_, __mc__i) {
	
	                                                        var __mc__children;
	
	                                                        var __mc__attr = {},
	                                                            __mc__dynamicAttr = {},
	                                                            __mc__event = {};
	
	
	                                                        __mc__dynamicAttr['icon'] = __mc__util.parseDynamicVal((scope.icon), 'scope.icon');
	
	
	
	                                                        __mc__children = [];
	
	
	
	
	                                                        var __mc__pathSubI = String(__mc_path + '.' + (__mc__tree.length));
	                                                        var undefined = 0;
	
	                                                        __mc__tree.push(
	                                                            __mc__util.build(
	                                                                'svgicon', __mc__pathSubI, __mc__attr,
	                                                                __mc__dynamicAttr, __mc__event, __mc__children
	                                                            )
	                                                        );
	
	
	                                                    });
	
	
	
	                                                })(scope, __mc__children, __mc__pathSubI);
	
	                                                __mc__tree.push(
	                                                    __mc__util.build(
	                                                        'th', __mc__pathSubI, __mc__attr,
	                                                        __mc__dynamicAttr, __mc__event, __mc__children
	                                                    )
	                                                );
	
	
	                                            });
	
	
	
	                                        })(scope, __mc__children, __mc__pathSubI);
	
	                                        __mc__tree.push(
	                                            __mc__util.build(
	                                                'tr', __mc__pathSubI, __mc__attr,
	                                                __mc__dynamicAttr, __mc__event, __mc__children
	                                            )
	                                        );
	
	
	                                    });
	
	
	                                })(scope, __mc__children, __mc__pathSubI);
	
	                                __mc__tree.push(
	                                    __mc__util.build(
	                                        'tbody', __mc__pathSubI, __mc__attr,
	                                        __mc__dynamicAttr, __mc__event, __mc__children
	                                    )
	                                );
	
	
	                            });
	
	
	
	                        })(scope, __mc__children, __mc__pathSubI);
	
	                        __mc__tree.push(
	                            __mc__util.build(
	                                'table', __mc__pathSubI, __mc__attr,
	                                __mc__dynamicAttr, __mc__event, __mc__children
	                            )
	                        );
	
	                    }
	                });
	
	
	
	            })(scope, __mc__children, __mc__pathSubI);
	
	            (function(scope, __mc__tree, __mc_path) {
	
	                var __mc__forArr = [0];
	
	
	                __mc__forArr.forEach(function(__mc__$vn_, __mc__i) {
	
	                    /* [mc-if] scope.showIx == 1 */
	                    if (scope.showIx == 1) {
	
	                        var __mc__children;
	
	                        var __mc__attr = {},
	                            __mc__dynamicAttr = {},
	                            __mc__event = {};
	
	
	                        __mc__attr['class'] = 'table';
	
	
	
	                        __mc__children = [];
	
	
	
	
	                        var __mc__pathSubI = String(__mc_path + '.' + (__mc__tree.length));
	                        var undefined = 0;
	
	                        (function(scope, __mc__tree, __mc_path) {
	
	                            var __mc__forArr = [0];
	
	
	                            __mc__forArr.forEach(function(__mc__$vn_, __mc__i) {
	
	                                var __mc__children;
	
	                                var __mc__attr = {},
	                                    __mc__dynamicAttr = {},
	                                    __mc__event = {};
	
	
	
	
	                                __mc__children = [];
	
	
	
	
	                                var __mc__pathSubI = String(__mc_path + '.' + (__mc__tree.length));
	                                var undefined = 0;
	
	                                (function(scope, __mc__tree, __mc_path) {
	
	                                    var __mc__forArr = [0];
	
	
	                                    __mc__forArr.forEach(function(__mc__$vn_, __mc__i) {
	
	                                        var __mc__children;
	
	                                        var __mc__attr = {},
	                                            __mc__dynamicAttr = {},
	                                            __mc__event = {};
	
	
	
	
	                                        __mc__children = [];
	
	
	
	
	                                        var __mc__pathSubI = String(__mc_path + '.' + (__mc__tree.length));
	                                        var undefined = 0;
	
	                                        (function(scope, __mc__tree, __mc_path) {
	
	                                            var __mc__forArr = [0];
	
	
	                                            __mc__forArr.forEach(function(__mc__$vn_, __mc__i) {
	
	                                                var __mc__children;
	
	                                                var __mc__attr = {},
	                                                    __mc__dynamicAttr = {},
	                                                    __mc__event = {};
	
	
	
	
	                                                __mc__children = [];
	
	
	
	
	                                                var __mc__pathSubI = String(__mc_path + '.' + (__mc__tree.length));
	                                                var undefined = 0;
	
	                                                (function(scope, __mc__tree, __mc_path) {
	
	                                                    var __mc__pathStaticI = __mc_path + '.' + __mc__tree.length;
	
	                                                    var __mc__attr = {
	                                                        text: "Type"
	                                                    };
	                                                    __mc__tree.push(__mc__util.build('_textNode', __mc__pathStaticI, __mc__attr));
	
	                                                })(scope, __mc__children, __mc__pathSubI);
	
	                                                __mc__tree.push(
	                                                    __mc__util.build(
	                                                        'th', __mc__pathSubI, __mc__attr,
	                                                        __mc__dynamicAttr, __mc__event, __mc__children
	                                                    )
	                                                );
	
	
	                                            });
	
	
	
	                                        })(scope, __mc__children, __mc__pathSubI);
	
	                                        (function(scope, __mc__tree, __mc_path) {
	
	                                            var __mc__forArr = [0];
	
	
	                                            __mc__forArr.forEach(function(__mc__$vn_, __mc__i) {
	
	                                                var __mc__children;
	
	                                                var __mc__attr = {},
	                                                    __mc__dynamicAttr = {},
	                                                    __mc__event = {};
	
	
	
	
	                                                __mc__children = [];
	
	
	
	
	                                                var __mc__pathSubI = String(__mc_path + '.' + (__mc__tree.length));
	                                                var undefined = 0;
	
	                                                (function(scope, __mc__tree, __mc_path) {
	
	                                                    var __mc__pathStaticI = __mc_path + '.' + __mc__tree.length;
	
	                                                    var __mc__attr = {
	                                                        text: "Bookings"
	                                                    };
	                                                    __mc__tree.push(__mc__util.build('_textNode', __mc__pathStaticI, __mc__attr));
	
	                                                })(scope, __mc__children, __mc__pathSubI);
	
	                                                __mc__tree.push(
	                                                    __mc__util.build(
	                                                        'th', __mc__pathSubI, __mc__attr,
	                                                        __mc__dynamicAttr, __mc__event, __mc__children
	                                                    )
	                                                );
	
	
	                                            });
	
	
	
	                                        })(scope, __mc__children, __mc__pathSubI);
	
	                                        (function(scope, __mc__tree, __mc_path) {
	
	                                            var __mc__forArr = [0];
	
	
	                                            __mc__forArr.forEach(function(__mc__$vn_, __mc__i) {
	
	                                                var __mc__children;
	
	                                                var __mc__attr = {},
	                                                    __mc__dynamicAttr = {},
	                                                    __mc__event = {};
	
	
	
	
	                                                __mc__children = [];
	
	
	
	
	                                                var __mc__pathSubI = String(__mc_path + '.' + (__mc__tree.length));
	                                                var undefined = 0;
	
	                                                (function(scope, __mc__tree, __mc_path) {
	
	                                                    var __mc__pathStaticI = __mc_path + '.' + __mc__tree.length;
	
	                                                    var __mc__attr = {
	                                                        text: "Name"
	                                                    };
	                                                    __mc__tree.push(__mc__util.build('_textNode', __mc__pathStaticI, __mc__attr));
	
	                                                })(scope, __mc__children, __mc__pathSubI);
	
	                                                __mc__tree.push(
	                                                    __mc__util.build(
	                                                        'th', __mc__pathSubI, __mc__attr,
	                                                        __mc__dynamicAttr, __mc__event, __mc__children
	                                                    )
	                                                );
	
	
	                                            });
	
	
	
	                                        })(scope, __mc__children, __mc__pathSubI);
	
	                                        __mc__tree.push(
	                                            __mc__util.build(
	                                                'tr', __mc__pathSubI, __mc__attr,
	                                                __mc__dynamicAttr, __mc__event, __mc__children
	                                            )
	                                        );
	
	
	                                    });
	
	
	
	                                })(scope, __mc__children, __mc__pathSubI);
	
	                                __mc__tree.push(
	                                    __mc__util.build(
	                                        'thead', __mc__pathSubI, __mc__attr,
	                                        __mc__dynamicAttr, __mc__event, __mc__children
	                                    )
	                                );
	
	
	                            });
	
	
	
	                        })(scope, __mc__children, __mc__pathSubI);
	
	                        (function(scope, __mc__tree, __mc_path) {
	
	                            var __mc__forArr = [0];
	
	
	                            __mc__forArr.forEach(function(__mc__$vn_, __mc__i) {
	
	                                var __mc__children;
	
	                                var __mc__attr = {},
	                                    __mc__dynamicAttr = {},
	                                    __mc__event = {};
	
	
	
	
	                                __mc__children = [];
	
	
	
	
	                                var __mc__pathSubI = String(__mc_path + '.' + (__mc__tree.length));
	                                var undefined = 0;
	
	                                (function(scope, __mc__tree, __mc_path) {
	
	                                    var __mc__forArr = [0];
	
	
	                                    __mc__forArr.forEach(function(__mc__$vn_, __mc__i) {
	
	                                        var __mc__children;
	
	                                        var __mc__attr = {},
	                                            __mc__dynamicAttr = {},
	                                            __mc__event = {};
	
	
	
	
	                                        __mc__children = [];
	
	
	
	
	                                        var __mc__pathSubI = String(__mc_path + '.' + (__mc__tree.length));
	                                        var undefined = 0;
	
	                                        (function(scope, __mc__tree, __mc_path) {
	
	                                            var __mc__forArr = [0];
	
	
	                                            __mc__forArr.forEach(function(__mc__$vn_, __mc__i) {
	
	                                                var __mc__children;
	
	                                                var __mc__attr = {},
	                                                    __mc__dynamicAttr = {},
	                                                    __mc__event = {};
	
	
	
	
	                                                __mc__children = [];
	
	
	
	
	                                                var __mc__pathSubI = String(__mc_path + '.' + (__mc__tree.length));
	                                                var undefined = 0;
	
	                                                (function(scope, __mc__tree, __mc_path) {
	
	                                                    var __mc__pathStaticI = __mc_path + '.' + __mc__tree.length;
	
	                                                    var __mc__attr = {
	                                                        text: "New Customer"
	                                                    };
	                                                    __mc__tree.push(__mc__util.build('_textNode', __mc__pathStaticI, __mc__attr));
	
	                                                })(scope, __mc__children, __mc__pathSubI);
	
	                                                __mc__tree.push(
	                                                    __mc__util.build(
	                                                        'td', __mc__pathSubI, __mc__attr,
	                                                        __mc__dynamicAttr, __mc__event, __mc__children
	                                                    )
	                                                );
	
	
	                                            });
	
	
	
	                                        })(scope, __mc__children, __mc__pathSubI);
	
	                                        (function(scope, __mc__tree, __mc_path) {
	
	                                            var __mc__forArr = [0];
	
	
	                                            __mc__forArr.forEach(function(__mc__$vn_, __mc__i) {
	
	                                                var __mc__children;
	
	                                                var __mc__attr = {},
	                                                    __mc__dynamicAttr = {},
	                                                    __mc__event = {};
	
	
	
	
	                                                __mc__children = [];
	
	
	
	
	                                                var __mc__pathSubI = String(__mc_path + '.' + (__mc__tree.length));
	                                                var undefined = 0;
	
	                                                (function(scope, __mc__tree, __mc_path) {
	
	                                                    var __mc__pathStaticI = __mc_path + '.' + __mc__tree.length;
	
	                                                    var __mc__attr = {
	                                                        text: "19"
	                                                    };
	                                                    __mc__tree.push(__mc__util.build('_textNode', __mc__pathStaticI, __mc__attr));
	
	                                                })(scope, __mc__children, __mc__pathSubI);
	
	                                                __mc__tree.push(
	                                                    __mc__util.build(
	                                                        'td', __mc__pathSubI, __mc__attr,
	                                                        __mc__dynamicAttr, __mc__event, __mc__children
	                                                    )
	                                                );
	
	
	                                            });
	
	
	
	                                        })(scope, __mc__children, __mc__pathSubI);
	
	                                        (function(scope, __mc__tree, __mc_path) {
	
	                                            var __mc__forArr = [0];
	
	
	                                            __mc__forArr.forEach(function(__mc__$vn_, __mc__i) {
	
	                                                var __mc__children;
	
	                                                var __mc__attr = {},
	                                                    __mc__dynamicAttr = {},
	                                                    __mc__event = {};
	
	
	
	
	                                                __mc__children = [];
	
	
	
	
	                                                var __mc__pathSubI = String(__mc_path + '.' + (__mc__tree.length));
	                                                var undefined = 0;
	
	                                                (function(scope, __mc__tree, __mc_path) {
	
	                                                    var __mc__pathStaticI = __mc_path + '.' + __mc__tree.length;
	
	                                                    var __mc__attr = {
	                                                        text: "Freddy"
	                                                    };
	                                                    __mc__tree.push(__mc__util.build('_textNode', __mc__pathStaticI, __mc__attr));
	
	                                                })(scope, __mc__children, __mc__pathSubI);
	
	                                                __mc__tree.push(
	                                                    __mc__util.build(
	                                                        'td', __mc__pathSubI, __mc__attr,
	                                                        __mc__dynamicAttr, __mc__event, __mc__children
	                                                    )
	                                                );
	
	
	                                            });
	
	
	
	                                        })(scope, __mc__children, __mc__pathSubI);
	
	                                        __mc__tree.push(
	                                            __mc__util.build(
	                                                'tr', __mc__pathSubI, __mc__attr,
	                                                __mc__dynamicAttr, __mc__event, __mc__children
	                                            )
	                                        );
	
	
	                                    });
	
	
	
	                                })(scope, __mc__children, __mc__pathSubI);
	
	                                (function(scope, __mc__tree, __mc_path) {
	
	                                    /* [for-in] v, k in scope.data */
	                                    var __mc__forArr = scope.data;
	                                    if (false == Array.isArray(__mc__forArr)) {
	                                        __mc__forArr = [];
	                                    }
	
	
	                                    __mc__forArr.forEach(function(v, k) {
	
	                                        var __mc__children;
	
	                                        var __mc__attr = {},
	                                            __mc__dynamicAttr = {},
	                                            __mc__event = {};
	
	
	
	
	                                        __mc__children = [];
	
	
	
	
	                                        var __mc__pathSubI = String(__mc_path + '.' + (__mc__tree.length));
	                                        var undefined = 0;
	
	                                        (function(scope, __mc__tree, __mc_path) {
	
	                                            var __mc__forArr = [0];
	
	
	                                            __mc__forArr.forEach(function(__mc__$vn_, __mc__i) {
	
	                                                var __mc__children;
	
	                                                var __mc__attr = {},
	                                                    __mc__dynamicAttr = {},
	                                                    __mc__event = {};
	
	
	
	
	                                                __mc__children = [];
	
	
	
	
	                                                var __mc__pathSubI = String(__mc_path + '.' + (__mc__tree.length));
	                                                var undefined = 0;
	
	                                                (function(scope, __mc__tree, __mc_path) {
	
	                                                    var __mc__pathStaticI = __mc_path + '.' + __mc__tree.length;
	                                                    var __mc__strVal = {}
	                                                    var __mc__tmpAttr;
	                                                    try {
	                                                        __mc__tmpAttr = v[0];
	                                                    } catch (err) {}
	
	                                                    __mc__strVal['rp_0'] = (function(x) {
	
	                                                        return x === undefined ? '' : x;
	                                                    })(__mc__tmpAttr);
	
	                                                    /* [formatter] {v[0]} */
	                                                    var __mc__str = "" + __mc__strVal['rp_0'] + "";
	                                                    var __mc__dynamicAttr = {
	                                                        text: __mc__str
	                                                    };
	                                                    __mc__tree.push(__mc__util.build(
	                                                        '_textNode', __mc__pathStaticI, {},
	                                                        __mc__dynamicAttr, {}, []
	                                                    ));
	
	                                                })(scope, __mc__children, __mc__pathSubI);
	
	                                                __mc__tree.push(
	                                                    __mc__util.build(
	                                                        'td', __mc__pathSubI, __mc__attr,
	                                                        __mc__dynamicAttr, __mc__event, __mc__children
	                                                    )
	                                                );
	
	
	                                            });
	
	
	
	                                        })(scope, __mc__children, __mc__pathSubI);
	
	                                        (function(scope, __mc__tree, __mc_path) {
	
	                                            var __mc__forArr = [0];
	
	
	                                            __mc__forArr.forEach(function(__mc__$vn_, __mc__i) {
	
	                                                var __mc__children;
	
	                                                var __mc__attr = {},
	                                                    __mc__dynamicAttr = {},
	                                                    __mc__event = {};
	
	
	
	
	                                                __mc__children = [];
	
	
	
	
	                                                var __mc__pathSubI = String(__mc_path + '.' + (__mc__tree.length));
	                                                var undefined = 0;
	
	                                                (function(scope, __mc__tree, __mc_path) {
	
	                                                    var __mc__pathStaticI = __mc_path + '.' + __mc__tree.length;
	                                                    var __mc__strVal = {}
	                                                    var __mc__tmpAttr;
	                                                    try {
	                                                        __mc__tmpAttr = v[1] + k;
	                                                    } catch (err) {}
	
	                                                    __mc__strVal['rp_0'] = (function(x) {
	
	                                                        return x === undefined ? '' : x;
	                                                    })(__mc__tmpAttr);
	
	                                                    /* [formatter] {v[1] + k} */
	                                                    var __mc__str = "" + __mc__strVal['rp_0'] + "";
	                                                    var __mc__dynamicAttr = {
	                                                        text: __mc__str
	                                                    };
	                                                    __mc__tree.push(__mc__util.build(
	                                                        '_textNode', __mc__pathStaticI, {},
	                                                        __mc__dynamicAttr, {}, []
	                                                    ));
	
	                                                })(scope, __mc__children, __mc__pathSubI);
	
	                                                __mc__tree.push(
	                                                    __mc__util.build(
	                                                        'td', __mc__pathSubI, __mc__attr,
	                                                        __mc__dynamicAttr, __mc__event, __mc__children
	                                                    )
	                                                );
	
	
	                                            });
	
	
	
	                                        })(scope, __mc__children, __mc__pathSubI);
	
	                                        (function(scope, __mc__tree, __mc_path) {
	
	                                            var __mc__forArr = [0];
	
	
	                                            __mc__forArr.forEach(function(__mc__$vn_, __mc__i) {
	
	                                                var __mc__children;
	
	                                                var __mc__attr = {},
	                                                    __mc__dynamicAttr = {},
	                                                    __mc__event = {};
	
	
	
	
	                                                __mc__children = [];
	
	
	
	
	                                                var __mc__pathSubI = String(__mc_path + '.' + (__mc__tree.length));
	                                                var undefined = 0;
	
	                                                (function(scope, __mc__tree, __mc_path) {
	
	                                                    var __mc__pathStaticI = __mc_path + '.' + __mc__tree.length;
	                                                    var __mc__strVal = {}
	                                                    var __mc__tmpAttr;
	                                                    try {
	                                                        __mc__tmpAttr = v[2];
	                                                    } catch (err) {}
	
	                                                    __mc__strVal['rp_0'] = (function(x) {
	
	                                                        return x === undefined ? '' : x;
	                                                    })(__mc__tmpAttr);
	
	                                                    /* [formatter] {v[2]} */
	                                                    var __mc__str = "" + __mc__strVal['rp_0'] + " ";
	                                                    var __mc__dynamicAttr = {
	                                                        text: __mc__str
	                                                    };
	                                                    __mc__tree.push(__mc__util.build(
	                                                        '_textNode', __mc__pathStaticI, {},
	                                                        __mc__dynamicAttr, {}, []
	                                                    ));
	
	                                                })(scope, __mc__children, __mc__pathSubI);
	
	                                                (function(scope, __mc__tree, __mc_path) {
	
	                                                    var __mc__forArr = [0];
	
	
	                                                    __mc__forArr.forEach(function(__mc__$vn_, __mc__i) {
	
	                                                        var __mc__children;
	
	                                                        var __mc__attr = {},
	                                                            __mc__dynamicAttr = {},
	                                                            __mc__event = {};
	
	
	                                                        __mc__dynamicAttr['icon'] = __mc__util.parseDynamicVal((scope.icon), 'scope.icon');
	
	
	
	                                                        __mc__children = [];
	
	
	
	
	                                                        var __mc__pathSubI = String(__mc_path + '.' + (__mc__tree.length));
	                                                        var undefined = 0;
	
	                                                        __mc__tree.push(
	                                                            __mc__util.build(
	                                                                'svgicon', __mc__pathSubI, __mc__attr,
	                                                                __mc__dynamicAttr, __mc__event, __mc__children
	                                                            )
	                                                        );
	
	
	                                                    });
	
	
	
	                                                })(scope, __mc__children, __mc__pathSubI);
	
	                                                __mc__tree.push(
	                                                    __mc__util.build(
	                                                        'td', __mc__pathSubI, __mc__attr,
	                                                        __mc__dynamicAttr, __mc__event, __mc__children
	                                                    )
	                                                );
	
	
	                                            });
	
	
	
	                                        })(scope, __mc__children, __mc__pathSubI);
	
	                                        __mc__tree.push(
	                                            __mc__util.build(
	                                                'tr', __mc__pathSubI, __mc__attr,
	                                                __mc__dynamicAttr, __mc__event, __mc__children
	                                            )
	                                        );
	
	
	                                    });
	
	
	                                })(scope, __mc__children, __mc__pathSubI);
	
	                                __mc__tree.push(
	                                    __mc__util.build(
	                                        'tbody', __mc__pathSubI, __mc__attr,
	                                        __mc__dynamicAttr, __mc__event, __mc__children
	                                    )
	                                );
	
	
	                            });
	
	
	
	                        })(scope, __mc__children, __mc__pathSubI);
	
	                        __mc__tree.push(
	                            __mc__util.build(
	                                'table', __mc__pathSubI, __mc__attr,
	                                __mc__dynamicAttr, __mc__event, __mc__children
	                            )
	                        );
	
	                    }
	                });
	
	
	
	            })(scope, __mc__children, __mc__pathSubI);
	
	            __mc__tree.push(
	                __mc__util.build(
	                    'div', __mc__pathSubI, __mc__attr,
	                    __mc__dynamicAttr, __mc__event, __mc__children
	                )
	            );
	
	
	        });
	
	
	
	    })(scope, __mc__tree, '1');
	
	    return __mc__tree;
	};

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 *
	 * remove
	 * @author vfasky <vfasky@gmail.com>
	 **/
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _mcore = __webpack_require__(2);
	
	var _mcore2 = _interopRequireDefault(_mcore);
	
	var _svgicon = __webpack_require__(25);
	
	var _svgicon2 = _interopRequireDefault(_svgicon);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var RemoveItem = function (_mcore$View) {
	    _inherits(RemoveItem, _mcore$View);
	
	    function RemoveItem() {
	        _classCallCheck(this, RemoveItem);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(RemoveItem).apply(this, arguments));
	    }
	
	    _createClass(RemoveItem, [{
	        key: 'run',
	        value: function run() {
	            this.render(__webpack_require__(28), {
	                list: ['hello #0', 'hello #1', 'hello #2', 'hello #3', 'hello #4']
	            });
	        }
	    }, {
	        key: 'remove',
	        value: function remove(event, el, v) {
	            // console.log(v);
	            var ix = this.scope.list.indexOf(v);
	            if (ix !== -1) {
	                this.scope.list.splice(this.scope.list.indexOf(v), 1);
	            }
	            return false;
	        }
	    }]);
	
	    return RemoveItem;
	}(_mcore2.default.View);
	
	exports.default = RemoveItem;
	
	
	RemoveItem.viewName = 'removeItem';

/***/ },
/* 28 */
/***/ function(module, exports) {

	module.exports = function(scope, __mc__view, __mc__mcore) {
	    var __mc__util = {
	        clone: __mc__mcore.util.clone,
	        build: function(tagName, key, attr, dynamicAttr, events, children) {
	            return new __mc__mcore.Element(tagName, key, attr, dynamicAttr, children, events, __mc__view);
	        },
	        parseDynamicVal: function(dynamicCode, dynamicCodeStr) {
	            return __mc__mcore.util.parseDynamicVal(dynamicCode, dynamicCodeStr, __mc__view);
	        },
	        callFormatter: function(formatterName) {
	            return __mc__mcore.util.callFormatter(formatterName, __mc__mcore);
	        },
	    };
	    var __mc__tree = [];
	
	    (function(scope, __mc__tree, __mc_path) {
	
	        var __mc__forArr = [0];
	
	
	        __mc__forArr.forEach(function(__mc__$vn_, __mc__i) {
	
	            var __mc__children;
	
	            var __mc__attr = {},
	                __mc__dynamicAttr = {},
	                __mc__event = {};
	
	
	            __mc__attr['class'] = 'list';
	
	
	
	            __mc__children = [];
	
	
	
	
	            var __mc__pathSubI = String(__mc_path + '.' + (__mc__tree.length));
	            var undefined = 0;
	
	            (function(scope, __mc__tree, __mc_path) {
	
	                /* [for-in] v in scope.list */
	                var __mc__forArr = scope.list;
	                if (false == Array.isArray(__mc__forArr)) {
	                    __mc__forArr = [];
	                }
	
	
	                __mc__forArr.forEach(function(v, __mc__$ix_) {
	
	                    var __mc__children;
	
	                    var __mc__attr = {},
	                        __mc__dynamicAttr = {},
	                        __mc__event = {};
	
	
	
	
	                    __mc__children = [];
	
	
	
	
	                    var __mc__pathSubI = String(__mc_path + '.' + (__mc__tree.length));
	                    var undefined = 0;
	
	                    (function(scope, __mc__tree, __mc_path) {
	
	                        var __mc__forArr = [0];
	
	
	                        __mc__forArr.forEach(function(__mc__$vn_, __mc__i) {
	
	                            var __mc__children;
	
	                            var __mc__attr = {},
	                                __mc__dynamicAttr = {},
	                                __mc__event = {};
	
	
	                            __mc__attr['icon'] = 'print';
	
	
	
	                            __mc__children = [];
	
	
	
	
	                            var __mc__pathSubI = String(__mc_path + '.' + (__mc__tree.length));
	                            var undefined = 0;
	
	                            __mc__tree.push(
	                                __mc__util.build(
	                                    'svgicon', __mc__pathSubI, __mc__attr,
	                                    __mc__dynamicAttr, __mc__event, __mc__children
	                                )
	                            );
	
	
	                        });
	
	
	
	                    })(scope, __mc__children, __mc__pathSubI);
	
	                    (function(scope, __mc__tree, __mc_path) {
	
	                        var __mc__pathStaticI = __mc_path + '.' + __mc__tree.length;
	                        var __mc__strVal = {}
	                        var __mc__tmpAttr;
	                        try {
	                            __mc__tmpAttr = v;
	                        } catch (err) {}
	
	                        __mc__strVal['rp_0'] = (function(x) {
	
	                            return x === undefined ? '' : x;
	                        })(__mc__tmpAttr);
	
	                        /* [formatter] {v} */
	                        var __mc__str = "         " + __mc__strVal['rp_0'] + "         ";
	                        var __mc__dynamicAttr = {
	                            text: __mc__str
	                        };
	                        __mc__tree.push(__mc__util.build(
	                            '_textNode', __mc__pathStaticI, {},
	                            __mc__dynamicAttr, {}, []
	                        ));
	
	                    })(scope, __mc__children, __mc__pathSubI);
	
	                    (function(scope, __mc__tree, __mc_path) {
	
	                        var __mc__forArr = [0];
	
	
	                        __mc__forArr.forEach(function(__mc__$vn_, __mc__i) {
	
	                            var __mc__children;
	
	                            var __mc__attr = {},
	                                __mc__dynamicAttr = {},
	                                __mc__event = {};
	
	
	
	
	                            __mc__children = [];
	
	
	
	
	                            var __mc__pathSubI = String(__mc_path + '.' + (__mc__tree.length));
	                            var undefined = 0;
	
	                            (function(scope, __mc__tree, __mc_path) {
	
	                                var __mc__forArr = [0];
	
	
	                                __mc__forArr.forEach(function(__mc__$vn_, __mc__i) {
	
	                                    var __mc__children;
	
	                                    var __mc__attr = {},
	                                        __mc__dynamicAttr = {},
	                                        __mc__event = {};
	
	
	                                    __mc__attr['class'] = 'iconfont icon-close';
	
	                                    __mc__event['click'] = {
	                                        'funName': 'remove',
	                                        'args': [v]
	                                    };
	
	
	
	                                    __mc__children = [];
	
	
	
	
	                                    var __mc__pathSubI = String(__mc_path + '.' + (__mc__tree.length));
	                                    var undefined = 0;
	
	                                    __mc__tree.push(
	                                        __mc__util.build(
	                                            'i', __mc__pathSubI, __mc__attr,
	                                            __mc__dynamicAttr, __mc__event, __mc__children
	                                        )
	                                    );
	
	
	                                });
	
	
	
	                            })(scope, __mc__children, __mc__pathSubI);
	
	                            __mc__tree.push(
	                                __mc__util.build(
	                                    'a', __mc__pathSubI, __mc__attr,
	                                    __mc__dynamicAttr, __mc__event, __mc__children
	                                )
	                            );
	
	
	                        });
	
	
	
	                    })(scope, __mc__children, __mc__pathSubI);
	
	                    __mc__tree.push(
	                        __mc__util.build(
	                            'li', __mc__pathSubI, __mc__attr,
	                            __mc__dynamicAttr, __mc__event, __mc__children
	                        )
	                    );
	
	
	                });
	
	
	            })(scope, __mc__children, __mc__pathSubI);
	
	            __mc__tree.push(
	                __mc__util.build(
	                    'ul', __mc__pathSubI, __mc__attr,
	                    __mc__dynamicAttr, __mc__event, __mc__children
	                )
	            );
	
	
	        });
	
	
	
	    })(scope, __mc__tree, '0');
	
	    return __mc__tree;
	};

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 *
	 * change
	 * @author vfasky <vfasky@gmail.com>
	 **/
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _removeItem = __webpack_require__(27);
	
	var _removeItem2 = _interopRequireDefault(_removeItem);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var ChangeItem = function (_View) {
	    _inherits(ChangeItem, _View);
	
	    function ChangeItem() {
	        _classCallCheck(this, ChangeItem);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(ChangeItem).apply(this, arguments));
	    }
	
	    _createClass(ChangeItem, [{
	        key: 'run',
	        value: function run() {
	            this.render(__webpack_require__(30), {
	                list: [{
	                    edit: false,
	                    title: 'click edit 0'
	                }, {
	                    edit: false,
	                    title: 'click edit 1'
	                }, {
	                    edit: false,
	                    title: 'click edit 2'
	                }, {
	                    edit: false,
	                    title: 'click edit 3'
	                }, {
	                    edit: false,
	                    title: 'click edit 4'
	                }]
	            });
	        }
	    }, {
	        key: 'save',
	        value: function save(event, el, v) {
	            v.title = el.value;
	            return false;
	        }
	    }, {
	        key: 'edit',
	        value: function edit(event, el, v) {
	            v.edit = true;
	            return false;
	        }
	    }, {
	        key: 'hideEdit',
	        value: function hideEdit(event, el, v) {
	            v.edit = false;
	            return false;
	        }
	    }]);
	
	    return ChangeItem;
	}(_removeItem2.default);
	
	exports.default = ChangeItem;
	
	
	ChangeItem.viewName = 'changeItem';

/***/ },
/* 30 */
/***/ function(module, exports) {

	module.exports = function(scope, __mc__view, __mc__mcore) {
	    var __mc__util = {
	        clone: __mc__mcore.util.clone,
	        build: function(tagName, key, attr, dynamicAttr, events, children) {
	            return new __mc__mcore.Element(tagName, key, attr, dynamicAttr, children, events, __mc__view);
	        },
	        parseDynamicVal: function(dynamicCode, dynamicCodeStr) {
	            return __mc__mcore.util.parseDynamicVal(dynamicCode, dynamicCodeStr, __mc__view);
	        },
	        callFormatter: function(formatterName) {
	            return __mc__mcore.util.callFormatter(formatterName, __mc__mcore);
	        },
	    };
	    var __mc__tree = [];
	
	    (function(scope, __mc__tree, __mc_path) {
	
	        var __mc__forArr = [0];
	
	
	        __mc__forArr.forEach(function(__mc__$vn_, __mc__i) {
	
	            var __mc__children;
	
	            var __mc__attr = {},
	                __mc__dynamicAttr = {},
	                __mc__event = {};
	
	
	            __mc__attr['class'] = 'list';
	
	
	
	            __mc__children = [];
	
	
	
	
	            var __mc__pathSubI = String(__mc_path + '.' + (__mc__tree.length));
	            var undefined = 0;
	
	            (function(scope, __mc__tree, __mc_path) {
	
	                /* [for-in] v in scope.list */
	                var __mc__forArr = scope.list;
	                if (false == Array.isArray(__mc__forArr)) {
	                    __mc__forArr = [];
	                }
	
	
	                __mc__forArr.forEach(function(v, __mc__$ix_) {
	
	                    var __mc__children;
	
	                    var __mc__attr = {},
	                        __mc__dynamicAttr = {},
	                        __mc__event = {};
	
	
	
	
	                    __mc__children = [];
	
	
	
	
	                    var __mc__pathSubI = String(__mc_path + '.' + (__mc__tree.length));
	                    var undefined = 0;
	
	                    (function(scope, __mc__tree, __mc_path) {
	
	                        var __mc__forArr = [0];
	
	
	                        __mc__forArr.forEach(function(__mc__$vn_, __mc__i) {
	
	                            var __mc__children;
	
	                            var __mc__attr = {},
	                                __mc__dynamicAttr = {},
	                                __mc__event = {};
	
	
	                            __mc__dynamicAttr['show'] = __mc__util.parseDynamicVal((!v.edit), '!v.edit');
	
	                            __mc__event['click'] = {
	                                'funName': 'edit',
	                                'args': [v]
	                            };
	
	
	
	                            __mc__children = [];
	
	
	
	
	                            var __mc__pathSubI = String(__mc_path + '.' + (__mc__tree.length));
	                            var undefined = 0;
	
	                            (function(scope, __mc__tree, __mc_path) {
	
	                                var __mc__forArr = [0];
	
	
	                                __mc__forArr.forEach(function(__mc__$vn_, __mc__i) {
	
	                                    var __mc__children;
	
	                                    var __mc__attr = {},
	                                        __mc__dynamicAttr = {},
	                                        __mc__event = {};
	
	
	                                    __mc__attr['icon'] = 'print';
	
	
	
	                                    __mc__children = [];
	
	
	
	
	                                    var __mc__pathSubI = String(__mc_path + '.' + (__mc__tree.length));
	                                    var undefined = 0;
	
	                                    __mc__tree.push(
	                                        __mc__util.build(
	                                            'svgicon', __mc__pathSubI, __mc__attr,
	                                            __mc__dynamicAttr, __mc__event, __mc__children
	                                        )
	                                    );
	
	
	                                });
	
	
	
	                            })(scope, __mc__children, __mc__pathSubI);
	
	                            (function(scope, __mc__tree, __mc_path) {
	
	                                var __mc__pathStaticI = __mc_path + '.' + __mc__tree.length;
	                                var __mc__strVal = {}
	                                var __mc__tmpAttr;
	                                try {
	                                    __mc__tmpAttr = v.title;
	                                } catch (err) {}
	
	                                __mc__strVal['rp_0'] = (function(x) {
	
	                                    return x === undefined ? '' : x;
	                                })(__mc__tmpAttr);
	
	                                /* [formatter] {v.title} */
	                                var __mc__str = "             " + __mc__strVal['rp_0'] + "             ";
	                                var __mc__dynamicAttr = {
	                                    text: __mc__str
	                                };
	                                __mc__tree.push(__mc__util.build(
	                                    '_textNode', __mc__pathStaticI, {},
	                                    __mc__dynamicAttr, {}, []
	                                ));
	
	                            })(scope, __mc__children, __mc__pathSubI);
	
	                            (function(scope, __mc__tree, __mc_path) {
	
	                                var __mc__forArr = [0];
	
	
	                                __mc__forArr.forEach(function(__mc__$vn_, __mc__i) {
	
	                                    var __mc__children;
	
	                                    var __mc__attr = {},
	                                        __mc__dynamicAttr = {},
	                                        __mc__event = {};
	
	
	
	
	                                    __mc__children = [];
	
	
	
	
	                                    var __mc__pathSubI = String(__mc_path + '.' + (__mc__tree.length));
	                                    var undefined = 0;
	
	                                    (function(scope, __mc__tree, __mc_path) {
	
	                                        var __mc__forArr = [0];
	
	
	                                        __mc__forArr.forEach(function(__mc__$vn_, __mc__i) {
	
	                                            var __mc__children;
	
	                                            var __mc__attr = {},
	                                                __mc__dynamicAttr = {},
	                                                __mc__event = {};
	
	
	                                            __mc__attr['class'] = 'iconfont icon-close';
	
	                                            __mc__event['click'] = {
	                                                'funName': 'remove',
	                                                'args': [v]
	                                            };
	
	
	
	                                            __mc__children = [];
	
	
	
	
	                                            var __mc__pathSubI = String(__mc_path + '.' + (__mc__tree.length));
	                                            var undefined = 0;
	
	                                            __mc__tree.push(
	                                                __mc__util.build(
	                                                    'i', __mc__pathSubI, __mc__attr,
	                                                    __mc__dynamicAttr, __mc__event, __mc__children
	                                                )
	                                            );
	
	
	                                        });
	
	
	
	                                    })(scope, __mc__children, __mc__pathSubI);
	
	                                    __mc__tree.push(
	                                        __mc__util.build(
	                                            'a', __mc__pathSubI, __mc__attr,
	                                            __mc__dynamicAttr, __mc__event, __mc__children
	                                        )
	                                    );
	
	
	                                });
	
	
	
	                            })(scope, __mc__children, __mc__pathSubI);
	
	                            __mc__tree.push(
	                                __mc__util.build(
	                                    'div', __mc__pathSubI, __mc__attr,
	                                    __mc__dynamicAttr, __mc__event, __mc__children
	                                )
	                            );
	
	
	                        });
	
	
	
	                    })(scope, __mc__children, __mc__pathSubI);
	
	                    (function(scope, __mc__tree, __mc_path) {
	
	                        var __mc__forArr = [0];
	
	
	                        __mc__forArr.forEach(function(__mc__$vn_, __mc__i) {
	
	                            var __mc__children;
	
	                            var __mc__attr = {},
	                                __mc__dynamicAttr = {},
	                                __mc__event = {};
	
	
	                            __mc__attr['type'] = 'text';
	
	                            __mc__dynamicAttr['value'] = __mc__util.parseDynamicVal((v.title), 'v.title');
	
	                            __mc__dynamicAttr['show'] = __mc__util.parseDynamicVal((v.edit), 'v.edit');
	
	                            __mc__event['change'] = {
	                                'funName': 'save',
	                                'args': [v]
	                            };
	
	                            __mc__event['blur'] = {
	                                'funName': 'hideEdit',
	                                'args': [v]
	                            };
	
	
	
	                            __mc__children = [];
	
	
	
	
	                            var __mc__pathSubI = String(__mc_path + '.' + (__mc__tree.length));
	                            var undefined = 0;
	
	                            __mc__tree.push(
	                                __mc__util.build(
	                                    'input', __mc__pathSubI, __mc__attr,
	                                    __mc__dynamicAttr, __mc__event, __mc__children
	                                )
	                            );
	
	
	                        });
	
	
	
	                    })(scope, __mc__children, __mc__pathSubI);
	
	                    __mc__tree.push(
	                        __mc__util.build(
	                            'li', __mc__pathSubI, __mc__attr,
	                            __mc__dynamicAttr, __mc__event, __mc__children
	                        )
	                    );
	
	
	                });
	
	
	            })(scope, __mc__children, __mc__pathSubI);
	
	            __mc__tree.push(
	                __mc__util.build(
	                    'ul', __mc__pathSubI, __mc__attr,
	                    __mc__dynamicAttr, __mc__event, __mc__children
	                )
	            );
	
	
	        });
	
	
	
	    })(scope, __mc__tree, '0');
	
	    return __mc__tree;
	};

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 *
	 * add item
	 * @author vfasky <vfasky@gmail.com>
	 **/
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _changeItem = __webpack_require__(29);
	
	var _changeItem2 = _interopRequireDefault(_changeItem);
	
	var _jquery = __webpack_require__(1);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var AddItem = function (_View) {
	    _inherits(AddItem, _View);
	
	    function AddItem() {
	        _classCallCheck(this, AddItem);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(AddItem).apply(this, arguments));
	    }
	
	    _createClass(AddItem, [{
	        key: 'run',
	        value: function run() {
	            this.render(__webpack_require__(32), {
	                addItemName: '',
	                list: []
	            });
	        }
	    }, {
	        key: 'syncItemName',
	        value: function syncItemName(event, el) {
	            this.scope.addItemName = el.value;
	        }
	    }, {
	        key: 'add',
	        value: function add() {
	            if (!this.scope.addItemName) {
	                return false;
	            }
	            this.scope.list.push({
	                edit: false,
	                title: this.scope.addItemName
	            });
	            this.scope.addItemName = '';
	            return false;
	        }
	    }]);
	
	    return AddItem;
	}(_changeItem2.default);
	
	exports.default = AddItem;
	
	
	AddItem.viewName = 'addItem';

/***/ },
/* 32 */
/***/ function(module, exports) {

	module.exports = function(scope, __mc__view, __mc__mcore) {
	    var __mc__util = {
	        clone: __mc__mcore.util.clone,
	        build: function(tagName, key, attr, dynamicAttr, events, children) {
	            return new __mc__mcore.Element(tagName, key, attr, dynamicAttr, children, events, __mc__view);
	        },
	        parseDynamicVal: function(dynamicCode, dynamicCodeStr) {
	            return __mc__mcore.util.parseDynamicVal(dynamicCode, dynamicCodeStr, __mc__view);
	        },
	        callFormatter: function(formatterName) {
	            return __mc__mcore.util.callFormatter(formatterName, __mc__mcore);
	        },
	    };
	    var __mc__tree = [];
	
	    (function(scope, __mc__tree, __mc_path) {
	
	        var __mc__forArr = [0];
	
	
	        __mc__forArr.forEach(function(__mc__$vn_, __mc__i) {
	
	            var __mc__children;
	
	            var __mc__attr = {},
	                __mc__dynamicAttr = {},
	                __mc__event = {};
	
	
	            __mc__attr['class'] = 'na-form';
	
	            __mc__event['submit'] = {
	                'funName': 'add',
	                'args': []
	            };
	
	
	
	            __mc__children = [];
	
	
	
	
	            var __mc__pathSubI = String(__mc_path + '.' + (__mc__tree.length));
	            var undefined = 0;
	
	            (function(scope, __mc__tree, __mc_path) {
	
	                var __mc__forArr = [0];
	
	
	                __mc__forArr.forEach(function(__mc__$vn_, __mc__i) {
	
	                    var __mc__children;
	
	                    var __mc__attr = {},
	                        __mc__dynamicAttr = {},
	                        __mc__event = {};
	
	
	                    __mc__attr['class'] = 'form-group row';
	
	
	
	                    __mc__children = [];
	
	
	
	
	                    var __mc__pathSubI = String(__mc_path + '.' + (__mc__tree.length));
	                    var undefined = 0;
	
	                    (function(scope, __mc__tree, __mc_path) {
	
	                        var __mc__forArr = [0];
	
	
	                        __mc__forArr.forEach(function(__mc__$vn_, __mc__i) {
	
	                            var __mc__children;
	
	                            var __mc__attr = {},
	                                __mc__dynamicAttr = {},
	                                __mc__event = {};
	
	
	                            __mc__attr['class'] = 'control-label flex-1';
	
	
	
	                            __mc__children = [];
	
	
	
	
	                            var __mc__pathSubI = String(__mc_path + '.' + (__mc__tree.length));
	                            var undefined = 0;
	
	                            (function(scope, __mc__tree, __mc_path) {
	
	                                var __mc__pathStaticI = __mc_path + '.' + __mc__tree.length;
	
	                                var __mc__attr = {
	                                    text: "item name"
	                                };
	                                __mc__tree.push(__mc__util.build('_textNode', __mc__pathStaticI, __mc__attr));
	
	                            })(scope, __mc__children, __mc__pathSubI);
	
	                            __mc__tree.push(
	                                __mc__util.build(
	                                    'label', __mc__pathSubI, __mc__attr,
	                                    __mc__dynamicAttr, __mc__event, __mc__children
	                                )
	                            );
	
	
	                        });
	
	
	
	                    })(scope, __mc__children, __mc__pathSubI);
	
	                    (function(scope, __mc__tree, __mc_path) {
	
	                        var __mc__forArr = [0];
	
	
	                        __mc__forArr.forEach(function(__mc__$vn_, __mc__i) {
	
	                            var __mc__children;
	
	                            var __mc__attr = {},
	                                __mc__dynamicAttr = {},
	                                __mc__event = {};
	
	
	                            __mc__attr['class'] = 'flex-4';
	
	
	
	                            __mc__children = [];
	
	
	
	
	                            var __mc__pathSubI = String(__mc_path + '.' + (__mc__tree.length));
	                            var undefined = 0;
	
	                            (function(scope, __mc__tree, __mc_path) {
	
	                                var __mc__forArr = [0];
	
	
	                                __mc__forArr.forEach(function(__mc__$vn_, __mc__i) {
	
	                                    var __mc__children;
	
	                                    var __mc__attr = {},
	                                        __mc__dynamicAttr = {},
	                                        __mc__event = {};
	
	
	                                    __mc__attr['type'] = 'text';
	
	                                    __mc__attr['class'] = 'form-control';
	
	                                    __mc__event['change'] = {
	                                        'funName': 'syncItemName',
	                                        'args': []
	                                    };
	
	                                    __mc__dynamicAttr['value'] = __mc__util.parseDynamicVal((scope.addItemName), 'scope.addItemName');
	
	
	
	                                    __mc__children = [];
	
	
	
	
	                                    var __mc__pathSubI = String(__mc_path + '.' + (__mc__tree.length));
	                                    var undefined = 0;
	
	                                    __mc__tree.push(
	                                        __mc__util.build(
	                                            'input', __mc__pathSubI, __mc__attr,
	                                            __mc__dynamicAttr, __mc__event, __mc__children
	                                        )
	                                    );
	
	
	                                });
	
	
	
	                            })(scope, __mc__children, __mc__pathSubI);
	
	                            __mc__tree.push(
	                                __mc__util.build(
	                                    'div', __mc__pathSubI, __mc__attr,
	                                    __mc__dynamicAttr, __mc__event, __mc__children
	                                )
	                            );
	
	
	                        });
	
	
	
	                    })(scope, __mc__children, __mc__pathSubI);
	
	                    (function(scope, __mc__tree, __mc_path) {
	
	                        var __mc__forArr = [0];
	
	
	                        __mc__forArr.forEach(function(__mc__$vn_, __mc__i) {
	
	                            var __mc__children;
	
	                            var __mc__attr = {},
	                                __mc__dynamicAttr = {},
	                                __mc__event = {};
	
	
	                            __mc__attr['class'] = 'flex-2';
	
	
	
	                            __mc__children = [];
	
	
	
	
	                            var __mc__pathSubI = String(__mc_path + '.' + (__mc__tree.length));
	                            var undefined = 0;
	
	                            (function(scope, __mc__tree, __mc_path) {
	
	                                var __mc__forArr = [0];
	
	
	                                __mc__forArr.forEach(function(__mc__$vn_, __mc__i) {
	
	                                    var __mc__children;
	
	                                    var __mc__attr = {},
	                                        __mc__dynamicAttr = {},
	                                        __mc__event = {};
	
	
	                                    __mc__attr['class'] = 'btn';
	
	                                    __mc__attr['type'] = 'submit';
	
	
	
	                                    __mc__children = [];
	
	
	
	
	                                    var __mc__pathSubI = String(__mc_path + '.' + (__mc__tree.length));
	                                    var undefined = 0;
	
	                                    (function(scope, __mc__tree, __mc_path) {
	
	                                        var __mc__pathStaticI = __mc_path + '.' + __mc__tree.length;
	
	                                        var __mc__attr = {
	                                            text: "Add"
	                                        };
	                                        __mc__tree.push(__mc__util.build('_textNode', __mc__pathStaticI, __mc__attr));
	
	                                    })(scope, __mc__children, __mc__pathSubI);
	
	                                    __mc__tree.push(
	                                        __mc__util.build(
	                                            'button', __mc__pathSubI, __mc__attr,
	                                            __mc__dynamicAttr, __mc__event, __mc__children
	                                        )
	                                    );
	
	
	                                });
	
	
	
	                            })(scope, __mc__children, __mc__pathSubI);
	
	                            __mc__tree.push(
	                                __mc__util.build(
	                                    'div', __mc__pathSubI, __mc__attr,
	                                    __mc__dynamicAttr, __mc__event, __mc__children
	                                )
	                            );
	
	
	                        });
	
	
	
	                    })(scope, __mc__children, __mc__pathSubI);
	
	                    __mc__tree.push(
	                        __mc__util.build(
	                            'div', __mc__pathSubI, __mc__attr,
	                            __mc__dynamicAttr, __mc__event, __mc__children
	                        )
	                    );
	
	
	                });
	
	
	
	            })(scope, __mc__children, __mc__pathSubI);
	
	            __mc__tree.push(
	                __mc__util.build(
	                    'form', __mc__pathSubI, __mc__attr,
	                    __mc__dynamicAttr, __mc__event, __mc__children
	                )
	            );
	
	
	        });
	
	
	
	    })(scope, __mc__tree, '0');
	
	    (function(scope, __mc__tree, __mc_path) {
	
	        var __mc__forArr = [0];
	
	
	        __mc__forArr.forEach(function(__mc__$vn_, __mc__i) {
	
	            var __mc__children;
	
	            var __mc__attr = {},
	                __mc__dynamicAttr = {},
	                __mc__event = {};
	
	
	            __mc__attr['class'] = 'list';
	
	
	
	            __mc__children = [];
	
	
	
	
	            var __mc__pathSubI = String(__mc_path + '.' + (__mc__tree.length));
	            var undefined = 0;
	
	            (function(scope, __mc__tree, __mc_path) {
	
	                /* [for-in] v in scope.list */
	                var __mc__forArr = scope.list;
	                if (false == Array.isArray(__mc__forArr)) {
	                    __mc__forArr = [];
	                }
	
	
	                __mc__forArr.forEach(function(v, __mc__$ix_) {
	
	                    var __mc__children;
	
	                    var __mc__attr = {},
	                        __mc__dynamicAttr = {},
	                        __mc__event = {};
	
	
	
	
	                    __mc__children = [];
	
	
	
	
	                    var __mc__pathSubI = String(__mc_path + '.' + (__mc__tree.length));
	                    var undefined = 0;
	
	                    (function(scope, __mc__tree, __mc_path) {
	
	                        var __mc__forArr = [0];
	
	
	                        __mc__forArr.forEach(function(__mc__$vn_, __mc__i) {
	
	                            var __mc__children;
	
	                            var __mc__attr = {},
	                                __mc__dynamicAttr = {},
	                                __mc__event = {};
	
	
	                            __mc__dynamicAttr['show'] = __mc__util.parseDynamicVal((!v.edit), '!v.edit');
	
	                            __mc__event['click'] = {
	                                'funName': 'edit',
	                                'args': [v]
	                            };
	
	
	
	                            __mc__children = [];
	
	
	
	
	                            var __mc__pathSubI = String(__mc_path + '.' + (__mc__tree.length));
	                            var undefined = 0;
	
	                            (function(scope, __mc__tree, __mc_path) {
	
	                                var __mc__forArr = [0];
	
	
	                                __mc__forArr.forEach(function(__mc__$vn_, __mc__i) {
	
	                                    var __mc__children;
	
	                                    var __mc__attr = {},
	                                        __mc__dynamicAttr = {},
	                                        __mc__event = {};
	
	
	                                    __mc__attr['icon'] = 'print';
	
	
	
	                                    __mc__children = [];
	
	
	
	
	                                    var __mc__pathSubI = String(__mc_path + '.' + (__mc__tree.length));
	                                    var undefined = 0;
	
	                                    __mc__tree.push(
	                                        __mc__util.build(
	                                            'svgicon', __mc__pathSubI, __mc__attr,
	                                            __mc__dynamicAttr, __mc__event, __mc__children
	                                        )
	                                    );
	
	
	                                });
	
	
	
	                            })(scope, __mc__children, __mc__pathSubI);
	
	                            (function(scope, __mc__tree, __mc_path) {
	
	                                var __mc__pathStaticI = __mc_path + '.' + __mc__tree.length;
	                                var __mc__strVal = {}
	                                var __mc__tmpAttr;
	                                try {
	                                    __mc__tmpAttr = v.title;
	                                } catch (err) {}
	
	                                __mc__strVal['rp_0'] = (function(x) {
	
	                                    return x === undefined ? '' : x;
	                                })(__mc__tmpAttr);
	
	                                /* [formatter] {v.title} */
	                                var __mc__str = "             " + __mc__strVal['rp_0'] + "             ";
	                                var __mc__dynamicAttr = {
	                                    text: __mc__str
	                                };
	                                __mc__tree.push(__mc__util.build(
	                                    '_textNode', __mc__pathStaticI, {},
	                                    __mc__dynamicAttr, {}, []
	                                ));
	
	                            })(scope, __mc__children, __mc__pathSubI);
	
	                            (function(scope, __mc__tree, __mc_path) {
	
	                                var __mc__forArr = [0];
	
	
	                                __mc__forArr.forEach(function(__mc__$vn_, __mc__i) {
	
	                                    var __mc__children;
	
	                                    var __mc__attr = {},
	                                        __mc__dynamicAttr = {},
	                                        __mc__event = {};
	
	
	
	
	                                    __mc__children = [];
	
	
	
	
	                                    var __mc__pathSubI = String(__mc_path + '.' + (__mc__tree.length));
	                                    var undefined = 0;
	
	                                    (function(scope, __mc__tree, __mc_path) {
	
	                                        var __mc__forArr = [0];
	
	
	                                        __mc__forArr.forEach(function(__mc__$vn_, __mc__i) {
	
	                                            var __mc__children;
	
	                                            var __mc__attr = {},
	                                                __mc__dynamicAttr = {},
	                                                __mc__event = {};
	
	
	                                            __mc__attr['class'] = 'iconfont icon-close';
	
	                                            __mc__event['click'] = {
	                                                'funName': 'remove',
	                                                'args': [v]
	                                            };
	
	
	
	                                            __mc__children = [];
	
	
	
	
	                                            var __mc__pathSubI = String(__mc_path + '.' + (__mc__tree.length));
	                                            var undefined = 0;
	
	                                            __mc__tree.push(
	                                                __mc__util.build(
	                                                    'i', __mc__pathSubI, __mc__attr,
	                                                    __mc__dynamicAttr, __mc__event, __mc__children
	                                                )
	                                            );
	
	
	                                        });
	
	
	
	                                    })(scope, __mc__children, __mc__pathSubI);
	
	                                    __mc__tree.push(
	                                        __mc__util.build(
	                                            'a', __mc__pathSubI, __mc__attr,
	                                            __mc__dynamicAttr, __mc__event, __mc__children
	                                        )
	                                    );
	
	
	                                });
	
	
	
	                            })(scope, __mc__children, __mc__pathSubI);
	
	                            __mc__tree.push(
	                                __mc__util.build(
	                                    'div', __mc__pathSubI, __mc__attr,
	                                    __mc__dynamicAttr, __mc__event, __mc__children
	                                )
	                            );
	
	
	                        });
	
	
	
	                    })(scope, __mc__children, __mc__pathSubI);
	
	                    (function(scope, __mc__tree, __mc_path) {
	
	                        var __mc__forArr = [0];
	
	
	                        __mc__forArr.forEach(function(__mc__$vn_, __mc__i) {
	
	                            var __mc__children;
	
	                            var __mc__attr = {},
	                                __mc__dynamicAttr = {},
	                                __mc__event = {};
	
	
	                            __mc__attr['type'] = 'text';
	
	                            __mc__dynamicAttr['value'] = __mc__util.parseDynamicVal((v.title), 'v.title');
	
	                            __mc__dynamicAttr['show'] = __mc__util.parseDynamicVal((v.edit), 'v.edit');
	
	                            __mc__event['change'] = {
	                                'funName': 'save',
	                                'args': [v]
	                            };
	
	                            __mc__event['blur'] = {
	                                'funName': 'hideEdit',
	                                'args': [v]
	                            };
	
	
	
	                            __mc__children = [];
	
	
	
	
	                            var __mc__pathSubI = String(__mc_path + '.' + (__mc__tree.length));
	                            var undefined = 0;
	
	                            __mc__tree.push(
	                                __mc__util.build(
	                                    'input', __mc__pathSubI, __mc__attr,
	                                    __mc__dynamicAttr, __mc__event, __mc__children
	                                )
	                            );
	
	
	                        });
	
	
	
	                    })(scope, __mc__children, __mc__pathSubI);
	
	                    __mc__tree.push(
	                        __mc__util.build(
	                            'li', __mc__pathSubI, __mc__attr,
	                            __mc__dynamicAttr, __mc__event, __mc__children
	                        )
	                    );
	
	
	                });
	
	
	            })(scope, __mc__children, __mc__pathSubI);
	
	            __mc__tree.push(
	                __mc__util.build(
	                    'ul', __mc__pathSubI, __mc__attr,
	                    __mc__dynamicAttr, __mc__event, __mc__children
	                )
	            );
	
	
	        });
	
	
	
	    })(scope, __mc__tree, '1');
	
	    return __mc__tree;
	};

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 *
	 * find item
	 * @author vfasky <vfasky@gmail.com>
	 **/
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _addItem = __webpack_require__(31);
	
	var _addItem2 = _interopRequireDefault(_addItem);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var FindItem = function (_View) {
	    _inherits(FindItem, _View);
	
	    function FindItem() {
	        _classCallCheck(this, FindItem);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(FindItem).apply(this, arguments));
	    }
	
	    _createClass(FindItem, [{
	        key: 'run',
	        value: function run() {
	            this.render(__webpack_require__(34), {
	                addItemName: '',
	                find: '',
	                list: [],
	                filterList: []
	            });
	        }
	    }, {
	        key: 'edit',
	        value: function edit(event, el, v) {
	            if (!this.scope.find) {
	                v.edit = true;
	            }
	            return false;
	        }
	    }, {
	        key: 'find',
	        value: function find(event, el) {
	            var _this2 = this;
	
	            this.scope.find = el.value;
	            if (!this.scope.find) {
	                return;
	            }
	            this.scope.filterList = this.scope.list.filter(function (v) {
	                return v.title.indexOf(_this2.scope.find) !== -1;
	            });
	        }
	    }]);
	
	    return FindItem;
	}(_addItem2.default);
	
	exports.default = FindItem;
	
	
	FindItem.viewName = 'findItem';

/***/ },
/* 34 */
/***/ function(module, exports) {

	module.exports = function(scope, __mc__view, __mc__mcore) {
	    var __mc__util = {
	        clone: __mc__mcore.util.clone,
	        build: function(tagName, key, attr, dynamicAttr, events, children) {
	            return new __mc__mcore.Element(tagName, key, attr, dynamicAttr, children, events, __mc__view);
	        },
	        parseDynamicVal: function(dynamicCode, dynamicCodeStr) {
	            return __mc__mcore.util.parseDynamicVal(dynamicCode, dynamicCodeStr, __mc__view);
	        },
	        callFormatter: function(formatterName) {
	            return __mc__mcore.util.callFormatter(formatterName, __mc__mcore);
	        },
	    };
	    var __mc__tree = [];
	
	    (function(scope, __mc__tree, __mc_path) {
	
	        var __mc__forArr = [0];
	
	
	        __mc__forArr.forEach(function(__mc__$vn_, __mc__i) {
	
	            var __mc__children;
	
	            var __mc__attr = {},
	                __mc__dynamicAttr = {},
	                __mc__event = {};
	
	
	            __mc__attr['class'] = 'na-form';
	
	
	
	            __mc__children = [];
	
	
	
	
	            var __mc__pathSubI = String(__mc_path + '.' + (__mc__tree.length));
	            var undefined = 0;
	
	            (function(scope, __mc__tree, __mc_path) {
	
	                var __mc__forArr = [0];
	
	
	                __mc__forArr.forEach(function(__mc__$vn_, __mc__i) {
	
	                    var __mc__children;
	
	                    var __mc__attr = {},
	                        __mc__dynamicAttr = {},
	                        __mc__event = {};
	
	
	                    __mc__attr['class'] = 'form-group row';
	
	
	
	                    __mc__children = [];
	
	
	
	
	                    var __mc__pathSubI = String(__mc_path + '.' + (__mc__tree.length));
	                    var undefined = 0;
	
	                    (function(scope, __mc__tree, __mc_path) {
	
	                        var __mc__forArr = [0];
	
	
	                        __mc__forArr.forEach(function(__mc__$vn_, __mc__i) {
	
	                            var __mc__children;
	
	                            var __mc__attr = {},
	                                __mc__dynamicAttr = {},
	                                __mc__event = {};
	
	
	                            __mc__attr['class'] = 'control-label flex-1';
	
	
	
	                            __mc__children = [];
	
	
	
	
	                            var __mc__pathSubI = String(__mc_path + '.' + (__mc__tree.length));
	                            var undefined = 0;
	
	                            (function(scope, __mc__tree, __mc_path) {
	
	                                var __mc__pathStaticI = __mc_path + '.' + __mc__tree.length;
	
	                                var __mc__attr = {
	                                    text: "find"
	                                };
	                                __mc__tree.push(__mc__util.build('_textNode', __mc__pathStaticI, __mc__attr));
	
	                            })(scope, __mc__children, __mc__pathSubI);
	
	                            __mc__tree.push(
	                                __mc__util.build(
	                                    'label', __mc__pathSubI, __mc__attr,
	                                    __mc__dynamicAttr, __mc__event, __mc__children
	                                )
	                            );
	
	
	                        });
	
	
	
	                    })(scope, __mc__children, __mc__pathSubI);
	
	                    (function(scope, __mc__tree, __mc_path) {
	
	                        var __mc__forArr = [0];
	
	
	                        __mc__forArr.forEach(function(__mc__$vn_, __mc__i) {
	
	                            var __mc__children;
	
	                            var __mc__attr = {},
	                                __mc__dynamicAttr = {},
	                                __mc__event = {};
	
	
	                            __mc__attr['class'] = 'flex-8';
	
	
	
	                            __mc__children = [];
	
	
	
	
	                            var __mc__pathSubI = String(__mc_path + '.' + (__mc__tree.length));
	                            var undefined = 0;
	
	                            (function(scope, __mc__tree, __mc_path) {
	
	                                var __mc__forArr = [0];
	
	
	                                __mc__forArr.forEach(function(__mc__$vn_, __mc__i) {
	
	                                    var __mc__children;
	
	                                    var __mc__attr = {},
	                                        __mc__dynamicAttr = {},
	                                        __mc__event = {};
	
	
	                                    __mc__attr['type'] = 'text';
	
	                                    __mc__attr['class'] = 'form-control';
	
	                                    __mc__event['keyup'] = {
	                                        'funName': 'find',
	                                        'args': []
	                                    };
	
	                                    __mc__dynamicAttr['value'] = __mc__util.parseDynamicVal((scope.find), 'scope.find');
	
	
	
	                                    __mc__children = [];
	
	
	
	
	                                    var __mc__pathSubI = String(__mc_path + '.' + (__mc__tree.length));
	                                    var undefined = 0;
	
	                                    __mc__tree.push(
	                                        __mc__util.build(
	                                            'input', __mc__pathSubI, __mc__attr,
	                                            __mc__dynamicAttr, __mc__event, __mc__children
	                                        )
	                                    );
	
	
	                                });
	
	
	
	                            })(scope, __mc__children, __mc__pathSubI);
	
	                            __mc__tree.push(
	                                __mc__util.build(
	                                    'div', __mc__pathSubI, __mc__attr,
	                                    __mc__dynamicAttr, __mc__event, __mc__children
	                                )
	                            );
	
	
	                        });
	
	
	
	                    })(scope, __mc__children, __mc__pathSubI);
	
	                    __mc__tree.push(
	                        __mc__util.build(
	                            'div', __mc__pathSubI, __mc__attr,
	                            __mc__dynamicAttr, __mc__event, __mc__children
	                        )
	                    );
	
	
	                });
	
	
	
	            })(scope, __mc__children, __mc__pathSubI);
	
	            __mc__tree.push(
	                __mc__util.build(
	                    'div', __mc__pathSubI, __mc__attr,
	                    __mc__dynamicAttr, __mc__event, __mc__children
	                )
	            );
	
	
	        });
	
	
	
	    })(scope, __mc__tree, '0');
	
	    (function(scope, __mc__tree, __mc_path) {
	
	        var __mc__forArr = [0];
	
	
	        __mc__forArr.forEach(function(__mc__$vn_, __mc__i) {
	
	            var __mc__children;
	
	            var __mc__attr = {},
	                __mc__dynamicAttr = {},
	                __mc__event = {};
	
	
	            __mc__attr['class'] = 'list';
	
	
	
	            __mc__children = [];
	
	
	
	
	            var __mc__pathSubI = String(__mc_path + '.' + (__mc__tree.length));
	            var undefined = 0;
	
	            (function(scope, __mc__tree, __mc_path) {
	
	                /* [for-in] v in (scope.find ? scope.filterList : scope.list) */
	                var __mc__forArr = (scope.find ? scope.filterList : scope.list);
	                if (false == Array.isArray(__mc__forArr)) {
	                    __mc__forArr = [];
	                }
	
	
	                __mc__forArr.forEach(function(v, __mc__$ix_) {
	
	                    var __mc__children;
	
	                    var __mc__attr = {},
	                        __mc__dynamicAttr = {},
	                        __mc__event = {};
	
	
	
	
	                    __mc__children = [];
	
	
	
	
	                    var __mc__pathSubI = String(__mc_path + '.' + (__mc__tree.length));
	                    var undefined = 0;
	
	                    (function(scope, __mc__tree, __mc_path) {
	
	                        var __mc__forArr = [0];
	
	
	                        __mc__forArr.forEach(function(__mc__$vn_, __mc__i) {
	
	                            var __mc__children;
	
	                            var __mc__attr = {},
	                                __mc__dynamicAttr = {},
	                                __mc__event = {};
	
	
	                            __mc__dynamicAttr['show'] = __mc__util.parseDynamicVal((!v.edit), '!v.edit');
	
	                            __mc__event['click'] = {
	                                'funName': 'edit',
	                                'args': [v]
	                            };
	
	
	
	                            __mc__children = [];
	
	
	
	
	                            var __mc__pathSubI = String(__mc_path + '.' + (__mc__tree.length));
	                            var undefined = 0;
	
	                            (function(scope, __mc__tree, __mc_path) {
	
	                                var __mc__forArr = [0];
	
	
	                                __mc__forArr.forEach(function(__mc__$vn_, __mc__i) {
	
	                                    var __mc__children;
	
	                                    var __mc__attr = {},
	                                        __mc__dynamicAttr = {},
	                                        __mc__event = {};
	
	
	                                    __mc__attr['icon'] = 'print';
	
	
	
	                                    __mc__children = [];
	
	
	
	
	                                    var __mc__pathSubI = String(__mc_path + '.' + (__mc__tree.length));
	                                    var undefined = 0;
	
	                                    __mc__tree.push(
	                                        __mc__util.build(
	                                            'svgicon', __mc__pathSubI, __mc__attr,
	                                            __mc__dynamicAttr, __mc__event, __mc__children
	                                        )
	                                    );
	
	
	                                });
	
	
	
	                            })(scope, __mc__children, __mc__pathSubI);
	
	                            (function(scope, __mc__tree, __mc_path) {
	
	                                var __mc__pathStaticI = __mc_path + '.' + __mc__tree.length;
	                                var __mc__strVal = {}
	                                var __mc__tmpAttr;
	                                try {
	                                    __mc__tmpAttr = v.title;
	                                } catch (err) {}
	
	                                __mc__strVal['rp_0'] = (function(x) {
	
	                                    return x === undefined ? '' : x;
	                                })(__mc__tmpAttr);
	
	                                /* [formatter] {v.title} */
	                                var __mc__str = "             " + __mc__strVal['rp_0'] + "             ";
	                                var __mc__dynamicAttr = {
	                                    text: __mc__str
	                                };
	                                __mc__tree.push(__mc__util.build(
	                                    '_textNode', __mc__pathStaticI, {},
	                                    __mc__dynamicAttr, {}, []
	                                ));
	
	                            })(scope, __mc__children, __mc__pathSubI);
	
	                            (function(scope, __mc__tree, __mc_path) {
	
	                                var __mc__forArr = [0];
	
	
	                                __mc__forArr.forEach(function(__mc__$vn_, __mc__i) {
	
	                                    var __mc__children;
	
	                                    var __mc__attr = {},
	                                        __mc__dynamicAttr = {},
	                                        __mc__event = {};
	
	
	                                    __mc__dynamicAttr['show'] = __mc__util.parseDynamicVal((!scope.find), '!scope.find');
	
	
	
	                                    __mc__children = [];
	
	
	
	
	                                    var __mc__pathSubI = String(__mc_path + '.' + (__mc__tree.length));
	                                    var undefined = 0;
	
	                                    (function(scope, __mc__tree, __mc_path) {
	
	                                        var __mc__forArr = [0];
	
	
	                                        __mc__forArr.forEach(function(__mc__$vn_, __mc__i) {
	
	                                            var __mc__children;
	
	                                            var __mc__attr = {},
	                                                __mc__dynamicAttr = {},
	                                                __mc__event = {};
	
	
	                                            __mc__attr['class'] = 'iconfont icon-close';
	
	                                            __mc__event['click'] = {
	                                                'funName': 'remove',
	                                                'args': [v]
	                                            };
	
	
	
	                                            __mc__children = [];
	
	
	
	
	                                            var __mc__pathSubI = String(__mc_path + '.' + (__mc__tree.length));
	                                            var undefined = 0;
	
	                                            __mc__tree.push(
	                                                __mc__util.build(
	                                                    'i', __mc__pathSubI, __mc__attr,
	                                                    __mc__dynamicAttr, __mc__event, __mc__children
	                                                )
	                                            );
	
	
	                                        });
	
	
	
	                                    })(scope, __mc__children, __mc__pathSubI);
	
	                                    __mc__tree.push(
	                                        __mc__util.build(
	                                            'a', __mc__pathSubI, __mc__attr,
	                                            __mc__dynamicAttr, __mc__event, __mc__children
	                                        )
	                                    );
	
	
	                                });
	
	
	
	                            })(scope, __mc__children, __mc__pathSubI);
	
	                            __mc__tree.push(
	                                __mc__util.build(
	                                    'div', __mc__pathSubI, __mc__attr,
	                                    __mc__dynamicAttr, __mc__event, __mc__children
	                                )
	                            );
	
	
	                        });
	
	
	
	                    })(scope, __mc__children, __mc__pathSubI);
	
	                    (function(scope, __mc__tree, __mc_path) {
	
	                        var __mc__forArr = [0];
	
	
	                        __mc__forArr.forEach(function(__mc__$vn_, __mc__i) {
	
	                            var __mc__children;
	
	                            var __mc__attr = {},
	                                __mc__dynamicAttr = {},
	                                __mc__event = {};
	
	
	                            __mc__attr['type'] = 'text';
	
	                            __mc__dynamicAttr['value'] = __mc__util.parseDynamicVal((v.title), 'v.title');
	
	                            __mc__dynamicAttr['show'] = __mc__util.parseDynamicVal((v.edit), 'v.edit');
	
	                            __mc__event['change'] = {
	                                'funName': 'save',
	                                'args': [v]
	                            };
	
	                            __mc__event['blur'] = {
	                                'funName': 'hideEdit',
	                                'args': [v]
	                            };
	
	
	
	                            __mc__children = [];
	
	
	
	
	                            var __mc__pathSubI = String(__mc_path + '.' + (__mc__tree.length));
	                            var undefined = 0;
	
	                            __mc__tree.push(
	                                __mc__util.build(
	                                    'input', __mc__pathSubI, __mc__attr,
	                                    __mc__dynamicAttr, __mc__event, __mc__children
	                                )
	                            );
	
	
	                        });
	
	
	
	                    })(scope, __mc__children, __mc__pathSubI);
	
	                    __mc__tree.push(
	                        __mc__util.build(
	                            'li', __mc__pathSubI, __mc__attr,
	                            __mc__dynamicAttr, __mc__event, __mc__children
	                        )
	                    );
	
	
	                });
	
	
	            })(scope, __mc__children, __mc__pathSubI);
	
	            __mc__tree.push(
	                __mc__util.build(
	                    'ul', __mc__pathSubI, __mc__attr,
	                    __mc__dynamicAttr, __mc__event, __mc__children
	                )
	            );
	
	
	        });
	
	
	
	    })(scope, __mc__tree, '1');
	
	    (function(scope, __mc__tree, __mc_path) {
	
	        var __mc__forArr = [0];
	
	
	        __mc__forArr.forEach(function(__mc__$vn_, __mc__i) {
	
	            var __mc__children;
	
	            var __mc__attr = {},
	                __mc__dynamicAttr = {},
	                __mc__event = {};
	
	
	            __mc__attr['class'] = 'na-form';
	
	            __mc__event['submit'] = {
	                'funName': 'add',
	                'args': []
	            };
	
	
	
	            __mc__children = [];
	
	
	
	
	            var __mc__pathSubI = String(__mc_path + '.' + (__mc__tree.length));
	            var undefined = 0;
	
	            (function(scope, __mc__tree, __mc_path) {
	
	                var __mc__forArr = [0];
	
	
	                __mc__forArr.forEach(function(__mc__$vn_, __mc__i) {
	
	                    var __mc__children;
	
	                    var __mc__attr = {},
	                        __mc__dynamicAttr = {},
	                        __mc__event = {};
	
	
	                    __mc__attr['class'] = 'form-group row';
	
	
	
	                    __mc__children = [];
	
	
	
	
	                    var __mc__pathSubI = String(__mc_path + '.' + (__mc__tree.length));
	                    var undefined = 0;
	
	                    (function(scope, __mc__tree, __mc_path) {
	
	                        var __mc__forArr = [0];
	
	
	                        __mc__forArr.forEach(function(__mc__$vn_, __mc__i) {
	
	                            var __mc__children;
	
	                            var __mc__attr = {},
	                                __mc__dynamicAttr = {},
	                                __mc__event = {};
	
	
	                            __mc__attr['class'] = 'control-label flex-1';
	
	
	
	                            __mc__children = [];
	
	
	
	
	                            var __mc__pathSubI = String(__mc_path + '.' + (__mc__tree.length));
	                            var undefined = 0;
	
	                            (function(scope, __mc__tree, __mc_path) {
	
	                                var __mc__pathStaticI = __mc_path + '.' + __mc__tree.length;
	
	                                var __mc__attr = {
	                                    text: "item name"
	                                };
	                                __mc__tree.push(__mc__util.build('_textNode', __mc__pathStaticI, __mc__attr));
	
	                            })(scope, __mc__children, __mc__pathSubI);
	
	                            __mc__tree.push(
	                                __mc__util.build(
	                                    'label', __mc__pathSubI, __mc__attr,
	                                    __mc__dynamicAttr, __mc__event, __mc__children
	                                )
	                            );
	
	
	                        });
	
	
	
	                    })(scope, __mc__children, __mc__pathSubI);
	
	                    (function(scope, __mc__tree, __mc_path) {
	
	                        var __mc__forArr = [0];
	
	
	                        __mc__forArr.forEach(function(__mc__$vn_, __mc__i) {
	
	                            var __mc__children;
	
	                            var __mc__attr = {},
	                                __mc__dynamicAttr = {},
	                                __mc__event = {};
	
	
	                            __mc__attr['class'] = 'flex-4';
	
	
	
	                            __mc__children = [];
	
	
	
	
	                            var __mc__pathSubI = String(__mc_path + '.' + (__mc__tree.length));
	                            var undefined = 0;
	
	                            (function(scope, __mc__tree, __mc_path) {
	
	                                var __mc__forArr = [0];
	
	
	                                __mc__forArr.forEach(function(__mc__$vn_, __mc__i) {
	
	                                    var __mc__children;
	
	                                    var __mc__attr = {},
	                                        __mc__dynamicAttr = {},
	                                        __mc__event = {};
	
	
	                                    __mc__attr['type'] = 'text';
	
	                                    __mc__attr['class'] = 'form-control';
	
	                                    __mc__event['change'] = {
	                                        'funName': 'syncItemName',
	                                        'args': []
	                                    };
	
	                                    __mc__dynamicAttr['value'] = __mc__util.parseDynamicVal((scope.addItemName), 'scope.addItemName');
	
	
	
	                                    __mc__children = [];
	
	
	
	
	                                    var __mc__pathSubI = String(__mc_path + '.' + (__mc__tree.length));
	                                    var undefined = 0;
	
	                                    __mc__tree.push(
	                                        __mc__util.build(
	                                            'input', __mc__pathSubI, __mc__attr,
	                                            __mc__dynamicAttr, __mc__event, __mc__children
	                                        )
	                                    );
	
	
	                                });
	
	
	
	                            })(scope, __mc__children, __mc__pathSubI);
	
	                            __mc__tree.push(
	                                __mc__util.build(
	                                    'div', __mc__pathSubI, __mc__attr,
	                                    __mc__dynamicAttr, __mc__event, __mc__children
	                                )
	                            );
	
	
	                        });
	
	
	
	                    })(scope, __mc__children, __mc__pathSubI);
	
	                    (function(scope, __mc__tree, __mc_path) {
	
	                        var __mc__forArr = [0];
	
	
	                        __mc__forArr.forEach(function(__mc__$vn_, __mc__i) {
	
	                            var __mc__children;
	
	                            var __mc__attr = {},
	                                __mc__dynamicAttr = {},
	                                __mc__event = {};
	
	
	                            __mc__attr['class'] = 'flex-2';
	
	
	
	                            __mc__children = [];
	
	
	
	
	                            var __mc__pathSubI = String(__mc_path + '.' + (__mc__tree.length));
	                            var undefined = 0;
	
	                            (function(scope, __mc__tree, __mc_path) {
	
	                                var __mc__forArr = [0];
	
	
	                                __mc__forArr.forEach(function(__mc__$vn_, __mc__i) {
	
	                                    var __mc__children;
	
	                                    var __mc__attr = {},
	                                        __mc__dynamicAttr = {},
	                                        __mc__event = {};
	
	
	                                    __mc__attr['class'] = 'btn';
	
	                                    __mc__attr['type'] = 'submit';
	
	
	
	                                    __mc__children = [];
	
	
	
	
	                                    var __mc__pathSubI = String(__mc_path + '.' + (__mc__tree.length));
	                                    var undefined = 0;
	
	                                    (function(scope, __mc__tree, __mc_path) {
	
	                                        var __mc__pathStaticI = __mc_path + '.' + __mc__tree.length;
	
	                                        var __mc__attr = {
	                                            text: "Add"
	                                        };
	                                        __mc__tree.push(__mc__util.build('_textNode', __mc__pathStaticI, __mc__attr));
	
	                                    })(scope, __mc__children, __mc__pathSubI);
	
	                                    __mc__tree.push(
	                                        __mc__util.build(
	                                            'button', __mc__pathSubI, __mc__attr,
	                                            __mc__dynamicAttr, __mc__event, __mc__children
	                                        )
	                                    );
	
	
	                                });
	
	
	
	                            })(scope, __mc__children, __mc__pathSubI);
	
	                            __mc__tree.push(
	                                __mc__util.build(
	                                    'div', __mc__pathSubI, __mc__attr,
	                                    __mc__dynamicAttr, __mc__event, __mc__children
	                                )
	                            );
	
	
	                        });
	
	
	
	                    })(scope, __mc__children, __mc__pathSubI);
	
	                    __mc__tree.push(
	                        __mc__util.build(
	                            'div', __mc__pathSubI, __mc__attr,
	                            __mc__dynamicAttr, __mc__event, __mc__children
	                        )
	                    );
	
	
	                });
	
	
	
	            })(scope, __mc__children, __mc__pathSubI);
	
	            __mc__tree.push(
	                __mc__util.build(
	                    'form', __mc__pathSubI, __mc__attr,
	                    __mc__dynamicAttr, __mc__event, __mc__children
	                )
	            );
	
	
	        });
	
	
	
	    })(scope, __mc__tree, '2');
	
	    return __mc__tree;
	};

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 *
	 * remove
	 * @author vfasky <vfasky@gmail.com>
	 **/
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _mcore = __webpack_require__(2);
	
	var _mcore2 = _interopRequireDefault(_mcore);
	
	var _pagination = __webpack_require__(36);
	
	var _pagination2 = _interopRequireDefault(_pagination);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Pagination = function (_mcore$View) {
	    _inherits(Pagination, _mcore$View);
	
	    function Pagination() {
	        _classCallCheck(this, Pagination);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Pagination).apply(this, arguments));
	    }
	
	    _createClass(Pagination, [{
	        key: 'run',
	        value: function run() {
	            this.data = [];
	            for (var i = 0; i < 500; i++) {
	                this.data.push(i);
	            }
	            this.render(__webpack_require__(39), {
	                list: this.data.slice(0, 10),
	                pageInfo: {
	                    currentPage: 1,
	                    totalPage: 50
	                }
	            });
	        }
	    }, {
	        key: 'chagePage',
	        value: function chagePage(event, el, page) {
	            var sep = 10;
	            this.scope.list = this.data.slice((page - 1) * sep, (page - 1) * sep + sep);
	            this.scope.pageInfo.currentPage = page;
	        }
	    }]);
	
	    return Pagination;
	}(_mcore2.default.View);
	
	exports.default = Pagination;
	
	
	Pagination.viewName = 'pagination';

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 *
	 * 分页组件
	 * @author vfasky <vfasky@gmail.com>
	 **/
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _mcore = __webpack_require__(2);
	
	var _mcore2 = _interopRequireDefault(_mcore);
	
	var _svgicon = __webpack_require__(25);
	
	var _svgicon2 = _interopRequireDefault(_svgicon);
	
	var _pagination = __webpack_require__(37);
	
	var _pagination2 = _interopRequireDefault(_pagination);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Pagination = function (_paginationBase) {
	    _inherits(Pagination, _paginationBase);
	
	    function Pagination() {
	        _classCallCheck(this, Pagination);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Pagination).apply(this, arguments));
	    }
	
	    _createClass(Pagination, [{
	        key: 'init',
	        value: function init() {
	            this.buildPage(this.scope['page-info']);
	            this.render(__webpack_require__(38));
	        }
	    }, {
	        key: 'changePage',
	        value: function changePage() {
	            this.emitEvent('change-page', arguments);
	            return false;
	        }
	    }]);
	
	    return Pagination;
	}((0, _pagination2.default)(_mcore2.default));
	
	exports.default = Pagination;
	
	
	_mcore2.default.Template.components.pagination = Pagination;

/***/ },
/* 37 */
/***/ function(module, exports) {

	/**
	 *
	 * 分页条
	 * @author vfasky <vfasky@gmail.com>
	 **/
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	exports.default = function (mcore) {
	    var Pagination = function (_mcore$Component) {
	        _inherits(Pagination, _mcore$Component);
	
	        function Pagination() {
	            _classCallCheck(this, Pagination);
	
	            return _possibleConstructorReturn(this, Object.getPrototypeOf(Pagination).apply(this, arguments));
	        }
	
	        _createClass(Pagination, [{
	            key: "buildPage",
	            value: function buildPage() {
	                var pageInfo = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	
	                pageInfo = {
	                    currentPage: parseInt(pageInfo.currentPage || 1),
	                    totalPage: parseInt(pageInfo.totalPage || 1),
	                    maxPage: parseInt(pageInfo.maxPage || 10) };
	
	                this.scope.prevPage = pageInfo.currentPage - 1;
	                this.scope.nextPage = pageInfo.currentPage + 1;
	
	                var pages = [];
	
	                // 小于等于最大显示页数
	                if (pageInfo.totalPage <= pageInfo.maxPage) {
	                    for (var v = 1; v <= pageInfo.totalPage; v++) {
	                        pages.push({
	                            cur: v == pageInfo.currentPage,
	                            page: v
	                        });
	                    }
	                } else {
	                    pages.push({
	                        cur: 1 == pageInfo.currentPage,
	                        page: 1
	                    });
	
	                    // 插入过渡
	                    if (pageInfo.currentPage > pageInfo.maxPage / 2 + 1) {
	                        pages.push({
	                            cur: false,
	                            page: false
	                        });
	                    }
	
	                    var step = pageInfo.maxPage / 2 - 1;
	                    var start = pageInfo.currentPage - step;
	                    var end = pageInfo.currentPage + step;
	
	                    if (start < 2) {
	                        start = 2;
	                    }
	                    if (end > pageInfo.totalPage - 1) {
	                        end = pageInfo.totalPage - 1;
	                    }
	                    if (end < pageInfo.maxPage - 1) {
	                        end = pageInfo.maxPage - 1;
	                    }
	                    if (end - start <= step) {
	                        start = start - (step - (pageInfo.totalPage - end));
	                    }
	                    for (var _v = start; _v <= end; _v++) {
	                        pages.push({
	                            cur: _v == pageInfo.currentPage,
	                            page: _v
	                        });
	                    }
	
	                    // 插入过渡
	                    if (pageInfo.currentPage < pageInfo.totalPage - pageInfo.maxPage / 2) {
	                        pages.push({
	                            cur: false,
	                            page: false
	                        });
	                    }
	
	                    pages.push({
	                        cur: pageInfo.totalPage == pageInfo.currentPage,
	                        page: pageInfo.totalPage
	                    });
	                }
	
	                this.scope.pages = pages;
	                this.scope.pageInfo = pageInfo;
	            }
	        }, {
	            key: "watch",
	            value: function watch() {
	                var _this2 = this;
	
	                this.on('change:page-info', function (pageInfo) {
	                    _this2.buildPage(pageInfo);
	                });
	            }
	        }]);
	
	        return Pagination;
	    }(mcore.Component);
	
	    return Pagination;
	};
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/***/ },
/* 38 */
/***/ function(module, exports) {

	module.exports = function(scope, __mc__view, __mc__mcore) {
	    var __mc__util = {
	        clone: __mc__mcore.util.clone,
	        build: function(tagName, key, attr, dynamicAttr, events, children) {
	            return new __mc__mcore.Element(tagName, key, attr, dynamicAttr, children, events, __mc__view);
	        },
	        parseDynamicVal: function(dynamicCode, dynamicCodeStr) {
	            return __mc__mcore.util.parseDynamicVal(dynamicCode, dynamicCodeStr, __mc__view);
	        },
	        callFormatter: function(formatterName) {
	            return __mc__mcore.util.callFormatter(formatterName, __mc__mcore);
	        },
	    };
	    var __mc__tree = [];
	
	    (function(scope, __mc__tree, __mc_path) {
	
	        var __mc__forArr = [0];
	
	
	        __mc__forArr.forEach(function(__mc__$vn_, __mc__i) {
	
	            var __mc__children;
	
	            var __mc__attr = {},
	                __mc__dynamicAttr = {},
	                __mc__event = {};
	
	
	            __mc__attr['class'] = 'pagetion';
	
	            __mc__dynamicAttr['show'] = __mc__util.parseDynamicVal((scope.pageInfo.totalPage > 1), 'scope.pageInfo.totalPage > 1');
	
	
	
	            __mc__children = [];
	
	
	
	
	            var __mc__pathSubI = String(__mc_path + '.' + (__mc__tree.length));
	            var undefined = 0;
	
	            (function(scope, __mc__tree, __mc_path) {
	
	                var __mc__forArr = [0];
	
	
	                __mc__forArr.forEach(function(__mc__$vn_, __mc__i) {
	
	                    var __mc__children;
	
	                    var __mc__attr = {},
	                        __mc__dynamicAttr = {},
	                        __mc__event = {};
	
	
	                    __mc__attr['class'] = 'prev';
	
	                    __mc__event['click'] = {
	                        'funName': 'changePage',
	                        'args': [scope.prevPage]
	                    };
	
	                    __mc__dynamicAttr['show'] = __mc__util.parseDynamicVal((scope.prevPage), 'scope.prevPage');
	
	
	
	                    __mc__children = [];
	
	
	
	
	                    var __mc__pathSubI = String(__mc_path + '.' + (__mc__tree.length));
	                    var undefined = 0;
	
	                    (function(scope, __mc__tree, __mc_path) {
	
	                        var __mc__forArr = [0];
	
	
	                        __mc__forArr.forEach(function(__mc__$vn_, __mc__i) {
	
	                            var __mc__children;
	
	                            var __mc__attr = {},
	                                __mc__dynamicAttr = {},
	                                __mc__event = {};
	
	
	                            __mc__attr['icon'] = 'arrow2';
	
	                            __mc__attr['fill'] = '';
	
	                            __mc__attr['dir'] = 'left';
	
	
	
	                            __mc__children = [];
	
	
	
	
	                            var __mc__pathSubI = String(__mc_path + '.' + (__mc__tree.length));
	                            var undefined = 0;
	
	                            __mc__tree.push(
	                                __mc__util.build(
	                                    'svgicon', __mc__pathSubI, __mc__attr,
	                                    __mc__dynamicAttr, __mc__event, __mc__children
	                                )
	                            );
	
	
	                        });
	
	
	
	                    })(scope, __mc__children, __mc__pathSubI);
	
	                    __mc__tree.push(
	                        __mc__util.build(
	                            'a', __mc__pathSubI, __mc__attr,
	                            __mc__dynamicAttr, __mc__event, __mc__children
	                        )
	                    );
	
	
	                });
	
	
	
	            })(scope, __mc__children, __mc__pathSubI);
	
	            (function(scope, __mc__tree, __mc_path) {
	
	                var __mc__forArr = [0];
	
	
	                __mc__forArr.forEach(function(__mc__$vn_, __mc__i) {
	
	                    var __mc__children;
	
	                    var __mc__attr = {},
	                        __mc__dynamicAttr = {},
	                        __mc__event = {};
	
	
	                    __mc__attr['class'] = 'page';
	
	
	
	                    __mc__children = [];
	
	
	
	
	                    var __mc__pathSubI = String(__mc_path + '.' + (__mc__tree.length));
	                    var undefined = 0;
	
	                    (function(scope, __mc__tree, __mc_path) {
	
	                        /* [for-in] v in scope.pages */
	                        var __mc__forArr = scope.pages;
	                        if (false == Array.isArray(__mc__forArr)) {
	                            __mc__forArr = [];
	                        }
	
	
	                        __mc__forArr.forEach(function(v, __mc__$ix_) {
	
	                            var __mc__children;
	
	                            var __mc__attr = {},
	                                __mc__dynamicAttr = {},
	                                __mc__event = {};
	
	
	                            __mc__attr['class'] = 'item';
	
	
	
	                            __mc__children = [];
	
	
	
	
	                            var __mc__pathSubI = String(__mc_path + '.' + (__mc__tree.length));
	                            var undefined = 0;
	
	                            (function(scope, __mc__tree, __mc_path) {
	
	                                var __mc__forArr = [0];
	
	
	                                __mc__forArr.forEach(function(__mc__$vn_, __mc__i) {
	
	                                    /* [mc-if] v.page */
	                                    if (v.page) {
	
	                                        var __mc__children;
	
	                                        var __mc__attr = {},
	                                            __mc__dynamicAttr = {},
	                                            __mc__event = {};
	
	
	                                        __mc__dynamicAttr['class-active'] = __mc__util.parseDynamicVal((v.cur), 'v.cur');
	
	                                        __mc__event['click'] = {
	                                            'funName': 'changePage',
	                                            'args': [v.page]
	                                        };
	
	
	
	                                        __mc__children = [];
	
	
	
	
	                                        var __mc__pathSubI = String(__mc_path + '.' + (__mc__tree.length));
	                                        var undefined = 0;
	
	                                        (function(scope, __mc__tree, __mc_path) {
	
	                                            var __mc__pathStaticI = __mc_path + '.' + __mc__tree.length;
	                                            var __mc__strVal = {}
	                                            var __mc__tmpAttr;
	                                            try {
	                                                __mc__tmpAttr = v.page;
	                                            } catch (err) {}
	
	                                            __mc__strVal['rp_0'] = (function(x) {
	
	                                                return x === undefined ? '' : x;
	                                            })(__mc__tmpAttr);
	
	                                            /* [formatter] {v.page} */
	                                            var __mc__str = "" + __mc__strVal['rp_0'] + "";
	                                            var __mc__dynamicAttr = {
	                                                text: __mc__str
	                                            };
	                                            __mc__tree.push(__mc__util.build(
	                                                '_textNode', __mc__pathStaticI, {},
	                                                __mc__dynamicAttr, {}, []
	                                            ));
	
	                                        })(scope, __mc__children, __mc__pathSubI);
	
	                                        __mc__tree.push(
	                                            __mc__util.build(
	                                                'a', __mc__pathSubI, __mc__attr,
	                                                __mc__dynamicAttr, __mc__event, __mc__children
	                                            )
	                                        );
	
	                                    }
	                                });
	
	
	
	                            })(scope, __mc__children, __mc__pathSubI);
	
	                            (function(scope, __mc__tree, __mc_path) {
	
	                                var __mc__forArr = [0];
	
	
	                                __mc__forArr.forEach(function(__mc__$vn_, __mc__i) {
	
	                                    /* [mc-if] !v.page */
	                                    if (!v.page) {
	
	                                        var __mc__children;
	
	                                        var __mc__attr = {},
	                                            __mc__dynamicAttr = {},
	                                            __mc__event = {};
	
	
	
	
	                                        __mc__children = [];
	
	
	
	
	                                        var __mc__pathSubI = String(__mc_path + '.' + (__mc__tree.length));
	                                        var undefined = 0;
	
	                                        (function(scope, __mc__tree, __mc_path) {
	
	                                            var __mc__pathStaticI = __mc_path + '.' + __mc__tree.length;
	
	                                            var __mc__attr = {
	                                                text: "..."
	                                            };
	                                            __mc__tree.push(__mc__util.build('_textNode', __mc__pathStaticI, __mc__attr));
	
	                                        })(scope, __mc__children, __mc__pathSubI);
	
	                                        __mc__tree.push(
	                                            __mc__util.build(
	                                                'span', __mc__pathSubI, __mc__attr,
	                                                __mc__dynamicAttr, __mc__event, __mc__children
	                                            )
	                                        );
	
	                                    }
	                                });
	
	
	
	                            })(scope, __mc__children, __mc__pathSubI);
	
	                            __mc__tree.push(
	                                __mc__util.build(
	                                    'li', __mc__pathSubI, __mc__attr,
	                                    __mc__dynamicAttr, __mc__event, __mc__children
	                                )
	                            );
	
	
	                        });
	
	
	                    })(scope, __mc__children, __mc__pathSubI);
	
	                    __mc__tree.push(
	                        __mc__util.build(
	                            'ul', __mc__pathSubI, __mc__attr,
	                            __mc__dynamicAttr, __mc__event, __mc__children
	                        )
	                    );
	
	
	                });
	
	
	
	            })(scope, __mc__children, __mc__pathSubI);
	
	            (function(scope, __mc__tree, __mc_path) {
	
	                var __mc__forArr = [0];
	
	
	                __mc__forArr.forEach(function(__mc__$vn_, __mc__i) {
	
	                    var __mc__children;
	
	                    var __mc__attr = {},
	                        __mc__dynamicAttr = {},
	                        __mc__event = {};
	
	
	                    __mc__attr['class'] = 'next';
	
	                    __mc__event['click'] = {
	                        'funName': 'changePage',
	                        'args': [scope.nextPage]
	                    };
	
	                    __mc__dynamicAttr['show'] = __mc__util.parseDynamicVal((scope.nextPage <= scope.pageInfo.totalPage), 'scope.nextPage <= scope.pageInfo.totalPage');
	
	
	
	                    __mc__children = [];
	
	
	
	
	                    var __mc__pathSubI = String(__mc_path + '.' + (__mc__tree.length));
	                    var undefined = 0;
	
	                    (function(scope, __mc__tree, __mc_path) {
	
	                        var __mc__forArr = [0];
	
	
	                        __mc__forArr.forEach(function(__mc__$vn_, __mc__i) {
	
	                            var __mc__children;
	
	                            var __mc__attr = {},
	                                __mc__dynamicAttr = {},
	                                __mc__event = {};
	
	
	                            __mc__attr['icon'] = 'arrow2';
	
	                            __mc__attr['fill'] = '';
	
	                            __mc__attr['dir'] = 'right';
	
	
	
	                            __mc__children = [];
	
	
	
	
	                            var __mc__pathSubI = String(__mc_path + '.' + (__mc__tree.length));
	                            var undefined = 0;
	
	                            __mc__tree.push(
	                                __mc__util.build(
	                                    'svgicon', __mc__pathSubI, __mc__attr,
	                                    __mc__dynamicAttr, __mc__event, __mc__children
	                                )
	                            );
	
	
	                        });
	
	
	
	                    })(scope, __mc__children, __mc__pathSubI);
	
	                    __mc__tree.push(
	                        __mc__util.build(
	                            'a', __mc__pathSubI, __mc__attr,
	                            __mc__dynamicAttr, __mc__event, __mc__children
	                        )
	                    );
	
	
	                });
	
	
	
	            })(scope, __mc__children, __mc__pathSubI);
	
	            __mc__tree.push(
	                __mc__util.build(
	                    'div', __mc__pathSubI, __mc__attr,
	                    __mc__dynamicAttr, __mc__event, __mc__children
	                )
	            );
	
	
	        });
	
	
	
	    })(scope, __mc__tree, '0');
	
	    return __mc__tree;
	};

/***/ },
/* 39 */
/***/ function(module, exports) {

	module.exports = function(scope, __mc__view, __mc__mcore) {
	    var __mc__util = {
	        clone: __mc__mcore.util.clone,
	        build: function(tagName, key, attr, dynamicAttr, events, children) {
	            return new __mc__mcore.Element(tagName, key, attr, dynamicAttr, children, events, __mc__view);
	        },
	        parseDynamicVal: function(dynamicCode, dynamicCodeStr) {
	            return __mc__mcore.util.parseDynamicVal(dynamicCode, dynamicCodeStr, __mc__view);
	        },
	        callFormatter: function(formatterName) {
	            return __mc__mcore.util.callFormatter(formatterName, __mc__mcore);
	        },
	    };
	    var __mc__tree = [];
	
	    (function(scope, __mc__tree, __mc_path) {
	
	        var __mc__forArr = [0];
	
	
	        __mc__forArr.forEach(function(__mc__$vn_, __mc__i) {
	
	            var __mc__children;
	
	            var __mc__attr = {},
	                __mc__dynamicAttr = {},
	                __mc__event = {};
	
	
	
	
	            __mc__children = [];
	
	
	
	
	            var __mc__pathSubI = String(__mc_path + '.' + (__mc__tree.length));
	            var undefined = 0;
	
	            (function(scope, __mc__tree, __mc_path) {
	
	                /* [for-in] v in scope.list */
	                var __mc__forArr = scope.list;
	                if (false == Array.isArray(__mc__forArr)) {
	                    __mc__forArr = [];
	                }
	
	
	                __mc__forArr.forEach(function(v, __mc__$ix_) {
	
	                    var __mc__children;
	
	                    var __mc__attr = {},
	                        __mc__dynamicAttr = {},
	                        __mc__event = {};
	
	
	
	
	                    __mc__children = [];
	
	
	
	
	                    var __mc__pathSubI = String(__mc_path + '.' + (__mc__tree.length));
	                    var undefined = 0;
	
	                    (function(scope, __mc__tree, __mc_path) {
	
	                        var __mc__pathStaticI = __mc_path + '.' + __mc__tree.length;
	                        var __mc__strVal = {}
	                        var __mc__tmpAttr;
	                        try {
	                            __mc__tmpAttr = v;
	                        } catch (err) {}
	
	                        __mc__strVal['rp_0'] = (function(x) {
	
	                            return x === undefined ? '' : x;
	                        })(__mc__tmpAttr);
	
	                        /* [formatter] # id : {v} */
	                        var __mc__str = " # id : " + __mc__strVal['rp_0'] + "";
	                        var __mc__dynamicAttr = {
	                            text: __mc__str
	                        };
	                        __mc__tree.push(__mc__util.build(
	                            '_textNode', __mc__pathStaticI, {},
	                            __mc__dynamicAttr, {}, []
	                        ));
	
	                    })(scope, __mc__children, __mc__pathSubI);
	
	                    __mc__tree.push(
	                        __mc__util.build(
	                            'li', __mc__pathSubI, __mc__attr,
	                            __mc__dynamicAttr, __mc__event, __mc__children
	                        )
	                    );
	
	
	                });
	
	
	            })(scope, __mc__children, __mc__pathSubI);
	
	            __mc__tree.push(
	                __mc__util.build(
	                    'ul', __mc__pathSubI, __mc__attr,
	                    __mc__dynamicAttr, __mc__event, __mc__children
	                )
	            );
	
	
	        });
	
	
	
	    })(scope, __mc__tree, '0');
	
	    (function(scope, __mc__tree, __mc_path) {
	
	        var __mc__forArr = [0];
	
	
	        __mc__forArr.forEach(function(__mc__$vn_, __mc__i) {
	
	            var __mc__children;
	
	            var __mc__attr = {},
	                __mc__dynamicAttr = {},
	                __mc__event = {};
	
	
	            __mc__dynamicAttr['page-info'] = __mc__util.parseDynamicVal((scope.pageInfo), 'scope.pageInfo');
	
	            __mc__event['change-page'] = {
	                'funName': 'chagePage',
	                'args': []
	            };
	
	
	
	            __mc__children = [];
	
	
	
	
	            var __mc__pathSubI = String(__mc_path + '.' + (__mc__tree.length));
	            var undefined = 0;
	
	            __mc__tree.push(
	                __mc__util.build(
	                    'pagination', __mc__pathSubI, __mc__attr,
	                    __mc__dynamicAttr, __mc__event, __mc__children
	                )
	            );
	
	
	        });
	
	
	
	    })(scope, __mc__tree, '1');
	
	    return __mc__tree;
	};

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 *
	 * home
	 * @author vfasky <vfasky@gmail.com>
	 **/
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _mcore = __webpack_require__(2);
	
	var _mcore2 = _interopRequireDefault(_mcore);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Index = function (_mcore$View) {
	    _inherits(Index, _mcore$View);
	
	    function Index() {
	        _classCallCheck(this, Index);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Index).apply(this, arguments));
	    }
	
	    _createClass(Index, [{
	        key: 'run',
	        value: function run() {
	            this.render(__webpack_require__(41), {
	                menu: [{
	                    title: 'Template',
	                    menu: [{
	                        title: 'Base Render',
	                        subTitle: 'Render Html (this page)',
	                        url: '#/'
	                    }, {
	                        title: 'Table Render',
	                        subTitle: 'Diff and Render Table',
	                        url: '#/table'
	                    }]
	                }, {
	                    title: 'Interaction',
	                    menu: [{
	                        title: 'Remove',
	                        subTitle: 'Remove Item',
	                        url: '#/removeItem'
	                    }, {
	                        title: 'Change',
	                        subTitle: 'Change Item',
	                        url: '#/changeItem'
	                    }, {
	                        title: 'Add',
	                        subTitle: 'Add Item',
	                        url: '#/addItem'
	                    }, {
	                        title: 'Find',
	                        subTitle: 'Find Item',
	                        url: '#/findItem'
	                    }]
	                }, {
	                    title: 'DIY Tag',
	                    menu: [{
	                        title: 'Pagination',
	                        subTitle: 'Pagination Tag',
	                        url: '#/pagination'
	                    }]
	                }]
	            });
	        }
	    }]);
	
	    return Index;
	}(_mcore2.default.View);
	
	exports.default = Index;
	
	
	Index.viewName = 'index';

/***/ },
/* 41 */
/***/ function(module, exports) {

	module.exports = function(scope, __mc__view, __mc__mcore) {
	    var __mc__util = {
	        clone: __mc__mcore.util.clone,
	        build: function(tagName, key, attr, dynamicAttr, events, children) {
	            return new __mc__mcore.Element(tagName, key, attr, dynamicAttr, children, events, __mc__view);
	        },
	        parseDynamicVal: function(dynamicCode, dynamicCodeStr) {
	            return __mc__mcore.util.parseDynamicVal(dynamicCode, dynamicCodeStr, __mc__view);
	        },
	        callFormatter: function(formatterName) {
	            return __mc__mcore.util.callFormatter(formatterName, __mc__mcore);
	        },
	    };
	    var __mc__tree = [];
	
	    (function(scope, __mc__tree, __mc_path) {
	
	        /* [for-in] v in scope.menu */
	        var __mc__forArr = scope.menu;
	        if (false == Array.isArray(__mc__forArr)) {
	            __mc__forArr = [];
	        }
	
	
	        __mc__forArr.forEach(function(v, __mc__$ix_) {
	
	            var __mc__children;
	
	            var __mc__attr = {},
	                __mc__dynamicAttr = {},
	                __mc__event = {};
	
	
	            __mc__attr['class'] = 'wrap';
	
	
	
	            __mc__children = [];
	
	
	
	
	            var __mc__pathSubI = String(__mc_path + '.' + (__mc__tree.length));
	            var undefined = 0;
	
	            (function(scope, __mc__tree, __mc_path) {
	
	                var __mc__forArr = [0];
	
	
	                __mc__forArr.forEach(function(__mc__$vn_, __mc__i) {
	
	                    var __mc__children;
	
	                    var __mc__attr = {},
	                        __mc__dynamicAttr = {},
	                        __mc__event = {};
	
	
	
	
	                    __mc__children = [];
	
	
	
	
	                    var __mc__pathSubI = String(__mc_path + '.' + (__mc__tree.length));
	                    var undefined = 0;
	
	                    (function(scope, __mc__tree, __mc_path) {
	
	                        var __mc__pathStaticI = __mc_path + '.' + __mc__tree.length;
	                        var __mc__strVal = {}
	                        var __mc__tmpAttr;
	                        try {
	                            __mc__tmpAttr = v.title;
	                        } catch (err) {}
	
	                        __mc__strVal['rp_0'] = (function(x) {
	
	                            return x === undefined ? '' : x;
	                        })(__mc__tmpAttr);
	
	                        /* [formatter] {v.title} */
	                        var __mc__str = "" + __mc__strVal['rp_0'] + "";
	                        var __mc__dynamicAttr = {
	                            text: __mc__str
	                        };
	                        __mc__tree.push(__mc__util.build(
	                            '_textNode', __mc__pathStaticI, {},
	                            __mc__dynamicAttr, {}, []
	                        ));
	
	                    })(scope, __mc__children, __mc__pathSubI);
	
	                    __mc__tree.push(
	                        __mc__util.build(
	                            'h1', __mc__pathSubI, __mc__attr,
	                            __mc__dynamicAttr, __mc__event, __mc__children
	                        )
	                    );
	
	
	                });
	
	
	
	            })(scope, __mc__children, __mc__pathSubI);
	
	            (function(scope, __mc__tree, __mc_path) {
	
	                var __mc__forArr = [0];
	
	
	                __mc__forArr.forEach(function(__mc__$vn_, __mc__i) {
	
	                    var __mc__children;
	
	                    var __mc__attr = {},
	                        __mc__dynamicAttr = {},
	                        __mc__event = {};
	
	
	                    __mc__attr['class'] = 'list';
	
	
	
	                    __mc__children = [];
	
	
	
	
	                    var __mc__pathSubI = String(__mc_path + '.' + (__mc__tree.length));
	                    var undefined = 0;
	
	                    (function(scope, __mc__tree, __mc_path) {
	
	                        /* [for-in] s in v.menu */
	                        var __mc__forArr = v.menu;
	                        if (false == Array.isArray(__mc__forArr)) {
	                            __mc__forArr = [];
	                        }
	
	
	                        __mc__forArr.forEach(function(s, __mc__$ix_) {
	
	                            var __mc__children;
	
	                            var __mc__attr = {},
	                                __mc__dynamicAttr = {},
	                                __mc__event = {};
	
	
	
	
	                            __mc__children = [];
	
	
	
	
	                            var __mc__pathSubI = String(__mc_path + '.' + (__mc__tree.length));
	                            var undefined = 0;
	
	                            (function(scope, __mc__tree, __mc_path) {
	
	                                var __mc__forArr = [0];
	
	
	                                __mc__forArr.forEach(function(__mc__$vn_, __mc__i) {
	
	                                    var __mc__children;
	
	                                    var __mc__attr = {},
	                                        __mc__dynamicAttr = {},
	                                        __mc__event = {};
	
	
	
	
	                                    __mc__children = [];
	
	
	
	
	                                    var __mc__pathSubI = String(__mc_path + '.' + (__mc__tree.length));
	                                    var undefined = 0;
	
	                                    (function(scope, __mc__tree, __mc_path) {
	
	                                        var __mc__forArr = [0];
	
	
	                                        __mc__forArr.forEach(function(__mc__$vn_, __mc__i) {
	
	                                            var __mc__children;
	
	                                            var __mc__attr = {},
	                                                __mc__dynamicAttr = {},
	                                                __mc__event = {};
	
	
	                                            __mc__dynamicAttr['href'] = __mc__util.parseDynamicVal((s.url), 's.url');
	
	
	
	                                            __mc__children = [];
	
	
	
	
	                                            var __mc__pathSubI = String(__mc_path + '.' + (__mc__tree.length));
	                                            var undefined = 0;
	
	                                            (function(scope, __mc__tree, __mc_path) {
	
	                                                var __mc__pathStaticI = __mc_path + '.' + __mc__tree.length;
	                                                var __mc__strVal = {}
	                                                var __mc__tmpAttr;
	                                                try {
	                                                    __mc__tmpAttr = s.title;
	                                                } catch (err) {}
	
	                                                __mc__strVal['rp_0'] = (function(x) {
	
	                                                    return x === undefined ? '' : x;
	                                                })(__mc__tmpAttr);
	
	                                                /* [formatter] {s.title} */
	                                                var __mc__str = "" + __mc__strVal['rp_0'] + "";
	                                                var __mc__dynamicAttr = {
	                                                    text: __mc__str
	                                                };
	                                                __mc__tree.push(__mc__util.build(
	                                                    '_textNode', __mc__pathStaticI, {},
	                                                    __mc__dynamicAttr, {}, []
	                                                ));
	
	                                            })(scope, __mc__children, __mc__pathSubI);
	
	                                            __mc__tree.push(
	                                                __mc__util.build(
	                                                    'a', __mc__pathSubI, __mc__attr,
	                                                    __mc__dynamicAttr, __mc__event, __mc__children
	                                                )
	                                            );
	
	
	                                        });
	
	
	
	                                    })(scope, __mc__children, __mc__pathSubI);
	
	                                    __mc__tree.push(
	                                        __mc__util.build(
	                                            'h2', __mc__pathSubI, __mc__attr,
	                                            __mc__dynamicAttr, __mc__event, __mc__children
	                                        )
	                                    );
	
	
	                                });
	
	
	
	                            })(scope, __mc__children, __mc__pathSubI);
	
	                            (function(scope, __mc__tree, __mc_path) {
	
	                                var __mc__forArr = [0];
	
	
	                                __mc__forArr.forEach(function(__mc__$vn_, __mc__i) {
	
	                                    var __mc__children;
	
	                                    var __mc__attr = {},
	                                        __mc__dynamicAttr = {},
	                                        __mc__event = {};
	
	
	
	
	                                    __mc__children = [];
	
	
	
	
	                                    var __mc__pathSubI = String(__mc_path + '.' + (__mc__tree.length));
	                                    var undefined = 0;
	
	                                    (function(scope, __mc__tree, __mc_path) {
	
	                                        var __mc__pathStaticI = __mc_path + '.' + __mc__tree.length;
	                                        var __mc__strVal = {}
	                                        var __mc__tmpAttr;
	                                        try {
	                                            __mc__tmpAttr = s.subTitle;
	                                        } catch (err) {}
	
	                                        __mc__strVal['rp_0'] = (function(x) {
	
	                                            return x === undefined ? '' : x;
	                                        })(__mc__tmpAttr);
	
	                                        /* [formatter] {s.subTitle} */
	                                        var __mc__str = "" + __mc__strVal['rp_0'] + "";
	                                        var __mc__dynamicAttr = {
	                                            text: __mc__str
	                                        };
	                                        __mc__tree.push(__mc__util.build(
	                                            '_textNode', __mc__pathStaticI, {},
	                                            __mc__dynamicAttr, {}, []
	                                        ));
	
	                                    })(scope, __mc__children, __mc__pathSubI);
	
	                                    __mc__tree.push(
	                                        __mc__util.build(
	                                            'p', __mc__pathSubI, __mc__attr,
	                                            __mc__dynamicAttr, __mc__event, __mc__children
	                                        )
	                                    );
	
	
	                                });
	
	
	
	                            })(scope, __mc__children, __mc__pathSubI);
	
	                            __mc__tree.push(
	                                __mc__util.build(
	                                    'li', __mc__pathSubI, __mc__attr,
	                                    __mc__dynamicAttr, __mc__event, __mc__children
	                                )
	                            );
	
	
	                        });
	
	
	                    })(scope, __mc__children, __mc__pathSubI);
	
	                    __mc__tree.push(
	                        __mc__util.build(
	                            'ul', __mc__pathSubI, __mc__attr,
	                            __mc__dynamicAttr, __mc__event, __mc__children
	                        )
	                    );
	
	
	                });
	
	
	
	            })(scope, __mc__children, __mc__pathSubI);
	
	            __mc__tree.push(
	                __mc__util.build(
	                    'div', __mc__pathSubI, __mc__attr,
	                    __mc__dynamicAttr, __mc__event, __mc__children
	                )
	            );
	
	
	        });
	
	
	    })(scope, __mc__tree, '0');
	
	    return __mc__tree;
	};

/***/ }
/******/ ])
});
;
//# sourceMappingURL=app.js.map