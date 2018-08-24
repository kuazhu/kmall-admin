/*
* @Author: TomChen
* @Date:   2018-08-16 17:14:09
* @Last Modified by:   TomChen
* @Last Modified time: 2018-08-24 17:13:45
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

import { getUserName } from 'util'

//引入css
import './App.css';


class App extends Component{
	render(){
		const ProtectedRouter = ({component:Component,...rest})=>(
			<Route 
				{...rest}
				render = {props=>(
					getUserName()
					? <Component {...props} />
					: <Redirect to="/login" />
				)}
			/>
		)

		const LoginRouter =({component:Component,...rest})=>{
			if(getUserName()){
				return <Redirect to="/" />
			}else{
				return <Route {...rest} component={Component} />
			}
		}
			
		return(
			<Router>
				<div className="App">
					<ProtectedRouter exact path="/" component={ Home } />				
					<LoginRouter path="/login" component={ Login } />
				</div>		
			</Router>	
		)
	}
}

export default App;