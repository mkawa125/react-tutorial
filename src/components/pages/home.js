import React, { Component } from 'react'
// import '../../public/css/app.css'
import Header from '../../components/layouts/header'
import Sidebar from '../../components/layouts/sidebar'
import {
  Link
} from 'react-router-dom';

class Home extends Component {
  constructor(props) {
    super(props)

    this.initialState = {
      name: '',
      job: '',
    }

    this.state = this.initialState
  
  }


    submitForm = () => {
      // this.props.handleSubmit(this.state)
      this.setState(this.initialState)
}
render() {    
  return (
    <div className="wrapper">
      <Header></Header>
      <Sidebar></Sidebar>
      </div>
      
  );
}
}
export default Home;