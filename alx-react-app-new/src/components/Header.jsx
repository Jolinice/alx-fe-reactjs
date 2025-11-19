function Header() {
    // Defines a JavaScript object for inline styling
    const headerStyle = {
        backgroundColor: '#1E3A8A', // Dark Blue
        color: 'white',
        textAlign: 'center',
        padding: '15px 0',
        marginBottom: '20px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        borderRadius: '8px 8px 0 0' 
    };

    return (
        // Applies the style object using the `style` attribute
        <header style={headerStyle}>
            <h1>My Favorite Cities</h1>
        </header>
    );
}

export default Header;