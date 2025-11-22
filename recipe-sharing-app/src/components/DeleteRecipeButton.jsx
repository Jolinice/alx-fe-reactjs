import { useRecipeStore } from '../recipeStore';

const DeleteRecipeButton = ({ recipeId }) => {
    // Select the deleteRecipe action
    const deleteRecipe = useRecipeStore(state => state.deleteRecipe);

    const handleDelete = () => {
        if (window.confirm("Are you sure you want to delete this recipe?")) {
            deleteRecipe(recipeId);
            // After deleting, navigate back to the home page (RecipeList)
            window.location.href = '/'; 
        }
    };

    const buttonStyle = {
        padding: '8px 15px',
        backgroundColor: '#EF4444', // Red
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