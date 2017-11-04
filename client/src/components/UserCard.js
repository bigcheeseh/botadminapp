import React, { Component } from 'react';
import { Card } from 'antd';

export default ({ user }) => {
    return (
      <Card bodyStyle={{ padding: 0 }} >
        <div className="custom-image">
           <img alt="example" width="100%" src={user.avatar_url} />
        </div>
        <div className="custom-card">
           <h3>{user.login}</h3>
           <a href={user.url} target="_blank">{user.url}</a>
         </div>
      </Card>
    )
}
