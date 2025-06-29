import inProgressIcon from '../../../../../images/in-progress.png';
import linkIcon from '../../../../../images/link-icon.png';
import {useState} from "react";

export default function Project({ name, logo, inProgress, link }) {

    const [hover, setHover] = useState(false);

    return (
        <a href={link} target="_blank" rel="noreferrer"
           className="relative flex justify-center flex-col items-center w-full max-w-[400px] max-[1000px]:max-w-[300px] max-[550px]:max-w-[200px] max-[380px]:min-w-[128px] max-[500px]:min-w-[160px] max-[1000px]:min-w-[200px] aspect-square bg-[#222831] rounded-md">
            {
                link
                &&
                (
                    <div className="absolute left-1 top-1 flex justify-center">
                            <img id='linkIcon' className='h-8 m-2' src={linkIcon} alt="website-link"
                                 draggable="false"/>
                    </div>
                )
            }
            {
                inProgress
                &&
                (
                    <div className="absolute right-1 top-1 flex justify-center" onMouseEnter={() => setHover(true)}
                         onMouseLeave={() => setHover(false)}>
                        <div className="relative">
                            <img id='progressIcon' className='h-6 m-2' src={inProgressIcon} alt="in-progress"
                                 draggable="false"/>
                            {hover && (
                                <span id='progressIconText'
                                    className="absolute left-[-50%] bottom-10 w-20 justify-center text-xs px-2 py-1 rounded shadow-lg">
                                        In progress
                                </span>
                            )}
                        </div>
                    </div>
                )
            }
            <div className="flex justify-center items-center w-2/4 h-2/4 overflow-hidden">
                <img id='projectLogo' className="scale-[3] brightness-90 object-contain" src={logo} alt="project-logo"
                     draggable="false"/>
            </div>
            <h1 id='projectName' className="font-semibold text-2xl">{name}</h1>
        </a>
    );
}