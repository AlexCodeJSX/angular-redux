import { itemReducer } from './store/reducers/item.reducer';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { ItemEffects } from './store/effects/item.effects';

const imports = [
  BrowserModule,
  AppRoutingModule,
  StoreModule.forFeature('items', itemReducer),
  EffectsModule.forFeature([ItemEffects]),
];

if (!environment.production) {
  imports.push(StoreDevtoolsModule.instrument());
}

@NgModule({
  declarations: [AppComponent],
  imports: imports,
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
