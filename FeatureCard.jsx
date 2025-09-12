import React from "react";
import { Link } from "react-router";
import { MapPin, DollarSign, ArrowRight } from "lucide-react";

const FeatureCard = ({ list }) => {
  const { _id, title, location, rent, roomType, image } = list;

  return (
    <div className="card bg-base-100 shadow-sm hover:shadow-xl hover:scale-[1.01] transition-all duration-300 rounded-xl overflow-hidden border border-base-300">
      <Link
        to={`/card-details/${_id}`}
        className="block"
        aria-label={`View details for ${title}`}
      >
        <figure className="aspect-video w-full">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "https://placehold.co/600x400/E5E7EB/6B7280?text=No+Image";
              e.target.alt = "No image available";
            }}
          />
        </figure>

        <div className="card-body p-4 flex flex-col justify-between text-base-content">
          <div>
            <h3 className="card-title text-xl font-semibold mb-2">
              {title}
            </h3>

            <p className="text-sm flex items-center mb-1">
              <MapPin className="h-4 w-4 mr-2 text-primary" />
              {location}
            </p>

            <p className="text-sm flex items-center mt-1">
              <DollarSign className="h-4 w-4 mr-2 text-success" />
              ${rent} / {roomType}
            </p>
          </div>

          <div className="card-actions mt-4">
            <button className="btn btn-secondary w-full flex items-center justify-center gap-2 text-white">
              View Details <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default FeatureCard;
