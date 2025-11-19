function Footer() {
    const footerStyle = {
        textAlign: 'center',
        padding: '10px 0',
        backgroundColor: '#1E40AF', // A slightly different blue
        color: '#D1D5DB', // Light gray text
        fontSize: '0.9rem',
        marginTop: '20px',
        borderRadius: '0 0 8px 8px' // Rounded bottom corners
    };
    
    return (
        <footer style={footerStyle}>
            <p>© 2023 City Lovers</p>
        </footer>
    );
}

export default Footer;