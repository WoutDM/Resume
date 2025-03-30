import Project from './Components/Project';
import HighUp from './Project_logos/HighUp.png';

export default function Projects() {
  return (
    <div id="projects" className='flex flex-col items-center mt-40'>
      <h1 id="about" className="m-auto font-bold text-3xl select-none">Projects<span className="text-[#D6F919]">.</span></h1>
      <div className='flex flex-row flex-wrap w-8/12 mt-10'>
        <Project name={'HighUp'} description={'test test test blablabla'} logo={HighUp}/>
        <Project name={'HighUp2'} description={'test test test blablabla2'} logo={HighUp}/>
        <Project name={'HighUp3'} description={'test test test blablabla3'} logo={HighUp} inProgress={true}/>
        <Project name={'HighUp4'} description={'test test test blablabla4'} logo={HighUp}/>
      </div>
    </div>
  );
}