import React from 'react';
import { Layout } from 'antd';
import style from './index.module.scss';
import { asyncRoutes } from '@/router';
import Aside from '@/components/menu';
import RouterView from '@/router/router-view';

const { Header, Sider, Content } = Layout;

const com: React.FC = () => {
    return (
        <Layout className={style.main}>
            <Sider className={style.sider}>
                <div className={style.logo}>Logo</div>
                <Aside routes={asyncRoutes} />
            </Sider>
            <Layout>
                <Header className={style.header}>1</Header>
                <Content className={style.content}>
                    <RouterView />
                </Content>
            </Layout>
        </Layout>
    );
};

export default com;
