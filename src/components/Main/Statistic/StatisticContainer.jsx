import React from 'react';
import { connect } from 'react-redux';
import Statistic from './Statistic';

class StatisticContainer extends React.Component {
    render() {
        return <Statistic {...this.props} />
    }
}

const mapStateToProps = (state) => ({
    statistic: state.homePage.statistic,
});

export default connect(mapStateToProps, null)(StatisticContainer);