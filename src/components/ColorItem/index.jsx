import React from 'react';

export const ColorItem = ({ color, id, onClick }) => {
  return (
    <div style={{ backgroundColor: color }}>
      <span>{String.fromCharCode(id)}</span>
    </div>
  );
};

export default ColorItem;
