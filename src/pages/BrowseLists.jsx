import { useEffect, useState } from "react";
import { Link, useLoaderData, useNavigation } from "react-router-dom";
import {
  MapPin,
  DollarSign,
  ArrowRight,
  XCircle,
  Loader2,
  Heart,
  HeartCrack,
  Calendar,
  Star,
  Eye,
} from "lucide-react";

const BrowseLists = () => {
  const loaderData = useLoaderData();
  const navigation = useNavigation();
  const [error, setError] = useState(null);
  const [lists, setLists] = useState([]);
  const [filteredLists, setFilteredLists] = useState([]);
  const [sortBy, setSortBy] = useState("default");
  const [filterAvailability, setFilterAvailability] = useState("all");
  const [favoriteListings, setFavoriteListings] = useState({});
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    document.title = "Browse Listings | Roommate Finder";
  }, []);

  useEffect(() => {
    if (loaderData?.error) {
      setError(loaderData.error);
    } else if (loaderData) {
      // Add mock data for new sorting options if not present
      const enhancedData = loaderData.map(item => ({
        ...item,
        // Add createdDate if not present (for date sorting)
        createdDate: item.createdDate || new Date(Date.now() - Math.floor(Math.random() * 10000000000)).toISOString(),
        // Add viewCount if not present (for popularity sorting)
        viewCount: item.viewCount || Math.floor(Math.random() * 1000),
        // Add rating if not present (for popularity sorting)
        rating: item.rating || (Math.random() * 5).toFixed(1)
      }));
      setLists(enhancedData);
      setFilteredLists(enhancedData);
    }
  }, [loaderData]);

  useEffect(() => {
    let current = [...lists];

    // Apply search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      current = current.filter(list => 
        list.title.toLowerCase().includes(query) ||
        list.description.toLowerCase().includes(query) ||
        (list.location && list.location.toLowerCase().includes(query))
      );
    }

    // Apply availability filter
    if (filterAvailability !== "all") {
      current = current.filter((list) =>
        filterAvailability === "available"
          ? list.availability === "Available"
          : list.availability !== "Available"
      );
    }

    // Apply sorting
    switch (sortBy) {
      case "rentAsc":
        current.sort((a, b) => a.rent - b.rent);
        break;
      case "rentDesc":
        current.sort((a, b) => b.rent - a.rent);
        break;
      case "titleAsc":
        current.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "titleDesc":
        current.sort((a, b) => b.title.localeCompare(a.title));
        break;
      case "newest":
        current.sort((a, b) => new Date(b.createdDate) - new Date(a.createdDate));
        break;
      case "oldest":
        current.sort((a, b) => new Date(a.createdDate) - new Date(b.createdDate));
        break;
      case "popular":
        current.sort((a, b) => b.viewCount - a.viewCount);
        break;
      case "rating":
        current.sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating));
        break;
      default:
        // Default sorting (no change)
        break;
    }

    setFilteredLists(current);
  }, [lists, sortBy, filterAvailability, searchQuery]);

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

      {/* Search Bar */}
      <div className="mb-8">
        <div className="relative max-w-2xl mx-auto">
          <input
            type="text"
            placeholder="Search by title, description, or location..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-3 pl-12 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute inset-y-0 right-0 pr-3 flex items-center"
            >
              <XCircle className="h-5 w-5 text-gray-400 hover:text-gray-600" />
            </button>
          )}
        </div>
      </div>

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
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
              <option value="popular">Most Popular</option>
              <option value="rating">Highest Rated</option>
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
          {(searchQuery || filterAvailability !== "all") && (
            <button
              onClick={() => {
                setSearchQuery("");
                setFilterAvailability("all");
                setSortBy("default");
              }}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
            >
              Clear Filters
            </button>
          )}
        </div>
      ) : (
        <>
          <div className="mb-4 text-sm text-gray-600">
            Showing {filteredLists.length} of {lists.length} listings
          </div>
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
                      <h3 className="card-title text-lg font-semibold mb-2 line-clamp-1">
                        {list.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                        {list.description}
                      </p>
                      
                      <div className="flex items-center mb-2">
                        <MapPin className="h-4 w-4 text-gray-500 mr-1" />
                        <span className="text-sm text-gray-600">
                          {list.location || "Location not specified"}
                        </span>
                      </div>
                      
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center">
                          <DollarSign className="h-4 w-4 text-gray-500 mr-1" />
                          <span className="font-semibold">${list.rent}</span>
                          <span className="text-sm text-gray-600 ml-1">/month</span>
                        </div>
                        
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-yellow-500 fill-yellow-500 mr-1" />
                          <span className="text-sm font-medium">{list.rating}</span>
                        </div>
                      </div>
                      
                      <div className="flex justify-between items-center text-xs text-gray-500">
                        <div className="flex items-center">
                          <Calendar className="h-3 w-3 mr-1" />
                          {new Date(list.createdDate).toLocaleDateString()}
                        </div>
                        <div className="flex items-center">
                          <Eye className="h-3 w-3 mr-1" />
                          {list.viewCount} views
                        </div>
                      </div>
                    </div>
                    
                    <div className="card-actions mt-4">
                      <button className="btn btn-primary btn-sm w-full flex items-center justify-center">
                        View Details <ArrowRight className="h-4 w-4 ml-2" />
                      </button>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default BrowseLists;