import React, { Component } from 'react';
import
{
  BrowserRouter as Router,
  Route, withRouter, Switch
  
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
import CreateUser from "./components/users/create";
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
          <Switch>
            <Route 
              path='/login'
              name="User login" 
              render={ 
                  props => <Login { ...props} />
                }
            />

            <Route  
              path='/register'
              name="Create New User" 
              component={ Register }/>

            <AuthenticatedRoutes 
              exact  
              path='/users' 
              component={ Users }/>

            <AuthenticatedRoutes
              exact  
              path='/create-new-user'
              name="Create New User"
              component={ CreateUser }/>

            <AuthenticatedRoutes 
              exact 
              path="/"
              name="Dashboard"
              component={ Dashboard }/>

            </Switch>

          </div>
      </Router>
    )
  }
}

export default App;
