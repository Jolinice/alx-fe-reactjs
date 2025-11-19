import { Link } from 'react-router-dom';

function Navbar() {
    const navStyle = {
        backgroundColor: '#1F2937', // Dark Gray
        padding: '15px 25px',
        display: 'flex',
        justifyContent: 'center',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
        borderRadius: '8px 8px 0 0',
    };

    const linkStyle = {
        color: 'white',
        textDecoration: 'none',
        margin: '0 20px',
        fontSize: '1.1rem',
        fontWeight: '500',
        transition: 'color 0.3s',
    };

    return (
        <nav style={navStyle}>
            <Link to="/" style={linkStyle}>Home</Link>
            <Link to="/about" style={linkStyle}>About</Link>
            <Link to="/services" style={linkStyle}>Services</Link>
            <Link to="/contact" style={linkStyle}>Contact</Link>
        </nav>
    );
}

export default Navbar;