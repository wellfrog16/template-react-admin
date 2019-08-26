import React from 'react';
// import { Route, Switch } from 'react-router-dom';
import { Layout } from 'antd';
import style from './index.module.scss';
// import Page1 from '../../page1';
// import Page2 from '../../page2';
// import { asyncRoutes } from '@/router';
import Aside from '@/components/menu';
import RouterView from '@/router/router-view';

const { Header, Sider, Content } = Layout;

// class Com extends React.Component {
//     public render() {
//         return (
//             <Layout className={style.main}>
//                 <Sider className={style.sider}>
//                     <div className={style.logo}>Logo</div>
//                     {/* <Menu theme="dark" mode="inline">
//                         <Menu.Item key="aaa">
//                             <Link to="/layout/page1" replace={true}><Icon type="user" />1111</Link>
//                         </Menu.Item>
//                         <Menu.Item key="bbb">
//                             <Link to="/layout/page2" replace={true}><Icon type="user" />22222</Link>
//                         </Menu.Item>
//                     </Menu> */}
//                     <Aside />
//                 </Sider>
//                 <Layout>
//                     <Header className={style.header}>1</Header>
//                     <Content className={style.content}>
//                         {/* <Switch>
//                             <Route exact={true} path="/layout/page2" component={Page2}/>
//                             <Route exact={true} path="/layout/page1" component={Page1}/>
//                         </Switch> */}

//                         {/* { console.log(this) }
//                         { console.log(this.props) }
//                         { console.log(this.props.children) }
//                         { this.props.children } */}
//                         <RouterView />
//                     </Content>
//                 </Layout>
//             </Layout>
//         );
//     }
// }

const com: React.FC = () => (
    <Layout className={style.main}>
        <Sider className={style.sider}>
            <div className={style.logo}>Logo</div>
            <Aside />
            {/* <Aside routes={asyncRoutes} /> */}
        </Sider>
        <Layout>
            <Header className={style.header}>1</Header>
            <Content className={style.content}>
                <RouterView />
            </Content>
        </Layout>
    </Layout>
);

export default com;
