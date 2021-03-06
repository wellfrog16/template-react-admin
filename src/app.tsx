import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
// import Page1 from './page1';
// import Page2 from './page2';
import Layout from './pages/layout';
import Login from './pages/login';

// const a = React.lazy(() => import('@/pages/research/table'));

const app = () => (
    <HashRouter>
        <Switch>
            <Route path="/login" exact component={Login} />
            <Route path="/" component={Layout} />
        </Switch>

        {/* <Route exact={true} onEnter={test()} component={Layout}>
            <Route exact={true} path="/layout/page2" component={Page2}/>
            <Route exact={true} path="/layout/page1" component={Page1}/>
        </Route> */}
    </HashRouter>
);

export default app;
