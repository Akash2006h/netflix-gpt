import MovieList from "../Components/MovieList.jsx"
import { useSelector } from "react-redux"
const SecondaryContainer = () =>{
const movies = useSelector((store) => store.movies)

  return(
    <div className ="bg-black">
      <div className = "-mt-52 pl-12 relative z-20">
      <MovieList title={"now Playing"} movies = {movies.nowPlayingMovies} />
      <MovieList title={"Trending"} movies = {movies.addTrandingMovies} />
      <MovieList title={"Popular"} movies = {movies.addPopularMovies} />
      <MovieList title={"Upcoming Movies"} movies = {movies.upCommingMovies} />
      <MovieList title={"Horror movies"} movies = {movies.nowPlayingMovies} />
      <MovieList title={"Anime"} movies = {movies.nowPlayingMovies} />
      </div>

    </div>
  )

};
export default SecondaryContainer;
