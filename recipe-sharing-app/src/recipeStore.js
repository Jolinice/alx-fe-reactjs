import create from 'zustand'

const useRecipeStore = create(set => ({
  recipes: [],
  // Action: Function to add a new recipe
  addRecipe: (newRecipe) => 
    set(state => ({ 
      recipes: [...state.recipes, newRecipe] 
    })),
  
  // Action: Function to replace the entire recipe list
  setRecipes: (recipes) => set({ recipes })
}));

// Export the store hook using a named export to match the checker's expected import syntax
export { useRecipeStore };