import linkedInIcon from "../../../../images/linkedin-icon.png";
import mailIcon from "../../../../images/mail-icon.png";
import phoneIcon from "../../../../images/phone-icon.png";

export default function Contact() {

  return (
      <div id="contact" className="flex flex-col items-center mt-40 py-10">
          {/*<h1 className="m-auto font-bold text-3xl select-none mb-5">GET IN TOUCH<span*/}
          {/*    className="text-[#D6F919]">.</span></h1>*/}
          <div className="flex flex-col items-center mb-6">
              {/*<h1 className="m-auto font-bold text-3xl select-none mb-5">Oh hi! You made it to the end!</h1>*/}
              <h1 className="m-auto font-bold text-4xl select-none mb-5">You made it to the end, let’s chat! 😉
                  {/*<span className="text-[#D6F919]">.</span>*/}
              </h1>
          </div>
          <div className="flex items-center space-x-6 border-2 contactField border-[#24CBFF] rounded-lg p-2 px-3">
              <a href="https://www.linkedin.com/in/wout-d-a86615224/" target="_blank" rel="noreferrer"
                 className="flex items-center">
                  <img className='drop-shadow-glow h-7 mr-2' src={linkedInIcon} alt="email"
                       draggable="false"/>
                  <p className="font-bold">Wout De Maeseneer</p>
              </a>
              <div className="font-bold">-</div>
              <div className="flex items-center">
                  <img className='drop-shadow-glow h-6 mr-2' src={mailIcon} alt="email"
                       draggable="false"/>
                  <p className="font-bold">wout.de.maeseneer@gmail.com</p>
              </div>
              <div className="font-bold">-</div>
              <div className="flex items-center">
                  <img className='drop-shadow-glow h-6 mr-2' src={phoneIcon} alt="email"
                       draggable="false"/>
                  <p className="font-bold">(+32) 472/23.35.08</p>
              </div>
          </div>
          <p className='mt-28 text-center'>Made with ❤ by Wout</p>
      </div>
  );
}