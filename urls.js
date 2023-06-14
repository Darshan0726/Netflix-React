const API_KEY='c4037a9c1af7fa915a583375938361ca'

const urls = {
    netflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    trendingNow: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    topRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    actionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    comedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    horrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    romanticMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    documentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
  };
  export default urls