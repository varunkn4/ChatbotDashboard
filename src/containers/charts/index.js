import { connect } from 'react-redux';

import Charts from './Charts';

const mapStateToProps = state => ({
    number_of_users: state.Charts.number_of_users,
    user_engagement: state.Charts.user_engagement,
    conversation_by_duration:state.Charts.conversation_by_duration,
    usage_by_time: state.Charts.usage_by_time
});

const mapDispatchToProps = {
    // fetchChartData: (numberFilter,engagementFilter,durationFilter,usageFilter) => ({ type: 'DASHBOARD:CHART:CHART_DATA:FETCH', numberFilter,engagementFilter,durationFilter,usageFilter})
    fetchChartData: (data) => ({ type: 'DASHBOARD:CHART:CHART_DATA:FETCH', data})
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Charts);