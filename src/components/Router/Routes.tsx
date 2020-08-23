import {Landing} from '../Landing/Landing';
import {Meeting} from '../Meeting/Meeting';
import {Help} from '../Help/Help';
import {Account} from '../Account/Account';
import React from 'react';
import {Switch, BrowserRouter as Router, Route} from 'react-router-dom';

export const Routes = ()=>{
    return (
        <Router> 
            <Switch>
                <Route exact path="/">
                    <Landing />
                </Route>
                <Route path="/meeting">
                    <Meeting />
                </Route>
                <Route path="/account">
                    <Account />
                </Route>
                <Route path="/help">
                    <Help />
                </Route>
            </Switch>
        </Router>
    )
}