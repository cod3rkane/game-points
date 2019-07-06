import { CollectItem } from '../entities/CollectItem';
import { randomstring } from '../util/randomString';

const initialState = {
  items: [new CollectItem({ id: 65, key: randomstring(), color: '#293132' })],
};

export const Board = (state = initialState) => {
  return state;
};

export default Board;
