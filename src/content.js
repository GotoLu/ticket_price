import React, { Component } from 'react';
import { Get } from 'react-axios';

class Content extends Component {
	componentDidMount() {
		window.addEventListener('scroll', e => {
			const { onChange } = this.props;
			onChange(window.scrollY);
		});
	}

	render() {
		return (
	        <Get url="http://localhost:3001">
	          {(error, response, isLoading, onReload) => {
	            if(error) {
	              return (<div>Something bad happened: {error.message} <button onClick={() => onReload({ params: { reload: true } })}>Retry</button></div>)
	            }
	            else if(isLoading) {
	              return (<div>Loading...</div>)
	            }
	            else if(response !== null) {
	              return (
	                <div className="content-wrap">
	                  <ul>
	                    {response.data.data.flights.map((d, i) => (
	                      <li key={i.toString()}>
	                        <div className="list-item">
	                          <div className="time-pos">
	                            <div className="start">
	                              <div className="time">{d.binfo.depTime}</div>
	                              <div className="pos">{d.binfo.depAirport + d.binfo.depTerminal}</div>
	                            </div>
	                            <div className="exchange-right-wrap">
	                              <div className="exchange-right-longer"></div>
	                            </div>
	                            <div className="end">
	                              <div className="time">{d.binfo.arrTime}</div>
	                              <div className="pos">{d.binfo.arrAirport + d.binfo.arrTerminal}</div>
	                            </div>
	                          </div>
	                          <div className="flight">
	                            <span>{d.binfo.shortName + d.binfo.airCode}</span>
	                            <span>{d.binfo.planeFullType}</span>
	                            {d.binfo.codeShare ? <span className="isShare">共享</span> : ''}
	                          </div>
	                        </div>
	                        <div className="price">
	                          <div className="min-price"><i className="iconfont rmb" />{d.binfo.minSellPrice}</div>
	                          <p className="discount">{d.cabinDesc + d.discountStr}</p>
	                        </div>
	                      </li>
	                    ))}
	                  </ul>
	                </div>
	              )
	            }
	            return (<div>Default message before request is made.</div>)
	          }}
	        </Get>
		)
	}
}

export default Content;
