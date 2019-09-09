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

export const setTotal2 = (num: number): any => {
    return (dispatch: (arg0: any) => void, getState: () => void) => {
        const currentValue = getState();
        console.log(getState(), '1aaaaaaaaaaaaa');
        //分发一个任务
        setTimeout(() => {
            console.log('pppppppppppppp');
            dispatch(setTotal(9527))
        }, 5000);
    }
};
