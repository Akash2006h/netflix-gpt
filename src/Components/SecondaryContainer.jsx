import MovieList from "../Components/MovieList.jsx"
import { useSelector } from "react-redux"
const SecondaryContainer = () =>{
const movies = useSelector((store) => store.movies)

  return(
    <div>
      <MovieList title={"now Playing"} movies = {movies.nowPlayingMovies} />
    </div>
  )

};
export default SecondaryContainer;
