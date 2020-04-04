import React, { Component } from 'react';
import
{
  BrowserRouter as Router,
  Route,
  
} from 'react-router-dom';

// import history from './services/history';
// import Routes from './routes';
// import 'bootstrap/dist/css/bootstrap.css';
import './index.css'
import Login from './components/auth/login';
import Register from './components/auth/register';
import Header from './components/layouts/header'
import Sidebar from './components/layouts/sidebar'
import Dashboard from './components/dashboard/index'
import Users from './components/users/index';


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
  this.setState({ characters: [...this.state.characters, character] })
}
  render() {
    return (
      <Router>
        <div>
          <Header></Header>
          <Sidebar></Sidebar>
            <Route exact path='/login' component={Login}></Route>
          <Route exact path='/register' component={ Register }></Route>
          <Route exact path='/' component={Dashboard}></Route>
          <Route exact path='/users' component={Users}></Route>
        </div>
      </Router>
    )
  }
}

export default App;
