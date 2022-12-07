import { FORM_ACTION_TYPES } from "../constants/formActionTypes";

export const INITIAL_STATE = {
  title: "",
  desc: "",
  price: 0,
  category: "",
  tags: [],
  images: {
    sm: "",
    md: "",
    lg: "",
  },
  quantity: 0,
};

export const formReducer = (state, action) => {
  switch (action.type) {
    case FORM_ACTION_TYPES.CHANGE_INPUT:
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    case FORM_ACTION_TYPES.ADD_TAG:
      return {
        ...state,
        tags: [...state.tags, action.payload],
      };
    case FORM_ACTION_TYPES.REMOVE_TAG:
      return {
        ...state,
        tags: state.tags.filter((tag) => tag !== action.payload),
      };
    case FORM_ACTION_TYPES.INCREASE:
      return {
        ...state,
        quantity: state.quantity + 1,
      };
    case FORM_ACTION_TYPES.DECREASE:
      return {
        ...state,
        quantity: state.quantity - 1,
      };

    default:
      return state;
  }
};
