import React from 'react';
// import axios, { AxiosInstance } from 'axios';
import XTable from './components/table';
import XSearch from './components/search';
import XPagination from './components/pagination';

class Com extends React.Component {
    public state = {
        myName: '父组件',
    };

    public componentDidMount() {
        const { myName } = this.state;
        console.log(myName);
    }

    public render() {
        return (
            <div className="main-wrapper">
                <XSearch />
                <XTable name="1000" />
                <XPagination />
            </div>
        );
    }
}

export default Com;
