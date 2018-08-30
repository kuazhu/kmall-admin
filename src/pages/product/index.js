/*
* @Author: TomChen
* @Date:   2018-08-27 15:19:33
* @Last Modified by:   TomChen
* @Last Modified time: 2018-08-30 11:45:25
*/
import React,{ Component } from 'react';
import { Switch,Route } from 'react-router-dom';

import ProductList from './list.js'
import ProductSave from './save.js'

class Product extends Component{
	render(){
		return(
			<Switch>
				<Route path="/product/save" component={ ProductSave } />
				<Route path="/product" component={ ProductList } />
			</Switch>
		)
	}
}

export default Product;