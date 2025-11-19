function Services() {
    const containerStyle = {
        padding: '40px',
        backgroundColor: '#FEE2E2', // Light Red/Pink
        borderRadius: '8px',
        margin: '20px 0'
    };
    
    const h1Style = {
        color: '#EF4444', // Red
        fontSize: '2rem',
        marginBottom: '20px'
    };

    const ulStyle = {
        listStyleType: 'disc',
        paddingLeft: '40px',
        color: '#4B5563',
        fontSize: '1.1rem'
    };

    const liStyle = {
        marginBottom: '10px'
    };

    return (
        <div style={containerStyle}>
            <h1 style={h1Style}>Our Core Services</h1>
            <ul style={ulStyle}>
                <li style={liStyle}>Technology Consulting: Cloud architecture and scalability solutions.</li>
                <li style={liStyle}>Market Analysis: Data-driven insights for competitive strategy.</li>
                <li style={liStyle}>Product Development: Full-cycle design and engineering of digital products.</li>
                <li style={liStyle}>Digital Marketing: SEO, PPC, and content strategy for growth.</li>
            </ul>
        </div>
    );
}

export default Services;