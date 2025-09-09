import React from "react";
import { Link } from "react-router";

const NotFound = () => {
  return (
    <section className="flex justify-center items-center h-screen">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <div className="max-w-md text-center">
          <h2 className=" text-pink-400 mb-8 font-extrabold text-9xl">
            <span className="sr-only">Error</span>404
          </h2>
          <p className="text-2xl font-semibold md:text-3xl">
            Sorry, we couldn't find this page.
          </p>
          <p className="mt-4 mb-8 dark:text-gray-600">
            But dont worry, you can find FreshFarmers of other things on our
            homepage.
          </p>
          <Link
            to="/"
            className="px-8 py-4 font-semibold rounded-full bg-pink-500 text-gray-50"
          >
            Back to homepage
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
