import React, { Component } from 'react';
import '../../public/auth.css'

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
            <div className="login-box">
            <form>
                <label for="name">Username or email</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="username or email"
                    className="form-control"
                    value={name}
                    onChange={this.handleChange} />
                <label for="job">Password</label>
                <input
                    type="password"
                    name="job"
                    placeholder="password"
                    id="job"
                    className="form-control"
                    value={job}
                    onChange={ this.handleChange } />
                    
                    <button className="btn btn-sm btn-primary" type="button" value="Submit" onClick={this.submitForm}> Login</button>
                </form>
                </div>
        </div>
    
  );
}
}
export default Login;