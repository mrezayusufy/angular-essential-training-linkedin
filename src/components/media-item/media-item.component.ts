import { Component, Input } from "@angular/core";
import { IMedia } from "../../interfaces/imedia";

@Component({
    selector: 'media-item',
    templateUrl: './media-item.component.html',
    styleUrl: './media-item.component.css'
})
export class MediaItem{
  @Input() media!: IMedia;
  
  name="The redemption";
  onDelete(event: any){
    console.log(event)
  }
  wasWatched(){
    console.log("true")
    return true;
  }  
}