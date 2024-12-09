import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from './assets/components/Form'
import MovieDisplayer from './assets/components/MovieDisplayer'
import axios from 'axios'
function App() {
  const API_KEY ="8de80556"
  const[movie , setMovie] = useState(null)

  const getMovie = async(searchItem) => {
     await axios.get(
      ` http://www.omdbapi.com/?t=${searchItem}&apikey=${API_KEY}`
            ).then(
              res => {
                setMovie(res.data)
              }
            ).catch(e =>{
              console.log(e)
            })
  }
  
  useEffect(() => {
    getMovie("clueless") // changes the title to "clueless" instead of "Clueless" with capital letter C 
  }, [])
   
  return (
    <div className="App">
      <Form moviesSearch={getMovie} />
      <MovieDisplayer movie={movie} />
    </div>
  )
}

export default App
