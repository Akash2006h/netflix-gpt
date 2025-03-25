import {useSelector} from "react-redux";
import {addGptMoviesResults} from "../utils/gptSlice.js"
import Movielist from "./MovieList.jsx"
const GptMoviesSuggestion = () =>{
    const { movieNames, movieResults } = useSelector((store) => store.gpt);

  if (!movieNames || !movieResults) return null; // Early return if no data

  return(
    <div>
    
      <div className="p-4 m-4">

      {movieNames.map((movieName, index ) => (
            <Movielist key = {movieName} title = {movieName} movies = {movieResults[index]} />
      )) }

      </div>
    </div>
  )}
export default GptMoviesSuggestion;
