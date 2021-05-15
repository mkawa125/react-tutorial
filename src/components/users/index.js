import React, { Component } from 'react'
import {
  Link
} from 'react-router-dom';
import Header from '../../components/layouts/header'
import Sidebar from '../../components/layouts/sidebar'

const TableHeader = () => {
  return (
    <thead className="thead-dark">
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Job</th>
        <th>Email</th>
        <th>Phone</th>
        <th>Location</th>
        <th>Actions</th>
      </tr>
    </thead>
  )
}

const TableBody = (props) => {
    return (
        <tbody>
            <tr>
                <td>1</td>
                <td>Dahabu Saidi</td>
                <td>SOftware Engineer</td>
                <td>dahabusaidi@gmail.com</td>
                <td>+255717495198</td>
                <td>Dar es salaam</td>
                <td>
                    <button className="btn btn-primary btn-sm">
                        <i className="fa fa-eye"></i>
                    </button>
                    
                </td>
            </tr>

            <tr>
                <td>8</td>
                <td>Glory Mushi</td>
                <td>Class Mate</td>
                <td>dahabusaidi@gmail.com</td>
                <td>+255717495198</td>
                <td>Dar es salaam</td>
                <td>
                    <button className="btn btn-primary btn-sm">
                        <i className="fa fa-eye"></i>
                    </button>
                    
                </td>
            </tr>
        </tbody>
      
    )
  

}

class Users extends Component
{
    render ()
    {
        return (
          
            
            <div className="content-wrapper">
                <Header></Header>
                <Sidebar></Sidebar>
    <section className="content-header">
      <h1>
        Users
      </h1>
      <ol className="breadcrumb">
        <li> <Link to="/"> <i className="fa fa-dashboard"></i> Home</Link></li>
        <li className="active">Users</li>
      </ol>
    </section>

    <section className="content">
      <div className="row">
        <div className="col-md-12">
          <div className="">
            <table className="table table-sm table-borderless">
            <TableHeader/>
            <TableBody></TableBody>
            </table>  
          </div>
        </div>
      </div>      
    </section>
            </div>
        )
  }
}

export default Users