import React from 'react';
import NProgress from 'nprogress';
// import PropTypes from 'prop-types';
// import axios, { AxiosInstance } from 'axios';
// import { DatePicker } from 'antd';

NProgress.configure({ showSpinner: false });

export default class Com extends React.Component {
    componentDidMount() {
        NProgress.start();
    }

    componentWillUnmount() {
        NProgress.done();
    }

    render() {
        return <div />;
    }
}
