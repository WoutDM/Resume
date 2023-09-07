import { Link } from 'react-router-dom';
import W_logo_wit from '../../images/W_logo_wit.png';

export default function Navbar() {

  return (
    <nav class='bg-black text-white w-full flex flex-row'>
      <div id='navbar_logo'>
        <Link to='/'>
          <p className='link_text'><img src={W_logo_wit} alt="W_logo" /></p>
        </Link>
      </div>
      <div id='navbar_link_container' class='flex flex-row'>
        <Link to='/projects'>
          <p className='link_text'>projects</p>
        </Link>
        <Link to='/about me'>
          <p className='link_text'>about me</p>
        </Link>
        <Link to='/timeline'>
          <p className='link_text'>timeline</p>
        </Link>
        <Link to='/contact'>
          <p className='link_text'>contact</p>
        </Link>
      </div>
    </nav>
  );
}