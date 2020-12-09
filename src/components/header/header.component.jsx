import React, {Fragment} from 'react';
import {useHistory} from 'react-router-dom';
//import styles
import {HeaderContainer, HeaderHomeSection, HeaderOption, HeaderOptions} from "./header.styles";

//import from redux
import {useSelector} from "react-redux";

//import from reselect
import {selectCurrentUser} from "../../redux/user/user.selectors";

//import from redux
import {useDispatch} from "react-redux";

//import actions
import {signOutStart} from "../../redux/user/user.actions";

const Header = () => {
    const history = useHistory();
    const currentUser = useSelector(selectCurrentUser);
    const dispatch = useDispatch();

    const signOut = ()=>{
        dispatch(signOutStart());
        history.push('/');
    }
    return (
        <HeaderContainer>
            <HeaderHomeSection>Home</HeaderHomeSection>
            <HeaderOptions>
                {
                    currentUser?
                        <HeaderOption onClick={signOut}>Sign Out</HeaderOption>:
                        <Fragment>
                            <HeaderOption onClick={()=>history.push('/signin')}>Sign In</HeaderOption>
                            <HeaderOption onClick={()=>history.push('/register')}>Register</HeaderOption>
                        </Fragment>
                }
            </HeaderOptions>
        </HeaderContainer>
    )
};

export default Header;