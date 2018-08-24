/*
* @Author: Tom
* @Date:   2018-08-23 16:46:38
* @Last Modified by:   Tom
* @Last Modified time: 2018-08-23 17:31:58
*/
import React,{ Component } from 'react';

import { Form, Icon, Input, Button, Checkbox } from 'antd';

import './index.css'

const FormItem = Form.Item;

class NormalLoginForm extends Component{
	constructor(props){
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
  handleSubmit(e){
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
    	<div className='Login'>
	      <Form className="login-form">
	        <FormItem>
	          {getFieldDecorator('username', {
	            rules: [{ required: true, message: '请输入用户名!' },{pattern:/^[a-z|\d]{3,6}$/,message:'用户名为3-6个字符'}],
	          })(
	            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="用户名" />
	          )}
	        </FormItem>
	        <FormItem>
	          {getFieldDecorator('password', {
	            rules: [{ required: true, message: '请输入密码!' },{pattern:/^[a-z|\d]{3,6}$/,message:'密码为3-6个字符'}],
	          })(
	            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="密码" />
	          )}
	        </FormItem>
	        <FormItem>
	          <Button type="primary" onClick={this.handleSubmit} className="login-form-button">
	            登录
	          </Button>
	        </FormItem>
	      </Form>
      </div>
    );
  }
}

export default Form.create()(NormalLoginForm);;