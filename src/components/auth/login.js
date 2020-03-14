import React, { Component } from 'react'

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
    <form>
      <label for="name">Username or email</label>
      <input
        type="text"
        name="name"
        id="name"
        className="form-control"
        value={name}
        onChange={this.handleChange} />
      <label for="job">Password</label>
      <input
        type="password"
        name="job"
        id="job"
        className="form-control"
        value={job}
        onChange={ this.handleChange } />
          
          <button className="btn btn-sm btn-primary" type="button" value="Submit" onClick={this.submitForm}> Login</button>
    </form>
  );
}
}
export default Login;