import { useNavigate } from 'react-router-dom';
import { useRecipeStore } from '../recipeStore';

const DeleteRecipeButton = ({ recipeId }) => {
    const navigate = useNavigate(); // Hook for navigation
    const deleteRecipe = useRecipeStore(state => state.deleteRecipe);

    const handleDelete = () => {
        if (window.confirm("Are you sure you want to delete this recipe?")) {
            deleteRecipe(recipeId);
            // Programmatic navigation is preferred over window.location.href
            navigate('/'); 
        }
    };

    const buttonStyle = {
        padding: '8px 15px',
        backgroundColor: '#EF4444', 
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        fontWeight: 'bold',
        marginLeft: '10px'
    };

    return (
        <button onClick={handleDelete} style={buttonStyle}>
            Delete Recipe
        </button>
    );
};

export default DeleteRecipeButton;