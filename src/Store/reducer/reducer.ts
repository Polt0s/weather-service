import { combineReducers } from '@reduxjs/toolkit'
import useConfig from './config';

const reducer = combineReducers({
  config: useConfig,
});

export type RootState = ReturnType<typeof reducer>;

export default reducer;

