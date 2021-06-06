import {
  style,
  animate,
  animation,
  keyframes
} from "@angular/animations";


// =========================
// Fade
// =========================
export const fadeIn = animation([
  style({ opacity: 0 }), // start state
  animate('150ms', style({ opacity: 1 }))
]);

export const fadeOut = animation([
  animate('150ms', style({ opacity: 0 }))
]);

// =========================
// Scale
// =========================
export const scaleIn = animation([
  style({ opacity: 0, transform: "scale(0.5)" }), // start state
  animate(
    "500ms ease-in-out",
    style({ opacity: 1, transform: "scale(1)" })
  )
]);

export const scaleOut = animation([
  animate(
    "500ms ease-in-out",
    style({ opacity: 0, transform: "scale(0.5)" })
  )
]);
