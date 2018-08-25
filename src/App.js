/*
* @Author: TomChen
* @Date:   2018-08-16 17:14:09
* @Last Modified by:   TomChen
* @Last Modified time: 2018-08-25 11:29:25
*/
import React,{ Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom'

import Login from 'pages/login'
import Home from 'pages/home'
import User from 'pages/user'

import { getUserName } from 'util'

//引入css
import './App.css';


class App extends Component{
	render(){
		const ProtectedRoute = ({component:Component,...rest})=>(
			<Route 
				{...rest}
				render = {props=>(
					getUserName()
					? <Component {...props} />
					: <Redirect to="/login" />
				)}
			/>
		)

		const LoginRoute =({component:Component,...rest})=>{
			if(getUserName()){
				return <Redirect to="/" />
			}else{
				return <Route {...rest} component={Component} />
			}
		}
			
		return(
			<Router>
				<div className="App">
					<Switch>
						<ProtectedRoute exact path="/" component={ Home } />				
						<ProtectedRoute path="/user" component={ User } />				
						<LoginRoute path="/login" component={ Login } />
					</Switch>	
				</div>		
			</Router>	
		)
	}
}

export default App;