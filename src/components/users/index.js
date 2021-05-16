import React, { Component } from 'react'
import {
  Link
} from 'react-router-dom';
import '../../public/css/auth.css'
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
      <span className="">
        <span> <Link to="/">Home</Link></span>
        <span className="active"> / Users</span>
      </span>
    </section>

    <section className="content">
      <div className="row">
        <div className="col-md-10 col-md-offset-1 main-content">
          <div className="col-md-12 users">
            <strong>
              List Of Users
            </strong>
            <button className="btn btn-default add-user float-right"> 
              <Link to="/create-new-user">Add New User</Link>
            </button>
            <table className="table table-sm users-table table-bordered">
            <TableHeader/>
            <TableBody/>
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