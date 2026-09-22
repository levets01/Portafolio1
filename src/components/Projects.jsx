import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";
import { useGsap } from "../hooks/useGsap";
import { projectEntrance, projectParallax } from "../animations/projectAnimations";
import { revealHeadings } from "../animations/revealAnimations";
export default function Projects(){
  const ref = useGsap((scope) => { projectEntrance(scope); projectParallax(scope); revealHeadings(scope); });
  const [first, ...rest] = projects;
  return (<section ref={ref} id="projects" className="mx-auto max-w-[1400px] scroll-mt-16 px-4 md:px-8 pt-10">
    <div data-heading className="flex items-end justify-between border-b border-white/[0.06] pb-3"><div><p data-h-num className="label">01 — Work</p><h2 data-h-title className="mt-1.5 text-[20px] md:text-[24px] font-bold tracking-tight">Featured Projects</h2></div><span className="font-mono text-[10px] tracking-[0.15em] text-[#63636b]">{String(projects.length).padStart(2,"0")} ITEMS</span></div>
    <div className="mt-3 grid grid-cols-1 gap-3 lg:grid-cols-12">
      {first && <ProjectCard p={first} i={0} large />}
      <div className="grid grid-cols-1 gap-3 content-start sm:grid-cols-2 lg:col-span-5 lg:grid-cols-1 xl:grid-cols-2">
        {rest.map((p,k)=>(<div key={p.id} className="[&_article]:h-full"><ProjectCard p={p} i={k+1} /></div>))}
      </div>
    </div>
  </section>);
}
