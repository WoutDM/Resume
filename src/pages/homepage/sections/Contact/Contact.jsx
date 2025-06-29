import linkedInIcon from "../../../../images/linkedin-icon.png";
import mailIcon from "../../../../images/mail-icon.png";
import phoneIcon from "../../../../images/phone-icon.png";

export default function Contact() {

  return (
      <div id="contact" className="flex flex-col items-center mt-40 max-[1235px]:mt-24 pb-10">
          <div className="flex flex-col items-center mb-6">
              <h1 className="m-auto font-bold text-4xl select-none mb-5 max-[820px]:mb-0 max-[820px]:text-2xl max-[450px]:text-[17px]">You made it to the end, let’s chat! 😉
              </h1>
          </div>
          <div className="flex max-[820px]:flex-col items-center space-x-6 max-[820px]:space-x-0 max-[820px]:space-y-3 border-2 contactField border-[#24CBFF] rounded-lg p-2 px-3">
              <a href="https://www.linkedin.com/in/wout-de-maeseneer" target="_blank" rel="noreferrer"
                 className="flex items-center">
                  <img className='drop-shadow-glow h-7 mr-2' src={linkedInIcon} alt="email"
                       draggable="false"/>
                  <p className="font-bold">Wout De Maeseneer</p>
              </a>
              <div className="font-bold max-[820px]:hidden">-</div>
              <div className="flex items-center">
                  <img className='drop-shadow-glow h-6 mr-2' src={mailIcon} alt="email"
                       draggable="false"/>
                  <p className="font-bold">wout.de.maeseneer@gmail.com</p>
              </div>
              <div className="font-bold max-[820px]:hidden">-</div>
              <div className="flex items-center">
                  <img className='drop-shadow-glow h-6 mr-2' src={phoneIcon} alt="email"
                       draggable="false"/>
                  <p className="font-bold">(+32) 472/23.35.08</p>
              </div>
          </div>
      </div>
  );
}