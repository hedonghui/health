import { Directive, Renderer2, HostListener, ElementRef } from '@angular/core';
@Directive({
    selector: '[appChangeBackgroud]'
})
export class ChangeBackgroudDirective {
    constructor(private el: ElementRef, private renderer: Renderer2) {
     }
     @HostListener('window:scroll') onScroll() {
        if ( document.documentElement.scrollTop) {
            this.renderer.addClass(this.el.nativeElement, 'active');
        }else {
            this.renderer.removeClass(this.el.nativeElement, 'active');
        }
      }
}
