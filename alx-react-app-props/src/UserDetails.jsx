import { useContext } from 'react';
import UserContext from './UserContext';

function UserDetails() {
  // Use the useContext hook to grab the data from the provider
  const userData = useContext(UserContext);

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px', maxWidth: '300px', margin: '20px auto' }}>
      <h3 style={{ color: '#3182CE' }}>User Details (Consumed Context)</h3>
      {/* The component now uses data directly from userData */}
      <p>Name: <strong>{userData.name}</strong></p>
      <p>Email: <strong>{userData.email}</strong></p>
    </div>
  );
}

export default UserDetails;