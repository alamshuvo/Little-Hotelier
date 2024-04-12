import { useContext } from "react";
import { AuthContext } from "../components/authProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoutes = ({children}) => {
    const {user,loading}=useContext(AuthContext);
    const location =useLocation()
    if (loading) {
        return <div className="justify-center items-center flex"><span className="loading loading-infinity loading-lg"></span></div>
    }
    if (!user) {
        return <Navigate to={"/login"} state={location?.pathname || "/"}></Navigate>
    }
    return (
        <div>
           {children}
        </div>
    );
};

export default PrivateRoutes;