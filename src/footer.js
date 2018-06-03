import React, { Component } from 'react';

class Footer extends Component {
	handleFooter = i => {
		const { onChange } = this.props;
		onChange(i);
	}

	render() {
		const { value, isShow } = this.props;
		return (
			<div style={{ bottom: isShow ? 0 : -48 }} className="footer-wrap">
				<div onClick={() => this.handleFooter(0)} className = {value === 0 ? 'active' : ''}>
					<i className="iconfont filter" />
					<p>筛选</p>
				</div>
				<div onClick={() => this.handleFooter(1)} className = {value === 1 ? 'active' : ''}>
					<i className="iconfont transform" />
					<p>推荐排序</p>
				</div>
				<div onClick={() => this.handleFooter(2)} className = {value === 2 ? 'active' : ''}>
					<i className="iconfont time" />
					<p>时间</p>
				</div>
				<div onClick={() => this.handleFooter(3)} className = {value === 3 ? 'active' : ''}>
					<i className="iconfont price-circle" />
					<p>价格</p>
				</div>
			</div>
		)
	}
}

export default Footer;
