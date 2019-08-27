import React from 'react';
import { Route } from 'react-router-dom';
import { asyncRoutes, flattenRoutes } from '@/router';
import Loading from '@/components/loading';

const comRoutes = flattenRoutes(asyncRoutes).filter(item => item.component);

const com: React.FC = () => {
    const a = 'oo';
    console.log(a);
    return (
        <div>
            <React.Suspense fallback={<Loading />}>
                {
                    comRoutes.map(route => {
                        // todo 如何不转换成any，保持类型的转换并调用
                        const { component }: any = route;
                        return (
                            <Route
                                exact
                                key={route.fullpath}
                                path={route.fullpath}
                                component={component}
                            />
                        );
                    })
                }
            </React.Suspense>
        </div>
    );
};

export default com;
