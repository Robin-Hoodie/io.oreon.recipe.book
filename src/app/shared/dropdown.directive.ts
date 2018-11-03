import {Directive, ElementRef, HostBinding, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[oreonDropdown]'
})
export class DropdownDirective {

  @HostBinding('class.open') private isOpen: boolean;

  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
  }
}
