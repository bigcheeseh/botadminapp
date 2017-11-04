import React, { Component } from 'react';
import { Input } from 'antd';

const Search = Input.Search;

export default ({ searchUser }) => {
    return (
      <Search
        placeholder="input search name"
        style={{ width: 200 }}
        onSearch={searchUser}
        style={{margin: '0 15% 5% 15%', width: '50%'}}
      />
    )
}
