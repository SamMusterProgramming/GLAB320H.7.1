import React from 'react'

const MovieDisplayer = ({movie}) => {
  return (
    <div>
        {
        movie ? (
            <>
           <h1>{movie.title}</h1>
           <h2>{movie.Genre}</h2>
           <img src={movie.Poster} alt='movie' />
           <h2>{movie.Year}</h2>
           </>
        ):(
           <h1> no moviw to display</h1>  
        )
        }
        
    </div>
  )
}

export default MovieDisplayer