import { useState } from 'react';
import { useRecipeStore } from '../recipeStore'; // Note: Named import { useRecipeStore }

const AddRecipeForm = () => {
    // Select the 'addRecipe' action from the store
    const addRecipe = useRecipeStore(state => state.addRecipe);
    
    // Local state for form inputs
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        
        if (!title || !description) {
            // Note: Using console.error instead of alert()
            console.error('Please fill in both the title and description.');
            return;
        }

        // Add the new recipe using the store action
        addRecipe({ 
            id: Date.now(), 
            title, 
            description 
        });
        
        // Reset local state
        setTitle('');
        setDescription('');
    };

    const formStyle = {
        padding: '20px',
        backgroundColor: '#EFF6FF', // Light Blue
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
    };

    const inputStyle = {
        width: '100%',
        padding: '10px',
        margin: '8px 0',
        borderRadius: '4px',
        border: '1px solid #D1D5DB',
        boxSizing: 'border-box'
    };

    const buttonStyle = {
        padding: '10px 15px',
        backgroundColor: '#3B82F6', // Blue
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        fontWeight: 'bold',
        marginTop: '10px'
    };

    return (
        <form onSubmit={handleSubmit} style={formStyle}>
            <h2 style={{ color: '#1E40AF', marginBottom: '15px' }}>Add a New Recipe</h2>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Recipe Title (e.g., Simple Pasta)"
                style={inputStyle}
                required
            />
            <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Brief Description and Ingredients"
                style={{ ...inputStyle, minHeight: '80px' }}
                required
            />
            <button type="submit" style={buttonStyle}>Add Recipe</button>
        </form>
    );
};

export default AddRecipeForm;