import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from '@/redux';
import 'nprogress/nprogress.css';
// import 'antd/es/locale/zh_CN';
// import moment from 'moment';
import App from './app';
import '@/assets/style/main.scss';

console.log(store);

// moment.locale('zh-cn');

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
