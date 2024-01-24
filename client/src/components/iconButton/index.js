import React from 'react';
import "./style.css"

const IconButton = ({ 
    onClick, 
    children, 
}) => {
  return (
    <button
    className={`icon-button`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default IconButton;
