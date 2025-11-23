import create from 'zustand';

const useRecipeStore = create(set => ({
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],
  
  // Action to add a recipe and filter immediately
  addRecipe: (newRecipe) => set(state => {
    const updatedRecipes = [...state.recipes, newRecipe];
    return { 
      recipes: updatedRecipes,
      filteredRecipes: updatedRecipes.filter(recipe =>
        recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      )
    };
  }),

  // Action to delete a recipe and filter immediately
  deleteRecipe: (recipeId) => set(state => {
    const updatedRecipes = state.recipes.filter(recipe => recipe.id !== recipeId);
    return {
      recipes: updatedRecipes,
      filteredRecipes: updatedRecipes.filter(recipe =>
        recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      )
    };
  }),

  // Action to update a recipe and filter immediately
  updateRecipe: (updatedRecipe) => set(state => {
    const updatedRecipes = state.recipes.map(recipe =>
      recipe.id === updatedRecipe.id ? updatedRecipe : recipe
    );
    return {
      recipes: updatedRecipes,
      filteredRecipes: updatedRecipes.filter(recipe =>
        recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      )
    };
  }),

  setRecipes: (recipes) => set({ recipes, filteredRecipes: recipes }),

  // Action to set search term and filter recipes
  setSearchTerm: (term) => set(state => {
    const newSearchTerm = term;
    return {
      searchTerm: newSearchTerm,
      filteredRecipes: state.recipes.filter(recipe =>
        recipe.title.toLowerCase().includes(newSearchTerm.toLowerCase())
      )
    };
  })
}));

export { useRecipeStore };