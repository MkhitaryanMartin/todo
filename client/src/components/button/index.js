import React from 'react';
import "./style.css";

const Button = ({
    text,
    disabled = false,
    onClick=()=>{}
}) => {
    return (
        <button
            className={disabled ? 'Button disabled': 'Button'}
            disabled={disabled}
            onClick={onClick}
        >
            {text}
        </button>
    );
};

export default Button;