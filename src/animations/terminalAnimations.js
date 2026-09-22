import { gsap, prefersReduced } from "../hooks/useGsap";
export function terminalIntro(scope, onTyped) {
  const box = scope.querySelector("[data-terminal-box]");
  if (!box) return;
  if (prefersReduced()) return;
  gsap.from(box, { opacity: 0.6, scale: 0.97, duration: 0.6, ease: "power2.out",
    scrollTrigger: { trigger: box, start: "top 82%", once: true, onEnter: () => onTyped && onTyped() } });
}
export function terminalScrollFx(scope) {
  if (prefersReduced()) return;
  const box = scope.querySelector("[data-terminal-box]");
  if (!box) return;
  gsap.fromTo(box, { opacity: 0.75 }, { opacity: 1, ease: "none",
    scrollTrigger: { trigger: box, start: "top 90%", end: "top 45%", scrub: true } });
}
