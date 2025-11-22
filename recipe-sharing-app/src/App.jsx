import { Routes, Route } from 'react-router-dom';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';

// Home component contains the form and list
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
                // Use Link or navigate, but direct click is a simple fallback for the header
                onClick={() => window.location.href = '/'} 
            >
                🍽️ Recipe Sharing App
            </h1>
            
            <Routes>
                {/* Route for the main page (Home) */}
                <Route path="/" element={<Home />} />
                
                {/* Dynamic route for recipe details/editing - MUST BE correct path format */}
                <Route path="/recipes/:recipeId" element={<RecipeDetails />} />
            </Routes>
        </div>
    );
}

export default App;