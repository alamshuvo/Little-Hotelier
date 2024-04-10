import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import router from "./routes/Routes";
import AuthProvider from "./components/authProvider/AuthProvider";
import { ToastContainer } from "react-toastify";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
     <AuthProvider>
     <RouterProvider router={router} />
     <ToastContainer />
     </AuthProvider>
    </HelmetProvider>
  </React.StrictMode>
);
