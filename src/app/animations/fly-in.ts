import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

export const flyIn = trigger('flyIn', [
  state('in', style({transform: 'translateX(0)'})),
  transition('void => *', [
       animate(500, keyframes([
        style({opacity: 0, transform: 'rotate(-18deg)', offset: 0}),
        style({opacity: 0.25, transform: 'rotate(-10deg)',  offset: 0.25}),
        style({opacity: 0.5, transform: 'rotate(-5deg)',  offset: 0.5}),
        style({opacity: 0.75, transform: 'rotate(-2deg)',  offset: 0.75}),
        style({opacity: 1, transform: 'rotate(0)',     offset: 1.0})
      ]))
  ]),
  transition('* => void', [
        animate(3000, keyframes([
          style({opacity: 1, transform: 'rotate(0)', offset: 0}),
          style({opacity: 0.75, transform: 'rotate(-2deg)',  offset: 0.25}),
          style({opacity: 0.5, transform: 'rotate(-5deg)',  offset: 0.5}),
          style({opacity: 0.25, transform: 'rotate(-10deg)',  offset: 0.75}),
          style({opacity: 0, transform: 'rotate(0)',     offset: 1.0})
      ]))
  ])
]);
