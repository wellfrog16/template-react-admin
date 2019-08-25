import React from 'react';
import Loadable from 'react-loadable';
import { Route } from 'react-router-dom';
import { asyncRoutes, flattenRoutes } from '@/router';
import Loading from '@/components/loading';

const comRoutes = flattenRoutes(asyncRoutes).filter(item => item.component);

const com: React.FC = () => {
    const a = '11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111';
    console.log(a);
    return (
        <div>
            {
                comRoutes.map((route, index) => {
                    // todo 如何不转换成any，保持类型的转换并调用
                    const { component }: any = route;
                    return (
                        <Route
                            exact={true}
                            key={index}
                            path={route.fullpath}
                            component={Loadable({ loader: component, loading() { return Loading({ aa: 'aaa' }); } })}
                        />
                    );
                })
            }
        </div>
    );
};

export default com;
