import {
  GET_NUMBER,
  GET_NUMBER_SUCCESS,
  GET_NUMBER_FAILURE,
} from '../constants';

export const initialState = {
  data: [],
  loading: true,
  errorMessage: [],
};

const getNumberReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_NUMBER:
      return {
        ...state,
        ...payload,
        loading: true,
      };
    case GET_NUMBER_SUCCESS:
      return {
        ...state,
        ...payload,
        loading: false,
      };
    case GET_NUMBER_FAILURE:
      return {
        ...state,
        ...payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default getNumberReducer;
