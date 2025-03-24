import lang from "../utils/languageConstant.js";
import { useSelector } from "react-redux";
const gptSearchBar = () =>{
  const langKey = useSelector((store) => store.config.lang)

return (
<div className = "pt-[10%] flex justify-center">
      <form className = "w-1/2 bg-black grid grid-cols-12 ">
        <input type = "text" className = "p-4 m-4 bg-white rounded-lg col-span-9" placeholder ={lang[langKey].gptSearchPlaceHolder}/>
        <button className = "py-2 px-4 bg-red-700 text-white rounded-lg col-span-3">{lang[langKey].search}</button>
      </form>
</div>

)
}
export default gptSearchBar;
