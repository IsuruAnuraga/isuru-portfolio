import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Pages/Home';
// import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="App-header">
          <Link to="/" className="App-link">Home</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
