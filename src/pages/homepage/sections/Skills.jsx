import SkillRating from "./Components/SkillRating";

export default function Skills() {


  return (
    <div id="skills" className='flex flex-col'>
      <h1 className="m-auto font-bold text-3xl mb-6">Skills<span className="text-[#D6F919]">.</span></h1>
      <div className="flex flex-row justify-between">
        <div className="w-[47%]">
          <h2 className="font-extrabold">Coding</h2>
          <SkillRating skill={'React'} rating={4}></SkillRating>
          {/* coding */}
        </div>
        <div className="w-[47%]">
          {/* languages and others */}
          <div>
            <h2 className="font-extrabold">Languages</h2>

          </div>
          <div>
            <h2 className="font-extrabold">Others</h2>

          </div>
        </div>
      </div>
    </div>
    
  );
}