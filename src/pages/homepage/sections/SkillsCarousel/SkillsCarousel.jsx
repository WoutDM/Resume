import './SkillsCarousel.css'

export default function SkillsCarousel() {

    return (
            <div className="logos overflow-hidden w-11/12 h-40 py-15 whitespace-nowrap relative">
                <div className="logos-slide inline-flex w-max animate-[slide_20s_linear_infinite]">
                    {/*LOGOS HERE*/}
                </div>
                <div className="logos-slide inline-flex w-max animate-[slide_20s_linear_infinite]">
                    {/*DUPLICATE LOGOS HERE*/}
                </div>
            </div>
    );
}