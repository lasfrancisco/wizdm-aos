import { Directive, ElementRef, forwardRef, NgZone } from '@angular/core';
import { ScrollDispatcher, ViewportRuler } from '@angular/cdk/scrolling';
import { AnimateService } from './animate.service';

@Directive({
  selector: '[wmAnimateView]',
   providers: [
    // Provides the AnimateDirective as the service, so, for the child component to trigger within a modified viewport
    { provide: AnimateService, useExisting: forwardRef(() => AnimateDirective) },
  ]
})
export class AnimateDirective extends AnimateService {

  // Overrides the viewport with the element's client rect
  protected get viewRect(): ClientRect {

    return this.elref.nativeElement.getBoundingClientRect();
  }

  constructor(private elref: ElementRef<HTMLElement>, scroll: ScrollDispatcher, viewport: ViewportRuler, zone: NgZone) { 
    super(scroll, viewport, zone); 
  }
}