import Header from "./Header.jsx";
import useNowPlayingMovies from "../Hooks/useNowPlayingMovies.js";
import usePopularMovies from "../Hooks/usePopularMovies.js"
import MainContainer from "./Maincontainer.jsx";
import SecondaryContainer from "./SecondaryContainer.jsx"
const Browse = () =>{
  useNowPlayingMovies(); 
  usePopularMovies();

   return (
    
  <div>
      <Header /> 
      <MainContainer />
      <SecondaryContainer />
    </div>
  )
}
export default Browse;
