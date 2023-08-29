import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as ItemActions from '../actions/item.actions';
import { ApiService } from '../../services/api.service';

@Injectable()
export class ItemEffects {
  loadItems$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ItemActions.loadItems),
      mergeMap(() =>
        this.apiService.get('YOUR_API_ENDPOINT_HERE').pipe(
          map((items: any) => ItemActions.loadItemsSuccess({ items })),
          catchError((error) => [ItemActions.loadItemsFailure({ error })])
        )
      )
    )
  );

  // ... Similar effects for Create, Update, Delete.

  constructor(private actions$: Actions, private apiService: ApiService) {}
}
