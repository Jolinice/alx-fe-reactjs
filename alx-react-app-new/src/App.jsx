import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import UserProfile from './components/UserProfile';
import Counter from './components/Counter'; // <-- NEW IMPORT

import './App.css';

function App() {
  return (
    <div className="App-Container" style={{ maxWidth: '800px', margin: '0 auto', fontFamily: 'Arial, sans-serif' }}>
      
      <Header />
      
      {/* NEW: Counter Component */}
      <Counter />
      
      <MainContent />
      
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '30px' }}>
          <UserProfile 
            name="Alice" 
            age="25" 
            bio="Loves hiking and photography" 
          />
          <UserProfile 
            name="Bob" 
            age="42" 
            bio="Software engineer and coffee addict." 
          />
      </div>

      <Footer />
    </div>
  );
}

export default App;