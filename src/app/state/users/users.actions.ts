import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { User } from "projects/data-models/src/public-api";

export const UsersActions = createActionGroup({
    source: 'Users',
    events: {
        'Get User': emptyProps(),
        'Get User Success': props<{user: User}>(),
        'Get User Failure': props<{error: Error}>(),
        'Delete User': props<{userId: string}>(),
        'Delete User Success': props<{user: User}>(),
        'Delete User Failure': props<{error: Error}>(),
        'Edit User': props<{userId: string, userUpdates: Partial<User>}>(),
        'Edit User Success': props<{user: User}>(),
        'Edit User Failure': props<{error: Error}>(),
    }
})