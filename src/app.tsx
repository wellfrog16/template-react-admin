import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Page1 from './page1';
import Page2 from './page2';
import Layout from './pages/layout';
import Login from './pages/login';

const test = ():void => {
    console.log(777777777777);
};

// const a = React.lazy(() => import('@/pages/research/table'));

const app: React.FC = () => {
    return (
        <HashRouter>
            <Route path="/layout" component={Layout} />

            <Route exact={true} onEnter={test()} component={Layout}>
                <Route exact={true} path="/layout/page2" component={Page2}/>
                <Route exact={true} path="/layout/page1" component={Page1}/>
            </Route>
            <Route exact={true} path="/login" component={Login}/>
        </HashRouter>
    );
};

export default app;
