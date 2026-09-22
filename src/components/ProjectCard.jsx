import { ArrowUpRight } from "lucide-react";
export function SafeImg({src,alt,cls,ratio}){
  return (<div className={`relative overflow-hidden bg-[#0c0c0e] ${cls||""} h-full`}>
    <img src={src} alt={alt} loading="lazy" className="profile-gray h-full w-full object-cover transition duration-500 ease-out group-hover:scale-[1.04]"
      onError={(e)=>{e.currentTarget.style.display="none";e.currentTarget.nextSibling.style.display="flex";}}/>
    <div style={{display:"none"}} className="absolute inset-0 flex-col items-center justify-center gap-1 border border-dashed border-white/10 font-mono text-[9px] tracking-[0.2em] text-[#63636b]"><span>NO IMAGE</span><span className="text-[#3f3f46]">1600×1000</span></div>
    <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent opacity-60 transition group-hover:opacity-90"/>
  </div>);
}
export default function ProjectCard({p,i,large}){
  return (<article data-project="true" className={`group card card-hover p-2.5 ${large?"lg:col-span-7":"lg:col-span-5"}`}>
    <div data-project-img="true" className="overflow-hidden rounded-[6px]"><SafeImg src={p.image} alt={p.title} cls={`${large?"aspect-[16/9]":"aspect-[16/10]"}`} /></div>
    <div className="flex items-start justify-between gap-3 px-1.5 pt-3.5">
      <div className="min-w-0"><p className="font-mono text-[10px] tabular-nums text-[#63636b]">{String(i+1).padStart(2,"0")}</p>
      <h3 className="mt-0.5 truncate text-[15px] font-semibold tracking-tight">{p.title}</h3>
      <p className="mt-0.5 truncate text-[12px] text-[#8b8b91]">{p.description}</p></div>
      <span className="shrink-0 rounded border border-white/[0.06] bg-[#141416] px-1.5 py-0.5 font-mono text-[10px] text-[#8b8b91]">{p.year}</span>
    </div>
    <div className="flex flex-wrap gap-1 px-1.5 pt-2.5">{p.technologies.map(t=><span key={t} className="rounded border border-white/[0.07] bg-[#141416] px-1.5 py-0.5 font-mono text-[9px] tracking-[0.08em] text-[#a1a1aa]">{t}</span>)}</div>
    <a href={p.link} aria-label={`View ${p.title}`} className="mx-1.5 mb-1 mt-3 flex items-center justify-between border-t border-white/[0.06] pt-2.5 font-mono text-[10px] tracking-[0.18em] text-[#63636b] transition group-hover:text-white">VIEW PROJECT<ArrowUpRight size={13} className="transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-blue-300"/></a>
  </article>);
}
