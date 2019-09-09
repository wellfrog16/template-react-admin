export const actionType = {
    SET_PAGE_DATA: 'setPageData', // 设置页面数据
};

export const keep = 'aa';

export type IUser = {
    // key: string;
    name: string;
    // age: number;
    // address: string;
};

export type ITableState = {
    total: number;
    list: IUser[];
};
