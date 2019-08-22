import React from 'react';
// import axios, { AxiosInstance } from 'axios';
import { Pagination } from 'antd';

class Com extends React.Component {
    public state = {
        myName: 'jack',
    };

    public componentDidMount() {
        console.log(this.state.myName);
    }

    public render() {
        return (
            <div>
                <Pagination total={50} />
            </div>
        );
    }
}

export default Com;
