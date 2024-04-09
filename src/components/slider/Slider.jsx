import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Autoplay, Navigation } from "swiper/modules";
import { Pagination } from "swiper/modules";
import "./Slider.css";

const Slider = () => {
  return (
    <Swiper
      navigation={true}
      pagination={{ clickable: true }}
      modules={[Navigation, Autoplay, Pagination]}
      loop={true}
      autoplay={{ delay: 2000 }}
    >
      <div className="min-h-screen rounded-lg">
        <SwiperSlide>
          <div className="slide slide1 flex justify-center items-center flex-col space-y-5">
            <h1 className="text-white font-black text-2xl md:text-4xl text-center">
            Courteous treatment will make a customer a walking advertisement.
            </h1>
            <p className="text-white font-black text-xl md:text-2xl text-center">
              You are our beloved customer ,You can chooce our projects.
            </p>
            <label className="input input-bordered flex items-center gap-2 mt-5">
              <input type="text" className="grow" placeholder="Search" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </label>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="slide slide2 flex justify-center items-center flex-col space-y-5">
            <h1 className="text-white font-black text-2xl md:text-4xl text-center">
            “Customers may forget what you said but they will never forget how you made them feel”
            </h1>
            <p className="text-white font-black text-xl md:text-2xl text-center">
              You are our beloved customer ,You can chooce our projects.
            </p>
            <label className="input input-bordered flex items-center gap-2 mt-5">
              <input type="text" className="grow" placeholder="Search" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </label>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="slide slide3 flex justify-center items-center flex-col space-y-5">
            <h1 className="text-white font-black text-2xl md:text-4xl text-center">
            There is no hospitality like understanding.
            </h1>
            <p className="text-white font-black text-xl md:text-2xl text-center">
              You are our beloved customer ,You can chooce our projects.
            </p>
            <label className="input input-bordered flex items-center gap-2 mt-5">
              <input type="text" className="grow" placeholder="Search" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </label>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="slide slide4 flex justify-center items-center flex-col space-y-5">
            <h1 className="text-white font-black text-2xl md:text-4xl text-center">
            Hospitality is about trying to support multiple functions in one space.
            </h1>
            <p className="text-white font-black text-xl md:text-2xl text-center">
              You are our beloved customer ,You can chooce our projects.
            </p>
            <label className="input input-bordered flex items-center gap-2 mt-5">
              <input type="text" className="grow" placeholder="Search" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </label>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="slide slide5 flex justify-center items-center flex-col space-y-5">
            <h1 className="text-white font-black text-2xl md:text-4xl text-center">
              Your Satisfaction Our Desiar
            </h1>
            <p className="text-white font-black text-xl md:text-2xl text-center">
              You are our beloved customer ,You can chooce our projects.
            </p>
            <label className="input input-bordered flex items-center gap-2 mt-5">
              <input type="text" className="grow" placeholder="Search" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </label>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="slide slide6 flex justify-center items-center flex-col space-y-5">
            <h1 className="text-white font-black text-2xl md:text-4xl text-center">
              Your Satisfaction Our Desiar
            </h1>
            <p className="text-white font-black text-xl md:text-2xl text-center">
              You are our beloved customer ,You can chooce our projects.
            </p>
            <label className="input input-bordered flex items-center gap-2 mt-5">
              <input type="text" className="grow" placeholder="Search" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </label>
          </div>
        </SwiperSlide>
      </div>
    </Swiper>
  );
};

export default Slider;
