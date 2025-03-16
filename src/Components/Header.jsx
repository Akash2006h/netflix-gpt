import {onAuthStateChanged, signOut} from "firebase/auth";
import {auth} from "../utils/firebase.js";
import {useNavigate} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import {useEffect} from "react";
import {addUser, removeUser} from "../utils/userSlice.js";
import {LOGO} from "../utils/constant.js";
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
    dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL}));

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

  return (
  <div className = "absolute w-full px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
   <img className = "w-44"
      src = {LOGO}
      alt = "logo" />
      {user && <div className = "flex p-2">
      <img className = "w-12 h-12" alt = "usericon" src ={user?.photoURL} />

      <button onClick = {handleSignOut} className = "font-bold text-white pointer">(Sign Out)</button>
      </div>
    }
  </div>
  )
}
export default Header;   
   
