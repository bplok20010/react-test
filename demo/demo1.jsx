//let React = require('react');
//let ReactDom = require('react-dom');

/**
* 如果VDom.type 要么是一个node.tag 要么就是组件类
*/
function getRenderTree(VDom) {

	function parseNode(VDom){
		var _vnode = {
			tag : null,
			attrs : null,
			children : null	
		};
		
		if( typeof VDom != 'object' ) return VDom;
		
		if (typeof VDom.type == 'function') {
			return parseNode(new VDom.type(VDom.props).render());
		}
	
		_vnode.tag = VDom.type;
		
		if( VDom.props ) {
		
			_vnode.attrs = {};
			
			_vnode.children = [];
		
			var keys = Object.keys( VDom.props );
			
			keys.forEach(function(name){
				if( name == 'children' ) {
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


let Title = React.createClass({
	render(){
		return <h1 onClick={this.props.onClick} dangerouslySetInnerHTML={{__html: this.props.title}}></h1>
	}
});

class NPanel extends React.Component {
	constructor(props){
		super(props);
		this.name = 'nobo';
	}
	render(){
		return (
			<div>
				{this.name}
			</div>
		);
	}
}
class App extends NPanel {
	constructor(props){
		super(props);
		this.name = 'nobo1';
		this.state = {};
		this.aid = 0;
	}
	render(){
		return (
			<div>
				<Title title="你是？" />
				{super.render()}{this.aid}
				{this.props.children}
			</div>
		);
	}
}

function malert(){
	alert('谢谢')
}

window.Render = ReactDOM.render(<App name="nobo.zhou"><Title title="<a href='#'>点击我！</a>" onClick={malert} /></App>, document.body);


