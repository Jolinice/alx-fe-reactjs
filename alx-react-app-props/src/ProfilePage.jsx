import React from 'react';
import UserInfo from './UserInfo';

// Prop drilling fixed: The component signature no longer receives { userData }
function ProfilePage() {
  return (
    <div style={{ padding: '10px', border: '1px solid #63B3ED', margin: '10px', borderRadius: '4px' }}>
      <h2>Profile Page (Prop Removed)</h2>
      {/* UserInfo is rendered, but no props are passed */}
      <UserInfo />
    </div>
  );
}

export default ProfilePage;