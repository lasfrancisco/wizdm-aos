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

  constructor(private elref: ElementRef<HTMLElement>, scroll: ScrollDispatcher, viewport: ViewportRuler, zone: NgZone) { 
    
    super(scroll, viewport, zone); 
  }

  private get element(): HTMLElement {
    return this.elref.nativeElement;
  }

  protected get viewRect(): ClientRect {

    //const port = super.viewRect;

    const rect = this.element.getBoundingClientRect();

    console.log('Animating within the element client rect:', rect);

    return rect;
  }
}