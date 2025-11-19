import UserDetails from './UserDetails';

// userData prop is removed
function UserInfo() {
  return (
    <div style={{ padding: '10px', border: '1px solid #A0AEC0', margin: '10px', borderRadius: '4px' }}>
      <h3>User Info (No Props Needed Here)</h3>
      {/* userData prop is no longer passed down */}
      <UserDetails />
    </div>
  );
}

export default UserInfo;