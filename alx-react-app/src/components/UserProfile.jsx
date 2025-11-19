// UserProfile.jsx
// This functional component receives 'props' as its argument.
const UserProfile = (props) => {
  return (
    <div style={{ 
        border: '1px solid #ccc', 
        padding: '20px', 
        margin: '20px', 
        borderRadius: '8px', 
        maxWidth: '300px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
    }}>
      {/* Accessing props using dot notation: props.name */}
      <h2>{props.name}</h2>
      {/* Accessing props using dot notation: props.age */}
      <p>Age: {props.age}</p>
      {/* Accessing props using dot notation: props.bio */}
      <p>Bio: {props.bio}</p>
    </div>
  );
};

export default UserProfile;