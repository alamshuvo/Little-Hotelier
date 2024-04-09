import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";
import About from "../pages/About";
import Contact from "../pages/Contact";
import ViewProperty from "../pages/ViewProperty";

const router = createBrowserRouter([
    {
      path: "/",
      errorElement:<ErrorPage></ErrorPage>,
      element: <Root></Root>,
      children:[
        {
            path:"/",
            element:<Home></Home>,
            loader:()=> fetch("/data.json")
        },
        {
            path:"/about",
            element:<About></About>
        },
        {
            path:"/contact",
            element:<Contact></Contact>
        },
        {
            path:"/:id",
            element:<ViewProperty></ViewProperty>,
            loader:()=>fetch("/data.json")
        }

     ]
    },
  ]);
  export default router;