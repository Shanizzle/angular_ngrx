import { ActionReducerMap } from '@ngrx/store';

import { routerReducer } from '@ngrx/router-store';
import { IAppState } from '../state/app.state';
import { configReducers } from '../reducers/config.reducer';
import { userReducers } from '../reducers/user.reducer';

//Adding all the reducers to an app action reducer map
export const appReducers: ActionReducerMap<IAppState, any> = {
    router: routerReducer,
    users: userReducers,
    config: configReducers
};
