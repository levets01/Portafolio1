// Edita libremente. `icon` = slug de Simple Icons (react-icons/si).
// Si no hay logo adecuado, usa icon:"lucide:NombreLucide" o icon:"text:XX".
export const skillGroups = [
  { title: "LANGUAGES", items: [
    { name: "JavaScript", icon: "javascript" },
    { name: "HTML", icon: "html5" },
    { name: "CSS", icon: "css" },
    { name: "Python", icon: "python" },
  ]},
  { title: "FRAMEWORKS & LIBRARIES", items: [
    { name: "React", icon: "react" },
    { name: "Node.js", icon: "nodedotjs" },
    { name: "Express", icon: "express" },
    { name: "Tailwind CSS", icon: "tailwindcss" },
    { name: "Vite", icon: "vite" },
  ]},
  { title: "DATABASE & TOOLS", items: [
    { name: "MySQL", icon: "mysql" },
    { name: "Firebase", icon: "firebase" },
    { name: "Git", icon: "git" },
    { name: "GitHub", icon: "github" },
    { name: "VS Code", icon: "vscode" },
    { name: "npm", icon: "npm" },
  ]},
  { title: "AI / WORKFLOW", items: [
    { name: "AI Tools", icon: "lucide:Sparkles" },
    { name: "Responsive Design", icon: "lucide:Smartphone" },
    { name: "REST APIs", icon: "lucide:Plug" },
  ]},
  { title: "CLOUD & DEPLOYMENT", items: [
    { name: "Vercel", icon: "vercel" },
    { name: "Firebase Hosting", icon: "firebase" },
  ]},
];
// Compat: listas planas usadas por otras secciones / terminal
export const skills = skillGroups.map(g => ({ category: g.title, items: g.items.map(i => i.name) }));
export const terminalSkills = [
  { group: "Frontend", items: ["HTML","CSS","JavaScript","React"] },
  { group: "Backend", items: ["Node.js","Express"] },
  { group: "Database", items: ["MySQL","Firebase"] },
  { group: "Tools", items: ["Git","GitHub","VS Code"] },
];
