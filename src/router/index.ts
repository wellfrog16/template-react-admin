interface IRoute {
    name?: string;
    path: string;
    meta: IMeta;
    children?: IRoute[];
}

interface IMeta {
    title?: string;
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

export default staticRoutes;
