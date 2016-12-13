'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//let React = require('react');
//let ReactDom = require('react-dom');
//组件生命周期测试
var ListItem = function (_React$Component) {
	_inherits(ListItem, _React$Component);

	function ListItem() {
		_classCallCheck(this, ListItem);

		var _this = _possibleConstructorReturn(this, (ListItem.__proto__ || Object.getPrototypeOf(ListItem)).apply(this, arguments));

		_this.ti = 0;
		return _this;
	}

	_createClass(ListItem, [{
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			console.log('ListItem componentWillUnmount');
			clearInterval(this._t);
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			var _this2 = this;

			console.log('componentDidMount', arguments);
			this._t = setInterval(function () {
				_this2.setState({});_this2.ti++;
			}, 1000);
		}
	}, {
		key: 'shouldComponentUpdate',
		value: function shouldComponentUpdate() {
			return true;
		}
	}, {
		key: 'render',
		value: function render() {
			var _this3 = this;

			console.log('??');
			return React.createElement(
				'li',
				{ 'data-ti': this.ti, onClick: function onClick(e) {
						return _this3.props.onClick(e);
					} },
				this.props.children
			);
		}
	}]);

	return ListItem;
}(React.Component);

var List = function (_React$Component2) {
	_inherits(List, _React$Component2);

	function List() {
		_classCallCheck(this, List);

		return _possibleConstructorReturn(this, (List.__proto__ || Object.getPrototypeOf(List)).apply(this, arguments));
	}

	_createClass(List, [{
		key: 'render',
		value: function render() {
			return React.createElement(
				'ul',
				null,
				this.props.children
			);
		}
	}]);

	return List;
}(React.Component);

var App = function (_React$Component3) {
	_inherits(App, _React$Component3);

	function App() {
		_classCallCheck(this, App);

		var _this5 = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));

		_this5.items = [];
		_this5.idx = 1;
		_this5.state = {
			value: 'nobo'
		};
		return _this5;
	}

	_createClass(App, [{
		key: 'componentWillMount',
		value: function componentWillMount() {
			//console.log('componentWillMount', arguments);
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			//console.log('componentDidMount', arguments);
		}
	}, {
		key: 'componentWillUpdate',
		value: function componentWillUpdate() {
			//console.log('componentWillUpdate', arguments);
		}
	}, {
		key: 'componentDidUpdate',
		value: function componentDidUpdate() {
			//console.log('componentDidUpdate', arguments);
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			//console.log('componentWillUnmount', arguments);
		}
	}, {
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps() {
			//console.log('componentWillReceiveProps', arguments);
		}
	}, {
		key: 'shouldComponentUpdate',
		value: function shouldComponentUpdate() {
			//console.log('shouldComponentUpdate', this.items.length);
			//if( this.items.length > 5 ) return false;
			return true;
		}
	}, {
		key: 'add',
		value: function add() {
			this.items.push(this.idx++);
			this.setState({});
		}
	}, {
		key: 'edit',
		value: function edit() {
			this.items.pop();
			this.setState({});
		}
	}, {
		key: 'handlerChange',
		value: function handlerChange(e) {
			this.setState({ value: e.target.value });
		}
	}, {
		key: 'onItemClick',
		value: function onItemClick(e) {
			this.items = ['a', 'b', 'c'];
			this.setState({});
			console.log('s');
		}
	}, {
		key: 'render',
		value: function render() {
			var _this6 = this;

			var self = this;
			return React.createElement(
				'div',
				{ ref: 'app' },
				React.createElement('input', { value: this.state.value, onChange: this.handlerChange.bind(this) }),
				React.createElement(
					'h2',
					{ 'data-tm': this.state.value },
					'\u7EC4\u4EF6\u751F\u547D\u5468\u671F\u6D4B\u8BD5',
					this.state.value
				),
				'//react\u68C0\u6D4B\u5230child\u4F7F\u7528\u6570\u7EC4\u65F6\u4F1A\u63D0\u793A\u7ED1\u5B9Akey',
				[React.createElement(
					'button',
					{ onClick: this.add.bind(this) },
					'\u65B0\u589E'
				), React.createElement(
					'button',
					{ onClick: function onClick() {
							_this6.edit();
						} },
					'\u5220\u9664'
				)],
				this.items.length > 5 ? React.createElement(
					'div',
					{ style: { color: 'red' } },
					'\u957F\u5EA6\u4E0D\u80FD\u8D85\u8FC75'
				) : "",
				React.createElement(
					List,
					null,
					this.items.map(function (item, i) {
						return React.createElement(
							ListItem,
							{ onClick: function onClick(e) {
									return self.onItemClick(e);
								}, key: i },
							item
						);
					})
				)
			);
		}
	}]);

	return App;
}(React.Component);

var render = ReactDOM.render(React.createElement(App, null), container);