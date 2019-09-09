import React from 'react';
// import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { Button, Table, Pagination } from 'antd';
import { ColumnProps } from 'antd/es/table';
// import api from '@/api/mock/table';
// import XSearch from './components/search';
import dataSource, { IUser } from './data';
import { IApplicationState } from '@/redux';
import { asyncSetTotal2 } from '@/redux/modules/research/table/action';

interface IState {
    total: number;
}

// type Props = {
//     state: IState
// };

interface ITest {
    asyncSetTotal: (total: number) => Promise<number>,
}

type allProps = IState & ITest;

class Com extends React.Component<allProps> {
    public state = {
        myName: '父组件',
    };

    public componentDidMount() {
        const { myName } = this.state;
        console.log(myName);
        // api.list();
    }

    private handleClick() {
        console.log(this);
        const { asyncSetTotal: qq } = this.props;
        qq(11).then(rr => {
            console.log(rr);
        });
    }

    private renderSearch() {
        return (
            <div>
                <Button type="primary" onClick={() => this.handleClick()}>提交</Button>
            </div>
        );
    }

    private renderTable() {
        console.log(this, '占位');
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

    private renderPagination() {
        console.log(this.props, 'props');
        console.log(this, 'this');
        const { total } = this.props;
        // const { total } = state;
        return (
            <div>
                <Pagination total={total} showTotal={() => total} />
            </div>
        );
    }

    public render() {
        return (
            <div className="main-wrapper">
                { this.renderSearch() }
                {/* <XSearch /> */}
                {/* <XTable name="1000" /> */}
                { this.renderTable() }
                { this.renderPagination() }
            </div>
        );
    }
}

const mapStateToProps = ({ research }: IApplicationState) => ({
    total: research.table.total,
});

// const mapDispatchToProps = (dispatch: Dispatch) => {
//     return {
//         asyncSetTotal() {
//             dispatch(asyncSetTotal(11));
//         },
//     };
// };

const mapDispatchToProps = (dispatch: any) => ({
    asyncSetTotal: () => dispatch(asyncSetTotal2(11)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Com);
