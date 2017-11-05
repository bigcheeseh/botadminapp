import React, { Component } from 'react';
import { Table, Button, Card, Spin, Alert } from 'antd';
import App from '../App.css';
import { connect } from 'react-redux';
import { fetchUsers, fetchUser } from '../actions';
import { Link } from 'react-router-dom';


class UsersList extends Component {
  state = {
    current: 1,
  }
  componentWillMount(){
    this.props.fetchUsers(this.state.current);
  }

  createSpin(){
    return( <Spin tip="Loading...">
              <Alert
                  message="Loading..."
                  description="uploading users"
                  type="info"
                />
              </Spin> )
  }

  handleUsers(users){


    if(!users.loaded){
      return users.map((user, index) => {
          return (
                  <Link key={index} to={`/${user._id}`}>
                    <Card style={{ width: '100%', border: users.length < 2 ? '5px solid #108ee9' : null }}
                          >
                      <div>
                          <img src={user.avatar_url} style={{ width: '20%' }}/>
                          <p className='card user_login'>{user.login}</p>
                      </div>
                    </Card>
                  </Link>
                )
      })
    }else{

      return (
       <div className="loading_spiner__container">
          <div className="loading_spiner top" style={{ top: 50 }}>
            {this.createSpin()}
         </div>
        <div className="loading_spiner bottom" style={{ bottom: 50}}>
            {this.createSpin()}
        </div>
       </div>
      )
    }
  }

  handleCurrentPage = ( page ) => {
    this.setState({current: page});
    //отправляем номер страницы для сортировки пользователей
    this.props.fetchUsers({ page });
  }

  render(){
      return(
          <div>
              <div style={{margin: '20px 0 20px 0' }}>
                {this.handleUsers(this.props.user)}
              </div>
              <div>
                {this.handleUsers(this.props.users)}
              </div>
          </div>
      )
  }
}


const mapStateToProps = ({ users, user }, props)=> {
  return { users, user }
}

export default connect(mapStateToProps, { fetchUsers, fetchUser })(UsersList);
