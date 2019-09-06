import { combineReducers } from 'redux';
import getNumberReducer from './numbers';

const rootReducer = combineReducers({
  getNumber: getNumberReducer,
});
export default rootReducer;
