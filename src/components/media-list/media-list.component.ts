import { Component, OnInit } from '@angular/core';
import { MediaService } from '../../services/media.service';
import { IMedia } from '../../interfaces/imedia';

@Component({
  selector: 'media-list',
  templateUrl: './media-list.component.html',
  styleUrl: './media-list.component.css'
})
export class MediaListComponent implements OnInit {
  mediaItems!: IMedia[];
  constructor(private mediaService: MediaService){}
  ngOnInit(): void {
    this.mediaItems = this.mediaService.get();
  }
  onMediaItemDelete(media: IMedia){
    this.mediaService.delete(media);
  }
  
}
