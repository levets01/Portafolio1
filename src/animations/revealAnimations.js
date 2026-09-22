import { gsap, prefersReduced } from "../hooks/useGsap";
export function revealSections(scope) {
  const els = scope.querySelectorAll("[data-reveal]");
  els.forEach((el) => {
    if (prefersReduced()) { gsap.set(el, { opacity: 1, y: 0 }); return; }
    gsap.from(el, { opacity: 0, y: 40, duration: 0.8, ease: "power3.out",
      scrollTrigger: { trigger: el, start: "top 85%", once: true } });
  });
}
export function revealHeadings(scope) {
  scope.querySelectorAll("[data-heading]").forEach((h) => {
    if (prefersReduced()) return;
    const tl = gsap.timeline({ scrollTrigger: { trigger: h, start: "top 85%", once: true } });
    tl.from(h.querySelectorAll("[data-h-num]"), { opacity: 0, x: -12, duration: 0.4, ease: "power2.out" })
      .from(h.querySelectorAll("[data-h-title]"), { opacity: 0, y: 16, duration: 0.5, ease: "power3.out" }, "-=0.2")
      .from(h.querySelectorAll("[data-h-line]"), { scaleX: 0, transformOrigin: "left center", duration: 0.5, ease: "power2.out" }, "-=0.3");
  });
}
