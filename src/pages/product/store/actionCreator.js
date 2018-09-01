/*
* @Author: TomChen
* @Date:   2018-08-24 14:39:19
* @Last Modified by:   TomChen
* @Last Modified time: 2018-09-01 11:44:30
*/
import { message } from 'antd';

import { request } from 'util'
import { ADD_PRODUCT,GET_PRODUCTS,UPDATE_PRODUCT_ORDER,UPDATE_PRODUCT_STATUS } from 'api'

import * as types from './actionTypes.js'

export const getSetCategoryAction = (parentCategoryId,categoryId)=>({
	type:types.SET_CATEGORY,
	payload:{
		parentCategoryId,
		categoryId
	}
})
export const getSetImagesAction = (fileList)=>({
	type:types.SET_IMAGES,
	payload:fileList
})
export const getSetDetailAction = (value)=>({
	type:types.SET_DETAIL,
	payload:value
})




const getSaveRequstAction = ()=>{
	return {
		type:types.SAVE_REQUEST
	}
}

const getSaveDoneAction = ()=>{
	return {
		type:types.SAVE_DONE
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
const setCategoryError = ()=>({
	type:types.SET_CATEGORY_ERROR
})
export const getSaveAction = (err,values)=>{
	return (dispatch,getState)=>{
		const state = getState().get('product');
		const  categoryId = state.get('categoryId');
		if(!categoryId){
			dispatch(setCategoryError())
			return;
		}
		if(err){
			return;
		}
		dispatch(getSaveRequstAction())
        request({
			method: 'post',
			url: ADD_PRODUCT,
			data: {
				...values,
				category:categoryId,
				images:state.get('images'),
				detail:state.get('detail')
			}
		})
		.then((result)=>{
			if(result.code == 0){
				message.success(result.message)
				window.location.href = '/product'
			}
			dispatch(getSaveDoneAction())
		})
		.catch((err)=>{
			message.error('网络错误,请稍后在试!')
			dispatch(getSaveDoneAction())				
		})
	}
}


export const getPageAction = (page)=>{
	return (dispatch)=>{
		dispatch(getPageRequstAction());
        request({
			method: 'get',
			url: GET_PRODUCTS,
			data: {
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

export const getUpdateOrderAction = (id,newOrder)=>{
	return (dispatch,getState)=>{
		const state = getState().get('product');
        request({
			method: 'put',
			url: UPDATE_PRODUCT_ORDER,
			data: {
				id:id,
				order:newOrder,
				page:state.get('current')
			}
		})
		.then((result)=>{
			if(result.code == 0){
				dispatch(getSetPageAction(result.data))
			}else{
				message.error(result.message)
			}
		})
		.catch((err)=>{
			message.error('网络错误,请稍后在试!')
		})
	}	
}
export const getUpdateStatusAction = (id,newStatus)=>{
	return (dispatch,getState)=>{
		const state = getState().get('product');
        request({
			method: 'put',
			url: UPDATE_PRODUCT_STATUS,
			data: {
				id:id,
				status:newStatus,
				page:state.get('current')
			}
		})
		.then((result)=>{
			if(result.code == 0){
				message.success(result.message)
			}else{
				message.error(result.message)
				dispatch(getSetPageAction(result.data))
			}
		})
		.catch((err)=>{
			message.error('网络错误,请稍后在试!')
		})
	}	
}

