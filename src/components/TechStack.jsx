import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { skillGroups } from "../data/skills";
import TechIcon from "./TechIcon";
import { useGsap } from "../hooks/useGsap";
import { techEntrance, techDrift } from "../animations/techStackAnimations";

const totalSkills = skillGroups.reduce((n, g) => n + g.items.length, 0);

function Tile({ item, dimmed }) {
  return (
    <div title={item.name} aria-label={item.name} role="img" tabIndex={0}
      className={`tech-tile group relative flex flex-col items-center justify-center gap-2 rounded-lg border border-white/[0.06] bg-[#101012] p-3 transition-all duration-300 ease-out hover:-translate-y-[3px] hover:scale-[1.03] hover:border-white/[0.16] hover:bg-[#141416] focus-visible:outline-2 focus-visible:outline-blue-400 ${dimmed ? "opacity-45" : "opacity-100"}`}>
      <span className="tech-logo text-[#d4d4d8] transition-all duration-300 ease-out group-hover:scale-110 group-hover:text-white group-hover:drop-shadow-[0_0_10px_rgba(96,165,250,0.22)]">
        <TechIcon icon={item.icon} name={item.name} size={24} />
      </span>
      <span className="text-center text-[10px] leading-tight text-[#63636b] transition-colors duration-300 group-hover:text-[#f4f4f5]">{item.name}</span>
      <ArrowUpRight size={11} className="absolute right-1.5 top-1.5 text-blue-300 opacity-0 transition-opacity duration-300 group-hover:opacity-100" aria-hidden="true" />
    </div>
  );
}

export default function TechStack() {
  const [hovered, setHovered] = useState(null);
  const ref = useGsap((scope) => { techEntrance(scope); techDrift(scope); });
  return (
    <section ref={ref} className="mx-auto max-w-[1400px] px-4 md:px-8 pt-10" aria-label="Tech stack">
      <div data-heading className="border-b border-white/[0.06] pb-3 flex items-end justify-between gap-4">
        <div>
          <p data-h-num className="label">03 — Arsenal</p>
          <h2 data-h-title className="mt-1.5 text-[20px] md:text-[24px] font-bold tracking-tight">TechStack</h2>
          <p className="mt-0.5 text-[12px] text-[#63636b]">Tools I use to build digital experiences.</p>
        </div>
        <span className="shrink-0 rounded border border-white/[0.06] bg-[#141416] px-2 py-1 font-mono text-[10px] tracking-[0.15em] text-[#8b8b91] tabular-nums">{String(totalSkills).padStart(2, "0")}+ TOOLS</span>
      </div>
      <div data-h-line className="h-px w-full origin-left bg-white/[0.04]" aria-hidden="true" />
      <div className="mt-4 space-y-5" onMouseLeave={() => setHovered(null)}>
        {skillGroups.map((g, gi) => (
          <div key={g.title} data-tech-group>
            <p className="flex items-center gap-2 font-mono text-[9px] tracking-[0.2em] text-[#63636b]">
              <span className="text-blue-300/70 tabular-nums">{String(gi + 1).padStart(2, "0")}</span>{g.title}
              <span className="h-px flex-1 bg-white/[0.05]" aria-hidden="true" />
            </p>
            <div className="mt-2.5 grid grid-cols-3 gap-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7">
              {g.items.map((item) => {
                const key = `${g.title}-${item.name}`;
                return (
                  <div key={key} data-tech onMouseEnter={() => setHovered(key)} onFocus={() => setHovered(key)}>
                    <Tile item={item} dimmed={hovered !== null && hovered !== key} />
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
      <style>{`
        .tech-logo svg { filter: grayscale(1); transition: filter .3s ease; width: 24px; height: 24px; }
        @media (min-width: 768px) { .tech-logo svg { width: 30px; height: 30px; } }
        .tech-tile:hover .tech-logo svg { filter: grayscale(0); }
        .tech-tile { animation: techFloat 5.5s ease-in-out infinite; }
        .tech-tile:nth-child(2n) { animation-delay: .15s; } .tech-tile:nth-child(3n) { animation-delay: .3s; }
        @keyframes techFloat { 0%,100% { translate: 0 0; } 50% { translate: 0 -3px; } }
        @media (prefers-reduced-motion: reduce) { .tech-tile { animation: none !important; } }
      `}</style>
    </section>
  );
}
