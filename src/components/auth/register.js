import React, { Component } from 'react';
import '../../public/auth.css'
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
      
        <div className='col-md-4 offset-4'>
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
              
              <div>
                <div></div>
                <div></div>
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
                            placeholder="password"
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
                            placeholder="confirm password"
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
        </div>
        <div className="not-registered">
          Already have an accunt ? <Link to="/login">login</Link>
        </div>
        </div>
  );
}
}
export default Register;