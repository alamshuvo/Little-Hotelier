import { createContext, useEffect, useState } from "react";
import {  createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut,updateProfile } from "firebase/auth";
import auth from "../../Firebase/firebase.config";
export const AuthContext=createContext(null);
import { GoogleAuthProvider } from "firebase/auth";



const AuthProvider = ({children}) => {
    const provider = new GoogleAuthProvider();
    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true);
    const [error,setError]=useState(true);
    console.log(loading,error);
    // create user 
    const registerUser=(email,password)=>{
        setLoading(true);
        setError(true)
      return createUserWithEmailAndPassword(auth, email, password);
    }


    // user  update profile 
const updateProfileUser=(name,img)=>{
   return  updateProfile(auth.currentUser, {
        displayName: name, 
        photoURL: img,
      }).then(() => {
        // Profile updated!
        // ...
      }).catch((error) => {
        // An error occurred
        // ...
      });
}
    // signIn user 

     const loginUser=(email,password)=>{
        setLoading(true);
        setError(true)
       return signInWithEmailAndPassword(auth, email, password)
    }

//  google login 
 const googleRegister=()=>{
    setError(true)
    setLoading(true)

    return  signInWithPopup(auth,provider)
 }
 

//  signout
const signOutproile=()=>{
    setUser(null)
    setError(true)

     signOut(auth)
   
}





// state change 
   useEffect(()=>{
 const unSubcribe=   onAuthStateChanged(auth,curentUser=>{
        setUser(curentUser);
        setLoading(false);
        setError(false)
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
        signOutproile,
        loading,
        updateProfileUser,
        error,
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