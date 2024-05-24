import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { UsersService } from "projects/services/src/public-api";
import { UsersActions } from "./users.actions";
import { catchError, map, mergeMap, of } from "rxjs";
import { User } from "projects/data-models/src/public-api";

@Injectable()
export class UsersEffects {
  constructor(
    private actions$: Actions,
    private usersService: UsersService
  ) {}

  getUser$ = createEffect(() => 
    this.actions$.pipe(
      ofType(UsersActions.getUser),
      mergeMap((action) => 
        this.usersService.getUserWithAuth0Data().pipe(
          map(user => UsersActions.getUserSuccess({user})),
          catchError(error => of(UsersActions.getUserFailure({error})))
        )
      )
    )
  );

  editUser$ = createEffect(() => 
    this.actions$.pipe(
      ofType(UsersActions.editUser),
      mergeMap(action => 
        this.usersService.editUser(action.userId, action.userUpdates).pipe(
          map((user: User) => UsersActions.editUserSuccess({user})),
          catchError(error => of(UsersActions.editUserFailure({error})))
        )
      )
    )
  )
}