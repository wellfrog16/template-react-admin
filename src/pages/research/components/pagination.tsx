import React from 'react';
import { connect } from 'react-redux';
import { Pagination } from 'antd';
import { IApplicationState } from '@/redux';

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

const mapStateToProps = ({ test }: IApplicationState) => ({
    total: test.total,
});

export default connect(
    mapStateToProps,
)(Com);
