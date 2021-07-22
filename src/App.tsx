import React from 'react';
import './App.css';
import Starships from "./Starships";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>
          Star Wars API
        </h2>
      </header>
      <Starships />
    </div>
  );
}

export default App;
