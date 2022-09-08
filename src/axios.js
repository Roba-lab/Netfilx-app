import axios from "axios";

const instance=axios.create({
  baseURL:"https://api.themoviedb.org/3"
});


// api.themoviedb.org/3" 1st
// instance.get("/movie/top_rated"); next


export default instance;