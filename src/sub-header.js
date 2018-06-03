import React, { Component } from 'react';

class SubHeader extends Component {
	handleItem = i => {
		const { onChange } = this.props;

		onChange(i);
	}

	render() {
		const { value, isShow } = this.props;
		return (
			<div style={{ top: isShow ? 44 : -16 }} className="sub-header">
				<div>
					<div onClick={() => this.handleItem(0)} className = {value === 0 ? "inner-item active" : "inner-item"}>
						<p>06-04</p>
						<p>今天</p>
						<p>￥420</p>
					</div>
				</div>
				<div>
					<div onClick={() => this.handleItem(1)} className = {value === 1 ? "inner-item active" : "inner-item"}>
						<p>06-05</p>
						<p>周二</p>
						<p>￥420</p>
					</div>
				</div>
				<div>
					<div onClick={() => this.handleItem(2)} className = {value === 2 ? "inner-item active" : "inner-item"}>
						<p>06-06</p>
						<p>周三</p>
						<p>￥420</p>

					</div>
				</div>
				<div>
					<div onClick={() => this.handleItem(3)} className = {value === 3 ? "inner-item active" : "inner-item"}>
						<p>06-07</p>
						<p>周四</p>
						<p>￥420</p>
					</div>
				</div>
				<div>
					<div onClick={() => this.handleItem(4)} className = {value === 4 ? "inner-item active" : "inner-item"}>
						<p>06-08</p>
						<p>周五</p>
						<p>￥420</p>
					</div>
				</div>
				<div>
					<i className="iconfont calendar" />

					<p className="more">更多日期</p>
				</div>
			</div>
		)
	}
}

export default SubHeader;
