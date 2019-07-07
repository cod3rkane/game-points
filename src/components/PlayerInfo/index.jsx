import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { collectItem } from '../../reducers/actions';

export const PlayerInfor = ({ Inventory }) => {
  return (
    <div className="playerInfor">
      <section className="score-resume"></section>
      <section className="score-bonus flex">
        <h4>Bonuses</h4>
        <span className="bonus">999</span>
      </section>
      <section className="score-total">
        <div className="flex">
          <h4>Total</h4>
          <span className="score">999</span>
        </div>
        <div className="actions flex">
          <button>New Game</button>
        </div>
      </section>
    </div>
  );
};

PlayerInfor.propTypes = {
  Inventory: PropTypes.objectOf(collectItem).isRequired,
};

const mapStateToProps = ({ Inventory }) => ({ Inventory });
const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(PlayerInfor);
