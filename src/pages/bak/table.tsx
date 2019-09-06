import React from 'react';
import { Pagination } from 'antd';
// import api from '@/api/mock/table';
import XTable from './components/table';
import XSearch from './components/search';

class Com extends React.Component {
    public state = {
        myName: '父组件',
    };

    public componentDidMount() {
        const { myName } = this.state;
        console.log(myName);
        // api.list();
    }

    private renderPagination() {
        console.log(this);
        const total = 100;
        return (
            <div>
                <Pagination total={total} showTotal={() => total} />
            </div>
        );
    }

    public render() {
        return (
            <div className="main-wrapper">
                <XSearch />
                <XTable name="1000" />
                { this.renderPagination() }
            </div>
        );
    }
}

export default Com;
