import { Pipe, PipeTransform } from "@angular/core";
import { IMedia } from "../interfaces/imedia";

@Pipe({
    name: 'categoryList'
})
export class CategoryListPipe implements PipeTransform{
    transform(mediaItems: any) {
        const categories: Array<string> = []
        mediaItems.forEach((media: IMedia) => {
            if(categories.indexOf(media.category) <= -1) 
                categories.push(media.category)
        });
        return categories.join(', ')
    }
}