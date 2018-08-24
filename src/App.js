/*
* @Author: TomChen
* @Date:   2018-08-16 17:14:09
* @Last Modified by:   Tom
* @Last Modified time: 2018-08-23 16:48:33
*/
import React,{ Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom'

import Login from './pages/login'

//引入css
import './App.css';


class App extends Component{
	render(){
		return(
			<Router>
				<div className="App">				
					<Route path="/login" component={ Login } />
				</div>		
			</Router>	
		)
	}
}

export default App;