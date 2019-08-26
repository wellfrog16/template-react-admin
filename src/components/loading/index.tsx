import React from 'react';
import { LoadingComponentProps } from 'react-loadable';
import NProgress from 'nprogress';
// import PropTypes from 'prop-types';
// import axios, { AxiosInstance } from 'axios';
// import { DatePicker } from 'antd';

NProgress.configure({ showSpinner: false });

export default class Com extends React.Component<LoadingComponentProps> {
    componentDidMount() {
        NProgress.start();
    }

    componentWillUnmount() {
        NProgress.done();
    }
    // console.log(props);
    // const { error, timedOut, pastDelay } = props;
    // if (error) {
    //     NProgress.done();
    //     // return <div>Error! <button onClick={props.retry}>Retry</button></div>;
    // } else if (timedOut) {
    //     NProgress.done();
    //     // return <div>Taking a long time... <button onClick={props.retry}>Retry</button></div>;
    // } else if (pastDelay) {
    //     NProgress.start();
    //     // return <div>Loading...</div>;
    // } else {
    //     NProgress.done();
    //     // return null;
    // }

    render() {
        return (
            <div className="main-wrapper">
                loading
            </div>
        );
    }
}
