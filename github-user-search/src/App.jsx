import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>GitHub User Search</h1>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<div className="home-message">Welcome to the GitHub User Search App</div>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;