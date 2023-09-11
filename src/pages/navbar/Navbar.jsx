import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import W_logo_wit from '../../images/W_logo_wit.png';

export default function Navbar() {

  return (
    <nav class='bg-black text-white w-full flex flex-row px-5'>
      <div id='navbar_logo'>
        <HashLink class='px-5 font-semibold' smooth to='/#top' >
          <img id='start' class='w-24' src={W_logo_wit} alt="W_logo" />
        </HashLink>
        {/* <Link to='/'>
          <img class='w-24' src={W_logo_wit} alt="W_logo" />
        </Link> */}
      </div>
      <div id='navbar_link_container' class='flex flex-row justify-center w-full items-center'>    
        <HashLink class='px-5 font-semibold' smooth to='/#skills' > skills </HashLink>
        <HashLink class='px-5 font-semibold' smooth to='/#projects' > projects </HashLink>
        <HashLink class='px-5 font-semibold' smooth to='/#aboutme' > about me </HashLink>
        <HashLink class='px-5 font-semibold' smooth to='/#timeline' > timeline </HashLink>
        <HashLink class='px-5 font-semibold' smooth to='/#contact' > contact </HashLink>
        {/* <Link to='/projects'>
          <p class='px-5 font-semibold'>projects</p>
        </Link>
        <Link to=''>
          <p class='px-5 font-semibold'>about me</p>
        </Link>
        <Link to=''>
          <p class='px-5 font-semibold'>timeline</p>
        </Link>
        <Link to=''>
          <p class='px-5 font-semibold'>contact</p>
        </Link> */}
      </div>
    </nav>
  );
}