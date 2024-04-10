import { useContext } from "react";
import { AuthContext } from "../components/authProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoutes = ({children}) => {
    const {user}=useContext(AuthContext);
    const location =useLocation()
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