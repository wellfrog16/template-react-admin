import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Layout } from 'antd';
import style from './index.module.scss';
import Home from '@/pages/home';
import Aside from '@/components/menu';

const { Header, Sider, Content } = Layout;
// import { HashRouter, Route, Switch } from 'react-router-dom';

const com: React.FC = () => {
    return (
        <Layout className={style.main}>
            <Sider className={style.sider}>
                <div className={style.logo}>Logo</div>
                <Aside />
            </Sider>
            <Layout>
                <Header className={style.header}>1</Header>
                <Content>
                    <Switch>
                        <Route path="/home" component={Home}/>
                    </Switch>
                </Content>
            </Layout>
        </Layout>
    );
};

export default com;
