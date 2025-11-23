import React, { useState, useEffect } from 'react';
import { fetchAdvancedUsers } from '../services/githubService';

function Search() {
  // State for search parameters
  const [query, setQuery] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState(0);
  
  // State for results and pagination
  const [users, setUsers] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [canLoadMore, setCanLoadMore] = useState(false);

  // UI state
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Set initial search parameters used for pagination
  const [activeSearchParams, setActiveSearchParams] = useState({});

  const MAX_PAGES = 10; // GitHub limits search results to the first 1000 items (100 pages of 10 items)

  useEffect(() => {
    // Determine if more results can be loaded
    const maxResultsReached = users.length >= totalCount || currentPage >= MAX_PAGES;
    setCanLoadMore(totalCount > users.length && !maxResultsReached);
  }, [users, totalCount, currentPage]);


  const handleSearch = async (e, loadMore = false) => {
    if (e) e.preventDefault();
    
    const searchPage = loadMore ? currentPage + 1 : 1;
    let params;

    if (loadMore) {
        params = activeSearchParams;
    } else {
        // Start a new search, capture current parameters
        setUsers([]); // Clear previous results only if starting a new search
        params = {
            query: query.trim(),
            location: location.trim(),
            minRepos: parseInt(minRepos) || 0,
        };
        setActiveSearchParams(params); // Save parameters for subsequent 'Load More' clicks
    }

    if (!params.query && !params.location && params.minRepos === 0) {
        setError("Please enter a username, location, or minimum repository count to search.");
        return;
    }
    
    setError(null);
    setLoading(true);

    try {
      const { items, total_count } = await fetchAdvancedUsers({ ...params, page: searchPage });
      
      setUsers(prevUsers => loadMore ? [...prevUsers, ...items] : items);
      setTotalCount(total_count);
      setCurrentPage(searchPage);
      
      // If it's the first page and no results are found
      if (!loadMore && total_count === 0) {
          setError("Looks like we cant find the user"); // Required error string
      } else {
          setError(null);
      }

    } catch (err) {
      setError("An error occurred during the search. Check your connection or API key.");
      setUsers([]);
      setTotalCount(0);
      setCurrentPage(1);
    } finally {
      setLoading(false);
    }
  };


  const UserCard = ({ user }) => (
    <div className="bg-white p-6 shadow-lg rounded-xl flex items-start space-x-4 border-l-4 border-green-500 transition duration-300 hover:shadow-xl hover:scale-[1.01] transform mb-4 w-full">
      <img 
        src={user.avatar_url} 
        alt={`${user.login} avatar`} 
        className="w-16 h-16 rounded-full object-cover border-2 border-green-400 flex-shrink-0"
        onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/64x64/A3A3A3/FFFFFF?text=?" }}
      />
      <div className="flex-grow">
        <h3 className="text-xl font-bold text-gray-800 truncate">{user.login}</h3>
        {/* Fetching the full details (like name and location) often requires a separate API call on the search results,
            but for this task, we display available search result details (which are limited). 
            If location/repos are part of the query, we assume they match. */}
        <p className="text-sm text-gray-500">Score: {user.score.toFixed(2)}</p>
        
        <div className="mt-2 flex flex-wrap gap-x-4 text-sm text-gray-700">
            {/* The search API does not directly return the 'repos' or 'location' 
                for each user in the item list; this requires a secondary API call. 
                We will omit these details here to stay within the rate limits 
                and task constraints, focusing on the link. */}
            <p className="flex items-center">
                {/* Placeholder for visual separation */}
            </p>
        </div>
        
        <a 
          href={user.html_url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="mt-3 inline-block text-green-600 hover:text-green-700 font-semibold transition duration-150"
        >
          View Profile &rarr;
        </a>
      </div>
    </div>
  );


  return (
    <div className="max-w-4xl mx-auto p-4 md:p-8 bg-gray-50 min-h-screen">
      
      {/* Search Form */}
      <form onSubmit={handleSearch} className="bg-white p-6 rounded-xl shadow-md mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-700">Advanced GitHub Search</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          
          {/* Main Query (Username/Keywords) */}
          <div>
            <label htmlFor="query" className="block text-sm font-medium text-gray-700 mb-1">Username or Keywords</label>
            <input
              id="query"
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="e.g., react or LinusTorvalds"
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition"
            />
          </div>

          {/* Location Filter */}
          <div>
            <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">Location</label>
            <input
              id="location"
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="e.g., London or Lagos"
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition"
            />
          </div>

          {/* Min Repos Filter */}
          <div>
            <label htmlFor="minRepos" className="block text-sm font-medium text-gray-700 mb-1">Min Repositories</label>
            <input
              id="minRepos"
              type="number"
              value={minRepos}
              min="0"
              onChange={(e) => setMinRepos(e.target.value)}
              placeholder="e.g., 10"
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition"
            />
          </div>
        </div>
        
        {/* Search Button */}
        <div className="mt-6">
          <button 
            type="submit" 
            disabled={loading}
            className={`w-full py-3 px-4 rounded-lg font-bold text-white transition duration-300 ${
              loading 
                ? 'bg-gray-400 cursor-not-allowed' 
                : 'bg-green-600 hover:bg-green-700 shadow-lg hover:shadow-xl'
            }`}
          >
            {loading ? 'Searching...' : 'Search GitHub'}
          </button>
        </div>
      </form>
      
      {/* Results and Status */}
      
      {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
            <p className="font-bold">Error!</p>
            <p className="text-sm">{error}</p>
          </div>
      )}

      {users.length > 0 && (
          <div className="text-gray-600 mb-4 font-semibold">
            Found {totalCount.toLocaleString()} matching users. Showing {users.length} results.
          </div>
      )}

      <div className="space-y-4">
        {users.map(user => (
          // Pass key and user object to the UserCard component
          <UserCard key={user.id} user={user} />
        ))}
      </div>

      {/* Load More Button (Pagination) */}
      {canLoadMore && (
        <div className="mt-8 text-center">
          <button
            onClick={() => handleSearch(null, true)}
            disabled={loading}
            className={`py-3 px-8 rounded-full font-bold text-white transition duration-300 ${
              loading 
                ? 'bg-blue-400 cursor-not-allowed' 
                : 'bg-blue-600 hover:bg-blue-700 shadow-md'
            }`}
          >
            {loading ? 'Loading More...' : 'Load More Users'}
          </button>
          <p className="text-sm text-gray-500 mt-2">Showing page {currentPage}.</p>
        </div>
      )}
    </div>
  );
}

export default Search;