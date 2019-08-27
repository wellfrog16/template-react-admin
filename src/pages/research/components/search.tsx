import React from 'react';
// import axios, { AxiosInstance } from 'axios';
// import { Pagination } from 'antd';
import api from '@/api/mock/table';

class Com extends React.Component {
    public state = {
        myName: 'jack',
    };

    public componentDidMount() {
        const { myName } = this.state;
        console.log(myName);
        api.list();
    }

    public render() {
        return (
            <div>搜索</div>
        );
    }
}

export default Com;
