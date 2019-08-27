import React from 'react';
import { IRoute } from '@/router';

const route: IRoute = {
    path: '/ui',
    meta: {
        title: '组件',
    },
    children: [
        {
            path: 'table',
            meta: {
                title: '表格',
            },
            children: [
                {
                    path: 'complex',
                    component: React.lazy(() => import('@/pages/home')),
                    meta: {
                        title: '综合表格',
                    },
                },
                {
                    path: 'lazy',
                    component: React.lazy(() => import('@/pages/home')),
                    meta: {
                        title: '滚动加载',
                    },
                },
            ],
        },
    ],
};

export default route;
