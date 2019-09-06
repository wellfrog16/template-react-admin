import { combineReducers } from 'redux';
import table, { ITableState } from './table/reducer';

export interface IResearchState {
    table: ITableState
}

export default combineReducers({
    table,
});
