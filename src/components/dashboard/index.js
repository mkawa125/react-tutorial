import React, { Component } from 'react';
import '../../public/css/auth.css'
import {
  Link
} from 'react-router-dom';
import Header from '../../components/layouts/header'
import Sidebar from '../../components/layouts/sidebar'

class Dashboard extends Component {
  
render() {
    
    return (
      <div className="content-wrapper">
        <Header></Header>
        <Sidebar></Sidebar>
    <section className="content-header">
      <h1>
        Dashboard
      </h1>
      <span className="breadcrumb-link">
        <Link to="/">Home</Link>
      </span>
    </section>

    <section className="content">
      <div className="row">
        <div className="col-md-12">
          <div className="">
            <p>This is the dashboard</p>       
          </div>
        </div>
      </div>      
    </section>
   </div>
  );
}

}
export default Dashboard;