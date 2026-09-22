import { gsap, prefersReduced, isMobile } from "../hooks/useGsap";
export function techEntrance(scope) {
  const tiles = scope.querySelectorAll("[data-tech]");
  if (!tiles.length) return;
  if (prefersReduced()) { gsap.set(tiles, { opacity: 1 }); return; }
  gsap.from(tiles, { opacity: 0, scale: 0.85, y: 18, duration: 0.5, ease: "power3.out", stagger: 0.06,
    scrollTrigger: { trigger: scope, start: "top 80%", once: true } });
}
export function techDrift(scope) {
  if (prefersReduced() || isMobile()) return;
  scope.querySelectorAll("[data-tech-group]").forEach((g, i) => {
    const x = i % 2 === 0 ? -18 : 18;
    gsap.from(g, { x, opacity: 0.4, ease: "none",
      scrollTrigger: { trigger: g, start: "top 95%", end: "top 55%", scrub: true } });
  });
}
