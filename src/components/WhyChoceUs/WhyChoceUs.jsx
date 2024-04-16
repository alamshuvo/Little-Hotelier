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
              Smart Homes
            </h2>
            <p>
            Experience the future of living with our smart homes. Control lighting, temperature, security, and more with ease from your smartphone. Enjoy convenience, comfort, and energy efficiency at your fingertips.
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
              King Size Bed
            </h2>
            <p>Indulge in royal comfort with our king-size bed. Ample space for luxurious lounging and peaceful slumber. Elevate your bedroom experience with plushness fit for royalty.
          
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
              Kid's Playland
            </h2>
            <p>
            Let imaginations soar at our vibrant kids' playland. Packed with interactive games, slides, and creative zones, it's a haven for fun and laughter. Unleash endless adventures for your little ones today!
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
              Medical Center
            </h2>
            <p>
            Discover exceptional care at our state-of-the-art medical center. Expert staff, advanced technology, and compassionate service ensure optimal health and well-being for every patient. Your health is our priority.
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
