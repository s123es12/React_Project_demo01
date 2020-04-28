import {USER_LOGIN,USER_LOGOUT} from './action-type'

export const userLogin = (dispatch,data)=>dispatch({type:USER_LOGIN,data});
export const userLogout = (dispatch)=>dispatch({type:USER_LOGOUT});
