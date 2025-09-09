


import { useEffect, useState } from "react";
import { Link, useLoaderData, useNavigation } from "react-router";
import {
  MapPin,
  DollarSign,
  ArrowRight,
  XCircle,
  Loader2,
  Heart,
  HeartCrack,
} from "lucide-react";

const BrowseLists = () => {
  const loaderData = useLoaderData();
  const navigation = useNavigation();
  const [error, setError] = useState(null);
  const [lists, setLists] = useState([]);
  const [filteredLists, setFilteredLists] = useState([]);
  const [sortBy, setSortBy] = useState("default");
  const [filterAvailability, setFilterAvailability] = useState("all");

  // Store favorites in component state instead of localStorage
  const [favoriteListings, setFavoriteListings] = useState({});

  useEffect(() => {
    document.title = "Browse Listings | Roommate Finder";
  }, []);

  useEffect(() => {
    if (loaderData?.error) {
      setError(loaderData.error);
    } else if (loaderData) {
      setLists(loaderData);
      setFilteredLists(loaderData);
    }
  }, [loaderData]);

  useEffect(() => {
    let current = [...lists];

    if (filterAvailability !== "all") {
      current = current.filter((list) =>
        filterAvailability === "available"
          ? list.availability === "Available"
          : list.availability !== "Available"
      );
    }

    if (sortBy === "rentAsc") {
      current.sort((a, b) => a.rent - b.rent);
    } else if (sortBy === "rentDesc") {
      current.sort((a, b) => b.rent - a.rent);
    } else if (sortBy === "titleAsc") {
      current.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortBy === "titleDesc") {
      current.sort((a, b) => b.title.localeCompare(a.title));
    }

    setFilteredLists(current);
  }, [lists, sortBy, filterAvailability]);

  const handleFavoriteToggle = (id) => {
    setFavoriteListings((prev) => {
      const updated = { ...prev };
      if (updated[id]) delete updated[id];
      else updated[id] = true;
      return updated;
    });
  };

  const isLoading = navigation.state === "loading";

  if (error) {
    return (
      <div className="px-4 py-10 max-w-7xl mx-auto text-center">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
          <strong className="font-bold flex items-center justify-center mb-2">
            <XCircle className="h-6 w-6 mr-2" /> Error Loading Listings
          </strong>
          <span>{error.message || "Something went wrong."}</span>
          <p className="mt-2 text-sm">
            Try refreshing the page or check your internet connection.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="px-4 py-10 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-10">
        Discover Your Perfect Roommate Match
      </h2>

      <div className="flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-4 mb-8">
        {/* Sort By */}
        <div className="w-full sm:w-auto flex flex-col sm:flex-row items-start sm:items-center gap-2">
          <label htmlFor="sort-by" className="font-medium text-base-content">
            Sort by:
          </label>
          <div className="relative w-full sm:w-56">
            <select
              id="sort-by"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="select select-bordered w-full"
            >
              <option value="default">Default</option>
              <option value="rentAsc">Rent: Low to High</option>
              <option value="rentDesc">Rent: High to Low</option>
              <option value="titleAsc">Title: A-Z</option>
              <option value="titleDesc">Title: Z-A</option>
            </select>
          </div>
        </div>

        {/* Availability */}
        <div className="w-full sm:w-auto flex flex-col sm:flex-row items-start sm:items-center gap-2">
          <label
            htmlFor="filter-availability"
            className="font-medium text-base-content"
          >
            Availability:
          </label>
          <div className="relative w-full sm:w-56">
            <select
              id="filter-availability"
              value={filterAvailability}
              onChange={(e) => setFilterAvailability(e.target.value)}
              className="select select-bordered w-full"
            >
              <option value="all">All</option>
              <option value="available">Available</option>
              <option value="notAvailable">Not Available</option>
            </select>
          </div>
        </div>
      </div>

      {isLoading ? (
        <div className="flex justify-center items-center h-48">
          <Loader2 className="h-10 w-10 animate-spin text-blue-500" />
          <p className="ml-3 text-lg text-gray-600">Loading listings...</p>
        </div>
      ) : filteredLists.length === 0 ? (
        <div className="text-center py-10">
          <p className="text-xl text-gray-600">
            No listings found matching your criteria.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredLists.map((list) => (
            <div
              key={list._id}
              className="card bg-base-100 shadow-sm hover:shadow-xl hover:scale-[1.01] transition-all duration-300 rounded-xl overflow-hidden flex flex-col border border-base-300 relative"
            >
              <button
                onClick={() => handleFavoriteToggle(list._id)}
                className="absolute top-3 right-3 p-2 bg-base-100 rounded-full shadow z-10 text-base-content/70 hover:text-red-500 transition"
              >
                {favoriteListings[list._id] ? (
                  <HeartCrack className="h-6 w-6 fill-red-500 text-red-500" />
                ) : (
                  <Heart className="h-6 w-6" />
                )}
              </button>

              <Link
                to={`/card-details/${list._id}`}
                className="block"
                aria-label={`View details for ${list.title}`}
              >
                <figure className="aspect-video w-full">
                  <img
                    src={list.image || "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"}
                    alt={list.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src =
                        "https://placehold.co/600x400/E5E7EB/6B7280?text=No+Image";
                      e.target.alt = "No image available";
                    }}
                  />
                </figure>
                <div className="card-body p-4 flex flex-col justify-between">
                  <div>
                    <h3 className="card-title text-xl font-semibold text-base-content mb-2">
                      {list.title}
                    </h3>
                    <p className="text-sm text-base-content/70 flex items-center mb-1">
                      <MapPin className="h-4 w-4 mr-2 text-secondary" />
                      {list.location}
                    </p>
                    <p className="text-sm text-base-content/70 flex items-center mt-1">
                      <DollarSign className="h-4 w-4 mr-2 text-success" /> FCFA 
                      {list.rent} / {list.roomType}
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
          ))}
        </div>
      )}
    </div>
  );
};

export default BrowseLists;