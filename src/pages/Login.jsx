import { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { FaEye, FaEyeSlash, FaGithub } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../components/authProvider/AuthProvider";

import { FcGoogle } from "react-icons/fc";


const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {loginUser,googleRegister}=useContext(AuthContext);
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
        if (response.user) {
            navigate(from);
        }
    })
    .catch((error)=>{console.log(error);})

  };
  const handleGoogleRegister = () => {
    googleRegister().then((res) => {
        if (res.user) {
            navigate(from);
        }
    });
  };
 

  return (
    <div className="bg-blue-200 z-[100] rounded-lg">
      <Helmet>
        <title>Little Hotelier | Login</title>
      </Helmet>

      <div>
        <form
          onSubmit={handleLoginUser}
          className="flex flex-col justify-center items-center min-h-screen border z-[200]"
        >
          <div className="bg-green-200 md:w-2/4 p-2 md:p-5 rounded-lg">
            <div className="mb-10">
              <h1 className="text-center font-black md:text-4xl">
                Login Now
              </h1>
            </div>
          
            <div>
              <input
                className="border rounded-lg w-full p-3 mt-3"
                type="email"
                name="email"
                required
                placeholder="Type Your Email"
              />
            </div>
            
            <div className="flex justify-end relative">
              <input
                className="border rounded-lg w-full p-3 mt-3"
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
        <h1 className="text-center text-2xl font-bold ">
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
            <button className="btn bg-blue-200">
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
