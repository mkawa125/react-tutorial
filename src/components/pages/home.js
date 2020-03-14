import React, { Component } from 'react'
import '../../public/css/app.css'
import Header from '../../components/layouts/header'
// import Sidebar from '../../components/layouts/sidebar'
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
    <div className="app header-fixed sidebar-lg-show sidebar-fixed">
      <Header></Header>
      <div className="app-body">
        <div className="sidebar">
            <nav className="sidebar-nav">

            <ul className="nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/">Dashboard</Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/">Users</Link>
              </li>
              
              <li className="nav-item">
                  <Link className="nav-link" to="/">Roles</Link>
              </li>

          
            
                <li className="nav-item nav-dropdown d-lg-none">

                    <ul className="nav-dropdown-items">

                        <li className="nav-item ">
                        <Link>Mkawa</Link>
                        </li>

                        <li className="nav-item ">
                      <Link>Mkawa</Link>
                        </li>

                    </ul>

                </li>

            </ul>

        </nav>
        </div>
          
      </div>
      
      </div>
      
  );
}
}
export default Home;