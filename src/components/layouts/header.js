import React, { Component } from "react";
// import '../../public/css/app.css'
import { Link, useHistory } from 'react-router-dom';


class Header extends Component
{
    constructor(props){
        super(props);
    }
    logout(props) {
        localStorage.removeItem('token')
        window.location.href = "/";
    }
    
    render(){
        return (
            <header className="main-header">

                <a href="!#" className="logo">
                <span className="logo-mini"><b>YDI</b>H</span>
                <span className="logo-lg">SIMUSOLAR</span>
                </a>

                <nav className="navbar navbar-static-top navbar-fixed-top">
                <a href="!#" className="sidebar-toggle" data-toggle="push-menu" role="button">
                    <span className="sr-only">Toggle navigation</span>
                </a>
                <div className="navbar-custom-menu">
                    <ul className="nav navbar-nav">
                        <li className="dropdown notifications-menu">
                        <a href="!#" className="dropdown-toggle" data-toggle="dropdown">
                        {/* <i className="fa fa-bell-o"></i> */}
                        {/* <span className="label label-warning">10</span> */}
                        </a>
                        <ul className="dropdown-menu">
                        <li className="header">You have 10 notifications</li>
                        <li>
                            <ul className="menu">
                            <li>
                                <a href="!#">
                                <i className="fa fa-users text-aqua"></i> 5 new members joined today
                                </a>
                            </li>
                            </ul>
                        </li>
                        <li className="footer"><a href="!#">View all</a></li>
                        </ul>
                    </li>
                    
                    <li className="dropdown user user-menu">
                        <a href="!#" className="dropdown-toggle" data-toggle="dropdown">
                        <span className="hidden-xs">Dahabu Saidi</span>
                        </a>
                        <ul className="dropdown-menu">
                        <li className="user-header">

                            <p>
                            Dahabu Saidi - Web Developer
                            <small>Member since Nov. 2012</small>
                            </p>
                        </li>
                        
                        <li className="user-footer">
                            <div className="pull-left">
                            <button className="btn btn-default btn-flat">Profile</button>
                            </div>
                            <div className="pull-right">
                            <button type="bu" className="btn btn-default btn-flat" onClick={this.logout}>Sign out</button>
                            </div>
                        </li>
                        </ul>
                    </li>
                    </ul>
                </div>
                </nav>
            </header>
        );
    }
}
export default Header