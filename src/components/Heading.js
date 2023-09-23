import React from 'react'
import Search from './Search'
import {FaSearch} from 'react-icons/fa'
import {TbMovie} from 'react-icons/tb'
import {FaEye} from 'react-icons/fa'
import {BsHouseFill} from 'react-icons/bs'
import {BiExit} from 'react-icons/bi'
import {Link} from 'react-router-dom'
import { useLocation } from 'react-router-dom';
import HamburgerMenu from './HamburgerMenu';




const Heading = ({searchMovie, setSearchMovie, OnSearch, nam}) => {

  const location = useLocation();
  const locat = useLocation();

  if (location.pathname === '/'){
    return (
      <div className='heading-null'>

      </div>
    )
  }
  if (locat.pathname === '/signup'){
    return (
      <div className='heading-null'>

      </div>
    )
  }

  return (
    <div className="heading">

            <h1 className='fixed'>{<span>Film<span className='span-red'>Reel</span></span>}<TbMovie className={'movie-icon'}/></h1>
            <div className="icons">
              <HamburgerMenu/>
              <Search nam={nam} searchMovie={searchMovie} setSearchMovie={setSearchMovie}/>
              <div className="sub-icons">
                <FaSearch title='Search' onClick={() => OnSearch(nam)} className={`search-icon ${nam === 'input' && 'search-icon-style'}`}/>
                <Link to="/Home"><BsHouseFill title='Home' className={`house-icon`}/></Link>  
                <Link to="/Favorites"><FaEye title='Watch-List' className='watch-icon'/></Link>
                <Link to="/">
                    <BiExit title='Log-out' className='watch-icon'/>
                </Link>

              </div>
            </div>
    </div>
  )
}

export default Heading