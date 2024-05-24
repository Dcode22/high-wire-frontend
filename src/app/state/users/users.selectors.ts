import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UsersState, usersAdapter } from './users.reducer';

export const selectUsersState = createFeatureSelector<UsersState>('users');

const { selectAll, selectEntities, selectIds, selectTotal } = usersAdapter.getSelectors();

export const selectAllUsers = createSelector(
  selectUsersState,
  selectAll
);

export const selectUserEntities = createSelector(
  selectUsersState,
  selectEntities
);

export const selectUserIds = createSelector(
  selectUsersState,
  selectIds
);

export const selectUserTotal = createSelector(
  selectUsersState,
  selectTotal
);

export const selectSelectedUserId = createSelector(
  selectUsersState,
  (state: UsersState) => state.selectedId
);

export const selectSelectedUser = createSelector(
  selectUserEntities,
  selectSelectedUserId,
  (entities, selectedId) => selectedId ? entities[selectedId] : null
);
