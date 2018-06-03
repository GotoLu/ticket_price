import React, { Component } from 'react';
import axios from 'axios';
import { Get } from 'react-axios';

class AxiosTest extends Component {
  componentDidMount() {
    axios.post('https://m.flight.qunar.com/touch/api/domestic/flightlist?depCity=%E5%8C%97%E4%BA%AC&arrCity=%E4%B8%8A%E6%B5%B7&goDate=2018-06-05&from=touch_index_search&_firstScreen=1&backDate=').then(function(res){
      console.log(res);
    })
    .catch(function(error){
      console.log(error);
    });
  }
  render() {
    return (
      <div>
        AxiosTest
      </div>
    )
  }
}

export default AxiosTest;
