import React from 'react';
// import _ from 'lodash';
import { Route, Switch } from 'react-router-dom';
import { asyncRoutes, flattenRoutes } from '@/router';

const comRoutes = flattenRoutes(asyncRoutes).filter(item => item.component);

const com: React.FC = () => {
    return (
        <Switch>
            {
                comRoutes.map(route => (
                    <Route
                        key={route.fullpath}
                        path={route.fullpath}
                        component={route.component}
                    />
                ))
            }
        </Switch>
    );
};

export default com;
