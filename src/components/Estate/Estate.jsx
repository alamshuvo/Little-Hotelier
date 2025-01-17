import { Link } from "react-router-dom";
import "aos/dist/aos.css";
import 'animate.css';

const Estate = ({ item }) => {
  return (
    <div >
      <div className="card p-2 md:p-5 bg-[#FFD1E3] shadow-xl  cursor-pointer ">
        <div data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine"
      >
          <figure>
            <img
              src={item.img}
              className=" w-[100%] object-cover h-72 object-center transition duration-300 ease-in-out hover:scale-110 "
              alt={item.segment_name}
            />
          </figure>
        </div>
        <div className="card-body" data-aos="flip-left">
          <h2 className="card-title text-center animate__animated animate__wobble">{item.estate_title}</h2>
          <h1 className="text-2xl font-bold text-[#FFFAB7] mt-5">
            {" "}
            Our facilities
          </h1>
          <div className="flex flex-col md:flex-row justify-between gap-2 font-bold">
            {item.facilities
              .map((a, b) => (
                <div key={b}>
                  <div className="font-bold text-[#7EA1FF]">{a}</div>
                </div>
              ))
              .slice(0, 2)}
          </div>
          <div className="font-bold text-[#7EA1FF] flex justify-center items-center mt-5 ">
            <p>Status</p>
            {item.status}
          </div>
          <div className="card-actions mt-5" data-aos="fade-down">
            <Link to={`test/${item.id}`}>
              <button className="btn text-[#FFFAB7] bg-[#5BBCFF] hover:bg-blue-300">
                View Property
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Estate;
