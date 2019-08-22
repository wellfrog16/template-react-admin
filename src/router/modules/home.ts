import { IRoute } from '@/router';

const route:IRoute = {
    path: '/home',
    meta: {
        title: '主页',
    },
    children: [
        {
            path: 'index',
            component: () => import('@/pages/home'),
            meta: {
                title: '主页',
            },
        },
    ],
};

export default route;
