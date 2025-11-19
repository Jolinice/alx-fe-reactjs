import ProfilePage from './ProfilePage';
import UserContext from './UserContext';
import './App.css'; 
// Note: You must delete or comment out any unused imports like UserProfile from the previous task

function App() {
  // 1. Define the data at the top level
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    <div className="App-Container" style={{ textAlign: 'center', fontFamily: 'sans-serif', maxWidth: '800px', margin: '0 auto', border: '2px solid #3B82F6', padding: '20px' }}>
      <h1>App (Context Provider)</h1>
      
      {/* Wrap the component tree in the Provider and pass the data via 'value' */}
      <UserContext.Provider value={userData}>
        <ProfilePage />
      </UserContext.Provider>
    </div>
  );
}

export default App;