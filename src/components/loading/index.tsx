import React from 'react';
import NProgress from 'nprogress';

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
