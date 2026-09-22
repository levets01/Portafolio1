import { SiJavascript, SiHtml5, SiCss, SiPython, SiReact, SiNodedotjs, SiExpress, SiTailwindcss, SiVite, SiMysql, SiFirebase, SiGit, SiGithub, SiVscodium, SiNpm, SiVercel } from "react-icons/si";
import { Sparkles, Smartphone, Plug } from "lucide-react";
const MAP = { javascript: SiJavascript, html5: SiHtml5, css: SiCss, python: SiPython, react: SiReact, nodedotjs: SiNodedotjs, express: SiExpress, tailwindcss: SiTailwindcss, vite: SiVite, mysql: SiMysql, firebase: SiFirebase, git: SiGit, github: SiGithub, vscode: SiVscodium, npm: SiNpm, vercel: SiVercel };
const LUCIDE = { Sparkles, Smartphone, Plug };
export default function TechIcon({ icon, name, size = 36 }) {
  if (icon?.startsWith("lucide:")) {
    const C = LUCIDE[icon.split(":")[1]] || Sparkles;
    return <C size={size} strokeWidth={1.5} className="text-[#a1a1aa]" aria-hidden="true" />;
  }
  const C = MAP[icon];
  if (!C) return <span aria-hidden="true" className="font-mono font-bold text-[#a1a1aa]" style={{ fontSize: size * 0.5 }}>{name.slice(0, 2).toUpperCase()}</span>;
  return <C size={size} aria-hidden="true" />;
}
