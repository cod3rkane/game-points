import { Record } from 'immutable';

export const CollectItem = Record({
  id: Number,
  color: '',
  key: '',
  score: 0,
  bonus: 0,
  hasBonus: false,
});

export default CollectItem;
