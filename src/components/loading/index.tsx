import React from 'react';
// import axios, { AxiosInstance } from 'axios';
// import { DatePicker } from 'antd';

interface ITest {
    aa: string;
}

const com: React.FC<ITest> = props => {
    console.log(props);
    return (
        <div className="main-wrapper">
            loading
        </div>
    );
};

export default com;
