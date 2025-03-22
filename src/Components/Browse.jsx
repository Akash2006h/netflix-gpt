import Header from "./Header.jsx";
import useNowPlayingMovies from "../Hooks/useNowPlayingMovies.js";
import usePopularMovies from "../Hooks/usePopularMovies.js"
import MainContainer from "./Maincontainer.jsx";
import SecondaryContainer from "./SecondaryContainer.jsx";
import useTrandingMovies from "../Hooks/useTrandingMovie.js";
import useUpCommingMovies from "../Hooks/useUpcommingMovies.js";

const Browse = () =>{

  useNowPlayingMovies(); 
  usePopularMovies();
  useTrandingMovies();
  useUpCommingMovies();


   return (
    
  <div>
      <Header /> 
      <MainContainer />
      <SecondaryContainer />
    </div>
  )
}
export default Browse;

