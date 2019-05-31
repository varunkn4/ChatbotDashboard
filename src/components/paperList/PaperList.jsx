import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';

class PaperList extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.renderPages = this.renderPages.bind(this);
    }

    renderPages = (unidentifiedList) => {
        var count;
        var statementList = [];
        var fullList = unidentifiedList && unidentifiedList[0];
        if(unidentifiedList){
        for(count in fullList){
            statementList.push(fullList[count]);
            }
        }
        debugger;
        return statementList && <p>{statementList}</p>
    }

    displayList(unidentifiedList){

    }
   
    render() {      
        var unidentifiedList = this.props.listStatement; 
        return(
            <div>
                <Paper elevation={2}>
                    <div className="paperContainer">
                       {this.displayList(unidentifiedList)}                        
                    </div>                    
                </Paper>
            </div>
        );
    }
}
export default PaperList;