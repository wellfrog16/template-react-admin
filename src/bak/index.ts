import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import test, { ITableState } from './modules/table/reducer';

export interface IApplicationState {
    test: ITableState
}

export default createStore(combineReducers({
    test,
}), applyMiddleware(thunk));
