import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Icon } from 'antd';
import { IRoute, asyncRoutes } from '@/router';

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

// interface IMenuProps {
//     routes: IRoute[];
// }

class Com extends React.Component {
    public componentDidMount() {
        console.log(9999999);
    }

    public render() {
        return (
            <Menu theme="dark" mode="inline">
                {
                    asyncRoutes.map(item => {
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

// const com: React.FC = () => {
//     // const { routes } = props;
//     return (
//         <Menu theme="dark" mode="inline">
//             {
//                 asyncRoutes.map((item) => {
//                     if (Array.isArray(item.children)) {
//                         return subMenu(item);
//                     }
//                     return menuItem(item);
//                 })
//             }
//         </Menu>
//     );
// };

export default Com;
