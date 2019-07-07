import React from 'react';
import * as R from 'ramda';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { collectItem } from '../../reducers/actions';

export const PlayerInfor = ({ Inventory }) => {
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
        <button type="button">New Game</button>
      </section>
    </div>
  );
};

PlayerInfor.propTypes = {
  Inventory: PropTypes.objectOf(collectItem).isRequired,
};

const mapStateToProps = ({ Inventory }) => ({ Inventory });
const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PlayerInfor);
