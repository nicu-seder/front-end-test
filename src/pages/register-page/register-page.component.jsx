import React, {useState} from 'react';

//import styles
import {RegisterPageContainer, RegisterButton} from "./register-page.styles";

//import components
import FormInput from "../../components/form-input/form-input.component";

//import router
import {useHistory} from 'react-router-dom';

//import redux
import {useDispatch} from "react-redux";

//import actions
import {registerStart} from "../../redux/user/user.actions";

const RegisterPage = () => {
    const [userCredentials, setUserCredentials] = useState({userName: '', userEmail: '', userPassword: ''});
    const {userName, userEmail, userPassword} = userCredentials;
    const dispatch = useDispatch();
    const history = useHistory();

    const handleChange = (event) => {
        const {name, value} = event.target;
        setUserCredentials({...userCredentials, [name]: value})
    };

    const registerUser = () => {
        if (!(userName === '' || userEmail === '' || userPassword === '')) {
            dispatch(registerStart({name: userName, email: userEmail, password: userPassword}));
            history.push('/home')
        }
    }

    return (
        <RegisterPageContainer>
            <FormInput
                name={'userName'}
                label={'Name'}
                type={'text'}
                value={userName}
                required
                handleChange={handleChange}
            />

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
            <RegisterButton onClick={registerUser}>Register</RegisterButton>
        </RegisterPageContainer>
    )
};

export default RegisterPage;