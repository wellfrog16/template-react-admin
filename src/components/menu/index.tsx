import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Icon } from 'antd';
import { IRoute } from '@/router';

const menuItem = (item:IRoute, bastPath:string = '') => {
    const path:string = bastPath ? `${bastPath}/${item.path}` : item.path;
    console.log(path);
    return (
        <Menu.Item key={path}>
            <Link to={path} replace={true}><Icon type="user" />{ item.meta.title }</Link>
        </Menu.Item>
    );
};

const subMenu = (item:IRoute, bastPath:string = '') => {
    const title = (
        <span><Icon type="user" />{ item.meta.title }</span>
    );
    const path:string = bastPath ? `${bastPath}/${item.path}` : item.path;
    return (
        <Menu.SubMenu key={path} title={title}>
            {
                Array.isArray(item.children) && item.children.map((item1) => {
                    if (Array.isArray(item1.children) && item1.children.length > 0) {
                        return subMenu(item1, path);
                    }
                    return menuItem(item1, path);
                })
            }
        </Menu.SubMenu>
    );
};

interface IMenuProps {
    routes: IRoute[];
}

const com: React.FC<IMenuProps> = (props) => {
    const { routes } = props;
    return (
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            {
                routes.map((item) => {
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
