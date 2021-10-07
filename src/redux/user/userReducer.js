import { USER_LOGIN, USER_LOGOUT, SHOW_LOGIN_MODEL, HIDE_LOGIN_MODEL, USER_ALL_DATA } from './userType';

//C1
const initilizeState = {
    login : false,
    showModel : false,
    userData : {}, 
}

//C2 start
const userReducers = (state = initilizeState, action) => {
    switch(action.type){
        //C2-1 
        case USER_LOGIN: return{
            ...state,
            login : true
        }

        //C2-2
        case USER_LOGOUT: return{
            ...state,
            login : false
        }

        //C2-3
        case SHOW_LOGIN_MODEL: return{
            ...state,
            showModel : true
        }
        //C2-4
        case HIDE_LOGIN_MODEL: return{
            ...state,
            showModel : false
        }

        case USER_ALL_DATA: return{
            ...state,
            userData : action.payload
        }

        default : return state;
    }
}
//C2 stop

export default userReducers;

