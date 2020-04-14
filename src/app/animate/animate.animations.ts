
import { trigger, state, animate, style, transition, keyframes, group, query, stagger } from '@angular/animations';

import { bounce } from './attention-seekers/bounce';

export const $animations = [

  trigger('animate', [

    /**** ATTENTION SEEKERS ***************************************************/

    ...bounce,

    transition('* => pulse', [
      style('*'),
      animate('{{timing}} {{delay}} ease-in-out', 
        keyframes([
          style({ transform: 'scale(1)' }),
          style({ transform: 'scale(1.05)' }),
          style({ transform: 'scale(1)' })
        ])
      )], { params: { timing: '1s', delay: ''}}
    ),

    transition('* => shake', [
      style('*'),
      animate('{{timing}} {{delay}} ease-in-out', 
        keyframes([
          style({ transform: 'translateX(0)', offset: 0 }),
          style({ transform: 'translateX(-10px)', offset: 0.1 }),
          style({ transform: 'translateX(10px)', offset: 0.2 }),
          style({ transform: 'translateX(-10px)', offset: 0.3 }),
          style({ transform: 'translateX(10px)', offset: 0.4 }),
          style({ transform: 'translateX(-10px)', offset: 0.5 }),
          style({ transform: 'translateX(10px)', offset: 0.6 }),
          style({ transform: 'translateX(-10px)', offset: 0.7 }),
          style({ transform: 'translateX(10px)', offset: 0.8 }),
          style({ transform: 'translateX(-10px)', offset: 0.9 }),
          style({ transform: 'translateX(0)', offset: 1 })
        ])
      )], { params: { timing: '1s', delay: ''}}
    ),

    transition('* => swing', [
      style({ transformOrigin: 'top center' }),
      animate('{{timing}} {{delay}} ease-in-out', 
        keyframes([
          style({ transform: 'rotate3d(0, 0, 1, 0deg)', offset: 0 }),
          style({ transform: 'rotate3d(0, 0, 1, 15deg)', offset: 0.2 }),
          style({ transform: 'rotate3d(0, 0, 1, -10deg)', offset: 0.4 }),
          style({ transform: 'rotate3d(0, 0, 1, 5deg)', offset: 0.6 }),
          style({ transform: 'rotate3d(0, 0, 1, -5deg)', offset: 0.8 }),
          style({ transform: 'rotate3d(0, 0, 1, 0deg)', offset: 1 })
        ])
      )], { params: { timing: '1s', delay: ''}}
    ),

    transition('* => wobble', [
      style('*'),
      animate('{{timing}} {{delay}} ease-in-out', 
        keyframes([
          style({ transform: 'translateX(0)', offset: 0 }),
          style({ transform: 'translateX(-25%) rotate3d(0, 0, 1, -5deg)', offset: 0.15 }),
          style({ transform: 'translateX(20%) rotate3d(0, 0, 1, 3deg)', offset: 0.3 }),
          style({ transform: 'translateX(-15%) rotate3d(0, 0, 1, -3deg)', offset: 0.45 }),
          style({ transform: 'translateX(10%) rotate3d(0, 0, 1, 2deg)', offset: 0.6 }),
          style({ transform: 'translateX(-5%) rotate3d(0, 0, 1, -1deg)', offset: 0.75 }),
          style({ transform: 'translateX(0)', offset: 1 })
        ])
      )], { params: { timing: '1s', delay: ''}}
    ),

    transition('* => jello', [
      style({ transformOrigin: 'center' }),
      animate('{{timing}} {{delay}} ease-in-out', 
        keyframes([
          style({ transform: 'skewX(0) skewY(0)', offset: 0 }),
          style({ transform: 'skewX(0) skewY(0)', offset: 0.111 }),
          style({ transform: 'skewX(-12.5) skewY(-12.5)', offset: 0.222 }),
          style({ transform: 'skewX(6.25deg) skewY(6.25deg)', offset: 0.333 }),
          style({ transform: 'skewX(-3.125deg) skewY(-3.125deg)', offset: 0.444 }),
          style({ transform: 'skewX(1.5625deg) skewY(1.5625deg)', offset: 0.555 }),
          style({ transform: 'skewX(-0.78125deg) skewY(-0.78125deg)', offset: 0.666 }),
          style({ transform: 'skewX(0.390625deg) skewY(0.390625deg)', offset: 0.777 }),
          style({ transform: 'skewX(-0.1953125deg) skewY(-0.1953125deg)', offset: 0.888 }),
          style({ transform: 'skewX(0) skewY(0)', offset: 1 })
        ])
      )], { params: { timing: '1s', delay: ''}}
    ),

    transition('* => beat', [
      style('*'),
      animate('{{timing}} {{delay}} cubic-bezier(.8, -0.6, 0.2, 1.5)', 
        keyframes([
          style({ transform: 'scale(0.8)' }),
          style({ transform: 'scale(1.5)' }),
          style({ transform: 'scale(1)' })
        ])
      )], { params: { timing: '500ms', delay: ''}}
    ),

    transition('* => heartBeat', [
      style('*'),
      animate('{{timing}} {{delay}} ease-in-out', 
        keyframes([
          style({ transform: 'scale(1)', offset: 0 }),
          style({ transform: 'scale(1.3)', offset: 0.14 }),
          style({ transform: 'scale(1)', offset: 0.28 }),
          style({ transform: 'scale(1.3)', offset: 0.42 }),
          style({ transform: 'scale(1)', offset: 0.70 })
        ])
      )], { params: { timing: '1s', delay: ''}}
    ),

    transition('* => rubberBand', [
      style('*'),
      animate('{{timing}} {{delay}} ease-in-out', 
        keyframes([
          style({ transform: 'scale3d(1, 1, 1)', offset: 0 }),
          style({ transform: 'scale3d(1.25, 0.75, 1)', offset: 0.3 }),
          style({ transform: 'scale3d(0.75, 1.25, 1)', offset: 0.4 }),
          style({ transform: 'scale3d(1.15, 0.85, 1)', offset: 0.5 }),
          style({ transform: 'scale3d(0.95, 1.05, 1)', offset: 0.65 }),
          style({ transform: 'scale3d(1.05, 0.95, 1)', offset: 0.75 }),
          style({ transform: 'scale3d(1, 1, 1)', offset: 1 }),
        ])
      )], { params: { timing: '1s', delay: ''}}
    ),

    transition('* => headShake', [
      style('*'),
      animate('{{timing}} {{delay}} ease-in-out', 
        keyframes([
          style({ transform: 'translateX(0)', offset: 0 }),
          style({ transform: 'translateX(-6px) rotateY(-9deg)', offset: 0.065 }),
          style({ transform: 'translateX(5px) rotateY(7deg)', offset: 0.185 }),
          style({ transform: 'translateX(-3px) rotateY(-5deg)', offset: 0.315 }),
          style({ transform: 'translateX(2px) rotateY(3deg)', offset: 0.435 }),
          style({ transform: 'translateX(0)', offset: 0.5 })
        ])
      )], { params: { timing: '1s', delay: ''}}
    ),

    transition('* => tada', [
      style('*'),
      animate('{{timing}} {{delay}} ease-in-out', 
        keyframes([
          style({ transform: 'scale3d(1, 1, 1)', offset: 0 }),
          style({ transform: 'scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)', offset: 0.1 }),
          style({ transform: 'scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)', offset: 0.2 }),
          style({ transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)', offset: 0.3 }),
          style({ transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)', offset: 0.4 }),
          style({ transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)', offset: 0.5 }),
          style({ transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)', offset: 0.6 }),
          style({ transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)', offset: 0.7 }),
          style({ transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)', offset: 0.8 }),
          style({ transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)', offset: 0.9 }),
          style({ transform: 'scale3d(1, 1, 1)', offset: 1 }),
        ])
      )], { params: { timing: '1s', delay: ''}}
    ),

    /**** ENTRANCES ***********************************************************/

    // LANDING
    state('idle-landing', style({ opacity: 0 }) ),
    transition('* => landing', [
      style({
        transform: 'scale(1.2)',
        opacity: 0
      }), 
      animate('{{timing}} {{delay}} ease', style('*'))
    ], { params: { timing: '2s', delay: '' }}),

    // FADE IN variations
    state('idle-fadeIn', style({ opacity: 0 }) ),
    transition('* => fadeIn', [
      style({ opacity: 0 }),
      animate('{{timing}} {{delay}} ease-in', style('*'))
    ], { params: { timing: '1s', delay: ''}}),

    state('idle-fadeInRight', style({ opacity: 0 }) ),
    transition('* => fadeInRight', [
      style({ opacity: 0, transform: 'translateX(-20px)' }),
      animate('{{timing}} {{delay}} ease-in', style('*'))
    ], { params: { timing: '1s', delay: ''}}),

    state('idle-fadeInLeft', style({ opacity: 0 }) ),
    transition('* => fadeInLeft', [
      style({ opacity: 0, transform: 'translateX(20px)' }),
      animate('{{timing}} {{delay}} ease-in', style('*'))
    ], { params: { timing: '1s', delay: ''}}),

    state('idle-fadeInUp', style({ opacity: 0 }) ),
    transition('* => fadeInUp', [
      style({ opacity: 0, transform: 'translateY(20px)' }),
      animate('{{timing}} {{delay}} ease-in', style('*'))
    ], { params: { timing: '1s', delay: ''}}),

    state('idle-fadeInDown', style({ opacity: 0 }) ),
    transition('* => fadeInDown', [
      style({ opacity: 0, transform: 'translateY(-20px)' }),
      animate('{{timing}} {{delay}} ease-in', style('*'))
    ], { params: { timing: '1s', delay: ''}}),

    // ZOOM IN
    state('idle-zoomIn', style({ opacity: 0 }) ),
    transition('* => zoomIn', 
      animate('{{timing}} {{delay}} ease-in', 
        keyframes([
          style({ opacity: 0, transform: 'scale(0.3)' }),
          style({ opacity: 1, transform: 'scale(0.65)' }),
          style({ opacity: 1, transform: 'scale(1)' })
        ])
      ), { params: { timing: '1s', delay: ''}}
    ),

    /**** EXITS ***************************************************************/

    // FADE OUT variations
    state('fadeOut', style({ opacity: 0 })),
    transition('* => fadeOut', [
      animate('{{timing}} {{delay}} ease-out', style({ opacity: 0 }))
    ], { params: { timing: '1s', delay: ''}}),

    state('fadeOutRight', style({ opacity: 0 })),
    transition('* => fadeOutRight', [
      animate('{{timing}} {{delay}} ease-in', style({ opacity: 0, transform: 'translateX(20px)' }))
    ], { params: { timing: '1s', delay: ''}}),

    state('fadeOutLeft', style({ opacity: 0 })),
    transition('* => fadeOutLeft', [
      animate('{{timing}} {{delay}} ease-in', style({ opacity: 0, transform: 'translateX(-20px)' }))
    ], { params: { timing: '1s', delay: ''}}),

    state('fadeOutDown', style({ opacity: 0 })),
    transition('* => fadeOutDown', [
      animate('{{timing}} {{delay}} ease-in', style({ opacity: 0, transform: 'translateY(20px)' }))
    ], { params: { timing: '1s', delay: ''}}),

    state('fadeOutUp', style({ opacity: 0 })),
    transition('* => fadeOutUp', [
      animate('{{timing}} {{delay}} ease-in', style({ opacity: 0, transform: 'translateY(-20px)' }))
    ], { params: { timing: '1s', delay: ''}}),

    // ZOOM OUT
    state('zoomOut', style({ opacity: 0 })),
    transition('* => zoomOut', 
      animate('{{timing}} {{delay}} ease-in', 
        keyframes([
          style({ opacity: 1, transform: 'scale(1)' }),
          style({ opacity: 0, transform: 'scale(0.3)' }),
          style({ opacity: 0, transform: 'scale(0.3)' })
        ])
      ), { params: { timing: '1s', delay: ''}}
    ),
  ])
];