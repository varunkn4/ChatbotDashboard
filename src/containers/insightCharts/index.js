import { connect } from 'react-redux';

import InsightCharts from './InsightCharts';

const mapStateToProps = state => ({
    miss_rate: state.InsightCharts.miss_rate,
    chat_intents: state.InsightCharts.chat_intents,
    unidentified_statements:state.InsightCharts.unidentified_statements,
    statement_list:state.InsightCharts.statement_list
});

const mapDispatchToProps = {
    fetchInsightData: (data) => ({ type: 'DASHBOARD:INSIGHT:INSIGHT_DATA:FETCH', data}),
    fetchUnidentifiedList: (data) => ({ type: 'DASHBOARD:INSIGHT:UNIDENTIFIED_DATA:FETCH', data})
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(InsightCharts);