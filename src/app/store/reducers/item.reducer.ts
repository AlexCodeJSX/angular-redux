import { createReducer, on } from '@ngrx/store';
import * as ItemActions from '../actions/item.actions';

export interface ItemState {
  items: any[];
  error: any;
}

export const initialState: ItemState = {
  items: [],
  error: null,
};

export const itemReducer = createReducer(
  initialState,
  on(ItemActions.loadItemsSuccess, (state, { items }) => ({
    ...state,
    items: items,
  })),
  on(ItemActions.loadItemsFailure, (state, { error }) => ({
    ...state,
    error: error,
  }))
  // ... Handle other actions like Create, Update, Delete.
);
