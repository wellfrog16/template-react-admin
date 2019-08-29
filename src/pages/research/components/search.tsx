import React from 'react';
import { connect } from 'react-redux';
import { Button, Input } from 'antd';
import { setTotal } from '@/redux/action/test';
import api from '@/api/mock/table';

interface IState {
    myName: string;
    total: number;
}

interface IProps {
    setTotal: Function,
}

class Com extends React.Component {
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
        // const { setTotal } = this.props;
        this.setState({
            total: 1000,
        });
        // setTotal(10);
        console.log(this.props);
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

const mapDispatchToProps: IProps = {
    setTotal,
};

export default connect(
    null,
    mapDispatchToProps,
)(Com);
