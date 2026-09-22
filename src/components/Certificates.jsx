import { certificates } from "../data/collections";
import { SafeImg } from "./ProjectCard";
export default function Certificates(){
  return (<section className="mx-auto max-w-[1400px] px-4 md:px-8 pt-10">
    <div className="border-b border-white/[0.06] pb-3"><p className="label">04 — Proof</p>
    <h2 className="mt-1.5 text-[20px] md:text-[24px] font-bold tracking-tight">Certificates / Recognitions</h2></div>
    <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
      {certificates.map(c=><article key={c.id} className="group card card-hover flex items-center gap-3 p-2.5"><div className="w-24 shrink-0"><SafeImg src={c.image} alt={c.title} cls="aspect-square rounded-[6px]"/></div><div className="min-w-0 py-1"><p className="truncate text-[13px] font-semibold">{c.title}</p><p className="font-mono text-[10px] tracking-[0.1em] text-[#63636b]">{c.issuer}</p><p className="mt-1.5 font-mono text-[9px] tracking-[0.15em] text-[#3f3f46]">PDF ↗</p></div></article>)}
    </div>
  </section>);
}
