import { useRecipeStore } from '../recipeStore';

const RecommendationsList = () => {
  const recommendations = useRecipeStore(state => state.recommendations);

  return (
    <div style={{ padding: '20px', backgroundColor: '#fff0f5', margin: '20px 0', borderRadius: '8px' }}>
      <h2>Recommended for You</h2>
      {recommendations.length === 0 ? (
        <p>No recommendations available at the moment.</p>
      ) : (
        recommendations.map(recipe => (
          <div key={recipe.id} style={{ borderBottom: '1px solid #ccc', padding: '10px 0' }}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default RecommendationsList;