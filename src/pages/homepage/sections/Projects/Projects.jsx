import Project from './Components/Project';
import ProjectsData from "./ProjectsData";

export default function Projects() {
  return (
    <div id="projects" className='flex flex-col items-center mt-40'>
      <h1 id="about" className="m-auto font-bold text-6xl select-none">Projects</h1>
      <div className='flex flex-row flex-wrap w-8/12 mt-10'>
          {
              ProjectsData.map((project) => {
                  return (<Project key={project.link} name={project.name} logo={project.logo} link={project.link} inProgress={project.underConstruction}/>)
              })
          }
      </div>
    </div>
  );
}