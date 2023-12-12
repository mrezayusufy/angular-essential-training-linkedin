import { InjectionToken } from "@angular/core";

export const lookupToken = new InjectionToken('lookupToken')
export const lookupList = {
    medium: ['Movies', 'Series'],
    genre: ['Comedy', 'Drama', 'Action', 'Animation', 'Science Fiction']
}