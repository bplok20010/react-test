'use strict';

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//let React = require('react');
//let ReactDom = require('react-dom');

/**
* 如果VDom.type 要么是一个node.tag 要么就是组件类
*/
function getRenderTree(VDom) {

	function parseNode(VDom) {
		var _vnode = {
			tag: null,
			attrs: null,
			children: null
		};

		if ((typeof VDom === 'undefined' ? 'undefined' : _typeof(VDom)) != 'object') return VDom;

		if (typeof VDom.type == 'function') {
			return parseNode(new VDom.type(VDom.props).render());
		}

		_vnode.tag = VDom.type;

		if (VDom.props) {

			_vnode.attrs = {};

			_vnode.children = [];

			var keys = Object.keys(VDom.props);

			keys.forEach(function (name) {
				if (name == 'children') {
					_vnode.children = VDom.props[name];
				} else {
					_vnode.attrs[name] = VDom.props[name];
				}
			});

			_vnode.children = React.Children.map(_vnode.children, function (node) {
				return parseNode(node);
			});
		}

		return _vnode;
	}

	return parseNode(VDom);
}

var Title = React.createClass({
	displayName: 'Title',
	render: function render() {
		return React.createElement('h1', { onClick: this.props.onClick, dangerouslySetInnerHTML: { __html: this.props.title } });
	}
});

var NPanel = function (_React$Component) {
	_inherits(NPanel, _React$Component);

	function NPanel(props) {
		_classCallCheck(this, NPanel);

		var _this = _possibleConstructorReturn(this, (NPanel.__proto__ || Object.getPrototypeOf(NPanel)).call(this, props));

		_this.name = 'nobo';
		return _this;
	}

	_createClass(NPanel, [{
		key: 'render',
		value: function render() {
			return React.createElement(
				'div',
				null,
				this.name
			);
		}
	}]);

	return NPanel;
}(React.Component);

var App = function (_NPanel) {
	_inherits(App, _NPanel);

	function App(props) {
		_classCallCheck(this, App);

		var _this2 = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

		_this2.name = 'nobo1';
		_this2.state = {};
		_this2.aid = 0;
		return _this2;
	}

	_createClass(App, [{
		key: 'render',
		value: function render() {
			return React.createElement(
				'div',
				null,
				React.createElement(Title, { title: '\u4F60\u662F\uFF1F' }),
				_get(App.prototype.__proto__ || Object.getPrototypeOf(App.prototype), 'render', this).call(this),
				this.aid,
				this.props.children
			);
		}
	}]);

	return App;
}(NPanel);

function malert() {
	alert('谢谢');
}

window.Render = ReactDOM.render(React.createElement(
	App,
	{ name: 'nobo.zhou' },
	React.createElement(Title, { title: '<a href=\'#\'>\u70B9\u51FB\u6211\uFF01</a>', onClick: malert })
), document.body);