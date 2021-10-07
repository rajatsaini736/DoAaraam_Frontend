import { USER_LOGIN, USER_LOGOUT, SHOW_LOGIN_MODEL, HIDE_LOGIN_MODEL, USER_ALL_DATA } from './userType';

//B1 start
export const userLogin = () => {
    return{
        type : USER_LOGIN,
        info : "user login"
    }
}
//B1 stop

//B2 start
export const userLogout = () => {
    return{
        type : USER_LOGOUT,
        info : "user logout"
    }
}
//B2 stop

//B3 start
export const showModel = () => {
    return{
        type : SHOW_LOGIN_MODEL,
        payload : "Show login model"
    }
}
//B3 stop

//B4 start
export const hideModel = () => {
    return{
        type : HIDE_LOGIN_MODEL,
        payload : "Hide login model"
    }
}
//B4 stop

export const userDatas = (data = {}) => {
    return{
        type : USER_ALL_DATA,
        payload : data
    }
}