import {
  GET_NUMBER,
  GET_NUMBER_SUCCESS,
  GET_NUMBER_FAILURE,
} from '../constants';

export const getNumber = (payload) => ({
  type: GET_NUMBER,
  payload,
});

export const getNumberSuccess = (payload) => ({
  type: GET_NUMBER_SUCCESS,
  payload,
});
export const getNumberFailure = (payload) => ({
  type: GET_NUMBER_FAILURE,
  payload,
});
