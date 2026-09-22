import { useGsap, gsap } from "../hooks/useGsap";
export default function ScrollProgress() {
  const ref = useGsap((scope) => {
    const bar = scope.querySelector("[data-bar]");
    gsap.fromTo(bar, { scaleX: 0 }, { scaleX: 1, transformOrigin: "left center", ease: "none",
      scrollTrigger: { trigger: document.body, start: "top top", end: "bottom bottom", scrub: 0.3 } });
  });
  return (<div ref={ref} className="fixed inset-x-0 top-0 z-[60] h-[2px] bg-transparent" aria-hidden="true"><div data-bar className="h-full w-full bg-blue-400/80" /></div>);
}
