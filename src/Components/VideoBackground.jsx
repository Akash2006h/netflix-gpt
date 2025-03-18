import { API_OPTIONS } from "../utils/constant.js"
import {useEffect} from "react";
const VideoBackground = ({movieId}) =>{
  const getMovieId = async() =>{
    const data = await fetch('https://api.themoviedb.org/3/movie/696506/videos?language=en-US',API_OPTIONS)
    const json = await data.json()
    console.log("json :",json)
    const filterData = json.results.filter((video) => video.type == "Trailer")
    const trailer = filterData[0]
    console.log(trailer)



    


    
  }
  useEffect(()=>{
      getMovieId();
    },[])
  return (
  <div>VideoBackground</div>
  )

};
export default VideoBackground;
