import {
  LIST_VIDEO,
  UPDATE_ADD_TO_LIBRARY
} from '../constants/actionTypes';

export default (state = {}, action) => {
  switch (action.type) {
    case LIST_VIDEO:
      return {
        ...state,
        listVideo: action.payload.response.items,
      };

    case UPDATE_ADD_TO_LIBRARY:
      return {
        ...state,
        addToLibFlag: action.payload,
      };

    default:
      return state;
  }
};
