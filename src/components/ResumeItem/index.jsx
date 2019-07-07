import React from 'react';
import PropTypes from 'prop-types';

export const ResumeItem = ({
  charId, length, score, color,
}) => (
  <div>
    <span style={{ backgroundColor: color }} className="color-item-small">{String.fromCharCode(charId)}</span>
    <span>{length}</span>
    <span>{score}</span>
  </div>
);

ResumeItem.propTypes = {
  charId: PropTypes.string.isRequired,
  length: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
};

export default ResumeItem;
