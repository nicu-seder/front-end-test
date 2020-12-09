import {takeLatest, put, call, all} from 'redux-saga/effects';

//import action types
import UserActionTypes from "./user.types";

//import actions
import {signInSuccess, signInFailure, registerSuccess, registerFailure} from "./user.actions";

export function* signInStartAsync({payload}){
    console.log(payload);
    const {email, password} = payload;
    try{
        const response = yield fetch('http://localhost:3005/signin', {
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                email,
                password
            })
        });
        const user = yield response.json();
        if(user === 'wrong credentials'){
            yield put(signInFailure(user))
        }else{
            yield put(signInSuccess(user));
        }
    }catch (e){
        yield put(signInFailure(e.message))
    }
}

export function* onSignInStart(){
    yield takeLatest(UserActionTypes.SIGN_IN_START, signInStartAsync)
}

export function* registerStartAsync({payload}){
    const {name, email, password} = payload;
    try{
        const response = yield fetch('http://localhost:3005/register', {
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({name, email, password})
        });
        const result = yield response.json();
        console.log(result);

        if(result){
            yield put(registerSuccess({name, email, password}));
        }

    }catch (e){
        yield put(registerFailure(e));
    }
}

export function* onRegisterStart(){
    yield takeLatest(UserActionTypes.REGISTER_START, registerStartAsync)
}

export function* userSagas(){
    yield all ([
        call(onSignInStart),
        call(onRegisterStart)
        ]
    )
}