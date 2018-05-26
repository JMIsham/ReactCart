import * as types from '../actions/action-types';

export function login(){
    return {
        type : types.LOGIN_REQUESTED,
        loginRequestPending : true,
    }
}

export function userLoginSucceeded(userName){
    return {
        type: types.LOGIN_SUCCEEDED,
        loginRequestPending: false,
        userName
    }
}

export function userLoginFailed() {
    return{
        type : types.LOGIN_FAILED,
        loginRequestPending : false
    }
}