import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Layout } from 'antd';
import style from './index.module.scss';
import Home from '@/pages/home';
import Aside from '@/components/menu';
import { asyncRoutes } from '@/router';

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
                    <Switch>
                        <Route path="/home" component={Home}/>
                    </Switch>
                </Content>
            </Layout>
        </Layout>
    );
};

export default com;
