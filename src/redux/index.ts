import { createStore, combineReducers } from 'redux';
import test from './modules/table/reducer';

export default createStore(combineReducers({
    test,
}));
