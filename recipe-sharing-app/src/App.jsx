import { Routes, Route, Link } from 'react-router-dom';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';

function App() {
    const appStyle = {
        maxWidth: '700px',
        margin: '0 auto',
        padding: '20px',
        fontFamily: 'sans-serif'
    };
    
    const headerStyle = {
        textAlign: 'center',
        color: '#059669', 
        borderBottom: '2px solid #10B981',
        paddingBottom: '10px',
        marginBottom: '30px',
    };
    
    const headerLinkStyle = {
        textDecoration: 'none', 
        color: 'inherit',
        cursor: 'pointer',
        display: 'block' 
    };

    return (
        <div style={appStyle}>
            {/* Use Link component for pure React Router navigation back to home */}
            <Link to="/" style={headerLinkStyle}>
                <h1 style={headerStyle}>
                    🍽️ Recipe Sharing App
                </h1>
            </Link>
            
            <Routes>
                {/* Route for the main page (Add Form and List) - Now inline */}
                <Route 
                    path="/" 
                    element={
                        <>
                            <AddRecipeForm />
                            <RecipeList />
                        </>
                    } 
                />
                
                {/* Dynamic route for recipe details/editing */}
                <Route path="/recipes/:recipeId" element={<RecipeDetails />} />
            </Routes>
        </div>
    );
}

export default App;