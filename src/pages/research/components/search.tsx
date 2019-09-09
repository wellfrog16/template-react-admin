import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { Button, Input } from 'antd';
import { setTotal, setTotal2 } from '@/redux/modules/table/action';
// import api from '@/api/mock/table';
import { IApplicationState } from '@/redux';

interface IState {
    myName: string;
    // total: number;
}

interface IProps2 {
    qqq: (total: number) => Promise<number>,
    setTotal2: any,
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
        const { qqq, total, setTotal2: tt } = this.props;
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
        console.log(tt, 22223423424323411);
        tt();
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

const mapDispatchToProps = (dispatch: Dispatch, getState: any) => {
    console.log(99);
    console.log(getState);
    return {
        qqq(total: number) {
            dispatch(setTotal(9999));
            console.log(getState, 'wwwwwwwwwwwwwwwwwwwwwwwwwwwwww');
            return new Promise<number>(resolve => {
                setTimeout(() => {
                    dispatch(setTotal(total));
                    resolve(111000000000000000000);
                }, 3000);
            });
        },
        setTotal2() {
            dispatch(setTotal2(11));
        },
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Com);
