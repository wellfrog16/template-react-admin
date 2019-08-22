import React from 'react';
// import axios, { AxiosInstance } from 'axios';
import XTable from './components/table';
import XSearch from './components/search';
import XPagination from './components/pagination';

export interface IUser {
    key: string;
    name: string;
    age: number;
    address: string;
}

class Com extends React.Component {
    public state = {
        myName: '父组件',
    };

    public componentDidMount() {
        console.log(this.state.myName);
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
