import { actionType, ITableState } from './types';
import { IAction } from '@/redux/interface';

const initState: ITableState = {
    total: 1997,
    list: [],
};

const reducer = (state = initState, action: IAction): ITableState => {
    switch (action.type) {
        case actionType.SET_PAGE_DATA: {
            const { total, list } = action.payload;
            return {
                ...state,
                total,
                list,
            };
        }
        default:
            return state;
    }
};

export default reducer;
