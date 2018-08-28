/*
* @Author: TomChen
* @Date:   2018-08-24 14:39:19
* @Last Modified by:   TomChen
* @Last Modified time: 2018-08-28 17:19:31
*/
import { message } from 'antd';

import { request } from 'util'
import { ADD_CATEGORY,GET_CATEGORIES } from 'api'

import * as types from './actionTypes.js'

const getAddRequstAction = ()=>{
	return {
		type:types.ADD_REQUEST
	}
}

const getAddDoneAction = ()=>{
	return {
		type:types.ADD_DONE
	}
}
const setLevelOneCategories = (payload)=>{
	return {
		type:types.SET_LEVEL_ONE_CATEGORIES,
		payload
	}	
}

const getPageRequstAction = ()=>{
	return {
		type:types.PAGE_REQUEST
	}
}

const getPageDoneAction = ()=>{
	return {
		type:types.PAGE_DONE
	}
}
const getSetPageAction = (payload)=>{
	return {
		type:types.SET_PAGE,
		payload
	}
}
export const getAddAction = (values)=>{
	return (dispatch)=>{
		dispatch(getAddRequstAction())
        request({
			method: 'post',
			url: ADD_CATEGORY,
			data: values
		})
		.then((result)=>{
			if(result.code == 0){
				if(result.data){//如果添加的是一级分类,从新更新一级分类
					dispatch(setLevelOneCategories(result.data))
				}
				message.success('添加分类成功')	
			}else{
				message.error(result.message)
			}
			dispatch(getAddDoneAction())
		})
		.catch((err)=>{
			message.error('网络错误,请稍后在试!')
			dispatch(getAddDoneAction())				
		})
	}
}


export const getLevelOneCategoriesAction = ()=>{
	return (dispatch)=>{
        request({
			method: 'get',
			url: GET_CATEGORIES,
			data: {
				pid:0
			}
		})
		.then((result)=>{
			if(result.code == 0){
				dispatch(setLevelOneCategories(result.data))	
			}else{
				message.error(result.message)
			}
		})
		.catch((err)=>{
			message.error('网络错误,请稍后在试!')
		})
	}	
}

export const getPageAction = (pid,page)=>{
	return (dispatch)=>{
		dispatch(getPageRequstAction());
        request({
			method: 'get',
			url: GET_CATEGORIES,
			data: {
				pid:pid,
				page:page
			}
		})
		.then((result)=>{
			if(result.code == 0){
				dispatch(getSetPageAction(result.data))	
			}else{
				message.error(result.message)
			}
			dispatch(getPageDoneAction())
		})
		.catch((err)=>{
			message.error('网络错误,请稍后在试!')
			dispatch(getPageDoneAction())
		})
	}	
}

export const getShowUpdateModalAction = (updateId,updateName)=>{
	return {
		type:types.SHOW_UPDATE_MODAL,
		payload:{
			updateId,
			updateName
		}
	}
}

