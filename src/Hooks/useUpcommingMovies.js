import { useEffect} from "react";
import { API_OPTIONS } from "../utils/constant.js";
import {useDispatch, useSelector} from "react-redux";
import {addUpCommingMovies} from "../utils/moviesSlice.js";
  
const useUpCommingMovies = () => { 
  const upCommingMovies = useSelector((store) => store.movies.addUpCommingMovies) 
   const dispatch = useDispatch()
   const getUpCommingMovies = async () =>{
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?page=1", 
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addUpCommingMovies(json.results)); 
 }

  useEffect(() => {

   !upCommingMovies && getUpCommingMovies();
  }, [])

}

export default useUpCommingMovies;
