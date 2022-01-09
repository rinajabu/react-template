import logo from './assets/logo.svg';
import './sass/App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          React template with react-router, protected routes, context, bootstrap, and SASS.
        </p>
      </header>
    </div>
  );
}

export default App;
