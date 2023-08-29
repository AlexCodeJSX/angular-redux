import { createSelector } from '@ngrx/store';
import { AppState } from '../state/app.state';
import { ItemState } from '../reducers/item.reducer';

const selectItemsState = (state: AppState) => state.items;

export const selectItems = createSelector(
  selectItemsState,
  (state: ItemState) => state.items
);

export const selectItemError = createSelector(
  selectItemsState,
  (state: ItemState) => state.error
);
