import * as actionTypes from './action-types';
import { IAction } from '@/redux/interface';

export interface IUser {
    name: string;
}

export interface ITableState {
    total: number;
    list: IUser[];
}

const initState: ITableState = {
    total: 1997,
    list: [],
};

const reducer = (state = initState, action: IAction): ITableState => {
    console.log(action);
    switch (action.type) {
        case actionTypes.SET_TOTAL: {
            const { total } = action.payload;
            console.log(total, 222222222);
            return {
                ...state,
                total,
            };
        }
        case actionTypes.SET_LIST: {
            const { list } = action.payload;
            return {
                ...state,
                list,
            };
        }
        default:
            console.log(777777777);
            return state;
    }
};

export default reducer;
