import React from "react";
import team from "../assets/team.avif";
import { CiCircleCheck } from "react-icons/ci";

const Benifits = () => {
  return (
    <div className="py-8 md:py-16 px-4">
      <div className="max-w-screen-xl mx-auto md:flex justify-center items-center gap-10">
        {/* Image Section */}
        <div className="md:w-1/2 mb-6 md:mb-0">
          <img
            className="w-full h-72 md:h-96 object-cover rounded-xl"
            src={team}
            alt="Benefits"
          />
        </div>

        {/* Content Section */}
        <div className="md:w-1/2 space-y-5 text-base-content">
          <h2 className="text-xl md:text-3xl font-bold">
            Why use RoomMate?
          </h2>
          <p className="text-sm md:text-base">
            RoomMate is a one-stop destination for anyone looking for roommates,
            flatmates, co-living spaces, or PGs.
          </p>
          <div className="space-y-2 text-sm md:text-base">
            <p className="flex items-center gap-2">
              <CiCircleCheck className="text-secondary" size={20} />
              Efficient Matching Based on Preferences
            </p>
            <p className="flex items-center gap-2">
              <CiCircleCheck className="text-secondary" size={20} />
              Verified Profiles and Safety Features
            </p>
            <p className="flex items-center gap-2">
              <CiCircleCheck className="text-secondary" size={20} />
              Location-based search
            </p>
            <p className="flex items-center gap-2">
              <CiCircleCheck className="text-secondary" size={20} />
              Saves time and effort
            </p>
          </div>

          {/* Button */}
          <a href="/browse-lists">
            <button className="btn btn-secondary rounded-full px-6 h-11 text-sm md:text-base">
            Find Roommate
          </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Benifits;
