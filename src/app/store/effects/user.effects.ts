import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';
import { of } from 'rxjs';
import { switchMap, map, withLatestFrom } from 'rxjs/operators';

import { IAppState } from '../state/app.state';
import {
  GetUsersSuccess,
  EUserActions,
  GetUserSuccess,
  GetUser,
  GetUsers
} from '../actions/user.actions';
import { UserService } from '../../services/user.service';
import { IUserHttp } from '../../_interfaces/http/user-http.interface';
import { selectUserList } from '../selectors/user.selector';

//We declare our user effects using the injectable decorator
@Injectable()
export class UserEffects {
  @Effect()
  getUser$ = this._actions$.pipe(
    ofType<GetUser>(EUserActions.GetUser),
    map(action => action.payload),
    withLatestFrom(this._store.pipe(select(selectUserList))),
    switchMap(([id, users]) => {
      const selectedUser = users.filter(user => user.id === +id)[0];
      return of(new GetUserSuccess(selectedUser));
    })
  );
  //We declare our effects using the Effect decorator provided by ngrx/effects.
  @Effect()
  getUsers$ = this._actions$.pipe(  //Using the Actions provided by ngrx/effects we are going to start piping our operator's for this effect.
    ofType<GetUsers>(EUserActions.GetUsers), //The next thing is to set the effect action type using the ofType operator.
    switchMap(() => this._userService.getUsers()), //The following parts are rxjs operators that we use in order to get what we need.
    //Finally, in the last operator, the Effect is going to dispatch another action
    switchMap((userHttp: IUserHttp) => of(new GetUsersSuccess(userHttp.users)))
  );
   // we inject the services we are going to use, the actions for ngrx/effects, and in this case also the store
  constructor(
    private _userService: UserService,
    private _actions$: Actions,
    private _store: Store<IAppState>
  ) {}
}
