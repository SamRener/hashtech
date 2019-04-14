import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Index from '../Pages/Index/Index';
import Dash from '../Pages/Dash/Dashboard';
const Routes = () =>(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Index} />
            <Route path="/dashboard" component={Dash} />
        </Switch>
    </BrowserRouter>
);

export default Routes;