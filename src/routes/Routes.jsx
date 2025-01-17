import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";
import Contact from "../pages/Contact";
import ViewProperty from "../pages/ViewProperty";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRoutes from "./PrivateRoutes";
import UpdateProfile from "../pages/UpdateProfile";
import UserProfile from "../pages/UserProfile";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            // index:true,
            path:"/",
            element:<Home></Home>,
            loader:()=> fetch("/data.json")
        },
       
        {
            path:"/contact",
            element:<PrivateRoutes>
                      <Contact></Contact>
            </PrivateRoutes>    
        },
        {
            path:"test/:id",
            element:<PrivateRoutes>
              <ViewProperty></ViewProperty>
            </PrivateRoutes>
            ,
            loader:()=>fetch("/data.json")
        },
        {
            path:"/login",
            element:<Login></Login>,
        },
        {
            path:"/register",
            element:<Register></Register>
        },
        {
            path:"/update",
            element:<PrivateRoutes>
                <UpdateProfile></UpdateProfile>
            </PrivateRoutes>
        },
        {
            path:"/profile",
            element:<PrivateRoutes>
                 <UserProfile></UserProfile>
            </PrivateRoutes>
               
            
        }

     ]

    },
    // {
    //     path:"*",
    //     element:<ErrorPage></ErrorPage>
    // }
   
    
  ]);
  export default router;