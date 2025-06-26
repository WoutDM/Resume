import { HashLink } from 'react-router-hash-link';
import W_logo_wit from '../../images/W_logo_wit.png';
import linkedInIcon from "../../images/linkedin-icon.png";

export default function Navbar() {

  return (
    <nav className='text-white w-[100%] flex justify-between items-center px-5 max-[460px]:pl-3 select-none'>
        <div className="flex items-center select-none">
            <div className='h-auto w-[70px] sm:w-[80px] max-[460px]:w-[45px]' id='navbar_logo'>
                <img className='my-5 drop-shadow-glow' src={W_logo_wit} alt="W_logo" draggable="false"/>
                {/* <Link to='/'>
          <img class='w-24' src={W_logo_wit} alt="W_logo" />
        </Link> */}
            </div>
            <div id='navbar_link_container' className='flex flex-row ml-5 max-[460px]:ml-2 items-center text-[16px] sm:text-base max-[460px]:text-[11px]'>
                <HashLink className='px-2 max-[460px]:px-1.5 sm:px-5 font-semibold' smooth to='/#skills'> skills </HashLink>
                <HashLink className='px-2 max-[460px]:px-1.5 sm:px-5 font-semibold' smooth to='/#timeline'> timeline </HashLink>
                <HashLink className='px-2 max-[460px]:px-1.5 sm:px-5 font-semibold' smooth to='/#projects'> projects </HashLink>
                <HashLink className='px-2 max-[460px]:px-1.5 sm:px-5 font-semibold' smooth to='/#about'> about </HashLink>
                <HashLink className='px-2 max-[460px]:px-1.5 sm:px-5 font-semibold' smooth to='/#contact'> contact </HashLink>
            </div>
        </div>
        <div className="flex items-center space-x-3 h-10 text-sm rounded-lg contactField hidden lg:flex" style={{border: '1px solid #24CBFF'}}>
            <a href="https://www.linkedin.com/in/wout-de-maeseneer" target="_blank" rel="noreferrer"
               className="flex items-center">
                <img className='h-6 m-2 mr-0' src={linkedInIcon} alt="email"
                     draggable="false"/>
            </a>
            <p>●</p>
            <p className="select-text">wout.de.maeseneer@gmail.com</p>
            <p>●</p>
            <p className="select-text pr-3">(+32) 472/23.35.08</p>
        </div>
    </nav>
  );
}