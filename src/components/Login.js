import { useState ,useRef,useEffect} from 'react';
import Header from './Header';
import { checkValidData } from '../utiles/validation';
import {  createUserWithEmailAndPassword ,signInWithEmailAndPassword ,updateProfile} from "firebase/auth";
import { auth } from '../utiles/firebase';
import {useNavigate} from 'react-router-dom'
import { useDispatch } from 'react-redux';
import {addUser,} from '../utiles/userSlice'
import { useSelector } from 'react-redux';




const Login = () => {

  
  const user = useSelector((state) => state.user);

  
  const[isSigninForm, setIsSigninForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (user) navigate('/browse');
  }, [user]);


  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  
  const handleButtonClick = () => {
    //validate the form data for that ve use utils
    const message= checkValidData(email.current.value , password.current.value);
    setErrorMessage(message);
    if(message) return;
    
    if(!isSigninForm){
         createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
         .then((userCredential) => {
         // Signed up 
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value ,
            photoURL: "https://media.licdn.com/dms/image/v2/D4E03AQEbCWQRdNPuEg/profile-displayphoto-scale_100_100/B4EZ_vg3xbIAAc-/0/1786429801239?e=1788393600&v=beta&t=Tc9vtbVfUDLPJmAtwiXwrNrI8m6-PtG9g8Rv-2j25AA"
        }).then(() => {
              const {uid, email,displayName} = auth.currentUser;
              dispatch(
                addUser({
                  uid:uid, 
                  email:email, 
                  displayName:displayName
                })
              );
              navigate("/browse");

          
         setIsSigninForm(true);
        })
        .catch((error) => {
         
        });
        
         
       })
     .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorMessage +"-"+ errorCode);
        
       });
    }

    else{
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
         // Signed in 
          const user = userCredential.user;
          console.log(user);
          navigate("/browse");
          
       })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorMessage +"-"+ errorCode);
       });
    }
      
  };

  
  const togglesignin = () => {
    setIsSigninForm(!isSigninForm);
    setErrorMessage(null); // error clear karo
  
  // inputs clear karo
      email.current.value = "";
      password.current.value = "";
    if(name.current) name.current.value = "";
  }
  
  return (
    <div>
      <Header />
      <div 
           className= "absolute inset-0 -z-10">
            
        <img 
           className= "object-cover w-full h-full"
           src= "https://i.pinimg.com/1200x/3b/88/8a/3b888ae33caddd009ea0262a6dace304.jpg"   >
        </img>
      </div>
      <div 
           className="absolute inset-0 bg-black opacity-65">
      </div>
      
      <form 
           key={isSigninForm ? "signin" : "signup"}
           onSubmit={(e) =>e.preventDefault()} 
           className= "absolute left-0 right-0 w-3/12 p-12 mx-auto text-white bg-black rounded-lg my-36 bg opacity-80">
        
        <h1 
           className="py-4 text-3xl font-bold">
           {isSigninForm ? "Sign In" : "Sign Up"}
        </h1>
        
        {!isSigninForm &&(
        <input 
            ref={name}
            type="text" 
            placeholder="Enter your Full name" 
            className="w-full p-4 my-4 bg-gray-700 " 
        />
        )}
        
        <input 
            ref={email}
            type="text" 
            placeholder="Enter your email" 
            className="w-full p-4 my-4 bg-gray-700 " 
        />
        
        <input 
            ref={password}
            type="password" 
            placeholder="Enter your password"
            className="w-full p-4 my-4 bg-gray-700 " 
        />

        <p 
            className="font-bold text-red-500">{errorMessage}
        </p>
        
        <button 
            type="submit" 
            className="w-full p-4 py-3 mt-4 bg-red-700 "
            onClick={handleButtonClick}>
          {isSigninForm ? "Sign In" : "Sign Up"}
        </button>
        
        <p 
           className = "py4" 
           onClick={togglesignin}>
          {isSigninForm ? "New to Netflix sign up now" : "Allready a user Sign In"}  
        </p>
      </form>
    </div>
  )
}

export default Login
  