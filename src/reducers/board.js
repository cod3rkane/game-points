import * as R from 'ramda';

import { REMOVE_ITEM_FROM_BOARD, NEW_GAME, RESET_GAME } from './actions';
import { CollectItem } from '../entities/CollectItem';
import { randomstring } from '../util/randomString';
import { itemsData } from '../util/items';

const MAX_ITEMS = 25;
const getRandomItem = items => items[Math.floor(Math.random() * items.length)];
const newList = () => {
  const list = [];

  for (let i = 0; i < MAX_ITEMS; i++) {
    const item = getRandomItem(itemsData);
    list.push(
      new CollectItem({
        id: item.id,
        key: randomstring(),
        color: item.color,
        score: item.score,
      }),
    );
  }

  return list;
};

const initialState = {
  items: newList(),
};

export const Board = (state = initialState, action) => {
  const removeID = (evt) => {
    const items = R.reject(R.propEq('key', evt.payload), state.items);

    return { ...state, items };
  };
  const actionHandler = R.cond([
    [R.propEq('type', REMOVE_ITEM_FROM_BOARD), removeID],
    [R.propEq('type', RESET_GAME), R.always({ items: [] })],
    [R.propEq('type', NEW_GAME), R.always({ items: newList() })],
    [R.T, R.always(state)],
  ]);

  return actionHandler(action);
};

export default Board;
