import React from 'react';
import { IRoute } from '@/router';

const route:IRoute = {
    path: '',
    meta: {
        title: '主页',
    },
    children: [
        {
            path: '',
            component: React.lazy(() => import('@/pages/home')),
            meta: {
                title: '主页',
            },
        },
    ],
};

export default route;
