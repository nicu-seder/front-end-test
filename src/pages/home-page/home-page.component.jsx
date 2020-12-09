import React, {useEffect} from 'react';

//import styles
import {HomePageContainer, HomePageTitle} from "./home-page.styles"

//import from react router
import {useHistory} from 'react-router-dom';

//import from reselect
import {selectCurrentUser} from "../../redux/user/user.selectors";
import {useSelector} from "react-redux";


const HomePage = ()=>{
    const currentUser = useSelector(selectCurrentUser);
    const history = useHistory();
    useEffect(()=>{
        if(!currentUser){
            history.push('/')
        }
    }, [currentUser, history])

    return (
        <HomePageContainer>
            <HomePageTitle>This is the home page</HomePageTitle>
        </HomePageContainer>
    )
};

export default HomePage;