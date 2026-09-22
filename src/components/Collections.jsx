import { collections } from "../data/collections";
import { SafeImg } from "./ProjectCard";
import { useGsap, gsap, prefersReduced, isMobile } from "../hooks/useGsap";
export default function Collections(){
  const ref = useGsap((scope) => {
    if (!prefersReduced()) gsap.from(scope.querySelectorAll("[data-col]"), { opacity: 0, scale: 0.92, duration: 0.6, ease: "power3.out", stagger: 0.08, scrollTrigger: { trigger: scope, start: "top 82%", once: true } });
    if (!prefersReduced() && !isMobile()) scope.querySelectorAll("[data-col-img]").forEach((img) => gsap.fromTo(img, { yPercent: -5 }, { yPercent: 5, ease: "none", scrollTrigger: { trigger: img, start: "top bottom", end: "bottom top", scrub: true } }));
  });
  return (<section ref={ref} id="collections" className="mx-auto max-w-[1400px] scroll-mt-16 px-4 md:px-8 pt-10">
    <div className="border-b border-white/[0.06] pb-3"><p className="label">05 — Archive</p>
    <h2 className="mt-1.5 text-[20px] md:text-[24px] font-bold tracking-tight">Collections</h2></div>
    <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
      {collections.map(c=><article data-col="true" key={c.id} className="group card card-hover p-2"><SafeImg src={c.image} alt={c.title} cls="aspect-[3/4] rounded-[6px]"/><div className="flex items-center justify-between px-1 py-2"><p className="truncate text-[12px] font-medium">{c.title}</p><span className="ml-2 shrink-0 font-mono text-[10px] tabular-nums text-[#63636b]">{c.count}</span></div></article>)}
    </div>
  </section>);
}
