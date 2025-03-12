import React, { useState } from 'react';
import './MyInputStyle.css';
import CrossClose from "../../assets/svg/CrossClose";


const MyInput = ({ register, name, ...props }) => {
    const [inputValue, setInputValue] = useState('');

    const handleClear = () => {
        setInputValue('');
        if (register) {
            register.onChange({ target: { name, value: '' } });
        }
    };

    return (
        <div className="custom-input-conteiner">
            <div className="input-close">
                <input
                    {...props}
                    {...register}
                    value={inputValue}
                    onChange={(e) => {
                        setInputValue(e.target.value);
                        if (props.onChange) {
                            props.onChange(e);
                        }
                    }}
                    className='custom-input'
                />
                <div className="close" onClick={handleClear}>
                    <CrossClose className='close-icon' />
                </div>
            </div>
        </div>
    );
};

export default MyInput;
