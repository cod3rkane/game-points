/* eslint-disable no-underscore-dangle */
import * as R from 'ramda';

import { COLLECT_ITEM, NEW_GAME } from './actions';
import { bonusRules } from '../util/items';

const initialState = {};

export const Inventory = (state = initialState, action) => {
  const bonus = (minorState) => {
    const newState = R.mapObjIndexed((v, k) => {
      const score = R.prop(k, bonusRules);
      if (score) {
        const items = R.reject(R.propEq('hasBonus', true), v);
        if (items.length >= score.group) {
          const mapIndex = R.addIndex(R.map);
          const newItems = mapIndex((e, i) => {
            const index = i + 1;
            if (index <= items.length) {
              if (index === items.length) {
                const eBonus = e.set('bonus', score.score);

                return eBonus.set('hasBonus', true);
              }

              return e.set('hasBonus', true);
            }

            return e;
          }, items);
          const keys = R.map(e => e.key, newItems);
          const cleanItems = R.reject(e => R.includes(e.key, keys), v);

          return [...newItems, ...cleanItems];
        }
      }

      return v;
    }, minorState);

    return newState;
  };
  const collect = R.compose(
    bonus,
    R.reduce((acc, cv) => ({ ...acc, [cv.id]: acc[cv.id] ? [...acc[cv.id], cv] : [cv] }), state),
    R.append(R.__, state),
    R.prop('payload'),
  );
  const actionHandler = R.cond([
    [R.propEq('type', COLLECT_ITEM), collect],
    [R.propEq('type', NEW_GAME), R.always({})],
    [R.T, R.always(state)],
  ]);

  return actionHandler(action);
};

export default Inventory;
