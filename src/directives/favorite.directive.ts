import { Directive, HostBinding, HostListener, Input } from "@angular/core";

@Directive({
    selector: '[dFavorite]',
})
export class FavoriteDirective {
    @HostBinding('class.text-red-500') isFavorite = true;
    @HostBinding('class.hover:scale-125') hovering = false;
    @HostListener('mouseenter') onMouseEnter(){
        this.hovering = true;
    }
    @HostListener('mouseleave') onMouseLeave(){
        this.hovering = false;
    }
    @Input() set dFavorite(value: any){
        this.isFavorite = value;
    }
}