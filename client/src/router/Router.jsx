import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';

import Login from '../components/login/Login';
import Home from '../components/home/Home';

const AppRouter = _ => {

    return (
        <Switch>
            <Route exact path='/login' component={Login} />
            <ProtectedRoute exact path='/' component={Home} />
            <ProtectedRoute exact path='/home' component={Home} />
        </Switch>
    )
}

export default AppRouter