import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { profile } from "../data/profile";
import { useGsap, gsap } from "../hooks/useGsap";
const links = [["WHOAMI","#whoami"],["ABOUT","#about"],["PROJECTS","#projects"],["EXPERIENCE","#experience"],["COLLECTIONS","#collections"]];
export default function Navbar(){
  const [open,setOpen]=useState(false);
  const ref = useGsap((scope) => {
    const nav = scope.querySelector("[data-nav]");
    gsap.to(nav, { backgroundColor: "rgba(9,9,11,0.92)", ease: "none", scrollTrigger: { trigger: document.body, start: "top top+=40", end: "max", toggleActions: "play none none reverse" } });
  });
  return (<header ref={ref} className="sticky top-0 z-50 border-b border-white/[0.06] bg-[#09090b]/85 backdrop-blur-xl">
    <nav data-nav className="mx-auto flex h-12 max-w-[1400px] items-center justify-between px-4 md:px-8" aria-label="Main">
      <a href="#top" className="flex items-center gap-2">
        <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/10 bg-[#141416] font-mono text-[10px] font-bold">{profile.initials}</span>
        <span className="text-[13px] font-semibold tracking-tight">{profile.brand}</span>
        <span className="hidden sm:inline font-mono text-[9px] tracking-[0.2em] text-[#63636b] border border-white/[0.06] rounded px-1.5 py-0.5 ml-1">OS v1.0</span>
      </a>
      <div className="hidden items-center gap-6 md:flex">
        {links.map(([l,h])=><a key={l} href={h} className="font-mono text-[10px] tracking-[0.18em] text-[#8b8b91] transition hover:text-white">{l}</a>)}
      </div>
      <div className="hidden items-center gap-3 md:flex">
        <span className="flex items-center gap-1.5 font-mono text-[10px] tracking-[0.15em] text-[#8b8b91]"><span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"/>AVAILABLE</span>
        <a href="/resume.pdf" className="flex items-center gap-1 rounded-md border border-white/10 bg-[#141416] px-2.5 py-1.5 font-mono text-[10px] tracking-[0.15em] transition hover:border-white/25 hover:text-white">RESUME<ArrowUpRight size={12}/></a>
      </div>
      <button className="md:hidden p-2 -mr-2 text-[#b6b6bb]" aria-label="Menu" aria-expanded={open} onClick={()=>setOpen(!open)}>{open?<X size={18}/>:<Menu size={18}/>}</button>
    </nav>
    {open && (<div className="border-t border-white/[0.06] bg-[#0b0b0d] px-4 py-2 md:hidden">
      {[["WHOAMI","#whoami"],["ABOUT","#about"],["PROJECTS","#projects"],["EXPERIENCE","#experience"],["COLLECTIONS","#collections"],["CONTACT","#contact"]].map(([l,h])=><a key={l} href={h} onClick={()=>setOpen(false)} className="flex items-center justify-between border-b border-white/5 py-3 font-mono text-[11px] tracking-[0.18em] text-[#8b8b91] last:border-0 hover:text-white">{l}<span className="text-[#63636b]">→</span></a>)}
      <a href="/resume.pdf" className="my-2 flex items-center justify-center gap-1 rounded-md border border-white/10 bg-[#141416] py-2.5 font-mono text-[11px] tracking-[0.15em]">RESUME<ArrowUpRight size={12}/></a>
    </div>)}
  </header>);
}
