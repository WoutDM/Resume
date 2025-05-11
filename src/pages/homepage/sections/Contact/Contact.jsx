import linkedInIcon from "../../../../images/linkedin-icon.png";
import mailIcon from "../../../../images/mail-icon.png";
import phoneIcon from "../../../../images/phone-icon.png";

export default function Contact() {

  return (
      <div id="contact" className="flex flex-col items-center mt-40 py-10 bg-[#00ADB5]">
          {/*<h1 className="m-auto font-bold text-3xl select-none mb-5">GET IN TOUCH<span*/}
          {/*    className="text-[#D6F919]">.</span></h1>*/}
          <div className="flex flex-col items-center mb-6">
              {/*<h1 className="m-auto font-bold text-3xl select-none mb-5">Oh hi! You made it to the end!</h1>*/}
              <h1 className="m-auto font-bold text-3xl select-none mb-5">You made it to the end, let’s chat! 😉
                  {/*<span className="text-[#D6F919]">.</span>*/}
              </h1>
          </div>
          <div className="flex items-center space-x-6">
              <a href="https://www.linkedin.com/in/wout-d-a86615224/" target="_blank" rel="noreferrer"
                 className="flex items-center">
                  <img className='drop-shadow-glow h-7  mr-2 mt-0.5' src={linkedInIcon} alt="email"
                       draggable="false"/>
                  <p className="font-bold">Wout De Maeseneer</p>
              </a>
              <div className="font-bold">-</div>
              <div className="flex items-center">
                  <img className='drop-shadow-glow h-6 mr-2 mt-1.5' src={mailIcon} alt="email"
                       draggable="false"/>
                  <p className="font-bold">wout.de.maeseneer@gmail.com</p>
              </div>
              <div className="font-bold">-</div>
              <div className="flex items-center">
                  <img className='drop-shadow-glow h-6  mr-2 mt-1.5' src={phoneIcon} alt="email"
                       draggable="false"/>
                  <p className="font-bold">(+32) 472/23.35.08</p>
              </div>
          </div>
          <div className="flex flex-col items-center mt-28">
              <p>Made with ❤ by Wout </p>
              {/*<p className="font-bold mt-3">Wout</p>*/}
          </div>
      </div>
  );
}