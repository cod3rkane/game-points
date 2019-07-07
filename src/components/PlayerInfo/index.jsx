import React from 'react';
import * as R from 'ramda';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { CollectItem } from '../../entities/CollectItem';
import { createNewGame } from '../../reducers/actions';

export const PlayerInfor = ({ Inventory, newGame }) => {
  const allScores = R.cond([
    [R.isEmpty, R.always([0])],
    [R.T, R.reduce((acc, cv) => [...acc, cv.bonus, cv.score], [])],
  ]);
  const bonuses = R.cond([
    [R.isEmpty, R.always([0])],
    [R.T, R.reduce((acc, cv) => [...acc, cv.bonus], [])],
  ]);
  const items = R.reduce((acc, cv) => ([...acc, ...cv]), [], R.values(Inventory));

  return (
    <div className="playerInfor">
      <section className="score-resume" />
      <section className="score flex">
        <div>
          <h4>Bonuses</h4>
        </div>
        <div>
          <span className="bonus">{R.sum(bonuses(items))}</span>
        </div>
        <div>
          <h4>Total</h4>
        </div>
        <div>
          <span className="score">{R.sum(allScores(items))}</span>
        </div>
      </section>
      <section className="actions flex">
        <button type="button" onClick={newGame}>New Game</button>
      </section>
    </div>
  );
};

PlayerInfor.propTypes = {
  Inventory: PropTypes.objectOf(CollectItem).isRequired,
  newGame: PropTypes.func.isRequired,
};

const mapStateToProps = ({ Inventory }) => ({ Inventory });
const mapDispatchToProps = dispatch => ({
  newGame: () => dispatch(createNewGame()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PlayerInfor);
