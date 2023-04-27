import React from 'react';

const Button = ({ text, callback, style }) => {
  return (
    <button onClick={callback} className={style}>
      {text}
    </button>
  );
};

export default Button;
