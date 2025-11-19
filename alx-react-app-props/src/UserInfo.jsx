import React from 'react';
import UserDetails from './UserDetails';

// Prop drilling fixed: The component signature no longer receives { userData }
function UserInfo() {
  return (
    <div style={{ padding: '10px', border: '1px solid #A0AEC0', margin: '10px', borderRadius: '4px' }}>
      <h3>User Info (Prop Removed)</h3>
      {/* UserDetails is rendered, but no props are passed */}
      <UserDetails />
    </div>
  );
}

export default UserInfo;