import MovieCard from "./MovieCard.jsx";
const MovieList = ({title, movies}) =>{
  console.log(movies)
  return(
  <div>
      <div>
        <h1>{title}</h1>
        <div>
          <MovieCard />
        </div>
      </div>
      
  </div>
  )

}
export default MovieList;
