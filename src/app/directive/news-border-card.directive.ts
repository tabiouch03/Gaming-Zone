import { Directive, ElementRef, HostListener, Host } from '@angular/core';


@Directive({
  selector: '[newsBorderCard]'
})

export class newsBorderCard {
  constructor(private el: ElementRef) {
    this.setBorder('#f5f5f5');
    this.setHeight(10);
   }

   @HostListener('mouseenter') onMouseEnter() {
     this.setBorder('#212121');
   }

   @HostListener('mouseleave') onMouseLeave() {
    this.setBorder('#f5f5f5');
  }

   private setBorder(color: string) {
     let border = 'solid 2px ' + color;
     this.el.nativeElement.style.border = border;
   }

   private setHeight(height: number) {
     this.el.nativeElement.style.height = height + 'rem';
   }
}
