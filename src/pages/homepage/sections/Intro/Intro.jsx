import {useEffect, useState} from "react";
import arrowDown from "../../../../images/arrow-down.png";
import portretPic from "../../../../images/portret-picture.jpg";

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
      <div className='flex flex-col items-center'>
          <div id="intro" className='flex flex-row justify-center items-center mb-32 select-none h-[650px]' style={{ height: `${windowHeight-280}px` }}>
              {/* <img src="" alt="" /> */}
              <div className='w-1/5 aspect-square m-10 rounded-[16px] overflow-hidden shadow-xl shadow-[#101010]'>
                  <img className='h-full w-[2490%] object-cover object-[60%_75%]' src={portretPic} alt="portretPicture" />
              </div>
              <div>
                  <h1 className='font-bold text-7xl xxl:text-[620%] leading-none'>I am Wout</h1>
                  <h1 className='font-bold text-7xl xxl:text-[620%] text-[#24CBFF] leading-none drop-shadow-glow'>A Full-stack Web Developer</h1>
                  {/*#00ADB5*/}
                  {/*#24CBFF*/}
                  {/*groenig:*/}
                  {/*#00FB89*/}
                  <p className='pt-5 xxl:text-2xl'>My main areas of expertise include Angular, React, C#, Java and Python.</p>
              </div>
          </div>
          <div className="flex items-center justify-center bg-gray-700 rounded-full h-10 w-10 mb-32 animate-bounce select-none">
              <img className='drop-shadow-glow h-6' src={arrowDown} alt="arrow-down"/>
          </div>
      </div>

    
  );
}