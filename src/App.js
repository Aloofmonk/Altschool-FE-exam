import React, { useState, useEffect } from 'react';
import  './App.css';
import {
    Routes,
    Route
} from 'react-router-dom';
import Home from './components/Home';
import Favorites from './components/Favorites';
import NoPage from './components/NoPage';
import Signin from './components/Signin';
import Signup from './components/Signup';
import { AuthContextProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import {ErrorBoundary} from 'react-error-boundary'
import ErrorBound from './components/ErrorBound';
import Instruction from './components/Instruction';
import Info from './components/Info';


function App() {

  // UseState for handling in-state changes
  const [movies, setMovies] = useState([])
  const [searchMovie, setSearchMovie] = useState('')
  const [fav, setFav] = useState([])
  const [nam, setNam] = useState('inputv')
  const [cont, setCont] = useState('container')
  const [display, setDisplay] = useState('')
  const [loading, setLoading] = useState(false);
  const [explode, setExplode] = useState(false)



  // Handling API calls with async & await for proper running of the application // also using logic involving the searchMovie useState directly in the API url as the key value
  const getMovieRequest = async (searchMovie) => {
    setLoading(true)
    const url = `https://api.themoviedb.org/3/search/movie?query=${searchMovie ? searchMovie: 'spiderman'}&api_key=ed595105f1b1444717319771a70f98bf`
    // Awaiting the fetched url 
    const response = await fetch(url)
    // Awaiting the fetched response.json
    const responseJson = await response.json()
    setLoading(false);
    // Creating a conditional logic for Setting the useState setMovies to the responseJson
    if(responseJson.results){
      setMovies(responseJson.results)
    }

  }
  
  useEffect(() => {
    getMovieRequest(searchMovie)
    
  }, [searchMovie])

  // Function to add movie to fav list
  const OnTap = (movie) => {

    const newFav = [ ...fav,  movie]
    setFav(newFav)
    
    fav.filter((f) => f.id === movie.id && setFav([...fav]) & alert(`${movie.title} is already in Favourites`))
    fav.length > -1 && setDisplay('empty-message')
  }
  // Delete movie from fav list
  const OnDelete = (movie) => { 
    const newFav = Array.from(fav).filter((f) => f.id !== movie.id && f)
    setFav(newFav)
    fav.length < 2 && setDisplay('empty-message-display')
  }


  const OnSearch = (nam) => {
    setNam('input')
    console.log("yo")
    nam === 'input' && setNam('inputv')
  }
  
  return (
    

      <div className="container-fluid filmreel">
          
          <button className='error-button' onClick={() => setExplode(e => !e)}>{ explode === false ? 'CRASH APP' : 'RESET'}</button>
          <ErrorBoundary
            FallbackComponent={ErrorBound}
            onReset={() => setExplode(false)}
            resetKeys={[explode]}
          >
            {explode ? <Instruction /> : null}
          </ErrorBoundary>
          

          <div className='container'>
            <div>
              <AuthContextProvider>
            <Routes>
              <Route path='/' element={<Signin />} />
              <Route path='/signup' element={<Signup />} />
              
              <Route
                path='/home'
                element={
                  <ProtectedRoute>
                    <Home nam={nam} OnSearch={OnSearch} searchMovie={searchMovie} setSearchMovie={setSearchMovie} display={display} OnDelete={OnDelete} cont={cont} fav={fav} OnTap={OnTap} movies={movies} loading={loading} />
                  </ProtectedRoute>
                }
              >
                <Route path="info" element={<Info />} />
              </Route>
              <Route
                path='/favorites'
                element={
                  <ProtectedRoute>
                    <Favorites nam={nam} OnSearch={OnSearch} searchMovie={searchMovie} setSearchMovie={setSearchMovie} display={display} OnDelete={OnDelete} cont={cont} fav={fav}/>
                  </ProtectedRoute>
                }
              />
              <Route
                path='*'
                element={
                  <ProtectedRoute>
                    <NoPage/>
                  </ProtectedRoute>
                }
              />
            </Routes>
          </AuthContextProvider>
            </div>
          </div>

      </div>
        
  );

}

export default App