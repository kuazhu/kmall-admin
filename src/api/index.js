/*
* @Author: TomChen
* @Date:   2018-08-24 16:09:28
* @Last Modified by:   TomChen
* @Last Modified time: 2018-09-18 09:29:20
*/

const SERVER = 'http://127.0.0.1:3000/';

export const  ADMIN_LOGIN = SERVER + 'admin/login';
export const  ADMIN_COUNT = SERVER + 'admin/count';
export const  USER_LOGOUT = SERVER + 'user/logout';
export const  GET_USERS = SERVER + 'admin/users';

export const ADD_CATEGORY = SERVER + 'category'
export const GET_CATEGORIES = SERVER + 'category'
export const UPDATE_CATEGORY_NAME = SERVER + 'category/updateName'
export const UPDATE_CATEGORY_ORDER = SERVER + 'category/updateOrder'


export const UPLOAD_PRODUCT_IMAGE = SERVER + 'product/uploadImage'
export const UPLOAD_PRODUCT_DETAIL_IMAGE = SERVER + 'product/uploadDetailImage'
export const SAVE_PRODUCT = SERVER + 'product'
export const GET_PRODUCTS = SERVER + 'product'
export const UPDATE_PRODUCT_ORDER = SERVER + 'product/updateOrder'
export const UPDATE_PRODUCT_STATUS = SERVER + 'product/updateStatus'
export const GET_PRODUCT_DETAIL = SERVER + 'product/detail'
export const SEARCH_PRODUCTS = SERVER + 'product/search'

export const GET_ORDERS = SERVER + 'order'
export const SEARCH_ORDERS = SERVER + 'order/search'
export const GET_ORDER_DETAIL = SERVER + 'order/detail'
export const UPDATE_ORDER_DELIVER = SERVER + 'order/deliver'

