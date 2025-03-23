import Header from "./Header.jsx";
import useNowPlayingMovies from "../Hooks/useNowPlayingMovies.js";
import usePopularMovies from "../Hooks/usePopularMovies.js"
import MainContainer from "./Maincontainer.jsx";
import SecondaryContainer from "./SecondaryContainer.jsx";
import useTrandingMovies from "../Hooks/useTrandingMovie.js";
import useUpCommingMovies from "../Hooks/useUpcommingMovies.js";
import GptSearch from "./GptSearch.jsx";
import { useSelector } from "react-redux";
const Browse = () =>{
  const showGptSearch = useSelector(store => store.gpt.showGptSearch);

  useNowPlayingMovies(); 
  usePopularMovies();
  useTrandingMovies();
  useUpCommingMovies();


   return (
    
  <div>
      <Header /> 

      {showGptSearch ? ( <GptSearch /> ) : (
       <>
        <MainContainer />
        <SecondaryContainer />
       </>
       )}
  </div>
  )
}
export default Browse;

