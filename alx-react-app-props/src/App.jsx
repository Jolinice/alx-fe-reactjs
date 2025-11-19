import ProfilePage from './ProfilePage';
import UserContext from './UserContext';

function App() {
  // 1. Define the data at the top level
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    <div style={{ textAlign: 'center', fontFamily: 'sans-serif' }}>
      <h1>App (Data Provider)</h1>
      {/* 2. Wrap the child component tree in the Provider */}
      {/* 3. Pass the data via the 'value' prop */}
      <UserContext.Provider value={userData}>
        <ProfilePage />
      </UserContext.Provider>
    </div>
  );
}

export default App;