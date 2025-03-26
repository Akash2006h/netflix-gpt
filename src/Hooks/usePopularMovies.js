import { useEffect} from "react";
import { API_OPTIONS } from "../utils/constant.js";
import {useDispatch, useSelector} from "react-redux";
import {addPopularMovies} from "../utils/moviesSlice.js";
  
const usePopularMovies = () => { 
   const popularMovies = useSelector((store) =>  store.movies.addPopularMovies)
   const dispatch = useDispatch()
   const getPopularMovies = async () =>{
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addPopularMovies(json.results)); 
 }

  useEffect(() => {

   !popularMovies && getPopularMovies();
  }, [])

}
export default usePopularMovies;

