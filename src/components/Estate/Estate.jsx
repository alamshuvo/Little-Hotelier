import { Link } from "react-router-dom";
// import AOS from "aos";
// import "aos/dist/aos.css";

const Estate = ({ item }) => {
  return (
    <div >
      <div className="card p-2 md:p-5 bg-base-100 shadow-xl  cursor-pointer ">
        <div >
          <figure>
            <img
              src={item.img}
              className=" w-[100%] object-cover h-72 object-center transition duration-300 ease-in-out hover:scale-110 "
              alt={item.segment_name}
            />
          </figure>
        </div>
        <div className="card-body ">
          <h2 className="card-title text-center">{item.estate_title}</h2>
          <h1 className="text-2xl font-bold text-green-400 mt-5">
            {" "}
            Our facilities
          </h1>
          <div className="flex flex-col md:flex-row justify-between gap-2 font-bold">
            {item.facilities
              .map((a, b) => (
                <div key={b}>
                  <div className="font-bold text-blue-300">{a}</div>
                </div>
              ))
              .slice(0, 2)}
          </div>
          <div className="font-bold text-blue-300 flex justify-center items-center mt-5 ">
            <p>Status</p>
            {item.status}
          </div>
          <div className="card-actions mt-5">
            <Link to={`${item.id}`}>
              <button className="btn bg-green-400 text-white hover:bg-blue-300">
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
