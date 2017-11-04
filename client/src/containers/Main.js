import React, { Component } from 'react';
import { Button, Row, Col, Layout, Spin } from 'antd';
import { connect } from 'react-redux';
import { fetchUser, fetchUsers } from '../actions'

import Paginator from '../components/Paginator'
import SearchUser from '../components/SearchUser'
import UsersList from '../components/UsersList'

import App from '../App.css';


const { Content, Sider } = Layout;

class Main extends Component {
      state = {
        current: 1,
      }
      handleCurrentPage = ( page ) => {

        this.setState({current: page})


        this.props.fetchUsers({ page })
      }
      searchUser = (value) => {
        console.log(value)
        this.props.fetchUser({ name: value })
      }
      render(){

         return (
           <Content style={{padding: 36 }}>
              <Row>
               <Col md={{span: 16, offset: 4}} sm={{span:24}} xs={{span:24}}>
                <SearchUser searchUser={this.searchUser} />

                <Paginator current={this.state.current} onChange={this.handleCurrentPage}/>
                  <UsersList/>
                <Paginator current={this.state.current} onChange={this.handleCurrentPage}/>
               </Col>
              </Row>
          </Content>
         )
      }
}


export default connect(null, { fetchUsers, fetchUser })(Main)
