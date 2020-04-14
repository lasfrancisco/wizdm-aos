
import { trigger, state, animate, style, transition, keyframes, group, query, stagger } from '@angular/animations';

import { beat, bounce, pulse, shake, swing, wobble, jello, tada, flip } from './attention-seekers';
import { landing } from './entrances';
import { zoomOut } from './exits';

export const $animations = [

  trigger('animate', [

    // Attention seekers
    ...beat,
    ...bounce,
    ...pulse,
    ...shake,
    ...swing,
    ...wobble,
    ...jello,
    ...tada,
    ...flip,

    // Entrances
    ...landing,

    // Exits
    ...zoomOut,

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

    /**** ENTRANCES ***********************************************************/


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
  ])
];