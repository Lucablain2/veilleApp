import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  var x = "leo";
  const Button = ({ label, style:{width}, onclick }) => {
    return (
      <button
        onClick={onclick}
        style={{
          backgroundColor: 'lightgrey',
          color: 'black',
          borderRadius: 25,
          padding: '10px 10px',
          whiteSpace: 'nowrap',
          width: '250px'
        }}>
        Chercher article
      </button>
    )
  }
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Articles sur le REACT :
        </p>
        <Button
          label="Recherhce article"
          style={{width: 100}}
          onClick={()=>console.log('clicked!')}
        />
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

export default App;
