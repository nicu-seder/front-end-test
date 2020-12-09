import React, {useState, useEffect} from 'react';

//import styles
import {SigninPageContainer, SignInButton} from "./signin-page.styles";

//import components
import FormInput from "../../components/form-input/form-input.component";

//import from redux
import {useDispatch, useSelector} from "react-redux";

//import actions
import {signInStart} from "../../redux/user/user.actions";

//import router
import {useHistory} from 'react-router-dom';
import {selectCurrentUser} from "../../redux/user/user.selectors";


const SigninPage = () => {
    const [userCredentials, setUserCredentials] = useState({userEmail: '', userPassword: ''});
    const {userEmail, userPassword} = userCredentials;
    const dispatch = useDispatch();
    const history = useHistory();
    const currentUser = useSelector(selectCurrentUser);

    useEffect(()=>{
        if(currentUser){
            history.push('/home');
        }
    },[currentUser, history])

    const handleChange = (event) => {
        const {name, value} = event.target;
        setUserCredentials({...userCredentials, [name]: value})
    };

    const getUser = () => {
        dispatch(signInStart({email: userEmail, password: userPassword}));
    }

    return (
        <SigninPageContainer>
            <FormInput
                name={'userEmail'}
                label={'Email'}
                type={'email'}
                value={userEmail}
                required
                handleChange={handleChange}
            />

            <FormInput
                name={'userPassword'}
                label={'Password'}
                type={'password'}
                value={userPassword}
                required
                handleChange={handleChange}
            />
            <SignInButton onClick={getUser}>Sign In</SignInButton>
        </SigninPageContainer>
    )
};

export default SigninPage;