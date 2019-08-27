import React from 'react';
// import Loadable from 'react-loadable';

// 路由
import routeHome from './modules/home';
import routeDocument from './modules/document';
import routeUI from './modules/ui';
import routeResearch from './modules/research';

/**
 * 路由接口
 *
 * @export
 * @interface IRoute
 */
export interface IRoute {
    name?: string; // 名称
    path: string; // 路径
    fullpath?: string | ''; // 内置完整路径，由计算获得
    meta: IMeta;
    children?: IRoute[]; // 子路由

    // 组件
    component?: React.LazyExoticComponent<React.FunctionComponent<{}>> |
    React.LazyExoticComponent<React.ComponentClass<any, any>> |
    React.LazyExoticComponent<React.ComponentClass>;
}

export interface IMeta {
    title: string; // 标题
    icon?: string; // icon图标
    url?: string; // 外链地址
    type?: 'iframe' | ''; // iframe类型
    belong?: string; // 此路由归属哪一个路由（左侧菜单高亮用）
    hidden?: boolean; // 是否在左侧菜单中隐藏当前路由
}

const staticRoutes: IRoute[] = [
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
];

// 异步路由
const asyncRoutes: IRoute[] = [
    routeHome,
    routeDocument,
    routeUI,
    routeResearch,
];

// 拍平路由（children）
function flattenRoutes(routes: IRoute[]): IRoute[] {
    const allRoutes: IRoute[] = [];

    function combineRoute(target: IRoute[]) {
        target.forEach(item => {
            allRoutes.push(item);
            // debugger;

            if (Array.isArray(item.children) && item.children.length > 0) {
                combineRoute(item.children);
            }
        });
    }

    combineRoute(routes);
    return allRoutes;
}

// 填充fullpath
function formatRoutes(routes: IRoute[], basePath: string = '') {
    routes.forEach(item => {
        item.fullpath = basePath ? `${basePath}/${item.path}` : item.path;

        if (Array.isArray(item.children) && item.children.length > 0) {
            formatRoutes(item.children, item.fullpath);
        }
    });
}

formatRoutes(asyncRoutes);

export {
    staticRoutes,
    asyncRoutes,
    flattenRoutes,
};
