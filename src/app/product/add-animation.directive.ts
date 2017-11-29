import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appAddAnimation]'
})
export class AddAnimationDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) { }
  @HostListener('window: scroll') onscroll() {
    const currentTop = this.el.nativeElement.offsetTop - document.documentElement.scrollTop;
    if ( currentTop < 500) {
      this.renderer.addClass(this.el.nativeElement, 'flyin');
    }
  }

}
