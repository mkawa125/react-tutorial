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
               <Link to="/users">
                  <i className="fa fa-users"></i> <span>Users</span>
                  <span className="pull-right-container">
                  </span>
               </Link>
               
              </li>
             
              <li class="header">OTHERS</li>
            <li class="treeview">
               <Link href="#">
                  <i class="fa fa-cog"></i> <span>Settings</span>
                  <span class="pull-right-container">
                  <i class="fa fa-angle-left pull-right"></i>
                  </span>
               </Link>
               <ul class="treeview-menu">
                    <li class="treeview">
                       <Link href="#"><i class="fa fa-circle-o"></i> Roles & Permissions
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