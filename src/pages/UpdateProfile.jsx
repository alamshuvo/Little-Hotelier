
import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../components/authProvider/AuthProvider";
import 'react-toastify/dist/ReactToastify.css';
import 'animate.css';
import { useLocation, useNavigate } from "react-router-dom";


const UpdateProfile = () => {
    // const {updateProfileUser}=useContext(AuthContext);
    const { updateTotalProfile} = useContext(AuthContext);
    const navigate=useNavigate()
    const location=useLocation()
    const from =location?.state || "/"


    const handleUpdateProfile=(e)=>{
        e.preventDefault();
        const name = e.target.name.value;
        const photo=e.target.photo.value;
        updateTotalProfile(name,photo)
        .then(() => {
            // Profile updated!
            // console.log("profile updated finally");
            navigate(from)
            console.log(name,photo);
            // ...
          }).catch((error) => {
            // An error occurred
            // ...
          });
      
    }
  return (
    <div className="min-h-screen  justify-center items-center flex bg-green-200 flex-col space-y-5">
      <Helmet>
        <title>Little Hotelier | Update Profile</title>
      </Helmet>
      <div>
        <h1 className="text-3xl font-black animate__animated animate__bounce">Update Your  Profile</h1>
      </div>
      <div className=" md:w-2/4  ">
        <form onSubmit={handleUpdateProfile}>
        <div className="w-full ">
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
        <div className="mt-5">
           {/* <Link to={"/profile"}> <button  className="btn w-full mt-5 bg-blue-200 hover:bg-green-600 hover:text-white">Save Change</button></Link> */}
           <button className="btn w-full mt-5 bg-blue-200 hover:bg-green-600 hover:text-white">Save Change</button>
        </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
