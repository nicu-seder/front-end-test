import './App.css';
import React from 'react';


//import router
import {Switch, Route} from 'react-router-dom';

//import components
import Header from "./components/header/header.component";
import HomePage from"./pages/home-page/home-page.component";
import RegisterPage from "./pages/register-page/register-page.component";
import SigninPage from "./pages/signin-page/signin-page.component";
import WelcomePage from "./pages/welcome-page/welcome-page.component";

const App = () => {

    return (
        <div className="App">
            <Header/>
            <Switch>
                <Route exact path={'/'} component={WelcomePage}/>
                <Route exact path={'/home'} component={HomePage}/>
                <Route exact path={'/signin'} component={SigninPage}/>
                <Route exact path={'/register'} component={RegisterPage}/>
            </Switch>
        </div>
    );
}

export default App;
