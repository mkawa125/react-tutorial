import React, { Component } from 'react';
import '../../public/auth.css'
import {
  Link
} from 'react-router-dom';

class Login extends Component {
  constructor(props) {
    super(props)

    this.initialState = {
      name: '',
      job: '',
    }

    this.state = this.initialState
  
  
  }
    handleChange = event =>
    {
        const { name, value } = event.target

        this.setState({
            [ name ]: value,
        })
    }

    submitForm = () => {
      // this.props.handleSubmit(this.state)
      this.setState(this.initialState)
}
render() {
  const { name, job } = this.state;
    
    return (
      
        <div className='col-md-4 offset-4'>
            <div className="col-md-12 login-box">
                <div className="login-head" >Please Login</div>

                <div className="form-body">
                <form> 
                    <div className="form-group">
                        <label for="name">Username or Email</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Username or Email"
                            className="form-control"
                            value={name}
                            onChange={this.handleChange} />
                    </div>

                    <div className="form-group">
                        <div className="row">
                            <div className="col-md-6">
                                <label className="lables" for="job">Password</label>
                            </div>
                            <div className="col-md-6 forgort-passwrd">
                                <Link to="/">Forgot Your Password?</Link>
                            </div>
                        </div>
                        <div>
                            <input
                            type="password"
                            name="job"
                            placeholder="Password"
                            id="job"
                            className="form-control"
                            value={job}
                            onChange={ this.handleChange } />
                        </div>
                        
                    </div>

                    <div className="">
                        <button className="btn btn-sm btn-primary login-button" type="button" value="Submit" onClick={this.submitForm}> Login</button>

                    </div>
                    </form>
                    </div>
        </div>
        <div className="not-registered">
          Not registered? <Link to="/register">Create Account</Link>
        </div>
        </div>
  );
}
}
export default Login;