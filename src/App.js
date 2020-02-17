import React, { Component } from 'react';
import { Router } from 'react-router';
import history from './services/history';
import Routes from './routes';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css'

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
      <Router history={history}>
      <Routes />
    </Router>
    )
  }
}

export default App;
