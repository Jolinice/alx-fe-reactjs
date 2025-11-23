import { Routes, Route, Link } from 'react-router-dom';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif', maxWidth: '600px', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center' }}>
        <Link to="/" style={{ textDecoration: 'none', color: 'green' }}>
          Recipe Sharing App
        </Link>
      </h1>
      
      <Routes>
        <Route 
          path="/" 
          element={
            <>
              <SearchBar />
              <AddRecipeForm />
              <RecipeList />
            </>
          } 
        />
        <Route path="/recipes/:recipeId" element={<RecipeDetails />} />
      </Routes>
    </div>
  );
}

export default App;