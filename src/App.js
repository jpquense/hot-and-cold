import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import Game from './components/game';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <nav className="app-navbar">
          <Navbar />
        </nav>
        <header className="App-header">
          <h1 className="App-title">Hot or Cold</h1>
        </header>
        <main className="app-main">
          <Game />
        </main>
      </div>
    );
  }
}
