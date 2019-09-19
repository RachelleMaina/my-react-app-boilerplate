import { all, fork } from 'redux-saga/effects';
import { watcherGetNumber } from './numbers';

export default function* root() {
  yield all([fork(watcherGetNumber)]);
}
