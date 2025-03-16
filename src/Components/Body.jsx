import { createBrowserRouter } from "react-router-dom"
import Login from '../Components/Login.jsx'
import Browse from '../Components/Browse.jsx'
import { RouterProvider } from "react-router-dom"
const Body = () =>{
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element:<Login />,
    },
    {
      path:"/browse",
      element:<Browse />,
    }
  ])
  return(
  <div>
      <RouterProvider router={appRouter} />
  
  </div>

  )
}
export default Body;
