import UserProfile from './components/UserProfile';

import './App.css';

function App() {
  return (
    <div className="App-Container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      {/* This renders the UserProfile component and passes data using props */}
      <UserProfile 
        name="Alice" 
        age="25" 
        bio="Loves hiking and photography" 
      />
      
      {/* Adding a second profile to show component reusability */}
      <UserProfile 
        name="John Doe" 
        age="30" 
        bio="A keen developer and dedicated student." 
      />
    </div>
  );
}

export default App;