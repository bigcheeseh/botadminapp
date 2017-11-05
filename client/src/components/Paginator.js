import React, { Component } from 'react';
import {  Pagination } from 'antd';
import axios from 'axios';

class Paginator extends Component{
  state = {
    totalPageAmount: 0
  }
  componentWillMount(){
    axios.get('/api/users/amount')
    // рассчёт количества страниц в пагинаторе по общему количеству юзеров и количеству юзеров на одной странице
      .then((response)=>this.setState({ totalPageAmount: (response.data.length / response.data.USERS_AMOUNT_ON_PAGE) * 10 }))
  }
  render(){
    const { current, onChange } = this.props
      return (
        <Pagination current={current} total={this.state.totalPageAmount} onChange={onChange} style={{padding: '5px 5px 5px 0'}}/>
      )
    }
  }

export default Paginator
