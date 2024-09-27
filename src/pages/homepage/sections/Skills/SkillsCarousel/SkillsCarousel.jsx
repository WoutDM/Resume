import html from './SkillsCarouselLogos/HTML5.svg';
import css from './SkillsCarouselLogos/CSS3.svg';
import js from './SkillsCarouselLogos/JavaScript.svg';
import tailwind from './SkillsCarouselLogos/Tailwind CSS.svg';
import react from './SkillsCarouselLogos/React.svg';
import angular from './SkillsCarouselLogos/AngularJS.svg';
import typescript from './SkillsCarouselLogos/Tailwind CSS.svg';
import csharp from './SkillsCarouselLogos/CSharp.svg';
import java from './SkillsCarouselLogos/Java.svg';
import kotlin from './SkillsCarouselLogos/Kotlin.svg';
import python from './SkillsCarouselLogos/Python.svg';
import sqlDeveloper from './SkillsCarouselLogos/SQL Developer.svg';
import mySql from './SkillsCarouselLogos/MySQL.svg';
import postgres from './SkillsCarouselLogos/PostgresSQL.svg';

import './SkillsCarousel.css'

export default function SkillsCarousel() {

    return (
            <div className="logos overflow-hidden w-8/12 h-15 py-15 whitespace-nowrap relative pointer-events-none select-none">
                <div className="logos-slide inline-flex w-max animate-[slide_50s_linear_infinite]">
                    <img className="h-12 mx-10" src={html} alt="html_logo"/>
                    <img className="h-12 mx-10" src={css} alt="css_logo"/>
                    <img className="h-12 mx-10" src={tailwind} alt="tailwind_logo"/>
                    <img className="h-12 mx-10" src={react} alt="react_logo"/>
                    <img className="h-12 mx-10" src={angular} alt="angular_logo"/>
                    <img className="h-12 mx-10" src={js} alt="js_logo"/>
                    <img className="h-12 mx-10" src={typescript} alt="typescript_logo"/>
                    <img className="h-12 mx-10" src={csharp} alt="csharp_logo"/>
                    <img className="h-12 mx-10" src={java} alt="java_logo"/>
                    <img className="h-12 mx-10" src={kotlin} alt="kotlin_logo"/>
                    <img className="h-12 mx-10" src={python} alt="python_logo"/>
                    <img className="h-12 mx-10" src={sqlDeveloper} alt="sqlDeveloper_logo"/>
                    <img className="h-12 mx-10" src={mySql} alt="mySql_logo"/>
                    <img className="h-12 mx-10" src={postgres} alt="postgres_logo"/>
                </div>

                <div className="logos-slide inline-flex w-max animate-[slide_50s_linear_infinite]">
                    <img className="h-12 mx-10" src={html} alt="html_logo"/>
                    <img className="h-12 mx-10" src={css} alt="css_logo"/>
                    <img className="h-12 mx-10" src={tailwind} alt="tailwind_logo"/>
                    <img className="h-12 mx-10" src={react} alt="react_logo"/>
                    <img className="h-12 mx-10" src={angular} alt="angular_logo"/>
                    <img className="h-12 mx-10" src={js} alt="js_logo"/>
                    <img className="h-12 mx-10" src={typescript} alt="typescript_logo"/>
                    <img className="h-12 mx-10" src={csharp} alt="csharp_logo"/>
                    <img className="h-12 mx-10" src={java} alt="java_logo"/>
                    <img className="h-12 mx-10" src={kotlin} alt="kotlin_logo"/>
                    <img className="h-12 mx-10" src={python} alt="python_logo"/>
                    <img className="h-12 mx-10" src={sqlDeveloper} alt="sqlDeveloper_logo"/>
                    <img className="h-12 mx-10" src={mySql} alt="mySql_logo"/>
                    <img className="h-12 mx-10" src={postgres} alt="postgres_logo"/>
                </div>
            </div>
    );
}