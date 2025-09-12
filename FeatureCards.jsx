import React from "react";
import FeatureCard from "./FeatureCard"; // Adjust path if needed

const FeatureGrid = ({ lists }) => {

  return (
    <div className="px-4 py-10 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8">
        Featured Roommate Listings
      </h2>

      {lists?.length === 0 ? (
        <div className="text-center py-10">
          <p className="text-xl text-gray-600">No featured listings available.</p>
          <p className="text-md text-gray-500 mt-2">Check back soon for updates!</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {lists.map((list) => (
            <FeatureCard key={list._id} list={list} />
          ))}
        </div>
      )}
    </div>
  );
};

export default FeatureGrid;
