import { Helmet } from "react-helmet-async";
import { Link, useLoaderData, useParams } from "react-router-dom";

const ViewProperty = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const details = data.find((item) => item.id == id);
  return (
    <div>
      <Helmet>
        <title>Little Hotelier | Property {id}</title>
      </Helmet>
      <section>
        <div className="bg-[#FFD1E3] text-[#7EA1FF]">
          <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 dark:text-gray-50">
          <h1 className="md:text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl text-gray-50 mb-10">
              {details.segment_name}
            </h1>
            <h1 className="md:text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl text-gray-50">
              {details.estate_title}
            </h1>
            <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl dark:text-gray-50">
             {details.description}
            </p>
            <div className="flex flex-wrap justify-center">
            <Link to={"/contact"}>
            <button
                type="button"
                className="px-8 py-3 m-2 text-lg font-semibold rounded bg-gray-100  text-gray-900"
              >
                Contact Us
              </button>
            </Link>
             <Link to={"/"}>
             <button
                type="button"
                className="px-8 py-3 m-2 text-lg border rounded border-gray-300 text-gray-50"
              >
                Home
              </button>
              </Link>
            </div>
            <div className="hover:bg-blue-200 p-4 space-y-4 rounded-lg hover:text-black font-bold md:text-xl">
               <p >Area of</p> {details.estate_title} :<p> {details.area}</p> 
               <p>Location of</p> {details.estate_title} :<p> {details.location}</p> 
               <p>$ Price</p> {details.estate_title} :<p> {details.price}</p> 
               <p>Status</p> {details.estate_title} :<p> {details.status}</p> 
              
          </div>
          </div>
          
        </div>

        <img
          src={details.img}
          alt=""
          className="w-5/6 mx-auto mb-12 -mt-20 dark:bg-gray-500 rounded-lg shadow-md lg:-mt-40"
        />
      </section>
    </div>
  );
};

export default ViewProperty;
