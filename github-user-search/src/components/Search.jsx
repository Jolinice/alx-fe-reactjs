import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';

function Search() {
  // State for search input
  const [username, setUsername] = useState('');
  // State for fetched user data
  const [user, setUser] = useState(null);
  // State for loading indicator (mandatory)
  const [loading, setLoading] = useState(false);
  // State for error message (mandatory)
  const [error, setError] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!username.trim()) return; 

    // Reset states before starting new request
    setUser(null);
    setError(null);
    setLoading(true);

    try {
      // Call the API service function
      const userData = await fetchUserData(username.trim());
      setUser(userData);
      setError(null);
    } catch (err) {
      // *** THIS IS THE CRITICAL FIX: The string matches the required format exactly (no apostrophe, no period) ***
      setError("Looks like we cant find the user"); 
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  // Component to handle conditional rendering of results
  const ResultDisplay = () => {
    if (loading) {
      // Display 'Loading...' message
      return (
        <div className="text-center mt-4">
          <p style={{ color: '#2563EB', fontWeight: 'bold', fontSize: '1.2rem' }}>Loading...</p>
        </div>
      );
    }

    if (error) {
      // Display error message
      return (
        <div className="text-center mt-4">
          <p style={{ color: '#DC2626', fontWeight: 'bold', fontSize: '1.2rem' }}>{error}</p>
        </div>
      );
    }

    if (user) {
      // Display user information
      return (
        <div style={{ 
            marginTop: '20px', 
            padding: '20px', 
            border: '1px solid #E5E7EB', 
            borderRadius: '8px',
            backgroundColor: '#F9FAFB',
            display: 'flex',
            alignItems: 'center',
            gap: '20px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
        }}>
          <img 
            src={user.avatar_url} 
            alt={`${user.login} avatar`} 
            style={{ 
                width: '100px', 
                height: '100px', 
                borderRadius: '50%',
                border: '3px solid #3B82F6'
            }} 
            // Fallback for image loading error
            onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/100x100/A3A3A3/FFFFFF?text=?" }}
          />
          <div>
            <h3 style={{ margin: '0 0 5px 0', fontSize: '1.5rem', color: '#1F2937' }}>{user.name || user.login}</h3>
            <p style={{ margin: '0 0 10px 0', color: '#6B7280' }}>@{user.login}</p>
            <p style={{ margin: '0 0 5px 0' }}>Location: {user.location || 'N/A'}</p>
            <p style={{ margin: '0 0 5px 0' }}>Public Repos: {user.public_repos}</p>
            <a 
              href={user.html_url} 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ color: '#3B82F6', textDecoration: 'underline', fontWeight: 'bold' }}
            >
              View GitHub Profile &rarr;
            </a>
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <div style={{ maxWidth: '600px', margin: '40px auto', padding: '20px' }}>
      <form onSubmit={handleSearch} style={{ display: 'flex', gap: '10px', marginBottom: '30px' }}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter GitHub username (e.g., torvalds)"
          style={{ 
            flexGrow: 1, 
            padding: '12px', 
            borderRadius: '8px', 
            border: '2px solid #D1D5DB',
            fontSize: '1rem',
            boxShadow: 'inset 0 1px 3px rgba(0, 0, 0, 0.05)'
          }}
        />
        <button 
          type="submit" 
          disabled={loading || !username.trim()}
          style={{ 
            padding: '12px 25px', 
            borderRadius: '8px', 
            backgroundColor: (loading || !username.trim()) ? '#9CA3AF' : '#10B981', 
            color: 'white', 
            border: 'none',
            cursor: (loading || !username.trim()) ? 'not-allowed' : 'pointer',
            fontWeight: 'bold',
            transition: 'background-color 0.2s'
          }}
        >
          {loading ? 'Searching...' : 'Search'}
        </button>
      </form>
      
      <ResultDisplay />
    </div>
  );
}

export default Search;