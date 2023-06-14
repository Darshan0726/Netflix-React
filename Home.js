import React from 'react'
import './netflix.css'
import urls from  './urls'
import Row from './Row'
import Banner from './Banner'
import Header from './Header'



function Home() {
    return(
    <div className='netflix'>

    <Banner />
    <Header />


    <Row 
      endPoint={urls.netflixOriginals}
      heading = 'Netflix Originals'
      big = {true}
    />
    <Row 
      endPoint = {urls.trendingNow}
      heading = 'Trending'
    />
    <Row 
      endPoint = {urls.topRated}
      heading = 'Top Rated'
    />
    <Row 
      endPoint = {urls.actionMovies}
      heading = 'Action Movies'
    />
    <Row 
      endPoint = {urls.comedyMovies}
      heading = 'Comedy Movies'
    />
    <Row 
      endPoint = {urls.horrorMovies}
      heading = 'Horror Movies'
    />
    <Row 
      endPoint = {urls.romanticMovies}
      heading = 'Romantic Movies'
    />
    <Row 
      endPoint = {urls.documentaries}
      heading = 'Documentaries'
    />
    
  </div>
)
}

export default Home