import React, { Component } from 'react';
import
{
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

// import history from './services/history';
// import Routes from './routes';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css'
import Login from './components/auth/login';
import Register from './components/auth/register';
import Home from './components/pages/home';

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
          <Home></Home>
            <Route exact path='/login' component={Login}></Route>
            <Route exact path='/register' component={Register}></Route>
        </div>
      </Router>
    )
  }
}

export default App;
