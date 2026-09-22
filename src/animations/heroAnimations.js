import { gsap, prefersReduced, isMobile } from "../hooks/useGsap";
export function heroIntro(scope) {
  if (prefersReduced()) return;
  const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
  tl.from(scope.querySelectorAll("[data-hero-kicker]"), { opacity: 0, y: 12, duration: 0.5 })
    .from(scope.querySelectorAll("[data-hero-name]"), { opacity: 0, y: 34, duration: 0.7, stagger: 0.1 }, "-=0.25")
    .from(scope.querySelectorAll("[data-hero-img]"), { opacity: 0, scale: 1.08, duration: 0.9 }, "-=0.55")
    .from(scope.querySelectorAll("[data-hero-fade]"), { opacity: 0, y: 18, duration: 0.6, stagger: 0.08 }, "-=0.6");
}
export function heroScroll(scope) {
  if (prefersReduced() || isMobile()) return;
  const img = scope.querySelector("[data-hero-img]");
  const txt = scope.querySelector("[data-hero-text]");
  if (img) gsap.to(img, { scale: 1.12, yPercent: 12, ease: "none",
    scrollTrigger: { trigger: scope, start: "top top", end: "bottom top", scrub: true } });
  if (txt) gsap.to(txt, { yPercent: -14, opacity: 0.15, ease: "none",
    scrollTrigger: { trigger: scope, start: "top top", end: "70% top", scrub: true } });
}
