import { Record } from 'immutable';

export const CollectItem = Record({
  id: Number,
  color: String,
  key: String,
  score: Number,
  bonus: Number,
  hasBonus: Boolean,
});

export default CollectItem;
