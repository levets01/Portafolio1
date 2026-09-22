import { ArrowUpRight, MapPin, Crosshair, Zap, GraduationCap } from "lucide-react";
import { profile } from "../data/profile";
import { useGsap } from "../hooks/useGsap";
import { heroIntro, heroScroll } from "../animations/heroAnimations";
import { revealSections, revealHeadings } from "../animations/revealAnimations";
function Img({src,alt,cls,eager}){
  return (<div className={`relative overflow-hidden bg-[#0c0c0e] ${cls||""}`}>
    <img src={src} alt={alt} loading={eager?"eager":"lazy"} className="profile-gray h-full w-full object-cover"
      onError={(e)=>{e.currentTarget.style.display="none";e.currentTarget.nextSibling.style.display="flex";}}/>
    <div style={{display:"none"}} className="absolute inset-0 flex-col items-center justify-center gap-1 font-mono text-[10px] tracking-[0.2em] text-[#63636b]"><span className="flex h-10 w-10 items-center justify-center rounded-full border border-dashed border-white/15 text-xs">SI</span>/images/profile.jpg</div>
  </div>);
}
export default function Overview(){
  const ref = useGsap((scope) => { heroIntro(scope); heroScroll(scope); revealSections(scope); });
  const details=[[MapPin,"Location",profile.location],[Crosshair,"Focus",profile.focus],[Zap,"Current Focus",profile.currentFocus],[GraduationCap,"Education",profile.education]];
  return (<section ref={ref} className="mx-auto max-w-[1400px] px-4 md:px-8 pt-4">
    <div className="grid grid-cols-1 gap-3 lg:grid-cols-12">
      <div data-hero-img className="card overflow-hidden lg:col-span-4 min-h-[300px] lg:min-h-[420px]"><Img src="/images/profile.jpg" alt="Stevel Iglesias" cls="h-full min-h-[300px] lg:min-h-[420px]" eager/>
        <div className="flex items-center justify-between border-t border-white/[0.06] px-4 py-2.5 font-mono text-[9px] tracking-[0.18em] text-[#63636b]"><span>FIG.01 — PROFILE</span><span className="text-emerald-400">● REC</span></div>
      </div>
      <div className="lg:col-span-8 flex flex-col gap-3">
        <div data-hero-text className="card flex-1 p-5 md:p-8">
          <p className="label">Overview</p>
          <p data-hero-kicker className="mt-3 font-mono text-[10px] tracking-[0.22em] text-[#63636b]">PORTFOLIO / 2026</p><p className="mt-2 text-[13px] text-[#8b8b91]">I'm</p>
          <h1 data-hero-name className="mt-0.5 text-[32px] md:text-[52px] leading-[1.02] font-bold tracking-[-0.02em]">Stevel Iglesias <span className="ml-1 inline-block rounded border border-blue-400/25 bg-blue-500/10 px-1.5 py-0.5 align-middle font-mono text-[9px] font-normal tracking-[0.15em] text-blue-300">DEV</span></h1>
          <p className="mt-3 max-w-md text-[13px] leading-relaxed text-[#8b8b91]">{profile.overviewDesc}</p>
          <div className="mt-6 grid grid-cols-2 gap-px overflow-hidden rounded-md border border-white/[0.06] bg-white/[0.06] sm:grid-cols-4">
            {profile.stats.map(s=><div key={s.label} className="bg-[#141416] px-4 py-3.5"><p className="text-[20px] font-bold tracking-tight tabular-nums">{s.value}</p><p className="mt-0.5 font-mono text-[9px] tracking-[0.18em] text-[#63636b]">{s.label}</p></div>)}
          </div>
        </div>
        <div className="reveal reveal-2 grid grid-cols-2 gap-3 lg:grid-cols-4">
          {details.map(([Icon,l,v])=><div key={l} className="card card-hover p-3.5"><div className="flex items-center gap-1.5"><Icon size={12} className="text-blue-300/70"/><p className="font-mono text-[9px] tracking-[0.18em] text-[#63636b] uppercase">{l}</p></div><p className="mt-1.5 text-[12px] leading-snug truncate" title={v}>{v}</p></div>)}
        </div>
      </div>
    </div>
    <div className="reveal reveal-3 mt-3 grid grid-cols-1 gap-3 lg:grid-cols-12">
      <div className="card p-5 md:p-7 lg:col-span-8">
        <p className="label">Description</p>
        {profile.longDesc.map((t,i)=><p key={i} className="mt-2.5 text-[13px] leading-relaxed text-[#a1a1aa] first:mt-3">{t}</p>)}
        <a href="#about" className="mt-5 inline-flex items-center gap-1 rounded-md border border-white/10 bg-[#141416] px-3.5 py-2 font-mono text-[10px] tracking-[0.15em] transition hover:border-white/25">STORY<ArrowUpRight size={12}/></a>
      </div>
      <div className="card flex flex-col justify-between gap-4 bg-[#141416] p-5 lg:col-span-4">
        <div><p className="label">Role</p><p className="mt-2 text-[13px] font-medium leading-snug">{profile.role}</p><p className="mt-1.5 text-[12px] text-[#63636b]">Interfaces, apps & digital solutions.</p></div>
        <div className="flex items-center justify-between border-t border-white/[0.06] pt-3 font-mono text-[10px] tracking-[0.12em]"><span className="flex items-center gap-1.5 text-emerald-300"><span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"/>OPEN</span><span className="text-[#63636b]">COL · UTC-5</span></div>
      </div>
    </div>
  </section>);
}
