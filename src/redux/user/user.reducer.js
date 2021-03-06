import UserActionTypes from "./user.types";

const INITIAL_STATE = {
    currentUser: null,
    error: null
};

const userReducer = (state = INITIAL_STATE, action)=>{
    switch (action.type){
        case UserActionTypes.SIGN_IN_SUCCESS:
        case UserActionTypes.REGISTER_SUCCESS:
            return {
                ...state,
                currentUser: action.payload,
                error: null
            };
        case UserActionTypes.SIGN_IN_FAILURE:
        case UserActionTypes.REGISTER_FAILURE:
            return {
                ...state,
                currentUser: null,
                error: action.payload
            }
        case UserActionTypes.SIGN_OUT_START:
            return {
                ...state,
                currentUser: null,
                error: null
            }
        default:
            return state;
    }
}

export default userReducer;