import { gsap, prefersReduced, isMobile } from "../hooks/useGsap";
export function projectEntrance(scope) {
  const cards = scope.querySelectorAll("[data-project]");
  if (!cards.length) return;
  if (prefersReduced()) return;
  gsap.from(cards, { opacity: 0, y: 36, scale: 0.98, duration: 0.7, ease: "power3.out", stagger: 0.1,
    scrollTrigger: { trigger: scope, start: "top 80%", once: true } });
}
export function projectParallax(scope) {
  if (prefersReduced() || isMobile()) return;
  scope.querySelectorAll("[data-project-img]").forEach((img) => {
    gsap.fromTo(img, { yPercent: -6 }, { yPercent: 6, ease: "none",
      scrollTrigger: { trigger: img.closest("[data-project]") || img, start: "top bottom", end: "bottom top", scrub: true } });
  });
}
