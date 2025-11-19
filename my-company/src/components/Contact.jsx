import { useState } from 'react';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Custom message box instead of alert()
        setStatus('Thank you, ' + formData.name + '! Your message has been received.');
        
        // Reset form data after "submission"
        setFormData({ name: '', email: '', message: '' });
        
        // Clear status after 5 seconds
        setTimeout(() => setStatus(''), 5000);
    };
    
    const containerStyle = {
        padding: '40px',
        backgroundColor: '#EFF6FF', 
        borderRadius: '8px',
        margin: '20px 0'
    };
    
    const inputStyle = {
        width: '100%',
        padding: '12px',
        margin: '10px 0',
        borderRadius: '6px',
        border: '1px solid #D1D5DB',
        boxSizing: 'border-box'
    };
    
    const buttonStyle = {
        padding: '12px 25px',
        backgroundColor: '#2563EB', // Blue
        color: 'white',
        border: 'none',
        borderRadius: '6px',
        cursor: 'pointer',
        fontWeight: 'bold',
        marginTop: '10px'
    };

    return (
        <div style={containerStyle}>
            <h1 style={{ color: '#2563EB', marginBottom: '20px' }}>Contact Our Team</h1>
            
            {status && (
                <p style={{ backgroundColor: '#D1FAE5', color: '#059669', padding: '10px', borderRadius: '6px', marginBottom: '20px' }}>
                    {status}
                </p>
            )}

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    style={inputStyle}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    style={inputStyle}
                    required
                />
                <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    style={{ ...inputStyle, minHeight: '100px' }}
                    required
                />
                <button type="submit" style={buttonStyle}>Send Message</button>
            </form>
        </div>
    );
}

export default Contact;