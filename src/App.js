import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './sass/App.scss';
import Home from './components/Home/Home';
import TopNav from './components/TopNav/TopNav';
import About from './components/About/About';

function App() {
  return (
    <div className="App">
      <Router>
        <TopNav />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
