import { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { FaEye, FaEyeSlash, FaGithub } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../components/authProvider/AuthProvider";

import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();



const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {loginUser,googleRegister, error,gitHubRegister}=useContext(AuthContext);
  const navigate=useNavigate();
  const location=useLocation();
  const from =location?.state || "/"
  


  const handleLoginUser = (e) => {
    e.preventDefault();
    const email =e.target.email.value;
    const password =e.target.password.value;
    console.log(email,password);
    loginUser(email,password)
    .then((response)=>{
      if (!error) {
        toast.success("User Login sucessfully By Email And Password");
        
      }
        if (response.user) {
            navigate(from);
        }
        // console.log(response,loginUser);
    })
    .catch((error)=>{
      if (error) {
        toast.error(" Email And Password May Be Wrong")
      }
    })

  };
  const handleGoogleRegister = () => {
    googleRegister().then((res) => {
      if (!error) {
        toast.success("User Login sucessfully ")
        
      }
        if (res.user) {
         
            navigate(from);
        }
    });
  };

  const handleGithubRegister=()=>{
    gitHubRegister()
    .then((res) => {
      if (!error) {
        toast.success("User Login sucessfully ")
        
      }
        if (res.user) {
         
            navigate(from);
        }
    });
  }
 

  return (
    <div className="bg-blue-200 z-[100] rounded-lg">
      <Helmet>
        <title>Little Hotelier | Login</title>
      </Helmet>

      <div className="bg-green-200" data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
        <form
          onSubmit={handleLoginUser}
          className="flex flex-col justify-center items-center min-h-screen border z-[200]"
        >
          <div className=" md:w-2/4 p-2 md:p-5 rounded-lg">
            <div className="mb-10">
              <h1 className="text-center font-black md:text-4xl animate__animated animate__bounce">
                Login Now
              </h1>
            </div>
          
            <div>
              <input 
               
                className="border rounded-lg w-full p-3 mt-3  animate__animated animate__flipInX"
                type="email"
                name="email"
                required
                placeholder="Type Your Email"
              />
            </div>
            
            <div className="flex justify-end relative">
              <input
                className="border rounded-lg w-full p-3 mt-3 animate__animated animate__flipInX"
                type={showPassword ? "text" : "password"}
                name="password"
                required
                placeholder="Type Your password"
              />
              <span onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? (
                  <FaEyeSlash className=" text-xl absolute top-[50%] right-[10%]" />
                ) : (
                  <FaEye className=" text-xl absolute top-[50%] right-[10%]" />
                )}
              </span>
            </div>
            <p className=" mt-5">
              New here  ? Please{" "}
              <Link className="text-violet-300 font-bold" to={"/register"}>
                Register Now
              </Link>
            </p>
            <div>
              <button className="btn w-full mt-5 text-violet-500 font-black hover:bg-green-600 hover:text-white bg-blue-200">
                Submit
              </button>
            </div>
          </div>
        </form>
        <h1 className="text-center text-2xl font-bold animate__animated animate__flipInX">
          Register With Another Way{" "}
        </h1>
        <div className="flex justify-center items-center gap-5 ">
          <div>
            <button
              onClick={() => handleGoogleRegister()}
              className="btn bg-blue-200"
            >
              {" "}
              <FcGoogle className="text-3xl" />
            </button>
          </div>
          <div>
            <button className="btn bg-blue-200"
            onClick={()=>handleGithubRegister()}>
              {" "}
              <FaGithub className="text-3xl" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
