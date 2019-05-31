import React, { Component } from 'react';
import LineChart from '../../components/lineChart/LineChart';
import FunnelChart from '../../components/funnelChart/FunnelChart';
import DonutChart from '../../components/donutChart/DonutChart';
import Dropdown from '../../components/dropdown/Dropdown';
import BarChart from '../../components/barChart/BarChart';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

class Charts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentSelection: 'default'
        };
    }
    componentWillMount(){        
        this.props.fetchChartData({type: 'All', data: {value: 'one'}});
    }

    handleChange(type, value) {
        this.props.fetchChartData({type: type, data: value});
    }

    render(){
        const { 
            number_of_users, 
            user_engagement, 
            conversation_by_duration, 
            usage_by_time
        } = this.props;
        return(
            <div className="chartWrapper">
                <div className="row m-0">
                    <div className="col-md-6 col-lg-6 col-sm-12 col-xs-12 p-2 pt-0 pb-0">
                        <Card>
                            <div className="cardTitle">
                                <div className="row m-0">
                                    <div className="col-8 p-0">
                                        <label>Number of Users</label>
                                    </div>
                                    <div className="col-4 p-0">
                                        <Dropdown
                                            filterSelection="numberOfUsers"
                                            handleChange={(selectedItem) => { this.handleChange('numberOfUsers', selectedItem) }}
                                        />
                                    </div>
                                </div>
                            </div>
                            <CardContent>
                                <LineChart data={number_of_users}/>
                            </CardContent>
                        </Card>
                    </div>
                    <div className="col-md-6 col-lg-6 col-sm-12 col-xs-12 p-2 pt-0 pb-0">
                        <Card>
                            <div className="cardTitle">
                                <div className="row m-0">
                                    <div className="col-8 p-0">
                                        <label>User Engagement</label>
                                    </div>
                                    <div className="col-4 p-0">
                                        <Dropdown
                                            filterSelection="userEngagement"
                                            handleChange={(selectedItem) => { this.handleChange('userEngagement', selectedItem) }}
                                        />
                                    </div>
                                </div>
                            </div>
                            <CardContent>
                                <FunnelChart data = {user_engagement}/>
                            </CardContent>
                        </Card>
                    </div>
                </div>
                <div className="row m-0">
                    <div className="col-md-6 col-lg-6 col-sm-12 col-xs-12 p-2 pt-0 pb-0">
                        <Card>
                            <div className="cardTitle">
                                <div className="row m-0">
                                    <div className="col-8 p-0">
                                        <label>Conversations by Duration</label>
                                    </div>
                                    <div className="col-4 p-0">
                                        <Dropdown
                                            filterSelection="conversationDuration"
                                            handleChange={(selectedItem) => { this.handleChange('conversationDuration', selectedItem) }}
                                        />
                                    </div>
                                </div>
                            </div>
                            <CardContent>
                                <DonutChart data={conversation_by_duration}/>
                            </CardContent>
                        </Card>
                    </div>
                    <div className="col-md-6 col-lg-6 col-sm-12 col-xs-12 p-2 pt-0 pb-0">
                        <Card>
                            <div className="cardTitle">
                                <div className="row m-0">
                                    <div className="col-8 p-0">
                                        <label>Chatbot Usage by Time of Day</label>
                                    </div>
                                    <div className="col-4 p-0">
                                        <Dropdown
                                            filterSelection="usageTime"
                                            handleChange={(selectedItem) => { this.handleChange('usageTime', selectedItem) }}
                                        />
                                    </div>
                                </div>
                            </div>
                            <CardContent>
                                <BarChart data={usage_by_time}/>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        );
    }
}

export default Charts;