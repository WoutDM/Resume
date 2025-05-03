import About from "./sections/About/About";
import Intro from "./sections/Intro/Intro";
import Projects from "./sections/Projects/Projects";
import Skills from "./sections/Skills/Skills";
import Timeline from "./sections/Timeline/Timeline";
import Contact from "./sections/Contact/Contact";

export default function Index() {

  return (
    <div id="index" className='text-white font-sans z-10'>
        <Intro/>
        <Skills/>
        <Timeline/>
        <Projects/>
        <About/>
        <Contact/>
    </div>
  );
}