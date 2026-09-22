import Navbar from "./components/Navbar";
import StatusBar from "./components/StatusBar";
import Overview from "./components/Overview";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import TechStack from "./components/TechStack";
import Certificates from "./components/Certificates";
import Collections from "./components/Collections";
import About from "./components/About";
import Terminal from "./components/Terminal";
import BackToTop from "./components/BackToTop";
import ScrollProgress from "./components/ScrollProgress";
import Footer from "./components/Footer";
export default function App(){
  return (<div id="top" className="min-h-screen bg-[#09090b] text-[#f4f4f5] antialiased">
    <ScrollProgress /><Navbar /><StatusBar />
    <main className="pb-4"><Overview /><Terminal /><Projects /><Experience /><TechStack /><Certificates /><Collections /><About /></main>
    <BackToTop /><Footer />
  </div>);
}
