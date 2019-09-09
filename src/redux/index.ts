import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
// import test, { ITableState } from './modules/table/reducer';
import research, { IResearchState } from './modules/research';

export interface IApplicationState {
    research: IResearchState
}

export default createStore(combineReducers({
    research,
}), applyMiddleware(thunk));
// export default createStore(combineReducers({
//     test,
// }));
