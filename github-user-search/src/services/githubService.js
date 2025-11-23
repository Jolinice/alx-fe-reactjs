import axios from 'axios';

// GitHub API base URLs
const GITHUB_USER_URL = 'https://api.github.com/users/';
const GITHUB_SEARCH_URL = 'https://api.github.com/search/users';

const GITHUB_API_KEY = import.meta.env.VITE_GITHUB_API_KEY;

/**
 * Fetches data for a single user (kept for completeness).
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

        // Add filters to the query string 'q' using GitHub search syntax
        if (location) {
            // Add location filter using GitHub search syntax (location:CITY)
            q += ` location:${location}`; 
        }
        if (minRepos > 0) {
            // Add repository filter using GitHub search syntax (repos:>=NUMBER)
            q += ` repos:>=${minRepos}`;
        }

        // Use 'type:user' as a default if the query is still empty, ensuring a valid search structure
        const trimmedQ = q.trim() || 'type:user'; 
        
        const params = {
            q: trimmedQ,
            per_page: 10, // Fetch 10 results per page
            page: page,
            sort: 'followers', // Recommended sort for better results
            order: 'desc'
        };
        
        const response = await axios.get(GITHUB_SEARCH_URL, {
            params: params,
            headers: headers
        });

        return response.data; 

    } catch (error) {
        console.error("Error fetching advanced user data:", error.response ? error.response.data : error.message);
        throw error;
    }
};

export { fetchUserData, fetchAdvancedUsers };