import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>What is this thing react?</h2>
        <p>
          React is so cool!
        </p>
        <ul>
          <li>Components</li>
          <li>Modular</li>
          <li>Resuable</li>
        </ul>

        <p></p>
        

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
