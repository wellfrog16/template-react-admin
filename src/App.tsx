import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Page1 from './page1';
import Layout from './pages/layout';
import Home from './pages/home';

const app: React.FC = () => {
    return (
        <HashRouter>
            <Switch>
                <Route exact={true} path="/" component={Page1}/>
                <Route exact={true} path="/detail" component={Layout}/>
                <Route exact={true} path="/home" component={Home}/>
            </Switch>
        </HashRouter>
    );
};

export default app;
