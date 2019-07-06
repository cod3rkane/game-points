/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';

export const ColorItem = ({ color, id, onClick }) => (
  <div className="colorItem" style={{ backgroundColor: color }} onClick={onClick} role="button" tabIndex={id}>
    <span>{String.fromCharCode(id)}</span>
  </div>
);

export default ColorItem;
