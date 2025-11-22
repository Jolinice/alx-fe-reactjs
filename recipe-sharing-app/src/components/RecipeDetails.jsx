import React, { useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { useRecipeStore } from '../recipeStore';
import EditRecipeForm from './EditRecipeForm';
import DeleteRecipeButton from './DeleteRecipeButton';

const RecipeDetails = () => {
    // 1. Get the recipe ID from the URL parameters
    const { recipeId } = useParams();
    // Ensure ID is converted to a number for comparison (Zustand IDs are numbers)
    const id = parseInt(recipeId, 10); 

    // 2. Select the recipe from the store using a strong selector
    const recipe = useRecipeStore(
        // The selector function
        (state) => state.recipes.find(r => r.id === id)
    );
    
    // Local state to toggle between view and edit modes
    const [isEditing, setIsEditing] = useState(false);
    
    if (!recipe) {
        // If recipe is not found, redirect to home
        return <Navigate to="/" replace />;
    }

    const containerStyle = {
        padding: '30px',
        backgroundColor: '#FFFFFF',
        borderRadius: '12px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        marginTop: '20px'
    };
    
    const h1Style = {
        color: '#1F2937',
        fontSize: '2.2rem',
        marginBottom: '10px'
    };
    
    const buttonStyle = {
        padding: '8px 15px',
        backgroundColor: '#3B82F6', // Blue
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        fontWeight: 'bold',
        marginTop: '15px'
    };

    return (
        <div style={containerStyle}>
            {isEditing ? (
                // Show Edit Form
                <EditRecipeForm 
                    recipe={recipe} 
                    onSave={() => setIsEditing(false)} 
                />
            ) : (
                // Show View Details
                <div>
                    <h1 style={h1Style}>{recipe.title}</h1>
                    <p style={{ color: '#4B5563', lineHeight: '1.6' }}>{recipe.description}</p>
                    
                    <div style={{ marginTop: '20px', borderTop: '1px solid #E5E7EB', paddingTop: '15px' }}>
                        <button onClick={() => setIsEditing(true)} style={buttonStyle}>
                            Edit Recipe
                        </button>
                        {/* Pass the ID to the Delete button */}
                        <DeleteRecipeButton recipeId={recipe.id} />
                    </div>
                </div>
            )}
        </div>
    );
};

export default RecipeDetails;