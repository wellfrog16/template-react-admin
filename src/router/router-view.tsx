import React from 'react';
import Loadable from 'react-loadable';
import { Route } from 'react-router-dom';
import { asyncRoutes, flattenRoutes } from '@/router';
import Loading from '@/components/loading';

const comRoutes = flattenRoutes(asyncRoutes).filter(item => item.component);

const com: React.FC = () => {
    const a = 'oo';
    console.log(a);
    return (
        <div>
            {
                comRoutes.map(route => {
                    // todo 如何不转换成any，保持类型的转换并调用
                    const { component }: any = route;
                    return (
                        <Route
                            exact
                            key={route.fullpath}
                            path={route.fullpath}
                            component={Loadable({ loader: component, loading: Loading })}
                        />
                    );
                })
            }
        </div>
    );
};

export default com;
