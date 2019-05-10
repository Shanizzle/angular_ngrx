import { IUser } from '../../_interfaces/user';

//create user state
export interface IUserState {
    users: IUser[];
    selectedUser: IUser;
}
//set initial user state
export const initialUserState: IUserState = {
    users: null,
    selectedUser: null
};