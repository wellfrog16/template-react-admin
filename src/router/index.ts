import React from 'react';
// import Loadable from 'react-loadable';

// 路由
import routeHome from './modules/home';
import routeDocument from './modules/document';
import routeUI from './modules/ui';
import routeResearch from './modules/research';

export interface IRoute {
    name?: string;
    path: string;
    fullpath?: string | 'roo';
    meta: IMeta;
    children?: IRoute[];
    // component? () => Promise<React.ComponentClass<unknown, any> | React.FunctionComponent<unknown>
    // | { default: ComponentType<unknown>; }>) | (() => Promise<object>;
    component?: (
        () => Promise<React.ComponentClass<unknown, any> |
        React.FunctionComponent<unknown> |
        { default: React.ComponentType<unknown>; }>) | (() => Promise<object>) |
        React.LazyExoticComponent<React.FunctionComponent<{}>> |
        React.LazyExoticComponent<React.ComponentClass<any, any>> |
        React.LazyExoticComponent<React.ComponentClass>;
    // component?:
    //     React.FunctionComponent |
    //     React.FunctionComponent<any> |
    //     React.ComponentClass |
    //     React.ComponentClass<any, any> |
    //     Promise<any> |
    //     Loadable.LoadableComponent;
}

export interface IMeta {
    title: string;
    icon?: string;
    url?: string;
    type?: 'iframe' | '';
    belong?: string;
    hidden?: boolean;
}

const staticRoutes: IRoute[] = [
    // {
    //     path: '',
    //     meta: {
    //         title: '首页',
    //     },
    // },
    {
        path: '/login',
        meta: {
            title: '页面一',
            hidden: true,
        },
    },
    {
        path: '/login',
        meta: {
            title: '页面二',
            hidden: true,
        },
    },
    {
        path: '/login',
        meta: {
            title: '登入界面',
            hidden: true,
        },
    },
];

const asyncRoutes: IRoute[] = [
    // {
    //     path: '',
    //     meta: {
    //         title: '首页',
    //     },
    // },
    routeHome,
    routeDocument,
    routeUI,
    routeResearch,
];

// 拍平路由
function flattenRoutes(routes: IRoute[]): IRoute[] {
    const allRoutes: IRoute[] = [];

    function combineRoute(target: IRoute[]) {
        target.forEach((item) => {
            allRoutes.push(item);
            // debugger;

            if (Array.isArray(item.children) && item.children.length > 0) {
                combineRoute(item.children);
            }
        });
    }

    combineRoute(routes);
    return allRoutes;
}

function formatRoutes(routes: IRoute[], basePath: string = '') {
    routes.forEach((item) => {
        item.fullpath = basePath ? `${basePath}/${item.path}` :    item.path;

        if (Array.isArray(item.children) && item.children.length > 0) {
            formatRoutes(item.children, item.fullpath);
        }
    });
}

formatRoutes(asyncRoutes);

export {
    staticRoutes,
    asyncRoutes,
    flattenRoutes,
};
