import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { collectItem } from '../../reducers/actions';

export const PlayerInfor = ({ Inventory }) => {
  console.log(Inventory);
  return (
    <div className="playerInfor">
      <div>
        <h2>Player Items</h2>
      </div>
    </div>
  );
};

PlayerInfor.propTypes = {
  Inventory: PropTypes.objectOf(collectItem).isRequired,
};

const mapStateToProps = ({ Inventory }) => ({ Inventory });
const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(PlayerInfor);
