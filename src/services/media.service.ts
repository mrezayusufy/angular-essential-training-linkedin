import { Injectable } from "@angular/core";
import { IMedia } from "../interfaces/imedia";

@Injectable({
    providedIn: 'root'
})
export class MediaService {
    mediaItems: IMedia[] = [
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
    get(){
        return this.mediaItems;
    }
    add(media: IMedia){
        this.mediaItems.push(media)
    }
    delete(media: IMedia){
        const index = this.mediaItems.indexOf(media);
        if(index >= 0) this.mediaItems.splice(index, 1)
    }
}