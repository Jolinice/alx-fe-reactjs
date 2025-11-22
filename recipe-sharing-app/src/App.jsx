import { Routes, Route } from 'react-router-dom';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';

// New Home component to contain the AddForm and the List
const Home = () => (
    <>
        <AddRecipeForm />
        <RecipeList />
    </>
);

function App() {
    const appStyle = {
        maxWidth: '700px',
        margin: '0 auto',
        padding: '20px',
        fontFamily: 'sans-serif'
    };
    
    const headerStyle = {
        textAlign: 'center',
        color: '#059669', // Green
        borderBottom: '2px solid #10B981',
        paddingBottom: '10px',
        marginBottom: '30px',
        cursor: 'pointer'
    };

    return (
        <div style={appStyle}>
            <h1 
                style={headerStyle} 
                onClick={() => window.location.href = '/'} // Click header to go home
            >
                🍽️ Recipe Sharing App
            </h1>
            
            <Routes>
                {/* Route for the main page (Add Form and List) */}
                <Route path="/" element={<Home />} />
                
                {/* Dynamic route for recipe details/editing */}
                <Route path="/recipes/:recipeId" element={<RecipeDetails />} />
                
                {/* Fallback for unknown routes */}
                <Route path="*" element={<h2>404 Not Found</h2>} />
            </Routes>
        </div>
    );
}

export default App;