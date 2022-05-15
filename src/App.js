import React, { Component, useState } from 'react';
import logo from './logo.svg';
import { fetchData } from './extras';
import './App.css';



class App extends Component {
  constructor() {
    super();
    this.state = { data: [] };
  }

  async componentDidMount() {
    const json = await fetchData();
    this.setState({ data: json });
  }

  render() {
    console.log('state', this.state.data)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload. POP
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <div>
          {this.state.data.map(futureColleague => `${futureColleague.name}, `)}
        </div>
      </div>
    );
  }
}

export default App;
