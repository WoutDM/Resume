import About from "./sections/About/About";
import Intro from "./sections/Intro/Intro";
import Projects from "./sections/Projects/Projects";
import Skills from "./sections/Skills/Skills";
import Timeline from "./sections/Timeline/Timeline";

export default function Index() {

  return (
    <div id="index" className='bg-black text-white font-sans'>
      <Intro/>
      <Skills/>
      <Timeline/>
      <About/>
      <Projects/>
    </div> 
  );
}