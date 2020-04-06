import React, { Component } from 'react';
import '../../public/css/auth.css'
import {
  Link
} from 'react-router-dom';

class Register extends Component {
  constructor(props) {
    super(props)

    this.initialState = {
      name: '',
      email: '',
    }

    this.state = this.initialState
  
  
  }
render() {
    
    return (
      <div className="content-wrapper">
    <section className="content-header">
      <h1>
        Create Account
      </h1>
      <ol className="breadcrumb">
        <li> <Link to="/"> <i className="fa fa-dashboard"></i> Home</Link></li>
        <li className="active">register</li>
      </ol>
    </section>

    <section className="content">
      <div className="row">
        <div className="col-md-12">
          <div className="box">

                <div className='col-md-6 col-md-offset-3'>
            <div className="col-md-12 login-box">
                <div className="login-head" >Create Account</div>

                <div className="form-body">
                <form> 
                    <div className="form-group">
                        <label className="lables" for="name">Full Names</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Full names e.g Dahabu Mkawa"
                            className="form-control"
                            onChange={this.handleChange} />
              </div>
              

              <div className="form-group">
                        <label className="lables"  for="name">Email Address</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Email address e.g dahabusaidi@gmail.com"
                            className="form-control"
                            onChange={this.handleChange} />
                    </div>

              <div className="form-group">
                        <label className="lables"  for="name">Username</label>
                        <input
                            type="text"
                            name="username"
                            id="username"
                            placeholder="Username e.g mkawa125"
                            className="form-control"
                            onChange={this.handleChange} />
                    </div>

                    <div className="form-group">
                        <label className="lables" for="job">Password</label>
                            
                        <div>
                            <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            id="password"
                            className="form-control"
                            onChange={ this.handleChange } />
                        </div>
                        
              </div>
              
              <div className="form-group">
                        <label className="lables" for="job">Confirm Password</label>
                            
                        <div>
                            <input
                            type="password"
                            name="confirm-password"
                            placeholder="Confirm Password"
                            id="confirm_password"
                            className="form-control"
                            onChange={ this.handleChange } />
                        </div>
                        
                    </div>

                    <div className="">
                        <button className="btn btn-sm btn-success login-button" type="button" value="Submit" onClick={this.submitForm}> Register</button>

                    </div>
                    </form>
            </div>
            
            <div className="not-registered">
          Already have an accunt ? <Link to="/login">login</Link>
        </div>
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