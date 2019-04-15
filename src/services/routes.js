import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Index from '../Pages/Index/Index';
import Dash from '../Pages/Dash/Dashboard';
import Cleaner from '../Manager/Cleaner/Cleaner';
const Routes = () =>(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Index} />
            <Route path="/dashboard" component={Dash} />
            <Route path='/Manager/Cleaner' component={Cleaner} />
        </Switch>
    </BrowserRouter>
);

export default Routes;