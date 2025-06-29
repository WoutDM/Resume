import SkillRatings from "./SkillRatings/SkillRatings";

export default function Skills() {

    return (
        <div className='flex flex-col items-center'>
            <h1 id="skills" className="m-auto font-bold text-6xl mb-5 select-none max-[1235px]:text-4xl">Skills</h1>
            <SkillRatings/>
        </div>
    );
}