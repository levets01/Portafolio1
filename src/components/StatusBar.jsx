import { Activity, Tag, Eye, GitBranch } from "lucide-react";
export default function StatusBar(){
  return (<div className="border-b border-white/[0.06] bg-[#0b0b0d]">
    <div className="mx-auto flex max-w-[1400px] items-center gap-5 overflow-x-auto px-4 py-[7px] font-mono text-[9px] tracking-[0.18em] text-[#63636b] md:px-8 whitespace-nowrap">
      <span className="flex items-center gap-1.5"><Activity size={11} className="text-emerald-400"/>SYSTEM <span className="text-emerald-400">● ONLINE</span></span>
      <span className="h-3 w-px bg-white/10"/>
      <span className="hidden sm:flex items-center gap-1.5"><GitBranch size={11}/>MAIN <span className="text-[#8b8b91]">v1.0.0</span></span>
      <span className="hidden sm:flex items-center gap-1.5"><Tag size={11}/>RELEASES <span className="text-[#8b8b91]">04</span></span>
      <span className="hidden md:flex items-center gap-1.5"><Eye size={11}/>VIEWS <span className="text-[#8b8b91]">—</span></span>
      <span className="ml-auto hidden lg:block text-[#3f3f46]">STEVEL.OS — 1400px GRID — 12 COL</span>
    </div>
  </div>);
}
