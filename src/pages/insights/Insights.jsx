import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Topbar from '../../containers/topbar/Topbar';
import SideNav from '../../containers/sideNav/SideNav';
import Dropdown from '../../components/dropdown/Dropdown'
import registry from 'app-registry';

import InsightCharts from '../../containers/insightCharts'

class Insights extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filterValue: 'one'
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(value) {   
        this.setState({ filterValue: value }, function() {});
    }
    render() {
        return(
            <div className="innerContent">
                <Topbar />  
                <SideNav />
                <div className="chartArea">
                   <div className="pageTitle">
                        <div className="row m-0">
                            <div className="col-10 p-0">
                                <h4 className="mainTitle">Chat Insights</h4>
                            </div>
                            <div className="col-2 p-0 pr-1 right">
                                <Dropdown
                                    handleChange={(dropdownSelection) => { this.handleChange(dropdownSelection.value) }}                                    
                                />
                            </div>               
                        </div>         
                    </div>
                     <div className="chartSection mt-4">
                       <InsightCharts filterSelection={this.state.filterValue}/>
                    </div>
                </div>                       
            </div>
        );
    }
}

Insights.contextTypes = {
    router: PropTypes.object.isRequired
}

export default Insights;