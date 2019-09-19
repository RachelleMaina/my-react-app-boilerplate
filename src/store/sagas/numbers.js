import { takeLatest, call, put } from 'redux-saga/effects';
import { api } from '../../utils/api/numbers';
import { getNumberSuccess, getNumberFailure } from '../actions/index';
import { GET_NUMBER } from '../constants';

function* getNumberAsync(action) {
  try {
    const response = yield call(
      api.list,
      action.payload.month,
      action.payload.day,
    );
    let data;
    if (response) {
      data = response.data || [];
    }
    yield put(getNumberSuccess({ data }));
  } catch (error) {
    const errorMessage = error.response
      ? error.response.data.message || error.response
      : 'Event cannot be displayed. Please check your network and try again.';
    yield put(getNumberFailure({ errorMessage }));
  }
}

export function* watcherGetNumber() {
  yield takeLatest(GET_NUMBER, getNumberAsync);
}
