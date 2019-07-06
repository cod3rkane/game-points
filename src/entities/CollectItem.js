import { Record } from 'immutable';

export const CollectItem = Record({
  id: Number,
  color: String,
  key: Symbol,
});

export default CollectItem;
