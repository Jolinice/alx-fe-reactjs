import { createContext } from 'react';

// Initialize the Context. We export it for use by Provider and Consumer components.
const UserContext = createContext(null);

export default UserContext;