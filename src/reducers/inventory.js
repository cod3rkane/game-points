/* eslint-disable no-underscore-dangle */
import * as R from 'ramda';

import { COLLECT_ITEM } from './actions';
import { bonusRules } from '../util/items';

const initialState = {};

export const Inventory = (state = initialState, action) => {
  const bonus = (state) => {
    return state;
  };
  const collect = R.compose(
    bonus,
    R.reduce((acc, cv) => ({ ...acc, [cv.id]: acc[cv.id] ? [...acc[cv.id], cv] : [cv] }), state),
    R.append(R.__, state),
    R.prop('payload'),
  );
  const actionHandler = R.cond([
    [R.propEq('type', COLLECT_ITEM), collect],
    [R.propEq('type', 'debug'), console.log],
    [R.T, R.always(state)],
  ]);

  return actionHandler(action);
};

export default Inventory;
