import { useEffect} from "react";
import { API_OPTIONS } from "../utils/constant.js";
import {useDispatch, useSelector} from "react-redux";
import { addTrandingMovies } from "../utils/moviesSlice.js";
  
const useTrandingMovies = () => { 
   const dispatch = useDispatch()
   const trandingMovie = useSelector((store) => store.movies.addTrandingMovies)
   const getTrandingMovies = async () =>{
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?page=1", 
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addTrandingMovies(json.results)); 
 }

  useEffect(() => {

   !trandingMovie && getTrandingMovies();
  }, [])
  

}
export default useTrandingMovies;

