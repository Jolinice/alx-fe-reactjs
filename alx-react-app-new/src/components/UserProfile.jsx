// UserProfile.jsx
// This functional component receives 'props' as its argument.
const UserProfile = (props) => {
  // Styles for the main card container
  const cardStyle = {
    border: '2px solid #D1D5DB', // Light Gray border
    padding: '25px',
    margin: '15px',
    borderRadius: '12px',
    maxWidth: '350px',
    boxShadow: '0 6px 12px rgba(0,0,0,0.15)',
    backgroundColor: '#F9FAFB' // Very light background
  };

  // Styles for the name
  const nameStyle = {
    color: '#059669', // Green color
    fontSize: '1.8rem',
    marginBottom: '10px'
  };

  // Styles for key values like age (bold)
  const valueStyle = {
    fontWeight: '600',
    color: '#374151'
  };

  return (
    <div style={cardStyle}>
      <h2 style={nameStyle}>{props.name}</h2>
      {/* Applies inline style to the span for the age value */}
      <p style={{ marginBottom: '8px' }}>Age: <span style={valueStyle}>{props.age}</span></p>
      <p>Bio: <span style={{ color: '#6B7280' }}>{props.bio}</span></p>
    </div>
  );
};

export default UserProfile;