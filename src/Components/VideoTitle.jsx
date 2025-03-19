
const VideoTitle = ({ title, overview }) =>{
  return(
    <div className = "w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className = "text-6xl font-bold">{title}</h1>
      <p className = "py-6 text-lg w-1/4">{overview}</p>
      <div>
        <button className = "bg-white text-black p-4 px-12 text-xl rounded-lg cursor-pointer hover:bg-opacity-80">play</button>
        <button className = "mx-2 bg-gray-500 text-black p-4 px-12 text-xl bg-opacity rounded-lg cursor-pointer">More Info</button>

      </div>
    </div>
  )
}
export default VideoTitle;
