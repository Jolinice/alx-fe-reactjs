import { Link } from 'react-router-dom'; // Import Link for navigation
import { useRecipeStore } from '../recipeStore';

const RecipeList = () => {
    const recipes = useRecipeStore(state => state.recipes);

    const containerStyle = {
        padding: '20px',
        backgroundColor: '#F3F4F6',
        borderRadius: '8px',
        marginTop: '20px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
    };
    
    const recipeCardStyle = {
        borderBottom: '1px solid #D1D5DB',
        padding: '15px 0',
        marginBottom: '10px',
    };
    
    const titleLinkStyle = {
        color: '#059669', // Green
        fontSize: '1.5rem',
        marginBottom: '5px',
        textDecoration: 'none', // Remove underline from link
        fontWeight: 'bold',
    };

    if (recipes.length === 0) {
        return (
            <div style={containerStyle}>
                <h2 style={{ color: '#4B5563' }}>No Recipes Yet</h2>
                <p>Use the form above to add your first recipe!</p>
            </div>
        );
    }

    return (
        <div style={containerStyle}>
            <h2 style={{ color: '#1F2937', marginBottom: '15px' }}>Recipe List ({recipes.length})</h2>
            {recipes.map(recipe => (
                <div key={recipe.id} style={recipeCardStyle}>
                    {/* Link to the dynamic details route */}
                    <Link to={`/recipes/${recipe.id}`} style={titleLinkStyle}>{recipe.title}</Link>
                    <p style={{ color: '#4B5563' }}>{recipe.description}</p>
                </div>
            ))}
        </div>
    );
};

export default RecipeList;