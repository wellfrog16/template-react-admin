import React from 'react';
import Loadable from 'react-loadable';
import { Route, Switch } from 'react-router-dom';
import { asyncRoutes, flattenRoutes } from '@/router';

const comRoutes = flattenRoutes(asyncRoutes).filter(item => item.component);

const test = ():void => {
    console.log(911199);
};

const com: React.FC = () => {
    return (
        <Switch>
            {
                comRoutes.map((route) => {
                    // todo 如何不转换成any，保持类型的转换并调用
                    const { component }:any = route;
                    return (
                        <Route
                            exact={false}
                            onEnter={test()}
                            key={route.fullpath}
                            path={route.fullpath}
                            component={Loadable({ loader: component, loading() { return <div>Loading...</div>; } })}
                        />
                    );
                })
            }
        </Switch>
    );
};

export default com;
