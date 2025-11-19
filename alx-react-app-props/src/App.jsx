import UserProfile from './components/UserProfile';
import UserContext from './UserContext'; // Simple relative path
import './App.css'; 

function App() {
  // 1. Define the data at the top level
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    <div className="App-Container" style={{ textAlign: 'center', fontFamily: 'sans-serif', maxWidth: '800px', margin: '0 auto' }}>
      <h1>App (Context Provider)</h1>
      
      {/* Wrap UserProfile directly in the Provider */}
      <UserContext.Provider value={userData}>
        <UserProfile />
      </UserContext.Provider>
    </div>
  );
}

export default App;