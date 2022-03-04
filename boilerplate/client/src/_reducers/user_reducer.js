import {
    LOGIN_USER,
    REGISTER_USER
}from '../_actions/types';

//현재 state는 비어있고
const func = function(state= {}, action){
    switch(action.type){
        case LOGIN_USER:
            //다음 state return
            return {...state, loginSuccess: action.payload}
        case REGISTER_USER:
            return {...state, register: action.payload}
            

        
        default:
            return state;
        
    }
}
export default func;