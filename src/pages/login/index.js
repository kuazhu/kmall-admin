/*
* @Author: Tom
* @Date:   2018-08-23 16:46:38
* @Last Modified by:   TomChen
* @Last Modified time: 2018-08-24 11:40:50
*/
import React,{ Component } from 'react';
import { connect } from 'react-redux'
import { Form, Icon, Input, Button,message } from 'antd';

import axios from 'axios';

import './index.css'

const FormItem = Form.Item;

class NormalLoginForm extends Component{
	constructor(props){
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.state = {
			isFetching:false
		}
	}
  handleSubmit(e){
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
      	this.setState({
      		isFetching:true
      	})
        axios({
					method: 'post',
					url: 'http://127.0.0.1:3000/admin/login',
					data: values
				})
				.then((result)=>{
					let data = result.data;
					//登录成功	
					if(data.code == 0){
						window.location.href = '/'
					}else if(data.code == 10){
						message.error(data.message)
					}
					this.setState({
	      		isFetching:false
	      	})
				})
				.catch((err)=>{
					message.error('网络错误,请稍后在试!')
					this.setState({
	      		isFetching:false
	      	})					
				})
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
	          <Button 
	          	type="primary" 
	          	onClick={this.handleSubmit} 
	          	className="login-form-button"
	          	loading={this.props.isFetching}
	          >
	            登录
	          </Button>
	        </FormItem>
	      </Form>
      </div>
    );
  }
}

const Login = Form.create()(NormalLoginForm);


const mapStateToProps = (state)=>{
	return {
		isFetching:state.get('login').get('isFetching')
	}
}

export default connect(mapStateToProps,null)(Login);