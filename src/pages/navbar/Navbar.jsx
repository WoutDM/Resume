import { HashLink } from 'react-router-hash-link';
import W_logo_wit from '../../images/W_logo_wit.png';
import linkedInIcon from "../../images/linkedin-icon.png";

export default function Navbar() {

  return (
    <nav className='text-white w-[100%] flex justify-between items-center px-5 select-none'>
        <div className="flex items-center select-none">
            <div className='h-auto min-w-[50px] max-w-[80px]' id='navbar_logo'>
                <img className='my-5 drop-shadow-glow' src={W_logo_wit} alt="W_logo" draggable="false"/>
                {/* <Link to='/'>
          <img class='w-24' src={W_logo_wit} alt="W_logo" />
        </Link> */}
            </div>
            <div id='navbar_link_container' className='flex flex-row ml-5 items-center text-xs sm:text-base'>
                <HashLink className='px-2 sm:px-5 font-semibold' smooth to='/#skills'> skills </HashLink>
                <HashLink className='px-2 sm:px-5 font-semibold' smooth to='/#timeline'> timeline </HashLink>
                <HashLink className='px-2 sm:px-5 font-semibold' smooth to='/#projects'> projects </HashLink>
                <HashLink className='px-2 sm:px-5 font-semibold' smooth to='/#about'> about </HashLink>
                <HashLink className='px-2 sm:px-5 font-semibold' smooth to='/#contact'> contact </HashLink>
            </div>
        </div>
        <div className="flex items-center space-x-3 h-10 text-sm border rounded-lg" style={{borderColor: '#00ADB5'}}>
            <a href="https://www.linkedin.com/in/wout-d-a86615224/" target="_blank" rel="noreferrer"
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