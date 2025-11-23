import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Search from './components/Search'; 

function App() {
  return (
    <Router>
      <div className="App" style={{ fontFamily: 'Inter, sans-serif' }}>
        <header style={{ 
          textAlign: 'center', 
          padding: '20px 0', 
          borderBottom: '2px solid #10B981', 
          marginBottom: '20px', 
          backgroundColor: '#F3F4F6'
        }}>
          <h1 style={{ color: '#10B981', fontSize: '2.5rem', margin: 0, padding: 0 }}>
            🌐 GitHub User Search
          </h1>
          <p style={{ color: '#4B5563', margin: '5px 0 0 0' }}>Find profiles and details instantly.</p>
        </header>
        <main>
          <Routes>
            {/* The main route now renders the Search component */}
            <Route path="/" element={<Search />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;