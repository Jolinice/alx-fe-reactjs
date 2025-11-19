import UserInfo from './UserInfo';

// userData prop is removed
function ProfilePage() {
  return (
    <div style={{ padding: '10px', border: '1px solid #63B3ED', margin: '10px', borderRadius: '4px' }}>
      <h2>Profile Page (No Props Needed Here)</h2>
      {/* userData prop is no longer passed down */}
      <UserInfo />
    </div>
  );
}

export default ProfilePage;