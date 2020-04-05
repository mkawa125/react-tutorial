import React, { Component } from "react";
// import '../../public/css/app.css'
import {
  Link
} from 'react-router-dom';


class Header extends Component
{
    render(){
        return (
            <header class="main-header">

                <Link className="logo">
                <span class="logo-mini"><b>YDI</b>H</span>
                <span class="logo-lg"><b>YDI</b>HUB</span>
                </Link>

                <nav class="navbar navbar-static-top navbar-fixed-top">
                <Link href="#" class="sidebar-toggle" data-toggle="push-menu" role="button">
                    <span class="sr-only">Toggle navigation</span>
                </Link>
                <div class="navbar-custom-menu">
                    <ul class="nav navbar-nav">
                        <li class="dropdown notifications-menu">
                        <Link href="#" class="dropdown-toggle" data-toggle="dropdown">
                        <i class="fa fa-bell-o"></i>
                        <span class="label label-warning">10</span>
                        </Link>
                        <ul class="dropdown-menu">
                        <li class="header">You have 10 notifications</li>
                        <li>
                            <ul class="menu">
                            <li>
                                <Link href="#">
                                <i class="fa fa-users text-aqua"></i> 5 new members joined today
                                </Link>
                            </li>
                            </ul>
                        </li>
                        <li class="footer"><Link href="#">View all</Link></li>
                        </ul>
                    </li>
                    
                    <li class="dropdown user user-menu">
                        <Link href="#" class="dropdown-toggle" data-toggle="dropdown">
                        <span class="hidden-xs">Alexander Pierce</span>
                        </Link>
                        <ul class="dropdown-menu">
                        <li class="user-header">

                            <p>
                            Alexander Pierce - Web Developer
                            <small>Member since Nov. 2012</small>
                            </p>
                        </li>
                        <li class="user-body">
                            <div class="row">
                            <div class="col-xs-4 text-center">
                                <Link href="#">Followers</Link>
                            </div>
                            <div class="col-xs-4 text-center">
                                <Link href="#">Sales</Link>
                            </div>
                            <div class="col-xs-4 text-center">
                                <Link href="#">Friends</Link>
                            </div>
                            </div>
                        </li>
                        <li class="user-footer">
                            <div class="pull-left">
                            <Link href="#" class="btn btn-default btn-flat">Profile</Link>
                            </div>
                            <div class="pull-right">
                            <Link href="#" class="btn btn-default btn-flat">Sign out</Link>
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