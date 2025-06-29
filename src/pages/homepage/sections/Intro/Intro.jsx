import {useEffect, useState} from "react";
import arrowDown from "../../../../images/arrow-down.png";
import portretPic from "../../../../images/portret-picture.jpg";

export default function Intro() {

    const [windowHeight, setWindowHeight] = useState(0);
    const [isFinePointer, setIsFinePointer] = useState(true);

    useEffect(() => {

        if (typeof window !== "undefined") {

            setIsFinePointer(window.matchMedia("(pointer: fine)").matches);

            setWindowHeight(document.documentElement.clientHeight);

            const handleResize = () => {
                setWindowHeight(document.documentElement.clientHeight);
            };

            window.addEventListener('resize', handleResize);

            return () => window.removeEventListener('resize', handleResize);
        }
    }, []);

  return (
      <div className='flex flex-col items-center'>
          <div id="intro" className='flex flex-row max-[1235px]:flex-col-reverse max-[1235px]:justify-end justify-center items-center mb-32 max-[1235px]:mb-16 max-[420px]:mb-32 max-[1235px]:mt-16 max-[420px]:mt-8 select-none h-[650px]' style={isFinePointer ? { height: `${windowHeight - 280}px` } : {}}>
              {/* <img src="" alt="" /> */}
              <div className='w-[220px] max-[1235px]:w-[240px] max-[585px]:w-[190px] aspect-square m-10 max-[420px]:mx-0 rounded-[16px] overflow-hidden shadow-xl shadow-[#101010] flex-shrink-0'>
                  <img className='h-full object-cover object-[60%_75%]' src={portretPic} alt="portretPicture" />
              </div>
              <div className='w-auto max-[1235px]:max-w-[580px] max-[420px]:w-[280px]'>
                  <h1 className='font-bold text-7xl xxl:text-[620%] max-[1235px]:text-[500%] max-[585px]:text-[300%] max-[420px]:text-[200%] max-[1235px]:text-center leading-none'>I am Wout</h1>
                  <h1 className='font-bold text-7xl xxl:text-[620%] max-[1235px]:text-[500%] max-[585px]:text-[300%] max-[420px]:text-[200%] max-[1235px]:text-center text-[#24CBFF] leading-none drop-shadow-glow'>A Full-stack Web Developer</h1>
                  <p className='pt-5 xxl:text-2xl max-[1235px]:text-sm max-[585px]:text-[75%] max-[1235px]:text-center'>My main areas of expertise include Angular, React, C#, Java and Python.</p>
              </div>
          </div>
          {isFinePointer && (
              <div className="flex items-center justify-center bg-gray-700 rounded-full h-10 w-10 mb-32 animate-bounce select-none">
                  <img className="drop-shadow-glow h-6" src={arrowDown} alt="arrow-down" />
              </div>
          )}
      </div>
  );
}