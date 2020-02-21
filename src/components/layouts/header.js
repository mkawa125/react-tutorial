import React, { Component } from "react";

class Header extends Component
{
    render(){
        return (
            <div>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Dashboard</li>
                    <li>Documentation</li>
                </ul>
                {this.props.children}
            </div>
        );
    }
}
export default Header