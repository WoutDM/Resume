import mrBeastLogo from '../../../../../images/SkillsCarousel/mrbeast.svg';
import forbesLogo from '../../../../../images/SkillsCarousel/forbes.svg';
import './SkillsCarousel.css'

export default function SkillsCarousel() {

    return (
            <div className="logos overflow-hidden w-11/12 h-40 py-15 whitespace-nowrap relative">
                <div className="logos-slide inline-flex w-max animate-[slide_20s_linear_infinite]">
                    <img className="h-12 mx-10" src={mrBeastLogo} alt="test"/>
                    <img className="h-12 mx-10" src={forbesLogo} alt="test"/>
                    <img className="h-12 mx-10" src={mrBeastLogo} alt="test"/>
                    <img className="h-12 mx-10" src={forbesLogo} alt="test"/>
                    <img className="h-12 mx-10" src={mrBeastLogo} alt="test"/>
                    <img className="h-12 mx-10" src={forbesLogo} alt="test"/>
                    <img className="h-12 mx-10" src={mrBeastLogo} alt="test"/>
                    <img className="h-12 mx-10" src={forbesLogo} alt="test"/>
                </div>

                <div className="logos-slide inline-flex w-max animate-[slide_20s_linear_infinite]">
                    <img className="h-12 mx-10" src={mrBeastLogo} alt="test"/>
                    <img className="h-12 mx-10" src={forbesLogo} alt="test"/>
                    <img className="h-12 mx-10" src={mrBeastLogo} alt="test"/>
                    <img className="h-12 mx-10" src={forbesLogo} alt="test"/>
                    <img className="h-12 mx-10" src={mrBeastLogo} alt="test"/>
                    <img className="h-12 mx-10" src={forbesLogo} alt="test"/>
                    <img className="h-12 mx-10" src={mrBeastLogo} alt="test"/>
                    <img className="h-12 mx-10" src={forbesLogo} alt="test"/>
                </div>
            </div>
    );
}