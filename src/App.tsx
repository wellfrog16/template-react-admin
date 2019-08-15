import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Page1 from './page1';
import Page2 from './page2';
import Home from './pages/home';

const app: React.FC = () => {
    return (
        <HashRouter>
            <Switch>
                <Route exact={true} path="/" component={Page1}/>
                <Route exact={true} path="/detail" component={Page2}/>
                <Route exact={true} path="/home" component={Home}/>
            </Switch>
        </HashRouter>
    );
};

export default app;
