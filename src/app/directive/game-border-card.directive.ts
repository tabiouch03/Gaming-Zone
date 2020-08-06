import { Directive, ElementRef, HostListener, Host } from '@angular/core';


// Cette directive aura pour effet de changer la bordure d'une carte
// lors du passage de la souris.
// Ajouter simplement gameBorderCard dans une balise HTML pour l'utiliser
@Directive({
  selector: '[gameBorderCard]'
})

export class gameBorderCard {
  constructor(private el: ElementRef) {
    this.setBorder('#f5f5f5');
    this.setHeight(28);
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
