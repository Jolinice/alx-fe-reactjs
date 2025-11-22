import { create } from 'zustand';

// Define the initial state (an empty array of recipes) and the state actions.
const useRecipeStore = create(set => ({
  // State: An array to hold the recipes
  recipes: [],

  // Action: Function to add a new recipe
  addRecipe: (newRecipe) => 
    set(state => ({ 
      recipes: [...state.recipes, newRecipe] 
    })),
  
  // Action: Function to replace the entire recipe list (useful for initial load/API integration later)
  setRecipes: (recipes) => set({ recipes })
}));

export default useRecipeStore;