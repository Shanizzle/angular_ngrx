import { RouterReducerState } from '@ngrx/router-store';

import { IUserState, initialUserState } from './user.state';
import { IConfigState, initialConfigState } from './config.state';

//create App state
export interface IAppState {
    router?: RouterReducerState;
    users: IUserState;
    config: IConfigState;
}

//set app  initial state
export const initialAppState: IAppState = {
    users: initialUserState,
    config: initialConfigState
};

//function call to get initial state
export function getInitialState(): IAppState {
    return initialAppState;
}