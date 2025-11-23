import axios from 'axios';

const GITHUB_API_URL = 'https://api.github.com/users/';
// Access the API key from the .env file. Vite prefixes environment variables with VITE_
const GITHUB_API_KEY = import.meta.env.VITE_GITHUB_API_KEY;

/**
 * Fetches user data from the GitHub API.
 * @param {string} username - The GitHub username to search for.
 * @returns {Promise<object>} The user data object.
 */
const fetchUserData = async (username) => {
    try {
        // Use headers for authentication if a key is provided (recommended for rate limits)
        const headers = GITHUB_API_KEY ? { Authorization: `token ${GITHUB_API_KEY}` } : {};
        
        // Ensure the username is correctly encoded in the URL
        const response = await axios.get(`${GITHUB_API_URL}${encodeURIComponent(username)}`, { headers });
        
        return response.data;
    } catch (error) {
        // Log the error and re-throw to be handled by the Search component
        console.error("Error fetching user data:", error.response ? error.response.data : error.message);
        throw error;
    }
};

export { fetchUserData };