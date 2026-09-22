import { useEffect, useRef, useState } from "react";
import { profile } from "../data/profile";
import { useGsap } from "../hooks/useGsap";
import { terminalIntro, terminalScrollFx } from "../animations/terminalAnimations";
import { projects } from "../data/projects";
import { experience } from "../data/experience";
import { terminalSkills } from "../data/skills";

const COMMANDS = ["whoami","about","skills","projects","experience","contact","help","clear"];
const PROMPT = "stevel@portfolio:~$";

function Line({cmd}){
  return (<div className="flex flex-wrap items-center gap-x-2"><span className="text-blue-300/90">{PROMPT}</span><span className="text-[#f4f4f5] break-all">{cmd}</span></div>);
}

function Output({cmd}){
  const c = cmd.trim().toLowerCase();
  if(!c) return null;
  if(c==="whoami") return (<div className="term-fade"><p className="text-[13px] font-semibold text-white">{profile.name}</p><p className="text-blue-300/90">{profile.role}</p><p className="text-[#8b8b91]">{profile.location}</p><p className="mt-1.5 max-w-md whitespace-pre-wrap text-[#a1a1aa]">{profile.whoami}</p></div>);
  if(c==="about") return (<p className="term-fade max-w-lg whitespace-pre-wrap text-[#a1a1aa]">{profile.aboutLong}</p>);
  if(c==="skills") return (<div className="term-fade grid gap-2 sm:grid-cols-2">{terminalSkills.map(g=><div key={g.group}><p className="text-blue-300/90">{g.group}</p>{g.items.map(t=><p key={t} className="text-[#a1a1aa]">  {t}</p>)}</div>)}</div>);
  if(c==="projects") return (<div className="term-fade"><p className="text-[#63636b]">Opening project directory...</p><div className="mt-1.5 space-y-1.5">{projects.map((p,i)=><div key={p.id} className="flex items-center justify-between gap-3"><p><span className="text-blue-300/90">[{String(i+1).padStart(2,"0")}]</span> <span className="text-white">{p.title}</span> <span className="hidden sm:inline text-[#63636b]">— {p.description}</span></p><a href="#projects" className="shrink-0 font-mono text-[10px] text-[#8b8b91] hover:text-white">OPEN ↗</a></div>)}</div></div>);
  if(c==="experience"){
    if(!experience.length) return (<p className="term-fade text-[#8b8b91]">Experience data coming soon...</p>);
    return (<div className="term-fade space-y-1.5">{experience.map(e=><p key={e.id}><span className="text-blue-300/90">{e.year}</span> <span className="text-white">{e.role}</span> <span className="text-[#8b8b91]">— {e.company}</span></p>)}</div>);
  }
  if(c==="contact") return (<div className="term-fade space-y-0.5">{profile.contact.map(x=><p key={x.label}><span className="inline-block w-16 text-[#63636b]">{x.label}</span> <a href={x.href} className="text-blue-300/90 hover:text-white break-all">{x.value}</a></p>)}</div>);
  if(c==="help") return (<div className="term-fade"><p className="text-[#63636b]">Available commands:</p><div className="mt-1 space-y-0.5">{[["whoami","about me"],["about","personal information"],["skills","technologies I use"],["projects","featured projects"],["experience","professional experience"],["contact","contact information"],["clear","clear terminal"]].map(([k,d])=><p key={k}><span className="inline-block w-20 text-blue-300/90">{k}</span><span className="text-[#63636b]">→</span> <span className="text-[#a1a1aa]">{d}</span></p>)}</div></div>);
  return (<div className="term-fade"><p>Command not found: {cmd.trim()}</p><p className="text-[#63636b]">Type "help" to see available commands.</p></div>);
}

export default function Terminal(){
  const animRef = useGsap((scope) => { terminalIntro(scope); terminalScrollFx(scope); });
  const [history,setHistory]=useState([{cmd:"whoami"}]);
  const [value,setValue]=useState("");
  const [histIdx,setHistIdx]=useState(-1);
  const bodyRef=useRef(null); const inputRef=useRef(null);
  useEffect(()=>{ if(bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight; },[history]);
  const run=(raw)=>{
    const cmd=raw.trim();
    if(cmd.toLowerCase()==="clear"){ setHistory([]); return; }
    setHistory(h=>[...h,{cmd:raw}]);
  };
  const onKey=(e)=>{
    if(e.key==="Enter"){ run(value); setValue(""); setHistIdx(-1); }
    else if(e.key==="ArrowUp"){ e.preventDefault(); const cmds=history.map(h=>h.cmd).filter(Boolean); if(!cmds.length) return; const n=histIdx===-1?cmds.length-1:Math.max(0,histIdx-1); setHistIdx(n); setValue(cmds[n]||""); }
    else if(e.key==="ArrowDown"){ e.preventDefault(); const cmds=history.map(h=>h.cmd).filter(Boolean); if(histIdx===-1) return; const n=histIdx+1; if(n>=cmds.length){setHistIdx(-1);setValue("");} else {setHistIdx(n);setValue(cmds[n]);} }
    else if(e.key==="Tab"){ e.preventDefault(); const m=COMMANDS.filter(c=>c.startsWith(value.trim().toLowerCase())); if(m.length===1) setValue(m[0]); }
  };
  return (<section ref={animRef} id="whoami" className="mx-auto max-w-[1400px] scroll-mt-16 px-4 md:px-8 pt-10">
    <div className="border-b border-white/[0.06] pb-3 flex items-end justify-between"><div><p className="label">01 / About</p><h2 className="mt-1.5 text-[20px] md:text-[24px] font-bold tracking-tight">WHOAMI</h2><p className="mt-0.5 text-[12px] text-[#63636b]">A little look behind the code.</p></div><span className="flex items-center gap-1.5 font-mono text-[10px] tracking-[0.15em] text-emerald-300"><span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"/>INTERACTIVE</span></div>
    <div className="mt-3 grid grid-cols-1 gap-3 lg:grid-cols-12">
      <div data-terminal-box className="card overflow-hidden lg:col-span-8 transition hover:border-white/[0.12]">
        <div className="flex items-center justify-between border-b border-white/[0.06] bg-[#0c0c0e] px-3.5 py-2.5">
          <div className="flex gap-1.5" aria-hidden="true"><span className="h-2.5 w-2.5 rounded-full bg-[#3f3f46]"/><span className="h-2.5 w-2.5 rounded-full bg-[#3f3f46]"/><span className="h-2.5 w-2.5 rounded-full bg-[#3f3f46]"/></div>
          <p className="font-mono text-[10px] tracking-[0.1em] text-[#63636b]">bash — stevel@portfolio</p>
        </div>
        <div ref={bodyRef} onClick={()=>inputRef.current?.focus()} className="h-[340px] md:h-[380px] overflow-y-auto px-3.5 py-3 font-mono text-[11px] md:text-[12px] leading-relaxed cursor-text" role="log" aria-label="Interactive terminal" aria-live="polite">
          <p className="text-[#63636b]"># type "help" to start — try "whoami"</p>
          {history.map((h,i)=>(<div key={i} className="mt-2"><Line cmd={h.cmd}/><div className="mt-1 pl-0 sm:pl-1"><Output cmd={h.cmd}/></div></div>))}
          <div className="mt-2 flex items-center gap-x-2">
            <span className="shrink-0 text-blue-300/90">{PROMPT}</span>
            <input ref={inputRef} value={value} onChange={e=>setValue(e.target.value)} onKeyDown={onKey} aria-label="Terminal input" autoComplete="off" autoCapitalize="off" spellCheck="false"
              className="w-full min-w-0 bg-transparent text-[#f4f4f5] caret-blue-300 outline-none placeholder:text-[#3f3f46]" placeholder="whoami"/>
          </div>
        </div>
        <div className="flex flex-wrap gap-1.5 border-t border-white/[0.06] bg-[#0c0c0e] px-3.5 py-2.5">
          {COMMANDS.map(c=><button key={c} onClick={()=>{run(c); inputRef.current?.focus();}} className="rounded border border-white/[0.07] bg-[#141416] px-2 py-1 font-mono text-[10px] text-[#8b8b91] transition hover:border-white/20 hover:text-white">{c}</button>)}
        </div>
      </div>
      <aside className="card bg-[#141416] p-5 lg:col-span-4 flex flex-col justify-between gap-4">
        <div><p className="label">About</p><p className="mt-2 text-[16px] font-semibold tracking-tight">"Behind the interface."</p><p className="mt-2 text-[12px] leading-relaxed text-[#8b8b91]">A terminal-inspired profile. Type commands on the left to explore.</p></div>
        <div className="space-y-2.5 border-t border-white/[0.06] pt-4">
          {[["LOCATION",profile.location],["FOCUS",profile.focus],["CURRENTLY","Learning & Building"]].map(([k,v])=><div key={k} className="flex justify-between gap-3"><span className="font-mono text-[9px] tracking-[0.2em] text-[#63636b]">{k}</span><span className="text-right text-[12px]">{v}</span></div>)}
        </div>
      </aside>
    </div>
    <style>{`.term-fade{animation:fadeUp .35s ease both}@keyframes blink{0%,49%{opacity:1}50%,100%{opacity:0}}input::after{}`}</style>
  </section>);
}
