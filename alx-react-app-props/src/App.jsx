import UserProfile from './components/UserProfile';
import UserContext from './UserContext';
import './App.css'; 
// Remove all other unused imports (like Header, Footer, Counter)

function App() {
  // 1. Define the data at the top level
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    <div className="App-Container" style={{ textAlign: 'center', fontFamily: 'sans-serif', maxWidth: '800px', margin: '0 auto', border: '2px solid #3B82F6', padding: '20px' }}>
      <h1>Context Provider (Refactor Test)</h1>
      
      {/* Wrap UserProfile directly in the Provider */}
      <UserContext.Provider value={userData}>
        <UserProfile />
      </UserContext.Provider>
    </div>
  );
}

export default App;