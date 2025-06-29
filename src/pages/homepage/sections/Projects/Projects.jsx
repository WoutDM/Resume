import Project from './Components/Project';
import ProjectsData from "./ProjectsData";
import './Projects.css';

export default function Projects() {
  return (
    <div id="projects" className='flex flex-col items-center mt-40 max-[1235px]:mt-28'>
        <h1 id="projects" className="m-auto font-bold text-6xl select-none max-[1235px]:text-4xl">Projects</h1>

        <div className="flex flex-row flex-wrap justify-center items-center gap-6 max-[520px]:gap-3 w-11/12 mt-10 max-w-7xl justify-items-center">
          {
              ProjectsData.map((project) => {
                  return (<Project key={project.link} name={project.name} logo={project.logo} link={project.link} inProgress={project.underConstruction}/>)
              })
          }
        </div>
    </div>
  );
}