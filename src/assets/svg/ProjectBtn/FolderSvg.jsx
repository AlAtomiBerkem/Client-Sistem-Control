import React from 'react';

const FolderSvg = (props) => {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                height="40px"
                viewBox="0 -960 960 960"
                width="40px"
                fill="#4F9BDC"
                {...props}
            >
                <path d="M146.67-160q-27 0-46.84-20.17Q80-200.33 80-226.67v-506.66q0-26.34 19.83-46.5Q119.67-800 146.67-800H414l66.67 66.67h332.66q26.34 0 46.5 20.16Q880-693 880-666.67v440q0 26.34-20.17 46.5Q839.67-160 813.33-160H146.67Zm0-66.67h666.66v-440H453l-66.67-66.66H146.67v506.66Zm0 0v-506.66V-226.67Z"/></svg>
        );
}

export default FolderSvg;