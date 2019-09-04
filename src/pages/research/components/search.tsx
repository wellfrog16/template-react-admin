import React from 'react';
import { connect } from 'react-redux';
import { Button, Input } from 'antd';
// import { setTotal } from '@/redux/modules/table/action';
import api from '@/api/mock/table';

interface IState {
    myName: string;
    total: number;
}

// interface IProps {
//     setTotal: (payload: object) => void,
// }

interface IProps2 {
    total: number;
}

// interface IProps3 {
//     setTotal: (payload: object) => void,
//     total: number;
// }

class Com extends React.Component<IProps2> {
    public state: IState = {
        myName: 'jack',
        total: 111,
    };

    public componentDidMount() {
        const { myName } = this.state;
        console.log(myName);
        console.log(this.props);
        api.list();
    }

    // public componentDidUpdate(props: any, state: IState) {
    //     console.log(props, 'props');
    //     console.log(state, 'state');
    // }

    private handleClick(): void {
        // const { setTotal: aa, total } = this.props;
        const { total } = this.props;
        this.setState({
            total: 1000,
        });
        // aa({ total: 10 });
        console.log(this.props);
        console.log(total);
    }

    private handleChange({ target }: any): void {
        this.setState({
            total: +target.value,
        });
    }

    public render() {
        const { total } = this.state;
        return (
            <div>
                <Input placeholder="Basic usage" type="number" onChange={e => this.handleChange(e)} />
                <Button type="primary" onClick={() => this.handleClick()}>提交</Button>
                { total }
            </div>
        );
    }
}

const mapStateToProps = (state: any): IProps2 => ({
    total: state.test.total,
});

export default connect(
    mapStateToProps,
    // null,
    // { setTotal },
)(Com);
