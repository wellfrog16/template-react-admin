import React from 'react';
import Home from '@/pages/home';

// 路由
import routeUI from './modules/ui';
import routeResearch from './modules/research';

export interface IRoute {
    name?: string;
    path: string;
    fullpath?: string;
    meta: IMeta;
    component?: React.FunctionComponent | React.FunctionComponent<any> | React.ComponentClass | React.ComponentClass<any, any>;
    children?: IRoute[];
}

export interface IMeta {
    title: string;
    icon?: string;
    url?: string;
    type?: 'iframe' | '';
    belong?: string;
    hidden?: boolean;
}

const staticRoutes:IRoute[] = [
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

const asyncRoutes:IRoute[] = [
    // {
    //     path: '',
    //     meta: {
    //         title: '首页',
    //     },
    // },
    {
        path: '/home',
        component: Home,
        meta: {
            title: '页面一',
            hidden: true,
        },
    },
    {
        path: '/home123',
        meta: {
            title: '页面无',
            hidden: true,
        },
    },
    {
        path: '/home1',
        meta: {
            title: '页面二',
            hidden: true,
        },
        children: [
            {
                path: 'home11',
                component: Home,
                meta: {
                    title: '页面二',
                    hidden: true,
                },
            },
            {
                path: 'home12',
                component: Home,
                meta: {
                    title: '页面二',
                    hidden: true,
                },
            },
        ],
    },
    routeUI,
    routeResearch,
];

// 拍平路由
function flattenRoutes(routes:IRoute[]):IRoute[] {
    const allRoutes:IRoute[] = [];

    function combineRoute(target:IRoute[]) {
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

function formatRoutes(routes:IRoute[], basePath:string = '') {
    routes.forEach((item) => {
        item.fullpath = basePath ? `${basePath}/${item.path}` : item.path;

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
