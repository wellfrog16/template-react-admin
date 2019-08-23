import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu, Icon } from 'antd';
import style from './index.module.scss';
// import { asyncRoutes } from '@/router';
// import Aside from '@/components/menu';
// import RouterView from '@/router/router-view';

const { Header, Sider, Content } = Layout;

class Com extends React.Component {
    public render() {
        return (
            <Layout className={style.main}>
                <Sider className={style.sider}>
                    <div className={style.logo}>Logo</div>
                    <Menu theme="dark" mode="inline">
                        <Menu.Item key="aaa">
                            <Link to="/layout/page1" replace={true}><Icon type="user" />1111</Link>
                        </Menu.Item>
                        <Menu.Item key="bbb">
                            <Link to="/layout/page2" replace={true}><Icon type="user" />22222</Link>
                        </Menu.Item>
                    </Menu>
                    {/* <Aside routes={asyncRoutes} /> */}
                </Sider>
                <Layout>
                    <Header className={style.header}>1</Header>
                    <Content className={style.content}>
                        { this.props.children }
                        {/* <RouterView /> */}
                    </Content>
                </Layout>
            </Layout>
        );
    }
}

// const com: React.FC = () => {
//     return (
//         <Layout className={style.main}>
//             <Sider className={style.sider}>
//                 <div className={style.logo}>Logo</div>
//                 <Aside routes={asyncRoutes} />
//             </Sider>
//             <Layout>
//                 <Header className={style.header}>1</Header>
//                 <Content className={style.content}>
//                     { this.props.children }
//                     {/* <RouterView /> */}
//                 </Content>
//             </Layout>
//         </Layout>
//     );
// };

export default Com;
