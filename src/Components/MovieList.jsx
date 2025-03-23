import MovieCard from "./MovieCard.jsx";
const MovieList = ({title, movies}) =>{
    if (!movies || movies.length === 0) {
    return <div>No movies available</div>;
  }

  return(
  <div className = "px-6">   
      <h1 className = "text-3xl py-4 text-white">{title}</h1>

            <div className = "flex overflow-x-scroll no-scrollbar">

        <div className = "flex space-x-4">
          
          {movies.map(movie => <MovieCard key = {movie.id} posterPath = {movie.poster_path} />) }
        </div>
      </div>
      
  </div>
  )

}
export default MovieList;
