import { IAction } from '@/redux/interface';
import * as actionTypes from './action-types';

export const setTotal = (num: number): IAction => {
    console.log(`log=${num}`);
    return {
        type: actionTypes.SET_TOTAL,
        payload: {
            total: num,
        },
    };
};

export const setTotal2 = (num: number): IAction => ({
    type: actionTypes.SET_TOTAL,
    payload: {
        total: num,
    },
});
