import Intro from "./sections/Intro";
import Skills from "./sections/Skills";
import Timeline from "./sections/Timeline";

export default function Index() {

  return (
    <div id="index" className='bg-black text-white font-sans'>
      <Intro/>
      <Skills/>
      <Timeline/>
      {/*<p className="mb-[300px]" id="projects">test2</p>*/}
      {/*<p className="mb-[500px] bg-black" id="aboutme">test3</p>*/}
    </div> 
  );
}