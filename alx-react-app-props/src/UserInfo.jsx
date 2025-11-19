import React from 'react';
import UserProfile from './components/UserProfile';

// userData prop is NOT passed down here
function UserInfo() {
  return (
    <div style={{ padding: '10px', border: '1px solid #A0AEC0', margin: '10px', borderRadius: '4px' }}>
      <h3>User Info (No Props Needed Here)</h3>
      {/* Renders the UserProfile component */}
      <UserProfile />
    </div>
  );
}

export default UserInfo;