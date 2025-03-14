import React from 'react';

const Arrow = (props) => {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#BFC1C0"
                {...props}
            >
                <path d="M360-240 120-480l240-240 56 56-144 144h568v80H272l144 144-56 56Z"/></svg>
        );
    }


export default Arrow;