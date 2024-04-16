import "animate.css";
import { Link } from "react-router-dom";
const WhyChoceUs = () => {
  return (
    <div
      className="mt-10 bg-fuchsia-100 md:p-10 p-5 cursor-pointer"
      data-aos="fade-up"
    >
      <div className="flex justify-center items-center ">
        <h1 className="md:text-3xl text-2xl font-black ">Why Choce Us</h1>
      </div>
      {/* card */}
      <div
        className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5  md:p-5 p-2 "
        data-aos="fade-right"
      >
        <div className="card w-full bg-base-100 shadow-xl hover:bg-blue-400 hover:text-white">
          <div className="card-body">
            <h2 className="card-title animate__animated animate__swing">
              Parking Space
            </h2>
            <p>
              Compact, secure parking space available for rent in a prime
              downtown location. Convenient access to public transportation and
              nearby amenities. Reserve your spot today for hassle-free parking
            </p>
            <div className="card-actions ">
              <Link to={"/contact"}>
                <button className="btn bg-green-300">Contact Us</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="card w-full bg-base-100 shadow-xl hover:bg-blue-400 hover:text-white">
          <div className="card-body">
            <h2 className="card-title animate__animated animate__swing">
              Swimming Pool
            </h2>
            <p>
              Dive into luxury with our sparkling swimming pool. Relax poolside
              in a serene atmosphere, surrounded by lush greenery. Perfect for
              unwinding and soaking up the sun. Join us for a refreshing
              escape!
            </p>
            <div className="card-actions ">
              <Link to={"/contact"}>
                <button className="btn bg-green-300">Contact Us</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="card w-full bg-base-100 shadow-xl hover:bg-blue-400 hover:text-white">
          <div className="card-body">
            <h2 className="card-title animate__animated animate__swing">
              Private Security
            </h2>
            <p>
            Stay protected with our top-notch private security services. Highly trained personnel equipped with cutting-edge technology ensure your safety and peace of mind around the clock. Your safety is our priority
            </p>
            <div className="card-actions ">
              <Link to={"/contact"}>
                <button className="btn bg-green-300">Contact Us</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="card w-full bg-base-100 shadow-xl hover:bg-blue-400 hover:text-white">
          <div className="card-body">
            <h2 className="card-title animate__animated animate__swing">
              Parking Space
            </h2>
            <p>
              Compact, secure parking space available for rent in a prime
              downtown location. Convenient access to public transportation and
              nearby amenities. Reserve your spot today for hassle-free parking
            </p>
            <div className="card-actions ">
              <Link to={"/contact"}>
                <button className="btn bg-green-300">Contact Us</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="card w-full bg-base-100 shadow-xl hover:bg-blue-400 hover:text-white">
          <div className="card-body">
            <h2 className="card-title animate__animated animate__swing">
              Parking Space
            </h2>
            <p>
              Compact, secure parking space available for rent in a prime
              downtown location. Convenient access to public transportation and
              nearby amenities. Reserve your spot today for hassle-free parking
            </p>
            <div className="card-actions ">
              <Link to={"/contact"}>
                <button className="btn bg-green-300">Contact Us</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="card w-full bg-base-100 shadow-xl hover:bg-blue-400 hover:text-white">
          <div className="card-body">
            <h2 className="card-title animate__animated animate__swing">
              Parking Space
            </h2>
            <p>
              Compact, secure parking space available for rent in a prime
              downtown location. Convenient access to public transportation and
              nearby amenities. Reserve your spot today for hassle-free parking
            </p>
            <div className="card-actions ">
              <Link to={"/contact"}>
                <button className="btn bg-green-300">Contact Us</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChoceUs;
