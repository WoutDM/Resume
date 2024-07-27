import SkillRatings from "./SkillRatings";
import SkillsCarousel from "./SkillsCarousel";
import {useState} from "react";

export default function Skills() {

    const [canShowSkillRatings, setCanShowSkillRatings] = useState(false);

    return (
        <div>
            <SkillsCarousel/>
            <p onClick={() => setCanShowSkillRatings(!canShowSkillRatings)}>View skill ratings</p>
            {
                canShowSkillRatings
                    ? <SkillRatings/>
                    : null
            }
        </div>
    );
}