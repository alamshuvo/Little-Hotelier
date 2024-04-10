import { createContext, useEffect, useState } from "react";
import {  createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../../Firebase/firebase.config";
export const AuthContext=createContext(null);
import { GoogleAuthProvider } from "firebase/auth";



const AuthProvider = ({children}) => {
    const provider = new GoogleAuthProvider();
    const [user,setUser]=useState(null);
    // create user 
    const registerUser=(email,password)=>{
      return createUserWithEmailAndPassword(auth, email, password);
    }


    // signIn user 

     const loginUser=(email,password)=>{
       return signInWithEmailAndPassword(auth, email, password)
    }

//  google login 
 const googleRegister=()=>{
    return  signInWithPopup(auth,provider)
 }
 

//  signout
const signOutproile=()=>{
    return signOut(auth)
   
}


// user  update profile 



// state change 
   useEffect(()=>{
 const unSubcribe=   onAuthStateChanged(auth,curentUser=>{
        setUser(curentUser);
    })
    return ()=>
    {
        unSubcribe();
    }
   },[])


    const allInfo={
        registerUser,
        loginUser,
        user,
        googleRegister,
        signOutproile
    }
    return (
        <div>
            <AuthContext.Provider value={allInfo}>
            {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;