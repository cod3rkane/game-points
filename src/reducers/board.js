import * as R from 'ramda';

import { REMOVE_ITEM_FROM_BOARD } from './actions';
import { CollectItem } from '../entities/CollectItem';
import { randomstring } from '../util/randomString';
import { itemsData } from '../util/items';

const initialState = {
  items: R.map(
    e => new CollectItem({
      id: e.id, key: randomstring(), color: e.color, score: e.score,
    }),
    itemsData,
  ),
};

export const Board = (state = initialState, action) => {
  const removeID = (evt) => {
    const items = R.reject(R.propEq('key', evt.payload), state.items);

    return { ...state, items };
  };
  const actionHandler = R.cond([
    [R.propEq('type', REMOVE_ITEM_FROM_BOARD), removeID],
    [R.propEq('type', 'debug'), console.log],
    [R.T, R.always(state)],
  ]);

  return actionHandler(action);
};

export default Board;
