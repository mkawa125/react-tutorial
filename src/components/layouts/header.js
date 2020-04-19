import React, { Component } from "react";
// import '../../public/css/app.css'
import {
  a
} from 'react-router-dom';


class Header extends Component
{
    render(){
        return (
            <header className="main-header">

                <a className="logo">
                <span className="logo-mini"><b>YDI</b>H</span>
                <span className="logo-lg"><b>YDI</b>HUB</span>
                </a>

                <nav className="navbar navbar-static-top navbar-fixed-top">
                <a href="#" className="sidebar-toggle" data-toggle="push-menu" role="button">
                    <span className="sr-only">Toggle navigation</span>
                </a>
                <div className="navbar-custom-menu">
                    <ul className="nav navbar-nav">
                        <li className="dropdown notifications-menu">
                        <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                        <i className="fa fa-bell-o"></i>
                        <span className="label label-warning">10</span>
                        </a>
                        <ul className="dropdown-menu">
                        <li className="header">You have 10 notifications</li>
                        <li>
                            <ul className="menu">
                            <li>
                                <a href="#">
                                <i className="fa fa-users text-aqua"></i> 5 new members joined today
                                </a>
                            </li>
                            </ul>
                        </li>
                        <li className="footer"><a href="#">View all</a></li>
                        </ul>
                    </li>
                    
                    <li className="dropdown user user-menu">
                        <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                        <span className="hidden-xs">Alexander Pierce</span>
                        </a>
                        <ul className="dropdown-menu">
                        <li className="user-header">

                            <p>
                            Alexander Pierce - Web Developer
                            <small>Member since Nov. 2012</small>
                            </p>
                        </li>
                        <li className="user-body">
                            <div className="row">
                            <div className="col-xs-4 text-center">
                                <a href="#">Followers</a>
                            </div>
                            <div className="col-xs-4 text-center">
                                <a href="#">Sales</a>
                            </div>
                            <div className="col-xs-4 text-center">
                                <a href="#">Friends</a>
                            </div>
                            </div>
                        </li>
                        <li className="user-footer">
                            <div className="pull-left">
                            <a href="#" className="btn btn-default btn-flat">Profile</a>
                            </div>
                            <div className="pull-right">
                            <a href="#" className="btn btn-default btn-flat">Sign out</a>
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