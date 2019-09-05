import { IAction } from '@/redux/interface';

export const setTotal = (num: number): IAction => {
    console.log(`log=${num}`);
    return {
        type: 'SET_TOTAL',
        payload: {
            total: num,
        },
    };
};

export const setTotal2 = (num: number): IAction => ({
    type: 'SET_TOTAL',
    payload: {
        total: num,
    },
});
