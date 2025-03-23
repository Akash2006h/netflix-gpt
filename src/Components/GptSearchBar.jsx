import lang from "../utils/languageConstant.js"
const gptSearchBar = () =>{
return (
<div className = "pt-[10%] flex justify-center">
      <form className = "w-1/2 bg-black grid grid-cols-12 ">
        <input type = "text" className = "p-4 m-4 bg-white rounded-lg col-span-9" placeholder ={lang.hindi.gptSearchPlaceHolder}/>
        <button className = "py-2 px-4 bg-red-700 text-white rounded-lg col-span-3">{lang.hindi.search}</button>
      </form>
</div>

)
}
export default gptSearchBar;
