import { profile } from "../data/profile";
export default function Footer(){
  return (<footer className="mx-auto max-w-[1400px] px-6 md:px-10 py-10">
    <div className="flex flex-col items-center justify-between gap-3 border-t border-white/[0.07] pt-6 font-mono text-[11px] tracking-[0.15em] text-[#8b8b91] md:flex-row">
      <span>{profile.initials} — © 2026 STEVEL.OS</span>
      <span className="flex items-center gap-1.5"><span className="h-1.5 w-1.5 rounded-full bg-emerald-400"/>ALL SYSTEMS NORMAL</span>
    </div>
  </footer>);
}
