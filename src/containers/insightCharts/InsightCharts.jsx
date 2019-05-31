import React, { Component } from 'react';
import PictorialChart from '../../components/pictorialChart/PictorialChart';
import GaugeChart from '../../components/gaugeChart/GaugeChart';
import TableElement from '../../components/tableElement/TableElement';
import Modal from '@material-ui/core/Modal';
import PaperList from '../../components/paperList/PaperList';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

class Charts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            rowID: '',
            rowUidentified: '',
            rowMissRate: '',

        };
        this.invokeUnidentifiedList = this.invokeUnidentifiedList.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }
    componentWillMount(){        
        this.props.fetchInsightData({data:'one'});
    }
    componentWillReceiveProps = (nextProps) => {
        if (nextProps.filterSelection !== this.props.filterSelection) {
            this.props.fetchInsightData({data:nextProps.filterSelection});
        }
    }
    invokeUnidentifiedList = (row) => {
        this.setState({ 
            open: true,
            rowID: row.ConversationId,
            rowUidentified: row.UnIdentified,
            rowMissRate: row.MissRate,

        });
        this.props.fetchUnidentifiedList(row);
    }
   
    handleClose(){
        this.setState({ open: false });
    }
    render(){
        const { 
            miss_rate, 
            chat_intents, 
            unidentified_statements,
            statement_list
        } = this.props;
        return(
            <div className="chartWrapper">                    
                <div className="row m-0">                  
                    <div className="col-md-6 col-lg-4 col-sm-12 col-xs-12 p-2 pt-0 pb-0">
                        <Card>
                            <div className="cardTitle">
                                <div className="row m-0">
                                    <div className="col-10 p-0">
                                        <label>Message Miss Rate</label>
                                    </div>
                                </div>
                            </div>
                            <CardContent>
                                <GaugeChart data={miss_rate}/>
                            </CardContent>
                        </Card>       
                    </div>
                    <div className="col-md-6 col-lg-8 col-sm-12 col-xs-12 p-2 pt-0 pb-0">
                        <Card>
                            <div className="cardTitle">
                                <div className="row m-0">
                                    <div className="col-10 p-0">
                                        <label>Top Chat Intents</label>
                                    </div>
                                </div>
                            </div>
                            <CardContent>
                                <PictorialChart data={chat_intents}/>
                            </CardContent>
                        </Card>
                    </div>
                    <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12 p-2 pt-0 pb-0">
                        <Card>
                            <div className="cardTitle">
                                <div className="row m-0">
                                    <div className="col-10 p-0">
                                        <label>Unidentified Statements</label>
                                    </div>
                                </div>
                            </div>
                            <CardContent>
                                <TableElement data={unidentified_statements} invokeUnidentifiedList={this.invokeUnidentifiedList}/>
                            </CardContent>
                        </Card>
                    </div>
                </div>  
                <div className="row m-0 mt-4">
                    <Modal open={this.state.open} onClose={this.handleClose}>
                        <div className="modalContent p-3">
                            <div className="modalHeader">
                                <div className="row m-0">
                                    <div className="col-12">
                                        <label>List of Unidentified Intents</label>
                                    </div>
                                </div>                            
                            </div>
                            <div className="modalBody">
                                <div className="row m-0 mt-4">
                                    <div className="col-12">
                                        <div className="row m-0">
                                            <div className="col p-0 pl-1 pr-1">
                                                <div className="modalStat themeGreen">
                                                    <p className="statHeader">Conversation ID</p>
                                                    <label htmlFor="">{this.state.rowID}</label>
                                                </div>
                                            </div>
                                            <div className="col p-0 pl-1 pr-1">
                                                <div className="modalStat themeRed">
                                                        <p className="statHeader">Unidentified Statements</p>
                                                        <label htmlFor="">{this.state.rowUidentified}</label>
                                                    </div>
                                                </div>
                                            <div className="col p-0 pl-1 pr-1">
                                                <div className="modalStat themeYellow">
                                                        <p className="statHeader">Message Miss Rate</p>
                                                        <label htmlFor="">{this.state.rowMissRate}</label>
                                                    </div>
                                            </div>                                   
                                        </div>
                                    </div>
                                </div>  
                                <div className="row m-0 mt-4">
                                    <div className="col-12">
                                        <PaperList listStatement={statement_list} />
                                    </div>
                                </div>
                            </div>                        
                        </div>
                    </Modal> 
                </div>              
            </div>
        );
    }
}

export default Charts;