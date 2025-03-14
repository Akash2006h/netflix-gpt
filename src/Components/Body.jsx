import { createBrowserRouter } from "react-router-dom"
import Login from '../Components/Login.jsx'
import Browse from '../Components/Browse.jsx'
import { RouterProvider } from "react-router-dom"
import { onAuthStateChanged } from "firebase/auth";
import {auth } from "../utils/firebase.js"
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {addUser, removeUser} from "../utils/userSlice.js";
const Body = () =>{
  const dispatch = useDispatch();
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

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
  if (user) {
    const {uid, email, displayName, photoURL} = user;
    dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL}));
    // ...
  } else {
    dispatch(removeUser());
    
    // User is signed out
    // ...
  }
});

  }, [])
  




  return(
  <div>
      <RouterProvider router={appRouter} />
  
  </div>

  )
}
export default Body;
