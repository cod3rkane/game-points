import { map } from 'ramda';

import { CollectItem } from '../entities/CollectItem';
import { randomstring } from '../util/randomString';
import { itemsData } from '../util/items';

const initialState = {
  items: map(e => new CollectItem({ id: e.id, key: randomstring(), color: e.color }), itemsData),
};

export const Board = (state = initialState) => {
  return state;
};

export default Board;
