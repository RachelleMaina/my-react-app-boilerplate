import * as types from '../../store/constants';
import * as actions from '../../store/actions';

describe('Number actions', () => {
  it('dispatches GET_NUMBER', () => {
    expect(actions.getNumber({}).type).toEqual(types.GET_NUMBER);
  });

  it('dispatches GET_NUMBER_SUCCESS', () => {
    expect(actions.getNumberSuccess({}).type).toEqual(types.GET_NUMBER_SUCCESS);
  });

  it('dispatches GET_NUMBER_FAILURE', () => {
    expect(actions.getNumberFailure({}).type).toEqual(types.GET_NUMBER_FAILURE);
  });
});
