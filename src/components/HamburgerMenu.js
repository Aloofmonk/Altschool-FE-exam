import React, { useState } from 'react';
// import {FaSearch} from 'react-icons/fa'
import {FaEye} from 'react-icons/fa'
import {BsHouseFill} from 'react-icons/bs'
import {BiExit} from 'react-icons/bi'
// import Search from './Search'
import {Link} from 'react-router-dom'

function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className={`hamburger-menu ${isOpen ? 'open' : ''}`}>
      <div className="menu-icon" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <ul className="menu-links">
		{/* <Search onClick={() => OnSearch(nam)} nam={nam} searchMovie={searchMovie} setSearchMovie={setSearchMovie}/> */}
		<Link to="/Home"><BsHouseFill onClick={toggleMenu} title='Home' className={`house-icon`}/></Link>  
		<Link to="/Favorites"><FaEye onClick={toggleMenu} title='Watch-List' className='watch-icon'/></Link>
		<Link to="/">
			<BiExit title='Log-out' className='watch-icon'/>
		</Link>
      </ul>


    </div>
  );
}

export default HamburgerMenu;
