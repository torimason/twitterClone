import React from 'react';
import { Switch , Route } from 'react-router-dom';
import Home from './Home';
import Profile from './Profile';
import UnderDev from './UnderDev';

function Router() {
    return(
        <Switch>
            <Route exact path='/' component={Home}></Route>
            <Route path='/profile' component={Profile}></Route>
            <Route path='/notFound' component={UnderDev}></Route>
        </Switch>
    )
}

export default Router;