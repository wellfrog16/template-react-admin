import { IRoute } from '@/router';

const route: IRoute = {
    path: '/document',
    meta: {
        title: '文档',
    },
    children: [
        {
            path: 'index',
            component: () => import('@/pages/document'),
            meta: {
                title: '文档',
            },
        },
    ],
};

export default route;
