import { IRoute } from '@/router';

const route: IRoute = {
    path: '/research',
    meta: {
        title: '研究示例',
    },
    children: [
        {
            path: 'table',
            component: () => import('@/pages/research/table'),
            meta: {
                title: '基础表格和表单',
            },
        },
    ],
};

export default route;
