import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Icon } from 'antd';
import { IRoute } from '@/router';

interface IMenuProps {
    routes: IRoute[];
}

const menuItem = (item: IRoute) => {
    const fullpath: string = item.fullpath || '';
    console.log(item.fullpath);
    return (
        <Menu.Item key={fullpath}>
            <Link to={fullpath} replace>
                <Icon type="user" />
                {item.meta.title}
            </Link>
        </Menu.Item>
    );
};

const subMenu = (item: IRoute) => {
    const title = (
        <span>
            <Icon type="user" />
            {item.meta.title}
        </span>
    );
    const path: string = item.fullpath || '';
    return (
        <Menu.SubMenu key={path} title={title}>
            {
                Array.isArray(item.children) && item.children.map(item1 => {
                    if (Array.isArray(item1.children) && item1.children.length > 0) {
                        return subMenu(item1);
                    }
                    return menuItem(item1);
                })
            }
        </Menu.SubMenu>
    );
};

class Com extends React.Component<IMenuProps> {
    public componentDidMount() {
        console.log(9999999);
    }

    public render() {
        const { routes } = this.props;
        return (
            <Menu mode="inline">
                {
                    routes.map(item => {
                        if (Array.isArray(item.children)) {
                            return subMenu(item);
                        }
                        return menuItem(item);
                    })
                }
            </Menu>
        );
    }
}

export default Com;
