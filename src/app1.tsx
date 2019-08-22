import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
// import Page1 from './page1';
import Layout from './pages/layout';
import Login from './pages/login';

const app: React.FC = () => {
    return (
        <HashRouter>
            <Switch>
                <Route path="/" component={Layout}/>
                <Route exact={true} path="/login" component={Login}/>
            </Switch>
        </HashRouter>
    );
};

export default app;
