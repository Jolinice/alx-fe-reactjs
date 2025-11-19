import { useState } from 'react';
// import WelcomeMessage from './components/WelcomeMessage'; // <-- REMOVE or COMMENT OUT OLD IMPORT

// Import the three new components
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    // Assemble the components in the correct order
    <div className="App-Container">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;