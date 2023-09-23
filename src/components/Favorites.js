import React from 'react'
import MovieList from './MovieList'
// import Heading from './Heading';


const Favorites = ({OnDelete, cont, fav, display, nam, OnSearch, searchMovie, setSearchMovie}) => {
  return (
    <div>
        {/* <div className="heading"><Heading cont={cont} nam={nam} OnSearch={OnSearch} searchMovie={searchMovie} setSearchMovie={setSearchMovie}/></div> */}
    <div className={`container-2 ${cont === 'container-watch-list' && 'container-2-style'}`}>
        <h2>Watch List</h2>
        <div className="row movie">
          <h2 className={display}> There are no movies in Watch List </h2>
          <MovieList title='Favourites' OnDelete={OnDelete} movies={fav}/>
        </div>
    </div>
        
    </div>
  )
}

export default Favorites