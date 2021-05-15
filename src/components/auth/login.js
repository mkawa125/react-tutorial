import React, { Component } from 'react';
import '../../public/css/auth.css'
import { Link } from 'react-router-dom';
import axios from 'axios'
// import Header from '../../components/layouts/header'


class Login extends Component {
  constructor(props){
        super(props);
        this.state = {
            username : '',
            password: '',
        }
         this.logout = this.logout.bind(this)
  }
  onSubmit(e){
        e.preventDefault();
        const {username , password} = this.state ;
        axios.post('http://localhost:5000/api/users/login-user', {
            username,
            password
          })
          .then(response=> {
            this.setState({ err: false });
            localStorage.setItem('token', response.data.token);
            this.props.history.push("/") ;
            
          })
          .catch(error=> {
            this.refs.username.value=username;
            this.refs.password.value=password;
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
        let msg = (!error) ? 'Login Successful' : 'Invalid username or password' ;
        let name = (!error) ? 'alert alert-success' : 'alert alert-danger' ;
    
  return (
    
    <div className="row">
    <section className="content">
      <div className="row">
        <div className="col-md-12">
          <div className="">
              <div className="col-md-offset-3 col-md-6 col-md-offset-2">
                    
                </div>
              <div className='col-md-6 col-md-offset-3'>
                
            <div className="login-box">
                <div className="login-head" >Enter your details to login</div>

                  <div className="form-body">
                    <div className="row">
                    {/* {error !== undefined && <div className={name} role="alert">{msg}</div>} */}
                    </div>
                     
                <form  className="form-horizontal" method="POST" onSubmit= {this.onSubmit.bind(this)}> 
                    <div className="form-group">
                        <label htmlFor="username">Username or Email</label>
                        <input
                            type="username"
                            name="username"
                            id="username"
                            autoFocus
                            ref="username"
                            placeholder="Username or Email"
                            className="form-control"
                              onChange={this.onChange.bind(this)}  required  />
                            
                            {error !== undefined && <div className="text text-danger"><strong>{msg}</strong></div>}
                    </div>

                    <div className="form-group">
                        <div className="row">
                            <div className="col-md-6">
                                <label className="lables" htmlFor="password">Password</label>
                            </div>
                            <div className="col-md-6 forgort-passwrd">
                                {/* <Link to="/">Forgot Your Password?</Link> */}
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

                    <div className="row">
                        <button className="btn btn-sm btn-block login-button" type="submit" value="Submit" onClick={this.submitForm}> 
                        SIGN IN
                        </button>

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