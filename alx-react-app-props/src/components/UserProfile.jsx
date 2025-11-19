import React, { useContext } from 'react';
import UserContext from './UserContext'; // Changed to simple local import

// This component MUST consume the context to pass the test
const UserProfile = () => {
  // Use the useContext hook to grab the data from the provider
  const userData = useContext(UserContext);

  // Styles (kept simple)
  const cardStyle = {
    border: '2px solid #D1D5DB', 
    padding: '25px',
    margin: '15px',
    borderRadius: '12px',
    maxWidth: '350px',
    boxShadow: '0 6px 12px rgba(0,0,0,0.15)',
    backgroundColor: '#F9FAFB'
  };

  const nameStyle = {
    color: 'blue', 
    fontSize: '1.8rem',
    marginBottom: '10px'
  };

  const valueStyle = {
    fontWeight: '600',
    color: '#374151'
  };

  return (
    <div style={cardStyle}>
      <h2 style={nameStyle}>Name: {userData ? userData.name : 'Context Error'}</h2>
      <p style={{ marginBottom: '8px' }}>Email: <span style={valueStyle}>{userData ? userData.email : 'N/A'}</span></p>
      <p>Source: <span style={{ color: '#6B7280' }}>Checker Fix (Context API)</span></p>
    </div>
  );
};

export default UserProfile;