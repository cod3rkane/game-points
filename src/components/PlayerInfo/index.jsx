import React from 'react';
import * as R from 'ramda';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { CollectItem } from '../../entities/CollectItem';
import { createNewGame } from '../../reducers/actions';
import { ResumeItem } from '../ResumeItem';

export const PlayerInfor = ({ Inventory, newGame }) => {
  const allScores = R.cond([
    [R.isEmpty, R.always([0])],
    [R.T, R.reduce((acc, cv) => [...acc, cv.bonus, cv.score], [])],
  ]);
  const bonuses = R.cond([
    [R.isEmpty, R.always([0])],
    [R.T, R.reduce((acc, cv) => [...acc, cv.bonus], [])],
  ]);
  const items = R.reduce((acc, cv) => [...acc, ...cv], [], R.values(Inventory));
  const resumeItems = [];
  R.mapObjIndexed(
    (v, k) => {
      const score = R.map(e => e.bonus + e.score, v);
      resumeItems.push(
        <ResumeItem
          key={k}
          charId={k}
          length={v.length}
          score={R.sum(score)}
          color={R.head(v).color}
        />,
      );
    },
    Inventory,
  );

  return (
    <div className="playerInfor">
      <section className="score-resume">
        <div className="header">
          <h4>Item</h4>
          <h4>Qty</h4>
          <h4>Score</h4>
        </div>
        <div className="items">{resumeItems}</div>
      </section>
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
        <button type="button" onClick={newGame}>
          New Game
        </button>
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
