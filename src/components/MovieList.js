import React from 'react'

const MovieList = ({movies, OnTap, OnDelete, title, loading}) => {

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className='img-movie'>
      {(movies).map((movie, index) =>(

          <div className="wrapper">
            <img style={{height:'300px'}} key={index} src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt="movie" />
            {movie.poster_path !== null ?<button onClick={ title !== 'Movies' ?() => OnDelete(movie) :() => OnTap(movie) } className={`btn ${ title !== 'Movies' ? 'delete' : 'button'}`}>{ title === 'Movies' ? 'Add to Watch List' : 'DELETE'}</button> : ''}
          </div>
                 
        ))}

    </div>
  )
}

export default MovieList