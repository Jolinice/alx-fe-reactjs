import { Link } from 'react-router-dom';
import { useRecipeStore } from '../recipeStore';

const RecipeList = () => {
  // Use filteredRecipes instead of recipes
  const recipes = useRecipeStore(state => state.filteredRecipes);

  return (
    <div>
      {recipes.length === 0 ? (
        <p>No recipes found.</p>
      ) : (
        recipes.map(recipe => (
          <div key={recipe.id} style={{ borderBottom: '1px solid #ccc', padding: '10px 0' }}>
            <h3>
              <Link to={`/recipes/${recipe.id}`} style={{ textDecoration: 'none', color: 'blue' }}>
                {recipe.title}
              </Link>
            </h3>
            <p>{recipe.description}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default RecipeList;