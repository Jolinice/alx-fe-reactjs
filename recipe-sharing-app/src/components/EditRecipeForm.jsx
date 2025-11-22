import { useState } from 'react';
import { useRecipeStore } from '../recipeStore';

// Destructure props explicitly
const EditRecipeForm = ({ recipe, onSave }) => {
    const updateRecipe = useRecipeStore(state => state.updateRecipe);
    const [title, setTitle] = useState(recipe.title);
    const [description, setDescription] = useState(recipe.description);

    const handleSubmit = (event) => {
        event.preventDefault();
        
        if (!title || !description) return;

        // Ensure the ID is correctly used when updating the store
        updateRecipe({ 
            id: recipe.id, // Use the existing recipe ID
            title, 
            description 
        });
        
        // Call the external save handler
        onSave();
    };
    
    const formStyle = {
        padding: '15px',
        backgroundColor: '#FFFAE8', 
        borderRadius: '8px',
        border: '1px dashed #F59E0B',
        marginTop: '20px'
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
        backgroundColor: '#F59E0B',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        fontWeight: 'bold',
        marginTop: '10px',
        marginRight: '10px'
    };

    return (
        <form onSubmit={handleSubmit} style={formStyle}>
            <h4 style={{ color: '#F59E0B' }}>Edit Recipe</h4>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Title"
                style={inputStyle}
                required
            />
            <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Description"
                style={{ ...inputStyle, minHeight: '80px' }}
                required
            />
            <button type="submit" style={buttonStyle}>Save Changes</button>
            <button type="button" onClick={onSave} style={{...buttonStyle, backgroundColor: '#6B7280'}}>Cancel</button>
        </form>
    );
};

export default EditRecipeForm;