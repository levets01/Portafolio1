import { profile } from "../data/profile";
export default function About(){
  return (<section id="about" className="mx-auto max-w-[1400px] scroll-mt-16 px-4 md:px-8 pt-10">
    <div className="border-b border-white/[0.06] pb-3"><p className="label">06 — Profile</p>
    <h2 className="mt-1.5 text-[20px] md:text-[24px] font-bold tracking-tight">About</h2></div>
    <div className="mt-3 grid grid-cols-1 gap-3 lg:grid-cols-12">
      <div className="card p-5 md:p-7 lg:col-span-7"><p className="text-[13px] leading-relaxed text-[#a1a1aa]">{profile.tagline}</p><div className="mt-5 grid gap-4 border-t border-white/[0.06] pt-5 sm:grid-cols-3"><div><p className="font-mono text-[9px] tracking-[0.2em] text-[#63636b]">WHO I AM</p><p className="mt-1.5 text-[12px] leading-relaxed">Web developer from Colombia.</p></div><div><p className="font-mono text-[9px] tracking-[0.2em] text-[#63636b]">LEARNING</p><p className="mt-1.5 text-[12px] leading-relaxed">Frontend, backend & databases.</p></div><div><p className="font-mono text-[9px] tracking-[0.2em] text-[#63636b]">INTERESTS</p><p className="mt-1.5 text-[12px] leading-relaxed">Clean UI, performance, UX.</p></div></div></div>
      <div id="contact" className="card bg-[#141416] p-5 md:p-6 lg:col-span-5 scroll-mt-20"><p className="label">Contact</p><p className="mt-2 text-[16px] font-semibold tracking-tight">Let's build something.</p><a href="mailto:hello@stevel.dev" className="mt-3.5 block rounded-md border border-white/10 bg-[#101012] px-4 py-2.5 text-center font-mono text-[10px] tracking-[0.15em] transition hover:border-white/25">HELLO@STEVEL.DEV</a><div className="mt-2 flex gap-2"><a href="#" className="flex-1 rounded-md border border-white/[0.07] px-3 py-2 text-center font-mono text-[10px] tracking-[0.12em] text-[#8b8b91] hover:text-white">GITHUB</a><a href="#" className="flex-1 rounded-md border border-white/[0.07] px-3 py-2 text-center font-mono text-[10px] tracking-[0.12em] text-[#8b8b91] hover:text-white">LINKEDIN</a></div></div>
    </div>
  </section>);
}
