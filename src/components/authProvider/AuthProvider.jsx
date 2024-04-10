import { createContext, useState } from "react";
import {  createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import auth from "../../Firebase/firebase.config";
export const AuthContext=createContext(null);

const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);
    // create user 
    const registerUser=(email,password)=>{
      return createUserWithEmailAndPassword(auth, email, password);
    }


    // signIn user 

     const loginUser=(email,password)=>{
       return signInWithEmailAndPassword(auth, email, password)
    }




   


    const allInfo={
        registerUser,
        loginUser,
        user,
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