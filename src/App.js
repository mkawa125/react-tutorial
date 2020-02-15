import React, { Component } from 'react';
import Table from './components/Table'
import './index.css'

class App extends Component
{
  state = {
    characters: [
      {
        name: 'Charlie',
        job: 'Janitor',
      },
      {
        name: 'Mac',
        job: 'Bouncer',
      },
      {
        name: 'Dee',
        job: 'Aspring actress',
      },
      {
        name: 'Dennis',
        job: 'Bartender',
      },
    ],
  }
  render() {
    
    return (
      <div className="container">
        <Table characterData={this.state.characters}></Table>
      </div>
    )
  }
}

export default App;
