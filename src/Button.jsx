import React from 'react';

// Definición del componente Button
const Button = ({ text, onClick, type }) => {
  return (
    <button type={type} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
