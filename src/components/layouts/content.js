import React, { Component } from 'react'
// import '../../public/css/app.css'
import {
  Link
} from 'react-router-dom';

class Content extends Component {
render() {    
  return (
         <div class="content-wrapper">
            <section class="content-header">
            <h1>
                Dashboard
                <small>Version 2.0</small>
            </h1>
            <ol class="breadcrumb">
                  <li><Link href="#"><i class="fa fa-dashboard"></i> Home</Link></li>
                <li class="active">Dashboard</li>
            </ol>
            </section>

            <section class="content">
            <div class="row">
                <div class="col-md-12">
                <div class="box">
                    <h4>This is the main content</h4><h4>This is the main content</h4>          
                </div>
                </div>
            </div>      
            </section>
        </div>
  );
}
}
export default Content;