import { Dispatch } from 'redux';
import { IAction } from '@/redux/interface';
import { actionType, IUser } from './types';

export const setPageData = (total: number, list: IUser[]): IAction => {
    console.log(9);
    return {
        type: actionType.SET_PAGE_DATA,
        payload: {
            total,
            list,
        },
    };
};

export const setTotal = (total: number): IAction => {
    console.log(9);
    return {
        type: actionType.SET_PAGE_DATA,
        payload: {
            total,
        },
    };
};

export const asyncSetTotal = (num: number) => {
    console.log(num);
    return (dispatch: Dispatch) => {
        setTimeout(() => {
            dispatch(setTotal(9527));
        }, 5000);
    };
};

export const asyncSetTotal2 = (num: number) => {
    console.log(num);
    return (dispatch: Dispatch) => {
        console.log(9);
        return new Promise<number>(resolve => {
            console.log(9);
            setTimeout(() => {
                dispatch(setTotal(9527));
                resolve(111000000000000000000);
            }, 5000);
        });
    };
};
