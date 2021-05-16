import React, { Component } from 'react';
import '../../public/css/auth.css'
import {
  Link
} from 'react-router-dom';
import axios from 'axios';
import Header from '../../components/layouts/header'
import Sidebar from '../../components/layouts/sidebar'

class Register extends Component {
  constructor(props){
        super(props);
        this.state = {
            name: '',
            email : '',
            password: '',
            username: '',
            first_name: 'Dahabu',
            surname: 'mkawa',
            password_confirmation: '',
        }
     }
     
  

    onSubmit(e){
      e.preventDefault();
        const {name, email, username, first_name, surname,  password, password_confirmation} = this.state ;
        axios.post('http://localhost:5000/api/users/register-user', {
            name,
            email,
            username,
            password,
            first_name,
            surname,
            password_confirmation
          })
          .then(response=> {
           this.setState({err: false});
           this.props.history.push("/") ;
          })
          .catch(error=> {
            this.refs.name.value = "";
            this.refs.username.value="";
            this.refs.password.value="";
            this.refs.email.value="";
            this.refs.confirm.value="";
            this.setState({err: true});
          });
     }

     onChange(e){
        const {name, value} = e.target ;
        this.setState({[name]: value});
     }
  
render() {
    let error = this.state.err ;
    let msg = (!error) ? 'Registered Successfully' : 'Oops! , Something went wrong.' ;
    let name = (!error) ? 'alert alert-success' : 'alert alert-danger' ;
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
                <span> <Link to="/users"> / Users</Link></span>
                <span className="active"> / Create New User</span>
            </span>
        </section>
    

        <section className="content">
        <div className="row">
            <div className="col-md-12">
                <div className="">
                    <div className="col-md-offset-2 col-md-6 col-md-offset-2">
                        {error !== undefined && <div className={name} role="alert">{msg}</div>}
                    </div>

                    <div className='col-md-8 col-md-offset-2 main-content'>
                        <div className="col-md-12">
                        
                        <div className="login-head" >Create Account</div>

                        <div className="form-body">
                            <form  className="form-horizontal" method="POST" onSubmit= {this.onSubmit.bind(this)}>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <div className="col-md-12">
                                                <label className="lables" htmlFor="name">Full Names</label>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    id="name"
                                                    ref="name"
                                                    placeholder="Full Names"
                                                    className="form-control"
                                                    onChange={this.onChange.bind(this)} required autoFocus/>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <div className="col-md-12">
                                                <label className="lables"  htmlFor="email">Email Address</label>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    id="email"
                                                    ref="email"
                                                    placeholder="Email Address"
                                                    className="form-control"
                                                    onChange={this.onChange.bind(this)} required />
                                            </div>
                                        </div>
                                    </div> 
                                </div>

                                <div className="row">
                                    <di className="col-md-6">
                                        <div className="form-group">
                                            <div className="col-md-12">
                                                <label className="lables"  htmlFor="username">Username</label>
                                                <input
                                                    type="text"
                                                    name="username"
                                                    id="username"
                                                    ref="username"
                                                    placeholder="Username e.g mkawa125"
                                                    className="form-control"
                                                    onChange={this.onChange.bind(this)} required />
                                            </div>
                                        </div>
                                    </di>

                                    <di className="col-md-6">
                                        <div className="form-group">
                                            <div className="col-md-12">
                                                <label className="lables"  htmlFor="phoneNumber">Phone Number</label>
                                                <input
                                                    type="text"
                                                    name="phoneNumber"
                                                    id="phoneNumber"
                                                    ref="phoneNumber"
                                                    placeholder="+255 717495198"
                                                    className="form-control"
                                                    onChange={this.onChange.bind(this)} required />
                                            </div>
                                        </div>
                                    </di>
                                </div>

                                <div className="row">
                                    <di className="col-md-6">
                                        <div className="form-group">
                                            <div className="col-md-12">
                                                <label className="lables"  htmlFor="username">Role</label>
                                                <select
                                                name="role"
                                                id="role"
                                                onChange={this.onChange.bind(this)} required
                                                className="form-control">
                                                    <option value="Admin">Admin</option>
                                                    <option value="User">User</option>
                                                    <option value="Manager">Manager</option>
                                                </select>
                                            </div>
                                        </div>
                                    </di>

                                    <di className="col-md-6">
                                        <div className="form-group">
                                            <div className="col-md-12">
                                            <label className="lables" htmlFor="password">Password</label>   
                                                <input
                                                    type="password"
                                                    name="password"
                                                    placeholder="Password"
                                                    id="password"
                                                    ref="password"
                                                    className="form-control"
                                                    onChange={this.onChange.bind(this)} required />
                                            </div>
                                        </div>
                                    </di>
                                </div>
                            
                                {/* <div className="form-group">
                                    <label className="lables" htmlFor="password_confirmation">Confirm Password</label>   
                                    <div>
                                        <input
                                        type="password"
                                        name="password_confirmation"
                                        placeholder="Confirm Password"
                                        id="password_confirmation"
                                        ref="confirm"
                                        className="form-control"
                                        onChange={this.onChange.bind(this)} required />
                                    </div>
                                </div> */}

                                <div className="row">
                                    <div className="col-md-12">
                                        <button className="btn btn-sm login-button" type="submit"> 
                                            Register
                                        </button>
                                    </div>
                                </div>
                        </form>
                    </div>
                
                    {/* <div className="not-registered">
                        Already have an accunt ? <Link to="/login">login</Link>
                    </div> */}

                    </div>
                
                    </div>
                </div>
            </div>
        </div>      
        </section>
    </div>
  );
}
}
export default Register;