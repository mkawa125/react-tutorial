import React, { Component } from 'react'

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
      <div>
          sdsd
    </div>
  );
}
}
export default Home;