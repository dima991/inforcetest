import { ASC, DESC } from '../actions/types';

const initialState = {
  by: ASC,
};

export const sortReducer = (state = initialState, action) => {
  switch (action.type) {
    case ASC:
    case DESC:
      return {
        by: action.payload.by,
      };
    default:
      return state;
  }
};
