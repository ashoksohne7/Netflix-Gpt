import { useState } from 'react';
import Header from './Header';

const Login = () => {
  const[isSigninForm, setIsSigninForm] = useState(true);
  const togglesignin = () => {
    setIsSigninForm(!isSigninForm);
  }
  return (
    <div>
      <Header />
      <div className= "absolute inset-0 -z-10">
        <img className= "object-cover w-full h-full"
            src= "https://i.pinimg.com/1200x/3b/88/8a/3b888ae33caddd009ea0262a6dace304.jpg"   ></img>
      </div>
      <div className="absolute inset-0 bg-black opacity-65"></div>
      <form className= "absolute left-0 right-0 w-3/12 p-12 mx-auto text-white bg-black rounded-lg my-36 bg opacity-80">
        <h1 className="py-4 text-3xl font-bold">{isSigninForm ? "Sign In" : "Sign Up"}</h1>
        {!isSigninForm &&(
                  <input type="text" placeholder="Enter your Full name" className="w-full p-4 my-4 bg-gray-700 " />
        )}
        <input type="text" placeholder="Enter your email" className="w-full p-4 my-4 bg-gray-700 " />
        <input type="password" placeholder="Enter your password" className="w-full p-4 my-4 bg-gray-700 " />
        <button type="submit" className="w-full p-4 py-3 mt-4 bg-red-700 ">
          {isSigninForm ? "Sign In" : "Sign Up"}</button>
        <p className = "py4" onClick={togglesignin}>
          {isSigninForm ? "New to Netflix sign up now" : "Allready a user Sign In"}  
       </p>
      </form>
    </div>
  )
}

export default Login
  