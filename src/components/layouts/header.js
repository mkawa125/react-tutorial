import React, { Component } from "react";
import '../../public/css/app.css'
import {
  Link
} from 'react-router-dom';


class Header extends Component
{
    render(){
        return (
            <header className="app-header navbar">
                Coding community
            <button className="d-none d-lg-inline navbar-toggler sidebar-toggler"
                    type="button"
                    data-toggle="sidebar-lg-show">
                <span class="navbar-toggler-icon"></span>
            </button>

            <button className="d-lg-none navbar-toggler sidebar-toggler"
                    type="button"
                    data-toggle="sidebar-show">
                <span className="navbar-toggler-icon"></span>
            </button>

            <ul class="nav navbar-nav mr-auto d-none d-lg-flex">

                <li class="nav-item px-3">
                    <Link to="/login">Login</Link>
                </li>

                <li class="nav-item px-3">
                    <Link to="/register">Register</Link>
                </li>


            </ul>

            <ul className="nav navbar-nav d-none d-lg-flex">

                <li className="nav-item px-3">

                    <div className="dropdown">
                        sasasa
                        <div className="dropdown-menu dropdown-menu-right">
                          <Link>Logout</Link>
                        </div>
                    </div>

                </li>
            </ul>

        </header>
        );
    }
}
export default Header