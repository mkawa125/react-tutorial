import React, { Component } from 'react'
import '../../public/css/app.css'
import {
  Link
} from 'react-router-dom';

class Sidebar extends Component {
render() {    
  return (
          <nav className="sidebar-nav">

    <ul className="nav">

        <li className="nav-item">
           <Link to="/">Mkawa</Link>
        </li>

        <li className="nav-item">
           <Link to="/">Mkawa</Link>
        </li>

        <li className="nav-item">
           <Link to="/">Mkawa</Link>
        </li>

        <li className="nav-item">
           <Link to="/">Mkawa</Link>
        </li>

        <li className="nav-item">
           <Link to="/">Mkawa</Link>
        </li>

        <li className="nav-item">
           <Link to="/">Mkawa</Link>
        </li>
        <li className="nav-item nav-dropdown d-lg-none">

            <ul className="nav-dropdown-items">

                <li className="nav-item ">
                <Link>Mkawa</Link>
                </li>

                <li className="nav-item ">
               <Link>Mkawa</Link>
                </li>

            </ul>

        </li>

    </ul>

</nav>
  );
}
}
export default Sidebar;