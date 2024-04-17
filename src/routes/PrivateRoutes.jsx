import { useContext } from "react";
import { AuthContext } from "../components/authProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoutes = ({children}) => {
    const {user,loading}=useContext(AuthContext);
    const location =useLocation()
    console.log(user,location.state,children);
    if (loading) {
        return <div className="justify-center items-center flex"><span className="loading loading-infinity loading-lg"></span></div>
    }
    if (!user) {
        // console.log("ff");
     return   <Navigate to="/login" state={location?.pathname || "/"}></Navigate>
       
      
    }
    // console.log("dd");
    return   children; 
  
};

export default PrivateRoutes;