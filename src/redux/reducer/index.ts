import { createStore, combineReducers } from 'redux';
import test from './test';

export default createStore(combineReducers({
    test,
}));
