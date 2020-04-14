import { state, animate, style, transition, keyframes } from '@angular/animations';

export const zoomOut = [

  state('zoomOut', style({ opacity: 0 })),
  transition('* => zoomOut', 
    animate('{{timing}} {{delay}} ease-out', 
      keyframes([
        style({ opacity: 1, transform: 'scale(1)' }),
        style({ opacity: 0, transform: 'scale(0.3)' }),
        style({ opacity: 0, transform: 'scale(0.3)' })
      ])
    ), { params: { timing: '1s', delay: ''}}
  )
];