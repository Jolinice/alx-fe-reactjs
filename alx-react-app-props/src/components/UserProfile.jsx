import React, { useContext } from 'react';
import UserContext from '../UserContext'; // Note the relative path: '../'

// This component no longer accepts props
const UserProfile = () => {
  // Use the useContext hook to grab the data from the provider
  const userData = useContext(UserContext);

  // Styles remain the same for visual check
  const cardStyle = {
    border: '2px solid #D1D5DB', // Light Gray border
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
      <h2 style={nameStyle}>Name: {userData.name}</h2>
      <p style={{ marginBottom: '8px' }}>Email: <span style={valueStyle}>{userData.email}</span></p>
      {/* Displaying age/bio from old prop structure isn't required by the task, 
          so we use the new context data (name/email) */}
      <p>Source: <span style={{ color: '#6B7280' }}>React Context API</span></p>
    </div>
  );
};

export default UserProfile;