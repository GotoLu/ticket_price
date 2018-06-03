import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './header';
import SubHeader from './sub-header';
import Content from './content';
import Footer from './footer';
import registerServiceWorker from './registerServiceWorker';
import './index.less';
import './styles/iconfont.less';
import './styles/common.less';

class Index extends Component {
	constructor() {
		super();
		this.state = {
			value: 0,
			subHeaderVal: 1,
			footerVal: 1
		}
	}

	handleSubHeader = newVal => {
		this.setState({
			subHeaderVal: newVal
		})
	}

	handleContent = newVal => {
		this.setState({
			value: newVal
		})
	}

	handleFooter = newVal => {
		this.setState({
			footerVal: newVal
		})
	}

	render() {
		return (
			<div>
				<Header />
				<SubHeader value={this.state.subHeaderVal} onChange={this.handleSubHeader} isShow={this.state.value === 0 ? true : false } />
				<Content data={this.data} value={this.state.value} onChange={this.handleContent} />
				<Footer value={this.state.footerVal} onChange={this.handleFooter} isShow={this.state.value === 0 ? true : false } />
			</div>
		)
	}
}
ReactDOM.render(<Index />, document.getElementById('app'));
registerServiceWorker();
