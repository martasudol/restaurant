import React from 'react';
import {Route, Switch} from 'react-router-dom';
// import App from '../App';
import AboutUs from '../components/about_us/about_us';
import HomePage from '../components/home-page/home-page';

export default function DeclarativeRouter() {
    return (
        <Switch>
            <Route path="/" exact component={HomePage}/>
            <Route path="/about_us" exact component={AboutUs}/>
            <Route exact component={HomePage}/>
        </Switch>
    );
}
