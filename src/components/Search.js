import React from 'react'


const Search = ({searchMovie, setSearchMovie, nam}) => {
  return (
    <div className='search'>
        <input className={nam} type="text" placeholder='Type a search...' value={searchMovie} 
        onChange={(event) => setSearchMovie(event.target.value)}/>
    </div>
  )
}

export default Search