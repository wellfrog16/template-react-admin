import { IRoute } from '@/router';
import Table from '@/pages/research/table';

const route:IRoute = {
    path: '/research',
    meta: {
        title: '研究示例',
    },
    children: [
        {
            path: 'table',
            component: Table,
            meta: {
                title: '基础表格和表单',
            },
        },
    ],
};

export default route;
