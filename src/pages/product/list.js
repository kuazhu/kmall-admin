/*
* @Author: TomChen
* @Date:   2018-08-30 11:42:04
* @Last Modified by:   TomChen
* @Last Modified time: 2018-08-30 11:44:26
*/
import React,{ Component } from 'react';
import { Link} from 'react-router-dom';

import Layout from 'common/layout'

class ProductList extends Component{
	render(){
		return(
			<Layout>
				<div>
					<Link to="/product/save" >add</Link>
				</div>
			</Layout>
		)
	}
}

export default ProductList;