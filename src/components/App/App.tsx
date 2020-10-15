import React from 'react';
import Calculator from '../Calculator/Calculator';
import logo from './../../assets/logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Glomerular filtration rate calculator
        </p>
      </header>
      <section className="App-section">
        <Calculator />
      </section>
    </div>
  );
}

export default App;
