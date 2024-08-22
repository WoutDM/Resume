import Project from './Components/Project';
import HighUp from './Project_logos/HighUp.png';

export default function Projects() {
  return (
    <div className='flex flex-col items-center mt-40'>
      <h1 id="about" className="m-auto font-bold text-3xl">Projects<span className="text-[#D6F919]">.</span></h1>
      <div className='flex flex-row flex-wrap w-7/12 mt-10'>
        <Project name={'HighUp'} description={'test test test blablabla'} logo={HighUp}/>
        <Project name={'HighUp2'} description={'test test test blablabla2'} logo={HighUp}/>
        <Project name={'HighUp3'} description={'test test test blablabla3'} logo={HighUp}/>
        <Project name={'HighUp4'} description={'test test test blablabla4'} logo={HighUp}/>
    </div>
    </div>
  );
}