import './App.css';
import React from 'react';
import Routing from './Routing';
import axios from 'axios';

axios.defaults.withCredentials = true;
export const SERVER_URL = process.env.REACT_APP_SERVER_URL;

function App() {

  return (
      <div className="App"> 
        <header className="App-header">
          <Routing/>
        </header>
      </div>
  );
}

export default App;
