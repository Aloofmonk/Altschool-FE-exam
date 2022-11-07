import React from 'react'
import MovieList from './MovieList';
import Favorites from './Favorites';
import Heading from './Heading';
import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'
import {FaInfo} from 'react-icons/fa'
import { Helmet } from 'react-helmet-async';
import AnchorLink from 'react-anchor-link-smooth-scroll';




const Home = ({display, OnDelete, cont, fav, OnTap, movies, nam, OnSearch, searchMovie, setSearchMovie, loading}) => {
  return (
    <div className='home'>
      <Helmet>
          <title>Home</title>
          <meta name='description' contnent="Home movies" />
          <link rel="canonical" href="/home" />
      </Helmet>

      <div className="heading"><Heading cont={cont} nam={nam} OnSearch={OnSearch} searchMovie={searchMovie} setSearchMovie={setSearchMovie}/> </div>

      <div className="home-header">
        <h2 className='movie-h2'>Movies</h2>
        <Link to="/Home/info" className='movie-h2'><FaInfo title='info' className='info-icon'/></Link>
        <Outlet />
      </div>
      <div className="row movie">
        <MovieList title='Movies' OnTap={OnTap} movies={movies} loading={loading}/>
      </div>
        <Favorites nam={nam} OnSearch={OnSearch} searchMovie={searchMovie} setSearchMovie={setSearchMovie} display={display} OnDelete={OnDelete} cont={cont} fav={fav}/>
    </div>
  )
}

export default Home