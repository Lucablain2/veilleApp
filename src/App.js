import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
      super(props);
      this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    alert('Fonction pour ajouter Article ICI !');
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Articles sur le REACT :
          </p>
          <button onClick={this.handleClick}>Chercher article</button>
        </header>
        <body>
          <div class="article"></div>
          <div class="article"></div>
          <div class="article"></div>
          <div class="article"></div>
          <div class="article"></div>
          <div class="article"></div>
          <div class="article"></div>
          <div class="article"></div>
          <div class="article"></div>
        </body>
      </div>
    );
  }
}

export default App;
