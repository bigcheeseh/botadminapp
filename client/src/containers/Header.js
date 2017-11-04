import React, { Component } from 'react';
import { Layout, Menu } from 'antd';

const { Header } = Layout

export default () => {
    return(
      <Header className="header">
        <a href="/#">
          <div className="logo" >
              logo
          </div>
        </a>
          <Menu
            theme="dark"
            mode="horizontal"
            style={{ lineHeight: '64px' }}
          >
        </Menu>
    </Header>
    )
}
