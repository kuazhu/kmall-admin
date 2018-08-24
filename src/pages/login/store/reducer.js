/*
* @Author: TomChen
* @Date:   2018-08-20 09:18:25
* @Last Modified by:   TomChen
* @Last Modified time: 2018-08-24 11:41:11
*/
import { fromJS } from 'immutable'

//用fromJS包装一个immutable对象
const defaultState = fromJS({
	isFetching:true
})

export default (state=defaultState,action)=>{

	return state;
}