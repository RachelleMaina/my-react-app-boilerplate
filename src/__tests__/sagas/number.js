import { runSaga } from 'redux-saga';
import { put, takeLatest } from 'redux-saga/effects';
import { api } from '../../utils/api/numbers';
import { getNumberAsync } from '../../store/sagas/numbers';
import { getNumberSuccess, getNumberFailure } from '../../store/actions';
import { GET_NUMBER } from '../../store/constants';

describe('Numbers saga', () => {
  it.only('should get an event on success', async () => {
    const dispatchedActions = [];
    const payload = { month: '01', day: '01' };
    api.list = jest.fn(() => Promise.resolve(payload));

    const fakeStore = {
      dispatch: (action) => dispatchedActions.push(action),
      getNumber: () => ({
        data: [],
        day: '01',
        errorMessage: [],
        loading: true,
        month: '01',
      }),
    };
    // await runSaga(fakeStore, getNumberAsync, {}).done;
    // expect(api.list.mock.calls.length).toBe(1);
    // expect(dispatchedActions).toEqual([
    //   { type: 'REGISTER_USER' },
    //   { payload: { message: '' }, type: 'REGISTER_SUCCESS' },
    // ]);
  });
});
