import GptSearchBar from "./GptSearchBar.jsx";
import GptMoviesSuggestion from "./GptMoviesSuggestion.jsx";
import {BG_URL} from "../utils/constant.js"
const GptSearch = () =>{
  return(
  <div>
        <div className = "fixed -z-10 ">
        <img src ={BG_URL}  alt = "page" className = "h-screen object-cover" />
      </div>
    <div className ="">
    <GptSearchBar />
    <GptMoviesSuggestion />
    </div>
  </div>
  )
}
export default GptSearch;
