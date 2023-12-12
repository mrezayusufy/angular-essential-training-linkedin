import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MediaItemComponent } from '../components/media-item/media-item.component';
import { FavoriteDirective } from '../directives/favorite.directive';
import { CategoryListPipe } from '../pipes/category-list.pipe';
import { FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MediaFormComponent } from '../components/media-form/media-form.component';
import { MediaListComponent } from '../components/media-list/media-list.component';
import { lookupList, lookupToken } from '../providers';

@NgModule({
  declarations: [
    AppComponent,
    MediaItemComponent,
    MediaFormComponent,
    MediaListComponent,
    FavoriteDirective,
    CategoryListPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    { provide: lookupToken, useValue: lookupList}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
