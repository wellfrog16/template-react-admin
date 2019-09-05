import { createStore, combineReducers } from 'redux';
import test, { ITableState } from './modules/table/reducer';

export interface IApplicationState {
    test: ITableState
}

export default createStore(combineReducers({
    test,
}));
