/*
* @Author: TomChen
* @Date:   2018-08-21 14:55:31
* @Last Modified by:   TomChen
* @Last Modified time: 2018-08-24 15:55:17
*/
// import { combineReducers } from 'redux';
//redux-immutable中的combineReducers方法生成的store中的state数据是immutable对象
import { combineReducers } from 'redux-immutable';
import { reducer as loginReducer } from 'pages/login/store';

export default combineReducers({
	login:loginReducer
})