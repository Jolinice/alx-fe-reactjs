import { useState } from 'react';

function Counter() {
    // Initialize state: count starts at 0, setCount is the function to update it.
    const [count, setCount] = useState(0);

    // Style objects for the component
    const counterContainerStyle = {
        textAlign: 'center',
        padding: '30px',
        margin: '20px auto',
        maxWidth: '400px',
        border: '3px solid #10B981', // Green border
        borderRadius: '16px',
        backgroundColor: '#ECFDF5', // Light green background
        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)'
    };

    const buttonStyle = {
        padding: '10px 20px',
        margin: '5px',
        fontSize: '1rem',
        cursor: 'pointer',
        borderRadius: '6px',
        border: 'none',
        fontWeight: 'bold',
        transition: 'background-color 0.3s'
    };

    const incrementStyle = { ...buttonStyle, backgroundColor: '#059669', color: 'white' };
    const decrementStyle = { ...buttonStyle, backgroundColor: '#EF4444', color: 'white' };
    const resetStyle = { ...buttonStyle, backgroundColor: '#6B7280', color: 'white' };

    return (
        <div style={counterContainerStyle}>
            <h2 style={{ color: '#047857' }}>Simple Counter</h2>
            
            {/* Display the current state value */}
            <p style={{ fontSize: '2.5rem', margin: '15px 0', fontWeight: '900', color: '#10B981' }}>
                Current Count: {count}
            </p>

            <div>
                {/* Increment: Updates state by adding 1 */}
                <button style={incrementStyle} onClick={() => setCount(count + 1)}>
                    Increment
                </button>
                
                {/* Decrement: Updates state by subtracting 1 */}
                <button style={decrementStyle} onClick={() => setCount(count - 1)}>
                    Decrement
                </button>
                
                {/* Reset: Sets state back to 0 */}
                <button style={resetStyle} onClick={() => setCount(0)}>
                    Reset
                </button>
            </div>
        </div>
    );
}

export default Counter;