import React, { Component } from 'react';
import Sidebar from "react-sidebar";
import PropTypes from 'prop-types';
import Insights from '../../pages/insights/Insights';

class SideNav extends Component {
    constructor(props) {
        super(props);
        this.state = {
          sidebarOpen: false,
          sidebarState: 'sidebarCollapse',
          menuSize: 'collapsedMenu',
          menuExpand: '',
          menuConcise: 'hidden',
          stackForward: ''
        };
        this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
        this.pageRedirect = this.pageRedirect.bind(this);
    }
     
    onSetSidebarOpen(open) {   
        this.setState({ sidebarOpen: open });
        if(open===false){
            this.setState({ sidebarState: 'sidebarCollapse'});
            this.setState({ menuSize: 'collapsedMenu'}); 
            this.setState({ menuExpand: ''});
            this.setState({ menuConcise: 'hidden'});            
            setTimeout(
                function() {
                    this.setState({ stackForward: ''});
                }
                .bind(this),
                1000
            ); 
        }
        else{
            this.setState({ sidebarState: '' });
            this.setState({ menuSize: ''});
            this.setState({ menuExpand: 'hidden'});
            this.setState({ menuConcise: ''});
            this.setState({ stackForward: 'upFront'});
        }
    }
    pageRedirect(destination){
        this.context.router.history.push('/'+ destination);
    }

    render(){
        return(
            <div className={"sidebarWrap " + this.state.stackForward}>
                <Sidebar sidebar={   
                        <div className="sidebarContent">
                            <div className="menuList">
                                <ul className="menuGroup">
                                    <li className={"menuItem mb-3 pointer " + this.state.menuSize} onClick={() => this.pageRedirect('dashboard')}>
                                        <span><i className="fas fa-th-large"></i></span>
                                        <label className="pointer">Dashboard</label>
                                    </li>
                                    <li className={"menuItem mb-3 pointer " + this.state.menuSize} onClick={() => this.pageRedirect('insights')}>
                                        <span><i class="fas fa-chart-line"></i></span>
                                        <label className="pointer">Chat Insight</label>
                                    </li>
                                </ul>
                            </div>                         
                            <i className={"menuToggle fas fa-bars " + this.state.menuExpand} onClick={() => this.onSetSidebarOpen(true)}></i>
                            <i className={"menuToggle fas fa-times " + this.state.menuConcise} onClick={() => this.onSetSidebarOpen(false)}></i>
                        </div>                            
                    } 
                open={this.state.sidebarOpen} onSetOpen={this.onSetSidebarOpen} sidebarClassName={"navigationBar " + this.state.sidebarState} rootClassName="rootArea">                        
                </Sidebar>   
            </div>      
        );
    }
}

SideNav.contextTypes = {
    router: PropTypes.object.isRequired
}


export default SideNav;