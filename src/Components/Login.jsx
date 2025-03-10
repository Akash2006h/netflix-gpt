import React from 'react';
import Header from "./Header.jsx";
import { useState } from "react";
const Login = () =>{
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignForm = () =>{
    setIsSignInForm(!isSignInForm)
} 
  return (
  <div className = "relative h-screen w-screen">
     <Header /> 
      <div className = "absolute inset-0">
        <img src = "https://assets.nflxext.com/ffe/siteui/vlv3/42a0bce6-fc59-4c1c-b335-7196a59ae9ab/web/IN-en-20250303-TRIFECTA-perspective_d5f81427-d6cf-412d-8e86-2315671b9be1_large.jpg" alt = "page" className = "h-full w-full object-cover" />
      </div>
   
       <form className = "w-3/12 absolute p-12 bg-black/80 my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-50">
        <h1 className = "font-bold text-3xl py-4">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        {!isSignInForm && (<input type = "text" placeholder= "Full name" className = "p-2 my-4 w-full bg-gray-700 rounded-lg" />)}

        <input type = "text" placeholder= "Email Address" className = "p-2 my-4 w-full bg-gray-700 rounded-lg" />

        <input type = "password" placeholder= "Password" className = "p-2 my-4 w-full bg-gray-700 rounded-lg" />
        <button className = "p-4 my-6 bg-red-700 w-full rounded-lg hover:bg-red-600 transition-200 cursor-pointer">{isSignInForm ? "Sign In" : "Sign Up"}</button>
        <h3 className = "text-xl px-55 text-gray-300">OR</h3>
        <button className = "p-4 my-6 bg-gray-700 w-full rounded-lg hover:bg-gray-600 transition-200 cursor-pointer">Use a sign in code</button>

        <p className = "py-4 my-6 cursor-pointer" onClick = {toggleSignForm}>{isSignInForm ? "New to Netflix ? Sign Up now" : "Already registered? Sign Up Now"}</p>
      </form>
  </div>
  )
}
export default Login;
