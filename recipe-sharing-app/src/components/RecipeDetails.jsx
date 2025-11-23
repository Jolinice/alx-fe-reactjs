import { useRecipeStore } from '../recipeStore';
import { useParams } from 'react-router-dom';
import EditRecipeForm from './EditRecipeForm';
import DeleteRecipeButton from './DeleteRecipeButton';

const RecipeDetails = () => {
  const { recipeId } = useParams();
  const recipe = useRecipeStore(state =>
    state.recipes.find(recipe => recipe.id === Number(recipeId))
  );
  const addFavorite = useRecipeStore(state => state.addFavorite);
  const removeFavorite = useRecipeStore(state => state.removeFavorite);
  const favorites = useRecipeStore(state => state.favorites);

  if (!recipe) {
    return <div>Recipe not found</div>;
  }

  const isFavorite = favorites.includes(recipe.id);

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', margin: '20px' }}>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>
      
      {/* Favorite Toggle Button */}
      <button 
        onClick={() => isFavorite ? removeFavorite(recipe.id) : addFavorite(recipe.id)}
        style={{ 
          backgroundColor: isFavorite ? '#ff4d4d' : '#4d79ff', 
          color: 'white', 
          padding: '10px', 
          border: 'none', 
          borderRadius: '5px',
          cursor: 'pointer',
          marginBottom: '10px'
        }}
      >
        {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
      </button>

      <EditRecipeForm recipe={recipe} />
      <DeleteRecipeButton recipeId={recipe.id} />
    </div>
  );
};

export default RecipeDetails;