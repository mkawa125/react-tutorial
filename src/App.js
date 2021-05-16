import React, { Component } from 'react';
import
{
  BrowserRouter as Router,
  Route, withRouter
  
} from 'react-router-dom';

// import history from './services/history';
// import Routes from './routes';
// import 'bootstrap/dist/css/bootstrap.css';
import './index.css'
import Login from './components/auth/login';
import Register from './components/auth/register';
// import Header from './components/layouts/header'
// import Sidebar from './components/layouts/sidebar'
import Dashboard from './components/dashboard/index'
import Users from './components/users/index';
import AddUser from "./components/users/create";
import AuthenticatedRoutes from './routes/privateRoutes'


class App extends Component
{
  state = {
    characters: [],
  }
  
  removeCharacter = index => {
  const { characters } = this.state

  this.setState({
    characters: characters.filter((character, i) => {
      return i !== index
    }),
  })
  }
  handleSubmit = character => {
    this.setState({ characters: [ ...this.state.characters, character ] })
    
  }
  
  render ()
  {    
    return (
      <Router>
        <div>
          <Route path='/login' render={ props => <Login { ...props} /> }></Route>
          <Route  path='/register' component={ Register }></Route>
          <AuthenticatedRoutes exact  path='/users' component={ Users }></AuthenticatedRoutes>
          <AuthenticatedRoutes  path='/users/add-new-user' component={ AddUser }></AuthenticatedRoutes>
          <AuthenticatedRoutes exact path="/" component={ Dashboard }></AuthenticatedRoutes>
          </div>
      </Router>
    )
  }
}

export default App;
