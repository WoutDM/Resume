import About from "./sections/About/About";
import Intro from "./sections/Intro/Intro";
import Projects from "./sections/Projects/Projects";
import Skills from "./sections/Skills/Skills";
import Timeline from "./sections/Timeline/Timeline";
import Contact from "./sections/Contact/Contact";
import {useEffect} from "react";

export default function Index() {

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('appear');
                }
            });
        });

        const hiddenElements = document.querySelectorAll('.disappear');
        hiddenElements.forEach(el => observer.observe(el));

        return () => {
            hiddenElements.forEach(el => observer.unobserve(el));
        };
    }, []);

    return (
    <div id="index" className='text-white z-10 font'>
        <Intro/>
        <div className='disappear'>
            <Skills/>
        </div>
        <div className='disappear'>
            <Timeline/>
        </div>
        <div className='disappear'>
            <About/>
        </div>
        <div className='disappear'>
            <Projects/>
        </div>
        <div className='disappear'>
            <Contact/>
        </div>
        <p className='mt-28 pb-5 text-center'>Made with ❤ by Wout</p>
    </div>
    );
}