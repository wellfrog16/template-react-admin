import React from 'react';
import { connect } from 'react-redux';
import { Pagination } from 'antd';

interface IProps {
    total: number;
}

class Com extends React.Component<IProps> {
    public state = {
        myName: 'jack',
    };

    public componentDidMount() {
        const { myName } = this.state;
        console.log(myName);
    }

    public render() {
        console.log(this.props, 999);
        const { total } = this.props;
        return (
            <div>
                <Pagination total={total} showTotal={() => total} />
            </div>
        );
    }
}

const mapStateToProps = (state: any): IProps => ({
    total: state.test.total,
});

export default connect(
    mapStateToProps,
)(Com);
