//let React = require('react');
//let ReactDom = require('react-dom');
//组件生命周期测试
class ListItem extends React.Component {
	constructor(){
		super(...arguments);
	}
	
	componentWillUnmount(){
		console.log('ListItem componentWillUnmount')
	}
	
	render(){
		return (
			<li>
				{this.props.children}
			</li>
		);
	}
}

class List extends React.Component {
	constructor(){
		super(...arguments);
	}
	render(){
		return (
			<ul>
				{this.props.children}
			</ul>
		);
	}
}

class App extends React.Component {
	constructor(){
		super(...arguments);
		this.items = [];
		this.idx = 1;
		this.state = {
			value : 'nobo'
		};
	}
	
	componentWillMount(){
		console.log('componentWillMount', arguments);
	}
	
	componentDidMount(){
		console.log('componentDidMount', arguments);
	}
	
	componentWillUpdate(){
		console.log('componentWillUpdate', arguments);
	}
	
	componentDidUpdate(){
		console.log('componentDidUpdate', arguments);
	}
	
	componentWillUnmount(){
		console.log('componentWillUnmount', arguments);
	}
	
	componentWillReceiveProps(){
		console.log('componentWillReceiveProps', arguments);
	}
	
	shouldComponentUpdate(){
		//console.log('shouldComponentUpdate', this.items.length);
		//if( this.items.length > 5 ) return false;
		return true;
	}
	
	add(){
		this.items.push(this.idx++);
		this.setState({});
	}
	
	edit(){
		this.items.pop();
		this.setState({});
	}
	
	handlerChange(e){
		this.setState({value: e.target.value});
	}
	
	render(){
		return (
			<div ref="app">
				<input value={this.state.value} onChange={ this.handlerChange.bind(this) }/>
				<h2>组件生命周期测试{this.state.value}</h2>
				<button onClick={this.add.bind(this)}>新增</button>
				<button onClick={()=> {this.edit()} }>删除</button>
				{ this.items.length > 5 ? <div style={{color:'red'}}>长度不能超过5</div> :　"" }
				<List>
					{
					this.items.map(function(item){
						return <ListItem key={item}>{item}</ListItem>
					})
					}
				</List>
			</div>
		);
	}
}


var render = ReactDOM.render(<App />, document.body);
