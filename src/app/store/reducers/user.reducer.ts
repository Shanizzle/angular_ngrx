import { EUserActions } from './../actions/user.actions';
import { UserActions } from '../actions/user.actions';

import { initialUserState, IUserState } from './../state/user.state';

//The declaration of the reducer receive the state and, in this case, the user actions and returns an IUserState.
export const userReducers = ( 
    state = initialUserState,
    action: UserActions
): IUserState => {   
    //Using a switch statement we generate cases for each possible action type.
    switch (action.type) {  
        //Each case returns a new object that is the result of merging the old state and the new value.
        case EUserActions.GetUsersSuccess: {
            return {
                ...state,
                users: action.payload
            }; 
        }
        case EUserActions.GetUserSuccess: {
            return {
                ...state,
                selectedUser: action.payload
            };
        }
//All reducers have a default result that just returns the state without any changes.
        default:
            return state;
    }   
};

        

    
   
    

