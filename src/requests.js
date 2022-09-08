const REACT_APP_APIkey = "557e9c73ebfbecaf59505df30cb5358c";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${REACT_APP_APIkey}&
   language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${REACT_APP_APIkey}&with_networks=213`,
  fetchTopRatedMovies: `/movie/top_rated?api_key=${REACT_APP_APIkey}& language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${REACT_APP_APIkey}&with_generes=28`,
  fetchComedyMovies: `/discover/movie?api_key=${REACT_APP_APIkey}&with_generes=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${REACT_APP_APIkey}&with_generes=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${REACT_APP_APIkey}&with_generes=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${REACT_APP_APIkey}&with_generes=99`,
};

export default requests;
