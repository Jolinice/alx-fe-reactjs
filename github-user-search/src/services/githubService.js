import axios from 'axios';

// GitHub API base URLs
const GITHUB_USER_URL = 'https://api.github.com/users/';
const GITHUB_SEARCH_URL = 'https://api.github.com/search/users';

const GITHUB_API_KEY = import.meta.env.VITE_GITHUB_API_KEY;

/**
 * Fetches data for a single user (kept for backward compatibility, although search is primary now).
 * @param {string} username - The GitHub username to search for.
 * @returns {Promise<object>} The user data object.
 */
const fetchUserData = async (username) => {
    try {
        const headers = GITHUB_API_KEY ? { Authorization: `token ${GITHUB_API_KEY}` } : {};
        const response = await axios.get(`${GITHUB_USER_URL}${encodeURIComponent(username)}`, { headers });
        return response.data;
    } catch (error) {
        console.error("Error fetching single user data:", error.response ? error.response.data : error.message);
        throw error;
    }
};

/**
 * Fetches a list of users based on advanced criteria (location, repos, text) using the Search API.
 * @param {object} searchParams - Object containing query parameters.
 * @param {string} searchParams.query - The main search text (username or keywords).
 * @param {string} searchParams.location - Filter by user location.
 * @param {number} searchParams.minRepos - Filter by minimum public repository count.
 * @param {number} [searchParams.page=1] - The page number for results (for pagination).
 * @returns {Promise<object>} The search results object (includes items, total_count).
 */
const fetchAdvancedUsers = async ({ query, location, minRepos, page = 1 }) => {
    try {
        const headers = GITHUB_API_KEY ? { Authorization: `token ${GITHUB_API_KEY}` } : {};
        
        let q = query || ''; // Start with the main query text

        // Add filters to the query string 'q'
        if (location) {
            // Appends location filter (e.g., location:lagos)
            q += ` location:${location}`; 
        }
        if (minRepos > 0) {
            // Appends repository filter (e.g., repos:>=10)
            q += ` repos:>=${minRepos}`;
        }

        // Must have some query text when using the /search endpoint
        if (!q.trim()) {
             // Use a broad search if no specific query is provided, or throw error as required
             // We'll use a broad keyword to prevent an empty query from failing
             q = 'type:user'; 
        }
        
        const params = {
            q: q.trim(),
            per_page: 10, // Fetch 10 results per page
            page: page,
            sort: 'followers', // Sorting by followers makes the results more interesting
            order: 'desc'
        };
        
        const response = await axios.get(GITHUB_SEARCH_URL, {
            params: params,
            headers: headers
        });

        // The search API returns results in 'items' array and total count
        return response.data; 

    } catch (error) {
        console.error("Error fetching advanced user data:", error.response ? error.response.data : error.message);
        throw error;
    }
};

export { fetchUserData, fetchAdvancedUsers };