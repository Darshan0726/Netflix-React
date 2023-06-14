import React, { useEffect, useState } from "react";
import instance from "./BaseURL";

function Header()
{
  const [name,setName]=useState('')
  const [overview,setoverview]=useState('')
  const baseImage="https://image.tmdb.org/t/p/original/"
  const [movie,setmovie] = useState([])
   let random  
  useEffect(()=>{
    instance.get("https://api.themoviedb.org/3/discover/tv?api_key=c4037a9c1af7fa915a583375938361ca&with_networks=213")
    .then((response)=>
    {
 
    random= Math.floor(Math.random()*response.data.results.length)

    setmovie(response.data.results[random].backdrop_path)
    setName(response.data.results[random].name)
    setoverview(response.data.results[random].overview)
    })
  },[])
  return(
    <div className="header" style={{backgroundImage:"url("+baseImage+movie+")"}}>
      <h1>{name}</h1>
      <div className="box">
      <a href=''>Play</a>
      <a href=''>My List</a>
      <p>{overview?.substring(0, 100)}</p>
      </div>
    </div>
  )
}
export  default Header