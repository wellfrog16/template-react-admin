import { IRoute } from './index.d';
import Home from '@/pages/home';

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
                path: '/home11',
                component: Home,
                meta: {
                    title: '页面二',
                    hidden: true,
                },
            },
            {
                path: '/home12',
                component: Home,
                meta: {
                    title: '页面二',
                    hidden: true,
                },
            },
        ],
    },
    {
        path: '/home2',
        component: Home,
        meta: {
            title: '登入界面',
            hidden: true,
        },
    },
];

export {
    staticRoutes,
    asyncRoutes,
};
