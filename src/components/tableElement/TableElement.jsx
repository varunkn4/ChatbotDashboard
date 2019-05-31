import React, { Component } from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
// import PropTypes from 'prop-types';

class TableElement extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //tableData : ''
        };
        this.options = {
            page: 1,
            hideSizePerPage: true,
            sizePerPage: 5     
        };
        this.selectRowProp = {
            mode: 'radio',
            hideSelectColumn: true,
            bgColor: '#FFE066',
            clickToSelect: true,
            onSelect: this.handleOpen
        };
        this.tableData = '';
        this.handleOpen = this.handleOpen.bind(this);
    }
    

    // handleOpen(row){
    //     // this.setState({
    //     //     rowSerial  :row.serial,
    //     //     rowID  :row.convID,
    //     //     rowStatements  :row.total,
    //     //     rowUidentified  :row.unidentified,
    //     //     rowMissRate  :row.missRate
    //     // })
    //     this.props.invokeUnidentifiedList(row);
    // }
    handleOpen = (row) => {
        this.props.invokeUnidentifiedList(row);
    }
    
    componentWillMount(){
        this.tableData = this.props.data ;
    }

    componentWillReceiveProps = (nextProps) => {
        //alert(nextProps.data);
        this.tableData = nextProps.data;
    }
    
    render(){
        // var tableData = this.props.data ;
        // debugger;
        return(
            <div>
                <BootstrapTable data={ this.tableData } pagination={ true } options={ this.options } selectRow={ this.selectRowProp }>
                    <TableHeaderColumn dataField='SerialNo'  dataSort={ true }>Serial Number</TableHeaderColumn>
                    <TableHeaderColumn dataField='ConversationId' isKey={ true } dataSort={ true }>Conversation ID</TableHeaderColumn>
                    <TableHeaderColumn dataField='TotalIntents' dataSort={ true }>Total Statements</TableHeaderColumn>
                    <TableHeaderColumn dataField='UnIdentified' dataSort={ true }>Unidentified Statements</TableHeaderColumn>
                    <TableHeaderColumn dataField='MissRate'>Message Miss Rate</TableHeaderColumn>
                </BootstrapTable>
            </div>
        );
    }
}


export default TableElement;