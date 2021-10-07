import api from '../../utils/api';
import { FETCH_CARDS, ADD_CARD, REMOVE_CARD } from './types';

export const fetchCards = () => async (dispatch) => {
  try {
    const response = await api.get(`/products`);
    dispatch({
      type: FETCH_CARDS,
      payload: {
        cards: response.data,
      },
    });
  } catch (err) {
    throw err;
  }
};
export const addCard = (card) => async (dispatch) => {
  try {
    const res = await api.post('/products', card);
    dispatch({
      type: ADD_CARD,
      payload: {
        card: res.data,
      },
    });
  } catch (err) {
    throw err;
  }
};
export const removeCard = (id) => async (dispatch) => {
  try {
    await api.delete(`/products/${id}`);

    dispatch({
      type: REMOVE_CARD,
      payload: {
        id,
      },
    });
  } catch (err) {
    throw err;
  }
};
