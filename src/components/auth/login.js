import React, { Component } from 'react';
import '../../public/css/auth.css'
import {
  Link
} from 'react-router-dom';
import axios from 'axios'
// import Header from '../../components/layouts/header'


class Login extends Component {
  constructor(props){
        super(props);
        this.state = {
            email : '',
            password: '',
        }
         this.logout = this.logout.bind(this)
  }
  onSubmit(e){
        e.preventDefault();
        const {email , password} = this.state ;
        axios.post('http://127.0.0.1:8000/api/v1/login', {
            email, 
            password
          })
          .then(response=> {
            console.log(response.data.token)
            this.setState({ err: false });
            localStorage.setItem('token', response.data.token);
            this.props.history.push("/home") ;
            
          })
          .catch(error=> {
            this.refs.email.value="";
            this.refs.password.value="";
            this.setState({err: true});
          });
     }

     onChange(e){
        const {name, value} = e.target;
        this.setState({[name]: value});
     }
     logout() {
        console.log(localStorage.getItem('token'))
     }
  
     
render() {
  let error = this.state.err ;
        let msg = (!error) ? 'Login Successful' : 'Wrong Credentials' ;
        let name = (!error) ? 'alert alert-success' : 'alert alert-danger' ;
    
  return (
    
    <div className="content-wrapper">
    <section className="content">
      <div className="row">
        <div className="col-md-12">
          <div className="">
              <div className="col-md-offset-2 col-md-6 col-md-offset-2">
                    {error !== undefined && <div className={name} role="alert">{msg}</div>}
                </div>
              <div className='col-md-6 col-md-offset-3'>
                
            <div className="col-md-12 login-box">
                <div className="login-head" >Please Login</div>

                  <div className="form-body">
                     
                <form  className="form-horizontal" method="POST" onSubmit= {this.onSubmit.bind(this)}> 
                    <div className="form-group">
                        <label htmlFor="email">Username or Email</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            ref="email"
                            placeholder="Username or Email"
                            className="form-control"
                              onChange={this.onChange.bind(this)}  required  />
                    </div>

                    <div className="form-group">
                        <div className="row">
                            <div className="col-md-6">
                                <label className="lables" htmlFor="password">Password</label>
                            </div>
                            <div className="col-md-6 forgort-passwrd">
                                <Link to="/">Forgot Your Password?</Link>
                            </div>
                        </div>
                        <div>
                            <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            id="password"
                            ref="password"
                            className="form-control"
                            onChange={this.onChange.bind(this)}  required />
                        </div>
                        
                    </div>

                    <div className="">
                        <button className="btn btn-sm btn-primary login-button" type="submit" value="Submit" onClick={this.submitForm}> Login</button>

                    </div>
                    </form>
            </div>
            
            <div className="not-registered">
          Not registered? <Link to="/register">Create Account</Link>
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
export default Login;