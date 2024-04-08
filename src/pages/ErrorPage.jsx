
import { Helmet } from "react-helmet-async";
import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error=useRouteError()
  return (
    <div className="hero min-h-screen bg-base-200">
        <Helmet>
            <title>Little Hotelier | Error page</title>
        </Helmet>
      <div className="hero-content text-center">
        <div className="md:max-w-md">
          <h1 className="md:text-5xl font-bold">{error.statusText || error.message}</h1>
          {
                error.status== 404 && <div>
                    <h2>Page not found</h2>
                    <p>Go back where you form </p>
                    <Link to={"/"}><button className="btn   bg-green-300 rounded-lg mt-10 hover:bg-green-100 hover:text-black text-white">Home</button></Link>
                </div>
            }
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
