import { IAction } from './reducer';

export const setTotal = (num: number): IAction => ({
    type: 'SET_TOTAL',
    payload: {
        total: num,
    },
});

export const setTotal2 = (num: number): IAction => ({
    type: 'SET_TOTAL',
    payload: {
        total: num,
    },
});
