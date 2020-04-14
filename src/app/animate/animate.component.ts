import { Component, OnInit, OnDestroy, Input, Output, EventEmitter, HostBinding, HostListener, ElementRef } from '@angular/core';
import { coerceBooleanProperty, coerceNumberProperty } from '@angular/cdk/coercion';
import { Subject, Subscription } from 'rxjs';
import { startWith, delay } from 'rxjs/operators';
import { AnimateService } from './animate.service';
import { $animations } from './animate.animations';

export type wmAnimations = 'landing'|'pulse'|'beat'|'heartBeat'|'fadeIn'|'fadeInRight'|'fadeInLeft'|'fadeInUp'|'fadeInDown'|'zoomIn'|'bumpIn'|'fadeOut'|'fadeOutRight'|'fadeOutLeft'|'fadeOutDown'|'fadeOutUp'|'zoomOut';
export type wmAnimateSpeed = 'slower'|'slow'|'normal'|'fast'|'faster';

@Component({
 selector: '[wmAnimate]',
 template: '<ng-content></ng-content>',
 animations: $animations
})
export class AnimateComponent implements OnInit, OnDestroy {

  readonly timings = { slower: '3s', slow: '2s', normal: '1s', fast: '500ms', faster: '300ms' };

  private replay$ = new Subject<boolean>();
  private sub: Subscription;
  
  // Animating properties
  public animating = false;
  public animated = false;

  constructor(private elm: ElementRef, private scroll: AnimateService) {}

  private get idle() { return { value: 'idle' }; }
  private get play() { 
    return { 
      value: this.animate,
      //delay: this.delay, 
      params: { 
        timing: this.timings[this.speed || 'normal'] 
      }
    };
  }

  //@Input() delay: number|string;
 
  /** Selects the animation to be played */
  @Input('wmAnimate') animate: wmAnimations;

  /** Speeds up or slows down the animation */
  @Input() speed: wmAnimateSpeed = 'normal';

  @HostBinding('@animate')
  private trigger: string | {} = 'idle';

  /** Disables the animation */
  @Input('disabled') set disableAnimation(value: boolean) { this.disabled = coerceBooleanProperty(value); }
  @HostBinding('@.disabled') 
  public disabled = false;

  /** Emits at the end of the animation */
  @Output() start = new EventEmitter<void>();  
  @HostListener('@animate.start') 
  private animationStart() { this.animating = true; this.animated = false; this.start.emit(); }

  /** Emits at the end of the animation */
  @Output() done = new EventEmitter<void>();  
  @HostListener('@animate.done') 
  private animationDone() { this.animating = false; this.animated = true; this.done.emit(); }

  /** When true, keeps the animation idle until the next replay triggers */
  @Input('paused') set pauseAnimation(value: boolean) { this.paused = coerceBooleanProperty(value); }
  public paused: boolean = false;

  /** When defined, triggers the animation on element scrolling in the viewport by the specified amount. Amount defaults to 50% when not specified */
  @Input('aos') set enableAOS(value: number) { this.threshold = coerceNumberProperty(value, 0.5); }
  private threshold: number = 0;

  /** When true, triggers the animation on element scrolling in the viewport */
  @Input('once') set aosOnce(value: boolean) { this.once = coerceBooleanProperty(value); }
  public once: boolean = false;

  /** Replays the animation */
  @Input() set replay(replay: any) {

    // Skips whenever the animation never triggered   
    if(this.trigger === 'idle') { return; }

    // Re-triggers the animation again on request
    if(coerceBooleanProperty(replay)) {
      
      this.trigger = this.idle;
      this.replay$.next(true);
    }
  }

  ngOnInit() {

    // Triggers the animation based on the input flags
    this.sub = this.replay$.pipe( 
      // Waits the next round to re-trigger
      delay(0), 
      // Triggers immediately when not paused
      startWith(!this.paused),
      // Builds the AOS observable from the common service
      this.scroll.trigger(this.elm, this.threshold, this.once)

    ).subscribe( trigger => {
      // Triggers the animation to play or to idle
      this.trigger = trigger ? this.play : this.idle;
    });
  }

  ngOnDestroy() { this.sub.unsubscribe(); }
}