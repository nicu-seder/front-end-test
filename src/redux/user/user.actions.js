import UserActionTypes from "./user.types";

export const signInStart = (userCredentials)=>{
    return {
        type:UserActionTypes.SIGN_IN_START,
        payload:userCredentials
    }
};

export const signInSuccess = (user)=>{
    return {
        type:UserActionTypes.SIGN_IN_SUCCESS,
        payload:user
    }
};

export const signInFailure = (error)=>{
    return {
        type:UserActionTypes.SIGN_IN_FAILURE,
        payload:error
    }
};

export const signOutStart = ()=>{
    return {
        type:UserActionTypes.SIGN_OUT_START
    }
}

export const registerStart = (userCredentials)=>{
    return {
        type:UserActionTypes.REGISTER_START,
        payload:userCredentials
    }
};

export const registerSuccess = (user)=>{
    return {
        type:UserActionTypes.REGISTER_SUCCESS,
        payload:user
    }
};

export const registerFailure = (error)=>{
    return {
        type:UserActionTypes.REGISTER_FAILURE,
        payload:error
    }
};