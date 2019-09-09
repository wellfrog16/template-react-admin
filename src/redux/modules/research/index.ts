import { combineReducers } from 'redux';
import table from './table/reducer';
import { ITableState } from './table/types';

export interface IResearchState {
    table: ITableState
}

export default combineReducers({
    table,
});
