export const REMOVE_ITEM_FROM_BOARD = 'REMOVE_ITEM_FROM_BOARD';
export const COLLECT_ITEM = 'COLLECT_ITEM';
export const DELIVERY_TO_INVENTORY = 'DELIVERY_TO_INVENTORY';
export const UPDATE_SCORE = 'UPDATE_SCORE';
export const NEW_GAME = 'NEW_GAME';

export const removeItemFromBoard = payload => ({
  type: REMOVE_ITEM_FROM_BOARD,
  payload,
});

export const collectItem = payload => (dispatch) => {
  dispatch(removeItemFromBoard(payload.key));
  dispatch({
    type: COLLECT_ITEM,
    payload,
  });
};

export const createNewGame = payload => ({
  type: NEW_GAME,
  payload,
});
