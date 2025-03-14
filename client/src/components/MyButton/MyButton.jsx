import React from 'react';

const MyButton = ({type, onClick, children}) => {
        return (
            <button
                type={type}
                onClick={onClick}
                style={{
                    width: '80%',
                    padding: '10px 20px',
                    borderRadius: '10px',
                    color: '#fff',
                    backgroundColor: '#1886E5',
                }}
            >
                {children}
            </button>
        );
    }

export default MyButton;