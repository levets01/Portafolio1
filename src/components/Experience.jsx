import { experience } from "../data/experience";
import { useGsap, gsap } from "../hooks/useGsap";
export default function Experience(){
  const ref = useGsap((scope) => {
    const items = scope.querySelectorAll("[data-exp]");
    if (items.length) gsap.from(items, { opacity: 0, x: -24, duration: 0.6, ease: "power3.out", stagger: 0.15, scrollTrigger: { trigger: scope, start: "top 80%", once: true } });
  });
  return (<section ref={ref} id="experience" className="mx-auto max-w-[1400px] scroll-mt-16 px-4 md:px-8 pt-10">
    <div data-heading className="border-b border-white/[0.06] pb-3"><p data-h-num className="label">02 — Path</p><h2 data-h-title className="mt-1.5 text-[20px] md:text-[24px] font-bold tracking-tight">Experience</h2></div>
    <div className="card mt-3 p-5 md:p-7">
      {experience.length===0 ? (<div className="flex flex-col items-center py-6 text-center"><p className="label">Professional experience</p><p className="mt-2 text-[15px] font-medium">Coming soon</p><p className="mt-1 max-w-sm text-[12px] text-[#63636b]">Edit <code className="font-mono text-[11px] text-white">src/data/experience.js</code> to add entries.</p></div>)
      : (<ol className="relative space-y-0">{experience.map(e=><li key={e.id} className="grid gap-1 border-l border-white/10 py-4 pl-5 sm:grid-cols-[80px_1fr] sm:gap-4"><p className="font-mono text-[11px] text-blue-300 tabular-nums">{e.year}</p><div><p className="text-[13px] font-semibold">{e.role} <span className="font-normal text-[#8b8b91]">— {e.company}</span></p><p className="mt-1 text-[12px] leading-relaxed text-[#8b8b91]">{e.description}</p></div></li>)}</ol>)}
    </div>
  </section>);
}
