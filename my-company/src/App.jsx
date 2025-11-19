import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';

function App() {
    const appContainerStyle = {
        maxWidth: '900px',
        margin: '0 auto',
        padding: '0 20px',
        fontFamily: 'sans-serif',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column'
    };
    
    const contentStyle = {
        flexGrow: 1,
        paddingBottom: '40px'
    };

    return (
        <div style={appContainerStyle}>
            <Navbar />
            
            <div style={contentStyle}>
                {/* Routes defines the area where components are rendered based on the URL */}
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </div>
            
            <Footer />
        </div>
    );
}

export default App;