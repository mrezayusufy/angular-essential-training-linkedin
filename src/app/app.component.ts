import { Component } from '@angular/core';
import { IMedia } from '../interfaces/imedia';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-reyu';
  onMediaItemDelete(event: any){

  }
  mediaItems: Array<IMedia> = [
    {
      id: 1,
      name: "The Redemption",
      medium: "Movies",
      category: "Animation",
      year: 2010,
      watchedOn: 1294166565384,
      isFavorite: false,
    },  
    {
      id: 4,
      name: "Firebug",
      medium: "Movies",
      category: "Drama",
      year: 2010,
      watchedOn: 1294166565384,
      isFavorite: true,
    },  
    {
      id: 5,
      name: "The star war",
      medium: "Series",
      category: "Science Fiction",
      year: 2010,
      watchedOn: 1294166565384,
      isFavorite: true,
    },  
    {
      id: 6,
      name: "Ready player one",
      medium: "Series",
      category: "Action",
      year: 2010,
      watchedOn: 1294166565384,
      isFavorite: false,
    },  
  ]
}
