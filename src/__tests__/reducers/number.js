import * as types from '../../store/constants';
import reducer, { initialState } from '../../store/reducers/numbers';

describe('Number reducers', () => {
  const action = {
    type: types.GET_NUMBER,
    payload: { month: '01', day: '01' },
  };

  const getNumberState = {
    data: [],
    day: '01',
    errorMessage: [],
    loading: true,
    month: '01',
  };

  const getNumberSuccessFailureState = {
    data: [],
    day: '01',
    errorMessage: [],
    loading: true,
    month: '01',
  };

  it('should return initial state', () => {
    expect(reducer(initialState, {})).toEqual(initialState);
  });

  it('should update state with GET_NUMBER payload', () => {
    expect(reducer(initialState, action)).toEqual(getNumberState);
  });

  it('should update state with GET_NUMBER_FAILURE payload', () => {
    expect(reducer(initialState, action)).toEqual(getNumberSuccessFailureState);
  });

  it('should update state with GET_NUMBER_SUCCESS payload', () => {
    expect(reducer(initialState, action)).toEqual(getNumberSuccessFailureState);
  });
});
