import SkillRatings from "./SkillRatings/SkillRatings";
// import SkillsCarousel from "./SkillsCarousel/SkillsCarousel";
// import {useState} from "react";
// import dropDown from '../../../../images/drop-down-30.png'
// import dropUp from '../../../../images/drop-up-30.png';

export default function Skills() {

    // const [canShowSkillRatings, setCanShowSkillRatings] = useState(false);

    return (
        <div className='flex flex-col items-center'>
            <h1 id="skills" className="m-auto font-bold text-6xl mb-5 select-none">Skills</h1>
            {/* <div className='flex flex-row mb-10 mt-2 hover:cursor-pointer select-none' onClick={() => setCanShowSkillRatings(!canShowSkillRatings)}>
                <p className='text-center font-bold'>View skill ratings</p>
                <img id='start' className='drop-shadow-glow h-4 mt-1 ml-2' src={canShowSkillRatings ? dropUp : dropDown} alt="drop-down"/>
            </div> */}
            <SkillRatings/>
            {/* {
                canShowSkillRatings
                    ? <SkillRatings/>
                    : null
            } */}
            {/* <SkillsCarousel/> */}
        </div>
    );
}