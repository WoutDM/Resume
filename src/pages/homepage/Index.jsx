import Intro from "./sections/Intro";

export default function Index() {

  return (
    <div class='bg-black px-[20%] text-white font-sans'>
      <Intro></Intro>
      <p className="mb-[300px]" id="skills">test</p>
      <p className="mb-[300px]" id="projects">test2</p>
      <p className="mb-[500px] bg-black" id="aboutme">test3</p>
    </div> 
  );
}