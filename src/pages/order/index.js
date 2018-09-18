/*
* @Author: TomChen
* @Date:   2018-09-17 14:55:17
* @Last Modified by:   TomChen
* @Last Modified time: 2018-09-17 14:57:26
*/
/*
* @Author: TomChen
* @Date:   2018-08-27 15:19:33
* @Last Modified by:   TomChen
* @Last Modified time: 2018-09-03 15:14:30
*/
import React,{ Component } from 'react';
import { Switch,Route } from 'react-router-dom';

import OrderList from './list.js'
import OrderDetail from './detail.js'

class Order extends Component{
	render(){
		return(
			<Switch>
				<Route path="/order/detail/:orderNo" component={ OrderDetail } />
				<Route path="/order" component={ OrderList } />
			</Switch>
		)
	}
}

export default Order;