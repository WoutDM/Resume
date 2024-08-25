import inProgressIcon from '../../../../../images/in-progress.png';

export default function Project({ name, description, logo, inProgress }) {
  return (
    <div className="flex justify-center items-center flex-[0_0_32%] mx-auto aspect-square mb-3 bg-neutral-900 overflow-hidden relative">
      <img className="h-5/6 object-cover brightness-90" src={logo} alt="project-logo"/>
      {
        inProgress 
          ?
          (<img className='drop-shadow-glow h-6 absolute right-2 top-2' src={inProgressIcon} alt="in-progress"/>)
          :
          null  
      }
      
    </div>
  );
}