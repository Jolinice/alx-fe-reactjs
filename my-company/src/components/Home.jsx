function Home() {
    const containerStyle = {
        padding: '40px',
        textAlign: 'center',
        backgroundColor: '#F3F4F6', // Light Gray
        borderRadius: '8px',
        margin: '20px 0'
    };
    
    const h1Style = {
        color: '#10B981', // Green
        fontSize: '2.5rem',
        marginBottom: '15px'
    };

    const pStyle = {
        color: '#4B5563',
        fontSize: '1.1rem'
    };

    return (
        <div style={containerStyle}>
            <h1 style={h1Style}>Welcome to Stellar Corp</h1>
            <p style={pStyle}>We are dedicated to delivering excellence in all our services, driving innovation and success for our clients worldwide.</p>
        </div>
    );
}

export default Home;