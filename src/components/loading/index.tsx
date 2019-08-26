import React from 'react';
import { Spin } from 'antd';
import style from './index.module.scss';

const com: React.FC = () => (
    <div className={style.main}>
        <Spin />
    </div>
);

export default com;
