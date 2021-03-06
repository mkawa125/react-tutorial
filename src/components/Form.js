import React, { Component } from 'react'

class Form extends Component {
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
      <label for="name">Name</label>
      <input
        type="text"
        name="name"
        id="name"
        className="form-control"
        value={name}
        onChange={this.handleChange} />
      <label for="job">Job</label>
      <input
        type="text"
        name="job"
        id="job"
        className="form-control"
        value={job}
        onChange={ this.handleChange } />
          
          <button className="btn btn-sm btn-success" type="button" value="Submit" onClick={this.submitForm}> Submit</button>
    </form>
  );
}
}
export default Form;