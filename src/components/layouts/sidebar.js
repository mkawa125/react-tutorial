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
            <li class="active treeview menu-open">
               <a href="#">
                  <i class="fa fa-dashboard"></i> <span>Dashboard</span>
                  <span class="pull-right-container">
                  </span>
               </a>
               
            </li>
            <li class="treeview">
               <a href="#">
                  <i class="fa fa-share"></i> <span>Multilevel</span>
                  <span class="pull-right-container">
                  <i class="fa fa-angle-left pull-right"></i>
                  </span>
               </a>
               <ul class="treeview-menu">
                  <li><a href="#"><i class="fa fa-circle-o"></i> Level One</a></li>
                  <li class="treeview">
                  <a href="#"><i class="fa fa-circle-o"></i> Level One
                     <span class="pull-right-container">
                     </span>
                  </a>
                  
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