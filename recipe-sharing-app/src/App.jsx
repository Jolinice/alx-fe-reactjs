import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';

function App() {
    const appStyle = {
        maxWidth: '700px',
        margin: '0 auto',
        padding: '20px',
        fontFamily: 'sans-serif'
    };
    
    const headerStyle = {
        textAlign: 'center',
        color: '#059669', // Green
        borderBottom: '2px solid #10B981',
        paddingBottom: '10px',
        marginBottom: '30px'
    };

    return (
        <div style={appStyle}>
            <h1 style={headerStyle}>🍽️ Recipe Sharing App</h1>
            
            <AddRecipeForm />
            <RecipeList />
        </div>
    );
}

export default App;