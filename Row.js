import React, {useEffect, useState } from 'react'
import instance from './BaseURL'

function Row(props) {
    const [movies,setMovies]=useState([])
    const baseImage="https://image.tmdb.org/t/p/original/"

    useEffect(()=>{
        instance.get(props.endPoint)
        .then((response)=>{
            // console.log(response.data.results)
            setMovies(response.data.results)
    },[])
           
        })
  return (
    <div className='row'>
    <h1>{props.heading}</h1>
    <div className={(props.big === true) ? 'movieRow big' : 'movieRow'}>
      {
        movies.map((movie, index) => {
          return (
            <img key={index} src={baseImage + movie.poster_path} title={movie.title || movie.name || movie.original_name} alt=' ' />
          )
        })
      }
    </div>
  </div>
  )
}

export default Row