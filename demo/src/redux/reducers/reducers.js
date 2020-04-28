
import {combineReducers} from 'redux'
import {USER_LOGIN,USER_LOGOUT} from '../action/action-type'

initState={
    user_id,
    username="",
}
const user=(initState,action)=>{
    switch(action.type){
        case USER_LOGIN:
            const {username,user_id} = action
            return username,user_id;
        case USER_LOGOUT:
            return initState;


        default:
            return initState;
    }
}

export default combineReducers({
    user

});