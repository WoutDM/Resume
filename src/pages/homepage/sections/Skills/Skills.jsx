import SkillRatings from "./SkillRatings/SkillRatings";
// import SkillsCarousel from "./SkillsCarousel/SkillsCarousel";
// import {useState} from "react";
// import dropDown from '../../../../images/drop-down-30.png'
// import dropUp from '../../../../images/drop-up-30.png';
import arrowDown from '../../../../images/arrow-down.png';

export default function Skills() {

    // const [canShowSkillRatings, setCanShowSkillRatings] = useState(false);

    return (
        <div className='flex flex-col items-center'>
            <div className="flex items-center justify-center bg-gray-700 rounded-full h-10 w-10 mb-32 animate-bounce select-none">
                <img className='drop-shadow-glow h-6' src={arrowDown} alt="arrow-down"/>
            </div>
            <h1 id="skills" className="m-auto font-bold text-3xl mb-5 select-none">Skills<span className="text-[#00ADB5]">.</span></h1>
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