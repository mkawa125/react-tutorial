import React, { Component } from 'react'
// import '../../public/css/app.css'
import {
  Link
} from 'react-router-dom';

class Sidebar extends Component {
render() {    
  return (
         <aside class="main-sidebar">
         <section class="sidebar">
            <ul class="sidebar-menu" data-widget="tree">
            <li class="header">MAIN NAVIGATION</li>
            <li class="">
               <Link to="/">
                  <i className="fa fa-dashboard"></i> <span>Dashboard</span>
                  <span className="pull-right-container">
                  </span>
               </Link>
               
              </li>
              
              <li className="">
               <Link to="/">
                  <i className="fa fa-users"></i> <span>Users</span>
                  <span className="pull-right-container">
                  </span>
               </Link>
               
              </li>

              <li className="">
               <Link to="/login">
                  <i className="fa fa-lock"></i> <span>Login</span>
                  <span className="pull-right-container">
                  </span>
               </Link>
               
              </li>

              <li className="">
               <Link to="/register">
                  <i className="fa fa-pencil"></i> <span>Register</span>
                  <span className="pull-right-container">
                  </span>
               </Link>
               
              </li>
              
             
            <li class="treeview">
               <Link href="#">
                  <i class="fa fa-share"></i> <span>Multilevel</span>
                  <span class="pull-right-container">
                  <i class="fa fa-angle-left pull-right"></i>
                  </span>
               </Link>
               <ul class="treeview-menu">
                  <li><Link href="#"><i class="fa fa-circle-o"></i> Level One</Link></li>
                  <li class="treeview">
                  <Link href="#"><i class="fa fa-circle-o"></i> Level One
                     <span class="pull-right-container">
                     </span>
                  </Link>
                  
                  </li>
               </ul>
            </li>
            
            </ul>
         </section>
      </aside>
  );
}
}
export default Sidebar;