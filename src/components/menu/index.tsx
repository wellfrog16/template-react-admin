import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Icon } from 'antd';
import { asyncRoutes } from '@/router';
import { IRoute } from '@/router/index.d';

const menuItem = (item:IRoute) => (
    <Menu.Item key={item.path}>
        <Link to={item.path} replace={true}><Icon type="user" />{ item.meta.title }</Link>
    </Menu.Item>
);

const subMenu = (item:IRoute) => {
    const title = (
        <span><Icon type="user" />{ item.meta.title }</span>
    );

    return (
        <Menu.SubMenu key={item.path} title={title}>
            {
                Array.isArray(item.children) && item.children.map((item1) => {
                    if (Array.isArray(item1.children) && item1.children.length > 0) {
                        return subMenu(item1);
                    }
                    return menuItem(item1);
                })
            }
        </Menu.SubMenu>
    );
};

const com: React.FC = () => {
    return (
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            {
                asyncRoutes.map((item) => {
                    if (Array.isArray(item.children)) {
                        return subMenu(item);
                    }
                    return menuItem(item);
                })
            }
        </Menu>
    );
};

export default com;
