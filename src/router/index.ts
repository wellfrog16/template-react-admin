import React from 'react';
import Home from '@/pages/home';

// 路由
import routeUI from './modules/ui';
import routeResearch from './modules/research';

export interface IRoute {
    name?: string;
    path: string;
    meta: IMeta;
    component?: React.FunctionComponent;
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
        path: '/home1',
        component: Home,
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

export {
    staticRoutes,
    asyncRoutes,
};
