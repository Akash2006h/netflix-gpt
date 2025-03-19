import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle.jsx";
import VideoBackground from "./VideoBackground.jsx";
const MainContainer = () =>{
  const movies = useSelector(store => store.movies?.nowPlayingMovies)
  if(!movies || movies.length === 0) return;
  const mainMovies = movies[0]
  const {original_title, overview, id} = mainMovies;
  return(
  <div>
      <VideoTitle title = {original_title} overview ={overview} />
      <VideoBackground movieId = {id}/>
      
   </div>

  
  )
};
export default MainContainer;
