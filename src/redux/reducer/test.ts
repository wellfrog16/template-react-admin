interface ITestState {
    total: number;
}

export interface IAction {
    type: string;
    payload: ITestState;
}

const initState: ITestState = {
    total: 1997,
};

const reducer = (state = initState, action: IAction): ITestState => {
    switch (action.type) {
        case 'SET_TOTAL': {
            const { total } = action.payload;
            return {
                ...state,
                total,
            };
        }
        default:
            return state;
    }
};

export default reducer;
