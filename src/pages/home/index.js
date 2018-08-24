/*
* @Author: TomChen
* @Date:   2018-08-24 17:02:20
* @Last Modified by:   TomChen
* @Last Modified time: 2018-08-24 17:04:29
*/
import React,{ Component } from 'react';
import { getUserName } from 'util'

class Home extends Component{

	render(){
		return(
			<div>{ getUserName() }</div>
		)
	}

}


export default Home;