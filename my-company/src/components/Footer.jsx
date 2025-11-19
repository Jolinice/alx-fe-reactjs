function Footer() {
    const footerStyle = {
        textAlign: 'center',
        padding: '20px 0',
        backgroundColor: '#1F2937', 
        color: '#9CA3AF', 
        fontSize: '0.9rem',
        marginTop: '20px',
        borderRadius: '0 0 8px 8px'
    };
    
    return (
        <footer style={footerStyle}>
            <p>© {new Date().getFullYear()} Stellar Corp. All rights reserved.</p>
        </footer>
    );
}

export default Footer;