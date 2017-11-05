import React, { Component } from 'react';
import { Form, Icon, Input, Button } from 'antd';
import { connect } from 'react-redux';
import { changeUserData, fetchUsers } from '../actions';
import { FETCH_USERS_WITH_CHANGES } from '../actions/types'

const FormItem = Form.Item;

class ControlForm extends Component{


  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        values.userId = this.props.user._id;
        this.props.changeUserData(values)
      }
    });
  }
  render(){
    const { getFieldDecorator } = this.props.form;

    return(
      <Form onSubmit={this.handleSubmit} className="login-form">
        <FormItem
         label='Login'
         >
          {getFieldDecorator('login', {
            rules: [{ required: true, message: 'Please input user login!' }],
            initialValue: this.props.user.login
          })(
            <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />}  />
          )}
        </FormItem>
        <FormItem
         label='Avatar URL'
         >
          {getFieldDecorator('avatar_url', {
            rules: [{ required: true, message: 'Please input avatar url!' }],
            initialValue: this.props.user.avatar_url
          })(
            <Input prefix={<Icon type="link" style={{ fontSize: 13 }} />} />
          )}
        </FormItem>
        <FormItem>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Change User Data
          </Button>
        </FormItem>
      </Form>
    )
  }
}

const WrappedControlForm = Form.create()(ControlForm)


export default connect(null, { changeUserData, fetchUsers})(WrappedControlForm)
