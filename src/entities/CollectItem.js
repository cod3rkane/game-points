import { Record } from 'immutable';

export const CollectItem = Record({
  id: Number,
  color: String,
  key: Symbol,
  score: Number,
  bonus: Number,
});

export default CollectItem;
