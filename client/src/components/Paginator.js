import React, { Component } from 'react';
import {  Pagination } from 'antd';


export default ({ current, onChange }) => {
    return (
      <Pagination current={current} total={100} onChange={onChange} style={{padding: '5px 5px 5px 0'}}/>
    )
}
