import React, { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../components/authProvider/AuthProvider";
import { Link } from "react-router-dom";

const UserProfile = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <Helmet>
        <title>Little Hotelier | User Profile</title>
      </Helmet>
      <p className="md:text-3xl text-xl font-black:">User Profile</p>
      <h1 className="mb-10 md:text-3xl text-xl font-black"> Name: {user?.displayName || "user"}</h1>
      <div className="card w-96 glass ">
        <figure>
          <img
          className="w-full"
            src={user?.photoURL || <p>user</p>}
            alt="car!"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">User Details</h2>
          <div>
            <p>User Name:Name: {user?.displayName || "user"}</p>
          <p>User Email:{user?.email || "dummy@dummy.com"}</p>
          <p>User Phone Number : {user?.phoneNumber||"01*********"}</p>
          </div>
         
          
          <div className="card-actions ">
           <Link to={"/update"}> <button className="btn bg-violet-400 hover:bg-blue-300 hover:text-white">Update Profile</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
