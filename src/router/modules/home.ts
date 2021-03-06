import React from 'react';
import { IRoute } from '@/router';

const route: IRoute = {
    path: '/layout',
    meta: {
        title: '主页',
    },
    children: [
        {
            path: 'page1',
            component: React.lazy(() => import('@/pages/home')),
            meta: {
                title: '主页',
            },
        },
        {
            path: 'page2',
            component: React.lazy(() => import('@/pages/home')),
            meta: {
                title: '主页',
            },
        },
    ],
};

export default route;
