import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Layout, Col, Row } from 'antd';
import { findUserById, fetchUsers } from '../actions';
import WrappedControlForm from '../components/ControlForm';

import UserCard from '../components/UserCard'

const { Content } = Layout

class UserPage extends Component{

  componentWillMount(){
    this.props.findUserById(this.props.match.params)
  }

  render(){
    return(
      <Content style={{padding: "5%"}}>
        <Row>
          <Col md={{span: 8, offset: 2}} sm={{span:14, offset: 5}} xs={{span:18, offset:3}}>
            <UserCard user={this.props.userById}/>
          </Col>
          <Col md={{span: 8, offset: 2}} sm={{span:14, offset: 5}} xs={{span:18, offset:3}}>
            <WrappedControlForm user={this.props.userById}/>
          </Col>
        </Row>
      </Content>
    )
  }

}

const mapStateToProps = ({ userById }) =>{
    return { userById }
}

export default connect(mapStateToProps, { findUserById })(UserPage)
