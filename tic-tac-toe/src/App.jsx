import React from 'react';
import TicTacToe from './components/tic-tac-toe';
import './App.css'; // Make sure to import the CSS file

const App = () => {
  return (
    <div className="container">
      <h1>Tic-Tac-Toe</h1>
      <TicTacToe />
    </div>
  );
}

export default App;
