import React, { Component } from 'react';

class Header extends Component {
	render() {
		return (
			<div className="header-wrap">
				<i className="icon iconfont arrow-left left" />
				<div className="title">
					北京<i className="icon iconfont exchange-right" />上海
				</div>
				<i className="icon iconfont search right" />
			</div>
		)
	}
}

export default Header;
