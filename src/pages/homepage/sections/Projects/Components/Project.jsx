import inProgressIcon from '../../../../../images/in-progress.png';
import linkIcon from '../../../../../images/link-icon.png';
import {useState} from "react";

export default function Project({ name, logo, inProgress, link }) {

    const [hover, setHover] = useState(false);

    return (
        <a href={link} target="_blank" rel="noreferrer"
           className="relative flex justify-center flex-col items-center flex-[0_0_32%] mx-auto aspect-square mb-3 bg-[#222831] rounded-md">
            {
                link
                &&
                (
                    <div className="absolute left-1 top-1 flex justify-center">
                            <img className='h-8 m-2' src={linkIcon} alt="website-link"
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
                            <img className='h-6 m-2' src={inProgressIcon} alt="in-progress"
                                 draggable="false"/>
                            {hover && (
                                <span
                                    className="absolute left-[-50%] bottom-10 w-20 flex justify-center text-xs px-2 py-1 rounded shadow-lg">
                                        In progress
                                </span>
                            )}
                        </div>
                    </div>
                )
            }
            <div className="flex justify-center items-center w-2/4 h-2/4 overflow-hidden">
                <img className="scale-[3] brightness-90 object-contain" src={logo} alt="project-logo"
                     draggable="false"/>
            </div>
            <h1 className="font-semibold text-2xl">{name}</h1>
        </a>
    );
}