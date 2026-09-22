import { ArrowUp } from "lucide-react";
import { useGsap, gsap } from "../hooks/useGsap";
export default function BackToTop(){
  const ref = useGsap((scope) => {
    const btn = scope.querySelector("[data-btt]");
    gsap.fromTo(btn, { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 0.3,
      scrollTrigger: { trigger: document.body, start: "top top+=-400", end: "max", toggleActions: "play none none reverse" } });
  });
  return (<div ref={ref}><button data-btt aria-label="Back to top" onClick={()=>window.scrollTo({top:0,behavior:"smooth"})} className="fixed bottom-6 right-6 z-50 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-[#151518] opacity-0 shadow-lg transition-colors hover:border-white/30 focus-visible:outline-2 focus-visible:outline-blue-400"><ArrowUp size={16}/></button></div>);
}
