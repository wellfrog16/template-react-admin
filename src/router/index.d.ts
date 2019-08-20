import React from 'react';

export interface IRoute {
    name?: string;
    path: string;
    meta: IMeta;
    component?: React.FunctionComponent;
    children?: IRoute[];
}

export interface IMeta {
    title: string;
    icon?: string;
    url?: string;
    type?: 'iframe' | '';
    belong?: string;
    hidden?: boolean;
}
