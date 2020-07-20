import {
  SEARCH_BREWERIES,
  GET_BREWERY,
  CLEAR_BREWERIES,
  SET_LOADING,
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case SEARCH_BREWERIES:
      return {
        ...state,
        breweries: action.payload,
        loading: false,
      };
    case GET_BREWERY:
      return {
        ...state,
        brewery: action.payload,
        loading: false,
      };
    case CLEAR_BREWERIES:
      return {
        ...state,
        breweries: [],
        loading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};
