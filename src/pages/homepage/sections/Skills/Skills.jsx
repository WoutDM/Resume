import SkillRatings from "./SkillRatings/SkillRatings";
import SkillsCarousel from "./SkillsCarousel/SkillsCarousel";
import {useState} from "react";
import dropDown from '../../../../images/drop-down-30.png'
import dropUp from '../../../../images/drop-up-30.png';

export default function Skills() {

    const [canShowSkillRatings, setCanShowSkillRatings] = useState(false);

    return (
        <div className='flex flex-col items-center'>
            <SkillsCarousel/>
            <div className='flex flex-row my-3 hover:cursor-pointer'>
                <p onClick={() => setCanShowSkillRatings(!canShowSkillRatings)}
                   className='text-center font-bold'>View skill ratings</p>
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