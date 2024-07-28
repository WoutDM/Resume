import Intro from "./sections/Intro";
import Skills from "./sections/Skills";

export default function Index() {

  return (
    <div id="index" className='bg-black px-[20%] text-white font-sans'>
      <Intro/>
      <Skills/>
      <p className="mb-[300px]" id="skills">test</p>
      <p className="mb-[300px]" id="projects">test2</p>
      <p className="mb-[500px] bg-black" id="aboutme">test3</p>
    </div> 
  );
}