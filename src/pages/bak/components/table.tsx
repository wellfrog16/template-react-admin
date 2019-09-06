import React from 'react';
// import axios, { AxiosInstance } from 'axios';
import { Table } from 'antd';
import { ColumnProps } from 'antd/es/table';

export interface ITableProps {
    name: string;
}

export interface IUser {
    key: string;
    name: string;
    age: number;
    address: string;
}

class Com extends React.Component<ITableProps> {
    public state = {
        myName: 'jack',
    };

    public componentDidMount() {
        const { myName } = this.state;
        const { name } = this.props;
        console.log(myName);
        console.log(name);
    }

    public render() {
        const dataSource: IUser[] = [
            {
                key: '1',
                name: '胡彦斌',
                age: 32,
                address: '西湖区湖底公园1号',
            },
            {
                key: '2',
                name: '胡彦祖',
                age: 42,
                address: '西湖区湖底公园1号',
            },
            {
                key: '3',
                name: '胡彦祖',
                age: 42,
                address: '西湖区湖底公园1号',
            },
            {
                key: '4',
                name: '胡彦祖',
                age: 42,
                address: '西湖区湖底公园1号',
            },
            {
                key: '5',
                name: '胡彦祖',
                age: 42,
                address: '西湖区湖底公园1号',
            },
            {
                key: '6',
                name: '胡彦祖',
                age: 42,
                address: '西湖区湖底公园1号',
            },
        ];

        const columns: ColumnProps<IUser>[] = [
            { title: '姓名', dataIndex: 'name', key: 'name' },
            { title: '年龄', dataIndex: 'age', key: 'age' },
            { title: '住址', dataIndex: 'address', key: 'address' },
        ];

        return (
            <div>
                <Table<IUser>
                    dataSource={dataSource}
                    columns={columns}
                    pagination={false}
                />
            </div>
        );
    }
}

export default Com;
