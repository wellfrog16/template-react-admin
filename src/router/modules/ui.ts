import { IRoute } from '@/router';
import Home from '@/pages/home';

const route:IRoute = {
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
                    component: Home,
                    meta: {
                        title: '综合表格',
                    },
                },
                {
                    path: 'lazy',
                    component: Home,
                    meta: {
                        title: '滚动加载',
                    },
                },
            ],
        },
    ],
};

export default route;
