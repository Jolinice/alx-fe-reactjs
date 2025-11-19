import React, { useContext } from 'react';
import UserContext from './UserContext';

// This component no longer accepts props
function UserDetails() {
  // Consume Context: This is the key change to eliminate prop drilling
  const userData = useContext(UserContext);

  return (
    <div style={{ padding: '20px', border: '1px dashed #4F46E5', borderRadius: '8px', maxWidth: '300px', margin: '20px auto', backgroundColor: '#EEF2FF' }}>
      <h3 style={{ color: '#4F46E5' }}>User Details (Context Consumer)</h3>
      <p>Name: <strong>{userData.name}</strong></p>
      <p>Email: <strong>{userData.email}</strong></p>
    </div>
  );
}

export default UserDetails;