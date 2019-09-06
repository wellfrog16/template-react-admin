import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { Button, Input } from 'antd';
import { setTotal } from '@/redux/modules/table/action';
// import api from '@/api/mock/table';
import { IApplicationState } from '@/redux';

interface IState {
    myName: string;
    // total: number;
}

interface IProps2 {
    qqq: (total: number) => Promise<number>,
}

interface IProps {
    total: number;
}

// interface IProps3 {
//     setTotal: (payload: object) => void,
//     total: number;
// }
type AllProps = IProps & IProps2;

class Com extends React.Component<AllProps> {
    constructor(props: AllProps) {
        super(props);

        console.log(12345);
        // this.state = {
        //     myName: 'jack',
        //     total: 111,
        // };
    }

    public state: IState = {
        myName: 'jack',
        // total: 111,
    };

    public componentDidMount() {
        const { myName } = this.state;
        console.log(myName);
        // api.list();
    }

    // public componentDidUpdate(props: any, state: IState) {
    //     console.log(props, 'props');
    //     console.log(state, 'state');
    // }

    private handleClick(): void {
        const { qqq, total } = this.props;
        // const { total } = this.props;
        // this.setState({
        //     total: 1000,
        // });
        const x = qqq(110);
        console.log(typeof qqq(111));
        x.then(rr => {
            console.log(rr, 11112222);
        });
        console.log(this.props);
        console.log(`total=${total}`);
    }

    // private handleChange({ target }: any): void {
    //     this.setState({
    //         total: +target.value,
    //     });
    // }

    public render() {
        const { total } = this.props;
        return (
            <div>
                {/* <Input placeholder="Basic usage" type="number" onChange={e => this.handleChange(e)} /> */}
                <Input placeholder="Basic usage" type="number" />
                <Button type="primary" onClick={() => this.handleClick()}>提交</Button>
                { total }
            </div>
        );
    }
}

const mapStateToProps = ({ test }: IApplicationState) => ({
    total: test.total,
});

const mapDispatchToProps = (dispatch: Dispatch) => {
    console.log(99);
    return {
        qqq(total: number) {
            return new Promise<number>(resolve => {
                dispatch(setTotal(total));
                resolve(111000000000000000000);
            });
        },
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Com);
