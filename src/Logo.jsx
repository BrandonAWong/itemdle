import React, { useState } from 'react';
import './Logo.css';

function Logo() {
  const [shiftSpeed, setShiftSpeed] = useState(25);
  const handleClick = (e) => {
    setShiftSpeed(shiftSpeed - 1);
    e.target.style.animation = `hueshift ${Math.max(shiftSpeed, 1)}s linear infinite`;
  }

  return (
    <h1 
      onMouseDown={handleClick}
    >
    itemdle
    </h1>
  );
}

export default Logo;
