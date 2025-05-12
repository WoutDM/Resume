import About from "./sections/About/About";
import Intro from "./sections/Intro/Intro";
import Projects from "./sections/Projects/Projects";
import Skills from "./sections/Skills/Skills";
import Timeline from "./sections/Timeline/Timeline";
import Contact from "./sections/Contact/Contact";

export default function Index() {

  return (
    <div id="index" className='text-white z-10 font'>
        <Intro/>
        <Skills/>
        <Timeline/>
        <Projects/>
        <About/>
        <Contact/>
    </div>
  );
}