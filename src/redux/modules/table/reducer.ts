import * as actionTypes from './action-types';

export interface IUser {
    name: string;
}

interface IState {
    total: number;
    list: IUser[];
}

export interface IAction {
    type: string;
    payload: any;
}

const initState: IState = {
    total: 1997,
    list: [],
};

const reducer = (state = initState, action: IAction): IState => {
    switch (action.type) {
        case actionTypes.SET_TOTAL: {
            const { total } = action.payload;
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
            return state;
    }
};

export default reducer;
