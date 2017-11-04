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
  handleUsers(users){
    if(!users.loaded){
      return users.map((user, index) => {
          return (
                  <Link to={`/${user._id}`}>
                    <Card key={index}
                          style={{ width: '80%' }}
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
       <div style={{width:'80%',height: '700px', marginTop: '50px'}}>
          <Spin tip="Loading...">
            <Alert
              message="Loading..."
              description="uploading users"
              type="info"
            />
         </Spin>
       </div>
      )
    }
  }

  handleCurrentPage = ( page ) => {

    this.setState({current: page});

    this.props.fetchUsers({ page });
  }

  render(){
      return(
          <div>
              <div style={{margin: '20px 0 20px 0'}}>
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
