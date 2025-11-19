function MainContent() {
    const mainStyle = {
        padding: '30px',
        textAlign: 'center',
        fontSize: '1.1rem',
        color: '#1F2937', // Dark text
        backgroundColor: '#E5E7EB', // Lighter gray background
        borderRadius: '8px',
        margin: '0 20px 20px 20px' // Margin around the content
    };

    return (
        <main style={mainStyle}>
            <p>I love to visit New York, Paris, and Tokyo.</p>
        </main>
    );
}

export default MainContent;