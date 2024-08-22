export default function Project({ name, description, logo }) {
  return (
    <div className="flex justify-center items-center flex-[0_0_33.33%] mb-6">
      <div className="flex jusftify-center items-center w-11/12 aspect-square bg-gray-500">
        <img className='drop-shadow-glow' src={logo} alt="project-logo"/>
      </div>
    </div>
  );
}