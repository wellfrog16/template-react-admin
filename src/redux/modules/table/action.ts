import { Dispatch } from 'redux';
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
    console.log(999);
    return (dispatch: Dispatch) => {
        console.log(num);
        dispatch(setTotal(95271111));
        // 分发一个任务
        setTimeout(() => {
            console.log('pppppppppppppp');
            dispatch(setTotal(9527));
        }, 5000);
    };
};

export const setTotal3 = (num: number): any => {
    console.log(999);
    return (dispatch: Dispatch, getState: () => void) => {
        console.log(getState(), '1aaaaaaaaaaaaa');
        console.log(num);
        // 分发一个任务
        setTimeout(() => {
            console.log('pppppppppppppp');
            dispatch(setTotal(9527));
        }, 5000);
    };
};
