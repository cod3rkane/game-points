/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const ColorItem = ({ color, id, onClick }) => {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    if (!click) {
      setClick(true);
      onClick();
    }
  };

  return (
    <div className="colorItem" style={{ backgroundColor: color }} onClick={handleClick} role="button" tabIndex={id}>
      <span>{String.fromCharCode(id)}</span>
    </div>
  );
};

ColorItem.propTypes = {
  color: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ColorItem;
