import React from 'react'
import MovieList from './MovieList'
import Heading from './Heading';
import { Helmet } from 'react-helmet-async';


const Favorites = ({OnDelete, cont, fav, display, nam, OnSearch, searchMovie, setSearchMovie}) => {
  return (
    <div>
        <Helmet>
          <title>Favorites</title>
          <meta name='description' contnent="Watch-list movies" />
          <link rel="canonical" href="/favorites" />
        </Helmet>

        <div className="heading"><Heading cont={cont} nam={nam} OnSearch={OnSearch} searchMovie={searchMovie} setSearchMovie={setSearchMovie}/></div>
        <div className={`container-2 container-2-style}`}>
            <div className='space-div'></div>
            <h2>Watch List</h2>
            <div className="fav-style row movie">
              <h2 className={display}> There are no movies in Watch List </h2>
              <MovieList title='Favourites' OnDelete={OnDelete} movies={fav}/>
            </div>
        </div>
        
    </div>
  )
}

export default Favorites