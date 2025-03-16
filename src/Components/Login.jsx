import React from 'react';
import Header from "./Header.jsx";
import { useState, useRef} from "react";
import { checkValidData } from "../utils/validate.js"
import {createUserWithEmailAndPassword, signInWithEmailAndPassword,updateProfile } from "firebase/auth";
import {auth} from "../utils/firebase.js";
import {useDispatch} from "react-redux";
import {addUser} from "../utils/userSlice.js";
import {USER_AVATER} from "../utils/constant.js";

//import {useNavigate} from "react-router-dom";

const Login = () =>{
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMassage, setErrorMassage] = useState(null);
 // const navigate = useNavigate();
  const dispatch = useDispatch();
   const name = useRef(null);

  const email = useRef(null);
  const password = useRef(null);
  const handleButtonClick = () => {
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMassage(message);
    if(message) return;
    if(!isSignInForm){
      //sign up logic
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    updateProfile(user, {
  displayName: name.current.value, photoURL:USER_AVATER,
}).then(() => {
  const {uid, email, displayName, photoURL} = auth.currentUser;
  dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL}));

  //navigate("/browse");

  // Profile updated!
  // ...
}).catch((error) => {
  setErrorMassage(error.message);
  // An error occurred
  // ...
});
       // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMassage(errorCode + "-" + errorMessage);
    // ..
  });
    }
    else{
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMassage(errorCode + "-" + errorMessage)
  });

      //sign in logic
    }
  }
  const toggleSignForm = () =>{
    setIsSignInForm(!isSignInForm)
} 
  return (
  <div className = "relative h-screen w-screen">
     <Header /> 
      <div className = "absolute inset-0">
        <img src = "https://assets.nflxext.com/ffe/siteui/vlv3/42a0bce6-fc59-4c1c-b335-7196a59ae9ab/web/IN-en-20250303-TRIFECTA-perspective_d5f81427-d6cf-412d-8e86-2315671b9be1_large.jpg" alt = "page" className = "h-full w-full object-cover" />
      </div>
   
       <form onSubmit = {(e) =>e.preventDefault()} className = "w-3/12 absolute p-12 bg-black/80 my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-50">
        <h1 className = "font-bold text-3xl py-4">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        {!isSignInForm && (<input type = "text" placeholder= "Full name" className = "p-2 my-4 w-full bg-gray-700 rounded-lg" />)}

        <input type = "text" placeholder= "Email Address" ref = {email} className = "p-2 my-4 w-full bg-gray-700 rounded-lg" />

        <input type = "password" placeholder= "Password" ref = {password} className = "p-2 my-4 w-full bg-gray-700 rounded-lg" />
        <p className = "text-red-700 text-lg font-bold">{errorMassage}</p>
        <button
          className = "p-4 my-6 bg-red-700 w-full rounded-lg hover:bg-red-600 transition-200 cursor-pointer" onClick ={handleButtonClick}>
        {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <h3 className = "text-xl px-55 text-gray-300">OR</h3>
        <button className = "p-4 my-6 bg-gray-700 w-full rounded-lg hover:bg-gray-600 transition-200 cursor-pointer">Use a sign in code</button>

        <p className = "py-4 my-6 cursor-pointer" onClick = {toggleSignForm}>{isSignInForm ? "New to Netflix ? Sign Up now" : "Already registered? Sign In Now"}</p>
      </form>
  </div>
  )
}
export default Login;

