import { Action } from '@ngrx/store';

import { IUser } from '../../_interfaces/user';

//create  definitions for User Actions
export enum EUserActions {
    GetUsers = '[User] Get Users',
    GetUsersSuccess = '[User] Get Users Success',
    GetUser = '[User] Get User',
    GetUserSuccess = '[User] Get User Success'
}

//create and export a class for each of the actions. All of them have to implement the Action interface from ngrx. 
//Then, we set the type to one of the enums values and if you need a payload for the action you add it to the constructor of the class.
//Finally, we export a type containing our action classes. This is going to provide us with type checking that we can use for example in our reducers.

export class GetUsers implements Action {
    public readonly type = EUserActions.GetUsers;
}

export class GetUsersSuccess implements Action {
    public readonly type = EUserActions.GetUsersSuccess;
    constructor(public payload: IUser[]) {}
}

export class GetUser implements Action {
    public readonly type = EUserActions.GetUser;
    constructor(public payload: number) {}
}

export class GetUserSuccess implements Action {
    public readonly type = EUserActions.GetUserSuccess;
    constructor(public payload: IUser) {}
}

export type UserActions = GetUsers | GetUsersSuccess | GetUser | GetUserSuccess;