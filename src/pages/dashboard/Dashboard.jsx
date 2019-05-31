import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Topbar from '../../containers/topbar/Topbar';
import SideNav from '../../containers/sideNav/SideNav';
import Charts from '../../containers/charts/';
import Button from '@material-ui/core/Button';
import registry from 'app-registry';
import { connect } from 'react-redux';

class Dashboard extends Component {  
    constructor(props) {
        super(props);
        this.state = {
        };
        this.downloadTranscipts = this.downloadTranscipts.bind(this);
    }  
    componentWillMount(){
        const token = registry.get('storage').getItem('token');
        if (token === null) {
          this.context.router.history.push('/login');
        }
        
    }
    downloadTranscipts(){
        this.props.downloadIntents();
    }
    render(){
        return(
            <div className="innerContent">
                <Topbar />  
                <SideNav />        
                <div className="chartArea">
                   <div className="pageTitle">
                        <div className="row m-0">
                            <div className="col-8 p-0">
                                <h4 className="mainTitle">Mekbot Dashboard</h4>
                            </div>
                            <div className="col-4 p-0 right">
                                <Button variant="contained" size="small" color="primary" className="mr-2" onClick={this.downloadTranscipts}>
                                    Download Chatscripts
                                </Button>
                            </div>               
                        </div>         
                    </div>
                     <div className="chartSection mt-4">
                        <Charts />
                    </div>
                </div>               
            </div>            
        );
    }
}

Dashboard.contextTypes = {
    router: PropTypes.object.isRequired
}

const mapDispatchToProps = {
    downloadIntents: (data) => ({ type: 'DASHBOARD:INSIGHT:DOWNLOAD_INTENTS:FETCH', data})
};
const mapStateToProps = state => ({});

//export default Dashboard;

//export default {mapDispatchToProps}(Dashboard);

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Dashboard);