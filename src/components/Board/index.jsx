import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { RandomItemSpawner } from '../RandomItemSpawner';

export const BoardGame = ({ Board }) => {
  console.log(Board);
  return (
    <div>
      <RandomItemSpawner items={Board.items} />
    </div>
  );
};

BoardGame.propTypes = {
  Board: PropTypes.shape({ items: PropTypes.array }).isRequired,
};

const mapStateToProps = ({ Board }) => ({ Board });
const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(BoardGame);
