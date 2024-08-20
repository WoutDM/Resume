import { HashLink } from 'react-router-hash-link';
import W_logo_wit from '../../images/W_logo_wit.png';

export default function Navbar() {

  return (
    <nav className='bg-black text-white w-[100%] flex flex-row px-5'>
      <div className='h-auto min-w-[50px] max-w-[80px]' id='navbar_logo'>
        <HashLink smooth to='/#intro' >
          <img id='start' className='my-5 drop-shadow-glow' src={W_logo_wit} alt="W_logo" />
        </HashLink>
        {/* <Link to='/'>
          <img class='w-24' src={W_logo_wit} alt="W_logo" />
        </Link> */}
      </div>
      <div id='navbar_link_container' className='flex flex-row ml-5 items-center text-xs sm:text-base'>
        <HashLink className='px-2 sm:px-5 font-semibold' smooth to='/#skills' > skills </HashLink>
        <HashLink className='px-2 sm:px-5 font-semibold' smooth to='/#projects' > projects </HashLink>
        <HashLink className='px-2 sm:px-5 font-semibold' smooth to='/#aboutme' > about </HashLink>
        <HashLink className='px-2 sm:px-5 font-semibold' smooth to='/#timeline' > timeline </HashLink>
        <HashLink className='px-2 sm:px-5 font-semibold' smooth to='/#contact' > contact </HashLink>
      </div>
    </nav>
  );
}