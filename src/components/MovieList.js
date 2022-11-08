import React from 'react'
import LazyLoad from 'react-lazy-load';

const MovieList = ({movies, OnTap, OnDelete, title, loading}) => {

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className='img-movie'>
      {(movies).map((movie, index) =>(

          <div className="wrapper">
            <LazyLoad threshold={0.95}>
              <img style={{height:'300px'}} key={index} src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt="movie" />
            </LazyLoad>
            {movie.poster_path !== null ?<button onClick={ title !== 'Movies' ?() => OnDelete(movie) :() => OnTap(movie) } className={`btn ${ title !== 'Movies' ? 'delete' : 'button'}`}>{ title === 'Movies' ? 'Add to Watch List' : 'DELETE'}</button> : ''}
          </div>
                 
        ))}

    </div>
  )
}

export default MovieList