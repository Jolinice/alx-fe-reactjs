import create from 'zustand';

const useRecipeStore = create(set => ({
  recipes: [],
  
  // 1. Action: Function to add a new recipe
  addRecipe: (newRecipe) => 
    set(state => ({ 
      recipes: [...state.recipes, newRecipe] 
    })),
  
  // 2. Action: Function to delete a recipe by ID
  deleteRecipe: (recipeId) => 
    set(state => ({
      recipes: state.recipes.filter(recipe => recipe.id !== recipeId)
    })),
    
  // 3. Action: Function to update an existing recipe
  updateRecipe: (updatedRecipe) =>
    set(state => ({
      recipes: state.recipes.map(recipe => 
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      )
    })),

  // Action: Function to replace the entire recipe list
  setRecipes: (recipes) => set({ recipes })
}));

export { useRecipeStore };