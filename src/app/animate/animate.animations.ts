
import { trigger, state, animate, style, transition, keyframes, group, query, stagger } from '@angular/animations';

export const $animations = [

  trigger('animate', [

    state('idle', style({ opacity: 0 }) ),

    transition('* => landing', [
      style({
        transform: 'scale(1.2)',
        opacity: 0
      }), 
      animate('{{timing}} {{delay}} ease', style('*'))
    ], { params: { timing: '2s', delay: '' }}),

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

    transition('* => fadeIn', [
      style({ opacity: 0 }),
      animate('{{timing}} {{delay}} ease-in', style('*'))
    ], { params: { timing: '1s', delay: ''}}),

    transition('* => fadeInRight', [
      style({ opacity: 0, transform: 'translateX(-20px)' }),
      animate('{{timing}} {{delay}} ease-in', style('*'))
    ], { params: { timing: '1s', delay: ''}}),

    transition('* => fadeInLeft', [
      style({ opacity: 0, transform: 'translateX(20px)' }),
      animate('{{timing}} {{delay}} ease-in', style('*'))
    ], { params: { timing: '1s', delay: ''}}),

    transition('* => fadeInUp', [
      style({ opacity: 0, transform: 'translateY(20px)' }),
      animate('{{timing}} {{delay}} ease-in', style('*'))
    ], { params: { timing: '1s', delay: ''}}),

    transition('* => fadeInDown', [
      style({ opacity: 0, transform: 'translateY(-20px)' }),
      animate('{{timing}} {{delay}} ease-in', style('*'))
    ], { params: { timing: '1s', delay: ''}}),

    transition('* => zoomIn', 
      animate('{{timing}} {{delay}} ease-in', 
        keyframes([
          style({ opacity: 0, transform: 'scale(0.3)' }),
          style({ opacity: 1, transform: 'scale(0.65)' }),
          style({ opacity: 1, transform: 'scale(1)' })
        ])
      ), { params: { timing: '1s', delay: ''}}
    ),

    transition('fadeOut => void', [
      animate('{{timing}} {{delay}} ease-in', style({ opacity: 0 }))
    ], { params: { timing: '1s', delay: ''}}),

    transition('fadeOutRight => void', [
      animate('{{timing}} {{delay}} ease-in', style({ opacity: 0, transform: 'translateX(20px)' }))
    ], { params: { timing: '1s', delay: ''}}),

    transition('fadeOutLeft => void', [
      animate('{{timing}} {{delay}} ease-in', style({ opacity: 0, transform: 'translateX(-20px)' }))
    ], { params: { timing: '1s', delay: ''}}),

    transition('fadeOutDown => void', [
      animate('{{timing}} {{delay}} ease-in', style({ opacity: 0, transform: 'translateY(20px)' }))
    ], { params: { timing: '1s', delay: ''}}),

    transition('fadeOutUp => void', [
      animate('{{timing}} {{delay}} ease-in', style({ opacity: 0, transform: 'translateY(-20px)' }))
    ], { params: { timing: '1s', delay: ''}}),

    transition('zoomOut => void', 
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