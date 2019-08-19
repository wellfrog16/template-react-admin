import React from 'react';
// import { Link } from 'react-router-dom';
import { Layout, Menu, Icon } from 'antd';
import style from './index.module.scss';

const { Header, Sider, Content } = Layout;
// import { HashRouter, Route, Switch } from 'react-router-dom';

const com: React.FC = () => {
    return (
        <Layout className={style.main}>
            <Sider className={style.sider}>
                <div className={style.logo}>Logo</div>
                <Menu mode="inline" defaultSelectedKeys={['1']}>
                    <Menu.Item key="1">
                        <Icon type="user" />
                        <span>nav 1</span>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Icon type="video-camera" />
                        <span>nav 2</span>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <Icon type="upload" />
                        <span>nav 3</span>
                    </Menu.Item>
            </Menu>
            </Sider>
            <Layout>
                <Header className={style.header}>1</Header>
                <Content>22</Content>
            </Layout>
        </Layout>
    );
};

export default com;
