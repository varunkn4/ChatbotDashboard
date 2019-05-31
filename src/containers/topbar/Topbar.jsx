import React, { Component } from 'react';
import PropTypes from 'prop-types';
import registry from 'app-registry';

class Topbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
        this.redirectHome = this.redirectHome.bind(this);
        this.logout = this.logout.bind(event);
    }
    redirectHome(){
        this.context.router.history.push('/dashboard');
    }
    logout = (event) =>{
        event.preventDefault();
        registry.get('storage').removeItem("token");
        this.context.router.history.push('/login');
    }
    render(){
        return(
            <div className="topbar w-100">
                <div className="topbarContainer">
                    <div className="row m-0">
                        <div className="col pl-1">
                            <div className="mainLogo" onClick={() => this.redirectHome()}>
                                <img src={require('../../images/Mekanate-Logo-Horizontal-White.png')} alt="" />
                            </div>                            
                        </div>
                        <div className="col">                            
                            <div className="userAvatar pull-right">
                                <img src={require('../../images/avatar.png')} alt="" className="" />                                
                            </div> 
                            <div className="actionItems pull-right pr-3">
                                <i className="fas fa-search not-allowed"></i>
                                <i className="fas fa-expand not-allowed"></i>
                                <i className="fas fa-power-off pointer" onClick={this.logout}></i>
                            </div>                           
                        </div>
                    </div>
                </div>               
            </div>
        );
    }
}

Topbar.contextTypes = {
    router: PropTypes.object.isRequired
}

export default Topbar;