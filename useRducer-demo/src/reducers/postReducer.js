import { ACTION_TYPE } from "../constants/postActionTypes";

export const INITIAL_STATE = {
  loading: false,
  post: {},
  error: false,
};

export const postReducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPE.FETCH_START:
      return {
        loading: true,
        error: false,
        post: {},
      };
    case ACTION_TYPE.FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        post: action.payload,
      };
    case ACTION_TYPE.FETCH_ERROR:
      return {
        loading: false,
        error: true,
        post: {},
      };
    default:
      return state;
  }
};
