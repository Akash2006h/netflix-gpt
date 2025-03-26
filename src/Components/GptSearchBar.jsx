import lang from "../utils/languageConstant.js";
import openai from "../utils/openAi.js"
import { useSelector, useDispatch } from "react-redux";
import {useRef} from "react";
import { API_OPTIONS } from "../utils/constant.js"
import { addGptMoviesResults } from "../utils/gptSlice.js"

const gptSearchBar = () =>{
  const dispatch = useDispatch();

  const langKey = useSelector((store) => store.config.lang)
  const searchText = useRef(null);
  const SearchMovieTMDB = async (movie) =>{
    const data = await fetch("https://api.themoviedb.org/3/search/movie?query="+ movie +"&include_adult=false&language=en-US&page=1", API_OPTIONS);  
    const json = await data.json();
      return json.results;


 }

  const handleGptSearchClick = async() =>{

    console.log(searchText.current.value);
    const gptQuery = "Act as a Movie Recommendation System and suggest some Movies from the query" + searchText.current.value + "only give me names of 5 movies comma separated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gya"; 

     const gptResults = await openai.chat.completions.create({
  messages: [{ role: 'user', content: gptQuery }],
        model: "gpt-3.5-turbo",
}); 
    if(!gptResults.choices){
      <h1>ERROR</h1>
    }
    console.log(gptResults?.choices?.[0]?.message?.content)
    const gptMovies = gptResults?.choices?.[0]?.message?.content.split(",");
    
    const promiseArray = gptMovies.map((movie) => SearchMovieTMDB(movie));
    const tmdbResults = await Promise.all(promiseArray)
    console.log(tmdbResults)
    dispatch(addGptMoviesResults({movieNames: gptMovies, movieResults: tmdbResults}));

  }

return (
<div className = "pt-[35%] md:pt-[10%] flex justify-center">
      <form className = " w-full md:w-1/2 bg-black grid grid-cols-12 " onSubmit = {(e) => e.preventDefault()}>
        <input ref = {searchText} type = "text" className = "p-4 m-4 bg-white rounded-lg col-span-9" placeholder ={lang[langKey].gptSearchPlaceHolder}/>
        <button className =  "py-2 px-4 bg-red-700 text-white rounded-lg col-span-3" onClick = {handleGptSearchClick}>{lang[langKey].search}</button>
      </form>
</div>

)
}
export default gptSearchBar;

