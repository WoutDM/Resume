import {useEffect, useState} from "react";

export default function Intro() {

    const [windowHeight, setWindowHeight] = useState(0);

    useEffect(() => {

        if (typeof window !== "undefined") {
            setWindowHeight(window.innerHeight);

            const handleResize = () => {
                setWindowHeight(window.innerHeight);
            };

            window.addEventListener('resize', handleResize);

            return () => window.removeEventListener('resize', handleResize);
        }
    }, []);

  return (
    <div id="intro" className='flex flex-row justify-center items-center mb-32 select-none h-[650px]' style={{ height: `${windowHeight-280}px` }}>
      {/* <img src="" alt="" /> */}
      <div className='p-[140px] m-10 bg-gray-400 rounded-full'>pic</div>
      <div>
        <h1 className='font-bold text-6xl leading-none'>I am Wout</h1>
        <h1 className='font-bold text-6xl text-[#00ADB5] leading-none drop-shadow-glow'>A Full-stack Web Developer</h1>
        <p className='pt-5'>My main areas of expertise include Javascript, HTML, CSS, REACT, C#, Java and Python.</p>
      </div>
    </div>
    
  );
}