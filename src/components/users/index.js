import React, { Component } from 'react'
import {
  Link
} from 'react-router-dom';
import '../../public/css/auth.css'
import Header from '../../components/layouts/header'
import Sidebar from '../../components/layouts/sidebar'
import axios from 'axios';

const Table = ({ users }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Username</th>
          <th>Role</th>
          <th>UserID</th>
          <th>Date Created</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        { (users.length > 0) ? users.map( (user, index) => {
           return (
            <tr key={ index }>
              <td>{ user.name }</td>
              <td>{ user.email }</td>
              <td>{ user.username }</td>
              <td>{ user.role }</td>
              <td>{ user._id }</td>
              <td>{ (new Date(user.createdAt)).toDateString() }</td>
              <td>
                <button className="btn btn-success btn-sm" >Edit</button>
                <button className="btn btn-primary btn-sm" >View</button>
                <button className="btn btn-danger btn-sm" onClick={() => this.deleteUser(user._id)}>Delete</button>
              </td>
            </tr>
          )
         }) : <tr><td colSpan="5">Data Loading...</td></tr> }
      </tbody>
    </table>
  );
}

class Users extends Component
{
    constructor(props) {
      super(props);
      this.state = {
        users: []
      }
    };

    componentDidMount() {

    const options = {
      headers: {
        'Authorization': `${localStorage.getItem("token")}`,
        'Accept': "Application/Json"
      }
    }
      axios.get('http://localhost:5000/api/users/', options)
          .then( response => {
            this.setState({ 'users': response.data });
            console.log(this.state.users)
            console.log(options)
          })
          .catch(error=> {
            this.setState({err: true});
            console.log(options)
          });
    }

    deleteUser(id){  
      const options = {
        headers: {
          'Authorization': `${localStorage.getItem("token")}`,
          'Accept': "Application/Json"
        }
      }
      axios.delete(`http://localhost:5000/api/users/${id}`, options)
        .then(res => {  
          console.log(res);  
          console.log(res.data);  
      
          const users = this.state.users.filter(user => user.id !== id);  
          this.setState({ users });  
        })  
      
    }  

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
                  <Table users={ this.state.users }/>
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