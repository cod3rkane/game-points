import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { RandomItemSpawner } from '../RandomItemSpawner';
import { collectItem } from '../../reducers/actions';

export const BoardGame = ({ Board, collect }) => {
  return (
    <div>
      <RandomItemSpawner items={Board.items} onCollectItem={collect} />
    </div>
  );
};

BoardGame.propTypes = {
  Board: PropTypes.shape({ items: PropTypes.array }).isRequired,
  collect: PropTypes.func.isRequired,
};

const mapStateToProps = ({ Board }) => ({ Board });
const mapDispatchToProps = dispatch => ({
  collect: item => dispatch(collectItem(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BoardGame);
