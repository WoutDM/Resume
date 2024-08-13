import SkillRatings from "./SkillRatings/SkillRatings";
import SkillsCarousel from "./SkillsCarousel/SkillsCarousel";
import {useState} from "react";
import dropDown from '../../../../images/drop-down-30.png'
import dropUp from '../../../../images/drop-up-30.png';
import arrowDown from '../../../../images/arrow-down-accent-color.png';

export default function Skills() {

    const [canShowSkillRatings, setCanShowSkillRatings] = useState(false);

    return (
        <div className='flex flex-col items-center'>
            <div className="flex items-center justify-center bg-gray-700 bg-gray-900 rounded-full h-10 w-10 mb-10 animate-bounce select-none">
                <img className='drop-shadow-glow h-6' src={arrowDown} alt="arrow-down"/>
            </div>
            <h1 className="m-auto font-bold text-3xl mb-6">Skills<span className="text-[#D6F919]">.</span></h1>
            <SkillsCarousel/>
            <div className='flex flex-row my-10 hover:cursor-pointer select-none' onClick={() => setCanShowSkillRatings(!canShowSkillRatings)}>
                <p className='text-center font-bold'>View skill ratings</p>
                <img id='start' className='drop-shadow-glow h-4 mt-1 ml-2' src={canShowSkillRatings ? dropUp : dropDown} alt="drop-down"/>
            </div>
            {
                canShowSkillRatings
                    ? <SkillRatings/>
                    : null
            }
        </div>
    );
}