import { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../components/authProvider/AuthProvider";


const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { registerUser,updateProfileUser } = useContext(AuthContext);
  const navigate=useNavigate();
  const location=useLocation();
  const from =location?.state || "/";


  const handleRegesterUser = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo=e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

   
    // create user and update profile 

    registerUser(email, password)
      .then((response) => {
        updateProfileUser(name,photo)
        .then(()=>{
            navigate(from);
          
        })
        
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  
  return (
    <div className="bg-blue-200 z-[100] rounded-lg">
      <Helmet>
        <title>Little Hotelier | Register</title>
      </Helmet>

      <div>
        <form
          onSubmit={handleRegesterUser}
          className="flex flex-col justify-center items-center min-h-screen border z-[200]"
        >
          <div className="bg-green-200 md:w-2/4 p-2 md:p-5 rounded-lg">
            <div className="mb-10">
              <h1 className="text-center font-black md:text-4xl">
                Register Now
              </h1>
            </div>
            <div>
              <input
                className="border rounded-lg w-full p-3"
                type="text"
                name="name"
                required
                placeholder="Type Your Name"
              />
            </div>
            <div>
              <input
                className="border rounded-lg w-full p-3 mt-3" 
                type="text"
                name="photo"
                required
                placeholder="Photo URL "
              />
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
            <div>
              <input
                className="border rounded-lg w-full p-3 mt-3"
                type="number"
                name="phnNumber"
                placeholder="Type Your Phone Number"
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
                  <FaEyeSlash className="text-xl absolute top-[50%] right-[10%]" />
                ) : (
                  <FaEye className="text-xl absolute top-[50%] right-[10%]" />
                )}
              </span>
            </div>
            <p className=" mt-5">
              Already have an account ? Please{" "}
              <Link className="text-violet-300 font-bold" to={"/login"}>
                Login now
              </Link>
            </p>
            <div>
              <button className="btn w-full mt-5 text-violet-500 font-black hover:bg-green-600 hover:text-white bg-blue-200">
                Submit
              </button>
            </div>
          </div>
        </form>
       
      </div>
    </div>
  );
};

export default Register;
