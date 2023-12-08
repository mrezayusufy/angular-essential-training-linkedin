import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MediaItem } from '../components/media-item/media-item.component';
import { FavoriteDirective } from '../directives/favorite.directive';
import { CategoryListPipe } from '../pipes/category-list.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MediaItem,
    FavoriteDirective,
    CategoryListPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
