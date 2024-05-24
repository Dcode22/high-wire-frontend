import { Store } from "@ngrx/store";
import { UsersActions } from "./users.actions";
import { selectAllUsers, selectSelectedUser } from "./users.selectors";
import { Injectable } from "@angular/core";
import { User } from "projects/data-models/src/public-api";

@Injectable({providedIn: 'root'})
export class UsersFacade {
    constructor(private store: Store){}
    allUsers$ = this.store.select(selectAllUsers);
    user$ = this.store.select(selectSelectedUser);
    getUser(){
        this.store.dispatch(UsersActions.getUser())
    }
    editUser(userId: string, userUpdates: Partial<User>){
        this.store.dispatch(UsersActions.editUser({userId, userUpdates}))
    }
}