import { ActionReducerMap } from "@ngrx/store";
import { AppState } from "../state/app.state";
import { itemReducer } from "./item.reducer";

export const appReducers: ActionReducerMap<AppState, any> = {
  items: itemReducer
}
