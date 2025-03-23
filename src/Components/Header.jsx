import {onAuthStateChanged, signOut} from "firebase/auth";
import {auth} from "../utils/firebase.js";
import {useNavigate} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import {useEffect} from "react";
import {addUser, removeUser} from "../utils/userSlice.js";
import {LOGO} from "../utils/constant.js";
import {toggleGptSearchView } from "../utils/gptSlice.js"
import {SUPPORTED_LANG} from "../utils/constant.js"
const Header = () =>{
  const dispatch = useDispatch();
  
  const user = useSelector(store => store.user);
  const navigate = useNavigate();
  const handleSignOut = () =>{
    signOut(auth).then(() => {
      
      //signOut-succesfull
    }).catch((error) =>{
        navigate("/error");
        //an error happen;
        
      });
  }
        useEffect(() => {
   const unsubscribe = onAuthStateChanged(auth, (user) => {
  if (user) {
    const {uid, email, displayName, photoURL} = user;
    dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL }));

    navigate("/browse");
    // ...
  } else {
    dispatch(removeUser());
    // User is signed out
    // ...
    navigate("/");
  }
});
    return () => unsubscribe();

  }, [])
  const handleGptSearchButton = () =>{
    dispatch(toggleGptSearchView());
    
    
  }


  return (
  <div className = "absolute w-full px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
   <img className = "w-44"
      src = {LOGO}
      alt = "logo" />
      {user &&
      <div className = "flex p-2">
      <select className = "p-2 m-2 bg-gray-900 text-white">
            {SUPPORTED_LANG.map(lang => <option key = {lang.identifier} value ={lang.identifier}>{lang.name}</option>)}
      </select>
      <button className = "py-2 px-4 mx-4 my-2 bg-purple-800 text-white rounded-lg"
      onClick = {handleGptSearchButton}
      >GPT Search</button>
      <img className = "w-12 h-12" alt = "usericon" src ={user?.photoURL} />

      <button onClick = {handleSignOut} className = "font-bold text-white pointer">(Sign Out)</button>
      </div>
    }
  </div>
  )
}
export default Header;   
   
