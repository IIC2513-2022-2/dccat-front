import logo from './logo.svg';
import './App.css';
import Grid from './components/Grid';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Hello world!
        </p>
        <p>
          ESTAMOS TRABAJANDO CON REACT!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Grid list_symbols={["", "X", "", "X", "", "", "O", "", ""]}/>
        <Grid list_symbols={["O", "X", "O", "X", "", "", "O", "", ""]}/>
      </header>
    </div>
  );
}

export default App;
