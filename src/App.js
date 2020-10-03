import React from 'react';
import './App.css';
import Floorplan from "./components/floorplan";

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <h1>The Swamp</h1>
        <p>We like mud</p>
      </header>
      <div className="App-main" >
          <Floorplan/>
      </div>
    </div>

  );
}

export default App;
