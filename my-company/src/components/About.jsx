function About() {
    const containerStyle = {
        padding: '40px',
        backgroundColor: '#DBEAFE', // Light Blue
        borderRadius: '8px',
        margin: '20px 0',
        borderLeft: '5px solid #3B82F6'
    };
    
    const h1Style = {
        color: '#1D4ED8', // Darker Blue
        fontSize: '2rem',
        marginBottom: '15px'
    };

    const pStyle = {
        color: '#4B5563',
        lineHeight: '1.6'
    };

    return (
        <div style={containerStyle}>
            <h1 style={h1Style}>About Us: Our Mission</h1>
            <p style={pStyle}>Our company has been providing top-notch solutions since 1990. We specialize in various fields including cutting-edge technology, strategic marketing, and comprehensive consultancy. Our mission is to empower businesses through transformative digital strategies.</p>
        </div>
    );
}

export default About;