import React, { Component } from 'react';
import '../../public/css/auth.css'
import {
  Link
} from 'react-router-dom';

class Dashboard extends Component {
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
    
    return (
      <div className="content-wrapper">
    <section className="content-header">
      <h1>
        Dashboard
      </h1>
      <ol className="breadcrumb">
        <li> <Link to="/"> <i className="fa fa-dashboard"></i> Home</Link></li>
      </ol>
    </section>

    <section className="content">
      <div className="row">
        <div className="col-md-12">
          <div className="">
            <p>This is the dashboard</p>       
          </div>
        </div>
      </div>      
    </section>
            </div>
  );
}
}
export default Dashboard;